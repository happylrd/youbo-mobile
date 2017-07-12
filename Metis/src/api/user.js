import axios from './http'
import querystring from 'querystring'

/**
 * just for getting token
 * @param username
 * @param password
 * @returns token
 */
export function login (username, password) {
  const url = '/users/login'

  return axios.post(url, {
    username: username,
    password: password
  })
    .then(res => {
      return Promise.resolve(res.headers.authorization)
    })
}

export function getInfo (username) {
  const url = '/users/' + username

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function publishComment (userId, tweetId, content) {
  const url = '/users/' + userId + '/tweets/' + tweetId + '/comments'

  return axios.post(url, querystring.stringify({
    content: content
  }))
    .then(res => {
      return Promise.resolve(res.data)
    })
}
