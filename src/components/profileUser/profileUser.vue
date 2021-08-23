<template>
  <div class="user-container">
    <div class="user-avatar">
      <avatar :is-large="true" :avatar="avatar" />
    </div>
    <div class="user-info">
      <h4 class="user-login">{{ login }}</h4>
      <div class="user-numbers">
        <div class="repos">
          <span>{{ repos }}</span> repositories
        </div>
        <div class="starred">
          <span>{{ starred }}</span>
          <button class="numbers-link">starred</button>
        </div>
      </div>
      <div class="user-name">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script>
import avatar from '../avatar'

export default {
  name: 'profileUser',
  components: {
    avatar
  },
  props: {
    avatar: {
      type: String
    },
    repos: {
      type: Number
    },
    name: {
      type: String
    },
    login: {
      type: String
    },
    starred: {
      type: Number
    }
  }
}
</script>

<style lang="scss" src="./profileUser.scss" scoped>

</style>
