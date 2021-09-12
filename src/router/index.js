import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'
import store from '../store/index.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'

  try {
    if (store.getters['auth/loggedIn']) {

    } else {
      const user = await api.user.getUserData()
      store.commit('auth/SET_USER', {
        user,
        data: {
          loading: false
        }
      })
    }
    next(authRoute ? { name: 'feeds' } : null)
  } catch (e) {
    if (e.response.status === 401) {
    next(authRoute ? null : { name: 'auth' })
  } else {
      console.log(e)
    }
  }
})
export default router
