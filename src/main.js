import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'
import * as filters from './util/filters'
import VueDragDrop from 'vue-drag-drop'
import Meta from 'vue-meta'

import 'babel-polyfill'
import locale from "element-ui/lib/locale/lang/en"

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// mixin for handling title
Vue.mixin(titleMixin)

Vue.use(Element, { locale })
Vue.use(VueDragDrop)

Vue.use(Meta)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  // create store and router instances
  // const store = createStore()
  // const router = createRouter()
  // const i18n = createi18n()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  const app = new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}