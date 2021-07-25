<template>
  <div class="slider--wrapper">
    <div class="slider__headline">
      <h1>Gitogram/</h1>
      <icon name="cross"/>
    </div>
    <div class="slider">
  <div class="slider-item" v-for="user in stories" :key="user.id">
    <storiesItemSlider
      :avatar="user.avatar"
      :username="user.username"
      :storiesText="user.storiesText"
    />
  </div>
    </div>
  </div>
</template>

<script>
import stories from '../../pages/feeds/data.json'
import storiesItemSlider from '../storiesItemSlider/storiesItemSlider.vue'
import icon from '../icon/icon'

export default {
  name: 'StoriesSlider',
  components: {
    storiesItemSlider,
    icon
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" src="./storiesSlider.scss" scoped>

</style>
