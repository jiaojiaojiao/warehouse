<!--物料信息-->
<template>
  <div class="material">
   <ul>
      <li
        v-for="(item,key) in materialData"
        class="materialItem"
        @click="getMaterialDetail(item.licenseplate)"
        :key="key"
      >
        <div class="materialTitle">
          {{item.TrajectoryList[0].licenseplate}}
          <div class="triangleBorder titleLeft">
          </div>
        </div>
        <div class="materialNames">
            <div>
              <div v-for="name in Object.keys(materialName)" class="materialName" :key="name">
                {{materialName[name]}}：{{getValue(item, name)}}
              </div>
            </div>
            <div class="triangleBorder nameLeft">
            </div>
        </div>

        <div class="cycleBorder">
          <!--<img src="assets/line.png" alt="" height="100px" width="100px">-->
        </div>
      </li>
  </ul>

    <div class="clear"></div>
  </div>
</template>
<script>
const materialName = {
  carname: '车辆名称',
  backtime: '到达时间',
  readerid: '到达地点'
}
export default {
  name: 'MaterialItem',
  props: ['materialData', 'getMaterialDetail'],
  data () {
    return {
      materialName
    }
  },
  methods: {
    getValue(item, name){
      return name === 'trajectoryid' ? `${item.TrajectoryList[0][name]}号点` : (item.TrajectoryList[0][name] || item[name])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style-type:none;
  }
  .clear{
    clear: both;
  }
  .material{
    width: 100%;
    box-sizing: border-box;
  }
  .materialItem{
    text-align: left;
    margin-bottom: 1.5rem;
    cursor: pointer;
  }
  .materialTitle {
    font-size: 1rem;
    background-color: #06afbf;
    /*display: bloc!**!k;*/
    padding: 1rem 5rem 1rem 2rem;
    display: inline-block;
    position: relative;
    margin: 0 0.5rem 0.5rem 0.5rem;

  }
  .titleLeft{
    border-width:0px 4rem 4.3rem 0 ;
  }
  .materialNames{
    background-color: #06afbf;
    position: relative;
    /*border: 2px #0f7ac5 solid;*/
    padding: 0.5rem 0.5rem 0 0.5rem;
    margin: 0 0.5rem 0.5rem 0.5rem;
  }
  .materialName {
    font-size: 1rem;
    border-bottom: 0.2rem #035e72 double;
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  }
  .materialName:last-child {
    border-bottom: 0;
  }
  /*分栏线*/
  .cycleBorder{
    margin-top: 1rem;
    height: 0.5rem;
    background: url("../assets/line.png") no-repeat;
    background-size:100% 100%;

  }
  .materialItem:last-child .cycleBorder{
    display: none;
  }
  /*三角*/
  .triangleBorder{
    width:0;
    height:0;
    border-style:solid;
    border-color:transparent #022064 transparent transparent;/*透明 灰 透明 透明 */
    /*margin:40px auto;*/
    position:absolute;
    top:-2px;
    right: -2px;
  }
  .nameLeft{
    border-width:0px 1.8rem 1.8rem 0;
  }
 /* .triangle_border_left span{
    display:block;
    width:0;
    height:0;
    border-width:28px 28px 28px 0;
    border-style:solid;
    border-color:transparent #fc0 transparent transparent;!*透明 黄 透明 透明 *!
    position:absolute;
    top:0px;
    left:0px;
  }*/
</style>
