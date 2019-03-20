<template>
  <layout>
    <menu-item slot="header" :title-list="headerTitle"></menu-item>
    <material-item slot="left-bar" :materialData="allPoint"></material-item>
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
        </div>
        <div
            class="anchor-line"
            v-for="(item, idx) in calLinePointList"
            :key="idx+'line'"
            :style="calStyle(item)"
          >
          <img
            v-if="idx >= 1"
            v-show="isLineActive(idx)"
            :ref="`line${idx}`"
            :src="require(`./assets/map/line${idx + 1}.png`)"
            alt="l"
          >
        </div>
      </div>
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

import ajax from "./utils/ajax";

const pointList = [
  [579, 660],
  [593, 194],
  [601, -489],
  [-677, -687],
  [-287, 180]
];
//线的定位点，统一实现left：0，top：0，四五两点都基于点4定位
const linePointList = [
  [579, 660],
  [593, 194],
  [601, -489],
  [-677, -687],
  [-677, -687],
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
      headerTitle,
      queryInterval: null,
      linkObj: {
        link: "#/storage",
        title: "出库物资一览"
      }
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
    }
  },
  mounted() {
    const _this = this;
    _this.changeWidth();
    window.addEventListener("resize", _this.changeWidth.bind(_this));
    _this.querydata();

    // dom ready
    _this.changeImageWidth();
    // console.warn($refs)
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
    isPointActive(idx) {
      return (
        this.activePoint.TrajectoryList &&
        this.activePoint.TrajectoryList[0].readerid.includes(idx + 1)
      );
    },
    isLineActive(idx) {
      const traData = this.activePoint.TrajectoryList
      if(traData && traData.length > 1) {
        const res = traData.find((item, index) => {
          return index<traData.length - 1 && item.readerid.includes(idx + 1)
        })
        return res
      }
      return false
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
            // const trajectoryList = res.Entity[i].TrajectoryList
            // _this.activePoint=trajectoryList[0]
            setTimeout(setMaterial, 5000);
            i++;
          } else {
            //循环后重新查询
            _this.querydata();
          }
        };
        setMaterial();
        // _this.activePoint = res.Entity
      });
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
}
.anchor-line {
  position: relative;
  width: 0;
  height: 0;
  left: -5px;
  top: -5px;
}
.anchor-line img {
  visibility: hidden;
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
</style>
