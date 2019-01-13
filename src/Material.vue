<template>
  <layout>
    <menu-item slot="header"></menu-item>
    <material-item slot="left-bar"></material-item>
    <div slot="container" class="map" ref='mapWrap'>
      <img src="./assets/map.jpg" alt="" :style="`width: ${imgWidth}px; height: ${imgHeight}px`">
      <div class="anchor">
        <div
          class="anchor-cont"
          v-for="(item, idx) in calPointList"
          :key="idx"
          :style="calStyle(item)"
        >
          <div class="tip" v-show="activePoint[idx] && activePoint[idx].active">
            {{activePoint[idx] && activePoint[idx].licence}}
          </div>
          <div :class="['pulse', activePoint[idx] && activePoint[idx].active ? 'active' : '']"></div>
        </div>
      </div>
    </div>
    <company-item slot="bottom-bar"></company-item>
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
const pointList = [[1005,487], [-200,426], [-1092,-310], [-285,-860], [880,-547]]
// let pointList = [
//   { coordinate: [1005,487] },
//   { coordinate: [-200,426] },
//   { coordinate: [-1092,-310] },
//   { coordinate: [-285,-860] },
//   { coordinate: [880,-547] }
// ]
export default {
  data() {
    return {
      imgWidth: 100,
      imgHeight: 0,
      imgprop: 1,
      activePoint: []
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
      console.log(this.imgprop)
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
    _this.activePoint = {
      1: {
        licence: '渝A K8888',
        active: true
      },
      4:{
        licence: '渝B K9999',
        active: true
      }
    }
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
    }
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
