<!--单位信息-->
<template>
  <div class="TitleRight">
    <a class="title" :href="linkObj ? linkObj.link : ''">
      <span>{{linkObj ? linkObj.title : title}}</span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'TitleRight',
  props: ['linkObj'],
  data () {
    return {
       title: '任务配送管理'
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
    text-decoration: none;
  }
</style>
