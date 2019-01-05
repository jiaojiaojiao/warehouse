<!--出库信息-->
<template>
  <div class="storage">
   <ul class="storageItems">
        <li v-for="item in items" class="storageItem">
          <div class="storageItemMsg">
            <div  class="itemImage">
              <div class="itemImageTable">

                <img src="../assets/box1.png" alt="" width="80%" height="80%">
              </div>
            </div>
            <ul class="itemMsg">
              <li>
                <p>名称:{{item.name}}</p>
                <p>种类:{{item.category}}</p>
                <p>数量:{{item.number}}</p>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style-type:none;
  }
  .storageItems{
   padding: 5px;
    background-color: #0a306b;
  }
  .storageItem{
    margin-bottom: 10px;
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
    padding-left: 5px;
    width:60%;
    float:left;
    height:auto;
    word-break: break-all;
  }
  .itemMsg p{
    background-color: #08249a ;
    color: #7ae1fa;
    font-size: 16px;
    border: 1px #0f7ac5 solid;
  }

  /*分栏线*/
  .cycleBorder{
    margin-top: 10px;
    height: 5px;
    background: url("../assets/line.png") no-repeat;
    background-size:100% 100%;
    width: 100%;
  }
</style>
