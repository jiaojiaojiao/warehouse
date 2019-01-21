<!--出库信息-->
<template>
  <div class="storage">
   <ul class="storageItems">
        <li v-for="(item,index) in MaterialList" class="storageItem">
          <div class="storageItemMsg">
            <div  class="itemImage">
              <div class="itemImageTable">
                <img src="../assets/box1.png" alt="" width="100%" height="100%">
              </div>
            </div>
            <ul class="itemMsg">
             <!-- <li class="isActive" v-if="num==index" v-bind:name="isNum">
                <p>名称:{{item.materialname}}</p>
                <p>种类:{{item.materialtypename}}</p>
                <p>型号:{{item.materialmode}}</p>
                <p>数量:{{item.materialcount}}</p>
                <p>位置:{{item.shelfname}}{{item.detailrow}}层{{item.detailcolumn}}列{{item.detailno}}号</p>
              </li>-->
              <li  >
                <p>名称:{{item.materialname}}</p>
                <p>种类:{{item.materialtypename}}</p>
                <p>型号:{{item.materialmode}}</p>
                <p>数量:{{item.materialcount}}</p>
                <p>位置:{{item.shelfname}}{{item.detailrow}}层{{item.detailcolumn}}列{{item.detailno}}号</p>
              </li>
            </ul>
          </div>
          <div class="cycleBorder">
          </div>
        </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'StorageItem',
  props:['MaterialList'],
  data () {
    return {
       items:[
         {
           name:'矿泉水',
           category:'水',
           number:'11'
         },{
           name:'苹果',
           category:'水果',
           number:'122'
         },{
           name:'青菜',
           category:'蔬菜',
           number:'111'
         }
       ],
       num:0
    }
  },
  methods:{
  },
  computed: {
   /* isNum(){
      var materials=this.MaterialList
      var time=1000
      for(var i in materials){
        setTimeout(function () {
          this.num=i
        }, time)

      }
      return this.num
    }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style-type:none;
  }
  .storage{

    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-y:scroll;
  }
  .storageItems{
   padding:0.5rem;
    /*background-color: #0a306b;*/
  }
  .storageItem{
    margin-bottom: 1rem;
  display: inline-block;
  width: 100%;
  }
  .storageItemMsg{
    height:100%;
    overflow:hidden;
  }
  .itemImage {
    height:100%;
    width:30%;
    float:left;
  }
  .itemMsg li{
    margin-left: 0.5rem;
    width:66%;
    float:left;
    height:auto;
    word-break: break-all;
    background-color: #08249a ;
  }
  .itemMsg .isActive p{
    color: rgb(205, 78, 224);
  }
  .itemMsg p{
    color: #7ae1fa;
    font-size: 1rem;
    border: 1px #0f7ac5 solid;
    padding: 0.45rem 0.5rem;
    text-align: left;
  }
.itemImageTable {
  padding: 1.5rem 0;
}
  /*分栏线*/
  .cycleBorder
  {
    margin-top: 1rem;
    height: 0.5rem;
    background: url("../assets/line.png") no-repeat;
    background-size:100% 100%;
    width: 100%;
  }
  .storageItem:last-child .cycleBorder{
    display: none;
  }
</style>
