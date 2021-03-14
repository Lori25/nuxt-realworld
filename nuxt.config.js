
module.exports = {
  router: {
    linkActiveClass: 'active',
    // 自定义路由表规则
    extendRoutes(routes, resolve) {
      routes.splice(0)  // 清除 nuxt.js 基于 pages 目录生成的默认路由表规则
      routes.push(...[{
        path: '/',
        // name: 'LayoutIndex',
        component: resolve(__dirname, 'pages/layout/'),
        children: [{
          path: '',
          name: 'home',
          component: resolve(__dirname, 'pages/home/')
        }, {
          path: '/login',
          name: 'login',
          component: resolve(__dirname, 'pages/login/')
        }, {
          path: '/register',
          name: 'register',
          component: resolve(__dirname, 'pages/login/')
        }, {
          path: '/profile/:username',
          name: 'profile',
          component: resolve(__dirname, 'pages/profile/')
        }, {
          path: '/settings',
          name: 'settings',
          component: resolve(__dirname, 'pages/settings/')
        }, {
          path: '/editor',
          name: 'editor',
          component: resolve(__dirname, 'pages/editor/')
        }, {
          path: '/article/:slug',
          name: 'article',
          component: resolve(__dirname, 'pages/article/')
        }]
      }])
    }
  },

  server: {
    host: '0.0.0.0',  // 监听所有网卡地址，通过外网地址可以访问到
    port: 3000
  },

  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ]
}
