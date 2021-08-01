<template>
  <div class="c-slider-item">
    <div class="slider-item-header">
    <div class="progressBar--wrapper">
      <progressBar />
    </div>
    <div class="user--wrapper">
      <avatar-user :user="user" :is-mega-small="true" />
    </div>
    </div>
    <div class="content">
     <div class="img--wrapper">
       <img :src="user.picture" alt="user img" class="img">
     </div>
      <div class="text">{{user.storiesText}}</div>
    </div>
    <div class="follow--wrapper">
      <follow />
    </div>
  </div>
</template>

<script>

import progressBar from '../progressBar'
import follow from '../follow'
import avatarUser from '../avatar-user/avatar-user.vue'

export default {
  name: 'StoriesItem',
  components: {
    follow,
    progressBar,
    avatarUser
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./storiesItemSlider.scss" scoped>

</style>
