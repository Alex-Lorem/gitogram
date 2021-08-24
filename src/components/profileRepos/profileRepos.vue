<template>
  <div class="spinner-container" v-if="loading">
    <div class="spinner" >
      <spinner :color="'green'"/>
    </div>
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
import { useStore } from 'vuex'
import spinner from '../spinner'
import { computed, ref } from 'vue'

export default {
  name: 'accountRepos',
  components: {
    spinner,
    postItem
  },
  props: {
    owner: {
      type: Object
    }
  },
   setup (props) {
    const { dispatch, getters } = useStore()
    const ownerItems = computed(() => getters['repos/getUserRepos'])
    const owner = ref(props.owner)
     const loading = ref(true)

     const getPostData = (item) => {
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
     const request = async () => {
      await dispatch('repos/fetchRepos', { owner })
     }
     if (!ownerItems.value.length) {
       request()
     }

     setTimeout(() => {
       loading.value = false
     }, 500)

    return {
      getPostData,
      ownerItems,
      loading,
      request
    }
  }
}
</script>

<style lang="scss" src="./profileRepos.scss" scoped>

</style>
