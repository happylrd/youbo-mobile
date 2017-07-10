<template>
  <div>
    <md-whiteframe>
      <div style="padding: 16px">
        <md-avatar>
          <img src="../../common/image/avatar.png" alt="评论者头像">
        </md-avatar>
        {{comment.nickname}}
      </div>

      <div style="padding: 16px">
        {{comment.textContent}}
      </div>

      <div style="text-align: center">
        <span>
          <md-button class="md-icon-button">
            <md-icon>comment</md-icon>
          </md-button>
        </span>

        <span>
          <md-button class="md-icon-button">
            <md-icon>star</md-icon>
          </md-button>
         </span>

        <span>
          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
         </span>
      </div>
    </md-whiteframe>
  </div>
</template>

<script>
  export default {
    props: {
      comment: {
        type: Object
      }
    }
  }
</script>

<style scoped>

</style>
