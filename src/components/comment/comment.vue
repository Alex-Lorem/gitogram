<template>
<div class="c-comment">
  <p>
    <span class="username">{{author}}</span>
    {{comments_url}}
  </p>
</div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    author: {
      type: String,
      required: true
    },
    comments_url: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./comment.scss" scoped>

</style>
