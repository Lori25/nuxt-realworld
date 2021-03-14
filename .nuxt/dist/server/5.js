exports.ids = [5];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=5f59132a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-5f59132a>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-5f59132a>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-5f59132a>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-5f59132a>"+_vm._ssrEscape("Sign "+_vm._s(_vm.isLogin?'in':'up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-5f59132a>","</p>",[(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")]):_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-5f59132a>"+(_vm._ssrList((_vm.errors),function(messages,name){return ((_vm._ssrList((messages),function(msg,index){return ("<li data-v-5f59132a>"+_vm._ssrEscape("\n              "+_vm._s(name)+" "+_vm._s(msg)+"\n            ")+"</li>")})))}))+"</ul> <form data-v-5f59132a>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-5f59132a><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-5f59132a></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-5f59132a><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-5f59132a></fieldset> <fieldset class=\"form-group\" data-v-5f59132a><input type=\"password\" placeholder=\"Password\" minlength=\"8\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-5f59132a></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-5f59132a>"+_vm._ssrEscape("\n            Sign "+_vm._s(_vm.isLogin?'in':'up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=5f59132a&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/user.js

const login = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
};
const register = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users',
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import request from '@/utils/request'
 // 仅在客户端加载 js-cookie 包, process.client 是 nuxt.js 提供的特殊变量，判断当前代码是否运行在客户端

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
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
    isLogin() {
      return this.$route.name === 'login';
    }

  },

  mounted() {},

  methods: {
    async onSubmit() {
      try {
        const {
          data
        } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        }); // 保存用户登陆状态

        this.$store.commit('setUser', data.user); // 数据持久化，刷新不归零

        Cookie.set('user', data.user);
        this.$router.push('/');
      } catch (err) {
        this.errors = err.response.data.errors || [];
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f59132a",
  "4bd7ad14"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map