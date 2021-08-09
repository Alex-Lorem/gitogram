import { makeRequest } from '../requests'

export const getReadme = ({ owner, name }) => {
  const contentHeader = 'application/vnd.github.v3.html+json'
  return makeRequest({
    url: `/repos/${owner}/${name}/readme`,
    headers: {
      accept: contentHeader
    }
  })
}
