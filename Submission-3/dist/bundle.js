(()=>{var t={705:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},o(t)}function i(t,e,n){return i=a()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o},i.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(p,t);var o,i,s,l,f=(o=p,i=a(),function(){var t,e=u(o);if(i){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return r(this,t)});function p(){return e(this,p),f.apply(this,arguments)}return s=p,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <div class="head-tittle">\n            <h2>NyeMeal</h2>\n            <p>Makes you sMeal</p>\n        </div>\n        '}}])&&n(s.prototype,l),Object.defineProperty(s,"prototype",{writable:!1}),p}(o(HTMLElement));customElements.define("app-bar",s)},929:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},o(t)}function i(t,e,n){return i=a()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o},i.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(p,t);var o,i,s,l,f=(o=p,i=a(),function(){var t,e=u(o);if(i){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return r(this,t)});function p(){return e(this,p),f.apply(this,arguments)}return s=p,(l=[{key:"meal",set:function(t){this._meal=t,this.render()}},{key:"render",value:function(){this.innerHTML='\n        <img class="pic-meal" src="'.concat(this._meal.strMealThumb,'" alt="Pic Meal">\n        <div class="meal-info">\n            <h2><b>').concat(this._meal.strMeal,"</b></h2>\n        </div>\n      ")}}])&&n(s.prototype,l),Object.defineProperty(s,"prototype",{writable:!1}),p}(o(HTMLElement));customElements.define("meal-item",s)},998:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},o(t)}function i(t,e,n){return i=a()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o},i.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(p,t);var o,i,s,l,f=(o=p,i=a(),function(){var t,e=u(o);if(i){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return r(this,t)});function p(){return e(this,p),f.apply(this,arguments)}return s=p,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(t){this._clickEvent=t,this.render()}},{key:"value",get:function(){return this.querySelector("#searchPainting").value}},{key:"render",value:function(){this.innerHTML='\n        <div id="search-container" class="search-container">\n            <input placeholder="search painting" id="searchPainting" type="search">\n            <button id="searchButtonPainting" type="submit">Search</button>\n        </div>\n        ',this.querySelector("#searchButtonPainting").addEventListener("click",this._clickEvent)}}])&&n(s.prototype,l),Object.defineProperty(s,"prototype",{writable:!1}),p}(o(HTMLElement));customElements.define("search-bar",s)},879:(t,e,n)=>{"use strict";n.d(e,{Z:()=>v});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(667),u=n.n(c),s=new URL(n(955),n.b),l=new URL(n(398),n.b),f=new URL(n(21),n.b),p=new URL(n(546),n.b),d=a()(o()),h=u()(s),y=u()(l),b=u()(f),m=u()(p);d.push([t.id,"app-bar {\n  padding: 16px;\n  width: 100%;\n  background-image: linear-gradient(90deg, rgb(139, 33, 0) 20%, rgba(0, 18, 68, 0));\n  color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  display:inline-flex;\n}\n\napp-bar:hover{\n  background-image: linear-gradient(90deg, rgb(107, 39, 0) 20%, rgba(26, 67, 70, 0));\n}\n\napp-bar .head-tittle{\n  float: right;\n  width: 94%;\n  margin: auto;\n} \n\napp-bar .head-tittle h2{\n  font-family: Lexend, sans-serif;\n  padding-bottom: 1px;\n}\napp-bar .head-tittle p{\n  font-size: 12px;\n  font-family: Lexend, sans-serif;\n}\n\nheader{\n  background-size: cover;\n  background-position: center;\n  animation: slide 20s infinite;\n}\n\n@keyframes slide{\n  0%{\n      background-image: url("+h+");\n  } 25%{\n      background-image: url("+y+");\n  } 50%{\n      background-image: url("+b+");\n  } 75%{\n      background-image: url("+m+");\n  } 100%{\n      background-image: url("+h+");\n  } \n}\n\nfooter{\n  padding: 16px;\n  width: 100%;\n  background-image: linear-gradient(90deg, rgb(139, 33, 0) 20%, rgba(155, 62, 0));\n  font-family: 'Lexend', sans-serif;\n  color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  text-align: center;\n}\n\nfooter:hover{\n  background-image: linear-gradient(90deg, rgb(126, 36, 0) 20%, rgb(173, 49, 0));\n}",""]);const v=d},799:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,".desc-container {\r\n    max-width: 800px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    padding: 50px;\r\n    border-radius: 5px;\r\n    top: 10px;\r\n    background-image: linear-gradient(75deg, rgb(222, 228, 227), rgb(245, 226, 217));\r\n    font-family: Lexend, sans-serif;\r\n    text-align: center;\r\n  }\r\n\r\n  .desc-container:hover{\r\n    background-image: linear-gradient(150deg, rgb(222, 228, 227), rgb(245, 226, 217));\r\n  }\r\n  \r\n  .desc-container h2{\r\n    padding-bottom: 20px;\r\n  }\r\n  \r\n  .desc-container p{\r\n    font-size: 12px;\r\n  }",""]);const c=a},976:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Aboreto&family=Lexend&family=Quicksand:wght@400;700&display=swap);"]),a.push([t.id,"meal-list {\n  margin-top: 32px;\n  width: 100%;\n  padding: 16px;\n  font-family: Lexend, sans-serif;\n  display:block;\n}\n\nmeal-list > .placeholder {\n  font-weight: lighter;\n  color: rgba(0, 0, 0, 0.5);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmeal-item {\n  margin-bottom: 18px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  overflow: hidden;\n  display: block;\n}\n\nmeal-item .pic-meal {\n  width: 100%;\n  max-height: 300px;\n  object-fit: cover;\n  object-position: center;\n}\n\n.meal-info {\n  padding: 24px;\n}\n\n.meal-info > h2 {\n  font-weight: lighter;\n}\n\n.meal-info > p {\n  margin-top: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 10;\n}",""]);const c=a},592:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,".search-container {\n  max-width: 800px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  border-radius: 5px;\n  display: flex;\n  position: sticky;\n  top: 10px;\n  background-color: white;\n}\n\n.search-container > input {\n  width: 75%;\n  padding: 16px;\n  border: 0;\n  border-bottom: 1px solid rgb(160, 92, 60);\n  font-weight: bold;\n  font-family: Lexend, sans-serif;\n}\n\n.search-container > input:focus {\n  outline: 0;\n  border-bottom: 1px solid rgb(160, 92, 60);\n}\n\n.search-container > input:focus::placeholder {\n  font-weight: bold;\n}\n\n.search-container > input::placeholder {\n  color: rgb(160, 92, 60);\n  font-weight: normal;\n}\n\n.search-container > button {\n  width: 23%;\n  cursor: pointer;\n  margin-left: auto;\n  padding: 16px;\n  background-image: linear-gradient(90deg, rgb(139, 33, 0) 20%, rgba(155, 62, 0));\n  border-radius: 5px;\n  font-family: Lexend, sans-serif;\n  color: white;\n  border: 0;\n  text-transform: uppercase;\n}\n\n.search-container > button:hover{\n  background-image: linear-gradient(90deg, rgb(126, 36, 0) 20%, rgb(173, 49, 0));\n}\n\n@media screen and (max-width: 550px) {\n  .search-container{\n    flex-direction: column;\n    position: static;\n  }\n\n  .search-container > input {\n    width: 100%;\n    margin-bottom: 12px;\n  }\n\n  .search-container > button {\n    width: 100%;\n  }\n}",""]);const c=a},890:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(879),u=n(799),s=n(592),l=n(976),f=a()(o());f.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Aboreto&family=Lexend&family=Quicksand:wght@400;700&display=swap);"]),f.i(c.Z),f.i(u.Z),f.i(s.Z),f.i(l.Z),f.push([t.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n}\n\nmain {\n  width: 90%;\n  max-width: 800px;\n  margin: 32px auto;\n}\n",""]);const p=f},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{"use strict";t.exports=function(t){return t[1]}},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?h:p,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",y={};function b(){}function m(){}function v(){}var g={};u(g,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==n&&r.call(x,i)&&(g=x);var O=v.prototype=b.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=v,u(O,"constructor",v),u(v,"constructor",m),m.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},j(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(O),u(O,c,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var p=n(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var h=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var u=r(t,o),s=0;s<i.length;s++){var l=n(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},955:(t,e,n)=>{"use strict";t.exports=n.p+"cc4768f16d5bc1af70d7.png"},398:(t,e,n)=>{"use strict";t.exports=n.p+"8467e9d8a4af7468b0db.png"},21:(t,e,n)=>{"use strict";t.exports=n.p+"e9cd8fb284b29bb60e6e.png"},546:(t,e,n)=>{"use strict";t.exports=n.p+"6d54c60b89b90004a14a.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";n(666);var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),u=n.n(c),s=n(216),l=n.n(s),f=n(589),p=n.n(f),d=n(890),h={};function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t){var e="function"==typeof Map?new Map:void 0;return g=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return w(t,arguments,j(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),O(r,t)},g(t)}function w(t,e,n){return w=x()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&O(o,n.prototype),o},w.apply(null,arguments)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}h.styleTagTransform=p(),h.setAttributes=u(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals,n(705),n(929);var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(a,t);var e,n,r,o,i=(e=a,n=x(),function(){var t,r=j(e);if(n){var o=j(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return v(this,t)});function a(){return b(this,a),i.apply(this,arguments)}return r=a,(o=[{key:"meals",set:function(t){this._meals=t,this.render()}},{key:"renderError",value:function(t){this.innerHTML="",this.innerHTML+='\n        <h3 class="placeholder">'.concat(t,"</h3>\n        ")}},{key:"render",value:function(){var t=this;this.innerHTML="",this._meals.forEach((function(e){var n=document.createElement("meal-item");n.meal=e,t.appendChild(n)}))}}])&&m(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),a}(g(HTMLElement));function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}customElements.define("meal-list",E),n(998);const _=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"searchMeal",value:function(t){return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=".concat(t)).then((function(t){return t.json()})).then((function(e){return e.meals?Promise.resolve(e.meals):Promise.reject("".concat(t," is not found"))}))}}],null&&k(e.prototype,null),n&&k(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("search-bar"),e=document.querySelector("meal-list"),n=function(t){e.meals=t},r=function(t){e.renderError(t)};t.clickEvent=function(){_.searchMeal(t.value).then(n).catch(r)}}))})()})();