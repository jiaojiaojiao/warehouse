import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MaterialItem from '@/components/MaterialItem'
import CompanyItem from '@/components/CompanyItem'
import StorageItem from '@/components/StorageItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/i',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'MaterialItem',
      component: MaterialItem

    },
    {
      path: '/b',
      name: 'CompanyItem',
      component: CompanyItem

    },
    {
      path: '/',
      name: 'StorageItem',
      component: StorageItem

    }
  ]
})
