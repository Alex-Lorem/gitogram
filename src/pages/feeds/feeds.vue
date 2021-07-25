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
    }
  },
  data () {
    return {
      stories,
      account,
      shown: false
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
