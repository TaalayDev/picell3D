(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function v0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var fd={exports:{}},oa={},hd={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function e_(){if(Lm)return Mt;Lm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function _(F,ee,Te){this.props=F,this.context=ee,this.refs=w,this.updater=Te||v}_.prototype.isReactComponent={},_.prototype.setState=function(F,ee){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ee,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=_.prototype;function A(F,ee,Te){this.props=F,this.context=ee,this.refs=w,this.updater=Te||v}var C=A.prototype=new y;C.constructor=A,M(C,_.prototype),C.isPureReactComponent=!0;var T=Array.isArray,k=Object.prototype.hasOwnProperty,L={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function z(F,ee,Te){var q,he={},ye=null,xe=null;if(ee!=null)for(q in ee.ref!==void 0&&(xe=ee.ref),ee.key!==void 0&&(ye=""+ee.key),ee)k.call(ee,q)&&!D.hasOwnProperty(q)&&(he[q]=ee[q]);var Ce=arguments.length-2;if(Ce===1)he.children=Te;else if(1<Ce){for(var Le=Array(Ce),Ze=0;Ze<Ce;Ze++)Le[Ze]=arguments[Ze+2];he.children=Le}if(F&&F.defaultProps)for(q in Ce=F.defaultProps,Ce)he[q]===void 0&&(he[q]=Ce[q]);return{$$typeof:s,type:F,key:ye,ref:xe,props:he,_owner:L.current}}function I(F,ee){return{$$typeof:s,type:F.type,key:ee,ref:F.ref,props:F.props,_owner:F._owner}}function P(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function B(F){var ee={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Te){return ee[Te]})}var K=/\/+/g;function W(F,ee){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):ee.toString(36)}function ae(F,ee,Te,q,he){var ye=typeof F;(ye==="undefined"||ye==="boolean")&&(F=null);var xe=!1;if(F===null)xe=!0;else switch(ye){case"string":case"number":xe=!0;break;case"object":switch(F.$$typeof){case s:case e:xe=!0}}if(xe)return xe=F,he=he(xe),F=q===""?"."+W(xe,0):q,T(he)?(Te="",F!=null&&(Te=F.replace(K,"$&/")+"/"),ae(he,ee,Te,"",function(Ze){return Ze})):he!=null&&(P(he)&&(he=I(he,Te+(!he.key||xe&&xe.key===he.key?"":(""+he.key).replace(K,"$&/")+"/")+F)),ee.push(he)),1;if(xe=0,q=q===""?".":q+":",T(F))for(var Ce=0;Ce<F.length;Ce++){ye=F[Ce];var Le=q+W(ye,Ce);xe+=ae(ye,ee,Te,Le,he)}else if(Le=x(F),typeof Le=="function")for(F=Le.call(F),Ce=0;!(ye=F.next()).done;)ye=ye.value,Le=q+W(ye,Ce++),xe+=ae(ye,ee,Te,Le,he);else if(ye==="object")throw ee=String(F),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return xe}function le(F,ee,Te){if(F==null)return F;var q=[],he=0;return ae(F,q,"","",function(ye){return ee.call(Te,ye,he++)}),q}function de(F){if(F._status===-1){var ee=F._result;ee=ee(),ee.then(function(Te){(F._status===0||F._status===-1)&&(F._status=1,F._result=Te)},function(Te){(F._status===0||F._status===-1)&&(F._status=2,F._result=Te)}),F._status===-1&&(F._status=0,F._result=ee)}if(F._status===1)return F._result.default;throw F._result}var oe={current:null},V={transition:null},ce={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:V,ReactCurrentOwner:L};function te(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:le,forEach:function(F,ee,Te){le(F,function(){ee.apply(this,arguments)},Te)},count:function(F){var ee=0;return le(F,function(){ee++}),ee},toArray:function(F){return le(F,function(ee){return ee})||[]},only:function(F){if(!P(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Mt.Component=_,Mt.Fragment=t,Mt.Profiler=o,Mt.PureComponent=A,Mt.StrictMode=r,Mt.Suspense=f,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Mt.act=te,Mt.cloneElement=function(F,ee,Te){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var q=M({},F.props),he=F.key,ye=F.ref,xe=F._owner;if(ee!=null){if(ee.ref!==void 0&&(ye=ee.ref,xe=L.current),ee.key!==void 0&&(he=""+ee.key),F.type&&F.type.defaultProps)var Ce=F.type.defaultProps;for(Le in ee)k.call(ee,Le)&&!D.hasOwnProperty(Le)&&(q[Le]=ee[Le]===void 0&&Ce!==void 0?Ce[Le]:ee[Le])}var Le=arguments.length-2;if(Le===1)q.children=Te;else if(1<Le){Ce=Array(Le);for(var Ze=0;Ze<Le;Ze++)Ce[Ze]=arguments[Ze+2];q.children=Ce}return{$$typeof:s,type:F.type,key:he,ref:ye,props:q,_owner:xe}},Mt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},Mt.createElement=z,Mt.createFactory=function(F){var ee=z.bind(null,F);return ee.type=F,ee},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(F){return{$$typeof:u,render:F}},Mt.isValidElement=P,Mt.lazy=function(F){return{$$typeof:p,_payload:{_status:-1,_result:F},_init:de}},Mt.memo=function(F,ee){return{$$typeof:h,type:F,compare:ee===void 0?null:ee}},Mt.startTransition=function(F){var ee=V.transition;V.transition={};try{F()}finally{V.transition=ee}},Mt.unstable_act=te,Mt.useCallback=function(F,ee){return oe.current.useCallback(F,ee)},Mt.useContext=function(F){return oe.current.useContext(F)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(F){return oe.current.useDeferredValue(F)},Mt.useEffect=function(F,ee){return oe.current.useEffect(F,ee)},Mt.useId=function(){return oe.current.useId()},Mt.useImperativeHandle=function(F,ee,Te){return oe.current.useImperativeHandle(F,ee,Te)},Mt.useInsertionEffect=function(F,ee){return oe.current.useInsertionEffect(F,ee)},Mt.useLayoutEffect=function(F,ee){return oe.current.useLayoutEffect(F,ee)},Mt.useMemo=function(F,ee){return oe.current.useMemo(F,ee)},Mt.useReducer=function(F,ee,Te){return oe.current.useReducer(F,ee,Te)},Mt.useRef=function(F){return oe.current.useRef(F)},Mt.useState=function(F){return oe.current.useState(F)},Mt.useSyncExternalStore=function(F,ee,Te){return oe.current.useSyncExternalStore(F,ee,Te)},Mt.useTransition=function(){return oe.current.useTransition()},Mt.version="18.3.1",Mt}var Nm;function Hf(){return Nm||(Nm=1,hd.exports=e_()),hd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function t_(){if(Dm)return oa;Dm=1;var s=Hf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var p,g={},x=null,v=null;h!==void 0&&(x=""+h),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(v=f.ref);for(p in f)r.call(f,p)&&!l.hasOwnProperty(p)&&(g[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)g[p]===void 0&&(g[p]=f[p]);return{$$typeof:e,type:u,key:x,ref:v,props:g,_owner:o.current}}return oa.Fragment=t,oa.jsx=c,oa.jsxs=c,oa}var Im;function n_(){return Im||(Im=1,fd.exports=t_()),fd.exports}var E=n_(),Re=Hf();const ha=v0(Re);var Ll={},pd={exports:{}},Hn={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function i_(){return Um||(Um=1,(function(s){function e(V,ce){var te=V.length;V.push(ce);e:for(;0<te;){var F=te-1>>>1,ee=V[F];if(0<o(ee,ce))V[F]=ce,V[te]=ee,te=F;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ce=V[0],te=V.pop();if(te!==ce){V[0]=te;e:for(var F=0,ee=V.length,Te=ee>>>1;F<Te;){var q=2*(F+1)-1,he=V[q],ye=q+1,xe=V[ye];if(0>o(he,te))ye<ee&&0>o(xe,he)?(V[F]=xe,V[ye]=te,F=ye):(V[F]=he,V[q]=te,F=q);else if(ye<ee&&0>o(xe,te))V[F]=xe,V[ye]=te,F=ye;else break e}}return ce}function o(V,ce){var te=V.sortIndex-ce.sortIndex;return te!==0?te:V.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,u=c.now();s.unstable_now=function(){return c.now()-u}}var f=[],h=[],p=1,g=null,x=3,v=!1,M=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(V){for(var ce=t(h);ce!==null;){if(ce.callback===null)r(h);else if(ce.startTime<=V)r(h),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=t(h)}}function T(V){if(w=!1,C(V),!M)if(t(f)!==null)M=!0,de(k);else{var ce=t(h);ce!==null&&oe(T,ce.startTime-V)}}function k(V,ce){M=!1,w&&(w=!1,y(z),z=-1),v=!0;var te=x;try{for(C(ce),g=t(f);g!==null&&(!(g.expirationTime>ce)||V&&!B());){var F=g.callback;if(typeof F=="function"){g.callback=null,x=g.priorityLevel;var ee=F(g.expirationTime<=ce);ce=s.unstable_now(),typeof ee=="function"?g.callback=ee:g===t(f)&&r(f),C(ce)}else r(f);g=t(f)}if(g!==null)var Te=!0;else{var q=t(h);q!==null&&oe(T,q.startTime-ce),Te=!1}return Te}finally{g=null,x=te,v=!1}}var L=!1,D=null,z=-1,I=5,P=-1;function B(){return!(s.unstable_now()-P<I)}function K(){if(D!==null){var V=s.unstable_now();P=V;var ce=!0;try{ce=D(!0,V)}finally{ce?W():(L=!1,D=null)}}else L=!1}var W;if(typeof A=="function")W=function(){A(K)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,le=ae.port2;ae.port1.onmessage=K,W=function(){le.postMessage(null)}}else W=function(){_(K,0)};function de(V){D=V,L||(L=!0,W())}function oe(V,ce){z=_(function(){V(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){M||v||(M=!0,de(k))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(V){switch(x){case 1:case 2:case 3:var ce=3;break;default:ce=x}var te=x;x=ce;try{return V()}finally{x=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,ce){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var te=x;x=V;try{return ce()}finally{x=te}},s.unstable_scheduleCallback=function(V,ce,te){var F=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?F+te:F):te=F,V){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=te+ee,V={id:p++,callback:ce,priorityLevel:V,startTime:te,expirationTime:ee,sortIndex:-1},te>F?(V.sortIndex=te,e(h,V),t(f)===null&&V===t(h)&&(w?(y(z),z=-1):w=!0,oe(T,te-F))):(V.sortIndex=ee,e(f,V),M||v||(M=!0,de(k))),V},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(V){var ce=x;return function(){var te=x;x=ce;try{return V.apply(this,arguments)}finally{x=te}}}})(gd)),gd}var km;function r_(){return km||(km=1,md.exports=i_()),md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function s_(){if(Fm)return Hn;Fm=1;var s=Hf(),e=r_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function x(n){return f.call(g,n)?!0:f.call(p,n)?!1:h.test(n)?g[n]=!0:(p[n]=!0,!1)}function v(n,i,a,d){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,d){if(i===null||typeof i>"u"||v(n,i,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,d,m,S,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=S,this.removeEmptyString=b}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,A);_[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,A);_[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,A);_[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,i,a,d){var m=_.hasOwnProperty(i)?_[i]:null;(m!==null?m.type!==0:d||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,m,d)&&(a=null),d||m===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):m.mustUseProperty?n[m.propertyName]=a===null?m.type===3?!1:"":a:(i=m.attributeName,d=m.attributeNamespace,a===null?n.removeAttribute(i):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,d?n.setAttributeNS(d,i,a):n.setAttribute(i,a))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),L=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),V=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,F;function ee(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Te=!1;function q(n,i){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var d=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){d=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){d=ie}n()}}catch(ie){if(ie&&d&&typeof ie.stack=="string"){for(var m=ie.stack.split(`
`),S=d.stack.split(`
`),b=m.length-1,O=S.length-1;1<=b&&0<=O&&m[b]!==S[O];)O--;for(;1<=b&&0<=O;b--,O--)if(m[b]!==S[O]){if(b!==1||O!==1)do if(b--,O--,0>O||m[b]!==S[O]){var H=`
`+m[b].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=b&&0<=O);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function he(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=q(n.type,!1),n;case 11:return n=q(n.type.render,!1),n;case 1:return n=q(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case L:return"Portal";case I:return"Profiler";case z:return"StrictMode";case W:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case K:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case de:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Le(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),d=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,S=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return m.call(this)},set:function(b){d=""+b,S.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(b){d=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function pt(n){n._valueTracker||(n._valueTracker=Ze(n))}function mt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),d="";return n&&(d=Le(n)?n.checked?"true":"false":n.value),n=d,n!==a?(i.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function X(n,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Kt(n,i){var a=i.defaultValue==null?"":i.defaultValue,d=i.checked!=null?i.checked:i.defaultChecked;a=Ce(i.value!=null?i.value:a),n._wrapperState={initialChecked:d,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(n,i){i=i.checked,i!=null&&C(n,"checked",i,!1)}function gt(n,i){ct(n,i);var a=Ce(i.value),d=i.type;if(a!=null)d==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?je(n,i.type,a):i.hasOwnProperty("defaultValue")&&je(n,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Je(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var d=i.type;if(!(d!=="submit"&&d!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function je(n,i,a){(i!=="number"||Nt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ze=Array.isArray;function U(n,i,a,d){if(n=n.options,i){i={};for(var m=0;m<a.length;m++)i["$"+a[m]]=!0;for(a=0;a<n.length;a++)m=i.hasOwnProperty("$"+n[a].value),n[a].selected!==m&&(n[a].selected=m),m&&d&&(n[a].defaultSelected=!0)}else{for(a=""+Ce(a),i=null,m=0;m<n.length;m++){if(n[m].value===a){n[m].selected=!0,d&&(n[m].defaultSelected=!0);return}i!==null||n[m].disabled||(i=n[m])}i!==null&&(i.selected=!0)}}function R(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ze(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ce(a)}}function pe(n,i){var a=Ce(i.value),d=Ce(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),d!=null&&(n.defaultValue=""+d)}function me(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,d,m){MSApp.execUnsafeLocalFunction(function(){return n(i,a,d,m)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function at(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Se[i]=Se[n]})});function et(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Se.hasOwnProperty(n)&&Se[n]?(""+i).trim():i+"px"}function We(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var d=a.indexOf("--")===0,m=et(a,i[a],d);a==="float"&&(a="cssFloat"),d?n.setProperty(a,m):n[a]=m}}var Ue=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(n,i){if(i){if(Ue[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ut(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var It=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,ue=null,ge=null;function ke(n){if(n=Wo(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Xa(i),Pe(n.stateNode,n.type,i))}}function De(n){ue?ge?ge.push(n):ge=[n]:ue=n}function dt(){if(ue){var n=ue,i=ge;if(ge=ue=null,ke(n),i)for(n=0;n<i.length;n++)ke(i[n])}}function Vt(n,i){return n(i)}function Jt(){}var bt=!1;function Un(n,i,a){if(bt)return n(i,a);bt=!0;try{return Vt(n,i,a)}finally{bt=!1,(ue!==null||ge!==null)&&(Jt(),dt())}}function bn(n,i){var a=n.stateNode;if(a===null)return null;var d=Xa(a);if(d===null)return null;a=d[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var _s=!1;if(u)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){_s=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{_s=!1}function ki(n,i,a,d,m,S,b,O,H){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(a,ie)}catch(_e){this.onError(_e)}}var Fi=!1,Hr=null,Gr=!1,cr=null,ba={onError:function(n){Fi=!0,Hr=n}};function ys(n,i,a,d,m,S,b,O,H){Fi=!1,Hr=null,ki.apply(ba,arguments)}function Aa(n,i,a,d,m,S,b,O,H){if(ys.apply(this,arguments),Fi){if(Fi){var ie=Hr;Fi=!1,Hr=null}else throw Error(t(198));Gr||(Gr=!0,cr=ie)}}function Ci(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ca(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ra(n){if(Ci(n)!==n)throw Error(t(188))}function Ic(n){var i=n.alternate;if(!i){if(i=Ci(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,d=i;;){var m=a.return;if(m===null)break;var S=m.alternate;if(S===null){if(d=m.return,d!==null){a=d;continue}break}if(m.child===S.child){for(S=m.child;S;){if(S===a)return Ra(m),n;if(S===d)return Ra(m),i;S=S.sibling}throw Error(t(188))}if(a.return!==d.return)a=m,d=S;else{for(var b=!1,O=m.child;O;){if(O===a){b=!0,a=m,d=S;break}if(O===d){b=!0,d=m,a=S;break}O=O.sibling}if(!b){for(O=S.child;O;){if(O===a){b=!0,a=S,d=m;break}if(O===d){b=!0,d=S,a=m;break}O=O.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function N(n){return n=Ic(n),n!==null?Y(n):null}function Y(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Y(n);if(i!==null)return i;n=n.sibling}return null}var re=e.unstable_scheduleCallback,se=e.unstable_cancelCallback,$=e.unstable_shouldYield,be=e.unstable_requestPaint,Ee=e.unstable_now,$e=e.unstable_getCurrentPriorityLevel,Xe=e.unstable_ImmediatePriority,st=e.unstable_UserBlockingPriority,lt=e.unstable_NormalPriority,qe=e.unstable_LowPriority,Tt=e.unstable_IdlePriority,Dt=null,wt=null;function gn(n){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Dt,n,void 0,(n.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Rt,Qe=Math.log,pi=Math.LN2;function Rt(n){return n>>>=0,n===0?32:31-(Qe(n)/pi|0)|0}var xn=64,mi=4194304;function en(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ri(n,i){var a=n.pendingLanes;if(a===0)return 0;var d=0,m=n.suspendedLanes,S=n.pingedLanes,b=a&268435455;if(b!==0){var O=b&~m;O!==0?d=en(O):(S&=b,S!==0&&(d=en(S)))}else b=a&~m,b!==0?d=en(b):S!==0&&(d=en(S));if(d===0)return 0;if(i!==0&&i!==d&&(i&m)===0&&(m=d&-d,S=i&-i,m>=S||m===16&&(S&4194240)!==0))return i;if((d&4)!==0&&(d|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=d;0<i;)a=31-ht(i),m=1<<a,d|=n[a],i&=~m;return d}function Ot(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ti(n,i){for(var a=n.suspendedLanes,d=n.pingedLanes,m=n.expirationTimes,S=n.pendingLanes;0<S;){var b=31-ht(S),O=1<<b,H=m[b];H===-1?((O&a)===0||(O&d)!==0)&&(m[b]=Ot(O,i)):H<=i&&(n.expiredLanes|=O),S&=~O}}function Oi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=xn;return xn<<=1,(xn&4194240)===0&&(xn=64),n}function ni(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function kn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ht(i),n[i]=a}function Pa(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<a;){var m=31-ht(a),S=1<<m;i[m]=0,d[m]=-1,n[m]=-1,a&=~S}}function Uc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var d=31-ht(a),m=1<<d;m&i|n[d]&i&&(n[d]|=i),a&=~m}}var Ut=0;function ch(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var uh,kc,dh,fh,hh,Fc=!1,La=[],ur=null,dr=null,fr=null,Ro=new Map,Po=new Map,hr=[],Mx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(n,i){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Ro.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(i.pointerId)}}function Lo(n,i,a,d,m,S){return n===null||n.nativeEvent!==S?(n={blockedOn:i,domEventName:a,eventSystemFlags:d,nativeEvent:S,targetContainers:[m]},i!==null&&(i=Wo(i),i!==null&&kc(i)),n):(n.eventSystemFlags|=d,i=n.targetContainers,m!==null&&i.indexOf(m)===-1&&i.push(m),n)}function Ex(n,i,a,d,m){switch(i){case"focusin":return ur=Lo(ur,n,i,a,d,m),!0;case"dragenter":return dr=Lo(dr,n,i,a,d,m),!0;case"mouseover":return fr=Lo(fr,n,i,a,d,m),!0;case"pointerover":var S=m.pointerId;return Ro.set(S,Lo(Ro.get(S)||null,n,i,a,d,m)),!0;case"gotpointercapture":return S=m.pointerId,Po.set(S,Lo(Po.get(S)||null,n,i,a,d,m)),!0}return!1}function mh(n){var i=jr(n.target);if(i!==null){var a=Ci(i);if(a!==null){if(i=a.tag,i===13){if(i=Ca(a),i!==null){n.blockedOn=i,hh(n.priority,function(){dh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Na(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=zc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var d=new a.constructor(a.type,a);It=d,a.target.dispatchEvent(d),It=null}else return i=Wo(a),i!==null&&kc(i),n.blockedOn=a,!1;i.shift()}return!0}function gh(n,i,a){Na(n)&&a.delete(i)}function wx(){Fc=!1,ur!==null&&Na(ur)&&(ur=null),dr!==null&&Na(dr)&&(dr=null),fr!==null&&Na(fr)&&(fr=null),Ro.forEach(gh),Po.forEach(gh)}function No(n,i){n.blockedOn===i&&(n.blockedOn=null,Fc||(Fc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wx)))}function Do(n){function i(m){return No(m,n)}if(0<La.length){No(La[0],n);for(var a=1;a<La.length;a++){var d=La[a];d.blockedOn===n&&(d.blockedOn=null)}}for(ur!==null&&No(ur,n),dr!==null&&No(dr,n),fr!==null&&No(fr,n),Ro.forEach(i),Po.forEach(i),a=0;a<hr.length;a++)d=hr[a],d.blockedOn===n&&(d.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)mh(a),a.blockedOn===null&&hr.shift()}var Ss=T.ReactCurrentBatchConfig,Da=!0;function Tx(n,i,a,d){var m=Ut,S=Ss.transition;Ss.transition=null;try{Ut=1,Oc(n,i,a,d)}finally{Ut=m,Ss.transition=S}}function bx(n,i,a,d){var m=Ut,S=Ss.transition;Ss.transition=null;try{Ut=4,Oc(n,i,a,d)}finally{Ut=m,Ss.transition=S}}function Oc(n,i,a,d){if(Da){var m=zc(n,i,a,d);if(m===null)nu(n,i,d,Ia,a),ph(n,d);else if(Ex(m,n,i,a,d))d.stopPropagation();else if(ph(n,d),i&4&&-1<Mx.indexOf(n)){for(;m!==null;){var S=Wo(m);if(S!==null&&uh(S),S=zc(n,i,a,d),S===null&&nu(n,i,d,Ia,a),S===m)break;m=S}m!==null&&d.stopPropagation()}else nu(n,i,d,null,a)}}var Ia=null;function zc(n,i,a,d){if(Ia=null,n=j(d),n=jr(n),n!==null)if(i=Ci(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ca(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ia=n,null}function xh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($e()){case Xe:return 1;case st:return 4;case lt:case qe:return 16;case Tt:return 536870912;default:return 16}default:return 16}}var pr=null,Bc=null,Ua=null;function vh(){if(Ua)return Ua;var n,i=Bc,a=i.length,d,m="value"in pr?pr.value:pr.textContent,S=m.length;for(n=0;n<a&&i[n]===m[n];n++);var b=a-n;for(d=1;d<=b&&i[a-d]===m[S-d];d++);return Ua=m.slice(n,1<d?1-d:void 0)}function ka(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Fa(){return!0}function _h(){return!1}function Yn(n){function i(a,d,m,S,b){this._reactName=a,this._targetInst=m,this.type=d,this.nativeEvent=S,this.target=b,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(S):S[O]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?Fa:_h,this.isPropagationStopped=_h,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),i}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=Yn(Ms),Io=te({},Ms,{view:0,detail:0}),Ax=Yn(Io),Hc,Gc,Uo,Oa=te({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Uo&&(Uo&&n.type==="mousemove"?(Hc=n.screenX-Uo.screenX,Gc=n.screenY-Uo.screenY):Gc=Hc=0,Uo=n),Hc)},movementY:function(n){return"movementY"in n?n.movementY:Gc}}),yh=Yn(Oa),Cx=te({},Oa,{dataTransfer:0}),Rx=Yn(Cx),Px=te({},Io,{relatedTarget:0}),jc=Yn(Px),Lx=te({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Nx=Yn(Lx),Dx=te({},Ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ix=Yn(Dx),Ux=te({},Ms,{data:0}),Sh=Yn(Ux),kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ox[n])?!!i[n]:!1}function Wc(){return zx}var Bx=te({},Io,{key:function(n){if(n.key){var i=kx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ka(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Fx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(n){return n.type==="keypress"?ka(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ka(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vx=Yn(Bx),Hx=te({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=Yn(Hx),Gx=te({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),jx=Yn(Gx),Wx=te({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xx=Yn(Wx),Yx=te({},Oa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=Yn(Yx),qx=[9,13,27,32],Xc=u&&"CompositionEvent"in window,ko=null;u&&"documentMode"in document&&(ko=document.documentMode);var Kx=u&&"TextEvent"in window&&!ko,Eh=u&&(!Xc||ko&&8<ko&&11>=ko),wh=" ",Th=!1;function bh(n,i){switch(n){case"keyup":return qx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ah(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Es=!1;function Zx(n,i){switch(n){case"compositionend":return Ah(i);case"keypress":return i.which!==32?null:(Th=!0,wh);case"textInput":return n=i.data,n===wh&&Th?null:n;default:return null}}function Qx(n,i){if(Es)return n==="compositionend"||!Xc&&bh(n,i)?(n=vh(),Ua=Bc=pr=null,Es=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Eh&&i.locale!=="ko"?null:i.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Jx[n.type]:i==="textarea"}function Rh(n,i,a,d){De(d),i=Ga(i,"onChange"),0<i.length&&(a=new Vc("onChange","change",null,a,d),n.push({event:a,listeners:i}))}var Fo=null,Oo=null;function ev(n){Yh(n,0)}function za(n){var i=Cs(n);if(mt(i))return n}function tv(n,i){if(n==="change")return i}var Ph=!1;if(u){var Yc;if(u){var $c="oninput"in document;if(!$c){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),$c=typeof Lh.oninput=="function"}Yc=$c}else Yc=!1;Ph=Yc&&(!document.documentMode||9<document.documentMode)}function Nh(){Fo&&(Fo.detachEvent("onpropertychange",Dh),Oo=Fo=null)}function Dh(n){if(n.propertyName==="value"&&za(Oo)){var i=[];Rh(i,Oo,n,j(n)),Un(ev,i)}}function nv(n,i,a){n==="focusin"?(Nh(),Fo=i,Oo=a,Fo.attachEvent("onpropertychange",Dh)):n==="focusout"&&Nh()}function iv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return za(Oo)}function rv(n,i){if(n==="click")return za(i)}function sv(n,i){if(n==="input"||n==="change")return za(i)}function ov(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var gi=typeof Object.is=="function"?Object.is:ov;function zo(n,i){if(gi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),d=Object.keys(i);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var m=a[d];if(!f.call(i,m)||!gi(n[m],i[m]))return!1}return!0}function Ih(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Uh(n,i){var a=Ih(n);n=0;for(var d;a;){if(a.nodeType===3){if(d=n+a.textContent.length,n<=i&&d>=i)return{node:a,offset:i-n};n=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ih(a)}}function kh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?kh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Fh(){for(var n=window,i=Nt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Nt(n.document)}return i}function qc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function av(n){var i=Fh(),a=n.focusedElem,d=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&kh(a.ownerDocument.documentElement,a)){if(d!==null&&qc(a)){if(i=d.start,n=d.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var m=a.textContent.length,S=Math.min(d.start,m);d=d.end===void 0?S:Math.min(d.end,m),!n.extend&&S>d&&(m=d,d=S,S=m),m=Uh(a,S);var b=Uh(a,d);m&&b&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(m.node,m.offset),n.removeAllRanges(),S>d?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lv=u&&"documentMode"in document&&11>=document.documentMode,ws=null,Kc=null,Bo=null,Zc=!1;function Oh(n,i,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zc||ws==null||ws!==Nt(d)||(d=ws,"selectionStart"in d&&qc(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Bo&&zo(Bo,d)||(Bo=d,d=Ga(Kc,"onSelect"),0<d.length&&(i=new Vc("onSelect","select",null,i,a),n.push({event:i,listeners:d}),i.target=ws)))}function Ba(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ts={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},Qc={},zh={};u&&(zh=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Va(n){if(Qc[n])return Qc[n];if(!Ts[n])return n;var i=Ts[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in zh)return Qc[n]=i[a];return n}var Bh=Va("animationend"),Vh=Va("animationiteration"),Hh=Va("animationstart"),Gh=Va("transitionend"),jh=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,i){jh.set(n,i),l(i,[n])}for(var Jc=0;Jc<Wh.length;Jc++){var eu=Wh[Jc],cv=eu.toLowerCase(),uv=eu[0].toUpperCase()+eu.slice(1);mr(cv,"on"+uv)}mr(Bh,"onAnimationEnd"),mr(Vh,"onAnimationIteration"),mr(Hh,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(Gh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Xh(n,i,a){var d=n.type||"unknown-event";n.currentTarget=a,Aa(d,i,void 0,n),n.currentTarget=null}function Yh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var d=n[a],m=d.event;d=d.listeners;e:{var S=void 0;if(i)for(var b=d.length-1;0<=b;b--){var O=d[b],H=O.instance,ie=O.currentTarget;if(O=O.listener,H!==S&&m.isPropagationStopped())break e;Xh(m,O,ie),S=H}else for(b=0;b<d.length;b++){if(O=d[b],H=O.instance,ie=O.currentTarget,O=O.listener,H!==S&&m.isPropagationStopped())break e;Xh(m,O,ie),S=H}}}if(Gr)throw n=cr,Gr=!1,cr=null,n}function Ht(n,i){var a=i[lu];a===void 0&&(a=i[lu]=new Set);var d=n+"__bubble";a.has(d)||($h(i,n,2,!1),a.add(d))}function tu(n,i,a){var d=0;i&&(d|=4),$h(a,n,d,i)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function Ho(n){if(!n[Ha]){n[Ha]=!0,r.forEach(function(a){a!=="selectionchange"&&(dv.has(a)||tu(a,!1,n),tu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ha]||(i[Ha]=!0,tu("selectionchange",!1,i))}}function $h(n,i,a,d){switch(xh(i)){case 1:var m=Tx;break;case 4:m=bx;break;default:m=Oc}a=m.bind(null,i,a,n),m=void 0,!_s||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(m=!0),d?m!==void 0?n.addEventListener(i,a,{capture:!0,passive:m}):n.addEventListener(i,a,!0):m!==void 0?n.addEventListener(i,a,{passive:m}):n.addEventListener(i,a,!1)}function nu(n,i,a,d,m){var S=d;if((i&1)===0&&(i&2)===0&&d!==null)e:for(;;){if(d===null)return;var b=d.tag;if(b===3||b===4){var O=d.stateNode.containerInfo;if(O===m||O.nodeType===8&&O.parentNode===m)break;if(b===4)for(b=d.return;b!==null;){var H=b.tag;if((H===3||H===4)&&(H=b.stateNode.containerInfo,H===m||H.nodeType===8&&H.parentNode===m))return;b=b.return}for(;O!==null;){if(b=jr(O),b===null)return;if(H=b.tag,H===5||H===6){d=S=b;continue e}O=O.parentNode}}d=d.return}Un(function(){var ie=S,_e=j(a),Me=[];e:{var ve=jh.get(n);if(ve!==void 0){var Oe=Vc,Ge=n;switch(n){case"keypress":if(ka(a)===0)break e;case"keydown":case"keyup":Oe=Vx;break;case"focusin":Ge="focus",Oe=jc;break;case"focusout":Ge="blur",Oe=jc;break;case"beforeblur":case"afterblur":Oe=jc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=Rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=jx;break;case Bh:case Vh:case Hh:Oe=Nx;break;case Gh:Oe=Xx;break;case"scroll":Oe=Ax;break;case"wheel":Oe=$x;break;case"copy":case"cut":case"paste":Oe=Ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Mh}var Ye=(i&4)!==0,qt=!Ye&&n==="scroll",Q=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var G=ie,ne;G!==null;){ne=G;var we=ne.stateNode;if(ne.tag===5&&we!==null&&(ne=we,Q!==null&&(we=bn(G,Q),we!=null&&Ye.push(Go(G,we,ne)))),qt)break;G=G.return}0<Ye.length&&(ve=new Oe(ve,Ge,null,a,_e),Me.push({event:ve,listeners:Ye}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",ve&&a!==It&&(Ge=a.relatedTarget||a.fromElement)&&(jr(Ge)||Ge[zi]))break e;if((Oe||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Oe?(Ge=a.relatedTarget||a.toElement,Oe=ie,Ge=Ge?jr(Ge):null,Ge!==null&&(qt=Ci(Ge),Ge!==qt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Oe=null,Ge=ie),Oe!==Ge)){if(Ye=yh,we="onMouseLeave",Q="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Mh,we="onPointerLeave",Q="onPointerEnter",G="pointer"),qt=Oe==null?ve:Cs(Oe),ne=Ge==null?ve:Cs(Ge),ve=new Ye(we,G+"leave",Oe,a,_e),ve.target=qt,ve.relatedTarget=ne,we=null,jr(_e)===ie&&(Ye=new Ye(Q,G+"enter",Ge,a,_e),Ye.target=ne,Ye.relatedTarget=qt,we=Ye),qt=we,Oe&&Ge)t:{for(Ye=Oe,Q=Ge,G=0,ne=Ye;ne;ne=bs(ne))G++;for(ne=0,we=Q;we;we=bs(we))ne++;for(;0<G-ne;)Ye=bs(Ye),G--;for(;0<ne-G;)Q=bs(Q),ne--;for(;G--;){if(Ye===Q||Q!==null&&Ye===Q.alternate)break t;Ye=bs(Ye),Q=bs(Q)}Ye=null}else Ye=null;Oe!==null&&qh(Me,ve,Oe,Ye,!1),Ge!==null&&qt!==null&&qh(Me,qt,Ge,Ye,!0)}}e:{if(ve=ie?Cs(ie):window,Oe=ve.nodeName&&ve.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ve.type==="file")var Ke=tv;else if(Ch(ve))if(Ph)Ke=sv;else{Ke=iv;var tt=nv}else(Oe=ve.nodeName)&&Oe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ke=rv);if(Ke&&(Ke=Ke(n,ie))){Rh(Me,Ke,a,_e);break e}tt&&tt(n,ve,ie),n==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&je(ve,"number",ve.value)}switch(tt=ie?Cs(ie):window,n){case"focusin":(Ch(tt)||tt.contentEditable==="true")&&(ws=tt,Kc=ie,Bo=null);break;case"focusout":Bo=Kc=ws=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,Oh(Me,a,_e);break;case"selectionchange":if(lv)break;case"keydown":case"keyup":Oh(Me,a,_e)}var nt;if(Xc)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Es?bh(n,a)&&(ot="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(Eh&&a.locale!=="ko"&&(Es||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Es&&(nt=vh()):(pr=_e,Bc="value"in pr?pr.value:pr.textContent,Es=!0)),tt=Ga(ie,ot),0<tt.length&&(ot=new Sh(ot,n,null,a,_e),Me.push({event:ot,listeners:tt}),nt?ot.data=nt:(nt=Ah(a),nt!==null&&(ot.data=nt)))),(nt=Kx?Zx(n,a):Qx(n,a))&&(ie=Ga(ie,"onBeforeInput"),0<ie.length&&(_e=new Sh("onBeforeInput","beforeinput",null,a,_e),Me.push({event:_e,listeners:ie}),_e.data=nt))}Yh(Me,i)})}function Go(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ga(n,i){for(var a=i+"Capture",d=[];n!==null;){var m=n,S=m.stateNode;m.tag===5&&S!==null&&(m=S,S=bn(n,a),S!=null&&d.unshift(Go(n,S,m)),S=bn(n,i),S!=null&&d.push(Go(n,S,m))),n=n.return}return d}function bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qh(n,i,a,d,m){for(var S=i._reactName,b=[];a!==null&&a!==d;){var O=a,H=O.alternate,ie=O.stateNode;if(H!==null&&H===d)break;O.tag===5&&ie!==null&&(O=ie,m?(H=bn(a,S),H!=null&&b.unshift(Go(a,H,O))):m||(H=bn(a,S),H!=null&&b.push(Go(a,H,O)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var fv=/\r\n?/g,hv=/\u0000|\uFFFD/g;function Kh(n){return(typeof n=="string"?n:""+n).replace(fv,`
`).replace(hv,"")}function ja(n,i,a){if(i=Kh(i),Kh(n)!==i&&a)throw Error(t(425))}function Wa(){}var iu=null,ru=null;function su(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,pv=typeof clearTimeout=="function"?clearTimeout:void 0,Zh=typeof Promise=="function"?Promise:void 0,mv=typeof queueMicrotask=="function"?queueMicrotask:typeof Zh<"u"?function(n){return Zh.resolve(null).then(n).catch(gv)}:ou;function gv(n){setTimeout(function(){throw n})}function au(n,i){var a=i,d=0;do{var m=a.nextSibling;if(n.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(d===0){n.removeChild(m),Do(i);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=m}while(a);Do(i)}function gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Qh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var As=Math.random().toString(36).slice(2),Pi="__reactFiber$"+As,jo="__reactProps$"+As,zi="__reactContainer$"+As,lu="__reactEvents$"+As,xv="__reactListeners$"+As,vv="__reactHandles$"+As;function jr(n){var i=n[Pi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[zi]||a[Pi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Qh(n);n!==null;){if(a=n[Pi])return a;n=Qh(n)}return i}n=a,a=n.parentNode}return null}function Wo(n){return n=n[Pi]||n[zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xa(n){return n[jo]||null}var cu=[],Rs=-1;function xr(n){return{current:n}}function Gt(n){0>Rs||(n.current=cu[Rs],cu[Rs]=null,Rs--)}function zt(n,i){Rs++,cu[Rs]=n.current,n.current=i}var vr={},vn=xr(vr),Fn=xr(!1),Wr=vr;function Ps(n,i){var a=n.type.contextTypes;if(!a)return vr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===i)return d.__reactInternalMemoizedMaskedChildContext;var m={},S;for(S in a)m[S]=i[S];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=m),m}function On(n){return n=n.childContextTypes,n!=null}function Ya(){Gt(Fn),Gt(vn)}function Jh(n,i,a){if(vn.current!==vr)throw Error(t(168));zt(vn,i),zt(Fn,a)}function ep(n,i,a){var d=n.stateNode;if(i=i.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var m in d)if(!(m in i))throw Error(t(108,xe(n)||"Unknown",m));return te({},a,d)}function $a(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,Wr=vn.current,zt(vn,n),zt(Fn,Fn.current),!0}function tp(n,i,a){var d=n.stateNode;if(!d)throw Error(t(169));a?(n=ep(n,i,Wr),d.__reactInternalMemoizedMergedChildContext=n,Gt(Fn),Gt(vn),zt(vn,n)):Gt(Fn),zt(Fn,a)}var Bi=null,qa=!1,uu=!1;function np(n){Bi===null?Bi=[n]:Bi.push(n)}function _v(n){qa=!0,np(n)}function _r(){if(!uu&&Bi!==null){uu=!0;var n=0,i=Ut;try{var a=Bi;for(Ut=1;n<a.length;n++){var d=a[n];do d=d(!0);while(d!==null)}Bi=null,qa=!1}catch(m){throw Bi!==null&&(Bi=Bi.slice(n+1)),re(Xe,_r),m}finally{Ut=i,uu=!1}}return null}var Ls=[],Ns=0,Ka=null,Za=0,ii=[],ri=0,Xr=null,Vi=1,Hi="";function Yr(n,i){Ls[Ns++]=Za,Ls[Ns++]=Ka,Ka=n,Za=i}function ip(n,i,a){ii[ri++]=Vi,ii[ri++]=Hi,ii[ri++]=Xr,Xr=n;var d=Vi;n=Hi;var m=32-ht(d)-1;d&=~(1<<m),a+=1;var S=32-ht(i)+m;if(30<S){var b=m-m%5;S=(d&(1<<b)-1).toString(32),d>>=b,m-=b,Vi=1<<32-ht(i)+m|a<<m|d,Hi=S+n}else Vi=1<<S|a<<m|d,Hi=n}function du(n){n.return!==null&&(Yr(n,1),ip(n,1,0))}function fu(n){for(;n===Ka;)Ka=Ls[--Ns],Ls[Ns]=null,Za=Ls[--Ns],Ls[Ns]=null;for(;n===Xr;)Xr=ii[--ri],ii[ri]=null,Hi=ii[--ri],ii[ri]=null,Vi=ii[--ri],ii[ri]=null}var $n=null,qn=null,jt=!1,xi=null;function rp(n,i){var a=li(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function sp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,$n=n,qn=gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,$n=n,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Xr!==null?{id:Vi,overflow:Hi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=li(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,$n=n,qn=null,!0):!1;default:return!1}}function hu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function pu(n){if(jt){var i=qn;if(i){var a=i;if(!sp(n,i)){if(hu(n))throw Error(t(418));i=gr(a.nextSibling);var d=$n;i&&sp(n,i)?rp(d,a):(n.flags=n.flags&-4097|2,jt=!1,$n=n)}}else{if(hu(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,$n=n}}}function op(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function Qa(n){if(n!==$n)return!1;if(!jt)return op(n),jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!su(n.type,n.memoizedProps)),i&&(i=qn)){if(hu(n))throw ap(),Error(t(418));for(;i;)rp(n,i),i=gr(i.nextSibling)}if(op(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){qn=gr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}qn=null}}else qn=$n?gr(n.stateNode.nextSibling):null;return!0}function ap(){for(var n=qn;n;)n=gr(n.nextSibling)}function Ds(){qn=$n=null,jt=!1}function mu(n){xi===null?xi=[n]:xi.push(n)}var yv=T.ReactCurrentBatchConfig;function Xo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,n));var m=d,S=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===S?i.ref:(i=function(b){var O=m.refs;b===null?delete O[S]:O[S]=b},i._stringRef=S,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ja(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function lp(n){var i=n._init;return i(n._payload)}function cp(n){function i(Q,G){if(n){var ne=Q.deletions;ne===null?(Q.deletions=[G],Q.flags|=16):ne.push(G)}}function a(Q,G){if(!n)return null;for(;G!==null;)i(Q,G),G=G.sibling;return null}function d(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function m(Q,G){return Q=Ar(Q,G),Q.index=0,Q.sibling=null,Q}function S(Q,G,ne){return Q.index=ne,n?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<G?(Q.flags|=2,G):ne):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function b(Q){return n&&Q.alternate===null&&(Q.flags|=2),Q}function O(Q,G,ne,we){return G===null||G.tag!==6?(G=od(ne,Q.mode,we),G.return=Q,G):(G=m(G,ne),G.return=Q,G)}function H(Q,G,ne,we){var Ke=ne.type;return Ke===D?_e(Q,G,ne.props.children,we,ne.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===de&&lp(Ke)===G.type)?(we=m(G,ne.props),we.ref=Xo(Q,G,ne),we.return=Q,we):(we=El(ne.type,ne.key,ne.props,null,Q.mode,we),we.ref=Xo(Q,G,ne),we.return=Q,we)}function ie(Q,G,ne,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==ne.containerInfo||G.stateNode.implementation!==ne.implementation?(G=ad(ne,Q.mode,we),G.return=Q,G):(G=m(G,ne.children||[]),G.return=Q,G)}function _e(Q,G,ne,we,Ke){return G===null||G.tag!==7?(G=ts(ne,Q.mode,we,Ke),G.return=Q,G):(G=m(G,ne),G.return=Q,G)}function Me(Q,G,ne){if(typeof G=="string"&&G!==""||typeof G=="number")return G=od(""+G,Q.mode,ne),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case k:return ne=El(G.type,G.key,G.props,null,Q.mode,ne),ne.ref=Xo(Q,null,G),ne.return=Q,ne;case L:return G=ad(G,Q.mode,ne),G.return=Q,G;case de:var we=G._init;return Me(Q,we(G._payload),ne)}if(ze(G)||ce(G))return G=ts(G,Q.mode,ne,null),G.return=Q,G;Ja(Q,G)}return null}function ve(Q,G,ne,we){var Ke=G!==null?G.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ke!==null?null:O(Q,G,""+ne,we);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case k:return ne.key===Ke?H(Q,G,ne,we):null;case L:return ne.key===Ke?ie(Q,G,ne,we):null;case de:return Ke=ne._init,ve(Q,G,Ke(ne._payload),we)}if(ze(ne)||ce(ne))return Ke!==null?null:_e(Q,G,ne,we,null);Ja(Q,ne)}return null}function Oe(Q,G,ne,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return Q=Q.get(ne)||null,O(G,Q,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case k:return Q=Q.get(we.key===null?ne:we.key)||null,H(G,Q,we,Ke);case L:return Q=Q.get(we.key===null?ne:we.key)||null,ie(G,Q,we,Ke);case de:var tt=we._init;return Oe(Q,G,ne,tt(we._payload),Ke)}if(ze(we)||ce(we))return Q=Q.get(ne)||null,_e(G,Q,we,Ke,null);Ja(G,we)}return null}function Ge(Q,G,ne,we){for(var Ke=null,tt=null,nt=G,ot=G=0,un=null;nt!==null&&ot<ne.length;ot++){nt.index>ot?(un=nt,nt=null):un=nt.sibling;var Pt=ve(Q,nt,ne[ot],we);if(Pt===null){nt===null&&(nt=un);break}n&&nt&&Pt.alternate===null&&i(Q,nt),G=S(Pt,G,ot),tt===null?Ke=Pt:tt.sibling=Pt,tt=Pt,nt=un}if(ot===ne.length)return a(Q,nt),jt&&Yr(Q,ot),Ke;if(nt===null){for(;ot<ne.length;ot++)nt=Me(Q,ne[ot],we),nt!==null&&(G=S(nt,G,ot),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return jt&&Yr(Q,ot),Ke}for(nt=d(Q,nt);ot<ne.length;ot++)un=Oe(nt,Q,ot,ne[ot],we),un!==null&&(n&&un.alternate!==null&&nt.delete(un.key===null?ot:un.key),G=S(un,G,ot),tt===null?Ke=un:tt.sibling=un,tt=un);return n&&nt.forEach(function(Cr){return i(Q,Cr)}),jt&&Yr(Q,ot),Ke}function Ye(Q,G,ne,we){var Ke=ce(ne);if(typeof Ke!="function")throw Error(t(150));if(ne=Ke.call(ne),ne==null)throw Error(t(151));for(var tt=Ke=null,nt=G,ot=G=0,un=null,Pt=ne.next();nt!==null&&!Pt.done;ot++,Pt=ne.next()){nt.index>ot?(un=nt,nt=null):un=nt.sibling;var Cr=ve(Q,nt,Pt.value,we);if(Cr===null){nt===null&&(nt=un);break}n&&nt&&Cr.alternate===null&&i(Q,nt),G=S(Cr,G,ot),tt===null?Ke=Cr:tt.sibling=Cr,tt=Cr,nt=un}if(Pt.done)return a(Q,nt),jt&&Yr(Q,ot),Ke;if(nt===null){for(;!Pt.done;ot++,Pt=ne.next())Pt=Me(Q,Pt.value,we),Pt!==null&&(G=S(Pt,G,ot),tt===null?Ke=Pt:tt.sibling=Pt,tt=Pt);return jt&&Yr(Q,ot),Ke}for(nt=d(Q,nt);!Pt.done;ot++,Pt=ne.next())Pt=Oe(nt,Q,ot,Pt.value,we),Pt!==null&&(n&&Pt.alternate!==null&&nt.delete(Pt.key===null?ot:Pt.key),G=S(Pt,G,ot),tt===null?Ke=Pt:tt.sibling=Pt,tt=Pt);return n&&nt.forEach(function(Jv){return i(Q,Jv)}),jt&&Yr(Q,ot),Ke}function qt(Q,G,ne,we){if(typeof ne=="object"&&ne!==null&&ne.type===D&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case k:e:{for(var Ke=ne.key,tt=G;tt!==null;){if(tt.key===Ke){if(Ke=ne.type,Ke===D){if(tt.tag===7){a(Q,tt.sibling),G=m(tt,ne.props.children),G.return=Q,Q=G;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===de&&lp(Ke)===tt.type){a(Q,tt.sibling),G=m(tt,ne.props),G.ref=Xo(Q,tt,ne),G.return=Q,Q=G;break e}a(Q,tt);break}else i(Q,tt);tt=tt.sibling}ne.type===D?(G=ts(ne.props.children,Q.mode,we,ne.key),G.return=Q,Q=G):(we=El(ne.type,ne.key,ne.props,null,Q.mode,we),we.ref=Xo(Q,G,ne),we.return=Q,Q=we)}return b(Q);case L:e:{for(tt=ne.key;G!==null;){if(G.key===tt)if(G.tag===4&&G.stateNode.containerInfo===ne.containerInfo&&G.stateNode.implementation===ne.implementation){a(Q,G.sibling),G=m(G,ne.children||[]),G.return=Q,Q=G;break e}else{a(Q,G);break}else i(Q,G);G=G.sibling}G=ad(ne,Q.mode,we),G.return=Q,Q=G}return b(Q);case de:return tt=ne._init,qt(Q,G,tt(ne._payload),we)}if(ze(ne))return Ge(Q,G,ne,we);if(ce(ne))return Ye(Q,G,ne,we);Ja(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,G!==null&&G.tag===6?(a(Q,G.sibling),G=m(G,ne),G.return=Q,Q=G):(a(Q,G),G=od(ne,Q.mode,we),G.return=Q,Q=G),b(Q)):a(Q,G)}return qt}var Is=cp(!0),up=cp(!1),el=xr(null),tl=null,Us=null,gu=null;function xu(){gu=Us=tl=null}function vu(n){var i=el.current;Gt(el),n._currentValue=i}function _u(n,i,a){for(;n!==null;){var d=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,d!==null&&(d.childLanes|=i)):d!==null&&(d.childLanes&i)!==i&&(d.childLanes|=i),n===a)break;n=n.return}}function ks(n,i){tl=n,gu=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(zn=!0),n.firstContext=null)}function si(n){var i=n._currentValue;if(gu!==n)if(n={context:n,memoizedValue:i,next:null},Us===null){if(tl===null)throw Error(t(308));Us=n,tl.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return i}var $r=null;function yu(n){$r===null?$r=[n]:$r.push(n)}function dp(n,i,a,d){var m=i.interleaved;return m===null?(a.next=a,yu(i)):(a.next=m.next,m.next=a),i.interleaved=a,Gi(n,d)}function Gi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var yr=!1;function Su(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Sr(n,i,a){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(At&2)!==0){var m=d.pending;return m===null?i.next=i:(i.next=m.next,m.next=i),d.pending=i,Gi(n,a)}return m=d.interleaved,m===null?(i.next=i,yu(d)):(i.next=m.next,m.next=i),d.interleaved=i,Gi(n,a)}function nl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var d=i.lanes;d&=n.pendingLanes,a|=d,i.lanes=a,Uc(n,a)}}function hp(n,i){var a=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var m=null,S=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};S===null?m=S=b:S=S.next=b,a=a.next}while(a!==null);S===null?m=S=i:S=S.next=i}else m=S=i;a={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:S,shared:d.shared,effects:d.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function il(n,i,a,d){var m=n.updateQueue;yr=!1;var S=m.firstBaseUpdate,b=m.lastBaseUpdate,O=m.shared.pending;if(O!==null){m.shared.pending=null;var H=O,ie=H.next;H.next=null,b===null?S=ie:b.next=ie,b=H;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,O=_e.lastBaseUpdate,O!==b&&(O===null?_e.firstBaseUpdate=ie:O.next=ie,_e.lastBaseUpdate=H))}if(S!==null){var Me=m.baseState;b=0,_e=ie=H=null,O=S;do{var ve=O.lane,Oe=O.eventTime;if((d&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Oe,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ge=n,Ye=O;switch(ve=i,Oe=a,Ye.tag){case 1:if(Ge=Ye.payload,typeof Ge=="function"){Me=Ge.call(Oe,Me,ve);break e}Me=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Ye.payload,ve=typeof Ge=="function"?Ge.call(Oe,Me,ve):Ge,ve==null)break e;Me=te({},Me,ve);break e;case 2:yr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,ve=m.effects,ve===null?m.effects=[O]:ve.push(O))}else Oe={eventTime:Oe,lane:ve,tag:O.tag,payload:O.payload,callback:O.callback,next:null},_e===null?(ie=_e=Oe,H=Me):_e=_e.next=Oe,b|=ve;if(O=O.next,O===null){if(O=m.shared.pending,O===null)break;ve=O,O=ve.next,ve.next=null,m.lastBaseUpdate=ve,m.shared.pending=null}}while(!0);if(_e===null&&(H=Me),m.baseState=H,m.firstBaseUpdate=ie,m.lastBaseUpdate=_e,i=m.shared.interleaved,i!==null){m=i;do b|=m.lane,m=m.next;while(m!==i)}else S===null&&(m.shared.lanes=0);Zr|=b,n.lanes=b,n.memoizedState=Me}}function pp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var d=n[i],m=d.callback;if(m!==null){if(d.callback=null,d=a,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var Yo={},Li=xr(Yo),$o=xr(Yo),qo=xr(Yo);function qr(n){if(n===Yo)throw Error(t(174));return n}function Mu(n,i){switch(zt(qo,i),zt($o,n),zt(Li,Yo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ve(i,n)}Gt(Li),zt(Li,i)}function Fs(){Gt(Li),Gt($o),Gt(qo)}function mp(n){qr(qo.current);var i=qr(Li.current),a=Ve(i,n.type);i!==a&&(zt($o,n),zt(Li,a))}function Eu(n){$o.current===n&&(Gt(Li),Gt($o))}var Wt=xr(0);function rl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wu=[];function Tu(){for(var n=0;n<wu.length;n++)wu[n]._workInProgressVersionPrimary=null;wu.length=0}var sl=T.ReactCurrentDispatcher,bu=T.ReactCurrentBatchConfig,Kr=0,Xt=null,tn=null,ln=null,ol=!1,Ko=!1,Zo=0,Sv=0;function _n(){throw Error(t(321))}function Au(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!gi(n[a],i[a]))return!1;return!0}function Cu(n,i,a,d,m,S){if(Kr=S,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,sl.current=n===null||n.memoizedState===null?Tv:bv,n=a(d,m),Ko){S=0;do{if(Ko=!1,Zo=0,25<=S)throw Error(t(301));S+=1,ln=tn=null,i.updateQueue=null,sl.current=Av,n=a(d,m)}while(Ko)}if(sl.current=cl,i=tn!==null&&tn.next!==null,Kr=0,ln=tn=Xt=null,ol=!1,i)throw Error(t(300));return n}function Ru(){var n=Zo!==0;return Zo=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Xt.memoizedState=ln=n:ln=ln.next=n,ln}function oi(){if(tn===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=ln===null?Xt.memoizedState:ln.next;if(i!==null)ln=i,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},ln===null?Xt.memoizedState=ln=n:ln=ln.next=n}return ln}function Qo(n,i){return typeof i=="function"?i(n):i}function Pu(n){var i=oi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var d=tn,m=d.baseQueue,S=a.pending;if(S!==null){if(m!==null){var b=m.next;m.next=S.next,S.next=b}d.baseQueue=m=S,a.pending=null}if(m!==null){S=m.next,d=d.baseState;var O=b=null,H=null,ie=S;do{var _e=ie.lane;if((Kr&_e)===_e)H!==null&&(H=H.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),d=ie.hasEagerState?ie.eagerState:n(d,ie.action);else{var Me={lane:_e,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};H===null?(O=H=Me,b=d):H=H.next=Me,Xt.lanes|=_e,Zr|=_e}ie=ie.next}while(ie!==null&&ie!==S);H===null?b=d:H.next=O,gi(d,i.memoizedState)||(zn=!0),i.memoizedState=d,i.baseState=b,i.baseQueue=H,a.lastRenderedState=d}if(n=a.interleaved,n!==null){m=n;do S=m.lane,Xt.lanes|=S,Zr|=S,m=m.next;while(m!==n)}else m===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Lu(n){var i=oi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var d=a.dispatch,m=a.pending,S=i.memoizedState;if(m!==null){a.pending=null;var b=m=m.next;do S=n(S,b.action),b=b.next;while(b!==m);gi(S,i.memoizedState)||(zn=!0),i.memoizedState=S,i.baseQueue===null&&(i.baseState=S),a.lastRenderedState=S}return[S,d]}function gp(){}function xp(n,i){var a=Xt,d=oi(),m=i(),S=!gi(d.memoizedState,m);if(S&&(d.memoizedState=m,zn=!0),d=d.queue,Nu(yp.bind(null,a,d,n),[n]),d.getSnapshot!==i||S||ln!==null&&ln.memoizedState.tag&1){if(a.flags|=2048,Jo(9,_p.bind(null,a,d,m,i),void 0,null),cn===null)throw Error(t(349));(Kr&30)!==0||vp(a,i,m)}return m}function vp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function _p(n,i,a,d){i.value=a,i.getSnapshot=d,Sp(i)&&Mp(n)}function yp(n,i,a){return a(function(){Sp(i)&&Mp(n)})}function Sp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!gi(n,a)}catch{return!0}}function Mp(n){var i=Gi(n,1);i!==null&&Si(i,n,1,-1)}function Ep(n){var i=Ni();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:n},i.queue=n,n=n.dispatch=wv.bind(null,Xt,n),[i.memoizedState,n]}function Jo(n,i,a,d){return n={tag:n,create:i,destroy:a,deps:d,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(d=a.next,a.next=n,n.next=d,i.lastEffect=n)),n}function wp(){return oi().memoizedState}function al(n,i,a,d){var m=Ni();Xt.flags|=n,m.memoizedState=Jo(1|i,a,void 0,d===void 0?null:d)}function ll(n,i,a,d){var m=oi();d=d===void 0?null:d;var S=void 0;if(tn!==null){var b=tn.memoizedState;if(S=b.destroy,d!==null&&Au(d,b.deps)){m.memoizedState=Jo(i,a,S,d);return}}Xt.flags|=n,m.memoizedState=Jo(1|i,a,S,d)}function Tp(n,i){return al(8390656,8,n,i)}function Nu(n,i){return ll(2048,8,n,i)}function bp(n,i){return ll(4,2,n,i)}function Ap(n,i){return ll(4,4,n,i)}function Cp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Rp(n,i,a){return a=a!=null?a.concat([n]):null,ll(4,4,Cp.bind(null,i,n),a)}function Du(){}function Pp(n,i){var a=oi();i=i===void 0?null:i;var d=a.memoizedState;return d!==null&&i!==null&&Au(i,d[1])?d[0]:(a.memoizedState=[n,i],n)}function Lp(n,i){var a=oi();i=i===void 0?null:i;var d=a.memoizedState;return d!==null&&i!==null&&Au(i,d[1])?d[0]:(n=n(),a.memoizedState=[n,i],n)}function Np(n,i,a){return(Kr&21)===0?(n.baseState&&(n.baseState=!1,zn=!0),n.memoizedState=a):(gi(a,i)||(a=An(),Xt.lanes|=a,Zr|=a,n.baseState=!0),i)}function Mv(n,i){var a=Ut;Ut=a!==0&&4>a?a:4,n(!0);var d=bu.transition;bu.transition={};try{n(!1),i()}finally{Ut=a,bu.transition=d}}function Dp(){return oi().memoizedState}function Ev(n,i,a){var d=Tr(n);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},Ip(n))Up(i,a);else if(a=dp(n,i,a,d),a!==null){var m=Rn();Si(a,n,d,m),kp(a,i,d)}}function wv(n,i,a){var d=Tr(n),m={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ip(n))Up(i,m);else{var S=n.alternate;if(n.lanes===0&&(S===null||S.lanes===0)&&(S=i.lastRenderedReducer,S!==null))try{var b=i.lastRenderedState,O=S(b,a);if(m.hasEagerState=!0,m.eagerState=O,gi(O,b)){var H=i.interleaved;H===null?(m.next=m,yu(i)):(m.next=H.next,H.next=m),i.interleaved=m;return}}catch{}finally{}a=dp(n,i,m,d),a!==null&&(m=Rn(),Si(a,n,d,m),kp(a,i,d))}}function Ip(n){var i=n.alternate;return n===Xt||i!==null&&i===Xt}function Up(n,i){Ko=ol=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function kp(n,i,a){if((a&4194240)!==0){var d=i.lanes;d&=n.pendingLanes,a|=d,i.lanes=a,Uc(n,a)}}var cl={readContext:si,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},Tv={readContext:si,useCallback:function(n,i){return Ni().memoizedState=[n,i===void 0?null:i],n},useContext:si,useEffect:Tp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,al(4194308,4,Cp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return al(4194308,4,n,i)},useInsertionEffect:function(n,i){return al(4,2,n,i)},useMemo:function(n,i){var a=Ni();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var d=Ni();return i=a!==void 0?a(i):i,d.memoizedState=d.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},d.queue=n,n=n.dispatch=Ev.bind(null,Xt,n),[d.memoizedState,n]},useRef:function(n){var i=Ni();return n={current:n},i.memoizedState=n},useState:Ep,useDebugValue:Du,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=Ep(!1),i=n[0];return n=Mv.bind(null,n[1]),Ni().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var d=Xt,m=Ni();if(jt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),cn===null)throw Error(t(349));(Kr&30)!==0||vp(d,i,a)}m.memoizedState=a;var S={value:a,getSnapshot:i};return m.queue=S,Tp(yp.bind(null,d,S,n),[n]),d.flags|=2048,Jo(9,_p.bind(null,d,S,a,i),void 0,null),a},useId:function(){var n=Ni(),i=cn.identifierPrefix;if(jt){var a=Hi,d=Vi;a=(d&~(1<<32-ht(d)-1)).toString(32)+a,i=":"+i+"R"+a,a=Zo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Sv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},bv={readContext:si,useCallback:Pp,useContext:si,useEffect:Nu,useImperativeHandle:Rp,useInsertionEffect:bp,useLayoutEffect:Ap,useMemo:Lp,useReducer:Pu,useRef:wp,useState:function(){return Pu(Qo)},useDebugValue:Du,useDeferredValue:function(n){var i=oi();return Np(i,tn.memoizedState,n)},useTransition:function(){var n=Pu(Qo)[0],i=oi().memoizedState;return[n,i]},useMutableSource:gp,useSyncExternalStore:xp,useId:Dp,unstable_isNewReconciler:!1},Av={readContext:si,useCallback:Pp,useContext:si,useEffect:Nu,useImperativeHandle:Rp,useInsertionEffect:bp,useLayoutEffect:Ap,useMemo:Lp,useReducer:Lu,useRef:wp,useState:function(){return Lu(Qo)},useDebugValue:Du,useDeferredValue:function(n){var i=oi();return tn===null?i.memoizedState=n:Np(i,tn.memoizedState,n)},useTransition:function(){var n=Lu(Qo)[0],i=oi().memoizedState;return[n,i]},useMutableSource:gp,useSyncExternalStore:xp,useId:Dp,unstable_isNewReconciler:!1};function vi(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Iu(n,i,a,d){i=n.memoizedState,a=a(d,i),a=a==null?i:te({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ul={isMounted:function(n){return(n=n._reactInternals)?Ci(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var d=Rn(),m=Tr(n),S=ji(d,m);S.payload=i,a!=null&&(S.callback=a),i=Sr(n,S,m),i!==null&&(Si(i,n,m,d),nl(i,n,m))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var d=Rn(),m=Tr(n),S=ji(d,m);S.tag=1,S.payload=i,a!=null&&(S.callback=a),i=Sr(n,S,m),i!==null&&(Si(i,n,m,d),nl(i,n,m))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Rn(),d=Tr(n),m=ji(a,d);m.tag=2,i!=null&&(m.callback=i),i=Sr(n,m,d),i!==null&&(Si(i,n,d,a),nl(i,n,d))}};function Fp(n,i,a,d,m,S,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,S,b):i.prototype&&i.prototype.isPureReactComponent?!zo(a,d)||!zo(m,S):!0}function Op(n,i,a){var d=!1,m=vr,S=i.contextType;return typeof S=="object"&&S!==null?S=si(S):(m=On(i)?Wr:vn.current,d=i.contextTypes,S=(d=d!=null)?Ps(n,m):vr),i=new i(a,S),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ul,n.stateNode=i,i._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=S),i}function zp(n,i,a,d){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,d),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,d),i.state!==n&&ul.enqueueReplaceState(i,i.state,null)}function Uu(n,i,a,d){var m=n.stateNode;m.props=a,m.state=n.memoizedState,m.refs={},Su(n);var S=i.contextType;typeof S=="object"&&S!==null?m.context=si(S):(S=On(i)?Wr:vn.current,m.context=Ps(n,S)),m.state=n.memoizedState,S=i.getDerivedStateFromProps,typeof S=="function"&&(Iu(n,i,S,a),m.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(i=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),i!==m.state&&ul.enqueueReplaceState(m,m.state,null),il(n,a,m,d),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Os(n,i){try{var a="",d=i;do a+=he(d),d=d.return;while(d);var m=a}catch(S){m=`
Error generating stack: `+S.message+`
`+S.stack}return{value:n,source:i,stack:m,digest:null}}function ku(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Fu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Cv=typeof WeakMap=="function"?WeakMap:Map;function Bp(n,i,a){a=ji(-1,a),a.tag=3,a.payload={element:null};var d=i.value;return a.callback=function(){xl||(xl=!0,Qu=d),Fu(n,i)},a}function Vp(n,i,a){a=ji(-1,a),a.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var m=i.value;a.payload=function(){return d(m)},a.callback=function(){Fu(n,i)}}var S=n.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(a.callback=function(){Fu(n,i),typeof d!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function Hp(n,i,a){var d=n.pingCache;if(d===null){d=n.pingCache=new Cv;var m=new Set;d.set(i,m)}else m=d.get(i),m===void 0&&(m=new Set,d.set(i,m));m.has(a)||(m.add(a),n=Hv.bind(null,n,i,a),i.then(n,n))}function Gp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function jp(n,i,a,d,m){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ji(-1,1),i.tag=2,Sr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var Rv=T.ReactCurrentOwner,zn=!1;function Cn(n,i,a,d){i.child=n===null?up(i,null,a,d):Is(i,n.child,a,d)}function Wp(n,i,a,d,m){a=a.render;var S=i.ref;return ks(i,m),d=Cu(n,i,a,d,S,m),a=Ru(),n!==null&&!zn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~m,Wi(n,i,m)):(jt&&a&&du(i),i.flags|=1,Cn(n,i,d,m),i.child)}function Xp(n,i,a,d,m){if(n===null){var S=a.type;return typeof S=="function"&&!sd(S)&&S.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=S,Yp(n,i,S,d,m)):(n=El(a.type,null,d,i,i.mode,m),n.ref=i.ref,n.return=i,i.child=n)}if(S=n.child,(n.lanes&m)===0){var b=S.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(b,d)&&n.ref===i.ref)return Wi(n,i,m)}return i.flags|=1,n=Ar(S,d),n.ref=i.ref,n.return=i,i.child=n}function Yp(n,i,a,d,m){if(n!==null){var S=n.memoizedProps;if(zo(S,d)&&n.ref===i.ref)if(zn=!1,i.pendingProps=d=S,(n.lanes&m)!==0)(n.flags&131072)!==0&&(zn=!0);else return i.lanes=n.lanes,Wi(n,i,m)}return Ou(n,i,a,d,m)}function $p(n,i,a){var d=i.pendingProps,m=d.children,S=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Bs,Kn),Kn|=a;else{if((a&1073741824)===0)return n=S!==null?S.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,zt(Bs,Kn),Kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=S!==null?S.baseLanes:a,zt(Bs,Kn),Kn|=d}else S!==null?(d=S.baseLanes|a,i.memoizedState=null):d=a,zt(Bs,Kn),Kn|=d;return Cn(n,i,m,a),i.child}function qp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ou(n,i,a,d,m){var S=On(a)?Wr:vn.current;return S=Ps(i,S),ks(i,m),a=Cu(n,i,a,d,S,m),d=Ru(),n!==null&&!zn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~m,Wi(n,i,m)):(jt&&d&&du(i),i.flags|=1,Cn(n,i,a,m),i.child)}function Kp(n,i,a,d,m){if(On(a)){var S=!0;$a(i)}else S=!1;if(ks(i,m),i.stateNode===null)fl(n,i),Op(i,a,d),Uu(i,a,d,m),d=!0;else if(n===null){var b=i.stateNode,O=i.memoizedProps;b.props=O;var H=b.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=si(ie):(ie=On(a)?Wr:vn.current,ie=Ps(i,ie));var _e=a.getDerivedStateFromProps,Me=typeof _e=="function"||typeof b.getSnapshotBeforeUpdate=="function";Me||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==d||H!==ie)&&zp(i,b,d,ie),yr=!1;var ve=i.memoizedState;b.state=ve,il(i,d,b,m),H=i.memoizedState,O!==d||ve!==H||Fn.current||yr?(typeof _e=="function"&&(Iu(i,a,_e,d),H=i.memoizedState),(O=yr||Fp(i,a,O,d,ve,H,ie))?(Me||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=d,i.memoizedState=H),b.props=d,b.state=H,b.context=ie,d=O):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),d=!1)}else{b=i.stateNode,fp(n,i),O=i.memoizedProps,ie=i.type===i.elementType?O:vi(i.type,O),b.props=ie,Me=i.pendingProps,ve=b.context,H=a.contextType,typeof H=="object"&&H!==null?H=si(H):(H=On(a)?Wr:vn.current,H=Ps(i,H));var Oe=a.getDerivedStateFromProps;(_e=typeof Oe=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==Me||ve!==H)&&zp(i,b,d,H),yr=!1,ve=i.memoizedState,b.state=ve,il(i,d,b,m);var Ge=i.memoizedState;O!==Me||ve!==Ge||Fn.current||yr?(typeof Oe=="function"&&(Iu(i,a,Oe,d),Ge=i.memoizedState),(ie=yr||Fp(i,a,ie,d,ve,Ge,H)||!1)?(_e||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(d,Ge,H),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(d,Ge,H)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=d,i.memoizedState=Ge),b.props=d,b.state=Ge,b.context=H,d=ie):(typeof b.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),d=!1)}return zu(n,i,a,d,S,m)}function zu(n,i,a,d,m,S){qp(n,i);var b=(i.flags&128)!==0;if(!d&&!b)return m&&tp(i,a,!1),Wi(n,i,S);d=i.stateNode,Rv.current=i;var O=b&&typeof a.getDerivedStateFromError!="function"?null:d.render();return i.flags|=1,n!==null&&b?(i.child=Is(i,n.child,null,S),i.child=Is(i,null,O,S)):Cn(n,i,O,S),i.memoizedState=d.state,m&&tp(i,a,!0),i.child}function Zp(n){var i=n.stateNode;i.pendingContext?Jh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Jh(n,i.context,!1),Mu(n,i.containerInfo)}function Qp(n,i,a,d,m){return Ds(),mu(m),i.flags|=256,Cn(n,i,a,d),i.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function Vu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jp(n,i,a){var d=i.pendingProps,m=Wt.current,S=!1,b=(i.flags&128)!==0,O;if((O=b)||(O=n!==null&&n.memoizedState===null?!1:(m&2)!==0),O?(S=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),zt(Wt,m&1),n===null)return pu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=d.children,n=d.fallback,S?(d=i.mode,S=i.child,b={mode:"hidden",children:b},(d&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=b):S=wl(b,d,0,null),n=ts(n,d,a,null),S.return=i,n.return=i,S.sibling=n,i.child=S,i.child.memoizedState=Vu(a),i.memoizedState=Bu,n):Hu(i,b));if(m=n.memoizedState,m!==null&&(O=m.dehydrated,O!==null))return Pv(n,i,b,d,O,m,a);if(S){S=d.fallback,b=i.mode,m=n.child,O=m.sibling;var H={mode:"hidden",children:d.children};return(b&1)===0&&i.child!==m?(d=i.child,d.childLanes=0,d.pendingProps=H,i.deletions=null):(d=Ar(m,H),d.subtreeFlags=m.subtreeFlags&14680064),O!==null?S=Ar(O,S):(S=ts(S,b,a,null),S.flags|=2),S.return=i,d.return=i,d.sibling=S,i.child=d,d=S,S=i.child,b=n.child.memoizedState,b=b===null?Vu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},S.memoizedState=b,S.childLanes=n.childLanes&~a,i.memoizedState=Bu,d}return S=n.child,n=S.sibling,d=Ar(S,{mode:"visible",children:d.children}),(i.mode&1)===0&&(d.lanes=a),d.return=i,d.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=d,i.memoizedState=null,d}function Hu(n,i){return i=wl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function dl(n,i,a,d){return d!==null&&mu(d),Is(i,n.child,null,a),n=Hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Pv(n,i,a,d,m,S,b){if(a)return i.flags&256?(i.flags&=-257,d=ku(Error(t(422))),dl(n,i,b,d)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(S=d.fallback,m=i.mode,d=wl({mode:"visible",children:d.children},m,0,null),S=ts(S,m,b,null),S.flags|=2,d.return=i,S.return=i,d.sibling=S,i.child=d,(i.mode&1)!==0&&Is(i,n.child,null,b),i.child.memoizedState=Vu(b),i.memoizedState=Bu,S);if((i.mode&1)===0)return dl(n,i,b,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var O=d.dgst;return d=O,S=Error(t(419)),d=ku(S,d,void 0),dl(n,i,b,d)}if(O=(b&n.childLanes)!==0,zn||O){if(d=cn,d!==null){switch(b&-b){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|b))!==0?0:m,m!==0&&m!==S.retryLane&&(S.retryLane=m,Gi(n,m),Si(d,n,m,-1))}return rd(),d=ku(Error(t(421))),dl(n,i,b,d)}return m.data==="$?"?(i.flags|=128,i.child=n.child,i=Gv.bind(null,n),m._reactRetry=i,null):(n=S.treeContext,qn=gr(m.nextSibling),$n=i,jt=!0,xi=null,n!==null&&(ii[ri++]=Vi,ii[ri++]=Hi,ii[ri++]=Xr,Vi=n.id,Hi=n.overflow,Xr=i),i=Hu(i,d.children),i.flags|=4096,i)}function em(n,i,a){n.lanes|=i;var d=n.alternate;d!==null&&(d.lanes|=i),_u(n.return,i,a)}function Gu(n,i,a,d,m){var S=n.memoizedState;S===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:m}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=d,S.tail=a,S.tailMode=m)}function tm(n,i,a){var d=i.pendingProps,m=d.revealOrder,S=d.tail;if(Cn(n,i,d.children,a),d=Wt.current,(d&2)!==0)d=d&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&em(n,a,i);else if(n.tag===19)em(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(zt(Wt,d),(i.mode&1)===0)i.memoizedState=null;else switch(m){case"forwards":for(a=i.child,m=null;a!==null;)n=a.alternate,n!==null&&rl(n)===null&&(m=a),a=a.sibling;a=m,a===null?(m=i.child,i.child=null):(m=a.sibling,a.sibling=null),Gu(i,!1,m,a,S);break;case"backwards":for(a=null,m=i.child,i.child=null;m!==null;){if(n=m.alternate,n!==null&&rl(n)===null){i.child=m;break}n=m.sibling,m.sibling=a,a=m,m=n}Gu(i,!0,a,null,S);break;case"together":Gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Wi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Zr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ar(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ar(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Lv(n,i,a){switch(i.tag){case 3:Zp(i),Ds();break;case 5:mp(i);break;case 1:On(i.type)&&$a(i);break;case 4:Mu(i,i.stateNode.containerInfo);break;case 10:var d=i.type._context,m=i.memoizedProps.value;zt(el,d._currentValue),d._currentValue=m;break;case 13:if(d=i.memoizedState,d!==null)return d.dehydrated!==null?(zt(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Jp(n,i,a):(zt(Wt,Wt.current&1),n=Wi(n,i,a),n!==null?n.sibling:null);zt(Wt,Wt.current&1);break;case 19:if(d=(a&i.childLanes)!==0,(n.flags&128)!==0){if(d)return tm(n,i,a);i.flags|=128}if(m=i.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),zt(Wt,Wt.current),d)break;return null;case 22:case 23:return i.lanes=0,$p(n,i,a)}return Wi(n,i,a)}var nm,ju,im,rm;nm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ju=function(){},im=function(n,i,a,d){var m=n.memoizedProps;if(m!==d){n=i.stateNode,qr(Li.current);var S=null;switch(a){case"input":m=X(n,m),d=X(n,d),S=[];break;case"select":m=te({},m,{value:void 0}),d=te({},d,{value:void 0}),S=[];break;case"textarea":m=R(n,m),d=R(n,d),S=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=Wa)}xt(a,d);var b;a=null;for(ie in m)if(!d.hasOwnProperty(ie)&&m.hasOwnProperty(ie)&&m[ie]!=null)if(ie==="style"){var O=m[ie];for(b in O)O.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?S||(S=[]):(S=S||[]).push(ie,null));for(ie in d){var H=d[ie];if(O=m!=null?m[ie]:void 0,d.hasOwnProperty(ie)&&H!==O&&(H!=null||O!=null))if(ie==="style")if(O){for(b in O)!O.hasOwnProperty(b)||H&&H.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in H)H.hasOwnProperty(b)&&O[b]!==H[b]&&(a||(a={}),a[b]=H[b])}else a||(S||(S=[]),S.push(ie,a)),a=H;else ie==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,O=O?O.__html:void 0,H!=null&&O!==H&&(S=S||[]).push(ie,H)):ie==="children"?typeof H!="string"&&typeof H!="number"||(S=S||[]).push(ie,""+H):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(H!=null&&ie==="onScroll"&&Ht("scroll",n),S||O===H||(S=[])):(S=S||[]).push(ie,H))}a&&(S=S||[]).push("style",a);var ie=S;(i.updateQueue=ie)&&(i.flags|=4)}},rm=function(n,i,a,d){a!==d&&(i.flags|=4)};function ea(n,i){if(!jt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function yn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,d=0;if(i)for(var m=n.child;m!==null;)a|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)a|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=d,n.childLanes=a,i}function Nv(n,i,a){var d=i.pendingProps;switch(fu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(i),null;case 1:return On(i.type)&&Ya(),yn(i),null;case 3:return d=i.stateNode,Fs(),Gt(Fn),Gt(vn),Tu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(Qa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xi!==null&&(td(xi),xi=null))),ju(n,i),yn(i),null;case 5:Eu(i);var m=qr(qo.current);if(a=i.type,n!==null&&i.stateNode!=null)im(n,i,a,d,m),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!d){if(i.stateNode===null)throw Error(t(166));return yn(i),null}if(n=qr(Li.current),Qa(i)){d=i.stateNode,a=i.type;var S=i.memoizedProps;switch(d[Pi]=i,d[jo]=S,n=(i.mode&1)!==0,a){case"dialog":Ht("cancel",d),Ht("close",d);break;case"iframe":case"object":case"embed":Ht("load",d);break;case"video":case"audio":for(m=0;m<Vo.length;m++)Ht(Vo[m],d);break;case"source":Ht("error",d);break;case"img":case"image":case"link":Ht("error",d),Ht("load",d);break;case"details":Ht("toggle",d);break;case"input":Kt(d,S),Ht("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!S.multiple},Ht("invalid",d);break;case"textarea":Z(d,S),Ht("invalid",d)}xt(a,S),m=null;for(var b in S)if(S.hasOwnProperty(b)){var O=S[b];b==="children"?typeof O=="string"?d.textContent!==O&&(S.suppressHydrationWarning!==!0&&ja(d.textContent,O,n),m=["children",O]):typeof O=="number"&&d.textContent!==""+O&&(S.suppressHydrationWarning!==!0&&ja(d.textContent,O,n),m=["children",""+O]):o.hasOwnProperty(b)&&O!=null&&b==="onScroll"&&Ht("scroll",d)}switch(a){case"input":pt(d),Je(d,S,!0);break;case"textarea":pt(d),me(d);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(d.onclick=Wa)}d=m,i.updateQueue=d,d!==null&&(i.flags|=4)}else{b=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=b.createElement(a,{is:d.is}):(n=b.createElement(a),a==="select"&&(b=n,d.multiple?b.multiple=!0:d.size&&(b.size=d.size))):n=b.createElementNS(n,a),n[Pi]=i,n[jo]=d,nm(n,i,!1,!1),i.stateNode=n;e:{switch(b=ut(a,d),a){case"dialog":Ht("cancel",n),Ht("close",n),m=d;break;case"iframe":case"object":case"embed":Ht("load",n),m=d;break;case"video":case"audio":for(m=0;m<Vo.length;m++)Ht(Vo[m],n);m=d;break;case"source":Ht("error",n),m=d;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),m=d;break;case"details":Ht("toggle",n),m=d;break;case"input":Kt(n,d),m=X(n,d),Ht("invalid",n);break;case"option":m=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},m=te({},d,{value:void 0}),Ht("invalid",n);break;case"textarea":Z(n,d),m=R(n,d),Ht("invalid",n);break;default:m=d}xt(a,m),O=m;for(S in O)if(O.hasOwnProperty(S)){var H=O[S];S==="style"?We(n,H):S==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Fe(n,H)):S==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&at(n,H):typeof H=="number"&&at(n,""+H):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(o.hasOwnProperty(S)?H!=null&&S==="onScroll"&&Ht("scroll",n):H!=null&&C(n,S,H,b))}switch(a){case"input":pt(n),Je(n,d,!1);break;case"textarea":pt(n),me(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Ce(d.value));break;case"select":n.multiple=!!d.multiple,S=d.value,S!=null?U(n,!!d.multiple,S,!1):d.defaultValue!=null&&U(n,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=Wa)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yn(i),null;case 6:if(n&&i.stateNode!=null)rm(n,i,n.memoizedProps,d);else{if(typeof d!="string"&&i.stateNode===null)throw Error(t(166));if(a=qr(qo.current),qr(Li.current),Qa(i)){if(d=i.stateNode,a=i.memoizedProps,d[Pi]=i,(S=d.nodeValue!==a)&&(n=$n,n!==null))switch(n.tag){case 3:ja(d.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ja(d.nodeValue,a,(n.mode&1)!==0)}S&&(i.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[Pi]=i,i.stateNode=d}return yn(i),null;case 13:if(Gt(Wt),d=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ap(),Ds(),i.flags|=98560,S=!1;else if(S=Qa(i),d!==null&&d.dehydrated!==null){if(n===null){if(!S)throw Error(t(318));if(S=i.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Pi]=i}else Ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yn(i),S=!1}else xi!==null&&(td(xi),xi=null),S=!0;if(!S)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?nn===0&&(nn=3):rd())),i.updateQueue!==null&&(i.flags|=4),yn(i),null);case 4:return Fs(),ju(n,i),n===null&&Ho(i.stateNode.containerInfo),yn(i),null;case 10:return vu(i.type._context),yn(i),null;case 17:return On(i.type)&&Ya(),yn(i),null;case 19:if(Gt(Wt),S=i.memoizedState,S===null)return yn(i),null;if(d=(i.flags&128)!==0,b=S.rendering,b===null)if(d)ea(S,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=rl(n),b!==null){for(i.flags|=128,ea(S,!1),d=b.updateQueue,d!==null&&(i.updateQueue=d,i.flags|=4),i.subtreeFlags=0,d=a,a=i.child;a!==null;)S=a,n=d,S.flags&=14680066,b=S.alternate,b===null?(S.childLanes=0,S.lanes=n,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=b.childLanes,S.lanes=b.lanes,S.child=b.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=b.memoizedProps,S.memoizedState=b.memoizedState,S.updateQueue=b.updateQueue,S.type=b.type,n=b.dependencies,S.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return zt(Wt,Wt.current&1|2),i.child}n=n.sibling}S.tail!==null&&Ee()>Vs&&(i.flags|=128,d=!0,ea(S,!1),i.lanes=4194304)}else{if(!d)if(n=rl(b),n!==null){if(i.flags|=128,d=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ea(S,!0),S.tail===null&&S.tailMode==="hidden"&&!b.alternate&&!jt)return yn(i),null}else 2*Ee()-S.renderingStartTime>Vs&&a!==1073741824&&(i.flags|=128,d=!0,ea(S,!1),i.lanes=4194304);S.isBackwards?(b.sibling=i.child,i.child=b):(a=S.last,a!==null?a.sibling=b:i.child=b,S.last=b)}return S.tail!==null?(i=S.tail,S.rendering=i,S.tail=i.sibling,S.renderingStartTime=Ee(),i.sibling=null,a=Wt.current,zt(Wt,d?a&1|2:a&1),i):(yn(i),null);case 22:case 23:return id(),d=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(i.flags|=8192),d&&(i.mode&1)!==0?(Kn&1073741824)!==0&&(yn(i),i.subtreeFlags&6&&(i.flags|=8192)):yn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Dv(n,i){switch(fu(i),i.tag){case 1:return On(i.type)&&Ya(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Fs(),Gt(Fn),Gt(vn),Tu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Eu(i),null;case 13:if(Gt(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ds()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Gt(Wt),null;case 4:return Fs(),null;case 10:return vu(i.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var hl=!1,Sn=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,He=null;function zs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){Yt(n,i,d)}else a.current=null}function Wu(n,i,a){try{a()}catch(d){Yt(n,i,d)}}var sm=!1;function Uv(n,i){if(iu=Da,n=Fh(),qc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var m=d.anchorOffset,S=d.focusNode;d=d.focusOffset;try{a.nodeType,S.nodeType}catch{a=null;break e}var b=0,O=-1,H=-1,ie=0,_e=0,Me=n,ve=null;t:for(;;){for(var Oe;Me!==a||m!==0&&Me.nodeType!==3||(O=b+m),Me!==S||d!==0&&Me.nodeType!==3||(H=b+d),Me.nodeType===3&&(b+=Me.nodeValue.length),(Oe=Me.firstChild)!==null;)ve=Me,Me=Oe;for(;;){if(Me===n)break t;if(ve===a&&++ie===m&&(O=b),ve===S&&++_e===d&&(H=b),(Oe=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Oe}a=O===-1||H===-1?null:{start:O,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ru={focusedElem:n,selectionRange:a},Da=!1,He=i;He!==null;)if(i=He,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,He=n;else for(;He!==null;){i=He;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Ye=Ge.memoizedProps,qt=Ge.memoizedState,Q=i.stateNode,G=Q.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:vi(i.type,Ye),qt);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Yt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,He=n;break}He=i.return}return Ge=sm,sm=!1,Ge}function ta(n,i,a){var d=i.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&n)===n){var S=m.destroy;m.destroy=void 0,S!==void 0&&Wu(i,a,S)}m=m.next}while(m!==d)}}function pl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var d=a.create;a.destroy=d()}a=a.next}while(a!==i)}}function Xu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function om(n){var i=n.alternate;i!==null&&(n.alternate=null,om(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Pi],delete i[jo],delete i[lu],delete i[xv],delete i[vv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function am(n){return n.tag===5||n.tag===3||n.tag===4}function lm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||am(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yu(n,i,a){var d=n.tag;if(d===5||d===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Wa));else if(d!==4&&(n=n.child,n!==null))for(Yu(n,i,a),n=n.sibling;n!==null;)Yu(n,i,a),n=n.sibling}function $u(n,i,a){var d=n.tag;if(d===5||d===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for($u(n,i,a),n=n.sibling;n!==null;)$u(n,i,a),n=n.sibling}var hn=null,_i=!1;function Mr(n,i,a){for(a=a.child;a!==null;)cm(n,i,a),a=a.sibling}function cm(n,i,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Dt,a)}catch{}switch(a.tag){case 5:Sn||zs(a,i);case 6:var d=hn,m=_i;hn=null,Mr(n,i,a),hn=d,_i=m,hn!==null&&(_i?(n=hn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):hn.removeChild(a.stateNode));break;case 18:hn!==null&&(_i?(n=hn,a=a.stateNode,n.nodeType===8?au(n.parentNode,a):n.nodeType===1&&au(n,a),Do(n)):au(hn,a.stateNode));break;case 4:d=hn,m=_i,hn=a.stateNode.containerInfo,_i=!0,Mr(n,i,a),hn=d,_i=m;break;case 0:case 11:case 14:case 15:if(!Sn&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var S=m,b=S.destroy;S=S.tag,b!==void 0&&((S&2)!==0||(S&4)!==0)&&Wu(a,i,b),m=m.next}while(m!==d)}Mr(n,i,a);break;case 1:if(!Sn&&(zs(a,i),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(O){Yt(a,i,O)}Mr(n,i,a);break;case 21:Mr(n,i,a);break;case 22:a.mode&1?(Sn=(d=Sn)||a.memoizedState!==null,Mr(n,i,a),Sn=d):Mr(n,i,a);break;default:Mr(n,i,a)}}function um(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Iv),i.forEach(function(d){var m=jv.bind(null,n,d);a.has(d)||(a.add(d),d.then(m,m))})}}function yi(n,i){var a=i.deletions;if(a!==null)for(var d=0;d<a.length;d++){var m=a[d];try{var S=n,b=i,O=b;e:for(;O!==null;){switch(O.tag){case 5:hn=O.stateNode,_i=!1;break e;case 3:hn=O.stateNode.containerInfo,_i=!0;break e;case 4:hn=O.stateNode.containerInfo,_i=!0;break e}O=O.return}if(hn===null)throw Error(t(160));cm(S,b,m),hn=null,_i=!1;var H=m.alternate;H!==null&&(H.return=null),m.return=null}catch(ie){Yt(m,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dm(i,n),i=i.sibling}function dm(n,i){var a=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(i,n),Di(n),d&4){try{ta(3,n,n.return),pl(3,n)}catch(Ye){Yt(n,n.return,Ye)}try{ta(5,n,n.return)}catch(Ye){Yt(n,n.return,Ye)}}break;case 1:yi(i,n),Di(n),d&512&&a!==null&&zs(a,a.return);break;case 5:if(yi(i,n),Di(n),d&512&&a!==null&&zs(a,a.return),n.flags&32){var m=n.stateNode;try{at(m,"")}catch(Ye){Yt(n,n.return,Ye)}}if(d&4&&(m=n.stateNode,m!=null)){var S=n.memoizedProps,b=a!==null?a.memoizedProps:S,O=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{O==="input"&&S.type==="radio"&&S.name!=null&&ct(m,S),ut(O,b);var ie=ut(O,S);for(b=0;b<H.length;b+=2){var _e=H[b],Me=H[b+1];_e==="style"?We(m,Me):_e==="dangerouslySetInnerHTML"?Fe(m,Me):_e==="children"?at(m,Me):C(m,_e,Me,ie)}switch(O){case"input":gt(m,S);break;case"textarea":pe(m,S);break;case"select":var ve=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!S.multiple;var Oe=S.value;Oe!=null?U(m,!!S.multiple,Oe,!1):ve!==!!S.multiple&&(S.defaultValue!=null?U(m,!!S.multiple,S.defaultValue,!0):U(m,!!S.multiple,S.multiple?[]:"",!1))}m[jo]=S}catch(Ye){Yt(n,n.return,Ye)}}break;case 6:if(yi(i,n),Di(n),d&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,S=n.memoizedProps;try{m.nodeValue=S}catch(Ye){Yt(n,n.return,Ye)}}break;case 3:if(yi(i,n),Di(n),d&4&&a!==null&&a.memoizedState.isDehydrated)try{Do(i.containerInfo)}catch(Ye){Yt(n,n.return,Ye)}break;case 4:yi(i,n),Di(n);break;case 13:yi(i,n),Di(n),m=n.child,m.flags&8192&&(S=m.memoizedState!==null,m.stateNode.isHidden=S,!S||m.alternate!==null&&m.alternate.memoizedState!==null||(Zu=Ee())),d&4&&um(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(Sn=(ie=Sn)||_e,yi(i,n),Sn=ie):yi(i,n),Di(n),d&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!_e&&(n.mode&1)!==0)for(He=n,_e=n.child;_e!==null;){for(Me=He=_e;He!==null;){switch(ve=He,Oe=ve.child,ve.tag){case 0:case 11:case 14:case 15:ta(4,ve,ve.return);break;case 1:zs(ve,ve.return);var Ge=ve.stateNode;if(typeof Ge.componentWillUnmount=="function"){d=ve,a=ve.return;try{i=d,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(Ye){Yt(d,a,Ye)}}break;case 5:zs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){pm(Me);continue}}Oe!==null?(Oe.return=ve,He=Oe):pm(Me)}_e=_e.sibling}e:for(_e=null,Me=n;;){if(Me.tag===5){if(_e===null){_e=Me;try{m=Me.stateNode,ie?(S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(O=Me.stateNode,H=Me.memoizedProps.style,b=H!=null&&H.hasOwnProperty("display")?H.display:null,O.style.display=et("display",b))}catch(Ye){Yt(n,n.return,Ye)}}}else if(Me.tag===6){if(_e===null)try{Me.stateNode.nodeValue=ie?"":Me.memoizedProps}catch(Ye){Yt(n,n.return,Ye)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;_e===Me&&(_e=null),Me=Me.return}_e===Me&&(_e=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:yi(i,n),Di(n),d&4&&um(n);break;case 21:break;default:yi(i,n),Di(n)}}function Di(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(am(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(at(m,""),d.flags&=-33);var S=lm(n);$u(n,S,m);break;case 3:case 4:var b=d.stateNode.containerInfo,O=lm(n);Yu(n,O,b);break;default:throw Error(t(161))}}catch(H){Yt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function kv(n,i,a){He=n,fm(n)}function fm(n,i,a){for(var d=(n.mode&1)!==0;He!==null;){var m=He,S=m.child;if(m.tag===22&&d){var b=m.memoizedState!==null||hl;if(!b){var O=m.alternate,H=O!==null&&O.memoizedState!==null||Sn;O=hl;var ie=Sn;if(hl=b,(Sn=H)&&!ie)for(He=m;He!==null;)b=He,H=b.child,b.tag===22&&b.memoizedState!==null?mm(m):H!==null?(H.return=b,He=H):mm(m);for(;S!==null;)He=S,fm(S),S=S.sibling;He=m,hl=O,Sn=ie}hm(n)}else(m.subtreeFlags&8772)!==0&&S!==null?(S.return=m,He=S):hm(n)}}function hm(n){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Sn||pl(5,i);break;case 1:var d=i.stateNode;if(i.flags&4&&!Sn)if(a===null)d.componentDidMount();else{var m=i.elementType===i.type?a.memoizedProps:vi(i.type,a.memoizedProps);d.componentDidUpdate(m,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var S=i.updateQueue;S!==null&&pp(i,S,d);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}pp(i,b,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var _e=ie.memoizedState;if(_e!==null){var Me=_e.dehydrated;Me!==null&&Do(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Sn||i.flags&512&&Xu(i)}catch(ve){Yt(i,i.return,ve)}}if(i===n){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function pm(n){for(;He!==null;){var i=He;if(i===n){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function mm(n){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{pl(4,i)}catch(H){Yt(i,a,H)}break;case 1:var d=i.stateNode;if(typeof d.componentDidMount=="function"){var m=i.return;try{d.componentDidMount()}catch(H){Yt(i,m,H)}}var S=i.return;try{Xu(i)}catch(H){Yt(i,S,H)}break;case 5:var b=i.return;try{Xu(i)}catch(H){Yt(i,b,H)}}}catch(H){Yt(i,i.return,H)}if(i===n){He=null;break}var O=i.sibling;if(O!==null){O.return=i.return,He=O;break}He=i.return}}var Fv=Math.ceil,ml=T.ReactCurrentDispatcher,qu=T.ReactCurrentOwner,ai=T.ReactCurrentBatchConfig,At=0,cn=null,Zt=null,pn=0,Kn=0,Bs=xr(0),nn=0,na=null,Zr=0,gl=0,Ku=0,ia=null,Bn=null,Zu=0,Vs=1/0,Xi=null,xl=!1,Qu=null,Er=null,vl=!1,wr=null,_l=0,ra=0,Ju=null,yl=-1,Sl=0;function Rn(){return(At&6)!==0?Ee():yl!==-1?yl:yl=Ee()}function Tr(n){return(n.mode&1)===0?1:(At&2)!==0&&pn!==0?pn&-pn:yv.transition!==null?(Sl===0&&(Sl=An()),Sl):(n=Ut,n!==0||(n=window.event,n=n===void 0?16:xh(n.type)),n)}function Si(n,i,a,d){if(50<ra)throw ra=0,Ju=null,Error(t(185));kn(n,a,d),((At&2)===0||n!==cn)&&(n===cn&&((At&2)===0&&(gl|=a),nn===4&&br(n,pn)),Vn(n,d),a===1&&At===0&&(i.mode&1)===0&&(Vs=Ee()+500,qa&&_r()))}function Vn(n,i){var a=n.callbackNode;ti(n,i);var d=Ri(n,n===cn?pn:0);if(d===0)a!==null&&se(a),n.callbackNode=null,n.callbackPriority=0;else if(i=d&-d,n.callbackPriority!==i){if(a!=null&&se(a),i===1)n.tag===0?_v(xm.bind(null,n)):np(xm.bind(null,n)),mv(function(){(At&6)===0&&_r()}),a=null;else{switch(ch(d)){case 1:a=Xe;break;case 4:a=st;break;case 16:a=lt;break;case 536870912:a=Tt;break;default:a=lt}a=Tm(a,gm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function gm(n,i){if(yl=-1,Sl=0,(At&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Hs()&&n.callbackNode!==a)return null;var d=Ri(n,n===cn?pn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||i)i=Ml(n,d);else{i=d;var m=At;At|=2;var S=_m();(cn!==n||pn!==i)&&(Xi=null,Vs=Ee()+500,Jr(n,i));do try{Bv();break}catch(O){vm(n,O)}while(!0);xu(),ml.current=S,At=m,Zt!==null?i=0:(cn=null,pn=0,i=nn)}if(i!==0){if(i===2&&(m=Oi(n),m!==0&&(d=m,i=ed(n,m))),i===1)throw a=na,Jr(n,0),br(n,d),Vn(n,Ee()),a;if(i===6)br(n,d);else{if(m=n.current.alternate,(d&30)===0&&!Ov(m)&&(i=Ml(n,d),i===2&&(S=Oi(n),S!==0&&(d=S,i=ed(n,S))),i===1))throw a=na,Jr(n,0),br(n,d),Vn(n,Ee()),a;switch(n.finishedWork=m,n.finishedLanes=d,i){case 0:case 1:throw Error(t(345));case 2:es(n,Bn,Xi);break;case 3:if(br(n,d),(d&130023424)===d&&(i=Zu+500-Ee(),10<i)){if(Ri(n,0)!==0)break;if(m=n.suspendedLanes,(m&d)!==d){Rn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=ou(es.bind(null,n,Bn,Xi),i);break}es(n,Bn,Xi);break;case 4:if(br(n,d),(d&4194240)===d)break;for(i=n.eventTimes,m=-1;0<d;){var b=31-ht(d);S=1<<b,b=i[b],b>m&&(m=b),d&=~S}if(d=m,d=Ee()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Fv(d/1960))-d,10<d){n.timeoutHandle=ou(es.bind(null,n,Bn,Xi),d);break}es(n,Bn,Xi);break;case 5:es(n,Bn,Xi);break;default:throw Error(t(329))}}}return Vn(n,Ee()),n.callbackNode===a?gm.bind(null,n):null}function ed(n,i){var a=ia;return n.current.memoizedState.isDehydrated&&(Jr(n,i).flags|=256),n=Ml(n,i),n!==2&&(i=Bn,Bn=a,i!==null&&td(i)),n}function td(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function Ov(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var m=a[d],S=m.getSnapshot;m=m.value;try{if(!gi(S(),m))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(n,i){for(i&=~Ku,i&=~gl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ht(i),d=1<<a;n[a]=-1,i&=~d}}function xm(n){if((At&6)!==0)throw Error(t(327));Hs();var i=Ri(n,0);if((i&1)===0)return Vn(n,Ee()),null;var a=Ml(n,i);if(n.tag!==0&&a===2){var d=Oi(n);d!==0&&(i=d,a=ed(n,d))}if(a===1)throw a=na,Jr(n,0),br(n,i),Vn(n,Ee()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,es(n,Bn,Xi),Vn(n,Ee()),null}function nd(n,i){var a=At;At|=1;try{return n(i)}finally{At=a,At===0&&(Vs=Ee()+500,qa&&_r())}}function Qr(n){wr!==null&&wr.tag===0&&(At&6)===0&&Hs();var i=At;At|=1;var a=ai.transition,d=Ut;try{if(ai.transition=null,Ut=1,n)return n()}finally{Ut=d,ai.transition=a,At=i,(At&6)===0&&_r()}}function id(){Kn=Bs.current,Gt(Bs)}function Jr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,pv(a)),Zt!==null)for(a=Zt.return;a!==null;){var d=a;switch(fu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Ya();break;case 3:Fs(),Gt(Fn),Gt(vn),Tu();break;case 5:Eu(d);break;case 4:Fs();break;case 13:Gt(Wt);break;case 19:Gt(Wt);break;case 10:vu(d.type._context);break;case 22:case 23:id()}a=a.return}if(cn=n,Zt=n=Ar(n.current,null),pn=Kn=i,nn=0,na=null,Ku=gl=Zr=0,Bn=ia=null,$r!==null){for(i=0;i<$r.length;i++)if(a=$r[i],d=a.interleaved,d!==null){a.interleaved=null;var m=d.next,S=a.pending;if(S!==null){var b=S.next;S.next=m,d.next=b}a.pending=d}$r=null}return n}function vm(n,i){do{var a=Zt;try{if(xu(),sl.current=cl,ol){for(var d=Xt.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}ol=!1}if(Kr=0,ln=tn=Xt=null,Ko=!1,Zo=0,qu.current=null,a===null||a.return===null){nn=1,na=i,Zt=null;break}e:{var S=n,b=a.return,O=a,H=i;if(i=pn,O.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ie=H,_e=O,Me=_e.tag;if((_e.mode&1)===0&&(Me===0||Me===11||Me===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Oe=Gp(b);if(Oe!==null){Oe.flags&=-257,jp(Oe,b,O,S,i),Oe.mode&1&&Hp(S,ie,i),i=Oe,H=ie;var Ge=i.updateQueue;if(Ge===null){var Ye=new Set;Ye.add(H),i.updateQueue=Ye}else Ge.add(H);break e}else{if((i&1)===0){Hp(S,ie,i),rd();break e}H=Error(t(426))}}else if(jt&&O.mode&1){var qt=Gp(b);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),jp(qt,b,O,S,i),mu(Os(H,O));break e}}S=H=Os(H,O),nn!==4&&(nn=2),ia===null?ia=[S]:ia.push(S),S=b;do{switch(S.tag){case 3:S.flags|=65536,i&=-i,S.lanes|=i;var Q=Bp(S,H,i);hp(S,Q);break e;case 1:O=H;var G=S.type,ne=S.stateNode;if((S.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Er===null||!Er.has(ne)))){S.flags|=65536,i&=-i,S.lanes|=i;var we=Vp(S,O,i);hp(S,we);break e}}S=S.return}while(S!==null)}Sm(a)}catch(Ke){i=Ke,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function _m(){var n=ml.current;return ml.current=cl,n===null?cl:n}function rd(){(nn===0||nn===3||nn===2)&&(nn=4),cn===null||(Zr&268435455)===0&&(gl&268435455)===0||br(cn,pn)}function Ml(n,i){var a=At;At|=2;var d=_m();(cn!==n||pn!==i)&&(Xi=null,Jr(n,i));do try{zv();break}catch(m){vm(n,m)}while(!0);if(xu(),At=a,ml.current=d,Zt!==null)throw Error(t(261));return cn=null,pn=0,nn}function zv(){for(;Zt!==null;)ym(Zt)}function Bv(){for(;Zt!==null&&!$();)ym(Zt)}function ym(n){var i=wm(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,i===null?Sm(n):Zt=i,qu.current=null}function Sm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Nv(a,i,Kn),a!==null){Zt=a;return}}else{if(a=Dv(a,i),a!==null){a.flags&=32767,Zt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=n}while(i!==null);nn===0&&(nn=5)}function es(n,i,a){var d=Ut,m=ai.transition;try{ai.transition=null,Ut=1,Vv(n,i,a,d)}finally{ai.transition=m,Ut=d}return null}function Vv(n,i,a,d){do Hs();while(wr!==null);if((At&6)!==0)throw Error(t(327));a=n.finishedWork;var m=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var S=a.lanes|a.childLanes;if(Pa(n,S),n===cn&&(Zt=cn=null,pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||vl||(vl=!0,Tm(lt,function(){return Hs(),null})),S=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||S){S=ai.transition,ai.transition=null;var b=Ut;Ut=1;var O=At;At|=4,qu.current=null,Uv(n,a),dm(a,n),av(ru),Da=!!iu,ru=iu=null,n.current=a,kv(a),be(),At=O,Ut=b,ai.transition=S}else n.current=a;if(vl&&(vl=!1,wr=n,_l=m),S=n.pendingLanes,S===0&&(Er=null),gn(a.stateNode),Vn(n,Ee()),i!==null)for(d=n.onRecoverableError,a=0;a<i.length;a++)m=i[a],d(m.value,{componentStack:m.stack,digest:m.digest});if(xl)throw xl=!1,n=Qu,Qu=null,n;return(_l&1)!==0&&n.tag!==0&&Hs(),S=n.pendingLanes,(S&1)!==0?n===Ju?ra++:(ra=0,Ju=n):ra=0,_r(),null}function Hs(){if(wr!==null){var n=ch(_l),i=ai.transition,a=Ut;try{if(ai.transition=null,Ut=16>n?16:n,wr===null)var d=!1;else{if(n=wr,wr=null,_l=0,(At&6)!==0)throw Error(t(331));var m=At;for(At|=4,He=n.current;He!==null;){var S=He,b=S.child;if((He.flags&16)!==0){var O=S.deletions;if(O!==null){for(var H=0;H<O.length;H++){var ie=O[H];for(He=ie;He!==null;){var _e=He;switch(_e.tag){case 0:case 11:case 15:ta(8,_e,S)}var Me=_e.child;if(Me!==null)Me.return=_e,He=Me;else for(;He!==null;){_e=He;var ve=_e.sibling,Oe=_e.return;if(om(_e),_e===ie){He=null;break}if(ve!==null){ve.return=Oe,He=ve;break}He=Oe}}}var Ge=S.alternate;if(Ge!==null){var Ye=Ge.child;if(Ye!==null){Ge.child=null;do{var qt=Ye.sibling;Ye.sibling=null,Ye=qt}while(Ye!==null)}}He=S}}if((S.subtreeFlags&2064)!==0&&b!==null)b.return=S,He=b;else e:for(;He!==null;){if(S=He,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:ta(9,S,S.return)}var Q=S.sibling;if(Q!==null){Q.return=S.return,He=Q;break e}He=S.return}}var G=n.current;for(He=G;He!==null;){b=He;var ne=b.child;if((b.subtreeFlags&2064)!==0&&ne!==null)ne.return=b,He=ne;else e:for(b=G;He!==null;){if(O=He,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:pl(9,O)}}catch(Ke){Yt(O,O.return,Ke)}if(O===b){He=null;break e}var we=O.sibling;if(we!==null){we.return=O.return,He=we;break e}He=O.return}}if(At=m,_r(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Dt,n)}catch{}d=!0}return d}finally{Ut=a,ai.transition=i}}return!1}function Mm(n,i,a){i=Os(a,i),i=Bp(n,i,1),n=Sr(n,i,1),i=Rn(),n!==null&&(kn(n,1,i),Vn(n,i))}function Yt(n,i,a){if(n.tag===3)Mm(n,n,a);else for(;i!==null;){if(i.tag===3){Mm(i,n,a);break}else if(i.tag===1){var d=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Er===null||!Er.has(d))){n=Os(a,n),n=Vp(i,n,1),i=Sr(i,n,1),n=Rn(),i!==null&&(kn(i,1,n),Vn(i,n));break}}i=i.return}}function Hv(n,i,a){var d=n.pingCache;d!==null&&d.delete(i),i=Rn(),n.pingedLanes|=n.suspendedLanes&a,cn===n&&(pn&a)===a&&(nn===4||nn===3&&(pn&130023424)===pn&&500>Ee()-Zu?Jr(n,0):Ku|=a),Vn(n,i)}function Em(n,i){i===0&&((n.mode&1)===0?i=1:(i=mi,mi<<=1,(mi&130023424)===0&&(mi=4194304)));var a=Rn();n=Gi(n,i),n!==null&&(kn(n,i,a),Vn(n,a))}function Gv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Em(n,a)}function jv(n,i){var a=0;switch(n.tag){case 13:var d=n.stateNode,m=n.memoizedState;m!==null&&(a=m.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(i),Em(n,a)}var wm;wm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Fn.current)zn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return zn=!1,Lv(n,i,a);zn=(n.flags&131072)!==0}else zn=!1,jt&&(i.flags&1048576)!==0&&ip(i,Za,i.index);switch(i.lanes=0,i.tag){case 2:var d=i.type;fl(n,i),n=i.pendingProps;var m=Ps(i,vn.current);ks(i,a),m=Cu(null,i,d,n,m,a);var S=Ru();return i.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,On(d)?(S=!0,$a(i)):S=!1,i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Su(i),m.updater=ul,i.stateNode=m,m._reactInternals=i,Uu(i,d,n,a),i=zu(null,i,d,!0,S,a)):(i.tag=0,jt&&S&&du(i),Cn(null,i,m,a),i=i.child),i;case 16:d=i.elementType;e:{switch(fl(n,i),n=i.pendingProps,m=d._init,d=m(d._payload),i.type=d,m=i.tag=Xv(d),n=vi(d,n),m){case 0:i=Ou(null,i,d,n,a);break e;case 1:i=Kp(null,i,d,n,a);break e;case 11:i=Wp(null,i,d,n,a);break e;case 14:i=Xp(null,i,d,vi(d.type,n),a);break e}throw Error(t(306,d,""))}return i;case 0:return d=i.type,m=i.pendingProps,m=i.elementType===d?m:vi(d,m),Ou(n,i,d,m,a);case 1:return d=i.type,m=i.pendingProps,m=i.elementType===d?m:vi(d,m),Kp(n,i,d,m,a);case 3:e:{if(Zp(i),n===null)throw Error(t(387));d=i.pendingProps,S=i.memoizedState,m=S.element,fp(n,i),il(i,d,null,a);var b=i.memoizedState;if(d=b.element,S.isDehydrated)if(S={element:d,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=S,i.memoizedState=S,i.flags&256){m=Os(Error(t(423)),i),i=Qp(n,i,d,a,m);break e}else if(d!==m){m=Os(Error(t(424)),i),i=Qp(n,i,d,a,m);break e}else for(qn=gr(i.stateNode.containerInfo.firstChild),$n=i,jt=!0,xi=null,a=up(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ds(),d===m){i=Wi(n,i,a);break e}Cn(n,i,d,a)}i=i.child}return i;case 5:return mp(i),n===null&&pu(i),d=i.type,m=i.pendingProps,S=n!==null?n.memoizedProps:null,b=m.children,su(d,m)?b=null:S!==null&&su(d,S)&&(i.flags|=32),qp(n,i),Cn(n,i,b,a),i.child;case 6:return n===null&&pu(i),null;case 13:return Jp(n,i,a);case 4:return Mu(i,i.stateNode.containerInfo),d=i.pendingProps,n===null?i.child=Is(i,null,d,a):Cn(n,i,d,a),i.child;case 11:return d=i.type,m=i.pendingProps,m=i.elementType===d?m:vi(d,m),Wp(n,i,d,m,a);case 7:return Cn(n,i,i.pendingProps,a),i.child;case 8:return Cn(n,i,i.pendingProps.children,a),i.child;case 12:return Cn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(d=i.type._context,m=i.pendingProps,S=i.memoizedProps,b=m.value,zt(el,d._currentValue),d._currentValue=b,S!==null)if(gi(S.value,b)){if(S.children===m.children&&!Fn.current){i=Wi(n,i,a);break e}}else for(S=i.child,S!==null&&(S.return=i);S!==null;){var O=S.dependencies;if(O!==null){b=S.child;for(var H=O.firstContext;H!==null;){if(H.context===d){if(S.tag===1){H=ji(-1,a&-a),H.tag=2;var ie=S.updateQueue;if(ie!==null){ie=ie.shared;var _e=ie.pending;_e===null?H.next=H:(H.next=_e.next,_e.next=H),ie.pending=H}}S.lanes|=a,H=S.alternate,H!==null&&(H.lanes|=a),_u(S.return,a,i),O.lanes|=a;break}H=H.next}}else if(S.tag===10)b=S.type===i.type?null:S.child;else if(S.tag===18){if(b=S.return,b===null)throw Error(t(341));b.lanes|=a,O=b.alternate,O!==null&&(O.lanes|=a),_u(b,a,i),b=S.sibling}else b=S.child;if(b!==null)b.return=S;else for(b=S;b!==null;){if(b===i){b=null;break}if(S=b.sibling,S!==null){S.return=b.return,b=S;break}b=b.return}S=b}Cn(n,i,m.children,a),i=i.child}return i;case 9:return m=i.type,d=i.pendingProps.children,ks(i,a),m=si(m),d=d(m),i.flags|=1,Cn(n,i,d,a),i.child;case 14:return d=i.type,m=vi(d,i.pendingProps),m=vi(d.type,m),Xp(n,i,d,m,a);case 15:return Yp(n,i,i.type,i.pendingProps,a);case 17:return d=i.type,m=i.pendingProps,m=i.elementType===d?m:vi(d,m),fl(n,i),i.tag=1,On(d)?(n=!0,$a(i)):n=!1,ks(i,a),Op(i,d,m),Uu(i,d,m,a),zu(null,i,d,!0,n,a);case 19:return tm(n,i,a);case 22:return $p(n,i,a)}throw Error(t(156,i.tag))};function Tm(n,i){return re(n,i)}function Wv(n,i,a,d){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,i,a,d){return new Wv(n,i,a,d)}function sd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Xv(n){if(typeof n=="function")return sd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===K)return 11;if(n===le)return 14}return 2}function Ar(n,i){var a=n.alternate;return a===null?(a=li(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function El(n,i,a,d,m,S){var b=2;if(d=n,typeof n=="function")sd(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case D:return ts(a.children,m,S,i);case z:b=8,m|=8;break;case I:return n=li(12,a,i,m|2),n.elementType=I,n.lanes=S,n;case W:return n=li(13,a,i,m),n.elementType=W,n.lanes=S,n;case ae:return n=li(19,a,i,m),n.elementType=ae,n.lanes=S,n;case oe:return wl(a,m,S,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:b=10;break e;case B:b=9;break e;case K:b=11;break e;case le:b=14;break e;case de:b=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=li(b,a,i,m),i.elementType=n,i.type=d,i.lanes=S,i}function ts(n,i,a,d){return n=li(7,n,d,i),n.lanes=a,n}function wl(n,i,a,d){return n=li(22,n,d,i),n.elementType=oe,n.lanes=a,n.stateNode={isHidden:!1},n}function od(n,i,a){return n=li(6,n,null,i),n.lanes=a,n}function ad(n,i,a){return i=li(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Yv(n,i,a,d,m){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function ld(n,i,a,d,m,S,b,O,H){return n=new Yv(n,i,a,O,H),i===1?(i=1,S===!0&&(i|=8)):i=0,S=li(3,null,null,i),n.current=S,S.stateNode=n,S.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(S),n}function $v(n,i,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:d==null?null:""+d,children:n,containerInfo:i,implementation:a}}function bm(n){if(!n)return vr;n=n._reactInternals;e:{if(Ci(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(On(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(On(a))return ep(n,a,i)}return i}function Am(n,i,a,d,m,S,b,O,H){return n=ld(a,d,!0,n,m,S,b,O,H),n.context=bm(null),a=n.current,d=Rn(),m=Tr(a),S=ji(d,m),S.callback=i??null,Sr(a,S,m),n.current.lanes=m,kn(n,m,d),Vn(n,d),n}function Tl(n,i,a,d){var m=i.current,S=Rn(),b=Tr(m);return a=bm(a),i.context===null?i.context=a:i.pendingContext=a,i=ji(S,b),i.payload={element:n},d=d===void 0?null:d,d!==null&&(i.callback=d),n=Sr(m,i,b),n!==null&&(Si(n,m,b,S),nl(n,m,b)),b}function bl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function cd(n,i){Cm(n,i),(n=n.alternate)&&Cm(n,i)}function qv(){return null}var Rm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ud(n){this._internalRoot=n}Al.prototype.render=ud.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Tl(n,i,null,null)},Al.prototype.unmount=ud.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Qr(function(){Tl(null,n,null,null)}),i[zi]=null}};function Al(n){this._internalRoot=n}Al.prototype.unstable_scheduleHydration=function(n){if(n){var i=fh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<hr.length&&i!==0&&i<hr[a].priority;a++);hr.splice(a,0,n),a===0&&mh(n)}};function dd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function Kv(n,i,a,d,m){if(m){if(typeof d=="function"){var S=d;d=function(){var ie=bl(b);S.call(ie)}}var b=Am(i,d,n,0,null,!1,!1,"",Pm);return n._reactRootContainer=b,n[zi]=b.current,Ho(n.nodeType===8?n.parentNode:n),Qr(),b}for(;m=n.lastChild;)n.removeChild(m);if(typeof d=="function"){var O=d;d=function(){var ie=bl(H);O.call(ie)}}var H=ld(n,0,!1,null,null,!1,!1,"",Pm);return n._reactRootContainer=H,n[zi]=H.current,Ho(n.nodeType===8?n.parentNode:n),Qr(function(){Tl(i,H,a,d)}),H}function Rl(n,i,a,d,m){var S=a._reactRootContainer;if(S){var b=S;if(typeof m=="function"){var O=m;m=function(){var H=bl(b);O.call(H)}}Tl(i,b,n,m)}else b=Kv(a,i,n,m,d);return bl(b)}uh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=en(i.pendingLanes);a!==0&&(Uc(i,a|1),Vn(i,Ee()),(At&6)===0&&(Vs=Ee()+500,_r()))}break;case 13:Qr(function(){var d=Gi(n,1);if(d!==null){var m=Rn();Si(d,n,1,m)}}),cd(n,1)}},kc=function(n){if(n.tag===13){var i=Gi(n,134217728);if(i!==null){var a=Rn();Si(i,n,134217728,a)}cd(n,134217728)}},dh=function(n){if(n.tag===13){var i=Tr(n),a=Gi(n,i);if(a!==null){var d=Rn();Si(a,n,i,d)}cd(n,i)}},fh=function(){return Ut},hh=function(n,i){var a=Ut;try{return Ut=n,i()}finally{Ut=a}},Pe=function(n,i,a){switch(i){case"input":if(gt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var d=a[i];if(d!==n&&d.form===n.form){var m=Xa(d);if(!m)throw Error(t(90));mt(d),gt(d,m)}}}break;case"textarea":pe(n,a);break;case"select":i=a.value,i!=null&&U(n,!!a.multiple,i,!1)}},Vt=nd,Jt=Qr;var Zv={usingClientEntryPoint:!1,Events:[Wo,Cs,Xa,De,dt,nd]},sa={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qv={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=N(n),n===null?null:n.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||qv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{Dt=Pl.inject(Qv),wt=Pl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv,Hn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(i))throw Error(t(200));return $v(n,i,null,a)},Hn.createRoot=function(n,i){if(!dd(n))throw Error(t(299));var a=!1,d="",m=Rm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),i=ld(n,1,!1,null,null,a,!1,d,m),n[zi]=i.current,Ho(n.nodeType===8?n.parentNode:n),new ud(i)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=N(i),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return Qr(n)},Hn.hydrate=function(n,i,a){if(!Cl(i))throw Error(t(200));return Rl(null,n,i,!0,a)},Hn.hydrateRoot=function(n,i,a){if(!dd(n))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,m=!1,S="",b=Rm;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(S=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=Am(i,null,n,1,a??null,m,!1,S,b),n[zi]=i.current,Ho(n),d)for(n=0;n<d.length;n++)a=d[n],m=a._getVersion,m=m(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,m]:i.mutableSourceEagerHydrationData.push(a,m);return new Al(i)},Hn.render=function(n,i,a){if(!Cl(i))throw Error(t(200));return Rl(null,n,i,!1,a)},Hn.unmountComponentAtNode=function(n){if(!Cl(n))throw Error(t(40));return n._reactRootContainer?(Qr(function(){Rl(null,null,n,!1,function(){n._reactRootContainer=null,n[zi]=null})}),!0):!1},Hn.unstable_batchedUpdates=nd,Hn.unstable_renderSubtreeIntoContainer=function(n,i,a,d){if(!Cl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Rl(n,i,a,!1,d)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var Om;function o_(){if(Om)return pd.exports;Om=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),pd.exports=s_(),pd.exports}var zm;function a_(){if(zm)return Ll;zm=1;var s=o_();return Ll.createRoot=s.createRoot,Ll.hydrateRoot=s.hydrateRoot,Ll}var l_=a_();const c_=v0(l_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=s=>{const e=d_(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=Re.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:c,...u},f)=>Re.createElement("svg",{ref:f,...f_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:_0("lucide",o),...!l&&!h_(u)&&{"aria-hidden":"true"},...u},[...c.map(([h,p])=>Re.createElement(h,p)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(s,e)=>{const t=Re.forwardRef(({className:r,...o},l)=>Re.createElement(p_,{ref:l,iconNode:e,className:_0(`lucide-${u_(Bm(s))}`,`lucide-${s}`,r),...o}));return t.displayName=Bm(s),t};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],g_=St("aperture",m_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],v_=St("arrow-right",x_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],hs=St("box",__);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],S_=St("chevron-down",y_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],E_=St("chevron-right",M_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],T_=St("chevron-up",w_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],y0=St("columns-2",b_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],S0=St("download",A_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],R_=St("eraser",C_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],L_=St("eye-off",P_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],D_=St("eye",N_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]],M0=St("frame",I_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],k_=St("grid-3x3",U_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],O_=St("image-plus",F_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],oc=St("image",z_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],E0=St("layers",B_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],H_=St("layout-template",V_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],w0=St("monitor",G_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],W_=St("moon",j_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]],Y_=St("paint-bucket",X_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]],q_=St("panel-bottom",$_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],Z_=St("panel-left",K_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]],J_=St("panel-right",Q_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]],ty=St("panel-top",ey);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],T0=St("pencil",ny);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ry=St("plus",iy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],oy=St("redo-2",sy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ly=St("rotate-ccw",ay);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],uy=St("rotate-cw",cy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],fy=St("settings-2",dy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],ac=St("sliders-horizontal",hy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]],my=St("snowflake",py);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],b0=St("square",gy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],A0=St("sun",xy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],C0=St("trash-2",vy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],yy=St("undo-2",_y);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],My=St("upload",Sy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vo=St("x",Ey);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ty=St("zap",wy),Vm=s=>{let e;const t=new Set,r=(h,p)=>{const g=typeof h=="function"?h(e):h;if(!Object.is(g,e)){const x=e;e=p??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(v=>v(e,x))}},o=()=>e,u={setState:r,getState:o,getInitialState:()=>f,subscribe:h=>(t.add(h),()=>t.delete(h))},f=e=s(r,o,u);return u},by=(s=>s?Vm(s):Vm),Ay=s=>s;function Cy(s,e=Ay){const t=ha.useSyncExternalStore(s.subscribe,ha.useCallback(()=>e(s.getState()),[s,e]),ha.useCallback(()=>e(s.getInitialState()),[s,e]));return ha.useDebugValue(t),t}const Hm=s=>{const e=by(s),t=r=>Cy(e,r);return Object.assign(t,e),t},Ry=(s=>s?Hm(s):Hm),Py=["#000000","#ffffff","#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff","#ff8800","#8800ff","#00ff88","#ff0088","#884400","#004488","#448800","#888888","#444444","#cccccc","#662200","#002266"],R0=32,P0=32,L0=5;function va(s,e,t){return Array.from({length:e},()=>Array.from({length:s},()=>Array(t).fill("transparent")))}let xd=0;function N0(s,e,t,r){return xd++,{id:`layer-${xd}`,name:`Layer ${xd}`,visible:!0,voxels:va(s,e,t)}}function vd(s){return s.map(e=>({...e,voxels:e.voxels.map(t=>t.map(r=>[...r]))}))}function rr(s,e,t,r){var l,c;const o=va(e,t,r);for(const u of s)if(u.visible)for(let f=0;f<t;f++)for(let h=0;h<e;h++)for(let p=0;p<r;p++){const g=(c=(l=u.voxels[f])==null?void 0:l[h])==null?void 0:c[p];g&&g!=="transparent"&&(o[f][h][p]=g)}return o}function Gf(s,e,t,r){return s==="top"||s==="bottom"?{w:e,h:r}:s==="left"||s==="right"?{w:r,h:t}:{w:e,h:t}}function D0(s,e,t,r,o){switch(e){case"front":return Array.from({length:r},(l,c)=>Array.from({length:t},(u,f)=>{var h,p;for(let g=0;g<o;g++){const x=(p=(h=s[c])==null?void 0:h[f])==null?void 0:p[g];if(x&&x!=="transparent")return x}return"transparent"}));case"back":return Array.from({length:r},(l,c)=>Array.from({length:t},(u,f)=>{var p,g;const h=t-1-f;for(let x=o-1;x>=0;x--){const v=(g=(p=s[c])==null?void 0:p[h])==null?void 0:g[x];if(v&&v!=="transparent")return v}return"transparent"}));case"left":return Array.from({length:r},(l,c)=>Array.from({length:o},(u,f)=>{var h,p;for(let g=0;g<t;g++){const x=(p=(h=s[c])==null?void 0:h[g])==null?void 0:p[f];if(x&&x!=="transparent")return x}return"transparent"}));case"right":return Array.from({length:r},(l,c)=>Array.from({length:o},(u,f)=>{var p,g;const h=o-1-f;for(let x=t-1;x>=0;x--){const v=(g=(p=s[c])==null?void 0:p[x])==null?void 0:g[h];if(v&&v!=="transparent")return v}return"transparent"}));case"top":return Array.from({length:o},(l,c)=>Array.from({length:t},(u,f)=>{var h,p;for(let g=0;g<r;g++){const x=(p=(h=s[g])==null?void 0:h[f])==null?void 0:p[c];if(x&&x!=="transparent")return x}return"transparent"}));case"bottom":return Array.from({length:o},(l,c)=>Array.from({length:t},(u,f)=>{var h,p;for(let g=r-1;g>=0;g--){const x=(p=(h=s[g])==null?void 0:h[f])==null?void 0:p[c];if(x&&x!=="transparent")return x}return"transparent"}));default:return[]}}function Ly(s,e,t,r,o){const l=Math.floor(o/2);switch(e){case"front":return Array.from({length:r},(c,u)=>Array.from({length:t},(f,h)=>{var p,g;for(let x=0;x<o;x++)if((g=(p=s[u])==null?void 0:p[h])!=null&&g[x]&&s[u][h][x]!=="transparent")return x-l;return null}));case"back":return Array.from({length:r},(c,u)=>Array.from({length:t},(f,h)=>{var g,x;const p=t-1-h;for(let v=o-1;v>=0;v--)if((x=(g=s[u])==null?void 0:g[p])!=null&&x[v]&&s[u][p][v]!=="transparent")return v-l;return null}));case"left":return Array.from({length:r},(c,u)=>Array.from({length:o},(f,h)=>{var p,g;for(let x=0;x<t;x++)if((g=(p=s[u])==null?void 0:p[x])!=null&&g[h]&&s[u][x][h]!=="transparent")return x;return null}));case"right":return Array.from({length:r},(c,u)=>Array.from({length:o},(f,h)=>{var g,x;const p=o-1-h;for(let v=t-1;v>=0;v--)if((x=(g=s[u])==null?void 0:g[v])!=null&&x[p]&&s[u][v][p]!=="transparent")return t-1-v;return null}));case"top":return Array.from({length:o},(c,u)=>Array.from({length:t},(f,h)=>{var p,g;for(let x=0;x<r;x++)if((g=(p=s[x])==null?void 0:p[h])!=null&&g[u]&&s[x][h][u]!=="transparent")return x;return null}));case"bottom":return Array.from({length:o},(c,u)=>Array.from({length:t},(f,h)=>{var p,g;for(let x=r-1;x>=0;x--)if((g=(p=s[x])==null?void 0:p[h])!=null&&g[u]&&s[x][h][u]!=="transparent")return r-1-x;return null}));default:return[]}}function Gm(s,e,t,r,o,l,c,u="both"){const f=[];switch(t){case"front":{const h=Math.floor(c/2),p=r-1,g=u==="back"?h:h-p,x=u==="front"?h:h+p;for(let v=Math.max(0,g);v<=Math.min(c-1,x);v++)f.push({x:s,y:e,z:v});break}case"back":{const h=Math.floor(c/2),p=r-1,g=u==="front"?h:h-p,x=u==="back"?h:h+p;for(let v=Math.max(0,g);v<=Math.min(c-1,x);v++)f.push({x:o-1-s,y:e,z:v});break}case"left":for(let h=0;h<r;h++)f.push({x:h,y:e,z:s});break;case"right":for(let h=0;h<r;h++)f.push({x:o-1-h,y:e,z:c-1-s});break;case"top":for(let h=0;h<r;h++)f.push({x:s,y:h,z:e});break;case"bottom":for(let h=0;h<r;h++)f.push({x:s,y:l-1-h,z:e});break}return f.filter(({x:h,y:p,z:g})=>h>=0&&h<o&&p>=0&&p<l&&g>=0&&g<c)}function jm(s,e,t,r,o,l,c,u){const f=[],h=(p,g,x)=>{var M,w;const v=(w=(M=s[g])==null?void 0:M[p])==null?void 0:w[x];return v&&v!=="transparent"&&f.push({x:p,y:g,z:x}),f.length>=o};if(r==="back"){const p=l-1-e;for(let g=u-1;g>=0&&!h(p,t,g);g--);}else if(r==="left")for(let p=0;p<l&&!h(p,t,e);p++);else if(r==="right"){const p=u-1-e;for(let g=l-1;g>=0&&!h(g,t,p);g--);}else if(r==="top")for(let p=0;p<c&&!h(e,p,t);p++);else if(r==="bottom")for(let p=c-1;p>=0&&!h(e,p,t);p--);return f}const Wm=N0(R0,P0,L0),rt=Ry((s,e)=>({canvasWidth:R0,canvasHeight:P0,depthDimension:L0,layers:[Wm],activeLayerId:Wm.id,pixelSize:14,showGrid:!0,currentColor:"#c8860a",activeTool:"pencil",palette:Py,undoStack:[],redoStack:[],pushUndo(){const{layers:t,undoStack:r}=e();s({undoStack:[...r.slice(-49),vd(t)],redoStack:[]})},paintAt(t,r,o){const{layers:l,activeLayerId:c,canvasWidth:u,canvasHeight:f,depthDimension:h,activeView:p,paintDepth:g,paintDirection:x}=e(),v=l.findIndex(_=>_.id===c);if(v<0)return;const M=l[v].voxels,w=_=>{if(!_.length)return!1;const y=new Set(_.map(T=>T.y)),A=[...M];for(const T of y)A[T]=M[T].map(k=>[...k]);for(const{x:T,y:k,z:L}of _)A[k][T][L]=o;const C=[...l];return C[v]={...l[v],voxels:A},s({layers:C}),!0};if(p!=="front"&&p!=="back"){const _=jm(M,t,r,p,1,u,f,h);w(_);return}w(Gm(t,r,p,g,u,f,h,x))},floodFillVoxel(t,r,o){var P,B;const{layers:l,activeLayerId:c,canvasWidth:u,canvasHeight:f,depthDimension:h,activeView:p,paintDepth:g,paintDirection:x}=e(),v=l.findIndex(K=>K.id===c);if(v<0)return;const M=l[v].voxels,w=D0(M,p,u,f,h),{w:_,h:y}=Gf(p,u,f,h),A=(P=w[r])==null?void 0:P[t];if(!A||A===o)return;e().pushUndo();const C=new Set,T=[[t,r]],k=[];for(;T.length;){const[K,W]=T.pop();if(K<0||W<0||K>=_||W>=y)continue;const ae=`${K},${W}`;C.has(ae)||(C.add(ae),((B=w[W])==null?void 0:B[K])===A&&(k.push([K,W]),T.push([K+1,W],[K-1,W],[K,W+1],[K,W-1])))}const L=k.flatMap(([K,W])=>p==="front"||p==="back"?Gm(K,W,p,g,u,f,h,x):jm(M,K,W,p,1,u,f,h));if(!L.length)return;const D=new Set(L.map(K=>K.y)),z=M.map((K,W)=>D.has(W)?K.map(ae=>[...ae]):K);for(const{x:K,y:W,z:ae}of L)z[W][K][ae]=o;const I=[...l];I[v]={...l[v],voxels:z},s({layers:I})},setCurrentColor:t=>s({currentColor:t}),setActiveTool:t=>s({activeTool:t}),setPixelSize:t=>s({pixelSize:Math.max(4,Math.min(32,t))}),toggleGrid:()=>s(t=>({showGrid:!t.showGrid})),clearCanvas(){const{layers:t,activeLayerId:r,canvasWidth:o,canvasHeight:l,depthDimension:c}=e();e().pushUndo();const u=t.map(f=>f.id===r?{...f,voxels:va(o,l,c)}:f);s({layers:u})},resizeCanvas(t,r){t=Math.max(4,Math.min(256,Math.round(t))),r=Math.max(4,Math.min(256,Math.round(r)));const{layers:o,canvasWidth:l,canvasHeight:c,depthDimension:u}=e();e().pushUndo();const f=t>l?Math.floor((t-l)/2):0,h=r>c?Math.floor((r-c)/2):0,p=o.map(g=>{const x=va(t,r,u);for(let v=0;v<c;v++)for(let M=0;M<l;M++)for(let w=0;w<u;w++){const _=v+h,y=M+f;_>=0&&_<r&&y>=0&&y<t&&(x[_][y][w]=g.voxels[v][M][w])}return{...g,voxels:x}});s({canvasWidth:t,canvasHeight:r,layers:p})},setDepthDimension(t){t=Math.max(4,Math.min(256,Math.round(t)));const{layers:r,canvasWidth:o,canvasHeight:l,depthDimension:c,paintDepth:u}=e();e().pushUndo();const f=t>c?Math.floor((t-c)/2):0,h=r.map(p=>{const g=va(o,l,t);for(let x=0;x<l;x++)for(let v=0;v<o;v++)for(let M=0;M<c;M++){const w=M+f;w>=0&&w<t&&(g[x][v][w]=p.voxels[x][v][M])}return{...p,voxels:g}});s({depthDimension:t,layers:h,paintDepth:Math.min(u,t)})},undo(){const{undoStack:t,layers:r,redoStack:o}=e();if(!t.length)return;const l=t[t.length-1];s({layers:l,undoStack:t.slice(0,-1),redoStack:[...o.slice(-49),vd(r)]})},redo(){const{redoStack:t,layers:r,undoStack:o}=e();if(!t.length)return;const l=t[t.length-1];s({layers:l,redoStack:t.slice(0,-1),undoStack:[...o.slice(-49),vd(r)]})},addToPalette(t){const{palette:r}=e();r.includes(t)||s({palette:[...r,t]})},paintVoxelDirect(t,r,o,l){const{layers:c,activeLayerId:u,canvasWidth:f,canvasHeight:h,depthDimension:p}=e();if(t<0||t>=f||r<0||r>=h||o<0||o>=p)return;const g=c.findIndex(w=>w.id===u);if(g<0)return;const x=c[g],v=x.voxels.map((w,_)=>_!==r?w:w.map((y,A)=>{if(A!==t)return y;const C=[...y];return C[o]=l,C})),M=[...c];M[g]={...x,voxels:v},s({layers:M})},addLayer(){const{layers:t,canvasWidth:r,canvasHeight:o,depthDimension:l}=e(),c=N0(r,o,l);s({layers:[...t,c],activeLayerId:c.id})},deleteLayer(t){var u;const{layers:r,activeLayerId:o}=e();if(r.length<=1)return;const l=r.filter(f=>f.id!==t),c=t===o?((u=l[l.length-1])==null?void 0:u.id)??l[0].id:o;s({layers:l,activeLayerId:c})},setActiveLayer:t=>s({activeLayerId:t}),toggleLayerVisible(t){const{layers:r}=e();s({layers:r.map(o=>o.id===t?{...o,visible:!o.visible}:o)})},renameLayer(t,r){const{layers:o}=e();s({layers:o.map(l=>l.id===t?{...l,name:r.trim()||l.name}:l)})},moveLayerUp(t){const{layers:r}=e(),o=r.findIndex(c=>c.id===t);if(o>=r.length-1)return;const l=[...r];[l[o],l[o+1]]=[l[o+1],l[o]],s({layers:l})},moveLayerDown(t){const{layers:r}=e(),o=r.findIndex(c=>c.id===t);if(o<=0)return;const l=[...r];[l[o],l[o-1]]=[l[o-1],l[o]],s({layers:l})},activeView:"front",paintDepth:1,paintDirection:"both",setActiveView:t=>s({activeView:t}),setPaintDepth:t=>s(r=>({paintDepth:Math.max(1,Math.min(r.depthDimension,Math.round(t)))})),setPaintDirection:t=>s({paintDirection:t}),referenceImage:null,setReferenceImage:t=>s({referenceImage:t}),clearReferenceImage:()=>s({referenceImage:null}),viewMode:"split",activeTheme:"synthwave",showDepthText:!0,setViewMode:t=>s({viewMode:t}),setActiveTheme:t=>s({activeTheme:t}),setShowDepthText:t=>s({showDepthText:t})}));function Ny(){return E.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none",style:{zIndex:0},children:[E.jsx("div",{className:"absolute inset-0",style:{background:`
          radial-gradient(ellipse at 15% 50%, rgba(120,80,20,0.15) 0%, transparent 45%),
          radial-gradient(ellipse at 85% 50%, rgba(100,60,10,0.12) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 100%, rgba(80,50,10,0.2) 0%, transparent 40%)
        `}}),E.jsxs("svg",{className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[E.jsxs("defs",{children:[E.jsxs("radialGradient",{id:"gearFill",cx:"50%",cy:"50%",children:[E.jsx("stop",{offset:"0%",stopColor:"#4a3010",stopOpacity:"0.6"}),E.jsx("stop",{offset:"100%",stopColor:"#1a0e00",stopOpacity:"0.3"})]}),E.jsx("pattern",{id:"hexTile",width:"44",height:"50",patternUnits:"userSpaceOnUse",children:E.jsx("path",{d:"M22 2 L42 13 L42 37 L22 48 L2 37 L2 13 Z",fill:"none",stroke:"rgba(122,92,46,0.06)",strokeWidth:"1"})}),E.jsxs("pattern",{id:"rivetPattern",width:"80",height:"80",patternUnits:"userSpaceOnUse",children:[E.jsx("circle",{cx:"4",cy:"4",r:"2.5",fill:"none",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.5"}),E.jsx("circle",{cx:"4",cy:"4",r:"1",fill:"rgba(200,134,10,0.2)"}),E.jsx("circle",{cx:"76",cy:"76",r:"2.5",fill:"none",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.5"}),E.jsx("circle",{cx:"76",cy:"76",r:"1",fill:"rgba(200,134,10,0.2)"})]})]}),E.jsx("rect",{width:"100%",height:"100%",fill:"url(#hexTile)"}),E.jsx("rect",{width:"100%",height:"100%",fill:"url(#rivetPattern)"}),E.jsx("g",{opacity:"0.18",children:E.jsx(jf,{cx:70,cy:220,outerR:160,innerR:124,teeth:28,holeR:52})}),E.jsx("g",{opacity:"0.15",children:E.jsx(Dy,{cx:-90,cy:180,outerR:180,innerR:140,teeth:32,holeR:60})}),E.jsx("g",{opacity:"0.12",children:E.jsx(Iy,{cx:0,cy:-60,outerR:120,innerR:92,teeth:20,holeR:38})}),E.jsx("g",{opacity:"0.35",children:E.jsx(Xm,{y:52,segments:[0,100,200,320,480,640,760],width:"100%"})}),E.jsx("g",{opacity:"0.25",children:E.jsx(Xm,{y:-28,fromBottom:!0,segments:[80,200,380,540,700],width:"100%"})}),E.jsx("rect",{x:"5",y:"0",width:"4",height:"100%",fill:"rgba(122,92,46,0.15)",rx:"2"}),E.jsx("rect",{x:"3",y:"0",width:"1",height:"100%",fill:"rgba(200,134,10,0.1)"}),E.jsx("rect",{x:"calc(100% - 9px)",y:"0",width:"4",height:"100%",fill:"rgba(122,92,46,0.12)",rx:"2"})]}),E.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 opacity-30",style:{left:"-40px"},children:E.jsx(Gs,{size:180,teeth:20,className:"gear-spin-slow",stroke:"#c8860a",strokeWidth:2})}),E.jsx("div",{className:"absolute right-0 top-1/3 opacity-22",style:{right:"-50px"},children:E.jsx(Gs,{size:200,teeth:24,className:"gear-spin-reverse",stroke:"#7a5c2e",strokeWidth:1.5})}),E.jsxs("div",{className:"absolute bottom-8 right-4 flex items-end gap-0 opacity-40",children:[E.jsx(Gs,{size:60,teeth:12,className:"gear-spin",stroke:"#c8860a",strokeWidth:1.5}),E.jsx(Gs,{size:40,teeth:8,className:"gear-spin-reverse",stroke:"#8a5c08",strokeWidth:1.5,style:{marginLeft:"-8px",marginBottom:"10px"}}),E.jsx(Gs,{size:28,teeth:6,className:"gear-spin-slow",stroke:"#c8860a",strokeWidth:1,style:{marginLeft:"-6px",marginBottom:"6px"}})]}),E.jsx("div",{className:"absolute top-6 left-4 opacity-35",children:E.jsx(Gs,{size:48,teeth:10,className:"gear-spin-reverse",stroke:"#c8860a",strokeWidth:1.5})}),E.jsx(Uy,{}),E.jsx("div",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none",style:{fontFamily:"'Special Elite', serif",color:"rgba(200,134,10,0.12)",fontSize:"11px",letterSpacing:"0.5em",textTransform:"uppercase"},children:"Picell 3D Engine"})]})}function Gs({size:s,teeth:e,className:t,stroke:r,strokeWidth:o=1.5,style:l}){const c=s/2-6,u=c*.78,f=I0(s/2,s/2,c,u,e,.4);return E.jsxs("svg",{width:s,height:s,className:t,style:l,children:[E.jsx("path",{d:f,fill:"none",stroke:r,strokeWidth:o}),E.jsx("circle",{cx:s/2,cy:s/2,r:c*.38,fill:"none",stroke:r,strokeWidth:o*.8}),[0,60,120,180,240,300].slice(0,Math.min(6,Math.floor(e/4))).map((h,p)=>{const g=h*Math.PI/180,x=s/2+Math.cos(g)*c*.38,v=s/2+Math.sin(g)*c*.38,M=s/2+Math.cos(g)*c*.68,w=s/2+Math.sin(g)*c*.68;return E.jsx("line",{x1:x,y1:v,x2:M,y2:w,stroke:r,strokeWidth:o*.6},p)}),E.jsx("circle",{cx:s/2,cy:s/2,r:c*.1,fill:r,opacity:"0.6"})]})}function jf({cx:s,cy:e,outerR:t,innerR:r,teeth:o,holeR:l}){const c=I0(s,e,t,r,o,.4);return E.jsxs(E.Fragment,{children:[E.jsx("path",{d:c,fill:"url(#gearFill)",stroke:"rgba(122,92,46,0.4)",strokeWidth:"1.5"}),E.jsx("circle",{cx:s,cy:e,r:l,fill:"rgba(10,6,2,0.6)",stroke:"rgba(122,92,46,0.3)",strokeWidth:"1"}),[0,45,90,135,180,225,270,315].map((u,f)=>{const h=u*Math.PI/180,p=s+Math.cos(h)*l,g=e+Math.sin(h)*l,x=s+Math.cos(h)*(r*.7),v=e+Math.sin(h)*(r*.7);return E.jsx("line",{x1:p,y1:g,x2:x,y2:v,stroke:"rgba(122,92,46,0.2)",strokeWidth:"1.5"},f)}),E.jsx("circle",{cx:s,cy:e,r:l*.3,fill:"rgba(200,134,10,0.15)",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.8"})]})}function Dy({cx:s,cy:e,outerR:t,innerR:r,teeth:o,holeR:l}){return E.jsx("g",{transform:`translate(100%,${e})`,children:E.jsx(jf,{cx:s,cy:0,outerR:t,innerR:r,teeth:o,holeR:l})})}function Iy({cx:s,cy:e,outerR:t,innerR:r,teeth:o,holeR:l}){return E.jsx("g",{transform:"translate(50%,100%)",children:E.jsx(jf,{cx:s,cy:e,outerR:t,innerR:r,teeth:o,holeR:l})})}function Xm({y:s,fromBottom:e,segments:t}){const r=e?`calc(100% - ${-s}px)`:`${s}px`;return E.jsxs("g",{children:[E.jsx("line",{x1:"0",y1:r,x2:"100%",y2:r,stroke:"url(#pipeGrad2)",strokeWidth:"6"}),E.jsx("line",{x1:"0",y1:r,x2:"100%",y2:r,stroke:"rgba(200,134,10,0.15)",strokeWidth:"1"})]})}function Uy(){return E.jsxs("svg",{className:"absolute top-0 left-0 w-full opacity-25 pointer-events-none",height:"56",xmlns:"http://www.w3.org/2000/svg",children:[E.jsx("defs",{children:E.jsxs("linearGradient",{id:"pipeGrad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[E.jsx("stop",{offset:"0%",stopColor:"#d09030"}),E.jsx("stop",{offset:"40%",stopColor:"#8a5c10"}),E.jsx("stop",{offset:"100%",stopColor:"#3d2010"})]})}),E.jsx("rect",{x:"0",y:"32",width:"100%",height:"6",rx:"3",fill:"url(#pipeGrad2)"}),E.jsx("rect",{x:"0",y:"33",width:"100%",height:"1",fill:"rgba(255,200,60,0.15)"}),[60,160,280,420,560,700].map(s=>E.jsxs("g",{children:[E.jsx("rect",{x:s-5,y:28,width:10,height:14,rx:"1.5",fill:"#8a5c10"}),E.jsx("rect",{x:s-5,y:28,width:10,height:2,rx:"1",fill:"#c8860a",opacity:"0.5"}),E.jsx("circle",{cx:s,cy:35,r:2.5,fill:"#4a3010"})]},s)),[100,340,580].map((s,e)=>E.jsxs("g",{children:[E.jsx("circle",{cx:s,cy:24,r:4,fill:"rgba(220,200,150,0.3)",className:"steam-puff",style:{animationDelay:`${e*1.1}s`}}),E.jsx("circle",{cx:s+3,cy:18,r:2.5,fill:"rgba(220,200,150,0.2)",className:"steam-puff-delay",style:{animationDelay:`${e*1.1+.3}s`}})]},s))]})}function I0(s,e,t,r,o,l){const c=[],u=o*2;for(let f=0;f<u;f++){const h=f/u*Math.PI*2-Math.PI/2,p=Math.PI/u*l,g=f%2===0?t:r;c.push(`${s+Math.cos(h-p)*g},${e+Math.sin(h-p)*g}`),c.push(`${s+Math.cos(h+p)*g},${e+Math.sin(h+p)*g}`)}return`M ${c[0]} L ${c.slice(1).join(" L ")} Z`}const Ii=720,Nn=496,ls=1440,us=800,Ji=130,ky=[[72,44,1.5,0],[180,88,1,1],[252,28,1.8,2],[360,72,.8,0],[432,115,1.2,1],[504,38,1,2],[612,60,1.4,0],[684,95,.8,1],[756,22,1.6,2],[828,82,1,0],[900,48,1.2,1],[972,118,.9,2],[1044,35,1.5,0],[1116,75,1.1,1],[1188,28,1.7,2],[1332,55,1,0],[108,162,1,1],[288,188,.8,2],[468,172,1.3,0],[648,195,1,1],[828,168,.9,2],[1008,190,1.4,0],[1188,178,1.1,1],[1368,195,.8,2],[36,215,.7,0],[216,238,1.2,1],[396,222,.8,2],[576,245,1,0],[756,230,1.3,1],[936,248,.7,2],[1116,225,1.1,0],[1296,240,.9,1],[144,285,.8,2],[432,298,1,0],[720,278,.6,1],[1008,292,.9,2],[1296,285,1.1,0],[288,322,.7,1],[864,318,.8,2],[1440,310,.9,0]],Fy=Array.from({length:18},(s,e)=>{const t=((e+1)/19)**.6;return Nn+(us-Nn)*t}),Ym=Array.from({length:23},(s,e)=>({x1:Ii,y1:Nn,x2:e/22*ls,y2:us})),Oy=Array.from({length:22},(s,e)=>{const t=((e+1)/23)**.65,r=Nn-Ji+t*Ji,o=1.2+e*.28;return{y:r,thick:o}}),zy=["sw-star-a","sw-star-b","sw-star-c"];function By(){return E.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none",style:{zIndex:0},children:[E.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(180deg,
          #080015 0%,
          #120330 18%,
          #1e0852 34%,
          #350a6e 48%,
          #5c0a80 59%,
          #9a1278 68%,
          #d02268 77%,
          #ee3268 86%,
          #ff4878 95%,
          #ff6090 100%)`}}),E.jsxs("svg",{className:"absolute inset-0 w-full h-full",viewBox:`0 0 ${ls} ${us}`,preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[E.jsxs("defs",{children:[E.jsxs("radialGradient",{id:"swSunGrad",cx:"50%",cy:"50%",r:"50%",children:[E.jsx("stop",{offset:"0%",stopColor:"#fff8e8"}),E.jsx("stop",{offset:"22%",stopColor:"#ffe060"}),E.jsx("stop",{offset:"50%",stopColor:"#ff8030"}),E.jsx("stop",{offset:"80%",stopColor:"#ff2d78"}),E.jsx("stop",{offset:"100%",stopColor:"#aa0a60"})]}),E.jsxs("radialGradient",{id:"swSunGlow",cx:"50%",cy:"80%",r:"50%",children:[E.jsx("stop",{offset:"0%",stopColor:"#ff2d78",stopOpacity:"0.5"}),E.jsx("stop",{offset:"50%",stopColor:"#cc44ff",stopOpacity:"0.15"}),E.jsx("stop",{offset:"100%",stopColor:"#cc44ff",stopOpacity:"0"})]}),E.jsxs("linearGradient",{id:"swGridH",x1:"0",y1:Nn,x2:"0",y2:us,gradientUnits:"userSpaceOnUse",children:[E.jsx("stop",{offset:"0%",stopColor:"#ff2d78",stopOpacity:"0.9"}),E.jsx("stop",{offset:"100%",stopColor:"#ff2d78",stopOpacity:"0.2"})]}),E.jsxs("linearGradient",{id:"swGridV",x1:"0",y1:Nn,x2:"0",y2:us,gradientUnits:"userSpaceOnUse",children:[E.jsx("stop",{offset:"0%",stopColor:"#44ddff",stopOpacity:"0.7"}),E.jsx("stop",{offset:"100%",stopColor:"#aa44ff",stopOpacity:"0.15"})]}),E.jsx("clipPath",{id:"swSunClip",children:E.jsx("rect",{x:Ii-Ji-4,y:0,width:Ji*2+8,height:Nn+2})}),E.jsxs("filter",{id:"swGlow",children:[E.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),E.jsxs("feMerge",{children:[E.jsx("feMergeNode",{in:"blur"}),E.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),E.jsxs("filter",{id:"swGlowSoft",children:[E.jsx("feGaussianBlur",{stdDeviation:"8",result:"blur"}),E.jsxs("feMerge",{children:[E.jsx("feMergeNode",{in:"blur"}),E.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),ky.map(([s,e,t,r],o)=>E.jsx("circle",{cx:s,cy:e,r:t,fill:o%7===0?"#ccddff":o%5===0?"#ffccee":"#ffffff",opacity:.35+o%4*.12,className:zy[r]},o)),E.jsx("ellipse",{cx:Ii,cy:Nn,rx:Ji*2.6,ry:Ji*1.2,fill:"url(#swSunGlow)",className:"sw-glow-pulse"}),E.jsx("circle",{cx:Ii,cy:Nn,r:Ji,fill:"url(#swSunGrad)",clipPath:"url(#swSunClip)"}),Oy.map(({y:s,thick:e},t)=>E.jsx("line",{x1:Ii-Ji-2,y1:s,x2:Ii+Ji+2,y2:s,stroke:"#080015",strokeWidth:e,clipPath:"url(#swSunClip)",opacity:.92},t)),E.jsx("line",{x1:0,y1:Nn,x2:ls,y2:Nn,stroke:"#ff2d78",strokeWidth:3,opacity:.9,filter:"url(#swGlow)"}),E.jsx("line",{x1:0,y1:Nn,x2:ls,y2:Nn,stroke:"#ffaacc",strokeWidth:.6,opacity:.7}),Ym.map((s,e)=>{const t=e===0||e===Ym.length-1;return E.jsx("line",{x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2,stroke:"url(#swGridV)",strokeWidth:t?1.2:.7,opacity:.65},e)}),Fy.map((s,e)=>{const t=(s-Nn)/(us-Nn),r=Math.max(0,Ii-Ii*t*1.15),o=Math.min(ls,Ii+(ls-Ii)*t*1.15);return E.jsx("line",{x1:r,y1:s,x2:o,y2:s,stroke:"url(#swGridH)",strokeWidth:.6+t*2,opacity:.45+t*.4},e)}),E.jsx("rect",{x:0,y:us-4,width:ls,height:4,fill:"url(#swGridH)",opacity:.4})]}),E.jsx("div",{className:"absolute inset-0 sw-scanlines"}),E.jsx("div",{className:"absolute left-0 right-0 h-px sw-scan-sweep",style:{background:"rgba(255,45,120,0.25)",boxShadow:"0 0 6px rgba(255,45,120,0.4)"}}),E.jsx("div",{className:"absolute top-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg, transparent, #cc44ff 25%, #ff2d78 50%, #cc44ff 75%, transparent)",boxShadow:"0 0 12px rgba(204,68,255,0.7), 0 0 24px rgba(255,45,120,0.3)"}}),E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg, transparent, #44ddff 25%, #aa44ff 50%, #44ddff 75%, transparent)",boxShadow:"0 0 12px rgba(68,221,255,0.7)"}}),E.jsx("div",{className:"absolute top-0 bottom-0 left-0 w-px",style:{background:"linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)",opacity:.3}}),E.jsx("div",{className:"absolute top-0 bottom-0 right-0 w-px",style:{background:"linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)",opacity:.3}}),E.jsx("div",{className:"absolute top-0 left-0",style:{width:32,height:32,borderTop:"1px solid rgba(204,68,255,0.6)",borderLeft:"1px solid rgba(204,68,255,0.6)"}}),E.jsx("div",{className:"absolute top-0 right-0",style:{width:32,height:32,borderTop:"1px solid rgba(204,68,255,0.6)",borderRight:"1px solid rgba(204,68,255,0.6)"}}),E.jsx("div",{className:"absolute bottom-0 left-0",style:{width:32,height:32,borderBottom:"1px solid rgba(68,221,255,0.6)",borderLeft:"1px solid rgba(68,221,255,0.6)"}}),E.jsx("div",{className:"absolute bottom-0 right-0",style:{width:32,height:32,borderBottom:"1px solid rgba(68,221,255,0.6)",borderRight:"1px solid rgba(68,221,255,0.6)"}}),E.jsx("div",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 tracking-widest sw-flicker",style:{fontFamily:"'Audiowide', sans-serif",color:"#ff2d78",letterSpacing:"0.55em",textTransform:"uppercase",fontSize:"10px",opacity:.22},children:"PICELL · 3D"})]})}const gc={synthwave:{id:"synthwave",name:"SynthWave",colors:{background:"#0d0221",surface:"#150a2d",surfaceAlt:"#1e0f3c",border:"#5a1a9a",accent:"#ff2d78",accentHover:"#ff5590",text:"#f4d0ff",textMuted:"#6a40a0",canvasBg:"#0a0118"},fontFamily:"'Audiowide', sans-serif",sceneBackground:"#080015",PainterBackground:By},steampunk:{id:"steampunk",name:"Steampunk",colors:{background:"#1a1208",surface:"#2d2010",surfaceAlt:"#3d2e18",border:"#7a5c2e",accent:"#c8860a",accentHover:"#e8a820",text:"#e8d5a0",textMuted:"#8a7050",canvasBg:"#241a0c"},fontFamily:"'Special Elite', serif",sceneBackground:"#0e0a04",PainterBackground:Ny},cyberpunk:{id:"cyberpunk",name:"Cyberpunk",colors:{background:"#080010",surface:"#110022",surfaceAlt:"#1a0030",border:"#5500aa",accent:"#cc00ff",accentHover:"#ee44ff",text:"#e0c0ff",textMuted:"#7040a0",canvasBg:"#0c0018"},fontFamily:"'Orbitron', sans-serif",sceneBackground:"#050008",PainterBackground:Vy},blueprint:{id:"blueprint",name:"Blueprint",colors:{background:"#0a1628",surface:"#0d1f3c",surfaceAlt:"#122848",border:"#2a4a7f",accent:"#4d9fff",accentHover:"#80bbff",text:"#c8dff8",textMuted:"#4a6a9a",canvasBg:"#08121e"},fontFamily:"'Share Tech Mono', monospace",sceneBackground:"#061020",PainterBackground:Hy},watercolor:{id:"watercolor",name:"Watercolor",colors:{background:"#f5f0e8",surface:"#ede5d8",surfaceAlt:"#e8ddd0",border:"#c0a880",accent:"#b05030",accentHover:"#d06040",text:"#2a1a10",textMuted:"#8a6848",canvasBg:"#ede5d8"},fontFamily:"'Caveat', cursive",sceneBackground:"#f0ebe0",PainterBackground:Gy}};function tf(s){return gc[s]??gc.synthwave}function U0(s){const e=document.documentElement;Object.entries(s.colors).forEach(([t,r])=>{e.style.setProperty(`--color-${t}`,r)}),e.style.setProperty("--font-family",s.fontFamily)}function Vy(){return E.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:[E.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 30% 50%, rgba(80,0,160,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(0,200,255,0.1) 0%, transparent 50%)"}}),E.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[E.jsx("defs",{children:E.jsx("pattern",{id:"cybGrid",width:"30",height:"30",patternUnits:"userSpaceOnUse",children:E.jsx("path",{d:"M 30 0 L 0 0 0 30",fill:"none",stroke:"rgba(85,0,170,0.2)",strokeWidth:"0.5"})})}),E.jsx("rect",{width:"100%",height:"100%",fill:"url(#cybGrid)"}),[.15,.35,.6,.8].map((s,e)=>E.jsx("line",{x1:"0",y1:`${s*100}%`,x2:"100%",y2:`${s*100}%`,stroke:e%2===0?"rgba(204,0,255,0.12)":"rgba(0,200,255,0.08)",strokeWidth:"1"},e))]}),E.jsx("div",{className:"absolute top-0 left-0 right-0 h-px opacity-60",style:{background:"linear-gradient(90deg, transparent, #cc00ff, #00ccff, transparent)"}}),E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px opacity-40",style:{background:"linear-gradient(90deg, transparent, #cc00ff, transparent)"}}),E.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-15 tracking-widest",style:{fontFamily:"'Orbitron', sans-serif",color:"#cc00ff",letterSpacing:"0.5em"},children:"PICELL3D"})]})}function Hy(){return E.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:E.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[E.jsxs("defs",{children:[E.jsx("pattern",{id:"bpSmall",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:E.jsx("path",{d:"M 20 0 L 0 0 0 20",fill:"none",stroke:"rgba(45,100,180,0.3)",strokeWidth:"0.5"})}),E.jsx("pattern",{id:"bpLarge",width:"100",height:"100",patternUnits:"userSpaceOnUse",children:E.jsx("path",{d:"M 100 0 L 0 0 0 100",fill:"none",stroke:"rgba(45,100,180,0.6)",strokeWidth:"1"})})]}),E.jsx("rect",{width:"100%",height:"100%",fill:"url(#bpSmall)"}),E.jsx("rect",{width:"100%",height:"100%",fill:"url(#bpLarge)"}),[[15,15],[85,15],[15,85],[85,85],[50,50]].map(([s,e],t)=>E.jsxs("g",{transform:`translate(${s}%,${e}%)`,children:[E.jsx("line",{x1:"-8",y1:"0",x2:"8",y2:"0",stroke:"rgba(77,159,255,0.4)",strokeWidth:"1"}),E.jsx("line",{x1:"0",y1:"-8",x2:"0",y2:"8",stroke:"rgba(77,159,255,0.4)",strokeWidth:"1"}),E.jsx("circle",{r:"3",fill:"none",stroke:"rgba(77,159,255,0.3)",strokeWidth:"0.5"})]},t)),E.jsx("rect",{x:"10",y:"10",width:"180",height:"40",fill:"none",stroke:"rgba(77,159,255,0.2)",strokeWidth:"1"}),E.jsx("text",{x:"20",y:"30",fill:"rgba(77,159,255,0.25)",fontSize:"8",fontFamily:"'Share Tech Mono', monospace",children:"PICELL3D — PIXEL ART TO 3D CONVERTER"}),E.jsx("text",{x:"20",y:"42",fill:"rgba(77,159,255,0.2)",fontSize:"7",fontFamily:"'Share Tech Mono', monospace",children:"SCALE: 1:1  UNITS: PX  REV: MVP"})]})})}function Gy(){return E.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:[E.jsx("div",{className:"absolute inset-0",style:{background:`
          radial-gradient(ellipse at 20% 30%, rgba(180,120,60,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(80,120,180,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(200,160,100,0.05) 0%, transparent 70%)
        `}}),E.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[E.jsx("ellipse",{cx:"15%",cy:"20%",rx:"120",ry:"80",fill:"rgba(180,120,80,0.06)"}),E.jsx("ellipse",{cx:"85%",cy:"75%",rx:"150",ry:"100",fill:"rgba(80,130,200,0.05)"}),E.jsx("ellipse",{cx:"50%",cy:"10%",rx:"200",ry:"40",fill:"rgba(160,100,60,0.04)"}),[...Array(8)].map((s,e)=>E.jsx("line",{x1:"0",y1:`${(e+1)*12}%`,x2:"100%",y2:`${(e+1)*12}%`,stroke:"rgba(160,120,80,0.08)",strokeWidth:"0.5",strokeDasharray:"4 8"},`h${e}`))]}),[{top:"-6px",left:"30%",rotate:"-8deg"},{top:"-6px",right:"25%",rotate:"5deg"},{bottom:"-6px",left:"40%",rotate:"3deg"}].map((s,e)=>E.jsx("div",{className:"absolute w-12 h-5 opacity-20",style:{...s,transform:`rotate(${s.rotate})`,background:"rgba(200,180,120,0.6)",borderRadius:"1px"}},e)),E.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-20",style:{fontFamily:"'Caveat', cursive",color:"#b05030",fontSize:"16px"},children:"Picell3D"})]})}const jy=Object.freeze(Object.defineProperty({__proto__:null,THEMES:gc,applyTheme:U0,getTheme:tf},Symbol.toStringTag,{value:"Module"}));function Wy(){const{setActiveTool:s,undo:e,redo:t,toggleGrid:r}=rt();Re.useEffect(()=>{function o(l){if(!(l.target.tagName==="INPUT"||l.target.tagName==="TEXTAREA")){if(l.ctrlKey||l.metaKey){l.key==="z"&&(l.preventDefault(),e()),l.key==="y"&&(l.preventDefault(),t()),l.key==="Z"&&(l.preventDefault(),t());return}switch(l.key.toLowerCase()){case"p":s("pencil");break;case"e":s("eraser");break;case"f":s("fill");break;case"g":r();break}}}return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[s,e,t,r])}const Xy=[{label:"8×8",w:8,h:8},{label:"16×16",w:16,h:16},{label:"32×32",w:32,h:32},{label:"48×48",w:48,h:48},{label:"64×64",w:64,h:64},{label:"128×64",w:128,h:64},{label:"128×128",w:128,h:128}];function Yy({onClose:s}){const{canvasWidth:e,canvasHeight:t,resizeCanvas:r}=rt(),[o,l]=Re.useState(e),[c,u]=Re.useState(t);function f(){const v=Math.max(4,Math.min(256,parseInt(o)||e)),M=Math.max(4,Math.min(256,parseInt(c)||t));r(v,M),s()}function h(v){l(v.w),u(v.h)}const p=o>e,g=c>t,x=o===e&&c===t;return E.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.6)"},onClick:v=>{v.target===v.currentTarget&&s()},children:E.jsxs("div",{className:"panel-riveted relative flex flex-col gap-4 p-5 rounded-lg border border-border shadow-brass w-80",style:{background:"var(--color-surface)"},children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsxs("div",{className:"flex items-center gap-2 text-sm font-theme text-text tracking-wide",children:[E.jsx(M0,{size:15,className:"text-accent"}),"Canvas Size"]}),E.jsx("button",{className:"text-text-muted hover:text-text transition-colors",onClick:s,children:E.jsx(vo,{size:16})})]}),E.jsxs("div",{className:"flex items-center gap-2 text-xs text-text-muted",children:[E.jsxs("span",{className:"font-mono",children:[e,"×",t]}),E.jsx(v_,{size:12}),E.jsxs("span",{className:`font-mono font-medium ${x?"text-text-muted":"text-accent"}`,children:[Math.max(4,Math.min(256,parseInt(o)||e)),"×",Math.max(4,Math.min(256,parseInt(c)||t))]})]}),E.jsxs("div",{children:[E.jsx("div",{className:"text-xs text-text-muted uppercase tracking-wide mb-2",children:"Presets"}),E.jsx("div",{className:"grid grid-cols-4 gap-1",children:Xy.map(v=>{const M=v.w===e&&v.h===t,w=v.w===o&&v.h===c;return E.jsx("button",{className:`text-xs py-1 px-1 rounded border transition-colors ${w?"border-accent bg-accent/20 text-accent":M?"border-border/80 text-text":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,onClick:()=>h(v),children:v.label},v.label)})})]}),E.jsxs("div",{children:[E.jsx("div",{className:"text-xs text-text-muted uppercase tracking-wide mb-2",children:"Custom"}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsxs("div",{className:"flex-1",children:[E.jsx("label",{className:"text-xs text-text-muted block mb-1",children:"Width"}),E.jsx("input",{type:"number",min:4,max:256,value:o,onChange:v=>l(parseInt(v.target.value)||4),className:`w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent`})]}),E.jsx(vo,{size:12,className:"text-text-muted mt-4 flex-shrink-0"}),E.jsxs("div",{className:"flex-1",children:[E.jsx("label",{className:"text-xs text-text-muted block mb-1",children:"Height"}),E.jsx("input",{type:"number",min:4,max:256,value:c,onChange:v=>u(parseInt(v.target.value)||4),className:`w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent`})]})]})]}),E.jsx("div",{className:"text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5",style:{background:"color-mix(in srgb, var(--color-background) 60%, transparent)"},children:p||g?"Growing: existing content will be centered.":x?"Select a new size to resize the canvas.":"Shrinking: content is cropped from the right and bottom."}),E.jsxs("div",{className:"flex gap-2 justify-end pt-1",children:[E.jsx("button",{className:"text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors",onClick:s,children:"Cancel"}),E.jsx("button",{className:"btn-brass text-xs",disabled:x,onClick:f,style:{opacity:x?.5:1},children:"Apply"})]})]})})}function $y(s,e,t,r="fit"){return new Promise((o,l)=>{const c=URL.createObjectURL(s),u=new Image;u.onload=()=>{const f=document.createElement("canvas");f.width=e,f.height=t;const h=f.getContext("2d");h.clearRect(0,0,e,t);const p=u.naturalWidth,g=u.naturalHeight,x=p/g,v=e/t;if(r==="fit")if(x>v){const _=e/x;h.drawImage(u,0,(t-_)/2,e,_)}else{const _=t*x;h.drawImage(u,(e-_)/2,0,_,t)}else if(r==="fill"){let _=0,y=0,A=p,C=g;x>v?(A=g*v,_=(p-A)/2):(C=p/v,y=(g-C)/2),h.drawImage(u,_,y,A,C,0,0,e,t)}else h.drawImage(u,0,0,e,t);const{data:M}=h.getImageData(0,0,e,t),w=Array.from({length:t},(_,y)=>Array.from({length:e},(A,C)=>{const T=(y*e+C)*4;return M[T+3]<16?null:"#"+M[T].toString(16).padStart(2,"0")+M[T+1].toString(16).padStart(2,"0")+M[T+2].toString(16).padStart(2,"0")}));URL.revokeObjectURL(c),o(w)},u.onerror=()=>{URL.revokeObjectURL(c),l(new Error("Failed to load image"))},u.src=c})}function qy(s){return new Promise((e,t)=>{const r=URL.createObjectURL(s),o=new Image;o.onload=()=>e({src:r,naturalWidth:o.naturalWidth,naturalHeight:o.naturalHeight}),o.onerror=()=>{URL.revokeObjectURL(r),t(new Error("Failed to load image"))},o.src=r})}const Ky=[{id:"fit",label:"Fit"},{id:"fill",label:"Fill"},{id:"stretch",label:"Stretch"}];function Zy({onClose:s}){const{canvasWidth:e,canvasHeight:t,depthDimension:r,setReferenceImage:o}=rt(),[l,c]=Re.useState("pixelart"),[u,f]=Re.useState(null),[h,p]=Re.useState(null),[g,x]=Re.useState("fit"),[v,M]=Re.useState(40),[w,_]=Re.useState(!1),y=Re.useRef(null);async function A(L){if(L){p(L);try{const D=await qy(L);f(D)}catch{}}}async function C(){if(h){_(!0);try{const L=await $y(h,e,t,g),{layers:D,activeLayerId:z,depthDimension:I}=rt.getState(),P=D.findIndex(le=>le.id===z);if(P<0)return;const B=Math.floor(I/2),K=D[P];rt.getState().pushUndo();const W=K.voxels.map((le,de)=>le.map((oe,V)=>{var F;const ce=(F=L[de])==null?void 0:F[V];if(!ce)return oe;const te=[...oe];return te[B]=ce,te})),ae=[...D];ae[P]={...K,voxels:W},rt.setState({layers:ae}),s()}finally{_(!1)}}}function T(){if(!u)return;const L=u.naturalWidth/u.naturalHeight,D=t,z=Math.min(e,D*L);o({src:u.src,x:(e-z)/2,y:0,width:z,height:D,opacity:v/100}),s()}const k=Math.floor(r/2);return E.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.75)"},onClick:L=>L.target===L.currentTarget&&s(),children:E.jsxs("div",{className:"w-96 rounded-lg border border-border shadow-2xl overflow-hidden",style:{background:"var(--color-surface)"},children:[E.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border",children:[E.jsx("span",{className:"text-sm font-theme text-text",children:"Import Image"}),E.jsx("button",{onClick:s,className:"text-text-muted hover:text-text text-xl leading-none",children:"×"})]}),E.jsx("div",{className:"flex border-b border-border",children:[{id:"pixelart",Icon:E0,label:"Pixel Art"},{id:"reference",Icon:oc,label:"Reference"}].map(({id:L,Icon:D,label:z})=>E.jsxs("button",{onClick:()=>c(L),className:`flex items-center gap-1.5 px-4 py-2 text-xs border-b-2 transition-colors ${l===L?"border-accent text-accent":"border-transparent text-text-muted hover:text-text"}`,children:[E.jsx(D,{size:11})," ",z]},L))}),E.jsxs("div",{className:"p-4 flex flex-col gap-4",children:[E.jsxs("div",{className:"flex flex-col items-center justify-center rounded border-2 border-dashed cursor-pointer transition-colors",style:{borderColor:u?"var(--color-accent)":"var(--color-border)",background:"color-mix(in srgb, var(--color-background) 70%, transparent)",minHeight:120},onClick:()=>{var L;return(L=y.current)==null?void 0:L.click()},children:[u?E.jsx("img",{src:u.src,alt:"preview",className:"max-h-28 max-w-full object-contain rounded",style:{imageRendering:"pixelated"}}):E.jsxs(E.Fragment,{children:[E.jsx(My,{size:22,className:"text-text-muted mb-2"}),E.jsx("span",{className:"text-xs text-text-muted",children:"Click to select image"}),E.jsx("span",{className:"text-xs text-text-muted opacity-50 mt-0.5",children:"PNG · JPG · GIF · WebP"})]}),E.jsx("input",{ref:y,type:"file",accept:"image/*",className:"hidden",onChange:L=>{var D;return A((D=L.target.files)==null?void 0:D[0])}})]}),l==="pixelart"&&E.jsxs("div",{className:"flex flex-col gap-3",children:[E.jsxs("div",{children:[E.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide mb-1.5 block",children:"Scale Mode"}),E.jsx("div",{className:"grid grid-cols-3 gap-1",children:Ky.map(({id:L,label:D})=>E.jsx("button",{onClick:()=>x(L),className:`text-xs py-1 rounded border transition-colors ${g===L?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:D},L))})]}),E.jsxs("p",{className:"text-xs text-text-muted opacity-60 leading-relaxed",children:["Painted onto active layer at depth center (z=",k,"). Canvas: ",e,"×",t,"."]})]}),l==="reference"&&E.jsxs("div",{className:"flex flex-col gap-3",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[E.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Opacity"}),E.jsxs("span",{className:"text-xs font-mono text-accent",children:[v,"%"]})]}),E.jsx("input",{type:"range",min:5,max:90,value:v,onChange:L=>M(Number(L.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}})]}),E.jsx("p",{className:"text-xs text-text-muted opacity-60 leading-relaxed",children:"Overlay on the canvas. Drag to reposition, drag corners to resize."})]}),E.jsxs("div",{className:"flex gap-2 justify-end pt-1",children:[E.jsx("button",{onClick:s,className:"text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors",children:"Cancel"}),E.jsx("button",{onClick:l==="pixelart"?C:T,disabled:!u||w,className:"btn-brass text-xs px-3 py-1.5 disabled:opacity-40 disabled:cursor-not-allowed",children:w?"Importing…":"Import"})]})]})]})})}function $m({value:s,onChange:e}){return E.jsx("button",{role:"switch","aria-checked":s,onClick:()=>e(!s),style:{width:36,height:20,borderRadius:10,padding:2,background:s?"var(--color-accent)":"var(--color-border)",transition:"background .2s",flexShrink:0,display:"flex",alignItems:"center"},children:E.jsx("div",{style:{width:16,height:16,borderRadius:"50%",background:"#fff",transform:s?"translateX(16px)":"translateX(0)",transition:"transform .2s",flexShrink:0,boxShadow:"0 1px 3px rgba(0,0,0,.4)"}})})}function tr({label:s,hint:e,children:t}){return E.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-border/40",children:[E.jsxs("div",{className:"flex flex-col gap-0.5",children:[E.jsx("span",{className:"text-sm text-text",children:s}),e&&E.jsx("span",{className:"text-xs text-text-muted opacity-60",children:e})]}),E.jsx("div",{className:"flex items-center gap-2 ml-4 flex-shrink-0",children:t})]})}function ps({title:s,children:e}){return E.jsxs("div",{className:"mb-6",children:[E.jsx("div",{className:"text-xs uppercase tracking-widest text-text-muted mb-1 pb-1",children:s}),e]})}function qm({value:s,onChange:e,min:t=1,max:r=256,step:o=1}){return E.jsx("input",{type:"number",min:t,max:r,step:o,value:s,onChange:l=>e(Math.max(t,Math.min(r,Number(l.target.value)||t))),className:"w-16 text-center text-xs font-mono rounded border border-border text-text bg-transparent outline-none focus:border-accent transition-colors py-1"})}function k0({options:s,value:e,onChange:t}){return E.jsx("div",{className:"flex rounded border border-border overflow-hidden",children:s.map(({id:r,Icon:o,label:l})=>E.jsxs("button",{onClick:()=>t(r),title:l,className:`flex items-center gap-1 px-2 py-1 text-xs transition-colors ${e===r?"bg-accent/20 text-accent border-r border-border last:border-r-0":"text-text-muted hover:text-text border-r border-border last:border-r-0"}`,children:[E.jsx(o,{size:11}),E.jsx("span",{children:l})]},r))})}function Qy(){const{showGrid:s,toggleGrid:e,showDepthText:t,setShowDepthText:r,viewMode:o,setViewMode:l,pixelSize:c,setPixelSize:u}=rt();return E.jsxs(E.Fragment,{children:[E.jsxs(ps,{title:"Canvas View",children:[E.jsx(tr,{label:"Show grid",hint:"Grid lines on the 2D canvas",children:E.jsx($m,{value:s,onChange:e})}),E.jsx(tr,{label:"Depth labels",hint:"Show depth offset number on each painted pixel",children:E.jsx($m,{value:t,onChange:r})})]}),E.jsxs(ps,{title:"Default Layout",children:[E.jsx(tr,{label:"View mode",hint:"Starting layout on app load",children:E.jsx(k0,{value:o,onChange:l,options:[{id:"canvas-only",Icon:b0,label:"2D"},{id:"split",Icon:y0,label:"Split"},{id:"preview-only",Icon:hs,label:"3D"}]})}),E.jsx(tr,{label:"Zoom level",hint:`Current: ${c}px per cell`,children:E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("button",{onClick:()=>u(c-2),className:"w-6 h-6 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors text-sm",children:"−"}),E.jsx("span",{className:"text-xs font-mono text-accent w-8 text-center",children:c}),E.jsx("button",{onClick:()=>u(c+2),className:"w-6 h-6 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors text-sm",children:"+"})]})})]})]})}function Jy(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,resizeCanvas:r,setDepthDimension:o}=rt(),[l,c]=Re.useState(s),[u,f]=Re.useState(e);function h(){(l!==s||u!==e)&&r(l,u)}const p=[4,5,8,16,24,32];return E.jsxs(E.Fragment,{children:[E.jsx(ps,{title:"Canvas Size",children:E.jsx(tr,{label:"Width × Height",hint:"Resize the current canvas (content is preserved)",children:E.jsxs("div",{className:"flex items-center gap-1.5",children:[E.jsx(qm,{value:l,onChange:c,min:4,max:256}),E.jsx("span",{className:"text-text-muted text-xs",children:"×"}),E.jsx(qm,{value:u,onChange:f,min:4,max:256}),E.jsx("button",{onClick:h,className:"text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-accent hover:border-accent transition-colors",children:"Apply"})]})})}),E.jsxs(ps,{title:"Depth Dimension",children:[E.jsx(tr,{label:"Depth (Z)",hint:"Number of voxel layers along the depth axis",children:E.jsx("div",{className:"flex items-center gap-1 flex-wrap justify-end",children:p.map(g=>E.jsx("button",{onClick:()=>o(g),className:`text-xs px-1.5 py-0.5 rounded border transition-colors ${t===g?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:g},g))})}),E.jsx(tr,{label:"",hint:"",children:E.jsxs("div",{className:"w-full flex flex-col gap-1",style:{minWidth:180},children:[E.jsx("input",{type:"range",min:4,max:128,value:t,onChange:g=>o(parseInt(g.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}}),E.jsxs("div",{className:"flex justify-between text-xs text-text-muted",children:[E.jsx("span",{children:"4"}),E.jsx("span",{className:"text-accent font-mono",children:t}),E.jsx("span",{children:"128"})]})]})})]})]})}function eS(){const{paintDepth:s,setPaintDepth:e,paintDirection:t,setPaintDirection:r,depthDimension:o}=rt(),l=Math.ceil(o/2);return E.jsx(E.Fragment,{children:E.jsxs(ps,{title:"Brush",children:[E.jsx(tr,{label:"Paint depth",hint:"Number of voxel layers painted per stroke from front/back view",children:E.jsx("div",{className:"flex flex-col gap-1",style:{minWidth:180},children:E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("input",{type:"range",min:1,max:l,value:s,onChange:c=>e(parseInt(c.target.value)),className:"flex-1 cursor-pointer",style:{accentColor:"var(--color-accent)"}}),E.jsx("span",{className:"text-xs font-mono text-accent w-5 text-right",children:s})]})})}),E.jsx(tr,{label:"Paint direction",hint:"Which direction from center to extend the brush",children:E.jsx(k0,{value:t,onChange:r,options:[{id:"front",Icon:ac,label:"← Front"},{id:"both",Icon:ac,label:"↔ Both"},{id:"back",Icon:ac,label:"Back →"}]})})]})})}function tS({onClose:s}){const{clearCanvas:e,resizeCanvas:t,setDepthDimension:r,setPaintDepth:o,setPaintDirection:l,setViewMode:c,setPixelSize:u,toggleGrid:f,showGrid:h,setShowDepthText:p}=rt(),[g,x]=Re.useState(null);function v(_,y){g===_?(y(),x(null)):x(_)}function M(){t(32,32),r(5),o(1),l("both"),c("split"),u(14),h||f(),p(!0),x(null)}const w=({id:_,label:y,sublabel:A,action:C})=>E.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-border/40",children:[E.jsxs("div",{className:"flex flex-col gap-0.5",children:[E.jsx("span",{className:"text-sm text-text",children:y}),A&&E.jsx("span",{className:"text-xs text-text-muted opacity-60",children:A})]}),E.jsx("button",{onClick:()=>v(_,C),className:`text-xs px-3 py-1.5 rounded border transition-colors ${g===_?"border-red-500 bg-red-950 text-red-400":"border-border text-text-muted hover:border-red-700 hover:text-red-400"}`,children:g===_?"Confirm":"Reset"})]});return E.jsxs(E.Fragment,{children:[E.jsxs(ps,{title:"Canvas",children:[E.jsx(w,{id:"clear",label:"Clear canvas",sublabel:"Erase all painted voxels on the active layer",action:e}),E.jsx(w,{id:"size",label:"Reset canvas size",sublabel:"Set canvas back to 32×32×5",action:()=>{t(32,32),r(5)}})]}),E.jsx(ps,{title:"Settings",children:E.jsx(w,{id:"all",label:"Reset all settings",sublabel:"Restore display, canvas and painting settings to defaults",action:M})}),g&&E.jsxs("p",{className:"text-xs text-text-muted opacity-60 mt-1",children:["Click the button again to confirm.",E.jsx("button",{onClick:()=>x(null),className:"ml-2 text-accent hover:underline",children:"Cancel"})]})]})}const Km=[{id:"display",label:"Display",Icon:w0},{id:"canvas",label:"Canvas",Icon:H_},{id:"painting",label:"Painting",Icon:T0},{id:"reset",label:"Reset",Icon:ly}];function nS({onClose:s}){const[e,t]=Re.useState("display"),r=Km.find(o=>o.id===e);return E.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.75)"},onClick:o=>o.target===o.currentTarget&&s(),children:E.jsxs("div",{className:"flex rounded-xl border border-border shadow-2xl overflow-hidden",style:{width:580,maxHeight:"85vh",background:"var(--color-surface)"},children:[E.jsxs("div",{className:"flex flex-col flex-shrink-0 py-3",style:{width:160,background:"color-mix(in srgb, var(--color-background) 55%, transparent)",borderRight:"1px solid var(--color-border)"},children:[E.jsx("div",{className:"px-4 pb-3 pt-1",children:E.jsx("span",{className:"text-xs uppercase tracking-widest font-theme",style:{color:"var(--color-accent)",opacity:.8},children:"Settings"})}),Km.map(({id:o,label:l,Icon:c})=>E.jsxs("button",{onClick:()=>t(o),className:"flex items-center gap-2.5 px-4 py-2.5 text-xs transition-colors text-left relative",style:{color:e===o?"var(--color-accent)":"var(--color-text-muted)",background:e===o?"color-mix(in srgb, var(--color-accent) 10%, transparent)":"transparent",borderRight:e===o?"2px solid var(--color-accent)":"2px solid transparent"},children:[E.jsx(c,{size:13}),l]},o))]}),E.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[E.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 flex-shrink-0",style:{borderBottom:"1px solid var(--color-border)"},children:[E.jsxs("div",{className:"flex items-center gap-2",children:[r&&E.jsx(r.Icon,{size:14,className:"text-accent"}),E.jsx("span",{className:"text-sm font-theme text-text",children:r==null?void 0:r.label})]}),E.jsx("button",{onClick:s,className:"text-text-muted hover:text-text transition-colors",children:E.jsx(vo,{size:15})})]}),E.jsxs("div",{className:"flex-1 overflow-y-auto px-5 py-4",style:{minHeight:0},children:[e==="display"&&E.jsx(Qy,{}),e==="canvas"&&E.jsx(Jy,{}),e==="painting"&&E.jsx(eS,{}),e==="reset"&&E.jsx(tS,{onClose:s})]})]})]})})}const iS=[{id:"pencil",Icon:T0,label:"Pencil (P)",key:"P"},{id:"eraser",Icon:R_,label:"Eraser (E)",key:"E"},{id:"fill",Icon:Y_,label:"Fill (F)",key:"F"}],rS=[{id:"canvas-only",Icon:b0,label:"2D only"},{id:"split",Icon:y0,label:"Split view"},{id:"preview-only",Icon:hs,label:"3D only"}];function sS({onExport:s,onRender:e}){const{activeTool:t,setActiveTool:r,pixelSize:o,setPixelSize:l,toggleGrid:c,showGrid:u,clearCanvas:f,undo:h,redo:p,viewMode:g,setViewMode:x}=rt(),[v,M]=Re.useState(!1),[w,_]=Re.useState(!1),[y,A]=Re.useState(!1);return E.jsxs(E.Fragment,{children:[v&&E.jsx(Yy,{onClose:()=>M(!1)}),w&&E.jsx(Zy,{onClose:()=>_(!1)}),y&&E.jsx(nS,{onClose:()=>A(!1)}),E.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 border-b border-border",style:{background:"var(--color-surfaceAlt)"},children:[E.jsxs("div",{className:"flex items-center gap-2 mr-3 pr-3 border-r border-border",children:[E.jsx("span",{className:"font-theme text-text text-sm tracking-wider",children:"Picell3D"}),E.jsx("button",{onClick:()=>A(!0),title:"Settings",className:"flex items-center justify-center w-6 h-6 rounded border border-transparent text-text-muted hover:text-accent hover:border-accent/50 transition-colors",children:E.jsx(fy,{size:13})})]}),E.jsx("div",{className:"flex items-center gap-0.5 mr-2 pr-2 border-r border-border",children:iS.map(C=>E.jsx(oS,{Icon:C.Icon,label:C.label,active:t===C.id,onClick:()=>r(C.id)},C.id))}),E.jsxs("div",{className:"flex items-center gap-1 mr-2 pr-2 border-r border-border",children:[E.jsx("button",{className:"text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors",onClick:()=>l(o-2),title:"Zoom out",children:"−"}),E.jsxs("span",{className:"text-xs text-text-muted font-mono w-8 text-center",children:[o,"px"]}),E.jsx("button",{className:"text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors",onClick:()=>l(o+2),title:"Zoom in",children:"+"})]}),E.jsxs("button",{className:`flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors mr-2 ${u?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,onClick:c,title:"Toggle grid (G)",children:[E.jsx(k_,{size:12})," Grid"]}),E.jsx("div",{className:"flex items-center gap-0.5 mr-2 pr-2 border-r border-border",children:rS.map(({id:C,Icon:T,label:k})=>E.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center border transition-colors ${g===C?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,onClick:()=>x(C),title:k,children:E.jsx(T,{size:14})},C))}),E.jsxs("button",{className:"flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors mr-2",onClick:()=>M(!0),title:"Canvas size",children:[E.jsx(M0,{size:12}),E.jsx("span",{children:"Size"})]}),E.jsxs("button",{className:"flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors mr-2",onClick:()=>_(!0),title:"Import image",children:[E.jsx(O_,{size:12}),E.jsx("span",{children:"Import"})]}),E.jsxs("div",{className:"flex items-center gap-0.5 mr-auto",children:[E.jsx(_d,{Icon:yy,label:"Undo (Ctrl+Z)",onClick:h}),E.jsx(_d,{Icon:oy,label:"Redo (Ctrl+Y)",onClick:p}),E.jsx(_d,{Icon:C0,label:"Clear canvas",onClick:f,danger:!0})]}),E.jsxs("div",{className:"flex items-center gap-1.5 ml-auto",children:[E.jsxs("button",{className:"btn-brass flex items-center gap-1.5",onClick:s,title:"Export as PNG",children:[E.jsx(S0,{size:14}),E.jsx("span",{children:"Export PNG"})]}),E.jsxs("button",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-medium transition-all",style:{borderColor:"var(--color-accent)",color:"var(--color-accent)",background:"color-mix(in srgb, var(--color-accent) 12%, transparent)"},onClick:e,title:"Open Render Studio",children:[E.jsx(g_,{size:14}),E.jsx("span",{children:"Render"})]})]})]})]})}function oS({Icon:s,label:e,active:t,onClick:r}){return E.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center transition-all border ${t?"border-accent bg-accent/20 text-accent shadow-glow-accent":"border-transparent text-text-muted hover:border-border hover:text-text hover:bg-surface-alt"}`,title:e,onClick:r,children:E.jsx(s,{size:16})})}function _d({Icon:s,label:e,onClick:t,danger:r}){return E.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center border border-transparent transition-colors ${r?"text-text-muted hover:border-red-900 hover:bg-red-950 hover:text-red-400":"text-text-muted hover:text-text hover:bg-surface-alt hover:border-border"}`,title:e,onClick:t,children:E.jsx(s,{size:16})})}function aS(){const{activeTheme:s,setActiveTheme:e}=rt();return E.jsxs("div",{className:"flex items-center gap-1.5 px-2",children:[E.jsx("span",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Theme"}),E.jsx("div",{className:"flex gap-1",children:Object.values(gc).map(t=>E.jsx("button",{className:`text-xs px-2 py-0.5 rounded border transition-all ${s===t.id?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,onClick:()=>e(t.id),title:t.name,children:t.name},t.id))})]})}function lS(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,activeTool:r,activeView:o,paintDepth:l}=rt(),c=["P: Pencil","E: Eraser","F: Fill","G: Grid","Ctrl+Z: Undo"];return E.jsxs("div",{className:"flex items-center justify-between px-3 py-0.5 border-t border-border text-xs text-text-muted",style:{background:"var(--color-surface)"},children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsxs("span",{className:"font-mono",children:[s,"×",e,"×",t]}),E.jsx("span",{className:"capitalize",children:r}),E.jsx("span",{className:"text-accent capitalize",children:o}),E.jsxs("span",{children:["depth: ",l]})]}),E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsx(aS,{}),E.jsx("div",{className:"hidden lg:flex gap-3 opacity-50",children:c.map(u=>E.jsx("span",{children:u},u))})]})]})}function cS(s,e,t,r){const o=[];let l=Math.abs(t-s),c=s<t?1:-1,u=-Math.abs(r-e),f=e<r?1:-1,h=l+u;for(;o.push({col:s,row:e}),!(s===t&&e===r);){const p=2*h;p>=u&&(h+=u,s+=c),p<=l&&(h+=l,e+=f)}return o}function uS(s){const e=Re.useRef(!1),t=Re.useRef(null),r=Re.useCallback(f=>{const{pixelSize:h}=rt.getState(),p=s.current.getBoundingClientRect(),g=Math.floor((f.clientX-p.left)/h),x=Math.floor((f.clientY-p.top)/h);return{col:g,row:x}},[]),o=Re.useCallback(({col:f,row:h})=>{const p=rt.getState(),{activeTool:g,currentColor:x,activeView:v,canvasWidth:M,canvasHeight:w,depthDimension:_}=p,{w:y,h:A}=Gf(v,M,w,_);if(!(f<0||h<0||f>=y||h>=A))switch(g){case"pencil":p.paintAt(f,h,x);break;case"eraser":p.paintAt(f,h,"transparent");break}},[]),l=Re.useCallback(f=>{var g;if(f.button!==0)return;try{(g=s.current)==null||g.setPointerCapture(f.pointerId)}catch{}const h=rt.getState(),p=r(f);if(h.activeTool==="fill"){h.floodFillVoxel(p.col,p.row,h.currentColor);return}e.current=!0,t.current=p,(h.activeTool==="pencil"||h.activeTool==="eraser")&&h.pushUndo(),o(p)},[r,o]),c=Re.useCallback(f=>{if(!e.current)return;const h=r(f),p=t.current;if(!p||h.col===p.col&&h.row===p.row)return;const g=cS(p.col,p.row,h.col,h.row);for(const x of g)o(x);t.current=h},[r,o]),u=Re.useCallback(()=>{e.current=!1,t.current=null},[]);return{onPointerDown:l,onPointerMove:c,onPointerUp:u}}function dS({pixelSize:s}){const{referenceImage:e,setReferenceImage:t,clearReferenceImage:r}=rt(),o=Re.useRef(null);if(!e)return null;const{src:l,x:c,y:u,width:f,height:h,opacity:p}=e,g=c*s,x=u*s,v=f*s,M=h*s;function w(k){k.stopPropagation(),k.currentTarget.setPointerCapture(k.pointerId),o.current={mode:"move",sx:k.clientX,sy:k.clientY,ox:c,oy:u}}function _(k,L){k.stopPropagation(),k.currentTarget.setPointerCapture(k.pointerId),o.current={mode:"resize",corner:L,sx:k.clientX,sy:k.clientY,ox:c,oy:u,ow:f,oh:h}}function y(k){if(!o.current)return;const L=(k.clientX-o.current.sx)/s,D=(k.clientY-o.current.sy)/s,z=o.current;if(z.mode==="move"){t({...e,x:z.ox+L,y:z.oy+D});return}const I=z.ow/z.oh;let P=z.ow,B=z.oh,K=z.ox,W=z.oy;z.corner==="br"?(P=Math.max(2,z.ow+L),B=P/I):z.corner==="bl"?(P=Math.max(2,z.ow-L),B=P/I,K=z.ox+z.ow-P):z.corner==="tr"?(P=Math.max(2,z.ow+L),B=P/I,W=z.oy+z.oh-B):z.corner==="tl"&&(P=Math.max(2,z.ow-L),B=P/I,K=z.ox+z.ow-P,W=z.oy+z.oh-B),t({...e,x:K,y:W,width:P,height:B})}function A(){o.current=null}const C={position:"absolute",width:10,height:10,background:"var(--color-accent)",border:"2px solid #fff",borderRadius:2,zIndex:2},T=[{id:"tl",style:{top:-5,left:-5,cursor:"nwse-resize"}},{id:"tr",style:{top:-5,right:-5,cursor:"nesw-resize"}},{id:"bl",style:{bottom:-5,left:-5,cursor:"nesw-resize"}},{id:"br",style:{bottom:-5,right:-5,cursor:"nwse-resize"}}];return E.jsxs("div",{style:{position:"absolute",left:g,top:x,width:v,height:M,zIndex:12,touchAction:"none"},onPointerMove:y,onPointerUp:A,onPointerLeave:A,children:[E.jsx("img",{src:l,draggable:!1,onPointerDown:w,style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:p,objectFit:"fill",cursor:"move",userSelect:"none",imageRendering:"pixelated",display:"block"}}),E.jsx("div",{style:{position:"absolute",inset:0,border:"1px dashed var(--color-accent)",opacity:.7,pointerEvents:"none"}}),T.map(({id:k,style:L})=>E.jsx("div",{style:{...C,...L},onPointerDown:D=>_(D,k)},k)),E.jsxs("div",{style:{position:"absolute",top:-30,left:0,display:"flex",alignItems:"center",gap:6,background:"color-mix(in srgb, var(--color-surface) 95%, transparent)",border:"1px solid var(--color-border)",borderRadius:4,padding:"3px 8px",whiteSpace:"nowrap",fontSize:10,color:"var(--color-text-muted)"},onPointerDown:k=>k.stopPropagation(),children:[E.jsx(ac,{size:9,style:{flexShrink:0}}),E.jsx("input",{type:"range",min:5,max:90,value:Math.round(p*100),onChange:k=>t({...e,opacity:k.target.value/100}),style:{width:72,accentColor:"var(--color-accent)",cursor:"pointer"},title:"Opacity"}),E.jsxs("span",{style:{fontFamily:"monospace",color:"var(--color-accent)",minWidth:28},children:[Math.round(p*100),"%"]}),E.jsx("button",{onClick:r,title:"Remove reference",style:{color:"var(--color-text-muted)",lineHeight:1,padding:"0 2px"},className:"hover:text-red-400",children:E.jsx(vo,{size:11})})]})]})}function yd(s){return getComputedStyle(document.documentElement).getPropertyValue(s).trim()}const fS={front:"← left   right →",back:"← right  left →",left:"← front  back →",right:"← back   front →",top:"← left   right →",bottom:"← left   right →"};function hS(){const s=Re.useRef(null),e=Re.useRef(null),{layers:t,pixelSize:r,canvasWidth:o,canvasHeight:l,depthDimension:c,showGrid:u,showDepthText:f,activeTool:h,activeView:p}=rt(),g=c,{view2d:x,depthMap:v}=Re.useMemo(()=>{const C=rr(t,o,l,g);return{view2d:D0(C,p,o,l,g),depthMap:Ly(C,p,o,l,g)}},[t,p,o,l,g]),{w:M,h:w}=Gf(p,o,l,g),{onPointerDown:_,onPointerMove:y,onPointerUp:A}=uS(e);return Re.useEffect(()=>{var B,K,W,ae,le,de,oe;const C=s.current;if(!C||!x.length)return;const T=C.getContext("2d"),k=M*r,L=w*r;C.width=k,C.height=L;const D=yd("--color-surface")||"#1a130a",z=yd("--color-canvasBg")||"#241a0c",I=yd("--color-border")||"#7a5c2e";for(let V=0;V<w;V++)for(let ce=0;ce<M;ce++){const te=ce*r,F=V*r,ee=((B=x[V])==null?void 0:B[ce])??"transparent";T.fillStyle=ee==="transparent"?(ce+V)%2===0?D:z:ee,T.fillRect(te,F,r,r)}if(v.length)for(let te=0;te<w;te++)for(let F=0;F<M;F++){const ee=(K=v[te])==null?void 0:K[F];if(ee==null)continue;const Te=F*r,q=te*r,he=(W=v[te])==null?void 0:W[F-1],ye=(ae=v[te])==null?void 0:ae[F+1],xe=(le=v[te-1])==null?void 0:le[F],Ce=(de=v[te+1])==null?void 0:de[F],Le=(pt,mt,Nt,X,Kt)=>{const ct=T.createLinearGradient(pt,mt,Nt,X);ct.addColorStop(0,`rgba(0,0,0,${Kt.toFixed(3)})`),ct.addColorStop(1,"rgba(0,0,0,0)"),T.fillStyle=ct,T.fillRect(Te,q,r,r)},Ze=r*.6;if(he!=null&&he<ee){const pt=Math.min((ee-he)/g,1)*.65;Le(Te,q,Te+Ze,q,pt)}if(xe!=null&&xe<ee){const pt=Math.min((ee-xe)/g,1)*.65;Le(Te,q,Te,q+Ze,pt)}if(ye!=null&&ye<ee){const pt=Math.min((ee-ye)/g,1)*.65;Le(Te+r,q,Te+r-Ze,q,pt)}if(Ce!=null&&Ce<ee){const pt=Math.min((ee-Ce)/g,1)*.65;Le(Te,q+r,Te,q+r-Ze,pt)}}if(u&&r>=5){T.strokeStyle=I+"44",T.lineWidth=.5;for(let V=0;V<=M;V++)T.beginPath(),T.moveTo(V*r,0),T.lineTo(V*r,L),T.stroke();for(let V=0;V<=w;V++)T.beginPath(),T.moveTo(0,V*r),T.lineTo(k,V*r),T.stroke()}if(f&&r>=10&&v.length){const V=Math.max(7,Math.floor(r*.38));T.font=`bold ${V}px monospace`,T.textAlign="center",T.textBaseline="middle";for(let ce=0;ce<w;ce++)for(let te=0;te<M;te++){const F=(oe=v[ce])==null?void 0:oe[te];if(F==null)continue;const ee=te*r+r/2,Te=ce*r+r/2,q=F>0?`+${F}`:String(F);T.fillStyle="rgba(0,0,0,0.55)",T.fillText(q,ee+.5,Te+.5),T.fillStyle="rgba(255,255,255,0.85)",T.fillText(q,ee,Te)}}const P=fS[p];P&&k>60&&(T.font=`${Math.max(8,r*.55)}px monospace`,T.fillStyle=I+"aa",T.textAlign="left",T.textBaseline="top",T.fillText(P,4,4))},[x,v,M,w,r,u,f,p]),E.jsx("div",{className:"flex items-center justify-center w-full h-full overflow-auto p-4",children:E.jsxs("div",{ref:e,className:"relative flex-shrink-0",style:{boxShadow:"0 0 0 2px var(--color-border), 0 0 0 4px var(--color-surface), 0 8px 40px rgba(0,0,0,0.9)",cursor:pS(h)},onPointerDown:_,onPointerMove:y,onPointerUp:A,onPointerLeave:A,children:[E.jsx("canvas",{ref:s,style:{width:M*r,height:w*r,imageRendering:"pixelated",display:"block"}}),E.jsx(dS,{pixelSize:r})]})})}function pS(s){switch(s){case"pencil":return"crosshair";case"eraser":return"cell";case"fill":return"copy";default:return"crosshair"}}const mS="modulepreload",gS=function(s){return"/"+s},Zm={},xS=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),f=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));o=c(t.map(h=>{if(h=gS(h),h in Zm)return;Zm[h]=!0;const p=h.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const x=document.createElement("link");if(x.rel=p?"stylesheet":mS,p||(x.as="script"),x.crossOrigin="",x.href=h,f&&x.setAttribute("nonce",f),document.head.appendChild(x),p)return new Promise((v,M)=>{x.addEventListener("load",v),x.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return o.then(c=>{for(const u of c||[])u.status==="rejected"&&l(u.reason);return e().catch(l)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ac="170",fo={ROTATE:0,DOLLY:1,PAN:2},lo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vS=0,Qm=1,_S=2,F0=1,yS=2,Qi=3,zr=0,Xn=1,Ti=2,Or=0,ho=1,Jm=2,eg=3,tg=4,SS=5,ds=100,MS=101,ES=102,wS=103,TS=104,bS=200,AS=201,CS=202,RS=203,nf=204,rf=205,PS=206,LS=207,NS=208,DS=209,IS=210,US=211,kS=212,FS=213,OS=214,sf=0,of=1,af=2,_o=3,lf=4,cf=5,uf=6,df=7,Wf=0,zS=1,BS=2,sr=0,VS=1,HS=2,GS=3,O0=4,jS=5,WS=6,XS=7,z0=300,yo=301,So=302,ff=303,hf=304,Cc=306,xc=1e3,kr=1001,vc=1002,hi=1003,B0=1004,pa=1005,bi=1006,lc=1007,Fr=1008,ar=1009,V0=1010,H0=1011,ya=1012,Xf=1013,ms=1014,nr=1015,Ea=1016,Yf=1017,$f=1018,Mo=1020,G0=35902,j0=1021,W0=1022,di=1023,X0=1024,Y0=1025,po=1026,Eo=1027,$0=1028,qf=1029,q0=1030,Kf=1031,Zf=1033,cc=33776,uc=33777,dc=33778,fc=33779,pf=35840,mf=35841,gf=35842,xf=35843,vf=36196,_f=37492,yf=37496,Sf=37808,Mf=37809,Ef=37810,wf=37811,Tf=37812,bf=37813,Af=37814,Cf=37815,Rf=37816,Pf=37817,Lf=37818,Nf=37819,Df=37820,If=37821,hc=36492,Uf=36494,kf=36495,K0=36283,Ff=36284,Of=36285,zf=36286,YS=2300,$S=2301,qS=3200,KS=3201,Qf=0,ZS=1,er="",jn="srgb",To="srgb-linear",Rc="linear",kt="srgb",js=7680,ng=519,QS=512,JS=513,eM=514,Z0=515,tM=516,nM=517,iM=518,rM=519,ig=35044,rg="300 es",ir=2e3,_c=2001;class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sg=1234567;const mo=Math.PI/180,Sa=180/Math.PI;function bo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]).toLowerCase()}function Tn(s,e,t){return Math.max(e,Math.min(t,s))}function Jf(s,e){return(s%e+e)%e}function sM(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function oM(s,e,t){return s!==e?(t-s)/(e-s):0}function _a(s,e,t){return(1-t)*s+t*e}function aM(s,e,t,r){return _a(s,e,1-Math.exp(-t*r))}function lM(s,e=1){return e-Math.abs(Jf(s,e*2)-e)}function cM(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function uM(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function dM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function fM(s,e){return s+Math.random()*(e-s)}function hM(s){return s*(.5-Math.random())}function pM(s){s!==void 0&&(sg=s);let e=sg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mM(s){return s*mo}function gM(s){return s*Sa}function xM(s){return(s&s-1)===0&&s!==0}function vM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _M(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yM(s,e,t,r,o){const l=Math.cos,c=Math.sin,u=l(t/2),f=c(t/2),h=l((e+r)/2),p=c((e+r)/2),g=l((e-r)/2),x=c((e-r)/2),v=l((r-e)/2),M=c((r-e)/2);switch(o){case"XYX":s.set(u*p,f*g,f*x,u*h);break;case"YZY":s.set(f*x,u*p,f*g,u*h);break;case"ZXZ":s.set(f*g,f*x,u*p,u*h);break;case"XZX":s.set(u*p,f*M,f*v,u*h);break;case"YXY":s.set(f*v,u*p,f*M,u*h);break;case"ZYZ":s.set(f*M,f*v,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ao(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yc={DEG2RAD:mo,RAD2DEG:Sa,generateUUID:bo,clamp:Tn,euclideanModulo:Jf,mapLinear:sM,inverseLerp:oM,lerp:_a,damp:aM,pingpong:lM,smoothstep:cM,smootherstep:uM,randInt:dM,randFloat:fM,randFloatSpread:hM,seededRandom:pM,degToRad:mM,radToDeg:gM,isPowerOfTwo:xM,ceilPowerOfTwo:vM,floorPowerOfTwo:_M,setQuaternionFromProperEuler:yM,normalize:Pn,denormalize:ao};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,r,o,l,c,u,f,h){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,u,f,h)}set(e,t,r,o,l,c,u,f,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=l,p[5]=f,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],u=r[3],f=r[6],h=r[1],p=r[4],g=r[7],x=r[2],v=r[5],M=r[8],w=o[0],_=o[3],y=o[6],A=o[1],C=o[4],T=o[7],k=o[2],L=o[5],D=o[8];return l[0]=c*w+u*A+f*k,l[3]=c*_+u*C+f*L,l[6]=c*y+u*T+f*D,l[1]=h*w+p*A+g*k,l[4]=h*_+p*C+g*L,l[7]=h*y+p*T+g*D,l[2]=x*w+v*A+M*k,l[5]=x*_+v*C+M*L,l[8]=x*y+v*T+M*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-r*l*p+r*u*f+o*l*h-o*c*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],g=p*c-u*h,x=u*f-p*l,v=h*l-c*f,M=t*g+r*x+o*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=g*w,e[1]=(o*h-p*r)*w,e[2]=(u*r-o*c)*w,e[3]=x*w,e[4]=(p*t-o*f)*w,e[5]=(o*l-u*t)*w,e[6]=v*w,e[7]=(r*f-h*t)*w,e[8]=(c*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,u){const f=Math.cos(l),h=Math.sin(l);return this.set(r*f,r*h,-r*(f*c+h*u)+c+e,-o*h,o*f,-o*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Sd.makeScale(e,t)),this}rotate(e){return this.premultiply(Sd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sd=new vt;function Q0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function SM(){const s=Sc("canvas");return s.style.display="block",s}const og={};function ma(s){s in og||(og[s]=!0,console.warn(s))}function MM(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function EM(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wM(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ct={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===kt&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===kt&&(s.r=go(s.r),s.g=go(s.g),s.b=go(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===er?Rc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ag=[.64,.33,.3,.6,.15,.06],lg=[.2126,.7152,.0722],cg=[.3127,.329],ug=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dg=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ct.define({[To]:{primaries:ag,whitePoint:cg,transfer:Rc,toXYZ:ug,fromXYZ:dg,luminanceCoefficients:lg,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:ag,whitePoint:cg,transfer:kt,toXYZ:ug,fromXYZ:dg,luminanceCoefficients:lg,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}});let Ws;class TM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=Sc("canvas")),Ws.width=e.width,Ws.height=e.height;const r=Ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=or(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(or(t[r]/255)*255):t[r]=or(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bM=0;class eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?l.push(Md(o[c].image)):l.push(Md(o[c]))}else l=Md(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Md(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?TM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AM=0;class In extends xs{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,r=kr,o=kr,l=bi,c=Fr,u=di,f=ar,h=In.DEFAULT_ANISOTROPY,p=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=bo(),this.name="",this.source=new eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xc:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xc:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=z0;In.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,h=f[0],p=f[4],g=f[8],x=f[1],v=f[5],M=f[9],w=f[2],_=f[6],y=f[10];if(Math.abs(p-x)<.01&&Math.abs(g-w)<.01&&Math.abs(M-_)<.01){if(Math.abs(p+x)<.1&&Math.abs(g+w)<.1&&Math.abs(M+_)<.1&&Math.abs(h+v+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,T=(v+1)/2,k=(y+1)/2,L=(p+x)/4,D=(g+w)/4,z=(M+_)/4;return C>T&&C>k?C<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(C),o=L/r,l=D/r):T>k?T<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(T),r=L/o,l=z/o):k<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),r=D/l,o=z/l),this.set(r,o,l,t),this}let A=Math.sqrt((_-M)*(_-M)+(g-w)*(g-w)+(x-p)*(x-p));return Math.abs(A)<.001&&(A=1),this.x=(_-M)/A,this.y=(g-w)/A,this.z=(x-p)/A,this.w=Math.acos((h+v+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CM extends xs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new In(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let u=0;u<c;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new eh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends CM{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class J0 extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RM extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,u){let f=r[o+0],h=r[o+1],p=r[o+2],g=r[o+3];const x=l[c+0],v=l[c+1],M=l[c+2],w=l[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(u===1){e[t+0]=x,e[t+1]=v,e[t+2]=M,e[t+3]=w;return}if(g!==w||f!==x||h!==v||p!==M){let _=1-u;const y=f*x+h*v+p*M+g*w,A=y>=0?1:-1,C=1-y*y;if(C>Number.EPSILON){const k=Math.sqrt(C),L=Math.atan2(k,y*A);_=Math.sin(_*L)/k,u=Math.sin(u*L)/k}const T=u*A;if(f=f*_+x*T,h=h*_+v*T,p=p*_+M*T,g=g*_+w*T,_===1-u){const k=1/Math.sqrt(f*f+h*h+p*p+g*g);f*=k,h*=k,p*=k,g*=k}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,c){const u=r[o],f=r[o+1],h=r[o+2],p=r[o+3],g=l[c],x=l[c+1],v=l[c+2],M=l[c+3];return e[t]=u*M+p*g+f*v-h*x,e[t+1]=f*M+p*x+h*g-u*v,e[t+2]=h*M+p*v+u*x-f*g,e[t+3]=p*M-u*g-f*x-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(r/2),p=u(o/2),g=u(l/2),x=f(r/2),v=f(o/2),M=f(l/2);switch(c){case"XYZ":this._x=x*p*g+h*v*M,this._y=h*v*g-x*p*M,this._z=h*p*M+x*v*g,this._w=h*p*g-x*v*M;break;case"YXZ":this._x=x*p*g+h*v*M,this._y=h*v*g-x*p*M,this._z=h*p*M-x*v*g,this._w=h*p*g+x*v*M;break;case"ZXY":this._x=x*p*g-h*v*M,this._y=h*v*g+x*p*M,this._z=h*p*M+x*v*g,this._w=h*p*g-x*v*M;break;case"ZYX":this._x=x*p*g-h*v*M,this._y=h*v*g+x*p*M,this._z=h*p*M-x*v*g,this._w=h*p*g+x*v*M;break;case"YZX":this._x=x*p*g+h*v*M,this._y=h*v*g+x*p*M,this._z=h*p*M-x*v*g,this._w=h*p*g-x*v*M;break;case"XZY":this._x=x*p*g-h*v*M,this._y=h*v*g-x*p*M,this._z=h*p*M+x*v*g,this._w=h*p*g+x*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],u=t[5],f=t[9],h=t[2],p=t[6],g=t[10],x=r+u+g;if(x>0){const v=.5/Math.sqrt(x+1);this._w=.25/v,this._x=(p-f)*v,this._y=(l-h)*v,this._z=(c-o)*v}else if(r>u&&r>g){const v=2*Math.sqrt(1+r-u-g);this._w=(p-f)/v,this._x=.25*v,this._y=(o+c)/v,this._z=(l+h)/v}else if(u>g){const v=2*Math.sqrt(1+u-r-g);this._w=(l-h)/v,this._x=(o+c)/v,this._y=.25*v,this._z=(f+p)/v}else{const v=2*Math.sqrt(1+g-r-u);this._w=(c-o)/v,this._x=(l+h)/v,this._y=(f+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=r*p+c*u+o*h-l*f,this._y=o*p+c*f+l*u-r*h,this._z=l*p+c*h+r*f-o*u,this._w=c*p-r*u-o*f-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let u=c*e._w+r*e._x+o*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const f=1-u*u;if(f<=Number.EPSILON){const v=1-t;return this._w=v*c+t*this._w,this._x=v*r+t*this._x,this._y=v*o+t*this._y,this._z=v*l+t*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),g=Math.sin((1-t)*p)/h,x=Math.sin(t*p)/h;return this._w=c*g+this._w*x,this._x=r*g+this._x*x,this._y=o*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*o-u*r),p=2*(u*t-l*o),g=2*(l*r-c*t);return this.x=t+f*h+c*g-u*p,this.y=r+f*p+u*h-l*g,this.z=o+f*g+l*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,u=t.y,f=t.z;return this.x=o*f-l*u,this.y=l*c-r*f,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ed.copy(this).projectOnVector(e),this.sub(Ed)}reflect(e){return this.sub(Ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ed=new J,fg=new Br;class wa{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=l.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Mi):Mi.fromBufferAttribute(l,c),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Nl.copy(r.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Dl.subVectors(this.max,aa),Xs.subVectors(e.a,aa),Ys.subVectors(e.b,aa),$s.subVectors(e.c,aa),Rr.subVectors(Ys,Xs),Pr.subVectors($s,Ys),ns.subVectors(Xs,$s);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-ns.z,ns.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,ns.z,0,-ns.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-ns.y,ns.x,0];return!wd(t,Xs,Ys,$s,Dl)||(t=[1,0,0,0,1,0,0,0,1],!wd(t,Xs,Ys,$s,Dl))?!1:(Il.crossVectors(Rr,Pr),t=[Il.x,Il.y,Il.z],wd(t,Xs,Ys,$s,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new J,new J,new J,new J,new J,new J,new J,new J],Mi=new J,Nl=new wa,Xs=new J,Ys=new J,$s=new J,Rr=new J,Pr=new J,ns=new J,aa=new J,Dl=new J,Il=new J,is=new J;function wd(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){is.fromArray(s,l);const u=o.x*Math.abs(is.x)+o.y*Math.abs(is.y)+o.z*Math.abs(is.z),f=e.dot(is),h=t.dot(is),p=r.dot(is);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const PM=new wa,la=new J,Td=new J;class Pc{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):PM.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(la,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Td)),this.expandByPoint(la.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new J,bd=new J,Ul=new J,Lr=new J,Ad=new J,kl=new J,Cd=new J;class Lc{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){bd.copy(e).add(t).multiplyScalar(.5),Ul.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(bd);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ul),u=Lr.dot(this.direction),f=-Lr.dot(Ul),h=Lr.lengthSq(),p=Math.abs(1-c*c);let g,x,v,M;if(p>0)if(g=c*f-u,x=c*u-f,M=l*p,g>=0)if(x>=-M)if(x<=M){const w=1/p;g*=w,x*=w,v=g*(g+c*x+2*u)+x*(c*g+x+2*f)+h}else x=l,g=Math.max(0,-(c*x+u)),v=-g*g+x*(x+2*f)+h;else x=-l,g=Math.max(0,-(c*x+u)),v=-g*g+x*(x+2*f)+h;else x<=-M?(g=Math.max(0,-(-c*l+u)),x=g>0?-l:Math.min(Math.max(-l,-f),l),v=-g*g+x*(x+2*f)+h):x<=M?(g=0,x=Math.min(Math.max(-l,-f),l),v=x*(x+2*f)+h):(g=Math.max(0,-(c*l+u)),x=g>0?l:Math.min(Math.max(-l,-f),l),v=-g*g+x*(x+2*f)+h);else x=c>0?-l:l,g=Math.max(0,-(c*x+u)),v=-g*g+x*(x+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(bd).addScaledVector(Ul,x),v}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),u=r-c,f=r+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,x=this.origin;return h>=0?(r=(e.min.x-x.x)*h,o=(e.max.x-x.x)*h):(r=(e.max.x-x.x)*h,o=(e.min.x-x.x)*h),p>=0?(l=(e.min.y-x.y)*p,c=(e.max.y-x.y)*p):(l=(e.max.y-x.y)*p,c=(e.min.y-x.y)*p),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),g>=0?(u=(e.min.z-x.z)*g,f=(e.max.z-x.z)*g):(u=(e.max.z-x.z)*g,f=(e.min.z-x.z)*g),r>f||u>o)||((u>r||r!==r)&&(r=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,r,o,l){Ad.subVectors(t,e),kl.subVectors(r,e),Cd.crossVectors(Ad,kl);let c=this.direction.dot(Cd),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Lr.subVectors(this.origin,e);const f=u*this.direction.dot(kl.crossVectors(Lr,kl));if(f<0)return null;const h=u*this.direction.dot(Ad.cross(Lr));if(h<0||f+h>c)return null;const p=-u*Lr.dot(Cd);return p<0?null:this.at(p/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,r,o,l,c,u,f,h,p,g,x,v,M,w,_){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,u,f,h,p,g,x,v,M,w,_)}set(e,t,r,o,l,c,u,f,h,p,g,x,v,M,w,_){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=c,y[9]=u,y[13]=f,y[2]=h,y[6]=p,y[10]=g,y[14]=x,y[3]=v,y[7]=M,y[11]=w,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/qs.setFromMatrixColumn(e,0).length(),l=1/qs.setFromMatrixColumn(e,1).length(),c=1/qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),u=Math.sin(r),f=Math.cos(o),h=Math.sin(o),p=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=c*p,v=c*g,M=u*p,w=u*g;t[0]=f*p,t[4]=-f*g,t[8]=h,t[1]=v+M*h,t[5]=x-w*h,t[9]=-u*f,t[2]=w-x*h,t[6]=M+v*h,t[10]=c*f}else if(e.order==="YXZ"){const x=f*p,v=f*g,M=h*p,w=h*g;t[0]=x+w*u,t[4]=M*u-v,t[8]=c*h,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=v*u-M,t[6]=w+x*u,t[10]=c*f}else if(e.order==="ZXY"){const x=f*p,v=f*g,M=h*p,w=h*g;t[0]=x-w*u,t[4]=-c*g,t[8]=M+v*u,t[1]=v+M*u,t[5]=c*p,t[9]=w-x*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const x=c*p,v=c*g,M=u*p,w=u*g;t[0]=f*p,t[4]=M*h-v,t[8]=x*h+w,t[1]=f*g,t[5]=w*h+x,t[9]=v*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const x=c*f,v=c*h,M=u*f,w=u*h;t[0]=f*p,t[4]=w-x*g,t[8]=M*g+v,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=v*g+M,t[10]=x-w*g}else if(e.order==="XZY"){const x=c*f,v=c*h,M=u*f,w=u*h;t[0]=f*p,t[4]=-g,t[8]=h*p,t[1]=x*g+w,t[5]=c*p,t[9]=v*g-M,t[2]=M*g-v,t[6]=u*p,t[10]=w*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LM,e,NM)}lookAt(e,t,r){const o=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Nr.crossVectors(r,Zn),Nr.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Nr.crossVectors(r,Zn)),Nr.normalize(),Fl.crossVectors(Zn,Nr),o[0]=Nr.x,o[4]=Fl.x,o[8]=Zn.x,o[1]=Nr.y,o[5]=Fl.y,o[9]=Zn.y,o[2]=Nr.z,o[6]=Fl.z,o[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],u=r[4],f=r[8],h=r[12],p=r[1],g=r[5],x=r[9],v=r[13],M=r[2],w=r[6],_=r[10],y=r[14],A=r[3],C=r[7],T=r[11],k=r[15],L=o[0],D=o[4],z=o[8],I=o[12],P=o[1],B=o[5],K=o[9],W=o[13],ae=o[2],le=o[6],de=o[10],oe=o[14],V=o[3],ce=o[7],te=o[11],F=o[15];return l[0]=c*L+u*P+f*ae+h*V,l[4]=c*D+u*B+f*le+h*ce,l[8]=c*z+u*K+f*de+h*te,l[12]=c*I+u*W+f*oe+h*F,l[1]=p*L+g*P+x*ae+v*V,l[5]=p*D+g*B+x*le+v*ce,l[9]=p*z+g*K+x*de+v*te,l[13]=p*I+g*W+x*oe+v*F,l[2]=M*L+w*P+_*ae+y*V,l[6]=M*D+w*B+_*le+y*ce,l[10]=M*z+w*K+_*de+y*te,l[14]=M*I+w*W+_*oe+y*F,l[3]=A*L+C*P+T*ae+k*V,l[7]=A*D+C*B+T*le+k*ce,l[11]=A*z+C*K+T*de+k*te,l[15]=A*I+C*W+T*oe+k*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],u=e[5],f=e[9],h=e[13],p=e[2],g=e[6],x=e[10],v=e[14],M=e[3],w=e[7],_=e[11],y=e[15];return M*(+l*f*g-o*h*g-l*u*x+r*h*x+o*u*v-r*f*v)+w*(+t*f*v-t*h*x+l*c*x-o*c*v+o*h*p-l*f*p)+_*(+t*h*g-t*u*v-l*c*g+r*c*v+l*u*p-r*h*p)+y*(-o*u*p-t*f*g+t*u*x+o*c*g-r*c*x+r*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],g=e[9],x=e[10],v=e[11],M=e[12],w=e[13],_=e[14],y=e[15],A=g*_*h-w*x*h+w*f*v-u*_*v-g*f*y+u*x*y,C=M*x*h-p*_*h-M*f*v+c*_*v+p*f*y-c*x*y,T=p*w*h-M*g*h+M*u*v-c*w*v-p*u*y+c*g*y,k=M*g*f-p*w*f-M*u*x+c*w*x+p*u*_-c*g*_,L=t*A+r*C+o*T+l*k;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=A*D,e[1]=(w*x*l-g*_*l-w*o*v+r*_*v+g*o*y-r*x*y)*D,e[2]=(u*_*l-w*f*l+w*o*h-r*_*h-u*o*y+r*f*y)*D,e[3]=(g*f*l-u*x*l-g*o*h+r*x*h+u*o*v-r*f*v)*D,e[4]=C*D,e[5]=(p*_*l-M*x*l+M*o*v-t*_*v-p*o*y+t*x*y)*D,e[6]=(M*f*l-c*_*l-M*o*h+t*_*h+c*o*y-t*f*y)*D,e[7]=(c*x*l-p*f*l+p*o*h-t*x*h-c*o*v+t*f*v)*D,e[8]=T*D,e[9]=(M*g*l-p*w*l-M*r*v+t*w*v+p*r*y-t*g*y)*D,e[10]=(c*w*l-M*u*l+M*r*h-t*w*h-c*r*y+t*u*y)*D,e[11]=(p*u*l-c*g*l-p*r*h+t*g*h+c*r*v-t*u*v)*D,e[12]=k*D,e[13]=(p*w*o-M*g*o+M*r*x-t*w*x-p*r*_+t*g*_)*D,e[14]=(M*u*o-c*w*o-M*r*f+t*w*f+c*r*_-t*u*_)*D,e[15]=(c*g*o-p*u*o+p*r*f-t*g*f-c*r*x+t*u*x)*D,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,u=e.y,f=e.z,h=l*c,p=l*u;return this.set(h*c+r,h*u-o*f,h*f+o*u,0,h*u+o*f,p*u+r,p*f-o*c,0,h*f-o*u,p*f+o*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,u=t._z,f=t._w,h=l+l,p=c+c,g=u+u,x=l*h,v=l*p,M=l*g,w=c*p,_=c*g,y=u*g,A=f*h,C=f*p,T=f*g,k=r.x,L=r.y,D=r.z;return o[0]=(1-(w+y))*k,o[1]=(v+T)*k,o[2]=(M-C)*k,o[3]=0,o[4]=(v-T)*L,o[5]=(1-(x+y))*L,o[6]=(_+A)*L,o[7]=0,o[8]=(M+C)*D,o[9]=(_-A)*D,o[10]=(1-(x+w))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=qs.set(o[0],o[1],o[2]).length();const c=qs.set(o[4],o[5],o[6]).length(),u=qs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Ei.copy(this);const h=1/l,p=1/c,g=1/u;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=p,Ei.elements[5]*=p,Ei.elements[6]*=p,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,t.setFromRotationMatrix(Ei),r.x=l,r.y=c,r.z=u,this}makePerspective(e,t,r,o,l,c,u=ir){const f=this.elements,h=2*l/(t-e),p=2*l/(r-o),g=(t+e)/(t-e),x=(r+o)/(r-o);let v,M;if(u===ir)v=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(u===_c)v=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=p,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,c,u=ir){const f=this.elements,h=1/(t-e),p=1/(r-o),g=1/(c-l),x=(t+e)*h,v=(r+o)*p;let M,w;if(u===ir)M=(c+l)*g,w=-2*g;else if(u===_c)M=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-x,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-v,f[2]=0,f[6]=0,f[10]=w,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const qs=new J,Ei=new Bt,LM=new J(0,0,0),NM=new J(1,1,1),Nr=new J,Fl=new J,Zn=new J,hg=new Bt,pg=new Br;class Ai{constructor(e=0,t=0,r=0,o=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],u=o[8],f=o[1],h=o[5],p=o[9],g=o[2],x=o[6],v=o[10];switch(t){case"XYZ":this._y=Math.asin(Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Tn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,v),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-Tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pg.setFromEuler(this),this.setFromQuaternion(pg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DM=0;const mg=new J,Ks=new Br,qi=new Bt,Ol=new J,ca=new J,IM=new J,UM=new Br,gg=new J(1,0,0),xg=new J(0,1,0),vg=new J(0,0,1),_g={type:"added"},kM={type:"removed"},Zs={type:"childadded",child:null},Rd={type:"childremoved",child:null};class mn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new J,t=new Ai,r=new Br,o=new J(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new vt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(gg,e)}rotateY(e){return this.rotateOnAxis(xg,e)}rotateZ(e){return this.rotateOnAxis(vg,e)}translateOnAxis(e,t){return mg.copy(e).applyQuaternion(this.quaternion),this.position.add(mg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gg,e)}translateY(e){return this.translateOnAxis(xg,e)}translateZ(e){return this.translateOnAxis(vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ol.copy(e):Ol.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(ca,Ol,this.up):qi.lookAt(Ol,ca,this.up),this.quaternion.setFromRotationMatrix(qi),o&&(qi.extractRotation(o.matrixWorld),Ks.setFromRotationMatrix(qi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_g),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kM),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_g),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,IM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,UM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const g=f[h];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(l(e.materials,this.material[f]));o.material=u}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(l(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),p=c(e.images),g=c(e.shapes),x=c(e.skeletons),v=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),v.length>0&&(r.animations=v),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}mn.DEFAULT_UP=new J(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new J,Ki=new J,Pd=new J,Zi=new J,Qs=new J,Js=new J,yg=new J,Ld=new J,Nd=new J,Dd=new J,Id=new $t,Ud=new $t,kd=new $t;class ui{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),wi.subVectors(e,t),o.cross(wi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){wi.subVectors(o,t),Ki.subVectors(r,t),Pd.subVectors(e,t);const c=wi.dot(wi),u=wi.dot(Ki),f=wi.dot(Pd),h=Ki.dot(Ki),p=Ki.dot(Pd),g=c*h-u*u;if(g===0)return l.set(0,0,0),null;const x=1/g,v=(h*f-u*p)*x,M=(c*p-u*f)*x;return l.set(1-v-M,M,v)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,r,o,l,c,u,f){return this.getBarycoord(e,t,r,o,Zi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Zi.x),f.addScaledVector(c,Zi.y),f.addScaledVector(u,Zi.z),f)}static getInterpolatedAttribute(e,t,r,o,l,c){return Id.setScalar(0),Ud.setScalar(0),kd.setScalar(0),Id.fromBufferAttribute(e,t),Ud.fromBufferAttribute(e,r),kd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Id,l.x),c.addScaledVector(Ud,l.y),c.addScaledVector(kd,l.z),c}static isFrontFacing(e,t,r,o){return wi.subVectors(r,t),Ki.subVectors(e,t),wi.cross(Ki).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),wi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ui.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,u;Qs.subVectors(o,r),Js.subVectors(l,r),Ld.subVectors(e,r);const f=Qs.dot(Ld),h=Js.dot(Ld);if(f<=0&&h<=0)return t.copy(r);Nd.subVectors(e,o);const p=Qs.dot(Nd),g=Js.dot(Nd);if(p>=0&&g<=p)return t.copy(o);const x=f*g-p*h;if(x<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(r).addScaledVector(Qs,c);Dd.subVectors(e,l);const v=Qs.dot(Dd),M=Js.dot(Dd);if(M>=0&&v<=M)return t.copy(l);const w=v*h-f*M;if(w<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(r).addScaledVector(Js,u);const _=p*M-v*g;if(_<=0&&g-p>=0&&v-M>=0)return yg.subVectors(l,o),u=(g-p)/(g-p+(v-M)),t.copy(o).addScaledVector(yg,u);const y=1/(_+w+x);return c=w*y,u=x*y,t.copy(r).addScaledVector(Qs,c).addScaledVector(Js,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},zl={h:0,s:0,l:0};function Fd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class yt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Ct.workingColorSpace){if(e=Jf(e,1),t=Tn(t,0,1),r=Tn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Fd(c,l,e+1/3),this.g=Fd(c,l,e),this.b=Fd(c,l,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,t=jn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const r=ex[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Ct.fromWorkingColorSpace(En.copy(this),e),Math.round(Tn(En.r*255,0,255))*65536+Math.round(Tn(En.g*255,0,255))*256+Math.round(Tn(En.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(En.copy(this),t);const r=En.r,o=En.g,l=En.b,c=Math.max(r,o,l),u=Math.min(r,o,l);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const g=c-u;switch(h=p<=.5?g/(c+u):g/(2-c-u),c){case r:f=(o-l)/g+(o<l?6:0);break;case o:f=(l-r)/g+2;break;case l:f=(r-o)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=jn){Ct.fromWorkingColorSpace(En.copy(this),e);const t=En.r,r=En.g,o=En.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(zl);const r=_a(Dr.h,zl.h,t),o=_a(Dr.s,zl.s,t),l=_a(Dr.l,zl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new yt;yt.NAMES=ex;let FM=0;class vs extends xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=bo(),this.name="",this.blending=ho,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nf,this.blendDst=rf,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(r.blending=this.blending),this.side!==zr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nf&&(r.blendSrc=this.blendSrc),this.blendDst!==rf&&(r.blendDst=this.blendDst),this.blendEquation!==ds&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ng&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const u in l){const f=l[u];delete f.metadata,c.push(f)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ma extends vs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new J,Bl=new ft;class fn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=ig,this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Bl.fromBufferAttribute(this,t),Bl.applyMatrix3(e),this.setXY(t,Bl.x,Bl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ao(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array),o=Pn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array),o=Pn(o,this.array),l=Pn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ig&&(e.usage=this.usage),e}}class tx extends fn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class nx extends fn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class sn extends fn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let OM=0;const ci=new Bt,Od=new mn,eo=new J,Qn=new wa,ua=new wa,dn=new J;class ei extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q0(e)?nx:tx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,r){return ci.makeTranslation(e,t,r),this.applyMatrix4(ci),this}scale(e,t,r){return ci.makeScale(e,t,r),this.applyMatrix4(ci),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new sn(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Qn.setFromBufferAttribute(l),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const u=t[l];ua.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(Qn.min,ua.min),Qn.expandByPoint(dn),dn.addVectors(Qn.max,ua.max),Qn.expandByPoint(dn)):(Qn.expandByPoint(ua.min),Qn.expandByPoint(ua.max))}Qn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)dn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(dn));if(t)for(let l=0,c=t.length;l<c;l++){const u=t[l],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)dn.fromBufferAttribute(u,h),f&&(eo.fromBufferAttribute(e,h),dn.add(eo)),o=Math.max(o,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let z=0;z<r.count;z++)u[z]=new J,f[z]=new J;const h=new J,p=new J,g=new J,x=new ft,v=new ft,M=new ft,w=new J,_=new J;function y(z,I,P){h.fromBufferAttribute(r,z),p.fromBufferAttribute(r,I),g.fromBufferAttribute(r,P),x.fromBufferAttribute(l,z),v.fromBufferAttribute(l,I),M.fromBufferAttribute(l,P),p.sub(h),g.sub(h),v.sub(x),M.sub(x);const B=1/(v.x*M.y-M.x*v.y);isFinite(B)&&(w.copy(p).multiplyScalar(M.y).addScaledVector(g,-v.y).multiplyScalar(B),_.copy(g).multiplyScalar(v.x).addScaledVector(p,-M.x).multiplyScalar(B),u[z].add(w),u[I].add(w),u[P].add(w),f[z].add(_),f[I].add(_),f[P].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let z=0,I=A.length;z<I;++z){const P=A[z],B=P.start,K=P.count;for(let W=B,ae=B+K;W<ae;W+=3)y(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const C=new J,T=new J,k=new J,L=new J;function D(z){k.fromBufferAttribute(o,z),L.copy(k);const I=u[z];C.copy(I),C.sub(k.multiplyScalar(k.dot(I))).normalize(),T.crossVectors(L,I);const B=T.dot(f[z])<0?-1:1;c.setXYZW(z,C.x,C.y,C.z,B)}for(let z=0,I=A.length;z<I;++z){const P=A[z],B=P.start,K=P.count;for(let W=B,ae=B+K;W<ae;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,v=r.count;x<v;x++)r.setXYZ(x,0,0,0);const o=new J,l=new J,c=new J,u=new J,f=new J,h=new J,p=new J,g=new J;if(e)for(let x=0,v=e.count;x<v;x+=3){const M=e.getX(x+0),w=e.getX(x+1),_=e.getX(x+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,_),p.subVectors(c,l),g.subVectors(o,l),p.cross(g),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,_),u.add(p),f.add(p),h.add(p),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(_,h.x,h.y,h.z)}else for(let x=0,v=t.count;x<v;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),p.subVectors(c,l),g.subVectors(o,l),p.cross(g),r.setXYZ(x+0,p.x,p.y,p.z),r.setXYZ(x+1,p.x,p.y,p.z),r.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,g=u.normalized,x=new h.constructor(f.length*p);let v=0,M=0;for(let w=0,_=f.length;w<_;w++){u.isInterleavedBufferAttribute?v=f[w]*u.data.stride+u.offset:v=f[w]*p;for(let y=0;y<p;y++)x[M++]=h[v++]}return new fn(x,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,r=this.index.array,o=this.attributes;for(const u in o){const f=o[u],h=e(f,r);t.setAttribute(u,h)}const l=this.morphAttributes;for(const u in l){const f=[],h=l[u];for(let p=0,g=h.length;p<g;p++){const x=h[p],v=e(x,r);f.push(v)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let g=0,x=h.length;g<x;g++){const v=h[g];p.push(v.toJSON(e.data))}p.length>0&&(o[f]=p,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const l=e.morphAttributes;for(const h in l){const p=[],g=l[h];for(let x=0,v=g.length;x<v;x++)p.push(g[x].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sg=new Bt,rs=new Lc,Vl=new Pc,Mg=new J,Hl=new J,Gl=new J,jl=new J,zd=new J,Wl=new J,Eg=new J,Xl=new J;class Wn extends mn{constructor(e=new ei,t=new Ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(l&&u){Wl.set(0,0,0);for(let f=0,h=l.length;f<h;f++){const p=u[f],g=l[f];p!==0&&(zd.fromBufferAttribute(g,e),c?Wl.addScaledVector(zd,p):Wl.addScaledVector(zd.sub(t),p))}t.add(Wl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(l),rs.copy(e.ray).recast(e.near),!(Vl.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Vl,Mg)===null||rs.origin.distanceToSquared(Mg)>(e.far-e.near)**2))&&(Sg.copy(l).invert(),rs.copy(e.ray).applyMatrix4(Sg),!(r.boundingBox!==null&&rs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,u=l.index,f=l.attributes.position,h=l.attributes.uv,p=l.attributes.uv1,g=l.attributes.normal,x=l.groups,v=l.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,w=x.length;M<w;M++){const _=x[M],y=c[_.materialIndex],A=Math.max(_.start,v.start),C=Math.min(u.count,Math.min(_.start+_.count,v.start+v.count));for(let T=A,k=C;T<k;T+=3){const L=u.getX(T),D=u.getX(T+1),z=u.getX(T+2);o=Yl(this,y,e,r,h,p,g,L,D,z),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const M=Math.max(0,v.start),w=Math.min(u.count,v.start+v.count);for(let _=M,y=w;_<y;_+=3){const A=u.getX(_),C=u.getX(_+1),T=u.getX(_+2);o=Yl(this,c,e,r,h,p,g,A,C,T),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,w=x.length;M<w;M++){const _=x[M],y=c[_.materialIndex],A=Math.max(_.start,v.start),C=Math.min(f.count,Math.min(_.start+_.count,v.start+v.count));for(let T=A,k=C;T<k;T+=3){const L=T,D=T+1,z=T+2;o=Yl(this,y,e,r,h,p,g,L,D,z),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const M=Math.max(0,v.start),w=Math.min(f.count,v.start+v.count);for(let _=M,y=w;_<y;_+=3){const A=_,C=_+1,T=_+2;o=Yl(this,c,e,r,h,p,g,A,C,T),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function zM(s,e,t,r,o,l,c,u){let f;if(e.side===Xn?f=r.intersectTriangle(c,l,o,!0,u):f=r.intersectTriangle(o,l,c,e.side===zr,u),f===null)return null;Xl.copy(u),Xl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Xl);return h<t.near||h>t.far?null:{distance:h,point:Xl.clone(),object:s}}function Yl(s,e,t,r,o,l,c,u,f,h){s.getVertexPosition(u,Hl),s.getVertexPosition(f,Gl),s.getVertexPosition(h,jl);const p=zM(s,e,t,r,Hl,Gl,jl,Eg);if(p){const g=new J;ui.getBarycoord(Eg,Hl,Gl,jl,g),o&&(p.uv=ui.getInterpolatedAttribute(o,u,f,h,g,new ft)),l&&(p.uv1=ui.getInterpolatedAttribute(l,u,f,h,g,new ft)),c&&(p.normal=ui.getInterpolatedAttribute(c,u,f,h,g,new J),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const x={a:u,b:f,c:h,normal:new J,materialIndex:0};ui.getNormal(Hl,Gl,jl,x.normal),p.face=x,p.barycoord=g}return p}class Ao extends ei{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const u=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const f=[],h=[],p=[],g=[];let x=0,v=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new sn(h,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(g,2));function M(w,_,y,A,C,T,k,L,D,z,I){const P=T/D,B=k/z,K=T/2,W=k/2,ae=L/2,le=D+1,de=z+1;let oe=0,V=0;const ce=new J;for(let te=0;te<de;te++){const F=te*B-W;for(let ee=0;ee<le;ee++){const Te=ee*P-K;ce[w]=Te*A,ce[_]=F*C,ce[y]=ae,h.push(ce.x,ce.y,ce.z),ce[w]=0,ce[_]=0,ce[y]=L>0?1:-1,p.push(ce.x,ce.y,ce.z),g.push(ee/D),g.push(1-te/z),oe+=1}}for(let te=0;te<z;te++)for(let F=0;F<D;F++){const ee=x+F+le*te,Te=x+F+le*(te+1),q=x+(F+1)+le*(te+1),he=x+(F+1)+le*te;f.push(ee,Te,he),f.push(Te,q,he),V+=6}u.addGroup(v,V,I),v+=V,x+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Ln(s){const e={};for(let t=0;t<s.length;t++){const r=wo(s[t]);for(const o in r)e[o]=r[o]}return e}function BM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ix(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const VM={clone:wo,merge:Ln};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vr extends vs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=BM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class rx extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new J,wg=new ft,Tg=new ft;class Dn extends rx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,wg,Tg),t.subVectors(Tg,wg)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mo*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/f,t-=c.offsetY*r/h,o*=c.width/f,r*=c.height/h}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const to=-90,no=1;class jM extends mn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Dn(to,no,e,t);o.layers=this.layers,this.add(o);const l=new Dn(to,no,e,t);l.layers=this.layers,this.add(l);const c=new Dn(to,no,e,t);c.layers=this.layers,this.add(c);const u=new Dn(to,no,e,t);u.layers=this.layers,this.add(u);const f=new Dn(to,no,e,t);f.layers=this.layers,this.add(f);const h=new Dn(to,no,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,u,f]=t;for(const h of t)this.remove(h);if(e===ir)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===_c)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,u,f,h,p]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,u),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,p),e.setRenderTarget(g,x,v),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class sx extends In{constructor(e,t,r,o,l,c,u,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:yo,super(e,t,r,o,l,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WM extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new sx(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ao(5,5,5),l=new Vr({name:"CubemapFromEquirect",uniforms:wo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:Or});l.uniforms.tEquirect.value=t;const c=new Wn(o,l),u=t.minFilter;return t.minFilter===Fr&&(t.minFilter=bi),new jM(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}const Bd=new J,XM=new J,YM=new vt;class Ur{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Bd.subVectors(r,t).cross(XM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Bd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||YM.getNormalMatrix(e),o=this.coplanarPoint(Bd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new Pc,$l=new J;class nh{constructor(e=new Ur,t=new Ur,r=new Ur,o=new Ur,l=new Ur,c=new Ur){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(l),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ir){const r=this.planes,o=e.elements,l=o[0],c=o[1],u=o[2],f=o[3],h=o[4],p=o[5],g=o[6],x=o[7],v=o[8],M=o[9],w=o[10],_=o[11],y=o[12],A=o[13],C=o[14],T=o[15];if(r[0].setComponents(f-l,x-h,_-v,T-y).normalize(),r[1].setComponents(f+l,x+h,_+v,T+y).normalize(),r[2].setComponents(f+c,x+p,_+M,T+A).normalize(),r[3].setComponents(f-c,x-p,_-M,T-A).normalize(),r[4].setComponents(f-u,x-g,_-w,T-C).normalize(),t===ir)r[5].setComponents(f+u,x+g,_+w,T+C).normalize();else if(t===_c)r[5].setComponents(u,g,w,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if($l.x=o.normal.x>0?e.max.x:e.min.x,$l.y=o.normal.y>0?e.max.y:e.min.y,$l.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ox(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function $M(s){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,g=h.byteLength,x=s.createBuffer();s.bindBuffer(f,x),s.bufferData(f,h,p),u.onUploadCallback();let v;if(h instanceof Float32Array)v=s.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?v=s.HALF_FLOAT:v=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=s.SHORT;else if(h instanceof Uint32Array)v=s.UNSIGNED_INT;else if(h instanceof Int32Array)v=s.INT;else if(h instanceof Int8Array)v=s.BYTE;else if(h instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function r(u,f,h){const p=f.array,g=f.updateRanges;if(s.bindBuffer(h,u),g.length===0)s.bufferSubData(h,0,p);else{g.sort((v,M)=>v.start-M.start);let x=0;for(let v=1;v<g.length;v++){const M=g[x],w=g[v];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++x,g[x]=w)}g.length=x+1;for(let v=0,M=g.length;v<M;v++){const w=g[v];s.bufferSubData(h,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(s.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,f),h.version=u.version}}return{get:o,remove:l,update:c}}class Ta extends ei{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,u=Math.floor(r),f=Math.floor(o),h=u+1,p=f+1,g=e/u,x=t/f,v=[],M=[],w=[],_=[];for(let y=0;y<p;y++){const A=y*x-c;for(let C=0;C<h;C++){const T=C*g-l;M.push(T,-A,0),w.push(0,0,1),_.push(C/u),_.push(1-y/f)}}for(let y=0;y<f;y++)for(let A=0;A<u;A++){const C=A+h*y,T=A+h*(y+1),k=A+1+h*(y+1),L=A+1+h*y;v.push(C,T,L),v.push(T,k,L)}this.setIndex(v),this.setAttribute("position",new sn(M,3)),this.setAttribute("normal",new sn(w,3)),this.setAttribute("uv",new sn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var qM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,v1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T1="gl_FragColor = linearToOutputTexel( gl_FragColor );",b1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,V1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,H1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_w=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ww=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:qM,alphahash_pars_fragment:KM,alphamap_fragment:ZM,alphamap_pars_fragment:QM,alphatest_fragment:JM,alphatest_pars_fragment:e1,aomap_fragment:t1,aomap_pars_fragment:n1,batching_pars_vertex:i1,batching_vertex:r1,begin_vertex:s1,beginnormal_vertex:o1,bsdfs:a1,iridescence_fragment:l1,bumpmap_pars_fragment:c1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:d1,clipping_planes_pars_vertex:f1,clipping_planes_vertex:h1,color_fragment:p1,color_pars_fragment:m1,color_pars_vertex:g1,color_vertex:x1,common:v1,cube_uv_reflection_fragment:_1,defaultnormal_vertex:y1,displacementmap_pars_vertex:S1,displacementmap_vertex:M1,emissivemap_fragment:E1,emissivemap_pars_fragment:w1,colorspace_fragment:T1,colorspace_pars_fragment:b1,envmap_fragment:A1,envmap_common_pars_fragment:C1,envmap_pars_fragment:R1,envmap_pars_vertex:P1,envmap_physical_pars_fragment:V1,envmap_vertex:L1,fog_vertex:N1,fog_pars_vertex:D1,fog_fragment:I1,fog_pars_fragment:U1,gradientmap_pars_fragment:k1,lightmap_pars_fragment:F1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:z1,lights_pars_begin:B1,lights_toon_fragment:H1,lights_toon_pars_fragment:G1,lights_phong_fragment:j1,lights_phong_pars_fragment:W1,lights_physical_fragment:X1,lights_physical_pars_fragment:Y1,lights_fragment_begin:$1,lights_fragment_maps:q1,lights_fragment_end:K1,logdepthbuf_fragment:Z1,logdepthbuf_pars_fragment:Q1,logdepthbuf_pars_vertex:J1,logdepthbuf_vertex:eE,map_fragment:tE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:rE,metalnessmap_fragment:sE,metalnessmap_pars_fragment:oE,morphinstance_vertex:aE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:dE,normal_fragment_begin:fE,normal_fragment_maps:hE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:_E,clearcoat_pars_fragment:yE,iridescence_pars_fragment:SE,opaque_fragment:ME,packing:EE,premultiplied_alpha_fragment:wE,project_vertex:TE,dithering_fragment:bE,dithering_pars_fragment:AE,roughnessmap_fragment:CE,roughnessmap_pars_fragment:RE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:LE,shadowmap_vertex:NE,shadowmask_pars_fragment:DE,skinbase_vertex:IE,skinning_pars_vertex:UE,skinning_vertex:kE,skinnormal_vertex:FE,specularmap_fragment:OE,specularmap_pars_fragment:zE,tonemapping_fragment:BE,tonemapping_pars_fragment:VE,transmission_fragment:HE,transmission_pars_fragment:GE,uv_pars_fragment:jE,uv_pars_vertex:WE,uv_vertex:XE,worldpos_vertex:YE,background_vert:$E,background_frag:qE,backgroundCube_vert:KE,backgroundCube_frag:ZE,cube_vert:QE,cube_frag:JE,depth_vert:ew,depth_frag:tw,distanceRGBA_vert:nw,distanceRGBA_frag:iw,equirect_vert:rw,equirect_frag:sw,linedashed_vert:ow,linedashed_frag:aw,meshbasic_vert:lw,meshbasic_frag:cw,meshlambert_vert:uw,meshlambert_frag:dw,meshmatcap_vert:fw,meshmatcap_frag:hw,meshnormal_vert:pw,meshnormal_frag:mw,meshphong_vert:gw,meshphong_frag:xw,meshphysical_vert:vw,meshphysical_frag:_w,meshtoon_vert:yw,meshtoon_frag:Sw,points_vert:Mw,points_frag:Ew,shadow_vert:ww,shadow_frag:Tw,sprite_vert:bw,sprite_frag:Aw},Ne={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ui={basic:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new yt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Ln([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Ln([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new yt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Ln([Ne.points,Ne.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Ln([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Ln([Ne.common,Ne.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Ln([Ne.sprite,Ne.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Ln([Ne.common,Ne.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Ln([Ne.lights,Ne.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ui.physical={uniforms:Ln([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const ql={r:0,b:0,g:0},os=new Ai,Cw=new Bt;function Rw(s,e,t,r,o,l,c){const u=new yt(0);let f=l===!0?0:1,h,p,g=null,x=0,v=null;function M(A){let C=A.isScene===!0?A.background:null;return C&&C.isTexture&&(C=(A.backgroundBlurriness>0?t:e).get(C)),C}function w(A){let C=!1;const T=M(A);T===null?y(u,f):T&&T.isColor&&(y(T,1),C=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(A,C){const T=M(C);T&&(T.isCubeTexture||T.mapping===Cc)?(p===void 0&&(p=new Wn(new Ao(1,1,1),new Vr({name:"BackgroundCubeMaterial",uniforms:wo(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),os.copy(C.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Cw.makeRotationFromEuler(os)),p.material.toneMapped=Ct.getTransfer(T.colorSpace)!==kt,(g!==T||x!==T.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,g=T,x=T.version,v=s.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Wn(new Ta(2,2),new Vr({name:"BackgroundMaterial",uniforms:wo(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(T.colorSpace)!==kt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(g!==T||x!==T.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,g=T,x=T.version,v=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function y(A,C){A.getRGB(ql,ix(s)),r.buffers.color.setClear(ql.r,ql.g,ql.b,C,c)}return{getClearColor:function(){return u},setClearColor:function(A,C=1){u.set(A),f=C,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,y(u,f)},render:w,addToRenderList:_}}function Pw(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,c=!1;function u(P,B,K,W,ae){let le=!1;const de=g(W,K,B);l!==de&&(l=de,h(l.object)),le=v(P,W,K,ae),le&&M(P,W,K,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,T(P,B,K,W),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function f(){return s.createVertexArray()}function h(P){return s.bindVertexArray(P)}function p(P){return s.deleteVertexArray(P)}function g(P,B,K){const W=K.wireframe===!0;let ae=r[P.id];ae===void 0&&(ae={},r[P.id]=ae);let le=ae[B.id];le===void 0&&(le={},ae[B.id]=le);let de=le[W];return de===void 0&&(de=x(f()),le[W]=de),de}function x(P){const B=[],K=[],W=[];for(let ae=0;ae<t;ae++)B[ae]=0,K[ae]=0,W[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:W,object:P,attributes:{},index:null}}function v(P,B,K,W){const ae=l.attributes,le=B.attributes;let de=0;const oe=K.getAttributes();for(const V in oe)if(oe[V].location>=0){const te=ae[V];let F=le[V];if(F===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(F=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(F=P.instanceColor)),te===void 0||te.attribute!==F||F&&te.data!==F.data)return!0;de++}return l.attributesNum!==de||l.index!==W}function M(P,B,K,W){const ae={},le=B.attributes;let de=0;const oe=K.getAttributes();for(const V in oe)if(oe[V].location>=0){let te=le[V];te===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const F={};F.attribute=te,te&&te.data&&(F.data=te.data),ae[V]=F,de++}l.attributes=ae,l.attributesNum=de,l.index=W}function w(){const P=l.newAttributes;for(let B=0,K=P.length;B<K;B++)P[B]=0}function _(P){y(P,0)}function y(P,B){const K=l.newAttributes,W=l.enabledAttributes,ae=l.attributeDivisors;K[P]=1,W[P]===0&&(s.enableVertexAttribArray(P),W[P]=1),ae[P]!==B&&(s.vertexAttribDivisor(P,B),ae[P]=B)}function A(){const P=l.newAttributes,B=l.enabledAttributes;for(let K=0,W=B.length;K<W;K++)B[K]!==P[K]&&(s.disableVertexAttribArray(K),B[K]=0)}function C(P,B,K,W,ae,le,de){de===!0?s.vertexAttribIPointer(P,B,K,ae,le):s.vertexAttribPointer(P,B,K,W,ae,le)}function T(P,B,K,W){w();const ae=W.attributes,le=K.getAttributes(),de=B.defaultAttributeValues;for(const oe in le){const V=le[oe];if(V.location>=0){let ce=ae[oe];if(ce===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),ce!==void 0){const te=ce.normalized,F=ce.itemSize,ee=e.get(ce);if(ee===void 0)continue;const Te=ee.buffer,q=ee.type,he=ee.bytesPerElement,ye=q===s.INT||q===s.UNSIGNED_INT||ce.gpuType===Xf;if(ce.isInterleavedBufferAttribute){const xe=ce.data,Ce=xe.stride,Le=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<V.locationSize;Ze++)y(V.location+Ze,xe.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<V.locationSize;Ze++)_(V.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Ze=0;Ze<V.locationSize;Ze++)C(V.location+Ze,F/V.locationSize,q,te,Ce*he,(Le+F/V.locationSize*Ze)*he,ye)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<V.locationSize;xe++)y(V.location+xe,ce.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<V.locationSize;xe++)_(V.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let xe=0;xe<V.locationSize;xe++)C(V.location+xe,F/V.locationSize,q,te,F*he,F/V.locationSize*xe*he,ye)}}else if(de!==void 0){const te=de[oe];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(V.location,te);break;case 3:s.vertexAttrib3fv(V.location,te);break;case 4:s.vertexAttrib4fv(V.location,te);break;default:s.vertexAttrib1fv(V.location,te)}}}}A()}function k(){z();for(const P in r){const B=r[P];for(const K in B){const W=B[K];for(const ae in W)p(W[ae].object),delete W[ae];delete B[K]}delete r[P]}}function L(P){if(r[P.id]===void 0)return;const B=r[P.id];for(const K in B){const W=B[K];for(const ae in W)p(W[ae].object),delete W[ae];delete B[K]}delete r[P.id]}function D(P){for(const B in r){const K=r[B];if(K[P.id]===void 0)continue;const W=K[P.id];for(const ae in W)p(W[ae].object),delete W[ae];delete K[P.id]}}function z(){I(),c=!0,l!==o&&(l=o,h(l.object))}function I(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:z,resetDefaultState:I,dispose:k,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:_,disableUnusedAttributes:A}}function Lw(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function c(h,p,g){g!==0&&(s.drawArraysInstanced(r,h,p,g),t.update(p,r,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,g);let v=0;for(let M=0;M<g;M++)v+=p[M];t.update(v,r,1)}function f(h,p,g,x){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<h.length;M++)c(h[M],p[M],x[M]);else{v.multiDrawArraysInstancedWEBGL(r,h,0,p,0,x,0,g);let M=0;for(let w=0;w<g;w++)M+=p[w]*x[w];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Nw(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(D){return!(D!==di&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(D){const z=D===Ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==ar&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==nr&&!z)}function f(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:v,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:T,vertexTextures:k,maxSamples:L}}function Dw(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new Ur,u=new vt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const v=g.length!==0||x||r!==0||o;return o=x,r=g.length,v},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){t=p(g,x,0)},this.setState=function(g,x,v){const M=g.clippingPlanes,w=g.clipIntersection,_=g.clipShadows,y=s.get(g);if(!o||M===null||M.length===0||l&&!_)l?p(null):h();else{const A=l?0:r,C=A*4;let T=y.clippingState||null;f.value=T,T=p(M,x,C,v);for(let k=0;k!==C;++k)T[k]=t[k];y.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=A}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(g,x,v,M){const w=g!==null?g.length:0;let _=null;if(w!==0){if(_=f.value,M!==!0||_===null){const y=v+w*4,A=x.matrixWorldInverse;u.getNormalMatrix(A),(_===null||_.length<y)&&(_=new Float32Array(y));for(let C=0,T=v;C!==w;++C,T+=4)c.copy(g[C]).applyMatrix4(A,u),c.normal.toArray(_,T),_[T+3]=c.constant}f.value=_,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function Iw(s){let e=new WeakMap;function t(c,u){return u===ff?c.mapping=yo:u===hf&&(c.mapping=So),c}function r(c){if(c&&c.isTexture){const u=c.mapping;if(u===ff||u===hf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new WM(f.height);return h.fromEquirectangularTexture(s,c),e.set(c,h),c.addEventListener("dispose",o),t(h.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class ax extends rx{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,u=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(l,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const co=4,bg=[.125,.215,.35,.446,.526,.582],fs=20,Vd=new ax,Ag=new yt;let Hd=null,Gd=0,jd=0,Wd=!1;const cs=(1+Math.sqrt(5))/2,io=1/cs,Cg=[new J(-cs,io,0),new J(cs,io,0),new J(-io,0,cs),new J(io,0,cs),new J(0,cs,-io),new J(0,cs,io),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Gd,jd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yo||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Ea,format:di,colorSpace:To,depthBuffer:!1},o=Pg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uw(l)),this._blurMaterial=kw(l,e,t)}return o}_compileMaterial(e){const t=new Wn(this._lodPlanes[0],e);this._renderer.compile(t,Vd)}_sceneToCubeUV(e,t,r,o){const u=new Dn(90,1,t,r),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,x=p.toneMapping;p.getClearColor(Ag),p.toneMapping=sr,p.autoClear=!1;const v=new Ma({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),M=new Wn(new Ao,v);let w=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,w=!0):(v.color.copy(Ag),w=!0);for(let y=0;y<6;y++){const A=y%3;A===0?(u.up.set(0,f[y],0),u.lookAt(h[y],0,0)):A===1?(u.up.set(0,0,f[y]),u.lookAt(0,h[y],0)):(u.up.set(0,f[y],0),u.lookAt(0,0,h[y]));const C=this._cubeSize;Kl(o,A*C,y>2?C:0,C,C),p.setRenderTarget(o),w&&p.render(M,u),p.render(e,u)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=x,p.autoClear=g,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===yo||e.mapping===So;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Wn(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const f=this._cubeSize;Kl(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,Vd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),u=Cg[(o-l-1)%Cg.length];this._blur(e,l-1,l,c,u)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Wn(this._lodPlanes[o],h),x=h.uniforms,v=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*v):2*Math.PI/(2*fs-1),w=l/M,_=isFinite(l)?1+Math.floor(p*w):fs;_>fs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${fs}`);const y=[];let A=0;for(let D=0;D<fs;++D){const z=D/w,I=Math.exp(-z*z/2);y.push(I),D===0?A+=I:D<_&&(A+=2*I)}for(let D=0;D<y.length;D++)y[D]=y[D]/A;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=y,x.latitudinal.value=c==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:C}=this;x.dTheta.value=M,x.mipInt.value=C-r;const T=this._sizeLods[o],k=3*T*(o>C-co?o-C+co:0),L=4*(this._cubeSize-T);Kl(t,k,L,3*T,2*T),f.setRenderTarget(t),f.render(g,Vd)}}function Uw(s){const e=[],t=[],r=[];let o=s;const l=s-co+1+bg.length;for(let c=0;c<l;c++){const u=Math.pow(2,o);t.push(u);let f=1/u;c>s-co?f=bg[c-s+co-1]:c===0&&(f=0),r.push(f);const h=1/(u-2),p=-h,g=1+h,x=[p,p,g,p,g,g,p,p,g,g,p,g],v=6,M=6,w=3,_=2,y=1,A=new Float32Array(w*M*v),C=new Float32Array(_*M*v),T=new Float32Array(y*M*v);for(let L=0;L<v;L++){const D=L%3*2/3-1,z=L>2?0:-1,I=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];A.set(I,w*M*L),C.set(x,_*M*L);const P=[L,L,L,L,L,L];T.set(P,y*M*L)}const k=new ei;k.setAttribute("position",new fn(A,w)),k.setAttribute("uv",new fn(C,_)),k.setAttribute("faceIndex",new fn(T,y)),e.push(k),o>co&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Pg(s,e,t){const r=new gs(s,e,t);return r.texture.mapping=Cc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Kl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function kw(s,e,t){const r=new Float32Array(fs),o=new J(0,1,0);return new Vr({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Lg(){return new Vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Ng(){return new Vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fw(s){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const f=u.mapping,h=f===ff||f===hf,p=f===yo||f===So;if(h||p){let g=e.get(u);const x=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return t===null&&(t=new Rg(s)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return h&&v&&v.height>0||p&&v&&o(v)?(t===null&&(t=new Rg(s)),g=h?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",l),g.texture):null}}}return u}function o(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function l(u){const f=u.target;f.removeEventListener("dispose",l);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function Ow(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ma("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function zw(s,e,t,r){const o={},l=new WeakMap;function c(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);for(const M in x.morphAttributes){const w=x.morphAttributes[M];for(let _=0,y=w.length;_<y;_++)e.remove(w[_])}x.removeEventListener("dispose",c),delete o[x.id];const v=l.get(x);v&&(e.remove(v),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function u(g,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function f(g){const x=g.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER);const v=g.morphAttributes;for(const M in v){const w=v[M];for(let _=0,y=w.length;_<y;_++)e.update(w[_],s.ARRAY_BUFFER)}}function h(g){const x=[],v=g.index,M=g.attributes.position;let w=0;if(v!==null){const A=v.array;w=v.version;for(let C=0,T=A.length;C<T;C+=3){const k=A[C+0],L=A[C+1],D=A[C+2];x.push(k,L,L,D,D,k)}}else if(M!==void 0){const A=M.array;w=M.version;for(let C=0,T=A.length/3-1;C<T;C+=3){const k=C+0,L=C+1,D=C+2;x.push(k,L,L,D,D,k)}}else return;const _=new(Q0(x)?nx:tx)(x,1);_.version=w;const y=l.get(g);y&&e.remove(y),l.set(g,_)}function p(g){const x=l.get(g);if(x){const v=g.index;v!==null&&x.version<v.version&&h(g)}else h(g);return l.get(g)}return{get:u,update:f,getWireframeAttribute:p}}function Bw(s,e,t){let r;function o(x){r=x}let l,c;function u(x){l=x.type,c=x.bytesPerElement}function f(x,v){s.drawElements(r,v,l,x*c),t.update(v,r,1)}function h(x,v,M){M!==0&&(s.drawElementsInstanced(r,v,l,x*c,M),t.update(v,r,M))}function p(x,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,x,0,M);let _=0;for(let y=0;y<M;y++)_+=v[y];t.update(_,r,1)}function g(x,v,M,w){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<x.length;y++)h(x[y]/c,v[y],w[y]);else{_.multiDrawElementsInstancedWEBGL(r,v,0,l,x,0,w,0,M);let y=0;for(let A=0;A<M;A++)y+=v[A]*w[A];t.update(y,r,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function Vw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(l/3);break;case s.LINES:t.lines+=u*(l/2);break;case s.LINE_STRIP:t.lines+=u*(l-1);break;case s.LINE_LOOP:t.lines+=u*l;break;case s.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Hw(s,e,t){const r=new WeakMap,o=new $t;function l(c,u,f){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let x=r.get(u);if(x===void 0||x.count!==g){let P=function(){z.dispose(),r.delete(u),u.removeEventListener("dispose",P)};var v=P;x!==void 0&&x.texture.dispose();const M=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let T=0;M===!0&&(T=1),w===!0&&(T=2),_===!0&&(T=3);let k=u.attributes.position.count*T,L=1;k>e.maxTextureSize&&(L=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const D=new Float32Array(k*L*4*g),z=new J0(D,k,L,g);z.type=nr,z.needsUpdate=!0;const I=T*4;for(let B=0;B<g;B++){const K=y[B],W=A[B],ae=C[B],le=k*L*4*B;for(let de=0;de<K.count;de++){const oe=de*I;M===!0&&(o.fromBufferAttribute(K,de),D[le+oe+0]=o.x,D[le+oe+1]=o.y,D[le+oe+2]=o.z,D[le+oe+3]=0),w===!0&&(o.fromBufferAttribute(W,de),D[le+oe+4]=o.x,D[le+oe+5]=o.y,D[le+oe+6]=o.z,D[le+oe+7]=0),_===!0&&(o.fromBufferAttribute(ae,de),D[le+oe+8]=o.x,D[le+oe+9]=o.y,D[le+oe+10]=o.z,D[le+oe+11]=ae.itemSize===4?o.w:1)}}x={count:g,texture:z,size:new ft(k,L)},r.set(u,x),u.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let _=0;_<h.length;_++)M+=h[_];const w=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",h)}f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function Gw(s,e,t,r){let o=new WeakMap;function l(f){const h=r.render.frame,p=f.geometry,g=e.get(f,p);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==h&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,h))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==h&&(x.update(),o.set(x,h))}return g}function c(){o=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}class lx extends In{constructor(e,t,r,o,l,c,u,f,h,p=po){if(p!==po&&p!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===po&&(r=ms),r===void 0&&p===Eo&&(r=Mo),super(null,o,l,c,u,f,p,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:hi,this.minFilter=f!==void 0?f:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cx=new In,Dg=new lx(1,1),ux=new J0,dx=new RM,fx=new sx,Ig=[],Ug=[],kg=new Float32Array(16),Fg=new Float32Array(9),Og=new Float32Array(4);function Co(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Ig[o];if(l===void 0&&(l=new Float32Array(o),Ig[o]=l),e!==0){r.toArray(l,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(l,u)}return l}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Nc(s,e){let t=Ug[e];t===void 0&&(t=new Int32Array(e),Ug[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function jw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ww(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function Xw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function Yw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function $w(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;Og.set(r),s.uniformMatrix2fv(this.addr,!1,Og),an(t,r)}}function qw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;Fg.set(r),s.uniformMatrix3fv(this.addr,!1,Fg),an(t,r)}}function Kw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;kg.set(r),s.uniformMatrix4fv(this.addr,!1,kg),an(t,r)}}function Zw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Qw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function Jw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function eT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function tT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function iT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function rT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function sT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Dg.compareFunction=Z0,l=Dg):l=cx,t.setTexture2D(e||l,o)}function oT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||dx,o)}function aT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||fx,o)}function lT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||ux,o)}function cT(s){switch(s){case 5126:return jw;case 35664:return Ww;case 35665:return Xw;case 35666:return Yw;case 35674:return $w;case 35675:return qw;case 35676:return Kw;case 5124:case 35670:return Zw;case 35667:case 35671:return Qw;case 35668:case 35672:return Jw;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return lT}}function uT(s,e){s.uniform1fv(this.addr,e)}function dT(s,e){const t=Co(e,this.size,2);s.uniform2fv(this.addr,t)}function fT(s,e){const t=Co(e,this.size,3);s.uniform3fv(this.addr,t)}function hT(s,e){const t=Co(e,this.size,4);s.uniform4fv(this.addr,t)}function pT(s,e){const t=Co(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mT(s,e){const t=Co(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gT(s,e){const t=Co(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xT(s,e){s.uniform1iv(this.addr,e)}function vT(s,e){s.uniform2iv(this.addr,e)}function _T(s,e){s.uniform3iv(this.addr,e)}function yT(s,e){s.uniform4iv(this.addr,e)}function ST(s,e){s.uniform1uiv(this.addr,e)}function MT(s,e){s.uniform2uiv(this.addr,e)}function ET(s,e){s.uniform3uiv(this.addr,e)}function wT(s,e){s.uniform4uiv(this.addr,e)}function TT(s,e,t){const r=this.cache,o=e.length,l=Nc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||cx,l[c])}function bT(s,e,t){const r=this.cache,o=e.length,l=Nc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||dx,l[c])}function AT(s,e,t){const r=this.cache,o=e.length,l=Nc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||fx,l[c])}function CT(s,e,t){const r=this.cache,o=e.length,l=Nc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||ux,l[c])}function RT(s){switch(s){case 5126:return uT;case 35664:return dT;case 35665:return fT;case 35666:return hT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return xT;case 35667:case 35671:return vT;case 35668:case 35672:return _T;case 35669:case 35673:return yT;case 5125:return ST;case 36294:return MT;case 36295:return ET;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return CT}}class PT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=cT(t.type)}}class LT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RT(t.type)}}class NT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const u=o[l];u.setValue(e,t[u.id],r)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function zg(s,e){s.seq.push(e),s.map[e.id]=e}function DT(s,e,t){const r=s.name,o=r.length;for(Xd.lastIndex=0;;){const l=Xd.exec(r),c=Xd.lastIndex;let u=l[1];const f=l[2]==="]",h=l[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===o){zg(t,h===void 0?new PT(u,s,e):new LT(u,s,e));break}else{let g=t.map[u];g===void 0&&(g=new NT(u),zg(t,g)),t=g}}}class pc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);DT(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const u=t[l],f=r[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Bg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const IT=37297;let UT=0;function kT(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const Vg=new vt;function FT(s){Ct._getMatrix(Vg,Ct.workingColorSpace,s);const e=`mat3( ${Vg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Rc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+kT(s.getShaderSource(e),c)}else return o}function OT(s,e){const t=FT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zT(s,e){let t;switch(e){case VS:t="Linear";break;case HS:t="Reinhard";break;case GS:t="Cineon";break;case O0:t="ACESFilmic";break;case WS:t="AgX";break;case XS:t="Neutral";break;case jS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zl=new J;function BT(){Ct.getLuminanceCoefficients(Zl);const s=Zl.x.toFixed(4),e=Zl.y.toFixed(4),t=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function HT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function GT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function ga(s){return s!==""}function Gg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(s){return s.replace(jT,XT)}const WT=new Map;function XT(s,e){let t=_t[e];if(t===void 0){const r=WT.get(e);if(r!==void 0)t=_t[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bf(t)}const YT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(s){return s.replace(YT,$T)}function $T(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Xg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===F0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function KT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case yo:case So:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function QT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wf:e="ENVMAP_BLENDING_MULTIPLY";break;case zS:e="ENVMAP_BLENDING_MIX";break;case BS:e="ENVMAP_BLENDING_ADD";break}return e}function JT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function eb(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=qT(t),h=KT(t),p=ZT(t),g=QT(t),x=JT(t),v=VT(t),M=HT(l),w=o.createProgram();let _,y,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ga).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ga).join(`
`),y.length>0&&(y+=`
`)):(_=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),y=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?_t.tonemapping_pars_fragment:"",t.toneMapping!==sr?zT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,OT("linearToOutputTexel",t.outputColorSpace),BT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),c=Bf(c),c=Gg(c,t),c=jg(c,t),u=Bf(u),u=Gg(u,t),u=jg(u,t),c=Wg(c),u=Wg(u),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",t.glslVersion===rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const C=A+_+c,T=A+y+u,k=Bg(o,o.VERTEX_SHADER,C),L=Bg(o,o.FRAGMENT_SHADER,T);o.attachShader(w,k),o.attachShader(w,L),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function D(B){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(w).trim(),W=o.getShaderInfoLog(k).trim(),ae=o.getShaderInfoLog(L).trim();let le=!0,de=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,k,L);else{const oe=Hg(o,k,"vertex"),V=Hg(o,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+K+`
`+oe+`
`+V)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(W===""||ae==="")&&(de=!1);de&&(B.diagnostics={runnable:le,programLog:K,vertexShader:{log:W,prefix:_},fragmentShader:{log:ae,prefix:y}})}o.deleteShader(k),o.deleteShader(L),z=new pc(o,w),I=GT(o,w)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let I;this.getAttributes=function(){return I===void 0&&D(this),I};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=o.getProgramParameter(w,IT)),P},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=L,this}let tb=0;class nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new ib(e),t.set(e,r)),r}}class ib{constructor(e){this.id=tb++,this.code=e,this.usedTimes=0}}function rb(s,e,t,r,o,l,c){const u=new th,f=new nb,h=new Set,p=[],g=o.logarithmicDepthBuffer,x=o.vertexTextures;let v=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(I){return h.add(I),I===0?"uv":`uv${I}`}function _(I,P,B,K,W){const ae=K.fog,le=W.geometry,de=I.isMeshStandardMaterial?K.environment:null,oe=(I.isMeshStandardMaterial?t:e).get(I.envMap||de),V=oe&&oe.mapping===Cc?oe.image.height:null,ce=M[I.type];I.precision!==null&&(v=o.getMaxPrecision(I.precision),v!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",v,"instead."));const te=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,F=te!==void 0?te.length:0;let ee=0;le.morphAttributes.position!==void 0&&(ee=1),le.morphAttributes.normal!==void 0&&(ee=2),le.morphAttributes.color!==void 0&&(ee=3);let Te,q,he,ye;if(ce){const bt=Ui[ce];Te=bt.vertexShader,q=bt.fragmentShader}else Te=I.vertexShader,q=I.fragmentShader,f.update(I),he=f.getVertexShaderID(I),ye=f.getFragmentShaderID(I);const xe=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Le=W.isInstancedMesh===!0,Ze=W.isBatchedMesh===!0,pt=!!I.map,mt=!!I.matcap,Nt=!!oe,X=!!I.aoMap,Kt=!!I.lightMap,ct=!!I.bumpMap,gt=!!I.normalMap,Je=!!I.displacementMap,je=!!I.emissiveMap,ze=!!I.metalnessMap,U=!!I.roughnessMap,R=I.anisotropy>0,Z=I.clearcoat>0,pe=I.dispersion>0,me=I.iridescence>0,fe=I.sheen>0,Ve=I.transmission>0,Ae=R&&!!I.anisotropyMap,Fe=Z&&!!I.clearcoatMap,at=Z&&!!I.clearcoatNormalMap,Se=Z&&!!I.clearcoatRoughnessMap,Be=me&&!!I.iridescenceMap,et=me&&!!I.iridescenceThicknessMap,We=fe&&!!I.sheenColorMap,Ue=fe&&!!I.sheenRoughnessMap,xt=!!I.specularMap,ut=!!I.specularColorMap,It=!!I.specularIntensityMap,j=Ve&&!!I.transmissionMap,Pe=Ve&&!!I.thicknessMap,ue=!!I.gradientMap,ge=!!I.alphaMap,ke=I.alphaTest>0,De=!!I.alphaHash,dt=!!I.extensions;let Vt=sr;I.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Vt=s.toneMapping);const Jt={shaderID:ce,shaderType:I.type,shaderName:I.name,vertexShader:Te,fragmentShader:q,defines:I.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:v,batching:Ze,batchingColor:Ze&&W._colorsTexture!==null,instancing:Le,instancingColor:Le&&W.instanceColor!==null,instancingMorph:Le&&W.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:To,alphaToCoverage:!!I.alphaToCoverage,map:pt,matcap:mt,envMap:Nt,envMapMode:Nt&&oe.mapping,envMapCubeUVHeight:V,aoMap:X,lightMap:Kt,bumpMap:ct,normalMap:gt,displacementMap:x&&Je,emissiveMap:je,normalMapObjectSpace:gt&&I.normalMapType===ZS,normalMapTangentSpace:gt&&I.normalMapType===Qf,metalnessMap:ze,roughnessMap:U,anisotropy:R,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Fe,clearcoatNormalMap:at,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:me,iridescenceMap:Be,iridescenceThicknessMap:et,sheen:fe,sheenColorMap:We,sheenRoughnessMap:Ue,specularMap:xt,specularColorMap:ut,specularIntensityMap:It,transmission:Ve,transmissionMap:j,thicknessMap:Pe,gradientMap:ue,opaque:I.transparent===!1&&I.blending===ho&&I.alphaToCoverage===!1,alphaMap:ge,alphaTest:ke,alphaHash:De,combine:I.combine,mapUv:pt&&w(I.map.channel),aoMapUv:X&&w(I.aoMap.channel),lightMapUv:Kt&&w(I.lightMap.channel),bumpMapUv:ct&&w(I.bumpMap.channel),normalMapUv:gt&&w(I.normalMap.channel),displacementMapUv:Je&&w(I.displacementMap.channel),emissiveMapUv:je&&w(I.emissiveMap.channel),metalnessMapUv:ze&&w(I.metalnessMap.channel),roughnessMapUv:U&&w(I.roughnessMap.channel),anisotropyMapUv:Ae&&w(I.anisotropyMap.channel),clearcoatMapUv:Fe&&w(I.clearcoatMap.channel),clearcoatNormalMapUv:at&&w(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&w(I.iridescenceMap.channel),iridescenceThicknessMapUv:et&&w(I.iridescenceThicknessMap.channel),sheenColorMapUv:We&&w(I.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&w(I.sheenRoughnessMap.channel),specularMapUv:xt&&w(I.specularMap.channel),specularColorMapUv:ut&&w(I.specularColorMap.channel),specularIntensityMapUv:It&&w(I.specularIntensityMap.channel),transmissionMapUv:j&&w(I.transmissionMap.channel),thicknessMapUv:Pe&&w(I.thicknessMap.channel),alphaMapUv:ge&&w(I.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(gt||R),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!le.attributes.uv&&(pt||ge),fog:!!ae,useFog:I.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ce,skinning:W.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ee,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:I.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:pt&&I.map.isVideoTexture===!0&&Ct.getTransfer(I.map.colorSpace)===kt,decodeVideoTextureEmissive:je&&I.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(I.emissiveMap.colorSpace)===kt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Ti,flipSided:I.side===Xn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:dt&&I.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&I.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Jt.vertexUv1s=h.has(1),Jt.vertexUv2s=h.has(2),Jt.vertexUv3s=h.has(3),h.clear(),Jt}function y(I){const P=[];if(I.shaderID?P.push(I.shaderID):(P.push(I.customVertexShaderID),P.push(I.customFragmentShaderID)),I.defines!==void 0)for(const B in I.defines)P.push(B),P.push(I.defines[B]);return I.isRawShaderMaterial===!1&&(A(P,I),C(P,I),P.push(s.outputColorSpace)),P.push(I.customProgramCacheKey),P.join()}function A(I,P){I.push(P.precision),I.push(P.outputColorSpace),I.push(P.envMapMode),I.push(P.envMapCubeUVHeight),I.push(P.mapUv),I.push(P.alphaMapUv),I.push(P.lightMapUv),I.push(P.aoMapUv),I.push(P.bumpMapUv),I.push(P.normalMapUv),I.push(P.displacementMapUv),I.push(P.emissiveMapUv),I.push(P.metalnessMapUv),I.push(P.roughnessMapUv),I.push(P.anisotropyMapUv),I.push(P.clearcoatMapUv),I.push(P.clearcoatNormalMapUv),I.push(P.clearcoatRoughnessMapUv),I.push(P.iridescenceMapUv),I.push(P.iridescenceThicknessMapUv),I.push(P.sheenColorMapUv),I.push(P.sheenRoughnessMapUv),I.push(P.specularMapUv),I.push(P.specularColorMapUv),I.push(P.specularIntensityMapUv),I.push(P.transmissionMapUv),I.push(P.thicknessMapUv),I.push(P.combine),I.push(P.fogExp2),I.push(P.sizeAttenuation),I.push(P.morphTargetsCount),I.push(P.morphAttributeCount),I.push(P.numDirLights),I.push(P.numPointLights),I.push(P.numSpotLights),I.push(P.numSpotLightMaps),I.push(P.numHemiLights),I.push(P.numRectAreaLights),I.push(P.numDirLightShadows),I.push(P.numPointLightShadows),I.push(P.numSpotLightShadows),I.push(P.numSpotLightShadowsWithMaps),I.push(P.numLightProbes),I.push(P.shadowMapType),I.push(P.toneMapping),I.push(P.numClippingPlanes),I.push(P.numClipIntersection),I.push(P.depthPacking)}function C(I,P){u.disableAll(),P.supportsVertexTextures&&u.enable(0),P.instancing&&u.enable(1),P.instancingColor&&u.enable(2),P.instancingMorph&&u.enable(3),P.matcap&&u.enable(4),P.envMap&&u.enable(5),P.normalMapObjectSpace&&u.enable(6),P.normalMapTangentSpace&&u.enable(7),P.clearcoat&&u.enable(8),P.iridescence&&u.enable(9),P.alphaTest&&u.enable(10),P.vertexColors&&u.enable(11),P.vertexAlphas&&u.enable(12),P.vertexUv1s&&u.enable(13),P.vertexUv2s&&u.enable(14),P.vertexUv3s&&u.enable(15),P.vertexTangents&&u.enable(16),P.anisotropy&&u.enable(17),P.alphaHash&&u.enable(18),P.batching&&u.enable(19),P.dispersion&&u.enable(20),P.batchingColor&&u.enable(21),I.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reverseDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),I.push(u.mask)}function T(I){const P=M[I.type];let B;if(P){const K=Ui[P];B=VM.clone(K.uniforms)}else B=I.uniforms;return B}function k(I,P){let B;for(let K=0,W=p.length;K<W;K++){const ae=p[K];if(ae.cacheKey===P){B=ae,++B.usedTimes;break}}return B===void 0&&(B=new eb(s,P,I,l),p.push(B)),B}function L(I){if(--I.usedTimes===0){const P=p.indexOf(I);p[P]=p[p.length-1],p.pop(),I.destroy()}}function D(I){f.remove(I)}function z(){f.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:T,acquireProgram:k,releaseProgram:L,releaseShaderCache:D,programs:p,dispose:z}}function sb(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let u=s.get(c);return u===void 0&&(u={},s.set(c,u)),u}function r(c){s.delete(c)}function o(c,u,f){s.get(c)[u]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function ob(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Yg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $g(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g,x,v,M,w,_){let y=s[e];return y===void 0?(y={id:g.id,object:g,geometry:x,material:v,groupOrder:M,renderOrder:g.renderOrder,z:w,group:_},s[e]=y):(y.id=g.id,y.object=g,y.geometry=x,y.material=v,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=w,y.group=_),e++,y}function u(g,x,v,M,w,_){const y=c(g,x,v,M,w,_);v.transmission>0?r.push(y):v.transparent===!0?o.push(y):t.push(y)}function f(g,x,v,M,w,_){const y=c(g,x,v,M,w,_);v.transmission>0?r.unshift(y):v.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,x){t.length>1&&t.sort(g||ob),r.length>1&&r.sort(x||Yg),o.length>1&&o.sort(x||Yg)}function p(){for(let g=e,x=s.length;g<x;g++){const v=s[g];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:u,unshift:f,finish:p,sort:h}}function ab(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new $g,s.set(r,[c])):o>=l.length?(c=new $g,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function lb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new yt};break;case"SpotLight":t={position:new J,direction:new J,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function cb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ub=0;function db(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fb(s){const e=new lb,t=cb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new J);const o=new J,l=new Bt,c=new Bt;function u(h){let p=0,g=0,x=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let v=0,M=0,w=0,_=0,y=0,A=0,C=0,T=0,k=0,L=0,D=0;h.sort(db);for(let I=0,P=h.length;I<P;I++){const B=h[I],K=B.color,W=B.intensity,ae=B.distance,le=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=K.r*W,g+=K.g*W,x+=K.b*W;else if(B.isLightProbe){for(let de=0;de<9;de++)r.probe[de].addScaledVector(B.sh.coefficients[de],W);D++}else if(B.isDirectionalLight){const de=e.get(B);if(de.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const oe=B.shadow,V=t.get(B);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,r.directionalShadow[v]=V,r.directionalShadowMap[v]=le,r.directionalShadowMatrix[v]=B.shadow.matrix,A++}r.directional[v]=de,v++}else if(B.isSpotLight){const de=e.get(B);de.position.setFromMatrixPosition(B.matrixWorld),de.color.copy(K).multiplyScalar(W),de.distance=ae,de.coneCos=Math.cos(B.angle),de.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),de.decay=B.decay,r.spot[w]=de;const oe=B.shadow;if(B.map&&(r.spotLightMap[k]=B.map,k++,oe.updateMatrices(B),B.castShadow&&L++),r.spotLightMatrix[w]=oe.matrix,B.castShadow){const V=t.get(B);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,r.spotShadow[w]=V,r.spotShadowMap[w]=le,T++}w++}else if(B.isRectAreaLight){const de=e.get(B);de.color.copy(K).multiplyScalar(W),de.halfWidth.set(B.width*.5,0,0),de.halfHeight.set(0,B.height*.5,0),r.rectArea[_]=de,_++}else if(B.isPointLight){const de=e.get(B);if(de.color.copy(B.color).multiplyScalar(B.intensity),de.distance=B.distance,de.decay=B.decay,B.castShadow){const oe=B.shadow,V=t.get(B);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,V.shadowCameraNear=oe.camera.near,V.shadowCameraFar=oe.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=le,r.pointShadowMatrix[M]=B.shadow.matrix,C++}r.point[M]=de,M++}else if(B.isHemisphereLight){const de=e.get(B);de.skyColor.copy(B.color).multiplyScalar(W),de.groundColor.copy(B.groundColor).multiplyScalar(W),r.hemi[y]=de,y++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==v||z.pointLength!==M||z.spotLength!==w||z.rectAreaLength!==_||z.hemiLength!==y||z.numDirectionalShadows!==A||z.numPointShadows!==C||z.numSpotShadows!==T||z.numSpotMaps!==k||z.numLightProbes!==D)&&(r.directional.length=v,r.spot.length=w,r.rectArea.length=_,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=T+k-L,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=D,z.directionalLength=v,z.pointLength=M,z.spotLength=w,z.rectAreaLength=_,z.hemiLength=y,z.numDirectionalShadows=A,z.numPointShadows=C,z.numSpotShadows=T,z.numSpotMaps=k,z.numLightProbes=D,r.version=ub++)}function f(h,p){let g=0,x=0,v=0,M=0,w=0;const _=p.matrixWorldInverse;for(let y=0,A=h.length;y<A;y++){const C=h[y];if(C.isDirectionalLight){const T=r.directional[g];T.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(_),g++}else if(C.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(_),v++}else if(C.isRectAreaLight){const T=r.rectArea[M];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(_),c.identity(),l.copy(C.matrixWorld),l.premultiply(_),c.extractRotation(l),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const T=r.point[x];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(_),x++}else if(C.isHemisphereLight){const T=r.hemi[w];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(_),w++}}}return{setup:u,setupView:f,state:r}}function qg(s){const e=new fb(s),t=[],r=[];function o(p){h.camera=p,t.length=0,r.length=0}function l(p){t.push(p)}function c(p){r.push(p)}function u(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:u,setupLightsView:f,pushLight:l,pushShadow:c}}function hb(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let u;return c===void 0?(u=new qg(s),e.set(o,[u])):l>=c.length?(u=new qg(s),c.push(u)):u=c[l],u}function r(){e=new WeakMap}return{get:t,dispose:r}}class pb extends vs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mb extends vs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vb(s,e,t){let r=new nh;const o=new ft,l=new ft,c=new $t,u=new pb({depthPacking:KS}),f=new mb,h={},p=t.maxTextureSize,g={[zr]:Xn,[Xn]:zr,[Ti]:Ti},x=new Vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:gb,fragmentShader:xb}),v=x.clone();v.defines.HORIZONTAL_PASS=1;const M=new ei;M.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Wn(M,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F0;let y=this.type;this.render=function(L,D,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const I=s.getRenderTarget(),P=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Or),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const W=y!==Qi&&this.type===Qi,ae=y===Qi&&this.type!==Qi;for(let le=0,de=L.length;le<de;le++){const oe=L[le],V=oe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ce=V.getFrameExtents();if(o.multiply(ce),l.copy(V.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/ce.x),o.x=l.x*ce.x,V.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/ce.y),o.y=l.y*ce.y,V.mapSize.y=l.y)),V.map===null||W===!0||ae===!0){const F=this.type!==Qi?{minFilter:hi,magFilter:hi}:{};V.map!==null&&V.map.dispose(),V.map=new gs(o.x,o.y,F),V.map.texture.name=oe.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const te=V.getViewportCount();for(let F=0;F<te;F++){const ee=V.getViewport(F);c.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),K.viewport(c),V.updateMatrices(oe,F),r=V.getFrustum(),T(D,z,V.camera,oe,this.type)}V.isPointLightShadow!==!0&&this.type===Qi&&A(V,z),V.needsUpdate=!1}y=this.type,_.needsUpdate=!1,s.setRenderTarget(I,P,B)};function A(L,D){const z=e.update(w);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new gs(o.x,o.y)),x.uniforms.shadow_pass.value=L.map.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(D,null,z,x,w,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(D,null,z,v,w,null)}function C(L,D,z,I){let P=null;const B=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)P=B;else if(P=z.isPointLight===!0?f:u,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const K=P.uuid,W=D.uuid;let ae=h[K];ae===void 0&&(ae={},h[K]=ae);let le=ae[W];le===void 0&&(le=P.clone(),ae[W]=le,D.addEventListener("dispose",k)),P=le}if(P.visible=D.visible,P.wireframe=D.wireframe,I===Qi?P.side=D.shadowSide!==null?D.shadowSide:D.side:P.side=D.shadowSide!==null?D.shadowSide:g[D.side],P.alphaMap=D.alphaMap,P.alphaTest=D.alphaTest,P.map=D.map,P.clipShadows=D.clipShadows,P.clippingPlanes=D.clippingPlanes,P.clipIntersection=D.clipIntersection,P.displacementMap=D.displacementMap,P.displacementScale=D.displacementScale,P.displacementBias=D.displacementBias,P.wireframeLinewidth=D.wireframeLinewidth,P.linewidth=D.linewidth,z.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const K=s.properties.get(P);K.light=z}return P}function T(L,D,z,I,P){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&P===Qi)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const W=e.update(L),ae=L.material;if(Array.isArray(ae)){const le=W.groups;for(let de=0,oe=le.length;de<oe;de++){const V=le[de],ce=ae[V.materialIndex];if(ce&&ce.visible){const te=C(L,ce,I,P);L.onBeforeShadow(s,L,D,z,W,te,V),s.renderBufferDirect(z,null,W,te,L,V),L.onAfterShadow(s,L,D,z,W,te,V)}}}else if(ae.visible){const le=C(L,ae,I,P);L.onBeforeShadow(s,L,D,z,W,le,null),s.renderBufferDirect(z,null,W,le,L,null),L.onAfterShadow(s,L,D,z,W,le,null)}}const K=L.children;for(let W=0,ae=K.length;W<ae;W++)T(K[W],D,z,I,P)}function k(L){L.target.removeEventListener("dispose",k);for(const z in h){const I=h[z],P=L.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}}const _b={[sf]:of,[af]:uf,[lf]:df,[_o]:cf,[of]:sf,[uf]:af,[df]:lf,[cf]:_o};function yb(s,e){function t(){let j=!1;const Pe=new $t;let ue=null;const ge=new $t(0,0,0,0);return{setMask:function(ke){ue!==ke&&!j&&(s.colorMask(ke,ke,ke,ke),ue=ke)},setLocked:function(ke){j=ke},setClear:function(ke,De,dt,Vt,Jt){Jt===!0&&(ke*=Vt,De*=Vt,dt*=Vt),Pe.set(ke,De,dt,Vt),ge.equals(Pe)===!1&&(s.clearColor(ke,De,dt,Vt),ge.copy(Pe))},reset:function(){j=!1,ue=null,ge.set(-1,0,0,0)}}}function r(){let j=!1,Pe=!1,ue=null,ge=null,ke=null;return{setReversed:function(De){if(Pe!==De){const dt=e.get("EXT_clip_control");Pe?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const Vt=ke;ke=null,this.setClear(Vt)}Pe=De},getReversed:function(){return Pe},setTest:function(De){De?xe(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(De){ue!==De&&!j&&(s.depthMask(De),ue=De)},setFunc:function(De){if(Pe&&(De=_b[De]),ge!==De){switch(De){case sf:s.depthFunc(s.NEVER);break;case of:s.depthFunc(s.ALWAYS);break;case af:s.depthFunc(s.LESS);break;case _o:s.depthFunc(s.LEQUAL);break;case lf:s.depthFunc(s.EQUAL);break;case cf:s.depthFunc(s.GEQUAL);break;case uf:s.depthFunc(s.GREATER);break;case df:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=De}},setLocked:function(De){j=De},setClear:function(De){ke!==De&&(Pe&&(De=1-De),s.clearDepth(De),ke=De)},reset:function(){j=!1,ue=null,ge=null,ke=null,Pe=!1}}}function o(){let j=!1,Pe=null,ue=null,ge=null,ke=null,De=null,dt=null,Vt=null,Jt=null;return{setTest:function(bt){j||(bt?xe(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(bt){Pe!==bt&&!j&&(s.stencilMask(bt),Pe=bt)},setFunc:function(bt,Un,bn){(ue!==bt||ge!==Un||ke!==bn)&&(s.stencilFunc(bt,Un,bn),ue=bt,ge=Un,ke=bn)},setOp:function(bt,Un,bn){(De!==bt||dt!==Un||Vt!==bn)&&(s.stencilOp(bt,Un,bn),De=bt,dt=Un,Vt=bn)},setLocked:function(bt){j=bt},setClear:function(bt){Jt!==bt&&(s.clearStencil(bt),Jt=bt)},reset:function(){j=!1,Pe=null,ue=null,ge=null,ke=null,De=null,dt=null,Vt=null,Jt=null}}}const l=new t,c=new r,u=new o,f=new WeakMap,h=new WeakMap;let p={},g={},x=new WeakMap,v=[],M=null,w=!1,_=null,y=null,A=null,C=null,T=null,k=null,L=null,D=new yt(0,0,0),z=0,I=!1,P=null,B=null,K=null,W=null,ae=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,oe=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(V)[1]),de=oe>=1):V.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),de=oe>=2);let ce=null,te={};const F=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),Te=new $t().fromArray(F),q=new $t().fromArray(ee);function he(j,Pe,ue,ge){const ke=new Uint8Array(4),De=s.createTexture();s.bindTexture(j,De),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<ue;dt++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Pe+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return De}const ye={};ye[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),xe(s.DEPTH_TEST),c.setFunc(_o),ct(!1),gt(Qm),xe(s.CULL_FACE),X(Or);function xe(j){p[j]!==!0&&(s.enable(j),p[j]=!0)}function Ce(j){p[j]!==!1&&(s.disable(j),p[j]=!1)}function Le(j,Pe){return g[j]!==Pe?(s.bindFramebuffer(j,Pe),g[j]=Pe,j===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),j===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ze(j,Pe){let ue=v,ge=!1;if(j){ue=x.get(Pe),ue===void 0&&(ue=[],x.set(Pe,ue));const ke=j.textures;if(ue.length!==ke.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let De=0,dt=ke.length;De<dt;De++)ue[De]=s.COLOR_ATTACHMENT0+De;ue.length=ke.length,ge=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,ge=!0);ge&&s.drawBuffers(ue)}function pt(j){return M!==j?(s.useProgram(j),M=j,!0):!1}const mt={[ds]:s.FUNC_ADD,[MS]:s.FUNC_SUBTRACT,[ES]:s.FUNC_REVERSE_SUBTRACT};mt[wS]=s.MIN,mt[TS]=s.MAX;const Nt={[bS]:s.ZERO,[AS]:s.ONE,[CS]:s.SRC_COLOR,[nf]:s.SRC_ALPHA,[IS]:s.SRC_ALPHA_SATURATE,[NS]:s.DST_COLOR,[PS]:s.DST_ALPHA,[RS]:s.ONE_MINUS_SRC_COLOR,[rf]:s.ONE_MINUS_SRC_ALPHA,[DS]:s.ONE_MINUS_DST_COLOR,[LS]:s.ONE_MINUS_DST_ALPHA,[US]:s.CONSTANT_COLOR,[kS]:s.ONE_MINUS_CONSTANT_COLOR,[FS]:s.CONSTANT_ALPHA,[OS]:s.ONE_MINUS_CONSTANT_ALPHA};function X(j,Pe,ue,ge,ke,De,dt,Vt,Jt,bt){if(j===Or){w===!0&&(Ce(s.BLEND),w=!1);return}if(w===!1&&(xe(s.BLEND),w=!0),j!==SS){if(j!==_||bt!==I){if((y!==ds||T!==ds)&&(s.blendEquation(s.FUNC_ADD),y=ds,T=ds),bt)switch(j){case ho:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jm:s.blendFunc(s.ONE,s.ONE);break;case eg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ho:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case eg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}A=null,C=null,k=null,L=null,D.set(0,0,0),z=0,_=j,I=bt}return}ke=ke||Pe,De=De||ue,dt=dt||ge,(Pe!==y||ke!==T)&&(s.blendEquationSeparate(mt[Pe],mt[ke]),y=Pe,T=ke),(ue!==A||ge!==C||De!==k||dt!==L)&&(s.blendFuncSeparate(Nt[ue],Nt[ge],Nt[De],Nt[dt]),A=ue,C=ge,k=De,L=dt),(Vt.equals(D)===!1||Jt!==z)&&(s.blendColor(Vt.r,Vt.g,Vt.b,Jt),D.copy(Vt),z=Jt),_=j,I=!1}function Kt(j,Pe){j.side===Ti?Ce(s.CULL_FACE):xe(s.CULL_FACE);let ue=j.side===Xn;Pe&&(ue=!ue),ct(ue),j.blending===ho&&j.transparent===!1?X(Or):X(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),l.setMask(j.colorWrite);const ge=j.stencilWrite;u.setTest(ge),ge&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),je(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(j){P!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),P=j)}function gt(j){j!==vS?(xe(s.CULL_FACE),j!==B&&(j===Qm?s.cullFace(s.BACK):j===_S?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),B=j}function Je(j){j!==K&&(de&&s.lineWidth(j),K=j)}function je(j,Pe,ue){j?(xe(s.POLYGON_OFFSET_FILL),(W!==Pe||ae!==ue)&&(s.polygonOffset(Pe,ue),W=Pe,ae=ue)):Ce(s.POLYGON_OFFSET_FILL)}function ze(j){j?xe(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function U(j){j===void 0&&(j=s.TEXTURE0+le-1),ce!==j&&(s.activeTexture(j),ce=j)}function R(j,Pe,ue){ue===void 0&&(ce===null?ue=s.TEXTURE0+le-1:ue=ce);let ge=te[ue];ge===void 0&&(ge={type:void 0,texture:void 0},te[ue]=ge),(ge.type!==j||ge.texture!==Pe)&&(ce!==ue&&(s.activeTexture(ue),ce=ue),s.bindTexture(j,Pe||ye[j]),ge.type=j,ge.texture=Pe)}function Z(){const j=te[ce];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function at(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function et(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function We(j){Te.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Te.copy(j))}function Ue(j){q.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),q.copy(j))}function xt(j,Pe){let ue=h.get(Pe);ue===void 0&&(ue=new WeakMap,h.set(Pe,ue));let ge=ue.get(j);ge===void 0&&(ge=s.getUniformBlockIndex(Pe,j.name),ue.set(j,ge))}function ut(j,Pe){const ge=h.get(Pe).get(j);f.get(Pe)!==ge&&(s.uniformBlockBinding(Pe,ge,j.__bindingPointIndex),f.set(Pe,ge))}function It(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},ce=null,te={},g={},x=new WeakMap,v=[],M=null,w=!1,_=null,y=null,A=null,C=null,T=null,k=null,L=null,D=new yt(0,0,0),z=0,I=!1,P=null,B=null,K=null,W=null,ae=null,Te.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:xe,disable:Ce,bindFramebuffer:Le,drawBuffers:Ze,useProgram:pt,setBlending:X,setMaterial:Kt,setFlipSided:ct,setCullFace:gt,setLineWidth:Je,setPolygonOffset:je,setScissorTest:ze,activeTexture:U,bindTexture:R,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:me,texImage2D:Be,texImage3D:et,updateUBOMapping:xt,uniformBlockBinding:ut,texStorage2D:at,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:We,viewport:Ue,reset:It}}function Kg(s,e,t,r){const o=Sb(r);switch(t){case j0:return s*e;case X0:return s*e;case Y0:return s*e*2;case $0:return s*e/o.components*o.byteLength;case qf:return s*e/o.components*o.byteLength;case q0:return s*e*2/o.components*o.byteLength;case Kf:return s*e*2/o.components*o.byteLength;case W0:return s*e*3/o.components*o.byteLength;case di:return s*e*4/o.components*o.byteLength;case Zf:return s*e*4/o.components*o.byteLength;case cc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case dc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:case xf:return Math.max(s,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(s,8)*Math.max(e,8)/2;case vf:case _f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Af:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Df:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case If:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case hc:case Uf:case kf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case K0:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Of:case zf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sb(s){switch(s){case ar:case V0:return{byteLength:1,components:1};case ya:case H0:case Ea:return{byteLength:2,components:1};case Yf:case $f:return{byteLength:2,components:4};case ms:case Xf:case nr:return{byteLength:4,components:1};case G0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Mb(s,e,t,r,o,l,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ft,p=new WeakMap;let g;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,R){return v?new OffscreenCanvas(U,R):Sc("canvas")}function w(U,R,Z){let pe=1;const me=ze(U);if((me.width>Z||me.height>Z)&&(pe=Z/Math.max(me.width,me.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const fe=Math.floor(pe*me.width),Ve=Math.floor(pe*me.height);g===void 0&&(g=M(fe,Ve));const Ae=R?M(fe,Ve):g;return Ae.width=fe,Ae.height=Ve,Ae.getContext("2d").drawImage(U,0,0,fe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+fe+"x"+Ve+")."),Ae}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function _(U){return U.generateMipmaps}function y(U){s.generateMipmap(U)}function A(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(U,R,Z,pe,me=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=R;if(R===s.RED&&(Z===s.FLOAT&&(fe=s.R32F),Z===s.HALF_FLOAT&&(fe=s.R16F),Z===s.UNSIGNED_BYTE&&(fe=s.R8)),R===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.R8UI),Z===s.UNSIGNED_SHORT&&(fe=s.R16UI),Z===s.UNSIGNED_INT&&(fe=s.R32UI),Z===s.BYTE&&(fe=s.R8I),Z===s.SHORT&&(fe=s.R16I),Z===s.INT&&(fe=s.R32I)),R===s.RG&&(Z===s.FLOAT&&(fe=s.RG32F),Z===s.HALF_FLOAT&&(fe=s.RG16F),Z===s.UNSIGNED_BYTE&&(fe=s.RG8)),R===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RG8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RG16UI),Z===s.UNSIGNED_INT&&(fe=s.RG32UI),Z===s.BYTE&&(fe=s.RG8I),Z===s.SHORT&&(fe=s.RG16I),Z===s.INT&&(fe=s.RG32I)),R===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),Z===s.UNSIGNED_INT&&(fe=s.RGB32UI),Z===s.BYTE&&(fe=s.RGB8I),Z===s.SHORT&&(fe=s.RGB16I),Z===s.INT&&(fe=s.RGB32I)),R===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),Z===s.UNSIGNED_INT&&(fe=s.RGBA32UI),Z===s.BYTE&&(fe=s.RGBA8I),Z===s.SHORT&&(fe=s.RGBA16I),Z===s.INT&&(fe=s.RGBA32I)),R===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),R===s.RGBA){const Ve=me?Rc:Ct.getTransfer(pe);Z===s.FLOAT&&(fe=s.RGBA32F),Z===s.HALF_FLOAT&&(fe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(fe=Ve===kt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function T(U,R){let Z;return U?R===null||R===ms||R===Mo?Z=s.DEPTH24_STENCIL8:R===nr?Z=s.DEPTH32F_STENCIL8:R===ya&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ms||R===Mo?Z=s.DEPTH_COMPONENT24:R===nr?Z=s.DEPTH_COMPONENT32F:R===ya&&(Z=s.DEPTH_COMPONENT16),Z}function k(U,R){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==hi&&U.minFilter!==bi?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function L(U){const R=U.target;R.removeEventListener("dispose",L),z(R),R.isVideoTexture&&p.delete(R)}function D(U){const R=U.target;R.removeEventListener("dispose",D),P(R)}function z(U){const R=r.get(U);if(R.__webglInit===void 0)return;const Z=U.source,pe=x.get(Z);if(pe){const me=pe[R.__cacheKey];me.usedTimes--,me.usedTimes===0&&I(U),Object.keys(pe).length===0&&x.delete(Z)}r.remove(U)}function I(U){const R=r.get(U);s.deleteTexture(R.__webglTexture);const Z=U.source,pe=x.get(Z);delete pe[R.__cacheKey],c.memory.textures--}function P(U){const R=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(R.__webglFramebuffer[pe]))for(let me=0;me<R.__webglFramebuffer[pe].length;me++)s.deleteFramebuffer(R.__webglFramebuffer[pe][me]);else s.deleteFramebuffer(R.__webglFramebuffer[pe]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[pe])}else{if(Array.isArray(R.__webglFramebuffer))for(let pe=0;pe<R.__webglFramebuffer.length;pe++)s.deleteFramebuffer(R.__webglFramebuffer[pe]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pe=0;pe<R.__webglColorRenderbuffer.length;pe++)R.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[pe]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Z=U.textures;for(let pe=0,me=Z.length;pe<me;pe++){const fe=r.get(Z[pe]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),c.memory.textures--),r.remove(Z[pe])}r.remove(U)}let B=0;function K(){B=0}function W(){const U=B;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),B+=1,U}function ae(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function le(U,R){const Z=r.get(U);if(U.isVideoTexture&&Je(U),U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){const pe=U.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(Z,U,R);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+R)}function de(U,R){const Z=r.get(U);if(U.version>0&&Z.__version!==U.version){q(Z,U,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+R)}function oe(U,R){const Z=r.get(U);if(U.version>0&&Z.__version!==U.version){q(Z,U,R);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+R)}function V(U,R){const Z=r.get(U);if(U.version>0&&Z.__version!==U.version){he(Z,U,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+R)}const ce={[xc]:s.REPEAT,[kr]:s.CLAMP_TO_EDGE,[vc]:s.MIRRORED_REPEAT},te={[hi]:s.NEAREST,[B0]:s.NEAREST_MIPMAP_NEAREST,[pa]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[lc]:s.LINEAR_MIPMAP_NEAREST,[Fr]:s.LINEAR_MIPMAP_LINEAR},F={[QS]:s.NEVER,[rM]:s.ALWAYS,[JS]:s.LESS,[Z0]:s.LEQUAL,[eM]:s.EQUAL,[iM]:s.GEQUAL,[tM]:s.GREATER,[nM]:s.NOTEQUAL};function ee(U,R){if(R.type===nr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===bi||R.magFilter===lc||R.magFilter===pa||R.magFilter===Fr||R.minFilter===bi||R.minFilter===lc||R.minFilter===pa||R.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ce[R.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ce[R.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ce[R.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,te[R.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,te[R.minFilter]),R.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,F[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===hi||R.minFilter!==pa&&R.minFilter!==Fr||R.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function Te(U,R){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",L));const pe=R.source;let me=x.get(pe);me===void 0&&(me={},x.set(pe,me));const fe=ae(R);if(fe!==U.__cacheKey){me[fe]===void 0&&(me[fe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),me[fe].usedTimes++;const Ve=me[U.__cacheKey];Ve!==void 0&&(me[U.__cacheKey].usedTimes--,Ve.usedTimes===0&&I(R)),U.__cacheKey=fe,U.__webglTexture=me[fe].texture}return Z}function q(U,R,Z){let pe=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pe=s.TEXTURE_3D);const me=Te(U,R),fe=R.source;t.bindTexture(pe,U.__webglTexture,s.TEXTURE0+Z);const Ve=r.get(fe);if(fe.version!==Ve.__version||me===!0){t.activeTexture(s.TEXTURE0+Z);const Ae=Ct.getPrimaries(Ct.workingColorSpace),Fe=R.colorSpace===er?null:Ct.getPrimaries(R.colorSpace),at=R.colorSpace===er||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Se=w(R.image,!1,o.maxTextureSize);Se=je(R,Se);const Be=l.convert(R.format,R.colorSpace),et=l.convert(R.type);let We=C(R.internalFormat,Be,et,R.colorSpace,R.isVideoTexture);ee(pe,R);let Ue;const xt=R.mipmaps,ut=R.isVideoTexture!==!0,It=Ve.__version===void 0||me===!0,j=fe.dataReady,Pe=k(R,Se);if(R.isDepthTexture)We=T(R.format===Eo,R.type),It&&(ut?t.texStorage2D(s.TEXTURE_2D,1,We,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,We,Se.width,Se.height,0,Be,et,null));else if(R.isDataTexture)if(xt.length>0){ut&&It&&t.texStorage2D(s.TEXTURE_2D,Pe,We,xt[0].width,xt[0].height);for(let ue=0,ge=xt.length;ue<ge;ue++)Ue=xt[ue],ut?j&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Ue.width,Ue.height,Be,et,Ue.data):t.texImage2D(s.TEXTURE_2D,ue,We,Ue.width,Ue.height,0,Be,et,Ue.data);R.generateMipmaps=!1}else ut?(It&&t.texStorage2D(s.TEXTURE_2D,Pe,We,Se.width,Se.height),j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Be,et,Se.data)):t.texImage2D(s.TEXTURE_2D,0,We,Se.width,Se.height,0,Be,et,Se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ut&&It&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,We,xt[0].width,xt[0].height,Se.depth);for(let ue=0,ge=xt.length;ue<ge;ue++)if(Ue=xt[ue],R.format!==di)if(Be!==null)if(ut){if(j)if(R.layerUpdates.size>0){const ke=Kg(Ue.width,Ue.height,R.format,R.type);for(const De of R.layerUpdates){const dt=Ue.data.subarray(De*ke/Ue.data.BYTES_PER_ELEMENT,(De+1)*ke/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,De,Ue.width,Ue.height,1,Be,dt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Ue.width,Ue.height,Se.depth,Be,Ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,We,Ue.width,Ue.height,Se.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?j&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Ue.width,Ue.height,Se.depth,Be,et,Ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,We,Ue.width,Ue.height,Se.depth,0,Be,et,Ue.data)}else{ut&&It&&t.texStorage2D(s.TEXTURE_2D,Pe,We,xt[0].width,xt[0].height);for(let ue=0,ge=xt.length;ue<ge;ue++)Ue=xt[ue],R.format!==di?Be!==null?ut?j&&t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,Ue.width,Ue.height,Be,Ue.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,We,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?j&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Ue.width,Ue.height,Be,et,Ue.data):t.texImage2D(s.TEXTURE_2D,ue,We,Ue.width,Ue.height,0,Be,et,Ue.data)}else if(R.isDataArrayTexture)if(ut){if(It&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,We,Se.width,Se.height,Se.depth),j)if(R.layerUpdates.size>0){const ue=Kg(Se.width,Se.height,R.format,R.type);for(const ge of R.layerUpdates){const ke=Se.data.subarray(ge*ue/Se.data.BYTES_PER_ELEMENT,(ge+1)*ue/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Se.width,Se.height,1,Be,et,ke)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Be,et,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,We,Se.width,Se.height,Se.depth,0,Be,et,Se.data);else if(R.isData3DTexture)ut?(It&&t.texStorage3D(s.TEXTURE_3D,Pe,We,Se.width,Se.height,Se.depth),j&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Be,et,Se.data)):t.texImage3D(s.TEXTURE_3D,0,We,Se.width,Se.height,Se.depth,0,Be,et,Se.data);else if(R.isFramebufferTexture){if(It)if(ut)t.texStorage2D(s.TEXTURE_2D,Pe,We,Se.width,Se.height);else{let ue=Se.width,ge=Se.height;for(let ke=0;ke<Pe;ke++)t.texImage2D(s.TEXTURE_2D,ke,We,ue,ge,0,Be,et,null),ue>>=1,ge>>=1}}else if(xt.length>0){if(ut&&It){const ue=ze(xt[0]);t.texStorage2D(s.TEXTURE_2D,Pe,We,ue.width,ue.height)}for(let ue=0,ge=xt.length;ue<ge;ue++)Ue=xt[ue],ut?j&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Be,et,Ue):t.texImage2D(s.TEXTURE_2D,ue,We,Be,et,Ue);R.generateMipmaps=!1}else if(ut){if(It){const ue=ze(Se);t.texStorage2D(s.TEXTURE_2D,Pe,We,ue.width,ue.height)}j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,et,Se)}else t.texImage2D(s.TEXTURE_2D,0,We,Be,et,Se);_(R)&&y(pe),Ve.__version=fe.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function he(U,R,Z){if(R.image.length!==6)return;const pe=Te(U,R),me=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+Z);const fe=r.get(me);if(me.version!==fe.__version||pe===!0){t.activeTexture(s.TEXTURE0+Z);const Ve=Ct.getPrimaries(Ct.workingColorSpace),Ae=R.colorSpace===er?null:Ct.getPrimaries(R.colorSpace),Fe=R.colorSpace===er||Ve===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const at=R.isCompressedTexture||R.image[0].isCompressedTexture,Se=R.image[0]&&R.image[0].isDataTexture,Be=[];for(let ge=0;ge<6;ge++)!at&&!Se?Be[ge]=w(R.image[ge],!0,o.maxCubemapSize):Be[ge]=Se?R.image[ge].image:R.image[ge],Be[ge]=je(R,Be[ge]);const et=Be[0],We=l.convert(R.format,R.colorSpace),Ue=l.convert(R.type),xt=C(R.internalFormat,We,Ue,R.colorSpace),ut=R.isVideoTexture!==!0,It=fe.__version===void 0||pe===!0,j=me.dataReady;let Pe=k(R,et);ee(s.TEXTURE_CUBE_MAP,R);let ue;if(at){ut&&It&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,xt,et.width,et.height);for(let ge=0;ge<6;ge++){ue=Be[ge].mipmaps;for(let ke=0;ke<ue.length;ke++){const De=ue[ke];R.format!==di?We!==null?ut?j&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,0,0,De.width,De.height,We,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,xt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,0,0,De.width,De.height,We,Ue,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,xt,De.width,De.height,0,We,Ue,De.data)}}}else{if(ue=R.mipmaps,ut&&It){ue.length>0&&Pe++;const ge=ze(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,xt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Se){ut?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Be[ge].width,Be[ge].height,We,Ue,Be[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xt,Be[ge].width,Be[ge].height,0,We,Ue,Be[ge].data);for(let ke=0;ke<ue.length;ke++){const dt=ue[ke].image[ge].image;ut?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,0,0,dt.width,dt.height,We,Ue,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,xt,dt.width,dt.height,0,We,Ue,dt.data)}}else{ut?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,We,Ue,Be[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xt,We,Ue,Be[ge]);for(let ke=0;ke<ue.length;ke++){const De=ue[ke];ut?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,0,0,We,Ue,De.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,xt,We,Ue,De.image[ge])}}}_(R)&&y(s.TEXTURE_CUBE_MAP),fe.__version=me.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function ye(U,R,Z,pe,me,fe){const Ve=l.convert(Z.format,Z.colorSpace),Ae=l.convert(Z.type),Fe=C(Z.internalFormat,Ve,Ae,Z.colorSpace),at=r.get(R),Se=r.get(Z);if(Se.__renderTarget=R,!at.__hasExternalTextures){const Be=Math.max(1,R.width>>fe),et=Math.max(1,R.height>>fe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,fe,Fe,Be,et,R.depth,0,Ve,Ae,null):t.texImage2D(me,fe,Fe,Be,et,0,Ve,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),gt(R)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,me,Se.__webglTexture,0,ct(R)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,me,Se.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(U,R,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,U),R.depthBuffer){const pe=R.depthTexture,me=pe&&pe.isDepthTexture?pe.type:null,fe=T(R.stencilBuffer,me),Ve=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ct(R);gt(R)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,fe,R.width,R.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,fe,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,fe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,U)}else{const pe=R.textures;for(let me=0;me<pe.length;me++){const fe=pe[me],Ve=l.convert(fe.format,fe.colorSpace),Ae=l.convert(fe.type),Fe=C(fe.internalFormat,Ve,Ae,fe.colorSpace),at=ct(R);Z&&gt(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Fe,R.width,R.height):gt(R)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,Fe,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(R.depthTexture);pe.__renderTarget=R,(!pe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),le(R.depthTexture,0);const me=pe.__webglTexture,fe=ct(R);if(R.depthTexture.format===po)gt(R)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(R.depthTexture.format===Eo)gt(R)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Le(U){const R=r.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pe){const me=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pe.removeEventListener("dispose",me)};pe.addEventListener("dispose",me),R.__depthDisposeCallback=me}R.__boundDepthTexture=pe}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ce(R.__webglFramebuffer,U)}else if(Z){R.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[pe]),R.__webglDepthbuffer[pe]===void 0)R.__webglDepthbuffer[pe]=s.createRenderbuffer(),xe(R.__webglDepthbuffer[pe],U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),xe(R.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(U,R,Z){const pe=r.get(U);R!==void 0&&ye(pe.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Le(U)}function pt(U){const R=U.texture,Z=r.get(U),pe=r.get(R);U.addEventListener("dispose",D);const me=U.textures,fe=U.isWebGLCubeRenderTarget===!0,Ve=me.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=R.version,c.memory.textures++),fe){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<R.mipmaps.length;Fe++)Z.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<R.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ae=0,Fe=me.length;Ae<Fe;Ae++){const at=r.get(me[Ae]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),c.memory.textures++)}if(U.samples>0&&gt(U)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<me.length;Ae++){const Fe=me[Ae];Z.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const at=l.convert(Fe.format,Fe.colorSpace),Se=l.convert(Fe.type),Be=C(Fe.internalFormat,at,Se,Fe.colorSpace,U.isXRRenderTarget===!0),et=ct(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Be,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ee(s.TEXTURE_CUBE_MAP,R);for(let Ae=0;Ae<6;Ae++)if(R.mipmaps&&R.mipmaps.length>0)for(let Fe=0;Fe<R.mipmaps.length;Fe++)ye(Z.__webglFramebuffer[Ae][Fe],U,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else ye(Z.__webglFramebuffer[Ae],U,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);_(R)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Ae=0,Fe=me.length;Ae<Fe;Ae++){const at=me[Ae],Se=r.get(at);t.bindTexture(s.TEXTURE_2D,Se.__webglTexture),ee(s.TEXTURE_2D,at),ye(Z.__webglFramebuffer,U,at,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),_(at)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),ee(Ae,R),R.mipmaps&&R.mipmaps.length>0)for(let Fe=0;Fe<R.mipmaps.length;Fe++)ye(Z.__webglFramebuffer[Fe],U,R,s.COLOR_ATTACHMENT0,Ae,Fe);else ye(Z.__webglFramebuffer,U,R,s.COLOR_ATTACHMENT0,Ae,0);_(R)&&y(Ae),t.unbindTexture()}U.depthBuffer&&Le(U)}function mt(U){const R=U.textures;for(let Z=0,pe=R.length;Z<pe;Z++){const me=R[Z];if(_(me)){const fe=A(U),Ve=r.get(me).__webglTexture;t.bindTexture(fe,Ve),y(fe),t.unbindTexture()}}}const Nt=[],X=[];function Kt(U){if(U.samples>0){if(gt(U)===!1){const R=U.textures,Z=U.width,pe=U.height;let me=s.COLOR_BUFFER_BIT;const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(U),Ae=R.length>1;if(Ae)for(let Fe=0;Fe<R.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Fe=0;Fe<R.length;Fe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Fe]);const at=r.get(R[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,at,0)}s.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,me,s.NEAREST),f===!0&&(Nt.length=0,X.length=0,Nt.push(s.COLOR_ATTACHMENT0+Fe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Nt.push(fe),X.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<R.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Fe]);const at=r.get(R[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,at,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&f){const R=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function ct(U){return Math.min(o.maxSamples,U.samples)}function gt(U){const R=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Je(U){const R=c.render.frame;p.get(U)!==R&&(p.set(U,R),U.update())}function je(U,R){const Z=U.colorSpace,pe=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==To&&Z!==er&&(Ct.getTransfer(Z)===kt?(pe!==di||me!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),R}function ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=K,this.setTexture2D=le,this.setTexture2DArray=de,this.setTexture3D=oe,this.setTextureCube=V,this.rebindTextures=Ze,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=gt}function Eb(s,e){function t(r,o=er){let l;const c=Ct.getTransfer(o);if(r===ar)return s.UNSIGNED_BYTE;if(r===Yf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$f)return s.UNSIGNED_SHORT_5_5_5_1;if(r===G0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===V0)return s.BYTE;if(r===H0)return s.SHORT;if(r===ya)return s.UNSIGNED_SHORT;if(r===Xf)return s.INT;if(r===ms)return s.UNSIGNED_INT;if(r===nr)return s.FLOAT;if(r===Ea)return s.HALF_FLOAT;if(r===j0)return s.ALPHA;if(r===W0)return s.RGB;if(r===di)return s.RGBA;if(r===X0)return s.LUMINANCE;if(r===Y0)return s.LUMINANCE_ALPHA;if(r===po)return s.DEPTH_COMPONENT;if(r===Eo)return s.DEPTH_STENCIL;if(r===$0)return s.RED;if(r===qf)return s.RED_INTEGER;if(r===q0)return s.RG;if(r===Kf)return s.RG_INTEGER;if(r===Zf)return s.RGBA_INTEGER;if(r===cc||r===uc||r===dc||r===fc)if(c===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===cc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===cc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pf||r===mf||r===gf||r===xf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===pf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vf||r===_f||r===yf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===vf||r===_f)return c===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===yf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sf||r===Mf||r===Ef||r===wf||r===Tf||r===bf||r===Af||r===Cf||r===Rf||r===Pf||r===Lf||r===Nf||r===Df||r===If)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Sf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ef)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Af)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Df)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===If)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hc||r===Uf||r===kf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===hc)return c===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===K0||r===Ff||r===Of||r===zf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===hc)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ff)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Of)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class wb extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class uo extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tb={type:"move"};class Yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,r),y=this._getHandJoint(h,w);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],x=p.position.distanceTo(g.position),v=.02,M=.005;h.inputState.pinching&&x>v+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=v-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Tb)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new uo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new In,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Vr({vertexShader:bb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wn(new Ta(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rb extends xs{constructor(e,t){super();const r=this;let o=null,l=1,c=null,u="local-floor",f=1,h=null,p=null,g=null,x=null,v=null,M=null;const w=new Cb,_=t.getContextAttributes();let y=null,A=null;const C=[],T=[],k=new ft;let L=null;const D=new Dn;D.viewport=new $t;const z=new Dn;z.viewport=new $t;const I=[D,z],P=new wb;let B=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let he=C[q];return he===void 0&&(he=new Yd,C[q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(q){let he=C[q];return he===void 0&&(he=new Yd,C[q]=he),he.getGripSpace()},this.getHand=function(q){let he=C[q];return he===void 0&&(he=new Yd,C[q]=he),he.getHandSpace()};function W(q){const he=T.indexOf(q.inputSource);if(he===-1)return;const ye=C[he];ye!==void 0&&(ye.update(q.inputSource,q.frame,h||c),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function ae(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",le);for(let q=0;q<C.length;q++){const he=T[q];he!==null&&(T[q]=null,C[q].disconnect(he))}B=null,K=null,w.reset(),e.setRenderTarget(y),v=null,x=null,g=null,o=null,A=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(L),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return x!==null?x:v},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",le),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(k),o.renderState.layers===void 0){const he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};v=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),A=new gs(v.framebufferWidth,v.framebufferHeight,{format:di,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let he=null,ye=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=_.stencil?Eo:po,ye=_.stencil?Mo:ms);const Ce={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};g=new XRWebGLBinding(o,t),x=g.createProjectionLayer(Ce),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),A=new gs(x.textureWidth,x.textureHeight,{format:di,type:ar,depthTexture:new lx(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(u),Te.setContext(o),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function le(q){for(let he=0;he<q.removed.length;he++){const ye=q.removed[he],xe=T.indexOf(ye);xe>=0&&(T[xe]=null,C[xe].disconnect(ye))}for(let he=0;he<q.added.length;he++){const ye=q.added[he];let xe=T.indexOf(ye);if(xe===-1){for(let Le=0;Le<C.length;Le++)if(Le>=T.length){T.push(ye),xe=Le;break}else if(T[Le]===null){T[Le]=ye,xe=Le;break}if(xe===-1)break}const Ce=C[xe];Ce&&Ce.connect(ye)}}const de=new J,oe=new J;function V(q,he,ye){de.setFromMatrixPosition(he.matrixWorld),oe.setFromMatrixPosition(ye.matrixWorld);const xe=de.distanceTo(oe),Ce=he.projectionMatrix.elements,Le=ye.projectionMatrix.elements,Ze=Ce[14]/(Ce[10]-1),pt=Ce[14]/(Ce[10]+1),mt=(Ce[9]+1)/Ce[5],Nt=(Ce[9]-1)/Ce[5],X=(Ce[8]-1)/Ce[0],Kt=(Le[8]+1)/Le[0],ct=Ze*X,gt=Ze*Kt,Je=xe/(-X+Kt),je=Je*-X;if(he.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(je),q.translateZ(Je),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const ze=Ze+Je,U=pt+Je,R=ct-je,Z=gt+(xe-je),pe=mt*pt/U*ze,me=Nt*pt/U*ze;q.projectionMatrix.makePerspective(R,Z,pe,me,ze,U),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ce(q,he){he===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(he.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;let he=q.near,ye=q.far;w.texture!==null&&(w.depthNear>0&&(he=w.depthNear),w.depthFar>0&&(ye=w.depthFar)),P.near=z.near=D.near=he,P.far=z.far=D.far=ye,(B!==P.near||K!==P.far)&&(o.updateRenderState({depthNear:P.near,depthFar:P.far}),B=P.near,K=P.far),D.layers.mask=q.layers.mask|2,z.layers.mask=q.layers.mask|4,P.layers.mask=D.layers.mask|z.layers.mask;const xe=q.parent,Ce=P.cameras;ce(P,xe);for(let Le=0;Le<Ce.length;Le++)ce(Ce[Le],xe);Ce.length===2?V(P,D,z):P.projectionMatrix.copy(D.projectionMatrix),te(q,P,xe)};function te(q,he,ye){ye===null?q.matrix.copy(he.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(he.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Sa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(x===null&&v===null))return f},this.setFoveation=function(q){f=q,x!==null&&(x.fixedFoveation=q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(P)};let F=null;function ee(q,he){if(p=he.getViewerPose(h||c),M=he,p!==null){const ye=p.views;v!==null&&(e.setRenderTargetFramebuffer(A,v.framebuffer),e.setRenderTarget(A));let xe=!1;ye.length!==P.cameras.length&&(P.cameras.length=0,xe=!0);for(let Le=0;Le<ye.length;Le++){const Ze=ye[Le];let pt=null;if(v!==null)pt=v.getViewport(Ze);else{const Nt=g.getViewSubImage(x,Ze);pt=Nt.viewport,Le===0&&(e.setRenderTargetTextures(A,Nt.colorTexture,x.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(A))}let mt=I[Le];mt===void 0&&(mt=new Dn,mt.layers.enable(Le),mt.viewport=new $t,I[Le]=mt),mt.matrix.fromArray(Ze.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ze.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(pt.x,pt.y,pt.width,pt.height),Le===0&&(P.matrix.copy(mt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),xe===!0&&P.cameras.push(mt)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Le=g.getDepthInformation(ye[0]);Le&&Le.isValid&&Le.texture&&w.init(e,Le,o.renderState)}}for(let ye=0;ye<C.length;ye++){const xe=T[ye],Ce=C[ye];xe!==null&&Ce!==void 0&&Ce.update(xe,he,h||c)}F&&F(q,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const Te=new ox;Te.setAnimationLoop(ee),this.setAnimationLoop=function(q){F=q},this.dispose=function(){}}}const as=new Ai,Pb=new Bt;function Lb(s,e){function t(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function r(_,y){y.color.getRGB(_.fogColor.value,ix(s)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function o(_,y,A,C,T){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(_,y):y.isMeshToonMaterial?(l(_,y),g(_,y)):y.isMeshPhongMaterial?(l(_,y),p(_,y)):y.isMeshStandardMaterial?(l(_,y),x(_,y),y.isMeshPhysicalMaterial&&v(_,y,T)):y.isMeshMatcapMaterial?(l(_,y),M(_,y)):y.isMeshDepthMaterial?l(_,y):y.isMeshDistanceMaterial?(l(_,y),w(_,y)):y.isMeshNormalMaterial?l(_,y):y.isLineBasicMaterial?(c(_,y),y.isLineDashedMaterial&&u(_,y)):y.isPointsMaterial?f(_,y,A,C):y.isSpriteMaterial?h(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,t(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===Xn&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,t(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===Xn&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,t(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,t(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const A=e.get(y),C=A.envMap,T=A.envMapRotation;C&&(_.envMap.value=C,as.copy(T),as.x*=-1,as.y*=-1,as.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),_.envMapRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(as)),_.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,_.aoMapTransform))}function c(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform))}function u(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function f(_,y,A,C){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*A,_.scale.value=C*.5,y.map&&(_.map.value=y.map,t(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function h(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function p(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function g(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function x(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function v(_,y,A){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,y){y.matcap&&(_.matcap.value=y.matcap)}function w(_,y){const A=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Nb(s,e,t,r){let o={},l={},c=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(A,C){const T=C.program;r.uniformBlockBinding(A,T)}function h(A,C){let T=o[A.id];T===void 0&&(M(A),T=p(A),o[A.id]=T,A.addEventListener("dispose",_));const k=C.program;r.updateUBOMapping(A,k);const L=e.render.frame;l[A.id]!==L&&(x(A),l[A.id]=L)}function p(A){const C=g();A.__bindingPointIndex=C;const T=s.createBuffer(),k=A.__size,L=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,k,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,T),T}function g(){for(let A=0;A<u;A++)if(c.indexOf(A)===-1)return c.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(A){const C=o[A.id],T=A.uniforms,k=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let L=0,D=T.length;L<D;L++){const z=Array.isArray(T[L])?T[L]:[T[L]];for(let I=0,P=z.length;I<P;I++){const B=z[I];if(v(B,L,I,k)===!0){const K=B.__offset,W=Array.isArray(B.value)?B.value:[B.value];let ae=0;for(let le=0;le<W.length;le++){const de=W[le],oe=w(de);typeof de=="number"||typeof de=="boolean"?(B.__data[0]=de,s.bufferSubData(s.UNIFORM_BUFFER,K+ae,B.__data)):de.isMatrix3?(B.__data[0]=de.elements[0],B.__data[1]=de.elements[1],B.__data[2]=de.elements[2],B.__data[3]=0,B.__data[4]=de.elements[3],B.__data[5]=de.elements[4],B.__data[6]=de.elements[5],B.__data[7]=0,B.__data[8]=de.elements[6],B.__data[9]=de.elements[7],B.__data[10]=de.elements[8],B.__data[11]=0):(de.toArray(B.__data,ae),ae+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(A,C,T,k){const L=A.value,D=C+"_"+T;if(k[D]===void 0)return typeof L=="number"||typeof L=="boolean"?k[D]=L:k[D]=L.clone(),!0;{const z=k[D];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return k[D]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function M(A){const C=A.uniforms;let T=0;const k=16;for(let D=0,z=C.length;D<z;D++){const I=Array.isArray(C[D])?C[D]:[C[D]];for(let P=0,B=I.length;P<B;P++){const K=I[P],W=Array.isArray(K.value)?K.value:[K.value];for(let ae=0,le=W.length;ae<le;ae++){const de=W[ae],oe=w(de),V=T%k,ce=V%oe.boundary,te=V+ce;T+=ce,te!==0&&k-te<oe.storage&&(T+=k-te),K.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=T,T+=oe.storage}}}const L=T%k;return L>0&&(T+=k-L),A.__size=T,A.__cache={},this}function w(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),C}function _(A){const C=A.target;C.removeEventListener("dispose",_);const T=c.indexOf(C.__bindingPointIndex);c.splice(T,1),s.deleteBuffer(o[C.id]),delete o[C.id],delete l[C.id]}function y(){for(const A in o)s.deleteBuffer(o[A]);c=[],o={},l={}}return{bind:f,update:h,dispose:y}}class hx{constructor(e={}){const{canvas:t=SM(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let v;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=r.getContextAttributes().alpha}else v=c;const M=new Uint32Array(4),w=new Int32Array(4);let _=null,y=null;const A=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=sr,this.toneMappingExposure=1;const T=this;let k=!1,L=0,D=0,z=null,I=-1,P=null;const B=new $t,K=new $t;let W=null;const ae=new yt(0);let le=0,de=t.width,oe=t.height,V=1,ce=null,te=null;const F=new $t(0,0,de,oe),ee=new $t(0,0,de,oe);let Te=!1;const q=new nh;let he=!1,ye=!1;const xe=new Bt,Ce=new Bt,Le=new J,Ze=new $t,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Nt(){return z===null?V:1}let X=r;function Kt(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:o,stencil:l,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ac}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",De,!1),X===null){const Y="webgl2";if(X=Kt(Y,N),X===null)throw Kt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let ct,gt,Je,je,ze,U,R,Z,pe,me,fe,Ve,Ae,Fe,at,Se,Be,et,We,Ue,xt,ut,It,j;function Pe(){ct=new Ow(X),ct.init(),ut=new Eb(X,ct),gt=new Nw(X,ct,e,ut),Je=new yb(X,ct),gt.reverseDepthBuffer&&x&&Je.buffers.depth.setReversed(!0),je=new Vw(X),ze=new sb,U=new Mb(X,ct,Je,ze,gt,ut,je),R=new Iw(T),Z=new Fw(T),pe=new $M(X),It=new Pw(X,pe),me=new zw(X,pe,je,It),fe=new Gw(X,me,pe,je),We=new Hw(X,gt,U),Se=new Dw(ze),Ve=new rb(T,R,Z,ct,gt,It,Se),Ae=new Lb(T,ze),Fe=new ab,at=new hb(ct),et=new Rw(T,R,Z,Je,fe,v,f),Be=new vb(T,fe,gt),j=new Nb(X,je,gt,Je),Ue=new Lw(X,ct,je),xt=new Bw(X,ct,je),je.programs=Ve.programs,T.capabilities=gt,T.extensions=ct,T.properties=ze,T.renderLists=Fe,T.shadowMap=Be,T.state=Je,T.info=je}Pe();const ue=new Rb(T,X);this.xr=ue,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const N=ct.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ct.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(N){N!==void 0&&(V=N,this.setSize(de,oe,!1))},this.getSize=function(N){return N.set(de,oe)},this.setSize=function(N,Y,re=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=N,oe=Y,t.width=Math.floor(N*V),t.height=Math.floor(Y*V),re===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(de*V,oe*V).floor()},this.setDrawingBufferSize=function(N,Y,re){de=N,oe=Y,V=re,t.width=Math.floor(N*re),t.height=Math.floor(Y*re),this.setViewport(0,0,N,Y)},this.getCurrentViewport=function(N){return N.copy(B)},this.getViewport=function(N){return N.copy(F)},this.setViewport=function(N,Y,re,se){N.isVector4?F.set(N.x,N.y,N.z,N.w):F.set(N,Y,re,se),Je.viewport(B.copy(F).multiplyScalar(V).round())},this.getScissor=function(N){return N.copy(ee)},this.setScissor=function(N,Y,re,se){N.isVector4?ee.set(N.x,N.y,N.z,N.w):ee.set(N,Y,re,se),Je.scissor(K.copy(ee).multiplyScalar(V).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(N){Je.setScissorTest(Te=N)},this.setOpaqueSort=function(N){ce=N},this.setTransparentSort=function(N){te=N},this.getClearColor=function(N){return N.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(N=!0,Y=!0,re=!0){let se=0;if(N){let $=!1;if(z!==null){const be=z.texture.format;$=be===Zf||be===Kf||be===qf}if($){const be=z.texture.type,Ee=be===ar||be===ms||be===ya||be===Mo||be===Yf||be===$f,$e=et.getClearColor(),Xe=et.getClearAlpha(),st=$e.r,lt=$e.g,qe=$e.b;Ee?(M[0]=st,M[1]=lt,M[2]=qe,M[3]=Xe,X.clearBufferuiv(X.COLOR,0,M)):(w[0]=st,w[1]=lt,w[2]=qe,w[3]=Xe,X.clearBufferiv(X.COLOR,0,w))}else se|=X.COLOR_BUFFER_BIT}Y&&(se|=X.DEPTH_BUFFER_BIT),re&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Fe.dispose(),at.dispose(),ze.dispose(),R.dispose(),Z.dispose(),fe.dispose(),It.dispose(),j.dispose(),Ve.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",_s),ue.removeEventListener("sessionend",lr),ki.stop()};function ge(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const N=je.autoReset,Y=Be.enabled,re=Be.autoUpdate,se=Be.needsUpdate,$=Be.type;Pe(),je.autoReset=N,Be.enabled=Y,Be.autoUpdate=re,Be.needsUpdate=se,Be.type=$}function De(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function dt(N){const Y=N.target;Y.removeEventListener("dispose",dt),Vt(Y)}function Vt(N){Jt(N),ze.remove(N)}function Jt(N){const Y=ze.get(N).programs;Y!==void 0&&(Y.forEach(function(re){Ve.releaseProgram(re)}),N.isShaderMaterial&&Ve.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,re,se,$,be){Y===null&&(Y=pt);const Ee=$.isMesh&&$.matrixWorld.determinant()<0,$e=Ca(N,Y,re,se,$);Je.setMaterial(se,Ee);let Xe=re.index,st=1;if(se.wireframe===!0){if(Xe=me.getWireframeAttribute(re),Xe===void 0)return;st=2}const lt=re.drawRange,qe=re.attributes.position;let Tt=lt.start*st,Dt=(lt.start+lt.count)*st;be!==null&&(Tt=Math.max(Tt,be.start*st),Dt=Math.min(Dt,(be.start+be.count)*st)),Xe!==null?(Tt=Math.max(Tt,0),Dt=Math.min(Dt,Xe.count)):qe!=null&&(Tt=Math.max(Tt,0),Dt=Math.min(Dt,qe.count));const wt=Dt-Tt;if(wt<0||wt===1/0)return;It.setup($,se,$e,re,Xe);let gn,ht=Ue;if(Xe!==null&&(gn=pe.get(Xe),ht=xt,ht.setIndex(gn)),$.isMesh)se.wireframe===!0?(Je.setLineWidth(se.wireframeLinewidth*Nt()),ht.setMode(X.LINES)):ht.setMode(X.TRIANGLES);else if($.isLine){let Qe=se.linewidth;Qe===void 0&&(Qe=1),Je.setLineWidth(Qe*Nt()),$.isLineSegments?ht.setMode(X.LINES):$.isLineLoop?ht.setMode(X.LINE_LOOP):ht.setMode(X.LINE_STRIP)}else $.isPoints?ht.setMode(X.POINTS):$.isSprite&&ht.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ht.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))ht.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qe=$._multiDrawStarts,pi=$._multiDrawCounts,Rt=$._multiDrawCount,xn=Xe?pe.get(Xe).bytesPerElement:1,mi=ze.get(se).currentProgram.getUniforms();for(let en=0;en<Rt;en++)mi.setValue(X,"_gl_DrawID",en),ht.render(Qe[en]/xn,pi[en])}else if($.isInstancedMesh)ht.renderInstances(Tt,wt,$.count);else if(re.isInstancedBufferGeometry){const Qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,pi=Math.min(re.instanceCount,Qe);ht.renderInstances(Tt,wt,pi)}else ht.render(Tt,wt)};function bt(N,Y,re){N.transparent===!0&&N.side===Ti&&N.forceSinglePass===!1?(N.side=Xn,N.needsUpdate=!0,ys(N,Y,re),N.side=zr,N.needsUpdate=!0,ys(N,Y,re),N.side=Ti):ys(N,Y,re)}this.compile=function(N,Y,re=null){re===null&&(re=N),y=at.get(re),y.init(Y),C.push(y),re.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))}),N!==re&&N.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))}),y.setupLights();const se=new Set;return N.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const be=$.material;if(be)if(Array.isArray(be))for(let Ee=0;Ee<be.length;Ee++){const $e=be[Ee];bt($e,re,$),se.add($e)}else bt(be,re,$),se.add(be)}),C.pop(),y=null,se},this.compileAsync=function(N,Y,re=null){const se=this.compile(N,Y,re);return new Promise($=>{function be(){if(se.forEach(function(Ee){ze.get(Ee).currentProgram.isReady()&&se.delete(Ee)}),se.size===0){$(N);return}setTimeout(be,10)}ct.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Un=null;function bn(N){Un&&Un(N)}function _s(){ki.stop()}function lr(){ki.start()}const ki=new ox;ki.setAnimationLoop(bn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(N){Un=N,ue.setAnimationLoop(N),N===null?ki.stop():ki.start()},ue.addEventListener("sessionstart",_s),ue.addEventListener("sessionend",lr),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Y),Y=ue.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,Y,z),y=at.get(N,C.length),y.init(Y),C.push(y),Ce.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),q.setFromProjectionMatrix(Ce),ye=this.localClippingEnabled,he=Se.init(this.clippingPlanes,ye),_=Fe.get(N,A.length),_.init(),A.push(_),ue.enabled===!0&&ue.isPresenting===!0){const be=T.xr.getDepthSensingMesh();be!==null&&Fi(be,Y,-1/0,T.sortObjects)}Fi(N,Y,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(ce,te),mt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,mt&&et.addToRenderList(_,N),this.info.render.frame++,he===!0&&Se.beginShadows();const re=y.state.shadowsArray;Be.render(re,N,Y),he===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=_.opaque,$=_.transmissive;if(y.setupLights(),Y.isArrayCamera){const be=Y.cameras;if($.length>0)for(let Ee=0,$e=be.length;Ee<$e;Ee++){const Xe=be[Ee];Gr(se,$,N,Xe)}mt&&et.render(N);for(let Ee=0,$e=be.length;Ee<$e;Ee++){const Xe=be[Ee];Hr(_,N,Xe,Xe.viewport)}}else $.length>0&&Gr(se,$,N,Y),mt&&et.render(N),Hr(_,N,Y);z!==null&&(U.updateMultisampleRenderTarget(z),U.updateRenderTargetMipmap(z)),N.isScene===!0&&N.onAfterRender(T,N,Y),It.resetDefaultState(),I=-1,P=null,C.pop(),C.length>0?(y=C[C.length-1],he===!0&&Se.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,A.pop(),A.length>0?_=A[A.length-1]:_=null};function Fi(N,Y,re,se){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)re=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)y.pushLight(N),N.castShadow&&y.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||q.intersectsSprite(N)){se&&Ze.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ce);const Ee=fe.update(N),$e=N.material;$e.visible&&_.push(N,Ee,$e,re,Ze.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||q.intersectsObject(N))){const Ee=fe.update(N),$e=N.material;if(se&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ze.copy(N.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ze.copy(Ee.boundingSphere.center)),Ze.applyMatrix4(N.matrixWorld).applyMatrix4(Ce)),Array.isArray($e)){const Xe=Ee.groups;for(let st=0,lt=Xe.length;st<lt;st++){const qe=Xe[st],Tt=$e[qe.materialIndex];Tt&&Tt.visible&&_.push(N,Ee,Tt,re,Ze.z,qe)}}else $e.visible&&_.push(N,Ee,$e,re,Ze.z,null)}}const be=N.children;for(let Ee=0,$e=be.length;Ee<$e;Ee++)Fi(be[Ee],Y,re,se)}function Hr(N,Y,re,se){const $=N.opaque,be=N.transmissive,Ee=N.transparent;y.setupLightsView(re),he===!0&&Se.setGlobalState(T.clippingPlanes,re),se&&Je.viewport(B.copy(se)),$.length>0&&cr($,Y,re),be.length>0&&cr(be,Y,re),Ee.length>0&&cr(Ee,Y,re),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function Gr(N,Y,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[se.id]===void 0&&(y.state.transmissionRenderTarget[se.id]=new gs(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Ea:ar,minFilter:Fr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const be=y.state.transmissionRenderTarget[se.id],Ee=se.viewport||B;be.setSize(Ee.z,Ee.w);const $e=T.getRenderTarget();T.setRenderTarget(be),T.getClearColor(ae),le=T.getClearAlpha(),le<1&&T.setClearColor(16777215,.5),T.clear(),mt&&et.render(re);const Xe=T.toneMapping;T.toneMapping=sr;const st=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),y.setupLightsView(se),he===!0&&Se.setGlobalState(T.clippingPlanes,se),cr(N,re,se),U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be),ct.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let qe=0,Tt=Y.length;qe<Tt;qe++){const Dt=Y[qe],wt=Dt.object,gn=Dt.geometry,ht=Dt.material,Qe=Dt.group;if(ht.side===Ti&&wt.layers.test(se.layers)){const pi=ht.side;ht.side=Xn,ht.needsUpdate=!0,ba(wt,re,se,gn,ht,Qe),ht.side=pi,ht.needsUpdate=!0,lt=!0}}lt===!0&&(U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be))}T.setRenderTarget($e),T.setClearColor(ae,le),st!==void 0&&(se.viewport=st),T.toneMapping=Xe}function cr(N,Y,re){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,be=N.length;$<be;$++){const Ee=N[$],$e=Ee.object,Xe=Ee.geometry,st=se===null?Ee.material:se,lt=Ee.group;$e.layers.test(re.layers)&&ba($e,Y,re,Xe,st,lt)}}function ba(N,Y,re,se,$,be){N.onBeforeRender(T,Y,re,se,$,be),N.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),$.onBeforeRender(T,Y,re,se,N,be),$.transparent===!0&&$.side===Ti&&$.forceSinglePass===!1?($.side=Xn,$.needsUpdate=!0,T.renderBufferDirect(re,Y,se,$,N,be),$.side=zr,$.needsUpdate=!0,T.renderBufferDirect(re,Y,se,$,N,be),$.side=Ti):T.renderBufferDirect(re,Y,se,$,N,be),N.onAfterRender(T,Y,re,se,$,be)}function ys(N,Y,re){Y.isScene!==!0&&(Y=pt);const se=ze.get(N),$=y.state.lights,be=y.state.shadowsArray,Ee=$.state.version,$e=Ve.getParameters(N,$.state,be,Y,re),Xe=Ve.getProgramCacheKey($e);let st=se.programs;se.environment=N.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(N.isMeshStandardMaterial?Z:R).get(N.envMap||se.environment),se.envMapRotation=se.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,st===void 0&&(N.addEventListener("dispose",dt),st=new Map,se.programs=st);let lt=st.get(Xe);if(lt!==void 0){if(se.currentProgram===lt&&se.lightsStateVersion===Ee)return Ci(N,$e),lt}else $e.uniforms=Ve.getUniforms(N),N.onBeforeCompile($e,T),lt=Ve.acquireProgram($e,Xe),st.set(Xe,lt),se.uniforms=$e.uniforms;const qe=se.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(qe.clippingPlanes=Se.uniform),Ci(N,$e),se.needsLights=Ic(N),se.lightsStateVersion=Ee,se.needsLights&&(qe.ambientLightColor.value=$.state.ambient,qe.lightProbe.value=$.state.probe,qe.directionalLights.value=$.state.directional,qe.directionalLightShadows.value=$.state.directionalShadow,qe.spotLights.value=$.state.spot,qe.spotLightShadows.value=$.state.spotShadow,qe.rectAreaLights.value=$.state.rectArea,qe.ltc_1.value=$.state.rectAreaLTC1,qe.ltc_2.value=$.state.rectAreaLTC2,qe.pointLights.value=$.state.point,qe.pointLightShadows.value=$.state.pointShadow,qe.hemisphereLights.value=$.state.hemi,qe.directionalShadowMap.value=$.state.directionalShadowMap,qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qe.spotShadowMap.value=$.state.spotShadowMap,qe.spotLightMatrix.value=$.state.spotLightMatrix,qe.spotLightMap.value=$.state.spotLightMap,qe.pointShadowMap.value=$.state.pointShadowMap,qe.pointShadowMatrix.value=$.state.pointShadowMatrix),se.currentProgram=lt,se.uniformsList=null,lt}function Aa(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=pc.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Ci(N,Y){const re=ze.get(N);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function Ca(N,Y,re,se,$){Y.isScene!==!0&&(Y=pt),U.resetTextureUnits();const be=Y.fog,Ee=se.isMeshStandardMaterial?Y.environment:null,$e=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:To,Xe=(se.isMeshStandardMaterial?Z:R).get(se.envMap||Ee),st=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,lt=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),qe=!!re.morphAttributes.position,Tt=!!re.morphAttributes.normal,Dt=!!re.morphAttributes.color;let wt=sr;se.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(wt=T.toneMapping);const gn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ht=gn!==void 0?gn.length:0,Qe=ze.get(se),pi=y.state.lights;if(he===!0&&(ye===!0||N!==P)){const An=N===P&&se.id===I;Se.setState(se,N,An)}let Rt=!1;se.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==pi.state.version||Qe.outputColorSpace!==$e||$.isBatchedMesh&&Qe.batching===!1||!$.isBatchedMesh&&Qe.batching===!0||$.isBatchedMesh&&Qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qe.instancing===!1||!$.isInstancedMesh&&Qe.instancing===!0||$.isSkinnedMesh&&Qe.skinning===!1||!$.isSkinnedMesh&&Qe.skinning===!0||$.isInstancedMesh&&Qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qe.instancingMorph===!1&&$.morphTexture!==null||Qe.envMap!==Xe||se.fog===!0&&Qe.fog!==be||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Se.numPlanes||Qe.numIntersection!==Se.numIntersection)||Qe.vertexAlphas!==st||Qe.vertexTangents!==lt||Qe.morphTargets!==qe||Qe.morphNormals!==Tt||Qe.morphColors!==Dt||Qe.toneMapping!==wt||Qe.morphTargetsCount!==ht)&&(Rt=!0):(Rt=!0,Qe.__version=se.version);let xn=Qe.currentProgram;Rt===!0&&(xn=ys(se,Y,$));let mi=!1,en=!1,Ri=!1;const Ot=xn.getUniforms(),ti=Qe.uniforms;if(Je.useProgram(xn.program)&&(mi=!0,en=!0,Ri=!0),se.id!==I&&(I=se.id,en=!0),mi||P!==N){Je.buffers.depth.getReversed()?(xe.copy(N.projectionMatrix),EM(xe),wM(xe),Ot.setValue(X,"projectionMatrix",xe)):Ot.setValue(X,"projectionMatrix",N.projectionMatrix),Ot.setValue(X,"viewMatrix",N.matrixWorldInverse);const ni=Ot.map.cameraPosition;ni!==void 0&&ni.setValue(X,Le.setFromMatrixPosition(N.matrixWorld)),gt.logarithmicDepthBuffer&&Ot.setValue(X,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ot.setValue(X,"isOrthographic",N.isOrthographicCamera===!0),P!==N&&(P=N,en=!0,Ri=!0)}if($.isSkinnedMesh){Ot.setOptional(X,$,"bindMatrix"),Ot.setOptional(X,$,"bindMatrixInverse");const An=$.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ot.setValue(X,"boneTexture",An.boneTexture,U))}$.isBatchedMesh&&(Ot.setOptional(X,$,"batchingTexture"),Ot.setValue(X,"batchingTexture",$._matricesTexture,U),Ot.setOptional(X,$,"batchingIdTexture"),Ot.setValue(X,"batchingIdTexture",$._indirectTexture,U),Ot.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&Ot.setValue(X,"batchingColorTexture",$._colorsTexture,U));const Oi=re.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&We.update($,re,xn),(en||Qe.receiveShadow!==$.receiveShadow)&&(Qe.receiveShadow=$.receiveShadow,Ot.setValue(X,"receiveShadow",$.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(ti.envMap.value=Xe,ti.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(ti.envMapIntensity.value=Y.environmentIntensity),en&&(Ot.setValue(X,"toneMappingExposure",T.toneMappingExposure),Qe.needsLights&&Ra(ti,Ri),be&&se.fog===!0&&Ae.refreshFogUniforms(ti,be),Ae.refreshMaterialUniforms(ti,se,V,oe,y.state.transmissionRenderTarget[N.id]),pc.upload(X,Aa(Qe),ti,U)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(pc.upload(X,Aa(Qe),ti,U),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ot.setValue(X,"center",$.center),Ot.setValue(X,"modelViewMatrix",$.modelViewMatrix),Ot.setValue(X,"normalMatrix",$.normalMatrix),Ot.setValue(X,"modelMatrix",$.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const An=se.uniformsGroups;for(let ni=0,kn=An.length;ni<kn;ni++){const Pa=An[ni];j.update(Pa,xn),j.bind(Pa,xn)}}return xn}function Ra(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function Ic(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(N,Y,re){ze.get(N.texture).__webglTexture=Y,ze.get(N.depthTexture).__webglTexture=re;const se=ze.get(N);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,Y){const re=ze.get(N);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(N,Y=0,re=0){z=N,L=Y,D=re;let se=!0,$=null,be=!1,Ee=!1;if(N){const Xe=ze.get(N);if(Xe.__useDefaultFramebuffer!==void 0)Je.bindFramebuffer(X.FRAMEBUFFER,null),se=!1;else if(Xe.__webglFramebuffer===void 0)U.setupRenderTarget(N);else if(Xe.__hasExternalTextures)U.rebindTextures(N,ze.get(N.texture).__webglTexture,ze.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const qe=N.depthTexture;if(Xe.__boundDepthTexture!==qe){if(qe!==null&&ze.has(qe)&&(N.width!==qe.image.width||N.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(N)}}const st=N.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ee=!0);const lt=ze.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[Y])?$=lt[Y][re]:$=lt[Y],be=!0):N.samples>0&&U.useMultisampledRTT(N)===!1?$=ze.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?$=lt[re]:$=lt,B.copy(N.viewport),K.copy(N.scissor),W=N.scissorTest}else B.copy(F).multiplyScalar(V).floor(),K.copy(ee).multiplyScalar(V).floor(),W=Te;if(Je.bindFramebuffer(X.FRAMEBUFFER,$)&&se&&Je.drawBuffers(N,$),Je.viewport(B),Je.scissor(K),Je.setScissorTest(W),be){const Xe=ze.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Xe.__webglTexture,re)}else if(Ee){const Xe=ze.get(N.texture),st=Y||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.__webglTexture,re||0,st)}I=-1},this.readRenderTargetPixels=function(N,Y,re,se,$,be,Ee){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=ze.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ee!==void 0&&($e=$e[Ee]),$e){Je.bindFramebuffer(X.FRAMEBUFFER,$e);try{const Xe=N.texture,st=Xe.format,lt=Xe.type;if(!gt.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-se&&re>=0&&re<=N.height-$&&X.readPixels(Y,re,se,$,ut.convert(st),ut.convert(lt),be)}finally{const Xe=z!==null?ze.get(z).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(N,Y,re,se,$,be,Ee){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=ze.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ee!==void 0&&($e=$e[Ee]),$e){const Xe=N.texture,st=Xe.format,lt=Xe.type;if(!gt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=N.width-se&&re>=0&&re<=N.height-$){Je.bindFramebuffer(X.FRAMEBUFFER,$e);const qe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,qe),X.bufferData(X.PIXEL_PACK_BUFFER,be.byteLength,X.STREAM_READ),X.readPixels(Y,re,se,$,ut.convert(st),ut.convert(lt),0);const Tt=z!==null?ze.get(z).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,Tt);const Dt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await MM(X,Dt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,qe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,be),X.deleteBuffer(qe),X.deleteSync(Dt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,Y=null,re=0){N.isTexture!==!0&&(ma("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,N=arguments[1]);const se=Math.pow(2,-re),$=Math.floor(N.image.width*se),be=Math.floor(N.image.height*se),Ee=Y!==null?Y.x:0,$e=Y!==null?Y.y:0;U.setTexture2D(N,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,Ee,$e,$,be),Je.unbindTexture()},this.copyTextureToTexture=function(N,Y,re=null,se=null,$=0){N.isTexture!==!0&&(ma("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,N=arguments[1],Y=arguments[2],$=arguments[3]||0,re=null);let be,Ee,$e,Xe,st,lt,qe,Tt,Dt;const wt=N.isCompressedTexture?N.mipmaps[$]:N.image;re!==null?(be=re.max.x-re.min.x,Ee=re.max.y-re.min.y,$e=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,st=re.min.y,lt=re.isBox3?re.min.z:0):(be=wt.width,Ee=wt.height,$e=wt.depth||1,Xe=0,st=0,lt=0),se!==null?(qe=se.x,Tt=se.y,Dt=se.z):(qe=0,Tt=0,Dt=0);const gn=ut.convert(Y.format),ht=ut.convert(Y.type);let Qe;Y.isData3DTexture?(U.setTexture3D(Y,0),Qe=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),Qe=X.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),Qe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const pi=X.getParameter(X.UNPACK_ROW_LENGTH),Rt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),xn=X.getParameter(X.UNPACK_SKIP_PIXELS),mi=X.getParameter(X.UNPACK_SKIP_ROWS),en=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,wt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,wt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Xe),X.pixelStorei(X.UNPACK_SKIP_ROWS,st),X.pixelStorei(X.UNPACK_SKIP_IMAGES,lt);const Ri=N.isDataArrayTexture||N.isData3DTexture,Ot=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){const ti=ze.get(N),Oi=ze.get(Y),An=ze.get(ti.__renderTarget),ni=ze.get(Oi.__renderTarget);Je.bindFramebuffer(X.READ_FRAMEBUFFER,An.__webglFramebuffer),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let kn=0;kn<$e;kn++)Ri&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ze.get(N).__webglTexture,$,lt+kn),N.isDepthTexture?(Ot&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ze.get(Y).__webglTexture,$,Dt+kn),X.blitFramebuffer(Xe,st,be,Ee,qe,Tt,be,Ee,X.DEPTH_BUFFER_BIT,X.NEAREST)):Ot?X.copyTexSubImage3D(Qe,$,qe,Tt,Dt+kn,Xe,st,be,Ee):X.copyTexSubImage2D(Qe,$,qe,Tt,Dt+kn,Xe,st,be,Ee);Je.bindFramebuffer(X.READ_FRAMEBUFFER,null),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ot?N.isDataTexture||N.isData3DTexture?X.texSubImage3D(Qe,$,qe,Tt,Dt,be,Ee,$e,gn,ht,wt.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Qe,$,qe,Tt,Dt,be,Ee,$e,gn,wt.data):X.texSubImage3D(Qe,$,qe,Tt,Dt,be,Ee,$e,gn,ht,wt):N.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,$,qe,Tt,be,Ee,gn,ht,wt.data):N.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,$,qe,Tt,wt.width,wt.height,gn,wt.data):X.texSubImage2D(X.TEXTURE_2D,$,qe,Tt,be,Ee,gn,ht,wt);X.pixelStorei(X.UNPACK_ROW_LENGTH,pi),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Rt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,xn),X.pixelStorei(X.UNPACK_SKIP_ROWS,mi),X.pixelStorei(X.UNPACK_SKIP_IMAGES,en),$===0&&Y.generateMipmaps&&X.generateMipmap(Qe),Je.unbindTexture()},this.copyTextureToTexture3D=function(N,Y,re=null,se=null,$=0){return N.isTexture!==!0&&(ma("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,se=arguments[1]||null,N=arguments[2],Y=arguments[3],$=arguments[4]||0),ma('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,Y,re,se,$)},this.initRenderTarget=function(N){ze.get(N).__webglFramebuffer===void 0&&U.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?U.setTextureCube(N,0):N.isData3DTexture?U.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?U.setTexture2DArray(N,0):U.setTexture2D(N,0),Je.unbindTexture()},this.resetState=function(){L=0,D=0,z=null,Je.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}class Dc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(e),this.density=t}clone(){return new Dc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mc extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rh extends vs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ec=new J,wc=new J,Zg=new Bt,da=new Lc,Ql=new Pc,$d=new J,Qg=new J;class Db extends mn{constructor(e=new ei,t=new rh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Ec.fromBufferAttribute(t,o-1),wc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Ec.distanceTo(wc);e.setAttribute("lineDistance",new sn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(o),Ql.radius+=l,e.ray.intersectsSphere(Ql)===!1)return;Zg.copy(o).invert(),da.copy(e.ray).applyMatrix4(Zg);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=r.index,x=r.attributes.position;if(p!==null){const v=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let w=v,_=M-1;w<_;w+=h){const y=p.getX(w),A=p.getX(w+1),C=Jl(this,e,da,f,y,A);C&&t.push(C)}if(this.isLineLoop){const w=p.getX(M-1),_=p.getX(v),y=Jl(this,e,da,f,w,_);y&&t.push(y)}}else{const v=Math.max(0,c.start),M=Math.min(x.count,c.start+c.count);for(let w=v,_=M-1;w<_;w+=h){const y=Jl(this,e,da,f,w,w+1);y&&t.push(y)}if(this.isLineLoop){const w=Jl(this,e,da,f,M-1,v);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Jl(s,e,t,r,o,l){const c=s.geometry.attributes.position;if(Ec.fromBufferAttribute(c,o),wc.fromBufferAttribute(c,l),t.distanceSqToSegment(Ec,wc,$d,Qg)>r)return;$d.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo($d);if(!(f<e.near||f>e.far))return{distance:f,point:Qg.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Jg=new J,e0=new J;class px extends Db{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Jg.fromBufferAttribute(t,o),e0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Jg.distanceTo(e0);e.setAttribute("lineDistance",new sn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qd extends In{constructor(e,t,r,o,l,c,u,f,h,p,g,x){super(null,c,u,f,h,p,o,l,g,x),this.isCompressedTexture=!0,this.image={width:t,height:r},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class sh extends ei{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],c=[],u=[],f=[],h=new J,p=new ft;c.push(0,0,0),u.push(0,0,1),f.push(.5,.5);for(let g=0,x=3;g<=t;g++,x+=3){const v=r+g/t*o;h.x=e*Math.cos(v),h.y=e*Math.sin(v),c.push(h.x,h.y,h.z),u.push(0,0,1),p.x=(c[x]/e+1)/2,p.y=(c[x+1]/e+1)/2,f.push(p.x,p.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const ec=new J,tc=new J,Kd=new J,nc=new ui;class Ib extends ei{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(mo*t),c=e.getIndex(),u=e.getAttribute("position"),f=c?c.count:u.count,h=[0,0,0],p=["a","b","c"],g=new Array(3),x={},v=[];for(let M=0;M<f;M+=3){c?(h[0]=c.getX(M),h[1]=c.getX(M+1),h[2]=c.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);const{a:w,b:_,c:y}=nc;if(w.fromBufferAttribute(u,h[0]),_.fromBufferAttribute(u,h[1]),y.fromBufferAttribute(u,h[2]),nc.getNormal(Kd),g[0]=`${Math.round(w.x*o)},${Math.round(w.y*o)},${Math.round(w.z*o)}`,g[1]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,g[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let A=0;A<3;A++){const C=(A+1)%3,T=g[A],k=g[C],L=nc[p[A]],D=nc[p[C]],z=`${T}_${k}`,I=`${k}_${T}`;I in x&&x[I]?(Kd.dot(x[I].normal)<=l&&(v.push(L.x,L.y,L.z),v.push(D.x,D.y,D.z)),x[I]=null):z in x||(x[z]={index0:h[A],index1:h[C],normal:Kd.clone()})}}for(const M in x)if(x[M]){const{index0:w,index1:_}=x[M];ec.fromBufferAttribute(u,w),tc.fromBufferAttribute(u,_),v.push(ec.x,ec.y,ec.z),v.push(tc.x,tc.y,tc.z)}this.setAttribute("position",new sn(v,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ub extends vs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kb extends vs{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mx extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Zd=new Bt,t0=new J,n0=new J;class Fb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;t0.setFromMatrixPosition(e.matrixWorld),t.position.copy(t0),n0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(n0),t.updateMatrixWorld(),Zd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ob extends Fb{constructor(){super(new ax(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xo extends mx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Ob}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gx extends mx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const oh="\\[\\]\\.:\\/",zb=new RegExp("["+oh+"]","g"),ah="[^"+oh+"]",Bb="[^"+oh.replace("\\.","")+"]",Vb=/((?:WC+[\/:])*)/.source.replace("WC",ah),Hb=/(WCOD+)?/.source.replace("WCOD",Bb),Gb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),jb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),Wb=new RegExp("^"+Vb+Hb+Gb+jb+"$"),Xb=["material","materials","bones","map"];class Yb{constructor(e,t,r){const o=r||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,o=this._bindings[r];o!==void 0&&o.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let o=this._targetGroup.nCachedObjects_,l=r.length;o!==l;++o)r[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class Lt{constructor(e,t,r){this.path=t,this.parsedPath=r||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,r):new Lt(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zb,"")}static parseTrackName(e){const t=Wb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const l=r.nodeName.substring(o+1);Xb.indexOf(l)!==-1&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=l)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(l){for(let c=0;c<l.length;c++){const u=l[c];if(u.name===t||u.uuid===t)return u;const f=r(u.children);if(f)return f}return null},o=r(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let o=0,l=r.length;o!==l;++o)e[t++]=r[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let o=0,l=r.length;o!==l;++o)r[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let o=0,l=r.length;o!==l;++o)r[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let o=0,l=r.length;o!==l;++o)r[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,o=t.propertyName;let l=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=t.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[o];if(c===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+o+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(l!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=l}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=Yb;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const i0=new Bt;class $b{constructor(e,t,r=0,o=1/0){this.ray=new Lc(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return i0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(i0),this}intersectObject(e,t=!0,r=[]){return Vf(e,this,r,t),r.sort(r0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Vf(e[o],this,r,t);return r.sort(r0),r}}function r0(s,e){return s.distance-e.distance}function Vf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let c=0,u=l.length;c<u;c++)Vf(l[c],e,t,!0)}}class s0{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xx extends px{constructor(e=10,t=10,r=4473924,o=8947848){r=new yt(r),o=new yt(o);const l=t/2,c=e/t,u=e/2,f=[],h=[];for(let x=0,v=0,M=-u;x<=t;x++,M+=c){f.push(-u,0,M,u,0,M),f.push(M,0,-u,M,0,u);const w=x===l?r:o;w.toArray(h,v),v+=3,w.toArray(h,v),v+=3,w.toArray(h,v),v+=3,w.toArray(h,v),v+=3}const p=new ei;p.setAttribute("position",new sn(f,3)),p.setAttribute("color",new sn(h,3));const g=new rh({vertexColors:!0,toneMapped:!1});super(p,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class qb extends xs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);const o0={type:"change"},lh={type:"start"},vx={type:"end"},ic=new Lc,a0=new Ur,Kb=Math.cos(70*yc.DEG2RAD),rn=new J,Gn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qd=1e-6;class _x extends qb{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.touches={ONE:lo.ROTATE,TWO:lo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Br,this._lastTargetPosition=new J,this._quat=new Br().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new s0,this._sphericalDelta=new s0,this._scale=1,this._panOffset=new J,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new J,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qb.bind(this),this._onPointerDown=Zb.bind(this),this._onPointerUp=Jb.bind(this),this._onContextMenu=o2.bind(this),this._onMouseWheel=n2.bind(this),this._onKeyDown=i2.bind(this),this._onTouchStart=r2.bind(this),this._onTouchMove=s2.bind(this),this._onMouseDown=e2.bind(this),this._onMouseMove=t2.bind(this),this._interceptControlDown=a2.bind(this),this._interceptControlUp=l2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(o0),this.update(),this.state=Ft.NONE}update(e=null){const t=this.object.position;rn.copy(t).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Gn:r>Math.PI&&(r-=Gn),o<-Math.PI?o+=Gn:o>Math.PI&&(o-=Gn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),t.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=rn.length();c=this._clampDistance(u*this._scale);const f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const u=new J(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const h=new J(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),c=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(ic.origin.copy(this.object.position),ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ic.direction))<Kb?this.object.lookAt(this.target):(a0.setFromNormalAndCoplanarPoint(this.object.up,this.target),ic.intersectPlane(a0,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Qd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qd||this._lastTargetPosition.distanceToSquared(this.target)>Qd?(this.dispatchEvent(o0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){rn.setFromMatrixColumn(t,0),rn.multiplyScalar(-e),this._panOffset.add(rn)}_panUp(e,t){this.screenSpacePanning===!0?rn.setFromMatrixColumn(t,1):(rn.setFromMatrixColumn(t,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(e),this._panOffset.add(rn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;rn.copy(o).sub(this.target);let l=rn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,c=r.width,u=r.height;this._mouse.x=o/c*2-1,this._mouse.y=-(l/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ft,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function Zb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Qb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Jb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vx),this.state=Ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function e2(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ft.DOLLY;break;case fo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}break;case fo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(lh)}function t2(s){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function n2(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(s.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(vx))}function i2(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function r2(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case lo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ft.TOUCH_ROTATE;break;case lo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case lo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ft.TOUCH_DOLLY_PAN;break;case lo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(lh)}function s2(s){switch(this._trackPointer(s),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ft.NONE}}function o2(s){this.enabled!==!1&&s.preventDefault()}function a2(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l2(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rc=.1;function c2(s,e,t,r){var g,x;const o=new uo,l=[],c=[],u=[],f=rc/2;function h(v,M,w){var _,y;return v<0||v>=e||M<0||M>=t||w<0||w>=r?!1:((y=(_=s[M])==null?void 0:_[v])==null?void 0:y[w])!=="transparent"}for(let v=0;v<t;v++)for(let M=0;M<e;M++)for(let w=0;w<r;w++){const _=(x=(g=s[v])==null?void 0:g[M])==null?void 0:x[w];if(!_||_==="transparent")continue;const y=d2(_),A=(M-e/2+.5)*rc,C=(t-1-v)*rc+f,T=(w-r/2+.5)*rc;h(M,v,w+1)||ro(c,u,[A-f,C-f,T+f],[A+f,C-f,T+f],[A+f,C+f,T+f],[A-f,C+f,T+f],y),h(M,v,w-1)||ro(c,u,[A+f,C-f,T-f],[A-f,C-f,T-f],[A-f,C+f,T-f],[A+f,C+f,T-f],fa(y,.82)),h(M,v-1,w)||ro(c,u,[A-f,C+f,T+f],[A+f,C+f,T+f],[A+f,C+f,T-f],[A-f,C+f,T-f],fa(y,1.15)),h(M,v+1,w)||ro(c,u,[A+f,C-f,T+f],[A-f,C-f,T+f],[A-f,C-f,T-f],[A+f,C-f,T-f],fa(y,.7)),h(M+1,v,w)||ro(c,u,[A+f,C-f,T+f],[A+f,C-f,T-f],[A+f,C+f,T-f],[A+f,C+f,T+f],fa(y,.85)),h(M-1,v,w)||ro(c,u,[A-f,C-f,T-f],[A-f,C-f,T+f],[A-f,C+f,T+f],[A-f,C+f,T-f],fa(y,.85))}if(c.length){const v=u2(c,u);l.push(v.material),o.add(v)}function p(){l.forEach(v=>v.dispose()),o.traverse(v=>{v.geometry&&v.geometry.dispose()})}return{group:o,dispose:p}}function ro(s,e,t,r,o,l,c){s.push(...t,...r,...o,...t,...o,...l),e.push(...c,...c,...c,...c,...c,...c)}function u2(s,e){const t=new ei;t.setAttribute("position",new sn(s,3)),t.setAttribute("color",new sn(e,3)),t.computeVertexNormals();const r=new Ma({vertexColors:!0});return new Wn(t,r)}function d2(s){const e=parseInt(s.slice(1,3),16)/255,t=parseInt(s.slice(3,5),16)/255,r=parseInt(s.slice(5,7),16)/255;return[e,t,r]}function fa([s,e,t],r){return[Math.min(1,s*r),Math.min(1,e*r),Math.min(1,t*r)]}const fi=.1,l0=fi*.6;function f2(s,e,t,r,o,l){const c=Math.round(s/fi+r/2-.5),u=Math.round(o-1-(e-fi/2)/fi),f=Math.round(t/fi+l/2-.5);return{x:Math.max(0,Math.min(r-1,c)),y:Math.max(0,Math.min(o-1,u)),z:Math.max(0,Math.min(l-1,f))}}function h2(s,e,t,r,o,l){return new J((s-r/2+.5)*fi,(o-1-e)*fi+fi/2,(t-l/2+.5)*fi)}function p2(s){const e=Re.useRef(null),t=Re.useRef(null),r=Re.useRef(null),o=Re.useRef(null),l=Re.useRef(null),c=Re.useRef(null),u=Re.useRef(null),f=Re.useRef(null),h=Re.useRef(null),p=Re.useRef(null);Re.useEffect(()=>{const v=s.current;if(!v)return;const M=new hx({antialias:!0,alpha:!1});M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.setSize(v.clientWidth,v.clientHeight),M.toneMapping=sr,M.setClearColor(788484,1),v.appendChild(M.domElement),e.current=M;const w=new Mc;w.fog=new Dc(788484,.18),t.current=w;const _=new gx(16771264,.45);w.add(_);const y=new xo(16777215,.6);y.position.set(4,6,4),w.add(y);const A=new xo(8425680,.35);A.position.set(-3,-1,-2),w.add(A);const C=new xo(16746528,.2);C.position.set(0,-3,-5),w.add(C);const T=new xx(8,16,3811856,2365448);T.position.y=-.05,T.material.transparent=!0,T.material.opacity=.5,w.add(T);const k=new sh(4,32),L=new kb({color:1708038,transparent:!0,opacity:.6}),D=new Wn(k,L);D.rotation.x=-Math.PI/2,D.position.y=-.051,w.add(D);const z=new Ta(20,20),I=new Ma({side:Ti,transparent:!0,opacity:0,depthWrite:!1}),P=new Wn(z,I);P.rotation.x=-Math.PI/2,P.position.y=-.002,w.add(P),h.current=P;const B=new Ao(fi*.96,fi*.96,fi*.96),K=new Ma({color:65416,transparent:!0,opacity:.35}),W=new Wn(B,K),ae=new Ib(B),le=new rh({color:65416}),de=new px(ae,le);W.add(de),W.visible=!1,w.add(W),p.current=W;const oe=new Dn(45,v.clientWidth/v.clientHeight,.01,50);oe.position.set(2.5,2.8,2.5),oe.lookAt(0,1.6,0),r.current=oe;const V=new _x(oe,M.domElement);V.enableDamping=!0,V.dampingFactor=.06,V.minDistance=.3,V.maxDistance=15,V.target.set(0,1.6,0),o.current=V;const ce=new $b;let te=!1,F=!1,ee=null;function Te(){return rt.getState().viewMode==="preview-only"}function q(){V.enabled=!0,V.enableRotate=!Te()||te,V.enableZoom=!0,V.enablePan=!0}function he(je){M.domElement.style.cursor=je}function ye(je,ze){const U=M.domElement.getBoundingClientRect(),R=(je-U.left)/U.width*2-1,Z=-((ze-U.top)/U.height)*2+1;ce.setFromCamera(new ft(R,Z),oe);const pe=[];l.current&&pe.push(l.current),pe.push(P);const me=ce.intersectObjects(pe,!0);return me.length>0?me[0]:null}function xe(je,ze,U,R,Z){const pe=je.point.clone(),me=je.face.normal.clone().transformDirection(je.object.matrixWorld),fe=Z?l0:-l0;return f2(pe.x+me.x*fe,pe.y+me.y*fe,pe.z+me.z*fe,ze,U,R)}function Ce(je,ze){const U=p.current;if(!U)return;const{activeTool:R,canvasWidth:Z,canvasHeight:pe,depthDimension:me}=rt.getState(),fe=ye(je,ze);if(!fe){U.visible=!1;return}const Ve=R==="eraser",Ae=R==="eyedropper",at=xe(fe,Z,pe,me,!Ve&&!Ae);U.position.copy(h2(at.x,at.y,at.z,Z,pe,me)),U.visible=!0;const Se=Ve?16729156:Ae?52479:65416;U.material.color.setHex(Se),U.children[0].material.color.setHex(Se)}function Le(je,ze){var at,Se,Be,et;const{activeTool:U,currentColor:R,canvasWidth:Z,canvasHeight:pe,depthDimension:me}=rt.getState(),fe=ye(je,ze);if(!fe)return;const Ve=fe.object===P;if(U==="eyedropper"){if(Ve)return;const We=xe(fe,Z,pe,me,!1),Ue=(Se=(at=rr(rt.getState().layers,Z,pe,me)[We.y])==null?void 0:at[We.x])==null?void 0:Se[We.z];Ue&&Ue!=="transparent"&&rt.getState().setCurrentColor(Ue);return}if(U==="eraser"){if(Ve)return;const We=xe(fe,Z,pe,me,!1),Ue=`${We.x},${We.y},${We.z}`;if(Ue===ee)return;ee=Ue;const xt=(et=(Be=rr(rt.getState().layers,Z,pe,me)[We.y])==null?void 0:Be[We.x])==null?void 0:et[We.z];if(!xt||xt==="transparent")return;rt.getState().paintVoxelDirect(We.x,We.y,We.z,"transparent");return}const Ae=xe(fe,Z,pe,me,!0),Fe=`${Ae.x},${Ae.y},${Ae.z}`;Fe!==ee&&(ee=Fe,rt.getState().paintVoxelDirect(Ae.x,Ae.y,Ae.z,R))}const Ze=je=>{je.code!=="Space"||!Te()||(je.preventDefault(),!te&&(te=!0,q(),p.current&&(p.current.visible=!1),he("grab")))},pt=je=>{je.code==="Space"&&(te=!1,q(),Te()&&he("crosshair"))},mt=je=>{!Te()||te||je.button===0&&(V.enabled=!1,F=!0,ee=null,M.domElement.setPointerCapture(je.pointerId),he("crosshair"),rt.getState().pushUndo(),Le(je.clientX,je.clientY))},Nt=je=>{if(!Te()){p.current&&(p.current.visible=!1);return}F&&!te?(p.current&&(p.current.visible=!1),Le(je.clientX,je.clientY)):Ce(je.clientX,je.clientY)},X=je=>{if(F){F=!1,ee=null,q();try{M.domElement.releasePointerCapture(je.pointerId)}catch{}he(te?"grab":Te()?"crosshair":"default")}},Kt=()=>{p.current&&(p.current.visible=!1)};q(),Te()&&he("crosshair"),window.addEventListener("keydown",Ze),window.addEventListener("keyup",pt),M.domElement.addEventListener("pointerdown",mt),M.domElement.addEventListener("pointermove",Nt),M.domElement.addEventListener("pointerup",X),M.domElement.addEventListener("pointerleave",Kt);let ct=!0;function gt(){ct&&(u.current=requestAnimationFrame(gt),V.update(),M.render(w,oe))}gt();const Je=new ResizeObserver(()=>{const je=v.clientWidth,ze=v.clientHeight;!je||!ze||(M.setSize(je,ze),oe.aspect=je/ze,oe.updateProjectionMatrix())});return Je.observe(v),()=>{ct=!1,cancelAnimationFrame(u.current),Je.disconnect(),window.removeEventListener("keydown",Ze),window.removeEventListener("keyup",pt),M.domElement.removeEventListener("pointerdown",mt),M.domElement.removeEventListener("pointermove",Nt),M.domElement.removeEventListener("pointerup",X),M.domElement.removeEventListener("pointerleave",Kt),V.dispose(),L.dispose(),k.dispose(),B.dispose(),K.dispose(),ae.dispose(),le.dispose(),z.dispose(),I.dispose(),M.dispose(),v.contains(M.domElement)&&v.removeChild(M.domElement)}},[]),Re.useEffect(()=>rt.subscribe((M,w)=>{M.activeTheme!==w.activeTheme&&e.current&&xS(async()=>{const{getTheme:_}=await Promise.resolve().then(()=>jy);return{getTheme:_}},void 0).then(({getTheme:_})=>{var C;const A=_(M.activeTheme).sceneBackground.replace("#","");(C=e.current)==null||C.setClearColor(parseInt(A,16),1)})}),[]);const g=Re.useCallback(()=>{var T;if(!t.current)return;const{layers:v,canvasWidth:M,canvasHeight:w,depthDimension:_}=rt.getState(),y=rr(v,M,w,_),{group:A,dispose:C}=c2(y,M,w,_);l.current&&(t.current.remove(l.current),(T=c.current)==null||T.call(c)),t.current.add(A),l.current=A,c.current=C},[]);return Re.useEffect(()=>{g();const v=rt.subscribe((M,w)=>{(M.layers!==w.layers||M.depthDimension!==w.depthDimension)&&(clearTimeout(f.current),f.current=setTimeout(g,80))});return()=>{v(),clearTimeout(f.current)}},[g]),{exportPng:Re.useCallback(()=>{const v=e.current,M=t.current,{canvasWidth:w,canvasHeight:_,depthDimension:y}=rt.getState();if(!v||!M)return;const A=1024,C=new Dn(45,1,.01,50),k=Math.max(w,_,y)*.1*2.8;C.position.set(k,k*.75,k),C.lookAt(0,0,0),v.setSize(A,A),v.render(M,C);const L=v.domElement.toDataURL("image/png"),D=s.current;D&&(v.setSize(D.clientWidth,D.clientHeight),r.current.aspect=D.clientWidth/D.clientHeight,r.current.updateProjectionMatrix());const z=document.createElement("a");z.download="picell3d-export.png",z.href=L,z.click()},[])}}const c0={pencil:{label:"Place voxel",color:"#00ff88"},fill:{label:"Place voxel",color:"#00ff88"},eraser:{label:"Erase voxel",color:"#ff4444"},eyedropper:{label:"Pick color",color:"#00ccff"}};function m2({onExport:s}){const e=Re.useRef(null),{exportPng:t}=p2(e),r=rt(f=>f.viewMode),o=rt(f=>f.activeTool),l=rt(f=>f.currentColor),c=r==="preview-only";Re.useEffect(()=>{s&&(s.current=t)},[s,t]);const u=c0[o]??c0.pencil;return E.jsxs("div",{className:"relative w-full h-full",children:[E.jsx("div",{ref:e,className:"w-full h-full"}),c?E.jsxs("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none select-none",children:[E.jsxs("div",{className:"flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono",style:{background:"rgba(0,0,0,0.6)",border:`1px solid ${u.color}55`,color:u.color,backdropFilter:"blur(4px)"},children:[E.jsx("span",{children:u.label}),(o==="pencil"||o==="fill")&&E.jsx("span",{className:"inline-block w-3 h-3 rounded-sm",style:{background:l,outline:"1px solid rgba(255,255,255,0.25)"}})]}),E.jsxs("span",{className:"text-xs opacity-40",style:{color:"#fff",textShadow:"0 1px 3px #000"},children:["Drag to paint · Hold ",E.jsx("kbd",{style:{fontFamily:"monospace",opacity:.7},children:"Space"})," to orbit · Scroll to zoom"]})]}):E.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-text-muted pointer-events-none opacity-60 whitespace-nowrap",children:"Drag to rotate · Scroll to zoom"})]})}function g2(){const{palette:s,currentColor:e,setCurrentColor:t,addToPalette:r}=rt(),o=Re.useRef(null);return E.jsxs("div",{className:"flex flex-col gap-2 p-2",children:[E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:"text-xs text-text-muted mb-1 uppercase tracking-wide",children:"Color"}),E.jsx("div",{className:"w-full h-8 rounded cursor-pointer border border-border hover:border-accent transition-colors",style:{background:e},onClick:()=>{var l;return(l=o.current)==null?void 0:l.click()},title:"Click to open color picker"}),E.jsx("input",{ref:o,type:"color",value:e==="transparent"?"#000000":e,onChange:l=>t(l.target.value),className:"absolute opacity-0 w-0 h-0 pointer-events-none",tabIndex:-1})]}),E.jsx("div",{className:"grid grid-cols-4 gap-1",children:s.map((l,c)=>E.jsx("button",{className:"w-full aspect-square rounded border transition-all duration-100 hover:scale-110",style:{background:l,borderColor:e===l?"#e8a820":"#7a5c2e",boxShadow:e===l?"0 0 6px #c8860a":"none",outline:e===l?"1px solid #e8a820":"none"},onClick:()=>t(l),title:l},c))}),E.jsx("button",{className:"btn-brass w-full text-xs py-1",onClick:()=>{var l;return(l=o.current)==null?void 0:l.click()},children:"+ Custom"})]})}const x2=[4,8,16,24,32,48,64],v2=[{id:"front",label:"← Front"},{id:"both",label:"↔ Both"},{id:"back",label:"Back →"}];function _2(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,setDepthDimension:r,paintDepth:o,setPaintDepth:l,paintDirection:c,setPaintDirection:u,layers:f,activeView:h}=rt(),p=Re.useMemo(()=>{const x=rr(f,s,e,t);let v=0;for(const M of x)for(const w of M)for(const _ of w)_!=="transparent"&&v++;return v},[f,s,e,t]),g=h==="front"||h==="back";return E.jsxs("div",{className:"flex flex-col h-full",children:[E.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1.5 border-b border-border",children:[E.jsx(hs,{size:12,className:"text-accent"}),E.jsx("span",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Voxel Options"})]}),E.jsxs("div",{className:"flex flex-col gap-4 p-3",children:[!g&&E.jsxs("div",{children:[E.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[E.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Depth"}),E.jsxs("span",{className:"text-xs font-mono text-accent",children:[t,"px"]})]}),E.jsx("div",{className:"grid grid-cols-4 gap-1 mb-1.5",children:x2.map(x=>E.jsx("button",{onClick:()=>r(x),className:`text-xs py-0.5 rounded border transition-colors ${t===x?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:x},x))}),E.jsx("input",{type:"range",min:4,max:128,value:t,onChange:x=>r(parseInt(x.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}})]}),E.jsxs("div",{children:[E.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[E.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Paint Depth"}),E.jsx("span",{className:"text-xs font-mono text-accent",children:o})]}),E.jsx("input",{type:"range",min:1,max:g?Math.ceil(t/2):t,value:o,onChange:x=>l(parseInt(x.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}}),E.jsxs("div",{className:"flex justify-between text-xs text-text-muted mt-0.5",children:[E.jsx("span",{children:"1"}),E.jsx("span",{children:g?Math.ceil(t/2):t})]})]}),g&&E.jsxs("div",{children:[E.jsx("div",{className:"mb-1.5",children:E.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Direction"})}),E.jsx("div",{className:"grid grid-cols-3 gap-1",children:v2.map(({id:x,label:v})=>E.jsx("button",{onClick:()=>u(x),className:`text-xs py-0.5 rounded border transition-colors ${c===x?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:v},x))})]}),E.jsxs("div",{className:"flex flex-col gap-1.5 text-xs",children:[E.jsxs("div",{className:"flex justify-between text-text-muted",children:[E.jsx("span",{children:"Grid size"}),E.jsxs("span",{className:"font-mono text-text",children:[s,"×",e,"×",t]})]}),E.jsxs("div",{className:"flex justify-between text-text-muted",children:[E.jsx("span",{children:"Voxels"}),E.jsx("span",{className:"font-mono text-text",children:p.toLocaleString()})]}),E.jsxs("div",{className:"flex justify-between text-text-muted",children:[E.jsx("span",{children:"Active view"}),E.jsx("span",{className:"font-mono text-accent capitalize",children:h})]})]}),E.jsx("div",{className:"text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5",style:{background:"color-mix(in srgb, var(--color-background) 60%, transparent)"},children:g?E.jsxs(E.Fragment,{children:["Canvas: ",E.jsxs("span",{className:"text-text font-mono",children:[s,"×",e]})]}):E.jsxs(E.Fragment,{children:["Canvas: ",E.jsx("span",{className:"text-text font-mono",children:h==="top"||h==="bottom"?`${s}×${t}`:`${t}×${e}`})]})})]})]})}function y2(){const{layers:s,activeLayerId:e,addLayer:t,deleteLayer:r,setActiveLayer:o,toggleLayerVisible:l,renameLayer:c,moveLayerUp:u,moveLayerDown:f}=rt(),[h,p]=Re.useState(null),[g,x]=Re.useState(""),v=[...s].reverse();function M(_,y){y.stopPropagation(),p(_.id),x(_.name)}function w(_){c(_,g),p(null)}return E.jsxs("div",{className:"flex flex-col",children:[E.jsxs("div",{className:"flex items-center justify-between px-2 py-1.5 border-b border-border flex-shrink-0",children:[E.jsxs("div",{className:"flex items-center gap-1.5",children:[E.jsx(E0,{size:12,className:"text-accent"}),E.jsx("span",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Layers"})]}),E.jsx("button",{onClick:()=>t(),title:"Add layer",className:"flex items-center justify-center w-5 h-5 rounded border border-border text-text-muted hover:text-accent hover:border-accent/50 transition-colors",children:E.jsx(ry,{size:11})})]}),E.jsx("div",{className:"flex flex-col overflow-y-auto",style:{maxHeight:200},children:v.map(_=>{const y=s.findIndex(L=>L.id===_.id),A=_.id===e,C=y===s.length-1,T=y===0,k=s.length>1;return E.jsxs("div",{onClick:()=>o(_.id),className:"flex items-center gap-1 px-1.5 py-1 cursor-pointer select-none transition-colors",style:{borderLeft:`2px solid ${A?"var(--color-accent)":"transparent"}`,background:A?"color-mix(in srgb, var(--color-accent) 12%, transparent)":"transparent"},children:[E.jsx("button",{onClick:L=>{L.stopPropagation(),l(_.id)},title:_.visible?"Hide layer":"Show layer",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors",children:_.visible?E.jsx(D_,{size:11}):E.jsx(L_,{size:11,className:"opacity-40"})}),h===_.id?E.jsx("input",{autoFocus:!0,value:g,onChange:L=>x(L.target.value),onBlur:()=>w(_.id),onKeyDown:L=>{L.key==="Enter"&&w(_.id),L.key==="Escape"&&p(null),L.stopPropagation()},onClick:L=>L.stopPropagation(),className:"flex-1 min-w-0 text-xs bg-transparent outline-none border-b",style:{borderColor:"var(--color-accent)",color:"var(--color-text)"}}):E.jsx("span",{className:"flex-1 min-w-0 text-xs truncate",style:{color:A?"var(--color-text)":"var(--color-text-muted)",opacity:_.visible?1:.45},onDoubleClick:L=>M(_,L),title:"Double-click to rename",children:_.name}),E.jsx("button",{onClick:L=>{L.stopPropagation(),u(_.id)},disabled:C,title:"Move up",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20",children:E.jsx(T_,{size:10})}),E.jsx("button",{onClick:L=>{L.stopPropagation(),f(_.id)},disabled:T,title:"Move down",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20",children:E.jsx(S_,{size:10})}),E.jsx("button",{onClick:L=>{L.stopPropagation(),r(_.id)},disabled:!k,title:"Delete layer",className:"flex-shrink-0 text-text-muted hover:text-red-400 transition-colors disabled:opacity-20",children:E.jsx(C0,{size:10})})]},_.id)})})]})}const u0={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Tc{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new P2(e)}),this.register(function(e){return new L2(e)}),this.register(function(e){return new U2(e)}),this.register(function(e){return new k2(e)}),this.register(function(e){return new F2(e)}),this.register(function(e){return new O2(e)}),this.register(function(e){return new N2(e)}),this.register(function(e){return new D2(e)}),this.register(function(e){return new I2(e)}),this.register(function(e){return new z2(e)}),this.register(function(e){return new B2(e)}),this.register(function(e){return new V2(e)}),this.register(function(e){return new H2(e)}),this.register(function(e){return new G2(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,r,o){const l=new R2,c=[];for(let u=0,f=this.pluginCallbacks.length;u<f;u++)c.push(this.pluginCallbacks[u](l));l.setPlugins(c),l.setTextureUtils(this.textureUtils),l.writeAsync(e,t,o).catch(r)}parseAsync(e,t){const r=this;return new Promise(function(o,l){r.parse(e,o,l,t)})}}const Et={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Jd="KHR_mesh_quantization",Jn={};Jn[hi]=Et.NEAREST;Jn[B0]=Et.NEAREST_MIPMAP_NEAREST;Jn[pa]=Et.NEAREST_MIPMAP_LINEAR;Jn[bi]=Et.LINEAR;Jn[lc]=Et.LINEAR_MIPMAP_NEAREST;Jn[Fr]=Et.LINEAR_MIPMAP_LINEAR;Jn[kr]=Et.CLAMP_TO_EDGE;Jn[xc]=Et.REPEAT;Jn[vc]=Et.MIRRORED_REPEAT;const d0={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},S2=new yt,f0=12,M2=1179937895,E2=2,h0=8,w2=1313821514,T2=5130562;function xa(s,e){return s.length===e.length&&s.every(function(t,r){return t===e[r]})}function b2(s){return new TextEncoder().encode(s).buffer}function A2(s){return xa(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function C2(s,e,t){const r={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let o=e;o<e+t;o++)for(let l=0;l<s.itemSize;l++){let c;s.itemSize>4?c=s.array[o*s.itemSize+l]:(l===0?c=s.getX(o):l===1?c=s.getY(o):l===2?c=s.getZ(o):l===3&&(c=s.getW(o)),s.normalized===!0&&(c=yc.normalize(c,s.array))),r.min[l]=Math.min(r.min[l],c),r.max[l]=Math.max(r.max[l],c)}return r}function yx(s){return Math.ceil(s/4)*4}function ef(s,e=0){const t=yx(s.byteLength);if(t!==s.byteLength){const r=new Uint8Array(t);if(r.set(new Uint8Array(s)),e!==0)for(let o=s.byteLength;o<t;o++)r[o]=e;return r.buffer}return s}function p0(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function m0(s,e){if(s.toBlob!==void 0)return new Promise(r=>s.toBlob(r,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class R2{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Ac}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,r={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},r),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const o=this,l=o.buffers,c=o.json;r=o.options;const u=o.extensionsUsed,f=o.extensionsRequired,h=new Blob(l,{type:"application/octet-stream"}),p=Object.keys(u),g=Object.keys(f);if(p.length>0&&(c.extensionsUsed=p),g.length>0&&(c.extensionsRequired=g),c.buffers&&c.buffers.length>0&&(c.buffers[0].byteLength=h.size),r.binary===!0){const x=new FileReader;x.readAsArrayBuffer(h),x.onloadend=function(){const v=ef(x.result),M=new DataView(new ArrayBuffer(h0));M.setUint32(0,v.byteLength,!0),M.setUint32(4,T2,!0);const w=ef(b2(JSON.stringify(c)),32),_=new DataView(new ArrayBuffer(h0));_.setUint32(0,w.byteLength,!0),_.setUint32(4,w2,!0);const y=new ArrayBuffer(f0),A=new DataView(y);A.setUint32(0,M2,!0),A.setUint32(4,E2,!0);const C=f0+_.byteLength+w.byteLength+M.byteLength+v.byteLength;A.setUint32(8,C,!0);const T=new Blob([y,_,w,M,v],{type:"application/octet-stream"}),k=new FileReader;k.readAsArrayBuffer(T),k.onloadend=function(){t(k.result)}}}else if(c.buffers&&c.buffers.length>0){const x=new FileReader;x.readAsDataURL(h),x.onloadend=function(){const v=x.result;c.buffers[0].uri=v,t(c)}}else t(c)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const r=this.options,o=this.extensionsUsed;try{const l=JSON.parse(JSON.stringify(e.userData));if(r.includeCustomExtensions&&l.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const c in l.gltfExtensions)t.extensions[c]=l.gltfExtensions[c],o[c]=!0;delete l.gltfExtensions}Object.keys(l).length>0&&(t.extras=l)}catch(l){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+l.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const o=new Map;o.set(!0,this.uid++),o.set(!1,this.uid++),this.uids.set(e,o)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const r=new J;for(let o=0,l=e.count;o<l;o++)if(Math.abs(r.fromBufferAttribute(e,o).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const r=e.clone(),o=new J;for(let l=0,c=r.count;l<c;l++)o.fromBufferAttribute(r,l),o.x===0&&o.y===0&&o.z===0?o.setX(1):o.normalize(),r.setXYZ(l,o.x,o.y,o.z);return t.attributesNormalized.set(e,r),r}applyTextureTransform(e,t){let r=!1;const o={};(t.offset.x!==0||t.offset.y!==0)&&(o.offset=t.offset.toArray(),r=!0),t.rotation!==0&&(o.rotation=t.rotation,r=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(o.scale=t.repeat.toArray(),r=!0),r&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=o,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function r(v){return v.colorSpace===jn?function(w){return w<.04045?w*.0773993808:Math.pow(w*.9478672986+.0521327014,2.4)}:function(w){return w}}e instanceof qd&&(e=await this.decompressTextureAsync(e)),t instanceof qd&&(t=await this.decompressTextureAsync(t));const o=e?e.image:null,l=t?t.image:null,c=Math.max(o?o.width:0,l?l.width:0),u=Math.max(o?o.height:0,l?l.height:0),f=p0();f.width=c,f.height=u;const h=f.getContext("2d",{willReadFrequently:!0});h.fillStyle="#00ffff",h.fillRect(0,0,c,u);const p=h.getImageData(0,0,c,u);if(o){h.drawImage(o,0,0,c,u);const v=r(e),M=h.getImageData(0,0,c,u).data;for(let w=2;w<M.length;w+=4)p.data[w]=v(M[w]/256)*256}if(l){h.drawImage(l,0,0,c,u);const v=r(t),M=h.getImageData(0,0,c,u).data;for(let w=1;w<M.length;w+=4)p.data[w]=v(M[w]/256)*256}h.putImageData(p,0,0);const x=(e||t).clone();return x.source=new eh(f),x.colorSpace=er,x.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),x}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,r=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),r.push(e),0}processBufferView(e,t,r,o,l){const c=this.json;c.bufferViews||(c.bufferViews=[]);let u;switch(t){case Et.BYTE:case Et.UNSIGNED_BYTE:u=1;break;case Et.SHORT:case Et.UNSIGNED_SHORT:u=2;break;default:u=4}let f=e.itemSize*u;l===Et.ARRAY_BUFFER&&(f=Math.ceil(f/4)*4);const h=yx(o*f),p=new DataView(new ArrayBuffer(h));let g=0;for(let M=r;M<r+o;M++){for(let w=0;w<e.itemSize;w++){let _;e.itemSize>4?_=e.array[M*e.itemSize+w]:(w===0?_=e.getX(M):w===1?_=e.getY(M):w===2?_=e.getZ(M):w===3&&(_=e.getW(M)),e.normalized===!0&&(_=yc.normalize(_,e.array))),t===Et.FLOAT?p.setFloat32(g,_,!0):t===Et.INT?p.setInt32(g,_,!0):t===Et.UNSIGNED_INT?p.setUint32(g,_,!0):t===Et.SHORT?p.setInt16(g,_,!0):t===Et.UNSIGNED_SHORT?p.setUint16(g,_,!0):t===Et.BYTE?p.setInt8(g,_):t===Et.UNSIGNED_BYTE&&p.setUint8(g,_),g+=u}g%f!==0&&(g+=f-g%f)}const x={buffer:this.processBuffer(p.buffer),byteOffset:this.byteOffset,byteLength:h};return l!==void 0&&(x.target=l),l===Et.ARRAY_BUFFER&&(x.byteStride=f),this.byteOffset+=h,c.bufferViews.push(x),{id:c.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,r=t.json;return r.bufferViews||(r.bufferViews=[]),new Promise(function(o){const l=new FileReader;l.readAsArrayBuffer(e),l.onloadend=function(){const c=ef(l.result),u={buffer:t.processBuffer(c),byteOffset:t.byteOffset,byteLength:c.byteLength};t.byteOffset+=c.byteLength,o(r.bufferViews.push(u)-1)}})}processAccessor(e,t,r,o){const l=this.json,c={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let u;if(e.array.constructor===Float32Array)u=Et.FLOAT;else if(e.array.constructor===Int32Array)u=Et.INT;else if(e.array.constructor===Uint32Array)u=Et.UNSIGNED_INT;else if(e.array.constructor===Int16Array)u=Et.SHORT;else if(e.array.constructor===Uint16Array)u=Et.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)u=Et.BYTE;else if(e.array.constructor===Uint8Array)u=Et.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(r===void 0&&(r=0),(o===void 0||o===1/0)&&(o=e.count),o===0)return null;const f=C2(e,r,o);let h;t!==void 0&&(h=e===t.index?Et.ELEMENT_ARRAY_BUFFER:Et.ARRAY_BUFFER);const p=this.processBufferView(e,u,r,o,h),g={bufferView:p.id,byteOffset:p.byteOffset,componentType:u,count:o,max:f.max,min:f.min,type:c[e.itemSize]};return e.normalized===!0&&(g.normalized=!0),l.accessors||(l.accessors=[]),l.accessors.push(g)-1}processImage(e,t,r,o="image/png"){if(e!==null){const l=this,c=l.cache,u=l.json,f=l.options,h=l.pending;c.images.has(e)||c.images.set(e,{});const p=c.images.get(e),g=o+":flipY/"+r.toString();if(p[g]!==void 0)return p[g];u.images||(u.images=[]);const x={mimeType:o},v=p0();v.width=Math.min(e.width,f.maxTextureSize),v.height=Math.min(e.height,f.maxTextureSize);const M=v.getContext("2d",{willReadFrequently:!0});if(r===!0&&(M.translate(0,v.height),M.scale(1,-1)),e.data!==void 0){t!==di&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>f.maxTextureSize||e.height>f.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const _=new Uint8ClampedArray(e.height*e.width*4);for(let y=0;y<_.length;y+=4)_[y+0]=e.data[y+0],_[y+1]=e.data[y+1],_[y+2]=e.data[y+2],_[y+3]=e.data[y+3];M.putImageData(new ImageData(_,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)M.drawImage(e,0,0,v.width,v.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");f.binary===!0?h.push(m0(v,o).then(_=>l.processBufferViewImage(_)).then(_=>{x.bufferView=_})):v.toDataURL!==void 0?x.uri=v.toDataURL(o):h.push(m0(v,o).then(_=>new FileReader().readAsDataURL(_)).then(_=>{x.uri=_}));const w=u.images.push(x)-1;return p[g]=w,w}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const r={magFilter:Jn[e.magFilter],minFilter:Jn[e.minFilter],wrapS:Jn[e.wrapS],wrapT:Jn[e.wrapT]};return t.samplers.push(r)-1}async processTextureAsync(e){const r=this.options,o=this.cache,l=this.json;if(o.textures.has(e))return o.textures.get(e);l.textures||(l.textures=[]),e instanceof qd&&(e=await this.decompressTextureAsync(e,r.maxTextureSize));let c=e.userData.mimeType;c==="image/webp"&&(c="image/png");const u={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,c)};e.name&&(u.name=e.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(e,u)});const f=l.textures.push(u)-1;return o.textures.set(e,f),f}async processMaterialAsync(e){const t=this.cache,r=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;r.materials||(r.materials=[]);const o={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const l=e.color.toArray().concat([e.opacity]);if(xa(l,[1,1,1,1])||(o.pbrMetallicRoughness.baseColorFactor=l),e.isMeshStandardMaterial?(o.pbrMetallicRoughness.metallicFactor=e.metalness,o.pbrMetallicRoughness.roughnessFactor=e.roughness):(o.pbrMetallicRoughness.metallicFactor=0,o.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const u=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),f={index:await this.processTextureAsync(u),texCoord:u.channel};this.applyTextureTransform(f,u),o.pbrMetallicRoughness.metallicRoughnessTexture=f}if(e.map){const u={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(u,e.map),o.pbrMetallicRoughness.baseColorTexture=u}if(e.emissive){const u=e.emissive;if(Math.max(u.r,u.g,u.b)>0&&(o.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const h={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(h,e.emissiveMap),o.emissiveTexture=h}}if(e.normalMap){const u={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(u.scale=e.normalScale.x),this.applyTextureTransform(u,e.normalMap),o.normalTexture=u}if(e.aoMap){const u={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(u.strength=e.aoMapIntensity),this.applyTextureTransform(u,e.aoMap),o.occlusionTexture=u}e.transparent?o.alphaMode="BLEND":e.alphaTest>0&&(o.alphaMode="MASK",o.alphaCutoff=e.alphaTest),e.side===Ti&&(o.doubleSided=!0),e.name!==""&&(o.name=e.name),this.serializeUserData(e,o),await this._invokeAllAsync(async function(u){u.writeMaterialAsync&&await u.writeMaterialAsync(e,o)});const c=r.materials.push(o)-1;return t.materials.set(e,c),c}async processMeshAsync(e){const t=this.cache,r=this.json,o=[e.geometry.uuid];if(Array.isArray(e.material))for(let T=0,k=e.material.length;T<k;T++)o.push(e.material[T].uuid);else o.push(e.material.uuid);const l=o.join(":");if(t.meshes.has(l))return t.meshes.get(l);const c=e.geometry;let u;e.isLineSegments?u=Et.LINES:e.isLineLoop?u=Et.LINE_LOOP:e.isLine?u=Et.LINE_STRIP:e.isPoints?u=Et.POINTS:u=e.material.wireframe?Et.LINES:Et.TRIANGLES;const f={},h={},p=[],g=[],x={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},v=c.getAttribute("normal");v!==void 0&&!this.isNormalizedNormalAttribute(v)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),c.setAttribute("normal",this.createNormalizedNormalAttribute(v)));let M=null;for(let T in c.attributes){if(T.slice(0,5)==="morph")continue;const k=c.attributes[T];if(T=x[T]||T.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(T)||(T="_"+T),t.attributes.has(this.getUID(k))){h[T]=t.attributes.get(this.getUID(k));continue}M=null;const D=k.array;T==="JOINTS_0"&&!(D instanceof Uint16Array)&&!(D instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),M=new fn(new Uint16Array(D),k.itemSize,k.normalized)):(D instanceof Uint32Array||D instanceof Int32Array)&&!T.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${T}" converted to type FLOAT.`),M=Tc.Utils.toFloat32BufferAttribute(k));const z=this.processAccessor(M||k,c);z!==null&&(T.startsWith("_")||this.detectMeshQuantization(T,k),h[T]=z,t.attributes.set(this.getUID(k),z))}if(v!==void 0&&c.setAttribute("normal",v),Object.keys(h).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const T=[],k=[],L={};if(e.morphTargetDictionary!==void 0)for(const D in e.morphTargetDictionary)L[e.morphTargetDictionary[D]]=D;for(let D=0;D<e.morphTargetInfluences.length;++D){const z={};let I=!1;for(const P in c.morphAttributes){if(P!=="position"&&P!=="normal"){I||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),I=!0);continue}const B=c.morphAttributes[P][D],K=P.toUpperCase(),W=c.attributes[P];if(t.attributes.has(this.getUID(B,!0))){z[K]=t.attributes.get(this.getUID(B,!0));continue}const ae=B.clone();if(!c.morphTargetsRelative)for(let le=0,de=B.count;le<de;le++)for(let oe=0;oe<B.itemSize;oe++)oe===0&&ae.setX(le,B.getX(le)-W.getX(le)),oe===1&&ae.setY(le,B.getY(le)-W.getY(le)),oe===2&&ae.setZ(le,B.getZ(le)-W.getZ(le)),oe===3&&ae.setW(le,B.getW(le)-W.getW(le));z[K]=this.processAccessor(ae,c),t.attributes.set(this.getUID(W,!0),z[K])}g.push(z),T.push(e.morphTargetInfluences[D]),e.morphTargetDictionary!==void 0&&k.push(L[D])}f.weights=T,k.length>0&&(f.extras={},f.extras.targetNames=k)}const w=Array.isArray(e.material);if(w&&c.groups.length===0)return null;let _=!1;if(w&&c.index===null){const T=[];for(let k=0,L=c.attributes.position.count;k<L;k++)T[k]=k;c.setIndex(T),_=!0}const y=w?e.material:[e.material],A=w?c.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let T=0,k=A.length;T<k;T++){const L={mode:u,attributes:h};if(this.serializeUserData(c,L),g.length>0&&(L.targets=g),c.index!==null){let z=this.getUID(c.index);(A[T].start!==void 0||A[T].count!==void 0)&&(z+=":"+A[T].start+":"+A[T].count),t.attributes.has(z)?L.indices=t.attributes.get(z):(L.indices=this.processAccessor(c.index,c,A[T].start,A[T].count),t.attributes.set(z,L.indices)),L.indices===null&&delete L.indices}const D=await this.processMaterialAsync(y[A[T].materialIndex]);D!==null&&(L.material=D),p.push(L)}_===!0&&c.setIndex(null),f.primitives=p,r.meshes||(r.meshes=[]),await this._invokeAllAsync(function(T){T.writeMesh&&T.writeMesh(e,f)});const C=r.meshes.push(f)-1;return t.meshes.set(l,C),C}detectMeshQuantization(e,t){if(this.extensionsUsed[Jd])return;let r;switch(t.array.constructor){case Int8Array:r="byte";break;case Uint8Array:r="unsigned byte";break;case Int16Array:r="short";break;case Uint16Array:r="unsigned short";break;default:return}t.normalized&&(r+=" normalized");const o=e.split("_",1)[0];u0[o]&&u0[o].includes(r)&&(this.extensionsUsed[Jd]=!0,this.extensionsRequired[Jd]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const r=e.isOrthographicCamera,o={type:r?"orthographic":"perspective"};return r?o.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:o.perspective={aspectRatio:e.aspect,yfov:yc.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(o.name=e.type),t.cameras.push(o)-1}processAnimation(e,t){const r=this.json,o=this.nodeMap;r.animations||(r.animations=[]),e=Tc.Utils.mergeMorphTargetTracks(e.clone(),t);const l=e.tracks,c=[],u=[];for(let f=0;f<l.length;++f){const h=l[f],p=Lt.parseTrackName(h.name);let g=Lt.findNode(t,p.nodeName);const x=d0[p.propertyName];if(p.objectName==="bones"&&(g.isSkinnedMesh===!0?g=g.skeleton.getBoneByName(p.objectIndex):g=void 0),!g||!x){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}const v=1;let M=h.values.length/h.times.length;x===d0.morphTargetInfluences&&(M/=g.morphTargetInfluences.length);let w;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(w="CUBICSPLINE",M/=3):h.getInterpolation()===YS?w="STEP":w="LINEAR",u.push({input:this.processAccessor(new fn(h.times,v)),output:this.processAccessor(new fn(h.values,M)),interpolation:w}),c.push({sampler:u.length-1,target:{node:o.get(g),path:x}})}return r.animations.push({name:e.name||"clip_"+r.animations.length,samplers:u,channels:c}),r.animations.length-1}processSkin(e){const t=this.json,r=this.nodeMap,o=t.nodes[r.get(e)],l=e.skeleton;if(l===void 0)return null;const c=e.skeleton.bones[0];if(c===void 0)return null;const u=[],f=new Float32Array(l.bones.length*16),h=new Bt;for(let g=0;g<l.bones.length;++g)u.push(r.get(l.bones[g])),h.copy(l.boneInverses[g]),h.multiply(e.bindMatrix).toArray(f,g*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new fn(f,16)),joints:u,skeleton:r.get(c)}),o.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,r=this.options,o=this.nodeMap;t.nodes||(t.nodes=[]);const l={};if(r.trs){const u=e.quaternion.toArray(),f=e.position.toArray(),h=e.scale.toArray();xa(u,[0,0,0,1])||(l.rotation=u),xa(f,[0,0,0])||(l.translation=f),xa(h,[1,1,1])||(l.scale=h)}else e.matrixAutoUpdate&&e.updateMatrix(),A2(e.matrix)===!1&&(l.matrix=e.matrix.elements);if(e.name!==""&&(l.name=String(e.name)),this.serializeUserData(e,l),e.isMesh||e.isLine||e.isPoints){const u=await this.processMeshAsync(e);u!==null&&(l.mesh=u)}else e.isCamera&&(l.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const u=[];for(let f=0,h=e.children.length;f<h;f++){const p=e.children[f];if(p.visible||r.onlyVisible===!1){const g=await this.processNodeAsync(p);g!==null&&u.push(g)}}u.length>0&&(l.children=u)}await this._invokeAllAsync(function(u){u.writeNode&&u.writeNode(e,l)});const c=t.nodes.push(l)-1;return o.set(e,c),c}async processSceneAsync(e){const t=this.json,r=this.options;t.scenes||(t.scenes=[],t.scene=0);const o={};e.name!==""&&(o.name=e.name),t.scenes.push(o);const l=[];for(let c=0,u=e.children.length;c<u;c++){const f=e.children[c];if(f.visible||r.onlyVisible===!1){const h=await this.processNodeAsync(f);h!==null&&l.push(h)}}l.length>0&&(o.nodes=l),this.serializeUserData(e,o)}async processObjectsAsync(e){const t=new Mc;t.name="AuxScene";for(let r=0;r<e.length;r++)t.children.push(e[r]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(o){o.beforeParse&&o.beforeParse(e)});const r=[];for(let o=0;o<e.length;o++)e[o]instanceof Mc?await this.processSceneAsync(e[o]):r.push(e[o]);r.length>0&&await this.processObjectsAsync(r);for(let o=0;o<this.skins.length;++o)this.processSkin(this.skins[o]);for(let o=0;o<t.animations.length;++o)this.processAnimation(t.animations[o],e[0]);await this._invokeAllAsync(function(o){o.afterParse&&o.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,r=this.plugins.length;t<r;t++)await e(this.plugins[t])}}class P2{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const r=this.writer,o=r.json,l=r.extensionsUsed,c={};e.name&&(c.name=e.name),c.color=e.color.toArray(),c.intensity=e.intensity,e.isDirectionalLight?c.type="directional":e.isPointLight?(c.type="point",e.distance>0&&(c.range=e.distance)):e.isSpotLight&&(c.type="spot",e.distance>0&&(c.range=e.distance),c.spot={},c.spot.innerConeAngle=(1-e.penumbra)*e.angle,c.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),l[this.name]||(o.extensions=o.extensions||{},o.extensions[this.name]={lights:[]},l[this.name]=!0);const u=o.extensions[this.name].lights;u.push(c),t.extensions=t.extensions||{},t.extensions[this.name]={light:u.length-1}}}class L2{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const o=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},o[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class N2{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const r=this.writer,o=r.extensionsUsed,l={};if(l.clearcoatFactor=e.clearcoat,e.clearcoatMap){const c={index:await r.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};r.applyTextureTransform(c,e.clearcoatMap),l.clearcoatTexture=c}if(l.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const c={index:await r.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};r.applyTextureTransform(c,e.clearcoatRoughnessMap),l.clearcoatRoughnessTexture=c}if(e.clearcoatNormalMap){const c={index:await r.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(c.scale=e.clearcoatNormalScale.x),r.applyTextureTransform(c,e.clearcoatNormalMap),l.clearcoatNormalTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=l,o[this.name]=!0}}class D2{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const o=this.writer.extensionsUsed,l={};l.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=l,o[this.name]=!0}}class I2{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const r=this.writer,o=r.extensionsUsed,l={};if(l.iridescenceFactor=e.iridescence,e.iridescenceMap){const c={index:await r.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};r.applyTextureTransform(c,e.iridescenceMap),l.iridescenceTexture=c}if(l.iridescenceIor=e.iridescenceIOR,l.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const c={index:await r.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};r.applyTextureTransform(c,e.iridescenceThicknessMap),l.iridescenceThicknessTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=l,o[this.name]=!0}}class U2{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const r=this.writer,o=r.extensionsUsed,l={};if(l.transmissionFactor=e.transmission,e.transmissionMap){const c={index:await r.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};r.applyTextureTransform(c,e.transmissionMap),l.transmissionTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=l,o[this.name]=!0}}class k2{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const r=this.writer,o=r.extensionsUsed,l={};if(l.thicknessFactor=e.thickness,e.thicknessMap){const c={index:await r.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};r.applyTextureTransform(c,e.thicknessMap),l.thicknessTexture=c}e.attenuationDistance!==1/0&&(l.attenuationDistance=e.attenuationDistance),l.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=l,o[this.name]=!0}}class F2{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const o=this.writer.extensionsUsed,l={};l.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=l,o[this.name]=!0}}class O2{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(S2)&&!e.specularIntensityMap&&!e.specularColorMap)return;const r=this.writer,o=r.extensionsUsed,l={};if(e.specularIntensityMap){const c={index:await r.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};r.applyTextureTransform(c,e.specularIntensityMap),l.specularTexture=c}if(e.specularColorMap){const c={index:await r.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};r.applyTextureTransform(c,e.specularColorMap),l.specularColorTexture=c}l.specularFactor=e.specularIntensity,l.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=l,o[this.name]=!0}}class z2{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const r=this.writer,o=r.extensionsUsed,l={};if(e.sheenRoughnessMap){const c={index:await r.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};r.applyTextureTransform(c,e.sheenRoughnessMap),l.sheenRoughnessTexture=c}if(e.sheenColorMap){const c={index:await r.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};r.applyTextureTransform(c,e.sheenColorMap),l.sheenColorTexture=c}l.sheenRoughnessFactor=e.sheenRoughness,l.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=l,o[this.name]=!0}}class B2{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const r=this.writer,o=r.extensionsUsed,l={};if(e.anisotropyMap){const c={index:await r.processTextureAsync(e.anisotropyMap)};r.applyTextureTransform(c,e.anisotropyMap),l.anisotropyTexture=c}l.anisotropyStrength=e.anisotropy,l.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=l,o[this.name]=!0}}class V2{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const o=this.writer.extensionsUsed,l={};l.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=l,o[this.name]=!0}}class H2{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const r=this.writer,o=r.extensionsUsed,l={};if(e.bumpMap){const c={index:await r.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};r.applyTextureTransform(c,e.bumpMap),l.bumpTexture=c}l.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=l,o[this.name]=!0}}class G2{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const r=this.writer,o=e,l=new Float32Array(o.count*3),c=new Float32Array(o.count*4),u=new Float32Array(o.count*3),f=new Bt,h=new J,p=new Br,g=new J;for(let v=0;v<o.count;v++)o.getMatrixAt(v,f),f.decompose(h,p,g),h.toArray(l,v*3),p.toArray(c,v*4),g.toArray(u,v*3);const x={TRANSLATION:r.processAccessor(new fn(l,3)),ROTATION:r.processAccessor(new fn(c,4)),SCALE:r.processAccessor(new fn(u,3))};o.instanceColor&&(x._COLOR_0=r.processAccessor(o.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:x},r.extensionsUsed[this.name]=!0,r.extensionsRequired[this.name]=!0}}Tc.Utils={insertKeyframe:function(s,e){const r=s.getValueSize(),o=new s.TimeBufferType(s.times.length+1),l=new s.ValueBufferType(s.values.length+r),c=s.createInterpolant(new s.ValueBufferType(r));let u;if(s.times.length===0){o[0]=e;for(let f=0;f<r;f++)l[f]=0;u=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;o[0]=e,o.set(s.times,1),l.set(c.evaluate(e),0),l.set(s.values,r),u=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;o[o.length-1]=e,o.set(s.times,0),l.set(s.values,0),l.set(c.evaluate(e),s.values.length),u=o.length-1}else for(let f=0;f<s.times.length;f++){if(Math.abs(s.times[f]-e)<.001)return f;if(s.times[f]<e&&s.times[f+1]>e){o.set(s.times.slice(0,f+1),0),o[f+1]=e,o.set(s.times.slice(f+1),f+2),l.set(s.values.slice(0,(f+1)*r),0),l.set(c.evaluate(e),(f+1)*r),l.set(s.values.slice((f+1)*r),(f+2)*r),u=f+1;break}}return s.times=o,s.values=l,u},mergeMorphTargetTracks:function(s,e){const t=[],r={},o=s.tracks;for(let l=0;l<o.length;++l){let c=o[l];const u=Lt.parseTrackName(c.name),f=Lt.findNode(e,u.nodeName);if(u.propertyName!=="morphTargetInfluences"||u.propertyIndex===void 0){t.push(c);continue}if(c.createInterpolant!==c.InterpolantFactoryMethodDiscrete&&c.createInterpolant!==c.InterpolantFactoryMethodLinear){if(c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),c=c.clone(),c.setInterpolation($S)}const h=f.morphTargetInfluences.length,p=f.morphTargetDictionary[u.propertyIndex];if(p===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+u.propertyIndex);let g;if(r[f.uuid]===void 0){g=c.clone();const v=new g.ValueBufferType(h*g.times.length);for(let M=0;M<g.times.length;M++)v[M*h+p]=g.values[M];g.name=(u.nodeName||"")+".morphTargetInfluences",g.values=v,r[f.uuid]=g,t.push(g);continue}const x=c.createInterpolant(new c.ValueBufferType(1));g=r[f.uuid];for(let v=0;v<g.times.length;v++)g.values[v*h+p]=x.evaluate(g.times[v]);for(let v=0;v<c.times.length;v++){const M=this.insertKeyframe(g,c.times[v]);g.values[M*h+p]=c.values[v]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){const e=new fn(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,r=s.count;t<r;t++)for(let o=0;o<s.itemSize;o++)e.setComponent(t,o,s.getComponent(t,o));return e}};const mc=.1,Ie=mc/2;function g0(s,e,t,r){var p,g;const o=new uo,l=[];function c(x,v,M){var w,_;return x<0||x>=e||v<0||v>=t||M<0||M>=r?!1:((_=(w=s[v])==null?void 0:w[x])==null?void 0:_[M])!=="transparent"}const u=new Map;function f(x,v,M,w,_){u.has(x)||u.set(x,{verts:[],normals:[]});const{verts:y,normals:A}=u.get(x),[C,T,k,L]=v;for(const D of[C,T,k,C,k,L])y.push(D[0],D[1],D[2]),A.push(M,w,_)}for(let x=0;x<t;x++)for(let v=0;v<e;v++)for(let M=0;M<r;M++){const w=(g=(p=s[x])==null?void 0:p[v])==null?void 0:g[M];if(!w||w==="transparent")continue;const _=(v-e/2+.5)*mc,y=(t-1-x)*mc+Ie,A=(M-r/2+.5)*mc;c(v,x,M+1)||f(w,[[_-Ie,y-Ie,A+Ie],[_+Ie,y-Ie,A+Ie],[_+Ie,y+Ie,A+Ie],[_-Ie,y+Ie,A+Ie]],0,0,1),c(v,x,M-1)||f(w,[[_+Ie,y-Ie,A-Ie],[_-Ie,y-Ie,A-Ie],[_-Ie,y+Ie,A-Ie],[_+Ie,y+Ie,A-Ie]],0,0,-1),c(v,x-1,M)||f(w,[[_-Ie,y+Ie,A-Ie],[_+Ie,y+Ie,A-Ie],[_+Ie,y+Ie,A+Ie],[_-Ie,y+Ie,A+Ie]],0,1,0),c(v,x+1,M)||f(w,[[_-Ie,y-Ie,A+Ie],[_+Ie,y-Ie,A+Ie],[_+Ie,y-Ie,A-Ie],[_-Ie,y-Ie,A-Ie]],0,-1,0),c(v+1,x,M)||f(w,[[_+Ie,y-Ie,A+Ie],[_+Ie,y-Ie,A-Ie],[_+Ie,y+Ie,A-Ie],[_+Ie,y+Ie,A+Ie]],1,0,0),c(v-1,x,M)||f(w,[[_-Ie,y-Ie,A-Ie],[_-Ie,y-Ie,A+Ie],[_-Ie,y+Ie,A+Ie],[_-Ie,y+Ie,A-Ie]],-1,0,0)}for(const[x,{verts:v,normals:M}]of u){const w=parseInt(x.slice(1,3),16)/255,_=parseInt(x.slice(3,5),16)/255,y=parseInt(x.slice(5,7),16)/255,A=new ei;A.setAttribute("position",new sn(v,3)),A.setAttribute("normal",new sn(M,3));const C=new Ub({color:new yt(w,_,y),roughness:.75,metalness:.08});l.push(C),o.add(new Wn(A,C))}function h(){l.forEach(x=>x.dispose()),o.traverse(x=>{x.geometry&&x.geometry.dispose()})}return{group:o,dispose:h}}const bc={studio:{label:"Studio",bg:1118481,ambient:[16777215,.55],key:[16777215,1.2,[5,8,5]],fill:[8427980,.5,[-4,2,-3]],rim:[16750916,.35,[0,-4,-6]]},warm:{label:"Warm",bg:1707526,ambient:[16766336,.5],key:[16764006,1,[4,7,3]],fill:[16737826,.4,[-3,1,-2]],rim:[16755268,.3,[0,-3,-5]]},cool:{label:"Cool",bg:396570,ambient:[10075135,.5],key:[11193599,1.1,[4,7,4]],fill:[4482764,.5,[-4,1,-3]],rim:[2293725,.3,[0,-3,-5]]},dramatic:{label:"Dramatic",bg:394758,ambient:[16777215,.08],key:[16777215,2.2,[3,9,2]],fill:[4478378,.15,[-4,0,-2]],rim:[16729088,.5,[-1,-5,-7]]}},j2=[{label:"Dark",value:"#111111"},{label:"Charcoal",value:"#1a1a1a"},{label:"Navy",value:"#060d1a"},{label:"White",value:"#f0f0f0"},{label:"Custom",value:null}];function W2(s){const e=Re.useRef(null),t=Re.useRef(null),r=Re.useRef(null),o=Re.useRef(null),l=Re.useRef(null),c=Re.useRef(null),u=Re.useRef(null);Re.useEffect(()=>{const v=s.current;if(!v)return;const M=new hx({antialias:!0,alpha:!1});M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.setSize(v.clientWidth,v.clientHeight),M.toneMapping=O0,M.toneMappingExposure=1.1,M.outputColorSpace=jn,M.shadowMap.enabled=!1,M.setClearColor(1118481,1),v.appendChild(M.domElement),e.current=M;const w=new Mc;w.fog=new Dc(1118481,.1),t.current=w;const _=new xx(10,20,3355443,2236962);_.position.y=-.06,_.material.transparent=!0,_.material.opacity=.4,w.add(_);const y=new Dn(42,v.clientWidth/v.clientHeight,.01,60);y.position.set(3,3.5,3),y.lookAt(0,1.5,0),r.current=y;const A=new _x(y,M.domElement);A.enableDamping=!0,A.dampingFactor=.05,A.minDistance=.3,A.maxDistance=20,A.target.set(0,1.5,0),o.current=A;let C=!0;function T(){C&&(u.current=requestAnimationFrame(T),A.update(),M.render(w,y))}T();const k=new ResizeObserver(()=>{const L=v.clientWidth,D=v.clientHeight;!L||!D||(M.setSize(L,D),y.aspect=L/D,y.updateProjectionMatrix())});return k.observe(v),()=>{C=!1,cancelAnimationFrame(u.current),k.disconnect(),A.dispose(),M.dispose(),v.contains(M.domElement)&&v.removeChild(M.domElement)}},[]);const f=Re.useCallback(v=>{const M=t.current,w=e.current;if(!M)return;const _=bc[v]??bc.studio;M.children.filter(le=>le.isLight).forEach(le=>M.remove(le));const[y,A]=_.ambient;M.add(Object.assign(new gx(y,A)));const[C,T,k]=_.key,L=new xo(C,T);L.position.set(...k),M.add(L);const[D,z,I]=_.fill,P=new xo(D,z);P.position.set(...I),M.add(P);const[B,K,W]=_.rim,ae=new xo(B,K);ae.position.set(...W),M.add(ae),w&&(w.setClearColor(_.bg,1),M.fog&&M.fog.color.setHex(_.bg))},[]),h=Re.useCallback(v=>{var w,_;const M=parseInt(v.replace("#",""),16);(w=e.current)==null||w.setClearColor(M,1),(_=t.current)!=null&&_.fog&&t.current.fog.color.setHex(M)},[]),p=Re.useCallback(()=>{var k;const v=t.current;if(!v)return;const{layers:M,canvasWidth:w,canvasHeight:_,depthDimension:y}=rt.getState(),A=rr(M,w,_,y),{group:C,dispose:T}=g0(A,w,_,y);l.current&&(v.remove(l.current),(k=c.current)==null||k.call(c)),v.add(C),l.current=C,c.current=T},[]);Re.useEffect(()=>{p(),f("studio")},[p,f]);const g=Re.useCallback((v=2048)=>{const M=e.current,w=t.current,{canvasWidth:_,canvasHeight:y,depthDimension:A}=rt.getState();if(!M||!w)return;const T=Math.max(_,y,A)*.1*3,k=new Dn(42,1,.01,60);k.position.set(T,T*.8,T),k.lookAt(0,0,0),M.setSize(v,v),M.render(w,k);const L=M.domElement.toDataURL("image/png"),D=document.createElement("a");D.download=`render_${v}px.png`,D.href=L,D.click();const z=s.current;z&&(M.setSize(z.clientWidth,z.clientHeight),r.current.aspect=z.clientWidth/z.clientHeight,r.current.updateProjectionMatrix())},[]),x=Re.useCallback(()=>{const{layers:v,canvasWidth:M,canvasHeight:w,depthDimension:_}=rt.getState(),y=rr(v,M,w,_),{group:A,dispose:C}=g0(y,M,w,_);new Tc().parse(A,k=>{const L=new Blob([k],{type:"application/octet-stream"}),D=URL.createObjectURL(L),z=document.createElement("a");z.href=D,z.download="model.glb",z.click(),URL.revokeObjectURL(D),C()},k=>console.error("GLB export error:",k),{binary:!0})},[]);return{rebuild:p,applyPreset:f,applyBg:h,exportPng:g,exportGlb:x}}function X2(s,e,t,r){var k,L;const o=rr(s,e,t,r),l=new Map,c=new Uint8Array(256*4);let u=1;const f=[];for(let D=0;D<t;D++)for(let z=0;z<e;z++)for(let I=0;I<r;I++){const P=(L=(k=o[D])==null?void 0:k[z])==null?void 0:L[I];if(!P||P==="transparent")continue;let B=l.get(P);if(B===void 0){if(u>255)continue;B=u++,l.set(P,B);const K=parseInt(P.slice(1,3),16),W=parseInt(P.slice(3,5),16),ae=parseInt(P.slice(5,7),16);c[(B-1)*4+0]=K,c[(B-1)*4+1]=W,c[(B-1)*4+2]=ae,c[(B-1)*4+3]=255}f.push(z,I,t-1-D,B)}const h=f.length/4,p=12,g=4+h*4,x=1024,v=12+p+(12+g)+(12+x),M=20+v,w=new ArrayBuffer(M),_=new DataView(w);let y=0;const A=D=>{for(const z of D)_.setUint8(y++,z.charCodeAt(0))},C=D=>{_.setUint32(y,D,!0),y+=4},T=D=>{_.setUint8(y++,D)};A("VOX "),C(150),A("MAIN"),C(0),C(v),A("SIZE"),C(p),C(0),C(e),C(r),C(t),A("XYZI"),C(g),C(0),C(h);for(let D=0;D<h;D++)T(f[D*4+0]),T(f[D*4+1]),T(f[D*4+2]),T(f[D*4+3]);A("RGBA"),C(x),C(0);for(let D=0;D<256;D++)T(c[D*4+0]),T(c[D*4+1]),T(c[D*4+2]),T(c[D*4+3]);return w}function Y2(s,e,t,r,o="model.vox"){const l=X2(s,e,t,r),c=new Blob([l],{type:"application/octet-stream"}),u=URL.createObjectURL(c),f=document.createElement("a");f.href=u,f.download=o,f.click(),URL.revokeObjectURL(u)}const wn=.1,it=wn/2;function so(s,e,t,r,o,l,c){var u,f;return e<0||e>=o||t<0||t>=l||r<0||r>=c?!1:((f=(u=s[t])==null?void 0:u[e])==null?void 0:f[r])!=="transparent"}function $2(s,e,t,r){var M,w;const o=rr(s,e,t,r),l=new Map;let c=0;const u=["# Picell3D export",""],f=new Map;let h=1;const p=[];function g(_){if(l.has(_))return l.get(_);const y=`c${c++}`;l.set(_,y);const A=(parseInt(_.slice(1,3),16)/255).toFixed(4),C=(parseInt(_.slice(3,5),16)/255).toFixed(4),T=(parseInt(_.slice(5,7),16)/255).toFixed(4);return u.push(`newmtl ${y}`,`Kd ${A} ${C} ${T}`,"Ka 0.05 0.05 0.05","Ks 0.0 0.0 0.0","d 1.0",""),f.set(y,[]),y}function x(_,y){const A=[];for(const[C,T,k]of y)p.push(C,T,k),A.push(h++);f.get(_).push(A)}for(let _=0;_<t;_++)for(let y=0;y<e;y++)for(let A=0;A<r;A++){const C=(w=(M=o[_])==null?void 0:M[y])==null?void 0:w[A];if(!C||C==="transparent")continue;const T=(y-e/2+.5)*wn,k=(t-1-_)*wn,L=(A-r/2+.5)*wn,D=g(C);so(o,y,_,A+1,e,t,r)||x(D,[[T-it,k,L+it],[T+it,k,L+it],[T+it,k+wn,L+it],[T-it,k+wn,L+it]]),so(o,y,_,A-1,e,t,r)||x(D,[[T+it,k,L-it],[T-it,k,L-it],[T-it,k+wn,L-it],[T+it,k+wn,L-it]]),so(o,y,_-1,A,e,t,r)||x(D,[[T-it,k+wn,L-it],[T+it,k+wn,L-it],[T+it,k+wn,L+it],[T-it,k+wn,L+it]]),so(o,y,_+1,A,e,t,r)||x(D,[[T-it,k,L+it],[T+it,k,L+it],[T+it,k,L-it],[T-it,k,L-it]]),so(o,y+1,_,A,e,t,r)||x(D,[[T+it,k,L+it],[T+it,k,L-it],[T+it,k+wn,L-it],[T+it,k+wn,L+it]]),so(o,y-1,_,A,e,t,r)||x(D,[[T-it,k,L-it],[T-it,k,L+it],[T-it,k+wn,L+it],[T-it,k+wn,L-it]])}const v=["# Picell3D export","mtllib model.mtl","","# Vertices"];for(let _=0;_<p.length;_+=3)v.push(`v ${p[_].toFixed(5)} ${p[_+1].toFixed(5)} ${p[_+2].toFixed(5)}`);v.push("");for(const[_,y]of f)if(y.length){v.push(`usemtl ${_}`);for(const A of y)v.push(`f ${A.join(" ")}`);v.push("")}return{obj:v.join(`
`),mtl:u.join(`
`)}}function x0(s,e,t){const r=new Blob([s],{type:t}),o=URL.createObjectURL(r),l=document.createElement("a");l.href=o,l.download=e,l.click(),URL.revokeObjectURL(o)}function q2(s,e,t,r,o="model"){const{obj:l,mtl:c}=$2(s,e,t,r);x0(l,`${o}.obj`,"text/plain"),setTimeout(()=>x0(c,`${o}.mtl`,"text/plain"),150)}const K2={studio:A0,warm:Ty,cool:my,dramatic:W_};function Z2(s,e,t,r){var l,c;let o=0;for(const u of s)if(u.visible)for(let f=0;f<t;f++)for(let h=0;h<e;h++)for(let p=0;p<r;p++)(c=(l=u.voxels[f])==null?void 0:l[h])!=null&&c[p]&&u.voxels[f][h][p]!=="transparent"&&o++;return o}function sc({children:s}){return E.jsx("div",{className:"px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest",style:{color:"var(--color-accent)",opacity:.8},children:s})}function oo({label:s,sub:e,onClick:t,icon:r=S0}){const[o,l]=Re.useState(!1),c=async()=>{l(!0),await t(),setTimeout(()=>l(!1),800)};return E.jsxs("button",{onClick:c,disabled:o,className:"w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors rounded-none hover:bg-white/5 disabled:opacity-50",children:[E.jsx(r,{size:15,className:"flex-shrink-0",style:{color:"var(--color-accent)"}}),E.jsxs("div",{className:"min-w-0 flex-1",children:[E.jsx("div",{className:"text-sm font-medium",style:{color:"var(--color-text)"},children:o?"Exporting…":s}),e&&E.jsx("div",{className:"text-xs opacity-50 truncate",children:e})]}),E.jsx(E_,{size:12,className:"flex-shrink-0 opacity-30"})]})}function Q2({onClose:s}){const e=Re.useRef(null),{rebuild:t,applyPreset:r,applyBg:o,exportPng:l,exportGlb:c}=W2(e),{layers:u,canvasWidth:f,canvasHeight:h,depthDimension:p}=rt(),[g,x]=Re.useState("studio"),[v,M]=Re.useState("#111111"),[w,_]=Re.useState("dark");Re.useEffect(()=>rt.subscribe((k,L)=>{k.layers!==L.layers&&t()}),[t]);const y=Re.useCallback(T=>{x(T),r(T);const k="#"+bc[T].bg.toString(16).padStart(6,"0");M(k),_("custom")},[r]),A=T=>{T.value===null?_("custom"):(_(T.label.toLowerCase()),M(T.value),o(T.value))},C=Z2(u,f,h,p);return E.jsxs("div",{className:"fixed inset-0 flex flex-col",style:{zIndex:100,background:"var(--color-background)",color:"var(--color-text)"},children:[E.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b flex-shrink-0",style:{borderColor:"var(--color-border)",background:"var(--color-surfaceAlt)"},children:[E.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[E.jsx(hs,{size:15,style:{color:"var(--color-accent)"}}),E.jsx("span",{className:"font-theme text-sm tracking-wider",children:"Render Studio"}),E.jsxs("span",{className:"text-xs opacity-30 ml-1",children:[f," × ",h," × ",p," · ",C.toLocaleString()," voxels"]})]}),E.jsxs("button",{onClick:s,className:"flex items-center gap-1.5 px-3 py-1 rounded border text-xs transition-colors",style:{borderColor:"var(--color-border)",color:"var(--color-text-muted)"},children:[E.jsx(vo,{size:13})," Close"]})]}),E.jsxs("div",{className:"flex flex-1 min-h-0",children:[E.jsxs("div",{className:"w-64 flex-shrink-0 border-r flex flex-col overflow-y-auto",style:{borderColor:"var(--color-border)",background:"var(--color-surface)"},children:[E.jsx(sc,{children:"Lighting"}),E.jsx("div",{className:"grid grid-cols-2 gap-1.5 px-4 pb-2",children:Object.entries(bc).map(([T,k])=>{const L=K2[T]??A0;return E.jsxs("button",{onClick:()=>y(T),className:`flex flex-col items-center gap-1 py-2 rounded border text-xs transition-all ${g===T?"border-accent bg-accent/15 text-accent":"border-border text-text-muted hover:border-accent/40 hover:text-text"}`,style:g===T?{borderColor:"var(--color-accent)"}:{},children:[E.jsx(L,{size:16}),k.label]},T)})}),E.jsx(sc,{children:"Background"}),E.jsx("div",{className:"flex flex-wrap gap-1.5 px-4 pb-1",children:j2.filter(T=>T.value!==null).map(T=>E.jsxs("button",{onClick:()=>A(T),className:"flex items-center gap-1.5 px-2 py-1 rounded border text-xs transition-colors",style:{borderColor:w===T.label.toLowerCase()?"var(--color-accent)":"var(--color-border)",color:w===T.label.toLowerCase()?"var(--color-accent)":"var(--color-text-muted)"},children:[E.jsx("span",{className:"inline-block w-3 h-3 rounded-sm border border-white/20",style:{background:T.value}}),T.label]},T.label))}),E.jsxs("div",{className:"flex items-center gap-2 px-4 pb-3 pt-1",children:[E.jsx("span",{className:"text-xs opacity-50",children:"Custom"}),E.jsx("input",{type:"color",value:v,onChange:T=>{M(T.target.value),o(T.target.value),_("custom")},className:"w-8 h-6 rounded cursor-pointer border",style:{borderColor:"var(--color-border)"}}),E.jsx("span",{className:"text-xs font-mono opacity-40",children:v})]}),E.jsx("div",{className:"border-t mx-4",style:{borderColor:"var(--color-border)"}}),E.jsx(sc,{children:"Export Image"}),E.jsx(oo,{label:"PNG — 1024 px",sub:"Quick preview",icon:oc,onClick:()=>l(1024)}),E.jsx(oo,{label:"PNG — 2048 px",sub:"High resolution",icon:oc,onClick:()=>l(2048)}),E.jsx(oo,{label:"PNG — 4096 px",sub:"Print / poster",icon:oc,onClick:()=>l(4096)}),E.jsx("div",{className:"border-t mx-4 mt-1",style:{borderColor:"var(--color-border)"}}),E.jsx(sc,{children:"Export 3D"}),E.jsx(oo,{label:"OBJ + MTL",sub:"Blender · Maya · Cinema4D",icon:hs,onClick:async()=>{const{layers:T,canvasWidth:k,canvasHeight:L,depthDimension:D}=rt.getState();q2(T,k,L,D)}}),E.jsx(oo,{label:"GLB / GLTF",sub:"Unity · Unreal · Sketchfab",icon:hs,onClick:c}),E.jsx(oo,{label:"VOX",sub:"MagicaVoxel · voxel editors",icon:hs,onClick:async()=>{const{layers:T,canvasWidth:k,canvasHeight:L,depthDimension:D}=rt.getState();Y2(T,k,L,D)}}),E.jsx("div",{className:"mt-auto px-4 py-3 border-t",style:{borderColor:"var(--color-border)"},children:E.jsxs("div",{className:"text-xs opacity-40 space-y-0.5",children:[E.jsxs("div",{children:[C.toLocaleString()," voxels"]}),E.jsxs("div",{children:[f," × ",h," × ",p," (W×H×D)"]}),E.jsxs("div",{children:[u.filter(T=>T.visible).length," visible layer",u.filter(T=>T.visible).length!==1?"s":""]})]})})]}),E.jsxs("div",{className:"flex-1 relative min-w-0",style:{background:"#111"},children:[E.jsx("div",{ref:e,className:"w-full h-full"}),E.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 text-xs pointer-events-none opacity-40 select-none",style:{color:"#fff"},children:"Drag to orbit · Scroll to zoom · Right-drag to pan"})]})]})]})}const J2=[{id:"front",Icon:w0,label:"Front"},{id:"back",Icon:uy,label:"Back"},{id:"left",Icon:Z_,label:"Left"},{id:"right",Icon:J_,label:"Right"},{id:"top",Icon:ty,label:"Top"},{id:"bottom",Icon:q_,label:"Bottom"}];function eA(){const s=rt(M=>M.activeTheme),e=rt(M=>M.viewMode),t=rt(M=>M.setViewMode),r=Re.useRef(null),[o,l]=Re.useState(!1);Wy(),Re.useEffect(()=>{U0(tf(s))},[s]);const u=tf(s).PainterBackground,f=e!=="preview-only",h=e!=="canvas-only",p=e!=="canvas-only",g=e==="preview-only",x=()=>{h&&t("preview-only")},v=()=>{f&&t("canvas-only")};return E.jsxs("div",{className:"relative flex flex-col w-full h-screen overflow-hidden font-theme",style:{background:"var(--color-background)",color:"var(--color-text)"},children:[E.jsx(u,{}),E.jsxs("div",{className:"relative flex flex-col w-full h-full",style:{zIndex:10},children:[E.jsx(sS,{onExport:()=>{var M;return(M=r.current)==null?void 0:M.call(r)},onRender:()=>l(!0)}),E.jsxs("div",{className:"flex flex-1 min-h-0",children:[p&&E.jsxs("div",{className:"flex flex-col w-28 border-r border-border flex-shrink-0 overflow-y-auto",style:{background:"color-mix(in srgb, var(--color-surface) 90%, transparent)"},children:[E.jsx("div",{className:"px-2 pt-2 pb-1 text-xs uppercase tracking-wide text-text-muted border-b border-border",children:"Palette"}),E.jsx(g2,{})]}),f&&E.jsxs("div",{className:"flex flex-col flex-1 min-w-0 overflow-hidden",style:{borderRight:h?"1px solid var(--color-border)":"none"},children:[E.jsx(tA,{closable:h,onClose:x}),E.jsx("div",{className:"flex-1 min-h-0 overflow-hidden relative",style:{background:"color-mix(in srgb, var(--color-background) 80%, transparent)"},children:E.jsx(hS,{})})]}),h&&E.jsxs("div",{className:"flex flex-col flex-1 min-w-0 overflow-hidden",style:{background:"color-mix(in srgb, var(--color-background) 95%, transparent)"},children:[E.jsxs("div",{className:"flex items-center justify-between gap-2 px-3 py-1.5 border-b border-border flex-shrink-0",style:{background:"color-mix(in srgb, var(--color-surfaceAlt) 95%, transparent)",minHeight:32},children:[E.jsx("div",{className:"text-xs text-text-muted opacity-60 uppercase tracking-widest",children:g?"3D Edit Mode":"3D Preview"}),f&&E.jsx(Sx,{label:"Close 3D preview",onClick:v})]}),E.jsx("div",{className:"flex-1 min-h-0 relative overflow-hidden",children:E.jsx(m2,{onExport:r})})]}),E.jsxs("div",{className:"flex flex-col w-52 border-l border-border flex-shrink-0 overflow-y-auto",style:{background:"color-mix(in srgb, var(--color-surface) 95%, transparent)"},children:[E.jsx(y2,{}),E.jsx("div",{className:"border-t border-border"}),E.jsx(_2,{})]})]}),E.jsx(lS,{})]}),o&&E.jsx(Q2,{onClose:()=>l(!1)})]})}function tA({closable:s,onClose:e}){const{activeView:t,setActiveView:r}=rt();return E.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 border-b border-border flex-shrink-0 flex-wrap",style:{background:"color-mix(in srgb, var(--color-surfaceAlt) 95%, transparent)",minHeight:32},children:[J2.map(({id:o,Icon:l,label:c})=>E.jsxs("button",{onClick:()=>r(o),className:`flex items-center gap-1 px-2 py-0.5 rounded border text-xs transition-colors ${t===o?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/40"}`,children:[E.jsx(l,{size:11}),c]},o)),s&&E.jsx("div",{className:"ml-auto",children:E.jsx(Sx,{label:"Close 2D canvas",onClick:e})})]})}function Sx({label:s,onClick:e}){return E.jsx("button",{type:"button",onClick:e,className:"w-7 h-7 rounded flex items-center justify-center border border-border text-text-muted hover:text-text hover:border-accent/50 hover:bg-surface transition-colors",title:s,"aria-label":s,children:E.jsx(vo,{size:14})})}c_.createRoot(document.getElementById("root")).render(E.jsx(ha.StrictMode,{children:E.jsx(eA,{})}));
