import feeds from '../pages/feeds'
import stories from '../pages/stories'
import auth from '../pages/auth'

export default [
  {
    path: '/gitogram/feeds',
    name: 'feeds',
    component: feeds
  },
  {
    path: '/gitogram/stories',
    name: 'stories',
    component: stories
  },
  {
    path: '/gitogram',
    name: 'auth',
    component: auth
  }
]
