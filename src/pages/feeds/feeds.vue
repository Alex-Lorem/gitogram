<template>
  <div class="topline">
    <topline>
      <template #headline>
        <h1> Gitogram /</h1>
        <userControls
          :avatar="getUser.user.data.avatar_url"
        />
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="(item, index) in getUnstarredOnly" :key="item.id">
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
    <div class="postItem--wrapper" v-for="item in postItems" :key="item.id">
      <postItem
        @unfollow="unFollowPost(item.name, item.owner, item.id)"
        v-bind="getPostData(item)"
      />
    </div>
  </div>
</template>

<script>
import topline from '../../components/topline'
import storyItem from '../../components/storyItem'
import postItem from '../../components/postItem'
import userControls from '../../components/userControls'
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
      getPostItems: 'starred/getPostItems'
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    async unFollowPost (name, owner, id) {
       await this.unStarRepo({ name, owner, id })

      for (let i = 0; i < this.getPostItems.length; i++) {
        if (this.getPostItems[i].id === id) {
          const index = this.getPostItems.indexOf(this.getPostItems[i])
          this.getPostItems.splice(index, index + 1)
        }
      }
      this.postItems = this.getPostItems
    },
      ...mapActions({
        fetchTrendings: 'trendings/fetchTrendings',
        unStarRepo: 'trendings/unStarRepo',
        fetchStars: 'starred/fetchStars'
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
        id: item.id,
        avatar: item.owner.avatar_url,
        username: item.owner.login,
        name: item.name,
        owner: item.owner,
        description: item.description,
        data: item.pushed_at,
        forks_count: item.forks_count,
        stars_count: item.stargazers_count
      }
    }
  },
  data () {
    return {
      shown: false,
      postItems: []
    }
  },
  async created () {
    if (!this.trendings.length) {
      await this.fetchTrendings()
    }
    if (this.getPostItems.length) {
      this.postItems = this.getPostItems
    } else {
      await this.fetchStars()
      this.postItems = this.getPostItems
    }
    // console.log(this.getUnstarredOnly)
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
