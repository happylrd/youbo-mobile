import axios from 'axios'
import store from '../store/index'
import * as types from '../store/mutations'
import router from '../router/index'

const BASE_URL = 'http://localhost:8080'

axios.defaults.baseURL = BASE_URL

axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `Youbo ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit(types.LOGOUT)
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }

    // just for logging
    console.log(JSON.stringify(error))
    return Promise.reject(error.response.data)
  }
)

export default axios
