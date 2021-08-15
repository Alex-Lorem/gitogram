import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'

  try {
    await api.user.getUserData()
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
