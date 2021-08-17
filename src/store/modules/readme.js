import * as api from '../../api'

export default ({
  namespaced: true,
  state: {
    data: []
  },
  actions: {
    async fetchReadme (context, { owner, name }) {
      try {
        const { data } = await api.readme.getReadme({ owner, name })
        return data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
