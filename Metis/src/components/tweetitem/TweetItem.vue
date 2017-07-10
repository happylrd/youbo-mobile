<template>
  <div>
    <md-card>
      <div @click="toTweetDetail">
        <md-card-header>
          <md-avatar>
            <img src="../../common/image/avatar.png" alt="头像">
          </md-avatar>

          <div class="md-title">{{tweet.nickname}}</div>
          <div class="md-subhead">{{tweet.createAt}}</div>
        </md-card-header>

        <md-card-content>
          {{tweet.textContent}}
        </md-card-content>

        <md-card-media>
          <img src="http://cdn.happylrd.com/image/shaosiming_1.jpg" alt="推文图片">
        </md-card-media>
      </div>

      <div style="text-align: center">
        <span>
          <md-button class="md-icon-button" @click="addComment()">
            <md-icon>comment</md-icon>
          </md-button>
          {{tweet.commentSize}}
        </span>

        <span>
          <md-button class="md-icon-button">
            <md-icon>star</md-icon>
          </md-button>
          {{tweet.collectionSize}}
         </span>

        <span>
          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
          {{tweet.favoriteSize}}
         </span>
      </div>
    </md-card>
  </div>
</template>

<script>
  export default {
    props: {
      tweet: {
        type: Object
      }
    },
    methods: {
      toTweetDetail () {
        console.log(this.tweet.id)
        this.$router.push('/tweet/' + this.tweet.id)
      },
      addComment () {
        this.$router.push('/publish/comment')
      }
    }
  }
</script>

<style scoped>

</style>
