<template>
  <layout>
    <menu-item slot="header" :title-list="headerTitle"></menu-item>
    <material-item slot="left-bar" :materialData="activePoint"></material-item>
    <div slot="container" class="map" ref='mapWrap'>
      <img src="./assets/map.jpg" alt="" :style="`width: ${imgWidth}px; height: ${imgHeight}px`">
      <div class="anchor">
        <div
          class="anchor-cont"
          v-for="(item, idx) in calPointList"
          :key="idx"
          :style="calStyle(item)"
        >
          <div class="tip" v-show="isPointActive(idx)">
            {{isPointActive(idx) && isPointActive(idx).licenseplate}}
          </div>
          <div :class="['pulse', isPointActive(idx) ? 'active' : '']"></div>
        </div>
      </div>
    </div>
    <title-left slot="left-menu"></title-left>
    <title-right slot="right-menu"></title-right>
  </layout>
</template>
<script>
import menuItem from "./components/MenuItem.vue";
import materialItem from "./components/MaterialItem.vue";
import companyItem from "./components/CompanyItem.vue";
import titleLeft from './components/TitleLeft.vue';
import titleRight from './components/TitleRight.vue';

import ajax from './utils/ajax'

const pointList = [[1005,487], [-200,426], [-1092,-310], [-285,-860], [880,-547]]
const headerTitle={monitor: '在途监控', management: '任务配送管理'}
export default {
  data() {
    return {
      imgWidth: 100,
      imgHeight: 0,
      imgprop: 1,
      activePoint: [],
      headerTitle,
      queryInterval: null
    };
  },
  components: {
    menuItem,
    materialItem,
    companyItem,
    titleRight,
    titleLeft
  },
  computed: {
    calPointList: function(){
      return pointList.map(item => {
        const { imgprop } = this
        return [item[0]/imgprop, item[1]/imgprop]
      })
    }
  },
  mounted() {
    const _this = this
    _this.changeWidth()
    window.addEventListener("resize", _this.changeWidth.bind(_this))
    _this.querydata()
    _this.queryInterval = window.setInterval(_this.querydata, 2000)
    // _this.activePoint = [
    // {
    //     "trajectoryid": 1,
    //     "trajectorycode": "170a58f39b3948199ab02e2986b0b338",
    //     "createtime": "2019-01-07 15:02:13.180",
    //     "carname": "长安",
    //     "licenseplate": "渝A123456",
    //     "readerid": "55",
    //     "carrfid": "792950535",
    //     "backtime": "2019-01-07 15:02:13.190",
    //     "hexreaderid": "00 37",
    //     "hexcarrfid": "2F 43 77 07"
    // },
    // {
    //     "trajectoryid": 2,
    //     "trajectorycode": "089ad401a68a45d5bd17cd7d7914601d",
    //     "createtime": "2019-01-07 14:57:14.253",
    //     "carname": "长安",
    //     "licenseplate": "渝A123456",
    //     "readerid": "55",
    //     "carrfid": "792950535",
    //     "backtime": "2019-01-07 14:57:14.254",
    //     "hexreaderid": "00 37",
    //     "hexcarrfid": "2F 43 77 07"
    // }
// ]

  },
  methods: {
    changeWidth() {
      const wrapWidth = this.$refs.mapWrap.clientWidth
      const wrapHeight = this.$refs.mapWrap.clientHeight
      if (wrapWidth > wrapHeight * 2){
        this.imgWidth = wrapHeight * 2
        this.imgHeight = wrapHeight
        this.imgprop = 2176 / wrapHeight
      } else {
        this.imgWidth = wrapWidth
        this.imgHeight = wrapWidth / 2
        this.imgprop = 4325 / wrapWidth
      }
    },
    calStyle(item){
      const coordinate = item
      return `transform: translateX(${coordinate[0]}px) translateY(${coordinate[1]}px)`
    },
    isPointActive(idx){
      return this.activePoint.find(item => item.readerid.includes(idx+1))
    },
    querydata(){
      const _this = this
      ajax({
        url: 'http://116.62.30.175:8004/API/VehicleMonitor/MonitorQuery.ashx',
        method: 'post',
        data: JSON.stringify({
          userid: '',
          username: '',
          page: ''
        })
      }).then(res => {
        _this.activePoint = res.Entity
      })
    }
  },
  destroyed() {
    clearInterval(this.queryInterval)
  }
};
</script>
<style scoped>
  @import './assets/styles/animate.css';
  .map{
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .map img{
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
  }
  .anchor{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 1px;
    z-index: 99;
  }
  .anchor-cont{
    position: relative;
  }
  .tip{
    position: absolute;
    top: -2rem;
    left: 2rem;
    width: 12rem;
    height: 3.6rem;
    line-height: 3.6rem;
    font-size: 2.2rem;
    color: #ffffff;
    background-color: rgba(88,246, 240, .5);
  }
</style>
