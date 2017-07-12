<template>
  <div>
    <md-toolbar class="md-dense md-transparent">
      <md-button class="md-icon-button" @click="toPrevPage">
        <md-icon>arrow_back</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">我的评论</h2>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
    </md-toolbar>

    <div v-for="item in comments" :key="item.id">
      <CommentItem :comment="item"></CommentItem>
    </div>
  </div>
</template>

<script>
  import CommentItem from '../../components/commentitem/CommentItem'
  import {listMyComment} from '../../api/user'
  import {CODE_SUCCESS} from '../../api/constant'

  export default {
    data () {
      return {
        comments: []
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      _listMyComment () {
        let userId = localStorage.__y_user_id__
        listMyComment(userId)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.comments = res.data
              console.log(res)
            }
          })
      },
      fetchData () {
        this._listMyComment()
      },
      toPrevPage () {
        this.$router.go(-1)
      }
    },
    components: {
      CommentItem
    }
  }
</script>

<style scoped>

</style>
