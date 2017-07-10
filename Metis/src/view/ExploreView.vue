<template>
  <div>
    <md-boards :md-auto="true" :md-infinite="true" :md-duration="5000" :md-swipeable="true">
      <md-board v-for="item in top3Tweets" :key="item.id">
        <p>{{item.textContent}}</p>
        <img :src="item.imgUrl">
      </md-board>
    </md-boards>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        top3Tweets: [
          {
            id: 1,
            textContent: '111111111',
            imgUrl: 'http://cdn.happylrd.com/image/shaosiming_1.jpg'
          },
          {
            id: 2,
            textContent: '22222222222',
            imgUrl: 'http://cdn.happylrd.com/image/gaoyue_1.jpeg'
          },
          {
            id: 3,
            textContent: '3333333333333',
            imgUrl: 'http://cdn.happylrd.com/image/shaosiming_3.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
