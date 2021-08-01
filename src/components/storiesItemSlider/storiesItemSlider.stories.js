import storiesItemSlider from './storiesItemSlider.vue'
import data from '../../pages/feeds/data.json'
export default {
  title: 'storiesItemSlider',
  component: { storiesItemSlider },
  argTypes: {
  }
}

const template = () => ({
  components: { XstoriesItemSlider: storiesItemSlider },
  props: {
    user: {
      default: 'http://sun9-3.userapi.com/s/v1/if1/lEOc7CUagS6yli7JI6f9nVQE9C30l4Cu94T-LBURG8Vt08Bux9P4xjnLbiREzZbeDdkH-9ge.jpg?size=200x0&quality=96&crop=0,0,500,588&ava=1'
    }
  },
  data () {
    return {
      user: data
    }
  },
  template: `
    <xstories-item-slider :user="user"></xstories-item-slider>
  `
})
export const Default = template.bind({})
