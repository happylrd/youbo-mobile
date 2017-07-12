import axios from './http'

export function listTweet () {
  const url = '/tweets'

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function listTopTweet (number) {
  const url = '/tweets/top/' + number

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getTweet (tweetId) {
  const url = '/tweets/' + tweetId

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}
