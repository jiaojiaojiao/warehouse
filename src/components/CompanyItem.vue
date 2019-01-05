<template>
  <div class="company">
   <ul class="companyItems">
        <li v-for="item in items" >
          <a href="" class="companyItem" v-bind:title=item>
            {{item}}
          </a>
        </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'MaterialItem',
  data () {
    return {
       items: ['金瓜子科技发展（北京）有限公司','京东数字科技控股有限公司','上海基分文化传播有限公司','北京锤子数码科技有限公司','北京故宫文化传播有限公司','京千橡网景科技发展有限公司','重庆大学']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style-type:none;
  }
  .companyItems li{
    float: left;
    width: 255px;
    height: 40px;
    border: 1px #4881ab solid;
  }
  a{
    text-decoration:none;
    display: inline-block;
    height: 100%;
    width: 100%;
    line-height: 40px;
    background-color: #031793;
    color: #7ae1fa;
    font-size: 20px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

  }
  .companyItem:hover{
    background: no-repeat url('../assets/companyBackground.png');
  }
</style>
