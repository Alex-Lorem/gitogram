<template>
  <div class="tools">
    <div class="star tool__item"><icon class="star-svg" name="star"/>Star</div>
    <div class="likes tool__item">{{user.likes}}</div>
    <div class="fork tool__item"><icon class="fork-svg" name="fork"/>Fork</div>
    <div class="forums tool__item">{{user.forums}}</div>
  </div>
</template>

<script>
import icon from '../icon'

export default {
  name: 'postTools',
  components: {
    icon
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./postTools.scss" scoped>

</style>
