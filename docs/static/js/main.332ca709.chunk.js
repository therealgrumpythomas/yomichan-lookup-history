(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),u=n(8),i=n(3),l=n(2),s=(n(18),n(1)),f=n(7);function h(){h=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(_){i=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,c=Object.create(o.prototype),u=new j(a||[]);return r(c,"_invoke",{value:x(e,n,u)}),c}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=l;var f={};function m(){}function d(){}function v(){}var p={};i(p,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==t&&n.call(g,o)&&(p=g);var E=v.prototype=m.prototype=Object.create(p);function w(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function c(){return new t(function(a,c){!function r(a,o,c,u){var i=s(e[a],e,o);if("throw"!==i.type){var l=i.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,c,u)},function(e){r("throw",e,c,u)}):t.resolve(f).then(function(e){l.value=e,c(l)},function(e){return r("throw",e,c,u)})}u(i.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}})}function x(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===f)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var i=s(e,t,n);if("normal"===i.type){if(r=n.done?"completed":"suspendedYield",i.arg===f)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(r="completed",n.method="throw",n.arg=i.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=v,r(E,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=i(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,i(e,u,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},w(b.prototype),i(b.prototype,c,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new b(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},w(E),i(E,u,"Generator"),i(E,o,function(){return this}),i(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),i=n.call(o,"finallyLoc");if(u&&i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function m(){return(m=Object(f.a)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e,t){window.hydrate=function(t){var n=t.lookups.reduce(function(e,n){var r=e.findIndex(function(e){return e.text===n.text}),a=t.sources[n.sourceId]?t.sources[n.sourceId].label:"",o=(n.sentence||"").trim();return-1===r?e.push({text:n.text,amount:1,sources:(a||"").trim().length>0?new Set([a]):new Set([]),sentences:o.length>0?new Set([o]):new Set([]),creationDates:[n.created]}):(e[r].amount++,a&&e[r].sources.add(a),o.length>0&&e[r].sentences.add(n.sentence),e[r].creationDates.push(n.created)),e},[]);n.sort(d);var r=n.slice(0,1e3);e({lookups:r,sources:t.sources})}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function d(e,t){return e.amount>t.amount?-1:e.amount<t.amount?1:0}function v(e){var t=e.lookups,n=e.onClick;return a.a.createElement("div",{className:"card-grid"},t.map(function(e){return a.a.createElement(p,{key:e.text,lookup:e,onClick:n})}))}function p(e){var t=e.lookup,n=e.onClick;return a.a.createElement("div",{className:"card-grid-item",onClick:function(){n(t)}},a.a.createElement("div",{className:"card-grid-item-contents"},t.text,":",t.amount))}function y(e){var t=e.activeSource,n=e.sources,r=e.dateQueryValues,o=e.activeDateQueryValue,c=e.onChange,u=e.textQuery;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"custom-grid"},a.a.createElement("input",{className:"col-8",defaultValue:u,type:"search",id:"search",name:"search",placeholder:"Search",onChange:function(e){var n=e.currentTarget.value;c(t,o,n)}}),a.a.createElement("select",{className:"col-4",onChange:function(e){var n=e.currentTarget.value,a=r.find(function(e){return e.value===n});c(t,a,u)},defaultValue:o.value},r.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.label)}))),a.a.createElement("details",null,a.a.createElement("summary",null,"More filter options"),a.a.createElement("label",{htmlFor:"source"},"Source"),a.a.createElement("select",{id:"source",onChange:function(e){var t=e.currentTarget.value,r=n.find(function(e){return e.label===t});c(r||null,o,u)},defaultValue:t?t.label:""},a.a.createElement("option",{value:""},"All"),n.map(function(e){return a.a.createElement("option",{key:e.label,value:e.label},e.label)}))))}var g=function(e){var t=e.item;if(!t.sentences)return a.a.createElement("h3",{"aria-busy":"true"});if(t.sentences.size>0){var n=t.sentences.values().next();if(n.value.length>0)return a.a.createElement("h3",{dangerouslySetInnerHTML:{__html:n.value}})}return a.a.createElement("h3",null,"No sentences found")},E=function(e){var t=e.item,n=Array.from(t.sentences).slice(1);return 0===n.length?a.a.createElement(a.a.Fragment,null):a.a.createElement("div",null,a.a.createElement("details",null,a.a.createElement("summary",null,"Show ",n.length," more sentences"),a.a.createElement("ul",null,n.map(function(e,t){return a.a.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:e}})}))))},w=function(e){var t=e.item,n=Array.from(t.sources);return a.a.createElement("details",{open:!0},a.a.createElement("summary",null,"Show ",n.length," sources"),a.a.createElement("ul",null,n.map(function(e,t){return a.a.createElement("li",{key:t},e)})))},b=function(e){var t=e.selectedItem,n=e.goBack,r=e.onDelete,o=e.onEdit;return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("button",{className:"secondary outline",onClick:function(){return n()}},"Back")),a.a.createElement("article",{id:"example-sentences"},a.a.createElement("hgroup",null,a.a.createElement("h2",null,t.text),a.a.createElement(g,{item:t})),a.a.createElement(E,{item:t}),a.a.createElement(w,{item:t}),a.a.createElement("h3",null,"Links"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://jpdb.io/search?q=".concat(t.text,"&lang=english#a"),target:"_blank"},"jpdb")))),a.a.createElement("button",{className:"secondary",onClick:function(){var e=prompt("Edit ".concat(t.text),t.text);null!==e&&t.text!==e&&0!==(e=e.trim()).length&&o(t,e)}},"Edit"),a.a.createElement("button",{className:"secondary",onClick:function(){return r(t)}},"Delete"))},x={label:"Last week",value:"week",days:7},k=[{label:"Last day",value:"day",days:1},x,{label:"Last month",value:"month",days:31},{label:"Last year",value:"year",days:365}];function L(e,t){return e.amount>t.amount?-1:e.amount<t.amount?1:0}var O=Object(s.atom)(null),j=Object(s.atom)({source:null,text:"",date:x,deleted:[]}),S=Object(s.atom)(null),N=Object(s.atom)(function(e){var t=e(S),n=e(j);return t?{lookups:function(e,t){var n=t.sourceQuery&&t.sourceQuery.length>0,r=t.textQuery&&t.textQuery.length>0,a=new Date,o=a.setDate(a.getDate()-t.dateQuery.days),c=e.reduce(function(e,a){var c=!1;if(t.deleted.indexOf(a.text)>-1)return e;if(n&&t.sourceQuery&&!(c=a.sources.has(t.sourceQuery)))return e;if(!(c=!!a.creationDates.find(function(e){return e>=o})))return e;if(r&&t.textQuery&&!(c=a.text.indexOf(t.textQuery)>-1))return e;if(c){var u=new Date,i=u.setDate(u.getDate()-t.dateQuery.days);a.amount=a.creationDates.reduce(function(e,t){return t>=i?e+1:e},0),e.push(a)}return e},[]);return c.sort(L),c}(t.lookups,{dateQuery:n.date,sourceQuery:n.source?n.source.label:null,textQuery:n.text,deleted:n.deleted}),sources:t.sources}:null});var _=function(){var e=Object(s.useAtomValue)(N),t=Object(s.useSetAtom)(S),n=Object(s.useAtom)(O),o=Object(l.a)(n,2),c=o[0],f=o[1],h=Object(s.useAtom)(j),d=Object(l.a)(h,2),p=d[0],g=d[1];if(Object(r.useEffect)(function(){(function(){return m.apply(this,arguments)})().then(function(e){t(e)})},[t]),null===e)return a.a.createElement(a.a.Fragment,null);var E=e.lookups,w=e.sources;return c?a.a.createElement("div",{className:"container"},a.a.createElement(b,{selectedItem:c,onDelete:function(e){confirm("Delete all entries with the text ".concat(e.text,"?"))&&(window.postMessage("deleteYomichanHistoryItem:".concat(e.text)),g(Object(i.a)({},p,{deleted:[].concat(Object(u.a)(p.deleted),[e.text])})),f(null))},onEdit:function(e,t){window.postMessage("normalizeYomichanHistory:--".concat(e.text,"--++").concat(t,"++")),f(Object(i.a)({},c,{text:t}))},goBack:function(){f(null)}})):a.a.createElement("main",{className:"container"},a.a.createElement("div",{className:"header"},a.a.createElement(y,{activeSource:p.source,activeDateQueryValue:p.date,sources:w,dateQueryValues:k,textQuery:p.text,onChange:function(e,t,n){g({source:e,date:t,text:n,deleted:[]})}}),a.a.createElement(v,{lookups:E,onClick:function(e){f(e)}})))},Q=(n(21),n(23),function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,26)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)})});c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(_,null))),Q()},9:function(e,t,n){e.exports=n(25)}},[[9,3,2]]]);
//# sourceMappingURL=main.332ca709.chunk.js.map