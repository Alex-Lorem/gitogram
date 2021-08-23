import * as api from '../../api'

export default ({
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_ISSUES (state, { data, id }) {
      state.data[id] = data
    }
  },
  actions: {
    async fetchIssues (store, { owner, name, id }) {
      try {
        const { data } = await api.issues.getIssues({ owner: owner.login, repo: name })
        store.commit('SET_ISSUES', { data, id })
        return data
      } catch (e) {
          console.log(e)
        }
    }
  },
  getters: {
    getIssuesItems (state) {
      return state.data
    }
  }
})
