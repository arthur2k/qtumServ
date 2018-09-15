import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Vlogin from '@/components/Vlogin'
import Store from '@/components/Store'
import Pay from '@/components/Pay'
import ApkDownload from '@/components/ApkDownload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Vlogin',
      component: Vlogin
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/apkdownload',
      name: 'ApkDownload',
      component: ApkDownload
    }
  ]
})
