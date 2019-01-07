<!--单位信息-->
<template>
  <div class="TitleRight">
  <div class="title">
    <span>{{title}}</span>
  </div>
  </div>
</template>
<script>
export default {
  name: 'TitleRight',
  data () {
    return {
       title: '出库物资一览'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*.TitleRight{
    background:repeat url('../assets/bg.png');
    width:100%;
    height: 500px;
    padding-top: 10px;
  }*/
  .TitleRight .title{
    display: inline-block;
    background: no-repeat url('../assets/titleRight.png' ) center ;
    background-size: cover;
    background-size:100% 99.9%;
    padding: 1rem 10rem;
    color: #fcfdfd;

  }
</style>
