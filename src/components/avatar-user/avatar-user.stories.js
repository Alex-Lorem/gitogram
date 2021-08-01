import avatarUser from './avatar-user.vue'
export default {
  title: 'avatarUser',
  component: { avatarUser }
}

const template = (args) => ({
  components: { xAvatarUser: avatarUser },
  props: {
    avatar: {
      default: 'http://sun9-3.userapi.com/s/v1/if1/lEOc7CUagS6yli7JI6f9nVQE9C30l4Cu94T-LBURG8Vt08Bux9P4xjnLbiREzZbeDdkH-9ge.jpg?size=200x0&quality=96&crop=0,0,500,588&ava=1'
    }
  },
  data () {
    return { args }
  },
  template: `
    <x-avatar-user :user.avatar="avatar" :user.username = 'wdwdd'></x-avatar-user>
  `
})
export const Default = template.bind({})
