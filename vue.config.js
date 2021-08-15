module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/media.scss"; @import "@/assets/scss/variables.scss";'
      }
    }
  }
}
