(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),c=n.n(o),u=n(2),l=n(4),i=n(5),s=(n(19),n(1)),f=n(9);function m(){m=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,n){return e[t]=n}}function i(e,t,n,a){var o=t&&t.prototype instanceof d?t:d,c=Object.create(o.prototype),u=new j(a||[]);return r(c,"_invoke",{value:x(e,n,u)}),c}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=i;var f={};function d(){}function h(){}function p(){}var v={};l(v,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==t&&n.call(g,o)&&(v=g);var w=p.prototype=d.prototype=Object.create(v);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function c(){return new t(function(a,c){!function r(a,o,c,u){var l=s(e[a],e,o);if("throw"!==l.type){var i=l.arg,f=i.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,c,u)},function(e){r("throw",e,c,u)}):t.resolve(f).then(function(e){i.value=e,c(i)},function(e){return r("throw",e,c,u)})}u(l.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}})}function x(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===f)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=p,r(w,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},E(b.prototype),l(b.prototype,c,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new b(i(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(w),l(w,u,"Generator"),l(w,o,function(){return this}),l(w,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(u&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function d(){return(d=Object(f.a)(m().mark(function e(){return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e,t){if(window.getLookups)r(window.getLookups());else var n=window.setInterval(function(){window.getLookups&&(window.clearInterval(n),r(window.getLookups()))},200);function r(t){var n=t.lookups.reduce(function(e,n){var r=e.findIndex(function(e){return e.text===n.text}),a=t.sources[n.sourceId]?t.sources[n.sourceId].label:"",o=(n.sentence||"").trim();return-1===r?e.push({text:n.text,amount:1,sources:(a||"").trim().length>0?new Set([a]):new Set([]),sentences:o.length>0?new Set([o]):new Set([]),creationDates:[n.created]}):(e[r].amount++,a&&e[r].sources.add(a),o.length>0&&e[r].sentences.add(n.sentence),e[r].creationDates.push(n.created)),e},[]);n.sort(h);var r=n.slice(0,1e3);e({lookups:r,sources:t.sources})}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e,t){return e.amount>t.amount?-1:e.amount<t.amount?1:0}var p=n(3);function v(e){var t=e.lookups,n=e.onClick;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"card-grid"},t.map(function(e){return a.a.createElement(y,{key:e.text,lookup:e,onClick:n})})))}function y(e){for(var t,n=e.lookup,r=e.onClick,o=n.sentences.values(),c=0;!t&&c<n.sentences.size;){var u=o.next().value;u&&u!==n.text&&(t=u),c++}return a.a.createElement("div",{className:"card-grid-item",onClick:function(){r(n)}},a.a.createElement("div",{className:"card-grid-item-contents"},a.a.createElement("div",null,a.a.createElement("div",null,n.text)),a.a.createElement("p",{className:"muted",dangerouslySetInnerHTML:{__html:p.sanitize(t)}})),a.a.createElement("div",null,a.a.createElement("sup",{className:"sup muted"},n.amount)))}function g(e){var t=e.activeSource,n=e.sources,r=e.dateQueryValues,o=e.activeDateQueryValue,c=e.onChange,u=e.textQuery;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"custom-grid"},a.a.createElement("input",{className:"col-8",defaultValue:u,type:"search",id:"search",name:"search",placeholder:"Search",onChange:function(e){var n=e.currentTarget.value;c(t,o,n)}}),a.a.createElement("select",{className:"col-4",onChange:function(e){var n=e.currentTarget.value,a=r.find(function(e){return e.value===n});c(t,a,u)},defaultValue:o.value},r.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.label)}))),a.a.createElement("details",null,a.a.createElement("summary",null,"More filter options"),a.a.createElement("label",{htmlFor:"source"},"Source"),a.a.createElement("select",{id:"source",onChange:function(e){var t=e.currentTarget.value,r=n.find(function(e){return e.label===t});c(r||null,o,u)},defaultValue:t?t.label:""},a.a.createElement("option",{value:""},"All sources"),n.map(function(e){return a.a.createElement("option",{key:e.label,value:e.label},e.label)}))))}var w=function(e){var t=e.item;if(!t.sentences)return a.a.createElement("h3",{"aria-busy":"true"});if(t.sentences.size>0){var n=t.sentences.values().next();if(n.value.length>0)return a.a.createElement("h3",{dangerouslySetInnerHTML:{__html:p.sanitize(n.value)}})}return a.a.createElement("h3",null,"No sentences found")},E=function(e){var t=e.item,n=Array.from(t.sentences).slice(1);return 0===n.length?a.a.createElement(a.a.Fragment,null):a.a.createElement("div",null,a.a.createElement("details",null,a.a.createElement("summary",null,"Show ",n.length," more sentences"),a.a.createElement("ul",null,n.map(function(e,t){return a.a.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:p.sanitize(e)}})}))))},b=function(e){var t=e.item,n=Array.from(t.sources);return a.a.createElement("details",{open:!1},a.a.createElement("summary",null,"Show ",n.length," sources"),a.a.createElement("ul",null,n.map(function(e,t){return a.a.createElement("li",{key:t},e)})))},x=function(e){var t=e.selectedItem,n=e.goBack,o=e.onDelete,c=e.onEdit;return Object(r.useEffect)(function(){window.scrollTo({top:0,behavior:"auto"})},[]),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("button",{className:"secondary outline",onClick:function(){return n()}},"Back")),a.a.createElement("article",{id:"example-sentences"},a.a.createElement("hgroup",null,a.a.createElement("h2",null,t.text),a.a.createElement(w,{item:t})),a.a.createElement(E,{item:t}),a.a.createElement(b,{item:t}),a.a.createElement("h3",null,"Links"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://jpdb.io/search?q=".concat(t.text,"&lang=english#a"),target:"_blank"},"jpdb")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://massif.la/ja/search?q=".concat(t.text),target:"_blank"},"More example sentences"))),a.a.createElement("button",{className:"secondary",onClick:function(){var e=prompt("Edit ".concat(t.text),t.text);null!==e&&t.text!==e&&0!==(e=e.trim()).length&&c(t,e)}},"Edit"),a.a.createElement("button",{className:"secondary",onClick:function(){return o(t)}},"Delete")))},k={label:"Last week",value:"week",days:7},L=[{label:"Last day",value:"day",days:1},k,{label:"Last month",value:"month",days:31},{label:"Last year",value:"year",days:365}];function O(e,t){return e.amount>t.amount?-1:e.amount<t.amount?1:0}var j=Object(s.atom)(null),S=Object(s.atom)({source:null,text:"",date:k,deleted:[],rangeStepSize:30,range:[0,30]}),N=Object(s.atom)(null),_=Object(s.atom)(function(e){var t=e(N),n=e(S);if(!t)return null;var r=function(e,t){var n=t.sourceQuery&&t.sourceQuery.length>0,r=t.textQuery&&t.textQuery.length>0,a=new Date,o=a.setDate(a.getDate()-t.dateQuery.days),c=e.reduce(function(e,a){var c=!1;if(t.deleted.indexOf(a.text)>-1)return e;if(n&&t.sourceQuery&&!(c=a.sources.has(t.sourceQuery)))return e;if(!(c=!!a.creationDates.find(function(e){return e>=o})))return e;if(r&&t.textQuery&&!(c=a.text.indexOf(t.textQuery)>-1))return e;if(c){var u=new Date,l=u.setDate(u.getDate()-t.dateQuery.days);a.amount=a.creationDates.reduce(function(e,t){return t>=l?e+1:e},0),e.push(a)}return e},[]);return c.sort(O),{lookups:c.slice(Math.min.apply(Math,Object(u.a)(t.range)),Math.max.apply(Math,Object(u.a)(t.range))),total:c.length}}(t.lookups,{dateQuery:n.date,sourceQuery:n.source?n.source.label:null,textQuery:n.text,deleted:n.deleted,range:n.range}),a=r.lookups,o=r.total;return{lookups:a,sources:t.sources,totalLookups:o}});var C=function(e){var t=Math.max.apply(Math,Object(u.a)(e.queryParams.range)),n=e.totalLookups-t;if(n<=0)return a.a.createElement(a.a.Fragment,null);var r="Load ".concat(e.queryParams.rangeStepSize," more");return n<e.queryParams.rangeStepSize&&(r="Load remaining ".concat(n)),a.a.createElement("button",{className:"secondary",onClick:function(){return e.onLoadMore()}},r)};var D=function(){var e=Object(s.useAtomValue)(_),t=Object(s.useSetAtom)(N),n=Object(s.useAtom)(j),o=Object(i.a)(n,2),c=o[0],f=o[1],m=Object(s.useAtom)(S),h=Object(i.a)(m,2),p=h[0],y=h[1];if(Object(r.useEffect)(function(){(function(){return d.apply(this,arguments)})().then(function(e){t(e)})},[t]),null===e)return a.a.createElement(a.a.Fragment,null);var w=e.lookups,E=e.sources,b=e.totalLookups;return c?a.a.createElement(x,{selectedItem:c,onDelete:function(e){confirm("Delete all entries with the text ".concat(e.text,"?"))&&(window.postMessage("deleteYomichanHistoryItem:".concat(e.text)),y(Object(l.a)({},p,{deleted:[].concat(Object(u.a)(p.deleted),[e.text])})),f(null))},onEdit:function(e,t){window.postMessage("normalizeYomichanHistory:--".concat(e.text,"--++").concat(t,"++")),f(Object(l.a)({},c,{text:t}))},goBack:function(){f(null)}}):a.a.createElement("div",{className:"header"},a.a.createElement(g,{activeSource:p.source,activeDateQueryValue:p.date,sources:E,dateQueryValues:L,textQuery:p.text,onChange:function(e,t,n){y(Object(l.a)({},p,{source:e,date:t,text:n,deleted:[],range:[0,p.rangeStepSize]}))}}),a.a.createElement("details",null,a.a.createElement("summary",null,"Actions"),a.a.createElement("button",{onClick:function(e){return function(){if(window.getLookups){var e=window.getLookups(),t=new Date,n=document.createElement("a"),r=new Blob([JSON.stringify(e)],{type:"octet/stream"}),a=window.URL.createObjectURL(r);n.href=a,n.target="_blank",n.download="lookups-export-".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDate(),".json"),n.click(),window.URL.revokeObjectURL(a)}}()}},"Export"),a.a.createElement("label",{htmlFor:"file"},"File browser",a.a.createElement("input",{type:"file",id:"file",name:"file",onChange:function(e){if(e.target.files){var t=e.target.files[0],n=new FileReader;n.onload=function(e){var t;window.getLookups&&e.target&&e.target.result&&confirm("This action will override all the existing data. Are you sure?")&&(t=JSON.parse(e.target.result.toString()),window.importLookups&&(window.importLookups(t),window.location.reload()))},n.readAsText(t)}}}))),a.a.createElement(v,{lookups:w,onClick:function(e){f(e)}}),a.a.createElement("div",null,a.a.createElement(C,{totalLookups:b,queryParams:p,onLoadMore:function(){y(Object(l.a)({},p,{range:[0,p.range[1]+p.rangeStepSize]}))}})))},F=(n(22),n(24),function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,27)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)})});c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(D,null))),F()}},[[10,3,2]]]);
//# sourceMappingURL=main.0653a58e.chunk.js.map