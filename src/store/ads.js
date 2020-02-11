import Vue from 'vue'

const state = {
  ads: [],
  page: 0,
  lastPage: 0,
  limit: 10
}

const getters = {
  ads(state) {
    return state.ads
  }
}

const mutations = {
  setAds(state, list) {
    const { data, current_page, last_page } = list
    state.page = current_page
    state.lastPage = last_page
    if (state.page > 0) {
      state.ads = [...state.ads].concat(data)
    } else {
      state.ads = data
    }
  }
}

const actions = {
  initAds({ commit }) {
    commit('setAds', {
      current_page: 0,
      last_page: 0,
      data: []
    })
  },
  async fetchAds({ commit, state }) {
    try {
      if (state.page > 0 && state.page >= state.lastPage) {
        return
      }

      const {
        data: { list }
      } = await Vue.axios.get('/api/ads', {
        params: {
          page: state.page + 1,
          limit: state.limit
        }
      })

      commit('setAds', list)
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
