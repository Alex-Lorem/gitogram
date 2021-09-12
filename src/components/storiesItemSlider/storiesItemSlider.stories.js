import storiesItemSlider from './storiesItemSlider.vue'
import data from '../../pages/feeds/data.json'
export default {
  title: 'storiesItemSlider',
  component: { storiesItemSlider },
  argTypes: {}
}

const template = () => ({
  components: { XstoriesItemSlider: storiesItemSlider },
  props: {
  },
  data () {
    return {
      user: data[0]
    }
  },
  template: `
    <xstories-item-slider :username="user.username" :avatar="user.avatar" :picture="user.picture" :description="user.subtitle" style="opacity: 1; transform: scale(1)"></xstories-item-slider>
  `
})
export const Default = template.bind({})