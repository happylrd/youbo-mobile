<template>
  <div id="app">
    <div class="bottombar-fixed-bottom" style="width: 100%">
      <md-bottom-bar md-shift>
        <md-bottom-bar-item md-icon="ondemand_video">主页</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="music_note">瞬间</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="books" md-active>通知</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="photo">我的</md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .bottombar-fixed-bottom {
    position: fixed;
    bottom: 0;
  }
</style>
