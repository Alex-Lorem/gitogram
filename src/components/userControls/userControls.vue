<template>
  <div class="icons__wrapper">
    <button class="icon home">
      <icon name="home"/>
    </button>
    <button class="account" @click="$emit('onPress')">
      <avatar :avatar="avatar" :is-extra-small="true"/>
    </button>
    <button class="icon exit" @click="logout">
      <icon name="exit"/>
    </button>
  </div>
</template>

<script>
import avatar from '../avatar'
import { mapActions } from 'vuex'
export default {
  name: 'userControls',
  props: {
    avatar: {
      type: String
    }
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  },
  components: {
    avatar
  }
}
</script>

<style lang="scss" src="./userControls.scss" scoped>

</style>
