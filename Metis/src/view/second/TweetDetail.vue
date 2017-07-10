<template>
  <div>
    <md-toolbar class="md-dense md-transparent">
      <md-button class="md-icon-button" @click="toPrevPage">
        <md-icon>arrow_back</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">推文</h2>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
    </md-toolbar>

    <md-card md-with-hover>
      <md-card-header>
        <md-avatar>
          <img src="../../common/image/avatar.png" alt="头像">
        </md-avatar>

        <div class="md-title">{{nickname}}</div>
        <div class="md-subhead">{{createAt}}</div>
      </md-card-header>

      <md-card-content>
        {{textContent}}
      </md-card-content>

      <md-card-media>
        <img src="http://cdn.happylrd.com/image/shaosiming_1.jpg" alt="推文图片">
      </md-card-media>

      <div style="text-align: center">
        <span>
        <md-button class="md-icon-button" @click="addComment()">
          <md-icon>comment</md-icon>
        </md-button>
          {{commentSize}}
         </span>

        <span>
        <md-button class="md-icon-button">
          <md-icon>star</md-icon>
        </md-button>
          {{collectionSize}}
          </span>

        <span>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
          {{favoriteSize}}
          </span>
      </div>
    </md-card>
  </div>
</template>

<script>
  const NO_EXIST_ID = -1

  export default {
    data () {
      return {
        id: NO_EXIST_ID,
        textContent: 'Awesome Image666666666666666666666666666666',
        createAt: '2017-07-10:09-09-09',
        commentSize: 10,
        collectionSize: 20,
        favoriteSize: 30,
        nickname: '竹轩听雨'
      }
    },
    created () {
      this.id = this.$route.params.id
    },
    methods: {
      addComment () {
        this.$router.push('/publish/comment')
      },
      toPrevPage () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
