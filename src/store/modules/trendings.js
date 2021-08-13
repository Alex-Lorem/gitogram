import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_TRENDINGS (state, payload) {
      state.data = payload
    }
  },
  getters: {
    getData (state) {
      return state.data
    }
  },
  actions: {
    async fetchTrendings (context) {
      try {
        const { data } = await api.trendings.getTrendings()
        context.commit('SET_TRENDINGS', data.items)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
