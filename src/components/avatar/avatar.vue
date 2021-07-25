<template>
  <div class="avatar extra-small" v-if="isExtraSmall">
    <img :src="user.avatar" alt="user avatar" class="img">
  </div>
  <div class="avatar small" v-if="isSmall">
    <img :src="user.avatar" alt="user avatar" class="img">
  </div>
  <div class="avatar medium" v-if="isMedium">
    <img :src="user.avatar" alt="user avatar" class="img">
  </div>
  <div class="avatar large" v-if="isLarge">
    <img :src="user.avatar" alt="user avatar" class="img">
  </div>
  <div class="avatar extra-large" v-if="isExtraLarge">
    <img :src="user.avatar" alt="user avatar" class="img">
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    isExtraSmall: {
      type: Boolean
    },
    isSmall: {
      type: Boolean
    },
    isMedium: {
      type: Boolean
    },
    isLarge: {
      type: Boolean
    },
    isExtraLarge: {
      type: Boolean
    },
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style src="./avatar.scss" lang="scss" scoped>

</style>
