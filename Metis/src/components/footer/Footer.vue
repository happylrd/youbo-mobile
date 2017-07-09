<template>
  <div>
    <md-bottom-bar md-shift>
      <md-bottom-bar-item md-icon="home" @click="toHomeView()">主页</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="flash_on" @click="toInstantView()">瞬间</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="notifications" @click="toNotificationView()">通知</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="person" @click="toMyView()">我的</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
  export default {
    methods: {
      toHomeView () {
        this.$router.push('/main/home')
      },
      toInstantView () {
        this.$router.push('/main/instant')
      },
      toNotificationView () {
        this.$router.push('/main/notification')
      },
      toMyView () {
        this.$router.push('/main/my')
      }
    }
  }
</script>

<style scoped>

</style>
