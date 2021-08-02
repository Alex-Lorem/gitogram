<template>
  <div class="slider--wrapper">
    <div class="slider__headline">
      <h1 class="title">Gitogram/</h1>
      <div class="cross">
        <icon name="cross"/>
      </div>
    </div>

    <splide class="slider" v-if="items.length" :options="options" >
      <splide-slide class="slider-item" v-for="item in items" :key="item.id" >
          <storiesItemSlider
            v-bind="getSliderItemData(item)"
          />
      </splide-slide>
    </splide >

  </div>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import stories from '../../pages/feeds/data.json'
import storiesItemSlider from '../storiesItemSlider/storiesItemSlider.vue'
import icon from '../icon/icon'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import * as api from '../../api'

export default {
  name: 'StoriesSlider',
  components: {
    storiesItemSlider,
    icon,
    Splide,
    SplideSlide
  },
  methods: {
     getSliderItemData (item) {
      return {
        avatar: item.owner.avatar_url,
        username: item.owner.login,
        description: item.description
      }
    }
  },
  data () {
    return {
      stories,
      items: [],
      options: {
        rewind: false,
        gap: '40px',
        pagination: false,
        focus: 'center',
        trimSpace: false,
        fixedHeight: '660px',
        fixedWidth: '375px',
        updateOnMove: true,
        arrowPath: 'M22.7842 1.57641L23.1206 1.86106L39.1215 17.5435L39.4406 17.9118C40.196 18.9444 40.1863 20.3488 39.4116 21.3718L39.121 21.7015L23.1174 37.3807L22.7809 37.6653C21.6065 38.519 19.9401 38.4238 18.8754 37.3799C17.8107 36.336 17.7142 34.7027 18.5857 33.552L18.8762 33.2223L29.7555 22.5589H2.99954L2.59252 22.5321C1.26154 22.3551 0.207944 21.3225 0.0273805 20.018L0 19.6191L0.0273805 19.2202C0.207944 17.9157 1.26154 16.883 2.59252 16.7061L2.99954 16.6792H29.7555L18.8786 6.01864L18.5595 5.65038C17.8042 4.61794 17.8137 3.21381 18.5882 2.19079L18.8786 1.86106L19.2544 1.5483C20.3078 0.807979 21.7404 0.81735 22.7842 1.57641Z'
        // autoplay: true,
        // interval: 10000
      }

    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" src="./storiesSlider.scss">

</style>
