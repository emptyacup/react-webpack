import baseConfig from './webpack.config.base.js'
// 将公共配置和开发环境特有的配置结合起来
import { merge } from 'webpack-merge'
import configs from './config.js'

const { dev } = configs

export default merge(baseConfig, {
  devServer: {
    historyApiFallback: true,
    hot: true,
    host: dev.host,
    port: dev.port,
  },
})
