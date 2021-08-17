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
        const response = await fetch('https://api.github.com/user/starred', {
          headers: {
            Authorization: `token ${localStorage.getItem('token')}`
          }
        })
        const user = await response.json()
        context.commit('SET_STARS', user)
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
