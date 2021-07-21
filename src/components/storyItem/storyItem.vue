<template>
  <button class="c-story-item" @click="$emit('onPress')">
    <div class="avatar">
      <img :src="avatar" alt="user avatar" class="img">
    </div>
    <div class="username">{{username}}</div>
  </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./storyItem.scss" scoped>

</style>
