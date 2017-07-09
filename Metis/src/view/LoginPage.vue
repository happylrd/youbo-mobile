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
      <md-button>注册账号</md-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      doLogin () {
        console.log(this.username + ':' + this.password)
      }
    }
  }
</script>

<style scoped>

</style>
