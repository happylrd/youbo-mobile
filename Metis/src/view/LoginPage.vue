<template>
  <div style="margin-top: 64px">
    <div style="text-align: center">
      <md-avatar class="md-large">
        <img src="../common/image/logo.png" alt="Logo">
      </md-avatar>
    </div>

    <div style="padding: 16px">
      <md-input-container>
        <md-icon>person</md-icon>
        <label>用户名</label>
        <md-input v-model="username"></md-input>
      </md-input-container>

      <md-input-container>
        <md-icon>lock</md-icon>
        <label>密码</label>
        <md-input type="password" v-model="password"></md-input>
      </md-input-container>
    </div>

    <div style="text-align: center">
      <md-button class="md-raised md-primary" style="width: 90%" @click="doLogin">登录</md-button>
    </div>

    <div style="text-align: center">
      <md-button>忘记密码？</md-button>
      <md-button @click="toRegisterPage">注册账号</md-button>
    </div>
  </div>
</template>

<script>
  import { login, getInfo } from '../api/user'
  import * as types from '../store/mutations'
  import { TOKEN_PREFIX, CODE_SUCCESS } from '../api/constant'

  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      doLogin () {
        login(this.username, this.password)
          .then(res => {
            this.token = res.substring(TOKEN_PREFIX.length)
            if (this.token) {
              this.$store.commit(types.LOGIN, this.token)
              let redirect = this.$route.query.redirect || '/'
              this.$router.push({
                path: redirect
              })
              // will be improved later
              this.getUserInfo()
            }
          })
      },
      getUserInfo () {
        getInfo(this.username)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              let currentUser = res.data
              localStorage.__y_user_id__ = currentUser.id
              localStorage.__y_user_nickname__ = currentUser.nickname
              localStorage.__y_user_avatar__ = currentUser.avatar
            }
          })
      },
      toRegisterPage () {
        this.$router.push('/register')
      }
    }
  }
</script>

<style scoped>

</style>
