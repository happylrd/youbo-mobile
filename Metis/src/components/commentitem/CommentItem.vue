<template>
  <div>
    <md-whiteframe>
      <div style="padding: 16px">
        <md-avatar>
          <img :src="comment.avatar" alt="评论者头像">
        </md-avatar>
        {{comment.nickname}}
      </div>

      <div style="padding: 0 16px">
        {{comment.content}}
      </div>

      <div style="text-align: right; padding: 0 16px">
        {{createAt}}
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
    },
    computed: {
      createAt () {
        let createAt = this.comment.createAt
        let date = createAt[0] + '-' + createAt[1] + '-' + createAt[2]
        let time = createAt[3] + ':' + createAt[4] + ':' + createAt[5]
        return date + ' ' + time
      }
    }
  }
</script>

<style scoped>

</style>
