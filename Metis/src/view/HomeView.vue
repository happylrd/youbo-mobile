<template>
  <div>
    <div v-for="item in tweetList" :key="item.id">
      <TweetItem :tweet="item"></TweetItem>
    </div>
  </div>
</template>

<script>
  import TweetItem from '../components/tweetitem/TweetItem'

  export default {
    data () {
      return {
        tweetList: [
          {
            id: 1,
            textContent: 'Awesome Image666666666666666666666666666666',
            createAt: '2017-07-10:09-09-09',
            commentSize: 10,
            collectionSize: 20,
            favoriteSize: 30,
            nickname: '竹轩听雨'
          },
          {
            id: 2,
            textContent: 'Awesome Image666666666666666666666666666666',
            createAt: '2017-07-10:09-09-09',
            commentSize: 10,
            collectionSize: 20,
            favoriteSize: 30,
            nickname: '竹轩听雨2'
          }
        ]
      }
    },
    components: {
      TweetItem
    }
  }
</script>

<style scoped>

</style>
