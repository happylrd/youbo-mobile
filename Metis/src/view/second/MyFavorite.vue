<template>
  <div>
    <md-toolbar class="md-dense md-transparent">
      <md-button class="md-icon-button" @click="toPrevPage">
        <md-icon>arrow_back</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">我的喜欢</h2>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
    </md-toolbar>

    <div v-for="item in favorites" :key="item.id">
      <TweetItem :tweet="item"></TweetItem>
    </div>
  </div>
</template>

<script>
  import TweetItem from '../../components/tweetitem/TweetItem'
  import {listMyFavorite} from '../../api/user'
  import {CODE_SUCCESS} from '../../api/constant'

  export default {
    data () {
      return {
        favorites: []
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      _listMyFavorite () {
        let userId = localStorage.__y_user_id__
        listMyFavorite(userId)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.favorites = res.data
            }
          })
      },
      fetchData () {
        this._listMyFavorite()
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
