import avatar from './avatar.vue'
import data from '../../pages/feeds/data.json'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
  title: 'avatar',
  component: { avatar },
  decorators: [withKnobs]
}

const template = (args) => ({
  components: { xAvatar: avatar },
  data () {
    return {
      user: data[0]
    }
  },
  props: {
    isMegaSmall: {
      default: boolean('Mega Small', false)
    },
    isExtraSmall: {
      default: boolean('Extra Small', false)
    },
    isSmall: {
      default: boolean('Small', false)
    },
    isMedium: {
      default: boolean('Medium', false)
    },
    isLarge: {
      default: boolean('Large', false)
    },
    isExtraLarge: {
      default: boolean('Extra Large', false)
    }
  },
  template: `
    <x-avatar :avatar="user.avatar"
              :is-mega-small="isMegaSmall"
              :is-extra-small="isExtraSmall"
              :is-small="isSmall"
              :is-medium="isMedium"
              :is-large="isLarge"
              :is-extra-large="isExtraLarge"
    >

    </x-avatar>
  `
})
export const Default = template.bind({})
