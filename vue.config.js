module.exports = {
  transpileDependencies: [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === "production"
    ? "/h-vue-portfolio/"
    : "/",
  productionSourceMap: false,
  assetsDir: "",
  outputDir: "./dist"
}