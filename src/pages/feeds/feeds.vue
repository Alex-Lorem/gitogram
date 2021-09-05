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
        <splide :options="optionsX" v-if="getUnstarredOnly.length">
          <splide-slide v-for="(item, index) in getUnstarredOnly" :key="item.id">
            <story-item
              v-bind="getStoryData(item)"
              @click="$router.push({name: 'stories', query: { index }})"
            />
          </splide-slide>
        </splide>
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
  <div class="footer--wrapper">
    <footerX />
  </div>
</template>

<script>
import topline from '../../components/topline'
import storyItem from '../../components/storyItem'
import postItem from '../../components/postItem'
import userControls from '../../components/userControls'
import { mapActions, mapGetters } from 'vuex'
import footerX from '../../components/footerX'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
export default {
  name: 'feeds',
  components: {
    topline,
    storyItem,
    postItem,
    userControls,
    footerX: footerX,
    Splide,
    SplideSlide
  },
  data () {
    return {
      shown: false,
      postItems: [],
      optionsX: {
        fixedWidth: '110px',
        perMove: '1',
        gap: '10px',
        pagination: false,
        classes: {
          prev: 'stories__prev',
          next: 'stories__next'
        },
        breakpoints: {

        },
        arrowPath: 'M22.7842 1.57641L23.1206 1.86106L39.1215 17.5435L39.4406 17.9118C40.196 18.9444 40.1863 20.3488 39.4116 21.3718L39.121 21.7015L23.1174 37.3807L22.7809 37.6653C21.6065 38.519 19.9401 38.4238 18.8754 37.3799C17.8107 36.336 17.7142 34.7027 18.5857 33.552L18.8762 33.2223L29.7555 22.5589H2.99954L2.59252 22.5321C1.26154 22.3551 0.207944 21.3225 0.0273805 20.018L0 19.6191L0.0273805 19.2202C0.207944 17.9157 1.26154 16.883 2.59252 16.7061L2.99954 16.6792H29.7555L18.8786 6.01864L18.5595 5.65038C17.8042 4.61794 17.8137 3.21381 18.5882 2.19079L18.8786 1.86106L19.2544 1.5483C20.3078 0.807979 21.7404 0.81735 22.7842 1.57641Z'
      }
    }
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

  computed: {
    ...mapGetters({
      trendings: 'trendings/getData',
      getUser: 'auth/getUser',
      getPostItems: 'starred/getPostItems'
    }),
    ...mapGetters(['getUnstarredOnly'])
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
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
