<template>
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
</template>

<script>
import follow from '../follow'
import avatar from '../avatar'
import { mapActions } from 'vuex'

export default {
  name: 'profileFollowing',
  data () {
    return {
      array: []
    }
  },
  components: {
    follow,
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
  methods: {
    async unFollow (id) {
      for (let i = 0; i < this.array.length; i++) {
        if (id === this.array[i].id) {
          const name = this.array[i].name
          const owner = this.array[i].owner
          const id = this.array[i].id
          await this.unStarRepo({ name, owner, id })
          const index = this.getPosts.indexOf(this.getPosts[i])
          this.array.splice(index, index + 1)
        }
      }
    },
    ...mapActions({
      unStarRepo: 'trendings/unStarRepo'
    })
  },
  async created () {
    this.array = this.getPosts
  }
}
</script>

<style lang="scss" src="./profileFollowing.scss" scoped />
