(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function z0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _d={exports:{}},ua={},yd={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function S_(){if(Xm)return Mt;Xm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=m&&F[m]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function _(F,$,Te){this.props=F,this.context=$,this.refs=E,this.updater=Te||y}_.prototype.isReactComponent={},_.prototype.setState=function(F,$){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,$,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function v(){}v.prototype=_.prototype;function b(F,$,Te){this.props=F,this.context=$,this.refs=E,this.updater=Te||y}var N=b.prototype=new v;N.constructor=b,w(N,_.prototype),N.isPureReactComponent=!0;var T=Array.isArray,D=Object.prototype.hasOwnProperty,C={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function k(F,$,Te){var J,ae={},ge=null,he=null;if($!=null)for(J in $.ref!==void 0&&(he=$.ref),$.key!==void 0&&(ge=""+$.key),$)D.call($,J)&&!P.hasOwnProperty(J)&&(ae[J]=$[J]);var ye=arguments.length-2;if(ye===1)ae.children=Te;else if(1<ye){for(var Ce=Array(ye),Ve=0;Ve<ye;Ve++)Ce[Ve]=arguments[Ve+2];ae.children=Ce}if(F&&F.defaultProps)for(J in ye=F.defaultProps,ye)ae[J]===void 0&&(ae[J]=ye[J]);return{$$typeof:s,type:F,key:ge,ref:he,props:ae,_owner:C.current}}function I(F,$){return{$$typeof:s,type:F.type,key:$,ref:F.ref,props:F.props,_owner:F._owner}}function A(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function O(F){var $={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Te){return $[Te]})}var Q=/\/+/g;function H(F,$){return typeof F=="object"&&F!==null&&F.key!=null?O(""+F.key):$.toString(36)}function ne(F,$,Te,J,ae){var ge=typeof F;(ge==="undefined"||ge==="boolean")&&(F=null);var he=!1;if(F===null)he=!0;else switch(ge){case"string":case"number":he=!0;break;case"object":switch(F.$$typeof){case s:case e:he=!0}}if(he)return he=F,ae=ae(he),F=J===""?"."+H(he,0):J,T(ae)?(Te="",F!=null&&(Te=F.replace(Q,"$&/")+"/"),ne(ae,$,Te,"",function(Ve){return Ve})):ae!=null&&(A(ae)&&(ae=I(ae,Te+(!ae.key||he&&he.key===ae.key?"":(""+ae.key).replace(Q,"$&/")+"/")+F)),$.push(ae)),1;if(he=0,J=J===""?".":J+":",T(F))for(var ye=0;ye<F.length;ye++){ge=F[ye];var Ce=J+H(ge,ye);he+=ne(ge,$,Te,Ce,ae)}else if(Ce=x(F),typeof Ce=="function")for(F=Ce.call(F),ye=0;!(ge=F.next()).done;)ge=ge.value,Ce=J+H(ge,ye++),he+=ne(ge,$,Te,Ce,ae);else if(ge==="object")throw $=String(F),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return he}function oe(F,$,Te){if(F==null)return F;var J=[],ae=0;return ne(F,J,"","",function(ge){return $.call(Te,ge,ae++)}),J}function le(F){if(F._status===-1){var $=F._result;$=$(),$.then(function(Te){(F._status===0||F._status===-1)&&(F._status=1,F._result=Te)},function(Te){(F._status===0||F._status===-1)&&(F._status=2,F._result=Te)}),F._status===-1&&(F._status=0,F._result=$)}if(F._status===1)return F._result.default;throw F._result}var te={current:null},V={transition:null},re={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:V,ReactCurrentOwner:C};function j(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:oe,forEach:function(F,$,Te){oe(F,function(){$.apply(this,arguments)},Te)},count:function(F){var $=0;return oe(F,function(){$++}),$},toArray:function(F){return oe(F,function($){return $})||[]},only:function(F){if(!A(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Mt.Component=_,Mt.Fragment=t,Mt.Profiler=o,Mt.PureComponent=b,Mt.StrictMode=i,Mt.Suspense=f,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Mt.act=j,Mt.cloneElement=function(F,$,Te){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var J=w({},F.props),ae=F.key,ge=F.ref,he=F._owner;if($!=null){if($.ref!==void 0&&(ge=$.ref,he=C.current),$.key!==void 0&&(ae=""+$.key),F.type&&F.type.defaultProps)var ye=F.type.defaultProps;for(Ce in $)D.call($,Ce)&&!P.hasOwnProperty(Ce)&&(J[Ce]=$[Ce]===void 0&&ye!==void 0?ye[Ce]:$[Ce])}var Ce=arguments.length-2;if(Ce===1)J.children=Te;else if(1<Ce){ye=Array(Ce);for(var Ve=0;Ve<Ce;Ve++)ye[Ve]=arguments[Ve+2];J.children=ye}return{$$typeof:s,type:F.type,key:ae,ref:ge,props:J,_owner:he}},Mt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},Mt.createElement=k,Mt.createFactory=function(F){var $=k.bind(null,F);return $.type=F,$},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(F){return{$$typeof:u,render:F}},Mt.isValidElement=A,Mt.lazy=function(F){return{$$typeof:p,_payload:{_status:-1,_result:F},_init:le}},Mt.memo=function(F,$){return{$$typeof:h,type:F,compare:$===void 0?null:$}},Mt.startTransition=function(F){var $=V.transition;V.transition={};try{F()}finally{V.transition=$}},Mt.unstable_act=j,Mt.useCallback=function(F,$){return te.current.useCallback(F,$)},Mt.useContext=function(F){return te.current.useContext(F)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(F){return te.current.useDeferredValue(F)},Mt.useEffect=function(F,$){return te.current.useEffect(F,$)},Mt.useId=function(){return te.current.useId()},Mt.useImperativeHandle=function(F,$,Te){return te.current.useImperativeHandle(F,$,Te)},Mt.useInsertionEffect=function(F,$){return te.current.useInsertionEffect(F,$)},Mt.useLayoutEffect=function(F,$){return te.current.useLayoutEffect(F,$)},Mt.useMemo=function(F,$){return te.current.useMemo(F,$)},Mt.useReducer=function(F,$,Te){return te.current.useReducer(F,$,Te)},Mt.useRef=function(F){return te.current.useRef(F)},Mt.useState=function(F){return te.current.useState(F)},Mt.useSyncExternalStore=function(F,$,Te){return te.current.useSyncExternalStore(F,$,Te)},Mt.useTransition=function(){return te.current.useTransition()},Mt.version="18.3.1",Mt}var Ym;function eh(){return Ym||(Ym=1,yd.exports=S_()),yd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function M_(){if($m)return ua;$m=1;var s=eh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var p,m={},x=null,y=null;h!==void 0&&(x=""+h),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!a.hasOwnProperty(p)&&(m[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:u,key:x,ref:y,props:m,_owner:o.current}}return ua.Fragment=t,ua.jsx=c,ua.jsxs=c,ua}var qm;function E_(){return qm||(qm=1,_d.exports=M_()),_d.exports}var S=E_(),_e=eh();const xa=z0(_e);var Il={},Sd={exports:{}},Gn={},Md={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function w_(){return Km||(Km=1,(function(s){function e(V,re){var j=V.length;V.push(re);e:for(;0<j;){var F=j-1>>>1,$=V[F];if(0<o($,re))V[F]=re,V[j]=$,j=F;else break e}}function t(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var re=V[0],j=V.pop();if(j!==re){V[0]=j;e:for(var F=0,$=V.length,Te=$>>>1;F<Te;){var J=2*(F+1)-1,ae=V[J],ge=J+1,he=V[ge];if(0>o(ae,j))ge<$&&0>o(he,ae)?(V[F]=he,V[ge]=j,F=ge):(V[F]=ae,V[J]=j,F=J);else if(ge<$&&0>o(he,j))V[F]=he,V[ge]=j,F=ge;else break e}}return re}function o(V,re){var j=V.sortIndex-re.sortIndex;return j!==0?j:V.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();s.unstable_now=function(){return c.now()-u}}var f=[],h=[],p=1,m=null,x=3,y=!1,w=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(V){for(var re=t(h);re!==null;){if(re.callback===null)i(h);else if(re.startTime<=V)i(h),re.sortIndex=re.expirationTime,e(f,re);else break;re=t(h)}}function T(V){if(E=!1,N(V),!w)if(t(f)!==null)w=!0,le(D);else{var re=t(h);re!==null&&te(T,re.startTime-V)}}function D(V,re){w=!1,E&&(E=!1,v(k),k=-1),y=!0;var j=x;try{for(N(re),m=t(f);m!==null&&(!(m.expirationTime>re)||V&&!O());){var F=m.callback;if(typeof F=="function"){m.callback=null,x=m.priorityLevel;var $=F(m.expirationTime<=re);re=s.unstable_now(),typeof $=="function"?m.callback=$:m===t(f)&&i(f),N(re)}else i(f);m=t(f)}if(m!==null)var Te=!0;else{var J=t(h);J!==null&&te(T,J.startTime-re),Te=!1}return Te}finally{m=null,x=j,y=!1}}var C=!1,P=null,k=-1,I=5,A=-1;function O(){return!(s.unstable_now()-A<I)}function Q(){if(P!==null){var V=s.unstable_now();A=V;var re=!0;try{re=P(!0,V)}finally{re?H():(C=!1,P=null)}}else C=!1}var H;if(typeof b=="function")H=function(){b(Q)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,oe=ne.port2;ne.port1.onmessage=Q,H=function(){oe.postMessage(null)}}else H=function(){_(Q,0)};function le(V){P=V,C||(C=!0,H())}function te(V,re){k=_(function(){V(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,le(D))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(V){switch(x){case 1:case 2:case 3:var re=3;break;default:re=x}var j=x;x=re;try{return V()}finally{x=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,re){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var j=x;x=V;try{return re()}finally{x=j}},s.unstable_scheduleCallback=function(V,re,j){var F=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?F+j:F):j=F,V){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=j+$,V={id:p++,callback:re,priorityLevel:V,startTime:j,expirationTime:$,sortIndex:-1},j>F?(V.sortIndex=j,e(h,V),t(f)===null&&V===t(h)&&(E?(v(k),k=-1):E=!0,te(T,j-F))):(V.sortIndex=$,e(f,V),w||y||(w=!0,le(D))),V},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(V){var re=x;return function(){var j=x;x=re;try{return V.apply(this,arguments)}finally{x=j}}}})(Ed)),Ed}var Zm;function T_(){return Zm||(Zm=1,Md.exports=w_()),Md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function b_(){if(Qm)return Gn;Qm=1;var s=eh(),e=T_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function x(n){return f.call(m,n)?!0:f.call(p,n)?!1:h.test(n)?m[n]=!0:(p[n]=!0,!1)}function y(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,r,l,d){if(r===null||typeof r>"u"||y(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,d,g,M,R){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=M,this.removeEmptyString=R}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(v,b);_[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(v,b);_[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(v,b);_[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,r,l,d){var g=_.hasOwnProperty(r)?_[r]:null;(g!==null?g.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,l,g,d)&&(l=null),d||g===null?x(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):g.mustUseProperty?n[g.propertyName]=l===null?g.type===3?!1:"":l:(r=g.attributeName,d=g.attributeNamespace,l===null?n.removeAttribute(r):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),C=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),O=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),V=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,F;function $(n){if(F===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);F=r&&r[1]||""}return`
`+F+n}var Te=!1;function J(n,r){if(!n||Te)return"";Te=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ce){var d=ce}Reflect.construct(n,[],r)}else{try{r.call()}catch(ce){d=ce}n.call(r.prototype)}else{try{throw Error()}catch(ce){d=ce}n()}}catch(ce){if(ce&&d&&typeof ce.stack=="string"){for(var g=ce.stack.split(`
`),M=d.stack.split(`
`),R=g.length-1,B=M.length-1;1<=R&&0<=B&&g[R]!==M[B];)B--;for(;1<=R&&0<=B;R--,B--)if(g[R]!==M[B]){if(R!==1||B!==1)do if(R--,B--,0>B||g[R]!==M[B]){var G=`
`+g[R].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=R&&0<=B);break}}}finally{Te=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?$(n):""}function ae(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case C:return"Portal";case I:return"Profiler";case k:return"StrictMode";case H:return"Suspense";case ne:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case Q:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case oe:return r=n.displayName||null,r!==null?r:ge(n.type)||"Memo";case le:r=n._payload,n=n._init;try{return ge(n(r))}catch{}}return null}function he(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(r);case 8:return r===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ce(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ve(n){var r=Ce(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,M=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return g.call(this)},set:function(R){d=""+R,M.call(this,R)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(R){d=""+R},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ct(n){n._valueTracker||(n._valueTracker=Ve(n))}function gt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=Ce(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function bt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function q(n,r){var l=r.checked;return j({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Wt(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=ye(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ft(n,r){r=r.checked,r!=null&&N(n,"checked",r,!1)}function ut(n,r){ft(n,r);var l=ye(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?At(n,r.type,l):r.hasOwnProperty("defaultValue")&&At(n,r.type,ye(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Qe(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function At(n,r,l){(r!=="number"||bt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Xe=Array.isArray;function z(n,r,l,d){if(n=n.options,r){r={};for(var g=0;g<l.length;g++)r["$"+l[g]]=!0;for(l=0;l<n.length;l++)g=r.hasOwnProperty("$"+n[l].value),n[l].selected!==g&&(n[l].selected=g),g&&d&&(n[l].defaultSelected=!0)}else{for(l=""+ye(l),r=null,g=0;g<n.length;g++){if(n[g].value===l){n[g].selected=!0,d&&(n[g].defaultSelected=!0);return}r!==null||n[g].disabled||(r=n[g])}r!==null&&(r.selected=!0)}}function L(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function W(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Xe(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:ye(l)}}function pe(n,r){var l=ye(r.value),d=ye(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function xe(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function me(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ue(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?me(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,g){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,g)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function nt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){De.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ee[r]=Ee[n]})});function Je(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+r).trim():r+"px"}function et(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,g=Je(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,g):n[l]=g}}var ze=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(n,r){if(r){if(ze[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ot(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,fe=null,ve=null;function Oe(n){if(n=qo(n)){if(typeof Le!="function")throw Error(t(280));var r=n.stateNode;r&&(r=qa(r),Le(n.stateNode,n.type,r))}}function ke(n){fe?ve?ve.push(n):ve=[n]:fe=n}function pt(){if(fe){var n=fe,r=ve;if(ve=fe=null,Oe(n),r)for(n=0;n<r.length;n++)Oe(r[n])}}function Vt(n,r){return n(r)}function en(){}var Ct=!1;function kn(n,r,l){if(Ct)return n(r,l);Ct=!0;try{return Vt(n,r,l)}finally{Ct=!1,(fe!==null||ve!==null)&&(en(),pt())}}function bn(n,r){var l=n.stateNode;if(l===null)return null;var d=qa(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Es=!1;if(u)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){Es=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Es=!1}function zi(n,r,l,d,g,M,R,B,G){var ce=Array.prototype.slice.call(arguments,3);try{r.apply(l,ce)}catch(Me){this.onError(Me)}}var Bi=!1,jr=null,Wr=!1,hr=null,Ra={onError:function(n){Bi=!0,jr=n}};function ws(n,r,l,d,g,M,R,B,G){Bi=!1,jr=null,zi.apply(Ra,arguments)}function Pa(n,r,l,d,g,M,R,B,G){if(ws.apply(this,arguments),Bi){if(Bi){var ce=jr;Bi=!1,jr=null}else throw Error(t(198));Wr||(Wr=!0,hr=ce)}}function Ni(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Na(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function La(n){if(Ni(n)!==n)throw Error(t(188))}function Vc(n){var r=n.alternate;if(!r){if(r=Ni(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var g=l.return;if(g===null)break;var M=g.alternate;if(M===null){if(d=g.return,d!==null){l=d;continue}break}if(g.child===M.child){for(M=g.child;M;){if(M===l)return La(g),n;if(M===d)return La(g),r;M=M.sibling}throw Error(t(188))}if(l.return!==d.return)l=g,d=M;else{for(var R=!1,B=g.child;B;){if(B===l){R=!0,l=g,d=M;break}if(B===d){R=!0,d=g,l=M;break}B=B.sibling}if(!R){for(B=M.child;B;){if(B===l){R=!0,l=M,d=g;break}if(B===d){R=!0,d=M,l=g;break}B=B.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function U(n){return n=Vc(n),n!==null?K(n):null}function K(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=K(n);if(r!==null)return r;n=n.sibling}return null}var ue=e.unstable_scheduleCallback,de=e.unstable_cancelCallback,Z=e.unstable_shouldYield,Pe=e.unstable_requestPaint,Ae=e.unstable_now,$e=e.unstable_getCurrentPriorityLevel,je=e.unstable_ImmediatePriority,at=e.unstable_UserBlockingPriority,dt=e.unstable_NormalPriority,qe=e.unstable_LowPriority,Tt=e.unstable_IdlePriority,It=null,wt=null;function gn(n){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(It,n,void 0,(n.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Nt,Ze=Math.log,xi=Math.LN2;function Nt(n){return n>>>=0,n===0?32:31-(Ze(n)/xi|0)|0}var xn=64,vi=4194304;function tn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Li(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,g=n.suspendedLanes,M=n.pingedLanes,R=l&268435455;if(R!==0){var B=R&~g;B!==0?d=tn(B):(M&=R,M!==0&&(d=tn(M)))}else R=l&~g,R!==0?d=tn(R):M!==0&&(d=tn(M));if(d===0)return 0;if(r!==0&&r!==d&&(r&g)===0&&(g=d&-d,M=r&-r,g>=M||g===16&&(M&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-vt(r),g=1<<l,d|=n[l],r&=~g;return d}function Ot(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ii(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,g=n.expirationTimes,M=n.pendingLanes;0<M;){var R=31-vt(M),B=1<<R,G=g[R];G===-1?((B&l)===0||(B&d)!==0)&&(g[R]=Ot(B,r)):G<=r&&(n.expiredLanes|=B),M&=~B}}function Vi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=xn;return xn<<=1,(xn&4194240)===0&&(xn=64),n}function ri(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Fn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-vt(r),n[r]=l}function Da(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var g=31-vt(l),M=1<<g;r[g]=0,d[g]=-1,n[g]=-1,l&=~M}}function Hc(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-vt(l),g=1<<d;g&r|n[d]&r&&(n[d]|=r),l&=~g}}var Ut=0;function wh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Th,Gc,bh,Ah,Ch,jc=!1,Ia=[],pr=null,mr=null,gr=null,Do=new Map,Io=new Map,xr=[],Gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rh(n,r){switch(n){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Do.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(r.pointerId)}}function Uo(n,r,l,d,g,M){return n===null||n.nativeEvent!==M?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:M,targetContainers:[g]},r!==null&&(r=qo(r),r!==null&&Gc(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,g!==null&&r.indexOf(g)===-1&&r.push(g),n)}function jx(n,r,l,d,g){switch(r){case"focusin":return pr=Uo(pr,n,r,l,d,g),!0;case"dragenter":return mr=Uo(mr,n,r,l,d,g),!0;case"mouseover":return gr=Uo(gr,n,r,l,d,g),!0;case"pointerover":var M=g.pointerId;return Do.set(M,Uo(Do.get(M)||null,n,r,l,d,g)),!0;case"gotpointercapture":return M=g.pointerId,Io.set(M,Uo(Io.get(M)||null,n,r,l,d,g)),!0}return!1}function Ph(n){var r=Xr(n.target);if(r!==null){var l=Ni(r);if(l!==null){if(r=l.tag,r===13){if(r=Na(l),r!==null){n.blockedOn=r,Ch(n.priority,function(){bh(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ua(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Xc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);ht=d,l.target.dispatchEvent(d),ht=null}else return r=qo(l),r!==null&&Gc(r),n.blockedOn=l,!1;r.shift()}return!0}function Nh(n,r,l){Ua(n)&&l.delete(r)}function Wx(){jc=!1,pr!==null&&Ua(pr)&&(pr=null),mr!==null&&Ua(mr)&&(mr=null),gr!==null&&Ua(gr)&&(gr=null),Do.forEach(Nh),Io.forEach(Nh)}function ko(n,r){n.blockedOn===r&&(n.blockedOn=null,jc||(jc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wx)))}function Fo(n){function r(g){return ko(g,n)}if(0<Ia.length){ko(Ia[0],n);for(var l=1;l<Ia.length;l++){var d=Ia[l];d.blockedOn===n&&(d.blockedOn=null)}}for(pr!==null&&ko(pr,n),mr!==null&&ko(mr,n),gr!==null&&ko(gr,n),Do.forEach(r),Io.forEach(r),l=0;l<xr.length;l++)d=xr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<xr.length&&(l=xr[0],l.blockedOn===null);)Ph(l),l.blockedOn===null&&xr.shift()}var Ts=T.ReactCurrentBatchConfig,ka=!0;function Xx(n,r,l,d){var g=Ut,M=Ts.transition;Ts.transition=null;try{Ut=1,Wc(n,r,l,d)}finally{Ut=g,Ts.transition=M}}function Yx(n,r,l,d){var g=Ut,M=Ts.transition;Ts.transition=null;try{Ut=4,Wc(n,r,l,d)}finally{Ut=g,Ts.transition=M}}function Wc(n,r,l,d){if(ka){var g=Xc(n,r,l,d);if(g===null)cu(n,r,d,Fa,l),Rh(n,d);else if(jx(g,n,r,l,d))d.stopPropagation();else if(Rh(n,d),r&4&&-1<Gx.indexOf(n)){for(;g!==null;){var M=qo(g);if(M!==null&&Th(M),M=Xc(n,r,l,d),M===null&&cu(n,r,d,Fa,l),M===g)break;g=M}g!==null&&d.stopPropagation()}else cu(n,r,d,null,l)}}var Fa=null;function Xc(n,r,l,d){if(Fa=null,n=X(d),n=Xr(n),n!==null)if(r=Ni(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Na(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Fa=n,null}function Lh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($e()){case je:return 1;case at:return 4;case dt:case qe:return 16;case Tt:return 536870912;default:return 16}default:return 16}}var vr=null,Yc=null,Oa=null;function Dh(){if(Oa)return Oa;var n,r=Yc,l=r.length,d,g="value"in vr?vr.value:vr.textContent,M=g.length;for(n=0;n<l&&r[n]===g[n];n++);var R=l-n;for(d=1;d<=R&&r[l-d]===g[M-d];d++);return Oa=g.slice(n,1<d?1-d:void 0)}function za(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ba(){return!0}function Ih(){return!1}function qn(n){function r(l,d,g,M,R){this._reactName=l,this._targetInst=g,this.type=d,this.nativeEvent=M,this.target=R,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(l=n[B],this[B]=l?l(M):M[B]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Ba:Ih,this.isPropagationStopped=Ih,this}return j(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),r}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$c=qn(bs),Oo=j({},bs,{view:0,detail:0}),$x=qn(Oo),qc,Kc,zo,Va=j({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zo&&(zo&&n.type==="mousemove"?(qc=n.screenX-zo.screenX,Kc=n.screenY-zo.screenY):Kc=qc=0,zo=n),qc)},movementY:function(n){return"movementY"in n?n.movementY:Kc}}),Uh=qn(Va),qx=j({},Va,{dataTransfer:0}),Kx=qn(qx),Zx=j({},Oo,{relatedTarget:0}),Zc=qn(Zx),Qx=j({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),Jx=qn(Qx),ev=j({},bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tv=qn(ev),nv=j({},bs,{data:0}),kh=qn(nv),iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ov(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=sv[n])?!!r[n]:!1}function Qc(){return ov}var av=j({},Oo,{key:function(n){if(n.key){var r=iv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=za(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?rv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(n){return n.type==="keypress"?za(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?za(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lv=qn(av),cv=j({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=qn(cv),uv=j({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),dv=qn(uv),fv=j({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=qn(fv),pv=j({},Va,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=qn(pv),gv=[9,13,27,32],Jc=u&&"CompositionEvent"in window,Bo=null;u&&"documentMode"in document&&(Bo=document.documentMode);var xv=u&&"TextEvent"in window&&!Bo,Oh=u&&(!Jc||Bo&&8<Bo&&11>=Bo),zh=" ",Bh=!1;function Vh(n,r){switch(n){case"keyup":return gv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function vv(n,r){switch(n){case"compositionend":return Hh(r);case"keypress":return r.which!==32?null:(Bh=!0,zh);case"textInput":return n=r.data,n===zh&&Bh?null:n;default:return null}}function _v(n,r){if(As)return n==="compositionend"||!Jc&&Vh(n,r)?(n=Dh(),Oa=Yc=vr=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Oh&&r.locale!=="ko"?null:r.data;default:return null}}var yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!yv[n.type]:r==="textarea"}function jh(n,r,l,d){ke(d),r=Xa(r,"onChange"),0<r.length&&(l=new $c("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var Vo=null,Ho=null;function Sv(n){lp(n,0)}function Ha(n){var r=Ls(n);if(gt(r))return n}function Mv(n,r){if(n==="change")return r}var Wh=!1;if(u){var eu;if(u){var tu="oninput"in document;if(!tu){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),tu=typeof Xh.oninput=="function"}eu=tu}else eu=!1;Wh=eu&&(!document.documentMode||9<document.documentMode)}function Yh(){Vo&&(Vo.detachEvent("onpropertychange",$h),Ho=Vo=null)}function $h(n){if(n.propertyName==="value"&&Ha(Ho)){var r=[];jh(r,Ho,n,X(n)),kn(Sv,r)}}function Ev(n,r,l){n==="focusin"?(Yh(),Vo=r,Ho=l,Vo.attachEvent("onpropertychange",$h)):n==="focusout"&&Yh()}function wv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ha(Ho)}function Tv(n,r){if(n==="click")return Ha(r)}function bv(n,r){if(n==="input"||n==="change")return Ha(r)}function Av(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var _i=typeof Object.is=="function"?Object.is:Av;function Go(n,r){if(_i(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var g=l[d];if(!f.call(r,g)||!_i(n[g],r[g]))return!1}return!0}function qh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kh(n,r){var l=qh(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qh(l)}}function Zh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Zh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Qh(){for(var n=window,r=bt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=bt(n.document)}return r}function nu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Cv(n){var r=Qh(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Zh(l.ownerDocument.documentElement,l)){if(d!==null&&nu(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var g=l.textContent.length,M=Math.min(d.start,g);d=d.end===void 0?M:Math.min(d.end,g),!n.extend&&M>d&&(g=d,d=M,M=g),g=Kh(l,M);var R=Kh(l,d);g&&R&&(n.rangeCount!==1||n.anchorNode!==g.node||n.anchorOffset!==g.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(r=r.createRange(),r.setStart(g.node,g.offset),n.removeAllRanges(),M>d?(n.addRange(r),n.extend(R.node,R.offset)):(r.setEnd(R.node,R.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Rv=u&&"documentMode"in document&&11>=document.documentMode,Cs=null,iu=null,jo=null,ru=!1;function Jh(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ru||Cs==null||Cs!==bt(d)||(d=Cs,"selectionStart"in d&&nu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),jo&&Go(jo,d)||(jo=d,d=Xa(iu,"onSelect"),0<d.length&&(r=new $c("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=Cs)))}function Ga(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Rs={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},su={},ep={};u&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function ja(n){if(su[n])return su[n];if(!Rs[n])return n;var r=Rs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in ep)return su[n]=r[l];return n}var tp=ja("animationend"),np=ja("animationiteration"),ip=ja("animationstart"),rp=ja("transitionend"),sp=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(n,r){sp.set(n,r),a(r,[n])}for(var ou=0;ou<op.length;ou++){var au=op[ou],Pv=au.toLowerCase(),Nv=au[0].toUpperCase()+au.slice(1);_r(Pv,"on"+Nv)}_r(tp,"onAnimationEnd"),_r(np,"onAnimationIteration"),_r(ip,"onAnimationStart"),_r("dblclick","onDoubleClick"),_r("focusin","onFocus"),_r("focusout","onBlur"),_r(rp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function ap(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,Pa(d,r,void 0,n),n.currentTarget=null}function lp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],g=d.event;d=d.listeners;e:{var M=void 0;if(r)for(var R=d.length-1;0<=R;R--){var B=d[R],G=B.instance,ce=B.currentTarget;if(B=B.listener,G!==M&&g.isPropagationStopped())break e;ap(g,B,ce),M=G}else for(R=0;R<d.length;R++){if(B=d[R],G=B.instance,ce=B.currentTarget,B=B.listener,G!==M&&g.isPropagationStopped())break e;ap(g,B,ce),M=G}}}if(Wr)throw n=hr,Wr=!1,hr=null,n}function Ht(n,r){var l=r[mu];l===void 0&&(l=r[mu]=new Set);var d=n+"__bubble";l.has(d)||(cp(r,n,2,!1),l.add(d))}function lu(n,r,l){var d=0;r&&(d|=4),cp(l,n,d,r)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function Xo(n){if(!n[Wa]){n[Wa]=!0,i.forEach(function(l){l!=="selectionchange"&&(Lv.has(l)||lu(l,!1,n),lu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Wa]||(r[Wa]=!0,lu("selectionchange",!1,r))}}function cp(n,r,l,d){switch(Lh(r)){case 1:var g=Xx;break;case 4:g=Yx;break;default:g=Wc}l=g.bind(null,r,l,n),g=void 0,!Es||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(g=!0),d?g!==void 0?n.addEventListener(r,l,{capture:!0,passive:g}):n.addEventListener(r,l,!0):g!==void 0?n.addEventListener(r,l,{passive:g}):n.addEventListener(r,l,!1)}function cu(n,r,l,d,g){var M=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var R=d.tag;if(R===3||R===4){var B=d.stateNode.containerInfo;if(B===g||B.nodeType===8&&B.parentNode===g)break;if(R===4)for(R=d.return;R!==null;){var G=R.tag;if((G===3||G===4)&&(G=R.stateNode.containerInfo,G===g||G.nodeType===8&&G.parentNode===g))return;R=R.return}for(;B!==null;){if(R=Xr(B),R===null)return;if(G=R.tag,G===5||G===6){d=M=R;continue e}B=B.parentNode}}d=d.return}kn(function(){var ce=M,Me=X(l),we=[];e:{var Se=sp.get(n);if(Se!==void 0){var Be=$c,Ge=n;switch(n){case"keypress":if(za(l)===0)break e;case"keydown":case"keyup":Be=lv;break;case"focusin":Ge="focus",Be=Zc;break;case"focusout":Ge="blur",Be=Zc;break;case"beforeblur":case"afterblur":Be=Zc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=Kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=dv;break;case tp:case np:case ip:Be=Jx;break;case rp:Be=hv;break;case"scroll":Be=$x;break;case"wheel":Be=mv;break;case"copy":case"cut":case"paste":Be=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Fh}var We=(r&4)!==0,Kt=!We&&n==="scroll",ie=We?Se!==null?Se+"Capture":null:Se;We=[];for(var Y=ce,se;Y!==null;){se=Y;var Re=se.stateNode;if(se.tag===5&&Re!==null&&(se=Re,ie!==null&&(Re=bn(Y,ie),Re!=null&&We.push(Yo(Y,Re,se)))),Kt)break;Y=Y.return}0<We.length&&(Se=new Be(Se,Ge,null,l,Me),we.push({event:Se,listeners:We}))}}if((r&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",Se&&l!==ht&&(Ge=l.relatedTarget||l.fromElement)&&(Xr(Ge)||Ge[Hi]))break e;if((Be||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,Be?(Ge=l.relatedTarget||l.toElement,Be=ce,Ge=Ge?Xr(Ge):null,Ge!==null&&(Kt=Ni(Ge),Ge!==Kt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Be=null,Ge=ce),Be!==Ge)){if(We=Uh,Re="onMouseLeave",ie="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(We=Fh,Re="onPointerLeave",ie="onPointerEnter",Y="pointer"),Kt=Be==null?Se:Ls(Be),se=Ge==null?Se:Ls(Ge),Se=new We(Re,Y+"leave",Be,l,Me),Se.target=Kt,Se.relatedTarget=se,Re=null,Xr(Me)===ce&&(We=new We(ie,Y+"enter",Ge,l,Me),We.target=se,We.relatedTarget=Kt,Re=We),Kt=Re,Be&&Ge)t:{for(We=Be,ie=Ge,Y=0,se=We;se;se=Ps(se))Y++;for(se=0,Re=ie;Re;Re=Ps(Re))se++;for(;0<Y-se;)We=Ps(We),Y--;for(;0<se-Y;)ie=Ps(ie),se--;for(;Y--;){if(We===ie||ie!==null&&We===ie.alternate)break t;We=Ps(We),ie=Ps(ie)}We=null}else We=null;Be!==null&&up(we,Se,Be,We,!1),Ge!==null&&Kt!==null&&up(we,Kt,Ge,We,!0)}}e:{if(Se=ce?Ls(ce):window,Be=Se.nodeName&&Se.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Se.type==="file")var Ke=Mv;else if(Gh(Se))if(Wh)Ke=bv;else{Ke=wv;var it=Ev}else(Be=Se.nodeName)&&Be.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Ke=Tv);if(Ke&&(Ke=Ke(n,ce))){jh(we,Ke,l,Me);break e}it&&it(n,Se,ce),n==="focusout"&&(it=Se._wrapperState)&&it.controlled&&Se.type==="number"&&At(Se,"number",Se.value)}switch(it=ce?Ls(ce):window,n){case"focusin":(Gh(it)||it.contentEditable==="true")&&(Cs=it,iu=ce,jo=null);break;case"focusout":jo=iu=Cs=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,Jh(we,l,Me);break;case"selectionchange":if(Rv)break;case"keydown":case"keyup":Jh(we,l,Me)}var rt;if(Jc)e:{switch(n){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else As?Vh(n,l)&&(lt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(lt="onCompositionStart");lt&&(Oh&&l.locale!=="ko"&&(As||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&As&&(rt=Dh()):(vr=Me,Yc="value"in vr?vr.value:vr.textContent,As=!0)),it=Xa(ce,lt),0<it.length&&(lt=new kh(lt,n,null,l,Me),we.push({event:lt,listeners:it}),rt?lt.data=rt:(rt=Hh(l),rt!==null&&(lt.data=rt)))),(rt=xv?vv(n,l):_v(n,l))&&(ce=Xa(ce,"onBeforeInput"),0<ce.length&&(Me=new kh("onBeforeInput","beforeinput",null,l,Me),we.push({event:Me,listeners:ce}),Me.data=rt))}lp(we,r)})}function Yo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Xa(n,r){for(var l=r+"Capture",d=[];n!==null;){var g=n,M=g.stateNode;g.tag===5&&M!==null&&(g=M,M=bn(n,l),M!=null&&d.unshift(Yo(n,M,g)),M=bn(n,r),M!=null&&d.push(Yo(n,M,g))),n=n.return}return d}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function up(n,r,l,d,g){for(var M=r._reactName,R=[];l!==null&&l!==d;){var B=l,G=B.alternate,ce=B.stateNode;if(G!==null&&G===d)break;B.tag===5&&ce!==null&&(B=ce,g?(G=bn(l,M),G!=null&&R.unshift(Yo(l,G,B))):g||(G=bn(l,M),G!=null&&R.push(Yo(l,G,B)))),l=l.return}R.length!==0&&n.push({event:r,listeners:R})}var Dv=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function dp(n){return(typeof n=="string"?n:""+n).replace(Dv,`
`).replace(Iv,"")}function Ya(n,r,l){if(r=dp(r),dp(n)!==r&&l)throw Error(t(425))}function $a(){}var uu=null,du=null;function fu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,Uv=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,kv=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(n){return fp.resolve(null).then(n).catch(Fv)}:hu;function Fv(n){setTimeout(function(){throw n})}function pu(n,r){var l=r,d=0;do{var g=l.nextSibling;if(n.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(d===0){n.removeChild(g),Fo(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=g}while(l);Fo(r)}function yr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function hp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Di="__reactFiber$"+Ns,$o="__reactProps$"+Ns,Hi="__reactContainer$"+Ns,mu="__reactEvents$"+Ns,Ov="__reactListeners$"+Ns,zv="__reactHandles$"+Ns;function Xr(n){var r=n[Di];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Hi]||l[Di]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=hp(n);n!==null;){if(l=n[Di])return l;n=hp(n)}return r}n=l,l=n.parentNode}return null}function qo(n){return n=n[Di]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function qa(n){return n[$o]||null}var gu=[],Ds=-1;function Sr(n){return{current:n}}function Gt(n){0>Ds||(n.current=gu[Ds],gu[Ds]=null,Ds--)}function zt(n,r){Ds++,gu[Ds]=n.current,n.current=r}var Mr={},vn=Sr(Mr),On=Sr(!1),Yr=Mr;function Is(n,r){var l=n.type.contextTypes;if(!l)return Mr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var g={},M;for(M in l)g[M]=r[M];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=g),g}function zn(n){return n=n.childContextTypes,n!=null}function Ka(){Gt(On),Gt(vn)}function pp(n,r,l){if(vn.current!==Mr)throw Error(t(168));zt(vn,r),zt(On,l)}function mp(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var g in d)if(!(g in r))throw Error(t(108,he(n)||"Unknown",g));return j({},l,d)}function Za(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mr,Yr=vn.current,zt(vn,n),zt(On,On.current),!0}function gp(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=mp(n,r,Yr),d.__reactInternalMemoizedMergedChildContext=n,Gt(On),Gt(vn),zt(vn,n)):Gt(On),zt(On,l)}var Gi=null,Qa=!1,xu=!1;function xp(n){Gi===null?Gi=[n]:Gi.push(n)}function Bv(n){Qa=!0,xp(n)}function Er(){if(!xu&&Gi!==null){xu=!0;var n=0,r=Ut;try{var l=Gi;for(Ut=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}Gi=null,Qa=!1}catch(g){throw Gi!==null&&(Gi=Gi.slice(n+1)),ue(je,Er),g}finally{Ut=r,xu=!1}}return null}var Us=[],ks=0,Ja=null,el=0,si=[],oi=0,$r=null,ji=1,Wi="";function qr(n,r){Us[ks++]=el,Us[ks++]=Ja,Ja=n,el=r}function vp(n,r,l){si[oi++]=ji,si[oi++]=Wi,si[oi++]=$r,$r=n;var d=ji;n=Wi;var g=32-vt(d)-1;d&=~(1<<g),l+=1;var M=32-vt(r)+g;if(30<M){var R=g-g%5;M=(d&(1<<R)-1).toString(32),d>>=R,g-=R,ji=1<<32-vt(r)+g|l<<g|d,Wi=M+n}else ji=1<<M|l<<g|d,Wi=n}function vu(n){n.return!==null&&(qr(n,1),vp(n,1,0))}function _u(n){for(;n===Ja;)Ja=Us[--ks],Us[ks]=null,el=Us[--ks],Us[ks]=null;for(;n===$r;)$r=si[--oi],si[oi]=null,Wi=si[--oi],si[oi]=null,ji=si[--oi],si[oi]=null}var Kn=null,Zn=null,jt=!1,yi=null;function _p(n,r){var l=ui(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function yp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Kn=n,Zn=yr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Kn=n,Zn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=$r!==null?{id:ji,overflow:Wi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ui(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Kn=n,Zn=null,!0):!1;default:return!1}}function yu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Su(n){if(jt){var r=Zn;if(r){var l=r;if(!yp(n,r)){if(yu(n))throw Error(t(418));r=yr(l.nextSibling);var d=Kn;r&&yp(n,r)?_p(d,l):(n.flags=n.flags&-4097|2,jt=!1,Kn=n)}}else{if(yu(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,Kn=n}}}function Sp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function tl(n){if(n!==Kn)return!1;if(!jt)return Sp(n),jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!fu(n.type,n.memoizedProps)),r&&(r=Zn)){if(yu(n))throw Mp(),Error(t(418));for(;r;)_p(n,r),r=yr(r.nextSibling)}if(Sp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Zn=yr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Zn=null}}else Zn=Kn?yr(n.stateNode.nextSibling):null;return!0}function Mp(){for(var n=Zn;n;)n=yr(n.nextSibling)}function Fs(){Zn=Kn=null,jt=!1}function Mu(n){yi===null?yi=[n]:yi.push(n)}var Vv=T.ReactCurrentBatchConfig;function Ko(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var g=d,M=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===M?r.ref:(r=function(R){var B=g.refs;R===null?delete B[M]:B[M]=R},r._stringRef=M,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function nl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Ep(n){var r=n._init;return r(n._payload)}function wp(n){function r(ie,Y){if(n){var se=ie.deletions;se===null?(ie.deletions=[Y],ie.flags|=16):se.push(Y)}}function l(ie,Y){if(!n)return null;for(;Y!==null;)r(ie,Y),Y=Y.sibling;return null}function d(ie,Y){for(ie=new Map;Y!==null;)Y.key!==null?ie.set(Y.key,Y):ie.set(Y.index,Y),Y=Y.sibling;return ie}function g(ie,Y){return ie=Nr(ie,Y),ie.index=0,ie.sibling=null,ie}function M(ie,Y,se){return ie.index=se,n?(se=ie.alternate,se!==null?(se=se.index,se<Y?(ie.flags|=2,Y):se):(ie.flags|=2,Y)):(ie.flags|=1048576,Y)}function R(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function B(ie,Y,se,Re){return Y===null||Y.tag!==6?(Y=hd(se,ie.mode,Re),Y.return=ie,Y):(Y=g(Y,se),Y.return=ie,Y)}function G(ie,Y,se,Re){var Ke=se.type;return Ke===P?Me(ie,Y,se.props.children,Re,se.key):Y!==null&&(Y.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===le&&Ep(Ke)===Y.type)?(Re=g(Y,se.props),Re.ref=Ko(ie,Y,se),Re.return=ie,Re):(Re=bl(se.type,se.key,se.props,null,ie.mode,Re),Re.ref=Ko(ie,Y,se),Re.return=ie,Re)}function ce(ie,Y,se,Re){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==se.containerInfo||Y.stateNode.implementation!==se.implementation?(Y=pd(se,ie.mode,Re),Y.return=ie,Y):(Y=g(Y,se.children||[]),Y.return=ie,Y)}function Me(ie,Y,se,Re,Ke){return Y===null||Y.tag!==7?(Y=is(se,ie.mode,Re,Ke),Y.return=ie,Y):(Y=g(Y,se),Y.return=ie,Y)}function we(ie,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=hd(""+Y,ie.mode,se),Y.return=ie,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case D:return se=bl(Y.type,Y.key,Y.props,null,ie.mode,se),se.ref=Ko(ie,null,Y),se.return=ie,se;case C:return Y=pd(Y,ie.mode,se),Y.return=ie,Y;case le:var Re=Y._init;return we(ie,Re(Y._payload),se)}if(Xe(Y)||re(Y))return Y=is(Y,ie.mode,se,null),Y.return=ie,Y;nl(ie,Y)}return null}function Se(ie,Y,se,Re){var Ke=Y!==null?Y.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Ke!==null?null:B(ie,Y,""+se,Re);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case D:return se.key===Ke?G(ie,Y,se,Re):null;case C:return se.key===Ke?ce(ie,Y,se,Re):null;case le:return Ke=se._init,Se(ie,Y,Ke(se._payload),Re)}if(Xe(se)||re(se))return Ke!==null?null:Me(ie,Y,se,Re,null);nl(ie,se)}return null}function Be(ie,Y,se,Re,Ke){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ie=ie.get(se)||null,B(Y,ie,""+Re,Ke);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case D:return ie=ie.get(Re.key===null?se:Re.key)||null,G(Y,ie,Re,Ke);case C:return ie=ie.get(Re.key===null?se:Re.key)||null,ce(Y,ie,Re,Ke);case le:var it=Re._init;return Be(ie,Y,se,it(Re._payload),Ke)}if(Xe(Re)||re(Re))return ie=ie.get(se)||null,Me(Y,ie,Re,Ke,null);nl(Y,Re)}return null}function Ge(ie,Y,se,Re){for(var Ke=null,it=null,rt=Y,lt=Y=0,un=null;rt!==null&&lt<se.length;lt++){rt.index>lt?(un=rt,rt=null):un=rt.sibling;var Lt=Se(ie,rt,se[lt],Re);if(Lt===null){rt===null&&(rt=un);break}n&&rt&&Lt.alternate===null&&r(ie,rt),Y=M(Lt,Y,lt),it===null?Ke=Lt:it.sibling=Lt,it=Lt,rt=un}if(lt===se.length)return l(ie,rt),jt&&qr(ie,lt),Ke;if(rt===null){for(;lt<se.length;lt++)rt=we(ie,se[lt],Re),rt!==null&&(Y=M(rt,Y,lt),it===null?Ke=rt:it.sibling=rt,it=rt);return jt&&qr(ie,lt),Ke}for(rt=d(ie,rt);lt<se.length;lt++)un=Be(rt,ie,lt,se[lt],Re),un!==null&&(n&&un.alternate!==null&&rt.delete(un.key===null?lt:un.key),Y=M(un,Y,lt),it===null?Ke=un:it.sibling=un,it=un);return n&&rt.forEach(function(Lr){return r(ie,Lr)}),jt&&qr(ie,lt),Ke}function We(ie,Y,se,Re){var Ke=re(se);if(typeof Ke!="function")throw Error(t(150));if(se=Ke.call(se),se==null)throw Error(t(151));for(var it=Ke=null,rt=Y,lt=Y=0,un=null,Lt=se.next();rt!==null&&!Lt.done;lt++,Lt=se.next()){rt.index>lt?(un=rt,rt=null):un=rt.sibling;var Lr=Se(ie,rt,Lt.value,Re);if(Lr===null){rt===null&&(rt=un);break}n&&rt&&Lr.alternate===null&&r(ie,rt),Y=M(Lr,Y,lt),it===null?Ke=Lr:it.sibling=Lr,it=Lr,rt=un}if(Lt.done)return l(ie,rt),jt&&qr(ie,lt),Ke;if(rt===null){for(;!Lt.done;lt++,Lt=se.next())Lt=we(ie,Lt.value,Re),Lt!==null&&(Y=M(Lt,Y,lt),it===null?Ke=Lt:it.sibling=Lt,it=Lt);return jt&&qr(ie,lt),Ke}for(rt=d(ie,rt);!Lt.done;lt++,Lt=se.next())Lt=Be(rt,ie,lt,Lt.value,Re),Lt!==null&&(n&&Lt.alternate!==null&&rt.delete(Lt.key===null?lt:Lt.key),Y=M(Lt,Y,lt),it===null?Ke=Lt:it.sibling=Lt,it=Lt);return n&&rt.forEach(function(y_){return r(ie,y_)}),jt&&qr(ie,lt),Ke}function Kt(ie,Y,se,Re){if(typeof se=="object"&&se!==null&&se.type===P&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case D:e:{for(var Ke=se.key,it=Y;it!==null;){if(it.key===Ke){if(Ke=se.type,Ke===P){if(it.tag===7){l(ie,it.sibling),Y=g(it,se.props.children),Y.return=ie,ie=Y;break e}}else if(it.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===le&&Ep(Ke)===it.type){l(ie,it.sibling),Y=g(it,se.props),Y.ref=Ko(ie,it,se),Y.return=ie,ie=Y;break e}l(ie,it);break}else r(ie,it);it=it.sibling}se.type===P?(Y=is(se.props.children,ie.mode,Re,se.key),Y.return=ie,ie=Y):(Re=bl(se.type,se.key,se.props,null,ie.mode,Re),Re.ref=Ko(ie,Y,se),Re.return=ie,ie=Re)}return R(ie);case C:e:{for(it=se.key;Y!==null;){if(Y.key===it)if(Y.tag===4&&Y.stateNode.containerInfo===se.containerInfo&&Y.stateNode.implementation===se.implementation){l(ie,Y.sibling),Y=g(Y,se.children||[]),Y.return=ie,ie=Y;break e}else{l(ie,Y);break}else r(ie,Y);Y=Y.sibling}Y=pd(se,ie.mode,Re),Y.return=ie,ie=Y}return R(ie);case le:return it=se._init,Kt(ie,Y,it(se._payload),Re)}if(Xe(se))return Ge(ie,Y,se,Re);if(re(se))return We(ie,Y,se,Re);nl(ie,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,Y!==null&&Y.tag===6?(l(ie,Y.sibling),Y=g(Y,se),Y.return=ie,ie=Y):(l(ie,Y),Y=hd(se,ie.mode,Re),Y.return=ie,ie=Y),R(ie)):l(ie,Y)}return Kt}var Os=wp(!0),Tp=wp(!1),il=Sr(null),rl=null,zs=null,Eu=null;function wu(){Eu=zs=rl=null}function Tu(n){var r=il.current;Gt(il),n._currentValue=r}function bu(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function Bs(n,r){rl=n,Eu=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Bn=!0),n.firstContext=null)}function ai(n){var r=n._currentValue;if(Eu!==n)if(n={context:n,memoizedValue:r,next:null},zs===null){if(rl===null)throw Error(t(308));zs=n,rl.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return r}var Kr=null;function Au(n){Kr===null?Kr=[n]:Kr.push(n)}function bp(n,r,l,d){var g=r.interleaved;return g===null?(l.next=l,Au(r)):(l.next=g.next,g.next=l),r.interleaved=l,Xi(n,d)}function Xi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var wr=!1;function Cu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ap(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Tr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Rt&2)!==0){var g=d.pending;return g===null?r.next=r:(r.next=g.next,g.next=r),d.pending=r,Xi(n,l)}return g=d.interleaved,g===null?(r.next=r,Au(d)):(r.next=g.next,g.next=r),d.interleaved=r,Xi(n,l)}function sl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Hc(n,l)}}function Cp(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var g=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?g=M=R:M=M.next=R,l=l.next}while(l!==null);M===null?g=M=r:M=M.next=r}else g=M=r;l={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:M,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function ol(n,r,l,d){var g=n.updateQueue;wr=!1;var M=g.firstBaseUpdate,R=g.lastBaseUpdate,B=g.shared.pending;if(B!==null){g.shared.pending=null;var G=B,ce=G.next;G.next=null,R===null?M=ce:R.next=ce,R=G;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,B=Me.lastBaseUpdate,B!==R&&(B===null?Me.firstBaseUpdate=ce:B.next=ce,Me.lastBaseUpdate=G))}if(M!==null){var we=g.baseState;R=0,Me=ce=G=null,B=M;do{var Se=B.lane,Be=B.eventTime;if((d&Se)===Se){Me!==null&&(Me=Me.next={eventTime:Be,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ge=n,We=B;switch(Se=r,Be=l,We.tag){case 1:if(Ge=We.payload,typeof Ge=="function"){we=Ge.call(Be,we,Se);break e}we=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=We.payload,Se=typeof Ge=="function"?Ge.call(Be,we,Se):Ge,Se==null)break e;we=j({},we,Se);break e;case 2:wr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Se=g.effects,Se===null?g.effects=[B]:Se.push(B))}else Be={eventTime:Be,lane:Se,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Me===null?(ce=Me=Be,G=we):Me=Me.next=Be,R|=Se;if(B=B.next,B===null){if(B=g.shared.pending,B===null)break;Se=B,B=Se.next,Se.next=null,g.lastBaseUpdate=Se,g.shared.pending=null}}while(!0);if(Me===null&&(G=we),g.baseState=G,g.firstBaseUpdate=ce,g.lastBaseUpdate=Me,r=g.shared.interleaved,r!==null){g=r;do R|=g.lane,g=g.next;while(g!==r)}else M===null&&(g.shared.lanes=0);Jr|=R,n.lanes=R,n.memoizedState=we}}function Rp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],g=d.callback;if(g!==null){if(d.callback=null,d=l,typeof g!="function")throw Error(t(191,g));g.call(d)}}}var Zo={},Ii=Sr(Zo),Qo=Sr(Zo),Jo=Sr(Zo);function Zr(n){if(n===Zo)throw Error(t(174));return n}function Ru(n,r){switch(zt(Jo,r),zt(Qo,n),zt(Ii,Zo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ue(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ue(r,n)}Gt(Ii),zt(Ii,r)}function Vs(){Gt(Ii),Gt(Qo),Gt(Jo)}function Pp(n){Zr(Jo.current);var r=Zr(Ii.current),l=Ue(r,n.type);r!==l&&(zt(Qo,n),zt(Ii,l))}function Pu(n){Qo.current===n&&(Gt(Ii),Gt(Qo))}var Xt=Sr(0);function al(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Nu=[];function Lu(){for(var n=0;n<Nu.length;n++)Nu[n]._workInProgressVersionPrimary=null;Nu.length=0}var ll=T.ReactCurrentDispatcher,Du=T.ReactCurrentBatchConfig,Qr=0,Yt=null,nn=null,ln=null,cl=!1,ea=!1,ta=0,Hv=0;function _n(){throw Error(t(321))}function Iu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!_i(n[l],r[l]))return!1;return!0}function Uu(n,r,l,d,g,M){if(Qr=M,Yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ll.current=n===null||n.memoizedState===null?Xv:Yv,n=l(d,g),ea){M=0;do{if(ea=!1,ta=0,25<=M)throw Error(t(301));M+=1,ln=nn=null,r.updateQueue=null,ll.current=$v,n=l(d,g)}while(ea)}if(ll.current=fl,r=nn!==null&&nn.next!==null,Qr=0,ln=nn=Yt=null,cl=!1,r)throw Error(t(300));return n}function ku(){var n=ta!==0;return ta=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Yt.memoizedState=ln=n:ln=ln.next=n,ln}function li(){if(nn===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var r=ln===null?Yt.memoizedState:ln.next;if(r!==null)ln=r,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},ln===null?Yt.memoizedState=ln=n:ln=ln.next=n}return ln}function na(n,r){return typeof r=="function"?r(n):r}function Fu(n){var r=li(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=nn,g=d.baseQueue,M=l.pending;if(M!==null){if(g!==null){var R=g.next;g.next=M.next,M.next=R}d.baseQueue=g=M,l.pending=null}if(g!==null){M=g.next,d=d.baseState;var B=R=null,G=null,ce=M;do{var Me=ce.lane;if((Qr&Me)===Me)G!==null&&(G=G.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),d=ce.hasEagerState?ce.eagerState:n(d,ce.action);else{var we={lane:Me,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};G===null?(B=G=we,R=d):G=G.next=we,Yt.lanes|=Me,Jr|=Me}ce=ce.next}while(ce!==null&&ce!==M);G===null?R=d:G.next=B,_i(d,r.memoizedState)||(Bn=!0),r.memoizedState=d,r.baseState=R,r.baseQueue=G,l.lastRenderedState=d}if(n=l.interleaved,n!==null){g=n;do M=g.lane,Yt.lanes|=M,Jr|=M,g=g.next;while(g!==n)}else g===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Ou(n){var r=li(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,g=l.pending,M=r.memoizedState;if(g!==null){l.pending=null;var R=g=g.next;do M=n(M,R.action),R=R.next;while(R!==g);_i(M,r.memoizedState)||(Bn=!0),r.memoizedState=M,r.baseQueue===null&&(r.baseState=M),l.lastRenderedState=M}return[M,d]}function Np(){}function Lp(n,r){var l=Yt,d=li(),g=r(),M=!_i(d.memoizedState,g);if(M&&(d.memoizedState=g,Bn=!0),d=d.queue,zu(Up.bind(null,l,d,n),[n]),d.getSnapshot!==r||M||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,ia(9,Ip.bind(null,l,d,g,r),void 0,null),cn===null)throw Error(t(349));(Qr&30)!==0||Dp(l,r,g)}return g}function Dp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Ip(n,r,l,d){r.value=l,r.getSnapshot=d,kp(r)&&Fp(n)}function Up(n,r,l){return l(function(){kp(r)&&Fp(n)})}function kp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!_i(n,l)}catch{return!0}}function Fp(n){var r=Xi(n,1);r!==null&&wi(r,n,1,-1)}function Op(n){var r=Ui();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},r.queue=n,n=n.dispatch=Wv.bind(null,Yt,n),[r.memoizedState,n]}function ia(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function zp(){return li().memoizedState}function ul(n,r,l,d){var g=Ui();Yt.flags|=n,g.memoizedState=ia(1|r,l,void 0,d===void 0?null:d)}function dl(n,r,l,d){var g=li();d=d===void 0?null:d;var M=void 0;if(nn!==null){var R=nn.memoizedState;if(M=R.destroy,d!==null&&Iu(d,R.deps)){g.memoizedState=ia(r,l,M,d);return}}Yt.flags|=n,g.memoizedState=ia(1|r,l,M,d)}function Bp(n,r){return ul(8390656,8,n,r)}function zu(n,r){return dl(2048,8,n,r)}function Vp(n,r){return dl(4,2,n,r)}function Hp(n,r){return dl(4,4,n,r)}function Gp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function jp(n,r,l){return l=l!=null?l.concat([n]):null,dl(4,4,Gp.bind(null,r,n),l)}function Bu(){}function Wp(n,r){var l=li();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Iu(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function Xp(n,r){var l=li();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Iu(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function Yp(n,r,l){return(Qr&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=l):(_i(l,r)||(l=An(),Yt.lanes|=l,Jr|=l,n.baseState=!0),r)}function Gv(n,r){var l=Ut;Ut=l!==0&&4>l?l:4,n(!0);var d=Du.transition;Du.transition={};try{n(!1),r()}finally{Ut=l,Du.transition=d}}function $p(){return li().memoizedState}function jv(n,r,l){var d=Rr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},qp(n))Kp(r,l);else if(l=bp(n,r,l,d),l!==null){var g=Rn();wi(l,n,d,g),Zp(l,r,d)}}function Wv(n,r,l){var d=Rr(n),g={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(qp(n))Kp(r,g);else{var M=n.alternate;if(n.lanes===0&&(M===null||M.lanes===0)&&(M=r.lastRenderedReducer,M!==null))try{var R=r.lastRenderedState,B=M(R,l);if(g.hasEagerState=!0,g.eagerState=B,_i(B,R)){var G=r.interleaved;G===null?(g.next=g,Au(r)):(g.next=G.next,G.next=g),r.interleaved=g;return}}catch{}finally{}l=bp(n,r,g,d),l!==null&&(g=Rn(),wi(l,n,d,g),Zp(l,r,d))}}function qp(n){var r=n.alternate;return n===Yt||r!==null&&r===Yt}function Kp(n,r){ea=cl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Zp(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Hc(n,l)}}var fl={readContext:ai,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},Xv={readContext:ai,useCallback:function(n,r){return Ui().memoizedState=[n,r===void 0?null:r],n},useContext:ai,useEffect:Bp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,ul(4194308,4,Gp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return ul(4194308,4,n,r)},useInsertionEffect:function(n,r){return ul(4,2,n,r)},useMemo:function(n,r){var l=Ui();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Ui();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=jv.bind(null,Yt,n),[d.memoizedState,n]},useRef:function(n){var r=Ui();return n={current:n},r.memoizedState=n},useState:Op,useDebugValue:Bu,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=Op(!1),r=n[0];return n=Gv.bind(null,n[1]),Ui().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=Yt,g=Ui();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),cn===null)throw Error(t(349));(Qr&30)!==0||Dp(d,r,l)}g.memoizedState=l;var M={value:l,getSnapshot:r};return g.queue=M,Bp(Up.bind(null,d,M,n),[n]),d.flags|=2048,ia(9,Ip.bind(null,d,M,l,r),void 0,null),l},useId:function(){var n=Ui(),r=cn.identifierPrefix;if(jt){var l=Wi,d=ji;l=(d&~(1<<32-vt(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=ta++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Hv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Yv={readContext:ai,useCallback:Wp,useContext:ai,useEffect:zu,useImperativeHandle:jp,useInsertionEffect:Vp,useLayoutEffect:Hp,useMemo:Xp,useReducer:Fu,useRef:zp,useState:function(){return Fu(na)},useDebugValue:Bu,useDeferredValue:function(n){var r=li();return Yp(r,nn.memoizedState,n)},useTransition:function(){var n=Fu(na)[0],r=li().memoizedState;return[n,r]},useMutableSource:Np,useSyncExternalStore:Lp,useId:$p,unstable_isNewReconciler:!1},$v={readContext:ai,useCallback:Wp,useContext:ai,useEffect:zu,useImperativeHandle:jp,useInsertionEffect:Vp,useLayoutEffect:Hp,useMemo:Xp,useReducer:Ou,useRef:zp,useState:function(){return Ou(na)},useDebugValue:Bu,useDeferredValue:function(n){var r=li();return nn===null?r.memoizedState=n:Yp(r,nn.memoizedState,n)},useTransition:function(){var n=Ou(na)[0],r=li().memoizedState;return[n,r]},useMutableSource:Np,useSyncExternalStore:Lp,useId:$p,unstable_isNewReconciler:!1};function Si(n,r){if(n&&n.defaultProps){r=j({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Vu(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:j({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var hl={isMounted:function(n){return(n=n._reactInternals)?Ni(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=Rn(),g=Rr(n),M=Yi(d,g);M.payload=r,l!=null&&(M.callback=l),r=Tr(n,M,g),r!==null&&(wi(r,n,g,d),sl(r,n,g))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=Rn(),g=Rr(n),M=Yi(d,g);M.tag=1,M.payload=r,l!=null&&(M.callback=l),r=Tr(n,M,g),r!==null&&(wi(r,n,g,d),sl(r,n,g))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Rn(),d=Rr(n),g=Yi(l,d);g.tag=2,r!=null&&(g.callback=r),r=Tr(n,g,d),r!==null&&(wi(r,n,d,l),sl(r,n,d))}};function Qp(n,r,l,d,g,M,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,M,R):r.prototype&&r.prototype.isPureReactComponent?!Go(l,d)||!Go(g,M):!0}function Jp(n,r,l){var d=!1,g=Mr,M=r.contextType;return typeof M=="object"&&M!==null?M=ai(M):(g=zn(r)?Yr:vn.current,d=r.contextTypes,M=(d=d!=null)?Is(n,g):Mr),r=new r(l,M),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=hl,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=g,n.__reactInternalMemoizedMaskedChildContext=M),r}function em(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&hl.enqueueReplaceState(r,r.state,null)}function Hu(n,r,l,d){var g=n.stateNode;g.props=l,g.state=n.memoizedState,g.refs={},Cu(n);var M=r.contextType;typeof M=="object"&&M!==null?g.context=ai(M):(M=zn(r)?Yr:vn.current,g.context=Is(n,M)),g.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Vu(n,r,M,l),g.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(r=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),r!==g.state&&hl.enqueueReplaceState(g,g.state,null),ol(n,l,g,d),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308)}function Hs(n,r){try{var l="",d=r;do l+=ae(d),d=d.return;while(d);var g=l}catch(M){g=`
Error generating stack: `+M.message+`
`+M.stack}return{value:n,source:r,stack:g,digest:null}}function Gu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function ju(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var qv=typeof WeakMap=="function"?WeakMap:Map;function tm(n,r,l){l=Yi(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){yl||(yl=!0,sd=d),ju(n,r)},l}function nm(n,r,l){l=Yi(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var g=r.value;l.payload=function(){return d(g)},l.callback=function(){ju(n,r)}}var M=n.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){ju(n,r),typeof d!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})}),l}function im(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new qv;var g=new Set;d.set(r,g)}else g=d.get(r),g===void 0&&(g=new Set,d.set(r,g));g.has(l)||(g.add(l),n=c_.bind(null,n,r,l),r.then(n,n))}function rm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function sm(n,r,l,d,g){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Yi(-1,1),r.tag=2,Tr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=g,n)}var Kv=T.ReactCurrentOwner,Bn=!1;function Cn(n,r,l,d){r.child=n===null?Tp(r,null,l,d):Os(r,n.child,l,d)}function om(n,r,l,d,g){l=l.render;var M=r.ref;return Bs(r,g),d=Uu(n,r,l,d,M,g),l=ku(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,$i(n,r,g)):(jt&&l&&vu(r),r.flags|=1,Cn(n,r,d,g),r.child)}function am(n,r,l,d,g){if(n===null){var M=l.type;return typeof M=="function"&&!fd(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=M,lm(n,r,M,d,g)):(n=bl(l.type,null,d,r,r.mode,g),n.ref=r.ref,n.return=r,r.child=n)}if(M=n.child,(n.lanes&g)===0){var R=M.memoizedProps;if(l=l.compare,l=l!==null?l:Go,l(R,d)&&n.ref===r.ref)return $i(n,r,g)}return r.flags|=1,n=Nr(M,d),n.ref=r.ref,n.return=r,r.child=n}function lm(n,r,l,d,g){if(n!==null){var M=n.memoizedProps;if(Go(M,d)&&n.ref===r.ref)if(Bn=!1,r.pendingProps=d=M,(n.lanes&g)!==0)(n.flags&131072)!==0&&(Bn=!0);else return r.lanes=n.lanes,$i(n,r,g)}return Wu(n,r,l,d,g)}function cm(n,r,l){var d=r.pendingProps,g=d.children,M=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(js,Qn),Qn|=l;else{if((l&1073741824)===0)return n=M!==null?M.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,zt(js,Qn),Qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=M!==null?M.baseLanes:l,zt(js,Qn),Qn|=d}else M!==null?(d=M.baseLanes|l,r.memoizedState=null):d=l,zt(js,Qn),Qn|=d;return Cn(n,r,g,l),r.child}function um(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Wu(n,r,l,d,g){var M=zn(l)?Yr:vn.current;return M=Is(r,M),Bs(r,g),l=Uu(n,r,l,d,M,g),d=ku(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,$i(n,r,g)):(jt&&d&&vu(r),r.flags|=1,Cn(n,r,l,g),r.child)}function dm(n,r,l,d,g){if(zn(l)){var M=!0;Za(r)}else M=!1;if(Bs(r,g),r.stateNode===null)ml(n,r),Jp(r,l,d),Hu(r,l,d,g),d=!0;else if(n===null){var R=r.stateNode,B=r.memoizedProps;R.props=B;var G=R.context,ce=l.contextType;typeof ce=="object"&&ce!==null?ce=ai(ce):(ce=zn(l)?Yr:vn.current,ce=Is(r,ce));var Me=l.getDerivedStateFromProps,we=typeof Me=="function"||typeof R.getSnapshotBeforeUpdate=="function";we||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(B!==d||G!==ce)&&em(r,R,d,ce),wr=!1;var Se=r.memoizedState;R.state=Se,ol(r,d,R,g),G=r.memoizedState,B!==d||Se!==G||On.current||wr?(typeof Me=="function"&&(Vu(r,l,Me,d),G=r.memoizedState),(B=wr||Qp(r,l,B,d,Se,G,ce))?(we||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(r.flags|=4194308)):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=G),R.props=d,R.state=G,R.context=ce,d=B):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{R=r.stateNode,Ap(n,r),B=r.memoizedProps,ce=r.type===r.elementType?B:Si(r.type,B),R.props=ce,we=r.pendingProps,Se=R.context,G=l.contextType,typeof G=="object"&&G!==null?G=ai(G):(G=zn(l)?Yr:vn.current,G=Is(r,G));var Be=l.getDerivedStateFromProps;(Me=typeof Be=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(B!==we||Se!==G)&&em(r,R,d,G),wr=!1,Se=r.memoizedState,R.state=Se,ol(r,d,R,g);var Ge=r.memoizedState;B!==we||Se!==Ge||On.current||wr?(typeof Be=="function"&&(Vu(r,l,Be,d),Ge=r.memoizedState),(ce=wr||Qp(r,l,ce,d,Se,Ge,G)||!1)?(Me||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(d,Ge,G),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(d,Ge,G)),typeof R.componentDidUpdate=="function"&&(r.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof R.componentDidUpdate!="function"||B===n.memoizedProps&&Se===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Se===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=Ge),R.props=d,R.state=Ge,R.context=G,d=ce):(typeof R.componentDidUpdate!="function"||B===n.memoizedProps&&Se===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Se===n.memoizedState||(r.flags|=1024),d=!1)}return Xu(n,r,l,d,M,g)}function Xu(n,r,l,d,g,M){um(n,r);var R=(r.flags&128)!==0;if(!d&&!R)return g&&gp(r,l,!1),$i(n,r,M);d=r.stateNode,Kv.current=r;var B=R&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&R?(r.child=Os(r,n.child,null,M),r.child=Os(r,null,B,M)):Cn(n,r,B,M),r.memoizedState=d.state,g&&gp(r,l,!0),r.child}function fm(n){var r=n.stateNode;r.pendingContext?pp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&pp(n,r.context,!1),Ru(n,r.containerInfo)}function hm(n,r,l,d,g){return Fs(),Mu(g),r.flags|=256,Cn(n,r,l,d),r.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function $u(n){return{baseLanes:n,cachePool:null,transitions:null}}function pm(n,r,l){var d=r.pendingProps,g=Xt.current,M=!1,R=(r.flags&128)!==0,B;if((B=R)||(B=n!==null&&n.memoizedState===null?!1:(g&2)!==0),B?(M=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(g|=1),zt(Xt,g&1),n===null)return Su(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(R=d.children,n=d.fallback,M?(d=r.mode,M=r.child,R={mode:"hidden",children:R},(d&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=R):M=Al(R,d,0,null),n=is(n,d,l,null),M.return=r,n.return=r,M.sibling=n,r.child=M,r.child.memoizedState=$u(l),r.memoizedState=Yu,n):qu(r,R));if(g=n.memoizedState,g!==null&&(B=g.dehydrated,B!==null))return Zv(n,r,R,d,B,g,l);if(M){M=d.fallback,R=r.mode,g=n.child,B=g.sibling;var G={mode:"hidden",children:d.children};return(R&1)===0&&r.child!==g?(d=r.child,d.childLanes=0,d.pendingProps=G,r.deletions=null):(d=Nr(g,G),d.subtreeFlags=g.subtreeFlags&14680064),B!==null?M=Nr(B,M):(M=is(M,R,l,null),M.flags|=2),M.return=r,d.return=r,d.sibling=M,r.child=d,d=M,M=r.child,R=n.child.memoizedState,R=R===null?$u(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},M.memoizedState=R,M.childLanes=n.childLanes&~l,r.memoizedState=Yu,d}return M=n.child,n=M.sibling,d=Nr(M,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function qu(n,r){return r=Al({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function pl(n,r,l,d){return d!==null&&Mu(d),Os(r,n.child,null,l),n=qu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Zv(n,r,l,d,g,M,R){if(l)return r.flags&256?(r.flags&=-257,d=Gu(Error(t(422))),pl(n,r,R,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(M=d.fallback,g=r.mode,d=Al({mode:"visible",children:d.children},g,0,null),M=is(M,g,R,null),M.flags|=2,d.return=r,M.return=r,d.sibling=M,r.child=d,(r.mode&1)!==0&&Os(r,n.child,null,R),r.child.memoizedState=$u(R),r.memoizedState=Yu,M);if((r.mode&1)===0)return pl(n,r,R,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var B=d.dgst;return d=B,M=Error(t(419)),d=Gu(M,d,void 0),pl(n,r,R,d)}if(B=(R&n.childLanes)!==0,Bn||B){if(d=cn,d!==null){switch(R&-R){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(d.suspendedLanes|R))!==0?0:g,g!==0&&g!==M.retryLane&&(M.retryLane=g,Xi(n,g),wi(d,n,g,-1))}return dd(),d=Gu(Error(t(421))),pl(n,r,R,d)}return g.data==="$?"?(r.flags|=128,r.child=n.child,r=u_.bind(null,n),g._reactRetry=r,null):(n=M.treeContext,Zn=yr(g.nextSibling),Kn=r,jt=!0,yi=null,n!==null&&(si[oi++]=ji,si[oi++]=Wi,si[oi++]=$r,ji=n.id,Wi=n.overflow,$r=r),r=qu(r,d.children),r.flags|=4096,r)}function mm(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),bu(n.return,r,l)}function Ku(n,r,l,d,g){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:g}:(M.isBackwards=r,M.rendering=null,M.renderingStartTime=0,M.last=d,M.tail=l,M.tailMode=g)}function gm(n,r,l){var d=r.pendingProps,g=d.revealOrder,M=d.tail;if(Cn(n,r,d.children,l),d=Xt.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mm(n,l,r);else if(n.tag===19)mm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(zt(Xt,d),(r.mode&1)===0)r.memoizedState=null;else switch(g){case"forwards":for(l=r.child,g=null;l!==null;)n=l.alternate,n!==null&&al(n)===null&&(g=l),l=l.sibling;l=g,l===null?(g=r.child,r.child=null):(g=l.sibling,l.sibling=null),Ku(r,!1,g,l,M);break;case"backwards":for(l=null,g=r.child,r.child=null;g!==null;){if(n=g.alternate,n!==null&&al(n)===null){r.child=g;break}n=g.sibling,g.sibling=l,l=g,g=n}Ku(r,!0,l,null,M);break;case"together":Ku(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ml(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function $i(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Jr|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Nr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Nr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Qv(n,r,l){switch(r.tag){case 3:fm(r),Fs();break;case 5:Pp(r);break;case 1:zn(r.type)&&Za(r);break;case 4:Ru(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,g=r.memoizedProps.value;zt(il,d._currentValue),d._currentValue=g;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(zt(Xt,Xt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?pm(n,r,l):(zt(Xt,Xt.current&1),n=$i(n,r,l),n!==null?n.sibling:null);zt(Xt,Xt.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return gm(n,r,l);r.flags|=128}if(g=r.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),zt(Xt,Xt.current),d)break;return null;case 22:case 23:return r.lanes=0,cm(n,r,l)}return $i(n,r,l)}var xm,Zu,vm,_m;xm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Zu=function(){},vm=function(n,r,l,d){var g=n.memoizedProps;if(g!==d){n=r.stateNode,Zr(Ii.current);var M=null;switch(l){case"input":g=q(n,g),d=q(n,d),M=[];break;case"select":g=j({},g,{value:void 0}),d=j({},d,{value:void 0}),M=[];break;case"textarea":g=L(n,g),d=L(n,d),M=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=$a)}_t(l,d);var R;l=null;for(ce in g)if(!d.hasOwnProperty(ce)&&g.hasOwnProperty(ce)&&g[ce]!=null)if(ce==="style"){var B=g[ce];for(R in B)B.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?M||(M=[]):(M=M||[]).push(ce,null));for(ce in d){var G=d[ce];if(B=g!=null?g[ce]:void 0,d.hasOwnProperty(ce)&&G!==B&&(G!=null||B!=null))if(ce==="style")if(B){for(R in B)!B.hasOwnProperty(R)||G&&G.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in G)G.hasOwnProperty(R)&&B[R]!==G[R]&&(l||(l={}),l[R]=G[R])}else l||(M||(M=[]),M.push(ce,l)),l=G;else ce==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,B=B?B.__html:void 0,G!=null&&B!==G&&(M=M||[]).push(ce,G)):ce==="children"?typeof G!="string"&&typeof G!="number"||(M=M||[]).push(ce,""+G):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(G!=null&&ce==="onScroll"&&Ht("scroll",n),M||B===G||(M=[])):(M=M||[]).push(ce,G))}l&&(M=M||[]).push("style",l);var ce=M;(r.updateQueue=ce)&&(r.flags|=4)}},_m=function(n,r,l,d){l!==d&&(r.flags|=4)};function ra(n,r){if(!jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function yn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var g=n.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=n,g=g.sibling;else for(g=n.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=n,g=g.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function Jv(n,r,l){var d=r.pendingProps;switch(_u(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(r),null;case 1:return zn(r.type)&&Ka(),yn(r),null;case 3:return d=r.stateNode,Vs(),Gt(On),Gt(vn),Lu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(tl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,yi!==null&&(ld(yi),yi=null))),Zu(n,r),yn(r),null;case 5:Pu(r);var g=Zr(Jo.current);if(l=r.type,n!==null&&r.stateNode!=null)vm(n,r,l,d,g),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return yn(r),null}if(n=Zr(Ii.current),tl(r)){d=r.stateNode,l=r.type;var M=r.memoizedProps;switch(d[Di]=r,d[$o]=M,n=(r.mode&1)!==0,l){case"dialog":Ht("cancel",d),Ht("close",d);break;case"iframe":case"object":case"embed":Ht("load",d);break;case"video":case"audio":for(g=0;g<Wo.length;g++)Ht(Wo[g],d);break;case"source":Ht("error",d);break;case"img":case"image":case"link":Ht("error",d),Ht("load",d);break;case"details":Ht("toggle",d);break;case"input":Wt(d,M),Ht("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!M.multiple},Ht("invalid",d);break;case"textarea":W(d,M),Ht("invalid",d)}_t(l,M),g=null;for(var R in M)if(M.hasOwnProperty(R)){var B=M[R];R==="children"?typeof B=="string"?d.textContent!==B&&(M.suppressHydrationWarning!==!0&&Ya(d.textContent,B,n),g=["children",B]):typeof B=="number"&&d.textContent!==""+B&&(M.suppressHydrationWarning!==!0&&Ya(d.textContent,B,n),g=["children",""+B]):o.hasOwnProperty(R)&&B!=null&&R==="onScroll"&&Ht("scroll",d)}switch(l){case"input":ct(d),Qe(d,M,!0);break;case"textarea":ct(d),xe(d);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(d.onclick=$a)}d=g,r.updateQueue=d,d!==null&&(r.flags|=4)}else{R=g.nodeType===9?g:g.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=me(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=R.createElement(l,{is:d.is}):(n=R.createElement(l),l==="select"&&(R=n,d.multiple?R.multiple=!0:d.size&&(R.size=d.size))):n=R.createElementNS(n,l),n[Di]=r,n[$o]=d,xm(n,r,!1,!1),r.stateNode=n;e:{switch(R=ot(l,d),l){case"dialog":Ht("cancel",n),Ht("close",n),g=d;break;case"iframe":case"object":case"embed":Ht("load",n),g=d;break;case"video":case"audio":for(g=0;g<Wo.length;g++)Ht(Wo[g],n);g=d;break;case"source":Ht("error",n),g=d;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),g=d;break;case"details":Ht("toggle",n),g=d;break;case"input":Wt(n,d),g=q(n,d),Ht("invalid",n);break;case"option":g=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},g=j({},d,{value:void 0}),Ht("invalid",n);break;case"textarea":W(n,d),g=L(n,d),Ht("invalid",n);break;default:g=d}_t(l,g),B=g;for(M in B)if(B.hasOwnProperty(M)){var G=B[M];M==="style"?et(n,G):M==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Ne(n,G)):M==="children"?typeof G=="string"?(l!=="textarea"||G!=="")&&nt(n,G):typeof G=="number"&&nt(n,""+G):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(o.hasOwnProperty(M)?G!=null&&M==="onScroll"&&Ht("scroll",n):G!=null&&N(n,M,G,R))}switch(l){case"input":ct(n),Qe(n,d,!1);break;case"textarea":ct(n),xe(n);break;case"option":d.value!=null&&n.setAttribute("value",""+ye(d.value));break;case"select":n.multiple=!!d.multiple,M=d.value,M!=null?z(n,!!d.multiple,M,!1):d.defaultValue!=null&&z(n,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(n.onclick=$a)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return yn(r),null;case 6:if(n&&r.stateNode!=null)_m(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=Zr(Jo.current),Zr(Ii.current),tl(r)){if(d=r.stateNode,l=r.memoizedProps,d[Di]=r,(M=d.nodeValue!==l)&&(n=Kn,n!==null))switch(n.tag){case 3:Ya(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ya(d.nodeValue,l,(n.mode&1)!==0)}M&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Di]=r,r.stateNode=d}return yn(r),null;case 13:if(Gt(Xt),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&Zn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Mp(),Fs(),r.flags|=98560,M=!1;else if(M=tl(r),d!==null&&d.dehydrated!==null){if(n===null){if(!M)throw Error(t(318));if(M=r.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[Di]=r}else Fs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;yn(r),M=!1}else yi!==null&&(ld(yi),yi=null),M=!0;if(!M)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xt.current&1)!==0?rn===0&&(rn=3):dd())),r.updateQueue!==null&&(r.flags|=4),yn(r),null);case 4:return Vs(),Zu(n,r),n===null&&Xo(r.stateNode.containerInfo),yn(r),null;case 10:return Tu(r.type._context),yn(r),null;case 17:return zn(r.type)&&Ka(),yn(r),null;case 19:if(Gt(Xt),M=r.memoizedState,M===null)return yn(r),null;if(d=(r.flags&128)!==0,R=M.rendering,R===null)if(d)ra(M,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(R=al(n),R!==null){for(r.flags|=128,ra(M,!1),d=R.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)M=l,n=d,M.flags&=14680066,R=M.alternate,R===null?(M.childLanes=0,M.lanes=n,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=R.childLanes,M.lanes=R.lanes,M.child=R.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=R.memoizedProps,M.memoizedState=R.memoizedState,M.updateQueue=R.updateQueue,M.type=R.type,n=R.dependencies,M.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return zt(Xt,Xt.current&1|2),r.child}n=n.sibling}M.tail!==null&&Ae()>Ws&&(r.flags|=128,d=!0,ra(M,!1),r.lanes=4194304)}else{if(!d)if(n=al(R),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ra(M,!0),M.tail===null&&M.tailMode==="hidden"&&!R.alternate&&!jt)return yn(r),null}else 2*Ae()-M.renderingStartTime>Ws&&l!==1073741824&&(r.flags|=128,d=!0,ra(M,!1),r.lanes=4194304);M.isBackwards?(R.sibling=r.child,r.child=R):(l=M.last,l!==null?l.sibling=R:r.child=R,M.last=R)}return M.tail!==null?(r=M.tail,M.rendering=r,M.tail=r.sibling,M.renderingStartTime=Ae(),r.sibling=null,l=Xt.current,zt(Xt,d?l&1|2:l&1),r):(yn(r),null);case 22:case 23:return ud(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(Qn&1073741824)!==0&&(yn(r),r.subtreeFlags&6&&(r.flags|=8192)):yn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function e_(n,r){switch(_u(r),r.tag){case 1:return zn(r.type)&&Ka(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Vs(),Gt(On),Gt(vn),Lu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Pu(r),null;case 13:if(Gt(Xt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Fs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Gt(Xt),null;case 4:return Vs(),null;case 10:return Tu(r.type._context),null;case 22:case 23:return ud(),null;case 24:return null;default:return null}}var gl=!1,Sn=!1,t_=typeof WeakSet=="function"?WeakSet:Set,He=null;function Gs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){$t(n,r,d)}else l.current=null}function Qu(n,r,l){try{l()}catch(d){$t(n,r,d)}}var ym=!1;function n_(n,r){if(uu=ka,n=Qh(),nu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var g=d.anchorOffset,M=d.focusNode;d=d.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var R=0,B=-1,G=-1,ce=0,Me=0,we=n,Se=null;t:for(;;){for(var Be;we!==l||g!==0&&we.nodeType!==3||(B=R+g),we!==M||d!==0&&we.nodeType!==3||(G=R+d),we.nodeType===3&&(R+=we.nodeValue.length),(Be=we.firstChild)!==null;)Se=we,we=Be;for(;;){if(we===n)break t;if(Se===l&&++ce===g&&(B=R),Se===M&&++Me===d&&(G=R),(Be=we.nextSibling)!==null)break;we=Se,Se=we.parentNode}we=Be}l=B===-1||G===-1?null:{start:B,end:G}}else l=null}l=l||{start:0,end:0}}else l=null;for(du={focusedElem:n,selectionRange:l},ka=!1,He=r;He!==null;)if(r=He,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,He=n;else for(;He!==null;){r=He;try{var Ge=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var We=Ge.memoizedProps,Kt=Ge.memoizedState,ie=r.stateNode,Y=ie.getSnapshotBeforeUpdate(r.elementType===r.type?We:Si(r.type,We),Kt);ie.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var se=r.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){$t(r,r.return,Re)}if(n=r.sibling,n!==null){n.return=r.return,He=n;break}He=r.return}return Ge=ym,ym=!1,Ge}function sa(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&n)===n){var M=g.destroy;g.destroy=void 0,M!==void 0&&Qu(r,l,M)}g=g.next}while(g!==d)}}function xl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function Ju(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Sm(n){var r=n.alternate;r!==null&&(n.alternate=null,Sm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Di],delete r[$o],delete r[mu],delete r[Ov],delete r[zv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mm(n){return n.tag===5||n.tag===3||n.tag===4}function Em(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ed(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=$a));else if(d!==4&&(n=n.child,n!==null))for(ed(n,r,l),n=n.sibling;n!==null;)ed(n,r,l),n=n.sibling}function td(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(td(n,r,l),n=n.sibling;n!==null;)td(n,r,l),n=n.sibling}var hn=null,Mi=!1;function br(n,r,l){for(l=l.child;l!==null;)wm(n,r,l),l=l.sibling}function wm(n,r,l){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(It,l)}catch{}switch(l.tag){case 5:Sn||Gs(l,r);case 6:var d=hn,g=Mi;hn=null,br(n,r,l),hn=d,Mi=g,hn!==null&&(Mi?(n=hn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):hn.removeChild(l.stateNode));break;case 18:hn!==null&&(Mi?(n=hn,l=l.stateNode,n.nodeType===8?pu(n.parentNode,l):n.nodeType===1&&pu(n,l),Fo(n)):pu(hn,l.stateNode));break;case 4:d=hn,g=Mi,hn=l.stateNode.containerInfo,Mi=!0,br(n,r,l),hn=d,Mi=g;break;case 0:case 11:case 14:case 15:if(!Sn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var M=g,R=M.destroy;M=M.tag,R!==void 0&&((M&2)!==0||(M&4)!==0)&&Qu(l,r,R),g=g.next}while(g!==d)}br(n,r,l);break;case 1:if(!Sn&&(Gs(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(B){$t(l,r,B)}br(n,r,l);break;case 21:br(n,r,l);break;case 22:l.mode&1?(Sn=(d=Sn)||l.memoizedState!==null,br(n,r,l),Sn=d):br(n,r,l);break;default:br(n,r,l)}}function Tm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new t_),r.forEach(function(d){var g=d_.bind(null,n,d);l.has(d)||(l.add(d),d.then(g,g))})}}function Ei(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var g=l[d];try{var M=n,R=r,B=R;e:for(;B!==null;){switch(B.tag){case 5:hn=B.stateNode,Mi=!1;break e;case 3:hn=B.stateNode.containerInfo,Mi=!0;break e;case 4:hn=B.stateNode.containerInfo,Mi=!0;break e}B=B.return}if(hn===null)throw Error(t(160));wm(M,R,g),hn=null,Mi=!1;var G=g.alternate;G!==null&&(G.return=null),g.return=null}catch(ce){$t(g,r,ce)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)bm(r,n),r=r.sibling}function bm(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ei(r,n),ki(n),d&4){try{sa(3,n,n.return),xl(3,n)}catch(We){$t(n,n.return,We)}try{sa(5,n,n.return)}catch(We){$t(n,n.return,We)}}break;case 1:Ei(r,n),ki(n),d&512&&l!==null&&Gs(l,l.return);break;case 5:if(Ei(r,n),ki(n),d&512&&l!==null&&Gs(l,l.return),n.flags&32){var g=n.stateNode;try{nt(g,"")}catch(We){$t(n,n.return,We)}}if(d&4&&(g=n.stateNode,g!=null)){var M=n.memoizedProps,R=l!==null?l.memoizedProps:M,B=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{B==="input"&&M.type==="radio"&&M.name!=null&&ft(g,M),ot(B,R);var ce=ot(B,M);for(R=0;R<G.length;R+=2){var Me=G[R],we=G[R+1];Me==="style"?et(g,we):Me==="dangerouslySetInnerHTML"?Ne(g,we):Me==="children"?nt(g,we):N(g,Me,we,ce)}switch(B){case"input":ut(g,M);break;case"textarea":pe(g,M);break;case"select":var Se=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!M.multiple;var Be=M.value;Be!=null?z(g,!!M.multiple,Be,!1):Se!==!!M.multiple&&(M.defaultValue!=null?z(g,!!M.multiple,M.defaultValue,!0):z(g,!!M.multiple,M.multiple?[]:"",!1))}g[$o]=M}catch(We){$t(n,n.return,We)}}break;case 6:if(Ei(r,n),ki(n),d&4){if(n.stateNode===null)throw Error(t(162));g=n.stateNode,M=n.memoizedProps;try{g.nodeValue=M}catch(We){$t(n,n.return,We)}}break;case 3:if(Ei(r,n),ki(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Fo(r.containerInfo)}catch(We){$t(n,n.return,We)}break;case 4:Ei(r,n),ki(n);break;case 13:Ei(r,n),ki(n),g=n.child,g.flags&8192&&(M=g.memoizedState!==null,g.stateNode.isHidden=M,!M||g.alternate!==null&&g.alternate.memoizedState!==null||(rd=Ae())),d&4&&Tm(n);break;case 22:if(Me=l!==null&&l.memoizedState!==null,n.mode&1?(Sn=(ce=Sn)||Me,Ei(r,n),Sn=ce):Ei(r,n),ki(n),d&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!Me&&(n.mode&1)!==0)for(He=n,Me=n.child;Me!==null;){for(we=He=Me;He!==null;){switch(Se=He,Be=Se.child,Se.tag){case 0:case 11:case 14:case 15:sa(4,Se,Se.return);break;case 1:Gs(Se,Se.return);var Ge=Se.stateNode;if(typeof Ge.componentWillUnmount=="function"){d=Se,l=Se.return;try{r=d,Ge.props=r.memoizedProps,Ge.state=r.memoizedState,Ge.componentWillUnmount()}catch(We){$t(d,l,We)}}break;case 5:Gs(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Rm(we);continue}}Be!==null?(Be.return=Se,He=Be):Rm(we)}Me=Me.sibling}e:for(Me=null,we=n;;){if(we.tag===5){if(Me===null){Me=we;try{g=we.stateNode,ce?(M=g.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(B=we.stateNode,G=we.memoizedProps.style,R=G!=null&&G.hasOwnProperty("display")?G.display:null,B.style.display=Je("display",R))}catch(We){$t(n,n.return,We)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=ce?"":we.memoizedProps}catch(We){$t(n,n.return,We)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Ei(r,n),ki(n),d&4&&Tm(n);break;case 21:break;default:Ei(r,n),ki(n)}}function ki(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Mm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(nt(g,""),d.flags&=-33);var M=Em(n);td(n,M,g);break;case 3:case 4:var R=d.stateNode.containerInfo,B=Em(n);ed(n,B,R);break;default:throw Error(t(161))}}catch(G){$t(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function i_(n,r,l){He=n,Am(n)}function Am(n,r,l){for(var d=(n.mode&1)!==0;He!==null;){var g=He,M=g.child;if(g.tag===22&&d){var R=g.memoizedState!==null||gl;if(!R){var B=g.alternate,G=B!==null&&B.memoizedState!==null||Sn;B=gl;var ce=Sn;if(gl=R,(Sn=G)&&!ce)for(He=g;He!==null;)R=He,G=R.child,R.tag===22&&R.memoizedState!==null?Pm(g):G!==null?(G.return=R,He=G):Pm(g);for(;M!==null;)He=M,Am(M),M=M.sibling;He=g,gl=B,Sn=ce}Cm(n)}else(g.subtreeFlags&8772)!==0&&M!==null?(M.return=g,He=M):Cm(n)}}function Cm(n){for(;He!==null;){var r=He;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Sn||xl(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!Sn)if(l===null)d.componentDidMount();else{var g=r.elementType===r.type?l.memoizedProps:Si(r.type,l.memoizedProps);d.componentDidUpdate(g,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var M=r.updateQueue;M!==null&&Rp(r,M,d);break;case 3:var R=r.updateQueue;if(R!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Rp(r,R,l)}break;case 5:var B=r.stateNode;if(l===null&&r.flags&4){l=B;var G=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&l.focus();break;case"img":G.src&&(l.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ce=r.alternate;if(ce!==null){var Me=ce.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&Fo(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Sn||r.flags&512&&Ju(r)}catch(Se){$t(r,r.return,Se)}}if(r===n){He=null;break}if(l=r.sibling,l!==null){l.return=r.return,He=l;break}He=r.return}}function Rm(n){for(;He!==null;){var r=He;if(r===n){He=null;break}var l=r.sibling;if(l!==null){l.return=r.return,He=l;break}He=r.return}}function Pm(n){for(;He!==null;){var r=He;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{xl(4,r)}catch(G){$t(r,l,G)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var g=r.return;try{d.componentDidMount()}catch(G){$t(r,g,G)}}var M=r.return;try{Ju(r)}catch(G){$t(r,M,G)}break;case 5:var R=r.return;try{Ju(r)}catch(G){$t(r,R,G)}}}catch(G){$t(r,r.return,G)}if(r===n){He=null;break}var B=r.sibling;if(B!==null){B.return=r.return,He=B;break}He=r.return}}var r_=Math.ceil,vl=T.ReactCurrentDispatcher,nd=T.ReactCurrentOwner,ci=T.ReactCurrentBatchConfig,Rt=0,cn=null,Qt=null,pn=0,Qn=0,js=Sr(0),rn=0,oa=null,Jr=0,_l=0,id=0,aa=null,Vn=null,rd=0,Ws=1/0,qi=null,yl=!1,sd=null,Ar=null,Sl=!1,Cr=null,Ml=0,la=0,od=null,El=-1,wl=0;function Rn(){return(Rt&6)!==0?Ae():El!==-1?El:El=Ae()}function Rr(n){return(n.mode&1)===0?1:(Rt&2)!==0&&pn!==0?pn&-pn:Vv.transition!==null?(wl===0&&(wl=An()),wl):(n=Ut,n!==0||(n=window.event,n=n===void 0?16:Lh(n.type)),n)}function wi(n,r,l,d){if(50<la)throw la=0,od=null,Error(t(185));Fn(n,l,d),((Rt&2)===0||n!==cn)&&(n===cn&&((Rt&2)===0&&(_l|=l),rn===4&&Pr(n,pn)),Hn(n,d),l===1&&Rt===0&&(r.mode&1)===0&&(Ws=Ae()+500,Qa&&Er()))}function Hn(n,r){var l=n.callbackNode;ii(n,r);var d=Li(n,n===cn?pn:0);if(d===0)l!==null&&de(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&de(l),r===1)n.tag===0?Bv(Lm.bind(null,n)):xp(Lm.bind(null,n)),kv(function(){(Rt&6)===0&&Er()}),l=null;else{switch(wh(d)){case 1:l=je;break;case 4:l=at;break;case 16:l=dt;break;case 536870912:l=Tt;break;default:l=dt}l=Bm(l,Nm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Nm(n,r){if(El=-1,wl=0,(Rt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Xs()&&n.callbackNode!==l)return null;var d=Li(n,n===cn?pn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=Tl(n,d);else{r=d;var g=Rt;Rt|=2;var M=Im();(cn!==n||pn!==r)&&(qi=null,Ws=Ae()+500,ts(n,r));do try{a_();break}catch(B){Dm(n,B)}while(!0);wu(),vl.current=M,Rt=g,Qt!==null?r=0:(cn=null,pn=0,r=rn)}if(r!==0){if(r===2&&(g=Vi(n),g!==0&&(d=g,r=ad(n,g))),r===1)throw l=oa,ts(n,0),Pr(n,d),Hn(n,Ae()),l;if(r===6)Pr(n,d);else{if(g=n.current.alternate,(d&30)===0&&!s_(g)&&(r=Tl(n,d),r===2&&(M=Vi(n),M!==0&&(d=M,r=ad(n,M))),r===1))throw l=oa,ts(n,0),Pr(n,d),Hn(n,Ae()),l;switch(n.finishedWork=g,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:ns(n,Vn,qi);break;case 3:if(Pr(n,d),(d&130023424)===d&&(r=rd+500-Ae(),10<r)){if(Li(n,0)!==0)break;if(g=n.suspendedLanes,(g&d)!==d){Rn(),n.pingedLanes|=n.suspendedLanes&g;break}n.timeoutHandle=hu(ns.bind(null,n,Vn,qi),r);break}ns(n,Vn,qi);break;case 4:if(Pr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,g=-1;0<d;){var R=31-vt(d);M=1<<R,R=r[R],R>g&&(g=R),d&=~M}if(d=g,d=Ae()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*r_(d/1960))-d,10<d){n.timeoutHandle=hu(ns.bind(null,n,Vn,qi),d);break}ns(n,Vn,qi);break;case 5:ns(n,Vn,qi);break;default:throw Error(t(329))}}}return Hn(n,Ae()),n.callbackNode===l?Nm.bind(null,n):null}function ad(n,r){var l=aa;return n.current.memoizedState.isDehydrated&&(ts(n,r).flags|=256),n=Tl(n,r),n!==2&&(r=Vn,Vn=l,r!==null&&ld(r)),n}function ld(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function s_(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var g=l[d],M=g.getSnapshot;g=g.value;try{if(!_i(M(),g))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Pr(n,r){for(r&=~id,r&=~_l,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-vt(r),d=1<<l;n[l]=-1,r&=~d}}function Lm(n){if((Rt&6)!==0)throw Error(t(327));Xs();var r=Li(n,0);if((r&1)===0)return Hn(n,Ae()),null;var l=Tl(n,r);if(n.tag!==0&&l===2){var d=Vi(n);d!==0&&(r=d,l=ad(n,d))}if(l===1)throw l=oa,ts(n,0),Pr(n,r),Hn(n,Ae()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ns(n,Vn,qi),Hn(n,Ae()),null}function cd(n,r){var l=Rt;Rt|=1;try{return n(r)}finally{Rt=l,Rt===0&&(Ws=Ae()+500,Qa&&Er())}}function es(n){Cr!==null&&Cr.tag===0&&(Rt&6)===0&&Xs();var r=Rt;Rt|=1;var l=ci.transition,d=Ut;try{if(ci.transition=null,Ut=1,n)return n()}finally{Ut=d,ci.transition=l,Rt=r,(Rt&6)===0&&Er()}}function ud(){Qn=js.current,Gt(js)}function ts(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Uv(l)),Qt!==null)for(l=Qt.return;l!==null;){var d=l;switch(_u(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Ka();break;case 3:Vs(),Gt(On),Gt(vn),Lu();break;case 5:Pu(d);break;case 4:Vs();break;case 13:Gt(Xt);break;case 19:Gt(Xt);break;case 10:Tu(d.type._context);break;case 22:case 23:ud()}l=l.return}if(cn=n,Qt=n=Nr(n.current,null),pn=Qn=r,rn=0,oa=null,id=_l=Jr=0,Vn=aa=null,Kr!==null){for(r=0;r<Kr.length;r++)if(l=Kr[r],d=l.interleaved,d!==null){l.interleaved=null;var g=d.next,M=l.pending;if(M!==null){var R=M.next;M.next=g,d.next=R}l.pending=d}Kr=null}return n}function Dm(n,r){do{var l=Qt;try{if(wu(),ll.current=fl,cl){for(var d=Yt.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}cl=!1}if(Qr=0,ln=nn=Yt=null,ea=!1,ta=0,nd.current=null,l===null||l.return===null){rn=1,oa=r,Qt=null;break}e:{var M=n,R=l.return,B=l,G=r;if(r=pn,B.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ce=G,Me=B,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Be=rm(R);if(Be!==null){Be.flags&=-257,sm(Be,R,B,M,r),Be.mode&1&&im(M,ce,r),r=Be,G=ce;var Ge=r.updateQueue;if(Ge===null){var We=new Set;We.add(G),r.updateQueue=We}else Ge.add(G);break e}else{if((r&1)===0){im(M,ce,r),dd();break e}G=Error(t(426))}}else if(jt&&B.mode&1){var Kt=rm(R);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),sm(Kt,R,B,M,r),Mu(Hs(G,B));break e}}M=G=Hs(G,B),rn!==4&&(rn=2),aa===null?aa=[M]:aa.push(M),M=R;do{switch(M.tag){case 3:M.flags|=65536,r&=-r,M.lanes|=r;var ie=tm(M,G,r);Cp(M,ie);break e;case 1:B=G;var Y=M.type,se=M.stateNode;if((M.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Ar===null||!Ar.has(se)))){M.flags|=65536,r&=-r,M.lanes|=r;var Re=nm(M,B,r);Cp(M,Re);break e}}M=M.return}while(M!==null)}km(l)}catch(Ke){r=Ke,Qt===l&&l!==null&&(Qt=l=l.return);continue}break}while(!0)}function Im(){var n=vl.current;return vl.current=fl,n===null?fl:n}function dd(){(rn===0||rn===3||rn===2)&&(rn=4),cn===null||(Jr&268435455)===0&&(_l&268435455)===0||Pr(cn,pn)}function Tl(n,r){var l=Rt;Rt|=2;var d=Im();(cn!==n||pn!==r)&&(qi=null,ts(n,r));do try{o_();break}catch(g){Dm(n,g)}while(!0);if(wu(),Rt=l,vl.current=d,Qt!==null)throw Error(t(261));return cn=null,pn=0,rn}function o_(){for(;Qt!==null;)Um(Qt)}function a_(){for(;Qt!==null&&!Z();)Um(Qt)}function Um(n){var r=zm(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,r===null?km(n):Qt=r,nd.current=null}function km(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Jv(l,r,Qn),l!==null){Qt=l;return}}else{if(l=e_(l,r),l!==null){l.flags&=32767,Qt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Qt=null;return}}if(r=r.sibling,r!==null){Qt=r;return}Qt=r=n}while(r!==null);rn===0&&(rn=5)}function ns(n,r,l){var d=Ut,g=ci.transition;try{ci.transition=null,Ut=1,l_(n,r,l,d)}finally{ci.transition=g,Ut=d}return null}function l_(n,r,l,d){do Xs();while(Cr!==null);if((Rt&6)!==0)throw Error(t(327));l=n.finishedWork;var g=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var M=l.lanes|l.childLanes;if(Da(n,M),n===cn&&(Qt=cn=null,pn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Sl||(Sl=!0,Bm(dt,function(){return Xs(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=ci.transition,ci.transition=null;var R=Ut;Ut=1;var B=Rt;Rt|=4,nd.current=null,n_(n,l),bm(l,n),Cv(du),ka=!!uu,du=uu=null,n.current=l,i_(l),Pe(),Rt=B,Ut=R,ci.transition=M}else n.current=l;if(Sl&&(Sl=!1,Cr=n,Ml=g),M=n.pendingLanes,M===0&&(Ar=null),gn(l.stateNode),Hn(n,Ae()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)g=r[l],d(g.value,{componentStack:g.stack,digest:g.digest});if(yl)throw yl=!1,n=sd,sd=null,n;return(Ml&1)!==0&&n.tag!==0&&Xs(),M=n.pendingLanes,(M&1)!==0?n===od?la++:(la=0,od=n):la=0,Er(),null}function Xs(){if(Cr!==null){var n=wh(Ml),r=ci.transition,l=Ut;try{if(ci.transition=null,Ut=16>n?16:n,Cr===null)var d=!1;else{if(n=Cr,Cr=null,Ml=0,(Rt&6)!==0)throw Error(t(331));var g=Rt;for(Rt|=4,He=n.current;He!==null;){var M=He,R=M.child;if((He.flags&16)!==0){var B=M.deletions;if(B!==null){for(var G=0;G<B.length;G++){var ce=B[G];for(He=ce;He!==null;){var Me=He;switch(Me.tag){case 0:case 11:case 15:sa(8,Me,M)}var we=Me.child;if(we!==null)we.return=Me,He=we;else for(;He!==null;){Me=He;var Se=Me.sibling,Be=Me.return;if(Sm(Me),Me===ce){He=null;break}if(Se!==null){Se.return=Be,He=Se;break}He=Be}}}var Ge=M.alternate;if(Ge!==null){var We=Ge.child;if(We!==null){Ge.child=null;do{var Kt=We.sibling;We.sibling=null,We=Kt}while(We!==null)}}He=M}}if((M.subtreeFlags&2064)!==0&&R!==null)R.return=M,He=R;else e:for(;He!==null;){if(M=He,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:sa(9,M,M.return)}var ie=M.sibling;if(ie!==null){ie.return=M.return,He=ie;break e}He=M.return}}var Y=n.current;for(He=Y;He!==null;){R=He;var se=R.child;if((R.subtreeFlags&2064)!==0&&se!==null)se.return=R,He=se;else e:for(R=Y;He!==null;){if(B=He,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:xl(9,B)}}catch(Ke){$t(B,B.return,Ke)}if(B===R){He=null;break e}var Re=B.sibling;if(Re!==null){Re.return=B.return,He=Re;break e}He=B.return}}if(Rt=g,Er(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(It,n)}catch{}d=!0}return d}finally{Ut=l,ci.transition=r}}return!1}function Fm(n,r,l){r=Hs(l,r),r=tm(n,r,1),n=Tr(n,r,1),r=Rn(),n!==null&&(Fn(n,1,r),Hn(n,r))}function $t(n,r,l){if(n.tag===3)Fm(n,n,l);else for(;r!==null;){if(r.tag===3){Fm(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ar===null||!Ar.has(d))){n=Hs(l,n),n=nm(r,n,1),r=Tr(r,n,1),n=Rn(),r!==null&&(Fn(r,1,n),Hn(r,n));break}}r=r.return}}function c_(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=Rn(),n.pingedLanes|=n.suspendedLanes&l,cn===n&&(pn&l)===l&&(rn===4||rn===3&&(pn&130023424)===pn&&500>Ae()-rd?ts(n,0):id|=l),Hn(n,r)}function Om(n,r){r===0&&((n.mode&1)===0?r=1:(r=vi,vi<<=1,(vi&130023424)===0&&(vi=4194304)));var l=Rn();n=Xi(n,r),n!==null&&(Fn(n,r,l),Hn(n,l))}function u_(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Om(n,l)}function d_(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,g=n.memoizedState;g!==null&&(l=g.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),Om(n,l)}var zm;zm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||On.current)Bn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Bn=!1,Qv(n,r,l);Bn=(n.flags&131072)!==0}else Bn=!1,jt&&(r.flags&1048576)!==0&&vp(r,el,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;ml(n,r),n=r.pendingProps;var g=Is(r,vn.current);Bs(r,l),g=Uu(null,r,d,n,g,l);var M=ku();return r.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,zn(d)?(M=!0,Za(r)):M=!1,r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Cu(r),g.updater=hl,r.stateNode=g,g._reactInternals=r,Hu(r,d,n,l),r=Xu(null,r,d,!0,M,l)):(r.tag=0,jt&&M&&vu(r),Cn(null,r,g,l),r=r.child),r;case 16:d=r.elementType;e:{switch(ml(n,r),n=r.pendingProps,g=d._init,d=g(d._payload),r.type=d,g=r.tag=h_(d),n=Si(d,n),g){case 0:r=Wu(null,r,d,n,l);break e;case 1:r=dm(null,r,d,n,l);break e;case 11:r=om(null,r,d,n,l);break e;case 14:r=am(null,r,d,Si(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:Si(d,g),Wu(n,r,d,g,l);case 1:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:Si(d,g),dm(n,r,d,g,l);case 3:e:{if(fm(r),n===null)throw Error(t(387));d=r.pendingProps,M=r.memoizedState,g=M.element,Ap(n,r),ol(r,d,null,l);var R=r.memoizedState;if(d=R.element,M.isDehydrated)if(M={element:d,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},r.updateQueue.baseState=M,r.memoizedState=M,r.flags&256){g=Hs(Error(t(423)),r),r=hm(n,r,d,l,g);break e}else if(d!==g){g=Hs(Error(t(424)),r),r=hm(n,r,d,l,g);break e}else for(Zn=yr(r.stateNode.containerInfo.firstChild),Kn=r,jt=!0,yi=null,l=Tp(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Fs(),d===g){r=$i(n,r,l);break e}Cn(n,r,d,l)}r=r.child}return r;case 5:return Pp(r),n===null&&Su(r),d=r.type,g=r.pendingProps,M=n!==null?n.memoizedProps:null,R=g.children,fu(d,g)?R=null:M!==null&&fu(d,M)&&(r.flags|=32),um(n,r),Cn(n,r,R,l),r.child;case 6:return n===null&&Su(r),null;case 13:return pm(n,r,l);case 4:return Ru(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=Os(r,null,d,l):Cn(n,r,d,l),r.child;case 11:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:Si(d,g),om(n,r,d,g,l);case 7:return Cn(n,r,r.pendingProps,l),r.child;case 8:return Cn(n,r,r.pendingProps.children,l),r.child;case 12:return Cn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,g=r.pendingProps,M=r.memoizedProps,R=g.value,zt(il,d._currentValue),d._currentValue=R,M!==null)if(_i(M.value,R)){if(M.children===g.children&&!On.current){r=$i(n,r,l);break e}}else for(M=r.child,M!==null&&(M.return=r);M!==null;){var B=M.dependencies;if(B!==null){R=M.child;for(var G=B.firstContext;G!==null;){if(G.context===d){if(M.tag===1){G=Yi(-1,l&-l),G.tag=2;var ce=M.updateQueue;if(ce!==null){ce=ce.shared;var Me=ce.pending;Me===null?G.next=G:(G.next=Me.next,Me.next=G),ce.pending=G}}M.lanes|=l,G=M.alternate,G!==null&&(G.lanes|=l),bu(M.return,l,r),B.lanes|=l;break}G=G.next}}else if(M.tag===10)R=M.type===r.type?null:M.child;else if(M.tag===18){if(R=M.return,R===null)throw Error(t(341));R.lanes|=l,B=R.alternate,B!==null&&(B.lanes|=l),bu(R,l,r),R=M.sibling}else R=M.child;if(R!==null)R.return=M;else for(R=M;R!==null;){if(R===r){R=null;break}if(M=R.sibling,M!==null){M.return=R.return,R=M;break}R=R.return}M=R}Cn(n,r,g.children,l),r=r.child}return r;case 9:return g=r.type,d=r.pendingProps.children,Bs(r,l),g=ai(g),d=d(g),r.flags|=1,Cn(n,r,d,l),r.child;case 14:return d=r.type,g=Si(d,r.pendingProps),g=Si(d.type,g),am(n,r,d,g,l);case 15:return lm(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:Si(d,g),ml(n,r),r.tag=1,zn(d)?(n=!0,Za(r)):n=!1,Bs(r,l),Jp(r,d,g),Hu(r,d,g,l),Xu(null,r,d,!0,n,l);case 19:return gm(n,r,l);case 22:return cm(n,r,l)}throw Error(t(156,r.tag))};function Bm(n,r){return ue(n,r)}function f_(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(n,r,l,d){return new f_(n,r,l,d)}function fd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function h_(n){if(typeof n=="function")return fd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===oe)return 14}return 2}function Nr(n,r){var l=n.alternate;return l===null?(l=ui(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function bl(n,r,l,d,g,M){var R=2;if(d=n,typeof n=="function")fd(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case P:return is(l.children,g,M,r);case k:R=8,g|=8;break;case I:return n=ui(12,l,r,g|2),n.elementType=I,n.lanes=M,n;case H:return n=ui(13,l,r,g),n.elementType=H,n.lanes=M,n;case ne:return n=ui(19,l,r,g),n.elementType=ne,n.lanes=M,n;case te:return Al(l,g,M,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:R=10;break e;case O:R=9;break e;case Q:R=11;break e;case oe:R=14;break e;case le:R=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ui(R,l,r,g),r.elementType=n,r.type=d,r.lanes=M,r}function is(n,r,l,d){return n=ui(7,n,d,r),n.lanes=l,n}function Al(n,r,l,d){return n=ui(22,n,d,r),n.elementType=te,n.lanes=l,n.stateNode={isHidden:!1},n}function hd(n,r,l){return n=ui(6,n,null,r),n.lanes=l,n}function pd(n,r,l){return r=ui(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function p_(n,r,l,d,g){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function md(n,r,l,d,g,M,R,B,G){return n=new p_(n,r,l,B,G),r===1?(r=1,M===!0&&(r|=8)):r=0,M=ui(3,null,null,r),n.current=M,M.stateNode=n,M.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(M),n}function m_(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function Vm(n){if(!n)return Mr;n=n._reactInternals;e:{if(Ni(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(zn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(zn(l))return mp(n,l,r)}return r}function Hm(n,r,l,d,g,M,R,B,G){return n=md(l,d,!0,n,g,M,R,B,G),n.context=Vm(null),l=n.current,d=Rn(),g=Rr(l),M=Yi(d,g),M.callback=r??null,Tr(l,M,g),n.current.lanes=g,Fn(n,g,d),Hn(n,d),n}function Cl(n,r,l,d){var g=r.current,M=Rn(),R=Rr(g);return l=Vm(l),r.context===null?r.context=l:r.pendingContext=l,r=Yi(M,R),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Tr(g,r,R),n!==null&&(wi(n,g,R,M),sl(n,g,R)),R}function Rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function gd(n,r){Gm(n,r),(n=n.alternate)&&Gm(n,r)}function g_(){return null}var jm=typeof reportError=="function"?reportError:function(n){console.error(n)};function xd(n){this._internalRoot=n}Pl.prototype.render=xd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Cl(n,r,null,null)},Pl.prototype.unmount=xd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;es(function(){Cl(null,n,null,null)}),r[Hi]=null}};function Pl(n){this._internalRoot=n}Pl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ah();n={blockedOn:null,target:n,priority:r};for(var l=0;l<xr.length&&r!==0&&r<xr[l].priority;l++);xr.splice(l,0,n),l===0&&Ph(n)}};function vd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wm(){}function x_(n,r,l,d,g){if(g){if(typeof d=="function"){var M=d;d=function(){var ce=Rl(R);M.call(ce)}}var R=Hm(r,d,n,0,null,!1,!1,"",Wm);return n._reactRootContainer=R,n[Hi]=R.current,Xo(n.nodeType===8?n.parentNode:n),es(),R}for(;g=n.lastChild;)n.removeChild(g);if(typeof d=="function"){var B=d;d=function(){var ce=Rl(G);B.call(ce)}}var G=md(n,0,!1,null,null,!1,!1,"",Wm);return n._reactRootContainer=G,n[Hi]=G.current,Xo(n.nodeType===8?n.parentNode:n),es(function(){Cl(r,G,l,d)}),G}function Ll(n,r,l,d,g){var M=l._reactRootContainer;if(M){var R=M;if(typeof g=="function"){var B=g;g=function(){var G=Rl(R);B.call(G)}}Cl(r,R,n,g)}else R=x_(l,r,n,g,d);return Rl(R)}Th=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=tn(r.pendingLanes);l!==0&&(Hc(r,l|1),Hn(r,Ae()),(Rt&6)===0&&(Ws=Ae()+500,Er()))}break;case 13:es(function(){var d=Xi(n,1);if(d!==null){var g=Rn();wi(d,n,1,g)}}),gd(n,1)}},Gc=function(n){if(n.tag===13){var r=Xi(n,134217728);if(r!==null){var l=Rn();wi(r,n,134217728,l)}gd(n,134217728)}},bh=function(n){if(n.tag===13){var r=Rr(n),l=Xi(n,r);if(l!==null){var d=Rn();wi(l,n,r,d)}gd(n,r)}},Ah=function(){return Ut},Ch=function(n,r){var l=Ut;try{return Ut=n,r()}finally{Ut=l}},Le=function(n,r,l){switch(r){case"input":if(ut(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var g=qa(d);if(!g)throw Error(t(90));gt(d),ut(d,g)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&z(n,!!l.multiple,r,!1)}},Vt=cd,en=es;var v_={usingClientEntryPoint:!1,Events:[qo,Ls,qa,ke,pt,cd]},ca={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},__={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=U(n),n===null?null:n.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||g_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{It=Dl.inject(__),wt=Dl}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v_,Gn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(r))throw Error(t(200));return m_(n,r,null,l)},Gn.createRoot=function(n,r){if(!vd(n))throw Error(t(299));var l=!1,d="",g=jm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),r=md(n,1,!1,null,null,l,!1,d,g),n[Hi]=r.current,Xo(n.nodeType===8?n.parentNode:n),new xd(r)},Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=U(r),n=n===null?null:n.stateNode,n},Gn.flushSync=function(n){return es(n)},Gn.hydrate=function(n,r,l){if(!Nl(r))throw Error(t(200));return Ll(null,n,r,!0,l)},Gn.hydrateRoot=function(n,r,l){if(!vd(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,g=!1,M="",R=jm;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),r=Hm(r,null,n,1,l??null,g,!1,M,R),n[Hi]=r.current,Xo(n),d)for(n=0;n<d.length;n++)l=d[n],g=l._getVersion,g=g(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,g]:r.mutableSourceEagerHydrationData.push(l,g);return new Pl(r)},Gn.render=function(n,r,l){if(!Nl(r))throw Error(t(200));return Ll(null,n,r,!1,l)},Gn.unmountComponentAtNode=function(n){if(!Nl(n))throw Error(t(40));return n._reactRootContainer?(es(function(){Ll(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},Gn.unstable_batchedUpdates=cd,Gn.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!Nl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ll(n,r,l,!1,d)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var Jm;function A_(){if(Jm)return Sd.exports;Jm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Sd.exports=b_(),Sd.exports}var eg;function C_(){if(eg)return Il;eg=1;var s=A_();return Il.createRoot=s.createRoot,Il.hydrateRoot=s.hydrateRoot,Il}var R_=C_();const P_=z0(R_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=(...s)=>s.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=s=>{const e=L_(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=_e.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:c,...u},f)=>_e.createElement("svg",{ref:f,...D_,width:e,height:e,stroke:s,strokeWidth:i?Number(t)*24/Number(e):t,className:B0("lucide",o),...!a&&!I_(u)&&{"aria-hidden":"true"},...u},[...c.map(([h,p])=>_e.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=(s,e)=>{const t=_e.forwardRef(({className:i,...o},a)=>_e.createElement(U_,{ref:a,iconNode:e,className:B0(`lucide-${N_(tg(s))}`,`lucide-${s}`,i),...o}));return t.displayName=tg(s),t};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],F_=mt("aperture",k_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],z_=mt("arrow-right",O_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],ms=mt("box",B_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],H_=mt("chevron-down",V_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],j_=mt("chevron-right",G_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],X_=mt("chevron-up",W_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],$_=mt("circle",Y_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],V0=mt("columns-2",q_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],th=mt("download",K_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["ellipse",{cx:"12",cy:"12",rx:"10",ry:"6",key:"swdkt4"}]],Q_=mt("ellipse",Z_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],ey=mt("eraser",J_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ny=mt("eye-off",ty);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ry=mt("eye",iy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]],H0=mt("frame",sy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],ay=mt("grid-3x3",oy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],cy=mt("image-plus",ly);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],uc=mt("image",uy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],G0=mt("layers",dy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],hy=mt("layout-template",fy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M5 12h14",key:"1ays0h"}]],my=mt("minus",py);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],j0=mt("monitor",gy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],vy=mt("moon",xy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]],yy=mt("paint-bucket",_y);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]],My=mt("panel-bottom",Sy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],wy=mt("panel-left",Ey);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]],by=mt("panel-right",Ty);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]],Cy=mt("panel-top",Ay);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],W0=mt("pencil",Ry);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ny=mt("plus",Py);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Dy=mt("rectangle-horizontal",Ly);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],Uy=mt("redo-2",Iy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Fy=mt("rotate-ccw",ky);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],zy=mt("rotate-cw",Oy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Vy=mt("settings-2",By);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],dc=mt("sliders-horizontal",Hy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]],jy=mt("snowflake",Gy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Xy=mt("sparkles",Wy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],X0=mt("square",Yy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Y0=mt("sun",$y);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],$0=mt("trash-2",qy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Zy=mt("undo-2",Ky);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Jy=mt("upload",Qy);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xs=mt("x",e1);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],n1=mt("zap",t1),ng=s=>{let e;const t=new Set,i=(h,p)=>{const m=typeof h=="function"?h(e):h;if(!Object.is(m,e)){const x=e;e=p??(typeof m!="object"||m===null)?m:Object.assign({},e,m),t.forEach(y=>y(e,x))}},o=()=>e,u={setState:i,getState:o,getInitialState:()=>f,subscribe:h=>(t.add(h),()=>t.delete(h))},f=e=s(i,o,u);return u},i1=(s=>s?ng(s):ng),r1=s=>s;function s1(s,e=r1){const t=xa.useSyncExternalStore(s.subscribe,xa.useCallback(()=>e(s.getState()),[s,e]),xa.useCallback(()=>e(s.getInitialState()),[s,e]));return xa.useDebugValue(t),t}const ig=s=>{const e=i1(s),t=i=>s1(e,i);return Object.assign(t,e),t},o1=(s=>s?ig(s):ig),a1=["#000000","#1a1a1a","#333333","#555555","#888888","#aaaaaa","#cccccc","#e8e8e8","#ffffff","#ff0000","#cc0000","#880000","#ff4444","#ff8888","#ffcccc","#ff8800","#cc6600","#884400","#ffaa44","#ffcc88","#ffe4c0","#ffff00","#cccc00","#888800","#ffff66","#ffff99","#ffffcc","#00ff00","#00cc00","#008800","#44ff44","#88ff88","#ccffcc","#00ffcc","#00ccaa","#008866","#00ffff","#00cccc","#008888","#0000ff","#0000cc","#000088","#4444ff","#8888ff","#ccccff","#8800ff","#6600cc","#440088","#ff00ff","#cc00cc","#880088","#ff44ff","#ff88ff","#ffccff","#ff0088","#cc0066","#880044","#ff66aa","#ffaacc","#ffddee","#662200","#8b4513","#a0522d","#c68642","#d2a679","#f5deb3","#ffe0bd","#ffcd94","#e8b88a","#228b22","#3a5f0b","#556b2f","#8b7355","#a08060","#c4a882","#4a3728","#6b4c3b","#8b6050","#87ceeb","#4488cc","#1a6699","#003366","#004488","#1155aa","#ff6600","#ff3300","#cc2200","#00ff88","#00cc66","#009944","#ff00aa","#cc0088","#990066"],q0=32,K0=32,Z0=5;function Ma(s,e,t){return Array.from({length:e},()=>Array.from({length:s},()=>Array(t).fill("transparent")))}let wd=0;function Q0(s,e,t,i){return wd++,{id:`layer-${wd}`,name:`Layer ${wd}`,visible:!0,voxels:Ma(s,e,t),voxelMaterials:{}}}function Td(s){return s.map(e=>({...e,voxels:e.voxels.map(t=>t.map(i=>[...i])),voxelMaterials:{...e.voxelMaterials}}))}function ni(s,e,t,i){var a,c;const o=Ma(e,t,i);for(const u of s)if(u.visible)for(let f=0;f<t;f++)for(let h=0;h<e;h++)for(let p=0;p<i;p++){const m=(c=(a=u.voxels[f])==null?void 0:a[h])==null?void 0:c[p];m&&m!=="transparent"&&(o[f][h][p]=m)}return o}function l1(s){const e={};for(const t of s)if(t.visible)for(const[i,o]of Object.entries(t.voxelMaterials||{}))o&&o!=="solid"?e[i]=o:o==="solid"&&delete e[i];return e}function gs(s,e,t,i){return s==="top"||s==="bottom"?{w:e,h:i}:s==="left"||s==="right"?{w:i,h:t}:{w:e,h:t}}function nh(s,e,t,i,o){switch(e){case"front":return Array.from({length:i},(a,c)=>Array.from({length:t},(u,f)=>{var h,p;for(let m=o-1;m>=0;m--){const x=(p=(h=s[c])==null?void 0:h[f])==null?void 0:p[m];if(x&&x!=="transparent")return x}return"transparent"}));case"back":return Array.from({length:i},(a,c)=>Array.from({length:t},(u,f)=>{var p,m;const h=t-1-f;for(let x=0;x<o;x++){const y=(m=(p=s[c])==null?void 0:p[h])==null?void 0:m[x];if(y&&y!=="transparent")return y}return"transparent"}));case"left":return Array.from({length:i},(a,c)=>Array.from({length:o},(u,f)=>{var h,p;for(let m=0;m<t;m++){const x=(p=(h=s[c])==null?void 0:h[m])==null?void 0:p[f];if(x&&x!=="transparent")return x}return"transparent"}));case"right":return Array.from({length:i},(a,c)=>Array.from({length:o},(u,f)=>{var p,m;const h=o-1-f;for(let x=t-1;x>=0;x--){const y=(m=(p=s[c])==null?void 0:p[x])==null?void 0:m[h];if(y&&y!=="transparent")return y}return"transparent"}));case"top":return Array.from({length:o},(a,c)=>Array.from({length:t},(u,f)=>{var h,p;for(let m=0;m<i;m++){const x=(p=(h=s[m])==null?void 0:h[f])==null?void 0:p[c];if(x&&x!=="transparent")return x}return"transparent"}));case"bottom":return Array.from({length:o},(a,c)=>Array.from({length:t},(u,f)=>{var h,p;for(let m=i-1;m>=0;m--){const x=(p=(h=s[m])==null?void 0:h[f])==null?void 0:p[c];if(x&&x!=="transparent")return x}return"transparent"}));default:return[]}}function c1(s,e,t,i,o){const a=Math.floor(o/2);switch(e){case"front":return Array.from({length:i},(c,u)=>Array.from({length:t},(f,h)=>{var p,m;for(let x=o-1;x>=0;x--)if((m=(p=s[u])==null?void 0:p[h])!=null&&m[x]&&s[u][h][x]!=="transparent")return x-a;return null}));case"back":return Array.from({length:i},(c,u)=>Array.from({length:t},(f,h)=>{var m,x;const p=t-1-h;for(let y=0;y<o;y++)if((x=(m=s[u])==null?void 0:m[p])!=null&&x[y]&&s[u][p][y]!=="transparent")return y-a;return null}));case"left":return Array.from({length:i},(c,u)=>Array.from({length:o},(f,h)=>{var p,m;for(let x=0;x<t;x++)if((m=(p=s[u])==null?void 0:p[x])!=null&&m[h]&&s[u][x][h]!=="transparent")return x;return null}));case"right":return Array.from({length:i},(c,u)=>Array.from({length:o},(f,h)=>{var m,x;const p=o-1-h;for(let y=t-1;y>=0;y--)if((x=(m=s[u])==null?void 0:m[y])!=null&&x[p]&&s[u][y][p]!=="transparent")return t-1-y;return null}));case"top":return Array.from({length:o},(c,u)=>Array.from({length:t},(f,h)=>{var p,m;for(let x=0;x<i;x++)if((m=(p=s[x])==null?void 0:p[h])!=null&&m[u]&&s[x][h][u]!=="transparent")return x;return null}));case"bottom":return Array.from({length:o},(c,u)=>Array.from({length:t},(f,h)=>{var p,m;for(let x=i-1;x>=0;x--)if((m=(p=s[x])==null?void 0:p[h])!=null&&m[u]&&s[x][h][u]!=="transparent")return i-1-x;return null}));default:return[]}}const ff={front:"back",back:"front",left:"right",right:"left",top:"bottom",bottom:"top"};function fc(s,e,t,i,o,a,c){const u=[];switch(t){case"front":{const f=c-1,h=Math.max(0,c-i);for(let p=f;p>=h;p--)u.push({x:s,y:e,z:p});break}case"back":{const f=Math.min(c-1,i-1);for(let h=0;h<=f;h++)u.push({x:o-1-s,y:e,z:h});break}case"left":for(let f=0;f<i;f++)u.push({x:f,y:e,z:s});break;case"right":for(let f=0;f<i;f++)u.push({x:o-1-f,y:e,z:c-1-s});break;case"top":for(let f=0;f<i;f++)u.push({x:s,y:f,z:e});break;case"bottom":for(let f=0;f<i;f++)u.push({x:s,y:a-1-f,z:e});break}return u.filter(({x:f,y:h,z:p})=>f>=0&&f<o&&h>=0&&h<a&&p>=0&&p<c)}function rg(s,e,t,i,o,a,c,u){const f=[],h=(p,m,x)=>{var w,E;const y=(E=(w=s[m])==null?void 0:w[p])==null?void 0:E[x];return y&&y!=="transparent"&&f.push({x:p,y:m,z:x}),f.length>=o};if(i==="back"){const p=a-1-e;for(let m=0;m<u&&!h(p,t,m);m++);}else if(i==="left")for(let p=0;p<a&&!h(p,t,e);p++);else if(i==="right"){const p=u-1-e;for(let m=a-1;m>=0&&!h(m,t,p);m--);}else if(i==="top")for(let p=0;p<c&&!h(e,p,t);p++);else if(i==="bottom")for(let p=c-1;p>=0&&!h(e,p,t);p--);return f}function sg(s,e,t,i,o,a,c,u){const f=[],h=(p,m,x)=>{var _,v;const y=p<=m?1:-1;let w=null;for(let b=p;y>0?b<=m:b>=m;b+=y){const[N,T,D]=x(b),C=(v=(_=s[T])==null?void 0:_[N])==null?void 0:v[D];if(C&&C!=="transparent"){w=b;break}}const E=w!==null?w-y:p;for(let b=0;b<o;b++){const[N,T,D]=x(E-y*b);N>=0&&N<a&&T>=0&&T<c&&D>=0&&D<u&&(f.some(C=>C.x===N&&C.y===T&&C.z===D)||f.push({x:N,y:T,z:D}))}};switch(i){case"back":h(0,u-1,p=>[a-1-e,t,p]);break;case"left":h(0,a-1,p=>[p,t,e]);break;case"right":h(a-1,0,p=>[p,t,u-1-e]);break;case"top":h(0,c-1,p=>[e,p,t]);break;case"bottom":h(c-1,0,p=>[e,p,t]);break;default:return fc(e,t,i,o,a,c,u)}return f}const og=Q0(q0,K0,Z0),Ye=o1((s,e)=>({canvasWidth:q0,canvasHeight:K0,depthDimension:Z0,layers:[og],activeLayerId:og.id,pixelSize:14,showGrid:!0,currentColor:"#c8860a",activeTool:"pencil",palette:a1,undoStack:[],redoStack:[],pushUndo(){const{layers:t,undoStack:i}=e();s({undoStack:[...i.slice(-49),Td(t)],redoStack:[]})},paintAt(t,i,o,{sideDrawModeOverride:a=null,fullDepthErase:c=!1}={}){const{layers:u,activeLayerId:f,canvasWidth:h,canvasHeight:p,depthDimension:m,activeView:x,paintDepth:y,sideDrawMode:w,symmetryX:E,symmetryY:_,symmetryOpposite:v}=e(),b=u.findIndex(F=>F.id===f);if(b<0)return;const N=u[b].voxels,T=a??w,{w:D,h:C}=gs(x,h,p,m),P=c?m:y,k=c?m:y;let I=null;const A=()=>I??(I=ni(u,h,p,m)),O=(F,$,Te,J=!1)=>Te==="front"?fc(F,$,Te,k,h,p,m):(J?"draw":T)==="draw"?sg(A(),F,$,Te,k,h,p,m):rg(N,F,$,Te,P,h,p,m),Q=[],H=new Set,ne=(F,$)=>{if(F<0||F>=D||$<0||$>=C)return;const Te=`${F},${$}`;H.has(Te)||(H.add(Te),Q.push([F,$]))};ne(t,i),E&&ne(D-1-t,i),_&&ne(t,C-1-i),E&&_&&ne(D-1-t,C-1-i);const oe=[],le=new Set,te=F=>{const $=`${F.x},${F.y},${F.z}`;le.has($)||(le.add($),oe.push(F))};for(const[F,$]of Q)O(F,$,x).forEach(te);if(v){const F=ff[x],{w:$,h:Te}=gs(F,h,p,m),J=x==="front";for(const[ae,ge]of Q)ae>=0&&ae<$&&ge>=0&&ge<Te&&O(ae,ge,F,J).forEach(te)}if(!oe.length)return;const V=new Set(oe.map(F=>F.y)),re=[...N];for(const F of V)re[F]=N[F].map($=>[...$]);for(const{x:F,y:$,z:Te}of oe)re[$][F][Te]=o;const j=[...u];j[b]={...u[b],voxels:re},s({layers:j})},floodFillVoxel(t,i,o){var V,re;const{layers:a,activeLayerId:c,canvasWidth:u,canvasHeight:f,depthDimension:h,activeView:p,paintDepth:m,sideDrawMode:x,symmetryX:y,symmetryY:w,symmetryOpposite:E}=e(),_=a.findIndex(j=>j.id===c);if(_<0)return;const v=a[_].voxels,b=nh(v,p,u,f,h),{w:N,h:T}=gs(p,u,f,h),D=(V=b[i])==null?void 0:V[t];if(!D||D===o)return;e().pushUndo();const C=new Set,P=[[t,i]],k=[];for(;P.length;){const[j,F]=P.pop();if(j<0||F<0||j>=N||F>=T)continue;const $=`${j},${F}`;C.has($)||(C.add($),((re=b[F])==null?void 0:re[j])===D&&(k.push([j,F]),P.push([j+1,F],[j-1,F],[j,F+1],[j,F-1])))}let I=null;const A=()=>I??(I=ni(a,u,f,h)),O=(j,F,$,Te=!1)=>$==="front"?fc(j,F,$,m,u,f,h):(Te?"draw":x)==="draw"?sg(A(),j,F,$,m,u,f,h):rg(v,j,F,$,m,u,f,h),Q=new Set,H=[],ne=j=>{const F=`${j.x},${j.y},${j.z}`;Q.has(F)||(Q.add(F),H.push(j))};for(const[j,F]of k){if(O(j,F,p).forEach(ne),y){const $=N-1-j;$!==j&&O($,F,p).forEach(ne)}if(w){const $=T-1-F;$!==F&&O(j,$,p).forEach(ne)}if(y&&w&&O(N-1-j,T-1-F,p).forEach(ne),E){const $=ff[p],{w:Te,h:J}=gs($,u,f,h),ae=p==="front",ge=[[j,F]];y&&ge.push([Te-1-j,F]),w&&ge.push([j,J-1-F]),y&&w&&ge.push([Te-1-j,J-1-F]);for(const[he,ye]of ge)he>=0&&he<Te&&ye>=0&&ye<J&&O(he,ye,$,ae).forEach(ne)}}if(!H.length)return;const oe=new Set(H.map(j=>j.y)),le=v.map((j,F)=>oe.has(F)?j.map($=>[...$]):j);for(const{x:j,y:F,z:$}of H)le[F][j][$]=o;const te=[...a];te[_]={...a[_],voxels:le},s({layers:te})},setCurrentColor:t=>s({currentColor:t}),setActiveTool:t=>s({activeTool:t}),setPixelSize:t=>s({pixelSize:Math.max(4,Math.min(32,t))}),toggleGrid:()=>s(t=>({showGrid:!t.showGrid})),clearCanvas(){const{layers:t,activeLayerId:i,canvasWidth:o,canvasHeight:a,depthDimension:c}=e();e().pushUndo();const u=t.map(f=>f.id===i?{...f,voxels:Ma(o,a,c)}:f);s({layers:u})},resizeCanvas(t,i){t=Math.max(4,Math.min(256,Math.round(t))),i=Math.max(4,Math.min(256,Math.round(i)));const{layers:o,canvasWidth:a,canvasHeight:c,depthDimension:u}=e();e().pushUndo();const f=t>a?Math.floor((t-a)/2):0,h=i>c?Math.floor((i-c)/2):0,p=o.map(m=>{const x=Ma(t,i,u);for(let y=0;y<c;y++)for(let w=0;w<a;w++)for(let E=0;E<u;E++){const _=y+h,v=w+f;_>=0&&_<i&&v>=0&&v<t&&(x[_][v][E]=m.voxels[y][w][E])}return{...m,voxels:x}});s({canvasWidth:t,canvasHeight:i,layers:p})},setDepthDimension(t){t=Math.max(4,Math.min(256,Math.round(t)));const{layers:i,canvasWidth:o,canvasHeight:a,depthDimension:c,paintDepth:u}=e();e().pushUndo();const f=t>c?Math.floor((t-c)/2):0,h=i.map(p=>{const m=Ma(o,a,t);for(let x=0;x<a;x++)for(let y=0;y<o;y++)for(let w=0;w<c;w++){const E=w+f;E>=0&&E<t&&(m[x][y][E]=p.voxels[x][y][w])}return{...p,voxels:m}});s({depthDimension:t,layers:h,paintDepth:Math.min(u,t)})},undo(){const{undoStack:t,layers:i,redoStack:o}=e();if(!t.length)return;const a=t[t.length-1];s({layers:a,undoStack:t.slice(0,-1),redoStack:[...o.slice(-49),Td(i)]})},redo(){const{redoStack:t,layers:i,undoStack:o}=e();if(!t.length)return;const a=t[t.length-1];s({layers:a,redoStack:t.slice(0,-1),undoStack:[...o.slice(-49),Td(i)]})},addToPalette(t){const{palette:i}=e();i.includes(t)||s({palette:[...i,t]})},paintVoxelDirect(t,i,o,a){const{layers:c,activeLayerId:u,canvasWidth:f,canvasHeight:h,depthDimension:p}=e();if(t<0||t>=f||i<0||i>=h||o<0||o>=p)return;const m=c.findIndex(E=>E.id===u);if(m<0)return;const x=c[m],y=x.voxels.map((E,_)=>_!==i?E:E.map((v,b)=>{if(b!==t)return v;const N=[...v];return N[o]=a,N})),w=[...c];w[m]={...x,voxels:y},s({layers:w})},addLayer(){const{layers:t,canvasWidth:i,canvasHeight:o,depthDimension:a}=e(),c=Q0(i,o,a);s({layers:[...t,c],activeLayerId:c.id})},deleteLayer(t){var u;const{layers:i,activeLayerId:o}=e();if(i.length<=1)return;const a=i.filter(f=>f.id!==t),c=t===o?((u=a[a.length-1])==null?void 0:u.id)??a[0].id:o;s({layers:a,activeLayerId:c})},setActiveLayer:t=>s({activeLayerId:t}),toggleLayerVisible(t){const{layers:i}=e();s({layers:i.map(o=>o.id===t?{...o,visible:!o.visible}:o)})},renameLayer(t,i){const{layers:o}=e();s({layers:o.map(a=>a.id===t?{...a,name:i.trim()||a.name}:a)})},moveLayerUp(t){const{layers:i}=e(),o=i.findIndex(c=>c.id===t);if(o>=i.length-1)return;const a=[...i];[a[o],a[o+1]]=[a[o+1],a[o]],s({layers:a})},moveLayerDown(t){const{layers:i}=e(),o=i.findIndex(c=>c.id===t);if(o<=0)return;const a=[...i];[a[o],a[o-1]]=[a[o-1],a[o]],s({layers:a})},activeView:"front",paintDepth:1,paintDirection:"both",sideDrawMode:"edit",symmetryX:!1,symmetryY:!1,symmetryOpposite:!1,setActiveView:t=>s({activeView:t}),setPaintDepth:t=>s(i=>({paintDepth:Math.max(1,Math.min(i.depthDimension,Math.round(t)))})),setPaintDirection:t=>s({paintDirection:t}),setSideDrawMode:t=>s({sideDrawMode:t}),setSymmetryX:t=>s({symmetryX:t}),setSymmetryY:t=>s({symmetryY:t}),setSymmetryOpposite:t=>s({symmetryOpposite:t}),activeMaterial:"solid",setActiveMaterial:t=>s({activeMaterial:t}),paintMaterialAt(t,i){var N,T;const{layers:o,activeLayerId:a,canvasWidth:c,canvasHeight:u,depthDimension:f,activeView:h,paintDepth:p,activeMaterial:m}=e(),x=o.findIndex(D=>D.id===a);if(x<0)return;const y=o[x],w=ni(o,c,u,f),E=fc(t,i,h,p,c,u,f),_={...y.voxelMaterials||{}};let v=!1;for(const{x:D,y:C,z:P}of E){if(!((T=(N=w[C])==null?void 0:N[D])!=null&&T[P])||w[C][D][P]==="transparent")continue;const k=`${C},${D},${P}`;m==="solid"?k in _&&(delete _[k],v=!0):_[k]!==m&&(_[k]=m,v=!0)}if(!v)return;const b=[...o];b[x]={...y,voxelMaterials:_},s({layers:b})},referenceImage:null,setReferenceImage:t=>s({referenceImage:t}),clearReferenceImage:()=>s({referenceImage:null}),viewMode:"split",activeTheme:"synthwave",showDepthText:!0,setViewMode:t=>s({viewMode:t}),setActiveTheme:t=>s({activeTheme:t}),setShowDepthText:t=>s({showDepthText:t})}));function u1(){return S.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none",style:{zIndex:0},children:[S.jsx("div",{className:"absolute inset-0",style:{background:`
          radial-gradient(ellipse at 15% 50%, rgba(120,80,20,0.15) 0%, transparent 45%),
          radial-gradient(ellipse at 85% 50%, rgba(100,60,10,0.12) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 100%, rgba(80,50,10,0.2) 0%, transparent 40%)
        `}}),S.jsxs("svg",{className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[S.jsxs("defs",{children:[S.jsxs("radialGradient",{id:"gearFill",cx:"50%",cy:"50%",children:[S.jsx("stop",{offset:"0%",stopColor:"#4a3010",stopOpacity:"0.6"}),S.jsx("stop",{offset:"100%",stopColor:"#1a0e00",stopOpacity:"0.3"})]}),S.jsx("pattern",{id:"hexTile",width:"44",height:"50",patternUnits:"userSpaceOnUse",children:S.jsx("path",{d:"M22 2 L42 13 L42 37 L22 48 L2 37 L2 13 Z",fill:"none",stroke:"rgba(122,92,46,0.06)",strokeWidth:"1"})}),S.jsxs("pattern",{id:"rivetPattern",width:"80",height:"80",patternUnits:"userSpaceOnUse",children:[S.jsx("circle",{cx:"4",cy:"4",r:"2.5",fill:"none",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.5"}),S.jsx("circle",{cx:"4",cy:"4",r:"1",fill:"rgba(200,134,10,0.2)"}),S.jsx("circle",{cx:"76",cy:"76",r:"2.5",fill:"none",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.5"}),S.jsx("circle",{cx:"76",cy:"76",r:"1",fill:"rgba(200,134,10,0.2)"})]})]}),S.jsx("rect",{width:"100%",height:"100%",fill:"url(#hexTile)"}),S.jsx("rect",{width:"100%",height:"100%",fill:"url(#rivetPattern)"}),S.jsx("g",{opacity:"0.18",children:S.jsx(ih,{cx:70,cy:220,outerR:160,innerR:124,teeth:28,holeR:52})}),S.jsx("g",{opacity:"0.15",children:S.jsx(d1,{cx:-90,cy:180,outerR:180,innerR:140,teeth:32,holeR:60})}),S.jsx("g",{opacity:"0.12",children:S.jsx(f1,{cx:0,cy:-60,outerR:120,innerR:92,teeth:20,holeR:38})}),S.jsx("g",{opacity:"0.35",children:S.jsx(ag,{y:52,segments:[0,100,200,320,480,640,760],width:"100%"})}),S.jsx("g",{opacity:"0.25",children:S.jsx(ag,{y:-28,fromBottom:!0,segments:[80,200,380,540,700],width:"100%"})}),S.jsx("rect",{x:"5",y:"0",width:"4",height:"100%",fill:"rgba(122,92,46,0.15)",rx:"2"}),S.jsx("rect",{x:"3",y:"0",width:"1",height:"100%",fill:"rgba(200,134,10,0.1)"}),S.jsx("rect",{x:"calc(100% - 9px)",y:"0",width:"4",height:"100%",fill:"rgba(122,92,46,0.12)",rx:"2"})]}),S.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 opacity-30",style:{left:"-40px"},children:S.jsx(Ys,{size:180,teeth:20,className:"gear-spin-slow",stroke:"#c8860a",strokeWidth:2})}),S.jsx("div",{className:"absolute right-0 top-1/3 opacity-22",style:{right:"-50px"},children:S.jsx(Ys,{size:200,teeth:24,className:"gear-spin-reverse",stroke:"#7a5c2e",strokeWidth:1.5})}),S.jsxs("div",{className:"absolute bottom-8 right-4 flex items-end gap-0 opacity-40",children:[S.jsx(Ys,{size:60,teeth:12,className:"gear-spin",stroke:"#c8860a",strokeWidth:1.5}),S.jsx(Ys,{size:40,teeth:8,className:"gear-spin-reverse",stroke:"#8a5c08",strokeWidth:1.5,style:{marginLeft:"-8px",marginBottom:"10px"}}),S.jsx(Ys,{size:28,teeth:6,className:"gear-spin-slow",stroke:"#c8860a",strokeWidth:1,style:{marginLeft:"-6px",marginBottom:"6px"}})]}),S.jsx("div",{className:"absolute top-6 left-4 opacity-35",children:S.jsx(Ys,{size:48,teeth:10,className:"gear-spin-reverse",stroke:"#c8860a",strokeWidth:1.5})}),S.jsx(h1,{}),S.jsx("div",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none",style:{fontFamily:"'Special Elite', serif",color:"rgba(200,134,10,0.12)",fontSize:"11px",letterSpacing:"0.5em",textTransform:"uppercase"},children:"Picell 3D Engine"})]})}function Ys({size:s,teeth:e,className:t,stroke:i,strokeWidth:o=1.5,style:a}){const c=s/2-6,u=c*.78,f=J0(s/2,s/2,c,u,e,.4);return S.jsxs("svg",{width:s,height:s,className:t,style:a,children:[S.jsx("path",{d:f,fill:"none",stroke:i,strokeWidth:o}),S.jsx("circle",{cx:s/2,cy:s/2,r:c*.38,fill:"none",stroke:i,strokeWidth:o*.8}),[0,60,120,180,240,300].slice(0,Math.min(6,Math.floor(e/4))).map((h,p)=>{const m=h*Math.PI/180,x=s/2+Math.cos(m)*c*.38,y=s/2+Math.sin(m)*c*.38,w=s/2+Math.cos(m)*c*.68,E=s/2+Math.sin(m)*c*.68;return S.jsx("line",{x1:x,y1:y,x2:w,y2:E,stroke:i,strokeWidth:o*.6},p)}),S.jsx("circle",{cx:s/2,cy:s/2,r:c*.1,fill:i,opacity:"0.6"})]})}function ih({cx:s,cy:e,outerR:t,innerR:i,teeth:o,holeR:a}){const c=J0(s,e,t,i,o,.4);return S.jsxs(S.Fragment,{children:[S.jsx("path",{d:c,fill:"url(#gearFill)",stroke:"rgba(122,92,46,0.4)",strokeWidth:"1.5"}),S.jsx("circle",{cx:s,cy:e,r:a,fill:"rgba(10,6,2,0.6)",stroke:"rgba(122,92,46,0.3)",strokeWidth:"1"}),[0,45,90,135,180,225,270,315].map((u,f)=>{const h=u*Math.PI/180,p=s+Math.cos(h)*a,m=e+Math.sin(h)*a,x=s+Math.cos(h)*(i*.7),y=e+Math.sin(h)*(i*.7);return S.jsx("line",{x1:p,y1:m,x2:x,y2:y,stroke:"rgba(122,92,46,0.2)",strokeWidth:"1.5"},f)}),S.jsx("circle",{cx:s,cy:e,r:a*.3,fill:"rgba(200,134,10,0.15)",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.8"})]})}function d1({cx:s,cy:e,outerR:t,innerR:i,teeth:o,holeR:a}){return S.jsx("g",{transform:`translate(100%,${e})`,children:S.jsx(ih,{cx:s,cy:0,outerR:t,innerR:i,teeth:o,holeR:a})})}function f1({cx:s,cy:e,outerR:t,innerR:i,teeth:o,holeR:a}){return S.jsx("g",{transform:"translate(50%,100%)",children:S.jsx(ih,{cx:s,cy:e,outerR:t,innerR:i,teeth:o,holeR:a})})}function ag({y:s,fromBottom:e,segments:t}){const i=e?`calc(100% - ${-s}px)`:`${s}px`;return S.jsxs("g",{children:[S.jsx("line",{x1:"0",y1:i,x2:"100%",y2:i,stroke:"url(#pipeGrad2)",strokeWidth:"6"}),S.jsx("line",{x1:"0",y1:i,x2:"100%",y2:i,stroke:"rgba(200,134,10,0.15)",strokeWidth:"1"})]})}function h1(){return S.jsxs("svg",{className:"absolute top-0 left-0 w-full opacity-25 pointer-events-none",height:"56",xmlns:"http://www.w3.org/2000/svg",children:[S.jsx("defs",{children:S.jsxs("linearGradient",{id:"pipeGrad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[S.jsx("stop",{offset:"0%",stopColor:"#d09030"}),S.jsx("stop",{offset:"40%",stopColor:"#8a5c10"}),S.jsx("stop",{offset:"100%",stopColor:"#3d2010"})]})}),S.jsx("rect",{x:"0",y:"32",width:"100%",height:"6",rx:"3",fill:"url(#pipeGrad2)"}),S.jsx("rect",{x:"0",y:"33",width:"100%",height:"1",fill:"rgba(255,200,60,0.15)"}),[60,160,280,420,560,700].map(s=>S.jsxs("g",{children:[S.jsx("rect",{x:s-5,y:28,width:10,height:14,rx:"1.5",fill:"#8a5c10"}),S.jsx("rect",{x:s-5,y:28,width:10,height:2,rx:"1",fill:"#c8860a",opacity:"0.5"}),S.jsx("circle",{cx:s,cy:35,r:2.5,fill:"#4a3010"})]},s)),[100,340,580].map((s,e)=>S.jsxs("g",{children:[S.jsx("circle",{cx:s,cy:24,r:4,fill:"rgba(220,200,150,0.3)",className:"steam-puff",style:{animationDelay:`${e*1.1}s`}}),S.jsx("circle",{cx:s+3,cy:18,r:2.5,fill:"rgba(220,200,150,0.2)",className:"steam-puff-delay",style:{animationDelay:`${e*1.1+.3}s`}})]},s))]})}function J0(s,e,t,i,o,a){const c=[],u=o*2;for(let f=0;f<u;f++){const h=f/u*Math.PI*2-Math.PI/2,p=Math.PI/u*a,m=f%2===0?t:i;c.push(`${s+Math.cos(h-p)*m},${e+Math.sin(h-p)*m}`),c.push(`${s+Math.cos(h+p)*m},${e+Math.sin(h+p)*m}`)}return`M ${c[0]} L ${c.slice(1).join(" L ")} Z`}const Fi=720,Ln=496,us=1440,fs=800,nr=130,p1=[[72,44,1.5,0],[180,88,1,1],[252,28,1.8,2],[360,72,.8,0],[432,115,1.2,1],[504,38,1,2],[612,60,1.4,0],[684,95,.8,1],[756,22,1.6,2],[828,82,1,0],[900,48,1.2,1],[972,118,.9,2],[1044,35,1.5,0],[1116,75,1.1,1],[1188,28,1.7,2],[1332,55,1,0],[108,162,1,1],[288,188,.8,2],[468,172,1.3,0],[648,195,1,1],[828,168,.9,2],[1008,190,1.4,0],[1188,178,1.1,1],[1368,195,.8,2],[36,215,.7,0],[216,238,1.2,1],[396,222,.8,2],[576,245,1,0],[756,230,1.3,1],[936,248,.7,2],[1116,225,1.1,0],[1296,240,.9,1],[144,285,.8,2],[432,298,1,0],[720,278,.6,1],[1008,292,.9,2],[1296,285,1.1,0],[288,322,.7,1],[864,318,.8,2],[1440,310,.9,0]],m1=Array.from({length:18},(s,e)=>{const t=((e+1)/19)**.6;return Ln+(fs-Ln)*t}),lg=Array.from({length:23},(s,e)=>({x1:Fi,y1:Ln,x2:e/22*us,y2:fs})),g1=Array.from({length:22},(s,e)=>{const t=((e+1)/23)**.65,i=Ln-nr+t*nr,o=1.2+e*.28;return{y:i,thick:o}}),x1=["sw-star-a","sw-star-b","sw-star-c"];function v1(){return S.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none",style:{zIndex:0},children:[S.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(180deg,
          #080015 0%,
          #120330 18%,
          #1e0852 34%,
          #350a6e 48%,
          #5c0a80 59%,
          #9a1278 68%,
          #d02268 77%,
          #ee3268 86%,
          #ff4878 95%,
          #ff6090 100%)`}}),S.jsxs("svg",{className:"absolute inset-0 w-full h-full",viewBox:`0 0 ${us} ${fs}`,preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[S.jsxs("defs",{children:[S.jsxs("radialGradient",{id:"swSunGrad",cx:"50%",cy:"50%",r:"50%",children:[S.jsx("stop",{offset:"0%",stopColor:"#fff8e8"}),S.jsx("stop",{offset:"22%",stopColor:"#ffe060"}),S.jsx("stop",{offset:"50%",stopColor:"#ff8030"}),S.jsx("stop",{offset:"80%",stopColor:"#ff2d78"}),S.jsx("stop",{offset:"100%",stopColor:"#aa0a60"})]}),S.jsxs("radialGradient",{id:"swSunGlow",cx:"50%",cy:"80%",r:"50%",children:[S.jsx("stop",{offset:"0%",stopColor:"#ff2d78",stopOpacity:"0.5"}),S.jsx("stop",{offset:"50%",stopColor:"#cc44ff",stopOpacity:"0.15"}),S.jsx("stop",{offset:"100%",stopColor:"#cc44ff",stopOpacity:"0"})]}),S.jsxs("linearGradient",{id:"swGridH",x1:"0",y1:Ln,x2:"0",y2:fs,gradientUnits:"userSpaceOnUse",children:[S.jsx("stop",{offset:"0%",stopColor:"#ff2d78",stopOpacity:"0.9"}),S.jsx("stop",{offset:"100%",stopColor:"#ff2d78",stopOpacity:"0.2"})]}),S.jsxs("linearGradient",{id:"swGridV",x1:"0",y1:Ln,x2:"0",y2:fs,gradientUnits:"userSpaceOnUse",children:[S.jsx("stop",{offset:"0%",stopColor:"#44ddff",stopOpacity:"0.7"}),S.jsx("stop",{offset:"100%",stopColor:"#aa44ff",stopOpacity:"0.15"})]}),S.jsx("clipPath",{id:"swSunClip",children:S.jsx("rect",{x:Fi-nr-4,y:0,width:nr*2+8,height:Ln+2})}),S.jsxs("filter",{id:"swGlow",children:[S.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),S.jsxs("feMerge",{children:[S.jsx("feMergeNode",{in:"blur"}),S.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),S.jsxs("filter",{id:"swGlowSoft",children:[S.jsx("feGaussianBlur",{stdDeviation:"8",result:"blur"}),S.jsxs("feMerge",{children:[S.jsx("feMergeNode",{in:"blur"}),S.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),p1.map(([s,e,t,i],o)=>S.jsx("circle",{cx:s,cy:e,r:t,fill:o%7===0?"#ccddff":o%5===0?"#ffccee":"#ffffff",opacity:.35+o%4*.12,className:x1[i]},o)),S.jsx("ellipse",{cx:Fi,cy:Ln,rx:nr*2.6,ry:nr*1.2,fill:"url(#swSunGlow)",className:"sw-glow-pulse"}),S.jsx("circle",{cx:Fi,cy:Ln,r:nr,fill:"url(#swSunGrad)",clipPath:"url(#swSunClip)"}),g1.map(({y:s,thick:e},t)=>S.jsx("line",{x1:Fi-nr-2,y1:s,x2:Fi+nr+2,y2:s,stroke:"#080015",strokeWidth:e,clipPath:"url(#swSunClip)",opacity:.92},t)),S.jsx("line",{x1:0,y1:Ln,x2:us,y2:Ln,stroke:"#ff2d78",strokeWidth:3,opacity:.9,filter:"url(#swGlow)"}),S.jsx("line",{x1:0,y1:Ln,x2:us,y2:Ln,stroke:"#ffaacc",strokeWidth:.6,opacity:.7}),lg.map((s,e)=>{const t=e===0||e===lg.length-1;return S.jsx("line",{x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2,stroke:"url(#swGridV)",strokeWidth:t?1.2:.7,opacity:.65},e)}),m1.map((s,e)=>{const t=(s-Ln)/(fs-Ln),i=Math.max(0,Fi-Fi*t*1.15),o=Math.min(us,Fi+(us-Fi)*t*1.15);return S.jsx("line",{x1:i,y1:s,x2:o,y2:s,stroke:"url(#swGridH)",strokeWidth:.6+t*2,opacity:.45+t*.4},e)}),S.jsx("rect",{x:0,y:fs-4,width:us,height:4,fill:"url(#swGridH)",opacity:.4})]}),S.jsx("div",{className:"absolute inset-0 sw-scanlines"}),S.jsx("div",{className:"absolute left-0 right-0 h-px sw-scan-sweep",style:{background:"rgba(255,45,120,0.25)",boxShadow:"0 0 6px rgba(255,45,120,0.4)"}}),S.jsx("div",{className:"absolute top-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg, transparent, #cc44ff 25%, #ff2d78 50%, #cc44ff 75%, transparent)",boxShadow:"0 0 12px rgba(204,68,255,0.7), 0 0 24px rgba(255,45,120,0.3)"}}),S.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg, transparent, #44ddff 25%, #aa44ff 50%, #44ddff 75%, transparent)",boxShadow:"0 0 12px rgba(68,221,255,0.7)"}}),S.jsx("div",{className:"absolute top-0 bottom-0 left-0 w-px",style:{background:"linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)",opacity:.3}}),S.jsx("div",{className:"absolute top-0 bottom-0 right-0 w-px",style:{background:"linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)",opacity:.3}}),S.jsx("div",{className:"absolute top-0 left-0",style:{width:32,height:32,borderTop:"1px solid rgba(204,68,255,0.6)",borderLeft:"1px solid rgba(204,68,255,0.6)"}}),S.jsx("div",{className:"absolute top-0 right-0",style:{width:32,height:32,borderTop:"1px solid rgba(204,68,255,0.6)",borderRight:"1px solid rgba(204,68,255,0.6)"}}),S.jsx("div",{className:"absolute bottom-0 left-0",style:{width:32,height:32,borderBottom:"1px solid rgba(68,221,255,0.6)",borderLeft:"1px solid rgba(68,221,255,0.6)"}}),S.jsx("div",{className:"absolute bottom-0 right-0",style:{width:32,height:32,borderBottom:"1px solid rgba(68,221,255,0.6)",borderRight:"1px solid rgba(68,221,255,0.6)"}}),S.jsx("div",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 tracking-widest sw-flicker",style:{fontFamily:"'Audiowide', sans-serif",color:"#ff2d78",letterSpacing:"0.55em",textTransform:"uppercase",fontSize:"10px",opacity:.22},children:"PICELL · 3D"})]})}const Mc={synthwave:{id:"synthwave",name:"SynthWave",colors:{background:"#0d0221",surface:"#150a2d",surfaceAlt:"#1e0f3c",border:"#5a1a9a",accent:"#ff2d78",accentHover:"#ff5590",text:"#f4d0ff",textMuted:"#6a40a0",canvasBg:"#0a0118"},fontFamily:"'Audiowide', sans-serif",sceneBackground:"#080015",PainterBackground:v1},steampunk:{id:"steampunk",name:"Steampunk",colors:{background:"#1a1208",surface:"#2d2010",surfaceAlt:"#3d2e18",border:"#7a5c2e",accent:"#c8860a",accentHover:"#e8a820",text:"#e8d5a0",textMuted:"#8a7050",canvasBg:"#241a0c"},fontFamily:"'Special Elite', serif",sceneBackground:"#0e0a04",PainterBackground:u1},cyberpunk:{id:"cyberpunk",name:"Cyberpunk",colors:{background:"#080010",surface:"#110022",surfaceAlt:"#1a0030",border:"#5500aa",accent:"#cc00ff",accentHover:"#ee44ff",text:"#e0c0ff",textMuted:"#7040a0",canvasBg:"#0c0018"},fontFamily:"'Orbitron', sans-serif",sceneBackground:"#050008",PainterBackground:_1},blueprint:{id:"blueprint",name:"Blueprint",colors:{background:"#0a1628",surface:"#0d1f3c",surfaceAlt:"#122848",border:"#2a4a7f",accent:"#4d9fff",accentHover:"#80bbff",text:"#c8dff8",textMuted:"#4a6a9a",canvasBg:"#08121e"},fontFamily:"'Share Tech Mono', monospace",sceneBackground:"#061020",PainterBackground:y1},watercolor:{id:"watercolor",name:"Watercolor",colors:{background:"#f5f0e8",surface:"#ede5d8",surfaceAlt:"#e8ddd0",border:"#c0a880",accent:"#b05030",accentHover:"#d06040",text:"#2a1a10",textMuted:"#8a6848",canvasBg:"#ede5d8"},fontFamily:"'Caveat', cursive",sceneBackground:"#f0ebe0",PainterBackground:S1}};function hf(s){return Mc[s]??Mc.synthwave}function ex(s){const e=document.documentElement;Object.entries(s.colors).forEach(([t,i])=>{e.style.setProperty(`--color-${t}`,i)}),e.style.setProperty("--font-family",s.fontFamily)}function _1(){return S.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:[S.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 30% 50%, rgba(80,0,160,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(0,200,255,0.1) 0%, transparent 50%)"}}),S.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[S.jsx("defs",{children:S.jsx("pattern",{id:"cybGrid",width:"30",height:"30",patternUnits:"userSpaceOnUse",children:S.jsx("path",{d:"M 30 0 L 0 0 0 30",fill:"none",stroke:"rgba(85,0,170,0.2)",strokeWidth:"0.5"})})}),S.jsx("rect",{width:"100%",height:"100%",fill:"url(#cybGrid)"}),[.15,.35,.6,.8].map((s,e)=>S.jsx("line",{x1:"0",y1:`${s*100}%`,x2:"100%",y2:`${s*100}%`,stroke:e%2===0?"rgba(204,0,255,0.12)":"rgba(0,200,255,0.08)",strokeWidth:"1"},e))]}),S.jsx("div",{className:"absolute top-0 left-0 right-0 h-px opacity-60",style:{background:"linear-gradient(90deg, transparent, #cc00ff, #00ccff, transparent)"}}),S.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px opacity-40",style:{background:"linear-gradient(90deg, transparent, #cc00ff, transparent)"}}),S.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-15 tracking-widest",style:{fontFamily:"'Orbitron', sans-serif",color:"#cc00ff",letterSpacing:"0.5em"},children:"PICELL3D"})]})}function y1(){return S.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:S.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[S.jsxs("defs",{children:[S.jsx("pattern",{id:"bpSmall",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:S.jsx("path",{d:"M 20 0 L 0 0 0 20",fill:"none",stroke:"rgba(45,100,180,0.3)",strokeWidth:"0.5"})}),S.jsx("pattern",{id:"bpLarge",width:"100",height:"100",patternUnits:"userSpaceOnUse",children:S.jsx("path",{d:"M 100 0 L 0 0 0 100",fill:"none",stroke:"rgba(45,100,180,0.6)",strokeWidth:"1"})})]}),S.jsx("rect",{width:"100%",height:"100%",fill:"url(#bpSmall)"}),S.jsx("rect",{width:"100%",height:"100%",fill:"url(#bpLarge)"}),[[15,15],[85,15],[15,85],[85,85],[50,50]].map(([s,e],t)=>S.jsxs("g",{transform:`translate(${s}%,${e}%)`,children:[S.jsx("line",{x1:"-8",y1:"0",x2:"8",y2:"0",stroke:"rgba(77,159,255,0.4)",strokeWidth:"1"}),S.jsx("line",{x1:"0",y1:"-8",x2:"0",y2:"8",stroke:"rgba(77,159,255,0.4)",strokeWidth:"1"}),S.jsx("circle",{r:"3",fill:"none",stroke:"rgba(77,159,255,0.3)",strokeWidth:"0.5"})]},t)),S.jsx("rect",{x:"10",y:"10",width:"180",height:"40",fill:"none",stroke:"rgba(77,159,255,0.2)",strokeWidth:"1"}),S.jsx("text",{x:"20",y:"30",fill:"rgba(77,159,255,0.25)",fontSize:"8",fontFamily:"'Share Tech Mono', monospace",children:"PICELL3D — PIXEL ART TO 3D CONVERTER"}),S.jsx("text",{x:"20",y:"42",fill:"rgba(77,159,255,0.2)",fontSize:"7",fontFamily:"'Share Tech Mono', monospace",children:"SCALE: 1:1  UNITS: PX  REV: MVP"})]})})}function S1(){return S.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:[S.jsx("div",{className:"absolute inset-0",style:{background:`
          radial-gradient(ellipse at 20% 30%, rgba(180,120,60,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(80,120,180,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(200,160,100,0.05) 0%, transparent 70%)
        `}}),S.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[S.jsx("ellipse",{cx:"15%",cy:"20%",rx:"120",ry:"80",fill:"rgba(180,120,80,0.06)"}),S.jsx("ellipse",{cx:"85%",cy:"75%",rx:"150",ry:"100",fill:"rgba(80,130,200,0.05)"}),S.jsx("ellipse",{cx:"50%",cy:"10%",rx:"200",ry:"40",fill:"rgba(160,100,60,0.04)"}),[...Array(8)].map((s,e)=>S.jsx("line",{x1:"0",y1:`${(e+1)*12}%`,x2:"100%",y2:`${(e+1)*12}%`,stroke:"rgba(160,120,80,0.08)",strokeWidth:"0.5",strokeDasharray:"4 8"},`h${e}`))]}),[{top:"-6px",left:"30%",rotate:"-8deg"},{top:"-6px",right:"25%",rotate:"5deg"},{bottom:"-6px",left:"40%",rotate:"3deg"}].map((s,e)=>S.jsx("div",{className:"absolute w-12 h-5 opacity-20",style:{...s,transform:`rotate(${s.rotate})`,background:"rgba(200,180,120,0.6)",borderRadius:"1px"}},e)),S.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-20",style:{fontFamily:"'Caveat', cursive",color:"#b05030",fontSize:"16px"},children:"Picell3D"})]})}const cg=Object.freeze(Object.defineProperty({__proto__:null,THEMES:Mc,applyTheme:ex,getTheme:hf},Symbol.toStringTag,{value:"Module"}));function M1(){const{setActiveTool:s,undo:e,redo:t,toggleGrid:i}=Ye();_e.useEffect(()=>{function o(a){if(!(a.target.tagName==="INPUT"||a.target.tagName==="TEXTAREA")){if(a.ctrlKey||a.metaKey){a.key==="z"&&(a.preventDefault(),e()),a.key==="y"&&(a.preventDefault(),t()),a.key==="Z"&&(a.preventDefault(),t());return}switch(a.key.toLowerCase()){case"p":s("pencil");break;case"e":s("eraser");break;case"f":s("fill");break;case"m":s("material");break;case"r":s("rect");break;case"c":s("circle");break;case"l":s("line");break;case"g":i();break}}}return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[s,e,t,i])}const E1=[{label:"8×8",w:8,h:8},{label:"16×16",w:16,h:16},{label:"32×32",w:32,h:32},{label:"48×48",w:48,h:48},{label:"64×64",w:64,h:64},{label:"128×64",w:128,h:64},{label:"128×128",w:128,h:128}];function w1({onClose:s}){const{canvasWidth:e,canvasHeight:t,resizeCanvas:i}=Ye(),[o,a]=_e.useState(e),[c,u]=_e.useState(t);function f(){const y=Math.max(4,Math.min(256,parseInt(o)||e)),w=Math.max(4,Math.min(256,parseInt(c)||t));i(y,w),s()}function h(y){a(y.w),u(y.h)}const p=o>e,m=c>t,x=o===e&&c===t;return S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.6)"},onClick:y=>{y.target===y.currentTarget&&s()},children:S.jsxs("div",{className:"panel-riveted relative flex flex-col gap-4 p-5 rounded-lg border border-border shadow-brass w-80",style:{background:"var(--color-surface)"},children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-2 text-sm font-theme text-text tracking-wide",children:[S.jsx(H0,{size:15,className:"text-accent"}),"Canvas Size"]}),S.jsx("button",{className:"text-text-muted hover:text-text transition-colors",onClick:s,children:S.jsx(xs,{size:16})})]}),S.jsxs("div",{className:"flex items-center gap-2 text-xs text-text-muted",children:[S.jsxs("span",{className:"font-mono",children:[e,"×",t]}),S.jsx(z_,{size:12}),S.jsxs("span",{className:`font-mono font-medium ${x?"text-text-muted":"text-accent"}`,children:[Math.max(4,Math.min(256,parseInt(o)||e)),"×",Math.max(4,Math.min(256,parseInt(c)||t))]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-xs text-text-muted uppercase tracking-wide mb-2",children:"Presets"}),S.jsx("div",{className:"grid grid-cols-4 gap-1",children:E1.map(y=>{const w=y.w===e&&y.h===t,E=y.w===o&&y.h===c;return S.jsx("button",{className:`text-xs py-1 px-1 rounded border transition-colors ${E?"border-accent bg-accent/20 text-accent":w?"border-border/80 text-text":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,onClick:()=>h(y),children:y.label},y.label)})})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-xs text-text-muted uppercase tracking-wide mb-2",children:"Custom"}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsxs("div",{className:"flex-1",children:[S.jsx("label",{className:"text-xs text-text-muted block mb-1",children:"Width"}),S.jsx("input",{type:"number",min:4,max:256,value:o,onChange:y=>a(parseInt(y.target.value)||4),className:`w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent`})]}),S.jsx(xs,{size:12,className:"text-text-muted mt-4 flex-shrink-0"}),S.jsxs("div",{className:"flex-1",children:[S.jsx("label",{className:"text-xs text-text-muted block mb-1",children:"Height"}),S.jsx("input",{type:"number",min:4,max:256,value:c,onChange:y=>u(parseInt(y.target.value)||4),className:`w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent`})]})]})]}),S.jsx("div",{className:"text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5",style:{background:"color-mix(in srgb, var(--color-background) 60%, transparent)"},children:p||m?"Growing: existing content will be centered.":x?"Select a new size to resize the canvas.":"Shrinking: content is cropped from the right and bottom."}),S.jsxs("div",{className:"flex gap-2 justify-end pt-1",children:[S.jsx("button",{className:"text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors",onClick:s,children:"Cancel"}),S.jsx("button",{className:"btn-brass text-xs",disabled:x,onClick:f,style:{opacity:x?.5:1},children:"Apply"})]})]})})}function T1(s,e,t,i="fit"){return new Promise((o,a)=>{const c=URL.createObjectURL(s),u=new Image;u.onload=()=>{const f=document.createElement("canvas");f.width=e,f.height=t;const h=f.getContext("2d");h.clearRect(0,0,e,t);const p=u.naturalWidth,m=u.naturalHeight,x=p/m,y=e/t;if(i==="fit")if(x>y){const _=e/x;h.drawImage(u,0,(t-_)/2,e,_)}else{const _=t*x;h.drawImage(u,(e-_)/2,0,_,t)}else if(i==="fill"){let _=0,v=0,b=p,N=m;x>y?(b=m*y,_=(p-b)/2):(N=p/y,v=(m-N)/2),h.drawImage(u,_,v,b,N,0,0,e,t)}else h.drawImage(u,0,0,e,t);const{data:w}=h.getImageData(0,0,e,t),E=Array.from({length:t},(_,v)=>Array.from({length:e},(b,N)=>{const T=(v*e+N)*4;return w[T+3]<16?null:"#"+w[T].toString(16).padStart(2,"0")+w[T+1].toString(16).padStart(2,"0")+w[T+2].toString(16).padStart(2,"0")}));URL.revokeObjectURL(c),o(E)},u.onerror=()=>{URL.revokeObjectURL(c),a(new Error("Failed to load image"))},u.src=c})}function b1(s){return new Promise((e,t)=>{const i=URL.createObjectURL(s),o=new Image;o.onload=()=>e({src:i,naturalWidth:o.naturalWidth,naturalHeight:o.naturalHeight}),o.onerror=()=>{URL.revokeObjectURL(i),t(new Error("Failed to load image"))},o.src=i})}const A1=[{id:"fit",label:"Fit"},{id:"fill",label:"Fill"},{id:"stretch",label:"Stretch"}];function C1({onClose:s}){const{canvasWidth:e,canvasHeight:t,depthDimension:i,setReferenceImage:o}=Ye(),[a,c]=_e.useState("pixelart"),[u,f]=_e.useState(null),[h,p]=_e.useState(null),[m,x]=_e.useState("fit"),[y,w]=_e.useState(40),[E,_]=_e.useState(!1),v=_e.useRef(null);async function b(C){if(C){p(C);try{const P=await b1(C);f(P)}catch{}}}async function N(){if(h){_(!0);try{const C=await T1(h,e,t,m),{layers:P,activeLayerId:k,depthDimension:I}=Ye.getState(),A=P.findIndex(te=>te.id===k);if(A<0)return;const O=Math.floor(I/2),Q=P[A];Ye.getState().pushUndo();const H=Q.voxels.map((te,V)=>te.map((re,j)=>{var Te;const F=(Te=C[V])==null?void 0:Te[j];if(!F)return re;const $=[...re];return $[O]=F,$})),ne=[...P];ne[A]={...Q,voxels:H},Ye.setState({layers:ne});const oe=[...new Set(C.flat().filter(Boolean))],{addToPalette:le}=Ye.getState();oe.forEach(le),s()}finally{_(!1)}}}function T(){if(!u)return;const C=u.naturalWidth/u.naturalHeight,P=t,k=Math.min(e,P*C);o({src:u.src,x:(e-k)/2,y:0,width:k,height:P,opacity:y/100}),s()}const D=Math.floor(i/2);return S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.75)"},onClick:C=>C.target===C.currentTarget&&s(),children:S.jsxs("div",{className:"w-96 rounded-lg border border-border shadow-2xl overflow-hidden",style:{background:"var(--color-surface)"},children:[S.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border",children:[S.jsx("span",{className:"text-sm font-theme text-text",children:"Import Image"}),S.jsx("button",{onClick:s,className:"text-text-muted hover:text-text text-xl leading-none",children:"×"})]}),S.jsx("div",{className:"flex border-b border-border",children:[{id:"pixelart",Icon:G0,label:"Pixel Art"},{id:"reference",Icon:uc,label:"Reference"}].map(({id:C,Icon:P,label:k})=>S.jsxs("button",{onClick:()=>c(C),className:`flex items-center gap-1.5 px-4 py-2 text-xs border-b-2 transition-colors ${a===C?"border-accent text-accent":"border-transparent text-text-muted hover:text-text"}`,children:[S.jsx(P,{size:11})," ",k]},C))}),S.jsxs("div",{className:"p-4 flex flex-col gap-4",children:[S.jsxs("div",{className:"flex flex-col items-center justify-center rounded border-2 border-dashed cursor-pointer transition-colors",style:{borderColor:u?"var(--color-accent)":"var(--color-border)",background:"color-mix(in srgb, var(--color-background) 70%, transparent)",minHeight:120},onClick:()=>{var C;return(C=v.current)==null?void 0:C.click()},children:[u?S.jsx("img",{src:u.src,alt:"preview",className:"max-h-28 max-w-full object-contain rounded",style:{imageRendering:"pixelated"}}):S.jsxs(S.Fragment,{children:[S.jsx(Jy,{size:22,className:"text-text-muted mb-2"}),S.jsx("span",{className:"text-xs text-text-muted",children:"Click to select image"}),S.jsx("span",{className:"text-xs text-text-muted opacity-50 mt-0.5",children:"PNG · JPG · GIF · WebP"})]}),S.jsx("input",{ref:v,type:"file",accept:"image/*",className:"hidden",onChange:C=>{var P;return b((P=C.target.files)==null?void 0:P[0])}})]}),a==="pixelart"&&S.jsxs("div",{className:"flex flex-col gap-3",children:[S.jsxs("div",{children:[S.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide mb-1.5 block",children:"Scale Mode"}),S.jsx("div",{className:"grid grid-cols-3 gap-1",children:A1.map(({id:C,label:P})=>S.jsx("button",{onClick:()=>x(C),className:`text-xs py-1 rounded border transition-colors ${m===C?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:P},C))})]}),S.jsxs("p",{className:"text-xs text-text-muted opacity-60 leading-relaxed",children:["Painted onto active layer at depth center (z=",D,"). Canvas: ",e,"×",t,"."]})]}),a==="reference"&&S.jsxs("div",{className:"flex flex-col gap-3",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[S.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Opacity"}),S.jsxs("span",{className:"text-xs font-mono text-accent",children:[y,"%"]})]}),S.jsx("input",{type:"range",min:5,max:90,value:y,onChange:C=>w(Number(C.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}})]}),S.jsx("p",{className:"text-xs text-text-muted opacity-60 leading-relaxed",children:"Overlay on the canvas. Drag to reposition, drag corners to resize."})]}),S.jsxs("div",{className:"flex gap-2 justify-end pt-1",children:[S.jsx("button",{onClick:s,className:"text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors",children:"Cancel"}),S.jsx("button",{onClick:a==="pixelart"?N:T,disabled:!u||E,className:"btn-brass text-xs px-3 py-1.5 disabled:opacity-40 disabled:cursor-not-allowed",children:E?"Importing…":"Import"})]})]})]})})}function ug({value:s,onChange:e}){return S.jsx("button",{role:"switch","aria-checked":s,onClick:()=>e(!s),style:{width:36,height:20,borderRadius:10,padding:2,background:s?"var(--color-accent)":"var(--color-border)",transition:"background .2s",flexShrink:0,display:"flex",alignItems:"center"},children:S.jsx("div",{style:{width:16,height:16,borderRadius:"50%",background:"#fff",transform:s?"translateX(16px)":"translateX(0)",transition:"transform .2s",flexShrink:0,boxShadow:"0 1px 3px rgba(0,0,0,.4)"}})})}function rr({label:s,hint:e,children:t}){return S.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-border/40",children:[S.jsxs("div",{className:"flex flex-col gap-0.5",children:[S.jsx("span",{className:"text-sm text-text",children:s}),e&&S.jsx("span",{className:"text-xs text-text-muted opacity-60",children:e})]}),S.jsx("div",{className:"flex items-center gap-2 ml-4 flex-shrink-0",children:t})]})}function vs({title:s,children:e}){return S.jsxs("div",{className:"mb-6",children:[S.jsx("div",{className:"text-xs uppercase tracking-widest text-text-muted mb-1 pb-1",children:s}),e]})}function dg({value:s,onChange:e,min:t=1,max:i=256,step:o=1}){return S.jsx("input",{type:"number",min:t,max:i,step:o,value:s,onChange:a=>e(Math.max(t,Math.min(i,Number(a.target.value)||t))),className:"w-16 text-center text-xs font-mono rounded border border-border text-text bg-transparent outline-none focus:border-accent transition-colors py-1"})}function tx({options:s,value:e,onChange:t}){return S.jsx("div",{className:"flex rounded border border-border overflow-hidden",children:s.map(({id:i,Icon:o,label:a})=>S.jsxs("button",{onClick:()=>t(i),title:a,className:`flex items-center gap-1 px-2 py-1 text-xs transition-colors ${e===i?"bg-accent/20 text-accent border-r border-border last:border-r-0":"text-text-muted hover:text-text border-r border-border last:border-r-0"}`,children:[S.jsx(o,{size:11}),S.jsx("span",{children:a})]},i))})}function R1(){const{showGrid:s,toggleGrid:e,showDepthText:t,setShowDepthText:i,viewMode:o,setViewMode:a,pixelSize:c,setPixelSize:u}=Ye();return S.jsxs(S.Fragment,{children:[S.jsxs(vs,{title:"Canvas View",children:[S.jsx(rr,{label:"Show grid",hint:"Grid lines on the 2D canvas",children:S.jsx(ug,{value:s,onChange:e})}),S.jsx(rr,{label:"Depth labels",hint:"Show depth offset number on each painted pixel",children:S.jsx(ug,{value:t,onChange:i})})]}),S.jsxs(vs,{title:"Default Layout",children:[S.jsx(rr,{label:"View mode",hint:"Starting layout on app load",children:S.jsx(tx,{value:o,onChange:a,options:[{id:"canvas-only",Icon:X0,label:"2D"},{id:"split",Icon:V0,label:"Split"},{id:"preview-only",Icon:ms,label:"3D"}]})}),S.jsx(rr,{label:"Zoom level",hint:`Current: ${c}px per cell`,children:S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("button",{onClick:()=>u(c-2),className:"w-6 h-6 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors text-sm",children:"−"}),S.jsx("span",{className:"text-xs font-mono text-accent w-8 text-center",children:c}),S.jsx("button",{onClick:()=>u(c+2),className:"w-6 h-6 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors text-sm",children:"+"})]})})]})]})}function P1(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,resizeCanvas:i,setDepthDimension:o}=Ye(),[a,c]=_e.useState(s),[u,f]=_e.useState(e);function h(){(a!==s||u!==e)&&i(a,u)}const p=[4,5,8,16,24,32];return S.jsxs(S.Fragment,{children:[S.jsx(vs,{title:"Canvas Size",children:S.jsx(rr,{label:"Width × Height",hint:"Resize the current canvas (content is preserved)",children:S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx(dg,{value:a,onChange:c,min:4,max:256}),S.jsx("span",{className:"text-text-muted text-xs",children:"×"}),S.jsx(dg,{value:u,onChange:f,min:4,max:256}),S.jsx("button",{onClick:h,className:"text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-accent hover:border-accent transition-colors",children:"Apply"})]})})}),S.jsxs(vs,{title:"Depth Dimension",children:[S.jsx(rr,{label:"Depth (Z)",hint:"Number of voxel layers along the depth axis",children:S.jsx("div",{className:"flex items-center gap-1 flex-wrap justify-end",children:p.map(m=>S.jsx("button",{onClick:()=>o(m),className:`text-xs px-1.5 py-0.5 rounded border transition-colors ${t===m?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:m},m))})}),S.jsx(rr,{label:"",hint:"",children:S.jsxs("div",{className:"w-full flex flex-col gap-1",style:{minWidth:180},children:[S.jsx("input",{type:"range",min:4,max:128,value:t,onChange:m=>o(parseInt(m.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}}),S.jsxs("div",{className:"flex justify-between text-xs text-text-muted",children:[S.jsx("span",{children:"4"}),S.jsx("span",{className:"text-accent font-mono",children:t}),S.jsx("span",{children:"128"})]})]})})]})]})}function N1(){const{paintDepth:s,setPaintDepth:e,paintDirection:t,setPaintDirection:i,depthDimension:o}=Ye(),a=Math.ceil(o/2);return S.jsx(S.Fragment,{children:S.jsxs(vs,{title:"Brush",children:[S.jsx(rr,{label:"Paint depth",hint:"Number of voxel layers painted per stroke from front/back view",children:S.jsx("div",{className:"flex flex-col gap-1",style:{minWidth:180},children:S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("input",{type:"range",min:1,max:a,value:s,onChange:c=>e(parseInt(c.target.value)),className:"flex-1 cursor-pointer",style:{accentColor:"var(--color-accent)"}}),S.jsx("span",{className:"text-xs font-mono text-accent w-5 text-right",children:s})]})})}),S.jsx(rr,{label:"Paint direction",hint:"Which direction from center to extend the brush",children:S.jsx(tx,{value:t,onChange:i,options:[{id:"front",Icon:dc,label:"← Front"},{id:"both",Icon:dc,label:"↔ Both"},{id:"back",Icon:dc,label:"Back →"}]})})]})})}function L1({onClose:s}){const{clearCanvas:e,resizeCanvas:t,setDepthDimension:i,setPaintDepth:o,setPaintDirection:a,setViewMode:c,setPixelSize:u,toggleGrid:f,showGrid:h,setShowDepthText:p}=Ye(),[m,x]=_e.useState(null);function y(_,v){m===_?(v(),x(null)):x(_)}function w(){t(32,32),i(5),o(1),a("both"),c("split"),u(14),h||f(),p(!0),x(null)}const E=({id:_,label:v,sublabel:b,action:N})=>S.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-border/40",children:[S.jsxs("div",{className:"flex flex-col gap-0.5",children:[S.jsx("span",{className:"text-sm text-text",children:v}),b&&S.jsx("span",{className:"text-xs text-text-muted opacity-60",children:b})]}),S.jsx("button",{onClick:()=>y(_,N),className:`text-xs px-3 py-1.5 rounded border transition-colors ${m===_?"border-red-500 bg-red-950 text-red-400":"border-border text-text-muted hover:border-red-700 hover:text-red-400"}`,children:m===_?"Confirm":"Reset"})]});return S.jsxs(S.Fragment,{children:[S.jsxs(vs,{title:"Canvas",children:[S.jsx(E,{id:"clear",label:"Clear canvas",sublabel:"Erase all painted voxels on the active layer",action:e}),S.jsx(E,{id:"size",label:"Reset canvas size",sublabel:"Set canvas back to 32×32×5",action:()=>{t(32,32),i(5)}})]}),S.jsx(vs,{title:"Settings",children:S.jsx(E,{id:"all",label:"Reset all settings",sublabel:"Restore display, canvas and painting settings to defaults",action:w})}),m&&S.jsxs("p",{className:"text-xs text-text-muted opacity-60 mt-1",children:["Click the button again to confirm.",S.jsx("button",{onClick:()=>x(null),className:"ml-2 text-accent hover:underline",children:"Cancel"})]})]})}const fg=[{id:"display",label:"Display",Icon:j0},{id:"canvas",label:"Canvas",Icon:hy},{id:"painting",label:"Painting",Icon:W0},{id:"reset",label:"Reset",Icon:Fy}];function D1({onClose:s}){const[e,t]=_e.useState("display"),i=fg.find(o=>o.id===e);return S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.75)"},onClick:o=>o.target===o.currentTarget&&s(),children:S.jsxs("div",{className:"flex rounded-xl border border-border shadow-2xl overflow-hidden",style:{width:580,maxHeight:"85vh",background:"var(--color-surface)"},children:[S.jsxs("div",{className:"flex flex-col flex-shrink-0 py-3",style:{width:160,background:"color-mix(in srgb, var(--color-background) 55%, transparent)",borderRight:"1px solid var(--color-border)"},children:[S.jsx("div",{className:"px-4 pb-3 pt-1",children:S.jsx("span",{className:"text-xs uppercase tracking-widest font-theme",style:{color:"var(--color-accent)",opacity:.8},children:"Settings"})}),fg.map(({id:o,label:a,Icon:c})=>S.jsxs("button",{onClick:()=>t(o),className:"flex items-center gap-2.5 px-4 py-2.5 text-xs transition-colors text-left relative",style:{color:e===o?"var(--color-accent)":"var(--color-text-muted)",background:e===o?"color-mix(in srgb, var(--color-accent) 10%, transparent)":"transparent",borderRight:e===o?"2px solid var(--color-accent)":"2px solid transparent"},children:[S.jsx(c,{size:13}),a]},o))]}),S.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[S.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 flex-shrink-0",style:{borderBottom:"1px solid var(--color-border)"},children:[S.jsxs("div",{className:"flex items-center gap-2",children:[i&&S.jsx(i.Icon,{size:14,className:"text-accent"}),S.jsx("span",{className:"text-sm font-theme text-text",children:i==null?void 0:i.label})]}),S.jsx("button",{onClick:s,className:"text-text-muted hover:text-text transition-colors",children:S.jsx(xs,{size:15})})]}),S.jsxs("div",{className:"flex-1 overflow-y-auto px-5 py-4",style:{minHeight:0},children:[e==="display"&&S.jsx(R1,{}),e==="canvas"&&S.jsx(P1,{}),e==="painting"&&S.jsx(N1,{}),e==="reset"&&S.jsx(L1,{onClose:s})]})]})]})})}const I1=[{id:"front",label:"Front"},{id:"back",label:"Back"},{id:"left",label:"Left"},{id:"right",label:"Right"},{id:"top",label:"Top"},{id:"bottom",label:"Bottom"}],U1=[4,8,16,32];function k1({onClose:s}){const{layers:e,canvasWidth:t,canvasHeight:i,depthDimension:o}=Ye(),[a,c]=_e.useState(["front"]),[u,f]=_e.useState(8),[h,p]=_e.useState("transparent"),[m,x]=_e.useState("#000000"),y=_e.useRef(null);function w(v){c(b=>b.includes(v)?b.length>1?b.filter(N=>N!==v):b:[...b,v])}function E(v){var I;const b=ni(e,t,i,o),N=u,T=a.map(A=>{const{w:O,h:Q}=gs(A,t,i,o);return{id:A,cols:O,rows:Q,pw:O*N,ph:Q*N}}),D=T.reduce((A,O)=>A+O.pw,0),C=Math.max(...T.map(A=>A.ph));v.width=D,v.height=C;const P=v.getContext("2d");P.clearRect(0,0,D,C),h==="color"&&(P.fillStyle=m,P.fillRect(0,0,D,C));let k=0;for(const{id:A,cols:O,rows:Q,pw:H,ph:ne}of T){const oe=nh(b,A,t,i,o),le=Math.floor((C-ne)/2);for(let te=0;te<Q;te++)for(let V=0;V<O;V++){const re=(I=oe[te])==null?void 0:I[V];!re||re==="transparent"||(P.fillStyle=re,P.fillRect(k+V*N,le+te*N,N,N))}k+=H}}_e.useEffect(()=>{y.current&&E(y.current)});function _(){const v=document.createElement("canvas");E(v);const b=v.toDataURL("image/png"),N=document.createElement("a");N.href=b,N.download=a.length===1?`picell3d-${a[0]}.png`:"picell3d-spritesheet.png",N.click(),s()}return S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.75)"},onClick:v=>v.target===v.currentTarget&&s(),children:S.jsxs("div",{className:"rounded-lg border border-border shadow-2xl overflow-hidden",style:{background:"var(--color-surface)",width:540},children:[S.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border",children:[S.jsx("span",{className:"text-sm font-theme text-text",children:"Export PNG"}),S.jsx("button",{onClick:s,className:"text-text-muted hover:text-text transition-colors",children:S.jsx(xs,{size:16})})]}),S.jsxs("div",{className:"flex gap-4 p-4",children:[S.jsxs("div",{className:"flex flex-col gap-4",style:{width:180},children:[S.jsxs("div",{children:[S.jsx("div",{className:"text-xs uppercase tracking-wide text-text-muted mb-2",children:"Views"}),S.jsx("div",{className:"grid grid-cols-2 gap-1",children:I1.map(({id:v,label:b})=>S.jsx("button",{onClick:()=>w(v),className:`text-xs py-1.5 px-2 rounded border transition-colors text-left ${a.includes(v)?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/40"}`,children:b},v))})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-xs uppercase tracking-wide text-text-muted mb-2",children:"Pixel Scale"}),S.jsx("div",{className:"grid grid-cols-4 gap-1",children:U1.map(v=>S.jsxs("button",{onClick:()=>f(v),className:`text-xs py-1 rounded border transition-colors ${u===v?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,children:[v,"x"]},v))})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-xs uppercase tracking-wide text-text-muted mb-2",children:"Background"}),S.jsxs("div",{className:"flex flex-col gap-1",children:[[{id:"transparent",label:"Transparent"},{id:"color",label:"Color"}].map(({id:v,label:b})=>S.jsx("button",{onClick:()=>p(v),className:`text-xs py-1.5 px-2 rounded border transition-colors text-left ${h===v?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/40"}`,children:b},v)),h==="color"&&S.jsx("input",{type:"color",value:m,onChange:v=>x(v.target.value),className:"w-full h-7 rounded border border-border cursor-pointer mt-0.5"})]})]}),S.jsx("div",{className:"text-xs text-text-muted opacity-50 leading-relaxed",children:a.length>1?`${a.length} views → spritesheet`:"Single view export"})]}),S.jsxs("div",{className:"flex flex-col gap-2 flex-1 min-w-0",children:[S.jsx("div",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Preview"}),S.jsx("div",{className:"flex-1 flex items-center justify-center rounded border border-border overflow-hidden",style:{minHeight:200,background:h==="color"?m:"repeating-conic-gradient(#2a2a2a 0% 25%, #1a1a1a 0% 50%) 0 0 / 14px 14px"},children:S.jsx("canvas",{ref:y,style:{imageRendering:"pixelated",maxWidth:"100%",maxHeight:260}})})]})]}),S.jsxs("div",{className:"flex justify-end gap-2 px-4 py-3 border-t border-border",children:[S.jsx("button",{onClick:s,className:"text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors",children:"Cancel"}),S.jsxs("button",{onClick:_,className:"btn-brass flex items-center gap-1.5 text-xs px-3 py-1.5",children:[S.jsx(th,{size:13}),a.length>1?"Export Spritesheet":"Export PNG"]})]})]})})}const hg=[{id:"pencil",Icon:W0,label:"Pencil (P)",key:"P",group:"draw"},{id:"eraser",Icon:ey,label:"Eraser (E)",key:"E",group:"draw"},{id:"fill",Icon:yy,label:"Fill (F)",key:"F",group:"draw"},{id:"material",Icon:Xy,label:"Material (M)",key:"M",group:"draw"},{id:"rect",Icon:Dy,label:"Rectangle (R)",key:"R",group:"shape"},{id:"circle",Icon:$_,label:"Circle (C)",key:"C",group:"shape"},{id:"ellipse",Icon:Q_,label:"Ellipse",group:"shape"},{id:"line",Icon:my,label:"Line (L)",key:"L",group:"shape"}],F1=[{id:"canvas-only",Icon:X0,label:"2D only"},{id:"split",Icon:V0,label:"Split view"},{id:"preview-only",Icon:ms,label:"3D only"}];function O1({onExport:s,onRender:e}){const{activeTool:t,setActiveTool:i,pixelSize:o,setPixelSize:a,toggleGrid:c,showGrid:u,clearCanvas:f,undo:h,redo:p,viewMode:m,setViewMode:x}=Ye(),[y,w]=_e.useState(!1),[E,_]=_e.useState(!1),[v,b]=_e.useState(!1),[N,T]=_e.useState(!1);return S.jsxs(S.Fragment,{children:[y&&S.jsx(w1,{onClose:()=>w(!1)}),E&&S.jsx(C1,{onClose:()=>_(!1)}),v&&S.jsx(D1,{onClose:()=>b(!1)}),N&&S.jsx(k1,{onClose:()=>T(!1)}),S.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 border-b border-border",style:{background:"var(--color-surfaceAlt)"},children:[S.jsxs("div",{className:"flex items-center gap-2 mr-3 pr-3 border-r border-border",children:[S.jsx("span",{className:"font-theme text-text text-sm tracking-wider",children:"Picell3D"}),S.jsx("button",{onClick:()=>b(!0),title:"Settings",className:"flex items-center justify-center w-6 h-6 rounded border border-transparent text-text-muted hover:text-accent hover:border-accent/50 transition-colors",children:S.jsx(Vy,{size:13})})]}),S.jsx("div",{className:"flex items-center gap-0.5 mr-1 pr-1 border-r border-border",children:hg.filter(D=>D.group==="draw").map(D=>S.jsx(pg,{Icon:D.Icon,label:D.label,active:t===D.id,onClick:()=>i(D.id)},D.id))}),S.jsx("div",{className:"flex items-center gap-0.5 mr-2 pr-2 border-r border-border",children:hg.filter(D=>D.group==="shape").map(D=>S.jsx(pg,{Icon:D.Icon,label:D.label,active:t===D.id,onClick:()=>i(D.id)},D.id))}),S.jsxs("div",{className:"flex items-center gap-1 mr-2 pr-2 border-r border-border",children:[S.jsx("button",{className:"text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors",onClick:()=>a(o-2),title:"Zoom out",children:"−"}),S.jsxs("span",{className:"text-xs text-text-muted font-mono w-8 text-center",children:[o,"px"]}),S.jsx("button",{className:"text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors",onClick:()=>a(o+2),title:"Zoom in",children:"+"})]}),S.jsxs("button",{className:`flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors mr-2 ${u?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,onClick:c,title:"Toggle grid (G)",children:[S.jsx(ay,{size:12})," Grid"]}),S.jsx("div",{className:"flex items-center gap-0.5 mr-2 pr-2 border-r border-border",children:F1.map(({id:D,Icon:C,label:P})=>S.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center border transition-colors ${m===D?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,onClick:()=>x(D),title:P,children:S.jsx(C,{size:14})},D))}),S.jsxs("button",{className:"flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors mr-2",onClick:()=>w(!0),title:"Canvas size",children:[S.jsx(H0,{size:12}),S.jsx("span",{children:"Size"})]}),S.jsxs("button",{className:"flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors mr-2",onClick:()=>_(!0),title:"Import image",children:[S.jsx(cy,{size:12}),S.jsx("span",{children:"Import"})]}),S.jsxs("div",{className:"flex items-center gap-0.5 mr-auto",children:[S.jsx(bd,{Icon:Zy,label:"Undo (Ctrl+Z)",onClick:h}),S.jsx(bd,{Icon:Uy,label:"Redo (Ctrl+Y)",onClick:p}),S.jsx(bd,{Icon:$0,label:"Clear canvas",onClick:f,danger:!0})]}),S.jsxs("div",{className:"flex items-center gap-1.5 ml-auto",children:[S.jsxs("button",{className:"btn-brass flex items-center gap-1.5",onClick:()=>T(!0),title:"Export as PNG",children:[S.jsx(th,{size:14}),S.jsx("span",{children:"Export PNG"})]}),S.jsxs("button",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-medium transition-all",style:{borderColor:"var(--color-accent)",color:"var(--color-accent)",background:"color-mix(in srgb, var(--color-accent) 12%, transparent)"},onClick:e,title:"Open Render Studio",children:[S.jsx(F_,{size:14}),S.jsx("span",{children:"Render"})]})]})]})]})}function pg({Icon:s,label:e,active:t,onClick:i}){return S.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center transition-all border ${t?"border-accent bg-accent/20 text-accent shadow-glow-accent":"border-transparent text-text-muted hover:border-border hover:text-text hover:bg-surface-alt"}`,title:e,onClick:i,children:S.jsx(s,{size:16})})}function bd({Icon:s,label:e,onClick:t,danger:i}){return S.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center border border-transparent transition-colors ${i?"text-text-muted hover:border-red-900 hover:bg-red-950 hover:text-red-400":"text-text-muted hover:text-text hover:bg-surface-alt hover:border-border"}`,title:e,onClick:t,children:S.jsx(s,{size:16})})}function z1(){const{activeTheme:s,setActiveTheme:e}=Ye();return S.jsxs("div",{className:"flex items-center gap-1.5 px-2",children:[S.jsx("span",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Theme"}),S.jsx("div",{className:"flex gap-1",children:Object.values(Mc).map(t=>S.jsx("button",{className:`text-xs px-2 py-0.5 rounded border transition-all ${s===t.id?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,onClick:()=>e(t.id),title:t.name,children:t.name},t.id))})]})}function B1(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,activeTool:i,activeView:o,paintDepth:a}=Ye(),c=["P: Pencil","E: Eraser","F: Fill","G: Grid","Ctrl+Z: Undo"];return S.jsxs("div",{className:"flex items-center justify-between px-3 py-0.5 border-t border-border text-xs text-text-muted",style:{background:"var(--color-surface)"},children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsxs("span",{className:"font-mono",children:[s,"×",e,"×",t]}),S.jsx("span",{className:"capitalize",children:i}),S.jsx("span",{className:"text-accent capitalize",children:o}),S.jsxs("span",{children:["depth: ",a]})]}),S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx(z1,{}),S.jsx("div",{className:"hidden lg:flex gap-3 opacity-50",children:c.map(u=>S.jsx("span",{children:u},u))})]})]})}function V1(s,e,t,i){const o=[];let a=Math.abs(t-s),c=s<t?1:-1,u=-Math.abs(i-e),f=e<i?1:-1,h=a+u;for(;o.push({col:s,row:e}),!(s===t&&e===i);){const p=2*h;p>=u&&(h+=u,s+=c),p<=a&&(h+=a,e+=f)}return o}function H1(s){const e=_e.useRef(!1),t=_e.useRef(null),i=_e.useRef(!1),o=_e.useRef(!1);_e.useEffect(()=>{const p=x=>{x.key==="Alt"&&(x.preventDefault(),i.current=!0),x.key==="Shift"&&(o.current=!0)},m=x=>{x.key==="Alt"&&(i.current=!1),x.key==="Shift"&&(o.current=!1)};return window.addEventListener("keydown",p),window.addEventListener("keyup",m),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",m)}},[]);const a=_e.useCallback(p=>{const{pixelSize:m}=Ye.getState(),x=s.current.getBoundingClientRect(),y=Math.floor((p.clientX-x.left)/m),w=Math.floor((p.clientY-x.top)/m);return{col:y,row:w}},[]),c=_e.useCallback(({col:p,row:m})=>{const x=Ye.getState(),{activeTool:y,currentColor:w,activeView:E,canvasWidth:_,canvasHeight:v,depthDimension:b,sideDrawMode:N}=x,{w:T,h:D}=gs(E,_,v,b);if(p<0||m<0||p>=T||m>=D)return;const C=i.current&&E!=="front"?N==="edit"?"draw":"edit":null;switch(y){case"pencil":x.paintAt(p,m,w,{sideDrawModeOverride:C});break;case"eraser":x.paintAt(p,m,"transparent",{sideDrawModeOverride:C,fullDepthErase:o.current});break;case"material":x.paintMaterialAt(p,m);break}},[]),u=_e.useCallback(p=>{var y;if(p.button!==0)return;try{(y=s.current)==null||y.setPointerCapture(p.pointerId)}catch{}const m=Ye.getState(),x=a(p);if(m.activeTool==="fill"){m.floodFillVoxel(x.col,x.row,m.currentColor);return}e.current=!0,t.current=x,(m.activeTool==="pencil"||m.activeTool==="eraser"||m.activeTool==="material")&&m.pushUndo(),c(x)},[a,c]),f=_e.useCallback(p=>{if(!e.current)return;const m=a(p),x=t.current;if(!x||m.col===x.col&&m.row===x.row)return;const y=V1(x.col,x.row,m.col,m.row);for(const w of y)c(w);t.current=m},[a,c]),h=_e.useCallback(()=>{e.current=!1,t.current=null},[]);return{onPointerDown:u,onPointerMove:f,onPointerUp:h}}function G1(s,e,t,i){const o=[];let a=Math.abs(t-s),c=s<t?1:-1,u=-Math.abs(i-e),f=e<i?1:-1,h=a+u;for(;o.push([s,e]),!(s===t&&e===i);){const p=2*h;p>=u&&(h+=u,s+=c),p<=a&&(h+=a,e+=f)}return o}function Ic(){const s=new Set,e=[];return{add(t,i){const o=`${t},${i}`;s.has(o)||(s.add(o),e.push({col:t,row:i}))},result:e}}function j1(s){if(s.length<2)return[];const{add:e,result:t}=Ic();for(let i=0;i<s.length-1;i++){const[o,a]=s[i],[c,u]=s[i+1];for(const[f,h]of G1(o,a,c,u))e(f,h)}return t}function W1(s,e,t,i,o=!1){const{add:a,result:c}=Ic(),u=Math.min(s,t),f=Math.max(s,t),h=Math.min(e,i),p=Math.max(e,i);if(o)for(let m=h;m<=p;m++)for(let x=u;x<=f;x++)a(x,m);else{for(let m=u;m<=f;m++)a(m,h),a(m,p);for(let m=h+1;m<p;m++)a(u,m),a(f,m)}return c}function X1(s,e,t,i=!1){const{add:o,result:a}=Ic();if(t=Math.max(0,Math.round(t)),i){for(let p=-t;p<=t;p++)for(let m=-t;m<=t;m++)m*m+p*p<=t*t&&o(s+m,e+p);return a}let c=0,u=t,f=3-2*t;const h=(p,m)=>{o(s+p,e+m),o(s-p,e+m),o(s+p,e-m),o(s-p,e-m),o(s+m,e+p),o(s-m,e+p),o(s+m,e-p),o(s-m,e-p)};for(;u>=c;)h(c,u),c++,f<0?f+=4*c+6:(u--,f+=4*(c-u)+10);return a}function Y1(s,e,t,i,o=!1){const{add:a,result:c}=Ic();if(t=Math.max(0,Math.round(t)),i=Math.max(0,Math.round(i)),t===0||i===0){if(t===0)for(let w=e-i;w<=e+i;w++)a(s,w);else for(let w=s-t;w<=s+t;w++)a(w,e);return c}if(o){for(let w=-i;w<=i;w++)for(let E=-t;E<=t;E++)E*E/(t*t)+w*w/(i*i)<=1&&a(s+E,e+w);return c}const u=(w,E)=>{a(s+w,e+E),a(s-w,e+E),a(s+w,e-E),a(s-w,e-E)};let f=0,h=i,p=0,m=2*t*t*h,x=i*i-t*t*i+.25*t*t;for(;p<m;)u(f,h),f++,p+=2*i*i,x<0?x+=p+i*i:(h--,m-=2*t*t,x+=p-m+i*i);let y=i*i*(f+.5)*(f+.5)+t*t*(h-1)*(h-1)-t*t*i*i;for(;h>=0;)u(f,h),h--,m-=2*t*t,y>0?y+=t*t-m:(f++,p+=2*i*i,y+=p-m+t*t);return c}function Ad(s,e,t=!1){if(e.length<2)return[];const[i,o]=e;switch(s){case"line":return j1(e.map(a=>[a.col,a.row]));case"rect":return W1(i.col,i.row,o.col,o.row,t);case"circle":{const a=Math.round(Math.hypot(o.col-i.col,o.row-i.row));return X1(i.col,i.row,a,t)}case"ellipse":return Y1(i.col,i.row,Math.abs(o.col-i.col),Math.abs(o.row-i.row),t);default:return[]}}const nx=new Set(["rect","circle","ellipse","line"]),Ul=10;function mg(s,e,t){const i=e.current.getBoundingClientRect(),o=s.clientX-i.left,a=s.clientY-i.top;return{col:Math.floor(o/t),row:Math.floor(a/t),px:o,py:a}}function $1(s){const e=_e.useRef("idle"),t=_e.useRef([]),i=_e.useRef(null),[o,a]=_e.useState([]),[c,u]=_e.useState({points:[],isEditing:!1}),[f,h]=_e.useState(!1),p=_e.useCallback(()=>h(T=>!T),[]);function m(){const T=Ye.getState().activeTool,D=t.current;a(D.length>=2?Ad(T,D,x.current):[]),u(T==="line"?{points:[...D],isEditing:e.current==="editing"}:{points:[],isEditing:!1})}const x=_e.useRef(f);_e.useEffect(()=>{x.current=f},[f]);function y(T){const D=Ye.getState().activeTool,C=t.current;a(C.length>=2?Ad(D,C,T):[])}function w(T,D,C){if(e.current!=="editing")return null;const P=t.current;for(let k=0;k<P.length;k++){const I=(P[k].col+.5)*C,A=(P[k].row+.5)*C;if(Math.abs(T-I)<=Ul&&Math.abs(D-A)<=Ul)return{type:"vertex",index:k}}for(let k=0;k<P.length-1;k++){const I=(P[k].col+P[k+1].col+1)/2*C,A=(P[k].row+P[k+1].row+1)/2*C;if(Math.abs(T-I)<=Ul&&Math.abs(D-A)<=Ul)return{type:"midpoint",index:k}}return null}const E=_e.useCallback(()=>{const T=Ye.getState(),D=t.current;if(D.length<2){e.current="idle",t.current=[],i.current=null,a([]),u({points:[],isEditing:!1});return}const C=Ad(T.activeTool,D,x.current);T.pushUndo();for(const{col:P,row:k}of C)T.paintAt(P,k,T.currentColor);e.current="idle",t.current=[],i.current=null,a([]),u({points:[],isEditing:!1})},[]),_=_e.useCallback(()=>{e.current="idle",t.current=[],i.current=null,a([]),u({points:[],isEditing:!1})},[]);_e.useEffect(()=>{function T(D){D.target.tagName==="INPUT"||D.target.tagName==="TEXTAREA"||(e.current==="editing"?(D.key==="Enter"&&(D.preventDefault(),E()),D.key==="Escape"&&(D.preventDefault(),_())):e.current==="drawing"&&D.key==="Escape"&&(D.preventDefault(),_()))}return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[E,_]);const v=_e.useCallback(T=>{var O,Q;if(T.button!==0)return;const{pixelSize:D,activeTool:C}=Ye.getState();if(!nx.has(C))return;const{col:P,row:k,px:I,py:A}=mg(T,s,D);if(e.current==="editing"){const H=w(I,A,D);if(H){if(H.type==="midpoint"){const ne=t.current,oe=[...ne.slice(0,H.index+1),{col:P,row:k},...ne.slice(H.index+1)];t.current=oe,i.current={type:"vertex",index:H.index+1}}else i.current=H;try{(O=s.current)==null||O.setPointerCapture(T.pointerId)}catch{}m();return}E()}try{(Q=s.current)==null||Q.setPointerCapture(T.pointerId)}catch{}e.current="drawing",t.current=[{col:P,row:k},{col:P,row:k}],i.current=null,m()},[s,E]),b=_e.useCallback(T=>{const{pixelSize:D}=Ye.getState(),{col:C,row:P}=mg(T,s,D);if(e.current==="drawing"){const k=t.current;t.current=[k[0],{col:C,row:P}],m();return}if(e.current==="editing"&&i.current){const{type:k,index:I}=i.current;if(k==="vertex"){const A=[...t.current];A[I]={col:C,row:P},t.current=A,m()}}},[s]),N=_e.useCallback(T=>{const{activeTool:D}=Ye.getState();if(e.current==="drawing"){D==="line"?(e.current="editing",i.current=null,m()):E();return}e.current==="editing"&&(i.current=null)},[E]);return _e.useEffect(()=>{e.current!=="idle"&&y(f)},[f]),{previewPixels:o,lineState:c,shapeFilled:f,toggleFilled:p,handlers:{onPointerDown:v,onPointerMove:b,onPointerUp:N},cancel:_,commit:E,isEditing:c.isEditing}}function q1({pixelSize:s}){const{referenceImage:e,setReferenceImage:t,clearReferenceImage:i}=Ye(),o=_e.useRef(null);if(!e)return null;const{src:a,x:c,y:u,width:f,height:h,opacity:p}=e,m=c*s,x=u*s,y=f*s,w=h*s;function E(D){D.stopPropagation(),D.currentTarget.setPointerCapture(D.pointerId),o.current={mode:"move",sx:D.clientX,sy:D.clientY,ox:c,oy:u}}function _(D,C){D.stopPropagation(),D.currentTarget.setPointerCapture(D.pointerId),o.current={mode:"resize",corner:C,sx:D.clientX,sy:D.clientY,ox:c,oy:u,ow:f,oh:h}}function v(D){if(!o.current)return;const C=(D.clientX-o.current.sx)/s,P=(D.clientY-o.current.sy)/s,k=o.current;if(k.mode==="move"){t({...e,x:k.ox+C,y:k.oy+P});return}const I=k.ow/k.oh;let A=k.ow,O=k.oh,Q=k.ox,H=k.oy;k.corner==="br"?(A=Math.max(2,k.ow+C),O=A/I):k.corner==="bl"?(A=Math.max(2,k.ow-C),O=A/I,Q=k.ox+k.ow-A):k.corner==="tr"?(A=Math.max(2,k.ow+C),O=A/I,H=k.oy+k.oh-O):k.corner==="tl"&&(A=Math.max(2,k.ow-C),O=A/I,Q=k.ox+k.ow-A,H=k.oy+k.oh-O),t({...e,x:Q,y:H,width:A,height:O})}function b(){o.current=null}const N={position:"absolute",width:10,height:10,background:"var(--color-accent)",border:"2px solid #fff",borderRadius:2,zIndex:2},T=[{id:"tl",style:{top:-5,left:-5,cursor:"nwse-resize"}},{id:"tr",style:{top:-5,right:-5,cursor:"nesw-resize"}},{id:"bl",style:{bottom:-5,left:-5,cursor:"nesw-resize"}},{id:"br",style:{bottom:-5,right:-5,cursor:"nwse-resize"}}];return S.jsxs("div",{style:{position:"absolute",left:m,top:x,width:y,height:w,zIndex:12,touchAction:"none"},onPointerMove:v,onPointerUp:b,onPointerLeave:b,children:[S.jsx("img",{src:a,draggable:!1,onPointerDown:E,style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:p,objectFit:"fill",cursor:"move",userSelect:"none",imageRendering:"pixelated",display:"block"}}),S.jsx("div",{style:{position:"absolute",inset:0,border:"1px dashed var(--color-accent)",opacity:.7,pointerEvents:"none"}}),T.map(({id:D,style:C})=>S.jsx("div",{style:{...N,...C},onPointerDown:P=>_(P,D)},D)),S.jsxs("div",{style:{position:"absolute",top:-30,left:0,display:"flex",alignItems:"center",gap:6,background:"color-mix(in srgb, var(--color-surface) 95%, transparent)",border:"1px solid var(--color-border)",borderRadius:4,padding:"3px 8px",whiteSpace:"nowrap",fontSize:10,color:"var(--color-text-muted)"},onPointerDown:D=>D.stopPropagation(),children:[S.jsx(dc,{size:9,style:{flexShrink:0}}),S.jsx("input",{type:"range",min:5,max:90,value:Math.round(p*100),onChange:D=>t({...e,opacity:D.target.value/100}),style:{width:72,accentColor:"var(--color-accent)",cursor:"pointer"},title:"Opacity"}),S.jsxs("span",{style:{fontFamily:"monospace",color:"var(--color-accent)",minWidth:28},children:[Math.round(p*100),"%"]}),S.jsx("button",{onClick:i,title:"Remove reference",style:{color:"var(--color-text-muted)",lineHeight:1,padding:"0 2px"},className:"hover:text-red-400",children:S.jsx(xs,{size:11})})]})]})}function Cd(s){return getComputedStyle(document.documentElement).getPropertyValue(s).trim()}const K1={front:"← left   right →",back:"← right  left →",left:"← front  back →",right:"← back   front →",top:"← left   right →",bottom:"← left   right →"};function Z1(){const s=_e.useRef(null),e=_e.useRef(null),t=_e.useRef(null),{layers:i,pixelSize:o,canvasWidth:a,canvasHeight:c,depthDimension:u,showGrid:f,showDepthText:h,activeTool:p,activeView:m,currentColor:x}=Ye(),y=u,{view2d:w,depthMap:E}=_e.useMemo(()=>{const A=ni(i,a,c,y);return{view2d:nh(A,m,a,c,y),depthMap:c1(A,m,a,c,y)}},[i,m,a,c,y]),{w:_,h:v}=gs(m,a,c,y),b=H1(t),N=$1(t),T=nx.has(p);function D(A){T?N.handlers.onPointerDown(A):b.onPointerDown(A)}function C(A){T?N.handlers.onPointerMove(A):b.onPointerMove(A)}function P(A){T?N.handlers.onPointerUp(A):b.onPointerUp(A)}_e.useEffect(()=>{var V,re,j,F,$,Te,J;const A=s.current;if(!A||!w.length)return;const O=A.getContext("2d"),Q=_*o,H=v*o;A.width=Q,A.height=H;const ne=Cd("--color-surface")||"#1a130a",oe=Cd("--color-canvasBg")||"#241a0c",le=Cd("--color-border")||"#7a5c2e";for(let ae=0;ae<v;ae++)for(let ge=0;ge<_;ge++){const he=ge*o,ye=ae*o,Ce=((V=w[ae])==null?void 0:V[ge])??"transparent";O.fillStyle=Ce==="transparent"?(ge+ae)%2===0?ne:oe:Ce,O.fillRect(he,ye,o,o)}if(E.length)for(let he=0;he<v;he++)for(let ye=0;ye<_;ye++){const Ce=(re=E[he])==null?void 0:re[ye];if(Ce==null)continue;const Ve=ye*o,ct=he*o,gt=(j=E[he])==null?void 0:j[ye-1],bt=(F=E[he])==null?void 0:F[ye+1],q=($=E[he-1])==null?void 0:$[ye],Wt=(Te=E[he+1])==null?void 0:Te[ye],ft=(Qe,At,Xe,z,L)=>{const W=O.createLinearGradient(Qe,At,Xe,z);W.addColorStop(0,`rgba(0,0,0,${L.toFixed(3)})`),W.addColorStop(1,"rgba(0,0,0,0)"),O.fillStyle=W,O.fillRect(Ve,ct,o,o)},ut=o*.6;gt!=null&&gt<Ce&&ft(Ve,ct,Ve+ut,ct,Math.min((Ce-gt)/y,1)*.65),q!=null&&q<Ce&&ft(Ve,ct,Ve,ct+ut,Math.min((Ce-q)/y,1)*.65),bt!=null&&bt<Ce&&ft(Ve+o,ct,Ve+o-ut,ct,Math.min((Ce-bt)/y,1)*.65),Wt!=null&&Wt<Ce&&ft(Ve,ct+o,Ve,ct+o-ut,Math.min((Ce-Wt)/y,1)*.65)}if(f&&o>=5){O.strokeStyle=le+"44",O.lineWidth=.5;for(let ae=0;ae<=_;ae++)O.beginPath(),O.moveTo(ae*o,0),O.lineTo(ae*o,H),O.stroke();for(let ae=0;ae<=v;ae++)O.beginPath(),O.moveTo(0,ae*o),O.lineTo(Q,ae*o),O.stroke()}if(h&&o>=10&&E.length){const ae=Math.max(7,Math.floor(o*.38));O.font=`bold ${ae}px monospace`,O.textAlign="center",O.textBaseline="middle";for(let ge=0;ge<v;ge++)for(let he=0;he<_;he++){const ye=(J=E[ge])==null?void 0:J[he];if(ye==null)continue;const Ce=he*o+o/2,Ve=ge*o+o/2,ct=ye>0?`+${ye}`:String(ye);O.fillStyle="rgba(0,0,0,0.55)",O.fillText(ct,Ce+.5,Ve+.5),O.fillStyle="rgba(255,255,255,0.85)",O.fillText(ct,Ce,Ve)}}const te=K1[m];te&&Q>60&&(O.font=`${Math.max(8,o*.55)}px monospace`,O.fillStyle=le+"aa",O.textAlign="left",O.textBaseline="top",O.fillText(te,4,4))},[w,E,_,v,o,f,h,m]);const{previewPixels:k,lineState:I}=N;return _e.useEffect(()=>{const A=e.current;if(!A)return;const O=_*o,Q=v*o;A.width=O,A.height=Q;const H=A.getContext("2d");if(H.clearRect(0,0,O,Q),k.length>0){H.fillStyle=x+"b0";for(const{col:ne,row:oe}of k)H.fillRect(ne*o,oe*o,o,o)}if(I.isEditing&&I.points.length>=2){const ne=I.points,oe=Math.max(5,Math.round(o*.55)),le=Math.max(4,Math.round(o*.38));H.strokeStyle="rgba(255,255,255,0.5)",H.lineWidth=1.5,H.setLineDash([3,3]),H.beginPath(),H.moveTo((ne[0].col+.5)*o,(ne[0].row+.5)*o);for(let te=1;te<ne.length;te++)H.lineTo((ne[te].col+.5)*o,(ne[te].row+.5)*o);H.stroke(),H.setLineDash([]),H.strokeStyle="rgba(255,255,255,0.7)",H.fillStyle="rgba(30,30,60,0.75)",H.lineWidth=1;for(let te=0;te<ne.length-1;te++){const V=(ne[te].col+ne[te+1].col+1)/2*o,re=(ne[te].row+ne[te+1].row+1)/2*o;H.beginPath(),H.moveTo(V,re-le),H.lineTo(V+le,re),H.lineTo(V,re+le),H.lineTo(V-le,re),H.closePath(),H.fill(),H.stroke()}for(let te=0;te<ne.length;te++){const V=(ne[te].col+.5)*o,re=(ne[te].row+.5)*o,j=te===0||te===ne.length-1?oe:oe*.8;H.fillStyle=x,H.strokeStyle="#fff",H.lineWidth=1.5,H.fillRect(V-j/2,re-j/2,j,j),H.strokeRect(V-j/2,re-j/2,j,j)}O>80&&(H.font=`${Math.max(9,o*.45)}px monospace`,H.fillStyle="rgba(255,255,255,0.5)",H.textAlign="right",H.textBaseline="bottom",H.fillText("Enter ↵  commit · Esc  cancel",O-4,Q-4))}},[k,I,o,_,v,x]),S.jsx("div",{className:"flex items-center justify-center w-full h-full overflow-auto p-4",children:S.jsxs("div",{ref:t,className:"relative flex-shrink-0",style:{boxShadow:"0 0 0 2px var(--color-border), 0 0 0 4px var(--color-surface), 0 8px 40px rgba(0,0,0,0.9)",cursor:Q1(p,N.isEditing)},onPointerDown:D,onPointerMove:C,onPointerUp:P,onPointerLeave:A=>{T||b.onPointerUp(A)},children:[S.jsx("canvas",{ref:s,style:{width:_*o,height:v*o,imageRendering:"pixelated",display:"block"}}),S.jsx("canvas",{ref:e,style:{position:"absolute",inset:0,width:_*o,height:v*o,imageRendering:"pixelated",pointerEvents:"none"}}),S.jsx(q1,{pixelSize:o})]})})}function Q1(s,e){if(e)return"default";switch(s){case"pencil":return"crosshair";case"eraser":return"cell";case"fill":return"copy";case"rect":case"circle":case"ellipse":case"line":return"crosshair";default:return"crosshair"}}const J1="modulepreload",eS=function(s){return"/"+s},gg={},xg=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),f=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));o=c(t.map(h=>{if(h=eS(h),h in gg)return;gg[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const x=document.createElement("link");if(x.rel=p?"stylesheet":J1,p||(x.as="script"),x.crossOrigin="",x.href=h,f&&x.setAttribute("nonce",f),document.head.appendChild(x),p)return new Promise((y,w)=>{x.addEventListener("load",y),x.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return o.then(c=>{for(const u of c||[])u.status==="rejected"&&a(u.reason);return e().catch(a)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="170",go={ROTATE:0,DOLLY:1,PAN:2},ho={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tS=0,vg=1,nS=2,ix=1,iS=2,tr=3,Hr=0,Yn=1,fi=2,ar=0,xo=1,pf=2,_g=3,yg=4,rS=5,hs=100,sS=101,oS=102,aS=103,lS=104,cS=200,uS=201,dS=202,fS=203,mf=204,gf=205,hS=206,pS=207,mS=208,gS=209,xS=210,vS=211,_S=212,yS=213,SS=214,xf=0,vf=1,_f=2,Mo=3,yf=4,Sf=5,Mf=6,Ef=7,rh=0,MS=1,ES=2,lr=0,wS=1,TS=2,bS=3,rx=4,AS=5,CS=6,RS=7,sx=300,Eo=301,wo=302,wf=303,Tf=304,kc=306,Ec=1e3,Br=1001,wc=1002,gi=1003,ox=1004,va=1005,Ci=1006,hc=1007,Vr=1008,dr=1009,ax=1010,lx=1011,wa=1012,sh=1013,_s=1014,sr=1015,cr=1016,oh=1017,ah=1018,To=1020,cx=35902,ux=1021,dx=1022,pi=1023,fx=1024,hx=1025,vo=1026,bo=1027,px=1028,lh=1029,mx=1030,ch=1031,uh=1033,pc=33776,mc=33777,gc=33778,xc=33779,bf=35840,Af=35841,Cf=35842,Rf=35843,Pf=36196,Nf=37492,Lf=37496,Df=37808,If=37809,Uf=37810,kf=37811,Ff=37812,Of=37813,zf=37814,Bf=37815,Vf=37816,Hf=37817,Gf=37818,jf=37819,Wf=37820,Xf=37821,vc=36492,Yf=36494,$f=36495,gx=36283,qf=36284,Kf=36285,Zf=36286,PS=2300,NS=2301,LS=3200,DS=3201,dh=0,IS=1,ir="",Wn="srgb",Ro="srgb-linear",Fc="linear",kt="srgb",$s=7680,Sg=519,US=512,kS=513,FS=514,xx=515,OS=516,zS=517,BS=518,VS=519,Mg=35044,Eg="300 es",or=2e3,Tc=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wg=1234567;const _o=Math.PI/180,Ta=180/Math.PI;function Po(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function Tn(s,e,t){return Math.max(e,Math.min(t,s))}function fh(s,e){return(s%e+e)%e}function HS(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function GS(s,e,t){return s!==e?(t-s)/(e-s):0}function Ea(s,e,t){return(1-t)*s+t*e}function jS(s,e,t,i){return Ea(s,e,1-Math.exp(-t*i))}function WS(s,e=1){return e-Math.abs(fh(s,e*2)-e)}function XS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function YS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function $S(s,e){return s+Math.floor(Math.random()*(e-s+1))}function qS(s,e){return s+Math.random()*(e-s)}function KS(s){return s*(.5-Math.random())}function ZS(s){s!==void 0&&(wg=s);let e=wg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function QS(s){return s*_o}function JS(s){return s*Ta}function eM(s){return(s&s-1)===0&&s!==0}function tM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function nM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function iM(s,e,t,i,o){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),h=a((e+i)/2),p=c((e+i)/2),m=a((e-i)/2),x=c((e-i)/2),y=a((i-e)/2),w=c((i-e)/2);switch(o){case"XYX":s.set(u*p,f*m,f*x,u*h);break;case"YZY":s.set(f*x,u*p,f*m,u*h);break;case"ZXZ":s.set(f*m,f*x,u*p,u*h);break;case"XZX":s.set(u*p,f*w,f*y,u*h);break;case"YXY":s.set(f*y,u*p,f*w,u*h);break;case"ZYZ":s.set(f*w,f*y,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function fo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bc={DEG2RAD:_o,RAD2DEG:Ta,generateUUID:Po,clamp:Tn,euclideanModulo:fh,mapLinear:HS,inverseLerp:GS,lerp:Ea,damp:jS,pingpong:WS,smoothstep:XS,smootherstep:YS,randInt:$S,randFloat:qS,randFloatSpread:KS,seededRandom:ZS,degToRad:QS,radToDeg:JS,isPowerOfTwo:eM,ceilPowerOfTwo:tM,floorPowerOfTwo:nM,setQuaternionFromProperEuler:iM,normalize:Pn,denormalize:fo};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(e,t,i,o,a,c,u,f,h){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,h)}set(e,t,i,o,a,c,u,f,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],h=i[1],p=i[4],m=i[7],x=i[2],y=i[5],w=i[8],E=o[0],_=o[3],v=o[6],b=o[1],N=o[4],T=o[7],D=o[2],C=o[5],P=o[8];return a[0]=c*E+u*b+f*D,a[3]=c*_+u*N+f*C,a[6]=c*v+u*T+f*P,a[1]=h*E+p*b+m*D,a[4]=h*_+p*N+m*C,a[7]=h*v+p*T+m*P,a[2]=x*E+y*b+w*D,a[5]=x*_+y*N+w*C,a[8]=x*v+y*T+w*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*f+o*a*h-o*c*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=p*c-u*h,x=u*f-p*a,y=h*a-c*f,w=t*m+i*x+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=m*E,e[1]=(o*h-p*i)*E,e[2]=(u*i-o*c)*E,e[3]=x*E,e[4]=(p*t-o*f)*E,e[5]=(o*a-u*t)*E,e[6]=y*E,e[7]=(i*f-h*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*c+h*u)+c+e,-o*h,o*f,-o*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Rd.makeScale(e,t)),this}rotate(e){return this.premultiply(Rd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new yt;function vx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ac(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rM(){const s=Ac("canvas");return s.style.display="block",s}const Tg={};function _a(s){s in Tg||(Tg[s]=!0,console.warn(s))}function sM(s,e,t){return new Promise(function(i,o){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function oM(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function aM(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pt={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===kt&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===kt&&(s.r=yo(s.r),s.g=yo(s.g),s.b=yo(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ir?Fc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ur(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const bg=[.64,.33,.3,.6,.15,.06],Ag=[.2126,.7152,.0722],Cg=[.3127,.329],Rg=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pg=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pt.define({[Ro]:{primaries:bg,whitePoint:Cg,transfer:Fc,toXYZ:Rg,fromXYZ:Pg,luminanceCoefficients:Ag,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:bg,whitePoint:Cg,transfer:kt,toXYZ:Rg,fromXYZ:Pg,luminanceCoefficients:Ag,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}});let qs;class lM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=Ac("canvas")),qs.width=e.width,qs.height=e.height;const i=qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ac("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=ur(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cM=0;class hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Pd(o[c].image)):a.push(Pd(o[c]))}else a=Pd(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Pd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uM=0;class Un extends Ss{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,i=Br,o=Br,a=Ci,c=Vr,u=pi,f=dr,h=Un.DEFAULT_ANISOTROPY,p=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Po(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ec:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ec:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=sx;Un.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,i=0,o=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,h=f[0],p=f[4],m=f[8],x=f[1],y=f[5],w=f[9],E=f[2],_=f[6],v=f[10];if(Math.abs(p-x)<.01&&Math.abs(m-E)<.01&&Math.abs(w-_)<.01){if(Math.abs(p+x)<.1&&Math.abs(m+E)<.1&&Math.abs(w+_)<.1&&Math.abs(h+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(h+1)/2,T=(y+1)/2,D=(v+1)/2,C=(p+x)/4,P=(m+E)/4,k=(w+_)/4;return N>T&&N>D?N<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(N),o=C/i,a=P/i):T>D?T<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(T),i=C/o,a=k/o):D<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(D),i=P/a,o=k/a),this.set(i,o,a,t),this}let b=Math.sqrt((_-w)*(_-w)+(m-E)*(m-E)+(x-p)*(x-p));return Math.abs(b)<.001&&(b=1),this.x=(_-w)/b,this.y=(m-E)/b,this.z=(x-p)/b,this.w=Math.acos((h+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dM extends Ss{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Un(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends dM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _x extends Un{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fM extends Un{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let f=i[o+0],h=i[o+1],p=i[o+2],m=i[o+3];const x=a[c+0],y=a[c+1],w=a[c+2],E=a[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=x,e[t+1]=y,e[t+2]=w,e[t+3]=E;return}if(m!==E||f!==x||h!==y||p!==w){let _=1-u;const v=f*x+h*y+p*w+m*E,b=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const D=Math.sqrt(N),C=Math.atan2(D,v*b);_=Math.sin(_*C)/D,u=Math.sin(u*C)/D}const T=u*b;if(f=f*_+x*T,h=h*_+y*T,p=p*_+w*T,m=m*_+E*T,_===1-u){const D=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=D,h*=D,p*=D,m*=D}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],f=i[o+1],h=i[o+2],p=i[o+3],m=a[c],x=a[c+1],y=a[c+2],w=a[c+3];return e[t]=u*w+p*m+f*y-h*x,e[t+1]=f*w+p*x+h*m-u*y,e[t+2]=h*w+p*y+u*x-f*m,e[t+3]=p*w-u*m-f*x-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(i/2),p=u(o/2),m=u(a/2),x=f(i/2),y=f(o/2),w=f(a/2);switch(c){case"XYZ":this._x=x*p*m+h*y*w,this._y=h*y*m-x*p*w,this._z=h*p*w+x*y*m,this._w=h*p*m-x*y*w;break;case"YXZ":this._x=x*p*m+h*y*w,this._y=h*y*m-x*p*w,this._z=h*p*w-x*y*m,this._w=h*p*m+x*y*w;break;case"ZXY":this._x=x*p*m-h*y*w,this._y=h*y*m+x*p*w,this._z=h*p*w+x*y*m,this._w=h*p*m-x*y*w;break;case"ZYX":this._x=x*p*m-h*y*w,this._y=h*y*m+x*p*w,this._z=h*p*w-x*y*m,this._w=h*p*m+x*y*w;break;case"YZX":this._x=x*p*m+h*y*w,this._y=h*y*m+x*p*w,this._z=h*p*w-x*y*m,this._w=h*p*m-x*y*w;break;case"XZY":this._x=x*p*m-h*y*w,this._y=h*y*m-x*p*w,this._z=h*p*w+x*y*m,this._w=h*p*m+x*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],p=t[6],m=t[10],x=i+u+m;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(p-f)*y,this._y=(a-h)*y,this._z=(c-o)*y}else if(i>u&&i>m){const y=2*Math.sqrt(1+i-u-m);this._w=(p-f)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+h)/y}else if(u>m){const y=2*Math.sqrt(1+u-i-m);this._w=(a-h)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+m-i-u);this._w=(c-o)/y,this._x=(a+h)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+o*h-a*f,this._y=o*p+c*f+a*u-i*h,this._z=a*p+c*h+i*f-o*u,this._w=c*p-i*u-o*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+o*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*o+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),m=Math.sin((1-t)*p)/h,x=Math.sin(t*p)/h;return this._w=c*m+this._w*x,this._x=i*m+this._x*x,this._y=o*m+this._y*x,this._z=a*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ng.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ng.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*o-u*i),p=2*(u*t-a*o),m=2*(a*i-c*t);return this.x=t+f*h+c*m-u*p,this.y=i+f*p+u*h-a*m,this.z=o+f*m+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=o*f-a*u,this.y=a*c-i*f,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new ee,Ng=new Gr;class ba{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Ti):Ti.fromBufferAttribute(a,c),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kl.copy(i.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),Fl.subVectors(this.max,da),Ks.subVectors(e.a,da),Zs.subVectors(e.b,da),Qs.subVectors(e.c,da),Dr.subVectors(Zs,Ks),Ir.subVectors(Qs,Zs),rs.subVectors(Ks,Qs);let t=[0,-Dr.z,Dr.y,0,-Ir.z,Ir.y,0,-rs.z,rs.y,Dr.z,0,-Dr.x,Ir.z,0,-Ir.x,rs.z,0,-rs.x,-Dr.y,Dr.x,0,-Ir.y,Ir.x,0,-rs.y,rs.x,0];return!Ld(t,Ks,Zs,Qs,Fl)||(t=[1,0,0,0,1,0,0,0,1],!Ld(t,Ks,Zs,Qs,Fl))?!1:(Ol.crossVectors(Dr,Ir),t=[Ol.x,Ol.y,Ol.z],Ld(t,Ks,Zs,Qs,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Ti=new ee,kl=new ba,Ks=new ee,Zs=new ee,Qs=new ee,Dr=new ee,Ir=new ee,rs=new ee,da=new ee,Fl=new ee,Ol=new ee,ss=new ee;function Ld(s,e,t,i,o){for(let a=0,c=s.length-3;a<=c;a+=3){ss.fromArray(s,a);const u=o.x*Math.abs(ss.x)+o.y*Math.abs(ss.y)+o.z*Math.abs(ss.z),f=e.dot(ss),h=t.dot(ss),p=i.dot(ss);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const hM=new ba,fa=new ee,Dd=new ee;class Oc{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hM.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(fa,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Dd)),this.expandByPoint(fa.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new ee,Id=new ee,zl=new ee,Ur=new ee,Ud=new ee,Bl=new ee,kd=new ee;class zc{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Id.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(Id);const a=e.distanceTo(t)*.5,c=-this.direction.dot(zl),u=Ur.dot(this.direction),f=-Ur.dot(zl),h=Ur.lengthSq(),p=Math.abs(1-c*c);let m,x,y,w;if(p>0)if(m=c*f-u,x=c*u-f,w=a*p,m>=0)if(x>=-w)if(x<=w){const E=1/p;m*=E,x*=E,y=m*(m+c*x+2*u)+x*(c*m+x+2*f)+h}else x=a,m=Math.max(0,-(c*x+u)),y=-m*m+x*(x+2*f)+h;else x=-a,m=Math.max(0,-(c*x+u)),y=-m*m+x*(x+2*f)+h;else x<=-w?(m=Math.max(0,-(-c*a+u)),x=m>0?-a:Math.min(Math.max(-a,-f),a),y=-m*m+x*(x+2*f)+h):x<=w?(m=0,x=Math.min(Math.max(-a,-f),a),y=x*(x+2*f)+h):(m=Math.max(0,-(c*a+u)),x=m>0?a:Math.min(Math.max(-a,-f),a),y=-m*m+x*(x+2*f)+h);else x=c>0?-a:a,m=Math.max(0,-(c*x+u)),y=-m*m+x*(x+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),o&&o.copy(Id).addScaledVector(zl,x),y}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),o=Zi.dot(Zi)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,x=this.origin;return h>=0?(i=(e.min.x-x.x)*h,o=(e.max.x-x.x)*h):(i=(e.max.x-x.x)*h,o=(e.min.x-x.x)*h),p>=0?(a=(e.min.y-x.y)*p,c=(e.max.y-x.y)*p):(a=(e.max.y-x.y)*p,c=(e.min.y-x.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),m>=0?(u=(e.min.z-x.z)*m,f=(e.max.z-x.z)*m):(u=(e.max.z-x.z)*m,f=(e.min.z-x.z)*m),i>f||u>o)||((u>i||i!==i)&&(i=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,o,a){Ud.subVectors(t,e),Bl.subVectors(i,e),kd.crossVectors(Ud,Bl);let c=this.direction.dot(kd),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Ur.subVectors(this.origin,e);const f=u*this.direction.dot(Bl.crossVectors(Ur,Bl));if(f<0)return null;const h=u*this.direction.dot(Ud.cross(Ur));if(h<0||f+h>c)return null;const p=-u*Ur.dot(kd);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,i,o,a,c,u,f,h,p,m,x,y,w,E,_){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,h,p,m,x,y,w,E,_)}set(e,t,i,o,a,c,u,f,h,p,m,x,y,w,E,_){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=o,v[1]=a,v[5]=c,v[9]=u,v[13]=f,v[2]=h,v[6]=p,v[10]=m,v[14]=x,v[3]=y,v[7]=w,v[11]=E,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Js.setFromMatrixColumn(e,0).length(),a=1/Js.setFromMatrixColumn(e,1).length(),c=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(o),h=Math.sin(o),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const x=c*p,y=c*m,w=u*p,E=u*m;t[0]=f*p,t[4]=-f*m,t[8]=h,t[1]=y+w*h,t[5]=x-E*h,t[9]=-u*f,t[2]=E-x*h,t[6]=w+y*h,t[10]=c*f}else if(e.order==="YXZ"){const x=f*p,y=f*m,w=h*p,E=h*m;t[0]=x+E*u,t[4]=w*u-y,t[8]=c*h,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=y*u-w,t[6]=E+x*u,t[10]=c*f}else if(e.order==="ZXY"){const x=f*p,y=f*m,w=h*p,E=h*m;t[0]=x-E*u,t[4]=-c*m,t[8]=w+y*u,t[1]=y+w*u,t[5]=c*p,t[9]=E-x*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const x=c*p,y=c*m,w=u*p,E=u*m;t[0]=f*p,t[4]=w*h-y,t[8]=x*h+E,t[1]=f*m,t[5]=E*h+x,t[9]=y*h-w,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const x=c*f,y=c*h,w=u*f,E=u*h;t[0]=f*p,t[4]=E-x*m,t[8]=w*m+y,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=y*m+w,t[10]=x-E*m}else if(e.order==="XZY"){const x=c*f,y=c*h,w=u*f,E=u*h;t[0]=f*p,t[4]=-m,t[8]=h*p,t[1]=x*m+E,t[5]=c*p,t[9]=y*m-w,t[2]=w*m-y,t[6]=u*p,t[10]=E*m+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pM,e,mM)}lookAt(e,t,i){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),kr.crossVectors(i,Jn),kr.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),kr.crossVectors(i,Jn)),kr.normalize(),Vl.crossVectors(Jn,kr),o[0]=kr.x,o[4]=Vl.x,o[8]=Jn.x,o[1]=kr.y,o[5]=Vl.y,o[9]=Jn.y,o[2]=kr.z,o[6]=Vl.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],h=i[12],p=i[1],m=i[5],x=i[9],y=i[13],w=i[2],E=i[6],_=i[10],v=i[14],b=i[3],N=i[7],T=i[11],D=i[15],C=o[0],P=o[4],k=o[8],I=o[12],A=o[1],O=o[5],Q=o[9],H=o[13],ne=o[2],oe=o[6],le=o[10],te=o[14],V=o[3],re=o[7],j=o[11],F=o[15];return a[0]=c*C+u*A+f*ne+h*V,a[4]=c*P+u*O+f*oe+h*re,a[8]=c*k+u*Q+f*le+h*j,a[12]=c*I+u*H+f*te+h*F,a[1]=p*C+m*A+x*ne+y*V,a[5]=p*P+m*O+x*oe+y*re,a[9]=p*k+m*Q+x*le+y*j,a[13]=p*I+m*H+x*te+y*F,a[2]=w*C+E*A+_*ne+v*V,a[6]=w*P+E*O+_*oe+v*re,a[10]=w*k+E*Q+_*le+v*j,a[14]=w*I+E*H+_*te+v*F,a[3]=b*C+N*A+T*ne+D*V,a[7]=b*P+N*O+T*oe+D*re,a[11]=b*k+N*Q+T*le+D*j,a[15]=b*I+N*H+T*te+D*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],p=e[2],m=e[6],x=e[10],y=e[14],w=e[3],E=e[7],_=e[11],v=e[15];return w*(+a*f*m-o*h*m-a*u*x+i*h*x+o*u*y-i*f*y)+E*(+t*f*y-t*h*x+a*c*x-o*c*y+o*h*p-a*f*p)+_*(+t*h*m-t*u*y-a*c*m+i*c*y+a*u*p-i*h*p)+v*(-o*u*p-t*f*m+t*u*x+o*c*m-i*c*x+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=e[9],x=e[10],y=e[11],w=e[12],E=e[13],_=e[14],v=e[15],b=m*_*h-E*x*h+E*f*y-u*_*y-m*f*v+u*x*v,N=w*x*h-p*_*h-w*f*y+c*_*y+p*f*v-c*x*v,T=p*E*h-w*m*h+w*u*y-c*E*y-p*u*v+c*m*v,D=w*m*f-p*E*f-w*u*x+c*E*x+p*u*_-c*m*_,C=t*b+i*N+o*T+a*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=b*P,e[1]=(E*x*a-m*_*a-E*o*y+i*_*y+m*o*v-i*x*v)*P,e[2]=(u*_*a-E*f*a+E*o*h-i*_*h-u*o*v+i*f*v)*P,e[3]=(m*f*a-u*x*a-m*o*h+i*x*h+u*o*y-i*f*y)*P,e[4]=N*P,e[5]=(p*_*a-w*x*a+w*o*y-t*_*y-p*o*v+t*x*v)*P,e[6]=(w*f*a-c*_*a-w*o*h+t*_*h+c*o*v-t*f*v)*P,e[7]=(c*x*a-p*f*a+p*o*h-t*x*h-c*o*y+t*f*y)*P,e[8]=T*P,e[9]=(w*m*a-p*E*a-w*i*y+t*E*y+p*i*v-t*m*v)*P,e[10]=(c*E*a-w*u*a+w*i*h-t*E*h-c*i*v+t*u*v)*P,e[11]=(p*u*a-c*m*a-p*i*h+t*m*h+c*i*y-t*u*y)*P,e[12]=D*P,e[13]=(p*E*o-w*m*o+w*i*x-t*E*x-p*i*_+t*m*_)*P,e[14]=(w*u*o-c*E*o-w*i*f+t*E*f+c*i*_-t*u*_)*P,e[15]=(c*m*o-p*u*o+p*i*f-t*m*f-c*i*x+t*u*x)*P,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-o*f,h*f+o*u,0,h*u+o*f,p*u+i,p*f-o*c,0,h*f-o*u,p*f+o*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,p=c+c,m=u+u,x=a*h,y=a*p,w=a*m,E=c*p,_=c*m,v=u*m,b=f*h,N=f*p,T=f*m,D=i.x,C=i.y,P=i.z;return o[0]=(1-(E+v))*D,o[1]=(y+T)*D,o[2]=(w-N)*D,o[3]=0,o[4]=(y-T)*C,o[5]=(1-(x+v))*C,o[6]=(_+b)*C,o[7]=0,o[8]=(w+N)*P,o[9]=(_-b)*P,o[10]=(1-(x+E))*P,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=Js.set(o[0],o[1],o[2]).length();const c=Js.set(o[4],o[5],o[6]).length(),u=Js.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],bi.copy(this);const h=1/a,p=1/c,m=1/u;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=p,bi.elements[5]*=p,bi.elements[6]*=p,bi.elements[8]*=m,bi.elements[9]*=m,bi.elements[10]*=m,t.setFromRotationMatrix(bi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,o,a,c,u=or){const f=this.elements,h=2*a/(t-e),p=2*a/(i-o),m=(t+e)/(t-e),x=(i+o)/(i-o);let y,w;if(u===or)y=-(c+a)/(c-a),w=-2*c*a/(c-a);else if(u===Tc)y=-c/(c-a),w=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=or){const f=this.elements,h=1/(t-e),p=1/(i-o),m=1/(c-a),x=(t+e)*h,y=(i+o)*p;let w,E;if(u===or)w=(c+a)*m,E=-2*m;else if(u===Tc)w=a*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-x,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=E,f[14]=-w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Js=new ee,bi=new Bt,pM=new ee(0,0,0),mM=new ee(1,1,1),kr=new ee,Vl=new ee,Jn=new ee,Lg=new Bt,Dg=new Gr;class Pi{constructor(e=0,t=0,i=0,o=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],f=o[1],h=o[5],p=o[9],m=o[2],x=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Tn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dg.setFromEuler(this),this.setFromQuaternion(Dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gM=0;const Ig=new ee,eo=new Gr,Qi=new Bt,Hl=new ee,ha=new ee,xM=new ee,vM=new Gr,Ug=new ee(1,0,0),kg=new ee(0,1,0),Fg=new ee(0,0,1),Og={type:"added"},_M={type:"removed"},to={type:"childadded",child:null},Fd={type:"childremoved",child:null};class mn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new ee,t=new Pi,i=new Gr,o=new ee(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new yt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(Ug,e)}rotateY(e){return this.rotateOnAxis(kg,e)}rotateZ(e){return this.rotateOnAxis(Fg,e)}translateOnAxis(e,t){return Ig.copy(e).applyQuaternion(this.quaternion),this.position.add(Ig.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ug,e)}translateY(e){return this.translateOnAxis(kg,e)}translateZ(e){return this.translateOnAxis(Fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hl.copy(e):Hl.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(ha,Hl,this.up):Qi.lookAt(Hl,ha,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(Qi),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Og),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_M),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Og),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,xM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,vM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),p=c(e.images),m=c(e.shapes),x=c(e.skeletons),y=c(e.animations),w=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),x.length>0&&(i.skeletons=x),y.length>0&&(i.animations=y),w.length>0&&(i.nodes=w)}return i.object=o,i;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}mn.DEFAULT_UP=new ee(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new ee,Ji=new ee,Od=new ee,er=new ee,no=new ee,io=new ee,zg=new ee,zd=new ee,Bd=new ee,Vd=new ee,Hd=new qt,Gd=new qt,jd=new qt;class hi{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Ai.subVectors(e,t),o.cross(Ai);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Ai.subVectors(o,t),Ji.subVectors(i,t),Od.subVectors(e,t);const c=Ai.dot(Ai),u=Ai.dot(Ji),f=Ai.dot(Od),h=Ji.dot(Ji),p=Ji.dot(Od),m=c*h-u*u;if(m===0)return a.set(0,0,0),null;const x=1/m,y=(h*f-u*p)*x,w=(c*p-u*f)*x;return a.set(1-y-w,w,y)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,i,o,a,c,u,f){return this.getBarycoord(e,t,i,o,er)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,er.x),f.addScaledVector(c,er.y),f.addScaledVector(u,er.z),f)}static getInterpolatedAttribute(e,t,i,o,a,c){return Hd.setScalar(0),Gd.setScalar(0),jd.setScalar(0),Hd.fromBufferAttribute(e,t),Gd.fromBufferAttribute(e,i),jd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Hd,a.x),c.addScaledVector(Gd,a.y),c.addScaledVector(jd,a.z),c}static isFrontFacing(e,t,i,o){return Ai.subVectors(i,t),Ji.subVectors(e,t),Ai.cross(Ji).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Ai.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return hi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;no.subVectors(o,i),io.subVectors(a,i),zd.subVectors(e,i);const f=no.dot(zd),h=io.dot(zd);if(f<=0&&h<=0)return t.copy(i);Bd.subVectors(e,o);const p=no.dot(Bd),m=io.dot(Bd);if(p>=0&&m<=p)return t.copy(o);const x=f*m-p*h;if(x<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(i).addScaledVector(no,c);Vd.subVectors(e,a);const y=no.dot(Vd),w=io.dot(Vd);if(w>=0&&y<=w)return t.copy(a);const E=y*h-f*w;if(E<=0&&h>=0&&w<=0)return u=h/(h-w),t.copy(i).addScaledVector(io,u);const _=p*w-y*m;if(_<=0&&m-p>=0&&y-w>=0)return zg.subVectors(a,o),u=(m-p)/(m-p+(y-w)),t.copy(o).addScaledVector(zg,u);const v=1/(_+E+x);return c=E*v,u=x*v,t.copy(i).addScaledVector(no,c).addScaledVector(io,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function Wd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Pt.workingColorSpace){if(e=fh(e,1),t=Tn(t,0,1),i=Tn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Wd(c,a,e+1/3),this.g=Wd(c,a,e),this.b=Wd(c,a,e-1/3)}return Pt.toWorkingColorSpace(this,o),this}setStyle(e,t=Wn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const i=yx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Pt.fromWorkingColorSpace(En.copy(this),e),Math.round(Tn(En.r*255,0,255))*65536+Math.round(Tn(En.g*255,0,255))*256+Math.round(Tn(En.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(En.copy(this),t);const i=En.r,o=En.g,a=En.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const m=c-u;switch(h=p<=.5?m/(c+u):m/(2-c-u),c){case i:f=(o-a)/m+(o<a?6:0);break;case o:f=(a-i)/m+2;break;case a:f=(i-o)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Wn){Pt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,o=En.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(Gl);const i=Ea(Fr.h,Gl.h,t),o=Ea(Fr.s,Gl.s,t),a=Ea(Fr.l,Gl.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new xt;xt.NAMES=yx;let yM=0;class Ms extends Ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Po(),this.name="",this.blending=xo,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mf,this.blendDst=gf,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==Hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mf&&(i.blendSrc=this.blendSrc),this.blendDst!==gf&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ys extends Ms{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new ee,jl=new tt;class fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mg,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),i=Pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),i=Pn(i,this.array),o=Pn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),i=Pn(i,this.array),o=Pn(o,this.array),a=Pn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mg&&(e.usage=this.usage),e}}class Sx extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mx extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let SM=0;const di=new Bt,Xd=new mn,ro=new ee,ei=new ba,pa=new ba,dn=new ee;class $n extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vx(e)?Mx:Sx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new yt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,i){return di.makeTranslation(e,t,i),this.applyMatrix4(di),this}scale(e,t,i){return di.makeScale(e,t,i),this.applyMatrix4(di),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Zt(i,3))}else{for(let i=0,o=t.count;i<o;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];pa.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(ei.min,pa.min),ei.expandByPoint(dn),dn.addVectors(ei.max,pa.max),ei.expandByPoint(dn)):(ei.expandByPoint(pa.min),ei.expandByPoint(pa.max))}ei.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)dn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(dn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)dn.fromBufferAttribute(u,h),f&&(ro.fromBufferAttribute(e,h),dn.add(ro)),o=Math.max(o,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let k=0;k<i.count;k++)u[k]=new ee,f[k]=new ee;const h=new ee,p=new ee,m=new ee,x=new tt,y=new tt,w=new tt,E=new ee,_=new ee;function v(k,I,A){h.fromBufferAttribute(i,k),p.fromBufferAttribute(i,I),m.fromBufferAttribute(i,A),x.fromBufferAttribute(a,k),y.fromBufferAttribute(a,I),w.fromBufferAttribute(a,A),p.sub(h),m.sub(h),y.sub(x),w.sub(x);const O=1/(y.x*w.y-w.x*y.y);isFinite(O)&&(E.copy(p).multiplyScalar(w.y).addScaledVector(m,-y.y).multiplyScalar(O),_.copy(m).multiplyScalar(y.x).addScaledVector(p,-w.x).multiplyScalar(O),u[k].add(E),u[I].add(E),u[A].add(E),f[k].add(_),f[I].add(_),f[A].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,I=b.length;k<I;++k){const A=b[k],O=A.start,Q=A.count;for(let H=O,ne=O+Q;H<ne;H+=3)v(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const N=new ee,T=new ee,D=new ee,C=new ee;function P(k){D.fromBufferAttribute(o,k),C.copy(D);const I=u[k];N.copy(I),N.sub(D.multiplyScalar(D.dot(I))).normalize(),T.crossVectors(C,I);const O=T.dot(f[k])<0?-1:1;c.setXYZW(k,N.x,N.y,N.z,O)}for(let k=0,I=b.length;k<I;++k){const A=b[k],O=A.start,Q=A.count;for(let H=O,ne=O+Q;H<ne;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let x=0,y=i.count;x<y;x++)i.setXYZ(x,0,0,0);const o=new ee,a=new ee,c=new ee,u=new ee,f=new ee,h=new ee,p=new ee,m=new ee;if(e)for(let x=0,y=e.count;x<y;x+=3){const w=e.getX(x+0),E=e.getX(x+1),_=e.getX(x+2);o.fromBufferAttribute(t,w),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,_),p.subVectors(c,a),m.subVectors(o,a),p.cross(m),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,_),u.add(p),f.add(p),h.add(p),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(_,h.x,h.y,h.z)}else for(let x=0,y=t.count;x<y;x+=3)o.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),p.subVectors(c,a),m.subVectors(o,a),p.cross(m),i.setXYZ(x+0,p.x,p.y,p.z),i.setXYZ(x+1,p.x,p.y,p.z),i.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,m=u.normalized,x=new h.constructor(f.length*p);let y=0,w=0;for(let E=0,_=f.length;E<_;E++){u.isInterleavedBufferAttribute?y=f[E]*u.data.stride+u.offset:y=f[E]*p;for(let v=0;v<p;v++)x[w++]=h[y++]}return new fn(x,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,o=this.attributes;for(const u in o){const f=o[u],h=e(f,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let p=0,m=h.length;p<m;p++){const x=h[p],y=e(x,i);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,x=h.length;m<x;m++){const y=h[m];p.push(y.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],m=a[h];for(let x=0,y=m.length;x<y;x++)p.push(m[x].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bg=new Bt,os=new zc,Wl=new Oc,Vg=new ee,Xl=new ee,Yl=new ee,$l=new ee,Yd=new ee,ql=new ee,Hg=new ee,Kl=new ee;class In extends mn{constructor(e=new $n,t=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){ql.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=u[f],m=a[f];p!==0&&(Yd.fromBufferAttribute(m,e),c?ql.addScaledVector(Yd,p):ql.addScaledVector(Yd.sub(t),p))}t.add(ql)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(a),os.copy(e.ray).recast(e.near),!(Wl.containsPoint(os.origin)===!1&&(os.intersectSphere(Wl,Vg)===null||os.origin.distanceToSquared(Vg)>(e.far-e.near)**2))&&(Bg.copy(a).invert(),os.copy(e.ray).applyMatrix4(Bg),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,x=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let w=0,E=x.length;w<E;w++){const _=x[w],v=c[_.materialIndex],b=Math.max(_.start,y.start),N=Math.min(u.count,Math.min(_.start+_.count,y.start+y.count));for(let T=b,D=N;T<D;T+=3){const C=u.getX(T),P=u.getX(T+1),k=u.getX(T+2);o=Zl(this,v,e,i,h,p,m,C,P,k),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),E=Math.min(u.count,y.start+y.count);for(let _=w,v=E;_<v;_+=3){const b=u.getX(_),N=u.getX(_+1),T=u.getX(_+2);o=Zl(this,c,e,i,h,p,m,b,N,T),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let w=0,E=x.length;w<E;w++){const _=x[w],v=c[_.materialIndex],b=Math.max(_.start,y.start),N=Math.min(f.count,Math.min(_.start+_.count,y.start+y.count));for(let T=b,D=N;T<D;T+=3){const C=T,P=T+1,k=T+2;o=Zl(this,v,e,i,h,p,m,C,P,k),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let _=w,v=E;_<v;_+=3){const b=_,N=_+1,T=_+2;o=Zl(this,c,e,i,h,p,m,b,N,T),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function MM(s,e,t,i,o,a,c,u){let f;if(e.side===Yn?f=i.intersectTriangle(c,a,o,!0,u):f=i.intersectTriangle(o,a,c,e.side===Hr,u),f===null)return null;Kl.copy(u),Kl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Kl);return h<t.near||h>t.far?null:{distance:h,point:Kl.clone(),object:s}}function Zl(s,e,t,i,o,a,c,u,f,h){s.getVertexPosition(u,Xl),s.getVertexPosition(f,Yl),s.getVertexPosition(h,$l);const p=MM(s,e,t,i,Xl,Yl,$l,Hg);if(p){const m=new ee;hi.getBarycoord(Hg,Xl,Yl,$l,m),o&&(p.uv=hi.getInterpolatedAttribute(o,u,f,h,m,new tt)),a&&(p.uv1=hi.getInterpolatedAttribute(a,u,f,h,m,new tt)),c&&(p.normal=hi.getInterpolatedAttribute(c,u,f,h,m,new ee),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const x={a:u,b:f,c:h,normal:new ee,materialIndex:0};hi.getNormal(Xl,Yl,$l,x.normal),p.face=x,p.barycoord=m}return p}class No extends $n{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],p=[],m=[];let x=0,y=0;w("z","y","x",-1,-1,i,t,e,c,a,0),w("z","y","x",1,-1,i,t,-e,c,a,1),w("x","z","y",1,1,e,i,t,o,c,2),w("x","z","y",1,-1,e,i,-t,o,c,3),w("x","y","z",1,-1,e,t,i,o,a,4),w("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(m,2));function w(E,_,v,b,N,T,D,C,P,k,I){const A=T/P,O=D/k,Q=T/2,H=D/2,ne=C/2,oe=P+1,le=k+1;let te=0,V=0;const re=new ee;for(let j=0;j<le;j++){const F=j*O-H;for(let $=0;$<oe;$++){const Te=$*A-Q;re[E]=Te*b,re[_]=F*N,re[v]=ne,h.push(re.x,re.y,re.z),re[E]=0,re[_]=0,re[v]=C>0?1:-1,p.push(re.x,re.y,re.z),m.push($/P),m.push(1-j/k),te+=1}}for(let j=0;j<k;j++)for(let F=0;F<P;F++){const $=x+F+oe*j,Te=x+F+oe*(j+1),J=x+(F+1)+oe*(j+1),ae=x+(F+1)+oe*j;f.push($,Te,ae),f.push(Te,J,ae),V+=6}u.addGroup(y,V,I),y+=V,x+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ao(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Nn(s){const e={};for(let t=0;t<s.length;t++){const i=Ao(s[t]);for(const o in i)e[o]=i[o]}return e}function EM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ex(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Cc={clone:Ao,merge:Nn};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Ms{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=EM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wx extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Or=new ee,Gg=new tt,jg=new tt;class Dn extends wx{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,Gg,jg),t.subVectors(jg,Gg)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*i/h,o*=c.width/f,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class bM extends mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Dn(so,oo,e,t);o.layers=this.layers,this.add(o);const a=new Dn(so,oo,e,t);a.layers=this.layers,this.add(a);const c=new Dn(so,oo,e,t);c.layers=this.layers,this.add(c);const u=new Dn(so,oo,e,t);u.layers=this.layers,this.add(u);const f=new Dn(so,oo,e,t);f.layers=this.layers,this.add(f);const h=new Dn(so,oo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===or)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,p]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,u),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(m,x,y),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class Tx extends Un{constructor(e,t,i,o,a,c,u,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Eo,super(e,t,i,o,a,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AM extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Tx(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new No(5,5,5),a=new Xn({name:"CubemapFromEquirect",uniforms:Ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:ar});a.uniforms.tEquirect.value=t;const c=new In(o,a),u=t.minFilter;return t.minFilter===Vr&&(t.minFilter=Ci),new bM(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}const $d=new ee,CM=new ee,RM=new yt;class zr{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=$d.subVectors(i,t).cross(CM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($d),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||RM.getNormalMatrix(e),o=this.coplanarPoint($d).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Oc,Ql=new ee;class mh{constructor(e=new zr,t=new zr,i=new zr,o=new zr,a=new zr,c=new zr){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=or){const i=this.planes,o=e.elements,a=o[0],c=o[1],u=o[2],f=o[3],h=o[4],p=o[5],m=o[6],x=o[7],y=o[8],w=o[9],E=o[10],_=o[11],v=o[12],b=o[13],N=o[14],T=o[15];if(i[0].setComponents(f-a,x-h,_-y,T-v).normalize(),i[1].setComponents(f+a,x+h,_+y,T+v).normalize(),i[2].setComponents(f+c,x+p,_+w,T+b).normalize(),i[3].setComponents(f-c,x-p,_-w,T-b).normalize(),i[4].setComponents(f-u,x-m,_-E,T-N).normalize(),t===or)i[5].setComponents(f+u,x+m,_+E,T+N).normalize();else if(t===Tc)i[5].setComponents(u,m,E,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Ql.x=o.normal.x>0?e.max.x:e.min.x,Ql.y=o.normal.y>0?e.max.y:e.min.y,Ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bx(){let s=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function PM(s){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,m=h.byteLength,x=s.createBuffer();s.bindBuffer(f,x),s.bufferData(f,h,p),u.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,f,h){const p=f.array,m=f.updateRanges;if(s.bindBuffer(h,u),m.length===0)s.bufferSubData(h,0,p);else{m.sort((y,w)=>y.start-w.start);let x=0;for(let y=1;y<m.length;y++){const w=m[x],E=m[y];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++x,m[x]=E)}m.length=x+1;for(let y=0,w=m.length;y<w;y++){const E=m[y];s.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(s.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:o,remove:a,update:c}}class Aa extends $n{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(o),h=u+1,p=f+1,m=e/u,x=t/f,y=[],w=[],E=[],_=[];for(let v=0;v<p;v++){const b=v*x-c;for(let N=0;N<h;N++){const T=N*m-a;w.push(T,-b,0),E.push(0,0,1),_.push(N/u),_.push(1-v/f)}}for(let v=0;v<f;v++)for(let b=0;b<u;b++){const N=b+h*v,T=b+h*(v+1),D=b+1+h*(v+1),C=b+1+h*v;y.push(N,T,C),y.push(T,D,C)}this.setIndex(y),this.setAttribute("position",new Zt(w,3)),this.setAttribute("normal",new Zt(E,3)),this.setAttribute("uv",new Zt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.widthSegments,e.heightSegments)}}var NM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LM=`#ifdef USE_ALPHAHASH
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
#endif`,DM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FM=`#ifdef USE_AOMAP
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
#endif`,OM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
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
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jM=`#ifdef USE_IRIDESCENCE
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
#endif`,WM=`#ifdef USE_BUMPMAP
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eE=`#define PI 3.141592653589793
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
} // validated`,tE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nE=`vec3 transformedNormal = objectNormal;
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
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aE="gl_FragColor = linearToOutputTexel( gl_FragColor );",lE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
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
#endif`,pE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vE=`#ifdef USE_GRADIENTMAP
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
}`,_E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ME=`uniform bool receiveShadow;
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
#endif`,EE=`#ifdef USE_ENVMAP
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
#endif`,wE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CE=`PhysicalMaterial material;
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
#endif`,RE=`struct PhysicalMaterial {
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
}`,PE=`
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
#endif`,NE=`#if defined( RE_IndirectDiffuse )
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
#endif`,LE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BE=`#if defined( USE_POINTS_UV )
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
#endif`,VE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`#ifdef USE_MORPHTARGETS
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
#endif`,YE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JE=`#ifdef USE_NORMALMAP
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
#endif`,ew=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ow=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mw=`float getShadowMask() {
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
}`,gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xw=`#ifdef USE_SKINNING
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
#endif`,vw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_w=`#ifdef USE_SKINNING
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
#endif`,yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ew=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ww=`#ifdef USE_TRANSMISSION
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
#endif`,Tw=`#ifdef USE_TRANSMISSION
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
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nw=`uniform sampler2D t2D;
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
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`#include <common>
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
}`,Fw=`#if DEPTH_PACKING == 3200
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
}`,Ow=`#define DISTANCE
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
}`,zw=`#define DISTANCE
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
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`uniform float scale;
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
}`,Gw=`uniform vec3 diffuse;
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
}`,jw=`#include <common>
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
}`,Ww=`uniform vec3 diffuse;
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
}`,Xw=`#define LAMBERT
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
}`,Yw=`#define LAMBERT
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
}`,$w=`#define MATCAP
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
}`,qw=`#define MATCAP
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
}`,Kw=`#define NORMAL
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
}`,Zw=`#define NORMAL
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
}`,Qw=`#define PHONG
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
}`,Jw=`#define PHONG
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
}`,eT=`#define STANDARD
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
}`,tT=`#define STANDARD
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
}`,nT=`#define TOON
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
}`,iT=`#define TOON
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
}`,rT=`uniform float size;
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
}`,sT=`uniform vec3 diffuse;
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
}`,oT=`#include <common>
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
}`,aT=`uniform vec3 color;
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
}`,lT=`uniform float rotation;
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
}`,cT=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:NM,alphahash_pars_fragment:LM,alphamap_fragment:DM,alphamap_pars_fragment:IM,alphatest_fragment:UM,alphatest_pars_fragment:kM,aomap_fragment:FM,aomap_pars_fragment:OM,batching_pars_vertex:zM,batching_vertex:BM,begin_vertex:VM,beginnormal_vertex:HM,bsdfs:GM,iridescence_fragment:jM,bumpmap_pars_fragment:WM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:qM,color_fragment:KM,color_pars_fragment:ZM,color_pars_vertex:QM,color_vertex:JM,common:eE,cube_uv_reflection_fragment:tE,defaultnormal_vertex:nE,displacementmap_pars_vertex:iE,displacementmap_vertex:rE,emissivemap_fragment:sE,emissivemap_pars_fragment:oE,colorspace_fragment:aE,colorspace_pars_fragment:lE,envmap_fragment:cE,envmap_common_pars_fragment:uE,envmap_pars_fragment:dE,envmap_pars_vertex:fE,envmap_physical_pars_fragment:EE,envmap_vertex:hE,fog_vertex:pE,fog_pars_vertex:mE,fog_fragment:gE,fog_pars_fragment:xE,gradientmap_pars_fragment:vE,lightmap_pars_fragment:_E,lights_lambert_fragment:yE,lights_lambert_pars_fragment:SE,lights_pars_begin:ME,lights_toon_fragment:wE,lights_toon_pars_fragment:TE,lights_phong_fragment:bE,lights_phong_pars_fragment:AE,lights_physical_fragment:CE,lights_physical_pars_fragment:RE,lights_fragment_begin:PE,lights_fragment_maps:NE,lights_fragment_end:LE,logdepthbuf_fragment:DE,logdepthbuf_pars_fragment:IE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:kE,map_fragment:FE,map_pars_fragment:OE,map_particle_fragment:zE,map_particle_pars_fragment:BE,metalnessmap_fragment:VE,metalnessmap_pars_fragment:HE,morphinstance_vertex:GE,morphcolor_vertex:jE,morphnormal_vertex:WE,morphtarget_pars_vertex:XE,morphtarget_vertex:YE,normal_fragment_begin:$E,normal_fragment_maps:qE,normal_pars_fragment:KE,normal_pars_vertex:ZE,normal_vertex:QE,normalmap_pars_fragment:JE,clearcoat_normal_fragment_begin:ew,clearcoat_normal_fragment_maps:tw,clearcoat_pars_fragment:nw,iridescence_pars_fragment:iw,opaque_fragment:rw,packing:sw,premultiplied_alpha_fragment:ow,project_vertex:aw,dithering_fragment:lw,dithering_pars_fragment:cw,roughnessmap_fragment:uw,roughnessmap_pars_fragment:dw,shadowmap_pars_fragment:fw,shadowmap_pars_vertex:hw,shadowmap_vertex:pw,shadowmask_pars_fragment:mw,skinbase_vertex:gw,skinning_pars_vertex:xw,skinning_vertex:vw,skinnormal_vertex:_w,specularmap_fragment:yw,specularmap_pars_fragment:Sw,tonemapping_fragment:Mw,tonemapping_pars_fragment:Ew,transmission_fragment:ww,transmission_pars_fragment:Tw,uv_pars_fragment:bw,uv_pars_vertex:Aw,uv_vertex:Cw,worldpos_vertex:Rw,background_vert:Pw,background_frag:Nw,backgroundCube_vert:Lw,backgroundCube_frag:Dw,cube_vert:Iw,cube_frag:Uw,depth_vert:kw,depth_frag:Fw,distanceRGBA_vert:Ow,distanceRGBA_frag:zw,equirect_vert:Bw,equirect_frag:Vw,linedashed_vert:Hw,linedashed_frag:Gw,meshbasic_vert:jw,meshbasic_frag:Ww,meshlambert_vert:Xw,meshlambert_frag:Yw,meshmatcap_vert:$w,meshmatcap_frag:qw,meshnormal_vert:Kw,meshnormal_frag:Zw,meshphong_vert:Qw,meshphong_frag:Jw,meshphysical_vert:eT,meshphysical_frag:tT,meshtoon_vert:nT,meshtoon_frag:iT,points_vert:rT,points_frag:sT,shadow_vert:oT,shadow_frag:aT,sprite_vert:lT,sprite_frag:cT},Ie={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Oi={basic:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Nn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Nn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Nn([Ie.points,Ie.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Nn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Nn([Ie.common,Ie.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Nn([Ie.sprite,Ie.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Nn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Nn([Ie.lights,Ie.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Oi.physical={uniforms:Nn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Jl={r:0,b:0,g:0},ls=new Pi,uT=new Bt;function dT(s,e,t,i,o,a,c){const u=new xt(0);let f=a===!0?0:1,h,p,m=null,x=0,y=null;function w(b){let N=b.isScene===!0?b.background:null;return N&&N.isTexture&&(N=(b.backgroundBlurriness>0?t:e).get(N)),N}function E(b){let N=!1;const T=w(b);T===null?v(u,f):T&&T.isColor&&(v(T,1),N=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(b,N){const T=w(N);T&&(T.isCubeTexture||T.mapping===kc)?(p===void 0&&(p=new In(new No(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ao(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),ls.copy(N.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(uT.makeRotationFromEuler(ls)),p.material.toneMapped=Pt.getTransfer(T.colorSpace)!==kt,(m!==T||x!==T.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,m=T,x=T.version,y=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new In(new Aa(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ao(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(T.colorSpace)!==kt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(m!==T||x!==T.version||y!==s.toneMapping)&&(h.material.needsUpdate=!0,m=T,x=T.version,y=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function v(b,N){b.getRGB(Jl,Ex(s)),i.buffers.color.setClear(Jl.r,Jl.g,Jl.b,N,c)}return{getClearColor:function(){return u},setClearColor:function(b,N=1){u.set(b),f=N,v(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,v(u,f)},render:E,addToRenderList:_}}function fT(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=x(null);let a=o,c=!1;function u(A,O,Q,H,ne){let oe=!1;const le=m(H,Q,O);a!==le&&(a=le,h(a.object)),oe=y(A,H,Q,ne),oe&&w(A,H,Q,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(oe||c)&&(c=!1,T(A,O,Q,H),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function f(){return s.createVertexArray()}function h(A){return s.bindVertexArray(A)}function p(A){return s.deleteVertexArray(A)}function m(A,O,Q){const H=Q.wireframe===!0;let ne=i[A.id];ne===void 0&&(ne={},i[A.id]=ne);let oe=ne[O.id];oe===void 0&&(oe={},ne[O.id]=oe);let le=oe[H];return le===void 0&&(le=x(f()),oe[H]=le),le}function x(A){const O=[],Q=[],H=[];for(let ne=0;ne<t;ne++)O[ne]=0,Q[ne]=0,H[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Q,attributeDivisors:H,object:A,attributes:{},index:null}}function y(A,O,Q,H){const ne=a.attributes,oe=O.attributes;let le=0;const te=Q.getAttributes();for(const V in te)if(te[V].location>=0){const j=ne[V];let F=oe[V];if(F===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(F=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(F=A.instanceColor)),j===void 0||j.attribute!==F||F&&j.data!==F.data)return!0;le++}return a.attributesNum!==le||a.index!==H}function w(A,O,Q,H){const ne={},oe=O.attributes;let le=0;const te=Q.getAttributes();for(const V in te)if(te[V].location>=0){let j=oe[V];j===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(j=A.instanceColor));const F={};F.attribute=j,j&&j.data&&(F.data=j.data),ne[V]=F,le++}a.attributes=ne,a.attributesNum=le,a.index=H}function E(){const A=a.newAttributes;for(let O=0,Q=A.length;O<Q;O++)A[O]=0}function _(A){v(A,0)}function v(A,O){const Q=a.newAttributes,H=a.enabledAttributes,ne=a.attributeDivisors;Q[A]=1,H[A]===0&&(s.enableVertexAttribArray(A),H[A]=1),ne[A]!==O&&(s.vertexAttribDivisor(A,O),ne[A]=O)}function b(){const A=a.newAttributes,O=a.enabledAttributes;for(let Q=0,H=O.length;Q<H;Q++)O[Q]!==A[Q]&&(s.disableVertexAttribArray(Q),O[Q]=0)}function N(A,O,Q,H,ne,oe,le){le===!0?s.vertexAttribIPointer(A,O,Q,ne,oe):s.vertexAttribPointer(A,O,Q,H,ne,oe)}function T(A,O,Q,H){E();const ne=H.attributes,oe=Q.getAttributes(),le=O.defaultAttributeValues;for(const te in oe){const V=oe[te];if(V.location>=0){let re=ne[te];if(re===void 0&&(te==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),te==="instanceColor"&&A.instanceColor&&(re=A.instanceColor)),re!==void 0){const j=re.normalized,F=re.itemSize,$=e.get(re);if($===void 0)continue;const Te=$.buffer,J=$.type,ae=$.bytesPerElement,ge=J===s.INT||J===s.UNSIGNED_INT||re.gpuType===sh;if(re.isInterleavedBufferAttribute){const he=re.data,ye=he.stride,Ce=re.offset;if(he.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)v(V.location+Ve,he.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)_(V.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Ve=0;Ve<V.locationSize;Ve++)N(V.location+Ve,F/V.locationSize,J,j,ye*ae,(Ce+F/V.locationSize*Ve)*ae,ge)}else{if(re.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)v(V.location+he,re.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let he=0;he<V.locationSize;he++)_(V.location+he);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let he=0;he<V.locationSize;he++)N(V.location+he,F/V.locationSize,J,j,F*ae,F/V.locationSize*he*ae,ge)}}else if(le!==void 0){const j=le[te];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(V.location,j);break;case 3:s.vertexAttrib3fv(V.location,j);break;case 4:s.vertexAttrib4fv(V.location,j);break;default:s.vertexAttrib1fv(V.location,j)}}}}b()}function D(){k();for(const A in i){const O=i[A];for(const Q in O){const H=O[Q];for(const ne in H)p(H[ne].object),delete H[ne];delete O[Q]}delete i[A]}}function C(A){if(i[A.id]===void 0)return;const O=i[A.id];for(const Q in O){const H=O[Q];for(const ne in H)p(H[ne].object),delete H[ne];delete O[Q]}delete i[A.id]}function P(A){for(const O in i){const Q=i[O];if(Q[A.id]===void 0)continue;const H=Q[A.id];for(const ne in H)p(H[ne].object),delete H[ne];delete Q[A.id]}}function k(){I(),c=!0,a!==o&&(a=o,h(a.object))}function I(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:k,resetDefaultState:I,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:_,disableUnusedAttributes:b}}function hT(s,e,t){let i;function o(h){i=h}function a(h,p){s.drawArrays(i,h,p),t.update(p,i,1)}function c(h,p,m){m!==0&&(s.drawArraysInstanced(i,h,p,m),t.update(p,i,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,m);let y=0;for(let w=0;w<m;w++)y+=p[w];t.update(y,i,1)}function f(h,p,m,x){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<h.length;w++)c(h[w],p[w],x[w]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,p,0,x,0,m);let w=0;for(let E=0;E<m;E++)w+=p[E]*x[E];t.update(w,i,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function pT(s,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(P){return!(P!==pi&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(P){const k=P===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==dr&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==sr&&!k)}function f(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=w>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:m,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:b,maxVaryings:N,maxFragmentUniforms:T,vertexTextures:D,maxSamples:C}}function mT(s){const e=this;let t=null,i=0,o=!1,a=!1;const c=new zr,u=new yt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const y=m.length!==0||x||i!==0||o;return o=x,i=m.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,x){t=p(m,x,0)},this.setState=function(m,x,y){const w=m.clippingPlanes,E=m.clipIntersection,_=m.clipShadows,v=s.get(m);if(!o||w===null||w.length===0||a&&!_)a?p(null):h();else{const b=a?0:i,N=b*4;let T=v.clippingState||null;f.value=T,T=p(w,x,N,y);for(let D=0;D!==N;++D)T[D]=t[D];v.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,x,y,w){const E=m!==null?m.length:0;let _=null;if(E!==0){if(_=f.value,w!==!0||_===null){const v=y+E*4,b=x.matrixWorldInverse;u.getNormalMatrix(b),(_===null||_.length<v)&&(_=new Float32Array(v));for(let N=0,T=y;N!==E;++N,T+=4)c.copy(m[N]).applyMatrix4(b,u),c.normal.toArray(_,T),_[T+3]=c.constant}f.value=_,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function gT(s){let e=new WeakMap;function t(c,u){return u===wf?c.mapping=Eo:u===Tf&&(c.mapping=wo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===wf||u===Tf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new AM(f.height);return h.fromEquirectangularTexture(s,c),e.set(c,h),c.addEventListener("dispose",o),t(h.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class gh extends wx{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const po=4,Wg=[.125,.215,.35,.446,.526,.582],ps=20,qd=new gh,Xg=new xt;let Kd=null,Zd=0,Qd=0,Jd=!1;const ds=(1+Math.sqrt(5))/2,ao=1/ds,Yg=[new ee(-ds,ao,0),new ee(ds,ao,0),new ee(-ao,0,ds),new ee(ao,0,ds),new ee(0,ds,-ao),new ee(0,ds,ao),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class $g{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Kd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Zd,Qd),this._renderer.xr.enabled=Jd,e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Eo||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:cr,format:pi,colorSpace:Ro,depthBuffer:!1},o=qg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xT(a)),this._blurMaterial=vT(a,e,t)}return o}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,qd)}_sceneToCubeUV(e,t,i,o){const u=new Dn(90,1,t,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,x=p.toneMapping;p.getClearColor(Xg),p.toneMapping=lr,p.autoClear=!1;const y=new ys({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),w=new In(new No,y);let E=!1;const _=e.background;_?_.isColor&&(y.color.copy(_),e.background=null,E=!0):(y.color.copy(Xg),E=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(u.up.set(0,f[v],0),u.lookAt(h[v],0,0)):b===1?(u.up.set(0,0,f[v]),u.lookAt(0,h[v],0)):(u.up.set(0,f[v],0),u.lookAt(0,0,h[v]));const N=this._cubeSize;ec(o,b*N,v>2?N:0,N,N),p.setRenderTarget(o),E&&p.render(w,u),p.render(e,u)}w.geometry.dispose(),w.material.dispose(),p.toneMapping=x,p.autoClear=m,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Eo||e.mapping===wo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kg());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new In(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;ec(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,qd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Yg[(o-a-1)%Yg.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new In(this._lodPlanes[o],h),x=h.uniforms,y=this._sizeLods[i]-1,w=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ps-1),E=a/w,_=isFinite(a)?1+Math.floor(p*E):ps;_>ps&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ps}`);const v=[];let b=0;for(let P=0;P<ps;++P){const k=P/E,I=Math.exp(-k*k/2);v.push(I),P===0?b+=I:P<_&&(b+=2*I)}for(let P=0;P<v.length;P++)v[P]=v[P]/b;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=v,x.latitudinal.value=c==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:N}=this;x.dTheta.value=w,x.mipInt.value=N-i;const T=this._sizeLods[o],D=3*T*(o>N-po?o-N+po:0),C=4*(this._cubeSize-T);ec(t,D,C,3*T,2*T),f.setRenderTarget(t),f.render(m,qd)}}function xT(s){const e=[],t=[],i=[];let o=s;const a=s-po+1+Wg.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);t.push(u);let f=1/u;c>s-po?f=Wg[c-s+po-1]:c===0&&(f=0),i.push(f);const h=1/(u-2),p=-h,m=1+h,x=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,w=6,E=3,_=2,v=1,b=new Float32Array(E*w*y),N=new Float32Array(_*w*y),T=new Float32Array(v*w*y);for(let C=0;C<y;C++){const P=C%3*2/3-1,k=C>2?0:-1,I=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];b.set(I,E*w*C),N.set(x,_*w*C);const A=[C,C,C,C,C,C];T.set(A,v*w*C)}const D=new $n;D.setAttribute("position",new fn(b,E)),D.setAttribute("uv",new fn(N,_)),D.setAttribute("faceIndex",new fn(T,v)),e.push(D),o>po&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qg(s,e,t){const i=new Ri(s,e,t);return i.texture.mapping=kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ec(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function vT(s,e,t){const i=new Float32Array(ps),o=new ee(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Kg(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Zg(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function xh(){return`

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
	`}function _T(s){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===wf||f===Tf,p=f===Eo||f===wo;if(h||p){let m=e.get(u);const x=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return t===null&&(t=new $g(s)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return h&&y&&y.height>0||p&&y&&o(y)?(t===null&&(t=new $g(s)),m=h?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",a),m.texture):null}}}return u}function o(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function yT(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&_a("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function ST(s,e,t,i){const o={},a=new WeakMap;function c(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const E=x.morphAttributes[w];for(let _=0,v=E.length;_<v;_++)e.remove(E[_])}x.removeEventListener("dispose",c),delete o[x.id];const y=a.get(x);y&&(e.remove(y),a.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function u(m,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function f(m){const x=m.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER);const y=m.morphAttributes;for(const w in y){const E=y[w];for(let _=0,v=E.length;_<v;_++)e.update(E[_],s.ARRAY_BUFFER)}}function h(m){const x=[],y=m.index,w=m.attributes.position;let E=0;if(y!==null){const b=y.array;E=y.version;for(let N=0,T=b.length;N<T;N+=3){const D=b[N+0],C=b[N+1],P=b[N+2];x.push(D,C,C,P,P,D)}}else if(w!==void 0){const b=w.array;E=w.version;for(let N=0,T=b.length/3-1;N<T;N+=3){const D=N+0,C=N+1,P=N+2;x.push(D,C,C,P,P,D)}}else return;const _=new(vx(x)?Mx:Sx)(x,1);_.version=E;const v=a.get(m);v&&e.remove(v),a.set(m,_)}function p(m){const x=a.get(m);if(x){const y=m.index;y!==null&&x.version<y.version&&h(m)}else h(m);return a.get(m)}return{get:u,update:f,getWireframeAttribute:p}}function MT(s,e,t){let i;function o(x){i=x}let a,c;function u(x){a=x.type,c=x.bytesPerElement}function f(x,y){s.drawElements(i,y,a,x*c),t.update(y,i,1)}function h(x,y,w){w!==0&&(s.drawElementsInstanced(i,y,a,x*c,w),t.update(y,i,w))}function p(x,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,x,0,w);let _=0;for(let v=0;v<w;v++)_+=y[v];t.update(_,i,1)}function m(x,y,w,E){if(w===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<x.length;v++)h(x[v]/c,y[v],E[v]);else{_.multiDrawElementsInstancedWEBGL(i,y,0,a,x,0,E,0,w);let v=0;for(let b=0;b<w;b++)v+=y[b]*E[b];t.update(v,i,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function ET(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(a/3);break;case s.LINES:t.lines+=u*(a/2);break;case s.LINE_STRIP:t.lines+=u*(a-1);break;case s.LINE_LOOP:t.lines+=u*a;break;case s.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function wT(s,e,t){const i=new WeakMap,o=new qt;function a(c,u,f){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let x=i.get(u);if(x===void 0||x.count!==m){let A=function(){k.dispose(),i.delete(u),u.removeEventListener("dispose",A)};var y=A;x!==void 0&&x.texture.dispose();const w=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let T=0;w===!0&&(T=1),E===!0&&(T=2),_===!0&&(T=3);let D=u.attributes.position.count*T,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const P=new Float32Array(D*C*4*m),k=new _x(P,D,C,m);k.type=sr,k.needsUpdate=!0;const I=T*4;for(let O=0;O<m;O++){const Q=v[O],H=b[O],ne=N[O],oe=D*C*4*O;for(let le=0;le<Q.count;le++){const te=le*I;w===!0&&(o.fromBufferAttribute(Q,le),P[oe+te+0]=o.x,P[oe+te+1]=o.y,P[oe+te+2]=o.z,P[oe+te+3]=0),E===!0&&(o.fromBufferAttribute(H,le),P[oe+te+4]=o.x,P[oe+te+5]=o.y,P[oe+te+6]=o.z,P[oe+te+7]=0),_===!0&&(o.fromBufferAttribute(ne,le),P[oe+te+8]=o.x,P[oe+te+9]=o.y,P[oe+te+10]=o.z,P[oe+te+11]=ne.itemSize===4?o.w:1)}}x={count:m,texture:k,size:new tt(D,C)},i.set(u,x),u.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let w=0;for(let _=0;_<h.length;_++)w+=h[_];const E=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",h)}f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:a}}function TT(s,e,t,i){let o=new WeakMap;function a(f){const h=i.render.frame,p=f.geometry,m=e.get(f,p);if(o.get(m)!==h&&(e.update(m),o.set(m,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==h&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,h))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==h&&(x.update(),o.set(x,h))}return m}function c(){o=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}class Ax extends Un{constructor(e,t,i,o,a,c,u,f,h,p=vo){if(p!==vo&&p!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===vo&&(i=_s),i===void 0&&p===bo&&(i=To),super(null,o,a,c,u,f,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:gi,this.minFilter=f!==void 0?f:gi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cx=new Un,Qg=new Ax(1,1),Rx=new _x,Px=new fM,Nx=new Tx,Jg=[],e0=[],t0=new Float32Array(16),n0=new Float32Array(9),i0=new Float32Array(4);function Lo(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=Jg[o];if(a===void 0&&(a=new Float32Array(o),Jg[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(a,u)}return a}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Bc(s,e){let t=e0[e];t===void 0&&(t=new Int32Array(e),e0[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function bT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function AT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function CT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function RT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function PT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;i0.set(i),s.uniformMatrix2fv(this.addr,!1,i0),an(t,i)}}function NT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;n0.set(i),s.uniformMatrix3fv(this.addr,!1,n0),an(t,i)}}function LT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;t0.set(i),s.uniformMatrix4fv(this.addr,!1,t0),an(t,i)}}function DT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function IT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function UT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function kT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function FT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function OT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function zT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function BT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function VT(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a;this.type===s.SAMPLER_2D_SHADOW?(Qg.compareFunction=xx,a=Qg):a=Cx,t.setTexture2D(e||a,o)}function HT(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Px,o)}function GT(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||Nx,o)}function jT(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Rx,o)}function WT(s){switch(s){case 5126:return bT;case 35664:return AT;case 35665:return CT;case 35666:return RT;case 35674:return PT;case 35675:return NT;case 35676:return LT;case 5124:case 35670:return DT;case 35667:case 35671:return IT;case 35668:case 35672:return UT;case 35669:case 35673:return kT;case 5125:return FT;case 36294:return OT;case 36295:return zT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return jT}}function XT(s,e){s.uniform1fv(this.addr,e)}function YT(s,e){const t=Lo(e,this.size,2);s.uniform2fv(this.addr,t)}function $T(s,e){const t=Lo(e,this.size,3);s.uniform3fv(this.addr,t)}function qT(s,e){const t=Lo(e,this.size,4);s.uniform4fv(this.addr,t)}function KT(s,e){const t=Lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ZT(s,e){const t=Lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function QT(s,e){const t=Lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function JT(s,e){s.uniform1iv(this.addr,e)}function eb(s,e){s.uniform2iv(this.addr,e)}function tb(s,e){s.uniform3iv(this.addr,e)}function nb(s,e){s.uniform4iv(this.addr,e)}function ib(s,e){s.uniform1uiv(this.addr,e)}function rb(s,e){s.uniform2uiv(this.addr,e)}function sb(s,e){s.uniform3uiv(this.addr,e)}function ob(s,e){s.uniform4uiv(this.addr,e)}function ab(s,e,t){const i=this.cache,o=e.length,a=Bc(t,o);on(i,a)||(s.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Cx,a[c])}function lb(s,e,t){const i=this.cache,o=e.length,a=Bc(t,o);on(i,a)||(s.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Px,a[c])}function cb(s,e,t){const i=this.cache,o=e.length,a=Bc(t,o);on(i,a)||(s.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Nx,a[c])}function ub(s,e,t){const i=this.cache,o=e.length,a=Bc(t,o);on(i,a)||(s.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Rx,a[c])}function db(s){switch(s){case 5126:return XT;case 35664:return YT;case 35665:return $T;case 35666:return qT;case 35674:return KT;case 35675:return ZT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return rb;case 36295:return sb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return ub}}class fb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=WT(t.type)}}class hb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=db(t.type)}}class pb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function r0(s,e){s.seq.push(e),s.map[e.id]=e}function mb(s,e,t){const i=s.name,o=i.length;for(ef.lastIndex=0;;){const a=ef.exec(i),c=ef.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===o){r0(t,h===void 0?new fb(u,s,e):new hb(u,s,e));break}else{let m=t.map[u];m===void 0&&(m=new pb(u),r0(t,m)),t=m}}}class _c{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);mb(a,c,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function s0(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const gb=37297;let xb=0;function vb(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const o0=new yt;function _b(s){Pt._getMatrix(o0,Pt.workingColorSpace,s);const e=`mat3( ${o0.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Fc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function a0(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+vb(s.getShaderSource(e),c)}else return o}function yb(s,e){const t=_b(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sb(s,e){let t;switch(e){case wS:t="Linear";break;case TS:t="Reinhard";break;case bS:t="Cineon";break;case rx:t="ACESFilmic";break;case CS:t="AgX";break;case RS:t="Neutral";break;case AS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tc=new ee;function Mb(){Pt.getLuminanceCoefficients(tc);const s=tc.x.toFixed(4),e=tc.y.toFixed(4),t=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function wb(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Tb(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),c=a.name;let u=1;a.type===s.FLOAT_MAT2&&(u=2),a.type===s.FLOAT_MAT3&&(u=3),a.type===s.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function ya(s){return s!==""}function l0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(s){return s.replace(bb,Cb)}const Ab=new Map;function Cb(s,e){let t=St[e];if(t===void 0){const i=Ab.get(e);if(i!==void 0)t=St[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qf(t)}const Rb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u0(s){return s.replace(Rb,Pb)}function Pb(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function d0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Nb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ix?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===iS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function Lb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Eo:case wo:e="ENVMAP_TYPE_CUBE";break;case kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Db(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wo:e="ENVMAP_MODE_REFRACTION";break}return e}function Ib(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rh:e="ENVMAP_BLENDING_MULTIPLY";break;case MS:e="ENVMAP_BLENDING_MIX";break;case ES:e="ENVMAP_BLENDING_ADD";break}return e}function Ub(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function kb(s,e,t,i){const o=s.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=Nb(t),h=Lb(t),p=Db(t),m=Ib(t),x=Ub(t),y=Eb(t),w=wb(a),E=o.createProgram();let _,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ya).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ya).join(`
`),v.length>0&&(v+=`
`)):(_=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),v=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?St.tonemapping_pars_fragment:"",t.toneMapping!==lr?Sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,yb("linearToOutputTexel",t.outputColorSpace),Mb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),c=Qf(c),c=l0(c,t),c=c0(c,t),u=Qf(u),u=l0(u,t),u=c0(u,t),c=u0(c),u=u0(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",t.glslVersion===Eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=b+_+c,T=b+v+u,D=s0(o,o.VERTEX_SHADER,N),C=s0(o,o.FRAGMENT_SHADER,T);o.attachShader(E,D),o.attachShader(E,C),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function P(O){if(s.debug.checkShaderErrors){const Q=o.getProgramInfoLog(E).trim(),H=o.getShaderInfoLog(D).trim(),ne=o.getShaderInfoLog(C).trim();let oe=!0,le=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(oe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,D,C);else{const te=a0(o,D,"vertex"),V=a0(o,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Q+`
`+te+`
`+V)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(H===""||ne==="")&&(le=!1);le&&(O.diagnostics={runnable:oe,programLog:Q,vertexShader:{log:H,prefix:_},fragmentShader:{log:ne,prefix:v}})}o.deleteShader(D),o.deleteShader(C),k=new _c(o,E),I=Tb(o,E)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let I;this.getAttributes=function(){return I===void 0&&P(this),I};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(E,gb)),A},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xb++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=C,this}let Fb=0;class Ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zb(e),t.set(e,i)),i}}class zb{constructor(e){this.id=Fb++,this.code=e,this.usedTimes=0}}function Bb(s,e,t,i,o,a,c){const u=new ph,f=new Ob,h=new Set,p=[],m=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(I){return h.add(I),I===0?"uv":`uv${I}`}function _(I,A,O,Q,H){const ne=Q.fog,oe=H.geometry,le=I.isMeshStandardMaterial?Q.environment:null,te=(I.isMeshStandardMaterial?t:e).get(I.envMap||le),V=te&&te.mapping===kc?te.image.height:null,re=w[I.type];I.precision!==null&&(y=o.getMaxPrecision(I.precision),y!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",y,"instead."));const j=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,F=j!==void 0?j.length:0;let $=0;oe.morphAttributes.position!==void 0&&($=1),oe.morphAttributes.normal!==void 0&&($=2),oe.morphAttributes.color!==void 0&&($=3);let Te,J,ae,ge;if(re){const Ct=Oi[re];Te=Ct.vertexShader,J=Ct.fragmentShader}else Te=I.vertexShader,J=I.fragmentShader,f.update(I),ae=f.getVertexShaderID(I),ge=f.getFragmentShaderID(I);const he=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ce=H.isInstancedMesh===!0,Ve=H.isBatchedMesh===!0,ct=!!I.map,gt=!!I.matcap,bt=!!te,q=!!I.aoMap,Wt=!!I.lightMap,ft=!!I.bumpMap,ut=!!I.normalMap,Qe=!!I.displacementMap,At=!!I.emissiveMap,Xe=!!I.metalnessMap,z=!!I.roughnessMap,L=I.anisotropy>0,W=I.clearcoat>0,pe=I.dispersion>0,xe=I.iridescence>0,me=I.sheen>0,Ue=I.transmission>0,be=L&&!!I.anisotropyMap,Ne=W&&!!I.clearcoatMap,nt=W&&!!I.clearcoatNormalMap,Ee=W&&!!I.clearcoatRoughnessMap,De=xe&&!!I.iridescenceMap,Je=xe&&!!I.iridescenceThicknessMap,et=me&&!!I.sheenColorMap,ze=me&&!!I.sheenRoughnessMap,_t=!!I.specularMap,ot=!!I.specularColorMap,ht=!!I.specularIntensityMap,X=Ue&&!!I.transmissionMap,Le=Ue&&!!I.thicknessMap,fe=!!I.gradientMap,ve=!!I.alphaMap,Oe=I.alphaTest>0,ke=!!I.alphaHash,pt=!!I.extensions;let Vt=lr;I.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Vt=s.toneMapping);const en={shaderID:re,shaderType:I.type,shaderName:I.name,vertexShader:Te,fragmentShader:J,defines:I.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:y,batching:Ve,batchingColor:Ve&&H._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&H.instanceColor!==null,instancingMorph:Ce&&H.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ro,alphaToCoverage:!!I.alphaToCoverage,map:ct,matcap:gt,envMap:bt,envMapMode:bt&&te.mapping,envMapCubeUVHeight:V,aoMap:q,lightMap:Wt,bumpMap:ft,normalMap:ut,displacementMap:x&&Qe,emissiveMap:At,normalMapObjectSpace:ut&&I.normalMapType===IS,normalMapTangentSpace:ut&&I.normalMapType===dh,metalnessMap:Xe,roughnessMap:z,anisotropy:L,anisotropyMap:be,clearcoat:W,clearcoatMap:Ne,clearcoatNormalMap:nt,clearcoatRoughnessMap:Ee,dispersion:pe,iridescence:xe,iridescenceMap:De,iridescenceThicknessMap:Je,sheen:me,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:_t,specularColorMap:ot,specularIntensityMap:ht,transmission:Ue,transmissionMap:X,thicknessMap:Le,gradientMap:fe,opaque:I.transparent===!1&&I.blending===xo&&I.alphaToCoverage===!1,alphaMap:ve,alphaTest:Oe,alphaHash:ke,combine:I.combine,mapUv:ct&&E(I.map.channel),aoMapUv:q&&E(I.aoMap.channel),lightMapUv:Wt&&E(I.lightMap.channel),bumpMapUv:ft&&E(I.bumpMap.channel),normalMapUv:ut&&E(I.normalMap.channel),displacementMapUv:Qe&&E(I.displacementMap.channel),emissiveMapUv:At&&E(I.emissiveMap.channel),metalnessMapUv:Xe&&E(I.metalnessMap.channel),roughnessMapUv:z&&E(I.roughnessMap.channel),anisotropyMapUv:be&&E(I.anisotropyMap.channel),clearcoatMapUv:Ne&&E(I.clearcoatMap.channel),clearcoatNormalMapUv:nt&&E(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&E(I.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&E(I.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&E(I.iridescenceThicknessMap.channel),sheenColorMapUv:et&&E(I.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(I.sheenRoughnessMap.channel),specularMapUv:_t&&E(I.specularMap.channel),specularColorMapUv:ot&&E(I.specularColorMap.channel),specularIntensityMapUv:ht&&E(I.specularIntensityMap.channel),transmissionMapUv:X&&E(I.transmissionMap.channel),thicknessMapUv:Le&&E(I.thicknessMap.channel),alphaMapUv:ve&&E(I.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(ut||L),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!oe.attributes.uv&&(ct||ve),fog:!!ne,useFog:I.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:ye,skinning:H.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:$,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:I.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:ct&&I.map.isVideoTexture===!0&&Pt.getTransfer(I.map.colorSpace)===kt,decodeVideoTextureEmissive:At&&I.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(I.emissiveMap.colorSpace)===kt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===fi,flipSided:I.side===Yn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:pt&&I.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&I.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return en.vertexUv1s=h.has(1),en.vertexUv2s=h.has(2),en.vertexUv3s=h.has(3),h.clear(),en}function v(I){const A=[];if(I.shaderID?A.push(I.shaderID):(A.push(I.customVertexShaderID),A.push(I.customFragmentShaderID)),I.defines!==void 0)for(const O in I.defines)A.push(O),A.push(I.defines[O]);return I.isRawShaderMaterial===!1&&(b(A,I),N(A,I),A.push(s.outputColorSpace)),A.push(I.customProgramCacheKey),A.join()}function b(I,A){I.push(A.precision),I.push(A.outputColorSpace),I.push(A.envMapMode),I.push(A.envMapCubeUVHeight),I.push(A.mapUv),I.push(A.alphaMapUv),I.push(A.lightMapUv),I.push(A.aoMapUv),I.push(A.bumpMapUv),I.push(A.normalMapUv),I.push(A.displacementMapUv),I.push(A.emissiveMapUv),I.push(A.metalnessMapUv),I.push(A.roughnessMapUv),I.push(A.anisotropyMapUv),I.push(A.clearcoatMapUv),I.push(A.clearcoatNormalMapUv),I.push(A.clearcoatRoughnessMapUv),I.push(A.iridescenceMapUv),I.push(A.iridescenceThicknessMapUv),I.push(A.sheenColorMapUv),I.push(A.sheenRoughnessMapUv),I.push(A.specularMapUv),I.push(A.specularColorMapUv),I.push(A.specularIntensityMapUv),I.push(A.transmissionMapUv),I.push(A.thicknessMapUv),I.push(A.combine),I.push(A.fogExp2),I.push(A.sizeAttenuation),I.push(A.morphTargetsCount),I.push(A.morphAttributeCount),I.push(A.numDirLights),I.push(A.numPointLights),I.push(A.numSpotLights),I.push(A.numSpotLightMaps),I.push(A.numHemiLights),I.push(A.numRectAreaLights),I.push(A.numDirLightShadows),I.push(A.numPointLightShadows),I.push(A.numSpotLightShadows),I.push(A.numSpotLightShadowsWithMaps),I.push(A.numLightProbes),I.push(A.shadowMapType),I.push(A.toneMapping),I.push(A.numClippingPlanes),I.push(A.numClipIntersection),I.push(A.depthPacking)}function N(I,A){u.disableAll(),A.supportsVertexTextures&&u.enable(0),A.instancing&&u.enable(1),A.instancingColor&&u.enable(2),A.instancingMorph&&u.enable(3),A.matcap&&u.enable(4),A.envMap&&u.enable(5),A.normalMapObjectSpace&&u.enable(6),A.normalMapTangentSpace&&u.enable(7),A.clearcoat&&u.enable(8),A.iridescence&&u.enable(9),A.alphaTest&&u.enable(10),A.vertexColors&&u.enable(11),A.vertexAlphas&&u.enable(12),A.vertexUv1s&&u.enable(13),A.vertexUv2s&&u.enable(14),A.vertexUv3s&&u.enable(15),A.vertexTangents&&u.enable(16),A.anisotropy&&u.enable(17),A.alphaHash&&u.enable(18),A.batching&&u.enable(19),A.dispersion&&u.enable(20),A.batchingColor&&u.enable(21),I.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.reverseDepthBuffer&&u.enable(4),A.skinning&&u.enable(5),A.morphTargets&&u.enable(6),A.morphNormals&&u.enable(7),A.morphColors&&u.enable(8),A.premultipliedAlpha&&u.enable(9),A.shadowMapEnabled&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.decodeVideoTextureEmissive&&u.enable(20),A.alphaToCoverage&&u.enable(21),I.push(u.mask)}function T(I){const A=w[I.type];let O;if(A){const Q=Oi[A];O=Cc.clone(Q.uniforms)}else O=I.uniforms;return O}function D(I,A){let O;for(let Q=0,H=p.length;Q<H;Q++){const ne=p[Q];if(ne.cacheKey===A){O=ne,++O.usedTimes;break}}return O===void 0&&(O=new kb(s,A,I,a),p.push(O)),O}function C(I){if(--I.usedTimes===0){const A=p.indexOf(I);p[A]=p[p.length-1],p.pop(),I.destroy()}}function P(I){f.remove(I)}function k(){f.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:T,acquireProgram:D,releaseProgram:C,releaseShaderCache:P,programs:p,dispose:k}}function Vb(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let u=s.get(c);return u===void 0&&(u={},s.set(c,u)),u}function i(c){s.delete(c)}function o(c,u,f){s.get(c)[u]=f}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function Hb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function f0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function h0(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(m,x,y,w,E,_){let v=s[e];return v===void 0?(v={id:m.id,object:m,geometry:x,material:y,groupOrder:w,renderOrder:m.renderOrder,z:E,group:_},s[e]=v):(v.id=m.id,v.object=m,v.geometry=x,v.material=y,v.groupOrder=w,v.renderOrder=m.renderOrder,v.z=E,v.group=_),e++,v}function u(m,x,y,w,E,_){const v=c(m,x,y,w,E,_);y.transmission>0?i.push(v):y.transparent===!0?o.push(v):t.push(v)}function f(m,x,y,w,E,_){const v=c(m,x,y,w,E,_);y.transmission>0?i.unshift(v):y.transparent===!0?o.unshift(v):t.unshift(v)}function h(m,x){t.length>1&&t.sort(m||Hb),i.length>1&&i.sort(x||f0),o.length>1&&o.sort(x||f0)}function p(){for(let m=e,x=s.length;m<x;m++){const y=s[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:u,unshift:f,finish:p,sort:h}}function Gb(){let s=new WeakMap;function e(i,o){const a=s.get(i);let c;return a===void 0?(c=new h0,s.set(i,[c])):o>=a.length?(c=new h0,a.push(c)):c=a[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function jb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new xt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=t,t}}}function Wb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Xb=0;function Yb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $b(s){const e=new jb,t=Wb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new ee);const o=new ee,a=new Bt,c=new Bt;function u(h){let p=0,m=0,x=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let y=0,w=0,E=0,_=0,v=0,b=0,N=0,T=0,D=0,C=0,P=0;h.sort(Yb);for(let I=0,A=h.length;I<A;I++){const O=h[I],Q=O.color,H=O.intensity,ne=O.distance,oe=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=Q.r*H,m+=Q.g*H,x+=Q.b*H;else if(O.isLightProbe){for(let le=0;le<9;le++)i.probe[le].addScaledVector(O.sh.coefficients[le],H);P++}else if(O.isDirectionalLight){const le=e.get(O);if(le.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const te=O.shadow,V=t.get(O);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.directionalShadow[y]=V,i.directionalShadowMap[y]=oe,i.directionalShadowMatrix[y]=O.shadow.matrix,b++}i.directional[y]=le,y++}else if(O.isSpotLight){const le=e.get(O);le.position.setFromMatrixPosition(O.matrixWorld),le.color.copy(Q).multiplyScalar(H),le.distance=ne,le.coneCos=Math.cos(O.angle),le.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),le.decay=O.decay,i.spot[E]=le;const te=O.shadow;if(O.map&&(i.spotLightMap[D]=O.map,D++,te.updateMatrices(O),O.castShadow&&C++),i.spotLightMatrix[E]=te.matrix,O.castShadow){const V=t.get(O);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.spotShadow[E]=V,i.spotShadowMap[E]=oe,T++}E++}else if(O.isRectAreaLight){const le=e.get(O);le.color.copy(Q).multiplyScalar(H),le.halfWidth.set(O.width*.5,0,0),le.halfHeight.set(0,O.height*.5,0),i.rectArea[_]=le,_++}else if(O.isPointLight){const le=e.get(O);if(le.color.copy(O.color).multiplyScalar(O.intensity),le.distance=O.distance,le.decay=O.decay,O.castShadow){const te=O.shadow,V=t.get(O);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,i.pointShadow[w]=V,i.pointShadowMap[w]=oe,i.pointShadowMatrix[w]=O.shadow.matrix,N++}i.point[w]=le,w++}else if(O.isHemisphereLight){const le=e.get(O);le.skyColor.copy(O.color).multiplyScalar(H),le.groundColor.copy(O.groundColor).multiplyScalar(H),i.hemi[v]=le,v++}}_>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=x;const k=i.hash;(k.directionalLength!==y||k.pointLength!==w||k.spotLength!==E||k.rectAreaLength!==_||k.hemiLength!==v||k.numDirectionalShadows!==b||k.numPointShadows!==N||k.numSpotShadows!==T||k.numSpotMaps!==D||k.numLightProbes!==P)&&(i.directional.length=y,i.spot.length=E,i.rectArea.length=_,i.point.length=w,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=T+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,k.directionalLength=y,k.pointLength=w,k.spotLength=E,k.rectAreaLength=_,k.hemiLength=v,k.numDirectionalShadows=b,k.numPointShadows=N,k.numSpotShadows=T,k.numSpotMaps=D,k.numLightProbes=P,i.version=Xb++)}function f(h,p){let m=0,x=0,y=0,w=0,E=0;const _=p.matrixWorldInverse;for(let v=0,b=h.length;v<b;v++){const N=h[v];if(N.isDirectionalLight){const T=i.directional[m];T.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(_),m++}else if(N.isSpotLight){const T=i.spot[y];T.position.setFromMatrixPosition(N.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(_),y++}else if(N.isRectAreaLight){const T=i.rectArea[w];T.position.setFromMatrixPosition(N.matrixWorld),T.position.applyMatrix4(_),c.identity(),a.copy(N.matrixWorld),a.premultiply(_),c.extractRotation(a),T.halfWidth.set(N.width*.5,0,0),T.halfHeight.set(0,N.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),w++}else if(N.isPointLight){const T=i.point[x];T.position.setFromMatrixPosition(N.matrixWorld),T.position.applyMatrix4(_),x++}else if(N.isHemisphereLight){const T=i.hemi[E];T.direction.setFromMatrixPosition(N.matrixWorld),T.direction.transformDirection(_),E++}}}return{setup:u,setupView:f,state:i}}function p0(s){const e=new $b(s),t=[],i=[];function o(p){h.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function qb(s){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new p0(s),e.set(o,[u])):a>=c.length?(u=new p0(s),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}class Kb extends Ms{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zb extends Ms{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jb=`uniform sampler2D shadow_pass;
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
}`;function e2(s,e,t){let i=new mh;const o=new tt,a=new tt,c=new qt,u=new Kb({depthPacking:DS}),f=new Zb,h={},p=t.maxTextureSize,m={[Hr]:Yn,[Yn]:Hr,[fi]:fi},x=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Qb,fragmentShader:Jb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const w=new $n;w.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new In(w,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ix;let v=this.type;this.render=function(C,P,k){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;const I=s.getRenderTarget(),A=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(ar),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const H=v!==tr&&this.type===tr,ne=v===tr&&this.type!==tr;for(let oe=0,le=C.length;oe<le;oe++){const te=C[oe],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const re=V.getFrameExtents();if(o.multiply(re),a.copy(V.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/re.x),o.x=a.x*re.x,V.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/re.y),o.y=a.y*re.y,V.mapSize.y=a.y)),V.map===null||H===!0||ne===!0){const F=this.type!==tr?{minFilter:gi,magFilter:gi}:{};V.map!==null&&V.map.dispose(),V.map=new Ri(o.x,o.y,F),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const j=V.getViewportCount();for(let F=0;F<j;F++){const $=V.getViewport(F);c.set(a.x*$.x,a.y*$.y,a.x*$.z,a.y*$.w),Q.viewport(c),V.updateMatrices(te,F),i=V.getFrustum(),T(P,k,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===tr&&b(V,k),V.needsUpdate=!1}v=this.type,_.needsUpdate=!1,s.setRenderTarget(I,A,O)};function b(C,P){const k=e.update(E);x.defines.VSM_SAMPLES!==C.blurSamples&&(x.defines.VSM_SAMPLES=C.blurSamples,y.defines.VSM_SAMPLES=C.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ri(o.x,o.y)),x.uniforms.shadow_pass.value=C.map.texture,x.uniforms.resolution.value=C.mapSize,x.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(P,null,k,x,E,null),y.uniforms.shadow_pass.value=C.mapPass.texture,y.uniforms.resolution.value=C.mapSize,y.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(P,null,k,y,E,null)}function N(C,P,k,I){let A=null;const O=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)A=O;else if(A=k.isPointLight===!0?f:u,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Q=A.uuid,H=P.uuid;let ne=h[Q];ne===void 0&&(ne={},h[Q]=ne);let oe=ne[H];oe===void 0&&(oe=A.clone(),ne[H]=oe,P.addEventListener("dispose",D)),A=oe}if(A.visible=P.visible,A.wireframe=P.wireframe,I===tr?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:m[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Q=s.properties.get(A);Q.light=k}return A}function T(C,P,k,I,A){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===tr)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);const H=e.update(C),ne=C.material;if(Array.isArray(ne)){const oe=H.groups;for(let le=0,te=oe.length;le<te;le++){const V=oe[le],re=ne[V.materialIndex];if(re&&re.visible){const j=N(C,re,I,A);C.onBeforeShadow(s,C,P,k,H,j,V),s.renderBufferDirect(k,null,H,j,C,V),C.onAfterShadow(s,C,P,k,H,j,V)}}}else if(ne.visible){const oe=N(C,ne,I,A);C.onBeforeShadow(s,C,P,k,H,oe,null),s.renderBufferDirect(k,null,H,oe,C,null),C.onAfterShadow(s,C,P,k,H,oe,null)}}const Q=C.children;for(let H=0,ne=Q.length;H<ne;H++)T(Q[H],P,k,I,A)}function D(C){C.target.removeEventListener("dispose",D);for(const k in h){const I=h[k],A=C.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}const t2={[xf]:vf,[_f]:Mf,[yf]:Ef,[Mo]:Sf,[vf]:xf,[Mf]:_f,[Ef]:yf,[Sf]:Mo};function n2(s,e){function t(){let X=!1;const Le=new qt;let fe=null;const ve=new qt(0,0,0,0);return{setMask:function(Oe){fe!==Oe&&!X&&(s.colorMask(Oe,Oe,Oe,Oe),fe=Oe)},setLocked:function(Oe){X=Oe},setClear:function(Oe,ke,pt,Vt,en){en===!0&&(Oe*=Vt,ke*=Vt,pt*=Vt),Le.set(Oe,ke,pt,Vt),ve.equals(Le)===!1&&(s.clearColor(Oe,ke,pt,Vt),ve.copy(Le))},reset:function(){X=!1,fe=null,ve.set(-1,0,0,0)}}}function i(){let X=!1,Le=!1,fe=null,ve=null,Oe=null;return{setReversed:function(ke){if(Le!==ke){const pt=e.get("EXT_clip_control");Le?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const Vt=Oe;Oe=null,this.setClear(Vt)}Le=ke},getReversed:function(){return Le},setTest:function(ke){ke?he(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(ke){fe!==ke&&!X&&(s.depthMask(ke),fe=ke)},setFunc:function(ke){if(Le&&(ke=t2[ke]),ve!==ke){switch(ke){case xf:s.depthFunc(s.NEVER);break;case vf:s.depthFunc(s.ALWAYS);break;case _f:s.depthFunc(s.LESS);break;case Mo:s.depthFunc(s.LEQUAL);break;case yf:s.depthFunc(s.EQUAL);break;case Sf:s.depthFunc(s.GEQUAL);break;case Mf:s.depthFunc(s.GREATER);break;case Ef:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=ke}},setLocked:function(ke){X=ke},setClear:function(ke){Oe!==ke&&(Le&&(ke=1-ke),s.clearDepth(ke),Oe=ke)},reset:function(){X=!1,fe=null,ve=null,Oe=null,Le=!1}}}function o(){let X=!1,Le=null,fe=null,ve=null,Oe=null,ke=null,pt=null,Vt=null,en=null;return{setTest:function(Ct){X||(Ct?he(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Ct){Le!==Ct&&!X&&(s.stencilMask(Ct),Le=Ct)},setFunc:function(Ct,kn,bn){(fe!==Ct||ve!==kn||Oe!==bn)&&(s.stencilFunc(Ct,kn,bn),fe=Ct,ve=kn,Oe=bn)},setOp:function(Ct,kn,bn){(ke!==Ct||pt!==kn||Vt!==bn)&&(s.stencilOp(Ct,kn,bn),ke=Ct,pt=kn,Vt=bn)},setLocked:function(Ct){X=Ct},setClear:function(Ct){en!==Ct&&(s.clearStencil(Ct),en=Ct)},reset:function(){X=!1,Le=null,fe=null,ve=null,Oe=null,ke=null,pt=null,Vt=null,en=null}}}const a=new t,c=new i,u=new o,f=new WeakMap,h=new WeakMap;let p={},m={},x=new WeakMap,y=[],w=null,E=!1,_=null,v=null,b=null,N=null,T=null,D=null,C=null,P=new xt(0,0,0),k=0,I=!1,A=null,O=null,Q=null,H=null,ne=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,te=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),le=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),le=te>=2);let re=null,j={};const F=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),Te=new qt().fromArray(F),J=new qt().fromArray($);function ae(X,Le,fe,ve){const Oe=new Uint8Array(4),ke=s.createTexture();s.bindTexture(X,ke),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<fe;pt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(Le+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return ke}const ge={};ge[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),he(s.DEPTH_TEST),c.setFunc(Mo),ft(!1),ut(vg),he(s.CULL_FACE),q(ar);function he(X){p[X]!==!0&&(s.enable(X),p[X]=!0)}function ye(X){p[X]!==!1&&(s.disable(X),p[X]=!1)}function Ce(X,Le){return m[X]!==Le?(s.bindFramebuffer(X,Le),m[X]=Le,X===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Le),X===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ve(X,Le){let fe=y,ve=!1;if(X){fe=x.get(Le),fe===void 0&&(fe=[],x.set(Le,fe));const Oe=X.textures;if(fe.length!==Oe.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,pt=Oe.length;ke<pt;ke++)fe[ke]=s.COLOR_ATTACHMENT0+ke;fe.length=Oe.length,ve=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,ve=!0);ve&&s.drawBuffers(fe)}function ct(X){return w!==X?(s.useProgram(X),w=X,!0):!1}const gt={[hs]:s.FUNC_ADD,[sS]:s.FUNC_SUBTRACT,[oS]:s.FUNC_REVERSE_SUBTRACT};gt[aS]=s.MIN,gt[lS]=s.MAX;const bt={[cS]:s.ZERO,[uS]:s.ONE,[dS]:s.SRC_COLOR,[mf]:s.SRC_ALPHA,[xS]:s.SRC_ALPHA_SATURATE,[mS]:s.DST_COLOR,[hS]:s.DST_ALPHA,[fS]:s.ONE_MINUS_SRC_COLOR,[gf]:s.ONE_MINUS_SRC_ALPHA,[gS]:s.ONE_MINUS_DST_COLOR,[pS]:s.ONE_MINUS_DST_ALPHA,[vS]:s.CONSTANT_COLOR,[_S]:s.ONE_MINUS_CONSTANT_COLOR,[yS]:s.CONSTANT_ALPHA,[SS]:s.ONE_MINUS_CONSTANT_ALPHA};function q(X,Le,fe,ve,Oe,ke,pt,Vt,en,Ct){if(X===ar){E===!0&&(ye(s.BLEND),E=!1);return}if(E===!1&&(he(s.BLEND),E=!0),X!==rS){if(X!==_||Ct!==I){if((v!==hs||T!==hs)&&(s.blendEquation(s.FUNC_ADD),v=hs,T=hs),Ct)switch(X){case xo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pf:s.blendFunc(s.ONE,s.ONE);break;case _g:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case xo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _g:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}b=null,N=null,D=null,C=null,P.set(0,0,0),k=0,_=X,I=Ct}return}Oe=Oe||Le,ke=ke||fe,pt=pt||ve,(Le!==v||Oe!==T)&&(s.blendEquationSeparate(gt[Le],gt[Oe]),v=Le,T=Oe),(fe!==b||ve!==N||ke!==D||pt!==C)&&(s.blendFuncSeparate(bt[fe],bt[ve],bt[ke],bt[pt]),b=fe,N=ve,D=ke,C=pt),(Vt.equals(P)===!1||en!==k)&&(s.blendColor(Vt.r,Vt.g,Vt.b,en),P.copy(Vt),k=en),_=X,I=!1}function Wt(X,Le){X.side===fi?ye(s.CULL_FACE):he(s.CULL_FACE);let fe=X.side===Yn;Le&&(fe=!fe),ft(fe),X.blending===xo&&X.transparent===!1?q(ar):q(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),a.setMask(X.colorWrite);const ve=X.stencilWrite;u.setTest(ve),ve&&(u.setMask(X.stencilWriteMask),u.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),u.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),At(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(X){A!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),A=X)}function ut(X){X!==tS?(he(s.CULL_FACE),X!==O&&(X===vg?s.cullFace(s.BACK):X===nS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),O=X}function Qe(X){X!==Q&&(le&&s.lineWidth(X),Q=X)}function At(X,Le,fe){X?(he(s.POLYGON_OFFSET_FILL),(H!==Le||ne!==fe)&&(s.polygonOffset(Le,fe),H=Le,ne=fe)):ye(s.POLYGON_OFFSET_FILL)}function Xe(X){X?he(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function z(X){X===void 0&&(X=s.TEXTURE0+oe-1),re!==X&&(s.activeTexture(X),re=X)}function L(X,Le,fe){fe===void 0&&(re===null?fe=s.TEXTURE0+oe-1:fe=re);let ve=j[fe];ve===void 0&&(ve={type:void 0,texture:void 0},j[fe]=ve),(ve.type!==X||ve.texture!==Le)&&(re!==fe&&(s.activeTexture(fe),re=fe),s.bindTexture(X,Le||ge[X]),ve.type=X,ve.texture=Le)}function W(){const X=j[re];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(X){Te.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Te.copy(X))}function ze(X){J.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function _t(X,Le){let fe=h.get(Le);fe===void 0&&(fe=new WeakMap,h.set(Le,fe));let ve=fe.get(X);ve===void 0&&(ve=s.getUniformBlockIndex(Le,X.name),fe.set(X,ve))}function ot(X,Le){const ve=h.get(Le).get(X);f.get(Le)!==ve&&(s.uniformBlockBinding(Le,ve,X.__bindingPointIndex),f.set(Le,ve))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},re=null,j={},m={},x=new WeakMap,y=[],w=null,E=!1,_=null,v=null,b=null,N=null,T=null,D=null,C=null,P=new xt(0,0,0),k=0,I=!1,A=null,O=null,Q=null,H=null,ne=null,Te.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:he,disable:ye,bindFramebuffer:Ce,drawBuffers:Ve,useProgram:ct,setBlending:q,setMaterial:Wt,setFlipSided:ft,setCullFace:ut,setLineWidth:Qe,setPolygonOffset:At,setScissorTest:Xe,activeTexture:z,bindTexture:L,unbindTexture:W,compressedTexImage2D:pe,compressedTexImage3D:xe,texImage2D:De,texImage3D:Je,updateUBOMapping:_t,uniformBlockBinding:ot,texStorage2D:nt,texStorage3D:Ee,texSubImage2D:me,texSubImage3D:Ue,compressedTexSubImage2D:be,compressedTexSubImage3D:Ne,scissor:et,viewport:ze,reset:ht}}function m0(s,e,t,i){const o=i2(i);switch(t){case ux:return s*e;case fx:return s*e;case hx:return s*e*2;case px:return s*e/o.components*o.byteLength;case lh:return s*e/o.components*o.byteLength;case mx:return s*e*2/o.components*o.byteLength;case ch:return s*e*2/o.components*o.byteLength;case dx:return s*e*3/o.components*o.byteLength;case pi:return s*e*4/o.components*o.byteLength;case uh:return s*e*4/o.components*o.byteLength;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gc:case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Af:case Rf:return Math.max(s,16)*Math.max(e,8)/4;case bf:case Cf:return Math.max(s,8)*Math.max(e,8)/2;case Pf:case Nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vc:case Yf:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*16;case gx:case qf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kf:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i2(s){switch(s){case dr:case ax:return{byteLength:1,components:1};case wa:case lx:case cr:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case _s:case sh:case sr:return{byteLength:4,components:1};case cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function r2(s,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new tt,p=new WeakMap;let m;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(z,L){return y?new OffscreenCanvas(z,L):Ac("canvas")}function E(z,L,W){let pe=1;const xe=Xe(z);if((xe.width>W||xe.height>W)&&(pe=W/Math.max(xe.width,xe.height)),pe<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const me=Math.floor(pe*xe.width),Ue=Math.floor(pe*xe.height);m===void 0&&(m=w(me,Ue));const be=L?w(me,Ue):m;return be.width=me,be.height=Ue,be.getContext("2d").drawImage(z,0,0,me,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+me+"x"+Ue+")."),be}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),z;return z}function _(z){return z.generateMipmaps}function v(z){s.generateMipmap(z)}function b(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(z,L,W,pe,xe=!1){if(z!==null){if(s[z]!==void 0)return s[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let me=L;if(L===s.RED&&(W===s.FLOAT&&(me=s.R32F),W===s.HALF_FLOAT&&(me=s.R16F),W===s.UNSIGNED_BYTE&&(me=s.R8)),L===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(me=s.R8UI),W===s.UNSIGNED_SHORT&&(me=s.R16UI),W===s.UNSIGNED_INT&&(me=s.R32UI),W===s.BYTE&&(me=s.R8I),W===s.SHORT&&(me=s.R16I),W===s.INT&&(me=s.R32I)),L===s.RG&&(W===s.FLOAT&&(me=s.RG32F),W===s.HALF_FLOAT&&(me=s.RG16F),W===s.UNSIGNED_BYTE&&(me=s.RG8)),L===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(me=s.RG8UI),W===s.UNSIGNED_SHORT&&(me=s.RG16UI),W===s.UNSIGNED_INT&&(me=s.RG32UI),W===s.BYTE&&(me=s.RG8I),W===s.SHORT&&(me=s.RG16I),W===s.INT&&(me=s.RG32I)),L===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(me=s.RGB8UI),W===s.UNSIGNED_SHORT&&(me=s.RGB16UI),W===s.UNSIGNED_INT&&(me=s.RGB32UI),W===s.BYTE&&(me=s.RGB8I),W===s.SHORT&&(me=s.RGB16I),W===s.INT&&(me=s.RGB32I)),L===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),W===s.UNSIGNED_INT&&(me=s.RGBA32UI),W===s.BYTE&&(me=s.RGBA8I),W===s.SHORT&&(me=s.RGBA16I),W===s.INT&&(me=s.RGBA32I)),L===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),L===s.RGBA){const Ue=xe?Fc:Pt.getTransfer(pe);W===s.FLOAT&&(me=s.RGBA32F),W===s.HALF_FLOAT&&(me=s.RGBA16F),W===s.UNSIGNED_BYTE&&(me=Ue===kt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function T(z,L){let W;return z?L===null||L===_s||L===To?W=s.DEPTH24_STENCIL8:L===sr?W=s.DEPTH32F_STENCIL8:L===wa&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===_s||L===To?W=s.DEPTH_COMPONENT24:L===sr?W=s.DEPTH_COMPONENT32F:L===wa&&(W=s.DEPTH_COMPONENT16),W}function D(z,L){return _(z)===!0||z.isFramebufferTexture&&z.minFilter!==gi&&z.minFilter!==Ci?Math.log2(Math.max(L.width,L.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?L.mipmaps.length:1}function C(z){const L=z.target;L.removeEventListener("dispose",C),k(L),L.isVideoTexture&&p.delete(L)}function P(z){const L=z.target;L.removeEventListener("dispose",P),A(L)}function k(z){const L=i.get(z);if(L.__webglInit===void 0)return;const W=z.source,pe=x.get(W);if(pe){const xe=pe[L.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&I(z),Object.keys(pe).length===0&&x.delete(W)}i.remove(z)}function I(z){const L=i.get(z);s.deleteTexture(L.__webglTexture);const W=z.source,pe=x.get(W);delete pe[L.__cacheKey],c.memory.textures--}function A(z){const L=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(L.__webglFramebuffer[pe]))for(let xe=0;xe<L.__webglFramebuffer[pe].length;xe++)s.deleteFramebuffer(L.__webglFramebuffer[pe][xe]);else s.deleteFramebuffer(L.__webglFramebuffer[pe]);L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer[pe])}else{if(Array.isArray(L.__webglFramebuffer))for(let pe=0;pe<L.__webglFramebuffer.length;pe++)s.deleteFramebuffer(L.__webglFramebuffer[pe]);else s.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&s.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let pe=0;pe<L.__webglColorRenderbuffer.length;pe++)L.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(L.__webglColorRenderbuffer[pe]);L.__webglDepthRenderbuffer&&s.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const W=z.textures;for(let pe=0,xe=W.length;pe<xe;pe++){const me=i.get(W[pe]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),c.memory.textures--),i.remove(W[pe])}i.remove(z)}let O=0;function Q(){O=0}function H(){const z=O;return z>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),O+=1,z}function ne(z){const L=[];return L.push(z.wrapS),L.push(z.wrapT),L.push(z.wrapR||0),L.push(z.magFilter),L.push(z.minFilter),L.push(z.anisotropy),L.push(z.internalFormat),L.push(z.format),L.push(z.type),L.push(z.generateMipmaps),L.push(z.premultiplyAlpha),L.push(z.flipY),L.push(z.unpackAlignment),L.push(z.colorSpace),L.join()}function oe(z,L){const W=i.get(z);if(z.isVideoTexture&&Qe(z),z.isRenderTargetTexture===!1&&z.version>0&&W.__version!==z.version){const pe=z.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,z,L);return}}t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+L)}function le(z,L){const W=i.get(z);if(z.version>0&&W.__version!==z.version){J(W,z,L);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+L)}function te(z,L){const W=i.get(z);if(z.version>0&&W.__version!==z.version){J(W,z,L);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+L)}function V(z,L){const W=i.get(z);if(z.version>0&&W.__version!==z.version){ae(W,z,L);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+L)}const re={[Ec]:s.REPEAT,[Br]:s.CLAMP_TO_EDGE,[wc]:s.MIRRORED_REPEAT},j={[gi]:s.NEAREST,[ox]:s.NEAREST_MIPMAP_NEAREST,[va]:s.NEAREST_MIPMAP_LINEAR,[Ci]:s.LINEAR,[hc]:s.LINEAR_MIPMAP_NEAREST,[Vr]:s.LINEAR_MIPMAP_LINEAR},F={[US]:s.NEVER,[VS]:s.ALWAYS,[kS]:s.LESS,[xx]:s.LEQUAL,[FS]:s.EQUAL,[BS]:s.GEQUAL,[OS]:s.GREATER,[zS]:s.NOTEQUAL};function $(z,L){if(L.type===sr&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Ci||L.magFilter===hc||L.magFilter===va||L.magFilter===Vr||L.minFilter===Ci||L.minFilter===hc||L.minFilter===va||L.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,re[L.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,re[L.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,re[L.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,j[L.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,j[L.minFilter]),L.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,F[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===gi||L.minFilter!==va&&L.minFilter!==Vr||L.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||i.get(L).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(z,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,o.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy}}}function Te(z,L){let W=!1;z.__webglInit===void 0&&(z.__webglInit=!0,L.addEventListener("dispose",C));const pe=L.source;let xe=x.get(pe);xe===void 0&&(xe={},x.set(pe,xe));const me=ne(L);if(me!==z.__cacheKey){xe[me]===void 0&&(xe[me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,W=!0),xe[me].usedTimes++;const Ue=xe[z.__cacheKey];Ue!==void 0&&(xe[z.__cacheKey].usedTimes--,Ue.usedTimes===0&&I(L)),z.__cacheKey=me,z.__webglTexture=xe[me].texture}return W}function J(z,L,W){let pe=s.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),L.isData3DTexture&&(pe=s.TEXTURE_3D);const xe=Te(z,L),me=L.source;t.bindTexture(pe,z.__webglTexture,s.TEXTURE0+W);const Ue=i.get(me);if(me.version!==Ue.__version||xe===!0){t.activeTexture(s.TEXTURE0+W);const be=Pt.getPrimaries(Pt.workingColorSpace),Ne=L.colorSpace===ir?null:Pt.getPrimaries(L.colorSpace),nt=L.colorSpace===ir||be===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ee=E(L.image,!1,o.maxTextureSize);Ee=At(L,Ee);const De=a.convert(L.format,L.colorSpace),Je=a.convert(L.type);let et=N(L.internalFormat,De,Je,L.colorSpace,L.isVideoTexture);$(pe,L);let ze;const _t=L.mipmaps,ot=L.isVideoTexture!==!0,ht=Ue.__version===void 0||xe===!0,X=me.dataReady,Le=D(L,Ee);if(L.isDepthTexture)et=T(L.format===bo,L.type),ht&&(ot?t.texStorage2D(s.TEXTURE_2D,1,et,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,De,Je,null));else if(L.isDataTexture)if(_t.length>0){ot&&ht&&t.texStorage2D(s.TEXTURE_2D,Le,et,_t[0].width,_t[0].height);for(let fe=0,ve=_t.length;fe<ve;fe++)ze=_t[fe],ot?X&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,ze.width,ze.height,De,Je,ze.data):t.texImage2D(s.TEXTURE_2D,fe,et,ze.width,ze.height,0,De,Je,ze.data);L.generateMipmaps=!1}else ot?(ht&&t.texStorage2D(s.TEXTURE_2D,Le,et,Ee.width,Ee.height),X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,De,Je,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,De,Je,Ee.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){ot&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,et,_t[0].width,_t[0].height,Ee.depth);for(let fe=0,ve=_t.length;fe<ve;fe++)if(ze=_t[fe],L.format!==pi)if(De!==null)if(ot){if(X)if(L.layerUpdates.size>0){const Oe=m0(ze.width,ze.height,L.format,L.type);for(const ke of L.layerUpdates){const pt=ze.data.subarray(ke*Oe/ze.data.BYTES_PER_ELEMENT,(ke+1)*Oe/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,ke,ze.width,ze.height,1,De,pt)}L.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,ze.width,ze.height,Ee.depth,De,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,et,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,ze.width,ze.height,Ee.depth,De,Je,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,et,ze.width,ze.height,Ee.depth,0,De,Je,ze.data)}else{ot&&ht&&t.texStorage2D(s.TEXTURE_2D,Le,et,_t[0].width,_t[0].height);for(let fe=0,ve=_t.length;fe<ve;fe++)ze=_t[fe],L.format!==pi?De!==null?ot?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,ze.width,ze.height,De,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,et,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?X&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,ze.width,ze.height,De,Je,ze.data):t.texImage2D(s.TEXTURE_2D,fe,et,ze.width,ze.height,0,De,Je,ze.data)}else if(L.isDataArrayTexture)if(ot){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,et,Ee.width,Ee.height,Ee.depth),X)if(L.layerUpdates.size>0){const fe=m0(Ee.width,Ee.height,L.format,L.type);for(const ve of L.layerUpdates){const Oe=Ee.data.subarray(ve*fe/Ee.data.BYTES_PER_ELEMENT,(ve+1)*fe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,Ee.width,Ee.height,1,De,Je,Oe)}L.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,Je,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,De,Je,Ee.data);else if(L.isData3DTexture)ot?(ht&&t.texStorage3D(s.TEXTURE_3D,Le,et,Ee.width,Ee.height,Ee.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,Je,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,De,Je,Ee.data);else if(L.isFramebufferTexture){if(ht)if(ot)t.texStorage2D(s.TEXTURE_2D,Le,et,Ee.width,Ee.height);else{let fe=Ee.width,ve=Ee.height;for(let Oe=0;Oe<Le;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,et,fe,ve,0,De,Je,null),fe>>=1,ve>>=1}}else if(_t.length>0){if(ot&&ht){const fe=Xe(_t[0]);t.texStorage2D(s.TEXTURE_2D,Le,et,fe.width,fe.height)}for(let fe=0,ve=_t.length;fe<ve;fe++)ze=_t[fe],ot?X&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,De,Je,ze):t.texImage2D(s.TEXTURE_2D,fe,et,De,Je,ze);L.generateMipmaps=!1}else if(ot){if(ht){const fe=Xe(Ee);t.texStorage2D(s.TEXTURE_2D,Le,et,fe.width,fe.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Je,Ee)}else t.texImage2D(s.TEXTURE_2D,0,et,De,Je,Ee);_(L)&&v(pe),Ue.__version=me.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function ae(z,L,W){if(L.image.length!==6)return;const pe=Te(z,L),xe=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+W);const me=i.get(xe);if(xe.version!==me.__version||pe===!0){t.activeTexture(s.TEXTURE0+W);const Ue=Pt.getPrimaries(Pt.workingColorSpace),be=L.colorSpace===ir?null:Pt.getPrimaries(L.colorSpace),Ne=L.colorSpace===ir||Ue===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const nt=L.isCompressedTexture||L.image[0].isCompressedTexture,Ee=L.image[0]&&L.image[0].isDataTexture,De=[];for(let ve=0;ve<6;ve++)!nt&&!Ee?De[ve]=E(L.image[ve],!0,o.maxCubemapSize):De[ve]=Ee?L.image[ve].image:L.image[ve],De[ve]=At(L,De[ve]);const Je=De[0],et=a.convert(L.format,L.colorSpace),ze=a.convert(L.type),_t=N(L.internalFormat,et,ze,L.colorSpace),ot=L.isVideoTexture!==!0,ht=me.__version===void 0||pe===!0,X=xe.dataReady;let Le=D(L,Je);$(s.TEXTURE_CUBE_MAP,L);let fe;if(nt){ot&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,_t,Je.width,Je.height);for(let ve=0;ve<6;ve++){fe=De[ve].mipmaps;for(let Oe=0;Oe<fe.length;Oe++){const ke=fe[Oe];L.format!==pi?et!==null?ot?X&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,0,0,ke.width,ke.height,et,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,_t,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,0,0,ke.width,ke.height,et,ze,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,_t,ke.width,ke.height,0,et,ze,ke.data)}}}else{if(fe=L.mipmaps,ot&&ht){fe.length>0&&Le++;const ve=Xe(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,_t,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ee){ot?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,De[ve].width,De[ve].height,et,ze,De[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,_t,De[ve].width,De[ve].height,0,et,ze,De[ve].data);for(let Oe=0;Oe<fe.length;Oe++){const pt=fe[Oe].image[ve].image;ot?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,0,0,pt.width,pt.height,et,ze,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,_t,pt.width,pt.height,0,et,ze,pt.data)}}else{ot?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,et,ze,De[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,_t,et,ze,De[ve]);for(let Oe=0;Oe<fe.length;Oe++){const ke=fe[Oe];ot?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,0,0,et,ze,ke.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,_t,et,ze,ke.image[ve])}}}_(L)&&v(s.TEXTURE_CUBE_MAP),me.__version=xe.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function ge(z,L,W,pe,xe,me){const Ue=a.convert(W.format,W.colorSpace),be=a.convert(W.type),Ne=N(W.internalFormat,Ue,be,W.colorSpace),nt=i.get(L),Ee=i.get(W);if(Ee.__renderTarget=L,!nt.__hasExternalTextures){const De=Math.max(1,L.width>>me),Je=Math.max(1,L.height>>me);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,me,Ne,De,Je,L.depth,0,Ue,be,null):t.texImage2D(xe,me,Ne,De,Je,0,Ue,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,z),ut(L)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,xe,Ee.__webglTexture,0,ft(L)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,xe,Ee.__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(z,L,W){if(s.bindRenderbuffer(s.RENDERBUFFER,z),L.depthBuffer){const pe=L.depthTexture,xe=pe&&pe.isDepthTexture?pe.type:null,me=T(L.stencilBuffer,xe),Ue=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=ft(L);ut(L)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,me,L.width,L.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,me,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,me,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,z)}else{const pe=L.textures;for(let xe=0;xe<pe.length;xe++){const me=pe[xe],Ue=a.convert(me.format,me.colorSpace),be=a.convert(me.type),Ne=N(me.internalFormat,Ue,be,me.colorSpace),nt=ft(L);W&&ut(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Ne,L.width,L.height):ut(L)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,Ne,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,L.width,L.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(z,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,z),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(L.depthTexture);pe.__renderTarget=L,(!pe.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),oe(L.depthTexture,0);const xe=pe.__webglTexture,me=ft(L);if(L.depthTexture.format===vo)ut(L)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(L.depthTexture.format===bo)ut(L)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ce(z){const L=i.get(z),W=z.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==z.depthTexture){const pe=z.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),pe){const xe=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,pe.removeEventListener("dispose",xe)};pe.addEventListener("dispose",xe),L.__depthDisposeCallback=xe}L.__boundDepthTexture=pe}if(z.depthTexture&&!L.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ye(L.__webglFramebuffer,z)}else if(W){L.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer[pe]),L.__webglDepthbuffer[pe]===void 0)L.__webglDepthbuffer[pe]=s.createRenderbuffer(),he(L.__webglDepthbuffer[pe],z,!1);else{const xe=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=L.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,me)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=s.createRenderbuffer(),he(L.__webglDepthbuffer,z,!1);else{const pe=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=L.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,xe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(z,L,W){const pe=i.get(z);L!==void 0&&ge(pe.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Ce(z)}function ct(z){const L=z.texture,W=i.get(z),pe=i.get(L);z.addEventListener("dispose",P);const xe=z.textures,me=z.isWebGLCubeRenderTarget===!0,Ue=xe.length>1;if(Ue||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=L.version,c.memory.textures++),me){W.__webglFramebuffer=[];for(let be=0;be<6;be++)if(L.mipmaps&&L.mipmaps.length>0){W.__webglFramebuffer[be]=[];for(let Ne=0;Ne<L.mipmaps.length;Ne++)W.__webglFramebuffer[be][Ne]=s.createFramebuffer()}else W.__webglFramebuffer[be]=s.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){W.__webglFramebuffer=[];for(let be=0;be<L.mipmaps.length;be++)W.__webglFramebuffer[be]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let be=0,Ne=xe.length;be<Ne;be++){const nt=i.get(xe[be]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),c.memory.textures++)}if(z.samples>0&&ut(z)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){const Ne=xe[be];W.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[be]);const nt=a.convert(Ne.format,Ne.colorSpace),Ee=a.convert(Ne.type),De=N(Ne.internalFormat,nt,Ee,Ne.colorSpace,z.isXRRenderTarget===!0),Je=ft(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,De,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,W.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),he(W.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),$(s.TEXTURE_CUBE_MAP,L);for(let be=0;be<6;be++)if(L.mipmaps&&L.mipmaps.length>0)for(let Ne=0;Ne<L.mipmaps.length;Ne++)ge(W.__webglFramebuffer[be][Ne],z,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne);else ge(W.__webglFramebuffer[be],z,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);_(L)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let be=0,Ne=xe.length;be<Ne;be++){const nt=xe[be],Ee=i.get(nt);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),$(s.TEXTURE_2D,nt),ge(W.__webglFramebuffer,z,nt,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),_(nt)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(be=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,pe.__webglTexture),$(be,L),L.mipmaps&&L.mipmaps.length>0)for(let Ne=0;Ne<L.mipmaps.length;Ne++)ge(W.__webglFramebuffer[Ne],z,L,s.COLOR_ATTACHMENT0,be,Ne);else ge(W.__webglFramebuffer,z,L,s.COLOR_ATTACHMENT0,be,0);_(L)&&v(be),t.unbindTexture()}z.depthBuffer&&Ce(z)}function gt(z){const L=z.textures;for(let W=0,pe=L.length;W<pe;W++){const xe=L[W];if(_(xe)){const me=b(z),Ue=i.get(xe).__webglTexture;t.bindTexture(me,Ue),v(me),t.unbindTexture()}}}const bt=[],q=[];function Wt(z){if(z.samples>0){if(ut(z)===!1){const L=z.textures,W=z.width,pe=z.height;let xe=s.COLOR_BUFFER_BIT;const me=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=i.get(z),be=L.length>1;if(be)for(let Ne=0;Ne<L.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ne=0;Ne<L.length;Ne++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const nt=i.get(L[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,W,pe,0,0,W,pe,xe,s.NEAREST),f===!0&&(bt.length=0,q.length=0,bt.push(s.COLOR_ATTACHMENT0+Ne),z.depthBuffer&&z.resolveDepthBuffer===!1&&(bt.push(me),q.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ne=0;Ne<L.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const nt=i.get(L[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,nt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&f){const L=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[L])}}}function ft(z){return Math.min(o.maxSamples,z.samples)}function ut(z){const L=i.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Qe(z){const L=c.render.frame;p.get(z)!==L&&(p.set(z,L),z.update())}function At(z,L){const W=z.colorSpace,pe=z.format,xe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||W!==Ro&&W!==ir&&(Pt.getTransfer(W)===kt?(pe!==pi||xe!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),L}function Xe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=Q,this.setTexture2D=oe,this.setTexture2DArray=le,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=Ve,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ut}function s2(s,e){function t(i,o=ir){let a;const c=Pt.getTransfer(o);if(i===dr)return s.UNSIGNED_BYTE;if(i===oh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ah)return s.UNSIGNED_SHORT_5_5_5_1;if(i===cx)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===ax)return s.BYTE;if(i===lx)return s.SHORT;if(i===wa)return s.UNSIGNED_SHORT;if(i===sh)return s.INT;if(i===_s)return s.UNSIGNED_INT;if(i===sr)return s.FLOAT;if(i===cr)return s.HALF_FLOAT;if(i===ux)return s.ALPHA;if(i===dx)return s.RGB;if(i===pi)return s.RGBA;if(i===fx)return s.LUMINANCE;if(i===hx)return s.LUMINANCE_ALPHA;if(i===vo)return s.DEPTH_COMPONENT;if(i===bo)return s.DEPTH_STENCIL;if(i===px)return s.RED;if(i===lh)return s.RED_INTEGER;if(i===mx)return s.RG;if(i===ch)return s.RG_INTEGER;if(i===uh)return s.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===xc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bf||i===Af||i===Cf||i===Rf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===bf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Af)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pf||i===Nf||i===Lf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Pf||i===Nf)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Lf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Df||i===If||i===Uf||i===kf||i===Ff||i===Of||i===zf||i===Bf||i===Vf||i===Hf||i===Gf||i===jf||i===Wf||i===Xf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Df)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===If)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ff)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Of)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vc||i===Yf||i===$f)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===vc)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$f)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gx||i===qf||i===Kf||i===Zf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===vc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===qf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===To?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class o2 extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mo extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a2={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const _=t.getJointPose(E,i),v=this._getHandJoint(h,E);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],x=p.position.distanceTo(m.position),y=.02,w=.005;h.inputState.pinching&&x>y+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=y-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(a2)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const l2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c2=`
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

}`;class u2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Un,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xn({vertexShader:l2,fragmentShader:c2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new Aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d2 extends Ss{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",f=1,h=null,p=null,m=null,x=null,y=null,w=null;const E=new u2,_=t.getContextAttributes();let v=null,b=null;const N=[],T=[],D=new tt;let C=null;const P=new Dn;P.viewport=new qt;const k=new Dn;k.viewport=new qt;const I=[P,k],A=new o2;let O=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=N[J];return ae===void 0&&(ae=new tf,N[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=N[J];return ae===void 0&&(ae=new tf,N[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=N[J];return ae===void 0&&(ae=new tf,N[J]=ae),ae.getHandSpace()};function H(J){const ae=T.indexOf(J.inputSource);if(ae===-1)return;const ge=N[ae];ge!==void 0&&(ge.update(J.inputSource,J.frame,h||c),ge.dispatchEvent({type:J.type,data:J.inputSource}))}function ne(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",ne),o.removeEventListener("inputsourceschange",oe);for(let J=0;J<N.length;J++){const ae=T[J];ae!==null&&(T[J]=null,N[J].disconnect(ae))}O=null,Q=null,E.reset(),e.setRenderTarget(v),y=null,x=null,m=null,o=null,b=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){u=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return m},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",ne),o.addEventListener("inputsourceschange",oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),o.renderState.layers===void 0){const ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,ae),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new Ri(y.framebufferWidth,y.framebufferHeight,{format:pi,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ae=null,ge=null,he=null;_.depth&&(he=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=_.stencil?bo:vo,ge=_.stencil?To:_s);const ye={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:a};m=new XRWebGLBinding(o,t),x=m.createProjectionLayer(ye),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new Ri(x.textureWidth,x.textureHeight,{format:pi,type:dr,depthTexture:new Ax(x.textureWidth,x.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(u),Te.setContext(o),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function oe(J){for(let ae=0;ae<J.removed.length;ae++){const ge=J.removed[ae],he=T.indexOf(ge);he>=0&&(T[he]=null,N[he].disconnect(ge))}for(let ae=0;ae<J.added.length;ae++){const ge=J.added[ae];let he=T.indexOf(ge);if(he===-1){for(let Ce=0;Ce<N.length;Ce++)if(Ce>=T.length){T.push(ge),he=Ce;break}else if(T[Ce]===null){T[Ce]=ge,he=Ce;break}if(he===-1)break}const ye=N[he];ye&&ye.connect(ge)}}const le=new ee,te=new ee;function V(J,ae,ge){le.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(ge.matrixWorld);const he=le.distanceTo(te),ye=ae.projectionMatrix.elements,Ce=ge.projectionMatrix.elements,Ve=ye[14]/(ye[10]-1),ct=ye[14]/(ye[10]+1),gt=(ye[9]+1)/ye[5],bt=(ye[9]-1)/ye[5],q=(ye[8]-1)/ye[0],Wt=(Ce[8]+1)/Ce[0],ft=Ve*q,ut=Ve*Wt,Qe=he/(-q+Wt),At=Qe*-q;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(At),J.translateZ(Qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ye[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Xe=Ve+Qe,z=ct+Qe,L=ft-At,W=ut+(he-At),pe=gt*ct/z*Xe,xe=bt*ct/z*Xe;J.projectionMatrix.makePerspective(L,W,pe,xe,Xe,z),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let ae=J.near,ge=J.far;E.texture!==null&&(E.depthNear>0&&(ae=E.depthNear),E.depthFar>0&&(ge=E.depthFar)),A.near=k.near=P.near=ae,A.far=k.far=P.far=ge,(O!==A.near||Q!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,Q=A.far),P.layers.mask=J.layers.mask|2,k.layers.mask=J.layers.mask|4,A.layers.mask=P.layers.mask|k.layers.mask;const he=J.parent,ye=A.cameras;re(A,he);for(let Ce=0;Ce<ye.length;Ce++)re(ye[Ce],he);ye.length===2?V(A,P,k):A.projectionMatrix.copy(P.projectionMatrix),j(J,A,he)};function j(J,ae,ge){ge===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(ge.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ta*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&y===null))return f},this.setFoveation=function(J){f=J,x!==null&&(x.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let F=null;function $(J,ae){if(p=ae.getViewerPose(h||c),w=ae,p!==null){const ge=p.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let he=!1;ge.length!==A.cameras.length&&(A.cameras.length=0,he=!0);for(let Ce=0;Ce<ge.length;Ce++){const Ve=ge[Ce];let ct=null;if(y!==null)ct=y.getViewport(Ve);else{const bt=m.getViewSubImage(x,Ve);ct=bt.viewport,Ce===0&&(e.setRenderTargetTextures(b,bt.colorTexture,x.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(b))}let gt=I[Ce];gt===void 0&&(gt=new Dn,gt.layers.enable(Ce),gt.viewport=new qt,I[Ce]=gt),gt.matrix.fromArray(Ve.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Ve.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(ct.x,ct.y,ct.width,ct.height),Ce===0&&(A.matrix.copy(gt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),he===!0&&A.cameras.push(gt)}const ye=o.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const Ce=m.getDepthInformation(ge[0]);Ce&&Ce.isValid&&Ce.texture&&E.init(e,Ce,o.renderState)}}for(let ge=0;ge<N.length;ge++){const he=T[ge],ye=N[ge];he!==null&&ye!==void 0&&ye.update(he,ae,h||c)}F&&F(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),w=null}const Te=new bx;Te.setAnimationLoop($),this.setAnimationLoop=function(J){F=J},this.dispose=function(){}}}const cs=new Pi,f2=new Bt;function h2(s,e){function t(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function i(_,v){v.color.getRGB(_.fogColor.value,Ex(s)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function o(_,v,b,N,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(_,v):v.isMeshToonMaterial?(a(_,v),m(_,v)):v.isMeshPhongMaterial?(a(_,v),p(_,v)):v.isMeshStandardMaterial?(a(_,v),x(_,v),v.isMeshPhysicalMaterial&&y(_,v,T)):v.isMeshMatcapMaterial?(a(_,v),w(_,v)):v.isMeshDepthMaterial?a(_,v):v.isMeshDistanceMaterial?(a(_,v),E(_,v)):v.isMeshNormalMaterial?a(_,v):v.isLineBasicMaterial?(c(_,v),v.isLineDashedMaterial&&u(_,v)):v.isPointsMaterial?f(_,v,b,N):v.isSpriteMaterial?h(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,t(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Yn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,t(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Yn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,t(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,t(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const b=e.get(v),N=b.envMap,T=b.envMapRotation;N&&(_.envMap.value=N,cs.copy(T),cs.x*=-1,cs.y*=-1,cs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),_.envMapRotation.value.setFromMatrix4(f2.makeRotationFromEuler(cs)),_.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,_.aoMapTransform))}function c(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform))}function u(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function f(_,v,b,N){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*b,_.scale.value=N*.5,v.map&&(_.map.value=v.map,t(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function h(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function p(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function m(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function x(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function y(_,v,b){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Yn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,v){v.matcap&&(_.matcap.value=v.matcap)}function E(_,v){const b=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function p2(s,e,t,i){let o={},a={},c=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,N){const T=N.program;i.uniformBlockBinding(b,T)}function h(b,N){let T=o[b.id];T===void 0&&(w(b),T=p(b),o[b.id]=T,b.addEventListener("dispose",_));const D=N.program;i.updateUBOMapping(b,D);const C=e.render.frame;a[b.id]!==C&&(x(b),a[b.id]=C)}function p(b){const N=m();b.__bindingPointIndex=N;const T=s.createBuffer(),D=b.__size,C=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,D,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,T),T}function m(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(b){const N=o[b.id],T=b.uniforms,D=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let C=0,P=T.length;C<P;C++){const k=Array.isArray(T[C])?T[C]:[T[C]];for(let I=0,A=k.length;I<A;I++){const O=k[I];if(y(O,C,I,D)===!0){const Q=O.__offset,H=Array.isArray(O.value)?O.value:[O.value];let ne=0;for(let oe=0;oe<H.length;oe++){const le=H[oe],te=E(le);typeof le=="number"||typeof le=="boolean"?(O.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,Q+ne,O.__data)):le.isMatrix3?(O.__data[0]=le.elements[0],O.__data[1]=le.elements[1],O.__data[2]=le.elements[2],O.__data[3]=0,O.__data[4]=le.elements[3],O.__data[5]=le.elements[4],O.__data[6]=le.elements[5],O.__data[7]=0,O.__data[8]=le.elements[6],O.__data[9]=le.elements[7],O.__data[10]=le.elements[8],O.__data[11]=0):(le.toArray(O.__data,ne),ne+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,N,T,D){const C=b.value,P=N+"_"+T;if(D[P]===void 0)return typeof C=="number"||typeof C=="boolean"?D[P]=C:D[P]=C.clone(),!0;{const k=D[P];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return D[P]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function w(b){const N=b.uniforms;let T=0;const D=16;for(let P=0,k=N.length;P<k;P++){const I=Array.isArray(N[P])?N[P]:[N[P]];for(let A=0,O=I.length;A<O;A++){const Q=I[A],H=Array.isArray(Q.value)?Q.value:[Q.value];for(let ne=0,oe=H.length;ne<oe;ne++){const le=H[ne],te=E(le),V=T%D,re=V%te.boundary,j=V+re;T+=re,j!==0&&D-j<te.storage&&(T+=D-j),Q.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=T,T+=te.storage}}}const C=T%D;return C>0&&(T+=D-C),b.__size=T,b.__cache={},this}function E(b){const N={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(N.boundary=4,N.storage=4):b.isVector2?(N.boundary=8,N.storage=8):b.isVector3||b.isColor?(N.boundary=16,N.storage=12):b.isVector4?(N.boundary=16,N.storage=16):b.isMatrix3?(N.boundary=48,N.storage=48):b.isMatrix4?(N.boundary=64,N.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),N}function _(b){const N=b.target;N.removeEventListener("dispose",_);const T=c.indexOf(N.__bindingPointIndex);c.splice(T,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete a[N.id]}function v(){for(const b in o)s.deleteBuffer(o[b]);c=[],o={},a={}}return{bind:f,update:h,dispose:v}}class Lx{constructor(e={}){const{canvas:t=rM(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const w=new Uint32Array(4),E=new Int32Array(4);let _=null,v=null;const b=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=lr,this.toneMappingExposure=1;const T=this;let D=!1,C=0,P=0,k=null,I=-1,A=null;const O=new qt,Q=new qt;let H=null;const ne=new xt(0);let oe=0,le=t.width,te=t.height,V=1,re=null,j=null;const F=new qt(0,0,le,te),$=new qt(0,0,le,te);let Te=!1;const J=new mh;let ae=!1,ge=!1;const he=new Bt,ye=new Bt,Ce=new ee,Ve=new qt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function bt(){return k===null?V:1}let q=i;function Wt(U,K){return t.getContext(U,K)}try{const U={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",ke,!1),q===null){const K="webgl2";if(q=Wt(K,U),q===null)throw Wt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let ft,ut,Qe,At,Xe,z,L,W,pe,xe,me,Ue,be,Ne,nt,Ee,De,Je,et,ze,_t,ot,ht,X;function Le(){ft=new yT(q),ft.init(),ot=new s2(q,ft),ut=new pT(q,ft,e,ot),Qe=new n2(q,ft),ut.reverseDepthBuffer&&x&&Qe.buffers.depth.setReversed(!0),At=new ET(q),Xe=new Vb,z=new r2(q,ft,Qe,Xe,ut,ot,At),L=new gT(T),W=new _T(T),pe=new PM(q),ht=new fT(q,pe),xe=new ST(q,pe,At,ht),me=new TT(q,xe,pe,At),et=new wT(q,ut,z),Ee=new mT(Xe),Ue=new Bb(T,L,W,ft,ut,ht,Ee),be=new h2(T,Xe),Ne=new Gb,nt=new qb(ft),Je=new dT(T,L,W,Qe,me,y,f),De=new e2(T,me,ut),X=new p2(q,At,ut,Qe),ze=new hT(q,ft,At),_t=new MT(q,ft,At),At.programs=Ue.programs,T.capabilities=ut,T.extensions=ft,T.properties=Xe,T.renderLists=Ne,T.shadowMap=De,T.state=Qe,T.info=At}Le();const fe=new d2(T,q);this.xr=fe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const U=ft.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=ft.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(U){U!==void 0&&(V=U,this.setSize(le,te,!1))},this.getSize=function(U){return U.set(le,te)},this.setSize=function(U,K,ue=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=U,te=K,t.width=Math.floor(U*V),t.height=Math.floor(K*V),ue===!0&&(t.style.width=U+"px",t.style.height=K+"px"),this.setViewport(0,0,U,K)},this.getDrawingBufferSize=function(U){return U.set(le*V,te*V).floor()},this.setDrawingBufferSize=function(U,K,ue){le=U,te=K,V=ue,t.width=Math.floor(U*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,U,K)},this.getCurrentViewport=function(U){return U.copy(O)},this.getViewport=function(U){return U.copy(F)},this.setViewport=function(U,K,ue,de){U.isVector4?F.set(U.x,U.y,U.z,U.w):F.set(U,K,ue,de),Qe.viewport(O.copy(F).multiplyScalar(V).round())},this.getScissor=function(U){return U.copy($)},this.setScissor=function(U,K,ue,de){U.isVector4?$.set(U.x,U.y,U.z,U.w):$.set(U,K,ue,de),Qe.scissor(Q.copy($).multiplyScalar(V).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(U){Qe.setScissorTest(Te=U)},this.setOpaqueSort=function(U){re=U},this.setTransparentSort=function(U){j=U},this.getClearColor=function(U){return U.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(U=!0,K=!0,ue=!0){let de=0;if(U){let Z=!1;if(k!==null){const Pe=k.texture.format;Z=Pe===uh||Pe===ch||Pe===lh}if(Z){const Pe=k.texture.type,Ae=Pe===dr||Pe===_s||Pe===wa||Pe===To||Pe===oh||Pe===ah,$e=Je.getClearColor(),je=Je.getClearAlpha(),at=$e.r,dt=$e.g,qe=$e.b;Ae?(w[0]=at,w[1]=dt,w[2]=qe,w[3]=je,q.clearBufferuiv(q.COLOR,0,w)):(E[0]=at,E[1]=dt,E[2]=qe,E[3]=je,q.clearBufferiv(q.COLOR,0,E))}else de|=q.COLOR_BUFFER_BIT}K&&(de|=q.DEPTH_BUFFER_BIT),ue&&(de|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),Ne.dispose(),nt.dispose(),Xe.dispose(),L.dispose(),W.dispose(),me.dispose(),ht.dispose(),X.dispose(),Ue.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Es),fe.removeEventListener("sessionend",fr),zi.stop()};function ve(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const U=At.autoReset,K=De.enabled,ue=De.autoUpdate,de=De.needsUpdate,Z=De.type;Le(),At.autoReset=U,De.enabled=K,De.autoUpdate=ue,De.needsUpdate=de,De.type=Z}function ke(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function pt(U){const K=U.target;K.removeEventListener("dispose",pt),Vt(K)}function Vt(U){en(U),Xe.remove(U)}function en(U){const K=Xe.get(U).programs;K!==void 0&&(K.forEach(function(ue){Ue.releaseProgram(ue)}),U.isShaderMaterial&&Ue.releaseShaderCache(U))}this.renderBufferDirect=function(U,K,ue,de,Z,Pe){K===null&&(K=ct);const Ae=Z.isMesh&&Z.matrixWorld.determinant()<0,$e=Na(U,K,ue,de,Z);Qe.setMaterial(de,Ae);let je=ue.index,at=1;if(de.wireframe===!0){if(je=xe.getWireframeAttribute(ue),je===void 0)return;at=2}const dt=ue.drawRange,qe=ue.attributes.position;let Tt=dt.start*at,It=(dt.start+dt.count)*at;Pe!==null&&(Tt=Math.max(Tt,Pe.start*at),It=Math.min(It,(Pe.start+Pe.count)*at)),je!==null?(Tt=Math.max(Tt,0),It=Math.min(It,je.count)):qe!=null&&(Tt=Math.max(Tt,0),It=Math.min(It,qe.count));const wt=It-Tt;if(wt<0||wt===1/0)return;ht.setup(Z,de,$e,ue,je);let gn,vt=ze;if(je!==null&&(gn=pe.get(je),vt=_t,vt.setIndex(gn)),Z.isMesh)de.wireframe===!0?(Qe.setLineWidth(de.wireframeLinewidth*bt()),vt.setMode(q.LINES)):vt.setMode(q.TRIANGLES);else if(Z.isLine){let Ze=de.linewidth;Ze===void 0&&(Ze=1),Qe.setLineWidth(Ze*bt()),Z.isLineSegments?vt.setMode(q.LINES):Z.isLineLoop?vt.setMode(q.LINE_LOOP):vt.setMode(q.LINE_STRIP)}else Z.isPoints?vt.setMode(q.POINTS):Z.isSprite&&vt.setMode(q.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)vt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))vt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ze=Z._multiDrawStarts,xi=Z._multiDrawCounts,Nt=Z._multiDrawCount,xn=je?pe.get(je).bytesPerElement:1,vi=Xe.get(de).currentProgram.getUniforms();for(let tn=0;tn<Nt;tn++)vi.setValue(q,"_gl_DrawID",tn),vt.render(Ze[tn]/xn,xi[tn])}else if(Z.isInstancedMesh)vt.renderInstances(Tt,wt,Z.count);else if(ue.isInstancedBufferGeometry){const Ze=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,xi=Math.min(ue.instanceCount,Ze);vt.renderInstances(Tt,wt,xi)}else vt.render(Tt,wt)};function Ct(U,K,ue){U.transparent===!0&&U.side===fi&&U.forceSinglePass===!1?(U.side=Yn,U.needsUpdate=!0,ws(U,K,ue),U.side=Hr,U.needsUpdate=!0,ws(U,K,ue),U.side=fi):ws(U,K,ue)}this.compile=function(U,K,ue=null){ue===null&&(ue=U),v=nt.get(ue),v.init(K),N.push(v),ue.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),U!==ue&&U.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const de=new Set;return U.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Pe=Z.material;if(Pe)if(Array.isArray(Pe))for(let Ae=0;Ae<Pe.length;Ae++){const $e=Pe[Ae];Ct($e,ue,Z),de.add($e)}else Ct(Pe,ue,Z),de.add(Pe)}),N.pop(),v=null,de},this.compileAsync=function(U,K,ue=null){const de=this.compile(U,K,ue);return new Promise(Z=>{function Pe(){if(de.forEach(function(Ae){Xe.get(Ae).currentProgram.isReady()&&de.delete(Ae)}),de.size===0){Z(U);return}setTimeout(Pe,10)}ft.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let kn=null;function bn(U){kn&&kn(U)}function Es(){zi.stop()}function fr(){zi.start()}const zi=new bx;zi.setAnimationLoop(bn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(U){kn=U,fe.setAnimationLoop(U),U===null?zi.stop():zi.start()},fe.addEventListener("sessionstart",Es),fe.addEventListener("sessionend",fr),this.render=function(U,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(K),K=fe.getCamera()),U.isScene===!0&&U.onBeforeRender(T,U,K,k),v=nt.get(U,N.length),v.init(K),N.push(v),ye.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),J.setFromProjectionMatrix(ye),ge=this.localClippingEnabled,ae=Ee.init(this.clippingPlanes,ge),_=Ne.get(U,b.length),_.init(),b.push(_),fe.enabled===!0&&fe.isPresenting===!0){const Pe=T.xr.getDepthSensingMesh();Pe!==null&&Bi(Pe,K,-1/0,T.sortObjects)}Bi(U,K,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(re,j),gt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,gt&&Je.addToRenderList(_,U),this.info.render.frame++,ae===!0&&Ee.beginShadows();const ue=v.state.shadowsArray;De.render(ue,U,K),ae===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=_.opaque,Z=_.transmissive;if(v.setupLights(),K.isArrayCamera){const Pe=K.cameras;if(Z.length>0)for(let Ae=0,$e=Pe.length;Ae<$e;Ae++){const je=Pe[Ae];Wr(de,Z,U,je)}gt&&Je.render(U);for(let Ae=0,$e=Pe.length;Ae<$e;Ae++){const je=Pe[Ae];jr(_,U,je,je.viewport)}}else Z.length>0&&Wr(de,Z,U,K),gt&&Je.render(U),jr(_,U,K);k!==null&&(z.updateMultisampleRenderTarget(k),z.updateRenderTargetMipmap(k)),U.isScene===!0&&U.onAfterRender(T,U,K),ht.resetDefaultState(),I=-1,A=null,N.pop(),N.length>0?(v=N[N.length-1],ae===!0&&Ee.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function Bi(U,K,ue,de){if(U.visible===!1)return;if(U.layers.test(K.layers)){if(U.isGroup)ue=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(K);else if(U.isLight)v.pushLight(U),U.castShadow&&v.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||J.intersectsSprite(U)){de&&Ve.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ye);const Ae=me.update(U),$e=U.material;$e.visible&&_.push(U,Ae,$e,ue,Ve.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||J.intersectsObject(U))){const Ae=me.update(U),$e=U.material;if(de&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ve.copy(U.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ve.copy(Ae.boundingSphere.center)),Ve.applyMatrix4(U.matrixWorld).applyMatrix4(ye)),Array.isArray($e)){const je=Ae.groups;for(let at=0,dt=je.length;at<dt;at++){const qe=je[at],Tt=$e[qe.materialIndex];Tt&&Tt.visible&&_.push(U,Ae,Tt,ue,Ve.z,qe)}}else $e.visible&&_.push(U,Ae,$e,ue,Ve.z,null)}}const Pe=U.children;for(let Ae=0,$e=Pe.length;Ae<$e;Ae++)Bi(Pe[Ae],K,ue,de)}function jr(U,K,ue,de){const Z=U.opaque,Pe=U.transmissive,Ae=U.transparent;v.setupLightsView(ue),ae===!0&&Ee.setGlobalState(T.clippingPlanes,ue),de&&Qe.viewport(O.copy(de)),Z.length>0&&hr(Z,K,ue),Pe.length>0&&hr(Pe,K,ue),Ae.length>0&&hr(Ae,K,ue),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Wr(U,K,ue,de){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[de.id]===void 0&&(v.state.transmissionRenderTarget[de.id]=new Ri(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?cr:dr,minFilter:Vr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Pe=v.state.transmissionRenderTarget[de.id],Ae=de.viewport||O;Pe.setSize(Ae.z,Ae.w);const $e=T.getRenderTarget();T.setRenderTarget(Pe),T.getClearColor(ne),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),gt&&Je.render(ue);const je=T.toneMapping;T.toneMapping=lr;const at=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),v.setupLightsView(de),ae===!0&&Ee.setGlobalState(T.clippingPlanes,de),hr(U,ue,de),z.updateMultisampleRenderTarget(Pe),z.updateRenderTargetMipmap(Pe),ft.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let qe=0,Tt=K.length;qe<Tt;qe++){const It=K[qe],wt=It.object,gn=It.geometry,vt=It.material,Ze=It.group;if(vt.side===fi&&wt.layers.test(de.layers)){const xi=vt.side;vt.side=Yn,vt.needsUpdate=!0,Ra(wt,ue,de,gn,vt,Ze),vt.side=xi,vt.needsUpdate=!0,dt=!0}}dt===!0&&(z.updateMultisampleRenderTarget(Pe),z.updateRenderTargetMipmap(Pe))}T.setRenderTarget($e),T.setClearColor(ne,oe),at!==void 0&&(de.viewport=at),T.toneMapping=je}function hr(U,K,ue){const de=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,Pe=U.length;Z<Pe;Z++){const Ae=U[Z],$e=Ae.object,je=Ae.geometry,at=de===null?Ae.material:de,dt=Ae.group;$e.layers.test(ue.layers)&&Ra($e,K,ue,je,at,dt)}}function Ra(U,K,ue,de,Z,Pe){U.onBeforeRender(T,K,ue,de,Z,Pe),U.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),Z.onBeforeRender(T,K,ue,de,U,Pe),Z.transparent===!0&&Z.side===fi&&Z.forceSinglePass===!1?(Z.side=Yn,Z.needsUpdate=!0,T.renderBufferDirect(ue,K,de,Z,U,Pe),Z.side=Hr,Z.needsUpdate=!0,T.renderBufferDirect(ue,K,de,Z,U,Pe),Z.side=fi):T.renderBufferDirect(ue,K,de,Z,U,Pe),U.onAfterRender(T,K,ue,de,Z,Pe)}function ws(U,K,ue){K.isScene!==!0&&(K=ct);const de=Xe.get(U),Z=v.state.lights,Pe=v.state.shadowsArray,Ae=Z.state.version,$e=Ue.getParameters(U,Z.state,Pe,K,ue),je=Ue.getProgramCacheKey($e);let at=de.programs;de.environment=U.isMeshStandardMaterial?K.environment:null,de.fog=K.fog,de.envMap=(U.isMeshStandardMaterial?W:L).get(U.envMap||de.environment),de.envMapRotation=de.environment!==null&&U.envMap===null?K.environmentRotation:U.envMapRotation,at===void 0&&(U.addEventListener("dispose",pt),at=new Map,de.programs=at);let dt=at.get(je);if(dt!==void 0){if(de.currentProgram===dt&&de.lightsStateVersion===Ae)return Ni(U,$e),dt}else $e.uniforms=Ue.getUniforms(U),U.onBeforeCompile($e,T),dt=Ue.acquireProgram($e,je),at.set(je,dt),de.uniforms=$e.uniforms;const qe=de.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(qe.clippingPlanes=Ee.uniform),Ni(U,$e),de.needsLights=Vc(U),de.lightsStateVersion=Ae,de.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),de.currentProgram=dt,de.uniformsList=null,dt}function Pa(U){if(U.uniformsList===null){const K=U.currentProgram.getUniforms();U.uniformsList=_c.seqWithValue(K.seq,U.uniforms)}return U.uniformsList}function Ni(U,K){const ue=Xe.get(U);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function Na(U,K,ue,de,Z){K.isScene!==!0&&(K=ct),z.resetTextureUnits();const Pe=K.fog,Ae=de.isMeshStandardMaterial?K.environment:null,$e=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ro,je=(de.isMeshStandardMaterial?W:L).get(de.envMap||Ae),at=de.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,dt=!!ue.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),qe=!!ue.morphAttributes.position,Tt=!!ue.morphAttributes.normal,It=!!ue.morphAttributes.color;let wt=lr;de.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(wt=T.toneMapping);const gn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,vt=gn!==void 0?gn.length:0,Ze=Xe.get(de),xi=v.state.lights;if(ae===!0&&(ge===!0||U!==A)){const An=U===A&&de.id===I;Ee.setState(de,U,An)}let Nt=!1;de.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==xi.state.version||Ze.outputColorSpace!==$e||Z.isBatchedMesh&&Ze.batching===!1||!Z.isBatchedMesh&&Ze.batching===!0||Z.isBatchedMesh&&Ze.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ze.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ze.instancing===!1||!Z.isInstancedMesh&&Ze.instancing===!0||Z.isSkinnedMesh&&Ze.skinning===!1||!Z.isSkinnedMesh&&Ze.skinning===!0||Z.isInstancedMesh&&Ze.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ze.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ze.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ze.instancingMorph===!1&&Z.morphTexture!==null||Ze.envMap!==je||de.fog===!0&&Ze.fog!==Pe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ee.numPlanes||Ze.numIntersection!==Ee.numIntersection)||Ze.vertexAlphas!==at||Ze.vertexTangents!==dt||Ze.morphTargets!==qe||Ze.morphNormals!==Tt||Ze.morphColors!==It||Ze.toneMapping!==wt||Ze.morphTargetsCount!==vt)&&(Nt=!0):(Nt=!0,Ze.__version=de.version);let xn=Ze.currentProgram;Nt===!0&&(xn=ws(de,K,Z));let vi=!1,tn=!1,Li=!1;const Ot=xn.getUniforms(),ii=Ze.uniforms;if(Qe.useProgram(xn.program)&&(vi=!0,tn=!0,Li=!0),de.id!==I&&(I=de.id,tn=!0),vi||A!==U){Qe.buffers.depth.getReversed()?(he.copy(U.projectionMatrix),oM(he),aM(he),Ot.setValue(q,"projectionMatrix",he)):Ot.setValue(q,"projectionMatrix",U.projectionMatrix),Ot.setValue(q,"viewMatrix",U.matrixWorldInverse);const ri=Ot.map.cameraPosition;ri!==void 0&&ri.setValue(q,Ce.setFromMatrixPosition(U.matrixWorld)),ut.logarithmicDepthBuffer&&Ot.setValue(q,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Ot.setValue(q,"isOrthographic",U.isOrthographicCamera===!0),A!==U&&(A=U,tn=!0,Li=!0)}if(Z.isSkinnedMesh){Ot.setOptional(q,Z,"bindMatrix"),Ot.setOptional(q,Z,"bindMatrixInverse");const An=Z.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ot.setValue(q,"boneTexture",An.boneTexture,z))}Z.isBatchedMesh&&(Ot.setOptional(q,Z,"batchingTexture"),Ot.setValue(q,"batchingTexture",Z._matricesTexture,z),Ot.setOptional(q,Z,"batchingIdTexture"),Ot.setValue(q,"batchingIdTexture",Z._indirectTexture,z),Ot.setOptional(q,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ot.setValue(q,"batchingColorTexture",Z._colorsTexture,z));const Vi=ue.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&et.update(Z,ue,xn),(tn||Ze.receiveShadow!==Z.receiveShadow)&&(Ze.receiveShadow=Z.receiveShadow,Ot.setValue(q,"receiveShadow",Z.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(ii.envMap.value=je,ii.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&K.environment!==null&&(ii.envMapIntensity.value=K.environmentIntensity),tn&&(Ot.setValue(q,"toneMappingExposure",T.toneMappingExposure),Ze.needsLights&&La(ii,Li),Pe&&de.fog===!0&&be.refreshFogUniforms(ii,Pe),be.refreshMaterialUniforms(ii,de,V,te,v.state.transmissionRenderTarget[U.id]),_c.upload(q,Pa(Ze),ii,z)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(_c.upload(q,Pa(Ze),ii,z),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Ot.setValue(q,"center",Z.center),Ot.setValue(q,"modelViewMatrix",Z.modelViewMatrix),Ot.setValue(q,"normalMatrix",Z.normalMatrix),Ot.setValue(q,"modelMatrix",Z.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const An=de.uniformsGroups;for(let ri=0,Fn=An.length;ri<Fn;ri++){const Da=An[ri];X.update(Da,xn),X.bind(Da,xn)}}return xn}function La(U,K){U.ambientLightColor.needsUpdate=K,U.lightProbe.needsUpdate=K,U.directionalLights.needsUpdate=K,U.directionalLightShadows.needsUpdate=K,U.pointLights.needsUpdate=K,U.pointLightShadows.needsUpdate=K,U.spotLights.needsUpdate=K,U.spotLightShadows.needsUpdate=K,U.rectAreaLights.needsUpdate=K,U.hemisphereLights.needsUpdate=K}function Vc(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(U,K,ue){Xe.get(U.texture).__webglTexture=K,Xe.get(U.depthTexture).__webglTexture=ue;const de=Xe.get(U);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ue===void 0,de.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,K){const ue=Xe.get(U);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(U,K=0,ue=0){k=U,C=K,P=ue;let de=!0,Z=null,Pe=!1,Ae=!1;if(U){const je=Xe.get(U);if(je.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(q.FRAMEBUFFER,null),de=!1;else if(je.__webglFramebuffer===void 0)z.setupRenderTarget(U);else if(je.__hasExternalTextures)z.rebindTextures(U,Xe.get(U.texture).__webglTexture,Xe.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const qe=U.depthTexture;if(je.__boundDepthTexture!==qe){if(qe!==null&&Xe.has(qe)&&(U.width!==qe.image.width||U.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(U)}}const at=U.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ae=!0);const dt=Xe.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(dt[K])?Z=dt[K][ue]:Z=dt[K],Pe=!0):U.samples>0&&z.useMultisampledRTT(U)===!1?Z=Xe.get(U).__webglMultisampledFramebuffer:Array.isArray(dt)?Z=dt[ue]:Z=dt,O.copy(U.viewport),Q.copy(U.scissor),H=U.scissorTest}else O.copy(F).multiplyScalar(V).floor(),Q.copy($).multiplyScalar(V).floor(),H=Te;if(Qe.bindFramebuffer(q.FRAMEBUFFER,Z)&&de&&Qe.drawBuffers(U,Z),Qe.viewport(O),Qe.scissor(Q),Qe.setScissorTest(H),Pe){const je=Xe.get(U.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,je.__webglTexture,ue)}else if(Ae){const je=Xe.get(U.texture),at=K||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,je.__webglTexture,ue||0,at)}I=-1},this.readRenderTargetPixels=function(U,K,ue,de,Z,Pe,Ae){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Xe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ae!==void 0&&($e=$e[Ae]),$e){Qe.bindFramebuffer(q.FRAMEBUFFER,$e);try{const je=U.texture,at=je.format,dt=je.type;if(!ut.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=U.width-de&&ue>=0&&ue<=U.height-Z&&q.readPixels(K,ue,de,Z,ot.convert(at),ot.convert(dt),Pe)}finally{const je=k!==null?Xe.get(k).__webglFramebuffer:null;Qe.bindFramebuffer(q.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(U,K,ue,de,Z,Pe,Ae){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=Xe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ae!==void 0&&($e=$e[Ae]),$e){const je=U.texture,at=je.format,dt=je.type;if(!ut.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=U.width-de&&ue>=0&&ue<=U.height-Z){Qe.bindFramebuffer(q.FRAMEBUFFER,$e);const qe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,qe),q.bufferData(q.PIXEL_PACK_BUFFER,Pe.byteLength,q.STREAM_READ),q.readPixels(K,ue,de,Z,ot.convert(at),ot.convert(dt),0);const Tt=k!==null?Xe.get(k).__webglFramebuffer:null;Qe.bindFramebuffer(q.FRAMEBUFFER,Tt);const It=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await sM(q,It,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,qe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Pe),q.deleteBuffer(qe),q.deleteSync(It),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,K=null,ue=0){U.isTexture!==!0&&(_a("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,U=arguments[1]);const de=Math.pow(2,-ue),Z=Math.floor(U.image.width*de),Pe=Math.floor(U.image.height*de),Ae=K!==null?K.x:0,$e=K!==null?K.y:0;z.setTexture2D(U,0),q.copyTexSubImage2D(q.TEXTURE_2D,ue,0,0,Ae,$e,Z,Pe),Qe.unbindTexture()},this.copyTextureToTexture=function(U,K,ue=null,de=null,Z=0){U.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,U=arguments[1],K=arguments[2],Z=arguments[3]||0,ue=null);let Pe,Ae,$e,je,at,dt,qe,Tt,It;const wt=U.isCompressedTexture?U.mipmaps[Z]:U.image;ue!==null?(Pe=ue.max.x-ue.min.x,Ae=ue.max.y-ue.min.y,$e=ue.isBox3?ue.max.z-ue.min.z:1,je=ue.min.x,at=ue.min.y,dt=ue.isBox3?ue.min.z:0):(Pe=wt.width,Ae=wt.height,$e=wt.depth||1,je=0,at=0,dt=0),de!==null?(qe=de.x,Tt=de.y,It=de.z):(qe=0,Tt=0,It=0);const gn=ot.convert(K.format),vt=ot.convert(K.type);let Ze;K.isData3DTexture?(z.setTexture3D(K,0),Ze=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(z.setTexture2DArray(K,0),Ze=q.TEXTURE_2D_ARRAY):(z.setTexture2D(K,0),Ze=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);const xi=q.getParameter(q.UNPACK_ROW_LENGTH),Nt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),xn=q.getParameter(q.UNPACK_SKIP_PIXELS),vi=q.getParameter(q.UNPACK_SKIP_ROWS),tn=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,wt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,wt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,je),q.pixelStorei(q.UNPACK_SKIP_ROWS,at),q.pixelStorei(q.UNPACK_SKIP_IMAGES,dt);const Li=U.isDataArrayTexture||U.isData3DTexture,Ot=K.isDataArrayTexture||K.isData3DTexture;if(U.isRenderTargetTexture||U.isDepthTexture){const ii=Xe.get(U),Vi=Xe.get(K),An=Xe.get(ii.__renderTarget),ri=Xe.get(Vi.__renderTarget);Qe.bindFramebuffer(q.READ_FRAMEBUFFER,An.__webglFramebuffer),Qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let Fn=0;Fn<$e;Fn++)Li&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Xe.get(U).__webglTexture,Z,dt+Fn),U.isDepthTexture?(Ot&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Xe.get(K).__webglTexture,Z,It+Fn),q.blitFramebuffer(je,at,Pe,Ae,qe,Tt,Pe,Ae,q.DEPTH_BUFFER_BIT,q.NEAREST)):Ot?q.copyTexSubImage3D(Ze,Z,qe,Tt,It+Fn,je,at,Pe,Ae):q.copyTexSubImage2D(Ze,Z,qe,Tt,It+Fn,je,at,Pe,Ae);Qe.bindFramebuffer(q.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ot?U.isDataTexture||U.isData3DTexture?q.texSubImage3D(Ze,Z,qe,Tt,It,Pe,Ae,$e,gn,vt,wt.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(Ze,Z,qe,Tt,It,Pe,Ae,$e,gn,wt.data):q.texSubImage3D(Ze,Z,qe,Tt,It,Pe,Ae,$e,gn,vt,wt):U.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Z,qe,Tt,Pe,Ae,gn,vt,wt.data):U.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Z,qe,Tt,wt.width,wt.height,gn,wt.data):q.texSubImage2D(q.TEXTURE_2D,Z,qe,Tt,Pe,Ae,gn,vt,wt);q.pixelStorei(q.UNPACK_ROW_LENGTH,xi),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Nt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,xn),q.pixelStorei(q.UNPACK_SKIP_ROWS,vi),q.pixelStorei(q.UNPACK_SKIP_IMAGES,tn),Z===0&&K.generateMipmaps&&q.generateMipmap(Ze),Qe.unbindTexture()},this.copyTextureToTexture3D=function(U,K,ue=null,de=null,Z=0){return U.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,de=arguments[1]||null,U=arguments[2],K=arguments[3],Z=arguments[4]||0),_a('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,K,ue,de,Z)},this.initRenderTarget=function(U){Xe.get(U).__webglFramebuffer===void 0&&z.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?z.setTextureCube(U,0):U.isData3DTexture?z.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?z.setTexture2DArray(U,0):z.setTexture2D(U,0),Qe.unbindTexture()},this.resetState=function(){C=0,P=0,k=null,Qe.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}class vh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=t}clone(){return new vh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rc extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _h extends Ms{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pc=new ee,Nc=new ee,g0=new Bt,ma=new zc,nc=new Oc,nf=new ee,x0=new ee;class m2 extends mn{constructor(e=new $n,t=new _h){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)Pc.fromBufferAttribute(t,o-1),Nc.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=Pc.distanceTo(Nc);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(o),nc.radius+=a,e.ray.intersectsSphere(nc)===!1)return;g0.copy(o).invert(),ma.copy(e.ray).applyMatrix4(g0);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=i.index,x=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),w=Math.min(p.count,c.start+c.count);for(let E=y,_=w-1;E<_;E+=h){const v=p.getX(E),b=p.getX(E+1),N=ic(this,e,ma,f,v,b);N&&t.push(N)}if(this.isLineLoop){const E=p.getX(w-1),_=p.getX(y),v=ic(this,e,ma,f,E,_);v&&t.push(v)}}else{const y=Math.max(0,c.start),w=Math.min(x.count,c.start+c.count);for(let E=y,_=w-1;E<_;E+=h){const v=ic(this,e,ma,f,E,E+1);v&&t.push(v)}if(this.isLineLoop){const E=ic(this,e,ma,f,w-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function ic(s,e,t,i,o,a){const c=s.geometry.attributes.position;if(Pc.fromBufferAttribute(c,o),Nc.fromBufferAttribute(c,a),t.distanceSqToSegment(Pc,Nc,nf,x0)>i)return;nf.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(nf);if(!(f<e.near||f>e.far))return{distance:f,point:x0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const v0=new ee,_0=new ee;class Dx extends m2{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)v0.fromBufferAttribute(t,o),_0.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+v0.distanceTo(_0);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rf extends Un{constructor(e,t,i,o,a,c,u,f,h,p,m,x){super(null,c,u,f,h,p,o,a,m,x),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class yh extends $n{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],c=[],u=[],f=[],h=new ee,p=new tt;c.push(0,0,0),u.push(0,0,1),f.push(.5,.5);for(let m=0,x=3;m<=t;m++,x+=3){const y=i+m/t*o;h.x=e*Math.cos(y),h.y=e*Math.sin(y),c.push(h.x,h.y,h.z),u.push(0,0,1),p.x=(c[x]/e+1)/2,p.y=(c[x+1]/e+1)/2,f.push(p.x,p.y)}for(let m=1;m<=t;m++)a.push(m,m+1,0);this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const rc=new ee,sc=new ee,sf=new ee,oc=new hi;class g2 extends $n{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),a=Math.cos(_o*t),c=e.getIndex(),u=e.getAttribute("position"),f=c?c.count:u.count,h=[0,0,0],p=["a","b","c"],m=new Array(3),x={},y=[];for(let w=0;w<f;w+=3){c?(h[0]=c.getX(w),h[1]=c.getX(w+1),h[2]=c.getX(w+2)):(h[0]=w,h[1]=w+1,h[2]=w+2);const{a:E,b:_,c:v}=oc;if(E.fromBufferAttribute(u,h[0]),_.fromBufferAttribute(u,h[1]),v.fromBufferAttribute(u,h[2]),oc.getNormal(sf),m[0]=`${Math.round(E.x*o)},${Math.round(E.y*o)},${Math.round(E.z*o)}`,m[1]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,m[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let b=0;b<3;b++){const N=(b+1)%3,T=m[b],D=m[N],C=oc[p[b]],P=oc[p[N]],k=`${T}_${D}`,I=`${D}_${T}`;I in x&&x[I]?(sf.dot(x[I].normal)<=a&&(y.push(C.x,C.y,C.z),y.push(P.x,P.y,P.z)),x[I]=null):k in x||(x[k]={index0:h[b],index1:h[N],normal:sf.clone()})}}for(const w in x)if(x[w]){const{index0:E,index1:_}=x[w];rc.fromBufferAttribute(u,E),sc.fromBufferAttribute(u,_),y.push(rc.x,rc.y,rc.z),y.push(sc.x,sc.y,sc.z)}this.setAttribute("position",new Zt(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class yc extends Ms{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class x2 extends Ms{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ix extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const of=new Bt,y0=new ee,S0=new ee;class v2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;y0.setFromMatrixPosition(e.matrixWorld),t.position.copy(y0),S0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(S0),t.updateMatrixWorld(),of.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _2 extends v2{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class So extends Ix{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new _2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ux extends Ix{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class y2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=M0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=M0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function M0(){return performance.now()}const Sh="\\[\\]\\.:\\/",S2=new RegExp("["+Sh+"]","g"),Mh="[^"+Sh+"]",M2="[^"+Sh.replace("\\.","")+"]",E2=/((?:WC+[\/:])*)/.source.replace("WC",Mh),w2=/(WCOD+)?/.source.replace("WCOD",M2),T2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),b2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),A2=new RegExp("^"+E2+w2+T2+b2+"$"),C2=["material","materials","bones","map"];class R2{constructor(e,t,i){const o=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Dt{constructor(e,t,i){this.path=t,this.parsedPath=i||Dt.parseTrackName(t),this.node=Dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Dt.Composite(e,t,i):new Dt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(S2,"")}static parseTrackName(e){const t=A2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=i.nodeName&&i.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const a=i.nodeName.substring(o+1);C2.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,o),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=i(u.children);if(f)return f}return null},o=i(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)e[t++]=i[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,o=t.propertyName;let a=t.propertyIndex;if(e||(e=Dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[o];if(c===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+o+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Dt.Composite=R2;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const E0=new Bt;class P2{constructor(e,t,i=0,o=1/0){this.ray=new zc(e,t),this.near=i,this.far=o,this.camera=null,this.layers=new ph,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return E0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(E0),this}intersectObject(e,t=!0,i=[]){return Jf(e,this,i,t),i.sort(w0),i}intersectObjects(e,t=!0,i=[]){for(let o=0,a=e.length;o<a;o++)Jf(e[o],this,i,t);return i.sort(w0),i}}function w0(s,e){return s.distance-e.distance}function Jf(s,e,t,i){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&i===!0){const a=s.children;for(let c=0,u=a.length;c<u;c++)Jf(a[c],e,t,!0)}}class T0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kx extends Dx{constructor(e=10,t=10,i=4473924,o=8947848){i=new xt(i),o=new xt(o);const a=t/2,c=e/t,u=e/2,f=[],h=[];for(let x=0,y=0,w=-u;x<=t;x++,w+=c){f.push(-u,0,w,u,0,w),f.push(w,0,-u,w,0,u);const E=x===a?i:o;E.toArray(h,y),y+=3,E.toArray(h,y),y+=3,E.toArray(h,y),y+=3,E.toArray(h,y),y+=3}const p=new $n;p.setAttribute("position",new Zt(f,3)),p.setAttribute("color",new Zt(h,3));const m=new _h({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class N2 extends Ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);const b0={type:"change"},Eh={type:"start"},Fx={type:"end"},ac=new zc,A0=new zr,L2=Math.cos(70*bc.DEG2RAD),sn=new ee,jn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},af=1e-6;class Ox extends N2{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.enabled=!0,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:go.ROTATE,MIDDLE:go.DOLLY,RIGHT:go.PAN},this.touches={ONE:ho.ROTATE,TWO:ho.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new Gr,this._lastTargetPosition=new ee,this._quat=new Gr().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new T0,this._sphericalDelta=new T0,this._scale=1,this._panOffset=new ee,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new ee,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=I2.bind(this),this._onPointerDown=D2.bind(this),this._onPointerUp=U2.bind(this),this._onContextMenu=H2.bind(this),this._onMouseWheel=O2.bind(this),this._onKeyDown=z2.bind(this),this._onTouchStart=B2.bind(this),this._onTouchMove=V2.bind(this),this._onMouseDown=k2.bind(this),this._onMouseMove=F2.bind(this),this._interceptControlDown=G2.bind(this),this._interceptControlUp=j2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(b0),this.update(),this.state=Ft.NONE}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=jn:i>Math.PI&&(i-=jn),o<-Math.PI?o+=jn:o>Math.PI&&(o-=jn),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=sn.length();c=this._clampDistance(u*this._scale);const f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const u=new ee(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const h=new ee(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),c=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(ac.origin.copy(this.object.position),ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ac.direction))<L2?this.object.lookAt(this.target):(A0.setFromNormalAndCoplanarPoint(this.object.up,this.target),ac.intersectPlane(A0,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>af||8*(1-this._lastQuaternion.dot(this.object.quaternion))>af||this._lastTargetPosition.distanceToSquared(this.target)>af?(this.dispatchEvent(b0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jn/60*this.autoRotateSpeed*e:jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;sn.copy(o).sub(this.target);let a=sn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,c=i.width,u=i.height;this._mouse.x=o/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new tt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function D2(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function I2(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function U2(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fx),this.state=Ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function k2(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case go.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ft.DOLLY;break;case go.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}break;case go.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Eh)}function F2(s){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function O2(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(s.preventDefault(),this.dispatchEvent(Eh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Fx))}function z2(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function B2(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ho.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ft.TOUCH_ROTATE;break;case ho.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case ho.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ft.TOUCH_DOLLY_PAN;break;case ho.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Eh)}function V2(s){switch(this._trackPointer(s),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ft.NONE}}function H2(s){this.enabled!==!1&&s.preventDefault()}function G2(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j2(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const zx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ca{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const W2=new gh(-1,1,1,-1,0,1);class X2 extends $n{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const Y2=new X2;class Bx{constructor(e){this._mesh=new In(Y2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,W2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $2 extends Ca{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cc.clone(e.uniforms),this.material=new Xn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bx(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class C0 extends Ca{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const o=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,c,4294967295),a.buffers.stencil.setClear(u),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,4294967295),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}}class q2 extends Ca{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class K2{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new tt);this._width=i.width,this._height=i.height,t=new Ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $2(zx),this.copyPass.material.blending=ar,this.clock=new y2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let o=0,a=this.passes.length;o<a;o++){const c=this.passes[o];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}C0!==void 0&&(c instanceof C0?i=!0:c instanceof q2&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(i,o),this.renderTarget2.setSize(i,o);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Z2 extends Ca{constructor(e,t,i=null,o=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=o,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(e,t,i){const o=e.autoClear;e.autoClear=!1;let a,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=o}}const Q2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Co extends Ca{constructor(e,t,i,o){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=o,this.resolution=e!==void 0?new tt(e.x,e.y):new tt(256,256),this.clearColor=new xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Ri(a,c,{type:cr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const x=new Ri(a,c,{type:cr});x.texture.name="UnrealBloomPass.h"+m,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const y=new Ri(a,c,{type:cr});y.texture.name="UnrealBloomPass.v"+m,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),a=Math.round(a/2),c=Math.round(c/2)}const u=Q2;this.highPassUniforms=Cc.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xn({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const f=[3,5,7,9,11];a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(f[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new tt(1/a,1/c),a=Math.round(a/2),c=Math.round(c/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new ee(1,1,1),new ee(1,1,1),new ee(1,1,1),new ee(1,1,1),new ee(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const p=zx;this.copyUniforms=Cc.clone(p.uniforms),this.blendMaterial=new Xn({uniforms:this.copyUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,blending:pf,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xt,this.oldClearAlpha=1,this.basic=new ys,this.fsQuad=new Bx(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(i,o);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,o),this.renderTargetsVertical[a].setSize(i,o),this.separableBlurMaterials[a].uniforms.invSize.value=new tt(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2)}render(e,t,i,o,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let u=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this.fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[f].uniforms.direction.value=Co.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=Co.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this.fsQuad.render(e),u=this.renderTargetsVertical[f];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=c}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Xn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Co.BlurDirectionX=new tt(1,0);Co.BlurDirectionY=new tt(0,1);const lc=.1;function J2(s){return[parseInt(s.slice(1,3),16)/255,parseInt(s.slice(3,5),16)/255,parseInt(s.slice(5,7),16)/255]}function lf([s,e,t],[i,o,a],c){return[s+(i-s)*c,e+(o-e)*c,t+(a-t)*c]}const eA={front:1,back:.78,top:1.18,bottom:.62,right:.88,left:.88};function tA(s,e){switch(e){case"emissive":return lf(s,[1,1,1],.38);case"neon":return lf(s,[1,1,1],.72);case"metal":{const t=s[0]*.299+s[1]*.587+s[2]*.114;return lf(s,[t,t,t],.45)}default:return s}}function nA(s,e){return[Math.min(1,s[0]*e),Math.min(1,s[1]*e),Math.min(1,s[2]*e)]}function lo(s,e,t,i,o,a,c){s.push(...t,...i,...o,...t,...o,...a);for(let u=0;u<6;u++)e.push(...c)}function ga(s,e,t){const i=new $n;return i.setAttribute("position",new Zt(s,3)),i.setAttribute("color",new Zt(e,3)),i.computeVertexNormals(),new In(i,t)}function iA(s,e,t,i,o={},a={}){var y,w;const c=lc/2,u=new mo,f=[],h={};for(const E of["solid","emissive","neon","metal","glass"])h[E]={verts:[],colors:[]};function p(E,_,v,b){const N=`${_},${E},${v}`;return a[N]||o[b]||"solid"}function m(E,_,v){var N,T;if(E<0||E>=e||_<0||_>=t||v<0||v>=i)return!1;const b=(T=(N=s[_])==null?void 0:N[E])==null?void 0:T[v];return!b||b==="transparent"?!1:p(E,_,v,b)!=="glass"}for(let E=0;E<t;E++)for(let _=0;_<e;_++)for(let v=0;v<i;v++){const b=(w=(y=s[E])==null?void 0:y[_])==null?void 0:w[v];if(!b||b==="transparent")continue;const N=p(_,E,v,b),T=J2(b),D=tA(T,N),C=h[N],P=(_-e/2+.5)*lc,k=(t-1-E)*lc+c,I=(v-i/2+.5)*lc,A=N==="emissive"||N==="neon",O=Q=>A?D:nA(D,eA[Q]);m(_,E,v+1)||lo(C.verts,C.colors,[P-c,k-c,I+c],[P+c,k-c,I+c],[P+c,k+c,I+c],[P-c,k+c,I+c],O("front")),m(_,E,v-1)||lo(C.verts,C.colors,[P+c,k-c,I-c],[P-c,k-c,I-c],[P-c,k+c,I-c],[P+c,k+c,I-c],O("back")),m(_,E-1,v)||lo(C.verts,C.colors,[P-c,k+c,I+c],[P+c,k+c,I+c],[P+c,k+c,I-c],[P-c,k+c,I-c],O("top")),m(_,E+1,v)||lo(C.verts,C.colors,[P+c,k-c,I+c],[P-c,k-c,I+c],[P-c,k-c,I-c],[P+c,k-c,I-c],O("bottom")),m(_+1,E,v)||lo(C.verts,C.colors,[P+c,k-c,I+c],[P+c,k-c,I-c],[P+c,k+c,I-c],[P+c,k+c,I+c],O("right")),m(_-1,E,v)||lo(C.verts,C.colors,[P-c,k-c,I-c],[P-c,k-c,I+c],[P-c,k+c,I+c],[P-c,k+c,I-c],O("left"))}if(h.solid.verts.length){const E=new yc({vertexColors:!0,roughness:.75,metalness:.05});f.push(E),u.add(ga(h.solid.verts,h.solid.colors,E))}if(h.emissive.verts.length){const E=new ys({vertexColors:!0});f.push(E),u.add(ga(h.emissive.verts,h.emissive.colors,E))}if(h.neon.verts.length){const E=new ys({vertexColors:!0});f.push(E),u.add(ga(h.neon.verts,h.neon.colors,E))}if(h.metal.verts.length){const E=new yc({vertexColors:!0,metalness:.88,roughness:.12,envMapIntensity:1.2});f.push(E),u.add(ga(h.metal.verts,h.metal.colors,E))}if(h.glass.verts.length){const E=new yc({vertexColors:!0,transparent:!0,opacity:.35,depthWrite:!1,side:fi,roughness:.05,metalness:.1});f.push(E),u.add(ga(h.glass.verts,h.glass.colors,E))}function x(){f.forEach(E=>E.dispose()),u.traverse(E=>{E.geometry&&E.geometry.dispose()})}return{group:u,dispose:x}}const mi=.1,R0=mi*.6;function rA(s,e,t,i,o,a){const c=Math.round(s/mi+i/2-.5),u=Math.round(o-1-(e-mi/2)/mi),f=Math.round(t/mi+a/2-.5);return{x:Math.max(0,Math.min(i-1,c)),y:Math.max(0,Math.min(o-1,u)),z:Math.max(0,Math.min(a-1,f))}}function sA(s,e,t,i,o,a){return new ee((s-i/2+.5)*mi,(o-1-e)*mi+mi/2,(t-a/2+.5)*mi)}function oA(s){const e=_e.useRef(null),t=_e.useRef(null),i=_e.useRef(null),o=_e.useRef(null),a=_e.useRef(null),c=_e.useRef(null),u=_e.useRef(null),f=_e.useRef(null),h=_e.useRef(null),p=_e.useRef(null),m=_e.useRef(null);_e.useEffect(()=>{const w=s.current;if(!w)return;const E=new Lx({antialias:!0,alpha:!1});E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.setSize(w.clientWidth,w.clientHeight),E.toneMapping=lr;const _=Ye.getState().activeTheme;xg(async()=>{const{getTheme:W}=await Promise.resolve().then(()=>cg);return{getTheme:W}},void 0).then(({getTheme:W})=>{const pe=W(_).sceneBackground.replace("#","");e.current&&e.current.setClearColor(parseInt(pe,16),1)}),E.setClearColor(524309,1),w.appendChild(E.domElement),e.current=E;const v=new Rc;t.current=v;const b=new Ux(16771264,.45);v.add(b);const N=new So(16777215,.6);N.position.set(4,6,4),v.add(N);const T=new So(8425680,.35);T.position.set(-3,-1,-2),v.add(T);const D=new So(16746528,.2);D.position.set(0,-3,-5),v.add(D);const C=new kx(8,16,3811856,2365448);C.position.y=-.05,C.material.transparent=!0,C.material.opacity=.5,v.add(C);const P=new yh(4,32),k=new x2({color:1708038,transparent:!0,opacity:.6}),I=new In(P,k);I.rotation.x=-Math.PI/2,I.position.y=-.051,v.add(I);const A=new Aa(20,20),O=new ys({side:fi,transparent:!0,opacity:0,depthWrite:!1}),Q=new In(A,O);Q.rotation.x=-Math.PI/2,Q.position.y=-.002,v.add(Q),h.current=Q;const H=new No(mi*.96,mi*.96,mi*.96),ne=new ys({color:65416,transparent:!0,opacity:.35}),oe=new In(H,ne),le=new g2(H),te=new _h({color:65416}),V=new Dx(le,te);oe.add(V),oe.visible=!1,v.add(oe),p.current=oe;const re=new Dn(45,w.clientWidth/w.clientHeight,.01,50);re.position.set(2.5,2.8,2.5),re.lookAt(0,1.6,0),i.current=re;const j=new Ox(re,E.domElement);j.enableDamping=!0,j.dampingFactor=.06,j.minDistance=.3,j.maxDistance=15,j.target.set(0,1.6,0),o.current=j;const F=new K2(E);F.addPass(new Z2(v,re));const $=new Co(new tt(w.clientWidth,w.clientHeight),.55,.4,.42);F.addPass($),m.current=F;const Te=new P2;let J=!1,ae=!1,ge=null;function he(){return Ye.getState().viewMode==="preview-only"}function ye(){j.enabled=!0,j.enableRotate=!he()||J,j.enableZoom=!0,j.enablePan=!0}function Ce(W){E.domElement.style.cursor=W}function Ve(W,pe){const xe=E.domElement.getBoundingClientRect(),me=(W-xe.left)/xe.width*2-1,Ue=-((pe-xe.top)/xe.height)*2+1;Te.setFromCamera(new tt(me,Ue),re);const be=[];a.current&&be.push(a.current),be.push(Q);const Ne=Te.intersectObjects(be,!0);return Ne.length>0?Ne[0]:null}function ct(W,pe,xe,me,Ue){const be=W.point.clone(),Ne=W.face.normal.clone().transformDirection(W.object.matrixWorld),nt=Ue?R0:-R0;return rA(be.x+Ne.x*nt,be.y+Ne.y*nt,be.z+Ne.z*nt,pe,xe,me)}function gt(W,pe){const xe=p.current;if(!xe)return;const{activeTool:me,canvasWidth:Ue,canvasHeight:be,depthDimension:Ne}=Ye.getState(),nt=Ve(W,pe);if(!nt){xe.visible=!1;return}const Ee=me==="eraser",De=me==="eyedropper",et=ct(nt,Ue,be,Ne,!Ee&&!De);xe.position.copy(sA(et.x,et.y,et.z,Ue,be,Ne)),xe.visible=!0;const ze=Ee?16729156:De?52479:65416;xe.material.color.setHex(ze),xe.children[0].material.color.setHex(ze)}function bt(W,pe){var et,ze,_t,ot;const{activeTool:xe,currentColor:me,canvasWidth:Ue,canvasHeight:be,depthDimension:Ne}=Ye.getState(),nt=Ve(W,pe);if(!nt)return;const Ee=nt.object===Q;if(xe==="eyedropper"){if(Ee)return;const ht=ct(nt,Ue,be,Ne,!1),X=(ze=(et=ni(Ye.getState().layers,Ue,be,Ne)[ht.y])==null?void 0:et[ht.x])==null?void 0:ze[ht.z];X&&X!=="transparent"&&Ye.getState().setCurrentColor(X);return}if(xe==="eraser"){if(Ee)return;const ht=ct(nt,Ue,be,Ne,!1),X=`${ht.x},${ht.y},${ht.z}`;if(X===ge)return;ge=X;const Le=(ot=(_t=ni(Ye.getState().layers,Ue,be,Ne)[ht.y])==null?void 0:_t[ht.x])==null?void 0:ot[ht.z];if(!Le||Le==="transparent")return;Ye.getState().paintVoxelDirect(ht.x,ht.y,ht.z,"transparent");return}const De=ct(nt,Ue,be,Ne,!0),Je=`${De.x},${De.y},${De.z}`;Je!==ge&&(ge=Je,Ye.getState().paintVoxelDirect(De.x,De.y,De.z,me))}const q=W=>{W.code!=="Space"||!he()||(W.preventDefault(),!J&&(J=!0,ye(),p.current&&(p.current.visible=!1),Ce("grab")))},Wt=W=>{W.code==="Space"&&(J=!1,ye(),he()&&Ce("crosshair"))},ft=W=>{!he()||J||W.button===0&&(j.enabled=!1,ae=!0,ge=null,E.domElement.setPointerCapture(W.pointerId),Ce("crosshair"),Ye.getState().pushUndo(),bt(W.clientX,W.clientY))},ut=W=>{if(!he()){p.current&&(p.current.visible=!1);return}ae&&!J?(p.current&&(p.current.visible=!1),bt(W.clientX,W.clientY)):gt(W.clientX,W.clientY)},Qe=W=>{if(ae){ae=!1,ge=null,ye();try{E.domElement.releasePointerCapture(W.pointerId)}catch{}Ce(J?"grab":he()?"crosshair":"default")}},At=()=>{p.current&&(p.current.visible=!1)};ye(),he()&&Ce("crosshair"),window.addEventListener("keydown",q),window.addEventListener("keyup",Wt),E.domElement.addEventListener("pointerdown",ft),E.domElement.addEventListener("pointermove",ut),E.domElement.addEventListener("pointerup",Qe),E.domElement.addEventListener("pointerleave",At);let Xe=!0;function z(){Xe&&(u.current=requestAnimationFrame(z),j.update(),m.current?m.current.render():E.render(v,re))}z();const L=new ResizeObserver(()=>{const W=w.clientWidth,pe=w.clientHeight;!W||!pe||(E.setSize(W,pe),F.setSize(W,pe),re.aspect=W/pe,re.updateProjectionMatrix())});return L.observe(w),()=>{Xe=!1,cancelAnimationFrame(u.current),L.disconnect(),window.removeEventListener("keydown",q),window.removeEventListener("keyup",Wt),E.domElement.removeEventListener("pointerdown",ft),E.domElement.removeEventListener("pointermove",ut),E.domElement.removeEventListener("pointerup",Qe),E.domElement.removeEventListener("pointerleave",At),j.dispose(),k.dispose(),P.dispose(),H.dispose(),ne.dispose(),le.dispose(),te.dispose(),A.dispose(),O.dispose(),E.dispose(),w.contains(E.domElement)&&w.removeChild(E.domElement)}},[]),_e.useEffect(()=>Ye.subscribe((E,_)=>{E.activeTheme!==_.activeTheme&&e.current&&xg(async()=>{const{getTheme:v}=await Promise.resolve().then(()=>cg);return{getTheme:v}},void 0).then(({getTheme:v})=>{var T;const N=v(E.activeTheme).sceneBackground.replace("#","");(T=e.current)==null||T.setClearColor(parseInt(N,16),1)})}),[]);const x=_e.useCallback(()=>{var C;if(!t.current)return;const{layers:w,canvasWidth:E,canvasHeight:_,depthDimension:v}=Ye.getState(),b=ni(w,E,_,v),N=l1(w),{group:T,dispose:D}=iA(b,E,_,v,{},N);a.current&&(t.current.remove(a.current),(C=c.current)==null||C.call(c)),t.current.add(T),a.current=T,c.current=D},[]);return _e.useEffect(()=>{x();const w=Ye.subscribe((E,_)=>{(E.layers!==_.layers||E.depthDimension!==_.depthDimension)&&(clearTimeout(f.current),f.current=setTimeout(x,80))});return()=>{w(),clearTimeout(f.current)}},[x]),{exportPng:_e.useCallback(()=>{const w=e.current,E=t.current,{canvasWidth:_,canvasHeight:v,depthDimension:b}=Ye.getState();if(!w||!E)return;const N=1024,T=new Dn(45,1,.01,50),C=Math.max(_,v,b)*.1*2.8;T.position.set(C,C*.75,C),T.lookAt(0,0,0),w.setSize(N,N),w.render(E,T);const P=w.domElement.toDataURL("image/png"),k=s.current;k&&(w.setSize(k.clientWidth,k.clientHeight),i.current.aspect=k.clientWidth/k.clientHeight,i.current.updateProjectionMatrix());const I=document.createElement("a");I.download="picell3d-export.png",I.href=P,I.click()},[])}}const P0={pencil:{label:"Place voxel",color:"#00ff88"},fill:{label:"Place voxel",color:"#00ff88"},eraser:{label:"Erase voxel",color:"#ff4444"},eyedropper:{label:"Pick color",color:"#00ccff"}};function aA({onExport:s}){const e=_e.useRef(null),{exportPng:t}=oA(e),i=Ye(f=>f.viewMode),o=Ye(f=>f.activeTool),a=Ye(f=>f.currentColor),c=i==="preview-only";_e.useEffect(()=>{s&&(s.current=t)},[s,t]);const u=P0[o]??P0.pencil;return S.jsxs("div",{className:"relative w-full h-full",children:[S.jsx("div",{ref:e,className:"w-full h-full"}),c?S.jsxs("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none select-none",children:[S.jsxs("div",{className:"flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono",style:{background:"rgba(0,0,0,0.6)",border:`1px solid ${u.color}55`,color:u.color,backdropFilter:"blur(4px)"},children:[S.jsx("span",{children:u.label}),(o==="pencil"||o==="fill")&&S.jsx("span",{className:"inline-block w-3 h-3 rounded-sm",style:{background:a,outline:"1px solid rgba(255,255,255,0.25)"}})]}),S.jsxs("span",{className:"text-xs opacity-40",style:{color:"#fff",textShadow:"0 1px 3px #000"},children:["Drag to paint · Hold ",S.jsx("kbd",{style:{fontFamily:"monospace",opacity:.7},children:"Space"})," to orbit · Scroll to zoom"]})]}):S.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-text-muted pointer-events-none opacity-60 whitespace-nowrap",children:"Drag to rotate · Scroll to zoom"})]})}function lA(){const{palette:s,currentColor:e,setCurrentColor:t,addToPalette:i}=Ye(),o=_e.useRef(null);return S.jsxs("div",{className:"flex flex-col gap-2 p-2",children:[S.jsxs("div",{className:"relative",children:[S.jsx("div",{className:"text-xs text-text-muted mb-1 uppercase tracking-wide",children:"Color"}),S.jsx("div",{className:"w-full h-8 rounded cursor-pointer border border-border hover:border-accent transition-colors",style:{background:e},onClick:()=>{var a;return(a=o.current)==null?void 0:a.click()},title:"Click to open color picker"}),S.jsx("input",{ref:o,type:"color",value:e==="transparent"?"#000000":e,onChange:a=>t(a.target.value),className:"absolute opacity-0 w-0 h-0 pointer-events-none",tabIndex:-1})]}),S.jsx("div",{className:"grid grid-cols-4 gap-1",children:s.map((a,c)=>S.jsx("button",{className:"w-full aspect-square rounded border transition-all duration-100 hover:scale-110",style:{background:a,borderColor:e===a?"#e8a820":"#7a5c2e",boxShadow:e===a?"0 0 6px #c8860a":"none",outline:e===a?"1px solid #e8a820":"none"},onClick:()=>t(a),title:a},c))}),S.jsx("button",{className:"btn-brass w-full text-xs py-1",onClick:()=>{var a;return(a=o.current)==null?void 0:a.click()},children:"+ Custom"})]})}const cA=[{id:"solid",label:"Solid",desc:"Standard flat color",preview:s=>({background:s,border:"1px solid rgba(255,255,255,0.15)"})},{id:"emissive",label:"Emissive",desc:"Self-lit, soft glow",preview:s=>({background:s,boxShadow:`0 0 6px 2px ${s}cc, 0 0 12px 4px ${s}55`})},{id:"neon",label:"Neon",desc:"Bright bloom effect",preview:s=>({background:"#fff",boxShadow:`0 0 3px 1px ${s}, 0 0 10px 4px ${s}bb, 0 0 18px 7px ${s}44`})},{id:"metal",label:"Metal",desc:"Metallic sheen",preview:s=>({background:`linear-gradient(135deg, rgba(255,255,255,0.7) 0%, ${s} 45%, rgba(0,0,0,0.4) 100%)`})},{id:"glass",label:"Glass",desc:"Semi-transparent",preview:s=>({background:`${s}50`,border:`1px solid ${s}99`,backdropFilter:"blur(2px)"})}];function uA(){const s=Ye(i=>i.currentColor),e=Ye(i=>i.activeMaterial),t=Ye(i=>i.setActiveMaterial);return S.jsxs("div",{className:"flex flex-col gap-0.5 px-2 py-2",children:[S.jsx("div",{className:"text-[10px] uppercase tracking-wide text-text-muted mb-1 opacity-60",children:"Material"}),cA.map(({id:i,label:o,desc:a,preview:c})=>{const u=e===i;return S.jsxs("button",{onClick:()=>t(i),className:`flex items-center gap-2 w-full px-2 py-1.5 rounded border text-left transition-all ${u?"border-accent bg-accent/15 text-accent":"border-border/50 text-text-muted hover:text-text hover:border-border"}`,children:[S.jsx("div",{className:"flex-shrink-0 rounded",style:{width:18,height:18,...c(s)}}),S.jsxs("div",{className:"min-w-0",children:[S.jsx("div",{className:"text-[11px] font-medium leading-tight",children:o}),S.jsx("div",{className:"text-[9px] opacity-50 leading-tight truncate",children:a})]})]},i)}),S.jsx("div",{className:"mt-2 pt-2 border-t border-border/40",children:S.jsx("div",{className:"text-[9px] text-text-muted opacity-50 leading-tight",children:"Click pixels to apply material. Solid removes material."})})]})}const dA=[4,8,16,24,32,48,64];function fA(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,setDepthDimension:i,paintDepth:o,setPaintDepth:a,layers:c,activeView:u,sideDrawMode:f,setSideDrawMode:h,symmetryX:p,symmetryY:m,symmetryOpposite:x,setSymmetryX:y,setSymmetryY:w,setSymmetryOpposite:E}=Ye(),_=_e.useMemo(()=>{const T=ni(c,s,e,t);let D=0;for(const C of T)for(const P of C)for(const k of P)k!=="transparent"&&D++;return D},[c,s,e,t]),v=u==="front",b=u==="front"||u==="back",N=ff[u];return S.jsxs("div",{className:"flex flex-col h-full",children:[S.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1.5 border-b border-border",children:[S.jsx(ms,{size:12,className:"text-accent"}),S.jsx("span",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Voxel Options"})]}),S.jsxs("div",{className:"flex flex-col gap-4 p-3",children:[!b&&S.jsxs("div",{children:[S.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[S.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Depth"}),S.jsxs("span",{className:"text-xs font-mono text-accent",children:[t,"px"]})]}),S.jsx("div",{className:"grid grid-cols-4 gap-1 mb-1.5",children:dA.map(T=>S.jsx("button",{onClick:()=>i(T),className:`text-xs py-0.5 rounded border transition-colors ${t===T?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:T},T))}),S.jsx("input",{type:"range",min:4,max:128,value:t,onChange:T=>i(parseInt(T.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}})]}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[S.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Paint Depth"}),S.jsx("span",{className:"text-xs font-mono text-accent",children:o})]}),S.jsx("input",{type:"range",min:1,max:b?Math.ceil(t/2):t,value:o,onChange:T=>a(parseInt(T.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}}),S.jsxs("div",{className:"flex justify-between text-xs text-text-muted mt-0.5",children:[S.jsx("span",{children:"1"}),S.jsx("span",{children:b?Math.ceil(t/2):t})]})]}),!v&&S.jsxs("div",{children:[S.jsx("div",{className:"mb-1.5",children:S.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Side Mode"})}),S.jsx("div",{className:"grid grid-cols-2 gap-1",children:[["edit","Edit"],["draw","Draw"]].map(([T,D])=>S.jsx("button",{onClick:()=>h(T),className:`text-xs py-1 rounded border transition-colors ${f===T?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:D},T))}),S.jsxs("p",{className:"text-xs text-text-muted mt-1 leading-tight",children:["Hold ",S.jsx("kbd",{className:"text-text font-mono px-0.5 border border-border rounded",children:"Alt"})," to temporarily use the other mode.",S.jsx("br",{}),"Hold ",S.jsx("kbd",{className:"text-text font-mono px-0.5 border border-border rounded",children:"Shift"})," + Eraser to erase full depth."]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"mb-1.5",children:S.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Symmetry"})}),S.jsxs("div",{className:"flex flex-col gap-1.5",children:[S.jsx(cf,{label:"X Axis",value:p,onChange:y}),S.jsx(cf,{label:"Y Axis",value:m,onChange:w}),S.jsx(cf,{label:`Opp. side (${N})`,value:x,onChange:E})]})]}),S.jsxs("div",{className:"flex flex-col gap-1.5 text-xs",children:[S.jsxs("div",{className:"flex justify-between text-text-muted",children:[S.jsx("span",{children:"Grid size"}),S.jsxs("span",{className:"font-mono text-text",children:[s,"×",e,"×",t]})]}),S.jsxs("div",{className:"flex justify-between text-text-muted",children:[S.jsx("span",{children:"Voxels"}),S.jsx("span",{className:"font-mono text-text",children:_.toLocaleString()})]}),S.jsxs("div",{className:"flex justify-between text-text-muted",children:[S.jsx("span",{children:"Active view"}),S.jsx("span",{className:"font-mono text-accent capitalize",children:u})]})]}),S.jsx("div",{className:"text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5",style:{background:"color-mix(in srgb, var(--color-background) 60%, transparent)"},children:b?S.jsxs(S.Fragment,{children:["Canvas: ",S.jsxs("span",{className:"text-text font-mono",children:[s,"×",e]})]}):S.jsxs(S.Fragment,{children:["Canvas: ",S.jsx("span",{className:"text-text font-mono",children:u==="top"||u==="bottom"?`${s}×${t}`:`${t}×${e}`})]})})]})]})}function cf({label:s,value:e,onChange:t}){return S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsx("span",{className:"text-xs text-text-muted",children:s}),S.jsx("button",{type:"button",role:"switch","aria-checked":e,onClick:()=>t(!e),className:`relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 transition-colors focus:outline-none ${e?"border-accent bg-accent/30":"border-border bg-surface-alt"}`,children:S.jsx("span",{className:`pointer-events-none inline-block h-3 w-3 rounded-full shadow transition-transform ${e?"translate-x-4 bg-accent":"translate-x-0 bg-text-muted"}`})})]})}function hA(){const{layers:s,activeLayerId:e,addLayer:t,deleteLayer:i,setActiveLayer:o,toggleLayerVisible:a,renameLayer:c,moveLayerUp:u,moveLayerDown:f}=Ye(),[h,p]=_e.useState(null),[m,x]=_e.useState(""),y=[...s].reverse();function w(_,v){v.stopPropagation(),p(_.id),x(_.name)}function E(_){c(_,m),p(null)}return S.jsxs("div",{className:"flex flex-col",children:[S.jsxs("div",{className:"flex items-center justify-between px-2 py-1.5 border-b border-border flex-shrink-0",children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx(G0,{size:12,className:"text-accent"}),S.jsx("span",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Layers"})]}),S.jsx("button",{onClick:()=>t(),title:"Add layer",className:"flex items-center justify-center w-5 h-5 rounded border border-border text-text-muted hover:text-accent hover:border-accent/50 transition-colors",children:S.jsx(Ny,{size:11})})]}),S.jsx("div",{className:"flex flex-col overflow-y-auto",style:{maxHeight:200},children:y.map(_=>{const v=s.findIndex(C=>C.id===_.id),b=_.id===e,N=v===s.length-1,T=v===0,D=s.length>1;return S.jsxs("div",{onClick:()=>o(_.id),className:"flex items-center gap-1 px-1.5 py-1 cursor-pointer select-none transition-colors",style:{borderLeft:`2px solid ${b?"var(--color-accent)":"transparent"}`,background:b?"color-mix(in srgb, var(--color-accent) 12%, transparent)":"transparent"},children:[S.jsx("button",{onClick:C=>{C.stopPropagation(),a(_.id)},title:_.visible?"Hide layer":"Show layer",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors",children:_.visible?S.jsx(ry,{size:11}):S.jsx(ny,{size:11,className:"opacity-40"})}),h===_.id?S.jsx("input",{autoFocus:!0,value:m,onChange:C=>x(C.target.value),onBlur:()=>E(_.id),onKeyDown:C=>{C.key==="Enter"&&E(_.id),C.key==="Escape"&&p(null),C.stopPropagation()},onClick:C=>C.stopPropagation(),className:"flex-1 min-w-0 text-xs bg-transparent outline-none border-b",style:{borderColor:"var(--color-accent)",color:"var(--color-text)"}}):S.jsx("span",{className:"flex-1 min-w-0 text-xs truncate",style:{color:b?"var(--color-text)":"var(--color-text-muted)",opacity:_.visible?1:.45},onDoubleClick:C=>w(_,C),title:"Double-click to rename",children:_.name}),S.jsx("button",{onClick:C=>{C.stopPropagation(),u(_.id)},disabled:N,title:"Move up",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20",children:S.jsx(X_,{size:10})}),S.jsx("button",{onClick:C=>{C.stopPropagation(),f(_.id)},disabled:T,title:"Move down",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20",children:S.jsx(H_,{size:10})}),S.jsx("button",{onClick:C=>{C.stopPropagation(),i(_.id)},disabled:!D,title:"Delete layer",className:"flex-shrink-0 text-text-muted hover:text-red-400 transition-colors disabled:opacity-20",children:S.jsx($0,{size:10})})]},_.id)})})]})}const N0={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Lc{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new EA(e)}),this.register(function(e){return new wA(e)}),this.register(function(e){return new CA(e)}),this.register(function(e){return new RA(e)}),this.register(function(e){return new PA(e)}),this.register(function(e){return new NA(e)}),this.register(function(e){return new TA(e)}),this.register(function(e){return new bA(e)}),this.register(function(e){return new AA(e)}),this.register(function(e){return new LA(e)}),this.register(function(e){return new DA(e)}),this.register(function(e){return new IA(e)}),this.register(function(e){return new UA(e)}),this.register(function(e){return new kA(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,i,o){const a=new MA,c=[];for(let u=0,f=this.pluginCallbacks.length;u<f;u++)c.push(this.pluginCallbacks[u](a));a.setPlugins(c),a.setTextureUtils(this.textureUtils),a.writeAsync(e,t,o).catch(i)}parseAsync(e,t){const i=this;return new Promise(function(o,a){i.parse(e,o,a,t)})}}const Et={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},uf="KHR_mesh_quantization",ti={};ti[gi]=Et.NEAREST;ti[ox]=Et.NEAREST_MIPMAP_NEAREST;ti[va]=Et.NEAREST_MIPMAP_LINEAR;ti[Ci]=Et.LINEAR;ti[hc]=Et.LINEAR_MIPMAP_NEAREST;ti[Vr]=Et.LINEAR_MIPMAP_LINEAR;ti[Br]=Et.CLAMP_TO_EDGE;ti[Ec]=Et.REPEAT;ti[wc]=Et.MIRRORED_REPEAT;const L0={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},pA=new xt,D0=12,mA=1179937895,gA=2,I0=8,xA=1313821514,vA=5130562;function Sa(s,e){return s.length===e.length&&s.every(function(t,i){return t===e[i]})}function _A(s){return new TextEncoder().encode(s).buffer}function yA(s){return Sa(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function SA(s,e,t){const i={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let o=e;o<e+t;o++)for(let a=0;a<s.itemSize;a++){let c;s.itemSize>4?c=s.array[o*s.itemSize+a]:(a===0?c=s.getX(o):a===1?c=s.getY(o):a===2?c=s.getZ(o):a===3&&(c=s.getW(o)),s.normalized===!0&&(c=bc.normalize(c,s.array))),i.min[a]=Math.min(i.min[a],c),i.max[a]=Math.max(i.max[a],c)}return i}function Vx(s){return Math.ceil(s/4)*4}function df(s,e=0){const t=Vx(s.byteLength);if(t!==s.byteLength){const i=new Uint8Array(t);if(i.set(new Uint8Array(s)),e!==0)for(let o=s.byteLength;o<t;o++)i[o]=e;return i.buffer}return s}function U0(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function k0(s,e){if(s.toBlob!==void 0)return new Promise(i=>s.toBlob(i,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class MA{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Uc}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const o=this,a=o.buffers,c=o.json;i=o.options;const u=o.extensionsUsed,f=o.extensionsRequired,h=new Blob(a,{type:"application/octet-stream"}),p=Object.keys(u),m=Object.keys(f);if(p.length>0&&(c.extensionsUsed=p),m.length>0&&(c.extensionsRequired=m),c.buffers&&c.buffers.length>0&&(c.buffers[0].byteLength=h.size),i.binary===!0){const x=new FileReader;x.readAsArrayBuffer(h),x.onloadend=function(){const y=df(x.result),w=new DataView(new ArrayBuffer(I0));w.setUint32(0,y.byteLength,!0),w.setUint32(4,vA,!0);const E=df(_A(JSON.stringify(c)),32),_=new DataView(new ArrayBuffer(I0));_.setUint32(0,E.byteLength,!0),_.setUint32(4,xA,!0);const v=new ArrayBuffer(D0),b=new DataView(v);b.setUint32(0,mA,!0),b.setUint32(4,gA,!0);const N=D0+_.byteLength+E.byteLength+w.byteLength+y.byteLength;b.setUint32(8,N,!0);const T=new Blob([v,_,E,w,y],{type:"application/octet-stream"}),D=new FileReader;D.readAsArrayBuffer(T),D.onloadend=function(){t(D.result)}}}else if(c.buffers&&c.buffers.length>0){const x=new FileReader;x.readAsDataURL(h),x.onloadend=function(){const y=x.result;c.buffers[0].uri=y,t(c)}}else t(c)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const i=this.options,o=this.extensionsUsed;try{const a=JSON.parse(JSON.stringify(e.userData));if(i.includeCustomExtensions&&a.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const c in a.gltfExtensions)t.extensions[c]=a.gltfExtensions[c],o[c]=!0;delete a.gltfExtensions}Object.keys(a).length>0&&(t.extras=a)}catch(a){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+a.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const o=new Map;o.set(!0,this.uid++),o.set(!1,this.uid++),this.uids.set(e,o)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const i=new ee;for(let o=0,a=e.count;o<a;o++)if(Math.abs(i.fromBufferAttribute(e,o).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const i=e.clone(),o=new ee;for(let a=0,c=i.count;a<c;a++)o.fromBufferAttribute(i,a),o.x===0&&o.y===0&&o.z===0?o.setX(1):o.normalize(),i.setXYZ(a,o.x,o.y,o.z);return t.attributesNormalized.set(e,i),i}applyTextureTransform(e,t){let i=!1;const o={};(t.offset.x!==0||t.offset.y!==0)&&(o.offset=t.offset.toArray(),i=!0),t.rotation!==0&&(o.rotation=t.rotation,i=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(o.scale=t.repeat.toArray(),i=!0),i&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=o,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function i(y){return y.colorSpace===Wn?function(E){return E<.04045?E*.0773993808:Math.pow(E*.9478672986+.0521327014,2.4)}:function(E){return E}}e instanceof rf&&(e=await this.decompressTextureAsync(e)),t instanceof rf&&(t=await this.decompressTextureAsync(t));const o=e?e.image:null,a=t?t.image:null,c=Math.max(o?o.width:0,a?a.width:0),u=Math.max(o?o.height:0,a?a.height:0),f=U0();f.width=c,f.height=u;const h=f.getContext("2d",{willReadFrequently:!0});h.fillStyle="#00ffff",h.fillRect(0,0,c,u);const p=h.getImageData(0,0,c,u);if(o){h.drawImage(o,0,0,c,u);const y=i(e),w=h.getImageData(0,0,c,u).data;for(let E=2;E<w.length;E+=4)p.data[E]=y(w[E]/256)*256}if(a){h.drawImage(a,0,0,c,u);const y=i(t),w=h.getImageData(0,0,c,u).data;for(let E=1;E<w.length;E+=4)p.data[E]=y(w[E]/256)*256}h.putImageData(p,0,0);const x=(e||t).clone();return x.source=new hh(f),x.colorSpace=ir,x.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),x}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,i=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),i.push(e),0}processBufferView(e,t,i,o,a){const c=this.json;c.bufferViews||(c.bufferViews=[]);let u;switch(t){case Et.BYTE:case Et.UNSIGNED_BYTE:u=1;break;case Et.SHORT:case Et.UNSIGNED_SHORT:u=2;break;default:u=4}let f=e.itemSize*u;a===Et.ARRAY_BUFFER&&(f=Math.ceil(f/4)*4);const h=Vx(o*f),p=new DataView(new ArrayBuffer(h));let m=0;for(let w=i;w<i+o;w++){for(let E=0;E<e.itemSize;E++){let _;e.itemSize>4?_=e.array[w*e.itemSize+E]:(E===0?_=e.getX(w):E===1?_=e.getY(w):E===2?_=e.getZ(w):E===3&&(_=e.getW(w)),e.normalized===!0&&(_=bc.normalize(_,e.array))),t===Et.FLOAT?p.setFloat32(m,_,!0):t===Et.INT?p.setInt32(m,_,!0):t===Et.UNSIGNED_INT?p.setUint32(m,_,!0):t===Et.SHORT?p.setInt16(m,_,!0):t===Et.UNSIGNED_SHORT?p.setUint16(m,_,!0):t===Et.BYTE?p.setInt8(m,_):t===Et.UNSIGNED_BYTE&&p.setUint8(m,_),m+=u}m%f!==0&&(m+=f-m%f)}const x={buffer:this.processBuffer(p.buffer),byteOffset:this.byteOffset,byteLength:h};return a!==void 0&&(x.target=a),a===Et.ARRAY_BUFFER&&(x.byteStride=f),this.byteOffset+=h,c.bufferViews.push(x),{id:c.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,i=t.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(o){const a=new FileReader;a.readAsArrayBuffer(e),a.onloadend=function(){const c=df(a.result),u={buffer:t.processBuffer(c),byteOffset:t.byteOffset,byteLength:c.byteLength};t.byteOffset+=c.byteLength,o(i.bufferViews.push(u)-1)}})}processAccessor(e,t,i,o){const a=this.json,c={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let u;if(e.array.constructor===Float32Array)u=Et.FLOAT;else if(e.array.constructor===Int32Array)u=Et.INT;else if(e.array.constructor===Uint32Array)u=Et.UNSIGNED_INT;else if(e.array.constructor===Int16Array)u=Et.SHORT;else if(e.array.constructor===Uint16Array)u=Et.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)u=Et.BYTE;else if(e.array.constructor===Uint8Array)u=Et.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(i===void 0&&(i=0),(o===void 0||o===1/0)&&(o=e.count),o===0)return null;const f=SA(e,i,o);let h;t!==void 0&&(h=e===t.index?Et.ELEMENT_ARRAY_BUFFER:Et.ARRAY_BUFFER);const p=this.processBufferView(e,u,i,o,h),m={bufferView:p.id,byteOffset:p.byteOffset,componentType:u,count:o,max:f.max,min:f.min,type:c[e.itemSize]};return e.normalized===!0&&(m.normalized=!0),a.accessors||(a.accessors=[]),a.accessors.push(m)-1}processImage(e,t,i,o="image/png"){if(e!==null){const a=this,c=a.cache,u=a.json,f=a.options,h=a.pending;c.images.has(e)||c.images.set(e,{});const p=c.images.get(e),m=o+":flipY/"+i.toString();if(p[m]!==void 0)return p[m];u.images||(u.images=[]);const x={mimeType:o},y=U0();y.width=Math.min(e.width,f.maxTextureSize),y.height=Math.min(e.height,f.maxTextureSize);const w=y.getContext("2d",{willReadFrequently:!0});if(i===!0&&(w.translate(0,y.height),w.scale(1,-1)),e.data!==void 0){t!==pi&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>f.maxTextureSize||e.height>f.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const _=new Uint8ClampedArray(e.height*e.width*4);for(let v=0;v<_.length;v+=4)_[v+0]=e.data[v+0],_[v+1]=e.data[v+1],_[v+2]=e.data[v+2],_[v+3]=e.data[v+3];w.putImageData(new ImageData(_,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)w.drawImage(e,0,0,y.width,y.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");f.binary===!0?h.push(k0(y,o).then(_=>a.processBufferViewImage(_)).then(_=>{x.bufferView=_})):y.toDataURL!==void 0?x.uri=y.toDataURL(o):h.push(k0(y,o).then(_=>new FileReader().readAsDataURL(_)).then(_=>{x.uri=_}));const E=u.images.push(x)-1;return p[m]=E,E}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const i={magFilter:ti[e.magFilter],minFilter:ti[e.minFilter],wrapS:ti[e.wrapS],wrapT:ti[e.wrapT]};return t.samplers.push(i)-1}async processTextureAsync(e){const i=this.options,o=this.cache,a=this.json;if(o.textures.has(e))return o.textures.get(e);a.textures||(a.textures=[]),e instanceof rf&&(e=await this.decompressTextureAsync(e,i.maxTextureSize));let c=e.userData.mimeType;c==="image/webp"&&(c="image/png");const u={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,c)};e.name&&(u.name=e.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(e,u)});const f=a.textures.push(u)-1;return o.textures.set(e,f),f}async processMaterialAsync(e){const t=this.cache,i=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);const o={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const a=e.color.toArray().concat([e.opacity]);if(Sa(a,[1,1,1,1])||(o.pbrMetallicRoughness.baseColorFactor=a),e.isMeshStandardMaterial?(o.pbrMetallicRoughness.metallicFactor=e.metalness,o.pbrMetallicRoughness.roughnessFactor=e.roughness):(o.pbrMetallicRoughness.metallicFactor=0,o.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const u=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),f={index:await this.processTextureAsync(u),texCoord:u.channel};this.applyTextureTransform(f,u),o.pbrMetallicRoughness.metallicRoughnessTexture=f}if(e.map){const u={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(u,e.map),o.pbrMetallicRoughness.baseColorTexture=u}if(e.emissive){const u=e.emissive;if(Math.max(u.r,u.g,u.b)>0&&(o.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const h={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(h,e.emissiveMap),o.emissiveTexture=h}}if(e.normalMap){const u={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(u.scale=e.normalScale.x),this.applyTextureTransform(u,e.normalMap),o.normalTexture=u}if(e.aoMap){const u={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(u.strength=e.aoMapIntensity),this.applyTextureTransform(u,e.aoMap),o.occlusionTexture=u}e.transparent?o.alphaMode="BLEND":e.alphaTest>0&&(o.alphaMode="MASK",o.alphaCutoff=e.alphaTest),e.side===fi&&(o.doubleSided=!0),e.name!==""&&(o.name=e.name),this.serializeUserData(e,o),await this._invokeAllAsync(async function(u){u.writeMaterialAsync&&await u.writeMaterialAsync(e,o)});const c=i.materials.push(o)-1;return t.materials.set(e,c),c}async processMeshAsync(e){const t=this.cache,i=this.json,o=[e.geometry.uuid];if(Array.isArray(e.material))for(let T=0,D=e.material.length;T<D;T++)o.push(e.material[T].uuid);else o.push(e.material.uuid);const a=o.join(":");if(t.meshes.has(a))return t.meshes.get(a);const c=e.geometry;let u;e.isLineSegments?u=Et.LINES:e.isLineLoop?u=Et.LINE_LOOP:e.isLine?u=Et.LINE_STRIP:e.isPoints?u=Et.POINTS:u=e.material.wireframe?Et.LINES:Et.TRIANGLES;const f={},h={},p=[],m=[],x={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},y=c.getAttribute("normal");y!==void 0&&!this.isNormalizedNormalAttribute(y)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),c.setAttribute("normal",this.createNormalizedNormalAttribute(y)));let w=null;for(let T in c.attributes){if(T.slice(0,5)==="morph")continue;const D=c.attributes[T];if(T=x[T]||T.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(T)||(T="_"+T),t.attributes.has(this.getUID(D))){h[T]=t.attributes.get(this.getUID(D));continue}w=null;const P=D.array;T==="JOINTS_0"&&!(P instanceof Uint16Array)&&!(P instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),w=new fn(new Uint16Array(P),D.itemSize,D.normalized)):(P instanceof Uint32Array||P instanceof Int32Array)&&!T.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${T}" converted to type FLOAT.`),w=Lc.Utils.toFloat32BufferAttribute(D));const k=this.processAccessor(w||D,c);k!==null&&(T.startsWith("_")||this.detectMeshQuantization(T,D),h[T]=k,t.attributes.set(this.getUID(D),k))}if(y!==void 0&&c.setAttribute("normal",y),Object.keys(h).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const T=[],D=[],C={};if(e.morphTargetDictionary!==void 0)for(const P in e.morphTargetDictionary)C[e.morphTargetDictionary[P]]=P;for(let P=0;P<e.morphTargetInfluences.length;++P){const k={};let I=!1;for(const A in c.morphAttributes){if(A!=="position"&&A!=="normal"){I||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),I=!0);continue}const O=c.morphAttributes[A][P],Q=A.toUpperCase(),H=c.attributes[A];if(t.attributes.has(this.getUID(O,!0))){k[Q]=t.attributes.get(this.getUID(O,!0));continue}const ne=O.clone();if(!c.morphTargetsRelative)for(let oe=0,le=O.count;oe<le;oe++)for(let te=0;te<O.itemSize;te++)te===0&&ne.setX(oe,O.getX(oe)-H.getX(oe)),te===1&&ne.setY(oe,O.getY(oe)-H.getY(oe)),te===2&&ne.setZ(oe,O.getZ(oe)-H.getZ(oe)),te===3&&ne.setW(oe,O.getW(oe)-H.getW(oe));k[Q]=this.processAccessor(ne,c),t.attributes.set(this.getUID(H,!0),k[Q])}m.push(k),T.push(e.morphTargetInfluences[P]),e.morphTargetDictionary!==void 0&&D.push(C[P])}f.weights=T,D.length>0&&(f.extras={},f.extras.targetNames=D)}const E=Array.isArray(e.material);if(E&&c.groups.length===0)return null;let _=!1;if(E&&c.index===null){const T=[];for(let D=0,C=c.attributes.position.count;D<C;D++)T[D]=D;c.setIndex(T),_=!0}const v=E?e.material:[e.material],b=E?c.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let T=0,D=b.length;T<D;T++){const C={mode:u,attributes:h};if(this.serializeUserData(c,C),m.length>0&&(C.targets=m),c.index!==null){let k=this.getUID(c.index);(b[T].start!==void 0||b[T].count!==void 0)&&(k+=":"+b[T].start+":"+b[T].count),t.attributes.has(k)?C.indices=t.attributes.get(k):(C.indices=this.processAccessor(c.index,c,b[T].start,b[T].count),t.attributes.set(k,C.indices)),C.indices===null&&delete C.indices}const P=await this.processMaterialAsync(v[b[T].materialIndex]);P!==null&&(C.material=P),p.push(C)}_===!0&&c.setIndex(null),f.primitives=p,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(T){T.writeMesh&&T.writeMesh(e,f)});const N=i.meshes.push(f)-1;return t.meshes.set(a,N),N}detectMeshQuantization(e,t){if(this.extensionsUsed[uf])return;let i;switch(t.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}t.normalized&&(i+=" normalized");const o=e.split("_",1)[0];N0[o]&&N0[o].includes(i)&&(this.extensionsUsed[uf]=!0,this.extensionsRequired[uf]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const i=e.isOrthographicCamera,o={type:i?"orthographic":"perspective"};return i?o.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:o.perspective={aspectRatio:e.aspect,yfov:bc.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(o.name=e.type),t.cameras.push(o)-1}processAnimation(e,t){const i=this.json,o=this.nodeMap;i.animations||(i.animations=[]),e=Lc.Utils.mergeMorphTargetTracks(e.clone(),t);const a=e.tracks,c=[],u=[];for(let f=0;f<a.length;++f){const h=a[f],p=Dt.parseTrackName(h.name);let m=Dt.findNode(t,p.nodeName);const x=L0[p.propertyName];if(p.objectName==="bones"&&(m.isSkinnedMesh===!0?m=m.skeleton.getBoneByName(p.objectIndex):m=void 0),!m||!x){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}const y=1;let w=h.values.length/h.times.length;x===L0.morphTargetInfluences&&(w/=m.morphTargetInfluences.length);let E;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(E="CUBICSPLINE",w/=3):h.getInterpolation()===PS?E="STEP":E="LINEAR",u.push({input:this.processAccessor(new fn(h.times,y)),output:this.processAccessor(new fn(h.values,w)),interpolation:E}),c.push({sampler:u.length-1,target:{node:o.get(m),path:x}})}return i.animations.push({name:e.name||"clip_"+i.animations.length,samplers:u,channels:c}),i.animations.length-1}processSkin(e){const t=this.json,i=this.nodeMap,o=t.nodes[i.get(e)],a=e.skeleton;if(a===void 0)return null;const c=e.skeleton.bones[0];if(c===void 0)return null;const u=[],f=new Float32Array(a.bones.length*16),h=new Bt;for(let m=0;m<a.bones.length;++m)u.push(i.get(a.bones[m])),h.copy(a.boneInverses[m]),h.multiply(e.bindMatrix).toArray(f,m*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new fn(f,16)),joints:u,skeleton:i.get(c)}),o.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,i=this.options,o=this.nodeMap;t.nodes||(t.nodes=[]);const a={};if(i.trs){const u=e.quaternion.toArray(),f=e.position.toArray(),h=e.scale.toArray();Sa(u,[0,0,0,1])||(a.rotation=u),Sa(f,[0,0,0])||(a.translation=f),Sa(h,[1,1,1])||(a.scale=h)}else e.matrixAutoUpdate&&e.updateMatrix(),yA(e.matrix)===!1&&(a.matrix=e.matrix.elements);if(e.name!==""&&(a.name=String(e.name)),this.serializeUserData(e,a),e.isMesh||e.isLine||e.isPoints){const u=await this.processMeshAsync(e);u!==null&&(a.mesh=u)}else e.isCamera&&(a.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const u=[];for(let f=0,h=e.children.length;f<h;f++){const p=e.children[f];if(p.visible||i.onlyVisible===!1){const m=await this.processNodeAsync(p);m!==null&&u.push(m)}}u.length>0&&(a.children=u)}await this._invokeAllAsync(function(u){u.writeNode&&u.writeNode(e,a)});const c=t.nodes.push(a)-1;return o.set(e,c),c}async processSceneAsync(e){const t=this.json,i=this.options;t.scenes||(t.scenes=[],t.scene=0);const o={};e.name!==""&&(o.name=e.name),t.scenes.push(o);const a=[];for(let c=0,u=e.children.length;c<u;c++){const f=e.children[c];if(f.visible||i.onlyVisible===!1){const h=await this.processNodeAsync(f);h!==null&&a.push(h)}}a.length>0&&(o.nodes=a),this.serializeUserData(e,o)}async processObjectsAsync(e){const t=new Rc;t.name="AuxScene";for(let i=0;i<e.length;i++)t.children.push(e[i]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(o){o.beforeParse&&o.beforeParse(e)});const i=[];for(let o=0;o<e.length;o++)e[o]instanceof Rc?await this.processSceneAsync(e[o]):i.push(e[o]);i.length>0&&await this.processObjectsAsync(i);for(let o=0;o<this.skins.length;++o)this.processSkin(this.skins[o]);for(let o=0;o<t.animations.length;++o)this.processAnimation(t.animations[o],e[0]);await this._invokeAllAsync(function(o){o.afterParse&&o.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,i=this.plugins.length;t<i;t++)await e(this.plugins[t])}}class EA{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const i=this.writer,o=i.json,a=i.extensionsUsed,c={};e.name&&(c.name=e.name),c.color=e.color.toArray(),c.intensity=e.intensity,e.isDirectionalLight?c.type="directional":e.isPointLight?(c.type="point",e.distance>0&&(c.range=e.distance)):e.isSpotLight&&(c.type="spot",e.distance>0&&(c.range=e.distance),c.spot={},c.spot.innerConeAngle=(1-e.penumbra)*e.angle,c.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),a[this.name]||(o.extensions=o.extensions||{},o.extensions[this.name]={lights:[]},a[this.name]=!0);const u=o.extensions[this.name].lights;u.push(c),t.extensions=t.extensions||{},t.extensions[this.name]={light:u.length-1}}}class wA{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const o=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},o[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class TA{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.clearcoatFactor=e.clearcoat,e.clearcoatMap){const c={index:await i.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};i.applyTextureTransform(c,e.clearcoatMap),a.clearcoatTexture=c}if(a.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const c={index:await i.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};i.applyTextureTransform(c,e.clearcoatRoughnessMap),a.clearcoatRoughnessTexture=c}if(e.clearcoatNormalMap){const c={index:await i.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(c.scale=e.clearcoatNormalScale.x),i.applyTextureTransform(c,e.clearcoatNormalMap),a.clearcoatNormalTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class bA{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const o=this.writer.extensionsUsed,a={};a.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class AA{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.iridescenceFactor=e.iridescence,e.iridescenceMap){const c={index:await i.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};i.applyTextureTransform(c,e.iridescenceMap),a.iridescenceTexture=c}if(a.iridescenceIor=e.iridescenceIOR,a.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],a.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const c={index:await i.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};i.applyTextureTransform(c,e.iridescenceThicknessMap),a.iridescenceThicknessTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class CA{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.transmissionFactor=e.transmission,e.transmissionMap){const c={index:await i.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};i.applyTextureTransform(c,e.transmissionMap),a.transmissionTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class RA{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.thicknessFactor=e.thickness,e.thicknessMap){const c={index:await i.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};i.applyTextureTransform(c,e.thicknessMap),a.thicknessTexture=c}e.attenuationDistance!==1/0&&(a.attenuationDistance=e.attenuationDistance),a.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class PA{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const o=this.writer.extensionsUsed,a={};a.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class NA{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(pA)&&!e.specularIntensityMap&&!e.specularColorMap)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.specularIntensityMap){const c={index:await i.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};i.applyTextureTransform(c,e.specularIntensityMap),a.specularTexture=c}if(e.specularColorMap){const c={index:await i.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};i.applyTextureTransform(c,e.specularColorMap),a.specularColorTexture=c}a.specularFactor=e.specularIntensity,a.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class LA{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.sheenRoughnessMap){const c={index:await i.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};i.applyTextureTransform(c,e.sheenRoughnessMap),a.sheenRoughnessTexture=c}if(e.sheenColorMap){const c={index:await i.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};i.applyTextureTransform(c,e.sheenColorMap),a.sheenColorTexture=c}a.sheenRoughnessFactor=e.sheenRoughness,a.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class DA{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.anisotropyMap){const c={index:await i.processTextureAsync(e.anisotropyMap)};i.applyTextureTransform(c,e.anisotropyMap),a.anisotropyTexture=c}a.anisotropyStrength=e.anisotropy,a.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class IA{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const o=this.writer.extensionsUsed,a={};a.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class UA{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.bumpMap){const c={index:await i.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};i.applyTextureTransform(c,e.bumpMap),a.bumpTexture=c}a.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class kA{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const i=this.writer,o=e,a=new Float32Array(o.count*3),c=new Float32Array(o.count*4),u=new Float32Array(o.count*3),f=new Bt,h=new ee,p=new Gr,m=new ee;for(let y=0;y<o.count;y++)o.getMatrixAt(y,f),f.decompose(h,p,m),h.toArray(a,y*3),p.toArray(c,y*4),m.toArray(u,y*3);const x={TRANSLATION:i.processAccessor(new fn(a,3)),ROTATION:i.processAccessor(new fn(c,4)),SCALE:i.processAccessor(new fn(u,3))};o.instanceColor&&(x._COLOR_0=i.processAccessor(o.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:x},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}}Lc.Utils={insertKeyframe:function(s,e){const i=s.getValueSize(),o=new s.TimeBufferType(s.times.length+1),a=new s.ValueBufferType(s.values.length+i),c=s.createInterpolant(new s.ValueBufferType(i));let u;if(s.times.length===0){o[0]=e;for(let f=0;f<i;f++)a[f]=0;u=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;o[0]=e,o.set(s.times,1),a.set(c.evaluate(e),0),a.set(s.values,i),u=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;o[o.length-1]=e,o.set(s.times,0),a.set(s.values,0),a.set(c.evaluate(e),s.values.length),u=o.length-1}else for(let f=0;f<s.times.length;f++){if(Math.abs(s.times[f]-e)<.001)return f;if(s.times[f]<e&&s.times[f+1]>e){o.set(s.times.slice(0,f+1),0),o[f+1]=e,o.set(s.times.slice(f+1),f+2),a.set(s.values.slice(0,(f+1)*i),0),a.set(c.evaluate(e),(f+1)*i),a.set(s.values.slice((f+1)*i),(f+2)*i),u=f+1;break}}return s.times=o,s.values=a,u},mergeMorphTargetTracks:function(s,e){const t=[],i={},o=s.tracks;for(let a=0;a<o.length;++a){let c=o[a];const u=Dt.parseTrackName(c.name),f=Dt.findNode(e,u.nodeName);if(u.propertyName!=="morphTargetInfluences"||u.propertyIndex===void 0){t.push(c);continue}if(c.createInterpolant!==c.InterpolantFactoryMethodDiscrete&&c.createInterpolant!==c.InterpolantFactoryMethodLinear){if(c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),c=c.clone(),c.setInterpolation(NS)}const h=f.morphTargetInfluences.length,p=f.morphTargetDictionary[u.propertyIndex];if(p===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+u.propertyIndex);let m;if(i[f.uuid]===void 0){m=c.clone();const y=new m.ValueBufferType(h*m.times.length);for(let w=0;w<m.times.length;w++)y[w*h+p]=m.values[w];m.name=(u.nodeName||"")+".morphTargetInfluences",m.values=y,i[f.uuid]=m,t.push(m);continue}const x=c.createInterpolant(new c.ValueBufferType(1));m=i[f.uuid];for(let y=0;y<m.times.length;y++)m.values[y*h+p]=x.evaluate(m.times[y]);for(let y=0;y<c.times.length;y++){const w=this.insertKeyframe(m,c.times[y]);m.values[w*h+p]=c.values[y]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){const e=new fn(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,i=s.count;t<i;t++)for(let o=0;o<s.itemSize;o++)e.setComponent(t,o,s.getComponent(t,o));return e}};const Sc=.1,Fe=Sc/2;function F0(s,e,t,i){var p,m;const o=new mo,a=[];function c(x,y,w){var E,_;return x<0||x>=e||y<0||y>=t||w<0||w>=i?!1:((_=(E=s[y])==null?void 0:E[x])==null?void 0:_[w])!=="transparent"}const u=new Map;function f(x,y,w,E,_){u.has(x)||u.set(x,{verts:[],normals:[]});const{verts:v,normals:b}=u.get(x),[N,T,D,C]=y;for(const P of[N,T,D,N,D,C])v.push(P[0],P[1],P[2]),b.push(w,E,_)}for(let x=0;x<t;x++)for(let y=0;y<e;y++)for(let w=0;w<i;w++){const E=(m=(p=s[x])==null?void 0:p[y])==null?void 0:m[w];if(!E||E==="transparent")continue;const _=(y-e/2+.5)*Sc,v=(t-1-x)*Sc+Fe,b=(w-i/2+.5)*Sc;c(y,x,w+1)||f(E,[[_-Fe,v-Fe,b+Fe],[_+Fe,v-Fe,b+Fe],[_+Fe,v+Fe,b+Fe],[_-Fe,v+Fe,b+Fe]],0,0,1),c(y,x,w-1)||f(E,[[_+Fe,v-Fe,b-Fe],[_-Fe,v-Fe,b-Fe],[_-Fe,v+Fe,b-Fe],[_+Fe,v+Fe,b-Fe]],0,0,-1),c(y,x-1,w)||f(E,[[_-Fe,v+Fe,b-Fe],[_+Fe,v+Fe,b-Fe],[_+Fe,v+Fe,b+Fe],[_-Fe,v+Fe,b+Fe]],0,1,0),c(y,x+1,w)||f(E,[[_-Fe,v-Fe,b+Fe],[_+Fe,v-Fe,b+Fe],[_+Fe,v-Fe,b-Fe],[_-Fe,v-Fe,b-Fe]],0,-1,0),c(y+1,x,w)||f(E,[[_+Fe,v-Fe,b+Fe],[_+Fe,v-Fe,b-Fe],[_+Fe,v+Fe,b-Fe],[_+Fe,v+Fe,b+Fe]],1,0,0),c(y-1,x,w)||f(E,[[_-Fe,v-Fe,b-Fe],[_-Fe,v-Fe,b+Fe],[_-Fe,v+Fe,b+Fe],[_-Fe,v+Fe,b-Fe]],-1,0,0)}for(const[x,{verts:y,normals:w}]of u){const E=parseInt(x.slice(1,3),16)/255,_=parseInt(x.slice(3,5),16)/255,v=parseInt(x.slice(5,7),16)/255,b=new $n;b.setAttribute("position",new Zt(y,3)),b.setAttribute("normal",new Zt(w,3));const N=new yc({color:new xt(E,_,v),roughness:.75,metalness:.08});a.push(N),o.add(new In(b,N))}function h(){a.forEach(x=>x.dispose()),o.traverse(x=>{x.geometry&&x.geometry.dispose()})}return{group:o,dispose:h}}const Dc={studio:{label:"Studio",bg:1118481,ambient:[16777215,.55],key:[16777215,1.2,[5,8,5]],fill:[8427980,.5,[-4,2,-3]],rim:[16750916,.35,[0,-4,-6]]},warm:{label:"Warm",bg:1707526,ambient:[16766336,.5],key:[16764006,1,[4,7,3]],fill:[16737826,.4,[-3,1,-2]],rim:[16755268,.3,[0,-3,-5]]},cool:{label:"Cool",bg:396570,ambient:[10075135,.5],key:[11193599,1.1,[4,7,4]],fill:[4482764,.5,[-4,1,-3]],rim:[2293725,.3,[0,-3,-5]]},dramatic:{label:"Dramatic",bg:394758,ambient:[16777215,.08],key:[16777215,2.2,[3,9,2]],fill:[4478378,.15,[-4,0,-2]],rim:[16729088,.5,[-1,-5,-7]]}},FA=[{label:"Dark",value:"#111111"},{label:"Charcoal",value:"#1a1a1a"},{label:"Navy",value:"#060d1a"},{label:"White",value:"#f0f0f0"},{label:"Custom",value:null}];function OA(s){const e=_e.useRef(null),t=_e.useRef(null),i=_e.useRef(null),o=_e.useRef(null),a=_e.useRef(null),c=_e.useRef(null),u=_e.useRef(null);_e.useEffect(()=>{const y=s.current;if(!y)return;const w=new Lx({antialias:!0,alpha:!1});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setSize(y.clientWidth,y.clientHeight),w.toneMapping=rx,w.toneMappingExposure=1.1,w.outputColorSpace=Wn,w.shadowMap.enabled=!1,w.setClearColor(1118481,1),y.appendChild(w.domElement),e.current=w;const E=new Rc;E.fog=new vh(1118481,.1),t.current=E;const _=new kx(10,20,3355443,2236962);_.position.y=-.06,_.material.transparent=!0,_.material.opacity=.4,E.add(_);const v=new Dn(42,y.clientWidth/y.clientHeight,.01,60);v.position.set(3,3.5,3),v.lookAt(0,1.5,0),i.current=v;const b=new Ox(v,w.domElement);b.enableDamping=!0,b.dampingFactor=.05,b.minDistance=.3,b.maxDistance=20,b.target.set(0,1.5,0),o.current=b;let N=!0;function T(){N&&(u.current=requestAnimationFrame(T),b.update(),w.render(E,v))}T();const D=new ResizeObserver(()=>{const C=y.clientWidth,P=y.clientHeight;!C||!P||(w.setSize(C,P),v.aspect=C/P,v.updateProjectionMatrix())});return D.observe(y),()=>{N=!1,cancelAnimationFrame(u.current),D.disconnect(),b.dispose(),w.dispose(),y.contains(w.domElement)&&y.removeChild(w.domElement)}},[]);const f=_e.useCallback(y=>{const w=t.current,E=e.current;if(!w)return;const _=Dc[y]??Dc.studio;w.children.filter(oe=>oe.isLight).forEach(oe=>w.remove(oe));const[v,b]=_.ambient;w.add(Object.assign(new Ux(v,b)));const[N,T,D]=_.key,C=new So(N,T);C.position.set(...D),w.add(C);const[P,k,I]=_.fill,A=new So(P,k);A.position.set(...I),w.add(A);const[O,Q,H]=_.rim,ne=new So(O,Q);ne.position.set(...H),w.add(ne),E&&(E.setClearColor(_.bg,1),w.fog&&w.fog.color.setHex(_.bg))},[]),h=_e.useCallback(y=>{var E,_;const w=parseInt(y.replace("#",""),16);(E=e.current)==null||E.setClearColor(w,1),(_=t.current)!=null&&_.fog&&t.current.fog.color.setHex(w)},[]),p=_e.useCallback(()=>{var D;const y=t.current;if(!y)return;const{layers:w,canvasWidth:E,canvasHeight:_,depthDimension:v}=Ye.getState(),b=ni(w,E,_,v),{group:N,dispose:T}=F0(b,E,_,v);a.current&&(y.remove(a.current),(D=c.current)==null||D.call(c)),y.add(N),a.current=N,c.current=T},[]);_e.useEffect(()=>{p(),f("studio")},[p,f]);const m=_e.useCallback((y=2048)=>{const w=e.current,E=t.current,{canvasWidth:_,canvasHeight:v,depthDimension:b}=Ye.getState();if(!w||!E)return;const T=Math.max(_,v,b)*.1*3,D=new Dn(42,1,.01,60);D.position.set(T,T*.8,T),D.lookAt(0,0,0),w.setSize(y,y),w.render(E,D);const C=w.domElement.toDataURL("image/png"),P=document.createElement("a");P.download=`render_${y}px.png`,P.href=C,P.click();const k=s.current;k&&(w.setSize(k.clientWidth,k.clientHeight),i.current.aspect=k.clientWidth/k.clientHeight,i.current.updateProjectionMatrix())},[]),x=_e.useCallback(()=>{const{layers:y,canvasWidth:w,canvasHeight:E,depthDimension:_}=Ye.getState(),v=ni(y,w,E,_),{group:b,dispose:N}=F0(v,w,E,_);new Lc().parse(b,D=>{const C=new Blob([D],{type:"application/octet-stream"}),P=URL.createObjectURL(C),k=document.createElement("a");k.href=P,k.download="model.glb",k.click(),URL.revokeObjectURL(P),N()},D=>console.error("GLB export error:",D),{binary:!0})},[]);return{rebuild:p,applyPreset:f,applyBg:h,exportPng:m,exportGlb:x}}function zA(s,e,t,i){var D,C;const o=ni(s,e,t,i),a=new Map,c=new Uint8Array(256*4);let u=1;const f=[];for(let P=0;P<t;P++)for(let k=0;k<e;k++)for(let I=0;I<i;I++){const A=(C=(D=o[P])==null?void 0:D[k])==null?void 0:C[I];if(!A||A==="transparent")continue;let O=a.get(A);if(O===void 0){if(u>255)continue;O=u++,a.set(A,O);const Q=parseInt(A.slice(1,3),16),H=parseInt(A.slice(3,5),16),ne=parseInt(A.slice(5,7),16);c[(O-1)*4+0]=Q,c[(O-1)*4+1]=H,c[(O-1)*4+2]=ne,c[(O-1)*4+3]=255}f.push(k,I,t-1-P,O)}const h=f.length/4,p=12,m=4+h*4,x=1024,y=12+p+(12+m)+(12+x),w=20+y,E=new ArrayBuffer(w),_=new DataView(E);let v=0;const b=P=>{for(const k of P)_.setUint8(v++,k.charCodeAt(0))},N=P=>{_.setUint32(v,P,!0),v+=4},T=P=>{_.setUint8(v++,P)};b("VOX "),N(150),b("MAIN"),N(0),N(y),b("SIZE"),N(p),N(0),N(e),N(i),N(t),b("XYZI"),N(m),N(0),N(h);for(let P=0;P<h;P++)T(f[P*4+0]),T(f[P*4+1]),T(f[P*4+2]),T(f[P*4+3]);b("RGBA"),N(x),N(0);for(let P=0;P<256;P++)T(c[P*4+0]),T(c[P*4+1]),T(c[P*4+2]),T(c[P*4+3]);return E}function BA(s,e,t,i,o="model.vox"){const a=zA(s,e,t,i),c=new Blob([a],{type:"application/octet-stream"}),u=URL.createObjectURL(c),f=document.createElement("a");f.href=u,f.download=o,f.click(),URL.revokeObjectURL(u)}const wn=.1,st=wn/2;function co(s,e,t,i,o,a,c){var u,f;return e<0||e>=o||t<0||t>=a||i<0||i>=c?!1:((f=(u=s[t])==null?void 0:u[e])==null?void 0:f[i])!=="transparent"}function VA(s,e,t,i){var w,E;const o=ni(s,e,t,i),a=new Map;let c=0;const u=["# Picell3D export",""],f=new Map;let h=1;const p=[];function m(_){if(a.has(_))return a.get(_);const v=`c${c++}`;a.set(_,v);const b=(parseInt(_.slice(1,3),16)/255).toFixed(4),N=(parseInt(_.slice(3,5),16)/255).toFixed(4),T=(parseInt(_.slice(5,7),16)/255).toFixed(4);return u.push(`newmtl ${v}`,`Kd ${b} ${N} ${T}`,"Ka 0.05 0.05 0.05","Ks 0.0 0.0 0.0","d 1.0",""),f.set(v,[]),v}function x(_,v){const b=[];for(const[N,T,D]of v)p.push(N,T,D),b.push(h++);f.get(_).push(b)}for(let _=0;_<t;_++)for(let v=0;v<e;v++)for(let b=0;b<i;b++){const N=(E=(w=o[_])==null?void 0:w[v])==null?void 0:E[b];if(!N||N==="transparent")continue;const T=(v-e/2+.5)*wn,D=(t-1-_)*wn,C=(b-i/2+.5)*wn,P=m(N);co(o,v,_,b+1,e,t,i)||x(P,[[T-st,D,C+st],[T+st,D,C+st],[T+st,D+wn,C+st],[T-st,D+wn,C+st]]),co(o,v,_,b-1,e,t,i)||x(P,[[T+st,D,C-st],[T-st,D,C-st],[T-st,D+wn,C-st],[T+st,D+wn,C-st]]),co(o,v,_-1,b,e,t,i)||x(P,[[T-st,D+wn,C-st],[T+st,D+wn,C-st],[T+st,D+wn,C+st],[T-st,D+wn,C+st]]),co(o,v,_+1,b,e,t,i)||x(P,[[T-st,D,C+st],[T+st,D,C+st],[T+st,D,C-st],[T-st,D,C-st]]),co(o,v+1,_,b,e,t,i)||x(P,[[T+st,D,C+st],[T+st,D,C-st],[T+st,D+wn,C-st],[T+st,D+wn,C+st]]),co(o,v-1,_,b,e,t,i)||x(P,[[T-st,D,C-st],[T-st,D,C+st],[T-st,D+wn,C+st],[T-st,D+wn,C-st]])}const y=["# Picell3D export","mtllib model.mtl","","# Vertices"];for(let _=0;_<p.length;_+=3)y.push(`v ${p[_].toFixed(5)} ${p[_+1].toFixed(5)} ${p[_+2].toFixed(5)}`);y.push("");for(const[_,v]of f)if(v.length){y.push(`usemtl ${_}`);for(const b of v)y.push(`f ${b.join(" ")}`);y.push("")}return{obj:y.join(`
`),mtl:u.join(`
`)}}function O0(s,e,t){const i=new Blob([s],{type:t}),o=URL.createObjectURL(i),a=document.createElement("a");a.href=o,a.download=e,a.click(),URL.revokeObjectURL(o)}function HA(s,e,t,i,o="model"){const{obj:a,mtl:c}=VA(s,e,t,i);O0(a,`${o}.obj`,"text/plain"),setTimeout(()=>O0(c,`${o}.mtl`,"text/plain"),150)}const GA={studio:Y0,warm:n1,cool:jy,dramatic:vy};function jA(s,e,t,i){var a,c;let o=0;for(const u of s)if(u.visible)for(let f=0;f<t;f++)for(let h=0;h<e;h++)for(let p=0;p<i;p++)(c=(a=u.voxels[f])==null?void 0:a[h])!=null&&c[p]&&u.voxels[f][h][p]!=="transparent"&&o++;return o}function cc({children:s}){return S.jsx("div",{className:"px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest",style:{color:"var(--color-accent)",opacity:.8},children:s})}function uo({label:s,sub:e,onClick:t,icon:i=th}){const[o,a]=_e.useState(!1),c=async()=>{a(!0),await t(),setTimeout(()=>a(!1),800)};return S.jsxs("button",{onClick:c,disabled:o,className:"w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors rounded-none hover:bg-white/5 disabled:opacity-50",children:[S.jsx(i,{size:15,className:"flex-shrink-0",style:{color:"var(--color-accent)"}}),S.jsxs("div",{className:"min-w-0 flex-1",children:[S.jsx("div",{className:"text-sm font-medium",style:{color:"var(--color-text)"},children:o?"Exporting…":s}),e&&S.jsx("div",{className:"text-xs opacity-50 truncate",children:e})]}),S.jsx(j_,{size:12,className:"flex-shrink-0 opacity-30"})]})}function WA({onClose:s}){const e=_e.useRef(null),{rebuild:t,applyPreset:i,applyBg:o,exportPng:a,exportGlb:c}=OA(e),{layers:u,canvasWidth:f,canvasHeight:h,depthDimension:p}=Ye(),[m,x]=_e.useState("studio"),[y,w]=_e.useState("#111111"),[E,_]=_e.useState("dark");_e.useEffect(()=>Ye.subscribe((D,C)=>{D.layers!==C.layers&&t()}),[t]);const v=_e.useCallback(T=>{x(T),i(T);const D="#"+Dc[T].bg.toString(16).padStart(6,"0");w(D),_("custom")},[i]),b=T=>{T.value===null?_("custom"):(_(T.label.toLowerCase()),w(T.value),o(T.value))},N=jA(u,f,h,p);return S.jsxs("div",{className:"fixed inset-0 flex flex-col",style:{zIndex:100,background:"var(--color-background)",color:"var(--color-text)"},children:[S.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b flex-shrink-0",style:{borderColor:"var(--color-border)",background:"var(--color-surfaceAlt)"},children:[S.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[S.jsx(ms,{size:15,style:{color:"var(--color-accent)"}}),S.jsx("span",{className:"font-theme text-sm tracking-wider",children:"Render Studio"}),S.jsxs("span",{className:"text-xs opacity-30 ml-1",children:[f," × ",h," × ",p," · ",N.toLocaleString()," voxels"]})]}),S.jsxs("button",{onClick:s,className:"flex items-center gap-1.5 px-3 py-1 rounded border text-xs transition-colors",style:{borderColor:"var(--color-border)",color:"var(--color-text-muted)"},children:[S.jsx(xs,{size:13})," Close"]})]}),S.jsxs("div",{className:"flex flex-1 min-h-0",children:[S.jsxs("div",{className:"w-64 flex-shrink-0 border-r flex flex-col overflow-y-auto",style:{borderColor:"var(--color-border)",background:"var(--color-surface)"},children:[S.jsx(cc,{children:"Lighting"}),S.jsx("div",{className:"grid grid-cols-2 gap-1.5 px-4 pb-2",children:Object.entries(Dc).map(([T,D])=>{const C=GA[T]??Y0;return S.jsxs("button",{onClick:()=>v(T),className:`flex flex-col items-center gap-1 py-2 rounded border text-xs transition-all ${m===T?"border-accent bg-accent/15 text-accent":"border-border text-text-muted hover:border-accent/40 hover:text-text"}`,style:m===T?{borderColor:"var(--color-accent)"}:{},children:[S.jsx(C,{size:16}),D.label]},T)})}),S.jsx(cc,{children:"Background"}),S.jsx("div",{className:"flex flex-wrap gap-1.5 px-4 pb-1",children:FA.filter(T=>T.value!==null).map(T=>S.jsxs("button",{onClick:()=>b(T),className:"flex items-center gap-1.5 px-2 py-1 rounded border text-xs transition-colors",style:{borderColor:E===T.label.toLowerCase()?"var(--color-accent)":"var(--color-border)",color:E===T.label.toLowerCase()?"var(--color-accent)":"var(--color-text-muted)"},children:[S.jsx("span",{className:"inline-block w-3 h-3 rounded-sm border border-white/20",style:{background:T.value}}),T.label]},T.label))}),S.jsxs("div",{className:"flex items-center gap-2 px-4 pb-3 pt-1",children:[S.jsx("span",{className:"text-xs opacity-50",children:"Custom"}),S.jsx("input",{type:"color",value:y,onChange:T=>{w(T.target.value),o(T.target.value),_("custom")},className:"w-8 h-6 rounded cursor-pointer border",style:{borderColor:"var(--color-border)"}}),S.jsx("span",{className:"text-xs font-mono opacity-40",children:y})]}),S.jsx("div",{className:"border-t mx-4",style:{borderColor:"var(--color-border)"}}),S.jsx(cc,{children:"Export Image"}),S.jsx(uo,{label:"PNG — 1024 px",sub:"Quick preview",icon:uc,onClick:()=>a(1024)}),S.jsx(uo,{label:"PNG — 2048 px",sub:"High resolution",icon:uc,onClick:()=>a(2048)}),S.jsx(uo,{label:"PNG — 4096 px",sub:"Print / poster",icon:uc,onClick:()=>a(4096)}),S.jsx("div",{className:"border-t mx-4 mt-1",style:{borderColor:"var(--color-border)"}}),S.jsx(cc,{children:"Export 3D"}),S.jsx(uo,{label:"OBJ + MTL",sub:"Blender · Maya · Cinema4D",icon:ms,onClick:async()=>{const{layers:T,canvasWidth:D,canvasHeight:C,depthDimension:P}=Ye.getState();HA(T,D,C,P)}}),S.jsx(uo,{label:"GLB / GLTF",sub:"Unity · Unreal · Sketchfab",icon:ms,onClick:c}),S.jsx(uo,{label:"VOX",sub:"MagicaVoxel · voxel editors",icon:ms,onClick:async()=>{const{layers:T,canvasWidth:D,canvasHeight:C,depthDimension:P}=Ye.getState();BA(T,D,C,P)}}),S.jsx("div",{className:"mt-auto px-4 py-3 border-t",style:{borderColor:"var(--color-border)"},children:S.jsxs("div",{className:"text-xs opacity-40 space-y-0.5",children:[S.jsxs("div",{children:[N.toLocaleString()," voxels"]}),S.jsxs("div",{children:[f," × ",h," × ",p," (W×H×D)"]}),S.jsxs("div",{children:[u.filter(T=>T.visible).length," visible layer",u.filter(T=>T.visible).length!==1?"s":""]})]})})]}),S.jsxs("div",{className:"flex-1 relative min-w-0",style:{background:"#111"},children:[S.jsx("div",{ref:e,className:"w-full h-full"}),S.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 text-xs pointer-events-none opacity-40 select-none",style:{color:"#fff"},children:"Drag to orbit · Scroll to zoom · Right-drag to pan"})]})]})]})}const XA=[{id:"front",Icon:j0,label:"Front"},{id:"back",Icon:zy,label:"Back"},{id:"left",Icon:wy,label:"Left"},{id:"right",Icon:by,label:"Right"},{id:"top",Icon:Cy,label:"Top"},{id:"bottom",Icon:My,label:"Bottom"}];function YA(){const s=Ye(E=>E.activeTheme),e=Ye(E=>E.viewMode),t=Ye(E=>E.setViewMode),i=Ye(E=>E.activeTool),o=_e.useRef(null),[a,c]=_e.useState(!1);M1(),_e.useEffect(()=>{ex(hf(s))},[s]);const f=hf(s).PainterBackground,h=e!=="preview-only",p=e!=="canvas-only",m=e!=="canvas-only",x=e==="preview-only",y=()=>{p&&t("preview-only")},w=()=>{h&&t("canvas-only")};return S.jsxs("div",{className:"relative flex flex-col w-full h-screen overflow-hidden font-theme",style:{background:"var(--color-background)",color:"var(--color-text)"},children:[S.jsx(f,{}),S.jsxs("div",{className:"relative flex flex-col w-full h-full",style:{zIndex:10},children:[S.jsx(O1,{onExport:()=>{var E;return(E=o.current)==null?void 0:E.call(o)},onRender:()=>c(!0)}),S.jsxs("div",{className:"flex flex-1 min-h-0",children:[m&&S.jsx("div",{className:"flex flex-col border-r border-border flex-shrink-0 overflow-y-auto",style:{width:i==="material"?"10rem":"7rem",background:"color-mix(in srgb, var(--color-surface) 90%, transparent)",transition:"width 0.15s ease"},children:i==="material"?S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"px-2 pt-2 pb-1 text-xs uppercase tracking-wide text-text-muted border-b border-border",children:"Materials"}),S.jsx(uA,{})]}):S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"px-2 pt-2 pb-1 text-xs uppercase tracking-wide text-text-muted border-b border-border",children:"Palette"}),S.jsx(lA,{})]})}),h&&S.jsxs("div",{className:"flex flex-col flex-1 min-w-0 overflow-hidden",style:{borderRight:p?"1px solid var(--color-border)":"none"},children:[S.jsx($A,{closable:p,onClose:y}),S.jsx("div",{className:"flex-1 min-h-0 overflow-hidden relative",style:{background:"color-mix(in srgb, var(--color-background) 80%, transparent)"},children:S.jsx(Z1,{})})]}),p&&S.jsxs("div",{className:"flex flex-col flex-1 min-w-0 overflow-hidden",style:{background:"color-mix(in srgb, var(--color-background) 95%, transparent)"},children:[S.jsxs("div",{className:"flex items-center justify-between gap-2 px-3 py-1.5 border-b border-border flex-shrink-0",style:{background:"color-mix(in srgb, var(--color-surfaceAlt) 95%, transparent)",minHeight:32},children:[S.jsx("div",{className:"text-xs text-text-muted opacity-60 uppercase tracking-widest",children:x?"3D Edit Mode":"3D Preview"}),h&&S.jsx(Hx,{label:"Close 3D preview",onClick:w})]}),S.jsx("div",{className:"flex-1 min-h-0 relative overflow-hidden",children:S.jsx(aA,{onExport:o})})]}),S.jsxs("div",{className:"flex flex-col w-52 border-l border-border flex-shrink-0 overflow-y-auto",style:{background:"color-mix(in srgb, var(--color-surface) 95%, transparent)"},children:[S.jsx(hA,{}),S.jsx("div",{className:"border-t border-border"}),S.jsx(fA,{})]})]}),S.jsx(B1,{})]}),a&&S.jsx(WA,{onClose:()=>c(!1)})]})}function $A({closable:s,onClose:e}){const{activeView:t,setActiveView:i}=Ye();return S.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 border-b border-border flex-shrink-0 flex-wrap",style:{background:"color-mix(in srgb, var(--color-surfaceAlt) 95%, transparent)",minHeight:32},children:[XA.map(({id:o,Icon:a,label:c})=>S.jsxs("button",{onClick:()=>i(o),className:`flex items-center gap-1 px-2 py-0.5 rounded border text-xs transition-colors ${t===o?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/40"}`,children:[S.jsx(a,{size:11}),c]},o)),s&&S.jsx("div",{className:"ml-auto",children:S.jsx(Hx,{label:"Close 2D canvas",onClick:e})})]})}function Hx({label:s,onClick:e}){return S.jsx("button",{type:"button",onClick:e,className:"w-7 h-7 rounded flex items-center justify-center border border-border text-text-muted hover:text-text hover:border-accent/50 hover:bg-surface transition-colors",title:s,"aria-label":s,children:S.jsx(xs,{size:14})})}P_.createRoot(document.getElementById("root")).render(S.jsx(xa.StrictMode,{children:S.jsx(YA,{})}));
