module.exports = {
  // 基本路径
  publicPath: '/blog',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin css 抽离成单独文件而非直接 style内联样式写法
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css loader 预设器配置项
    loaderOptions: {},
    // 设置为 false 将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块
    requireModuleExtension: true
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 压缩代码
      config.optimization.minimize(true)
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all'
      })
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: 'localhost',
    port: 8001,
    // disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
    before: app => {
    }
  },
  // 第三方插件配置
  // pluginOptions: {
  //   // ...
  // }
}