import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _baed42d0 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _83454866 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _0d86663b = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _c2a6d80a = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _6fb407de = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _d28af64a = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _f5125170 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _baed42d0,
    children: [{
      path: "",
      component: _83454866,
      name: "home"
    }, {
      path: "/login",
      component: _0d86663b,
      name: "login"
    }, {
      path: "/register",
      component: _0d86663b,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _c2a6d80a,
      name: "profile"
    }, {
      path: "/settings",
      component: _6fb407de,
      name: "settings"
    }, {
      path: "/editor",
      component: _d28af64a,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _f5125170,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
