<template>
<div class="c-comment">
  <p>
    <span class="username">{{author}}</span>
    {{comment}}
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
    comment: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./comment.scss" scoped>

</style>
