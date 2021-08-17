<template>
  <div class="c-post-item">
    <div class="user--wrapper">
      <avatar-user :avatar="avatar" :username="username" :is-small="true" />
    </div>
    <div class="user__content">
      <h2>{{title}}</h2>
      <div class="subtitle">{{description}}</div>
      <div class="tools--wrapper">
        <postTools :forks_count="forks_count" :stars_count="stars_count" @unFollowPost="unFollowPost(id)"/>
      </div>
    </div>
    <toggleComment :comments="comments" />
    <div class="data">{{parsingData(data)}}</div>
  </div>

</template>

<script>
import toggleComment from '../toggle-comment/toggle-comment.vue'
import postTools from '../postTools'
import avatarUser from '../avatar-user/avatar-user.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    toggleComment,
    postTools,
    avatarUser
  },
  emits: ['onUnfollowPost'],
  methods: {
    unFollowPost (id) {
      this.unStarRepo(id)
    },
    parsingData (data) {
      data = new Date(data)
      data = data.toLocaleString('en-US', { month: 'long', day: 'numeric' })
      return data
    },
    ...mapActions({
      unStarRepo: 'trendings/unStarRepo'
    })
  },
  props: {
    id: {
      type: Number
    },
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    data: {
      type: String,
      required: true
    },
    forks_count: {
      type: Number,
      required: true
    },
    stars_count: {
      type: Number,
      required: true
    },
    comments: {
      type: Array,
      default () {
        return ['iaamdi']
      }
    }
  }
}

</script>

<style lang="scss" src="./postItem.scss" scoped>

</style>
