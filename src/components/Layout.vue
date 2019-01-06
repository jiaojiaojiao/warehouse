<template>
  <div class="layout">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <div class="left">
        <slot name="left-bar"></slot>
      </div>
      <div class="right">
        <div class="container">
        <slot name="container"></slot>
        </div>
        <div class="bottom">
          <slot name="bottom-bar"></slot>
        </div>
      </div>
    </main>
  </div>
</template>
<style scope>
  .layout{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #07337b;
    background-image: no-repeat url('../assets/bg.png');
  }
  header{
    height: 13rem;
  }
  main{
    flex: 1;
    display: flex;
    padding: 0 2rem 2rem 2rem;
  }
  .left{
    width: 22rem;
    margin-right: 2rem;
    border: 2px solid #a8ffff;
    border-radius: 1rem;
  }
  .right{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .container{
    flex: 1
  }
  .bottom{
    margin-top: 2rem;
    height: 10rem;
  }
</style>
