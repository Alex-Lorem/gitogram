<template>
  <component :is="name"/>
</template>

<script>
import * as icons from './variations'

export default {
  name: 'icon',
  components: { ...icons },
  props: {
    name: {
      type: String,
      required: true,
      validator (val) {
        return Object.keys(icons).includes(val)
      }
    }
  }
}
</script>

<style scoped>

</style>
