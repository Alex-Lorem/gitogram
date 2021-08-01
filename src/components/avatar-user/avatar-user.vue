<template>
  <div class="wrapper">
    <avatar :user="user" :is-mega-small="isMegaSmall" :is-small="isSmall"/>
    <div class="user">
      {{ user.username }}
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
    user: {
      type: Object,
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
