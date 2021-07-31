/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={354:(e,t,r)=>{"use strict";var n=r(743),o=r(343),i=r(697),c=r.n(i),u=n.createContext(null),a=function(e){e()},s=function(){return a},f={notify:function(){}},l=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=f,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=s(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=f)},e}(),p="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;const d=function(e){var t=e.store,r=e.context,o=e.children,i=(0,n.useMemo)((function(){var e=new l(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),c=(0,n.useMemo)((function(){return t.getState()}),[t]);p((function(){var e=i.subscription;return e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,c]);var a=r||u;return n.createElement(a.Provider,{value:i},o)};function y(){return(0,n.useContext)(u)}function h(e){void 0===e&&(e=u);var t=e===u?y:function(){return(0,n.useContext)(e)};return function(){return t().store}}r(679),r(864);var b=h();function m(e){void 0===e&&(e=u);var t=e===u?b:h(e);return function(){return t().dispatch}}var v=m(),g=function(e,t){return e===t};function w(e){void 0===e&&(e=u);var t=e===u?y:function(){return(0,n.useContext)(e)};return function(e,r){void 0===r&&(r=g);var o=t(),i=function(e,t,r,o){var i,c=(0,n.useReducer)((function(e){return e+1}),0)[1],u=(0,n.useMemo)((function(){return new l(r,o)}),[r,o]),a=(0,n.useRef)(),s=(0,n.useRef)(),f=(0,n.useRef)(),d=(0,n.useRef)(),y=r.getState();try{if(e!==s.current||y!==f.current||a.current){var h=e(y);i=void 0!==d.current&&t(h,d.current)?d.current:h}else i=d.current}catch(e){throw a.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+a.current.stack+"\n\n"),e}return p((function(){s.current=e,f.current=y,d.current=i,a.current=void 0})),p((function(){function e(){try{var e=r.getState(),n=s.current(e);if(t(n,d.current))return;d.current=n,f.current=e}catch(e){a.current=e}c()}return u.onStateChange=e,u.trySubscribe(),e(),function(){return u.tryUnsubscribe()}}),[r,u]),i}(e,r,o.store,o.subscription);return(0,n.useDebugValue)(i),i}}var O,j=w();function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}O=o.unstable_batchedUpdates,a=O;var C="function"==typeof Symbol&&Symbol.observable||"@@observable",P=function(){return Math.random().toString(36).substring(7).split("").join(".")},A={INIT:"@@redux/INIT"+P(),REPLACE:"@@redux/REPLACE"+P(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+P()}};function k(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function I(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function _(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}var N=_();N.withExtraArgument=_;const L=N;var R="INVERT_FLAG";function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $={showImg:!0};const D=function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];"function"==typeof e[o]&&(r[o]=e[o])}var i,c=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:A.INIT}))throw new Error(E(12));if(void 0===r(void 0,{type:A.PROBE_UNKNOWN_ACTION()}))throw new Error(E(13))}))}(r)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},u=0;u<c.length;u++){var a=c[u],s=r[a],f=e[a],l=s(f,t);if(void 0===l)throw t&&t.type,new Error(E(14));o[a]=l,n=n||l!==f}return(n=n||c.length!==Object.keys(e).length)?o:e}}({showFlagReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return F(F({},e),{},{showImg:t.payload});default:return e}}});var B,U,q,H,W=r(496),Y=r(524),z=r.n(Y),K=r(590),V=r.n(K),G=r(418),J=r.n(G),Q="bodyAttributes",X="htmlAttributes",Z={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},ee=(Object.keys(Z).map((function(e){return Z[e]})),"charset"),te="cssText",re="href",ne="innerHTML",oe="itemprop",ie="rel",ce={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ue=Object.keys(ce).reduce((function(e,t){return e[ce[t]]=t,e}),{}),ae=[Z.NOSCRIPT,Z.SCRIPT,Z.STYLE],se="data-react-helmet",fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},pe=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ye=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},he=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},be=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},me=function(e){var t=je(e,Z.TITLE),r=je(e,"titleTemplate");if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=je(e,"defaultTitle");return t||n||void 0},ve=function(e){return je(e,"onChangeClientState")||function(){}},ge=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return de({},e,t)}),{})},we=function(e,t){return t.filter((function(e){return void 0!==e[Z.BASE]})).map((function(e){return e[Z.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Oe=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Ce("Helmet: "+e+' should be of type "Array". Instead found type "'+fe(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),c=0;c<i.length;c++){var u=i[c],a=u.toLowerCase();-1===t.indexOf(a)||r===ie&&"canonical"===e[r].toLowerCase()||a===ie&&"stylesheet"===e[a].toLowerCase()||(r=a),-1===t.indexOf(u)||u!==ne&&u!==te&&u!==oe||(r=u)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),c=0;c<i.length;c++){var u=i[c],a=J()({},n[u],o[u]);n[u]=a}return e}),[]).reverse()},je=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Te=(B=Date.now(),function(e){var t=Date.now();t-B>16?(B=t,e(t)):setTimeout((function(){Te(e)}),0)}),Se=function(e){return clearTimeout(e)},xe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Te:r.g.requestAnimationFrame||Te,Ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Se:r.g.cancelAnimationFrame||Se,Ce=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Pe=null,Ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,u=e.noscriptTags,a=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;_e(Z.BODY,n),_e(Z.HTML,o),Ie(l,p);var d={baseTag:Ne(Z.BASE,r),linkTags:Ne(Z.LINK,i),metaTags:Ne(Z.META,c),noscriptTags:Ne(Z.NOSCRIPT,u),scriptTags:Ne(Z.SCRIPT,s),styleTags:Ne(Z.STYLE,f)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),a(e,y,h)},ke=function(e){return Array.isArray(e)?e.join(""):e},Ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=ke(e)),_e(Z.TITLE,t)},_e=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(se),o=n?n.split(","):[],i=[].concat(o),c=Object.keys(t),u=0;u<c.length;u++){var a=c[u],s=t[a]||"";r.getAttribute(a)!==s&&r.setAttribute(a,s),-1===o.indexOf(a)&&o.push(a);var f=i.indexOf(a);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);o.length===i.length?r.removeAttribute(se):r.getAttribute(se)!==c.join(",")&&r.setAttribute(se,c.join(","))}},Ne=function(e,t){var r=document.head||document.querySelector(Z.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],c=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===ne)r.innerHTML=t.innerHTML;else if(n===te)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(se,"true"),o.some((function(e,t){return c=t,r.isEqualNode(e)}))?o.splice(c,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},Le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[ce[r]||r]=e[r],t}),t)},Me=function(e,t,r){switch(e){case Z.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(o={key:e})[se]=!0,i=Re(r,o),[n.createElement(Z.TITLE,i,e)];var e,r,o,i},toString:function(){return function(e,t,r,n){var o=Le(r),i=ke(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+be(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+be(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case Q:case X:return{toComponent:function(){return Re(t)},toString:function(){return Le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var o,i=((o={key:r})[se]=!0,o);return Object.keys(t).forEach((function(e){var r=ce[e]||e;if(r===ne||r===te){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),n.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===ne||e===te)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+be(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",c=-1===ae.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(c?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},Fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,u=e.noscriptTags,a=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,p=e.titleAttributes;return{base:Me(Z.BASE,t,n),bodyAttributes:Me(Q,r,n),htmlAttributes:Me(X,o,n),link:Me(Z.LINK,i,n),meta:Me(Z.META,c,n),noscript:Me(Z.NOSCRIPT,u,n),script:Me(Z.SCRIPT,a,n),style:Me(Z.STYLE,s,n),title:Me(Z.TITLE,{title:l,titleAttributes:p},n)}},$e=(U=z()((function(e){return{baseTag:we([re,"target"],e),bodyAttributes:ge(Q,e),defer:je(e,"defer"),encode:je(e,"encodeSpecialCharacters"),htmlAttributes:ge(X,e),linkTags:Oe(Z.LINK,[ie,re],e),metaTags:Oe(Z.META,["name",ee,"http-equiv","property",oe],e),noscriptTags:Oe(Z.NOSCRIPT,[ne],e),onChangeClientState:ve(e),scriptTags:Oe(Z.SCRIPT,["src",ne],e),styleTags:Oe(Z.STYLE,[te],e),title:me(e),titleAttributes:ge("titleAttributes",e)}}),(function(e){Pe&&Ee(Pe),e.defer?Pe=xe((function(){Ae(e,(function(){Pe=null}))})):(Ae(e),Pe=null)}),Fe)((function(){return null})),H=q=function(e){function t(){return le(this,t),he(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!V()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case Z.SCRIPT:case Z.NOSCRIPT:return{innerHTML:t};case Z.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return de({},n,((t={})[r.type]=[].concat(n[r.type]||[],[de({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(n.type){case Z.TITLE:return de({},o,((t={})[n.type]=c,t.titleAttributes=de({},i),t));case Z.BODY:return de({},o,{bodyAttributes:de({},i)});case Z.HTML:return de({},o,{htmlAttributes:de({},i)})}return de({},o,((r={})[n.type]=de({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=de({},t);return Object.keys(e).forEach((function(t){var n;r=de({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[ue[r]||r]=e[r],t}),t)}(ye(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case Z.LINK:case Z.META:case Z.NOSCRIPT:case Z.SCRIPT:case Z.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:c,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=ye(e,["children"]),o=de({},r);return t&&(o=this.mapChildrenToProps(t,o)),n.createElement(U,o)},pe(t,null,[{key:"canUseDOM",set:function(e){U.canUseDOM=e}}]),t}(n.Component),q.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},q.defaultProps={defer:!0,encodeSpecialCharacters:!0},q.peek=U.peek,q.rewind=function(){var e=U.rewind();return e||(e=Fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},H);function De(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}$e.renderStatic=$e.rewind;const Be=JSON.parse('{"H":[{"name":"css-loader","id":"1"},{"name":"style-loader","id":"2"},{"name":"babel-loader","id":"3"}]}');var Ue=r(893);const qe=function(e){var t=e.handleclick,r=e.showList,n=Be.H;return console.log("metod: ",t),(0,Ue.jsxs)(Ue.Fragment,{children:[(0,Ue.jsx)(W.Link,{to:"/img",children:(0,Ue.jsx)("h3",{children:'To img --- "react-router"'})}),(0,Ue.jsx)("a",{href:"/img",children:(0,Ue.jsx)("h3",{children:'To img --- "href"'})}),(0,Ue.jsx)("button",{type:"button",onClick:t,children:"Show Loaders"}),r&&n.map((function(e,t){return(0,Ue.jsx)("p",{children:e.name},t)}))]})},He=function(){var e,t,r=(e=(0,n.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],c=!0,u=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return De(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?De(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];return(0,Ue.jsx)(Ue.Fragment,{children:(0,Ue.jsx)(qe,{handleclick:function(){i(!o),console.log("cambio showList",o)},showList:o})})},We=function(){return(0,Ue.jsxs)(Ue.Fragment,{children:[(0,Ue.jsx)($e,{children:(0,Ue.jsx)("title",{children:"Inicio"})}),(0,Ue.jsx)(He,{})]})};var Ye=r(196);const ze=function(){var e=j((function(e){return e.showFlagReducer})),t=v();return(0,Ue.jsxs)(Ue.Fragment,{children:[(0,Ue.jsx)(W.Link,{to:"/",children:(0,Ue.jsx)("h3",{children:'To home --- "react-router"'})}),(0,Ue.jsx)("a",{href:"/",children:(0,Ue.jsx)("h3",{children:'To home --- "href"'})}),(0,Ue.jsx)("button",{type:"button",onClick:function(){var r;r=e.showImg,t(function(e){return function(t){console.log("entro change flag con: ",e),t({type:R,payload:!e})}}(r))},children:"Mostrar imagen"}),e.showImg&&(0,Ue.jsx)("img",{src:Ye,alt:"frameo"})]})},Ke=function(){return(0,Ue.jsx)(n.Fragment,{children:(0,Ue.jsx)(ze,{})})},Ve=function(){return(0,Ue.jsxs)(n.Fragment,{children:[(0,Ue.jsx)($e,{children:(0,Ue.jsx)("title",{children:"Ejemplo con imagen"})}),(0,Ue.jsx)(Ke,{})]})},Ge=function(){return(0,Ue.jsx)(Ue.Fragment,{children:(0,Ue.jsx)("h1",{children:"Error 404"})})},Je=function(){return(0,Ue.jsx)(Ue.Fragment,{children:(0,Ue.jsx)("p",{children:"Lo siento, la página que buscas no existe."})})},Qe=function(){return(0,Ue.jsxs)(n.Fragment,{children:[(0,Ue.jsx)(Ge,{}),(0,Ue.jsx)(Je,{})]})},Xe=function(){return(0,Ue.jsxs)(n.Fragment,{children:[(0,Ue.jsx)($e,{children:(0,Ue.jsx)("title",{children:"Error 404"})}),(0,Ue.jsx)(Qe,{})]})},Ze=function(){return(0,Ue.jsx)(W.BrowserRouter,{children:(0,Ue.jsxs)(W.Switch,{children:[(0,Ue.jsx)(W.Route,{exact:!0,path:"/",component:We}),(0,Ue.jsx)(W.Route,{exact:!0,path:"/img",component:Ve}),(0,Ue.jsx)(W.Route,{exact:!0,path:"*",component:Xe})]})})};var et=function e(t,r,n){var o;if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(E(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw new Error(E(1));return n(e)(t,r)}if("function"!=typeof t)throw new Error(E(2));var i=t,c=r,u=[],a=u,s=!1;function f(){a===u&&(a=u.slice())}function l(){if(s)throw new Error(E(3));return c}function p(e){if("function"!=typeof e)throw new Error(E(4));if(s)throw new Error(E(5));var t=!0;return f(),a.push(e),function(){if(t){if(s)throw new Error(E(6));t=!1,f();var r=a.indexOf(e);a.splice(r,1),u=null}}}function d(e){if(!k(e))throw new Error(E(7));if(void 0===e.type)throw new Error(E(8));if(s)throw new Error(E(9));try{s=!0,c=i(c,e)}finally{s=!1}for(var t=u=a,r=0;r<t.length;r++)(0,t[r])();return e}function y(e){if("function"!=typeof e)throw new Error(E(10));i=e,d({type:A.REPLACE})}function h(){var e,t=p;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(E(11));function r(){e.next&&e.next(l())}return r(),{unsubscribe:t(r)}}})[C]=function(){return this},e}return d({type:A.INIT}),(o={dispatch:d,subscribe:p,getState:l,replaceReducer:y})[C]=h,o}(D,{},I(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(E(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return n=I.apply(void 0,i)(r.dispatch),x(x({},r),{},{dispatch:n})}}}(L))),tt=document.getElementById("root");(0,o.render)((0,Ue.jsx)(d,{store:et,children:(0,Ue.jsx)(Ze,{})}),tt)},679:(e,t,r)=>{"use strict";var n=r(864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function a(e){return n.isMemo(e)?c:u[e.$$typeof]||o}u[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[n.Memo]=c;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var c=f(r);l&&(c=c.concat(l(r)));for(var u=a(t),h=a(r),b=0;b<c.length;++b){var m=c[b];if(!(i[m]||n&&n[m]||h&&h[m]||u&&u[m])){var v=p(r,m);try{s(t,m,v)}catch(e){}}}}return t}},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var c,u,a=o(e),s=1;s<arguments.length;s++){for(var f in c=Object(arguments[s]))r.call(c,f)&&(a[f]=c[f]);if(t){u=t(c);for(var l=0;l<u.length;l++)n.call(c,u[l])&&(a[u[l]]=c[u[l]])}}return a}},703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,c){if(c!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},590:e=>{var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,c){if(e===c)return!0;if(e&&c&&"object"==typeof e&&"object"==typeof c){if(e.constructor!==c.constructor)return!1;var u,a,s,f;if(Array.isArray(e)){if((u=e.length)!=c.length)return!1;for(a=u;0!=a--;)if(!i(e[a],c[a]))return!1;return!0}if(r&&e instanceof Map&&c instanceof Map){if(e.size!==c.size)return!1;for(f=e.entries();!(a=f.next()).done;)if(!c.has(a.value[0]))return!1;for(f=e.entries();!(a=f.next()).done;)if(!i(a.value[1],c.get(a.value[0])))return!1;return!0}if(n&&e instanceof Set&&c instanceof Set){if(e.size!==c.size)return!1;for(f=e.entries();!(a=f.next()).done;)if(!c.has(a.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(c)){if((u=e.length)!=c.length)return!1;for(a=u;0!=a--;)if(e[a]!==c[a])return!1;return!0}if(e.constructor===RegExp)return e.source===c.source&&e.flags===c.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===c.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===c.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(c).length)return!1;for(a=u;0!=a--;)if(!Object.prototype.hasOwnProperty.call(c,s[a]))return!1;if(t&&e instanceof Element)return!1;for(a=u;0!=a--;)if(("_owner"!==s[a]&&"__v"!==s[a]&&"__o"!==s[a]||!e.$$typeof)&&!i(e[s[a]],c[s[a]]))return!1;return!0}return e!=e&&c!=c}e.exports=function(e,t){try{return i(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},921:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case i:case u:case c:case d:return e;default:switch(e=e&&e.$$typeof){case s:case p:case b:case h:case a:return e;default:return t}}case o:return t}}}function j(e){return O(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=s,t.ContextProvider=a,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=b,t.Memo=h,t.Portal=o,t.Profiler=u,t.StrictMode=c,t.Suspense=d,t.isAsyncMode=function(e){return j(e)||O(e)===f},t.isConcurrentMode=j,t.isContextConsumer=function(e){return O(e)===s},t.isContextProvider=function(e){return O(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return O(e)===p},t.isFragment=function(e){return O(e)===i},t.isLazy=function(e){return O(e)===b},t.isMemo=function(e){return O(e)===h},t.isPortal=function(e){return O(e)===o},t.isProfiler=function(e){return O(e)===u},t.isStrictMode=function(e){return O(e)===c},t.isSuspense=function(e){return O(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===u||e===c||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===p||e.$$typeof===v||e.$$typeof===g||e.$$typeof===w||e.$$typeof===m)},t.typeOf=O},864:(e,t,r)=>{"use strict";e.exports=r(921)},524:(e,t,r)=>{"use strict";var n,o=r(743),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var a,s=[];function f(){a=e(s.map((function(e){return e.props}))),l.canUseDOM?t(a):r&&(a=r(a))}var l=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return a},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=a;return a=void 0,s=[],e};var c=o.prototype;return c.UNSAFE_componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},c.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return c(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),c(l,"canUseDOM",u),l}}},251:(e,t,r)=>{"use strict";r(418);var n=r(743),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,i={},s=null,f=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:f,props:i,_owner:c.current}}t.jsx=s,t.jsxs=s},893:(e,t,r)=>{"use strict";e.exports=r(251)},196:(e,t,r)=>{"use strict";e.exports=r.p+"78b59bad305ab72f0a87.png"},743:(e,t,r)=>{e.exports=r(121)(294)},496:(e,t,r)=>{e.exports=r(121)(427)},343:(e,t,r)=>{e.exports=r(121)(935)},121:e=>{"use strict";e.exports=modules}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="/",r(354)})();
//# sourceMappingURL=index.js.map