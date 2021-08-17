<template>
  <button class="btn loading" v-if="loading">
    <icon name="spinner" class="spinner"></icon>
  </button>
  <button class="btn" :class="[theme]" v-else>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'follow',
  props: {
    loading: {
      type: Boolean
    },
    theme: {
      validator (value) {
        return ['green', 'grey'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" src="./follow.scss" scoped>

</style>
