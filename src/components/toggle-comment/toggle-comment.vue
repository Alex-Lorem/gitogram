<template>
  <div>
  <toggler @onToggle="toggle" />
  <ul class="comments"  v-if="shown">
    <li class="comment" v-for="comment in user.comments" :key="comment.id">
      <comment :author="comment.author" :comment="comment.text"/>
    </li>
  </ul>
  </div>
</template>

<script>
import comment from '../comment/comment.vue'
import toggler from '../toggler/toggler.vue'

export default {
  name: 'toggle-comment',
  components: {
    comment,
    toggler
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style scoped>

</style>
