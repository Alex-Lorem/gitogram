<template>
  <div class="spinner" v-if="loading">
  <spinner :color="'green'"/>
  </div>
  <div v-else>
  <div class="repos-header" >
    <h2 class="profile-title">Repositories</h2>
    <div class="repos-number">
      {{ ownerItems.length }}
    </div>
  </div>
  <div class="postItem--wrapper" v-for="item in ownerItems" :key="item.id">
    <postItem
      v-bind="getPostData(item)"
    />
  </div>
  </div>
</template>

<script>
import postItem from '../postItem'
import { mapActions, mapGetters } from 'vuex'
import spinner from '../spinner'

export default {
  name: 'accountRepos',
  components: {
    spinner,
    postItem
  },
  data () {
    return {
      loading: true
    }
  },
  props: {
    owner: {
      type: Object
    }
  },
  computed: {
    ...mapGetters({
        ownerItems: 'repos/getUserRepos'
    })
  },
  methods: {
    ...mapActions({
          fetchRepos: 'repos/fetchRepos'
    }),
    getPostData (item) {
      return {
        id: item.id,
        name: item.name,
        owner: item.owner,
        description: item.description,
        data: item.pushed_at,
        forks_count: item.forks_count,
        stars_count: item.stargazers_count
      }
    }
  },
  async created () {
    if (!this.ownerItems.length) {
      await this.fetchRepos(this.owner)
    }
    setTimeout(() => {
      this.loading = false
    }, 500)
  }
}
</script>

<style lang="scss" src="./profileRepos.scss" scoped>

</style>
