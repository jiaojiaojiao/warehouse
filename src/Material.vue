<template>
  <layout>
    <menu-item slot="header"></menu-item>
    <material-item slot="left-bar"></material-item>
    <template slot="container">
      <canvas
        id="myCanvas"
        :width="canvasWidth"
        :height="canvasHeight"
        style="border:1px solid #d3d3d3;background:#042263;"
      >Your browser does not support the HTML5 canvas tag.</canvas>
    </template>
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
export default {
  data() {
    return {
      canvasWidth: document.documentElement.clientWidth - 305,
      canvasHeight: document.documentElement.clientHeight - 295
    };
  },
  components: {
    menuItem,
    materialItem,
    companyItem,
    titleRight,
    titleLeft
  },
  mounted() {
    window.addEventListener("resize", this.changeCanvas);
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const nImg = new Image();
    nImg.src = "/static/map.jpg";
    nImg.onload = function() {
      ctx.drawImage(nImg, 0, 0, document.documentElement.clientWidth - 305, document.documentElement.clientHeight - 295);
    };
  },
  methods: {
    changeCanvas() {
      this.canvasWidth = document.documentElement.clientWidth - 305;
      this.canvasHeight = document.documentElement.clientHeight - 295;
    }
  }
};
</script>
