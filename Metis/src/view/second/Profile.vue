<template>
  <div>
    <md-toolbar class="md-dense md-transparent">
      <md-button class="md-icon-button" @click="toPrevPage">
        <md-icon>arrow_back</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">编辑个人资料</h2>
    </md-toolbar>

    <div v-if="user !== null">
      <div style="padding: 16px">
        <md-avatar class="md-large">
          <img :src="user.avatar" alt="头像">
        </md-avatar>

        <input ref="avatar" type="file" @change="uploadAvatar">
      </div>

      <div style="padding: 16px">
        <md-input-container>
          <label>昵称</label>
          <md-input v-model="user.nickname"></md-input>
        </md-input-container>

        <md-input-container>
          <label>真实姓名</label>
          <md-input v-model="user.realname"></md-input>
        </md-input-container>

        <div>
          <md-radio v-model="user.gender" md-value="1">男</md-radio>
          <md-radio v-model="user.gender" md-value="2">女</md-radio>
          <md-radio v-model="user.gender" md-value="0">未知</md-radio>
        </div>

        <md-input-container>
          <label>简介</label>
          <md-textarea v-model="user.description" maxlength="150"></md-textarea>
        </md-input-container>

        <div style="text-align: center">
          <md-button class="md-raised md-primary" style="width: 90%" @click="updateUserInfo">更新</md-button>
        </div>
      </div>
    </div>

    <md-snackbar :md-position="vertical + ' ' + horizontal" ref="UpdateAvatarSuccessSnackbar" :md-duration="duration">
      <span>更新头像成功</span>
      <md-button class="md-accent" @click="closeSnackbar('UpdateAvatarSuccessSnackbar')">确定</md-button>
    </md-snackbar>

    <md-snackbar :md-position="vertical + ' ' + horizontal" ref="UpdateInfoSnackbar" :md-duration="duration">
      <span>更新个人信息成功</span>
      <md-button class="md-accent" @click="closeSnackbar('UpdateInfoSnackbar')">确定</md-button>
    </md-snackbar>
  </div>
</template>

<script>
  import { getNormalInfo, updateAvatar, updateInfo } from '../../api/user'
  import { CODE_SUCCESS } from '../../api/constant'

  const SERVER_PARAM = 'upload_avatar'

  export default {
    data () {
      return {
        user: null,
        avatar: null,
        vertical: 'bottom',
        horizontal: 'center',
        duration: 4000
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      _getNormalInfo () {
        let userId = localStorage.__y_user_id__
        getNormalInfo(userId)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.user = res.data
            }
          })
      },
      fetchData () {
        this._getNormalInfo()
      },
      toPrevPage () {
        this.$router.go(-1)
      },
      uploadAvatar (e) {
        e.preventDefault()
        let userId = localStorage.__y_user_id__

        let files = this.$refs.avatar.files
        let data = new FormData()
        data.append(SERVER_PARAM, files[0])

        updateAvatar(userId, data)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.openSnackbar('UpdateAvatarSuccessSnackbar')
              localStorage.__y_user_avatar__ = res.data.avatar
            }
          })
      },
      updateUserInfo () {
        let userId = localStorage.__y_user_id__
        updateInfo(userId, this.user.nickname, this.user.realname, this.user.gender, this.user.description)
          .then(res => {
            if (res.code === CODE_SUCCESS) {
              this.openSnackbar('UpdateInfoSnackbar')
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
