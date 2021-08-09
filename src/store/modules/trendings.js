import * as api from '../../api'

export default ({
  namespaced: true,
  state: {
    data: []
  },
  getters: {},
  mutations: {},
  actions: {
    async fetchTrendings (state) {
      try {
        const { data } = await api.trendings.getTrendings()
        return data.items
      } catch (e) {
        console.log(e)
      }
    }
  }
})
