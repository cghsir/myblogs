## webpack配置
### 1.在package.json同级目录创建**webpack.config.js**文件，填写内容如下
  ```
    var webpack             = require('webpack');
    var ExtractTextPlugin   = require('extract-text-webpack-plugin');
    var HtmlWebpackPlugin   = require('html-webpack-plugin');

    // 环境变量配置，dev / online
    var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

    // 获取html-webpack-plugin参数的方法 
    var getHtmlConfig = function(name, title){
        return {
            template    : './src/view/' + name + '.html',
            filename    : 'view/' + name + '.html',
            title       : title,
            inject      : true,
            hash        : true,
            chunks      : ['common', name]
        };
    };
    // webpack config
    var config = {
        entry: {
            'common'            : ['./src/page/common/index.js'],
            'index'             : ['./src/page/index/index.js'],
        },
        output: {
            path: './dist',
            publicPath : '/dist',
            filename: 'js/[name].js'
        },
        externals : {
            'jquery' : 'window.jQuery'
        },
        module: {
            loaders: [
                { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
                { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
                { test: /\.string$/, loader: 'html-loader'}
            ]
        },
        resolve : {
            alias : {
                node_modules    : __dirname + '/node_modules',
                util            : __dirname + '/src/util',
                page            : __dirname + '/src/page',
                service         : __dirname + '/src/service',
                image           : __dirname + '/src/image'
            }
        },
        plugins: [
            // 独立通用模块到js/base.js
            new webpack.optimize.CommonsChunkPlugin({
                name : 'common',
                filename : 'js/base.js'
            }),
            // 把css单独打包到文件里
            new ExtractTextPlugin("css/[name].css"),
            // html模板的处理
            new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        ]
    };

    if('dev' === WEBPACK_ENV){
        config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
    }

    module.exports = config;
  ```
### 2.创建如下src目录及src目录下文件

 ![2](https://github.com/cghsir/myblogs/blob/dev/dev-notes/images/f-002-step2.png)
 
### 3.编辑文件内容

    common目录下,index.js内容如下
    ```
    console.log('i am gloable');
    ```
    index目录下,index.js内容如下:
    
    ```
    alert('index');
    ```
    view目录下，index.html内容个如下:
    ```
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
      </head>
      <body>
        hello
      </body>
      </html>
    ```
### 4.测试。在项目根目录执行命令：
  ```
  npm run dev_win
  ```
  编译成功结果字样:
  ```
  webpack: Compiled successfully.
  ```
  打开浏览器访问：
  ```
  http://localhost:8088/dist/view/index.html
  ```
  浏览器弹出index，并且在控制台打印了i am gloable则环境配置无误。查看网页源代码可发现那两个js被引入到index.html里了。
  修改index.html helo 为hello world并保存。你会发现浏览器自动刷新。是热部署哦!
