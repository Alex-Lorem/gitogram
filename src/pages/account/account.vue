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
          @buttonShow="buttonShow('starred')"
          v-bind="getUserInfo(getUser)"
        />
      </div>
      <ul class="profile-nav">
        <li class="profile-nav-item">
          <button class="profile-nav-link" :class="[activeRepos]" @click="buttonShow('repos')">Repositories</button>
        </li>
        <li class="profile-nav-item">
          <button class="profile-nav-link" :class="[activeStars]" @click="buttonShow('starred')">Starred</button>
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
import { useStore } from 'vuex'
import userControls from '../../components/userControls'
import repos from '../../components/profileRepos'
import profileUser from '../../components/profileUser'
import profileFollowing from '../../components/profileFollowing'
import { ref, computed } from 'vue'

export default {
  name: 'account',
  components: {
    profileFollowing,
    profileUser,
    repos,
    topline,
    userControls
  },
  setup () {
    const { dispatch, getters } = useStore()
    const activeRepos = ref('active')
    const activeStars = ref('')
    const showRepos = ref(true)
    const showStarred = ref(false)
    const getUser = computed(() => getters['auth/getUser'])
    const getPosts = computed(() => getters['starred/getPostItems'])
    const buttonShow = (arg) => {
      if (arg === 'repos') {
        showStarred.value = false
        showRepos.value = true
        activeRepos.value = 'active'
        activeStars.value = ''
      }
      if (arg === 'starred') {
        showRepos.value = false
        showStarred.value = true
        activeStars.value = 'active'
        activeRepos.value = ''
      }
    }

    const getUserInfo = (getUser) => {
      return {
        avatar: getUser.user.data.avatar_url,
        repos: getUser.user.data.public_repos,
        name: getUser.user.data.name,
        login: getUser.user.data.login,
        starred: getPosts.value.length
      }
    }
    const request = async () => {
      await dispatch('starred/fetchStars')
    }
    if (!getPosts.value.length) {
      request()
    }
    return {
      activeRepos,
      activeStars,
      showRepos,
      showStarred,
      buttonShow,
      getUser,
      getPosts,
      getUserInfo,
      request
    }
  },
  mounted () {
    document.body.classList.add('body-profile')
  }
}
</script>

<style src="./account.scss" lang="scss" scoped>

</style>
