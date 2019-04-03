const path = require('path');
module.exports = {
  devServer: {
    port: 10086,
    open: true,
  },
  chainWebpack: config => {
    const iconPath = path.resolve(__dirname, './src/assets/icons');
    config.module
      .rule('images')
        .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
        .exclude
          .add(iconPath)
          .end()
        .end()
      .rule('svg')
        .include
          .add(iconPath)
          .end()
        .uses
          .clear()
          .end()
        .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]',
          })
          .end()
        .use('svgo-loader')
          .loader('svgo-loader')
          .options({
            plugins: [
              {
                removeAttrs: {
                  attrs: 'fill|fill-rule',
                },
              },
            ],
          })
          .end()
        .end()
  },
}