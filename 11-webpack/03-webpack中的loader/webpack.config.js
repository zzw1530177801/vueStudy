const path = require('path')
module.exports = {
  entry: './src/main.js',    //入口
  output: {                  //出口
    path: path.resolve(__dirname, 'dist'),   //路径
    filename: 'bundle.js',                  //文件名
    publicPath: 'dist/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,     //此处正则表达式匹配所有的css文件，在use中应用
        //css-loader只负责加载css文件，style-loader负责将样式加载到dom中
        use: ['style-loader','css-loader']    //使用多个loader时，webpack是从右向左加载的
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        },{
          loader: "css-loader"
        },{
           loader: "less-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {                    //需要安装url-loader  如果图片大于8kb还需安装file-loader
              limit: 8192,
             // name: 'img/[name].[hash:8].[ext]'   //修改图片文件名称，防止名字重复
            }
          }
        ]
      },
      {
        test: /\.js$/,        //将es6转化为es5，安装 npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}

