(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Mg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Du={exports:{}},Bo={},Nu={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function X_(){if(Kp)return ht;Kp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function S(F,se,Ne){this.props=F,this.context=se,this.refs=w,this.updater=Ne||y}S.prototype.isReactComponent={},S.prototype.setState=function(F,se){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,se,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=S.prototype;function D(F,se,Ne){this.props=F,this.context=se,this.refs=w,this.updater=Ne||y}var P=D.prototype=new x;P.constructor=D,M(P,S.prototype),P.isPureReactComponent=!0;var C=Array.isArray,Y=Object.prototype.hasOwnProperty,U={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function X(F,se,Ne){var ee,fe={},Ee=null,xe=null;if(se!=null)for(ee in se.ref!==void 0&&(xe=se.ref),se.key!==void 0&&(Ee=""+se.key),se)Y.call(se,ee)&&!k.hasOwnProperty(ee)&&(fe[ee]=se[ee]);var Ae=arguments.length-2;if(Ae===1)fe.children=Ne;else if(1<Ae){for(var Ie=Array(Ae),Ze=0;Ze<Ae;Ze++)Ie[Ze]=arguments[Ze+2];fe.children=Ie}if(F&&F.defaultProps)for(ee in Ae=F.defaultProps,Ae)fe[ee]===void 0&&(fe[ee]=Ae[ee]);return{$$typeof:s,type:F,key:Ee,ref:xe,props:fe,_owner:U.current}}function L(F,se){return{$$typeof:s,type:F.type,key:se,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var se={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ne){return se[Ne]})}var J=/\/+/g;function $(F,se){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):se.toString(36)}function re(F,se,Ne,ee,fe){var Ee=typeof F;(Ee==="undefined"||Ee==="boolean")&&(F=null);var xe=!1;if(F===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(F.$$typeof){case s:case e:xe=!0}}if(xe)return xe=F,fe=fe(xe),F=ee===""?"."+$(xe,0):ee,C(fe)?(Ne="",F!=null&&(Ne=F.replace(J,"$&/")+"/"),re(fe,se,Ne,"",function(Ze){return Ze})):fe!=null&&(R(fe)&&(fe=L(fe,Ne+(!fe.key||xe&&xe.key===fe.key?"":(""+fe.key).replace(J,"$&/")+"/")+F)),se.push(fe)),1;if(xe=0,ee=ee===""?".":ee+":",C(F))for(var Ae=0;Ae<F.length;Ae++){Ee=F[Ae];var Ie=ee+$(Ee,Ae);xe+=re(Ee,se,Ne,Ie,fe)}else if(Ie=_(F),typeof Ie=="function")for(F=Ie.call(F),Ae=0;!(Ee=F.next()).done;)Ee=Ee.value,Ie=ee+$(Ee,Ae++),xe+=re(Ee,se,Ne,Ie,fe);else if(Ee==="object")throw se=String(F),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return xe}function de(F,se,Ne){if(F==null)return F;var ee=[],fe=0;return re(F,ee,"","",function(Ee){return se.call(Ne,Ee,fe++)}),ee}function ae(F){if(F._status===-1){var se=F._result;se=se(),se.then(function(Ne){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ne)},function(Ne){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ne)}),F._status===-1&&(F._status=0,F._result=se)}if(F._status===1)return F._result.default;throw F._result}var ce={current:null},B={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:U};function le(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:de,forEach:function(F,se,Ne){de(F,function(){se.apply(this,arguments)},Ne)},count:function(F){var se=0;return de(F,function(){se++}),se},toArray:function(F){return de(F,function(se){return se})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},ht.Component=S,ht.Fragment=t,ht.Profiler=a,ht.PureComponent=D,ht.StrictMode=r,ht.Suspense=f,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ht.act=le,ht.cloneElement=function(F,se,Ne){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ee=M({},F.props),fe=F.key,Ee=F.ref,xe=F._owner;if(se!=null){if(se.ref!==void 0&&(Ee=se.ref,xe=U.current),se.key!==void 0&&(fe=""+se.key),F.type&&F.type.defaultProps)var Ae=F.type.defaultProps;for(Ie in se)Y.call(se,Ie)&&!k.hasOwnProperty(Ie)&&(ee[Ie]=se[Ie]===void 0&&Ae!==void 0?Ae[Ie]:se[Ie])}var Ie=arguments.length-2;if(Ie===1)ee.children=Ne;else if(1<Ie){Ae=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)Ae[Ze]=arguments[Ze+2];ee.children=Ae}return{$$typeof:s,type:F.type,key:fe,ref:Ee,props:ee,_owner:xe}},ht.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},ht.createElement=X,ht.createFactory=function(F){var se=X.bind(null,F);return se.type=F,se},ht.createRef=function(){return{current:null}},ht.forwardRef=function(F){return{$$typeof:d,render:F}},ht.isValidElement=R,ht.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:ae}},ht.memo=function(F,se){return{$$typeof:p,type:F,compare:se===void 0?null:se}},ht.startTransition=function(F){var se=B.transition;B.transition={};try{F()}finally{B.transition=se}},ht.unstable_act=le,ht.useCallback=function(F,se){return ce.current.useCallback(F,se)},ht.useContext=function(F){return ce.current.useContext(F)},ht.useDebugValue=function(){},ht.useDeferredValue=function(F){return ce.current.useDeferredValue(F)},ht.useEffect=function(F,se){return ce.current.useEffect(F,se)},ht.useId=function(){return ce.current.useId()},ht.useImperativeHandle=function(F,se,Ne){return ce.current.useImperativeHandle(F,se,Ne)},ht.useInsertionEffect=function(F,se){return ce.current.useInsertionEffect(F,se)},ht.useLayoutEffect=function(F,se){return ce.current.useLayoutEffect(F,se)},ht.useMemo=function(F,se){return ce.current.useMemo(F,se)},ht.useReducer=function(F,se,Ne){return ce.current.useReducer(F,se,Ne)},ht.useRef=function(F){return ce.current.useRef(F)},ht.useState=function(F){return ce.current.useState(F)},ht.useSyncExternalStore=function(F,se,Ne){return ce.current.useSyncExternalStore(F,se,Ne)},ht.useTransition=function(){return ce.current.useTransition()},ht.version="18.3.1",ht}var Zp;function cf(){return Zp||(Zp=1,Nu.exports=X_()),Nu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Y_(){if(Qp)return Bo;Qp=1;var s=cf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var m,g={},_=null,y=null;p!==void 0&&(_=""+p),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(m in f)r.call(f,m)&&!l.hasOwnProperty(m)&&(g[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:d,key:_,ref:y,props:g,_owner:a.current}}return Bo.Fragment=t,Bo.jsx=u,Bo.jsxs=u,Bo}var Jp;function q_(){return Jp||(Jp=1,Du.exports=Y_()),Du.exports}var A=q_(),ot=cf();const qo=Mg(ot);var cl={},Iu={exports:{}},Nn={},Uu={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function $_(){return em||(em=1,(function(s){function e(B,ue){var le=B.length;B.push(ue);e:for(;0<le;){var F=le-1>>>1,se=B[F];if(0<a(se,ue))B[F]=ue,B[le]=se,le=F;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ue=B[0],le=B.pop();if(le!==ue){B[0]=le;e:for(var F=0,se=B.length,Ne=se>>>1;F<Ne;){var ee=2*(F+1)-1,fe=B[ee],Ee=ee+1,xe=B[Ee];if(0>a(fe,le))Ee<se&&0>a(xe,fe)?(B[F]=xe,B[Ee]=le,F=Ee):(B[F]=fe,B[ee]=le,F=ee);else if(Ee<se&&0>a(xe,le))B[F]=xe,B[Ee]=le,F=Ee;else break e}}return ue}function a(B,ue){var le=B.sortIndex-ue.sortIndex;return le!==0?le:B.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],p=[],m=1,g=null,_=3,y=!1,M=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var ue=t(p);ue!==null;){if(ue.callback===null)r(p);else if(ue.startTime<=B)r(p),ue.sortIndex=ue.expirationTime,e(f,ue);else break;ue=t(p)}}function C(B){if(w=!1,P(B),!M)if(t(f)!==null)M=!0,ae(Y);else{var ue=t(p);ue!==null&&ce(C,ue.startTime-B)}}function Y(B,ue){M=!1,w&&(w=!1,x(X),X=-1),y=!0;var le=_;try{for(P(ue),g=t(f);g!==null&&(!(g.expirationTime>ue)||B&&!z());){var F=g.callback;if(typeof F=="function"){g.callback=null,_=g.priorityLevel;var se=F(g.expirationTime<=ue);ue=s.unstable_now(),typeof se=="function"?g.callback=se:g===t(f)&&r(f),P(ue)}else r(f);g=t(f)}if(g!==null)var Ne=!0;else{var ee=t(p);ee!==null&&ce(C,ee.startTime-ue),Ne=!1}return Ne}finally{g=null,_=le,y=!1}}var U=!1,k=null,X=-1,L=5,R=-1;function z(){return!(s.unstable_now()-R<L)}function J(){if(k!==null){var B=s.unstable_now();R=B;var ue=!0;try{ue=k(!0,B)}finally{ue?$():(U=!1,k=null)}}else U=!1}var $;if(typeof D=="function")$=function(){D(J)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,de=re.port2;re.port1.onmessage=J,$=function(){de.postMessage(null)}}else $=function(){S(J,0)};function ae(B){k=B,U||(U=!0,$())}function ce(B,ue){X=S(function(){B(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,ae(Y))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(B){switch(_){case 1:case 2:case 3:var ue=3;break;default:ue=_}var le=_;_=ue;try{return B()}finally{_=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ue){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var le=_;_=B;try{return ue()}finally{_=le}},s.unstable_scheduleCallback=function(B,ue,le){var F=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?F+le:F):le=F,B){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=le+se,B={id:m++,callback:ue,priorityLevel:B,startTime:le,expirationTime:se,sortIndex:-1},le>F?(B.sortIndex=le,e(p,B),t(f)===null&&B===t(p)&&(w?(x(X),X=-1):w=!0,ce(C,le-F))):(B.sortIndex=se,e(f,B),M||y||(M=!0,ae(Y))),B},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(B){var ue=_;return function(){var le=_;_=ue;try{return B.apply(this,arguments)}finally{_=le}}}})(Fu)),Fu}var tm;function K_(){return tm||(tm=1,Uu.exports=$_()),Uu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Z_(){if(nm)return Nn;nm=1;var s=cf(),e=K_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return f.call(g,n)?!0:f.call(m,n)?!1:p.test(n)?g[n]=!0:(m[n]=!0,!1)}function y(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,c){if(i===null||typeof i>"u"||y(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,c,h,v,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,D);S[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,D);S[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,D);S[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,o,c){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,h,c)&&(o=null),c||h===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,c=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),U=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,F;function se(n){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ne=!1;function ee(n,i){if(!n||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var c=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){c=te}n.call(i.prototype)}else{try{throw Error()}catch(te){c=te}n()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var h=te.stack.split(`
`),v=c.stack.split(`
`),E=h.length-1,I=v.length-1;1<=E&&0<=I&&h[E]!==v[I];)I--;for(;1<=E&&0<=I;E--,I--)if(h[E]!==v[I]){if(E!==1||I!==1)do if(E--,I--,0>I||h[E]!==v[I]){var O=`
`+h[E].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=E&&0<=I);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?se(n):""}function fe(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case U:return"Portal";case L:return"Profiler";case X:return"StrictMode";case $:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Ie(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,v=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,v.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ct(n){n._valueTracker||(n._valueTracker=Ze(n))}function mt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function j(n,i){var o=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function vn(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function dt(n,i){pt(n,i);var o=Ae(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?At(n,i.type,o):i.hasOwnProperty("defaultValue")&&At(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function qe(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function At(n,i,o){(i!=="number"||Nt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ye=Array.isArray;function N(n,i,o,c){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ye(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ae(o)}}function me(n,i){var o=Ae(i.value),c=Ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Se[i]=Se[n]})});function Qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(n)&&Se[n]?(""+i).trim():i+"px"}function Je(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,h=Qe(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,h):n[o]=h}}var Oe=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(Oe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function it(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,oe=null,pe=null;function Le(n){if(n=To(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=wa(i),Ce(n.stateNode,n.type,i))}}function Pe(n){oe?pe?pe.push(n):pe=[n]:oe=n}function rt(){if(oe){var n=oe,i=pe;if(pe=oe=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function Ut(n,i){return n(i)}function Yt(){}var xt=!1;function An(n,i,o){if(xt)return n(i,o);xt=!0;try{return Ut(n,i,o)}finally{xt=!1,(oe!==null||pe!==null)&&(Yt(),rt())}}function xn(n,i){var o=n.stateNode;if(o===null)return null;var c=wa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var as=!1;if(d)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){as=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{as=!1}function Ci(n,i,o,c,h,v,E,I,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(ve){this.onError(ve)}}var Ri=!1,Pr=null,Lr=!1,Ji=null,ra={onError:function(n){Ri=!0,Pr=n}};function ls(n,i,o,c,h,v,E,I,O){Ri=!1,Pr=null,Ci.apply(ra,arguments)}function sa(n,i,o,c,h,v,E,I,O){if(ls.apply(this,arguments),Ri){if(Ri){var te=Pr;Ri=!1,Pr=null}else throw Error(t(198));Lr||(Lr=!0,Ji=te)}}function _i(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function oa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function aa(n){if(_i(n)!==n)throw Error(t(188))}function ec(n){var i=n.alternate;if(!i){if(i=_i(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var h=o.return;if(h===null)break;var v=h.alternate;if(v===null){if(c=h.return,c!==null){o=c;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===o)return aa(h),n;if(v===c)return aa(h),i;v=v.sibling}throw Error(t(188))}if(o.return!==c.return)o=h,c=v;else{for(var E=!1,I=h.child;I;){if(I===o){E=!0,o=h,c=v;break}if(I===c){E=!0,c=h,o=v;break}I=I.sibling}if(!E){for(I=v.child;I;){if(I===o){E=!0,o=v,c=h;break}if(I===c){E=!0,c=v,o=h;break}I=I.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function b(n){return n=ec(n),n!==null?G(n):null}function G(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=G(n);if(i!==null)return i;n=n.sibling}return null}var ne=e.unstable_scheduleCallback,ie=e.unstable_cancelCallback,W=e.unstable_shouldYield,Te=e.unstable_requestPaint,Me=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,_t=e.unstable_IdlePriority,wt=null,gt=null;function cn(n){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Mt,Xe=Math.log,ti=Math.LN2;function Mt(n){return n>>>=0,n===0?32:31-(Xe(n)/ti|0)|0}var un=64,ni=4194304;function qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vi(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,h=n.suspendedLanes,v=n.pingedLanes,E=o&268435455;if(E!==0){var I=E&~h;I!==0?c=qt(I):(v&=E,v!==0&&(c=qt(v)))}else E=o&~h,E!==0?c=qt(E):v!==0&&(c=qt(v));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,v=i&-i,h>=v||h===16&&(v&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-st(i),h=1<<o,c|=n[o],i&=~h;return c}function Lt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,v=n.pendingLanes;0<v;){var E=31-st(v),I=1<<E,O=h[E];O===-1?((I&o)===0||(I&c)!==0)&&(h[E]=Lt(I,i)):O<=i&&(n.expiredLanes|=I),v&=~I}}function Pi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yn(){var n=un;return un<<=1,(un&4194240)===0&&(un=64),n}function Xn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function bn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-st(i),n[i]=o}function la(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-st(o),v=1<<h;i[h]=0,c[h]=-1,n[h]=-1,o&=~v}}function tc(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-st(o),h=1<<c;h&i|n[c]&i&&(n[c]|=i),o&=~h}}var bt=0;function Cf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Rf,nc,Pf,Lf,Df,ic=!1,ca=[],er=null,tr=null,nr=null,lo=new Map,co=new Map,ir=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(n,i){switch(n){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":lo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(i.pointerId)}}function uo(n,i,o,c,h,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:v,targetContainers:[h]},i!==null&&(i=To(i),i!==null&&nc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function m0(n,i,o,c,h){switch(i){case"focusin":return er=uo(er,n,i,o,c,h),!0;case"dragenter":return tr=uo(tr,n,i,o,c,h),!0;case"mouseover":return nr=uo(nr,n,i,o,c,h),!0;case"pointerover":var v=h.pointerId;return lo.set(v,uo(lo.get(v)||null,n,i,o,c,h)),!0;case"gotpointercapture":return v=h.pointerId,co.set(v,uo(co.get(v)||null,n,i,o,c,h)),!0}return!1}function If(n){var i=Dr(n.target);if(i!==null){var o=_i(i);if(o!==null){if(i=o.tag,i===13){if(i=oa(o),i!==null){n.blockedOn=i,Df(n.priority,function(){Pf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ua(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=sc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Tt=c,o.target.dispatchEvent(c),Tt=null}else return i=To(o),i!==null&&nc(i),n.blockedOn=o,!1;i.shift()}return!0}function Uf(n,i,o){ua(n)&&o.delete(i)}function g0(){ic=!1,er!==null&&ua(er)&&(er=null),tr!==null&&ua(tr)&&(tr=null),nr!==null&&ua(nr)&&(nr=null),lo.forEach(Uf),co.forEach(Uf)}function fo(n,i){n.blockedOn===i&&(n.blockedOn=null,ic||(ic=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,g0)))}function ho(n){function i(h){return fo(h,n)}if(0<ca.length){fo(ca[0],n);for(var o=1;o<ca.length;o++){var c=ca[o];c.blockedOn===n&&(c.blockedOn=null)}}for(er!==null&&fo(er,n),tr!==null&&fo(tr,n),nr!==null&&fo(nr,n),lo.forEach(i),co.forEach(i),o=0;o<ir.length;o++)c=ir[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<ir.length&&(o=ir[0],o.blockedOn===null);)If(o),o.blockedOn===null&&ir.shift()}var cs=C.ReactCurrentBatchConfig,da=!0;function _0(n,i,o,c){var h=bt,v=cs.transition;cs.transition=null;try{bt=1,rc(n,i,o,c)}finally{bt=h,cs.transition=v}}function v0(n,i,o,c){var h=bt,v=cs.transition;cs.transition=null;try{bt=4,rc(n,i,o,c)}finally{bt=h,cs.transition=v}}function rc(n,i,o,c){if(da){var h=sc(n,i,o,c);if(h===null)Mc(n,i,c,fa,o),Nf(n,c);else if(m0(h,n,i,o,c))c.stopPropagation();else if(Nf(n,c),i&4&&-1<p0.indexOf(n)){for(;h!==null;){var v=To(h);if(v!==null&&Rf(v),v=sc(n,i,o,c),v===null&&Mc(n,i,c,fa,o),v===h)break;h=v}h!==null&&c.stopPropagation()}else Mc(n,i,c,null,o)}}var fa=null;function sc(n,i,o,c){if(fa=null,n=V(c),n=Dr(n),n!==null)if(i=_i(n),i===null)n=null;else if(o=i.tag,o===13){if(n=oa(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return fa=n,null}function Ff(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Be:return 1;case et:return 4;case nt:case We:return 16;case _t:return 536870912;default:return 16}default:return 16}}var rr=null,oc=null,ha=null;function kf(){if(ha)return ha;var n,i=oc,o=i.length,c,h="value"in rr?rr.value:rr.textContent,v=h.length;for(n=0;n<o&&i[n]===h[n];n++);var E=o-n;for(c=1;c<=E&&i[o-c]===h[v-c];c++);return ha=h.slice(n,1<c?1-c:void 0)}function pa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ma(){return!0}function Of(){return!1}function On(n){function i(o,c,h,v,E){this._reactName=o,this._targetInst=h,this.type=c,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?ma:Of,this.isPropagationStopped=Of,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=On(us),po=le({},us,{view:0,detail:0}),x0=On(po),lc,cc,mo,ga=le({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==mo&&(mo&&n.type==="mousemove"?(lc=n.screenX-mo.screenX,cc=n.screenY-mo.screenY):cc=lc=0,mo=n),lc)},movementY:function(n){return"movementY"in n?n.movementY:cc}}),zf=On(ga),y0=le({},ga,{dataTransfer:0}),S0=On(y0),M0=le({},po,{relatedTarget:0}),uc=On(M0),E0=le({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),w0=On(E0),T0=le({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),A0=On(T0),b0=le({},us,{data:0}),Bf=On(b0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=P0[n])?!!i[n]:!1}function dc(){return L0}var D0=le({},po,{key:function(n){if(n.key){var i=C0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=pa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?R0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(n){return n.type==="keypress"?pa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?pa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),N0=On(D0),I0=le({},ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=On(I0),U0=le({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),F0=On(U0),k0=le({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=On(k0),z0=le({},ga,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),B0=On(z0),H0=[9,13,27,32],fc=d&&"CompositionEvent"in window,go=null;d&&"documentMode"in document&&(go=document.documentMode);var V0=d&&"TextEvent"in window&&!go,Vf=d&&(!fc||go&&8<go&&11>=go),Gf=" ",Wf=!1;function jf(n,i){switch(n){case"keyup":return H0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function G0(n,i){switch(n){case"compositionend":return Xf(i);case"keypress":return i.which!==32?null:(Wf=!0,Gf);case"textInput":return n=i.data,n===Gf&&Wf?null:n;default:return null}}function W0(n,i){if(ds)return n==="compositionend"||!fc&&jf(n,i)?(n=kf(),ha=oc=rr=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vf&&i.locale!=="ko"?null:i.data;default:return null}}var j0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!j0[n.type]:i==="textarea"}function qf(n,i,o,c){Pe(c),i=Sa(i,"onChange"),0<i.length&&(o=new ac("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var _o=null,vo=null;function X0(n){fh(n,0)}function _a(n){var i=gs(n);if(mt(i))return n}function Y0(n,i){if(n==="change")return i}var $f=!1;if(d){var hc;if(d){var pc="oninput"in document;if(!pc){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),pc=typeof Kf.oninput=="function"}hc=pc}else hc=!1;$f=hc&&(!document.documentMode||9<document.documentMode)}function Zf(){_o&&(_o.detachEvent("onpropertychange",Qf),vo=_o=null)}function Qf(n){if(n.propertyName==="value"&&_a(vo)){var i=[];qf(i,vo,n,V(n)),An(X0,i)}}function q0(n,i,o){n==="focusin"?(Zf(),_o=i,vo=o,_o.attachEvent("onpropertychange",Qf)):n==="focusout"&&Zf()}function $0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _a(vo)}function K0(n,i){if(n==="click")return _a(i)}function Z0(n,i){if(n==="input"||n==="change")return _a(i)}function Q0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ii=typeof Object.is=="function"?Object.is:Q0;function xo(n,i){if(ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var h=o[c];if(!f.call(i,h)||!ii(n[h],i[h]))return!1}return!0}function Jf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function eh(n,i){var o=Jf(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Jf(o)}}function th(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?th(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function nh(){for(var n=window,i=Nt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Nt(n.document)}return i}function mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function J0(n){var i=nh(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&th(o.ownerDocument.documentElement,o)){if(c!==null&&mc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,v=Math.min(c.start,h);c=c.end===void 0?v:Math.min(c.end,h),!n.extend&&v>c&&(h=c,c=v,v=h),h=eh(o,v);var E=eh(o,c);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),v>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var e_=d&&"documentMode"in document&&11>=document.documentMode,fs=null,gc=null,yo=null,_c=!1;function ih(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_c||fs==null||fs!==Nt(c)||(c=fs,"selectionStart"in c&&mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),yo&&xo(yo,c)||(yo=c,c=Sa(gc,"onSelect"),0<c.length&&(i=new ac("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=fs)))}function va(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var hs={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},vc={},rh={};d&&(rh=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function xa(n){if(vc[n])return vc[n];if(!hs[n])return n;var i=hs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in rh)return vc[n]=i[o];return n}var sh=xa("animationend"),oh=xa("animationiteration"),ah=xa("animationstart"),lh=xa("transitionend"),ch=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(n,i){ch.set(n,i),l(i,[n])}for(var xc=0;xc<uh.length;xc++){var yc=uh[xc],t_=yc.toLowerCase(),n_=yc[0].toUpperCase()+yc.slice(1);sr(t_,"on"+n_)}sr(sh,"onAnimationEnd"),sr(oh,"onAnimationIteration"),sr(ah,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(lh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i_=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function dh(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,sa(c,i,void 0,n),n.currentTarget=null}function fh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],h=c.event;c=c.listeners;e:{var v=void 0;if(i)for(var E=c.length-1;0<=E;E--){var I=c[E],O=I.instance,te=I.currentTarget;if(I=I.listener,O!==v&&h.isPropagationStopped())break e;dh(h,I,te),v=O}else for(E=0;E<c.length;E++){if(I=c[E],O=I.instance,te=I.currentTarget,I=I.listener,O!==v&&h.isPropagationStopped())break e;dh(h,I,te),v=O}}}if(Lr)throw n=Ji,Lr=!1,Ji=null,n}function Ft(n,i){var o=i[Cc];o===void 0&&(o=i[Cc]=new Set);var c=n+"__bubble";o.has(c)||(hh(i,n,2,!1),o.add(c))}function Sc(n,i,o){var c=0;i&&(c|=4),hh(o,n,c,i)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Mo(n){if(!n[ya]){n[ya]=!0,r.forEach(function(o){o!=="selectionchange"&&(i_.has(o)||Sc(o,!1,n),Sc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ya]||(i[ya]=!0,Sc("selectionchange",!1,i))}}function hh(n,i,o,c){switch(Ff(i)){case 1:var h=_0;break;case 4:h=v0;break;default:h=rc}o=h.bind(null,i,o,n),h=void 0,!as||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function Mc(n,i,o,c,h){var v=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var I=c.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===h||O.nodeType===8&&O.parentNode===h))return;E=E.return}for(;I!==null;){if(E=Dr(I),E===null)return;if(O=E.tag,O===5||O===6){c=v=E;continue e}I=I.parentNode}}c=c.return}An(function(){var te=v,ve=V(o),ye=[];e:{var ge=ch.get(n);if(ge!==void 0){var De=ac,ze=n;switch(n){case"keypress":if(pa(o)===0)break e;case"keydown":case"keyup":De=N0;break;case"focusin":ze="focus",De=uc;break;case"focusout":ze="blur",De=uc;break;case"beforeblur":case"afterblur":De=uc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=F0;break;case sh:case oh:case ah:De=w0;break;case lh:De=O0;break;case"scroll":De=x0;break;case"wheel":De=B0;break;case"copy":case"cut":case"paste":De=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=Hf}var He=(i&4)!==0,Wt=!He&&n==="scroll",q=He?ge!==null?ge+"Capture":null:ge;He=[];for(var H=te,K;H!==null;){K=H;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,q!==null&&(we=xn(H,q),we!=null&&He.push(Eo(H,we,K)))),Wt)break;H=H.return}0<He.length&&(ge=new De(ge,ze,null,o,ve),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",De=n==="mouseout"||n==="pointerout",ge&&o!==Tt&&(ze=o.relatedTarget||o.fromElement)&&(Dr(ze)||ze[Li]))break e;if((De||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(ze=o.relatedTarget||o.toElement,De=te,ze=ze?Dr(ze):null,ze!==null&&(Wt=_i(ze),ze!==Wt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=te),De!==ze)){if(He=zf,we="onMouseLeave",q="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(He=Hf,we="onPointerLeave",q="onPointerEnter",H="pointer"),Wt=De==null?ge:gs(De),K=ze==null?ge:gs(ze),ge=new He(we,H+"leave",De,o,ve),ge.target=Wt,ge.relatedTarget=K,we=null,Dr(ve)===te&&(He=new He(q,H+"enter",ze,o,ve),He.target=K,He.relatedTarget=Wt,we=He),Wt=we,De&&ze)t:{for(He=De,q=ze,H=0,K=He;K;K=ps(K))H++;for(K=0,we=q;we;we=ps(we))K++;for(;0<H-K;)He=ps(He),H--;for(;0<K-H;)q=ps(q),K--;for(;H--;){if(He===q||q!==null&&He===q.alternate)break t;He=ps(He),q=ps(q)}He=null}else He=null;De!==null&&ph(ye,ge,De,He,!1),ze!==null&&Wt!==null&&ph(ye,Wt,ze,He,!0)}}e:{if(ge=te?gs(te):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var je=Y0;else if(Yf(ge))if($f)je=Z0;else{je=$0;var $e=q0}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=K0);if(je&&(je=je(n,te))){qf(ye,je,o,ve);break e}$e&&$e(n,ge,te),n==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&At(ge,"number",ge.value)}switch($e=te?gs(te):window,n){case"focusin":(Yf($e)||$e.contentEditable==="true")&&(fs=$e,gc=te,yo=null);break;case"focusout":yo=gc=fs=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,ih(ye,o,ve);break;case"selectionchange":if(e_)break;case"keydown":case"keyup":ih(ye,o,ve)}var Ke;if(fc)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ds?jf(n,o)&&(tt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(Vf&&o.locale!=="ko"&&(ds||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ds&&(Ke=kf()):(rr=ve,oc="value"in rr?rr.value:rr.textContent,ds=!0)),$e=Sa(te,tt),0<$e.length&&(tt=new Bf(tt,n,null,o,ve),ye.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=Xf(o),Ke!==null&&(tt.data=Ke)))),(Ke=V0?G0(n,o):W0(n,o))&&(te=Sa(te,"onBeforeInput"),0<te.length&&(ve=new Bf("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:te}),ve.data=Ke))}fh(ye,i)})}function Eo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Sa(n,i){for(var o=i+"Capture",c=[];n!==null;){var h=n,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=xn(n,o),v!=null&&c.unshift(Eo(n,v,h)),v=xn(n,i),v!=null&&c.push(Eo(n,v,h))),n=n.return}return c}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ph(n,i,o,c,h){for(var v=i._reactName,E=[];o!==null&&o!==c;){var I=o,O=I.alternate,te=I.stateNode;if(O!==null&&O===c)break;I.tag===5&&te!==null&&(I=te,h?(O=xn(o,v),O!=null&&E.unshift(Eo(o,O,I))):h||(O=xn(o,v),O!=null&&E.push(Eo(o,O,I)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var r_=/\r\n?/g,s_=/\u0000|\uFFFD/g;function mh(n){return(typeof n=="string"?n:""+n).replace(r_,`
`).replace(s_,"")}function Ma(n,i,o){if(i=mh(i),mh(n)!==i&&o)throw Error(t(425))}function Ea(){}var Ec=null,wc=null;function Tc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,o_=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,a_=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(n){return gh.resolve(null).then(n).catch(l_)}:Ac;function l_(n){setTimeout(function(){throw n})}function bc(n,i){var o=i,c=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(c===0){n.removeChild(h),ho(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=h}while(o);ho(i)}function or(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function _h(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),xi="__reactFiber$"+ms,wo="__reactProps$"+ms,Li="__reactContainer$"+ms,Cc="__reactEvents$"+ms,c_="__reactListeners$"+ms,u_="__reactHandles$"+ms;function Dr(n){var i=n[xi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Li]||o[xi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=_h(n);n!==null;){if(o=n[xi])return o;n=_h(n)}return i}n=o,o=n.parentNode}return null}function To(n){return n=n[xi]||n[Li],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function wa(n){return n[wo]||null}var Rc=[],_s=-1;function ar(n){return{current:n}}function kt(n){0>_s||(n.current=Rc[_s],Rc[_s]=null,_s--)}function It(n,i){_s++,Rc[_s]=n.current,n.current=i}var lr={},dn=ar(lr),Cn=ar(!1),Nr=lr;function vs(n,i){var o=n.type.contextTypes;if(!o)return lr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in o)h[v]=i[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Rn(n){return n=n.childContextTypes,n!=null}function Ta(){kt(Cn),kt(dn)}function vh(n,i,o){if(dn.current!==lr)throw Error(t(168));It(dn,i),It(Cn,o)}function xh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,xe(n)||"Unknown",h));return le({},o,c)}function Aa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||lr,Nr=dn.current,It(dn,n),It(Cn,Cn.current),!0}function yh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=xh(n,i,Nr),c.__reactInternalMemoizedMergedChildContext=n,kt(Cn),kt(dn),It(dn,n)):kt(Cn),It(Cn,o)}var Di=null,ba=!1,Pc=!1;function Sh(n){Di===null?Di=[n]:Di.push(n)}function d_(n){ba=!0,Sh(n)}function cr(){if(!Pc&&Di!==null){Pc=!0;var n=0,i=bt;try{var o=Di;for(bt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Di=null,ba=!1}catch(h){throw Di!==null&&(Di=Di.slice(n+1)),ne(Be,cr),h}finally{bt=i,Pc=!1}}return null}var xs=[],ys=0,Ca=null,Ra=0,Yn=[],qn=0,Ir=null,Ni=1,Ii="";function Ur(n,i){xs[ys++]=Ra,xs[ys++]=Ca,Ca=n,Ra=i}function Mh(n,i,o){Yn[qn++]=Ni,Yn[qn++]=Ii,Yn[qn++]=Ir,Ir=n;var c=Ni;n=Ii;var h=32-st(c)-1;c&=~(1<<h),o+=1;var v=32-st(i)+h;if(30<v){var E=h-h%5;v=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Ni=1<<32-st(i)+h|o<<h|c,Ii=v+n}else Ni=1<<v|o<<h|c,Ii=n}function Lc(n){n.return!==null&&(Ur(n,1),Mh(n,1,0))}function Dc(n){for(;n===Ca;)Ca=xs[--ys],xs[ys]=null,Ra=xs[--ys],xs[ys]=null;for(;n===Ir;)Ir=Yn[--qn],Yn[qn]=null,Ii=Yn[--qn],Yn[qn]=null,Ni=Yn[--qn],Yn[qn]=null}var zn=null,Bn=null,Ot=!1,ri=null;function Eh(n,i){var o=Qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function wh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Bn=or(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ir!==null?{id:Ni,overflow:Ii}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Qn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,zn=n,Bn=null,!0):!1;default:return!1}}function Nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ic(n){if(Ot){var i=Bn;if(i){var o=i;if(!wh(n,i)){if(Nc(n))throw Error(t(418));i=or(o.nextSibling);var c=zn;i&&wh(n,i)?Eh(c,o):(n.flags=n.flags&-4097|2,Ot=!1,zn=n)}}else{if(Nc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ot=!1,zn=n}}}function Th(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Pa(n){if(n!==zn)return!1;if(!Ot)return Th(n),Ot=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Tc(n.type,n.memoizedProps)),i&&(i=Bn)){if(Nc(n))throw Ah(),Error(t(418));for(;i;)Eh(n,i),i=or(i.nextSibling)}if(Th(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Bn=or(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=zn?or(n.stateNode.nextSibling):null;return!0}function Ah(){for(var n=Bn;n;)n=or(n.nextSibling)}function Ss(){Bn=zn=null,Ot=!1}function Uc(n){ri===null?ri=[n]:ri.push(n)}var f_=C.ReactCurrentBatchConfig;function Ao(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var h=c,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(E){var I=h.refs;E===null?delete I[v]:I[v]=E},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function La(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function bh(n){var i=n._init;return i(n._payload)}function Ch(n){function i(q,H){if(n){var K=q.deletions;K===null?(q.deletions=[H],q.flags|=16):K.push(H)}}function o(q,H){if(!n)return null;for(;H!==null;)i(q,H),H=H.sibling;return null}function c(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function h(q,H){return q=_r(q,H),q.index=0,q.sibling=null,q}function v(q,H,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<H?(q.flags|=2,H):K):(q.flags|=2,H)):(q.flags|=1048576,H)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function I(q,H,K,we){return H===null||H.tag!==6?(H=Au(K,q.mode,we),H.return=q,H):(H=h(H,K),H.return=q,H)}function O(q,H,K,we){var je=K.type;return je===k?ve(q,H,K.props.children,we,K.key):H!==null&&(H.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&bh(je)===H.type)?(we=h(H,K.props),we.ref=Ao(q,H,K),we.return=q,we):(we=tl(K.type,K.key,K.props,null,q.mode,we),we.ref=Ao(q,H,K),we.return=q,we)}function te(q,H,K,we){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=bu(K,q.mode,we),H.return=q,H):(H=h(H,K.children||[]),H.return=q,H)}function ve(q,H,K,we,je){return H===null||H.tag!==7?(H=Gr(K,q.mode,we,je),H.return=q,H):(H=h(H,K),H.return=q,H)}function ye(q,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Au(""+H,q.mode,K),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Y:return K=tl(H.type,H.key,H.props,null,q.mode,K),K.ref=Ao(q,null,H),K.return=q,K;case U:return H=bu(H,q.mode,K),H.return=q,H;case ae:var we=H._init;return ye(q,we(H._payload),K)}if(Ye(H)||ue(H))return H=Gr(H,q.mode,K,null),H.return=q,H;La(q,H)}return null}function ge(q,H,K,we){var je=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return je!==null?null:I(q,H,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case Y:return K.key===je?O(q,H,K,we):null;case U:return K.key===je?te(q,H,K,we):null;case ae:return je=K._init,ge(q,H,je(K._payload),we)}if(Ye(K)||ue(K))return je!==null?null:ve(q,H,K,we,null);La(q,K)}return null}function De(q,H,K,we,je){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(K)||null,I(H,q,""+we,je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case Y:return q=q.get(we.key===null?K:we.key)||null,O(H,q,we,je);case U:return q=q.get(we.key===null?K:we.key)||null,te(H,q,we,je);case ae:var $e=we._init;return De(q,H,K,$e(we._payload),je)}if(Ye(we)||ue(we))return q=q.get(K)||null,ve(H,q,we,je,null);La(H,we)}return null}function ze(q,H,K,we){for(var je=null,$e=null,Ke=H,tt=H=0,rn=null;Ke!==null&&tt<K.length;tt++){Ke.index>tt?(rn=Ke,Ke=null):rn=Ke.sibling;var Et=ge(q,Ke,K[tt],we);if(Et===null){Ke===null&&(Ke=rn);break}n&&Ke&&Et.alternate===null&&i(q,Ke),H=v(Et,H,tt),$e===null?je=Et:$e.sibling=Et,$e=Et,Ke=rn}if(tt===K.length)return o(q,Ke),Ot&&Ur(q,tt),je;if(Ke===null){for(;tt<K.length;tt++)Ke=ye(q,K[tt],we),Ke!==null&&(H=v(Ke,H,tt),$e===null?je=Ke:$e.sibling=Ke,$e=Ke);return Ot&&Ur(q,tt),je}for(Ke=c(q,Ke);tt<K.length;tt++)rn=De(Ke,q,tt,K[tt],we),rn!==null&&(n&&rn.alternate!==null&&Ke.delete(rn.key===null?tt:rn.key),H=v(rn,H,tt),$e===null?je=rn:$e.sibling=rn,$e=rn);return n&&Ke.forEach(function(vr){return i(q,vr)}),Ot&&Ur(q,tt),je}function He(q,H,K,we){var je=ue(K);if(typeof je!="function")throw Error(t(150));if(K=je.call(K),K==null)throw Error(t(151));for(var $e=je=null,Ke=H,tt=H=0,rn=null,Et=K.next();Ke!==null&&!Et.done;tt++,Et=K.next()){Ke.index>tt?(rn=Ke,Ke=null):rn=Ke.sibling;var vr=ge(q,Ke,Et.value,we);if(vr===null){Ke===null&&(Ke=rn);break}n&&Ke&&vr.alternate===null&&i(q,Ke),H=v(vr,H,tt),$e===null?je=vr:$e.sibling=vr,$e=vr,Ke=rn}if(Et.done)return o(q,Ke),Ot&&Ur(q,tt),je;if(Ke===null){for(;!Et.done;tt++,Et=K.next())Et=ye(q,Et.value,we),Et!==null&&(H=v(Et,H,tt),$e===null?je=Et:$e.sibling=Et,$e=Et);return Ot&&Ur(q,tt),je}for(Ke=c(q,Ke);!Et.done;tt++,Et=K.next())Et=De(Ke,q,tt,Et.value,we),Et!==null&&(n&&Et.alternate!==null&&Ke.delete(Et.key===null?tt:Et.key),H=v(Et,H,tt),$e===null?je=Et:$e.sibling=Et,$e=Et);return n&&Ke.forEach(function(j_){return i(q,j_)}),Ot&&Ur(q,tt),je}function Wt(q,H,K,we){if(typeof K=="object"&&K!==null&&K.type===k&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case Y:e:{for(var je=K.key,$e=H;$e!==null;){if($e.key===je){if(je=K.type,je===k){if($e.tag===7){o(q,$e.sibling),H=h($e,K.props.children),H.return=q,q=H;break e}}else if($e.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&bh(je)===$e.type){o(q,$e.sibling),H=h($e,K.props),H.ref=Ao(q,$e,K),H.return=q,q=H;break e}o(q,$e);break}else i(q,$e);$e=$e.sibling}K.type===k?(H=Gr(K.props.children,q.mode,we,K.key),H.return=q,q=H):(we=tl(K.type,K.key,K.props,null,q.mode,we),we.ref=Ao(q,H,K),we.return=q,q=we)}return E(q);case U:e:{for($e=K.key;H!==null;){if(H.key===$e)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){o(q,H.sibling),H=h(H,K.children||[]),H.return=q,q=H;break e}else{o(q,H);break}else i(q,H);H=H.sibling}H=bu(K,q.mode,we),H.return=q,q=H}return E(q);case ae:return $e=K._init,Wt(q,H,$e(K._payload),we)}if(Ye(K))return ze(q,H,K,we);if(ue(K))return He(q,H,K,we);La(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(o(q,H.sibling),H=h(H,K),H.return=q,q=H):(o(q,H),H=Au(K,q.mode,we),H.return=q,q=H),E(q)):o(q,H)}return Wt}var Ms=Ch(!0),Rh=Ch(!1),Da=ar(null),Na=null,Es=null,Fc=null;function kc(){Fc=Es=Na=null}function Oc(n){var i=Da.current;kt(Da),n._currentValue=i}function zc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function ws(n,i){Na=n,Fc=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function $n(n){var i=n._currentValue;if(Fc!==n)if(n={context:n,memoizedValue:i,next:null},Es===null){if(Na===null)throw Error(t(308));Es=n,Na.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return i}var Fr=null;function Bc(n){Fr===null?Fr=[n]:Fr.push(n)}function Ph(n,i,o,c){var h=i.interleaved;return h===null?(o.next=o,Bc(i)):(o.next=h.next,h.next=o),i.interleaved=o,Ui(n,c)}function Ui(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ur=!1;function Hc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function dr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(yt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Ui(n,o)}return h=c.interleaved,h===null?(i.next=i,Bc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Ui(n,o)}function Ia(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,tc(n,o)}}function Dh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var h=null,v=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};v===null?h=v=E:v=v.next=E,o=o.next}while(o!==null);v===null?h=v=i:v=v.next=i}else h=v=i;o={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ua(n,i,o,c){var h=n.updateQueue;ur=!1;var v=h.firstBaseUpdate,E=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var O=I,te=O.next;O.next=null,E===null?v=te:E.next=te,E=O;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==E&&(I===null?ve.firstBaseUpdate=te:I.next=te,ve.lastBaseUpdate=O))}if(v!==null){var ye=h.baseState;E=0,ve=te=O=null,I=v;do{var ge=I.lane,De=I.eventTime;if((c&ge)===ge){ve!==null&&(ve=ve.next={eventTime:De,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,He=I;switch(ge=i,De=o,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){ye=ze.call(De,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,ge=typeof ze=="function"?ze.call(De,ye,ge):ze,ge==null)break e;ye=le({},ye,ge);break e;case 2:ur=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=h.effects,ge===null?h.effects=[I]:ge.push(I))}else De={eventTime:De,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(te=ve=De,O=ye):ve=ve.next=De,E|=ge;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,h.lastBaseUpdate=ge,h.shared.pending=null}}while(!0);if(ve===null&&(O=ye),h.baseState=O,h.firstBaseUpdate=te,h.lastBaseUpdate=ve,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else v===null&&(h.shared.lanes=0);zr|=E,n.lanes=E,n.memoizedState=ye}}function Nh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=o,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var bo={},yi=ar(bo),Co=ar(bo),Ro=ar(bo);function kr(n){if(n===bo)throw Error(t(174));return n}function Vc(n,i){switch(It(Ro,i),It(Co,n),It(yi,bo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ve(i,n)}kt(yi),It(yi,i)}function Ts(){kt(yi),kt(Co),kt(Ro)}function Ih(n){kr(Ro.current);var i=kr(yi.current),o=Ve(i,n.type);i!==o&&(It(Co,n),It(yi,o))}function Gc(n){Co.current===n&&(kt(yi),kt(Co))}var zt=ar(0);function Fa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wc=[];function jc(){for(var n=0;n<Wc.length;n++)Wc[n]._workInProgressVersionPrimary=null;Wc.length=0}var ka=C.ReactCurrentDispatcher,Xc=C.ReactCurrentBatchConfig,Or=0,Bt=null,$t=null,tn=null,Oa=!1,Po=!1,Lo=0,h_=0;function fn(){throw Error(t(321))}function Yc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ii(n[o],i[o]))return!1;return!0}function qc(n,i,o,c,h,v){if(Or=v,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ka.current=n===null||n.memoizedState===null?__:v_,n=o(c,h),Po){v=0;do{if(Po=!1,Lo=0,25<=v)throw Error(t(301));v+=1,tn=$t=null,i.updateQueue=null,ka.current=x_,n=o(c,h)}while(Po)}if(ka.current=Ha,i=$t!==null&&$t.next!==null,Or=0,tn=$t=Bt=null,Oa=!1,i)throw Error(t(300));return n}function $c(){var n=Lo!==0;return Lo=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Bt.memoizedState=tn=n:tn=tn.next=n,tn}function Kn(){if($t===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=tn===null?Bt.memoizedState:tn.next;if(i!==null)tn=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},tn===null?Bt.memoizedState=tn=n:tn=tn.next=n}return tn}function Do(n,i){return typeof i=="function"?i(n):i}function Kc(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=$t,h=c.baseQueue,v=o.pending;if(v!==null){if(h!==null){var E=h.next;h.next=v.next,v.next=E}c.baseQueue=h=v,o.pending=null}if(h!==null){v=h.next,c=c.baseState;var I=E=null,O=null,te=v;do{var ve=te.lane;if((Or&ve)===ve)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:n(c,te.action);else{var ye={lane:ve,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(I=O=ye,E=c):O=O.next=ye,Bt.lanes|=ve,zr|=ve}te=te.next}while(te!==null&&te!==v);O===null?E=c:O.next=I,ii(c,i.memoizedState)||(Pn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=O,o.lastRenderedState=c}if(n=o.interleaved,n!==null){h=n;do v=h.lane,Bt.lanes|=v,zr|=v,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Zc(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,h=o.pending,v=i.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do v=n(v,E.action),E=E.next;while(E!==h);ii(v,i.memoizedState)||(Pn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),o.lastRenderedState=v}return[v,c]}function Uh(){}function Fh(n,i){var o=Bt,c=Kn(),h=i(),v=!ii(c.memoizedState,h);if(v&&(c.memoizedState=h,Pn=!0),c=c.queue,Qc(zh.bind(null,o,c,n),[n]),c.getSnapshot!==i||v||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,No(9,Oh.bind(null,o,c,h,i),void 0,null),nn===null)throw Error(t(349));(Or&30)!==0||kh(o,i,h)}return h}function kh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Oh(n,i,o,c){i.value=o,i.getSnapshot=c,Bh(i)&&Hh(n)}function zh(n,i,o){return o(function(){Bh(i)&&Hh(n)})}function Bh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ii(n,o)}catch{return!0}}function Hh(n){var i=Ui(n,1);i!==null&&li(i,n,1,-1)}function Vh(n){var i=Si();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:n},i.queue=n,n=n.dispatch=g_.bind(null,Bt,n),[i.memoizedState,n]}function No(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Gh(){return Kn().memoizedState}function za(n,i,o,c){var h=Si();Bt.flags|=n,h.memoizedState=No(1|i,o,void 0,c===void 0?null:c)}function Ba(n,i,o,c){var h=Kn();c=c===void 0?null:c;var v=void 0;if($t!==null){var E=$t.memoizedState;if(v=E.destroy,c!==null&&Yc(c,E.deps)){h.memoizedState=No(i,o,v,c);return}}Bt.flags|=n,h.memoizedState=No(1|i,o,v,c)}function Wh(n,i){return za(8390656,8,n,i)}function Qc(n,i){return Ba(2048,8,n,i)}function jh(n,i){return Ba(4,2,n,i)}function Xh(n,i){return Ba(4,4,n,i)}function Yh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function qh(n,i,o){return o=o!=null?o.concat([n]):null,Ba(4,4,Yh.bind(null,i,n),o)}function Jc(){}function $h(n,i){var o=Kn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Yc(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Kh(n,i){var o=Kn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Yc(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Zh(n,i,o){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=o):(ii(o,i)||(o=yn(),Bt.lanes|=o,zr|=o,n.baseState=!0),i)}function p_(n,i){var o=bt;bt=o!==0&&4>o?o:4,n(!0);var c=Xc.transition;Xc.transition={};try{n(!1),i()}finally{bt=o,Xc.transition=c}}function Qh(){return Kn().memoizedState}function m_(n,i,o){var c=mr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Jh(n))ep(i,o);else if(o=Ph(n,i,o,c),o!==null){var h=Mn();li(o,n,c,h),tp(o,i,c)}}function g_(n,i,o){var c=mr(n),h={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Jh(n))ep(i,h);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var E=i.lastRenderedState,I=v(E,o);if(h.hasEagerState=!0,h.eagerState=I,ii(I,E)){var O=i.interleaved;O===null?(h.next=h,Bc(i)):(h.next=O.next,O.next=h),i.interleaved=h;return}}catch{}finally{}o=Ph(n,i,h,c),o!==null&&(h=Mn(),li(o,n,c,h),tp(o,i,c))}}function Jh(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function ep(n,i){Po=Oa=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function tp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,tc(n,o)}}var Ha={readContext:$n,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},__={readContext:$n,useCallback:function(n,i){return Si().memoizedState=[n,i===void 0?null:i],n},useContext:$n,useEffect:Wh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,za(4194308,4,Yh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return za(4194308,4,n,i)},useInsertionEffect:function(n,i){return za(4,2,n,i)},useMemo:function(n,i){var o=Si();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Si();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=m_.bind(null,Bt,n),[c.memoizedState,n]},useRef:function(n){var i=Si();return n={current:n},i.memoizedState=n},useState:Vh,useDebugValue:Jc,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=Vh(!1),i=n[0];return n=p_.bind(null,n[1]),Si().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Bt,h=Si();if(Ot){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),nn===null)throw Error(t(349));(Or&30)!==0||kh(c,i,o)}h.memoizedState=o;var v={value:o,getSnapshot:i};return h.queue=v,Wh(zh.bind(null,c,v,n),[n]),c.flags|=2048,No(9,Oh.bind(null,c,v,o,i),void 0,null),o},useId:function(){var n=Si(),i=nn.identifierPrefix;if(Ot){var o=Ii,c=Ni;o=(c&~(1<<32-st(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Lo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=h_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},v_={readContext:$n,useCallback:$h,useContext:$n,useEffect:Qc,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Xh,useMemo:Kh,useReducer:Kc,useRef:Gh,useState:function(){return Kc(Do)},useDebugValue:Jc,useDeferredValue:function(n){var i=Kn();return Zh(i,$t.memoizedState,n)},useTransition:function(){var n=Kc(Do)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Uh,useSyncExternalStore:Fh,useId:Qh,unstable_isNewReconciler:!1},x_={readContext:$n,useCallback:$h,useContext:$n,useEffect:Qc,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Xh,useMemo:Kh,useReducer:Zc,useRef:Gh,useState:function(){return Zc(Do)},useDebugValue:Jc,useDeferredValue:function(n){var i=Kn();return $t===null?i.memoizedState=n:Zh(i,$t.memoizedState,n)},useTransition:function(){var n=Zc(Do)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Uh,useSyncExternalStore:Fh,useId:Qh,unstable_isNewReconciler:!1};function si(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function eu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:le({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Va={isMounted:function(n){return(n=n._reactInternals)?_i(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Mn(),h=mr(n),v=Fi(c,h);v.payload=i,o!=null&&(v.callback=o),i=dr(n,v,h),i!==null&&(li(i,n,h,c),Ia(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Mn(),h=mr(n),v=Fi(c,h);v.tag=1,v.payload=i,o!=null&&(v.callback=o),i=dr(n,v,h),i!==null&&(li(i,n,h,c),Ia(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),c=mr(n),h=Fi(o,c);h.tag=2,i!=null&&(h.callback=i),i=dr(n,h,c),i!==null&&(li(i,n,c,o),Ia(i,n,c))}};function np(n,i,o,c,h,v,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,E):i.prototype&&i.prototype.isPureReactComponent?!xo(o,c)||!xo(h,v):!0}function ip(n,i,o){var c=!1,h=lr,v=i.contextType;return typeof v=="object"&&v!==null?v=$n(v):(h=Rn(i)?Nr:dn.current,c=i.contextTypes,v=(c=c!=null)?vs(n,h):lr),i=new i(o,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Va,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=v),i}function rp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Va.enqueueReplaceState(i,i.state,null)}function tu(n,i,o,c){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},Hc(n);var v=i.contextType;typeof v=="object"&&v!==null?h.context=$n(v):(v=Rn(i)?Nr:dn.current,h.context=vs(n,v)),h.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(eu(n,i,v,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Va.enqueueReplaceState(h,h.state,null),Ua(n,o,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function As(n,i){try{var o="",c=i;do o+=fe(c),c=c.return;while(c);var h=o}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:h,digest:null}}function nu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function iu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var y_=typeof WeakMap=="function"?WeakMap:Map;function sp(n,i,o){o=Fi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){$a||($a=!0,vu=c),iu(n,i)},o}function op(n,i,o){o=Fi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;o.payload=function(){return c(h)},o.callback=function(){iu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(o.callback=function(){iu(n,i),typeof c!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function ap(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new y_;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(o)||(h.add(o),n=I_.bind(null,n,i,o),i.then(n,n))}function lp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function cp(n,i,o,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Fi(-1,1),i.tag=2,dr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var S_=C.ReactCurrentOwner,Pn=!1;function Sn(n,i,o,c){i.child=n===null?Rh(i,null,o,c):Ms(i,n.child,o,c)}function up(n,i,o,c,h){o=o.render;var v=i.ref;return ws(i,h),c=qc(n,i,o,c,v,h),o=$c(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ki(n,i,h)):(Ot&&o&&Lc(i),i.flags|=1,Sn(n,i,c,h),i.child)}function dp(n,i,o,c,h){if(n===null){var v=o.type;return typeof v=="function"&&!Tu(v)&&v.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=v,fp(n,i,v,c,h)):(n=tl(o.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&h)===0){var E=v.memoizedProps;if(o=o.compare,o=o!==null?o:xo,o(E,c)&&n.ref===i.ref)return ki(n,i,h)}return i.flags|=1,n=_r(v,c),n.ref=i.ref,n.return=i,i.child=n}function fp(n,i,o,c,h){if(n!==null){var v=n.memoizedProps;if(xo(v,c)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=c=v,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,ki(n,i,h)}return ru(n,i,o,c,h)}function hp(n,i,o){var c=i.pendingProps,h=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Cs,Hn),Hn|=o;else{if((o&1073741824)===0)return n=v!==null?v.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Cs,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:o,It(Cs,Hn),Hn|=c}else v!==null?(c=v.baseLanes|o,i.memoizedState=null):c=o,It(Cs,Hn),Hn|=c;return Sn(n,i,h,o),i.child}function pp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ru(n,i,o,c,h){var v=Rn(o)?Nr:dn.current;return v=vs(i,v),ws(i,h),o=qc(n,i,o,c,v,h),c=$c(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ki(n,i,h)):(Ot&&c&&Lc(i),i.flags|=1,Sn(n,i,o,h),i.child)}function mp(n,i,o,c,h){if(Rn(o)){var v=!0;Aa(i)}else v=!1;if(ws(i,h),i.stateNode===null)Wa(n,i),ip(i,o,c),tu(i,o,c,h),c=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var O=E.context,te=o.contextType;typeof te=="object"&&te!==null?te=$n(te):(te=Rn(o)?Nr:dn.current,te=vs(i,te));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==c||O!==te)&&rp(i,E,c,te),ur=!1;var ge=i.memoizedState;E.state=ge,Ua(i,c,E,h),O=i.memoizedState,I!==c||ge!==O||Cn.current||ur?(typeof ve=="function"&&(eu(i,o,ve,c),O=i.memoizedState),(I=ur||np(i,o,I,c,ge,O,te))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=O),E.props=c,E.state=O,E.context=te,c=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Lh(n,i),I=i.memoizedProps,te=i.type===i.elementType?I:si(i.type,I),E.props=te,ye=i.pendingProps,ge=E.context,O=o.contextType,typeof O=="object"&&O!==null?O=$n(O):(O=Rn(o)?Nr:dn.current,O=vs(i,O));var De=o.getDerivedStateFromProps;(ve=typeof De=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==ye||ge!==O)&&rp(i,E,c,O),ur=!1,ge=i.memoizedState,E.state=ge,Ua(i,c,E,h);var ze=i.memoizedState;I!==ye||ge!==ze||Cn.current||ur?(typeof De=="function"&&(eu(i,o,De,c),ze=i.memoizedState),(te=ur||np(i,o,te,c,ge,ze,O)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,ze,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,ze,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ze),E.props=c,E.state=ze,E.context=O,c=te):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return su(n,i,o,c,v,h)}function su(n,i,o,c,h,v){pp(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&yh(i,o,!1),ki(n,i,v);c=i.stateNode,S_.current=i;var I=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=Ms(i,n.child,null,v),i.child=Ms(i,null,I,v)):Sn(n,i,I,v),i.memoizedState=c.state,h&&yh(i,o,!0),i.child}function gp(n){var i=n.stateNode;i.pendingContext?vh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(n,i.context,!1),Vc(n,i.containerInfo)}function _p(n,i,o,c,h){return Ss(),Uc(h),i.flags|=256,Sn(n,i,o,c),i.child}var ou={dehydrated:null,treeContext:null,retryLane:0};function au(n){return{baseLanes:n,cachePool:null,transitions:null}}function vp(n,i,o){var c=i.pendingProps,h=zt.current,v=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(h&2)!==0),I?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),It(zt,h&1),n===null)return Ic(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,v?(c=i.mode,v=i.child,E={mode:"hidden",children:E},(c&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=E):v=nl(E,c,0,null),n=Gr(n,c,o,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=au(o),i.memoizedState=ou,n):lu(i,E));if(h=n.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return M_(n,i,E,c,I,h,o);if(v){v=c.fallback,E=i.mode,h=n.child,I=h.sibling;var O={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=O,i.deletions=null):(c=_r(h,O),c.subtreeFlags=h.subtreeFlags&14680064),I!==null?v=_r(I,v):(v=Gr(v,E,o,null),v.flags|=2),v.return=i,c.return=i,c.sibling=v,i.child=c,c=v,v=i.child,E=n.child.memoizedState,E=E===null?au(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},v.memoizedState=E,v.childLanes=n.childLanes&~o,i.memoizedState=ou,c}return v=n.child,n=v.sibling,c=_r(v,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function lu(n,i){return i=nl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ga(n,i,o,c){return c!==null&&Uc(c),Ms(i,n.child,null,o),n=lu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function M_(n,i,o,c,h,v,E){if(o)return i.flags&256?(i.flags&=-257,c=nu(Error(t(422))),Ga(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=c.fallback,h=i.mode,c=nl({mode:"visible",children:c.children},h,0,null),v=Gr(v,h,E,null),v.flags|=2,c.return=i,v.return=i,c.sibling=v,i.child=c,(i.mode&1)!==0&&Ms(i,n.child,null,E),i.child.memoizedState=au(E),i.memoizedState=ou,v);if((i.mode&1)===0)return Ga(n,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var I=c.dgst;return c=I,v=Error(t(419)),c=nu(v,c,void 0),Ga(n,i,E,c)}if(I=(E&n.childLanes)!==0,Pn||I){if(c=nn,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,Ui(n,h),li(c,n,h,-1))}return wu(),c=nu(Error(t(421))),Ga(n,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=U_.bind(null,n),h._reactRetry=i,null):(n=v.treeContext,Bn=or(h.nextSibling),zn=i,Ot=!0,ri=null,n!==null&&(Yn[qn++]=Ni,Yn[qn++]=Ii,Yn[qn++]=Ir,Ni=n.id,Ii=n.overflow,Ir=i),i=lu(i,c.children),i.flags|=4096,i)}function xp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),zc(n.return,i,o)}function cu(n,i,o,c,h){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:h}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=o,v.tailMode=h)}function yp(n,i,o){var c=i.pendingProps,h=c.revealOrder,v=c.tail;if(Sn(n,i,c.children,o),c=zt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xp(n,o,i);else if(n.tag===19)xp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(It(zt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&Fa(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),cu(i,!1,h,o,v);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Fa(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}cu(i,!0,o,null,v);break;case"together":cu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ki(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),zr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=_r(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=_r(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function E_(n,i,o){switch(i.tag){case 3:gp(i),Ss();break;case 5:Ih(i);break;case 1:Rn(i.type)&&Aa(i);break;case 4:Vc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;It(Da,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(It(zt,zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?vp(n,i,o):(It(zt,zt.current&1),n=ki(n,i,o),n!==null?n.sibling:null);It(zt,zt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return yp(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),It(zt,zt.current),c)break;return null;case 22:case 23:return i.lanes=0,hp(n,i,o)}return ki(n,i,o)}var Sp,uu,Mp,Ep;Sp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},uu=function(){},Mp=function(n,i,o,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,kr(yi.current);var v=null;switch(o){case"input":h=j(n,h),c=j(n,c),v=[];break;case"select":h=le({},h,{value:void 0}),c=le({},c,{value:void 0}),v=[];break;case"textarea":h=T(n,h),c=T(n,c),v=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ea)}ft(o,c);var E;o=null;for(te in h)if(!c.hasOwnProperty(te)&&h.hasOwnProperty(te)&&h[te]!=null)if(te==="style"){var I=h[te];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?v||(v=[]):(v=v||[]).push(te,null));for(te in c){var O=c[te];if(I=h!=null?h[te]:void 0,c.hasOwnProperty(te)&&O!==I&&(O!=null||I!=null))if(te==="style")if(I){for(E in I)!I.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in O)O.hasOwnProperty(E)&&I[E]!==O[E]&&(o||(o={}),o[E]=O[E])}else o||(v||(v=[]),v.push(te,o)),o=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(v=v||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(v=v||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Ft("scroll",n),v||I===O||(v=[])):(v=v||[]).push(te,O))}o&&(v=v||[]).push("style",o);var te=v;(i.updateQueue=te)&&(i.flags|=4)}},Ep=function(n,i,o,c){o!==c&&(i.flags|=4)};function Io(n,i){if(!Ot)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function hn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function w_(n,i,o){var c=i.pendingProps;switch(Dc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return Rn(i.type)&&Ta(),hn(i),null;case 3:return c=i.stateNode,Ts(),kt(Cn),kt(dn),jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Pa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(Su(ri),ri=null))),uu(n,i),hn(i),null;case 5:Gc(i);var h=kr(Ro.current);if(o=i.type,n!==null&&i.stateNode!=null)Mp(n,i,o,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return hn(i),null}if(n=kr(yi.current),Pa(i)){c=i.stateNode,o=i.type;var v=i.memoizedProps;switch(c[xi]=i,c[wo]=v,n=(i.mode&1)!==0,o){case"dialog":Ft("cancel",c),Ft("close",c);break;case"iframe":case"object":case"embed":Ft("load",c);break;case"video":case"audio":for(h=0;h<So.length;h++)Ft(So[h],c);break;case"source":Ft("error",c);break;case"img":case"image":case"link":Ft("error",c),Ft("load",c);break;case"details":Ft("toggle",c);break;case"input":vn(c,v),Ft("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},Ft("invalid",c);break;case"textarea":Q(c,v),Ft("invalid",c)}ft(o,v),h=null;for(var E in v)if(v.hasOwnProperty(E)){var I=v[E];E==="children"?typeof I=="string"?c.textContent!==I&&(v.suppressHydrationWarning!==!0&&Ma(c.textContent,I,n),h=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&Ma(c.textContent,I,n),h=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Ft("scroll",c)}switch(o){case"input":Ct(c),qe(c,v,!0);break;case"textarea":Ct(c),_e(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=Ea)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(o,{is:c.is}):(n=E.createElement(o),o==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,o),n[xi]=i,n[wo]=c,Sp(n,i,!1,!1),i.stateNode=n;e:{switch(E=it(o,c),o){case"dialog":Ft("cancel",n),Ft("close",n),h=c;break;case"iframe":case"object":case"embed":Ft("load",n),h=c;break;case"video":case"audio":for(h=0;h<So.length;h++)Ft(So[h],n);h=c;break;case"source":Ft("error",n),h=c;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),h=c;break;case"details":Ft("toggle",n),h=c;break;case"input":vn(n,c),h=j(n,c),Ft("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=le({},c,{value:void 0}),Ft("invalid",n);break;case"textarea":Q(n,c),h=T(n,c),Ft("invalid",n);break;default:h=c}ft(o,h),I=h;for(v in I)if(I.hasOwnProperty(v)){var O=I[v];v==="style"?Je(n,O):v==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ue(n,O)):v==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&ut(n,O):typeof O=="number"&&ut(n,""+O):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(a.hasOwnProperty(v)?O!=null&&v==="onScroll"&&Ft("scroll",n):O!=null&&P(n,v,O,E))}switch(o){case"input":Ct(n),qe(n,c,!1);break;case"textarea":Ct(n),_e(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ae(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?N(n,!!c.multiple,v,!1):c.defaultValue!=null&&N(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Ea)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(n&&i.stateNode!=null)Ep(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=kr(Ro.current),kr(yi.current),Pa(i)){if(c=i.stateNode,o=i.memoizedProps,c[xi]=i,(v=c.nodeValue!==o)&&(n=zn,n!==null))switch(n.tag){case 3:Ma(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ma(c.nodeValue,o,(n.mode&1)!==0)}v&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[xi]=i,i.stateNode=c}return hn(i),null;case 13:if(kt(zt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ah(),Ss(),i.flags|=98560,v=!1;else if(v=Pa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[xi]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),v=!1}else ri!==null&&(Su(ri),ri=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(zt.current&1)!==0?Kt===0&&(Kt=3):wu())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return Ts(),uu(n,i),n===null&&Mo(i.stateNode.containerInfo),hn(i),null;case 10:return Oc(i.type._context),hn(i),null;case 17:return Rn(i.type)&&Ta(),hn(i),null;case 19:if(kt(zt),v=i.memoizedState,v===null)return hn(i),null;if(c=(i.flags&128)!==0,E=v.rendering,E===null)if(c)Io(v,!1);else{if(Kt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Fa(n),E!==null){for(i.flags|=128,Io(v,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)v=o,n=c,v.flags&=14680066,E=v.alternate,E===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=E.childLanes,v.lanes=E.lanes,v.child=E.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=E.memoizedProps,v.memoizedState=E.memoizedState,v.updateQueue=E.updateQueue,v.type=E.type,n=E.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return It(zt,zt.current&1|2),i.child}n=n.sibling}v.tail!==null&&Me()>Rs&&(i.flags|=128,c=!0,Io(v,!1),i.lanes=4194304)}else{if(!c)if(n=Fa(E),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Io(v,!0),v.tail===null&&v.tailMode==="hidden"&&!E.alternate&&!Ot)return hn(i),null}else 2*Me()-v.renderingStartTime>Rs&&o!==1073741824&&(i.flags|=128,c=!0,Io(v,!1),i.lanes=4194304);v.isBackwards?(E.sibling=i.child,i.child=E):(o=v.last,o!==null?o.sibling=E:i.child=E,v.last=E)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=Me(),i.sibling=null,o=zt.current,It(zt,c?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return Eu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function T_(n,i){switch(Dc(i),i.tag){case 1:return Rn(i.type)&&Ta(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ts(),kt(Cn),kt(dn),jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Gc(i),null;case 13:if(kt(zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(zt),null;case 4:return Ts(),null;case 10:return Oc(i.type._context),null;case 22:case 23:return Eu(),null;case 24:return null;default:return null}}var ja=!1,pn=!1,A_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function bs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Vt(n,i,c)}else o.current=null}function du(n,i,o){try{o()}catch(c){Vt(n,i,c)}}var wp=!1;function b_(n,i){if(Ec=da,n=nh(),mc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var h=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{o.nodeType,v.nodeType}catch{o=null;break e}var E=0,I=-1,O=-1,te=0,ve=0,ye=n,ge=null;t:for(;;){for(var De;ye!==o||h!==0&&ye.nodeType!==3||(I=E+h),ye!==v||c!==0&&ye.nodeType!==3||(O=E+c),ye.nodeType===3&&(E+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===n)break t;if(ge===o&&++te===h&&(I=E),ge===v&&++ve===c&&(O=E),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}o=I===-1||O===-1?null:{start:I,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(wc={focusedElem:n,selectionRange:o},da=!1,Fe=i;Fe!==null;)if(i=Fe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fe=n;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Wt=ze.memoizedState,q=i.stateNode,H=q.getSnapshotBeforeUpdate(i.elementType===i.type?He:si(i.type,He),Wt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Vt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Fe=n;break}Fe=i.return}return ze=wp,wp=!1,ze}function Uo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var v=h.destroy;h.destroy=void 0,v!==void 0&&du(i,o,v)}h=h.next}while(h!==c)}}function Xa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function fu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Tp(n){var i=n.alternate;i!==null&&(n.alternate=null,Tp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[xi],delete i[wo],delete i[Cc],delete i[c_],delete i[u_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ap(n){return n.tag===5||n.tag===3||n.tag===4}function bp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ap(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ea));else if(c!==4&&(n=n.child,n!==null))for(hu(n,i,o),n=n.sibling;n!==null;)hu(n,i,o),n=n.sibling}function pu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(pu(n,i,o),n=n.sibling;n!==null;)pu(n,i,o),n=n.sibling}var on=null,oi=!1;function fr(n,i,o){for(o=o.child;o!==null;)Cp(n,i,o),o=o.sibling}function Cp(n,i,o){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(wt,o)}catch{}switch(o.tag){case 5:pn||bs(o,i);case 6:var c=on,h=oi;on=null,fr(n,i,o),on=c,oi=h,on!==null&&(oi?(n=on,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):on.removeChild(o.stateNode));break;case 18:on!==null&&(oi?(n=on,o=o.stateNode,n.nodeType===8?bc(n.parentNode,o):n.nodeType===1&&bc(n,o),ho(n)):bc(on,o.stateNode));break;case 4:c=on,h=oi,on=o.stateNode.containerInfo,oi=!0,fr(n,i,o),on=c,oi=h;break;case 0:case 11:case 14:case 15:if(!pn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var v=h,E=v.destroy;v=v.tag,E!==void 0&&((v&2)!==0||(v&4)!==0)&&du(o,i,E),h=h.next}while(h!==c)}fr(n,i,o);break;case 1:if(!pn&&(bs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){Vt(o,i,I)}fr(n,i,o);break;case 21:fr(n,i,o);break;case 22:o.mode&1?(pn=(c=pn)||o.memoizedState!==null,fr(n,i,o),pn=c):fr(n,i,o);break;default:fr(n,i,o)}}function Rp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new A_),i.forEach(function(c){var h=F_.bind(null,n,c);o.has(c)||(o.add(c),c.then(h,h))})}}function ai(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var h=o[c];try{var v=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:on=I.stateNode,oi=!1;break e;case 3:on=I.stateNode.containerInfo,oi=!0;break e;case 4:on=I.stateNode.containerInfo,oi=!0;break e}I=I.return}if(on===null)throw Error(t(160));Cp(v,E,h),on=null,oi=!1;var O=h.alternate;O!==null&&(O.return=null),h.return=null}catch(te){Vt(h,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Pp(i,n),i=i.sibling}function Pp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(i,n),Mi(n),c&4){try{Uo(3,n,n.return),Xa(3,n)}catch(He){Vt(n,n.return,He)}try{Uo(5,n,n.return)}catch(He){Vt(n,n.return,He)}}break;case 1:ai(i,n),Mi(n),c&512&&o!==null&&bs(o,o.return);break;case 5:if(ai(i,n),Mi(n),c&512&&o!==null&&bs(o,o.return),n.flags&32){var h=n.stateNode;try{ut(h,"")}catch(He){Vt(n,n.return,He)}}if(c&4&&(h=n.stateNode,h!=null)){var v=n.memoizedProps,E=o!==null?o.memoizedProps:v,I=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&pt(h,v),it(I,E);var te=it(I,v);for(E=0;E<O.length;E+=2){var ve=O[E],ye=O[E+1];ve==="style"?Je(h,ye):ve==="dangerouslySetInnerHTML"?Ue(h,ye):ve==="children"?ut(h,ye):P(h,ve,ye,te)}switch(I){case"input":dt(h,v);break;case"textarea":me(h,v);break;case"select":var ge=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var De=v.value;De!=null?N(h,!!v.multiple,De,!1):ge!==!!v.multiple&&(v.defaultValue!=null?N(h,!!v.multiple,v.defaultValue,!0):N(h,!!v.multiple,v.multiple?[]:"",!1))}h[wo]=v}catch(He){Vt(n,n.return,He)}}break;case 6:if(ai(i,n),Mi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,v=n.memoizedProps;try{h.nodeValue=v}catch(He){Vt(n,n.return,He)}}break;case 3:if(ai(i,n),Mi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ho(i.containerInfo)}catch(He){Vt(n,n.return,He)}break;case 4:ai(i,n),Mi(n);break;case 13:ai(i,n),Mi(n),h=n.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(_u=Me())),c&4&&Rp(n);break;case 22:if(ve=o!==null&&o.memoizedState!==null,n.mode&1?(pn=(te=pn)||ve,ai(i,n),pn=te):ai(i,n),Mi(n),c&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ve&&(n.mode&1)!==0)for(Fe=n,ve=n.child;ve!==null;){for(ye=Fe=ve;Fe!==null;){switch(ge=Fe,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:Uo(4,ge,ge.return);break;case 1:bs(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){c=ge,o=ge.return;try{i=c,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Vt(c,o,He)}}break;case 5:bs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Np(ye);continue}}De!==null?(De.return=ge,Fe=De):Np(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{h=ye.stateNode,te?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=ye.stateNode,O=ye.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=Qe("display",E))}catch(He){Vt(n,n.return,He)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(He){Vt(n,n.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ai(i,n),Mi(n),c&4&&Rp(n);break;case 21:break;default:ai(i,n),Mi(n)}}function Mi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Ap(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(ut(h,""),c.flags&=-33);var v=bp(n);pu(n,v,h);break;case 3:case 4:var E=c.stateNode.containerInfo,I=bp(n);hu(n,I,E);break;default:throw Error(t(161))}}catch(O){Vt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function C_(n,i,o){Fe=n,Lp(n)}function Lp(n,i,o){for(var c=(n.mode&1)!==0;Fe!==null;){var h=Fe,v=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||ja;if(!E){var I=h.alternate,O=I!==null&&I.memoizedState!==null||pn;I=ja;var te=pn;if(ja=E,(pn=O)&&!te)for(Fe=h;Fe!==null;)E=Fe,O=E.child,E.tag===22&&E.memoizedState!==null?Ip(h):O!==null?(O.return=E,Fe=O):Ip(h);for(;v!==null;)Fe=v,Lp(v),v=v.sibling;Fe=h,ja=I,pn=te}Dp(n)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,Fe=v):Dp(n)}}function Dp(n){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||Xa(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!pn)if(o===null)c.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:si(i.type,o.memoizedProps);c.componentDidUpdate(h,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&Nh(i,v,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Nh(i,E,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ve=te.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&ho(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||i.flags&512&&fu(i)}catch(ge){Vt(i,i.return,ge)}}if(i===n){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Np(n){for(;Fe!==null;){var i=Fe;if(i===n){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Ip(n){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Xa(4,i)}catch(O){Vt(i,o,O)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(O){Vt(i,h,O)}}var v=i.return;try{fu(i)}catch(O){Vt(i,v,O)}break;case 5:var E=i.return;try{fu(i)}catch(O){Vt(i,E,O)}}}catch(O){Vt(i,i.return,O)}if(i===n){Fe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Fe=I;break}Fe=i.return}}var R_=Math.ceil,Ya=C.ReactCurrentDispatcher,mu=C.ReactCurrentOwner,Zn=C.ReactCurrentBatchConfig,yt=0,nn=null,jt=null,an=0,Hn=0,Cs=ar(0),Kt=0,Fo=null,zr=0,qa=0,gu=0,ko=null,Ln=null,_u=0,Rs=1/0,Oi=null,$a=!1,vu=null,hr=null,Ka=!1,pr=null,Za=0,Oo=0,xu=null,Qa=-1,Ja=0;function Mn(){return(yt&6)!==0?Me():Qa!==-1?Qa:Qa=Me()}function mr(n){return(n.mode&1)===0?1:(yt&2)!==0&&an!==0?an&-an:f_.transition!==null?(Ja===0&&(Ja=yn()),Ja):(n=bt,n!==0||(n=window.event,n=n===void 0?16:Ff(n.type)),n)}function li(n,i,o,c){if(50<Oo)throw Oo=0,xu=null,Error(t(185));bn(n,o,c),((yt&2)===0||n!==nn)&&(n===nn&&((yt&2)===0&&(qa|=o),Kt===4&&gr(n,an)),Dn(n,c),o===1&&yt===0&&(i.mode&1)===0&&(Rs=Me()+500,ba&&cr()))}function Dn(n,i){var o=n.callbackNode;jn(n,i);var c=vi(n,n===nn?an:0);if(c===0)o!==null&&ie(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&ie(o),i===1)n.tag===0?d_(Fp.bind(null,n)):Sh(Fp.bind(null,n)),a_(function(){(yt&6)===0&&cr()}),o=null;else{switch(Cf(c)){case 1:o=Be;break;case 4:o=et;break;case 16:o=nt;break;case 536870912:o=_t;break;default:o=nt}o=Wp(o,Up.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Up(n,i){if(Qa=-1,Ja=0,(yt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ps()&&n.callbackNode!==o)return null;var c=vi(n,n===nn?an:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=el(n,c);else{i=c;var h=yt;yt|=2;var v=Op();(nn!==n||an!==i)&&(Oi=null,Rs=Me()+500,Hr(n,i));do try{D_();break}catch(I){kp(n,I)}while(!0);kc(),Ya.current=v,yt=h,jt!==null?i=0:(nn=null,an=0,i=Kt)}if(i!==0){if(i===2&&(h=Pi(n),h!==0&&(c=h,i=yu(n,h))),i===1)throw o=Fo,Hr(n,0),gr(n,c),Dn(n,Me()),o;if(i===6)gr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!P_(h)&&(i=el(n,c),i===2&&(v=Pi(n),v!==0&&(c=v,i=yu(n,v))),i===1))throw o=Fo,Hr(n,0),gr(n,c),Dn(n,Me()),o;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Vr(n,Ln,Oi);break;case 3:if(gr(n,c),(c&130023424)===c&&(i=_u+500-Me(),10<i)){if(vi(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Mn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Ac(Vr.bind(null,n,Ln,Oi),i);break}Vr(n,Ln,Oi);break;case 4:if(gr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var E=31-st(c);v=1<<E,E=i[E],E>h&&(h=E),c&=~v}if(c=h,c=Me()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*R_(c/1960))-c,10<c){n.timeoutHandle=Ac(Vr.bind(null,n,Ln,Oi),c);break}Vr(n,Ln,Oi);break;case 5:Vr(n,Ln,Oi);break;default:throw Error(t(329))}}}return Dn(n,Me()),n.callbackNode===o?Up.bind(null,n):null}function yu(n,i){var o=ko;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=el(n,i),n!==2&&(i=Ln,Ln=o,i!==null&&Su(i)),n}function Su(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function P_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var h=o[c],v=h.getSnapshot;h=h.value;try{if(!ii(v(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gr(n,i){for(i&=~gu,i&=~qa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-st(i),c=1<<o;n[o]=-1,i&=~c}}function Fp(n){if((yt&6)!==0)throw Error(t(327));Ps();var i=vi(n,0);if((i&1)===0)return Dn(n,Me()),null;var o=el(n,i);if(n.tag!==0&&o===2){var c=Pi(n);c!==0&&(i=c,o=yu(n,c))}if(o===1)throw o=Fo,Hr(n,0),gr(n,i),Dn(n,Me()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Vr(n,Ln,Oi),Dn(n,Me()),null}function Mu(n,i){var o=yt;yt|=1;try{return n(i)}finally{yt=o,yt===0&&(Rs=Me()+500,ba&&cr())}}function Br(n){pr!==null&&pr.tag===0&&(yt&6)===0&&Ps();var i=yt;yt|=1;var o=Zn.transition,c=bt;try{if(Zn.transition=null,bt=1,n)return n()}finally{bt=c,Zn.transition=o,yt=i,(yt&6)===0&&cr()}}function Eu(){Hn=Cs.current,kt(Cs)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,o_(o)),jt!==null)for(o=jt.return;o!==null;){var c=o;switch(Dc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ta();break;case 3:Ts(),kt(Cn),kt(dn),jc();break;case 5:Gc(c);break;case 4:Ts();break;case 13:kt(zt);break;case 19:kt(zt);break;case 10:Oc(c.type._context);break;case 22:case 23:Eu()}o=o.return}if(nn=n,jt=n=_r(n.current,null),an=Hn=i,Kt=0,Fo=null,gu=qa=zr=0,Ln=ko=null,Fr!==null){for(i=0;i<Fr.length;i++)if(o=Fr[i],c=o.interleaved,c!==null){o.interleaved=null;var h=c.next,v=o.pending;if(v!==null){var E=v.next;v.next=h,c.next=E}o.pending=c}Fr=null}return n}function kp(n,i){do{var o=jt;try{if(kc(),ka.current=Ha,Oa){for(var c=Bt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Oa=!1}if(Or=0,tn=$t=Bt=null,Po=!1,Lo=0,mu.current=null,o===null||o.return===null){Kt=1,Fo=i,jt=null;break}e:{var v=n,E=o.return,I=o,O=i;if(i=an,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,ve=I,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var De=lp(E);if(De!==null){De.flags&=-257,cp(De,E,I,v,i),De.mode&1&&ap(v,te,i),i=De,O=te;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(O),i.updateQueue=He}else ze.add(O);break e}else{if((i&1)===0){ap(v,te,i),wu();break e}O=Error(t(426))}}else if(Ot&&I.mode&1){var Wt=lp(E);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),cp(Wt,E,I,v,i),Uc(As(O,I));break e}}v=O=As(O,I),Kt!==4&&(Kt=2),ko===null?ko=[v]:ko.push(v),v=E;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var q=sp(v,O,i);Dh(v,q);break e;case 1:I=O;var H=v.type,K=v.stateNode;if((v.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(hr===null||!hr.has(K)))){v.flags|=65536,i&=-i,v.lanes|=i;var we=op(v,I,i);Dh(v,we);break e}}v=v.return}while(v!==null)}Bp(o)}catch(je){i=je,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function Op(){var n=Ya.current;return Ya.current=Ha,n===null?Ha:n}function wu(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||(zr&268435455)===0&&(qa&268435455)===0||gr(nn,an)}function el(n,i){var o=yt;yt|=2;var c=Op();(nn!==n||an!==i)&&(Oi=null,Hr(n,i));do try{L_();break}catch(h){kp(n,h)}while(!0);if(kc(),yt=o,Ya.current=c,jt!==null)throw Error(t(261));return nn=null,an=0,Kt}function L_(){for(;jt!==null;)zp(jt)}function D_(){for(;jt!==null&&!W();)zp(jt)}function zp(n){var i=Gp(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?Bp(n):jt=i,mu.current=null}function Bp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=w_(o,i,Hn),o!==null){jt=o;return}}else{if(o=T_(o,i),o!==null){o.flags&=32767,jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);Kt===0&&(Kt=5)}function Vr(n,i,o){var c=bt,h=Zn.transition;try{Zn.transition=null,bt=1,N_(n,i,o,c)}finally{Zn.transition=h,bt=c}return null}function N_(n,i,o,c){do Ps();while(pr!==null);if((yt&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=o.lanes|o.childLanes;if(la(n,v),n===nn&&(jt=nn=null,an=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ka||(Ka=!0,Wp(nt,function(){return Ps(),null})),v=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||v){v=Zn.transition,Zn.transition=null;var E=bt;bt=1;var I=yt;yt|=4,mu.current=null,b_(n,o),Pp(o,n),J0(wc),da=!!Ec,wc=Ec=null,n.current=o,C_(o),Te(),yt=I,bt=E,Zn.transition=v}else n.current=o;if(Ka&&(Ka=!1,pr=n,Za=h),v=n.pendingLanes,v===0&&(hr=null),cn(o.stateNode),Dn(n,Me()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],c(h.value,{componentStack:h.stack,digest:h.digest});if($a)throw $a=!1,n=vu,vu=null,n;return(Za&1)!==0&&n.tag!==0&&Ps(),v=n.pendingLanes,(v&1)!==0?n===xu?Oo++:(Oo=0,xu=n):Oo=0,cr(),null}function Ps(){if(pr!==null){var n=Cf(Za),i=Zn.transition,o=bt;try{if(Zn.transition=null,bt=16>n?16:n,pr===null)var c=!1;else{if(n=pr,pr=null,Za=0,(yt&6)!==0)throw Error(t(331));var h=yt;for(yt|=4,Fe=n.current;Fe!==null;){var v=Fe,E=v.child;if((Fe.flags&16)!==0){var I=v.deletions;if(I!==null){for(var O=0;O<I.length;O++){var te=I[O];for(Fe=te;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:Uo(8,ve,v)}var ye=ve.child;if(ye!==null)ye.return=ve,Fe=ye;else for(;Fe!==null;){ve=Fe;var ge=ve.sibling,De=ve.return;if(Tp(ve),ve===te){Fe=null;break}if(ge!==null){ge.return=De,Fe=ge;break}Fe=De}}}var ze=v.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Wt=He.sibling;He.sibling=null,He=Wt}while(He!==null)}}Fe=v}}if((v.subtreeFlags&2064)!==0&&E!==null)E.return=v,Fe=E;else e:for(;Fe!==null;){if(v=Fe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Uo(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,Fe=q;break e}Fe=v.return}}var H=n.current;for(Fe=H;Fe!==null;){E=Fe;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Fe=K;else e:for(E=H;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Xa(9,I)}}catch(je){Vt(I,I.return,je)}if(I===E){Fe=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Fe=we;break e}Fe=I.return}}if(yt=h,cr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(wt,n)}catch{}c=!0}return c}finally{bt=o,Zn.transition=i}}return!1}function Hp(n,i,o){i=As(o,i),i=sp(n,i,1),n=dr(n,i,1),i=Mn(),n!==null&&(bn(n,1,i),Dn(n,i))}function Vt(n,i,o){if(n.tag===3)Hp(n,n,o);else for(;i!==null;){if(i.tag===3){Hp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hr===null||!hr.has(c))){n=As(o,n),n=op(i,n,1),i=dr(i,n,1),n=Mn(),i!==null&&(bn(i,1,n),Dn(i,n));break}}i=i.return}}function I_(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,nn===n&&(an&o)===o&&(Kt===4||Kt===3&&(an&130023424)===an&&500>Me()-_u?Hr(n,0):gu|=o),Dn(n,i)}function Vp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var o=Mn();n=Ui(n,i),n!==null&&(bn(n,i,o),Dn(n,o))}function U_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Vp(n,o)}function F_(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Vp(n,o)}var Gp;Gp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Pn=!1,E_(n,i,o);Pn=(n.flags&131072)!==0}else Pn=!1,Ot&&(i.flags&1048576)!==0&&Mh(i,Ra,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Wa(n,i),n=i.pendingProps;var h=vs(i,dn.current);ws(i,o),h=qc(null,i,c,n,h,o);var v=$c();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(c)?(v=!0,Aa(i)):v=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Hc(i),h.updater=Va,i.stateNode=h,h._reactInternals=i,tu(i,c,n,o),i=su(null,i,c,!0,v,o)):(i.tag=0,Ot&&v&&Lc(i),Sn(null,i,h,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Wa(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=O_(c),n=si(c,n),h){case 0:i=ru(null,i,c,n,o);break e;case 1:i=mp(null,i,c,n,o);break e;case 11:i=up(null,i,c,n,o);break e;case 14:i=dp(null,i,c,si(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:si(c,h),ru(n,i,c,h,o);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:si(c,h),mp(n,i,c,h,o);case 3:e:{if(gp(i),n===null)throw Error(t(387));c=i.pendingProps,v=i.memoizedState,h=v.element,Lh(n,i),Ua(i,c,null,o);var E=i.memoizedState;if(c=E.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){h=As(Error(t(423)),i),i=_p(n,i,c,o,h);break e}else if(c!==h){h=As(Error(t(424)),i),i=_p(n,i,c,o,h);break e}else for(Bn=or(i.stateNode.containerInfo.firstChild),zn=i,Ot=!0,ri=null,o=Rh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ss(),c===h){i=ki(n,i,o);break e}Sn(n,i,c,o)}i=i.child}return i;case 5:return Ih(i),n===null&&Ic(i),c=i.type,h=i.pendingProps,v=n!==null?n.memoizedProps:null,E=h.children,Tc(c,h)?E=null:v!==null&&Tc(c,v)&&(i.flags|=32),pp(n,i),Sn(n,i,E,o),i.child;case 6:return n===null&&Ic(i),null;case 13:return vp(n,i,o);case 4:return Vc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ms(i,null,c,o):Sn(n,i,c,o),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:si(c,h),up(n,i,c,h,o);case 7:return Sn(n,i,i.pendingProps,o),i.child;case 8:return Sn(n,i,i.pendingProps.children,o),i.child;case 12:return Sn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,v=i.memoizedProps,E=h.value,It(Da,c._currentValue),c._currentValue=E,v!==null)if(ii(v.value,E)){if(v.children===h.children&&!Cn.current){i=ki(n,i,o);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var I=v.dependencies;if(I!==null){E=v.child;for(var O=I.firstContext;O!==null;){if(O.context===c){if(v.tag===1){O=Fi(-1,o&-o),O.tag=2;var te=v.updateQueue;if(te!==null){te=te.shared;var ve=te.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),te.pending=O}}v.lanes|=o,O=v.alternate,O!==null&&(O.lanes|=o),zc(v.return,o,i),I.lanes|=o;break}O=O.next}}else if(v.tag===10)E=v.type===i.type?null:v.child;else if(v.tag===18){if(E=v.return,E===null)throw Error(t(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),zc(E,o,i),E=v.sibling}else E=v.child;if(E!==null)E.return=v;else for(E=v;E!==null;){if(E===i){E=null;break}if(v=E.sibling,v!==null){v.return=E.return,E=v;break}E=E.return}v=E}Sn(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,ws(i,o),h=$n(h),c=c(h),i.flags|=1,Sn(n,i,c,o),i.child;case 14:return c=i.type,h=si(c,i.pendingProps),h=si(c.type,h),dp(n,i,c,h,o);case 15:return fp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:si(c,h),Wa(n,i),i.tag=1,Rn(c)?(n=!0,Aa(i)):n=!1,ws(i,o),ip(i,c,h),tu(i,c,h,o),su(null,i,c,!0,n,o);case 19:return yp(n,i,o);case 22:return hp(n,i,o)}throw Error(t(156,i.tag))};function Wp(n,i){return ne(n,i)}function k_(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,i,o,c){return new k_(n,i,o,c)}function Tu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function O_(n){if(typeof n=="function")return Tu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===de)return 14}return 2}function _r(n,i){var o=n.alternate;return o===null?(o=Qn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function tl(n,i,o,c,h,v){var E=2;if(c=n,typeof n=="function")Tu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case k:return Gr(o.children,h,v,i);case X:E=8,h|=8;break;case L:return n=Qn(12,o,i,h|2),n.elementType=L,n.lanes=v,n;case $:return n=Qn(13,o,i,h),n.elementType=$,n.lanes=v,n;case re:return n=Qn(19,o,i,h),n.elementType=re,n.lanes=v,n;case ce:return nl(o,h,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case J:E=11;break e;case de:E=14;break e;case ae:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Qn(E,o,i,h),i.elementType=n,i.type=c,i.lanes=v,i}function Gr(n,i,o,c){return n=Qn(7,n,c,i),n.lanes=o,n}function nl(n,i,o,c){return n=Qn(22,n,c,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function Au(n,i,o){return n=Qn(6,n,null,i),n.lanes=o,n}function bu(n,i,o){return i=Qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function z_(n,i,o,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xn(0),this.expirationTimes=Xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Cu(n,i,o,c,h,v,E,I,O){return n=new z_(n,i,o,I,O),i===1?(i=1,v===!0&&(i|=8)):i=0,v=Qn(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hc(v),n}function B_(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function jp(n){if(!n)return lr;n=n._reactInternals;e:{if(_i(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Rn(o))return xh(n,o,i)}return i}function Xp(n,i,o,c,h,v,E,I,O){return n=Cu(o,c,!0,n,h,v,E,I,O),n.context=jp(null),o=n.current,c=Mn(),h=mr(o),v=Fi(c,h),v.callback=i??null,dr(o,v,h),n.current.lanes=h,bn(n,h,c),Dn(n,c),n}function il(n,i,o,c){var h=i.current,v=Mn(),E=mr(h);return o=jp(o),i.context===null?i.context=o:i.pendingContext=o,i=Fi(v,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=dr(h,i,E),n!==null&&(li(n,h,E,v),Ia(n,h,E)),E}function rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Yp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Ru(n,i){Yp(n,i),(n=n.alternate)&&Yp(n,i)}function H_(){return null}var qp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pu(n){this._internalRoot=n}sl.prototype.render=Pu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));il(n,i,null,null)},sl.prototype.unmount=Pu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Br(function(){il(null,n,null,null)}),i[Li]=null}};function sl(n){this._internalRoot=n}sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Lf();n={blockedOn:null,target:n,priority:i};for(var o=0;o<ir.length&&i!==0&&i<ir[o].priority;o++);ir.splice(o,0,n),o===0&&If(n)}};function Lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ol(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function $p(){}function V_(n,i,o,c,h){if(h){if(typeof c=="function"){var v=c;c=function(){var te=rl(E);v.call(te)}}var E=Xp(i,c,n,0,null,!1,!1,"",$p);return n._reactRootContainer=E,n[Li]=E.current,Mo(n.nodeType===8?n.parentNode:n),Br(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var I=c;c=function(){var te=rl(O);I.call(te)}}var O=Cu(n,0,!1,null,null,!1,!1,"",$p);return n._reactRootContainer=O,n[Li]=O.current,Mo(n.nodeType===8?n.parentNode:n),Br(function(){il(i,O,o,c)}),O}function al(n,i,o,c,h){var v=o._reactRootContainer;if(v){var E=v;if(typeof h=="function"){var I=h;h=function(){var O=rl(E);I.call(O)}}il(i,E,n,h)}else E=V_(o,i,n,h,c);return rl(E)}Rf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=qt(i.pendingLanes);o!==0&&(tc(i,o|1),Dn(i,Me()),(yt&6)===0&&(Rs=Me()+500,cr()))}break;case 13:Br(function(){var c=Ui(n,1);if(c!==null){var h=Mn();li(c,n,1,h)}}),Ru(n,1)}},nc=function(n){if(n.tag===13){var i=Ui(n,134217728);if(i!==null){var o=Mn();li(i,n,134217728,o)}Ru(n,134217728)}},Pf=function(n){if(n.tag===13){var i=mr(n),o=Ui(n,i);if(o!==null){var c=Mn();li(o,n,i,c)}Ru(n,i)}},Lf=function(){return bt},Df=function(n,i){var o=bt;try{return bt=n,i()}finally{bt=o}},Ce=function(n,i,o){switch(i){case"input":if(dt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var h=wa(c);if(!h)throw Error(t(90));mt(c),dt(c,h)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&N(n,!!o.multiple,i,!1)}},Ut=Mu,Yt=Br;var G_={usingClientEntryPoint:!1,Events:[To,gs,wa,Pe,rt,Mu]},zo={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W_={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=b(n),n===null?null:n.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||H_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{wt=ll.inject(W_),gt=ll}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G_,Nn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lu(i))throw Error(t(200));return B_(n,i,null,o)},Nn.createRoot=function(n,i){if(!Lu(n))throw Error(t(299));var o=!1,c="",h=qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Cu(n,1,!1,null,null,o,!1,c,h),n[Li]=i.current,Mo(n.nodeType===8?n.parentNode:n),new Pu(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=b(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Br(n)},Nn.hydrate=function(n,i,o){if(!ol(i))throw Error(t(200));return al(null,n,i,!0,o)},Nn.hydrateRoot=function(n,i,o){if(!Lu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,h=!1,v="",E=qp;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(v=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Xp(i,null,n,1,o??null,h,!1,v,E),n[Li]=i.current,Mo(n),c)for(n=0;n<c.length;n++)o=c[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new sl(i)},Nn.render=function(n,i,o){if(!ol(i))throw Error(t(200));return al(null,n,i,!1,o)},Nn.unmountComponentAtNode=function(n){if(!ol(n))throw Error(t(40));return n._reactRootContainer?(Br(function(){al(null,null,n,!1,function(){n._reactRootContainer=null,n[Li]=null})}),!0):!1},Nn.unstable_batchedUpdates=Mu,Nn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!ol(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return al(n,i,o,!1,c)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var im;function Q_(){if(im)return Iu.exports;im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Iu.exports=Z_(),Iu.exports}var rm;function J_(){if(rm)return cl;rm=1;var s=Q_();return cl.createRoot=s.createRoot,cl.hydrateRoot=s.hydrateRoot,cl}var ev=J_();const tv=Mg(ev);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=s=>{const e=iv(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=ot.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...d},f)=>ot.createElement("svg",{ref:f,...rv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Eg("lucide",a),...!l&&!sv(d)&&{"aria-hidden":"true"},...d},[...u.map(([p,m])=>ot.createElement(p,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=(s,e)=>{const t=ot.forwardRef(({className:r,...a},l)=>ot.createElement(ov,{ref:l,iconNode:e,className:Eg(`lucide-${nv(sm(s))}`,`lucide-${s}`,r),...a}));return t.displayName=sm(s),t};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],lv=Dt("arrow-right",av);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],wg=Dt("box",cv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],dv=Dt("chevron-down",uv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],hv=Dt("chevron-up",fv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]],mv=Dt("cog",pv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],_v=Dt("columns-2",gv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],xv=Dt("download",vv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],Sv=Dt("eraser",yv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Ev=Dt("eye-off",Mv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Tv=Dt("eye",wv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]],Tg=Dt("frame",Av);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Cv=Dt("grid-3x3",bv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Pv=Dt("layers",Rv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Dv=Dt("monitor",Lv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]],Iv=Dt("paint-bucket",Nv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]],Fv=Dt("panel-bottom",Uv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],Ov=Dt("panel-left",kv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Bv=Dt("panel-right",zv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]],Vv=Dt("panel-top",Hv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Wv=Dt("pencil",Gv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Xv=Dt("plus",jv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],qv=Dt("redo-2",Yv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Kv=Dt("rotate-cw",$v);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Qv=Dt("square",Zv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ag=Dt("trash-2",Jv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],tx=Dt("undo-2",ex);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],om=Dt("x",nx),am=s=>{let e;const t=new Set,r=(p,m)=>{const g=typeof p=="function"?p(e):p;if(!Object.is(g,e)){const _=e;e=m??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(y=>y(e,_))}},a=()=>e,d={setState:r,getState:a,getInitialState:()=>f,subscribe:p=>(t.add(p),()=>t.delete(p))},f=e=s(r,a,d);return d},ix=(s=>s?am(s):am),rx=s=>s;function sx(s,e=rx){const t=qo.useSyncExternalStore(s.subscribe,qo.useCallback(()=>e(s.getState()),[s,e]),qo.useCallback(()=>e(s.getInitialState()),[s,e]));return qo.useDebugValue(t),t}const lm=s=>{const e=ix(s),t=r=>sx(e,r);return Object.assign(t,e),t},ox=(s=>s?lm(s):lm),ax=["#000000","#ffffff","#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff","#ff8800","#8800ff","#00ff88","#ff0088","#884400","#004488","#448800","#888888","#444444","#cccccc","#662200","#002266"],bg=32,Cg=32,Rg=5;function Qo(s,e,t){return Array.from({length:e},()=>Array.from({length:s},()=>Array(t).fill("transparent")))}let ku=0;function Pg(s,e,t,r){return ku++,{id:`layer-${ku}`,name:`Layer ${ku}`,visible:!0,voxels:Qo(s,e,t)}}function Ou(s){return s.map(e=>({...e,voxels:e.voxels.map(t=>t.map(r=>[...r]))}))}function uf(s,e,t,r){var l,u;const a=Qo(e,t,r);for(const d of s)if(d.visible)for(let f=0;f<t;f++)for(let p=0;p<e;p++)for(let m=0;m<r;m++){const g=(u=(l=d.voxels[f])==null?void 0:l[p])==null?void 0:u[m];g&&g!=="transparent"&&(a[f][p][m]=g)}return a}function df(s,e,t,r){return s==="top"||s==="bottom"?{w:e,h:r}:s==="left"||s==="right"?{w:r,h:t}:{w:e,h:t}}function Lg(s,e,t,r,a){switch(e){case"front":return Array.from({length:r},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=0;g<a;g++){const _=(m=(p=s[u])==null?void 0:p[f])==null?void 0:m[g];if(_&&_!=="transparent")return _}return"transparent"}));case"back":return Array.from({length:r},(l,u)=>Array.from({length:t},(d,f)=>{var m,g;const p=t-1-f;for(let _=a-1;_>=0;_--){const y=(g=(m=s[u])==null?void 0:m[p])==null?void 0:g[_];if(y&&y!=="transparent")return y}return"transparent"}));case"left":return Array.from({length:r},(l,u)=>Array.from({length:a},(d,f)=>{var p,m;for(let g=0;g<t;g++){const _=(m=(p=s[u])==null?void 0:p[g])==null?void 0:m[f];if(_&&_!=="transparent")return _}return"transparent"}));case"right":return Array.from({length:r},(l,u)=>Array.from({length:a},(d,f)=>{var m,g;const p=a-1-f;for(let _=t-1;_>=0;_--){const y=(g=(m=s[u])==null?void 0:m[_])==null?void 0:g[p];if(y&&y!=="transparent")return y}return"transparent"}));case"top":return Array.from({length:a},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=0;g<r;g++){const _=(m=(p=s[g])==null?void 0:p[f])==null?void 0:m[u];if(_&&_!=="transparent")return _}return"transparent"}));case"bottom":return Array.from({length:a},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=r-1;g>=0;g--){const _=(m=(p=s[g])==null?void 0:p[f])==null?void 0:m[u];if(_&&_!=="transparent")return _}return"transparent"}));default:return[]}}function lx(s,e,t,r,a){switch(e){case"front":return Array.from({length:r},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=0;g<a;g++)if((m=(p=s[u])==null?void 0:p[f])!=null&&m[g]&&s[u][f][g]!=="transparent")return g;return null}));case"back":return Array.from({length:r},(l,u)=>Array.from({length:t},(d,f)=>{var m,g;const p=t-1-f;for(let _=a-1;_>=0;_--)if((g=(m=s[u])==null?void 0:m[p])!=null&&g[_]&&s[u][p][_]!=="transparent")return a-1-_;return null}));case"left":return Array.from({length:r},(l,u)=>Array.from({length:a},(d,f)=>{var p,m;for(let g=0;g<t;g++)if((m=(p=s[u])==null?void 0:p[g])!=null&&m[f]&&s[u][g][f]!=="transparent")return g;return null}));case"right":return Array.from({length:r},(l,u)=>Array.from({length:a},(d,f)=>{var m,g;const p=a-1-f;for(let _=t-1;_>=0;_--)if((g=(m=s[u])==null?void 0:m[_])!=null&&g[p]&&s[u][_][p]!=="transparent")return t-1-_;return null}));case"top":return Array.from({length:a},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=0;g<r;g++)if((m=(p=s[g])==null?void 0:p[f])!=null&&m[u]&&s[g][f][u]!=="transparent")return g;return null}));case"bottom":return Array.from({length:a},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=r-1;g>=0;g--)if((m=(p=s[g])==null?void 0:p[f])!=null&&m[u]&&s[g][f][u]!=="transparent")return r-1-g;return null}));default:return[]}}function cm(s,e,t,r,a,l,u,d="both"){const f=[];switch(t){case"front":{const p=Math.floor(u/2),m=d==="back"?p:p-r,g=d==="front"?p:p+r;for(let _=Math.max(0,m);_<=Math.min(u-1,g);_++)f.push({x:s,y:e,z:_});break}case"back":{const p=Math.floor(u/2),m=d==="front"?p:p-r,g=d==="back"?p:p+r;for(let _=Math.max(0,m);_<=Math.min(u-1,g);_++)f.push({x:a-1-s,y:e,z:_});break}case"left":for(let p=0;p<r;p++)f.push({x:p,y:e,z:s});break;case"right":for(let p=0;p<r;p++)f.push({x:a-1-p,y:e,z:u-1-s});break;case"top":for(let p=0;p<r;p++)f.push({x:s,y:p,z:e});break;case"bottom":for(let p=0;p<r;p++)f.push({x:s,y:l-1-p,z:e});break}return f.filter(({x:p,y:m,z:g})=>p>=0&&p<a&&m>=0&&m<l&&g>=0&&g<u)}function um(s,e,t,r,a,l,u,d){const f=[],p=(m,g,_)=>{var M,w;const y=(w=(M=s[g])==null?void 0:M[m])==null?void 0:w[_];return y&&y!=="transparent"&&f.push({x:m,y:g,z:_}),f.length>=a};if(r==="back"){const m=l-1-e;for(let g=d-1;g>=0&&!p(m,t,g);g--);}else if(r==="left")for(let m=0;m<l&&!p(m,t,e);m++);else if(r==="right"){const m=d-1-e;for(let g=l-1;g>=0&&!p(g,t,m);g--);}else if(r==="top")for(let m=0;m<u&&!p(e,m,t);m++);else if(r==="bottom")for(let m=u-1;m>=0&&!p(e,m,t);m--);return f}const dm=Pg(bg,Cg,Rg),Qt=ox((s,e)=>({canvasWidth:bg,canvasHeight:Cg,depthDimension:Rg,layers:[dm],activeLayerId:dm.id,pixelSize:14,showGrid:!0,currentColor:"#c8860a",activeTool:"pencil",palette:ax,undoStack:[],redoStack:[],pushUndo(){const{layers:t,undoStack:r}=e();s({undoStack:[...r.slice(-49),Ou(t)],redoStack:[]})},paintAt(t,r,a){const{layers:l,activeLayerId:u,canvasWidth:d,canvasHeight:f,depthDimension:p,activeView:m,paintDepth:g,paintDirection:_}=e(),y=l.findIndex(S=>S.id===u);if(y<0)return;const M=l[y].voxels,w=S=>{if(!S.length)return!1;const x=new Set(S.map(C=>C.y)),D=[...M];for(const C of x)D[C]=M[C].map(Y=>[...Y]);for(const{x:C,y:Y,z:U}of S)D[Y][C][U]=a;const P=[...l];return P[y]={...l[y],voxels:D},s({layers:P}),!0};if(m!=="front"&&m!=="back"){const S=um(M,t,r,m,1,d,f,p);w(S);return}w(cm(t,r,m,g,d,f,p,_))},floodFillVoxel(t,r,a){var R,z;const{layers:l,activeLayerId:u,canvasWidth:d,canvasHeight:f,depthDimension:p,activeView:m,paintDepth:g,paintDirection:_}=e(),y=l.findIndex(J=>J.id===u);if(y<0)return;const M=l[y].voxels,w=Lg(M,m,d,f,p),{w:S,h:x}=df(m,d,f,p),D=(R=w[r])==null?void 0:R[t];if(!D||D===a)return;e().pushUndo();const P=new Set,C=[[t,r]],Y=[];for(;C.length;){const[J,$]=C.pop();if(J<0||$<0||J>=S||$>=x)continue;const re=`${J},${$}`;P.has(re)||(P.add(re),((z=w[$])==null?void 0:z[J])===D&&(Y.push([J,$]),C.push([J+1,$],[J-1,$],[J,$+1],[J,$-1])))}const U=Y.flatMap(([J,$])=>m==="front"||m==="back"?cm(J,$,m,g,d,f,p,_):um(M,J,$,m,1,d,f,p));if(!U.length)return;const k=new Set(U.map(J=>J.y)),X=M.map((J,$)=>k.has($)?J.map(re=>[...re]):J);for(const{x:J,y:$,z:re}of U)X[$][J][re]=a;const L=[...l];L[y]={...l[y],voxels:X},s({layers:L})},setCurrentColor:t=>s({currentColor:t}),setActiveTool:t=>s({activeTool:t}),setPixelSize:t=>s({pixelSize:Math.max(4,Math.min(32,t))}),toggleGrid:()=>s(t=>({showGrid:!t.showGrid})),clearCanvas(){const{layers:t,activeLayerId:r,canvasWidth:a,canvasHeight:l,depthDimension:u}=e();e().pushUndo();const d=t.map(f=>f.id===r?{...f,voxels:Qo(a,l,u)}:f);s({layers:d})},resizeCanvas(t,r){t=Math.max(4,Math.min(256,Math.round(t))),r=Math.max(4,Math.min(256,Math.round(r)));const{layers:a,canvasWidth:l,canvasHeight:u,depthDimension:d}=e();e().pushUndo();const f=t>l?Math.floor((t-l)/2):0,p=r>u?Math.floor((r-u)/2):0,m=a.map(g=>{const _=Qo(t,r,d);for(let y=0;y<u;y++)for(let M=0;M<l;M++)for(let w=0;w<d;w++){const S=y+p,x=M+f;S>=0&&S<r&&x>=0&&x<t&&(_[S][x][w]=g.voxels[y][M][w])}return{...g,voxels:_}});s({canvasWidth:t,canvasHeight:r,layers:m})},setDepthDimension(t){t=Math.max(4,Math.min(256,Math.round(t)));const{layers:r,canvasWidth:a,canvasHeight:l,depthDimension:u,paintDepth:d}=e();e().pushUndo();const f=t>u?Math.floor((t-u)/2):0,p=r.map(m=>{const g=Qo(a,l,t);for(let _=0;_<l;_++)for(let y=0;y<a;y++)for(let M=0;M<u;M++){const w=M+f;w>=0&&w<t&&(g[_][y][w]=m.voxels[_][y][M])}return{...m,voxels:g}});s({depthDimension:t,layers:p,paintDepth:Math.min(d,t)})},undo(){const{undoStack:t,layers:r,redoStack:a}=e();if(!t.length)return;const l=t[t.length-1];s({layers:l,undoStack:t.slice(0,-1),redoStack:[...a.slice(-49),Ou(r)]})},redo(){const{redoStack:t,layers:r,undoStack:a}=e();if(!t.length)return;const l=t[t.length-1];s({layers:l,redoStack:t.slice(0,-1),undoStack:[...a.slice(-49),Ou(r)]})},addToPalette(t){const{palette:r}=e();r.includes(t)||s({palette:[...r,t]})},addLayer(){const{layers:t,canvasWidth:r,canvasHeight:a,depthDimension:l}=e(),u=Pg(r,a,l);s({layers:[...t,u],activeLayerId:u.id})},deleteLayer(t){var d;const{layers:r,activeLayerId:a}=e();if(r.length<=1)return;const l=r.filter(f=>f.id!==t),u=t===a?((d=l[l.length-1])==null?void 0:d.id)??l[0].id:a;s({layers:l,activeLayerId:u})},setActiveLayer:t=>s({activeLayerId:t}),toggleLayerVisible(t){const{layers:r}=e();s({layers:r.map(a=>a.id===t?{...a,visible:!a.visible}:a)})},renameLayer(t,r){const{layers:a}=e();s({layers:a.map(l=>l.id===t?{...l,name:r.trim()||l.name}:l)})},moveLayerUp(t){const{layers:r}=e(),a=r.findIndex(u=>u.id===t);if(a>=r.length-1)return;const l=[...r];[l[a],l[a+1]]=[l[a+1],l[a]],s({layers:l})},moveLayerDown(t){const{layers:r}=e(),a=r.findIndex(u=>u.id===t);if(a<=0)return;const l=[...r];[l[a],l[a-1]]=[l[a-1],l[a]],s({layers:l})},activeView:"front",paintDepth:1,paintDirection:"both",setActiveView:t=>s({activeView:t}),setPaintDepth:t=>s(r=>({paintDepth:Math.max(1,Math.min(r.depthDimension,Math.round(t)))})),setPaintDirection:t=>s({paintDirection:t}),viewMode:"split",activeTheme:"synthwave",setViewMode:t=>s({viewMode:t}),setActiveTheme:t=>s({activeTheme:t})}));function cx(){return A.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none",style:{zIndex:0},children:[A.jsx("div",{className:"absolute inset-0",style:{background:`
          radial-gradient(ellipse at 15% 50%, rgba(120,80,20,0.15) 0%, transparent 45%),
          radial-gradient(ellipse at 85% 50%, rgba(100,60,10,0.12) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 100%, rgba(80,50,10,0.2) 0%, transparent 40%)
        `}}),A.jsxs("svg",{className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[A.jsxs("defs",{children:[A.jsxs("radialGradient",{id:"gearFill",cx:"50%",cy:"50%",children:[A.jsx("stop",{offset:"0%",stopColor:"#4a3010",stopOpacity:"0.6"}),A.jsx("stop",{offset:"100%",stopColor:"#1a0e00",stopOpacity:"0.3"})]}),A.jsx("pattern",{id:"hexTile",width:"44",height:"50",patternUnits:"userSpaceOnUse",children:A.jsx("path",{d:"M22 2 L42 13 L42 37 L22 48 L2 37 L2 13 Z",fill:"none",stroke:"rgba(122,92,46,0.06)",strokeWidth:"1"})}),A.jsxs("pattern",{id:"rivetPattern",width:"80",height:"80",patternUnits:"userSpaceOnUse",children:[A.jsx("circle",{cx:"4",cy:"4",r:"2.5",fill:"none",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.5"}),A.jsx("circle",{cx:"4",cy:"4",r:"1",fill:"rgba(200,134,10,0.2)"}),A.jsx("circle",{cx:"76",cy:"76",r:"2.5",fill:"none",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.5"}),A.jsx("circle",{cx:"76",cy:"76",r:"1",fill:"rgba(200,134,10,0.2)"})]})]}),A.jsx("rect",{width:"100%",height:"100%",fill:"url(#hexTile)"}),A.jsx("rect",{width:"100%",height:"100%",fill:"url(#rivetPattern)"}),A.jsx("g",{opacity:"0.18",children:A.jsx(ff,{cx:70,cy:220,outerR:160,innerR:124,teeth:28,holeR:52})}),A.jsx("g",{opacity:"0.15",children:A.jsx(ux,{cx:-90,cy:180,outerR:180,innerR:140,teeth:32,holeR:60})}),A.jsx("g",{opacity:"0.12",children:A.jsx(dx,{cx:0,cy:-60,outerR:120,innerR:92,teeth:20,holeR:38})}),A.jsx("g",{opacity:"0.35",children:A.jsx(fm,{y:52,segments:[0,100,200,320,480,640,760],width:"100%"})}),A.jsx("g",{opacity:"0.25",children:A.jsx(fm,{y:-28,fromBottom:!0,segments:[80,200,380,540,700],width:"100%"})}),A.jsx("rect",{x:"5",y:"0",width:"4",height:"100%",fill:"rgba(122,92,46,0.15)",rx:"2"}),A.jsx("rect",{x:"3",y:"0",width:"1",height:"100%",fill:"rgba(200,134,10,0.1)"}),A.jsx("rect",{x:"calc(100% - 9px)",y:"0",width:"4",height:"100%",fill:"rgba(122,92,46,0.12)",rx:"2"})]}),A.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 opacity-30",style:{left:"-40px"},children:A.jsx(Ls,{size:180,teeth:20,className:"gear-spin-slow",stroke:"#c8860a",strokeWidth:2})}),A.jsx("div",{className:"absolute right-0 top-1/3 opacity-22",style:{right:"-50px"},children:A.jsx(Ls,{size:200,teeth:24,className:"gear-spin-reverse",stroke:"#7a5c2e",strokeWidth:1.5})}),A.jsxs("div",{className:"absolute bottom-8 right-4 flex items-end gap-0 opacity-40",children:[A.jsx(Ls,{size:60,teeth:12,className:"gear-spin",stroke:"#c8860a",strokeWidth:1.5}),A.jsx(Ls,{size:40,teeth:8,className:"gear-spin-reverse",stroke:"#8a5c08",strokeWidth:1.5,style:{marginLeft:"-8px",marginBottom:"10px"}}),A.jsx(Ls,{size:28,teeth:6,className:"gear-spin-slow",stroke:"#c8860a",strokeWidth:1,style:{marginLeft:"-6px",marginBottom:"6px"}})]}),A.jsx("div",{className:"absolute top-6 left-4 opacity-35",children:A.jsx(Ls,{size:48,teeth:10,className:"gear-spin-reverse",stroke:"#c8860a",strokeWidth:1.5})}),A.jsx(fx,{}),A.jsx("div",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none",style:{fontFamily:"'Special Elite', serif",color:"rgba(200,134,10,0.12)",fontSize:"11px",letterSpacing:"0.5em",textTransform:"uppercase"},children:"Picell 3D Engine"})]})}function Ls({size:s,teeth:e,className:t,stroke:r,strokeWidth:a=1.5,style:l}){const u=s/2-6,d=u*.78,f=Dg(s/2,s/2,u,d,e,.4);return A.jsxs("svg",{width:s,height:s,className:t,style:l,children:[A.jsx("path",{d:f,fill:"none",stroke:r,strokeWidth:a}),A.jsx("circle",{cx:s/2,cy:s/2,r:u*.38,fill:"none",stroke:r,strokeWidth:a*.8}),[0,60,120,180,240,300].slice(0,Math.min(6,Math.floor(e/4))).map((p,m)=>{const g=p*Math.PI/180,_=s/2+Math.cos(g)*u*.38,y=s/2+Math.sin(g)*u*.38,M=s/2+Math.cos(g)*u*.68,w=s/2+Math.sin(g)*u*.68;return A.jsx("line",{x1:_,y1:y,x2:M,y2:w,stroke:r,strokeWidth:a*.6},m)}),A.jsx("circle",{cx:s/2,cy:s/2,r:u*.1,fill:r,opacity:"0.6"})]})}function ff({cx:s,cy:e,outerR:t,innerR:r,teeth:a,holeR:l}){const u=Dg(s,e,t,r,a,.4);return A.jsxs(A.Fragment,{children:[A.jsx("path",{d:u,fill:"url(#gearFill)",stroke:"rgba(122,92,46,0.4)",strokeWidth:"1.5"}),A.jsx("circle",{cx:s,cy:e,r:l,fill:"rgba(10,6,2,0.6)",stroke:"rgba(122,92,46,0.3)",strokeWidth:"1"}),[0,45,90,135,180,225,270,315].map((d,f)=>{const p=d*Math.PI/180,m=s+Math.cos(p)*l,g=e+Math.sin(p)*l,_=s+Math.cos(p)*(r*.7),y=e+Math.sin(p)*(r*.7);return A.jsx("line",{x1:m,y1:g,x2:_,y2:y,stroke:"rgba(122,92,46,0.2)",strokeWidth:"1.5"},f)}),A.jsx("circle",{cx:s,cy:e,r:l*.3,fill:"rgba(200,134,10,0.15)",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.8"})]})}function ux({cx:s,cy:e,outerR:t,innerR:r,teeth:a,holeR:l}){return A.jsx("g",{transform:`translate(100%,${e})`,children:A.jsx(ff,{cx:s,cy:0,outerR:t,innerR:r,teeth:a,holeR:l})})}function dx({cx:s,cy:e,outerR:t,innerR:r,teeth:a,holeR:l}){return A.jsx("g",{transform:"translate(50%,100%)",children:A.jsx(ff,{cx:s,cy:e,outerR:t,innerR:r,teeth:a,holeR:l})})}function fm({y:s,fromBottom:e,segments:t}){const r=e?`calc(100% - ${-s}px)`:`${s}px`;return A.jsxs("g",{children:[A.jsx("line",{x1:"0",y1:r,x2:"100%",y2:r,stroke:"url(#pipeGrad2)",strokeWidth:"6"}),A.jsx("line",{x1:"0",y1:r,x2:"100%",y2:r,stroke:"rgba(200,134,10,0.15)",strokeWidth:"1"})]})}function fx(){return A.jsxs("svg",{className:"absolute top-0 left-0 w-full opacity-25 pointer-events-none",height:"56",xmlns:"http://www.w3.org/2000/svg",children:[A.jsx("defs",{children:A.jsxs("linearGradient",{id:"pipeGrad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[A.jsx("stop",{offset:"0%",stopColor:"#d09030"}),A.jsx("stop",{offset:"40%",stopColor:"#8a5c10"}),A.jsx("stop",{offset:"100%",stopColor:"#3d2010"})]})}),A.jsx("rect",{x:"0",y:"32",width:"100%",height:"6",rx:"3",fill:"url(#pipeGrad2)"}),A.jsx("rect",{x:"0",y:"33",width:"100%",height:"1",fill:"rgba(255,200,60,0.15)"}),[60,160,280,420,560,700].map(s=>A.jsxs("g",{children:[A.jsx("rect",{x:s-5,y:28,width:10,height:14,rx:"1.5",fill:"#8a5c10"}),A.jsx("rect",{x:s-5,y:28,width:10,height:2,rx:"1",fill:"#c8860a",opacity:"0.5"}),A.jsx("circle",{cx:s,cy:35,r:2.5,fill:"#4a3010"})]},s)),[100,340,580].map((s,e)=>A.jsxs("g",{children:[A.jsx("circle",{cx:s,cy:24,r:4,fill:"rgba(220,200,150,0.3)",className:"steam-puff",style:{animationDelay:`${e*1.1}s`}}),A.jsx("circle",{cx:s+3,cy:18,r:2.5,fill:"rgba(220,200,150,0.2)",className:"steam-puff-delay",style:{animationDelay:`${e*1.1+.3}s`}})]},s))]})}function Dg(s,e,t,r,a,l){const u=[],d=a*2;for(let f=0;f<d;f++){const p=f/d*Math.PI*2-Math.PI/2,m=Math.PI/d*l,g=f%2===0?t:r;u.push(`${s+Math.cos(p-m)*g},${e+Math.sin(p-m)*g}`),u.push(`${s+Math.cos(p+m)*g},${e+Math.sin(p+m)*g}`)}return`M ${u[0]} L ${u.slice(1).join(" L ")} Z`}const Ei=720,wn=496,Kr=1440,Qr=800,ji=130,hx=[[72,44,1.5,0],[180,88,1,1],[252,28,1.8,2],[360,72,.8,0],[432,115,1.2,1],[504,38,1,2],[612,60,1.4,0],[684,95,.8,1],[756,22,1.6,2],[828,82,1,0],[900,48,1.2,1],[972,118,.9,2],[1044,35,1.5,0],[1116,75,1.1,1],[1188,28,1.7,2],[1332,55,1,0],[108,162,1,1],[288,188,.8,2],[468,172,1.3,0],[648,195,1,1],[828,168,.9,2],[1008,190,1.4,0],[1188,178,1.1,1],[1368,195,.8,2],[36,215,.7,0],[216,238,1.2,1],[396,222,.8,2],[576,245,1,0],[756,230,1.3,1],[936,248,.7,2],[1116,225,1.1,0],[1296,240,.9,1],[144,285,.8,2],[432,298,1,0],[720,278,.6,1],[1008,292,.9,2],[1296,285,1.1,0],[288,322,.7,1],[864,318,.8,2],[1440,310,.9,0]],px=Array.from({length:18},(s,e)=>{const t=((e+1)/19)**.6;return wn+(Qr-wn)*t}),hm=Array.from({length:23},(s,e)=>({x1:Ei,y1:wn,x2:e/22*Kr,y2:Qr})),mx=Array.from({length:22},(s,e)=>{const t=((e+1)/23)**.65,r=wn-ji+t*ji,a=1.2+e*.28;return{y:r,thick:a}}),gx=["sw-star-a","sw-star-b","sw-star-c"];function _x(){return A.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none",style:{zIndex:0},children:[A.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(180deg,
          #080015 0%,
          #120330 18%,
          #1e0852 34%,
          #350a6e 48%,
          #5c0a80 59%,
          #9a1278 68%,
          #d02268 77%,
          #ee3268 86%,
          #ff4878 95%,
          #ff6090 100%)`}}),A.jsxs("svg",{className:"absolute inset-0 w-full h-full",viewBox:`0 0 ${Kr} ${Qr}`,preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[A.jsxs("defs",{children:[A.jsxs("radialGradient",{id:"swSunGrad",cx:"50%",cy:"50%",r:"50%",children:[A.jsx("stop",{offset:"0%",stopColor:"#fff8e8"}),A.jsx("stop",{offset:"22%",stopColor:"#ffe060"}),A.jsx("stop",{offset:"50%",stopColor:"#ff8030"}),A.jsx("stop",{offset:"80%",stopColor:"#ff2d78"}),A.jsx("stop",{offset:"100%",stopColor:"#aa0a60"})]}),A.jsxs("radialGradient",{id:"swSunGlow",cx:"50%",cy:"80%",r:"50%",children:[A.jsx("stop",{offset:"0%",stopColor:"#ff2d78",stopOpacity:"0.5"}),A.jsx("stop",{offset:"50%",stopColor:"#cc44ff",stopOpacity:"0.15"}),A.jsx("stop",{offset:"100%",stopColor:"#cc44ff",stopOpacity:"0"})]}),A.jsxs("linearGradient",{id:"swGridH",x1:"0",y1:wn,x2:"0",y2:Qr,gradientUnits:"userSpaceOnUse",children:[A.jsx("stop",{offset:"0%",stopColor:"#ff2d78",stopOpacity:"0.9"}),A.jsx("stop",{offset:"100%",stopColor:"#ff2d78",stopOpacity:"0.2"})]}),A.jsxs("linearGradient",{id:"swGridV",x1:"0",y1:wn,x2:"0",y2:Qr,gradientUnits:"userSpaceOnUse",children:[A.jsx("stop",{offset:"0%",stopColor:"#44ddff",stopOpacity:"0.7"}),A.jsx("stop",{offset:"100%",stopColor:"#aa44ff",stopOpacity:"0.15"})]}),A.jsx("clipPath",{id:"swSunClip",children:A.jsx("rect",{x:Ei-ji-4,y:0,width:ji*2+8,height:wn+2})}),A.jsxs("filter",{id:"swGlow",children:[A.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),A.jsxs("feMerge",{children:[A.jsx("feMergeNode",{in:"blur"}),A.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),A.jsxs("filter",{id:"swGlowSoft",children:[A.jsx("feGaussianBlur",{stdDeviation:"8",result:"blur"}),A.jsxs("feMerge",{children:[A.jsx("feMergeNode",{in:"blur"}),A.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),hx.map(([s,e,t,r],a)=>A.jsx("circle",{cx:s,cy:e,r:t,fill:a%7===0?"#ccddff":a%5===0?"#ffccee":"#ffffff",opacity:.35+a%4*.12,className:gx[r]},a)),A.jsx("ellipse",{cx:Ei,cy:wn,rx:ji*2.6,ry:ji*1.2,fill:"url(#swSunGlow)",className:"sw-glow-pulse"}),A.jsx("circle",{cx:Ei,cy:wn,r:ji,fill:"url(#swSunGrad)",clipPath:"url(#swSunClip)"}),mx.map(({y:s,thick:e},t)=>A.jsx("line",{x1:Ei-ji-2,y1:s,x2:Ei+ji+2,y2:s,stroke:"#080015",strokeWidth:e,clipPath:"url(#swSunClip)",opacity:.92},t)),A.jsx("line",{x1:0,y1:wn,x2:Kr,y2:wn,stroke:"#ff2d78",strokeWidth:3,opacity:.9,filter:"url(#swGlow)"}),A.jsx("line",{x1:0,y1:wn,x2:Kr,y2:wn,stroke:"#ffaacc",strokeWidth:.6,opacity:.7}),hm.map((s,e)=>{const t=e===0||e===hm.length-1;return A.jsx("line",{x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2,stroke:"url(#swGridV)",strokeWidth:t?1.2:.7,opacity:.65},e)}),px.map((s,e)=>{const t=(s-wn)/(Qr-wn),r=Math.max(0,Ei-Ei*t*1.15),a=Math.min(Kr,Ei+(Kr-Ei)*t*1.15);return A.jsx("line",{x1:r,y1:s,x2:a,y2:s,stroke:"url(#swGridH)",strokeWidth:.6+t*2,opacity:.45+t*.4},e)}),A.jsx("rect",{x:0,y:Qr-4,width:Kr,height:4,fill:"url(#swGridH)",opacity:.4})]}),A.jsx("div",{className:"absolute inset-0 sw-scanlines"}),A.jsx("div",{className:"absolute left-0 right-0 h-px sw-scan-sweep",style:{background:"rgba(255,45,120,0.25)",boxShadow:"0 0 6px rgba(255,45,120,0.4)"}}),A.jsx("div",{className:"absolute top-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg, transparent, #cc44ff 25%, #ff2d78 50%, #cc44ff 75%, transparent)",boxShadow:"0 0 12px rgba(204,68,255,0.7), 0 0 24px rgba(255,45,120,0.3)"}}),A.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg, transparent, #44ddff 25%, #aa44ff 50%, #44ddff 75%, transparent)",boxShadow:"0 0 12px rgba(68,221,255,0.7)"}}),A.jsx("div",{className:"absolute top-0 bottom-0 left-0 w-px",style:{background:"linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)",opacity:.3}}),A.jsx("div",{className:"absolute top-0 bottom-0 right-0 w-px",style:{background:"linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)",opacity:.3}}),A.jsx("div",{className:"absolute top-0 left-0",style:{width:32,height:32,borderTop:"1px solid rgba(204,68,255,0.6)",borderLeft:"1px solid rgba(204,68,255,0.6)"}}),A.jsx("div",{className:"absolute top-0 right-0",style:{width:32,height:32,borderTop:"1px solid rgba(204,68,255,0.6)",borderRight:"1px solid rgba(204,68,255,0.6)"}}),A.jsx("div",{className:"absolute bottom-0 left-0",style:{width:32,height:32,borderBottom:"1px solid rgba(68,221,255,0.6)",borderLeft:"1px solid rgba(68,221,255,0.6)"}}),A.jsx("div",{className:"absolute bottom-0 right-0",style:{width:32,height:32,borderBottom:"1px solid rgba(68,221,255,0.6)",borderRight:"1px solid rgba(68,221,255,0.6)"}}),A.jsx("div",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 tracking-widest sw-flicker",style:{fontFamily:"'Audiowide', sans-serif",color:"#ff2d78",letterSpacing:"0.55em",textTransform:"uppercase",fontSize:"10px",opacity:.22},children:"PICELL · 3D"})]})}const Wl={synthwave:{id:"synthwave",name:"SynthWave",colors:{background:"#0d0221",surface:"#150a2d",surfaceAlt:"#1e0f3c",border:"#5a1a9a",accent:"#ff2d78",accentHover:"#ff5590",text:"#f4d0ff",textMuted:"#6a40a0",canvasBg:"#0a0118"},fontFamily:"'Audiowide', sans-serif",sceneBackground:"#080015",PainterBackground:_x},steampunk:{id:"steampunk",name:"Steampunk",colors:{background:"#1a1208",surface:"#2d2010",surfaceAlt:"#3d2e18",border:"#7a5c2e",accent:"#c8860a",accentHover:"#e8a820",text:"#e8d5a0",textMuted:"#8a7050",canvasBg:"#241a0c"},fontFamily:"'Special Elite', serif",sceneBackground:"#0e0a04",PainterBackground:cx},cyberpunk:{id:"cyberpunk",name:"Cyberpunk",colors:{background:"#080010",surface:"#110022",surfaceAlt:"#1a0030",border:"#5500aa",accent:"#cc00ff",accentHover:"#ee44ff",text:"#e0c0ff",textMuted:"#7040a0",canvasBg:"#0c0018"},fontFamily:"'Orbitron', sans-serif",sceneBackground:"#050008",PainterBackground:vx},blueprint:{id:"blueprint",name:"Blueprint",colors:{background:"#0a1628",surface:"#0d1f3c",surfaceAlt:"#122848",border:"#2a4a7f",accent:"#4d9fff",accentHover:"#80bbff",text:"#c8dff8",textMuted:"#4a6a9a",canvasBg:"#08121e"},fontFamily:"'Share Tech Mono', monospace",sceneBackground:"#061020",PainterBackground:xx},watercolor:{id:"watercolor",name:"Watercolor",colors:{background:"#f5f0e8",surface:"#ede5d8",surfaceAlt:"#e8ddd0",border:"#c0a880",accent:"#b05030",accentHover:"#d06040",text:"#2a1a10",textMuted:"#8a6848",canvasBg:"#ede5d8"},fontFamily:"'Caveat', cursive",sceneBackground:"#f0ebe0",PainterBackground:yx}};function yd(s){return Wl[s]??Wl.synthwave}function Ng(s){const e=document.documentElement;Object.entries(s.colors).forEach(([t,r])=>{e.style.setProperty(`--color-${t}`,r)}),e.style.setProperty("--font-family",s.fontFamily)}function vx(){return A.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:[A.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 30% 50%, rgba(80,0,160,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(0,200,255,0.1) 0%, transparent 50%)"}}),A.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[A.jsx("defs",{children:A.jsx("pattern",{id:"cybGrid",width:"30",height:"30",patternUnits:"userSpaceOnUse",children:A.jsx("path",{d:"M 30 0 L 0 0 0 30",fill:"none",stroke:"rgba(85,0,170,0.2)",strokeWidth:"0.5"})})}),A.jsx("rect",{width:"100%",height:"100%",fill:"url(#cybGrid)"}),[.15,.35,.6,.8].map((s,e)=>A.jsx("line",{x1:"0",y1:`${s*100}%`,x2:"100%",y2:`${s*100}%`,stroke:e%2===0?"rgba(204,0,255,0.12)":"rgba(0,200,255,0.08)",strokeWidth:"1"},e))]}),A.jsx("div",{className:"absolute top-0 left-0 right-0 h-px opacity-60",style:{background:"linear-gradient(90deg, transparent, #cc00ff, #00ccff, transparent)"}}),A.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px opacity-40",style:{background:"linear-gradient(90deg, transparent, #cc00ff, transparent)"}}),A.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-15 tracking-widest",style:{fontFamily:"'Orbitron', sans-serif",color:"#cc00ff",letterSpacing:"0.5em"},children:"PICELL3D"})]})}function xx(){return A.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:A.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[A.jsxs("defs",{children:[A.jsx("pattern",{id:"bpSmall",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:A.jsx("path",{d:"M 20 0 L 0 0 0 20",fill:"none",stroke:"rgba(45,100,180,0.3)",strokeWidth:"0.5"})}),A.jsx("pattern",{id:"bpLarge",width:"100",height:"100",patternUnits:"userSpaceOnUse",children:A.jsx("path",{d:"M 100 0 L 0 0 0 100",fill:"none",stroke:"rgba(45,100,180,0.6)",strokeWidth:"1"})})]}),A.jsx("rect",{width:"100%",height:"100%",fill:"url(#bpSmall)"}),A.jsx("rect",{width:"100%",height:"100%",fill:"url(#bpLarge)"}),[[15,15],[85,15],[15,85],[85,85],[50,50]].map(([s,e],t)=>A.jsxs("g",{transform:`translate(${s}%,${e}%)`,children:[A.jsx("line",{x1:"-8",y1:"0",x2:"8",y2:"0",stroke:"rgba(77,159,255,0.4)",strokeWidth:"1"}),A.jsx("line",{x1:"0",y1:"-8",x2:"0",y2:"8",stroke:"rgba(77,159,255,0.4)",strokeWidth:"1"}),A.jsx("circle",{r:"3",fill:"none",stroke:"rgba(77,159,255,0.3)",strokeWidth:"0.5"})]},t)),A.jsx("rect",{x:"10",y:"10",width:"180",height:"40",fill:"none",stroke:"rgba(77,159,255,0.2)",strokeWidth:"1"}),A.jsx("text",{x:"20",y:"30",fill:"rgba(77,159,255,0.25)",fontSize:"8",fontFamily:"'Share Tech Mono', monospace",children:"PICELL3D — PIXEL ART TO 3D CONVERTER"}),A.jsx("text",{x:"20",y:"42",fill:"rgba(77,159,255,0.2)",fontSize:"7",fontFamily:"'Share Tech Mono', monospace",children:"SCALE: 1:1  UNITS: PX  REV: MVP"})]})})}function yx(){return A.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:[A.jsx("div",{className:"absolute inset-0",style:{background:`
          radial-gradient(ellipse at 20% 30%, rgba(180,120,60,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(80,120,180,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(200,160,100,0.05) 0%, transparent 70%)
        `}}),A.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[A.jsx("ellipse",{cx:"15%",cy:"20%",rx:"120",ry:"80",fill:"rgba(180,120,80,0.06)"}),A.jsx("ellipse",{cx:"85%",cy:"75%",rx:"150",ry:"100",fill:"rgba(80,130,200,0.05)"}),A.jsx("ellipse",{cx:"50%",cy:"10%",rx:"200",ry:"40",fill:"rgba(160,100,60,0.04)"}),[...Array(8)].map((s,e)=>A.jsx("line",{x1:"0",y1:`${(e+1)*12}%`,x2:"100%",y2:`${(e+1)*12}%`,stroke:"rgba(160,120,80,0.08)",strokeWidth:"0.5",strokeDasharray:"4 8"},`h${e}`))]}),[{top:"-6px",left:"30%",rotate:"-8deg"},{top:"-6px",right:"25%",rotate:"5deg"},{bottom:"-6px",left:"40%",rotate:"3deg"}].map((s,e)=>A.jsx("div",{className:"absolute w-12 h-5 opacity-20",style:{...s,transform:`rotate(${s.rotate})`,background:"rgba(200,180,120,0.6)",borderRadius:"1px"}},e)),A.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-20",style:{fontFamily:"'Caveat', cursive",color:"#b05030",fontSize:"16px"},children:"Picell3D"})]})}const Sx=Object.freeze(Object.defineProperty({__proto__:null,THEMES:Wl,applyTheme:Ng,getTheme:yd},Symbol.toStringTag,{value:"Module"}));function Mx(){const{setActiveTool:s,undo:e,redo:t,toggleGrid:r}=Qt();ot.useEffect(()=>{function a(l){if(!(l.target.tagName==="INPUT"||l.target.tagName==="TEXTAREA")){if(l.ctrlKey||l.metaKey){l.key==="z"&&(l.preventDefault(),e()),l.key==="y"&&(l.preventDefault(),t()),l.key==="Z"&&(l.preventDefault(),t());return}switch(l.key.toLowerCase()){case"p":s("pencil");break;case"e":s("eraser");break;case"f":s("fill");break;case"g":r();break}}}return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[s,e,t,r])}const Ex=[{label:"8×8",w:8,h:8},{label:"16×16",w:16,h:16},{label:"32×32",w:32,h:32},{label:"48×48",w:48,h:48},{label:"64×64",w:64,h:64},{label:"128×64",w:128,h:64},{label:"128×128",w:128,h:128}];function wx({onClose:s}){const{canvasWidth:e,canvasHeight:t,resizeCanvas:r}=Qt(),[a,l]=ot.useState(e),[u,d]=ot.useState(t);function f(){const y=Math.max(4,Math.min(256,parseInt(a)||e)),M=Math.max(4,Math.min(256,parseInt(u)||t));r(y,M),s()}function p(y){l(y.w),d(y.h)}const m=a>e,g=u>t,_=a===e&&u===t;return A.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.6)"},onClick:y=>{y.target===y.currentTarget&&s()},children:A.jsxs("div",{className:"panel-riveted relative flex flex-col gap-4 p-5 rounded-lg border border-border shadow-brass w-80",style:{background:"var(--color-surface)"},children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsxs("div",{className:"flex items-center gap-2 text-sm font-theme text-text tracking-wide",children:[A.jsx(Tg,{size:15,className:"text-accent"}),"Canvas Size"]}),A.jsx("button",{className:"text-text-muted hover:text-text transition-colors",onClick:s,children:A.jsx(om,{size:16})})]}),A.jsxs("div",{className:"flex items-center gap-2 text-xs text-text-muted",children:[A.jsxs("span",{className:"font-mono",children:[e,"×",t]}),A.jsx(lv,{size:12}),A.jsxs("span",{className:`font-mono font-medium ${_?"text-text-muted":"text-accent"}`,children:[Math.max(4,Math.min(256,parseInt(a)||e)),"×",Math.max(4,Math.min(256,parseInt(u)||t))]})]}),A.jsxs("div",{children:[A.jsx("div",{className:"text-xs text-text-muted uppercase tracking-wide mb-2",children:"Presets"}),A.jsx("div",{className:"grid grid-cols-4 gap-1",children:Ex.map(y=>{const M=y.w===e&&y.h===t,w=y.w===a&&y.h===u;return A.jsx("button",{className:`text-xs py-1 px-1 rounded border transition-colors ${w?"border-accent bg-accent/20 text-accent":M?"border-border/80 text-text":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,onClick:()=>p(y),children:y.label},y.label)})})]}),A.jsxs("div",{children:[A.jsx("div",{className:"text-xs text-text-muted uppercase tracking-wide mb-2",children:"Custom"}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsxs("div",{className:"flex-1",children:[A.jsx("label",{className:"text-xs text-text-muted block mb-1",children:"Width"}),A.jsx("input",{type:"number",min:4,max:256,value:a,onChange:y=>l(parseInt(y.target.value)||4),className:`w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent`})]}),A.jsx(om,{size:12,className:"text-text-muted mt-4 flex-shrink-0"}),A.jsxs("div",{className:"flex-1",children:[A.jsx("label",{className:"text-xs text-text-muted block mb-1",children:"Height"}),A.jsx("input",{type:"number",min:4,max:256,value:u,onChange:y=>d(parseInt(y.target.value)||4),className:`w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent`})]})]})]}),A.jsx("div",{className:"text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5",style:{background:"color-mix(in srgb, var(--color-background) 60%, transparent)"},children:m||g?"Growing: existing content will be centered.":_?"Select a new size to resize the canvas.":"Shrinking: content is cropped from the right and bottom."}),A.jsxs("div",{className:"flex gap-2 justify-end pt-1",children:[A.jsx("button",{className:"text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors",onClick:s,children:"Cancel"}),A.jsx("button",{className:"btn-brass text-xs",disabled:_,onClick:f,style:{opacity:_?.5:1},children:"Apply"})]})]})})}const Tx=[{id:"pencil",Icon:Wv,label:"Pencil (P)",key:"P"},{id:"eraser",Icon:Sv,label:"Eraser (E)",key:"E"},{id:"fill",Icon:Iv,label:"Fill (F)",key:"F"}],Ax=[{id:"canvas-only",Icon:Qv,label:"2D only"},{id:"split",Icon:_v,label:"Split view"},{id:"preview-only",Icon:wg,label:"3D only"}];function bx({onExport:s}){const{activeTool:e,setActiveTool:t,pixelSize:r,setPixelSize:a,toggleGrid:l,showGrid:u,clearCanvas:d,undo:f,redo:p,viewMode:m,setViewMode:g}=Qt(),[_,y]=ot.useState(!1);return A.jsxs(A.Fragment,{children:[_&&A.jsx(wx,{onClose:()=>y(!1)}),A.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 border-b border-border",style:{background:"var(--color-surfaceAlt)"},children:[A.jsxs("div",{className:"flex items-center gap-2 mr-3 pr-3 border-r border-border",children:[A.jsx(mv,{size:16,className:"text-accent"}),A.jsx("span",{className:"font-theme text-text text-sm tracking-wider",children:"Picell3D"})]}),A.jsx("div",{className:"flex items-center gap-0.5 mr-2 pr-2 border-r border-border",children:Tx.map(M=>A.jsx(Cx,{Icon:M.Icon,label:M.label,active:e===M.id,onClick:()=>t(M.id)},M.id))}),A.jsxs("div",{className:"flex items-center gap-1 mr-2 pr-2 border-r border-border",children:[A.jsx("button",{className:"text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors",onClick:()=>a(r-2),title:"Zoom out",children:"−"}),A.jsxs("span",{className:"text-xs text-text-muted font-mono w-8 text-center",children:[r,"px"]}),A.jsx("button",{className:"text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors",onClick:()=>a(r+2),title:"Zoom in",children:"+"})]}),A.jsxs("button",{className:`flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors mr-2 ${u?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,onClick:l,title:"Toggle grid (G)",children:[A.jsx(Cv,{size:12})," Grid"]}),A.jsx("div",{className:"flex items-center gap-0.5 mr-2 pr-2 border-r border-border",children:Ax.map(({id:M,Icon:w,label:S})=>A.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center border transition-colors ${m===M?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,onClick:()=>g(M),title:S,children:A.jsx(w,{size:14})},M))}),A.jsxs("button",{className:"flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors mr-2",onClick:()=>y(!0),title:"Canvas size",children:[A.jsx(Tg,{size:12}),A.jsx("span",{children:"Size"})]}),A.jsxs("div",{className:"flex items-center gap-0.5 mr-auto",children:[A.jsx(zu,{Icon:tx,label:"Undo (Ctrl+Z)",onClick:f}),A.jsx(zu,{Icon:qv,label:"Redo (Ctrl+Y)",onClick:p}),A.jsx(zu,{Icon:Ag,label:"Clear canvas",onClick:d,danger:!0})]}),A.jsxs("button",{className:"btn-brass ml-auto flex items-center gap-1.5",onClick:s,title:"Export as PNG",children:[A.jsx(xv,{size:14}),A.jsx("span",{children:"Export PNG"})]})]})]})}function Cx({Icon:s,label:e,active:t,onClick:r}){return A.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center transition-all border ${t?"border-accent bg-accent/20 text-accent shadow-glow-accent":"border-transparent text-text-muted hover:border-border hover:text-text hover:bg-surface-alt"}`,title:e,onClick:r,children:A.jsx(s,{size:16})})}function zu({Icon:s,label:e,onClick:t,danger:r}){return A.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center border border-transparent transition-colors ${r?"text-text-muted hover:border-red-900 hover:bg-red-950 hover:text-red-400":"text-text-muted hover:text-text hover:bg-surface-alt hover:border-border"}`,title:e,onClick:t,children:A.jsx(s,{size:16})})}function Rx(){const{activeTheme:s,setActiveTheme:e}=Qt();return A.jsxs("div",{className:"flex items-center gap-1.5 px-2",children:[A.jsx("span",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Theme"}),A.jsx("div",{className:"flex gap-1",children:Object.values(Wl).map(t=>A.jsx("button",{className:`text-xs px-2 py-0.5 rounded border transition-all ${s===t.id?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,onClick:()=>e(t.id),title:t.name,children:t.name},t.id))})]})}function Px(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,activeTool:r,activeView:a,paintDepth:l}=Qt(),u=["P: Pencil","E: Eraser","F: Fill","G: Grid","Ctrl+Z: Undo"];return A.jsxs("div",{className:"flex items-center justify-between px-3 py-0.5 border-t border-border text-xs text-text-muted",style:{background:"var(--color-surface)"},children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsxs("span",{className:"font-mono",children:[s,"×",e,"×",t]}),A.jsx("span",{className:"capitalize",children:r}),A.jsx("span",{className:"text-accent capitalize",children:a}),A.jsxs("span",{children:["depth: ",l]})]}),A.jsxs("div",{className:"flex items-center gap-4",children:[A.jsx(Rx,{}),A.jsx("div",{className:"hidden lg:flex gap-3 opacity-50",children:u.map(d=>A.jsx("span",{children:d},d))})]})]})}function Lx(s,e,t,r){const a=[];let l=Math.abs(t-s),u=s<t?1:-1,d=-Math.abs(r-e),f=e<r?1:-1,p=l+d;for(;a.push({col:s,row:e}),!(s===t&&e===r);){const m=2*p;m>=d&&(p+=d,s+=u),m<=l&&(p+=l,e+=f)}return a}function Dx(s){const e=ot.useRef(!1),t=ot.useRef(null),r=ot.useCallback(f=>{const{pixelSize:p}=Qt.getState(),m=s.current.getBoundingClientRect(),g=Math.floor((f.clientX-m.left)/p),_=Math.floor((f.clientY-m.top)/p);return{col:g,row:_}},[]),a=ot.useCallback(({col:f,row:p})=>{const m=Qt.getState(),{activeTool:g,currentColor:_,activeView:y,canvasWidth:M,canvasHeight:w,depthDimension:S}=m,{w:x,h:D}=df(y,M,w,S);if(!(f<0||p<0||f>=x||p>=D))switch(g){case"pencil":m.paintAt(f,p,_);break;case"eraser":m.paintAt(f,p,"transparent");break}},[]),l=ot.useCallback(f=>{var g;if(f.button!==0)return;try{(g=s.current)==null||g.setPointerCapture(f.pointerId)}catch{}const p=Qt.getState(),m=r(f);if(p.activeTool==="fill"){p.floodFillVoxel(m.col,m.row,p.currentColor);return}e.current=!0,t.current=m,(p.activeTool==="pencil"||p.activeTool==="eraser")&&p.pushUndo(),a(m)},[r,a]),u=ot.useCallback(f=>{if(!e.current)return;const p=r(f),m=t.current;if(!m||p.col===m.col&&p.row===m.row)return;const g=Lx(m.col,m.row,p.col,p.row);for(const _ of g)a(_);t.current=p},[r,a]),d=ot.useCallback(()=>{e.current=!1,t.current=null},[]);return{onPointerDown:l,onPointerMove:u,onPointerUp:d}}function Bu(s){return getComputedStyle(document.documentElement).getPropertyValue(s).trim()}const Nx={front:"← left   right →",back:"← right  left →",left:"← front  back →",right:"← back   front →",top:"← left   right →",bottom:"← left   right →"},Ix=8;function Ux(){const s=ot.useRef(null),e=ot.useRef(null),{layers:t,pixelSize:r,canvasWidth:a,canvasHeight:l,depthDimension:u,showGrid:d,activeTool:f,activeView:p}=Qt(),m=u,{view2d:g,depthMap:_}=ot.useMemo(()=>{const D=uf(t,a,l,m);return{view2d:Lg(D,p,a,l,m),depthMap:lx(D,p,a,l,m)}},[t,p,a,l,m]),{w:y,h:M}=df(p,a,l,m),{onPointerDown:w,onPointerMove:S,onPointerUp:x}=Dx(e);return ot.useEffect(()=>{var J,$;const D=s.current;if(!D||!g.length)return;const P=D.getContext("2d"),C=y*r,Y=M*r;D.width=C,D.height=Y;const U=Bu("--color-surface")||"#1a130a",k=Bu("--color-canvasBg")||"#241a0c",X=Bu("--color-border")||"#7a5c2e",L=kx(p,a,l,m),R=r>=Ix&&_.length&&L>0;for(let re=0;re<M;re++)for(let de=0;de<y;de++){const ae=de*r,ce=re*r,B=((J=g[re])==null?void 0:J[de])??"transparent",ue=B!=="transparent";P.fillStyle=ue?B:(de+re)%2===0?U:k,P.fillRect(ae,ce,r,r),ue&&R&&Ox(P,ae,ce,r,_,re,de,L)}if(d&&r>=5){P.strokeStyle=X+"44",P.lineWidth=.5;for(let re=0;re<=y;re++)P.beginPath(),P.moveTo(re*r,0),P.lineTo(re*r,Y),P.stroke();for(let re=0;re<=M;re++)P.beginPath(),P.moveTo(0,re*r),P.lineTo(C,re*r),P.stroke()}if(r>=10&&_.length){const re=Math.max(7,Math.floor(r*.38));P.font=`bold ${re}px monospace`,P.textAlign="center",P.textBaseline="middle";for(let de=0;de<M;de++)for(let ae=0;ae<y;ae++){const ce=($=_[de])==null?void 0:$[ae];if(ce==null)continue;const B=ae*r+r/2,ue=de*r+r/2;P.fillStyle="rgba(0,0,0,0.55)",P.fillText(ce,B+.5,ue+.5),P.fillStyle="rgba(255,255,255,0.85)",P.fillText(ce,B,ue)}}const z=Nx[p];z&&C>60&&(P.font=`${Math.max(8,r*.55)}px monospace`,P.fillStyle=X+"aa",P.textAlign="left",P.textBaseline="top",P.fillText(z,4,4))},[g,_,y,M,r,d,p,a,l,m]),A.jsx("div",{className:"flex items-center justify-center w-full h-full overflow-auto p-4",children:A.jsx("div",{ref:e,className:"relative flex-shrink-0",style:{boxShadow:"0 0 0 2px var(--color-border), 0 0 0 4px var(--color-surface), 0 8px 40px rgba(0,0,0,0.9)",cursor:Fx(f)},onPointerDown:w,onPointerMove:S,onPointerUp:x,onPointerLeave:x,children:A.jsx("canvas",{ref:s,style:{width:y*r,height:M*r,imageRendering:"pixelated",display:"block"}})})})}function Fx(s){switch(s){case"pencil":return"crosshair";case"eraser":return"cell";case"fill":return"copy";default:return"crosshair"}}function kx(s,e,t,r){switch(s){case"left":case"right":return Math.max(1,e-1);case"top":case"bottom":return Math.max(1,t-1);default:return Math.max(1,r-1)}}function Ox(s,e,t,r,a,l,u,d){var w;const f=(w=a[l])==null?void 0:w[u];if(f==null)return;const p=Math.min(1,Math.max(0,f/d)),m=1-p,g=s.createLinearGradient(e,t,e+r,t+r);g.addColorStop(0,`rgba(255,255,255,${.16*m})`),g.addColorStop(.42,"rgba(255,255,255,0)"),g.addColorStop(.58,"rgba(0,0,0,0)"),g.addColorStop(1,`rgba(0,0,0,${.06+p*.16})`),s.fillStyle=g,s.fillRect(e,t,r,r);const _=Math.max(2,Math.floor(r*.72)),y=.02+p*.08,M={topLeft:ul(a,l,u,f,[[-1,0],[0,-1],[-1,-1]],d),topRight:ul(a,l,u,f,[[-1,0],[0,1],[-1,1]],d),bottomLeft:ul(a,l,u,f,[[1,0],[0,-1],[1,-1]],d),bottomRight:ul(a,l,u,f,[[1,0],[0,1],[1,1]],d)};dl(s,e,t,r,_,"top-left",(y+M.topLeft*.12)*.55),dl(s,e,t,r,_,"top-right",(y+M.topRight*.14)*.8),dl(s,e,t,r,_,"bottom-left",(y+M.bottomLeft*.14)*.8),dl(s,e,t,r,_,"bottom-right",y+M.bottomRight*.18+p*.1)}function ul(s,e,t,r,a,l){const u=a.map(([f,p])=>{var m;return(m=s[e+f])==null?void 0:m[t+p]}).filter(f=>f!=null);if(!u.length||l<=0)return 0;const d=Math.min(...u);return Math.max(0,r-d)/l}function dl(s,e,t,r,a,l,u){if(u<=.01)return;let d=e,f=t,p=e,m=t;l.includes("right")&&(d=e+r,p=e+r-a),l.includes("bottom")&&(f=t+r,m=t+r-a);const g=s.createRadialGradient(d,f,0,d,f,a);g.addColorStop(0,`rgba(0,0,0,${Math.min(.38,u)})`),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(p,m,a,a)}const zx="modulepreload",Bx=function(s){return"/"+s},pm={},Hx=function(e,t,r){let a=Promise.resolve();if(t&&t.length>0){let u=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=u(t.map(p=>{if(p=Bx(p),p in pm)return;pm[p]=!0;const m=p.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":zx,m||(_.as="script"),_.crossOrigin="",_.href=p,f&&_.setAttribute("nonce",f),document.head.appendChild(_),m)return new Promise((y,M)=>{_.addEventListener("load",y),_.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return a.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="170",$s={ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,mm=1,Gx=2,Ig=1,Wx=2,Wi=3,Cr=0,Fn=1,Xi=2,br=0,Ks=1,gm=2,_m=3,vm=4,jx=5,Jr=100,Xx=101,Yx=102,qx=103,$x=104,Kx=200,Zx=201,Qx=202,Jx=203,Sd=204,Md=205,ey=206,ty=207,ny=208,iy=209,ry=210,sy=211,oy=212,ay=213,ly=214,Ed=0,wd=1,Td=2,Js=3,Ad=4,bd=5,Cd=6,Rd=7,pf=0,cy=1,uy=2,$i=0,dy=1,fy=2,hy=3,py=4,my=5,gy=6,_y=7,Ug=300,eo=301,to=302,Pd=303,Ld=304,$l=306,Dd=1e3,ts=1001,Nd=1002,mi=1003,vy=1004,fl=1005,Ti=1006,Hu=1007,ns=1008,Zi=1009,Fg=1010,kg=1011,Jo=1012,mf=1013,is=1014,Yi=1015,ea=1016,gf=1017,_f=1018,no=1020,Og=35902,zg=1021,Bg=1022,hi=1023,Hg=1024,Vg=1025,Zs=1026,io=1027,Gg=1028,vf=1029,Wg=1030,xf=1031,yf=1033,kl=33776,Ol=33777,zl=33778,Bl=33779,Id=35840,Ud=35841,Fd=35842,kd=35843,Od=36196,zd=37492,Bd=37496,Hd=37808,Vd=37809,Gd=37810,Wd=37811,jd=37812,Xd=37813,Yd=37814,qd=37815,$d=37816,Kd=37817,Zd=37818,Qd=37819,Jd=37820,ef=37821,Hl=36492,tf=36494,nf=36495,jg=36283,rf=36284,sf=36285,of=36286,xy=3200,yy=3201,Xg=0,Sy=1,Ar="",ei="srgb",so="srgb-linear",Kl="linear",Rt="srgb",Ds=7680,xm=519,My=512,Ey=513,wy=514,Yg=515,Ty=516,Ay=517,by=518,Cy=519,ym=35044,Sm="300 es",qi=2e3,jl=2001;class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=Math.PI/180,af=180/Math.PI;function ta(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function Tn(s,e,t){return Math.max(e,Math.min(t,s))}function Ry(s,e){return(s%e+e)%e}function Vu(s,e,t){return(1-t)*s+t*e}function Ho(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Py={DEG2RAD:Vl};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,a,l,u,d,f,p){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,f,p)}set(e,t,r,a,l,u,d,f,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=r,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[3],f=r[6],p=r[1],m=r[4],g=r[7],_=r[2],y=r[5],M=r[8],w=a[0],S=a[3],x=a[6],D=a[1],P=a[4],C=a[7],Y=a[2],U=a[5],k=a[8];return l[0]=u*w+d*D+f*Y,l[3]=u*S+d*P+f*U,l[6]=u*x+d*C+f*k,l[1]=p*w+m*D+g*Y,l[4]=p*S+m*P+g*U,l[7]=p*x+m*C+g*k,l[2]=_*w+y*D+M*Y,l[5]=_*S+y*P+M*U,l[8]=_*x+y*C+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8];return t*u*m-t*d*p-r*l*m+r*d*f+a*l*p-a*u*f}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],g=m*u-d*p,_=d*f-m*l,y=p*l-u*f,M=t*g+r*_+a*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=g*w,e[1]=(a*p-m*r)*w,e[2]=(d*r-a*u)*w,e[3]=_*w,e[4]=(m*t-a*f)*w,e[5]=(a*l-d*t)*w,e[6]=y*w,e[7]=(r*f-p*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*d)+u+e,-a*p,a*f,-a*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new lt;function qg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ly(){const s=Xl("canvas");return s.style.display="block",s}const Mm={};function $o(s){s in Mm||(Mm[s]=!0,console.warn(s))}function Dy(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function Ny(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Iy(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:so,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Rt&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Rt&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ar?Kl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Em=[.64,.33,.3,.6,.15,.06],wm=[.2126,.7152,.0722],Tm=[.3127,.329],Am=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bm=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[so]:{primaries:Em,whitePoint:Tm,transfer:Kl,toXYZ:Am,fromXYZ:bm,luminanceCoefficients:wm,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:Em,whitePoint:Tm,transfer:Rt,toXYZ:Am,fromXYZ:bm,luminanceCoefficients:wm,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}});let Ns;class Uy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=Xl("canvas")),Ns.width=e.width,Ns.height=e.height;const r=Ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Ki(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ki(t[r]/255)*255):t[r]=Ki(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fy=0;class $g{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=ta(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(Wu(a[u].image)):l.push(Wu(a[u]))}else l=Wu(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Wu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Uy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ky=0;class kn extends os{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,r=ts,a=ts,l=Ti,u=ns,d=hi,f=Zi,p=kn.DEFAULT_ANISOTROPY,m=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=ta(),this.name="",this.source=new $g(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dd:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dd:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Ug;kn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const f=e.elements,p=f[0],m=f[4],g=f[8],_=f[1],y=f[5],M=f[9],w=f[2],S=f[6],x=f[10];if(Math.abs(m-_)<.01&&Math.abs(g-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+w)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,C=(y+1)/2,Y=(x+1)/2,U=(m+_)/4,k=(g+w)/4,X=(M+S)/4;return P>C&&P>Y?P<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(P),a=U/r,l=k/r):C>Y?C<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),r=U/a,l=X/a):Y<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(Y),r=k/l,a=X/l),this.set(r,a,l,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-w)*(g-w)+(_-m)*(_-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-w)/D,this.z=(_-m)/D,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oy extends os{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new kn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $g(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends Oy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Kg extends kn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=mi,this.minFilter=mi,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zy extends kn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=mi,this.minFilter=mi,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,d){let f=r[a+0],p=r[a+1],m=r[a+2],g=r[a+3];const _=l[u+0],y=l[u+1],M=l[u+2],w=l[u+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(d===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=w;return}if(g!==w||f!==_||p!==y||m!==M){let S=1-d;const x=f*_+p*y+m*M+g*w,D=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const Y=Math.sqrt(P),U=Math.atan2(Y,x*D);S=Math.sin(S*U)/Y,d=Math.sin(d*U)/Y}const C=d*D;if(f=f*S+_*C,p=p*S+y*C,m=m*S+M*C,g=g*S+w*C,S===1-d){const Y=1/Math.sqrt(f*f+p*p+m*m+g*g);f*=Y,p*=Y,m*=Y,g*=Y}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,l,u){const d=r[a],f=r[a+1],p=r[a+2],m=r[a+3],g=l[u],_=l[u+1],y=l[u+2],M=l[u+3];return e[t]=d*M+m*g+f*y-p*_,e[t+1]=f*M+m*_+p*g-d*y,e[t+2]=p*M+m*y+d*_-f*g,e[t+3]=m*M-d*g-f*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(r/2),m=d(a/2),g=d(l/2),_=f(r/2),y=f(a/2),M=f(l/2);switch(u){case"XYZ":this._x=_*m*g+p*y*M,this._y=p*y*g-_*m*M,this._z=p*m*M+_*y*g,this._w=p*m*g-_*y*M;break;case"YXZ":this._x=_*m*g+p*y*M,this._y=p*y*g-_*m*M,this._z=p*m*M-_*y*g,this._w=p*m*g+_*y*M;break;case"ZXY":this._x=_*m*g-p*y*M,this._y=p*y*g+_*m*M,this._z=p*m*M+_*y*g,this._w=p*m*g-_*y*M;break;case"ZYX":this._x=_*m*g-p*y*M,this._y=p*y*g+_*m*M,this._z=p*m*M-_*y*g,this._w=p*m*g+_*y*M;break;case"YZX":this._x=_*m*g+p*y*M,this._y=p*y*g+_*m*M,this._z=p*m*M-_*y*g,this._w=p*m*g-_*y*M;break;case"XZY":this._x=_*m*g-p*y*M,this._y=p*y*g-_*m*M,this._z=p*m*M+_*y*g,this._w=p*m*g+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],m=t[6],g=t[10],_=r+d+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-f)*y,this._y=(l-p)*y,this._z=(u-a)*y}else if(r>d&&r>g){const y=2*Math.sqrt(1+r-d-g);this._w=(m-f)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(l+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-r-g);this._w=(l-p)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(f+m)/y}else{const y=2*Math.sqrt(1+g-r-d);this._w=(u-a)/y,this._x=(l+p)/y,this._y=(f+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,m=t._w;return this._x=r*m+u*d+a*p-l*f,this._y=a*m+u*f+l*d-r*p,this._z=l*m+u*p+r*f-a*d,this._w=u*m-r*d-a*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*r+t*this._x,this._y=y*a+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,d),g=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=u*g+this._w*_,this._x=r*g+this._x*_,this._y=a*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*a-d*r),m=2*(d*t-l*a),g=2*(l*r-u*t);return this.x=t+f*p+u*g-d*m,this.y=r+f*m+d*p-l*g,this.z=a+f*g+l*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=a*f-l*d,this.y=l*u-r*f,this.z=r*d-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ju=new Z,Cm=new ss;class na{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ci):ci.fromBufferAttribute(l,u),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hl.copy(r.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),pl.subVectors(this.max,Vo),Is.subVectors(e.a,Vo),Us.subVectors(e.b,Vo),Fs.subVectors(e.c,Vo),xr.subVectors(Us,Is),yr.subVectors(Fs,Us),Wr.subVectors(Is,Fs);let t=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Wr.z,Wr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Wr.z,0,-Wr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Wr.y,Wr.x,0];return!Xu(t,Is,Us,Fs,pl)||(t=[1,0,0,0,1,0,0,0,1],!Xu(t,Is,Us,Fs,pl))?!1:(ml.crossVectors(xr,yr),t=[ml.x,ml.y,ml.z],Xu(t,Is,Us,Fs,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ci=new Z,hl=new na,Is=new Z,Us=new Z,Fs=new Z,xr=new Z,yr=new Z,Wr=new Z,Vo=new Z,pl=new Z,ml=new Z,jr=new Z;function Xu(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){jr.fromArray(s,l);const d=a.x*Math.abs(jr.x)+a.y*Math.abs(jr.y)+a.z*Math.abs(jr.z),f=e.dot(jr),p=t.dot(jr),m=r.dot(jr);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>d)return!1}return!0}const By=new na,Go=new Z,Yu=new Z;class Zl{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):By.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Go,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Yu)),this.expandByPoint(Go.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new Z,qu=new Z,gl=new Z,Sr=new Z,$u=new Z,_l=new Z,Ku=new Z;class Sf{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){qu.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(qu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(gl),d=Sr.dot(this.direction),f=-Sr.dot(gl),p=Sr.lengthSq(),m=Math.abs(1-u*u);let g,_,y,M;if(m>0)if(g=u*f-d,_=u*d-f,M=l*m,g>=0)if(_>=-M)if(_<=M){const w=1/m;g*=w,_*=w,y=g*(g+u*_+2*d)+_*(u*g+_+2*f)+p}else _=l,g=Math.max(0,-(u*_+d)),y=-g*g+_*(_+2*f)+p;else _=-l,g=Math.max(0,-(u*_+d)),y=-g*g+_*(_+2*f)+p;else _<=-M?(g=Math.max(0,-(-u*l+d)),_=g>0?-l:Math.min(Math.max(-l,-f),l),y=-g*g+_*(_+2*f)+p):_<=M?(g=0,_=Math.min(Math.max(-l,-f),l),y=_*(_+2*f)+p):(g=Math.max(0,-(u*l+d)),_=g>0?l:Math.min(Math.max(-l,-f),l),y=-g*g+_*(_+2*f)+p);else _=u>0?-l:l,g=Math.max(0,-(u*_+d)),y=-g*g+_*(_+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(qu).addScaledVector(gl,_),y}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const r=Bi.dot(this.direction),a=Bi.dot(Bi)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,d,f;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),m>=0?(l=(e.min.y-_.y)*m,u=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,u=(e.min.y-_.y)*m),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),g>=0?(d=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(d=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),r>f||d>a)||((d>r||r!==r)&&(r=d),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,r,a,l){$u.subVectors(t,e),_l.subVectors(r,e),Ku.crossVectors($u,_l);let u=this.direction.dot(Ku),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Sr.subVectors(this.origin,e);const f=d*this.direction.dot(_l.crossVectors(Sr,_l));if(f<0)return null;const p=d*this.direction.dot($u.cross(Sr));if(p<0||f+p>u)return null;const m=-d*Sr.dot(Ku);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,a,l,u,d,f,p,m,g,_,y,M,w,S){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,f,p,m,g,_,y,M,w,S)}set(e,t,r,a,l,u,d,f,p,m,g,_,y,M,w,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=a,x[1]=l,x[5]=u,x[9]=d,x[13]=f,x[2]=p,x[6]=m,x[10]=g,x[14]=_,x[3]=y,x[7]=M,x[11]=w,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(a),p=Math.sin(a),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const _=u*m,y=u*g,M=d*m,w=d*g;t[0]=f*m,t[4]=-f*g,t[8]=p,t[1]=y+M*p,t[5]=_-w*p,t[9]=-d*f,t[2]=w-_*p,t[6]=M+y*p,t[10]=u*f}else if(e.order==="YXZ"){const _=f*m,y=f*g,M=p*m,w=p*g;t[0]=_+w*d,t[4]=M*d-y,t[8]=u*p,t[1]=u*g,t[5]=u*m,t[9]=-d,t[2]=y*d-M,t[6]=w+_*d,t[10]=u*f}else if(e.order==="ZXY"){const _=f*m,y=f*g,M=p*m,w=p*g;t[0]=_-w*d,t[4]=-u*g,t[8]=M+y*d,t[1]=y+M*d,t[5]=u*m,t[9]=w-_*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const _=u*m,y=u*g,M=d*m,w=d*g;t[0]=f*m,t[4]=M*p-y,t[8]=_*p+w,t[1]=f*g,t[5]=w*p+_,t[9]=y*p-M,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const _=u*f,y=u*p,M=d*f,w=d*p;t[0]=f*m,t[4]=w-_*g,t[8]=M*g+y,t[1]=g,t[5]=u*m,t[9]=-d*m,t[2]=-p*m,t[6]=y*g+M,t[10]=_-w*g}else if(e.order==="XZY"){const _=u*f,y=u*p,M=d*f,w=d*p;t[0]=f*m,t[4]=-g,t[8]=p*m,t[1]=_*g+w,t[5]=u*m,t[9]=y*g-M,t[2]=M*g-y,t[6]=d*m,t[10]=w*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hy,e,Vy)}lookAt(e,t,r){const a=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Mr.crossVectors(r,Vn),Mr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Mr.crossVectors(r,Vn)),Mr.normalize(),vl.crossVectors(Vn,Mr),a[0]=Mr.x,a[4]=vl.x,a[8]=Vn.x,a[1]=Mr.y,a[5]=vl.y,a[9]=Vn.y,a[2]=Mr.z,a[6]=vl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[4],f=r[8],p=r[12],m=r[1],g=r[5],_=r[9],y=r[13],M=r[2],w=r[6],S=r[10],x=r[14],D=r[3],P=r[7],C=r[11],Y=r[15],U=a[0],k=a[4],X=a[8],L=a[12],R=a[1],z=a[5],J=a[9],$=a[13],re=a[2],de=a[6],ae=a[10],ce=a[14],B=a[3],ue=a[7],le=a[11],F=a[15];return l[0]=u*U+d*R+f*re+p*B,l[4]=u*k+d*z+f*de+p*ue,l[8]=u*X+d*J+f*ae+p*le,l[12]=u*L+d*$+f*ce+p*F,l[1]=m*U+g*R+_*re+y*B,l[5]=m*k+g*z+_*de+y*ue,l[9]=m*X+g*J+_*ae+y*le,l[13]=m*L+g*$+_*ce+y*F,l[2]=M*U+w*R+S*re+x*B,l[6]=M*k+w*z+S*de+x*ue,l[10]=M*X+w*J+S*ae+x*le,l[14]=M*L+w*$+S*ce+x*F,l[3]=D*U+P*R+C*re+Y*B,l[7]=D*k+P*z+C*de+Y*ue,l[11]=D*X+P*J+C*ae+Y*le,l[15]=D*L+P*$+C*ce+Y*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],m=e[2],g=e[6],_=e[10],y=e[14],M=e[3],w=e[7],S=e[11],x=e[15];return M*(+l*f*g-a*p*g-l*d*_+r*p*_+a*d*y-r*f*y)+w*(+t*f*y-t*p*_+l*u*_-a*u*y+a*p*m-l*f*m)+S*(+t*p*g-t*d*y-l*u*g+r*u*y+l*d*m-r*p*m)+x*(-a*d*m-t*f*g+t*d*_+a*u*g-r*u*_+r*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],g=e[9],_=e[10],y=e[11],M=e[12],w=e[13],S=e[14],x=e[15],D=g*S*p-w*_*p+w*f*y-d*S*y-g*f*x+d*_*x,P=M*_*p-m*S*p-M*f*y+u*S*y+m*f*x-u*_*x,C=m*w*p-M*g*p+M*d*y-u*w*y-m*d*x+u*g*x,Y=M*g*f-m*w*f-M*d*_+u*w*_+m*d*S-u*g*S,U=t*D+r*P+a*C+l*Y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return e[0]=D*k,e[1]=(w*_*l-g*S*l-w*a*y+r*S*y+g*a*x-r*_*x)*k,e[2]=(d*S*l-w*f*l+w*a*p-r*S*p-d*a*x+r*f*x)*k,e[3]=(g*f*l-d*_*l-g*a*p+r*_*p+d*a*y-r*f*y)*k,e[4]=P*k,e[5]=(m*S*l-M*_*l+M*a*y-t*S*y-m*a*x+t*_*x)*k,e[6]=(M*f*l-u*S*l-M*a*p+t*S*p+u*a*x-t*f*x)*k,e[7]=(u*_*l-m*f*l+m*a*p-t*_*p-u*a*y+t*f*y)*k,e[8]=C*k,e[9]=(M*g*l-m*w*l-M*r*y+t*w*y+m*r*x-t*g*x)*k,e[10]=(u*w*l-M*d*l+M*r*p-t*w*p-u*r*x+t*d*x)*k,e[11]=(m*d*l-u*g*l-m*r*p+t*g*p+u*r*y-t*d*y)*k,e[12]=Y*k,e[13]=(m*w*a-M*g*a+M*r*_-t*w*_-m*r*S+t*g*S)*k,e[14]=(M*d*a-u*w*a-M*r*f+t*w*f+u*r*S-t*d*S)*k,e[15]=(u*g*a-m*d*a+m*r*f-t*g*f-u*r*_+t*d*_)*k,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,d=e.y,f=e.z,p=l*u,m=l*d;return this.set(p*u+r,p*d-a*f,p*f+a*d,0,p*d+a*f,m*d+r,m*f-a*u,0,p*f-a*d,m*f+a*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,m=u+u,g=d+d,_=l*p,y=l*m,M=l*g,w=u*m,S=u*g,x=d*g,D=f*p,P=f*m,C=f*g,Y=r.x,U=r.y,k=r.z;return a[0]=(1-(w+x))*Y,a[1]=(y+C)*Y,a[2]=(M-P)*Y,a[3]=0,a[4]=(y-C)*U,a[5]=(1-(_+x))*U,a[6]=(S+D)*U,a[7]=0,a[8]=(M+P)*k,a[9]=(S-D)*k,a[10]=(1-(_+w))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=ks.set(a[0],a[1],a[2]).length();const u=ks.set(a[4],a[5],a[6]).length(),d=ks.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const p=1/l,m=1/u,g=1/d;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=m,ui.elements[5]*=m,ui.elements[6]*=m,ui.elements[8]*=g,ui.elements[9]*=g,ui.elements[10]*=g,t.setFromRotationMatrix(ui),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,a,l,u,d=qi){const f=this.elements,p=2*l/(t-e),m=2*l/(r-a),g=(t+e)/(t-e),_=(r+a)/(r-a);let y,M;if(d===qi)y=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(d===jl)y=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,a,l,u,d=qi){const f=this.elements,p=1/(t-e),m=1/(r-a),g=1/(u-l),_=(t+e)*p,y=(r+a)*m;let M,w;if(d===qi)M=(u+l)*g,w=-2*g;else if(d===jl)M=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=w,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ks=new Z,ui=new Ht,Hy=new Z(0,0,0),Vy=new Z(1,1,1),Mr=new Z,vl=new Z,Vn=new Z,Rm=new Ht,Pm=new ss;class bi{constructor(e=0,t=0,r=0,a=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],f=a[1],p=a[5],m=a[9],g=a[2],_=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Tn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pm.setFromEuler(this),this.setFromQuaternion(Pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const Lm=new Z,Os=new ss,Hi=new Ht,xl=new Z,Wo=new Z,Wy=new Z,jy=new ss,Dm=new Z(1,0,0),Nm=new Z(0,1,0),Im=new Z(0,0,1),Um={type:"added"},Xy={type:"removed"},zs={type:"childadded",child:null},Zu={type:"childremoved",child:null};class ln extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new Z,t=new bi,r=new ss,a=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new lt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Dm,e)}rotateY(e){return this.rotateOnAxis(Nm,e)}rotateZ(e){return this.rotateOnAxis(Im,e)}translateOnAxis(e,t){return Lm.copy(e).applyQuaternion(this.quaternion),this.position.add(Lm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dm,e)}translateY(e){return this.translateOnAxis(Nm,e)}translateZ(e){return this.translateOnAxis(Im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?xl.copy(e):xl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Wo,xl,this.up):Hi.lookAt(xl,Wo,this.up),this.quaternion.setFromRotationMatrix(Hi),a&&(Hi.extractRotation(a.matrixWorld),Os.setFromRotationMatrix(Hi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Um),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xy),Zu.child=e,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Um),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,Wy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const g=f[p];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];a.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),m=u(e.images),g=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=a,r;function u(d){const f=[];for(const p in d){const m=d[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ln.DEFAULT_UP=new Z(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new Z,Vi=new Z,Qu=new Z,Gi=new Z,Bs=new Z,Hs=new Z,Fm=new Z,Ju=new Z,ed=new Z,td=new Z,nd=new Gt,id=new Gt,rd=new Gt;class fi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),di.subVectors(e,t),a.cross(di);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){di.subVectors(a,t),Vi.subVectors(r,t),Qu.subVectors(e,t);const u=di.dot(di),d=di.dot(Vi),f=di.dot(Qu),p=Vi.dot(Vi),m=Vi.dot(Qu),g=u*p-d*d;if(g===0)return l.set(0,0,0),null;const _=1/g,y=(p*f-d*m)*_,M=(u*m-d*f)*_;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,r,a,l,u,d,f){return this.getBarycoord(e,t,r,a,Gi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Gi.x),f.addScaledVector(u,Gi.y),f.addScaledVector(d,Gi.z),f)}static getInterpolatedAttribute(e,t,r,a,l,u){return nd.setScalar(0),id.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(e,t),id.fromBufferAttribute(e,r),rd.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(nd,l.x),u.addScaledVector(id,l.y),u.addScaledVector(rd,l.z),u}static isFrontFacing(e,t,r,a){return di.subVectors(r,t),Vi.subVectors(e,t),di.cross(Vi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),di.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,d;Bs.subVectors(a,r),Hs.subVectors(l,r),Ju.subVectors(e,r);const f=Bs.dot(Ju),p=Hs.dot(Ju);if(f<=0&&p<=0)return t.copy(r);ed.subVectors(e,a);const m=Bs.dot(ed),g=Hs.dot(ed);if(m>=0&&g<=m)return t.copy(a);const _=f*g-m*p;if(_<=0&&f>=0&&m<=0)return u=f/(f-m),t.copy(r).addScaledVector(Bs,u);td.subVectors(e,l);const y=Bs.dot(td),M=Hs.dot(td);if(M>=0&&y<=M)return t.copy(l);const w=y*p-f*M;if(w<=0&&p>=0&&M<=0)return d=p/(p-M),t.copy(r).addScaledVector(Hs,d);const S=m*M-y*g;if(S<=0&&g-m>=0&&y-M>=0)return Fm.subVectors(l,a),d=(g-m)/(g-m+(y-M)),t.copy(a).addScaledVector(Fm,d);const x=1/(S+w+_);return u=w*x,d=_*x,t.copy(r).addScaledVector(Bs,u).addScaledVector(Hs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},yl={h:0,s:0,l:0};function sd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class vt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=St.workingColorSpace){return this.r=e,this.g=t,this.b=r,St.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=St.workingColorSpace){if(e=Ry(e,1),t=Tn(t,0,1),r=Tn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=sd(u,l,e+1/3),this.g=sd(u,l,e),this.b=sd(u,l,e-1/3)}return St.toWorkingColorSpace(this,a),this}setStyle(e,t=ei){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const r=Qg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return St.fromWorkingColorSpace(gn.copy(this),e),Math.round(Tn(gn.r*255,0,255))*65536+Math.round(Tn(gn.g*255,0,255))*256+Math.round(Tn(gn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(gn.copy(this),t);const r=gn.r,a=gn.g,l=gn.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let f,p;const m=(d+u)/2;if(d===u)f=0,p=0;else{const g=u-d;switch(p=m<=.5?g/(u+d):g/(2-u-d),u){case r:f=(a-l)/g+(a<l?6:0);break;case a:f=(l-r)/g+2;break;case l:f=(r-a)/g+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=ei){St.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,r=gn.g,a=gn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(yl);const r=Vu(Er.h,yl.h,t),a=Vu(Er.s,yl.s,t),l=Vu(Er.l,yl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new vt;vt.NAMES=Qg;let Yy=0;class oo extends os{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=ta(),this.name="",this.blending=Ks,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Sd&&(r.blendSrc=this.blendSrc),this.blendDst!==Md&&(r.blendDst=this.blendDst),this.blendEquation!==Jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mf extends oo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new Z,Sl=new at;class Ai{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=ym,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ho(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),a=In(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),a=In(a,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ym&&(e.usage=this.usage),e}}class Jg extends Ai{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class e0 extends Ai{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class _n extends Ai{constructor(e,t,r){super(new Float32Array(e),t,r)}}let qy=0;const Jn=new Ht,od=new ln,Vs=new Z,Gn=new na,jo=new na,sn=new Z;class gi extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qg(e)?e0:Jg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,r){return Jn.makeTranslation(e,t,r),this.applyMatrix4(Jn),this}scale(e,t,r){return Jn.makeScale(e,t,r),this.applyMatrix4(Jn),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new _n(r,3))}else{for(let r=0,a=t.count;r<a;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(sn.addVectors(Gn.min,jo.min),Gn.expandByPoint(sn),sn.addVectors(Gn.max,jo.max),Gn.expandByPoint(sn)):(Gn.expandByPoint(jo.min),Gn.expandByPoint(jo.max))}Gn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)sn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(sn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,m=d.count;p<m;p++)sn.fromBufferAttribute(d,p),f&&(Vs.fromBufferAttribute(e,p),sn.add(Vs)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let X=0;X<r.count;X++)d[X]=new Z,f[X]=new Z;const p=new Z,m=new Z,g=new Z,_=new at,y=new at,M=new at,w=new Z,S=new Z;function x(X,L,R){p.fromBufferAttribute(r,X),m.fromBufferAttribute(r,L),g.fromBufferAttribute(r,R),_.fromBufferAttribute(l,X),y.fromBufferAttribute(l,L),M.fromBufferAttribute(l,R),m.sub(p),g.sub(p),y.sub(_),M.sub(_);const z=1/(y.x*M.y-M.x*y.y);isFinite(z)&&(w.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(z),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(z),d[X].add(w),d[L].add(w),d[R].add(w),f[X].add(S),f[L].add(S),f[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,L=D.length;X<L;++X){const R=D[X],z=R.start,J=R.count;for(let $=z,re=z+J;$<re;$+=3)x(e.getX($+0),e.getX($+1),e.getX($+2))}const P=new Z,C=new Z,Y=new Z,U=new Z;function k(X){Y.fromBufferAttribute(a,X),U.copy(Y);const L=d[X];P.copy(L),P.sub(Y.multiplyScalar(Y.dot(L))).normalize(),C.crossVectors(U,L);const z=C.dot(f[X])<0?-1:1;u.setXYZW(X,P.x,P.y,P.z,z)}for(let X=0,L=D.length;X<L;++X){const R=D[X],z=R.start,J=R.count;for(let $=z,re=z+J;$<re;$+=3)k(e.getX($+0)),k(e.getX($+1)),k(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const a=new Z,l=new Z,u=new Z,d=new Z,f=new Z,p=new Z,m=new Z,g=new Z;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),w=e.getX(_+1),S=e.getX(_+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,S),m.subVectors(u,l),g.subVectors(a,l),m.cross(g),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,S),d.add(m),f.add(m),p.add(m),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,y=t.count;_<y;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),m.subVectors(u,l),g.subVectors(a,l),m.cross(g),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(d,f){const p=d.array,m=d.itemSize,g=d.normalized,_=new p.constructor(f.length*m);let y=0,M=0;for(let w=0,S=f.length;w<S;w++){d.isInterleavedBufferAttribute?y=f[w]*d.data.stride+d.offset:y=f[w]*m;for(let x=0;x<m;x++)_[M++]=p[y++]}return new Ai(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,r=this.index.array,a=this.attributes;for(const d in a){const f=a[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let m=0,g=p.length;m<g;m++){const _=p[m],y=e(_,r);f.push(y)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let g=0,_=p.length;g<_;g++){const y=p[g];m.push(y.toJSON(e.data))}m.length>0&&(a[f]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],g=l[p];for(let _=0,y=g.length;_<y;_++)m.push(g[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const km=new Ht,Xr=new Sf,Ml=new Zl,Om=new Z,El=new Z,wl=new Z,Tl=new Z,ad=new Z,Al=new Z,zm=new Z,bl=new Z;class pi extends ln{constructor(e=new gi,t=new Mf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Al.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const m=d[f],g=l[f];m!==0&&(ad.fromBufferAttribute(g,e),u?Al.addScaledVector(ad,m):Al.addScaledVector(ad.sub(t),m))}t.add(Al)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(l),Xr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Ml,Om)===null||Xr.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(km.copy(l).invert(),Xr.copy(e.ray).applyMatrix4(km),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,_=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,w=_.length;M<w;M++){const S=_[M],x=u[S.materialIndex],D=Math.max(S.start,y.start),P=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=D,Y=P;C<Y;C+=3){const U=d.getX(C),k=d.getX(C+1),X=d.getX(C+2);a=Cl(this,x,e,r,p,m,g,U,k,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let S=M,x=w;S<x;S+=3){const D=d.getX(S),P=d.getX(S+1),C=d.getX(S+2);a=Cl(this,u,e,r,p,m,g,D,P,C),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,w=_.length;M<w;M++){const S=_[M],x=u[S.materialIndex],D=Math.max(S.start,y.start),P=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=D,Y=P;C<Y;C+=3){const U=C,k=C+1,X=C+2;a=Cl(this,x,e,r,p,m,g,U,k,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),w=Math.min(f.count,y.start+y.count);for(let S=M,x=w;S<x;S+=3){const D=S,P=S+1,C=S+2;a=Cl(this,u,e,r,p,m,g,D,P,C),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function $y(s,e,t,r,a,l,u,d){let f;if(e.side===Fn?f=r.intersectTriangle(u,l,a,!0,d):f=r.intersectTriangle(a,l,u,e.side===Cr,d),f===null)return null;bl.copy(d),bl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(bl);return p<t.near||p>t.far?null:{distance:p,point:bl.clone(),object:s}}function Cl(s,e,t,r,a,l,u,d,f,p){s.getVertexPosition(d,El),s.getVertexPosition(f,wl),s.getVertexPosition(p,Tl);const m=$y(s,e,t,r,El,wl,Tl,zm);if(m){const g=new Z;fi.getBarycoord(zm,El,wl,Tl,g),a&&(m.uv=fi.getInterpolatedAttribute(a,d,f,p,g,new at)),l&&(m.uv1=fi.getInterpolatedAttribute(l,d,f,p,g,new at)),u&&(m.normal=fi.getInterpolatedAttribute(u,d,f,p,g,new Z),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const _={a:d,b:f,c:p,normal:new Z,materialIndex:0};fi.getNormal(El,wl,Tl,_.normal),m.face=_,m.barycoord=g}return m}class ia extends gi{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],m=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,a,u,2),M("x","z","y",1,-1,e,r,-t,a,u,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(f),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(m,3)),this.setAttribute("uv",new _n(g,2));function M(w,S,x,D,P,C,Y,U,k,X,L){const R=C/k,z=Y/X,J=C/2,$=Y/2,re=U/2,de=k+1,ae=X+1;let ce=0,B=0;const ue=new Z;for(let le=0;le<ae;le++){const F=le*z-$;for(let se=0;se<de;se++){const Ne=se*R-J;ue[w]=Ne*D,ue[S]=F*P,ue[x]=re,p.push(ue.x,ue.y,ue.z),ue[w]=0,ue[S]=0,ue[x]=U>0?1:-1,m.push(ue.x,ue.y,ue.z),g.push(se/k),g.push(1-le/X),ce+=1}}for(let le=0;le<X;le++)for(let F=0;F<k;F++){const se=_+F+de*le,Ne=_+F+de*(le+1),ee=_+(F+1)+de*(le+1),fe=_+(F+1)+de*le;f.push(se,Ne,fe),f.push(Ne,ee,fe),B+=6}d.addGroup(y,B,L),y+=B,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function En(s){const e={};for(let t=0;t<s.length;t++){const r=ro(s[t]);for(const a in r)e[a]=r[a]}return e}function Ky(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function t0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Zy={clone:ro,merge:En};var Qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends oo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qy,this.fragmentShader=Jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=Ky(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class n0 extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new Z,Bm=new at,Hm=new at;class Wn extends n0{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=af*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return af*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,Bm,Hm),t.subVectors(Hm,Bm)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vl*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/f,t-=u.offsetY*r/p,a*=u.width/f,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gs=-90,Ws=1;class eS extends ln{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Wn(Gs,Ws,e,t);a.layers=this.layers,this.add(a);const l=new Wn(Gs,Ws,e,t);l.layers=this.layers,this.add(l);const u=new Wn(Gs,Ws,e,t);u.layers=this.layers,this.add(u);const d=new Wn(Gs,Ws,e,t);d.layers=this.layers,this.add(d);const f=new Wn(Gs,Ws,e,t);f.layers=this.layers,this.add(f);const p=new Wn(Gs,Ws,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===jl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,u),e.setRenderTarget(r,2,a),e.render(t,d),e.setRenderTarget(r,3,a),e.render(t,f),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(t,m),e.setRenderTarget(g,_,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class i0 extends kn{constructor(e,t,r,a,l,u,d,f,p,m){e=e!==void 0?e:[],t=t!==void 0?t:eo,super(e,t,r,a,l,u,d,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tS extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new i0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ia(5,5,5),l=new Rr({name:"CubemapFromEquirect",uniforms:ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:br});l.uniforms.tEquirect.value=t;const u=new pi(a,l),d=t.minFilter;return t.minFilter===ns&&(t.minFilter=Ti),new eS(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}const ld=new Z,nS=new Z,iS=new lt;class Tr{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=ld.subVectors(r,t).cross(nS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ld),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||iS.getNormalMatrix(e),a=this.coplanarPoint(ld).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Zl,Rl=new Z;class Ef{constructor(e=new Tr,t=new Tr,r=new Tr,a=new Tr,l=new Tr,u=new Tr){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi){const r=this.planes,a=e.elements,l=a[0],u=a[1],d=a[2],f=a[3],p=a[4],m=a[5],g=a[6],_=a[7],y=a[8],M=a[9],w=a[10],S=a[11],x=a[12],D=a[13],P=a[14],C=a[15];if(r[0].setComponents(f-l,_-p,S-y,C-x).normalize(),r[1].setComponents(f+l,_+p,S+y,C+x).normalize(),r[2].setComponents(f+u,_+m,S+M,C+D).normalize(),r[3].setComponents(f-u,_-m,S-M,C-D).normalize(),r[4].setComponents(f-d,_-g,S-w,C-P).normalize(),t===qi)r[5].setComponents(f+d,_+g,S+w,C+P).normalize();else if(t===jl)r[5].setComponents(d,g,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Rl.x=a.normal.x>0?e.max.x:e.min.x,Rl.y=a.normal.y>0?e.max.y:e.min.y,Rl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function r0(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function rS(s){const e=new WeakMap;function t(d,f){const p=d.array,m=d.usage,g=p.byteLength,_=s.createBuffer();s.bindBuffer(f,_),s.bufferData(f,p,m),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,f,p){const m=f.array,g=f.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,m);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],w=g[y];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++_,g[_]=w)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const w=g[y];s.bufferSubData(p,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:a,remove:l,update:u}}class Ql extends gi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,d=Math.floor(r),f=Math.floor(a),p=d+1,m=f+1,g=e/d,_=t/f,y=[],M=[],w=[],S=[];for(let x=0;x<m;x++){const D=x*_-u;for(let P=0;P<p;P++){const C=P*g-l;M.push(C,-D,0),w.push(0,0,1),S.push(P/d),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let D=0;D<d;D++){const P=D+p*x,C=D+p*(x+1),Y=D+1+p*(x+1),U=D+1+p*x;y.push(P,C,U),y.push(C,Y,U)}this.setIndex(y),this.setAttribute("position",new _n(M,3)),this.setAttribute("normal",new _n(w,3)),this.setAttribute("uv",new _n(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}var sS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oS=`#ifdef USE_ALPHAHASH
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
#endif`,aS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dS=`#ifdef USE_AOMAP
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
#endif`,fS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hS=`#ifdef USE_BATCHING
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
#endif`,pS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_S=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vS=`#ifdef USE_IRIDESCENCE
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
#endif`,xS=`#ifdef USE_BUMPMAP
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
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,CS=`#define PI 3.141592653589793
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
} // validated`,RS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PS=`vec3 transformedNormal = objectNormal;
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
#endif`,LS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,US="gl_FragColor = linearToOutputTexel( gl_FragColor );",FS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kS=`#ifdef USE_ENVMAP
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
#endif`,OS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zS=`#ifdef USE_ENVMAP
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
#endif`,BS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
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
#endif`,VS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XS=`#ifdef USE_GRADIENTMAP
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
}`,YS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KS=`uniform bool receiveShadow;
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
#endif`,ZS=`#ifdef USE_ENVMAP
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
#endif`,QS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nM=`PhysicalMaterial material;
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
#endif`,iM=`struct PhysicalMaterial {
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
}`,rM=`
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
#endif`,sM=`#if defined( RE_IndirectDiffuse )
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
#endif`,oM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pM=`#if defined( USE_POINTS_UV )
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
#endif`,mM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yM=`#ifdef USE_MORPHTARGETS
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
#endif`,SM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bM=`#ifdef USE_NORMALMAP
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
#endif`,CM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GM=`float getShadowMask() {
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
}`,WM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jM=`#ifdef USE_SKINNING
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
#endif`,XM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YM=`#ifdef USE_SKINNING
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
#endif`,qM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QM=`#ifdef USE_TRANSMISSION
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
#endif`,JM=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`#include <common>
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
}`,d1=`#if DEPTH_PACKING == 3200
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
}`,f1=`#define DISTANCE
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
}`,h1=`#define DISTANCE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`uniform float scale;
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
}`,_1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,x1=`uniform vec3 diffuse;
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
}`,y1=`#define LAMBERT
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
}`,S1=`#define LAMBERT
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
}`,M1=`#define MATCAP
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
}`,E1=`#define MATCAP
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
}`,w1=`#define NORMAL
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
}`,T1=`#define NORMAL
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
}`,A1=`#define PHONG
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
}`,b1=`#define PHONG
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
}`,C1=`#define STANDARD
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
}`,R1=`#define STANDARD
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
}`,P1=`#define TOON
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
}`,L1=`#define TOON
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
}`,D1=`uniform float size;
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
}`,N1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,U1=`uniform vec3 color;
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
}`,F1=`uniform float rotation;
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
}`,k1=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:sS,alphahash_pars_fragment:oS,alphamap_fragment:aS,alphamap_pars_fragment:lS,alphatest_fragment:cS,alphatest_pars_fragment:uS,aomap_fragment:dS,aomap_pars_fragment:fS,batching_pars_vertex:hS,batching_vertex:pS,begin_vertex:mS,beginnormal_vertex:gS,bsdfs:_S,iridescence_fragment:vS,bumpmap_pars_fragment:xS,clipping_planes_fragment:yS,clipping_planes_pars_fragment:SS,clipping_planes_pars_vertex:MS,clipping_planes_vertex:ES,color_fragment:wS,color_pars_fragment:TS,color_pars_vertex:AS,color_vertex:bS,common:CS,cube_uv_reflection_fragment:RS,defaultnormal_vertex:PS,displacementmap_pars_vertex:LS,displacementmap_vertex:DS,emissivemap_fragment:NS,emissivemap_pars_fragment:IS,colorspace_fragment:US,colorspace_pars_fragment:FS,envmap_fragment:kS,envmap_common_pars_fragment:OS,envmap_pars_fragment:zS,envmap_pars_vertex:BS,envmap_physical_pars_fragment:ZS,envmap_vertex:HS,fog_vertex:VS,fog_pars_vertex:GS,fog_fragment:WS,fog_pars_fragment:jS,gradientmap_pars_fragment:XS,lightmap_pars_fragment:YS,lights_lambert_fragment:qS,lights_lambert_pars_fragment:$S,lights_pars_begin:KS,lights_toon_fragment:QS,lights_toon_pars_fragment:JS,lights_phong_fragment:eM,lights_phong_pars_fragment:tM,lights_physical_fragment:nM,lights_physical_pars_fragment:iM,lights_fragment_begin:rM,lights_fragment_maps:sM,lights_fragment_end:oM,logdepthbuf_fragment:aM,logdepthbuf_pars_fragment:lM,logdepthbuf_pars_vertex:cM,logdepthbuf_vertex:uM,map_fragment:dM,map_pars_fragment:fM,map_particle_fragment:hM,map_particle_pars_fragment:pM,metalnessmap_fragment:mM,metalnessmap_pars_fragment:gM,morphinstance_vertex:_M,morphcolor_vertex:vM,morphnormal_vertex:xM,morphtarget_pars_vertex:yM,morphtarget_vertex:SM,normal_fragment_begin:MM,normal_fragment_maps:EM,normal_pars_fragment:wM,normal_pars_vertex:TM,normal_vertex:AM,normalmap_pars_fragment:bM,clearcoat_normal_fragment_begin:CM,clearcoat_normal_fragment_maps:RM,clearcoat_pars_fragment:PM,iridescence_pars_fragment:LM,opaque_fragment:DM,packing:NM,premultiplied_alpha_fragment:IM,project_vertex:UM,dithering_fragment:FM,dithering_pars_fragment:kM,roughnessmap_fragment:OM,roughnessmap_pars_fragment:zM,shadowmap_pars_fragment:BM,shadowmap_pars_vertex:HM,shadowmap_vertex:VM,shadowmask_pars_fragment:GM,skinbase_vertex:WM,skinning_pars_vertex:jM,skinning_vertex:XM,skinnormal_vertex:YM,specularmap_fragment:qM,specularmap_pars_fragment:$M,tonemapping_fragment:KM,tonemapping_pars_fragment:ZM,transmission_fragment:QM,transmission_pars_fragment:JM,uv_pars_fragment:e1,uv_pars_vertex:t1,uv_vertex:n1,worldpos_vertex:i1,background_vert:r1,background_frag:s1,backgroundCube_vert:o1,backgroundCube_frag:a1,cube_vert:l1,cube_frag:c1,depth_vert:u1,depth_frag:d1,distanceRGBA_vert:f1,distanceRGBA_frag:h1,equirect_vert:p1,equirect_frag:m1,linedashed_vert:g1,linedashed_frag:_1,meshbasic_vert:v1,meshbasic_frag:x1,meshlambert_vert:y1,meshlambert_frag:S1,meshmatcap_vert:M1,meshmatcap_frag:E1,meshnormal_vert:w1,meshnormal_frag:T1,meshphong_vert:A1,meshphong_frag:b1,meshphysical_vert:C1,meshphysical_frag:R1,meshtoon_vert:P1,meshtoon_frag:L1,points_vert:D1,points_frag:N1,shadow_vert:I1,shadow_frag:U1,sprite_vert:F1,sprite_frag:k1},Re={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},wi={basic:{uniforms:En([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:En([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:En([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:En([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:En([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:En([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:En([Re.points,Re.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:En([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:En([Re.common,Re.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:En([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:En([Re.sprite,Re.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:En([Re.common,Re.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:En([Re.lights,Re.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};wi.physical={uniforms:En([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Pl={r:0,b:0,g:0},qr=new bi,O1=new Ht;function z1(s,e,t,r,a,l,u){const d=new vt(0);let f=l===!0?0:1,p,m,g=null,_=0,y=null;function M(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?t:e).get(P)),P}function w(D){let P=!1;const C=M(D);C===null?x(d,f):C&&C.isColor&&(x(C,1),P=!0);const Y=s.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,u):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,P){const C=M(P);C&&(C.isCubeTexture||C.mapping===$l)?(m===void 0&&(m=new pi(new ia(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:ro(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(Y,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),qr.copy(P.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),m.material.uniforms.envMap.value=C,m.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(qr)),m.material.toneMapped=St.getTransfer(C.colorSpace)!==Rt,(g!==C||_!==C.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,y=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new pi(new Ql(2,2),new Rr({name:"BackgroundMaterial",uniforms:ro(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=St.getTransfer(C.colorSpace)!==Rt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=C,_=C.version,y=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function x(D,P){D.getRGB(Pl,t0(s)),r.buffers.color.setClear(Pl.r,Pl.g,Pl.b,P,u)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),f=P,x(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,x(d,f)},render:w,addToRenderList:S}}function B1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=_(null);let l=a,u=!1;function d(R,z,J,$,re){let de=!1;const ae=g($,J,z);l!==ae&&(l=ae,p(l.object)),de=y(R,$,J,re),de&&M(R,$,J,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,C(R,z,J,$),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function f(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function m(R){return s.deleteVertexArray(R)}function g(R,z,J){const $=J.wireframe===!0;let re=r[R.id];re===void 0&&(re={},r[R.id]=re);let de=re[z.id];de===void 0&&(de={},re[z.id]=de);let ae=de[$];return ae===void 0&&(ae=_(f()),de[$]=ae),ae}function _(R){const z=[],J=[],$=[];for(let re=0;re<t;re++)z[re]=0,J[re]=0,$[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:$,object:R,attributes:{},index:null}}function y(R,z,J,$){const re=l.attributes,de=z.attributes;let ae=0;const ce=J.getAttributes();for(const B in ce)if(ce[B].location>=0){const le=re[B];let F=de[B];if(F===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),le===void 0||le.attribute!==F||F&&le.data!==F.data)return!0;ae++}return l.attributesNum!==ae||l.index!==$}function M(R,z,J,$){const re={},de=z.attributes;let ae=0;const ce=J.getAttributes();for(const B in ce)if(ce[B].location>=0){let le=de[B];le===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));const F={};F.attribute=le,le&&le.data&&(F.data=le.data),re[B]=F,ae++}l.attributes=re,l.attributesNum=ae,l.index=$}function w(){const R=l.newAttributes;for(let z=0,J=R.length;z<J;z++)R[z]=0}function S(R){x(R,0)}function x(R,z){const J=l.newAttributes,$=l.enabledAttributes,re=l.attributeDivisors;J[R]=1,$[R]===0&&(s.enableVertexAttribArray(R),$[R]=1),re[R]!==z&&(s.vertexAttribDivisor(R,z),re[R]=z)}function D(){const R=l.newAttributes,z=l.enabledAttributes;for(let J=0,$=z.length;J<$;J++)z[J]!==R[J]&&(s.disableVertexAttribArray(J),z[J]=0)}function P(R,z,J,$,re,de,ae){ae===!0?s.vertexAttribIPointer(R,z,J,re,de):s.vertexAttribPointer(R,z,J,$,re,de)}function C(R,z,J,$){w();const re=$.attributes,de=J.getAttributes(),ae=z.defaultAttributeValues;for(const ce in de){const B=de[ce];if(B.location>=0){let ue=re[ce];if(ue===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const le=ue.normalized,F=ue.itemSize,se=e.get(ue);if(se===void 0)continue;const Ne=se.buffer,ee=se.type,fe=se.bytesPerElement,Ee=ee===s.INT||ee===s.UNSIGNED_INT||ue.gpuType===mf;if(ue.isInterleavedBufferAttribute){const xe=ue.data,Ae=xe.stride,Ie=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)x(B.location+Ze,xe.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)S(B.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Ze=0;Ze<B.locationSize;Ze++)P(B.location+Ze,F/B.locationSize,ee,le,Ae*fe,(Ie+F/B.locationSize*Ze)*fe,Ee)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)x(B.location+xe,ue.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<B.locationSize;xe++)S(B.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let xe=0;xe<B.locationSize;xe++)P(B.location+xe,F/B.locationSize,ee,le,F*fe,F/B.locationSize*xe*fe,Ee)}}else if(ae!==void 0){const le=ae[ce];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(B.location,le);break;case 3:s.vertexAttrib3fv(B.location,le);break;case 4:s.vertexAttrib4fv(B.location,le);break;default:s.vertexAttrib1fv(B.location,le)}}}}D()}function Y(){X();for(const R in r){const z=r[R];for(const J in z){const $=z[J];for(const re in $)m($[re].object),delete $[re];delete z[J]}delete r[R]}}function U(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const J in z){const $=z[J];for(const re in $)m($[re].object),delete $[re];delete z[J]}delete r[R.id]}function k(R){for(const z in r){const J=r[z];if(J[R.id]===void 0)continue;const $=J[R.id];for(const re in $)m($[re].object),delete $[re];delete J[R.id]}}function X(){L(),u=!0,l!==a&&(l=a,p(l.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:X,resetDefaultState:L,dispose:Y,releaseStatesOfGeometry:U,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:S,disableUnusedAttributes:D}}function H1(s,e,t){let r;function a(p){r=p}function l(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function u(p,m,g){g!==0&&(s.drawArraysInstanced(r,p,m,g),t.update(m,r,g))}function d(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,g);let y=0;for(let M=0;M<g;M++)y+=m[M];t.update(y,r,1)}function f(p,m,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)u(p[M],m[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,m,0,_,0,g);let M=0;for(let w=0;w<g;w++)M+=m[w]*_[w];t.update(M,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function V1(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==hi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const X=k===ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Zi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Yi&&!X)}function f(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=f(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Y=M>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:Y,maxSamples:U}}function G1(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Tr,d=new lt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||r!==0||a;return a=_,r=g.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,w=g.clipIntersection,S=g.clipShadows,x=s.get(g);if(!a||M===null||M.length===0||l&&!S)l?m(null):p();else{const D=l?0:r,P=D*4;let C=x.clippingState||null;f.value=C,C=m(M,_,P,y);for(let Y=0;Y!==P;++Y)C[Y]=t[Y];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,_,y,M){const w=g!==null?g.length:0;let S=null;if(w!==0){if(S=f.value,M!==!0||S===null){const x=y+w*4,D=_.matrixWorldInverse;d.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let P=0,C=y;P!==w;++P,C+=4)u.copy(g[P]).applyMatrix4(D,d),u.normal.toArray(S,C),S[C+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function W1(s){let e=new WeakMap;function t(u,d){return d===Pd?u.mapping=eo:d===Ld&&(u.mapping=to),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Pd||d===Ld)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new tS(f.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",a),t(p.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class s0 extends n0{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qs=4,Vm=[.125,.215,.35,.446,.526,.582],es=20,cd=new s0,Gm=new vt;let ud=null,dd=0,fd=0,hd=!1;const Zr=(1+Math.sqrt(5))/2,js=1/Zr,Wm=[new Z(-Zr,js,0),new Z(Zr,js,0),new Z(-js,0,Zr),new Z(js,0,Zr),new Z(0,Zr,-js),new Z(0,Zr,js),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,dd,fd),this._renderer.xr.enabled=hd,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:ea,format:hi,colorSpace:so,depthBuffer:!1},a=Xm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j1(l)),this._blurMaterial=X1(l,e,t)}return a}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,cd)}_sceneToCubeUV(e,t,r,a){const d=new Wn(90,1,t,r),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(Gm),m.toneMapping=$i,m.autoClear=!1;const y=new Mf({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),M=new pi(new ia,y);let w=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,w=!0):(y.color.copy(Gm),w=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(d.up.set(0,f[x],0),d.lookAt(p[x],0,0)):D===1?(d.up.set(0,0,f[x]),d.lookAt(0,p[x],0)):(d.up.set(0,f[x],0),d.lookAt(0,0,p[x]));const P=this._cubeSize;Ll(a,D*P,x>2?P:0,P,P),m.setRenderTarget(a),w&&m.render(M,d),m.render(e,d)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===eo||e.mapping===to;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ym());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new pi(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Ll(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,cd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Wm[(a-l-1)%Wm.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new pi(this._lodPlanes[a],p),_=p.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*es-1),w=l/M,S=isFinite(l)?1+Math.floor(m*w):es;S>es&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${es}`);const x=[];let D=0;for(let k=0;k<es;++k){const X=k/w,L=Math.exp(-X*X/2);x.push(L),k===0?D+=L:k<S&&(D+=2*L)}for(let k=0;k<x.length;k++)x[k]=x[k]/D;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:P}=this;_.dTheta.value=M,_.mipInt.value=P-r;const C=this._sizeLods[a],Y=3*C*(a>P-qs?a-P+qs:0),U=4*(this._cubeSize-C);Ll(t,Y,U,3*C,2*C),f.setRenderTarget(t),f.render(g,cd)}}function j1(s){const e=[],t=[],r=[];let a=s;const l=s-qs+1+Vm.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);t.push(d);let f=1/d;u>s-qs?f=Vm[u-s+qs-1]:u===0&&(f=0),r.push(f);const p=1/(d-2),m=-p,g=1+p,_=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,w=3,S=2,x=1,D=new Float32Array(w*M*y),P=new Float32Array(S*M*y),C=new Float32Array(x*M*y);for(let U=0;U<y;U++){const k=U%3*2/3-1,X=U>2?0:-1,L=[k,X,0,k+2/3,X,0,k+2/3,X+1,0,k,X,0,k+2/3,X+1,0,k,X+1,0];D.set(L,w*M*U),P.set(_,S*M*U);const R=[U,U,U,U,U,U];C.set(R,x*M*U)}const Y=new gi;Y.setAttribute("position",new Ai(D,w)),Y.setAttribute("uv",new Ai(P,S)),Y.setAttribute("faceIndex",new Ai(C,x)),e.push(Y),a>qs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Xm(s,e,t){const r=new rs(s,e,t);return r.texture.mapping=$l,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ll(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function X1(s,e,t){const r=new Float32Array(es),a=new Z(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:wf(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function Ym(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function qm(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function wf(){return`

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
	`}function Y1(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const f=d.mapping,p=f===Pd||f===Ld,m=f===eo||f===to;if(p||m){let g=e.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return t===null&&(t=new jm(s)),g=p?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||m&&y&&a(y)?(t===null&&(t=new jm(s)),g=p?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function a(d){let f=0;const p=6;for(let m=0;m<p;m++)d[m]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function q1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&$o("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function $1(s,e,t,r){const a={},l=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const w=_.morphAttributes[M];for(let S=0,x=w.length;S<x;S++)e.remove(w[S])}_.removeEventListener("dispose",u),delete a[_.id];const y=l.get(_);y&&(e.remove(y),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(g,_){return a[_.id]===!0||(_.addEventListener("dispose",u),a[_.id]=!0,t.memory.geometries++),_}function f(g){const _=g.attributes;for(const M in _)e.update(_[M],s.ARRAY_BUFFER);const y=g.morphAttributes;for(const M in y){const w=y[M];for(let S=0,x=w.length;S<x;S++)e.update(w[S],s.ARRAY_BUFFER)}}function p(g){const _=[],y=g.index,M=g.attributes.position;let w=0;if(y!==null){const D=y.array;w=y.version;for(let P=0,C=D.length;P<C;P+=3){const Y=D[P+0],U=D[P+1],k=D[P+2];_.push(Y,U,U,k,k,Y)}}else if(M!==void 0){const D=M.array;w=M.version;for(let P=0,C=D.length/3-1;P<C;P+=3){const Y=P+0,U=P+1,k=P+2;_.push(Y,U,U,k,k,Y)}}else return;const S=new(qg(_)?e0:Jg)(_,1);S.version=w;const x=l.get(g);x&&e.remove(x),l.set(g,S)}function m(g){const _=l.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&p(g)}else p(g);return l.get(g)}return{get:d,update:f,getWireframeAttribute:m}}function K1(s,e,t){let r;function a(_){r=_}let l,u;function d(_){l=_.type,u=_.bytesPerElement}function f(_,y){s.drawElements(r,y,l,_*u),t.update(y,r,1)}function p(_,y,M){M!==0&&(s.drawElementsInstanced(r,y,l,_*u,M),t.update(y,r,M))}function m(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,r,1)}function g(_,y,M,w){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)p(_[x]/u,y[x],w[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,_,0,w,0,M);let x=0;for(let D=0;D<M;D++)x+=y[D]*w[D];t.update(x,r,1)}}this.setMode=a,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function Z1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function Q1(s,e,t){const r=new WeakMap,a=new Gt;function l(u,d,f){const p=u.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let _=r.get(d);if(_===void 0||_.count!==g){let R=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let C=0;M===!0&&(C=1),w===!0&&(C=2),S===!0&&(C=3);let Y=d.attributes.position.count*C,U=1;Y>e.maxTextureSize&&(U=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const k=new Float32Array(Y*U*4*g),X=new Kg(k,Y,U,g);X.type=Yi,X.needsUpdate=!0;const L=C*4;for(let z=0;z<g;z++){const J=x[z],$=D[z],re=P[z],de=Y*U*4*z;for(let ae=0;ae<J.count;ae++){const ce=ae*L;M===!0&&(a.fromBufferAttribute(J,ae),k[de+ce+0]=a.x,k[de+ce+1]=a.y,k[de+ce+2]=a.z,k[de+ce+3]=0),w===!0&&(a.fromBufferAttribute($,ae),k[de+ce+4]=a.x,k[de+ce+5]=a.y,k[de+ce+6]=a.z,k[de+ce+7]=0),S===!0&&(a.fromBufferAttribute(re,ae),k[de+ce+8]=a.x,k[de+ce+9]=a.y,k[de+ce+10]=a.z,k[de+ce+11]=re.itemSize===4?a.w:1)}}_={count:g,texture:X,size:new at(Y,U)},r.set(d,_),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const w=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function J1(s,e,t,r){let a=new WeakMap;function l(f){const p=r.render.frame,m=f.geometry,g=e.get(f,m);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),a.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),a.set(f,p))),f.isSkinnedMesh){const _=f.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return g}function u(){a=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class o0 extends kn{constructor(e,t,r,a,l,u,d,f,p,m=Zs){if(m!==Zs&&m!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Zs&&(r=is),r===void 0&&m===io&&(r=no),super(null,a,l,u,d,f,m,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:mi,this.minFilter=f!==void 0?f:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const a0=new kn,$m=new o0(1,1),l0=new Kg,c0=new zy,u0=new i0,Km=[],Zm=[],Qm=new Float32Array(16),Jm=new Float32Array(9),eg=new Float32Array(4);function ao(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Km[a];if(l===void 0&&(l=new Float32Array(a),Km[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Jl(s,e){let t=Zm[e];t===void 0&&(t=new Int32Array(e),Zm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function eE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function nE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function iE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function rE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;eg.set(r),s.uniformMatrix2fv(this.addr,!1,eg),en(t,r)}}function sE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;Jm.set(r),s.uniformMatrix3fv(this.addr,!1,Jm),en(t,r)}}function oE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;Qm.set(r),s.uniformMatrix4fv(this.addr,!1,Qm),en(t,r)}}function aE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function uE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function dE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function hE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function pE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function mE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?($m.compareFunction=Yg,l=$m):l=a0,t.setTexture2D(e||l,a)}function gE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||c0,a)}function _E(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||u0,a)}function vE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||l0,a)}function xE(s){switch(s){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return rE;case 35675:return sE;case 35676:return oE;case 5124:case 35670:return aE;case 35667:case 35671:return lE;case 35668:case 35672:return cE;case 35669:case 35673:return uE;case 5125:return dE;case 36294:return fE;case 36295:return hE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return vE}}function yE(s,e){s.uniform1fv(this.addr,e)}function SE(s,e){const t=ao(e,this.size,2);s.uniform2fv(this.addr,t)}function ME(s,e){const t=ao(e,this.size,3);s.uniform3fv(this.addr,t)}function EE(s,e){const t=ao(e,this.size,4);s.uniform4fv(this.addr,t)}function wE(s,e){const t=ao(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function TE(s,e){const t=ao(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function AE(s,e){const t=ao(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bE(s,e){s.uniform1iv(this.addr,e)}function CE(s,e){s.uniform2iv(this.addr,e)}function RE(s,e){s.uniform3iv(this.addr,e)}function PE(s,e){s.uniform4iv(this.addr,e)}function LE(s,e){s.uniform1uiv(this.addr,e)}function DE(s,e){s.uniform2uiv(this.addr,e)}function NE(s,e){s.uniform3uiv(this.addr,e)}function IE(s,e){s.uniform4uiv(this.addr,e)}function UE(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||a0,l[u])}function FE(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||c0,l[u])}function kE(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||u0,l[u])}function OE(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||l0,l[u])}function zE(s){switch(s){case 5126:return yE;case 35664:return SE;case 35665:return ME;case 35666:return EE;case 35674:return wE;case 35675:return TE;case 35676:return AE;case 5124:case 35670:return bE;case 35667:case 35671:return CE;case 35668:case 35672:return RE;case 35669:case 35673:return PE;case 5125:return LE;case 36294:return DE;case 36295:return NE;case 36296:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return FE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return OE}}class BE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=xE(t.type)}}class HE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zE(t.type)}}class VE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function tg(s,e){s.seq.push(e),s.map[e.id]=e}function GE(s,e,t){const r=s.name,a=r.length;for(pd.lastIndex=0;;){const l=pd.exec(r),u=pd.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===a){tg(t,p===void 0?new BE(d,s,e):new HE(d,s,e));break}else{let g=t.map[d];g===void 0&&(g=new VE(d),tg(t,g)),t=g}}}class Gl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);GE(l,u,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function ng(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const WE=37297;let jE=0;function XE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const ig=new lt;function YE(s){St._getMatrix(ig,St.workingColorSpace,s);const e=`mat3( ${ig.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(s)){case Kl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function rg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+XE(s.getShaderSource(e),u)}else return a}function qE(s,e){const t=YE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $E(s,e){let t;switch(e){case dy:t="Linear";break;case fy:t="Reinhard";break;case hy:t="Cineon";break;case py:t="ACESFilmic";break;case gy:t="AgX";break;case _y:t="Neutral";break;case my:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dl=new Z;function KE(){St.getLuminanceCoefficients(Dl);const s=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function QE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function JE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Ko(s){return s!==""}function sg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function og(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(s){return s.replace(ew,nw)}const tw=new Map;function nw(s,e){let t=ct[e];if(t===void 0){const r=tw.get(e);if(r!==void 0)t=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return lf(t)}const iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ag(s){return s.replace(iw,rw)}function rw(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function lg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function sw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ig?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function ow(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function lw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pf:e="ENVMAP_BLENDING_MULTIPLY";break;case cy:e="ENVMAP_BLENDING_MIX";break;case uy:e="ENVMAP_BLENDING_ADD";break}return e}function cw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function uw(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=sw(t),p=ow(t),m=aw(t),g=lw(t),_=cw(t),y=ZE(t),M=QE(l),w=a.createProgram();let S,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ko).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ko).join(`
`),x.length>0&&(x+=`
`)):(S=[lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),x=[lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?ct.tonemapping_pars_fragment:"",t.toneMapping!==$i?$E("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,qE("linearToOutputTexel",t.outputColorSpace),KE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ko).join(`
`)),u=lf(u),u=sg(u,t),u=og(u,t),d=lf(d),d=sg(d,t),d=og(d,t),u=ag(u),d=ag(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=D+S+u,C=D+x+d,Y=ng(a,a.VERTEX_SHADER,P),U=ng(a,a.FRAGMENT_SHADER,C);a.attachShader(w,Y),a.attachShader(w,U),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function k(z){if(s.debug.checkShaderErrors){const J=a.getProgramInfoLog(w).trim(),$=a.getShaderInfoLog(Y).trim(),re=a.getShaderInfoLog(U).trim();let de=!0,ae=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,Y,U);else{const ce=rg(a,Y,"vertex"),B=rg(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+ce+`
`+B)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):($===""||re==="")&&(ae=!1);ae&&(z.diagnostics={runnable:de,programLog:J,vertexShader:{log:$,prefix:S},fragmentShader:{log:re,prefix:x}})}a.deleteShader(Y),a.deleteShader(U),X=new Gl(a,w),L=JE(a,w)}let X;this.getUniforms=function(){return X===void 0&&k(this),X};let L;this.getAttributes=function(){return L===void 0&&k(this),L};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,WE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=Y,this.fragmentShader=U,this}let dw=0;class fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hw(e),t.set(e,r)),r}}class hw{constructor(e){this.id=dw++,this.code=e,this.usedTimes=0}}function pw(s,e,t,r,a,l,u){const d=new Zg,f=new fw,p=new Set,m=[],g=a.logarithmicDepthBuffer,_=a.vertexTextures;let y=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(L){return p.add(L),L===0?"uv":`uv${L}`}function S(L,R,z,J,$){const re=J.fog,de=$.geometry,ae=L.isMeshStandardMaterial?J.environment:null,ce=(L.isMeshStandardMaterial?t:e).get(L.envMap||ae),B=ce&&ce.mapping===$l?ce.image.height:null,ue=M[L.type];L.precision!==null&&(y=a.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const le=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,F=le!==void 0?le.length:0;let se=0;de.morphAttributes.position!==void 0&&(se=1),de.morphAttributes.normal!==void 0&&(se=2),de.morphAttributes.color!==void 0&&(se=3);let Ne,ee,fe,Ee;if(ue){const xt=wi[ue];Ne=xt.vertexShader,ee=xt.fragmentShader}else Ne=L.vertexShader,ee=L.fragmentShader,f.update(L),fe=f.getVertexShaderID(L),Ee=f.getFragmentShaderID(L);const xe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ie=$.isInstancedMesh===!0,Ze=$.isBatchedMesh===!0,Ct=!!L.map,mt=!!L.matcap,Nt=!!ce,j=!!L.aoMap,vn=!!L.lightMap,pt=!!L.bumpMap,dt=!!L.normalMap,qe=!!L.displacementMap,At=!!L.emissiveMap,Ye=!!L.metalnessMap,N=!!L.roughnessMap,T=L.anisotropy>0,Q=L.clearcoat>0,me=L.dispersion>0,_e=L.iridescence>0,he=L.sheen>0,Ve=L.transmission>0,be=T&&!!L.anisotropyMap,Ue=Q&&!!L.clearcoatMap,ut=Q&&!!L.clearcoatNormalMap,Se=Q&&!!L.clearcoatRoughnessMap,ke=_e&&!!L.iridescenceMap,Qe=_e&&!!L.iridescenceThicknessMap,Je=he&&!!L.sheenColorMap,Oe=he&&!!L.sheenRoughnessMap,ft=!!L.specularMap,it=!!L.specularColorMap,Tt=!!L.specularIntensityMap,V=Ve&&!!L.transmissionMap,Ce=Ve&&!!L.thicknessMap,oe=!!L.gradientMap,pe=!!L.alphaMap,Le=L.alphaTest>0,Pe=!!L.alphaHash,rt=!!L.extensions;let Ut=$i;L.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Yt={shaderID:ue,shaderType:L.type,shaderName:L.name,vertexShader:Ne,fragmentShader:ee,defines:L.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&$._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&$.instanceColor!==null,instancingMorph:Ie&&$.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:so,alphaToCoverage:!!L.alphaToCoverage,map:Ct,matcap:mt,envMap:Nt,envMapMode:Nt&&ce.mapping,envMapCubeUVHeight:B,aoMap:j,lightMap:vn,bumpMap:pt,normalMap:dt,displacementMap:_&&qe,emissiveMap:At,normalMapObjectSpace:dt&&L.normalMapType===Sy,normalMapTangentSpace:dt&&L.normalMapType===Xg,metalnessMap:Ye,roughnessMap:N,anisotropy:T,anisotropyMap:be,clearcoat:Q,clearcoatMap:Ue,clearcoatNormalMap:ut,clearcoatRoughnessMap:Se,dispersion:me,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:Qe,sheen:he,sheenColorMap:Je,sheenRoughnessMap:Oe,specularMap:ft,specularColorMap:it,specularIntensityMap:Tt,transmission:Ve,transmissionMap:V,thicknessMap:Ce,gradientMap:oe,opaque:L.transparent===!1&&L.blending===Ks&&L.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:Pe,combine:L.combine,mapUv:Ct&&w(L.map.channel),aoMapUv:j&&w(L.aoMap.channel),lightMapUv:vn&&w(L.lightMap.channel),bumpMapUv:pt&&w(L.bumpMap.channel),normalMapUv:dt&&w(L.normalMap.channel),displacementMapUv:qe&&w(L.displacementMap.channel),emissiveMapUv:At&&w(L.emissiveMap.channel),metalnessMapUv:Ye&&w(L.metalnessMap.channel),roughnessMapUv:N&&w(L.roughnessMap.channel),anisotropyMapUv:be&&w(L.anisotropyMap.channel),clearcoatMapUv:Ue&&w(L.clearcoatMap.channel),clearcoatNormalMapUv:ut&&w(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(L.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&w(L.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&w(L.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(L.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&w(L.sheenRoughnessMap.channel),specularMapUv:ft&&w(L.specularMap.channel),specularColorMapUv:it&&w(L.specularColorMap.channel),specularIntensityMapUv:Tt&&w(L.specularIntensityMap.channel),transmissionMapUv:V&&w(L.transmissionMap.channel),thicknessMapUv:Ce&&w(L.thicknessMap.channel),alphaMapUv:pe&&w(L.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(dt||T),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!de.attributes.uv&&(Ct||pe),fog:!!re,useFog:L.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:$.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Ct&&L.map.isVideoTexture===!0&&St.getTransfer(L.map.colorSpace)===Rt,decodeVideoTextureEmissive:At&&L.emissiveMap.isVideoTexture===!0&&St.getTransfer(L.emissiveMap.colorSpace)===Rt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Xi,flipSided:L.side===Fn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:rt&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&L.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Yt.vertexUv1s=p.has(1),Yt.vertexUv2s=p.has(2),Yt.vertexUv3s=p.has(3),p.clear(),Yt}function x(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const z in L.defines)R.push(z),R.push(L.defines[z]);return L.isRawShaderMaterial===!1&&(D(R,L),P(R,L),R.push(s.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function D(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function P(L,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),L.push(d.mask)}function C(L){const R=M[L.type];let z;if(R){const J=wi[R];z=Zy.clone(J.uniforms)}else z=L.uniforms;return z}function Y(L,R){let z;for(let J=0,$=m.length;J<$;J++){const re=m[J];if(re.cacheKey===R){z=re,++z.usedTimes;break}}return z===void 0&&(z=new uw(s,R,L,l),m.push(z)),z}function U(L){if(--L.usedTimes===0){const R=m.indexOf(L);m[R]=m[m.length-1],m.pop(),L.destroy()}}function k(L){f.remove(L)}function X(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:Y,releaseProgram:U,releaseShaderCache:k,programs:m,dispose:X}}function mw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,f){s.get(u)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function gw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ug(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(g,_,y,M,w,S){let x=s[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:w,group:S},s[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=w,x.group=S),e++,x}function d(g,_,y,M,w,S){const x=u(g,_,y,M,w,S);y.transmission>0?r.push(x):y.transparent===!0?a.push(x):t.push(x)}function f(g,_,y,M,w,S){const x=u(g,_,y,M,w,S);y.transmission>0?r.unshift(x):y.transparent===!0?a.unshift(x):t.unshift(x)}function p(g,_){t.length>1&&t.sort(g||gw),r.length>1&&r.sort(_||cg),a.length>1&&a.sort(_||cg)}function m(){for(let g=e,_=s.length;g<_;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:d,unshift:f,finish:m,sort:p}}function _w(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new ug,s.set(r,[u])):a>=l.length?(u=new ug,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function vw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new vt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function xw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let yw=0;function Sw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Mw(s){const e=new vw,t=xw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Z);const a=new Z,l=new Ht,u=new Ht;function d(p){let m=0,g=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,M=0,w=0,S=0,x=0,D=0,P=0,C=0,Y=0,U=0,k=0;p.sort(Sw);for(let L=0,R=p.length;L<R;L++){const z=p[L],J=z.color,$=z.intensity,re=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=J.r*$,g+=J.g*$,_+=J.b*$;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(z.sh.coefficients[ae],$);k++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,B=t.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=de,r.directionalShadowMatrix[y]=z.shadow.matrix,D++}r.directional[y]=ae,y++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(J).multiplyScalar($),ae.distance=re,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,r.spot[w]=ae;const ce=z.shadow;if(z.map&&(r.spotLightMap[Y]=z.map,Y++,ce.updateMatrices(z),z.castShadow&&U++),r.spotLightMatrix[w]=ce.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.spotShadow[w]=B,r.spotShadowMap[w]=de,C++}w++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy(J).multiplyScalar($),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=ae,S++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const ce=z.shadow,B=t.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,r.pointShadow[M]=B,r.pointShadowMap[M]=de,r.pointShadowMatrix[M]=z.shadow.matrix,P++}r.point[M]=ae,M++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar($),ae.groundColor.copy(z.groundColor).multiplyScalar($),r.hemi[x]=ae,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=_;const X=r.hash;(X.directionalLength!==y||X.pointLength!==M||X.spotLength!==w||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==D||X.numPointShadows!==P||X.numSpotShadows!==C||X.numSpotMaps!==Y||X.numLightProbes!==k)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=S,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+Y-U,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=k,X.directionalLength=y,X.pointLength=M,X.spotLength=w,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=D,X.numPointShadows=P,X.numSpotShadows=C,X.numSpotMaps=Y,X.numLightProbes=k,r.version=yw++)}function f(p,m){let g=0,_=0,y=0,M=0,w=0;const S=m.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const P=p[x];if(P.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),g++}else if(P.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),y++}else if(P.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(P.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),_++}else if(P.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(S),w++}}}return{setup:d,setupView:f,state:r}}function dg(s){const e=new Mw(s),t=[],r=[];function a(m){p.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function d(){e.setup(t)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function Ew(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new dg(s),e.set(a,[d])):l>=u.length?(d=new dg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class ww extends oo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tw extends oo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bw=`uniform sampler2D shadow_pass;
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
}`;function Cw(s,e,t){let r=new Ef;const a=new at,l=new at,u=new Gt,d=new ww({depthPacking:yy}),f=new Tw,p={},m=t.maxTextureSize,g={[Cr]:Fn,[Fn]:Cr,[Xi]:Xi},_=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Aw,fragmentShader:bw}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new gi;M.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new pi(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ig;let x=this.type;this.render=function(U,k,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;const L=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),J=s.state;J.setBlending(br),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const $=x!==Wi&&this.type===Wi,re=x===Wi&&this.type!==Wi;for(let de=0,ae=U.length;de<ae;de++){const ce=U[de],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ue=B.getFrameExtents();if(a.multiply(ue),l.copy(B.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/ue.x),a.x=l.x*ue.x,B.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/ue.y),a.y=l.y*ue.y,B.mapSize.y=l.y)),B.map===null||$===!0||re===!0){const F=this.type!==Wi?{minFilter:mi,magFilter:mi}:{};B.map!==null&&B.map.dispose(),B.map=new rs(a.x,a.y,F),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const le=B.getViewportCount();for(let F=0;F<le;F++){const se=B.getViewport(F);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),J.viewport(u),B.updateMatrices(ce,F),r=B.getFrustum(),C(k,X,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===Wi&&D(B,X),B.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(L,R,z)};function D(U,k){const X=e.update(w);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new rs(a.x,a.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(k,null,X,_,w,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(k,null,X,y,w,null)}function P(U,k,X,L){let R=null;const z=X.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)R=z;else if(R=X.isPointLight===!0?f:d,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const J=R.uuid,$=k.uuid;let re=p[J];re===void 0&&(re={},p[J]=re);let de=re[$];de===void 0&&(de=R.clone(),re[$]=de,k.addEventListener("dispose",Y)),R=de}if(R.visible=k.visible,R.wireframe=k.wireframe,L===Wi?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:g[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=s.properties.get(R);J.light=X}return R}function C(U,k,X,L,R){if(U.visible===!1)return;if(U.layers.test(k.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&R===Wi)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,U.matrixWorld);const $=e.update(U),re=U.material;if(Array.isArray(re)){const de=$.groups;for(let ae=0,ce=de.length;ae<ce;ae++){const B=de[ae],ue=re[B.materialIndex];if(ue&&ue.visible){const le=P(U,ue,L,R);U.onBeforeShadow(s,U,k,X,$,le,B),s.renderBufferDirect(X,null,$,le,U,B),U.onAfterShadow(s,U,k,X,$,le,B)}}}else if(re.visible){const de=P(U,re,L,R);U.onBeforeShadow(s,U,k,X,$,de,null),s.renderBufferDirect(X,null,$,de,U,null),U.onAfterShadow(s,U,k,X,$,de,null)}}const J=U.children;for(let $=0,re=J.length;$<re;$++)C(J[$],k,X,L,R)}function Y(U){U.target.removeEventListener("dispose",Y);for(const X in p){const L=p[X],R=U.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}const Rw={[Ed]:wd,[Td]:Cd,[Ad]:Rd,[Js]:bd,[wd]:Ed,[Cd]:Td,[Rd]:Ad,[bd]:Js};function Pw(s,e){function t(){let V=!1;const Ce=new Gt;let oe=null;const pe=new Gt(0,0,0,0);return{setMask:function(Le){oe!==Le&&!V&&(s.colorMask(Le,Le,Le,Le),oe=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Pe,rt,Ut,Yt){Yt===!0&&(Le*=Ut,Pe*=Ut,rt*=Ut),Ce.set(Le,Pe,rt,Ut),pe.equals(Ce)===!1&&(s.clearColor(Le,Pe,rt,Ut),pe.copy(Ce))},reset:function(){V=!1,oe=null,pe.set(-1,0,0,0)}}}function r(){let V=!1,Ce=!1,oe=null,pe=null,Le=null;return{setReversed:function(Pe){if(Ce!==Pe){const rt=e.get("EXT_clip_control");Ce?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Le;Le=null,this.setClear(Ut)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?xe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Pe){oe!==Pe&&!V&&(s.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(Ce&&(Pe=Rw[Pe]),pe!==Pe){switch(Pe){case Ed:s.depthFunc(s.NEVER);break;case wd:s.depthFunc(s.ALWAYS);break;case Td:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case Ad:s.depthFunc(s.EQUAL);break;case bd:s.depthFunc(s.GEQUAL);break;case Cd:s.depthFunc(s.GREATER);break;case Rd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){Le!==Pe&&(Ce&&(Pe=1-Pe),s.clearDepth(Pe),Le=Pe)},reset:function(){V=!1,oe=null,pe=null,Le=null,Ce=!1}}}function a(){let V=!1,Ce=null,oe=null,pe=null,Le=null,Pe=null,rt=null,Ut=null,Yt=null;return{setTest:function(xt){V||(xt?xe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!V&&(s.stencilMask(xt),Ce=xt)},setFunc:function(xt,An,xn){(oe!==xt||pe!==An||Le!==xn)&&(s.stencilFunc(xt,An,xn),oe=xt,pe=An,Le=xn)},setOp:function(xt,An,xn){(Pe!==xt||rt!==An||Ut!==xn)&&(s.stencilOp(xt,An,xn),Pe=xt,rt=An,Ut=xn)},setLocked:function(xt){V=xt},setClear:function(xt){Yt!==xt&&(s.clearStencil(xt),Yt=xt)},reset:function(){V=!1,Ce=null,oe=null,pe=null,Le=null,Pe=null,rt=null,Ut=null,Yt=null}}}const l=new t,u=new r,d=new a,f=new WeakMap,p=new WeakMap;let m={},g={},_=new WeakMap,y=[],M=null,w=!1,S=null,x=null,D=null,P=null,C=null,Y=null,U=null,k=new vt(0,0,0),X=0,L=!1,R=null,z=null,J=null,$=null,re=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(B)[1]),ae=ce>=1):B.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ae=ce>=2);let ue=null,le={};const F=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ne=new Gt().fromArray(F),ee=new Gt().fromArray(se);function fe(V,Ce,oe,pe){const Le=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(V,Pe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<oe;rt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Pe}const Ee={};Ee[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),u.setFunc(Js),pt(!1),dt(mm),xe(s.CULL_FACE),j(br);function xe(V){m[V]!==!0&&(s.enable(V),m[V]=!0)}function Ae(V){m[V]!==!1&&(s.disable(V),m[V]=!1)}function Ie(V,Ce){return g[V]!==Ce?(s.bindFramebuffer(V,Ce),g[V]=Ce,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ze(V,Ce){let oe=y,pe=!1;if(V){oe=_.get(Ce),oe===void 0&&(oe=[],_.set(Ce,oe));const Le=V.textures;if(oe.length!==Le.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,rt=Le.length;Pe<rt;Pe++)oe[Pe]=s.COLOR_ATTACHMENT0+Pe;oe.length=Le.length,pe=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,pe=!0);pe&&s.drawBuffers(oe)}function Ct(V){return M!==V?(s.useProgram(V),M=V,!0):!1}const mt={[Jr]:s.FUNC_ADD,[Xx]:s.FUNC_SUBTRACT,[Yx]:s.FUNC_REVERSE_SUBTRACT};mt[qx]=s.MIN,mt[$x]=s.MAX;const Nt={[Kx]:s.ZERO,[Zx]:s.ONE,[Qx]:s.SRC_COLOR,[Sd]:s.SRC_ALPHA,[ry]:s.SRC_ALPHA_SATURATE,[ny]:s.DST_COLOR,[ey]:s.DST_ALPHA,[Jx]:s.ONE_MINUS_SRC_COLOR,[Md]:s.ONE_MINUS_SRC_ALPHA,[iy]:s.ONE_MINUS_DST_COLOR,[ty]:s.ONE_MINUS_DST_ALPHA,[sy]:s.CONSTANT_COLOR,[oy]:s.ONE_MINUS_CONSTANT_COLOR,[ay]:s.CONSTANT_ALPHA,[ly]:s.ONE_MINUS_CONSTANT_ALPHA};function j(V,Ce,oe,pe,Le,Pe,rt,Ut,Yt,xt){if(V===br){w===!0&&(Ae(s.BLEND),w=!1);return}if(w===!1&&(xe(s.BLEND),w=!0),V!==jx){if(V!==S||xt!==L){if((x!==Jr||C!==Jr)&&(s.blendEquation(s.FUNC_ADD),x=Jr,C=Jr),xt)switch(V){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gm:s.blendFunc(s.ONE,s.ONE);break;case _m:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _m:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}D=null,P=null,Y=null,U=null,k.set(0,0,0),X=0,S=V,L=xt}return}Le=Le||Ce,Pe=Pe||oe,rt=rt||pe,(Ce!==x||Le!==C)&&(s.blendEquationSeparate(mt[Ce],mt[Le]),x=Ce,C=Le),(oe!==D||pe!==P||Pe!==Y||rt!==U)&&(s.blendFuncSeparate(Nt[oe],Nt[pe],Nt[Pe],Nt[rt]),D=oe,P=pe,Y=Pe,U=rt),(Ut.equals(k)===!1||Yt!==X)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Yt),k.copy(Ut),X=Yt),S=V,L=!1}function vn(V,Ce){V.side===Xi?Ae(s.CULL_FACE):xe(s.CULL_FACE);let oe=V.side===Fn;Ce&&(oe=!oe),pt(oe),V.blending===Ks&&V.transparent===!1?j(br):j(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const pe=V.stencilWrite;d.setTest(pe),pe&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),At(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function dt(V){V!==Vx?(xe(s.CULL_FACE),V!==z&&(V===mm?s.cullFace(s.BACK):V===Gx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),z=V}function qe(V){V!==J&&(ae&&s.lineWidth(V),J=V)}function At(V,Ce,oe){V?(xe(s.POLYGON_OFFSET_FILL),($!==Ce||re!==oe)&&(s.polygonOffset(Ce,oe),$=Ce,re=oe)):Ae(s.POLYGON_OFFSET_FILL)}function Ye(V){V?xe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function N(V){V===void 0&&(V=s.TEXTURE0+de-1),ue!==V&&(s.activeTexture(V),ue=V)}function T(V,Ce,oe){oe===void 0&&(ue===null?oe=s.TEXTURE0+de-1:oe=ue);let pe=le[oe];pe===void 0&&(pe={type:void 0,texture:void 0},le[oe]=pe),(pe.type!==V||pe.texture!==Ce)&&(ue!==oe&&(s.activeTexture(oe),ue=oe),s.bindTexture(V,Ce||Ee[V]),pe.type=V,pe.texture=Ce)}function Q(){const V=le[ue];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){Ne.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ne.copy(V))}function Oe(V){ee.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),ee.copy(V))}function ft(V,Ce){let oe=p.get(Ce);oe===void 0&&(oe=new WeakMap,p.set(Ce,oe));let pe=oe.get(V);pe===void 0&&(pe=s.getUniformBlockIndex(Ce,V.name),oe.set(V,pe))}function it(V,Ce){const pe=p.get(Ce).get(V);f.get(Ce)!==pe&&(s.uniformBlockBinding(Ce,pe,V.__bindingPointIndex),f.set(Ce,pe))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ue=null,le={},g={},_=new WeakMap,y=[],M=null,w=!1,S=null,x=null,D=null,P=null,C=null,Y=null,U=null,k=new vt(0,0,0),X=0,L=!1,R=null,z=null,J=null,$=null,re=null,Ne.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:xe,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ze,useProgram:Ct,setBlending:j,setMaterial:vn,setFlipSided:pt,setCullFace:dt,setLineWidth:qe,setPolygonOffset:At,setScissorTest:Ye,activeTexture:N,bindTexture:T,unbindTexture:Q,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:ke,texImage3D:Qe,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:Se,texSubImage2D:he,texSubImage3D:Ve,compressedTexSubImage2D:be,compressedTexSubImage3D:Ue,scissor:Je,viewport:Oe,reset:Tt}}function fg(s,e,t,r){const a=Lw(r);switch(t){case zg:return s*e;case Hg:return s*e;case Vg:return s*e*2;case Gg:return s*e/a.components*a.byteLength;case vf:return s*e/a.components*a.byteLength;case Wg:return s*e*2/a.components*a.byteLength;case xf:return s*e*2/a.components*a.byteLength;case Bg:return s*e*3/a.components*a.byteLength;case hi:return s*e*4/a.components*a.byteLength;case yf:return s*e*4/a.components*a.byteLength;case kl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ud:case kd:return Math.max(s,16)*Math.max(e,8)/4;case Id:case Fd:return Math.max(s,8)*Math.max(e,8)/2;case Od:case zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case qd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ef:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hl:case tf:case nf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jg:case rf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case sf:case of:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lw(s){switch(s){case Zi:case Fg:return{byteLength:1,components:1};case Jo:case kg:case ea:return{byteLength:2,components:1};case gf:case _f:return{byteLength:2,components:4};case is:case mf:case Yi:return{byteLength:4,components:1};case Og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Dw(s,e,t,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new at,m=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,T){return y?new OffscreenCanvas(N,T):Xl("canvas")}function w(N,T,Q){let me=1;const _e=Ye(N);if((_e.width>Q||_e.height>Q)&&(me=Q/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const he=Math.floor(me*_e.width),Ve=Math.floor(me*_e.height);g===void 0&&(g=M(he,Ve));const be=T?M(he,Ve):g;return be.width=he,be.height=Ve,be.getContext("2d").drawImage(N,0,0,he,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ve+")."),be}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),N;return N}function S(N){return N.generateMipmaps}function x(N){s.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(N,T,Q,me,_e=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let he=T;if(T===s.RED&&(Q===s.FLOAT&&(he=s.R32F),Q===s.HALF_FLOAT&&(he=s.R16F),Q===s.UNSIGNED_BYTE&&(he=s.R8)),T===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.R8UI),Q===s.UNSIGNED_SHORT&&(he=s.R16UI),Q===s.UNSIGNED_INT&&(he=s.R32UI),Q===s.BYTE&&(he=s.R8I),Q===s.SHORT&&(he=s.R16I),Q===s.INT&&(he=s.R32I)),T===s.RG&&(Q===s.FLOAT&&(he=s.RG32F),Q===s.HALF_FLOAT&&(he=s.RG16F),Q===s.UNSIGNED_BYTE&&(he=s.RG8)),T===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RG8UI),Q===s.UNSIGNED_SHORT&&(he=s.RG16UI),Q===s.UNSIGNED_INT&&(he=s.RG32UI),Q===s.BYTE&&(he=s.RG8I),Q===s.SHORT&&(he=s.RG16I),Q===s.INT&&(he=s.RG32I)),T===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Q===s.UNSIGNED_INT&&(he=s.RGB32UI),Q===s.BYTE&&(he=s.RGB8I),Q===s.SHORT&&(he=s.RGB16I),Q===s.INT&&(he=s.RGB32I)),T===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Q===s.UNSIGNED_INT&&(he=s.RGBA32UI),Q===s.BYTE&&(he=s.RGBA8I),Q===s.SHORT&&(he=s.RGBA16I),Q===s.INT&&(he=s.RGBA32I)),T===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),T===s.RGBA){const Ve=_e?Kl:St.getTransfer(me);Q===s.FLOAT&&(he=s.RGBA32F),Q===s.HALF_FLOAT&&(he=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(he=Ve===Rt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function C(N,T){let Q;return N?T===null||T===is||T===no?Q=s.DEPTH24_STENCIL8:T===Yi?Q=s.DEPTH32F_STENCIL8:T===Jo&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===is||T===no?Q=s.DEPTH_COMPONENT24:T===Yi?Q=s.DEPTH_COMPONENT32F:T===Jo&&(Q=s.DEPTH_COMPONENT16),Q}function Y(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==mi&&N.minFilter!==Ti?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function U(N){const T=N.target;T.removeEventListener("dispose",U),X(T),T.isVideoTexture&&m.delete(T)}function k(N){const T=N.target;T.removeEventListener("dispose",k),R(T)}function X(N){const T=r.get(N);if(T.__webglInit===void 0)return;const Q=N.source,me=_.get(Q);if(me){const _e=me[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&L(N),Object.keys(me).length===0&&_.delete(Q)}r.remove(N)}function L(N){const T=r.get(N);s.deleteTexture(T.__webglTexture);const Q=N.source,me=_.get(Q);delete me[T.__cacheKey],u.memory.textures--}function R(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let _e=0;_e<T.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=N.textures;for(let me=0,_e=Q.length;me<_e;me++){const he=r.get(Q[me]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),u.memory.textures--),r.remove(Q[me])}r.remove(N)}let z=0;function J(){z=0}function $(){const N=z;return N>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),z+=1,N}function re(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function de(N,T){const Q=r.get(N);if(N.isVideoTexture&&qe(N),N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){const me=N.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Q,N,T);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+T)}function ae(N,T){const Q=r.get(N);if(N.version>0&&Q.__version!==N.version){ee(Q,N,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+T)}function ce(N,T){const Q=r.get(N);if(N.version>0&&Q.__version!==N.version){ee(Q,N,T);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+T)}function B(N,T){const Q=r.get(N);if(N.version>0&&Q.__version!==N.version){fe(Q,N,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+T)}const ue={[Dd]:s.REPEAT,[ts]:s.CLAMP_TO_EDGE,[Nd]:s.MIRRORED_REPEAT},le={[mi]:s.NEAREST,[vy]:s.NEAREST_MIPMAP_NEAREST,[fl]:s.NEAREST_MIPMAP_LINEAR,[Ti]:s.LINEAR,[Hu]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},F={[My]:s.NEVER,[Cy]:s.ALWAYS,[Ey]:s.LESS,[Yg]:s.LEQUAL,[wy]:s.EQUAL,[by]:s.GEQUAL,[Ty]:s.GREATER,[Ay]:s.NOTEQUAL};function se(N,T){if(T.type===Yi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ti||T.magFilter===Hu||T.magFilter===fl||T.magFilter===ns||T.minFilter===Ti||T.minFilter===Hu||T.minFilter===fl||T.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ue[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ue[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ue[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,le[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===mi||T.minFilter!==fl&&T.minFilter!==ns||T.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(N,T){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",U));const me=T.source;let _e=_.get(me);_e===void 0&&(_e={},_.set(me,_e));const he=re(T);if(he!==N.__cacheKey){_e[he]===void 0&&(_e[he]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),_e[he].usedTimes++;const Ve=_e[N.__cacheKey];Ve!==void 0&&(_e[N.__cacheKey].usedTimes--,Ve.usedTimes===0&&L(T)),N.__cacheKey=he,N.__webglTexture=_e[he].texture}return Q}function ee(N,T,Q){let me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=s.TEXTURE_3D);const _e=Ne(N,T),he=T.source;t.bindTexture(me,N.__webglTexture,s.TEXTURE0+Q);const Ve=r.get(he);if(he.version!==Ve.__version||_e===!0){t.activeTexture(s.TEXTURE0+Q);const be=St.getPrimaries(St.workingColorSpace),Ue=T.colorSpace===Ar?null:St.getPrimaries(T.colorSpace),ut=T.colorSpace===Ar||be===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Se=w(T.image,!1,a.maxTextureSize);Se=At(T,Se);const ke=l.convert(T.format,T.colorSpace),Qe=l.convert(T.type);let Je=P(T.internalFormat,ke,Qe,T.colorSpace,T.isVideoTexture);se(me,T);let Oe;const ft=T.mipmaps,it=T.isVideoTexture!==!0,Tt=Ve.__version===void 0||_e===!0,V=he.dataReady,Ce=Y(T,Se);if(T.isDepthTexture)Je=C(T.format===io,T.type),Tt&&(it?t.texStorage2D(s.TEXTURE_2D,1,Je,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,ke,Qe,null));else if(T.isDataTexture)if(ft.length>0){it&&Tt&&t.texStorage2D(s.TEXTURE_2D,Ce,Je,ft[0].width,ft[0].height);for(let oe=0,pe=ft.length;oe<pe;oe++)Oe=ft[oe],it?V&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Oe.width,Oe.height,ke,Qe,Oe.data):t.texImage2D(s.TEXTURE_2D,oe,Je,Oe.width,Oe.height,0,ke,Qe,Oe.data);T.generateMipmaps=!1}else it?(Tt&&t.texStorage2D(s.TEXTURE_2D,Ce,Je,Se.width,Se.height),V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,Qe,Se.data)):t.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,ke,Qe,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,ft[0].width,ft[0].height,Se.depth);for(let oe=0,pe=ft.length;oe<pe;oe++)if(Oe=ft[oe],T.format!==hi)if(ke!==null)if(it){if(V)if(T.layerUpdates.size>0){const Le=fg(Oe.width,Oe.height,T.format,T.type);for(const Pe of T.layerUpdates){const rt=Oe.data.subarray(Pe*Le/Oe.data.BYTES_PER_ELEMENT,(Pe+1)*Le/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Pe,Oe.width,Oe.height,1,ke,rt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Oe.width,Oe.height,Se.depth,ke,Oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Je,Oe.width,Oe.height,Se.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Oe.width,Oe.height,Se.depth,ke,Qe,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,Je,Oe.width,Oe.height,Se.depth,0,ke,Qe,Oe.data)}else{it&&Tt&&t.texStorage2D(s.TEXTURE_2D,Ce,Je,ft[0].width,ft[0].height);for(let oe=0,pe=ft.length;oe<pe;oe++)Oe=ft[oe],T.format!==hi?ke!==null?it?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,Oe.width,Oe.height,ke,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,Je,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Oe.width,Oe.height,ke,Qe,Oe.data):t.texImage2D(s.TEXTURE_2D,oe,Je,Oe.width,Oe.height,0,ke,Qe,Oe.data)}else if(T.isDataArrayTexture)if(it){if(Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,Se.width,Se.height,Se.depth),V)if(T.layerUpdates.size>0){const oe=fg(Se.width,Se.height,T.format,T.type);for(const pe of T.layerUpdates){const Le=Se.data.subarray(pe*oe/Se.data.BYTES_PER_ELEMENT,(pe+1)*oe/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,ke,Qe,Le)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,Qe,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,ke,Qe,Se.data);else if(T.isData3DTexture)it?(Tt&&t.texStorage3D(s.TEXTURE_3D,Ce,Je,Se.width,Se.height,Se.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,Qe,Se.data)):t.texImage3D(s.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,ke,Qe,Se.data);else if(T.isFramebufferTexture){if(Tt)if(it)t.texStorage2D(s.TEXTURE_2D,Ce,Je,Se.width,Se.height);else{let oe=Se.width,pe=Se.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(s.TEXTURE_2D,Le,Je,oe,pe,0,ke,Qe,null),oe>>=1,pe>>=1}}else if(ft.length>0){if(it&&Tt){const oe=Ye(ft[0]);t.texStorage2D(s.TEXTURE_2D,Ce,Je,oe.width,oe.height)}for(let oe=0,pe=ft.length;oe<pe;oe++)Oe=ft[oe],it?V&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke,Qe,Oe):t.texImage2D(s.TEXTURE_2D,oe,Je,ke,Qe,Oe);T.generateMipmaps=!1}else if(it){if(Tt){const oe=Ye(Se);t.texStorage2D(s.TEXTURE_2D,Ce,Je,oe.width,oe.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Qe,Se)}else t.texImage2D(s.TEXTURE_2D,0,Je,ke,Qe,Se);S(T)&&x(me),Ve.__version=he.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function fe(N,T,Q){if(T.image.length!==6)return;const me=Ne(N,T),_e=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+Q);const he=r.get(_e);if(_e.version!==he.__version||me===!0){t.activeTexture(s.TEXTURE0+Q);const Ve=St.getPrimaries(St.workingColorSpace),be=T.colorSpace===Ar?null:St.getPrimaries(T.colorSpace),Ue=T.colorSpace===Ar||Ve===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!ut&&!Se?ke[pe]=w(T.image[pe],!0,a.maxCubemapSize):ke[pe]=Se?T.image[pe].image:T.image[pe],ke[pe]=At(T,ke[pe]);const Qe=ke[0],Je=l.convert(T.format,T.colorSpace),Oe=l.convert(T.type),ft=P(T.internalFormat,Je,Oe,T.colorSpace),it=T.isVideoTexture!==!0,Tt=he.__version===void 0||me===!0,V=_e.dataReady;let Ce=Y(T,Qe);se(s.TEXTURE_CUBE_MAP,T);let oe;if(ut){it&&Tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ft,Qe.width,Qe.height);for(let pe=0;pe<6;pe++){oe=ke[pe].mipmaps;for(let Le=0;Le<oe.length;Le++){const Pe=oe[Le];T.format!==hi?Je!==null?it?V&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Je,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Je,Oe,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,Pe.width,Pe.height,0,Je,Oe,Pe.data)}}}else{if(oe=T.mipmaps,it&&Tt){oe.length>0&&Ce++;const pe=Ye(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){it?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,Je,Oe,ke[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,ke[pe].width,ke[pe].height,0,Je,Oe,ke[pe].data);for(let Le=0;Le<oe.length;Le++){const rt=oe[Le].image[pe].image;it?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,rt.width,rt.height,Je,Oe,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,rt.width,rt.height,0,Je,Oe,rt.data)}}else{it?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,Oe,ke[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Je,Oe,ke[pe]);for(let Le=0;Le<oe.length;Le++){const Pe=oe[Le];it?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,Je,Oe,Pe.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,Je,Oe,Pe.image[pe])}}}S(T)&&x(s.TEXTURE_CUBE_MAP),he.__version=_e.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ee(N,T,Q,me,_e,he){const Ve=l.convert(Q.format,Q.colorSpace),be=l.convert(Q.type),Ue=P(Q.internalFormat,Ve,be,Q.colorSpace),ut=r.get(T),Se=r.get(Q);if(Se.__renderTarget=T,!ut.__hasExternalTextures){const ke=Math.max(1,T.width>>he),Qe=Math.max(1,T.height>>he);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,Ue,ke,Qe,T.depth,0,Ve,be,null):t.texImage2D(_e,he,Ue,ke,Qe,0,Ve,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Se.__webglTexture,0,pt(T)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Se.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(N,T,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const me=T.depthTexture,_e=me&&me.isDepthTexture?me.type:null,he=C(T.stencilBuffer,_e),Ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=pt(T);dt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,he,T.width,T.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,N)}else{const me=T.textures;for(let _e=0;_e<me.length;_e++){const he=me[_e],Ve=l.convert(he.format,he.colorSpace),be=l.convert(he.type),Ue=P(he.internalFormat,Ve,be,he.colorSpace),ut=pt(T);Q&&dt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Ue,T.width,T.height):dt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const _e=me.__webglTexture,he=pt(T);if(T.depthTexture.format===Zs)dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(T.depthTexture.format===io)dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ie(N){const T=r.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const me=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=me}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,N)}else if(Q){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(T.__webglDepthbuffer[me],N,!1);else{const _e=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),xe(T.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(N,T,Q){const me=r.get(N);T!==void 0&&Ee(me.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ie(N)}function Ct(N){const T=N.texture,Q=r.get(N),me=r.get(T);N.addEventListener("dispose",k);const _e=N.textures,he=N.isWebGLCubeRenderTarget===!0,Ve=_e.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=T.version,u.memory.textures++),he){Q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[be]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)Q.__webglFramebuffer[be][Ue]=s.createFramebuffer()}else Q.__webglFramebuffer[be]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)Q.__webglFramebuffer[be]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let be=0,Ue=_e.length;be<Ue;be++){const ut=r.get(_e[be]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&dt(N)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let be=0;be<_e.length;be++){const Ue=_e[be];Q.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[be]);const ut=l.convert(Ue.format,Ue.colorSpace),Se=l.convert(Ue.type),ke=P(Ue.internalFormat,ut,Se,Ue.colorSpace,N.isXRRenderTarget===!0),Qe=pt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,ke,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Q.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),se(s.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Ee(Q.__webglFramebuffer[be][Ue],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue);else Ee(Q.__webglFramebuffer[be],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(T)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let be=0,Ue=_e.length;be<Ue;be++){const ut=_e[be],Se=r.get(ut);t.bindTexture(s.TEXTURE_2D,Se.__webglTexture),se(s.TEXTURE_2D,ut),Ee(Q.__webglFramebuffer,N,ut,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),S(ut)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(be=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,me.__webglTexture),se(be,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Ee(Q.__webglFramebuffer[Ue],N,T,s.COLOR_ATTACHMENT0,be,Ue);else Ee(Q.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,be,0);S(T)&&x(be),t.unbindTexture()}N.depthBuffer&&Ie(N)}function mt(N){const T=N.textures;for(let Q=0,me=T.length;Q<me;Q++){const _e=T[Q];if(S(_e)){const he=D(N),Ve=r.get(_e).__webglTexture;t.bindTexture(he,Ve),x(he),t.unbindTexture()}}}const Nt=[],j=[];function vn(N){if(N.samples>0){if(dt(N)===!1){const T=N.textures,Q=N.width,me=N.height;let _e=s.COLOR_BUFFER_BIT;const he=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(N),be=T.length>1;if(be)for(let Ue=0;Ue<T.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ut=r.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,Q,me,0,0,Q,me,_e,s.NEAREST),f===!0&&(Nt.length=0,j.length=0,Nt.push(s.COLOR_ATTACHMENT0+Ue),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Nt.push(he),j.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,j)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ue=0;Ue<T.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ut=r.get(T[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&f){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function pt(N){return Math.min(a.maxSamples,N.samples)}function dt(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(N){const T=u.render.frame;m.get(N)!==T&&(m.set(N,T),N.update())}function At(N,T){const Q=N.colorSpace,me=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==so&&Q!==Ar&&(St.getTransfer(Q)===Rt?(me!==hi||_e!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function Ye(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.setTexture2D=de,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=dt}function Nw(s,e){function t(r,a=Ar){let l;const u=St.getTransfer(a);if(r===Zi)return s.UNSIGNED_BYTE;if(r===gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===_f)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Og)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Fg)return s.BYTE;if(r===kg)return s.SHORT;if(r===Jo)return s.UNSIGNED_SHORT;if(r===mf)return s.INT;if(r===is)return s.UNSIGNED_INT;if(r===Yi)return s.FLOAT;if(r===ea)return s.HALF_FLOAT;if(r===zg)return s.ALPHA;if(r===Bg)return s.RGB;if(r===hi)return s.RGBA;if(r===Hg)return s.LUMINANCE;if(r===Vg)return s.LUMINANCE_ALPHA;if(r===Zs)return s.DEPTH_COMPONENT;if(r===io)return s.DEPTH_STENCIL;if(r===Gg)return s.RED;if(r===vf)return s.RED_INTEGER;if(r===Wg)return s.RG;if(r===xf)return s.RG_INTEGER;if(r===yf)return s.RGBA_INTEGER;if(r===kl||r===Ol||r===zl||r===Bl)if(u===Rt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===Ud||r===Fd||r===kd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Id)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ud)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Od||r===zd||r===Bd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Od||r===zd)return u===Rt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Bd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hd||r===Vd||r===Gd||r===Wd||r===jd||r===Xd||r===Yd||r===qd||r===$d||r===Kd||r===Zd||r===Qd||r===Jd||r===ef)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Hd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$d)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ef)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hl||r===tf||r===nf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Hl)return u===Rt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===tf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jg||r===rf||r===sf||r===of)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Hl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===rf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===of)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===no?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class Iw extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zo extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uw={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,r),x=this._getHandJoint(p,w);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=m.position.distanceTo(g.position),y=.02,M=.005;p.inputState.pinching&&_>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Uw)))}return d!==null&&(d.visible=a!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Zo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kw=`
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

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new kn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Rr({vertexShader:Fw,fragmentShader:kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pi(new Ql(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zw extends os{constructor(e,t){super();const r=this;let a=null,l=1,u=null,d="local-floor",f=1,p=null,m=null,g=null,_=null,y=null,M=null;const w=new Ow,S=t.getContextAttributes();let x=null,D=null;const P=[],C=[],Y=new at;let U=null;const k=new Wn;k.viewport=new Gt;const X=new Wn;X.viewport=new Gt;const L=[k,X],R=new Iw;let z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=P[ee];return fe===void 0&&(fe=new md,P[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=P[ee];return fe===void 0&&(fe=new md,P[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=P[ee];return fe===void 0&&(fe=new md,P[ee]=fe),fe.getHandSpace()};function $(ee){const fe=C.indexOf(ee.inputSource);if(fe===-1)return;const Ee=P[fe];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,p||u),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function re(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",re),a.removeEventListener("inputsourceschange",de);for(let ee=0;ee<P.length;ee++){const fe=C[ee];fe!==null&&(C[ee]=null,P[ee].disconnect(fe))}z=null,J=null,w.reset(),e.setRenderTarget(x),y=null,_=null,g=null,a=null,D=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",re),a.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(Y),a.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new rs(y.framebufferWidth,y.framebufferHeight,{format:hi,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,Ee=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?io:Zs,Ee=S.stencil?no:is);const Ae={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};g=new XRWebGLBinding(a,t),_=g.createProjectionLayer(Ae),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new rs(_.textureWidth,_.textureHeight,{format:hi,type:Zi,depthTexture:new o0(_.textureWidth,_.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await a.requestReferenceSpace(d),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de(ee){for(let fe=0;fe<ee.removed.length;fe++){const Ee=ee.removed[fe],xe=C.indexOf(Ee);xe>=0&&(C[xe]=null,P[xe].disconnect(Ee))}for(let fe=0;fe<ee.added.length;fe++){const Ee=ee.added[fe];let xe=C.indexOf(Ee);if(xe===-1){for(let Ie=0;Ie<P.length;Ie++)if(Ie>=C.length){C.push(Ee),xe=Ie;break}else if(C[Ie]===null){C[Ie]=Ee,xe=Ie;break}if(xe===-1)break}const Ae=P[xe];Ae&&Ae.connect(Ee)}}const ae=new Z,ce=new Z;function B(ee,fe,Ee){ae.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const xe=ae.distanceTo(ce),Ae=fe.projectionMatrix.elements,Ie=Ee.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),Ct=Ae[14]/(Ae[10]+1),mt=(Ae[9]+1)/Ae[5],Nt=(Ae[9]-1)/Ae[5],j=(Ae[8]-1)/Ae[0],vn=(Ie[8]+1)/Ie[0],pt=Ze*j,dt=Ze*vn,qe=xe/(-j+vn),At=qe*-j;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(At),ee.translateZ(qe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ae[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=Ze+qe,N=Ct+qe,T=pt-At,Q=dt+(xe-At),me=mt*Ct/N*Ye,_e=Nt*Ct/N*Ye;ee.projectionMatrix.makePerspective(T,Q,me,_e,Ye,N),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let fe=ee.near,Ee=ee.far;w.texture!==null&&(w.depthNear>0&&(fe=w.depthNear),w.depthFar>0&&(Ee=w.depthFar)),R.near=X.near=k.near=fe,R.far=X.far=k.far=Ee,(z!==R.near||J!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,J=R.far),k.layers.mask=ee.layers.mask|2,X.layers.mask=ee.layers.mask|4,R.layers.mask=k.layers.mask|X.layers.mask;const xe=ee.parent,Ae=R.cameras;ue(R,xe);for(let Ie=0;Ie<Ae.length;Ie++)ue(Ae[Ie],xe);Ae.length===2?B(R,k,X):R.projectionMatrix.copy(k.projectionMatrix),le(ee,R,xe)};function le(ee,fe,Ee){Ee===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=af*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function(ee){f=ee,_!==null&&(_.fixedFoveation=ee),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ee)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let F=null;function se(ee,fe){if(m=fe.getViewerPose(p||u),M=fe,m!==null){const Ee=m.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let xe=!1;Ee.length!==R.cameras.length&&(R.cameras.length=0,xe=!0);for(let Ie=0;Ie<Ee.length;Ie++){const Ze=Ee[Ie];let Ct=null;if(y!==null)Ct=y.getViewport(Ze);else{const Nt=g.getViewSubImage(_,Ze);Ct=Nt.viewport,Ie===0&&(e.setRenderTargetTextures(D,Nt.colorTexture,_.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(D))}let mt=L[Ie];mt===void 0&&(mt=new Wn,mt.layers.enable(Ie),mt.viewport=new Gt,L[Ie]=mt),mt.matrix.fromArray(Ze.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ze.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ie===0&&(R.matrix.copy(mt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xe===!0&&R.cameras.push(mt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=g.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&w.init(e,Ie,a.renderState)}}for(let Ee=0;Ee<P.length;Ee++){const xe=C[Ee],Ae=P[Ee];xe!==null&&Ae!==void 0&&Ae.update(xe,fe,p||u)}F&&F(ee,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Ne=new r0;Ne.setAnimationLoop(se),this.setAnimationLoop=function(ee){F=ee},this.dispose=function(){}}}const $r=new bi,Bw=new Ht;function Hw(s,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,t0(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function a(S,x,D,P,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),w(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?f(S,x,D,P):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Fn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Fn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=e.get(x),P=D.envMap,C=D.envMapRotation;P&&(S.envMap.value=P,$r.copy(C),$r.x*=-1,$r.y*=-1,$r.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),S.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler($r)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,D,P){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=P*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Fn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function w(S,x){const D=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Vw(s,e,t,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,P){const C=P.program;r.uniformBlockBinding(D,C)}function p(D,P){let C=a[D.id];C===void 0&&(M(D),C=m(D),a[D.id]=C,D.addEventListener("dispose",S));const Y=P.program;r.updateUBOMapping(D,Y);const U=e.render.frame;l[D.id]!==U&&(_(D),l[D.id]=U)}function m(D){const P=g();D.__bindingPointIndex=P;const C=s.createBuffer(),Y=D.__size,U=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,Y,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,C),C}function g(){for(let D=0;D<d;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const P=a[D.id],C=D.uniforms,Y=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let U=0,k=C.length;U<k;U++){const X=Array.isArray(C[U])?C[U]:[C[U]];for(let L=0,R=X.length;L<R;L++){const z=X[L];if(y(z,U,L,Y)===!0){const J=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let re=0;for(let de=0;de<$.length;de++){const ae=$[de],ce=w(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,J+re,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,re),re+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(D,P,C,Y){const U=D.value,k=P+"_"+C;if(Y[k]===void 0)return typeof U=="number"||typeof U=="boolean"?Y[k]=U:Y[k]=U.clone(),!0;{const X=Y[k];if(typeof U=="number"||typeof U=="boolean"){if(X!==U)return Y[k]=U,!0}else if(X.equals(U)===!1)return X.copy(U),!0}return!1}function M(D){const P=D.uniforms;let C=0;const Y=16;for(let k=0,X=P.length;k<X;k++){const L=Array.isArray(P[k])?P[k]:[P[k]];for(let R=0,z=L.length;R<z;R++){const J=L[R],$=Array.isArray(J.value)?J.value:[J.value];for(let re=0,de=$.length;re<de;re++){const ae=$[re],ce=w(ae),B=C%Y,ue=B%ce.boundary,le=B+ue;C+=ue,le!==0&&Y-le<ce.storage&&(C+=Y-le),J.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=C,C+=ce.storage}}}const U=C%Y;return U>0&&(C+=Y-U),D.__size=C,D.__cache={},this}function w(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function S(D){const P=D.target;P.removeEventListener("dispose",S);const C=u.indexOf(P.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function x(){for(const D in a)s.deleteBuffer(a[D]);u=[],a={},l={}}return{bind:f,update:p,dispose:x}}class Gw{constructor(e={}){const{canvas:t=Ly(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),w=new Int32Array(4);let S=null,x=null;const D=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=$i,this.toneMappingExposure=1;const C=this;let Y=!1,U=0,k=0,X=null,L=-1,R=null;const z=new Gt,J=new Gt;let $=null;const re=new vt(0);let de=0,ae=t.width,ce=t.height,B=1,ue=null,le=null;const F=new Gt(0,0,ae,ce),se=new Gt(0,0,ae,ce);let Ne=!1;const ee=new Ef;let fe=!1,Ee=!1;const xe=new Ht,Ae=new Ht,Ie=new Z,Ze=new Gt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Nt(){return X===null?B:1}let j=r;function vn(b,G){return t.getContext(b,G)}try{const b={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hf}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),j===null){const G="webgl2";if(j=vn(G,b),j===null)throw vn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let pt,dt,qe,At,Ye,N,T,Q,me,_e,he,Ve,be,Ue,ut,Se,ke,Qe,Je,Oe,ft,it,Tt,V;function Ce(){pt=new q1(j),pt.init(),it=new Nw(j,pt),dt=new V1(j,pt,e,it),qe=new Pw(j,pt),dt.reverseDepthBuffer&&_&&qe.buffers.depth.setReversed(!0),At=new Z1(j),Ye=new mw,N=new Dw(j,pt,qe,Ye,dt,it,At),T=new W1(C),Q=new Y1(C),me=new rS(j),Tt=new B1(j,me),_e=new $1(j,me,At,Tt),he=new J1(j,_e,me,At),Je=new Q1(j,dt,N),Se=new G1(Ye),Ve=new pw(C,T,Q,pt,dt,Tt,Se),be=new Hw(C,Ye),Ue=new _w,ut=new Ew(pt),Qe=new z1(C,T,Q,qe,he,y,f),ke=new Cw(C,he,dt),V=new Vw(j,At,dt,qe),Oe=new H1(j,pt,At),ft=new K1(j,pt,At),At.programs=Ve.programs,C.capabilities=dt,C.extensions=pt,C.properties=Ye,C.renderLists=Ue,C.shadowMap=ke,C.state=qe,C.info=At}Ce();const oe=new zw(C,j);this.xr=oe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const b=pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(ae,ce,!1))},this.getSize=function(b){return b.set(ae,ce)},this.setSize=function(b,G,ne=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,ce=G,t.width=Math.floor(b*B),t.height=Math.floor(G*B),ne===!0&&(t.style.width=b+"px",t.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(ae*B,ce*B).floor()},this.setDrawingBufferSize=function(b,G,ne){ae=b,ce=G,B=ne,t.width=Math.floor(b*ne),t.height=Math.floor(G*ne),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(F)},this.setViewport=function(b,G,ne,ie){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,G,ne,ie),qe.viewport(z.copy(F).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,G,ne,ie){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,G,ne,ie),qe.scissor(J.copy(se).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(b){qe.setScissorTest(Ne=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(b=!0,G=!0,ne=!0){let ie=0;if(b){let W=!1;if(X!==null){const Te=X.texture.format;W=Te===yf||Te===xf||Te===vf}if(W){const Te=X.texture.type,Me=Te===Zi||Te===is||Te===Jo||Te===no||Te===gf||Te===_f,Ge=Qe.getClearColor(),Be=Qe.getClearAlpha(),et=Ge.r,nt=Ge.g,We=Ge.b;Me?(M[0]=et,M[1]=nt,M[2]=We,M[3]=Be,j.clearBufferuiv(j.COLOR,0,M)):(w[0]=et,w[1]=nt,w[2]=We,w[3]=Be,j.clearBufferiv(j.COLOR,0,w))}else ie|=j.COLOR_BUFFER_BIT}G&&(ie|=j.DEPTH_BUFFER_BIT),ne&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ue.dispose(),ut.dispose(),Ye.dispose(),T.dispose(),Q.dispose(),he.dispose(),Tt.dispose(),V.dispose(),Ve.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",as),oe.removeEventListener("sessionend",Qi),Ci.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const b=At.autoReset,G=ke.enabled,ne=ke.autoUpdate,ie=ke.needsUpdate,W=ke.type;Ce(),At.autoReset=b,ke.enabled=G,ke.autoUpdate=ne,ke.needsUpdate=ie,ke.type=W}function Pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){const G=b.target;G.removeEventListener("dispose",rt),Ut(G)}function Ut(b){Yt(b),Ye.remove(b)}function Yt(b){const G=Ye.get(b).programs;G!==void 0&&(G.forEach(function(ne){Ve.releaseProgram(ne)}),b.isShaderMaterial&&Ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,ne,ie,W,Te){G===null&&(G=Ct);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ge=oa(b,G,ne,ie,W);qe.setMaterial(ie,Me);let Be=ne.index,et=1;if(ie.wireframe===!0){if(Be=_e.getWireframeAttribute(ne),Be===void 0)return;et=2}const nt=ne.drawRange,We=ne.attributes.position;let _t=nt.start*et,wt=(nt.start+nt.count)*et;Te!==null&&(_t=Math.max(_t,Te.start*et),wt=Math.min(wt,(Te.start+Te.count)*et)),Be!==null?(_t=Math.max(_t,0),wt=Math.min(wt,Be.count)):We!=null&&(_t=Math.max(_t,0),wt=Math.min(wt,We.count));const gt=wt-_t;if(gt<0||gt===1/0)return;Tt.setup(W,ie,Ge,ne,Be);let cn,st=Oe;if(Be!==null&&(cn=me.get(Be),st=ft,st.setIndex(cn)),W.isMesh)ie.wireframe===!0?(qe.setLineWidth(ie.wireframeLinewidth*Nt()),st.setMode(j.LINES)):st.setMode(j.TRIANGLES);else if(W.isLine){let Xe=ie.linewidth;Xe===void 0&&(Xe=1),qe.setLineWidth(Xe*Nt()),W.isLineSegments?st.setMode(j.LINES):W.isLineLoop?st.setMode(j.LINE_LOOP):st.setMode(j.LINE_STRIP)}else W.isPoints?st.setMode(j.POINTS):W.isSprite&&st.setMode(j.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)st.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xe=W._multiDrawStarts,ti=W._multiDrawCounts,Mt=W._multiDrawCount,un=Be?me.get(Be).bytesPerElement:1,ni=Ye.get(ie).currentProgram.getUniforms();for(let qt=0;qt<Mt;qt++)ni.setValue(j,"_gl_DrawID",qt),st.render(Xe[qt]/un,ti[qt])}else if(W.isInstancedMesh)st.renderInstances(_t,gt,W.count);else if(ne.isInstancedBufferGeometry){const Xe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,ti=Math.min(ne.instanceCount,Xe);st.renderInstances(_t,gt,ti)}else st.render(_t,gt)};function xt(b,G,ne){b.transparent===!0&&b.side===Xi&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,ls(b,G,ne),b.side=Cr,b.needsUpdate=!0,ls(b,G,ne),b.side=Xi):ls(b,G,ne)}this.compile=function(b,G,ne=null){ne===null&&(ne=b),x=ut.get(ne),x.init(G),P.push(x),ne.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),b!==ne&&b.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights();const ie=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Me=0;Me<Te.length;Me++){const Ge=Te[Me];xt(Ge,ne,W),ie.add(Ge)}else xt(Te,ne,W),ie.add(Te)}),P.pop(),x=null,ie},this.compileAsync=function(b,G,ne=null){const ie=this.compile(b,G,ne);return new Promise(W=>{function Te(){if(ie.forEach(function(Me){Ye.get(Me).currentProgram.isReady()&&ie.delete(Me)}),ie.size===0){W(b);return}setTimeout(Te,10)}pt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let An=null;function xn(b){An&&An(b)}function as(){Ci.stop()}function Qi(){Ci.start()}const Ci=new r0;Ci.setAnimationLoop(xn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(b){An=b,oe.setAnimationLoop(b),b===null?Ci.stop():Ci.start()},oe.addEventListener("sessionstart",as),oe.addEventListener("sessionend",Qi),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(G),G=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,G,X),x=ut.get(b,P.length),x.init(G),P.push(x),Ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ee.setFromProjectionMatrix(Ae),Ee=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,Ee),S=Ue.get(b,D.length),S.init(),D.push(S),oe.enabled===!0&&oe.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&Ri(Te,G,-1/0,C.sortObjects)}Ri(b,G,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ue,le),mt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,mt&&Qe.addToRenderList(S,b),this.info.render.frame++,fe===!0&&Se.beginShadows();const ne=x.state.shadowsArray;ke.render(ne,b,G),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=S.opaque,W=S.transmissive;if(x.setupLights(),G.isArrayCamera){const Te=G.cameras;if(W.length>0)for(let Me=0,Ge=Te.length;Me<Ge;Me++){const Be=Te[Me];Lr(ie,W,b,Be)}mt&&Qe.render(b);for(let Me=0,Ge=Te.length;Me<Ge;Me++){const Be=Te[Me];Pr(S,b,Be,Be.viewport)}}else W.length>0&&Lr(ie,W,b,G),mt&&Qe.render(b),Pr(S,b,G);X!==null&&(N.updateMultisampleRenderTarget(X),N.updateRenderTargetMipmap(X)),b.isScene===!0&&b.onAfterRender(C,b,G),Tt.resetDefaultState(),L=-1,R=null,P.pop(),P.length>0?(x=P[P.length-1],fe===!0&&Se.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Ri(b,G,ne,ie){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){ie&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const Me=he.update(b),Ge=b.material;Ge.visible&&S.push(b,Me,Ge,ne,Ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ee.intersectsObject(b))){const Me=he.update(b),Ge=b.material;if(ie&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ze.copy(Me.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const Be=Me.groups;for(let et=0,nt=Be.length;et<nt;et++){const We=Be[et],_t=Ge[We.materialIndex];_t&&_t.visible&&S.push(b,Me,_t,ne,Ze.z,We)}}else Ge.visible&&S.push(b,Me,Ge,ne,Ze.z,null)}}const Te=b.children;for(let Me=0,Ge=Te.length;Me<Ge;Me++)Ri(Te[Me],G,ne,ie)}function Pr(b,G,ne,ie){const W=b.opaque,Te=b.transmissive,Me=b.transparent;x.setupLightsView(ne),fe===!0&&Se.setGlobalState(C.clippingPlanes,ne),ie&&qe.viewport(z.copy(ie)),W.length>0&&Ji(W,G,ne),Te.length>0&&Ji(Te,G,ne),Me.length>0&&Ji(Me,G,ne),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Lr(b,G,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ie.id]===void 0&&(x.state.transmissionRenderTarget[ie.id]=new rs(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?ea:Zi,minFilter:ns,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Te=x.state.transmissionRenderTarget[ie.id],Me=ie.viewport||z;Te.setSize(Me.z,Me.w);const Ge=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(re),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),mt&&Qe.render(ne);const Be=C.toneMapping;C.toneMapping=$i;const et=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),x.setupLightsView(ie),fe===!0&&Se.setGlobalState(C.clippingPlanes,ie),Ji(b,ne,ie),N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te),pt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,_t=G.length;We<_t;We++){const wt=G[We],gt=wt.object,cn=wt.geometry,st=wt.material,Xe=wt.group;if(st.side===Xi&&gt.layers.test(ie.layers)){const ti=st.side;st.side=Fn,st.needsUpdate=!0,ra(gt,ne,ie,cn,st,Xe),st.side=ti,st.needsUpdate=!0,nt=!0}}nt===!0&&(N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te))}C.setRenderTarget(Ge),C.setClearColor(re,de),et!==void 0&&(ie.viewport=et),C.toneMapping=Be}function Ji(b,G,ne){const ie=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Te=b.length;W<Te;W++){const Me=b[W],Ge=Me.object,Be=Me.geometry,et=ie===null?Me.material:ie,nt=Me.group;Ge.layers.test(ne.layers)&&ra(Ge,G,ne,Be,et,nt)}}function ra(b,G,ne,ie,W,Te){b.onBeforeRender(C,G,ne,ie,W,Te),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(C,G,ne,ie,b,Te),W.transparent===!0&&W.side===Xi&&W.forceSinglePass===!1?(W.side=Fn,W.needsUpdate=!0,C.renderBufferDirect(ne,G,ie,W,b,Te),W.side=Cr,W.needsUpdate=!0,C.renderBufferDirect(ne,G,ie,W,b,Te),W.side=Xi):C.renderBufferDirect(ne,G,ie,W,b,Te),b.onAfterRender(C,G,ne,ie,W,Te)}function ls(b,G,ne){G.isScene!==!0&&(G=Ct);const ie=Ye.get(b),W=x.state.lights,Te=x.state.shadowsArray,Me=W.state.version,Ge=Ve.getParameters(b,W.state,Te,G,ne),Be=Ve.getProgramCacheKey(Ge);let et=ie.programs;ie.environment=b.isMeshStandardMaterial?G.environment:null,ie.fog=G.fog,ie.envMap=(b.isMeshStandardMaterial?Q:T).get(b.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,et===void 0&&(b.addEventListener("dispose",rt),et=new Map,ie.programs=et);let nt=et.get(Be);if(nt!==void 0){if(ie.currentProgram===nt&&ie.lightsStateVersion===Me)return _i(b,Ge),nt}else Ge.uniforms=Ve.getUniforms(b),b.onBeforeCompile(Ge,C),nt=Ve.acquireProgram(Ge,Be),et.set(Be,nt),ie.uniforms=Ge.uniforms;const We=ie.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(We.clippingPlanes=Se.uniform),_i(b,Ge),ie.needsLights=ec(b),ie.lightsStateVersion=Me,ie.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),ie.currentProgram=nt,ie.uniformsList=null,nt}function sa(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=Gl.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function _i(b,G){const ne=Ye.get(b);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function oa(b,G,ne,ie,W){G.isScene!==!0&&(G=Ct),N.resetTextureUnits();const Te=G.fog,Me=ie.isMeshStandardMaterial?G.environment:null,Ge=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:so,Be=(ie.isMeshStandardMaterial?Q:T).get(ie.envMap||Me),et=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),We=!!ne.morphAttributes.position,_t=!!ne.morphAttributes.normal,wt=!!ne.morphAttributes.color;let gt=$i;ie.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(gt=C.toneMapping);const cn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,st=cn!==void 0?cn.length:0,Xe=Ye.get(ie),ti=x.state.lights;if(fe===!0&&(Ee===!0||b!==R)){const yn=b===R&&ie.id===L;Se.setState(ie,b,yn)}let Mt=!1;ie.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ti.state.version||Xe.outputColorSpace!==Ge||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==Be||ie.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==et||Xe.vertexTangents!==nt||Xe.morphTargets!==We||Xe.morphNormals!==_t||Xe.morphColors!==wt||Xe.toneMapping!==gt||Xe.morphTargetsCount!==st)&&(Mt=!0):(Mt=!0,Xe.__version=ie.version);let un=Xe.currentProgram;Mt===!0&&(un=ls(ie,G,W));let ni=!1,qt=!1,vi=!1;const Lt=un.getUniforms(),jn=Xe.uniforms;if(qe.useProgram(un.program)&&(ni=!0,qt=!0,vi=!0),ie.id!==L&&(L=ie.id,qt=!0),ni||R!==b){qe.buffers.depth.getReversed()?(xe.copy(b.projectionMatrix),Ny(xe),Iy(xe),Lt.setValue(j,"projectionMatrix",xe)):Lt.setValue(j,"projectionMatrix",b.projectionMatrix),Lt.setValue(j,"viewMatrix",b.matrixWorldInverse);const Xn=Lt.map.cameraPosition;Xn!==void 0&&Xn.setValue(j,Ie.setFromMatrixPosition(b.matrixWorld)),dt.logarithmicDepthBuffer&&Lt.setValue(j,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Lt.setValue(j,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,qt=!0,vi=!0)}if(W.isSkinnedMesh){Lt.setOptional(j,W,"bindMatrix"),Lt.setOptional(j,W,"bindMatrixInverse");const yn=W.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Lt.setValue(j,"boneTexture",yn.boneTexture,N))}W.isBatchedMesh&&(Lt.setOptional(j,W,"batchingTexture"),Lt.setValue(j,"batchingTexture",W._matricesTexture,N),Lt.setOptional(j,W,"batchingIdTexture"),Lt.setValue(j,"batchingIdTexture",W._indirectTexture,N),Lt.setOptional(j,W,"batchingColorTexture"),W._colorsTexture!==null&&Lt.setValue(j,"batchingColorTexture",W._colorsTexture,N));const Pi=ne.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Je.update(W,ne,un),(qt||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,Lt.setValue(j,"receiveShadow",W.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(jn.envMap.value=Be,jn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&G.environment!==null&&(jn.envMapIntensity.value=G.environmentIntensity),qt&&(Lt.setValue(j,"toneMappingExposure",C.toneMappingExposure),Xe.needsLights&&aa(jn,vi),Te&&ie.fog===!0&&be.refreshFogUniforms(jn,Te),be.refreshMaterialUniforms(jn,ie,B,ce,x.state.transmissionRenderTarget[b.id]),Gl.upload(j,sa(Xe),jn,N)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Gl.upload(j,sa(Xe),jn,N),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Lt.setValue(j,"center",W.center),Lt.setValue(j,"modelViewMatrix",W.modelViewMatrix),Lt.setValue(j,"normalMatrix",W.normalMatrix),Lt.setValue(j,"modelMatrix",W.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const yn=ie.uniformsGroups;for(let Xn=0,bn=yn.length;Xn<bn;Xn++){const la=yn[Xn];V.update(la,un),V.bind(la,un)}}return un}function aa(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function ec(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,G,ne){Ye.get(b.texture).__webglTexture=G,Ye.get(b.depthTexture).__webglTexture=ne;const ie=Ye.get(b);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,G){const ne=Ye.get(b);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,ne=0){X=b,U=G,k=ne;let ie=!0,W=null,Te=!1,Me=!1;if(b){const Be=Ye.get(b);if(Be.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(j.FRAMEBUFFER,null),ie=!1;else if(Be.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(Be.__hasExternalTextures)N.rebindTextures(b,Ye.get(b.texture).__webglTexture,Ye.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const We=b.depthTexture;if(Be.__boundDepthTexture!==We){if(We!==null&&Ye.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const et=b.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Me=!0);const nt=Ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(nt[G])?W=nt[G][ne]:W=nt[G],Te=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?W=Ye.get(b).__webglMultisampledFramebuffer:Array.isArray(nt)?W=nt[ne]:W=nt,z.copy(b.viewport),J.copy(b.scissor),$=b.scissorTest}else z.copy(F).multiplyScalar(B).floor(),J.copy(se).multiplyScalar(B).floor(),$=Ne;if(qe.bindFramebuffer(j.FRAMEBUFFER,W)&&ie&&qe.drawBuffers(b,W),qe.viewport(z),qe.scissor(J),qe.setScissorTest($),Te){const Be=Ye.get(b.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,ne)}else if(Me){const Be=Ye.get(b.texture),et=G||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Be.__webglTexture,ne||0,et)}L=-1},this.readRenderTargetPixels=function(b,G,ne,ie,W,Te,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){qe.bindFramebuffer(j.FRAMEBUFFER,Ge);try{const Be=b.texture,et=Be.format,nt=Be.type;if(!dt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-ie&&ne>=0&&ne<=b.height-W&&j.readPixels(G,ne,ie,W,it.convert(et),it.convert(nt),Te)}finally{const Be=X!==null?Ye.get(X).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,G,ne,ie,W,Te,Me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){const Be=b.texture,et=Be.format,nt=Be.type;if(!dt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=b.width-ie&&ne>=0&&ne<=b.height-W){qe.bindFramebuffer(j.FRAMEBUFFER,Ge);const We=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,We),j.bufferData(j.PIXEL_PACK_BUFFER,Te.byteLength,j.STREAM_READ),j.readPixels(G,ne,ie,W,it.convert(et),it.convert(nt),0);const _t=X!==null?Ye.get(X).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,_t);const wt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Dy(j,wt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,We),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Te),j.deleteBuffer(We),j.deleteSync(wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,G=null,ne=0){b.isTexture!==!0&&($o("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1]);const ie=Math.pow(2,-ne),W=Math.floor(b.image.width*ie),Te=Math.floor(b.image.height*ie),Me=G!==null?G.x:0,Ge=G!==null?G.y:0;N.setTexture2D(b,0),j.copyTexSubImage2D(j.TEXTURE_2D,ne,0,0,Me,Ge,W,Te),qe.unbindTexture()},this.copyTextureToTexture=function(b,G,ne=null,ie=null,W=0){b.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,b=arguments[1],G=arguments[2],W=arguments[3]||0,ne=null);let Te,Me,Ge,Be,et,nt,We,_t,wt;const gt=b.isCompressedTexture?b.mipmaps[W]:b.image;ne!==null?(Te=ne.max.x-ne.min.x,Me=ne.max.y-ne.min.y,Ge=ne.isBox3?ne.max.z-ne.min.z:1,Be=ne.min.x,et=ne.min.y,nt=ne.isBox3?ne.min.z:0):(Te=gt.width,Me=gt.height,Ge=gt.depth||1,Be=0,et=0,nt=0),ie!==null?(We=ie.x,_t=ie.y,wt=ie.z):(We=0,_t=0,wt=0);const cn=it.convert(G.format),st=it.convert(G.type);let Xe;G.isData3DTexture?(N.setTexture3D(G,0),Xe=j.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(N.setTexture2DArray(G,0),Xe=j.TEXTURE_2D_ARRAY):(N.setTexture2D(G,0),Xe=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,G.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,G.unpackAlignment);const ti=j.getParameter(j.UNPACK_ROW_LENGTH),Mt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),un=j.getParameter(j.UNPACK_SKIP_PIXELS),ni=j.getParameter(j.UNPACK_SKIP_ROWS),qt=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,gt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,gt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Be),j.pixelStorei(j.UNPACK_SKIP_ROWS,et),j.pixelStorei(j.UNPACK_SKIP_IMAGES,nt);const vi=b.isDataArrayTexture||b.isData3DTexture,Lt=G.isDataArrayTexture||G.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const jn=Ye.get(b),Pi=Ye.get(G),yn=Ye.get(jn.__renderTarget),Xn=Ye.get(Pi.__renderTarget);qe.bindFramebuffer(j.READ_FRAMEBUFFER,yn.__webglFramebuffer),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let bn=0;bn<Ge;bn++)vi&&j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ye.get(b).__webglTexture,W,nt+bn),b.isDepthTexture?(Lt&&j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ye.get(G).__webglTexture,W,wt+bn),j.blitFramebuffer(Be,et,Te,Me,We,_t,Te,Me,j.DEPTH_BUFFER_BIT,j.NEAREST)):Lt?j.copyTexSubImage3D(Xe,W,We,_t,wt+bn,Be,et,Te,Me):j.copyTexSubImage2D(Xe,W,We,_t,wt+bn,Be,et,Te,Me);qe.bindFramebuffer(j.READ_FRAMEBUFFER,null),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Lt?b.isDataTexture||b.isData3DTexture?j.texSubImage3D(Xe,W,We,_t,wt,Te,Me,Ge,cn,st,gt.data):G.isCompressedArrayTexture?j.compressedTexSubImage3D(Xe,W,We,_t,wt,Te,Me,Ge,cn,gt.data):j.texSubImage3D(Xe,W,We,_t,wt,Te,Me,Ge,cn,st,gt):b.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,W,We,_t,Te,Me,cn,st,gt.data):b.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,W,We,_t,gt.width,gt.height,cn,gt.data):j.texSubImage2D(j.TEXTURE_2D,W,We,_t,Te,Me,cn,st,gt);j.pixelStorei(j.UNPACK_ROW_LENGTH,ti),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Mt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,un),j.pixelStorei(j.UNPACK_SKIP_ROWS,ni),j.pixelStorei(j.UNPACK_SKIP_IMAGES,qt),W===0&&G.generateMipmaps&&j.generateMipmap(Xe),qe.unbindTexture()},this.copyTextureToTexture3D=function(b,G,ne=null,ie=null,W=0){return b.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,b=arguments[2],G=arguments[3],W=arguments[4]||0),$o('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,G,ne,ie,W)},this.initRenderTarget=function(b){Ye.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),qe.unbindTexture()},this.resetState=function(){U=0,k=0,X=null,qe.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class Tf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(e),this.density=t}clone(){return new Tf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ww extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class d0 extends oo{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yl=new Z,ql=new Z,hg=new Ht,Xo=new Sf,Nl=new Zl,gd=new Z,pg=new Z;class jw extends ln{constructor(e=new gi,t=new d0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Yl.fromBufferAttribute(t,a-1),ql.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Yl.distanceTo(ql);e.setAttribute("lineDistance",new _n(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(a),Nl.radius+=l,e.ray.intersectsSphere(Nl)===!1)return;hg.copy(a).invert(),Xo.copy(e.ray).applyMatrix4(hg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=this.isLineSegments?2:1,m=r.index,_=r.attributes.position;if(m!==null){const y=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let w=y,S=M-1;w<S;w+=p){const x=m.getX(w),D=m.getX(w+1),P=Il(this,e,Xo,f,x,D);P&&t.push(P)}if(this.isLineLoop){const w=m.getX(M-1),S=m.getX(y),x=Il(this,e,Xo,f,w,S);x&&t.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let w=y,S=M-1;w<S;w+=p){const x=Il(this,e,Xo,f,w,w+1);x&&t.push(x)}if(this.isLineLoop){const w=Il(this,e,Xo,f,M-1,y);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Il(s,e,t,r,a,l){const u=s.geometry.attributes.position;if(Yl.fromBufferAttribute(u,a),ql.fromBufferAttribute(u,l),t.distanceSqToSegment(Yl,ql,gd,pg)>r)return;gd.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(gd);if(!(f<e.near||f>e.far))return{distance:f,point:pg.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const mg=new Z,gg=new Z;class Xw extends jw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)mg.fromBufferAttribute(t,a),gg.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+mg.distanceTo(gg);e.setAttribute("lineDistance",new _n(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Af extends gi{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],u=[],d=[],f=[],p=new Z,m=new at;u.push(0,0,0),d.push(0,0,1),f.push(.5,.5);for(let g=0,_=3;g<=t;g++,_+=3){const y=r+g/t*a;p.x=e*Math.cos(y),p.y=e*Math.sin(y),u.push(p.x,p.y,p.z),d.push(0,0,1),m.x=(u[_]/e+1)/2,m.y=(u[_+1]/e+1)/2,f.push(m.x,m.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new _n(u,3)),this.setAttribute("normal",new _n(d,3)),this.setAttribute("uv",new _n(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Af(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yw extends oo{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xg,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class f0 extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const _d=new Ht,_g=new Z,vg=new Z;class qw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;_g.setFromMatrixPosition(e.matrixWorld),t.position.copy(_g),vg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vg),t.updateMatrixWorld(),_d.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(_d)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $w extends qw{constructor(){super(new s0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vd extends f0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new $w}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kw extends f0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xg{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zw extends Xw{constructor(e=10,t=10,r=4473924,a=8947848){r=new vt(r),a=new vt(a);const l=t/2,u=e/t,d=e/2,f=[],p=[];for(let _=0,y=0,M=-d;_<=t;_++,M+=u){f.push(-d,0,M,d,0,M),f.push(M,0,-d,M,0,d);const w=_===l?r:a;w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3}const m=new gi;m.setAttribute("position",new _n(f,3)),m.setAttribute("color",new _n(p,3));const g=new d0({vertexColors:!0,toneMapped:!1});super(m,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Qw extends os{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);const yg={type:"change"},bf={type:"start"},h0={type:"end"},Ul=new Sf,Sg=new Tr,Jw=Math.cos(70*Py.DEG2RAD),Zt=new Z,Un=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xd=1e-6;class eT extends Qw{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$s.ROTATE,MIDDLE:$s.DOLLY,RIGHT:$s.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new ss,this._lastTargetPosition=new Z,this._quat=new ss().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xg,this._sphericalDelta=new xg,this._scale=1,this._panOffset=new Z,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new Z,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nT.bind(this),this._onPointerDown=tT.bind(this),this._onPointerUp=iT.bind(this),this._onContextMenu=uT.bind(this),this._onMouseWheel=oT.bind(this),this._onKeyDown=aT.bind(this),this._onTouchStart=lT.bind(this),this._onTouchMove=cT.bind(this),this._onMouseDown=rT.bind(this),this._onMouseMove=sT.bind(this),this._interceptControlDown=dT.bind(this),this._interceptControlUp=fT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yg),this.update(),this.state=Pt.NONE}update(e=null){const t=this.object.position;Zt.copy(t).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Un:r>Math.PI&&(r-=Un),a<-Math.PI?a+=Un:a>Math.PI&&(a-=Un),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=Zt.length();u=this._clampDistance(d*this._scale);const f=d-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Ul.origin.copy(this.object.position),Ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ul.direction))<Jw?this.object.lookAt(this.target):(Sg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ul.intersectPlane(Sg,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>xd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xd||this._lastTargetPosition.distanceToSquared(this.target)>xd?(this.dispatchEvent(yg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zt.setFromMatrixColumn(t,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,t){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(t,1):(Zt.setFromMatrixColumn(t,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Zt.copy(a).sub(this.target);let l=Zt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function tT(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function nT(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function iT(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(h0),this.state=Pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rT(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Pt.DOLLY;break;case $s.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Pt.ROTATE}break;case $s.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(bf)}function sT(s){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function oT(s){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(s.preventDefault(),this.dispatchEvent(bf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(h0))}function aT(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function lT(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Pt.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Pt.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(bf)}function cT(s){switch(this._trackPointer(s),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Pt.NONE}}function uT(s){this.enabled!==!1&&s.preventDefault()}function dT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fT(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Fl=.1;function hT(s,e,t,r){var g,_;const a=new Zo,l=[],u=[],d=[],f=Fl/2;function p(y,M,w){var S,x;return y<0||y>=e||M<0||M>=t||w<0||w>=r?!1:((x=(S=s[M])==null?void 0:S[y])==null?void 0:x[w])!=="transparent"}for(let y=0;y<t;y++)for(let M=0;M<e;M++)for(let w=0;w<r;w++){const S=(_=(g=s[y])==null?void 0:g[M])==null?void 0:_[w];if(!S||S==="transparent")continue;const x=mT(S),D=(M-e/2+.5)*Fl,P=(t-1-y)*Fl+f,C=(w-r/2+.5)*Fl;p(M,y,w+1)||Xs(u,d,[D-f,P-f,C+f],[D+f,P-f,C+f],[D+f,P+f,C+f],[D-f,P+f,C+f],x),p(M,y,w-1)||Xs(u,d,[D+f,P-f,C-f],[D-f,P-f,C-f],[D-f,P+f,C-f],[D+f,P+f,C-f],Yo(x,.82)),p(M,y-1,w)||Xs(u,d,[D-f,P+f,C-f],[D+f,P+f,C-f],[D+f,P+f,C+f],[D-f,P+f,C+f],Yo(x,1.15)),p(M,y+1,w)||Xs(u,d,[D-f,P-f,C+f],[D+f,P-f,C+f],[D+f,P-f,C-f],[D-f,P-f,C-f],Yo(x,.7)),p(M+1,y,w)||Xs(u,d,[D+f,P-f,C+f],[D+f,P-f,C-f],[D+f,P+f,C-f],[D+f,P+f,C+f],Yo(x,.85)),p(M-1,y,w)||Xs(u,d,[D-f,P-f,C-f],[D-f,P-f,C+f],[D-f,P+f,C+f],[D-f,P+f,C-f],Yo(x,.85))}if(u.length){const y=pT(u,d);l.push(y.material),a.add(y)}function m(){l.forEach(y=>y.dispose()),a.traverse(y=>{y.geometry&&y.geometry.dispose()})}return{group:a,dispose:m}}function Xs(s,e,t,r,a,l,u){s.push(...t,...r,...a,...t,...a,...l),e.push(...u,...u,...u,...u,...u,...u)}function pT(s,e){const t=new gi;t.setAttribute("position",new _n(s,3)),t.setAttribute("color",new _n(e,3)),t.computeVertexNormals();const r=new Mf({vertexColors:!0});return new pi(t,r)}function mT(s){const e=parseInt(s.slice(1,3),16)/255,t=parseInt(s.slice(3,5),16)/255,r=parseInt(s.slice(5,7),16)/255;return[e,t,r]}function Yo([s,e,t],r){return[Math.min(1,s*r),Math.min(1,e*r),Math.min(1,t*r)]}function gT(s){const e=ot.useRef(null),t=ot.useRef(null),r=ot.useRef(null),a=ot.useRef(null),l=ot.useRef(null),u=ot.useRef(null),d=ot.useRef(null),f=ot.useRef(null);ot.useEffect(()=>{const g=s.current;if(!g)return;const _=new Gw({antialias:!0,alpha:!1});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(g.clientWidth,g.clientHeight),_.toneMapping=$i,_.setClearColor(788484,1),g.appendChild(_.domElement),e.current=_;const y=new Ww;y.fog=new Tf(788484,.18),t.current=y;const M=new Kw(16771264,.45);y.add(M);const w=new vd(16777215,.6);w.position.set(4,6,4),y.add(w);const S=new vd(8425680,.35);S.position.set(-3,-1,-2),y.add(S);const x=new vd(16746528,.2);x.position.set(0,-3,-5),y.add(x);const D=new Zw(8,16,3811856,2365448);D.position.y=-.05,D.material.transparent=!0,D.material.opacity=.5,y.add(D);const P=new Af(4,32),C=new Yw({color:1708038,transparent:!0,opacity:.6}),Y=new pi(P,C);Y.rotation.x=-Math.PI/2,Y.position.y=-.051,y.add(Y);const U=new Wn(45,g.clientWidth/g.clientHeight,.01,50);U.position.set(2.5,2.8,2.5),U.lookAt(0,1.6,0),r.current=U;const k=new eT(U,_.domElement);k.enableDamping=!0,k.dampingFactor=.06,k.minDistance=.3,k.maxDistance=15,k.target.set(0,1.6,0),a.current=k;let X=!0;function L(){X&&(d.current=requestAnimationFrame(L),k.update(),_.render(y,U))}L();const R=new ResizeObserver(()=>{const z=g.clientWidth,J=g.clientHeight;!z||!J||(_.setSize(z,J),U.aspect=z/J,U.updateProjectionMatrix())});return R.observe(g),()=>{X=!1,cancelAnimationFrame(d.current),R.disconnect(),k.dispose(),C.dispose(),P.dispose(),_.dispose(),g.contains(_.domElement)&&g.removeChild(_.domElement)}},[]),ot.useEffect(()=>Qt.subscribe((_,y)=>{_.activeTheme!==y.activeTheme&&e.current&&Hx(async()=>{const{getTheme:M}=await Promise.resolve().then(()=>Sx);return{getTheme:M}},void 0).then(({getTheme:M})=>{var x;const S=M(_.activeTheme).sceneBackground.replace("#","");(x=e.current)==null||x.setClearColor(parseInt(S,16),1)})}),[]);const p=ot.useCallback(()=>{var D;if(!t.current)return;const{layers:g,canvasWidth:_,canvasHeight:y,depthDimension:M}=Qt.getState(),w=uf(g,_,y,M),{group:S,dispose:x}=hT(w,_,y,M);l.current&&(t.current.remove(l.current),(D=u.current)==null||D.call(u)),t.current.add(S),l.current=S,u.current=x},[]);return ot.useEffect(()=>{p();const g=Qt.subscribe((_,y)=>{(_.layers!==y.layers||_.depthDimension!==y.depthDimension)&&(clearTimeout(f.current),f.current=setTimeout(p,80))});return()=>{g(),clearTimeout(f.current)}},[p]),{exportPng:ot.useCallback(()=>{const g=e.current,_=t.current,{canvasWidth:y,canvasHeight:M,depthDimension:w}=Qt.getState();if(!g||!_)return;const S=1024,x=new Wn(45,1,.01,50),P=Math.max(y,M,w)*.1*2.8;x.position.set(P,P*.75,P),x.lookAt(0,0,0),g.setSize(S,S),g.render(_,x);const C=g.domElement.toDataURL("image/png"),Y=s.current;Y&&(g.setSize(Y.clientWidth,Y.clientHeight),r.current.aspect=Y.clientWidth/Y.clientHeight,r.current.updateProjectionMatrix());const U=document.createElement("a");U.download="picell3d-export.png",U.href=C,U.click()},[])}}function _T({onExport:s}){const e=ot.useRef(null),{exportPng:t}=gT(e);return ot.useEffect(()=>{s&&(s.current=t)},[s,t]),A.jsxs("div",{className:"relative w-full h-full",children:[A.jsx("div",{ref:e,className:"w-full h-full"}),A.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-text-muted pointer-events-none opacity-60 whitespace-nowrap",children:"Drag to rotate · Scroll to zoom"})]})}function vT(){const{palette:s,currentColor:e,setCurrentColor:t,addToPalette:r}=Qt(),a=ot.useRef(null);return A.jsxs("div",{className:"flex flex-col gap-2 p-2",children:[A.jsxs("div",{className:"relative",children:[A.jsx("div",{className:"text-xs text-text-muted mb-1 uppercase tracking-wide",children:"Color"}),A.jsx("div",{className:"w-full h-8 rounded cursor-pointer border border-border hover:border-accent transition-colors",style:{background:e},onClick:()=>{var l;return(l=a.current)==null?void 0:l.click()},title:"Click to open color picker"}),A.jsx("input",{ref:a,type:"color",value:e==="transparent"?"#000000":e,onChange:l=>t(l.target.value),className:"absolute opacity-0 w-0 h-0 pointer-events-none",tabIndex:-1})]}),A.jsx("div",{className:"grid grid-cols-4 gap-1",children:s.map((l,u)=>A.jsx("button",{className:"w-full aspect-square rounded border transition-all duration-100 hover:scale-110",style:{background:l,borderColor:e===l?"#e8a820":"#7a5c2e",boxShadow:e===l?"0 0 6px #c8860a":"none",outline:e===l?"1px solid #e8a820":"none"},onClick:()=>t(l),title:l},u))}),A.jsx("button",{className:"btn-brass w-full text-xs py-1",onClick:()=>{var l;return(l=a.current)==null?void 0:l.click()},children:"+ Custom"})]})}const xT=[4,8,16,24,32,48,64],yT=[{id:"front",label:"← Front"},{id:"both",label:"↔ Both"},{id:"back",label:"Back →"}];function ST(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,setDepthDimension:r,paintDepth:a,setPaintDepth:l,paintDirection:u,setPaintDirection:d,layers:f,activeView:p}=Qt(),m=ot.useMemo(()=>{const _=uf(f,s,e,t);let y=0;for(const M of _)for(const w of M)for(const S of w)S!=="transparent"&&y++;return y},[f,s,e,t]),g=p==="front"||p==="back";return A.jsxs("div",{className:"flex flex-col h-full",children:[A.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1.5 border-b border-border",children:[A.jsx(wg,{size:12,className:"text-accent"}),A.jsx("span",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Voxel Options"})]}),A.jsxs("div",{className:"flex flex-col gap-4 p-3",children:[!g&&A.jsxs("div",{children:[A.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[A.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Depth"}),A.jsxs("span",{className:"text-xs font-mono text-accent",children:[t,"px"]})]}),A.jsx("div",{className:"grid grid-cols-4 gap-1 mb-1.5",children:xT.map(_=>A.jsx("button",{onClick:()=>r(_),className:`text-xs py-0.5 rounded border transition-colors ${t===_?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:_},_))}),A.jsx("input",{type:"range",min:4,max:128,value:t,onChange:_=>r(parseInt(_.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}})]}),A.jsxs("div",{children:[A.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[A.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Paint Depth"}),A.jsx("span",{className:"text-xs font-mono text-accent",children:a})]}),A.jsx("input",{type:"range",min:1,max:g?Math.floor(t/2):t,value:a,onChange:_=>l(parseInt(_.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}}),A.jsxs("div",{className:"flex justify-between text-xs text-text-muted mt-0.5",children:[A.jsx("span",{children:"1"}),A.jsx("span",{children:g?Math.floor(t/2):t})]})]}),g&&A.jsxs("div",{children:[A.jsx("div",{className:"mb-1.5",children:A.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Direction"})}),A.jsx("div",{className:"grid grid-cols-3 gap-1",children:yT.map(({id:_,label:y})=>A.jsx("button",{onClick:()=>d(_),className:`text-xs py-0.5 rounded border transition-colors ${u===_?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:y},_))})]}),A.jsxs("div",{className:"flex flex-col gap-1.5 text-xs",children:[A.jsxs("div",{className:"flex justify-between text-text-muted",children:[A.jsx("span",{children:"Grid size"}),A.jsxs("span",{className:"font-mono text-text",children:[s,"×",e,"×",t]})]}),A.jsxs("div",{className:"flex justify-between text-text-muted",children:[A.jsx("span",{children:"Voxels"}),A.jsx("span",{className:"font-mono text-text",children:m.toLocaleString()})]}),A.jsxs("div",{className:"flex justify-between text-text-muted",children:[A.jsx("span",{children:"Active view"}),A.jsx("span",{className:"font-mono text-accent capitalize",children:p})]})]}),A.jsx("div",{className:"text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5",style:{background:"color-mix(in srgb, var(--color-background) 60%, transparent)"},children:g?A.jsxs(A.Fragment,{children:["Canvas: ",A.jsxs("span",{className:"text-text font-mono",children:[s,"×",e]})]}):A.jsxs(A.Fragment,{children:["Canvas: ",A.jsx("span",{className:"text-text font-mono",children:p==="top"||p==="bottom"?`${s}×${t}`:`${t}×${e}`})]})})]})]})}function MT(){const{layers:s,activeLayerId:e,addLayer:t,deleteLayer:r,setActiveLayer:a,toggleLayerVisible:l,renameLayer:u,moveLayerUp:d,moveLayerDown:f}=Qt(),[p,m]=ot.useState(null),[g,_]=ot.useState(""),y=[...s].reverse();function M(S,x){x.stopPropagation(),m(S.id),_(S.name)}function w(S){u(S,g),m(null)}return A.jsxs("div",{className:"flex flex-col",children:[A.jsxs("div",{className:"flex items-center justify-between px-2 py-1.5 border-b border-border flex-shrink-0",children:[A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx(Pv,{size:12,className:"text-accent"}),A.jsx("span",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Layers"})]}),A.jsx("button",{onClick:()=>t(),title:"Add layer",className:"flex items-center justify-center w-5 h-5 rounded border border-border text-text-muted hover:text-accent hover:border-accent/50 transition-colors",children:A.jsx(Xv,{size:11})})]}),A.jsx("div",{className:"flex flex-col overflow-y-auto",style:{maxHeight:200},children:y.map(S=>{const x=s.findIndex(U=>U.id===S.id),D=S.id===e,P=x===s.length-1,C=x===0,Y=s.length>1;return A.jsxs("div",{onClick:()=>a(S.id),className:"flex items-center gap-1 px-1.5 py-1 cursor-pointer select-none transition-colors",style:{borderLeft:`2px solid ${D?"var(--color-accent)":"transparent"}`,background:D?"color-mix(in srgb, var(--color-accent) 12%, transparent)":"transparent"},children:[A.jsx("button",{onClick:U=>{U.stopPropagation(),l(S.id)},title:S.visible?"Hide layer":"Show layer",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors",children:S.visible?A.jsx(Tv,{size:11}):A.jsx(Ev,{size:11,className:"opacity-40"})}),p===S.id?A.jsx("input",{autoFocus:!0,value:g,onChange:U=>_(U.target.value),onBlur:()=>w(S.id),onKeyDown:U=>{U.key==="Enter"&&w(S.id),U.key==="Escape"&&m(null),U.stopPropagation()},onClick:U=>U.stopPropagation(),className:"flex-1 min-w-0 text-xs bg-transparent outline-none border-b",style:{borderColor:"var(--color-accent)",color:"var(--color-text)"}}):A.jsx("span",{className:"flex-1 min-w-0 text-xs truncate",style:{color:D?"var(--color-text)":"var(--color-text-muted)",opacity:S.visible?1:.45},onDoubleClick:U=>M(S,U),title:"Double-click to rename",children:S.name}),A.jsx("button",{onClick:U=>{U.stopPropagation(),d(S.id)},disabled:P,title:"Move up",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20",children:A.jsx(hv,{size:10})}),A.jsx("button",{onClick:U=>{U.stopPropagation(),f(S.id)},disabled:C,title:"Move down",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20",children:A.jsx(dv,{size:10})}),A.jsx("button",{onClick:U=>{U.stopPropagation(),r(S.id)},disabled:!Y,title:"Delete layer",className:"flex-shrink-0 text-text-muted hover:text-red-400 transition-colors disabled:opacity-20",children:A.jsx(Ag,{size:10})})]},S.id)})})]})}const ET=[{id:"front",Icon:Dv,label:"Front"},{id:"back",Icon:Kv,label:"Back"},{id:"left",Icon:Ov,label:"Left"},{id:"right",Icon:Bv,label:"Right"},{id:"top",Icon:Vv,label:"Top"},{id:"bottom",Icon:Fv,label:"Bottom"}];function wT(){const s=Qt(d=>d.activeTheme),e=Qt(d=>d.viewMode),t=ot.useRef(null);Mx(),ot.useEffect(()=>{Ng(yd(s))},[s]);const a=yd(s).PainterBackground,l=e!=="preview-only",u=e!=="canvas-only";return A.jsxs("div",{className:"relative flex flex-col w-full h-screen overflow-hidden font-theme",style:{background:"var(--color-background)",color:"var(--color-text)"},children:[A.jsx(a,{}),A.jsxs("div",{className:"relative flex flex-col w-full h-full",style:{zIndex:10},children:[A.jsx(bx,{onExport:()=>{var d;return(d=t.current)==null?void 0:d.call(t)}}),A.jsxs("div",{className:"flex flex-1 min-h-0",children:[l&&A.jsxs("div",{className:"flex flex-col w-28 border-r border-border flex-shrink-0 overflow-y-auto",style:{background:"color-mix(in srgb, var(--color-surface) 90%, transparent)"},children:[A.jsx("div",{className:"px-2 pt-2 pb-1 text-xs uppercase tracking-wide text-text-muted border-b border-border",children:"Palette"}),A.jsx(vT,{})]}),l&&A.jsxs("div",{className:"flex flex-col flex-1 min-w-0 overflow-hidden",style:{borderRight:u?"1px solid var(--color-border)":"none"},children:[A.jsx(TT,{}),A.jsx("div",{className:"flex-1 min-h-0 overflow-hidden relative",style:{background:"color-mix(in srgb, var(--color-background) 80%, transparent)"},children:A.jsx(Ux,{})})]}),u&&A.jsxs("div",{className:"flex-1 min-w-0 relative overflow-hidden",style:{background:"color-mix(in srgb, var(--color-background) 95%, transparent)"},children:[A.jsx("div",{className:"absolute top-2 left-3 text-xs text-text-muted opacity-40 pointer-events-none z-10 uppercase tracking-widest",children:"3D Preview"}),A.jsx(_T,{onExport:t})]}),A.jsxs("div",{className:"flex flex-col w-52 border-l border-border flex-shrink-0 overflow-y-auto",style:{background:"color-mix(in srgb, var(--color-surface) 95%, transparent)"},children:[A.jsx(MT,{}),A.jsx("div",{className:"border-t border-border"}),A.jsx(ST,{})]})]}),A.jsx(Px,{})]})]})}function TT(){const{activeView:s,setActiveView:e}=Qt();return A.jsx("div",{className:"flex items-center gap-1 px-2 py-1 border-b border-border flex-shrink-0 flex-wrap",style:{background:"color-mix(in srgb, var(--color-surfaceAlt) 95%, transparent)",minHeight:32},children:ET.map(({id:t,Icon:r,label:a})=>A.jsxs("button",{onClick:()=>e(t),className:`flex items-center gap-1 px-2 py-0.5 rounded border text-xs transition-colors ${s===t?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/40"}`,children:[A.jsx(r,{size:11}),a]},t))})}tv.createRoot(document.getElementById("root")).render(A.jsx(qo.StrictMode,{children:A.jsx(wT,{})}));
