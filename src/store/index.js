import Vue from 'vue'
import Vuex from 'vuex'

import i18n from './global/i18n'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    advertising: 'check',
  },
  modules: {
    i18n
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: []
})

export default store
