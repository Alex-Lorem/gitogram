<template>
  <div class="icons__wrapper">
    <a class="icon home">
      <icon name="home"/>
    </a>
    <button class="account" @click="$emit('onPress')">
      <avatar :user="user" :is-extra-small="true"/>
    </button>
    <a class="icon exit">
      <icon name="exit"/>
    </a>
  </div>
</template>

<script>
import avatar from '../avatar'
export default {
  name: 'userControls',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    avatar
  }
}
</script>

<style lang="scss" src="./userControls.scss" scoped>

</style>
