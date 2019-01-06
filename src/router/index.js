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
      path: '/m',
      name: 'Ma',
      component: Ma
    },
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
      path: '/material',
      name: 'Material',
      component: Material
    },
    {
      path: '/storage',
      name: 'Storage',
      component: Storage
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
      name: 'TitleRight',
      component: TitleRight

    },
    {
      path: '/l',
      name: 'TitleLeft',
      component: TitleLeft
    },
    {
      path: '/h',
      name: 'House',
      component: House
    }
  ]
})
