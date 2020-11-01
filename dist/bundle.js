!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Marker=e():t.Marker=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=n(1).i18n;n(3).toString();var s=Object.freeze({colors:{default:"cdx-marker",blue:"cdx-marker__blue",red:"cdx-marker__red",green:"cdx-marker__green",brown:"cdx-marker__brown",purple:"cdx-marker__purple"},hide:"cdx-marker-hide",pallette:"cdx-marker-pallette",button:"cdx-marker-button"}),c=Object.freeze(Object.keys(s.colors).map((function(t){return s.colors[t]}))),u=function(){function t(e){var n=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=n,"function"!=typeof this.api.selection.getCurrentRange&&(alert("Upgrade editorjs to maily version"),console.error("Upgrade editorjs to maily version")),this.button=null,this.pallette={palletteWrapper:null,open:!1},this.tag="MARK",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive},this.palletteHide=this.palletteHide.bind(this),this.getPallette=this.getPallette.bind(this)}var e,r,i;return e=t,i=[{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{mark:{class:c}}}}],(r=[{key:"render",value:function(){var t=this;this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base,s.button),this.button.innerHTML=this.toolboxIcon,this.button.addEventListener("mouseenter",(function(e){console.log("mouseEnter"),t.palletteHide(!1)}));try{this.button.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),t.surround(t.api.selection.getCurrentRange(),s.colors.default,!0),t.palletteHide(!0)})),this.pallette.palletteWrapper=p("div",[s.hide,s.pallette]),this.pallette.palletteWrapper.addEventListener("mouseleave",(function(e){t.palletteHide(!0)})),Object.keys(s.colors).forEach((function(e){var n=s.colors[e],r=t.getPallette(e,n);t.pallette.palletteWrapper.appendChild(r)})),this.button.appendChild(this.pallette.palletteWrapper)}catch(t){console.log("<<<<<<<<<<<<<<<<<<<<<<<<exception while init pallette>>>>>>>>>>>>>>>>>>>>>>>>>>>>"),console.warn(t)}return this.button}},{key:"getPallette",value:function(t,e){var n=this,r=p("div");r.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),n.surround(void 0,e)}));var o=p("div",["cdx-marker-pallette-color"]),i=p("div",[e],{innerText:"가"});o.appendChild(i);var a=p("div",["cdx-marker-pallette-name"],{innerText:l(t)});return r.append(o,a),r}},{key:"palletteHide",value:function(t){t?(this.pallette.open=!0,this.pallette.palletteWrapper.classList.add(s.hide)):(this.pallette.open=!1,this.pallette.palletteWrapper.classList.remove(s.hide))}},{key:"surround",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=void 0===t?this.api.selection.getCurrentRange():t;if(o){var i=e||s.colors.default;if(r){var a,l=this.api.selection.findParentTag(this.tag);l&&(i=null===(a=l.className.split(" "))||void 0===a?void 0:a[0])}else{var c=this.api.selection.findParentTag(this.tag);if(c){var u,p=null===(u=c.className.split(" "))||void 0===u?void 0:u[0];if(p)return void this.unwrap(this.api.selection.findParentTag(this.tag,p)).then((function(){var t=n.api.selection.findParentTag(n.tag,i);t?n.unwrap(t):n.wrap(n.api.selection.getCurrentRange(),i)}))}}var d=this.api.selection.findParentTag(this.tag,i);d?this.unwrap(d):this.wrap(o,i)}}},{key:"wrap",value:function(t,e){var n=document.createElement(this.tag);n.classList.add(e),n.appendChild(t.extractContents()),t.insertNode(n),this.api.selection.expandToTag(n)}},{key:"unwrap",value:function(t){var e=this;return new Promise((function(n,r){e.api.selection.expandToTag(t);var o=window.getSelection(),i=o.getRangeAt(0),a=i.extractContents();t.parentNode.removeChild(t),i.insertNode(a),o.removeAllRanges(),o.addRange(i),n("done")}))}},{key:"checkState",value:function(){var t,e,n=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=o(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){s=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw a}}}}(c);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(t=this.api.selection.findParentTag(this.tag,r))break}}catch(t){n.e(t)}finally{n.f()}this.button.classList.toggle(this.iconClasses.active,!!t)}},{key:"toolboxIcon",get:function(){return n(8).default}}])&&a(e.prototype,r),i&&a(e,i),t}();function p(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);Array.isArray(n)?(e=i.classList).add.apply(e,r(n)):n&&i.classList.add(n);for(var a in o)i[a]=o[a];return i}t.exports=u},function(t,e,n){"use strict";n.r(e),n.d(e,"i18n",(function(){return o}));var r=n(2).korean,o=function(t){return void 0!==r[t]?r[t]:t}},function(t,e,n){"use strict";n.r(e),n.d(e,"korean",(function(){return r}));var r=Object.freeze({default:"기본",blue:"파랑색",red:"빨강색",green:"초록색",brown:"갈색",purple:"보라색"})},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(5)(!1)).push([t.i,"/*=========colors=========*/\n.cdx-marker { /*default - yellow*/\n\tbackground: rgb(251,243,219);\n  padding: 3px 0;\n}\n\n.cdx-marker__red {\n  background: rgb(251,228,228);\n\tpadding: 3px 0;\n}\n\n.cdx-marker__green {\n\tbackground: rgb(221,237,234);\n\tpadding: 3px 0;\n}\n\n.cdx-marker__blue {\n\tbackground: rgb(221,235,241);\n\tpadding: 3px 0;\n}\n\n.cdx-marker__brown {\n\tbackground: rgb(233,229,227);\n\tpadding: 3px 0;\n}\n\n.cdx-marker__purple {\n\tbackground: rgb(234,228,242);\n\tpadding: 3px 0;\n}\n\n/*=========colors=========*/\n\n\n\n\n/*========pallette=======*/\n.cdx-marker-button {\n\tposition: relative;\n}\n\n.cdx-marker-hide {\n\tdisplay: none !important;\n}\n\n.cdx-marker-pallette {\n\tmax-width: calc(100vw - 24px);\n\n\tposition: absolute;\n\ttop: calc(100% + 5px);\n\tleft: 25px;\n\n\tmin-width: 240px;\n\tmin-height: 70px;\n\n\tdisplay: grid;\n\tgrid-template-columns: 28px;\n\tgrid-template-rows: auto;\n\n\tbox-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;\n\tborder-radius: 3px;\n\tbackground: white;\n\n\tpadding: 6px 0;\n}\n\n.cdx-marker-pallette > div {\n\tmin-width: 240px;\n\tmax-width: calc(100vw - 24px);\n\theight: 28px;\n\n\tcursor: pointer;\n\tmargin: 0;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-start;\n\ttransition: background 20ms ease-in 0s;\n}\n\n.cdx-marker-pallette > div:hover {\n\tbackground: rgba(55, 53, 47, 0.08);\n}\n\n.cdx-marker-pallette > div > .cdx-marker-pallette-color {\n\tmargin-left: 14px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.cdx-marker-pallette > div > .cdx-marker-pallette-color > div {\n\twidth: 22px;\n\theight: 22px;\n\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\tfont-size: 16px;\n\tborder-radius: 3px;\n\tfont-weight: 500;\n\tbox-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset;\n\tcolor: black !important;\n\tpadding: 0 !important;\n}\n\n.cdx-marker-pallette > div > .cdx-marker-pallette-name {\n\tmargin: 0 14px 0 8px;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\n\tcolor: black !important;\n\tfont-size: 14px;\n\ttext-transform: capitalize;\n}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(t){return document.querySelector(t)},s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=l.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,u=0,p=[],d=n(7);function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],e))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(y(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:l}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function v(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),p.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=p.indexOf(t);e>=0&&p.splice(e,1)}function m(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),g(e,t.attrs),v(t,e),e}function g(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=c||(c=m(e)),r=k.bind(null,n,a,!1),o=k.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),v(t,e),e}(e),r=L.bind(null,n,e),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=j.bind(null,n),o=function(){b(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return f(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(l=i[a.id]).refs--,r.push(l)}t&&f(h(t,e),e);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete i[l.id]}}}};var x,w=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function k(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function j(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function L(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){"use strict";n.r(e),e.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 2 13 12" width="13" height="12"><path d="M8.367 9.633L10.7 10.98l-.624 1.135-.787-.025-.78 1.35H6.94l1.193-2.066-.407-.62.642-1.121zm.436-.763l2.899-5.061a1.278 1.278 0 011.746-.472c.617.355.835 1.138.492 1.76l-2.815 5.114-2.322-1.34zM2.62 11.644H5.39a.899.899 0 110 1.798H2.619a.899.899 0 010-1.798z"/></svg>\n'}])}));