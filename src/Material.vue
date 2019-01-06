<template>
  <layout>
    <menu-item slot="header"></menu-item>
    <material-item slot="left-bar"></material-item>
  </layout>
</template>
<script>
  import menuItem from './components/MenuItem.vue'
  import materialItem from './components/MaterialItem.vue'
  export default {
    components: {
      menuItem,
      materialItem
    }
  }
</script>
