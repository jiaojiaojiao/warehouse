<!--单位信息-->
<template>
  <div class="TitleLeft">
  <div class="title">
    <span>{{title}}</span>: <span>{{name}}</span>

  </div>
    <div class="triangleBorder nameLeft">
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialItem',
  data () {
    return {
       title: '运送单位',
       name:'顺丰'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .TitleLeft{
    position: relative;
    display: inline;
  }
  .TitleLeft .title{
    display: inline-block;
    background: repeat url('../assets/bgTitle.png');
    background-size: cover;
    padding: 10px 80px 10px 50px;
    color: #fcfdfd;
  }/*三角*/
  .TitleLeft .triangleBorder{
    width:0;
    height:0;
    border-style:solid;
    border-color:transparent #fff transparent transparent;/*透明 灰 透明 透明 */
    /*margin:40px auto;*/
    position:absolute;
    top:-20px;
    right: 0px;
    border-width:0px 52px 50px 0;
  }
</style>
