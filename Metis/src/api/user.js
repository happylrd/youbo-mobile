import axios from './http'

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
