
import { makeRequest } from '../requests'

export const getStarredRepos = () => {
  const params = new URLSearchParams()
  const date = new Date().getTime()
  params.append('_', date)

  return makeRequest({
    url: `/user/starred?${params}`
  })
}

export const starRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put',
  headers: {
    Authorization: `token ${localStorage.getItem('token')}`
  }
})

export const unStarRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'delete',
  headers: {
    Authorization: `token ${localStorage.getItem('token')}`
  }
})
