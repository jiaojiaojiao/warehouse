<template>
  <div class="layout">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="leftnmenu">
      <slot name="left-menu"></slot>
    </div>
    <div class="rightmenu">
      <slot name="right-menu"></slot>
    </div>
    <main>
      <div class="left">
        <slot name="left-bar"></slot>
      </div>
      <div class="right">
        <div class="container">
          <slot name="container"></slot>
          <div class="top-line"></div>
          <div class="bottom-line"></div>
        </div>
         <!--<div class="bottom">
          <slot name="bottom-bar"></slot>
        </div>-->
        <slot name="bottom-bar"></slot>
        <!--<div class="dialog">
          <slot name="dialog-bar"></slot>
        </div>-->
      </div>
    </main>
  </div>
</template>
<style scope>
  .layout{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #07337b;
    background-image: no-repeat url('../assets/bg.png');
  }
  header{
    /* height: 13rem; */
  }
  main{
    flex: 1;
    display: flex;
    padding: 0 2rem 2rem 2rem;
  }
  .leftnmenu,.rightmenu{
    position: fixed;
  }
  .leftnmenu{
    top:8rem;
    left: 2rem;
  }
  .rightmenu{
    top:8rem;
    right: 2rem;
  }
  .left{
    margin-right: 1.5rem;
    width: 22rem;
    padding: 1rem 1rem 3rem;
    /*border: 1px solid #a8ffff;
    border-radius: 1rem;*/
    /*background-color: #041f4f;*/
    background: no-repeat url('../assets/leftbg.png') ;
    background-size: 100% 100%;
    overflow-y: auto;
  }
  .right{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .container{
    flex: 1;
    /*border: 1px solid #a8ffff;
    border-radius: 1rem;*/
    padding: 2rem;
    position: relative;
    overflow: hidden;
    border-radius: 1.5rem;
   /* background-color: rgba(0, 51, 95, .5);*/
    background:repeat url('../assets/centerbg.png');
    /*filter:alpha(opacity=40);
    -moz-opacity:0.40;
    opacity:0.40;
    padding: 1rem;*/
  }
  .top-line{
    position: absolute;
    top: 3.2px;
    left: 0;
    right: 0;
    background: no-repeat url("../assets/upline.png");
    background-size: 100%;
    width:100%;
    height: 6.5rem;
  }
  .bottom-line{
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    background: no-repeat url("../assets/bottemline.png") bottom;
    background-size: 100%;
    width:100%;
    height: 6.5rem;
  }
</style>
