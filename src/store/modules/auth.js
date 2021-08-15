export default ({
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async fetchAuth (context) {
      try {
        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `token ${localStorage.getItem('token')}`
          }
        })
        const user = await response.json()
        context.commit('SET_USER', user)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchStars (context) {
      try {
        const response = await fetch('https://api.github.com/user/starred', {
          headers: {
            Authorization: `token ${localStorage.getItem('token')}`
          }
        })
        const user = await response.json()
        // context.commit('SET_STARS', user)
        console.log(user)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getUser (state) {
        return state.user || {}
    },
    loggedIn (state) {
      return state.user !== null
    }
  }
})
