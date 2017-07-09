<template>
  <div>
    <router-view></router-view>

    <div class="bottombar-fixed-bottom" style="width: 100%">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Footer from '../components/footer/Footer'

  export default {
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
</style>
