(window.webpackJsonp=window.webpackJsonp||[]).push([[17,8,14],{355:function(t,e,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("75e82a6a",content,!0,{sourceMap:!1})},356:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("42d0ac97",content,!0,{sourceMap:!1})},367:function(t,e,n){"use strict";n(355)},368:function(t,e,n){var o=n(41)(!1);o.push([t.i,'.chip-mini--container[data-v-0b840078]{width:30rem;height:24rem;background:#e3f2fc;border-radius:24px;padding:24px 0;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;overflow:hidden;margin-bottom:30px}.chip-mini--details[data-v-0b840078]{padding:15px 8px;min-width:248px;max-width:285px;height:72px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.05)}.chip-mini--details[data-v-0b840078],.chip-mini--details__name[data-v-0b840078]{display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:12px}.chip-mini--details__name[data-v-0b840078]{min-width:85px;margin-right:10px}.chip-mini--details__name[data-v-0b840078],.chip-mini--details__visits[data-v-0b840078]{height:42px;background:#e5e5e5;font-family:"Work Sans";font-style:normal;font-weight:600;font-size:18px;line-height:21px;color:#161616}.chip-mini--details__visits[data-v-0b840078]{width:85px;border-radius:12px;display:flex;flex-direction:row;justify-content:center;align-items:center}.chip-mini--details__visits>img[data-v-0b840078]{margin-right:3px}',""]),t.exports=o},369:function(t,e,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("42b4b03a",content,!0,{sourceMap:!1})},370:function(t,e,n){"use strict";n(356)},371:function(t,e,n){var o=n(41)(!1);o.push([t.i,".pagination{list-style:none;display:flex;flex-direction:row;justify-content:center;margin:20px 0;border-radius:4px}.page-item{display:inline}.prev-link-class{border:1px solid #ddd;margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.next-link-class,.prev-link-class{position:relative;float:left;padding:6px 12px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff}.next-link-class{margin-left:-1px;border:1px solid #ddd;border-top-right-radius:4px;border-bottom-right-radius:4px}.page-link-class{position:relative;float:left;padding:6px 15px;color:#337ab7;margin-left:-1px;line-height:1.42857143;text-decoration:none;border:1px solid #ddd}.page-link-class.active{color:#fff!important}.disabled-class{opacity:.5;pointer-events:none;cursor:not-allowed}.active-class .page-link-class{z-index:2;color:#fff!important;cursor:default;background-color:#337ab7;border-color:#337ab7}a:active{color:#fff!important;text-decoration:none}",""]),t.exports=o},372:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("669e14f1",content,!0,{sourceMap:!1})},373:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("54dc6174",content,!0,{sourceMap:!1})},374:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1d9fd719",content,!0,{sourceMap:!1})},378:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(49),n(344)),l={props:{chipMiniData:{type:Object}},data:function(){return{clicks:this.chipMiniData.clicks}},methods:{incrementClickCount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.clicks++,e.next=3,Object(r.j)(t.chipMiniData.id);case 3:case"end":return e.stop()}}),e)})))()}}},c=(n(367),n(24)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"chip-mini--container",style:{"background-image":"url(".concat(t.chipMiniData.metadata.images[0],")")},attrs:{href:t.chipMiniData.url,target:"_blank"},on:{click:t.incrementClickCount}},[e("div",{staticClass:"chip-mini--details"},[e("a",{staticClass:"chip-mini--details__name"},[t._v(t._s(t.chipMiniData.metadata.siteName))]),t._v(" "),e("div",{staticClass:"chip-mini--details__visits"},[e("img",{attrs:{src:"/icons/visit-icon.svg",alt:""}}),t._v("\n      "+t._s(t.clicks)+"\n    ")])])])}),[],!1,null,"0b840078",null);e.default=component.exports},379:function(t,e,n){"use strict";n.r(e);var o=n(136),r={name:"Pagination",components:{Paginate:n.n(o).a},props:{onPageChange:{required:!0},totalPages:{required:!0},page:{required:!0}}},l=(n(370),n(24)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"text-align":"center"}},[e("paginate",{attrs:{"click-handler":t.onPageChange,"page-count":t.totalPages,"container-class":"pagination","page-class":"page-item","page-link-class":"page-link-class","prev-link-class":"prev-link-class","next-link-class":"next-link-class","active-class":"active-class","disabled-class":"disabled-class","prev-text":"Prev","next-text":"Next"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,n){"use strict";n(369)},384:function(t,e,n){var o=n(41)(!1);o.push([t.i,".top-visited--container{display:flex;flex-direction:column;align-items:flex-start;width:100%;margin-top:120px}.top-visited--container>h5{font-weight:700;font-size:28px;line-height:38px;color:#121212;margin-bottom:24px}.top-visited--list{width:100%;display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap}",""]),t.exports=o},385:function(t,e,n){"use strict";n(372)},386:function(t,e,n){var o=n(41)(!1);o.push([t.i,".chips-box--container{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.chips-box--mini-container{width:100%;max-width:1280px;background:#fafafa;border-radius:24px;padding:48px 56px;margin:40px 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:flex-start}pagination{list-style:none;display:flex;flex-direction:row;justify-content:center;margin:20px 0;border-radius:4px}.page-item{display:inline}.prev-link-class{border:1px solid #ddd;margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.next-link-class,.prev-link-class{position:relative;float:left;padding:6px 12px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff}.next-link-class{margin-left:-1px;border:1px solid #ddd;border-top-right-radius:4px;border-bottom-right-radius:4px}.page-link-class{position:relative;float:left;padding:6px 15px;color:#337ab7;margin-left:-1px;line-height:1.42857143;text-decoration:none;border:1px solid #ddd}.page-link-class.active{color:#fff!important}.disabled-class{opacity:.5;pointer-events:none;cursor:not-allowed}.active-class .page-link-class{z-index:2;color:#fff!important;cursor:default;background-color:#337ab7;border-color:#337ab7}a:active{color:#fff!important;text-decoration:none}",""]),t.exports=o},387:function(t,e,n){"use strict";n(373)},388:function(t,e,n){var o=n(41)(!1);o.push([t.i,".chips-tab--container{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:16px 32px;width:443px;height:86px;background:#fafafa;border-radius:16px;margin:38px 0 0}.chips-tab--container>div{padding:8px;background:transparent;color:grey;margin:0 8px;transition:all .3s ease-in-out;cursor:pointer}.chips-tab--container>div,.chips-tab--container>div.active{display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:12px;font-weight:500;font-size:20px;line-height:27px}.chips-tab--container>div.active{padding:14px 36px;background:#121212;color:#fff;cursor:default}",""]),t.exports=o},389:function(t,e,n){"use strict";n(374)},390:function(t,e,n){var o=n(41)(!1);o.push([t.i,".favourites-chips-box--container{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%}.favourites-chips-box--mini-container{width:100%;max-width:1280px;background:#fafafa;border-radius:24px;padding:48px 56px;margin:40px 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:flex-start}.favourites-empty-state{width:100%;height:400px;flex-direction:column;align-items:center;font-size:28px}.favourites-empty-state,pagination{display:flex;justify-content:center}pagination{list-style:none;flex-direction:row;margin:20px 0;border-radius:4px}.page-item{display:inline}.prev-link-class{border:1px solid #ddd;margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.next-link-class,.prev-link-class{position:relative;float:left;padding:6px 12px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff}.next-link-class{margin-left:-1px;border:1px solid #ddd;border-top-right-radius:4px;border-bottom-right-radius:4px}.page-link-class{position:relative;float:left;padding:6px 15px;color:#337ab7;margin-left:-1px;line-height:1.42857143;text-decoration:none;border:1px solid #ddd}.page-link-class.active{color:#fff!important}.disabled-class{opacity:.5;pointer-events:none;cursor:not-allowed}.active-class .page-link-class{z-index:2;color:#fff!important;cursor:default;background-color:#337ab7;border-color:#337ab7}a:active{color:#fff!important;text-decoration:none}",""]),t.exports=o},396:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{activeTab:"all"}},methods:{switchTab:function(t){this.activeTab=t,this.$emit("change-tab",t)}}},r=(n(387),n(24)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"chips-tab--container"},[e("div",{class:{active:"all"===t.activeTab},on:{click:function(e){return t.switchTab("all")}}},[t._v("\n    All\n  ")]),t._v(" "),e("div",{class:{active:"favourites"===t.activeTab},on:{click:function(e){return t.switchTab("favourites")}}},[t._v("\n    Favourites\n  ")]),t._v(" "),e("div",{class:{active:"folders"===t.activeTab},on:{click:function(e){return t.switchTab("folders")}}},[t._v("\n    Folders\n  ")])])}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,n){var content=n(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("c0587540",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";n.r(e);n(51);var o=n(9),r=(n(49),n(378)),l=n(344),c={components:{ChipMini:r.default},data:function(){return{topVisitedData:[]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.g)();case 2:n=e.sent,console.log(n),t.topVisitedData=n.data.top_visited.data;case 5:case"end":return e.stop()}}),e)})))()}},d=(n(383),n(24)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return t.topVisitedData.length>8?e("div",{staticClass:"top-visited--container"},[e("h5",[t._v("Top Visited")]),t._v(" "),e("div",{staticClass:"top-visited--list"},t._l(t.topVisitedData.slice(0,4),(function(t){return e("ChipMini",{key:t.id,attrs:{"chip-mini-data":t}})})),1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(49),n(136)),l=n.n(r),c=n(379),d=n(357),f=n(358),x=n(344),h={components:{Chip:d.default,Pagination:c.default,Paginate:l.a,AddNewChips:f.default},data:function(){return{page:1,chips:[],meta:{},totalPages:1}},methods:{fetchAllChips:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(x.h)(t);case 2:o=n.sent,console.log(o),e.chips=o.data.chips.data,e.meta=o.data.chips.meta,e.totalPages=o.data.chips.meta.last_page,console.log(e.chips);case 8:case"end":return n.stop()}}),n)})))()},onPageChange:function(){this.fetchAllChips(this.page)}},mounted:function(){this.fetchAllChips(this.page)}},v=(n(385),n(24)),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"chips-box--container"},[e("div",{staticClass:"chips-box--mini-container"},[t._l(t.chips,(function(t){return e("Chip",{key:t.id,style:{"margin-bottom":"40px"},attrs:{"chips-data":t}})})),t._v(" "),e("AddNewChips")],2),t._v(" "),t.totalPages>1?e("paginate",{attrs:{"click-handler":t.onPageChange,"page-count":t.totalPages,"container-class":"pagination","page-class":"page-item","page-link-class":"page-link-class","prev-link-class":"prev-link-class","next-link-class":"next-link-class","active-class":"active-class","disabled-class":"disabled-class","prev-text":"Prev","next-text":"Next"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(49),n(136)),l=n.n(r),c=n(357),d=n(344),f=n(358),x={components:{Chip:c.default,Paginate:l.a,AddNewChips:f.default},data:function(){return{page:1,chips:[],meta:{},totalPages:1}},methods:{fetchAllFavouriteChips:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.i)(t);case 2:o=n.sent,console.log(o),e.chips=o.data.favorites.data,e.meta=o.data.favorites.meta,e.totalPages=o.data.favorites.meta.last_page,console.log(e.chips);case 8:case"end":return n.stop()}}),n)})))()},onPageChange:function(){this.fetchAllFavouriteChips(this.page)}},activated:function(){this.fetchAllFavouriteChips(this.page)}},h=(n(389),n(24)),component=Object(h.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"favourites-chips-box--container"},[e("div",{staticClass:"favourites-chips-box--mini-container"},[t._l(t.chips,(function(t){return e("Chip",{key:t.id,style:{"margin-bottom":"40px"},attrs:{"chips-data":t}})})),t._v(" "),0==t.chips.length?e("div",{staticClass:"favourites-empty-state"},[t._v("\n      You have no favourites\n    ")]):t._e(),t._v(" "),e("AddNewChips")],2),t._v(" "),t.totalPages>1?e("paginate",{attrs:{"click-handler":t.onPageChange,"page-count":t.totalPages,"container-class":"pagination","page-class":"page-item","page-link-class":"page-link-class","prev-link-class":"prev-link-class","next-link-class":"next-link-class","active-class":"active-class","disabled-class":"disabled-class","prev-text":"Prev","next-text":"Next"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,n){"use strict";n(400)},413:function(t,e,n){var o=n(41)(!1);o.push([t.i,".chips--main-box{display:flex;flex-direction:column;align-items:center}",""]),t.exports=o},417:function(t,e,n){"use strict";n.r(e);var o=n(401),r=n(402),l=n(396),c=n(403),d=n(414),f={components:{AllChipsBox:r.default,ChipsTab:l.default,AllFavouriteChipsBox:c.default,AllFoldersBox:d.default,TopVisited:o.default},middleware:["auth"],data:function(){return{activeTab:"all"}},methods:{switchTab:function(t){this.activeTab=t}}},x=(n(412),n(24)),component=Object(x.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("TopVisited"),t._v(" "),e("div",{staticClass:"chips--main-box"},[e("ChipsTab",{on:{"change-tab":function(e){return t.switchTab(e)}}}),t._v(" "),e("AllChipsBox",{directives:[{name:"show",rawName:"v-show",value:"all"==t.activeTab,expression:"activeTab == 'all'"}]}),t._v(" "),e("AllFavouriteChipsBox",{directives:[{name:"show",rawName:"v-show",value:"favourites"==t.activeTab,expression:"activeTab == 'favourites'"}]}),t._v(" "),e("AllFoldersBox",{directives:[{name:"show",rawName:"v-show",value:"folders"==t.activeTab,expression:"activeTab == 'folders'"}]})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChipsTab:n(396).default})}}]);