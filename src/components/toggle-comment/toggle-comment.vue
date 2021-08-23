<template>
  <div>
  <toggler @onToggle="toggle" />
  <ul class="comments"  v-if="shown" >
    <div class="loader" v-if="loading">
      <span class="loader-stick"></span>
      <span class="loader-stick"></span>
      <span class="loader-stick"></span>
    </div>
    <div v-else>
      <li class="comment" v-for="comment in comments" :key="comment.id"  >
        <comment :author="comment.user.login" :comment="comment.title"/>
      </li>
      <div class="issue" v-if="placeholder">~There aren't any issues yet~</div>
    </div>
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
    loading: {
      type: Boolean
    },
    comments: {
      type: Array
    },
    placeholder: {
      type: Boolean
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
