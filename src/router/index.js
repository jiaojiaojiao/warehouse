import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MaterialItem from '@/components/MaterialItem'
import CompanyItem from '@/components/CompanyItem'
import StorageItem from '@/components/StorageItem'
import MenuItem from '@/components/MenuItem'
import TitleLeft from '@/components/TitleLeft'

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
      path: '/C',
      name: 'StorageItem',
      component: StorageItem

    },
    {
      path: '/d',
      name: 'MenuItem',
      component: MenuItem

    },
    {
      path: '/',
      name: 'TitleLeft',
      component: TitleLeft

    }
  ]
})
