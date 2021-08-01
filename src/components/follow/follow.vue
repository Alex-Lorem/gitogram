<template>
  <button class="follow" :class="{ active: unfollowed }"
          @click="unfollowed = !unfollowed"
          >
     <p v-if="unfollowed">Unfollowed</p>
     <p v-if="!unfollowed">Follow</p>
  </button>
</template>

<script>
export default {
  name: 'follow',
  data () {
    return {
      unfollowed: false
    }
  }
}
</script>

<style lang="scss" src="./follow.scss" scoped>

</style>
