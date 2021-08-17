import * as api from '../../api'

export default ({
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    getReadme (state) {
      return state.data
    }
  },
  mutations: {
      SET_README (state, payload) {
        state.data = payload
      }
  },
  actions: {
    async fetchReadme (store, { owner, name }) {
      try {
        owner = owner.login
        const { data } = await api.readme.getReadme({ owner, name })
        return data
      } catch (e) {
          return '<div style="font-weight: bold">Unfortunately we could not download the content, most likely this user refused to write a readme file</div>'
      }
    }
  }
})
