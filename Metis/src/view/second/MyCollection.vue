<template>
  <div>
    <md-toolbar class="md-dense md-transparent">
      <md-button class="md-icon-button" @click="toPrevPage">
        <md-icon>arrow_back</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">我的收藏</h2>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
    </md-toolbar>

    <div v-for="item in collections" :key="item.id">
      <TweetItem :tweet="item"></TweetItem>
    </div>
  </div>
</template>

<script>
  import TweetItem from '../../components/tweetitem/TweetItem'
  import {listMyCollection} from '../../api/user'
  import {CODE_SUCCESS} from '../../api/constant'

  export default {
    data () {
      return {
        collections: []
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      _listMyCollection () {
        let userId = localStorage.__y_user_id__
        listMyCollection(userId)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.collections = res.data
            }
          })
      },
      fetchData () {
        this._listMyCollection()
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
