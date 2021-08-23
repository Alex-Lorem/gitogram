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
      postItems: 'starred/getPostItems'
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    async unFollowPost (name, owner, id) {
      await this.unStarRepo({ name, owner, id })
       let repo
       let ar = this.postItems
      for (let i = 0; i < this.postItems.length; i++) {
        repo = this.postItems.find((item) => item.id === id)
        const index = this.postItems.indexOf(repo)
        ar.splice(index, 1)
      }
      ar = this.postItems
      console.log(ar)
      console.log(id)
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
      shown: false
    }
  },
  async created () {
    if (!this.trendings.length) {
      await this.fetchTrendings()
    }
    if (!this.postItems.length) {
      await this.fetchStars()
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
