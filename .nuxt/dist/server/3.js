exports.ids = [3];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=5dccd612&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-5dccd612><div class=\"container\" data-v-5dccd612><h1 class=\"logo-font\" data-v-5dccd612>conduit</h1> <p data-v-5dccd612>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-5dccd612>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-5dccd612>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-5dccd612>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-5dccd612>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-5dccd612>","</ul>",[(_vm.$store.state.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-5dccd612>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'your_feed' && !_vm.tag },attrs:{"to":{
                  name: 'home',
                  query: {
                    tab: 'your_feed',
                  },
                },"exact":""}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-5dccd612>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'global_feed' && !_vm.tag },attrs:{"to":{
                  name: 'home',
                  query: {
                    tab: 'global_feed',
                  },
                },"exact":""}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "+((_vm.tag)?("<li class=\"nav-item\" data-v-5dccd612><a class=\"nav-link active\" data-v-5dccd612>"+_vm._ssrEscape("#"+_vm._s(_vm.tag))+"</a></li>"):"<!---->"))],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-5dccd612>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-5dccd612>","</div>",[_c('nuxt-link',{attrs:{"to":'/profile/' + article.author.username}},[_c('img',{attrs:{"src":"http://i.imgur.com/Qr71crq.jpg"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-5dccd612>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":'/profile/' + article.author.username}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-5dccd612>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+" data-v-5dccd612><i class=\"ion-heart\" data-v-5dccd612></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: { slug: article.slug },
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(tag){return _c('li',{key:tag,staticClass:"tag-pill tag-default tag-outline"},[_vm._v("\n                "+_vm._s(tag)+"\n              ")])}),0)])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-5dccd612>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-5dccd612>","</div>",[_vm._ssrNode("<p data-v-5dccd612>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-5dccd612>","</div>",[_vm._l((_vm.tags),function(item){return [(item.replace(/\u200C/g, ''))?_c('nuxt-link',{key:item,staticClass:"tag-pill tag-default",attrs:{"to":{
                  name: 'home',
                  query: {
                    tag: item,
                  },
                }}},[_vm._v(_vm._s(item))]):_vm._e()]})],2)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-5dccd612>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-5dccd612>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: item === _vm.page }))+" data-v-5dccd612>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
              name: 'home',
              query: {
                page: item,
                tag: _vm.$route.query.tag,
              },
            }}},[_vm._v(_vm._s(item))])],1)}),0)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=5dccd612&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/article.js

const getArticles = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
const getFeedArticles = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/articles/feed',
    // header: {
    //   Authorization: `Token ${}`
    // },
    params
  });
};
const addArticles = slug => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
const deleteArticles = slug => {
  return Object(request["b" /* request */])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
// CONCATENATED MODULE: ./api/tag.js

const getTags = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags',
    params
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//


/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "HomeIndex",

  data() {
    return {};
  },

  async asyncData({
    query,
    store
  }) {
    const page = Number.parseInt(query.page) || 1;
    const limit = Number.parseInt(query.limit) || 10;
    const tab = query.tab || "global_feed";
    const loadArticles = store.state.user && tab === "your_feed" ? getFeedArticles : getArticles; // const [{ data }, { data: tagData }] = await Promise.all([
    //   loadArticles({
    //     limit,
    //     offset: (page - 1) * limit,
    //     tag: query.tag,
    //   }),
    //   getTags(),
    // ]);

    const data = {
      articles: [],
      articlesCount: 0
    };
    const tagData = {
      tags: []
    };
    return {
      articles: data.articles,
      articlesCount: data.articlesCount,
      limit,
      page,
      tags: tagData.tags,
      tag: query.tag,
      tab
    };
  },

  components: {},
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },

  mounted() {},

  methods: {},
  watchQuery: ["page", "tag", "tab"]
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5dccd612",
  "3e635d2c"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map