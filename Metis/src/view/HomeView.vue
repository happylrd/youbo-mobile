<template>
  <div>
    <div style="text-align: center" v-if="isLoading">
      <md-spinner md-indeterminate></md-spinner>
    </div>

    <div v-for="item in tweetList" :key="item.id">
      <TweetItem :tweet="item"></TweetItem>
    </div>
  </div>
</template>

<script>
  import TweetItem from '../components/tweetitem/TweetItem'
  import { listTweet } from '../api/tweet'
  import { CODE_SUCCESS } from '../api/constant'

  export default {
    data () {
      return {
        isLoading: false,
        tweetList: []
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      _getTweets () {
        listTweet()
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.isLoading = false
              this.tweetList = res.data
            }
          })
      },
      fetchData () {
        this.isLoading = true
        // TODO: just for mocking loading, will be removed later
        setTimeout(this._getTweets, 1000)
      }
    },
    components: {
      TweetItem
    }
  }
</script>

<style scoped>

</style>
