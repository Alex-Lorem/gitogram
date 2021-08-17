<template>
  <div class="c-slider-item">
    <div class="slider-item-header">
      <div class="progressBar--wrapper">
        <progressBar/>
      </div>
      <div class="user--wrapper">
        <avatar-user :avatar="avatar" :username="username" :is-mega-small="true"/>
      </div>
    </div>
    <div class="content">

      <div class="info" v-if="!loading && !(readme !== null)">
        <placeholder/>
      </div>

      <div class="loader" v-if="loading">
        <spinner color="green"/>
      </div>

      <div v-else>
        <div v-html="readme" class="readme"></div>
      </div>

    </div>
    <div class="follow--wrapper" @click="$emit('followRepo')">
      <follow :loading="following.loading" :theme="following.isFollowed ? 'grey' : 'green'">
        {{ following.isFollowed ? 'Unfollow' : 'Follow' }}
      </follow>
    </div>
  </div>
</template>

<script>

import progressBar from '../progressBar'
import follow from '../follow'
import avatarUser from '../avatar-user/avatar-user.vue'
import placeholder from '../placeholder'
import spinner from '../spinner'
import * as api from '../../api'
import { mapActions } from 'vuex'

export default {
  name: 'StoriesItem',
  emits: ['followRepo'],
  components: {
    follow,
    spinner,
    progressBar,
    avatarUser,
    placeholder
  },
  watch: {
    active () {
      if (this.active && !(this.readme !== null)) {
        this.getReadme()
      }
    }
  },
  data () {
    return {
      readme: null,
      loading: false
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    following: {
      type: Object
    },
    isFollowed: {
      type: Boolean
    },
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
    id: {
      type: Number,
      required: true
    },
    owner_login: {
      type: String
    },
    repo: {
      type: String
    }
  },
  methods: {
    ...mapActions({
      fetchReadme: 'readme/fetchReadme'
    }),
    async getReadme () {
      this.loading = true
      try {
        const { data } = await api.readme.getReadme({
          owner: this.owner_login,
          name: this.repo
        })
        this.readme = data
      } catch (error) {
        this.readme = '<div style="font-weight: bold">Unfortunately we could not download the content, most likely this user refused to write a readme file</div>'
      }
      setTimeout(() => (this.loading = false), 500)
    }
  },
  mounted () {
    setTimeout(() => {
      if (this.active) {
        this.getReadme()
      }
    }, 500)
  }
}
</script>

<style lang="scss" src="./storiesItemSlider.scss" scoped>

</style>
