<template>
  <div class="c-post-item" @click="$emit('onPress')">
    <div class="user--wrapper">
      <avatar-user :avatar="avatar" :username="username" :is-small="true" />
    </div>
    <div class="user__content">
      <h2>{{title}}</h2>
      <div class="subtitle">{{description}}</div>
      <div class="tools--wrapper">
        <postTools :forks_count="forks_count" :watchers_count="watchers_count"/>
      </div>
    </div>
    <toggleComment :comments_url="comments_url"/>
    <div class="data">{{data}}</div>
  </div>

</template>

<script>
import toggleComment from '../toggle-comment/toggle-comment.vue'
import postTools from '../postTools'
import avatarUser from '../avatar-user/avatar-user.vue'

export default {
  components: {
    toggleComment,
    postTools,
    avatarUser
  },
  methods: {
    getDescription (content) {
      if (content) {
        return true
      } else return false
    }
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    data: {
      type: String,
      required: true
    },
    forks_count: {
      type: Number,
      required: true
    },
    watchers_count: {
      type: Number,
      required: true
    },
    comments_url: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./postItem.scss" scoped>

</style>
