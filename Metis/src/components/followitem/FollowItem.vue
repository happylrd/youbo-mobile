<template>
  <div>
    <md-whiteframe>
      <div style="padding: 16px">
        <md-avatar>
          <img :src="follow.avatar" alt="头像">
        </md-avatar>
        {{follow.nickname}}
      </div>

      <div style="padding: 0 16px">
        {{follow.description}}123
      </div>

      <div style="text-align: right">
        <md-button class="md-raised md-primary">{{follow.followed ? '已关注' : '加关注'}}</md-button>
      </div>
    </md-whiteframe>
  </div>
</template>

<script>
  export default {
    props: {
      follow: {
        type: Object
      }
    }
  }
</script>

<style scoped>

</style>
