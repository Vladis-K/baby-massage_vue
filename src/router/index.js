import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/pages/Main'

Vue.use(Router)

// route-level code splitting
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '*',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
    },
  ]
})

export default router