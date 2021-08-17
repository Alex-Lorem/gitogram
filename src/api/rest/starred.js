
import { makeRequest } from '../requests'

export const getStarredRepos = ({ limit }) => {
  const params = new URLSearchParams()
  if (limit) {
    params.append('per_page', limit)
  }

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
