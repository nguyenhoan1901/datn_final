(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{467:function(e,t,n){},477:function(e,t,n){"use strict";n(26),n(15);var r=n(137),o={name:"LinkList",serverCacheKey:function(e){return"".concat(e.light,":").concat(e.lang,":").concat(JSON.stringify(e.links))},computed:{adjustedLinks:function(){var e=this;return this.links.map((function(link){return{name:link.name,type:e.getFormattedType(link.type),url:link.url,icon:function(){return n(491)("./".concat(link.type,".svg")).catch((function(){return n.e(8).then(n.t.bind(null,540,7))}))}}}))}},props:{light:{type:Boolean,required:!1,default:!1},links:{type:Array,required:!0},lang:{type:String,required:!0}},methods:{clickLink:function(e,t){e.preventDefault(),e.stopPropagation(),window.open(t,"_blank","noopener")},getFormattedType:function(e){switch(e){case"explorer":return"Block explorer";case"github":return"GitHub";case"line-messenger":return"LINE";case"linkedin":return"LinkedIn";case"qq":return"QQ";case"sina-weibo":return"Sina Weibo";case"vkontakte":return"VKontakte";case"website":return this.$t("component.linkList.website");case"wechat":return"WeChat";case"youtube":return"YouTube";default:return Object(r.a)(e)}}}},l=(n(492),n(8)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{class:["link-list",{"link-list--light":e.light}]},[n("tbody",e._l(e.adjustedLinks,(function(link){return n("tr",{key:link.url,staticClass:"link-list__link",on:{click:function(t){return e.clickLink(t,link.url)}}},[n("td",{staticClass:"link-list__icon"},[n(link.icon,{tag:"component"})],1),e._v(" "),n("th",{staticClass:"link-list__type"},[e._v("\n        "+e._s(link.type)+"\n      ")]),e._v(" "),n("td",{staticClass:"link-list__name"},[link.name?[e._v(e._s(link.name))]:[e._v(e._s(e._f("baseDomain")(link.url)))]],2)])})),0)])}),[],!1,null,null,null);t.a=component.exports},491:function(e,t,n){var map={"./bitcointalk.svg":[541,51],"./discord.svg":[542,52],"./disqus-blue.svg":[543,53],"./etoro.svg":[544,54],"./explorer.svg":[545,55],"./facebook-blue.svg":[546,56],"./facebook.svg":[138],"./github-blue.svg":[547,57],"./github.svg":[139],"./indacoin.svg":[548,58],"./instagram-blue.svg":[549,59],"./instagram.svg":[140],"./line-messenger.svg":[550,60],"./linkedin-blue.svg":[551,61],"./linkedin.svg":[141],"./medium.svg":[552,62],"./qq.svg":[553,63],"./quora.svg":[554,64],"./reddit-blue.svg":[555,65],"./reddit.svg":[142],"./sina-weibo.svg":[556,66],"./telegram-blue.svg":[557,67],"./telegram.svg":[143],"./twitch.svg":[558,68],"./twitter-blue.svg":[559,69],"./twitter.svg":[144],"./vkontakte.svg":[560,70],"./website.svg":[540,8],"./wechat.svg":[561,71],"./wordpress-blue.svg":[562,72],"./wordpress.svg":[145],"./youtube.svg":[563,73]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=491,e.exports=r},492:function(e,t,n){"use strict";n(467)},530:function(e,t,n){},624:function(e,t,n){"use strict";n(530)},696:function(e,t,n){"use strict";n.r(t);var r=n(1),o=(n(22),n(15),n(78)),l=n(475),v=n(477),c=n(392),d=n(401),_=n(449),m=n.n(_),h=n(406),w=n(391),f=n(438),k=n(564),y=n(435),C=n.n(y),O=n(472),x=n.n(O),$={components:{NftVolumeChart:k.a,StatsList:f.a,LinkList:v.a,Nft:l.a,Leaderboard:c.a,NextSvg:m.a,Button:h.a},mixins:[d.a],scrollToTop:!0,props:{light:{type:Boolean,required:!0},dapp:{type:Object,required:!0}},head:function(){var path=this.localePath({name:"dapp-slug",params:{slug:this.dapp.slug}}),base="".concat("https://coinranking.com").concat(path),e=Object(w.a)(base),link=[e];return{title:this.$t("dappOverview._meta.title",{name:this.dapp.name}),meta:[{hid:"description",name:"description",content:this.$t("dappOverview._meta.description",{name:this.dapp.name})},{hid:"og:title",name:"og:title",content:this.$t("dappOverview._meta.title",{name:this.dapp.name})},{hid:"og:description",name:"og:description",content:this.$t("dappOverview._meta.description",{name:this.dapp.name})},{hid:"og:url",name:"og:url",content:e.href},{hid:"og_image",name:"og:image",property:"og:image",content:"https://cdn.coinranking.com/dapp-image/"+this.dapp.slug}],link:link}},data:function(){return{dappVolumeHistory:[]}},computed:{items:function(){return[{label:this.$t("dappOverview.tradingVolume30Days"),currency:!0,value:this.dollarTradingVolumeLastThirtyDays,icon:C.a},{label:this.$t("dappOverview.nfts"),value:this.dapp.numberOfNfts,icon:x.a}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l,v,c,d,_,m,h,w,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.error,r=e.route,l=e.$axios,v=e.store,c=e.params,t.prev=1,d=c.slug,t.next=5,Object(o.j)(l,v,!0,d);case 5:return _=t.sent,m=_.dollarTradingVolumeLastThirtyDays,h=_.mostExpensiveNfts,w=_.mostExpensiveFirstSeen,f=_.latestNfts,t.abrupt("return",{routeName:r.name,dappSlug:d,dollarTradingVolumeLastThirtyDays:m,mostExpensiveNfts:h,mostExpensiveFirstSeen:1e3*w,latestNfts:f});case 13:if(t.prev=13,t.t0=t.catch(1),!t.t0.response){t.next=18;break}if(404!==t.t0.response.status&&422!==t.t0.response.status){t.next=18;break}return t.abrupt("return",n({statusCode:404,message:"Not found"}));case 18:return t.abrupt("return",n({statusCode:500,message:t.t0.message}));case 19:case"end":return t.stop()}}),t,null,[[1,13]])})))()},methods:{refreshDappVolumeHistory:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(o.y)(t.$axios,t.$store,!0,e,t.dapp.slug);case 3:r=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),r=[];case 9:t.dappVolumeHistory=r;case 10:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}},L=(n(624),n(8)),component=Object(L.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["dapp-overview",{"dapp-overview--light":e.light}]},[n("div",{staticClass:"dapp-overview__section dapp-overview__section--grid"},[n("StatsList",{attrs:{light:e.light,items:e.items,lang:e.$i18n.locale,title:e.$t("dappOverview.statistics"),currency:{sign:"$"},description:e.$t("dappOverview.statisticsDescription",{name:e.dapp.name})}}),e._v(" "),n("div",[n("h2",{staticClass:"dapp-overview__subtitle dapp-overview__subtitle--chart"},[e._v("\n        "+e._s(e.$t("dappOverview.dappTradingVolume"))+"\n      ")]),e._v(" "),n("p",{staticClass:"dapp-overview__chart-description"},[e._v("\n        "+e._s(e.$t("dappOverview.dappTradingVolumeDescription",{name:e.dapp.name}))+"\n      ")]),e._v(" "),n("NftVolumeChart",{attrs:{lang:e.$i18n.locale,light:e.light,history:e.dappVolumeHistory},on:{"timeperiod-change":e.refreshDappVolumeHistory}})],1)],1),e._v(" "),n("div",{staticClass:"dapp-overview__section dapp-overview__section--grid"},[n("div",[n("h2",{staticClass:"dapp-overview__subtitle"},[e._v("\n        "+e._s(e.$t("dappOverview.aboutTitle",{name:e.dapp.name}))+"\n      ")]),e._v(" "),n("div",{staticClass:"dapp-overview__description",domProps:{innerHTML:e._s(e.dapp.fullDescription)}}),e._v(" "),n("Button",{attrs:{content:e.$t("dappOverview.tokens"),nuxt:!0,location:e.localePath({name:"dapp-slug-tokens",params:{slug:e.dapp.slug}})}})],1),e._v(" "),n("div",[n("h2",{staticClass:"dapp-overview__subtitle"},[e._v("\n        "+e._s(e.$t("dappOverview.linksTitle"))+"\n      ")]),e._v(" "),n("LinkList",{attrs:{lang:e.$i18n.locale,links:e.dapp.links,light:e.light}})],1)]),e._v(" "),n("div",{staticClass:"dapp-overview__section"},[n("div",{staticClass:"dapp-overview__section-head"},[n("h2",{staticClass:"dapp-overview__subtitle dapp-overview__subtitle--no-margin"},[e._v("\n        "+e._s(e.$t("dappOverview.mostExpensiveTitle",{name:e.dapp.name}))+"\n        "),e.mostExpensiveFirstSeen?n("div",{staticClass:"dapp-overview__since"},[e._v("\n          "+e._s(e.$t("dapp.sinceDate",{date:e.$d(new Date(e.mostExpensiveFirstSeen),"dayYearLong")}))+"\n        ")]):e._e()]),e._v(" "),n("nuxt-link",{staticClass:"dapp-overview__view-all",attrs:{to:e.localePath({name:"dapp-slug-tokens",params:{slug:e.dapp.slug},query:{"order-by":"most-expensive"}})}},[e._v("\n        "+e._s(e.$t("dappOverview.viewAll"))+"\n        "),n("NextSvg",{staticClass:"dapp-overview__arrow"})],1)],1),e._v(" "),n("div",{staticClass:"dapp-overview__list"},e._l(e.mostExpensiveNfts,(function(t){return n("Nft",{key:t.id,attrs:{nft:t,light:e.light}})})),1)]),e._v(" "),n("div",{staticClass:"dapp-overview__section"},[n("div",{staticClass:"dapp-overview__section-head"},[n("h2",{staticClass:"dapp-overview__subtitle dapp-overview__subtitle--no-margin"},[e._v("\n        "+e._s(e.$t("dappOverview.latestPricesTitle",{name:e.dapp.name}))+"\n      ")]),e._v(" "),n("nuxt-link",{staticClass:"dapp-overview__view-all",attrs:{to:e.localePath({name:"dapp-slug-tokens",params:{slug:e.dapp.slug},query:{"order-by":"latest-prices"}})}},[e._v("\n        "+e._s(e.$t("dappOverview.viewAll"))+"\n        "),n("NextSvg",{staticClass:"dapp-overview__arrow"})],1)],1),e._v(" "),n("div",{staticClass:"dapp-overview__list"},e._l(e.latestNfts,(function(t){return n("Nft",{key:t.id,attrs:{nft:t,light:e.light}})})),1)]),e._v(" "),n("Leaderboard",{attrs:{light:e.light}}),e._v(" "),n("div",{staticClass:"dapp-overview__spacing"})],1)}),[],!1,null,null,null);t.default=component.exports}}]);