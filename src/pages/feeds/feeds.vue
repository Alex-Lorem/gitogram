<template>
  <div class="topline">
    <topline>
      <template #headline>
        <h1> Gitogram /</h1>
        <div class="icons__wrapper">
        <div class="icon home">
          <icon name="home"/>
        </div>
          <account v-for="photo in accountPhoto"
                   :key="photo.id"
                   @onPress="handlePress(story.id)"
                   :account="photo.account"
                    />
          <div class="icon exit">
            <icon name="exit"/>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-item
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
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
</template>

<script>
import { topline } from '../../components/topline/topline'
import { icon } from '../../icons'
import { storyItem } from '../../components/storyItem/storyItem'
import { postItem } from '../../components/postItem/postItem'
import { account } from '../../components/account/account'
import stories from './data.json'
import accountPhoto from './username.json'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyItem,
    account,
    postItem
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  },
  data () {
    return {
      stories,
      accountPhoto,
      shown: false
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
