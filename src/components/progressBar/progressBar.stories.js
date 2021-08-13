import progress from './progressBar.vue'
export default {
  title: 'progress',
  component: { progress }
}

const template = (args) => ({
  components: { xProgress: progress },
  data () {
    return { args }
  },
  template: `
    <x-progress style="width:375px;"></x-progress>
  `
})
export const Default = template.bind({})
