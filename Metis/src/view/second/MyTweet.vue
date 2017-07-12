<template>
  <div>
    <md-toolbar class="md-dense md-transparent">
      <md-button class="md-icon-button" @click="toPrevPage">
        <md-icon>arrow_back</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">我的推文</h2>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
    </md-toolbar>

    <div v-for="item in tweets" :key="item.id">
      <TweetItem :tweet="item"></TweetItem>
    </div>
  </div>
</template>

<script>
  import TweetItem from '../../components/tweetitem/TweetItem'
  import { listMyTweet } from '../../api/user'
  import { CODE_SUCCESS } from '../../api/constant'

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
      _listMyTweet () {
        let userId = localStorage.__y_user_id__
        listMyTweet(userId)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.tweets = res.data
            }
          })
      },
      fetchData () {
        this._listMyTweet()
      },
      toPrevPage () {
        this.$router.go(-1)
      }
    },
    components: {
      TweetItem
    }
  }
</script>

<style scoped>

</style>
