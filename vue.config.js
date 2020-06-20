module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: "../hloiseau.github.io",

  chainWebpack: config => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader");
  }
};