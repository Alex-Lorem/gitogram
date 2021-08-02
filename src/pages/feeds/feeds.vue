<template>
  <div class="topline">
    <topline>
      <template #headline>
        <h1> Gitogram /</h1>
        <userControls
          v-for="user in account"
          :user="user"
          :key="user.id"
          @onPress="handlePress(user.id)"
        />
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="item in items" :key="item.id">
            <story-item
              v-bind="getStoryData(item)"
              @onPress="handlePress(item.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="container">
    <div class="postItem--wrapper" v-for="item in items" :key="item.id">
      <postItem
        v-bind="getPostData(item)"
      />
    </div>
  </div>
  <div>
      <storiesSlider />
  </div>
</template>

<script>
import topline from '../../components/topline'
import storyItem from '../../components/storyItem'
import postItem from '../../components/postItem'
import storiesSlider from '../../components/storiesSlider'
import stories from './data.json'
import userControls from '../../components/userControls'
import account from './username.json'
import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    topline,
    storyItem,
    postItem,
    storiesSlider,
    userControls
  },
  methods: {
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
      items: [],
      stories,
      account,
      shown: false
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
