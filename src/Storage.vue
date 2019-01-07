<template>
  <layout>
    <menu-item slot="header"></menu-item>
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
  export default {
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
