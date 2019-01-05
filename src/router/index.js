import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MaterialItem from '@/components/MaterialItem'
import CompanyItem from '@/components/companyItem'

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
      path: '/',
      name: 'CompanyItem',
      component: CompanyItem

    }
  ]
})
