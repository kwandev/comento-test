import Vue from 'vue'

const state = {
  categories: [],
  categoryFilter: [],
  feeds: [],
  loading: true,
  page: 0,
  lastPage: 0,
  limit: 10,
  ord: localStorage.getItem('ord') || 'asc',
  total: 0,
  feedDetail: {}
}

const getters = {
  feeds(state) {
    return state.feeds
  },
  feedDetail(state) {
    return state.feedDetail
  },
  loading(state) {
    return state.loading
  },
  limit(state) {
    return state.limit
  },
  ord(state) {
    return state.ord
  },
  categories(state) {
    return state.categories
  },
  categoryFilter(state) {
    return state.categoryFilter
  }
}

const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setFeeds(state, list) {
    const { data, total, current_page, last_page } = list
    state.page = current_page
    state.total = total
    state.lastPage = last_page
    if (state.page > 0) {
      state.feeds = [...state.feeds].concat(data)
    } else {
      state.feeds = data
    }
  },
  setFeedDetail(state, detail) {
    state.feedDetail = detail
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setOrd(state, ord) {
    localStorage.setItem('ord', ord)
    state.ord = ord
  },
  setLimit(state, limit) {
    state.limit = limit
  },
  setCategoryFilter(state, categoryFilter) {
    state.categoryFilter = categoryFilter
    localStorage.setItem('categoryFilter', categoryFilter.toString())
  }
}

const actions = {
  initFeeds({ commit }) {
    commit('setFeeds', {
      current_page: 0,
      total: 0,
      last_page: 0,
      data: []
    })
  },
  async fetchFeeds({ commit, state, getters }) {
    try {
      if (state.page > 0 && state.page >= state.lastPage) {
        commit('setLoading', false)
        return
      }

      commit('setLoading', true)
      const {
        data: { list }
      } = await Vue.axios.get('/api/list', {
        params: {
          page: state.page + 1,
          ord: state.ord,
          category: state.categoryFilter,
          limit: state.limit
        }
      })

      const categories = getters.categories
      list.data.forEach((feed) => {
        const categoryName = categories.find((category) => category.id === feed.category_id).name
        feed.category_name = categoryName
      })

      commit('setLoading', false)
      commit('setFeeds', list)
    } catch (error) {
      throw new Error(error)
    }
  },
  async fetchFeedDetail({ commit }, id) {
    try {
      const {
        data: { info }
      } = await Vue.axios.get('/api/view', {
        params: {
          id: id
        }
      })

      commit('setFeedDetail', info)
    } catch (error) {
      throw new Error(error)
    }
  },
  async fetchCategories({ commit }) {
    try {
      const {
        data: { list }
      } = await Vue.axios.get('/api/category')

      commit('setCategories', list)
      const localStorageCategoryFilter = localStorage.getItem('categoryFilter')
      commit(
        'setCategoryFilter',
        localStorageCategoryFilter
          ? localStorageCategoryFilter.split(',').map((item) => Number(item))
          : list.map((item) => item.id)
      )
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
