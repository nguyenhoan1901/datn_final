(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{393:function(t,e,n){t.exports=n.p+"b317ab02ac092c5d97ac159e0e6a8455.svg"},394:function(t,e,n){t.exports=n.p+"32c1c836dbf078819a93f4e02db36db1.svg"},395:function(t,e,n){t.exports=n.p+"a8f0fe8189796d2039ce3b6bb277fa50.svg"},396:function(t,e,n){t.exports=n.p+"9d19b5ce18afc93b811961ffe23fb469.svg"},397:function(t,e,n){},398:function(t,e,n){},401:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));n(7),n(5),n(6),n(9),n(10),n(12),n(429);n(250).resolve;var r={mounted:function(){}}}).call(this,"/")},405:function(t,e,n){"use strict";var r=n(128),o=(n(62),n(5),n(35),n(33),n(18),n(34),{name:"Pagination",serverCacheKey:function(t){return"".concat(t.light,":").concat(t.page,":").concat(t.totalPages,":").concat(t.lang)},props:{light:{type:Boolean,required:!1,default:!1},page:{type:Number,required:!0},totalPages:{type:Number,required:!0},lang:{type:String,required:!0}},computed:{className:function(){var t="pagination";return this.light&&(t+=" pagination--light"),t},prevPage:function(){return this.page<=2?void 0:this.page-1},nextPage:function(){return Math.min(this.page+1,this.totalPages)},getPages:function(){var t=this,e=[];if(this.totalPages<=0)e=[];else if(this.page<5){var n=this.totalPages>4?4:this.totalPages-1;n&&(e=Object(r.a)(Array.from(Array(n),(function(t,e){return e+2}))))}else this.totalPages-3<=this.page?(e=Object(r.a)(Array.from(Array(4),(function(e,n){return t.totalPages-n-1})).reverse()),1===Object(r.a)(e).shift()&&e.shift()):(e=[this.page-1,this.page],this.page+1<this.totalPages&&e.push(this.page+1));return e},isSecond:function(){return this.getPages.length>1&&this.getPages[0]-1!=1},isPenultimate:function(){var t=this.getPages.length-1;return this.getPages.length>1&&this.getPages[t]+1<this.totalPages},query:function(){return this.$route.query}}}),c=(n(412),n(8)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:["pagination",t.light?"pagination--light":""]},[r("div",{staticClass:"pagination__buttons"},[r("nuxt-link",{class:["pagination__button",t.page>1?"":"pagination__button--disabled"],attrs:{to:{query:Object.assign({},t.query,{page:t.prevPage})},"no-prefetch":""}},[t.page>1?[r("img",{staticClass:"pagination__img",attrs:{src:n(393),alt:t.$t("component.pagination.prev"),width:"8",height:"13"}})]:[r("img",{staticClass:"pagination__img",attrs:{src:n(394),alt:t.$t("component.pagination.prev"),width:"8",height:"13"}})],t._v("\n      "+t._s(t.$t("component.pagination.prev"))+"\n    ")],2)],1),t._v(" "),r("div",{staticClass:"pagination__list"},[r("nuxt-link",{class:["pagination__page",1===t.page?"pagination__page--selected":""],attrs:{to:{query:Object.assign({},t.query,{page:1})},"no-prefetch":""}},[r("span",[t._v("1")])]),t._v(" "),t.isSecond?r("div",{staticClass:"pagination__dots"},[t._v("...")]):t._e(),t._v(" "),t._l(t.getPages,(function(e){return[r("nuxt-link",{key:e,class:["pagination__page",t.page===e?"pagination__page--selected":""],attrs:{to:{query:Object.assign({},t.query,{page:e})},"no-prefetch":""}},[r("span",[t._v(t._s(e))])])]})),t._v(" "),t.isPenultimate?r("div",{staticClass:"pagination__dots"},[t._v("...")]):t._e(),t._v(" "),t.totalPages>1&&[].concat(t.getPages).pop()!==t.totalPages?[r("nuxt-link",{class:["pagination__page",t.page===t.totalPages?"pagination__page--selected":""],attrs:{to:{query:Object.assign({},t.query,{page:t.totalPages})},"no-prefetch":""}},[r("span",[t._v(t._s(t.totalPages))])])]:t._e()],2),t._v(" "),r("div",{staticClass:"pagination__buttons"},[r("nuxt-link",{class:["pagination__button",t.page>=t.nextPage?"pagination__button--disabled":""],attrs:{to:{query:Object.assign({},t.query,{page:t.page>=t.nextPage?void 0:t.nextPage})}}},[t._v("\n      "+t._s(t.$t("component.pagination.next"))+"\n      "),t.page>=t.nextPage?[r("img",{staticClass:"pagination__img",attrs:{src:n(395),alt:t.$t("component.pagination.next"),width:"8",height:"13"}})]:[r("img",{staticClass:"pagination__img",attrs:{src:n(396),alt:t.$t("component.pagination.next"),width:"8",height:"13"}})]],2)],1),t._v(" "),r("div",{staticClass:"pagination__buttons--mobile"},[r("nuxt-link",{class:["pagination__button",t.page>1?"":"pagination__button--disabled"],attrs:{to:{query:Object.assign({},t.query,{page:t.prevPage})},"no-prefetch":""}},[t.page>1?[r("img",{staticClass:"pagination__img",attrs:{src:n(393),alt:t.$t("component.pagination.prev"),width:"8",height:"13"}})]:[r("img",{staticClass:"pagination__img",attrs:{src:n(394),alt:t.$t("component.pagination.prev"),width:"8",height:"13"}})],t._v("\n      "+t._s(t.$t("component.pagination.prev"))+"\n    ")],2),t._v(" "),r("nuxt-link",{class:["pagination__button",t.page>=t.nextPage?"pagination__button--disabled":""],attrs:{to:{query:Object.assign({},t.query,{page:t.page>=t.nextPage?void 0:t.nextPage})}}},[t._v("\n      "+t._s(t.$t("component.pagination.next"))+"\n      "),t.page>=t.nextPage?[r("img",{staticClass:"pagination__img",attrs:{src:n(395),alt:t.$t("component.pagination.next"),width:"8",height:"13"}})]:[r("img",{staticClass:"pagination__img",attrs:{src:n(396),alt:t.$t("component.pagination.next"),width:"8",height:"13"}})]],2)],1)])}),[],!1,null,null,null);e.a=component.exports},410:function(t,e,n){},412:function(t,e,n){"use strict";n(397)},413:function(t,e,n){"use strict";n(398)},416:function(t,e,n){"use strict";var r={name:"Tabs",serverCacheKey:function(t){return"".concat(t.light,":").concat(JSON.stringify(t.links))},props:{light:{type:Boolean,required:!1,default:!1},links:{type:Array,required:!0}},computed:{className:function(){var t="tabs";return this.light&&(t+=" tabs--light"),t}}},o=(n(413),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className},[n("div",{staticClass:"tabs__scrollable"},[n("ul",{staticClass:"tabs__list"},t._l(t.links,(function(link){return n("li",{key:link.url,staticClass:"tabs__item"},[link.url?n("nuxt-link",{class:["tabs__tab","tabs__link",link.selected?"tabs__link--selected":""],attrs:{to:link.url}},[n("span",{staticClass:"tabs__text"},[t._v("\n            "+t._s(link.label)+"\n          ")]),t._v(" "),link.badge?n("span",{staticClass:"tabs__badge"},[t._v("\n            "+t._s(link.badge)+"\n          ")]):t._e()]):n("span",{staticClass:"tabs__tab"},[n("span",{staticClass:"tabs__text"},[t._v("\n            "+t._s(link.label)+"\n          ")]),t._v(" "),link.badge?n("span",{staticClass:"tabs__badge"},[t._v("\n            "+t._s(link.badge)+"\n          ")]):t._e()])],1)})),0)]),t._v(" "),n("span",{staticClass:"tabs__bottom-border"}),t._v(" "),n("span",{staticClass:"tabs__left-gradient"}),t._v(" "),n("span",{staticClass:"tabs__right-gradient"})])}),[],!1,null,null,null);e.a=component.exports},428:function(t,e,n){},429:function(t,e){e.DEFAULT_OPTIONS={debug:!1,ghostMode:!1,prebidTimeout:3e3,failsafeTimeout:3e3,adServerCurrency:"USD",granularityMultiplier:1,priceGranularity:"auto"}},434:function(t,e,n){"use strict";n(100);var r=n(132),o=n.n(r),c=n(133),l=n.n(c),_={name:"SearchBox",serverCacheKey:function(t){return"".concat(t.light,":").concat(t.placeholder,":").concat(t.initialValue)},components:{MagnifyingGlassSvg:o.a,CrossSvg:l.a},props:{light:{type:Boolean,required:!1,default:!1},placeholder:{type:String,required:!0},initialValue:{type:String,required:!1,default:""}},data:function(){return{search:this.initialValue,submitSearch:this.initialValue||null,hasFocus:!1}},computed:{className:function(){var t="searchbox";return this.light&&(t+=" searchbox--light"),this.hasFocus&&(t+=" searchbox--focus"),t}},methods:{blur:function(){this.$refs.input.blur()},focus:function(){this.$refs.input.focus()},submit:function(){this.submitSearch!==this.search&&(this.submitSearch=this.search||null,this.$emit("submit",this.search),this.blur())},clear:function(){this.submitSearch=null,this.search="",this.$emit("submit",this.search),this.blur()},onClickIcon:function(){this.focus()},onBlur:function(){this.hasFocus=!1},onFocus:function(){this.hasFocus=!0},onChange:function(t){this.search=t.target.value},onSubmit:function(t){t.preventDefault(),t.stopPropagation(),this.submit()},onClickClear:function(t){t.preventDefault(),t.stopPropagation(),this.clear()}}},h=(n(450),n(8)),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{method:"get"},on:{submit:t.onSubmit}},[n("div",{class:t.className},[n("div",{staticClass:"searchbox__wrapper"},[n("div",{staticClass:"searchbox__icon",on:{click:t.onClickIcon}},[t._t("icon")],2),t._v(" "),n("input",{ref:"input",staticClass:"searchbox__input",attrs:{name:"search",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",placeholder:t.placeholder,type:"search"},domProps:{value:t.search},on:{input:t.onChange,change:t.onChange,blur:t.onBlur,focus:t.onFocus}}),t._v(" "),t.submitSearch===t.search?n("button",{staticClass:"searchbox__button searchbox__button--clear",attrs:{type:"button"},on:{click:t.onClickClear}},[n("CrossSvg",{class:["searchbox__action",{"searchbox__action--light":!0===t.light}],attrs:{width:"15",height:"15"}})],1):n("button",{staticClass:"searchbox__button",attrs:{type:"submit"}},[n("MagnifyingGlassSvg",{class:["searchbox__action",{"searchbox__action--light":!0===t.light}],attrs:{width:"19",height:"19"}})],1)])])])}),[],!1,null,null,null);e.a=component.exports},435:function(t,e,n){n(7),n(5),n(6),n(9),n(10);var r=n(13),o=n(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,_=void 0===l?[]:l,h=data.class,d=data.staticClass,style=data.style,f=data.staticStyle,v=data.attrs,m=void 0===v?{}:v,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,d],style:[style,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"18",height:"24",viewBox:"0 0 18 24",stroke:"#126bff"},m)},y),_.concat([n("g",{attrs:{fill:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M17,15a8.1,8.1,0,0,1-8,8,8.1,8.1,0,0,1-8-8C1,10,9,1,9,1S17,10,17,15Z"}}),n("path",{attrs:{d:"M13,15.5a3.64,3.64,0,0,1-3,3"}})])]))}}},436:function(t,e,n){"use strict";var r={name:"Abbr",serverCacheKey:function(t){return"".concat(t.content,":").concat(t.title)},props:{title:{type:String,required:!0},content:{type:String,required:!0}},data:function(){return{isOpen:!1}},computed:{clickable:function(){return this.title!==this.content},classname:function(){return this.clickable?"abbr abbr--clickable":"abbr"}},methods:{toggle:function(){this.clickable&&(this.isOpen=!this.isOpen)}}},o=(n(437),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("abbr",{class:t.classname,attrs:{title:t.title},on:{click:t.toggle}},[t.isOpen?n("span",[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.isOpen?t._e():n("span",[t._v("\n    "+t._s(t.content)+"\n  ")])])}),[],!1,null,null,null);e.a=component.exports},437:function(t,e,n){"use strict";n(410)},438:function(t,e,n){"use strict";var r=n(436),o=n(449),c=n.n(o),l=n(452),_=n.n(l),h={name:"StatsList",components:{Abbr:r.a,NextSvg:c.a,AlertSvg:_.a},serverCacheKey:function(t){return"".concat(t.lang,":").concat(t.light,":").concat(JSON.stringify(t.items),":").concat(JSON.stringify(t.currency))},props:{light:{type:Boolean,required:!1,default:!1},lang:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},currency:{type:Object,required:!0},moreStatsLink:{type:String,required:!1,default:null}},computed:{className:function(){var t="stats";return this.light&&(t+=" stats--light"),t}}},d=(n(456),n(8)),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className},[n("div",{staticClass:"stats__top"},[n("h2",{staticClass:"stats__header"},[t._v(t._s(t.title))]),t._v(" "),t.description?n("p",{staticClass:"stats__description"},[t._v(t._s(t.description))]):t._e(),t._v(" "),t.moreStatsLink?n("nuxt-link",{staticClass:"stats__button",attrs:{to:t.moreStatsLink}},[t._v("\n      "+t._s(t.$t("component.stats.moreStats"))+"\n      "),n("NextSvg",{staticClass:"stats__button-arrow"})],1):t._e()],1),t._v(" "),n("table",{staticClass:"stats__list"},[n("tbody",t._l(t.items,(function(e){return n("tr",{key:e.label,staticClass:"stats__item"},[n("td",{staticClass:"stats__icon"},[n(e.icon,{tag:"component"})],1),t._v(" "),n("th",{staticClass:"stats__label"},[t._v("\n          "+t._s(e.label)+"\n        ")]),t._v(" "),n("td",{staticClass:"stats__value"},[!0===e.percentage?[t._v("\n            "+t._s(t.$humanNumber(e.value,2))+"%\n          ")]:!0!==e.currency?[isNaN(e.value)?[t._v("\n              "+t._s(e.value)+"\n            ")]:[t._v("\n              "+t._s(t.$humanNumber(e.value,0))+"\n            ")]]:[e.btc?[n("Abbr",{attrs:{title:t.$humanNumber(e.value,"?",!1),content:t.$humanNumber(e.value)}}),t._v("BTC\n            ")]:[t.currency.sign?[t._v("\n                "+t._s(t.currency.sign)+"\n              ")]:t._e(),t._v(" "),n("Abbr",{attrs:{title:t.$humanNumber(e.value,e.round&&e.value>=1e3?0:"?",!1),content:t.$humanNumber(e.value,e.round&&e.value>=1e3&&e.value<1e6?0:"?")}}),t._v(" "),t.currency.sign?t._e():[t._v("\n                "+t._s(t.currency.symbol)+"\n              ")]]]],2),t._v(" "),e.valueAddendum?n("td",{staticClass:"stats__value-addendum",class:{"stats__value-addendum--warning":e.valueAddendum.warning}},[e.valueAddendum.url?[n("a",{staticClass:"stats__value-addendum-link",attrs:{href:e.valueAddendum.url,target:"_blank",rel:"noopener nofollow"}},[e.valueAddendum.warning?n("AlertSvg"):t._e(),t._v(t._s(e.valueAddendum.text)+"\n            ")],1)]:[e.valueAddendum.warning?n("AlertSvg"):t._e(),t._v(t._s(e.valueAddendum.text)+"\n          ")]],2):t._e()])})),0)])])}),[],!1,null,null,null);e.a=component.exports},440:function(t,e,n){},449:function(t,e,n){n(7),n(5),n(6),n(9),n(10);var r=n(13),o=n(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,_=void 0===l?[]:l,h=data.class,d=data.staticClass,style=data.style,f=data.staticStyle,v=data.attrs,m=void 0===v?{}:v,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,d],style:[style,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"8",height:"13",viewBox:"0 0 8 13"},m)},y),_.concat([n("path",{attrs:{fill:"none",stroke:"#fff","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"2",d:"M1.5 12 7 6.5 1.5 1"}})]))}}},450:function(t,e,n){"use strict";n(428)},452:function(t,e,n){n(7),n(5),n(6),n(9),n(10);var r=n(13),o=n(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,_=void 0===l?[]:l,h=data.class,d=data.staticClass,style=data.style,f=data.staticStyle,v=data.attrs,m=void 0===v?{}:v,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,d],style:[style,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"15",viewBox:"0 0 16 15"},m)},y),_.concat([n("g",{attrs:{fill:"#ffb412",stroke:"#ffb412","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M8.86,1.5l6,10.45A1.37,1.37,0,0,1,13.63,14H2.37A1.37,1.37,0,0,1,1.18,12l6-10.45A1,1,0,0,1,8.86,1.5Z",fill:"none"}}),n("path",{attrs:{d:"m8 7l0 1",fill:"none"}}),n("circle",{attrs:{cx:"8",cy:"11",r:"1",stroke:"none"}})])]))}}},453:function(t,e,n){"use strict";var r={name:"DoubleBlockHolder",props:{highlightFirstBlock:{type:Boolean,required:!1,default:!1}}},o=(n(480),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"double-block-holder"},[n("div",{staticClass:"double-block-holder__block-wrapper"},[n("div",{class:["double-block-holder__block","double-block-holder__block--first",{"double-block-holder__block--large":t.highlightFirstBlock}]},[t._t("first")],2),t._v(" "),n("div",{class:["double-block-holder__block","double-block-holder__block--second",{"double-block-holder__block--small":t.highlightFirstBlock}]},[t._t("second")],2)])])}),[],!1,null,null,null);e.a=component.exports},455:function(t,e,n){},456:function(t,e,n){"use strict";n(440)},457:function(t,e,n){},474:function(t,e,n){"use strict";n(26);var r=n(453),o=n(438),c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sc__icon-container"},[r("div",{staticClass:"sc__blue-circle"}),t._v(" "),r("img",{staticClass:"sc__coinranking-icon",attrs:{src:n(482),alt:""}}),t._v(" "),r("div",{staticClass:"sc__white-circle"}),t._v(" "),r("img",{staticClass:"sc__telegram-icon",attrs:{src:n(483),alt:""}})])}],l={name:"SponsoredContent",serverCacheKey:function(t){return"".concat(t.lang,":").concat(t.light)},props:{light:{type:Boolean,required:!1,default:!1},lang:{type:String,required:!0}},computed:{className:function(){var t="sc";return this.light&&(t+=" sc--light"),t}},methods:{onClick:function(t){this.$gtag.event("click",{event_category:"Sponsored content button",event_label:t.target.href})}}},_=(n(484),n(8)),h=Object(_.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.className},[t._m(0),t._v(" "),r("h2",{staticClass:"sc__header",domProps:{innerHTML:t._s(t.$t("component.sponsoredContent.addCoinrankingToTelegram"))}}),t._v(" "),r("p",{staticClass:"sc__text",domProps:{innerHTML:t._s(t.$t("component.sponsoredContent.botDescription"))}}),t._v(" "),r("a",{staticClass:"sc__button",attrs:{href:"https://t.me/coinrankingofficialbot",target:"_blank",rel:"noopener nofollow"},on:{click:t.onClick}},[r("img",{attrs:{src:n(481),alt:""}}),t._v("\n    "+t._s(t.$t("component.sponsoredContent.addBot"))+"\n  ")])])}),c,!1,null,null,null).exports,d={name:"Stats",components:{DoubleBlockHolder:r.a,StatsList:o.a,SponsoredContent:h},serverCacheKey:function(t){return"".concat(t.lang,":").concat(t.light,":").concat(t.items.map((function(t){return t.label})),":").concat(JSON.stringify(t.currency))},props:{light:{type:Boolean,required:!1,default:!1},lang:{type:String,required:!0},title:{type:String,required:!0},items:{type:Array,required:!0},currency:{type:Object,required:!0},description:{type:String,required:!1,default:null}}},f=Object(_.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DoubleBlockHolder",{scopedSlots:t._u([{key:"first",fn:function(){return[n("StatsList",{attrs:{light:t.light,items:t.items,lang:t.lang,title:t.title,currency:t.currency,"more-stats-link":t.localePath("overview"),description:t.description}})]},proxy:!0},{key:"second",fn:function(){return[n("SponsoredContent",{attrs:{light:t.light,lang:t.lang}})]},proxy:!0}])})}),[],!1,null,null,null);e.a=f.exports},480:function(t,e,n){"use strict";n(455)},481:function(t,e,n){t.exports=n.p+"11c62045736e58ff3c8961d22122a64a.svg"},482:function(t,e,n){t.exports=n.p+"500d1c25cffc6799ad34a11f2fd02fa3.svg"},483:function(t,e,n){t.exports=n.p+"7b6357f552e98ad5c283654a6f1736ba.svg"},484:function(t,e,n){"use strict";n(457)},565:function(t,e,n){"use strict";n(15);var r={name:"ExchangesTabs",components:{Tabs:n(416).a},props:{light:{type:Boolean,required:!0}},computed:{routeName:function(){return this.$route.name},links:function(){return[{url:this.localePath("exchanges"),label:this.$t("component.navigation.exchanges"),selected:this.routeName==="exchanges___".concat(this.$i18n.locale)},{url:this.localePath("markets"),label:this.$t("component.navigation.markets"),selected:this.routeName==="markets___".concat(this.$i18n.locale)}]}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Tabs",{attrs:{light:t.light,links:t.links}})}),[],!1,null,null,null);e.a=component.exports}}]);