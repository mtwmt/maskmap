(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(l,n,t){l.exports=t("zUnb")},zUnb:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class a{}class o{getOpen(l){this.isOpen=l}}var i=t("pMnS"),s=t("s7LF"),u=t("SVse"),r=t("fNgX"),c=t("Nv++"),p=t("cUpR"),h=t("itXk"),b=t("lJxs"),m=t("wHSu");class g{constructor(l,n){this.appService=l,this.appStoreService=n,this.doOpen=new e.m,this.faSearch=m.a,this.assetsUrl="assets",this.mask=""}ngOnInit(){Object(h.a)(this.appService.fetchTaiwanCity(),this.appService.fetchPharmacy()).pipe(Object(b.a)(l=>[l[0],l[1]])).subscribe(l=>{this.getTaiwanCity=l[0],this.onCityChange("\u53f0\u5317\u5e02")}),this.appStoreService.getCalMask$.subscribe(l=>{this.childTotal=l.childTotal,this.adultTotal=l.adultTotal})}onCityChange(l){this.appStoreService.setArea(l),this.city=l,this.appStoreService.setPharmacyList(this.city)}onAreaChange(l){this.area="\u5168\u5340"===l?"":l,this.appStoreService.setPharmacyList(this.city,this.area)}onMask(l){this.mask=l,this.appStoreService.setMask(l)}onSwitch(){this.isOpen=!this.isOpen,this.doOpen.emit(this.isOpen)}}var d=t("vkgz"),_=t("IheW"),f=t("2Vo4"),k=t("XNiG");let v=(()=>{class l{constructor(){this.getCity$=new f.a(this.getCity),this.getArea$=new f.a(this.getArea),this.getPharmacy$=new k.a,this.getCurInfo$=new k.a,this.getCalMask$=new k.a}setCity(l){this.getCity=l,this.getCity$.next(this.getCity)}setArea(l){this.getArea=this.getCity.filter(n=>n.Name===l),this.getArea$.next(this.getArea[0].Districts)}setPharmacy(l){this.getAllPharmacy=l}setPharmacyList(l,n){const t=this.getAllPharmacy.filter(t=>(t.properties.address.match("\u81fa")&&(t.properties.address=t.properties.address.replace("\u81fa","\u53f0")),n||(n=""),t.properties.address.match(l+n)));this.getPharmacy=t,this.getPharmacy$.next(t),this.setCalMask(t)}setPharmacyInfo(l,n){const t=Object.assign({},n,{coordinates:l.coordinates});this.getCurInfo$.next(t)}setMask(l){let n=[];n=this.getPharmacy.filter("child"===l?l=>l.properties.mask_child>0:"adult"===l?l=>l.properties.mask_adult>0:l=>l.properties.mask_child>0||l.properties.mask_adult>0),this.getPharmacy$.next(n)}setCalMask(l){let n=0,t=0;l.map(l=>{n+=l.properties.mask_child,t+=l.properties.mask_adult}),this.getCalMask$.next({childTotal:n,adultTotal:t})}}return l.ngInjectableDef=e.Mb({factory:function(){return new l},token:l,providedIn:"root"}),l})(),P=(()=>{class l{constructor(l,n){this.httpClient=l,this.appStoreService=n,this.assetsUrl="assets",this.url="https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"}fetchTaiwanCity(l){return this.httpClient.get(`${this.assetsUrl}/counties.json`).pipe(Object(b.a)(l=>(l.sort((l,n)=>l.Sort-n.Sort),l.map(l=>{l.Districts.sort((l,n)=>l.Sort-n.Sort)}),l)),Object(d.a)(l=>{this.appStoreService.setCity(l)}))}fetchPharmacy(l){return this.httpClient.get(this.url).pipe(Object(b.a)(l=>(l.features.map(l=>{l.geometry.coordinates=l.geometry.coordinates.reverse(),l.properties.phone=l.properties.phone.replace(/\s*/g,"")}),l.features.filter(l=>l.properties.mask_adult>0||l.properties.mask_child>0))),Object(d.a)(l=>{this.appStoreService.setPharmacy(l)}))}fetchlocal(){return this.httpClient.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${[24.953750499999998,121.34356229999999].join(",")}.json?routing=true&access_token=pk.eyJ1IjoibXR3bXQiLCJhIjoiY2s2bnczbXh4MHNtYTN1cnVoa2FycjEzayJ9.r5GL2Ms2aZ6vjaJhzpSCOg`)}}return l.ngInjectableDef=e.Mb({factory:function(){return new l(e.Nb(_.c),e.Nb(v))},token:l,providedIn:"root"}),l})();var C=e.nb({encapsulation:0,styles:[['@charset "UTF-8";.search[_ngcontent-%COMP%]{position:relative}.search__icon[_ngcontent-%COMP%]{display:none;position:absolute;left:100%;bottom:0;padding:.5rem;background:#e0e0e0;border-radius:.25rem;cursor:pointer}@media (max-width:800px){.search__icon[_ngcontent-%COMP%]{display:block}}.search__flex[_ngcontent-%COMP%]{display:-webkit-box;display:flex;justify-content:space-around}.search__header[_ngcontent-%COMP%]{height:10.25rem;background:#e0e0e0;padding:1.25rem}.search__header[_ngcontent-%COMP%]   .search__flex[_ngcontent-%COMP%]{padding-top:1rem}.search__body[_ngcontent-%COMP%]{height:calc(100% - 230px);padding:1.25rem}.search__body-title[_ngcontent-%COMP%]{padding-left:1.25rem;color:#4f4f4f;font-weight:700;font-size:2.25rem;line-height:3.375rem}.search__body-area[_ngcontent-%COMP%], .search__body-city[_ngcontent-%COMP%]{position:relative;margin-top:1.25rem}.search__body-area[_ngcontent-%COMP%]:before, .search__body-city[_ngcontent-%COMP%]:before{position:absolute;top:-.5rem;left:1.25rem;padding:0 .5rem;font-size:.75rem;background:#fff}.search__body-area[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .search__body-city[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:0 1.25rem;width:100%;height:3.125rem;font-size:1rem;font-family:"Hiragino Sans CNS","\u5fae\u8edf\u6b63\u9ed1\u9ad4",Arial;border-radius:3.125rem;border:.125rem solid #4f4f4f}.search__body-city[_ngcontent-%COMP%]:before{content:"\u7e23\u5e02"}.search__body-area[_ngcontent-%COMP%]:before{content:"\u9109\u93ae\u5e02\u5340\u5225"}.search__info[_ngcontent-%COMP%]{text-align:center;line-height:2.25rem;font-size:.75rem;font-weight:700;color:#4f4f4f}.search__info[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{display:inline-block;height:2.5rem}.search__info[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:middle}.search__info[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]{margin:0 .125rem;font-size:1.5rem;color:#f2994a}.search__mask[_ngcontent-%COMP%]{margin-top:2.375rem}.search__mask[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem}.search__mask-adult[_ngcontent-%COMP%], .search__mask-both[_ngcontent-%COMP%], .search__mask-child[_ngcontent-%COMP%]{cursor:pointer;position:relative;width:5rem;height:5rem;margin-top:1.5rem;box-shadow:0 5px 10px rgba(0,0,0,.25);border-radius:1.25rem}.search__mask-adult[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .search__mask-both[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .search__mask-child[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}.search__mask-adult.isAct[_ngcontent-%COMP%], .search__mask-both.isAct[_ngcontent-%COMP%], .search__mask-child.isAct[_ngcontent-%COMP%]{box-shadow:0 .3125rem .625rem #f2c94c}.search__mask-total[_ngcontent-%COMP%]{margin-top:2rem;font-size:.875rem;line-height:1.5}.search__mask-total[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:#f2994a;line-height:2}.search__mask-total[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.5;color:#000;font-weight:400}']],data:{}});function y(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,3,"option",[],null,[[null,"valueChange"]],(function(l,n,t){var e=!0;return"valueChange"===n&&(e=!1!==(l.context.$implicit.Name=t)&&e),e}),null,null)),e.ob(1,147456,null,0,s.b,[e.k,e.B,[8,null]],{value:[0,"value"]},null),e.ob(2,147456,null,0,s.e,[e.k,e.B,[8,null]],{value:[0,"value"]},null),(l()(),e.Gb(3,null,["",""]))],(function(l,n){l(n,1,0,n.context.$implicit.Name),l(n,2,0,n.context.$implicit.Name)}),(function(l,n){l(n,3,0,n.context.$implicit.Name)}))}function O(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,3,"option",[],null,[[null,"valueChange"]],(function(l,n,t){var e=!0;return"valueChange"===n&&(e=!1!==(l.context.$implicit.Name=t)&&e),e}),null,null)),e.ob(1,147456,null,0,s.b,[e.k,e.B,[8,null]],{value:[0,"value"]},null),e.ob(2,147456,null,0,s.e,[e.k,e.B,[8,null]],{value:[0,"value"]},null),(l()(),e.Gb(3,null,["",""]))],(function(l,n){l(n,1,0,n.context.$implicit.Name),l(n,2,0,n.context.$implicit.Name)}),(function(l,n){l(n,3,0,n.context.$implicit.Name)}))}function M(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,33,"div",[["class","search"]],null,null,null,null,null)),e.Eb(512,null,u.q,u.r,[e.q,e.r,e.k,e.B]),e.ob(2,278528,null,0,u.i,[u.q],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Db(3,{active:0}),(l()(),e.pb(4,0,null,null,2,"div",[["class","search__icon"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onSwitch()&&e),e}),null,null)),(l()(),e.pb(5,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,r.d,r.c)),e.ob(6,573440,null,0,c.c,[p.b,c.a,c.d,[2,c.i]],{icon:[0,"icon"]},null),(l()(),e.pb(7,0,null,null,26,"div",[["class","search__header"]],null,null,null,null,null)),(l()(),e.pb(8,0,null,null,1,"figure",[],null,null,null,null,null)),(l()(),e.pb(9,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(10,0,null,null,23,"div",[["class","search__flex"]],null,null,null,null,null)),(l()(),e.pb(11,0,null,null,6,"div",[["class","search__info"]],null,null,null,null,null)),(l()(),e.pb(12,0,null,null,1,"figure",[],null,null,null,null,null)),(l()(),e.pb(13,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(14,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.pb(15,0,null,null,1,"span",[["class","num"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["7"])),(l()(),e.Gb(-1,null,["\u5929\u4e00\u6b21"])),(l()(),e.pb(18,0,null,null,7,"div",[["class","search__info"]],null,null,null,null,null)),(l()(),e.pb(19,0,null,null,1,"figure",[],null,null,null,null,null)),(l()(),e.pb(20,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(21,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["\u9650\u8cfc"])),(l()(),e.pb(23,0,null,null,1,"span",[["class","num"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["2"])),(l()(),e.Gb(-1,null,["\u7247"])),(l()(),e.pb(26,0,null,null,7,"div",[["class","search__info"]],null,null,null,null,null)),(l()(),e.pb(27,0,null,null,1,"figure",[],null,null,null,null,null)),(l()(),e.pb(28,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(29,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["\u4ee3\u8cfc"])),(l()(),e.pb(31,0,null,null,1,"span",[["class","num"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["1"])),(l()(),e.Gb(-1,null,["\u5361"])),(l()(),e.pb(34,0,null,null,44,"div",[["class","search__body"]],null,null,null,null,null)),(l()(),e.pb(35,0,null,null,1,"div",[["class","search__body-title"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["\u641c\u5c0b"])),(l()(),e.pb(37,0,null,null,4,"div",[["class","search__body-city"]],null,null,null,null,null)),(l()(),e.pb(38,0,null,null,3,"select",[["id","city"],["name",""]],null,[[null,"change"]],(function(l,n,t){var e=!0;return"change"===n&&(e=!1!==l.component.onCityChange(t.target.value)&&e),e}),null,null)),(l()(),e.eb(16777216,null,null,2,null,y)),e.ob(40,278528,null,0,u.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Cb(131072,u.b,[e.h]),(l()(),e.pb(42,0,null,null,8,"div",[["class","search__body-area"]],null,null,null,null,null)),(l()(),e.pb(43,0,null,null,7,"select",[["id","zone"],["name",""]],null,[[null,"change"]],(function(l,n,t){var e=!0;return"change"===n&&(e=!1!==l.component.onAreaChange(t.target.value)&&e),e}),null,null)),(l()(),e.pb(44,0,null,null,3,"option",[],null,null,null,null,null)),e.ob(45,147456,null,0,s.b,[e.k,e.B,[8,null]],null,null),e.ob(46,147456,null,0,s.e,[e.k,e.B,[8,null]],null,null),(l()(),e.Gb(-1,null,["\u5168\u5340"])),(l()(),e.eb(16777216,null,null,2,null,O)),e.ob(49,278528,null,0,u.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Cb(131072,u.b,[e.h]),(l()(),e.pb(51,0,null,null,27,"div",[["class","search__mask"]],null,null,null,null,null)),(l()(),e.pb(52,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["\u53e3\u7f69\u985e\u578b"])),(l()(),e.pb(54,0,null,null,15,"div",[["class","search__flex"]],null,null,null,null,null)),(l()(),e.pb(55,0,null,null,4,"div",[["class","search__mask-child isAct"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onMask("child")&&e),e}),null,null)),e.Eb(512,null,u.q,u.r,[e.q,e.r,e.k,e.B]),e.ob(57,278528,null,0,u.i,[u.q],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Db(58,{isAct:0}),(l()(),e.pb(59,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(60,0,null,null,4,"div",[["class","search__mask-adult"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onMask("adult")&&e),e}),null,null)),e.Eb(512,null,u.q,u.r,[e.q,e.r,e.k,e.B]),e.ob(62,278528,null,0,u.i,[u.q],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Db(63,{isAct:0}),(l()(),e.pb(64,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(65,0,null,null,4,"div",[["class","search__mask-both"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onMask("both")&&e),e}),null,null)),e.Eb(512,null,u.q,u.r,[e.q,e.r,e.k,e.B]),e.ob(67,278528,null,0,u.i,[u.q],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Db(68,{isAct:0}),(l()(),e.pb(69,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(70,0,null,null,8,"div",[["class","search__mask-total"]],null,null,null,null,null)),(l()(),e.pb(71,0,null,null,3,"h4",[],null,null,null,null,null)),(l()(),e.Gb(72,null,["",""," "])),(l()(),e.pb(73,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Gb(74,null,["\u53e3\u7f69\u7e3d\u91cf\uff1a",""])),(l()(),e.pb(75,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(76,null,["\u5c0f\u5b69\u53e3\u7f69\uff1a",""])),(l()(),e.pb(77,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(78,null,["\u6210\u4eba\u53e3\u7f69\uff1a",""]))],(function(l,n){var t=n.component,a=l(n,3,0,t.isOpen);l(n,2,0,"search",a),l(n,6,0,t.faSearch),l(n,40,0,e.Hb(n,40,0,e.Bb(n,41).transform(t.appStoreService.getCity$))),l(n,49,0,e.Hb(n,49,0,e.Bb(n,50).transform(t.appStoreService.getArea$)));var o=l(n,58,0,"child"===t.mask);l(n,57,0,"search__mask-child isAct",o);var i=l(n,63,0,"adult"===t.mask);l(n,62,0,"search__mask-adult",i);var s=l(n,68,0,""===t.mask);l(n,67,0,"search__mask-both",s)}),(function(l,n){var t=n.component;l(n,5,0,e.Bb(n,6).title,e.Bb(n,6).renderedIconHTML),l(n,9,0,e.tb(1,"",t.assetsUrl,"/nhi.svg")),l(n,13,0,e.tb(1,"",t.assetsUrl,"/calendar.svg")),l(n,20,0,e.tb(1,"",t.assetsUrl,"/mask.svg")),l(n,28,0,e.tb(1,"",t.assetsUrl,"/card.svg")),l(n,59,0,e.tb(1,"",t.assetsUrl,"/child.svg")),l(n,64,0,e.tb(1,"",t.assetsUrl,"/adult.svg")),l(n,69,0,e.tb(1,"",t.assetsUrl,"/both.svg")),l(n,72,0,t.city,t.area),l(n,74,0,t.childTotal+t.adultTotal),l(n,76,0,t.childTotal),l(n,78,0,t.adultTotal)}))}class x{constructor(l,n){this.appService=l,this.appStoreService=n,this.assetsUrl="assets"}ngOnInit(){}setInfo(l,n){this.appStoreService.setPharmacyInfo(l,n)}}var z=e.nb({encapsulation:0,styles:[['.pharmacy__wrap[_ngcontent-%COMP%]:after{content:"";display:block;clear:both}[_nghost-%COMP%]{position:absolute;left:0;bottom:0;z-index:9999;width:100%;height:10.625rem}.pharmacy[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow-y:hidden;overflow-x:scroll}.pharmacy__wrap[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:21.875rem;height:8.125rem;margin:.625rem;padding:1rem .625rem;box-shadow:0 5px 10px #f2f2f2;border-radius:.625rem;background:#fff;cursor:pointer}.pharmacy__title[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:700;line-height:1.6875rem}.pharmacy__addr[_ngcontent-%COMP%], .pharmacy__phone[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.5;color:#828282}.pharmacy__adult[_ngcontent-%COMP%], .pharmacy__child[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:#828282}.pharmacy__adult[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .pharmacy__child[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:2.5rem}.pharmacy__adult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .pharmacy__child[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.pharmacy__block-left[_ngcontent-%COMP%]{float:left;width:50%}.pharmacy__block-right[_ngcontent-%COMP%]{float:right;width:50%;display:-webkit-box;display:flex;justify-content:space-around}']],data:{}});function w(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,16,"div",[["class","pharmacy__wrap"]],[[4,"left","rem"]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.setInfo(l.context.$implicit.geometry,l.context.$implicit.properties)&&e),e}),null,null)),(l()(),e.pb(1,0,null,null,1,"div",[["class","pharmacy__title"]],null,null,null,null,null)),(l()(),e.Gb(2,null,["",""])),(l()(),e.pb(3,0,null,null,4,"div",[["class","pharmacy__block-left"]],null,null,null,null,null)),(l()(),e.pb(4,0,null,null,1,"div",[["class","pharmacy__addr"]],null,null,null,null,null)),(l()(),e.Gb(5,null,["",""])),(l()(),e.pb(6,0,null,null,1,"div",[["class","pharmacy__phone"]],null,null,null,null,null)),(l()(),e.Gb(7,null,["",""])),(l()(),e.pb(8,0,null,null,8,"div",[["class","pharmacy__block-right"]],null,null,null,null,null)),(l()(),e.pb(9,0,null,null,3,"div",[["class","pharmacy__child"]],null,null,null,null,null)),(l()(),e.pb(10,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(12,null,["",""])),(l()(),e.pb(13,0,null,null,3,"div",[["class","pharmacy__adult"]],null,null,null,null,null)),(l()(),e.pb(14,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(16,null,["",""]))],null,(function(l,n){var t=n.component;l(n,0,0,23.125*n.context.index),l(n,2,0,n.context.$implicit.properties.name),l(n,5,0,n.context.$implicit.properties.address),l(n,7,0,n.context.$implicit.properties.phone),l(n,10,0,e.tb(1,"",t.assetsUrl,"/child.svg")),l(n,12,0,n.context.$implicit.properties.mask_child),l(n,14,0,e.tb(1,"",t.assetsUrl,"/adult.svg")),l(n,16,0,n.context.$implicit.properties.mask_adult)}))}function S(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,3,"div",[["class","pharmacy"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,2,null,w)),e.ob(2,278528,null,0,u.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Cb(131072,u.b,[e.h])],(function(l,n){var t=n.component;l(n,2,0,e.Hb(n,2,0,e.Bb(n,3).transform(t.appStoreService.getPharmacy$)))}),null)}var $=t("4R65");t("JXP8");class j{constructor(l,n){this.appService=l,this.appStoreService=n,this.assetsUrl="assets",this.location=[25.0032999,121.5540404],this.location$=new f.a(this.location),this.getPosition(),this.appStoreService.getPharmacy$.pipe(Object(b.a)(l=>{if(l)return l.reduce((l,n)=>(l.push(Object.assign({},n.properties,{coordinates:n.geometry.coordinates})),l),[])})).subscribe(l=>{this.renderMap(l,l[0].coordinates)}),this.icons={red:this.customIcon("red"),orange:this.customIcon("orange"),yellow:this.customIcon("yellow"),green:this.customIcon("green"),blue:this.customIcon("blue"),violet:this.customIcon("violet"),gold:this.customIcon("gold"),grey:this.customIcon("grey")}}ngOnInit(){this.map=$.map("map",{center:[25.0032999,121.5540404],zoom:13,zoomControl:!1,layers:[$.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'&copy; \u53e3\u7f69\u5730\u5716 by <a href="https://mtwmt.github.io/" target="_blank">Mandy</a>',maxZoom:20,id:"mapbox/streets-v11",accessToken:"pk.eyJ1IjoibXR3bXQiLCJhIjoiY2s2Z2lvN2p5MmE2MjNsbjNsc2tvM2I5ciJ9.6WxKL8KMqhcRpsHrNNtvfQ"})]}),this.appStoreService.getCurInfo$.subscribe(l=>{this.onPharmacy(l)}),Object(h.a)(this.appService.fetchTaiwanCity(),this.location$).pipe(Object(b.a)(l=>[l[0],{latitude:l[1][0],longitude:l[1][1]}])).subscribe(l=>{})}ngOnDestroy(){this.location$.unsubscribe()}renderMap(l,n){this.group=(new $.MarkerClusterGroup).addTo(this.map),l.map((l,n)=>{this.addMarker(l)}),this.map.addLayer(this.group),$.marker(this.location,{icon:this.icons.gold}).addTo(this.map)}onPharmacy(l){this.map.setView(l.coordinates,16).closePopup(),this.prevPoint&&this.map.removeLayer(this.prevPoint),this.prevPoint=$.marker(l.coordinates,{icon:this.icons.red}).addTo(this.map).bindPopup(this.customPopup(l)).openPopup()}addMarker(l){const n=$.marker(l.coordinates,{icon:this.icons.grey}).bindPopup(this.customPopup(l));this.group.addLayer(n)}customPopup(l){return`\n      <div class="customPopup">\n        <div class="customPopup__title">${l.name}</div>\n        <div class="customPopup__block-left">\n          <div class="customPopup__addr">${l.address}</div>\n          <div class="customPopup__note">${l.note}</div>\n          <div class="customPopup__phone">${l.phone}</div>\n          <div class="customPopup__updated">\u66f4\u65b0\u6642\u9593\uff1a<br/>${l.updated}</div>\n        </div>\n        <div class="customPopup__block-right">\n          <div class="customPopup__block-flex">\n            <div class="customPopup__child">\n              <img src="${this.assetsUrl}/child.svg" />\n              <p>${l.mask_child}</p>\n            </div>\n            <div class="customPopup__adult">\n              <img src="${this.assetsUrl}/adult.svg" />\n              <p>${l.mask_adult}</p>\n            </div>\n          </div>\n          <a href="tel:${l.phone}" class="customPopup__tel">\n            <img src="${this.assetsUrl}/tel.svg" />\n          </a>\n        </div>\n        <a href="https://www.google.com/maps/dir/${this.location[0]},${this.location[1]}/${l.coordinates[0]},${l.coordinates[1]}" class="customPopup__google" target="_blank">\n          <img src="${this.assetsUrl}/vecotr.svg" />\u898f\u5283\u8def\u7dda\n        </a>\n      </div>\n    `}customIcon(l){return $.icon({iconUrl:`https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${l}.png`,shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]})}getPosition(){navigator.geolocation.getCurrentPosition(l=>{this.location$.next([l.coords.latitude,l.coords.longitude])})}}var I=e.nb({encapsulation:2,styles:[['@charset "UTF-8";.leaflet-popup-content:after{content:"";display:block;clear:both}.map-container{position:absolute;top:0;left:0;right:0;bottom:0}#map,.map-frame{height:100%}.customPopup{font-family:"Hiragino Sans CNS","\u5fae\u8edf\u6b63\u9ed1\u9ad4",Arial;width:18.75rem}.customPopup__title{font-size:1.125rem;font-weight:700;line-height:1.6875rem}.customPopup__addr,.customPopup__note{font-size:.875rem;line-height:1.5;color:#828282}.customPopup__phone{margin-top:.5rem;font-size:.875rem;line-height:1.5;color:#828282}.customPopup__updated{margin-top:.5rem;font-size:.75rem;line-height:1.5;color:#828282}.customPopup__adult,.customPopup__child{font-size:1.5rem;font-weight:700;color:#4f4f4f}.customPopup__adult img,.customPopup__child img{height:1.875rem}.customPopup__adult p,.customPopup__child p{text-align:center;line-height:1;margin:0}.customPopup__tel{display:block;margin:.5rem 0;line-height:0;padding:.375rem 0;text-align:center;border:1px solid #f2c94c;box-sizing:border-box;border-radius:1.25rem}.customPopup__google{clear:both;display:block;margin-top:.5rem;padding:.375rem 0;font-size:1.25rem;font-weight:700;text-align:center;color:#fff!important;text-decoration:none!important;border-radius:1.25rem;background:#f2c94c}.customPopup__google img{position:relative;top:.125rem;margin-right:.5rem}.customPopup__block-left{float:left;width:55%}.customPopup__block-right{float:right;width:45%}.customPopup__block-flex{display:-webkit-box;display:flex;justify-content:space-around}']],data:{}});function T(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,2,"div",[["class","map-container"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"div",[["class","map-frame"]],null,null,null,null,null)),(l()(),e.pb(2,0,[["maskmap",1]],null,0,"div",[["id","map"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,1,"app-masklist",[],null,null,null,S,z)),e.ob(4,114688,null,0,x,[P,v],null,null)],(function(l,n){l(n,4,0)}),null)}var N=e.nb({encapsulation:0,styles:[['.maskmap[_ngcontent-%COMP%]:after{content:"";display:block;clear:both}.hamburger[_ngcontent-%COMP%]{display:none;z-index:100000;position:absolute;top:1.25rem;right:1.25rem;width:50px;height:45px;padding:10px;background:#e0e0e0;border-radius:.25rem}.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-indent:-9999px;-webkit-transition:.5s;transition:.5s;position:absolute;display:block;cursor:pointer;width:30px;height:5px;background:#4f4f4f;margin:10px 0}.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{-webkit-transition:.5s;transition:.5s;content:"";position:absolute;top:-10px;left:0;display:block;width:30px;height:5px;background:#4f4f4f}.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{-webkit-transition:.5s;transition:.5s;content:"";position:absolute;top:10px;left:0;display:block;width:30px;height:5px;background:#4f4f4f}.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);transform:rotate(180deg);background-color:transparent}.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{top:-.625rem;-webkit-transform:translateY(10.5px) rotate(45deg);transform:translateY(10.5px) rotate(45deg)}.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{top:-.625rem;-webkit-transform:translateY(10.5px) rotate(-45deg);transform:translateY(10.5px) rotate(-45deg)}.maskmap[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:flex}.maskmap[_ngcontent-%COMP%]   app-search[_ngcontent-%COMP%]{position:relative;z-index:9999;width:300px;height:100vh;background:#fff}.maskmap[_ngcontent-%COMP%]   app-map[_ngcontent-%COMP%]{position:relative;width:calc(100% - 300px)}@media (max-width:800px){.maskmap[_ngcontent-%COMP%]{position:relative;display:block;width:100%;height:100%}.maskmap[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]{display:block}.maskmap[_ngcontent-%COMP%]   app-search[_ngcontent-%COMP%]{position:absolute;z-index:99999;-webkit-transition:.5s;transition:.5s;-webkit-transform:translateX(-300px);transform:translateX(-300px)}.maskmap[_ngcontent-%COMP%]   app-search.active[_ngcontent-%COMP%]{-webkit-transform:translateX(0);transform:translateX(0)}.maskmap[_ngcontent-%COMP%]   app-map[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%}}']],data:{}});function U(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,7,"div",[["class","maskmap"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,4,"app-search",[],null,[[null,"doOpen"]],(function(l,n,t){var e=!0;return"doOpen"===n&&(e=!1!==l.component.getOpen(t)&&e),e}),M,C)),e.Eb(512,null,u.q,u.r,[e.q,e.r,e.k,e.B]),e.ob(3,278528,null,0,u.i,[u.q],{ngClass:[0,"ngClass"]},null),e.Db(4,{active:0}),e.ob(5,114688,null,0,g,[P,v],null,{doOpen:"doOpen"}),(l()(),e.pb(6,0,null,null,1,"app-map",[],null,null,null,T,I)),e.ob(7,245760,null,0,j,[P,v],null,null)],(function(l,n){var t=l(n,4,0,n.component.isOpen);l(n,3,0,t),l(n,5,0),l(n,7,0)}),null)}function G(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-root",[],null,null,null,U,N)),e.ob(1,49152,null,0,o,[],null,null)],null,null)}var A=e.lb("app-root",o,G,{},{},[]),q=t("iInd");class B{}var X=e.mb(a,[o],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[i.a,A,r.b,r.a]],[3,e.j],e.v]),e.zb(5120,e.s,e.jb,[[3,e.s]]),e.zb(4608,u.l,u.k,[e.s,[2,u.t]]),e.zb(5120,e.fb,e.kb,[e.x]),e.zb(5120,e.c,e.gb,[]),e.zb(5120,e.q,e.hb,[]),e.zb(5120,e.r,e.ib,[]),e.zb(4608,p.b,p.k,[u.d]),e.zb(6144,e.E,null,[p.b]),e.zb(4608,p.e,p.g,[]),e.zb(5120,p.c,(function(l,n,t,e,a,o,i,s){return[new p.i(l,n,t),new p.n(e),new p.m(a,o,i,s)]}),[u.d,e.x,e.z,u.d,u.d,p.e,e.Y,[2,p.f]]),e.zb(4608,p.d,p.d,[p.c,e.x]),e.zb(135680,p.l,p.l,[u.d]),e.zb(4608,p.j,p.j,[p.d,p.l,e.c]),e.zb(6144,e.C,null,[p.j]),e.zb(6144,p.o,null,[p.l]),e.zb(4608,e.K,e.K,[e.x]),e.zb(4608,_.h,_.n,[u.d,e.z,_.l]),e.zb(4608,_.o,_.o,[_.h,_.m]),e.zb(5120,_.a,(function(l){return[l]}),[_.o]),e.zb(4608,_.k,_.k,[]),e.zb(6144,_.i,null,[_.k]),e.zb(4608,_.g,_.g,[_.i]),e.zb(6144,_.b,null,[_.g]),e.zb(4608,_.f,_.j,[_.b,e.p]),e.zb(4608,_.c,_.c,[_.f]),e.zb(5120,q.a,q.w,[q.k]),e.zb(4608,q.d,q.d,[]),e.zb(6144,q.f,null,[q.d]),e.zb(135680,q.n,q.n,[q.k,e.u,e.i,e.p,q.f]),e.zb(4608,q.e,q.e,[]),e.zb(5120,q.B,q.s,[q.k,u.o,q.g]),e.zb(5120,q.h,q.z,[q.x]),e.zb(5120,e.b,(function(l){return[l]}),[q.h]),e.zb(4608,s.d,s.d,[]),e.zb(1073742336,u.c,u.c,[]),e.zb(1024,e.l,p.p,[]),e.zb(1024,e.w,(function(){return[q.r()]}),[]),e.zb(512,q.x,q.x,[e.p]),e.zb(1024,e.d,(function(l,n){return[p.q(l),q.y(n)]}),[[2,e.w],q.x]),e.zb(512,e.e,e.e,[[2,e.d]]),e.zb(131584,e.g,e.g,[e.x,e.Y,e.p,e.l,e.j,e.e]),e.zb(1073742336,e.f,e.f,[e.g]),e.zb(1073742336,p.a,p.a,[[3,p.a]]),e.zb(1073742336,_.e,_.e,[]),e.zb(1073742336,_.d,_.d,[]),e.zb(1024,q.q,q.u,[[3,q.k]]),e.zb(512,q.p,q.c,[]),e.zb(512,q.b,q.b,[]),e.zb(256,q.g,{},[]),e.zb(1024,u.h,q.t,[u.n,[2,u.a],q.g]),e.zb(512,u.g,u.g,[u.h,u.n]),e.zb(512,e.i,e.i,[]),e.zb(512,e.u,e.H,[e.i,[2,e.I]]),e.zb(1024,q.i,(function(){return[[{path:"",redirectTo:"/maskmap",pathMatch:"full"},{path:"maskmap",component:o}]]}),[]),e.zb(1024,q.k,q.v,[e.g,q.p,q.b,u.g,e.p,e.u,e.i,q.i,q.g,[2,q.o],[2,q.j]]),e.zb(1073742336,q.l,q.l,[[2,q.q],[2,q.k]]),e.zb(1073742336,B,B,[]),e.zb(1073742336,s.c,s.c,[]),e.zb(1073742336,s.a,s.a,[]),e.zb(1073742336,c.j,c.j,[]),e.zb(1073742336,a,a,[]),e.zb(256,e.W,!0,[]),e.zb(256,_.l,"XSRF-TOKEN",[]),e.zb(256,_.m,"X-XSRF-TOKEN",[])])}));Object(e.Q)(),p.h().bootstrapModuleFactory(X).catch(l=>console.error(l))},zn8P:function(l,n){function t(l){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+l+"'");throw n.code="MODULE_NOT_FOUND",n}))}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="zn8P"}},[[0,0,5]]]);