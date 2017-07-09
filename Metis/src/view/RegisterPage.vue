<template>
  <div>
    <md-toolbar class="md-dense">
      <md-button class="md-icon-button" @click="toLoginPage">
        <md-icon>arrow_back</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">注册</h2>
    </md-toolbar>

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

      <md-input-container>
        <md-icon>account_circle</md-icon>
        <label>昵称</label>
        <md-input v-model="nickname"></md-input>
      </md-input-container>
    </div>

    <div style="text-align: center">
      <md-button class="md-raised md-primary" style="width: 90%" @click="doRegister">注册</md-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        nickname: ''
      }
    },
    methods: {
      doRegister () {
        console.log(this.username + ':' + this.password + ':' + this.nickname)
      },
      toLoginPage () {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>

</style>
