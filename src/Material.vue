<template>
  <layout>
    <menu-item slot="header"></menu-item>
    <material-item slot="left-bar"></material-item>
    <company-item slot="bottom-bar"></company-item>
  </layout>
</template>
<script>
  import menuItem from './components/MenuItem.vue'
  import materialItem from './components/MaterialItem.vue'
  import companyItem from './components/CompanyItem.vue'
  export default {
    components: {
      menuItem,
      materialItem,
      companyItem
    }
  }
</script>
