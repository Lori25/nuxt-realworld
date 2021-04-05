/**
 * 基于 axios 封装的请求模块
 */

import axios from 'axios'

export const request = axios.create({
  // baseURL: 'http://realworld.api.fed.lagounews.com'
  baseURL: 'https://conduit.productionready.io'
})

export default ({ store }) => {
  // 响应拦截器

  // 请求拦截器
  request.interceptors.request.use(config => {
    // console.log(config);
    
    const { user } = store.state
    if(user && user.token) {
      config.headers.Authorization = `Token ${user.token}`

    }
    return config
  }, error => Promise.reject(error))
}

// export default request
