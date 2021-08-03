<template>
  <div class="c-slider-item">
    <div class="slider-item-header">
    <div class="progressBar--wrapper">
      <progressBar />
    </div>
    <div class="user--wrapper">
      <avatar-user :avatar="avatar" :username="username" :is-mega-small="true" />
    </div>
    </div>
    <div class="content">
     <div class="img--wrapper">
       <img :src="picture" alt="user img" class="img">
     </div>
      <div class="text">{{description}}</div>
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
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./storiesItemSlider.scss" scoped>

</style>
