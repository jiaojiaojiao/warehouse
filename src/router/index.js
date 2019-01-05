import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MaterialItem from '@/components/MaterialItem'
import Material from '@/Material'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/i',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'MaterialItem',
      component: MaterialItem
    },
    {
      path: '/material',
      name: 'Material',
      component: Material
    }
  ]
})
