(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{1208:function(n,t,e){"use strict";e.r(t);var c=e("70e7"),a=e("d1e9");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("65c0");var o,u=e("f0c5"),i=Object(u["a"])(a["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],o);t["default"]=i.exports},"4d0a":function(n,t,e){"use strict";(function(n){e("9948");c(e("66fd"));var t=c(e("1208"));function c(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},6271:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=e("4f24"),a=function(){e.e("pages/category/children/NavTab").then(function(){return resolve(e("17e3"))}.bind(null,e)).catch(e.oe)},r=function(){e.e("pages/category/children/NavView").then(function(){return resolve(e("6cc1"))}.bind(null,e)).catch(e.oe)},o={data:function(){return{category:[],currentIndex:0,navList:[]}},components:{NavTab:a,NavView:r},computed:{navLabel:function(){return this.category[this.navList[this.currentIndex]]}},methods:{toggleTab:function(n){this.currentIndex=n}},onLoad:function(){var n=this;(0,c.getHomeBaseData)().then((function(t){var e=t.data;n.category=e.category,n.navList=Object.keys(e.category)}))},onShow:function(){var t=n.getStorageSync("index");t+""!=""&&(this.currentIndex=t),n.removeStorageSync("index")}};t.default=o}).call(this,e("543d")["default"])},"65c0":function(n,t,e){"use strict";var c=e("70c6"),a=e.n(c);a.a},"70c6":function(n,t,e){},"70e7":function(n,t,e){"use strict";var c,a=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return c}))},d1e9:function(n,t,e){"use strict";e.r(t);var c=e("6271"),a=e.n(c);for(var r in c)"default"!==r&&function(n){e.d(t,n,(function(){return c[n]}))}(r);t["default"]=a.a}},[["4d0a","common/runtime","common/vendor"]]]);