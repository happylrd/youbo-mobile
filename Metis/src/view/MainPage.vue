<template>
  <div>
    <md-toolbar class="md-dense">
      <h2 class="md-title" style="flex: 1">Youbo</h2>

      <md-avatar>
        <img src="../common/image/logo.png" alt="Logo">
      </md-avatar>
    </md-toolbar>

    <div style="margin-bottom: 56px">
      <router-view></router-view>
    </div>

    <div class="fab-fixed-right-bottom" style="z-index: 10">
      <md-button class="md-fab" @click="addTweet">
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <div class="bottombar-fixed-bottom" style="width: 100%; z-index: 10">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Footer from '../components/footer/Footer'

  export default {
    methods: {
      addTweet () {
        this.$router.push('/publish/tweet')
      }
    },
    components: {
      Footer
    }
  }
</script>

<style scoped>
  .bottombar-fixed-bottom {
    position: fixed;
    bottom: 0;
  }

  .fab-fixed-right-bottom {
    position: fixed;
    bottom: 64px;
    right: 16px
  }
</style>
