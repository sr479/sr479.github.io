webpackJsonp([6],{"1e95":function(t,e){},lO7g:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Layout",{staticClass:"layout"},[a("Sider",{ref:"side",staticClass:"side-bar",style:{height:"calc(100vh - 35px)",background:"#fff",overflow:"auto"},attrs:{"collapsed-width":78}},[a("Menu",{attrs:{"active-name":"1-2",theme:"light",width:"auto"},on:{"on-select":t.onSelect}},[a("div",{staticClass:"user-icon"},[a("div",{staticClass:"user-img"},[a("img",{attrs:{src:"static/img/head.png"}})]),t._v(" "),a("p",[t._v("992")])]),t._v(" "),a("Submenu",{attrs:{name:"1"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"location"}}),t._v(" "),a("span",[t._v("收货地址")])],1),t._v(" "),a("MenuItem",{attrs:{name:"myAddress"}},[t._v("我的收货地址")]),t._v(" "),a("MenuItem",{attrs:{name:"addAddress"}},[t._v("添加收货地址")])],2),t._v(" "),a("Submenu",{attrs:{name:"2"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"clipboard"}}),t._v(" "),a("span",[t._v("购物订单")])],1),t._v(" "),a("MenuItem",{attrs:{name:"myOrder"}},[t._v("我的订单")])],2),t._v(" "),a("Submenu",{attrs:{name:"3"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-cart"}}),t._v(" "),a("span",[t._v("购物车")])],1),t._v(" "),a("MenuItem",{attrs:{name:"myShoppingCart"}},[t._v("我的购物车")])],2)],1)],1),t._v(" "),a("Layout",{staticClass:"layout"},[a("Header",{style:{background:"#fff"}},[a("h2",[t._v(t._s(t.activeTitle))])]),t._v(" "),a("Content",{staticClass:"content"},[a("transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1),t._v(" "),a("Footer",{staticClass:"layout-footer-center"},[t._v("2018 © 992")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")({name:"Home",data:function(){return{activeTitle:"我的订单",bar:{myAddress:"我的收货地址",addAddress:"添加收货地址",myOrder:"我的订单",myShoppingCart:"我的购物车"}}},methods:{onSelect:function(t){this.activeTitle=this.bar[t],this.$router.push("/home/"+t)}}},s,!1,function(t){a("1e95")},"data-v-ce8ab3ea",null);e.default=n.exports}});
//# sourceMappingURL=6.50a7774a58199643490a.js.map