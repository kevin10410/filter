webpackJsonp([1],{"3yMf":function(t,e){},"51xC":function(t,e){},CkGb:function(t,e){},EriG:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("Xxa5"),n=s.n(i),c=s("exGp"),r=s.n(c),o=s("mtWM"),l=s.n(o),u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-4 col-md-4 col-sm-12"},[s("div",{staticClass:"filter"},[s("div",{staticClass:"location box",class:{hidden:!t.toggleLocation}},[s("p",{on:{click:function(e){t.toggleLocation=!t.toggleLocation}}},[t._v("Location\n                "),t.toggleLocation?s("span",{key:!0},[s("i",{staticClass:"fas fa-minus"})]):s("span",{key:!1},[s("i",{staticClass:"fas fa-plus"})])]),t._v(" "),t.toggleLocation?s("div",{staticClass:"toggleBox"},[t._m(0)]):t._e()]),t._v(" "),s("div",{staticClass:"date box",class:{hidden:!t.toggleDate}},[s("p",{on:{click:function(e){t.toggleDate=!t.toggleDate}}},[t._v("Date\n                "),t.toggleDate?s("span",{key:!0},[s("i",{staticClass:"fas fa-minus"})]):s("span",{key:!1},[s("i",{staticClass:"fas fa-plus"})])]),t._v(" "),t.toggleDate?s("div",{staticClass:"toggleBox"},[t._m(1),t._v(" "),t._m(2)]):t._e()]),t._v(" "),s("div",{staticClass:"category box",class:{hidden:!t.toggleCategories}},[s("p",{on:{click:function(e){t.toggleCategories=!t.toggleCategories}}},[t._v("Categories\n                "),t.toggleCategories?s("span",{key:!0},[s("i",{staticClass:"fas fa-minus"})]):s("span",{key:!1},[s("i",{staticClass:"fas fa-plus"})])]),t._v(" "),t.toggleCategories?s("div",{staticClass:"toggleBox"},[s("div",{staticClass:"categories"},[s("div",{staticClass:"checkbox",on:{click:function(e){t.selectCategory("All")}}},["All"===t.category?s("span",[s("i",{staticClass:"fas fa-check"})]):t._e()]),t._v(" "),s("p",[t._v("All")])]),t._v(" "),s("div",{staticClass:"categories"},[s("div",{staticClass:"checkbox",on:{click:function(e){t.selectCategory("Entertainment")}}},["Entertainment"===t.category?s("span",[s("i",{staticClass:"fas fa-check"})]):t._e()]),t._v(" "),s("p",[t._v("Entertainment")])]),t._v(" "),s("div",{staticClass:"categories"},[s("div",{staticClass:"checkbox",on:{click:function(e){t.selectCategory("Food")}}},["Food"===t.category?s("span",[s("i",{staticClass:"fas fa-check"})]):t._e()]),t._v(" "),s("p",[t._v("Food")])]),t._v(" "),s("div",{staticClass:"categories"},[s("div",{staticClass:"checkbox",on:{click:function(e){t.selectCategory("Learning")}}},["Learning"===t.category?s("span",[s("i",{staticClass:"fas fa-check"})]):t._e()]),t._v(" "),s("p",[t._v("Learning")])]),t._v(" "),s("div",{staticClass:"categories"},[s("div",{staticClass:"checkbox",on:{click:function(e){t.selectCategory("Outdoors")}}},["Outdoors"===t.category?s("span",[s("i",{staticClass:"fas fa-check"})]):t._e()]),t._v(" "),s("p",[t._v("Outdoors")])])]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("select",[e("option",[this._v("Taiwan")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"datePicker"},[e("label",[this._v("from")]),this._v(" "),e("input",{staticClass:"calender",attrs:{type:"date"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"datePicker"},[e("label",[this._v("to")]),this._v(" "),e("input",{staticClass:"calender",attrs:{type:"date"}})])}]};var d=s("VU/8")({data:function(){return{toggleLocation:!0,toggleDate:!0,toggleCategories:!0,isAll:!0,rules:[],category:""}},methods:{selectCategory:function(t){this.category===t?this.category="":this.category=t}}},u,!1,function(t){s("EriG")},"data-v-d64a3d7c",null).exports,g=s("bOdI"),f=s.n(g),v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row tourSite",on:{click:function(e){t.showDetail(t.item)}}},[s("div",{staticClass:"pic col-lg-4 col-sm-12",style:{backgroundImage:"url("+t.item.Picture1+")"}}),t._v(" "),s("div",{staticClass:"content col-lg-8 col-sm-12"},[s("p",{staticClass:"title"},[t._v(t._s(t.item.Name))]),t._v(" "),s("p",{staticClass:"des"},[t._v(t._s(t.item.Description))]),t._v(" "),s("p",{staticClass:"tel"},[t._v(t._s(t.item.Tel)),s("span",[t._v("Entertainment")])]),t._v(" "),s("p",{staticClass:"info"},[t._m(0),t._v(" "),s("span",{staticClass:"open"},[t._m(1),t._v("  "+t._s(t.item.Opentime))])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"location"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-map-marker-alt"})]),this._v("  Kaohsiung City")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"far fa-calendar-alt"})])}]};var h={components:{TourSite:s("VU/8")({props:["item"],methods:{showDetail:function(t){this.$store.commit("changeDisplay","detail"),this.$store.commit("selectDetailItem",t)}}},v,!1,function(t){s("t3OQ")},"data-v-b092ca0e",null).exports},computed:f()({currentSites:function(){return this.$store.getters.currentSites},currentPage:function(){return this.$store.getters.getCurrentPage},currentSelector:function(){return this.$store.state.currentSelector},getFilterSites:function(){return this.$store.getters.getFilterSites},currentRules:function(){return this.$store.getters.currentRules}},"getFilterSites",function(){return this.$store.getters.getFilterSites}),methods:{selectPage:function(t){this.$store.commit("changePage",t)},prevPage:function(){this.currentPage>1&&(this.$store.commit("changePage",this.currentPage-1),this.currentPage%5==0&&this.$store.commit("changeSelector",-5))},nextPage:function(){0===this.currentRules.length?this.currentPage<89&&(this.$store.commit("changePage",this.currentPage+1),this.currentPage%5==1&&this.$store.commit("changeSelector",5)):this.currentPage<this.getFilterSites.length/3&&(this.$store.commit("changePage",this.currentPage+1),this.currentPage%5==1&&this.$store.commit("changeSelector",5))},removeRule:function(t){this.$store.commit("removeRules",t)}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sitePage col-lg-8 col-md-8 col-sm-12"},[s("div",{staticClass:"sites"},[s("p",{staticClass:"amount"},[t._v("Showing "),s("span",[t._v(t._s(t.getFilterSites.length))]),t._v(" results by…")]),t._v(" "),s("div",{staticClass:"option"},t._l(t.currentRules,function(e,a){return s("p",{key:a,on:{click:function(e){t.removeRule(a)}}},[t._v(t._s(e)+" "),s("i",{staticClass:"far fa-times-circle"})])})),t._v(" "),t._l(t.currentSites,function(t){return s("tour-site",{key:t.Id,attrs:{item:t}})}),t._v(" "),s("div",{staticClass:"row justify-content-end pageSelector"},[s("div",{staticClass:"selector col-lg-6 col-md-6 col-sm-12"},[s("div",{staticClass:"prev selectorBtn",on:{click:t.prevPage}},[s("i",{staticClass:"fas fa-angle-double-left"})]),t._v(" "),t._l(t.currentSelector,function(e){return e>t.currentSelector-5?s("div",{key:e,staticClass:"selectorBtn",class:{actived:e===t.currentPage},on:{click:function(s){t.selectPage(e)}}},[t._v("\n                "+t._s(e))]):t._e()}),t._v(" "),s("div",{staticClass:"next selectorBtn",on:{click:t.nextPage}},[s("i",{staticClass:"fas fa-angle-double-right"})])],2)])],2)])},staticRenderFns:[]};var p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail col-lg-8 col-md-8 col-sm-12"},[s("p",{staticClass:"title"},[s("span",{staticClass:"explore",on:{click:t.homePage}},[t._v("Explore")]),s("span",[t._v(" / "+t._s(t.detailItem.Name))])]),t._v(" "),s("img",{attrs:{src:t.detailItem.Picture1}}),t._v(" "),s("div",{staticClass:"content"},[s("p",{staticClass:"subtitle"},[t._v(t._s(t.detailItem.Name))]),t._v(" "),s("p",{staticClass:"tel"},[t._v(t._s(t.detailItem.Tel))]),t._v(" "),s("span",{staticClass:"tag"},[t._v("Entertainment")]),t._v(" "),s("p",{staticClass:"info"},[t._m(0),t._v(" "),s("span",{staticClass:"open"},[t._m(1),t._v("  "+t._s(t.detailItem.Opentime))])]),t._v(" "),s("p",{staticClass:"des"},[t._v(t._s(t.detailItem.Description))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"location"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-map-marker-alt"})]),this._v("  Kaohsiung City")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"far fa-calendar-alt"})])}]};var _={name:"App",data:function(){return{sites:[],api:["https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97","https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&offset=100","https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&offset=200"],filter:""}},components:{FilterBar:d,Sites:s("VU/8")(h,m,!1,function(t){s("51xC")},"data-v-efb29966",null).exports,Detail:s("VU/8")({data:function(){return{}},methods:{homePage:function(){this.$store.commit("changeDisplay","sites")}},computed:{detailItem:function(){return this.$store.getters.getDetailItem}}},p,!1,function(t){s("CkGb")},"data-v-0094a7b0",null).exports},methods:{asyncFetchData:function(){var t=this;return r()(n.a.mark(function e(){var s,a,i,c;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t,e.next=3,l()({method:"get",url:s.api[0]});case 3:return a=e.sent,t.$store.commit("fetchTourSite",a.data.result.records),e.next=7,l()({method:"get",url:s.api[1]});case 7:return i=e.sent,t.$store.commit("fetchTourSite",i.data.result.records),e.next=11,l()({method:"get",url:s.api[2]});case 11:c=e.sent,t.$store.commit("fetchTourSite",c.data.result.records);case 13:case"end":return e.stop()}},e,t)}))()},fetchData:function(){var t=this;l()({method:"get",url:t.api[0]}).then(function(e){return t.sites=t.sites.concat(e.data.result.records),console.log(t.sites),l()({method:"get",url:t.api[1]})}).then(function(e){return t.sites=t.sites.concat(e.data.result.records),console.log(t.sites),l()({method:"get",url:t.api[2]})}).then(function(e){t.sites=t.sites.concat(e.data.result.records),console.log(t.sites)})},actionFetch:function(){this.$store.dispatch("fetchAPI",this.api)},getDisplay:function(){console.log(this.$store.state.display)},addRule:function(t){console.log(t.keyCode),13===t.keyCode&&""!==this.filter&&(this.$store.commit("addRules",this.filter),this.filter="")}},computed:{display:function(){return this.$store.getters.currentDisplay}},mounted:function(){this.actionFetch()}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid",attrs:{id:"app"}},[s("div",{staticClass:"navbar row justify-content-start"},[t._m(0),t._v(" "),s("div",{staticClass:"search col-md-4 col-sm-12"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],attrs:{type:"text",placeholder:"Explore your own activities"},domProps:{value:t.filter},on:{keypress:t.addRule,input:function(e){e.target.composing||(t.filter=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row main"},[s("filter-bar"),t._v(" "),s("transition",{attrs:{mode:"out-in",appear:"","enter-class":"","enter-active-class":"animated fadeIn","leave-class":"","leave-active-class":"animated fadeOut"}},[t._v("\n    >\n      "),"sites"===t.display?s("sites",{key:"sites"}):s("detail",{key:"detail"})],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo col-md-4 col-sm-12"},[e("h1",[this._v("HaveFun")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-search fa-lg"})])}]};var y=s("VU/8")(_,C,!1,function(t){s("3yMf")},null,null).exports,S=(s("K3J8"),s("SSNS"),s("QxPg")),k=s("fY41"),P=s.n(k),$=s("mNVX"),x=s.n($),b=s("iK9v"),D=s.n(b),E=s("nCDS"),F=s.n(E),w=s("g7Da"),R=s.n(w),I=s("XFHq"),T=s.n(I),N=s("VMFT"),O=s.n(N),L=s("NGnB"),A=s.n(L),B=s("qR8e"),V=s.n(B),G=s("NYxO");a.a.use(G.a);var M=new G.a.Store({state:{display:"sites",allSites:[],currentPage:1,currentDetail:{},currentSelector:5,rules:[],currentSites:[]},getters:{currentDisplay:function(t){return t.display},currentSites:function(t){return 0===t.rules.length?t.allSites.slice(3*t.currentPage-3,3*t.currentPage):t.currentSites.slice(3*t.currentPage-3,3*t.currentPage)},getDetailItem:function(t){return t.currentDetail},getCurrentPage:function(t){return t.currentPage},getFilterSites:function(t){if(0!==t.rules.length){var e=t.allSites.filter(function(e){var s=!1;return t.rules.forEach(function(t){e.Description.includes(t)&&(s=!0)}),s});return t.currentSites=e,e}return t.currentSites=[],t.allSites},currentRules:function(t){return t.rules}},mutations:{fetchTourSite:function(t,e){t.allSites=t.allSites.concat(e),console.log(t.allSites)},changeDisplay:function(t,e){t.display=e,console.log(t.display)},selectDetailItem:function(t,e){t.currentDetail=e},changePage:function(t,e){t.currentPage=e},changeSelector:function(t,e){t.currentSelector+=e},addRules:function(t,e){t.rules.push(e),console.log(t.rules)},removeRules:function(t,e){t.rules.splice(e,1),console.log(t.rules)}},actions:{fetchAPI:function(t,e){var s=this,a=t.commit;return r()(n.a.mark(function t(){var i,c,r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l()({method:"get",url:e[0]});case 2:return i=t.sent,a("fetchTourSite",i.data.result.records),t.next=6,l()({method:"get",url:e[1]});case 6:return c=t.sent,a("fetchTourSite",c.data.result.records),t.next=10,l()({method:"get",url:e[2]});case 10:r=t.sent,a("fetchTourSite",r.data.result.records);case 12:case"end":return t.stop()}},t,s)}))()}}});S.a.library.add(P.a),S.a.library.add(x.a),S.a.library.add(D.a),S.a.library.add(F.a),S.a.library.add(R.a),S.a.library.add(T.a),S.a.library.add(O.a),S.a.library.add(A.a),S.a.library.add(V.a),a.a.config.productionTip=!1,new a.a({el:"#app",store:M,components:{App:y},template:"<App/>"})},SSNS:function(t,e){},t3OQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ee5722d92de4d0aee060.js.map