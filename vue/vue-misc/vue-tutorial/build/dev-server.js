require('./check-versions')() // 检查Node和npm的版本

var config = require('../config') // 获取config/index.js的默认配置

/* 
** 如果 Node 的环境无法判断当前是 dev / product 环境
** 使用 config.dev.env.NODE_ENV 作为当前的环境
*/
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')  // 强制打开浏览器并跳转到指定url的插件
var path = require('path')  // 路径工具
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')   // 使用 dev 环境的 webpack 配置

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port      // 如果没有指定运行端口，使用 config.dev.port 作为运行端口
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)   // 启动 webpack 进行编译

/* 启动 webpack-dev-middleware，将 编译后的文件暂存到内存中 */
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})
/* 启动 webpack-hot-middleware，也就是我们常说的 Hot-reload 热加载 */
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
/* 当 html-webpack-plugin 模板更新的时候强制刷新页面 */
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
// 将 proxyTable 中的请求配置挂在到启动的 express 服务上
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
// 将暂存到内存中的 webpack 编译后的文件挂在到 express 服务上
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
// 将 Hot-reload 挂在到 express 服务上并且输出相关的状态、错误
app.use(hotMiddleware)

// serve pure static assets
// 拼接 static 文件夹的静态资源路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// 为静态资源提供响应服务
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
