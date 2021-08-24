import * as api from '../../api'

export default ({
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_README (state, { data, id }) {
      state.data[id] = data
    }
  },
  actions: {
    async fetchReadme (store, { owner, name, id }) {
      try {
        const { data } = await api.readme.getReadme({ owner, name })
        store.commit('SET_README', { data, id })
        return data
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getReadme (state) {
      return state.data
    }
  }
})
