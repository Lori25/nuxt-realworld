<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign {{ isLogin?'in':'up' }}</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link v-if="!isLogin" to="/login">Have an account?</nuxt-link>
            <nuxt-link v-else to="/register">Need an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, name) in errors">
              <li v-for="(msg, index) in messages" :key="index">
                {{name}} {{msg}}
              </li>
            </template>
          </ul>

          <!-- <form @submit="onSubmit"> -->
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="user.username"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                v-model="user.email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
                minlength="8"
                required
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign {{ isLogin?'in':'up' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import request from '@/utils/request'
import { login, register } from '@/api/user'

// 仅在客户端加载 js-cookie 包, process.client 是 nuxt.js 提供的特殊变量，判断当前代码是否运行在客户端
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  name: "LoginIndex",
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}
    };
  },

  components: {},

  computed: {
    isLogin () {
      return this.$route.name === 'login'
    }
  },

  mounted() {},

  methods: {
    async onSubmit () {
      try {
        const { data } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        })
        
        // 保存用户登陆状态
        this.$store.commit('setUser', data.user)
        // 数据持久化，刷新不归零
        Cookie.set('user', data.user)

        this.$router.push('/')
      } catch (err) {
        this.errors = err.response.data.errors || []
      }
    }
  },
};
</script>
<style lang="" scoped></style>
