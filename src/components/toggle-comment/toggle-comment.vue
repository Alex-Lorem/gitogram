<template>
  <div>
  <toggler @onToggle="toggle" />
  <ul class="comments"  v-if="shown" >
    <li class="comment" v-for="comment in comments[0]" :key="comment.id"  >
      <comment :author="comment.user.login" :comment="comment.title"/>
    </li>

    <div class="issue" v-if="comments.length === 0">~There aren't any issues yet~</div>
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
    comments: {
      type: Array
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

<style src="./toggle-comment.scss" lang="scss" scoped>

</style>
