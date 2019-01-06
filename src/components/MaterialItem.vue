<!--物料信息-->
<template>
  <div class="material">
   <ul>
      <li v-for="item in items" class="materialItem">
        <div class="materialTitle">
          {{item.title}}
          <div class="triangleBorder titleLeft">
            <!-- <span></span>-->
          </div>
        </div>
        <ul class="materialNames">
            <li v-for="name in item.name" class="materialName">
              物料名称：{{name}}
            </li>
            <div class="triangleBorder nameLeft">
            <!-- <span></span>-->
            </div>
        </ul>

        <div class="cycleBorder">
          <!--<img src="assets/line.png" alt="" height="100px" width="100px">-->
        </div>
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
    margin-bottom: 1.5rem;
  }
  .materialTitle {
    font-size: 1rem;
    background-color: #06afbf;
    /*display: bloc!**!k;*/
    padding: 1rem 8rem 1rem 2rem;
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
  /*分栏线*/
  .cycleBorder{
    margin-top: 1rem;
    height: 0.5rem;
    background: url("../assets/line.png") no-repeat;
    background-size:100% 100%;

  }
  /*三角*/
  .triangleBorder{
    width:0;
    height:0;
    border-style:solid;
    border-color:transparent #041f4f transparent transparent;/*透明 灰 透明 透明 */
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
