<!--单位信息-->
<template>
  <div class="TitleLeft">
  <div class="title">
    <span>{{title}}</span>: <span>{{name}}</span>

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
    background:repeat url('../assets/bg.png');
    width:100%;
    height: 500px;
    padding-top: 10px;
  }
  .TitleLeft .title{
    display: inline-block;
    background: repeat url('../assets/titleLeft.png') center;
    background-size: cover;
    background-size:100% 99.9%;
    padding: 10px 80px 10px 50px;
    color: #fcfdfd;
  }
</style>
