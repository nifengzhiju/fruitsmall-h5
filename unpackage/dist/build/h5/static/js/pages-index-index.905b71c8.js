(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0a6d":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".carousels[data-v-ab80f8ac]{height:%?400?%}.carousels uni-image[data-v-ab80f8ac]{width:100%;height:100%}",""]),t.exports=e},"0c8d":function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("f3f3")),i=a(n("50e6")),o=a(n("5fe3")),c=a(n("d78e")),u=n("2f62"),s={data:function(){return{}},computed:(0,r.default)({},(0,u.mapState)(["isLogin"])),components:{uniNavBar:i.default,uniSearchBar:o.default,uniIcons:c.default},methods:{toLogin:function(){uni.navigateTo({url:"/pages/user/user"})},toCategory:function(){uni.switchTab({url:"/pages/category/category"})},toProfile:function(){uni.switchTab({url:"/pages/profile/profile"})},searchBarClick:function(){uni.navigateTo({url:"/pages/search/search"})}}};e.default=s},"0f64":function(t,e,n){"use strict";n.r(e);var a=n("34d5"),r=n("1bf7");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("b565");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"ab80f8ac",null,!1,a["a"],o);e["default"]=u.exports},"15ae":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.recommend.length>0?n("v-uni-view",{staticClass:"recommend"},[n("v-uni-view",[n("h2",[t._v("为您推荐")])]),n("goods",{attrs:{goodsList:t.recommend}})],1):t._e()},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},"17c1":function(t,e,n){var a=n("9437");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("6c600cd5",a,!0,{sourceMap:!1,shadowMode:!1})},"1b78":function(t,e,n){"use strict";var a=n("3a1d"),r=n.n(a);r.a},"1bf7":function(t,e,n){"use strict";n.r(e);var a=n("909c"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"21e3":function(t,e,n){"use strict";var a=n("a026"),r=n.n(a);r.a},"27b5":function(t,e,n){"use strict";var a=n("17c1"),r=n.n(a);r.a},"2b9f":function(t,e,n){"use strict";n.r(e);var a=n("15ae"),r=n("3aca");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("1b78");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"43e50e43",null,!1,a["a"],o);e["default"]=u.exports},"2baa":function(t,e,n){t.exports=n.p+"static/img/4.fd8e2fe9.png"},"2cef":function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("634e")),i={data:function(){return{}},components:{Goods:r.default},props:{seckill:{type:Array,default:function(){return[]}}}};e.default=i},3052:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return Object.keys(t.category).length>0?n("v-uni-view",{staticClass:"top-nav"},t._l(t.category,(function(e,a,r){return n("v-uni-view",{key:a,staticClass:"nav-item"},[n("v-uni-image",{staticClass:"nav-item-icon",attrs:{src:t._f("setImg")(r)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCategory(r)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.imgLoad.apply(void 0,arguments)}}}),n("v-uni-view",[t._v(t._s(a))]),3==r?n("v-uni-view",{class:{"message-hint":!0,"hint-display":t.flag},style:{opacity:t.hint}},[t._v("目前只有浆果类这些水果哦")]):t._e()],1)})),1):t._e()},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},"34d5":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.carousels.length>0?n("v-uni-view",[n("v-uni-swiper",{staticClass:"carousels",attrs:{"indicator-dots":"true",autoplay:"true",interval:"2000",circular:"true"}},t._l(t.carousels,(function(t,e){return n("v-uni-swiper-item",{key:e},[n("v-uni-image",{attrs:{src:t}})],1)})),1)],1):t._e()},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},3738:function(t,e,n){var a=n("24fb"),r=n("1de5"),i=n("e472");e=a(!1);var o=r(i);e.push([t.i,".top-nav[data-v-0c37aa28]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?7?%;margin:%?20?%;text-align:center;font-size:%?25?%;color:#666}.nav-item[data-v-0c37aa28]{position:relative;-webkit-box-flex:33.33%;-webkit-flex:33.33%;flex:33.33%;margin:%?10?% 0}.nav-item-icon[data-v-0c37aa28]{width:%?85?%;height:%?85?%;border-radius:50%}.message-hint[data-v-0c37aa28]{box-sizing:border-box;position:absolute;top:%?-100?%;right:%?-90?%;width:%?210?%;height:%?210?%;padding:%?37?% %?20?%;text-align:center;font-size:%?25?%;line-height:%?30?%;word-wrap:break-word;background:url("+o+") no-repeat;background-size:100%;-webkit-transition:all .6s;transition:all .6s;z-index:9999}.hint-display[data-v-0c37aa28]{display:none}",""]),t.exports=e},"3a1d":function(t,e,n){var a=n("68e8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("26f86746",a,!0,{sourceMap:!1,shadowMode:!1})},"3aca":function(t,e,n){"use strict";n.r(e);var a=n("4952"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"421c":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.seckill.length>0?n("v-uni-view",{staticClass:"seckill"},[n("v-uni-view",[n("h2",[t._v("限时秒杀")])]),n("goods",{attrs:{goodsList:t.seckill}})],1):t._e()},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},"42ac":function(t,e,n){"use strict";var a=n("e19d"),r=n.n(a);r.a},4901:function(t,e,n){"use strict";n.r(e);var a=n("e81c"),r=n("7c88");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("42ac");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"159ba64b",null,!1,a["a"],o);e["default"]=u.exports},4952:function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("634e")),i={data:function(){return{}},components:{Goods:r.default},props:{recommend:{type:Array,default:function(){return[]}}}};e.default=i},"4f24":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getHomeBaseData=r,e.getRecommend=i;var a=n("0243");function r(){return(0,a.request)("/home")}function i(){return(0,a.request)("/cart/elseGoods")}},"4faa":function(t,e,n){t.exports=n.p+"static/img/3.0239be36.png"},"50e6":function(t,e,n){"use strict";n.r(e);var a=n("c49c"),r=n("75d2");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("ce7b");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"506125ec",null,!1,a["a"],o);e["default"]=u.exports},"51f8":function(t,e,n){var a=n("75b7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("3fbde624",a,!0,{sourceMap:!1,shadowMode:!1})},"54c3":function(t,e,n){"use strict";n.r(e);var a=n("ec9f"),r=n("a09e");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("c809");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"5ed2ae26",null,!1,a["a"],o);e["default"]=u.exports},"68e8":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.recommend[data-v-43e50e43]{margin:%?20?%;padding:%?15?%;border:1px solid #e9e9e9;border-radius:%?20?%;background-color:#fff}.recommend h2[data-v-43e50e43]{font-weight:400;font-size:%?36?%;text-align:center;margin:%?10?% 0;color:#333}.recommend h2[data-v-43e50e43]::after,\n.recommend h2[data-v-43e50e43]::before{display:inline-block;content:"";width:%?150?%;height:%?3?%;margin:0 %?20?%;background-color:#e9e9e9;vertical-align:middle}',""]),t.exports=e},"6b4b":function(t,e,n){"use strict";n.r(e);var a=n("f992"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},7277:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},"75b7":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-nav-bar-text[data-v-506125ec]{font-size:%?32?%}.uni-nav-bar-right-text[data-v-506125ec]{font-size:%?28?%}.uni-navbar[data-v-506125ec]{width:%?750?%}.uni-navbar__content[data-v-506125ec]{position:relative;width:%?750?%;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-506125ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-navbar__header[data-v-506125ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:%?750?%;height:44px;line-height:44px;font-size:16px}.uni-navbar__header-btns[data-v-506125ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-506125ec]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-506125ec]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-506125ec]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-506125ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-506125ec]{height:44px}.uni-navbar--fixed[data-v-506125ec]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-506125ec]{box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-506125ec]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#c8c7cc}',""]),t.exports=e},"75d2":function(t,e,n){"use strict";n.r(e);var a=n("9411"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"7c88":function(t,e,n){"use strict";n.r(e);var a=n("0c8d"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"7d34":function(t,e,n){var a=n("f75d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("dff9361e",a,!0,{sourceMap:!1,shadowMode:!1})},"7fab":function(t,e,n){"use strict";n.r(e);var a=n("3052"),r=n("d1b3");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("21e3");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"0c37aa28",null,!1,a["a"],o);e["default"]=u.exports},"88a8":function(t,e,n){"use strict";n.r(e);var a=n("2cef"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"8b96":function(t,e,n){"use strict";n.r(e);var a=n("7277"),r=n("6b4b");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("27b5");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"f27135c4",null,!1,a["a"],o);e["default"]=u.exports},"905f":function(t,e,n){var a=n("0a6d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("7de0ecb6",a,!0,{sourceMap:!1,shadowMode:!1})},"909c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},props:{carousels:{type:Array,default:function(){return[]}}}};e.default=a},9238:function(t,e,n){var a=n("cadd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("8fac5036",a,!0,{sourceMap:!1,shadowMode:!1})},9411:function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("8b96")),i=a(n("d78e")),o={name:"UniNavBar",components:{uniStatusBar:r.default,uniIcons:i.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!1},border:{type:[String,Boolean],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=o},9437:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-status-bar[data-v-f27135c4]{width:%?750?%;height:20px}',""]),t.exports=e},"98a7":function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("d0ffa")),i=n("4f24"),o=a(n("4901")),c=a(n("0f64")),u=a(n("7fab")),s=a(n("ebf8")),l=a(n("2b9f")),f={data:function(){return{carousels:[],category:{},seckill:[],recommend:[],flag:!0}},components:{TopSearch:o.default,Carousel:c.default,TopNavBar:u.default,Seckill:s.default,Recommend:l.default},onLoad:function(){var t=this;(0,i.getHomeBaseData)().then((function(e){var n=e.data;t.carousels=n.carousels,t.category=n.category,t.seckill=n.seckill})),this.getRecommend(0)},methods:{getRecommend:function(t){var e=this;this.flag&&(0,i.getRecommend)().then((function(n){var a;(a=e.recommend).push.apply(a,(0,r.default)(n.data)),t&&(e.flag=!1)}))}},onReachBottom:function(){this.getRecommend(1)}};e.default=f},a026:function(t,e,n){var a=n("3738");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("b5946b7a",a,!0,{sourceMap:!1,shadowMode:!1})},a099:function(t,e,n){t.exports=n.p+"static/img/0.e13e48f8.png"},a09e:function(t,e,n){"use strict";n.r(e);var a=n("98a7"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},b51e:function(t,e,n){var a={"./0.png":"a099","./1.png":"d4ac","./2.png":"cac1","./3.png":"4faa","./4.png":"2baa","./5.png":"c358"};function r(t){var e=i(t);return n(e)}function i(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="b51e"},b565:function(t,e,n){"use strict";var a=n("905f"),r=n.n(a);r.a},b6802:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"a",(function(){return a}))},b8f0:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.search-bar[data-v-159ba64b]{width:100%;font-size:%?23?%}.top-search[data-v-159ba64b]{width:%?200?%}.center[data-v-159ba64b]{position:relative;width:100%}.center[data-v-159ba64b]::after{position:absolute;width:100%;height:100%;top:0;left:%?10?%;content:""}\n.center[data-v-159ba64b]{margin-right:%?25?%}\n[data-v-159ba64b] .uni-navbar__header-btns:nth-of-type(1){position:relative;left:%?10?%;width:%?40?%!important}[data-v-159ba64b] .uni-navbar__header-btns:nth-child(3){position:relative;right:%?6?%;width:%?60?%!important;font-size:%?28?%;color:#555}.user-icon[data-v-159ba64b]{line-height:%?120?%}',""]),t.exports=e},bebc:function(t,e,n){"use strict";var a=n("9238"),r=n.n(a);r.a},c358:function(t,e){t.exports="data:image/png;base64,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"},c49c:function(t,e,n){"use strict";var a={uniStatusBar:n("8b96").default,uniIcons:n("d78e").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[n("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},c809:function(t,e,n){"use strict";var a=n("7d34"),r=n.n(a);r.a},cac1:function(t,e,n){t.exports=n.p+"static/img/2.6d8a51f6.png"},cadd:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".seckill[data-v-1a13379b]{margin:%?20?%;padding:%?15?%;border:1px solid #e9e9e9;border-radius:%?20?%;background-color:#fff}.seckill h2[data-v-1a13379b]{font-weight:400;font-size:%?30?%;margin:%?10?%}",""]),t.exports=e},ce7b:function(t,e,n){"use strict";var a=n("51f8"),r=n.n(a);r.a},d0ffa:function(t,e,n){"use strict";n.r(e);var a=n("b6802");function r(t){if(Array.isArray(t))return Object(a["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=n("dde1");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return r(t)||i(t)||Object(o["a"])(t)||c()}n.d(e,"default",(function(){return u}))},d1b3:function(t,e,n){"use strict";n.r(e);var a=n("f65a"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},d4ac:function(t,e,n){t.exports=n.p+"static/img/1.95668378.png"},dde1:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3");var a=n("b6802");function r(t,e){if(t){if("string"===typeof t)return Object(a["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a["a"])(t,e):void 0}}},e19d:function(t,e,n){var a=n("b8f0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("78fcfc54",a,!0,{sourceMap:!1,shadowMode:!1})},e472:function(t,e,n){t.exports=n.p+"static/img/message.c11a8c3c.png"},e81c:function(t,e,n){"use strict";var a={uniNavBar:n("50e6").default,uniIcons:n("d78e").default,uniSearchBar:n("5fe3").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"top-search"},[n("uni-nav-bar",{staticClass:"nav-bar",attrs:{fixed:!0,shadow:!0}},[n("v-uni-view",{staticClass:"left",attrs:{slot:"left"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCategory.apply(void 0,arguments)}},slot:"left"},[n("uni-icons",{attrs:{type:"bars",size:"20"}})],1),n("v-uni-view",{staticClass:"center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchBarClick.apply(void 0,arguments)}}},[n("uni-search-bar",{staticClass:"search-bar",attrs:{placeholder:"搜索",radius:"50",bgColor:"#fafafa",maxlength:"0",cancelButton:"none"}})],1),n("v-uni-view",{attrs:{slot:"right"},slot:"right"},[t.isLogin?n("uni-icons",{staticClass:"user-icon",attrs:{type:"contact-filled",size:"30",color:"#555"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProfile.apply(void 0,arguments)}}}):n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[t._v("登录")])],1)],1)],1)},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},ebf8:function(t,e,n){"use strict";n.r(e);var a=n("421c"),r=n("88a8");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("bebc");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"1a13379b",null,!1,a["a"],o);e["default"]=u.exports},ec9f:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("top-search"),n("carousel",{attrs:{carousels:t.carousels}}),n("top-nav-bar",{attrs:{category:t.category}}),n("seckill",{attrs:{seckill:t.seckill}}),n("recommend",{attrs:{recommend:t.recommend}}),t.flag?t._e():n("v-uni-view",{staticClass:"page-bottom"},[t._v("我是有底线的")])],1)},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},f65a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{hint:0,count:0,flag:!1}},props:{category:{type:Object,default:function(){return{}}}},methods:{toCategory:function(t){uni.setStorageSync("index",t),uni.switchTab({url:"/pages/category/category"})},imgLoad:function(){var t=this;this.count++,6==this.count&&(setTimeout((function(){return t.hint=1}),500),setTimeout((function(){t.hint=0,setTimeout((function(){return t.flag=!0}),600)}),3500))}},filters:{setImg:function(t,e){return n("b51e")("./".concat(t,".png"))}}};e.default=a},f75d:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.box[data-v-5ed2ae26]{background-color:#f6f6f6;padding-bottom:%?20?%}.page-bottom[data-v-5ed2ae26]{font-size:%?30?%;text-align:center;color:#666}.page-bottom[data-v-5ed2ae26]::after,\n.page-bottom[data-v-5ed2ae26]::before{display:inline-block;content:"";width:%?150?%;height:%?3?%;margin:0 %?20?%;background-color:#ccc;vertical-align:middle}',""]),t.exports=e},f992:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().statusBarHeight+"px",r={name:"UniStatusBar",data:function(){return{statusBarHeight:a}}};e.default=r}}]);