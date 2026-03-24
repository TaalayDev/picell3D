(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function C0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gd={exports:{}},ca={},xd={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function c_(){if(Vm)return St;Vm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=m&&B[m]||B["@@iterator"],typeof B=="function"?B:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function v(B,ee,Te){this.props=B,this.context=ee,this.refs=E,this.updater=Te||y}v.prototype.isReactComponent={},v.prototype.setState=function(B,ee){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ee,"setState")},v.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function _(){}_.prototype=v.prototype;function b(B,ee,Te){this.props=B,this.context=ee,this.refs=E,this.updater=Te||y}var L=b.prototype=new _;L.constructor=b,w(L,v.prototype),L.isPureReactComponent=!0;var T=Array.isArray,U=Object.prototype.hasOwnProperty,R={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function k(B,ee,Te){var Z,fe={},ve=null,xe=null;if(ee!=null)for(Z in ee.ref!==void 0&&(xe=ee.ref),ee.key!==void 0&&(ve=""+ee.key),ee)U.call(ee,Z)&&!N.hasOwnProperty(Z)&&(fe[Z]=ee[Z]);var Ae=arguments.length-2;if(Ae===1)fe.children=Te;else if(1<Ae){for(var De=Array(Ae),We=0;We<Ae;We++)De[We]=arguments[We+2];fe.children=De}if(B&&B.defaultProps)for(Z in Ae=B.defaultProps,Ae)fe[Z]===void 0&&(fe[Z]=Ae[Z]);return{$$typeof:s,type:B,key:ve,ref:xe,props:fe,_owner:R.current}}function D(B,ee){return{$$typeof:s,type:B.type,key:ee,ref:B.ref,props:B.props,_owner:B._owner}}function P(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function O(B){var ee={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Te){return ee[Te]})}var q=/\/+/g;function W(B,ee){return typeof B=="object"&&B!==null&&B.key!=null?O(""+B.key):ee.toString(36)}function oe(B,ee,Te,Z,fe){var ve=typeof B;(ve==="undefined"||ve==="boolean")&&(B=null);var xe=!1;if(B===null)xe=!0;else switch(ve){case"string":case"number":xe=!0;break;case"object":switch(B.$$typeof){case s:case e:xe=!0}}if(xe)return xe=B,fe=fe(xe),B=Z===""?"."+W(xe,0):Z,T(fe)?(Te="",B!=null&&(Te=B.replace(q,"$&/")+"/"),oe(fe,ee,Te,"",function(We){return We})):fe!=null&&(P(fe)&&(fe=D(fe,Te+(!fe.key||xe&&xe.key===fe.key?"":(""+fe.key).replace(q,"$&/")+"/")+B)),ee.push(fe)),1;if(xe=0,Z=Z===""?".":Z+":",T(B))for(var Ae=0;Ae<B.length;Ae++){ve=B[Ae];var De=Z+W(ve,Ae);xe+=oe(ve,ee,Te,De,fe)}else if(De=x(B),typeof De=="function")for(B=De.call(B),Ae=0;!(ve=B.next()).done;)ve=ve.value,De=Z+W(ve,Ae++),xe+=oe(ve,ee,Te,De,fe);else if(ve==="object")throw ee=String(B),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return xe}function ce(B,ee,Te){if(B==null)return B;var Z=[],fe=0;return oe(B,Z,"","",function(ve){return ee.call(Te,ve,fe++)}),Z}function ue(B){if(B._status===-1){var ee=B._result;ee=ee(),ee.then(function(Te){(B._status===0||B._status===-1)&&(B._status=1,B._result=Te)},function(Te){(B._status===0||B._status===-1)&&(B._status=2,B._result=Te)}),B._status===-1&&(B._status=0,B._result=ee)}if(B._status===1)return B._result.default;throw B._result}var le={current:null},V={transition:null},ne={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:V,ReactCurrentOwner:R};function ie(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:ce,forEach:function(B,ee,Te){ce(B,function(){ee.apply(this,arguments)},Te)},count:function(B){var ee=0;return ce(B,function(){ee++}),ee},toArray:function(B){return ce(B,function(ee){return ee})||[]},only:function(B){if(!P(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},St.Component=v,St.Fragment=t,St.Profiler=o,St.PureComponent=b,St.StrictMode=i,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,St.act=ie,St.cloneElement=function(B,ee,Te){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Z=w({},B.props),fe=B.key,ve=B.ref,xe=B._owner;if(ee!=null){if(ee.ref!==void 0&&(ve=ee.ref,xe=R.current),ee.key!==void 0&&(fe=""+ee.key),B.type&&B.type.defaultProps)var Ae=B.type.defaultProps;for(De in ee)U.call(ee,De)&&!N.hasOwnProperty(De)&&(Z[De]=ee[De]===void 0&&Ae!==void 0?Ae[De]:ee[De])}var De=arguments.length-2;if(De===1)Z.children=Te;else if(1<De){Ae=Array(De);for(var We=0;We<De;We++)Ae[We]=arguments[We+2];Z.children=Ae}return{$$typeof:s,type:B.type,key:fe,ref:ve,props:Z,_owner:xe}},St.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:a,_context:B},B.Consumer=B},St.createElement=k,St.createFactory=function(B){var ee=k.bind(null,B);return ee.type=B,ee},St.createRef=function(){return{current:null}},St.forwardRef=function(B){return{$$typeof:u,render:B}},St.isValidElement=P,St.lazy=function(B){return{$$typeof:p,_payload:{_status:-1,_result:B},_init:ue}},St.memo=function(B,ee){return{$$typeof:h,type:B,compare:ee===void 0?null:ee}},St.startTransition=function(B){var ee=V.transition;V.transition={};try{B()}finally{V.transition=ee}},St.unstable_act=ie,St.useCallback=function(B,ee){return le.current.useCallback(B,ee)},St.useContext=function(B){return le.current.useContext(B)},St.useDebugValue=function(){},St.useDeferredValue=function(B){return le.current.useDeferredValue(B)},St.useEffect=function(B,ee){return le.current.useEffect(B,ee)},St.useId=function(){return le.current.useId()},St.useImperativeHandle=function(B,ee,Te){return le.current.useImperativeHandle(B,ee,Te)},St.useInsertionEffect=function(B,ee){return le.current.useInsertionEffect(B,ee)},St.useLayoutEffect=function(B,ee){return le.current.useLayoutEffect(B,ee)},St.useMemo=function(B,ee){return le.current.useMemo(B,ee)},St.useReducer=function(B,ee,Te){return le.current.useReducer(B,ee,Te)},St.useRef=function(B){return le.current.useRef(B)},St.useState=function(B){return le.current.useState(B)},St.useSyncExternalStore=function(B,ee,Te){return le.current.useSyncExternalStore(B,ee,Te)},St.useTransition=function(){return le.current.useTransition()},St.version="18.3.1",St}var Hm;function qf(){return Hm||(Hm=1,xd.exports=c_()),xd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function u_(){if(Gm)return ca;Gm=1;var s=qf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var p,m={},x=null,y=null;h!==void 0&&(x=""+h),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!a.hasOwnProperty(p)&&(m[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:u,key:x,ref:y,props:m,_owner:o.current}}return ca.Fragment=t,ca.jsx=c,ca.jsxs=c,ca}var jm;function d_(){return jm||(jm=1,gd.exports=u_()),gd.exports}var M=d_(),Ce=qf();const ga=C0(Ce);var Dl={},vd={exports:{}},Gn={},_d={exports:{}},yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function f_(){return Wm||(Wm=1,(function(s){function e(V,ne){var ie=V.length;V.push(ne);e:for(;0<ie;){var B=ie-1>>>1,ee=V[B];if(0<o(ee,ne))V[B]=ne,V[ie]=ee,ie=B;else break e}}function t(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var ne=V[0],ie=V.pop();if(ie!==ne){V[0]=ie;e:for(var B=0,ee=V.length,Te=ee>>>1;B<Te;){var Z=2*(B+1)-1,fe=V[Z],ve=Z+1,xe=V[ve];if(0>o(fe,ie))ve<ee&&0>o(xe,fe)?(V[B]=xe,V[ve]=ie,B=ve):(V[B]=fe,V[Z]=ie,B=Z);else if(ve<ee&&0>o(xe,ie))V[B]=xe,V[ve]=ie,B=ve;else break e}}return ne}function o(V,ne){var ie=V.sortIndex-ne.sortIndex;return ie!==0?ie:V.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();s.unstable_now=function(){return c.now()-u}}var f=[],h=[],p=1,m=null,x=3,y=!1,w=!1,E=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(V){for(var ne=t(h);ne!==null;){if(ne.callback===null)i(h);else if(ne.startTime<=V)i(h),ne.sortIndex=ne.expirationTime,e(f,ne);else break;ne=t(h)}}function T(V){if(E=!1,L(V),!w)if(t(f)!==null)w=!0,ue(U);else{var ne=t(h);ne!==null&&le(T,ne.startTime-V)}}function U(V,ne){w=!1,E&&(E=!1,_(k),k=-1),y=!0;var ie=x;try{for(L(ne),m=t(f);m!==null&&(!(m.expirationTime>ne)||V&&!O());){var B=m.callback;if(typeof B=="function"){m.callback=null,x=m.priorityLevel;var ee=B(m.expirationTime<=ne);ne=s.unstable_now(),typeof ee=="function"?m.callback=ee:m===t(f)&&i(f),L(ne)}else i(f);m=t(f)}if(m!==null)var Te=!0;else{var Z=t(h);Z!==null&&le(T,Z.startTime-ne),Te=!1}return Te}finally{m=null,x=ie,y=!1}}var R=!1,N=null,k=-1,D=5,P=-1;function O(){return!(s.unstable_now()-P<D)}function q(){if(N!==null){var V=s.unstable_now();P=V;var ne=!0;try{ne=N(!0,V)}finally{ne?W():(R=!1,N=null)}}else R=!1}var W;if(typeof b=="function")W=function(){b(q)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=q,W=function(){ce.postMessage(null)}}else W=function(){v(q,0)};function ue(V){N=V,R||(R=!0,W())}function le(V,ne){k=v(function(){V(s.unstable_now())},ne)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,ue(U))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(V){switch(x){case 1:case 2:case 3:var ne=3;break;default:ne=x}var ie=x;x=ne;try{return V()}finally{x=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,ne){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ie=x;x=V;try{return ne()}finally{x=ie}},s.unstable_scheduleCallback=function(V,ne,ie){var B=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?B+ie:B):ie=B,V){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ie+ee,V={id:p++,callback:ne,priorityLevel:V,startTime:ie,expirationTime:ee,sortIndex:-1},ie>B?(V.sortIndex=ie,e(h,V),t(f)===null&&V===t(h)&&(E?(_(k),k=-1):E=!0,le(T,ie-B))):(V.sortIndex=ee,e(f,V),w||y||(w=!0,ue(U))),V},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(V){var ne=x;return function(){var ie=x;x=ne;try{return V.apply(this,arguments)}finally{x=ie}}}})(yd)),yd}var Xm;function h_(){return Xm||(Xm=1,_d.exports=f_()),_d.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function p_(){if(Ym)return Gn;Ym=1;var s=qf(),e=h_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function x(n){return f.call(m,n)?!0:f.call(p,n)?!1:h.test(n)?m[n]=!0:(p[n]=!0,!1)}function y(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,r,l,d){if(r===null||typeof r>"u"||y(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,d,g,S,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=S,this.removeEmptyString=A}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];v[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_,b);v[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_,b);v[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_,b);v[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,d){var g=v.hasOwnProperty(r)?v[r]:null;(g!==null?g.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,l,g,d)&&(l=null),d||g===null?x(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):g.mustUseProperty?n[g.propertyName]=l===null?g.type===3?!1:"":l:(r=g.attributeName,d=g.attributeNamespace,l===null?n.removeAttribute(r):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),V=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,B;function ee(n){if(B===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);B=r&&r[1]||""}return`
`+B+n}var Te=!1;function Z(n,r){if(!n||Te)return"";Te=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var d=re}Reflect.construct(n,[],r)}else{try{r.call()}catch(re){d=re}n.call(r.prototype)}else{try{throw Error()}catch(re){d=re}n()}}catch(re){if(re&&d&&typeof re.stack=="string"){for(var g=re.stack.split(`
`),S=d.stack.split(`
`),A=g.length-1,z=S.length-1;1<=A&&0<=z&&g[A]!==S[z];)z--;for(;1<=A&&0<=z;A--,z--)if(g[A]!==S[z]){if(A!==1||z!==1)do if(A--,z--,0>z||g[A]!==S[z]){var H=`
`+g[A].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=A&&0<=z);break}}}finally{Te=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ee(n):""}function fe(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function ve(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case R:return"Portal";case D:return"Profiler";case k:return"StrictMode";case W:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case q:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return r=n.displayName||null,r!==null?r:ve(n.type)||"Memo";case ue:r=n._payload,n=n._init;try{return ve(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(r);case 8:return r===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function We(n){var r=De(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,S=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return g.call(this)},set:function(A){d=""+A,S.call(this,A)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(A){d=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function vt(n){n._valueTracker||(n._valueTracker=We(n))}function pt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=De(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function Dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function X(n,r){var l=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Zt(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=Ae(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ut(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function mt(n,r){ut(n,r);var l=Ae(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Rt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Rt(n,r.type,Ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Je(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Rt(n,r,l){(r!=="number"||Dt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var qe=Array.isArray;function F(n,r,l,d){if(n=n.options,r){r={};for(var g=0;g<l.length;g++)r["$"+l[g]]=!0;for(l=0;l<n.length;l++)g=r.hasOwnProperty("$"+n[l].value),n[l].selected!==g&&(n[l].selected=g),g&&d&&(n[l].defaultSelected=!0)}else{for(l=""+Ae(l),r=null,g=0;g<n.length;g++){if(n[g].value===l){n[g].selected=!0,d&&(n[g].defaultSelected=!0);return}r!==null||n[g].disabled||(r=n[g])}r!==null&&(r.selected=!0)}}function C(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(qe(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Ae(l)}}function pe(n,r){var l=Ae(r.value),d=Ae(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Le(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?he(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ee,Pe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,g){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,g)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ee=Ee||document.createElement("div"),Ee.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ee.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ct(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(n){ze.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),ye[r]=ye[n]})});function Ke(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||ye.hasOwnProperty(n)&&ye[n]?(""+r).trim():r+"px"}function tt(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,g=Ke(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,g):n[l]=g}}var Be=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(n,r){if(r){if(Be[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ze(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mt=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,de=null,me=null;function Fe(n){if(n=$o(n)){if(typeof Ne!="function")throw Error(t(280));var r=n.stateNode;r&&(r=$a(r),Ne(n.stateNode,n.type,r))}}function Ue(n){de?me?me.push(n):me=[n]:de=n}function dt(){if(de){var n=de,r=me;if(me=de=null,Fe(n),r)for(n=0;n<r.length;n++)Fe(r[n])}}function Vt(n,r){return n(r)}function en(){}var bt=!1;function kn(n,r,l){if(bt)return n(r,l);bt=!0;try{return Vt(n,r,l)}finally{bt=!1,(de!==null||me!==null)&&(en(),dt())}}function bn(n,r){var l=n.stateNode;if(l===null)return null;var d=$a(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ms=!1;if(u)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Ms=!1}function zi(n,r,l,d,g,S,A,z,H){var re=Array.prototype.slice.call(arguments,3);try{r.apply(l,re)}catch(Se){this.onError(Se)}}var Bi=!1,jr=null,Wr=!1,hr=null,Ca={onError:function(n){Bi=!0,jr=n}};function Es(n,r,l,d,g,S,A,z,H){Bi=!1,jr=null,zi.apply(Ca,arguments)}function Ra(n,r,l,d,g,S,A,z,H){if(Es.apply(this,arguments),Bi){if(Bi){var re=jr;Bi=!1,jr=null}else throw Error(t(198));Wr||(Wr=!0,hr=re)}}function Li(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Pa(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function La(n){if(Li(n)!==n)throw Error(t(188))}function Oc(n){var r=n.alternate;if(!r){if(r=Li(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var g=l.return;if(g===null)break;var S=g.alternate;if(S===null){if(d=g.return,d!==null){l=d;continue}break}if(g.child===S.child){for(S=g.child;S;){if(S===l)return La(g),n;if(S===d)return La(g),r;S=S.sibling}throw Error(t(188))}if(l.return!==d.return)l=g,d=S;else{for(var A=!1,z=g.child;z;){if(z===l){A=!0,l=g,d=S;break}if(z===d){A=!0,d=g,l=S;break}z=z.sibling}if(!A){for(z=S.child;z;){if(z===l){A=!0,l=S,d=g;break}if(z===d){A=!0,d=S,l=g;break}z=z.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function I(n){return n=Oc(n),n!==null?Y(n):null}function Y(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Y(n);if(r!==null)return r;n=n.sibling}return null}var se=e.unstable_scheduleCallback,ae=e.unstable_cancelCallback,$=e.unstable_shouldYield,Re=e.unstable_requestPaint,we=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,Ge=e.unstable_ImmediatePriority,ot=e.unstable_UserBlockingPriority,lt=e.unstable_NormalPriority,Ye=e.unstable_LowPriority,Tt=e.unstable_IdlePriority,It=null,wt=null;function gn(n){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(It,n,void 0,(n.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Pt,Qe=Math.log,gi=Math.LN2;function Pt(n){return n>>>=0,n===0?32:31-(Qe(n)/gi|0)|0}var xn=64,xi=4194304;function tn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ni(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,g=n.suspendedLanes,S=n.pingedLanes,A=l&268435455;if(A!==0){var z=A&~g;z!==0?d=tn(z):(S&=A,S!==0&&(d=tn(S)))}else A=l&~g,A!==0?d=tn(A):S!==0&&(d=tn(S));if(d===0)return 0;if(r!==0&&r!==d&&(r&g)===0&&(g=d&-d,S=r&-r,g>=S||g===16&&(S&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-ht(r),g=1<<l,d|=n[l],r&=~g;return d}function Ot(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ni(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,g=n.expirationTimes,S=n.pendingLanes;0<S;){var A=31-ht(S),z=1<<A,H=g[A];H===-1?((z&l)===0||(z&d)!==0)&&(g[A]=Ot(z,r)):H<=r&&(n.expiredLanes|=z),S&=~z}}function Vi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=xn;return xn<<=1,(xn&4194240)===0&&(xn=64),n}function ii(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Fn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ht(r),n[r]=l}function Na(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var g=31-ht(l),S=1<<g;r[g]=0,d[g]=-1,n[g]=-1,l&=~S}}function zc(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-ht(l),g=1<<d;g&r|n[d]&r&&(n[d]|=r),l&=~g}}var Ut=0;function _h(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var yh,Bc,Sh,Mh,Eh,Vc=!1,Da=[],pr=null,mr=null,gr=null,No=new Map,Do=new Map,xr=[],Lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(n,r){switch(n){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":No.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(r.pointerId)}}function Io(n,r,l,d,g,S){return n===null||n.nativeEvent!==S?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:S,targetContainers:[g]},r!==null&&(r=$o(r),r!==null&&Bc(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,g!==null&&r.indexOf(g)===-1&&r.push(g),n)}function Nx(n,r,l,d,g){switch(r){case"focusin":return pr=Io(pr,n,r,l,d,g),!0;case"dragenter":return mr=Io(mr,n,r,l,d,g),!0;case"mouseover":return gr=Io(gr,n,r,l,d,g),!0;case"pointerover":var S=g.pointerId;return No.set(S,Io(No.get(S)||null,n,r,l,d,g)),!0;case"gotpointercapture":return S=g.pointerId,Do.set(S,Io(Do.get(S)||null,n,r,l,d,g)),!0}return!1}function Th(n){var r=Xr(n.target);if(r!==null){var l=Li(r);if(l!==null){if(r=l.tag,r===13){if(r=Pa(l),r!==null){n.blockedOn=r,Eh(n.priority,function(){Sh(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ia(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Gc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Mt=d,l.target.dispatchEvent(d),Mt=null}else return r=$o(l),r!==null&&Bc(r),n.blockedOn=l,!1;r.shift()}return!0}function bh(n,r,l){Ia(n)&&l.delete(r)}function Dx(){Vc=!1,pr!==null&&Ia(pr)&&(pr=null),mr!==null&&Ia(mr)&&(mr=null),gr!==null&&Ia(gr)&&(gr=null),No.forEach(bh),Do.forEach(bh)}function Uo(n,r){n.blockedOn===r&&(n.blockedOn=null,Vc||(Vc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dx)))}function ko(n){function r(g){return Uo(g,n)}if(0<Da.length){Uo(Da[0],n);for(var l=1;l<Da.length;l++){var d=Da[l];d.blockedOn===n&&(d.blockedOn=null)}}for(pr!==null&&Uo(pr,n),mr!==null&&Uo(mr,n),gr!==null&&Uo(gr,n),No.forEach(r),Do.forEach(r),l=0;l<xr.length;l++)d=xr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<xr.length&&(l=xr[0],l.blockedOn===null);)Th(l),l.blockedOn===null&&xr.shift()}var ws=T.ReactCurrentBatchConfig,Ua=!0;function Ix(n,r,l,d){var g=Ut,S=ws.transition;ws.transition=null;try{Ut=1,Hc(n,r,l,d)}finally{Ut=g,ws.transition=S}}function Ux(n,r,l,d){var g=Ut,S=ws.transition;ws.transition=null;try{Ut=4,Hc(n,r,l,d)}finally{Ut=g,ws.transition=S}}function Hc(n,r,l,d){if(Ua){var g=Gc(n,r,l,d);if(g===null)ou(n,r,d,ka,l),wh(n,d);else if(Nx(g,n,r,l,d))d.stopPropagation();else if(wh(n,d),r&4&&-1<Lx.indexOf(n)){for(;g!==null;){var S=$o(g);if(S!==null&&yh(S),S=Gc(n,r,l,d),S===null&&ou(n,r,d,ka,l),S===g)break;g=S}g!==null&&d.stopPropagation()}else ou(n,r,d,null,l)}}var ka=null;function Gc(n,r,l,d){if(ka=null,n=j(d),n=Xr(n),n!==null)if(r=Li(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Pa(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ka=n,null}function Ah(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ge:return 1;case ot:return 4;case lt:case Ye:return 16;case Tt:return 536870912;default:return 16}default:return 16}}var vr=null,jc=null,Fa=null;function Ch(){if(Fa)return Fa;var n,r=jc,l=r.length,d,g="value"in vr?vr.value:vr.textContent,S=g.length;for(n=0;n<l&&r[n]===g[n];n++);var A=l-n;for(d=1;d<=A&&r[l-d]===g[S-d];d++);return Fa=g.slice(n,1<d?1-d:void 0)}function Oa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function za(){return!0}function Rh(){return!1}function qn(n){function r(l,d,g,S,A){this._reactName=l,this._targetInst=g,this.type=d,this.nativeEvent=S,this.target=A,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(l=n[z],this[z]=l?l(S):S[z]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?za:Rh,this.isPropagationStopped=Rh,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),r}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=qn(Ts),Fo=ie({},Ts,{view:0,detail:0}),kx=qn(Fo),Xc,Yc,Oo,Ba=ie({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Oo&&(Oo&&n.type==="mousemove"?(Xc=n.screenX-Oo.screenX,Yc=n.screenY-Oo.screenY):Yc=Xc=0,Oo=n),Xc)},movementY:function(n){return"movementY"in n?n.movementY:Yc}}),Ph=qn(Ba),Fx=ie({},Ba,{dataTransfer:0}),Ox=qn(Fx),zx=ie({},Fo,{relatedTarget:0}),$c=qn(zx),Bx=ie({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=qn(Bx),Hx=ie({},Ts,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gx=qn(Hx),jx=ie({},Ts,{data:0}),Lh=qn(jx),Wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Yx[n])?!!r[n]:!1}function qc(){return $x}var qx=ie({},Fo,{key:function(n){if(n.key){var r=Wx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Oa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(n){return n.type==="keypress"?Oa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Oa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Kx=qn(qx),Zx=ie({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=qn(Zx),Qx=ie({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),Jx=qn(Qx),ev=ie({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),tv=qn(ev),nv=ie({},Ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),iv=qn(nv),rv=[9,13,27,32],Kc=u&&"CompositionEvent"in window,zo=null;u&&"documentMode"in document&&(zo=document.documentMode);var sv=u&&"TextEvent"in window&&!zo,Dh=u&&(!Kc||zo&&8<zo&&11>=zo),Ih=" ",Uh=!1;function kh(n,r){switch(n){case"keyup":return rv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function ov(n,r){switch(n){case"compositionend":return Fh(r);case"keypress":return r.which!==32?null:(Uh=!0,Ih);case"textInput":return n=r.data,n===Ih&&Uh?null:n;default:return null}}function av(n,r){if(bs)return n==="compositionend"||!Kc&&kh(n,r)?(n=Ch(),Fa=jc=vr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Dh&&r.locale!=="ko"?null:r.data;default:return null}}var lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!lv[n.type]:r==="textarea"}function zh(n,r,l,d){Ue(d),r=Wa(r,"onChange"),0<r.length&&(l=new Wc("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var Bo=null,Vo=null;function cv(n){ip(n,0)}function Va(n){var r=Ls(n);if(pt(r))return n}function uv(n,r){if(n==="change")return r}var Bh=!1;if(u){var Zc;if(u){var Qc="oninput"in document;if(!Qc){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),Qc=typeof Vh.oninput=="function"}Zc=Qc}else Zc=!1;Bh=Zc&&(!document.documentMode||9<document.documentMode)}function Hh(){Bo&&(Bo.detachEvent("onpropertychange",Gh),Vo=Bo=null)}function Gh(n){if(n.propertyName==="value"&&Va(Vo)){var r=[];zh(r,Vo,n,j(n)),kn(cv,r)}}function dv(n,r,l){n==="focusin"?(Hh(),Bo=r,Vo=l,Bo.attachEvent("onpropertychange",Gh)):n==="focusout"&&Hh()}function fv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Va(Vo)}function hv(n,r){if(n==="click")return Va(r)}function pv(n,r){if(n==="input"||n==="change")return Va(r)}function mv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var vi=typeof Object.is=="function"?Object.is:mv;function Ho(n,r){if(vi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var g=l[d];if(!f.call(r,g)||!vi(n[g],r[g]))return!1}return!0}function jh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wh(n,r){var l=jh(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=jh(l)}}function Xh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Xh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Yh(){for(var n=window,r=Dt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Dt(n.document)}return r}function Jc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function gv(n){var r=Yh(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Xh(l.ownerDocument.documentElement,l)){if(d!==null&&Jc(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var g=l.textContent.length,S=Math.min(d.start,g);d=d.end===void 0?S:Math.min(d.end,g),!n.extend&&S>d&&(g=d,d=S,S=g),g=Wh(l,S);var A=Wh(l,d);g&&A&&(n.rangeCount!==1||n.anchorNode!==g.node||n.anchorOffset!==g.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(g.node,g.offset),n.removeAllRanges(),S>d?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var xv=u&&"documentMode"in document&&11>=document.documentMode,As=null,eu=null,Go=null,tu=!1;function $h(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;tu||As==null||As!==Dt(d)||(d=As,"selectionStart"in d&&Jc(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Go&&Ho(Go,d)||(Go=d,d=Wa(eu,"onSelect"),0<d.length&&(r=new Wc("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=As)))}function Ha(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Cs={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},nu={},qh={};u&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Ga(n){if(nu[n])return nu[n];if(!Cs[n])return n;var r=Cs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in qh)return nu[n]=r[l];return n}var Kh=Ga("animationend"),Zh=Ga("animationiteration"),Qh=Ga("animationstart"),Jh=Ga("transitionend"),ep=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(n,r){ep.set(n,r),a(r,[n])}for(var iu=0;iu<tp.length;iu++){var ru=tp[iu],vv=ru.toLowerCase(),_v=ru[0].toUpperCase()+ru.slice(1);_r(vv,"on"+_v)}_r(Kh,"onAnimationEnd"),_r(Zh,"onAnimationIteration"),_r(Qh,"onAnimationStart"),_r("dblclick","onDoubleClick"),_r("focusin","onFocus"),_r("focusout","onBlur"),_r(Jh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function np(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,Ra(d,r,void 0,n),n.currentTarget=null}function ip(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],g=d.event;d=d.listeners;e:{var S=void 0;if(r)for(var A=d.length-1;0<=A;A--){var z=d[A],H=z.instance,re=z.currentTarget;if(z=z.listener,H!==S&&g.isPropagationStopped())break e;np(g,z,re),S=H}else for(A=0;A<d.length;A++){if(z=d[A],H=z.instance,re=z.currentTarget,z=z.listener,H!==S&&g.isPropagationStopped())break e;np(g,z,re),S=H}}}if(Wr)throw n=hr,Wr=!1,hr=null,n}function Ht(n,r){var l=r[fu];l===void 0&&(l=r[fu]=new Set);var d=n+"__bubble";l.has(d)||(rp(r,n,2,!1),l.add(d))}function su(n,r,l){var d=0;r&&(d|=4),rp(l,n,d,r)}var ja="_reactListening"+Math.random().toString(36).slice(2);function Wo(n){if(!n[ja]){n[ja]=!0,i.forEach(function(l){l!=="selectionchange"&&(yv.has(l)||su(l,!1,n),su(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ja]||(r[ja]=!0,su("selectionchange",!1,r))}}function rp(n,r,l,d){switch(Ah(r)){case 1:var g=Ix;break;case 4:g=Ux;break;default:g=Hc}l=g.bind(null,r,l,n),g=void 0,!Ms||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(g=!0),d?g!==void 0?n.addEventListener(r,l,{capture:!0,passive:g}):n.addEventListener(r,l,!0):g!==void 0?n.addEventListener(r,l,{passive:g}):n.addEventListener(r,l,!1)}function ou(n,r,l,d,g){var S=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var A=d.tag;if(A===3||A===4){var z=d.stateNode.containerInfo;if(z===g||z.nodeType===8&&z.parentNode===g)break;if(A===4)for(A=d.return;A!==null;){var H=A.tag;if((H===3||H===4)&&(H=A.stateNode.containerInfo,H===g||H.nodeType===8&&H.parentNode===g))return;A=A.return}for(;z!==null;){if(A=Xr(z),A===null)return;if(H=A.tag,H===5||H===6){d=S=A;continue e}z=z.parentNode}}d=d.return}kn(function(){var re=S,Se=j(l),Me=[];e:{var _e=ep.get(n);if(_e!==void 0){var Oe=Wc,He=n;switch(n){case"keypress":if(Oa(l)===0)break e;case"keydown":case"keyup":Oe=Kx;break;case"focusin":He="focus",Oe=$c;break;case"focusout":He="blur",Oe=$c;break;case"beforeblur":case"afterblur":Oe=$c;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=Ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Jx;break;case Kh:case Zh:case Qh:Oe=Vx;break;case Jh:Oe=tv;break;case"scroll":Oe=kx;break;case"wheel":Oe=iv;break;case"copy":case"cut":case"paste":Oe=Gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Nh}var je=(r&4)!==0,qt=!je&&n==="scroll",J=je?_e!==null?_e+"Capture":null:_e;je=[];for(var G=re,te;G!==null;){te=G;var be=te.stateNode;if(te.tag===5&&be!==null&&(te=be,J!==null&&(be=bn(G,J),be!=null&&je.push(Xo(G,be,te)))),qt)break;G=G.return}0<je.length&&(_e=new Oe(_e,He,null,l,Se),Me.push({event:_e,listeners:je}))}}if((r&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",_e&&l!==Mt&&(He=l.relatedTarget||l.fromElement)&&(Xr(He)||He[Hi]))break e;if((Oe||_e)&&(_e=Se.window===Se?Se:(_e=Se.ownerDocument)?_e.defaultView||_e.parentWindow:window,Oe?(He=l.relatedTarget||l.toElement,Oe=re,He=He?Xr(He):null,He!==null&&(qt=Li(He),He!==qt||He.tag!==5&&He.tag!==6)&&(He=null)):(Oe=null,He=re),Oe!==He)){if(je=Ph,be="onMouseLeave",J="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(je=Nh,be="onPointerLeave",J="onPointerEnter",G="pointer"),qt=Oe==null?_e:Ls(Oe),te=He==null?_e:Ls(He),_e=new je(be,G+"leave",Oe,l,Se),_e.target=qt,_e.relatedTarget=te,be=null,Xr(Se)===re&&(je=new je(J,G+"enter",He,l,Se),je.target=te,je.relatedTarget=qt,be=je),qt=be,Oe&&He)t:{for(je=Oe,J=He,G=0,te=je;te;te=Rs(te))G++;for(te=0,be=J;be;be=Rs(be))te++;for(;0<G-te;)je=Rs(je),G--;for(;0<te-G;)J=Rs(J),te--;for(;G--;){if(je===J||J!==null&&je===J.alternate)break t;je=Rs(je),J=Rs(J)}je=null}else je=null;Oe!==null&&sp(Me,_e,Oe,je,!1),He!==null&&qt!==null&&sp(Me,qt,He,je,!0)}}e:{if(_e=re?Ls(re):window,Oe=_e.nodeName&&_e.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&_e.type==="file")var $e=uv;else if(Oh(_e))if(Bh)$e=pv;else{$e=fv;var it=dv}else(Oe=_e.nodeName)&&Oe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&($e=hv);if($e&&($e=$e(n,re))){zh(Me,$e,l,Se);break e}it&&it(n,_e,re),n==="focusout"&&(it=_e._wrapperState)&&it.controlled&&_e.type==="number"&&Rt(_e,"number",_e.value)}switch(it=re?Ls(re):window,n){case"focusin":(Oh(it)||it.contentEditable==="true")&&(As=it,eu=re,Go=null);break;case"focusout":Go=eu=As=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,$h(Me,l,Se);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":$h(Me,l,Se)}var rt;if(Kc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else bs?kh(n,l)&&(at="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(Dh&&l.locale!=="ko"&&(bs||at!=="onCompositionStart"?at==="onCompositionEnd"&&bs&&(rt=Ch()):(vr=Se,jc="value"in vr?vr.value:vr.textContent,bs=!0)),it=Wa(re,at),0<it.length&&(at=new Lh(at,n,null,l,Se),Me.push({event:at,listeners:it}),rt?at.data=rt:(rt=Fh(l),rt!==null&&(at.data=rt)))),(rt=sv?ov(n,l):av(n,l))&&(re=Wa(re,"onBeforeInput"),0<re.length&&(Se=new Lh("onBeforeInput","beforeinput",null,l,Se),Me.push({event:Se,listeners:re}),Se.data=rt))}ip(Me,r)})}function Xo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Wa(n,r){for(var l=r+"Capture",d=[];n!==null;){var g=n,S=g.stateNode;g.tag===5&&S!==null&&(g=S,S=bn(n,l),S!=null&&d.unshift(Xo(n,S,g)),S=bn(n,r),S!=null&&d.push(Xo(n,S,g))),n=n.return}return d}function Rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sp(n,r,l,d,g){for(var S=r._reactName,A=[];l!==null&&l!==d;){var z=l,H=z.alternate,re=z.stateNode;if(H!==null&&H===d)break;z.tag===5&&re!==null&&(z=re,g?(H=bn(l,S),H!=null&&A.unshift(Xo(l,H,z))):g||(H=bn(l,S),H!=null&&A.push(Xo(l,H,z)))),l=l.return}A.length!==0&&n.push({event:r,listeners:A})}var Sv=/\r\n?/g,Mv=/\u0000|\uFFFD/g;function op(n){return(typeof n=="string"?n:""+n).replace(Sv,`
`).replace(Mv,"")}function Xa(n,r,l){if(r=op(r),op(n)!==r&&l)throw Error(t(425))}function Ya(){}var au=null,lu=null;function cu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,Ev=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,wv=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(n){return ap.resolve(null).then(n).catch(Tv)}:uu;function Tv(n){setTimeout(function(){throw n})}function du(n,r){var l=r,d=0;do{var g=l.nextSibling;if(n.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(d===0){n.removeChild(g),ko(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=g}while(l);ko(r)}function yr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function lp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),Di="__reactFiber$"+Ps,Yo="__reactProps$"+Ps,Hi="__reactContainer$"+Ps,fu="__reactEvents$"+Ps,bv="__reactListeners$"+Ps,Av="__reactHandles$"+Ps;function Xr(n){var r=n[Di];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Hi]||l[Di]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=lp(n);n!==null;){if(l=n[Di])return l;n=lp(n)}return r}n=l,l=n.parentNode}return null}function $o(n){return n=n[Di]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function $a(n){return n[Yo]||null}var hu=[],Ns=-1;function Sr(n){return{current:n}}function Gt(n){0>Ns||(n.current=hu[Ns],hu[Ns]=null,Ns--)}function zt(n,r){Ns++,hu[Ns]=n.current,n.current=r}var Mr={},vn=Sr(Mr),On=Sr(!1),Yr=Mr;function Ds(n,r){var l=n.type.contextTypes;if(!l)return Mr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var g={},S;for(S in l)g[S]=r[S];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=g),g}function zn(n){return n=n.childContextTypes,n!=null}function qa(){Gt(On),Gt(vn)}function cp(n,r,l){if(vn.current!==Mr)throw Error(t(168));zt(vn,r),zt(On,l)}function up(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var g in d)if(!(g in r))throw Error(t(108,xe(n)||"Unknown",g));return ie({},l,d)}function Ka(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mr,Yr=vn.current,zt(vn,n),zt(On,On.current),!0}function dp(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=up(n,r,Yr),d.__reactInternalMemoizedMergedChildContext=n,Gt(On),Gt(vn),zt(vn,n)):Gt(On),zt(On,l)}var Gi=null,Za=!1,pu=!1;function fp(n){Gi===null?Gi=[n]:Gi.push(n)}function Cv(n){Za=!0,fp(n)}function Er(){if(!pu&&Gi!==null){pu=!0;var n=0,r=Ut;try{var l=Gi;for(Ut=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}Gi=null,Za=!1}catch(g){throw Gi!==null&&(Gi=Gi.slice(n+1)),se(Ge,Er),g}finally{Ut=r,pu=!1}}return null}var Is=[],Us=0,Qa=null,Ja=0,ri=[],si=0,$r=null,ji=1,Wi="";function qr(n,r){Is[Us++]=Ja,Is[Us++]=Qa,Qa=n,Ja=r}function hp(n,r,l){ri[si++]=ji,ri[si++]=Wi,ri[si++]=$r,$r=n;var d=ji;n=Wi;var g=32-ht(d)-1;d&=~(1<<g),l+=1;var S=32-ht(r)+g;if(30<S){var A=g-g%5;S=(d&(1<<A)-1).toString(32),d>>=A,g-=A,ji=1<<32-ht(r)+g|l<<g|d,Wi=S+n}else ji=1<<S|l<<g|d,Wi=n}function mu(n){n.return!==null&&(qr(n,1),hp(n,1,0))}function gu(n){for(;n===Qa;)Qa=Is[--Us],Is[Us]=null,Ja=Is[--Us],Is[Us]=null;for(;n===$r;)$r=ri[--si],ri[si]=null,Wi=ri[--si],ri[si]=null,ji=ri[--si],ri[si]=null}var Kn=null,Zn=null,jt=!1,_i=null;function pp(n,r){var l=ci(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function mp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Kn=n,Zn=yr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Kn=n,Zn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=$r!==null?{id:ji,overflow:Wi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ci(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Kn=n,Zn=null,!0):!1;default:return!1}}function xu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function vu(n){if(jt){var r=Zn;if(r){var l=r;if(!mp(n,r)){if(xu(n))throw Error(t(418));r=yr(l.nextSibling);var d=Kn;r&&mp(n,r)?pp(d,l):(n.flags=n.flags&-4097|2,jt=!1,Kn=n)}}else{if(xu(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,Kn=n}}}function gp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function el(n){if(n!==Kn)return!1;if(!jt)return gp(n),jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!cu(n.type,n.memoizedProps)),r&&(r=Zn)){if(xu(n))throw xp(),Error(t(418));for(;r;)pp(n,r),r=yr(r.nextSibling)}if(gp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Zn=yr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Zn=null}}else Zn=Kn?yr(n.stateNode.nextSibling):null;return!0}function xp(){for(var n=Zn;n;)n=yr(n.nextSibling)}function ks(){Zn=Kn=null,jt=!1}function _u(n){_i===null?_i=[n]:_i.push(n)}var Rv=T.ReactCurrentBatchConfig;function qo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var g=d,S=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===S?r.ref:(r=function(A){var z=g.refs;A===null?delete z[S]:z[S]=A},r._stringRef=S,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function tl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function vp(n){var r=n._init;return r(n._payload)}function _p(n){function r(J,G){if(n){var te=J.deletions;te===null?(J.deletions=[G],J.flags|=16):te.push(G)}}function l(J,G){if(!n)return null;for(;G!==null;)r(J,G),G=G.sibling;return null}function d(J,G){for(J=new Map;G!==null;)G.key!==null?J.set(G.key,G):J.set(G.index,G),G=G.sibling;return J}function g(J,G){return J=Lr(J,G),J.index=0,J.sibling=null,J}function S(J,G,te){return J.index=te,n?(te=J.alternate,te!==null?(te=te.index,te<G?(J.flags|=2,G):te):(J.flags|=2,G)):(J.flags|=1048576,G)}function A(J){return n&&J.alternate===null&&(J.flags|=2),J}function z(J,G,te,be){return G===null||G.tag!==6?(G=ud(te,J.mode,be),G.return=J,G):(G=g(G,te),G.return=J,G)}function H(J,G,te,be){var $e=te.type;return $e===N?Se(J,G,te.props.children,be,te.key):G!==null&&(G.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ue&&vp($e)===G.type)?(be=g(G,te.props),be.ref=qo(J,G,te),be.return=J,be):(be=Tl(te.type,te.key,te.props,null,J.mode,be),be.ref=qo(J,G,te),be.return=J,be)}function re(J,G,te,be){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=dd(te,J.mode,be),G.return=J,G):(G=g(G,te.children||[]),G.return=J,G)}function Se(J,G,te,be,$e){return G===null||G.tag!==7?(G=is(te,J.mode,be,$e),G.return=J,G):(G=g(G,te),G.return=J,G)}function Me(J,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=ud(""+G,J.mode,te),G.return=J,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return te=Tl(G.type,G.key,G.props,null,J.mode,te),te.ref=qo(J,null,G),te.return=J,te;case R:return G=dd(G,J.mode,te),G.return=J,G;case ue:var be=G._init;return Me(J,be(G._payload),te)}if(qe(G)||ne(G))return G=is(G,J.mode,te,null),G.return=J,G;tl(J,G)}return null}function _e(J,G,te,be){var $e=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return $e!==null?null:z(J,G,""+te,be);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case U:return te.key===$e?H(J,G,te,be):null;case R:return te.key===$e?re(J,G,te,be):null;case ue:return $e=te._init,_e(J,G,$e(te._payload),be)}if(qe(te)||ne(te))return $e!==null?null:Se(J,G,te,be,null);tl(J,te)}return null}function Oe(J,G,te,be,$e){if(typeof be=="string"&&be!==""||typeof be=="number")return J=J.get(te)||null,z(G,J,""+be,$e);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case U:return J=J.get(be.key===null?te:be.key)||null,H(G,J,be,$e);case R:return J=J.get(be.key===null?te:be.key)||null,re(G,J,be,$e);case ue:var it=be._init;return Oe(J,G,te,it(be._payload),$e)}if(qe(be)||ne(be))return J=J.get(te)||null,Se(G,J,be,$e,null);tl(G,be)}return null}function He(J,G,te,be){for(var $e=null,it=null,rt=G,at=G=0,un=null;rt!==null&&at<te.length;at++){rt.index>at?(un=rt,rt=null):un=rt.sibling;var Lt=_e(J,rt,te[at],be);if(Lt===null){rt===null&&(rt=un);break}n&&rt&&Lt.alternate===null&&r(J,rt),G=S(Lt,G,at),it===null?$e=Lt:it.sibling=Lt,it=Lt,rt=un}if(at===te.length)return l(J,rt),jt&&qr(J,at),$e;if(rt===null){for(;at<te.length;at++)rt=Me(J,te[at],be),rt!==null&&(G=S(rt,G,at),it===null?$e=rt:it.sibling=rt,it=rt);return jt&&qr(J,at),$e}for(rt=d(J,rt);at<te.length;at++)un=Oe(rt,J,at,te[at],be),un!==null&&(n&&un.alternate!==null&&rt.delete(un.key===null?at:un.key),G=S(un,G,at),it===null?$e=un:it.sibling=un,it=un);return n&&rt.forEach(function(Nr){return r(J,Nr)}),jt&&qr(J,at),$e}function je(J,G,te,be){var $e=ne(te);if(typeof $e!="function")throw Error(t(150));if(te=$e.call(te),te==null)throw Error(t(151));for(var it=$e=null,rt=G,at=G=0,un=null,Lt=te.next();rt!==null&&!Lt.done;at++,Lt=te.next()){rt.index>at?(un=rt,rt=null):un=rt.sibling;var Nr=_e(J,rt,Lt.value,be);if(Nr===null){rt===null&&(rt=un);break}n&&rt&&Nr.alternate===null&&r(J,rt),G=S(Nr,G,at),it===null?$e=Nr:it.sibling=Nr,it=Nr,rt=un}if(Lt.done)return l(J,rt),jt&&qr(J,at),$e;if(rt===null){for(;!Lt.done;at++,Lt=te.next())Lt=Me(J,Lt.value,be),Lt!==null&&(G=S(Lt,G,at),it===null?$e=Lt:it.sibling=Lt,it=Lt);return jt&&qr(J,at),$e}for(rt=d(J,rt);!Lt.done;at++,Lt=te.next())Lt=Oe(rt,J,at,Lt.value,be),Lt!==null&&(n&&Lt.alternate!==null&&rt.delete(Lt.key===null?at:Lt.key),G=S(Lt,G,at),it===null?$e=Lt:it.sibling=Lt,it=Lt);return n&&rt.forEach(function(l_){return r(J,l_)}),jt&&qr(J,at),$e}function qt(J,G,te,be){if(typeof te=="object"&&te!==null&&te.type===N&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case U:e:{for(var $e=te.key,it=G;it!==null;){if(it.key===$e){if($e=te.type,$e===N){if(it.tag===7){l(J,it.sibling),G=g(it,te.props.children),G.return=J,J=G;break e}}else if(it.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ue&&vp($e)===it.type){l(J,it.sibling),G=g(it,te.props),G.ref=qo(J,it,te),G.return=J,J=G;break e}l(J,it);break}else r(J,it);it=it.sibling}te.type===N?(G=is(te.props.children,J.mode,be,te.key),G.return=J,J=G):(be=Tl(te.type,te.key,te.props,null,J.mode,be),be.ref=qo(J,G,te),be.return=J,J=be)}return A(J);case R:e:{for(it=te.key;G!==null;){if(G.key===it)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){l(J,G.sibling),G=g(G,te.children||[]),G.return=J,J=G;break e}else{l(J,G);break}else r(J,G);G=G.sibling}G=dd(te,J.mode,be),G.return=J,J=G}return A(J);case ue:return it=te._init,qt(J,G,it(te._payload),be)}if(qe(te))return He(J,G,te,be);if(ne(te))return je(J,G,te,be);tl(J,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(l(J,G.sibling),G=g(G,te),G.return=J,J=G):(l(J,G),G=ud(te,J.mode,be),G.return=J,J=G),A(J)):l(J,G)}return qt}var Fs=_p(!0),yp=_p(!1),nl=Sr(null),il=null,Os=null,yu=null;function Su(){yu=Os=il=null}function Mu(n){var r=nl.current;Gt(nl),n._currentValue=r}function Eu(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function zs(n,r){il=n,yu=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Bn=!0),n.firstContext=null)}function oi(n){var r=n._currentValue;if(yu!==n)if(n={context:n,memoizedValue:r,next:null},Os===null){if(il===null)throw Error(t(308));Os=n,il.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return r}var Kr=null;function wu(n){Kr===null?Kr=[n]:Kr.push(n)}function Sp(n,r,l,d){var g=r.interleaved;return g===null?(l.next=l,wu(r)):(l.next=g.next,g.next=l),r.interleaved=l,Xi(n,d)}function Xi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var wr=!1;function Tu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Tr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(At&2)!==0){var g=d.pending;return g===null?r.next=r:(r.next=g.next,g.next=r),d.pending=r,Xi(n,l)}return g=d.interleaved,g===null?(r.next=r,wu(d)):(r.next=g.next,g.next=r),d.interleaved=r,Xi(n,l)}function rl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,zc(n,l)}}function Ep(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var g=null,S=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};S===null?g=S=A:S=S.next=A,l=l.next}while(l!==null);S===null?g=S=r:S=S.next=r}else g=S=r;l={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:S,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function sl(n,r,l,d){var g=n.updateQueue;wr=!1;var S=g.firstBaseUpdate,A=g.lastBaseUpdate,z=g.shared.pending;if(z!==null){g.shared.pending=null;var H=z,re=H.next;H.next=null,A===null?S=re:A.next=re,A=H;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,z=Se.lastBaseUpdate,z!==A&&(z===null?Se.firstBaseUpdate=re:z.next=re,Se.lastBaseUpdate=H))}if(S!==null){var Me=g.baseState;A=0,Se=re=H=null,z=S;do{var _e=z.lane,Oe=z.eventTime;if((d&_e)===_e){Se!==null&&(Se=Se.next={eventTime:Oe,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var He=n,je=z;switch(_e=r,Oe=l,je.tag){case 1:if(He=je.payload,typeof He=="function"){Me=He.call(Oe,Me,_e);break e}Me=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=je.payload,_e=typeof He=="function"?He.call(Oe,Me,_e):He,_e==null)break e;Me=ie({},Me,_e);break e;case 2:wr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,_e=g.effects,_e===null?g.effects=[z]:_e.push(z))}else Oe={eventTime:Oe,lane:_e,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Se===null?(re=Se=Oe,H=Me):Se=Se.next=Oe,A|=_e;if(z=z.next,z===null){if(z=g.shared.pending,z===null)break;_e=z,z=_e.next,_e.next=null,g.lastBaseUpdate=_e,g.shared.pending=null}}while(!0);if(Se===null&&(H=Me),g.baseState=H,g.firstBaseUpdate=re,g.lastBaseUpdate=Se,r=g.shared.interleaved,r!==null){g=r;do A|=g.lane,g=g.next;while(g!==r)}else S===null&&(g.shared.lanes=0);Jr|=A,n.lanes=A,n.memoizedState=Me}}function wp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],g=d.callback;if(g!==null){if(d.callback=null,d=l,typeof g!="function")throw Error(t(191,g));g.call(d)}}}var Ko={},Ii=Sr(Ko),Zo=Sr(Ko),Qo=Sr(Ko);function Zr(n){if(n===Ko)throw Error(t(174));return n}function bu(n,r){switch(zt(Qo,r),zt(Zo,n),zt(Ii,Ko),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Le(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Le(r,n)}Gt(Ii),zt(Ii,r)}function Bs(){Gt(Ii),Gt(Zo),Gt(Qo)}function Tp(n){Zr(Qo.current);var r=Zr(Ii.current),l=Le(r,n.type);r!==l&&(zt(Zo,n),zt(Ii,l))}function Au(n){Zo.current===n&&(Gt(Ii),Gt(Zo))}var Wt=Sr(0);function ol(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Cu=[];function Ru(){for(var n=0;n<Cu.length;n++)Cu[n]._workInProgressVersionPrimary=null;Cu.length=0}var al=T.ReactCurrentDispatcher,Pu=T.ReactCurrentBatchConfig,Qr=0,Xt=null,nn=null,ln=null,ll=!1,Jo=!1,ea=0,Pv=0;function _n(){throw Error(t(321))}function Lu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!vi(n[l],r[l]))return!1;return!0}function Nu(n,r,l,d,g,S){if(Qr=S,Xt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,al.current=n===null||n.memoizedState===null?Iv:Uv,n=l(d,g),Jo){S=0;do{if(Jo=!1,ea=0,25<=S)throw Error(t(301));S+=1,ln=nn=null,r.updateQueue=null,al.current=kv,n=l(d,g)}while(Jo)}if(al.current=dl,r=nn!==null&&nn.next!==null,Qr=0,ln=nn=Xt=null,ll=!1,r)throw Error(t(300));return n}function Du(){var n=ea!==0;return ea=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Xt.memoizedState=ln=n:ln=ln.next=n,ln}function ai(){if(nn===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var r=ln===null?Xt.memoizedState:ln.next;if(r!==null)ln=r,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},ln===null?Xt.memoizedState=ln=n:ln=ln.next=n}return ln}function ta(n,r){return typeof r=="function"?r(n):r}function Iu(n){var r=ai(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=nn,g=d.baseQueue,S=l.pending;if(S!==null){if(g!==null){var A=g.next;g.next=S.next,S.next=A}d.baseQueue=g=S,l.pending=null}if(g!==null){S=g.next,d=d.baseState;var z=A=null,H=null,re=S;do{var Se=re.lane;if((Qr&Se)===Se)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),d=re.hasEagerState?re.eagerState:n(d,re.action);else{var Me={lane:Se,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(z=H=Me,A=d):H=H.next=Me,Xt.lanes|=Se,Jr|=Se}re=re.next}while(re!==null&&re!==S);H===null?A=d:H.next=z,vi(d,r.memoizedState)||(Bn=!0),r.memoizedState=d,r.baseState=A,r.baseQueue=H,l.lastRenderedState=d}if(n=l.interleaved,n!==null){g=n;do S=g.lane,Xt.lanes|=S,Jr|=S,g=g.next;while(g!==n)}else g===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Uu(n){var r=ai(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,g=l.pending,S=r.memoizedState;if(g!==null){l.pending=null;var A=g=g.next;do S=n(S,A.action),A=A.next;while(A!==g);vi(S,r.memoizedState)||(Bn=!0),r.memoizedState=S,r.baseQueue===null&&(r.baseState=S),l.lastRenderedState=S}return[S,d]}function bp(){}function Ap(n,r){var l=Xt,d=ai(),g=r(),S=!vi(d.memoizedState,g);if(S&&(d.memoizedState=g,Bn=!0),d=d.queue,ku(Pp.bind(null,l,d,n),[n]),d.getSnapshot!==r||S||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,na(9,Rp.bind(null,l,d,g,r),void 0,null),cn===null)throw Error(t(349));(Qr&30)!==0||Cp(l,r,g)}return g}function Cp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Xt.updateQueue,r===null?(r={lastEffect:null,stores:null},Xt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Rp(n,r,l,d){r.value=l,r.getSnapshot=d,Lp(r)&&Np(n)}function Pp(n,r,l){return l(function(){Lp(r)&&Np(n)})}function Lp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!vi(n,l)}catch{return!0}}function Np(n){var r=Xi(n,1);r!==null&&Ei(r,n,1,-1)}function Dp(n){var r=Ui();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:n},r.queue=n,n=n.dispatch=Dv.bind(null,Xt,n),[r.memoizedState,n]}function na(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=Xt.updateQueue,r===null?(r={lastEffect:null,stores:null},Xt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function Ip(){return ai().memoizedState}function cl(n,r,l,d){var g=Ui();Xt.flags|=n,g.memoizedState=na(1|r,l,void 0,d===void 0?null:d)}function ul(n,r,l,d){var g=ai();d=d===void 0?null:d;var S=void 0;if(nn!==null){var A=nn.memoizedState;if(S=A.destroy,d!==null&&Lu(d,A.deps)){g.memoizedState=na(r,l,S,d);return}}Xt.flags|=n,g.memoizedState=na(1|r,l,S,d)}function Up(n,r){return cl(8390656,8,n,r)}function ku(n,r){return ul(2048,8,n,r)}function kp(n,r){return ul(4,2,n,r)}function Fp(n,r){return ul(4,4,n,r)}function Op(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function zp(n,r,l){return l=l!=null?l.concat([n]):null,ul(4,4,Op.bind(null,r,n),l)}function Fu(){}function Bp(n,r){var l=ai();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Lu(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function Vp(n,r){var l=ai();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Lu(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function Hp(n,r,l){return(Qr&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=l):(vi(l,r)||(l=An(),Xt.lanes|=l,Jr|=l,n.baseState=!0),r)}function Lv(n,r){var l=Ut;Ut=l!==0&&4>l?l:4,n(!0);var d=Pu.transition;Pu.transition={};try{n(!1),r()}finally{Ut=l,Pu.transition=d}}function Gp(){return ai().memoizedState}function Nv(n,r,l){var d=Rr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},jp(n))Wp(r,l);else if(l=Sp(n,r,l,d),l!==null){var g=Rn();Ei(l,n,d,g),Xp(l,r,d)}}function Dv(n,r,l){var d=Rr(n),g={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(jp(n))Wp(r,g);else{var S=n.alternate;if(n.lanes===0&&(S===null||S.lanes===0)&&(S=r.lastRenderedReducer,S!==null))try{var A=r.lastRenderedState,z=S(A,l);if(g.hasEagerState=!0,g.eagerState=z,vi(z,A)){var H=r.interleaved;H===null?(g.next=g,wu(r)):(g.next=H.next,H.next=g),r.interleaved=g;return}}catch{}finally{}l=Sp(n,r,g,d),l!==null&&(g=Rn(),Ei(l,n,d,g),Xp(l,r,d))}}function jp(n){var r=n.alternate;return n===Xt||r!==null&&r===Xt}function Wp(n,r){Jo=ll=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Xp(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,zc(n,l)}}var dl={readContext:oi,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},Iv={readContext:oi,useCallback:function(n,r){return Ui().memoizedState=[n,r===void 0?null:r],n},useContext:oi,useEffect:Up,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,cl(4194308,4,Op.bind(null,r,n),l)},useLayoutEffect:function(n,r){return cl(4194308,4,n,r)},useInsertionEffect:function(n,r){return cl(4,2,n,r)},useMemo:function(n,r){var l=Ui();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Ui();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=Nv.bind(null,Xt,n),[d.memoizedState,n]},useRef:function(n){var r=Ui();return n={current:n},r.memoizedState=n},useState:Dp,useDebugValue:Fu,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=Dp(!1),r=n[0];return n=Lv.bind(null,n[1]),Ui().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=Xt,g=Ui();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),cn===null)throw Error(t(349));(Qr&30)!==0||Cp(d,r,l)}g.memoizedState=l;var S={value:l,getSnapshot:r};return g.queue=S,Up(Pp.bind(null,d,S,n),[n]),d.flags|=2048,na(9,Rp.bind(null,d,S,l,r),void 0,null),l},useId:function(){var n=Ui(),r=cn.identifierPrefix;if(jt){var l=Wi,d=ji;l=(d&~(1<<32-ht(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=ea++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Pv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Uv={readContext:oi,useCallback:Bp,useContext:oi,useEffect:ku,useImperativeHandle:zp,useInsertionEffect:kp,useLayoutEffect:Fp,useMemo:Vp,useReducer:Iu,useRef:Ip,useState:function(){return Iu(ta)},useDebugValue:Fu,useDeferredValue:function(n){var r=ai();return Hp(r,nn.memoizedState,n)},useTransition:function(){var n=Iu(ta)[0],r=ai().memoizedState;return[n,r]},useMutableSource:bp,useSyncExternalStore:Ap,useId:Gp,unstable_isNewReconciler:!1},kv={readContext:oi,useCallback:Bp,useContext:oi,useEffect:ku,useImperativeHandle:zp,useInsertionEffect:kp,useLayoutEffect:Fp,useMemo:Vp,useReducer:Uu,useRef:Ip,useState:function(){return Uu(ta)},useDebugValue:Fu,useDeferredValue:function(n){var r=ai();return nn===null?r.memoizedState=n:Hp(r,nn.memoizedState,n)},useTransition:function(){var n=Uu(ta)[0],r=ai().memoizedState;return[n,r]},useMutableSource:bp,useSyncExternalStore:Ap,useId:Gp,unstable_isNewReconciler:!1};function yi(n,r){if(n&&n.defaultProps){r=ie({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Ou(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:ie({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var fl={isMounted:function(n){return(n=n._reactInternals)?Li(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=Rn(),g=Rr(n),S=Yi(d,g);S.payload=r,l!=null&&(S.callback=l),r=Tr(n,S,g),r!==null&&(Ei(r,n,g,d),rl(r,n,g))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=Rn(),g=Rr(n),S=Yi(d,g);S.tag=1,S.payload=r,l!=null&&(S.callback=l),r=Tr(n,S,g),r!==null&&(Ei(r,n,g,d),rl(r,n,g))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Rn(),d=Rr(n),g=Yi(l,d);g.tag=2,r!=null&&(g.callback=r),r=Tr(n,g,d),r!==null&&(Ei(r,n,d,l),rl(r,n,d))}};function Yp(n,r,l,d,g,S,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,S,A):r.prototype&&r.prototype.isPureReactComponent?!Ho(l,d)||!Ho(g,S):!0}function $p(n,r,l){var d=!1,g=Mr,S=r.contextType;return typeof S=="object"&&S!==null?S=oi(S):(g=zn(r)?Yr:vn.current,d=r.contextTypes,S=(d=d!=null)?Ds(n,g):Mr),r=new r(l,S),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=fl,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=g,n.__reactInternalMemoizedMaskedChildContext=S),r}function qp(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&fl.enqueueReplaceState(r,r.state,null)}function zu(n,r,l,d){var g=n.stateNode;g.props=l,g.state=n.memoizedState,g.refs={},Tu(n);var S=r.contextType;typeof S=="object"&&S!==null?g.context=oi(S):(S=zn(r)?Yr:vn.current,g.context=Ds(n,S)),g.state=n.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Ou(n,r,S,l),g.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(r=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),r!==g.state&&fl.enqueueReplaceState(g,g.state,null),sl(n,l,g,d),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308)}function Vs(n,r){try{var l="",d=r;do l+=fe(d),d=d.return;while(d);var g=l}catch(S){g=`
Error generating stack: `+S.message+`
`+S.stack}return{value:n,source:r,stack:g,digest:null}}function Bu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Vu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Fv=typeof WeakMap=="function"?WeakMap:Map;function Kp(n,r,l){l=Yi(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){_l||(_l=!0,nd=d),Vu(n,r)},l}function Zp(n,r,l){l=Yi(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var g=r.value;l.payload=function(){return d(g)},l.callback=function(){Vu(n,r)}}var S=n.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(l.callback=function(){Vu(n,r),typeof d!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),l}function Qp(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new Fv;var g=new Set;d.set(r,g)}else g=d.get(r),g===void 0&&(g=new Set,d.set(r,g));g.has(l)||(g.add(l),n=Zv.bind(null,n,r,l),r.then(n,n))}function Jp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function em(n,r,l,d,g){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Yi(-1,1),r.tag=2,Tr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=g,n)}var Ov=T.ReactCurrentOwner,Bn=!1;function Cn(n,r,l,d){r.child=n===null?yp(r,null,l,d):Fs(r,n.child,l,d)}function tm(n,r,l,d,g){l=l.render;var S=r.ref;return zs(r,g),d=Nu(n,r,l,d,S,g),l=Du(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,$i(n,r,g)):(jt&&l&&mu(r),r.flags|=1,Cn(n,r,d,g),r.child)}function nm(n,r,l,d,g){if(n===null){var S=l.type;return typeof S=="function"&&!cd(S)&&S.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=S,im(n,r,S,d,g)):(n=Tl(l.type,null,d,r,r.mode,g),n.ref=r.ref,n.return=r,r.child=n)}if(S=n.child,(n.lanes&g)===0){var A=S.memoizedProps;if(l=l.compare,l=l!==null?l:Ho,l(A,d)&&n.ref===r.ref)return $i(n,r,g)}return r.flags|=1,n=Lr(S,d),n.ref=r.ref,n.return=r,r.child=n}function im(n,r,l,d,g){if(n!==null){var S=n.memoizedProps;if(Ho(S,d)&&n.ref===r.ref)if(Bn=!1,r.pendingProps=d=S,(n.lanes&g)!==0)(n.flags&131072)!==0&&(Bn=!0);else return r.lanes=n.lanes,$i(n,r,g)}return Hu(n,r,l,d,g)}function rm(n,r,l){var d=r.pendingProps,g=d.children,S=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Gs,Qn),Qn|=l;else{if((l&1073741824)===0)return n=S!==null?S.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,zt(Gs,Qn),Qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=S!==null?S.baseLanes:l,zt(Gs,Qn),Qn|=d}else S!==null?(d=S.baseLanes|l,r.memoizedState=null):d=l,zt(Gs,Qn),Qn|=d;return Cn(n,r,g,l),r.child}function sm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Hu(n,r,l,d,g){var S=zn(l)?Yr:vn.current;return S=Ds(r,S),zs(r,g),l=Nu(n,r,l,d,S,g),d=Du(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,$i(n,r,g)):(jt&&d&&mu(r),r.flags|=1,Cn(n,r,l,g),r.child)}function om(n,r,l,d,g){if(zn(l)){var S=!0;Ka(r)}else S=!1;if(zs(r,g),r.stateNode===null)pl(n,r),$p(r,l,d),zu(r,l,d,g),d=!0;else if(n===null){var A=r.stateNode,z=r.memoizedProps;A.props=z;var H=A.context,re=l.contextType;typeof re=="object"&&re!==null?re=oi(re):(re=zn(l)?Yr:vn.current,re=Ds(r,re));var Se=l.getDerivedStateFromProps,Me=typeof Se=="function"||typeof A.getSnapshotBeforeUpdate=="function";Me||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==d||H!==re)&&qp(r,A,d,re),wr=!1;var _e=r.memoizedState;A.state=_e,sl(r,d,A,g),H=r.memoizedState,z!==d||_e!==H||On.current||wr?(typeof Se=="function"&&(Ou(r,l,Se,d),H=r.memoizedState),(z=wr||Yp(r,l,z,d,_e,H,re))?(Me||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=H),A.props=d,A.state=H,A.context=re,d=z):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{A=r.stateNode,Mp(n,r),z=r.memoizedProps,re=r.type===r.elementType?z:yi(r.type,z),A.props=re,Me=r.pendingProps,_e=A.context,H=l.contextType,typeof H=="object"&&H!==null?H=oi(H):(H=zn(l)?Yr:vn.current,H=Ds(r,H));var Oe=l.getDerivedStateFromProps;(Se=typeof Oe=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==Me||_e!==H)&&qp(r,A,d,H),wr=!1,_e=r.memoizedState,A.state=_e,sl(r,d,A,g);var He=r.memoizedState;z!==Me||_e!==He||On.current||wr?(typeof Oe=="function"&&(Ou(r,l,Oe,d),He=r.memoizedState),(re=wr||Yp(r,l,re,d,_e,He,H)||!1)?(Se||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(d,He,H),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(d,He,H)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=He),A.props=d,A.state=He,A.context=H,d=re):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),d=!1)}return Gu(n,r,l,d,S,g)}function Gu(n,r,l,d,g,S){sm(n,r);var A=(r.flags&128)!==0;if(!d&&!A)return g&&dp(r,l,!1),$i(n,r,S);d=r.stateNode,Ov.current=r;var z=A&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&A?(r.child=Fs(r,n.child,null,S),r.child=Fs(r,null,z,S)):Cn(n,r,z,S),r.memoizedState=d.state,g&&dp(r,l,!0),r.child}function am(n){var r=n.stateNode;r.pendingContext?cp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&cp(n,r.context,!1),bu(n,r.containerInfo)}function lm(n,r,l,d,g){return ks(),_u(g),r.flags|=256,Cn(n,r,l,d),r.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Wu(n){return{baseLanes:n,cachePool:null,transitions:null}}function cm(n,r,l){var d=r.pendingProps,g=Wt.current,S=!1,A=(r.flags&128)!==0,z;if((z=A)||(z=n!==null&&n.memoizedState===null?!1:(g&2)!==0),z?(S=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(g|=1),zt(Wt,g&1),n===null)return vu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=d.children,n=d.fallback,S?(d=r.mode,S=r.child,A={mode:"hidden",children:A},(d&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=A):S=bl(A,d,0,null),n=is(n,d,l,null),S.return=r,n.return=r,S.sibling=n,r.child=S,r.child.memoizedState=Wu(l),r.memoizedState=ju,n):Xu(r,A));if(g=n.memoizedState,g!==null&&(z=g.dehydrated,z!==null))return zv(n,r,A,d,z,g,l);if(S){S=d.fallback,A=r.mode,g=n.child,z=g.sibling;var H={mode:"hidden",children:d.children};return(A&1)===0&&r.child!==g?(d=r.child,d.childLanes=0,d.pendingProps=H,r.deletions=null):(d=Lr(g,H),d.subtreeFlags=g.subtreeFlags&14680064),z!==null?S=Lr(z,S):(S=is(S,A,l,null),S.flags|=2),S.return=r,d.return=r,d.sibling=S,r.child=d,d=S,S=r.child,A=n.child.memoizedState,A=A===null?Wu(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},S.memoizedState=A,S.childLanes=n.childLanes&~l,r.memoizedState=ju,d}return S=n.child,n=S.sibling,d=Lr(S,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function Xu(n,r){return r=bl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function hl(n,r,l,d){return d!==null&&_u(d),Fs(r,n.child,null,l),n=Xu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function zv(n,r,l,d,g,S,A){if(l)return r.flags&256?(r.flags&=-257,d=Bu(Error(t(422))),hl(n,r,A,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(S=d.fallback,g=r.mode,d=bl({mode:"visible",children:d.children},g,0,null),S=is(S,g,A,null),S.flags|=2,d.return=r,S.return=r,d.sibling=S,r.child=d,(r.mode&1)!==0&&Fs(r,n.child,null,A),r.child.memoizedState=Wu(A),r.memoizedState=ju,S);if((r.mode&1)===0)return hl(n,r,A,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var z=d.dgst;return d=z,S=Error(t(419)),d=Bu(S,d,void 0),hl(n,r,A,d)}if(z=(A&n.childLanes)!==0,Bn||z){if(d=cn,d!==null){switch(A&-A){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(d.suspendedLanes|A))!==0?0:g,g!==0&&g!==S.retryLane&&(S.retryLane=g,Xi(n,g),Ei(d,n,g,-1))}return ld(),d=Bu(Error(t(421))),hl(n,r,A,d)}return g.data==="$?"?(r.flags|=128,r.child=n.child,r=Qv.bind(null,n),g._reactRetry=r,null):(n=S.treeContext,Zn=yr(g.nextSibling),Kn=r,jt=!0,_i=null,n!==null&&(ri[si++]=ji,ri[si++]=Wi,ri[si++]=$r,ji=n.id,Wi=n.overflow,$r=r),r=Xu(r,d.children),r.flags|=4096,r)}function um(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),Eu(n.return,r,l)}function Yu(n,r,l,d,g){var S=n.memoizedState;S===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:g}:(S.isBackwards=r,S.rendering=null,S.renderingStartTime=0,S.last=d,S.tail=l,S.tailMode=g)}function dm(n,r,l){var d=r.pendingProps,g=d.revealOrder,S=d.tail;if(Cn(n,r,d.children,l),d=Wt.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&um(n,l,r);else if(n.tag===19)um(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(zt(Wt,d),(r.mode&1)===0)r.memoizedState=null;else switch(g){case"forwards":for(l=r.child,g=null;l!==null;)n=l.alternate,n!==null&&ol(n)===null&&(g=l),l=l.sibling;l=g,l===null?(g=r.child,r.child=null):(g=l.sibling,l.sibling=null),Yu(r,!1,g,l,S);break;case"backwards":for(l=null,g=r.child,r.child=null;g!==null;){if(n=g.alternate,n!==null&&ol(n)===null){r.child=g;break}n=g.sibling,g.sibling=l,l=g,g=n}Yu(r,!0,l,null,S);break;case"together":Yu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function pl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function $i(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Jr|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Lr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Lr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Bv(n,r,l){switch(r.tag){case 3:am(r),ks();break;case 5:Tp(r);break;case 1:zn(r.type)&&Ka(r);break;case 4:bu(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,g=r.memoizedProps.value;zt(nl,d._currentValue),d._currentValue=g;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(zt(Wt,Wt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?cm(n,r,l):(zt(Wt,Wt.current&1),n=$i(n,r,l),n!==null?n.sibling:null);zt(Wt,Wt.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return dm(n,r,l);r.flags|=128}if(g=r.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),zt(Wt,Wt.current),d)break;return null;case 22:case 23:return r.lanes=0,rm(n,r,l)}return $i(n,r,l)}var fm,$u,hm,pm;fm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},$u=function(){},hm=function(n,r,l,d){var g=n.memoizedProps;if(g!==d){n=r.stateNode,Zr(Ii.current);var S=null;switch(l){case"input":g=X(n,g),d=X(n,d),S=[];break;case"select":g=ie({},g,{value:void 0}),d=ie({},d,{value:void 0}),S=[];break;case"textarea":g=C(n,g),d=C(n,d),S=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=Ya)}gt(l,d);var A;l=null;for(re in g)if(!d.hasOwnProperty(re)&&g.hasOwnProperty(re)&&g[re]!=null)if(re==="style"){var z=g[re];for(A in z)z.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?S||(S=[]):(S=S||[]).push(re,null));for(re in d){var H=d[re];if(z=g!=null?g[re]:void 0,d.hasOwnProperty(re)&&H!==z&&(H!=null||z!=null))if(re==="style")if(z){for(A in z)!z.hasOwnProperty(A)||H&&H.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in H)H.hasOwnProperty(A)&&z[A]!==H[A]&&(l||(l={}),l[A]=H[A])}else l||(S||(S=[]),S.push(re,l)),l=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,z=z?z.__html:void 0,H!=null&&z!==H&&(S=S||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(S=S||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&Ht("scroll",n),S||z===H||(S=[])):(S=S||[]).push(re,H))}l&&(S=S||[]).push("style",l);var re=S;(r.updateQueue=re)&&(r.flags|=4)}},pm=function(n,r,l,d){l!==d&&(r.flags|=4)};function ia(n,r){if(!jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function yn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var g=n.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=n,g=g.sibling;else for(g=n.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=n,g=g.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function Vv(n,r,l){var d=r.pendingProps;switch(gu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(r),null;case 1:return zn(r.type)&&qa(),yn(r),null;case 3:return d=r.stateNode,Bs(),Gt(On),Gt(vn),Ru(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(el(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,_i!==null&&(sd(_i),_i=null))),$u(n,r),yn(r),null;case 5:Au(r);var g=Zr(Qo.current);if(l=r.type,n!==null&&r.stateNode!=null)hm(n,r,l,d,g),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return yn(r),null}if(n=Zr(Ii.current),el(r)){d=r.stateNode,l=r.type;var S=r.memoizedProps;switch(d[Di]=r,d[Yo]=S,n=(r.mode&1)!==0,l){case"dialog":Ht("cancel",d),Ht("close",d);break;case"iframe":case"object":case"embed":Ht("load",d);break;case"video":case"audio":for(g=0;g<jo.length;g++)Ht(jo[g],d);break;case"source":Ht("error",d);break;case"img":case"image":case"link":Ht("error",d),Ht("load",d);break;case"details":Ht("toggle",d);break;case"input":Zt(d,S),Ht("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!S.multiple},Ht("invalid",d);break;case"textarea":Q(d,S),Ht("invalid",d)}gt(l,S),g=null;for(var A in S)if(S.hasOwnProperty(A)){var z=S[A];A==="children"?typeof z=="string"?d.textContent!==z&&(S.suppressHydrationWarning!==!0&&Xa(d.textContent,z,n),g=["children",z]):typeof z=="number"&&d.textContent!==""+z&&(S.suppressHydrationWarning!==!0&&Xa(d.textContent,z,n),g=["children",""+z]):o.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&Ht("scroll",d)}switch(l){case"input":vt(d),Je(d,S,!0);break;case"textarea":vt(d),ge(d);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(d.onclick=Ya)}d=g,r.updateQueue=d,d!==null&&(r.flags|=4)}else{A=g.nodeType===9?g:g.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=A.createElement(l,{is:d.is}):(n=A.createElement(l),l==="select"&&(A=n,d.multiple?A.multiple=!0:d.size&&(A.size=d.size))):n=A.createElementNS(n,l),n[Di]=r,n[Yo]=d,fm(n,r,!1,!1),r.stateNode=n;e:{switch(A=Ze(l,d),l){case"dialog":Ht("cancel",n),Ht("close",n),g=d;break;case"iframe":case"object":case"embed":Ht("load",n),g=d;break;case"video":case"audio":for(g=0;g<jo.length;g++)Ht(jo[g],n);g=d;break;case"source":Ht("error",n),g=d;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),g=d;break;case"details":Ht("toggle",n),g=d;break;case"input":Zt(n,d),g=X(n,d),Ht("invalid",n);break;case"option":g=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},g=ie({},d,{value:void 0}),Ht("invalid",n);break;case"textarea":Q(n,d),g=C(n,d),Ht("invalid",n);break;default:g=d}gt(l,g),z=g;for(S in z)if(z.hasOwnProperty(S)){var H=z[S];S==="style"?tt(n,H):S==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Pe(n,H)):S==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&ct(n,H):typeof H=="number"&&ct(n,""+H):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(o.hasOwnProperty(S)?H!=null&&S==="onScroll"&&Ht("scroll",n):H!=null&&L(n,S,H,A))}switch(l){case"input":vt(n),Je(n,d,!1);break;case"textarea":vt(n),ge(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Ae(d.value));break;case"select":n.multiple=!!d.multiple,S=d.value,S!=null?F(n,!!d.multiple,S,!1):d.defaultValue!=null&&F(n,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(n.onclick=Ya)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return yn(r),null;case 6:if(n&&r.stateNode!=null)pm(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=Zr(Qo.current),Zr(Ii.current),el(r)){if(d=r.stateNode,l=r.memoizedProps,d[Di]=r,(S=d.nodeValue!==l)&&(n=Kn,n!==null))switch(n.tag){case 3:Xa(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xa(d.nodeValue,l,(n.mode&1)!==0)}S&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Di]=r,r.stateNode=d}return yn(r),null;case 13:if(Gt(Wt),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&Zn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)xp(),ks(),r.flags|=98560,S=!1;else if(S=el(r),d!==null&&d.dehydrated!==null){if(n===null){if(!S)throw Error(t(318));if(S=r.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Di]=r}else ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;yn(r),S=!1}else _i!==null&&(sd(_i),_i=null),S=!0;if(!S)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Wt.current&1)!==0?rn===0&&(rn=3):ld())),r.updateQueue!==null&&(r.flags|=4),yn(r),null);case 4:return Bs(),$u(n,r),n===null&&Wo(r.stateNode.containerInfo),yn(r),null;case 10:return Mu(r.type._context),yn(r),null;case 17:return zn(r.type)&&qa(),yn(r),null;case 19:if(Gt(Wt),S=r.memoizedState,S===null)return yn(r),null;if(d=(r.flags&128)!==0,A=S.rendering,A===null)if(d)ia(S,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=ol(n),A!==null){for(r.flags|=128,ia(S,!1),d=A.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)S=l,n=d,S.flags&=14680066,A=S.alternate,A===null?(S.childLanes=0,S.lanes=n,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=A.childLanes,S.lanes=A.lanes,S.child=A.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=A.memoizedProps,S.memoizedState=A.memoizedState,S.updateQueue=A.updateQueue,S.type=A.type,n=A.dependencies,S.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return zt(Wt,Wt.current&1|2),r.child}n=n.sibling}S.tail!==null&&we()>js&&(r.flags|=128,d=!0,ia(S,!1),r.lanes=4194304)}else{if(!d)if(n=ol(A),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ia(S,!0),S.tail===null&&S.tailMode==="hidden"&&!A.alternate&&!jt)return yn(r),null}else 2*we()-S.renderingStartTime>js&&l!==1073741824&&(r.flags|=128,d=!0,ia(S,!1),r.lanes=4194304);S.isBackwards?(A.sibling=r.child,r.child=A):(l=S.last,l!==null?l.sibling=A:r.child=A,S.last=A)}return S.tail!==null?(r=S.tail,S.rendering=r,S.tail=r.sibling,S.renderingStartTime=we(),r.sibling=null,l=Wt.current,zt(Wt,d?l&1|2:l&1),r):(yn(r),null);case 22:case 23:return ad(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(Qn&1073741824)!==0&&(yn(r),r.subtreeFlags&6&&(r.flags|=8192)):yn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Hv(n,r){switch(gu(r),r.tag){case 1:return zn(r.type)&&qa(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Bs(),Gt(On),Gt(vn),Ru(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Au(r),null;case 13:if(Gt(Wt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Gt(Wt),null;case 4:return Bs(),null;case 10:return Mu(r.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var ml=!1,Sn=!1,Gv=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Hs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Yt(n,r,d)}else l.current=null}function qu(n,r,l){try{l()}catch(d){Yt(n,r,d)}}var mm=!1;function jv(n,r){if(au=Ua,n=Yh(),Jc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var g=d.anchorOffset,S=d.focusNode;d=d.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var A=0,z=-1,H=-1,re=0,Se=0,Me=n,_e=null;t:for(;;){for(var Oe;Me!==l||g!==0&&Me.nodeType!==3||(z=A+g),Me!==S||d!==0&&Me.nodeType!==3||(H=A+d),Me.nodeType===3&&(A+=Me.nodeValue.length),(Oe=Me.firstChild)!==null;)_e=Me,Me=Oe;for(;;){if(Me===n)break t;if(_e===l&&++re===g&&(z=A),_e===S&&++Se===d&&(H=A),(Oe=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=Oe}l=z===-1||H===-1?null:{start:z,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(lu={focusedElem:n,selectionRange:l},Ua=!1,Ve=r;Ve!==null;)if(r=Ve,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ve=n;else for(;Ve!==null;){r=Ve;try{var He=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var je=He.memoizedProps,qt=He.memoizedState,J=r.stateNode,G=J.getSnapshotBeforeUpdate(r.elementType===r.type?je:yi(r.type,je),qt);J.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=r.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){Yt(r,r.return,be)}if(n=r.sibling,n!==null){n.return=r.return,Ve=n;break}Ve=r.return}return He=mm,mm=!1,He}function ra(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&n)===n){var S=g.destroy;g.destroy=void 0,S!==void 0&&qu(r,l,S)}g=g.next}while(g!==d)}}function gl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function Ku(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function gm(n){var r=n.alternate;r!==null&&(n.alternate=null,gm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Di],delete r[Yo],delete r[fu],delete r[bv],delete r[Av])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xm(n){return n.tag===5||n.tag===3||n.tag===4}function vm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zu(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Ya));else if(d!==4&&(n=n.child,n!==null))for(Zu(n,r,l),n=n.sibling;n!==null;)Zu(n,r,l),n=n.sibling}function Qu(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(Qu(n,r,l),n=n.sibling;n!==null;)Qu(n,r,l),n=n.sibling}var hn=null,Si=!1;function br(n,r,l){for(l=l.child;l!==null;)_m(n,r,l),l=l.sibling}function _m(n,r,l){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(It,l)}catch{}switch(l.tag){case 5:Sn||Hs(l,r);case 6:var d=hn,g=Si;hn=null,br(n,r,l),hn=d,Si=g,hn!==null&&(Si?(n=hn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):hn.removeChild(l.stateNode));break;case 18:hn!==null&&(Si?(n=hn,l=l.stateNode,n.nodeType===8?du(n.parentNode,l):n.nodeType===1&&du(n,l),ko(n)):du(hn,l.stateNode));break;case 4:d=hn,g=Si,hn=l.stateNode.containerInfo,Si=!0,br(n,r,l),hn=d,Si=g;break;case 0:case 11:case 14:case 15:if(!Sn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var S=g,A=S.destroy;S=S.tag,A!==void 0&&((S&2)!==0||(S&4)!==0)&&qu(l,r,A),g=g.next}while(g!==d)}br(n,r,l);break;case 1:if(!Sn&&(Hs(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(z){Yt(l,r,z)}br(n,r,l);break;case 21:br(n,r,l);break;case 22:l.mode&1?(Sn=(d=Sn)||l.memoizedState!==null,br(n,r,l),Sn=d):br(n,r,l);break;default:br(n,r,l)}}function ym(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Gv),r.forEach(function(d){var g=Jv.bind(null,n,d);l.has(d)||(l.add(d),d.then(g,g))})}}function Mi(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var g=l[d];try{var S=n,A=r,z=A;e:for(;z!==null;){switch(z.tag){case 5:hn=z.stateNode,Si=!1;break e;case 3:hn=z.stateNode.containerInfo,Si=!0;break e;case 4:hn=z.stateNode.containerInfo,Si=!0;break e}z=z.return}if(hn===null)throw Error(t(160));_m(S,A,g),hn=null,Si=!1;var H=g.alternate;H!==null&&(H.return=null),g.return=null}catch(re){Yt(g,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Sm(r,n),r=r.sibling}function Sm(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mi(r,n),ki(n),d&4){try{ra(3,n,n.return),gl(3,n)}catch(je){Yt(n,n.return,je)}try{ra(5,n,n.return)}catch(je){Yt(n,n.return,je)}}break;case 1:Mi(r,n),ki(n),d&512&&l!==null&&Hs(l,l.return);break;case 5:if(Mi(r,n),ki(n),d&512&&l!==null&&Hs(l,l.return),n.flags&32){var g=n.stateNode;try{ct(g,"")}catch(je){Yt(n,n.return,je)}}if(d&4&&(g=n.stateNode,g!=null)){var S=n.memoizedProps,A=l!==null?l.memoizedProps:S,z=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{z==="input"&&S.type==="radio"&&S.name!=null&&ut(g,S),Ze(z,A);var re=Ze(z,S);for(A=0;A<H.length;A+=2){var Se=H[A],Me=H[A+1];Se==="style"?tt(g,Me):Se==="dangerouslySetInnerHTML"?Pe(g,Me):Se==="children"?ct(g,Me):L(g,Se,Me,re)}switch(z){case"input":mt(g,S);break;case"textarea":pe(g,S);break;case"select":var _e=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!S.multiple;var Oe=S.value;Oe!=null?F(g,!!S.multiple,Oe,!1):_e!==!!S.multiple&&(S.defaultValue!=null?F(g,!!S.multiple,S.defaultValue,!0):F(g,!!S.multiple,S.multiple?[]:"",!1))}g[Yo]=S}catch(je){Yt(n,n.return,je)}}break;case 6:if(Mi(r,n),ki(n),d&4){if(n.stateNode===null)throw Error(t(162));g=n.stateNode,S=n.memoizedProps;try{g.nodeValue=S}catch(je){Yt(n,n.return,je)}}break;case 3:if(Mi(r,n),ki(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{ko(r.containerInfo)}catch(je){Yt(n,n.return,je)}break;case 4:Mi(r,n),ki(n);break;case 13:Mi(r,n),ki(n),g=n.child,g.flags&8192&&(S=g.memoizedState!==null,g.stateNode.isHidden=S,!S||g.alternate!==null&&g.alternate.memoizedState!==null||(td=we())),d&4&&ym(n);break;case 22:if(Se=l!==null&&l.memoizedState!==null,n.mode&1?(Sn=(re=Sn)||Se,Mi(r,n),Sn=re):Mi(r,n),ki(n),d&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!Se&&(n.mode&1)!==0)for(Ve=n,Se=n.child;Se!==null;){for(Me=Ve=Se;Ve!==null;){switch(_e=Ve,Oe=_e.child,_e.tag){case 0:case 11:case 14:case 15:ra(4,_e,_e.return);break;case 1:Hs(_e,_e.return);var He=_e.stateNode;if(typeof He.componentWillUnmount=="function"){d=_e,l=_e.return;try{r=d,He.props=r.memoizedProps,He.state=r.memoizedState,He.componentWillUnmount()}catch(je){Yt(d,l,je)}}break;case 5:Hs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){wm(Me);continue}}Oe!==null?(Oe.return=_e,Ve=Oe):wm(Me)}Se=Se.sibling}e:for(Se=null,Me=n;;){if(Me.tag===5){if(Se===null){Se=Me;try{g=Me.stateNode,re?(S=g.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(z=Me.stateNode,H=Me.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null,z.style.display=Ke("display",A))}catch(je){Yt(n,n.return,je)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=re?"":Me.memoizedProps}catch(je){Yt(n,n.return,je)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Mi(r,n),ki(n),d&4&&ym(n);break;case 21:break;default:Mi(r,n),ki(n)}}function ki(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(xm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(ct(g,""),d.flags&=-33);var S=vm(n);Qu(n,S,g);break;case 3:case 4:var A=d.stateNode.containerInfo,z=vm(n);Zu(n,z,A);break;default:throw Error(t(161))}}catch(H){Yt(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Wv(n,r,l){Ve=n,Mm(n)}function Mm(n,r,l){for(var d=(n.mode&1)!==0;Ve!==null;){var g=Ve,S=g.child;if(g.tag===22&&d){var A=g.memoizedState!==null||ml;if(!A){var z=g.alternate,H=z!==null&&z.memoizedState!==null||Sn;z=ml;var re=Sn;if(ml=A,(Sn=H)&&!re)for(Ve=g;Ve!==null;)A=Ve,H=A.child,A.tag===22&&A.memoizedState!==null?Tm(g):H!==null?(H.return=A,Ve=H):Tm(g);for(;S!==null;)Ve=S,Mm(S),S=S.sibling;Ve=g,ml=z,Sn=re}Em(n)}else(g.subtreeFlags&8772)!==0&&S!==null?(S.return=g,Ve=S):Em(n)}}function Em(n){for(;Ve!==null;){var r=Ve;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Sn||gl(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!Sn)if(l===null)d.componentDidMount();else{var g=r.elementType===r.type?l.memoizedProps:yi(r.type,l.memoizedProps);d.componentDidUpdate(g,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var S=r.updateQueue;S!==null&&wp(r,S,d);break;case 3:var A=r.updateQueue;if(A!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}wp(r,A,l)}break;case 5:var z=r.stateNode;if(l===null&&r.flags&4){l=z;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var Se=re.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&ko(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Sn||r.flags&512&&Ku(r)}catch(_e){Yt(r,r.return,_e)}}if(r===n){Ve=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ve=l;break}Ve=r.return}}function wm(n){for(;Ve!==null;){var r=Ve;if(r===n){Ve=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ve=l;break}Ve=r.return}}function Tm(n){for(;Ve!==null;){var r=Ve;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{gl(4,r)}catch(H){Yt(r,l,H)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var g=r.return;try{d.componentDidMount()}catch(H){Yt(r,g,H)}}var S=r.return;try{Ku(r)}catch(H){Yt(r,S,H)}break;case 5:var A=r.return;try{Ku(r)}catch(H){Yt(r,A,H)}}}catch(H){Yt(r,r.return,H)}if(r===n){Ve=null;break}var z=r.sibling;if(z!==null){z.return=r.return,Ve=z;break}Ve=r.return}}var Xv=Math.ceil,xl=T.ReactCurrentDispatcher,Ju=T.ReactCurrentOwner,li=T.ReactCurrentBatchConfig,At=0,cn=null,Qt=null,pn=0,Qn=0,Gs=Sr(0),rn=0,sa=null,Jr=0,vl=0,ed=0,oa=null,Vn=null,td=0,js=1/0,qi=null,_l=!1,nd=null,Ar=null,yl=!1,Cr=null,Sl=0,aa=0,id=null,Ml=-1,El=0;function Rn(){return(At&6)!==0?we():Ml!==-1?Ml:Ml=we()}function Rr(n){return(n.mode&1)===0?1:(At&2)!==0&&pn!==0?pn&-pn:Rv.transition!==null?(El===0&&(El=An()),El):(n=Ut,n!==0||(n=window.event,n=n===void 0?16:Ah(n.type)),n)}function Ei(n,r,l,d){if(50<aa)throw aa=0,id=null,Error(t(185));Fn(n,l,d),((At&2)===0||n!==cn)&&(n===cn&&((At&2)===0&&(vl|=l),rn===4&&Pr(n,pn)),Hn(n,d),l===1&&At===0&&(r.mode&1)===0&&(js=we()+500,Za&&Er()))}function Hn(n,r){var l=n.callbackNode;ni(n,r);var d=Ni(n,n===cn?pn:0);if(d===0)l!==null&&ae(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&ae(l),r===1)n.tag===0?Cv(Am.bind(null,n)):fp(Am.bind(null,n)),wv(function(){(At&6)===0&&Er()}),l=null;else{switch(_h(d)){case 1:l=Ge;break;case 4:l=ot;break;case 16:l=lt;break;case 536870912:l=Tt;break;default:l=lt}l=Um(l,bm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function bm(n,r){if(Ml=-1,El=0,(At&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ws()&&n.callbackNode!==l)return null;var d=Ni(n,n===cn?pn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=wl(n,d);else{r=d;var g=At;At|=2;var S=Rm();(cn!==n||pn!==r)&&(qi=null,js=we()+500,ts(n,r));do try{qv();break}catch(z){Cm(n,z)}while(!0);Su(),xl.current=S,At=g,Qt!==null?r=0:(cn=null,pn=0,r=rn)}if(r!==0){if(r===2&&(g=Vi(n),g!==0&&(d=g,r=rd(n,g))),r===1)throw l=sa,ts(n,0),Pr(n,d),Hn(n,we()),l;if(r===6)Pr(n,d);else{if(g=n.current.alternate,(d&30)===0&&!Yv(g)&&(r=wl(n,d),r===2&&(S=Vi(n),S!==0&&(d=S,r=rd(n,S))),r===1))throw l=sa,ts(n,0),Pr(n,d),Hn(n,we()),l;switch(n.finishedWork=g,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:ns(n,Vn,qi);break;case 3:if(Pr(n,d),(d&130023424)===d&&(r=td+500-we(),10<r)){if(Ni(n,0)!==0)break;if(g=n.suspendedLanes,(g&d)!==d){Rn(),n.pingedLanes|=n.suspendedLanes&g;break}n.timeoutHandle=uu(ns.bind(null,n,Vn,qi),r);break}ns(n,Vn,qi);break;case 4:if(Pr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,g=-1;0<d;){var A=31-ht(d);S=1<<A,A=r[A],A>g&&(g=A),d&=~S}if(d=g,d=we()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Xv(d/1960))-d,10<d){n.timeoutHandle=uu(ns.bind(null,n,Vn,qi),d);break}ns(n,Vn,qi);break;case 5:ns(n,Vn,qi);break;default:throw Error(t(329))}}}return Hn(n,we()),n.callbackNode===l?bm.bind(null,n):null}function rd(n,r){var l=oa;return n.current.memoizedState.isDehydrated&&(ts(n,r).flags|=256),n=wl(n,r),n!==2&&(r=Vn,Vn=l,r!==null&&sd(r)),n}function sd(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function Yv(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var g=l[d],S=g.getSnapshot;g=g.value;try{if(!vi(S(),g))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Pr(n,r){for(r&=~ed,r&=~vl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-ht(r),d=1<<l;n[l]=-1,r&=~d}}function Am(n){if((At&6)!==0)throw Error(t(327));Ws();var r=Ni(n,0);if((r&1)===0)return Hn(n,we()),null;var l=wl(n,r);if(n.tag!==0&&l===2){var d=Vi(n);d!==0&&(r=d,l=rd(n,d))}if(l===1)throw l=sa,ts(n,0),Pr(n,r),Hn(n,we()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ns(n,Vn,qi),Hn(n,we()),null}function od(n,r){var l=At;At|=1;try{return n(r)}finally{At=l,At===0&&(js=we()+500,Za&&Er())}}function es(n){Cr!==null&&Cr.tag===0&&(At&6)===0&&Ws();var r=At;At|=1;var l=li.transition,d=Ut;try{if(li.transition=null,Ut=1,n)return n()}finally{Ut=d,li.transition=l,At=r,(At&6)===0&&Er()}}function ad(){Qn=Gs.current,Gt(Gs)}function ts(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Ev(l)),Qt!==null)for(l=Qt.return;l!==null;){var d=l;switch(gu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&qa();break;case 3:Bs(),Gt(On),Gt(vn),Ru();break;case 5:Au(d);break;case 4:Bs();break;case 13:Gt(Wt);break;case 19:Gt(Wt);break;case 10:Mu(d.type._context);break;case 22:case 23:ad()}l=l.return}if(cn=n,Qt=n=Lr(n.current,null),pn=Qn=r,rn=0,sa=null,ed=vl=Jr=0,Vn=oa=null,Kr!==null){for(r=0;r<Kr.length;r++)if(l=Kr[r],d=l.interleaved,d!==null){l.interleaved=null;var g=d.next,S=l.pending;if(S!==null){var A=S.next;S.next=g,d.next=A}l.pending=d}Kr=null}return n}function Cm(n,r){do{var l=Qt;try{if(Su(),al.current=dl,ll){for(var d=Xt.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}ll=!1}if(Qr=0,ln=nn=Xt=null,Jo=!1,ea=0,Ju.current=null,l===null||l.return===null){rn=1,sa=r,Qt=null;break}e:{var S=n,A=l.return,z=l,H=r;if(r=pn,z.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,Se=z,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=Se.alternate;_e?(Se.updateQueue=_e.updateQueue,Se.memoizedState=_e.memoizedState,Se.lanes=_e.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Oe=Jp(A);if(Oe!==null){Oe.flags&=-257,em(Oe,A,z,S,r),Oe.mode&1&&Qp(S,re,r),r=Oe,H=re;var He=r.updateQueue;if(He===null){var je=new Set;je.add(H),r.updateQueue=je}else He.add(H);break e}else{if((r&1)===0){Qp(S,re,r),ld();break e}H=Error(t(426))}}else if(jt&&z.mode&1){var qt=Jp(A);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),em(qt,A,z,S,r),_u(Vs(H,z));break e}}S=H=Vs(H,z),rn!==4&&(rn=2),oa===null?oa=[S]:oa.push(S),S=A;do{switch(S.tag){case 3:S.flags|=65536,r&=-r,S.lanes|=r;var J=Kp(S,H,r);Ep(S,J);break e;case 1:z=H;var G=S.type,te=S.stateNode;if((S.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Ar===null||!Ar.has(te)))){S.flags|=65536,r&=-r,S.lanes|=r;var be=Zp(S,z,r);Ep(S,be);break e}}S=S.return}while(S!==null)}Lm(l)}catch($e){r=$e,Qt===l&&l!==null&&(Qt=l=l.return);continue}break}while(!0)}function Rm(){var n=xl.current;return xl.current=dl,n===null?dl:n}function ld(){(rn===0||rn===3||rn===2)&&(rn=4),cn===null||(Jr&268435455)===0&&(vl&268435455)===0||Pr(cn,pn)}function wl(n,r){var l=At;At|=2;var d=Rm();(cn!==n||pn!==r)&&(qi=null,ts(n,r));do try{$v();break}catch(g){Cm(n,g)}while(!0);if(Su(),At=l,xl.current=d,Qt!==null)throw Error(t(261));return cn=null,pn=0,rn}function $v(){for(;Qt!==null;)Pm(Qt)}function qv(){for(;Qt!==null&&!$();)Pm(Qt)}function Pm(n){var r=Im(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,r===null?Lm(n):Qt=r,Ju.current=null}function Lm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Vv(l,r,Qn),l!==null){Qt=l;return}}else{if(l=Hv(l,r),l!==null){l.flags&=32767,Qt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Qt=null;return}}if(r=r.sibling,r!==null){Qt=r;return}Qt=r=n}while(r!==null);rn===0&&(rn=5)}function ns(n,r,l){var d=Ut,g=li.transition;try{li.transition=null,Ut=1,Kv(n,r,l,d)}finally{li.transition=g,Ut=d}return null}function Kv(n,r,l,d){do Ws();while(Cr!==null);if((At&6)!==0)throw Error(t(327));l=n.finishedWork;var g=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var S=l.lanes|l.childLanes;if(Na(n,S),n===cn&&(Qt=cn=null,pn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||yl||(yl=!0,Um(lt,function(){return Ws(),null})),S=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||S){S=li.transition,li.transition=null;var A=Ut;Ut=1;var z=At;At|=4,Ju.current=null,jv(n,l),Sm(l,n),gv(lu),Ua=!!au,lu=au=null,n.current=l,Wv(l),Re(),At=z,Ut=A,li.transition=S}else n.current=l;if(yl&&(yl=!1,Cr=n,Sl=g),S=n.pendingLanes,S===0&&(Ar=null),gn(l.stateNode),Hn(n,we()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)g=r[l],d(g.value,{componentStack:g.stack,digest:g.digest});if(_l)throw _l=!1,n=nd,nd=null,n;return(Sl&1)!==0&&n.tag!==0&&Ws(),S=n.pendingLanes,(S&1)!==0?n===id?aa++:(aa=0,id=n):aa=0,Er(),null}function Ws(){if(Cr!==null){var n=_h(Sl),r=li.transition,l=Ut;try{if(li.transition=null,Ut=16>n?16:n,Cr===null)var d=!1;else{if(n=Cr,Cr=null,Sl=0,(At&6)!==0)throw Error(t(331));var g=At;for(At|=4,Ve=n.current;Ve!==null;){var S=Ve,A=S.child;if((Ve.flags&16)!==0){var z=S.deletions;if(z!==null){for(var H=0;H<z.length;H++){var re=z[H];for(Ve=re;Ve!==null;){var Se=Ve;switch(Se.tag){case 0:case 11:case 15:ra(8,Se,S)}var Me=Se.child;if(Me!==null)Me.return=Se,Ve=Me;else for(;Ve!==null;){Se=Ve;var _e=Se.sibling,Oe=Se.return;if(gm(Se),Se===re){Ve=null;break}if(_e!==null){_e.return=Oe,Ve=_e;break}Ve=Oe}}}var He=S.alternate;if(He!==null){var je=He.child;if(je!==null){He.child=null;do{var qt=je.sibling;je.sibling=null,je=qt}while(je!==null)}}Ve=S}}if((S.subtreeFlags&2064)!==0&&A!==null)A.return=S,Ve=A;else e:for(;Ve!==null;){if(S=Ve,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:ra(9,S,S.return)}var J=S.sibling;if(J!==null){J.return=S.return,Ve=J;break e}Ve=S.return}}var G=n.current;for(Ve=G;Ve!==null;){A=Ve;var te=A.child;if((A.subtreeFlags&2064)!==0&&te!==null)te.return=A,Ve=te;else e:for(A=G;Ve!==null;){if(z=Ve,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:gl(9,z)}}catch($e){Yt(z,z.return,$e)}if(z===A){Ve=null;break e}var be=z.sibling;if(be!==null){be.return=z.return,Ve=be;break e}Ve=z.return}}if(At=g,Er(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(It,n)}catch{}d=!0}return d}finally{Ut=l,li.transition=r}}return!1}function Nm(n,r,l){r=Vs(l,r),r=Kp(n,r,1),n=Tr(n,r,1),r=Rn(),n!==null&&(Fn(n,1,r),Hn(n,r))}function Yt(n,r,l){if(n.tag===3)Nm(n,n,l);else for(;r!==null;){if(r.tag===3){Nm(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ar===null||!Ar.has(d))){n=Vs(l,n),n=Zp(r,n,1),r=Tr(r,n,1),n=Rn(),r!==null&&(Fn(r,1,n),Hn(r,n));break}}r=r.return}}function Zv(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=Rn(),n.pingedLanes|=n.suspendedLanes&l,cn===n&&(pn&l)===l&&(rn===4||rn===3&&(pn&130023424)===pn&&500>we()-td?ts(n,0):ed|=l),Hn(n,r)}function Dm(n,r){r===0&&((n.mode&1)===0?r=1:(r=xi,xi<<=1,(xi&130023424)===0&&(xi=4194304)));var l=Rn();n=Xi(n,r),n!==null&&(Fn(n,r,l),Hn(n,l))}function Qv(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Dm(n,l)}function Jv(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,g=n.memoizedState;g!==null&&(l=g.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),Dm(n,l)}var Im;Im=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||On.current)Bn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Bn=!1,Bv(n,r,l);Bn=(n.flags&131072)!==0}else Bn=!1,jt&&(r.flags&1048576)!==0&&hp(r,Ja,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;pl(n,r),n=r.pendingProps;var g=Ds(r,vn.current);zs(r,l),g=Nu(null,r,d,n,g,l);var S=Du();return r.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,zn(d)?(S=!0,Ka(r)):S=!1,r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Tu(r),g.updater=fl,r.stateNode=g,g._reactInternals=r,zu(r,d,n,l),r=Gu(null,r,d,!0,S,l)):(r.tag=0,jt&&S&&mu(r),Cn(null,r,g,l),r=r.child),r;case 16:d=r.elementType;e:{switch(pl(n,r),n=r.pendingProps,g=d._init,d=g(d._payload),r.type=d,g=r.tag=t_(d),n=yi(d,n),g){case 0:r=Hu(null,r,d,n,l);break e;case 1:r=om(null,r,d,n,l);break e;case 11:r=tm(null,r,d,n,l);break e;case 14:r=nm(null,r,d,yi(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:yi(d,g),Hu(n,r,d,g,l);case 1:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:yi(d,g),om(n,r,d,g,l);case 3:e:{if(am(r),n===null)throw Error(t(387));d=r.pendingProps,S=r.memoizedState,g=S.element,Mp(n,r),sl(r,d,null,l);var A=r.memoizedState;if(d=A.element,S.isDehydrated)if(S={element:d,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=S,r.memoizedState=S,r.flags&256){g=Vs(Error(t(423)),r),r=lm(n,r,d,l,g);break e}else if(d!==g){g=Vs(Error(t(424)),r),r=lm(n,r,d,l,g);break e}else for(Zn=yr(r.stateNode.containerInfo.firstChild),Kn=r,jt=!0,_i=null,l=yp(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ks(),d===g){r=$i(n,r,l);break e}Cn(n,r,d,l)}r=r.child}return r;case 5:return Tp(r),n===null&&vu(r),d=r.type,g=r.pendingProps,S=n!==null?n.memoizedProps:null,A=g.children,cu(d,g)?A=null:S!==null&&cu(d,S)&&(r.flags|=32),sm(n,r),Cn(n,r,A,l),r.child;case 6:return n===null&&vu(r),null;case 13:return cm(n,r,l);case 4:return bu(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=Fs(r,null,d,l):Cn(n,r,d,l),r.child;case 11:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:yi(d,g),tm(n,r,d,g,l);case 7:return Cn(n,r,r.pendingProps,l),r.child;case 8:return Cn(n,r,r.pendingProps.children,l),r.child;case 12:return Cn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,g=r.pendingProps,S=r.memoizedProps,A=g.value,zt(nl,d._currentValue),d._currentValue=A,S!==null)if(vi(S.value,A)){if(S.children===g.children&&!On.current){r=$i(n,r,l);break e}}else for(S=r.child,S!==null&&(S.return=r);S!==null;){var z=S.dependencies;if(z!==null){A=S.child;for(var H=z.firstContext;H!==null;){if(H.context===d){if(S.tag===1){H=Yi(-1,l&-l),H.tag=2;var re=S.updateQueue;if(re!==null){re=re.shared;var Se=re.pending;Se===null?H.next=H:(H.next=Se.next,Se.next=H),re.pending=H}}S.lanes|=l,H=S.alternate,H!==null&&(H.lanes|=l),Eu(S.return,l,r),z.lanes|=l;break}H=H.next}}else if(S.tag===10)A=S.type===r.type?null:S.child;else if(S.tag===18){if(A=S.return,A===null)throw Error(t(341));A.lanes|=l,z=A.alternate,z!==null&&(z.lanes|=l),Eu(A,l,r),A=S.sibling}else A=S.child;if(A!==null)A.return=S;else for(A=S;A!==null;){if(A===r){A=null;break}if(S=A.sibling,S!==null){S.return=A.return,A=S;break}A=A.return}S=A}Cn(n,r,g.children,l),r=r.child}return r;case 9:return g=r.type,d=r.pendingProps.children,zs(r,l),g=oi(g),d=d(g),r.flags|=1,Cn(n,r,d,l),r.child;case 14:return d=r.type,g=yi(d,r.pendingProps),g=yi(d.type,g),nm(n,r,d,g,l);case 15:return im(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:yi(d,g),pl(n,r),r.tag=1,zn(d)?(n=!0,Ka(r)):n=!1,zs(r,l),$p(r,d,g),zu(r,d,g,l),Gu(null,r,d,!0,n,l);case 19:return dm(n,r,l);case 22:return rm(n,r,l)}throw Error(t(156,r.tag))};function Um(n,r){return se(n,r)}function e_(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(n,r,l,d){return new e_(n,r,l,d)}function cd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function t_(n){if(typeof n=="function")return cd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===ce)return 14}return 2}function Lr(n,r){var l=n.alternate;return l===null?(l=ci(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Tl(n,r,l,d,g,S){var A=2;if(d=n,typeof n=="function")cd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case N:return is(l.children,g,S,r);case k:A=8,g|=8;break;case D:return n=ci(12,l,r,g|2),n.elementType=D,n.lanes=S,n;case W:return n=ci(13,l,r,g),n.elementType=W,n.lanes=S,n;case oe:return n=ci(19,l,r,g),n.elementType=oe,n.lanes=S,n;case le:return bl(l,g,S,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:A=10;break e;case O:A=9;break e;case q:A=11;break e;case ce:A=14;break e;case ue:A=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ci(A,l,r,g),r.elementType=n,r.type=d,r.lanes=S,r}function is(n,r,l,d){return n=ci(7,n,d,r),n.lanes=l,n}function bl(n,r,l,d){return n=ci(22,n,d,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function ud(n,r,l){return n=ci(6,n,null,r),n.lanes=l,n}function dd(n,r,l){return r=ci(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function n_(n,r,l,d,g){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function fd(n,r,l,d,g,S,A,z,H){return n=new n_(n,r,l,z,H),r===1?(r=1,S===!0&&(r|=8)):r=0,S=ci(3,null,null,r),n.current=S,S.stateNode=n,S.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(S),n}function i_(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function km(n){if(!n)return Mr;n=n._reactInternals;e:{if(Li(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(zn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(zn(l))return up(n,l,r)}return r}function Fm(n,r,l,d,g,S,A,z,H){return n=fd(l,d,!0,n,g,S,A,z,H),n.context=km(null),l=n.current,d=Rn(),g=Rr(l),S=Yi(d,g),S.callback=r??null,Tr(l,S,g),n.current.lanes=g,Fn(n,g,d),Hn(n,d),n}function Al(n,r,l,d){var g=r.current,S=Rn(),A=Rr(g);return l=km(l),r.context===null?r.context=l:r.pendingContext=l,r=Yi(S,A),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Tr(g,r,A),n!==null&&(Ei(n,g,A,S),rl(n,g,A)),A}function Cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Om(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function hd(n,r){Om(n,r),(n=n.alternate)&&Om(n,r)}function r_(){return null}var zm=typeof reportError=="function"?reportError:function(n){console.error(n)};function pd(n){this._internalRoot=n}Rl.prototype.render=pd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Al(n,r,null,null)},Rl.prototype.unmount=pd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;es(function(){Al(null,n,null,null)}),r[Hi]=null}};function Rl(n){this._internalRoot=n}Rl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Mh();n={blockedOn:null,target:n,priority:r};for(var l=0;l<xr.length&&r!==0&&r<xr[l].priority;l++);xr.splice(l,0,n),l===0&&Th(n)}};function md(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function s_(n,r,l,d,g){if(g){if(typeof d=="function"){var S=d;d=function(){var re=Cl(A);S.call(re)}}var A=Fm(r,d,n,0,null,!1,!1,"",Bm);return n._reactRootContainer=A,n[Hi]=A.current,Wo(n.nodeType===8?n.parentNode:n),es(),A}for(;g=n.lastChild;)n.removeChild(g);if(typeof d=="function"){var z=d;d=function(){var re=Cl(H);z.call(re)}}var H=fd(n,0,!1,null,null,!1,!1,"",Bm);return n._reactRootContainer=H,n[Hi]=H.current,Wo(n.nodeType===8?n.parentNode:n),es(function(){Al(r,H,l,d)}),H}function Ll(n,r,l,d,g){var S=l._reactRootContainer;if(S){var A=S;if(typeof g=="function"){var z=g;g=function(){var H=Cl(A);z.call(H)}}Al(r,A,n,g)}else A=s_(l,r,n,g,d);return Cl(A)}yh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=tn(r.pendingLanes);l!==0&&(zc(r,l|1),Hn(r,we()),(At&6)===0&&(js=we()+500,Er()))}break;case 13:es(function(){var d=Xi(n,1);if(d!==null){var g=Rn();Ei(d,n,1,g)}}),hd(n,1)}},Bc=function(n){if(n.tag===13){var r=Xi(n,134217728);if(r!==null){var l=Rn();Ei(r,n,134217728,l)}hd(n,134217728)}},Sh=function(n){if(n.tag===13){var r=Rr(n),l=Xi(n,r);if(l!==null){var d=Rn();Ei(l,n,r,d)}hd(n,r)}},Mh=function(){return Ut},Eh=function(n,r){var l=Ut;try{return Ut=n,r()}finally{Ut=l}},Ne=function(n,r,l){switch(r){case"input":if(mt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var g=$a(d);if(!g)throw Error(t(90));pt(d),mt(d,g)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&F(n,!!l.multiple,r,!1)}},Vt=od,en=es;var o_={usingClientEntryPoint:!1,Events:[$o,Ls,$a,Ue,dt,od]},la={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a_={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=I(n),n===null?null:n.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||r_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{It=Nl.inject(a_),wt=Nl}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o_,Gn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!md(r))throw Error(t(200));return i_(n,r,null,l)},Gn.createRoot=function(n,r){if(!md(n))throw Error(t(299));var l=!1,d="",g=zm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),r=fd(n,1,!1,null,null,l,!1,d,g),n[Hi]=r.current,Wo(n.nodeType===8?n.parentNode:n),new pd(r)},Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=I(r),n=n===null?null:n.stateNode,n},Gn.flushSync=function(n){return es(n)},Gn.hydrate=function(n,r,l){if(!Pl(r))throw Error(t(200));return Ll(null,n,r,!0,l)},Gn.hydrateRoot=function(n,r,l){if(!md(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,g=!1,S="",A=zm;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(S=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),r=Fm(r,null,n,1,l??null,g,!1,S,A),n[Hi]=r.current,Wo(n),d)for(n=0;n<d.length;n++)l=d[n],g=l._getVersion,g=g(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,g]:r.mutableSourceEagerHydrationData.push(l,g);return new Rl(r)},Gn.render=function(n,r,l){if(!Pl(r))throw Error(t(200));return Ll(null,n,r,!1,l)},Gn.unmountComponentAtNode=function(n){if(!Pl(n))throw Error(t(40));return n._reactRootContainer?(es(function(){Ll(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},Gn.unstable_batchedUpdates=od,Gn.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!Pl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ll(n,r,l,!1,d)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var $m;function m_(){if($m)return vd.exports;$m=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vd.exports=p_(),vd.exports}var qm;function g_(){if(qm)return Dl;qm=1;var s=m_();return Dl.createRoot=s.createRoot,Dl.hydrateRoot=s.hydrateRoot,Dl}var x_=g_();const v_=C0(x_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=(...s)=>s.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=s=>{const e=y_(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=Ce.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:c,...u},f)=>Ce.createElement("svg",{ref:f,...S_,width:e,height:e,stroke:s,strokeWidth:i?Number(t)*24/Number(e):t,className:R0("lucide",o),...!a&&!M_(u)&&{"aria-hidden":"true"},...u},[...c.map(([h,p])=>Ce.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=(s,e)=>{const t=Ce.forwardRef(({className:i,...o},a)=>Ce.createElement(E_,{ref:a,iconNode:e,className:R0(`lucide-${__(Km(s))}`,`lucide-${s}`,i),...o}));return t.displayName=Km(s),t};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],T_=yt("aperture",w_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],A_=yt("arrow-right",b_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],ms=yt("box",C_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],P_=yt("chevron-down",R_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],N_=yt("chevron-right",L_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],I_=yt("chevron-up",D_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],P0=yt("columns-2",U_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Kf=yt("download",k_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],O_=yt("eraser",F_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],B_=yt("eye-off",z_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],H_=yt("eye",V_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]],L0=yt("frame",G_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],W_=yt("grid-3x3",j_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],Y_=yt("image-plus",X_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],lc=yt("image",$_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],N0=yt("layers",q_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],Z_=yt("layout-template",K_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],D0=yt("monitor",Q_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ey=yt("moon",J_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]],ny=yt("paint-bucket",ty);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]],ry=yt("panel-bottom",iy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],oy=yt("panel-left",sy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]],ly=yt("panel-right",ay);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]],uy=yt("panel-top",cy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],I0=yt("pencil",dy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],hy=yt("plus",fy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],my=yt("redo-2",py);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],xy=yt("rotate-ccw",gy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],_y=yt("rotate-cw",vy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Sy=yt("settings-2",yy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],cc=yt("sliders-horizontal",My);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]],wy=yt("snowflake",Ey);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],by=yt("sparkles",Ty);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],U0=yt("square",Ay);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],k0=yt("sun",Cy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],F0=yt("trash-2",Ry);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Ly=yt("undo-2",Py);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Dy=yt("upload",Ny);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gs=yt("x",Iy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ky=yt("zap",Uy),Zm=s=>{let e;const t=new Set,i=(h,p)=>{const m=typeof h=="function"?h(e):h;if(!Object.is(m,e)){const x=e;e=p??(typeof m!="object"||m===null)?m:Object.assign({},e,m),t.forEach(y=>y(e,x))}},o=()=>e,u={setState:i,getState:o,getInitialState:()=>f,subscribe:h=>(t.add(h),()=>t.delete(h))},f=e=s(i,o,u);return u},Fy=(s=>s?Zm(s):Zm),Oy=s=>s;function zy(s,e=Oy){const t=ga.useSyncExternalStore(s.subscribe,ga.useCallback(()=>e(s.getState()),[s,e]),ga.useCallback(()=>e(s.getInitialState()),[s,e]));return ga.useDebugValue(t),t}const Qm=s=>{const e=Fy(s),t=i=>zy(e,i);return Object.assign(t,e),t},By=(s=>s?Qm(s):Qm),Vy=["#000000","#1a1a1a","#333333","#555555","#888888","#aaaaaa","#cccccc","#e8e8e8","#ffffff","#ff0000","#cc0000","#880000","#ff4444","#ff8888","#ffcccc","#ff8800","#cc6600","#884400","#ffaa44","#ffcc88","#ffe4c0","#ffff00","#cccc00","#888800","#ffff66","#ffff99","#ffffcc","#00ff00","#00cc00","#008800","#44ff44","#88ff88","#ccffcc","#00ffcc","#00ccaa","#008866","#00ffff","#00cccc","#008888","#0000ff","#0000cc","#000088","#4444ff","#8888ff","#ccccff","#8800ff","#6600cc","#440088","#ff00ff","#cc00cc","#880088","#ff44ff","#ff88ff","#ffccff","#ff0088","#cc0066","#880044","#ff66aa","#ffaacc","#ffddee","#662200","#8b4513","#a0522d","#c68642","#d2a679","#f5deb3","#ffe0bd","#ffcd94","#e8b88a","#228b22","#3a5f0b","#556b2f","#8b7355","#a08060","#c4a882","#4a3728","#6b4c3b","#8b6050","#87ceeb","#4488cc","#1a6699","#003366","#004488","#1155aa","#ff6600","#ff3300","#cc2200","#00ff88","#00cc66","#009944","#ff00aa","#cc0088","#990066"],O0=32,z0=32,B0=5;function Sa(s,e,t){return Array.from({length:e},()=>Array.from({length:s},()=>Array(t).fill("transparent")))}let Sd=0;function V0(s,e,t,i){return Sd++,{id:`layer-${Sd}`,name:`Layer ${Sd}`,visible:!0,voxels:Sa(s,e,t),voxelMaterials:{}}}function Md(s){return s.map(e=>({...e,voxels:e.voxels.map(t=>t.map(i=>[...i])),voxelMaterials:{...e.voxelMaterials}}))}function Ci(s,e,t,i){var a,c;const o=Sa(e,t,i);for(const u of s)if(u.visible)for(let f=0;f<t;f++)for(let h=0;h<e;h++)for(let p=0;p<i;p++){const m=(c=(a=u.voxels[f])==null?void 0:a[h])==null?void 0:c[p];m&&m!=="transparent"&&(o[f][h][p]=m)}return o}function Hy(s){const e={};for(const t of s)if(t.visible)for(const[i,o]of Object.entries(t.voxelMaterials||{}))o&&o!=="solid"?e[i]=o:o==="solid"&&delete e[i];return e}function Lc(s,e,t,i){return s==="top"||s==="bottom"?{w:e,h:i}:s==="left"||s==="right"?{w:i,h:t}:{w:e,h:t}}function Zf(s,e,t,i,o){switch(e){case"front":return Array.from({length:i},(a,c)=>Array.from({length:t},(u,f)=>{var h,p;for(let m=o-1;m>=0;m--){const x=(p=(h=s[c])==null?void 0:h[f])==null?void 0:p[m];if(x&&x!=="transparent")return x}return"transparent"}));case"back":return Array.from({length:i},(a,c)=>Array.from({length:t},(u,f)=>{var p,m;const h=t-1-f;for(let x=0;x<o;x++){const y=(m=(p=s[c])==null?void 0:p[h])==null?void 0:m[x];if(y&&y!=="transparent")return y}return"transparent"}));case"left":return Array.from({length:i},(a,c)=>Array.from({length:o},(u,f)=>{var h,p;for(let m=0;m<t;m++){const x=(p=(h=s[c])==null?void 0:h[m])==null?void 0:p[f];if(x&&x!=="transparent")return x}return"transparent"}));case"right":return Array.from({length:i},(a,c)=>Array.from({length:o},(u,f)=>{var p,m;const h=o-1-f;for(let x=t-1;x>=0;x--){const y=(m=(p=s[c])==null?void 0:p[x])==null?void 0:m[h];if(y&&y!=="transparent")return y}return"transparent"}));case"top":return Array.from({length:o},(a,c)=>Array.from({length:t},(u,f)=>{var h,p;for(let m=0;m<i;m++){const x=(p=(h=s[m])==null?void 0:h[f])==null?void 0:p[c];if(x&&x!=="transparent")return x}return"transparent"}));case"bottom":return Array.from({length:o},(a,c)=>Array.from({length:t},(u,f)=>{var h,p;for(let m=i-1;m>=0;m--){const x=(p=(h=s[m])==null?void 0:h[f])==null?void 0:p[c];if(x&&x!=="transparent")return x}return"transparent"}));default:return[]}}function Gy(s,e,t,i,o){const a=Math.floor(o/2);switch(e){case"front":return Array.from({length:i},(c,u)=>Array.from({length:t},(f,h)=>{var p,m;for(let x=o-1;x>=0;x--)if((m=(p=s[u])==null?void 0:p[h])!=null&&m[x]&&s[u][h][x]!=="transparent")return x-a;return null}));case"back":return Array.from({length:i},(c,u)=>Array.from({length:t},(f,h)=>{var m,x;const p=t-1-h;for(let y=0;y<o;y++)if((x=(m=s[u])==null?void 0:m[p])!=null&&x[y]&&s[u][p][y]!=="transparent")return y-a;return null}));case"left":return Array.from({length:i},(c,u)=>Array.from({length:o},(f,h)=>{var p,m;for(let x=0;x<t;x++)if((m=(p=s[u])==null?void 0:p[x])!=null&&m[h]&&s[u][x][h]!=="transparent")return x;return null}));case"right":return Array.from({length:i},(c,u)=>Array.from({length:o},(f,h)=>{var m,x;const p=o-1-h;for(let y=t-1;y>=0;y--)if((x=(m=s[u])==null?void 0:m[y])!=null&&x[p]&&s[u][y][p]!=="transparent")return t-1-y;return null}));case"top":return Array.from({length:o},(c,u)=>Array.from({length:t},(f,h)=>{var p,m;for(let x=0;x<i;x++)if((m=(p=s[x])==null?void 0:p[h])!=null&&m[u]&&s[x][h][u]!=="transparent")return x;return null}));case"bottom":return Array.from({length:o},(c,u)=>Array.from({length:t},(f,h)=>{var p,m;for(let x=i-1;x>=0;x--)if((m=(p=s[x])==null?void 0:p[h])!=null&&m[u]&&s[x][h][u]!=="transparent")return i-1-x;return null}));default:return[]}}function Ed(s,e,t,i,o,a,c,u="both"){const f=[];switch(t){case"front":{const h=Math.floor(c/2),p=i-1,m=u==="front"?h:h-p,x=u==="back"?h:h+p;for(let y=Math.max(0,m);y<=Math.min(c-1,x);y++)f.push({x:s,y:e,z:y});break}case"back":{const h=Math.floor(c/2),p=i-1,m=u==="back"?h:h-p,x=u==="front"?h:h+p;for(let y=Math.max(0,m);y<=Math.min(c-1,x);y++)f.push({x:o-1-s,y:e,z:y});break}case"left":for(let h=0;h<i;h++)f.push({x:h,y:e,z:s});break;case"right":for(let h=0;h<i;h++)f.push({x:o-1-h,y:e,z:c-1-s});break;case"top":for(let h=0;h<i;h++)f.push({x:s,y:h,z:e});break;case"bottom":for(let h=0;h<i;h++)f.push({x:s,y:a-1-h,z:e});break}return f.filter(({x:h,y:p,z:m})=>h>=0&&h<o&&p>=0&&p<a&&m>=0&&m<c)}function Jm(s,e,t,i,o,a,c,u){const f=[],h=(p,m,x)=>{var w,E;const y=(E=(w=s[m])==null?void 0:w[p])==null?void 0:E[x];return y&&y!=="transparent"&&f.push({x:p,y:m,z:x}),f.length>=o};if(i==="back"){const p=a-1-e;for(let m=u-1;m>=0&&!h(p,t,m);m--);}else if(i==="left")for(let p=0;p<a&&!h(p,t,e);p++);else if(i==="right"){const p=u-1-e;for(let m=a-1;m>=0&&!h(m,t,p);m--);}else if(i==="top")for(let p=0;p<c&&!h(e,p,t);p++);else if(i==="bottom")for(let p=c-1;p>=0&&!h(e,p,t);p--);return f}const eg=V0(O0,z0,B0),nt=By((s,e)=>({canvasWidth:O0,canvasHeight:z0,depthDimension:B0,layers:[eg],activeLayerId:eg.id,pixelSize:14,showGrid:!0,currentColor:"#c8860a",activeTool:"pencil",palette:Vy,undoStack:[],redoStack:[],pushUndo(){const{layers:t,undoStack:i}=e();s({undoStack:[...i.slice(-49),Md(t)],redoStack:[]})},paintAt(t,i,o){const{layers:a,activeLayerId:c,canvasWidth:u,canvasHeight:f,depthDimension:h,activeView:p,paintDepth:m,paintDirection:x}=e(),y=a.findIndex(v=>v.id===c);if(y<0)return;const w=a[y].voxels,E=v=>{if(!v.length)return!1;const _=new Set(v.map(T=>T.y)),b=[...w];for(const T of _)b[T]=w[T].map(U=>[...U]);for(const{x:T,y:U,z:R}of v)b[U][T][R]=o;const L=[...a];return L[y]={...a[y],voxels:b},s({layers:L}),!0};if(p!=="front"&&p!=="back"){const v=Jm(w,t,i,p,1,u,f,h);E(v);return}E(Ed(t,i,p,m,u,f,h,x))},floodFillVoxel(t,i,o){var P,O;const{layers:a,activeLayerId:c,canvasWidth:u,canvasHeight:f,depthDimension:h,activeView:p,paintDepth:m,paintDirection:x}=e(),y=a.findIndex(q=>q.id===c);if(y<0)return;const w=a[y].voxels,E=Zf(w,p,u,f,h),{w:v,h:_}=Lc(p,u,f,h),b=(P=E[i])==null?void 0:P[t];if(!b||b===o)return;e().pushUndo();const L=new Set,T=[[t,i]],U=[];for(;T.length;){const[q,W]=T.pop();if(q<0||W<0||q>=v||W>=_)continue;const oe=`${q},${W}`;L.has(oe)||(L.add(oe),((O=E[W])==null?void 0:O[q])===b&&(U.push([q,W]),T.push([q+1,W],[q-1,W],[q,W+1],[q,W-1])))}const R=U.flatMap(([q,W])=>p==="front"||p==="back"?Ed(q,W,p,m,u,f,h,x):Jm(w,q,W,p,1,u,f,h));if(!R.length)return;const N=new Set(R.map(q=>q.y)),k=w.map((q,W)=>N.has(W)?q.map(oe=>[...oe]):q);for(const{x:q,y:W,z:oe}of R)k[W][q][oe]=o;const D=[...a];D[y]={...a[y],voxels:k},s({layers:D})},setCurrentColor:t=>s({currentColor:t}),setActiveTool:t=>s({activeTool:t}),setPixelSize:t=>s({pixelSize:Math.max(4,Math.min(32,t))}),toggleGrid:()=>s(t=>({showGrid:!t.showGrid})),clearCanvas(){const{layers:t,activeLayerId:i,canvasWidth:o,canvasHeight:a,depthDimension:c}=e();e().pushUndo();const u=t.map(f=>f.id===i?{...f,voxels:Sa(o,a,c)}:f);s({layers:u})},resizeCanvas(t,i){t=Math.max(4,Math.min(256,Math.round(t))),i=Math.max(4,Math.min(256,Math.round(i)));const{layers:o,canvasWidth:a,canvasHeight:c,depthDimension:u}=e();e().pushUndo();const f=t>a?Math.floor((t-a)/2):0,h=i>c?Math.floor((i-c)/2):0,p=o.map(m=>{const x=Sa(t,i,u);for(let y=0;y<c;y++)for(let w=0;w<a;w++)for(let E=0;E<u;E++){const v=y+h,_=w+f;v>=0&&v<i&&_>=0&&_<t&&(x[v][_][E]=m.voxels[y][w][E])}return{...m,voxels:x}});s({canvasWidth:t,canvasHeight:i,layers:p})},setDepthDimension(t){t=Math.max(4,Math.min(256,Math.round(t)));const{layers:i,canvasWidth:o,canvasHeight:a,depthDimension:c,paintDepth:u}=e();e().pushUndo();const f=t>c?Math.floor((t-c)/2):0,h=i.map(p=>{const m=Sa(o,a,t);for(let x=0;x<a;x++)for(let y=0;y<o;y++)for(let w=0;w<c;w++){const E=w+f;E>=0&&E<t&&(m[x][y][E]=p.voxels[x][y][w])}return{...p,voxels:m}});s({depthDimension:t,layers:h,paintDepth:Math.min(u,t)})},undo(){const{undoStack:t,layers:i,redoStack:o}=e();if(!t.length)return;const a=t[t.length-1];s({layers:a,undoStack:t.slice(0,-1),redoStack:[...o.slice(-49),Md(i)]})},redo(){const{redoStack:t,layers:i,undoStack:o}=e();if(!t.length)return;const a=t[t.length-1];s({layers:a,redoStack:t.slice(0,-1),undoStack:[...o.slice(-49),Md(i)]})},addToPalette(t){const{palette:i}=e();i.includes(t)||s({palette:[...i,t]})},paintVoxelDirect(t,i,o,a){const{layers:c,activeLayerId:u,canvasWidth:f,canvasHeight:h,depthDimension:p}=e();if(t<0||t>=f||i<0||i>=h||o<0||o>=p)return;const m=c.findIndex(E=>E.id===u);if(m<0)return;const x=c[m],y=x.voxels.map((E,v)=>v!==i?E:E.map((_,b)=>{if(b!==t)return _;const L=[..._];return L[o]=a,L})),w=[...c];w[m]={...x,voxels:y},s({layers:w})},addLayer(){const{layers:t,canvasWidth:i,canvasHeight:o,depthDimension:a}=e(),c=V0(i,o,a);s({layers:[...t,c],activeLayerId:c.id})},deleteLayer(t){var u;const{layers:i,activeLayerId:o}=e();if(i.length<=1)return;const a=i.filter(f=>f.id!==t),c=t===o?((u=a[a.length-1])==null?void 0:u.id)??a[0].id:o;s({layers:a,activeLayerId:c})},setActiveLayer:t=>s({activeLayerId:t}),toggleLayerVisible(t){const{layers:i}=e();s({layers:i.map(o=>o.id===t?{...o,visible:!o.visible}:o)})},renameLayer(t,i){const{layers:o}=e();s({layers:o.map(a=>a.id===t?{...a,name:i.trim()||a.name}:a)})},moveLayerUp(t){const{layers:i}=e(),o=i.findIndex(c=>c.id===t);if(o>=i.length-1)return;const a=[...i];[a[o],a[o+1]]=[a[o+1],a[o]],s({layers:a})},moveLayerDown(t){const{layers:i}=e(),o=i.findIndex(c=>c.id===t);if(o<=0)return;const a=[...i];[a[o],a[o-1]]=[a[o-1],a[o]],s({layers:a})},activeView:"front",paintDepth:1,paintDirection:"both",setActiveView:t=>s({activeView:t}),setPaintDepth:t=>s(i=>({paintDepth:Math.max(1,Math.min(i.depthDimension,Math.round(t)))})),setPaintDirection:t=>s({paintDirection:t}),activeMaterial:"solid",setActiveMaterial:t=>s({activeMaterial:t}),paintMaterialAt(t,i){var T,U;const{layers:o,activeLayerId:a,canvasWidth:c,canvasHeight:u,depthDimension:f,activeView:h,paintDepth:p,paintDirection:m,activeMaterial:x}=e(),y=o.findIndex(R=>R.id===a);if(y<0)return;const w=o[y],E=Ci(o,c,u,f),v=Ed(t,i,h,p,c,u,f,m),_={...w.voxelMaterials||{}};let b=!1;for(const{x:R,y:N,z:k}of v){if(!((U=(T=E[N])==null?void 0:T[R])!=null&&U[k])||E[N][R][k]==="transparent")continue;const D=`${N},${R},${k}`;x==="solid"?D in _&&(delete _[D],b=!0):_[D]!==x&&(_[D]=x,b=!0)}if(!b)return;const L=[...o];L[y]={...w,voxelMaterials:_},s({layers:L})},referenceImage:null,setReferenceImage:t=>s({referenceImage:t}),clearReferenceImage:()=>s({referenceImage:null}),viewMode:"split",activeTheme:"synthwave",showDepthText:!0,setViewMode:t=>s({viewMode:t}),setActiveTheme:t=>s({activeTheme:t}),setShowDepthText:t=>s({showDepthText:t})}));function jy(){return M.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none",style:{zIndex:0},children:[M.jsx("div",{className:"absolute inset-0",style:{background:`
          radial-gradient(ellipse at 15% 50%, rgba(120,80,20,0.15) 0%, transparent 45%),
          radial-gradient(ellipse at 85% 50%, rgba(100,60,10,0.12) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 100%, rgba(80,50,10,0.2) 0%, transparent 40%)
        `}}),M.jsxs("svg",{className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[M.jsxs("defs",{children:[M.jsxs("radialGradient",{id:"gearFill",cx:"50%",cy:"50%",children:[M.jsx("stop",{offset:"0%",stopColor:"#4a3010",stopOpacity:"0.6"}),M.jsx("stop",{offset:"100%",stopColor:"#1a0e00",stopOpacity:"0.3"})]}),M.jsx("pattern",{id:"hexTile",width:"44",height:"50",patternUnits:"userSpaceOnUse",children:M.jsx("path",{d:"M22 2 L42 13 L42 37 L22 48 L2 37 L2 13 Z",fill:"none",stroke:"rgba(122,92,46,0.06)",strokeWidth:"1"})}),M.jsxs("pattern",{id:"rivetPattern",width:"80",height:"80",patternUnits:"userSpaceOnUse",children:[M.jsx("circle",{cx:"4",cy:"4",r:"2.5",fill:"none",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.5"}),M.jsx("circle",{cx:"4",cy:"4",r:"1",fill:"rgba(200,134,10,0.2)"}),M.jsx("circle",{cx:"76",cy:"76",r:"2.5",fill:"none",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.5"}),M.jsx("circle",{cx:"76",cy:"76",r:"1",fill:"rgba(200,134,10,0.2)"})]})]}),M.jsx("rect",{width:"100%",height:"100%",fill:"url(#hexTile)"}),M.jsx("rect",{width:"100%",height:"100%",fill:"url(#rivetPattern)"}),M.jsx("g",{opacity:"0.18",children:M.jsx(Qf,{cx:70,cy:220,outerR:160,innerR:124,teeth:28,holeR:52})}),M.jsx("g",{opacity:"0.15",children:M.jsx(Wy,{cx:-90,cy:180,outerR:180,innerR:140,teeth:32,holeR:60})}),M.jsx("g",{opacity:"0.12",children:M.jsx(Xy,{cx:0,cy:-60,outerR:120,innerR:92,teeth:20,holeR:38})}),M.jsx("g",{opacity:"0.35",children:M.jsx(tg,{y:52,segments:[0,100,200,320,480,640,760],width:"100%"})}),M.jsx("g",{opacity:"0.25",children:M.jsx(tg,{y:-28,fromBottom:!0,segments:[80,200,380,540,700],width:"100%"})}),M.jsx("rect",{x:"5",y:"0",width:"4",height:"100%",fill:"rgba(122,92,46,0.15)",rx:"2"}),M.jsx("rect",{x:"3",y:"0",width:"1",height:"100%",fill:"rgba(200,134,10,0.1)"}),M.jsx("rect",{x:"calc(100% - 9px)",y:"0",width:"4",height:"100%",fill:"rgba(122,92,46,0.12)",rx:"2"})]}),M.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 opacity-30",style:{left:"-40px"},children:M.jsx(Xs,{size:180,teeth:20,className:"gear-spin-slow",stroke:"#c8860a",strokeWidth:2})}),M.jsx("div",{className:"absolute right-0 top-1/3 opacity-22",style:{right:"-50px"},children:M.jsx(Xs,{size:200,teeth:24,className:"gear-spin-reverse",stroke:"#7a5c2e",strokeWidth:1.5})}),M.jsxs("div",{className:"absolute bottom-8 right-4 flex items-end gap-0 opacity-40",children:[M.jsx(Xs,{size:60,teeth:12,className:"gear-spin",stroke:"#c8860a",strokeWidth:1.5}),M.jsx(Xs,{size:40,teeth:8,className:"gear-spin-reverse",stroke:"#8a5c08",strokeWidth:1.5,style:{marginLeft:"-8px",marginBottom:"10px"}}),M.jsx(Xs,{size:28,teeth:6,className:"gear-spin-slow",stroke:"#c8860a",strokeWidth:1,style:{marginLeft:"-6px",marginBottom:"6px"}})]}),M.jsx("div",{className:"absolute top-6 left-4 opacity-35",children:M.jsx(Xs,{size:48,teeth:10,className:"gear-spin-reverse",stroke:"#c8860a",strokeWidth:1.5})}),M.jsx(Yy,{}),M.jsx("div",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none",style:{fontFamily:"'Special Elite', serif",color:"rgba(200,134,10,0.12)",fontSize:"11px",letterSpacing:"0.5em",textTransform:"uppercase"},children:"Picell 3D Engine"})]})}function Xs({size:s,teeth:e,className:t,stroke:i,strokeWidth:o=1.5,style:a}){const c=s/2-6,u=c*.78,f=H0(s/2,s/2,c,u,e,.4);return M.jsxs("svg",{width:s,height:s,className:t,style:a,children:[M.jsx("path",{d:f,fill:"none",stroke:i,strokeWidth:o}),M.jsx("circle",{cx:s/2,cy:s/2,r:c*.38,fill:"none",stroke:i,strokeWidth:o*.8}),[0,60,120,180,240,300].slice(0,Math.min(6,Math.floor(e/4))).map((h,p)=>{const m=h*Math.PI/180,x=s/2+Math.cos(m)*c*.38,y=s/2+Math.sin(m)*c*.38,w=s/2+Math.cos(m)*c*.68,E=s/2+Math.sin(m)*c*.68;return M.jsx("line",{x1:x,y1:y,x2:w,y2:E,stroke:i,strokeWidth:o*.6},p)}),M.jsx("circle",{cx:s/2,cy:s/2,r:c*.1,fill:i,opacity:"0.6"})]})}function Qf({cx:s,cy:e,outerR:t,innerR:i,teeth:o,holeR:a}){const c=H0(s,e,t,i,o,.4);return M.jsxs(M.Fragment,{children:[M.jsx("path",{d:c,fill:"url(#gearFill)",stroke:"rgba(122,92,46,0.4)",strokeWidth:"1.5"}),M.jsx("circle",{cx:s,cy:e,r:a,fill:"rgba(10,6,2,0.6)",stroke:"rgba(122,92,46,0.3)",strokeWidth:"1"}),[0,45,90,135,180,225,270,315].map((u,f)=>{const h=u*Math.PI/180,p=s+Math.cos(h)*a,m=e+Math.sin(h)*a,x=s+Math.cos(h)*(i*.7),y=e+Math.sin(h)*(i*.7);return M.jsx("line",{x1:p,y1:m,x2:x,y2:y,stroke:"rgba(122,92,46,0.2)",strokeWidth:"1.5"},f)}),M.jsx("circle",{cx:s,cy:e,r:a*.3,fill:"rgba(200,134,10,0.15)",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.8"})]})}function Wy({cx:s,cy:e,outerR:t,innerR:i,teeth:o,holeR:a}){return M.jsx("g",{transform:`translate(100%,${e})`,children:M.jsx(Qf,{cx:s,cy:0,outerR:t,innerR:i,teeth:o,holeR:a})})}function Xy({cx:s,cy:e,outerR:t,innerR:i,teeth:o,holeR:a}){return M.jsx("g",{transform:"translate(50%,100%)",children:M.jsx(Qf,{cx:s,cy:e,outerR:t,innerR:i,teeth:o,holeR:a})})}function tg({y:s,fromBottom:e,segments:t}){const i=e?`calc(100% - ${-s}px)`:`${s}px`;return M.jsxs("g",{children:[M.jsx("line",{x1:"0",y1:i,x2:"100%",y2:i,stroke:"url(#pipeGrad2)",strokeWidth:"6"}),M.jsx("line",{x1:"0",y1:i,x2:"100%",y2:i,stroke:"rgba(200,134,10,0.15)",strokeWidth:"1"})]})}function Yy(){return M.jsxs("svg",{className:"absolute top-0 left-0 w-full opacity-25 pointer-events-none",height:"56",xmlns:"http://www.w3.org/2000/svg",children:[M.jsx("defs",{children:M.jsxs("linearGradient",{id:"pipeGrad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[M.jsx("stop",{offset:"0%",stopColor:"#d09030"}),M.jsx("stop",{offset:"40%",stopColor:"#8a5c10"}),M.jsx("stop",{offset:"100%",stopColor:"#3d2010"})]})}),M.jsx("rect",{x:"0",y:"32",width:"100%",height:"6",rx:"3",fill:"url(#pipeGrad2)"}),M.jsx("rect",{x:"0",y:"33",width:"100%",height:"1",fill:"rgba(255,200,60,0.15)"}),[60,160,280,420,560,700].map(s=>M.jsxs("g",{children:[M.jsx("rect",{x:s-5,y:28,width:10,height:14,rx:"1.5",fill:"#8a5c10"}),M.jsx("rect",{x:s-5,y:28,width:10,height:2,rx:"1",fill:"#c8860a",opacity:"0.5"}),M.jsx("circle",{cx:s,cy:35,r:2.5,fill:"#4a3010"})]},s)),[100,340,580].map((s,e)=>M.jsxs("g",{children:[M.jsx("circle",{cx:s,cy:24,r:4,fill:"rgba(220,200,150,0.3)",className:"steam-puff",style:{animationDelay:`${e*1.1}s`}}),M.jsx("circle",{cx:s+3,cy:18,r:2.5,fill:"rgba(220,200,150,0.2)",className:"steam-puff-delay",style:{animationDelay:`${e*1.1+.3}s`}})]},s))]})}function H0(s,e,t,i,o,a){const c=[],u=o*2;for(let f=0;f<u;f++){const h=f/u*Math.PI*2-Math.PI/2,p=Math.PI/u*a,m=f%2===0?t:i;c.push(`${s+Math.cos(h-p)*m},${e+Math.sin(h-p)*m}`),c.push(`${s+Math.cos(h+p)*m},${e+Math.sin(h+p)*m}`)}return`M ${c[0]} L ${c.slice(1).join(" L ")} Z`}const Fi=720,Nn=496,us=1440,fs=800,nr=130,$y=[[72,44,1.5,0],[180,88,1,1],[252,28,1.8,2],[360,72,.8,0],[432,115,1.2,1],[504,38,1,2],[612,60,1.4,0],[684,95,.8,1],[756,22,1.6,2],[828,82,1,0],[900,48,1.2,1],[972,118,.9,2],[1044,35,1.5,0],[1116,75,1.1,1],[1188,28,1.7,2],[1332,55,1,0],[108,162,1,1],[288,188,.8,2],[468,172,1.3,0],[648,195,1,1],[828,168,.9,2],[1008,190,1.4,0],[1188,178,1.1,1],[1368,195,.8,2],[36,215,.7,0],[216,238,1.2,1],[396,222,.8,2],[576,245,1,0],[756,230,1.3,1],[936,248,.7,2],[1116,225,1.1,0],[1296,240,.9,1],[144,285,.8,2],[432,298,1,0],[720,278,.6,1],[1008,292,.9,2],[1296,285,1.1,0],[288,322,.7,1],[864,318,.8,2],[1440,310,.9,0]],qy=Array.from({length:18},(s,e)=>{const t=((e+1)/19)**.6;return Nn+(fs-Nn)*t}),ng=Array.from({length:23},(s,e)=>({x1:Fi,y1:Nn,x2:e/22*us,y2:fs})),Ky=Array.from({length:22},(s,e)=>{const t=((e+1)/23)**.65,i=Nn-nr+t*nr,o=1.2+e*.28;return{y:i,thick:o}}),Zy=["sw-star-a","sw-star-b","sw-star-c"];function Qy(){return M.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none",style:{zIndex:0},children:[M.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(180deg,
          #080015 0%,
          #120330 18%,
          #1e0852 34%,
          #350a6e 48%,
          #5c0a80 59%,
          #9a1278 68%,
          #d02268 77%,
          #ee3268 86%,
          #ff4878 95%,
          #ff6090 100%)`}}),M.jsxs("svg",{className:"absolute inset-0 w-full h-full",viewBox:`0 0 ${us} ${fs}`,preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[M.jsxs("defs",{children:[M.jsxs("radialGradient",{id:"swSunGrad",cx:"50%",cy:"50%",r:"50%",children:[M.jsx("stop",{offset:"0%",stopColor:"#fff8e8"}),M.jsx("stop",{offset:"22%",stopColor:"#ffe060"}),M.jsx("stop",{offset:"50%",stopColor:"#ff8030"}),M.jsx("stop",{offset:"80%",stopColor:"#ff2d78"}),M.jsx("stop",{offset:"100%",stopColor:"#aa0a60"})]}),M.jsxs("radialGradient",{id:"swSunGlow",cx:"50%",cy:"80%",r:"50%",children:[M.jsx("stop",{offset:"0%",stopColor:"#ff2d78",stopOpacity:"0.5"}),M.jsx("stop",{offset:"50%",stopColor:"#cc44ff",stopOpacity:"0.15"}),M.jsx("stop",{offset:"100%",stopColor:"#cc44ff",stopOpacity:"0"})]}),M.jsxs("linearGradient",{id:"swGridH",x1:"0",y1:Nn,x2:"0",y2:fs,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"0%",stopColor:"#ff2d78",stopOpacity:"0.9"}),M.jsx("stop",{offset:"100%",stopColor:"#ff2d78",stopOpacity:"0.2"})]}),M.jsxs("linearGradient",{id:"swGridV",x1:"0",y1:Nn,x2:"0",y2:fs,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"0%",stopColor:"#44ddff",stopOpacity:"0.7"}),M.jsx("stop",{offset:"100%",stopColor:"#aa44ff",stopOpacity:"0.15"})]}),M.jsx("clipPath",{id:"swSunClip",children:M.jsx("rect",{x:Fi-nr-4,y:0,width:nr*2+8,height:Nn+2})}),M.jsxs("filter",{id:"swGlow",children:[M.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),M.jsxs("feMerge",{children:[M.jsx("feMergeNode",{in:"blur"}),M.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),M.jsxs("filter",{id:"swGlowSoft",children:[M.jsx("feGaussianBlur",{stdDeviation:"8",result:"blur"}),M.jsxs("feMerge",{children:[M.jsx("feMergeNode",{in:"blur"}),M.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),$y.map(([s,e,t,i],o)=>M.jsx("circle",{cx:s,cy:e,r:t,fill:o%7===0?"#ccddff":o%5===0?"#ffccee":"#ffffff",opacity:.35+o%4*.12,className:Zy[i]},o)),M.jsx("ellipse",{cx:Fi,cy:Nn,rx:nr*2.6,ry:nr*1.2,fill:"url(#swSunGlow)",className:"sw-glow-pulse"}),M.jsx("circle",{cx:Fi,cy:Nn,r:nr,fill:"url(#swSunGrad)",clipPath:"url(#swSunClip)"}),Ky.map(({y:s,thick:e},t)=>M.jsx("line",{x1:Fi-nr-2,y1:s,x2:Fi+nr+2,y2:s,stroke:"#080015",strokeWidth:e,clipPath:"url(#swSunClip)",opacity:.92},t)),M.jsx("line",{x1:0,y1:Nn,x2:us,y2:Nn,stroke:"#ff2d78",strokeWidth:3,opacity:.9,filter:"url(#swGlow)"}),M.jsx("line",{x1:0,y1:Nn,x2:us,y2:Nn,stroke:"#ffaacc",strokeWidth:.6,opacity:.7}),ng.map((s,e)=>{const t=e===0||e===ng.length-1;return M.jsx("line",{x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2,stroke:"url(#swGridV)",strokeWidth:t?1.2:.7,opacity:.65},e)}),qy.map((s,e)=>{const t=(s-Nn)/(fs-Nn),i=Math.max(0,Fi-Fi*t*1.15),o=Math.min(us,Fi+(us-Fi)*t*1.15);return M.jsx("line",{x1:i,y1:s,x2:o,y2:s,stroke:"url(#swGridH)",strokeWidth:.6+t*2,opacity:.45+t*.4},e)}),M.jsx("rect",{x:0,y:fs-4,width:us,height:4,fill:"url(#swGridH)",opacity:.4})]}),M.jsx("div",{className:"absolute inset-0 sw-scanlines"}),M.jsx("div",{className:"absolute left-0 right-0 h-px sw-scan-sweep",style:{background:"rgba(255,45,120,0.25)",boxShadow:"0 0 6px rgba(255,45,120,0.4)"}}),M.jsx("div",{className:"absolute top-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg, transparent, #cc44ff 25%, #ff2d78 50%, #cc44ff 75%, transparent)",boxShadow:"0 0 12px rgba(204,68,255,0.7), 0 0 24px rgba(255,45,120,0.3)"}}),M.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg, transparent, #44ddff 25%, #aa44ff 50%, #44ddff 75%, transparent)",boxShadow:"0 0 12px rgba(68,221,255,0.7)"}}),M.jsx("div",{className:"absolute top-0 bottom-0 left-0 w-px",style:{background:"linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)",opacity:.3}}),M.jsx("div",{className:"absolute top-0 bottom-0 right-0 w-px",style:{background:"linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)",opacity:.3}}),M.jsx("div",{className:"absolute top-0 left-0",style:{width:32,height:32,borderTop:"1px solid rgba(204,68,255,0.6)",borderLeft:"1px solid rgba(204,68,255,0.6)"}}),M.jsx("div",{className:"absolute top-0 right-0",style:{width:32,height:32,borderTop:"1px solid rgba(204,68,255,0.6)",borderRight:"1px solid rgba(204,68,255,0.6)"}}),M.jsx("div",{className:"absolute bottom-0 left-0",style:{width:32,height:32,borderBottom:"1px solid rgba(68,221,255,0.6)",borderLeft:"1px solid rgba(68,221,255,0.6)"}}),M.jsx("div",{className:"absolute bottom-0 right-0",style:{width:32,height:32,borderBottom:"1px solid rgba(68,221,255,0.6)",borderRight:"1px solid rgba(68,221,255,0.6)"}}),M.jsx("div",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 tracking-widest sw-flicker",style:{fontFamily:"'Audiowide', sans-serif",color:"#ff2d78",letterSpacing:"0.55em",textTransform:"uppercase",fontSize:"10px",opacity:.22},children:"PICELL · 3D"})]})}const _c={synthwave:{id:"synthwave",name:"SynthWave",colors:{background:"#0d0221",surface:"#150a2d",surfaceAlt:"#1e0f3c",border:"#5a1a9a",accent:"#ff2d78",accentHover:"#ff5590",text:"#f4d0ff",textMuted:"#6a40a0",canvasBg:"#0a0118"},fontFamily:"'Audiowide', sans-serif",sceneBackground:"#080015",PainterBackground:Qy},steampunk:{id:"steampunk",name:"Steampunk",colors:{background:"#1a1208",surface:"#2d2010",surfaceAlt:"#3d2e18",border:"#7a5c2e",accent:"#c8860a",accentHover:"#e8a820",text:"#e8d5a0",textMuted:"#8a7050",canvasBg:"#241a0c"},fontFamily:"'Special Elite', serif",sceneBackground:"#0e0a04",PainterBackground:jy},cyberpunk:{id:"cyberpunk",name:"Cyberpunk",colors:{background:"#080010",surface:"#110022",surfaceAlt:"#1a0030",border:"#5500aa",accent:"#cc00ff",accentHover:"#ee44ff",text:"#e0c0ff",textMuted:"#7040a0",canvasBg:"#0c0018"},fontFamily:"'Orbitron', sans-serif",sceneBackground:"#050008",PainterBackground:Jy},blueprint:{id:"blueprint",name:"Blueprint",colors:{background:"#0a1628",surface:"#0d1f3c",surfaceAlt:"#122848",border:"#2a4a7f",accent:"#4d9fff",accentHover:"#80bbff",text:"#c8dff8",textMuted:"#4a6a9a",canvasBg:"#08121e"},fontFamily:"'Share Tech Mono', monospace",sceneBackground:"#061020",PainterBackground:e1},watercolor:{id:"watercolor",name:"Watercolor",colors:{background:"#f5f0e8",surface:"#ede5d8",surfaceAlt:"#e8ddd0",border:"#c0a880",accent:"#b05030",accentHover:"#d06040",text:"#2a1a10",textMuted:"#8a6848",canvasBg:"#ede5d8"},fontFamily:"'Caveat', cursive",sceneBackground:"#f0ebe0",PainterBackground:t1}};function lf(s){return _c[s]??_c.synthwave}function G0(s){const e=document.documentElement;Object.entries(s.colors).forEach(([t,i])=>{e.style.setProperty(`--color-${t}`,i)}),e.style.setProperty("--font-family",s.fontFamily)}function Jy(){return M.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:[M.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 30% 50%, rgba(80,0,160,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(0,200,255,0.1) 0%, transparent 50%)"}}),M.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[M.jsx("defs",{children:M.jsx("pattern",{id:"cybGrid",width:"30",height:"30",patternUnits:"userSpaceOnUse",children:M.jsx("path",{d:"M 30 0 L 0 0 0 30",fill:"none",stroke:"rgba(85,0,170,0.2)",strokeWidth:"0.5"})})}),M.jsx("rect",{width:"100%",height:"100%",fill:"url(#cybGrid)"}),[.15,.35,.6,.8].map((s,e)=>M.jsx("line",{x1:"0",y1:`${s*100}%`,x2:"100%",y2:`${s*100}%`,stroke:e%2===0?"rgba(204,0,255,0.12)":"rgba(0,200,255,0.08)",strokeWidth:"1"},e))]}),M.jsx("div",{className:"absolute top-0 left-0 right-0 h-px opacity-60",style:{background:"linear-gradient(90deg, transparent, #cc00ff, #00ccff, transparent)"}}),M.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px opacity-40",style:{background:"linear-gradient(90deg, transparent, #cc00ff, transparent)"}}),M.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-15 tracking-widest",style:{fontFamily:"'Orbitron', sans-serif",color:"#cc00ff",letterSpacing:"0.5em"},children:"PICELL3D"})]})}function e1(){return M.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:M.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[M.jsxs("defs",{children:[M.jsx("pattern",{id:"bpSmall",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:M.jsx("path",{d:"M 20 0 L 0 0 0 20",fill:"none",stroke:"rgba(45,100,180,0.3)",strokeWidth:"0.5"})}),M.jsx("pattern",{id:"bpLarge",width:"100",height:"100",patternUnits:"userSpaceOnUse",children:M.jsx("path",{d:"M 100 0 L 0 0 0 100",fill:"none",stroke:"rgba(45,100,180,0.6)",strokeWidth:"1"})})]}),M.jsx("rect",{width:"100%",height:"100%",fill:"url(#bpSmall)"}),M.jsx("rect",{width:"100%",height:"100%",fill:"url(#bpLarge)"}),[[15,15],[85,15],[15,85],[85,85],[50,50]].map(([s,e],t)=>M.jsxs("g",{transform:`translate(${s}%,${e}%)`,children:[M.jsx("line",{x1:"-8",y1:"0",x2:"8",y2:"0",stroke:"rgba(77,159,255,0.4)",strokeWidth:"1"}),M.jsx("line",{x1:"0",y1:"-8",x2:"0",y2:"8",stroke:"rgba(77,159,255,0.4)",strokeWidth:"1"}),M.jsx("circle",{r:"3",fill:"none",stroke:"rgba(77,159,255,0.3)",strokeWidth:"0.5"})]},t)),M.jsx("rect",{x:"10",y:"10",width:"180",height:"40",fill:"none",stroke:"rgba(77,159,255,0.2)",strokeWidth:"1"}),M.jsx("text",{x:"20",y:"30",fill:"rgba(77,159,255,0.25)",fontSize:"8",fontFamily:"'Share Tech Mono', monospace",children:"PICELL3D — PIXEL ART TO 3D CONVERTER"}),M.jsx("text",{x:"20",y:"42",fill:"rgba(77,159,255,0.2)",fontSize:"7",fontFamily:"'Share Tech Mono', monospace",children:"SCALE: 1:1  UNITS: PX  REV: MVP"})]})})}function t1(){return M.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:[M.jsx("div",{className:"absolute inset-0",style:{background:`
          radial-gradient(ellipse at 20% 30%, rgba(180,120,60,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(80,120,180,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(200,160,100,0.05) 0%, transparent 70%)
        `}}),M.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[M.jsx("ellipse",{cx:"15%",cy:"20%",rx:"120",ry:"80",fill:"rgba(180,120,80,0.06)"}),M.jsx("ellipse",{cx:"85%",cy:"75%",rx:"150",ry:"100",fill:"rgba(80,130,200,0.05)"}),M.jsx("ellipse",{cx:"50%",cy:"10%",rx:"200",ry:"40",fill:"rgba(160,100,60,0.04)"}),[...Array(8)].map((s,e)=>M.jsx("line",{x1:"0",y1:`${(e+1)*12}%`,x2:"100%",y2:`${(e+1)*12}%`,stroke:"rgba(160,120,80,0.08)",strokeWidth:"0.5",strokeDasharray:"4 8"},`h${e}`))]}),[{top:"-6px",left:"30%",rotate:"-8deg"},{top:"-6px",right:"25%",rotate:"5deg"},{bottom:"-6px",left:"40%",rotate:"3deg"}].map((s,e)=>M.jsx("div",{className:"absolute w-12 h-5 opacity-20",style:{...s,transform:`rotate(${s.rotate})`,background:"rgba(200,180,120,0.6)",borderRadius:"1px"}},e)),M.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-20",style:{fontFamily:"'Caveat', cursive",color:"#b05030",fontSize:"16px"},children:"Picell3D"})]})}const n1=Object.freeze(Object.defineProperty({__proto__:null,THEMES:_c,applyTheme:G0,getTheme:lf},Symbol.toStringTag,{value:"Module"}));function i1(){const{setActiveTool:s,undo:e,redo:t,toggleGrid:i}=nt();Ce.useEffect(()=>{function o(a){if(!(a.target.tagName==="INPUT"||a.target.tagName==="TEXTAREA")){if(a.ctrlKey||a.metaKey){a.key==="z"&&(a.preventDefault(),e()),a.key==="y"&&(a.preventDefault(),t()),a.key==="Z"&&(a.preventDefault(),t());return}switch(a.key.toLowerCase()){case"p":s("pencil");break;case"e":s("eraser");break;case"f":s("fill");break;case"m":s("material");break;case"g":i();break}}}return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[s,e,t,i])}const r1=[{label:"8×8",w:8,h:8},{label:"16×16",w:16,h:16},{label:"32×32",w:32,h:32},{label:"48×48",w:48,h:48},{label:"64×64",w:64,h:64},{label:"128×64",w:128,h:64},{label:"128×128",w:128,h:128}];function s1({onClose:s}){const{canvasWidth:e,canvasHeight:t,resizeCanvas:i}=nt(),[o,a]=Ce.useState(e),[c,u]=Ce.useState(t);function f(){const y=Math.max(4,Math.min(256,parseInt(o)||e)),w=Math.max(4,Math.min(256,parseInt(c)||t));i(y,w),s()}function h(y){a(y.w),u(y.h)}const p=o>e,m=c>t,x=o===e&&c===t;return M.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.6)"},onClick:y=>{y.target===y.currentTarget&&s()},children:M.jsxs("div",{className:"panel-riveted relative flex flex-col gap-4 p-5 rounded-lg border border-border shadow-brass w-80",style:{background:"var(--color-surface)"},children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{className:"flex items-center gap-2 text-sm font-theme text-text tracking-wide",children:[M.jsx(L0,{size:15,className:"text-accent"}),"Canvas Size"]}),M.jsx("button",{className:"text-text-muted hover:text-text transition-colors",onClick:s,children:M.jsx(gs,{size:16})})]}),M.jsxs("div",{className:"flex items-center gap-2 text-xs text-text-muted",children:[M.jsxs("span",{className:"font-mono",children:[e,"×",t]}),M.jsx(A_,{size:12}),M.jsxs("span",{className:`font-mono font-medium ${x?"text-text-muted":"text-accent"}`,children:[Math.max(4,Math.min(256,parseInt(o)||e)),"×",Math.max(4,Math.min(256,parseInt(c)||t))]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"text-xs text-text-muted uppercase tracking-wide mb-2",children:"Presets"}),M.jsx("div",{className:"grid grid-cols-4 gap-1",children:r1.map(y=>{const w=y.w===e&&y.h===t,E=y.w===o&&y.h===c;return M.jsx("button",{className:`text-xs py-1 px-1 rounded border transition-colors ${E?"border-accent bg-accent/20 text-accent":w?"border-border/80 text-text":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,onClick:()=>h(y),children:y.label},y.label)})})]}),M.jsxs("div",{children:[M.jsx("div",{className:"text-xs text-text-muted uppercase tracking-wide mb-2",children:"Custom"}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsxs("div",{className:"flex-1",children:[M.jsx("label",{className:"text-xs text-text-muted block mb-1",children:"Width"}),M.jsx("input",{type:"number",min:4,max:256,value:o,onChange:y=>a(parseInt(y.target.value)||4),className:`w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent`})]}),M.jsx(gs,{size:12,className:"text-text-muted mt-4 flex-shrink-0"}),M.jsxs("div",{className:"flex-1",children:[M.jsx("label",{className:"text-xs text-text-muted block mb-1",children:"Height"}),M.jsx("input",{type:"number",min:4,max:256,value:c,onChange:y=>u(parseInt(y.target.value)||4),className:`w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent`})]})]})]}),M.jsx("div",{className:"text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5",style:{background:"color-mix(in srgb, var(--color-background) 60%, transparent)"},children:p||m?"Growing: existing content will be centered.":x?"Select a new size to resize the canvas.":"Shrinking: content is cropped from the right and bottom."}),M.jsxs("div",{className:"flex gap-2 justify-end pt-1",children:[M.jsx("button",{className:"text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors",onClick:s,children:"Cancel"}),M.jsx("button",{className:"btn-brass text-xs",disabled:x,onClick:f,style:{opacity:x?.5:1},children:"Apply"})]})]})})}function o1(s,e,t,i="fit"){return new Promise((o,a)=>{const c=URL.createObjectURL(s),u=new Image;u.onload=()=>{const f=document.createElement("canvas");f.width=e,f.height=t;const h=f.getContext("2d");h.clearRect(0,0,e,t);const p=u.naturalWidth,m=u.naturalHeight,x=p/m,y=e/t;if(i==="fit")if(x>y){const v=e/x;h.drawImage(u,0,(t-v)/2,e,v)}else{const v=t*x;h.drawImage(u,(e-v)/2,0,v,t)}else if(i==="fill"){let v=0,_=0,b=p,L=m;x>y?(b=m*y,v=(p-b)/2):(L=p/y,_=(m-L)/2),h.drawImage(u,v,_,b,L,0,0,e,t)}else h.drawImage(u,0,0,e,t);const{data:w}=h.getImageData(0,0,e,t),E=Array.from({length:t},(v,_)=>Array.from({length:e},(b,L)=>{const T=(_*e+L)*4;return w[T+3]<16?null:"#"+w[T].toString(16).padStart(2,"0")+w[T+1].toString(16).padStart(2,"0")+w[T+2].toString(16).padStart(2,"0")}));URL.revokeObjectURL(c),o(E)},u.onerror=()=>{URL.revokeObjectURL(c),a(new Error("Failed to load image"))},u.src=c})}function a1(s){return new Promise((e,t)=>{const i=URL.createObjectURL(s),o=new Image;o.onload=()=>e({src:i,naturalWidth:o.naturalWidth,naturalHeight:o.naturalHeight}),o.onerror=()=>{URL.revokeObjectURL(i),t(new Error("Failed to load image"))},o.src=i})}const l1=[{id:"fit",label:"Fit"},{id:"fill",label:"Fill"},{id:"stretch",label:"Stretch"}];function c1({onClose:s}){const{canvasWidth:e,canvasHeight:t,depthDimension:i,setReferenceImage:o}=nt(),[a,c]=Ce.useState("pixelart"),[u,f]=Ce.useState(null),[h,p]=Ce.useState(null),[m,x]=Ce.useState("fit"),[y,w]=Ce.useState(40),[E,v]=Ce.useState(!1),_=Ce.useRef(null);async function b(R){if(R){p(R);try{const N=await a1(R);f(N)}catch{}}}async function L(){if(h){v(!0);try{const R=await o1(h,e,t,m),{layers:N,activeLayerId:k,depthDimension:D}=nt.getState(),P=N.findIndex(le=>le.id===k);if(P<0)return;const O=Math.floor(D/2),q=N[P];nt.getState().pushUndo();const W=q.voxels.map((le,V)=>le.map((ne,ie)=>{var Te;const B=(Te=R[V])==null?void 0:Te[ie];if(!B)return ne;const ee=[...ne];return ee[O]=B,ee})),oe=[...N];oe[P]={...q,voxels:W},nt.setState({layers:oe});const ce=[...new Set(R.flat().filter(Boolean))],{addToPalette:ue}=nt.getState();ce.forEach(ue),s()}finally{v(!1)}}}function T(){if(!u)return;const R=u.naturalWidth/u.naturalHeight,N=t,k=Math.min(e,N*R);o({src:u.src,x:(e-k)/2,y:0,width:k,height:N,opacity:y/100}),s()}const U=Math.floor(i/2);return M.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.75)"},onClick:R=>R.target===R.currentTarget&&s(),children:M.jsxs("div",{className:"w-96 rounded-lg border border-border shadow-2xl overflow-hidden",style:{background:"var(--color-surface)"},children:[M.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border",children:[M.jsx("span",{className:"text-sm font-theme text-text",children:"Import Image"}),M.jsx("button",{onClick:s,className:"text-text-muted hover:text-text text-xl leading-none",children:"×"})]}),M.jsx("div",{className:"flex border-b border-border",children:[{id:"pixelart",Icon:N0,label:"Pixel Art"},{id:"reference",Icon:lc,label:"Reference"}].map(({id:R,Icon:N,label:k})=>M.jsxs("button",{onClick:()=>c(R),className:`flex items-center gap-1.5 px-4 py-2 text-xs border-b-2 transition-colors ${a===R?"border-accent text-accent":"border-transparent text-text-muted hover:text-text"}`,children:[M.jsx(N,{size:11})," ",k]},R))}),M.jsxs("div",{className:"p-4 flex flex-col gap-4",children:[M.jsxs("div",{className:"flex flex-col items-center justify-center rounded border-2 border-dashed cursor-pointer transition-colors",style:{borderColor:u?"var(--color-accent)":"var(--color-border)",background:"color-mix(in srgb, var(--color-background) 70%, transparent)",minHeight:120},onClick:()=>{var R;return(R=_.current)==null?void 0:R.click()},children:[u?M.jsx("img",{src:u.src,alt:"preview",className:"max-h-28 max-w-full object-contain rounded",style:{imageRendering:"pixelated"}}):M.jsxs(M.Fragment,{children:[M.jsx(Dy,{size:22,className:"text-text-muted mb-2"}),M.jsx("span",{className:"text-xs text-text-muted",children:"Click to select image"}),M.jsx("span",{className:"text-xs text-text-muted opacity-50 mt-0.5",children:"PNG · JPG · GIF · WebP"})]}),M.jsx("input",{ref:_,type:"file",accept:"image/*",className:"hidden",onChange:R=>{var N;return b((N=R.target.files)==null?void 0:N[0])}})]}),a==="pixelart"&&M.jsxs("div",{className:"flex flex-col gap-3",children:[M.jsxs("div",{children:[M.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide mb-1.5 block",children:"Scale Mode"}),M.jsx("div",{className:"grid grid-cols-3 gap-1",children:l1.map(({id:R,label:N})=>M.jsx("button",{onClick:()=>x(R),className:`text-xs py-1 rounded border transition-colors ${m===R?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:N},R))})]}),M.jsxs("p",{className:"text-xs text-text-muted opacity-60 leading-relaxed",children:["Painted onto active layer at depth center (z=",U,"). Canvas: ",e,"×",t,"."]})]}),a==="reference"&&M.jsxs("div",{className:"flex flex-col gap-3",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[M.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Opacity"}),M.jsxs("span",{className:"text-xs font-mono text-accent",children:[y,"%"]})]}),M.jsx("input",{type:"range",min:5,max:90,value:y,onChange:R=>w(Number(R.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}})]}),M.jsx("p",{className:"text-xs text-text-muted opacity-60 leading-relaxed",children:"Overlay on the canvas. Drag to reposition, drag corners to resize."})]}),M.jsxs("div",{className:"flex gap-2 justify-end pt-1",children:[M.jsx("button",{onClick:s,className:"text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors",children:"Cancel"}),M.jsx("button",{onClick:a==="pixelart"?L:T,disabled:!u||E,className:"btn-brass text-xs px-3 py-1.5 disabled:opacity-40 disabled:cursor-not-allowed",children:E?"Importing…":"Import"})]})]})]})})}function ig({value:s,onChange:e}){return M.jsx("button",{role:"switch","aria-checked":s,onClick:()=>e(!s),style:{width:36,height:20,borderRadius:10,padding:2,background:s?"var(--color-accent)":"var(--color-border)",transition:"background .2s",flexShrink:0,display:"flex",alignItems:"center"},children:M.jsx("div",{style:{width:16,height:16,borderRadius:"50%",background:"#fff",transform:s?"translateX(16px)":"translateX(0)",transition:"transform .2s",flexShrink:0,boxShadow:"0 1px 3px rgba(0,0,0,.4)"}})})}function rr({label:s,hint:e,children:t}){return M.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-border/40",children:[M.jsxs("div",{className:"flex flex-col gap-0.5",children:[M.jsx("span",{className:"text-sm text-text",children:s}),e&&M.jsx("span",{className:"text-xs text-text-muted opacity-60",children:e})]}),M.jsx("div",{className:"flex items-center gap-2 ml-4 flex-shrink-0",children:t})]})}function xs({title:s,children:e}){return M.jsxs("div",{className:"mb-6",children:[M.jsx("div",{className:"text-xs uppercase tracking-widest text-text-muted mb-1 pb-1",children:s}),e]})}function rg({value:s,onChange:e,min:t=1,max:i=256,step:o=1}){return M.jsx("input",{type:"number",min:t,max:i,step:o,value:s,onChange:a=>e(Math.max(t,Math.min(i,Number(a.target.value)||t))),className:"w-16 text-center text-xs font-mono rounded border border-border text-text bg-transparent outline-none focus:border-accent transition-colors py-1"})}function j0({options:s,value:e,onChange:t}){return M.jsx("div",{className:"flex rounded border border-border overflow-hidden",children:s.map(({id:i,Icon:o,label:a})=>M.jsxs("button",{onClick:()=>t(i),title:a,className:`flex items-center gap-1 px-2 py-1 text-xs transition-colors ${e===i?"bg-accent/20 text-accent border-r border-border last:border-r-0":"text-text-muted hover:text-text border-r border-border last:border-r-0"}`,children:[M.jsx(o,{size:11}),M.jsx("span",{children:a})]},i))})}function u1(){const{showGrid:s,toggleGrid:e,showDepthText:t,setShowDepthText:i,viewMode:o,setViewMode:a,pixelSize:c,setPixelSize:u}=nt();return M.jsxs(M.Fragment,{children:[M.jsxs(xs,{title:"Canvas View",children:[M.jsx(rr,{label:"Show grid",hint:"Grid lines on the 2D canvas",children:M.jsx(ig,{value:s,onChange:e})}),M.jsx(rr,{label:"Depth labels",hint:"Show depth offset number on each painted pixel",children:M.jsx(ig,{value:t,onChange:i})})]}),M.jsxs(xs,{title:"Default Layout",children:[M.jsx(rr,{label:"View mode",hint:"Starting layout on app load",children:M.jsx(j0,{value:o,onChange:a,options:[{id:"canvas-only",Icon:U0,label:"2D"},{id:"split",Icon:P0,label:"Split"},{id:"preview-only",Icon:ms,label:"3D"}]})}),M.jsx(rr,{label:"Zoom level",hint:`Current: ${c}px per cell`,children:M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("button",{onClick:()=>u(c-2),className:"w-6 h-6 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors text-sm",children:"−"}),M.jsx("span",{className:"text-xs font-mono text-accent w-8 text-center",children:c}),M.jsx("button",{onClick:()=>u(c+2),className:"w-6 h-6 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors text-sm",children:"+"})]})})]})]})}function d1(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,resizeCanvas:i,setDepthDimension:o}=nt(),[a,c]=Ce.useState(s),[u,f]=Ce.useState(e);function h(){(a!==s||u!==e)&&i(a,u)}const p=[4,5,8,16,24,32];return M.jsxs(M.Fragment,{children:[M.jsx(xs,{title:"Canvas Size",children:M.jsx(rr,{label:"Width × Height",hint:"Resize the current canvas (content is preserved)",children:M.jsxs("div",{className:"flex items-center gap-1.5",children:[M.jsx(rg,{value:a,onChange:c,min:4,max:256}),M.jsx("span",{className:"text-text-muted text-xs",children:"×"}),M.jsx(rg,{value:u,onChange:f,min:4,max:256}),M.jsx("button",{onClick:h,className:"text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-accent hover:border-accent transition-colors",children:"Apply"})]})})}),M.jsxs(xs,{title:"Depth Dimension",children:[M.jsx(rr,{label:"Depth (Z)",hint:"Number of voxel layers along the depth axis",children:M.jsx("div",{className:"flex items-center gap-1 flex-wrap justify-end",children:p.map(m=>M.jsx("button",{onClick:()=>o(m),className:`text-xs px-1.5 py-0.5 rounded border transition-colors ${t===m?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:m},m))})}),M.jsx(rr,{label:"",hint:"",children:M.jsxs("div",{className:"w-full flex flex-col gap-1",style:{minWidth:180},children:[M.jsx("input",{type:"range",min:4,max:128,value:t,onChange:m=>o(parseInt(m.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}}),M.jsxs("div",{className:"flex justify-between text-xs text-text-muted",children:[M.jsx("span",{children:"4"}),M.jsx("span",{className:"text-accent font-mono",children:t}),M.jsx("span",{children:"128"})]})]})})]})]})}function f1(){const{paintDepth:s,setPaintDepth:e,paintDirection:t,setPaintDirection:i,depthDimension:o}=nt(),a=Math.ceil(o/2);return M.jsx(M.Fragment,{children:M.jsxs(xs,{title:"Brush",children:[M.jsx(rr,{label:"Paint depth",hint:"Number of voxel layers painted per stroke from front/back view",children:M.jsx("div",{className:"flex flex-col gap-1",style:{minWidth:180},children:M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("input",{type:"range",min:1,max:a,value:s,onChange:c=>e(parseInt(c.target.value)),className:"flex-1 cursor-pointer",style:{accentColor:"var(--color-accent)"}}),M.jsx("span",{className:"text-xs font-mono text-accent w-5 text-right",children:s})]})})}),M.jsx(rr,{label:"Paint direction",hint:"Which direction from center to extend the brush",children:M.jsx(j0,{value:t,onChange:i,options:[{id:"front",Icon:cc,label:"← Front"},{id:"both",Icon:cc,label:"↔ Both"},{id:"back",Icon:cc,label:"Back →"}]})})]})})}function h1({onClose:s}){const{clearCanvas:e,resizeCanvas:t,setDepthDimension:i,setPaintDepth:o,setPaintDirection:a,setViewMode:c,setPixelSize:u,toggleGrid:f,showGrid:h,setShowDepthText:p}=nt(),[m,x]=Ce.useState(null);function y(v,_){m===v?(_(),x(null)):x(v)}function w(){t(32,32),i(5),o(1),a("both"),c("split"),u(14),h||f(),p(!0),x(null)}const E=({id:v,label:_,sublabel:b,action:L})=>M.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-border/40",children:[M.jsxs("div",{className:"flex flex-col gap-0.5",children:[M.jsx("span",{className:"text-sm text-text",children:_}),b&&M.jsx("span",{className:"text-xs text-text-muted opacity-60",children:b})]}),M.jsx("button",{onClick:()=>y(v,L),className:`text-xs px-3 py-1.5 rounded border transition-colors ${m===v?"border-red-500 bg-red-950 text-red-400":"border-border text-text-muted hover:border-red-700 hover:text-red-400"}`,children:m===v?"Confirm":"Reset"})]});return M.jsxs(M.Fragment,{children:[M.jsxs(xs,{title:"Canvas",children:[M.jsx(E,{id:"clear",label:"Clear canvas",sublabel:"Erase all painted voxels on the active layer",action:e}),M.jsx(E,{id:"size",label:"Reset canvas size",sublabel:"Set canvas back to 32×32×5",action:()=>{t(32,32),i(5)}})]}),M.jsx(xs,{title:"Settings",children:M.jsx(E,{id:"all",label:"Reset all settings",sublabel:"Restore display, canvas and painting settings to defaults",action:w})}),m&&M.jsxs("p",{className:"text-xs text-text-muted opacity-60 mt-1",children:["Click the button again to confirm.",M.jsx("button",{onClick:()=>x(null),className:"ml-2 text-accent hover:underline",children:"Cancel"})]})]})}const sg=[{id:"display",label:"Display",Icon:D0},{id:"canvas",label:"Canvas",Icon:Z_},{id:"painting",label:"Painting",Icon:I0},{id:"reset",label:"Reset",Icon:xy}];function p1({onClose:s}){const[e,t]=Ce.useState("display"),i=sg.find(o=>o.id===e);return M.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.75)"},onClick:o=>o.target===o.currentTarget&&s(),children:M.jsxs("div",{className:"flex rounded-xl border border-border shadow-2xl overflow-hidden",style:{width:580,maxHeight:"85vh",background:"var(--color-surface)"},children:[M.jsxs("div",{className:"flex flex-col flex-shrink-0 py-3",style:{width:160,background:"color-mix(in srgb, var(--color-background) 55%, transparent)",borderRight:"1px solid var(--color-border)"},children:[M.jsx("div",{className:"px-4 pb-3 pt-1",children:M.jsx("span",{className:"text-xs uppercase tracking-widest font-theme",style:{color:"var(--color-accent)",opacity:.8},children:"Settings"})}),sg.map(({id:o,label:a,Icon:c})=>M.jsxs("button",{onClick:()=>t(o),className:"flex items-center gap-2.5 px-4 py-2.5 text-xs transition-colors text-left relative",style:{color:e===o?"var(--color-accent)":"var(--color-text-muted)",background:e===o?"color-mix(in srgb, var(--color-accent) 10%, transparent)":"transparent",borderRight:e===o?"2px solid var(--color-accent)":"2px solid transparent"},children:[M.jsx(c,{size:13}),a]},o))]}),M.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[M.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 flex-shrink-0",style:{borderBottom:"1px solid var(--color-border)"},children:[M.jsxs("div",{className:"flex items-center gap-2",children:[i&&M.jsx(i.Icon,{size:14,className:"text-accent"}),M.jsx("span",{className:"text-sm font-theme text-text",children:i==null?void 0:i.label})]}),M.jsx("button",{onClick:s,className:"text-text-muted hover:text-text transition-colors",children:M.jsx(gs,{size:15})})]}),M.jsxs("div",{className:"flex-1 overflow-y-auto px-5 py-4",style:{minHeight:0},children:[e==="display"&&M.jsx(u1,{}),e==="canvas"&&M.jsx(d1,{}),e==="painting"&&M.jsx(f1,{}),e==="reset"&&M.jsx(h1,{onClose:s})]})]})]})})}const m1=[{id:"front",label:"Front"},{id:"back",label:"Back"},{id:"left",label:"Left"},{id:"right",label:"Right"},{id:"top",label:"Top"},{id:"bottom",label:"Bottom"}],g1=[4,8,16,32];function x1({onClose:s}){const{layers:e,canvasWidth:t,canvasHeight:i,depthDimension:o}=nt(),[a,c]=Ce.useState(["front"]),[u,f]=Ce.useState(8),[h,p]=Ce.useState("transparent"),[m,x]=Ce.useState("#000000"),y=Ce.useRef(null);function w(_){c(b=>b.includes(_)?b.length>1?b.filter(L=>L!==_):b:[...b,_])}function E(_){var D;const b=Ci(e,t,i,o),L=u,T=a.map(P=>{const{w:O,h:q}=Lc(P,t,i,o);return{id:P,cols:O,rows:q,pw:O*L,ph:q*L}}),U=T.reduce((P,O)=>P+O.pw,0),R=Math.max(...T.map(P=>P.ph));_.width=U,_.height=R;const N=_.getContext("2d");N.clearRect(0,0,U,R),h==="color"&&(N.fillStyle=m,N.fillRect(0,0,U,R));let k=0;for(const{id:P,cols:O,rows:q,pw:W,ph:oe}of T){const ce=Zf(b,P,t,i,o),ue=Math.floor((R-oe)/2);for(let le=0;le<q;le++)for(let V=0;V<O;V++){const ne=(D=ce[le])==null?void 0:D[V];!ne||ne==="transparent"||(N.fillStyle=ne,N.fillRect(k+V*L,ue+le*L,L,L))}k+=W}}Ce.useEffect(()=>{y.current&&E(y.current)});function v(){const _=document.createElement("canvas");E(_);const b=_.toDataURL("image/png"),L=document.createElement("a");L.href=b,L.download=a.length===1?`picell3d-${a[0]}.png`:"picell3d-spritesheet.png",L.click(),s()}return M.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.75)"},onClick:_=>_.target===_.currentTarget&&s(),children:M.jsxs("div",{className:"rounded-lg border border-border shadow-2xl overflow-hidden",style:{background:"var(--color-surface)",width:540},children:[M.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border",children:[M.jsx("span",{className:"text-sm font-theme text-text",children:"Export PNG"}),M.jsx("button",{onClick:s,className:"text-text-muted hover:text-text transition-colors",children:M.jsx(gs,{size:16})})]}),M.jsxs("div",{className:"flex gap-4 p-4",children:[M.jsxs("div",{className:"flex flex-col gap-4",style:{width:180},children:[M.jsxs("div",{children:[M.jsx("div",{className:"text-xs uppercase tracking-wide text-text-muted mb-2",children:"Views"}),M.jsx("div",{className:"grid grid-cols-2 gap-1",children:m1.map(({id:_,label:b})=>M.jsx("button",{onClick:()=>w(_),className:`text-xs py-1.5 px-2 rounded border transition-colors text-left ${a.includes(_)?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/40"}`,children:b},_))})]}),M.jsxs("div",{children:[M.jsx("div",{className:"text-xs uppercase tracking-wide text-text-muted mb-2",children:"Pixel Scale"}),M.jsx("div",{className:"grid grid-cols-4 gap-1",children:g1.map(_=>M.jsxs("button",{onClick:()=>f(_),className:`text-xs py-1 rounded border transition-colors ${u===_?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,children:[_,"x"]},_))})]}),M.jsxs("div",{children:[M.jsx("div",{className:"text-xs uppercase tracking-wide text-text-muted mb-2",children:"Background"}),M.jsxs("div",{className:"flex flex-col gap-1",children:[[{id:"transparent",label:"Transparent"},{id:"color",label:"Color"}].map(({id:_,label:b})=>M.jsx("button",{onClick:()=>p(_),className:`text-xs py-1.5 px-2 rounded border transition-colors text-left ${h===_?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/40"}`,children:b},_)),h==="color"&&M.jsx("input",{type:"color",value:m,onChange:_=>x(_.target.value),className:"w-full h-7 rounded border border-border cursor-pointer mt-0.5"})]})]}),M.jsx("div",{className:"text-xs text-text-muted opacity-50 leading-relaxed",children:a.length>1?`${a.length} views → spritesheet`:"Single view export"})]}),M.jsxs("div",{className:"flex flex-col gap-2 flex-1 min-w-0",children:[M.jsx("div",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Preview"}),M.jsx("div",{className:"flex-1 flex items-center justify-center rounded border border-border overflow-hidden",style:{minHeight:200,background:h==="color"?m:"repeating-conic-gradient(#2a2a2a 0% 25%, #1a1a1a 0% 50%) 0 0 / 14px 14px"},children:M.jsx("canvas",{ref:y,style:{imageRendering:"pixelated",maxWidth:"100%",maxHeight:260}})})]})]}),M.jsxs("div",{className:"flex justify-end gap-2 px-4 py-3 border-t border-border",children:[M.jsx("button",{onClick:s,className:"text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors",children:"Cancel"}),M.jsxs("button",{onClick:v,className:"btn-brass flex items-center gap-1.5 text-xs px-3 py-1.5",children:[M.jsx(Kf,{size:13}),a.length>1?"Export Spritesheet":"Export PNG"]})]})]})})}const v1=[{id:"pencil",Icon:I0,label:"Pencil (P)",key:"P"},{id:"eraser",Icon:O_,label:"Eraser (E)",key:"E"},{id:"fill",Icon:ny,label:"Fill (F)",key:"F"},{id:"material",Icon:by,label:"Material (M)",key:"M"}],_1=[{id:"canvas-only",Icon:U0,label:"2D only"},{id:"split",Icon:P0,label:"Split view"},{id:"preview-only",Icon:ms,label:"3D only"}];function y1({onExport:s,onRender:e}){const{activeTool:t,setActiveTool:i,pixelSize:o,setPixelSize:a,toggleGrid:c,showGrid:u,clearCanvas:f,undo:h,redo:p,viewMode:m,setViewMode:x}=nt(),[y,w]=Ce.useState(!1),[E,v]=Ce.useState(!1),[_,b]=Ce.useState(!1),[L,T]=Ce.useState(!1);return M.jsxs(M.Fragment,{children:[y&&M.jsx(s1,{onClose:()=>w(!1)}),E&&M.jsx(c1,{onClose:()=>v(!1)}),_&&M.jsx(p1,{onClose:()=>b(!1)}),L&&M.jsx(x1,{onClose:()=>T(!1)}),M.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 border-b border-border",style:{background:"var(--color-surfaceAlt)"},children:[M.jsxs("div",{className:"flex items-center gap-2 mr-3 pr-3 border-r border-border",children:[M.jsx("span",{className:"font-theme text-text text-sm tracking-wider",children:"Picell3D"}),M.jsx("button",{onClick:()=>b(!0),title:"Settings",className:"flex items-center justify-center w-6 h-6 rounded border border-transparent text-text-muted hover:text-accent hover:border-accent/50 transition-colors",children:M.jsx(Sy,{size:13})})]}),M.jsx("div",{className:"flex items-center gap-0.5 mr-2 pr-2 border-r border-border",children:v1.map(U=>M.jsx(S1,{Icon:U.Icon,label:U.label,active:t===U.id,onClick:()=>i(U.id)},U.id))}),M.jsxs("div",{className:"flex items-center gap-1 mr-2 pr-2 border-r border-border",children:[M.jsx("button",{className:"text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors",onClick:()=>a(o-2),title:"Zoom out",children:"−"}),M.jsxs("span",{className:"text-xs text-text-muted font-mono w-8 text-center",children:[o,"px"]}),M.jsx("button",{className:"text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors",onClick:()=>a(o+2),title:"Zoom in",children:"+"})]}),M.jsxs("button",{className:`flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors mr-2 ${u?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,onClick:c,title:"Toggle grid (G)",children:[M.jsx(W_,{size:12})," Grid"]}),M.jsx("div",{className:"flex items-center gap-0.5 mr-2 pr-2 border-r border-border",children:_1.map(({id:U,Icon:R,label:N})=>M.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center border transition-colors ${m===U?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,onClick:()=>x(U),title:N,children:M.jsx(R,{size:14})},U))}),M.jsxs("button",{className:"flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors mr-2",onClick:()=>w(!0),title:"Canvas size",children:[M.jsx(L0,{size:12}),M.jsx("span",{children:"Size"})]}),M.jsxs("button",{className:"flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors mr-2",onClick:()=>v(!0),title:"Import image",children:[M.jsx(Y_,{size:12}),M.jsx("span",{children:"Import"})]}),M.jsxs("div",{className:"flex items-center gap-0.5 mr-auto",children:[M.jsx(wd,{Icon:Ly,label:"Undo (Ctrl+Z)",onClick:h}),M.jsx(wd,{Icon:my,label:"Redo (Ctrl+Y)",onClick:p}),M.jsx(wd,{Icon:F0,label:"Clear canvas",onClick:f,danger:!0})]}),M.jsxs("div",{className:"flex items-center gap-1.5 ml-auto",children:[M.jsxs("button",{className:"btn-brass flex items-center gap-1.5",onClick:()=>T(!0),title:"Export as PNG",children:[M.jsx(Kf,{size:14}),M.jsx("span",{children:"Export PNG"})]}),M.jsxs("button",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-medium transition-all",style:{borderColor:"var(--color-accent)",color:"var(--color-accent)",background:"color-mix(in srgb, var(--color-accent) 12%, transparent)"},onClick:e,title:"Open Render Studio",children:[M.jsx(T_,{size:14}),M.jsx("span",{children:"Render"})]})]})]})]})}function S1({Icon:s,label:e,active:t,onClick:i}){return M.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center transition-all border ${t?"border-accent bg-accent/20 text-accent shadow-glow-accent":"border-transparent text-text-muted hover:border-border hover:text-text hover:bg-surface-alt"}`,title:e,onClick:i,children:M.jsx(s,{size:16})})}function wd({Icon:s,label:e,onClick:t,danger:i}){return M.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center border border-transparent transition-colors ${i?"text-text-muted hover:border-red-900 hover:bg-red-950 hover:text-red-400":"text-text-muted hover:text-text hover:bg-surface-alt hover:border-border"}`,title:e,onClick:t,children:M.jsx(s,{size:16})})}function M1(){const{activeTheme:s,setActiveTheme:e}=nt();return M.jsxs("div",{className:"flex items-center gap-1.5 px-2",children:[M.jsx("span",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Theme"}),M.jsx("div",{className:"flex gap-1",children:Object.values(_c).map(t=>M.jsx("button",{className:`text-xs px-2 py-0.5 rounded border transition-all ${s===t.id?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,onClick:()=>e(t.id),title:t.name,children:t.name},t.id))})]})}function E1(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,activeTool:i,activeView:o,paintDepth:a}=nt(),c=["P: Pencil","E: Eraser","F: Fill","G: Grid","Ctrl+Z: Undo"];return M.jsxs("div",{className:"flex items-center justify-between px-3 py-0.5 border-t border-border text-xs text-text-muted",style:{background:"var(--color-surface)"},children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsxs("span",{className:"font-mono",children:[s,"×",e,"×",t]}),M.jsx("span",{className:"capitalize",children:i}),M.jsx("span",{className:"text-accent capitalize",children:o}),M.jsxs("span",{children:["depth: ",a]})]}),M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsx(M1,{}),M.jsx("div",{className:"hidden lg:flex gap-3 opacity-50",children:c.map(u=>M.jsx("span",{children:u},u))})]})]})}function w1(s,e,t,i){const o=[];let a=Math.abs(t-s),c=s<t?1:-1,u=-Math.abs(i-e),f=e<i?1:-1,h=a+u;for(;o.push({col:s,row:e}),!(s===t&&e===i);){const p=2*h;p>=u&&(h+=u,s+=c),p<=a&&(h+=a,e+=f)}return o}function T1(s){const e=Ce.useRef(!1),t=Ce.useRef(null),i=Ce.useCallback(f=>{const{pixelSize:h}=nt.getState(),p=s.current.getBoundingClientRect(),m=Math.floor((f.clientX-p.left)/h),x=Math.floor((f.clientY-p.top)/h);return{col:m,row:x}},[]),o=Ce.useCallback(({col:f,row:h})=>{const p=nt.getState(),{activeTool:m,currentColor:x,activeView:y,canvasWidth:w,canvasHeight:E,depthDimension:v}=p,{w:_,h:b}=Lc(y,w,E,v);if(!(f<0||h<0||f>=_||h>=b))switch(m){case"pencil":p.paintAt(f,h,x);break;case"eraser":p.paintAt(f,h,"transparent");break;case"material":p.paintMaterialAt(f,h);break}},[]),a=Ce.useCallback(f=>{var m;if(f.button!==0)return;try{(m=s.current)==null||m.setPointerCapture(f.pointerId)}catch{}const h=nt.getState(),p=i(f);if(h.activeTool==="fill"){h.floodFillVoxel(p.col,p.row,h.currentColor);return}e.current=!0,t.current=p,(h.activeTool==="pencil"||h.activeTool==="eraser"||h.activeTool==="material")&&h.pushUndo(),o(p)},[i,o]),c=Ce.useCallback(f=>{if(!e.current)return;const h=i(f),p=t.current;if(!p||h.col===p.col&&h.row===p.row)return;const m=w1(p.col,p.row,h.col,h.row);for(const x of m)o(x);t.current=h},[i,o]),u=Ce.useCallback(()=>{e.current=!1,t.current=null},[]);return{onPointerDown:a,onPointerMove:c,onPointerUp:u}}function b1({pixelSize:s}){const{referenceImage:e,setReferenceImage:t,clearReferenceImage:i}=nt(),o=Ce.useRef(null);if(!e)return null;const{src:a,x:c,y:u,width:f,height:h,opacity:p}=e,m=c*s,x=u*s,y=f*s,w=h*s;function E(U){U.stopPropagation(),U.currentTarget.setPointerCapture(U.pointerId),o.current={mode:"move",sx:U.clientX,sy:U.clientY,ox:c,oy:u}}function v(U,R){U.stopPropagation(),U.currentTarget.setPointerCapture(U.pointerId),o.current={mode:"resize",corner:R,sx:U.clientX,sy:U.clientY,ox:c,oy:u,ow:f,oh:h}}function _(U){if(!o.current)return;const R=(U.clientX-o.current.sx)/s,N=(U.clientY-o.current.sy)/s,k=o.current;if(k.mode==="move"){t({...e,x:k.ox+R,y:k.oy+N});return}const D=k.ow/k.oh;let P=k.ow,O=k.oh,q=k.ox,W=k.oy;k.corner==="br"?(P=Math.max(2,k.ow+R),O=P/D):k.corner==="bl"?(P=Math.max(2,k.ow-R),O=P/D,q=k.ox+k.ow-P):k.corner==="tr"?(P=Math.max(2,k.ow+R),O=P/D,W=k.oy+k.oh-O):k.corner==="tl"&&(P=Math.max(2,k.ow-R),O=P/D,q=k.ox+k.ow-P,W=k.oy+k.oh-O),t({...e,x:q,y:W,width:P,height:O})}function b(){o.current=null}const L={position:"absolute",width:10,height:10,background:"var(--color-accent)",border:"2px solid #fff",borderRadius:2,zIndex:2},T=[{id:"tl",style:{top:-5,left:-5,cursor:"nwse-resize"}},{id:"tr",style:{top:-5,right:-5,cursor:"nesw-resize"}},{id:"bl",style:{bottom:-5,left:-5,cursor:"nesw-resize"}},{id:"br",style:{bottom:-5,right:-5,cursor:"nwse-resize"}}];return M.jsxs("div",{style:{position:"absolute",left:m,top:x,width:y,height:w,zIndex:12,touchAction:"none"},onPointerMove:_,onPointerUp:b,onPointerLeave:b,children:[M.jsx("img",{src:a,draggable:!1,onPointerDown:E,style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:p,objectFit:"fill",cursor:"move",userSelect:"none",imageRendering:"pixelated",display:"block"}}),M.jsx("div",{style:{position:"absolute",inset:0,border:"1px dashed var(--color-accent)",opacity:.7,pointerEvents:"none"}}),T.map(({id:U,style:R})=>M.jsx("div",{style:{...L,...R},onPointerDown:N=>v(N,U)},U)),M.jsxs("div",{style:{position:"absolute",top:-30,left:0,display:"flex",alignItems:"center",gap:6,background:"color-mix(in srgb, var(--color-surface) 95%, transparent)",border:"1px solid var(--color-border)",borderRadius:4,padding:"3px 8px",whiteSpace:"nowrap",fontSize:10,color:"var(--color-text-muted)"},onPointerDown:U=>U.stopPropagation(),children:[M.jsx(cc,{size:9,style:{flexShrink:0}}),M.jsx("input",{type:"range",min:5,max:90,value:Math.round(p*100),onChange:U=>t({...e,opacity:U.target.value/100}),style:{width:72,accentColor:"var(--color-accent)",cursor:"pointer"},title:"Opacity"}),M.jsxs("span",{style:{fontFamily:"monospace",color:"var(--color-accent)",minWidth:28},children:[Math.round(p*100),"%"]}),M.jsx("button",{onClick:i,title:"Remove reference",style:{color:"var(--color-text-muted)",lineHeight:1,padding:"0 2px"},className:"hover:text-red-400",children:M.jsx(gs,{size:11})})]})]})}function Td(s){return getComputedStyle(document.documentElement).getPropertyValue(s).trim()}const A1={front:"← left   right →",back:"← right  left →",left:"← front  back →",right:"← back   front →",top:"← left   right →",bottom:"← left   right →"};function C1(){const s=Ce.useRef(null),e=Ce.useRef(null),{layers:t,pixelSize:i,canvasWidth:o,canvasHeight:a,depthDimension:c,showGrid:u,showDepthText:f,activeTool:h,activeView:p}=nt(),m=c,{view2d:x,depthMap:y}=Ce.useMemo(()=>{const L=Ci(t,o,a,m);return{view2d:Zf(L,p,o,a,m),depthMap:Gy(L,p,o,a,m)}},[t,p,o,a,m]),{w,h:E}=Lc(p,o,a,m),{onPointerDown:v,onPointerMove:_,onPointerUp:b}=T1(e);return Ce.useEffect(()=>{var O,q,W,oe,ce,ue,le;const L=s.current;if(!L||!x.length)return;const T=L.getContext("2d"),U=w*i,R=E*i;L.width=U,L.height=R;const N=Td("--color-surface")||"#1a130a",k=Td("--color-canvasBg")||"#241a0c",D=Td("--color-border")||"#7a5c2e";for(let V=0;V<E;V++)for(let ne=0;ne<w;ne++){const ie=ne*i,B=V*i,ee=((O=x[V])==null?void 0:O[ne])??"transparent";T.fillStyle=ee==="transparent"?(ne+V)%2===0?N:k:ee,T.fillRect(ie,B,i,i)}if(y.length)for(let ie=0;ie<E;ie++)for(let B=0;B<w;B++){const ee=(q=y[ie])==null?void 0:q[B];if(ee==null)continue;const Te=B*i,Z=ie*i,fe=(W=y[ie])==null?void 0:W[B-1],ve=(oe=y[ie])==null?void 0:oe[B+1],xe=(ce=y[ie-1])==null?void 0:ce[B],Ae=(ue=y[ie+1])==null?void 0:ue[B],De=(vt,pt,Dt,X,Zt)=>{const ut=T.createLinearGradient(vt,pt,Dt,X);ut.addColorStop(0,`rgba(0,0,0,${Zt.toFixed(3)})`),ut.addColorStop(1,"rgba(0,0,0,0)"),T.fillStyle=ut,T.fillRect(Te,Z,i,i)},We=i*.6;if(fe!=null&&fe<ee){const vt=Math.min((ee-fe)/m,1)*.65;De(Te,Z,Te+We,Z,vt)}if(xe!=null&&xe<ee){const vt=Math.min((ee-xe)/m,1)*.65;De(Te,Z,Te,Z+We,vt)}if(ve!=null&&ve<ee){const vt=Math.min((ee-ve)/m,1)*.65;De(Te+i,Z,Te+i-We,Z,vt)}if(Ae!=null&&Ae<ee){const vt=Math.min((ee-Ae)/m,1)*.65;De(Te,Z+i,Te,Z+i-We,vt)}}if(u&&i>=5){T.strokeStyle=D+"44",T.lineWidth=.5;for(let V=0;V<=w;V++)T.beginPath(),T.moveTo(V*i,0),T.lineTo(V*i,R),T.stroke();for(let V=0;V<=E;V++)T.beginPath(),T.moveTo(0,V*i),T.lineTo(U,V*i),T.stroke()}if(f&&i>=10&&y.length){const V=Math.max(7,Math.floor(i*.38));T.font=`bold ${V}px monospace`,T.textAlign="center",T.textBaseline="middle";for(let ne=0;ne<E;ne++)for(let ie=0;ie<w;ie++){const B=(le=y[ne])==null?void 0:le[ie];if(B==null)continue;const ee=ie*i+i/2,Te=ne*i+i/2,Z=B>0?`+${B}`:String(B);T.fillStyle="rgba(0,0,0,0.55)",T.fillText(Z,ee+.5,Te+.5),T.fillStyle="rgba(255,255,255,0.85)",T.fillText(Z,ee,Te)}}const P=A1[p];P&&U>60&&(T.font=`${Math.max(8,i*.55)}px monospace`,T.fillStyle=D+"aa",T.textAlign="left",T.textBaseline="top",T.fillText(P,4,4))},[x,y,w,E,i,u,f,p]),M.jsx("div",{className:"flex items-center justify-center w-full h-full overflow-auto p-4",children:M.jsxs("div",{ref:e,className:"relative flex-shrink-0",style:{boxShadow:"0 0 0 2px var(--color-border), 0 0 0 4px var(--color-surface), 0 8px 40px rgba(0,0,0,0.9)",cursor:R1(h)},onPointerDown:v,onPointerMove:_,onPointerUp:b,onPointerLeave:b,children:[M.jsx("canvas",{ref:s,style:{width:w*i,height:E*i,imageRendering:"pixelated",display:"block"}}),M.jsx(b1,{pixelSize:i})]})})}function R1(s){switch(s){case"pencil":return"crosshair";case"eraser":return"cell";case"fill":return"copy";default:return"crosshair"}}const P1="modulepreload",L1=function(s){return"/"+s},og={},N1=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),f=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));o=c(t.map(h=>{if(h=L1(h),h in og)return;og[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const x=document.createElement("link");if(x.rel=p?"stylesheet":P1,p||(x.as="script"),x.crossOrigin="",x.href=h,f&&x.setAttribute("nonce",f),document.head.appendChild(x),p)return new Promise((y,w)=>{x.addEventListener("load",y),x.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return o.then(c=>{for(const u of c||[])u.status==="rejected"&&a(u.reason);return e().catch(a)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="170",mo={ROTATE:0,DOLLY:1,PAN:2},fo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},D1=0,ag=1,I1=2,W0=1,U1=2,tr=3,Hr=0,Yn=1,di=2,ar=0,go=1,cf=2,lg=3,cg=4,k1=5,hs=100,F1=101,O1=102,z1=103,B1=104,V1=200,H1=201,G1=202,j1=203,uf=204,df=205,W1=206,X1=207,Y1=208,$1=209,q1=210,K1=211,Z1=212,Q1=213,J1=214,ff=0,hf=1,pf=2,So=3,mf=4,gf=5,xf=6,vf=7,Jf=0,eS=1,tS=2,lr=0,nS=1,iS=2,rS=3,X0=4,sS=5,oS=6,aS=7,Y0=300,Mo=301,Eo=302,_f=303,yf=304,Dc=306,yc=1e3,Br=1001,Sc=1002,mi=1003,$0=1004,xa=1005,Ai=1006,uc=1007,Vr=1008,dr=1009,q0=1010,K0=1011,Ea=1012,eh=1013,vs=1014,sr=1015,cr=1016,th=1017,nh=1018,wo=1020,Z0=35902,Q0=1021,J0=1022,hi=1023,ex=1024,tx=1025,xo=1026,To=1027,nx=1028,ih=1029,ix=1030,rh=1031,sh=1033,dc=33776,fc=33777,hc=33778,pc=33779,Sf=35840,Mf=35841,Ef=35842,wf=35843,Tf=36196,bf=37492,Af=37496,Cf=37808,Rf=37809,Pf=37810,Lf=37811,Nf=37812,Df=37813,If=37814,Uf=37815,kf=37816,Ff=37817,Of=37818,zf=37819,Bf=37820,Vf=37821,mc=36492,Hf=36494,Gf=36495,rx=36283,jf=36284,Wf=36285,Xf=36286,lS=2300,cS=2301,uS=3200,dS=3201,oh=0,fS=1,ir="",Wn="srgb",Co="srgb-linear",Ic="linear",kt="srgb",Ys=7680,ug=519,hS=512,pS=513,mS=514,sx=515,gS=516,xS=517,vS=518,_S=519,dg=35044,fg="300 es",or=2e3,Mc=2001;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hg=1234567;const vo=Math.PI/180,wa=180/Math.PI;function Ro(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function Tn(s,e,t){return Math.max(e,Math.min(t,s))}function ah(s,e){return(s%e+e)%e}function yS(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function SS(s,e,t){return s!==e?(t-s)/(e-s):0}function Ma(s,e,t){return(1-t)*s+t*e}function MS(s,e,t,i){return Ma(s,e,1-Math.exp(-t*i))}function ES(s,e=1){return e-Math.abs(ah(s,e*2)-e)}function wS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function TS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function bS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function AS(s,e){return s+Math.random()*(e-s)}function CS(s){return s*(.5-Math.random())}function RS(s){s!==void 0&&(hg=s);let e=hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function PS(s){return s*vo}function LS(s){return s*wa}function NS(s){return(s&s-1)===0&&s!==0}function DS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function IS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function US(s,e,t,i,o){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),h=a((e+i)/2),p=c((e+i)/2),m=a((e-i)/2),x=c((e-i)/2),y=a((i-e)/2),w=c((i-e)/2);switch(o){case"XYX":s.set(u*p,f*m,f*x,u*h);break;case"YZY":s.set(f*x,u*p,f*m,u*h);break;case"ZXZ":s.set(f*m,f*x,u*p,u*h);break;case"XZX":s.set(u*p,f*w,f*y,u*h);break;case"YXY":s.set(f*y,u*p,f*w,u*h);break;case"ZYZ":s.set(f*w,f*y,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ec={DEG2RAD:vo,RAD2DEG:wa,generateUUID:Ro,clamp:Tn,euclideanModulo:ah,mapLinear:yS,inverseLerp:SS,lerp:Ma,damp:MS,pingpong:ES,smoothstep:wS,smootherstep:TS,randInt:bS,randFloat:AS,randFloatSpread:CS,seededRandom:RS,degToRad:PS,radToDeg:LS,isPowerOfTwo:NS,ceilPowerOfTwo:DS,floorPowerOfTwo:IS,setQuaternionFromProperEuler:US,normalize:Pn,denormalize:uo};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,t,i,o,a,c,u,f,h){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,h)}set(e,t,i,o,a,c,u,f,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],h=i[1],p=i[4],m=i[7],x=i[2],y=i[5],w=i[8],E=o[0],v=o[3],_=o[6],b=o[1],L=o[4],T=o[7],U=o[2],R=o[5],N=o[8];return a[0]=c*E+u*b+f*U,a[3]=c*v+u*L+f*R,a[6]=c*_+u*T+f*N,a[1]=h*E+p*b+m*U,a[4]=h*v+p*L+m*R,a[7]=h*_+p*T+m*N,a[2]=x*E+y*b+w*U,a[5]=x*v+y*L+w*R,a[8]=x*_+y*T+w*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*f+o*a*h-o*c*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=p*c-u*h,x=u*f-p*a,y=h*a-c*f,w=t*m+i*x+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=m*E,e[1]=(o*h-p*i)*E,e[2]=(u*i-o*c)*E,e[3]=x*E,e[4]=(p*t-o*f)*E,e[5]=(o*a-u*t)*E,e[6]=y*E,e[7]=(i*f-h*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*c+h*u)+c+e,-o*h,o*f,-o*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(bd.makeScale(e,t)),this}rotate(e){return this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bd=new xt;function ox(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kS(){const s=wc("canvas");return s.style.display="block",s}const pg={};function va(s){s in pg||(pg[s]=!0,console.warn(s))}function FS(s,e,t){return new Promise(function(i,o){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function OS(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zS(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ct={enabled:!0,workingColorSpace:Co,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===kt&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===kt&&(s.r=_o(s.r),s.g=_o(s.g),s.b=_o(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ir?Ic:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ur(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _o(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const mg=[.64,.33,.3,.6,.15,.06],gg=[.2126,.7152,.0722],xg=[.3127,.329],vg=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_g=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ct.define({[Co]:{primaries:mg,whitePoint:xg,transfer:Ic,toXYZ:vg,fromXYZ:_g,luminanceCoefficients:gg,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:mg,whitePoint:xg,transfer:kt,toXYZ:vg,fromXYZ:_g,luminanceCoefficients:gg,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}});let $s;class BS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$s===void 0&&($s=wc("canvas")),$s.width=e.width,$s.height=e.height;const i=$s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=ur(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VS=0;class lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Ad(o[c].image)):a.push(Ad(o[c]))}else a=Ad(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ad(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?BS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HS=0;class Un extends ys{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,i=Br,o=Br,a=Ai,c=Vr,u=hi,f=dr,h=Un.DEFAULT_ANISOTROPY,p=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Ro(),this.name="",this.source=new lh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Y0;Un.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,i=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,h=f[0],p=f[4],m=f[8],x=f[1],y=f[5],w=f[9],E=f[2],v=f[6],_=f[10];if(Math.abs(p-x)<.01&&Math.abs(m-E)<.01&&Math.abs(w-v)<.01){if(Math.abs(p+x)<.1&&Math.abs(m+E)<.1&&Math.abs(w+v)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,T=(y+1)/2,U=(_+1)/2,R=(p+x)/4,N=(m+E)/4,k=(w+v)/4;return L>T&&L>U?L<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(L),o=R/i,a=N/i):T>U?T<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(T),i=R/o,a=k/o):U<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(U),i=N/a,o=k/a),this.set(i,o,a,t),this}let b=Math.sqrt((v-w)*(v-w)+(m-E)*(m-E)+(x-p)*(x-p));return Math.abs(b)<.001&&(b=1),this.x=(v-w)/b,this.y=(m-E)/b,this.z=(x-p)/b,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GS extends ys{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Un(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends GS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ax extends Un{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jS extends Un{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let f=i[o+0],h=i[o+1],p=i[o+2],m=i[o+3];const x=a[c+0],y=a[c+1],w=a[c+2],E=a[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=x,e[t+1]=y,e[t+2]=w,e[t+3]=E;return}if(m!==E||f!==x||h!==y||p!==w){let v=1-u;const _=f*x+h*y+p*w+m*E,b=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const U=Math.sqrt(L),R=Math.atan2(U,_*b);v=Math.sin(v*R)/U,u=Math.sin(u*R)/U}const T=u*b;if(f=f*v+x*T,h=h*v+y*T,p=p*v+w*T,m=m*v+E*T,v===1-u){const U=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=U,h*=U,p*=U,m*=U}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],f=i[o+1],h=i[o+2],p=i[o+3],m=a[c],x=a[c+1],y=a[c+2],w=a[c+3];return e[t]=u*w+p*m+f*y-h*x,e[t+1]=f*w+p*x+h*m-u*y,e[t+2]=h*w+p*y+u*x-f*m,e[t+3]=p*w-u*m-f*x-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(i/2),p=u(o/2),m=u(a/2),x=f(i/2),y=f(o/2),w=f(a/2);switch(c){case"XYZ":this._x=x*p*m+h*y*w,this._y=h*y*m-x*p*w,this._z=h*p*w+x*y*m,this._w=h*p*m-x*y*w;break;case"YXZ":this._x=x*p*m+h*y*w,this._y=h*y*m-x*p*w,this._z=h*p*w-x*y*m,this._w=h*p*m+x*y*w;break;case"ZXY":this._x=x*p*m-h*y*w,this._y=h*y*m+x*p*w,this._z=h*p*w+x*y*m,this._w=h*p*m-x*y*w;break;case"ZYX":this._x=x*p*m-h*y*w,this._y=h*y*m+x*p*w,this._z=h*p*w-x*y*m,this._w=h*p*m+x*y*w;break;case"YZX":this._x=x*p*m+h*y*w,this._y=h*y*m+x*p*w,this._z=h*p*w-x*y*m,this._w=h*p*m-x*y*w;break;case"XZY":this._x=x*p*m-h*y*w,this._y=h*y*m-x*p*w,this._z=h*p*w+x*y*m,this._w=h*p*m+x*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],p=t[6],m=t[10],x=i+u+m;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(p-f)*y,this._y=(a-h)*y,this._z=(c-o)*y}else if(i>u&&i>m){const y=2*Math.sqrt(1+i-u-m);this._w=(p-f)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+h)/y}else if(u>m){const y=2*Math.sqrt(1+u-i-m);this._w=(a-h)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+m-i-u);this._w=(c-o)/y,this._x=(a+h)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+o*h-a*f,this._y=o*p+c*f+a*u-i*h,this._z=a*p+c*h+i*f-o*u,this._w=c*p-i*u-o*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+o*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*o+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),m=Math.sin((1-t)*p)/h,x=Math.sin(t*p)/h;return this._w=c*m+this._w*x,this._x=i*m+this._x*x,this._y=o*m+this._y*x,this._z=a*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*o-u*i),p=2*(u*t-a*o),m=2*(a*i-c*t);return this.x=t+f*h+c*m-u*p,this.y=i+f*p+u*h-a*m,this.z=o+f*m+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=o*f-a*u,this.y=a*c-i*f,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new K,yg=new Gr;class Ta{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,wi):wi.fromBufferAttribute(a,c),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Il.copy(i.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Ul.subVectors(this.max,ua),qs.subVectors(e.a,ua),Ks.subVectors(e.b,ua),Zs.subVectors(e.c,ua),Dr.subVectors(Ks,qs),Ir.subVectors(Zs,Ks),rs.subVectors(qs,Zs);let t=[0,-Dr.z,Dr.y,0,-Ir.z,Ir.y,0,-rs.z,rs.y,Dr.z,0,-Dr.x,Ir.z,0,-Ir.x,rs.z,0,-rs.x,-Dr.y,Dr.x,0,-Ir.y,Ir.x,0,-rs.y,rs.x,0];return!Rd(t,qs,Ks,Zs,Ul)||(t=[1,0,0,0,1,0,0,0,1],!Rd(t,qs,Ks,Zs,Ul))?!1:(kl.crossVectors(Dr,Ir),t=[kl.x,kl.y,kl.z],Rd(t,qs,Ks,Zs,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new K,new K,new K,new K,new K,new K,new K,new K],wi=new K,Il=new Ta,qs=new K,Ks=new K,Zs=new K,Dr=new K,Ir=new K,rs=new K,ua=new K,Ul=new K,kl=new K,ss=new K;function Rd(s,e,t,i,o){for(let a=0,c=s.length-3;a<=c;a+=3){ss.fromArray(s,a);const u=o.x*Math.abs(ss.x)+o.y*Math.abs(ss.y)+o.z*Math.abs(ss.z),f=e.dot(ss),h=t.dot(ss),p=i.dot(ss);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const WS=new Ta,da=new K,Pd=new K;class Uc{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):WS.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(da,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Pd)),this.expandByPoint(da.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new K,Ld=new K,Fl=new K,Ur=new K,Nd=new K,Ol=new K,Dd=new K;class kc{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Ld.copy(e).add(t).multiplyScalar(.5),Fl.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(Ld);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Fl),u=Ur.dot(this.direction),f=-Ur.dot(Fl),h=Ur.lengthSq(),p=Math.abs(1-c*c);let m,x,y,w;if(p>0)if(m=c*f-u,x=c*u-f,w=a*p,m>=0)if(x>=-w)if(x<=w){const E=1/p;m*=E,x*=E,y=m*(m+c*x+2*u)+x*(c*m+x+2*f)+h}else x=a,m=Math.max(0,-(c*x+u)),y=-m*m+x*(x+2*f)+h;else x=-a,m=Math.max(0,-(c*x+u)),y=-m*m+x*(x+2*f)+h;else x<=-w?(m=Math.max(0,-(-c*a+u)),x=m>0?-a:Math.min(Math.max(-a,-f),a),y=-m*m+x*(x+2*f)+h):x<=w?(m=0,x=Math.min(Math.max(-a,-f),a),y=x*(x+2*f)+h):(m=Math.max(0,-(c*a+u)),x=m>0?a:Math.min(Math.max(-a,-f),a),y=-m*m+x*(x+2*f)+h);else x=c>0?-a:a,m=Math.max(0,-(c*x+u)),y=-m*m+x*(x+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),o&&o.copy(Ld).addScaledVector(Fl,x),y}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),o=Zi.dot(Zi)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,x=this.origin;return h>=0?(i=(e.min.x-x.x)*h,o=(e.max.x-x.x)*h):(i=(e.max.x-x.x)*h,o=(e.min.x-x.x)*h),p>=0?(a=(e.min.y-x.y)*p,c=(e.max.y-x.y)*p):(a=(e.max.y-x.y)*p,c=(e.min.y-x.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),m>=0?(u=(e.min.z-x.z)*m,f=(e.max.z-x.z)*m):(u=(e.max.z-x.z)*m,f=(e.min.z-x.z)*m),i>f||u>o)||((u>i||i!==i)&&(i=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,o,a){Nd.subVectors(t,e),Ol.subVectors(i,e),Dd.crossVectors(Nd,Ol);let c=this.direction.dot(Dd),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Ur.subVectors(this.origin,e);const f=u*this.direction.dot(Ol.crossVectors(Ur,Ol));if(f<0)return null;const h=u*this.direction.dot(Nd.cross(Ur));if(h<0||f+h>c)return null;const p=-u*Ur.dot(Dd);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,i,o,a,c,u,f,h,p,m,x,y,w,E,v){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,h,p,m,x,y,w,E,v)}set(e,t,i,o,a,c,u,f,h,p,m,x,y,w,E,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=o,_[1]=a,_[5]=c,_[9]=u,_[13]=f,_[2]=h,_[6]=p,_[10]=m,_[14]=x,_[3]=y,_[7]=w,_[11]=E,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Qs.setFromMatrixColumn(e,0).length(),a=1/Qs.setFromMatrixColumn(e,1).length(),c=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(o),h=Math.sin(o),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const x=c*p,y=c*m,w=u*p,E=u*m;t[0]=f*p,t[4]=-f*m,t[8]=h,t[1]=y+w*h,t[5]=x-E*h,t[9]=-u*f,t[2]=E-x*h,t[6]=w+y*h,t[10]=c*f}else if(e.order==="YXZ"){const x=f*p,y=f*m,w=h*p,E=h*m;t[0]=x+E*u,t[4]=w*u-y,t[8]=c*h,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=y*u-w,t[6]=E+x*u,t[10]=c*f}else if(e.order==="ZXY"){const x=f*p,y=f*m,w=h*p,E=h*m;t[0]=x-E*u,t[4]=-c*m,t[8]=w+y*u,t[1]=y+w*u,t[5]=c*p,t[9]=E-x*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const x=c*p,y=c*m,w=u*p,E=u*m;t[0]=f*p,t[4]=w*h-y,t[8]=x*h+E,t[1]=f*m,t[5]=E*h+x,t[9]=y*h-w,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const x=c*f,y=c*h,w=u*f,E=u*h;t[0]=f*p,t[4]=E-x*m,t[8]=w*m+y,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=y*m+w,t[10]=x-E*m}else if(e.order==="XZY"){const x=c*f,y=c*h,w=u*f,E=u*h;t[0]=f*p,t[4]=-m,t[8]=h*p,t[1]=x*m+E,t[5]=c*p,t[9]=y*m-w,t[2]=w*m-y,t[6]=u*p,t[10]=E*m+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XS,e,YS)}lookAt(e,t,i){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),kr.crossVectors(i,Jn),kr.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),kr.crossVectors(i,Jn)),kr.normalize(),zl.crossVectors(Jn,kr),o[0]=kr.x,o[4]=zl.x,o[8]=Jn.x,o[1]=kr.y,o[5]=zl.y,o[9]=Jn.y,o[2]=kr.z,o[6]=zl.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],h=i[12],p=i[1],m=i[5],x=i[9],y=i[13],w=i[2],E=i[6],v=i[10],_=i[14],b=i[3],L=i[7],T=i[11],U=i[15],R=o[0],N=o[4],k=o[8],D=o[12],P=o[1],O=o[5],q=o[9],W=o[13],oe=o[2],ce=o[6],ue=o[10],le=o[14],V=o[3],ne=o[7],ie=o[11],B=o[15];return a[0]=c*R+u*P+f*oe+h*V,a[4]=c*N+u*O+f*ce+h*ne,a[8]=c*k+u*q+f*ue+h*ie,a[12]=c*D+u*W+f*le+h*B,a[1]=p*R+m*P+x*oe+y*V,a[5]=p*N+m*O+x*ce+y*ne,a[9]=p*k+m*q+x*ue+y*ie,a[13]=p*D+m*W+x*le+y*B,a[2]=w*R+E*P+v*oe+_*V,a[6]=w*N+E*O+v*ce+_*ne,a[10]=w*k+E*q+v*ue+_*ie,a[14]=w*D+E*W+v*le+_*B,a[3]=b*R+L*P+T*oe+U*V,a[7]=b*N+L*O+T*ce+U*ne,a[11]=b*k+L*q+T*ue+U*ie,a[15]=b*D+L*W+T*le+U*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],p=e[2],m=e[6],x=e[10],y=e[14],w=e[3],E=e[7],v=e[11],_=e[15];return w*(+a*f*m-o*h*m-a*u*x+i*h*x+o*u*y-i*f*y)+E*(+t*f*y-t*h*x+a*c*x-o*c*y+o*h*p-a*f*p)+v*(+t*h*m-t*u*y-a*c*m+i*c*y+a*u*p-i*h*p)+_*(-o*u*p-t*f*m+t*u*x+o*c*m-i*c*x+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=e[9],x=e[10],y=e[11],w=e[12],E=e[13],v=e[14],_=e[15],b=m*v*h-E*x*h+E*f*y-u*v*y-m*f*_+u*x*_,L=w*x*h-p*v*h-w*f*y+c*v*y+p*f*_-c*x*_,T=p*E*h-w*m*h+w*u*y-c*E*y-p*u*_+c*m*_,U=w*m*f-p*E*f-w*u*x+c*E*x+p*u*v-c*m*v,R=t*b+i*L+o*T+a*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=b*N,e[1]=(E*x*a-m*v*a-E*o*y+i*v*y+m*o*_-i*x*_)*N,e[2]=(u*v*a-E*f*a+E*o*h-i*v*h-u*o*_+i*f*_)*N,e[3]=(m*f*a-u*x*a-m*o*h+i*x*h+u*o*y-i*f*y)*N,e[4]=L*N,e[5]=(p*v*a-w*x*a+w*o*y-t*v*y-p*o*_+t*x*_)*N,e[6]=(w*f*a-c*v*a-w*o*h+t*v*h+c*o*_-t*f*_)*N,e[7]=(c*x*a-p*f*a+p*o*h-t*x*h-c*o*y+t*f*y)*N,e[8]=T*N,e[9]=(w*m*a-p*E*a-w*i*y+t*E*y+p*i*_-t*m*_)*N,e[10]=(c*E*a-w*u*a+w*i*h-t*E*h-c*i*_+t*u*_)*N,e[11]=(p*u*a-c*m*a-p*i*h+t*m*h+c*i*y-t*u*y)*N,e[12]=U*N,e[13]=(p*E*o-w*m*o+w*i*x-t*E*x-p*i*v+t*m*v)*N,e[14]=(w*u*o-c*E*o-w*i*f+t*E*f+c*i*v-t*u*v)*N,e[15]=(c*m*o-p*u*o+p*i*f-t*m*f-c*i*x+t*u*x)*N,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-o*f,h*f+o*u,0,h*u+o*f,p*u+i,p*f-o*c,0,h*f-o*u,p*f+o*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,p=c+c,m=u+u,x=a*h,y=a*p,w=a*m,E=c*p,v=c*m,_=u*m,b=f*h,L=f*p,T=f*m,U=i.x,R=i.y,N=i.z;return o[0]=(1-(E+_))*U,o[1]=(y+T)*U,o[2]=(w-L)*U,o[3]=0,o[4]=(y-T)*R,o[5]=(1-(x+_))*R,o[6]=(v+b)*R,o[7]=0,o[8]=(w+L)*N,o[9]=(v-b)*N,o[10]=(1-(x+E))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=Qs.set(o[0],o[1],o[2]).length();const c=Qs.set(o[4],o[5],o[6]).length(),u=Qs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],Ti.copy(this);const h=1/a,p=1/c,m=1/u;return Ti.elements[0]*=h,Ti.elements[1]*=h,Ti.elements[2]*=h,Ti.elements[4]*=p,Ti.elements[5]*=p,Ti.elements[6]*=p,Ti.elements[8]*=m,Ti.elements[9]*=m,Ti.elements[10]*=m,t.setFromRotationMatrix(Ti),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,o,a,c,u=or){const f=this.elements,h=2*a/(t-e),p=2*a/(i-o),m=(t+e)/(t-e),x=(i+o)/(i-o);let y,w;if(u===or)y=-(c+a)/(c-a),w=-2*c*a/(c-a);else if(u===Mc)y=-c/(c-a),w=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=or){const f=this.elements,h=1/(t-e),p=1/(i-o),m=1/(c-a),x=(t+e)*h,y=(i+o)*p;let w,E;if(u===or)w=(c+a)*m,E=-2*m;else if(u===Mc)w=a*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-x,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=E,f[14]=-w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qs=new K,Ti=new Bt,XS=new K(0,0,0),YS=new K(1,1,1),kr=new K,zl=new K,Jn=new K,Sg=new Bt,Mg=new Gr;class Pi{constructor(e=0,t=0,i=0,o=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],f=o[1],h=o[5],p=o[9],m=o[2],x=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Tn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $S=0;const Eg=new K,Js=new Gr,Qi=new Bt,Bl=new K,fa=new K,qS=new K,KS=new Gr,wg=new K(1,0,0),Tg=new K(0,1,0),bg=new K(0,0,1),Ag={type:"added"},ZS={type:"removed"},eo={type:"childadded",child:null},Id={type:"childremoved",child:null};class mn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new K,t=new Pi,i=new Gr,o=new K(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new xt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(Tg,e)}rotateZ(e){return this.rotateOnAxis(bg,e)}translateOnAxis(e,t){return Eg.copy(e).applyQuaternion(this.quaternion),this.position.add(Eg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(Tg,e)}translateZ(e){return this.translateOnAxis(bg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bl.copy(e):Bl.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(fa,Bl,this.up):Qi.lookAt(Bl,fa,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),Js.setFromRotationMatrix(Qi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),eo.child=e,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ZS),Id.child=e,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),eo.child=e,this.dispatchEvent(eo),eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,qS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,KS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),p=c(e.images),m=c(e.shapes),x=c(e.skeletons),y=c(e.animations),w=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),x.length>0&&(i.skeletons=x),y.length>0&&(i.animations=y),w.length>0&&(i.nodes=w)}return i.object=o,i;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}mn.DEFAULT_UP=new K(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new K,Ji=new K,Ud=new K,er=new K,to=new K,no=new K,Cg=new K,kd=new K,Fd=new K,Od=new K,zd=new $t,Bd=new $t,Vd=new $t;class fi{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),bi.subVectors(e,t),o.cross(bi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){bi.subVectors(o,t),Ji.subVectors(i,t),Ud.subVectors(e,t);const c=bi.dot(bi),u=bi.dot(Ji),f=bi.dot(Ud),h=Ji.dot(Ji),p=Ji.dot(Ud),m=c*h-u*u;if(m===0)return a.set(0,0,0),null;const x=1/m,y=(h*f-u*p)*x,w=(c*p-u*f)*x;return a.set(1-y-w,w,y)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,i,o,a,c,u,f){return this.getBarycoord(e,t,i,o,er)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,er.x),f.addScaledVector(c,er.y),f.addScaledVector(u,er.z),f)}static getInterpolatedAttribute(e,t,i,o,a,c){return zd.setScalar(0),Bd.setScalar(0),Vd.setScalar(0),zd.fromBufferAttribute(e,t),Bd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(zd,a.x),c.addScaledVector(Bd,a.y),c.addScaledVector(Vd,a.z),c}static isFrontFacing(e,t,i,o){return bi.subVectors(i,t),Ji.subVectors(e,t),bi.cross(Ji).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),bi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return fi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;to.subVectors(o,i),no.subVectors(a,i),kd.subVectors(e,i);const f=to.dot(kd),h=no.dot(kd);if(f<=0&&h<=0)return t.copy(i);Fd.subVectors(e,o);const p=to.dot(Fd),m=no.dot(Fd);if(p>=0&&m<=p)return t.copy(o);const x=f*m-p*h;if(x<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(i).addScaledVector(to,c);Od.subVectors(e,a);const y=to.dot(Od),w=no.dot(Od);if(w>=0&&y<=w)return t.copy(a);const E=y*h-f*w;if(E<=0&&h>=0&&w<=0)return u=h/(h-w),t.copy(i).addScaledVector(no,u);const v=p*w-y*m;if(v<=0&&m-p>=0&&y-w>=0)return Cg.subVectors(a,o),u=(m-p)/(m-p+(y-w)),t.copy(o).addScaledVector(Cg,u);const _=1/(v+E+x);return c=E*_,u=x*_,t.copy(i).addScaledVector(to,c).addScaledVector(no,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function Hd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Ct.workingColorSpace){if(e=ah(e,1),t=Tn(t,0,1),i=Tn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Hd(c,a,e+1/3),this.g=Hd(c,a,e),this.b=Hd(c,a,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,t=Wn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const i=lx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Ct.fromWorkingColorSpace(En.copy(this),e),Math.round(Tn(En.r*255,0,255))*65536+Math.round(Tn(En.g*255,0,255))*256+Math.round(Tn(En.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(En.copy(this),t);const i=En.r,o=En.g,a=En.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const m=c-u;switch(h=p<=.5?m/(c+u):m/(2-c-u),c){case i:f=(o-a)/m+(o<a?6:0);break;case o:f=(a-i)/m+2;break;case a:f=(i-o)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Wn){Ct.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,o=En.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(Vl);const i=Ma(Fr.h,Vl.h,t),o=Ma(Fr.s,Vl.s,t),a=Ma(Fr.l,Vl.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new ft;ft.NAMES=lx;let QS=0;class Ss extends ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Ro(),this.name="",this.blending=go,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=df,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(i.blending=this.blending),this.side!==Hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uf&&(i.blendSrc=this.blendSrc),this.blendDst!==df&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _s extends Ss{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new K,Hl=new et;class fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dg,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hl.fromBufferAttribute(this,t),Hl.applyMatrix3(e),this.setXY(t,Hl.x,Hl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=uo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),i=Pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),i=Pn(i,this.array),o=Pn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),i=Pn(i,this.array),o=Pn(o,this.array),a=Pn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dg&&(e.usage=this.usage),e}}class cx extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ux extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let JS=0;const ui=new Bt,Gd=new mn,io=new K,ei=new Ta,ha=new Ta,dn=new K;class $n extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ox(e)?ux:cx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new xt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return Gd.lookAt(e),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Kt(i,3))}else{for(let i=0,o=t.count;i<o;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];ha.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(ei.min,ha.min),ei.expandByPoint(dn),dn.addVectors(ei.max,ha.max),ei.expandByPoint(dn)):(ei.expandByPoint(ha.min),ei.expandByPoint(ha.max))}ei.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)dn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(dn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)dn.fromBufferAttribute(u,h),f&&(io.fromBufferAttribute(e,h),dn.add(io)),o=Math.max(o,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let k=0;k<i.count;k++)u[k]=new K,f[k]=new K;const h=new K,p=new K,m=new K,x=new et,y=new et,w=new et,E=new K,v=new K;function _(k,D,P){h.fromBufferAttribute(i,k),p.fromBufferAttribute(i,D),m.fromBufferAttribute(i,P),x.fromBufferAttribute(a,k),y.fromBufferAttribute(a,D),w.fromBufferAttribute(a,P),p.sub(h),m.sub(h),y.sub(x),w.sub(x);const O=1/(y.x*w.y-w.x*y.y);isFinite(O)&&(E.copy(p).multiplyScalar(w.y).addScaledVector(m,-y.y).multiplyScalar(O),v.copy(m).multiplyScalar(y.x).addScaledVector(p,-w.x).multiplyScalar(O),u[k].add(E),u[D].add(E),u[P].add(E),f[k].add(v),f[D].add(v),f[P].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,D=b.length;k<D;++k){const P=b[k],O=P.start,q=P.count;for(let W=O,oe=O+q;W<oe;W+=3)_(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const L=new K,T=new K,U=new K,R=new K;function N(k){U.fromBufferAttribute(o,k),R.copy(U);const D=u[k];L.copy(D),L.sub(U.multiplyScalar(U.dot(D))).normalize(),T.crossVectors(R,D);const O=T.dot(f[k])<0?-1:1;c.setXYZW(k,L.x,L.y,L.z,O)}for(let k=0,D=b.length;k<D;++k){const P=b[k],O=P.start,q=P.count;for(let W=O,oe=O+q;W<oe;W+=3)N(e.getX(W+0)),N(e.getX(W+1)),N(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let x=0,y=i.count;x<y;x++)i.setXYZ(x,0,0,0);const o=new K,a=new K,c=new K,u=new K,f=new K,h=new K,p=new K,m=new K;if(e)for(let x=0,y=e.count;x<y;x+=3){const w=e.getX(x+0),E=e.getX(x+1),v=e.getX(x+2);o.fromBufferAttribute(t,w),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,v),p.subVectors(c,a),m.subVectors(o,a),p.cross(m),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,v),u.add(p),f.add(p),h.add(p),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(v,h.x,h.y,h.z)}else for(let x=0,y=t.count;x<y;x+=3)o.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),p.subVectors(c,a),m.subVectors(o,a),p.cross(m),i.setXYZ(x+0,p.x,p.y,p.z),i.setXYZ(x+1,p.x,p.y,p.z),i.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,m=u.normalized,x=new h.constructor(f.length*p);let y=0,w=0;for(let E=0,v=f.length;E<v;E++){u.isInterleavedBufferAttribute?y=f[E]*u.data.stride+u.offset:y=f[E]*p;for(let _=0;_<p;_++)x[w++]=h[y++]}return new fn(x,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,o=this.attributes;for(const u in o){const f=o[u],h=e(f,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let p=0,m=h.length;p<m;p++){const x=h[p],y=e(x,i);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,x=h.length;m<x;m++){const y=h[m];p.push(y.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],m=a[h];for(let x=0,y=m.length;x<y;x++)p.push(m[x].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rg=new Bt,os=new kc,Gl=new Uc,Pg=new K,jl=new K,Wl=new K,Xl=new K,jd=new K,Yl=new K,Lg=new K,$l=new K;class In extends mn{constructor(e=new $n,t=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Yl.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=u[f],m=a[f];p!==0&&(jd.fromBufferAttribute(m,e),c?Yl.addScaledVector(jd,p):Yl.addScaledVector(jd.sub(t),p))}t.add(Yl)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(a),os.copy(e.ray).recast(e.near),!(Gl.containsPoint(os.origin)===!1&&(os.intersectSphere(Gl,Pg)===null||os.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Rg.copy(a).invert(),os.copy(e.ray).applyMatrix4(Rg),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,x=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let w=0,E=x.length;w<E;w++){const v=x[w],_=c[v.materialIndex],b=Math.max(v.start,y.start),L=Math.min(u.count,Math.min(v.start+v.count,y.start+y.count));for(let T=b,U=L;T<U;T+=3){const R=u.getX(T),N=u.getX(T+1),k=u.getX(T+2);o=ql(this,_,e,i,h,p,m,R,N,k),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),E=Math.min(u.count,y.start+y.count);for(let v=w,_=E;v<_;v+=3){const b=u.getX(v),L=u.getX(v+1),T=u.getX(v+2);o=ql(this,c,e,i,h,p,m,b,L,T),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let w=0,E=x.length;w<E;w++){const v=x[w],_=c[v.materialIndex],b=Math.max(v.start,y.start),L=Math.min(f.count,Math.min(v.start+v.count,y.start+y.count));for(let T=b,U=L;T<U;T+=3){const R=T,N=T+1,k=T+2;o=ql(this,_,e,i,h,p,m,R,N,k),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let v=w,_=E;v<_;v+=3){const b=v,L=v+1,T=v+2;o=ql(this,c,e,i,h,p,m,b,L,T),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function eM(s,e,t,i,o,a,c,u){let f;if(e.side===Yn?f=i.intersectTriangle(c,a,o,!0,u):f=i.intersectTriangle(o,a,c,e.side===Hr,u),f===null)return null;$l.copy(u),$l.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo($l);return h<t.near||h>t.far?null:{distance:h,point:$l.clone(),object:s}}function ql(s,e,t,i,o,a,c,u,f,h){s.getVertexPosition(u,jl),s.getVertexPosition(f,Wl),s.getVertexPosition(h,Xl);const p=eM(s,e,t,i,jl,Wl,Xl,Lg);if(p){const m=new K;fi.getBarycoord(Lg,jl,Wl,Xl,m),o&&(p.uv=fi.getInterpolatedAttribute(o,u,f,h,m,new et)),a&&(p.uv1=fi.getInterpolatedAttribute(a,u,f,h,m,new et)),c&&(p.normal=fi.getInterpolatedAttribute(c,u,f,h,m,new K),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const x={a:u,b:f,c:h,normal:new K,materialIndex:0};fi.getNormal(jl,Wl,Xl,x.normal),p.face=x,p.barycoord=m}return p}class Po extends $n{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],p=[],m=[];let x=0,y=0;w("z","y","x",-1,-1,i,t,e,c,a,0),w("z","y","x",1,-1,i,t,-e,c,a,1),w("x","z","y",1,1,e,i,t,o,c,2),w("x","z","y",1,-1,e,i,-t,o,c,3),w("x","y","z",1,-1,e,t,i,o,a,4),w("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(p,3)),this.setAttribute("uv",new Kt(m,2));function w(E,v,_,b,L,T,U,R,N,k,D){const P=T/N,O=U/k,q=T/2,W=U/2,oe=R/2,ce=N+1,ue=k+1;let le=0,V=0;const ne=new K;for(let ie=0;ie<ue;ie++){const B=ie*O-W;for(let ee=0;ee<ce;ee++){const Te=ee*P-q;ne[E]=Te*b,ne[v]=B*L,ne[_]=oe,h.push(ne.x,ne.y,ne.z),ne[E]=0,ne[v]=0,ne[_]=R>0?1:-1,p.push(ne.x,ne.y,ne.z),m.push(ee/N),m.push(1-ie/k),le+=1}}for(let ie=0;ie<k;ie++)for(let B=0;B<N;B++){const ee=x+B+ce*ie,Te=x+B+ce*(ie+1),Z=x+(B+1)+ce*(ie+1),fe=x+(B+1)+ce*ie;f.push(ee,Te,fe),f.push(Te,Z,fe),V+=6}u.addGroup(y,V,D),y+=V,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Ln(s){const e={};for(let t=0;t<s.length;t++){const i=bo(s[t]);for(const o in i)e[o]=i[o]}return e}function tM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Tc={clone:bo,merge:Ln};var nM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Ss{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nM,this.fragmentShader=iM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=tM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fx extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Or=new K,Ng=new et,Dg=new et;class Dn extends fx{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,Ng,Dg),t.subVectors(Dg,Ng)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*i/h,o*=c.width/f,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ro=-90,so=1;class rM extends mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Dn(ro,so,e,t);o.layers=this.layers,this.add(o);const a=new Dn(ro,so,e,t);a.layers=this.layers,this.add(a);const c=new Dn(ro,so,e,t);c.layers=this.layers,this.add(c);const u=new Dn(ro,so,e,t);u.layers=this.layers,this.add(u);const f=new Dn(ro,so,e,t);f.layers=this.layers,this.add(f);const h=new Dn(ro,so,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===or)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,p]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,u),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(m,x,y),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class hx extends Un{constructor(e,t,i,o,a,c,u,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Mo,super(e,t,i,o,a,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sM extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new hx(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Po(5,5,5),a=new Xn({name:"CubemapFromEquirect",uniforms:bo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:ar});a.uniforms.tEquirect.value=t;const c=new In(o,a),u=t.minFilter;return t.minFilter===Vr&&(t.minFilter=Ai),new rM(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}const Wd=new K,oM=new K,aM=new xt;class zr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Wd.subVectors(i,t).cross(oM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wd),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||aM.getNormalMatrix(e),o=this.coplanarPoint(Wd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Uc,Kl=new K;class uh{constructor(e=new zr,t=new zr,i=new zr,o=new zr,a=new zr,c=new zr){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=or){const i=this.planes,o=e.elements,a=o[0],c=o[1],u=o[2],f=o[3],h=o[4],p=o[5],m=o[6],x=o[7],y=o[8],w=o[9],E=o[10],v=o[11],_=o[12],b=o[13],L=o[14],T=o[15];if(i[0].setComponents(f-a,x-h,v-y,T-_).normalize(),i[1].setComponents(f+a,x+h,v+y,T+_).normalize(),i[2].setComponents(f+c,x+p,v+w,T+b).normalize(),i[3].setComponents(f-c,x-p,v-w,T-b).normalize(),i[4].setComponents(f-u,x-m,v-E,T-L).normalize(),t===or)i[5].setComponents(f+u,x+m,v+E,T+L).normalize();else if(t===Mc)i[5].setComponents(u,m,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Kl.x=o.normal.x>0?e.max.x:e.min.x,Kl.y=o.normal.y>0?e.max.y:e.min.y,Kl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function px(){let s=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function lM(s){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,m=h.byteLength,x=s.createBuffer();s.bindBuffer(f,x),s.bufferData(f,h,p),u.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,f,h){const p=f.array,m=f.updateRanges;if(s.bindBuffer(h,u),m.length===0)s.bufferSubData(h,0,p);else{m.sort((y,w)=>y.start-w.start);let x=0;for(let y=1;y<m.length;y++){const w=m[x],E=m[y];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++x,m[x]=E)}m.length=x+1;for(let y=0,w=m.length;y<w;y++){const E=m[y];s.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(s.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:o,remove:a,update:c}}class ba extends $n{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(o),h=u+1,p=f+1,m=e/u,x=t/f,y=[],w=[],E=[],v=[];for(let _=0;_<p;_++){const b=_*x-c;for(let L=0;L<h;L++){const T=L*m-a;w.push(T,-b,0),E.push(0,0,1),v.push(L/u),v.push(1-_/f)}}for(let _=0;_<f;_++)for(let b=0;b<u;b++){const L=b+h*_,T=b+h*(_+1),U=b+1+h*(_+1),R=b+1+h*_;y.push(L,T,R),y.push(T,U,R)}this.setIndex(y),this.setAttribute("position",new Kt(w,3)),this.setAttribute("normal",new Kt(E,3)),this.setAttribute("uv",new Kt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}var cM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uM=`#ifdef USE_ALPHAHASH
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
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
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
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xM=`#ifdef USE_BATCHING
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
#endif`,vM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MM=`#ifdef USE_IRIDESCENCE
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
#endif`,EM=`#ifdef USE_BUMPMAP
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
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,NM=`#define PI 3.141592653589793
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
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IM=`vec3 transformedNormal = objectNormal;
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
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KM=`#ifdef USE_GRADIENTMAP
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
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eE=`uniform bool receiveShadow;
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
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,nE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
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
#endif`,aE=`struct PhysicalMaterial {
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
}`,lE=`
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
#endif`,cE=`#if defined( RE_IndirectDiffuse )
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
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vE=`#if defined( USE_POINTS_UV )
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
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ME=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
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
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
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
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,YE=`float getShadowMask() {
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
}`,$E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qE=`#ifdef USE_SKINNING
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
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
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
#endif`,QE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ew=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nw=`#ifdef USE_TRANSMISSION
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
#endif`,iw=`#ifdef USE_TRANSMISSION
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cw=`uniform sampler2D t2D;
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
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`#include <common>
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
}`,mw=`#if DEPTH_PACKING == 3200
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
}`,gw=`#define DISTANCE
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
}`,xw=`#define DISTANCE
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
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`uniform float scale;
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
}`,Sw=`uniform vec3 diffuse;
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
}`,Mw=`#include <common>
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
}`,Ew=`uniform vec3 diffuse;
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
}`,ww=`#define LAMBERT
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
}`,Tw=`#define LAMBERT
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
}`,bw=`#define MATCAP
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
}`,Aw=`#define MATCAP
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
}`,Cw=`#define NORMAL
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
}`,Rw=`#define NORMAL
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
}`,Pw=`#define PHONG
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
}`,Lw=`#define PHONG
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
}`,Nw=`#define STANDARD
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
}`,Dw=`#define STANDARD
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
}`,Iw=`#define TOON
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
}`,Uw=`#define TOON
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
}`,kw=`uniform float size;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,Ow=`#include <common>
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
}`,zw=`uniform vec3 color;
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
}`,Bw=`uniform float rotation;
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
}`,Vw=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:cM,alphahash_pars_fragment:uM,alphamap_fragment:dM,alphamap_pars_fragment:fM,alphatest_fragment:hM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:xM,batching_vertex:vM,begin_vertex:_M,beginnormal_vertex:yM,bsdfs:SM,iridescence_fragment:MM,bumpmap_pars_fragment:EM,clipping_planes_fragment:wM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:bM,clipping_planes_vertex:AM,color_fragment:CM,color_pars_fragment:RM,color_pars_vertex:PM,color_vertex:LM,common:NM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:IM,displacementmap_pars_vertex:UM,displacementmap_vertex:kM,emissivemap_fragment:FM,emissivemap_pars_fragment:OM,colorspace_fragment:zM,colorspace_pars_fragment:BM,envmap_fragment:VM,envmap_common_pars_fragment:HM,envmap_pars_fragment:GM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:tE,envmap_vertex:WM,fog_vertex:XM,fog_pars_vertex:YM,fog_fragment:$M,fog_pars_fragment:qM,gradientmap_pars_fragment:KM,lightmap_pars_fragment:ZM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:JM,lights_pars_begin:eE,lights_toon_fragment:nE,lights_toon_pars_fragment:iE,lights_phong_fragment:rE,lights_phong_pars_fragment:sE,lights_physical_fragment:oE,lights_physical_pars_fragment:aE,lights_fragment_begin:lE,lights_fragment_maps:cE,lights_fragment_end:uE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:fE,logdepthbuf_pars_vertex:hE,logdepthbuf_vertex:pE,map_fragment:mE,map_pars_fragment:gE,map_particle_fragment:xE,map_particle_pars_fragment:vE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:yE,morphinstance_vertex:SE,morphcolor_vertex:ME,morphnormal_vertex:EE,morphtarget_pars_vertex:wE,morphtarget_vertex:TE,normal_fragment_begin:bE,normal_fragment_maps:AE,normal_pars_fragment:CE,normal_pars_vertex:RE,normal_vertex:PE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:DE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:UE,opaque_fragment:kE,packing:FE,premultiplied_alpha_fragment:OE,project_vertex:zE,dithering_fragment:BE,dithering_pars_fragment:VE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:WE,shadowmap_vertex:XE,shadowmask_pars_fragment:YE,skinbase_vertex:$E,skinning_pars_vertex:qE,skinning_vertex:KE,skinnormal_vertex:ZE,specularmap_fragment:QE,specularmap_pars_fragment:JE,tonemapping_fragment:ew,tonemapping_pars_fragment:tw,transmission_fragment:nw,transmission_pars_fragment:iw,uv_pars_fragment:rw,uv_pars_vertex:sw,uv_vertex:ow,worldpos_vertex:aw,background_vert:lw,background_frag:cw,backgroundCube_vert:uw,backgroundCube_frag:dw,cube_vert:fw,cube_frag:hw,depth_vert:pw,depth_frag:mw,distanceRGBA_vert:gw,distanceRGBA_frag:xw,equirect_vert:vw,equirect_frag:_w,linedashed_vert:yw,linedashed_frag:Sw,meshbasic_vert:Mw,meshbasic_frag:Ew,meshlambert_vert:ww,meshlambert_frag:Tw,meshmatcap_vert:bw,meshmatcap_frag:Aw,meshnormal_vert:Cw,meshnormal_frag:Rw,meshphong_vert:Pw,meshphong_frag:Lw,meshphysical_vert:Nw,meshphysical_frag:Dw,meshtoon_vert:Iw,meshtoon_frag:Uw,points_vert:kw,points_frag:Fw,shadow_vert:Ow,shadow_frag:zw,sprite_vert:Bw,sprite_frag:Vw},Ie={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Oi={basic:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ft(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Ln([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Ln([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ft(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Ln([Ie.points,Ie.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Ln([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Ln([Ie.common,Ie.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Ln([Ie.sprite,Ie.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Ln([Ie.common,Ie.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Ln([Ie.lights,Ie.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Oi.physical={uniforms:Ln([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Zl={r:0,b:0,g:0},ls=new Pi,Hw=new Bt;function Gw(s,e,t,i,o,a,c){const u=new ft(0);let f=a===!0?0:1,h,p,m=null,x=0,y=null;function w(b){let L=b.isScene===!0?b.background:null;return L&&L.isTexture&&(L=(b.backgroundBlurriness>0?t:e).get(L)),L}function E(b){let L=!1;const T=w(b);T===null?_(u,f):T&&T.isColor&&(_(T,1),L=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(b,L){const T=w(L);T&&(T.isCubeTexture||T.mapping===Dc)?(p===void 0&&(p=new In(new Po(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:bo(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),ls.copy(L.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Hw.makeRotationFromEuler(ls)),p.material.toneMapped=Ct.getTransfer(T.colorSpace)!==kt,(m!==T||x!==T.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,m=T,x=T.version,y=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new In(new ba(2,2),new Xn({name:"BackgroundMaterial",uniforms:bo(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(T.colorSpace)!==kt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(m!==T||x!==T.version||y!==s.toneMapping)&&(h.material.needsUpdate=!0,m=T,x=T.version,y=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function _(b,L){b.getRGB(Zl,dx(s)),i.buffers.color.setClear(Zl.r,Zl.g,Zl.b,L,c)}return{getClearColor:function(){return u},setClearColor:function(b,L=1){u.set(b),f=L,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,_(u,f)},render:E,addToRenderList:v}}function jw(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=x(null);let a=o,c=!1;function u(P,O,q,W,oe){let ce=!1;const ue=m(W,q,O);a!==ue&&(a=ue,h(a.object)),ce=y(P,W,q,oe),ce&&w(P,W,q,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,T(P,O,q,W),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function f(){return s.createVertexArray()}function h(P){return s.bindVertexArray(P)}function p(P){return s.deleteVertexArray(P)}function m(P,O,q){const W=q.wireframe===!0;let oe=i[P.id];oe===void 0&&(oe={},i[P.id]=oe);let ce=oe[O.id];ce===void 0&&(ce={},oe[O.id]=ce);let ue=ce[W];return ue===void 0&&(ue=x(f()),ce[W]=ue),ue}function x(P){const O=[],q=[],W=[];for(let oe=0;oe<t;oe++)O[oe]=0,q[oe]=0,W[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:W,object:P,attributes:{},index:null}}function y(P,O,q,W){const oe=a.attributes,ce=O.attributes;let ue=0;const le=q.getAttributes();for(const V in le)if(le[V].location>=0){const ie=oe[V];let B=ce[V];if(B===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(B=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(B=P.instanceColor)),ie===void 0||ie.attribute!==B||B&&ie.data!==B.data)return!0;ue++}return a.attributesNum!==ue||a.index!==W}function w(P,O,q,W){const oe={},ce=O.attributes;let ue=0;const le=q.getAttributes();for(const V in le)if(le[V].location>=0){let ie=ce[V];ie===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor));const B={};B.attribute=ie,ie&&ie.data&&(B.data=ie.data),oe[V]=B,ue++}a.attributes=oe,a.attributesNum=ue,a.index=W}function E(){const P=a.newAttributes;for(let O=0,q=P.length;O<q;O++)P[O]=0}function v(P){_(P,0)}function _(P,O){const q=a.newAttributes,W=a.enabledAttributes,oe=a.attributeDivisors;q[P]=1,W[P]===0&&(s.enableVertexAttribArray(P),W[P]=1),oe[P]!==O&&(s.vertexAttribDivisor(P,O),oe[P]=O)}function b(){const P=a.newAttributes,O=a.enabledAttributes;for(let q=0,W=O.length;q<W;q++)O[q]!==P[q]&&(s.disableVertexAttribArray(q),O[q]=0)}function L(P,O,q,W,oe,ce,ue){ue===!0?s.vertexAttribIPointer(P,O,q,oe,ce):s.vertexAttribPointer(P,O,q,W,oe,ce)}function T(P,O,q,W){E();const oe=W.attributes,ce=q.getAttributes(),ue=O.defaultAttributeValues;for(const le in ce){const V=ce[le];if(V.location>=0){let ne=oe[le];if(ne===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){const ie=ne.normalized,B=ne.itemSize,ee=e.get(ne);if(ee===void 0)continue;const Te=ee.buffer,Z=ee.type,fe=ee.bytesPerElement,ve=Z===s.INT||Z===s.UNSIGNED_INT||ne.gpuType===eh;if(ne.isInterleavedBufferAttribute){const xe=ne.data,Ae=xe.stride,De=ne.offset;if(xe.isInstancedInterleavedBuffer){for(let We=0;We<V.locationSize;We++)_(V.location+We,xe.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let We=0;We<V.locationSize;We++)v(V.location+We);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let We=0;We<V.locationSize;We++)L(V.location+We,B/V.locationSize,Z,ie,Ae*fe,(De+B/V.locationSize*We)*fe,ve)}else{if(ne.isInstancedBufferAttribute){for(let xe=0;xe<V.locationSize;xe++)_(V.location+xe,ne.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<V.locationSize;xe++)v(V.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let xe=0;xe<V.locationSize;xe++)L(V.location+xe,B/V.locationSize,Z,ie,B*fe,B/V.locationSize*xe*fe,ve)}}else if(ue!==void 0){const ie=ue[le];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(V.location,ie);break;case 3:s.vertexAttrib3fv(V.location,ie);break;case 4:s.vertexAttrib4fv(V.location,ie);break;default:s.vertexAttrib1fv(V.location,ie)}}}}b()}function U(){k();for(const P in i){const O=i[P];for(const q in O){const W=O[q];for(const oe in W)p(W[oe].object),delete W[oe];delete O[q]}delete i[P]}}function R(P){if(i[P.id]===void 0)return;const O=i[P.id];for(const q in O){const W=O[q];for(const oe in W)p(W[oe].object),delete W[oe];delete O[q]}delete i[P.id]}function N(P){for(const O in i){const q=i[O];if(q[P.id]===void 0)continue;const W=q[P.id];for(const oe in W)p(W[oe].object),delete W[oe];delete q[P.id]}}function k(){D(),c=!0,a!==o&&(a=o,h(a.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:k,resetDefaultState:D,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:v,disableUnusedAttributes:b}}function Ww(s,e,t){let i;function o(h){i=h}function a(h,p){s.drawArrays(i,h,p),t.update(p,i,1)}function c(h,p,m){m!==0&&(s.drawArraysInstanced(i,h,p,m),t.update(p,i,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,m);let y=0;for(let w=0;w<m;w++)y+=p[w];t.update(y,i,1)}function f(h,p,m,x){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<h.length;w++)c(h[w],p[w],x[w]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,p,0,x,0,m);let w=0;for(let E=0;E<m;E++)w+=p[E]*x[E];t.update(w,i,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Xw(s,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(N){return!(N!==hi&&i.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const k=N===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==dr&&i.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==sr&&!k)}function f(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=w>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:m,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:T,vertexTextures:U,maxSamples:R}}function Yw(s){const e=this;let t=null,i=0,o=!1,a=!1;const c=new zr,u=new xt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const y=m.length!==0||x||i!==0||o;return o=x,i=m.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,x){t=p(m,x,0)},this.setState=function(m,x,y){const w=m.clippingPlanes,E=m.clipIntersection,v=m.clipShadows,_=s.get(m);if(!o||w===null||w.length===0||a&&!v)a?p(null):h();else{const b=a?0:i,L=b*4;let T=_.clippingState||null;f.value=T,T=p(w,x,L,y);for(let U=0;U!==L;++U)T[U]=t[U];_.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,x,y,w){const E=m!==null?m.length:0;let v=null;if(E!==0){if(v=f.value,w!==!0||v===null){const _=y+E*4,b=x.matrixWorldInverse;u.getNormalMatrix(b),(v===null||v.length<_)&&(v=new Float32Array(_));for(let L=0,T=y;L!==E;++L,T+=4)c.copy(m[L]).applyMatrix4(b,u),c.normal.toArray(v,T),v[T+3]=c.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}function $w(s){let e=new WeakMap;function t(c,u){return u===_f?c.mapping=Mo:u===yf&&(c.mapping=Eo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===_f||u===yf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new sM(f.height);return h.fromEquirectangularTexture(s,c),e.set(c,h),c.addEventListener("dispose",o),t(h.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class dh extends fx{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ho=4,Ig=[.125,.215,.35,.446,.526,.582],ps=20,Xd=new dh,Ug=new ft;let Yd=null,$d=0,qd=0,Kd=!1;const ds=(1+Math.sqrt(5))/2,oo=1/ds,kg=[new K(-ds,oo,0),new K(ds,oo,0),new K(-oo,0,ds),new K(oo,0,ds),new K(0,ds,-oo),new K(0,ds,oo),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Yd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,$d,qd),this._renderer.xr.enabled=Kd,e.scissorTest=!1,Ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mo||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:cr,format:hi,colorSpace:Co,depthBuffer:!1},o=Og(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Og(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qw(a)),this._blurMaterial=Kw(a,e,t)}return o}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,Xd)}_sceneToCubeUV(e,t,i,o){const u=new Dn(90,1,t,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,x=p.toneMapping;p.getClearColor(Ug),p.toneMapping=lr,p.autoClear=!1;const y=new _s({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),w=new In(new Po,y);let E=!1;const v=e.background;v?v.isColor&&(y.color.copy(v),e.background=null,E=!0):(y.color.copy(Ug),E=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(u.up.set(0,f[_],0),u.lookAt(h[_],0,0)):b===1?(u.up.set(0,0,f[_]),u.lookAt(0,h[_],0)):(u.up.set(0,f[_],0),u.lookAt(0,0,h[_]));const L=this._cubeSize;Ql(o,b*L,_>2?L:0,L,L),p.setRenderTarget(o),E&&p.render(w,u),p.render(e,u)}w.geometry.dispose(),w.material.dispose(),p.toneMapping=x,p.autoClear=m,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Mo||e.mapping===Eo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zg());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new In(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;Ql(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Xd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=kg[(o-a-1)%kg.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new In(this._lodPlanes[o],h),x=h.uniforms,y=this._sizeLods[i]-1,w=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ps-1),E=a/w,v=isFinite(a)?1+Math.floor(p*E):ps;v>ps&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ps}`);const _=[];let b=0;for(let N=0;N<ps;++N){const k=N/E,D=Math.exp(-k*k/2);_.push(D),N===0?b+=D:N<v&&(b+=2*D)}for(let N=0;N<_.length;N++)_[N]=_[N]/b;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=_,x.latitudinal.value=c==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:L}=this;x.dTheta.value=w,x.mipInt.value=L-i;const T=this._sizeLods[o],U=3*T*(o>L-ho?o-L+ho:0),R=4*(this._cubeSize-T);Ql(t,U,R,3*T,2*T),f.setRenderTarget(t),f.render(m,Xd)}}function qw(s){const e=[],t=[],i=[];let o=s;const a=s-ho+1+Ig.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);t.push(u);let f=1/u;c>s-ho?f=Ig[c-s+ho-1]:c===0&&(f=0),i.push(f);const h=1/(u-2),p=-h,m=1+h,x=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,w=6,E=3,v=2,_=1,b=new Float32Array(E*w*y),L=new Float32Array(v*w*y),T=new Float32Array(_*w*y);for(let R=0;R<y;R++){const N=R%3*2/3-1,k=R>2?0:-1,D=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];b.set(D,E*w*R),L.set(x,v*w*R);const P=[R,R,R,R,R,R];T.set(P,_*w*R)}const U=new $n;U.setAttribute("position",new fn(b,E)),U.setAttribute("uv",new fn(L,v)),U.setAttribute("faceIndex",new fn(T,_)),e.push(U),o>ho&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Og(s,e,t){const i=new Ri(s,e,t);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ql(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function Kw(s,e,t){const i=new Float32Array(ps),o=new K(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:fh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function zg(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Bg(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function Zw(s){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===_f||f===yf,p=f===Mo||f===Eo;if(h||p){let m=e.get(u);const x=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return t===null&&(t=new Fg(s)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return h&&y&&y.height>0||p&&y&&o(y)?(t===null&&(t=new Fg(s)),m=h?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",a),m.texture):null}}}return u}function o(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Qw(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&va("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function Jw(s,e,t,i){const o={},a=new WeakMap;function c(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const E=x.morphAttributes[w];for(let v=0,_=E.length;v<_;v++)e.remove(E[v])}x.removeEventListener("dispose",c),delete o[x.id];const y=a.get(x);y&&(e.remove(y),a.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function u(m,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function f(m){const x=m.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER);const y=m.morphAttributes;for(const w in y){const E=y[w];for(let v=0,_=E.length;v<_;v++)e.update(E[v],s.ARRAY_BUFFER)}}function h(m){const x=[],y=m.index,w=m.attributes.position;let E=0;if(y!==null){const b=y.array;E=y.version;for(let L=0,T=b.length;L<T;L+=3){const U=b[L+0],R=b[L+1],N=b[L+2];x.push(U,R,R,N,N,U)}}else if(w!==void 0){const b=w.array;E=w.version;for(let L=0,T=b.length/3-1;L<T;L+=3){const U=L+0,R=L+1,N=L+2;x.push(U,R,R,N,N,U)}}else return;const v=new(ox(x)?ux:cx)(x,1);v.version=E;const _=a.get(m);_&&e.remove(_),a.set(m,v)}function p(m){const x=a.get(m);if(x){const y=m.index;y!==null&&x.version<y.version&&h(m)}else h(m);return a.get(m)}return{get:u,update:f,getWireframeAttribute:p}}function eT(s,e,t){let i;function o(x){i=x}let a,c;function u(x){a=x.type,c=x.bytesPerElement}function f(x,y){s.drawElements(i,y,a,x*c),t.update(y,i,1)}function h(x,y,w){w!==0&&(s.drawElementsInstanced(i,y,a,x*c,w),t.update(y,i,w))}function p(x,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,x,0,w);let v=0;for(let _=0;_<w;_++)v+=y[_];t.update(v,i,1)}function m(x,y,w,E){if(w===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<x.length;_++)h(x[_]/c,y[_],E[_]);else{v.multiDrawElementsInstancedWEBGL(i,y,0,a,x,0,E,0,w);let _=0;for(let b=0;b<w;b++)_+=y[b]*E[b];t.update(_,i,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function tT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(a/3);break;case s.LINES:t.lines+=u*(a/2);break;case s.LINE_STRIP:t.lines+=u*(a-1);break;case s.LINE_LOOP:t.lines+=u*a;break;case s.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function nT(s,e,t){const i=new WeakMap,o=new $t;function a(c,u,f){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let x=i.get(u);if(x===void 0||x.count!==m){let P=function(){k.dispose(),i.delete(u),u.removeEventListener("dispose",P)};var y=P;x!==void 0&&x.texture.dispose();const w=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let T=0;w===!0&&(T=1),E===!0&&(T=2),v===!0&&(T=3);let U=u.attributes.position.count*T,R=1;U>e.maxTextureSize&&(R=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const N=new Float32Array(U*R*4*m),k=new ax(N,U,R,m);k.type=sr,k.needsUpdate=!0;const D=T*4;for(let O=0;O<m;O++){const q=_[O],W=b[O],oe=L[O],ce=U*R*4*O;for(let ue=0;ue<q.count;ue++){const le=ue*D;w===!0&&(o.fromBufferAttribute(q,ue),N[ce+le+0]=o.x,N[ce+le+1]=o.y,N[ce+le+2]=o.z,N[ce+le+3]=0),E===!0&&(o.fromBufferAttribute(W,ue),N[ce+le+4]=o.x,N[ce+le+5]=o.y,N[ce+le+6]=o.z,N[ce+le+7]=0),v===!0&&(o.fromBufferAttribute(oe,ue),N[ce+le+8]=o.x,N[ce+le+9]=o.y,N[ce+le+10]=o.z,N[ce+le+11]=oe.itemSize===4?o.w:1)}}x={count:m,texture:k,size:new et(U,R)},i.set(u,x),u.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let w=0;for(let v=0;v<h.length;v++)w+=h[v];const E=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",h)}f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:a}}function iT(s,e,t,i){let o=new WeakMap;function a(f){const h=i.render.frame,p=f.geometry,m=e.get(f,p);if(o.get(m)!==h&&(e.update(m),o.set(m,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==h&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,h))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==h&&(x.update(),o.set(x,h))}return m}function c(){o=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}class mx extends Un{constructor(e,t,i,o,a,c,u,f,h,p=xo){if(p!==xo&&p!==To)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===xo&&(i=vs),i===void 0&&p===To&&(i=wo),super(null,o,a,c,u,f,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:mi,this.minFilter=f!==void 0?f:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gx=new Un,Vg=new mx(1,1),xx=new ax,vx=new jS,_x=new hx,Hg=[],Gg=[],jg=new Float32Array(16),Wg=new Float32Array(9),Xg=new Float32Array(4);function Lo(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=Hg[o];if(a===void 0&&(a=new Float32Array(o),Hg[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(a,u)}return a}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Fc(s,e){let t=Gg[e];t===void 0&&(t=new Int32Array(e),Gg[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function rT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function oT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function aT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function lT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Xg.set(i),s.uniformMatrix2fv(this.addr,!1,Xg),an(t,i)}}function cT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Wg.set(i),s.uniformMatrix3fv(this.addr,!1,Wg),an(t,i)}}function uT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;jg.set(i),s.uniformMatrix4fv(this.addr,!1,jg),an(t,i)}}function dT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function hT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function pT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function mT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function gT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function xT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function vT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function _T(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a;this.type===s.SAMPLER_2D_SHADOW?(Vg.compareFunction=sx,a=Vg):a=gx,t.setTexture2D(e||a,o)}function yT(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||vx,o)}function ST(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||_x,o)}function MT(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||xx,o)}function ET(s){switch(s){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return aT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return dT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return xT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}function wT(s,e){s.uniform1fv(this.addr,e)}function TT(s,e){const t=Lo(e,this.size,2);s.uniform2fv(this.addr,t)}function bT(s,e){const t=Lo(e,this.size,3);s.uniform3fv(this.addr,t)}function AT(s,e){const t=Lo(e,this.size,4);s.uniform4fv(this.addr,t)}function CT(s,e){const t=Lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function RT(s,e){const t=Lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function PT(s,e){const t=Lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function LT(s,e){s.uniform1iv(this.addr,e)}function NT(s,e){s.uniform2iv(this.addr,e)}function DT(s,e){s.uniform3iv(this.addr,e)}function IT(s,e){s.uniform4iv(this.addr,e)}function UT(s,e){s.uniform1uiv(this.addr,e)}function kT(s,e){s.uniform2uiv(this.addr,e)}function FT(s,e){s.uniform3uiv(this.addr,e)}function OT(s,e){s.uniform4uiv(this.addr,e)}function zT(s,e,t){const i=this.cache,o=e.length,a=Fc(t,o);on(i,a)||(s.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||gx,a[c])}function BT(s,e,t){const i=this.cache,o=e.length,a=Fc(t,o);on(i,a)||(s.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||vx,a[c])}function VT(s,e,t){const i=this.cache,o=e.length,a=Fc(t,o);on(i,a)||(s.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||_x,a[c])}function HT(s,e,t){const i=this.cache,o=e.length,a=Fc(t,o);on(i,a)||(s.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||xx,a[c])}function GT(s){switch(s){case 5126:return wT;case 35664:return TT;case 35665:return bT;case 35666:return AT;case 35674:return CT;case 35675:return RT;case 35676:return PT;case 5124:case 35670:return LT;case 35667:case 35671:return NT;case 35668:case 35672:return DT;case 35669:case 35673:return IT;case 5125:return UT;case 36294:return kT;case 36295:return FT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return HT}}class jT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ET(t.type)}}class WT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GT(t.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function Yg(s,e){s.seq.push(e),s.map[e.id]=e}function YT(s,e,t){const i=s.name,o=i.length;for(Zd.lastIndex=0;;){const a=Zd.exec(i),c=Zd.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===o){Yg(t,h===void 0?new jT(u,s,e):new WT(u,s,e));break}else{let m=t.map[u];m===void 0&&(m=new XT(u),Yg(t,m)),t=m}}}class gc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);YT(a,c,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function $g(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const $T=37297;let qT=0;function KT(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const qg=new xt;function ZT(s){Ct._getMatrix(qg,Ct.workingColorSpace,s);const e=`mat3( ${qg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Ic:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Kg(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+KT(s.getShaderSource(e),c)}else return o}function QT(s,e){const t=ZT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function JT(s,e){let t;switch(e){case nS:t="Linear";break;case iS:t="Reinhard";break;case rS:t="Cineon";break;case X0:t="ACESFilmic";break;case oS:t="AgX";break;case aS:t="Neutral";break;case sS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jl=new K;function eb(){Ct.getLuminanceCoefficients(Jl);const s=Jl.x.toFixed(4),e=Jl.y.toFixed(4),t=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function nb(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ib(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),c=a.name;let u=1;a.type===s.FLOAT_MAT2&&(u=2),a.type===s.FLOAT_MAT3&&(u=3),a.type===s.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function _a(s){return s!==""}function Zg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(s){return s.replace(rb,ob)}const sb=new Map;function ob(s,e){let t=_t[e];if(t===void 0){const i=sb.get(e);if(i!==void 0)t=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yf(t)}const ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jg(s){return s.replace(ab,lb)}function lb(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function e0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function cb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===W0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===U1?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function ub(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mo:case Eo:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function db(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function fb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jf:e="ENVMAP_BLENDING_MULTIPLY";break;case eS:e="ENVMAP_BLENDING_MIX";break;case tS:e="ENVMAP_BLENDING_ADD";break}return e}function hb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function pb(s,e,t,i){const o=s.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=cb(t),h=ub(t),p=db(t),m=fb(t),x=hb(t),y=tb(t),w=nb(a),E=o.createProgram();let v,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(_a).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(_a).join(`
`),_.length>0&&(_+=`
`)):(v=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),_=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?_t.tonemapping_pars_fragment:"",t.toneMapping!==lr?JT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,QT("linearToOutputTexel",t.outputColorSpace),eb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),c=Yf(c),c=Zg(c,t),c=Qg(c,t),u=Yf(u),u=Zg(u,t),u=Qg(u,t),c=Jg(c),u=Jg(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=b+v+c,T=b+_+u,U=$g(o,o.VERTEX_SHADER,L),R=$g(o,o.FRAGMENT_SHADER,T);o.attachShader(E,U),o.attachShader(E,R),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function N(O){if(s.debug.checkShaderErrors){const q=o.getProgramInfoLog(E).trim(),W=o.getShaderInfoLog(U).trim(),oe=o.getShaderInfoLog(R).trim();let ce=!0,ue=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,U,R);else{const le=Kg(o,U,"vertex"),V=Kg(o,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+q+`
`+le+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(W===""||oe==="")&&(ue=!1);ue&&(O.diagnostics={runnable:ce,programLog:q,vertexShader:{log:W,prefix:v},fragmentShader:{log:oe,prefix:_}})}o.deleteShader(U),o.deleteShader(R),k=new gc(o,E),D=ib(o,E)}let k;this.getUniforms=function(){return k===void 0&&N(this),k};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=o.getProgramParameter(E,$T)),P},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=U,this.fragmentShader=R,this}let mb=0;class gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xb(e),t.set(e,i)),i}}class xb{constructor(e){this.id=mb++,this.code=e,this.usedTimes=0}}function vb(s,e,t,i,o,a,c){const u=new ch,f=new gb,h=new Set,p=[],m=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return h.add(D),D===0?"uv":`uv${D}`}function v(D,P,O,q,W){const oe=q.fog,ce=W.geometry,ue=D.isMeshStandardMaterial?q.environment:null,le=(D.isMeshStandardMaterial?t:e).get(D.envMap||ue),V=le&&le.mapping===Dc?le.image.height:null,ne=w[D.type];D.precision!==null&&(y=o.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const ie=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,B=ie!==void 0?ie.length:0;let ee=0;ce.morphAttributes.position!==void 0&&(ee=1),ce.morphAttributes.normal!==void 0&&(ee=2),ce.morphAttributes.color!==void 0&&(ee=3);let Te,Z,fe,ve;if(ne){const bt=Oi[ne];Te=bt.vertexShader,Z=bt.fragmentShader}else Te=D.vertexShader,Z=D.fragmentShader,f.update(D),fe=f.getVertexShaderID(D),ve=f.getFragmentShaderID(D);const xe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),De=W.isInstancedMesh===!0,We=W.isBatchedMesh===!0,vt=!!D.map,pt=!!D.matcap,Dt=!!le,X=!!D.aoMap,Zt=!!D.lightMap,ut=!!D.bumpMap,mt=!!D.normalMap,Je=!!D.displacementMap,Rt=!!D.emissiveMap,qe=!!D.metalnessMap,F=!!D.roughnessMap,C=D.anisotropy>0,Q=D.clearcoat>0,pe=D.dispersion>0,ge=D.iridescence>0,he=D.sheen>0,Le=D.transmission>0,Ee=C&&!!D.anisotropyMap,Pe=Q&&!!D.clearcoatMap,ct=Q&&!!D.clearcoatNormalMap,ye=Q&&!!D.clearcoatRoughnessMap,ze=ge&&!!D.iridescenceMap,Ke=ge&&!!D.iridescenceThicknessMap,tt=he&&!!D.sheenColorMap,Be=he&&!!D.sheenRoughnessMap,gt=!!D.specularMap,Ze=!!D.specularColorMap,Mt=!!D.specularIntensityMap,j=Le&&!!D.transmissionMap,Ne=Le&&!!D.thicknessMap,de=!!D.gradientMap,me=!!D.alphaMap,Fe=D.alphaTest>0,Ue=!!D.alphaHash,dt=!!D.extensions;let Vt=lr;D.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Vt=s.toneMapping);const en={shaderID:ne,shaderType:D.type,shaderName:D.name,vertexShader:Te,fragmentShader:Z,defines:D.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:We,batchingColor:We&&W._colorsTexture!==null,instancing:De,instancingColor:De&&W.instanceColor!==null,instancingMorph:De&&W.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Co,alphaToCoverage:!!D.alphaToCoverage,map:vt,matcap:pt,envMap:Dt,envMapMode:Dt&&le.mapping,envMapCubeUVHeight:V,aoMap:X,lightMap:Zt,bumpMap:ut,normalMap:mt,displacementMap:x&&Je,emissiveMap:Rt,normalMapObjectSpace:mt&&D.normalMapType===fS,normalMapTangentSpace:mt&&D.normalMapType===oh,metalnessMap:qe,roughnessMap:F,anisotropy:C,anisotropyMap:Ee,clearcoat:Q,clearcoatMap:Pe,clearcoatNormalMap:ct,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:ge,iridescenceMap:ze,iridescenceThicknessMap:Ke,sheen:he,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:gt,specularColorMap:Ze,specularIntensityMap:Mt,transmission:Le,transmissionMap:j,thicknessMap:Ne,gradientMap:de,opaque:D.transparent===!1&&D.blending===go&&D.alphaToCoverage===!1,alphaMap:me,alphaTest:Fe,alphaHash:Ue,combine:D.combine,mapUv:vt&&E(D.map.channel),aoMapUv:X&&E(D.aoMap.channel),lightMapUv:Zt&&E(D.lightMap.channel),bumpMapUv:ut&&E(D.bumpMap.channel),normalMapUv:mt&&E(D.normalMap.channel),displacementMapUv:Je&&E(D.displacementMap.channel),emissiveMapUv:Rt&&E(D.emissiveMap.channel),metalnessMapUv:qe&&E(D.metalnessMap.channel),roughnessMapUv:F&&E(D.roughnessMap.channel),anisotropyMapUv:Ee&&E(D.anisotropyMap.channel),clearcoatMapUv:Pe&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:ct&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(D.sheenRoughnessMap.channel),specularMapUv:gt&&E(D.specularMap.channel),specularColorMapUv:Ze&&E(D.specularColorMap.channel),specularIntensityMapUv:Mt&&E(D.specularIntensityMap.channel),transmissionMapUv:j&&E(D.transmissionMap.channel),thicknessMapUv:Ne&&E(D.thicknessMap.channel),alphaMapUv:me&&E(D.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(mt||C),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ce.attributes.uv&&(vt||me),fog:!!oe,useFog:D.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Ae,skinning:W.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ee,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:vt&&D.map.isVideoTexture===!0&&Ct.getTransfer(D.map.colorSpace)===kt,decodeVideoTextureEmissive:Rt&&D.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(D.emissiveMap.colorSpace)===kt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===di,flipSided:D.side===Yn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:dt&&D.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&D.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return en.vertexUv1s=h.has(1),en.vertexUv2s=h.has(2),en.vertexUv3s=h.has(3),h.clear(),en}function _(D){const P=[];if(D.shaderID?P.push(D.shaderID):(P.push(D.customVertexShaderID),P.push(D.customFragmentShaderID)),D.defines!==void 0)for(const O in D.defines)P.push(O),P.push(D.defines[O]);return D.isRawShaderMaterial===!1&&(b(P,D),L(P,D),P.push(s.outputColorSpace)),P.push(D.customProgramCacheKey),P.join()}function b(D,P){D.push(P.precision),D.push(P.outputColorSpace),D.push(P.envMapMode),D.push(P.envMapCubeUVHeight),D.push(P.mapUv),D.push(P.alphaMapUv),D.push(P.lightMapUv),D.push(P.aoMapUv),D.push(P.bumpMapUv),D.push(P.normalMapUv),D.push(P.displacementMapUv),D.push(P.emissiveMapUv),D.push(P.metalnessMapUv),D.push(P.roughnessMapUv),D.push(P.anisotropyMapUv),D.push(P.clearcoatMapUv),D.push(P.clearcoatNormalMapUv),D.push(P.clearcoatRoughnessMapUv),D.push(P.iridescenceMapUv),D.push(P.iridescenceThicknessMapUv),D.push(P.sheenColorMapUv),D.push(P.sheenRoughnessMapUv),D.push(P.specularMapUv),D.push(P.specularColorMapUv),D.push(P.specularIntensityMapUv),D.push(P.transmissionMapUv),D.push(P.thicknessMapUv),D.push(P.combine),D.push(P.fogExp2),D.push(P.sizeAttenuation),D.push(P.morphTargetsCount),D.push(P.morphAttributeCount),D.push(P.numDirLights),D.push(P.numPointLights),D.push(P.numSpotLights),D.push(P.numSpotLightMaps),D.push(P.numHemiLights),D.push(P.numRectAreaLights),D.push(P.numDirLightShadows),D.push(P.numPointLightShadows),D.push(P.numSpotLightShadows),D.push(P.numSpotLightShadowsWithMaps),D.push(P.numLightProbes),D.push(P.shadowMapType),D.push(P.toneMapping),D.push(P.numClippingPlanes),D.push(P.numClipIntersection),D.push(P.depthPacking)}function L(D,P){u.disableAll(),P.supportsVertexTextures&&u.enable(0),P.instancing&&u.enable(1),P.instancingColor&&u.enable(2),P.instancingMorph&&u.enable(3),P.matcap&&u.enable(4),P.envMap&&u.enable(5),P.normalMapObjectSpace&&u.enable(6),P.normalMapTangentSpace&&u.enable(7),P.clearcoat&&u.enable(8),P.iridescence&&u.enable(9),P.alphaTest&&u.enable(10),P.vertexColors&&u.enable(11),P.vertexAlphas&&u.enable(12),P.vertexUv1s&&u.enable(13),P.vertexUv2s&&u.enable(14),P.vertexUv3s&&u.enable(15),P.vertexTangents&&u.enable(16),P.anisotropy&&u.enable(17),P.alphaHash&&u.enable(18),P.batching&&u.enable(19),P.dispersion&&u.enable(20),P.batchingColor&&u.enable(21),D.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reverseDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),D.push(u.mask)}function T(D){const P=w[D.type];let O;if(P){const q=Oi[P];O=Tc.clone(q.uniforms)}else O=D.uniforms;return O}function U(D,P){let O;for(let q=0,W=p.length;q<W;q++){const oe=p[q];if(oe.cacheKey===P){O=oe,++O.usedTimes;break}}return O===void 0&&(O=new pb(s,P,D,a),p.push(O)),O}function R(D){if(--D.usedTimes===0){const P=p.indexOf(D);p[P]=p[p.length-1],p.pop(),D.destroy()}}function N(D){f.remove(D)}function k(){f.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:T,acquireProgram:U,releaseProgram:R,releaseShaderCache:N,programs:p,dispose:k}}function _b(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let u=s.get(c);return u===void 0&&(u={},s.set(c,u)),u}function i(c){s.delete(c)}function o(c,u,f){s.get(c)[u]=f}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function yb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function t0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function n0(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(m,x,y,w,E,v){let _=s[e];return _===void 0?(_={id:m.id,object:m,geometry:x,material:y,groupOrder:w,renderOrder:m.renderOrder,z:E,group:v},s[e]=_):(_.id=m.id,_.object=m,_.geometry=x,_.material=y,_.groupOrder=w,_.renderOrder=m.renderOrder,_.z=E,_.group=v),e++,_}function u(m,x,y,w,E,v){const _=c(m,x,y,w,E,v);y.transmission>0?i.push(_):y.transparent===!0?o.push(_):t.push(_)}function f(m,x,y,w,E,v){const _=c(m,x,y,w,E,v);y.transmission>0?i.unshift(_):y.transparent===!0?o.unshift(_):t.unshift(_)}function h(m,x){t.length>1&&t.sort(m||yb),i.length>1&&i.sort(x||t0),o.length>1&&o.sort(x||t0)}function p(){for(let m=e,x=s.length;m<x;m++){const y=s[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:u,unshift:f,finish:p,sort:h}}function Sb(){let s=new WeakMap;function e(i,o){const a=s.get(i);let c;return a===void 0?(c=new n0,s.set(i,[c])):o>=a.length?(c=new n0,a.push(c)):c=a[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function Mb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new ft};break;case"SpotLight":t={position:new K,direction:new K,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function Eb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wb=0;function Tb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bb(s){const e=new Mb,t=Eb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new K);const o=new K,a=new Bt,c=new Bt;function u(h){let p=0,m=0,x=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let y=0,w=0,E=0,v=0,_=0,b=0,L=0,T=0,U=0,R=0,N=0;h.sort(Tb);for(let D=0,P=h.length;D<P;D++){const O=h[D],q=O.color,W=O.intensity,oe=O.distance,ce=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=q.r*W,m+=q.g*W,x+=q.b*W;else if(O.isLightProbe){for(let ue=0;ue<9;ue++)i.probe[ue].addScaledVector(O.sh.coefficients[ue],W);N++}else if(O.isDirectionalLight){const ue=e.get(O);if(ue.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const le=O.shadow,V=t.get(O);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.directionalShadow[y]=V,i.directionalShadowMap[y]=ce,i.directionalShadowMatrix[y]=O.shadow.matrix,b++}i.directional[y]=ue,y++}else if(O.isSpotLight){const ue=e.get(O);ue.position.setFromMatrixPosition(O.matrixWorld),ue.color.copy(q).multiplyScalar(W),ue.distance=oe,ue.coneCos=Math.cos(O.angle),ue.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ue.decay=O.decay,i.spot[E]=ue;const le=O.shadow;if(O.map&&(i.spotLightMap[U]=O.map,U++,le.updateMatrices(O),O.castShadow&&R++),i.spotLightMatrix[E]=le.matrix,O.castShadow){const V=t.get(O);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.spotShadow[E]=V,i.spotShadowMap[E]=ce,T++}E++}else if(O.isRectAreaLight){const ue=e.get(O);ue.color.copy(q).multiplyScalar(W),ue.halfWidth.set(O.width*.5,0,0),ue.halfHeight.set(0,O.height*.5,0),i.rectArea[v]=ue,v++}else if(O.isPointLight){const ue=e.get(O);if(ue.color.copy(O.color).multiplyScalar(O.intensity),ue.distance=O.distance,ue.decay=O.decay,O.castShadow){const le=O.shadow,V=t.get(O);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,V.shadowCameraNear=le.camera.near,V.shadowCameraFar=le.camera.far,i.pointShadow[w]=V,i.pointShadowMap[w]=ce,i.pointShadowMatrix[w]=O.shadow.matrix,L++}i.point[w]=ue,w++}else if(O.isHemisphereLight){const ue=e.get(O);ue.skyColor.copy(O.color).multiplyScalar(W),ue.groundColor.copy(O.groundColor).multiplyScalar(W),i.hemi[_]=ue,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=x;const k=i.hash;(k.directionalLength!==y||k.pointLength!==w||k.spotLength!==E||k.rectAreaLength!==v||k.hemiLength!==_||k.numDirectionalShadows!==b||k.numPointShadows!==L||k.numSpotShadows!==T||k.numSpotMaps!==U||k.numLightProbes!==N)&&(i.directional.length=y,i.spot.length=E,i.rectArea.length=v,i.point.length=w,i.hemi.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=T+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=N,k.directionalLength=y,k.pointLength=w,k.spotLength=E,k.rectAreaLength=v,k.hemiLength=_,k.numDirectionalShadows=b,k.numPointShadows=L,k.numSpotShadows=T,k.numSpotMaps=U,k.numLightProbes=N,i.version=wb++)}function f(h,p){let m=0,x=0,y=0,w=0,E=0;const v=p.matrixWorldInverse;for(let _=0,b=h.length;_<b;_++){const L=h[_];if(L.isDirectionalLight){const T=i.directional[m];T.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(v),m++}else if(L.isSpotLight){const T=i.spot[y];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(v),T.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(v),y++}else if(L.isRectAreaLight){const T=i.rectArea[w];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(v),c.identity(),a.copy(L.matrixWorld),a.premultiply(v),c.extractRotation(a),T.halfWidth.set(L.width*.5,0,0),T.halfHeight.set(0,L.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),w++}else if(L.isPointLight){const T=i.point[x];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(v),x++}else if(L.isHemisphereLight){const T=i.hemi[E];T.direction.setFromMatrixPosition(L.matrixWorld),T.direction.transformDirection(v),E++}}}return{setup:u,setupView:f,state:i}}function i0(s){const e=new bb(s),t=[],i=[];function o(p){h.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function Ab(s){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new i0(s),e.set(o,[u])):a>=c.length?(u=new i0(s),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}class Cb extends Ss{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rb extends Ss{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
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
}`;function Nb(s,e,t){let i=new uh;const o=new et,a=new et,c=new $t,u=new Cb({depthPacking:dS}),f=new Rb,h={},p=t.maxTextureSize,m={[Hr]:Yn,[Yn]:Hr,[di]:di},x=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Pb,fragmentShader:Lb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const w=new $n;w.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new In(w,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W0;let _=this.type;this.render=function(R,N,k){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||R.length===0)return;const D=s.getRenderTarget(),P=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),q=s.state;q.setBlending(ar),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const W=_!==tr&&this.type===tr,oe=_===tr&&this.type!==tr;for(let ce=0,ue=R.length;ce<ue;ce++){const le=R[ce],V=le.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ne=V.getFrameExtents();if(o.multiply(ne),a.copy(V.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/ne.x),o.x=a.x*ne.x,V.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/ne.y),o.y=a.y*ne.y,V.mapSize.y=a.y)),V.map===null||W===!0||oe===!0){const B=this.type!==tr?{minFilter:mi,magFilter:mi}:{};V.map!==null&&V.map.dispose(),V.map=new Ri(o.x,o.y,B),V.map.texture.name=le.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ie=V.getViewportCount();for(let B=0;B<ie;B++){const ee=V.getViewport(B);c.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),q.viewport(c),V.updateMatrices(le,B),i=V.getFrustum(),T(N,k,V.camera,le,this.type)}V.isPointLightShadow!==!0&&this.type===tr&&b(V,k),V.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(D,P,O)};function b(R,N){const k=e.update(E);x.defines.VSM_SAMPLES!==R.blurSamples&&(x.defines.VSM_SAMPLES=R.blurSamples,y.defines.VSM_SAMPLES=R.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ri(o.x,o.y)),x.uniforms.shadow_pass.value=R.map.texture,x.uniforms.resolution.value=R.mapSize,x.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(N,null,k,x,E,null),y.uniforms.shadow_pass.value=R.mapPass.texture,y.uniforms.resolution.value=R.mapSize,y.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(N,null,k,y,E,null)}function L(R,N,k,D){let P=null;const O=k.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)P=O;else if(P=k.isPointLight===!0?f:u,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const q=P.uuid,W=N.uuid;let oe=h[q];oe===void 0&&(oe={},h[q]=oe);let ce=oe[W];ce===void 0&&(ce=P.clone(),oe[W]=ce,N.addEventListener("dispose",U)),P=ce}if(P.visible=N.visible,P.wireframe=N.wireframe,D===tr?P.side=N.shadowSide!==null?N.shadowSide:N.side:P.side=N.shadowSide!==null?N.shadowSide:m[N.side],P.alphaMap=N.alphaMap,P.alphaTest=N.alphaTest,P.map=N.map,P.clipShadows=N.clipShadows,P.clippingPlanes=N.clippingPlanes,P.clipIntersection=N.clipIntersection,P.displacementMap=N.displacementMap,P.displacementScale=N.displacementScale,P.displacementBias=N.displacementBias,P.wireframeLinewidth=N.wireframeLinewidth,P.linewidth=N.linewidth,k.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const q=s.properties.get(P);q.light=k}return P}function T(R,N,k,D,P){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&P===tr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld);const W=e.update(R),oe=R.material;if(Array.isArray(oe)){const ce=W.groups;for(let ue=0,le=ce.length;ue<le;ue++){const V=ce[ue],ne=oe[V.materialIndex];if(ne&&ne.visible){const ie=L(R,ne,D,P);R.onBeforeShadow(s,R,N,k,W,ie,V),s.renderBufferDirect(k,null,W,ie,R,V),R.onAfterShadow(s,R,N,k,W,ie,V)}}}else if(oe.visible){const ce=L(R,oe,D,P);R.onBeforeShadow(s,R,N,k,W,ce,null),s.renderBufferDirect(k,null,W,ce,R,null),R.onAfterShadow(s,R,N,k,W,ce,null)}}const q=R.children;for(let W=0,oe=q.length;W<oe;W++)T(q[W],N,k,D,P)}function U(R){R.target.removeEventListener("dispose",U);for(const k in h){const D=h[k],P=R.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}}const Db={[ff]:hf,[pf]:xf,[mf]:vf,[So]:gf,[hf]:ff,[xf]:pf,[vf]:mf,[gf]:So};function Ib(s,e){function t(){let j=!1;const Ne=new $t;let de=null;const me=new $t(0,0,0,0);return{setMask:function(Fe){de!==Fe&&!j&&(s.colorMask(Fe,Fe,Fe,Fe),de=Fe)},setLocked:function(Fe){j=Fe},setClear:function(Fe,Ue,dt,Vt,en){en===!0&&(Fe*=Vt,Ue*=Vt,dt*=Vt),Ne.set(Fe,Ue,dt,Vt),me.equals(Ne)===!1&&(s.clearColor(Fe,Ue,dt,Vt),me.copy(Ne))},reset:function(){j=!1,de=null,me.set(-1,0,0,0)}}}function i(){let j=!1,Ne=!1,de=null,me=null,Fe=null;return{setReversed:function(Ue){if(Ne!==Ue){const dt=e.get("EXT_clip_control");Ne?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const Vt=Fe;Fe=null,this.setClear(Vt)}Ne=Ue},getReversed:function(){return Ne},setTest:function(Ue){Ue?xe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Ue){de!==Ue&&!j&&(s.depthMask(Ue),de=Ue)},setFunc:function(Ue){if(Ne&&(Ue=Db[Ue]),me!==Ue){switch(Ue){case ff:s.depthFunc(s.NEVER);break;case hf:s.depthFunc(s.ALWAYS);break;case pf:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case mf:s.depthFunc(s.EQUAL);break;case gf:s.depthFunc(s.GEQUAL);break;case xf:s.depthFunc(s.GREATER);break;case vf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Ue}},setLocked:function(Ue){j=Ue},setClear:function(Ue){Fe!==Ue&&(Ne&&(Ue=1-Ue),s.clearDepth(Ue),Fe=Ue)},reset:function(){j=!1,de=null,me=null,Fe=null,Ne=!1}}}function o(){let j=!1,Ne=null,de=null,me=null,Fe=null,Ue=null,dt=null,Vt=null,en=null;return{setTest:function(bt){j||(bt?xe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(bt){Ne!==bt&&!j&&(s.stencilMask(bt),Ne=bt)},setFunc:function(bt,kn,bn){(de!==bt||me!==kn||Fe!==bn)&&(s.stencilFunc(bt,kn,bn),de=bt,me=kn,Fe=bn)},setOp:function(bt,kn,bn){(Ue!==bt||dt!==kn||Vt!==bn)&&(s.stencilOp(bt,kn,bn),Ue=bt,dt=kn,Vt=bn)},setLocked:function(bt){j=bt},setClear:function(bt){en!==bt&&(s.clearStencil(bt),en=bt)},reset:function(){j=!1,Ne=null,de=null,me=null,Fe=null,Ue=null,dt=null,Vt=null,en=null}}}const a=new t,c=new i,u=new o,f=new WeakMap,h=new WeakMap;let p={},m={},x=new WeakMap,y=[],w=null,E=!1,v=null,_=null,b=null,L=null,T=null,U=null,R=null,N=new ft(0,0,0),k=0,D=!1,P=null,O=null,q=null,W=null,oe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,le=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(V)[1]),ue=le>=1):V.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ue=le>=2);let ne=null,ie={};const B=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),Te=new $t().fromArray(B),Z=new $t().fromArray(ee);function fe(j,Ne,de,me){const Fe=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(j,Ue),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<de;dt++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Ne+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return Ue}const ve={};ve[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),xe(s.DEPTH_TEST),c.setFunc(So),ut(!1),mt(ag),xe(s.CULL_FACE),X(ar);function xe(j){p[j]!==!0&&(s.enable(j),p[j]=!0)}function Ae(j){p[j]!==!1&&(s.disable(j),p[j]=!1)}function De(j,Ne){return m[j]!==Ne?(s.bindFramebuffer(j,Ne),m[j]=Ne,j===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Ne),j===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function We(j,Ne){let de=y,me=!1;if(j){de=x.get(Ne),de===void 0&&(de=[],x.set(Ne,de));const Fe=j.textures;if(de.length!==Fe.length||de[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,dt=Fe.length;Ue<dt;Ue++)de[Ue]=s.COLOR_ATTACHMENT0+Ue;de.length=Fe.length,me=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,me=!0);me&&s.drawBuffers(de)}function vt(j){return w!==j?(s.useProgram(j),w=j,!0):!1}const pt={[hs]:s.FUNC_ADD,[F1]:s.FUNC_SUBTRACT,[O1]:s.FUNC_REVERSE_SUBTRACT};pt[z1]=s.MIN,pt[B1]=s.MAX;const Dt={[V1]:s.ZERO,[H1]:s.ONE,[G1]:s.SRC_COLOR,[uf]:s.SRC_ALPHA,[q1]:s.SRC_ALPHA_SATURATE,[Y1]:s.DST_COLOR,[W1]:s.DST_ALPHA,[j1]:s.ONE_MINUS_SRC_COLOR,[df]:s.ONE_MINUS_SRC_ALPHA,[$1]:s.ONE_MINUS_DST_COLOR,[X1]:s.ONE_MINUS_DST_ALPHA,[K1]:s.CONSTANT_COLOR,[Z1]:s.ONE_MINUS_CONSTANT_COLOR,[Q1]:s.CONSTANT_ALPHA,[J1]:s.ONE_MINUS_CONSTANT_ALPHA};function X(j,Ne,de,me,Fe,Ue,dt,Vt,en,bt){if(j===ar){E===!0&&(Ae(s.BLEND),E=!1);return}if(E===!1&&(xe(s.BLEND),E=!0),j!==k1){if(j!==v||bt!==D){if((_!==hs||T!==hs)&&(s.blendEquation(s.FUNC_ADD),_=hs,T=hs),bt)switch(j){case go:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cf:s.blendFunc(s.ONE,s.ONE);break;case lg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case go:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case lg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}b=null,L=null,U=null,R=null,N.set(0,0,0),k=0,v=j,D=bt}return}Fe=Fe||Ne,Ue=Ue||de,dt=dt||me,(Ne!==_||Fe!==T)&&(s.blendEquationSeparate(pt[Ne],pt[Fe]),_=Ne,T=Fe),(de!==b||me!==L||Ue!==U||dt!==R)&&(s.blendFuncSeparate(Dt[de],Dt[me],Dt[Ue],Dt[dt]),b=de,L=me,U=Ue,R=dt),(Vt.equals(N)===!1||en!==k)&&(s.blendColor(Vt.r,Vt.g,Vt.b,en),N.copy(Vt),k=en),v=j,D=!1}function Zt(j,Ne){j.side===di?Ae(s.CULL_FACE):xe(s.CULL_FACE);let de=j.side===Yn;Ne&&(de=!de),ut(de),j.blending===go&&j.transparent===!1?X(ar):X(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),a.setMask(j.colorWrite);const me=j.stencilWrite;u.setTest(me),me&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Rt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(j){P!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),P=j)}function mt(j){j!==D1?(xe(s.CULL_FACE),j!==O&&(j===ag?s.cullFace(s.BACK):j===I1?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),O=j}function Je(j){j!==q&&(ue&&s.lineWidth(j),q=j)}function Rt(j,Ne,de){j?(xe(s.POLYGON_OFFSET_FILL),(W!==Ne||oe!==de)&&(s.polygonOffset(Ne,de),W=Ne,oe=de)):Ae(s.POLYGON_OFFSET_FILL)}function qe(j){j?xe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function F(j){j===void 0&&(j=s.TEXTURE0+ce-1),ne!==j&&(s.activeTexture(j),ne=j)}function C(j,Ne,de){de===void 0&&(ne===null?de=s.TEXTURE0+ce-1:de=ne);let me=ie[de];me===void 0&&(me={type:void 0,texture:void 0},ie[de]=me),(me.type!==j||me.texture!==Ne)&&(ne!==de&&(s.activeTexture(de),ne=de),s.bindTexture(j,Ne||ve[j]),me.type=j,me.texture=Ne)}function Q(){const j=ie[ne];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Le(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ke(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function tt(j){Te.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Te.copy(j))}function Be(j){Z.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Z.copy(j))}function gt(j,Ne){let de=h.get(Ne);de===void 0&&(de=new WeakMap,h.set(Ne,de));let me=de.get(j);me===void 0&&(me=s.getUniformBlockIndex(Ne,j.name),de.set(j,me))}function Ze(j,Ne){const me=h.get(Ne).get(j);f.get(Ne)!==me&&(s.uniformBlockBinding(Ne,me,j.__bindingPointIndex),f.set(Ne,me))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},ne=null,ie={},m={},x=new WeakMap,y=[],w=null,E=!1,v=null,_=null,b=null,L=null,T=null,U=null,R=null,N=new ft(0,0,0),k=0,D=!1,P=null,O=null,q=null,W=null,oe=null,Te.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:xe,disable:Ae,bindFramebuffer:De,drawBuffers:We,useProgram:vt,setBlending:X,setMaterial:Zt,setFlipSided:ut,setCullFace:mt,setLineWidth:Je,setPolygonOffset:Rt,setScissorTest:qe,activeTexture:F,bindTexture:C,unbindTexture:Q,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ze,texImage3D:Ke,updateUBOMapping:gt,uniformBlockBinding:Ze,texStorage2D:ct,texStorage3D:ye,texSubImage2D:he,texSubImage3D:Le,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Pe,scissor:tt,viewport:Be,reset:Mt}}function r0(s,e,t,i){const o=Ub(i);switch(t){case Q0:return s*e;case ex:return s*e;case tx:return s*e*2;case nx:return s*e/o.components*o.byteLength;case ih:return s*e/o.components*o.byteLength;case ix:return s*e*2/o.components*o.byteLength;case rh:return s*e*2/o.components*o.byteLength;case J0:return s*e*3/o.components*o.byteLength;case hi:return s*e*4/o.components*o.byteLength;case sh:return s*e*4/o.components*o.byteLength;case dc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hc:case pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:case wf:return Math.max(s,16)*Math.max(e,8)/4;case Sf:case Ef:return Math.max(s,8)*Math.max(e,8)/2;case Tf:case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case mc:case Hf:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case rx:case jf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wf:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ub(s){switch(s){case dr:case q0:return{byteLength:1,components:1};case Ea:case K0:case cr:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case vs:case eh:case sr:return{byteLength:4,components:1};case Z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function kb(s,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new et,p=new WeakMap;let m;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(F,C){return y?new OffscreenCanvas(F,C):wc("canvas")}function E(F,C,Q){let pe=1;const ge=qe(F);if((ge.width>Q||ge.height>Q)&&(pe=Q/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const he=Math.floor(pe*ge.width),Le=Math.floor(pe*ge.height);m===void 0&&(m=w(he,Le));const Ee=C?w(he,Le):m;return Ee.width=he,Ee.height=Le,Ee.getContext("2d").drawImage(F,0,0,he,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+he+"x"+Le+")."),Ee}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),F;return F}function v(F){return F.generateMipmaps}function _(F){s.generateMipmap(F)}function b(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(F,C,Q,pe,ge=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let he=C;if(C===s.RED&&(Q===s.FLOAT&&(he=s.R32F),Q===s.HALF_FLOAT&&(he=s.R16F),Q===s.UNSIGNED_BYTE&&(he=s.R8)),C===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.R8UI),Q===s.UNSIGNED_SHORT&&(he=s.R16UI),Q===s.UNSIGNED_INT&&(he=s.R32UI),Q===s.BYTE&&(he=s.R8I),Q===s.SHORT&&(he=s.R16I),Q===s.INT&&(he=s.R32I)),C===s.RG&&(Q===s.FLOAT&&(he=s.RG32F),Q===s.HALF_FLOAT&&(he=s.RG16F),Q===s.UNSIGNED_BYTE&&(he=s.RG8)),C===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RG8UI),Q===s.UNSIGNED_SHORT&&(he=s.RG16UI),Q===s.UNSIGNED_INT&&(he=s.RG32UI),Q===s.BYTE&&(he=s.RG8I),Q===s.SHORT&&(he=s.RG16I),Q===s.INT&&(he=s.RG32I)),C===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Q===s.UNSIGNED_INT&&(he=s.RGB32UI),Q===s.BYTE&&(he=s.RGB8I),Q===s.SHORT&&(he=s.RGB16I),Q===s.INT&&(he=s.RGB32I)),C===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Q===s.UNSIGNED_INT&&(he=s.RGBA32UI),Q===s.BYTE&&(he=s.RGBA8I),Q===s.SHORT&&(he=s.RGBA16I),Q===s.INT&&(he=s.RGBA32I)),C===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),C===s.RGBA){const Le=ge?Ic:Ct.getTransfer(pe);Q===s.FLOAT&&(he=s.RGBA32F),Q===s.HALF_FLOAT&&(he=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(he=Le===kt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function T(F,C){let Q;return F?C===null||C===vs||C===wo?Q=s.DEPTH24_STENCIL8:C===sr?Q=s.DEPTH32F_STENCIL8:C===Ea&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===vs||C===wo?Q=s.DEPTH_COMPONENT24:C===sr?Q=s.DEPTH_COMPONENT32F:C===Ea&&(Q=s.DEPTH_COMPONENT16),Q}function U(F,C){return v(F)===!0||F.isFramebufferTexture&&F.minFilter!==mi&&F.minFilter!==Ai?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function R(F){const C=F.target;C.removeEventListener("dispose",R),k(C),C.isVideoTexture&&p.delete(C)}function N(F){const C=F.target;C.removeEventListener("dispose",N),P(C)}function k(F){const C=i.get(F);if(C.__webglInit===void 0)return;const Q=F.source,pe=x.get(Q);if(pe){const ge=pe[C.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&D(F),Object.keys(pe).length===0&&x.delete(Q)}i.remove(F)}function D(F){const C=i.get(F);s.deleteTexture(C.__webglTexture);const Q=F.source,pe=x.get(Q);delete pe[C.__cacheKey],c.memory.textures--}function P(F){const C=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(C.__webglFramebuffer[pe]))for(let ge=0;ge<C.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(C.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(C.__webglFramebuffer[pe]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[pe])}else{if(Array.isArray(C.__webglFramebuffer))for(let pe=0;pe<C.__webglFramebuffer.length;pe++)s.deleteFramebuffer(C.__webglFramebuffer[pe]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let pe=0;pe<C.__webglColorRenderbuffer.length;pe++)C.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[pe]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Q=F.textures;for(let pe=0,ge=Q.length;pe<ge;pe++){const he=i.get(Q[pe]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),i.remove(Q[pe])}i.remove(F)}let O=0;function q(){O=0}function W(){const F=O;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),O+=1,F}function oe(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function ce(F,C){const Q=i.get(F);if(F.isVideoTexture&&Je(F),F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){const pe=F.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Q,F,C);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+C)}function ue(F,C){const Q=i.get(F);if(F.version>0&&Q.__version!==F.version){Z(Q,F,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+C)}function le(F,C){const Q=i.get(F);if(F.version>0&&Q.__version!==F.version){Z(Q,F,C);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+C)}function V(F,C){const Q=i.get(F);if(F.version>0&&Q.__version!==F.version){fe(Q,F,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+C)}const ne={[yc]:s.REPEAT,[Br]:s.CLAMP_TO_EDGE,[Sc]:s.MIRRORED_REPEAT},ie={[mi]:s.NEAREST,[$0]:s.NEAREST_MIPMAP_NEAREST,[xa]:s.NEAREST_MIPMAP_LINEAR,[Ai]:s.LINEAR,[uc]:s.LINEAR_MIPMAP_NEAREST,[Vr]:s.LINEAR_MIPMAP_LINEAR},B={[hS]:s.NEVER,[_S]:s.ALWAYS,[pS]:s.LESS,[sx]:s.LEQUAL,[mS]:s.EQUAL,[vS]:s.GEQUAL,[gS]:s.GREATER,[xS]:s.NOTEQUAL};function ee(F,C){if(C.type===sr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Ai||C.magFilter===uc||C.magFilter===xa||C.magFilter===Vr||C.minFilter===Ai||C.minFilter===uc||C.minFilter===xa||C.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,ne[C.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,ne[C.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,ne[C.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,ie[C.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,ie[C.minFilter]),C.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,B[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===mi||C.minFilter!==xa&&C.minFilter!==Vr||C.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Te(F,C){let Q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",R));const pe=C.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const he=oe(C);if(he!==F.__cacheKey){ge[he]===void 0&&(ge[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),ge[he].usedTimes++;const Le=ge[F.__cacheKey];Le!==void 0&&(ge[F.__cacheKey].usedTimes--,Le.usedTimes===0&&D(C)),F.__cacheKey=he,F.__webglTexture=ge[he].texture}return Q}function Z(F,C,Q){let pe=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=Te(F,C),he=C.source;t.bindTexture(pe,F.__webglTexture,s.TEXTURE0+Q);const Le=i.get(he);if(he.version!==Le.__version||ge===!0){t.activeTexture(s.TEXTURE0+Q);const Ee=Ct.getPrimaries(Ct.workingColorSpace),Pe=C.colorSpace===ir?null:Ct.getPrimaries(C.colorSpace),ct=C.colorSpace===ir||Ee===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let ye=E(C.image,!1,o.maxTextureSize);ye=Rt(C,ye);const ze=a.convert(C.format,C.colorSpace),Ke=a.convert(C.type);let tt=L(C.internalFormat,ze,Ke,C.colorSpace,C.isVideoTexture);ee(pe,C);let Be;const gt=C.mipmaps,Ze=C.isVideoTexture!==!0,Mt=Le.__version===void 0||ge===!0,j=he.dataReady,Ne=U(C,ye);if(C.isDepthTexture)tt=T(C.format===To,C.type),Mt&&(Ze?t.texStorage2D(s.TEXTURE_2D,1,tt,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,tt,ye.width,ye.height,0,ze,Ke,null));else if(C.isDataTexture)if(gt.length>0){Ze&&Mt&&t.texStorage2D(s.TEXTURE_2D,Ne,tt,gt[0].width,gt[0].height);for(let de=0,me=gt.length;de<me;de++)Be=gt[de],Ze?j&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Be.width,Be.height,ze,Ke,Be.data):t.texImage2D(s.TEXTURE_2D,de,tt,Be.width,Be.height,0,ze,Ke,Be.data);C.generateMipmaps=!1}else Ze?(Mt&&t.texStorage2D(s.TEXTURE_2D,Ne,tt,ye.width,ye.height),j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,ze,Ke,ye.data)):t.texImage2D(s.TEXTURE_2D,0,tt,ye.width,ye.height,0,ze,Ke,ye.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ze&&Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,tt,gt[0].width,gt[0].height,ye.depth);for(let de=0,me=gt.length;de<me;de++)if(Be=gt[de],C.format!==hi)if(ze!==null)if(Ze){if(j)if(C.layerUpdates.size>0){const Fe=r0(Be.width,Be.height,C.format,C.type);for(const Ue of C.layerUpdates){const dt=Be.data.subarray(Ue*Fe/Be.data.BYTES_PER_ELEMENT,(Ue+1)*Fe/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,Ue,Be.width,Be.height,1,ze,dt)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Be.width,Be.height,ye.depth,ze,Be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,tt,Be.width,Be.height,ye.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?j&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Be.width,Be.height,ye.depth,ze,Ke,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,tt,Be.width,Be.height,ye.depth,0,ze,Ke,Be.data)}else{Ze&&Mt&&t.texStorage2D(s.TEXTURE_2D,Ne,tt,gt[0].width,gt[0].height);for(let de=0,me=gt.length;de<me;de++)Be=gt[de],C.format!==hi?ze!==null?Ze?j&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,de,tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?j&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Be.width,Be.height,ze,Ke,Be.data):t.texImage2D(s.TEXTURE_2D,de,tt,Be.width,Be.height,0,ze,Ke,Be.data)}else if(C.isDataArrayTexture)if(Ze){if(Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,tt,ye.width,ye.height,ye.depth),j)if(C.layerUpdates.size>0){const de=r0(ye.width,ye.height,C.format,C.type);for(const me of C.layerUpdates){const Fe=ye.data.subarray(me*de/ye.data.BYTES_PER_ELEMENT,(me+1)*de/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,ye.width,ye.height,1,ze,Ke,Fe)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ze,Ke,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,ye.width,ye.height,ye.depth,0,ze,Ke,ye.data);else if(C.isData3DTexture)Ze?(Mt&&t.texStorage3D(s.TEXTURE_3D,Ne,tt,ye.width,ye.height,ye.depth),j&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ze,Ke,ye.data)):t.texImage3D(s.TEXTURE_3D,0,tt,ye.width,ye.height,ye.depth,0,ze,Ke,ye.data);else if(C.isFramebufferTexture){if(Mt)if(Ze)t.texStorage2D(s.TEXTURE_2D,Ne,tt,ye.width,ye.height);else{let de=ye.width,me=ye.height;for(let Fe=0;Fe<Ne;Fe++)t.texImage2D(s.TEXTURE_2D,Fe,tt,de,me,0,ze,Ke,null),de>>=1,me>>=1}}else if(gt.length>0){if(Ze&&Mt){const de=qe(gt[0]);t.texStorage2D(s.TEXTURE_2D,Ne,tt,de.width,de.height)}for(let de=0,me=gt.length;de<me;de++)Be=gt[de],Ze?j&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,ze,Ke,Be):t.texImage2D(s.TEXTURE_2D,de,tt,ze,Ke,Be);C.generateMipmaps=!1}else if(Ze){if(Mt){const de=qe(ye);t.texStorage2D(s.TEXTURE_2D,Ne,tt,de.width,de.height)}j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Ke,ye)}else t.texImage2D(s.TEXTURE_2D,0,tt,ze,Ke,ye);v(C)&&_(pe),Le.__version=he.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function fe(F,C,Q){if(C.image.length!==6)return;const pe=Te(F,C),ge=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+Q);const he=i.get(ge);if(ge.version!==he.__version||pe===!0){t.activeTexture(s.TEXTURE0+Q);const Le=Ct.getPrimaries(Ct.workingColorSpace),Ee=C.colorSpace===ir?null:Ct.getPrimaries(C.colorSpace),Pe=C.colorSpace===ir||Le===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ct=C.isCompressedTexture||C.image[0].isCompressedTexture,ye=C.image[0]&&C.image[0].isDataTexture,ze=[];for(let me=0;me<6;me++)!ct&&!ye?ze[me]=E(C.image[me],!0,o.maxCubemapSize):ze[me]=ye?C.image[me].image:C.image[me],ze[me]=Rt(C,ze[me]);const Ke=ze[0],tt=a.convert(C.format,C.colorSpace),Be=a.convert(C.type),gt=L(C.internalFormat,tt,Be,C.colorSpace),Ze=C.isVideoTexture!==!0,Mt=he.__version===void 0||pe===!0,j=ge.dataReady;let Ne=U(C,Ke);ee(s.TEXTURE_CUBE_MAP,C);let de;if(ct){Ze&&Mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,gt,Ke.width,Ke.height);for(let me=0;me<6;me++){de=ze[me].mipmaps;for(let Fe=0;Fe<de.length;Fe++){const Ue=de[Fe];C.format!==hi?tt!==null?Ze?j&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,0,0,Ue.width,Ue.height,tt,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,gt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,0,0,Ue.width,Ue.height,tt,Be,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,gt,Ue.width,Ue.height,0,tt,Be,Ue.data)}}}else{if(de=C.mipmaps,Ze&&Mt){de.length>0&&Ne++;const me=qe(ze[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,gt,me.width,me.height)}for(let me=0;me<6;me++)if(ye){Ze?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ze[me].width,ze[me].height,tt,Be,ze[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,gt,ze[me].width,ze[me].height,0,tt,Be,ze[me].data);for(let Fe=0;Fe<de.length;Fe++){const dt=de[Fe].image[me].image;Ze?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,0,0,dt.width,dt.height,tt,Be,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,gt,dt.width,dt.height,0,tt,Be,dt.data)}}else{Ze?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,tt,Be,ze[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,gt,tt,Be,ze[me]);for(let Fe=0;Fe<de.length;Fe++){const Ue=de[Fe];Ze?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,0,0,tt,Be,Ue.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,gt,tt,Be,Ue.image[me])}}}v(C)&&_(s.TEXTURE_CUBE_MAP),he.__version=ge.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function ve(F,C,Q,pe,ge,he){const Le=a.convert(Q.format,Q.colorSpace),Ee=a.convert(Q.type),Pe=L(Q.internalFormat,Le,Ee,Q.colorSpace),ct=i.get(C),ye=i.get(Q);if(ye.__renderTarget=C,!ct.__hasExternalTextures){const ze=Math.max(1,C.width>>he),Ke=Math.max(1,C.height>>he);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,he,Pe,ze,Ke,C.depth,0,Le,Ee,null):t.texImage2D(ge,he,Pe,ze,Ke,0,Le,Ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),mt(C)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,ut(C)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(F,C,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,F),C.depthBuffer){const pe=C.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,he=T(C.stencilBuffer,ge),Le=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=ut(C);mt(C)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,he,C.width,C.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,he,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,he,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,F)}else{const pe=C.textures;for(let ge=0;ge<pe.length;ge++){const he=pe[ge],Le=a.convert(he.format,he.colorSpace),Ee=a.convert(he.type),Pe=L(he.internalFormat,Le,Ee,he.colorSpace),ct=ut(C);Q&&mt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Pe,C.width,C.height):mt(C)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Pe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(C.depthTexture);pe.__renderTarget=C,(!pe.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ce(C.depthTexture,0);const ge=pe.__webglTexture,he=ut(C);if(C.depthTexture.format===xo)mt(C)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(C.depthTexture.format===To)mt(C)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function De(F){const C=i.get(F),Q=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const pe=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),pe){const ge=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),C.__depthDisposeCallback=ge}C.__boundDepthTexture=pe}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ae(C.__webglFramebuffer,F)}else if(Q){C.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[pe]),C.__webglDepthbuffer[pe]===void 0)C.__webglDepthbuffer[pe]=s.createRenderbuffer(),xe(C.__webglDepthbuffer[pe],F,!1);else{const ge=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=C.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,he)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),xe(C.__webglDepthbuffer,F,!1);else{const pe=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(F,C,Q){const pe=i.get(F);C!==void 0&&ve(pe.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&De(F)}function vt(F){const C=F.texture,Q=i.get(F),pe=i.get(C);F.addEventListener("dispose",N);const ge=F.textures,he=F.isWebGLCubeRenderTarget===!0,Le=ge.length>1;if(Le||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=C.version,c.memory.textures++),he){Q.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer[Ee]=[];for(let Pe=0;Pe<C.mipmaps.length;Pe++)Q.__webglFramebuffer[Ee][Pe]=s.createFramebuffer()}else Q.__webglFramebuffer[Ee]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ee=0;Ee<C.mipmaps.length;Ee++)Q.__webglFramebuffer[Ee]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Le)for(let Ee=0,Pe=ge.length;Ee<Pe;Ee++){const ct=i.get(ge[Ee]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),c.memory.textures++)}if(F.samples>0&&mt(F)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ge.length;Ee++){const Pe=ge[Ee];Q.__webglColorRenderbuffer[Ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ee]);const ct=a.convert(Pe.format,Pe.colorSpace),ye=a.convert(Pe.type),ze=L(Pe.internalFormat,ct,ye,Pe.colorSpace,F.isXRRenderTarget===!0),Ke=ut(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,ze,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Q.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ee(s.TEXTURE_CUBE_MAP,C);for(let Ee=0;Ee<6;Ee++)if(C.mipmaps&&C.mipmaps.length>0)for(let Pe=0;Pe<C.mipmaps.length;Pe++)ve(Q.__webglFramebuffer[Ee][Pe],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe);else ve(Q.__webglFramebuffer[Ee],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);v(C)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let Ee=0,Pe=ge.length;Ee<Pe;Ee++){const ct=ge[Ee],ye=i.get(ct);t.bindTexture(s.TEXTURE_2D,ye.__webglTexture),ee(s.TEXTURE_2D,ct),ve(Q.__webglFramebuffer,F,ct,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,0),v(ct)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let Ee=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ee=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ee,pe.__webglTexture),ee(Ee,C),C.mipmaps&&C.mipmaps.length>0)for(let Pe=0;Pe<C.mipmaps.length;Pe++)ve(Q.__webglFramebuffer[Pe],F,C,s.COLOR_ATTACHMENT0,Ee,Pe);else ve(Q.__webglFramebuffer,F,C,s.COLOR_ATTACHMENT0,Ee,0);v(C)&&_(Ee),t.unbindTexture()}F.depthBuffer&&De(F)}function pt(F){const C=F.textures;for(let Q=0,pe=C.length;Q<pe;Q++){const ge=C[Q];if(v(ge)){const he=b(F),Le=i.get(ge).__webglTexture;t.bindTexture(he,Le),_(he),t.unbindTexture()}}}const Dt=[],X=[];function Zt(F){if(F.samples>0){if(mt(F)===!1){const C=F.textures,Q=F.width,pe=F.height;let ge=s.COLOR_BUFFER_BIT;const he=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=i.get(F),Ee=C.length>1;if(Ee)for(let Pe=0;Pe<C.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Pe=0;Pe<C.length;Pe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]);const ct=i.get(C[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,ge,s.NEAREST),f===!0&&(Dt.length=0,X.length=0,Dt.push(s.COLOR_ATTACHMENT0+Pe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Dt.push(he),X.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ee)for(let Pe=0;Pe<C.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]);const ct=i.get(C[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,ct,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&f){const C=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function ut(F){return Math.min(o.maxSamples,F.samples)}function mt(F){const C=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Je(F){const C=c.render.frame;p.get(F)!==C&&(p.set(F,C),F.update())}function Rt(F,C){const Q=F.colorSpace,pe=F.format,ge=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Q!==Co&&Q!==ir&&(Ct.getTransfer(Q)===kt?(pe!==hi||ge!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),C}function qe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.setTexture2D=ce,this.setTexture2DArray=ue,this.setTexture3D=le,this.setTextureCube=V,this.rebindTextures=We,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=mt}function Fb(s,e){function t(i,o=ir){let a;const c=Ct.getTransfer(o);if(i===dr)return s.UNSIGNED_BYTE;if(i===th)return s.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Z0)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===q0)return s.BYTE;if(i===K0)return s.SHORT;if(i===Ea)return s.UNSIGNED_SHORT;if(i===eh)return s.INT;if(i===vs)return s.UNSIGNED_INT;if(i===sr)return s.FLOAT;if(i===cr)return s.HALF_FLOAT;if(i===Q0)return s.ALPHA;if(i===J0)return s.RGB;if(i===hi)return s.RGBA;if(i===ex)return s.LUMINANCE;if(i===tx)return s.LUMINANCE_ALPHA;if(i===xo)return s.DEPTH_COMPONENT;if(i===To)return s.DEPTH_STENCIL;if(i===nx)return s.RED;if(i===ih)return s.RED_INTEGER;if(i===ix)return s.RG;if(i===rh)return s.RG_INTEGER;if(i===sh)return s.RGBA_INTEGER;if(i===dc||i===fc||i===hc||i===pc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===dc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===dc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sf||i===Mf||i===Ef||i===wf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Sf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ef)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tf||i===bf||i===Af)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Tf||i===bf)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Af)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cf||i===Rf||i===Pf||i===Lf||i===Nf||i===Df||i===If||i===Uf||i===kf||i===Ff||i===Of||i===zf||i===Bf||i===Vf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Cf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Df)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===If)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ff)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Of)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===Hf||i===Gf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===mc)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rx||i===jf||i===Wf||i===Xf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===mc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===jf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class Ob extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class po extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zb={type:"move"};class Qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,i),_=this._getHandJoint(h,E);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],x=p.position.distanceTo(m.position),y=.02,w=.005;h.inputState.pinching&&x>y+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=y-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(zb)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new po;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vb=`
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

}`;class Hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Un,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xn({vertexShader:Bb,fragmentShader:Vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gb extends ys{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",f=1,h=null,p=null,m=null,x=null,y=null,w=null;const E=new Hb,v=t.getContextAttributes();let _=null,b=null;const L=[],T=[],U=new et;let R=null;const N=new Dn;N.viewport=new $t;const k=new Dn;k.viewport=new $t;const D=[N,k],P=new Ob;let O=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=L[Z];return fe===void 0&&(fe=new Qd,L[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=L[Z];return fe===void 0&&(fe=new Qd,L[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=L[Z];return fe===void 0&&(fe=new Qd,L[Z]=fe),fe.getHandSpace()};function W(Z){const fe=T.indexOf(Z.inputSource);if(fe===-1)return;const ve=L[fe];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,h||c),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function oe(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",ce);for(let Z=0;Z<L.length;Z++){const fe=T[Z];fe!==null&&(T[Z]=null,L[Z].disconnect(fe))}O=null,q=null,E.reset(),e.setRenderTarget(_),y=null,x=null,m=null,o=null,b=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){u=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return m},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",ce),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),o.renderState.layers===void 0){const fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new Ri(y.framebufferWidth,y.framebufferHeight,{format:hi,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,ve=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?To:xo,ve=v.stencil?wo:vs);const Ae={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};m=new XRWebGLBinding(o,t),x=m.createProjectionLayer(Ae),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new Ri(x.textureWidth,x.textureHeight,{format:hi,type:dr,depthTexture:new mx(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(u),Te.setContext(o),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ce(Z){for(let fe=0;fe<Z.removed.length;fe++){const ve=Z.removed[fe],xe=T.indexOf(ve);xe>=0&&(T[xe]=null,L[xe].disconnect(ve))}for(let fe=0;fe<Z.added.length;fe++){const ve=Z.added[fe];let xe=T.indexOf(ve);if(xe===-1){for(let De=0;De<L.length;De++)if(De>=T.length){T.push(ve),xe=De;break}else if(T[De]===null){T[De]=ve,xe=De;break}if(xe===-1)break}const Ae=L[xe];Ae&&Ae.connect(ve)}}const ue=new K,le=new K;function V(Z,fe,ve){ue.setFromMatrixPosition(fe.matrixWorld),le.setFromMatrixPosition(ve.matrixWorld);const xe=ue.distanceTo(le),Ae=fe.projectionMatrix.elements,De=ve.projectionMatrix.elements,We=Ae[14]/(Ae[10]-1),vt=Ae[14]/(Ae[10]+1),pt=(Ae[9]+1)/Ae[5],Dt=(Ae[9]-1)/Ae[5],X=(Ae[8]-1)/Ae[0],Zt=(De[8]+1)/De[0],ut=We*X,mt=We*Zt,Je=xe/(-X+Zt),Rt=Je*-X;if(fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Rt),Z.translateZ(Je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=We+Je,F=vt+Je,C=ut-Rt,Q=mt+(xe-Rt),pe=pt*vt/F*qe,ge=Dt*vt/F*qe;Z.projectionMatrix.makePerspective(C,Q,pe,ge,qe,F),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ne(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let fe=Z.near,ve=Z.far;E.texture!==null&&(E.depthNear>0&&(fe=E.depthNear),E.depthFar>0&&(ve=E.depthFar)),P.near=k.near=N.near=fe,P.far=k.far=N.far=ve,(O!==P.near||q!==P.far)&&(o.updateRenderState({depthNear:P.near,depthFar:P.far}),O=P.near,q=P.far),N.layers.mask=Z.layers.mask|2,k.layers.mask=Z.layers.mask|4,P.layers.mask=N.layers.mask|k.layers.mask;const xe=Z.parent,Ae=P.cameras;ne(P,xe);for(let De=0;De<Ae.length;De++)ne(Ae[De],xe);Ae.length===2?V(P,N,k):P.projectionMatrix.copy(N.projectionMatrix),ie(Z,P,xe)};function ie(Z,fe,ve){ve===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=wa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(x===null&&y===null))return f},this.setFoveation=function(Z){f=Z,x!==null&&(x.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(P)};let B=null;function ee(Z,fe){if(p=fe.getViewerPose(h||c),w=fe,p!==null){const ve=p.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let xe=!1;ve.length!==P.cameras.length&&(P.cameras.length=0,xe=!0);for(let De=0;De<ve.length;De++){const We=ve[De];let vt=null;if(y!==null)vt=y.getViewport(We);else{const Dt=m.getViewSubImage(x,We);vt=Dt.viewport,De===0&&(e.setRenderTargetTextures(b,Dt.colorTexture,x.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(b))}let pt=D[De];pt===void 0&&(pt=new Dn,pt.layers.enable(De),pt.viewport=new $t,D[De]=pt),pt.matrix.fromArray(We.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(We.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(vt.x,vt.y,vt.width,vt.height),De===0&&(P.matrix.copy(pt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),xe===!0&&P.cameras.push(pt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const De=m.getDepthInformation(ve[0]);De&&De.isValid&&De.texture&&E.init(e,De,o.renderState)}}for(let ve=0;ve<L.length;ve++){const xe=T[ve],Ae=L[ve];xe!==null&&Ae!==void 0&&Ae.update(xe,fe,h||c)}B&&B(Z,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),w=null}const Te=new px;Te.setAnimationLoop(ee),this.setAnimationLoop=function(Z){B=Z},this.dispose=function(){}}}const cs=new Pi,jb=new Bt;function Wb(s,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function i(v,_){_.color.getRGB(v.fogColor.value,dx(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,b,L,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(v,_):_.isMeshToonMaterial?(a(v,_),m(v,_)):_.isMeshPhongMaterial?(a(v,_),p(v,_)):_.isMeshStandardMaterial?(a(v,_),x(v,_),_.isMeshPhysicalMaterial&&y(v,_,T)):_.isMeshMatcapMaterial?(a(v,_),w(v,_)):_.isMeshDepthMaterial?a(v,_):_.isMeshDistanceMaterial?(a(v,_),E(v,_)):_.isMeshNormalMaterial?a(v,_):_.isLineBasicMaterial?(c(v,_),_.isLineDashedMaterial&&u(v,_)):_.isPointsMaterial?f(v,_,b,L):_.isSpriteMaterial?h(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Yn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Yn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const b=e.get(_),L=b.envMap,T=b.envMapRotation;L&&(v.envMap.value=L,cs.copy(T),cs.x*=-1,cs.y*=-1,cs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),v.envMapRotation.value.setFromMatrix4(jb.makeRotationFromEuler(cs)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function c(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function u(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function f(v,_,b,L){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*b,v.scale.value=L*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function p(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function m(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function x(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function y(v,_,b){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,_){_.matcap&&(v.matcap.value=_.matcap)}function E(v,_){const b=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Xb(s,e,t,i){let o={},a={},c=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,L){const T=L.program;i.uniformBlockBinding(b,T)}function h(b,L){let T=o[b.id];T===void 0&&(w(b),T=p(b),o[b.id]=T,b.addEventListener("dispose",v));const U=L.program;i.updateUBOMapping(b,U);const R=e.render.frame;a[b.id]!==R&&(x(b),a[b.id]=R)}function p(b){const L=m();b.__bindingPointIndex=L;const T=s.createBuffer(),U=b.__size,R=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,U,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,T),T}function m(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(b){const L=o[b.id],T=b.uniforms,U=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let R=0,N=T.length;R<N;R++){const k=Array.isArray(T[R])?T[R]:[T[R]];for(let D=0,P=k.length;D<P;D++){const O=k[D];if(y(O,R,D,U)===!0){const q=O.__offset,W=Array.isArray(O.value)?O.value:[O.value];let oe=0;for(let ce=0;ce<W.length;ce++){const ue=W[ce],le=E(ue);typeof ue=="number"||typeof ue=="boolean"?(O.__data[0]=ue,s.bufferSubData(s.UNIFORM_BUFFER,q+oe,O.__data)):ue.isMatrix3?(O.__data[0]=ue.elements[0],O.__data[1]=ue.elements[1],O.__data[2]=ue.elements[2],O.__data[3]=0,O.__data[4]=ue.elements[3],O.__data[5]=ue.elements[4],O.__data[6]=ue.elements[5],O.__data[7]=0,O.__data[8]=ue.elements[6],O.__data[9]=ue.elements[7],O.__data[10]=ue.elements[8],O.__data[11]=0):(ue.toArray(O.__data,oe),oe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,L,T,U){const R=b.value,N=L+"_"+T;if(U[N]===void 0)return typeof R=="number"||typeof R=="boolean"?U[N]=R:U[N]=R.clone(),!0;{const k=U[N];if(typeof R=="number"||typeof R=="boolean"){if(k!==R)return U[N]=R,!0}else if(k.equals(R)===!1)return k.copy(R),!0}return!1}function w(b){const L=b.uniforms;let T=0;const U=16;for(let N=0,k=L.length;N<k;N++){const D=Array.isArray(L[N])?L[N]:[L[N]];for(let P=0,O=D.length;P<O;P++){const q=D[P],W=Array.isArray(q.value)?q.value:[q.value];for(let oe=0,ce=W.length;oe<ce;oe++){const ue=W[oe],le=E(ue),V=T%U,ne=V%le.boundary,ie=V+ne;T+=ne,ie!==0&&U-ie<le.storage&&(T+=U-ie),q.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=le.storage}}}const R=T%U;return R>0&&(T+=U-R),b.__size=T,b.__cache={},this}function E(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),L}function v(b){const L=b.target;L.removeEventListener("dispose",v);const T=c.indexOf(L.__bindingPointIndex);c.splice(T,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function _(){for(const b in o)s.deleteBuffer(o[b]);c=[],o={},a={}}return{bind:f,update:h,dispose:_}}class yx{constructor(e={}){const{canvas:t=kS(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const w=new Uint32Array(4),E=new Int32Array(4);let v=null,_=null;const b=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=lr,this.toneMappingExposure=1;const T=this;let U=!1,R=0,N=0,k=null,D=-1,P=null;const O=new $t,q=new $t;let W=null;const oe=new ft(0);let ce=0,ue=t.width,le=t.height,V=1,ne=null,ie=null;const B=new $t(0,0,ue,le),ee=new $t(0,0,ue,le);let Te=!1;const Z=new uh;let fe=!1,ve=!1;const xe=new Bt,Ae=new Bt,De=new K,We=new $t,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Dt(){return k===null?V:1}let X=i;function Zt(I,Y){return t.getContext(I,Y)}try{const I={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nc}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),X===null){const Y="webgl2";if(X=Zt(Y,I),X===null)throw Zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ut,mt,Je,Rt,qe,F,C,Q,pe,ge,he,Le,Ee,Pe,ct,ye,ze,Ke,tt,Be,gt,Ze,Mt,j;function Ne(){ut=new Qw(X),ut.init(),Ze=new Fb(X,ut),mt=new Xw(X,ut,e,Ze),Je=new Ib(X,ut),mt.reverseDepthBuffer&&x&&Je.buffers.depth.setReversed(!0),Rt=new tT(X),qe=new _b,F=new kb(X,ut,Je,qe,mt,Ze,Rt),C=new $w(T),Q=new Zw(T),pe=new lM(X),Mt=new jw(X,pe),ge=new Jw(X,pe,Rt,Mt),he=new iT(X,ge,pe,Rt),tt=new nT(X,mt,F),ye=new Yw(qe),Le=new vb(T,C,Q,ut,mt,Mt,ye),Ee=new Wb(T,qe),Pe=new Sb,ct=new Ab(ut),Ke=new Gw(T,C,Q,Je,he,y,f),ze=new Nb(T,he,mt),j=new Xb(X,Rt,mt,Je),Be=new Ww(X,ut,Rt),gt=new eT(X,ut,Rt),Rt.programs=Le.programs,T.capabilities=mt,T.extensions=ut,T.properties=qe,T.renderLists=Pe,T.shadowMap=ze,T.state=Je,T.info=Rt}Ne();const de=new Gb(T,X);this.xr=de,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const I=ut.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ut.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(I){I!==void 0&&(V=I,this.setSize(ue,le,!1))},this.getSize=function(I){return I.set(ue,le)},this.setSize=function(I,Y,se=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=I,le=Y,t.width=Math.floor(I*V),t.height=Math.floor(Y*V),se===!0&&(t.style.width=I+"px",t.style.height=Y+"px"),this.setViewport(0,0,I,Y)},this.getDrawingBufferSize=function(I){return I.set(ue*V,le*V).floor()},this.setDrawingBufferSize=function(I,Y,se){ue=I,le=Y,V=se,t.width=Math.floor(I*se),t.height=Math.floor(Y*se),this.setViewport(0,0,I,Y)},this.getCurrentViewport=function(I){return I.copy(O)},this.getViewport=function(I){return I.copy(B)},this.setViewport=function(I,Y,se,ae){I.isVector4?B.set(I.x,I.y,I.z,I.w):B.set(I,Y,se,ae),Je.viewport(O.copy(B).multiplyScalar(V).round())},this.getScissor=function(I){return I.copy(ee)},this.setScissor=function(I,Y,se,ae){I.isVector4?ee.set(I.x,I.y,I.z,I.w):ee.set(I,Y,se,ae),Je.scissor(q.copy(ee).multiplyScalar(V).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(I){Je.setScissorTest(Te=I)},this.setOpaqueSort=function(I){ne=I},this.setTransparentSort=function(I){ie=I},this.getClearColor=function(I){return I.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(I=!0,Y=!0,se=!0){let ae=0;if(I){let $=!1;if(k!==null){const Re=k.texture.format;$=Re===sh||Re===rh||Re===ih}if($){const Re=k.texture.type,we=Re===dr||Re===vs||Re===Ea||Re===wo||Re===th||Re===nh,Xe=Ke.getClearColor(),Ge=Ke.getClearAlpha(),ot=Xe.r,lt=Xe.g,Ye=Xe.b;we?(w[0]=ot,w[1]=lt,w[2]=Ye,w[3]=Ge,X.clearBufferuiv(X.COLOR,0,w)):(E[0]=ot,E[1]=lt,E[2]=Ye,E[3]=Ge,X.clearBufferiv(X.COLOR,0,E))}else ae|=X.COLOR_BUFFER_BIT}Y&&(ae|=X.DEPTH_BUFFER_BIT),se&&(ae|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Pe.dispose(),ct.dispose(),qe.dispose(),C.dispose(),Q.dispose(),he.dispose(),Mt.dispose(),j.dispose(),Le.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ms),de.removeEventListener("sessionend",fr),zi.stop()};function me(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const I=Rt.autoReset,Y=ze.enabled,se=ze.autoUpdate,ae=ze.needsUpdate,$=ze.type;Ne(),Rt.autoReset=I,ze.enabled=Y,ze.autoUpdate=se,ze.needsUpdate=ae,ze.type=$}function Ue(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function dt(I){const Y=I.target;Y.removeEventListener("dispose",dt),Vt(Y)}function Vt(I){en(I),qe.remove(I)}function en(I){const Y=qe.get(I).programs;Y!==void 0&&(Y.forEach(function(se){Le.releaseProgram(se)}),I.isShaderMaterial&&Le.releaseShaderCache(I))}this.renderBufferDirect=function(I,Y,se,ae,$,Re){Y===null&&(Y=vt);const we=$.isMesh&&$.matrixWorld.determinant()<0,Xe=Pa(I,Y,se,ae,$);Je.setMaterial(ae,we);let Ge=se.index,ot=1;if(ae.wireframe===!0){if(Ge=ge.getWireframeAttribute(se),Ge===void 0)return;ot=2}const lt=se.drawRange,Ye=se.attributes.position;let Tt=lt.start*ot,It=(lt.start+lt.count)*ot;Re!==null&&(Tt=Math.max(Tt,Re.start*ot),It=Math.min(It,(Re.start+Re.count)*ot)),Ge!==null?(Tt=Math.max(Tt,0),It=Math.min(It,Ge.count)):Ye!=null&&(Tt=Math.max(Tt,0),It=Math.min(It,Ye.count));const wt=It-Tt;if(wt<0||wt===1/0)return;Mt.setup($,ae,Xe,se,Ge);let gn,ht=Be;if(Ge!==null&&(gn=pe.get(Ge),ht=gt,ht.setIndex(gn)),$.isMesh)ae.wireframe===!0?(Je.setLineWidth(ae.wireframeLinewidth*Dt()),ht.setMode(X.LINES)):ht.setMode(X.TRIANGLES);else if($.isLine){let Qe=ae.linewidth;Qe===void 0&&(Qe=1),Je.setLineWidth(Qe*Dt()),$.isLineSegments?ht.setMode(X.LINES):$.isLineLoop?ht.setMode(X.LINE_LOOP):ht.setMode(X.LINE_STRIP)}else $.isPoints?ht.setMode(X.POINTS):$.isSprite&&ht.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ht.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))ht.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qe=$._multiDrawStarts,gi=$._multiDrawCounts,Pt=$._multiDrawCount,xn=Ge?pe.get(Ge).bytesPerElement:1,xi=qe.get(ae).currentProgram.getUniforms();for(let tn=0;tn<Pt;tn++)xi.setValue(X,"_gl_DrawID",tn),ht.render(Qe[tn]/xn,gi[tn])}else if($.isInstancedMesh)ht.renderInstances(Tt,wt,$.count);else if(se.isInstancedBufferGeometry){const Qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,gi=Math.min(se.instanceCount,Qe);ht.renderInstances(Tt,wt,gi)}else ht.render(Tt,wt)};function bt(I,Y,se){I.transparent===!0&&I.side===di&&I.forceSinglePass===!1?(I.side=Yn,I.needsUpdate=!0,Es(I,Y,se),I.side=Hr,I.needsUpdate=!0,Es(I,Y,se),I.side=di):Es(I,Y,se)}this.compile=function(I,Y,se=null){se===null&&(se=I),_=ct.get(se),_.init(Y),L.push(_),se.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),I!==se&&I.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights();const ae=new Set;return I.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Re=$.material;if(Re)if(Array.isArray(Re))for(let we=0;we<Re.length;we++){const Xe=Re[we];bt(Xe,se,$),ae.add(Xe)}else bt(Re,se,$),ae.add(Re)}),L.pop(),_=null,ae},this.compileAsync=function(I,Y,se=null){const ae=this.compile(I,Y,se);return new Promise($=>{function Re(){if(ae.forEach(function(we){qe.get(we).currentProgram.isReady()&&ae.delete(we)}),ae.size===0){$(I);return}setTimeout(Re,10)}ut.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let kn=null;function bn(I){kn&&kn(I)}function Ms(){zi.stop()}function fr(){zi.start()}const zi=new px;zi.setAnimationLoop(bn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(I){kn=I,de.setAnimationLoop(I),I===null?zi.stop():zi.start()},de.addEventListener("sessionstart",Ms),de.addEventListener("sessionend",fr),this.render=function(I,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(Y),Y=de.getCamera()),I.isScene===!0&&I.onBeforeRender(T,I,Y,k),_=ct.get(I,L.length),_.init(Y),L.push(_),Ae.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,fe=ye.init(this.clippingPlanes,ve),v=Pe.get(I,b.length),v.init(),b.push(v),de.enabled===!0&&de.isPresenting===!0){const Re=T.xr.getDepthSensingMesh();Re!==null&&Bi(Re,Y,-1/0,T.sortObjects)}Bi(I,Y,0,T.sortObjects),v.finish(),T.sortObjects===!0&&v.sort(ne,ie),pt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,pt&&Ke.addToRenderList(v,I),this.info.render.frame++,fe===!0&&ye.beginShadows();const se=_.state.shadowsArray;ze.render(se,I,Y),fe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=v.opaque,$=v.transmissive;if(_.setupLights(),Y.isArrayCamera){const Re=Y.cameras;if($.length>0)for(let we=0,Xe=Re.length;we<Xe;we++){const Ge=Re[we];Wr(ae,$,I,Ge)}pt&&Ke.render(I);for(let we=0,Xe=Re.length;we<Xe;we++){const Ge=Re[we];jr(v,I,Ge,Ge.viewport)}}else $.length>0&&Wr(ae,$,I,Y),pt&&Ke.render(I),jr(v,I,Y);k!==null&&(F.updateMultisampleRenderTarget(k),F.updateRenderTargetMipmap(k)),I.isScene===!0&&I.onAfterRender(T,I,Y),Mt.resetDefaultState(),D=-1,P=null,L.pop(),L.length>0?(_=L[L.length-1],fe===!0&&ye.setGlobalState(T.clippingPlanes,_.state.camera)):_=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function Bi(I,Y,se,ae){if(I.visible===!1)return;if(I.layers.test(Y.layers)){if(I.isGroup)se=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Y);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Z.intersectsSprite(I)){ae&&We.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ae);const we=he.update(I),Xe=I.material;Xe.visible&&v.push(I,we,Xe,se,We.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Z.intersectsObject(I))){const we=he.update(I),Xe=I.material;if(ae&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),We.copy(I.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),We.copy(we.boundingSphere.center)),We.applyMatrix4(I.matrixWorld).applyMatrix4(Ae)),Array.isArray(Xe)){const Ge=we.groups;for(let ot=0,lt=Ge.length;ot<lt;ot++){const Ye=Ge[ot],Tt=Xe[Ye.materialIndex];Tt&&Tt.visible&&v.push(I,we,Tt,se,We.z,Ye)}}else Xe.visible&&v.push(I,we,Xe,se,We.z,null)}}const Re=I.children;for(let we=0,Xe=Re.length;we<Xe;we++)Bi(Re[we],Y,se,ae)}function jr(I,Y,se,ae){const $=I.opaque,Re=I.transmissive,we=I.transparent;_.setupLightsView(se),fe===!0&&ye.setGlobalState(T.clippingPlanes,se),ae&&Je.viewport(O.copy(ae)),$.length>0&&hr($,Y,se),Re.length>0&&hr(Re,Y,se),we.length>0&&hr(we,Y,se),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function Wr(I,Y,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ae.id]===void 0&&(_.state.transmissionRenderTarget[ae.id]=new Ri(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?cr:dr,minFilter:Vr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Re=_.state.transmissionRenderTarget[ae.id],we=ae.viewport||O;Re.setSize(we.z,we.w);const Xe=T.getRenderTarget();T.setRenderTarget(Re),T.getClearColor(oe),ce=T.getClearAlpha(),ce<1&&T.setClearColor(16777215,.5),T.clear(),pt&&Ke.render(se);const Ge=T.toneMapping;T.toneMapping=lr;const ot=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),_.setupLightsView(ae),fe===!0&&ye.setGlobalState(T.clippingPlanes,ae),hr(I,se,ae),F.updateMultisampleRenderTarget(Re),F.updateRenderTargetMipmap(Re),ut.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Ye=0,Tt=Y.length;Ye<Tt;Ye++){const It=Y[Ye],wt=It.object,gn=It.geometry,ht=It.material,Qe=It.group;if(ht.side===di&&wt.layers.test(ae.layers)){const gi=ht.side;ht.side=Yn,ht.needsUpdate=!0,Ca(wt,se,ae,gn,ht,Qe),ht.side=gi,ht.needsUpdate=!0,lt=!0}}lt===!0&&(F.updateMultisampleRenderTarget(Re),F.updateRenderTargetMipmap(Re))}T.setRenderTarget(Xe),T.setClearColor(oe,ce),ot!==void 0&&(ae.viewport=ot),T.toneMapping=Ge}function hr(I,Y,se){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Re=I.length;$<Re;$++){const we=I[$],Xe=we.object,Ge=we.geometry,ot=ae===null?we.material:ae,lt=we.group;Xe.layers.test(se.layers)&&Ca(Xe,Y,se,Ge,ot,lt)}}function Ca(I,Y,se,ae,$,Re){I.onBeforeRender(T,Y,se,ae,$,Re),I.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),$.onBeforeRender(T,Y,se,ae,I,Re),$.transparent===!0&&$.side===di&&$.forceSinglePass===!1?($.side=Yn,$.needsUpdate=!0,T.renderBufferDirect(se,Y,ae,$,I,Re),$.side=Hr,$.needsUpdate=!0,T.renderBufferDirect(se,Y,ae,$,I,Re),$.side=di):T.renderBufferDirect(se,Y,ae,$,I,Re),I.onAfterRender(T,Y,se,ae,$,Re)}function Es(I,Y,se){Y.isScene!==!0&&(Y=vt);const ae=qe.get(I),$=_.state.lights,Re=_.state.shadowsArray,we=$.state.version,Xe=Le.getParameters(I,$.state,Re,Y,se),Ge=Le.getProgramCacheKey(Xe);let ot=ae.programs;ae.environment=I.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(I.isMeshStandardMaterial?Q:C).get(I.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&I.envMap===null?Y.environmentRotation:I.envMapRotation,ot===void 0&&(I.addEventListener("dispose",dt),ot=new Map,ae.programs=ot);let lt=ot.get(Ge);if(lt!==void 0){if(ae.currentProgram===lt&&ae.lightsStateVersion===we)return Li(I,Xe),lt}else Xe.uniforms=Le.getUniforms(I),I.onBeforeCompile(Xe,T),lt=Le.acquireProgram(Xe,Ge),ot.set(Ge,lt),ae.uniforms=Xe.uniforms;const Ye=ae.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ye.clippingPlanes=ye.uniform),Li(I,Xe),ae.needsLights=Oc(I),ae.lightsStateVersion=we,ae.needsLights&&(Ye.ambientLightColor.value=$.state.ambient,Ye.lightProbe.value=$.state.probe,Ye.directionalLights.value=$.state.directional,Ye.directionalLightShadows.value=$.state.directionalShadow,Ye.spotLights.value=$.state.spot,Ye.spotLightShadows.value=$.state.spotShadow,Ye.rectAreaLights.value=$.state.rectArea,Ye.ltc_1.value=$.state.rectAreaLTC1,Ye.ltc_2.value=$.state.rectAreaLTC2,Ye.pointLights.value=$.state.point,Ye.pointLightShadows.value=$.state.pointShadow,Ye.hemisphereLights.value=$.state.hemi,Ye.directionalShadowMap.value=$.state.directionalShadowMap,Ye.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ye.spotShadowMap.value=$.state.spotShadowMap,Ye.spotLightMatrix.value=$.state.spotLightMatrix,Ye.spotLightMap.value=$.state.spotLightMap,Ye.pointShadowMap.value=$.state.pointShadowMap,Ye.pointShadowMatrix.value=$.state.pointShadowMatrix),ae.currentProgram=lt,ae.uniformsList=null,lt}function Ra(I){if(I.uniformsList===null){const Y=I.currentProgram.getUniforms();I.uniformsList=gc.seqWithValue(Y.seq,I.uniforms)}return I.uniformsList}function Li(I,Y){const se=qe.get(I);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function Pa(I,Y,se,ae,$){Y.isScene!==!0&&(Y=vt),F.resetTextureUnits();const Re=Y.fog,we=ae.isMeshStandardMaterial?Y.environment:null,Xe=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Co,Ge=(ae.isMeshStandardMaterial?Q:C).get(ae.envMap||we),ot=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,lt=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ye=!!se.morphAttributes.position,Tt=!!se.morphAttributes.normal,It=!!se.morphAttributes.color;let wt=lr;ae.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(wt=T.toneMapping);const gn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ht=gn!==void 0?gn.length:0,Qe=qe.get(ae),gi=_.state.lights;if(fe===!0&&(ve===!0||I!==P)){const An=I===P&&ae.id===D;ye.setState(ae,I,An)}let Pt=!1;ae.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==gi.state.version||Qe.outputColorSpace!==Xe||$.isBatchedMesh&&Qe.batching===!1||!$.isBatchedMesh&&Qe.batching===!0||$.isBatchedMesh&&Qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qe.instancing===!1||!$.isInstancedMesh&&Qe.instancing===!0||$.isSkinnedMesh&&Qe.skinning===!1||!$.isSkinnedMesh&&Qe.skinning===!0||$.isInstancedMesh&&Qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qe.instancingMorph===!1&&$.morphTexture!==null||Qe.envMap!==Ge||ae.fog===!0&&Qe.fog!==Re||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ye.numPlanes||Qe.numIntersection!==ye.numIntersection)||Qe.vertexAlphas!==ot||Qe.vertexTangents!==lt||Qe.morphTargets!==Ye||Qe.morphNormals!==Tt||Qe.morphColors!==It||Qe.toneMapping!==wt||Qe.morphTargetsCount!==ht)&&(Pt=!0):(Pt=!0,Qe.__version=ae.version);let xn=Qe.currentProgram;Pt===!0&&(xn=Es(ae,Y,$));let xi=!1,tn=!1,Ni=!1;const Ot=xn.getUniforms(),ni=Qe.uniforms;if(Je.useProgram(xn.program)&&(xi=!0,tn=!0,Ni=!0),ae.id!==D&&(D=ae.id,tn=!0),xi||P!==I){Je.buffers.depth.getReversed()?(xe.copy(I.projectionMatrix),OS(xe),zS(xe),Ot.setValue(X,"projectionMatrix",xe)):Ot.setValue(X,"projectionMatrix",I.projectionMatrix),Ot.setValue(X,"viewMatrix",I.matrixWorldInverse);const ii=Ot.map.cameraPosition;ii!==void 0&&ii.setValue(X,De.setFromMatrixPosition(I.matrixWorld)),mt.logarithmicDepthBuffer&&Ot.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ot.setValue(X,"isOrthographic",I.isOrthographicCamera===!0),P!==I&&(P=I,tn=!0,Ni=!0)}if($.isSkinnedMesh){Ot.setOptional(X,$,"bindMatrix"),Ot.setOptional(X,$,"bindMatrixInverse");const An=$.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ot.setValue(X,"boneTexture",An.boneTexture,F))}$.isBatchedMesh&&(Ot.setOptional(X,$,"batchingTexture"),Ot.setValue(X,"batchingTexture",$._matricesTexture,F),Ot.setOptional(X,$,"batchingIdTexture"),Ot.setValue(X,"batchingIdTexture",$._indirectTexture,F),Ot.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&Ot.setValue(X,"batchingColorTexture",$._colorsTexture,F));const Vi=se.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&tt.update($,se,xn),(tn||Qe.receiveShadow!==$.receiveShadow)&&(Qe.receiveShadow=$.receiveShadow,Ot.setValue(X,"receiveShadow",$.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(ni.envMap.value=Ge,ni.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Y.environment!==null&&(ni.envMapIntensity.value=Y.environmentIntensity),tn&&(Ot.setValue(X,"toneMappingExposure",T.toneMappingExposure),Qe.needsLights&&La(ni,Ni),Re&&ae.fog===!0&&Ee.refreshFogUniforms(ni,Re),Ee.refreshMaterialUniforms(ni,ae,V,le,_.state.transmissionRenderTarget[I.id]),gc.upload(X,Ra(Qe),ni,F)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(gc.upload(X,Ra(Qe),ni,F),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ot.setValue(X,"center",$.center),Ot.setValue(X,"modelViewMatrix",$.modelViewMatrix),Ot.setValue(X,"normalMatrix",$.normalMatrix),Ot.setValue(X,"modelMatrix",$.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const An=ae.uniformsGroups;for(let ii=0,Fn=An.length;ii<Fn;ii++){const Na=An[ii];j.update(Na,xn),j.bind(Na,xn)}}return xn}function La(I,Y){I.ambientLightColor.needsUpdate=Y,I.lightProbe.needsUpdate=Y,I.directionalLights.needsUpdate=Y,I.directionalLightShadows.needsUpdate=Y,I.pointLights.needsUpdate=Y,I.pointLightShadows.needsUpdate=Y,I.spotLights.needsUpdate=Y,I.spotLightShadows.needsUpdate=Y,I.rectAreaLights.needsUpdate=Y,I.hemisphereLights.needsUpdate=Y}function Oc(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(I,Y,se){qe.get(I.texture).__webglTexture=Y,qe.get(I.depthTexture).__webglTexture=se;const ae=qe.get(I);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Y){const se=qe.get(I);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(I,Y=0,se=0){k=I,R=Y,N=se;let ae=!0,$=null,Re=!1,we=!1;if(I){const Ge=qe.get(I);if(Ge.__useDefaultFramebuffer!==void 0)Je.bindFramebuffer(X.FRAMEBUFFER,null),ae=!1;else if(Ge.__webglFramebuffer===void 0)F.setupRenderTarget(I);else if(Ge.__hasExternalTextures)F.rebindTextures(I,qe.get(I.texture).__webglTexture,qe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ye=I.depthTexture;if(Ge.__boundDepthTexture!==Ye){if(Ye!==null&&qe.has(Ye)&&(I.width!==Ye.image.width||I.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(I)}}const ot=I.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(we=!0);const lt=qe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(lt[Y])?$=lt[Y][se]:$=lt[Y],Re=!0):I.samples>0&&F.useMultisampledRTT(I)===!1?$=qe.get(I).__webglMultisampledFramebuffer:Array.isArray(lt)?$=lt[se]:$=lt,O.copy(I.viewport),q.copy(I.scissor),W=I.scissorTest}else O.copy(B).multiplyScalar(V).floor(),q.copy(ee).multiplyScalar(V).floor(),W=Te;if(Je.bindFramebuffer(X.FRAMEBUFFER,$)&&ae&&Je.drawBuffers(I,$),Je.viewport(O),Je.scissor(q),Je.setScissorTest(W),Re){const Ge=qe.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ge.__webglTexture,se)}else if(we){const Ge=qe.get(I.texture),ot=Y||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ge.__webglTexture,se||0,ot)}D=-1},this.readRenderTargetPixels=function(I,Y,se,ae,$,Re,we){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=qe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&we!==void 0&&(Xe=Xe[we]),Xe){Je.bindFramebuffer(X.FRAMEBUFFER,Xe);try{const Ge=I.texture,ot=Ge.format,lt=Ge.type;if(!mt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=I.width-ae&&se>=0&&se<=I.height-$&&X.readPixels(Y,se,ae,$,Ze.convert(ot),Ze.convert(lt),Re)}finally{const Ge=k!==null?qe.get(k).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(I,Y,se,ae,$,Re,we){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=qe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&we!==void 0&&(Xe=Xe[we]),Xe){const Ge=I.texture,ot=Ge.format,lt=Ge.type;if(!mt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=I.width-ae&&se>=0&&se<=I.height-$){Je.bindFramebuffer(X.FRAMEBUFFER,Xe);const Ye=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ye),X.bufferData(X.PIXEL_PACK_BUFFER,Re.byteLength,X.STREAM_READ),X.readPixels(Y,se,ae,$,Ze.convert(ot),Ze.convert(lt),0);const Tt=k!==null?qe.get(k).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,Tt);const It=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await FS(X,It,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ye),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Re),X.deleteBuffer(Ye),X.deleteSync(It),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,Y=null,se=0){I.isTexture!==!0&&(va("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,I=arguments[1]);const ae=Math.pow(2,-se),$=Math.floor(I.image.width*ae),Re=Math.floor(I.image.height*ae),we=Y!==null?Y.x:0,Xe=Y!==null?Y.y:0;F.setTexture2D(I,0),X.copyTexSubImage2D(X.TEXTURE_2D,se,0,0,we,Xe,$,Re),Je.unbindTexture()},this.copyTextureToTexture=function(I,Y,se=null,ae=null,$=0){I.isTexture!==!0&&(va("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,I=arguments[1],Y=arguments[2],$=arguments[3]||0,se=null);let Re,we,Xe,Ge,ot,lt,Ye,Tt,It;const wt=I.isCompressedTexture?I.mipmaps[$]:I.image;se!==null?(Re=se.max.x-se.min.x,we=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,Ge=se.min.x,ot=se.min.y,lt=se.isBox3?se.min.z:0):(Re=wt.width,we=wt.height,Xe=wt.depth||1,Ge=0,ot=0,lt=0),ae!==null?(Ye=ae.x,Tt=ae.y,It=ae.z):(Ye=0,Tt=0,It=0);const gn=Ze.convert(Y.format),ht=Ze.convert(Y.type);let Qe;Y.isData3DTexture?(F.setTexture3D(Y,0),Qe=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(F.setTexture2DArray(Y,0),Qe=X.TEXTURE_2D_ARRAY):(F.setTexture2D(Y,0),Qe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const gi=X.getParameter(X.UNPACK_ROW_LENGTH),Pt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),xn=X.getParameter(X.UNPACK_SKIP_PIXELS),xi=X.getParameter(X.UNPACK_SKIP_ROWS),tn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,wt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,wt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ge),X.pixelStorei(X.UNPACK_SKIP_ROWS,ot),X.pixelStorei(X.UNPACK_SKIP_IMAGES,lt);const Ni=I.isDataArrayTexture||I.isData3DTexture,Ot=Y.isDataArrayTexture||Y.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const ni=qe.get(I),Vi=qe.get(Y),An=qe.get(ni.__renderTarget),ii=qe.get(Vi.__renderTarget);Je.bindFramebuffer(X.READ_FRAMEBUFFER,An.__webglFramebuffer),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Fn=0;Fn<Xe;Fn++)Ni&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(I).__webglTexture,$,lt+Fn),I.isDepthTexture?(Ot&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(Y).__webglTexture,$,It+Fn),X.blitFramebuffer(Ge,ot,Re,we,Ye,Tt,Re,we,X.DEPTH_BUFFER_BIT,X.NEAREST)):Ot?X.copyTexSubImage3D(Qe,$,Ye,Tt,It+Fn,Ge,ot,Re,we):X.copyTexSubImage2D(Qe,$,Ye,Tt,It+Fn,Ge,ot,Re,we);Je.bindFramebuffer(X.READ_FRAMEBUFFER,null),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ot?I.isDataTexture||I.isData3DTexture?X.texSubImage3D(Qe,$,Ye,Tt,It,Re,we,Xe,gn,ht,wt.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Qe,$,Ye,Tt,It,Re,we,Xe,gn,wt.data):X.texSubImage3D(Qe,$,Ye,Tt,It,Re,we,Xe,gn,ht,wt):I.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,$,Ye,Tt,Re,we,gn,ht,wt.data):I.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,$,Ye,Tt,wt.width,wt.height,gn,wt.data):X.texSubImage2D(X.TEXTURE_2D,$,Ye,Tt,Re,we,gn,ht,wt);X.pixelStorei(X.UNPACK_ROW_LENGTH,gi),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Pt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,xn),X.pixelStorei(X.UNPACK_SKIP_ROWS,xi),X.pixelStorei(X.UNPACK_SKIP_IMAGES,tn),$===0&&Y.generateMipmaps&&X.generateMipmap(Qe),Je.unbindTexture()},this.copyTextureToTexture3D=function(I,Y,se=null,ae=null,$=0){return I.isTexture!==!0&&(va("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ae=arguments[1]||null,I=arguments[2],Y=arguments[3],$=arguments[4]||0),va('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,Y,se,ae,$)},this.initRenderTarget=function(I){qe.get(I).__webglFramebuffer===void 0&&F.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?F.setTextureCube(I,0):I.isData3DTexture?F.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?F.setTexture2DArray(I,0):F.setTexture2D(I,0),Je.unbindTexture()},this.resetState=function(){R=0,N=0,k=null,Je.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}class hh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(e),this.density=t}clone(){return new hh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bc extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ph extends Ss{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ac=new K,Cc=new K,s0=new Bt,pa=new kc,ec=new Uc,Jd=new K,o0=new K;class Yb extends mn{constructor(e=new $n,t=new ph){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)Ac.fromBufferAttribute(t,o-1),Cc.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=Ac.distanceTo(Cc);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(o),ec.radius+=a,e.ray.intersectsSphere(ec)===!1)return;s0.copy(o).invert(),pa.copy(e.ray).applyMatrix4(s0);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=i.index,x=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),w=Math.min(p.count,c.start+c.count);for(let E=y,v=w-1;E<v;E+=h){const _=p.getX(E),b=p.getX(E+1),L=tc(this,e,pa,f,_,b);L&&t.push(L)}if(this.isLineLoop){const E=p.getX(w-1),v=p.getX(y),_=tc(this,e,pa,f,E,v);_&&t.push(_)}}else{const y=Math.max(0,c.start),w=Math.min(x.count,c.start+c.count);for(let E=y,v=w-1;E<v;E+=h){const _=tc(this,e,pa,f,E,E+1);_&&t.push(_)}if(this.isLineLoop){const E=tc(this,e,pa,f,w-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function tc(s,e,t,i,o,a){const c=s.geometry.attributes.position;if(Ac.fromBufferAttribute(c,o),Cc.fromBufferAttribute(c,a),t.distanceSqToSegment(Ac,Cc,Jd,o0)>i)return;Jd.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(Jd);if(!(f<e.near||f>e.far))return{distance:f,point:o0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const a0=new K,l0=new K;class Sx extends Yb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)a0.fromBufferAttribute(t,o),l0.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+a0.distanceTo(l0);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ef extends Un{constructor(e,t,i,o,a,c,u,f,h,p,m,x){super(null,c,u,f,h,p,o,a,m,x),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class mh extends $n{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],c=[],u=[],f=[],h=new K,p=new et;c.push(0,0,0),u.push(0,0,1),f.push(.5,.5);for(let m=0,x=3;m<=t;m++,x+=3){const y=i+m/t*o;h.x=e*Math.cos(y),h.y=e*Math.sin(y),c.push(h.x,h.y,h.z),u.push(0,0,1),p.x=(c[x]/e+1)/2,p.y=(c[x+1]/e+1)/2,f.push(p.x,p.y)}for(let m=1;m<=t;m++)a.push(m,m+1,0);this.setIndex(a),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const nc=new K,ic=new K,tf=new K,rc=new fi;class $b extends $n{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),a=Math.cos(vo*t),c=e.getIndex(),u=e.getAttribute("position"),f=c?c.count:u.count,h=[0,0,0],p=["a","b","c"],m=new Array(3),x={},y=[];for(let w=0;w<f;w+=3){c?(h[0]=c.getX(w),h[1]=c.getX(w+1),h[2]=c.getX(w+2)):(h[0]=w,h[1]=w+1,h[2]=w+2);const{a:E,b:v,c:_}=rc;if(E.fromBufferAttribute(u,h[0]),v.fromBufferAttribute(u,h[1]),_.fromBufferAttribute(u,h[2]),rc.getNormal(tf),m[0]=`${Math.round(E.x*o)},${Math.round(E.y*o)},${Math.round(E.z*o)}`,m[1]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,m[2]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let b=0;b<3;b++){const L=(b+1)%3,T=m[b],U=m[L],R=rc[p[b]],N=rc[p[L]],k=`${T}_${U}`,D=`${U}_${T}`;D in x&&x[D]?(tf.dot(x[D].normal)<=a&&(y.push(R.x,R.y,R.z),y.push(N.x,N.y,N.z)),x[D]=null):k in x||(x[k]={index0:h[b],index1:h[L],normal:tf.clone()})}}for(const w in x)if(x[w]){const{index0:E,index1:v}=x[w];nc.fromBufferAttribute(u,E),ic.fromBufferAttribute(u,v),y.push(nc.x,nc.y,nc.z),y.push(ic.x,ic.y,ic.z)}this.setAttribute("position",new Kt(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xc extends Ss{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qb extends Ss{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mx extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const nf=new Bt,c0=new K,u0=new K;class Kb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;c0.setFromMatrixPosition(e.matrixWorld),t.position.copy(c0),u0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(u0),t.updateMatrixWorld(),nf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zb extends Kb{constructor(){super(new dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yo extends Mx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Zb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ex extends Mx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=d0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=d0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function d0(){return performance.now()}const gh="\\[\\]\\.:\\/",Jb=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",e2="[^"+gh.replace("\\.","")+"]",t2=/((?:WC+[\/:])*)/.source.replace("WC",xh),n2=/(WCOD+)?/.source.replace("WCOD",e2),i2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),r2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),s2=new RegExp("^"+t2+n2+i2+r2+"$"),o2=["material","materials","bones","map"];class a2{constructor(e,t,i){const o=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Nt{constructor(e,t,i){this.path=t,this.parsedPath=i||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,i):new Nt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jb,"")}static parseTrackName(e){const t=s2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=i.nodeName&&i.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const a=i.nodeName.substring(o+1);o2.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,o),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=i(u.children);if(f)return f}return null},o=i(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)e[t++]=i[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,o=t.propertyName;let a=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[o];if(c===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+o+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=a2;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const f0=new Bt;class l2{constructor(e,t,i=0,o=1/0){this.ray=new kc(e,t),this.near=i,this.far=o,this.camera=null,this.layers=new ch,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return f0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(f0),this}intersectObject(e,t=!0,i=[]){return $f(e,this,i,t),i.sort(h0),i}intersectObjects(e,t=!0,i=[]){for(let o=0,a=e.length;o<a;o++)$f(e[o],this,i,t);return i.sort(h0),i}}function h0(s,e){return s.distance-e.distance}function $f(s,e,t,i){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&i===!0){const a=s.children;for(let c=0,u=a.length;c<u;c++)$f(a[c],e,t,!0)}}class p0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wx extends Sx{constructor(e=10,t=10,i=4473924,o=8947848){i=new ft(i),o=new ft(o);const a=t/2,c=e/t,u=e/2,f=[],h=[];for(let x=0,y=0,w=-u;x<=t;x++,w+=c){f.push(-u,0,w,u,0,w),f.push(w,0,-u,w,0,u);const E=x===a?i:o;E.toArray(h,y),y+=3,E.toArray(h,y),y+=3,E.toArray(h,y),y+=3,E.toArray(h,y),y+=3}const p=new $n;p.setAttribute("position",new Kt(f,3)),p.setAttribute("color",new Kt(h,3));const m=new ph({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class c2 extends ys{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);const m0={type:"change"},vh={type:"start"},Tx={type:"end"},sc=new kc,g0=new zr,u2=Math.cos(70*Ec.DEG2RAD),sn=new K,jn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rf=1e-6;class bx extends c2{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mo.ROTATE,MIDDLE:mo.DOLLY,RIGHT:mo.PAN},this.touches={ONE:fo.ROTATE,TWO:fo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Gr,this._lastTargetPosition=new K,this._quat=new Gr().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new p0,this._sphericalDelta=new p0,this._scale=1,this._panOffset=new K,this._rotateStart=new et,this._rotateEnd=new et,this._rotateDelta=new et,this._panStart=new et,this._panEnd=new et,this._panDelta=new et,this._dollyStart=new et,this._dollyEnd=new et,this._dollyDelta=new et,this._dollyDirection=new K,this._mouse=new et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=f2.bind(this),this._onPointerDown=d2.bind(this),this._onPointerUp=h2.bind(this),this._onContextMenu=y2.bind(this),this._onMouseWheel=g2.bind(this),this._onKeyDown=x2.bind(this),this._onTouchStart=v2.bind(this),this._onTouchMove=_2.bind(this),this._onMouseDown=p2.bind(this),this._onMouseMove=m2.bind(this),this._interceptControlDown=S2.bind(this),this._interceptControlUp=M2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(m0),this.update(),this.state=Ft.NONE}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=jn:i>Math.PI&&(i-=jn),o<-Math.PI?o+=jn:o>Math.PI&&(o-=jn),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=sn.length();c=this._clampDistance(u*this._scale);const f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const u=new K(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const h=new K(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),c=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(sc.origin.copy(this.object.position),sc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sc.direction))<u2?this.object.lookAt(this.target):(g0.setFromNormalAndCoplanarPoint(this.object.up,this.target),sc.intersectPlane(g0,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>rf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rf||this._lastTargetPosition.distanceToSquared(this.target)>rf?(this.dispatchEvent(m0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jn/60*this.autoRotateSpeed*e:jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;sn.copy(o).sub(this.target);let a=sn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,c=i.width,u=i.height;this._mouse.x=o/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new et,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function d2(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function f2(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function h2(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tx),this.state=Ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function p2(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ft.DOLLY;break;case mo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}break;case mo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(vh)}function m2(s){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function g2(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(s.preventDefault(),this.dispatchEvent(vh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Tx))}function x2(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function v2(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case fo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ft.TOUCH_ROTATE;break;case fo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case fo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ft.TOUCH_DOLLY_PAN;break;case fo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(vh)}function _2(s){switch(this._trackPointer(s),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ft.NONE}}function y2(s){this.enabled!==!1&&s.preventDefault()}function S2(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function M2(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ax={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Aa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const E2=new dh(-1,1,1,-1,0,1);class w2 extends $n{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const T2=new w2;class Cx{constructor(e){this._mesh=new In(T2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,E2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class b2 extends Aa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tc.clone(e.uniforms),this.material=new Xn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Cx(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class x0 extends Aa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const o=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,c,4294967295),a.buffers.stencil.setClear(u),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,4294967295),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}}class A2 extends Aa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class C2{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new et);this._width=i.width,this._height=i.height,t=new Ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new b2(Ax),this.copyPass.material.blending=ar,this.clock=new Qb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let o=0,a=this.passes.length;o<a;o++){const c=this.passes[o];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}x0!==void 0&&(c instanceof x0?i=!0:c instanceof A2&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(i,o),this.renderTarget2.setSize(i,o);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class R2 extends Aa{constructor(e,t,i=null,o=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=o,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(e,t,i){const o=e.autoClear;e.autoClear=!1;let a,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=o}}const P2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ao extends Aa{constructor(e,t,i,o){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=o,this.resolution=e!==void 0?new et(e.x,e.y):new et(256,256),this.clearColor=new ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Ri(a,c,{type:cr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const x=new Ri(a,c,{type:cr});x.texture.name="UnrealBloomPass.h"+m,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const y=new Ri(a,c,{type:cr});y.texture.name="UnrealBloomPass.v"+m,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),a=Math.round(a/2),c=Math.round(c/2)}const u=P2;this.highPassUniforms=Tc.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xn({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const f=[3,5,7,9,11];a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(f[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new et(1/a,1/c),a=Math.round(a/2),c=Math.round(c/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const p=Ax;this.copyUniforms=Tc.clone(p.uniforms),this.blendMaterial=new Xn({uniforms:this.copyUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,blending:cf,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ft,this.oldClearAlpha=1,this.basic=new _s,this.fsQuad=new Cx(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(i,o);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,o),this.renderTargetsVertical[a].setSize(i,o),this.separableBlurMaterials[a].uniforms.invSize.value=new et(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2)}render(e,t,i,o,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let u=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this.fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[f].uniforms.direction.value=Ao.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=Ao.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this.fsQuad.render(e),u=this.renderTargetsVertical[f];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=c}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Xn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Xn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ao.BlurDirectionX=new et(1,0);Ao.BlurDirectionY=new et(0,1);const oc=.1;function L2(s){return[parseInt(s.slice(1,3),16)/255,parseInt(s.slice(3,5),16)/255,parseInt(s.slice(5,7),16)/255]}function sf([s,e,t],[i,o,a],c){return[s+(i-s)*c,e+(o-e)*c,t+(a-t)*c]}const N2={front:1,back:.78,top:1.18,bottom:.62,right:.88,left:.88};function D2(s,e){switch(e){case"emissive":return sf(s,[1,1,1],.38);case"neon":return sf(s,[1,1,1],.72);case"metal":{const t=s[0]*.299+s[1]*.587+s[2]*.114;return sf(s,[t,t,t],.45)}default:return s}}function I2(s,e){return[Math.min(1,s[0]*e),Math.min(1,s[1]*e),Math.min(1,s[2]*e)]}function ao(s,e,t,i,o,a,c){s.push(...t,...i,...o,...t,...o,...a);for(let u=0;u<6;u++)e.push(...c)}function ma(s,e,t){const i=new $n;return i.setAttribute("position",new Kt(s,3)),i.setAttribute("color",new Kt(e,3)),i.computeVertexNormals(),new In(i,t)}function U2(s,e,t,i,o={},a={}){var y,w;const c=oc/2,u=new po,f=[],h={};for(const E of["solid","emissive","neon","metal","glass"])h[E]={verts:[],colors:[]};function p(E,v,_,b){const L=`${v},${E},${_}`;return a[L]||o[b]||"solid"}function m(E,v,_){var L,T;if(E<0||E>=e||v<0||v>=t||_<0||_>=i)return!1;const b=(T=(L=s[v])==null?void 0:L[E])==null?void 0:T[_];return!b||b==="transparent"?!1:p(E,v,_,b)!=="glass"}for(let E=0;E<t;E++)for(let v=0;v<e;v++)for(let _=0;_<i;_++){const b=(w=(y=s[E])==null?void 0:y[v])==null?void 0:w[_];if(!b||b==="transparent")continue;const L=p(v,E,_,b),T=L2(b),U=D2(T,L),R=h[L],N=(v-e/2+.5)*oc,k=(t-1-E)*oc+c,D=(_-i/2+.5)*oc,P=L==="emissive"||L==="neon",O=q=>P?U:I2(U,N2[q]);m(v,E,_+1)||ao(R.verts,R.colors,[N-c,k-c,D+c],[N+c,k-c,D+c],[N+c,k+c,D+c],[N-c,k+c,D+c],O("front")),m(v,E,_-1)||ao(R.verts,R.colors,[N+c,k-c,D-c],[N-c,k-c,D-c],[N-c,k+c,D-c],[N+c,k+c,D-c],O("back")),m(v,E-1,_)||ao(R.verts,R.colors,[N-c,k+c,D+c],[N+c,k+c,D+c],[N+c,k+c,D-c],[N-c,k+c,D-c],O("top")),m(v,E+1,_)||ao(R.verts,R.colors,[N+c,k-c,D+c],[N-c,k-c,D+c],[N-c,k-c,D-c],[N+c,k-c,D-c],O("bottom")),m(v+1,E,_)||ao(R.verts,R.colors,[N+c,k-c,D+c],[N+c,k-c,D-c],[N+c,k+c,D-c],[N+c,k+c,D+c],O("right")),m(v-1,E,_)||ao(R.verts,R.colors,[N-c,k-c,D-c],[N-c,k-c,D+c],[N-c,k+c,D+c],[N-c,k+c,D-c],O("left"))}if(h.solid.verts.length){const E=new xc({vertexColors:!0,roughness:.75,metalness:.05});f.push(E),u.add(ma(h.solid.verts,h.solid.colors,E))}if(h.emissive.verts.length){const E=new _s({vertexColors:!0});f.push(E),u.add(ma(h.emissive.verts,h.emissive.colors,E))}if(h.neon.verts.length){const E=new _s({vertexColors:!0});f.push(E),u.add(ma(h.neon.verts,h.neon.colors,E))}if(h.metal.verts.length){const E=new xc({vertexColors:!0,metalness:.88,roughness:.12,envMapIntensity:1.2});f.push(E),u.add(ma(h.metal.verts,h.metal.colors,E))}if(h.glass.verts.length){const E=new xc({vertexColors:!0,transparent:!0,opacity:.35,depthWrite:!1,side:di,roughness:.05,metalness:.1});f.push(E),u.add(ma(h.glass.verts,h.glass.colors,E))}function x(){f.forEach(E=>E.dispose()),u.traverse(E=>{E.geometry&&E.geometry.dispose()})}return{group:u,dispose:x}}const pi=.1,v0=pi*.6;function k2(s,e,t,i,o,a){const c=Math.round(s/pi+i/2-.5),u=Math.round(o-1-(e-pi/2)/pi),f=Math.round(t/pi+a/2-.5);return{x:Math.max(0,Math.min(i-1,c)),y:Math.max(0,Math.min(o-1,u)),z:Math.max(0,Math.min(a-1,f))}}function F2(s,e,t,i,o,a){return new K((s-i/2+.5)*pi,(o-1-e)*pi+pi/2,(t-a/2+.5)*pi)}function O2(s){const e=Ce.useRef(null),t=Ce.useRef(null),i=Ce.useRef(null),o=Ce.useRef(null),a=Ce.useRef(null),c=Ce.useRef(null),u=Ce.useRef(null),f=Ce.useRef(null),h=Ce.useRef(null),p=Ce.useRef(null),m=Ce.useRef(null);Ce.useEffect(()=>{const w=s.current;if(!w)return;const E=new yx({antialias:!0,alpha:!1});E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.setSize(w.clientWidth,w.clientHeight),E.toneMapping=lr,E.setClearColor(788484,1),w.appendChild(E.domElement),e.current=E;const v=new bc;t.current=v;const _=new Ex(16771264,.45);v.add(_);const b=new yo(16777215,.6);b.position.set(4,6,4),v.add(b);const L=new yo(8425680,.35);L.position.set(-3,-1,-2),v.add(L);const T=new yo(16746528,.2);T.position.set(0,-3,-5),v.add(T);const U=new wx(8,16,3811856,2365448);U.position.y=-.05,U.material.transparent=!0,U.material.opacity=.5,v.add(U);const R=new mh(4,32),N=new qb({color:1708038,transparent:!0,opacity:.6}),k=new In(R,N);k.rotation.x=-Math.PI/2,k.position.y=-.051,v.add(k);const D=new ba(20,20),P=new _s({side:di,transparent:!0,opacity:0,depthWrite:!1}),O=new In(D,P);O.rotation.x=-Math.PI/2,O.position.y=-.002,v.add(O),h.current=O;const q=new Po(pi*.96,pi*.96,pi*.96),W=new _s({color:65416,transparent:!0,opacity:.35}),oe=new In(q,W),ce=new $b(q),ue=new ph({color:65416}),le=new Sx(ce,ue);oe.add(le),oe.visible=!1,v.add(oe),p.current=oe;const V=new Dn(45,w.clientWidth/w.clientHeight,.01,50);V.position.set(2.5,2.8,2.5),V.lookAt(0,1.6,0),i.current=V;const ne=new bx(V,E.domElement);ne.enableDamping=!0,ne.dampingFactor=.06,ne.minDistance=.3,ne.maxDistance=15,ne.target.set(0,1.6,0),o.current=ne;const ie=new C2(E);ie.addPass(new R2(v,V));const B=new Ao(new et(w.clientWidth,w.clientHeight),.55,.4,.42);ie.addPass(B),m.current=ie;const ee=new l2;let Te=!1,Z=!1,fe=null;function ve(){return nt.getState().viewMode==="preview-only"}function xe(){ne.enabled=!0,ne.enableRotate=!ve()||Te,ne.enableZoom=!0,ne.enablePan=!0}function Ae(C){E.domElement.style.cursor=C}function De(C,Q){const pe=E.domElement.getBoundingClientRect(),ge=(C-pe.left)/pe.width*2-1,he=-((Q-pe.top)/pe.height)*2+1;ee.setFromCamera(new et(ge,he),V);const Le=[];a.current&&Le.push(a.current),Le.push(O);const Ee=ee.intersectObjects(Le,!0);return Ee.length>0?Ee[0]:null}function We(C,Q,pe,ge,he){const Le=C.point.clone(),Ee=C.face.normal.clone().transformDirection(C.object.matrixWorld),Pe=he?v0:-v0;return k2(Le.x+Ee.x*Pe,Le.y+Ee.y*Pe,Le.z+Ee.z*Pe,Q,pe,ge)}function vt(C,Q){const pe=p.current;if(!pe)return;const{activeTool:ge,canvasWidth:he,canvasHeight:Le,depthDimension:Ee}=nt.getState(),Pe=De(C,Q);if(!Pe){pe.visible=!1;return}const ct=ge==="eraser",ye=ge==="eyedropper",Ke=We(Pe,he,Le,Ee,!ct&&!ye);pe.position.copy(F2(Ke.x,Ke.y,Ke.z,he,Le,Ee)),pe.visible=!0;const tt=ct?16729156:ye?52479:65416;pe.material.color.setHex(tt),pe.children[0].material.color.setHex(tt)}function pt(C,Q){var Ke,tt,Be,gt;const{activeTool:pe,currentColor:ge,canvasWidth:he,canvasHeight:Le,depthDimension:Ee}=nt.getState(),Pe=De(C,Q);if(!Pe)return;const ct=Pe.object===O;if(pe==="eyedropper"){if(ct)return;const Ze=We(Pe,he,Le,Ee,!1),Mt=(tt=(Ke=Ci(nt.getState().layers,he,Le,Ee)[Ze.y])==null?void 0:Ke[Ze.x])==null?void 0:tt[Ze.z];Mt&&Mt!=="transparent"&&nt.getState().setCurrentColor(Mt);return}if(pe==="eraser"){if(ct)return;const Ze=We(Pe,he,Le,Ee,!1),Mt=`${Ze.x},${Ze.y},${Ze.z}`;if(Mt===fe)return;fe=Mt;const j=(gt=(Be=Ci(nt.getState().layers,he,Le,Ee)[Ze.y])==null?void 0:Be[Ze.x])==null?void 0:gt[Ze.z];if(!j||j==="transparent")return;nt.getState().paintVoxelDirect(Ze.x,Ze.y,Ze.z,"transparent");return}const ye=We(Pe,he,Le,Ee,!0),ze=`${ye.x},${ye.y},${ye.z}`;ze!==fe&&(fe=ze,nt.getState().paintVoxelDirect(ye.x,ye.y,ye.z,ge))}const Dt=C=>{C.code!=="Space"||!ve()||(C.preventDefault(),!Te&&(Te=!0,xe(),p.current&&(p.current.visible=!1),Ae("grab")))},X=C=>{C.code==="Space"&&(Te=!1,xe(),ve()&&Ae("crosshair"))},Zt=C=>{!ve()||Te||C.button===0&&(ne.enabled=!1,Z=!0,fe=null,E.domElement.setPointerCapture(C.pointerId),Ae("crosshair"),nt.getState().pushUndo(),pt(C.clientX,C.clientY))},ut=C=>{if(!ve()){p.current&&(p.current.visible=!1);return}Z&&!Te?(p.current&&(p.current.visible=!1),pt(C.clientX,C.clientY)):vt(C.clientX,C.clientY)},mt=C=>{if(Z){Z=!1,fe=null,xe();try{E.domElement.releasePointerCapture(C.pointerId)}catch{}Ae(Te?"grab":ve()?"crosshair":"default")}},Je=()=>{p.current&&(p.current.visible=!1)};xe(),ve()&&Ae("crosshair"),window.addEventListener("keydown",Dt),window.addEventListener("keyup",X),E.domElement.addEventListener("pointerdown",Zt),E.domElement.addEventListener("pointermove",ut),E.domElement.addEventListener("pointerup",mt),E.domElement.addEventListener("pointerleave",Je);let Rt=!0;function qe(){Rt&&(u.current=requestAnimationFrame(qe),ne.update(),m.current?m.current.render():E.render(v,V))}qe();const F=new ResizeObserver(()=>{const C=w.clientWidth,Q=w.clientHeight;!C||!Q||(E.setSize(C,Q),ie.setSize(C,Q),V.aspect=C/Q,V.updateProjectionMatrix())});return F.observe(w),()=>{Rt=!1,cancelAnimationFrame(u.current),F.disconnect(),window.removeEventListener("keydown",Dt),window.removeEventListener("keyup",X),E.domElement.removeEventListener("pointerdown",Zt),E.domElement.removeEventListener("pointermove",ut),E.domElement.removeEventListener("pointerup",mt),E.domElement.removeEventListener("pointerleave",Je),ne.dispose(),N.dispose(),R.dispose(),q.dispose(),W.dispose(),ce.dispose(),ue.dispose(),D.dispose(),P.dispose(),E.dispose(),w.contains(E.domElement)&&w.removeChild(E.domElement)}},[]),Ce.useEffect(()=>nt.subscribe((E,v)=>{E.activeTheme!==v.activeTheme&&e.current&&N1(async()=>{const{getTheme:_}=await Promise.resolve().then(()=>n1);return{getTheme:_}},void 0).then(({getTheme:_})=>{var T;const L=_(E.activeTheme).sceneBackground.replace("#","");(T=e.current)==null||T.setClearColor(parseInt(L,16),1)})}),[]);const x=Ce.useCallback(()=>{var R;if(!t.current)return;const{layers:w,canvasWidth:E,canvasHeight:v,depthDimension:_}=nt.getState(),b=Ci(w,E,v,_),L=Hy(w),{group:T,dispose:U}=U2(b,E,v,_,{},L);a.current&&(t.current.remove(a.current),(R=c.current)==null||R.call(c)),t.current.add(T),a.current=T,c.current=U},[]);return Ce.useEffect(()=>{x();const w=nt.subscribe((E,v)=>{(E.layers!==v.layers||E.depthDimension!==v.depthDimension)&&(clearTimeout(f.current),f.current=setTimeout(x,80))});return()=>{w(),clearTimeout(f.current)}},[x]),{exportPng:Ce.useCallback(()=>{const w=e.current,E=t.current,{canvasWidth:v,canvasHeight:_,depthDimension:b}=nt.getState();if(!w||!E)return;const L=1024,T=new Dn(45,1,.01,50),R=Math.max(v,_,b)*.1*2.8;T.position.set(R,R*.75,R),T.lookAt(0,0,0),w.setSize(L,L),w.render(E,T);const N=w.domElement.toDataURL("image/png"),k=s.current;k&&(w.setSize(k.clientWidth,k.clientHeight),i.current.aspect=k.clientWidth/k.clientHeight,i.current.updateProjectionMatrix());const D=document.createElement("a");D.download="picell3d-export.png",D.href=N,D.click()},[])}}const _0={pencil:{label:"Place voxel",color:"#00ff88"},fill:{label:"Place voxel",color:"#00ff88"},eraser:{label:"Erase voxel",color:"#ff4444"},eyedropper:{label:"Pick color",color:"#00ccff"}};function z2({onExport:s}){const e=Ce.useRef(null),{exportPng:t}=O2(e),i=nt(f=>f.viewMode),o=nt(f=>f.activeTool),a=nt(f=>f.currentColor),c=i==="preview-only";Ce.useEffect(()=>{s&&(s.current=t)},[s,t]);const u=_0[o]??_0.pencil;return M.jsxs("div",{className:"relative w-full h-full",children:[M.jsx("div",{ref:e,className:"w-full h-full"}),c?M.jsxs("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none select-none",children:[M.jsxs("div",{className:"flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono",style:{background:"rgba(0,0,0,0.6)",border:`1px solid ${u.color}55`,color:u.color,backdropFilter:"blur(4px)"},children:[M.jsx("span",{children:u.label}),(o==="pencil"||o==="fill")&&M.jsx("span",{className:"inline-block w-3 h-3 rounded-sm",style:{background:a,outline:"1px solid rgba(255,255,255,0.25)"}})]}),M.jsxs("span",{className:"text-xs opacity-40",style:{color:"#fff",textShadow:"0 1px 3px #000"},children:["Drag to paint · Hold ",M.jsx("kbd",{style:{fontFamily:"monospace",opacity:.7},children:"Space"})," to orbit · Scroll to zoom"]})]}):M.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-text-muted pointer-events-none opacity-60 whitespace-nowrap",children:"Drag to rotate · Scroll to zoom"})]})}function B2(){const{palette:s,currentColor:e,setCurrentColor:t,addToPalette:i}=nt(),o=Ce.useRef(null);return M.jsxs("div",{className:"flex flex-col gap-2 p-2",children:[M.jsxs("div",{className:"relative",children:[M.jsx("div",{className:"text-xs text-text-muted mb-1 uppercase tracking-wide",children:"Color"}),M.jsx("div",{className:"w-full h-8 rounded cursor-pointer border border-border hover:border-accent transition-colors",style:{background:e},onClick:()=>{var a;return(a=o.current)==null?void 0:a.click()},title:"Click to open color picker"}),M.jsx("input",{ref:o,type:"color",value:e==="transparent"?"#000000":e,onChange:a=>t(a.target.value),className:"absolute opacity-0 w-0 h-0 pointer-events-none",tabIndex:-1})]}),M.jsx("div",{className:"grid grid-cols-4 gap-1",children:s.map((a,c)=>M.jsx("button",{className:"w-full aspect-square rounded border transition-all duration-100 hover:scale-110",style:{background:a,borderColor:e===a?"#e8a820":"#7a5c2e",boxShadow:e===a?"0 0 6px #c8860a":"none",outline:e===a?"1px solid #e8a820":"none"},onClick:()=>t(a),title:a},c))}),M.jsx("button",{className:"btn-brass w-full text-xs py-1",onClick:()=>{var a;return(a=o.current)==null?void 0:a.click()},children:"+ Custom"})]})}const V2=[{id:"solid",label:"Solid",desc:"Standard flat color",preview:s=>({background:s,border:"1px solid rgba(255,255,255,0.15)"})},{id:"emissive",label:"Emissive",desc:"Self-lit, soft glow",preview:s=>({background:s,boxShadow:`0 0 6px 2px ${s}cc, 0 0 12px 4px ${s}55`})},{id:"neon",label:"Neon",desc:"Bright bloom effect",preview:s=>({background:"#fff",boxShadow:`0 0 3px 1px ${s}, 0 0 10px 4px ${s}bb, 0 0 18px 7px ${s}44`})},{id:"metal",label:"Metal",desc:"Metallic sheen",preview:s=>({background:`linear-gradient(135deg, rgba(255,255,255,0.7) 0%, ${s} 45%, rgba(0,0,0,0.4) 100%)`})},{id:"glass",label:"Glass",desc:"Semi-transparent",preview:s=>({background:`${s}50`,border:`1px solid ${s}99`,backdropFilter:"blur(2px)"})}];function H2(){const s=nt(i=>i.currentColor),e=nt(i=>i.activeMaterial),t=nt(i=>i.setActiveMaterial);return M.jsxs("div",{className:"flex flex-col gap-0.5 px-2 py-2",children:[M.jsx("div",{className:"text-[10px] uppercase tracking-wide text-text-muted mb-1 opacity-60",children:"Material"}),V2.map(({id:i,label:o,desc:a,preview:c})=>{const u=e===i;return M.jsxs("button",{onClick:()=>t(i),className:`flex items-center gap-2 w-full px-2 py-1.5 rounded border text-left transition-all ${u?"border-accent bg-accent/15 text-accent":"border-border/50 text-text-muted hover:text-text hover:border-border"}`,children:[M.jsx("div",{className:"flex-shrink-0 rounded",style:{width:18,height:18,...c(s)}}),M.jsxs("div",{className:"min-w-0",children:[M.jsx("div",{className:"text-[11px] font-medium leading-tight",children:o}),M.jsx("div",{className:"text-[9px] opacity-50 leading-tight truncate",children:a})]})]},i)}),M.jsx("div",{className:"mt-2 pt-2 border-t border-border/40",children:M.jsx("div",{className:"text-[9px] text-text-muted opacity-50 leading-tight",children:"Click pixels to apply material. Solid removes material."})})]})}const G2=[4,8,16,24,32,48,64],j2=[{id:"front",label:"← Front"},{id:"both",label:"↔ Both"},{id:"back",label:"Back →"}];function W2(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,setDepthDimension:i,paintDepth:o,setPaintDepth:a,paintDirection:c,setPaintDirection:u,layers:f,activeView:h}=nt(),p=Ce.useMemo(()=>{const x=Ci(f,s,e,t);let y=0;for(const w of x)for(const E of w)for(const v of E)v!=="transparent"&&y++;return y},[f,s,e,t]),m=h==="front"||h==="back";return M.jsxs("div",{className:"flex flex-col h-full",children:[M.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1.5 border-b border-border",children:[M.jsx(ms,{size:12,className:"text-accent"}),M.jsx("span",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Voxel Options"})]}),M.jsxs("div",{className:"flex flex-col gap-4 p-3",children:[!m&&M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[M.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Depth"}),M.jsxs("span",{className:"text-xs font-mono text-accent",children:[t,"px"]})]}),M.jsx("div",{className:"grid grid-cols-4 gap-1 mb-1.5",children:G2.map(x=>M.jsx("button",{onClick:()=>i(x),className:`text-xs py-0.5 rounded border transition-colors ${t===x?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:x},x))}),M.jsx("input",{type:"range",min:4,max:128,value:t,onChange:x=>i(parseInt(x.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}})]}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[M.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Paint Depth"}),M.jsx("span",{className:"text-xs font-mono text-accent",children:o})]}),M.jsx("input",{type:"range",min:1,max:m?Math.ceil(t/2):t,value:o,onChange:x=>a(parseInt(x.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}}),M.jsxs("div",{className:"flex justify-between text-xs text-text-muted mt-0.5",children:[M.jsx("span",{children:"1"}),M.jsx("span",{children:m?Math.ceil(t/2):t})]})]}),m&&M.jsxs("div",{children:[M.jsx("div",{className:"mb-1.5",children:M.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Direction"})}),M.jsx("div",{className:"grid grid-cols-3 gap-1",children:j2.map(({id:x,label:y})=>M.jsx("button",{onClick:()=>u(x),className:`text-xs py-0.5 rounded border transition-colors ${c===x?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:y},x))})]}),M.jsxs("div",{className:"flex flex-col gap-1.5 text-xs",children:[M.jsxs("div",{className:"flex justify-between text-text-muted",children:[M.jsx("span",{children:"Grid size"}),M.jsxs("span",{className:"font-mono text-text",children:[s,"×",e,"×",t]})]}),M.jsxs("div",{className:"flex justify-between text-text-muted",children:[M.jsx("span",{children:"Voxels"}),M.jsx("span",{className:"font-mono text-text",children:p.toLocaleString()})]}),M.jsxs("div",{className:"flex justify-between text-text-muted",children:[M.jsx("span",{children:"Active view"}),M.jsx("span",{className:"font-mono text-accent capitalize",children:h})]})]}),M.jsx("div",{className:"text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5",style:{background:"color-mix(in srgb, var(--color-background) 60%, transparent)"},children:m?M.jsxs(M.Fragment,{children:["Canvas: ",M.jsxs("span",{className:"text-text font-mono",children:[s,"×",e]})]}):M.jsxs(M.Fragment,{children:["Canvas: ",M.jsx("span",{className:"text-text font-mono",children:h==="top"||h==="bottom"?`${s}×${t}`:`${t}×${e}`})]})})]})]})}function X2(){const{layers:s,activeLayerId:e,addLayer:t,deleteLayer:i,setActiveLayer:o,toggleLayerVisible:a,renameLayer:c,moveLayerUp:u,moveLayerDown:f}=nt(),[h,p]=Ce.useState(null),[m,x]=Ce.useState(""),y=[...s].reverse();function w(v,_){_.stopPropagation(),p(v.id),x(v.name)}function E(v){c(v,m),p(null)}return M.jsxs("div",{className:"flex flex-col",children:[M.jsxs("div",{className:"flex items-center justify-between px-2 py-1.5 border-b border-border flex-shrink-0",children:[M.jsxs("div",{className:"flex items-center gap-1.5",children:[M.jsx(N0,{size:12,className:"text-accent"}),M.jsx("span",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Layers"})]}),M.jsx("button",{onClick:()=>t(),title:"Add layer",className:"flex items-center justify-center w-5 h-5 rounded border border-border text-text-muted hover:text-accent hover:border-accent/50 transition-colors",children:M.jsx(hy,{size:11})})]}),M.jsx("div",{className:"flex flex-col overflow-y-auto",style:{maxHeight:200},children:y.map(v=>{const _=s.findIndex(R=>R.id===v.id),b=v.id===e,L=_===s.length-1,T=_===0,U=s.length>1;return M.jsxs("div",{onClick:()=>o(v.id),className:"flex items-center gap-1 px-1.5 py-1 cursor-pointer select-none transition-colors",style:{borderLeft:`2px solid ${b?"var(--color-accent)":"transparent"}`,background:b?"color-mix(in srgb, var(--color-accent) 12%, transparent)":"transparent"},children:[M.jsx("button",{onClick:R=>{R.stopPropagation(),a(v.id)},title:v.visible?"Hide layer":"Show layer",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors",children:v.visible?M.jsx(H_,{size:11}):M.jsx(B_,{size:11,className:"opacity-40"})}),h===v.id?M.jsx("input",{autoFocus:!0,value:m,onChange:R=>x(R.target.value),onBlur:()=>E(v.id),onKeyDown:R=>{R.key==="Enter"&&E(v.id),R.key==="Escape"&&p(null),R.stopPropagation()},onClick:R=>R.stopPropagation(),className:"flex-1 min-w-0 text-xs bg-transparent outline-none border-b",style:{borderColor:"var(--color-accent)",color:"var(--color-text)"}}):M.jsx("span",{className:"flex-1 min-w-0 text-xs truncate",style:{color:b?"var(--color-text)":"var(--color-text-muted)",opacity:v.visible?1:.45},onDoubleClick:R=>w(v,R),title:"Double-click to rename",children:v.name}),M.jsx("button",{onClick:R=>{R.stopPropagation(),u(v.id)},disabled:L,title:"Move up",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20",children:M.jsx(I_,{size:10})}),M.jsx("button",{onClick:R=>{R.stopPropagation(),f(v.id)},disabled:T,title:"Move down",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20",children:M.jsx(P_,{size:10})}),M.jsx("button",{onClick:R=>{R.stopPropagation(),i(v.id)},disabled:!U,title:"Delete layer",className:"flex-shrink-0 text-text-muted hover:text-red-400 transition-colors disabled:opacity-20",children:M.jsx(F0,{size:10})})]},v.id)})})]})}const y0={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Rc{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new nA(e)}),this.register(function(e){return new iA(e)}),this.register(function(e){return new aA(e)}),this.register(function(e){return new lA(e)}),this.register(function(e){return new cA(e)}),this.register(function(e){return new uA(e)}),this.register(function(e){return new rA(e)}),this.register(function(e){return new sA(e)}),this.register(function(e){return new oA(e)}),this.register(function(e){return new dA(e)}),this.register(function(e){return new fA(e)}),this.register(function(e){return new hA(e)}),this.register(function(e){return new pA(e)}),this.register(function(e){return new mA(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,i,o){const a=new tA,c=[];for(let u=0,f=this.pluginCallbacks.length;u<f;u++)c.push(this.pluginCallbacks[u](a));a.setPlugins(c),a.setTextureUtils(this.textureUtils),a.writeAsync(e,t,o).catch(i)}parseAsync(e,t){const i=this;return new Promise(function(o,a){i.parse(e,o,a,t)})}}const Et={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},of="KHR_mesh_quantization",ti={};ti[mi]=Et.NEAREST;ti[$0]=Et.NEAREST_MIPMAP_NEAREST;ti[xa]=Et.NEAREST_MIPMAP_LINEAR;ti[Ai]=Et.LINEAR;ti[uc]=Et.LINEAR_MIPMAP_NEAREST;ti[Vr]=Et.LINEAR_MIPMAP_LINEAR;ti[Br]=Et.CLAMP_TO_EDGE;ti[yc]=Et.REPEAT;ti[Sc]=Et.MIRRORED_REPEAT;const S0={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Y2=new ft,M0=12,$2=1179937895,q2=2,E0=8,K2=1313821514,Z2=5130562;function ya(s,e){return s.length===e.length&&s.every(function(t,i){return t===e[i]})}function Q2(s){return new TextEncoder().encode(s).buffer}function J2(s){return ya(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function eA(s,e,t){const i={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let o=e;o<e+t;o++)for(let a=0;a<s.itemSize;a++){let c;s.itemSize>4?c=s.array[o*s.itemSize+a]:(a===0?c=s.getX(o):a===1?c=s.getY(o):a===2?c=s.getZ(o):a===3&&(c=s.getW(o)),s.normalized===!0&&(c=Ec.normalize(c,s.array))),i.min[a]=Math.min(i.min[a],c),i.max[a]=Math.max(i.max[a],c)}return i}function Rx(s){return Math.ceil(s/4)*4}function af(s,e=0){const t=Rx(s.byteLength);if(t!==s.byteLength){const i=new Uint8Array(t);if(i.set(new Uint8Array(s)),e!==0)for(let o=s.byteLength;o<t;o++)i[o]=e;return i.buffer}return s}function w0(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function T0(s,e){if(s.toBlob!==void 0)return new Promise(i=>s.toBlob(i,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class tA{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Nc}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const o=this,a=o.buffers,c=o.json;i=o.options;const u=o.extensionsUsed,f=o.extensionsRequired,h=new Blob(a,{type:"application/octet-stream"}),p=Object.keys(u),m=Object.keys(f);if(p.length>0&&(c.extensionsUsed=p),m.length>0&&(c.extensionsRequired=m),c.buffers&&c.buffers.length>0&&(c.buffers[0].byteLength=h.size),i.binary===!0){const x=new FileReader;x.readAsArrayBuffer(h),x.onloadend=function(){const y=af(x.result),w=new DataView(new ArrayBuffer(E0));w.setUint32(0,y.byteLength,!0),w.setUint32(4,Z2,!0);const E=af(Q2(JSON.stringify(c)),32),v=new DataView(new ArrayBuffer(E0));v.setUint32(0,E.byteLength,!0),v.setUint32(4,K2,!0);const _=new ArrayBuffer(M0),b=new DataView(_);b.setUint32(0,$2,!0),b.setUint32(4,q2,!0);const L=M0+v.byteLength+E.byteLength+w.byteLength+y.byteLength;b.setUint32(8,L,!0);const T=new Blob([_,v,E,w,y],{type:"application/octet-stream"}),U=new FileReader;U.readAsArrayBuffer(T),U.onloadend=function(){t(U.result)}}}else if(c.buffers&&c.buffers.length>0){const x=new FileReader;x.readAsDataURL(h),x.onloadend=function(){const y=x.result;c.buffers[0].uri=y,t(c)}}else t(c)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const i=this.options,o=this.extensionsUsed;try{const a=JSON.parse(JSON.stringify(e.userData));if(i.includeCustomExtensions&&a.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const c in a.gltfExtensions)t.extensions[c]=a.gltfExtensions[c],o[c]=!0;delete a.gltfExtensions}Object.keys(a).length>0&&(t.extras=a)}catch(a){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+a.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const o=new Map;o.set(!0,this.uid++),o.set(!1,this.uid++),this.uids.set(e,o)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const i=new K;for(let o=0,a=e.count;o<a;o++)if(Math.abs(i.fromBufferAttribute(e,o).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const i=e.clone(),o=new K;for(let a=0,c=i.count;a<c;a++)o.fromBufferAttribute(i,a),o.x===0&&o.y===0&&o.z===0?o.setX(1):o.normalize(),i.setXYZ(a,o.x,o.y,o.z);return t.attributesNormalized.set(e,i),i}applyTextureTransform(e,t){let i=!1;const o={};(t.offset.x!==0||t.offset.y!==0)&&(o.offset=t.offset.toArray(),i=!0),t.rotation!==0&&(o.rotation=t.rotation,i=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(o.scale=t.repeat.toArray(),i=!0),i&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=o,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function i(y){return y.colorSpace===Wn?function(E){return E<.04045?E*.0773993808:Math.pow(E*.9478672986+.0521327014,2.4)}:function(E){return E}}e instanceof ef&&(e=await this.decompressTextureAsync(e)),t instanceof ef&&(t=await this.decompressTextureAsync(t));const o=e?e.image:null,a=t?t.image:null,c=Math.max(o?o.width:0,a?a.width:0),u=Math.max(o?o.height:0,a?a.height:0),f=w0();f.width=c,f.height=u;const h=f.getContext("2d",{willReadFrequently:!0});h.fillStyle="#00ffff",h.fillRect(0,0,c,u);const p=h.getImageData(0,0,c,u);if(o){h.drawImage(o,0,0,c,u);const y=i(e),w=h.getImageData(0,0,c,u).data;for(let E=2;E<w.length;E+=4)p.data[E]=y(w[E]/256)*256}if(a){h.drawImage(a,0,0,c,u);const y=i(t),w=h.getImageData(0,0,c,u).data;for(let E=1;E<w.length;E+=4)p.data[E]=y(w[E]/256)*256}h.putImageData(p,0,0);const x=(e||t).clone();return x.source=new lh(f),x.colorSpace=ir,x.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),x}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,i=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),i.push(e),0}processBufferView(e,t,i,o,a){const c=this.json;c.bufferViews||(c.bufferViews=[]);let u;switch(t){case Et.BYTE:case Et.UNSIGNED_BYTE:u=1;break;case Et.SHORT:case Et.UNSIGNED_SHORT:u=2;break;default:u=4}let f=e.itemSize*u;a===Et.ARRAY_BUFFER&&(f=Math.ceil(f/4)*4);const h=Rx(o*f),p=new DataView(new ArrayBuffer(h));let m=0;for(let w=i;w<i+o;w++){for(let E=0;E<e.itemSize;E++){let v;e.itemSize>4?v=e.array[w*e.itemSize+E]:(E===0?v=e.getX(w):E===1?v=e.getY(w):E===2?v=e.getZ(w):E===3&&(v=e.getW(w)),e.normalized===!0&&(v=Ec.normalize(v,e.array))),t===Et.FLOAT?p.setFloat32(m,v,!0):t===Et.INT?p.setInt32(m,v,!0):t===Et.UNSIGNED_INT?p.setUint32(m,v,!0):t===Et.SHORT?p.setInt16(m,v,!0):t===Et.UNSIGNED_SHORT?p.setUint16(m,v,!0):t===Et.BYTE?p.setInt8(m,v):t===Et.UNSIGNED_BYTE&&p.setUint8(m,v),m+=u}m%f!==0&&(m+=f-m%f)}const x={buffer:this.processBuffer(p.buffer),byteOffset:this.byteOffset,byteLength:h};return a!==void 0&&(x.target=a),a===Et.ARRAY_BUFFER&&(x.byteStride=f),this.byteOffset+=h,c.bufferViews.push(x),{id:c.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,i=t.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(o){const a=new FileReader;a.readAsArrayBuffer(e),a.onloadend=function(){const c=af(a.result),u={buffer:t.processBuffer(c),byteOffset:t.byteOffset,byteLength:c.byteLength};t.byteOffset+=c.byteLength,o(i.bufferViews.push(u)-1)}})}processAccessor(e,t,i,o){const a=this.json,c={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let u;if(e.array.constructor===Float32Array)u=Et.FLOAT;else if(e.array.constructor===Int32Array)u=Et.INT;else if(e.array.constructor===Uint32Array)u=Et.UNSIGNED_INT;else if(e.array.constructor===Int16Array)u=Et.SHORT;else if(e.array.constructor===Uint16Array)u=Et.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)u=Et.BYTE;else if(e.array.constructor===Uint8Array)u=Et.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(i===void 0&&(i=0),(o===void 0||o===1/0)&&(o=e.count),o===0)return null;const f=eA(e,i,o);let h;t!==void 0&&(h=e===t.index?Et.ELEMENT_ARRAY_BUFFER:Et.ARRAY_BUFFER);const p=this.processBufferView(e,u,i,o,h),m={bufferView:p.id,byteOffset:p.byteOffset,componentType:u,count:o,max:f.max,min:f.min,type:c[e.itemSize]};return e.normalized===!0&&(m.normalized=!0),a.accessors||(a.accessors=[]),a.accessors.push(m)-1}processImage(e,t,i,o="image/png"){if(e!==null){const a=this,c=a.cache,u=a.json,f=a.options,h=a.pending;c.images.has(e)||c.images.set(e,{});const p=c.images.get(e),m=o+":flipY/"+i.toString();if(p[m]!==void 0)return p[m];u.images||(u.images=[]);const x={mimeType:o},y=w0();y.width=Math.min(e.width,f.maxTextureSize),y.height=Math.min(e.height,f.maxTextureSize);const w=y.getContext("2d",{willReadFrequently:!0});if(i===!0&&(w.translate(0,y.height),w.scale(1,-1)),e.data!==void 0){t!==hi&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>f.maxTextureSize||e.height>f.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const v=new Uint8ClampedArray(e.height*e.width*4);for(let _=0;_<v.length;_+=4)v[_+0]=e.data[_+0],v[_+1]=e.data[_+1],v[_+2]=e.data[_+2],v[_+3]=e.data[_+3];w.putImageData(new ImageData(v,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)w.drawImage(e,0,0,y.width,y.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");f.binary===!0?h.push(T0(y,o).then(v=>a.processBufferViewImage(v)).then(v=>{x.bufferView=v})):y.toDataURL!==void 0?x.uri=y.toDataURL(o):h.push(T0(y,o).then(v=>new FileReader().readAsDataURL(v)).then(v=>{x.uri=v}));const E=u.images.push(x)-1;return p[m]=E,E}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const i={magFilter:ti[e.magFilter],minFilter:ti[e.minFilter],wrapS:ti[e.wrapS],wrapT:ti[e.wrapT]};return t.samplers.push(i)-1}async processTextureAsync(e){const i=this.options,o=this.cache,a=this.json;if(o.textures.has(e))return o.textures.get(e);a.textures||(a.textures=[]),e instanceof ef&&(e=await this.decompressTextureAsync(e,i.maxTextureSize));let c=e.userData.mimeType;c==="image/webp"&&(c="image/png");const u={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,c)};e.name&&(u.name=e.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(e,u)});const f=a.textures.push(u)-1;return o.textures.set(e,f),f}async processMaterialAsync(e){const t=this.cache,i=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);const o={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const a=e.color.toArray().concat([e.opacity]);if(ya(a,[1,1,1,1])||(o.pbrMetallicRoughness.baseColorFactor=a),e.isMeshStandardMaterial?(o.pbrMetallicRoughness.metallicFactor=e.metalness,o.pbrMetallicRoughness.roughnessFactor=e.roughness):(o.pbrMetallicRoughness.metallicFactor=0,o.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const u=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),f={index:await this.processTextureAsync(u),texCoord:u.channel};this.applyTextureTransform(f,u),o.pbrMetallicRoughness.metallicRoughnessTexture=f}if(e.map){const u={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(u,e.map),o.pbrMetallicRoughness.baseColorTexture=u}if(e.emissive){const u=e.emissive;if(Math.max(u.r,u.g,u.b)>0&&(o.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const h={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(h,e.emissiveMap),o.emissiveTexture=h}}if(e.normalMap){const u={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(u.scale=e.normalScale.x),this.applyTextureTransform(u,e.normalMap),o.normalTexture=u}if(e.aoMap){const u={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(u.strength=e.aoMapIntensity),this.applyTextureTransform(u,e.aoMap),o.occlusionTexture=u}e.transparent?o.alphaMode="BLEND":e.alphaTest>0&&(o.alphaMode="MASK",o.alphaCutoff=e.alphaTest),e.side===di&&(o.doubleSided=!0),e.name!==""&&(o.name=e.name),this.serializeUserData(e,o),await this._invokeAllAsync(async function(u){u.writeMaterialAsync&&await u.writeMaterialAsync(e,o)});const c=i.materials.push(o)-1;return t.materials.set(e,c),c}async processMeshAsync(e){const t=this.cache,i=this.json,o=[e.geometry.uuid];if(Array.isArray(e.material))for(let T=0,U=e.material.length;T<U;T++)o.push(e.material[T].uuid);else o.push(e.material.uuid);const a=o.join(":");if(t.meshes.has(a))return t.meshes.get(a);const c=e.geometry;let u;e.isLineSegments?u=Et.LINES:e.isLineLoop?u=Et.LINE_LOOP:e.isLine?u=Et.LINE_STRIP:e.isPoints?u=Et.POINTS:u=e.material.wireframe?Et.LINES:Et.TRIANGLES;const f={},h={},p=[],m=[],x={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},y=c.getAttribute("normal");y!==void 0&&!this.isNormalizedNormalAttribute(y)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),c.setAttribute("normal",this.createNormalizedNormalAttribute(y)));let w=null;for(let T in c.attributes){if(T.slice(0,5)==="morph")continue;const U=c.attributes[T];if(T=x[T]||T.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(T)||(T="_"+T),t.attributes.has(this.getUID(U))){h[T]=t.attributes.get(this.getUID(U));continue}w=null;const N=U.array;T==="JOINTS_0"&&!(N instanceof Uint16Array)&&!(N instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),w=new fn(new Uint16Array(N),U.itemSize,U.normalized)):(N instanceof Uint32Array||N instanceof Int32Array)&&!T.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${T}" converted to type FLOAT.`),w=Rc.Utils.toFloat32BufferAttribute(U));const k=this.processAccessor(w||U,c);k!==null&&(T.startsWith("_")||this.detectMeshQuantization(T,U),h[T]=k,t.attributes.set(this.getUID(U),k))}if(y!==void 0&&c.setAttribute("normal",y),Object.keys(h).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const T=[],U=[],R={};if(e.morphTargetDictionary!==void 0)for(const N in e.morphTargetDictionary)R[e.morphTargetDictionary[N]]=N;for(let N=0;N<e.morphTargetInfluences.length;++N){const k={};let D=!1;for(const P in c.morphAttributes){if(P!=="position"&&P!=="normal"){D||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),D=!0);continue}const O=c.morphAttributes[P][N],q=P.toUpperCase(),W=c.attributes[P];if(t.attributes.has(this.getUID(O,!0))){k[q]=t.attributes.get(this.getUID(O,!0));continue}const oe=O.clone();if(!c.morphTargetsRelative)for(let ce=0,ue=O.count;ce<ue;ce++)for(let le=0;le<O.itemSize;le++)le===0&&oe.setX(ce,O.getX(ce)-W.getX(ce)),le===1&&oe.setY(ce,O.getY(ce)-W.getY(ce)),le===2&&oe.setZ(ce,O.getZ(ce)-W.getZ(ce)),le===3&&oe.setW(ce,O.getW(ce)-W.getW(ce));k[q]=this.processAccessor(oe,c),t.attributes.set(this.getUID(W,!0),k[q])}m.push(k),T.push(e.morphTargetInfluences[N]),e.morphTargetDictionary!==void 0&&U.push(R[N])}f.weights=T,U.length>0&&(f.extras={},f.extras.targetNames=U)}const E=Array.isArray(e.material);if(E&&c.groups.length===0)return null;let v=!1;if(E&&c.index===null){const T=[];for(let U=0,R=c.attributes.position.count;U<R;U++)T[U]=U;c.setIndex(T),v=!0}const _=E?e.material:[e.material],b=E?c.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let T=0,U=b.length;T<U;T++){const R={mode:u,attributes:h};if(this.serializeUserData(c,R),m.length>0&&(R.targets=m),c.index!==null){let k=this.getUID(c.index);(b[T].start!==void 0||b[T].count!==void 0)&&(k+=":"+b[T].start+":"+b[T].count),t.attributes.has(k)?R.indices=t.attributes.get(k):(R.indices=this.processAccessor(c.index,c,b[T].start,b[T].count),t.attributes.set(k,R.indices)),R.indices===null&&delete R.indices}const N=await this.processMaterialAsync(_[b[T].materialIndex]);N!==null&&(R.material=N),p.push(R)}v===!0&&c.setIndex(null),f.primitives=p,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(T){T.writeMesh&&T.writeMesh(e,f)});const L=i.meshes.push(f)-1;return t.meshes.set(a,L),L}detectMeshQuantization(e,t){if(this.extensionsUsed[of])return;let i;switch(t.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}t.normalized&&(i+=" normalized");const o=e.split("_",1)[0];y0[o]&&y0[o].includes(i)&&(this.extensionsUsed[of]=!0,this.extensionsRequired[of]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const i=e.isOrthographicCamera,o={type:i?"orthographic":"perspective"};return i?o.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:o.perspective={aspectRatio:e.aspect,yfov:Ec.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(o.name=e.type),t.cameras.push(o)-1}processAnimation(e,t){const i=this.json,o=this.nodeMap;i.animations||(i.animations=[]),e=Rc.Utils.mergeMorphTargetTracks(e.clone(),t);const a=e.tracks,c=[],u=[];for(let f=0;f<a.length;++f){const h=a[f],p=Nt.parseTrackName(h.name);let m=Nt.findNode(t,p.nodeName);const x=S0[p.propertyName];if(p.objectName==="bones"&&(m.isSkinnedMesh===!0?m=m.skeleton.getBoneByName(p.objectIndex):m=void 0),!m||!x){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}const y=1;let w=h.values.length/h.times.length;x===S0.morphTargetInfluences&&(w/=m.morphTargetInfluences.length);let E;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(E="CUBICSPLINE",w/=3):h.getInterpolation()===lS?E="STEP":E="LINEAR",u.push({input:this.processAccessor(new fn(h.times,y)),output:this.processAccessor(new fn(h.values,w)),interpolation:E}),c.push({sampler:u.length-1,target:{node:o.get(m),path:x}})}return i.animations.push({name:e.name||"clip_"+i.animations.length,samplers:u,channels:c}),i.animations.length-1}processSkin(e){const t=this.json,i=this.nodeMap,o=t.nodes[i.get(e)],a=e.skeleton;if(a===void 0)return null;const c=e.skeleton.bones[0];if(c===void 0)return null;const u=[],f=new Float32Array(a.bones.length*16),h=new Bt;for(let m=0;m<a.bones.length;++m)u.push(i.get(a.bones[m])),h.copy(a.boneInverses[m]),h.multiply(e.bindMatrix).toArray(f,m*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new fn(f,16)),joints:u,skeleton:i.get(c)}),o.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,i=this.options,o=this.nodeMap;t.nodes||(t.nodes=[]);const a={};if(i.trs){const u=e.quaternion.toArray(),f=e.position.toArray(),h=e.scale.toArray();ya(u,[0,0,0,1])||(a.rotation=u),ya(f,[0,0,0])||(a.translation=f),ya(h,[1,1,1])||(a.scale=h)}else e.matrixAutoUpdate&&e.updateMatrix(),J2(e.matrix)===!1&&(a.matrix=e.matrix.elements);if(e.name!==""&&(a.name=String(e.name)),this.serializeUserData(e,a),e.isMesh||e.isLine||e.isPoints){const u=await this.processMeshAsync(e);u!==null&&(a.mesh=u)}else e.isCamera&&(a.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const u=[];for(let f=0,h=e.children.length;f<h;f++){const p=e.children[f];if(p.visible||i.onlyVisible===!1){const m=await this.processNodeAsync(p);m!==null&&u.push(m)}}u.length>0&&(a.children=u)}await this._invokeAllAsync(function(u){u.writeNode&&u.writeNode(e,a)});const c=t.nodes.push(a)-1;return o.set(e,c),c}async processSceneAsync(e){const t=this.json,i=this.options;t.scenes||(t.scenes=[],t.scene=0);const o={};e.name!==""&&(o.name=e.name),t.scenes.push(o);const a=[];for(let c=0,u=e.children.length;c<u;c++){const f=e.children[c];if(f.visible||i.onlyVisible===!1){const h=await this.processNodeAsync(f);h!==null&&a.push(h)}}a.length>0&&(o.nodes=a),this.serializeUserData(e,o)}async processObjectsAsync(e){const t=new bc;t.name="AuxScene";for(let i=0;i<e.length;i++)t.children.push(e[i]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(o){o.beforeParse&&o.beforeParse(e)});const i=[];for(let o=0;o<e.length;o++)e[o]instanceof bc?await this.processSceneAsync(e[o]):i.push(e[o]);i.length>0&&await this.processObjectsAsync(i);for(let o=0;o<this.skins.length;++o)this.processSkin(this.skins[o]);for(let o=0;o<t.animations.length;++o)this.processAnimation(t.animations[o],e[0]);await this._invokeAllAsync(function(o){o.afterParse&&o.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,i=this.plugins.length;t<i;t++)await e(this.plugins[t])}}class nA{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const i=this.writer,o=i.json,a=i.extensionsUsed,c={};e.name&&(c.name=e.name),c.color=e.color.toArray(),c.intensity=e.intensity,e.isDirectionalLight?c.type="directional":e.isPointLight?(c.type="point",e.distance>0&&(c.range=e.distance)):e.isSpotLight&&(c.type="spot",e.distance>0&&(c.range=e.distance),c.spot={},c.spot.innerConeAngle=(1-e.penumbra)*e.angle,c.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),a[this.name]||(o.extensions=o.extensions||{},o.extensions[this.name]={lights:[]},a[this.name]=!0);const u=o.extensions[this.name].lights;u.push(c),t.extensions=t.extensions||{},t.extensions[this.name]={light:u.length-1}}}class iA{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const o=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},o[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class rA{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.clearcoatFactor=e.clearcoat,e.clearcoatMap){const c={index:await i.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};i.applyTextureTransform(c,e.clearcoatMap),a.clearcoatTexture=c}if(a.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const c={index:await i.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};i.applyTextureTransform(c,e.clearcoatRoughnessMap),a.clearcoatRoughnessTexture=c}if(e.clearcoatNormalMap){const c={index:await i.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(c.scale=e.clearcoatNormalScale.x),i.applyTextureTransform(c,e.clearcoatNormalMap),a.clearcoatNormalTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class sA{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const o=this.writer.extensionsUsed,a={};a.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class oA{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.iridescenceFactor=e.iridescence,e.iridescenceMap){const c={index:await i.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};i.applyTextureTransform(c,e.iridescenceMap),a.iridescenceTexture=c}if(a.iridescenceIor=e.iridescenceIOR,a.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],a.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const c={index:await i.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};i.applyTextureTransform(c,e.iridescenceThicknessMap),a.iridescenceThicknessTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class aA{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.transmissionFactor=e.transmission,e.transmissionMap){const c={index:await i.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};i.applyTextureTransform(c,e.transmissionMap),a.transmissionTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class lA{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.thicknessFactor=e.thickness,e.thicknessMap){const c={index:await i.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};i.applyTextureTransform(c,e.thicknessMap),a.thicknessTexture=c}e.attenuationDistance!==1/0&&(a.attenuationDistance=e.attenuationDistance),a.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class cA{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const o=this.writer.extensionsUsed,a={};a.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class uA{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(Y2)&&!e.specularIntensityMap&&!e.specularColorMap)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.specularIntensityMap){const c={index:await i.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};i.applyTextureTransform(c,e.specularIntensityMap),a.specularTexture=c}if(e.specularColorMap){const c={index:await i.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};i.applyTextureTransform(c,e.specularColorMap),a.specularColorTexture=c}a.specularFactor=e.specularIntensity,a.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class dA{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.sheenRoughnessMap){const c={index:await i.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};i.applyTextureTransform(c,e.sheenRoughnessMap),a.sheenRoughnessTexture=c}if(e.sheenColorMap){const c={index:await i.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};i.applyTextureTransform(c,e.sheenColorMap),a.sheenColorTexture=c}a.sheenRoughnessFactor=e.sheenRoughness,a.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class fA{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.anisotropyMap){const c={index:await i.processTextureAsync(e.anisotropyMap)};i.applyTextureTransform(c,e.anisotropyMap),a.anisotropyTexture=c}a.anisotropyStrength=e.anisotropy,a.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class hA{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const o=this.writer.extensionsUsed,a={};a.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class pA{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.bumpMap){const c={index:await i.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};i.applyTextureTransform(c,e.bumpMap),a.bumpTexture=c}a.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class mA{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const i=this.writer,o=e,a=new Float32Array(o.count*3),c=new Float32Array(o.count*4),u=new Float32Array(o.count*3),f=new Bt,h=new K,p=new Gr,m=new K;for(let y=0;y<o.count;y++)o.getMatrixAt(y,f),f.decompose(h,p,m),h.toArray(a,y*3),p.toArray(c,y*4),m.toArray(u,y*3);const x={TRANSLATION:i.processAccessor(new fn(a,3)),ROTATION:i.processAccessor(new fn(c,4)),SCALE:i.processAccessor(new fn(u,3))};o.instanceColor&&(x._COLOR_0=i.processAccessor(o.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:x},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}}Rc.Utils={insertKeyframe:function(s,e){const i=s.getValueSize(),o=new s.TimeBufferType(s.times.length+1),a=new s.ValueBufferType(s.values.length+i),c=s.createInterpolant(new s.ValueBufferType(i));let u;if(s.times.length===0){o[0]=e;for(let f=0;f<i;f++)a[f]=0;u=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;o[0]=e,o.set(s.times,1),a.set(c.evaluate(e),0),a.set(s.values,i),u=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;o[o.length-1]=e,o.set(s.times,0),a.set(s.values,0),a.set(c.evaluate(e),s.values.length),u=o.length-1}else for(let f=0;f<s.times.length;f++){if(Math.abs(s.times[f]-e)<.001)return f;if(s.times[f]<e&&s.times[f+1]>e){o.set(s.times.slice(0,f+1),0),o[f+1]=e,o.set(s.times.slice(f+1),f+2),a.set(s.values.slice(0,(f+1)*i),0),a.set(c.evaluate(e),(f+1)*i),a.set(s.values.slice((f+1)*i),(f+2)*i),u=f+1;break}}return s.times=o,s.values=a,u},mergeMorphTargetTracks:function(s,e){const t=[],i={},o=s.tracks;for(let a=0;a<o.length;++a){let c=o[a];const u=Nt.parseTrackName(c.name),f=Nt.findNode(e,u.nodeName);if(u.propertyName!=="morphTargetInfluences"||u.propertyIndex===void 0){t.push(c);continue}if(c.createInterpolant!==c.InterpolantFactoryMethodDiscrete&&c.createInterpolant!==c.InterpolantFactoryMethodLinear){if(c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),c=c.clone(),c.setInterpolation(cS)}const h=f.morphTargetInfluences.length,p=f.morphTargetDictionary[u.propertyIndex];if(p===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+u.propertyIndex);let m;if(i[f.uuid]===void 0){m=c.clone();const y=new m.ValueBufferType(h*m.times.length);for(let w=0;w<m.times.length;w++)y[w*h+p]=m.values[w];m.name=(u.nodeName||"")+".morphTargetInfluences",m.values=y,i[f.uuid]=m,t.push(m);continue}const x=c.createInterpolant(new c.ValueBufferType(1));m=i[f.uuid];for(let y=0;y<m.times.length;y++)m.values[y*h+p]=x.evaluate(m.times[y]);for(let y=0;y<c.times.length;y++){const w=this.insertKeyframe(m,c.times[y]);m.values[w*h+p]=c.values[y]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){const e=new fn(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,i=s.count;t<i;t++)for(let o=0;o<s.itemSize;o++)e.setComponent(t,o,s.getComponent(t,o));return e}};const vc=.1,ke=vc/2;function b0(s,e,t,i){var p,m;const o=new po,a=[];function c(x,y,w){var E,v;return x<0||x>=e||y<0||y>=t||w<0||w>=i?!1:((v=(E=s[y])==null?void 0:E[x])==null?void 0:v[w])!=="transparent"}const u=new Map;function f(x,y,w,E,v){u.has(x)||u.set(x,{verts:[],normals:[]});const{verts:_,normals:b}=u.get(x),[L,T,U,R]=y;for(const N of[L,T,U,L,U,R])_.push(N[0],N[1],N[2]),b.push(w,E,v)}for(let x=0;x<t;x++)for(let y=0;y<e;y++)for(let w=0;w<i;w++){const E=(m=(p=s[x])==null?void 0:p[y])==null?void 0:m[w];if(!E||E==="transparent")continue;const v=(y-e/2+.5)*vc,_=(t-1-x)*vc+ke,b=(w-i/2+.5)*vc;c(y,x,w+1)||f(E,[[v-ke,_-ke,b+ke],[v+ke,_-ke,b+ke],[v+ke,_+ke,b+ke],[v-ke,_+ke,b+ke]],0,0,1),c(y,x,w-1)||f(E,[[v+ke,_-ke,b-ke],[v-ke,_-ke,b-ke],[v-ke,_+ke,b-ke],[v+ke,_+ke,b-ke]],0,0,-1),c(y,x-1,w)||f(E,[[v-ke,_+ke,b-ke],[v+ke,_+ke,b-ke],[v+ke,_+ke,b+ke],[v-ke,_+ke,b+ke]],0,1,0),c(y,x+1,w)||f(E,[[v-ke,_-ke,b+ke],[v+ke,_-ke,b+ke],[v+ke,_-ke,b-ke],[v-ke,_-ke,b-ke]],0,-1,0),c(y+1,x,w)||f(E,[[v+ke,_-ke,b+ke],[v+ke,_-ke,b-ke],[v+ke,_+ke,b-ke],[v+ke,_+ke,b+ke]],1,0,0),c(y-1,x,w)||f(E,[[v-ke,_-ke,b-ke],[v-ke,_-ke,b+ke],[v-ke,_+ke,b+ke],[v-ke,_+ke,b-ke]],-1,0,0)}for(const[x,{verts:y,normals:w}]of u){const E=parseInt(x.slice(1,3),16)/255,v=parseInt(x.slice(3,5),16)/255,_=parseInt(x.slice(5,7),16)/255,b=new $n;b.setAttribute("position",new Kt(y,3)),b.setAttribute("normal",new Kt(w,3));const L=new xc({color:new ft(E,v,_),roughness:.75,metalness:.08});a.push(L),o.add(new In(b,L))}function h(){a.forEach(x=>x.dispose()),o.traverse(x=>{x.geometry&&x.geometry.dispose()})}return{group:o,dispose:h}}const Pc={studio:{label:"Studio",bg:1118481,ambient:[16777215,.55],key:[16777215,1.2,[5,8,5]],fill:[8427980,.5,[-4,2,-3]],rim:[16750916,.35,[0,-4,-6]]},warm:{label:"Warm",bg:1707526,ambient:[16766336,.5],key:[16764006,1,[4,7,3]],fill:[16737826,.4,[-3,1,-2]],rim:[16755268,.3,[0,-3,-5]]},cool:{label:"Cool",bg:396570,ambient:[10075135,.5],key:[11193599,1.1,[4,7,4]],fill:[4482764,.5,[-4,1,-3]],rim:[2293725,.3,[0,-3,-5]]},dramatic:{label:"Dramatic",bg:394758,ambient:[16777215,.08],key:[16777215,2.2,[3,9,2]],fill:[4478378,.15,[-4,0,-2]],rim:[16729088,.5,[-1,-5,-7]]}},gA=[{label:"Dark",value:"#111111"},{label:"Charcoal",value:"#1a1a1a"},{label:"Navy",value:"#060d1a"},{label:"White",value:"#f0f0f0"},{label:"Custom",value:null}];function xA(s){const e=Ce.useRef(null),t=Ce.useRef(null),i=Ce.useRef(null),o=Ce.useRef(null),a=Ce.useRef(null),c=Ce.useRef(null),u=Ce.useRef(null);Ce.useEffect(()=>{const y=s.current;if(!y)return;const w=new yx({antialias:!0,alpha:!1});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setSize(y.clientWidth,y.clientHeight),w.toneMapping=X0,w.toneMappingExposure=1.1,w.outputColorSpace=Wn,w.shadowMap.enabled=!1,w.setClearColor(1118481,1),y.appendChild(w.domElement),e.current=w;const E=new bc;E.fog=new hh(1118481,.1),t.current=E;const v=new wx(10,20,3355443,2236962);v.position.y=-.06,v.material.transparent=!0,v.material.opacity=.4,E.add(v);const _=new Dn(42,y.clientWidth/y.clientHeight,.01,60);_.position.set(3,3.5,3),_.lookAt(0,1.5,0),i.current=_;const b=new bx(_,w.domElement);b.enableDamping=!0,b.dampingFactor=.05,b.minDistance=.3,b.maxDistance=20,b.target.set(0,1.5,0),o.current=b;let L=!0;function T(){L&&(u.current=requestAnimationFrame(T),b.update(),w.render(E,_))}T();const U=new ResizeObserver(()=>{const R=y.clientWidth,N=y.clientHeight;!R||!N||(w.setSize(R,N),_.aspect=R/N,_.updateProjectionMatrix())});return U.observe(y),()=>{L=!1,cancelAnimationFrame(u.current),U.disconnect(),b.dispose(),w.dispose(),y.contains(w.domElement)&&y.removeChild(w.domElement)}},[]);const f=Ce.useCallback(y=>{const w=t.current,E=e.current;if(!w)return;const v=Pc[y]??Pc.studio;w.children.filter(ce=>ce.isLight).forEach(ce=>w.remove(ce));const[_,b]=v.ambient;w.add(Object.assign(new Ex(_,b)));const[L,T,U]=v.key,R=new yo(L,T);R.position.set(...U),w.add(R);const[N,k,D]=v.fill,P=new yo(N,k);P.position.set(...D),w.add(P);const[O,q,W]=v.rim,oe=new yo(O,q);oe.position.set(...W),w.add(oe),E&&(E.setClearColor(v.bg,1),w.fog&&w.fog.color.setHex(v.bg))},[]),h=Ce.useCallback(y=>{var E,v;const w=parseInt(y.replace("#",""),16);(E=e.current)==null||E.setClearColor(w,1),(v=t.current)!=null&&v.fog&&t.current.fog.color.setHex(w)},[]),p=Ce.useCallback(()=>{var U;const y=t.current;if(!y)return;const{layers:w,canvasWidth:E,canvasHeight:v,depthDimension:_}=nt.getState(),b=Ci(w,E,v,_),{group:L,dispose:T}=b0(b,E,v,_);a.current&&(y.remove(a.current),(U=c.current)==null||U.call(c)),y.add(L),a.current=L,c.current=T},[]);Ce.useEffect(()=>{p(),f("studio")},[p,f]);const m=Ce.useCallback((y=2048)=>{const w=e.current,E=t.current,{canvasWidth:v,canvasHeight:_,depthDimension:b}=nt.getState();if(!w||!E)return;const T=Math.max(v,_,b)*.1*3,U=new Dn(42,1,.01,60);U.position.set(T,T*.8,T),U.lookAt(0,0,0),w.setSize(y,y),w.render(E,U);const R=w.domElement.toDataURL("image/png"),N=document.createElement("a");N.download=`render_${y}px.png`,N.href=R,N.click();const k=s.current;k&&(w.setSize(k.clientWidth,k.clientHeight),i.current.aspect=k.clientWidth/k.clientHeight,i.current.updateProjectionMatrix())},[]),x=Ce.useCallback(()=>{const{layers:y,canvasWidth:w,canvasHeight:E,depthDimension:v}=nt.getState(),_=Ci(y,w,E,v),{group:b,dispose:L}=b0(_,w,E,v);new Rc().parse(b,U=>{const R=new Blob([U],{type:"application/octet-stream"}),N=URL.createObjectURL(R),k=document.createElement("a");k.href=N,k.download="model.glb",k.click(),URL.revokeObjectURL(N),L()},U=>console.error("GLB export error:",U),{binary:!0})},[]);return{rebuild:p,applyPreset:f,applyBg:h,exportPng:m,exportGlb:x}}function vA(s,e,t,i){var U,R;const o=Ci(s,e,t,i),a=new Map,c=new Uint8Array(256*4);let u=1;const f=[];for(let N=0;N<t;N++)for(let k=0;k<e;k++)for(let D=0;D<i;D++){const P=(R=(U=o[N])==null?void 0:U[k])==null?void 0:R[D];if(!P||P==="transparent")continue;let O=a.get(P);if(O===void 0){if(u>255)continue;O=u++,a.set(P,O);const q=parseInt(P.slice(1,3),16),W=parseInt(P.slice(3,5),16),oe=parseInt(P.slice(5,7),16);c[(O-1)*4+0]=q,c[(O-1)*4+1]=W,c[(O-1)*4+2]=oe,c[(O-1)*4+3]=255}f.push(k,D,t-1-N,O)}const h=f.length/4,p=12,m=4+h*4,x=1024,y=12+p+(12+m)+(12+x),w=20+y,E=new ArrayBuffer(w),v=new DataView(E);let _=0;const b=N=>{for(const k of N)v.setUint8(_++,k.charCodeAt(0))},L=N=>{v.setUint32(_,N,!0),_+=4},T=N=>{v.setUint8(_++,N)};b("VOX "),L(150),b("MAIN"),L(0),L(y),b("SIZE"),L(p),L(0),L(e),L(i),L(t),b("XYZI"),L(m),L(0),L(h);for(let N=0;N<h;N++)T(f[N*4+0]),T(f[N*4+1]),T(f[N*4+2]),T(f[N*4+3]);b("RGBA"),L(x),L(0);for(let N=0;N<256;N++)T(c[N*4+0]),T(c[N*4+1]),T(c[N*4+2]),T(c[N*4+3]);return E}function _A(s,e,t,i,o="model.vox"){const a=vA(s,e,t,i),c=new Blob([a],{type:"application/octet-stream"}),u=URL.createObjectURL(c),f=document.createElement("a");f.href=u,f.download=o,f.click(),URL.revokeObjectURL(u)}const wn=.1,st=wn/2;function lo(s,e,t,i,o,a,c){var u,f;return e<0||e>=o||t<0||t>=a||i<0||i>=c?!1:((f=(u=s[t])==null?void 0:u[e])==null?void 0:f[i])!=="transparent"}function yA(s,e,t,i){var w,E;const o=Ci(s,e,t,i),a=new Map;let c=0;const u=["# Picell3D export",""],f=new Map;let h=1;const p=[];function m(v){if(a.has(v))return a.get(v);const _=`c${c++}`;a.set(v,_);const b=(parseInt(v.slice(1,3),16)/255).toFixed(4),L=(parseInt(v.slice(3,5),16)/255).toFixed(4),T=(parseInt(v.slice(5,7),16)/255).toFixed(4);return u.push(`newmtl ${_}`,`Kd ${b} ${L} ${T}`,"Ka 0.05 0.05 0.05","Ks 0.0 0.0 0.0","d 1.0",""),f.set(_,[]),_}function x(v,_){const b=[];for(const[L,T,U]of _)p.push(L,T,U),b.push(h++);f.get(v).push(b)}for(let v=0;v<t;v++)for(let _=0;_<e;_++)for(let b=0;b<i;b++){const L=(E=(w=o[v])==null?void 0:w[_])==null?void 0:E[b];if(!L||L==="transparent")continue;const T=(_-e/2+.5)*wn,U=(t-1-v)*wn,R=(b-i/2+.5)*wn,N=m(L);lo(o,_,v,b+1,e,t,i)||x(N,[[T-st,U,R+st],[T+st,U,R+st],[T+st,U+wn,R+st],[T-st,U+wn,R+st]]),lo(o,_,v,b-1,e,t,i)||x(N,[[T+st,U,R-st],[T-st,U,R-st],[T-st,U+wn,R-st],[T+st,U+wn,R-st]]),lo(o,_,v-1,b,e,t,i)||x(N,[[T-st,U+wn,R-st],[T+st,U+wn,R-st],[T+st,U+wn,R+st],[T-st,U+wn,R+st]]),lo(o,_,v+1,b,e,t,i)||x(N,[[T-st,U,R+st],[T+st,U,R+st],[T+st,U,R-st],[T-st,U,R-st]]),lo(o,_+1,v,b,e,t,i)||x(N,[[T+st,U,R+st],[T+st,U,R-st],[T+st,U+wn,R-st],[T+st,U+wn,R+st]]),lo(o,_-1,v,b,e,t,i)||x(N,[[T-st,U,R-st],[T-st,U,R+st],[T-st,U+wn,R+st],[T-st,U+wn,R-st]])}const y=["# Picell3D export","mtllib model.mtl","","# Vertices"];for(let v=0;v<p.length;v+=3)y.push(`v ${p[v].toFixed(5)} ${p[v+1].toFixed(5)} ${p[v+2].toFixed(5)}`);y.push("");for(const[v,_]of f)if(_.length){y.push(`usemtl ${v}`);for(const b of _)y.push(`f ${b.join(" ")}`);y.push("")}return{obj:y.join(`
`),mtl:u.join(`
`)}}function A0(s,e,t){const i=new Blob([s],{type:t}),o=URL.createObjectURL(i),a=document.createElement("a");a.href=o,a.download=e,a.click(),URL.revokeObjectURL(o)}function SA(s,e,t,i,o="model"){const{obj:a,mtl:c}=yA(s,e,t,i);A0(a,`${o}.obj`,"text/plain"),setTimeout(()=>A0(c,`${o}.mtl`,"text/plain"),150)}const MA={studio:k0,warm:ky,cool:wy,dramatic:ey};function EA(s,e,t,i){var a,c;let o=0;for(const u of s)if(u.visible)for(let f=0;f<t;f++)for(let h=0;h<e;h++)for(let p=0;p<i;p++)(c=(a=u.voxels[f])==null?void 0:a[h])!=null&&c[p]&&u.voxels[f][h][p]!=="transparent"&&o++;return o}function ac({children:s}){return M.jsx("div",{className:"px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest",style:{color:"var(--color-accent)",opacity:.8},children:s})}function co({label:s,sub:e,onClick:t,icon:i=Kf}){const[o,a]=Ce.useState(!1),c=async()=>{a(!0),await t(),setTimeout(()=>a(!1),800)};return M.jsxs("button",{onClick:c,disabled:o,className:"w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors rounded-none hover:bg-white/5 disabled:opacity-50",children:[M.jsx(i,{size:15,className:"flex-shrink-0",style:{color:"var(--color-accent)"}}),M.jsxs("div",{className:"min-w-0 flex-1",children:[M.jsx("div",{className:"text-sm font-medium",style:{color:"var(--color-text)"},children:o?"Exporting…":s}),e&&M.jsx("div",{className:"text-xs opacity-50 truncate",children:e})]}),M.jsx(N_,{size:12,className:"flex-shrink-0 opacity-30"})]})}function wA({onClose:s}){const e=Ce.useRef(null),{rebuild:t,applyPreset:i,applyBg:o,exportPng:a,exportGlb:c}=xA(e),{layers:u,canvasWidth:f,canvasHeight:h,depthDimension:p}=nt(),[m,x]=Ce.useState("studio"),[y,w]=Ce.useState("#111111"),[E,v]=Ce.useState("dark");Ce.useEffect(()=>nt.subscribe((U,R)=>{U.layers!==R.layers&&t()}),[t]);const _=Ce.useCallback(T=>{x(T),i(T);const U="#"+Pc[T].bg.toString(16).padStart(6,"0");w(U),v("custom")},[i]),b=T=>{T.value===null?v("custom"):(v(T.label.toLowerCase()),w(T.value),o(T.value))},L=EA(u,f,h,p);return M.jsxs("div",{className:"fixed inset-0 flex flex-col",style:{zIndex:100,background:"var(--color-background)",color:"var(--color-text)"},children:[M.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b flex-shrink-0",style:{borderColor:"var(--color-border)",background:"var(--color-surfaceAlt)"},children:[M.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[M.jsx(ms,{size:15,style:{color:"var(--color-accent)"}}),M.jsx("span",{className:"font-theme text-sm tracking-wider",children:"Render Studio"}),M.jsxs("span",{className:"text-xs opacity-30 ml-1",children:[f," × ",h," × ",p," · ",L.toLocaleString()," voxels"]})]}),M.jsxs("button",{onClick:s,className:"flex items-center gap-1.5 px-3 py-1 rounded border text-xs transition-colors",style:{borderColor:"var(--color-border)",color:"var(--color-text-muted)"},children:[M.jsx(gs,{size:13})," Close"]})]}),M.jsxs("div",{className:"flex flex-1 min-h-0",children:[M.jsxs("div",{className:"w-64 flex-shrink-0 border-r flex flex-col overflow-y-auto",style:{borderColor:"var(--color-border)",background:"var(--color-surface)"},children:[M.jsx(ac,{children:"Lighting"}),M.jsx("div",{className:"grid grid-cols-2 gap-1.5 px-4 pb-2",children:Object.entries(Pc).map(([T,U])=>{const R=MA[T]??k0;return M.jsxs("button",{onClick:()=>_(T),className:`flex flex-col items-center gap-1 py-2 rounded border text-xs transition-all ${m===T?"border-accent bg-accent/15 text-accent":"border-border text-text-muted hover:border-accent/40 hover:text-text"}`,style:m===T?{borderColor:"var(--color-accent)"}:{},children:[M.jsx(R,{size:16}),U.label]},T)})}),M.jsx(ac,{children:"Background"}),M.jsx("div",{className:"flex flex-wrap gap-1.5 px-4 pb-1",children:gA.filter(T=>T.value!==null).map(T=>M.jsxs("button",{onClick:()=>b(T),className:"flex items-center gap-1.5 px-2 py-1 rounded border text-xs transition-colors",style:{borderColor:E===T.label.toLowerCase()?"var(--color-accent)":"var(--color-border)",color:E===T.label.toLowerCase()?"var(--color-accent)":"var(--color-text-muted)"},children:[M.jsx("span",{className:"inline-block w-3 h-3 rounded-sm border border-white/20",style:{background:T.value}}),T.label]},T.label))}),M.jsxs("div",{className:"flex items-center gap-2 px-4 pb-3 pt-1",children:[M.jsx("span",{className:"text-xs opacity-50",children:"Custom"}),M.jsx("input",{type:"color",value:y,onChange:T=>{w(T.target.value),o(T.target.value),v("custom")},className:"w-8 h-6 rounded cursor-pointer border",style:{borderColor:"var(--color-border)"}}),M.jsx("span",{className:"text-xs font-mono opacity-40",children:y})]}),M.jsx("div",{className:"border-t mx-4",style:{borderColor:"var(--color-border)"}}),M.jsx(ac,{children:"Export Image"}),M.jsx(co,{label:"PNG — 1024 px",sub:"Quick preview",icon:lc,onClick:()=>a(1024)}),M.jsx(co,{label:"PNG — 2048 px",sub:"High resolution",icon:lc,onClick:()=>a(2048)}),M.jsx(co,{label:"PNG — 4096 px",sub:"Print / poster",icon:lc,onClick:()=>a(4096)}),M.jsx("div",{className:"border-t mx-4 mt-1",style:{borderColor:"var(--color-border)"}}),M.jsx(ac,{children:"Export 3D"}),M.jsx(co,{label:"OBJ + MTL",sub:"Blender · Maya · Cinema4D",icon:ms,onClick:async()=>{const{layers:T,canvasWidth:U,canvasHeight:R,depthDimension:N}=nt.getState();SA(T,U,R,N)}}),M.jsx(co,{label:"GLB / GLTF",sub:"Unity · Unreal · Sketchfab",icon:ms,onClick:c}),M.jsx(co,{label:"VOX",sub:"MagicaVoxel · voxel editors",icon:ms,onClick:async()=>{const{layers:T,canvasWidth:U,canvasHeight:R,depthDimension:N}=nt.getState();_A(T,U,R,N)}}),M.jsx("div",{className:"mt-auto px-4 py-3 border-t",style:{borderColor:"var(--color-border)"},children:M.jsxs("div",{className:"text-xs opacity-40 space-y-0.5",children:[M.jsxs("div",{children:[L.toLocaleString()," voxels"]}),M.jsxs("div",{children:[f," × ",h," × ",p," (W×H×D)"]}),M.jsxs("div",{children:[u.filter(T=>T.visible).length," visible layer",u.filter(T=>T.visible).length!==1?"s":""]})]})})]}),M.jsxs("div",{className:"flex-1 relative min-w-0",style:{background:"#111"},children:[M.jsx("div",{ref:e,className:"w-full h-full"}),M.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 text-xs pointer-events-none opacity-40 select-none",style:{color:"#fff"},children:"Drag to orbit · Scroll to zoom · Right-drag to pan"})]})]})]})}const TA=[{id:"front",Icon:D0,label:"Front"},{id:"back",Icon:_y,label:"Back"},{id:"left",Icon:oy,label:"Left"},{id:"right",Icon:ly,label:"Right"},{id:"top",Icon:uy,label:"Top"},{id:"bottom",Icon:ry,label:"Bottom"}];function bA(){const s=nt(E=>E.activeTheme),e=nt(E=>E.viewMode),t=nt(E=>E.setViewMode),i=nt(E=>E.activeTool),o=Ce.useRef(null),[a,c]=Ce.useState(!1);i1(),Ce.useEffect(()=>{G0(lf(s))},[s]);const f=lf(s).PainterBackground,h=e!=="preview-only",p=e!=="canvas-only",m=e!=="canvas-only",x=e==="preview-only",y=()=>{p&&t("preview-only")},w=()=>{h&&t("canvas-only")};return M.jsxs("div",{className:"relative flex flex-col w-full h-screen overflow-hidden font-theme",style:{background:"var(--color-background)",color:"var(--color-text)"},children:[M.jsx(f,{}),M.jsxs("div",{className:"relative flex flex-col w-full h-full",style:{zIndex:10},children:[M.jsx(y1,{onExport:()=>{var E;return(E=o.current)==null?void 0:E.call(o)},onRender:()=>c(!0)}),M.jsxs("div",{className:"flex flex-1 min-h-0",children:[m&&M.jsx("div",{className:"flex flex-col border-r border-border flex-shrink-0 overflow-y-auto",style:{width:i==="material"?"10rem":"7rem",background:"color-mix(in srgb, var(--color-surface) 90%, transparent)",transition:"width 0.15s ease"},children:i==="material"?M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"px-2 pt-2 pb-1 text-xs uppercase tracking-wide text-text-muted border-b border-border",children:"Materials"}),M.jsx(H2,{})]}):M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"px-2 pt-2 pb-1 text-xs uppercase tracking-wide text-text-muted border-b border-border",children:"Palette"}),M.jsx(B2,{})]})}),h&&M.jsxs("div",{className:"flex flex-col flex-1 min-w-0 overflow-hidden",style:{borderRight:p?"1px solid var(--color-border)":"none"},children:[M.jsx(AA,{closable:p,onClose:y}),M.jsx("div",{className:"flex-1 min-h-0 overflow-hidden relative",style:{background:"color-mix(in srgb, var(--color-background) 80%, transparent)"},children:M.jsx(C1,{})})]}),p&&M.jsxs("div",{className:"flex flex-col flex-1 min-w-0 overflow-hidden",style:{background:"color-mix(in srgb, var(--color-background) 95%, transparent)"},children:[M.jsxs("div",{className:"flex items-center justify-between gap-2 px-3 py-1.5 border-b border-border flex-shrink-0",style:{background:"color-mix(in srgb, var(--color-surfaceAlt) 95%, transparent)",minHeight:32},children:[M.jsx("div",{className:"text-xs text-text-muted opacity-60 uppercase tracking-widest",children:x?"3D Edit Mode":"3D Preview"}),h&&M.jsx(Px,{label:"Close 3D preview",onClick:w})]}),M.jsx("div",{className:"flex-1 min-h-0 relative overflow-hidden",children:M.jsx(z2,{onExport:o})})]}),M.jsxs("div",{className:"flex flex-col w-52 border-l border-border flex-shrink-0 overflow-y-auto",style:{background:"color-mix(in srgb, var(--color-surface) 95%, transparent)"},children:[M.jsx(X2,{}),M.jsx("div",{className:"border-t border-border"}),M.jsx(W2,{})]})]}),M.jsx(E1,{})]}),a&&M.jsx(wA,{onClose:()=>c(!1)})]})}function AA({closable:s,onClose:e}){const{activeView:t,setActiveView:i}=nt();return M.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 border-b border-border flex-shrink-0 flex-wrap",style:{background:"color-mix(in srgb, var(--color-surfaceAlt) 95%, transparent)",minHeight:32},children:[TA.map(({id:o,Icon:a,label:c})=>M.jsxs("button",{onClick:()=>i(o),className:`flex items-center gap-1 px-2 py-0.5 rounded border text-xs transition-colors ${t===o?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/40"}`,children:[M.jsx(a,{size:11}),c]},o)),s&&M.jsx("div",{className:"ml-auto",children:M.jsx(Px,{label:"Close 2D canvas",onClick:e})})]})}function Px({label:s,onClick:e}){return M.jsx("button",{type:"button",onClick:e,className:"w-7 h-7 rounded flex items-center justify-center border border-border text-text-muted hover:text-text hover:border-accent/50 hover:bg-surface transition-colors",title:s,"aria-label":s,children:M.jsx(gs,{size:14})})}v_.createRoot(document.getElementById("root")).render(M.jsx(ga.StrictMode,{children:M.jsx(bA,{})}));
