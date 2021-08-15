import feeds from '../pages/feeds'
import stories from '../pages/stories'
import auth from '../pages/auth'

const routes = [
  {
    path: '/',
    name: 'feeds',
    component: feeds
  },
  {
    path: '/stories',
    name: 'stories',
    component: stories
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  }
]
export default routes
