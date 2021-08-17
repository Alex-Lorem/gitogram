<template>
<div class="c-comment">
    <span class="username">{{author}}:</span>
    {{comment}}
</div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    author: {
      type: String
    },
    comment: {
      type: String
    }
  }
}
</script>

<style lang="scss" src="./comment.scss" scoped>

</style>
