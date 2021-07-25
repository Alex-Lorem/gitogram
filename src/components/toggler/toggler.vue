<template>
<button :class="['button',{active: isOpened}]" @click="toggle">
  <span class="text">{{ isOpened ? "Hide" : "Show"}} issues</span>
  <div class="icon">
    <icon name="triangle"/>
  </div>
</button>
</template>

<script>
import icon from '../icon/index.js'
export default {
  name: 'toggler',
  components: { icon },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" src="./toggler.scss" scoped>

</style>
