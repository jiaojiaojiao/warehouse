<template>
  <layout>
    <menu-item slot="header" :title-list="headerTitle"></menu-item>
    <storage-item slot="left-bar"></storage-item>
    <div class="bottom" slot="bottom-bar">
      <company-item></company-item>
    </div>
    <house-item slot="container"></house-item>
    <dialog-bar slot="dialog-bar"></dialog-bar>
    <title-left slot="left-menu"></title-left>
    <title-right slot="right-menu"></title-right>

  </layout>
</template>
<script>
  import menuItem from './components/MenuItem.vue'
  import StorageItem from './components/StorageItem.vue'
  import companyItem from './components/CompanyItem.vue'
  import houseItem from './components/House.vue'
  import dialogBar from './components/Dialog.vue'
  import titleLeft from './components/TitleLeft.vue'
  import titleRight from './components/TitleRight.vue'
  const headerTitle={input: '入库',output: '出库',storage: '仓库'}
  export default {
    data() {
      return {
        headerTitle
      }
    },
    components: {
      menuItem,
      StorageItem,
      companyItem,
      houseItem,
      dialogBar,
      titleLeft,
      titleRight
    }
  }
</script>
<style scoped>
  .bottom{
    margin-top: 1.5rem;
    padding: 1rem;
    height: 10rem;
    /*border: 2px solid #a8ffff;*/
   /* border-radius: 1rem;*/
    /*background-color: #041f4f;*/
    box-sizing: border-box;
    overflow-y: auto;
    background:no-repeat url("assets/companybg.png");
    background-size: 100%  97%;
  }
</style>
