<template>
  <div>
    <md-bottom-bar md-shift>
      <md-bottom-bar-item md-icon="home" @click="toHomeView" :md-active="activeIndex===1">主页</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="explore" @click="toExploreView" :md-active="activeIndex===2">发现</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="notifications" @click="toNotificationView" :md-active="activeIndex===3">通知</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="person" @click="toMyView" :md-active="activeIndex===4">我的</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
  const ACTIVE_HOME = 1
  const ACTIVE_EXPLORE = 2
  const ACTIVE_NOTIFICATION = 3
  const ACTIVE_MY = 4

  export default {
    data () {
      return {}
    },
    computed: {
      activeIndex () {
        let currentPath = this.$route.path
        if (currentPath === '/main/home') {
          return ACTIVE_HOME
        } else if (currentPath === '/main/explore') {
          return ACTIVE_EXPLORE
        } else if (currentPath === '/main/notification') {
          return ACTIVE_NOTIFICATION
        } else if (currentPath === '/main/my') {
          return ACTIVE_MY
        }
      }
    },
    methods: {
      toHomeView () {
        this.$router.push('/main/home')
      },
      toExploreView () {
        this.$router.push('/main/explore')
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
