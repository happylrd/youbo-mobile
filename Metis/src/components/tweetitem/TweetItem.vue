<template>
  <div>
    <md-card>
      <div @click="toTweetDetail">
        <md-card-header>
          <md-avatar>
            <img :src="tweet.avatar" alt="头像">
          </md-avatar>

          <div class="md-title">{{tweet.nickname}}</div>
          <div class="md-subhead">{{createAt}}</div>
        </md-card-header>

        <md-card-content>
          {{textContent}}
        </md-card-content>

        <md-card-media v-if="imageSize > 0">
          <img :src="imageContent" alt="推文图片">
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
  import { FRAGMENT_TEXT, FRAGMENT_IMAGE } from '../../api/constant'

  export default {
    props: {
      tweet: {
        type: Object
      }
    },
    computed: {
      createAt () {
        let createAt = this.tweet.createAt
        let date = createAt[0] + '-' + createAt[1] + '-' + createAt[2]
        let time = createAt[3] + ':' + createAt[4] + ':' + createAt[5]
        return date + ' ' + time
      },
      textContent () {
        let textFragment = this.tweet.fragments
          .filter(fragment => fragment.type === FRAGMENT_TEXT)[0]
        return textFragment.content
      },
      imageSize () {
        let imageFragments = this.tweet.fragments
          .filter(fragment => fragment.type === FRAGMENT_IMAGE)
        return imageFragments.length
      },
      imageContent () {
        if (this.imageSize > 0) {
          return this.tweet.fragments
            .filter(fragment => fragment.type === FRAGMENT_IMAGE)[0].content
        }
      }
    },
    methods: {
      toTweetDetail () {
        console.log(this.tweet.id)
        this.$router.push('/tweet/' + this.tweet.id)
      },
      addComment () {
        this.$router.push('/tweet/' + this.tweet.id + '/publish/comment')
      }
    }
  }
</script>

<style scoped>

</style>
