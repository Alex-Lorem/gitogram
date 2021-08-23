<template>
  <div class="slider--wrapper">
    <div class="slider__headline">
      <h1 class="title">Gitogram/</h1>
      <div class="cross" @click="$router.push({name: 'feeds'})">
        <icon name="cross"/>
      </div>
    </div>

    <slider :trendings="trendings" :storyIndex="+$route.query.index"/>
  </div>
</template>

<script>

import slider from '../../components/slider/'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'stories',
  components: {
    slider
  },
  computed: {
    ...mapGetters({
      trendings: 'trendings/getData'
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    })
  },
  async created () {
    if (!this.trendings.length) {
      await this.fetchTrendings()
    }
  }

}

</script>

<style lang="scss" src="./stories.scss">

</style>
