<template>
  <div>
  <toggler @onToggle="toggle" />
  <ul class="comments"  v-if="shown">
    <li class="comment" v-for="user in 3" :key="user.id">
      <comment author="Jack" :comments_url="comments_url"/>
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
    comments_url: {
      type: String,
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
