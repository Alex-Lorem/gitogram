import { makeRequest } from '../requests'

export const getUserData = () => makeRequest({
  url: '/user'
  })

export const gerUserRepos = () => makeRequest({
  url: '/user/repos'
})
