// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/_import/_variables.scss";`
      }
    }
  }
  // productionSourceMap: false
}
