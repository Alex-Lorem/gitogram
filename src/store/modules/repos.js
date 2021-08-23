import * as api from '../../api'

export default ({
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_REPOS (state, data) {
      state.data = data
    }
  },
  actions: {
    async fetchRepos (store, owner) {
      try {
        const { data } = await api.user.getUserRepos()
        store.commit('SET_REPOS', data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getUserRepos (state) {
      return state.data
    }
  }
})
