<!--单位信息-->
<template>
  <div class="menu">
    <div class="menuTable">
      <div class="menuContent">
        <ul class="menuItems">
          <li v-for="item in items" class="menuItem" >
            <span class="menuLeft"><img src="../assets/output.png"></img></span>
            <span class="menuRight">
              <p>{{item}}</p>
              <p >INPUT</p>
            </span>
          </li>
        </ul>
        <div class="clear"></div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialItem',
  data () {
    return {
       items: ['入库','出库','仓库']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style-type:none;
    display: inline;
  }
  .menu{
    /*background: no-repeat url('../assets/bg.png');*/
    /*width: 100%;*/
    /*height:5000px;*/
  }
  .menuTable{
    background: url("../assets/menubg.png") no-repeat ;
    background-size: cover;
    text-align: center;
  }
.menuContent{
  text-align: center;
  display: inline-block;
  margin: 40px 0;
}
  .clear{
    clear: both;
  }
  .menuItem{
    float: left;
    margin-right: 40px;
  }
  .menuItem img{
    width: 50%;
    height: 50%;
  }
  .menuItem span{
    display: inline-block;
    float: left;
    color: #e4eeee;
    /*line-height: 40%;*/
    /*height: 40%;*/
  }
  .menuLeft{
    height: 100%;
  }
  .menuRight{
    height: auto;
    word-break: break-all;
  }
  .menuItem span p{
    padding: 0px;
    margin: 0px;
    font-weight: 600;
  }
</style>
