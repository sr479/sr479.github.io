webpackJsonp([2],{U4bo:function(t,s){},"X7+m":function(t,s){},"b+fo":function(t,s,o){"use strict";var i={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"shop-box"},[o("div",{staticClass:"shop-container"},[o("div",{staticClass:"shop-title"},[o("div",{staticClass:"shop-title-icon"},[o("Icon",{attrs:{type:"fireball"}}),t._v(" "),o("i",{staticClass:"fa fa-fire"})],1),t._v(" "),o("div",{staticClass:"shop-title-content"},[o("p",[o("router-link",{attrs:{to:"/merchant"}},[t._v(t._s(t.shopIntro.shopName))])],1),t._v(" "),o("p",[o("router-link",{attrs:{to:"/merchant"}},[t._v(t._s(t.shopIntro.slogen))])],1)])]),t._v(" "),o("div",{staticClass:"shop-another-item"},t._l(t.shopIntro.showGoods,function(s,i){return o("div",{key:i,staticClass:"shop-another-item-detail"},[o("div",{staticClass:"shop-another-item-img"},[o("img",{attrs:{src:s.img,alt:""}})]),t._v(" "),o("div",{staticClass:"shop-anoter-item-intro"},[o("p",[t._v(t._s(s.intro[0]))]),t._v(" "),o("p",[t._v(t._s(s.intro[1]))])])])}),0)])])},staticRenderFns:[]};var a=o("VU/8")({name:"ShopHeader",data:function(){return{shopIntro:{shopName:"992 Shop",slogen:"The Best Thing For You",showGoods:[{img:"static/img/goodsList/item-show-1.jpg",intro:["全身磨砂","防指纹"]},{img:"static/img/goodsList/item-show-2.jpg",intro:["环保PP材质","不发黄"]},{img:"static/img/goodsList/item-show-3.jpg",intro:["0.4mm纤细","纤薄手感"]}]}}}},i,!1,function(t){o("X7+m")},"data-v-618855b0",null);s.a=a.exports},eH2y:function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=o("Dd8w"),a=o.n(i),e=o("b+fo"),n=o("bYoP"),r=o("YtJ0"),c=o("NYxO"),d={name:"Merchant",created:function(){this.loadGoodsList()},computed:a()({},Object(c.c)(["orderGoodsList"])),methods:a()({},Object(c.b)(["loadGoodsList"])),components:{ShopHeader:e.a,Footer:n.a},store:r.a},l={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",[o("ShopHeader"),t._v(" "),o("div",{staticClass:"goods-container"},[o("div",{staticClass:"goods-list"},t._l(t.orderGoodsList,function(s,i){return o("div",{key:i,staticClass:"goods-show-info"},[o("div",{staticClass:"goods-show-img"},[o("router-link",{attrs:{to:"/goodsDetail"}},[o("img",{attrs:{src:s.img}})])],1),t._v(" "),o("div",{staticClass:"goods-show-price"},[o("span",[o("Icon",{attrs:{type:"social-yen text-danger"}}),t._v(" "),o("span",{staticClass:"seckill-price text-danger"},[t._v(t._s(s.price))])],1)]),t._v(" "),o("div",{staticClass:"goods-show-detail"},[o("span",[t._v(t._s(s.intro))])]),t._v(" "),o("div",{staticClass:"goods-show-num"},[t._v("\n          已有"),o("span",[t._v(t._s(s.remarks))]),t._v("人评价\n        ")])])}),0),t._v(" "),o("div",{staticClass:"goods-page"},[o("Page",{attrs:{total:100,"show-sizer":""}})],1)]),t._v(" "),o("Footer")],1)},staticRenderFns:[]};var v=o("VU/8")(d,l,!1,function(t){o("U4bo")},"data-v-0407e3ae",null);s.default=v.exports}});
//# sourceMappingURL=2.86fda91f1a87c0111428.js.map