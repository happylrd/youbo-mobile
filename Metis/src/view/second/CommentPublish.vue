<template>
  <div>
    <md-toolbar class="md-dense md-transparent">
      <md-button class="md-icon-button" @click="closeCurrentPage">
        <md-icon>close</md-icon>
      </md-button>

      <span style="flex: 1"></span>

      <md-button class="md-raised md-primary" :disabled="!hasTextContent" @click="publishComment">回复</md-button>
    </md-toolbar>

    <div style="padding: 16px">
      <md-avatar style="margin-right: 16px">
        <img src="../../common/image/avatar.png" alt="头像">
      </md-avatar>
      {{nickname}}
    </div>

    <div style="padding: 16px">
      <md-input-container>
        <label>发布你的回复</label>
        <md-textarea maxlength="150" v-model="textContent"></md-textarea>
      </md-input-container>
    </div>

    <md-snackbar :md-position="vertical + ' ' + horizontal" ref="CommentSnackbar" :md-duration="duration">
      <span>发表评论成功</span>
      <md-button class="md-accent" @click="closeSnackbar('CommentSnackbar')">确定</md-button>
    </md-snackbar>
  </div>
</template>

<script>
  import {publishComment} from '../../api/user'
  import {CODE_SUCCESS} from '../../api/constant'

  export default {
    data () {
      return {
        nickname: '竹轩听雨',
        textContent: '',
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
      closeCurrentPage () {
        this.$router.go(-1)
      },
      publishComment () {
        let userId = localStorage.__y_user_id__
        let tweetId = this.$route.params.id
        publishComment(userId, tweetId, this.textContent)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.openSnackbar('CommentSnackbar')
            }
          })
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
