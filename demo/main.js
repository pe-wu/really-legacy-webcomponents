!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e){return e}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e,t,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultTemplateFactory=d,t.render=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d,r=n(e),i=t.__templateInstance;if(void 0!==i&&i.template===r&&i._partCallback===e.partCallback)return void i.update(e.values);i=new S(r,e.partCallback,n),t.__templateInstance=i;var o=i._clone();i.update(e.values),N(t,t.firstChild),t.appendChild(o)},t.removeNodes=t.reparentNodes=t.TemplateInstance=t.defaultPartCallback=t.NodePart=t.AttributePart=t.directiveValue=t.directive=t.getValue=t.Template=t.TemplatePart=t.SVGTemplateResult=t.TemplateResult=t.svg=t.html=t.templateCaches=void 0;var f=new Map;t.templateCaches=f;t.html=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new p(e,n,"html")};t.svg=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new h(e,n,"svg")};var p=function(){function e(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:j;s(this,e),this.strings=t,this.values=n,this.type=r,this.partCallback=i}return c(e,[{key:"getHTML",value:function(){for(var e,t,n=this.strings.length-1,r="",i=!0,o=0;o<n;o++){var a=this.strings[o];r+=a;var u=(void 0,void 0,t=(e=a).lastIndexOf(">"),e.indexOf("<",t+1)>-1?e.length:t);r+=(i=u>-1?u<a.length:i)?v:y}return r+=this.strings[n]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}();t.TemplateResult=p;var h=function(e){function t(){return s(this,t),i(this,a(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,p),c(t,[{key:"getHTML",value:function(){return"<svg>".concat(o(a(t.prototype),"getHTML",this).call(this),"</svg>")}},{key:"getTemplateElement",value:function(){var e=o(a(t.prototype),"getTemplateElement",this).call(this),n=e.content,r=n.firstChild;return n.removeChild(r),x(n,r.firstChild),e}}]),t}();function d(e){var t=f.get(e.type);void 0===t&&(t=new Map,f.set(e.type,t));var n=t.get(e.strings);return void 0===n&&(n=new g(e,e.getTemplateElement()),t.set(e.strings,n)),n}t.SVGTemplateResult=h;var y="{{lit-".concat(String(Math.random()).slice(2),"}}"),v="\x3c!--".concat(y,"--\x3e"),_=new RegExp("".concat(y,"|").concat(v)),b=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;var m=function e(t,n,r,i,o){s(this,e),this.type=t,this.index=n,this.name=r,this.rawName=i,this.strings=o};t.TemplatePart=m;var g=function e(t,n){s(this,e),this.parts=[],this.element=n;for(var r,i,o=this.element.content,a=document.createTreeWalker(o,133,null,!1),u=-1,l=0,c=[];a.nextNode();){u++,r=i;var f=i=a.currentNode;if(1===f.nodeType){if(!f.hasAttributes())continue;for(var p=f.attributes,h=0,d=0;d<p.length;d++)p[d].value.indexOf(y)>=0&&h++;for(;h-- >0;){var v=t.strings[l],g=b.exec(v)[1],P=p.getNamedItem(g),w=P.value.split(_);this.parts.push(new m("attribute",u,P.name,g,w)),f.removeAttribute(P.name),l+=w.length-1}}else if(3===f.nodeType){var O=f.nodeValue;if(O.indexOf(y)<0)continue;var k=f.parentNode,C=O.split(_),T=C.length-1;l+=T;for(var j=0;j<T;j++)k.insertBefore(""===C[j]?document.createComment(""):document.createTextNode(C[j]),f),this.parts.push(new m("node",u++));k.insertBefore(""===C[T]?document.createComment(""):document.createTextNode(C[T]),f),c.push(f)}else if(8===f.nodeType&&f.nodeValue===y){var S=f.parentNode,x=f.previousSibling;null===x||x!==r||x.nodeType!==Node.TEXT_NODE?S.insertBefore(document.createComment(""),f):u--,this.parts.push(new m("node",u++)),c.push(f),null===f.nextSibling?S.insertBefore(document.createComment(""),f):u--,i=r,l++}}for(var N=0;N<c.length;N++){var A=c[N];A.parentNode.removeChild(A)}};t.Template=g;var P=function(e,t){return w(t)?(t=t(e),O):null===t?void 0:t};t.getValue=P;t.directive=function(e){return e.__litDirective=!0,e};var w=function(e){return"function"==typeof e&&!0===e.__litDirective},O={};t.directiveValue=O;var k=function(e){return null===e||!("object"===r(e)||"function"==typeof e)},C=function(){function e(t,n,r,i){s(this,e),this.instance=t,this.element=n,this.name=r,this.strings=i,this.size=i.length-1,this._previousValues=[]}return c(e,[{key:"_interpolate",value:function(e,t){for(var n=this.strings,r=n.length-1,i="",o=0;o<r;o++){i+=n[o];var a=P(this,e[t+o]);if(a&&a!==O&&(Array.isArray(a)||"string"!=typeof a&&a[Symbol.iterator])){var u=!0,s=!1,l=void 0;try{for(var c,f=a[Symbol.iterator]();!(u=(c=f.next()).done);u=!0){i+=c.value}}catch(e){s=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(s)throw l}}}else i+=a}return i+n[r]}},{key:"_equalToPreviousValues",value:function(e,t){for(var n=t;n<t+this.size;n++)if(this._previousValues[n]!==e[n]||!k(e[n]))return!1;return!0}},{key:"setValue",value:function(e,t){if(!this._equalToPreviousValues(e,t)){var n,r=this.strings;2===r.length&&""===r[0]&&""===r[1]?(n=P(this,e[t]),Array.isArray(n)&&(n=n.join(""))):n=this._interpolate(e,t),n!==O&&this.element.setAttribute(this.name,n),this._previousValues=e}}}]),e}();t.AttributePart=C;var T=function(){function e(t,n,r){s(this,e),this.instance=t,this.startNode=n,this.endNode=r,this._previousValue=void 0}return c(e,[{key:"setValue",value:function(e){if((e=P(this,e))!==O)if(k(e)){if(e===this._previousValue)return;this._setText(e)}else e instanceof p?this._setTemplateResult(e):Array.isArray(e)||e[Symbol.iterator]?this._setIterable(e):e instanceof Node?this._setNode(e):void 0!==e.then?this._setPromise(e):this._setText(e)}},{key:"_insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"_setNode",value:function(e){this._previousValue!==e&&(this.clear(),this._insert(e),this._previousValue=e)}},{key:"_setText",value:function(e){var t=this.startNode.nextSibling;e=void 0===e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._setNode(document.createTextNode(e)),this._previousValue=e}},{key:"_setTemplateResult",value:function(e){var t,n=this.instance._getTemplate(e);this._previousValue&&this._previousValue.template===n?t=this._previousValue:(t=new S(n,this.instance._partCallback,this.instance._getTemplate),this._setNode(t._clone()),this._previousValue=t),t.update(e.values)}},{key:"_setIterable",value:function(t){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);var n=this._previousValue,r=0,i=!0,o=!1,a=void 0;try{for(var u,s=t[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var l=u.value,c=n[r];if(void 0===c){var f=this.startNode;if(r>0)f=n[r-1].endNode=document.createTextNode(""),this._insert(f);c=new e(this.instance,f,this.endNode),n.push(c)}c.setValue(l),r++}}catch(e){o=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(o)throw a}}if(0===r)this.clear(),this._previousValue=void 0;else if(r<n.length){var p=n[r-1];n.length=r,this.clear(p.endNode.previousSibling),p.endNode=this.endNode}}},{key:"_setPromise",value:function(e){var t=this;this._previousValue=e,e.then(function(n){t._previousValue===e&&t.setValue(n)})}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;N(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}();t.NodePart=T;var j=function(e,t,n){if("attribute"===t.type)return new C(e,n,t.name,t.strings);if("node"===t.type)return new T(e,n,n.nextSibling);throw new Error("Unknown part type ".concat(t.type))};t.defaultPartCallback=j;var S=function(){function e(t,n,r){s(this,e),this._parts=[],this.template=t,this._partCallback=n,this._getTemplate=r}return c(e,[{key:"update",value:function(e){var t=0,n=!0,r=!1,i=void 0;try{for(var o,a=this._parts[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var u=o.value;void 0===u.size?(u.setValue(e[t]),t++):(u.setValue(e,t),t+=u.size)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}},{key:"_clone",value:function(){var e=document.importNode(this.template.element.content,!0),t=this.template.parts;if(t.length>0)for(var n=document.createTreeWalker(e,133,null,!1),r=-1,i=0;i<t.length;i++){for(var o=t[i];r<o.index;)r++,n.nextNode();this._parts.push(this._partCallback(this,o,n.currentNode))}return e}}]),e}();t.TemplateInstance=S;var x=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=t;i!==n;){var o=i.nextSibling;e.insertBefore(i,r),i=o}};t.reparentNodes=x;var N=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;r!==n;){var i=r.nextSibling;e.removeChild(r),r=i}};t.removeNodes=N},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dedupingMixin=void 0,n(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=0;function i(){}i.prototype.__mixinApplications,i.prototype.__mixinSet;t.dedupingMixin=function(e){var t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);var n=r++;function i(r){var i=r.__mixinSet;if(i&&i[n])return r;var o=t,a=o.get(r);a||(a=e(r),o.set(r,a));var u=Object.create(a.__mixinSet||i||null);return u[n]=!0,a.__mixinSet=u,a}return i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"render",{enumerable:!0,get:function(){return r.render}}),t.EventPart=t.PropertyPart=t.BooleanAttributePart=t.extendedPartCallback=t.svg=t.html=void 0;var r=n(1);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.html=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return new r.TemplateResult(e,n,"html",p)};t.svg=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return new r.SVGTemplateResult(e,n,"svg",p)};var p=function(e,t,n){if("attribute"===t.type){if("on-"===t.rawName.substr(0,3)){var i=t.rawName.slice(3);return new y(e,n,i)}var o=t.name.substr(t.name.length-1);if("$"===o){var a=t.name.slice(0,-1);return new r.AttributePart(e,n,a,t.strings)}if("?"===o){var u=t.name.slice(0,-1);return new h(e,n,u,t.strings)}return new d(e,n,t.rawName,t.strings)}return(0,r.defaultPartCallback)(e,t,n)};t.extendedPartCallback=p;var h=function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return c(t,r.AttributePart),u(t,[{key:"setValue",value:function(e,t){var n=this.strings;if(2!==n.length||""!==n[0]||""!==n[1])throw new Error("boolean attributes can only contain a single expression");var i=(0,r.getValue)(this,e[t]);i!==r.directiveValue&&(i?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name))}}]),t}();t.BooleanAttributePart=h;var d=function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return c(t,r.AttributePart),u(t,[{key:"setValue",value:function(e,t){var n,i=this.strings;this._equalToPreviousValues(e,t)||((n=2===i.length&&""===i[0]&&""===i[1]?(0,r.getValue)(this,e[t]):this._interpolate(e,t))!==r.directiveValue&&(this.element[this.name]=n),this._previousValues=e)}}]),t}();t.PropertyPart=d;var y=function(){function e(t,n,r){o(this,e),this.instance=t,this.element=n,this.eventName=r}return u(e,[{key:"setValue",value:function(e){var t=(0,r.getValue)(this,e);t!==this._listener&&(null==t?this.element.removeEventListener(this.eventName,this):null==this._listener&&this.element.addEventListener(this.eventName,this),this._listener=t)}},{key:"handleEvent",value:function(e){"function"==typeof this._listener?this._listener.call(this.element,e):"function"==typeof this._listener.handleEvent&&this._listener.handleEvent(e)}}]),e}();t.EventPart=y},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=function(e,t,n){return(0,r.render)(e,t,o(n))},Object.defineProperty(t,"html",{enumerable:!0,get:function(){return r.html}}),Object.defineProperty(t,"svg",{enumerable:!0,get:function(){return r.svg}}),Object.defineProperty(t,"TemplateResult",{enumerable:!0,get:function(){return r.TemplateResult}});var r=n(1);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){return function(t){var n="".concat(t.type,"--").concat(e),o=r.templateCaches.get(n);void 0===o&&(o=new Map,r.templateCaches.set(n,o));var a=o.get(t.strings);if(void 0===a){var u=t.getTemplateElement();"object"===i(window.ShadyCSS)&&window.ShadyCSS.prepareTemplate(u,e),a=new r.Template(t,u),o.set(t.strings,a)}return a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dashToCamelCase=function(e){return r[e]||(r[e]=e.indexOf("-")<0?e:e.replace(i,function(e){return e[1].toUpperCase()}))},t.camelToDashCase=function(e){return r[e]||(r[e]=e.replace(o,"-$1").toLowerCase())},n(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r={},i=/-[a-z]/g,o=/([A-Z])/g},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.microTask=t.idlePeriod=t.animationFrame=t.timeOut=void 0,n(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=0,i=0,o=[],a=0,u=document.createTextNode("");new window.MutationObserver(function(){for(var e=o.length,t=0;t<e;t++){var n=o[t];if(n)try{n()}catch(e){setTimeout(function(){throw e})}}o.splice(0,e),i+=e}).observe(u,{characterData:!0});var s={after:function(e){return{run:function(t){return window.setTimeout(t,e)},cancel:function(e){window.clearTimeout(e)}}},run:function(e,t){return window.setTimeout(e,t)},cancel:function(e){window.clearTimeout(e)}};t.timeOut=s;var l={run:function(e){return window.requestAnimationFrame(e)},cancel:function(e){window.cancelAnimationFrame(e)}};t.animationFrame=l;var c={run:function(e){return window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16)},cancel:function(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}};t.idlePeriod=c;var f={run:function(e){return u.textContent=a++,o.push(e),r++},cancel:function(e){var t=e-i;if(t>=0){if(!o[t])throw new Error("invalid async handle: "+e);o[t]=null}}};t.microTask=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropertiesChanged=void 0,n(0);var r=n(2);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=n(6).microTask,p=(0,r.dedupingMixin)(function(e){return function(t){function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=o(this,u(n).call(this))).__dataEnabled=!1,e.__dataReady=!1,e.__dataInvalid=!1,e.__data={},e.__dataPending=null,e.__dataOld=null,e.__dataInstanceProps=null,e.__serializing=!1,e._initializeProperties(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(n,e),l(n,[{key:"_createPropertyAccessor",value:function(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}},{key:"_addPropertyToAttributeMap",value:function(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){var t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}},{key:"_definePropertyAccessor",value:function(e,t){Object.defineProperty(this,e,{get:function(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}}],[{key:"createProperties",value:function(e){var t=this.prototype;for(var n in e)n in t||t._createPropertyAccessor(n)}},{key:"attributeNameForProperty",value:function(e){return e.toLowerCase()}},{key:"typeForProperty",value:function(e){}}]),l(n,[{key:"ready",value:function(){this.__dataReady=!0,this._flushProperties()}},{key:"_initializeProperties",value:function(){for(var e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}},{key:"_initializeInstanceProperties",value:function(e){Object.assign(this,e)}},{key:"_setProperty",value:function(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}},{key:"_getProperty",value:function(e){return this.__data[e]}},{key:"_setPendingProperty",value:function(e,t,n){var r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}},{key:"_invalidateProperties",value:function(){var e=this;!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,f.run(function(){e.__dataInvalid&&(e.__dataInvalid=!1,e._flushProperties())}))}},{key:"_enableProperties",value:function(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}},{key:"_flushProperties",value:function(){var e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n))}},{key:"_shouldPropertiesChange",value:function(e,t,n){return Boolean(t)}},{key:"_propertiesChanged",value:function(e,t,n){}},{key:"_shouldPropertyChange",value:function(e,t,n){return n!==t&&(n==n||t==t)}},{key:"attributeChangedCallback",value:function(e,t,r,i){t!==r&&this._attributeToProperty(e,r),a(u(n.prototype),"attributeChangedCallback",this)&&a(u(n.prototype),"attributeChangedCallback",this).call(this,e,t,r,i)}},{key:"_attributeToProperty",value:function(e,t,n){if(!this.__serializing){var r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}},{key:"_propertyToAttribute",value:function(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}},{key:"_valueToNodeAttribute",value:function(e,t,n){var r=this._serializeValue(t);void 0===r?e.removeAttribute(n):e.setAttribute(n,r)}},{key:"_serializeValue",value:function(e){switch(i(e)){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}},{key:"_deserializeValue",value:function(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}]),n}()});t.PropertiesChanged=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropertiesMixin=void 0,n(0);var r=n(2),i=n(7);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=(0,r.dedupingMixin)(function(e){var t=(0,i.PropertiesChanged)(e);function n(e){var t=Object.getPrototypeOf(e);return t.prototype instanceof o?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){var t=null;e.hasOwnProperty(JSCompiler_renameProperty("properties",e))&&e.properties&&(t=function(e){var t={};for(var n in e){var r=e[n];t[n]="function"==typeof r?{type:r}:r}return t}(e.properties)),e.__ownProperties=t}return e.__ownProperties}var o=function(e){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),u(this,l(i).apply(this,arguments))}var o,f,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(i,t),o=i,p=[{key:"finalize",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){var e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}},{key:"_finalizeClass",value:function(){var e=r(this);e&&this.createProperties(e)}},{key:"typeForProperty",value:function(e){var t=this._properties[e];return t&&t.type}},{key:"observedAttributes",get:function(){var e=this,t=this._properties;return t?Object.keys(t).map(function(t){return e.attributeNameForProperty(t)}):[]}},{key:"_properties",get:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){var e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}}],(f=[{key:"_initializeProperties",value:function(){this.constructor.finalize(),s(l(i.prototype),"_initializeProperties",this).call(this)}},{key:"connectedCallback",value:function(){s(l(i.prototype),"connectedCallback",this)&&s(l(i.prototype),"connectedCallback",this).call(this),this._enableProperties()}},{key:"disconnectedCallback",value:function(){s(l(i.prototype),"disconnectedCallback",this)&&s(l(i.prototype),"disconnectedCallback",this).call(this)}}])&&a(o.prototype,f),p&&a(o,p),i}();return o});t.PropertiesMixin=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderAttributes=function(e,t){for(var n in t){var r=!0===t[n]?"":t[n];r||""===r||0===r?e.getAttribute(n)!==r&&e.setAttribute(n,r):e.hasAttribute(n)&&e.removeAttribute(n)}},t.classString=function(e){var t=[];for(var n in e){var r=e[n];r&&t.push(n)}return t.join(" ")},t.styleString=function(e){var t=[];for(var n in e){var r=e[n];(r||0===r)&&t.push("".concat((0,i.camelToDashCase)(n),": ").concat(r))}return t.join("; ")},Object.defineProperty(t,"html",{enumerable:!0,get:function(){return a.html}}),t.LitElement=void 0;var r=n(8),i=n(5),o=n(4),a=n(3);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=l(this,f(t).apply(this,arguments))).__renderComplete=null,e.__resolveRenderComplete=null,e.__isInvalid=!1,e.__isChanging=!1,e}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,(0,r.PropertiesMixin)(HTMLElement)),n=t,(i=[{key:"ready",value:function(){this._root=this._createRoot(),c(f(t.prototype),"ready",this).call(this),this._firstRendered()}},{key:"_firstRendered",value:function(){}},{key:"_createRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"_shouldPropertiesChange",value:function(e,t,n){var r=this._shouldRender(e,t,n);return!r&&this.__resolveRenderComplete&&this.__resolveRenderComplete(!1),r}},{key:"_shouldRender",value:function(e,t,n){return!0}},{key:"_propertiesChanged",value:function(e,n,r){c(f(t.prototype),"_propertiesChanged",this).call(this,e,n,r);var i=this._render(e);i&&void 0!==this._root&&this._applyRender(i,this._root),this._didRender(e,n,r),this.__resolveRenderComplete&&this.__resolveRenderComplete(!0)}},{key:"_flushProperties",value:function(){this.__isChanging=!0,this.__isInvalid=!1,c(f(t.prototype),"_flushProperties",this).call(this),this.__isChanging=!1}},{key:"_shouldPropertyChange",value:function(e,n,r){var i=c(f(t.prototype),"_shouldPropertyChange",this).call(this,e,n,r);return i&&this.__isChanging&&console.trace("Setting properties in response to other properties changing "+"considered harmful. Setting '".concat(e,"' from ")+"'".concat(this._getProperty(e),"' to '").concat(n,"'.")),i}},{key:"_render",value:function(e){throw new Error("_render() not implemented")}},{key:"_applyRender",value:function(e,t){(0,o.render)(e,t,this.localName)}},{key:"_didRender",value:function(e,t,n){}},{key:"_requestRender",value:function(){this._invalidateProperties()}},{key:"_invalidateProperties",value:function(){this.__isInvalid=!0,c(f(t.prototype),"_invalidateProperties",this).call(this)}},{key:"renderComplete",get:function(){var e=this;return this.__renderComplete||(this.__renderComplete=new Promise(function(t){e.__resolveRenderComplete=function(n){e.__resolveRenderComplete=e.__renderComplete=null,t(n)}}),!this.__isInvalid&&this.__resolveRenderComplete&&Promise.resolve().then(function(){return e.__resolveRenderComplete(!1)})),this.__renderComplete}}])&&s(n.prototype,i),a&&s(n,a),t}();t.LitElement=h},function(e,t,n){"use strict";var r=n(9);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['<style> .mood { color: green; } </style>\n      Web Components are <span class="mood">',"</span>!"]);return o=function(){return e},e}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}console.log("Hi");var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,s(t).apply(this,arguments))}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r.LitElement),n=t,c=[{key:"properties",get:function(){return{mood:String}}}],(i=[{key:"_render",value:function(e){var t=e.mood;return(0,r.html)(o(),t)}}])&&a(n.prototype,i),c&&a(n,c),t}();customElements.define("my-element",c)}]);