import account from './account.vue'

export default {
  title: 'avatar',
  components: { account }
}

export const defaultView = () => ({
  components: {
    account
  },
  template: `
    <account />
    `
})
