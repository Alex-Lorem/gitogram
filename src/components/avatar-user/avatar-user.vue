<template>
  <div class="wrapper">
    <avatar :avatar="avatar" :is-mega-small="isMegaSmall" :is-small="isSmall"/>
    <div class="user">
      {{ username }}
    </div>

  </div>
</template>

<script>
import avatar from '../avatar'
export default {
  name: 'avatar-user',
  components: {
    avatar
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
    isMegaSmall: {
      type: Boolean
    },
    isSmall: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" src="./avatar-user.scss" scoped>

</style>
