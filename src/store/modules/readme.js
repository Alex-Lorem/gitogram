import * as api from '../../api'

export default ({
  namespaced: true,
  state: {
    data: []
  },
  actions: {
    async fetchReadme (store, { owner, name }) {
      try {
        owner = owner.login
        const { data } = await api.readme.getReadme({ owner, name })
        return data
      } catch (e) {
        console.log(e)
      }
    }
  }
})
