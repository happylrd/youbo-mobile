import axios from './http'

export function listTweet () {
  const url = '/tweets'

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}
