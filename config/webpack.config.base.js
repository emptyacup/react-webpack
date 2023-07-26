import path from 'path'
const __dirname = path.resolve()

// 当使用 webpack 打包时，创建一个 html 文件，并把 webpack 打包后的静态文件自动插入到这个 html 文件当中。
import HtmlWebpackPlugin from 'html-webpack-plugin'
//  在每次打包后，磁盘空间会存有打包后的资源，在再次打包的时候，我们需要先把本地已有的打包后的资源清空
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  // 启用/禁用 CSS 模块规范并且设置基本的行为
  module: {
    rules: [
      {
        test: /\.js$/, //以js结尾文件
        exclude: /node_modules/, //文件不再node_modules文件 下
        loader: 'babel-loader', //babel是js和babel的桥梁，但不能完全转化
      },
      {
        test: /\.(tsx|ts)/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]-[hash:base64:5]',
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    // 在使用import引入时可以不添加文件后缀
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@com': path.resolve(__dirname, 'src/components'),
    },
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: '8081',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      path: '/dist/',
    }),
    new CleanWebpackPlugin(),
  ],
}
