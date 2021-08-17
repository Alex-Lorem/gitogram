<template>
  <div class="icons__wrapper">
    <button class="icon home">
      <icon name="home"/>
    </button>
    <button class="account" >
      <div v-if="loading"><img src="" alt=""> </div>
      <avatar :avatar="avatar" :is-extra-small="true" v-else/>
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
    },
    loading: {
      type: Boolean
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
