<template>
  <div style="margin-top: 8px">
    <div v-for="item in notifications" :key="item.id">
      <NotificationItem :notification="item"></NotificationItem>
      <div style="margin: 16px 0px"></div>
    </div>
  </div>
</template>

<script>
  import NotificationItem from '../components/notificationitem/NotificationItem'

  export default {
    data () {
      return {
        notifications: [
          {
            content: '倚楼听风雨关注了你'
          },
          {
            content: '倚楼听风雨2关注了你'
          },
          {
            content: '倚楼听风雨3关注了你'
          },
          {
            content: '倚楼听风雨4关注了你'
          },
          {
            content: '倚楼听风雨5关注了你'
          }
        ]
      }
    },
    components: {
      NotificationItem
    }
  }
</script>

<style scoped>

</style>
