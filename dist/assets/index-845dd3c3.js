(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ic={exports:{}},Rl={},Rc={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),Mp=Symbol.for("react.portal"),Bp=Symbol.for("react.fragment"),Fp=Symbol.for("react.strict_mode"),jp=Symbol.for("react.profiler"),Up=Symbol.for("react.provider"),Hp=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),Qp=Symbol.for("react.suspense"),Vp=Symbol.for("react.memo"),Gp=Symbol.for("react.lazy"),Ya=Symbol.iterator;function Kp(e){return e===null||typeof e!="object"?null:(e=Ya&&e[Ya]||e["@@iterator"],typeof e=="function"?e:null)}var Nc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pc=Object.assign,Dc={};function fr(e,t,n){this.props=e,this.context=t,this.refs=Dc,this.updater=n||Nc}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lc(){}Lc.prototype=fr.prototype;function Bs(e,t,n){this.props=e,this.context=t,this.refs=Dc,this.updater=n||Nc}var Fs=Bs.prototype=new Lc;Fs.constructor=Bs;Pc(Fs,fr.prototype);Fs.isPureReactComponent=!0;var Xa=Array.isArray,zc=Object.prototype.hasOwnProperty,js={current:null},_c={key:!0,ref:!0,__self:!0,__source:!0};function Oc(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)zc.call(t,r)&&!_c.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:co,type:e,key:l,ref:i,props:o,_owner:js.current}}function Yp(e,t){return{$$typeof:co,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Us(e){return typeof e=="object"&&e!==null&&e.$$typeof===co}function Xp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Za=/\/+/g;function ti(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xp(""+e.key):t.toString(36)}function Bo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case co:case Mp:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+ti(i,0):r,Xa(o)?(n="",e!=null&&(n=e.replace(Za,"$&/")+"/"),Bo(o,t,n,"",function(c){return c})):o!=null&&(Us(o)&&(o=Yp(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Za,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Xa(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+ti(l,s);i+=Bo(l,t,n,a,o)}else if(a=Kp(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+ti(l,s++),i+=Bo(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function yo(e,t,n){if(e==null)return e;var r=[],o=0;return Bo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Zp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},Fo={transition:null},Jp={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:js};function Mc(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:yo,forEach:function(e,t,n){yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yo(e,function(){t++}),t},toArray:function(e){return yo(e,function(t){return t})||[]},only:function(e){if(!Us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=fr;G.Fragment=Bp;G.Profiler=jp;G.PureComponent=Bs;G.StrictMode=Fp;G.Suspense=Qp;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;G.act=Mc;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pc({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=js.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)zc.call(t,a)&&!_c.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:co,type:e.type,key:o,ref:l,props:r,_owner:i}};G.createContext=function(e){return e={$$typeof:Hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Up,_context:e},e.Consumer=e};G.createElement=Oc;G.createFactory=function(e){var t=Oc.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Wp,render:e}};G.isValidElement=Us;G.lazy=function(e){return{$$typeof:Gp,_payload:{_status:-1,_result:e},_init:Zp}};G.memo=function(e,t){return{$$typeof:Vp,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Fo.transition;Fo.transition={};try{e()}finally{Fo.transition=t}};G.unstable_act=Mc;G.useCallback=function(e,t){return Me.current.useCallback(e,t)};G.useContext=function(e){return Me.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};G.useEffect=function(e,t){return Me.current.useEffect(e,t)};G.useId=function(){return Me.current.useId()};G.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Me.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};G.useRef=function(e){return Me.current.useRef(e)};G.useState=function(e){return Me.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Me.current.useTransition()};G.version="18.3.1";Rc.exports=G;var S=Rc.exports;const y=Tc(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=S,eh=Symbol.for("react.element"),th=Symbol.for("react.fragment"),nh=Object.prototype.hasOwnProperty,rh=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oh={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)nh.call(t,r)&&!oh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:eh,type:e,key:l,ref:i,props:o,_owner:rh.current}}Rl.Fragment=th;Rl.jsx=Bc;Rl.jsxs=Bc;Ic.exports=Rl;var ee=Ic.exports,Li={},Fc={exports:{}},Ye={},jc={exports:{}},Uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,N){var L=b.length;b.push(N);e:for(;0<L;){var K=L-1>>>1,j=b[K];if(0<o(j,N))b[K]=N,b[L]=j,L=K;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var N=b[0],L=b.pop();if(L!==N){b[0]=L;e:for(var K=0,j=b.length,z=j>>>1;K<z;){var _=2*(K+1)-1,M=b[_],U=_+1,H=b[U];if(0>o(M,L))U<j&&0>o(H,M)?(b[K]=H,b[U]=L,K=U):(b[K]=M,b[_]=L,K=_);else if(U<j&&0>o(H,L))b[K]=H,b[U]=L,K=U;else break e}}return N}function o(b,N){var L=b.sortIndex-N.sortIndex;return L!==0?L:b.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],h=1,f=null,m=3,$=!1,w=!1,A=!1,I=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(b){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=b)r(c),N.sortIndex=N.expirationTime,t(a,N);else break;N=n(c)}}function g(b){if(A=!1,p(b),!w)if(n(a)!==null)w=!0,pe(v);else{var N=n(c);N!==null&&we(g,N.startTime-b)}}function v(b,N){w=!1,A&&(A=!1,d(E),E=-1),$=!0;var L=m;try{for(p(N),f=n(a);f!==null&&(!(f.expirationTime>N)||b&&!W());){var K=f.callback;if(typeof K=="function"){f.callback=null,m=f.priorityLevel;var j=K(f.expirationTime<=N);N=e.unstable_now(),typeof j=="function"?f.callback=j:f===n(a)&&r(a),p(N)}else r(a);f=n(a)}if(f!==null)var z=!0;else{var _=n(c);_!==null&&we(g,_.startTime-N),z=!1}return z}finally{f=null,m=L,$=!1}}var x=!1,k=null,E=-1,F=5,O=-1;function W(){return!(e.unstable_now()-O<F)}function Y(){if(k!==null){var b=e.unstable_now();O=b;var N=!0;try{N=k(!0,b)}finally{N?V():(x=!1,k=null)}}else x=!1}var V;if(typeof u=="function")V=function(){u(Y)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ne=q.port2;q.port1.onmessage=Y,V=function(){ne.postMessage(null)}}else V=function(){I(Y,0)};function pe(b){k=b,x||(x=!0,V())}function we(b,N){E=I(function(){b(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){w||$||(w=!0,pe(v))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var L=m;m=N;try{return b()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,N){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var L=m;m=b;try{return N()}finally{m=L}},e.unstable_scheduleCallback=function(b,N,L){var K=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?K+L:K):L=K,b){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=L+j,b={id:h++,callback:N,priorityLevel:b,startTime:L,expirationTime:j,sortIndex:-1},L>K?(b.sortIndex=L,t(c,b),n(a)===null&&b===n(c)&&(A?(d(E),E=-1):A=!0,we(g,L-K))):(b.sortIndex=j,t(a,b),w||$||(w=!0,pe(v))),b},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(b){var N=m;return function(){var L=m;m=N;try{return b.apply(this,arguments)}finally{m=L}}}})(Uc);jc.exports=Uc;var lh=jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih=S,Ke=lh;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hc=new Set,Wr={};function In(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Wr[e]=t,e=0;e<t.length;e++)Hc.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zi=Object.prototype.hasOwnProperty,sh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ja={},qa={};function ah(e){return zi.call(qa,e)?!0:zi.call(Ja,e)?!1:sh.test(e)?qa[e]=!0:(Ja[e]=!0,!1)}function uh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ch(e,t,n,r){if(t===null||typeof t>"u"||uh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hs=/[\-:]([a-z])/g;function Ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hs,Ws);Re[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hs,Ws);Re[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hs,Ws);Re[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qs(e,t,n,r){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ch(t,n,o,r)&&(n=null),r||o===null?ah(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _t=ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),zn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Vs=Symbol.for("react.strict_mode"),_i=Symbol.for("react.profiler"),Wc=Symbol.for("react.provider"),Qc=Symbol.for("react.context"),Gs=Symbol.for("react.forward_ref"),Oi=Symbol.for("react.suspense"),Mi=Symbol.for("react.suspense_list"),Ks=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Vc=Symbol.for("react.offscreen"),eu=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=eu&&e[eu]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,ni;function Cr(e){if(ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ni=t&&t[1]||""}return`
`+ni+e}var ri=!1;function oi(e,t){if(!e||ri)return"";ri=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{ri=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function dh(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=oi(e.type,!1),e;case 11:return e=oi(e.type.render,!1),e;case 1:return e=oi(e.type,!0),e;default:return""}}function Bi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case zn:return"Portal";case _i:return"Profiler";case Vs:return"StrictMode";case Oi:return"Suspense";case Mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qc:return(e.displayName||"Context")+".Consumer";case Wc:return(e._context.displayName||"Context")+".Provider";case Gs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ks:return t=e.displayName||null,t!==null?t:Bi(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return Bi(e(t))}catch{}}return null}function fh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bi(t);case 8:return t===Vs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ph(e){var t=Gc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xo(e){e._valueTracker||(e._valueTracker=ph(e))}function Kc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fi(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yc(e,t){t=t.checked,t!=null&&Qs(e,"checked",t,!1)}function ji(e,t){Yc(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ui(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ui(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ui(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Kn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ru(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Tr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function Xc(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ou(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ko,Jc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hh=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){hh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function qc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function ed(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=qc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var mh=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qi(e,t){if(t){if(mh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gi=null;function Ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ki=null,Yn=null,Xn=null;function lu(e){if(e=ho(e)){if(typeof Ki!="function")throw Error(T(280));var t=e.stateNode;t&&(t=zl(t),Ki(e.stateNode,e.type,t))}}function td(e){Yn?Xn?Xn.push(e):Xn=[e]:Yn=e}function nd(){if(Yn){var e=Yn,t=Xn;if(Xn=Yn=null,lu(e),t)for(e=0;e<t.length;e++)lu(t[e])}}function rd(e,t){return e(t)}function od(){}var li=!1;function ld(e,t,n){if(li)return e(t,n);li=!0;try{return rd(e,t,n)}finally{li=!1,(Yn!==null||Xn!==null)&&(od(),nd())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Yi=!1;if(Pt)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Yi=!1}function gh(e,t,n,r,o,l,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Lr=!1,rl=null,ol=!1,Xi=null,vh={onError:function(e){Lr=!0,rl=e}};function yh(e,t,n,r,o,l,i,s,a){Lr=!1,rl=null,gh.apply(vh,arguments)}function wh(e,t,n,r,o,l,i,s,a){if(yh.apply(this,arguments),Lr){if(Lr){var c=rl;Lr=!1,rl=null}else throw Error(T(198));ol||(ol=!0,Xi=c)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function id(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function iu(e){if(Rn(e)!==e)throw Error(T(188))}function xh(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return iu(o),e;if(l===r)return iu(o),t;l=l.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function sd(e){return e=xh(e),e!==null?ad(e):null}function ad(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ad(e);if(t!==null)return t;e=e.sibling}return null}var ud=Ke.unstable_scheduleCallback,su=Ke.unstable_cancelCallback,kh=Ke.unstable_shouldYield,Sh=Ke.unstable_requestPaint,ge=Ke.unstable_now,$h=Ke.unstable_getCurrentPriorityLevel,Xs=Ke.unstable_ImmediatePriority,cd=Ke.unstable_UserBlockingPriority,ll=Ke.unstable_NormalPriority,Ah=Ke.unstable_LowPriority,dd=Ke.unstable_IdlePriority,Nl=null,wt=null;function Eh(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Nl,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Th,bh=Math.log,Ch=Math.LN2;function Th(e){return e>>>=0,e===0?32:31-(bh(e)/Ch|0)|0}var So=64,$o=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Ir(s):(l&=i,l!==0&&(r=Ir(l)))}else i=n&~o,i!==0?r=Ir(i):l!==0&&(r=Ir(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function Ih(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-ct(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=Ih(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function Zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fd(){var e=So;return So<<=1,!(So&4194240)&&(So=64),e}function ii(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Nh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Zs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function pd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hd,Js,md,gd,vd,Ji=!1,Ao=[],Gt=null,Kt=null,Yt=null,Gr=new Map,Kr=new Map,Ut=[],Ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function au(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function xr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=ho(t),t!==null&&Js(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Dh(e,t,n,r,o){switch(t){case"focusin":return Gt=xr(Gt,e,t,n,r,o),!0;case"dragenter":return Kt=xr(Kt,e,t,n,r,o),!0;case"mouseover":return Yt=xr(Yt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Gr.set(l,xr(Gr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Kr.set(l,xr(Kr.get(l)||null,e,t,n,r,o)),!0}return!1}function yd(e){var t=mn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=id(n),t!==null){e.blockedOn=t,vd(e.priority,function(){md(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gi=r,n.target.dispatchEvent(r),Gi=null}else return t=ho(n),t!==null&&Js(t),e.blockedOn=n,!1;t.shift()}return!0}function uu(e,t,n){jo(e)&&n.delete(t)}function Lh(){Ji=!1,Gt!==null&&jo(Gt)&&(Gt=null),Kt!==null&&jo(Kt)&&(Kt=null),Yt!==null&&jo(Yt)&&(Yt=null),Gr.forEach(uu),Kr.forEach(uu)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ji||(Ji=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Lh)))}function Yr(e){function t(o){return kr(o,e)}if(0<Ao.length){kr(Ao[0],e);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&kr(Gt,e),Kt!==null&&kr(Kt,e),Yt!==null&&kr(Yt,e),Gr.forEach(t),Kr.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)yd(n),n.blockedOn===null&&Ut.shift()}var Zn=_t.ReactCurrentBatchConfig,sl=!0;function zh(e,t,n,r){var o=te,l=Zn.transition;Zn.transition=null;try{te=1,qs(e,t,n,r)}finally{te=o,Zn.transition=l}}function _h(e,t,n,r){var o=te,l=Zn.transition;Zn.transition=null;try{te=4,qs(e,t,n,r)}finally{te=o,Zn.transition=l}}function qs(e,t,n,r){if(sl){var o=qi(e,t,n,r);if(o===null)gi(e,t,r,al,n),au(e,r);else if(Dh(o,e,t,n,r))r.stopPropagation();else if(au(e,r),t&4&&-1<Ph.indexOf(e)){for(;o!==null;){var l=ho(o);if(l!==null&&hd(l),l=qi(e,t,n,r),l===null&&gi(e,t,r,al,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else gi(e,t,r,null,n)}}var al=null;function qi(e,t,n,r){if(al=null,e=Ys(r),e=mn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=id(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return al=e,null}function wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($h()){case Xs:return 1;case cd:return 4;case ll:case Ah:return 16;case dd:return 536870912;default:return 16}default:return 16}}var Wt=null,ea=null,Uo=null;function xd(){if(Uo)return Uo;var e,t=ea,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Uo=o.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function cu(){return!1}function Xe(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Eo:cu,this.isPropagationStopped=cu,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=Xe(pr),po=fe({},pr,{view:0,detail:0}),Oh=Xe(po),si,ai,Sr,Pl=fe({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(si=e.screenX-Sr.screenX,ai=e.screenY-Sr.screenY):ai=si=0,Sr=e),si)},movementY:function(e){return"movementY"in e?e.movementY:ai}}),du=Xe(Pl),Mh=fe({},Pl,{dataTransfer:0}),Bh=Xe(Mh),Fh=fe({},po,{relatedTarget:0}),ui=Xe(Fh),jh=fe({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Uh=Xe(jh),Hh=fe({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wh=Xe(Hh),Qh=fe({},pr,{data:0}),fu=Xe(Qh),Vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kh[e])?!!t[e]:!1}function na(){return Yh}var Xh=fe({},po,{key:function(e){if(e.key){var t=Vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zh=Xe(Xh),Jh=fe({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pu=Xe(Jh),qh=fe({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),e0=Xe(qh),t0=fe({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=Xe(t0),r0=fe({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),o0=Xe(r0),l0=[9,13,27,32],ra=Pt&&"CompositionEvent"in window,zr=null;Pt&&"documentMode"in document&&(zr=document.documentMode);var i0=Pt&&"TextEvent"in window&&!zr,kd=Pt&&(!ra||zr&&8<zr&&11>=zr),hu=String.fromCharCode(32),mu=!1;function Sd(e,t){switch(e){case"keyup":return l0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function s0(e,t){switch(e){case"compositionend":return $d(t);case"keypress":return t.which!==32?null:(mu=!0,hu);case"textInput":return e=t.data,e===hu&&mu?null:e;default:return null}}function a0(e,t){if(On)return e==="compositionend"||!ra&&Sd(e,t)?(e=xd(),Uo=ea=Wt=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kd&&t.locale!=="ko"?null:t.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!u0[e.type]:t==="textarea"}function Ad(e,t,n,r){td(r),t=ul(t,"onChange"),0<t.length&&(n=new ta("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,Xr=null;function c0(e){zd(e,0)}function Dl(e){var t=Fn(e);if(Kc(t))return e}function d0(e,t){if(e==="change")return t}var Ed=!1;if(Pt){var ci;if(Pt){var di="oninput"in document;if(!di){var vu=document.createElement("div");vu.setAttribute("oninput","return;"),di=typeof vu.oninput=="function"}ci=di}else ci=!1;Ed=ci&&(!document.documentMode||9<document.documentMode)}function yu(){_r&&(_r.detachEvent("onpropertychange",bd),Xr=_r=null)}function bd(e){if(e.propertyName==="value"&&Dl(Xr)){var t=[];Ad(t,Xr,e,Ys(e)),ld(c0,t)}}function f0(e,t,n){e==="focusin"?(yu(),_r=t,Xr=n,_r.attachEvent("onpropertychange",bd)):e==="focusout"&&yu()}function p0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(Xr)}function h0(e,t){if(e==="click")return Dl(t)}function m0(e,t){if(e==="input"||e==="change")return Dl(t)}function g0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:g0;function Zr(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!zi.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xu(e,t){var n=wu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wu(n)}}function Cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Td(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function v0(e){var t=Td(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cd(n.ownerDocument.documentElement,n)){if(r!==null&&oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=xu(n,l);var i=xu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var y0=Pt&&"documentMode"in document&&11>=document.documentMode,Mn=null,es=null,Or=null,ts=!1;function ku(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ts||Mn==null||Mn!==nl(r)||(r=Mn,"selectionStart"in r&&oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&Zr(Or,r)||(Or=r,r=ul(es,"onSelect"),0<r.length&&(t=new ta("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},fi={},Id={};Pt&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function Ll(e){if(fi[e])return fi[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Id)return fi[e]=t[n];return e}var Rd=Ll("animationend"),Nd=Ll("animationiteration"),Pd=Ll("animationstart"),Dd=Ll("transitionend"),Ld=new Map,Su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Ld.set(e,t),In(t,[e])}for(var pi=0;pi<Su.length;pi++){var hi=Su[pi],w0=hi.toLowerCase(),x0=hi[0].toUpperCase()+hi.slice(1);sn(w0,"on"+x0)}sn(Rd,"onAnimationEnd");sn(Nd,"onAnimationIteration");sn(Pd,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Dd,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function $u(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wh(r,t,void 0,e),e.currentTarget=null}function zd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;$u(o,s,c),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;$u(o,s,c),l=a}}}if(ol)throw e=Xi,ol=!1,Xi=null,e}function oe(e,t){var n=t[is];n===void 0&&(n=t[is]=new Set);var r=e+"__bubble";n.has(r)||(_d(t,e,2,!1),n.add(r))}function mi(e,t,n){var r=0;t&&(r|=4),_d(n,e,r,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Co]){e[Co]=!0,Hc.forEach(function(n){n!=="selectionchange"&&(k0.has(n)||mi(n,!1,e),mi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,mi("selectionchange",!1,t))}}function _d(e,t,n,r){switch(wd(t)){case 1:var o=zh;break;case 4:o=_h;break;default:o=qs}n=o.bind(null,t,n,e),o=void 0,!Yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function gi(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=mn(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}ld(function(){var c=l,h=Ys(n),f=[];e:{var m=Ld.get(e);if(m!==void 0){var $=ta,w=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":$=Zh;break;case"focusin":w="focus",$=ui;break;case"focusout":w="blur",$=ui;break;case"beforeblur":case"afterblur":$=ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=e0;break;case Rd:case Nd:case Pd:$=Uh;break;case Dd:$=n0;break;case"scroll":$=Oh;break;case"wheel":$=o0;break;case"copy":case"cut":case"paste":$=Wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=pu}var A=(t&4)!==0,I=!A&&e==="scroll",d=A?m!==null?m+"Capture":null:m;A=[];for(var u=c,p;u!==null;){p=u;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,d!==null&&(g=Vr(u,d),g!=null&&A.push(qr(u,g,p)))),I)break;u=u.return}0<A.length&&(m=new $(m,w,null,n,h),f.push({event:m,listeners:A}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",m&&n!==Gi&&(w=n.relatedTarget||n.fromElement)&&(mn(w)||w[Dt]))break e;if(($||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,$?(w=n.relatedTarget||n.toElement,$=c,w=w?mn(w):null,w!==null&&(I=Rn(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):($=null,w=c),$!==w)){if(A=du,g="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(A=pu,g="onPointerLeave",d="onPointerEnter",u="pointer"),I=$==null?m:Fn($),p=w==null?m:Fn(w),m=new A(g,u+"leave",$,n,h),m.target=I,m.relatedTarget=p,g=null,mn(h)===c&&(A=new A(d,u+"enter",w,n,h),A.target=p,A.relatedTarget=I,g=A),I=g,$&&w)t:{for(A=$,d=w,u=0,p=A;p;p=Pn(p))u++;for(p=0,g=d;g;g=Pn(g))p++;for(;0<u-p;)A=Pn(A),u--;for(;0<p-u;)d=Pn(d),p--;for(;u--;){if(A===d||d!==null&&A===d.alternate)break t;A=Pn(A),d=Pn(d)}A=null}else A=null;$!==null&&Au(f,m,$,A,!1),w!==null&&I!==null&&Au(f,I,w,A,!0)}}e:{if(m=c?Fn(c):window,$=m.nodeName&&m.nodeName.toLowerCase(),$==="select"||$==="input"&&m.type==="file")var v=d0;else if(gu(m))if(Ed)v=m0;else{v=p0;var x=f0}else($=m.nodeName)&&$.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(v=h0);if(v&&(v=v(e,c))){Ad(f,v,n,h);break e}x&&x(e,m,c),e==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&Ui(m,"number",m.value)}switch(x=c?Fn(c):window,e){case"focusin":(gu(x)||x.contentEditable==="true")&&(Mn=x,es=c,Or=null);break;case"focusout":Or=es=Mn=null;break;case"mousedown":ts=!0;break;case"contextmenu":case"mouseup":case"dragend":ts=!1,ku(f,n,h);break;case"selectionchange":if(y0)break;case"keydown":case"keyup":ku(f,n,h)}var k;if(ra)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else On?Sd(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(kd&&n.locale!=="ko"&&(On||E!=="onCompositionStart"?E==="onCompositionEnd"&&On&&(k=xd()):(Wt=h,ea="value"in Wt?Wt.value:Wt.textContent,On=!0)),x=ul(c,E),0<x.length&&(E=new fu(E,e,null,n,h),f.push({event:E,listeners:x}),k?E.data=k:(k=$d(n),k!==null&&(E.data=k)))),(k=i0?s0(e,n):a0(e,n))&&(c=ul(c,"onBeforeInput"),0<c.length&&(h=new fu("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=k))}zd(f,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Vr(e,n),l!=null&&r.unshift(qr(e,l,o)),l=Vr(e,t),l!=null&&r.push(qr(e,l,o))),e=e.return}return r}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Au(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Vr(n,l),a!=null&&i.unshift(qr(n,a,s))):o||(a=Vr(n,l),a!=null&&i.push(qr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var S0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function Eu(e){return(typeof e=="string"?e:""+e).replace(S0,`
`).replace($0,"")}function To(e,t,n){if(t=Eu(t),Eu(e)!==t&&n)throw Error(T(425))}function cl(){}var ns=null,rs=null;function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=typeof setTimeout=="function"?setTimeout:void 0,A0=typeof clearTimeout=="function"?clearTimeout:void 0,bu=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof bu<"u"?function(e){return bu.resolve(null).then(e).catch(b0)}:ls;function b0(e){setTimeout(function(){throw e})}function vi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yr(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),yt="__reactFiber$"+hr,eo="__reactProps$"+hr,Dt="__reactContainer$"+hr,is="__reactEvents$"+hr,C0="__reactListeners$"+hr,T0="__reactHandles$"+hr;function mn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cu(e);e!==null;){if(n=e[yt])return n;e=Cu(e)}return t}e=n,n=e.parentNode}return null}function ho(e){return e=e[yt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function zl(e){return e[eo]||null}var ss=[],jn=-1;function an(e){return{current:e}}function ie(e){0>jn||(e.current=ss[jn],ss[jn]=null,jn--)}function re(e,t){jn++,ss[jn]=e.current,e.current=t}var rn={},ze=an(rn),Ue=an(!1),Sn=rn;function tr(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function dl(){ie(Ue),ie(ze)}function Tu(e,t,n){if(ze.current!==rn)throw Error(T(168));re(ze,t),re(Ue,n)}function Od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,fh(e)||"Unknown",o));return fe({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,Sn=ze.current,re(ze,e),re(Ue,Ue.current),!0}function Iu(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Od(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,ie(Ue),ie(ze),re(ze,e)):ie(Ue),re(Ue,n)}var Ct=null,_l=!1,yi=!1;function Md(e){Ct===null?Ct=[e]:Ct.push(e)}function I0(e){_l=!0,Md(e)}function un(){if(!yi&&Ct!==null){yi=!0;var e=0,t=te;try{var n=Ct;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,_l=!1}catch(o){throw Ct!==null&&(Ct=Ct.slice(e+1)),ud(Xs,un),o}finally{te=t,yi=!1}}return null}var Un=[],Hn=0,pl=null,hl=0,Je=[],qe=0,$n=null,It=1,Rt="";function fn(e,t){Un[Hn++]=hl,Un[Hn++]=pl,pl=e,hl=t}function Bd(e,t,n){Je[qe++]=It,Je[qe++]=Rt,Je[qe++]=$n,$n=e;var r=It;e=Rt;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var l=32-ct(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,It=1<<32-ct(t)+o|n<<o|r,Rt=l+e}else It=1<<l|n<<o|r,Rt=e}function la(e){e.return!==null&&(fn(e,1),Bd(e,1,0))}function ia(e){for(;e===pl;)pl=Un[--Hn],Un[Hn]=null,hl=Un[--Hn],Un[Hn]=null;for(;e===$n;)$n=Je[--qe],Je[qe]=null,Rt=Je[--qe],Je[qe]=null,It=Je[--qe],Je[qe]=null}var Ge=null,Ve=null,ae=!1,ut=null;function Fd(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Ve=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:It,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Ve=null,!0):!1;default:return!1}}function as(e){return(e.mode&1)!==0&&(e.flags&128)===0}function us(e){if(ae){var t=Ve;if(t){var n=t;if(!Ru(e,t)){if(as(e))throw Error(T(418));t=Xt(n.nextSibling);var r=Ge;t&&Ru(e,t)?Fd(r,n):(e.flags=e.flags&-4097|2,ae=!1,Ge=e)}}else{if(as(e))throw Error(T(418));e.flags=e.flags&-4097|2,ae=!1,Ge=e}}}function Nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Io(e){if(e!==Ge)return!1;if(!ae)return Nu(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!os(e.type,e.memoizedProps)),t&&(t=Ve)){if(as(e))throw jd(),Error(T(418));for(;t;)Fd(e,t),t=Xt(t.nextSibling)}if(Nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Ge?Xt(e.stateNode.nextSibling):null;return!0}function jd(){for(var e=Ve;e;)e=Xt(e.nextSibling)}function nr(){Ve=Ge=null,ae=!1}function sa(e){ut===null?ut=[e]:ut.push(e)}var R0=_t.ReactCurrentBatchConfig;function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Ro(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pu(e){var t=e._init;return t(e._payload)}function Ud(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=en(d,u),d.index=0,d.sibling=null,d}function l(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,p,g){return u===null||u.tag!==6?(u=Ei(p,d.mode,g),u.return=d,u):(u=o(u,p),u.return=d,u)}function a(d,u,p,g){var v=p.type;return v===_n?h(d,u,p.props.children,g,p.key):u!==null&&(u.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Ft&&Pu(v)===u.type)?(g=o(u,p.props),g.ref=$r(d,u,p),g.return=d,g):(g=Xo(p.type,p.key,p.props,null,d.mode,g),g.ref=$r(d,u,p),g.return=d,g)}function c(d,u,p,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=bi(p,d.mode,g),u.return=d,u):(u=o(u,p.children||[]),u.return=d,u)}function h(d,u,p,g,v){return u===null||u.tag!==7?(u=xn(p,d.mode,g,v),u.return=d,u):(u=o(u,p),u.return=d,u)}function f(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ei(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case wo:return p=Xo(u.type,u.key,u.props,null,d.mode,p),p.ref=$r(d,null,u),p.return=d,p;case zn:return u=bi(u,d.mode,p),u.return=d,u;case Ft:var g=u._init;return f(d,g(u._payload),p)}if(Tr(u)||yr(u))return u=xn(u,d.mode,p,null),u.return=d,u;Ro(d,u)}return null}function m(d,u,p,g){var v=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return v!==null?null:s(d,u,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wo:return p.key===v?a(d,u,p,g):null;case zn:return p.key===v?c(d,u,p,g):null;case Ft:return v=p._init,m(d,u,v(p._payload),g)}if(Tr(p)||yr(p))return v!==null?null:h(d,u,p,g,null);Ro(d,p)}return null}function $(d,u,p,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(p)||null,s(u,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wo:return d=d.get(g.key===null?p:g.key)||null,a(u,d,g,v);case zn:return d=d.get(g.key===null?p:g.key)||null,c(u,d,g,v);case Ft:var x=g._init;return $(d,u,p,x(g._payload),v)}if(Tr(g)||yr(g))return d=d.get(p)||null,h(u,d,g,v,null);Ro(u,g)}return null}function w(d,u,p,g){for(var v=null,x=null,k=u,E=u=0,F=null;k!==null&&E<p.length;E++){k.index>E?(F=k,k=null):F=k.sibling;var O=m(d,k,p[E],g);if(O===null){k===null&&(k=F);break}e&&k&&O.alternate===null&&t(d,k),u=l(O,u,E),x===null?v=O:x.sibling=O,x=O,k=F}if(E===p.length)return n(d,k),ae&&fn(d,E),v;if(k===null){for(;E<p.length;E++)k=f(d,p[E],g),k!==null&&(u=l(k,u,E),x===null?v=k:x.sibling=k,x=k);return ae&&fn(d,E),v}for(k=r(d,k);E<p.length;E++)F=$(k,d,E,p[E],g),F!==null&&(e&&F.alternate!==null&&k.delete(F.key===null?E:F.key),u=l(F,u,E),x===null?v=F:x.sibling=F,x=F);return e&&k.forEach(function(W){return t(d,W)}),ae&&fn(d,E),v}function A(d,u,p,g){var v=yr(p);if(typeof v!="function")throw Error(T(150));if(p=v.call(p),p==null)throw Error(T(151));for(var x=v=null,k=u,E=u=0,F=null,O=p.next();k!==null&&!O.done;E++,O=p.next()){k.index>E?(F=k,k=null):F=k.sibling;var W=m(d,k,O.value,g);if(W===null){k===null&&(k=F);break}e&&k&&W.alternate===null&&t(d,k),u=l(W,u,E),x===null?v=W:x.sibling=W,x=W,k=F}if(O.done)return n(d,k),ae&&fn(d,E),v;if(k===null){for(;!O.done;E++,O=p.next())O=f(d,O.value,g),O!==null&&(u=l(O,u,E),x===null?v=O:x.sibling=O,x=O);return ae&&fn(d,E),v}for(k=r(d,k);!O.done;E++,O=p.next())O=$(k,d,E,O.value,g),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?E:O.key),u=l(O,u,E),x===null?v=O:x.sibling=O,x=O);return e&&k.forEach(function(Y){return t(d,Y)}),ae&&fn(d,E),v}function I(d,u,p,g){if(typeof p=="object"&&p!==null&&p.type===_n&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case wo:e:{for(var v=p.key,x=u;x!==null;){if(x.key===v){if(v=p.type,v===_n){if(x.tag===7){n(d,x.sibling),u=o(x,p.props.children),u.return=d,d=u;break e}}else if(x.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Ft&&Pu(v)===x.type){n(d,x.sibling),u=o(x,p.props),u.ref=$r(d,x,p),u.return=d,d=u;break e}n(d,x);break}else t(d,x);x=x.sibling}p.type===_n?(u=xn(p.props.children,d.mode,g,p.key),u.return=d,d=u):(g=Xo(p.type,p.key,p.props,null,d.mode,g),g.ref=$r(d,u,p),g.return=d,d=g)}return i(d);case zn:e:{for(x=p.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=o(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=bi(p,d.mode,g),u.return=d,d=u}return i(d);case Ft:return x=p._init,I(d,u,x(p._payload),g)}if(Tr(p))return w(d,u,p,g);if(yr(p))return A(d,u,p,g);Ro(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,p),u.return=d,d=u):(n(d,u),u=Ei(p,d.mode,g),u.return=d,d=u),i(d)):n(d,u)}return I}var rr=Ud(!0),Hd=Ud(!1),ml=an(null),gl=null,Wn=null,aa=null;function ua(){aa=Wn=gl=null}function ca(e){var t=ml.current;ie(ml),e._currentValue=t}function cs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){gl=e,aa=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(aa!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(gl===null)throw Error(T(308));Wn=e,gl.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var gn=null;function da(e){gn===null?gn=[e]:gn.push(e)}function Wd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,da(t)):(n.next=o.next,o.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Lt(e,n)}return o=r.interleaved,o===null?(t.next=t,da(r)):(t.next=o.next,o.next=t),r.interleaved=t,Lt(e,n)}function Wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}function Du(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var o=e.updateQueue;jt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(l!==null){var f=o.baseState;i=0,h=c=a=null,s=l;do{var m=s.lane,$=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:$,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,A=s;switch(m=t,$=n,A.tag){case 1:if(w=A.payload,typeof w=="function"){f=w.call($,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=A.payload,m=typeof w=="function"?w.call($,f,m):w,m==null)break e;f=fe({},f,m);break e;case 2:jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else $={eventTime:$,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=$,a=f):h=h.next=$,i|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(h===null&&(a=f),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);En|=i,e.lanes=i,e.memoizedState=f}}function Lu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var mo={},xt=an(mo),to=an(mo),no=an(mo);function vn(e){if(e===mo)throw Error(T(174));return e}function pa(e,t){switch(re(no,t),re(to,e),re(xt,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wi(t,e)}ie(xt),re(xt,t)}function or(){ie(xt),ie(to),ie(no)}function Vd(e){vn(no.current);var t=vn(xt.current),n=Wi(t,e.type);t!==n&&(re(to,e),re(xt,n))}function ha(e){to.current===e&&(ie(xt),ie(to))}var ce=an(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wi=[];function ma(){for(var e=0;e<wi.length;e++)wi[e]._workInProgressVersionPrimary=null;wi.length=0}var Qo=_t.ReactCurrentDispatcher,xi=_t.ReactCurrentBatchConfig,An=0,de=null,ke=null,Ae=null,wl=!1,Mr=!1,ro=0,N0=0;function Pe(){throw Error(T(321))}function ga(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function va(e,t,n,r,o,l){if(An=l,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qo.current=e===null||e.memoizedState===null?z0:_0,e=n(r,o),Mr){l=0;do{if(Mr=!1,ro=0,25<=l)throw Error(T(301));l+=1,Ae=ke=null,t.updateQueue=null,Qo.current=O0,e=n(r,o)}while(Mr)}if(Qo.current=xl,t=ke!==null&&ke.next!==null,An=0,Ae=ke=de=null,wl=!1,t)throw Error(T(300));return e}function ya(){var e=ro!==0;return ro=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?de.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function rt(){if(ke===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ae===null?de.memoizedState:Ae.next;if(t!==null)Ae=t,ke=e;else{if(e===null)throw Error(T(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ae===null?de.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function oo(e,t){return typeof t=="function"?t(e):t}function ki(e){var t=rt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=ke,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,c=l;do{var h=c.lane;if((An&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=f,i=r):a=a.next=f,de.lanes|=h,En|=h}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=s,pt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,de.lanes|=l,En|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=rt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);pt(l,t.memoizedState)||(je=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Gd(){}function Kd(e,t){var n=de,r=rt(),o=t(),l=!pt(r.memoizedState,o);if(l&&(r.memoizedState=o,je=!0),r=r.queue,wa(Zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,lo(9,Xd.bind(null,n,r,o,t),void 0,null),Ee===null)throw Error(T(349));An&30||Yd(n,t,o)}return o}function Yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xd(e,t,n,r){t.value=n,t.getSnapshot=r,Jd(t)&&qd(e)}function Zd(e,t,n){return n(function(){Jd(t)&&qd(e)})}function Jd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function qd(e){var t=Lt(e,1);t!==null&&dt(t,e,1,-1)}function zu(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:e},t.queue=e,e=e.dispatch=L0.bind(null,de,e),[t.memoizedState,e]}function lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ef(){return rt().memoizedState}function Vo(e,t,n,r){var o=vt();de.flags|=e,o.memoizedState=lo(1|t,n,void 0,r===void 0?null:r)}function Ol(e,t,n,r){var o=rt();r=r===void 0?null:r;var l=void 0;if(ke!==null){var i=ke.memoizedState;if(l=i.destroy,r!==null&&ga(r,i.deps)){o.memoizedState=lo(t,n,l,r);return}}de.flags|=e,o.memoizedState=lo(1|t,n,l,r)}function _u(e,t){return Vo(8390656,8,e,t)}function wa(e,t){return Ol(2048,8,e,t)}function tf(e,t){return Ol(4,2,e,t)}function nf(e,t){return Ol(4,4,e,t)}function rf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function of(e,t,n){return n=n!=null?n.concat([e]):null,Ol(4,4,rf.bind(null,t,e),n)}function xa(){}function lf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ga(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ga(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function af(e,t,n){return An&21?(pt(n,t)||(n=fd(),de.lanes|=n,En|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function P0(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=xi.transition;xi.transition={};try{e(!1),t()}finally{te=n,xi.transition=r}}function uf(){return rt().memoizedState}function D0(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cf(e))df(t,n);else if(n=Wd(e,t,n,r),n!==null){var o=Oe();dt(n,e,r,o),ff(n,t,r)}}function L0(e,t,n){var r=qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cf(e))df(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,pt(s,i)){var a=t.interleaved;a===null?(o.next=o,da(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Wd(e,t,o,r),n!==null&&(o=Oe(),dt(n,e,r,o),ff(n,t,r))}}function cf(e){var t=e.alternate;return e===de||t!==null&&t===de}function df(e,t){Mr=wl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ff(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}var xl={readContext:nt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},z0={readContext:nt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:_u,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4194308,4,rf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vo(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=D0.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:xa,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=P0.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,o=vt();if(ae){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Ee===null)throw Error(T(349));An&30||Yd(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,_u(Zd.bind(null,r,l,e),[e]),r.flags|=2048,lo(9,Xd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=vt(),t=Ee.identifierPrefix;if(ae){var n=Rt,r=It;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ro++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=N0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_0={readContext:nt,useCallback:lf,useContext:nt,useEffect:wa,useImperativeHandle:of,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:sf,useReducer:ki,useRef:ef,useState:function(){return ki(oo)},useDebugValue:xa,useDeferredValue:function(e){var t=rt();return af(t,ke.memoizedState,e)},useTransition:function(){var e=ki(oo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:Kd,useId:uf,unstable_isNewReconciler:!1},O0={readContext:nt,useCallback:lf,useContext:nt,useEffect:wa,useImperativeHandle:of,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:sf,useReducer:Si,useRef:ef,useState:function(){return Si(oo)},useDebugValue:xa,useDeferredValue:function(e){var t=rt();return ke===null?t.memoizedState=e:af(t,ke.memoizedState,e)},useTransition:function(){var e=Si(oo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:Kd,useId:uf,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ds(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ml={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=qt(e),l=Nt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Zt(e,l,o),t!==null&&(dt(t,e,o,r),Wo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=qt(e),l=Nt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Zt(e,l,o),t!==null&&(dt(t,e,o,r),Wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=qt(e),o=Nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Zt(e,o,r),t!==null&&(dt(t,e,r,n),Wo(t,e,r))}};function Ou(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Zr(n,r)||!Zr(o,l):!0}function pf(e,t,n){var r=!1,o=rn,l=t.contextType;return typeof l=="object"&&l!==null?l=nt(l):(o=He(t)?Sn:ze.current,r=t.contextTypes,l=(r=r!=null)?tr(e,o):rn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Mu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ml.enqueueReplaceState(t,t.state,null)}function fs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},fa(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=nt(l):(l=He(t)?Sn:ze.current,o.context=tr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ds(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ml.enqueueReplaceState(o,o.state,null),vl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t){try{var n="",r=t;do n+=dh(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function $i(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ps(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var M0=typeof WeakMap=="function"?WeakMap:Map;function hf(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sl||(Sl=!0,$s=r),ps(e,t)},n}function mf(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ps(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ps(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new M0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=J0.bind(null,e,t,n),t.then(e,e))}function Fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ju(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var B0=_t.ReactCurrentOwner,je=!1;function _e(e,t,n,r){t.child=e===null?Hd(t,null,n,r):rr(t,e.child,n,r)}function Uu(e,t,n,r,o){n=n.render;var l=t.ref;return Jn(t,o),r=va(e,t,n,r,l,o),n=ya(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(ae&&n&&la(t),t.flags|=1,_e(e,t,r,o),t.child)}function Hu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ta(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,gf(e,t,l,r,o)):(e=Xo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Zr,n(i,r)&&e.ref===t.ref)return zt(e,t,o)}return t.flags|=1,e=en(l,r),e.ref=t.ref,e.return=t,t.child=e}function gf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Zr(l,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,zt(e,t,o)}return hs(e,t,n,r,o)}function vf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Vn,Qe),Qe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Vn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,re(Vn,Qe),Qe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,re(Vn,Qe),Qe|=r;return _e(e,t,o,n),t.child}function yf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hs(e,t,n,r,o){var l=He(n)?Sn:ze.current;return l=tr(t,l),Jn(t,o),n=va(e,t,n,r,l,o),r=ya(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(ae&&r&&la(t),t.flags|=1,_e(e,t,n,o),t.child)}function Wu(e,t,n,r,o){if(He(n)){var l=!0;fl(t)}else l=!1;if(Jn(t,o),t.stateNode===null)Go(e,t),pf(t,n,r),fs(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=nt(c):(c=He(n)?Sn:ze.current,c=tr(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Mu(t,i,r,c),jt=!1;var m=t.memoizedState;i.state=m,vl(t,r,i,o),a=t.memoizedState,s!==r||m!==a||Ue.current||jt?(typeof h=="function"&&(ds(t,n,h,r),a=t.memoizedState),(s=jt||Ou(t,n,s,r,m,a,c))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Qd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:it(t.type,s),i.props=c,f=t.pendingProps,m=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=He(n)?Sn:ze.current,a=tr(t,a));var $=n.getDerivedStateFromProps;(h=typeof $=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==f||m!==a)&&Mu(t,i,r,a),jt=!1,m=t.memoizedState,i.state=m,vl(t,r,i,o);var w=t.memoizedState;s!==f||m!==w||Ue.current||jt?(typeof $=="function"&&(ds(t,n,$,r),w=t.memoizedState),(c=jt||Ou(t,n,c,r,m,w,a)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ms(e,t,n,r,l,o)}function ms(e,t,n,r,o,l){yf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Iu(t,n,!1),zt(e,t,l);r=t.stateNode,B0.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=rr(t,e.child,null,l),t.child=rr(t,null,s,l)):_e(e,t,s,l),t.memoizedState=r.state,o&&Iu(t,n,!0),t.child}function wf(e){var t=e.stateNode;t.pendingContext?Tu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tu(e,t.context,!1),pa(e,t.containerInfo)}function Qu(e,t,n,r,o){return nr(),sa(o),t.flags|=256,_e(e,t,n,r),t.child}var gs={dehydrated:null,treeContext:null,retryLane:0};function vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function xf(e,t,n){var r=t.pendingProps,o=ce.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),re(ce,o&1),e===null)return us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=jl(i,r,0,null),e=xn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=vs(n),t.memoizedState=gs,e):ka(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return F0(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=en(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=en(s,l):(l=xn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?vs(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=gs,r}return l=e.child,e=l.sibling,r=en(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ka(e,t){return t=jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function No(e,t,n,r){return r!==null&&sa(r),rr(t,e.child,null,n),e=ka(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function F0(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=$i(Error(T(422))),No(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=jl({mode:"visible",children:r.children},o,0,null),l=xn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&rr(t,e.child,null,i),t.child.memoizedState=vs(i),t.memoizedState=gs,l);if(!(t.mode&1))return No(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(T(419)),r=$i(l,r,void 0),No(e,t,i,r)}if(s=(i&e.childLanes)!==0,je||s){if(r=Ee,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Lt(e,o),dt(r,e,o,-1))}return Ca(),r=$i(Error(T(421))),No(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=q0.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ve=Xt(o.nextSibling),Ge=t,ae=!0,ut=null,e!==null&&(Je[qe++]=It,Je[qe++]=Rt,Je[qe++]=$n,It=e.id,Rt=e.overflow,$n=t),t=ka(t,r.children),t.flags|=4096,t)}function Vu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cs(e.return,t,n)}function Ai(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function kf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(_e(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vu(e,n,t);else if(e.tag===19)Vu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(ce,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ai(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&yl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ai(t,!0,n,null,l);break;case"together":Ai(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Go(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function j0(e,t,n){switch(t.tag){case 3:wf(t),nr();break;case 5:Vd(t);break;case 1:He(t.type)&&fl(t);break;case 4:pa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;re(ml,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?xf(e,t,n):(re(ce,ce.current&1),e=zt(e,t,n),e!==null?e.sibling:null);re(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),re(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,vf(e,t,n)}return zt(e,t,n)}var Sf,ys,$f,Af;Sf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ys=function(){};$f=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,vn(xt.current);var l=null;switch(n){case"input":o=Fi(e,o),r=Fi(e,r),l=[];break;case"select":o=fe({},o,{value:void 0}),r=fe({},r,{value:void 0}),l=[];break;case"textarea":o=Hi(e,o),r=Hi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}Qi(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&oe("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Af=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ar(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function U0(e,t,n){var r=t.pendingProps;switch(ia(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return He(t.type)&&dl(),De(t),null;case 3:return r=t.stateNode,or(),ie(Ue),ie(ze),ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(bs(ut),ut=null))),ys(e,t),De(t),null;case 5:ha(t);var o=vn(no.current);if(n=t.type,e!==null&&t.stateNode!=null)$f(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return De(t),null}if(e=vn(xt.current),Io(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[yt]=t,r[eo]=l,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(o=0;o<Rr.length;o++)oe(Rr[o],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":tu(r,l),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},oe("invalid",r);break;case"textarea":ru(r,l),oe("invalid",r)}Qi(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&To(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&To(r.textContent,s,e),o=["children",""+s]):Wr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&oe("scroll",r)}switch(n){case"input":xo(r),nu(r,l,!0);break;case"textarea":xo(r),ou(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=cl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[yt]=t,e[eo]=r,Sf(e,t,!1,!1),t.stateNode=e;e:{switch(i=Vi(n,r),n){case"dialog":oe("cancel",e),oe("close",e),o=r;break;case"iframe":case"object":case"embed":oe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rr.length;o++)oe(Rr[o],e);o=r;break;case"source":oe("error",e),o=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),o=r;break;case"details":oe("toggle",e),o=r;break;case"input":tu(e,r),o=Fi(e,r),oe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=fe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":ru(e,r),o=Hi(e,r),oe("invalid",e);break;default:o=r}Qi(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?ed(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Jc(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Qr(e,a):typeof a=="number"&&Qr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Wr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&oe("scroll",e):a!=null&&Qs(e,l,a,i))}switch(n){case"input":xo(e),nu(e,r,!1);break;case"textarea":xo(e),ou(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Kn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)Af(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=vn(no.current),vn(xt.current),Io(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(l=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return De(t),null;case 13:if(ie(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ve!==null&&t.mode&1&&!(t.flags&128))jd(),nr(),t.flags|=98560,l=!1;else if(l=Io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(T(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(T(317));l[yt]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),l=!1}else ut!==null&&(bs(ut),ut=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?$e===0&&($e=3):Ca())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return or(),ys(e,t),e===null&&Jr(t.stateNode.containerInfo),De(t),null;case 10:return ca(t.type._context),De(t),null;case 17:return He(t.type)&&dl(),De(t),null;case 19:if(ie(ce),l=t.memoizedState,l===null)return De(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Ar(l,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=yl(e),i!==null){for(t.flags|=128,Ar(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(ce,ce.current&1|2),t.child}e=e.sibling}l.tail!==null&&ge()>ir&&(t.flags|=128,r=!0,Ar(l,!1),t.lanes=4194304)}else{if(!r)if(e=yl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ar(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ae)return De(t),null}else 2*ge()-l.renderingStartTime>ir&&n!==1073741824&&(t.flags|=128,r=!0,Ar(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ge(),t.sibling=null,n=ce.current,re(ce,r?n&1|2:n&1),t):(De(t),null);case 22:case 23:return ba(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function H0(e,t){switch(ia(t),t.tag){case 1:return He(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),ie(Ue),ie(ze),ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ha(t),null;case 13:if(ie(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ce),null;case 4:return or(),null;case 10:return ca(t.type._context),null;case 22:case 23:return ba(),null;case 24:return null;default:return null}}var Po=!1,Le=!1,W0=typeof WeakSet=="function"?WeakSet:Set,D=null;function Qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function ws(e,t,n){try{n()}catch(r){he(e,t,r)}}var Gu=!1;function Q0(e,t){if(ns=sl,e=Td(),oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,h=0,f=e,m=null;t:for(;;){for(var $;f!==n||o!==0&&f.nodeType!==3||(s=i+o),f!==l||r!==0&&f.nodeType!==3||(a=i+r),f.nodeType===3&&(i+=f.nodeValue.length),($=f.firstChild)!==null;)m=f,f=$;for(;;){if(f===e)break t;if(m===n&&++c===o&&(s=i),m===l&&++h===r&&(a=i),($=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=$}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(rs={focusedElem:e,selectionRange:n},sl=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var A=w.memoizedProps,I=w.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?A:it(t.type,A),I);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(g){he(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return w=Gu,Gu=!1,w}function Br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ws(t,n,l)}o=o.next}while(o!==r)}}function Bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ef(e){var t=e.alternate;t!==null&&(e.alternate=null,Ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[eo],delete t[is],delete t[C0],delete t[T0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bf(e){return e.tag===5||e.tag===3||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}function Ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}var Ce=null,st=!1;function Mt(e,t,n){for(n=n.child;n!==null;)Cf(e,t,n),n=n.sibling}function Cf(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:Le||Qn(n,t);case 6:var r=Ce,o=st;Ce=null,Mt(e,t,n),Ce=r,st=o,Ce!==null&&(st?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(st?(e=Ce,n=n.stateNode,e.nodeType===8?vi(e.parentNode,n):e.nodeType===1&&vi(e,n),Yr(e)):vi(Ce,n.stateNode));break;case 4:r=Ce,o=st,Ce=n.stateNode.containerInfo,st=!0,Mt(e,t,n),Ce=r,st=o;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&ws(n,t,i),o=o.next}while(o!==r)}Mt(e,t,n);break;case 1:if(!Le&&(Qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){he(n,t,s)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Mt(e,t,n),Le=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function Yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new W0),t.forEach(function(r){var o=em.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ce=s.stateNode,st=!1;break e;case 3:Ce=s.stateNode.containerInfo,st=!0;break e;case 4:Ce=s.stateNode.containerInfo,st=!0;break e}s=s.return}if(Ce===null)throw Error(T(160));Cf(l,i,o),Ce=null,st=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){he(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tf(t,e),t=t.sibling}function Tf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),gt(e),r&4){try{Br(3,e,e.return),Bl(3,e)}catch(A){he(e,e.return,A)}try{Br(5,e,e.return)}catch(A){he(e,e.return,A)}}break;case 1:lt(t,e),gt(e),r&512&&n!==null&&Qn(n,n.return);break;case 5:if(lt(t,e),gt(e),r&512&&n!==null&&Qn(n,n.return),e.flags&32){var o=e.stateNode;try{Qr(o,"")}catch(A){he(e,e.return,A)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Yc(o,l),Vi(s,i);var c=Vi(s,l);for(i=0;i<a.length;i+=2){var h=a[i],f=a[i+1];h==="style"?ed(o,f):h==="dangerouslySetInnerHTML"?Jc(o,f):h==="children"?Qr(o,f):Qs(o,h,f,c)}switch(s){case"input":ji(o,l);break;case"textarea":Xc(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var $=l.value;$!=null?Kn(o,!!l.multiple,$,!1):m!==!!l.multiple&&(l.defaultValue!=null?Kn(o,!!l.multiple,l.defaultValue,!0):Kn(o,!!l.multiple,l.multiple?[]:"",!1))}o[eo]=l}catch(A){he(e,e.return,A)}}break;case 6:if(lt(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(A){he(e,e.return,A)}}break;case 3:if(lt(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(A){he(e,e.return,A)}break;case 4:lt(t,e),gt(e);break;case 13:lt(t,e),gt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Aa=ge())),r&4&&Yu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(c=Le)||h,lt(t,e),Le=c):lt(t,e),gt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(D=e,h=e.child;h!==null;){for(f=D=h;D!==null;){switch(m=D,$=m.child,m.tag){case 0:case 11:case 14:case 15:Br(4,m,m.return);break;case 1:Qn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(A){he(r,n,A)}}break;case 5:Qn(m,m.return);break;case 22:if(m.memoizedState!==null){Zu(f);continue}}$!==null?($.return=m,D=$):Zu(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{o=f.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=f.stateNode,a=f.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=qc("display",i))}catch(A){he(e,e.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){he(e,e.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:lt(t,e),gt(e),r&4&&Yu(e);break;case 21:break;default:lt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bf(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Qr(o,""),r.flags&=-33);var l=Ku(e);Ss(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Ku(e);ks(e,s,i);break;default:throw Error(T(161))}}catch(a){he(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function V0(e,t,n){D=e,If(e)}function If(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Po;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Le;s=Po;var c=Le;if(Po=i,(Le=a)&&!c)for(D=o;D!==null;)i=D,a=i.child,i.tag===22&&i.memoizedState!==null?Ju(o):a!==null?(a.return=i,D=a):Ju(o);for(;l!==null;)D=l,If(l),l=l.sibling;D=o,Po=s,Le=c}Xu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,D=l):Xu(e)}}function Xu(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Bl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Lu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lu(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Yr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Le||t.flags&512&&xs(t)}catch(m){he(t,t.return,m)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Zu(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Ju(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bl(4,t)}catch(a){he(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){he(t,o,a)}}var l=t.return;try{xs(t)}catch(a){he(t,l,a)}break;case 5:var i=t.return;try{xs(t)}catch(a){he(t,i,a)}}}catch(a){he(t,t.return,a)}if(t===e){D=null;break}var s=t.sibling;if(s!==null){s.return=t.return,D=s;break}D=t.return}}var G0=Math.ceil,kl=_t.ReactCurrentDispatcher,Sa=_t.ReactCurrentOwner,tt=_t.ReactCurrentBatchConfig,X=0,Ee=null,ye=null,Te=0,Qe=0,Vn=an(0),$e=0,io=null,En=0,Fl=0,$a=0,Fr=null,Fe=null,Aa=0,ir=1/0,Et=null,Sl=!1,$s=null,Jt=null,Do=!1,Qt=null,$l=0,jr=0,As=null,Ko=-1,Yo=0;function Oe(){return X&6?ge():Ko!==-1?Ko:Ko=ge()}function qt(e){return e.mode&1?X&2&&Te!==0?Te&-Te:R0.transition!==null?(Yo===0&&(Yo=fd()),Yo):(e=te,e!==0||(e=window.event,e=e===void 0?16:wd(e.type)),e):1}function dt(e,t,n,r){if(50<jr)throw jr=0,As=null,Error(T(185));fo(e,n,r),(!(X&2)||e!==Ee)&&(e===Ee&&(!(X&2)&&(Fl|=n),$e===4&&Ht(e,Te)),We(e,r),n===1&&X===0&&!(t.mode&1)&&(ir=ge()+500,_l&&un()))}function We(e,t){var n=e.callbackNode;Rh(e,t);var r=il(e,e===Ee?Te:0);if(r===0)n!==null&&su(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&su(n),t===1)e.tag===0?I0(qu.bind(null,e)):Md(qu.bind(null,e)),E0(function(){!(X&6)&&un()}),n=null;else{switch(pd(r)){case 1:n=Xs;break;case 4:n=cd;break;case 16:n=ll;break;case 536870912:n=dd;break;default:n=ll}n=Of(n,Rf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rf(e,t){if(Ko=-1,Yo=0,X&6)throw Error(T(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=il(e,e===Ee?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Al(e,r);else{t=r;var o=X;X|=2;var l=Pf();(Ee!==e||Te!==t)&&(Et=null,ir=ge()+500,wn(e,t));do try{X0();break}catch(s){Nf(e,s)}while(1);ua(),kl.current=l,X=o,ye!==null?t=0:(Ee=null,Te=0,t=$e)}if(t!==0){if(t===2&&(o=Zi(e),o!==0&&(r=o,t=Es(e,o))),t===1)throw n=io,wn(e,0),Ht(e,r),We(e,ge()),n;if(t===6)Ht(e,r);else{if(o=e.current.alternate,!(r&30)&&!K0(o)&&(t=Al(e,r),t===2&&(l=Zi(e),l!==0&&(r=l,t=Es(e,l))),t===1))throw n=io,wn(e,0),Ht(e,r),We(e,ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:pn(e,Fe,Et);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=Aa+500-ge(),10<t)){if(il(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ls(pn.bind(null,e,Fe,Et),t);break}pn(e,Fe,Et);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-ct(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*G0(r/1960))-r,10<r){e.timeoutHandle=ls(pn.bind(null,e,Fe,Et),r);break}pn(e,Fe,Et);break;case 5:pn(e,Fe,Et);break;default:throw Error(T(329))}}}return We(e,ge()),e.callbackNode===n?Rf.bind(null,e):null}function Es(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Al(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&bs(t)),e}function bs(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function K0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!pt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~$a,t&=~Fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function qu(e){if(X&6)throw Error(T(327));qn();var t=il(e,0);if(!(t&1))return We(e,ge()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var r=Zi(e);r!==0&&(t=r,n=Es(e,r))}if(n===1)throw n=io,wn(e,0),Ht(e,t),We(e,ge()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Fe,Et),We(e,ge()),null}function Ea(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(ir=ge()+500,_l&&un())}}function bn(e){Qt!==null&&Qt.tag===0&&!(X&6)&&qn();var t=X;X|=1;var n=tt.transition,r=te;try{if(tt.transition=null,te=1,e)return e()}finally{te=r,tt.transition=n,X=t,!(X&6)&&un()}}function ba(){Qe=Vn.current,ie(Vn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,A0(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(ia(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:or(),ie(Ue),ie(ze),ma();break;case 5:ha(r);break;case 4:or();break;case 13:ie(ce);break;case 19:ie(ce);break;case 10:ca(r.type._context);break;case 22:case 23:ba()}n=n.return}if(Ee=e,ye=e=en(e.current,null),Te=Qe=t,$e=0,io=null,$a=Fl=En=0,Fe=Fr=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}gn=null}return e}function Nf(e,t){do{var n=ye;try{if(ua(),Qo.current=xl,wl){for(var r=de.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wl=!1}if(An=0,Ae=ke=de=null,Mr=!1,ro=0,Sa.current=null,n===null||n.return===null){$e=1,io=t,ye=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=Te,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var $=Fu(i);if($!==null){$.flags&=-257,ju($,i,s,l,t),$.mode&1&&Bu(l,c,t),t=$,a=c;var w=t.updateQueue;if(w===null){var A=new Set;A.add(a),t.updateQueue=A}else w.add(a);break e}else{if(!(t&1)){Bu(l,c,t),Ca();break e}a=Error(T(426))}}else if(ae&&s.mode&1){var I=Fu(i);if(I!==null){!(I.flags&65536)&&(I.flags|=256),ju(I,i,s,l,t),sa(lr(a,s));break e}}l=a=lr(a,s),$e!==4&&($e=2),Fr===null?Fr=[l]:Fr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=hf(l,a,t);Du(l,d);break e;case 1:s=a;var u=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Jt===null||!Jt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var g=mf(l,s,t);Du(l,g);break e}}l=l.return}while(l!==null)}Lf(n)}catch(v){t=v,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function Pf(){var e=kl.current;return kl.current=xl,e===null?xl:e}function Ca(){($e===0||$e===3||$e===2)&&($e=4),Ee===null||!(En&268435455)&&!(Fl&268435455)||Ht(Ee,Te)}function Al(e,t){var n=X;X|=2;var r=Pf();(Ee!==e||Te!==t)&&(Et=null,wn(e,t));do try{Y0();break}catch(o){Nf(e,o)}while(1);if(ua(),X=n,kl.current=r,ye!==null)throw Error(T(261));return Ee=null,Te=0,$e}function Y0(){for(;ye!==null;)Df(ye)}function X0(){for(;ye!==null&&!kh();)Df(ye)}function Df(e){var t=_f(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Lf(e):ye=t,Sa.current=null}function Lf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=H0(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,ye=null;return}}else if(n=U0(n,t,Qe),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);$e===0&&($e=5)}function pn(e,t,n){var r=te,o=tt.transition;try{tt.transition=null,te=1,Z0(e,t,n,r)}finally{tt.transition=o,te=r}return null}function Z0(e,t,n,r){do qn();while(Qt!==null);if(X&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Nh(e,l),e===Ee&&(ye=Ee=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Do||(Do=!0,Of(ll,function(){return qn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=tt.transition,tt.transition=null;var i=te;te=1;var s=X;X|=4,Sa.current=null,Q0(e,n),Tf(n,e),v0(rs),sl=!!ns,rs=ns=null,e.current=n,V0(n),Sh(),X=s,te=i,tt.transition=l}else e.current=n;if(Do&&(Do=!1,Qt=e,$l=o),l=e.pendingLanes,l===0&&(Jt=null),Eh(n.stateNode),We(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Sl)throw Sl=!1,e=$s,$s=null,e;return $l&1&&e.tag!==0&&qn(),l=e.pendingLanes,l&1?e===As?jr++:(jr=0,As=e):jr=0,un(),null}function qn(){if(Qt!==null){var e=pd($l),t=tt.transition,n=te;try{if(tt.transition=null,te=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,$l=0,X&6)throw Error(T(331));var o=X;for(X|=4,D=e.current;D!==null;){var l=D,i=l.child;if(D.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(D=c;D!==null;){var h=D;switch(h.tag){case 0:case 11:case 15:Br(8,h,l)}var f=h.child;if(f!==null)f.return=h,D=f;else for(;D!==null;){h=D;var m=h.sibling,$=h.return;if(Ef(h),h===c){D=null;break}if(m!==null){m.return=$,D=m;break}D=$}}}var w=l.alternate;if(w!==null){var A=w.child;if(A!==null){w.child=null;do{var I=A.sibling;A.sibling=null,A=I}while(A!==null)}}D=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,D=i;else e:for(;D!==null;){if(l=D,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Br(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,D=d;break e}D=l.return}}var u=e.current;for(D=u;D!==null;){i=D;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,D=p;else e:for(i=u;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Bl(9,s)}}catch(v){he(s,s.return,v)}if(s===i){D=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,D=g;break e}D=s.return}}if(X=o,un(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Nl,e)}catch{}r=!0}return r}finally{te=n,tt.transition=t}}return!1}function ec(e,t,n){t=lr(n,t),t=hf(e,t,1),e=Zt(e,t,1),t=Oe(),e!==null&&(fo(e,1,t),We(e,t))}function he(e,t,n){if(e.tag===3)ec(e,e,n);else for(;t!==null;){if(t.tag===3){ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=lr(n,e),e=mf(t,e,1),t=Zt(t,e,1),e=Oe(),t!==null&&(fo(t,1,e),We(t,e));break}}t=t.return}}function J0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(Te&n)===n&&($e===4||$e===3&&(Te&130023424)===Te&&500>ge()-Aa?wn(e,0):$a|=n),We(e,t)}function zf(e,t){t===0&&(e.mode&1?(t=$o,$o<<=1,!($o&130023424)&&($o=4194304)):t=1);var n=Oe();e=Lt(e,t),e!==null&&(fo(e,t,n),We(e,n))}function q0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zf(e,n)}function em(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),zf(e,n)}var _f;_f=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,j0(e,t,n);je=!!(e.flags&131072)}else je=!1,ae&&t.flags&1048576&&Bd(t,hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Go(e,t),e=t.pendingProps;var o=tr(t,ze.current);Jn(t,n),o=va(null,t,r,e,o,n);var l=ya();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(l=!0,fl(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,fa(t),o.updater=Ml,t.stateNode=o,o._reactInternals=t,fs(t,r,e,n),t=ms(null,t,r,!0,l,n)):(t.tag=0,ae&&l&&la(t),_e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Go(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=nm(r),e=it(r,e),o){case 0:t=hs(null,t,r,e,n);break e;case 1:t=Wu(null,t,r,e,n);break e;case 11:t=Uu(null,t,r,e,n);break e;case 14:t=Hu(null,t,r,it(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),hs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Wu(e,t,r,o,n);case 3:e:{if(wf(t),e===null)throw Error(T(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Qd(e,t),vl(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=lr(Error(T(423)),t),t=Qu(e,t,r,n,o);break e}else if(r!==o){o=lr(Error(T(424)),t),t=Qu(e,t,r,n,o);break e}else for(Ve=Xt(t.stateNode.containerInfo.firstChild),Ge=t,ae=!0,ut=null,n=Hd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===o){t=zt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Vd(t),e===null&&us(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,os(r,o)?i=null:l!==null&&os(r,l)&&(t.flags|=32),yf(e,t),_e(e,t,i,n),t.child;case 6:return e===null&&us(t),null;case 13:return xf(e,t,n);case 4:return pa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Uu(e,t,r,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,re(ml,r._currentValue),r._currentValue=i,l!==null)if(pt(l.value,i)){if(l.children===o.children&&!Ue.current){t=zt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Nt(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),cs(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(T(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),cs(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Jn(t,n),o=nt(o),r=r(o),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,o=it(r,t.pendingProps),o=it(r.type,o),Hu(e,t,r,o,n);case 15:return gf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Go(e,t),t.tag=1,He(r)?(e=!0,fl(t)):e=!1,Jn(t,n),pf(t,r,o),fs(t,r,o,n),ms(null,t,r,!0,e,n);case 19:return kf(e,t,n);case 22:return vf(e,t,n)}throw Error(T(156,t.tag))};function Of(e,t){return ud(e,t)}function tm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new tm(e,t,n,r)}function Ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nm(e){if(typeof e=="function")return Ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gs)return 11;if(e===Ks)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Ta(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case _n:return xn(n.children,o,l,t);case Vs:i=8,o|=8;break;case _i:return e=et(12,n,t,o|2),e.elementType=_i,e.lanes=l,e;case Oi:return e=et(13,n,t,o),e.elementType=Oi,e.lanes=l,e;case Mi:return e=et(19,n,t,o),e.elementType=Mi,e.lanes=l,e;case Vc:return jl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wc:i=10;break e;case Qc:i=9;break e;case Gs:i=11;break e;case Ks:i=14;break e;case Ft:i=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=et(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function xn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function jl(e,t,n,r){return e=et(22,e,r,t),e.elementType=Vc,e.lanes=n,e.stateNode={isHidden:!1},e}function Ei(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function bi(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ia(e,t,n,r,o,l,i,s,a){return e=new rm(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=et(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fa(l),e}function om(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mf(e){if(!e)return rn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(He(n))return Od(e,n,t)}return t}function Bf(e,t,n,r,o,l,i,s,a){return e=Ia(n,r,!0,e,o,l,i,s,a),e.context=Mf(null),n=e.current,r=Oe(),o=qt(n),l=Nt(r,o),l.callback=t??null,Zt(n,l,o),e.current.lanes=o,fo(e,o,r),We(e,r),e}function Ul(e,t,n,r){var o=t.current,l=Oe(),i=qt(o);return n=Mf(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(o,t,i),e!==null&&(dt(e,o,i,l),Wo(e,o,i)),i}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ra(e,t){tc(e,t),(e=e.alternate)&&tc(e,t)}function lm(){return null}var Ff=typeof reportError=="function"?reportError:function(e){console.error(e)};function Na(e){this._internalRoot=e}Hl.prototype.render=Na.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Ul(e,t,null,null)};Hl.prototype.unmount=Na.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Ul(null,e,null,null)}),t[Dt]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&yd(e)}};function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nc(){}function im(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=El(i);l.call(c)}}var i=Bf(t,r,e,0,null,!1,!1,"",nc);return e._reactRootContainer=i,e[Dt]=i.current,Jr(e.nodeType===8?e.parentNode:e),bn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=El(a);s.call(c)}}var a=Ia(e,0,!1,null,null,!1,!1,"",nc);return e._reactRootContainer=a,e[Dt]=a.current,Jr(e.nodeType===8?e.parentNode:e),bn(function(){Ul(t,a,n,r)}),a}function Ql(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=El(i);s.call(a)}}Ul(t,i,e,o)}else i=im(n,t,e,o,r);return El(i)}hd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ir(t.pendingLanes);n!==0&&(Zs(t,n|1),We(t,ge()),!(X&6)&&(ir=ge()+500,un()))}break;case 13:bn(function(){var r=Lt(e,1);if(r!==null){var o=Oe();dt(r,e,1,o)}}),Ra(e,1)}};Js=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Oe();dt(t,e,134217728,n)}Ra(e,134217728)}};md=function(e){if(e.tag===13){var t=qt(e),n=Lt(e,t);if(n!==null){var r=Oe();dt(n,e,t,r)}Ra(e,t)}};gd=function(){return te};vd=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Ki=function(e,t,n){switch(t){case"input":if(ji(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=zl(r);if(!o)throw Error(T(90));Kc(r),ji(r,o)}}}break;case"textarea":Xc(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};rd=Ea;od=bn;var sm={usingClientEntryPoint:!1,Events:[ho,Fn,zl,td,nd,Ea]},Er={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},am={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sd(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{Nl=Lo.inject(am),wt=Lo}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sm;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pa(t))throw Error(T(200));return om(e,t,null,n)};Ye.createRoot=function(e,t){if(!Pa(e))throw Error(T(299));var n=!1,r="",o=Ff;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ia(e,1,!1,null,null,n,!1,r,o),e[Dt]=t.current,Jr(e.nodeType===8?e.parentNode:e),new Na(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=sd(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return bn(e)};Ye.hydrate=function(e,t,n){if(!Wl(t))throw Error(T(200));return Ql(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Pa(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Ff;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,o,!1,l,i),e[Dt]=t.current,Jr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Hl(t)};Ye.render=function(e,t,n){if(!Wl(t))throw Error(T(200));return Ql(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(T(40));return e._reactRootContainer?(bn(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Ea;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Ql(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function jf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jf)}catch(e){console.error(e)}}jf(),Fc.exports=Ye;var Uf=Fc.exports,rc=Uf;Li.createRoot=rc.createRoot,Li.hydrateRoot=rc.hydrateRoot;var le="-ms-",Ur="-moz-",J="-webkit-",Hf="comm",Vl="rule",Da="decl",um="@import",cm="@namespace",Wf="@keyframes",dm="@layer",Qf=Math.abs,La=String.fromCharCode,Cs=Object.assign;function fm(e,t){return Se(e,0)^45?(((t<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3):0}function Vf(e){return e.trim()}function bt(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function Zo(e,t,n){return e.indexOf(t,n)}function Se(e,t){return e.charCodeAt(t)|0}function Cn(e,t,n){return e.slice(t,n)}function at(e){return e.length}function Gf(e){return e.length}function Nr(e,t){return t.push(e),e}function pm(e,t){return e.map(t).join("")}function oc(e,t){return e.filter(function(n){return!bt(n,t)})}var Gl=1,sr=1,Kf=0,ot=0,ve=0,mr="";function Kl(e,t,n,r,o,l,i,s){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:Gl,column:sr,length:i,return:"",siblings:s}}function Bt(e,t){return Cs(Kl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Dn(e){for(;e.root;)e=Bt(e.root,{children:[e]});Nr(e,e.siblings)}function hm(){return ve}function mm(){return ve=ot>0?Se(mr,--ot):0,sr--,ve===10&&(sr=1,Gl--),ve}function ft(){return ve=ot<Kf?Se(mr,ot++):0,sr++,ve===10&&(sr=1,Gl++),ve}function Vt(){return Se(mr,ot)}function Jo(){return ot}function Yl(e,t){return Cn(mr,e,t)}function so(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gm(e){return Gl=sr=1,Kf=at(mr=e),ot=0,[]}function vm(e){return mr="",e}function Ci(e){return Vf(Yl(ot-1,Ts(e===91?e+2:e===40?e+1:e)))}function ym(e){for(;(ve=Vt())&&ve<33;)ft();return so(e)>2||so(ve)>3?"":" "}function wm(e,t){for(;--t&&ft()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return Yl(e,Jo()+(t<6&&Vt()==32&&ft()==32))}function Ts(e){for(;ft();)switch(ve){case e:return ot;case 34:case 39:e!==34&&e!==39&&Ts(ve);break;case 40:e===41&&Ts(e);break;case 92:ft();break}return ot}function xm(e,t){for(;ft()&&e+ve!==47+10;)if(e+ve===42+42&&Vt()===47)break;return"/*"+Yl(t,ot-1)+"*"+La(e===47?e:ft())}function km(e){for(;!so(Vt());)ft();return Yl(e,ot)}function Sm(e){return vm(qo("",null,null,null,[""],e=gm(e),0,[0],e))}function qo(e,t,n,r,o,l,i,s,a){for(var c=0,h=0,f=i,m=0,$=0,w=0,A=1,I=1,d=1,u=0,p="",g=o,v=l,x=r,k=p;I;)switch(w=u,u=ft()){case 40:if(w!=108&&Se(k,f-1)==58){Zo(k+=Q(Ci(u),"&","&\f"),"&\f",Qf(c?s[c-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:k+=Ci(u);break;case 9:case 10:case 13:case 32:k+=ym(w);break;case 92:k+=wm(Jo()-1,7);continue;case 47:switch(Vt()){case 42:case 47:Nr($m(xm(ft(),Jo()),t,n,a),a),(so(w||1)==5||so(Vt()||1)==5)&&at(k)&&Cn(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*A:s[c++]=at(k)*d;case 125*A:case 59:case 0:switch(u){case 0:case 125:I=0;case 59+h:d==-1&&(k=Q(k,/\f/g,"")),$>0&&(at(k)-f||A===0&&w===47)&&Nr($>32?ic(k+";",r,n,f-1,a):ic(Q(k," ","")+";",r,n,f-2,a),a);break;case 59:k+=";";default:if(Nr(x=lc(k,t,n,c,h,o,s,p,g=[],v=[],f,l),l),u===123)if(h===0)qo(k,t,x,x,g,l,f,s,v);else{switch(m){case 99:if(Se(k,3)===110)break;case 108:if(Se(k,2)===97)break;default:h=0;case 100:case 109:case 115:}h?qo(e,x,x,r&&Nr(lc(e,x,x,0,0,o,s,p,o,g=[],f,v),v),o,v,f,s,r?g:v):qo(k,x,x,x,[""],v,0,s,v)}}c=h=$=0,A=d=1,p=k="",f=i;break;case 58:f=1+at(k),$=w;default:if(A<1){if(u==123)--A;else if(u==125&&A++==0&&mm()==125)continue}switch(k+=La(u),u*A){case 38:d=h>0?1:(k+="\f",-1);break;case 44:s[c++]=(at(k)-1)*d,d=1;break;case 64:Vt()===45&&(k+=Ci(ft())),m=Vt(),h=f=at(p=k+=km(Jo())),u++;break;case 45:w===45&&at(k)==2&&(A=0)}}return l}function lc(e,t,n,r,o,l,i,s,a,c,h,f){for(var m=o-1,$=o===0?l:[""],w=Gf($),A=0,I=0,d=0;A<r;++A)for(var u=0,p=Cn(e,m+1,m=Qf(I=i[A])),g=e;u<w;++u)(g=Vf(I>0?$[u]+" "+p:Q(p,/&\f/g,$[u])))&&(a[d++]=g);return Kl(e,t,n,o===0?Vl:s,a,c,h,f)}function $m(e,t,n,r){return Kl(e,t,n,Hf,La(hm()),Cn(e,2,-2),0,r)}function ic(e,t,n,r,o){return Kl(e,t,n,Da,Cn(e,0,r),Cn(e,r+1,-1),r,o)}function Yf(e,t,n){switch(fm(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return J+e+e;case 4855:return J+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ur+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+Ur+e+le+e+e;case 5936:switch(Se(e,t+11)){case 114:return J+e+le+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+le+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+le+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+le+e+e;case 6165:return J+e+le+"flex-"+e+e;case 5187:return J+e+Q(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return J+e+le+"flex-item-"+Q(e,/flex-|-self/g,"")+(bt(e,/flex-|baseline/)?"":le+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return J+e+le+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+le+Q(e,"shrink","negative")+e;case 5292:return J+e+le+Q(e,"basis","preferred-size")+e;case 6060:return J+"box-"+Q(e,"-grow","")+J+e+le+Q(e,"grow","positive")+e;case 4554:return J+Q(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+le+"flex-pack:$3"),/space-between/,"justify")+J+e+e;case 4200:if(!bt(e,/flex-|baseline/))return le+"grid-column-align"+Cn(e,t)+e;break;case 2592:case 3360:return le+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,bt(r.props,/grid-\w+-end/)})?~Zo(e+(n=n[t].value),"span",0)?e:le+Q(e,"-start","")+e+le+"grid-row-span:"+(~Zo(n,"span",0)?bt(n,/\d+/):+bt(n,/\d+/)-+bt(e,/\d+/))+";":le+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return bt(r.props,/grid-\w+-start/)})?e:le+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(at(e)-1-t>6)switch(Se(e,t+1)){case 109:if(Se(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+Ur+(Se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zo(e,"stretch",0)?Yf(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,i,s,a,c){return le+o+":"+l+c+(i?le+o+"-span:"+(s?a:+a-+l)+c:"")+e});case 4949:if(Se(e,t+6)===121)return Q(e,":",":"+J)+e;break;case 6444:switch(Se(e,Se(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(Se(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+le+"$2box$3")+e;case 100:return Q(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function bl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Am(e,t,n,r){switch(e.type){case dm:if(e.children.length)break;case um:case cm:case Da:return e.return=e.return||e.value;case Hf:return"";case Wf:return e.return=e.value+"{"+bl(e.children,r)+"}";case Vl:if(!at(e.value=e.props.join(",")))return""}return at(n=bl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Em(e){var t=Gf(e);return function(n,r,o,l){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,l)||"";return i}}function bm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Cm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Da:e.return=Yf(e.value,e.length,n);return;case Wf:return bl([Bt(e,{value:Q(e.value,"@","@"+J)})],r);case Vl:if(e.length)return pm(n=e.props,function(o){switch(bt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Dn(Bt(e,{props:[Q(o,/:(read-\w+)/,":"+Ur+"$1")]})),Dn(Bt(e,{props:[o]})),Cs(e,{props:oc(n,r)});break;case"::placeholder":Dn(Bt(e,{props:[Q(o,/:(plac\w+)/,":"+J+"input-$1")]})),Dn(Bt(e,{props:[Q(o,/:(plac\w+)/,":"+Ur+"$1")]})),Dn(Bt(e,{props:[Q(o,/:(plac\w+)/,le+"input-$1")]})),Dn(Bt(e,{props:[o]})),Cs(e,{props:oc(n,r)});break}return""})}}var Ti,Ii;const ar=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Xf="active",Zf="data-styled-version",Xl="6.4.1",za=`/*!sc*/
`,Hr=typeof window<"u"&&typeof document<"u";function sc(e){if(typeof process<"u"&&process.env!==void 0){const t=process.env[e];if(t!==void 0&&t!=="")return t!=="false"}}const Tm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Ii=(Ti=sc("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Ti!==void 0?Ti:sc("SC_DISABLE_SPEEDY"))!==null&&Ii!==void 0?Ii:typeof process>"u"||process.env===void 0),Im="sc-keyframes-",Rm={};function ur(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let el=new Map,Cl=new Map,tl=1;const zo=e=>{if(el.has(e))return el.get(e);for(;Cl.has(tl);)tl++;const t=tl++;return el.set(e,t),Cl.set(t,e),t},Nm=e=>Cl.get(e),Pm=(e,t)=>{tl=t+1,el.set(e,t),Cl.set(t,e)},_a=Object.freeze([]),cr=Object.freeze({});function Jf(e,t,n=cr){return e.theme!==n.theme&&e.theme||t||n.theme}const Dm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lm=/(^-|-$)/g;function qf(e){return e.replace(Dm,"-").replace(Lm,"")}const zm=/(a)(d)/gi,ac=e=>String.fromCharCode(e+(e>25?39:97));function ep(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ac(t%52)+n;return(ac(t%52)+n).replace(zm,"$1-$2")}const Is=5381,kn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},tp=e=>kn(Is,e);function np(e){return ep(tp(e)>>>0)}function _m(e){return e.displayName||e.name||"Component"}function Rs(e){return typeof e=="string"&&!0}function Om(e){return Rs(e)?`styled.${e}`:`Styled(${_m(e)})`}const rp=Symbol.for("react.memo"),Mm=Symbol.for("react.forward_ref"),Bm={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Fm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},op={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jm={[Mm]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[rp]:op};function uc(e){return("type"in(t=e)&&t.type.$$typeof)===rp?op:"$$typeof"in e?jm[e.$$typeof]:Bm;var t}const Um=Object.defineProperty,Hm=Object.getOwnPropertyNames,Wm=Object.getOwnPropertySymbols,Qm=Object.getOwnPropertyDescriptor,Vm=Object.getPrototypeOf,Gm=Object.prototype;function lp(e,t,n){if(typeof t!="string"){const r=Vm(t);r&&r!==Gm&&lp(e,r,n);const o=Hm(t).concat(Wm(t)),l=uc(e),i=uc(t);for(let s=0;s<o.length;++s){const a=o[s];if(!(a in Fm||n&&n[a]||i&&a in i||l&&a in l)){const c=Qm(t,a);try{Um(e,a,c)}catch{}}}}return e}function gr(e){return typeof e=="function"}function Oa(e){return typeof e=="object"&&"styledComponentId"in e}function Pr(e,t){return e&&t?e+" "+t:e||t||""}function Ns(e,t){return e.join(t||"")}function ao(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ps(e,t,n=!1){if(!n&&!ao(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=Ps(e[r],t[r]);else if(ao(t))for(const r in t)e[r]=Ps(e[r],t[r]);return e}function ip(e,t){Object.defineProperty(e,"toString",{value:t})}const Km=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,l=o.length;let i=l;for(;e>=i;)if(i<<=1,i<0)throw ur(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(let s=l;s<i;s++)this.groupSizes[s]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,l=t.length;o<l;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let l=r;l<o;l++)t+=this.tag.getRule(l)+za;return t}},Ym=`style[${ar}][${Zf}="${Xl}"]`,Xm=new RegExp(`^${ar}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),cc=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Ds=e=>{if(!e)return document;if(cc(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(cc(t))return t}return document},Zm=(e,t,n)=>{const r=n.split(",");let o;for(let l=0,i=r.length;l<i;l++)(o=r[l])&&e.registerName(t,o)},Jm=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(za),o=[];for(let l=0,i=r.length;l<i;l++){const s=r[l].trim();if(!s)continue;const a=s.match(Xm);if(a){const c=0|parseInt(a[1],10),h=a[2];c!==0&&(Pm(h,c),Zm(e,h,a[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}},Ri=e=>{const t=Ds(e.options.target).querySelectorAll(Ym);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(ar)!==Xf&&(Jm(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let br=!1;function qm(){if(br!==!1)return br;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return br=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return br=t.getAttribute("content")||void 0}return br=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const sp=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),l=(a=>{const c=Array.from(a.querySelectorAll(`style[${ar}]`));return c[c.length-1]})(r),i=l!==void 0?l.nextSibling:null;o.setAttribute(ar,Xf),o.setAttribute(Zf,Xl);const s=t||qm();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},eg=class{constructor(e,t){this.element=sp(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let l=0,i=o.length;l<i;l++){const s=o[l];if(s.ownerNode===n)return s}throw ur(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},tg=class{constructor(e,t){this.element=sp(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let dc=Hr;const ng={isServer:!Hr,useCSSOMInjection:!Tm};class go{static registerId(t){return zo(t)}constructor(t=cr,n={},r){this.options=Object.assign(Object.assign({},ng),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Hr&&dc&&(dc=!1,Ri(this)),ip(this,()=>(o=>{const l=o.getTag(),{length:i}=l;let s="";for(let a=0;a<i;a++){const c=Nm(a);if(c===void 0)continue;const h=o.names.get(c);if(h===void 0||!h.size)continue;const f=l.getGroup(a);if(f.length===0)continue;const m=ar+".g"+a+'[id="'+c+'"]';let $="";for(const w of h)w.length>0&&($+=w+",");s+=f+m+'{content:"'+$+'"}'+za}return s})(this))}rehydrate(){!this.server&&Hr&&Ri(this)}reconstructWithOptions(t,n=!0){const r=new go(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Hr&&t.target!==this.options.target&&Ds(this.options.target)!==Ds(t.target)&&Ri(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new eg(r,o):new tg(r,o))(this.options),new Km(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){zo(t),t.startsWith(Im)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(zo(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(zo(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const ap=new WeakSet,rg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function og(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in rg||e.startsWith("--")?String(t).trim():t+"px"}const hn=47;function fc(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const lg=Symbol.for("sc-keyframes");function ig(e){return typeof e=="object"&&e!==null&&lg in e}function up(e){return gr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const cp=e=>e==null||e===!1||e==="",sg=Symbol.for("react.client.reference");function pc(e){return e.$$typeof===sg}function dp(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!cp(r)&&(Array.isArray(r)&&ap.has(r)||gr(r)?t.push(fc(n)+":",r,";"):ao(r)?(t.push(n+" {"),dp(r,t),t.push("}")):t.push(fc(n)+": "+og(n,r)+";"))}}function tn(e,t,n,r,o=[]){if(cp(e))return o;const l=typeof e;if(l==="string")return o.push(e),o;if(l==="function"){if(pc(e))return o;if(up(e)&&t){const i=e(t);return tn(i,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let i=0;i<e.length;i++)tn(e[i],t,n,r,o);return o}return Oa(e)?(o.push(`.${e.styledComponentId}`),o):ig(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):pc(e)?o:ao(e)?(dp(e,o),o):(o.push(e.toString()),o)}const ag=tp(Xl);class ug{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=kn(ag,n),this.baseStyle=r,go.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let l="";for(let i=0;i<this.rules.length;i++){const s=this.rules[i];if(typeof s=="string")l+=s;else if(s)if(up(s)){const a=s(t);typeof a=="string"?l+=a:a!=null&&a!==!1&&(l+=Ns(tn(a,t,n,r)))}else l+=Ns(tn(s,t,n,r))}if(l){this.dynamicNameCache||(this.dynamicNameCache=new Map);const i=r.hash?r.hash+l:l;let s=this.dynamicNameCache.get(i);if(!s){if(s=ep(kn(kn(this.baseHash,r.hash),l)>>>0),this.dynamicNameCache.size>=200){const a=this.dynamicNameCache.keys().next().value;a!==void 0&&this.dynamicNameCache.delete(a)}this.dynamicNameCache.set(i,s)}if(!n.hasNameForId(this.componentId,s)){const a=r(l,"."+s,void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=Pr(o,s)}}return o}}const cg=/&/g;function fp(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Ni(e){const t=e.length;let n="",r=0,o=0,l=0,i=!1,s=!1;for(let a=0;a<t;a++){const c=e.charCodeAt(a);if(l!==0||i||c!==hn||e.charCodeAt(a+1)!==42)if(i)c===42&&e.charCodeAt(a+1)===hn&&(i=!1,a++);else if(c!==34&&c!==39||fp(e,a)){if(l===0)if(c===123)o++;else if(c===125){if(o--,o<0){s=!0;let h=a+1;for(;h<t;){const f=e.charCodeAt(h);if(f===59||f===10)break;h++}h<t&&e.charCodeAt(h)===59&&h++,o=0,a=h-1,r=h;continue}o===0&&(n+=e.substring(r,a+1),r=a+1)}else c===59&&o===0&&(n+=e.substring(r,a+1),r=a+1)}else l===0?l=c:l===c&&(l=0);else i=!0,a++}return s||o!==0||l!==0?(r<t&&o===0&&l===0&&(n+=e.substring(r)),n):e}function pp(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const l=e[o];if(l.type==="rule"){l.value=(n+l.value).replaceAll(",",r);const i=l.props,s=[];for(let a=0;a<i.length;a++)s[a]=n+i[a];l.props=s}Array.isArray(l.children)&&l.type!=="@keyframes"&&pp(l.children,t)}return e}function dg({options:e=cr,plugins:t=_a}=cr){let n,r,o;const l=(m,$,w)=>w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?`.${n}`:m,i=t.slice();i.push(m=>{m.type===Vl&&m.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),m.props[0]=m.props[0].replace(cg,r).replace(o,l))}),e.prefix&&i.push(Cm),i.push(Am);let s=[];const a=Em(i.concat(bm(m=>s.push(m)))),c=(m,$="",w="",A="&")=>{n=A,r=$,o=void 0;const I=function(u){const p=u.indexOf("//")!==-1,g=u.indexOf("}")!==-1;if(!p&&!g)return u;if(!p)return Ni(u);const v=u.length;let x="",k=0,E=0,F=0,O=0,W=0,Y=!1;for(;E<v;){const V=u.charCodeAt(E);if(V!==34&&V!==39||fp(u,E))if(F===0)if(V===hn&&E+1<v&&u.charCodeAt(E+1)===42){for(E+=2;E+1<v&&(u.charCodeAt(E)!==42||u.charCodeAt(E+1)!==hn);)E++;E+=2}else if(V!==40)if(V!==41)if(O>0)E++;else if(V===42&&E+1<v&&u.charCodeAt(E+1)===hn)x+=u.substring(k,E),E+=2,k=E,Y=!0;else if(V===hn&&E+1<v&&u.charCodeAt(E+1)===hn){for(x+=u.substring(k,E);E<v&&u.charCodeAt(E)!==10;)E++;k=E,Y=!0}else V===123?W++:V===125&&W--,E++;else O>0&&O--,E++;else O++,E++;else E++;else F===0?F=V:F===V&&(F=0),E++}return Y?(k<v&&(x+=u.substring(k)),W===0?x:Ni(x)):W===0?u:Ni(u)}(m);let d=Sm(w||$?w+" "+$+" { "+I+" }":I);return e.namespace&&(d=pp(d,e.namespace)),s=[],bl(d,a),s},h=e;let f=Is;for(let m=0;m<t.length;m++)t[m].name||ur(15),f=kn(f,t[m].name);return h!=null&&h.namespace&&(f=kn(f,h.namespace)),h!=null&&h.prefix&&(f=kn(f,"p")),c.hash=f!==Is?f.toString():"",c}const fg=new go,pg=dg(),hp=y.createContext({shouldForwardProp:void 0,styleSheet:fg,stylis:pg,stylisPlugins:void 0});hp.Consumer;function mp(){return y.useContext(hp)}const uo=y.createContext(void 0);uo.Consumer;function hg(e){const t=y.useContext(uo),n=y.useMemo(()=>function(r,o){if(!r)throw ur(14);if(gr(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw ur(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?y.createElement(uo.Provider,{value:n},e.children):null}const hc=Object.prototype.hasOwnProperty,Pi={};function mg(e,t){const n=typeof e!="string"?"sc":qf(e);Pi[n]=(Pi[n]||0)+1;const r=n+"-"+np(Xl+n+Pi[n]);return t?t+"-"+r:r}function gg(e,t,n){const r=Oa(e),o=e,l=!Rs(e),{attrs:i=_a,componentId:s=mg(t.displayName,t.parentComponentId),displayName:a=Om(e)}=t,c=t.displayName&&t.componentId?qf(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&o.attrs?o.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:f}=t;if(r&&o.shouldForwardProp){const A=o.shouldForwardProp;if(t.shouldForwardProp){const I=t.shouldForwardProp;f=(d,u)=>A(d,u)&&I(d,u)}else f=A}const m=new ug(n,c,r?o.componentStyle:void 0);function $(A,I){return function(d,u,p){const{attrs:g,componentStyle:v,defaultProps:x,foldedComponentIds:k,styledComponentId:E,target:F}=d,O=y.useContext(uo),W=mp(),Y=d.shouldForwardProp||W.shouldForwardProp,V=Jf(u,O,x)||cr;let q,ne;{const N=y.useRef(null),L=N.current;if(L!==null&&L[1]===V&&L[2]===W.styleSheet&&L[3]===W.stylis&&L[7]===v&&function(K,j,z){const _=K,M=j;let U=0;for(const H in M)if(hc.call(M,H)&&(U++,_[H]!==M[H]))return!1;return U===z}(L[0],u,L[4]))q=L[5],ne=L[6];else{q=function(j,z,_){const M=Object.assign(Object.assign({},z),{className:void 0,theme:_}),U=j.length>1;for(let H=0;H<j.length;H++){const Ne=j[H],R=gr(Ne)?Ne(U?Object.assign({},M):M):Ne;for(const B in R)B==="className"?M.className=Pr(M.className,R[B]):B==="style"?M.style=Object.assign(Object.assign({},M.style),R[B]):B in z&&z[B]===void 0||(M[B]=R[B])}return"className"in z&&typeof z.className=="string"&&(M.className=Pr(M.className,z.className)),M}(g,u,V),ne=function(j,z,_,M){return j.generateAndInjectStyles(z,_,M)}(v,q,W.styleSheet,W.stylis);let K=0;for(const j in u)hc.call(u,j)&&K++;N.current=[u,V,W.styleSheet,W.stylis,K,q,ne,v]}}const pe=q.as||F,we=function(N,L,K,j){const z={};for(const _ in N)N[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&N.theme===K||(_==="forwardedAs"?z.as=N.forwardedAs:j&&!j(_,L)||(z[_]=N[_]));return z}(q,pe,V,Y);let b=Pr(k,E);return ne&&(b+=" "+ne),q.className&&(b+=" "+q.className),we[Rs(pe)&&pe.includes("-")?"class":"className"]=b,p&&(we.ref=p),S.createElement(pe,we)}(w,A,I)}$.displayName=a;let w=y.forwardRef($);return w.attrs=h,w.componentStyle=m,w.displayName=a,w.shouldForwardProp=f,w.foldedComponentIds=r?Pr(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=c,w.target=r?o.target:e,Object.defineProperty(w,"defaultProps",{get(){return this._foldedDefaultProps},set(A){this._foldedDefaultProps=r?function(I,...d){for(const u of d)Ps(I,u,!0);return I}({},o.defaultProps,A):A}}),ip(w,()=>`.${w.styledComponentId}`),l&&lp(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}var vg=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function mc(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const gc=e=>(ap.add(e),e);function P(e,...t){if(gr(e)||ao(e))return gc(tn(mc(_a,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?tn(n):gc(tn(mc(n,t)))}function Ls(e,t,n=cr){if(!t)throw ur(1,t);const r=(o,...l)=>e(t,n,P(o,...l));return r.attrs=o=>Ls(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>Ls(e,t,Object.assign(Object.assign({},n),o)),r}const gp=e=>Ls(gg,e),C=gp;vg.forEach(e=>{C[e]=gp(e)});class yg{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const l=r[o];if(gr(l)&&!Oa(l))return!1}return!0}(t),go.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const l=this.componentId;if(this.isStatic){if(r.hasNameForId(l,l+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const s=this.computeRules(t,n,r,o);r.insertRules(l,s.name,s.rules)}return}const i=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&i){const s=i.rules,a=this.instanceRules.get(t).rules;if(s.length===a.length){let c=!0;for(let h=0;h<s.length;h++)if(s[h]!==a[h]){c=!1;break}if(c)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const l=Ns(tn(this.rules,n,r,o)),i={name:this.componentId+t,rules:o(l,"")};return this.instanceRules.set(t,i),i}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function wg(e,...t){const n=P(e,...t),r=`sc-global-${np(JSON.stringify(n))}`,o=new yg(n,r),l=s=>{const a=mp(),c=y.useContext(uo);let h;{const f=y.useRef(null);f.current===null&&(f.current=a.styleSheet.allocateGSInstance(r)),h=f.current}a.styleSheet.server&&i(h,s,a.styleSheet,c,a.stylis);{const f=o.isStatic?[h,a.styleSheet,o]:[h,s,a.styleSheet,c,a.stylis,o],m=y.useRef(o);y.useLayoutEffect(()=>{a.styleSheet.server||(m.current!==o&&(a.styleSheet.clearRules(r),m.current=o),i(h,s,a.styleSheet,c,a.stylis))},f),y.useLayoutEffect(()=>()=>{a.styleSheet.server||o.removeStyles(h,a.styleSheet)},[h,a.styleSheet,o])}return a.styleSheet.server&&o.instanceRules.delete(h),null};function i(s,a,c,h,f){if(o.isStatic)o.renderStyles(s,Rm,c,f);else{const m=Object.assign(Object.assign({},a),{theme:Jf(a,h,l.defaultProps)});o.renderStyles(s,m,c,f)}}return y.memo(l)}var xg=`
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

`;const Ma="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Ba="inset 2px 2px 3px rgba(0,0,0,0.2)",ht=()=>P`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,mt=({background:e="material",color:t="materialText"}={})=>P`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,vo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>P`
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
`,Tn=()=>P`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Ln={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},kg=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?Ma:!1,o?Ba:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),me=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return P`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Ln[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Ln[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Ln[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Ln[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>kg({theme:r,topLeftInner:Ln[t][n.topLeftInner],bottomRightInner:Ln[t][n.bottomRightInner],hasShadow:o})};
  `},dr=()=>P`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,Sg=e=>Buffer.from(e).toString("base64"),$g=typeof btoa<"u"?btoa:Sg,_o=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${$g(n)})`},Fa=(e="default")=>P`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>vo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${mt()}
    ${e==="flat"?Tn():me({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${mt()}
    ${e==="flat"?Tn():me({style:"window"})}
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
    ${e==="default"?me({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>_o(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>_o(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>_o(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>_o(t.materialText,0)};
  }
`,Ag=C.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Eg=S.forwardRef(({children:e,underline:t=!0,...n},r)=>y.createElement(Ag,{ref:r,underline:t,...n},e));Eg.displayName="Anchor";const bg=C.header`
  ${me()};
  ${mt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,vp=S.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>y.createElement(bg,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));vp.displayName="AppBar";const Nn=()=>{};function yn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function Cg(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function vc(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Cg(t)))}function on(e){return typeof e=="number"?`${e}px`:e}const Tg=C.div`
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
`,Ig=C.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Rg=S.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:l,...i},s)=>y.createElement(Tg,{noBorder:n,ref:s,size:on(r),square:o,src:l,...i},l?y.createElement(Ig,{src:l,alt:e}):t));Rg.displayName="Avatar";const Ie={sm:"28px",md:"36px",lg:"44px"},Ng=P`
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
`,Zl=C.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?P`
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
        `:o==="menu"||o==="thin"?P`
          ${mt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&me({style:"buttonThin"})}
          }
          &:active {
            ${!t&&me({style:"buttonThinPressed"})}
          }
          ${e&&me({style:"buttonThinPressed"})}
          ${t&&ht()}
        `:P`
          ${mt()};
          border: none;
          ${t&&ht()}
          ${e?vo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?P`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:P`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${me(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&me({style:o==="raised"?"window":"button",invert:!0})}
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
  ${Ng}
`,Tt=S.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:l="md",square:i=!1,active:s=!1,onTouchStart:a=Nn,primary:c=!1,variant:h="default",...f},m)=>y.createElement(Zl,{active:s,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:a,primary:c,ref:m,size:l,square:i,type:r,variant:h,...f},n));Tt.displayName="Button";function ln({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:l="value"}){const i=o!==void 0,[s,a]=S.useState(e),c=S.useCallback(h=>{i||a(h)},[i]);if(i&&typeof t!="function"&&!r){const h=`Warning: You provided a \`${l}\` prop to a component without an \`${n}\` handler.${l==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${l}\`.`}`;console.warn(h)}return[i?o:s,c]}const zs=C.li`
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
  ${e=>e.$disabled&&ht()}
`,Pg=S.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:l,...i},s)=>y.createElement(zs,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:l,role:"menuitem",ref:s,"aria-disabled":t,...i},r));Pg.displayName="MenuListItem";const Dg=C.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${me({style:"window"})}
  ${mt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Dg.displayName="MenuList";const kt=20,Tl=C.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${kt}px;
  height: ${kt}px;
  opacity: 0;
  z-index: -1;
`,ja=C.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&ht()}

  ${zs} & {
    margin: 0;
    height: 100%;
  }
  ${zs}:hover & {
    ${({$disabled:e,theme:t})=>!e&&P`
        color: ${t.materialTextInvert};
      `};
  }
`,Ua=C.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Tl}:focus ~ & {
    ${dr}
  }
  ${Tl}:not(:disabled) ~ &:active {
    ${dr}
  }
`,St=C.div`
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
    ${e=>e.shadow&&`box-shadow:${Ba};`}
  }
`,Lg=C.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Fa()}
`,yp=S.forwardRef(({children:e,shadow:t=!0,...n},r)=>y.createElement(St,{ref:r,shadow:t,...n},y.createElement(Lg,null,e)));yp.displayName="ScrollView";const wp=P`
  width: ${kt}px;
  height: ${kt}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,zg=C(St)`
  ${wp}
  width: ${kt}px;
  height: ${kt}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,_g=C.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${wp}
  width: ${kt-4}px;
  height: ${kt-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Og=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Mg=C.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>vo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Bg={flat:_g,default:zg},Fg=S.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:l="",onChange:i=Nn,style:s={},value:a,variant:c="default",...h},f)=>{var m;const[$,w]=ln({defaultValue:n,onChange:i,readOnly:(m=h.readOnly)!==null&&m!==void 0?m:r,value:e}),A=S.useCallback(u=>{const p=u.target.checked;w(p),i(u)},[i,w]),I=Bg[c];let d=null;return o?d=Mg:$&&(d=Og),y.createElement(ja,{$disabled:r,className:t,style:s},y.createElement(Tl,{disabled:r,onChange:r?void 0:A,readOnly:r,type:"checkbox",value:a,checked:$,"data-indeterminate":o,ref:f,...h}),y.createElement(I,{$disabled:r,role:"presentation"},d&&y.createElement(d,{$disabled:r,variant:c})),l&&y.createElement(Ua,null,l))});Fg.displayName="Checkbox";const xp=C.div`
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
`;xp.displayName="Separator";const jg=C(Zl)`
  padding-left: 8px;
`,Ug=C(xp)`
  height: 21px;
  position: relative;
  top: 0;
`,kp=C.input`
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
`,Hg=C.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?P`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:P`
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
`,Wg=C.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?P`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:P`
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
`,Qg=S.forwardRef(({value:e,defaultValue:t,onChange:n=Nn,disabled:r=!1,variant:o="default",...l},i)=>{var s;const[a,c]=ln({defaultValue:t,onChange:n,readOnly:(s=l.readOnly)!==null&&s!==void 0?s:r,value:e}),h=f=>{const m=f.target.value;c(m),n(f)};return y.createElement(jg,{disabled:r,as:"div",variant:o,size:"md"},y.createElement(kp,{onChange:h,readOnly:r,disabled:r,value:a??"#008080",type:"color",ref:i,...l}),y.createElement(Hg,{$disabled:r,color:a??"#008080",role:"presentation"}),o==="default"&&y.createElement(Ug,{orientation:"vertical"}),y.createElement(Wg,{$disabled:r,variant:o}))});Qg.displayName="ColorInput";const Vg=C.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>P`
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
      ${vo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,yc=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Gg=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Kg({digit:e=0,pixelSize:t=2,...n}){const r=Gg[Number(e)].map((o,l)=>o?`${yc[l]} active`:yc[l]);return y.createElement(Vg,{pixelSize:t,...n},r.map((o,l)=>y.createElement("span",{className:o,key:l})))}const Yg=C.div`
  ${me({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Xg={sm:1,md:2,lg:3,xl:4},Zg=S.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const l=S.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return y.createElement(Yg,{ref:o,...r},l.map((i,s)=>y.createElement(Kg,{digit:i,pixelSize:Xg[n],key:s})))});Zg.displayName="Counter";const Sp=P`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ie.md};
`,Jg=C(St).attrs({"data-testid":"variant-default"})`
  ${Sp}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,qg=C.div.attrs({"data-testid":"variant-flat"})`
  ${Tn()}
  ${Sp}
  position: relative;
`,$p=P`
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
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&ht()}
`,e1=C.input`
  ${$p}
  padding: 0 8px;
`,t1=C.textarea`
  ${$p}
  padding: 8px;
  resize: none;
  ${({variant:e})=>Fa(e)}
`,Ha=S.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Nn,shadow:o=!0,style:l,variant:i="default",...s},a)=>{const c=i==="flat"?qg:Jg,h=S.useMemo(()=>{var f;return s.multiline?y.createElement(t1,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:a,variant:i,...s}):y.createElement(e1,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:a,type:(f=s.type)!==null&&f!==void 0?f:"text",variant:i,...s})},[t,r,s,a,i]);return y.createElement(c,{className:e,fullWidth:n,$disabled:t,shadow:o,style:l},h)});Ha.displayName="TextInput";const n1=C.div`
  display: inline-flex;
  align-items: center;
`,_s=C(Tt)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?P`
          height: calc(50% - 1px);
        `:P`
          height: 50%;
        `}
`,r1=C.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?P`
          height: calc(${Ie.md} - 4px);
        `:P`
          height: ${Ie.md};
          margin-left: 2px;
        `}
`,wc=C.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?P`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:P`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${_s}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?P`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:P`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,Ap=S.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:l,readOnly:i,step:s=1,style:a,value:c,variant:h="default",width:f,...m},$)=>{const[w,A]=ln({defaultValue:t,onChange:l,readOnly:i,value:c}),I=S.useCallback(x=>{const k=parseFloat(x.target.value);A(k)},[A]),d=S.useCallback(x=>{const k=yn(parseFloat(((w??0)+x).toFixed(2)),o??null,r??null);A(k),l==null||l(k)},[r,o,l,A,w]),u=S.useCallback(()=>{w!==void 0&&(l==null||l(w))},[l,w]),p=S.useCallback(()=>{d(s)},[d,s]),g=S.useCallback(()=>{d(-s)},[d,s]),v=h==="flat"?"flat":"raised";return y.createElement(n1,{className:e,style:{...a,width:f!==void 0?on(f):"auto"},...m},y.createElement(Ha,{value:w,variant:h,onChange:I,disabled:n,type:"number",readOnly:i,ref:$,fullWidth:!0,onBlur:u}),y.createElement(r1,{variant:h},y.createElement(_s,{"data-testid":"increment",variant:v,disabled:n||i,onClick:p},y.createElement(wc,{invert:!0})),y.createElement(_s,{"data-testid":"decrement",variant:v,disabled:n||i,onClick:g},y.createElement(wc,null))))});Ap.displayName="NumberInput";function o1(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const Ep=e=>S.useMemo(()=>e??o1(),[e]),bp=P`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Cp=P`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Wa=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,l1=C.div`
  ${bp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Wa}:focus & {
    ${Cp}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,Tp=P`
  height: ${Ie.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?ht():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,i1=C(St)`
  ${Tp}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,s1=C.div`
  ${Tn()}
  ${Tp}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,a1=C.select`
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
    ${ht()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Ip=C(Zl).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?P`
          height: 100%;
          margin-right: 0;
        `:P`
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
`,u1=C.span`
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
`,c1=C.ul`
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
  box-shadow: ${Ma};
  ${({variant:e="default"})=>e==="flat"?P`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:P`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>Fa(e)}
`,d1=C.li`
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
`,f1=[],Rp=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:l=f1,readOnly:i,style:s,value:a,variant:c,width:h})=>{var f;const m=S.useMemo(()=>l.filter(Boolean),[l]),[$,w]=ln({defaultValue:t??((f=m==null?void 0:m[0])===null||f===void 0?void 0:f.value),onChange:o,readOnly:i,value:a}),A=!(n||i),I=S.useMemo(()=>({className:e,style:{...s,width:h}}),[e,s,h]),d=S.useMemo(()=>y.createElement(Ip,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:c==="flat"?"flat":"raised"},y.createElement(u1,{"data-testid":"select-icon",$disabled:n})),[n,r,c]),u=S.useMemo(()=>c==="flat"?s1:i1,[c]);return S.useMemo(()=>({isEnabled:A,options:m,value:$,setValue:w,wrapperProps:I,DropdownButton:d,Wrapper:u}),[d,u,A,m,w,$,I])},p1={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},h1=1e3,m1=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:l,onOpen:i,open:s,options:a,readOnly:c,value:h,selectRef:f,setValue:m,wrapperRef:$})=>{const w=S.useRef(null),A=S.useRef([]),I=S.useRef(0),d=S.useRef(0),u=S.useRef(),p=S.useRef("search"),g=S.useRef(""),v=S.useRef(),[x,k]=ln({defaultValue:!1,onChange:i,onChangePropName:"onOpen",readOnly:c,value:s,valuePropName:"open"}),E=S.useMemo(()=>{const R=a.findIndex(B=>B.value===h);return I.current=yn(R,0,null),a[R]},[a,h]),[F,O]=S.useState(a[0]),W=S.useCallback(R=>{const B=w.current,Z=A.current[R];if(!Z||!B){u.current=R;return}u.current=void 0;const ue=B.clientHeight,se=B.scrollTop,be=B.scrollTop+ue,xe=Z.offsetTop,Ze=Z.offsetHeight,$t=Z.offsetTop+Z.offsetHeight;xe<se&&B.scrollTo(0,xe),$t>be&&B.scrollTo(0,xe-ue+Ze),Z.focus({preventScroll:!0})},[w]),Y=S.useCallback((R,{scroll:B}={})=>{var Z;const ue=a.length-1;let se;switch(R){case"first":{se=0;break}case"last":{se=ue;break}case"next":{se=yn(d.current+1,0,ue);break}case"previous":{se=yn(d.current-1,0,ue);break}case"selected":{se=yn((Z=I.current)!==null&&Z!==void 0?Z:0,0,ue);break}default:se=R}d.current=se,O(a[se]),B&&W(se)},[d,a,W]),V=S.useCallback(({fromEvent:R})=>{k(!0),Y("selected",{scroll:!0}),i==null||i({fromEvent:R})},[Y,i,k]),q=S.useCallback(()=>{p.current="search",g.current="",clearTimeout(v.current)},[]),ne=S.useCallback(({focusSelect:R,fromEvent:B})=>{var Z;n==null||n({fromEvent:B}),k(!1),O(a[0]),q(),u.current=void 0,R&&((Z=f.current)===null||Z===void 0||Z.focus())},[q,n,a,f,k]),pe=S.useCallback(({fromEvent:R})=>{x?ne({focusSelect:!1,fromEvent:R}):V({fromEvent:R})},[ne,V,x]),we=S.useCallback((R,{fromEvent:B})=>{I.current!==R&&(I.current=R,m(a[R].value),t==null||t(a[R],{fromEvent:B}))},[t,a,m]),b=S.useCallback(({focusSelect:R,fromEvent:B})=>{we(d.current,{fromEvent:B}),ne({focusSelect:R,fromEvent:B})},[ne,we]),N=S.useCallback((R,{fromEvent:B,select:Z})=>{var ue;switch(p.current==="cycleFirstLetter"&&R!==g.current&&(p.current="search"),R===g.current?p.current="cycleFirstLetter":g.current+=R,p.current){case"search":{let se=a.findIndex(be=>{var xe;return((xe=be.label)===null||xe===void 0?void 0:xe.toLocaleUpperCase().indexOf(g.current))===0});se<0&&(se=a.findIndex(be=>{var xe;return((xe=be.label)===null||xe===void 0?void 0:xe.toLocaleUpperCase().indexOf(R))===0}),g.current=R),se>=0&&(Z?we(se,{fromEvent:B}):Y(se,{scroll:!0}));break}case"cycleFirstLetter":{const se=Z?(ue=I.current)!==null&&ue!==void 0?ue:-1:d.current;let be=a.findIndex((xe,Ze)=>{var $t;return Ze>se&&(($t=xe.label)===null||$t===void 0?void 0:$t.toLocaleUpperCase().indexOf(R))===0});be<0&&(be=a.findIndex(xe=>{var Ze;return((Ze=xe.label)===null||Ze===void 0?void 0:Ze.toLocaleUpperCase().indexOf(R))===0})),be>=0&&(Z?we(be,{fromEvent:B}):Y(be,{scroll:!0}));break}}clearTimeout(v.current),v.current=setTimeout(()=>{p.current==="search"&&(g.current="")},h1)},[Y,a,we]),L=S.useCallback(R=>{var B;R.button===0&&(R.preventDefault(),(B=f.current)===null||B===void 0||B.focus(),pe({fromEvent:R}),l==null||l(R))},[l,f,pe]),K=S.useCallback(R=>{b({focusSelect:!0,fromEvent:R})},[b]),j=S.useCallback(R=>{const{altKey:B,code:Z,ctrlKey:ue,metaKey:se,shiftKey:be}=R,{ARROW_DOWN:xe,ARROW_UP:Ze,END:$t,ENTER:cn,ESC:Ot,HOME:ql,SPACE:ei,TAB:vr}=p1,Ka=B||ue||se||be;if(!(Z===vr&&(B||ue||se)||Z!==vr&&Ka))switch(Z){case xe:{if(R.preventDefault(),!x){V({fromEvent:R});return}Y("next",{scroll:!0});break}case Ze:{if(R.preventDefault(),!x){V({fromEvent:R});return}Y("previous",{scroll:!0});break}case $t:{if(R.preventDefault(),!x){V({fromEvent:R});return}Y("last",{scroll:!0});break}case cn:{if(!x)return;R.preventDefault(),b({focusSelect:!0,fromEvent:R});break}case Ot:{if(!x)return;R.preventDefault(),ne({focusSelect:!0,fromEvent:R});break}case ql:{if(R.preventDefault(),!x){V({fromEvent:R});return}Y("first",{scroll:!0});break}case ei:{R.preventDefault(),x?b({focusSelect:!0,fromEvent:R}):V({fromEvent:R});break}case vr:{if(!x)return;be||R.preventDefault(),b({focusSelect:!be,fromEvent:R});break}default:!Ka&&Z.match(/^Key/)&&(R.preventDefault(),R.stopPropagation(),N(Z.replace(/^Key/,""),{select:!x,fromEvent:R}))}},[Y,ne,x,V,N,b]),z=S.useCallback(R=>{j(R),o==null||o(R)},[j,o]),_=S.useCallback(R=>{Y(R)},[Y]),M=S.useCallback(R=>{x||(q(),e==null||e(R))},[q,e,x]),U=S.useCallback(R=>{q(),r==null||r(R)},[q,r]),H=S.useCallback(R=>{w.current=R,u.current!==void 0&&W(u.current)},[W]),Ne=S.useCallback((R,B)=>{A.current[B]=R,u.current===B&&W(u.current)},[W]);return S.useEffect(()=>{if(!x)return()=>{};const R=B=>{var Z;const ue=B.target;!((Z=$.current)===null||Z===void 0)&&Z.contains(ue)||(B.preventDefault(),ne({focusSelect:!1,fromEvent:B}))};return document.addEventListener("mousedown",R),()=>{document.removeEventListener("mousedown",R)}},[ne,x,$]),S.useMemo(()=>({activeOption:F,handleActivateOptionIndex:_,handleBlur:M,handleButtonKeyDown:z,handleDropdownKeyDown:j,handleFocus:U,handleMouseDown:L,handleOptionClick:K,handleSetDropdownRef:H,handleSetOptionRef:Ne,open:x,selectedOption:E}),[F,_,M,z,U,j,L,K,H,Ne,x,E])},g1=S.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:l,style:i,value:s,variant:a,width:c,...h},f)=>{const{isEnabled:m,options:$,setValue:w,value:A,DropdownButton:I,Wrapper:d}=Rp({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:l,value:s,variant:a}),u=S.useCallback(p=>{const g=$.find(v=>v.value===p.target.value);g&&(w(g.value),r==null||r(g,{fromEvent:p}))},[r,$,w]);return y.createElement(d,{className:e,style:{...i,width:c}},y.createElement(Wa,null,y.createElement(a1,{...h,disabled:n,onChange:m?u:Nn,ref:f,value:A},$.map((p,g)=>{var v;return y.createElement("option",{key:`${p.value}-${g}`,value:p.value},(v=p.label)!==null&&v!==void 0?v:p.value)})),I))});g1.displayName="SelectNative";function v1({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:l,setRef:i}){const s=S.useCallback(()=>{e(n)},[e,n]),a=S.useCallback(h=>{i(h,n)},[n,i]),c=Ep();return y.createElement(d1,{active:t,"aria-selected":l?"true":void 0,"data-value":o.value,id:c,onClick:r,onMouseEnter:s,ref:a,role:"option",tabIndex:0},o.label)}function y1({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:l,inputProps:i,labelId:s,menuMaxHeight:a,name:c,onBlur:h,onChange:f,onClose:m,onFocus:$,onKeyDown:w,onMouseDown:A,onOpen:I,open:d,options:u,readOnly:p,shadow:g=!0,style:v,variant:x="default",value:k,width:E="auto",...F},O){const{isEnabled:W,options:Y,setValue:V,value:q,wrapperProps:ne,DropdownButton:pe,Wrapper:we}=Rp({className:n,defaultValue:r,disabled:o,native:!1,onChange:f,options:u,style:v,readOnly:p,value:k,variant:x,width:E}),b=S.useRef(null),N=S.useRef(null),L=S.useRef(null),{activeOption:K,handleActivateOptionIndex:j,handleBlur:z,handleButtonKeyDown:_,handleDropdownKeyDown:M,handleFocus:U,handleMouseDown:H,handleOptionClick:Ne,handleSetDropdownRef:R,handleSetOptionRef:B,open:Z,selectedOption:ue}=m1({onBlur:h,onChange:f,onClose:m,onFocus:$,onKeyDown:w,onMouseDown:A,onOpen:I,open:d,options:Y,value:q,selectRef:N,setValue:V,wrapperRef:L});S.useImperativeHandle(O,()=>({focus:cn=>{var Ot;(Ot=N.current)===null||Ot===void 0||Ot.focus(cn)},node:b.current,value:String(q)}),[q]);const se=S.useMemo(()=>ue?typeof l=="function"?l(ue):ue.label:"",[l,ue]),be=W?1:void 0,xe=S.useMemo(()=>a?{overflow:"auto",maxHeight:a}:void 0,[a]),Ze=Ep(),$t=S.useMemo(()=>Y.map((cn,Ot)=>{const ql=`${q}-${Ot}`,ei=cn===K,vr=cn===ue;return y.createElement(v1,{activateOptionIndex:j,active:ei,index:Ot,key:ql,onClick:Ne,option:cn,selected:vr,setRef:B})}),[K,j,Ne,B,Y,ue,q]);return y.createElement(we,{...ne,$disabled:o,ref:L,shadow:g,style:{...v,width:E}},y.createElement("input",{name:c,ref:b,type:"hidden",value:String(q),...i}),y.createElement(Wa,{"aria-disabled":o,"aria-expanded":Z,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??s,"aria-owns":W&&Z?Ze:void 0,onBlur:z,onFocus:U,onKeyDown:_,onMouseDown:W?H:A,ref:N,role:"button",tabIndex:be,...F},y.createElement(l1,null,se),pe),W&&Z&&y.createElement(c1,{id:Ze,onKeyDown:M,ref:R,role:"listbox",style:xe,tabIndex:0,variant:x},$t))}const Np=S.forwardRef(y1);Np.displayName="Select";const w1=C.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Il=S.forwardRef(function({children:t,noPadding:n=!1,...r},o){return y.createElement(w1,{noPadding:n,ref:o,...r},t)});Il.displayName="Toolbar";const x1=C.div`
  padding: 16px;
`,Qa=S.forwardRef(function({children:t,...n},r){return y.createElement(x1,{ref:r,...n},t)});Qa.displayName="WindowContent";const k1=C.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?P`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:P`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${Zl} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Va=S.forwardRef(function({active:t=!0,children:n,...r},o){return y.createElement(k1,{active:t,ref:o,...r},n)});Va.displayName="WindowHeader";const S1=C.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${me({style:"window"})}
  ${mt()}
`,$1=C.span`
  ${({theme:e})=>P`
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
`,Ga=S.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},l)=>y.createElement(S1,{ref:l,shadow:r,...o},e,t&&y.createElement($1,{"data-testid":"resizeHandle",ref:n})));Ga.displayName="Window";const A1=C(yp)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,E1=C.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,b1=C.div`
  display: flex;
  flex-wrap: wrap;
`,At=C.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,C1=C.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,T1=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function I1(e,t){return new Date(e,t+1,0).getDate()}function R1(e,t,n){return new Date(e,t,n).getDay()}function N1(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const P1=S.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},l)=>{const[i,s]=S.useState(()=>N1(t)),{year:a,month:c,day:h}=i,f=S.useCallback(({value:I})=>{s(d=>({...d,month:I}))},[]),m=S.useCallback(I=>{s(d=>({...d,year:I}))},[]),$=S.useCallback(I=>{s(d=>({...d,day:I}))},[]),w=S.useCallback(()=>{const I=[i.year,i.month+1,i.day].map(d=>String(d).padStart(2,"0")).join("-");n==null||n(I)},[i.day,i.month,i.year,n]),A=S.useMemo(()=>{const I=Array.from({length:42}),d=R1(a,c,1);let u=h;const p=I1(a,c);return u=u<p?u:p,I.forEach((g,v)=>{if(v>=d&&v<p+d){const x=v-d+1;I[v]=y.createElement(At,{key:v,onClick:()=>{$(x)}},y.createElement(C1,{active:x===u},x))}else I[v]=y.createElement(At,{key:v})}),I},[h,$,c,a]);return y.createElement(Ga,{className:e,ref:l,shadow:o,style:{margin:20}},y.createElement(Va,null,y.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),y.createElement(Qa,null,y.createElement(Il,{noPadding:!0,style:{justifyContent:"space-between"}},y.createElement(Np,{options:T1,value:c,onChange:f,width:128,menuMaxHeight:200}),y.createElement(Ap,{value:a,onChange:m,width:100})),y.createElement(A1,null,y.createElement(E1,null,y.createElement(At,null,"S"),y.createElement(At,null,"M"),y.createElement(At,null,"T"),y.createElement(At,null,"W"),y.createElement(At,null,"T"),y.createElement(At,null,"F"),y.createElement(At,null,"S")),y.createElement(b1,null,A)),y.createElement(Il,{noPadding:!0,style:{justifyContent:"space-between"}},y.createElement(Tt,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),y.createElement(Tt,{fullWidth:!0,onClick:n?w:void 0,disabled:!n},"OK"))))});P1.displayName="DatePicker";const D1=e=>{switch(e){case"status":case"well":return P`
        ${me({style:"status"})}
      `;case"window":case"outside":return P`
        ${me({style:"window"})}
      `;case"field":return P`
        ${me({style:"field"})}
      `;default:return P`
        ${me()}
      `}},L1=C.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>D1(e)}
  ${({variant:e})=>mt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,z1=S.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>y.createElement(L1,{ref:o,shadow:t,variant:n,...r},e));z1.displayName="Frame";const _1=C.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&P`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&ht()}
`,O1=C.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,M1=S.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},l)=>y.createElement(_1,{"aria-disabled":t,$disabled:t,variant:n,ref:l,...o},e&&y.createElement(O1,{variant:n},e),r));M1.displayName="GroupBox";const B1=C.div`
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
`;B1.displayName="Handle";const F1="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",j1=C.div`
  display: inline-block;
  height: ${({size:e})=>on(e)};
  width: ${({size:e})=>on(e)};
`,U1=C.span`
  display: block;
  background: ${F1};
  background-size: cover;
  width: 100%;
  height: 100%;
`,H1=S.forwardRef(({size:e=30,...t},n)=>y.createElement(j1,{size:e,ref:n,...t},y.createElement(U1,null)));H1.displayName="Hourglass";const W1=C.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Q1=C.div`
  position: relative;
`,V1=C.div`
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
`,G1=C(St).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,K1=C.div`
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
`,Y1=S.forwardRef(({backgroundStyles:e,children:t,...n},r)=>y.createElement(W1,{ref:r,...n},y.createElement(Q1,null,y.createElement(V1,null,y.createElement(G1,{style:e},t)),y.createElement(K1,null))));Y1.displayName="Monitor";const X1=C.div`
  display: inline-block;
  height: ${Ie.md};
  width: 100%;
`,Z1=C(St)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Pp=P`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,J1=C.div`
  position: relative;
  top: 4px;
  ${Pp}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,q1=C.div`
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
`,ev=C.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Dp=17,tv=C.span`
  display: inline-block;
  width: ${Dp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,nv=S.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},l)=>{const i=e?null:`${n}%`,s=S.useRef(null),[a,c]=S.useState([]),h=S.useCallback(()=>{if(!s.current||n===void 0)return;const f=s.current.getBoundingClientRect().width,m=Math.round(n/100*f/Dp);c(Array.from({length:m}))},[n]);return S.useEffect(()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[h]),y.createElement(X1,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:l,role:"progressbar",variant:r,...o},y.createElement(Z1,{variant:r,shadow:t},r==="default"?y.createElement(y.Fragment,null,y.createElement(J1,{"data-testid":"defaultProgress1"},i),y.createElement(q1,{"data-testid":"defaultProgress2",value:n},i)):y.createElement(ev,{ref:s,"data-testid":"tileProgress"},a.map((f,m)=>y.createElement(tv,{key:m})))))});nv.displayName="ProgressBar";const Lp=P`
  width: ${kt}px;
  height: ${kt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,rv=C(St)`
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
`,ov=C.div`
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
`,lv=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,iv={flat:ov,default:rv},sv=S.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:l={},variant:i="default",...s},a)=>{const c=iv[i];return y.createElement(ja,{$disabled:n,className:t,style:l},y.createElement(c,{$disabled:n,role:"presentation"},e&&y.createElement(lv,{$disabled:n,variant:i})),y.createElement(Tl,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:a,...s}),r&&y.createElement(Ua,null,r))});sv.displayName="Radio";const av=typeof window<"u"?S.useLayoutEffect:S.useEffect;function dn(e){const t=S.useRef(e);return av(()=>{t.current=e}),S.useCallback((...n)=>(0,t.current)(...n),[])}function xc(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function kc(e,t){return S.useMemo(()=>e==null&&t==null?null:n=>{xc(e,n),xc(t,n)},[e,t])}let Jl=!0,Os=!1,Sc;const uv={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function cv(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&uv[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function dv(e){e.metaKey||e.altKey||e.ctrlKey||(Jl=!0)}function Di(){Jl=!1}function fv(){this.visibilityState==="hidden"&&Os&&(Jl=!0)}function pv(e){e.addEventListener("keydown",dv,!0),e.addEventListener("mousedown",Di,!0),e.addEventListener("pointerdown",Di,!0),e.addEventListener("touchstart",Di,!0),e.addEventListener("visibilitychange",fv,!0)}function hv(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Jl||cv(t)}function mv(){Os=!0,window.clearTimeout(Sc),Sc=window.setTimeout(()=>{Os=!1},100)}function gv(){const e=S.useCallback(t=>{const n=Uf.findDOMNode(t);n!=null&&pv(n.ownerDocument)},[]);return{isFocusVisible:hv,onBlurVisible:mv,ref:e}}function vv(e,t,n){return(n-t)*e+t}function Oo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Mo(e){return e&&e.ownerDocument||document}function yv(e,t){var n;const{index:r}=(n=e.reduce((o,l,i)=>{const s=Math.abs(t-l);return o===null||s<o.distance||s===o.distance?{distance:s,index:i}:o},null))!==null&&n!==void 0?n:{};return r??-1}const wv=C.div`
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

  ${({orientation:e,size:t})=>e==="vertical"?P`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:P`
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
`,zp=()=>P`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?P`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:P`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,xv=C(St)`
  ${zp()}
`,kv=C(St)`
  ${zp()}

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
`,Sv=C.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?P`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:P`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?P`
          ${Tn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:P`
          ${mt()}
          ${me()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&vo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,Gn=6,$v=C.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?P`
          right: ${-Gn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Gn}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:P`
          bottom: ${-Gn}px;
          height: ${Gn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&P`
      ${ht()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,Av=C.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?P`
          transform: translate(${Gn+2}px, ${Gn+1}px);
        `:P`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Ev=S.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:l,onChange:i,onChangeCommitted:s,onMouseDown:a,orientation:c="horizontal",size:h="100%",step:f=1,value:m,variant:$="default",...w},A)=>{const I=$==="flat"?kv:xv,d=c==="vertical",[u=o,p]=ln({defaultValue:e,onChange:i??s,value:m}),{isFocusVisible:g,onBlurVisible:v,ref:x}=gv(),[k,E]=S.useState(!1),F=S.useRef(),O=S.useRef(null),W=kc(x,F),Y=kc(A,W),V=dn(z=>{g(z)&&E(!0)}),q=dn(()=>{k!==!1&&(E(!1),v())}),ne=S.useRef(),pe=S.useMemo(()=>n===!0&&Number.isFinite(f)?[...Array(Math.round((r-o)/f)+1)].map((z,_)=>({label:void 0,value:o+f*_})):Array.isArray(n)?n:[],[n,r,o,f]),we=dn(z=>{const _=(r-o)/10,M=pe.map(Ne=>Ne.value),U=M.indexOf(u);let H=0;switch(z.key){case"Home":H=o;break;case"End":H=r;break;case"PageUp":f&&(H=u+_);break;case"PageDown":f&&(H=u-_);break;case"ArrowRight":case"ArrowUp":f?H=u+f:H=M[U+1]||M[M.length-1];break;case"ArrowLeft":case"ArrowDown":f?H=u-f:H=M[U-1]||M[0];break;default:return}z.preventDefault(),f&&(H=vc(H,f,o)),H=yn(H,o,r),p(H),E(!0),i==null||i(H),s==null||s(H)}),b=S.useCallback(z=>{if(!F.current)return 0;const _=F.current.getBoundingClientRect();let M;d?M=(_.bottom-z.y)/_.height:M=(z.x-_.left)/_.width;let U;if(U=vv(M,o,r),f)U=vc(U,f,o);else{const H=pe.map(R=>R.value),Ne=yv(H,U);U=H[Ne]}return U=yn(U,o,r),U},[pe,r,o,f,d]),N=dn(z=>{var _;const M=Oo(z,ne.current);if(!M)return;const U=b(M);(_=O.current)===null||_===void 0||_.focus(),p(U),E(!0),i==null||i(U)}),L=dn(z=>{const _=Oo(z,ne.current);if(!_)return;const M=b(_);s==null||s(M),ne.current=void 0;const U=Mo(F.current);U.removeEventListener("mousemove",N),U.removeEventListener("mouseup",L),U.removeEventListener("touchmove",N),U.removeEventListener("touchend",L)}),K=dn(z=>{var _;a==null||a(z),z.preventDefault(),(_=O.current)===null||_===void 0||_.focus(),E(!0);const M=Oo(z,ne.current);if(M){const H=b(M);p(H),i==null||i(H)}const U=Mo(F.current);U.addEventListener("mousemove",N),U.addEventListener("mouseup",L)}),j=dn(z=>{var _;z.preventDefault();const M=z.changedTouches[0];M!=null&&(ne.current=M.identifier),(_=O.current)===null||_===void 0||_.focus(),E(!0);const U=Oo(z,ne.current);if(U){const Ne=b(U);p(Ne),i==null||i(Ne)}const H=Mo(F.current);H.addEventListener("touchmove",N),H.addEventListener("touchend",L)});return S.useEffect(()=>{const{current:z}=F;z==null||z.addEventListener("touchstart",j);const _=Mo(z);return()=>{z==null||z.removeEventListener("touchstart",j),_.removeEventListener("mousemove",N),_.removeEventListener("mouseup",L),_.removeEventListener("touchmove",N),_.removeEventListener("touchend",L)}},[L,N,j]),y.createElement(wv,{$disabled:t,hasMarks:!!pe.length,isFocused:k,onMouseDown:K,orientation:c,ref:Y,size:on(h),...w},y.createElement("input",{disabled:t,name:l,type:"hidden",value:u??0}),pe&&pe.map(z=>y.createElement($v,{$disabled:t,"data-testid":"tick",key:z.value/(r-o)*100,orientation:c,style:{[d?"bottom":"left"]:`${(z.value-o)/(r-o)*100}%`}},z.label&&y.createElement(Av,{"aria-hidden":!0,"data-testid":"mark",orientation:c},z.label))),y.createElement(I,{orientation:c,variant:$}),y.createElement(Sv,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":c,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":u,onBlur:q,onFocus:V,onKeyDown:we,orientation:c,ref:O,role:"slider",style:{[d?"bottom":"left"]:`${(d?-100:0)+100*(u-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:$}))});Ev.displayName="Slider";const bv=C.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Ba};
  overflow-y: auto;
`,Cv=S.forwardRef(function({children:t,...n},r){return y.createElement(bv,{ref:r,...n},t)});Cv.displayName="TableBody";const Tv=C.td`
  padding: 0 8px;
`,Iv=S.forwardRef(function({children:t,...n},r){return y.createElement(Tv,{ref:r,...n},t)});Iv.displayName="TableDataCell";const Rv=C.thead`
  display: table-header-group;
`,Nv=S.forwardRef(function({children:t,...n},r){return y.createElement(Rv,{ref:r,...n},t)});Nv.displayName="TableHead";const Pv=C.th`
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
    ${me()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&P`
      &:active {
        &:before {
          ${me({invert:!0,style:"window"})}
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
  ${({$disabled:e})=>e&&ht()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&ht()}
  }
`,Dv=S.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Nn,sort:l,...i},s){const a=l==="asc"?"ascending":l==="desc"?"descending":void 0;return y.createElement(Pv,{$disabled:t,"aria-disabled":t,"aria-sort":a,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:s,...i},y.createElement("div",null,n))});Dv.displayName="TableHeadCell";const Lv=C.tr`
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
`,zv=S.forwardRef(function({children:t,...n},r){return y.createElement(Lv,{ref:r,...n},t)});zv.displayName="TableRow";const _v=C.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Ov=C(St)`
  &:before {
    box-shadow: none;
  }
`,Mv=S.forwardRef(({children:e,...t},n)=>y.createElement(Ov,null,y.createElement(_v,{ref:n,...t},e)));Mv.displayName="Table";const Bv=C.button`
  ${mt()}
  ${me()}
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
`,Fv=S.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},l)=>y.createElement(Bv,{"aria-selected":n,selected:n,onClick:i=>t==null?void 0:t(e,i),ref:l,role:"tab",...o},r));Fv.displayName="Tab";const jv=C.div`
  ${mt()}
  ${me()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Uv=S.forwardRef(({children:e,...t},n)=>y.createElement(jv,{ref:n,...t},e));Uv.displayName="TabBody";const Hv=C.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,Wv=C.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function Qv(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const Vv=S.forwardRef(({value:e,onChange:t=Nn,children:n,rows:r=1,...o},l)=>{const i=S.useMemo(()=>{var s;const a=(s=y.Children.map(n,f=>{if(!y.isValidElement(f))return null;const m={selected:f.props.value===e,onClick:t};return y.cloneElement(f,m)}))!==null&&s!==void 0?s:[],c=Qv(a,r).map((f,m)=>({key:m,tabs:f})),h=c.findIndex(f=>f.tabs.some(m=>m.props.selected));return c.push(c.splice(h,1)[0]),c},[n,t,r,e]);return y.createElement(Hv,{...o,isMultiRow:r>1,role:"tablist",ref:l},i.map(s=>y.createElement(Wv,{key:s.key},s.tabs)))});Vv.displayName="Tabs";const Gv=["blur","focus"],Kv=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function $c(e){return"nativeEvent"in e&&Gv.includes(e.type)}function Ac(e){return"nativeEvent"in e&&Kv.includes(e.type)}const Yv={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Xv=C.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${Ma};
  text-align: center;
  font-size: 1rem;
  ${e=>Yv[e.position]}
`,Zv=C.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Jv=S.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:l=0,onBlur:i,onClose:s,onFocus:a,onMouseEnter:c,onMouseLeave:h,onOpen:f,style:m,text:$,position:w="top",...A},I)=>{const[d,u]=S.useState(!1),[p,g]=S.useState(),[v,x]=S.useState(),k=!n,E=!r,F=b=>{window.clearTimeout(p),window.clearTimeout(v);const N=window.setTimeout(()=>{u(!0),f==null||f(b)},o);g(N)},O=b=>{b.persist(),$c(b)?a==null||a(b):Ac(b)&&(c==null||c(b)),F(b)},W=b=>{window.clearTimeout(p),window.clearTimeout(v);const N=window.setTimeout(()=>{u(!1),s==null||s(b)},l);x(N)},Y=b=>{b.persist(),$c(b)?i==null||i(b):Ac(b)&&(h==null||h(b)),W(b)},V=k?Y:void 0,q=k?O:void 0,ne=E?O:void 0,pe=E?Y:void 0,we=k?0:void 0;return y.createElement(Zv,{"data-testid":"tooltip-wrapper",onBlur:V,onFocus:q,onMouseEnter:ne,onMouseLeave:pe,tabIndex:we},y.createElement(Xv,{className:e,"data-testid":"tooltip",position:w,ref:I,show:d,style:m,...A},$),t)});Jv.displayName="Tooltip";const Ms=C(Ua)`
  white-space: nowrap;
`,_p=P`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":P`
          cursor: pointer;

          :focus {
            ${Ms} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,qv=C.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&P`
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
`,ey=C.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?P`
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
        `:P`
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
`,ty=C.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,ny=C.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${_p};

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
`,Ec=C(ja)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${_p};
`,ry=C.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function bc(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Cc(e){e.preventDefault()}function Op({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:l,selected:i,style:s,tree:a=[]}){const c=o===0,h=S.useCallback(f=>{var m,$;const w=!!(f.items&&f.items.length>0),A=n.includes(f.id),I=(m=t||f.disabled)!==null&&m!==void 0?m:!1,d=I?Cc:v=>l(v,f),u=I?Cc:v=>l(v,f),p=i===f.id,g=y.createElement(ry,{"aria-hidden":!0},f.icon);return y.createElement(ey,{key:f.label,isRootLevel:c,role:"treeitem","aria-expanded":A,"aria-selected":p,hasItems:w},w?y.createElement(ty,{open:A},y.createElement(ny,{onClick:d,$disabled:I},y.createElement(Ec,{$disabled:I},g,y.createElement(Ms,null,f.label))),A&&y.createElement(Op,{className:e,disabled:I,expanded:n,level:o+1,select:l,selected:i,style:s,tree:($=f.items)!==null&&$!==void 0?$:[]})):y.createElement(Ec,{as:"button",$disabled:I,onClick:u},g,y.createElement(Ms,null,f.label)))},[e,t,n,c,o,l,i,s]);return y.createElement(qv,{className:c?e:void 0,style:c?s:void 0,ref:c?r:void 0,role:c?"tree":"group",isRootLevel:c},a.map(h))}function oy({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:l,onNodeToggle:i,selected:s,style:a,tree:c=[]},h){const[f,m]=ln({defaultValue:t,onChange:i,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[$,w]=ln({defaultValue:n,onChange:l,onChangePropName:"onNodeSelect",value:s,valuePropName:"selected"}),A=S.useCallback((u,p)=>{if(i){const g=bc(f,p);i(u,g)}m(g=>bc(g,p))},[f,i,m]),I=S.useCallback((u,p)=>{w(p),l&&l(u,p)},[l,w]),d=S.useCallback((u,p)=>{u.preventDefault(),I(u,p.id),p.items&&p.items.length&&A(u,p.id)},[I,A]);return y.createElement(Op,{className:e,disabled:r,expanded:f,level:0,innerRef:h,select:d,selected:$,style:a,tree:c})}const ly=S.forwardRef(oy);ly.displayName="TreeView";var iy={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},sy=iy;const ay=Tc(sy),uy=wg`
  ${xg}
  body, html, #root {
    height: 100%;
    margin: 0;
    overflow: hidden;
    background-color: #008080; /* Windows 95 classic teal background for the Brain Board */
    font-family: 'ms_sans_serif', sans-serif;
  }
`;function cy(){const[e,t]=S.useState([]),[n,r]=S.useState([]),[o,l]=S.useState("select"),[i,s]=S.useState(null),[a,c]=S.useState({x:0,y:0}),[h,f]=S.useState(null),[m,$]=S.useState(null),w=()=>{const g=Date.now();t([...e,{id:g,x:window.innerWidth/2-125,y:window.innerHeight/2-100,text:"",title:`Note ${g.toString().slice(-4)}`}])},A=(g,v)=>{if(!(o==="select"&&g.target.tagName.toLowerCase()==="textarea"))if(o==="select"){const x=e.find(k=>k.id===v);if(!x)return;s(v),c({x:g.clientX-x.x,y:g.clientY-x.y}),g.target.setPointerCapture(g.pointerId)}else o==="string"&&(f({startNoteId:v,endX:g.clientX,endY:g.clientY}),g.target.setPointerCapture(g.pointerId),g.stopPropagation())},I=g=>{o==="select"&&i!==null?t(v=>v.map(x=>x.id===i?{...x,x:g.clientX-a.x,y:g.clientY-a.y}:x)):o==="string"&&h!==null&&f({...h,endX:g.clientX,endY:g.clientY})},d=g=>{if(o==="select"&&i!==null)document.elementsFromPoint(g.clientX,g.clientY).some(k=>k.id==="recycle-bin")&&(t(k=>k.filter(E=>E.id!==i)),r(k=>k.filter(E=>E.from!==i&&E.to!==i)),m===i&&$(null)),s(null),g.target.releasePointerCapture(g.pointerId);else if(o==="string"&&h!==null){let v=null;const x=document.elementsFromPoint(g.clientX,g.clientY);for(const k of x){const E=k.getAttribute("data-note-id");if(E){v=parseInt(E,10);break}}v!==null&&v!==h.startNoteId&&r(k=>[...k,{from:h.startNoteId,to:v}]),f(null),g.target.releasePointerCapture(g.pointerId)}},u=g=>{const v=e.find(x=>x.id===g);return v?{x:v.x+125,y:v.y+75}:{x:0,y:0}},p=g=>g?{backgroundImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVQIW2NkYGD4z8DAwMgAI0AMDA4wBAEFwAAAAABJRU5ErkJggg==")',backgroundColor:"#c6c6c6"}:{};return ee.jsxs(hg,{theme:ay,children:[ee.jsx(uy,{}),ee.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[ee.jsx(vp,{position:"relative",style:{zIndex:10,position:"relative"},children:ee.jsxs(Il,{style:{justifyContent:"flex-start",gap:"1rem"},children:[ee.jsx(Tt,{style:{fontWeight:"bold",pointerEvents:"none"},children:"UniMaker"}),ee.jsx(Tt,{onClick:w,title:"Add Note Box",style:{fontWeight:"bold"},children:"📄+"})]})}),ee.jsxs("div",{style:{display:"flex",flex:1,position:"relative"},children:[ee.jsxs("div",{style:{width:"60px",background:"#c6c6c6",borderRight:"2px solid #fff",display:"flex",flexDirection:"column",alignItems:"center",padding:"10px 0",gap:"8px",zIndex:10},children:[ee.jsx(Tt,{active:o==="select",onClick:()=>l("select"),title:"Select Tool",style:{width:"40px",height:"40px",fontSize:"18px",...p(o==="select")},children:"↖"}),ee.jsx(Tt,{active:o==="string",onClick:()=>l("string"),title:"Line Tool",style:{width:"40px",height:"40px",fontSize:"18px",...p(o==="string")},children:"〰️"}),ee.jsx("div",{style:{flex:1}})," ",ee.jsxs("div",{id:"recycle-bin",style:{width:"50px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"black",fontFamily:"ms_sans_serif",fontSize:"10px",marginBottom:"10px"},children:[ee.jsx("div",{style:{fontSize:"24px",pointerEvents:"none",marginBottom:"4px"},children:"🗑️"}),ee.jsx("span",{style:{pointerEvents:"none",textAlign:"center"},children:"Trash"})]})]}),ee.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},onPointerMove:I,onPointerUp:d,children:[ee.jsxs("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[n.map((g,v)=>{const x=u(g.from),k=u(g.to);return ee.jsx("line",{x1:x.x,y1:x.y,x2:k.x,y2:k.y,stroke:"#000",strokeWidth:"2"},v)}),h&&ee.jsx("line",{x1:u(h.startNoteId).x,y1:u(h.startNoteId).y,x2:h.endX-60,y2:h.endY-48,stroke:"#000",strokeWidth:"2",strokeDasharray:"4"})]}),e.map(g=>{const v=m===g.id;return ee.jsxs(Ga,{"data-note-id":g.id,style:{position:"absolute",left:v?0:g.x,top:v?0:g.y,width:v?"100%":250,height:v?"100%":"auto",zIndex:v?100:5,display:"flex",flexDirection:"column"},onPointerDown:x=>A(x,g.id),onPointerMove:I,onPointerUp:d,children:[ee.jsx("div",{style:{cursor:o==="select"?"grab":"default"},children:ee.jsxs(Va,{className:"window-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[ee.jsx("input",{value:g.title||`Note ${g.id.toString().slice(-4)}`,onChange:x=>{const k=e.map(E=>E.id===g.id?{...E,title:x.target.value}:E);t(k)},style:{background:"transparent",border:"none",color:"inherit",fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",width:"calc(100% - 30px)",outline:"none"},onPointerDown:x=>x.stopPropagation()}),ee.jsx(Tt,{onClick:x=>{x.stopPropagation(),$(v?null:g.id)},style:{width:24,height:24,minWidth:0,padding:0},children:ee.jsx("span",{style:{transform:"none",display:"inline-block"},children:"🗖"})})]})}),ee.jsx(Qa,{style:{display:"flex",flexDirection:"column",flex:1,padding:v?"8px":void 0},children:ee.jsx(Ha,{multiline:!0,rows:v?void 0:4,placeholder:"Type your ideas here...",value:g.text||"",onChange:x=>{const k=e.map(E=>E.id===g.id?{...E,text:x.target.value}:E);t(k)},fullWidth:!0,style:{fontFamily:"ms_sans_serif",resize:"none",flex:1,height:"100%"}})})]},g.id)})]})]})]})]})}Li.createRoot(document.getElementById("root")).render(ee.jsx(y.StrictMode,{children:ee.jsx(cy,{})}));
