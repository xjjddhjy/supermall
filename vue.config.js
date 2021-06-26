
module.exports = {
  outputDir: 'dist',   //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
      open: true, //是否自动弹出浏览器页面
      host: "localhost", 
      // host: "172.21.66.71", 
      port: '8080', 
      https: false,   //是否使用https协议
      hotOnly: false, //是否开启热更新
    //   proxy: {
    //     '/api': {
    //         // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
    //         // https://huaban.com/home/?&max=1617258431284828887&limit=20&wfl=1
    //         target: 'https://api-hmugo-web.itheima.net',
    //         // 允许跨域
    //         changeOrigin: true,
    //         ws: true,
    //         pathRewrite: {
    //             '^/api': ''
    //         }
    //     }
    // }
  },
  configureWebpack:{
    resolve:{
      // extensions:[],
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'network':'@/network',
        'components':'@/components',
        'views':'@/views',
        
      }
    }
  }
}