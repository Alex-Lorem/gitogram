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

      <div v-if="!loading">
        <div v-html="content" class="readme"></div>
      </div>
      <div class="info" v-else>
        <placeholder />
      </div>
    </div>
    <div class="follow--wrapper" @click="$emit('followRepo')">
      <follow :loading="following.loading" :theme="(following.isFollowed ? 'grey' : 'green')">
        {{following.isFollowed ? 'Unfollow' : 'Follow'}}
      </follow>
    </div>
  </div>
</template>

<script>

import progressBar from '../progressBar'
import follow from '../follow'
import avatarUser from '../avatar-user/avatar-user.vue'
import placeholder from '../placeholder'

export default {
  name: 'StoriesItem',
  emits: ['followRepo'],
  components: {
    follow,
    progressBar,
    avatarUser,
    placeholder
  },
  props: {
    following: {
      type: Object
    },
    isFollowed: {
      type: Boolean
    },
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
    loading: {
      type: Boolean,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./storiesItemSlider.scss" scoped>

</style>
