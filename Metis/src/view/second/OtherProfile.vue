<template>
  <div>
    <md-toolbar class="md-dense md-transparent">
      <md-button class="md-icon-button" @click="toPrevPage">
        <md-icon>arrow_back</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">个人主页</h2>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
    </md-toolbar>

  </div>
</template>

<script>
  export default {
    methods: {
      toPrevPage () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
