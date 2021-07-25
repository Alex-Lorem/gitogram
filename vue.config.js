module.exports = {
  publicPath: '/gitogram/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/media.scss"; @import "@/assets/scss/variables.scss";'
      }
    }
  }
}
