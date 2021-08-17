<template>
  <div class="spinner-wrapper" :class="[color]">
    <icon name="spinner"></icon>
  </div>
</template>

<script>
export default {
  name: 'spinner',
  props: {
    color: {
      validator (value) {
        return ['green'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" src="./spinner.scss" scoped />
