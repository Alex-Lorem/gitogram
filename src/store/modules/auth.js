// this is for avatar and logout
export default ({
  namespaced: true,
  state: {
    user: null,
    data: {
      loading: true
    }
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload.user
      state.data.loading = payload.data.loading
    }
  },
  actions: {
    async logout () {
      localStorage.removeItem('token')
      window.location.reload()
    },
    async fetchAuth (context) {
      try {
        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `token ${localStorage.getItem('token')}`
          }
        })
        const user = await response.json()
        context.commit('SET_USER', {
          user,
          data: {
            loading: false
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getUser (state) {
      return state.user || {}
    },
    getUserLoading (state) {
      return state.data
    },
    loggedIn (state) {
      return state.user !== null
    }
  }
})
