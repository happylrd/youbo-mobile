<template>
  <div>
    <div v-for="item in tweets" :key="item.id">
      <TweetItem :tweet="item"></TweetItem>
    </div>
  </div>
</template>

<script>
  import { listTopTweet } from '../api/tweet'
  import { CODE_SUCCESS } from '../api/constant'
  import TweetItem from '../components/tweetitem/TweetItem'

  export default {
    data () {
      return {
        tweets: []
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this._listTopTweet()
      },
      _listTopTweet () {
        let topNum = 3
        listTopTweet(topNum)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.tweets = res.data
            }
          })
      }
    },
    components: {
      TweetItem
    }
  }
</script>

<style scoped>

</style>
