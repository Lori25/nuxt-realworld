const cookieParser = process.server ? require('cookieparser') : undefined

/**
 * 在服务器渲染期间运行都是同一个实例
 * 为了防止数据冲突，务必把 state 定义成一个函数，返回数据对象
 */
export const state = () => {
  return {
    user: null   // 当前登陆用户的信息
  }
}

export const mutations = {
  setUser (state, data) {
    state.user = data
  }
}

export const actions = {
  // 只会在服务器端渲染时运行这个特殊的 action，有利于将服务器上的数据直接传给客户端
  nuxtServerInit ({ state, commit }, { req }) {
    let user = null

    if(req.headers.cookie) {
      const parsed = cookieParser.parse(req.headers.cookie)
      // console.log('parsed', parsed);
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        
      }
    }
    commit('setUser', user)
  }
}
