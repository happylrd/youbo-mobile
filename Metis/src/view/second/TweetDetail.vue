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

    <div v-if="tweet !== null">
      <md-card md-with-hover>
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

        <div style="text-align: center">
        <span>
        <md-button class="md-icon-button" @click="addComment()">
          <md-icon>comment</md-icon>
        </md-button>
          {{tweet.commentSize}}
         </span>

          <span>
        <md-button class="md-icon-button" @click="addCollection">
          <md-icon>star</md-icon>
        </md-button>
          {{tweet.collectionSize}}
          </span>

          <span>
        <md-button class="md-icon-button" @click="addFavorite">
          <md-icon>favorite</md-icon>
        </md-button>
          {{tweet.favoriteSize}}
          </span>
        </div>
      </md-card>

      <div v-for="item in tweet.comments" :key="item.id">
        <CommentItem :comment="item"></CommentItem>
      </div>
    </div>

    <md-snackbar :md-position="vertical + ' ' + horizontal" ref="CollectionSnackbar" :md-duration="duration">
      <span>添加收藏成功</span>
      <md-button class="md-accent" @click="closeSnackbar('CollectionSnackbar')">确定</md-button>
    </md-snackbar>

    <md-snackbar :md-position="vertical + ' ' + horizontal" ref="FavoriteSnackbar" :md-duration="duration">
      <span>添加喜欢成功</span>
      <md-button class="md-accent" @click="closeSnackbar('FavoriteSnackbar')">确定</md-button>
    </md-snackbar>
  </div>
</template>

<script>
  import CommentItem from '../../components/commentitem/CommentItem'
  import { getTweet } from '../../api/tweet'
  import { collectTweet, doFavorite } from '../../api/user'
  import { CODE_SUCCESS, FRAGMENT_TEXT, FRAGMENT_IMAGE } from '../../api/constant'

  export default {
    data () {
      return {
        tweet: null,
        vertical: 'bottom',
        horizontal: 'center',
        duration: 4000
      }
    },
    created () {
      this.fetchData()
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
      _getTweet () {
        getTweet(this.$route.params.id)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.tweet = res.data
              console.log(this.tweet.comments)
            }
          })
      },
      fetchData () {
        this._getTweet()
      },
      addComment () {
        this.$router.push('/tweet/' + this.tweet.id + '/publish/comment')
      },
      addCollection () {
        let userId = localStorage.__y_user_id__
        let tweetId = this.tweet.id
        collectTweet(userId, tweetId)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.openSnackbar('CollectionSnackbar')
            }
          })
      },
      addFavorite () {
        let userId = localStorage.__y_user_id__
        let tweetId = this.tweet.id
        doFavorite(userId, tweetId)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.openSnackbar('FavoriteSnackbar')
            }
          })
      },
      toPrevPage () {
        this.$router.go(-1)
      },
      openSnackbar (ref) {
        this.$refs[ref].open()
      },
      closeSnackbar (ref) {
        this.$refs[ref].close()
      }
    },
    components: {
      CommentItem
    }
  }
</script>

<style scoped>

</style>
