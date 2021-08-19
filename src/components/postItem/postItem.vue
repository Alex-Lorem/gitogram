<template>
  <div class="c-post-item" v-if="postShown">
    <div class="user--wrapper">
      <avatar-user :avatar="avatar" :username="username" :is-small="true"/>
    </div>
    <div class="user__content">
      <h2>{{ name }}</h2>
      <div class="subtitle">{{ description }}</div>
      <div class="tools--wrapper">
        <postTools :forks_count="forks_count" :stars_count="stars_count" @unFollowPost="unFollowPost(id)"/>
      </div>
    </div>
    <toggleComment :comments="issues" @click="getIssue({owner, name, id})"/>
    <div class="data">{{ parsingData(data) }}</div>
  </div>

</template>

<script>
import toggleComment from '../toggle-comment/toggle-comment.vue'
import postTools from '../postTools'
import avatarUser from '../avatar-user/avatar-user.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    toggleComment,
    postTools,
    avatarUser
  },
  data () {
    return {
      issues: [],
      postShown: true
    }
  },
  emits: ['onUnfollowPost'],
  methods: {
    async getIssue ({ owner, name, id }) {
      const storeIssues = this.getIssuesItems()
      if (this.issues.includes(storeIssues[id])) {

      } else {
        const response = await this.fetchIssues({ owner, name, id })
        if (response.length === 0) {
        } else {
          this.issues.push(response)
        }
      }
    },
    async unFollowPost (id) {
      // let repo
      // let ar = this.postItems
      // for (let i = 0; i < this.postItems.length; i++) {
      //   repo = this.postItems.find((item) => item.id === id)
      //   const index = this.postItems.indexOf(repo)
      //   ar.splice(index, 1)
      // }
      // ar = this.postItems
      // console.log(ar)
      // console.log(id)
      await this.unStarRepo(id)
    },
    parsingData (data) {
      data = new Date(data)
      data = data.toLocaleString('en-US', { month: 'long', day: 'numeric' })
      return data
    },
    ...mapGetters({
      getIssuesItems: 'issues/getIssuesItems'
    }),
    ...mapActions({
      unStarRepo: 'trendings/unStarRepo',
      fetchIssues: 'issues/fetchIssues'
    })
  },
  props: {
    postItems: {
      type: Array
    },
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
    owner: {
      type: Object,
      required: true
    },
    name: {
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
      type: Array
    }
  }
}

</script>

<style lang="scss" src="./postItem.scss" scoped>

</style>
