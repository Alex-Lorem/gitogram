<template>
  <button class="c-story-item" @click="$emit('onPress')">
    <button class="avatar">
      <avatar
      :user="user"
      :is-large="true"
      />
    </button>
    <div class="username">{{user.username}}</div>
  </button>
</template>

<script>
import avatar from '../avatar'
export default {
  components: {
    avatar
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./storyItem.scss" scoped>

</style>
