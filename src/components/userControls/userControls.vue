<template>
  <div class="icons__wrapper">
    <button class="icon home" @click="$router.push({name: 'feeds'})">
      <icon name="home"/>
    </button>
    <button class="account" @click="$router.push({name: 'account'})">
      <avatar :avatar="avatar" :is-extra-small="true" />
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
