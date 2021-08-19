// this is for avatar and logout
import * as api from '../../api'

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
        const user = await api.user.getUserData()
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
      return state || {}
    },
    getUserLoading (state) {
      return state.data
    },
    loggedIn (state) {
      return state.user !== null
    }
  }
})
