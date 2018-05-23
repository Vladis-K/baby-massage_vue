export default {
  namespaced: true,
  state: {
    locale: 'en'
  },
  getters: {
    locale: state => state.locale
  },
  actions: {
    setLang: ({ commit }, locale) => commit('SET_LANG', locale)
  },
  mutations: {
    SET_LANG (state, locale) {
      state.locale = locale
    }
  }
}
