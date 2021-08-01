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
          <li class="stories-item" v-for="user in stories" :key="user.id">
            <story-item
              :user="user"
              @onPress="handlePress(user.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="container">
    <div class="postItem--wrapper" v-for="user in stories" :key="user.id">
      <postItem
        :user="user"
      />
    </div>
  </div>
  <div>
      <storiesSlider v-for="user in 1" :user="user" :key="user.id"/>
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
  props: {

  },
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
    }
  },
  data () {
    return {
      stories,
      account,
      shown: false
    }
  },
  created () {
    api.trandings.getTrendings()
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
