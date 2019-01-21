import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MaterialItem from '@/components/MaterialItem'
import Material from '@/Material'
import CompanyItem from '@/components/CompanyItem'
import StorageItem from '@/components/StorageItem'
import MenuItem from '@/components/MenuItem'
import TitleLeft from '@/components/TitleLeft'
import TitleRight from '@/components/TitleRight'
import Storage from '@/Storage'
import House from '@/components/House'
import Ma from '@/Ma'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Material',
      component: Material
    },
    {
      path: '/storage',
      name: 'Storage',
      component: Storage
    }
  ]
})
