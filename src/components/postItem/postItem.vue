<template>
  <div class="c-post-item" @click="$emit('onPress')">
    <div class="user--wrapper">
      <avatar :user="user" :is-small="true" />
      <div class="username">{{user.username}}</div>
    </div>
    <div class="user__content">
      <h2>{{user.title}}</h2>
      <div class="subtitle">{{user.subtitle}}</div>
      <div class="tools--wrapper">
        <postTools :user="user"/>
      </div>
    </div>
    <toggleComment :user="user"/>
    <div class="data">{{user.data}}</div>
  </div>

</template>

<script>
import toggleComment from '../toggle-comment/toggle-comment.vue'
import postTools from '../postTools'
import avatar from '../avatar'
export default {
  components: {
    toggleComment,
    postTools,
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

<style lang="scss" src="./postItem.scss" scoped>

</style>
