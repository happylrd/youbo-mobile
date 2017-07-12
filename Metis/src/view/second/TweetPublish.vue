<template>
  <div>
    <md-toolbar class="md-dense md-transparent">
      <md-button class="md-icon-button" @click="closeCurrentPage">
        <md-icon>close</md-icon>
      </md-button>

      <span style="flex: 1"></span>

      <md-button class="md-raised md-primary" :disabled="!hasTextContent" @click="addTweet">发表</md-button>
    </md-toolbar>

    <div style="padding: 16px">
      <md-avatar style="margin-right: 16px">
        <img src="../../common/image/avatar.png" alt="头像">
      </md-avatar>
      {{nickname}}
    </div>

    <div style="padding: 16px">
      <md-input-container>
        <label>有什么新鲜事？</label>
        <md-textarea maxlength="150" v-model="textContent"></md-textarea>
      </md-input-container>
    </div>

    <div style="padding: 16px">
      <input ref="imageContent" type="file" @change="_uploadImage">
    </div>

    <md-snackbar :md-position="vertical + ' ' + horizontal" ref="addTweetSuccessSnackbar" :md-duration="duration">
      <span>发表推文成功</span>
      <md-button class="md-accent" @click="closeSnackbar('addTweetSuccessSnackbar')">确定</md-button>
    </md-snackbar>
  </div>
</template>

<script>
  import {upload, publishTweet} from '../../api/user'
  import {CODE_SUCCESS, FRAGMENT_TEXT, FRAGMENT_IMAGE} from '../../api/constant'

  const SERVER_FILE_PARAM = 'upload_file'

  export default {
    data () {
      return {
        nickname: '竹轩听雨',
        textContent: '',
        imageUrl: '',
        vertical: 'bottom',
        horizontal: 'center',
        duration: 4000
      }
    },
    computed: {
      hasTextContent () {
        return this.textContent !== ''
      }
    },
    methods: {
      _uploadImage () {
        let files = this.$refs.imageContent.files
        let data = new FormData()
        data.append(SERVER_FILE_PARAM, files[0])

        upload(data)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.imageUrl = res.data.url
            }
          })
      },
      addTweet () {
        this._uploadImage()
        let userId = localStorage.__y_user_id__
        let fragments = [
          {
            'type': FRAGMENT_TEXT,
            'content': this.textContent
          },
          {
            'type': FRAGMENT_IMAGE,
            'content': this.imageUrl
          }
        ]
        publishTweet(userId, fragments)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.openSnackbar('addTweetSuccessSnackbar')
            }
          })
      },
      closeCurrentPage () {
        this.$router.go(-1)
      },
      openSnackbar (ref) {
        this.$refs[ref].open()
      },
      closeSnackbar (ref) {
        this.$refs[ref].close()
      }
    }
  }
</script>

<style scoped>

</style>
