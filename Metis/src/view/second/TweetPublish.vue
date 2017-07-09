<template>
  <div>
    <md-toolbar class="md-dense md-transparent">
      <md-button class="md-icon-button" @click="closeCurrentPage">
        <md-icon>close</md-icon>
      </md-button>

      <span style="flex: 1"></span>

      <md-button class="md-raised md-primary" :disabled="!hasTextContent">发表</md-button>
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
      <md-input-container>
        <label>图片上传</label>
        <md-file v-model="onlyImages" accept="image/*"></md-file>
      </md-input-container>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        nickname: '竹轩听雨',
        textContent: ''
      }
    },
    computed: {
      hasTextContent () {
        return this.textContent !== ''
      }
    },
    methods: {
      closeCurrentPage () {
        this.$router.push('/main/home')
      }
    }
  }
</script>

<style scoped>

</style>
