import * as api from '../../api'

export default ({
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_ISSUES (state, payload) {
      state.data = payload
    }
  },
  getters: {
    getIssuesItems (state) {
      return state.data
    }
  },
  actions: {
    async fetchIssues (store, { owner, name }) {
      try {
        owner = owner.login
        const { data } = await api.issues.getIssues({ owner, repo: name })
        store.commit('SET_ISSUES', data.items)
        return data
      } catch (e) {
          console.log(e)
        }
    }
  }
})
