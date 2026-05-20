(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nc={exports:{}},Ll={},Rc={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),Mp=Symbol.for("react.portal"),jp=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),Fp=Symbol.for("react.profiler"),Up=Symbol.for("react.provider"),Wp=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),Qp=Symbol.for("react.suspense"),Vp=Symbol.for("react.memo"),Gp=Symbol.for("react.lazy"),Xa=Symbol.iterator;function Kp(e){return e===null||typeof e!="object"?null:(e=Xa&&e[Xa]||e["@@iterator"],typeof e=="function"?e:null)}var Pc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dc=Object.assign,Lc={};function fr(e,t,n){this.props=e,this.context=t,this.refs=Lc,this.updater=n||Pc}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _c(){}_c.prototype=fr.prototype;function Hs(e,t,n){this.props=e,this.context=t,this.refs=Lc,this.updater=n||Pc}var Qs=Hs.prototype=new _c;Qs.constructor=Hs;Dc(Qs,fr.prototype);Qs.isPureReactComponent=!0;var Za=Array.isArray,zc=Object.prototype.hasOwnProperty,Vs={current:null},Oc={key:!0,ref:!0,__self:!0,__source:!0};function Mc(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)zc.call(t,r)&&!Oc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:fo,type:e,key:l,ref:i,props:o,_owner:Vs.current}}function Yp(e,t){return{$$typeof:fo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gs(e){return typeof e=="object"&&e!==null&&e.$$typeof===fo}function Xp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ja=/\/+/g;function li(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xp(""+e.key):t.toString(36)}function Bo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case fo:case Mp:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+li(i,0):r,Za(o)?(n="",e!=null&&(n=e.replace(Ja,"$&/")+"/"),Bo(o,t,n,"",function(c){return c})):o!=null&&(Gs(o)&&(o=Yp(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ja,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Za(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+li(l,s);i+=Bo(l,t,n,a,o)}else if(a=Kp(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+li(l,s++),i+=Bo(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function xo(e,t,n){if(e==null)return e;var r=[],o=0;return Bo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Zp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Fo={transition:null},Jp={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:Vs};function jc(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:xo,forEach:function(e,t,n){xo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xo(e,function(){t++}),t},toArray:function(e){return xo(e,function(t){return t})||[]},only:function(e){if(!Gs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=fr;J.Fragment=jp;J.Profiler=Fp;J.PureComponent=Hs;J.StrictMode=Bp;J.Suspense=Qp;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;J.act=jc;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dc({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Vs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)zc.call(t,a)&&!Oc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:fo,type:e.type,key:o,ref:l,props:r,_owner:i}};J.createContext=function(e){return e={$$typeof:Wp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Up,_context:e},e.Consumer=e};J.createElement=Mc;J.createFactory=function(e){var t=Mc.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:Hp,render:e}};J.isValidElement=Gs;J.lazy=function(e){return{$$typeof:Gp,_payload:{_status:-1,_result:e},_init:Zp}};J.memo=function(e,t){return{$$typeof:Vp,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=Fo.transition;Fo.transition={};try{e()}finally{Fo.transition=t}};J.unstable_act=jc;J.useCallback=function(e,t){return je.current.useCallback(e,t)};J.useContext=function(e){return je.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return je.current.useDeferredValue(e)};J.useEffect=function(e,t){return je.current.useEffect(e,t)};J.useId=function(){return je.current.useId()};J.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return je.current.useMemo(e,t)};J.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};J.useRef=function(e){return je.current.useRef(e)};J.useState=function(e){return je.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return je.current.useTransition()};J.version="18.3.1";Rc.exports=J;var w=Rc.exports;const g=Ic(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=w,eh=Symbol.for("react.element"),th=Symbol.for("react.fragment"),nh=Object.prototype.hasOwnProperty,rh=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oh={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)nh.call(t,r)&&!oh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:eh,type:e,key:l,ref:i,props:o,_owner:rh.current}}Ll.Fragment=th;Ll.jsx=Bc;Ll.jsxs=Bc;Nc.exports=Ll;var F=Nc.exports,Mi={},Fc={exports:{}},Xe={},Uc={exports:{}},Wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,P){var z=A.length;A.push(P);e:for(;0<z;){var ee=z-1>>>1,V=A[ee];if(0<o(V,P))A[ee]=P,A[z]=V,z=ee;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var P=A[0],z=A.pop();if(z!==P){A[0]=z;e:for(var ee=0,V=A.length,M=V>>>1;ee<M;){var B=2*(ee+1)-1,U=A[B],G=B+1,X=A[G];if(0>o(U,z))G<V&&0>o(X,U)?(A[ee]=X,A[G]=z,ee=G):(A[ee]=U,A[B]=z,ee=B);else if(G<V&&0>o(X,z))A[ee]=X,A[G]=z,ee=G;else break e}}return P}function o(A,P){var z=A.sortIndex-P.sortIndex;return z!==0?z:A.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],h=1,f=null,m=3,y=!1,v=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(A){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=A)r(c),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(c)}}function x(A){if(k=!1,p(A),!v)if(n(a)!==null)v=!0,O(S);else{var P=n(c);P!==null&&H(x,P.startTime-A)}}function S(A,P){v=!1,k&&(k=!1,d(b),b=-1),y=!0;var z=m;try{for(p(P),f=n(a);f!==null&&(!(f.expirationTime>P)||A&&!K());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,m=f.priorityLevel;var V=ee(f.expirationTime<=P);P=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(a)&&r(a),p(P)}else r(a);f=n(a)}if(f!==null)var M=!0;else{var B=n(c);B!==null&&H(x,B.startTime-P),M=!1}return M}finally{f=null,m=z,y=!1}}var E=!1,$=null,b=-1,W=5,j=-1;function K(){return!(e.unstable_now()-j<W)}function q(){if($!==null){var A=e.unstable_now();j=A;var P=!0;try{P=$(!0,A)}finally{P?Y():(E=!1,$=null)}}else E=!1}var Y;if(typeof u=="function")Y=function(){u(q)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,L=C.port2;C.port1.onmessage=q,Y=function(){L.postMessage(null)}}else Y=function(){N(q,0)};function O(A){$=A,E||(E=!0,Y())}function H(A,P){b=N(function(){A(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,O(S))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var z=m;m=P;try{return A()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,P){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=m;m=A;try{return P()}finally{m=z}},e.unstable_scheduleCallback=function(A,P,z){var ee=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ee+z:ee):z=ee,A){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=z+V,A={id:h++,callback:P,priorityLevel:A,startTime:z,expirationTime:V,sortIndex:-1},z>ee?(A.sortIndex=z,t(c,A),n(a)===null&&A===n(c)&&(k?(d(b),b=-1):k=!0,H(x,z-ee))):(A.sortIndex=V,t(a,A),v||y||(v=!0,O(S))),A},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(A){var P=m;return function(){var z=m;m=P;try{return A.apply(this,arguments)}finally{m=z}}}})(Wc);Uc.exports=Wc;var lh=Uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih=w,Ye=lh;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hc=new Set,Hr={};function In(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Hr[e]=t,e=0;e<t.length;e++)Hc.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ji=Object.prototype.hasOwnProperty,sh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qa={},eu={};function ah(e){return ji.call(eu,e)?!0:ji.call(qa,e)?!1:sh.test(e)?eu[e]=!0:(qa[e]=!0,!1)}function uh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ch(e,t,n,r){if(t===null||typeof t>"u"||uh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ks=/[\-:]([a-z])/g;function Ys(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ks,Ys);Ne[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ks,Ys);Ne[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ks,Ys);Ne[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ch(t,n,o,r)&&(n=null),r||o===null?ah(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),_n=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Zs=Symbol.for("react.strict_mode"),Bi=Symbol.for("react.profiler"),Qc=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),Js=Symbol.for("react.forward_ref"),Fi=Symbol.for("react.suspense"),Ui=Symbol.for("react.suspense_list"),qs=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Gc=Symbol.for("react.offscreen"),tu=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,ii;function Cr(e){if(ii===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ii=t&&t[1]||""}return`
`+ii+e}var si=!1;function ai(e,t){if(!e||si)return"";si=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{si=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function dh(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=ai(e.type,!1),e;case 11:return e=ai(e.type.render,!1),e;case 1:return e=ai(e.type,!0),e;default:return""}}function Wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case _n:return"Portal";case Bi:return"Profiler";case Zs:return"StrictMode";case Fi:return"Suspense";case Ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vc:return(e.displayName||"Context")+".Consumer";case Qc:return(e._context.displayName||"Context")+".Provider";case Js:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qs:return t=e.displayName||null,t!==null?t:Wi(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return Wi(e(t))}catch{}}return null}function fh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wi(t);case 8:return t===Zs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ph(e){var t=Kc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ko(e){e._valueTracker||(e._valueTracker=ph(e))}function Yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Kc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hi(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xc(e,t){t=t.checked,t!=null&&Xs(e,"checked",t,!1)}function Qi(e,t){Xc(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vi(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ru(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vi(e,t,n){(t!=="number"||rl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Kn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Gi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Tr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function Zc(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ki(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var So,qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=So.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hh=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){hh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function ed(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function td(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ed(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var mh=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yi(e,t){if(t){if(mh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Xi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function ea(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ji=null,Yn=null,Xn=null;function iu(e){if(e=mo(e)){if(typeof Ji!="function")throw Error(I(280));var t=e.stateNode;t&&(t=jl(t),Ji(e.stateNode,e.type,t))}}function nd(e){Yn?Xn?Xn.push(e):Xn=[e]:Yn=e}function rd(){if(Yn){var e=Yn,t=Xn;if(Xn=Yn=null,iu(e),t)for(e=0;e<t.length;e++)iu(t[e])}}function od(e,t){return e(t)}function ld(){}var ui=!1;function id(e,t,n){if(ui)return e(t,n);ui=!0;try{return od(e,t,n)}finally{ui=!1,(Yn!==null||Xn!==null)&&(ld(),rd())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var qi=!1;if(Pt)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){qi=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{qi=!1}function gh(e,t,n,r,o,l,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Lr=!1,ol=null,ll=!1,es=null,vh={onError:function(e){Lr=!0,ol=e}};function yh(e,t,n,r,o,l,i,s,a){Lr=!1,ol=null,gh.apply(vh,arguments)}function xh(e,t,n,r,o,l,i,s,a){if(yh.apply(this,arguments),Lr){if(Lr){var c=ol;Lr=!1,ol=null}else throw Error(I(198));ll||(ll=!0,es=c)}}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function su(e){if(Nn(e)!==e)throw Error(I(188))}function wh(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return su(o),e;if(l===r)return su(o),t;l=l.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function ad(e){return e=wh(e),e!==null?ud(e):null}function ud(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ud(e);if(t!==null)return t;e=e.sibling}return null}var cd=Ye.unstable_scheduleCallback,au=Ye.unstable_cancelCallback,kh=Ye.unstable_shouldYield,Sh=Ye.unstable_requestPaint,ve=Ye.unstable_now,$h=Ye.unstable_getCurrentPriorityLevel,ta=Ye.unstable_ImmediatePriority,dd=Ye.unstable_UserBlockingPriority,il=Ye.unstable_NormalPriority,Ah=Ye.unstable_LowPriority,fd=Ye.unstable_IdlePriority,_l=null,wt=null;function Eh(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(_l,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Th,bh=Math.log,Ch=Math.LN2;function Th(e){return e>>>=0,e===0?32:31-(bh(e)/Ch|0)|0}var $o=64,Ao=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Ir(s):(l&=i,l!==0&&(r=Ir(l)))}else i=n&~o,i!==0?r=Ir(i):l!==0&&(r=Ir(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),o=1<<n,r|=e[n],t&=~o;return r}function Ih(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-dt(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=Ih(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pd(){var e=$o;return $o<<=1,!($o&4194240)&&($o=64),e}function ci(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Rh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-dt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function na(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var oe=0;function hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var md,ra,gd,vd,yd,ns=!1,Eo=[],Gt=null,Kt=null,Yt=null,Gr=new Map,Kr=new Map,Ut=[],Ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function wr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=mo(t),t!==null&&ra(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Dh(e,t,n,r,o){switch(t){case"focusin":return Gt=wr(Gt,e,t,n,r,o),!0;case"dragenter":return Kt=wr(Kt,e,t,n,r,o),!0;case"mouseover":return Yt=wr(Yt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Gr.set(l,wr(Gr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Kr.set(l,wr(Kr.get(l)||null,e,t,n,r,o)),!0}return!1}function xd(e){var t=mn(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=sd(n),t!==null){e.blockedOn=t,yd(e.priority,function(){gd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zi=r,n.target.dispatchEvent(r),Zi=null}else return t=mo(n),t!==null&&ra(t),e.blockedOn=n,!1;t.shift()}return!0}function cu(e,t,n){Uo(e)&&n.delete(t)}function Lh(){ns=!1,Gt!==null&&Uo(Gt)&&(Gt=null),Kt!==null&&Uo(Kt)&&(Kt=null),Yt!==null&&Uo(Yt)&&(Yt=null),Gr.forEach(cu),Kr.forEach(cu)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,ns||(ns=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Lh)))}function Yr(e){function t(o){return kr(o,e)}if(0<Eo.length){kr(Eo[0],e);for(var n=1;n<Eo.length;n++){var r=Eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&kr(Gt,e),Kt!==null&&kr(Kt,e),Yt!==null&&kr(Yt,e),Gr.forEach(t),Kr.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)xd(n),n.blockedOn===null&&Ut.shift()}var Zn=zt.ReactCurrentBatchConfig,al=!0;function _h(e,t,n,r){var o=oe,l=Zn.transition;Zn.transition=null;try{oe=1,oa(e,t,n,r)}finally{oe=o,Zn.transition=l}}function zh(e,t,n,r){var o=oe,l=Zn.transition;Zn.transition=null;try{oe=4,oa(e,t,n,r)}finally{oe=o,Zn.transition=l}}function oa(e,t,n,r){if(al){var o=rs(e,t,n,r);if(o===null)wi(e,t,r,ul,n),uu(e,r);else if(Dh(o,e,t,n,r))r.stopPropagation();else if(uu(e,r),t&4&&-1<Ph.indexOf(e)){for(;o!==null;){var l=mo(o);if(l!==null&&md(l),l=rs(e,t,n,r),l===null&&wi(e,t,r,ul,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else wi(e,t,r,null,n)}}var ul=null;function rs(e,t,n,r){if(ul=null,e=ea(r),e=mn(e),e!==null)if(t=Nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ul=e,null}function wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($h()){case ta:return 1;case dd:return 4;case il:case Ah:return 16;case fd:return 536870912;default:return 16}default:return 16}}var Ht=null,la=null,Wo=null;function kd(){if(Wo)return Wo;var e,t=la,n=t.length,r,o="value"in Ht?Ht.value:Ht.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Wo=o.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bo(){return!0}function du(){return!1}function Ze(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?bo:du,this.isPropagationStopped=du,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=Ze(pr),ho=he({},pr,{view:0,detail:0}),Oh=Ze(ho),di,fi,Sr,zl=he({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(di=e.screenX-Sr.screenX,fi=e.screenY-Sr.screenY):fi=di=0,Sr=e),di)},movementY:function(e){return"movementY"in e?e.movementY:fi}}),fu=Ze(zl),Mh=he({},zl,{dataTransfer:0}),jh=Ze(Mh),Bh=he({},ho,{relatedTarget:0}),pi=Ze(Bh),Fh=he({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Uh=Ze(Fh),Wh=he({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hh=Ze(Wh),Qh=he({},pr,{data:0}),pu=Ze(Qh),Vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kh[e])?!!t[e]:!1}function sa(){return Yh}var Xh=he({},ho,{key:function(e){if(e.key){var t=Vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zh=Ze(Xh),Jh=he({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hu=Ze(Jh),qh=he({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),em=Ze(qh),tm=he({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nm=Ze(tm),rm=he({},zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),om=Ze(rm),lm=[9,13,27,32],aa=Pt&&"CompositionEvent"in window,_r=null;Pt&&"documentMode"in document&&(_r=document.documentMode);var im=Pt&&"TextEvent"in window&&!_r,Sd=Pt&&(!aa||_r&&8<_r&&11>=_r),mu=String.fromCharCode(32),gu=!1;function $d(e,t){switch(e){case"keyup":return lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function sm(e,t){switch(e){case"compositionend":return Ad(t);case"keypress":return t.which!==32?null:(gu=!0,mu);case"textInput":return e=t.data,e===mu&&gu?null:e;default:return null}}function am(e,t){if(On)return e==="compositionend"||!aa&&$d(e,t)?(e=kd(),Wo=la=Ht=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sd&&t.locale!=="ko"?null:t.data;default:return null}}var um={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!um[e.type]:t==="textarea"}function Ed(e,t,n,r){nd(r),t=cl(t,"onChange"),0<t.length&&(n=new ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zr=null,Xr=null;function cm(e){zd(e,0)}function Ol(e){var t=Bn(e);if(Yc(t))return e}function dm(e,t){if(e==="change")return t}var bd=!1;if(Pt){var hi;if(Pt){var mi="oninput"in document;if(!mi){var yu=document.createElement("div");yu.setAttribute("oninput","return;"),mi=typeof yu.oninput=="function"}hi=mi}else hi=!1;bd=hi&&(!document.documentMode||9<document.documentMode)}function xu(){zr&&(zr.detachEvent("onpropertychange",Cd),Xr=zr=null)}function Cd(e){if(e.propertyName==="value"&&Ol(Xr)){var t=[];Ed(t,Xr,e,ea(e)),id(cm,t)}}function fm(e,t,n){e==="focusin"?(xu(),zr=t,Xr=n,zr.attachEvent("onpropertychange",Cd)):e==="focusout"&&xu()}function pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ol(Xr)}function hm(e,t){if(e==="click")return Ol(t)}function mm(e,t){if(e==="input"||e==="change")return Ol(t)}function gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:gm;function Zr(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ji.call(t,o)||!ht(e[o],t[o]))return!1}return!0}function wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var n=wu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wu(n)}}function Td(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Td(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Id(){for(var e=window,t=rl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rl(e.document)}return t}function ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vm(e){var t=Id(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Td(n.ownerDocument.documentElement,n)){if(r!==null&&ua(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ku(n,l);var i=ku(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ym=Pt&&"documentMode"in document&&11>=document.documentMode,Mn=null,os=null,Or=null,ls=!1;function Su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ls||Mn==null||Mn!==rl(r)||(r=Mn,"selectionStart"in r&&ua(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&Zr(Or,r)||(Or=r,r=cl(os,"onSelect"),0<r.length&&(t=new ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function Co(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},gi={},Nd={};Pt&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function Ml(e){if(gi[e])return gi[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nd)return gi[e]=t[n];return e}var Rd=Ml("animationend"),Pd=Ml("animationiteration"),Dd=Ml("animationstart"),Ld=Ml("transitionend"),_d=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){_d.set(e,t),In(t,[e])}for(var vi=0;vi<$u.length;vi++){var yi=$u[vi],xm=yi.toLowerCase(),wm=yi[0].toUpperCase()+yi.slice(1);sn(xm,"on"+wm)}sn(Rd,"onAnimationEnd");sn(Pd,"onAnimationIteration");sn(Dd,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Ld,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),km=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function Au(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xh(r,t,void 0,e),e.currentTarget=null}function zd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;Au(o,s,c),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;Au(o,s,c),l=a}}}if(ll)throw e=es,ll=!1,es=null,e}function ie(e,t){var n=t[cs];n===void 0&&(n=t[cs]=new Set);var r=e+"__bubble";n.has(r)||(Od(t,e,2,!1),n.add(r))}function xi(e,t,n){var r=0;t&&(r|=4),Od(n,e,r,t)}var To="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[To]){e[To]=!0,Hc.forEach(function(n){n!=="selectionchange"&&(km.has(n)||xi(n,!1,e),xi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[To]||(t[To]=!0,xi("selectionchange",!1,t))}}function Od(e,t,n,r){switch(wd(t)){case 1:var o=_h;break;case 4:o=zh;break;default:o=oa}n=o.bind(null,t,n,e),o=void 0,!qi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wi(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=mn(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}id(function(){var c=l,h=ea(n),f=[];e:{var m=_d.get(e);if(m!==void 0){var y=ia,v=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":y=Zh;break;case"focusin":v="focus",y=pi;break;case"focusout":v="blur",y=pi;break;case"beforeblur":case"afterblur":y=pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=em;break;case Rd:case Pd:case Dd:y=Uh;break;case Ld:y=nm;break;case"scroll":y=Oh;break;case"wheel":y=om;break;case"copy":case"cut":case"paste":y=Hh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=hu}var k=(t&4)!==0,N=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var u=c,p;u!==null;){p=u;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,d!==null&&(x=Vr(u,d),x!=null&&k.push(qr(u,x,p)))),N)break;u=u.return}0<k.length&&(m=new y(m,v,null,n,h),f.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Zi&&(v=n.relatedTarget||n.fromElement)&&(mn(v)||v[Dt]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?mn(v):null,v!==null&&(N=Nn(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(k=fu,x="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=hu,x="onPointerLeave",d="onPointerEnter",u="pointer"),N=y==null?m:Bn(y),p=v==null?m:Bn(v),m=new k(x,u+"leave",y,n,h),m.target=N,m.relatedTarget=p,x=null,mn(h)===c&&(k=new k(d,u+"enter",v,n,h),k.target=p,k.relatedTarget=N,x=k),N=x,y&&v)t:{for(k=y,d=v,u=0,p=k;p;p=Pn(p))u++;for(p=0,x=d;x;x=Pn(x))p++;for(;0<u-p;)k=Pn(k),u--;for(;0<p-u;)d=Pn(d),p--;for(;u--;){if(k===d||d!==null&&k===d.alternate)break t;k=Pn(k),d=Pn(d)}k=null}else k=null;y!==null&&Eu(f,m,y,k,!1),v!==null&&N!==null&&Eu(f,N,v,k,!0)}}e:{if(m=c?Bn(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=dm;else if(vu(m))if(bd)S=mm;else{S=pm;var E=fm}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=hm);if(S&&(S=S(e,c))){Ed(f,S,n,h);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Vi(m,"number",m.value)}switch(E=c?Bn(c):window,e){case"focusin":(vu(E)||E.contentEditable==="true")&&(Mn=E,os=c,Or=null);break;case"focusout":Or=os=Mn=null;break;case"mousedown":ls=!0;break;case"contextmenu":case"mouseup":case"dragend":ls=!1,Su(f,n,h);break;case"selectionchange":if(ym)break;case"keydown":case"keyup":Su(f,n,h)}var $;if(aa)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else On?$d(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Sd&&n.locale!=="ko"&&(On||b!=="onCompositionStart"?b==="onCompositionEnd"&&On&&($=kd()):(Ht=h,la="value"in Ht?Ht.value:Ht.textContent,On=!0)),E=cl(c,b),0<E.length&&(b=new pu(b,e,null,n,h),f.push({event:b,listeners:E}),$?b.data=$:($=Ad(n),$!==null&&(b.data=$)))),($=im?sm(e,n):am(e,n))&&(c=cl(c,"onBeforeInput"),0<c.length&&(h=new pu("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=$))}zd(f,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Vr(e,n),l!=null&&r.unshift(qr(e,l,o)),l=Vr(e,t),l!=null&&r.push(qr(e,l,o))),e=e.return}return r}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Vr(n,l),a!=null&&i.unshift(qr(n,a,s))):o||(a=Vr(n,l),a!=null&&i.push(qr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Sm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function bu(e){return(typeof e=="string"?e:""+e).replace(Sm,`
`).replace($m,"")}function Io(e,t,n){if(t=bu(t),bu(e)!==t&&n)throw Error(I(425))}function dl(){}var is=null,ss=null;function as(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var us=typeof setTimeout=="function"?setTimeout:void 0,Am=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,Em=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(bm)}:us;function bm(e){setTimeout(function(){throw e})}function ki(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yr(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),xt="__reactFiber$"+hr,eo="__reactProps$"+hr,Dt="__reactContainer$"+hr,cs="__reactEvents$"+hr,Cm="__reactListeners$"+hr,Tm="__reactHandles$"+hr;function mn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tu(e);e!==null;){if(n=e[xt])return n;e=Tu(e)}return t}e=n,n=e.parentNode}return null}function mo(e){return e=e[xt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function jl(e){return e[eo]||null}var ds=[],Fn=-1;function an(e){return{current:e}}function ae(e){0>Fn||(e.current=ds[Fn],ds[Fn]=null,Fn--)}function le(e,t){Fn++,ds[Fn]=e.current,e.current=t}var rn={},_e=an(rn),We=an(!1),Sn=rn;function tr(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function fl(){ae(We),ae(_e)}function Iu(e,t,n){if(_e.current!==rn)throw Error(I(168));le(_e,t),le(We,n)}function Md(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,fh(e)||"Unknown",o));return he({},n,r)}function pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,Sn=_e.current,le(_e,e),le(We,We.current),!0}function Nu(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=Md(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,ae(We),ae(_e),le(_e,e)):ae(We),le(We,n)}var Tt=null,Bl=!1,Si=!1;function jd(e){Tt===null?Tt=[e]:Tt.push(e)}function Im(e){Bl=!0,jd(e)}function un(){if(!Si&&Tt!==null){Si=!0;var e=0,t=oe;try{var n=Tt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Bl=!1}catch(o){throw Tt!==null&&(Tt=Tt.slice(e+1)),cd(ta,un),o}finally{oe=t,Si=!1}}return null}var Un=[],Wn=0,hl=null,ml=0,qe=[],et=0,$n=null,It=1,Nt="";function fn(e,t){Un[Wn++]=ml,Un[Wn++]=hl,hl=e,ml=t}function Bd(e,t,n){qe[et++]=It,qe[et++]=Nt,qe[et++]=$n,$n=e;var r=It;e=Nt;var o=32-dt(r)-1;r&=~(1<<o),n+=1;var l=32-dt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,It=1<<32-dt(t)+o|n<<o|r,Nt=l+e}else It=1<<l|n<<o|r,Nt=e}function ca(e){e.return!==null&&(fn(e,1),Bd(e,1,0))}function da(e){for(;e===hl;)hl=Un[--Wn],Un[Wn]=null,ml=Un[--Wn],Un[Wn]=null;for(;e===$n;)$n=qe[--et],qe[et]=null,Nt=qe[--et],qe[et]=null,It=qe[--et],qe[et]=null}var Ke=null,Ge=null,ce=!1,ct=null;function Fd(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Ge=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:It,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Ge=null,!0):!1;default:return!1}}function fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ps(e){if(ce){var t=Ge;if(t){var n=t;if(!Ru(e,t)){if(fs(e))throw Error(I(418));t=Xt(n.nextSibling);var r=Ke;t&&Ru(e,t)?Fd(r,n):(e.flags=e.flags&-4097|2,ce=!1,Ke=e)}}else{if(fs(e))throw Error(I(418));e.flags=e.flags&-4097|2,ce=!1,Ke=e}}}function Pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function No(e){if(e!==Ke)return!1;if(!ce)return Pu(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!as(e.type,e.memoizedProps)),t&&(t=Ge)){if(fs(e))throw Ud(),Error(I(418));for(;t;)Fd(e,t),t=Xt(t.nextSibling)}if(Pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Ke?Xt(e.stateNode.nextSibling):null;return!0}function Ud(){for(var e=Ge;e;)e=Xt(e.nextSibling)}function nr(){Ge=Ke=null,ce=!1}function fa(e){ct===null?ct=[e]:ct.push(e)}var Nm=zt.ReactCurrentBatchConfig;function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Ro(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Du(e){var t=e._init;return t(e._payload)}function Wd(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=en(d,u),d.index=0,d.sibling=null,d}function l(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,p,x){return u===null||u.tag!==6?(u=Ii(p,d.mode,x),u.return=d,u):(u=o(u,p),u.return=d,u)}function a(d,u,p,x){var S=p.type;return S===zn?h(d,u,p.props.children,x,p.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&Du(S)===u.type)?(x=o(u,p.props),x.ref=$r(d,u,p),x.return=d,x):(x=Zo(p.type,p.key,p.props,null,d.mode,x),x.ref=$r(d,u,p),x.return=d,x)}function c(d,u,p,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Ni(p,d.mode,x),u.return=d,u):(u=o(u,p.children||[]),u.return=d,u)}function h(d,u,p,x,S){return u===null||u.tag!==7?(u=wn(p,d.mode,x,S),u.return=d,u):(u=o(u,p),u.return=d,u)}function f(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ii(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case wo:return p=Zo(u.type,u.key,u.props,null,d.mode,p),p.ref=$r(d,null,u),p.return=d,p;case _n:return u=Ni(u,d.mode,p),u.return=d,u;case Bt:var x=u._init;return f(d,x(u._payload),p)}if(Tr(u)||yr(u))return u=wn(u,d.mode,p,null),u.return=d,u;Ro(d,u)}return null}function m(d,u,p,x){var S=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(d,u,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wo:return p.key===S?a(d,u,p,x):null;case _n:return p.key===S?c(d,u,p,x):null;case Bt:return S=p._init,m(d,u,S(p._payload),x)}if(Tr(p)||yr(p))return S!==null?null:h(d,u,p,x,null);Ro(d,p)}return null}function y(d,u,p,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(p)||null,s(u,d,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case wo:return d=d.get(x.key===null?p:x.key)||null,a(u,d,x,S);case _n:return d=d.get(x.key===null?p:x.key)||null,c(u,d,x,S);case Bt:var E=x._init;return y(d,u,p,E(x._payload),S)}if(Tr(x)||yr(x))return d=d.get(p)||null,h(u,d,x,S,null);Ro(u,x)}return null}function v(d,u,p,x){for(var S=null,E=null,$=u,b=u=0,W=null;$!==null&&b<p.length;b++){$.index>b?(W=$,$=null):W=$.sibling;var j=m(d,$,p[b],x);if(j===null){$===null&&($=W);break}e&&$&&j.alternate===null&&t(d,$),u=l(j,u,b),E===null?S=j:E.sibling=j,E=j,$=W}if(b===p.length)return n(d,$),ce&&fn(d,b),S;if($===null){for(;b<p.length;b++)$=f(d,p[b],x),$!==null&&(u=l($,u,b),E===null?S=$:E.sibling=$,E=$);return ce&&fn(d,b),S}for($=r(d,$);b<p.length;b++)W=y($,d,b,p[b],x),W!==null&&(e&&W.alternate!==null&&$.delete(W.key===null?b:W.key),u=l(W,u,b),E===null?S=W:E.sibling=W,E=W);return e&&$.forEach(function(K){return t(d,K)}),ce&&fn(d,b),S}function k(d,u,p,x){var S=yr(p);if(typeof S!="function")throw Error(I(150));if(p=S.call(p),p==null)throw Error(I(151));for(var E=S=null,$=u,b=u=0,W=null,j=p.next();$!==null&&!j.done;b++,j=p.next()){$.index>b?(W=$,$=null):W=$.sibling;var K=m(d,$,j.value,x);if(K===null){$===null&&($=W);break}e&&$&&K.alternate===null&&t(d,$),u=l(K,u,b),E===null?S=K:E.sibling=K,E=K,$=W}if(j.done)return n(d,$),ce&&fn(d,b),S;if($===null){for(;!j.done;b++,j=p.next())j=f(d,j.value,x),j!==null&&(u=l(j,u,b),E===null?S=j:E.sibling=j,E=j);return ce&&fn(d,b),S}for($=r(d,$);!j.done;b++,j=p.next())j=y($,d,b,j.value,x),j!==null&&(e&&j.alternate!==null&&$.delete(j.key===null?b:j.key),u=l(j,u,b),E===null?S=j:E.sibling=j,E=j);return e&&$.forEach(function(q){return t(d,q)}),ce&&fn(d,b),S}function N(d,u,p,x){if(typeof p=="object"&&p!==null&&p.type===zn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case wo:e:{for(var S=p.key,E=u;E!==null;){if(E.key===S){if(S=p.type,S===zn){if(E.tag===7){n(d,E.sibling),u=o(E,p.props.children),u.return=d,d=u;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&Du(S)===E.type){n(d,E.sibling),u=o(E,p.props),u.ref=$r(d,E,p),u.return=d,d=u;break e}n(d,E);break}else t(d,E);E=E.sibling}p.type===zn?(u=wn(p.props.children,d.mode,x,p.key),u.return=d,d=u):(x=Zo(p.type,p.key,p.props,null,d.mode,x),x.ref=$r(d,u,p),x.return=d,d=x)}return i(d);case _n:e:{for(E=p.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=o(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Ni(p,d.mode,x),u.return=d,d=u}return i(d);case Bt:return E=p._init,N(d,u,E(p._payload),x)}if(Tr(p))return v(d,u,p,x);if(yr(p))return k(d,u,p,x);Ro(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,p),u.return=d,d=u):(n(d,u),u=Ii(p,d.mode,x),u.return=d,d=u),i(d)):n(d,u)}return N}var rr=Wd(!0),Hd=Wd(!1),gl=an(null),vl=null,Hn=null,pa=null;function ha(){pa=Hn=vl=null}function ma(e){var t=gl.current;ae(gl),e._currentValue=t}function hs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){vl=e,pa=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(pa!==e)if(e={context:e,memoizedValue:t,next:null},Hn===null){if(vl===null)throw Error(I(308));Hn=e,vl.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return t}var gn=null;function ga(e){gn===null?gn=[e]:gn.push(e)}function Qd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ga(t)):(n.next=o.next,o.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Lt(e,n)}return o=r.interleaved,o===null?(t.next=t,ga(r)):(t.next=o.next,o.next=t),r.interleaved=t,Lt(e,n)}function Qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,na(e,n)}}function Lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yl(e,t,n,r){var o=e.updateQueue;Ft=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(l!==null){var f=o.baseState;i=0,h=c=a=null,s=l;do{var m=s.lane,y=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(m=t,y=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){f=v.call(y,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,m=typeof v=="function"?v.call(y,f,m):v,m==null)break e;f=he({},f,m);break e;case 2:Ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=y,a=f):h=h.next=y,i|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(h===null&&(a=f),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);En|=i,e.lanes=i,e.memoizedState=f}}function _u(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var go={},kt=an(go),to=an(go),no=an(go);function vn(e){if(e===go)throw Error(I(174));return e}function ya(e,t){switch(le(no,t),le(to,e),le(kt,go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ki(t,e)}ae(kt),le(kt,t)}function or(){ae(kt),ae(to),ae(no)}function Gd(e){vn(no.current);var t=vn(kt.current),n=Ki(t,e.type);t!==n&&(le(to,e),le(kt,n))}function xa(e){to.current===e&&(ae(kt),ae(to))}var fe=an(0);function xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $i=[];function wa(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var Vo=zt.ReactCurrentDispatcher,Ai=zt.ReactCurrentBatchConfig,An=0,pe=null,ke=null,Ae=null,wl=!1,Mr=!1,ro=0,Rm=0;function Pe(){throw Error(I(321))}function ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Sa(e,t,n,r,o,l){if(An=l,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?_m:zm,e=n(r,o),Mr){l=0;do{if(Mr=!1,ro=0,25<=l)throw Error(I(301));l+=1,Ae=ke=null,t.updateQueue=null,Vo.current=Om,e=n(r,o)}while(Mr)}if(Vo.current=kl,t=ke!==null&&ke.next!==null,An=0,Ae=ke=pe=null,wl=!1,t)throw Error(I(300));return e}function $a(){var e=ro!==0;return ro=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?pe.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function ot(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ae===null?pe.memoizedState:Ae.next;if(t!==null)Ae=t,ke=e;else{if(e===null)throw Error(I(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ae===null?pe.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function oo(e,t){return typeof t=="function"?t(e):t}function Ei(e){var t=ot(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=ke,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,c=l;do{var h=c.lane;if((An&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=f,i=r):a=a.next=f,pe.lanes|=h,En|=h}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=s,ht(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,pe.lanes|=l,En|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bi(e){var t=ot(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);ht(l,t.memoizedState)||(Ue=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Kd(){}function Yd(e,t){var n=pe,r=ot(),o=t(),l=!ht(r.memoizedState,o);if(l&&(r.memoizedState=o,Ue=!0),r=r.queue,Aa(Jd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,lo(9,Zd.bind(null,n,r,o,t),void 0,null),Ee===null)throw Error(I(349));An&30||Xd(n,t,o)}return o}function Xd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zd(e,t,n,r){t.value=n,t.getSnapshot=r,qd(t)&&ef(e)}function Jd(e,t,n){return n(function(){qd(t)&&ef(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function ef(e){var t=Lt(e,1);t!==null&&ft(t,e,1,-1)}function zu(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:e},t.queue=e,e=e.dispatch=Lm.bind(null,pe,e),[t.memoizedState,e]}function lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tf(){return ot().memoizedState}function Go(e,t,n,r){var o=yt();pe.flags|=e,o.memoizedState=lo(1|t,n,void 0,r===void 0?null:r)}function Fl(e,t,n,r){var o=ot();r=r===void 0?null:r;var l=void 0;if(ke!==null){var i=ke.memoizedState;if(l=i.destroy,r!==null&&ka(r,i.deps)){o.memoizedState=lo(t,n,l,r);return}}pe.flags|=e,o.memoizedState=lo(1|t,n,l,r)}function Ou(e,t){return Go(8390656,8,e,t)}function Aa(e,t){return Fl(2048,8,e,t)}function nf(e,t){return Fl(4,2,e,t)}function rf(e,t){return Fl(4,4,e,t)}function of(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lf(e,t,n){return n=n!=null?n.concat([e]):null,Fl(4,4,of.bind(null,t,e),n)}function Ea(){}function sf(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function af(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uf(e,t,n){return An&21?(ht(n,t)||(n=pd(),pe.lanes|=n,En|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n)}function Pm(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Ai.transition;Ai.transition={};try{e(!1),t()}finally{oe=n,Ai.transition=r}}function cf(){return ot().memoizedState}function Dm(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},df(e))ff(t,n);else if(n=Qd(e,t,n,r),n!==null){var o=Me();ft(n,e,r,o),pf(n,t,r)}}function Lm(e,t,n){var r=qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(df(e))ff(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,ht(s,i)){var a=t.interleaved;a===null?(o.next=o,ga(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Qd(e,t,o,r),n!==null&&(o=Me(),ft(n,e,r,o),pf(n,t,r))}}function df(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function ff(e,t){Mr=wl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,na(e,n)}}var kl={readContext:rt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},_m={readContext:rt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Ou,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Go(4194308,4,of.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){return Go(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dm.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:Ea,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=Pm.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,o=yt();if(ce){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Ee===null)throw Error(I(349));An&30||Xd(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ou(Jd.bind(null,r,l,e),[e]),r.flags|=2048,lo(9,Zd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=yt(),t=Ee.identifierPrefix;if(ce){var n=Nt,r=It;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ro++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zm={readContext:rt,useCallback:sf,useContext:rt,useEffect:Aa,useImperativeHandle:lf,useInsertionEffect:nf,useLayoutEffect:rf,useMemo:af,useReducer:Ei,useRef:tf,useState:function(){return Ei(oo)},useDebugValue:Ea,useDeferredValue:function(e){var t=ot();return uf(t,ke.memoizedState,e)},useTransition:function(){var e=Ei(oo)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Kd,useSyncExternalStore:Yd,useId:cf,unstable_isNewReconciler:!1},Om={readContext:rt,useCallback:sf,useContext:rt,useEffect:Aa,useImperativeHandle:lf,useInsertionEffect:nf,useLayoutEffect:rf,useMemo:af,useReducer:bi,useRef:tf,useState:function(){return bi(oo)},useDebugValue:Ea,useDeferredValue:function(e){var t=ot();return ke===null?t.memoizedState=e:uf(t,ke.memoizedState,e)},useTransition:function(){var e=bi(oo)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Kd,useSyncExternalStore:Yd,useId:cf,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ms(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ul={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),o=qt(e),l=Rt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Zt(e,l,o),t!==null&&(ft(t,e,o,r),Qo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),o=qt(e),l=Rt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Zt(e,l,o),t!==null&&(ft(t,e,o,r),Qo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=qt(e),o=Rt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Zt(e,o,r),t!==null&&(ft(t,e,r,n),Qo(t,e,r))}};function Mu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Zr(n,r)||!Zr(o,l):!0}function hf(e,t,n){var r=!1,o=rn,l=t.contextType;return typeof l=="object"&&l!==null?l=rt(l):(o=He(t)?Sn:_e.current,r=t.contextTypes,l=(r=r!=null)?tr(e,o):rn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ul.enqueueReplaceState(t,t.state,null)}function gs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},va(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=rt(l):(l=He(t)?Sn:_e.current,o.context=tr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ms(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ul.enqueueReplaceState(o,o.state,null),yl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t){try{var n="",r=t;do n+=dh(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mm=typeof WeakMap=="function"?WeakMap:Map;function mf(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$l||($l=!0,Cs=r),vs(e,t)},n}function gf(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){vs(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){vs(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Jm.bind(null,e,t,n),t.then(e,e))}function Fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var jm=zt.ReactCurrentOwner,Ue=!1;function Oe(e,t,n,r){t.child=e===null?Hd(t,null,n,r):rr(t,e.child,n,r)}function Wu(e,t,n,r,o){n=n.render;var l=t.ref;return Jn(t,o),r=Sa(e,t,n,r,l,o),n=$a(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(ce&&n&&ca(t),t.flags|=1,Oe(e,t,r,o),t.child)}function Hu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Da(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,vf(e,t,l,r,o)):(e=Zo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Zr,n(i,r)&&e.ref===t.ref)return _t(e,t,o)}return t.flags|=1,e=en(l,r),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Zr(l,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,_t(e,t,o)}return ys(e,t,n,r,o)}function yf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Vn,Ve),Ve|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(Vn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,le(Vn,Ve),Ve|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,le(Vn,Ve),Ve|=r;return Oe(e,t,o,n),t.child}function xf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ys(e,t,n,r,o){var l=He(n)?Sn:_e.current;return l=tr(t,l),Jn(t,o),n=Sa(e,t,n,r,l,o),r=$a(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(ce&&r&&ca(t),t.flags|=1,Oe(e,t,n,o),t.child)}function Qu(e,t,n,r,o){if(He(n)){var l=!0;pl(t)}else l=!1;if(Jn(t,o),t.stateNode===null)Ko(e,t),hf(t,n,r),gs(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=rt(c):(c=He(n)?Sn:_e.current,c=tr(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&ju(t,i,r,c),Ft=!1;var m=t.memoizedState;i.state=m,yl(t,r,i,o),a=t.memoizedState,s!==r||m!==a||We.current||Ft?(typeof h=="function"&&(ms(t,n,h,r),a=t.memoizedState),(s=Ft||Mu(t,n,s,r,m,a,c))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Vd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:st(t.type,s),i.props=c,f=t.pendingProps,m=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=rt(a):(a=He(n)?Sn:_e.current,a=tr(t,a));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==f||m!==a)&&ju(t,i,r,a),Ft=!1,m=t.memoizedState,i.state=m,yl(t,r,i,o);var v=t.memoizedState;s!==f||m!==v||We.current||Ft?(typeof y=="function"&&(ms(t,n,y,r),v=t.memoizedState),(c=Ft||Mu(t,n,c,r,m,v,a)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return xs(e,t,n,r,l,o)}function xs(e,t,n,r,o,l){xf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Nu(t,n,!1),_t(e,t,l);r=t.stateNode,jm.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=rr(t,e.child,null,l),t.child=rr(t,null,s,l)):Oe(e,t,s,l),t.memoizedState=r.state,o&&Nu(t,n,!0),t.child}function wf(e){var t=e.stateNode;t.pendingContext?Iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Iu(e,t.context,!1),ya(e,t.containerInfo)}function Vu(e,t,n,r,o){return nr(),fa(o),t.flags|=256,Oe(e,t,n,r),t.child}var ws={dehydrated:null,treeContext:null,retryLane:0};function ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function kf(e,t,n){var r=t.pendingProps,o=fe.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),le(fe,o&1),e===null)return ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ql(i,r,0,null),e=wn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ks(n),t.memoizedState=ws,e):ba(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Bm(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=en(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=en(s,l):(l=wn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ks(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=ws,r}return l=e.child,e=l.sibling,r=en(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ba(e,t){return t=Ql({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Po(e,t,n,r){return r!==null&&fa(r),rr(t,e.child,null,n),e=ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bm(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Ci(Error(I(422))),Po(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ql({mode:"visible",children:r.children},o,0,null),l=wn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&rr(t,e.child,null,i),t.child.memoizedState=ks(i),t.memoizedState=ws,l);if(!(t.mode&1))return Po(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(I(419)),r=Ci(l,r,void 0),Po(e,t,i,r)}if(s=(i&e.childLanes)!==0,Ue||s){if(r=Ee,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Lt(e,o),ft(r,e,o,-1))}return Pa(),r=Ci(Error(I(421))),Po(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=qm.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ge=Xt(o.nextSibling),Ke=t,ce=!0,ct=null,e!==null&&(qe[et++]=It,qe[et++]=Nt,qe[et++]=$n,It=e.id,Nt=e.overflow,$n=t),t=ba(t,r.children),t.flags|=4096,t)}function Gu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hs(e.return,t,n)}function Ti(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Sf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Oe(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gu(e,n,t);else if(e.tag===19)Gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&xl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ti(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&xl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ti(t,!0,n,null,l);break;case"together":Ti(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fm(e,t,n){switch(t.tag){case 3:wf(t),nr();break;case 5:Gd(t);break;case 1:He(t.type)&&pl(t);break;case 4:ya(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;le(gl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?kf(e,t,n):(le(fe,fe.current&1),e=_t(e,t,n),e!==null?e.sibling:null);le(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),le(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,yf(e,t,n)}return _t(e,t,n)}var $f,Ss,Af,Ef;$f=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ss=function(){};Af=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,vn(kt.current);var l=null;switch(n){case"input":o=Hi(e,o),r=Hi(e,r),l=[];break;case"select":o=he({},o,{value:void 0}),r=he({},r,{value:void 0}),l=[];break;case"textarea":o=Gi(e,o),r=Gi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=dl)}Yi(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&ie("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Ef=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ar(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Um(e,t,n){var r=t.pendingProps;switch(da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return He(t.type)&&fl(),De(t),null;case 3:return r=t.stateNode,or(),ae(We),ae(_e),wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(No(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Ns(ct),ct=null))),Ss(e,t),De(t),null;case 5:xa(t);var o=vn(no.current);if(n=t.type,e!==null&&t.stateNode!=null)Af(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return De(t),null}if(e=vn(kt.current),No(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[xt]=t,r[eo]=l,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(o=0;o<Nr.length;o++)ie(Nr[o],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":nu(r,l),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ie("invalid",r);break;case"textarea":ou(r,l),ie("invalid",r)}Yi(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Io(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Io(r.textContent,s,e),o=["children",""+s]):Hr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&ie("scroll",r)}switch(n){case"input":ko(r),ru(r,l,!0);break;case"textarea":ko(r),lu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=dl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[xt]=t,e[eo]=r,$f(e,t,!1,!1),t.stateNode=e;e:{switch(i=Xi(n,r),n){case"dialog":ie("cancel",e),ie("close",e),o=r;break;case"iframe":case"object":case"embed":ie("load",e),o=r;break;case"video":case"audio":for(o=0;o<Nr.length;o++)ie(Nr[o],e);o=r;break;case"source":ie("error",e),o=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),o=r;break;case"details":ie("toggle",e),o=r;break;case"input":nu(e,r),o=Hi(e,r),ie("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=he({},r,{value:void 0}),ie("invalid",e);break;case"textarea":ou(e,r),o=Gi(e,r),ie("invalid",e);break;default:o=r}Yi(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?td(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&qc(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Qr(e,a):typeof a=="number"&&Qr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Hr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&ie("scroll",e):a!=null&&Xs(e,l,a,i))}switch(n){case"input":ko(e),ru(e,r,!1);break;case"textarea":ko(e),lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Kn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)Ef(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=vn(no.current),vn(kt.current),No(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(l=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:Io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Io(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return De(t),null;case 13:if(ae(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Ge!==null&&t.mode&1&&!(t.flags&128))Ud(),nr(),t.flags|=98560,l=!1;else if(l=No(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(I(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(I(317));l[xt]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),l=!1}else ct!==null&&(Ns(ct),ct=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?$e===0&&($e=3):Pa())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return or(),Ss(e,t),e===null&&Jr(t.stateNode.containerInfo),De(t),null;case 10:return ma(t.type._context),De(t),null;case 17:return He(t.type)&&fl(),De(t),null;case 19:if(ae(fe),l=t.memoizedState,l===null)return De(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Ar(l,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=xl(e),i!==null){for(t.flags|=128,Ar(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(fe,fe.current&1|2),t.child}e=e.sibling}l.tail!==null&&ve()>ir&&(t.flags|=128,r=!0,Ar(l,!1),t.lanes=4194304)}else{if(!r)if(e=xl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ar(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ce)return De(t),null}else 2*ve()-l.renderingStartTime>ir&&n!==1073741824&&(t.flags|=128,r=!0,Ar(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ve(),t.sibling=null,n=fe.current,le(fe,r?n&1|2:n&1),t):(De(t),null);case 22:case 23:return Ra(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function Wm(e,t){switch(da(t),t.tag){case 1:return He(t.type)&&fl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),ae(We),ae(_e),wa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xa(t),null;case 13:if(ae(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(fe),null;case 4:return or(),null;case 10:return ma(t.type._context),null;case 22:case 23:return Ra(),null;case 24:return null;default:return null}}var Do=!1,Le=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,_=null;function Qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function $s(e,t,n){try{n()}catch(r){me(e,t,r)}}var Ku=!1;function Qm(e,t){if(is=al,e=Id(),ua(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,h=0,f=e,m=null;t:for(;;){for(var y;f!==n||o!==0&&f.nodeType!==3||(s=i+o),f!==l||r!==0&&f.nodeType!==3||(a=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break t;if(m===n&&++c===o&&(s=i),m===l&&++h===r&&(a=i),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ss={focusedElem:e,selectionRange:n},al=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,N=v.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:st(t.type,k),N);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(x){me(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return v=Ku,Ku=!1,v}function jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&$s(t,n,l)}o=o.next}while(o!==r)}}function Wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function As(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bf(e){var t=e.alternate;t!==null&&(e.alternate=null,bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[eo],delete t[cs],delete t[Cm],delete t[Tm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cf(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dl));else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}var Ce=null,at=!1;function Mt(e,t,n){for(n=n.child;n!==null;)Tf(e,t,n),n=n.sibling}function Tf(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:Le||Qn(n,t);case 6:var r=Ce,o=at;Ce=null,Mt(e,t,n),Ce=r,at=o,Ce!==null&&(at?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(at?(e=Ce,n=n.stateNode,e.nodeType===8?ki(e.parentNode,n):e.nodeType===1&&ki(e,n),Yr(e)):ki(Ce,n.stateNode));break;case 4:r=Ce,o=at,Ce=n.stateNode.containerInfo,at=!0,Mt(e,t,n),Ce=r,at=o;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&$s(n,t,i),o=o.next}while(o!==r)}Mt(e,t,n);break;case 1:if(!Le&&(Qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){me(n,t,s)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Mt(e,t,n),Le=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function Xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hm),t.forEach(function(r){var o=e0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ce=s.stateNode,at=!1;break e;case 3:Ce=s.stateNode.containerInfo,at=!0;break e;case 4:Ce=s.stateNode.containerInfo,at=!0;break e}s=s.return}if(Ce===null)throw Error(I(160));Tf(l,i,o),Ce=null,at=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){me(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)If(t,e),t=t.sibling}function If(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),vt(e),r&4){try{jr(3,e,e.return),Wl(3,e)}catch(k){me(e,e.return,k)}try{jr(5,e,e.return)}catch(k){me(e,e.return,k)}}break;case 1:it(t,e),vt(e),r&512&&n!==null&&Qn(n,n.return);break;case 5:if(it(t,e),vt(e),r&512&&n!==null&&Qn(n,n.return),e.flags&32){var o=e.stateNode;try{Qr(o,"")}catch(k){me(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Xc(o,l),Xi(s,i);var c=Xi(s,l);for(i=0;i<a.length;i+=2){var h=a[i],f=a[i+1];h==="style"?td(o,f):h==="dangerouslySetInnerHTML"?qc(o,f):h==="children"?Qr(o,f):Xs(o,h,f,c)}switch(s){case"input":Qi(o,l);break;case"textarea":Zc(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?Kn(o,!!l.multiple,y,!1):m!==!!l.multiple&&(l.defaultValue!=null?Kn(o,!!l.multiple,l.defaultValue,!0):Kn(o,!!l.multiple,l.multiple?[]:"",!1))}o[eo]=l}catch(k){me(e,e.return,k)}}break;case 6:if(it(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){me(e,e.return,k)}}break;case 3:if(it(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(k){me(e,e.return,k)}break;case 4:it(t,e),vt(e);break;case 13:it(t,e),vt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ia=ve())),r&4&&Xu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(c=Le)||h,it(t,e),Le=c):it(t,e),vt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(f=_=h;_!==null;){switch(m=_,y=m.child,m.tag){case 0:case 11:case 14:case 15:jr(4,m,m.return);break;case 1:Qn(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){me(r,n,k)}}break;case 5:Qn(m,m.return);break;case 22:if(m.memoizedState!==null){Ju(f);continue}}y!==null?(y.return=m,_=y):Ju(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{o=f.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=f.stateNode,a=f.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ed("display",i))}catch(k){me(e,e.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){me(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:it(t,e),vt(e),r&4&&Xu(e);break;case 21:break;default:it(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cf(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Qr(o,""),r.flags&=-33);var l=Yu(e);bs(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Yu(e);Es(e,s,i);break;default:throw Error(I(161))}}catch(a){me(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vm(e,t,n){_=e,Nf(e)}function Nf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Do;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Le;s=Do;var c=Le;if(Do=i,(Le=a)&&!c)for(_=o;_!==null;)i=_,a=i.child,i.tag===22&&i.memoizedState!==null?qu(o):a!==null?(a.return=i,_=a):qu(o);for(;l!==null;)_=l,Nf(l),l=l.sibling;_=o,Do=s,Le=c}Zu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,_=l):Zu(e)}}function Zu(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Wl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&_u(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_u(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Yr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Le||t.flags&512&&As(t)}catch(m){me(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Ju(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function qu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wl(4,t)}catch(a){me(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){me(t,o,a)}}var l=t.return;try{As(t)}catch(a){me(t,l,a)}break;case 5:var i=t.return;try{As(t)}catch(a){me(t,i,a)}}}catch(a){me(t,t.return,a)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var Gm=Math.ceil,Sl=zt.ReactCurrentDispatcher,Ca=zt.ReactCurrentOwner,nt=zt.ReactCurrentBatchConfig,te=0,Ee=null,xe=null,Te=0,Ve=0,Vn=an(0),$e=0,io=null,En=0,Hl=0,Ta=0,Br=null,Fe=null,Ia=0,ir=1/0,bt=null,$l=!1,Cs=null,Jt=null,Lo=!1,Qt=null,Al=0,Fr=0,Ts=null,Yo=-1,Xo=0;function Me(){return te&6?ve():Yo!==-1?Yo:Yo=ve()}function qt(e){return e.mode&1?te&2&&Te!==0?Te&-Te:Nm.transition!==null?(Xo===0&&(Xo=pd()),Xo):(e=oe,e!==0||(e=window.event,e=e===void 0?16:wd(e.type)),e):1}function ft(e,t,n,r){if(50<Fr)throw Fr=0,Ts=null,Error(I(185));po(e,n,r),(!(te&2)||e!==Ee)&&(e===Ee&&(!(te&2)&&(Hl|=n),$e===4&&Wt(e,Te)),Qe(e,r),n===1&&te===0&&!(t.mode&1)&&(ir=ve()+500,Bl&&un()))}function Qe(e,t){var n=e.callbackNode;Nh(e,t);var r=sl(e,e===Ee?Te:0);if(r===0)n!==null&&au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&au(n),t===1)e.tag===0?Im(ec.bind(null,e)):jd(ec.bind(null,e)),Em(function(){!(te&6)&&un()}),n=null;else{switch(hd(r)){case 1:n=ta;break;case 4:n=dd;break;case 16:n=il;break;case 536870912:n=fd;break;default:n=il}n=Mf(n,Rf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rf(e,t){if(Yo=-1,Xo=0,te&6)throw Error(I(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=sl(e,e===Ee?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var o=te;te|=2;var l=Df();(Ee!==e||Te!==t)&&(bt=null,ir=ve()+500,xn(e,t));do try{Xm();break}catch(s){Pf(e,s)}while(1);ha(),Sl.current=l,te=o,xe!==null?t=0:(Ee=null,Te=0,t=$e)}if(t!==0){if(t===2&&(o=ts(e),o!==0&&(r=o,t=Is(e,o))),t===1)throw n=io,xn(e,0),Wt(e,r),Qe(e,ve()),n;if(t===6)Wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Km(o)&&(t=El(e,r),t===2&&(l=ts(e),l!==0&&(r=l,t=Is(e,l))),t===1))throw n=io,xn(e,0),Wt(e,r),Qe(e,ve()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:pn(e,Fe,bt);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Ia+500-ve(),10<t)){if(sl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=us(pn.bind(null,e,Fe,bt),t);break}pn(e,Fe,bt);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-dt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gm(r/1960))-r,10<r){e.timeoutHandle=us(pn.bind(null,e,Fe,bt),r);break}pn(e,Fe,bt);break;case 5:pn(e,Fe,bt);break;default:throw Error(I(329))}}}return Qe(e,ve()),e.callbackNode===n?Rf.bind(null,e):null}function Is(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=El(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Ns(t)),e}function Ns(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Km(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!ht(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~Ta,t&=~Hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function ec(e){if(te&6)throw Error(I(327));qn();var t=sl(e,0);if(!(t&1))return Qe(e,ve()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=ts(e);r!==0&&(t=r,n=Is(e,r))}if(n===1)throw n=io,xn(e,0),Wt(e,t),Qe(e,ve()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Fe,bt),Qe(e,ve()),null}function Na(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(ir=ve()+500,Bl&&un())}}function bn(e){Qt!==null&&Qt.tag===0&&!(te&6)&&qn();var t=te;te|=1;var n=nt.transition,r=oe;try{if(nt.transition=null,oe=1,e)return e()}finally{oe=r,nt.transition=n,te=t,!(te&6)&&un()}}function Ra(){Ve=Vn.current,ae(Vn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Am(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:or(),ae(We),ae(_e),wa();break;case 5:xa(r);break;case 4:or();break;case 13:ae(fe);break;case 19:ae(fe);break;case 10:ma(r.type._context);break;case 22:case 23:Ra()}n=n.return}if(Ee=e,xe=e=en(e.current,null),Te=Ve=t,$e=0,io=null,Ta=Hl=En=0,Fe=Br=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}gn=null}return e}function Pf(e,t){do{var n=xe;try{if(ha(),Vo.current=kl,wl){for(var r=pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wl=!1}if(An=0,Ae=ke=pe=null,Mr=!1,ro=0,Ca.current=null,n===null||n.return===null){$e=1,io=t,xe=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=Te,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Fu(i);if(y!==null){y.flags&=-257,Uu(y,i,s,l,t),y.mode&1&&Bu(l,c,t),t=y,a=c;var v=t.updateQueue;if(v===null){var k=new Set;k.add(a),t.updateQueue=k}else v.add(a);break e}else{if(!(t&1)){Bu(l,c,t),Pa();break e}a=Error(I(426))}}else if(ce&&s.mode&1){var N=Fu(i);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Uu(N,i,s,l,t),fa(lr(a,s));break e}}l=a=lr(a,s),$e!==4&&($e=2),Br===null?Br=[l]:Br.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=mf(l,a,t);Lu(l,d);break e;case 1:s=a;var u=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Jt===null||!Jt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=gf(l,s,t);Lu(l,x);break e}}l=l.return}while(l!==null)}_f(n)}catch(S){t=S,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function Df(){var e=Sl.current;return Sl.current=kl,e===null?kl:e}function Pa(){($e===0||$e===3||$e===2)&&($e=4),Ee===null||!(En&268435455)&&!(Hl&268435455)||Wt(Ee,Te)}function El(e,t){var n=te;te|=2;var r=Df();(Ee!==e||Te!==t)&&(bt=null,xn(e,t));do try{Ym();break}catch(o){Pf(e,o)}while(1);if(ha(),te=n,Sl.current=r,xe!==null)throw Error(I(261));return Ee=null,Te=0,$e}function Ym(){for(;xe!==null;)Lf(xe)}function Xm(){for(;xe!==null&&!kh();)Lf(xe)}function Lf(e){var t=Of(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?_f(e):xe=t,Ca.current=null}function _f(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wm(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,xe=null;return}}else if(n=Um(n,t,Ve),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);$e===0&&($e=5)}function pn(e,t,n){var r=oe,o=nt.transition;try{nt.transition=null,oe=1,Zm(e,t,n,r)}finally{nt.transition=o,oe=r}return null}function Zm(e,t,n,r){do qn();while(Qt!==null);if(te&6)throw Error(I(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Rh(e,l),e===Ee&&(xe=Ee=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lo||(Lo=!0,Mf(il,function(){return qn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=nt.transition,nt.transition=null;var i=oe;oe=1;var s=te;te|=4,Ca.current=null,Qm(e,n),If(n,e),vm(ss),al=!!is,ss=is=null,e.current=n,Vm(n),Sh(),te=s,oe=i,nt.transition=l}else e.current=n;if(Lo&&(Lo=!1,Qt=e,Al=o),l=e.pendingLanes,l===0&&(Jt=null),Eh(n.stateNode),Qe(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if($l)throw $l=!1,e=Cs,Cs=null,e;return Al&1&&e.tag!==0&&qn(),l=e.pendingLanes,l&1?e===Ts?Fr++:(Fr=0,Ts=e):Fr=0,un(),null}function qn(){if(Qt!==null){var e=hd(Al),t=nt.transition,n=oe;try{if(nt.transition=null,oe=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,Al=0,te&6)throw Error(I(331));var o=te;for(te|=4,_=e.current;_!==null;){var l=_,i=l.child;if(_.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(_=c;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:jr(8,h,l)}var f=h.child;if(f!==null)f.return=h,_=f;else for(;_!==null;){h=_;var m=h.sibling,y=h.return;if(bf(h),h===c){_=null;break}if(m!==null){m.return=y,_=m;break}_=y}}}var v=l.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}_=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,_=i;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:jr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,_=d;break e}_=l.return}}var u=e.current;for(_=u;_!==null;){i=_;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,_=p;else e:for(i=u;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wl(9,s)}}catch(S){me(s,s.return,S)}if(s===i){_=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,_=x;break e}_=s.return}}if(te=o,un(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(_l,e)}catch{}r=!0}return r}finally{oe=n,nt.transition=t}}return!1}function tc(e,t,n){t=lr(n,t),t=mf(e,t,1),e=Zt(e,t,1),t=Me(),e!==null&&(po(e,1,t),Qe(e,t))}function me(e,t,n){if(e.tag===3)tc(e,e,n);else for(;t!==null;){if(t.tag===3){tc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=lr(n,e),e=gf(t,e,1),t=Zt(t,e,1),e=Me(),t!==null&&(po(t,1,e),Qe(t,e));break}}t=t.return}}function Jm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(Te&n)===n&&($e===4||$e===3&&(Te&130023424)===Te&&500>ve()-Ia?xn(e,0):Ta|=n),Qe(e,t)}function zf(e,t){t===0&&(e.mode&1?(t=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):t=1);var n=Me();e=Lt(e,t),e!==null&&(po(e,t,n),Qe(e,n))}function qm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zf(e,n)}function e0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),zf(e,n)}var Of;Of=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ue=!1,Fm(e,t,n);Ue=!!(e.flags&131072)}else Ue=!1,ce&&t.flags&1048576&&Bd(t,ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ko(e,t),e=t.pendingProps;var o=tr(t,_e.current);Jn(t,n),o=Sa(null,t,r,e,o,n);var l=$a();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(l=!0,pl(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,va(t),o.updater=Ul,t.stateNode=o,o._reactInternals=t,gs(t,r,e,n),t=xs(null,t,r,!0,l,n)):(t.tag=0,ce&&l&&ca(t),Oe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ko(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=n0(r),e=st(r,e),o){case 0:t=ys(null,t,r,e,n);break e;case 1:t=Qu(null,t,r,e,n);break e;case 11:t=Wu(null,t,r,e,n);break e;case 14:t=Hu(null,t,r,st(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),ys(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Qu(e,t,r,o,n);case 3:e:{if(wf(t),e===null)throw Error(I(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Vd(e,t),yl(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=lr(Error(I(423)),t),t=Vu(e,t,r,n,o);break e}else if(r!==o){o=lr(Error(I(424)),t),t=Vu(e,t,r,n,o);break e}else for(Ge=Xt(t.stateNode.containerInfo.firstChild),Ke=t,ce=!0,ct=null,n=Hd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===o){t=_t(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return Gd(t),e===null&&ps(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,as(r,o)?i=null:l!==null&&as(r,l)&&(t.flags|=32),xf(e,t),Oe(e,t,i,n),t.child;case 6:return e===null&&ps(t),null;case 13:return kf(e,t,n);case 4:return ya(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Wu(e,t,r,o,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,le(gl,r._currentValue),r._currentValue=i,l!==null)if(ht(l.value,i)){if(l.children===o.children&&!We.current){t=_t(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Rt(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),hs(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(I(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),hs(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Oe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Jn(t,n),o=rt(o),r=r(o),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,o=st(r,t.pendingProps),o=st(r.type,o),Hu(e,t,r,o,n);case 15:return vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Ko(e,t),t.tag=1,He(r)?(e=!0,pl(t)):e=!1,Jn(t,n),hf(t,r,o),gs(t,r,o,n),xs(null,t,r,!0,e,n);case 19:return Sf(e,t,n);case 22:return yf(e,t,n)}throw Error(I(156,t.tag))};function Mf(e,t){return cd(e,t)}function t0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new t0(e,t,n,r)}function Da(e){return e=e.prototype,!(!e||!e.isReactComponent)}function n0(e){if(typeof e=="function")return Da(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Js)return 11;if(e===qs)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Da(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case zn:return wn(n.children,o,l,t);case Zs:i=8,o|=8;break;case Bi:return e=tt(12,n,t,o|2),e.elementType=Bi,e.lanes=l,e;case Fi:return e=tt(13,n,t,o),e.elementType=Fi,e.lanes=l,e;case Ui:return e=tt(19,n,t,o),e.elementType=Ui,e.lanes=l,e;case Gc:return Ql(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qc:i=10;break e;case Vc:i=9;break e;case Js:i=11;break e;case qs:i=14;break e;case Bt:i=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=tt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function wn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=tt(22,e,r,t),e.elementType=Gc,e.lanes=n,e.stateNode={isHidden:!1},e}function Ii(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Ni(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function r0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ci(0),this.expirationTimes=ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ci(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function La(e,t,n,r,o,l,i,s,a){return e=new r0(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=tt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},va(l),e}function o0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jf(e){if(!e)return rn;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(He(n))return Md(e,n,t)}return t}function Bf(e,t,n,r,o,l,i,s,a){return e=La(n,r,!0,e,o,l,i,s,a),e.context=jf(null),n=e.current,r=Me(),o=qt(n),l=Rt(r,o),l.callback=t??null,Zt(n,l,o),e.current.lanes=o,po(e,o,r),Qe(e,r),e}function Vl(e,t,n,r){var o=t.current,l=Me(),i=qt(o);return n=jf(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(o,t,i),e!==null&&(ft(e,o,i,l),Qo(e,o,i)),i}function bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _a(e,t){nc(e,t),(e=e.alternate)&&nc(e,t)}function l0(){return null}var Ff=typeof reportError=="function"?reportError:function(e){console.error(e)};function za(e){this._internalRoot=e}Gl.prototype.render=za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Vl(e,t,null,null)};Gl.prototype.unmount=za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Vl(null,e,null,null)}),t[Dt]=null}};function Gl(e){this._internalRoot=e}Gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=vd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&xd(e)}};function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rc(){}function i0(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=bl(i);l.call(c)}}var i=Bf(t,r,e,0,null,!1,!1,"",rc);return e._reactRootContainer=i,e[Dt]=i.current,Jr(e.nodeType===8?e.parentNode:e),bn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=bl(a);s.call(c)}}var a=La(e,0,!1,null,null,!1,!1,"",rc);return e._reactRootContainer=a,e[Dt]=a.current,Jr(e.nodeType===8?e.parentNode:e),bn(function(){Vl(t,a,n,r)}),a}function Yl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=bl(i);s.call(a)}}Vl(t,i,e,o)}else i=i0(n,t,e,o,r);return bl(i)}md=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ir(t.pendingLanes);n!==0&&(na(t,n|1),Qe(t,ve()),!(te&6)&&(ir=ve()+500,un()))}break;case 13:bn(function(){var r=Lt(e,1);if(r!==null){var o=Me();ft(r,e,1,o)}}),_a(e,1)}};ra=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Me();ft(t,e,134217728,n)}_a(e,134217728)}};gd=function(e){if(e.tag===13){var t=qt(e),n=Lt(e,t);if(n!==null){var r=Me();ft(n,e,t,r)}_a(e,t)}};vd=function(){return oe};yd=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Ji=function(e,t,n){switch(t){case"input":if(Qi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=jl(r);if(!o)throw Error(I(90));Yc(r),Qi(r,o)}}}break;case"textarea":Zc(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};od=Na;ld=bn;var s0={usingClientEntryPoint:!1,Events:[mo,Bn,jl,nd,rd,Na]},Er={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a0={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ad(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||l0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{_l=_o.inject(a0),wt=_o}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oa(t))throw Error(I(200));return o0(e,t,null,n)};Xe.createRoot=function(e,t){if(!Oa(e))throw Error(I(299));var n=!1,r="",o=Ff;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=La(e,1,!1,null,null,n,!1,r,o),e[Dt]=t.current,Jr(e.nodeType===8?e.parentNode:e),new za(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=ad(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return bn(e)};Xe.hydrate=function(e,t,n){if(!Kl(t))throw Error(I(200));return Yl(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!Oa(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Ff;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,o,!1,l,i),e[Dt]=t.current,Jr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Gl(t)};Xe.render=function(e,t,n){if(!Kl(t))throw Error(I(200));return Yl(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!Kl(e))throw Error(I(40));return e._reactRootContainer?(bn(function(){Yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};Xe.unstable_batchedUpdates=Na;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Kl(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Yl(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Uf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uf)}catch(e){console.error(e)}}Uf(),Fc.exports=Xe;var Wf=Fc.exports,oc=Wf;Mi.createRoot=oc.createRoot,Mi.hydrateRoot=oc.hydrateRoot;var se="-ms-",Ur="-moz-",re="-webkit-",Hf="comm",Xl="rule",Ma="decl",u0="@import",c0="@namespace",Qf="@keyframes",d0="@layer",Vf=Math.abs,ja=String.fromCharCode,Rs=Object.assign;function f0(e,t){return Se(e,0)^45?(((t<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3):0}function Gf(e){return e.trim()}function Ct(e,t){return(e=t.exec(e))?e[0]:e}function Z(e,t,n){return e.replace(t,n)}function Jo(e,t,n){return e.indexOf(t,n)}function Se(e,t){return e.charCodeAt(t)|0}function Cn(e,t,n){return e.slice(t,n)}function ut(e){return e.length}function Kf(e){return e.length}function Rr(e,t){return t.push(e),e}function p0(e,t){return e.map(t).join("")}function lc(e,t){return e.filter(function(n){return!Ct(n,t)})}var Zl=1,sr=1,Yf=0,lt=0,ye=0,mr="";function Jl(e,t,n,r,o,l,i,s){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:Zl,column:sr,length:i,return:"",siblings:s}}function jt(e,t){return Rs(Jl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Dn(e){for(;e.root;)e=jt(e.root,{children:[e]});Rr(e,e.siblings)}function h0(){return ye}function m0(){return ye=lt>0?Se(mr,--lt):0,sr--,ye===10&&(sr=1,Zl--),ye}function pt(){return ye=lt<Yf?Se(mr,lt++):0,sr++,ye===10&&(sr=1,Zl++),ye}function Vt(){return Se(mr,lt)}function qo(){return lt}function ql(e,t){return Cn(mr,e,t)}function so(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g0(e){return Zl=sr=1,Yf=ut(mr=e),lt=0,[]}function v0(e){return mr="",e}function Ri(e){return Gf(ql(lt-1,Ps(e===91?e+2:e===40?e+1:e)))}function y0(e){for(;(ye=Vt())&&ye<33;)pt();return so(e)>2||so(ye)>3?"":" "}function x0(e,t){for(;--t&&pt()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return ql(e,qo()+(t<6&&Vt()==32&&pt()==32))}function Ps(e){for(;pt();)switch(ye){case e:return lt;case 34:case 39:e!==34&&e!==39&&Ps(ye);break;case 40:e===41&&Ps(e);break;case 92:pt();break}return lt}function w0(e,t){for(;pt()&&e+ye!==47+10;)if(e+ye===42+42&&Vt()===47)break;return"/*"+ql(t,lt-1)+"*"+ja(e===47?e:pt())}function k0(e){for(;!so(Vt());)pt();return ql(e,lt)}function S0(e){return v0(el("",null,null,null,[""],e=g0(e),0,[0],e))}function el(e,t,n,r,o,l,i,s,a){for(var c=0,h=0,f=i,m=0,y=0,v=0,k=1,N=1,d=1,u=0,p="",x=o,S=l,E=r,$=p;N;)switch(v=u,u=pt()){case 40:if(v!=108&&Se($,f-1)==58){Jo($+=Z(Ri(u),"&","&\f"),"&\f",Vf(c?s[c-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:$+=Ri(u);break;case 9:case 10:case 13:case 32:$+=y0(v);break;case 92:$+=x0(qo()-1,7);continue;case 47:switch(Vt()){case 42:case 47:Rr($0(w0(pt(),qo()),t,n,a),a),(so(v||1)==5||so(Vt()||1)==5)&&ut($)&&Cn($,-1,void 0)!==" "&&($+=" ");break;default:$+="/"}break;case 123*k:s[c++]=ut($)*d;case 125*k:case 59:case 0:switch(u){case 0:case 125:N=0;case 59+h:d==-1&&($=Z($,/\f/g,"")),y>0&&(ut($)-f||k===0&&v===47)&&Rr(y>32?sc($+";",r,n,f-1,a):sc(Z($," ","")+";",r,n,f-2,a),a);break;case 59:$+=";";default:if(Rr(E=ic($,t,n,c,h,o,s,p,x=[],S=[],f,l),l),u===123)if(h===0)el($,t,E,E,x,l,f,s,S);else{switch(m){case 99:if(Se($,3)===110)break;case 108:if(Se($,2)===97)break;default:h=0;case 100:case 109:case 115:}h?el(e,E,E,r&&Rr(ic(e,E,E,0,0,o,s,p,o,x=[],f,S),S),o,S,f,s,r?x:S):el($,E,E,E,[""],S,0,s,S)}}c=h=y=0,k=d=1,p=$="",f=i;break;case 58:f=1+ut($),y=v;default:if(k<1){if(u==123)--k;else if(u==125&&k++==0&&m0()==125)continue}switch($+=ja(u),u*k){case 38:d=h>0?1:($+="\f",-1);break;case 44:s[c++]=(ut($)-1)*d,d=1;break;case 64:Vt()===45&&($+=Ri(pt())),m=Vt(),h=f=ut(p=$+=k0(qo())),u++;break;case 45:v===45&&ut($)==2&&(k=0)}}return l}function ic(e,t,n,r,o,l,i,s,a,c,h,f){for(var m=o-1,y=o===0?l:[""],v=Kf(y),k=0,N=0,d=0;k<r;++k)for(var u=0,p=Cn(e,m+1,m=Vf(N=i[k])),x=e;u<v;++u)(x=Gf(N>0?y[u]+" "+p:Z(p,/&\f/g,y[u])))&&(a[d++]=x);return Jl(e,t,n,o===0?Xl:s,a,c,h,f)}function $0(e,t,n,r){return Jl(e,t,n,Hf,ja(h0()),Cn(e,2,-2),0,r)}function sc(e,t,n,r,o){return Jl(e,t,n,Ma,Cn(e,0,r),Cn(e,r+1,-1),r,o)}function Xf(e,t,n){switch(f0(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return re+e+e;case 4855:return re+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ur+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Ur+e+se+e+e;case 5936:switch(Se(e,t+11)){case 114:return re+e+se+Z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+se+Z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+se+Z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+se+e+e;case 6165:return re+e+se+"flex-"+e+e;case 5187:return re+e+Z(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+se+"flex-$1$2")+e;case 5443:return re+e+se+"flex-item-"+Z(e,/flex-|-self/g,"")+(Ct(e,/flex-|baseline/)?"":se+"grid-row-"+Z(e,/flex-|-self/g,""))+e;case 4675:return re+e+se+"flex-line-pack"+Z(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+se+Z(e,"shrink","negative")+e;case 5292:return re+e+se+Z(e,"basis","preferred-size")+e;case 6060:return re+"box-"+Z(e,"-grow","")+re+e+se+Z(e,"grow","positive")+e;case 4554:return re+Z(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return Z(Z(Z(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return Z(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return Z(Z(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+se+"flex-pack:$3"),/space-between/,"justify")+re+e+e;case 4200:if(!Ct(e,/flex-|baseline/))return se+"grid-column-align"+Cn(e,t)+e;break;case 2592:case 3360:return se+Z(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Ct(r.props,/grid-\w+-end/)})?~Jo(e+(n=n[t].value),"span",0)?e:se+Z(e,"-start","")+e+se+"grid-row-span:"+(~Jo(n,"span",0)?Ct(n,/\d+/):+Ct(n,/\d+/)-+Ct(e,/\d+/))+";":se+Z(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ct(r.props,/grid-\w+-start/)})?e:se+Z(Z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Z(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ut(e)-1-t>6)switch(Se(e,t+1)){case 109:if(Se(e,t+4)!==45)break;case 102:return Z(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Ur+(Se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Jo(e,"stretch",0)?Xf(Z(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,i,s,a,c){return se+o+":"+l+c+(i?se+o+"-span:"+(s?a:+a-+l)+c:"")+e});case 4949:if(Se(e,t+6)===121)return Z(e,":",":"+re)+e;break;case 6444:switch(Se(e,Se(e,14)===45?18:11)){case 120:return Z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(Se(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+se+"$2box$3")+e;case 100:return Z(e,":",":"+se)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(e,"scroll-","scroll-snap-")+e}return e}function Cl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function A0(e,t,n,r){switch(e.type){case d0:if(e.children.length)break;case u0:case c0:case Ma:return e.return=e.return||e.value;case Hf:return"";case Qf:return e.return=e.value+"{"+Cl(e.children,r)+"}";case Xl:if(!ut(e.value=e.props.join(",")))return""}return ut(n=Cl(e.children,r))?e.return=e.value+"{"+n+"}":""}function E0(e){var t=Kf(e);return function(n,r,o,l){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,l)||"";return i}}function b0(e){return function(t){t.root||(t=t.return)&&e(t)}}function C0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ma:e.return=Xf(e.value,e.length,n);return;case Qf:return Cl([jt(e,{value:Z(e.value,"@","@"+re)})],r);case Xl:if(e.length)return p0(n=e.props,function(o){switch(Ct(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Dn(jt(e,{props:[Z(o,/:(read-\w+)/,":"+Ur+"$1")]})),Dn(jt(e,{props:[o]})),Rs(e,{props:lc(n,r)});break;case"::placeholder":Dn(jt(e,{props:[Z(o,/:(plac\w+)/,":"+re+"input-$1")]})),Dn(jt(e,{props:[Z(o,/:(plac\w+)/,":"+Ur+"$1")]})),Dn(jt(e,{props:[Z(o,/:(plac\w+)/,se+"input-$1")]})),Dn(jt(e,{props:[o]})),Rs(e,{props:lc(n,r)});break}return""})}}var Pi,Di;const ar=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Zf="active",Jf="data-styled-version",ei="6.4.1",Ba=`/*!sc*/
`,Wr=typeof window<"u"&&typeof document<"u";function ac(e){if(typeof process<"u"&&process.env!==void 0){const t=process.env[e];if(t!==void 0&&t!=="")return t!=="false"}}const T0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Di=(Pi=ac("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Pi!==void 0?Pi:ac("SC_DISABLE_SPEEDY"))!==null&&Di!==void 0?Di:typeof process>"u"||process.env===void 0),I0="sc-keyframes-",N0={};function ur(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let tl=new Map,Tl=new Map,nl=1;const zo=e=>{if(tl.has(e))return tl.get(e);for(;Tl.has(nl);)nl++;const t=nl++;return tl.set(e,t),Tl.set(t,e),t},R0=e=>Tl.get(e),P0=(e,t)=>{nl=t+1,tl.set(e,t),Tl.set(t,e)},Fa=Object.freeze([]),cr=Object.freeze({});function qf(e,t,n=cr){return e.theme!==n.theme&&e.theme||t||n.theme}const D0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,L0=/(^-|-$)/g;function ep(e){return e.replace(D0,"-").replace(L0,"")}const _0=/(a)(d)/gi,uc=e=>String.fromCharCode(e+(e>25?39:97));function tp(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=uc(t%52)+n;return(uc(t%52)+n).replace(_0,"$1-$2")}const Ds=5381,kn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},np=e=>kn(Ds,e);function rp(e){return tp(np(e)>>>0)}function z0(e){return e.displayName||e.name||"Component"}function Ls(e){return typeof e=="string"&&!0}function O0(e){return Ls(e)?`styled.${e}`:`Styled(${z0(e)})`}const op=Symbol.for("react.memo"),M0=Symbol.for("react.forward_ref"),j0={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},B0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},F0={[M0]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[op]:lp};function cc(e){return("type"in(t=e)&&t.type.$$typeof)===op?lp:"$$typeof"in e?F0[e.$$typeof]:j0;var t}const U0=Object.defineProperty,W0=Object.getOwnPropertyNames,H0=Object.getOwnPropertySymbols,Q0=Object.getOwnPropertyDescriptor,V0=Object.getPrototypeOf,G0=Object.prototype;function ip(e,t,n){if(typeof t!="string"){const r=V0(t);r&&r!==G0&&ip(e,r,n);const o=W0(t).concat(H0(t)),l=cc(e),i=cc(t);for(let s=0;s<o.length;++s){const a=o[s];if(!(a in B0||n&&n[a]||i&&a in i||l&&a in l)){const c=Q0(t,a);try{U0(e,a,c)}catch{}}}}return e}function gr(e){return typeof e=="function"}function Ua(e){return typeof e=="object"&&"styledComponentId"in e}function Pr(e,t){return e&&t?e+" "+t:e||t||""}function _s(e,t){return e.join(t||"")}function ao(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function zs(e,t,n=!1){if(!n&&!ao(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=zs(e[r],t[r]);else if(ao(t))for(const r in t)e[r]=zs(e[r],t[r]);return e}function sp(e,t){Object.defineProperty(e,"toString",{value:t})}const K0=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,l=o.length;let i=l;for(;e>=i;)if(i<<=1,i<0)throw ur(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(let s=l;s<i;s++)this.groupSizes[s]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,l=t.length;o<l;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let l=r;l<o;l++)t+=this.tag.getRule(l)+Ba;return t}},Y0=`style[${ar}][${Jf}="${ei}"]`,X0=new RegExp(`^${ar}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),dc=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Os=e=>{if(!e)return document;if(dc(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(dc(t))return t}return document},Z0=(e,t,n)=>{const r=n.split(",");let o;for(let l=0,i=r.length;l<i;l++)(o=r[l])&&e.registerName(t,o)},J0=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ba),o=[];for(let l=0,i=r.length;l<i;l++){const s=r[l].trim();if(!s)continue;const a=s.match(X0);if(a){const c=0|parseInt(a[1],10),h=a[2];c!==0&&(P0(h,c),Z0(e,h,a[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}},Li=e=>{const t=Os(e.options.target).querySelectorAll(Y0);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(ar)!==Zf&&(J0(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let br=!1;function q0(){if(br!==!1)return br;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return br=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return br=t.getAttribute("content")||void 0}return br=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const ap=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),l=(a=>{const c=Array.from(a.querySelectorAll(`style[${ar}]`));return c[c.length-1]})(r),i=l!==void 0?l.nextSibling:null;o.setAttribute(ar,Zf),o.setAttribute(Jf,ei);const s=t||q0();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},eg=class{constructor(e,t){this.element=ap(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let l=0,i=o.length;l<i;l++){const s=o[l];if(s.ownerNode===n)return s}throw ur(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},tg=class{constructor(e,t){this.element=ap(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let fc=Wr;const ng={isServer:!Wr,useCSSOMInjection:!T0};class vo{static registerId(t){return zo(t)}constructor(t=cr,n={},r){this.options=Object.assign(Object.assign({},ng),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Wr&&fc&&(fc=!1,Li(this)),sp(this,()=>(o=>{const l=o.getTag(),{length:i}=l;let s="";for(let a=0;a<i;a++){const c=R0(a);if(c===void 0)continue;const h=o.names.get(c);if(h===void 0||!h.size)continue;const f=l.getGroup(a);if(f.length===0)continue;const m=ar+".g"+a+'[id="'+c+'"]';let y="";for(const v of h)v.length>0&&(y+=v+",");s+=f+m+'{content:"'+y+'"}'+Ba}return s})(this))}rehydrate(){!this.server&&Wr&&Li(this)}reconstructWithOptions(t,n=!0){const r=new vo(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Wr&&t.target!==this.options.target&&Os(this.options.target)!==Os(t.target)&&Li(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new eg(r,o):new tg(r,o))(this.options),new K0(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){zo(t),t.startsWith(I0)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(zo(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(zo(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const up=new WeakSet,rg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function og(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in rg||e.startsWith("--")?String(t).trim():t+"px"}const hn=47;function pc(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const lg=Symbol.for("sc-keyframes");function ig(e){return typeof e=="object"&&e!==null&&lg in e}function cp(e){return gr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const dp=e=>e==null||e===!1||e==="",sg=Symbol.for("react.client.reference");function hc(e){return e.$$typeof===sg}function fp(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!dp(r)&&(Array.isArray(r)&&up.has(r)||gr(r)?t.push(pc(n)+":",r,";"):ao(r)?(t.push(n+" {"),fp(r,t),t.push("}")):t.push(pc(n)+": "+og(n,r)+";"))}}function tn(e,t,n,r,o=[]){if(dp(e))return o;const l=typeof e;if(l==="string")return o.push(e),o;if(l==="function"){if(hc(e))return o;if(cp(e)&&t){const i=e(t);return tn(i,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let i=0;i<e.length;i++)tn(e[i],t,n,r,o);return o}return Ua(e)?(o.push(`.${e.styledComponentId}`),o):ig(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):hc(e)?o:ao(e)?(fp(e,o),o):(o.push(e.toString()),o)}const ag=np(ei);class ug{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=kn(ag,n),this.baseStyle=r,vo.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let l="";for(let i=0;i<this.rules.length;i++){const s=this.rules[i];if(typeof s=="string")l+=s;else if(s)if(cp(s)){const a=s(t);typeof a=="string"?l+=a:a!=null&&a!==!1&&(l+=_s(tn(a,t,n,r)))}else l+=_s(tn(s,t,n,r))}if(l){this.dynamicNameCache||(this.dynamicNameCache=new Map);const i=r.hash?r.hash+l:l;let s=this.dynamicNameCache.get(i);if(!s){if(s=tp(kn(kn(this.baseHash,r.hash),l)>>>0),this.dynamicNameCache.size>=200){const a=this.dynamicNameCache.keys().next().value;a!==void 0&&this.dynamicNameCache.delete(a)}this.dynamicNameCache.set(i,s)}if(!n.hasNameForId(this.componentId,s)){const a=r(l,"."+s,void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=Pr(o,s)}}return o}}const cg=/&/g;function pp(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function _i(e){const t=e.length;let n="",r=0,o=0,l=0,i=!1,s=!1;for(let a=0;a<t;a++){const c=e.charCodeAt(a);if(l!==0||i||c!==hn||e.charCodeAt(a+1)!==42)if(i)c===42&&e.charCodeAt(a+1)===hn&&(i=!1,a++);else if(c!==34&&c!==39||pp(e,a)){if(l===0)if(c===123)o++;else if(c===125){if(o--,o<0){s=!0;let h=a+1;for(;h<t;){const f=e.charCodeAt(h);if(f===59||f===10)break;h++}h<t&&e.charCodeAt(h)===59&&h++,o=0,a=h-1,r=h;continue}o===0&&(n+=e.substring(r,a+1),r=a+1)}else c===59&&o===0&&(n+=e.substring(r,a+1),r=a+1)}else l===0?l=c:l===c&&(l=0);else i=!0,a++}return s||o!==0||l!==0?(r<t&&o===0&&l===0&&(n+=e.substring(r)),n):e}function hp(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const l=e[o];if(l.type==="rule"){l.value=(n+l.value).replaceAll(",",r);const i=l.props,s=[];for(let a=0;a<i.length;a++)s[a]=n+i[a];l.props=s}Array.isArray(l.children)&&l.type!=="@keyframes"&&hp(l.children,t)}return e}function dg({options:e=cr,plugins:t=Fa}=cr){let n,r,o;const l=(m,y,v)=>v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?`.${n}`:m,i=t.slice();i.push(m=>{m.type===Xl&&m.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),m.props[0]=m.props[0].replace(cg,r).replace(o,l))}),e.prefix&&i.push(C0),i.push(A0);let s=[];const a=E0(i.concat(b0(m=>s.push(m)))),c=(m,y="",v="",k="&")=>{n=k,r=y,o=void 0;const N=function(u){const p=u.indexOf("//")!==-1,x=u.indexOf("}")!==-1;if(!p&&!x)return u;if(!p)return _i(u);const S=u.length;let E="",$=0,b=0,W=0,j=0,K=0,q=!1;for(;b<S;){const Y=u.charCodeAt(b);if(Y!==34&&Y!==39||pp(u,b))if(W===0)if(Y===hn&&b+1<S&&u.charCodeAt(b+1)===42){for(b+=2;b+1<S&&(u.charCodeAt(b)!==42||u.charCodeAt(b+1)!==hn);)b++;b+=2}else if(Y!==40)if(Y!==41)if(j>0)b++;else if(Y===42&&b+1<S&&u.charCodeAt(b+1)===hn)E+=u.substring($,b),b+=2,$=b,q=!0;else if(Y===hn&&b+1<S&&u.charCodeAt(b+1)===hn){for(E+=u.substring($,b);b<S&&u.charCodeAt(b)!==10;)b++;$=b,q=!0}else Y===123?K++:Y===125&&K--,b++;else j>0&&j--,b++;else j++,b++;else b++;else W===0?W=Y:W===Y&&(W=0),b++}return q?($<S&&(E+=u.substring($)),K===0?E:_i(E)):K===0?u:_i(u)}(m);let d=S0(v||y?v+" "+y+" { "+N+" }":N);return e.namespace&&(d=hp(d,e.namespace)),s=[],Cl(d,a),s},h=e;let f=Ds;for(let m=0;m<t.length;m++)t[m].name||ur(15),f=kn(f,t[m].name);return h!=null&&h.namespace&&(f=kn(f,h.namespace)),h!=null&&h.prefix&&(f=kn(f,"p")),c.hash=f!==Ds?f.toString():"",c}const fg=new vo,pg=dg(),mp=g.createContext({shouldForwardProp:void 0,styleSheet:fg,stylis:pg,stylisPlugins:void 0});mp.Consumer;function gp(){return g.useContext(mp)}const uo=g.createContext(void 0);uo.Consumer;function hg(e){const t=g.useContext(uo),n=g.useMemo(()=>function(r,o){if(!r)throw ur(14);if(gr(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw ur(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?g.createElement(uo.Provider,{value:n},e.children):null}const mc=Object.prototype.hasOwnProperty,zi={};function mg(e,t){const n=typeof e!="string"?"sc":ep(e);zi[n]=(zi[n]||0)+1;const r=n+"-"+rp(ei+n+zi[n]);return t?t+"-"+r:r}function gg(e,t,n){const r=Ua(e),o=e,l=!Ls(e),{attrs:i=Fa,componentId:s=mg(t.displayName,t.parentComponentId),displayName:a=O0(e)}=t,c=t.displayName&&t.componentId?ep(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&o.attrs?o.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:f}=t;if(r&&o.shouldForwardProp){const k=o.shouldForwardProp;if(t.shouldForwardProp){const N=t.shouldForwardProp;f=(d,u)=>k(d,u)&&N(d,u)}else f=k}const m=new ug(n,c,r?o.componentStyle:void 0);function y(k,N){return function(d,u,p){const{attrs:x,componentStyle:S,defaultProps:E,foldedComponentIds:$,styledComponentId:b,target:W}=d,j=g.useContext(uo),K=gp(),q=d.shouldForwardProp||K.shouldForwardProp,Y=qf(u,j,E)||cr;let C,L;{const P=g.useRef(null),z=P.current;if(z!==null&&z[1]===Y&&z[2]===K.styleSheet&&z[3]===K.stylis&&z[7]===S&&function(ee,V,M){const B=ee,U=V;let G=0;for(const X in U)if(mc.call(U,X)&&(G++,B[X]!==U[X]))return!1;return G===M}(z[0],u,z[4]))C=z[5],L=z[6];else{C=function(V,M,B){const U=Object.assign(Object.assign({},M),{className:void 0,theme:B}),G=V.length>1;for(let X=0;X<V.length;X++){const Re=V[X],R=gr(Re)?Re(G?Object.assign({},U):U):Re;for(const Q in R)Q==="className"?U.className=Pr(U.className,R[Q]):Q==="style"?U.style=Object.assign(Object.assign({},U.style),R[Q]):Q in M&&M[Q]===void 0||(U[Q]=R[Q])}return"className"in M&&typeof M.className=="string"&&(U.className=Pr(U.className,M.className)),U}(x,u,Y),L=function(V,M,B,U){return V.generateAndInjectStyles(M,B,U)}(S,C,K.styleSheet,K.stylis);let ee=0;for(const V in u)mc.call(u,V)&&ee++;P.current=[u,Y,K.styleSheet,K.stylis,ee,C,L,S]}}const O=C.as||W,H=function(P,z,ee,V){const M={};for(const B in P)P[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&P.theme===ee||(B==="forwardedAs"?M.as=P.forwardedAs:V&&!V(B,z)||(M[B]=P[B]));return M}(C,O,Y,q);let A=Pr($,b);return L&&(A+=" "+L),C.className&&(A+=" "+C.className),H[Ls(O)&&O.includes("-")?"class":"className"]=A,p&&(H.ref=p),w.createElement(O,H)}(v,k,N)}y.displayName=a;let v=g.forwardRef(y);return v.attrs=h,v.componentStyle=m,v.displayName=a,v.shouldForwardProp=f,v.foldedComponentIds=r?Pr(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=c,v.target=r?o.target:e,Object.defineProperty(v,"defaultProps",{get(){return this._foldedDefaultProps},set(k){this._foldedDefaultProps=r?function(N,...d){for(const u of d)zs(N,u,!0);return N}({},o.defaultProps,k):k}}),sp(v,()=>`.${v.styledComponentId}`),l&&ip(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}var vg=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function gc(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const vc=e=>(up.add(e),e);function D(e,...t){if(gr(e)||ao(e))return vc(tn(gc(Fa,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?tn(n):vc(tn(gc(n,t)))}function Ms(e,t,n=cr){if(!t)throw ur(1,t);const r=(o,...l)=>e(t,n,D(o,...l));return r.attrs=o=>Ms(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>Ms(e,t,Object.assign(Object.assign({},n),o)),r}const vp=e=>Ms(gg,e),T=vp;vg.forEach(e=>{T[e]=vp(e)});class yg{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const l=r[o];if(gr(l)&&!Ua(l))return!1}return!0}(t),vo.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const l=this.componentId;if(this.isStatic){if(r.hasNameForId(l,l+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const s=this.computeRules(t,n,r,o);r.insertRules(l,s.name,s.rules)}return}const i=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&i){const s=i.rules,a=this.instanceRules.get(t).rules;if(s.length===a.length){let c=!0;for(let h=0;h<s.length;h++)if(s[h]!==a[h]){c=!1;break}if(c)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const l=_s(tn(this.rules,n,r,o)),i={name:this.componentId+t,rules:o(l,"")};return this.instanceRules.set(t,i),i}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function xg(e,...t){const n=D(e,...t),r=`sc-global-${rp(JSON.stringify(n))}`,o=new yg(n,r),l=s=>{const a=gp(),c=g.useContext(uo);let h;{const f=g.useRef(null);f.current===null&&(f.current=a.styleSheet.allocateGSInstance(r)),h=f.current}a.styleSheet.server&&i(h,s,a.styleSheet,c,a.stylis);{const f=o.isStatic?[h,a.styleSheet,o]:[h,s,a.styleSheet,c,a.stylis,o],m=g.useRef(o);g.useLayoutEffect(()=>{a.styleSheet.server||(m.current!==o&&(a.styleSheet.clearRules(r),m.current=o),i(h,s,a.styleSheet,c,a.stylis))},f),g.useLayoutEffect(()=>()=>{a.styleSheet.server||o.removeStyles(h,a.styleSheet)},[h,a.styleSheet,o])}return a.styleSheet.server&&o.instanceRules.delete(h),null};function i(s,a,c,h,f){if(o.isStatic)o.renderStyles(s,N0,c,f);else{const m=Object.assign(Object.assign({},a),{theme:qf(a,h,l.defaultProps)});o.renderStyles(s,m,c,f)}}return g.memo(l)}var wg=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const Wa="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Ha="inset 2px 2px 3px rgba(0,0,0,0.2)",mt=()=>D`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,gt=({background:e="material",color:t="materialText"}={})=>D`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,yo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>D`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,Tn=()=>D`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Ln={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},kg=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?Wa:!1,o?Ha:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),ge=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return D`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Ln[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Ln[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Ln[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Ln[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>kg({theme:r,topLeftInner:Ln[t][n.topLeftInner],bottomRightInner:Ln[t][n.bottomRightInner],hasShadow:o})};
  `},dr=()=>D`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,Sg=e=>Buffer.from(e).toString("base64"),$g=typeof btoa<"u"?btoa:Sg,Oo=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${$g(n)})`},Qa=(e="default")=>D`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>yo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${gt()}
    ${e==="flat"?Tn():ge({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${gt()}
    ${e==="flat"?Tn():ge({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?ge({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Oo(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Oo(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Oo(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Oo(t.materialText,0)};
  }
`,Ag=T.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Eg=w.forwardRef(({children:e,underline:t=!0,...n},r)=>g.createElement(Ag,{ref:r,underline:t,...n},e));Eg.displayName="Anchor";const bg=T.header`
  ${ge()};
  ${gt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,js=w.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>g.createElement(bg,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));js.displayName="AppBar";const Rn=()=>{};function yn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function Cg(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function yc(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Cg(t)))}function on(e){return typeof e=="number"?`${e}px`:e}const Tg=T.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Ig=T.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Ng=w.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:l,...i},s)=>g.createElement(Tg,{noBorder:n,ref:s,size:on(r),square:o,src:l,...i},l?g.createElement(Ig,{src:l,alt:e}):t));Ng.displayName="Avatar";const Ie={sm:"28px",md:"36px",lg:"44px"},Rg=D`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Ie[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Ie[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,ti=T.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?D`
          ${Tn()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&dr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?D`
          ${gt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&ge({style:"buttonThin"})}
          }
          &:active {
            ${!t&&ge({style:"buttonThinPressed"})}
          }
          ${e&&ge({style:"buttonThinPressed"})}
          ${t&&mt()}
        `:D`
          ${gt()};
          border: none;
          ${t&&mt()}
          ${e?yo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?D`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:D`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${ge(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&ge({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&dr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${Rg}
`,ze=w.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:l="md",square:i=!1,active:s=!1,onTouchStart:a=Rn,primary:c=!1,variant:h="default",...f},m)=>g.createElement(ti,{active:s,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:a,primary:c,ref:m,size:l,square:i,type:r,variant:h,...f},n));ze.displayName="Button";function ln({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:l="value"}){const i=o!==void 0,[s,a]=w.useState(e),c=w.useCallback(h=>{i||a(h)},[i]);if(i&&typeof t!="function"&&!r){const h=`Warning: You provided a \`${l}\` prop to a component without an \`${n}\` handler.${l==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${l}\`.`}`;console.warn(h)}return[i?o:s,c]}const Bs=T.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Ie[e.size]};
  width: ${e=>e.square?Ie[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Ie[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&mt()}
`,Pg=w.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:l,...i},s)=>g.createElement(Bs,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:l,role:"menuitem",ref:s,"aria-disabled":t,...i},r));Pg.displayName="MenuListItem";const Dg=T.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${ge({style:"window"})}
  ${gt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Dg.displayName="MenuList";const St=20,Il=T.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${St}px;
  height: ${St}px;
  opacity: 0;
  z-index: -1;
`,Va=T.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&mt()}

  ${Bs} & {
    margin: 0;
    height: 100%;
  }
  ${Bs}:hover & {
    ${({$disabled:e,theme:t})=>!e&&D`
        color: ${t.materialTextInvert};
      `};
  }
`,Ga=T.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Il}:focus ~ & {
    ${dr}
  }
  ${Il}:not(:disabled) ~ &:active {
    ${dr}
  }
`,$t=T.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${Ha};`}
  }
`,Lg=T.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Qa()}
`,yp=w.forwardRef(({children:e,shadow:t=!0,...n},r)=>g.createElement($t,{ref:r,shadow:t,...n},g.createElement(Lg,null,e)));yp.displayName="ScrollView";const xp=D`
  width: ${St}px;
  height: ${St}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,_g=T($t)`
  ${xp}
  width: ${St}px;
  height: ${St}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,zg=T.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${xp}
  width: ${St-4}px;
  height: ${St-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Og=T.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,Mg=T.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>yo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,jg={flat:zg,default:_g},Bg=w.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:l="",onChange:i=Rn,style:s={},value:a,variant:c="default",...h},f)=>{var m;const[y,v]=ln({defaultValue:n,onChange:i,readOnly:(m=h.readOnly)!==null&&m!==void 0?m:r,value:e}),k=w.useCallback(u=>{const p=u.target.checked;v(p),i(u)},[i,v]),N=jg[c];let d=null;return o?d=Mg:y&&(d=Og),g.createElement(Va,{$disabled:r,className:t,style:s},g.createElement(Il,{disabled:r,onChange:r?void 0:k,readOnly:r,type:"checkbox",value:a,checked:y,"data-indeterminate":o,ref:f,...h}),g.createElement(N,{$disabled:r,role:"presentation"},d&&g.createElement(d,{$disabled:r,variant:c})),l&&g.createElement(Ga,null,l))});Bg.displayName="Checkbox";const wp=T.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${on(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${on(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;wp.displayName="Separator";const Fg=T(ti)`
  padding-left: 8px;
`,Ug=T(wp)`
  height: 21px;
  position: relative;
  top: 0;
`,kp=T.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Wg=T.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?D`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:D`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${kp}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${dr}
    outline-offset: -8px;
  }
`,Hg=T.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?D`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:D`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Qg=w.forwardRef(({value:e,defaultValue:t,onChange:n=Rn,disabled:r=!1,variant:o="default",...l},i)=>{var s;const[a,c]=ln({defaultValue:t,onChange:n,readOnly:(s=l.readOnly)!==null&&s!==void 0?s:r,value:e}),h=f=>{const m=f.target.value;c(m),n(f)};return g.createElement(Fg,{disabled:r,as:"div",variant:o,size:"md"},g.createElement(kp,{onChange:h,readOnly:r,disabled:r,value:a??"#008080",type:"color",ref:i,...l}),g.createElement(Wg,{$disabled:r,color:a??"#008080",role:"presentation"}),o==="default"&&g.createElement(Ug,{orientation:"vertical"}),g.createElement(Hg,{$disabled:r,variant:o}))});Qg.displayName="ColorInput";const Vg=T.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>D`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${yo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,xc=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Gg=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Kg({digit:e=0,pixelSize:t=2,...n}){const r=Gg[Number(e)].map((o,l)=>o?`${xc[l]} active`:xc[l]);return g.createElement(Vg,{pixelSize:t,...n},r.map((o,l)=>g.createElement("span",{className:o,key:l})))}const Yg=T.div`
  ${ge({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Xg={sm:1,md:2,lg:3,xl:4},Zg=w.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const l=w.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return g.createElement(Yg,{ref:o,...r},l.map((i,s)=>g.createElement(Kg,{digit:i,pixelSize:Xg[n],key:s})))});Zg.displayName="Counter";const Sp=D`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ie.md};
`,Jg=T($t).attrs({"data-testid":"variant-default"})`
  ${Sp}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,qg=T.div.attrs({"data-testid":"variant-flat"})`
  ${Tn()}
  ${Sp}
  position: relative;
`,$p=D`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&mt()}
`,ev=T.input`
  ${$p}
  padding: 0 8px;
`,tv=T.textarea`
  ${$p}
  padding: 8px;
  resize: none;
  ${({variant:e})=>Qa(e)}
`,Nl=w.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Rn,shadow:o=!0,style:l,variant:i="default",...s},a)=>{const c=i==="flat"?qg:Jg,h=w.useMemo(()=>{var f;return s.multiline?g.createElement(tv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:a,variant:i,...s}):g.createElement(ev,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:a,type:(f=s.type)!==null&&f!==void 0?f:"text",variant:i,...s})},[t,r,s,a,i]);return g.createElement(c,{className:e,fullWidth:n,$disabled:t,shadow:o,style:l},h)});Nl.displayName="TextInput";const nv=T.div`
  display: inline-flex;
  align-items: center;
`,Fs=T(ze)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?D`
          height: calc(50% - 1px);
        `:D`
          height: 50%;
        `}
`,rv=T.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?D`
          height: calc(${Ie.md} - 4px);
        `:D`
          height: ${Ie.md};
          margin-left: 2px;
        `}
`,wc=T.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?D`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:D`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${Fs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?D`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:D`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,Ap=w.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:l,readOnly:i,step:s=1,style:a,value:c,variant:h="default",width:f,...m},y)=>{const[v,k]=ln({defaultValue:t,onChange:l,readOnly:i,value:c}),N=w.useCallback(E=>{const $=parseFloat(E.target.value);k($)},[k]),d=w.useCallback(E=>{const $=yn(parseFloat(((v??0)+E).toFixed(2)),o??null,r??null);k($),l==null||l($)},[r,o,l,k,v]),u=w.useCallback(()=>{v!==void 0&&(l==null||l(v))},[l,v]),p=w.useCallback(()=>{d(s)},[d,s]),x=w.useCallback(()=>{d(-s)},[d,s]),S=h==="flat"?"flat":"raised";return g.createElement(nv,{className:e,style:{...a,width:f!==void 0?on(f):"auto"},...m},g.createElement(Nl,{value:v,variant:h,onChange:N,disabled:n,type:"number",readOnly:i,ref:y,fullWidth:!0,onBlur:u}),g.createElement(rv,{variant:h},g.createElement(Fs,{"data-testid":"increment",variant:S,disabled:n||i,onClick:p},g.createElement(wc,{invert:!0})),g.createElement(Fs,{"data-testid":"decrement",variant:S,disabled:n||i,onClick:x},g.createElement(wc,null))))});Ap.displayName="NumberInput";function ov(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const Ep=e=>w.useMemo(()=>e??ov(),[e]),bp=D`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Cp=D`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Ka=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,lv=T.div`
  ${bp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Ka}:focus & {
    ${Cp}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,Tp=D`
  height: ${Ie.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?mt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,iv=T($t)`
  ${Tp}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,sv=T.div`
  ${Tn()}
  ${Tp}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,av=T.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${bp}
  cursor: pointer;
  &:disabled {
    ${mt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Ip=T(ti).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?D`
          height: 100%;
          margin-right: 0;
        `:D`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,uv=T.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${Ip}:active & {
    margin-top: 2px;
  }
`,cv=T.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Wa};
  ${({variant:e="default"})=>e==="flat"?D`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:D`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>Qa(e)}
`,dv=T.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Ie.md} - 4px);
  line-height: calc(${Ie.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?Cp:""}
  user-select: none;
`,fv=[],Np=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:l=fv,readOnly:i,style:s,value:a,variant:c,width:h})=>{var f;const m=w.useMemo(()=>l.filter(Boolean),[l]),[y,v]=ln({defaultValue:t??((f=m==null?void 0:m[0])===null||f===void 0?void 0:f.value),onChange:o,readOnly:i,value:a}),k=!(n||i),N=w.useMemo(()=>({className:e,style:{...s,width:h}}),[e,s,h]),d=w.useMemo(()=>g.createElement(Ip,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:c==="flat"?"flat":"raised"},g.createElement(uv,{"data-testid":"select-icon",$disabled:n})),[n,r,c]),u=w.useMemo(()=>c==="flat"?sv:iv,[c]);return w.useMemo(()=>({isEnabled:k,options:m,value:y,setValue:v,wrapperProps:N,DropdownButton:d,Wrapper:u}),[d,u,k,m,v,y,N])},pv={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},hv=1e3,mv=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:l,onOpen:i,open:s,options:a,readOnly:c,value:h,selectRef:f,setValue:m,wrapperRef:y})=>{const v=w.useRef(null),k=w.useRef([]),N=w.useRef(0),d=w.useRef(0),u=w.useRef(),p=w.useRef("search"),x=w.useRef(""),S=w.useRef(),[E,$]=ln({defaultValue:!1,onChange:i,onChangePropName:"onOpen",readOnly:c,value:s,valuePropName:"open"}),b=w.useMemo(()=>{const R=a.findIndex(Q=>Q.value===h);return N.current=yn(R,0,null),a[R]},[a,h]),[W,j]=w.useState(a[0]),K=w.useCallback(R=>{const Q=v.current,ne=k.current[R];if(!ne||!Q){u.current=R;return}u.current=void 0;const de=Q.clientHeight,ue=Q.scrollTop,be=Q.scrollTop+de,we=ne.offsetTop,Je=ne.offsetHeight,At=ne.offsetTop+ne.offsetHeight;we<ue&&Q.scrollTo(0,we),At>be&&Q.scrollTo(0,we-de+Je),ne.focus({preventScroll:!0})},[v]),q=w.useCallback((R,{scroll:Q}={})=>{var ne;const de=a.length-1;let ue;switch(R){case"first":{ue=0;break}case"last":{ue=de;break}case"next":{ue=yn(d.current+1,0,de);break}case"previous":{ue=yn(d.current-1,0,de);break}case"selected":{ue=yn((ne=N.current)!==null&&ne!==void 0?ne:0,0,de);break}default:ue=R}d.current=ue,j(a[ue]),Q&&K(ue)},[d,a,K]),Y=w.useCallback(({fromEvent:R})=>{$(!0),q("selected",{scroll:!0}),i==null||i({fromEvent:R})},[q,i,$]),C=w.useCallback(()=>{p.current="search",x.current="",clearTimeout(S.current)},[]),L=w.useCallback(({focusSelect:R,fromEvent:Q})=>{var ne;n==null||n({fromEvent:Q}),$(!1),j(a[0]),C(),u.current=void 0,R&&((ne=f.current)===null||ne===void 0||ne.focus())},[C,n,a,f,$]),O=w.useCallback(({fromEvent:R})=>{E?L({focusSelect:!1,fromEvent:R}):Y({fromEvent:R})},[L,Y,E]),H=w.useCallback((R,{fromEvent:Q})=>{N.current!==R&&(N.current=R,m(a[R].value),t==null||t(a[R],{fromEvent:Q}))},[t,a,m]),A=w.useCallback(({focusSelect:R,fromEvent:Q})=>{H(d.current,{fromEvent:Q}),L({focusSelect:R,fromEvent:Q})},[L,H]),P=w.useCallback((R,{fromEvent:Q,select:ne})=>{var de;switch(p.current==="cycleFirstLetter"&&R!==x.current&&(p.current="search"),R===x.current?p.current="cycleFirstLetter":x.current+=R,p.current){case"search":{let ue=a.findIndex(be=>{var we;return((we=be.label)===null||we===void 0?void 0:we.toLocaleUpperCase().indexOf(x.current))===0});ue<0&&(ue=a.findIndex(be=>{var we;return((we=be.label)===null||we===void 0?void 0:we.toLocaleUpperCase().indexOf(R))===0}),x.current=R),ue>=0&&(ne?H(ue,{fromEvent:Q}):q(ue,{scroll:!0}));break}case"cycleFirstLetter":{const ue=ne?(de=N.current)!==null&&de!==void 0?de:-1:d.current;let be=a.findIndex((we,Je)=>{var At;return Je>ue&&((At=we.label)===null||At===void 0?void 0:At.toLocaleUpperCase().indexOf(R))===0});be<0&&(be=a.findIndex(we=>{var Je;return((Je=we.label)===null||Je===void 0?void 0:Je.toLocaleUpperCase().indexOf(R))===0})),be>=0&&(ne?H(be,{fromEvent:Q}):q(be,{scroll:!0}));break}}clearTimeout(S.current),S.current=setTimeout(()=>{p.current==="search"&&(x.current="")},hv)},[q,a,H]),z=w.useCallback(R=>{var Q;R.button===0&&(R.preventDefault(),(Q=f.current)===null||Q===void 0||Q.focus(),O({fromEvent:R}),l==null||l(R))},[l,f,O]),ee=w.useCallback(R=>{A({focusSelect:!0,fromEvent:R})},[A]),V=w.useCallback(R=>{const{altKey:Q,code:ne,ctrlKey:de,metaKey:ue,shiftKey:be}=R,{ARROW_DOWN:we,ARROW_UP:Je,END:At,ENTER:cn,ESC:Ot,HOME:ri,SPACE:oi,TAB:vr}=pv,Ya=Q||de||ue||be;if(!(ne===vr&&(Q||de||ue)||ne!==vr&&Ya))switch(ne){case we:{if(R.preventDefault(),!E){Y({fromEvent:R});return}q("next",{scroll:!0});break}case Je:{if(R.preventDefault(),!E){Y({fromEvent:R});return}q("previous",{scroll:!0});break}case At:{if(R.preventDefault(),!E){Y({fromEvent:R});return}q("last",{scroll:!0});break}case cn:{if(!E)return;R.preventDefault(),A({focusSelect:!0,fromEvent:R});break}case Ot:{if(!E)return;R.preventDefault(),L({focusSelect:!0,fromEvent:R});break}case ri:{if(R.preventDefault(),!E){Y({fromEvent:R});return}q("first",{scroll:!0});break}case oi:{R.preventDefault(),E?A({focusSelect:!0,fromEvent:R}):Y({fromEvent:R});break}case vr:{if(!E)return;be||R.preventDefault(),A({focusSelect:!be,fromEvent:R});break}default:!Ya&&ne.match(/^Key/)&&(R.preventDefault(),R.stopPropagation(),P(ne.replace(/^Key/,""),{select:!E,fromEvent:R}))}},[q,L,E,Y,P,A]),M=w.useCallback(R=>{V(R),o==null||o(R)},[V,o]),B=w.useCallback(R=>{q(R)},[q]),U=w.useCallback(R=>{E||(C(),e==null||e(R))},[C,e,E]),G=w.useCallback(R=>{C(),r==null||r(R)},[C,r]),X=w.useCallback(R=>{v.current=R,u.current!==void 0&&K(u.current)},[K]),Re=w.useCallback((R,Q)=>{k.current[Q]=R,u.current===Q&&K(u.current)},[K]);return w.useEffect(()=>{if(!E)return()=>{};const R=Q=>{var ne;const de=Q.target;!((ne=y.current)===null||ne===void 0)&&ne.contains(de)||(Q.preventDefault(),L({focusSelect:!1,fromEvent:Q}))};return document.addEventListener("mousedown",R),()=>{document.removeEventListener("mousedown",R)}},[L,E,y]),w.useMemo(()=>({activeOption:W,handleActivateOptionIndex:B,handleBlur:U,handleButtonKeyDown:M,handleDropdownKeyDown:V,handleFocus:G,handleMouseDown:z,handleOptionClick:ee,handleSetDropdownRef:X,handleSetOptionRef:Re,open:E,selectedOption:b}),[W,B,U,M,G,V,z,ee,X,Re,E,b])},gv=w.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:l,style:i,value:s,variant:a,width:c,...h},f)=>{const{isEnabled:m,options:y,setValue:v,value:k,DropdownButton:N,Wrapper:d}=Np({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:l,value:s,variant:a}),u=w.useCallback(p=>{const x=y.find(S=>S.value===p.target.value);x&&(v(x.value),r==null||r(x,{fromEvent:p}))},[r,y,v]);return g.createElement(d,{className:e,style:{...i,width:c}},g.createElement(Ka,null,g.createElement(av,{...h,disabled:n,onChange:m?u:Rn,ref:f,value:k},y.map((p,x)=>{var S;return g.createElement("option",{key:`${p.value}-${x}`,value:p.value},(S=p.label)!==null&&S!==void 0?S:p.value)})),N))});gv.displayName="SelectNative";function vv({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:l,setRef:i}){const s=w.useCallback(()=>{e(n)},[e,n]),a=w.useCallback(h=>{i(h,n)},[n,i]),c=Ep();return g.createElement(dv,{active:t,"aria-selected":l?"true":void 0,"data-value":o.value,id:c,onClick:r,onMouseEnter:s,ref:a,role:"option",tabIndex:0},o.label)}function yv({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:l,inputProps:i,labelId:s,menuMaxHeight:a,name:c,onBlur:h,onChange:f,onClose:m,onFocus:y,onKeyDown:v,onMouseDown:k,onOpen:N,open:d,options:u,readOnly:p,shadow:x=!0,style:S,variant:E="default",value:$,width:b="auto",...W},j){const{isEnabled:K,options:q,setValue:Y,value:C,wrapperProps:L,DropdownButton:O,Wrapper:H}=Np({className:n,defaultValue:r,disabled:o,native:!1,onChange:f,options:u,style:S,readOnly:p,value:$,variant:E,width:b}),A=w.useRef(null),P=w.useRef(null),z=w.useRef(null),{activeOption:ee,handleActivateOptionIndex:V,handleBlur:M,handleButtonKeyDown:B,handleDropdownKeyDown:U,handleFocus:G,handleMouseDown:X,handleOptionClick:Re,handleSetDropdownRef:R,handleSetOptionRef:Q,open:ne,selectedOption:de}=mv({onBlur:h,onChange:f,onClose:m,onFocus:y,onKeyDown:v,onMouseDown:k,onOpen:N,open:d,options:q,value:C,selectRef:P,setValue:Y,wrapperRef:z});w.useImperativeHandle(j,()=>({focus:cn=>{var Ot;(Ot=P.current)===null||Ot===void 0||Ot.focus(cn)},node:A.current,value:String(C)}),[C]);const ue=w.useMemo(()=>de?typeof l=="function"?l(de):de.label:"",[l,de]),be=K?1:void 0,we=w.useMemo(()=>a?{overflow:"auto",maxHeight:a}:void 0,[a]),Je=Ep(),At=w.useMemo(()=>q.map((cn,Ot)=>{const ri=`${C}-${Ot}`,oi=cn===ee,vr=cn===de;return g.createElement(vv,{activateOptionIndex:V,active:oi,index:Ot,key:ri,onClick:Re,option:cn,selected:vr,setRef:Q})}),[ee,V,Re,Q,q,de,C]);return g.createElement(H,{...L,$disabled:o,ref:z,shadow:x,style:{...S,width:b}},g.createElement("input",{name:c,ref:A,type:"hidden",value:String(C),...i}),g.createElement(Ka,{"aria-disabled":o,"aria-expanded":ne,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??s,"aria-owns":K&&ne?Je:void 0,onBlur:M,onFocus:G,onKeyDown:B,onMouseDown:K?X:k,ref:P,role:"button",tabIndex:be,...W},g.createElement(lv,null,ue),O),K&&ne&&g.createElement(cv,{id:Je,onKeyDown:U,ref:R,role:"listbox",style:we,tabIndex:0,variant:E},At))}const Rp=w.forwardRef(yv);Rp.displayName="Select";const xv=T.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,co=w.forwardRef(function({children:t,noPadding:n=!1,...r},o){return g.createElement(xv,{noPadding:n,ref:o,...r},t)});co.displayName="Toolbar";const wv=T.div`
  padding: 16px;
`,Rl=w.forwardRef(function({children:t,...n},r){return g.createElement(wv,{ref:r,...n},t)});Rl.displayName="WindowContent";const kv=T.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?D`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:D`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${ti} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Pl=w.forwardRef(function({active:t=!0,children:n,...r},o){return g.createElement(kv,{active:t,ref:o,...r},n)});Pl.displayName="WindowHeader";const Sv=T.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${ge({style:"window"})}
  ${gt()}
`,$v=T.span`
  ${({theme:e})=>D`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Dl=w.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},l)=>g.createElement(Sv,{ref:l,shadow:r,...o},e,t&&g.createElement($v,{"data-testid":"resizeHandle",ref:n})));Dl.displayName="Window";const Av=T(yp)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,Ev=T.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,bv=T.div`
  display: flex;
  flex-wrap: wrap;
`,Et=T.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Cv=T.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,Tv=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Iv(e,t){return new Date(e,t+1,0).getDate()}function Nv(e,t,n){return new Date(e,t,n).getDay()}function Rv(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const Pv=w.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},l)=>{const[i,s]=w.useState(()=>Rv(t)),{year:a,month:c,day:h}=i,f=w.useCallback(({value:N})=>{s(d=>({...d,month:N}))},[]),m=w.useCallback(N=>{s(d=>({...d,year:N}))},[]),y=w.useCallback(N=>{s(d=>({...d,day:N}))},[]),v=w.useCallback(()=>{const N=[i.year,i.month+1,i.day].map(d=>String(d).padStart(2,"0")).join("-");n==null||n(N)},[i.day,i.month,i.year,n]),k=w.useMemo(()=>{const N=Array.from({length:42}),d=Nv(a,c,1);let u=h;const p=Iv(a,c);return u=u<p?u:p,N.forEach((x,S)=>{if(S>=d&&S<p+d){const E=S-d+1;N[S]=g.createElement(Et,{key:S,onClick:()=>{y(E)}},g.createElement(Cv,{active:E===u},E))}else N[S]=g.createElement(Et,{key:S})}),N},[h,y,c,a]);return g.createElement(Dl,{className:e,ref:l,shadow:o,style:{margin:20}},g.createElement(Pl,null,g.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),g.createElement(Rl,null,g.createElement(co,{noPadding:!0,style:{justifyContent:"space-between"}},g.createElement(Rp,{options:Tv,value:c,onChange:f,width:128,menuMaxHeight:200}),g.createElement(Ap,{value:a,onChange:m,width:100})),g.createElement(Av,null,g.createElement(Ev,null,g.createElement(Et,null,"S"),g.createElement(Et,null,"M"),g.createElement(Et,null,"T"),g.createElement(Et,null,"W"),g.createElement(Et,null,"T"),g.createElement(Et,null,"F"),g.createElement(Et,null,"S")),g.createElement(bv,null,k)),g.createElement(co,{noPadding:!0,style:{justifyContent:"space-between"}},g.createElement(ze,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),g.createElement(ze,{fullWidth:!0,onClick:n?v:void 0,disabled:!n},"OK"))))});Pv.displayName="DatePicker";const Dv=e=>{switch(e){case"status":case"well":return D`
        ${ge({style:"status"})}
      `;case"window":case"outside":return D`
        ${ge({style:"window"})}
      `;case"field":return D`
        ${ge({style:"field"})}
      `;default:return D`
        ${ge()}
      `}},Lv=T.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Dv(e)}
  ${({variant:e})=>gt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,_v=w.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>g.createElement(Lv,{ref:o,shadow:t,variant:n,...r},e));_v.displayName="Frame";const zv=T.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&D`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&mt()}
`,Ov=T.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,Mv=w.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},l)=>g.createElement(zv,{"aria-disabled":t,$disabled:t,variant:n,ref:l,...o},e&&g.createElement(Ov,{variant:n},e),r));Mv.displayName="GroupBox";const jv=T.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${on(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;jv.displayName="Handle";const Bv="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Fv=T.div`
  display: inline-block;
  height: ${({size:e})=>on(e)};
  width: ${({size:e})=>on(e)};
`,Uv=T.span`
  display: block;
  background: ${Bv};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Wv=w.forwardRef(({size:e=30,...t},n)=>g.createElement(Fv,{size:e,ref:n,...t},g.createElement(Uv,null)));Wv.displayName="Hourglass";const Hv=T.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Qv=T.div`
  position: relative;
`,Vv=T.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Gv=T($t).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Kv=T.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,Yv=w.forwardRef(({backgroundStyles:e,children:t,...n},r)=>g.createElement(Hv,{ref:r,...n},g.createElement(Qv,null,g.createElement(Vv,null,g.createElement(Gv,{style:e},t)),g.createElement(Kv,null))));Yv.displayName="Monitor";const Xv=T.div`
  display: inline-block;
  height: ${Ie.md};
  width: 100%;
`,Zv=T($t)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Pp=D`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Jv=T.div`
  position: relative;
  top: 4px;
  ${Pp}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,qv=T.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Pp}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,e1=T.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Dp=17,t1=T.span`
  display: inline-block;
  width: ${Dp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,n1=w.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},l)=>{const i=e?null:`${n}%`,s=w.useRef(null),[a,c]=w.useState([]),h=w.useCallback(()=>{if(!s.current||n===void 0)return;const f=s.current.getBoundingClientRect().width,m=Math.round(n/100*f/Dp);c(Array.from({length:m}))},[n]);return w.useEffect(()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[h]),g.createElement(Xv,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:l,role:"progressbar",variant:r,...o},g.createElement(Zv,{variant:r,shadow:t},r==="default"?g.createElement(g.Fragment,null,g.createElement(Jv,{"data-testid":"defaultProgress1"},i),g.createElement(qv,{"data-testid":"defaultProgress2",value:n},i)):g.createElement(e1,{ref:s,"data-testid":"tileProgress"},a.map((f,m)=>g.createElement(t1,{key:m})))))});n1.displayName="ProgressBar";const Lp=D`
  width: ${St}px;
  height: ${St}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,r1=T($t)`
  ${Lp}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,o1=T.div`
  ${Tn()}
  ${Lp}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,l1=T.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,i1={flat:o1,default:r1},s1=w.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:l={},variant:i="default",...s},a)=>{const c=i1[i];return g.createElement(Va,{$disabled:n,className:t,style:l},g.createElement(c,{$disabled:n,role:"presentation"},e&&g.createElement(l1,{$disabled:n,variant:i})),g.createElement(Il,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:a,...s}),r&&g.createElement(Ga,null,r))});s1.displayName="Radio";const a1=typeof window<"u"?w.useLayoutEffect:w.useEffect;function dn(e){const t=w.useRef(e);return a1(()=>{t.current=e}),w.useCallback((...n)=>(0,t.current)(...n),[])}function kc(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Sc(e,t){return w.useMemo(()=>e==null&&t==null?null:n=>{kc(e,n),kc(t,n)},[e,t])}let ni=!0,Us=!1,$c;const u1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c1(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&u1[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function d1(e){e.metaKey||e.altKey||e.ctrlKey||(ni=!0)}function Oi(){ni=!1}function f1(){this.visibilityState==="hidden"&&Us&&(ni=!0)}function p1(e){e.addEventListener("keydown",d1,!0),e.addEventListener("mousedown",Oi,!0),e.addEventListener("pointerdown",Oi,!0),e.addEventListener("touchstart",Oi,!0),e.addEventListener("visibilitychange",f1,!0)}function h1(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return ni||c1(t)}function m1(){Us=!0,window.clearTimeout($c),$c=window.setTimeout(()=>{Us=!1},100)}function g1(){const e=w.useCallback(t=>{const n=Wf.findDOMNode(t);n!=null&&p1(n.ownerDocument)},[]);return{isFocusVisible:h1,onBlurVisible:m1,ref:e}}function v1(e,t,n){return(n-t)*e+t}function Mo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function jo(e){return e&&e.ownerDocument||document}function y1(e,t){var n;const{index:r}=(n=e.reduce((o,l,i)=>{const s=Math.abs(t-l);return o===null||s<o.distance||s===o.distance?{distance:s,index:i}:o},null))!==null&&n!==void 0?n:{};return r??-1}const x1=T.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?D`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:D`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,_p=()=>D`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?D`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:D`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,w1=T($t)`
  ${_p()}
`,k1=T($t)`
  ${_p()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,S1=T.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?D`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:D`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?D`
          ${Tn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:D`
          ${gt()}
          ${ge()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&yo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,Gn=6,$1=T.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?D`
          right: ${-Gn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Gn}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:D`
          bottom: ${-Gn}px;
          height: ${Gn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&D`
      ${mt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,A1=T.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?D`
          transform: translate(${Gn+2}px, ${Gn+1}px);
        `:D`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,E1=w.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:l,onChange:i,onChangeCommitted:s,onMouseDown:a,orientation:c="horizontal",size:h="100%",step:f=1,value:m,variant:y="default",...v},k)=>{const N=y==="flat"?k1:w1,d=c==="vertical",[u=o,p]=ln({defaultValue:e,onChange:i??s,value:m}),{isFocusVisible:x,onBlurVisible:S,ref:E}=g1(),[$,b]=w.useState(!1),W=w.useRef(),j=w.useRef(null),K=Sc(E,W),q=Sc(k,K),Y=dn(M=>{x(M)&&b(!0)}),C=dn(()=>{$!==!1&&(b(!1),S())}),L=w.useRef(),O=w.useMemo(()=>n===!0&&Number.isFinite(f)?[...Array(Math.round((r-o)/f)+1)].map((M,B)=>({label:void 0,value:o+f*B})):Array.isArray(n)?n:[],[n,r,o,f]),H=dn(M=>{const B=(r-o)/10,U=O.map(Re=>Re.value),G=U.indexOf(u);let X=0;switch(M.key){case"Home":X=o;break;case"End":X=r;break;case"PageUp":f&&(X=u+B);break;case"PageDown":f&&(X=u-B);break;case"ArrowRight":case"ArrowUp":f?X=u+f:X=U[G+1]||U[U.length-1];break;case"ArrowLeft":case"ArrowDown":f?X=u-f:X=U[G-1]||U[0];break;default:return}M.preventDefault(),f&&(X=yc(X,f,o)),X=yn(X,o,r),p(X),b(!0),i==null||i(X),s==null||s(X)}),A=w.useCallback(M=>{if(!W.current)return 0;const B=W.current.getBoundingClientRect();let U;d?U=(B.bottom-M.y)/B.height:U=(M.x-B.left)/B.width;let G;if(G=v1(U,o,r),f)G=yc(G,f,o);else{const X=O.map(R=>R.value),Re=y1(X,G);G=X[Re]}return G=yn(G,o,r),G},[O,r,o,f,d]),P=dn(M=>{var B;const U=Mo(M,L.current);if(!U)return;const G=A(U);(B=j.current)===null||B===void 0||B.focus(),p(G),b(!0),i==null||i(G)}),z=dn(M=>{const B=Mo(M,L.current);if(!B)return;const U=A(B);s==null||s(U),L.current=void 0;const G=jo(W.current);G.removeEventListener("mousemove",P),G.removeEventListener("mouseup",z),G.removeEventListener("touchmove",P),G.removeEventListener("touchend",z)}),ee=dn(M=>{var B;a==null||a(M),M.preventDefault(),(B=j.current)===null||B===void 0||B.focus(),b(!0);const U=Mo(M,L.current);if(U){const X=A(U);p(X),i==null||i(X)}const G=jo(W.current);G.addEventListener("mousemove",P),G.addEventListener("mouseup",z)}),V=dn(M=>{var B;M.preventDefault();const U=M.changedTouches[0];U!=null&&(L.current=U.identifier),(B=j.current)===null||B===void 0||B.focus(),b(!0);const G=Mo(M,L.current);if(G){const Re=A(G);p(Re),i==null||i(Re)}const X=jo(W.current);X.addEventListener("touchmove",P),X.addEventListener("touchend",z)});return w.useEffect(()=>{const{current:M}=W;M==null||M.addEventListener("touchstart",V);const B=jo(M);return()=>{M==null||M.removeEventListener("touchstart",V),B.removeEventListener("mousemove",P),B.removeEventListener("mouseup",z),B.removeEventListener("touchmove",P),B.removeEventListener("touchend",z)}},[z,P,V]),g.createElement(x1,{$disabled:t,hasMarks:!!O.length,isFocused:$,onMouseDown:ee,orientation:c,ref:q,size:on(h),...v},g.createElement("input",{disabled:t,name:l,type:"hidden",value:u??0}),O&&O.map(M=>g.createElement($1,{$disabled:t,"data-testid":"tick",key:M.value/(r-o)*100,orientation:c,style:{[d?"bottom":"left"]:`${(M.value-o)/(r-o)*100}%`}},M.label&&g.createElement(A1,{"aria-hidden":!0,"data-testid":"mark",orientation:c},M.label))),g.createElement(N,{orientation:c,variant:y}),g.createElement(S1,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":c,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":u,onBlur:C,onFocus:Y,onKeyDown:H,orientation:c,ref:j,role:"slider",style:{[d?"bottom":"left"]:`${(d?-100:0)+100*(u-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:y}))});E1.displayName="Slider";const b1=T.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Ha};
  overflow-y: auto;
`,C1=w.forwardRef(function({children:t,...n},r){return g.createElement(b1,{ref:r,...n},t)});C1.displayName="TableBody";const T1=T.td`
  padding: 0 8px;
`,I1=w.forwardRef(function({children:t,...n},r){return g.createElement(T1,{ref:r,...n},t)});I1.displayName="TableDataCell";const N1=T.thead`
  display: table-header-group;
`,R1=w.forwardRef(function({children:t,...n},r){return g.createElement(N1,{ref:r,...n},t)});R1.displayName="TableHead";const P1=T.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${ge()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&D`
      &:active {
        &:before {
          ${ge({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&mt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&mt()}
  }
`,D1=w.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Rn,sort:l,...i},s){const a=l==="asc"?"ascending":l==="desc"?"descending":void 0;return g.createElement(P1,{$disabled:t,"aria-disabled":t,"aria-sort":a,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:s,...i},g.createElement("div",null,n))});D1.displayName="TableHeadCell";const L1=T.tr`
  color: inherit;
  display: table-row;
  height: calc(${Ie.md} - 2px);
  line-height: calc(${Ie.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,_1=w.forwardRef(function({children:t,...n},r){return g.createElement(L1,{ref:r,...n},t)});_1.displayName="TableRow";const z1=T.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,O1=T($t)`
  &:before {
    box-shadow: none;
  }
`,M1=w.forwardRef(({children:e,...t},n)=>g.createElement(O1,null,g.createElement(z1,{ref:n,...t},e)));M1.displayName="Table";const j1=T.button`
  ${gt()}
  ${ge()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Ie.md};
  line-height: ${Ie.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${dr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Ie.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,B1=w.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},l)=>g.createElement(j1,{"aria-selected":n,selected:n,onClick:i=>t==null?void 0:t(e,i),ref:l,role:"tab",...o},r));B1.displayName="Tab";const F1=T.div`
  ${gt()}
  ${ge()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,U1=w.forwardRef(({children:e,...t},n)=>g.createElement(F1,{ref:n,...t},e));U1.displayName="TabBody";const W1=T.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,H1=T.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function Q1(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const V1=w.forwardRef(({value:e,onChange:t=Rn,children:n,rows:r=1,...o},l)=>{const i=w.useMemo(()=>{var s;const a=(s=g.Children.map(n,f=>{if(!g.isValidElement(f))return null;const m={selected:f.props.value===e,onClick:t};return g.cloneElement(f,m)}))!==null&&s!==void 0?s:[],c=Q1(a,r).map((f,m)=>({key:m,tabs:f})),h=c.findIndex(f=>f.tabs.some(m=>m.props.selected));return c.push(c.splice(h,1)[0]),c},[n,t,r,e]);return g.createElement(W1,{...o,isMultiRow:r>1,role:"tablist",ref:l},i.map(s=>g.createElement(H1,{key:s.key},s.tabs)))});V1.displayName="Tabs";const G1=["blur","focus"],K1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Ac(e){return"nativeEvent"in e&&G1.includes(e.type)}function Ec(e){return"nativeEvent"in e&&K1.includes(e.type)}const Y1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},X1=T.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${Wa};
  text-align: center;
  font-size: 1rem;
  ${e=>Y1[e.position]}
`,Z1=T.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,J1=w.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:l=0,onBlur:i,onClose:s,onFocus:a,onMouseEnter:c,onMouseLeave:h,onOpen:f,style:m,text:y,position:v="top",...k},N)=>{const[d,u]=w.useState(!1),[p,x]=w.useState(),[S,E]=w.useState(),$=!n,b=!r,W=A=>{window.clearTimeout(p),window.clearTimeout(S);const P=window.setTimeout(()=>{u(!0),f==null||f(A)},o);x(P)},j=A=>{A.persist(),Ac(A)?a==null||a(A):Ec(A)&&(c==null||c(A)),W(A)},K=A=>{window.clearTimeout(p),window.clearTimeout(S);const P=window.setTimeout(()=>{u(!1),s==null||s(A)},l);E(P)},q=A=>{A.persist(),Ac(A)?i==null||i(A):Ec(A)&&(h==null||h(A)),K(A)},Y=$?q:void 0,C=$?j:void 0,L=b?j:void 0,O=b?q:void 0,H=$?0:void 0;return g.createElement(Z1,{"data-testid":"tooltip-wrapper",onBlur:Y,onFocus:C,onMouseEnter:L,onMouseLeave:O,tabIndex:H},g.createElement(X1,{className:e,"data-testid":"tooltip",position:v,ref:N,show:d,style:m,...k},y),t)});J1.displayName="Tooltip";const Ws=T(Ga)`
  white-space: nowrap;
`,zp=D`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":D`
          cursor: pointer;

          :focus {
            ${Ws} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,q1=T.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&D`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,ey=T.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?D`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:D`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,ty=T.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,ny=T.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${zp};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,bc=T(Va)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${zp};
`,ry=T.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Cc(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Tc(e){e.preventDefault()}function Op({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:l,selected:i,style:s,tree:a=[]}){const c=o===0,h=w.useCallback(f=>{var m,y;const v=!!(f.items&&f.items.length>0),k=n.includes(f.id),N=(m=t||f.disabled)!==null&&m!==void 0?m:!1,d=N?Tc:S=>l(S,f),u=N?Tc:S=>l(S,f),p=i===f.id,x=g.createElement(ry,{"aria-hidden":!0},f.icon);return g.createElement(ey,{key:f.label,isRootLevel:c,role:"treeitem","aria-expanded":k,"aria-selected":p,hasItems:v},v?g.createElement(ty,{open:k},g.createElement(ny,{onClick:d,$disabled:N},g.createElement(bc,{$disabled:N},x,g.createElement(Ws,null,f.label))),k&&g.createElement(Op,{className:e,disabled:N,expanded:n,level:o+1,select:l,selected:i,style:s,tree:(y=f.items)!==null&&y!==void 0?y:[]})):g.createElement(bc,{as:"button",$disabled:N,onClick:u},x,g.createElement(Ws,null,f.label)))},[e,t,n,c,o,l,i,s]);return g.createElement(q1,{className:c?e:void 0,style:c?s:void 0,ref:c?r:void 0,role:c?"tree":"group",isRootLevel:c},a.map(h))}function oy({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:l,onNodeToggle:i,selected:s,style:a,tree:c=[]},h){const[f,m]=ln({defaultValue:t,onChange:i,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[y,v]=ln({defaultValue:n,onChange:l,onChangePropName:"onNodeSelect",value:s,valuePropName:"selected"}),k=w.useCallback((u,p)=>{if(i){const x=Cc(f,p);i(u,x)}m(x=>Cc(x,p))},[f,i,m]),N=w.useCallback((u,p)=>{v(p),l&&l(u,p)},[l,v]),d=w.useCallback((u,p)=>{u.preventDefault(),N(u,p.id),p.items&&p.items.length&&k(u,p.id)},[N,k]);return g.createElement(Op,{className:e,disabled:r,expanded:f,level:0,innerRef:h,select:d,selected:y,style:a,tree:c})}const ly=w.forwardRef(oy);ly.displayName="TreeView";var iy={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},sy=iy;const ay=Ic(sy),uy=""+new URL("ms_sans_serif-11b5a68a.woff2",import.meta.url).href,cy=""+new URL("ms_sans_serif_bold-5f3fbc57.woff2",import.meta.url).href,dy=xg`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${uy}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${cy}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  ${wg}
  body, html, #root {
    height: 100%;
    margin: 0;
    overflow: hidden;
    background-color: #008080; /* Windows 95 classic teal background for the Brain Board */
    font-family: 'ms_sans_serif', sans-serif;
  }
  
  button:active, button[aria-pressed="true"], button[data-active="true"], button.active {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVQIW2NkYGD4z8DAwMgAI0AMDA4wBAEFwAAAAABJRU5ErkJggg==") !important;
    background-color: #c6c6c6 !important;
  }
`;function fy(){const[e,t]=w.useState([{id:1,name:"Workspace 1",notes:[],connections:[]}]),[n,r]=w.useState(1),[o,l]=w.useState(!1),[i,s]=w.useState(!1),a=e.find(C=>C.id===n)||e[0],c=a.notes,h=a.connections,f=C=>{t(L=>L.map(O=>O.id===n?{...O,notes:typeof C=="function"?C(O.notes):C}:O))},m=C=>{t(L=>L.map(O=>O.id===n?{...O,connections:typeof C=="function"?C(O.connections):C}:O))},[y,v]=w.useState("select"),[k,N]=w.useState(null),[d,u]=w.useState({x:0,y:0}),[p,x]=w.useState(null),[S,E]=w.useState(null),[$,b]=w.useState(!1),W=()=>{const C=Date.now();f([...c,{id:C,x:window.innerWidth/2-125,y:window.innerHeight/2-100,text:"",title:`Note ${C.toString().slice(-4)}`}])},j=(C,L)=>{if(!(y==="select"&&C.target.tagName.toLowerCase()==="textarea"))if(y==="select"){const O=c.find(H=>H.id===L);if(!O)return;N(L),u({x:C.clientX-O.x,y:C.clientY-O.y}),C.target.setPointerCapture(C.pointerId)}else y==="string"&&(x({startNoteId:L,endX:C.clientX,endY:C.clientY}),C.target.setPointerCapture(C.pointerId),C.stopPropagation())},K=C=>{if(y==="select"&&k!==null){f(O=>O.map(H=>H.id===k?{...H,x:C.clientX-d.x,y:C.clientY-d.y}:H));const L=document.elementsFromPoint(C.clientX,C.clientY);b(L.some(O=>O.id==="recycle-bin"))}else y==="string"&&p!==null&&x({...p,endX:C.clientX,endY:C.clientY})},q=C=>{if(y==="select"&&k!==null)document.elementsFromPoint(C.clientX,C.clientY).some(H=>H.id==="recycle-bin")&&(f(H=>H.filter(A=>A.id!==k)),m(H=>H.filter(A=>A.from!==k&&A.to!==k)),S===k&&E(null)),N(null),b(!1),C.target.releasePointerCapture(C.pointerId);else if(y==="string"&&p!==null){let L=null;const O=document.elementsFromPoint(C.clientX,C.clientY);for(const H of O){const A=H.getAttribute("data-note-id");if(A){L=parseInt(A,10);break}}L!==null&&L!==p.startNoteId&&m(H=>[...H,{from:p.startNoteId,to:L}]),x(null),C.target.releasePointerCapture(C.pointerId)}},Y=C=>{const L=c.find(O=>O.id===C);return L?{x:L.x+125,y:L.y+75}:{x:0,y:0}};return F.jsxs(hg,{theme:ay,children:[F.jsx(dy,{}),F.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[F.jsx(js,{position:"relative",style:{zIndex:10,position:"relative"},children:F.jsxs(co,{style:{justifyContent:"flex-start",gap:"1rem"},children:[F.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[F.jsx("img",{src:"/logo.png",alt:"UniMaker Logo",style:{width:"24px",height:"24px",objectFit:"contain"}}),F.jsx(ze,{style:{fontWeight:"bold",pointerEvents:"none"},children:"UniMaker (alpha)"})]}),F.jsx(ze,{onClick:W,title:"Add Note Box",style:{fontWeight:"bold"},children:"📄+"})]})}),F.jsxs("div",{style:{display:"flex",flex:1,position:"relative"},children:[F.jsxs("div",{style:{width:"60px",background:"#c6c6c6",borderRight:"2px solid #fff",display:"flex",flexDirection:"column",alignItems:"center",padding:"10px 0",gap:"8px",zIndex:10},children:[F.jsx(ze,{className:y==="select"?"active":"",active:y==="select",onClick:()=>v("select"),title:"Select Tool",style:{width:"40px",height:"40px",fontSize:"18px"},children:"↖"}),F.jsx(ze,{className:y==="string"?"active":"",active:y==="string",onClick:()=>v("string"),title:"Line Tool",style:{width:"40px",height:"40px",fontSize:"18px"},children:"〰️"}),F.jsx("div",{style:{flex:1}})," ",F.jsx("div",{id:"recycle-bin",style:{marginBottom:"10px"},children:F.jsxs(ze,{active:$,className:$?"active":"",style:{width:"50px",height:"auto",padding:"8px 0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"black",fontFamily:"ms_sans_serif",fontSize:"10px",pointerEvents:"none"},children:[F.jsx("div",{style:{fontSize:"24px",marginBottom:"4px"},children:"🗑️"}),F.jsx("span",{style:{textAlign:"center"},children:"Trash"})]})})]}),F.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},onPointerMove:K,onPointerUp:q,children:[F.jsxs("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[h.map((C,L)=>{const O=Y(C.from),H=Y(C.to);return F.jsx("line",{x1:O.x,y1:O.y,x2:H.x,y2:H.y,stroke:"#000",strokeWidth:"2"},L)}),p&&F.jsx("line",{x1:Y(p.startNoteId).x,y1:Y(p.startNoteId).y,x2:p.endX-60,y2:p.endY-48,stroke:"#000",strokeWidth:"2",strokeDasharray:"4"})]}),c.map(C=>{const L=S===C.id;return F.jsxs(Dl,{"data-note-id":C.id,style:{position:"absolute",left:L?0:C.x,top:L?0:C.y,width:L?"100%":250,height:L?"100%":"auto",zIndex:L?100:5,display:"flex",flexDirection:"column"},onPointerDown:O=>j(O,C.id),onPointerMove:K,onPointerUp:q,children:[F.jsx("div",{style:{cursor:y==="select"?"grab":"default"},children:F.jsxs(Pl,{className:"window-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[F.jsx("input",{value:C.title||`Note ${C.id.toString().slice(-4)}`,onChange:O=>{const H=c.map(A=>A.id===C.id?{...A,title:O.target.value}:A);f(H)},style:{background:"transparent",border:"none",color:"inherit",fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",width:"calc(100% - 30px)",outline:"none"},onPointerDown:O=>O.stopPropagation()}),F.jsx(ze,{onClick:O=>{O.stopPropagation(),E(L?null:C.id)},style:{width:24,height:24,minWidth:0,padding:0},children:F.jsx("span",{style:{transform:"none",display:"inline-block"},children:"🗖"})})]})}),F.jsx(Rl,{style:{display:"flex",flexDirection:"column",flex:1,padding:L?"8px":void 0},children:F.jsx(Nl,{multiline:!0,rows:L?void 0:4,placeholder:"Type your ideas here...",value:C.text||"",onChange:O=>{const H=c.map(A=>A.id===C.id?{...A,text:O.target.value}:A);f(H)},fullWidth:!0,style:{fontFamily:"ms_sans_serif",resize:"none",flex:1,height:"100%"}})})]},C.id)}),o&&F.jsxs(Dl,{style:{position:"absolute",top:20,left:20,right:20,bottom:20,zIndex:150},children:[F.jsxs(Pl,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[F.jsx("span",{children:"Workspaces"}),F.jsx(ze,{onClick:()=>l(!1),children:"X"})]}),F.jsxs(Rl,{style:{height:"calc(100% - 40px)",overflow:"auto"},children:[F.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:[F.jsx(ze,{onClick:()=>{const C={id:Date.now(),name:`Workspace ${e.length+1}`,notes:[],connections:[]};t([...e,C]),r(C.id),l(!1)},style:{fontWeight:"bold"},children:"+ Make a New Workspace"}),F.jsx(ze,{className:i?"active":"",active:i,onClick:()=>s(!i),style:{fontWeight:"bold",color:i?"red":"inherit"},children:i?"🗑️ Cancel Delete":"🗑️ Delete Workspaces"})]}),F.jsx("div",{children:e.map(C=>F.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px",gap:"10px"},children:[F.jsxs(ze,{className:C.id===n?"active":"",active:C.id===n,onClick:()=>{if(i){if(window.confirm(`Are you sure you want to delete workspace "${C.name}"?`)){const L=e.filter(O=>O.id!==C.id);L.length===0&&L.push({id:Date.now(),name:"Workspace 1",notes:[],connections:[]}),t(L),C.id===n&&r(L[0].id)}}else r(C.id),l(!1)},style:{width:"200px",textAlign:"left",borderColor:i?"red":void 0},children:[C.name," ",C.id===n&&"(Active)"]}),F.jsx(Nl,{value:C.name,onChange:L=>{t(O=>O.map(H=>H.id===C.id?{...H,name:L.target.value}:H))},placeholder:"Rename Workspace...",style:{width:"150px"}})]},C.id))})]})]})]})]}),F.jsx(js,{position:"relative",style:{zIndex:10,position:"relative"},children:F.jsxs(co,{children:[F.jsx(ze,{className:o?"active":"",active:o,onClick:()=>l(!o),style:{fontWeight:"bold"},children:"🗂️ Workspaces"}),F.jsxs("div",{style:{marginLeft:"10px",fontFamily:"ms_sans_serif"},children:["Current: ",a.name]})]})})]})]})}Mi.createRoot(document.getElementById("root")).render(F.jsx(g.StrictMode,{children:F.jsx(fy,{})}));
