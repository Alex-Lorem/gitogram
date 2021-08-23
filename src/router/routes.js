import feeds from '../pages/feeds'
import stories from '../pages/stories'
import auth from '../pages/auth'
import account from '../pages/account'

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
  },
  {
    path: '/account',
    name: 'account',
    component: account
  }
]
export default routes
