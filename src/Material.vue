<template>
  <layout>
    <menu-item slot="header" :title-list="headerTitle"></menu-item>
    <material-item
      slot="left-bar"
      :materialData="allPoint"
      :getMaterialDetail="getMaterialDetail"
    ></material-item>
    <div slot="container" class="map" ref="mapWrap">
      <img
        class="map-bg"
        src="./assets/map.jpg"
        alt
        :style="`width: ${imgWidth}px; height: ${imgHeight}px`"
      >
      <div class="anchor">
        <div
          class="anchor-cont"
          v-for="(item, idx) in calPointList"
          :key="idx"
          :style="calStyle(item)"
        >
          <div
            class="tip"
            v-show="isPointActive(idx)"
          >{{isPointActive(idx) && activePoint.licenseplate}}</div>
          <div :class="['pulse', isPointActive(idx) ? 'active' : '']"></div>
          <div class="order">{{pointOrder(idx)}}</div>
        </div>
        <div
            class="anchor-line"
            v-for="(item, idx) in calLinePointList"
            :key="idx+'line'"
            :style="calStyle(item)"
          >
            <!-- v-if="idx < calLinePointList.length" -->
          <img
            v-show="isLineActive(idx)"
            :class="isLineActive(idx) ? 'active' : ''"
            :ref="`line${idx}`"
            :src="require(`./assets/map/line${idx + 1}.png`)"
            alt="l"
          >
        </div>
      </div>
      <material-detail
        :isModalDisable="isModalDisable"
        :setModalDisable="setModalDisable"
        :materialDetail="materialDetail"
      >
      </material-detail>
    </div>
    <title-right slot="right-menu" :linkObj="linkObj"></title-right>
  </layout>
</template>
<script>
import menuItem from "./components/MenuItem.vue";
import materialItem from "./components/MaterialItem.vue";
import companyItem from "./components/CompanyItem.vue";
import titleLeft from "./components/TitleLeft.vue";
import titleRight from "./components/TitleRight.vue";
import materialDetail from "./components/MaterialDetail"

import ajax from "./utils/ajax";

const pointList = [
  [-287, 180],
  [-677, -687],
  [601, -489],
  [593, 194],
  [579, 660]
];
//线的定位点，统一实现left：0，top：0，12两线都基于点2定位
const linePointList = [
  [-695, -685],
  [-675, -703],
  [595, -480],
  [580, 194],
  [-133, 183]
];
const headerTitle = { monitor: "在途监控", management: "任务配送管理" };
const defaultW = 3000;
const defaultH = 1885;
const defaultProp = defaultW / defaultH;
export default {
  data() {
    return {
      imgWidth: 100,
      imgHeight: 0,
      imgprop: 1,
      allPoint: [],
      activePoint: {},
      activeLine: [],
      headerTitle,
      queryInterval: null,
      linkObj: {
        link: "#/storage",
        title: "出库物资一览"
      },
      isModalDisable: false,
      materialDetail: {
          carname: '',
          licenseplate: '',
          MaterialList: []
        }
    };
  },
  components: {
    menuItem,
    materialItem,
    companyItem,
    titleRight,
    titleLeft,
    materialDetail
  },
  computed: {
    calPointList: function() {
      return pointList.map(item => {
        const { imgprop } = this;
        return [item[0] / imgprop, item[1] / imgprop];
      });
    },
    calLinePointList: function() {
      return linePointList.map(item => {
        const { imgprop } = this;
        return [item[0] / imgprop, item[1] / imgprop];
      });
    },
    calActiveLine: function() {
      const activeLine = this.activeLine
      //[2,3,4] => [23,34];[3,2] => [23];
      return activeLine.reduce((total, curr, index) => {
        if(index){
          const last = activeLine[index - 1]
          const arr = [last, curr]
          total.push(arr.sort().join(''))
          return total
        }
        return []
      },[]) || []
    }
  },
  mounted() {
    const _this = this;
    _this.changeWidth();
    window.addEventListener("resize", _this.changeWidth.bind(_this));
    _this.querydata();

    // dom ready
    _this.changeImageWidth();

    // document.addEventListener('mouseup',function(e){
    //   console.log(e)
    //   if(!e.target.innerHTML.contains(e.target)){
    //     _this.setModalDisable(false)
    //   }
    // })
  },
  updated() {
    this.changeImageWidth();
  },
  methods: {
    changeImageWidth() {
      const $refs = this.$refs;
      Object.keys($refs).map(key => {
        if (key.startsWith("line")) {
          if (!this[`${key}_width`]) {
            this[`${key}_width`] = this.$refs[key][0].width;
          }
          const width = this[`${key}_width`];

          this.$refs[key][0].style.visibility = "visible";
          if (width) {
            this.$refs[key][0].width = width / this.imgprop;
          }
        }
      });
    },
    changeWidth() {
      const wrapWidth = this.$refs.mapWrap.clientWidth;
      const wrapHeight = this.$refs.mapWrap.clientHeight;
      if (wrapWidth > wrapHeight * defaultProp) {
        this.imgWidth = wrapHeight * defaultProp;
        this.imgHeight = wrapHeight;
        this.imgprop = defaultH / wrapHeight;
      } else {
        this.imgWidth = wrapWidth;
        this.imgHeight = wrapWidth / defaultProp;
        this.imgprop = defaultW / wrapWidth;
      }
      this.changeImageWidth();
    },
    calStyle(item) {
      const coordinate = item;
      return `transform: translateX(${coordinate[0]}px) translateY(${
        coordinate[1]
      }px)`;
    },
    pointOrder(idx) {
      const traData = this.activePoint.TrajectoryList
      const res = traData && traData.filter(item => item.pointNum == idx + 1)
      return res ? res.reduce((total, curr) => {
        return total ? `${total}.${curr.order}` : curr.order
      },'') : ''
    },
    isPointActive(idx) {
      const traData = this.activePoint.TrajectoryList
      return (
        traData &&
        traData[traData.length - 1].pointNum == idx + 1
      );
    },
    isLineActive(idx) {
      //第五点，14线
      const lineActive = idx < 4 ? `${idx+1}${idx+2}` : '14'
      return this.calActiveLine.includes(lineActive)
    },
    querydata() {
      const _this = this;
      ajax({
        url: "API/VehicleMonitor/MonitorQuery.ashx",
        method: "post",
        data: JSON.stringify({
          userid: "",
          username: "",
          page: ""
        })
      }).then(res => {
        const length = res.Entity.length;
        var i = 0;
        const setMaterial = () => {
          if (i < length) {
            _this.allPoint = res.Entity;
            _this.activePoint = res.Entity[i];
            _this.activePoint.TrajectoryList = _this.activePoint.TrajectoryList.reverse()
            _this.activeLine = []
            _this.activePoint.TrajectoryList.map((curr, index) => {
              const pointNum = Number(curr.readerid)/11;
              _this.activePoint.TrajectoryList[index].order = index + 1;
              _this.activePoint.TrajectoryList[index].pointNum = pointNum;
              _this.activeLine.push(pointNum);
            })
            // console.warn(_this.activePoint, _this.activeLine)
            setTimeout(setMaterial, 5000);
            i++;
          } else {
            //循环后重新查询
            _this.querydata();
          }
        };
        setMaterial();
      });
    },
    getMaterialDetail(licenseplate){
      const _this = this
      ajax({
        url: "API/VehicleMonitor/GetOutMaterialByCar.ashx",
        method: "post",
        data: JSON.stringify({
          licenseplate
        })
      }).then(res => {
        _this.setModalDisable(true);
        _this.materialDetail = res.Entity;
      })
    },
    setModalDisable(boolean){
      this.isModalDisable = boolean
    }
  },
  destroyed() {
    clearInterval(this.queryInterval);
  }
};
</script>
<style scoped>
@import "./assets/styles/animate.css";
.map {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.map .map-bg {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
}
.anchor {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 1px;
  z-index: 99;
}
.anchor-cont {
  position: relative;
  z-index: 100;
}
.anchor-line {
  position: relative;
  width: 0;
  height: 0;
  left: -.1rem;
  top: -.1rem;
}
.anchor-line img {
  visibility: hidden;
}
.anchor-line img.active{
  animation: pulse 1.5s ease-in infinite;
}
.tip {
  position: absolute;
  top: -2rem;
  left: 2rem;
  width: 12rem;
  height: 3.6rem;
  line-height: 3.6rem;
  font-size: 2.2rem;
  color: #ffffff;
  background-color: rgba(88, 246, 240, 0.5);
}
.order{
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.4rem;
  color: red;
}
@keyframes pulse {
  0% {
    opacity: 1;
  }
  100% {
    opacity: .5;
  }
}
</style>
