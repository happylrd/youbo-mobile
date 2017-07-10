<template>
  <div>
    <div style="padding: 0px 16px">
      <md-icon class="md-primary">person</md-icon>

      <md-avatar class="md-list-action">
        <img src="../../common/image/avatar.png" alt="头像">
      </md-avatar>
    </div>

    <div style="padding: 0px 16px;margin-top: 8px;">{{notification.content}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      notification: {
        type: Object
      }
    }
  }
</script>

<style scoped>

</style>
