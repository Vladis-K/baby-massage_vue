import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './locales/en.yml'
import tr from './locales/tr.yml'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'tr',
  messages: {
    en,
    tr
  }
})

export default i18n
