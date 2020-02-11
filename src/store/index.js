import Vue from 'vue'
import Vuex from 'vuex'

import feed from './feed'
import ads from './ads'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    feed,
    ads
  }
})
