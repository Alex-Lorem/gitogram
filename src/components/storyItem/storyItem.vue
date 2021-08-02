<template>
  <button class="c-story-item" @click="$emit('onPress')">
    <button class="avatar">
      <avatar
        :avatar="avatar"
        :is-large="true"
      />
    </button>
    <div class="username">{{username}}</div>
  </button>
</template>

<script>
import avatar from '../avatar'
export default {
  components: {
    avatar
  },
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./storyItem.scss" scoped>

</style>
