import avatarUser from './avatar-user.vue'
import data from '../../pages/feeds/data.json'

export default {
  title: 'avatarUser',
  component: { avatarUser }
}

const template = (args) => ({
  components: { xAvatarUser: avatarUser },
  props: {
  },
  data () {
    return {
      user: data[0]
    }
  },
  template: `
    <x-avatar-user :avatar="user.avatar" :username="user.username" :is-small="true"></x-avatar-user>
  `
})
export const Default = template.bind({})
