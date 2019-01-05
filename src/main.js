// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import baseStyle from './assets/styles/base.css';
import layout from "./components/Layout.vue";

Vue.config.productionTip = false
Vue.component('layout', layout)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
