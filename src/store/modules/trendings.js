import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_TRENDINGS (state, trendings) {
      state.data = trendings.map((item) => {
        item.following = {
          status: false,
          loading: false,
          error: 'error((('
        }
        return item
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
        }
        return repo
      })
    }
  },
  getters: {
    getData (state) {
      return state.data
    }
  },
  actions: {
    async fetchTrendings (context) {
      try {
        const { data } = await api.trendings.getTrendings()
        context.commit('SET_TRENDINGS', data.items)
      } catch (error) {
        console.log(error)
      }
    },
    async starRepo ({ commit, getters }, { name, owner, id }) {
      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: 'error'
        }
      })
      try {
           await api.starred.starRepo({ repo: name, owner: owner.login })
           commit('SET_FOLLOWING', {
              id,
              data: {
                isFollowed: true,
                status: true
              }
            })
      } catch (e) {
          commit('SET_FOLLOWING', {
            id,
            data: {
              status: false,
              error: 'Error has happened'
            }
          })
        } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    },
    async unStarRepo ({ commit, getters }, { name, owner, id }) {
      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: 'error'
        }
      })
      try {
        await api.starred.unStarRepo({ repo: name, owner: owner.login })
        console.log(true)
        commit('SET_FOLLOWING', {
          id,
          data: {
            isFollowed: false,
            status: true
          }
        })
      } catch (e) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false,
            error: 'Error has happened'
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    }
  }
}
