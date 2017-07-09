<template>
  <div>
    <router-view></router-view>

    <div class="fab-fixed-right-bottom">
      <md-button class="md-fab" @click="addTweet">
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <div class="bottombar-fixed-bottom" style="width: 100%">
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
