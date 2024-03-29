import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: null
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = data
      state.token = data
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    }
  }
})
