<template>
  <div class="spinner-container" v-if="loading">
    <div class="spinner" >
      <spinner :color="'green'"/>
    </div>
  </div>
  <div v-else>
  <div class="following-header">
    <h2 class="profile-title">Starred</h2>
    <div class="following-number">
      {{ array.length }}
    </div>
  </div>
  <div class="following-item" v-for="item in array" :key="item.id">
    <div class="following-user">
      <div class="user-avatar">
        <avatar :avatar="item.owner.avatar_url" :is-extra-large="true" />
      </div>
      <div class="user-info">
        <div class="user-login">{{ item.owner.login }}</div>
        <div class="user-role">{{ item.owner.type }}</div>
      </div>
    </div>
    <div class="follow--wrapper" @click="unFollow(item.id)">
      <follow :loading="false" :theme="'greenA'">
        star
      </follow>
    </div>
  </div>
  </div>
</template>

<script>
import follow from '../follow'
import avatar from '../avatar'
import { useStore } from 'vuex'
import { ref } from 'vue'
import spinner from '../spinner'

export default {
  name: 'profileFollowing',
  components: {
    follow,
    spinner,
    avatar
  },
  props: {
    getPosts: {
      type: Array
    },
    following: {
      type: Object
    },
    isFollowed: {
      type: Boolean
    }
  },
  setup (props) {
    const array = ref(props.getPosts)
    const { dispatch } = useStore()
    const loading = ref(true)
    const unFollow = async (id) => {
      for (let i = 0; i < array.value.length; i++) {
        if (id === array.value[i].id) {
          const name = ref(array.value[i].name)
          const owner = ref(array.value[i].owner)
          const id = ref(array.value[i].id)
          await dispatch('trendings/unStarRepo', { name: name.value, owner: owner.value, id: id.value })
          const index = ref(array.value.indexOf(array.value[i]))
          array.value.splice(index.value, index.value + 1)
        }
      }
    }
    setTimeout(() => {
      loading.value = false
    }, 500)
    return {
      array,
      unFollow,
      loading
    }
  }
}
</script>

<style lang="scss" src="./profileFollowing.scss" scoped />
