<template>
  <div class="c-post-item" v-if="postShown">
    <div class="user--wrapper" v-if="avatar">
      <avatar-user :avatar="avatar" :username="username" :is-small="true"/>
    </div>
    <div class="user__content">
      <h2>{{ name }}</h2>
      <div class="subtitle">{{ description }}</div>
      <div class="tools--wrapper">
        <postTools @unfollow="$emit('unfollow')" :forks_count="forks_count" :stars_count="stars_count" />
      </div>
    </div>
    <toggleComment :loading="loading" :comments="issues[0]" :placeholder="placeholder" @click="getIssues({owner, name, id})"/>
    <div class="data">{{ parsingData(data) }}</div>
  </div>

</template>

<script>
import toggleComment from '../toggle-comment/toggle-comment.vue'
import postTools from '../postTools'
import avatarUser from '../avatar-user/avatar-user.vue'
import { mapActions, mapGetters } from 'vuex'
import { isEmpty } from 'lodash'

export default {
  components: {
    toggleComment,
    postTools,
    avatarUser
  },
  data () {
    return {
      issueId: 0,
      issues: [],
      loading: true,
      postShown: true,
      placeholder: false
    }
  },
  methods: {
    async getIssues ({ owner, name, id }) {
      const storeIssues = this.getIssuesItems
        if (storeIssues[id]) {
          this.issues[0] = storeIssues[id]
        } else {
            const response = await this.fetchIssues({ owner, name, id })
            this.issues[0] = response
          }
      if (isEmpty(this.issues[0])) {
        this.placeholder = true
      }
      setTimeout(() => (this.loading = false), 500)
    },
    parsingData (data) {
      data = new Date(data)
      data = data.toLocaleString('en-US', { month: 'long', day: 'numeric' })
      return data
    },
    ...mapActions({
      fetchIssues: 'issues/fetchIssues'
    })
  },
  computed: {
    ...mapGetters({
      getIssuesItems: 'issues/getIssuesItems'
    })
  },
  props: {
    id: {
      type: Number
    },
    avatar: {
      type: String
    },
    username: {
      type: String
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
