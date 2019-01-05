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
  }
  header{
    height: 2rem;
  }
  main{
    flex: 1;
    display: flex;
    padding: .5rem
  }
  .left{
    width: 3.8rem;
    margin-right: .2rem;
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
    margin-top: .2rem;
    height: 1rem;
  }
</style>
