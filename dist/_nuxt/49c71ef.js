(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,6,11,13],{344:function(t,e,n){"use strict";n.d(e,"g",(function(){return d})),n.d(e,"h",(function(){return f})),n.d(e,"i",(function(){return h})),n.d(e,"b",(function(){return x})),n.d(e,"f",(function(){return v})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return w})),n.d(e,"c",(function(){return _})),n.d(e,"a",(function(){return y})),n.d(e,"k",(function(){return k})),n.d(e,"j",(function(){return C}));n(80);var o=n(66),r=n.n(o),c=localStorage.getItem("chip-it-token"),l=localStorage.getItem("chip-it-uuid"),d=function(){return r.a.get("https://chip-it-api.fly.dev/v1/users/".concat(l,"/top-visited?page=1&limit=4"),{headers:{Authorization:"Bearer ".concat(c)}})},f=function(t){return r.a.get("https://chip-it-api.fly.dev/v1/users/".concat(l,"/chips?page=").concat(t,"&limit=6&sort=latest"),{headers:{Authorization:"Bearer ".concat(c)}})},h=function(t){return r.a.get("https://chip-it-api.fly.dev/v1/users/".concat(l,"/favorites?page=").concat(t,"&limit=6&sort=latest"),{headers:{Authorization:"Bearer ".concat(c)}})},x=function(t,e){return r.a.post("https://chip-it-api.fly.dev/v1/chips/",{url:e,user_id:t},{headers:{Authorization:"Bearer ".concat(c)}})},v=function(t,e){return r.a.get("https://chip-it-api.fly.dev/v1/users/".concat(t,"/folders?page=").concat(e,"&limit=12&sort=latest"),{headers:{Authorization:"Bearer ".concat(c)}})},m=function(t,e){return r.a.get("https://chip-it-api.fly.dev/v1/users/".concat(t,"/folders?page=").concat(e,"&limit=25"),{headers:{Authorization:"Bearer ".concat(c)}})},w=function(t,e){return r.a.get("https://chip-it-api.fly.dev/v1/folders/".concat(t,"/chips?page=").concat(e,"&limit=6"),{headers:{Authorization:"Bearer ".concat(c)}})},_=function(t,e){return r.a.post("https://chip-it-api.fly.dev/v1/folders/",{name:e,user_id:t},{headers:{Authorization:"Bearer ".concat(c)}})},y=function(t,e){return r.a.patch("https://chip-it-api.fly.dev/v1/folders/".concat(t,"/chips/").concat(e),{},{headers:{Authorization:"Bearer ".concat(c)}})},k=function(t){return r.a.patch("https://chip-it-api.fly.dev/v1/chips/".concat(t,"/toggle-favorite"),{},{headers:{Authorization:"Bearer ".concat(c)}})},C=function(t){return r.a.patch("https://chip-it-api.fly.dev/v1/chips/".concat(t,"/clicks"),{},{headers:{Authorization:"Bearer ".concat(c)}})}},345:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("f748fc72",content,!0,{sourceMap:!1})},346:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("64e6fa79",content,!0,{sourceMap:!1})},347:function(t,e,n){"use strict";n(345)},348:function(t,e,n){var o=n(41)(!1);o.push([t.i,".form-input--container[data-v-779004c5]{display:flex;flex-direction:column;align-items:flex-start;position:relative}.form-input--container>label[data-v-779004c5]{margin-bottom:8px;font-weight:500;font-size:2rem;line-height:2.7rem;letter-spacing:.01em;color:#000}.form-input--container>input[data-v-779004c5]{display:flex;flex-direction:row;align-items:flex-start;padding:8px 60px 8px 24px;height:76px;width:100%;border:.5px solid #121212;border-radius:12px;color:#121212}.form-input--container.full[data-v-779004c5]{width:484px}.form-input--container.half[data-v-779004c5]{width:230px}.form-input--container>input[data-v-779004c5]::-moz-placeholder{font-weight:500;font-size:20px;line-height:60px;letter-spacing:.01em;color:grey}.form-input--container>input[data-v-779004c5]::placeholder{font-weight:500;font-size:20px;line-height:60px;letter-spacing:.01em;color:grey}.password-eye[data-v-779004c5]{position:absolute;right:24px;top:60px;cursor:pointer}",""]),t.exports=o},349:function(t,e,n){"use strict";n.r(e);var o={props:{inputType:{type:String},label:{type:String},inputSize:{type:String},placeholder:{type:String},value:{type:String}},data:function(){return{isPasswordShown:!1,passwordInputType:"password"}},methods:{togglePasswordVisibility:function(){this.isPasswordShown=!this.isPasswordShown,1==this.isPasswordShown?this.passwordInputType="text":this.passwordInputType="password"},handleInput:function(t){this.$emit("input",t.target.value)}}},r=(n(347),n(24)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-input--container",class:{full:"full"===t.inputSize,half:"half"===t.inputSize}},[e("label",{attrs:{for:""}},[t._v(t._s(t.label))]),t._v(" "),"password"!==t.inputType?e("input",{attrs:{type:t.inputType,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.handleInput}}):t._e(),t._v(" "),"password"==t.inputType?e("input",{attrs:{type:t.passwordInputType,placeholder:t.placeholder},on:{input:t.handleInput}}):t._e(),t._v(" "),"password"==t.inputType?e("div",{staticClass:"password-eye",on:{click:t.togglePasswordVisibility}},[t.isPasswordShown?e("img",{attrs:{src:"/icons/eye.svg",alt:""}}):e("img",{attrs:{src:"/icons/eye-slash.svg",alt:""}})]):t._e()])}),[],!1,null,"779004c5",null);e.default=component.exports},350:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("4d91b7d8",content,!0,{sourceMap:!1})},351:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("66d0644f",content,!0,{sourceMap:!1})},352:function(t,e,n){"use strict";n(346)},353:function(t,e,n){var o=n(41)(!1);o.push([t.i,".folder-dropdown--container{display:flex;flex-direction:column;align-items:flex-start;position:relative}.folder-dropdown--container>p{font-weight:500;font-size:20px;line-height:27px;letter-spacing:.01em;color:#000;margin-bottom:8px}.folder-dropdown--box{justify-content:space-between;padding:24px 26px;width:484px;height:72px;border:1px solid grey;border-radius:8px;cursor:pointer}.dropdown--box-left,.folder-dropdown--box{display:flex;flex-direction:row;align-items:center}.dropdown--box-left{justify-content:flex-start}.dropdown--box-left>img{margin-right:16px}.dropdown--box-left>p{font-weight:500;font-size:20px;line-height:27px;letter-spacing:.01em;color:#121212}.dropdown--box-right>img{transition:all .2s ease-in-out}.dropdown--box-right>img.dropdown-icon-rotate{transform:rotate(180deg)}.folder-dropdown--menu{position:absolute;top:102px;width:100%;background:#fff;max-height:200px;padding:0;border-radius:0 0 8px 8px;box-shadow:0 5px 9px rgba(0,0,0,.15);z-index:10;overflow:scroll}.folder-dropdown--menu>div{width:100%;padding:16px 60px;transition:all .2s ease-in-out;cursor:pointer}.folder-dropdown--menu>div:not(:last-child){border-bottom:1px solid #ddd}.folder-dropdown--menu>div:hover{width:100%;padding:16px 60px;background:#bebebe}.selected{background-color:#e3e3e3}",""]),t.exports=o},357:function(t,e,n){"use strict";n.r(e);n(33),n(50);var o=n(9),r=(n(49),n(344)),c={props:{chipsData:{type:Object}},data:function(){return{isFavourited:this.chipsData.is_favorite}},methods:{toggleFavourite:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.chipsData.id),e.prev=1,e.next=4,Object(r.k)(t.chipsData.id);case 4:1!=t.isFavourited?t.isFavourited=1:t.isFavourited=0,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})))()},incrementClickCount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.j)(t.chipsData.id);case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){}},l=(n(360),n(24)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"chip--container"},[e("div",{staticClass:"chip--top",style:{backgroundImage:"url(".concat(t.chipsData.metadata.images[0],")")}},[e("div",{staticClass:"chip--top__favourite"},[e("svg",{class:{favourite:1===t.isFavourited},attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.toggleFavourite}},[e("path",{attrs:{d:"M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z",stroke:"#292D32","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),e("div",{staticClass:"chip--details"},[e("h5",{staticClass:"chip--details__name"},[t._v(t._s(t.chipsData.metadata.title))]),t._v(" "),e("p",{staticClass:"chip--details__desc"},[t._v("\n      "+t._s(t.chipsData.metadata.description)+"\n    ")]),t._v(" "),e("a",{staticClass:"chip--details__link",attrs:{href:t.chipsData.url,target:"_blank"},on:{click:t.incrementClickCount}},[e("p",[t._v(t._s(t.chipsData.url))]),t._v(" "),e("img",{attrs:{src:"/icons/link-icon.svg",alt:""}})])])])}),[],!1,null,"5ed49f28",null);e.default=component.exports},358:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(49),n(32),n(349)),c=n(359),l=n(344),d={components:{FormInput:r.default,FolderDropdown:c.default},data:function(){return{isModalShown:!1,linkUrl:"",selectedFolder:{id:"",name:""},newFolderName:""}},computed:{isDisabled:function(){return""==this.linkUrl&&("{}"==JSON.stringify(this.selectedFolder)||""==this.newFolderName)}},methods:{openModal:function(){this.isModalShown=!0},closeModal:function(){this.isModalShown=!1},selectAnExisitingFolder:function(t){this.selectedFolder=t,this.newFolderName=""},saveChip:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("chip-it-uuid"),console.log(t.linkUrl,t.selectedFolder,t.newFolderName),t.isDisabled){e.next=27;break}return e.prev=3,e.next=6,Object(l.b)(n,t.linkUrl);case 6:if(o=e.sent,""==t.newFolderName){e.next=17;break}return e.next=10,Object(l.c)(n,t.newFolderName);case 10:return r=e.sent,e.next=13,Object(l.a)(r.data.folder.id,o.data.chip.id);case 13:e.sent,t.$toast.success("Successfully Add Chip to "+t.newFolderName),e.next=22;break;case 17:return e.next=19,Object(l.a)(t.selectedFolder.id,o.data.chip.id);case 19:e.sent,t.$toast.success("Successfully Add Chip to "+t.selectedFolder.name),t.isModalShown=!1;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(3),t.$toast.error("Error Adding Chip...Try again");case 27:case"end":return e.stop()}}),e,null,[[3,24]])})))()}}},f=(n(362),n(24)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"add-new-chips--container"},[e("img",{attrs:{src:"/icons/add-icon.svg",alt:""},on:{click:t.openModal}}),t._v(" "),t.isModalShown?e("div",{staticClass:"add-new-chips--modal--container"},[e("div",{staticClass:"add-new-chips--modal"},[e("img",{attrs:{src:"/icons/close-icon.svg",alt:""},on:{click:t.closeModal}}),t._v(" "),e("h5",[t._v("Add New Chip")]),t._v(" "),e("FormInput",{style:{"margin-bottom":"24px"},attrs:{"input-type":"text",label:"Link",placeholder:"https://drchibs.com/how-to-use-nodejs","input-size":"full"},model:{value:t.linkUrl,callback:function(e){t.linkUrl=e},expression:"linkUrl"}}),t._v(" "),e("FolderDropdown",{on:{"selected-item":function(e){return t.selectAnExisitingFolder(e)}}}),t._v(" "),e("span",{style:{"margin-top":"20px"}},[t._v("OR")]),t._v(" "),e("FormInput",{style:{"margin-top":"20px"},attrs:{"input-type":"text",label:"New Folder",placeholder:"Type the name of your new folder here","input-size":"full"},model:{value:t.newFolderName,callback:function(e){t.newFolderName=e},expression:"newFolderName"}}),t._v(" "),e("div",{staticClass:"btn--container",class:{"disabled-btn":t.isDisabled},style:{"margin-top":"36px"},on:{click:t.saveChip}},[e("div",{staticClass:"btn--container__text"},[t._v("Save")])])],1)]):t._e()])}),[],!1,null,null,null);e.default=component.exports},359:function(t,e,n){"use strict";n.r(e);n(32);var o=n(9),r=(n(49),n(344)),c={data:function(){return{isDropdownMenuShown:!1,menu:["VIP","Bookmarks","Vue","VueIsh","Server stufff","Okayyy"],selectedMenuItem:{name:"--select a folder--"}}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("chip-it-uuid"),e.next=3,Object(r.d)(n,1);case 3:o=e.sent,console.log(o),t.menu=o.data.folders.data;case 6:case"end":return e.stop()}}),e)})))()},methods:{toggleDropdownMenu:function(){this.isDropdownMenuShown=!this.isDropdownMenuShown},selectItem:function(t){this.selectedMenuItem=t,this.isDropdownMenuShown=!1,this.$emit("selected-item",t)}}},l=(n(352),n(24)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"folder-dropdown--container"},[e("p",[t._v("Folder")]),t._v(" "),e("div",{staticClass:"folder-dropdown--box",on:{click:t.toggleDropdownMenu}},[e("div",{staticClass:"dropdown--box-left"},[e("img",{attrs:{src:"/icons/folder-dropdown-icon.svg",alt:""}}),t._v(" "),e("p",[t._v(t._s(t.selectedMenuItem.name))])]),t._v(" "),e("div",{staticClass:"dropdown--box-right"},[e("img",{class:{"dropdown-icon-rotate":t.isDropdownMenuShown},attrs:{src:"/icons/arrow-down-icon.svg",alt:""}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isDropdownMenuShown,expression:"isDropdownMenuShown"}],staticClass:"folder-dropdown--menu"},t._l(t.menu,(function(n){return e("div",{key:n.id,class:{selected:t.selectedMenuItem===n},on:{click:function(e){return t.selectItem(n)}}},[t._v("\n      "+t._s(n.name)+"\n    ")])})),0)])}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,n){"use strict";n(350)},361:function(t,e,n){var o=n(41)(!1);o.push([t.i,".chip--container[data-v-5ed49f28]{width:348px;height:377px;background:#e3f2fc;border-radius:12px;display:flex;flex-direction:column;align-items:center;overflow:hidden}.chip--top[data-v-5ed49f28]{width:100%;height:165px;display:flex;justify-content:flex-end;padding:16px}.chip--top__favourite[data-v-5ed49f28]{width:36px;height:36px;background:hsla(0,0%,100%,.9);border-radius:50%;display:flex;flex-direction:column;justify-content:center;align-items:center}.chip--top__favourite>svg[data-v-5ed49f28]{transition:all .3s ease-in-out;cursor:pointer}.chip--top__favourite>svg>path[data-v-5ed49f28]{transition:all .1s ease-in-out}.chip--top__favourite>svg.favourite[data-v-5ed49f28]{fill:#cc1b1b}.chip--top__favourite>svg.favourite>path[data-v-5ed49f28]{stroke:#cc1b1b}.chip--details[data-v-5ed49f28]{width:100%;height:212px;background:hwb(0 25% 32%);background:#fff;border-radius:0 0 12px 12px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:12px 20px 30px 16px}.chip--details__name[data-v-5ed49f28]{font-weight:700;font-size:2.4rem;line-height:3.2rem;color:#333}.chip--details__desc[data-v-5ed49f28],.chip--details__name[data-v-5ed49f28]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.chip--details__desc[data-v-5ed49f28]{font-weight:500;font-size:1.8rem;line-height:2.4rem;text-align:left;color:grey;width:284px;margin-top:16px;margin-bottom:16px}.chip--details__link[data-v-5ed49f28]{width:100%;justify-self:flex-end;display:flex;flex-direction:row;justify-content:space-between}.chip--details__link>p[data-v-5ed49f28]{font-style:italic;font-weight:400;font-size:1.8rem;line-height:2.4rem;color:#121212;text-decoration:underline;cursor:pointer;width:260px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chip--details__link>img[data-v-5ed49f28]{cursor:pointer}",""]),t.exports=o},362:function(t,e,n){"use strict";n(351)},363:function(t,e,n){var o=n(41)(!1);o.push([t.i,".add-new-chips--container{width:100%;display:flex;justify-content:flex-end;position:relative;z-index:999}.add-new-chips--container>img{cursor:pointer}.add-new-chips--modal--container{top:0;right:0;bottom:0;left:0;position:fixed;background:rgba(74,74,74,.438);width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.add-new-chips--modal{width:681px;min-height:484px;background:#fff;box-shadow:4px 6px 10px rgba(0,0,0,.2),0 4px 8px rgba(0,0,0,.2);display:flex;flex-direction:column;align-items:center;padding:24px 24px 30px;position:relative}.add-new-chips--modal>img{position:absolute;right:24px;top:24px;cursor:pointer}.add-new-chips--modal>h5{font-weight:700;font-size:24px;line-height:32px;letter-spacing:.01em;color:#121212;margin-bottom:37px}.btn--container{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:24px 26px;width:484px;height:86px;background:#121212;border-radius:8px;cursor:pointer;transition:all .2s ease-in}.disabled-btn{background:#959595!important;cursor:default!important}.btn--container__text{font-style:normal;font-weight:500;font-size:28px;line-height:38px;color:#fff}",""]),t.exports=o},374:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1d9fd719",content,!0,{sourceMap:!1})},389:function(t,e,n){"use strict";n(374)},390:function(t,e,n){var o=n(41)(!1);o.push([t.i,".favourites-chips-box--container{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%}.favourites-chips-box--mini-container{width:100%;max-width:1280px;background:#fafafa;border-radius:24px;padding:48px 56px;margin:40px 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:flex-start}.favourites-empty-state{width:100%;height:400px;flex-direction:column;align-items:center;font-size:28px}.favourites-empty-state,pagination{display:flex;justify-content:center}pagination{list-style:none;flex-direction:row;margin:20px 0;border-radius:4px}.page-item{display:inline}.prev-link-class{border:1px solid #ddd;margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.next-link-class,.prev-link-class{position:relative;float:left;padding:6px 12px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff}.next-link-class{margin-left:-1px;border:1px solid #ddd;border-top-right-radius:4px;border-bottom-right-radius:4px}.page-link-class{position:relative;float:left;padding:6px 15px;color:#337ab7;margin-left:-1px;line-height:1.42857143;text-decoration:none;border:1px solid #ddd}.page-link-class.active{color:#fff!important}.disabled-class{opacity:.5;pointer-events:none;cursor:not-allowed}.active-class .page-link-class{z-index:2;color:#fff!important;cursor:default;background-color:#337ab7;border-color:#337ab7}a:active{color:#fff!important;text-decoration:none}",""]),t.exports=o},403:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(49),n(136)),c=n.n(r),l=n(357),d=n(344),f=n(358),h={components:{Chip:l.default,Paginate:c.a,AddNewChips:f.default},data:function(){return{page:1,chips:[],meta:{},totalPages:1}},methods:{fetchAllFavouriteChips:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.i)(t);case 2:o=n.sent,console.log(o),e.chips=o.data.favorites.data,e.meta=o.data.favorites.meta,e.totalPages=o.data.favorites.meta.last_page,console.log(e.chips);case 8:case"end":return n.stop()}}),n)})))()},onPageChange:function(){this.fetchAllFavouriteChips(this.page)}},activated:function(){this.fetchAllFavouriteChips(this.page)}},x=(n(389),n(24)),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"favourites-chips-box--container"},[e("div",{staticClass:"favourites-chips-box--mini-container"},[t._l(t.chips,(function(t){return e("Chip",{key:t.id,style:{"margin-bottom":"40px"},attrs:{"chips-data":t}})})),t._v(" "),0==t.chips.length?e("div",{staticClass:"favourites-empty-state"},[t._v("\n      You have no favourites\n    ")]):t._e(),t._v(" "),e("AddNewChips")],2),t._v(" "),t.totalPages>1?e("paginate",{attrs:{"click-handler":t.onPageChange,"page-count":t.totalPages,"container-class":"pagination","page-class":"page-item","page-link-class":"page-link-class","prev-link-class":"prev-link-class","next-link-class":"next-link-class","active-class":"active-class","disabled-class":"disabled-class","prev-text":"Prev","next-text":"Next"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);