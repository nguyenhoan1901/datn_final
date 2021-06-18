(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{388:function(t,e,n){"use strict";var r={name:"Breadcrumbs",serverCacheKey:function(t){return"".concat(t.light,":").concat(t.section,":").concat(JSON.stringify(t.pages))},props:{light:{type:Boolean,required:!1,default:!1},section:{type:String,required:!1,default:null},pages:{type:Array,required:!1,default:null}},mounted:function(){this.$refs.scrollable.scrollLeft=this.$refs.scrollable.scrollWidth}},o=(n(421),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["breadcrumbs",t.light?"breadcrumbs--light":"",t.section?"breadcrumbs--"+t.section:""]},[n("div",{ref:"scrollable",staticClass:"breadcrumbs__scrollable"},[n("div",{staticClass:"breadcrumbs__wrapper"},[t.pages?n("ol",{staticClass:"breadcrumbs__list",attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},t._l(t.pages,(function(e,r){return n("li",{key:e.path,staticClass:"breadcrumbs__item",attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[e.path?n("nuxt-link",{staticClass:"breadcrumbs__link",attrs:{itemprop:"item",to:e.path}},[n("span",{staticClass:"breadcrumbs__title",attrs:{itemprop:"name"}},[t._v(t._s(e.name))])]):n("div",{staticClass:"breadcrumbs__nolink"},[n("span",{staticClass:"breadcrumbs__title",attrs:{itemprop:"name"}},[t._v(t._s(e.name))])]),t._v(" "),n("meta",{attrs:{itemprop:"position",content:r+1}})],1)})),0):t._e()]),t._v(" "),n("span",{staticClass:"breadcrumbs__left-gradient"}),t._v(" "),n("span",{staticClass:"breadcrumbs__right-gradient"})])])}),[],!1,null,null,null);e.a=component.exports},393:function(t,e,n){t.exports=n.p+"b317ab02ac092c5d97ac159e0e6a8455.svg"},394:function(t,e,n){t.exports=n.p+"32c1c836dbf078819a93f4e02db36db1.svg"},395:function(t,e,n){t.exports=n.p+"a8f0fe8189796d2039ce3b6bb277fa50.svg"},396:function(t,e,n){t.exports=n.p+"9d19b5ce18afc93b811961ffe23fb469.svg"},397:function(t,e,n){},398:function(t,e,n){},399:function(t,e,n){},400:function(t,e,n){"use strict";n(407);var r={name:"Hero",serverCacheKey:function(t){return"".concat(t.light,":").concat(t.paragraph,":").concat(t.title,":").concat(JSON.stringify(t.link),":").concat(t.cacheKey)},props:{light:{type:Boolean,required:!1,default:!0},title:{type:String,required:!0},description:{type:String,required:!1,default:null},icon:{type:Object,required:!1,default:null},link:{type:Object,required:!1,default:null},cacheKey:{type:String,required:!1,default:null}}},o=(n(444),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["hero",t.light&&"hero--light"]},[n("div",{staticClass:"hero__header"},[t.icon?n("div",{staticClass:"hero__icon-wrapper"},[n("img",{staticClass:"hero__icon",attrs:{src:encodeURI(t.icon.src)+"?size=48x48",srcset:"\n          "+encodeURI(t.icon.src)+"?size=48x48 1x,\n          "+encodeURI(t.icon.src)+"?size=96x96 2x,\n          "+encodeURI(t.icon.src)+"?size=144x144 3x\n        ",alt:t.icon.alt,width:"48",height:"48"}})]):t._e(),t._v(" "),n("h1",{staticClass:"hero__title"},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t._v(" "),t.description?n("p",{staticClass:"hero__description"},[t._v("\n    "+t._s(t.description)+"\n    "),t.link?n("a",{staticClass:"hero__link",attrs:{href:t.link.url,target:"_blank",rel:"noopener nofollow"}},[t._v(t._s(t.link.text))]):t._e()]):t._e(),t._v(" "),this.$slots.description?[n("p",{staticClass:"hero__description"},[t._t("description")],2)]:t._e(),t._v(" "),n("div",{staticClass:"hero__buttons"},[t._t("buttons")],2)],2)}),[],!1,null,null,null);e.a=component.exports},403:function(t,e,n){},404:function(t,e,n){},405:function(t,e,n){"use strict";var r=n(128),o=(n(62),n(5),n(35),n(33),n(18),n(34),{name:"Pagination",serverCacheKey:function(t){return"".concat(t.light,":").concat(t.page,":").concat(t.totalPages,":").concat(t.lang)},props:{light:{type:Boolean,required:!1,default:!1},page:{type:Number,required:!0},totalPages:{type:Number,required:!0},lang:{type:String,required:!0}},computed:{className:function(){var t="pagination";return this.light&&(t+=" pagination--light"),t},prevPage:function(){return this.page<=2?void 0:this.page-1},nextPage:function(){return Math.min(this.page+1,this.totalPages)},getPages:function(){var t=this,e=[];if(this.totalPages<=0)e=[];else if(this.page<5){var n=this.totalPages>4?4:this.totalPages-1;n&&(e=Object(r.a)(Array.from(Array(n),(function(t,e){return e+2}))))}else this.totalPages-3<=this.page?(e=Object(r.a)(Array.from(Array(4),(function(e,n){return t.totalPages-n-1})).reverse()),1===Object(r.a)(e).shift()&&e.shift()):(e=[this.page-1,this.page],this.page+1<this.totalPages&&e.push(this.page+1));return e},isSecond:function(){return this.getPages.length>1&&this.getPages[0]-1!=1},isPenultimate:function(){var t=this.getPages.length-1;return this.getPages.length>1&&this.getPages[t]+1<this.totalPages},query:function(){return this.$route.query}}}),c=(n(412),n(8)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:["pagination",t.light?"pagination--light":""]},[r("div",{staticClass:"pagination__buttons"},[r("nuxt-link",{class:["pagination__button",t.page>1?"":"pagination__button--disabled"],attrs:{to:{query:Object.assign({},t.query,{page:t.prevPage})},"no-prefetch":""}},[t.page>1?[r("img",{staticClass:"pagination__img",attrs:{src:n(393),alt:t.$t("component.pagination.prev"),width:"8",height:"13"}})]:[r("img",{staticClass:"pagination__img",attrs:{src:n(394),alt:t.$t("component.pagination.prev"),width:"8",height:"13"}})],t._v("\n      "+t._s(t.$t("component.pagination.prev"))+"\n    ")],2)],1),t._v(" "),r("div",{staticClass:"pagination__list"},[r("nuxt-link",{class:["pagination__page",1===t.page?"pagination__page--selected":""],attrs:{to:{query:Object.assign({},t.query,{page:1})},"no-prefetch":""}},[r("span",[t._v("1")])]),t._v(" "),t.isSecond?r("div",{staticClass:"pagination__dots"},[t._v("...")]):t._e(),t._v(" "),t._l(t.getPages,(function(e){return[r("nuxt-link",{key:e,class:["pagination__page",t.page===e?"pagination__page--selected":""],attrs:{to:{query:Object.assign({},t.query,{page:e})},"no-prefetch":""}},[r("span",[t._v(t._s(e))])])]})),t._v(" "),t.isPenultimate?r("div",{staticClass:"pagination__dots"},[t._v("...")]):t._e(),t._v(" "),t.totalPages>1&&[].concat(t.getPages).pop()!==t.totalPages?[r("nuxt-link",{class:["pagination__page",t.page===t.totalPages?"pagination__page--selected":""],attrs:{to:{query:Object.assign({},t.query,{page:t.totalPages})},"no-prefetch":""}},[r("span",[t._v(t._s(t.totalPages))])])]:t._e()],2),t._v(" "),r("div",{staticClass:"pagination__buttons"},[r("nuxt-link",{class:["pagination__button",t.page>=t.nextPage?"pagination__button--disabled":""],attrs:{to:{query:Object.assign({},t.query,{page:t.page>=t.nextPage?void 0:t.nextPage})}}},[t._v("\n      "+t._s(t.$t("component.pagination.next"))+"\n      "),t.page>=t.nextPage?[r("img",{staticClass:"pagination__img",attrs:{src:n(395),alt:t.$t("component.pagination.next"),width:"8",height:"13"}})]:[r("img",{staticClass:"pagination__img",attrs:{src:n(396),alt:t.$t("component.pagination.next"),width:"8",height:"13"}})]],2)],1),t._v(" "),r("div",{staticClass:"pagination__buttons--mobile"},[r("nuxt-link",{class:["pagination__button",t.page>1?"":"pagination__button--disabled"],attrs:{to:{query:Object.assign({},t.query,{page:t.prevPage})},"no-prefetch":""}},[t.page>1?[r("img",{staticClass:"pagination__img",attrs:{src:n(393),alt:t.$t("component.pagination.prev"),width:"8",height:"13"}})]:[r("img",{staticClass:"pagination__img",attrs:{src:n(394),alt:t.$t("component.pagination.prev"),width:"8",height:"13"}})],t._v("\n      "+t._s(t.$t("component.pagination.prev"))+"\n    ")],2),t._v(" "),r("nuxt-link",{class:["pagination__button",t.page>=t.nextPage?"pagination__button--disabled":""],attrs:{to:{query:Object.assign({},t.query,{page:t.page>=t.nextPage?void 0:t.nextPage})}}},[t._v("\n      "+t._s(t.$t("component.pagination.next"))+"\n      "),t.page>=t.nextPage?[r("img",{staticClass:"pagination__img",attrs:{src:n(395),alt:t.$t("component.pagination.next"),width:"8",height:"13"}})]:[r("img",{staticClass:"pagination__img",attrs:{src:n(396),alt:t.$t("component.pagination.next"),width:"8",height:"13"}})]],2)],1)])}),[],!1,null,null,null);e.a=component.exports},406:function(t,e,n){"use strict";var r=n(426),o={name:"Button",components:{NextSvg:n.n(r).a},serverCacheKey:function(t){return"".concat(t.content,":").concat(t.nuxt,":").concat(t.location,":").concat(t.theme)},props:{content:{type:String,required:!0},nuxt:{type:Boolean,required:!0},location:{type:[String,Object],required:!0},displayIcon:{type:Boolean,default:!0},theme:{type:String,required:!1,default:"blue"}},computed:{className:function(){var t="button";return this.theme&&(t+=" button--".concat(this.theme,"-theme")),t}}},c=(n(427),n(8)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.nuxt?n("nuxt-link",{class:t.className,attrs:{to:t.location}},[n("span",{staticClass:"button__content"},[t._v("\n    "+t._s(t.content)+"\n    "),t.displayIcon?[n("NextSvg",{staticClass:"button__next-icon"})]:t._e()],2)]):n("a",{class:t.className,attrs:{href:t.location,target:"_blank",rel:"noopener nofollow"}},[n("span",{staticClass:"button__content"},[t._v("\n    "+t._s(t.content)+"\n    "),t.displayIcon?[n("NextSvg",{staticClass:"button__next-icon"})]:t._e()],2)])}),[],!1,null,null,null);e.a=component.exports},407:function(t,e,n){"use strict";n(419)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},411:function(t,e,n){"use strict";n(407);var r=n(414),o=n.n(r),c=n(406),l={name:"ApiPromotion",serverCacheKey:function(t){return"".concat(t.light,":").concat(t.lang,":").concat(t.variable,":").concat(t.link)},components:{CoinrankingLogo:o.a,Button:c.a},props:{light:{type:Boolean,required:!1,default:!1},lang:{type:String,required:!0},variable:{type:String,required:!1,default:"cryptocurrency"},link:{type:String,required:!1,default:"https://developers.coinranking.com/api/documentation/"}},computed:{className:function(){var t="api-promotion";return this.light&&(t+=" api-promotion--light"),t}}},h=(n(415),n(8)),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className},[n("div",{staticClass:"api-promotion__left"},[n("div",{staticClass:"api-promotion__logo"},[n("CoinrankingLogo"),t._v("\n      Coinranking API\n    ")],1)]),t._v(" "),n("div",{staticClass:"api-promotion__content"},[n("div",{staticClass:"api-promotion__payoff"},[t._v("\n      "+t._s(t.$t("component.apiPromotion.payoff",{variable:t.variable}))+"\n    ")]),t._v(" "),n("div",{staticClass:"api-promotion__cta"},[n("Button",{attrs:{"display-icon":!0,content:t.$t("component.apiPromotion.viewApiDocs"),nuxt:!1,location:t.link,theme:"green"}}),t._v(" "),n("Button",{attrs:{nuxt:!1,location:"https://coinranking.com/page/key-generator","display-icon":!0,content:t.$t("component.apiPromotion.generateApiKey"),theme:t.light?"dark":"white"}})],1)])])}),[],!1,null,null,null);e.a=component.exports},412:function(t,e,n){"use strict";n(397)},413:function(t,e,n){"use strict";n(398)},414:function(t,e,n){n(7),n(5),n(6),n(9),n(10);var r=n(13),o=n(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,h=void 0===l?[]:l,f=data.class,_=data.staticClass,style=data.style,d=data.staticStyle,m=data.attrs,v=void 0===m?{}:m,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,_],style:[style,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},v)},y),h.concat([n("g",{attrs:{fill:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"18"}},[n("path",{attrs:{d:"m9 9h22v22",opacity:".35"}}),n("path",{attrs:{d:"M31,9,9,31"}})])]))}}},415:function(t,e,n){"use strict";n(399)},416:function(t,e,n){"use strict";var r={name:"Tabs",serverCacheKey:function(t){return"".concat(t.light,":").concat(JSON.stringify(t.links))},props:{light:{type:Boolean,required:!1,default:!1},links:{type:Array,required:!0}},computed:{className:function(){var t="tabs";return this.light&&(t+=" tabs--light"),t}}},o=(n(413),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className},[n("div",{staticClass:"tabs__scrollable"},[n("ul",{staticClass:"tabs__list"},t._l(t.links,(function(link){return n("li",{key:link.url,staticClass:"tabs__item"},[link.url?n("nuxt-link",{class:["tabs__tab","tabs__link",link.selected?"tabs__link--selected":""],attrs:{to:link.url}},[n("span",{staticClass:"tabs__text"},[t._v("\n            "+t._s(link.label)+"\n          ")]),t._v(" "),link.badge?n("span",{staticClass:"tabs__badge"},[t._v("\n            "+t._s(link.badge)+"\n          ")]):t._e()]):n("span",{staticClass:"tabs__tab"},[n("span",{staticClass:"tabs__text"},[t._v("\n            "+t._s(link.label)+"\n          ")]),t._v(" "),link.badge?n("span",{staticClass:"tabs__badge"},[t._v("\n            "+t._s(link.badge)+"\n          ")]):t._e()])],1)})),0)]),t._v(" "),n("span",{staticClass:"tabs__bottom-border"}),t._v(" "),n("span",{staticClass:"tabs__left-gradient"}),t._v(" "),n("span",{staticClass:"tabs__right-gradient"})])}),[],!1,null,null,null);e.a=component.exports},419:function(t,e,n){var r=n(16),o=n(24),c=n(50),l=/"/g,h=function(t,e,n,r){var o=String(c(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+String(r).replace(l,"&quot;")+'"'),h+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(h),r(r.P+r.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},420:function(t,e,n){},421:function(t,e,n){"use strict";n(403)},426:function(t,e,n){n(7),n(5),n(6),n(9),n(10);var r=n(13),o=n(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,h=void 0===l?[]:l,f=data.class,_=data.staticClass,style=data.style,d=data.staticStyle,m=data.attrs,v=void 0===m?{}:m,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,_],style:[style,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"8",height:"13",viewBox:"0 0 8 13"},v)},y),h.concat([n("path",{attrs:{fill:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"2",d:"M1.5 12 7 6.5 1.5 1"}})]))}}},427:function(t,e,n){"use strict";n(404)},428:function(t,e,n){},434:function(t,e,n){"use strict";n(100);var r=n(132),o=n.n(r),c=n(133),l=n.n(c),h={name:"SearchBox",serverCacheKey:function(t){return"".concat(t.light,":").concat(t.placeholder,":").concat(t.initialValue)},components:{MagnifyingGlassSvg:o.a,CrossSvg:l.a},props:{light:{type:Boolean,required:!1,default:!1},placeholder:{type:String,required:!0},initialValue:{type:String,required:!1,default:""}},data:function(){return{search:this.initialValue,submitSearch:this.initialValue||null,hasFocus:!1}},computed:{className:function(){var t="searchbox";return this.light&&(t+=" searchbox--light"),this.hasFocus&&(t+=" searchbox--focus"),t}},methods:{blur:function(){this.$refs.input.blur()},focus:function(){this.$refs.input.focus()},submit:function(){this.submitSearch!==this.search&&(this.submitSearch=this.search||null,this.$emit("submit",this.search),this.blur())},clear:function(){this.submitSearch=null,this.search="",this.$emit("submit",this.search),this.blur()},onClickIcon:function(){this.focus()},onBlur:function(){this.hasFocus=!1},onFocus:function(){this.hasFocus=!0},onChange:function(t){this.search=t.target.value},onSubmit:function(t){t.preventDefault(),t.stopPropagation(),this.submit()},onClickClear:function(t){t.preventDefault(),t.stopPropagation(),this.clear()}}},f=(n(450),n(8)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{method:"get"},on:{submit:t.onSubmit}},[n("div",{class:t.className},[n("div",{staticClass:"searchbox__wrapper"},[n("div",{staticClass:"searchbox__icon",on:{click:t.onClickIcon}},[t._t("icon")],2),t._v(" "),n("input",{ref:"input",staticClass:"searchbox__input",attrs:{name:"search",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",placeholder:t.placeholder,type:"search"},domProps:{value:t.search},on:{input:t.onChange,change:t.onChange,blur:t.onBlur,focus:t.onFocus}}),t._v(" "),t.submitSearch===t.search?n("button",{staticClass:"searchbox__button searchbox__button--clear",attrs:{type:"button"},on:{click:t.onClickClear}},[n("CrossSvg",{class:["searchbox__action",{"searchbox__action--light":!0===t.light}],attrs:{width:"15",height:"15"}})],1):n("button",{staticClass:"searchbox__button",attrs:{type:"submit"}},[n("MagnifyingGlassSvg",{class:["searchbox__action",{"searchbox__action--light":!0===t.light}],attrs:{width:"19",height:"19"}})],1)])])])}),[],!1,null,null,null);e.a=component.exports},444:function(t,e,n){"use strict";n(420)},450:function(t,e,n){"use strict";n(428)},468:function(t,e,n){"use strict";n(15);var r={name:"NftsTabs",components:{Tabs:n(416).a},props:{light:{type:Boolean,required:!0}},computed:{routeName:function(){return this.$route.name},links:function(){return[{url:this.localePath("nfts"),label:this.$t("component.navigation.overview"),selected:this.routeName==="nfts___".concat(this.$i18n.locale)},{url:this.localePath("nfts-tokens"),label:this.$t("component.navigation.allTokens"),selected:this.routeName==="nfts-tokens___".concat(this.$i18n.locale)},{url:this.localePath("dapps"),label:this.$t("component.navigation.dapps"),selected:this.routeName==="dapps___".concat(this.$i18n.locale)}]}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Tabs",{attrs:{light:t.light,links:t.links}})}),[],!1,null,null,null);e.a=component.exports},516:function(t,e,n){},603:function(t,e,n){"use strict";n(516)},692:function(t,e,n){"use strict";n.r(e);n(7),n(5),n(6),n(9),n(10);var r=n(1),o=n(12),c=(n(22),n(100),n(63),n(15),n(62),n(38)),l=n(405),h=n(434),f=n(388),_=n(475),d=n(392),m=n(78),v=n(391),y=n(401),k=n(400),x=n(472),P=n.n(x),C=n(468),O=n(411);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={components:{SelectList:n(146).a,NftsTabs:C.a,Breadcrumbs:f.a,Pagination:l.a,SearchBox:h.a,Leaderboard:d.a,Hero:k.a,Nfts:P.a,Nft:_.a,ApiPromotion:O.a},mixins:[y.a],layout:function(t){return t.store.getters["preferences/theme"]},head:function(){var t={};this.orderBy&&(t["order-by"]=this.orderBy),this.search&&(t.search=this.search);var e=Object(v.a)(this.base),n=Object(v.c)(this.base,this.page,t),r=Object(v.b)(this.base,this.page,this.totalPages,t),link=[e];return n&&link.push(n),r&&link.push(r),{title:this.metaTitle,meta:[{hid:"description",name:"description",content:this.metaDescription},{hid:"og:title",name:"og:title",content:this.metaTitle},{hid:"og:description",name:"og:description",content:this.metaDescription},{hid:"og:url",name:"og:url",content:e.href}],link:link}},watchQuery:["page","order-by"],data:function(){return{page:1,total:0,volume:0,exchanges:[],search:"",orderBy:"latest-prices"}},computed:$($({},Object(c.b)({currency:"preferences/currency",theme:"preferences/theme"})),{},{base:function(){var path=this.localePath("nfts-tokens");return"".concat("https://coinranking.com").concat(path)},metaTitle:function(){var t={page:this.page};switch(this.orderBy){default:case"latest-prices":return this.page>1?this.$t("nfts._tokens._meta.latestPricesTitlePageX",t):this.$t("nfts._tokens._meta.latestPricesTitle",t);case"most-expensive":return this.page>1?this.$t("nfts._tokens._meta.mostExpensiveTitlePageX",t):this.$t("nfts._tokens._meta.mostExpensiveTitle",t);case"new-tokens":return this.page>1?this.$t("nfts._tokens._meta.newTokensTitlePageX",t):this.$t("nfts._tokens._meta.newTokensTitle",t)}},metaDescription:function(){switch(this.orderBy){default:case"latest-prices":return this.$t("nfts._tokens._meta.latestPricesDescription");case"most-expensive":return this.$t("nfts._tokens._meta.mostExpensiveDescription");case"new-tokens":return this.$t("nfts._tokens._meta.newTokensDescription")}},breadcrumbName:function(){var t;switch(this.orderBy){default:case"latest-prices":t=this.$t("nfts._tokens.latestPrices");break;case"most-expensive":t=this.$t("nfts._tokens.mostExpensive");break;case"new-tokens":t=this.$t("nfts._tokens.newTokens")}return t},header:function(){switch(this.orderBy){default:case"latest-prices":return this.$t("nfts._tokens.latestPricesHeader");case"most-expensive":return this.$t("nfts._tokens.mostExpensiveHeader");case"new-tokens":return this.$t("nfts._tokens.newTokensHeader")}},sectionTitle:function(){switch(this.orderBy){default:case"latest-prices":return this.$t("nfts._tokens.latestPricesTitle");case"most-expensive":return this.$t("nfts._tokens.mostExpensiveTitle");case"new-tokens":return this.$t("nfts._tokens.newTokensTitle")}},pages:function(){return[{name:this.$t("nft.nfts"),path:this.localePath("nfts")},{name:this.$t("nfts._tokens.tokens"),path:this.localePath("nfts-tokens")},{name:this.breadcrumbName,path:this.localePath({name:"nfts-tokens",query:{"order-by":this.orderBy}})}]},light:function(){return"dark"!==this.theme},orderByOptions:function(){return[{id:"latest-prices",value:"latest-prices",name:this.$t("nfts._tokens.latestPrices")},{id:"most-expensive",value:"most-expensive",name:this.$t("nfts._tokens.mostExpensive")},{id:"new-tokens",value:"new-tokens",name:this.$t("nfts._tokens.newTokens")}]},orderBySelected:function(){var t=this;return this.orderByOptions.find((function(option){return option.value===t.orderBy}))},totalPages:function(){return Math.min(Math.ceil(this.total/18),10)}}),watch:{"$route.name":function(){this.routeName=this.$route.name},currency:function(){this.refreshNfts(!0)},theme:function(t){this.$root.setLayout(t)},search:function(){this.refreshNfts(!0)}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,h,f,_,d,v,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.error,r=t.$axios,o=t.store,c=t.query,l=t.route,e.prev=1,h=1,c.page&&(h=Number(c.page)),e.t0=c["order-by"],e.next="latest-prices"===e.t0?7:"most-expensive"===e.t0?9:"new-tokens"===e.t0?11:7;break;case 7:return f="auctionCreatedAt",e.abrupt("break",13);case 9:return f="priceInDollar",e.abrupt("break",13);case 11:return f="createdAt",e.abrupt("break",13);case 13:return e.next=15,Object(m.z)(r,o,!0,{page:h,orderBy:f,query:c.search});case 15:return _=e.sent,d=_.total,v=_.volume,y=_.nfts,e.abrupt("return",{total:d,nfts:y,page:h,orderBy:c["order-by"]||"latest-prices",volume:v,search:c.search,routeName:l.name});case 22:if(e.prev=22,e.t1=e.catch(1),!e.t1.response){e.next=27;break}if(404!==e.t1.response.status&&422!==e.t1.response.status){e.next=27;break}return e.abrupt("return",n({statusCode:404,message:"Not found"}));case 27:return e.abrupt("return",n({statusCode:500,message:e.t1.message}));case 28:case"end":return e.stop()}}),e,null,[[1,22]])})))()},mounted:function(){this.setRefreshNftsTimer()},beforeDestroy:function(){clearTimeout(this.refreshNftsTimeout)},methods:{onSearchSubmit:function(t){this.search=t,this.$router.push({path:this.$route.path,query:{search:t}})},changeOrderBy:function(option){this.$router.push({query:{"order-by":option.value}})},refreshNfts:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=e.orderBy,n.next="latest-prices"===n.t0?3:"most-expensive"===n.t0?5:"new-tokens"===n.t0?7:3;break;case 3:return r="auctionCreatedAt",n.abrupt("break",9);case 5:return r="priceInDollar",n.abrupt("break",9);case 7:return r="createdAt",n.abrupt("break",9);case 9:return n.next=11,Object(m.z)(e.$axios,e.$store,t,{page:e.page,orderBy:r,query:e.search});case 11:o=n.sent,c=o.nfts,l=o.volume,h=o.total,e.nfts=c,e.total=h,e.volume=l,e.setRefreshNftsTimer();case 19:case"end":return n.stop()}}),n)})))()},setRefreshNftsTimer:function(){var t=this;clearTimeout(this.refreshNftsTimeout),this.refreshNftsTimeout=setTimeout((function(){return t.refreshNfts(!1)}),6e4)}}},S=(n(603),n(8)),component=Object(S.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:["nfts-tokens",t.light?"nfts-tokens--light":""]},[n("LazyHydrate",{attrs:{never:""}},[n("Hero",{attrs:{title:t.page>1?t.$t("nfts._tokens.titlePageX",{page:t.page}):t.$t("nfts._tokens.title"),description:t.header,light:t.light}})],1),t._v(" "),n("LazyHydrate",{attrs:{"when-idle":""}},[n("NftsTabs",{attrs:{light:t.light}})],1),t._v(" "),n("div",{staticClass:"nfts-tokens__section"},[n("div",{staticClass:"nfts-tokens__section-head"},[n("h2",{staticClass:"nfts-tokens__title"},[t._v(t._s(t.sectionTitle))]),t._v(" "),n("div",{staticClass:"nfts-tokens__filters"},[n("div",{staticClass:"nfts-tokens__search-box"},[n("LazyHydrate",{attrs:{"when-idle":""}},[n("SearchBox",{attrs:{light:t.light,placeholder:t.$t("nfts._tokens.searchPlaceholder"),"initial-value":t.search},on:{submit:t.onSearchSubmit},scopedSlots:t._u([{key:"icon",fn:function(){return[n("Nfts")]},proxy:!0}])})],1)],1),t._v(" "),n("div",{staticClass:"nfts-tokens__order-by"},[n("SelectList",{attrs:{small:"",value:t.orderBySelected.name,theme:t.light?"standard-bordered":"dark-bordered",options:t.orderByOptions,lang:t.$i18n.locale,cachekey:"nfts-order-by:"+t.light+":"+t.orderBy},on:{change:t.changeOrderBy}})],1)])]),t._v(" "),0!==t.search&&0===t.nfts.length?n("div",{staticClass:"no-nfts"},[n("h2",{staticClass:"no-nfts__title"},[t._v("No results")]),t._v(" "),n("p",{staticClass:"no-nfts__paragraph"},[t._v("\n        We couldn't find a result matching "),n("b",[t._v(t._s(t.search)+".")]),n("br"),t._v("\n        Please try another search.\n      ")])]):n("div",{staticClass:"nfts-tokens__list"},t._l(t.nfts,(function(e){return n("Nft",{key:e.id,attrs:{nft:e,light:t.light}})})),1)]),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("Pagination",{attrs:{light:t.light,page:t.page,"total-pages":t.totalPages,lang:t.$i18n.locale}})],1),t._v(" "),n("Leaderboard",{attrs:{light:t.light}}),t._v(" "),n("LazyHydrate",{attrs:{never:""}},[n("ApiPromotion",{attrs:{light:t.light,lang:t.$i18n.locale,variable:"NFT",link:"https://developers.coinranking.com/api/documentation/nfts#get-nfts"}})],1),t._v(" "),n("Breadcrumbs",{attrs:{light:t.light,section:"bottom",pages:t.pages}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);