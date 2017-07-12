<template>
  <div>
    <md-toolbar class="md-dense md-transparent">
      <md-button class="md-icon-button" @click="toPrevPage">
        <md-icon>arrow_back</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">我的粉丝</h2>

      <md-button class="md-icon-button">
        <md-icon>more_horiz</md-icon>
      </md-button>
    </md-toolbar>

    <div v-for="item in follower" :key="item.id">
      <FollowItem :follow="item"></FollowItem>
    </div>
  </div>
</template>

<script>
  import { listMyFollower } from '../../api/user'
  import { CODE_SUCCESS } from '../../api/constant'
  import FollowItem from '../../components/followitem/FollowItem'

  export default {
    data () {
      return {
        follower: []
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this._listMyFollower()
      },
      _listMyFollower () {
        let userId = localStorage.__y_user_id__
        listMyFollower(userId)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.follower = res.data
              console.log(res)
            }
          })
      },
      toPrevPage () {
        this.$router.go(-1)
      }
    },
    components: {
      FollowItem
    }
  }
</script>

<style scoped>

</style>
