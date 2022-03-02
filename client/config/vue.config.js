module.exports = {
  configureWebpack: {
    plugins: [new CleanWebpackPlugin()]
  },
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
        .loader("pug-plain-loader")
      .rule("sass")
      .test(/\.scss$/)
      .use("sass-loader")
        .loader("sass-loader")
        .end()
  }
};