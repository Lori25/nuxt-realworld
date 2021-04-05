<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="updateUser">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  placeholder="URL of profile picture"
                  v-model="user.image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  placeholder="Your Name"
                  v-model="user.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="user.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  v-model="user.email"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr>
          <button class="btn btn-outline-danger" @click="logout">Or click here to logout.</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { update } from '@/api/user'

const Cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: 'authenticated',
  name: "SettingIndex",
  data() {
    return {
      user: {}
    }
  },

  mounted() {
    this.user = { ...this.$store.state.user }
  },

  methods: {
    async updateUser () {
      const { data:result } = await update({
        user: this.user
      })
      const { user } = result
      // 保存用户登陆状态
      this.$store.commit('setUser', user)
      // 数据持久化，刷新不归零
      Cookie.set('user', user)

      this.$router.push({
        name: 'profile',
        params: {
          username: user.username
        } 
      })
    },
    async logout () {
      // 清除浏览器 cookie，及 store 保存的 user 信息，并重定向至首页
      Cookie.remove('user')
      this.$store.commit('setUser', null)
      this.$router.push('/')
    }
  },
};
</script>
