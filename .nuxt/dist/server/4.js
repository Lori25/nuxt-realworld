exports.ids = [4];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    // header: {
    //   Authorization: `Token ${}`
    // },
    params
  });
};
const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
const createArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles`,
    data
  });
};
const updateArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${data.slug}`,
    data
  });
};
const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=7e6cfdf5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\" data-v-7e6cfdf5>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-7e6cfdf5>","</div>",[_vm._ssrNode("<div class=\"col-md-10 offset-md-1 col-xs-12\" data-v-7e6cfdf5>","</div>",[_c('error-msg',{attrs:{"errors":_vm.errors}}),_vm._ssrNode(" <form data-v-7e6cfdf5><fieldset data-v-7e6cfdf5><fieldset class=\"form-group\" data-v-7e6cfdf5><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.post.title)))+" class=\"form-control form-control-lg\" data-v-7e6cfdf5></fieldset> <fieldset class=\"form-group\" data-v-7e6cfdf5><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.post.description)))+" class=\"form-control\" data-v-7e6cfdf5></fieldset> <fieldset class=\"form-group\" data-v-7e6cfdf5><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\" data-v-7e6cfdf5>"+_vm._ssrEscape(_vm._s(_vm.post.body))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-7e6cfdf5><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.newTag)))+" class=\"form-control\" data-v-7e6cfdf5> <div class=\"tag-list\" data-v-7e6cfdf5>"+(_vm._ssrList((_vm.post.tagList),function(tag,index){return ("<span class=\"tag-default tag-pill\" data-v-7e6cfdf5><i class=\"ion-close-round\" data-v-7e6cfdf5></i>"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n                ")+"</span>")}))+"</div></fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\" data-v-7e6cfdf5>\n              Publish Article\n            </button></fieldset></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=7e6cfdf5&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/error-msg.vue?vue&type=template&id=1ddb6642&
var error_msgvue_type_template_id_1ddb6642_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,name){return ((_vm._ssrList((messages),function(msg,index){return ("<li>"+_vm._ssrEscape("\n        "+_vm._s(name)+" "+_vm._s(msg)+"\n      ")+"</li>")})))}))+"</ul>")])}
var error_msgvue_type_template_id_1ddb6642_staticRenderFns = []


// CONCATENATED MODULE: ./components/error-msg.vue?vue&type=template&id=1ddb6642&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/error-msg.vue?vue&type=script&lang=js&
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
/* harmony default export */ var error_msgvue_type_script_lang_js_ = ({
  props: {
    errors: Array
  }
});
// CONCATENATED MODULE: ./components/error-msg.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_error_msgvue_type_script_lang_js_ = (error_msgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/error-msg.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_error_msgvue_type_script_lang_js_,
  error_msgvue_type_template_id_1ddb6642_render,
  error_msgvue_type_template_id_1ddb6642_staticRenderFns,
  false,
  null,
  null,
  "01beaba0"
  
)

/* harmony default export */ var error_msg = (component.exports);
// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
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
//


/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  // 在路由匹配组件渲染之前先执行中间件处理，有多个定义成数组
  middleware: 'authenticated',
  name: "EditorIndex",

  data() {
    return {
      post: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      newTag: '',
      errors: []
    };
  },

  mounted() {
    // debugger
    console.log(this.$route.params);
    if (!this.$route.params) return;
    this.post = { ...this.$route.params
    };
  },

  components: {
    ErrorMsg: error_msg
  },
  methods: {
    addTag() {
      this.post.tagList && this.post.tagList.push(this.newTag);
      this.newTag = '';
    },

    removeTag(tag, idx) {
      this.post.tagList && this.post.tagList.splice(idx, 1);
    },

    async onSubmit() {
      try {
        const {
          data
        } = this.post.slug ? await Object(article["h" /* updateArticle */])({
          slug: this.post.slug,
          // 更新时才有
          article: this.post
        }) : await Object(article["b" /* createArticle */])({
          article: this.post
        });
        this.$router.push({
          name: 'article',
          params: {
            slug: data.article.slug
          }
        });
      } catch (err) {
        this.errors = err.response.data.errors || [];
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var editor_component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7e6cfdf5",
  "abe34f10"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (editor_component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map