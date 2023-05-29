/*! For license information please see 877.6da6adbf.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[877],{877:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var n,o,i,a=r(683),c=r(439),u=r(689),s=r(87),l=r(565),h=r(791),f=r(381),p=r(168),v=r(924),d=v.ZP.div(n||(n=(0,p.Z)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n"]))),g=v.ZP.img(o||(o=(0,p.Z)(["\n    /* width: 320px; */\n    height: 320px;\n    margin-right: 20px;\n"]))),y=r(184),m=function(t){var e=t.movieDetails,r=e.original_title,n=e.overview,o=e.genres,i=e.poster_path,a=e.scoreToFixed;return(0,y.jsxs)(d,{children:[(0,y.jsx)("div",{children:(0,y.jsx)(g,{src:i?"https://image.tmdb.org/t/p/w300".concat(i):"http://www.suryalaya.org/images/no_image.jpg",loading:"lazy",alt:"movie poster"})}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h2",{children:r}),(0,y.jsxs)("p",{children:["User score: ",a,"%"]}),(0,y.jsx)("h4",{children:"Overview"}),(0,y.jsx)("p",{children:n}),(0,y.jsx)("h4",{children:"Genre"}),o?o.flatMap((function(t){return t.name})).toString().replaceAll(","," "):"no information"]})]})},x=(0,v.ZP)(s.rU)(i||(i=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),w=r(128),j=function(t){var e=t.to,r=t.children;return(0,y.jsxs)(x,{to:e,children:[(0,y.jsx)(w.jTe,{size:"16"}),r]})},b=function(){var t,e,r=(0,u.UO)().moviId,n=(0,h.useState)([]),o=(0,c.Z)(n,2),i=o[0],p=o[1],v=(0,h.useState)(!1),d=(0,c.Z)(v,2),g=d[0],x=d[1],w=(0,u.TH)(),b=null!==(t=null===(e=w.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/";return(0,h.useEffect)((function(){p([]),x(!0);try{(0,l.Pg)(r).then((function(t){var e=t.original_title,r=t.overview,n=t.genres,o=t.poster_path,i=t.vote_average,a={original_title:e,overview:r,genres:n,poster_path:o,vote_average:i,score:10*i,scoreToFixed:(10*i).toFixed(2)};p(a),x(!1)}))}catch(t){console.log(t)}}),[r]),(0,y.jsxs)(y.Fragment,{children:[g&&(0,y.jsx)(f.Z,{}),!g&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j,{to:b,children:"Back"}),(0,y.jsx)(m,{movieDetails:i}),(0,y.jsx)("p",{children:"Additional information"}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:(0,y.jsx)(s.rU,{to:"cast",state:(0,a.Z)({},w.state),children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(s.rU,{to:"reviews",state:(0,a.Z)({},w.state),children:"Reviews"})})]}),(0,y.jsx)(u.j3,{})]})]})}},565:function(t,e,r){r.d(e,{PX:function(){return h},Pg:function(){return f},XT:function(){return d},tx:function(){return v},zv:function(){return p}});var n=r(683),o=r(861),i=r(243);function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(I){s=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new E(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=l;var f={};function p(){}function v(){}function d(){}var g={};s(g,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(O([])));m&&m!==e&&r.call(m,i)&&(g=m);var x=d.prototype=p.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=d,n(x,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(j.prototype),s(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,u,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var c=function(t){return"https://api.themoviedb.org/3/movie/".concat(t)},u=function(t){return"".concat(c(t),"/credits")},s=function(t){return"".concat(c(t),"/reviews")},l={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDZlZWIzY2M5YTU0Zjg0NWVmMTQyNDcwZjM0OTcxNSIsInN1YiI6IjY0NzBiMTFiYzVhZGE1MDBhODJlMDQwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XHf675e3Eths5Ay6hHyrp6Ll1h90wx-tMZ59ExernBc"}},h=function(){var t=(0,o.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day",l).then((function(t){return t.data}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,o.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get(c(e),l).then((function(t){return t.data}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,o.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get(u(e),l).then((function(t){return t.data}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,o.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get(s(e),l).then((function(t){return t.data.results}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)(a().mark((function t(e){var r,o,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={url:"https://api.themoviedb.org/3/search/movie",params:{query:"".concat(e),include_adult:"false",language:"en-US",page:"1"}},o=(0,n.Z)((0,n.Z)({},l),r),t.next=4,i.Z.request(o).then((function(t){return t.data.results}));case 4:return c=t.sent,t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=877.6da6adbf.chunk.js.map