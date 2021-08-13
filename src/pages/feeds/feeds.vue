<template>
  <div class="topline">
    <topline>
      <template #headline>
        <h1 @click="getUser"> Gitogram /</h1>
        <userControls
          v-for="user in account"
          :user="user"
          :key="user.id"
          @onPress="handlePress(user.id)"
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
      trendings: 'trendings/getData'
    })
  },
  methods: {
    async getUser () {
      try {
        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `token ${localStorage.getItem('token')}`
          }
        })
        const data = await response.json()
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
      ...mapActions({
        fetchTrendings: 'trendings/fetchTrendings'
      }),
    async loadReadme () {
     await this.fetchReadme()
    },
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
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
