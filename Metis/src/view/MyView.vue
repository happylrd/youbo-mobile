<template>
  <div>
    <div style="text-align: center; margin-top: 16px">
      <md-avatar class="md-large">
        <img src="../common/image/avatar.png" alt="People">
      </md-avatar>
    </div>
    <div style="text-align: center; margin-top: 16px; margin-bottom: 8px">
      {{nickname}}
    </div>
    <div style="text-align: center">
      {{desc}}
    </div>
    <div style="text-align: center">
      <md-button class="md-primary">推文{{tweetSize}}</md-button>
      <md-button class="md-primary">关注{{followingSize}}</md-button>
      <md-button class="md-primary">粉丝{{followerSize}}</md-button>
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

        <span>我的评论({{commentSize}})</span>

        <md-button class="md-icon-button md-list-action">
          <md-icon>chevron_right</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item @click="toMyCollectionPage">
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>

        <span>我的收藏({{collectionSize}})</span>

        <md-button class="md-icon-button md-list-action">
          <md-icon>chevron_right</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item @click="toMyFavoritePage">
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">favorite</md-icon>
        </md-button>

        <span>我的喜欢({{favoriteSize}})</span>

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
  export default {
    data () {
      return {
        nickname: '竹轩听雨',
        desc: '这个人很懒，什么都没有留下',
        tweetSize: 10,
        followingSize: 20,
        followerSize: 5,
        commentSize: 1,
        collectionSize: 2,
        favoriteSize: 3
      }
    },
    methods: {
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
