<template>
  <div class="slider-item">
    <div class="user--wrapper">
      <div class="avatar">
        <img :src="avatar" alt="user avatar" class="img">
      </div>
      <div class="username">{{ username }}</div>
    </div>
    <button class="follow">follow</button>
  </div>
</template>

<script>

export default {
  name: 'StoriesItem',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    storiesText: {
      type: String,
      required: true
    }
  }

}
</script>

<style lang="scss" src="./storiesItemSlider.scss" scoped>

</style>
