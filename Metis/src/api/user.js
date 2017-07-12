import axios from './http'
import querystring from 'querystring'

export function register (username, password, nickname) {
  const url = '/users/register'

  return axios.post(url, {
    username: username,
    password: password,
    nickname: nickname
  })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

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

export function getInfoById (userId) {
  const url = '/users/id/' + userId

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getNormalInfo (userId) {
  const url = '/users/' + userId + '/info'

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function updateInfo (userId, nickname, realname, gender, description) {
  const url = '/users/' + userId

  return axios.put(url, {
    nickname: nickname,
    realname: realname,
    gender: gender,
    description: description
  })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function updateAvatar (userId, data) {
  const url = '/users/' + userId + '/avatar'

  return axios.put(url, data)
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

export function listMyComment (userId) {
  const url = '/users/' + userId + '/comments'

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function collectTweet (userId, tweetId) {
  const url = '/users/' + userId + '/tweets/' + tweetId + '/collections'

  return axios.post(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function listMyCollection (userId) {
  const url = '/users/' + userId + '/collections'

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function doFavorite (userId, tweetId) {
  const url = '/users/' + userId + '/tweets/' + tweetId + '/favorites'

  return axios.post(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function listMyFavorite (userId) {
  const url = '/users/' + userId + '/favorites'

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}
