<template>
  <div v-if="user !== null">
    <div style="text-align: center; margin-top: 16px">
      <md-avatar class="md-large">
        <img :src="user.avatar" alt="头像">
      </md-avatar>
    </div>
    <div style="text-align: center; margin-top: 16px; margin-bottom: 8px">
      {{user.nickname}}
    </div>
    <div style="text-align: center">
      {{user.description}}
    </div>
    <div style="text-align: center">
      <md-button class="md-primary">推文{{user.tweetSize}}</md-button>
      <md-button class="md-primary">关注{{user.followingSize}}</md-button>
      <md-button class="md-primary">粉丝{{user.followerSize}}</md-button>
    </div>

    <md-list>
      <md-list-item @click="toRankPage">
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">whatshot</md-icon>
        </md-button>

        <span>风云榜</span>

        <md-button class="md-icon-button md-list-action">
          <md-icon>chevron_right</md-icon>
        </md-button>
      </md-list-item>
    </md-list>

    <md-list>
      <md-list-item @click="toMyCommentPage">
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">comment</md-icon>
        </md-button>

        <span>我的评论({{user.commentSize}})</span>

        <md-button class="md-icon-button md-list-action">
          <md-icon>chevron_right</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item @click="toMyCollectionPage">
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>

        <span>我的收藏({{user.collectionSize}})</span>

        <md-button class="md-icon-button md-list-action">
          <md-icon>chevron_right</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item @click="toMyFavoritePage">
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">favorite</md-icon>
        </md-button>

        <span>我的喜欢({{user.favoriteSize}})</span>

        <md-button class="md-icon-button md-list-action">
          <md-icon>chevron_right</md-icon>
        </md-button>
      </md-list-item>
    </md-list>

    <md-list>
      <md-list-item @click="toRankPage">
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">settings</md-icon>
        </md-button>

        <span>设置</span>

        <md-button class="md-icon-button md-list-action">
          <md-icon>chevron_right</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  import {getInfoById} from '../api/user'
  import {CODE_SUCCESS} from '../api/constant'

  export default {
    data () {
      return {
        user: null
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this._getInfoById()
      },
      _getInfoById () {
        let userId = localStorage.__y_user_id__
        getInfoById(userId)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.user = res.data
            }
          })
      },
      toRankPage () {
        console.log('RankPage')
      },
      toMyCommentPage () {
        console.log('MyCommentPage')
      },
      toMyCollectionPage () {
        console.log('MyCollectionPage')
      },
      toMyFavoritePage () {
        console.log('MyFavoritePage')
      }
    }
  }
</script>

<style scoped>

</style>
