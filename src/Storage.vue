<template>
  <layout>
    <menu-item slot="header"></menu-item>
    <storage-item slot="left-bar"></storage-item>
    <company-item slot="bottom-bar"></company-item>
  </layout>
</template>
<script>
  import menuItem from './components/MenuItem.vue'
  import StorageItem from './components/StorageItem.vue'
  import companyItem from './components/CompanyItem.vue'
  export default {
    components: {
      menuItem,
      StorageItem,
      companyItem
    }
  }
</script>
