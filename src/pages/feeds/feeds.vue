<template>
  <div class="topline">
    <topline>
      <template #headline>
        <h1> Gitogram /</h1>
        <userControls
          :avatar="getUser.avatar_url"
        />
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="(item, index) in trendings" :key="item.id">
            <story-item
              v-bind="getStoryData(item)"
              @click="$router.push({name: 'stories', query: { index }})"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="container">
    <div class="postItem--wrapper" v-for="(item, index) in postItems" :key="item.id">
      <postItem
        v-bind="getPostData(item)"
        :comments="getIssueItem(index)"
      />
    </div>
  </div>
</template>

<script>
import topline from '../../components/topline'
import storyItem from '../../components/storyItem'
import postItem from '../../components/postItem'
import userControls from '../../components/userControls'
import account from './username.json'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'feeds',
  components: {
    topline,
    storyItem,
    postItem,
    userControls
  },
  computed: {
    ...mapGetters({
      trendings: 'trendings/getData',
      getUser: 'auth/getUser',
      postItems: 'starred/getPostItems',
      issuesItems: 'issues/getIssuesItems'
    })
  },
  methods: {
      ...mapActions({
        fetchTrendings: 'trendings/fetchTrendings',
        fetchAuth: 'auth/fetchAuth',
        fetchStars: 'starred/fetchStars',
        fetchIssues: 'issues/fetchIssues'
      }),
    toggle (isOpened) {
      this.shown = isOpened
    },
    getStoryData (item) {
      return {
        username: item.owner.login,
        avatar: item.owner.avatar_url
      }
    },
    getPostData (item) {
      return {
        avatar: item.owner.avatar_url,
        username: item.owner.login,
        title: item.name,
        description: item.description,
        data: item.pushed_at,
        forks_count: item.forks_count,
        stars_count: item.stargazers_count
      }
    },
    getIssueItem (index) {
      const content = this.issues[index]
      return content
    }
  },
  data () {
    return {
      issues: [],
      account,
      shown: false
    }
  },
  async created () {
    // if (this.trendings.length > 0) {
    //   return
    // }
    await this.fetchTrendings()
    await this.fetchAuth()
    await this.fetchStars()
    for (let i = 0; i < this.trendings.length; i++) {
      const item = this.trendings[i]
      const result = await this.fetchIssues(item)
      this.issues.push(result)
    }
    console.log(this.issuesItems)
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
