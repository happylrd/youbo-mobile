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
            avatar: 'http://image.youbo.io/4dbe7f5c-0efa-4e6e-bf78-f5adced7f970.png',
            content: '倚楼听风雨关注了你'
          },
          {
            avatar: 'http://image.youbo.io/4dbe7f5c-0efa-4e6e-bf78-f5adced7f970.png',
            content: '倚楼听风雨2关注了你'
          },
          {
            avatar: 'http://image.youbo.io/4dbe7f5c-0efa-4e6e-bf78-f5adced7f970.png',
            content: '倚楼听风雨3关注了你'
          },
          {
            avatar: 'http://image.youbo.io/4dbe7f5c-0efa-4e6e-bf78-f5adced7f970.png',
            content: '倚楼听风雨4关注了你'
          },
          {
            avatar: 'http://image.youbo.io/4dbe7f5c-0efa-4e6e-bf78-f5adced7f970.png',
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
