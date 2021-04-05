exports.ids = [2];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUser; });
/* unused harmony export updateUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unfollowUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const getUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
};
const updateUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/profiles/${username}`
  });
};
const followUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
};
const unfollowUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=b9583e68&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-b9583e68>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-b9583e68>","</div>",[_vm._ssrNode("<h1 data-v-b9583e68>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-b9583e68>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-b9583e68><div class=\"col-md-12\" data-v-b9583e68>"+(_vm._s(_vm.article.body))+"</div></div> <ul class=\"tag-list\" data-v-b9583e68>"+(_vm._ssrList((_vm.article.tagList),function(tag){return ("<li class=\"tag-default tag-pill tag-outline\" data-v-b9583e68>"+_vm._ssrEscape(_vm._s(tag))+"</li>")}))+"</ul> <hr data-v-b9583e68> "),_vm._ssrNode("<div class=\"article-actions\" data-v-b9583e68>","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-b9583e68>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-b9583e68>","</div>",[_c('article-comment',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=b9583e68&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=04c2c450&scoped=true&
var article_metavue_type_template_id_04c2c450_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
    name: 'profile',
    params: {
      username: _vm.article.author.username
    }
  }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-04c2c450>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
      name: 'profile',
      params: {
        username: _vm.article.author.username
      }
    }}},[_vm._v("\n      "+_vm._s(_vm.article.author.username)+"\n    ")]),_vm._ssrNode(" <span class=\"date\" data-v-04c2c450>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <span"+(_vm._ssrStyle(null,null, { display: (!_vm.canModify) ? '' : 'none' }))+" data-v-04c2c450><button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
        active: _vm.article.author.following
      }))+" data-v-04c2c450>"+((!_vm.article.author.following)?("<i class=\"ion-plus-round\" data-v-04c2c450></i>"):"<!---->")+_vm._ssrEscape("\n        "+_vm._s(_vm.article.author.following ? 'unFollow' : 'Follow')+" "+_vm._s(_vm.article.author.username)+" \n    ")+"</button>\n     \n    <button"+(_vm._ssrAttr("disabled",false))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
        active: _vm.article.favorited
      }))+" data-v-04c2c450><i class=\"ion-heart\" data-v-04c2c450></i>"+_vm._ssrEscape("\n        "+_vm._s(_vm.article.favorited ? 'Unfavorite' : 'Favorite')+" Post ")+"<span class=\"counter\" data-v-04c2c450>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button></span> "),_vm._ssrNode("<span"+(_vm._ssrStyle(null,null, { display: (_vm.canModify) ? '' : 'none' }))+" data-v-04c2c450>","</span>",[_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary",attrs:{"to":{
        name: 'editor',
        params: _vm.article
      }},on:{"click":_vm.toggleFollow}},[_c('i',{staticClass:"ion-edit"}),_vm._v("\n        Edit Article\n    ")]),_vm._ssrNode("\n     \n    <button class=\"btn btn-sm btn-outline-danger\" data-v-04c2c450><i class=\"ion-trash-a\" data-v-04c2c450></i>\n        Delete Article\n    </button>")],2)],2)}
var article_metavue_type_template_id_04c2c450_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=04c2c450&scoped=true&

// EXTERNAL MODULE: ./api/profile.js
var profile = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'ArticleMeta',

  data() {
    return {
      canModify: false
    };
  },

  props: {
    article: Object
  },

  mounted() {
    this.canModify = this.article.author.username === this.$store.state.user.username;
  },

  methods: {
    async toggleFollow() {
      const {
        author
      } = this.article;
      const {
        data
      } = author.following ? await Object(profile["c" /* unfollowUser */])(author.username) : await Object(profile["a" /* followUser */])(author.username);
      this.article.author.following = data.profile.following;
    },

    async onFavorite() {
      const {
        article
      } = this;
      article.favoriteDisabled = true;

      if (article.favorited) {
        await Object(api_article["d" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        await Object(api_article["a" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    },

    async onDelete() {
      await Object(api_article["c" /* deleteArticle */])(this.article.slug);
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_04c2c450_scoped_true_render,
  article_metavue_type_template_id_04c2c450_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "04c2c450",
  "6b192f24"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=template&id=3329d5ec&scoped=true&
var article_commentvue_type_template_id_3329d5ec_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\" data-v-3329d5ec><div class=\"card-block\" data-v-3329d5ec><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-3329d5ec>"+_vm._ssrEscape(_vm._s(_vm.commentContent))+"</textarea></div> <div class=\"card-footer\" data-v-3329d5ec><img"+(_vm._ssrAttr("src",_vm.userInfo.image))+" class=\"comment-author-img\" data-v-3329d5ec> <button class=\"btn btn-sm btn-primary\" data-v-3329d5ec>\n        Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\" data-v-3329d5ec>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-3329d5ec><p class=\"card-text\" data-v-3329d5ec>"+_vm._ssrEscape("\n        "+_vm._s(comment.body)+"\n      ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-3329d5ec>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{ 
        name: 'profile',
        params: {
          username: comment.author.username
        }
      }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}}),_vm._v("\n          "+_vm._s(comment.author.username)+"\n      ")]),_vm._ssrNode(" <span class=\"date-posted\" data-v-3329d5ec>"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD')))+"</span> "+((_vm.userInfo.username === comment.author.username)?("<span class=\"mod-options\" data-v-3329d5ec><i class=\"ion-trash-a\" data-v-3329d5ec></i></span>"):"<!---->"))],2)],2)})],2)}
var article_commentvue_type_template_id_3329d5ec_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=template&id=3329d5ec&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/comment.js

const addComment = params => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: `/api/articles/${params.slug}/comments`,
    data: params
  });
};
const getComments = slug => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};
const deleteComment = (slug, id) => {
  return Object(request["b" /* request */])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=script&lang=js&
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

/* harmony default export */ var article_commentvue_type_script_lang_js_ = ({
  name: "ArticleComment",

  data() {
    return {
      comments: [],
      commentContent: ''
    };
  },

  props: {
    article: Object
  },
  components: {},
  computed: {
    userInfo() {
      return this.$store.state.user;
    }

  },

  mounted() {
    this.getComments();
  },

  methods: {
    async getComments() {
      const {
        data
      } = await getComments(this.article.slug);
      this.comments = data.comments || [];
    },

    async deleteComment(comment, idx) {
      await deleteComment(this.article.slug, comment.id);
      this.comments.splice(idx, 1);
    },

    async addComment() {
      const {
        data
      } = await addComment({
        slug: this.article.slug,
        comment: {
          body: this.commentContent
        }
      });
      this.comments.push(data.comment);
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentvue_type_script_lang_js_ = (article_commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue



function article_comment_injectStyles (context) {
  
  
}

/* normalize component */

var article_comment_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentvue_type_script_lang_js_,
  article_commentvue_type_template_id_3329d5ec_scoped_true_render,
  article_commentvue_type_template_id_3329d5ec_scoped_true_staticRenderFns,
  false,
  article_comment_injectStyles,
  "3329d5ec",
  "01fdf710"
  
)

/* harmony default export */ var article_comment = (article_comment_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "ArticleIndex",

  data() {
    return {};
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["e" /* getArticle */])(params.slug);
    const md = new external_markdown_it_default.a();
    const {
      article
    } = data;
    article.body = md.render(article.body);
    return {
      article: article
    };
  },

  components: {
    ArticleMeta: article_meta,
    ArticleComment: article_comment
  },

  head() {
    return {
      title: this.article.title + '- RealWorld',
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  },

  computed: {},

  mounted() {},

  methods: {}
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "b9583e68",
  "5e568a61"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map