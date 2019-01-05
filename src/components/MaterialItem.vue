<template>
  <div class="material">
   <ul>
        <li v-for="item in items" class="materialItem">
         <div class="materialTitle">
           {{item.title}}
           <div class="triangle_border_left titleLeft">
             <!-- <span></span>-->
           </div>
         </div>
         <ul class="materialNames">
             <li v-for="name in item.name" class="materialName">
               物料名称：{{name}}
             </li>
             <div class="triangle_border_left nameLeft">
              <!-- <span></span>-->
             </div>
         </ul>
        </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'MaterialItem',
  data () {
    return {
       items: [
                      {title:'渝A K7777',
                       name:['111','222','333','444']
                      },
                      {title:'渝A K8888',
                             name:['111','222','333','444']
                      },
                     {title:'渝A K9999',
                            name:['111','222','333','444']
                     }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style-type:none;
  }
  .materialItem{
    text-align: left;
    margin-bottom: 15px;
  }
  .materialTitle {
    font-size: 20px;
    background-color: #05adbd;
    /*display: bloc!**!k;*/
    padding: 5px 80px 5px 20px;
    display: inline-block;
    position: relative;
    margin-bottom: 5px;
  }
  .titleLeft{
    border-width:0px 40px 43px 0 ;
  }
  .materialNames{
    background-color: #05adbd;
    position: relative;
    /*border: 2px #0f7ac5 solid;*/
    padding: 5px 5px 0 5px ;
  }
  .materialName {
    font-size: 18px;
    border-bottom: 2px #035e72 double;
    padding: 5px 5px 5px 20px;
  }
  /*向左*/
  .triangle_border_left{
    width:0;
    height:0;
    border-style:solid;
    border-color:transparent #fff transparent transparent;/*透明 灰 透明 透明 */
    /*margin:40px auto;*/
    position:absolute;
    top:-2px;
    right: -2px;
  }
  .nameLeft{
    border-width:0px 18px 18px 0;
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
