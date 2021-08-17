import spinner from './spinner.vue'

export default {
  title: 'spinner',
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    color: {
      options: ['default', 'green'],
      control: { type: 'radio' }
    }
  },
  component: { spinner }
}

const template = (args) => ({
  components: { xSpinner: spinner },
  data () {
    return { args }
  },
  template: `
    <div style="width: 40px; height: 40px;">
      <x-spinner v-bind="args" />
    </div>
  `
})

export const Default = template.bind({})

Default.args = {
  color: 'default'
}
