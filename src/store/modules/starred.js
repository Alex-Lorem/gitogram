import * as api from '../../api'

export default ({
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_STARS (state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchStars (context) {
      try {
        const { data } = await api.starred.getStarredRepos()

        context.commit('SET_STARS', data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getPostItems (state) {
      return state.data || []
    }
  }
})
