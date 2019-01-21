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
              <li class="isActive" v-if="isNum==index">
                <p>名称:{{item.materialname}}</p>
                <p>种类:{{item.materialtypename}}</p>
                <p>型号:{{item.materialmode}}</p>
                <p>数量:{{item.materialcount}}</p>
                <p>位置:{{item.shelfname}}{{item.detailrow}}层{{item.detailcolumn}}列{{item.detailno}}号</p>
              </li>
              <li v-else=""  >
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
       ]
    }
  },
  computed: {
    isNum(){
      var materials=this.MaterialList
      var time=10
      var num=0
      console.log('bbbbbb')
      for(var i in materials){
        setTimeout(function () {
          num=i
          console.log('cccccccc')
          console.log(num)
        }, time)
        time=time+3000
      }
      return num
    }
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
  .itemMsg{
    padding-left: 0.5rem;
    width:66%;
    float:left;
    height:auto;
    word-break: break-all;
    background-color: #08249a ;
  }
  .itemMsg .isActive{
    background-color: #2e2e2e;
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
