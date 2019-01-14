<template>
  <layout>
    <menu-item slot="header" :title-list="headerTitle"></menu-item>
    <storage-item slot="left-bar"></storage-item>
    <company-item slot="bottom-bar"></company-item>
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
