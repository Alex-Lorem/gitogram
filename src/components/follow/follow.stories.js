import button from './follow.vue'
export default {
  title: 'button',
  component: { button },
  argTypes: {
    unfollowed: {
      control: { type: 'boolean' }
    }
  }
}

const template = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `
    <x-button></x-button>
  `
})
export const Default = template.bind({})

Default.args = {
  unfollowed: 'true'
}
