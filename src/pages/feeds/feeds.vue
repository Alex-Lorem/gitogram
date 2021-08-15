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
    <div class="postItem--wrapper" v-for="item in trendings" :key="item.id">
      <postItem
        v-bind="getPostData(item)"
      />
    </div>
  </div>
</template>

<script>
import topline from '../../components/topline'
import storyItem from '../../components/storyItem'
import postItem from '../../components/postItem'
import stories from './data.json'
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
      getUser: 'auth/getUser'
    })
  },
  methods: {
      ...mapActions({
        fetchTrendings: 'trendings/fetchTrendings',
        fetchAuth: 'auth/fetchAuth',
        fetchStars: 'auth/fetchStars'
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
        watchers_count: item.watchers_count,
        comments_url: item.comments_url
      }
    }
  },
  data () {
    return {
      dataUser: [],
      stories,
      account,
      shown: false
    }
  },
  async created () {
    if (this.trendings.length > 0) {
      return
    }
    await this.fetchTrendings()
    await this.fetchAuth()
    await this.fetchStars()
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
