<template>
  <div class="auth__content">
  <div class="auth__wrapper">
    <h1>Gitorgram/</h1>
    <div class="auth__subtitle">More than just one repository.
      This is our digital world.</div>
    <button @click="getCode" class="auth__button">Authorize with github <icon name="github" class="githubIcon"></icon></button>
  </div>
    <div class="img--wrapper">
      <img src="../../assets/img/auth.png" alt="auth img">
    </div>
    <div class="copyright">© Gitogram from Loftschool</div>
  </div>
</template>

<script>
import env from '../../../env.js'

export default {
  name: 'auth',
  methods: {
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'

      const params = new URLSearchParams()

      params.append('client_id', env.clientId)
      params.append('scope', 'repo,user')
      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId: env.clientId,
            code,
            clientSecret: env.clientSecret
          })
        })
        const { token } = await response.json()
        localStorage.setItem('token', token)
        await this.$router.replace({ name: 'feeds' })
      } catch (e) {
        console.log(e)
      }
    } else {
        console.log('doesnt work')
    }
  }
}
</script>

<style src="./auth.scss" lang="scss" scoped>

</style>
