<template>
  <button class="c-account" @click="$emit('onPress')">
    <img :src="account" alt="account photo">
  </button>
</template>

<script>
export default {
  props: {
    account: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./account.scss" scoped>

</style>
