<template>
  <div class="x-topline">
  <topline>
    <template #headline>
      <h1 @click="$router.push({name: 'feeds'})"> Gitogram /</h1>
      <userControls
        :avatar="getUser.user.data.avatar_url"
      />

    </template>
  </topline>
  </div>
  <div class="x-container">
    <div class="profile-info">
      <h2 class="profile-title">My profile</h2>
      <div class="profile-user">
        <profileUser
          v-bind="getUserInfo(getUser)"
        />
      </div>
      <ul class="profile-nav">
        <li class="profile-nav-item">
          <button class="profile-nav-link" :class="[activeR]" @click="buttonShow('r')">Repositories</button>
        </li>
        <li class="profile-nav-item">
          <button class="profile-nav-link" :class="[activeS]" @click="buttonShow">Starred</button>
        </li>
      </ul>
    </div>
    <div class="profileFollowing--wrapper" v-if="showStarred">
      <profileFollowing :getPosts="getPosts"/>
    </div>
    <div class="repo--wrapper" v-if="showRepos">
      <repos :owner="getUser.user.data" />
    </div>
  </div>

</template>

<script>
import topline from '../../components/topline'
import { mapActions, mapGetters } from 'vuex'
import userControls from '../../components/userControls'
import repos from '../../components/profileRepos'
import profileUser from '../../components/profileUser'
import profileFollowing from '../../components/profileFollowing'

export default {
  name: 'account',
  components: {
    profileFollowing,
    profileUser,
    repos,
    topline,
    userControls
  },
  data () {
    return {
      activeR: 'active',
      activeS: '',
      showRepos: true,
      showStarred: false
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'auth/getUser',
      getPosts: 'starred/getPostItems'
    })
  },
  methods: {
    buttonShow (arg) {
      if (arg === 'r') {
        this.showStarred = false
        this.showRepos = true
        this.activeR = 'active'
        this.activeS = ''
      } else {
        this.showRepos = false
        this.showStarred = true
        this.activeS = 'active'
        this.activeR = ''
      }
    },
    ...mapActions({
      fetchStarred: 'starred/fetchStars'
    }),
    getUserInfo (getUser) {
      return {
        avatar: getUser.user.data.avatar_url,
        repos: getUser.user.data.public_repos,
        name: getUser.user.data.name,
        login: getUser.user.data.login,
        starred: this.getPosts.length
      }
    }
  },
  async created () {
    if (!this.getPosts.length) {
      await this.fetchStarred()
    }
  }
}
</script>

<style src="./account.scss" lang="scss" scoped>

</style>
