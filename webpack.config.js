const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const config = {
  mode:"development",
  entry: './src/index.js', // 打包入口地址
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.join(__dirname, 'dist') // 输出文件目录
  },
  module:{
    rules:[
      {
        test: /\.css$/, //匹配所有的 css 文件
        use: ['style-loader','css-loader', 'postcss-loader'] // use: 对应的 Loader 名称
      },
      {
        test: /\.js$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ],
            }
          }
        ]
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin() // 引入插件
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // 静态文件目录
    compress: true, //是否启动压缩 gzip
    port: 8084, // 端口号
    // open:true  // 是否自动打开浏览器
  },
}

module.exports = (env,argv) => {
  console.log('argv.mode=',argv.mode) // 打印 mode(模式) 值
  // 这里可以通过不同的模式修改 config 配置
  return config;
}