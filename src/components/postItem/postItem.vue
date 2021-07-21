<template>
  <div class="c-post-item" @click="$emit('onPress')">
    <div class="user--wrapper">
    <div class="avatar">
      <img :src="user.avatar" alt="user avatar" class="img">
    </div>
    <div class="username">{{user.username}}</div>
    </div>
    <div class="user__content">
      <h2>{{user.title}}</h2>
      <div class="subtitle">{{user.subtitle}}</div>
      <div class="tools">
        <div class="star tool__item"><icon class="star-svg" name="star"/>Star</div>
        <div class="likes tool__item">{{user.likes}}</div>
        <div class="fork tool__item"><icon class="fork-svg" name="fork"/>Fork</div>
        <div class="forums tool__item">{{user.forums}}</div>
      </div>
    </div>
    <toggleComment :user="user"/>
    <div class="data">{{user.data}}</div>
  </div>

</template>

<script>
import toggleComment from '../toggle-comment/toggle-comment.vue'
import { icon } from '../../icons'
export default {
  components: {
    icon,
    toggleComment
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
