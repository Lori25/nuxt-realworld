(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{272:function(t,n,e){"use strict";e.r(n);e(52),e(25),e(24),e(23),e(11),e(40);var r=e(21),c=e(51);function o(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var l={name:"LayoutIndex",data:function(){return{}},components:{},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(c.b)(["user"])),mounted:function(){},methods:{}},v=e(31),component=Object(v.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav",{staticClass:"navbar navbar-light"},[e("div",{staticClass:"container"},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("conduit")]),t._v(" "),e("ul",{staticClass:"nav navbar-nav pull-xs-right"},[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/",exact:""}},[t._v("Home")])],1),t._v(" "),t.user&&t.user.token?[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/editor"}},[e("i",{staticClass:"ion-compose"}),t._v(" New Post\n            ")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/settings"}},[e("i",{staticClass:"ion-gear-a"}),t._v(" Settings\n            ")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/profile/"+t.user.username}},[e("img",{staticClass:"user-pic",attrs:{src:t.user.image||"http://i.imgur.com/Qr71crq.jpg",alt:""}}),t._v("\n              "+t._s(t.user.username)+"\n            ")])],1)]:[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Sign up")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Sign in")])],1)]],2)],1)]),t._v(" "),e("nuxt-child"),t._v(" "),t._m(0)],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[e("div",{staticClass:"container"},[e("a",{staticClass:"logo-font",attrs:{href:"/"}},[t._v("conduit")]),t._v(" "),e("span",{staticClass:"attribution"},[t._v("\n        An interactive learning project from "),e("a",{attrs:{href:"https://thinkster.io"}},[t._v("Thinkster")]),t._v(". Code & design licensed under MIT.\n      ")])])])}],!1,null,"044508e7",null);n.default=component.exports}}]);