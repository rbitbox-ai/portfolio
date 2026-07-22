(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function uc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ka={exports:{}},il={},Xa={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn=Symbol.for("react.element"),cc=Symbol.for("react.portal"),dc=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),yc=Symbol.for("react.memo"),xc=Symbol.for("react.lazy"),Ai=Symbol.iterator;function wc(e){return e===null||typeof e!="object"?null:(e=Ai&&e[Ai]||e["@@iterator"],typeof e=="function"?e:null)}var Za={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ja=Object.assign,qa={};function dn(e,t,n){this.props=e,this.context=t,this.refs=qa,this.updater=n||Za}dn.prototype.isReactComponent={};dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function es(){}es.prototype=dn.prototype;function Ho(e,t,n){this.props=e,this.context=t,this.refs=qa,this.updater=n||Za}var Qo=Ho.prototype=new es;Qo.constructor=Ho;Ja(Qo,dn.prototype);Qo.isPureReactComponent=!0;var Ui=Array.isArray,ts=Object.prototype.hasOwnProperty,Go={current:null},ns={key:!0,ref:!0,__self:!0,__source:!0};function rs(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)ts.call(t,r)&&!ns.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),d=0;d<a;d++)s[d]=arguments[d+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:qn,type:e,key:o,ref:i,props:l,_owner:Go.current}}function _c(e,t){return{$$typeof:qn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yo(e){return typeof e=="object"&&e!==null&&e.$$typeof===qn}function kc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $i=/\/+/g;function El(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kc(""+e.key):t.toString(36)}function Er(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case qn:case cc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+El(i,0):r,Ui(l)?(n="",e!=null&&(n=e.replace($i,"$&/")+"/"),Er(l,t,n,"",function(d){return d})):l!=null&&(Yo(l)&&(l=_c(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace($i,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ui(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+El(o,a);i+=Er(o,t,n,s,l)}else if(s=wc(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+El(o,a++),i+=Er(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ir(e,t,n){if(e==null)return e;var r=[],l=0;return Er(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Sc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Nr={transition:null},Ec={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:Go};function ls(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:ir,forEach:function(e,t,n){ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ir(e,function(){t++}),t},toArray:function(e){return ir(e,function(t){return t})||[]},only:function(e){if(!Yo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=dn;R.Fragment=dc;R.Profiler=fc;R.PureComponent=Ho;R.StrictMode=pc;R.Suspense=vc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ec;R.act=ls;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ja({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Go.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ts.call(t,s)&&!ns.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var d=0;d<s;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:qn,type:e.type,key:l,ref:o,props:r,_owner:i}};R.createContext=function(e){return e={$$typeof:hc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mc,_context:e},e.Consumer=e};R.createElement=rs;R.createFactory=function(e){var t=rs.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:gc,render:e}};R.isValidElement=Yo;R.lazy=function(e){return{$$typeof:xc,_payload:{_status:-1,_result:e},_init:Sc}};R.memo=function(e,t){return{$$typeof:yc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=t}};R.unstable_act=ls;R.useCallback=function(e,t){return fe.current.useCallback(e,t)};R.useContext=function(e){return fe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};R.useEffect=function(e,t){return fe.current.useEffect(e,t)};R.useId=function(){return fe.current.useId()};R.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return fe.current.useMemo(e,t)};R.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};R.useRef=function(e){return fe.current.useRef(e)};R.useState=function(e){return fe.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return fe.current.useTransition()};R.version="18.3.1";Xa.exports=R;var T=Xa.exports;const Nc=uc(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=T,jc=Symbol.for("react.element"),Pc=Symbol.for("react.fragment"),Tc=Object.prototype.hasOwnProperty,bc=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zc={key:!0,ref:!0,__self:!0,__source:!0};function os(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Tc.call(t,r)&&!zc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:jc,type:e,key:o,ref:i,props:l,_owner:bc.current}}il.Fragment=Pc;il.jsx=os;il.jsxs=os;Ka.exports=il;var u=Ka.exports,Xl={},is={exports:{}},Ne={},as={exports:{}},ss={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,b){var z=S.length;S.push(b);e:for(;0<z;){var Y=z-1>>>1,ee=S[Y];if(0<l(ee,b))S[Y]=b,S[z]=ee,z=Y;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var b=S[0],z=S.pop();if(z!==b){S[0]=z;e:for(var Y=0,ee=S.length,lr=ee>>>1;Y<lr;){var kt=2*(Y+1)-1,Sl=S[kt],St=kt+1,or=S[St];if(0>l(Sl,z))St<ee&&0>l(or,Sl)?(S[Y]=or,S[St]=z,Y=St):(S[Y]=Sl,S[kt]=z,Y=kt);else if(St<ee&&0>l(or,z))S[Y]=or,S[St]=z,Y=St;else break e}}return b}function l(S,b){var z=S.sortIndex-b.sortIndex;return z!==0?z:S.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],d=[],v=1,m=null,g=3,w=!1,_=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(S){for(var b=n(d);b!==null;){if(b.callback===null)r(d);else if(b.startTime<=S)r(d),b.sortIndex=b.expirationTime,t(s,b);else break;b=n(d)}}function h(S){if(k=!1,f(S),!_)if(n(s)!==null)_=!0,we(y);else{var b=n(d);b!==null&&mn(h,b.startTime-S)}}function y(S,b){_=!1,k&&(k=!1,p(P),P=-1),w=!0;var z=g;try{for(f(b),m=n(s);m!==null&&(!(m.expirationTime>b)||S&&!j());){var Y=m.callback;if(typeof Y=="function"){m.callback=null,g=m.priorityLevel;var ee=Y(m.expirationTime<=b);b=e.unstable_now(),typeof ee=="function"?m.callback=ee:m===n(s)&&r(s),f(b)}else r(s);m=n(s)}if(m!==null)var lr=!0;else{var kt=n(d);kt!==null&&mn(h,kt.startTime-b),lr=!1}return lr}finally{m=null,g=z,w=!1}}var E=!1,C=null,P=-1,U=5,L=-1;function j(){return!(e.unstable_now()-L<U)}function I(){if(C!==null){var S=e.unstable_now();L=S;var b=!0;try{b=C(!0,S)}finally{b?O():(E=!1,C=null)}}else E=!1}var O;if(typeof c=="function")O=function(){c(I)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,X=ie.port2;ie.port1.onmessage=I,O=function(){X.postMessage(null)}}else O=function(){D(I,0)};function we(S){C=S,E||(E=!0,O())}function mn(S,b){P=D(function(){S(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){_||w||(_=!0,we(y))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(S){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var z=g;g=b;try{return S()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,b){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var z=g;g=S;try{return b()}finally{g=z}},e.unstable_scheduleCallback=function(S,b,z){var Y=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Y+z:Y):z=Y,S){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=z+ee,S={id:v++,callback:b,priorityLevel:S,startTime:z,expirationTime:ee,sortIndex:-1},z>Y?(S.sortIndex=z,t(d,S),n(s)===null&&S===n(d)&&(k?(p(P),P=-1):k=!0,mn(h,z-Y))):(S.sortIndex=ee,t(s,S),_||w||(_=!0,we(y))),S},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(S){var b=g;return function(){var z=g;g=b;try{return S.apply(this,arguments)}finally{g=z}}}})(ss);as.exports=ss;var Lc=as.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=T,Ee=Lc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var us=new Set,On={};function Ot(e,t){rn(e,t),rn(e+"Capture",t)}function rn(e,t){for(On[e]=t,e=0;e<t.length;e++)us.add(t[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vi={},Bi={};function Mc(e){return Zl.call(Bi,e)?!0:Zl.call(Vi,e)?!1:Ic.test(e)?Bi[e]=!0:(Vi[e]=!0,!1)}function Oc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dc(e,t,n,r){if(t===null||typeof t>"u"||Oc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ko=/[\-:]([a-z])/g;function Xo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ko,Xo);oe[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ko,Xo);oe[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ko,Xo);oe[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zo(e,t,n,r){var l=oe.hasOwnProperty(t)?oe[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dc(t,n,l,r)&&(n=null),r||l===null?Mc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ar=Symbol.for("react.element"),At=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),Jo=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),cs=Symbol.for("react.provider"),ds=Symbol.for("react.context"),qo=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),eo=Symbol.for("react.suspense_list"),ei=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),ps=Symbol.for("react.offscreen"),Wi=Symbol.iterator;function hn(e){return e===null||typeof e!="object"?null:(e=Wi&&e[Wi]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Nl;function Sn(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var Cl=!1;function jl(e,t){if(!e||Cl)return"";Cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function Fc(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function to(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case At:return"Portal";case Jl:return"Profiler";case Jo:return"StrictMode";case ql:return"Suspense";case eo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ds:return(e.displayName||"Context")+".Consumer";case cs:return(e._context.displayName||"Context")+".Provider";case qo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ei:return t=e.displayName||null,t!==null?t:to(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return to(e(t))}catch{}}return null}function Ac(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return to(t);case 8:return t===Jo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uc(e){var t=fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sr(e){e._valueTracker||(e._valueTracker=Uc(e))}function ms(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function no(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hs(e,t){t=t.checked,t!=null&&Zo(e,"checked",t,!1)}function ro(e,t){hs(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lo(e,t.type,n):t.hasOwnProperty("defaultValue")&&lo(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function lo(e,t,n){(t!=="number"||Or(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(En(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function gs(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function io(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ur,ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$c=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){$c.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function xs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=xs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Vc=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ao(e,t){if(t){if(Vc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function so(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uo=null;function ti(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var co=null,Jt=null,qt=null;function Ki(e){if(e=nr(e)){if(typeof co!="function")throw Error(x(280));var t=e.stateNode;t&&(t=dl(t),co(e.stateNode,e.type,t))}}function _s(e){Jt?qt?qt.push(e):qt=[e]:Jt=e}function ks(){if(Jt){var e=Jt,t=qt;if(qt=Jt=null,Ki(e),t)for(e=0;e<t.length;e++)Ki(t[e])}}function Ss(e,t){return e(t)}function Es(){}var Pl=!1;function Ns(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return Ss(e,t,n)}finally{Pl=!1,(Jt!==null||qt!==null)&&(Es(),ks())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var po=!1;if(Ze)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){po=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{po=!1}function Bc(e,t,n,r,l,o,i,a,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var Pn=!1,Dr=null,Fr=!1,fo=null,Wc={onError:function(e){Pn=!0,Dr=e}};function Hc(e,t,n,r,l,o,i,a,s){Pn=!1,Dr=null,Bc.apply(Wc,arguments)}function Qc(e,t,n,r,l,o,i,a,s){if(Hc.apply(this,arguments),Pn){if(Pn){var d=Dr;Pn=!1,Dr=null}else throw Error(x(198));Fr||(Fr=!0,fo=d)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xi(e){if(Dt(e)!==e)throw Error(x(188))}function Gc(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Xi(l),e;if(o===r)return Xi(l),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function js(e){return e=Gc(e),e!==null?Ps(e):null}function Ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ps(e);if(t!==null)return t;e=e.sibling}return null}var Ts=Ee.unstable_scheduleCallback,Zi=Ee.unstable_cancelCallback,Yc=Ee.unstable_shouldYield,Kc=Ee.unstable_requestPaint,K=Ee.unstable_now,Xc=Ee.unstable_getCurrentPriorityLevel,ni=Ee.unstable_ImmediatePriority,bs=Ee.unstable_UserBlockingPriority,Ar=Ee.unstable_NormalPriority,Zc=Ee.unstable_LowPriority,zs=Ee.unstable_IdlePriority,al=null,We=null;function Jc(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(al,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:td,qc=Math.log,ed=Math.LN2;function td(e){return e>>>=0,e===0?32:31-(qc(e)/ed|0)|0}var cr=64,dr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=Nn(a):(o&=i,o!==0&&(r=Nn(o)))}else i=n&~l,i!==0?r=Nn(i):o!==0&&(r=Nn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),l=1<<n,r|=e[n],t&=~l;return r}function nd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Fe(o),a=1<<i,s=l[i];s===-1?(!(a&n)||a&r)&&(l[i]=nd(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function mo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ls(){var e=cr;return cr<<=1,!(cr&4194240)&&(cr=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function er(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function ld(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Fe(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ri(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function Rs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Is,li,Ms,Os,Ds,ho=!1,pr=[],ut=null,ct=null,dt=null,An=new Map,Un=new Map,ot=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ji(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function vn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=nr(t),t!==null&&li(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function id(e,t,n,r,l){switch(t){case"focusin":return ut=vn(ut,e,t,n,r,l),!0;case"dragenter":return ct=vn(ct,e,t,n,r,l),!0;case"mouseover":return dt=vn(dt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return An.set(o,vn(An.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Un.set(o,vn(Un.get(o)||null,e,t,n,r,l)),!0}return!1}function Fs(e){var t=Ct(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Cs(n),t!==null){e.blockedOn=t,Ds(e.priority,function(){Ms(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uo=r,n.target.dispatchEvent(r),uo=null}else return t=nr(n),t!==null&&li(t),e.blockedOn=n,!1;t.shift()}return!0}function qi(e,t,n){Cr(e)&&n.delete(t)}function ad(){ho=!1,ut!==null&&Cr(ut)&&(ut=null),ct!==null&&Cr(ct)&&(ct=null),dt!==null&&Cr(dt)&&(dt=null),An.forEach(qi),Un.forEach(qi)}function yn(e,t){e.blockedOn===t&&(e.blockedOn=null,ho||(ho=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,ad)))}function $n(e){function t(l){return yn(l,e)}if(0<pr.length){yn(pr[0],e);for(var n=1;n<pr.length;n++){var r=pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&yn(ut,e),ct!==null&&yn(ct,e),dt!==null&&yn(dt,e),An.forEach(t),Un.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)Fs(n),n.blockedOn===null&&ot.shift()}var en=tt.ReactCurrentBatchConfig,$r=!0;function sd(e,t,n,r){var l=F,o=en.transition;en.transition=null;try{F=1,oi(e,t,n,r)}finally{F=l,en.transition=o}}function ud(e,t,n,r){var l=F,o=en.transition;en.transition=null;try{F=4,oi(e,t,n,r)}finally{F=l,en.transition=o}}function oi(e,t,n,r){if($r){var l=go(e,t,n,r);if(l===null)Al(e,t,r,Vr,n),Ji(e,r);else if(id(l,e,t,n,r))r.stopPropagation();else if(Ji(e,r),t&4&&-1<od.indexOf(e)){for(;l!==null;){var o=nr(l);if(o!==null&&Is(o),o=go(e,t,n,r),o===null&&Al(e,t,r,Vr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Al(e,t,r,null,n)}}var Vr=null;function go(e,t,n,r){if(Vr=null,e=ti(r),e=Ct(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vr=e,null}function As(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xc()){case ni:return 1;case bs:return 4;case Ar:case Zc:return 16;case zs:return 536870912;default:return 16}default:return 16}}var at=null,ii=null,jr=null;function Us(){if(jr)return jr;var e,t=ii,n=t.length,r,l="value"in at?at.value:at.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return jr=l.slice(e,1<r?1-r:void 0)}function Pr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function ea(){return!1}function Ce(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fr:ea,this.isPropagationStopped=ea,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ai=Ce(pn),tr=Q({},pn,{view:0,detail:0}),cd=Ce(tr),bl,zl,xn,sl=Q({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(bl=e.screenX-xn.screenX,zl=e.screenY-xn.screenY):zl=bl=0,xn=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),ta=Ce(sl),dd=Q({},sl,{dataTransfer:0}),pd=Ce(dd),fd=Q({},tr,{relatedTarget:0}),Ll=Ce(fd),md=Q({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=Ce(md),gd=Q({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vd=Ce(gd),yd=Q({},pn,{data:0}),na=Ce(yd),xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_d[e])?!!t[e]:!1}function si(){return kd}var Sd=Q({},tr,{key:function(e){if(e.key){var t=xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:si,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ed=Ce(Sd),Nd=Q({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ra=Ce(Nd),Cd=Q({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:si}),jd=Ce(Cd),Pd=Q({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=Ce(Pd),bd=Q({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=Ce(bd),Ld=[9,13,27,32],ui=Ze&&"CompositionEvent"in window,Tn=null;Ze&&"documentMode"in document&&(Tn=document.documentMode);var Rd=Ze&&"TextEvent"in window&&!Tn,$s=Ze&&(!ui||Tn&&8<Tn&&11>=Tn),la=" ",oa=!1;function Vs(e,t){switch(e){case"keyup":return Ld.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Id(e,t){switch(e){case"compositionend":return Bs(t);case"keypress":return t.which!==32?null:(oa=!0,la);case"textInput":return e=t.data,e===la&&oa?null:e;default:return null}}function Md(e,t){if($t)return e==="compositionend"||!ui&&Vs(e,t)?(e=Us(),jr=ii=at=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $s&&t.locale!=="ko"?null:t.data;default:return null}}var Od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Od[e.type]:t==="textarea"}function Ws(e,t,n,r){_s(r),t=Br(t,"onChange"),0<t.length&&(n=new ai("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var bn=null,Vn=null;function Dd(e){tu(e,0)}function ul(e){var t=Wt(e);if(ms(t))return e}function Fd(e,t){if(e==="change")return t}var Hs=!1;if(Ze){var Rl;if(Ze){var Il="oninput"in document;if(!Il){var aa=document.createElement("div");aa.setAttribute("oninput","return;"),Il=typeof aa.oninput=="function"}Rl=Il}else Rl=!1;Hs=Rl&&(!document.documentMode||9<document.documentMode)}function sa(){bn&&(bn.detachEvent("onpropertychange",Qs),Vn=bn=null)}function Qs(e){if(e.propertyName==="value"&&ul(Vn)){var t=[];Ws(t,Vn,e,ti(e)),Ns(Dd,t)}}function Ad(e,t,n){e==="focusin"?(sa(),bn=t,Vn=n,bn.attachEvent("onpropertychange",Qs)):e==="focusout"&&sa()}function Ud(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Vn)}function $d(e,t){if(e==="click")return ul(t)}function Vd(e,t){if(e==="input"||e==="change")return ul(t)}function Bd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:Bd;function Bn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Zl.call(t,l)||!Ue(e[l],t[l]))return!1}return!0}function ua(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ca(e,t){var n=ua(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ua(n)}}function Gs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ys(){for(var e=window,t=Or();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Or(e.document)}return t}function ci(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wd(e){var t=Ys(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gs(n.ownerDocument.documentElement,n)){if(r!==null&&ci(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ca(n,o);var i=ca(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hd=Ze&&"documentMode"in document&&11>=document.documentMode,Vt=null,vo=null,zn=null,yo=!1;function da(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yo||Vt==null||Vt!==Or(r)||(r=Vt,"selectionStart"in r&&ci(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&Bn(zn,r)||(zn=r,r=Br(vo,"onSelect"),0<r.length&&(t=new ai("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionend:mr("Transition","TransitionEnd")},Ml={},Ks={};Ze&&(Ks=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function cl(e){if(Ml[e])return Ml[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ks)return Ml[e]=t[n];return e}var Xs=cl("animationend"),Zs=cl("animationiteration"),Js=cl("animationstart"),qs=cl("transitionend"),eu=new Map,pa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){eu.set(e,t),Ot(t,[e])}for(var Ol=0;Ol<pa.length;Ol++){var Dl=pa[Ol],Qd=Dl.toLowerCase(),Gd=Dl[0].toUpperCase()+Dl.slice(1);xt(Qd,"on"+Gd)}xt(Xs,"onAnimationEnd");xt(Zs,"onAnimationIteration");xt(Js,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(qs,"onTransitionEnd");rn("onMouseEnter",["mouseout","mouseover"]);rn("onMouseLeave",["mouseout","mouseover"]);rn("onPointerEnter",["pointerout","pointerover"]);rn("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function fa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qc(r,t,void 0,e),e.currentTarget=null}function tu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,d=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;fa(l,a,d),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,d=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;fa(l,a,d),o=s}}}if(Fr)throw e=fo,Fr=!1,fo=null,e}function $(e,t){var n=t[So];n===void 0&&(n=t[So]=new Set);var r=e+"__bubble";n.has(r)||(nu(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),nu(n,e,r,t)}var hr="_reactListening"+Math.random().toString(36).slice(2);function Wn(e){if(!e[hr]){e[hr]=!0,us.forEach(function(n){n!=="selectionchange"&&(Yd.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hr]||(t[hr]=!0,Fl("selectionchange",!1,t))}}function nu(e,t,n,r){switch(As(t)){case 1:var l=sd;break;case 4:l=ud;break;default:l=oi}n=l.bind(null,t,n,e),l=void 0,!po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Al(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=Ct(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}Ns(function(){var d=o,v=ti(n),m=[];e:{var g=eu.get(e);if(g!==void 0){var w=ai,_=e;switch(e){case"keypress":if(Pr(n)===0)break e;case"keydown":case"keyup":w=Ed;break;case"focusin":_="focus",w=Ll;break;case"focusout":_="blur",w=Ll;break;case"beforeblur":case"afterblur":w=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=jd;break;case Xs:case Zs:case Js:w=hd;break;case qs:w=Td;break;case"scroll":w=cd;break;case"wheel":w=zd;break;case"copy":case"cut":case"paste":w=vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ra}var k=(t&4)!==0,D=!k&&e==="scroll",p=k?g!==null?g+"Capture":null:g;k=[];for(var c=d,f;c!==null;){f=c;var h=f.stateNode;if(f.tag===5&&h!==null&&(f=h,p!==null&&(h=Fn(c,p),h!=null&&k.push(Hn(c,h,f)))),D)break;c=c.return}0<k.length&&(g=new w(g,_,null,n,v),m.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==uo&&(_=n.relatedTarget||n.fromElement)&&(Ct(_)||_[Je]))break e;if((w||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,w?(_=n.relatedTarget||n.toElement,w=d,_=_?Ct(_):null,_!==null&&(D=Dt(_),_!==D||_.tag!==5&&_.tag!==6)&&(_=null)):(w=null,_=d),w!==_)){if(k=ta,h="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=ra,h="onPointerLeave",p="onPointerEnter",c="pointer"),D=w==null?g:Wt(w),f=_==null?g:Wt(_),g=new k(h,c+"leave",w,n,v),g.target=D,g.relatedTarget=f,h=null,Ct(v)===d&&(k=new k(p,c+"enter",_,n,v),k.target=f,k.relatedTarget=D,h=k),D=h,w&&_)t:{for(k=w,p=_,c=0,f=k;f;f=Ft(f))c++;for(f=0,h=p;h;h=Ft(h))f++;for(;0<c-f;)k=Ft(k),c--;for(;0<f-c;)p=Ft(p),f--;for(;c--;){if(k===p||p!==null&&k===p.alternate)break t;k=Ft(k),p=Ft(p)}k=null}else k=null;w!==null&&ma(m,g,w,k,!1),_!==null&&D!==null&&ma(m,D,_,k,!0)}}e:{if(g=d?Wt(d):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var y=Fd;else if(ia(g))if(Hs)y=Vd;else{y=Ud;var E=Ad}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(y=$d);if(y&&(y=y(e,d))){Ws(m,y,n,v);break e}E&&E(e,g,d),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&lo(g,"number",g.value)}switch(E=d?Wt(d):window,e){case"focusin":(ia(E)||E.contentEditable==="true")&&(Vt=E,vo=d,zn=null);break;case"focusout":zn=vo=Vt=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,da(m,n,v);break;case"selectionchange":if(Hd)break;case"keydown":case"keyup":da(m,n,v)}var C;if(ui)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $t?Vs(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&($s&&n.locale!=="ko"&&($t||P!=="onCompositionStart"?P==="onCompositionEnd"&&$t&&(C=Us()):(at=v,ii="value"in at?at.value:at.textContent,$t=!0)),E=Br(d,P),0<E.length&&(P=new na(P,e,null,n,v),m.push({event:P,listeners:E}),C?P.data=C:(C=Bs(n),C!==null&&(P.data=C)))),(C=Rd?Id(e,n):Md(e,n))&&(d=Br(d,"onBeforeInput"),0<d.length&&(v=new na("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:d}),v.data=C))}tu(m,t)})}function Hn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Fn(e,n),o!=null&&r.unshift(Hn(e,o,l)),o=Fn(e,t),o!=null&&r.push(Hn(e,o,l))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ma(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,d=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&d!==null&&(a=d,l?(s=Fn(n,o),s!=null&&i.unshift(Hn(n,s,a))):l||(s=Fn(n,o),s!=null&&i.push(Hn(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Kd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function ha(e){return(typeof e=="string"?e:""+e).replace(Kd,`
`).replace(Xd,"")}function gr(e,t,n){if(t=ha(t),ha(e)!==t&&n)throw Error(x(425))}function Wr(){}var xo=null,wo=null;function _o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ko=typeof setTimeout=="function"?setTimeout:void 0,Zd=typeof clearTimeout=="function"?clearTimeout:void 0,ga=typeof Promise=="function"?Promise:void 0,Jd=typeof queueMicrotask=="function"?queueMicrotask:typeof ga<"u"?function(e){return ga.resolve(null).then(e).catch(qd)}:ko;function qd(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);$n(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function va(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),Be="__reactFiber$"+fn,Qn="__reactProps$"+fn,Je="__reactContainer$"+fn,So="__reactEvents$"+fn,ep="__reactListeners$"+fn,tp="__reactHandles$"+fn;function Ct(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=va(e);e!==null;){if(n=e[Be])return n;e=va(e)}return t}e=n,n=e.parentNode}return null}function nr(e){return e=e[Be]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function dl(e){return e[Qn]||null}var Eo=[],Ht=-1;function wt(e){return{current:e}}function V(e){0>Ht||(e.current=Eo[Ht],Eo[Ht]=null,Ht--)}function A(e,t){Ht++,Eo[Ht]=e.current,e.current=t}var yt={},ce=wt(yt),ve=wt(!1),zt=yt;function ln(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ye(e){return e=e.childContextTypes,e!=null}function Hr(){V(ve),V(ce)}function ya(e,t,n){if(ce.current!==yt)throw Error(x(168));A(ce,t),A(ve,n)}function ru(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,Ac(e)||"Unknown",l));return Q({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,zt=ce.current,A(ce,e),A(ve,ve.current),!0}function xa(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=ru(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,V(ve),V(ce),A(ce,e)):V(ve),A(ve,n)}var Ge=null,pl=!1,$l=!1;function lu(e){Ge===null?Ge=[e]:Ge.push(e)}function np(e){pl=!0,lu(e)}function _t(){if(!$l&&Ge!==null){$l=!0;var e=0,t=F;try{var n=Ge;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,pl=!1}catch(l){throw Ge!==null&&(Ge=Ge.slice(e+1)),Ts(ni,_t),l}finally{F=t,$l=!1}}return null}var Qt=[],Gt=0,Gr=null,Yr=0,Pe=[],Te=0,Lt=null,Ye=1,Ke="";function Et(e,t){Qt[Gt++]=Yr,Qt[Gt++]=Gr,Gr=e,Yr=t}function ou(e,t,n){Pe[Te++]=Ye,Pe[Te++]=Ke,Pe[Te++]=Lt,Lt=e;var r=Ye;e=Ke;var l=32-Fe(r)-1;r&=~(1<<l),n+=1;var o=32-Fe(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ye=1<<32-Fe(t)+l|n<<l|r,Ke=o+e}else Ye=1<<o|n<<l|r,Ke=e}function di(e){e.return!==null&&(Et(e,1),ou(e,1,0))}function pi(e){for(;e===Gr;)Gr=Qt[--Gt],Qt[Gt]=null,Yr=Qt[--Gt],Qt[Gt]=null;for(;e===Lt;)Lt=Pe[--Te],Pe[Te]=null,Ke=Pe[--Te],Pe[Te]=null,Ye=Pe[--Te],Pe[Te]=null}var Se=null,ke=null,B=!1,De=null;function iu(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,ke=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:Ye,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,ke=null,!0):!1;default:return!1}}function No(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Co(e){if(B){var t=ke;if(t){var n=t;if(!wa(e,t)){if(No(e))throw Error(x(418));t=pt(n.nextSibling);var r=Se;t&&wa(e,t)?iu(r,n):(e.flags=e.flags&-4097|2,B=!1,Se=e)}}else{if(No(e))throw Error(x(418));e.flags=e.flags&-4097|2,B=!1,Se=e}}}function _a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function vr(e){if(e!==Se)return!1;if(!B)return _a(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_o(e.type,e.memoizedProps)),t&&(t=ke)){if(No(e))throw au(),Error(x(418));for(;t;)iu(e,t),t=pt(t.nextSibling)}if(_a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=Se?pt(e.stateNode.nextSibling):null;return!0}function au(){for(var e=ke;e;)e=pt(e.nextSibling)}function on(){ke=Se=null,B=!1}function fi(e){De===null?De=[e]:De.push(e)}var rp=tt.ReactCurrentBatchConfig;function wn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function yr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ka(e){var t=e._init;return t(e._payload)}function su(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=gt(p,c),p.index=0,p.sibling=null,p}function o(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,f,h){return c===null||c.tag!==6?(c=Yl(f,p.mode,h),c.return=p,c):(c=l(c,f),c.return=p,c)}function s(p,c,f,h){var y=f.type;return y===Ut?v(p,c,f.props.children,h,f.key):c!==null&&(c.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===rt&&ka(y)===c.type)?(h=l(c,f.props),h.ref=wn(p,c,f),h.return=p,h):(h=Mr(f.type,f.key,f.props,null,p.mode,h),h.ref=wn(p,c,f),h.return=p,h)}function d(p,c,f,h){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Kl(f,p.mode,h),c.return=p,c):(c=l(c,f.children||[]),c.return=p,c)}function v(p,c,f,h,y){return c===null||c.tag!==7?(c=bt(f,p.mode,h,y),c.return=p,c):(c=l(c,f),c.return=p,c)}function m(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Yl(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ar:return f=Mr(c.type,c.key,c.props,null,p.mode,f),f.ref=wn(p,null,c),f.return=p,f;case At:return c=Kl(c,p.mode,f),c.return=p,c;case rt:var h=c._init;return m(p,h(c._payload),f)}if(En(c)||hn(c))return c=bt(c,p.mode,f,null),c.return=p,c;yr(p,c)}return null}function g(p,c,f,h){var y=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return y!==null?null:a(p,c,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ar:return f.key===y?s(p,c,f,h):null;case At:return f.key===y?d(p,c,f,h):null;case rt:return y=f._init,g(p,c,y(f._payload),h)}if(En(f)||hn(f))return y!==null?null:v(p,c,f,h,null);yr(p,f)}return null}function w(p,c,f,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return p=p.get(f)||null,a(c,p,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ar:return p=p.get(h.key===null?f:h.key)||null,s(c,p,h,y);case At:return p=p.get(h.key===null?f:h.key)||null,d(c,p,h,y);case rt:var E=h._init;return w(p,c,f,E(h._payload),y)}if(En(h)||hn(h))return p=p.get(f)||null,v(c,p,h,y,null);yr(c,h)}return null}function _(p,c,f,h){for(var y=null,E=null,C=c,P=c=0,U=null;C!==null&&P<f.length;P++){C.index>P?(U=C,C=null):U=C.sibling;var L=g(p,C,f[P],h);if(L===null){C===null&&(C=U);break}e&&C&&L.alternate===null&&t(p,C),c=o(L,c,P),E===null?y=L:E.sibling=L,E=L,C=U}if(P===f.length)return n(p,C),B&&Et(p,P),y;if(C===null){for(;P<f.length;P++)C=m(p,f[P],h),C!==null&&(c=o(C,c,P),E===null?y=C:E.sibling=C,E=C);return B&&Et(p,P),y}for(C=r(p,C);P<f.length;P++)U=w(C,p,P,f[P],h),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?P:U.key),c=o(U,c,P),E===null?y=U:E.sibling=U,E=U);return e&&C.forEach(function(j){return t(p,j)}),B&&Et(p,P),y}function k(p,c,f,h){var y=hn(f);if(typeof y!="function")throw Error(x(150));if(f=y.call(f),f==null)throw Error(x(151));for(var E=y=null,C=c,P=c=0,U=null,L=f.next();C!==null&&!L.done;P++,L=f.next()){C.index>P?(U=C,C=null):U=C.sibling;var j=g(p,C,L.value,h);if(j===null){C===null&&(C=U);break}e&&C&&j.alternate===null&&t(p,C),c=o(j,c,P),E===null?y=j:E.sibling=j,E=j,C=U}if(L.done)return n(p,C),B&&Et(p,P),y;if(C===null){for(;!L.done;P++,L=f.next())L=m(p,L.value,h),L!==null&&(c=o(L,c,P),E===null?y=L:E.sibling=L,E=L);return B&&Et(p,P),y}for(C=r(p,C);!L.done;P++,L=f.next())L=w(C,p,P,L.value,h),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?P:L.key),c=o(L,c,P),E===null?y=L:E.sibling=L,E=L);return e&&C.forEach(function(I){return t(p,I)}),B&&Et(p,P),y}function D(p,c,f,h){if(typeof f=="object"&&f!==null&&f.type===Ut&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ar:e:{for(var y=f.key,E=c;E!==null;){if(E.key===y){if(y=f.type,y===Ut){if(E.tag===7){n(p,E.sibling),c=l(E,f.props.children),c.return=p,p=c;break e}}else if(E.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===rt&&ka(y)===E.type){n(p,E.sibling),c=l(E,f.props),c.ref=wn(p,E,f),c.return=p,p=c;break e}n(p,E);break}else t(p,E);E=E.sibling}f.type===Ut?(c=bt(f.props.children,p.mode,h,f.key),c.return=p,p=c):(h=Mr(f.type,f.key,f.props,null,p.mode,h),h.ref=wn(p,c,f),h.return=p,p=h)}return i(p);case At:e:{for(E=f.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=l(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Kl(f,p.mode,h),c.return=p,p=c}return i(p);case rt:return E=f._init,D(p,c,E(f._payload),h)}if(En(f))return _(p,c,f,h);if(hn(f))return k(p,c,f,h);yr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,f),c.return=p,p=c):(n(p,c),c=Yl(f,p.mode,h),c.return=p,p=c),i(p)):n(p,c)}return D}var an=su(!0),uu=su(!1),Kr=wt(null),Xr=null,Yt=null,mi=null;function hi(){mi=Yt=Xr=null}function gi(e){var t=Kr.current;V(Kr),e._currentValue=t}function jo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tn(e,t){Xr=e,mi=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(mi!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(Xr===null)throw Error(x(308));Yt=e,Xr.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var jt=null;function vi(e){jt===null?jt=[e]:jt.push(e)}function cu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,vi(t)):(n.next=l.next,l.next=n),t.interleaved=n,qe(e,r)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,qe(e,n)}return l=r.interleaved,l===null?(t.next=t,vi(r)):(t.next=l.next,l.next=t),r.interleaved=t,qe(e,n)}function Tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ri(e,n)}}function Sa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zr(e,t,n,r){var l=e.updateQueue;lt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,d=s.next;s.next=null,i===null?o=d:i.next=d,i=s;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==i&&(a===null?v.firstBaseUpdate=d:a.next=d,v.lastBaseUpdate=s))}if(o!==null){var m=l.baseState;i=0,v=d=s=null,a=o;do{var g=a.lane,w=a.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,k=a;switch(g=t,w=n,k.tag){case 1:if(_=k.payload,typeof _=="function"){m=_.call(w,m,g);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=k.payload,g=typeof _=="function"?_.call(w,m,g):_,g==null)break e;m=Q({},m,g);break e;case 2:lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(d=v=w,s=m):v=v.next=w,i|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(v===null&&(s=m),l.baseState=s,l.firstBaseUpdate=d,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);It|=i,e.lanes=i,e.memoizedState=m}}function Ea(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var rr={},He=wt(rr),Gn=wt(rr),Yn=wt(rr);function Pt(e){if(e===rr)throw Error(x(174));return e}function xi(e,t){switch(A(Yn,t),A(Gn,e),A(He,rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:io(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=io(t,e)}V(He),A(He,t)}function sn(){V(He),V(Gn),V(Yn)}function pu(e){Pt(Yn.current);var t=Pt(He.current),n=io(t,e.type);t!==n&&(A(Gn,e),A(He,n))}function wi(e){Gn.current===e&&(V(He),V(Gn))}var W=wt(0);function Jr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function _i(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var br=tt.ReactCurrentDispatcher,Bl=tt.ReactCurrentBatchConfig,Rt=0,H=null,J=null,te=null,qr=!1,Ln=!1,Kn=0,lp=0;function ae(){throw Error(x(321))}function ki(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Si(e,t,n,r,l,o){if(Rt=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,br.current=e===null||e.memoizedState===null?sp:up,e=n(r,l),Ln){o=0;do{if(Ln=!1,Kn=0,25<=o)throw Error(x(301));o+=1,te=J=null,t.updateQueue=null,br.current=cp,e=n(r,l)}while(Ln)}if(br.current=el,t=J!==null&&J.next!==null,Rt=0,te=J=H=null,qr=!1,t)throw Error(x(300));return e}function Ei(){var e=Kn!==0;return Kn=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?H.memoizedState=te=e:te=te.next=e,te}function Re(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=te===null?H.memoizedState:te.next;if(t!==null)te=t,J=e;else{if(e===null)throw Error(x(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},te===null?H.memoizedState=te=e:te=te.next=e}return te}function Xn(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=Re(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,d=o;do{var v=d.lane;if((Rt&v)===v)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(a=s=m,i=r):s=s.next=m,H.lanes|=v,It|=v}d=d.next}while(d!==null&&d!==o);s===null?i=r:s.next=a,Ue(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,H.lanes|=o,It|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=Re(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ue(o,t.memoizedState)||(ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fu(){}function mu(e,t){var n=H,r=Re(),l=t(),o=!Ue(r.memoizedState,l);if(o&&(r.memoizedState=l,ge=!0),r=r.queue,Ni(vu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Zn(9,gu.bind(null,n,r,l,t),void 0,null),ne===null)throw Error(x(349));Rt&30||hu(n,t,l)}return l}function hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gu(e,t,n,r){t.value=n,t.getSnapshot=r,yu(t)&&xu(e)}function vu(e,t,n){return n(function(){yu(t)&&xu(e)})}function yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function xu(e){var t=qe(e,1);t!==null&&Ae(t,e,1,-1)}function Na(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=ap.bind(null,H,e),[t.memoizedState,e]}function Zn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wu(){return Re().memoizedState}function zr(e,t,n,r){var l=Ve();H.flags|=e,l.memoizedState=Zn(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var l=Re();r=r===void 0?null:r;var o=void 0;if(J!==null){var i=J.memoizedState;if(o=i.destroy,r!==null&&ki(r,i.deps)){l.memoizedState=Zn(t,n,o,r);return}}H.flags|=e,l.memoizedState=Zn(1|t,n,o,r)}function Ca(e,t){return zr(8390656,8,e,t)}function Ni(e,t){return fl(2048,8,e,t)}function _u(e,t){return fl(4,2,e,t)}function ku(e,t){return fl(4,4,e,t)}function Su(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eu(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,Su.bind(null,t,e),n)}function Ci(){}function Nu(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ki(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cu(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ki(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ju(e,t,n){return Rt&21?(Ue(n,t)||(n=Ls(),H.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function op(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),t()}finally{F=n,Bl.transition=r}}function Pu(){return Re().memoizedState}function ip(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tu(e))bu(t,n);else if(n=cu(e,t,n,r),n!==null){var l=pe();Ae(n,e,r,l),zu(n,t,r)}}function ap(e,t,n){var r=ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tu(e))bu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Ue(a,i)){var s=t.interleaved;s===null?(l.next=l,vi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=cu(e,t,l,r),n!==null&&(l=pe(),Ae(n,e,r,l),zu(n,t,r))}}function Tu(e){var t=e.alternate;return e===H||t!==null&&t===H}function bu(e,t){Ln=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ri(e,n)}}var el={readContext:Le,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},sp={readContext:Le,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:Ca,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zr(4194308,4,Su.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return zr(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ip.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Na,useDebugValue:Ci,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Na(!1),t=e[0];return e=op.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Ve();if(B){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ne===null)throw Error(x(349));Rt&30||hu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ca(vu.bind(null,r,o,e),[e]),r.flags|=2048,Zn(9,gu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ve(),t=ne.identifierPrefix;if(B){var n=Ke,r=Ye;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},up={readContext:Le,useCallback:Nu,useContext:Le,useEffect:Ni,useImperativeHandle:Eu,useInsertionEffect:_u,useLayoutEffect:ku,useMemo:Cu,useReducer:Wl,useRef:wu,useState:function(){return Wl(Xn)},useDebugValue:Ci,useDeferredValue:function(e){var t=Re();return ju(t,J.memoizedState,e)},useTransition:function(){var e=Wl(Xn)[0],t=Re().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:mu,useId:Pu,unstable_isNewReconciler:!1},cp={readContext:Le,useCallback:Nu,useContext:Le,useEffect:Ni,useImperativeHandle:Eu,useInsertionEffect:_u,useLayoutEffect:ku,useMemo:Cu,useReducer:Hl,useRef:wu,useState:function(){return Hl(Xn)},useDebugValue:Ci,useDeferredValue:function(e){var t=Re();return J===null?t.memoizedState=e:ju(t,J.memoizedState,e)},useTransition:function(){var e=Hl(Xn)[0],t=Re().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:mu,useId:Pu,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Po(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ml={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),l=ht(e),o=Xe(r,l);o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Ae(t,e,l,r),Tr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),l=ht(e),o=Xe(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Ae(t,e,l,r),Tr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=ht(e),l=Xe(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(Ae(t,e,r,n),Tr(t,e,r))}};function ja(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Bn(n,r)||!Bn(l,o):!0}function Lu(e,t,n){var r=!1,l=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=Le(o):(l=ye(t)?zt:ce.current,r=t.contextTypes,o=(r=r!=null)?ln(e,l):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function To(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},yi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Le(o):(o=ye(t)?zt:ce.current,l.context=ln(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Po(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ml.enqueueReplaceState(l,l.state,null),Zr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function un(e,t){try{var n="",r=t;do n+=Fc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dp=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,Uo=r),bo(e,t)},n}function Iu(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){bo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bo(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ta(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Np.bind(null,e,t,n),t.then(e,e))}function ba(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function za(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var pp=tt.ReactCurrentOwner,ge=!1;function de(e,t,n,r){t.child=e===null?uu(t,null,n,r):an(t,e.child,n,r)}function La(e,t,n,r,l){n=n.render;var o=t.ref;return tn(t,l),r=Si(e,t,n,r,o,l),n=Ei(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(B&&n&&di(t),t.flags|=1,de(e,t,r,l),t.child)}function Ra(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ii(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mu(e,t,o,r,l)):(e=Mr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Bn,n(i,r)&&e.ref===t.ref)return et(e,t,l)}return t.flags|=1,e=gt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Bn(o,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,et(e,t,l)}return zo(e,t,n,r,l)}function Ou(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(Xt,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(Xt,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,A(Xt,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,A(Xt,_e),_e|=r;return de(e,t,l,n),t.child}function Du(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zo(e,t,n,r,l){var o=ye(n)?zt:ce.current;return o=ln(t,o),tn(t,l),n=Si(e,t,n,r,o,l),r=Ei(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(B&&r&&di(t),t.flags|=1,de(e,t,n,l),t.child)}function Ia(e,t,n,r,l){if(ye(n)){var o=!0;Qr(t)}else o=!1;if(tn(t,l),t.stateNode===null)Lr(e,t),Lu(t,n,r),To(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Le(d):(d=ye(n)?zt:ce.current,d=ln(t,d));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==d)&&Pa(t,i,r,d),lt=!1;var g=t.memoizedState;i.state=g,Zr(t,r,i,l),s=t.memoizedState,a!==r||g!==s||ve.current||lt?(typeof v=="function"&&(Po(t,n,v,r),s=t.memoizedState),(a=lt||ja(t,n,a,r,g,s,d))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=d,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,du(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Me(t.type,a),i.props=d,m=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Le(s):(s=ye(n)?zt:ce.current,s=ln(t,s));var w=n.getDerivedStateFromProps;(v=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==m||g!==s)&&Pa(t,i,r,s),lt=!1,g=t.memoizedState,i.state=g,Zr(t,r,i,l);var _=t.memoizedState;a!==m||g!==_||ve.current||lt?(typeof w=="function"&&(Po(t,n,w,r),_=t.memoizedState),(d=lt||ja(t,n,d,r,g,_,s)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,_,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,_,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),i.props=r,i.state=_,i.context=s,r=d):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Lo(e,t,n,r,o,l)}function Lo(e,t,n,r,l,o){Du(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&xa(t,n,!1),et(e,t,o);r=t.stateNode,pp.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=an(t,e.child,null,o),t.child=an(t,null,a,o)):de(e,t,a,o),t.memoizedState=r.state,l&&xa(t,n,!0),t.child}function Fu(e){var t=e.stateNode;t.pendingContext?ya(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ya(e,t.context,!1),xi(e,t.containerInfo)}function Ma(e,t,n,r,l){return on(),fi(l),t.flags|=256,de(e,t,n,r),t.child}var Ro={dehydrated:null,treeContext:null,retryLane:0};function Io(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,t,n){var r=t.pendingProps,l=W.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),A(W,l&1),e===null)return Co(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=vl(i,r,0,null),e=bt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Io(n),t.memoizedState=Ro,e):ji(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return fp(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=gt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=gt(a,o):(o=bt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Io(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Ro,r}return o=e.child,e=o.sibling,r=gt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ji(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xr(e,t,n,r){return r!==null&&fi(r),an(t,e.child,null,n),e=ji(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(x(422))),xr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=vl({mode:"visible",children:r.children},l,0,null),o=bt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&an(t,e.child,null,i),t.child.memoizedState=Io(i),t.memoizedState=Ro,o);if(!(t.mode&1))return xr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(x(419)),r=Ql(o,r,void 0),xr(e,t,i,r)}if(a=(i&e.childLanes)!==0,ge||a){if(r=ne,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,qe(e,l),Ae(r,e,l,-1))}return Ri(),r=Ql(Error(x(421))),xr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Cp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ke=pt(l.nextSibling),Se=t,B=!0,De=null,e!==null&&(Pe[Te++]=Ye,Pe[Te++]=Ke,Pe[Te++]=Lt,Ye=e.id,Ke=e.overflow,Lt=t),t=ji(t,r.children),t.flags|=4096,t)}function Oa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jo(e.return,t,n)}function Gl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Uu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oa(e,n,t);else if(e.tag===19)Oa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(W,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Jr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Gl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Jr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Gl(t,!0,n,null,o);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mp(e,t,n){switch(t.tag){case 3:Fu(t),on();break;case 5:pu(t);break;case 1:ye(t.type)&&Qr(t);break;case 4:xi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;A(Kr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Au(e,t,n):(A(W,W.current&1),e=et(e,t,n),e!==null?e.sibling:null);A(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Ou(e,t,n)}return et(e,t,n)}var $u,Mo,Vu,Bu;$u=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mo=function(){};Vu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Pt(He.current);var o=null;switch(n){case"input":l=no(e,l),r=no(e,r),o=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":l=oo(e,l),r=oo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}ao(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(On.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&s!==a&&(s!=null||a!=null))if(d==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(On.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&$("scroll",e),o||a===s||(o=[])):(o=o||[]).push(d,s))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hp(e,t,n){var r=t.pendingProps;switch(pi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ye(t.type)&&Hr(),se(t),null;case 3:return r=t.stateNode,sn(),V(ve),V(ce),_i(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Bo(De),De=null))),Mo(e,t),se(t),null;case 5:wi(t);var l=Pt(Yn.current);if(n=t.type,e!==null&&t.stateNode!=null)Vu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return se(t),null}if(e=Pt(He.current),vr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Be]=t,r[Qn]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<Cn.length;l++)$(Cn[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Hi(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Gi(r,o),$("invalid",r)}ao(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&gr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&gr(r.textContent,a,e),l=["children",""+a]):On.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&$("scroll",r)}switch(n){case"input":sr(r),Qi(r,o,!0);break;case"textarea":sr(r),Yi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Be]=t,e[Qn]=r,$u(e,t,!1,!1),t.stateNode=e;e:{switch(i=so(n,r),n){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<Cn.length;l++)$(Cn[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":Hi(e,r),l=no(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),$("invalid",e);break;case"textarea":Gi(e,r),l=oo(e,r),$("invalid",e);break;default:l=r}ao(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?ws(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ys(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Dn(e,s):typeof s=="number"&&Dn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(On.hasOwnProperty(o)?s!=null&&o==="onScroll"&&$("scroll",e):s!=null&&Zo(e,o,s,i))}switch(n){case"input":sr(e),Qi(e,r,!1);break;case"textarea":sr(e),Yi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Pt(Yn.current),Pt(He.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return se(t),null;case 13:if(V(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ke!==null&&t.mode&1&&!(t.flags&128))au(),on(),t.flags|=98560,o=!1;else if(o=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[Be]=t}else on(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else De!==null&&(Bo(De),De=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?q===0&&(q=3):Ri())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return sn(),Mo(e,t),e===null&&Wn(t.stateNode.containerInfo),se(t),null;case 10:return gi(t.type._context),se(t),null;case 17:return ye(t.type)&&Hr(),se(t),null;case 19:if(V(W),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)_n(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Jr(e),i!==null){for(t.flags|=128,_n(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(W,W.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>cn&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304)}else{if(!r)if(e=Jr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!B)return se(t),null}else 2*K()-o.renderingStartTime>cn&&n!==1073741824&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=W.current,A(W,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Li(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function gp(e,t){switch(pi(t),t.tag){case 1:return ye(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sn(),V(ve),V(ce),_i(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wi(t),null;case 13:if(V(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));on()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(W),null;case 4:return sn(),null;case 10:return gi(t.type._context),null;case 22:case 23:return Li(),null;case 24:return null;default:return null}}var wr=!1,ue=!1,vp=typeof WeakSet=="function"?WeakSet:Set,N=null;function Kt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Oo(e,t,n){try{n()}catch(r){G(e,t,r)}}var Da=!1;function yp(e,t){if(xo=$r,e=Ys(),ci(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,d=0,v=0,m=e,g=null;t:for(;;){for(var w;m!==n||l!==0&&m.nodeType!==3||(a=i+l),m!==o||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break t;if(g===n&&++d===l&&(a=i),g===o&&++v===r&&(s=i),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(wo={focusedElem:e,selectionRange:n},$r=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var k=_.memoizedProps,D=_.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Me(t.type,k),D);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(h){G(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return _=Da,Da=!1,_}function Rn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Oo(t,n,o)}l=l.next}while(l!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Do(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Qn],delete t[So],delete t[ep],delete t[tp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hu(e){return e.tag===5||e.tag===3||e.tag===4}function Fa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(Fo(e,t,n),e=e.sibling;e!==null;)Fo(e,t,n),e=e.sibling}function Ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ao(e,t,n),e=e.sibling;e!==null;)Ao(e,t,n),e=e.sibling}var re=null,Oe=!1;function nt(e,t,n){for(n=n.child;n!==null;)Qu(e,t,n),n=n.sibling}function Qu(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:ue||Kt(n,t);case 6:var r=re,l=Oe;re=null,nt(e,t,n),re=r,Oe=l,re!==null&&(Oe?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Oe?(e=re,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),$n(e)):Ul(re,n.stateNode));break;case 4:r=re,l=Oe,re=n.stateNode.containerInfo,Oe=!0,nt(e,t,n),re=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Oo(n,t,i),l=l.next}while(l!==r)}nt(e,t,n);break;case 1:if(!ue&&(Kt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,nt(e,t,n),ue=r):nt(e,t,n);break;default:nt(e,t,n)}}function Aa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vp),t.forEach(function(r){var l=jp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,Oe=!1;break e;case 3:re=a.stateNode.containerInfo,Oe=!0;break e;case 4:re=a.stateNode.containerInfo,Oe=!0;break e}a=a.return}if(re===null)throw Error(x(160));Qu(o,i,l),re=null,Oe=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(d){G(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gu(t,e),t=t.sibling}function Gu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),$e(e),r&4){try{Rn(3,e,e.return),hl(3,e)}catch(k){G(e,e.return,k)}try{Rn(5,e,e.return)}catch(k){G(e,e.return,k)}}break;case 1:Ie(t,e),$e(e),r&512&&n!==null&&Kt(n,n.return);break;case 5:if(Ie(t,e),$e(e),r&512&&n!==null&&Kt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(k){G(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hs(l,o),so(a,i);var d=so(a,o);for(i=0;i<s.length;i+=2){var v=s[i],m=s[i+1];v==="style"?ws(l,m):v==="dangerouslySetInnerHTML"?ys(l,m):v==="children"?Dn(l,m):Zo(l,v,m,d)}switch(a){case"input":ro(l,o);break;case"textarea":gs(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Zt(l,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?Zt(l,!!o.multiple,o.defaultValue,!0):Zt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Qn]=o}catch(k){G(e,e.return,k)}}break;case 6:if(Ie(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){G(e,e.return,k)}}break;case 3:if(Ie(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(k){G(e,e.return,k)}break;case 4:Ie(t,e),$e(e);break;case 13:Ie(t,e),$e(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(bi=K())),r&4&&Aa(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(d=ue)||v,Ie(t,e),ue=d):Ie(t,e),$e(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(N=e,v=e.child;v!==null;){for(m=N=v;N!==null;){switch(g=N,w=g.child,g.tag){case 0:case 11:case 14:case 15:Rn(4,g,g.return);break;case 1:Kt(g,g.return);var _=g.stateNode;if(typeof _.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(k){G(r,n,k)}}break;case 5:Kt(g,g.return);break;case 22:if(g.memoizedState!==null){$a(m);continue}}w!==null?(w.return=g,N=w):$a(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{l=m.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=xs("display",i))}catch(k){G(e,e.return,k)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(k){G(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ie(t,e),$e(e),r&4&&Aa(e);break;case 21:break;default:Ie(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hu(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var o=Fa(e);Ao(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Fa(e);Fo(e,a,i);break;default:throw Error(x(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,n){N=e,Yu(e)}function Yu(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||wr;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ue;a=wr;var d=ue;if(wr=i,(ue=s)&&!d)for(N=l;N!==null;)i=N,s=i.child,i.tag===22&&i.memoizedState!==null?Va(l):s!==null?(s.return=i,N=s):Va(l);for(;o!==null;)N=o,Yu(o),o=o.sibling;N=l,wr=a,ue=d}Ua(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,N=o):Ua(e)}}function Ua(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ea(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ea(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&$n(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ue||t.flags&512&&Do(t)}catch(g){G(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function $a(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Va(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(s){G(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){G(t,l,s)}}var o=t.return;try{Do(t)}catch(s){G(t,o,s)}break;case 5:var i=t.return;try{Do(t)}catch(s){G(t,i,s)}}}catch(s){G(t,t.return,s)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var wp=Math.ceil,tl=tt.ReactCurrentDispatcher,Pi=tt.ReactCurrentOwner,ze=tt.ReactCurrentBatchConfig,M=0,ne=null,Z=null,le=0,_e=0,Xt=wt(0),q=0,Jn=null,It=0,gl=0,Ti=0,In=null,he=null,bi=0,cn=1/0,Qe=null,nl=!1,Uo=null,mt=null,_r=!1,st=null,rl=0,Mn=0,$o=null,Rr=-1,Ir=0;function pe(){return M&6?K():Rr!==-1?Rr:Rr=K()}function ht(e){return e.mode&1?M&2&&le!==0?le&-le:rp.transition!==null?(Ir===0&&(Ir=Ls()),Ir):(e=F,e!==0||(e=window.event,e=e===void 0?16:As(e.type)),e):1}function Ae(e,t,n,r){if(50<Mn)throw Mn=0,$o=null,Error(x(185));er(e,n,r),(!(M&2)||e!==ne)&&(e===ne&&(!(M&2)&&(gl|=n),q===4&&it(e,le)),xe(e,r),n===1&&M===0&&!(t.mode&1)&&(cn=K()+500,pl&&_t()))}function xe(e,t){var n=e.callbackNode;rd(e,t);var r=Ur(e,e===ne?le:0);if(r===0)n!==null&&Zi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zi(n),t===1)e.tag===0?np(Ba.bind(null,e)):lu(Ba.bind(null,e)),Jd(function(){!(M&6)&&_t()}),n=null;else{switch(Rs(r)){case 1:n=ni;break;case 4:n=bs;break;case 16:n=Ar;break;case 536870912:n=zs;break;default:n=Ar}n=nc(n,Ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ku(e,t){if(Rr=-1,Ir=0,M&6)throw Error(x(327));var n=e.callbackNode;if(nn()&&e.callbackNode!==n)return null;var r=Ur(e,e===ne?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ll(e,r);else{t=r;var l=M;M|=2;var o=Zu();(ne!==e||le!==t)&&(Qe=null,cn=K()+500,Tt(e,t));do try{Sp();break}catch(a){Xu(e,a)}while(!0);hi(),tl.current=o,M=l,Z!==null?t=0:(ne=null,le=0,t=q)}if(t!==0){if(t===2&&(l=mo(e),l!==0&&(r=l,t=Vo(e,l))),t===1)throw n=Jn,Tt(e,0),it(e,r),xe(e,K()),n;if(t===6)it(e,r);else{if(l=e.current.alternate,!(r&30)&&!_p(l)&&(t=ll(e,r),t===2&&(o=mo(e),o!==0&&(r=o,t=Vo(e,o))),t===1))throw n=Jn,Tt(e,0),it(e,r),xe(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Nt(e,he,Qe);break;case 3:if(it(e,r),(r&130023424)===r&&(t=bi+500-K(),10<t)){if(Ur(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ko(Nt.bind(null,e,he,Qe),t);break}Nt(e,he,Qe);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Fe(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wp(r/1960))-r,10<r){e.timeoutHandle=ko(Nt.bind(null,e,he,Qe),r);break}Nt(e,he,Qe);break;case 5:Nt(e,he,Qe);break;default:throw Error(x(329))}}}return xe(e,K()),e.callbackNode===n?Ku.bind(null,e):null}function Vo(e,t){var n=In;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=ll(e,t),e!==2&&(t=he,he=n,t!==null&&Bo(t)),e}function Bo(e){he===null?he=e:he.push.apply(he,e)}function _p(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ue(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Ti,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Ba(e){if(M&6)throw Error(x(327));nn();var t=Ur(e,0);if(!(t&1))return xe(e,K()),null;var n=ll(e,t);if(e.tag!==0&&n===2){var r=mo(e);r!==0&&(t=r,n=Vo(e,r))}if(n===1)throw n=Jn,Tt(e,0),it(e,t),xe(e,K()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,he,Qe),xe(e,K()),null}function zi(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(cn=K()+500,pl&&_t())}}function Mt(e){st!==null&&st.tag===0&&!(M&6)&&nn();var t=M;M|=1;var n=ze.transition,r=F;try{if(ze.transition=null,F=1,e)return e()}finally{F=r,ze.transition=n,M=t,!(M&6)&&_t()}}function Li(){_e=Xt.current,V(Xt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zd(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(pi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:sn(),V(ve),V(ce),_i();break;case 5:wi(r);break;case 4:sn();break;case 13:V(W);break;case 19:V(W);break;case 10:gi(r.type._context);break;case 22:case 23:Li()}n=n.return}if(ne=e,Z=e=gt(e.current,null),le=_e=t,q=0,Jn=null,Ti=gl=It=0,he=In=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}jt=null}return e}function Xu(e,t){do{var n=Z;try{if(hi(),br.current=el,qr){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}qr=!1}if(Rt=0,te=J=H=null,Ln=!1,Kn=0,Pi.current=null,n===null||n.return===null){q=1,Jn=t,Z=null;break}e:{var o=e,i=n.return,a=n,s=t;if(t=le,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,v=a,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var w=ba(i);if(w!==null){w.flags&=-257,za(w,i,a,o,t),w.mode&1&&Ta(o,d,t),t=w,s=d;var _=t.updateQueue;if(_===null){var k=new Set;k.add(s),t.updateQueue=k}else _.add(s);break e}else{if(!(t&1)){Ta(o,d,t),Ri();break e}s=Error(x(426))}}else if(B&&a.mode&1){var D=ba(i);if(D!==null){!(D.flags&65536)&&(D.flags|=256),za(D,i,a,o,t),fi(un(s,a));break e}}o=s=un(s,a),q!==4&&(q=2),In===null?In=[o]:In.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Ru(o,s,t);Sa(o,p);break e;case 1:a=s;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mt===null||!mt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var h=Iu(o,a,t);Sa(o,h);break e}}o=o.return}while(o!==null)}qu(n)}catch(y){t=y,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Zu(){var e=tl.current;return tl.current=el,e===null?el:e}function Ri(){(q===0||q===3||q===2)&&(q=4),ne===null||!(It&268435455)&&!(gl&268435455)||it(ne,le)}function ll(e,t){var n=M;M|=2;var r=Zu();(ne!==e||le!==t)&&(Qe=null,Tt(e,t));do try{kp();break}catch(l){Xu(e,l)}while(!0);if(hi(),M=n,tl.current=r,Z!==null)throw Error(x(261));return ne=null,le=0,q}function kp(){for(;Z!==null;)Ju(Z)}function Sp(){for(;Z!==null&&!Yc();)Ju(Z)}function Ju(e){var t=tc(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?qu(e):Z=t,Pi.current=null}function qu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gp(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Z=null;return}}else if(n=hp(n,t,_e),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);q===0&&(q=5)}function Nt(e,t,n){var r=F,l=ze.transition;try{ze.transition=null,F=1,Ep(e,t,n,r)}finally{ze.transition=l,F=r}return null}function Ep(e,t,n,r){do nn();while(st!==null);if(M&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ld(e,o),e===ne&&(Z=ne=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,nc(Ar,function(){return nn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ze.transition,ze.transition=null;var i=F;F=1;var a=M;M|=4,Pi.current=null,yp(e,n),Gu(n,e),Wd(wo),$r=!!xo,wo=xo=null,e.current=n,xp(n),Kc(),M=a,F=i,ze.transition=o}else e.current=n;if(_r&&(_r=!1,st=e,rl=l),o=e.pendingLanes,o===0&&(mt=null),Jc(n.stateNode),xe(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(nl)throw nl=!1,e=Uo,Uo=null,e;return rl&1&&e.tag!==0&&nn(),o=e.pendingLanes,o&1?e===$o?Mn++:(Mn=0,$o=e):Mn=0,_t(),null}function nn(){if(st!==null){var e=Rs(rl),t=ze.transition,n=F;try{if(ze.transition=null,F=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,rl=0,M&6)throw Error(x(331));var l=M;for(M|=4,N=e.current;N!==null;){var o=N,i=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var d=a[s];for(N=d;N!==null;){var v=N;switch(v.tag){case 0:case 11:case 15:Rn(8,v,o)}var m=v.child;if(m!==null)m.return=v,N=m;else for(;N!==null;){v=N;var g=v.sibling,w=v.return;if(Wu(v),v===d){N=null;break}if(g!==null){g.return=w,N=g;break}N=w}}}var _=o.alternate;if(_!==null){var k=_.child;if(k!==null){_.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}N=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,N=i;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,N=p;break e}N=o.return}}var c=e.current;for(N=c;N!==null;){i=N;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,N=f;else e:for(i=c;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hl(9,a)}}catch(y){G(a,a.return,y)}if(a===i){N=null;break e}var h=a.sibling;if(h!==null){h.return=a.return,N=h;break e}N=a.return}}if(M=l,_t(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(al,e)}catch{}r=!0}return r}finally{F=n,ze.transition=t}}return!1}function Wa(e,t,n){t=un(n,t),t=Ru(e,t,1),e=ft(e,t,1),t=pe(),e!==null&&(er(e,1,t),xe(e,t))}function G(e,t,n){if(e.tag===3)Wa(e,e,n);else for(;t!==null;){if(t.tag===3){Wa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=un(n,e),e=Iu(t,e,1),t=ft(t,e,1),e=pe(),t!==null&&(er(t,1,e),xe(t,e));break}}t=t.return}}function Np(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(le&n)===n&&(q===4||q===3&&(le&130023424)===le&&500>K()-bi?Tt(e,0):Ti|=n),xe(e,t)}function ec(e,t){t===0&&(e.mode&1?(t=dr,dr<<=1,!(dr&130023424)&&(dr=4194304)):t=1);var n=pe();e=qe(e,t),e!==null&&(er(e,t,n),xe(e,n))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ec(e,n)}function jp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),ec(e,n)}var tc;tc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,mp(e,t,n);ge=!!(e.flags&131072)}else ge=!1,B&&t.flags&1048576&&ou(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lr(e,t),e=t.pendingProps;var l=ln(t,ce.current);tn(t,n),l=Si(null,t,r,e,l,n);var o=Ei();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,Qr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,yi(t),l.updater=ml,t.stateNode=l,l._reactInternals=t,To(t,r,e,n),t=Lo(null,t,r,!0,o,n)):(t.tag=0,B&&o&&di(t),de(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Tp(r),e=Me(r,e),l){case 0:t=zo(null,t,r,e,n);break e;case 1:t=Ia(null,t,r,e,n);break e;case 11:t=La(null,t,r,e,n);break e;case 14:t=Ra(null,t,r,Me(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),zo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Ia(e,t,r,l,n);case 3:e:{if(Fu(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,l=o.element,du(e,t),Zr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=un(Error(x(423)),t),t=Ma(e,t,r,n,l);break e}else if(r!==l){l=un(Error(x(424)),t),t=Ma(e,t,r,n,l);break e}else for(ke=pt(t.stateNode.containerInfo.firstChild),Se=t,B=!0,De=null,n=uu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(on(),r===l){t=et(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return pu(t),e===null&&Co(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,_o(r,l)?i=null:o!==null&&_o(r,o)&&(t.flags|=32),Du(e,t),de(e,t,i,n),t.child;case 6:return e===null&&Co(t),null;case 13:return Au(e,t,n);case 4:return xi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=an(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),La(e,t,r,l,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,A(Kr,r._currentValue),r._currentValue=i,o!==null)if(Ue(o.value,i)){if(o.children===l.children&&!ve.current){t=et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Xe(-1,n&-n),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?s.next=s:(s.next=v.next,v.next=s),d.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),jo(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(x(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),jo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}de(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,tn(t,n),l=Le(l),r=r(l),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,l=Me(r,t.pendingProps),l=Me(r.type,l),Ra(e,t,r,l,n);case 15:return Mu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Lr(e,t),t.tag=1,ye(r)?(e=!0,Qr(t)):e=!1,tn(t,n),Lu(t,r,l),To(t,r,l,n),Lo(null,t,r,!0,e,n);case 19:return Uu(e,t,n);case 22:return Ou(e,t,n)}throw Error(x(156,t.tag))};function nc(e,t){return Ts(e,t)}function Pp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new Pp(e,t,n,r)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tp(e){if(typeof e=="function")return Ii(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qo)return 11;if(e===ei)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ii(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ut:return bt(n.children,l,o,t);case Jo:i=8,l|=8;break;case Jl:return e=be(12,n,t,l|2),e.elementType=Jl,e.lanes=o,e;case ql:return e=be(13,n,t,l),e.elementType=ql,e.lanes=o,e;case eo:return e=be(19,n,t,l),e.elementType=eo,e.lanes=o,e;case ps:return vl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cs:i=10;break e;case ds:i=9;break e;case qo:i=11;break e;case ei:i=14;break e;case rt:i=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=be(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function bt(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=be(22,e,r,t),e.elementType=ps,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Mi(e,t,n,r,l,o,i,a,s){return e=new bp(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yi(o),e}function zp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rc(e){if(!e)return yt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ye(n))return ru(e,n,t)}return t}function lc(e,t,n,r,l,o,i,a,s){return e=Mi(n,r,!0,e,l,o,i,a,s),e.context=rc(null),n=e.current,r=pe(),l=ht(n),o=Xe(r,l),o.callback=t??null,ft(n,o,l),e.current.lanes=l,er(e,l,r),xe(e,r),e}function yl(e,t,n,r){var l=t.current,o=pe(),i=ht(l);return n=rc(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,i),e!==null&&(Ae(e,l,i,o),Tr(e,l,i)),i}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ha(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oi(e,t){Ha(e,t),(e=e.alternate)&&Ha(e,t)}function Lp(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Di(e){this._internalRoot=e}xl.prototype.render=Di.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));yl(e,t,null,null)};xl.prototype.unmount=Di.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){yl(null,e,null,null)}),t[Je]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Os();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&Fs(e)}};function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qa(){}function Rp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=ol(i);o.call(d)}}var i=lc(t,r,e,0,null,!1,!1,"",Qa);return e._reactRootContainer=i,e[Je]=i.current,Wn(e.nodeType===8?e.parentNode:e),Mt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=ol(s);a.call(d)}}var s=Mi(e,0,!1,null,null,!1,!1,"",Qa);return e._reactRootContainer=s,e[Je]=s.current,Wn(e.nodeType===8?e.parentNode:e),Mt(function(){yl(t,s,n,r)}),s}function _l(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=ol(i);a.call(s)}}yl(t,i,e,l)}else i=Rp(n,t,e,l,r);return ol(i)}Is=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(ri(t,n|1),xe(t,K()),!(M&6)&&(cn=K()+500,_t()))}break;case 13:Mt(function(){var r=qe(e,1);if(r!==null){var l=pe();Ae(r,e,1,l)}}),Oi(e,1)}};li=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=pe();Ae(t,e,134217728,n)}Oi(e,134217728)}};Ms=function(e){if(e.tag===13){var t=ht(e),n=qe(e,t);if(n!==null){var r=pe();Ae(n,e,t,r)}Oi(e,t)}};Os=function(){return F};Ds=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};co=function(e,t,n){switch(t){case"input":if(ro(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=dl(r);if(!l)throw Error(x(90));ms(r),ro(r,l)}}}break;case"textarea":gs(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Ss=zi;Es=Mt;var Ip={usingClientEntryPoint:!1,Events:[nr,Wt,dl,_s,ks,zi]},kn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mp={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=js(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||Lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{al=kr.inject(Mp),We=kr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fi(t))throw Error(x(200));return zp(e,t,null,n)};Ne.createRoot=function(e,t){if(!Fi(e))throw Error(x(299));var n=!1,r="",l=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Mi(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,Wn(e.nodeType===8?e.parentNode:e),new Di(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=js(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Mt(e)};Ne.hydrate=function(e,t,n){if(!wl(t))throw Error(x(200));return _l(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Fi(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=oc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=lc(t,null,e,1,n??null,l,!1,o,i),e[Je]=t.current,Wn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xl(t)};Ne.render=function(e,t,n){if(!wl(t))throw Error(x(200));return _l(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!wl(e))throw Error(x(40));return e._reactRootContainer?(Mt(function(){_l(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Ne.unstable_batchedUpdates=zi;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return _l(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),is.exports=Ne;var Op=is.exports,Ga=Op;Xl.createRoot=Ga.createRoot,Xl.hydrateRoot=Ga.hydrateRoot;const Dp="/portfolio/assets/portrait-CCNt5MrR.png",Fp="/portfolio/assets/logo-bright-side-CJmGjnvm.png",Ap="/portfolio/assets/logo-tatarstanda-CJ6ea9q3.png",Up="/portfolio/assets/logo-123go-Bnit6Xto.png",$p="/portfolio/assets/logo-5-minute-crafts-ByLL1UjJ.png",Vp="/portfolio/assets/logo-bright-side-vr-CoRjTozL.png",Bp="/portfolio/assets/PR-1-Blk3q20a.png",Wp="/portfolio/assets/PR-1-Blk3q20a.png",Hp="/portfolio/assets/PR-1-Blk3q20a.png",Qp="/portfolio/assets/PR-1-Blk3q20a.png",Gp="/portfolio/assets/PR-1-Blk3q20a.png",Yp=Dp,Kp=Fp,Xp=Ap,Zp=Up,Jp=$p,qp=Vp,ef=[{value:40,suffix:"+",label:"Creative specialists led"},{value:60,suffix:"%",label:"Faster production"},{value:3,suffix:"×",label:"Lower production costs"},{value:30,suffix:"%",label:"More output, same budget"},{value:100,suffix:"%",label:"Deadlines met"}],tf=[{code:"00:01",title:"AI Production Transformation",tag:"TheSoul Group — AI Video Production Lead, 2024—Present",challenge:"Client demand for video content was growing faster than the team could scale by headcount alone.",role:"Leading a 15-person team building AI pipelines across pre-production, generation, animation and post — serving 10+ clients a month.",actions:["Built production pipelines on Veo, Kling, Luma, ChatGPT and ComfyUI","Ran cross-functional AI pilots with VFX, design, writing and editing teams","Wrote 10+ practical guides and trained the animation team on AI tools"],outcome:[{value:"60%",label:"faster production"},{value:"3×",label:"lower cost"},{value:"+30%",label:"output, same budget"}]},{code:"00:02",title:"Post-Production at Scale",tag:"TheSoul Group — Head of Post-Production, 2023—2024",challenge:"A 40+ person post-production department was running through fragmented processes, unclear ownership and limited cost visibility across projects worth tens of millions of euros.",role:"Took ownership of the department and its 5 team leads, turning a difficult-to-control operation into a transparent system with clear accountability, predictable delivery and measurable costs.",actions:["Moved projects into Asana and rebuilt task intake, ownership, reporting and delivery control","Ran a full financial audit and reworked resource allocation, reducing production costs by 50%","Standardized handoffs between editing, VFX and delivery teams and trained 5 team leads to run the new system"],outcome:[{value:"−50%",label:"production cost"},{value:"+30%",label:"department throughput"},{value:"100%",label:"deadlines met"}]},{code:"00:03",title:"YouTube Growth & Content Strategy",tag:"TheSoul Group — Creative Producer, 2020—2023",challenge:"Grow an existing 2D channel while launching a VR-360 project on Unreal Engine from zero.",role:"Ran both projects — production, team, research, analytics and release strategy.",actions:["Built the production and task pipeline in Asana","Ran topic research, packaging and thumbnail testing","Tracked retention and audience behavior to shape each release"],outcome:[{value:"100K",label:"subscribers in one quarter"},{value:"1M+",label:"views on single videos"},{value:"70%",label:"audience retention"}]},{code:"00:04",title:"Motion Design Leadership",tag:"TheSoul Group — Motion Design Team Lead, 2019—2020",challenge:"A 2D animated series needed sharper visual quality and a stronger bench of junior talent.",role:"Worked as team lead for a 15+ person motion design team, combining creative direction, delivery control and people development.",actions:["Directed composition, pacing and visual storytelling","Mentored junior designers through reviews and internal training","Built a knowledge base and onboarding materials"],outcome:[{value:"85%",label:"retention, up from 60%"}]}],nf=[{title:"Creative Production Leadership",text:"Running full production cycles across video, animation and design — from brief to final delivery."},{title:"Creative Operations & Workflow Design",text:"Building the systems — task flow, reporting, handoffs — that keep creative work moving without chaos."},{title:"AI Production & Automation",text:"Integrating Veo, Kling, Luma, ComfyUI and other AI tools into real production pipelines, not demos."},{title:"Creative Direction & Visual Quality",text:"Holding the bar on composition, pacing and craft across every deliverable a team ships."},{title:"Content Strategy & Analytics",text:"Reading retention, cost and output data to decide what to change next — and proving it worked."},{title:"Team Development",text:"Growing editors, animators and producers into leads through mentoring and structured feedback."}],ac=[{id:"bright-side",logo:Kp,name:"Bright Side",years:"2018–2023",role:"Motion Designer → Motion Design Team Lead",subscribers:"44M+",views:"11B+",contribution:"Grew from motion designer to team lead, developing visual standards, leading the motion design team and improving content quality through stronger creative execution.",relationship:"Direct creative and team leadership",url:"https://www.youtube.com/@BRIGHTSIDEOFFICIAL"},{id:"bright-side-vr",logo:qp,name:"Bright Side VR 360",years:"2020–2023",role:"Channel Producer",subscribers:"597K+",views:"500M+",contribution:"Developed the project from channel concept and video ideas to production workflows, publishing and performance analytics.",relationship:"Direct channel production",url:"https://www.youtube.com/@BrightSideVR360"},{id:"tatarstanda",logo:Xp,name:"Татарстанда",years:"Aug 2024 — Aug 2025",role:"Long-Form Video Producer · Part-Time",subscribers:"276K+",views:"2M+",contribution:"Led long-form video production from topic development and filming to post-production supervision and performance analysis.",relationship:"Direct long-form production",url:"https://www.youtube.com/@tatarstan_da"},{id:"5-minute-crafts",logo:Jp,name:"5-Minute Crafts",years:"2023–2024",role:"Head of Video Editing Operations",subscribers:"80M+",views:"28.5B+",contribution:"Automated and optimized video editing workflows, improving production efficiency and helping the department support high-volume content delivery.",relationship:"Production operations and workflow leadership",url:"https://www.youtube.com/@5MinuteCraftsYouTube"},{id:"123-go",logo:Zp,name:"123 GO!",years:"2023–2024",role:"Head of Video Editing Operations",subscribers:"12.7M+",views:"5B+",contribution:"Improved editing operations, standardized production processes and helped the department scale delivery across a high-volume entertainment project.",relationship:"Production operations and workflow leadership",url:"https://www.youtube.com/@123GO_"}],rf="https://drive.google.com/drive/folders/1f9seINEQozd5DlCseQ2Tfsyr-6tOWgC_",lf="https://drive.google.com/file/d/1v7XHzwgWNdeS5FkR7gqdSjcVXzwvkIss/view?usp=sharing",sc=[{title:"Story-Driven 2D Animation",category:"Full narrative animation",driveFileId:"1OBcBYeC_MFhgisofIXXRV0q0qKNUSmcL",preview:Bp},{title:"Animated Gambling Ad Short",category:"Advertising · Complex 2D animation",driveFileId:"10L1g0w7_5xRExenIOr2smbRGJ9AaRlQr",preview:Wp},{title:"Narrative Report Editing",category:"Editing · Intro · Graphic inserts",driveFileId:"1gwNZmTZeigfG-Zju0gU0Z38XJ67KZOFJ",preview:Hp},{title:"UI Animation from Scratch",category:"Interface motion design",driveFileId:"1XV1x0wHDZOv7VQKMX-_IABIFt1qfWYdn",preview:Qp},{title:"Dynamic Colorful 2D Animation",category:"2D motion design",driveFileId:"1vFJFzyYDshxQo7sy5s-WuBca3ZChPFX8",preview:Gp}],of=[{id:"work",label:"Cases"},{id:"expertise",label:"What I Do"},{id:"about",label:"About"},{id:"contact",label:"Contact"}],af=[{id:"work",label:"Кейсы"},{id:"expertise",label:"Чем я занимаюсь"},{id:"about",label:"Обо мне"},{id:"contact",label:"Контакты"}],sf=[{value:40,suffix:"+",label:"специалистов в командах"},{value:60,suffix:"%",label:"ускорение производства"},{value:3,suffix:"×",label:"снижение стоимости"},{value:30,suffix:"%",label:"рост выпуска без роста бюджета"},{value:100,suffix:"%",label:"дедлайнов выполнено"}],uf=[{code:"00:01",title:"Внедрение ИИ в video production",tag:"TheSoul Group — руководитель AI Video Production, 2024—настоящее время",challenge:"Спрос на видеоконтент рос быстрее, чем команду можно было масштабировать за счёт найма.",role:"Руководство командой из 15 человек и создание AI-пайплайнов для pre-production, генерации, анимации и post-production для 10+ клиентов в месяц.",actions:["Выстроил производственные пайплайны на Veo, Kling, Luma, ChatGPT и ComfyUI","Запустил совместные AI-пилоты с командами VFX, дизайна, сценария и монтажа","Подготовил 10+ практических гайдов и обучил команду анимации работе с ИИ-инструментами"],outcome:[{value:"60%",label:"быстрее производство"},{value:"3×",label:"ниже стоимость"},{value:"+30%",label:"больше выпуск при том же бюджете"}]},{code:"00:02",title:"Управление post-production в масштабе",tag:"TheSoul Group — руководитель post-production, 2023—2024",challenge:"В отделе из 40+ человек не было единой прозрачной системы: процессы были разрознены, ответственность размыта, а расходы по проектам на десятки миллионов евро было сложно контролировать.",role:"Взял под управление весь post-production и пять тимлидов. Превратил сложный и непрозрачный отдел в управляемую систему с понятной ответственностью, прогнозируемыми сроками и контролируемой экономикой.",actions:["Перенёс проекты в Asana и заново выстроил постановку задач, зоны ответственности, отчётность и контроль выдачи","Провёл полный финансовый аудит и пересобрал распределение ресурсов, сократив производственные расходы на 50%","Стандартизировал передачу задач между монтажом, VFX и финальной выдачей и обучил пять тимлидов работать по новой системе"],outcome:[{value:"−50%",label:"стоимость производства"},{value:"+30%",label:"пропускная способность отдела"},{value:"100%",label:"дедлайнов выполнено"}]},{code:"00:03",title:"Рост YouTube-проектов и контент-стратегия",tag:"TheSoul Group — креативный продюсер, 2020—2023",challenge:"Развить существующий 2D-канал и с нуля запустить VR-360-проект на Unreal Engine.",role:"Вёл оба проекта: производство, команду, исследования, аналитику и стратегию публикаций.",actions:["Выстроил производственный процесс и постановку задач в Asana","Организовал поиск тем, упаковку и тестирование обложек","Использовал удержание и поведение аудитории для корректировки каждого выпуска"],outcome:[{value:"100K",label:"подписчиков за квартал"},{value:"1M+",label:"просмотров отдельных роликов"},{value:"70%",label:"удержание аудитории"}]},{code:"00:04",title:"Руководство командой моушн-дизайна",tag:"TheSoul Group — тимлид команды моушн-дизайна, 2019—2020",challenge:"2D-анимационному сериалу требовались более высокий визуальный уровень и сильная система развития младших специалистов.",role:"Был тимлидом команды моушн-дизайна из 15+ человек: отвечал за визуальное направление, сроки, качество и развитие сотрудников.",actions:["Курировал композицию, темп и визуальный сторителлинг","Развивал младших дизайнеров через ревью и внутреннее обучение","Создал базу знаний и материалы для онбординга"],outcome:[{value:"85%",label:"удержание вместо прежних 60%"}]}],cf=[{title:"Управление креативным производством",text:"Веду полный цикл видео, анимации и дизайна — от брифа до финальной передачи результата."},{title:"Креативные операции и процессы",text:"Выстраиваю постановку задач, отчётность и передачу работы между командами так, чтобы производство не превращалось в хаос."},{title:"AI production и автоматизация",text:"Встраиваю Veo, Kling, Luma, ComfyUI и другие AI-инструменты в реальные производственные процессы, а не в демонстрационные эксперименты."},{title:"Креативное руководство и качество",text:"Отвечаю за композицию, темп и качество результата во всех материалах, которые выпускает команда."},{title:"Контент-стратегия и аналитика",text:"Использую данные по удержанию, стоимости и объёму выпуска, чтобы принимать решения и проверять их результат."},{title:"Развитие команд",text:"Помогаю монтажёрам, аниматорам и продюсерам расти до руководителей через наставничество и системную обратную связь."}],df=[{title:"Creative Production",items:["After Effects","Premiere Pro","Photoshop","Illustrator","Blender","Unreal Engine"]},{title:"AI & Automation",items:["ChatGPT","Google Flow","Midjourney","Runway","ElevenLabs","Claude","ComfyUI"]},{title:"Management & Operations",items:["Asana","Notion","Google Workspace","Miro","Slack"]},{title:"Analytics & Distribution",items:["YouTube Analytics","Google Trends","Social Media Platforms"]}],pf=[{title:"Creative Production",items:["After Effects","Premiere Pro","Photoshop","Illustrator","Blender","Unreal Engine"]},{title:"AI и автоматизация",items:["ChatGPT","Google Flow","Midjourney","Runway","ElevenLabs","Claude","ComfyUI"]},{title:"Управление и процессы",items:["Asana","Notion","Google Workspace","Miro","Slack"]},{title:"Аналитика и дистрибуция",items:["YouTube Analytics","Google Trends","Социальные платформы"]}],ff=ac.map(e=>({...e,role:{"bright-side":"Моушн-дизайнер → руководитель команды моушн-дизайна","bright-side-vr":"Продюсер канала",tatarstanda:"Продюсер длинных видео · частичная занятость","5-minute-crafts":"Руководитель операций видеомонтажа","123-go":"Руководитель операций видеомонтажа"}[e.id],contribution:{"bright-side":"Прошёл путь от моушн-дизайнера до руководителя команды: развивал визуальные стандарты, управлял командой и повышал качество контента.","bright-side-vr":"Развивал проект от концепции канала и идей роликов до производственных процессов, публикации и анализа результатов.",tatarstanda:"Вёл производство длинных видео: от разработки тем и съёмки до контроля post-production и анализа результатов.","5-minute-crafts":"Автоматизировал и оптимизировал монтажные процессы, повышая эффективность производства и поддерживая большой объём выпуска.","123-go":"Улучшал монтажные операции, стандартизировал процессы и помогал отделу масштабировать производство развлекательного контента."}[e.id],relationship:{"bright-side":"Креативное руководство и управление командой","bright-side-vr":"Полное производство канала",tatarstanda:"Производство длинных видео","5-minute-crafts":"Операционное управление производством","123-go":"Операционное управление производством"}[e.id]})),mf=sc.map((e,t)=>({...e,title:["Сюжетная 2D-анимация","Рекламный шортс со сложной 2D-анимацией","Сюжетный монтаж репортажа","Анимация интерфейса с нуля","Динамичная яркая 2D-анимация"][t],category:["Полноценная сюжетная анимация","Реклама · сложная 2D-анимация","Монтаж · интро · графические вставки","Моушн-дизайн интерфейса","2D-моушн-дизайн"][t]})),hf={en:{nav:of,metrics:ef,cases:tf,expertise:nf,tools:df,projects:ac,videos:sc,telegramTop:"Message me on Telegram",menuLabel:"Toggle menu",heroEyebrow:"REEL 00:00 — CREATIVE PRODUCTION",heroTitles:["Head of Video Production","Creative Operations Lead","Creative Producer"],heroStatement:"I turn video production into a scalable business system — lowering content costs, increasing output and improving the return on creative investment.",viewWork:"View the work",downloadCv:"Download CV ↗",scroll:"SCROLL",casesEyebrow:"PRODUCTION / OPERATIONS / GROWTH",casesTitle:"Case Studies",casesMeta:"04 CASES / 2018—PRESENT",challenge:"Challenge",role:"Role",actions:"Actions",expertiseEyebrow:"CORE CAPABILITIES",expertiseTitle:"What I Do",toolsEyebrow:"TOOLS / PLATFORMS / SYSTEMS",toolsTitle:"Tools & Platforms",toolsSub:"The tools I use to create, manage and scale creative production.",expandTools:"Expand",collapseTools:"Collapse",projectsEyebrow:"SELECTED CHANNELS & BRANDS",projectsTitle:"Project Experience",projectsSub:"Hands-on creative work, channel production and production operations across large media brands.",explore:"Scroll to explore",projectsNote:"Channel figures indicate project scale and are not presented as individual attribution.",subscribers:"Subscribers",views:"Views",openChannel:"open channel in a new tab",videoEyebrow:"SELECTED VIDEO WORK",videoLine1:"I lead production.",videoLine2:"I also understand the craft behind it.",moreWork:"More work & source files ↗",view:"VIEW",play:"Play",closeVideo:"Close video",aboutEyebrow:"ABOUT",aboutQuote1:"I came up through motion design.",aboutQuote2:"So I understand production from both the craft and business side.",aboutParagraphs:[u.jsxs(u.Fragment,{children:["I built my career across ",u.jsx("strong",{children:"motion design"}),", content production and post-production leadership. I started hands-on, creating 2D animation from script to final render, then moved into team leadership, creative production and responsibility for a 40-person post-production department."]}),u.jsxs(u.Fragment,{children:["I later focused on ",u.jsx("strong",{children:"AI video production"}),", building practical pipelines, tools and training for creative teams. The goal stayed the same: produce more, move faster and keep the quality bar high."]}),u.jsx(u.Fragment,{children:"Across these roles, I combined production knowledge, creative judgment, operations, data and new technology to make complex creative work easier to run and scale."})],aboutTags:["Production Leadership","AI Pipelines","Creative Operations","Data-Driven","Team Development"],contactTitle1:"Let's build",contactTitleAccent:"better",contactTitle2:"creative production",emailAria:"Write an email to",footerRole:"HEAD OF VIDEO PRODUCTION · CREATIVE OPERATIONS LEAD"},ru:{nav:af,metrics:sf,cases:uf,expertise:cf,tools:pf,projects:ff,videos:mf,telegramTop:"Написать в Telegram",menuLabel:"Открыть меню",heroEyebrow:"REEL 00:00 — CREATIVE PRODUCTION",heroTitles:["Руководитель video production","Руководитель креативных операций","Креативный продюсер"],heroStatement:"Превращаю video production в масштабируемую бизнес-систему: снижаю стоимость контента, увеличиваю объём выпуска и повышаю отдачу от вложений в креатив.",viewWork:"Посмотреть кейсы",downloadCv:"Скачать CV ↗",scroll:"ЛИСТАЙТЕ",casesEyebrow:"ПРОДАКШН / ОПЕРАЦИИ / РОСТ",casesTitle:"Кейсы",casesMeta:"04 КЕЙСА / 2018—НАСТОЯЩЕЕ ВРЕМЯ",challenge:"Задача",role:"Моя роль",actions:"Что сделал",expertiseEyebrow:"КЛЮЧЕВЫЕ КОМПЕТЕНЦИИ",expertiseTitle:"Чем я занимаюсь",toolsEyebrow:"ИНСТРУМЕНТЫ / ПЛАТФОРМЫ / СИСТЕМЫ",toolsTitle:"Инструменты и платформы",toolsSub:"Набор инструментов, с которыми я создаю, выстраиваю и масштабирую creative production.",expandTools:"Развернуть",collapseTools:"Свернуть",projectsEyebrow:"ИЗБРАННЫЕ КАНАЛЫ И БРЕНДЫ",projectsTitle:"Опыт работы с проектами",projectsSub:"Креативная работа, продюсирование каналов и управление производственными процессами крупных медиабрендов.",explore:"Листайте, чтобы посмотреть",projectsNote:"Показатели каналов отражают масштаб проектов и не выдаются за мой личный результат.",subscribers:"Подписчики",views:"Просмотры",openChannel:"открыть канал в новой вкладке",videoEyebrow:"ИЗБРАННЫЕ ВИДЕОРАБОТЫ",videoLine1:"Я управляю производством.",videoLine2:"И понимаю, как создаётся сам контент.",moreWork:"Больше работ и исходные файлы ↗",view:"СМОТРЕТЬ",play:"Открыть",closeVideo:"Закрыть видео",aboutEyebrow:"ОБО МНЕ",aboutQuote1:"Я прошёл путь от моушн-дизайна.",aboutQuote2:"Поэтому понимаю production и изнутри, и с позиции бизнеса.",aboutParagraphs:[u.jsxs(u.Fragment,{children:["Мой опыт объединяет ",u.jsx("strong",{children:"моушн-дизайн"}),", производство контента и руководство post-production. Я начинал с практической работы — создавал 2D-анимацию от сценария до финального рендера, затем перешёл к управлению командами, креативному продюсированию и руководству отделом post-production из 40 человек."]}),u.jsxs(u.Fragment,{children:["Позже сфокусировался на ",u.jsx("strong",{children:"AI video production"}),": выстраивал рабочие пайплайны, создавал инструменты и обучал креативные команды. Задача оставалась прежней — выпускать больше, двигаться быстрее и не снижать качество."]}),u.jsx(u.Fragment,{children:"В разных ролях я соединял производственную экспертизу, креативное мышление, операционное управление, данные и новые технологии, чтобы сложные процессы становились понятнее и легче масштабировались."})],aboutTags:["Управление производством","ИИ-пайплайны","Креативные операции","Работа с данными","Развитие команд"],contactTitle1:"Давайте построим",contactTitleAccent:"сильный",contactTitle2:"creative production",emailAria:"Написать письмо на",footerRole:"РУКОВОДИТЕЛЬ VIDEO PRODUCTION · КРЕАТИВНЫЕ ОПЕРАЦИИ"}},gf=["hero","work","expertise","about","contact"],Sr="https://t.me/Rax666",Wo="rbitbox@mail.ru",vf=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(Wo)}`,yf="+7 995 007 07 69",xf="https://wa.me/79950070769",wf="https://www.linkedin.com/in/p-smirnov/";function kl(){const e=T.useRef(null),[t,n]=T.useState(!1);return T.useEffect(()=>{const r=e.current;if(!r)return;const l=new IntersectionObserver(o=>{o.forEach(i=>{i.isIntersecting&&(n(!0),l.disconnect())})},{threshold:.15});return l.observe(r),()=>l.disconnect()},[]),[e,t]}function _f(e,t,n=1600,r=0){const[l,o]=T.useState(0),i=T.useRef(!1);return T.useEffect(()=>{if(!t||i.current)return;i.current=!0;let a,s;const d=()=>{const v=performance.now(),m=g=>{const w=Math.min(1,(g-v)/n),_=1-Math.pow(1-w,3);o(e*_),w<1&&(a=requestAnimationFrame(m))};a=requestAnimationFrame(m)};return s=window.setTimeout(d,r),()=>{window.clearTimeout(s),cancelAnimationFrame(a)}},[t,e,n,r]),l}function kf(){const[e,t]=T.useState(0);return T.useEffect(()=>{let n=null;const r=()=>{n||(n=requestAnimationFrame(()=>{const l=document.documentElement,o=l.scrollHeight-l.clientHeight,i=o>0?window.scrollY/o:0;t(Math.max(0,Math.min(1,i))),n=null}))};return window.addEventListener("scroll",r,{passive:!0}),r(),()=>window.removeEventListener("scroll",r)},[]),e}function Sf(e){const t=Math.round(e*4500),n=t%25,r=Math.floor(t/25),l=r%60,o=Math.floor(r/60),i=a=>String(a).padStart(2,"0");return`00:${i(o)}:${i(l)}:${i(n)}`}function Ef(e){const[t,n]=T.useState(e[0]);return T.useEffect(()=>{let r=null;const l=()=>{r||(r=requestAnimationFrame(()=>{const o=window.innerHeight*.35;let i=e[0];for(const a of e){const s=document.getElementById(a);if(!s)continue;s.getBoundingClientRect().top<=o&&(i=a)}n(i),r=null}))};return window.addEventListener("scroll",l,{passive:!0}),l(),()=>window.removeEventListener("scroll",l)},[e]),t}function je({as:e="div",className:t="",children:n,delay:r=0}){const[l,o]=kl();return u.jsx(e,{ref:l,className:`reveal ${o?"reveal--visible":""} ${t}`,style:{transitionDelay:`${r}ms`},children:n})}function Nf({m:e,index:t}){const[n,r]=kl(),l=_f(e.value,r,1600,t*120),o=e.value%1===0?Math.round(l):l.toFixed(1);return u.jsxs("div",{ref:n,className:`metric ${r?"metric--visible":""}`,children:[u.jsxs("div",{className:"metric__value",children:[o,u.jsx("span",{className:"metric__suffix",children:e.suffix})]}),u.jsx("div",{className:"metric__label",children:e.label})]})}function Cf({item:e,index:t,labels:n}){const[r,l]=kl(),o=t%2===1;return u.jsxs("article",{ref:r,className:`case ${l?"case--visible":""} ${o?"case--flip":""}`,children:[u.jsxs("div",{className:"case__code",children:[u.jsx("span",{children:e.code}),u.jsx("span",{className:"case__code-line"})]}),u.jsxs("div",{className:"case__body",children:[u.jsx("h3",{className:"case__title",children:e.title}),u.jsx("p",{className:"case__tag",children:e.tag}),u.jsxs("div",{className:"case__grid",children:[u.jsxs("div",{className:"case__col",children:[u.jsx("span",{className:"case__eyebrow",children:n.challenge}),u.jsx("p",{children:e.challenge})]}),u.jsxs("div",{className:"case__col",children:[u.jsx("span",{className:"case__eyebrow",children:n.role}),u.jsx("p",{children:e.role})]}),u.jsxs("div",{className:"case__col case__col--actions",children:[u.jsx("span",{className:"case__eyebrow",children:n.actions}),u.jsx("ul",{children:e.actions.map((i,a)=>u.jsx("li",{children:i},a))})]})]}),u.jsx("div",{className:"case__outcomes",children:e.outcome.map((i,a)=>u.jsxs("div",{className:"case__outcome",children:[u.jsx("div",{className:"case__outcome-value",children:i.value}),u.jsx("div",{className:"case__outcome-label",children:i.label})]},a))})]})]})}function jf({item:e,index:t,openIndex:n,setOpenIndex:r}){const l=n===t;return u.jsxs("div",{className:`xrow ${l?"xrow--open":""}`,children:[u.jsxs("button",{className:"xrow__head",onClick:()=>r(l?-1:t),"aria-expanded":l,children:[u.jsx("span",{className:"xrow__num",children:String(t+1).padStart(2,"0")}),u.jsx("span",{className:"xrow__title",children:e.title}),u.jsx("span",{className:"xrow__icon",children:l?"—":"+"})]}),u.jsx("div",{className:"xrow__panel",style:{maxHeight:l?"160px":"0px"},children:u.jsx("p",{children:e.text})})]})}function Pf(e){return{"After Effects":"Ae","Premiere Pro":"Pr",Photoshop:"Ps",Illustrator:"Ai",Blender:"Bl","Unreal Engine":"UE",ChatGPT:"GPT","Google Flow":"GF",Midjourney:"MJ",Runway:"RW",ElevenLabs:"11",Claude:"CL",ComfyUI:"CU",Asana:"AS",Notion:"NO","Google Workspace":"GW",Miro:"MI",Slack:"SL","YouTube Analytics":"YT","Google Trends":"GT","Social Media Platforms":"SM","Социальные платформы":"SM"}[e]||e.slice(0,2).toUpperCase()}function Tf({copy:e}){const[t,n]=kl(),[r,l]=T.useState(-1);return u.jsxs("section",{className:"ps-section ps-tools",ref:t,children:[u.jsx("div",{className:`reveal ${n?"reveal--visible":""}`,children:u.jsx("div",{className:"ps-section__header ps-tools__header",children:u.jsxs("div",{children:[u.jsx("div",{className:"ps-section__eyebrow mono",children:e.toolsEyebrow}),u.jsx("h2",{className:"ps-section__title",children:e.toolsTitle}),u.jsx("p",{className:"ps-tools__sub",children:e.toolsSub})]})})}),u.jsx("div",{className:`ps-tools__grid ${n?"ps-tools__grid--visible":""}`,children:e.tools.map((o,i)=>{const a=r===i;return u.jsxs("article",{className:`tool-card ${a?"tool-card--open":""}`,style:{"--card-delay":`${100+i*90}ms`},onMouseEnter:()=>l(i),onMouseLeave:()=>l(-1),onFocus:()=>l(i),onBlur:s=>{s.currentTarget.contains(s.relatedTarget)||l(-1)},children:[u.jsxs("button",{type:"button",className:"tool-card__toggle",onClick:()=>l(a?-1:i),"aria-expanded":a,children:[u.jsx("span",{className:"tool-card__index mono",children:String(i+1).padStart(2,"0")}),u.jsx("span",{className:"tool-card__title",children:o.title}),u.jsx("span",{className:"tool-card__action mono",children:a?e.collapseTools:e.expandTools}),u.jsx("span",{className:"tool-card__chevron","aria-hidden":"true",children:"⌄"})]}),u.jsx("div",{className:"tool-card__panel","aria-hidden":!a,children:u.jsx("div",{className:"tool-card__items",children:o.items.map((s,d)=>u.jsxs("div",{className:"tool-pill",style:{"--tool-delay":`${d*42}ms`},children:[u.jsx("span",{className:"tool-pill__mark mono","aria-hidden":"true",children:Pf(s)}),u.jsx("span",{className:"tool-pill__name",children:s})]},s))})})]},o.title)})})]})}function Ya({project:e,labels:t,duplicate:n=!1}){const r=l=>{l.stopPropagation()};return u.jsx("article",{className:"prow","aria-hidden":n||void 0,children:u.jsxs("div",{className:"prow__link",children:[u.jsx("span",{className:"prow__logo",children:u.jsx("img",{src:e.logo,alt:"",draggable:"false"})}),u.jsx("span",{className:"prow__sep","aria-hidden":"true"}),u.jsxs("span",{className:"prow__meta",children:[u.jsxs("a",{className:"prow__name",href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":`${e.name} — ${t.openChannel}`,tabIndex:n?-1:0,onPointerDown:r,onClick:r,children:[e.name,u.jsx("span",{className:"prow__name-arrow","aria-hidden":"true",children:"↗"})]}),u.jsx("span",{className:"prow__submeta mono",children:e.years}),u.jsx("span",{className:"prow__submeta mono",children:e.role}),u.jsx("span",{className:"prow__tag",children:e.relationship})]}),u.jsx("span",{className:"prow__sep","aria-hidden":"true"}),u.jsxs("span",{className:"prow__metrics",children:[u.jsxs("span",{className:"prow__metric",children:[u.jsx("span",{className:"prow__metric-value",children:e.subscribers}),u.jsx("span",{className:"prow__metric-label mono",children:t.subscribers})]}),u.jsxs("span",{className:"prow__metric",children:[u.jsx("span",{className:"prow__metric-value",children:e.views}),u.jsx("span",{className:"prow__metric-label mono",children:t.views})]})]}),u.jsx("span",{className:"prow__sep","aria-hidden":"true"}),u.jsx("span",{className:"prow__contribution",children:e.contribution})]})})}function bf({projects:e,labels:t}){const n=T.useRef(null),r=T.useRef(null),l=T.useRef(!1),o=T.useRef(!1),i=T.useRef(0),a=T.useRef(0),s=T.useRef({x:0,t:0,v:0}),[d,v]=T.useState(!1),m=T.useRef(0),g=T.useRef(0),w=T.useRef(null),_=T.useRef(null),[k,D]=T.useState(!1),p=T.useCallback(()=>typeof window>"u"?!1:window.matchMedia("(min-width: 861px)").matches,[]),c=T.useCallback(()=>{const j=n.current,I=r.current;if(!j||!I||!p())return;const O=I.scrollWidth/2;O&&(j.scrollLeft<O*.5?j.scrollLeft+=O:j.scrollLeft>O*1.5&&(j.scrollLeft-=O))},[p]);T.useEffect(()=>{const j=n.current,I=r.current;if(!j||!I||!p())return;const O=()=>{const X=I.scrollWidth/2;X&&(j.scrollLeft=X,m.current=X)},ie=requestAnimationFrame(O);return window.addEventListener("load",O),()=>{cancelAnimationFrame(ie),window.removeEventListener("load",O)}},[p]),T.useEffect(()=>{if(!p())return;const j=n.current;if(!j)return;let I,O=performance.now();const ie=34,X=we=>{const mn=Math.min((we-O)/1e3,.05);if(O=we,!d&&!k){m.current+=ie*mn;const S=r.current,b=S?S.scrollWidth/2:0;if(b){for(;m.current>=b*1.5;)m.current-=b;for(;m.current<b*.5;)m.current+=b}j.scrollLeft=m.current}else m.current=j.scrollLeft;I=requestAnimationFrame(X)};return I=requestAnimationFrame(X),()=>cancelAnimationFrame(I)},[d,k,p,c]);const f=T.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),h=T.useCallback(()=>{f(),_.current=setTimeout(()=>{D(!1)},1700)},[f]),y=T.useCallback(()=>{const j=n.current;w.current=null,j&&g.current!==0&&(j.scrollLeft+=g.current,g.current=0,c(),m.current=j.scrollLeft)},[c]),E=T.useCallback(j=>{const I=n.current,O=r.current;if(!I||!O||!(O.scrollWidth>I.clientWidth+1))return;const we=Math.abs(j.deltaX)>Math.abs(j.deltaY)?j.deltaX:j.deltaY;j.preventDefault(),g.current+=we,w.current||(w.current=requestAnimationFrame(y)),D(!0),h()},[y,h]);T.useEffect(()=>{const j=n.current;if(j)return j.addEventListener("wheel",E,{passive:!1}),()=>{j.removeEventListener("wheel",E),w.current&&cancelAnimationFrame(w.current),f()}},[E,f]);const C=T.useCallback(j=>{var O,ie,X;if((ie=(O=j.target).closest)!=null&&ie.call(O,"a"))return;const I=n.current;I&&(l.current=!0,o.current=!1,i.current=j.clientX,a.current=I.scrollLeft,s.current={x:j.clientX,t:performance.now(),v:0},v(!0),(X=I.setPointerCapture)==null||X.call(I,j.pointerId))},[]),P=T.useCallback(j=>{const I=n.current;if(!I||!l.current)return;const O=j.clientX-i.current;Math.abs(O)>4&&(o.current=!0),I.scrollLeft=a.current-O;const ie=performance.now(),X=ie-s.current.t;if(X>0){const we=j.clientX-s.current.x;s.current={x:j.clientX,t:ie,v:we/X}}},[]),U=T.useCallback(j=>{var ie;const I=n.current;if(!l.current)return;l.current=!1,v(!1),I&&(j==null?void 0:j.pointerId)!=null&&((ie=I.releasePointerCapture)==null||ie.call(I,j.pointerId));let O=s.current.v;if(I&&Math.abs(O)>.02){let X;const we=()=>{I&&(O*=.94,I.scrollLeft-=O*16,c(),Math.abs(O)>.02&&(X=requestAnimationFrame(we)))};X=requestAnimationFrame(we),setTimeout(()=>X&&cancelAnimationFrame(X),900)}else c();setTimeout(()=>{o.current=!1},60)},[c]),L=T.useCallback(j=>{o.current&&(j.preventDefault(),j.stopPropagation())},[]);return u.jsx("div",{className:`pm-viewport ${d?"pm-viewport--dragging":""} ${k?"pm-viewport--wheeling":""}`,ref:n,onPointerDown:C,onPointerMove:P,onPointerUp:U,onPointerLeave:j=>{U(j)},onPointerCancel:U,onClickCapture:L,children:u.jsxs("div",{className:"pm-track",ref:r,children:[e.map(j=>u.jsx(Ya,{project:j,labels:t},j.id)),e.map(j=>u.jsx(Ya,{project:j,labels:t,duplicate:!0},`${j.id}-dup`))]})})}function zf({copy:e}){return u.jsxs("section",{className:"ps-section ps-projects","aria-labelledby":"projects-heading",children:[u.jsx(je,{children:u.jsxs("div",{className:"ps-projects__header",children:[u.jsx("div",{className:"ps-section__eyebrow mono",children:e.projectsEyebrow}),u.jsx("h2",{className:"ps-section__title",id:"projects-heading",children:e.projectsTitle}),u.jsx("p",{className:"ps-projects__sub",children:e.projectsSub})]})}),u.jsxs(je,{delay:100,children:[u.jsx("div",{className:"pm-wrap",children:u.jsx(bf,{projects:e.projects,labels:e})}),u.jsx("p",{className:"pm-hint mono","aria-hidden":"true",children:e.explore})]}),u.jsx(je,{delay:150,children:u.jsx("p",{className:"ps-projects__note",children:e.projectsNote})})]})}function Lf({video:e,onOpen:t,copy:n}){return u.jsxs("button",{type:"button",className:"mtile",onClick:()=>t(e),"aria-label":`${n.play} ${e.title}`,children:[u.jsxs("div",{className:"mtile__frame",children:[u.jsx("img",{className:"mtile__preview",src:e.preview,alt:"",loading:"lazy",draggable:"false"}),u.jsx("div",{className:"mtile__glow"}),u.jsx("div",{className:"mtile__playbtn",children:u.jsx("span",{className:"mtile__playbtn-icon",children:"↗"})}),u.jsxs("div",{className:"mtile__scrub",children:[u.jsx("span",{className:"mtile__play",children:n.view}),u.jsx("div",{className:"mtile__bar",children:u.jsx("div",{className:"mtile__bar-fill"})})]})]}),u.jsx("div",{className:"mtile__label",children:e.title}),u.jsx("div",{className:"mtile__category mono",children:e.category})]})}function Rf({video:e,onClose:t,copy:n}){if(T.useEffect(()=>{const l=i=>{i.key==="Escape"&&t()};document.addEventListener("keydown",l);const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",l),document.body.style.overflow=o}},[t]),!e)return null;const r=`https://drive.google.com/file/d/${e.driveFileId}/preview`;return u.jsx("div",{className:"vmodal-backdrop",onClick:t,role:"dialog","aria-modal":"true","aria-label":`${e.title} video player`,children:u.jsxs("div",{className:"vmodal",onClick:l=>l.stopPropagation(),children:[u.jsx("button",{type:"button",className:"vmodal__close",onClick:t,"aria-label":n.closeVideo,children:"×"}),u.jsx("div",{className:"vmodal__frame",children:u.jsx("iframe",{src:r,width:"100%",height:"100%",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:e.title},e.driveFileId)})]})})}function If(){const[e,t]=T.useState(()=>typeof window>"u"?"en":window.localStorage.getItem("portfolio-language")||"en"),[n,r]=T.useState(!1),[l,o]=T.useState(0),[i,a]=T.useState(null),s=kf(),d=Sf(s),v=Ef(gf),m=hf[e],g=T.useRef(null),w=T.useRef(null),_=T.useRef(null),k=T.useCallback(h=>{r(!1);const y=document.getElementById(h);y&&y.scrollIntoView({behavior:"smooth",block:"start"})},[]),D=T.useCallback(h=>{a(h)},[]),p=T.useCallback(()=>{a(null)},[]),c=T.useCallback(h=>{const y=h.currentTarget.getBoundingClientRect(),E=(h.clientX-y.left)/y.width-.5,C=(h.clientY-y.top)/y.height-.5;w.current&&(w.current.style.setProperty("--hpx",`${E*26}px`),w.current.style.setProperty("--hpy",`${C*26}px`)),_.current&&(_.current.style.setProperty("--hpx2",`${E*-18}px`),_.current.style.setProperty("--hpy2",`${C*-18}px`))},[]),f=T.useCallback(h=>{const y=h.currentTarget.getBoundingClientRect(),E=(h.clientX-y.left)/y.width*100,C=(h.clientY-y.top)/y.height*100;h.currentTarget.style.setProperty("--mx",`${E}%`),h.currentTarget.style.setProperty("--my",`${C}%`)},[]);return T.useEffect(()=>{window.localStorage.setItem("portfolio-language",e),document.documentElement.lang=e},[e]),u.jsxs("div",{className:`ps-root ${e==="ru"?"ps-root--ru":"ps-root--en"}`,children:[u.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;700;900&family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        :root {
          --void: #0a0b0f;
          --charcoal: #14161f;
          --panel: #1a1d29;
          --panel-line: #2a2e3d;
          --burgundy: #3d0f1c;
          --burgundy-bright: #7a1f35;
          --coral: #ff4b3e;
          --coral-dim: #c73a30;
          --offwhite: #f3ece3;
          --slate: #9096a6;
          --slate-dim: #5c6274;
          --font-display: 'Big Shoulders Display', sans-serif;

          --glass-fill: rgba(255,255,255,0.045);
          --glass-fill-strong: rgba(255,255,255,0.09);
          --glass-fill-bright: rgba(255,255,255,0.14);
          --glass-border: rgba(255,255,255,0.16);
          --glass-border-soft: rgba(255,255,255,0.08);
          --glass-highlight: rgba(255,255,255,0.45);
          --coral-soft: rgba(255,75,62,0.4);
          --burgundy-soft: rgba(122,31,53,0.5);
          --shadow-glass: 0 30px 70px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07);
          --shadow-glass-soft: 0 16px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        html, body, #root {
          margin: 0;
          width: 100%;
          min-height: 100%;
          background: var(--void);
        }

        body {
          overflow-x: hidden;
        }

        .ps-root {
          width: 100%;
          background: var(--void);
          color: var(--offwhite);
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .ps-root * { box-sizing: border-box; }

        .ps-root--ru {
          --font-display: 'Oswald', 'Arial Narrow', sans-serif;
        }

        .ps-root h1, .ps-root h2, .ps-root h3 {
          font-family: var(--font-display);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          margin: 0;
          line-height: 0.92;
        }

        .mono { font-family: 'IBM Plex Mono', monospace; }

        /* -------- grain + ambient liquid-light system -------- */
        .ps-grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 200;
          opacity: 0.035;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .ps-ambient {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .ps-ambient__orb {
          position: absolute;
          border-radius: 44% 56% 60% 40% / 50% 45% 55% 50%;
          filter: blur(100px);
          opacity: 0.55;
          will-change: transform;
        }
        .ps-ambient__orb--1 {
          width: 52vw; height: 52vw;
          background: radial-gradient(circle at 35% 35%, var(--burgundy-bright), var(--burgundy) 55%, transparent 75%);
          top: -16vw; right: -14vw;
          animation: driftA 38s ease-in-out infinite;
        }
        .ps-ambient__orb--2 {
          width: 38vw; height: 38vw;
          background: radial-gradient(circle at 60% 40%, var(--coral-dim), transparent 72%);
          bottom: 2vw; left: -12vw;
          animation: driftB 44s ease-in-out infinite;
        }
        .ps-ambient__orb--3 {
          width: 24vw; height: 24vw;
          background: radial-gradient(circle, var(--burgundy-soft), transparent 75%);
          top: 38vh; left: 30vw;
          opacity: 0.4;
          animation: driftC 50s ease-in-out infinite;
        }
        .ps-ambient__sheen {
          position: absolute;
          top: -20%;
          left: -30%;
          width: 160%;
          height: 60%;
          background: linear-gradient(100deg, transparent 42%, rgba(255,255,255,0.028) 50%, transparent 58%);
          transform: rotate(-8deg);
          animation: sheenMove 30s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        @keyframes driftA {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-4vw, 5vw) scale(1.06); }
        }
        @keyframes driftB {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(5vw, -4vw) scale(1.08); }
        }
        @keyframes driftC {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(3vw, -3vw); }
        }
        @keyframes sheenMove {
          0%, 100% { transform: translate(-4%, 0) rotate(-8deg); opacity: 0.5; }
          50% { transform: translate(4%, 3%) rotate(-8deg); opacity: 0.9; }
        }

        /* -------- scroll timecode rail -------- */
        .ps-timeline {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--glass-fill);
          z-index: 300;
        }
        .ps-timeline__fill {
          height: 100%;
          background: linear-gradient(90deg, var(--burgundy-bright), var(--coral));
          width: ${s*100}%;
          transition: width 60ms linear;
          box-shadow: 0 0 12px var(--coral-soft);
        }
        .ps-timeline__code {
          position: fixed;
          top: 82px;
          right: 6vw;
          z-index: 300;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--slate);
          background: var(--glass-fill-strong);
          backdrop-filter: blur(16px) saturate(140%);
          padding: 6px 12px;
          border: 1px solid var(--glass-border-soft);
          border-radius: 999px;
          box-shadow: var(--shadow-glass-soft);
        }
        @media (max-width: 1100px) {
          .ps-timeline__code { display: none; }
        }

        /* -------- floating glass navigation -------- */
        .ps-nav-wrap {
          position: fixed;
          top: 22px;
          left: 0; right: 0;
          z-index: 150;
          display: flex;
          justify-content: center;
          pointer-events: none;
          padding: 0 6vw;
        }
        .ps-nav-glass {
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 8px 6px 22px;
          border-radius: 14px;
          background: linear-gradient(180deg, var(--glass-fill-strong), var(--glass-fill));
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid var(--glass-border-soft);
          box-shadow: var(--shadow-glass-soft);
          max-width: 100%;
        }
        .ps-nav-glass__name {
          font-family: var(--font-display);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.03em;
          cursor: pointer;
          background: none;
          border: none;
          color: var(--offwhite);
          padding-right: 18px;
          margin-right: 10px;
          border-right: 1px solid var(--glass-border-soft);
          white-space: nowrap;
        }

        .ps-lang-switch {
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .ps-lang-dock {
          position: fixed;
          top: 22px;
          left: 6vw;
          z-index: 151;
          width: 246px;
          height: 46px;
          padding: 4px;
          border: 1px solid var(--glass-border-soft);
          border-radius: 14px;
          background: linear-gradient(180deg, var(--glass-fill-strong), var(--glass-fill));
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          box-shadow: var(--shadow-glass-soft);
        }
        .ps-lang-dock__button {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 0;
          border: 0;
          border-radius: 10px;
          background: transparent;
          cursor: pointer;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          color: var(--slate);
          font: 500 12px/1 "IBM Plex Mono", monospace;
          letter-spacing: .035em;
          overflow: hidden;
        }
        .ps-lang-dock__thumb {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          border-radius: 9px;
          background: linear-gradient(145deg, rgba(255,75,62,.3), rgba(122,31,53,.34));
          border: 1px solid rgba(255,75,62,.34);
          box-shadow: 0 8px 20px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.13);
          transform: translateX(0);
          transition: transform .34s cubic-bezier(.2,.85,.25,1);
        }
        .ps-lang-dock--ru .ps-lang-dock__thumb { transform: translateX(100%); }
        .ps-lang-dock__label {
          position: relative;
          z-index: 1;
          transition: color .25s ease;
        }
        .ps-lang-dock--en .ps-lang-dock__label:first-of-type,
        .ps-lang-dock--ru .ps-lang-dock__label:last-of-type { color: var(--offwhite); }
        .ps-lang-switch__btn {
          appearance: none;
          border: 0;
          border-radius: 8px;
          background: transparent;
          color: var(--slate);
          font: 500 11px/1 "IBM Plex Mono", monospace;
          letter-spacing: .08em;
          padding: 8px 7px;
          cursor: pointer;
          transition: color .2s ease, background .2s ease;
        }
        .ps-lang-switch__btn:hover { color: var(--offwhite); }
        .ps-lang-switch__btn--active {
          color: var(--offwhite);
          background: rgba(255,75,62,.14);
        }
        .ps-nav-glass__links {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        .ps-nav-glass__link {
          position: relative;
          background: none;
          border: none;
          color: var(--slate);
          font-size: 13px;
          letter-spacing: 0.03em;
          cursor: pointer;
          padding: 10px 14px;
          border-radius: 8px;
          transition: color 0.25s ease;
          white-space: nowrap;
        }
        .ps-nav-glass__link span {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }
        .ps-nav-glass__link span::before {
          content: "";
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--coral);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .ps-nav-glass__link:hover { color: var(--offwhite); }
        .ps-nav-glass__link--active { color: var(--offwhite); }
        .ps-nav-glass__link--active span::before { opacity: 1; }
        .ps-nav-tg {
          pointer-events: auto;
          position: fixed;
          top: 22px;
          right: 6vw;
          z-index: 150;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--offwhite);
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 10px;
          background: var(--glass-fill);
          border: 1px solid var(--glass-border-soft);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
          transition: border-color 0.3s ease, background 0.3s ease;
          white-space: nowrap;
        }
        .ps-nav-tg:hover {
          border-color: rgba(255,75,62,0.4);
          background: var(--glass-fill-strong);
        }
        .ps-nav-tg__dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 0 4px rgba(74,222,128,.09), 0 0 12px rgba(74,222,128,.65);
          animation: onlinePulse 2.2s ease-in-out infinite;
        }
        @keyframes onlinePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(.82); opacity: .72; }
        }
        @media (max-width: 900px) {
          .ps-nav-glass__links { display: none; }
          .ps-nav-glass { padding: 8px 8px 8px 20px; }
          .ps-nav-tg { display: none; }
          .ps-lang-dock { display: none; }
        }
        .ps-nav-burger {
          display: none;
          pointer-events: auto;
          position: fixed;
          top: 22px;
          right: 6vw;
          z-index: 150;
          width: 44px; height: 44px;
          border-radius: 10px;
          background: var(--glass-fill-strong);
          backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid var(--glass-border-soft);
          color: var(--offwhite);
          font-size: 16px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .ps-nav-burger { display: flex; }
        }
        .ps-mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 149;
          background: rgba(10,11,15,0.7);
          backdrop-filter: blur(30px) saturate(140%);
          -webkit-backdrop-filter: blur(30px) saturate(140%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 22px;
          animation: fadeIn 0.3s ease both;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .ps-mobile-menu button.ps-mobile-menu__link {
          background: none; border: none; color: var(--offwhite);
          font-size: 30px; text-align: center; padding: 6px 0;
          font-family: var(--font-display); text-transform: uppercase;
          font-weight: 700;
        }
        .ps-mobile-menu__cta {
          margin-top: 18px;
        }

        /* -------- hero -------- */
        .ps-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 16vh 6vw 8vh;
          z-index: 1;
          overflow: hidden;
        }
        .ps-hero__glow-mass {
          position: absolute;
          top: -12%;
          right: -10%;
          width: 64%;
          height: 118%;
          border-radius: 42% 58% 63% 37% / 48% 42% 58% 52%;
          background:
            radial-gradient(circle at 42% 30%, rgba(255,120,95,0.14), transparent 45%),
            radial-gradient(circle at 55% 45%, var(--burgundy-bright) 0%, var(--burgundy) 45%, transparent 72%);
          filter: blur(60px);
          opacity: 0.8;
          pointer-events: none;
          z-index: 0;
          transform: translate(var(--hpx, 0px), var(--hpy, 0px));
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .ps-hero__glow-core {
          position: absolute;
          top: 22%;
          right: 14%;
          width: 24%;
          height: 34%;
          border-radius: 50%;
          background: radial-gradient(circle, var(--coral-soft), transparent 70%);
          filter: blur(40px);
          opacity: 0.45;
          pointer-events: none;
          z-index: 0;
          transform: translate(var(--hpx2, 0px), var(--hpy2, 0px));
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }

        /* -------- hero portrait -------- */
        .ps-hero__portrait {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 58vw;
          max-width: 980px;
          height: auto;
          max-height: 92vh;
          z-index: 1;
          pointer-events: none;
          order: 0;
        }
        .ps-hero__portrait img {
          display: block;
          width: 100%;
          height: auto;
          max-height: 92vh;
          object-fit: contain;
          object-position: right bottom;
          pointer-events: none;
        }
        /* The portrait PNG already has transparency. Keep the wrapper fully transparent
           so no rectangular overlay becomes visible around the image. */
        .ps-hero__portrait-overlay {
          display: none;
        }
        .ps-hero__content {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .ps-hero__eyebrow-chip {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11.5px;
          letter-spacing: 0.18em;
          color: var(--slate);
          margin-bottom: 34px;
        }
        .ps-hero__eyebrow-chip::before {
          content: "";
          width: 28px; height: 1px;
          background: var(--coral);
        }
        .ps-hero__name {
          font-size: clamp(3.6rem, 12vw, 9.5rem);
          color: var(--offwhite);
          width: 100%;
          margin: 0 0 -0.06em;
          text-shadow: 0 20px 60px rgba(0,0,0,0.55);
        }
        .ps-hero__meta {
          position: relative;
          z-index: 3;
          max-width: 640px;
          margin-top: 6vh;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .ps-glass-panel {
          position: relative;
          overflow: hidden;
          background: linear-gradient(155deg, var(--glass-fill-strong), var(--glass-fill));
          backdrop-filter: blur(24px) saturate(140%);
          -webkit-backdrop-filter: blur(24px) saturate(140%);
          border: 1px solid var(--glass-border-soft);
          border-radius: 18px;
          box-shadow: var(--shadow-glass-soft);
        }
        .ps-glass-panel::before {
          content: "";
          position: absolute;
          top: 1px; left: 6%;
          width: 45%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--glass-highlight), transparent);
          opacity: 0.35;
        }
        .ps-glass-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle 160px at var(--mx, 50%) var(--my, 20%), rgba(255,255,255,0.08), transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .ps-glass-panel:hover::after { opacity: 1; }
        .ps-hero__titles {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .ps-hero__title-line {
          font-size: clamp(1rem, 1.9vw, 1.3rem);
          color: var(--slate);
          font-weight: 500;
          display: flex;
          align-items: baseline;
          gap: 12px;
        }
        .ps-hero__title-line::before {
          content: "";
          width: 14px; height: 1px;
          background: var(--panel-line);
          flex-shrink: 0;
          transform: translateY(-4px);
        }
        .ps-hero__title-line b {
          color: var(--offwhite);
          font-weight: 600;
        }
        .ps-hero__statement-glass {
          padding: 30px 34px;
          font-size: clamp(1.05rem, 1.9vw, 1.4rem);
          color: var(--offwhite);
          line-height: 1.4;
          font-weight: 400;
          max-width: 46ch;
        }
        .ps-hero__actions {
          margin-top: 4px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .ps-glass-btn {
          font-size: 13.5px;
          font-weight: 600;
          padding: 16px 26px;
          border-radius: 10px;
          cursor: pointer;
          letter-spacing: 0.02em;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, background 0.3s ease;
        }
        .ps-glass-btn--primary {
          background: var(--coral);
          border: 1px solid var(--coral);
          color: var(--void);
        }
        .ps-glass-btn--primary:hover {
          background: #ff6357;
          transform: translateY(-2px);
        }
        .ps-glass-btn--ghost {
          background: var(--glass-fill);
          border: 1px solid var(--glass-border-soft);
          color: var(--offwhite);
          backdrop-filter: blur(18px) saturate(140%);
        }
        .ps-glass-btn--ghost:hover {
          border-color: var(--glass-border);
          background: var(--glass-fill-strong);
          transform: translateY(-2px);
        }
        .ps-hero__scroll-cue {
          position: absolute;
          bottom: 5vh;
          left: 6vw;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--slate-dim);
          z-index: 2;
        }
        .ps-hero__scroll-line {
          width: 40px; height: 1px;
          background: var(--slate-dim);
        }
        @media (min-width: 861px) {
          .ps-hero__name {
            max-width: 66%;
            font-size: clamp(3.6rem, 8.5vw, 7.6rem);
          }
        }
        @media (max-width: 860px) {
          .ps-hero {
            padding: 14vh 6vw 8vh;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 22px;
          }
          .ps-hero__glow-mass { width: 96%; height: 46%; top: -6%; right: -18%; }
          .ps-hero__glow-core { width: 60%; height: 22%; top: 4%; }
          .ps-hero__content { display: contents; }
          .ps-hero__meta { display: contents; }
          .ps-hero__titles { order: 0; }
          .ps-hero__portrait {
            position: static;
            order: 1;
            width: min(94%, 480px);
            height: auto;
            margin: 0 auto;
          }
          .ps-hero__portrait img {
            width: 100%;
            height: auto;
            max-height: none;
          }
          .ps-hero__portrait-overlay { display: none; }
          .ps-hero__statement-glass { max-width: 100%; order: 2; }
          .ps-hero__actions { order: 3; margin-top: 0; }
          .ps-hero__scroll-cue { display: none; }
        }

        /* -------- section shared -------- */
        .ps-section {
          position: relative;
          z-index: 1;
          padding: 10vh 6vw;
        }
        .ps-section__header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 6vh;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--panel-line);
          padding-bottom: 20px;
        }
        .ps-section__eyebrow {
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--coral);
        }
        .ps-section__title {
          font-size: clamp(2rem, 5vw, 3.6rem);
          color: var(--offwhite);
        }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal--visible { opacity: 1; transform: translateY(0); }

        /* -------- metrics -------- */
        .ps-metrics-strip {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border-top: 1px solid var(--panel-line);
          border-bottom: 1px solid var(--panel-line);
        }
        .metric {
          padding: 5vh 1.5vw;
          border-right: 1px solid var(--panel-line);
          text-align: left;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .metric:last-child { border-right: none; }
        .metric--visible { opacity: 1; transform: translateY(0); }
        .metric__value {
          font-family: 'IBM Plex Mono', monospace;
          font-size: clamp(2rem, 4.2vw, 3.4rem);
          color: var(--coral);
          font-weight: 500;
          line-height: 1;
        }
        .metric__suffix { font-size: 0.55em; margin-left: 2px; }
        .metric__label {
          margin-top: 10px;
          font-size: 12.5px;
          color: var(--slate);
          max-width: 16ch;
          line-height: 1.4;
        }
        @media (max-width: 860px) {
          .ps-metrics-strip { grid-template-columns: repeat(2, 1fr); }
          .metric:nth-child(2n) { border-right: none; }
          .metric { border-bottom: 1px solid var(--panel-line); }
        }

        /* -------- cases -------- */
        .case {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 4vw;
          padding: 6vh 0;
          border-bottom: 1px solid var(--panel-line);
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .case--visible { opacity: 1; transform: translateY(0); }
        .case__code {
          font-family: 'IBM Plex Mono', monospace;
          color: var(--slate-dim);
          font-size: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .case__code-line {
          width: 1px;
          height: 60px;
          background: var(--panel-line);
        }
        .case__title {
          font-size: clamp(1.6rem, 3.4vw, 2.6rem);
          color: var(--offwhite);
          margin-bottom: 8px;
        }
        .case__tag {
          color: var(--coral);
          font-size: 13px;
          letter-spacing: 0.03em;
          margin: 0 0 4vh;
        }
        .case__grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.3fr;
          gap: 4vw;
          margin-bottom: 4vh;
        }
        .case__eyebrow {
          display: block;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--slate);
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .case__col p {
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--offwhite);
          margin: 0;
          opacity: 0.9;
        }
        .case__col--actions ul {
          margin: 0; padding: 0; list-style: none;
          display: flex; flex-direction: column; gap: 8px;
        }
        .case__col--actions li {
          font-size: 14px;
          color: var(--offwhite);
          opacity: 0.9;
          padding-left: 14px;
          position: relative;
          line-height: 1.4;
        }
        .case__col--actions li::before {
          content: "";
          position: absolute; left: 0; top: 7px;
          width: 5px; height: 5px;
          background: var(--coral);
        }
        .case__outcomes {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }
        .case__outcome-value {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 26px;
          color: var(--offwhite);
        }
        .case__outcome-label {
          font-size: 12px;
          color: var(--slate);
          margin-top: 4px;
        }
        @media (max-width: 860px) {
          .case { grid-template-columns: 1fr; gap: 3vh; }
          .case__grid { grid-template-columns: 1fr; gap: 3vh; }
          .case__code { flex-direction: row; align-items: center; }
          .case__code-line { width: 40px; height: 1px; }
        }

        /* -------- expertise -------- */
        .xrow {
          border-bottom: 1px solid var(--panel-line);
        }
        .xrow__head {
          width: 100%;
          background: none;
          border: none;
          color: var(--offwhite);
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 26px 4px;
          cursor: pointer;
          text-align: left;
        }
        .xrow__num {
          font-family: 'IBM Plex Mono', monospace;
          color: var(--slate-dim);
          font-size: 13px;
          width: 28px;
        }
        .xrow__title {
          flex: 1;
          font-family: var(--font-display);
          text-transform: uppercase;
          font-weight: 700;
          font-size: clamp(1.2rem, 2.6vw, 1.9rem);
          transition: color 0.2s ease;
        }
        .xrow--open .xrow__title, .xrow__head:hover .xrow__title { color: var(--coral); }
        .xrow__icon {
          font-size: 20px;
          color: var(--slate);
          width: 24px;
          text-align: center;
        }
        .xrow__panel {
          overflow: hidden;
          transition: max-height 0.35s ease;
        }
        .xrow__panel p {
          margin: 0 0 24px 52px;
          max-width: 56ch;
          color: var(--slate);
          font-size: 15px;
          line-height: 1.55;
        }
        @media (max-width: 600px) {
          .xrow__panel p { margin-left: 0; }
        }


        /* -------- tools & platforms -------- */
        .ps-tools {
          padding-top: 8vh;
          padding-bottom: 10vh;
        }
        .ps-tools__header {
          margin-bottom: 4vh;
        }
        .ps-tools__sub {
          margin: 16px 0 0;
          max-width: 52ch;
          color: var(--slate);
          font-size: 15px;
          line-height: 1.6;
        }
        .ps-tools__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: start;
          gap: 18px;
        }
        .tool-card {
          position: relative;
          align-self: start;
          border: 1px solid var(--glass-border-soft);
          border-radius: 20px;
          background:
            radial-gradient(circle at 12% 0%, rgba(255,75,62,0.08), transparent 34%),
            linear-gradient(145deg, rgba(255,255,255,0.065), rgba(255,255,255,0.025));
          box-shadow: var(--shadow-glass-soft);
          overflow: hidden;
          opacity: 0;
          transform: translateY(22px) scale(0.99);
          transition:
            opacity 0.6s ease var(--card-delay),
            transform 0.6s cubic-bezier(.2,.8,.2,1) var(--card-delay),
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }
        .tool-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255,255,255,0.1), transparent 24%, transparent 72%, rgba(255,75,62,0.05));
          opacity: 0.5;
        }
        .ps-tools__grid--visible .tool-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .tool-card:hover,
        .tool-card--open {
          border-color: rgba(255,75,62,0.34);
          box-shadow: 0 22px 54px rgba(0,0,0,0.48), 0 0 30px rgba(255,75,62,0.07), inset 0 1px 0 rgba(255,255,255,0.08);
        }
        .tool-card__toggle {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: 86px;
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          align-items: center;
          gap: 14px;
          padding: 20px 22px;
          border: 0;
          background: transparent;
          color: var(--offwhite);
          text-align: left;
          cursor: pointer;
        }
        .tool-card__toggle:focus-visible {
          outline: 2px solid var(--coral);
          outline-offset: -3px;
        }
        .tool-card__index {
          color: var(--coral);
          font-size: 11px;
        }
        .tool-card__title {
          font-family: var(--font-display);
          text-transform: uppercase;
          font-weight: 700;
          font-size: clamp(1.1rem, 2vw, 1.45rem);
          line-height: 1;
        }
        .tool-card__action {
          color: var(--slate);
          font-size: 10px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .tool-card__chevron {
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.1);
          color: var(--offwhite);
          font-size: 18px;
          transform: rotate(0deg);
          transition: transform .3s ease, background .25s ease, border-color .25s ease;
        }
        .tool-card--open .tool-card__chevron {
          transform: rotate(180deg);
          background: rgba(255,75,62,.13);
          border-color: rgba(255,75,62,.34);
        }
        .tool-card__panel {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows .38s cubic-bezier(.2,.8,.2,1), opacity .24s ease;
        }
        .tool-card--open .tool-card__panel {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .tool-card__items {
          position: relative;
          z-index: 1;
          min-height: 0;
          overflow: hidden;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          padding: 0 22px;
        }
        .tool-card--open .tool-card__items { padding-bottom: 22px; }
        .tool-pill {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 10px 12px;
          border: 1px solid rgba(255,255,255,0.075);
          border-radius: 14px;
          background: rgba(7,8,12,0.35);
          opacity: 0;
          transform: translateY(8px);
          transition:
            opacity .32s ease var(--tool-delay),
            transform .32s ease var(--tool-delay),
            background .22s ease,
            border-color .22s ease;
        }
        .tool-card--open .tool-pill {
          opacity: 1;
          transform: translateY(0);
        }
        .tool-pill:hover {
          background: rgba(255,255,255,0.075);
          border-color: rgba(255,75,62,0.3);
        }
        .tool-pill__mark {
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          border: 1px solid rgba(255,75,62,0.26);
          background: linear-gradient(145deg, rgba(255,75,62,0.17), rgba(122,31,53,0.16));
          color: var(--offwhite);
          font-size: 10px;
          letter-spacing: -0.03em;
          transition: transform 0.22s ease, border-color 0.22s ease, color 0.22s ease;
        }
        .tool-pill:hover .tool-pill__mark {
          transform: translateY(-2px);
          border-color: rgba(255,75,62,0.62);
          color: var(--coral);
        }
        .tool-pill__name {
          min-width: 0;
          color: rgba(243,236,227,0.9);
          font-size: 13px;
          font-weight: 500;
          line-height: 1.25;
        }
        @media (max-width: 820px) {
          .ps-tools__grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .tool-card__toggle {
            grid-template-columns: auto 1fr auto;
            padding: 18px;
          }
          .tool-card__action { display: none; }
          .tool-card__items { grid-template-columns: 1fr; padding-left: 18px; padding-right: 18px; }
          .tool-card--open .tool-card__items { padding-bottom: 18px; }
        }

        /* -------- project experience -------- */
        .ps-projects {
          overflow: hidden;
        }
        .ps-projects__header {
          margin-bottom: 6vh;
          max-width: 62ch;
        }
        .ps-projects__sub {
          margin-top: 16px;
          font-size: 15px;
          line-height: 1.6;
          color: var(--slate);
          max-width: 50ch;
        }
        .ps-projects__note {
          margin: 5vh 0 0;
          font-size: 12px;
          color: var(--slate-dim);
          letter-spacing: 0.01em;
          max-width: 60ch;
        }

        .pm-hint {
          display: none;
          margin: 14px 0 0;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--slate-dim);
          opacity: 0.7;
        }
        @media (hover: hover) and (pointer: fine) and (min-width: 861px) {
          .pm-hint { display: block; }
        }

        .pm-wrap {
          position: relative;
        }

        .pm-viewport {
          overflow-x: auto;
          overflow-y: hidden;
          cursor: grab;
          scrollbar-width: none;
          -ms-overflow-style: none;
          user-select: none;
          -webkit-user-select: none;

          /* Fade the moving content itself instead of placing dark overlays
             above it. This keeps the section background visually clean. */
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 clamp(28px, 5vw, 90px),
            #000 calc(100% - clamp(28px, 5vw, 90px)),
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 clamp(28px, 5vw, 90px),
            #000 calc(100% - clamp(28px, 5vw, 90px)),
            transparent 100%
          );
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
        }
        .pm-viewport::-webkit-scrollbar { display: none; }
        .pm-viewport--dragging {
          cursor: grabbing;
        }
        .pm-track {
          display: flex;
          width: max-content;
        }

        .prow {
          flex-shrink: 0;
          position: relative;
          margin-right: clamp(52px, 5vw, 84px);
          padding-right: clamp(52px, 5vw, 84px);
        }
        .prow::after {
          content: "";
          position: absolute;
          top: 18%;
          right: 0;
          width: 1px;
          height: 64%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 75, 62, 0.55) 18%,
            rgba(255, 75, 62, 0.55) 82%,
            transparent
          );
        }
        .prow__link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          width: clamp(720px, 56vw, 930px);
          padding: 26px 0;
          color: inherit;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .prow__link:hover {
          transform: translateX(5px);
        }
        .prow__logo {
          flex-shrink: 0;
          width: 132px;
          height: 114px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }
        .prow__logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          filter: brightness(0.92);
          transition: filter 0.35s ease;
        }
        .prow__link:hover .prow__logo img {
          filter: brightness(1.08);
        }
        .prow__sep {
          flex-shrink: 0;
          width: 1px;
          align-self: stretch;
          background: var(--panel-line);
          transition: background 0.35s ease;
        }
        .prow__link:hover .prow__sep {
          background: var(--coral-dim);
        }
        .prow__meta {
          flex-shrink: 0;
          width: 172px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .prow__name {
          display: inline-flex;
          align-items: baseline;
          gap: 6px;
          width: fit-content;
          font-family: var(--font-display);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 1.3rem;
          color: var(--offwhite);
          line-height: 1.05;
          text-decoration: underline;
          text-decoration-color: transparent;
          text-underline-offset: 4px;
          transition: color 0.25s ease, text-decoration-color 0.25s ease;
        }
        .prow__name:hover,
        .prow__name:focus-visible {
          color: var(--coral);
          text-decoration-color: currentColor;
          outline: none;
        }
        .prow__name:focus-visible {
          box-shadow: 0 0 0 2px rgba(255,75,62,0.35);
          border-radius: 2px;
        }
        .prow__name-arrow {
          font-family: system-ui, sans-serif;
          font-size: 0.72em;
          color: var(--coral);
          transform: translateY(-0.08em);
          transition: transform 0.2s ease;
        }
        .prow__name:hover .prow__name-arrow,
        .prow__name:focus-visible .prow__name-arrow {
          transform: translate(2px, -2px);
        }
        .prow__submeta {
          font-size: 10.5px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--slate);
        }
        .prow__tag {
          margin-top: 4px;
          display: inline-block;
          width: fit-content;
          font-size: 10px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--coral);
          border: 1px solid rgba(255,75,62,0.35);
          padding: 4px 8px;
          border-radius: 3px;
        }
        .prow__metrics {
          flex-shrink: 0;
          width: 148px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .prow__metric-value {
          display: block;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.8rem;
          color: var(--offwhite);
          line-height: 1;
        }
        .prow__metric-label {
          display: block;
          margin-top: 4px;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--slate-dim);
        }
        .prow__contribution {
          flex: 1;
          min-width: 220px;
          max-width: 290px;
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--slate);
        }

        @media (max-width: 1100px) {
          .prow { margin-right: 44px; padding-right: 44px; }
          .prow__link { width: clamp(650px, 76vw, 820px); gap: 11px; padding: 24px 0; }
          .prow__logo { width: 118px; height: 102px; }
          .prow__contribution { min-width: 0; max-width: 250px; }
        }

        @media (max-width: 860px) {
          .prow { margin-right: 24px; padding-right: 24px; }
          .prow::after { display: none; }
          .pm-viewport { -webkit-mask-image: none; mask-image: none; }
          .pm-viewport {
            scroll-snap-type: x mandatory;
            cursor: default;
          }
          .pm-track {
            animation: none !important;
            transform: none !important;
          }
          .pm-track > .prow[aria-hidden="true"] {
            display: none;
          }
          .prow {
            scroll-snap-align: start;
          }
          .prow__link {
            width: 90vw;
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
            padding: 28px 22px;
          }
          .prow__link:hover { transform: none; }
          .prow__logo { width: 120px; height: 104px; align-self: center; }
          .prow__sep { display: none; }
          .prow__meta { width: 100%; }
          .prow__metrics { width: 100%; flex-direction: row; gap: 32px; }
          .prow__contribution { min-width: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .pm-track { animation: none !important; }
          .prow__link, .prow__logo img, .prow__sep, .prow__name-arrow {
            transition: none !important;
          }
        }

        /* -------- motion work -------- */
        .ps-section--dark {
          background: var(--charcoal);
          border-top: 1px solid var(--panel-line);
          border-bottom: 1px solid var(--panel-line);
        }
        .ps-motion-line {
          font-size: clamp(1.3rem, 2.6vw, 1.9rem);
          color: var(--offwhite);
          max-width: 30ch;
          margin: 0 0 6vh;
          font-family: var(--font-display);
          text-transform: uppercase;
          font-weight: 700;
          line-height: 1.15;
        }
        .ps-motion-line span { color: var(--coral); }
        .mtile-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }
        .mtile {
          appearance: none;
          border: 0;
          padding: 0;
          background: transparent;
          color: inherit;
          font: inherit;
          text-align: left;
          display: block;
          width: 100%;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          font: inherit;
          color: inherit;
          text-align: left;
          cursor: pointer;
        }
        .mtile:focus-visible .mtile__frame {
          outline: 2px solid var(--coral);
          outline-offset: 3px;
        }
        .mtile__frame {
          position: relative;
          aspect-ratio: 4/5;
          background: linear-gradient(155deg, #232634, #14151c);
          border: 1px solid var(--panel-line);
          border-radius: 2px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .mtile__preview {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), filter 0.35s ease;
        }
        .mtile:hover .mtile__preview,
        .mtile:focus-visible .mtile__preview {
          transform: scale(1.045);
          filter: brightness(0.72);
        }
        .mtile:hover .mtile__frame,
        .mtile:focus-visible .mtile__frame {
          transform: translateY(-6px) scale(1.025);
          border-color: var(--coral-dim);
          box-shadow: 0 18px 40px rgba(0,0,0,0.45);
        }
        .mtile:active .mtile__frame {
          transform: translateY(-3px) scale(1.01);
        }
        .mtile__glow {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,9,14,0.58), transparent 48%);
          transition: background 0.4s ease;
        }
        .mtile:hover .mtile__glow,
        .mtile:focus-visible .mtile__glow {
          background: radial-gradient(circle at 50% 30%, rgba(255,75,62,0.18), transparent 65%), linear-gradient(to top, rgba(8,9,14,0.62), transparent 52%);
        }
        .mtile__playbtn {
          position: absolute;
          top: 50%; left: 50%;
          width: 46px; height: 46px;
          border-radius: 50%;
          background: rgba(10,11,15,0.55);
          border: 1px solid var(--glass-border-soft);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%) scale(0.82);
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }
        .mtile__playbtn-icon {
          font-size: 13px;
          color: var(--offwhite);
          transform: translateX(1px);
        }
        .mtile:hover .mtile__playbtn,
        .mtile:focus-visible .mtile__playbtn {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
          background: var(--coral);
          border-color: var(--coral);
        }
        .mtile__scrub {
          position: absolute;
          bottom: 14px; left: 14px; right: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .mtile__play {
          font-size: 11px;
          color: var(--offwhite);
          opacity: 0.85;
        }
        .mtile__bar {
          flex: 1;
          height: 2px;
          background: rgba(255,255,255,0.15);
        }
        .mtile__bar-fill {
          width: 30%;
          height: 100%;
          background: var(--coral);
          transition: width 0.4s ease;
        }
        .mtile:hover .mtile__bar-fill,
        .mtile:focus-visible .mtile__bar-fill { width: 78%; }
        .mtile__label {
          margin-top: 12px;
          font-size: 13px;
          color: var(--offwhite);
          letter-spacing: 0.01em;
          line-height: 1.35;
        }
        .mtile__category {
          margin-top: 6px;
          font-size: 9.5px;
          line-height: 1.45;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--slate-dim);
        }
        .ps-motion-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 34px;
        }
        @media (max-width: 900px) {
          .mtile-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* -------- about -------- */
        .ps-about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 6vw;
        }
        .ps-about-quote {
          font-family: var(--font-display);
          font-weight: 700;
          text-transform: uppercase;
          font-size: clamp(1.6rem, 3.2vw, 2.4rem);
          line-height: 1.15;
          color: var(--offwhite);
        }
        .ps-about-quote span { color: var(--coral); }
        .ps-about-body p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--slate);
          max-width: 56ch;
          margin: 0 0 20px;
        }
        .ps-about-body strong { color: var(--offwhite); font-weight: 600; }
        .ps-about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }
        .ps-about-tag {
          border: 1px solid var(--panel-line);
          padding: 8px 14px;
          font-size: 12.5px;
          color: var(--offwhite);
          border-radius: 2px;
        }
        @media (max-width: 860px) {
          .ps-about-grid { grid-template-columns: 1fr; gap: 4vh; }
        }

        /* -------- contact -------- */
        .ps-contact {
          text-align: center;
          padding: 14vh 6vw 10vh;
        }
        .ps-contact__title {
          font-size: clamp(2.2rem, 7vw, 5.2rem);
          color: var(--offwhite);
          margin-bottom: 28px;
        }
        .ps-contact__title span { color: var(--coral); }
        .ps-contact__links {
          width: min(920px, 100%);
          margin: 42px auto 0;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }
        .ps-contact__link {
          min-height: 104px;
          padding: 20px 22px;
          border-radius: 16px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          color: var(--offwhite);
          background: linear-gradient(155deg, var(--glass-fill-strong), var(--glass-fill));
          border: 1px solid var(--glass-border-soft);
          box-shadow: var(--shadow-glass-soft);
          backdrop-filter: blur(20px) saturate(145%);
          -webkit-backdrop-filter: blur(20px) saturate(145%);
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, background 0.3s ease;
        }
        .ps-contact__link:hover {
          transform: translateY(-4px);
          border-color: var(--glass-border);
          background: linear-gradient(155deg, var(--glass-fill-bright), var(--glass-fill-strong));
        }
        .ps-contact__link--primary {
          background: linear-gradient(155deg, rgba(255,75,62,0.98), rgba(255,75,62,0.78));
          border-color: rgba(255,126,116,0.68);
          color: var(--void);
        }
        .ps-contact__link--primary:hover {
          background: linear-gradient(155deg, #ff6357, var(--coral));
          border-color: rgba(255,255,255,0.32);
        }
        .ps-contact__link-label {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.01em;
        }
        .ps-contact__link-meta {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: var(--slate);
          font-size: 12px;
          line-height: 1.35;
          overflow-wrap: anywhere;
        }
        .ps-contact__link--primary .ps-contact__link-meta {
          color: rgba(8,9,14,0.7);
        }
        .ps-contact__link-arrow {
          flex: 0 0 auto;
          font-size: 17px;
          line-height: 1;
          transition: transform 0.25s ease;
        }
        .ps-contact__link:hover .ps-contact__link-arrow { transform: translate(3px, -3px); }
        @media (max-width: 900px) {
          .ps-contact__links { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 560px) {
          .ps-contact__links { grid-template-columns: 1fr; }
          .ps-contact__link { min-height: 92px; }
        }

        .ps-footer {
          border-top: 1px solid var(--panel-line);
          padding: 22px 6vw;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: var(--slate-dim);
          flex-wrap: wrap;
          gap: 10px;
        }

        /* -------- video modal -------- */
        .vmodal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 500;
          background: rgba(8, 9, 14, 0.82);
          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6vh 5vw;
          animation: vmodalFade 0.25s ease both;
        }
        @keyframes vmodalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .vmodal {
          position: relative;
          width: min(90vw, 1200px);
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          background: var(--charcoal);
          border: 1px solid var(--glass-border);
          box-shadow: var(--shadow-glass);
          animation: vmodalIn 0.3s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes vmodalIn {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .vmodal__frame {
          width: 100%;
          height: 100%;
        }
        .vmodal__frame iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
        .vmodal__close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--glass-fill-strong);
          backdrop-filter: blur(16px) saturate(140%);
          -webkit-backdrop-filter: blur(16px) saturate(140%);
          border: 1px solid var(--glass-border);
          color: var(--offwhite);
          font-size: 22px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .vmodal__close:hover {
          background: var(--coral);
          border-color: var(--coral);
          transform: scale(1.06);
        }
        @media (max-width: 720px) {
          .vmodal-backdrop { padding: 0; }
          .vmodal {
            width: 100vw;
            aspect-ratio: auto;
            height: auto;
            max-height: 100vh;
            border-radius: 0;
            display: flex;
            align-items: center;
          }
          .vmodal__frame { aspect-ratio: 16 / 9; width: 100%; }
          .vmodal__close { top: 10px; right: 10px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ps-ambient__orb, .ps-ambient__sheen, .ps-hero__glow-mass, .ps-hero__glow-core { animation: none !important; transition: none !important; }
          .reveal, .metric, .case { transition: none !important; opacity: 1 !important; transform: none !important; }
          .vmodal-backdrop, .vmodal { animation: none !important; }
        }
      `}),u.jsx("div",{className:"ps-grain"}),u.jsxs("div",{className:"ps-ambient",children:[u.jsx("div",{className:"ps-ambient__orb ps-ambient__orb--1"}),u.jsx("div",{className:"ps-ambient__orb ps-ambient__orb--2"}),u.jsx("div",{className:"ps-ambient__orb ps-ambient__orb--3"}),u.jsx("div",{className:"ps-ambient__sheen"})]}),u.jsx("div",{className:"ps-timeline",children:u.jsx("div",{className:"ps-timeline__fill"})}),u.jsx("div",{className:"ps-timeline__code mono",children:d}),u.jsx("div",{className:`ps-lang-dock ps-lang-dock--${e}`,"aria-label":"Language switch",children:u.jsxs("button",{type:"button",className:"ps-lang-dock__button",onClick:()=>t(h=>h==="en"?"ru":"en"),"aria-label":e==="en"?"Switch to Russian":"Переключить на английский",children:[u.jsx("span",{className:"ps-lang-dock__thumb","aria-hidden":"true"}),u.jsx("span",{className:"ps-lang-dock__label",children:"English"}),u.jsx("span",{className:"ps-lang-dock__label",children:"Russian"})]})}),u.jsx("div",{className:"ps-nav-wrap",children:u.jsxs("div",{className:"ps-nav-glass",children:[u.jsx("button",{className:"ps-nav-glass__name",onClick:()=>k("hero"),children:"Pavel Smirnov"}),u.jsx("nav",{className:"ps-nav-glass__links",children:m.nav.map(h=>u.jsx("button",{className:`ps-nav-glass__link ${v===h.id?"ps-nav-glass__link--active":""}`,onClick:()=>k(h.id),children:u.jsx("span",{children:h.label})},h.id))})]})}),u.jsxs("a",{className:"ps-nav-tg",href:Sr,target:"_blank",rel:"noreferrer",children:[u.jsx("span",{className:"ps-nav-tg__dot"}),m.telegramTop]}),u.jsx("button",{className:"ps-nav-burger",onClick:()=>r(h=>!h),"aria-label":m.menuLabel,children:n?"×":"≡"}),n&&u.jsxs("div",{className:"ps-mobile-menu",children:[m.nav.map(h=>u.jsx("button",{className:"ps-mobile-menu__link",onClick:()=>k(h.id),children:h.label},h.id)),u.jsx("div",{className:"ps-lang-switch","aria-label":"Language",children:["en","ru"].map(h=>u.jsx("button",{type:"button",className:`ps-lang-switch__btn ${e===h?"ps-lang-switch__btn--active":""}`,onClick:()=>t(h),"aria-pressed":e===h,children:h==="en"?"English":"Russian"},h))}),u.jsx("a",{className:"ps-glass-btn ps-glass-btn--primary ps-mobile-menu__cta",href:Sr,target:"_blank",rel:"noreferrer",children:m.telegramTop})]}),u.jsxs("section",{className:"ps-hero",id:"hero",ref:g,onMouseMove:c,children:[u.jsx("div",{className:"ps-hero__glow-mass",ref:w}),u.jsx("div",{className:"ps-hero__glow-core",ref:_}),u.jsx("div",{className:"ps-hero__portrait",children:u.jsx("img",{src:Yp,alt:"Pavel Smirnov, Head of Video Production"})}),u.jsxs("div",{className:"ps-hero__content",children:[u.jsx("div",{className:"ps-hero__eyebrow-chip mono",children:m.heroEyebrow}),u.jsx("h1",{className:"ps-hero__name",children:"Pavel Smirnov"}),u.jsxs("div",{className:"ps-hero__meta",children:[u.jsxs("div",{className:"ps-hero__titles",children:[u.jsx("div",{className:"ps-hero__title-line",children:u.jsx("b",{children:m.heroTitles[0]})}),u.jsx("div",{className:"ps-hero__title-line",children:u.jsx("b",{children:m.heroTitles[1]})}),u.jsx("div",{className:"ps-hero__title-line",children:u.jsx("b",{children:m.heroTitles[2]})})]}),u.jsx("p",{className:"ps-glass-panel ps-hero__statement-glass",onMouseMove:f,children:m.heroStatement}),u.jsxs("div",{className:"ps-hero__actions",children:[u.jsx("a",{className:"ps-glass-btn ps-glass-btn--primary",href:Sr,target:"_blank",rel:"noreferrer",children:m.telegramTop}),u.jsx("button",{className:"ps-glass-btn ps-glass-btn--ghost",onClick:()=>k("work"),children:m.viewWork}),u.jsx("a",{className:"ps-glass-btn ps-glass-btn--ghost",href:lf,target:"_blank",rel:"noopener noreferrer",children:m.downloadCv})]})]})]}),u.jsxs("div",{className:"ps-hero__scroll-cue mono",children:[m.scroll,u.jsx("span",{className:"ps-hero__scroll-line"})]})]}),u.jsx("section",{className:"ps-section",style:{paddingTop:"4vh",paddingBottom:"4vh"},children:u.jsx("div",{className:"ps-metrics-strip",children:m.metrics.map((h,y)=>u.jsx(Nf,{m:h,index:y},y))})}),u.jsxs("section",{className:"ps-section",id:"work",children:[u.jsx(je,{children:u.jsxs("div",{className:"ps-section__header",children:[u.jsxs("div",{children:[u.jsx("div",{className:"ps-section__eyebrow mono",children:m.casesEyebrow}),u.jsx("h2",{className:"ps-section__title",children:m.casesTitle})]}),u.jsx("div",{className:"mono",style:{color:"var(--slate)",fontSize:13},children:m.casesMeta})]})}),m.cases.map((h,y)=>u.jsx(Cf,{item:h,index:y,labels:m},y))]}),u.jsxs("section",{className:"ps-section",id:"expertise",children:[u.jsx(je,{children:u.jsx("div",{className:"ps-section__header",children:u.jsxs("div",{children:[u.jsx("div",{className:"ps-section__eyebrow mono",children:m.expertiseEyebrow}),u.jsx("h2",{className:"ps-section__title",children:m.expertiseTitle})]})})}),u.jsx(je,{children:u.jsx("div",{children:m.expertise.map((h,y)=>u.jsx(jf,{item:h,index:y,openIndex:l,setOpenIndex:o},y))})})]}),u.jsx(Tf,{copy:m}),u.jsx(zf,{copy:m}),u.jsxs("section",{className:"ps-section ps-section--dark",children:[u.jsxs(je,{children:[u.jsx("div",{className:"ps-section__eyebrow mono",style:{marginBottom:18},children:m.videoEyebrow}),u.jsxs("p",{className:"ps-motion-line",children:[m.videoLine1," ",u.jsx("span",{children:m.videoLine2})]})]}),u.jsxs(je,{delay:100,children:[u.jsx("div",{className:"mtile-grid",children:m.videos.map((h,y)=>u.jsx(Lf,{video:h,onOpen:D,copy:m},`${h.title}-${y}`))}),u.jsx("div",{className:"ps-motion-actions",children:u.jsx("a",{className:"ps-glass-btn ps-glass-btn--ghost",href:rf,target:"_blank",rel:"noopener noreferrer",children:m.moreWork})})]})]}),u.jsx("section",{className:"ps-section",id:"about",children:u.jsxs("div",{className:"ps-about-grid",children:[u.jsxs(je,{children:[u.jsx("div",{className:"ps-section__eyebrow mono",style:{marginBottom:18},children:m.aboutEyebrow}),u.jsxs("p",{className:"ps-about-quote",children:[m.aboutQuote1," ",u.jsx("span",{children:m.aboutQuote2})]})]}),u.jsx(je,{delay:100,children:u.jsxs("div",{className:"ps-about-body",children:[m.aboutParagraphs.map((h,y)=>u.jsx("p",{children:h},y)),u.jsx("div",{className:"ps-about-tags",children:m.aboutTags.map(h=>u.jsx("span",{className:"ps-about-tag",children:h},h))})]})})]})}),u.jsxs("section",{className:"ps-section ps-contact",id:"contact",children:[u.jsx(je,{children:u.jsxs("h2",{className:"ps-contact__title",children:[m.contactTitle1," ",u.jsx("span",{children:m.contactTitleAccent})," ",m.contactTitle2]})}),u.jsx(je,{delay:100,children:u.jsxs("div",{className:"ps-contact__links",children:[u.jsxs("a",{className:"ps-contact__link ps-contact__link--primary",href:Sr,target:"_blank",rel:"noopener noreferrer",children:[u.jsx("span",{className:"ps-contact__link-label",children:"Telegram"}),u.jsxs("span",{className:"ps-contact__link-meta",children:[u.jsx("span",{children:"@Rax666"}),u.jsx("span",{className:"ps-contact__link-arrow",children:"↗"})]})]}),u.jsxs("a",{className:"ps-contact__link",href:vf,target:"_blank",rel:"noopener noreferrer","aria-label":`${m.emailAria} ${Wo}`,children:[u.jsx("span",{className:"ps-contact__link-label",children:"Email"}),u.jsxs("span",{className:"ps-contact__link-meta",children:[u.jsx("span",{children:Wo}),u.jsx("span",{className:"ps-contact__link-arrow",children:"↗"})]})]}),u.jsxs("a",{className:"ps-contact__link",href:xf,target:"_blank",rel:"noopener noreferrer",children:[u.jsx("span",{className:"ps-contact__link-label",children:"WhatsApp"}),u.jsxs("span",{className:"ps-contact__link-meta",children:[u.jsx("span",{children:yf}),u.jsx("span",{className:"ps-contact__link-arrow",children:"↗"})]})]}),u.jsxs("a",{className:"ps-contact__link",href:wf,target:"_blank",rel:"noopener noreferrer",children:[u.jsx("span",{className:"ps-contact__link-label",children:"LinkedIn"}),u.jsxs("span",{className:"ps-contact__link-meta",children:[u.jsx("span",{children:"p-smirnov"}),u.jsx("span",{className:"ps-contact__link-arrow",children:"↗"})]})]})]})})]}),u.jsxs("footer",{className:"ps-footer",children:[u.jsxs("span",{className:"mono",children:["© ",new Date().getFullYear()," PAVEL SMIRNOV"]}),u.jsx("span",{className:"mono",children:m.footerRole})]}),i&&u.jsx(Rf,{video:i,onClose:p,copy:m})]})}Xl.createRoot(document.getElementById("root")).render(u.jsx(Nc.StrictMode,{children:u.jsx(If,{})}));
