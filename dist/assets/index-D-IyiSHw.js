(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Dg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ku={exports:{}},Vo={},Ou={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function nv(){if(im)return gt;im=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(U,ee,Ce){this.props=U,this.context=ee,this.refs=E,this.updater=Ce||x}S.prototype.isReactComponent={},S.prototype.setState=function(U,ee){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ee,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(U,ee,Ce){this.props=U,this.context=ee,this.refs=E,this.updater=Ce||x}var P=L.prototype=new y;P.constructor=L,M(P,S.prototype),P.isPureReactComponent=!0;var b=Array.isArray,q=Object.prototype.hasOwnProperty,F={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function W(U,ee,Ce){var Z,de={},ye=null,_e=null;if(ee!=null)for(Z in ee.ref!==void 0&&(_e=ee.ref),ee.key!==void 0&&(ye=""+ee.key),ee)q.call(ee,Z)&&!k.hasOwnProperty(Z)&&(de[Z]=ee[Z]);var Ae=arguments.length-2;if(Ae===1)de.children=Ce;else if(1<Ae){for(var Le=Array(Ae),be=0;be<Ae;be++)Le[be]=arguments[be+2];de.children=Le}if(U&&U.defaultProps)for(Z in Ae=U.defaultProps,Ae)de[Z]===void 0&&(de[Z]=Ae[Z]);return{$$typeof:s,type:U,key:ye,ref:_e,props:de,_owner:F.current}}function D(U,ee){return{$$typeof:s,type:U.type,key:ee,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function B(U){var ee={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ce){return ee[Ce]})}var te=/\/+/g;function Y(U,ee){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):ee.toString(36)}function ue(U,ee,Ce,Z,de){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(ye){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case s:case e:_e=!0}}if(_e)return _e=U,de=de(_e),U=Z===""?"."+Y(_e,0):Z,b(de)?(Ce="",U!=null&&(Ce=U.replace(te,"$&/")+"/"),ue(de,ee,Ce,"",function(be){return be})):de!=null&&(R(de)&&(de=D(de,Ce+(!de.key||_e&&_e.key===de.key?"":(""+de.key).replace(te,"$&/")+"/")+U)),ee.push(de)),1;if(_e=0,Z=Z===""?".":Z+":",b(U))for(var Ae=0;Ae<U.length;Ae++){ye=U[Ae];var Le=Z+Y(ye,Ae);_e+=ue(ye,ee,Ce,Le,de)}else if(Le=v(U),typeof Le=="function")for(U=Le.call(U),Ae=0;!(ye=U.next()).done;)ye=ye.value,Le=Z+Y(ye,Ae++),_e+=ue(ye,ee,Ce,Le,de);else if(ye==="object")throw ee=String(U),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return _e}function he(U,ee,Ce){if(U==null)return U;var Z=[],de=0;return ue(U,Z,"","",function(ye){return ee.call(Ce,ye,de++)}),Z}function ce(U){if(U._status===-1){var ee=U._result;ee=ee(),ee.then(function(Ce){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ce)},function(Ce){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ce)}),U._status===-1&&(U._status=0,U._result=ee)}if(U._status===1)return U._result.default;throw U._result}var ie={current:null},O={transition:null},ae={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:O,ReactCurrentOwner:F};function ne(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:he,forEach:function(U,ee,Ce){he(U,function(){ee.apply(this,arguments)},Ce)},count:function(U){var ee=0;return he(U,function(){ee++}),ee},toArray:function(U){return he(U,function(ee){return ee})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=S,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=L,gt.StrictMode=r,gt.Suspense=f,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,gt.act=ne,gt.cloneElement=function(U,ee,Ce){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=M({},U.props),de=U.key,ye=U.ref,_e=U._owner;if(ee!=null){if(ee.ref!==void 0&&(ye=ee.ref,_e=F.current),ee.key!==void 0&&(de=""+ee.key),U.type&&U.type.defaultProps)var Ae=U.type.defaultProps;for(Le in ee)q.call(ee,Le)&&!k.hasOwnProperty(Le)&&(Z[Le]=ee[Le]===void 0&&Ae!==void 0?Ae[Le]:ee[Le])}var Le=arguments.length-2;if(Le===1)Z.children=Ce;else if(1<Le){Ae=Array(Le);for(var be=0;be<Le;be++)Ae[be]=arguments[be+2];Z.children=Ae}return{$$typeof:s,type:U.type,key:de,ref:ye,props:Z,_owner:_e}},gt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},gt.createElement=W,gt.createFactory=function(U){var ee=W.bind(null,U);return ee.type=U,ee},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:d,render:U}},gt.isValidElement=R,gt.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:ce}},gt.memo=function(U,ee){return{$$typeof:p,type:U,compare:ee===void 0?null:ee}},gt.startTransition=function(U){var ee=O.transition;O.transition={};try{U()}finally{O.transition=ee}},gt.unstable_act=ne,gt.useCallback=function(U,ee){return ie.current.useCallback(U,ee)},gt.useContext=function(U){return ie.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return ie.current.useDeferredValue(U)},gt.useEffect=function(U,ee){return ie.current.useEffect(U,ee)},gt.useId=function(){return ie.current.useId()},gt.useImperativeHandle=function(U,ee,Ce){return ie.current.useImperativeHandle(U,ee,Ce)},gt.useInsertionEffect=function(U,ee){return ie.current.useInsertionEffect(U,ee)},gt.useLayoutEffect=function(U,ee){return ie.current.useLayoutEffect(U,ee)},gt.useMemo=function(U,ee){return ie.current.useMemo(U,ee)},gt.useReducer=function(U,ee,Ce){return ie.current.useReducer(U,ee,Ce)},gt.useRef=function(U){return ie.current.useRef(U)},gt.useState=function(U){return ie.current.useState(U)},gt.useSyncExternalStore=function(U,ee,Ce){return ie.current.useSyncExternalStore(U,ee,Ce)},gt.useTransition=function(){return ie.current.useTransition()},gt.version="18.3.1",gt}var rm;function _f(){return rm||(rm=1,Ou.exports=nv()),Ou.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function iv(){if(sm)return Vo;sm=1;var s=_f(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var m,g={},v=null,x=null;p!==void 0&&(v=""+p),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(x=f.ref);for(m in f)r.call(f,m)&&!l.hasOwnProperty(m)&&(g[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:d,key:v,ref:x,props:g,_owner:a.current}}return Vo.Fragment=t,Vo.jsx=u,Vo.jsxs=u,Vo}var om;function rv(){return om||(om=1,ku.exports=iv()),ku.exports}var A=rv(),lt=_f();const Ko=Dg(lt);var pl={},zu={exports:{}},Nn={},Bu={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function sv(){return am||(am=1,(function(s){function e(O,ae){var ne=O.length;O.push(ae);e:for(;0<ne;){var U=ne-1>>>1,ee=O[U];if(0<a(ee,ae))O[U]=ae,O[ne]=ee,ne=U;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var ae=O[0],ne=O.pop();if(ne!==ae){O[0]=ne;e:for(var U=0,ee=O.length,Ce=ee>>>1;U<Ce;){var Z=2*(U+1)-1,de=O[Z],ye=Z+1,_e=O[ye];if(0>a(de,ne))ye<ee&&0>a(_e,de)?(O[U]=_e,O[ye]=ne,U=ye):(O[U]=de,O[Z]=ne,U=Z);else if(ye<ee&&0>a(_e,ne))O[U]=_e,O[ye]=ne,U=ye;else break e}}return ae}function a(O,ae){var ne=O.sortIndex-ae.sortIndex;return ne!==0?ne:O.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],p=[],m=1,g=null,v=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(O){for(var ae=t(p);ae!==null;){if(ae.callback===null)r(p);else if(ae.startTime<=O)r(p),ae.sortIndex=ae.expirationTime,e(f,ae);else break;ae=t(p)}}function b(O){if(E=!1,P(O),!M)if(t(f)!==null)M=!0,ce(q);else{var ae=t(p);ae!==null&&ie(b,ae.startTime-O)}}function q(O,ae){M=!1,E&&(E=!1,y(W),W=-1),x=!0;var ne=v;try{for(P(ae),g=t(f);g!==null&&(!(g.expirationTime>ae)||O&&!B());){var U=g.callback;if(typeof U=="function"){g.callback=null,v=g.priorityLevel;var ee=U(g.expirationTime<=ae);ae=s.unstable_now(),typeof ee=="function"?g.callback=ee:g===t(f)&&r(f),P(ae)}else r(f);g=t(f)}if(g!==null)var Ce=!0;else{var Z=t(p);Z!==null&&ie(b,Z.startTime-ae),Ce=!1}return Ce}finally{g=null,v=ne,x=!1}}var F=!1,k=null,W=-1,D=5,R=-1;function B(){return!(s.unstable_now()-R<D)}function te(){if(k!==null){var O=s.unstable_now();R=O;var ae=!0;try{ae=k(!0,O)}finally{ae?Y():(F=!1,k=null)}}else F=!1}var Y;if(typeof L=="function")Y=function(){L(te)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=te,Y=function(){he.postMessage(null)}}else Y=function(){S(te,0)};function ce(O){k=O,F||(F=!0,Y())}function ie(O,ae){W=S(function(){O(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){M||x||(M=!0,ce(q))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(O){switch(v){case 1:case 2:case 3:var ae=3;break;default:ae=v}var ne=v;v=ae;try{return O()}finally{v=ne}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,ae){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ne=v;v=O;try{return ae()}finally{v=ne}},s.unstable_scheduleCallback=function(O,ae,ne){var U=s.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?U+ne:U):ne=U,O){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ne+ee,O={id:m++,callback:ae,priorityLevel:O,startTime:ne,expirationTime:ee,sortIndex:-1},ne>U?(O.sortIndex=ne,e(p,O),t(f)===null&&O===t(p)&&(E?(y(W),W=-1):E=!0,ie(b,ne-U))):(O.sortIndex=ee,e(f,O),M||x||(M=!0,ce(q))),O},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(O){var ae=v;return function(){var ne=v;v=ae;try{return O.apply(this,arguments)}finally{v=ne}}}})(Hu)),Hu}var lm;function ov(){return lm||(lm=1,Bu.exports=sv()),Bu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function av(){if(cm)return Nn;cm=1;var s=_f(),e=ov();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return f.call(g,n)?!0:f.call(m,n)?!1:p.test(n)?g[n]=!0:(m[n]=!0,!1)}function x(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,c){if(i===null||typeof i>"u"||x(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,o,c,h,_,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=_,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,L);S[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,L);S[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,L);S[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,o,c){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,h,c)&&(o=null),c||h===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,c=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),O=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,U;function ee(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ce=!1;function Z(n,i){if(!n||Ce)return"";Ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var c=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){c=re}n.call(i.prototype)}else{try{throw Error()}catch(re){c=re}n()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var h=re.stack.split(`
`),_=c.stack.split(`
`),w=h.length-1,I=_.length-1;1<=w&&0<=I&&h[w]!==_[I];)I--;for(;1<=w&&0<=I;w--,I--)if(h[w]!==_[I]){if(w!==1||I!==1)do if(w--,I--,0>I||h[w]!==_[I]){var z=`
`+h[w].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=w&&0<=I);break}}}finally{Ce=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ee(n):""}function de(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case F:return"Portal";case D:return"Profiler";case W:return"StrictMode";case Y:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case te:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function be(n){var i=Le(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,_=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,_.call(this,w)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ut(n){n._valueTracker||(n._valueTracker=be(n))}function Ke(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Le(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function _t(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function V(n,i){var o=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function vt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ze(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function et(n,i){Ze(n,i);var o=Ae(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?xt(n,i.type,o):i.hasOwnProperty("defaultValue")&&xt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function qe(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function xt(n,i,o){(i!=="number"||_t(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ge=Array.isArray;function N(n,i,o,c){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ge(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ae(o)}}function fe(n,i){var o=Ae(i.value),c=Ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function ge(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function pt(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function tt(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,h=tt(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,h):n[o]=h}}var ze=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ot(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,le=null,me=null;function Ie(n){if(n=bo(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ra(i),Pe(n.stateNode,n.type,i))}}function Ne(n){le?me?me.push(n):me=[n]:le=n}function at(){if(le){var n=le,i=me;if(me=le=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function kt(n,i){return n(i)}function $t(){}var wt=!1;function An(n,i,o){if(wt)return n(i,o);wt=!0;try{return kt(n,i,o)}finally{wt=!1,(le!==null||me!==null)&&($t(),at())}}function xn(n,i){var o=n.stateNode;if(o===null)return null;var c=Ra(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ls=!1;if(d)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){ls=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{ls=!1}function Pi(n,i,o,c,h,_,w,I,z){var re=Array.prototype.slice.call(arguments,3);try{i.apply(o,re)}catch(xe){this.onError(xe)}}var Li=!1,Lr=null,Dr=!1,er=null,ca={onError:function(n){Li=!0,Lr=n}};function cs(n,i,o,c,h,_,w,I,z){Li=!1,Lr=null,Pi.apply(ca,arguments)}function ua(n,i,o,c,h,_,w,I,z){if(cs.apply(this,arguments),Li){if(Li){var re=Lr;Li=!1,Lr=null}else throw Error(t(198));Dr||(Dr=!0,er=re)}}function vi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function da(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function fa(n){if(vi(n)!==n)throw Error(t(188))}function sc(n){var i=n.alternate;if(!i){if(i=vi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var h=o.return;if(h===null)break;var _=h.alternate;if(_===null){if(c=h.return,c!==null){o=c;continue}break}if(h.child===_.child){for(_=h.child;_;){if(_===o)return fa(h),n;if(_===c)return fa(h),i;_=_.sibling}throw Error(t(188))}if(o.return!==c.return)o=h,c=_;else{for(var w=!1,I=h.child;I;){if(I===o){w=!0,o=h,c=_;break}if(I===c){w=!0,c=h,o=_;break}I=I.sibling}if(!w){for(I=_.child;I;){if(I===o){w=!0,o=_,c=h;break}if(I===c){w=!0,c=_,o=h;break}I=I.sibling}if(!w)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function C(n){return n=sc(n),n!==null?j(n):null}function j(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=j(n);if(i!==null)return i;n=n.sibling}return null}var se=e.unstable_scheduleCallback,oe=e.unstable_cancelCallback,X=e.unstable_shouldYield,Te=e.unstable_requestPaint,Ee=e.unstable_now,je=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,st=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,St=e.unstable_IdlePriority,Rt=null,yt=null;function dn(n){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:bt,$e=Math.log,si=Math.LN2;function bt(n){return n>>>=0,n===0?32:31-($e(n)/si|0)|0}var fn=64,oi=4194304;function Kt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xi(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,h=n.suspendedLanes,_=n.pingedLanes,w=o&268435455;if(w!==0){var I=w&~h;I!==0?c=Kt(I):(_&=w,_!==0&&(c=Kt(_)))}else w=o&~h,w!==0?c=Kt(w):_!==0&&(c=Kt(_));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,_=i&-i,h>=_||h===16&&(_&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-dt(i),h=1<<o,c|=n[o],i&=~h;return c}function It(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,_=n.pendingLanes;0<_;){var w=31-dt(_),I=1<<w,z=h[w];z===-1?((I&o)===0||(I&c)!==0)&&(h[w]=It(I,i)):z<=i&&(n.expiredLanes|=I),_&=~I}}function Di(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yn(){var n=fn;return fn<<=1,(fn&4194240)===0&&(fn=64),n}function Yn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function bn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-dt(i),n[i]=o}function ha(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-dt(o),_=1<<h;i[h]=0,c[h]=-1,n[h]=-1,o&=~_}}function oc(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-dt(o),h=1<<c;h&i|n[c]&i&&(n[c]|=i),o&=~h}}var Lt=0;function Uf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ff,ac,kf,Of,zf,lc=!1,pa=[],tr=null,nr=null,ir=null,uo=new Map,fo=new Map,rr=[],w0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bf(n,i){switch(n){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":uo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(i.pointerId)}}function ho(n,i,o,c,h,_){return n===null||n.nativeEvent!==_?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:_,targetContainers:[h]},i!==null&&(i=bo(i),i!==null&&ac(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function T0(n,i,o,c,h){switch(i){case"focusin":return tr=ho(tr,n,i,o,c,h),!0;case"dragenter":return nr=ho(nr,n,i,o,c,h),!0;case"mouseover":return ir=ho(ir,n,i,o,c,h),!0;case"pointerover":var _=h.pointerId;return uo.set(_,ho(uo.get(_)||null,n,i,o,c,h)),!0;case"gotpointercapture":return _=h.pointerId,fo.set(_,ho(fo.get(_)||null,n,i,o,c,h)),!0}return!1}function Hf(n){var i=Nr(n.target);if(i!==null){var o=vi(i);if(o!==null){if(i=o.tag,i===13){if(i=da(o),i!==null){n.blockedOn=i,zf(n.priority,function(){kf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ma(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=uc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Pt=c,o.target.dispatchEvent(c),Pt=null}else return i=bo(o),i!==null&&ac(i),n.blockedOn=o,!1;i.shift()}return!0}function Vf(n,i,o){ma(n)&&o.delete(i)}function A0(){lc=!1,tr!==null&&ma(tr)&&(tr=null),nr!==null&&ma(nr)&&(nr=null),ir!==null&&ma(ir)&&(ir=null),uo.forEach(Vf),fo.forEach(Vf)}function po(n,i){n.blockedOn===i&&(n.blockedOn=null,lc||(lc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,A0)))}function mo(n){function i(h){return po(h,n)}if(0<pa.length){po(pa[0],n);for(var o=1;o<pa.length;o++){var c=pa[o];c.blockedOn===n&&(c.blockedOn=null)}}for(tr!==null&&po(tr,n),nr!==null&&po(nr,n),ir!==null&&po(ir,n),uo.forEach(i),fo.forEach(i),o=0;o<rr.length;o++)c=rr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<rr.length&&(o=rr[0],o.blockedOn===null);)Hf(o),o.blockedOn===null&&rr.shift()}var us=b.ReactCurrentBatchConfig,ga=!0;function b0(n,i,o,c){var h=Lt,_=us.transition;us.transition=null;try{Lt=1,cc(n,i,o,c)}finally{Lt=h,us.transition=_}}function C0(n,i,o,c){var h=Lt,_=us.transition;us.transition=null;try{Lt=4,cc(n,i,o,c)}finally{Lt=h,us.transition=_}}function cc(n,i,o,c){if(ga){var h=uc(n,i,o,c);if(h===null)bc(n,i,c,_a,o),Bf(n,c);else if(T0(h,n,i,o,c))c.stopPropagation();else if(Bf(n,c),i&4&&-1<w0.indexOf(n)){for(;h!==null;){var _=bo(h);if(_!==null&&Ff(_),_=uc(n,i,o,c),_===null&&bc(n,i,c,_a,o),_===h)break;h=_}h!==null&&c.stopPropagation()}else bc(n,i,c,null,o)}}var _a=null;function uc(n,i,o,c){if(_a=null,n=G(c),n=Nr(n),n!==null)if(i=vi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=da(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return _a=n,null}function Gf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(je()){case He:return 1;case it:return 4;case st:case Xe:return 16;case St:return 536870912;default:return 16}default:return 16}}var sr=null,dc=null,va=null;function Wf(){if(va)return va;var n,i=dc,o=i.length,c,h="value"in sr?sr.value:sr.textContent,_=h.length;for(n=0;n<o&&i[n]===h[n];n++);var w=o-n;for(c=1;c<=w&&i[o-c]===h[_-c];c++);return va=h.slice(n,1<c?1-c:void 0)}function xa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ya(){return!0}function jf(){return!1}function On(n){function i(o,c,h,_,w){this._reactName=o,this._targetInst=h,this.type=c,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?ya:jf,this.isPropagationStopped=jf,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=On(ds),go=ne({},ds,{view:0,detail:0}),R0=On(go),hc,pc,_o,Sa=ne({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_o&&(_o&&n.type==="mousemove"?(hc=n.screenX-_o.screenX,pc=n.screenY-_o.screenY):pc=hc=0,_o=n),hc)},movementY:function(n){return"movementY"in n?n.movementY:pc}}),Xf=On(Sa),P0=ne({},Sa,{dataTransfer:0}),L0=On(P0),D0=ne({},go,{relatedTarget:0}),mc=On(D0),N0=ne({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),I0=On(N0),U0=ne({},ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),F0=On(U0),k0=ne({},ds,{data:0}),Yf=On(k0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=B0[n])?!!i[n]:!1}function gc(){return H0}var V0=ne({},go,{key:function(n){if(n.key){var i=O0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?z0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(n){return n.type==="keypress"?xa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),G0=On(V0),W0=ne({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qf=On(W0),j0=ne({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),X0=On(j0),Y0=ne({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=On(Y0),$0=ne({},Sa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=On($0),Z0=[9,13,27,32],_c=d&&"CompositionEvent"in window,vo=null;d&&"documentMode"in document&&(vo=document.documentMode);var Q0=d&&"TextEvent"in window&&!vo,$f=d&&(!_c||vo&&8<vo&&11>=vo),Kf=" ",Zf=!1;function Qf(n,i){switch(n){case"keyup":return Z0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function J0(n,i){switch(n){case"compositionend":return Jf(i);case"keypress":return i.which!==32?null:(Zf=!0,Kf);case"textInput":return n=i.data,n===Kf&&Zf?null:n;default:return null}}function e_(n,i){if(fs)return n==="compositionend"||!_c&&Qf(n,i)?(n=Wf(),va=dc=sr=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $f&&i.locale!=="ko"?null:i.data;default:return null}}var t_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!t_[n.type]:i==="textarea"}function th(n,i,o,c){Ne(c),i=Aa(i,"onChange"),0<i.length&&(o=new fc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var xo=null,yo=null;function n_(n){xh(n,0)}function Ma(n){var i=_s(n);if(Ke(i))return n}function i_(n,i){if(n==="change")return i}var nh=!1;if(d){var vc;if(d){var xc="oninput"in document;if(!xc){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),xc=typeof ih.oninput=="function"}vc=xc}else vc=!1;nh=vc&&(!document.documentMode||9<document.documentMode)}function rh(){xo&&(xo.detachEvent("onpropertychange",sh),yo=xo=null)}function sh(n){if(n.propertyName==="value"&&Ma(yo)){var i=[];th(i,yo,n,G(n)),An(n_,i)}}function r_(n,i,o){n==="focusin"?(rh(),xo=i,yo=o,xo.attachEvent("onpropertychange",sh)):n==="focusout"&&rh()}function s_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ma(yo)}function o_(n,i){if(n==="click")return Ma(i)}function a_(n,i){if(n==="input"||n==="change")return Ma(i)}function l_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ai=typeof Object.is=="function"?Object.is:l_;function So(n,i){if(ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var h=o[c];if(!f.call(i,h)||!ai(n[h],i[h]))return!1}return!0}function oh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ah(n,i){var o=oh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=oh(o)}}function lh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?lh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ch(){for(var n=window,i=_t();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=_t(n.document)}return i}function yc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function c_(n){var i=ch(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&lh(o.ownerDocument.documentElement,o)){if(c!==null&&yc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,_=Math.min(c.start,h);c=c.end===void 0?_:Math.min(c.end,h),!n.extend&&_>c&&(h=c,c=_,_=h),h=ah(o,_);var w=ah(o,c);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),_>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var u_=d&&"documentMode"in document&&11>=document.documentMode,hs=null,Sc=null,Mo=null,Mc=!1;function uh(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Mc||hs==null||hs!==_t(c)||(c=hs,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Mo&&So(Mo,c)||(Mo=c,c=Aa(Sc,"onSelect"),0<c.length&&(i=new fc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=hs)))}function Ea(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ps={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},Ec={},dh={};d&&(dh=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function wa(n){if(Ec[n])return Ec[n];if(!ps[n])return n;var i=ps[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in dh)return Ec[n]=i[o];return n}var fh=wa("animationend"),hh=wa("animationiteration"),ph=wa("animationstart"),mh=wa("transitionend"),gh=new Map,_h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,i){gh.set(n,i),l(i,[n])}for(var wc=0;wc<_h.length;wc++){var Tc=_h[wc],d_=Tc.toLowerCase(),f_=Tc[0].toUpperCase()+Tc.slice(1);or(d_,"on"+f_)}or(fh,"onAnimationEnd"),or(hh,"onAnimationIteration"),or(ph,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(mh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function vh(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ua(c,i,void 0,n),n.currentTarget=null}function xh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],h=c.event;c=c.listeners;e:{var _=void 0;if(i)for(var w=c.length-1;0<=w;w--){var I=c[w],z=I.instance,re=I.currentTarget;if(I=I.listener,z!==_&&h.isPropagationStopped())break e;vh(h,I,re),_=z}else for(w=0;w<c.length;w++){if(I=c[w],z=I.instance,re=I.currentTarget,I=I.listener,z!==_&&h.isPropagationStopped())break e;vh(h,I,re),_=z}}}if(Dr)throw n=er,Dr=!1,er=null,n}function Ot(n,i){var o=i[Nc];o===void 0&&(o=i[Nc]=new Set);var c=n+"__bubble";o.has(c)||(yh(i,n,2,!1),o.add(c))}function Ac(n,i,o){var c=0;i&&(c|=4),yh(o,n,c,i)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function wo(n){if(!n[Ta]){n[Ta]=!0,r.forEach(function(o){o!=="selectionchange"&&(h_.has(o)||Ac(o,!1,n),Ac(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ta]||(i[Ta]=!0,Ac("selectionchange",!1,i))}}function yh(n,i,o,c){switch(Gf(i)){case 1:var h=b0;break;case 4:h=C0;break;default:h=cc}o=h.bind(null,i,o,n),h=void 0,!ls||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function bc(n,i,o,c,h){var _=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var I=c.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(w===4)for(w=c.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===h||z.nodeType===8&&z.parentNode===h))return;w=w.return}for(;I!==null;){if(w=Nr(I),w===null)return;if(z=w.tag,z===5||z===6){c=_=w;continue e}I=I.parentNode}}c=c.return}An(function(){var re=_,xe=G(o),Se=[];e:{var ve=gh.get(n);if(ve!==void 0){var Ue=fc,Be=n;switch(n){case"keypress":if(xa(o)===0)break e;case"keydown":case"keyup":Ue=G0;break;case"focusin":Be="focus",Ue=mc;break;case"focusout":Be="blur",Ue=mc;break;case"beforeblur":case"afterblur":Ue=mc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=X0;break;case fh:case hh:case ph:Ue=I0;break;case mh:Ue=q0;break;case"scroll":Ue=R0;break;case"wheel":Ue=K0;break;case"copy":case"cut":case"paste":Ue=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=qf}var Ve=(i&4)!==0,Xt=!Ve&&n==="scroll",$=Ve?ve!==null?ve+"Capture":null:ve;Ve=[];for(var H=re,Q;H!==null;){Q=H;var we=Q.stateNode;if(Q.tag===5&&we!==null&&(Q=we,$!==null&&(we=xn(H,$),we!=null&&Ve.push(To(H,we,Q)))),Xt)break;H=H.return}0<Ve.length&&(ve=new Ue(ve,Be,null,o,xe),Se.push({event:ve,listeners:Ve}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&o!==Pt&&(Be=o.relatedTarget||o.fromElement)&&(Nr(Be)||Be[Ni]))break e;if((Ue||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(Be=o.relatedTarget||o.toElement,Ue=re,Be=Be?Nr(Be):null,Be!==null&&(Xt=vi(Be),Be!==Xt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ue=null,Be=re),Ue!==Be)){if(Ve=Xf,we="onMouseLeave",$="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=qf,we="onPointerLeave",$="onPointerEnter",H="pointer"),Xt=Ue==null?ve:_s(Ue),Q=Be==null?ve:_s(Be),ve=new Ve(we,H+"leave",Ue,o,xe),ve.target=Xt,ve.relatedTarget=Q,we=null,Nr(xe)===re&&(Ve=new Ve($,H+"enter",Be,o,xe),Ve.target=Q,Ve.relatedTarget=Xt,we=Ve),Xt=we,Ue&&Be)t:{for(Ve=Ue,$=Be,H=0,Q=Ve;Q;Q=ms(Q))H++;for(Q=0,we=$;we;we=ms(we))Q++;for(;0<H-Q;)Ve=ms(Ve),H--;for(;0<Q-H;)$=ms($),Q--;for(;H--;){if(Ve===$||$!==null&&Ve===$.alternate)break t;Ve=ms(Ve),$=ms($)}Ve=null}else Ve=null;Ue!==null&&Sh(Se,ve,Ue,Ve,!1),Be!==null&&Xt!==null&&Sh(Se,Xt,Be,Ve,!0)}}e:{if(ve=re?_s(re):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Ye=i_;else if(eh(ve))if(nh)Ye=a_;else{Ye=s_;var Qe=r_}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ye=o_);if(Ye&&(Ye=Ye(n,re))){th(Se,Ye,o,xe);break e}Qe&&Qe(n,ve,re),n==="focusout"&&(Qe=ve._wrapperState)&&Qe.controlled&&ve.type==="number"&&xt(ve,"number",ve.value)}switch(Qe=re?_s(re):window,n){case"focusin":(eh(Qe)||Qe.contentEditable==="true")&&(hs=Qe,Sc=re,Mo=null);break;case"focusout":Mo=Sc=hs=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,uh(Se,o,xe);break;case"selectionchange":if(u_)break;case"keydown":case"keyup":uh(Se,o,xe)}var Je;if(_c)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else fs?Qf(n,o)&&(rt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&($f&&o.locale!=="ko"&&(fs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&fs&&(Je=Wf()):(sr=xe,dc="value"in sr?sr.value:sr.textContent,fs=!0)),Qe=Aa(re,rt),0<Qe.length&&(rt=new Yf(rt,n,null,o,xe),Se.push({event:rt,listeners:Qe}),Je?rt.data=Je:(Je=Jf(o),Je!==null&&(rt.data=Je)))),(Je=Q0?J0(n,o):e_(n,o))&&(re=Aa(re,"onBeforeInput"),0<re.length&&(xe=new Yf("onBeforeInput","beforeinput",null,o,xe),Se.push({event:xe,listeners:re}),xe.data=Je))}xh(Se,i)})}function To(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Aa(n,i){for(var o=i+"Capture",c=[];n!==null;){var h=n,_=h.stateNode;h.tag===5&&_!==null&&(h=_,_=xn(n,o),_!=null&&c.unshift(To(n,_,h)),_=xn(n,i),_!=null&&c.push(To(n,_,h))),n=n.return}return c}function ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Sh(n,i,o,c,h){for(var _=i._reactName,w=[];o!==null&&o!==c;){var I=o,z=I.alternate,re=I.stateNode;if(z!==null&&z===c)break;I.tag===5&&re!==null&&(I=re,h?(z=xn(o,_),z!=null&&w.unshift(To(o,z,I))):h||(z=xn(o,_),z!=null&&w.push(To(o,z,I)))),o=o.return}w.length!==0&&n.push({event:i,listeners:w})}var p_=/\r\n?/g,m_=/\u0000|\uFFFD/g;function Mh(n){return(typeof n=="string"?n:""+n).replace(p_,`
`).replace(m_,"")}function ba(n,i,o){if(i=Mh(i),Mh(n)!==i&&o)throw Error(t(425))}function Ca(){}var Cc=null,Rc=null;function Pc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,g_=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,__=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(n){return Eh.resolve(null).then(n).catch(v_)}:Lc;function v_(n){setTimeout(function(){throw n})}function Dc(n,i){var o=i,c=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(c===0){n.removeChild(h),mo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=h}while(o);mo(i)}function ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function wh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var gs=Math.random().toString(36).slice(2),yi="__reactFiber$"+gs,Ao="__reactProps$"+gs,Ni="__reactContainer$"+gs,Nc="__reactEvents$"+gs,x_="__reactListeners$"+gs,y_="__reactHandles$"+gs;function Nr(n){var i=n[yi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ni]||o[yi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=wh(n);n!==null;){if(o=n[yi])return o;n=wh(n)}return i}n=o,o=n.parentNode}return null}function bo(n){return n=n[yi]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ra(n){return n[Ao]||null}var Ic=[],vs=-1;function lr(n){return{current:n}}function zt(n){0>vs||(n.current=Ic[vs],Ic[vs]=null,vs--)}function Ft(n,i){vs++,Ic[vs]=n.current,n.current=i}var cr={},hn=lr(cr),Cn=lr(!1),Ir=cr;function xs(n,i){var o=n.type.contextTypes;if(!o)return cr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},_;for(_ in o)h[_]=i[_];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Rn(n){return n=n.childContextTypes,n!=null}function Pa(){zt(Cn),zt(hn)}function Th(n,i,o){if(hn.current!==cr)throw Error(t(168));Ft(hn,i),Ft(Cn,o)}function Ah(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,_e(n)||"Unknown",h));return ne({},o,c)}function La(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||cr,Ir=hn.current,Ft(hn,n),Ft(Cn,Cn.current),!0}function bh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Ah(n,i,Ir),c.__reactInternalMemoizedMergedChildContext=n,zt(Cn),zt(hn),Ft(hn,n)):zt(Cn),Ft(Cn,o)}var Ii=null,Da=!1,Uc=!1;function Ch(n){Ii===null?Ii=[n]:Ii.push(n)}function S_(n){Da=!0,Ch(n)}function ur(){if(!Uc&&Ii!==null){Uc=!0;var n=0,i=Lt;try{var o=Ii;for(Lt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Ii=null,Da=!1}catch(h){throw Ii!==null&&(Ii=Ii.slice(n+1)),se(He,ur),h}finally{Lt=i,Uc=!1}}return null}var ys=[],Ss=0,Na=null,Ia=0,qn=[],$n=0,Ur=null,Ui=1,Fi="";function Fr(n,i){ys[Ss++]=Ia,ys[Ss++]=Na,Na=n,Ia=i}function Rh(n,i,o){qn[$n++]=Ui,qn[$n++]=Fi,qn[$n++]=Ur,Ur=n;var c=Ui;n=Fi;var h=32-dt(c)-1;c&=~(1<<h),o+=1;var _=32-dt(i)+h;if(30<_){var w=h-h%5;_=(c&(1<<w)-1).toString(32),c>>=w,h-=w,Ui=1<<32-dt(i)+h|o<<h|c,Fi=_+n}else Ui=1<<_|o<<h|c,Fi=n}function Fc(n){n.return!==null&&(Fr(n,1),Rh(n,1,0))}function kc(n){for(;n===Na;)Na=ys[--Ss],ys[Ss]=null,Ia=ys[--Ss],ys[Ss]=null;for(;n===Ur;)Ur=qn[--$n],qn[$n]=null,Fi=qn[--$n],qn[$n]=null,Ui=qn[--$n],qn[$n]=null}var zn=null,Bn=null,Bt=!1,li=null;function Ph(n,i){var o=Jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Lh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Bn=ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Ui,overflow:Fi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Jn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,zn=n,Bn=null,!0):!1;default:return!1}}function Oc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(Bt){var i=Bn;if(i){var o=i;if(!Lh(n,i)){if(Oc(n))throw Error(t(418));i=ar(o.nextSibling);var c=zn;i&&Lh(n,i)?Ph(c,o):(n.flags=n.flags&-4097|2,Bt=!1,zn=n)}}else{if(Oc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,zn=n}}}function Dh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Ua(n){if(n!==zn)return!1;if(!Bt)return Dh(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Pc(n.type,n.memoizedProps)),i&&(i=Bn)){if(Oc(n))throw Nh(),Error(t(418));for(;i;)Ph(n,i),i=ar(i.nextSibling)}if(Dh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Bn=ar(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=zn?ar(n.stateNode.nextSibling):null;return!0}function Nh(){for(var n=Bn;n;)n=ar(n.nextSibling)}function Ms(){Bn=zn=null,Bt=!1}function Bc(n){li===null?li=[n]:li.push(n)}var M_=b.ReactCurrentBatchConfig;function Co(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var h=c,_=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===_?i.ref:(i=function(w){var I=h.refs;w===null?delete I[_]:I[_]=w},i._stringRef=_,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Fa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ih(n){var i=n._init;return i(n._payload)}function Uh(n){function i($,H){if(n){var Q=$.deletions;Q===null?($.deletions=[H],$.flags|=16):Q.push(H)}}function o($,H){if(!n)return null;for(;H!==null;)i($,H),H=H.sibling;return null}function c($,H){for($=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function h($,H){return $=vr($,H),$.index=0,$.sibling=null,$}function _($,H,Q){return $.index=Q,n?(Q=$.alternate,Q!==null?(Q=Q.index,Q<H?($.flags|=2,H):Q):($.flags|=2,H)):($.flags|=1048576,H)}function w($){return n&&$.alternate===null&&($.flags|=2),$}function I($,H,Q,we){return H===null||H.tag!==6?(H=Lu(Q,$.mode,we),H.return=$,H):(H=h(H,Q),H.return=$,H)}function z($,H,Q,we){var Ye=Q.type;return Ye===k?xe($,H,Q.props.children,we,Q.key):H!==null&&(H.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Ih(Ye)===H.type)?(we=h(H,Q.props),we.ref=Co($,H,Q),we.return=$,we):(we=ol(Q.type,Q.key,Q.props,null,$.mode,we),we.ref=Co($,H,Q),we.return=$,we)}function re($,H,Q,we){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=Du(Q,$.mode,we),H.return=$,H):(H=h(H,Q.children||[]),H.return=$,H)}function xe($,H,Q,we,Ye){return H===null||H.tag!==7?(H=Wr(Q,$.mode,we,Ye),H.return=$,H):(H=h(H,Q),H.return=$,H)}function Se($,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Lu(""+H,$.mode,Q),H.return=$,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case q:return Q=ol(H.type,H.key,H.props,null,$.mode,Q),Q.ref=Co($,null,H),Q.return=$,Q;case F:return H=Du(H,$.mode,Q),H.return=$,H;case ce:var we=H._init;return Se($,we(H._payload),Q)}if(Ge(H)||ae(H))return H=Wr(H,$.mode,Q,null),H.return=$,H;Fa($,H)}return null}function ve($,H,Q,we){var Ye=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ye!==null?null:I($,H,""+Q,we);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case q:return Q.key===Ye?z($,H,Q,we):null;case F:return Q.key===Ye?re($,H,Q,we):null;case ce:return Ye=Q._init,ve($,H,Ye(Q._payload),we)}if(Ge(Q)||ae(Q))return Ye!==null?null:xe($,H,Q,we,null);Fa($,Q)}return null}function Ue($,H,Q,we,Ye){if(typeof we=="string"&&we!==""||typeof we=="number")return $=$.get(Q)||null,I(H,$,""+we,Ye);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case q:return $=$.get(we.key===null?Q:we.key)||null,z(H,$,we,Ye);case F:return $=$.get(we.key===null?Q:we.key)||null,re(H,$,we,Ye);case ce:var Qe=we._init;return Ue($,H,Q,Qe(we._payload),Ye)}if(Ge(we)||ae(we))return $=$.get(Q)||null,xe(H,$,we,Ye,null);Fa(H,we)}return null}function Be($,H,Q,we){for(var Ye=null,Qe=null,Je=H,rt=H=0,sn=null;Je!==null&&rt<Q.length;rt++){Je.index>rt?(sn=Je,Je=null):sn=Je.sibling;var Ct=ve($,Je,Q[rt],we);if(Ct===null){Je===null&&(Je=sn);break}n&&Je&&Ct.alternate===null&&i($,Je),H=_(Ct,H,rt),Qe===null?Ye=Ct:Qe.sibling=Ct,Qe=Ct,Je=sn}if(rt===Q.length)return o($,Je),Bt&&Fr($,rt),Ye;if(Je===null){for(;rt<Q.length;rt++)Je=Se($,Q[rt],we),Je!==null&&(H=_(Je,H,rt),Qe===null?Ye=Je:Qe.sibling=Je,Qe=Je);return Bt&&Fr($,rt),Ye}for(Je=c($,Je);rt<Q.length;rt++)sn=Ue(Je,$,rt,Q[rt],we),sn!==null&&(n&&sn.alternate!==null&&Je.delete(sn.key===null?rt:sn.key),H=_(sn,H,rt),Qe===null?Ye=sn:Qe.sibling=sn,Qe=sn);return n&&Je.forEach(function(xr){return i($,xr)}),Bt&&Fr($,rt),Ye}function Ve($,H,Q,we){var Ye=ae(Q);if(typeof Ye!="function")throw Error(t(150));if(Q=Ye.call(Q),Q==null)throw Error(t(151));for(var Qe=Ye=null,Je=H,rt=H=0,sn=null,Ct=Q.next();Je!==null&&!Ct.done;rt++,Ct=Q.next()){Je.index>rt?(sn=Je,Je=null):sn=Je.sibling;var xr=ve($,Je,Ct.value,we);if(xr===null){Je===null&&(Je=sn);break}n&&Je&&xr.alternate===null&&i($,Je),H=_(xr,H,rt),Qe===null?Ye=xr:Qe.sibling=xr,Qe=xr,Je=sn}if(Ct.done)return o($,Je),Bt&&Fr($,rt),Ye;if(Je===null){for(;!Ct.done;rt++,Ct=Q.next())Ct=Se($,Ct.value,we),Ct!==null&&(H=_(Ct,H,rt),Qe===null?Ye=Ct:Qe.sibling=Ct,Qe=Ct);return Bt&&Fr($,rt),Ye}for(Je=c($,Je);!Ct.done;rt++,Ct=Q.next())Ct=Ue(Je,$,rt,Ct.value,we),Ct!==null&&(n&&Ct.alternate!==null&&Je.delete(Ct.key===null?rt:Ct.key),H=_(Ct,H,rt),Qe===null?Ye=Ct:Qe.sibling=Ct,Qe=Ct);return n&&Je.forEach(function(tv){return i($,tv)}),Bt&&Fr($,rt),Ye}function Xt($,H,Q,we){if(typeof Q=="object"&&Q!==null&&Q.type===k&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case q:e:{for(var Ye=Q.key,Qe=H;Qe!==null;){if(Qe.key===Ye){if(Ye=Q.type,Ye===k){if(Qe.tag===7){o($,Qe.sibling),H=h(Qe,Q.props.children),H.return=$,$=H;break e}}else if(Qe.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Ih(Ye)===Qe.type){o($,Qe.sibling),H=h(Qe,Q.props),H.ref=Co($,Qe,Q),H.return=$,$=H;break e}o($,Qe);break}else i($,Qe);Qe=Qe.sibling}Q.type===k?(H=Wr(Q.props.children,$.mode,we,Q.key),H.return=$,$=H):(we=ol(Q.type,Q.key,Q.props,null,$.mode,we),we.ref=Co($,H,Q),we.return=$,$=we)}return w($);case F:e:{for(Qe=Q.key;H!==null;){if(H.key===Qe)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){o($,H.sibling),H=h(H,Q.children||[]),H.return=$,$=H;break e}else{o($,H);break}else i($,H);H=H.sibling}H=Du(Q,$.mode,we),H.return=$,$=H}return w($);case ce:return Qe=Q._init,Xt($,H,Qe(Q._payload),we)}if(Ge(Q))return Be($,H,Q,we);if(ae(Q))return Ve($,H,Q,we);Fa($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,H!==null&&H.tag===6?(o($,H.sibling),H=h(H,Q),H.return=$,$=H):(o($,H),H=Lu(Q,$.mode,we),H.return=$,$=H),w($)):o($,H)}return Xt}var Es=Uh(!0),Fh=Uh(!1),ka=lr(null),Oa=null,ws=null,Hc=null;function Vc(){Hc=ws=Oa=null}function Gc(n){var i=ka.current;zt(ka),n._currentValue=i}function Wc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ts(n,i){Oa=n,Hc=ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(Hc!==n)if(n={context:n,memoizedValue:i,next:null},ws===null){if(Oa===null)throw Error(t(308));ws=n,Oa.dependencies={lanes:0,firstContext:n}}else ws=ws.next=n;return i}var kr=null;function jc(n){kr===null?kr=[n]:kr.push(n)}function kh(n,i,o,c){var h=i.interleaved;return h===null?(o.next=o,jc(i)):(o.next=h.next,h.next=o),i.interleaved=o,ki(n,c)}function ki(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var dr=!1;function Xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,ki(n,o)}return h=c.interleaved,h===null?(i.next=i,jc(c)):(i.next=h.next,h.next=i),c.interleaved=i,ki(n,o)}function za(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,oc(n,o)}}function zh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var h=null,_=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};_===null?h=_=w:_=_.next=w,o=o.next}while(o!==null);_===null?h=_=i:_=_.next=i}else h=_=i;o={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:_,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ba(n,i,o,c){var h=n.updateQueue;dr=!1;var _=h.firstBaseUpdate,w=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var z=I,re=z.next;z.next=null,w===null?_=re:w.next=re,w=z;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==w&&(I===null?xe.firstBaseUpdate=re:I.next=re,xe.lastBaseUpdate=z))}if(_!==null){var Se=h.baseState;w=0,xe=re=z=null,I=_;do{var ve=I.lane,Ue=I.eventTime;if((c&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Ue,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Be=n,Ve=I;switch(ve=i,Ue=o,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){Se=Be.call(Ue,Se,ve);break e}Se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,ve=typeof Be=="function"?Be.call(Ue,Se,ve):Be,ve==null)break e;Se=ne({},Se,ve);break e;case 2:dr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ve=h.effects,ve===null?h.effects=[I]:ve.push(I))}else Ue={eventTime:Ue,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(re=xe=Ue,z=Se):xe=xe.next=Ue,w|=ve;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(xe===null&&(z=Se),h.baseState=z,h.firstBaseUpdate=re,h.lastBaseUpdate=xe,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else _===null&&(h.shared.lanes=0);Br|=w,n.lanes=w,n.memoizedState=Se}}function Bh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=o,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Ro={},Si=lr(Ro),Po=lr(Ro),Lo=lr(Ro);function Or(n){if(n===Ro)throw Error(t(174));return n}function Yc(n,i){switch(Ft(Lo,i),Ft(Po,n),Ft(Si,Ro),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}zt(Si),Ft(Si,i)}function As(){zt(Si),zt(Po),zt(Lo)}function Hh(n){Or(Lo.current);var i=Or(Si.current),o=We(i,n.type);i!==o&&(Ft(Po,n),Ft(Si,o))}function qc(n){Po.current===n&&(zt(Si),zt(Po))}var Vt=lr(0);function Ha(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $c=[];function Kc(){for(var n=0;n<$c.length;n++)$c[n]._workInProgressVersionPrimary=null;$c.length=0}var Va=b.ReactCurrentDispatcher,Zc=b.ReactCurrentBatchConfig,zr=0,Gt=null,Zt=null,nn=null,Ga=!1,Do=!1,No=0,E_=0;function pn(){throw Error(t(321))}function Qc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ai(n[o],i[o]))return!1;return!0}function Jc(n,i,o,c,h,_){if(zr=_,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Va.current=n===null||n.memoizedState===null?b_:C_,n=o(c,h),Do){_=0;do{if(Do=!1,No=0,25<=_)throw Error(t(301));_+=1,nn=Zt=null,i.updateQueue=null,Va.current=R_,n=o(c,h)}while(Do)}if(Va.current=Xa,i=Zt!==null&&Zt.next!==null,zr=0,nn=Zt=Gt=null,Ga=!1,i)throw Error(t(300));return n}function eu(){var n=No!==0;return No=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Gt.memoizedState=nn=n:nn=nn.next=n,nn}function Zn(){if(Zt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=nn===null?Gt.memoizedState:nn.next;if(i!==null)nn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},nn===null?Gt.memoizedState=nn=n:nn=nn.next=n}return nn}function Io(n,i){return typeof i=="function"?i(n):i}function tu(n){var i=Zn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=Zt,h=c.baseQueue,_=o.pending;if(_!==null){if(h!==null){var w=h.next;h.next=_.next,_.next=w}c.baseQueue=h=_,o.pending=null}if(h!==null){_=h.next,c=c.baseState;var I=w=null,z=null,re=_;do{var xe=re.lane;if((zr&xe)===xe)z!==null&&(z=z.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:n(c,re.action);else{var Se={lane:xe,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};z===null?(I=z=Se,w=c):z=z.next=Se,Gt.lanes|=xe,Br|=xe}re=re.next}while(re!==null&&re!==_);z===null?w=c:z.next=I,ai(c,i.memoizedState)||(Pn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=z,o.lastRenderedState=c}if(n=o.interleaved,n!==null){h=n;do _=h.lane,Gt.lanes|=_,Br|=_,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function nu(n){var i=Zn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,h=o.pending,_=i.memoizedState;if(h!==null){o.pending=null;var w=h=h.next;do _=n(_,w.action),w=w.next;while(w!==h);ai(_,i.memoizedState)||(Pn=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),o.lastRenderedState=_}return[_,c]}function Vh(){}function Gh(n,i){var o=Gt,c=Zn(),h=i(),_=!ai(c.memoizedState,h);if(_&&(c.memoizedState=h,Pn=!0),c=c.queue,iu(Xh.bind(null,o,c,n),[n]),c.getSnapshot!==i||_||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Uo(9,jh.bind(null,o,c,h,i),void 0,null),rn===null)throw Error(t(349));(zr&30)!==0||Wh(o,i,h)}return h}function Wh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function jh(n,i,o,c){i.value=o,i.getSnapshot=c,Yh(i)&&qh(n)}function Xh(n,i,o){return o(function(){Yh(i)&&qh(n)})}function Yh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ai(n,o)}catch{return!0}}function qh(n){var i=ki(n,1);i!==null&&fi(i,n,1,-1)}function $h(n){var i=Mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},i.queue=n,n=n.dispatch=A_.bind(null,Gt,n),[i.memoizedState,n]}function Uo(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Kh(){return Zn().memoizedState}function Wa(n,i,o,c){var h=Mi();Gt.flags|=n,h.memoizedState=Uo(1|i,o,void 0,c===void 0?null:c)}function ja(n,i,o,c){var h=Zn();c=c===void 0?null:c;var _=void 0;if(Zt!==null){var w=Zt.memoizedState;if(_=w.destroy,c!==null&&Qc(c,w.deps)){h.memoizedState=Uo(i,o,_,c);return}}Gt.flags|=n,h.memoizedState=Uo(1|i,o,_,c)}function Zh(n,i){return Wa(8390656,8,n,i)}function iu(n,i){return ja(2048,8,n,i)}function Qh(n,i){return ja(4,2,n,i)}function Jh(n,i){return ja(4,4,n,i)}function ep(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function tp(n,i,o){return o=o!=null?o.concat([n]):null,ja(4,4,ep.bind(null,i,n),o)}function ru(){}function np(n,i){var o=Zn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function ip(n,i){var o=Zn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function rp(n,i,o){return(zr&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=o):(ai(o,i)||(o=yn(),Gt.lanes|=o,Br|=o,n.baseState=!0),i)}function w_(n,i){var o=Lt;Lt=o!==0&&4>o?o:4,n(!0);var c=Zc.transition;Zc.transition={};try{n(!1),i()}finally{Lt=o,Zc.transition=c}}function sp(){return Zn().memoizedState}function T_(n,i,o){var c=gr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},op(n))ap(i,o);else if(o=kh(n,i,o,c),o!==null){var h=Mn();fi(o,n,c,h),lp(o,i,c)}}function A_(n,i,o){var c=gr(n),h={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(op(n))ap(i,h);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var w=i.lastRenderedState,I=_(w,o);if(h.hasEagerState=!0,h.eagerState=I,ai(I,w)){var z=i.interleaved;z===null?(h.next=h,jc(i)):(h.next=z.next,z.next=h),i.interleaved=h;return}}catch{}finally{}o=kh(n,i,h,c),o!==null&&(h=Mn(),fi(o,n,c,h),lp(o,i,c))}}function op(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function ap(n,i){Do=Ga=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function lp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,oc(n,o)}}var Xa={readContext:Kn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},b_={readContext:Kn,useCallback:function(n,i){return Mi().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:Zh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Wa(4194308,4,ep.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Wa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Wa(4,2,n,i)},useMemo:function(n,i){var o=Mi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Mi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=T_.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=Mi();return n={current:n},i.memoizedState=n},useState:$h,useDebugValue:ru,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=$h(!1),i=n[0];return n=w_.bind(null,n[1]),Mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Gt,h=Mi();if(Bt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),rn===null)throw Error(t(349));(zr&30)!==0||Wh(c,i,o)}h.memoizedState=o;var _={value:o,getSnapshot:i};return h.queue=_,Zh(Xh.bind(null,c,_,n),[n]),c.flags|=2048,Uo(9,jh.bind(null,c,_,o,i),void 0,null),o},useId:function(){var n=Mi(),i=rn.identifierPrefix;if(Bt){var o=Fi,c=Ui;o=(c&~(1<<32-dt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=No++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=E_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},C_={readContext:Kn,useCallback:np,useContext:Kn,useEffect:iu,useImperativeHandle:tp,useInsertionEffect:Qh,useLayoutEffect:Jh,useMemo:ip,useReducer:tu,useRef:Kh,useState:function(){return tu(Io)},useDebugValue:ru,useDeferredValue:function(n){var i=Zn();return rp(i,Zt.memoizedState,n)},useTransition:function(){var n=tu(Io)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Vh,useSyncExternalStore:Gh,useId:sp,unstable_isNewReconciler:!1},R_={readContext:Kn,useCallback:np,useContext:Kn,useEffect:iu,useImperativeHandle:tp,useInsertionEffect:Qh,useLayoutEffect:Jh,useMemo:ip,useReducer:nu,useRef:Kh,useState:function(){return nu(Io)},useDebugValue:ru,useDeferredValue:function(n){var i=Zn();return Zt===null?i.memoizedState=n:rp(i,Zt.memoizedState,n)},useTransition:function(){var n=nu(Io)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Vh,useSyncExternalStore:Gh,useId:sp,unstable_isNewReconciler:!1};function ci(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function su(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:ne({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ya={isMounted:function(n){return(n=n._reactInternals)?vi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Mn(),h=gr(n),_=Oi(c,h);_.payload=i,o!=null&&(_.callback=o),i=fr(n,_,h),i!==null&&(fi(i,n,h,c),za(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Mn(),h=gr(n),_=Oi(c,h);_.tag=1,_.payload=i,o!=null&&(_.callback=o),i=fr(n,_,h),i!==null&&(fi(i,n,h,c),za(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),c=gr(n),h=Oi(o,c);h.tag=2,i!=null&&(h.callback=i),i=fr(n,h,c),i!==null&&(fi(i,n,c,o),za(i,n,c))}};function cp(n,i,o,c,h,_,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,_,w):i.prototype&&i.prototype.isPureReactComponent?!So(o,c)||!So(h,_):!0}function up(n,i,o){var c=!1,h=cr,_=i.contextType;return typeof _=="object"&&_!==null?_=Kn(_):(h=Rn(i)?Ir:hn.current,c=i.contextTypes,_=(c=c!=null)?xs(n,h):cr),i=new i(o,_),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ya,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=_),i}function dp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Ya.enqueueReplaceState(i,i.state,null)}function ou(n,i,o,c){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},Xc(n);var _=i.contextType;typeof _=="object"&&_!==null?h.context=Kn(_):(_=Rn(i)?Ir:hn.current,h.context=xs(n,_)),h.state=n.memoizedState,_=i.getDerivedStateFromProps,typeof _=="function"&&(su(n,i,_,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Ya.enqueueReplaceState(h,h.state,null),Ba(n,o,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,i){try{var o="",c=i;do o+=de(c),c=c.return;while(c);var h=o}catch(_){h=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:i,stack:h,digest:null}}function au(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function lu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var P_=typeof WeakMap=="function"?WeakMap:Map;function fp(n,i,o){o=Oi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){el||(el=!0,Eu=c),lu(n,i)},o}function hp(n,i,o){o=Oi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;o.payload=function(){return c(h)},o.callback=function(){lu(n,i)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(o.callback=function(){lu(n,i),typeof c!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function pp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new P_;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(o)||(h.add(o),n=W_.bind(null,n,i,o),i.then(n,n))}function mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function gp(n,i,o,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Oi(-1,1),i.tag=2,fr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var L_=b.ReactCurrentOwner,Pn=!1;function Sn(n,i,o,c){i.child=n===null?Fh(i,null,o,c):Es(i,n.child,o,c)}function _p(n,i,o,c,h){o=o.render;var _=i.ref;return Ts(i,h),c=Jc(n,i,o,c,_,h),o=eu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,zi(n,i,h)):(Bt&&o&&Fc(i),i.flags|=1,Sn(n,i,c,h),i.child)}function vp(n,i,o,c,h){if(n===null){var _=o.type;return typeof _=="function"&&!Pu(_)&&_.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=_,xp(n,i,_,c,h)):(n=ol(o.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(_=n.child,(n.lanes&h)===0){var w=_.memoizedProps;if(o=o.compare,o=o!==null?o:So,o(w,c)&&n.ref===i.ref)return zi(n,i,h)}return i.flags|=1,n=vr(_,c),n.ref=i.ref,n.return=i,i.child=n}function xp(n,i,o,c,h){if(n!==null){var _=n.memoizedProps;if(So(_,c)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=c=_,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,zi(n,i,h)}return cu(n,i,o,c,h)}function yp(n,i,o){var c=i.pendingProps,h=c.children,_=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Rs,Hn),Hn|=o;else{if((o&1073741824)===0)return n=_!==null?_.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(Rs,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:o,Ft(Rs,Hn),Hn|=c}else _!==null?(c=_.baseLanes|o,i.memoizedState=null):c=o,Ft(Rs,Hn),Hn|=c;return Sn(n,i,h,o),i.child}function Sp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function cu(n,i,o,c,h){var _=Rn(o)?Ir:hn.current;return _=xs(i,_),Ts(i,h),o=Jc(n,i,o,c,_,h),c=eu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,zi(n,i,h)):(Bt&&c&&Fc(i),i.flags|=1,Sn(n,i,o,h),i.child)}function Mp(n,i,o,c,h){if(Rn(o)){var _=!0;La(i)}else _=!1;if(Ts(i,h),i.stateNode===null)$a(n,i),up(i,o,c),ou(i,o,c,h),c=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var z=w.context,re=o.contextType;typeof re=="object"&&re!==null?re=Kn(re):(re=Rn(o)?Ir:hn.current,re=xs(i,re));var xe=o.getDerivedStateFromProps,Se=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==c||z!==re)&&dp(i,w,c,re),dr=!1;var ve=i.memoizedState;w.state=ve,Ba(i,c,w,h),z=i.memoizedState,I!==c||ve!==z||Cn.current||dr?(typeof xe=="function"&&(su(i,o,xe,c),z=i.memoizedState),(I=dr||cp(i,o,I,c,ve,z,re))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),w.props=c,w.state=z,w.context=re,c=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Oh(n,i),I=i.memoizedProps,re=i.type===i.elementType?I:ci(i.type,I),w.props=re,Se=i.pendingProps,ve=w.context,z=o.contextType,typeof z=="object"&&z!==null?z=Kn(z):(z=Rn(o)?Ir:hn.current,z=xs(i,z));var Ue=o.getDerivedStateFromProps;(xe=typeof Ue=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Se||ve!==z)&&dp(i,w,c,z),dr=!1,ve=i.memoizedState,w.state=ve,Ba(i,c,w,h);var Be=i.memoizedState;I!==Se||ve!==Be||Cn.current||dr?(typeof Ue=="function"&&(su(i,o,Ue,c),Be=i.memoizedState),(re=dr||cp(i,o,re,c,ve,Be,z)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Be,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Be,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Be),w.props=c,w.state=Be,w.context=z,c=re):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return uu(n,i,o,c,_,h)}function uu(n,i,o,c,h,_){Sp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return h&&bh(i,o,!1),zi(n,i,_);c=i.stateNode,L_.current=i;var I=w&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=Es(i,n.child,null,_),i.child=Es(i,null,I,_)):Sn(n,i,I,_),i.memoizedState=c.state,h&&bh(i,o,!0),i.child}function Ep(n){var i=n.stateNode;i.pendingContext?Th(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Th(n,i.context,!1),Yc(n,i.containerInfo)}function wp(n,i,o,c,h){return Ms(),Bc(h),i.flags|=256,Sn(n,i,o,c),i.child}var du={dehydrated:null,treeContext:null,retryLane:0};function fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tp(n,i,o){var c=i.pendingProps,h=Vt.current,_=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(h&2)!==0),I?(_=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ft(Vt,h&1),n===null)return zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,_?(c=i.mode,_=i.child,w={mode:"hidden",children:w},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=al(w,c,0,null),n=Wr(n,c,o,null),_.return=i,n.return=i,_.sibling=n,i.child=_,i.child.memoizedState=fu(o),i.memoizedState=du,n):hu(i,w));if(h=n.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return D_(n,i,w,c,I,h,o);if(_){_=c.fallback,w=i.mode,h=n.child,I=h.sibling;var z={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=vr(h,z),c.subtreeFlags=h.subtreeFlags&14680064),I!==null?_=vr(I,_):(_=Wr(_,w,o,null),_.flags|=2),_.return=i,c.return=i,c.sibling=_,i.child=c,c=_,_=i.child,w=n.child.memoizedState,w=w===null?fu(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=n.childLanes&~o,i.memoizedState=du,c}return _=n.child,n=_.sibling,c=vr(_,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function hu(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function qa(n,i,o,c){return c!==null&&Bc(c),Es(i,n.child,null,o),n=hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function D_(n,i,o,c,h,_,w){if(o)return i.flags&256?(i.flags&=-257,c=au(Error(t(422))),qa(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(_=c.fallback,h=i.mode,c=al({mode:"visible",children:c.children},h,0,null),_=Wr(_,h,w,null),_.flags|=2,c.return=i,_.return=i,c.sibling=_,i.child=c,(i.mode&1)!==0&&Es(i,n.child,null,w),i.child.memoizedState=fu(w),i.memoizedState=du,_);if((i.mode&1)===0)return qa(n,i,w,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var I=c.dgst;return c=I,_=Error(t(419)),c=au(_,c,void 0),qa(n,i,w,c)}if(I=(w&n.childLanes)!==0,Pn||I){if(c=rn,c!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|w))!==0?0:h,h!==0&&h!==_.retryLane&&(_.retryLane=h,ki(n,h),fi(c,n,h,-1))}return Ru(),c=au(Error(t(421))),qa(n,i,w,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=j_.bind(null,n),h._reactRetry=i,null):(n=_.treeContext,Bn=ar(h.nextSibling),zn=i,Bt=!0,li=null,n!==null&&(qn[$n++]=Ui,qn[$n++]=Fi,qn[$n++]=Ur,Ui=n.id,Fi=n.overflow,Ur=i),i=hu(i,c.children),i.flags|=4096,i)}function Ap(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Wc(n.return,i,o)}function pu(n,i,o,c,h){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:h}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=o,_.tailMode=h)}function bp(n,i,o){var c=i.pendingProps,h=c.revealOrder,_=c.tail;if(Sn(n,i,c.children,o),c=Vt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ap(n,o,i);else if(n.tag===19)Ap(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ft(Vt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&Ha(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),pu(i,!1,h,o,_);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Ha(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}pu(i,!0,o,null,_);break;case"together":pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $a(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function zi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Br|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=vr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=vr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function N_(n,i,o){switch(i.tag){case 3:Ep(i),Ms();break;case 5:Hh(i);break;case 1:Rn(i.type)&&La(i);break;case 4:Yc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Ft(ka,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ft(Vt,Vt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Tp(n,i,o):(Ft(Vt,Vt.current&1),n=zi(n,i,o),n!==null?n.sibling:null);Ft(Vt,Vt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return bp(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ft(Vt,Vt.current),c)break;return null;case 22:case 23:return i.lanes=0,yp(n,i,o)}return zi(n,i,o)}var Cp,mu,Rp,Pp;Cp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},mu=function(){},Rp=function(n,i,o,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Or(Si.current);var _=null;switch(o){case"input":h=V(n,h),c=V(n,c),_=[];break;case"select":h=ne({},h,{value:void 0}),c=ne({},c,{value:void 0}),_=[];break;case"textarea":h=T(n,h),c=T(n,c),_=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ca)}mt(o,c);var w;o=null;for(re in h)if(!c.hasOwnProperty(re)&&h.hasOwnProperty(re)&&h[re]!=null)if(re==="style"){var I=h[re];for(w in I)I.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?_||(_=[]):(_=_||[]).push(re,null));for(re in c){var z=c[re];if(I=h!=null?h[re]:void 0,c.hasOwnProperty(re)&&z!==I&&(z!=null||I!=null))if(re==="style")if(I){for(w in I)!I.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in z)z.hasOwnProperty(w)&&I[w]!==z[w]&&(o||(o={}),o[w]=z[w])}else o||(_||(_=[]),_.push(re,o)),o=z;else re==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(_=_||[]).push(re,z)):re==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(re,""+z):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(z!=null&&re==="onScroll"&&Ot("scroll",n),_||I===z||(_=[])):(_=_||[]).push(re,z))}o&&(_=_||[]).push("style",o);var re=_;(i.updateQueue=re)&&(i.flags|=4)}},Pp=function(n,i,o,c){o!==c&&(i.flags|=4)};function Fo(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function I_(n,i,o){var c=i.pendingProps;switch(kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Rn(i.type)&&Pa(),mn(i),null;case 3:return c=i.stateNode,As(),zt(Cn),zt(hn),Kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ua(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,li!==null&&(Au(li),li=null))),mu(n,i),mn(i),null;case 5:qc(i);var h=Or(Lo.current);if(o=i.type,n!==null&&i.stateNode!=null)Rp(n,i,o,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Or(Si.current),Ua(i)){c=i.stateNode,o=i.type;var _=i.memoizedProps;switch(c[yi]=i,c[Ao]=_,n=(i.mode&1)!==0,o){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(h=0;h<Eo.length;h++)Ot(Eo[h],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":vt(c,_),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Ot("invalid",c);break;case"textarea":J(c,_),Ot("invalid",c)}mt(o,_),h=null;for(var w in _)if(_.hasOwnProperty(w)){var I=_[w];w==="children"?typeof I=="string"?c.textContent!==I&&(_.suppressHydrationWarning!==!0&&ba(c.textContent,I,n),h=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&ba(c.textContent,I,n),h=["children",""+I]):a.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Ot("scroll",c)}switch(o){case"input":ut(c),qe(c,_,!0);break;case"textarea":ut(c),ge(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=Ca)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(o,{is:c.is}):(n=w.createElement(o),o==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,o),n[yi]=i,n[Ao]=c,Cp(n,i,!1,!1),i.stateNode=n;e:{switch(w=ot(o,c),o){case"dialog":Ot("cancel",n),Ot("close",n),h=c;break;case"iframe":case"object":case"embed":Ot("load",n),h=c;break;case"video":case"audio":for(h=0;h<Eo.length;h++)Ot(Eo[h],n);h=c;break;case"source":Ot("error",n),h=c;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),h=c;break;case"details":Ot("toggle",n),h=c;break;case"input":vt(n,c),h=V(n,c),Ot("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=ne({},c,{value:void 0}),Ot("invalid",n);break;case"textarea":J(n,c),h=T(n,c),Ot("invalid",n);break;default:h=c}mt(o,h),I=h;for(_ in I)if(I.hasOwnProperty(_)){var z=I[_];_==="style"?nt(n,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Fe(n,z)):_==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&pt(n,z):typeof z=="number"&&pt(n,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?z!=null&&_==="onScroll"&&Ot("scroll",n):z!=null&&P(n,_,z,w))}switch(o){case"input":ut(n),qe(n,c,!1);break;case"textarea":ut(n),ge(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ae(c.value));break;case"select":n.multiple=!!c.multiple,_=c.value,_!=null?N(n,!!c.multiple,_,!1):c.defaultValue!=null&&N(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Ca)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)Pp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Or(Lo.current),Or(Si.current),Ua(i)){if(c=i.stateNode,o=i.memoizedProps,c[yi]=i,(_=c.nodeValue!==o)&&(n=zn,n!==null))switch(n.tag){case 3:ba(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ba(c.nodeValue,o,(n.mode&1)!==0)}_&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[yi]=i,i.stateNode=c}return mn(i),null;case 13:if(zt(Vt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Nh(),Ms(),i.flags|=98560,_=!1;else if(_=Ua(i),c!==null&&c.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=i.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[yi]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),_=!1}else li!==null&&(Au(li),li=null),_=!0;if(!_)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Vt.current&1)!==0?Qt===0&&(Qt=3):Ru())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return As(),mu(n,i),n===null&&wo(i.stateNode.containerInfo),mn(i),null;case 10:return Gc(i.type._context),mn(i),null;case 17:return Rn(i.type)&&Pa(),mn(i),null;case 19:if(zt(Vt),_=i.memoizedState,_===null)return mn(i),null;if(c=(i.flags&128)!==0,w=_.rendering,w===null)if(c)Fo(_,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Ha(n),w!==null){for(i.flags|=128,Fo(_,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)_=o,n=c,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,n=w.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ft(Vt,Vt.current&1|2),i.child}n=n.sibling}_.tail!==null&&Ee()>Ps&&(i.flags|=128,c=!0,Fo(_,!1),i.lanes=4194304)}else{if(!c)if(n=Ha(w),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Fo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!Bt)return mn(i),null}else 2*Ee()-_.renderingStartTime>Ps&&o!==1073741824&&(i.flags|=128,c=!0,Fo(_,!1),i.lanes=4194304);_.isBackwards?(w.sibling=i.child,i.child=w):(o=_.last,o!==null?o.sibling=w:i.child=w,_.last=w)}return _.tail!==null?(i=_.tail,_.rendering=i,_.tail=i.sibling,_.renderingStartTime=Ee(),i.sibling=null,o=Vt.current,Ft(Vt,c?o&1|2:o&1),i):(mn(i),null);case 22:case 23:return Cu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function U_(n,i){switch(kc(i),i.tag){case 1:return Rn(i.type)&&Pa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return As(),zt(Cn),zt(hn),Kc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return qc(i),null;case 13:if(zt(Vt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Vt),null;case 4:return As(),null;case 10:return Gc(i.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var Ka=!1,gn=!1,F_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Cs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Wt(n,i,c)}else o.current=null}function gu(n,i,o){try{o()}catch(c){Wt(n,i,c)}}var Lp=!1;function k_(n,i){if(Cc=ga,n=ch(),yc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var h=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{o.nodeType,_.nodeType}catch{o=null;break e}var w=0,I=-1,z=-1,re=0,xe=0,Se=n,ve=null;t:for(;;){for(var Ue;Se!==o||h!==0&&Se.nodeType!==3||(I=w+h),Se!==_||c!==0&&Se.nodeType!==3||(z=w+c),Se.nodeType===3&&(w+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)ve=Se,Se=Ue;for(;;){if(Se===n)break t;if(ve===o&&++re===h&&(I=w),ve===_&&++xe===c&&(z=w),(Ue=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Ue}o=I===-1||z===-1?null:{start:I,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(Rc={focusedElem:n,selectionRange:o},ga=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Xt=Be.memoizedState,$=i.stateNode,H=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ci(i.type,Ve),Xt);$.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Wt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return Be=Lp,Lp=!1,Be}function ko(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var _=h.destroy;h.destroy=void 0,_!==void 0&&gu(i,o,_)}h=h.next}while(h!==c)}}function Za(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function _u(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Dp(n){var i=n.alternate;i!==null&&(n.alternate=null,Dp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[yi],delete i[Ao],delete i[Nc],delete i[x_],delete i[y_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Np(n){return n.tag===5||n.tag===3||n.tag===4}function Ip(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Np(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ca));else if(c!==4&&(n=n.child,n!==null))for(vu(n,i,o),n=n.sibling;n!==null;)vu(n,i,o),n=n.sibling}function xu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(xu(n,i,o),n=n.sibling;n!==null;)xu(n,i,o),n=n.sibling}var an=null,ui=!1;function hr(n,i,o){for(o=o.child;o!==null;)Up(n,i,o),o=o.sibling}function Up(n,i,o){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Rt,o)}catch{}switch(o.tag){case 5:gn||Cs(o,i);case 6:var c=an,h=ui;an=null,hr(n,i,o),an=c,ui=h,an!==null&&(ui?(n=an,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ui?(n=an,o=o.stateNode,n.nodeType===8?Dc(n.parentNode,o):n.nodeType===1&&Dc(n,o),mo(n)):Dc(an,o.stateNode));break;case 4:c=an,h=ui,an=o.stateNode.containerInfo,ui=!0,hr(n,i,o),an=c,ui=h;break;case 0:case 11:case 14:case 15:if(!gn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var _=h,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&gu(o,i,w),h=h.next}while(h!==c)}hr(n,i,o);break;case 1:if(!gn&&(Cs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){Wt(o,i,I)}hr(n,i,o);break;case 21:hr(n,i,o);break;case 22:o.mode&1?(gn=(c=gn)||o.memoizedState!==null,hr(n,i,o),gn=c):hr(n,i,o);break;default:hr(n,i,o)}}function Fp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new F_),i.forEach(function(c){var h=X_.bind(null,n,c);o.has(c)||(o.add(c),c.then(h,h))})}}function di(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var h=o[c];try{var _=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:an=I.stateNode,ui=!1;break e;case 3:an=I.stateNode.containerInfo,ui=!0;break e;case 4:an=I.stateNode.containerInfo,ui=!0;break e}I=I.return}if(an===null)throw Error(t(160));Up(_,w,h),an=null,ui=!1;var z=h.alternate;z!==null&&(z.return=null),h.return=null}catch(re){Wt(h,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)kp(i,n),i=i.sibling}function kp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(i,n),Ei(n),c&4){try{ko(3,n,n.return),Za(3,n)}catch(Ve){Wt(n,n.return,Ve)}try{ko(5,n,n.return)}catch(Ve){Wt(n,n.return,Ve)}}break;case 1:di(i,n),Ei(n),c&512&&o!==null&&Cs(o,o.return);break;case 5:if(di(i,n),Ei(n),c&512&&o!==null&&Cs(o,o.return),n.flags&32){var h=n.stateNode;try{pt(h,"")}catch(Ve){Wt(n,n.return,Ve)}}if(c&4&&(h=n.stateNode,h!=null)){var _=n.memoizedProps,w=o!==null?o.memoizedProps:_,I=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&Ze(h,_),ot(I,w);var re=ot(I,_);for(w=0;w<z.length;w+=2){var xe=z[w],Se=z[w+1];xe==="style"?nt(h,Se):xe==="dangerouslySetInnerHTML"?Fe(h,Se):xe==="children"?pt(h,Se):P(h,xe,Se,re)}switch(I){case"input":et(h,_);break;case"textarea":fe(h,_);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!_.multiple;var Ue=_.value;Ue!=null?N(h,!!_.multiple,Ue,!1):ve!==!!_.multiple&&(_.defaultValue!=null?N(h,!!_.multiple,_.defaultValue,!0):N(h,!!_.multiple,_.multiple?[]:"",!1))}h[Ao]=_}catch(Ve){Wt(n,n.return,Ve)}}break;case 6:if(di(i,n),Ei(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,_=n.memoizedProps;try{h.nodeValue=_}catch(Ve){Wt(n,n.return,Ve)}}break;case 3:if(di(i,n),Ei(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{mo(i.containerInfo)}catch(Ve){Wt(n,n.return,Ve)}break;case 4:di(i,n),Ei(n);break;case 13:di(i,n),Ei(n),h=n.child,h.flags&8192&&(_=h.memoizedState!==null,h.stateNode.isHidden=_,!_||h.alternate!==null&&h.alternate.memoizedState!==null||(Mu=Ee())),c&4&&Fp(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(gn=(re=gn)||xe,di(i,n),gn=re):di(i,n),Ei(n),c&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!xe&&(n.mode&1)!==0)for(ke=n,xe=n.child;xe!==null;){for(Se=ke=xe;ke!==null;){switch(ve=ke,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:ko(4,ve,ve.return);break;case 1:Cs(ve,ve.return);var Be=ve.stateNode;if(typeof Be.componentWillUnmount=="function"){c=ve,o=ve.return;try{i=c,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ve){Wt(c,o,Ve)}}break;case 5:Cs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Bp(Se);continue}}Ue!==null?(Ue.return=ve,ke=Ue):Bp(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{h=Se.stateNode,re?(_=h.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=Se.stateNode,z=Se.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=tt("display",w))}catch(Ve){Wt(n,n.return,Ve)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=re?"":Se.memoizedProps}catch(Ve){Wt(n,n.return,Ve)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:di(i,n),Ei(n),c&4&&Fp(n);break;case 21:break;default:di(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Np(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(pt(h,""),c.flags&=-33);var _=Ip(n);xu(n,_,h);break;case 3:case 4:var w=c.stateNode.containerInfo,I=Ip(n);vu(n,I,w);break;default:throw Error(t(161))}}catch(z){Wt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function O_(n,i,o){ke=n,Op(n)}function Op(n,i,o){for(var c=(n.mode&1)!==0;ke!==null;){var h=ke,_=h.child;if(h.tag===22&&c){var w=h.memoizedState!==null||Ka;if(!w){var I=h.alternate,z=I!==null&&I.memoizedState!==null||gn;I=Ka;var re=gn;if(Ka=w,(gn=z)&&!re)for(ke=h;ke!==null;)w=ke,z=w.child,w.tag===22&&w.memoizedState!==null?Hp(h):z!==null?(z.return=w,ke=z):Hp(h);for(;_!==null;)ke=_,Op(_),_=_.sibling;ke=h,Ka=I,gn=re}zp(n)}else(h.subtreeFlags&8772)!==0&&_!==null?(_.return=h,ke=_):zp(n)}}function zp(n){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||Za(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!gn)if(o===null)c.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:ci(i.type,o.memoizedProps);c.componentDidUpdate(h,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=i.updateQueue;_!==null&&Bh(i,_,c);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Bh(i,w,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var xe=re.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&mo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&_u(i)}catch(ve){Wt(i,i.return,ve)}}if(i===n){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Bp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Hp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Za(4,i)}catch(z){Wt(i,o,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(z){Wt(i,h,z)}}var _=i.return;try{_u(i)}catch(z){Wt(i,_,z)}break;case 5:var w=i.return;try{_u(i)}catch(z){Wt(i,w,z)}}}catch(z){Wt(i,i.return,z)}if(i===n){ke=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ke=I;break}ke=i.return}}var z_=Math.ceil,Qa=b.ReactCurrentDispatcher,yu=b.ReactCurrentOwner,Qn=b.ReactCurrentBatchConfig,Tt=0,rn=null,Yt=null,ln=0,Hn=0,Rs=lr(0),Qt=0,Oo=null,Br=0,Ja=0,Su=0,zo=null,Ln=null,Mu=0,Ps=1/0,Bi=null,el=!1,Eu=null,pr=null,tl=!1,mr=null,nl=0,Bo=0,wu=null,il=-1,rl=0;function Mn(){return(Tt&6)!==0?Ee():il!==-1?il:il=Ee()}function gr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&ln!==0?ln&-ln:M_.transition!==null?(rl===0&&(rl=yn()),rl):(n=Lt,n!==0||(n=window.event,n=n===void 0?16:Gf(n.type)),n)}function fi(n,i,o,c){if(50<Bo)throw Bo=0,wu=null,Error(t(185));bn(n,o,c),((Tt&2)===0||n!==rn)&&(n===rn&&((Tt&2)===0&&(Ja|=o),Qt===4&&_r(n,ln)),Dn(n,c),o===1&&Tt===0&&(i.mode&1)===0&&(Ps=Ee()+500,Da&&ur()))}function Dn(n,i){var o=n.callbackNode;Xn(n,i);var c=xi(n,n===rn?ln:0);if(c===0)o!==null&&oe(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&oe(o),i===1)n.tag===0?S_(Gp.bind(null,n)):Ch(Gp.bind(null,n)),__(function(){(Tt&6)===0&&ur()}),o=null;else{switch(Uf(c)){case 1:o=He;break;case 4:o=it;break;case 16:o=st;break;case 536870912:o=St;break;default:o=st}o=Zp(o,Vp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Vp(n,i){if(il=-1,rl=0,(Tt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ls()&&n.callbackNode!==o)return null;var c=xi(n,n===rn?ln:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=sl(n,c);else{i=c;var h=Tt;Tt|=2;var _=jp();(rn!==n||ln!==i)&&(Bi=null,Ps=Ee()+500,Vr(n,i));do try{V_();break}catch(I){Wp(n,I)}while(!0);Vc(),Qa.current=_,Tt=h,Yt!==null?i=0:(rn=null,ln=0,i=Qt)}if(i!==0){if(i===2&&(h=Di(n),h!==0&&(c=h,i=Tu(n,h))),i===1)throw o=Oo,Vr(n,0),_r(n,c),Dn(n,Ee()),o;if(i===6)_r(n,c);else{if(h=n.current.alternate,(c&30)===0&&!B_(h)&&(i=sl(n,c),i===2&&(_=Di(n),_!==0&&(c=_,i=Tu(n,_))),i===1))throw o=Oo,Vr(n,0),_r(n,c),Dn(n,Ee()),o;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Gr(n,Ln,Bi);break;case 3:if(_r(n,c),(c&130023424)===c&&(i=Mu+500-Ee(),10<i)){if(xi(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Mn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Lc(Gr.bind(null,n,Ln,Bi),i);break}Gr(n,Ln,Bi);break;case 4:if(_r(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var w=31-dt(c);_=1<<w,w=i[w],w>h&&(h=w),c&=~_}if(c=h,c=Ee()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*z_(c/1960))-c,10<c){n.timeoutHandle=Lc(Gr.bind(null,n,Ln,Bi),c);break}Gr(n,Ln,Bi);break;case 5:Gr(n,Ln,Bi);break;default:throw Error(t(329))}}}return Dn(n,Ee()),n.callbackNode===o?Vp.bind(null,n):null}function Tu(n,i){var o=zo;return n.current.memoizedState.isDehydrated&&(Vr(n,i).flags|=256),n=sl(n,i),n!==2&&(i=Ln,Ln=o,i!==null&&Au(i)),n}function Au(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function B_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var h=o[c],_=h.getSnapshot;h=h.value;try{if(!ai(_(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _r(n,i){for(i&=~Su,i&=~Ja,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-dt(i),c=1<<o;n[o]=-1,i&=~c}}function Gp(n){if((Tt&6)!==0)throw Error(t(327));Ls();var i=xi(n,0);if((i&1)===0)return Dn(n,Ee()),null;var o=sl(n,i);if(n.tag!==0&&o===2){var c=Di(n);c!==0&&(i=c,o=Tu(n,c))}if(o===1)throw o=Oo,Vr(n,0),_r(n,i),Dn(n,Ee()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Gr(n,Ln,Bi),Dn(n,Ee()),null}function bu(n,i){var o=Tt;Tt|=1;try{return n(i)}finally{Tt=o,Tt===0&&(Ps=Ee()+500,Da&&ur())}}function Hr(n){mr!==null&&mr.tag===0&&(Tt&6)===0&&Ls();var i=Tt;Tt|=1;var o=Qn.transition,c=Lt;try{if(Qn.transition=null,Lt=1,n)return n()}finally{Lt=c,Qn.transition=o,Tt=i,(Tt&6)===0&&ur()}}function Cu(){Hn=Rs.current,zt(Rs)}function Vr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,g_(o)),Yt!==null)for(o=Yt.return;o!==null;){var c=o;switch(kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Pa();break;case 3:As(),zt(Cn),zt(hn),Kc();break;case 5:qc(c);break;case 4:As();break;case 13:zt(Vt);break;case 19:zt(Vt);break;case 10:Gc(c.type._context);break;case 22:case 23:Cu()}o=o.return}if(rn=n,Yt=n=vr(n.current,null),ln=Hn=i,Qt=0,Oo=null,Su=Ja=Br=0,Ln=zo=null,kr!==null){for(i=0;i<kr.length;i++)if(o=kr[i],c=o.interleaved,c!==null){o.interleaved=null;var h=c.next,_=o.pending;if(_!==null){var w=_.next;_.next=h,c.next=w}o.pending=c}kr=null}return n}function Wp(n,i){do{var o=Yt;try{if(Vc(),Va.current=Xa,Ga){for(var c=Gt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Ga=!1}if(zr=0,nn=Zt=Gt=null,Do=!1,No=0,yu.current=null,o===null||o.return===null){Qt=1,Oo=i,Yt=null;break}e:{var _=n,w=o.return,I=o,z=i;if(i=ln,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var re=z,xe=I,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ue=mp(w);if(Ue!==null){Ue.flags&=-257,gp(Ue,w,I,_,i),Ue.mode&1&&pp(_,re,i),i=Ue,z=re;var Be=i.updateQueue;if(Be===null){var Ve=new Set;Ve.add(z),i.updateQueue=Ve}else Be.add(z);break e}else{if((i&1)===0){pp(_,re,i),Ru();break e}z=Error(t(426))}}else if(Bt&&I.mode&1){var Xt=mp(w);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),gp(Xt,w,I,_,i),Bc(bs(z,I));break e}}_=z=bs(z,I),Qt!==4&&(Qt=2),zo===null?zo=[_]:zo.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,i&=-i,_.lanes|=i;var $=fp(_,z,i);zh(_,$);break e;case 1:I=z;var H=_.type,Q=_.stateNode;if((_.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(pr===null||!pr.has(Q)))){_.flags|=65536,i&=-i,_.lanes|=i;var we=hp(_,I,i);zh(_,we);break e}}_=_.return}while(_!==null)}Yp(o)}catch(Ye){i=Ye,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function jp(){var n=Qa.current;return Qa.current=Xa,n===null?Xa:n}function Ru(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),rn===null||(Br&268435455)===0&&(Ja&268435455)===0||_r(rn,ln)}function sl(n,i){var o=Tt;Tt|=2;var c=jp();(rn!==n||ln!==i)&&(Bi=null,Vr(n,i));do try{H_();break}catch(h){Wp(n,h)}while(!0);if(Vc(),Tt=o,Qa.current=c,Yt!==null)throw Error(t(261));return rn=null,ln=0,Qt}function H_(){for(;Yt!==null;)Xp(Yt)}function V_(){for(;Yt!==null&&!X();)Xp(Yt)}function Xp(n){var i=Kp(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?Yp(n):Yt=i,yu.current=null}function Yp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=I_(o,i,Hn),o!==null){Yt=o;return}}else{if(o=U_(o,i),o!==null){o.flags&=32767,Yt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=n}while(i!==null);Qt===0&&(Qt=5)}function Gr(n,i,o){var c=Lt,h=Qn.transition;try{Qn.transition=null,Lt=1,G_(n,i,o,c)}finally{Qn.transition=h,Lt=c}return null}function G_(n,i,o,c){do Ls();while(mr!==null);if((Tt&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=o.lanes|o.childLanes;if(ha(n,_),n===rn&&(Yt=rn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||tl||(tl=!0,Zp(st,function(){return Ls(),null})),_=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||_){_=Qn.transition,Qn.transition=null;var w=Lt;Lt=1;var I=Tt;Tt|=4,yu.current=null,k_(n,o),kp(o,n),c_(Rc),ga=!!Cc,Rc=Cc=null,n.current=o,O_(o),Te(),Tt=I,Lt=w,Qn.transition=_}else n.current=o;if(tl&&(tl=!1,mr=n,nl=h),_=n.pendingLanes,_===0&&(pr=null),dn(o.stateNode),Dn(n,Ee()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],c(h.value,{componentStack:h.stack,digest:h.digest});if(el)throw el=!1,n=Eu,Eu=null,n;return(nl&1)!==0&&n.tag!==0&&Ls(),_=n.pendingLanes,(_&1)!==0?n===wu?Bo++:(Bo=0,wu=n):Bo=0,ur(),null}function Ls(){if(mr!==null){var n=Uf(nl),i=Qn.transition,o=Lt;try{if(Qn.transition=null,Lt=16>n?16:n,mr===null)var c=!1;else{if(n=mr,mr=null,nl=0,(Tt&6)!==0)throw Error(t(331));var h=Tt;for(Tt|=4,ke=n.current;ke!==null;){var _=ke,w=_.child;if((ke.flags&16)!==0){var I=_.deletions;if(I!==null){for(var z=0;z<I.length;z++){var re=I[z];for(ke=re;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:ko(8,xe,_)}var Se=xe.child;if(Se!==null)Se.return=xe,ke=Se;else for(;ke!==null;){xe=ke;var ve=xe.sibling,Ue=xe.return;if(Dp(xe),xe===re){ke=null;break}if(ve!==null){ve.return=Ue,ke=ve;break}ke=Ue}}}var Be=_.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Xt=Ve.sibling;Ve.sibling=null,Ve=Xt}while(Ve!==null)}}ke=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,ke=w;else e:for(;ke!==null;){if(_=ke,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ko(9,_,_.return)}var $=_.sibling;if($!==null){$.return=_.return,ke=$;break e}ke=_.return}}var H=n.current;for(ke=H;ke!==null;){w=ke;var Q=w.child;if((w.subtreeFlags&2064)!==0&&Q!==null)Q.return=w,ke=Q;else e:for(w=H;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Za(9,I)}}catch(Ye){Wt(I,I.return,Ye)}if(I===w){ke=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,ke=we;break e}ke=I.return}}if(Tt=h,ur(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Rt,n)}catch{}c=!0}return c}finally{Lt=o,Qn.transition=i}}return!1}function qp(n,i,o){i=bs(o,i),i=fp(n,i,1),n=fr(n,i,1),i=Mn(),n!==null&&(bn(n,1,i),Dn(n,i))}function Wt(n,i,o){if(n.tag===3)qp(n,n,o);else for(;i!==null;){if(i.tag===3){qp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(pr===null||!pr.has(c))){n=bs(o,n),n=hp(i,n,1),i=fr(i,n,1),n=Mn(),i!==null&&(bn(i,1,n),Dn(i,n));break}}i=i.return}}function W_(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,rn===n&&(ln&o)===o&&(Qt===4||Qt===3&&(ln&130023424)===ln&&500>Ee()-Mu?Vr(n,0):Su|=o),Dn(n,i)}function $p(n,i){i===0&&((n.mode&1)===0?i=1:(i=oi,oi<<=1,(oi&130023424)===0&&(oi=4194304)));var o=Mn();n=ki(n,i),n!==null&&(bn(n,i,o),Dn(n,o))}function j_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),$p(n,o)}function X_(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),$p(n,o)}var Kp;Kp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Pn=!1,N_(n,i,o);Pn=(n.flags&131072)!==0}else Pn=!1,Bt&&(i.flags&1048576)!==0&&Rh(i,Ia,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;$a(n,i),n=i.pendingProps;var h=xs(i,hn.current);Ts(i,o),h=Jc(null,i,c,n,h,o);var _=eu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(c)?(_=!0,La(i)):_=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Xc(i),h.updater=Ya,i.stateNode=h,h._reactInternals=i,ou(i,c,n,o),i=uu(null,i,c,!0,_,o)):(i.tag=0,Bt&&_&&Fc(i),Sn(null,i,h,o),i=i.child),i;case 16:c=i.elementType;e:{switch($a(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=q_(c),n=ci(c,n),h){case 0:i=cu(null,i,c,n,o);break e;case 1:i=Mp(null,i,c,n,o);break e;case 11:i=_p(null,i,c,n,o);break e;case 14:i=vp(null,i,c,ci(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ci(c,h),cu(n,i,c,h,o);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ci(c,h),Mp(n,i,c,h,o);case 3:e:{if(Ep(i),n===null)throw Error(t(387));c=i.pendingProps,_=i.memoizedState,h=_.element,Oh(n,i),Ba(i,c,null,o);var w=i.memoizedState;if(c=w.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){h=bs(Error(t(423)),i),i=wp(n,i,c,o,h);break e}else if(c!==h){h=bs(Error(t(424)),i),i=wp(n,i,c,o,h);break e}else for(Bn=ar(i.stateNode.containerInfo.firstChild),zn=i,Bt=!0,li=null,o=Fh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ms(),c===h){i=zi(n,i,o);break e}Sn(n,i,c,o)}i=i.child}return i;case 5:return Hh(i),n===null&&zc(i),c=i.type,h=i.pendingProps,_=n!==null?n.memoizedProps:null,w=h.children,Pc(c,h)?w=null:_!==null&&Pc(c,_)&&(i.flags|=32),Sp(n,i),Sn(n,i,w,o),i.child;case 6:return n===null&&zc(i),null;case 13:return Tp(n,i,o);case 4:return Yc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Es(i,null,c,o):Sn(n,i,c,o),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ci(c,h),_p(n,i,c,h,o);case 7:return Sn(n,i,i.pendingProps,o),i.child;case 8:return Sn(n,i,i.pendingProps.children,o),i.child;case 12:return Sn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,_=i.memoizedProps,w=h.value,Ft(ka,c._currentValue),c._currentValue=w,_!==null)if(ai(_.value,w)){if(_.children===h.children&&!Cn.current){i=zi(n,i,o);break e}}else for(_=i.child,_!==null&&(_.return=i);_!==null;){var I=_.dependencies;if(I!==null){w=_.child;for(var z=I.firstContext;z!==null;){if(z.context===c){if(_.tag===1){z=Oi(-1,o&-o),z.tag=2;var re=_.updateQueue;if(re!==null){re=re.shared;var xe=re.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),re.pending=z}}_.lanes|=o,z=_.alternate,z!==null&&(z.lanes|=o),Wc(_.return,o,i),I.lanes|=o;break}z=z.next}}else if(_.tag===10)w=_.type===i.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=o,I=w.alternate,I!==null&&(I.lanes|=o),Wc(w,o,i),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===i){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}Sn(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Ts(i,o),h=Kn(h),c=c(h),i.flags|=1,Sn(n,i,c,o),i.child;case 14:return c=i.type,h=ci(c,i.pendingProps),h=ci(c.type,h),vp(n,i,c,h,o);case 15:return xp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ci(c,h),$a(n,i),i.tag=1,Rn(c)?(n=!0,La(i)):n=!1,Ts(i,o),up(i,c,h),ou(i,c,h,o),uu(null,i,c,!0,n,o);case 19:return bp(n,i,o);case 22:return yp(n,i,o)}throw Error(t(156,i.tag))};function Zp(n,i){return se(n,i)}function Y_(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,o,c){return new Y_(n,i,o,c)}function Pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function q_(n){if(typeof n=="function")return Pu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===te)return 11;if(n===he)return 14}return 2}function vr(n,i){var o=n.alternate;return o===null?(o=Jn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ol(n,i,o,c,h,_){var w=2;if(c=n,typeof n=="function")Pu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case k:return Wr(o.children,h,_,i);case W:w=8,h|=8;break;case D:return n=Jn(12,o,i,h|2),n.elementType=D,n.lanes=_,n;case Y:return n=Jn(13,o,i,h),n.elementType=Y,n.lanes=_,n;case ue:return n=Jn(19,o,i,h),n.elementType=ue,n.lanes=_,n;case ie:return al(o,h,_,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:w=10;break e;case B:w=9;break e;case te:w=11;break e;case he:w=14;break e;case ce:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(w,o,i,h),i.elementType=n,i.type=c,i.lanes=_,i}function Wr(n,i,o,c){return n=Jn(7,n,c,i),n.lanes=o,n}function al(n,i,o,c){return n=Jn(22,n,c,i),n.elementType=ie,n.lanes=o,n.stateNode={isHidden:!1},n}function Lu(n,i,o){return n=Jn(6,n,null,i),n.lanes=o,n}function Du(n,i,o){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function $_(n,i,o,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yn(0),this.expirationTimes=Yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Nu(n,i,o,c,h,_,w,I,z){return n=new $_(n,i,o,I,z),i===1?(i=1,_===!0&&(i|=8)):i=0,_=Jn(3,null,null,i),n.current=_,_.stateNode=n,_.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(_),n}function K_(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Qp(n){if(!n)return cr;n=n._reactInternals;e:{if(vi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Rn(o))return Ah(n,o,i)}return i}function Jp(n,i,o,c,h,_,w,I,z){return n=Nu(o,c,!0,n,h,_,w,I,z),n.context=Qp(null),o=n.current,c=Mn(),h=gr(o),_=Oi(c,h),_.callback=i??null,fr(o,_,h),n.current.lanes=h,bn(n,h,c),Dn(n,c),n}function ll(n,i,o,c){var h=i.current,_=Mn(),w=gr(h);return o=Qp(o),i.context===null?i.context=o:i.pendingContext=o,i=Oi(_,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=fr(h,i,w),n!==null&&(fi(n,h,w,_),za(n,h,w)),w}function cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function em(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Iu(n,i){em(n,i),(n=n.alternate)&&em(n,i)}function Z_(){return null}var tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uu(n){this._internalRoot=n}ul.prototype.render=Uu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ll(n,i,null,null)},ul.prototype.unmount=Uu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Hr(function(){ll(null,n,null,null)}),i[Ni]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=Of();n={blockedOn:null,target:n,priority:i};for(var o=0;o<rr.length&&i!==0&&i<rr[o].priority;o++);rr.splice(o,0,n),o===0&&Hf(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function nm(){}function Q_(n,i,o,c,h){if(h){if(typeof c=="function"){var _=c;c=function(){var re=cl(w);_.call(re)}}var w=Jp(i,c,n,0,null,!1,!1,"",nm);return n._reactRootContainer=w,n[Ni]=w.current,wo(n.nodeType===8?n.parentNode:n),Hr(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var I=c;c=function(){var re=cl(z);I.call(re)}}var z=Nu(n,0,!1,null,null,!1,!1,"",nm);return n._reactRootContainer=z,n[Ni]=z.current,wo(n.nodeType===8?n.parentNode:n),Hr(function(){ll(i,z,o,c)}),z}function fl(n,i,o,c,h){var _=o._reactRootContainer;if(_){var w=_;if(typeof h=="function"){var I=h;h=function(){var z=cl(w);I.call(z)}}ll(i,w,n,h)}else w=Q_(o,i,n,h,c);return cl(w)}Ff=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Kt(i.pendingLanes);o!==0&&(oc(i,o|1),Dn(i,Ee()),(Tt&6)===0&&(Ps=Ee()+500,ur()))}break;case 13:Hr(function(){var c=ki(n,1);if(c!==null){var h=Mn();fi(c,n,1,h)}}),Iu(n,1)}},ac=function(n){if(n.tag===13){var i=ki(n,134217728);if(i!==null){var o=Mn();fi(i,n,134217728,o)}Iu(n,134217728)}},kf=function(n){if(n.tag===13){var i=gr(n),o=ki(n,i);if(o!==null){var c=Mn();fi(o,n,i,c)}Iu(n,i)}},Of=function(){return Lt},zf=function(n,i){var o=Lt;try{return Lt=n,i()}finally{Lt=o}},Pe=function(n,i,o){switch(i){case"input":if(et(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var h=Ra(c);if(!h)throw Error(t(90));Ke(c),et(c,h)}}}break;case"textarea":fe(n,o);break;case"select":i=o.value,i!=null&&N(n,!!o.multiple,i,!1)}},kt=bu,$t=Hr;var J_={usingClientEntryPoint:!1,Events:[bo,_s,Ra,Ne,at,bu]},Ho={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ev={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=C(n),n===null?null:n.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||Z_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Rt=hl.inject(ev),yt=hl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J_,Nn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return K_(n,i,null,o)},Nn.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var o=!1,c="",h=tm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Nu(n,1,!1,null,null,o,!1,c,h),n[Ni]=i.current,wo(n.nodeType===8?n.parentNode:n),new Uu(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=C(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Hr(n)},Nn.hydrate=function(n,i,o){if(!dl(i))throw Error(t(200));return fl(null,n,i,!0,o)},Nn.hydrateRoot=function(n,i,o){if(!Fu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,h=!1,_="",w=tm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(_=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=Jp(i,null,n,1,o??null,h,!1,_,w),n[Ni]=i.current,wo(n),c)for(n=0;n<c.length;n++)o=c[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new ul(i)},Nn.render=function(n,i,o){if(!dl(i))throw Error(t(200));return fl(null,n,i,!1,o)},Nn.unmountComponentAtNode=function(n){if(!dl(n))throw Error(t(40));return n._reactRootContainer?(Hr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},Nn.unstable_batchedUpdates=bu,Nn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!dl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,o,!1,c)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var um;function lv(){if(um)return zu.exports;um=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zu.exports=av(),zu.exports}var dm;function cv(){if(dm)return pl;dm=1;var s=lv();return pl.createRoot=s.createRoot,pl.hydrateRoot=s.hydrateRoot,pl}var uv=cv();const dv=Dg(uv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=s=>{const e=hv(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=lt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...d},f)=>lt.createElement("svg",{ref:f,...pv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Ng("lucide",a),...!l&&!mv(d)&&{"aria-hidden":"true"},...d},[...u.map(([p,m])=>lt.createElement(p,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=(s,e)=>{const t=lt.forwardRef(({className:r,...a},l)=>lt.createElement(gv,{ref:l,iconNode:e,className:Ng(`lucide-${fv(fm(s))}`,`lucide-${s}`,r),...a}));return t.displayName=fm(s),t};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],vv=Ut("arrow-right",_v);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Ig=Ut("box",xv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Sv=Ut("chevron-down",yv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ev=Ut("chevron-up",Mv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]],Tv=Ut("cog",wv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],bv=Ut("columns-2",Av);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Rv=Ut("download",Cv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],Lv=Ut("eraser",Pv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Nv=Ut("eye-off",Dv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Uv=Ut("eye",Iv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]],Ug=Ut("frame",Fv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Ov=Ut("grid-3x3",kv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Bv=Ut("layers",zv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Vv=Ut("monitor",Hv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]],Wv=Ut("paint-bucket",Gv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]],Xv=Ut("panel-bottom",jv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],qv=Ut("panel-left",Yv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Kv=Ut("panel-right",$v);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]],Qv=Ut("panel-top",Zv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],ex=Ut("pencil",Jv);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],nx=Ut("plus",tx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],rx=Ut("redo-2",ix);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],ox=Ut("rotate-cw",sx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],lx=Ut("square",ax);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Fg=Ut("trash-2",cx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],dx=Ut("undo-2",ux);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ad=Ut("x",fx),hm=s=>{let e;const t=new Set,r=(p,m)=>{const g=typeof p=="function"?p(e):p;if(!Object.is(g,e)){const v=e;e=m??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(x=>x(e,v))}},a=()=>e,d={setState:r,getState:a,getInitialState:()=>f,subscribe:p=>(t.add(p),()=>t.delete(p))},f=e=s(r,a,d);return d},hx=(s=>s?hm(s):hm),px=s=>s;function mx(s,e=px){const t=Ko.useSyncExternalStore(s.subscribe,Ko.useCallback(()=>e(s.getState()),[s,e]),Ko.useCallback(()=>e(s.getInitialState()),[s,e]));return Ko.useDebugValue(t),t}const pm=s=>{const e=hx(s),t=r=>mx(e,r);return Object.assign(t,e),t},gx=(s=>s?pm(s):pm),_x=["#000000","#ffffff","#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff","#ff8800","#8800ff","#00ff88","#ff0088","#884400","#004488","#448800","#888888","#444444","#cccccc","#662200","#002266"],kg=32,Og=32,zg=5;function ea(s,e,t){return Array.from({length:e},()=>Array.from({length:s},()=>Array(t).fill("transparent")))}let Vu=0;function Bg(s,e,t,r){return Vu++,{id:`layer-${Vu}`,name:`Layer ${Vu}`,visible:!0,voxels:ea(s,e,t)}}function Gu(s){return s.map(e=>({...e,voxels:e.voxels.map(t=>t.map(r=>[...r]))}))}function ta(s,e,t,r){var l,u;const a=ea(e,t,r);for(const d of s)if(d.visible)for(let f=0;f<t;f++)for(let p=0;p<e;p++)for(let m=0;m<r;m++){const g=(u=(l=d.voxels[f])==null?void 0:l[p])==null?void 0:u[m];g&&g!=="transparent"&&(a[f][p][m]=g)}return a}function vf(s,e,t,r){return s==="top"||s==="bottom"?{w:e,h:r}:s==="left"||s==="right"?{w:r,h:t}:{w:e,h:t}}function Hg(s,e,t,r,a){switch(e){case"front":return Array.from({length:r},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=0;g<a;g++){const v=(m=(p=s[u])==null?void 0:p[f])==null?void 0:m[g];if(v&&v!=="transparent")return v}return"transparent"}));case"back":return Array.from({length:r},(l,u)=>Array.from({length:t},(d,f)=>{var m,g;const p=t-1-f;for(let v=a-1;v>=0;v--){const x=(g=(m=s[u])==null?void 0:m[p])==null?void 0:g[v];if(x&&x!=="transparent")return x}return"transparent"}));case"left":return Array.from({length:r},(l,u)=>Array.from({length:a},(d,f)=>{var p,m;for(let g=0;g<t;g++){const v=(m=(p=s[u])==null?void 0:p[g])==null?void 0:m[f];if(v&&v!=="transparent")return v}return"transparent"}));case"right":return Array.from({length:r},(l,u)=>Array.from({length:a},(d,f)=>{var m,g;const p=a-1-f;for(let v=t-1;v>=0;v--){const x=(g=(m=s[u])==null?void 0:m[v])==null?void 0:g[p];if(x&&x!=="transparent")return x}return"transparent"}));case"top":return Array.from({length:a},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=0;g<r;g++){const v=(m=(p=s[g])==null?void 0:p[f])==null?void 0:m[u];if(v&&v!=="transparent")return v}return"transparent"}));case"bottom":return Array.from({length:a},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=r-1;g>=0;g--){const v=(m=(p=s[g])==null?void 0:p[f])==null?void 0:m[u];if(v&&v!=="transparent")return v}return"transparent"}));default:return[]}}function vx(s,e,t,r,a){switch(e){case"front":return Array.from({length:r},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=0;g<a;g++)if((m=(p=s[u])==null?void 0:p[f])!=null&&m[g]&&s[u][f][g]!=="transparent")return g;return null}));case"back":return Array.from({length:r},(l,u)=>Array.from({length:t},(d,f)=>{var m,g;const p=t-1-f;for(let v=a-1;v>=0;v--)if((g=(m=s[u])==null?void 0:m[p])!=null&&g[v]&&s[u][p][v]!=="transparent")return a-1-v;return null}));case"left":return Array.from({length:r},(l,u)=>Array.from({length:a},(d,f)=>{var p,m;for(let g=0;g<t;g++)if((m=(p=s[u])==null?void 0:p[g])!=null&&m[f]&&s[u][g][f]!=="transparent")return g;return null}));case"right":return Array.from({length:r},(l,u)=>Array.from({length:a},(d,f)=>{var m,g;const p=a-1-f;for(let v=t-1;v>=0;v--)if((g=(m=s[u])==null?void 0:m[v])!=null&&g[p]&&s[u][v][p]!=="transparent")return t-1-v;return null}));case"top":return Array.from({length:a},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=0;g<r;g++)if((m=(p=s[g])==null?void 0:p[f])!=null&&m[u]&&s[g][f][u]!=="transparent")return g;return null}));case"bottom":return Array.from({length:a},(l,u)=>Array.from({length:t},(d,f)=>{var p,m;for(let g=r-1;g>=0;g--)if((m=(p=s[g])==null?void 0:p[f])!=null&&m[u]&&s[g][f][u]!=="transparent")return r-1-g;return null}));default:return[]}}function mm(s,e,t,r,a,l,u,d="both"){const f=[];switch(t){case"front":{const p=Math.floor(u/2),m=d==="back"?p:p-r,g=d==="front"?p:p+r;for(let v=Math.max(0,m);v<=Math.min(u-1,g);v++)f.push({x:s,y:e,z:v});break}case"back":{const p=Math.floor(u/2),m=d==="front"?p:p-r,g=d==="back"?p:p+r;for(let v=Math.max(0,m);v<=Math.min(u-1,g);v++)f.push({x:a-1-s,y:e,z:v});break}case"left":for(let p=0;p<r;p++)f.push({x:p,y:e,z:s});break;case"right":for(let p=0;p<r;p++)f.push({x:a-1-p,y:e,z:u-1-s});break;case"top":for(let p=0;p<r;p++)f.push({x:s,y:p,z:e});break;case"bottom":for(let p=0;p<r;p++)f.push({x:s,y:l-1-p,z:e});break}return f.filter(({x:p,y:m,z:g})=>p>=0&&p<a&&m>=0&&m<l&&g>=0&&g<u)}function gm(s,e,t,r,a,l,u,d){const f=[],p=(m,g,v)=>{var M,E;const x=(E=(M=s[g])==null?void 0:M[m])==null?void 0:E[v];return x&&x!=="transparent"&&f.push({x:m,y:g,z:v}),f.length>=a};if(r==="back"){const m=l-1-e;for(let g=d-1;g>=0&&!p(m,t,g);g--);}else if(r==="left")for(let m=0;m<l&&!p(m,t,e);m++);else if(r==="right"){const m=d-1-e;for(let g=l-1;g>=0&&!p(g,t,m);g--);}else if(r==="top")for(let m=0;m<u&&!p(e,m,t);m++);else if(r==="bottom")for(let m=u-1;m>=0&&!p(e,m,t);m--);return f}const _m=Bg(kg,Og,zg),Et=gx((s,e)=>({canvasWidth:kg,canvasHeight:Og,depthDimension:zg,layers:[_m],activeLayerId:_m.id,pixelSize:14,showGrid:!0,currentColor:"#c8860a",activeTool:"pencil",palette:_x,undoStack:[],redoStack:[],pushUndo(){const{layers:t,undoStack:r}=e();s({undoStack:[...r.slice(-49),Gu(t)],redoStack:[]})},paintAt(t,r,a){const{layers:l,activeLayerId:u,canvasWidth:d,canvasHeight:f,depthDimension:p,activeView:m,paintDepth:g,paintDirection:v}=e(),x=l.findIndex(S=>S.id===u);if(x<0)return;const M=l[x].voxels,E=S=>{if(!S.length)return!1;const y=new Set(S.map(b=>b.y)),L=[...M];for(const b of y)L[b]=M[b].map(q=>[...q]);for(const{x:b,y:q,z:F}of S)L[q][b][F]=a;const P=[...l];return P[x]={...l[x],voxels:L},s({layers:P}),!0};if(m!=="front"&&m!=="back"){const S=gm(M,t,r,m,1,d,f,p);E(S);return}E(mm(t,r,m,g,d,f,p,v))},floodFillVoxel(t,r,a){var R,B;const{layers:l,activeLayerId:u,canvasWidth:d,canvasHeight:f,depthDimension:p,activeView:m,paintDepth:g,paintDirection:v}=e(),x=l.findIndex(te=>te.id===u);if(x<0)return;const M=l[x].voxels,E=Hg(M,m,d,f,p),{w:S,h:y}=vf(m,d,f,p),L=(R=E[r])==null?void 0:R[t];if(!L||L===a)return;e().pushUndo();const P=new Set,b=[[t,r]],q=[];for(;b.length;){const[te,Y]=b.pop();if(te<0||Y<0||te>=S||Y>=y)continue;const ue=`${te},${Y}`;P.has(ue)||(P.add(ue),((B=E[Y])==null?void 0:B[te])===L&&(q.push([te,Y]),b.push([te+1,Y],[te-1,Y],[te,Y+1],[te,Y-1])))}const F=q.flatMap(([te,Y])=>m==="front"||m==="back"?mm(te,Y,m,g,d,f,p,v):gm(M,te,Y,m,1,d,f,p));if(!F.length)return;const k=new Set(F.map(te=>te.y)),W=M.map((te,Y)=>k.has(Y)?te.map(ue=>[...ue]):te);for(const{x:te,y:Y,z:ue}of F)W[Y][te][ue]=a;const D=[...l];D[x]={...l[x],voxels:W},s({layers:D})},setCurrentColor:t=>s({currentColor:t}),setActiveTool:t=>s({activeTool:t}),setPixelSize:t=>s({pixelSize:Math.max(4,Math.min(32,t))}),toggleGrid:()=>s(t=>({showGrid:!t.showGrid})),clearCanvas(){const{layers:t,activeLayerId:r,canvasWidth:a,canvasHeight:l,depthDimension:u}=e();e().pushUndo();const d=t.map(f=>f.id===r?{...f,voxels:ea(a,l,u)}:f);s({layers:d})},resizeCanvas(t,r){t=Math.max(4,Math.min(256,Math.round(t))),r=Math.max(4,Math.min(256,Math.round(r)));const{layers:a,canvasWidth:l,canvasHeight:u,depthDimension:d}=e();e().pushUndo();const f=t>l?Math.floor((t-l)/2):0,p=r>u?Math.floor((r-u)/2):0,m=a.map(g=>{const v=ea(t,r,d);for(let x=0;x<u;x++)for(let M=0;M<l;M++)for(let E=0;E<d;E++){const S=x+p,y=M+f;S>=0&&S<r&&y>=0&&y<t&&(v[S][y][E]=g.voxels[x][M][E])}return{...g,voxels:v}});s({canvasWidth:t,canvasHeight:r,layers:m})},setDepthDimension(t){t=Math.max(4,Math.min(256,Math.round(t)));const{layers:r,canvasWidth:a,canvasHeight:l,depthDimension:u,paintDepth:d}=e();e().pushUndo();const f=t>u?Math.floor((t-u)/2):0,p=r.map(m=>{const g=ea(a,l,t);for(let v=0;v<l;v++)for(let x=0;x<a;x++)for(let M=0;M<u;M++){const E=M+f;E>=0&&E<t&&(g[v][x][E]=m.voxels[v][x][M])}return{...m,voxels:g}});s({depthDimension:t,layers:p,paintDepth:Math.min(d,t)})},undo(){const{undoStack:t,layers:r,redoStack:a}=e();if(!t.length)return;const l=t[t.length-1];s({layers:l,undoStack:t.slice(0,-1),redoStack:[...a.slice(-49),Gu(r)]})},redo(){const{redoStack:t,layers:r,undoStack:a}=e();if(!t.length)return;const l=t[t.length-1];s({layers:l,redoStack:t.slice(0,-1),undoStack:[...a.slice(-49),Gu(r)]})},addToPalette(t){const{palette:r}=e();r.includes(t)||s({palette:[...r,t]})},paintVoxelDirect(t,r,a,l){const{layers:u,activeLayerId:d,canvasWidth:f,canvasHeight:p,depthDimension:m}=e();if(t<0||t>=f||r<0||r>=p||a<0||a>=m)return;const g=u.findIndex(E=>E.id===d);if(g<0)return;const v=u[g],x=v.voxels.map((E,S)=>S!==r?E:E.map((y,L)=>{if(L!==t)return y;const P=[...y];return P[a]=l,P})),M=[...u];M[g]={...v,voxels:x},s({layers:M})},addLayer(){const{layers:t,canvasWidth:r,canvasHeight:a,depthDimension:l}=e(),u=Bg(r,a,l);s({layers:[...t,u],activeLayerId:u.id})},deleteLayer(t){var d;const{layers:r,activeLayerId:a}=e();if(r.length<=1)return;const l=r.filter(f=>f.id!==t),u=t===a?((d=l[l.length-1])==null?void 0:d.id)??l[0].id:a;s({layers:l,activeLayerId:u})},setActiveLayer:t=>s({activeLayerId:t}),toggleLayerVisible(t){const{layers:r}=e();s({layers:r.map(a=>a.id===t?{...a,visible:!a.visible}:a)})},renameLayer(t,r){const{layers:a}=e();s({layers:a.map(l=>l.id===t?{...l,name:r.trim()||l.name}:l)})},moveLayerUp(t){const{layers:r}=e(),a=r.findIndex(u=>u.id===t);if(a>=r.length-1)return;const l=[...r];[l[a],l[a+1]]=[l[a+1],l[a]],s({layers:l})},moveLayerDown(t){const{layers:r}=e(),a=r.findIndex(u=>u.id===t);if(a<=0)return;const l=[...r];[l[a],l[a-1]]=[l[a-1],l[a]],s({layers:l})},activeView:"front",paintDepth:1,paintDirection:"both",setActiveView:t=>s({activeView:t}),setPaintDepth:t=>s(r=>({paintDepth:Math.max(1,Math.min(r.depthDimension,Math.round(t)))})),setPaintDirection:t=>s({paintDirection:t}),viewMode:"split",activeTheme:"synthwave",setViewMode:t=>s({viewMode:t}),setActiveTheme:t=>s({activeTheme:t})}));function xx(){return A.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none",style:{zIndex:0},children:[A.jsx("div",{className:"absolute inset-0",style:{background:`
          radial-gradient(ellipse at 15% 50%, rgba(120,80,20,0.15) 0%, transparent 45%),
          radial-gradient(ellipse at 85% 50%, rgba(100,60,10,0.12) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 100%, rgba(80,50,10,0.2) 0%, transparent 40%)
        `}}),A.jsxs("svg",{className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[A.jsxs("defs",{children:[A.jsxs("radialGradient",{id:"gearFill",cx:"50%",cy:"50%",children:[A.jsx("stop",{offset:"0%",stopColor:"#4a3010",stopOpacity:"0.6"}),A.jsx("stop",{offset:"100%",stopColor:"#1a0e00",stopOpacity:"0.3"})]}),A.jsx("pattern",{id:"hexTile",width:"44",height:"50",patternUnits:"userSpaceOnUse",children:A.jsx("path",{d:"M22 2 L42 13 L42 37 L22 48 L2 37 L2 13 Z",fill:"none",stroke:"rgba(122,92,46,0.06)",strokeWidth:"1"})}),A.jsxs("pattern",{id:"rivetPattern",width:"80",height:"80",patternUnits:"userSpaceOnUse",children:[A.jsx("circle",{cx:"4",cy:"4",r:"2.5",fill:"none",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.5"}),A.jsx("circle",{cx:"4",cy:"4",r:"1",fill:"rgba(200,134,10,0.2)"}),A.jsx("circle",{cx:"76",cy:"76",r:"2.5",fill:"none",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.5"}),A.jsx("circle",{cx:"76",cy:"76",r:"1",fill:"rgba(200,134,10,0.2)"})]})]}),A.jsx("rect",{width:"100%",height:"100%",fill:"url(#hexTile)"}),A.jsx("rect",{width:"100%",height:"100%",fill:"url(#rivetPattern)"}),A.jsx("g",{opacity:"0.18",children:A.jsx(xf,{cx:70,cy:220,outerR:160,innerR:124,teeth:28,holeR:52})}),A.jsx("g",{opacity:"0.15",children:A.jsx(yx,{cx:-90,cy:180,outerR:180,innerR:140,teeth:32,holeR:60})}),A.jsx("g",{opacity:"0.12",children:A.jsx(Sx,{cx:0,cy:-60,outerR:120,innerR:92,teeth:20,holeR:38})}),A.jsx("g",{opacity:"0.35",children:A.jsx(vm,{y:52,segments:[0,100,200,320,480,640,760],width:"100%"})}),A.jsx("g",{opacity:"0.25",children:A.jsx(vm,{y:-28,fromBottom:!0,segments:[80,200,380,540,700],width:"100%"})}),A.jsx("rect",{x:"5",y:"0",width:"4",height:"100%",fill:"rgba(122,92,46,0.15)",rx:"2"}),A.jsx("rect",{x:"3",y:"0",width:"1",height:"100%",fill:"rgba(200,134,10,0.1)"}),A.jsx("rect",{x:"calc(100% - 9px)",y:"0",width:"4",height:"100%",fill:"rgba(122,92,46,0.12)",rx:"2"})]}),A.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 opacity-30",style:{left:"-40px"},children:A.jsx(Ds,{size:180,teeth:20,className:"gear-spin-slow",stroke:"#c8860a",strokeWidth:2})}),A.jsx("div",{className:"absolute right-0 top-1/3 opacity-22",style:{right:"-50px"},children:A.jsx(Ds,{size:200,teeth:24,className:"gear-spin-reverse",stroke:"#7a5c2e",strokeWidth:1.5})}),A.jsxs("div",{className:"absolute bottom-8 right-4 flex items-end gap-0 opacity-40",children:[A.jsx(Ds,{size:60,teeth:12,className:"gear-spin",stroke:"#c8860a",strokeWidth:1.5}),A.jsx(Ds,{size:40,teeth:8,className:"gear-spin-reverse",stroke:"#8a5c08",strokeWidth:1.5,style:{marginLeft:"-8px",marginBottom:"10px"}}),A.jsx(Ds,{size:28,teeth:6,className:"gear-spin-slow",stroke:"#c8860a",strokeWidth:1,style:{marginLeft:"-6px",marginBottom:"6px"}})]}),A.jsx("div",{className:"absolute top-6 left-4 opacity-35",children:A.jsx(Ds,{size:48,teeth:10,className:"gear-spin-reverse",stroke:"#c8860a",strokeWidth:1.5})}),A.jsx(Mx,{}),A.jsx("div",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none",style:{fontFamily:"'Special Elite', serif",color:"rgba(200,134,10,0.12)",fontSize:"11px",letterSpacing:"0.5em",textTransform:"uppercase"},children:"Picell 3D Engine"})]})}function Ds({size:s,teeth:e,className:t,stroke:r,strokeWidth:a=1.5,style:l}){const u=s/2-6,d=u*.78,f=Vg(s/2,s/2,u,d,e,.4);return A.jsxs("svg",{width:s,height:s,className:t,style:l,children:[A.jsx("path",{d:f,fill:"none",stroke:r,strokeWidth:a}),A.jsx("circle",{cx:s/2,cy:s/2,r:u*.38,fill:"none",stroke:r,strokeWidth:a*.8}),[0,60,120,180,240,300].slice(0,Math.min(6,Math.floor(e/4))).map((p,m)=>{const g=p*Math.PI/180,v=s/2+Math.cos(g)*u*.38,x=s/2+Math.sin(g)*u*.38,M=s/2+Math.cos(g)*u*.68,E=s/2+Math.sin(g)*u*.68;return A.jsx("line",{x1:v,y1:x,x2:M,y2:E,stroke:r,strokeWidth:a*.6},m)}),A.jsx("circle",{cx:s/2,cy:s/2,r:u*.1,fill:r,opacity:"0.6"})]})}function xf({cx:s,cy:e,outerR:t,innerR:r,teeth:a,holeR:l}){const u=Vg(s,e,t,r,a,.4);return A.jsxs(A.Fragment,{children:[A.jsx("path",{d:u,fill:"url(#gearFill)",stroke:"rgba(122,92,46,0.4)",strokeWidth:"1.5"}),A.jsx("circle",{cx:s,cy:e,r:l,fill:"rgba(10,6,2,0.6)",stroke:"rgba(122,92,46,0.3)",strokeWidth:"1"}),[0,45,90,135,180,225,270,315].map((d,f)=>{const p=d*Math.PI/180,m=s+Math.cos(p)*l,g=e+Math.sin(p)*l,v=s+Math.cos(p)*(r*.7),x=e+Math.sin(p)*(r*.7);return A.jsx("line",{x1:m,y1:g,x2:v,y2:x,stroke:"rgba(122,92,46,0.2)",strokeWidth:"1.5"},f)}),A.jsx("circle",{cx:s,cy:e,r:l*.3,fill:"rgba(200,134,10,0.15)",stroke:"rgba(122,92,46,0.3)",strokeWidth:"0.8"})]})}function yx({cx:s,cy:e,outerR:t,innerR:r,teeth:a,holeR:l}){return A.jsx("g",{transform:`translate(100%,${e})`,children:A.jsx(xf,{cx:s,cy:0,outerR:t,innerR:r,teeth:a,holeR:l})})}function Sx({cx:s,cy:e,outerR:t,innerR:r,teeth:a,holeR:l}){return A.jsx("g",{transform:"translate(50%,100%)",children:A.jsx(xf,{cx:s,cy:e,outerR:t,innerR:r,teeth:a,holeR:l})})}function vm({y:s,fromBottom:e,segments:t}){const r=e?`calc(100% - ${-s}px)`:`${s}px`;return A.jsxs("g",{children:[A.jsx("line",{x1:"0",y1:r,x2:"100%",y2:r,stroke:"url(#pipeGrad2)",strokeWidth:"6"}),A.jsx("line",{x1:"0",y1:r,x2:"100%",y2:r,stroke:"rgba(200,134,10,0.15)",strokeWidth:"1"})]})}function Mx(){return A.jsxs("svg",{className:"absolute top-0 left-0 w-full opacity-25 pointer-events-none",height:"56",xmlns:"http://www.w3.org/2000/svg",children:[A.jsx("defs",{children:A.jsxs("linearGradient",{id:"pipeGrad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[A.jsx("stop",{offset:"0%",stopColor:"#d09030"}),A.jsx("stop",{offset:"40%",stopColor:"#8a5c10"}),A.jsx("stop",{offset:"100%",stopColor:"#3d2010"})]})}),A.jsx("rect",{x:"0",y:"32",width:"100%",height:"6",rx:"3",fill:"url(#pipeGrad2)"}),A.jsx("rect",{x:"0",y:"33",width:"100%",height:"1",fill:"rgba(255,200,60,0.15)"}),[60,160,280,420,560,700].map(s=>A.jsxs("g",{children:[A.jsx("rect",{x:s-5,y:28,width:10,height:14,rx:"1.5",fill:"#8a5c10"}),A.jsx("rect",{x:s-5,y:28,width:10,height:2,rx:"1",fill:"#c8860a",opacity:"0.5"}),A.jsx("circle",{cx:s,cy:35,r:2.5,fill:"#4a3010"})]},s)),[100,340,580].map((s,e)=>A.jsxs("g",{children:[A.jsx("circle",{cx:s,cy:24,r:4,fill:"rgba(220,200,150,0.3)",className:"steam-puff",style:{animationDelay:`${e*1.1}s`}}),A.jsx("circle",{cx:s+3,cy:18,r:2.5,fill:"rgba(220,200,150,0.2)",className:"steam-puff-delay",style:{animationDelay:`${e*1.1+.3}s`}})]},s))]})}function Vg(s,e,t,r,a,l){const u=[],d=a*2;for(let f=0;f<d;f++){const p=f/d*Math.PI*2-Math.PI/2,m=Math.PI/d*l,g=f%2===0?t:r;u.push(`${s+Math.cos(p-m)*g},${e+Math.sin(p-m)*g}`),u.push(`${s+Math.cos(p+m)*g},${e+Math.sin(p+m)*g}`)}return`M ${u[0]} L ${u.slice(1).join(" L ")} Z`}const wi=720,wn=496,Zr=1440,Jr=800,Yi=130,Ex=[[72,44,1.5,0],[180,88,1,1],[252,28,1.8,2],[360,72,.8,0],[432,115,1.2,1],[504,38,1,2],[612,60,1.4,0],[684,95,.8,1],[756,22,1.6,2],[828,82,1,0],[900,48,1.2,1],[972,118,.9,2],[1044,35,1.5,0],[1116,75,1.1,1],[1188,28,1.7,2],[1332,55,1,0],[108,162,1,1],[288,188,.8,2],[468,172,1.3,0],[648,195,1,1],[828,168,.9,2],[1008,190,1.4,0],[1188,178,1.1,1],[1368,195,.8,2],[36,215,.7,0],[216,238,1.2,1],[396,222,.8,2],[576,245,1,0],[756,230,1.3,1],[936,248,.7,2],[1116,225,1.1,0],[1296,240,.9,1],[144,285,.8,2],[432,298,1,0],[720,278,.6,1],[1008,292,.9,2],[1296,285,1.1,0],[288,322,.7,1],[864,318,.8,2],[1440,310,.9,0]],wx=Array.from({length:18},(s,e)=>{const t=((e+1)/19)**.6;return wn+(Jr-wn)*t}),xm=Array.from({length:23},(s,e)=>({x1:wi,y1:wn,x2:e/22*Zr,y2:Jr})),Tx=Array.from({length:22},(s,e)=>{const t=((e+1)/23)**.65,r=wn-Yi+t*Yi,a=1.2+e*.28;return{y:r,thick:a}}),Ax=["sw-star-a","sw-star-b","sw-star-c"];function bx(){return A.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none",style:{zIndex:0},children:[A.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(180deg,
          #080015 0%,
          #120330 18%,
          #1e0852 34%,
          #350a6e 48%,
          #5c0a80 59%,
          #9a1278 68%,
          #d02268 77%,
          #ee3268 86%,
          #ff4878 95%,
          #ff6090 100%)`}}),A.jsxs("svg",{className:"absolute inset-0 w-full h-full",viewBox:`0 0 ${Zr} ${Jr}`,preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[A.jsxs("defs",{children:[A.jsxs("radialGradient",{id:"swSunGrad",cx:"50%",cy:"50%",r:"50%",children:[A.jsx("stop",{offset:"0%",stopColor:"#fff8e8"}),A.jsx("stop",{offset:"22%",stopColor:"#ffe060"}),A.jsx("stop",{offset:"50%",stopColor:"#ff8030"}),A.jsx("stop",{offset:"80%",stopColor:"#ff2d78"}),A.jsx("stop",{offset:"100%",stopColor:"#aa0a60"})]}),A.jsxs("radialGradient",{id:"swSunGlow",cx:"50%",cy:"80%",r:"50%",children:[A.jsx("stop",{offset:"0%",stopColor:"#ff2d78",stopOpacity:"0.5"}),A.jsx("stop",{offset:"50%",stopColor:"#cc44ff",stopOpacity:"0.15"}),A.jsx("stop",{offset:"100%",stopColor:"#cc44ff",stopOpacity:"0"})]}),A.jsxs("linearGradient",{id:"swGridH",x1:"0",y1:wn,x2:"0",y2:Jr,gradientUnits:"userSpaceOnUse",children:[A.jsx("stop",{offset:"0%",stopColor:"#ff2d78",stopOpacity:"0.9"}),A.jsx("stop",{offset:"100%",stopColor:"#ff2d78",stopOpacity:"0.2"})]}),A.jsxs("linearGradient",{id:"swGridV",x1:"0",y1:wn,x2:"0",y2:Jr,gradientUnits:"userSpaceOnUse",children:[A.jsx("stop",{offset:"0%",stopColor:"#44ddff",stopOpacity:"0.7"}),A.jsx("stop",{offset:"100%",stopColor:"#aa44ff",stopOpacity:"0.15"})]}),A.jsx("clipPath",{id:"swSunClip",children:A.jsx("rect",{x:wi-Yi-4,y:0,width:Yi*2+8,height:wn+2})}),A.jsxs("filter",{id:"swGlow",children:[A.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),A.jsxs("feMerge",{children:[A.jsx("feMergeNode",{in:"blur"}),A.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),A.jsxs("filter",{id:"swGlowSoft",children:[A.jsx("feGaussianBlur",{stdDeviation:"8",result:"blur"}),A.jsxs("feMerge",{children:[A.jsx("feMergeNode",{in:"blur"}),A.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),Ex.map(([s,e,t,r],a)=>A.jsx("circle",{cx:s,cy:e,r:t,fill:a%7===0?"#ccddff":a%5===0?"#ffccee":"#ffffff",opacity:.35+a%4*.12,className:Ax[r]},a)),A.jsx("ellipse",{cx:wi,cy:wn,rx:Yi*2.6,ry:Yi*1.2,fill:"url(#swSunGlow)",className:"sw-glow-pulse"}),A.jsx("circle",{cx:wi,cy:wn,r:Yi,fill:"url(#swSunGrad)",clipPath:"url(#swSunClip)"}),Tx.map(({y:s,thick:e},t)=>A.jsx("line",{x1:wi-Yi-2,y1:s,x2:wi+Yi+2,y2:s,stroke:"#080015",strokeWidth:e,clipPath:"url(#swSunClip)",opacity:.92},t)),A.jsx("line",{x1:0,y1:wn,x2:Zr,y2:wn,stroke:"#ff2d78",strokeWidth:3,opacity:.9,filter:"url(#swGlow)"}),A.jsx("line",{x1:0,y1:wn,x2:Zr,y2:wn,stroke:"#ffaacc",strokeWidth:.6,opacity:.7}),xm.map((s,e)=>{const t=e===0||e===xm.length-1;return A.jsx("line",{x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2,stroke:"url(#swGridV)",strokeWidth:t?1.2:.7,opacity:.65},e)}),wx.map((s,e)=>{const t=(s-wn)/(Jr-wn),r=Math.max(0,wi-wi*t*1.15),a=Math.min(Zr,wi+(Zr-wi)*t*1.15);return A.jsx("line",{x1:r,y1:s,x2:a,y2:s,stroke:"url(#swGridH)",strokeWidth:.6+t*2,opacity:.45+t*.4},e)}),A.jsx("rect",{x:0,y:Jr-4,width:Zr,height:4,fill:"url(#swGridH)",opacity:.4})]}),A.jsx("div",{className:"absolute inset-0 sw-scanlines"}),A.jsx("div",{className:"absolute left-0 right-0 h-px sw-scan-sweep",style:{background:"rgba(255,45,120,0.25)",boxShadow:"0 0 6px rgba(255,45,120,0.4)"}}),A.jsx("div",{className:"absolute top-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg, transparent, #cc44ff 25%, #ff2d78 50%, #cc44ff 75%, transparent)",boxShadow:"0 0 12px rgba(204,68,255,0.7), 0 0 24px rgba(255,45,120,0.3)"}}),A.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px",style:{background:"linear-gradient(90deg, transparent, #44ddff 25%, #aa44ff 50%, #44ddff 75%, transparent)",boxShadow:"0 0 12px rgba(68,221,255,0.7)"}}),A.jsx("div",{className:"absolute top-0 bottom-0 left-0 w-px",style:{background:"linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)",opacity:.3}}),A.jsx("div",{className:"absolute top-0 bottom-0 right-0 w-px",style:{background:"linear-gradient(180deg, #cc44ff, transparent 40%, transparent 60%, #44ddff)",opacity:.3}}),A.jsx("div",{className:"absolute top-0 left-0",style:{width:32,height:32,borderTop:"1px solid rgba(204,68,255,0.6)",borderLeft:"1px solid rgba(204,68,255,0.6)"}}),A.jsx("div",{className:"absolute top-0 right-0",style:{width:32,height:32,borderTop:"1px solid rgba(204,68,255,0.6)",borderRight:"1px solid rgba(204,68,255,0.6)"}}),A.jsx("div",{className:"absolute bottom-0 left-0",style:{width:32,height:32,borderBottom:"1px solid rgba(68,221,255,0.6)",borderLeft:"1px solid rgba(68,221,255,0.6)"}}),A.jsx("div",{className:"absolute bottom-0 right-0",style:{width:32,height:32,borderBottom:"1px solid rgba(68,221,255,0.6)",borderRight:"1px solid rgba(68,221,255,0.6)"}}),A.jsx("div",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 tracking-widest sw-flicker",style:{fontFamily:"'Audiowide', sans-serif",color:"#ff2d78",letterSpacing:"0.55em",textTransform:"uppercase",fontSize:"10px",opacity:.22},children:"PICELL · 3D"})]})}const $l={synthwave:{id:"synthwave",name:"SynthWave",colors:{background:"#0d0221",surface:"#150a2d",surfaceAlt:"#1e0f3c",border:"#5a1a9a",accent:"#ff2d78",accentHover:"#ff5590",text:"#f4d0ff",textMuted:"#6a40a0",canvasBg:"#0a0118"},fontFamily:"'Audiowide', sans-serif",sceneBackground:"#080015",PainterBackground:bx},steampunk:{id:"steampunk",name:"Steampunk",colors:{background:"#1a1208",surface:"#2d2010",surfaceAlt:"#3d2e18",border:"#7a5c2e",accent:"#c8860a",accentHover:"#e8a820",text:"#e8d5a0",textMuted:"#8a7050",canvasBg:"#241a0c"},fontFamily:"'Special Elite', serif",sceneBackground:"#0e0a04",PainterBackground:xx},cyberpunk:{id:"cyberpunk",name:"Cyberpunk",colors:{background:"#080010",surface:"#110022",surfaceAlt:"#1a0030",border:"#5500aa",accent:"#cc00ff",accentHover:"#ee44ff",text:"#e0c0ff",textMuted:"#7040a0",canvasBg:"#0c0018"},fontFamily:"'Orbitron', sans-serif",sceneBackground:"#050008",PainterBackground:Cx},blueprint:{id:"blueprint",name:"Blueprint",colors:{background:"#0a1628",surface:"#0d1f3c",surfaceAlt:"#122848",border:"#2a4a7f",accent:"#4d9fff",accentHover:"#80bbff",text:"#c8dff8",textMuted:"#4a6a9a",canvasBg:"#08121e"},fontFamily:"'Share Tech Mono', monospace",sceneBackground:"#061020",PainterBackground:Rx},watercolor:{id:"watercolor",name:"Watercolor",colors:{background:"#f5f0e8",surface:"#ede5d8",surfaceAlt:"#e8ddd0",border:"#c0a880",accent:"#b05030",accentHover:"#d06040",text:"#2a1a10",textMuted:"#8a6848",canvasBg:"#ede5d8"},fontFamily:"'Caveat', cursive",sceneBackground:"#f0ebe0",PainterBackground:Px}};function bd(s){return $l[s]??$l.synthwave}function Gg(s){const e=document.documentElement;Object.entries(s.colors).forEach(([t,r])=>{e.style.setProperty(`--color-${t}`,r)}),e.style.setProperty("--font-family",s.fontFamily)}function Cx(){return A.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:[A.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 30% 50%, rgba(80,0,160,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(0,200,255,0.1) 0%, transparent 50%)"}}),A.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[A.jsx("defs",{children:A.jsx("pattern",{id:"cybGrid",width:"30",height:"30",patternUnits:"userSpaceOnUse",children:A.jsx("path",{d:"M 30 0 L 0 0 0 30",fill:"none",stroke:"rgba(85,0,170,0.2)",strokeWidth:"0.5"})})}),A.jsx("rect",{width:"100%",height:"100%",fill:"url(#cybGrid)"}),[.15,.35,.6,.8].map((s,e)=>A.jsx("line",{x1:"0",y1:`${s*100}%`,x2:"100%",y2:`${s*100}%`,stroke:e%2===0?"rgba(204,0,255,0.12)":"rgba(0,200,255,0.08)",strokeWidth:"1"},e))]}),A.jsx("div",{className:"absolute top-0 left-0 right-0 h-px opacity-60",style:{background:"linear-gradient(90deg, transparent, #cc00ff, #00ccff, transparent)"}}),A.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px opacity-40",style:{background:"linear-gradient(90deg, transparent, #cc00ff, transparent)"}}),A.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-15 tracking-widest",style:{fontFamily:"'Orbitron', sans-serif",color:"#cc00ff",letterSpacing:"0.5em"},children:"PICELL3D"})]})}function Rx(){return A.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:A.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[A.jsxs("defs",{children:[A.jsx("pattern",{id:"bpSmall",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:A.jsx("path",{d:"M 20 0 L 0 0 0 20",fill:"none",stroke:"rgba(45,100,180,0.3)",strokeWidth:"0.5"})}),A.jsx("pattern",{id:"bpLarge",width:"100",height:"100",patternUnits:"userSpaceOnUse",children:A.jsx("path",{d:"M 100 0 L 0 0 0 100",fill:"none",stroke:"rgba(45,100,180,0.6)",strokeWidth:"1"})})]}),A.jsx("rect",{width:"100%",height:"100%",fill:"url(#bpSmall)"}),A.jsx("rect",{width:"100%",height:"100%",fill:"url(#bpLarge)"}),[[15,15],[85,15],[15,85],[85,85],[50,50]].map(([s,e],t)=>A.jsxs("g",{transform:`translate(${s}%,${e}%)`,children:[A.jsx("line",{x1:"-8",y1:"0",x2:"8",y2:"0",stroke:"rgba(77,159,255,0.4)",strokeWidth:"1"}),A.jsx("line",{x1:"0",y1:"-8",x2:"0",y2:"8",stroke:"rgba(77,159,255,0.4)",strokeWidth:"1"}),A.jsx("circle",{r:"3",fill:"none",stroke:"rgba(77,159,255,0.3)",strokeWidth:"0.5"})]},t)),A.jsx("rect",{x:"10",y:"10",width:"180",height:"40",fill:"none",stroke:"rgba(77,159,255,0.2)",strokeWidth:"1"}),A.jsx("text",{x:"20",y:"30",fill:"rgba(77,159,255,0.25)",fontSize:"8",fontFamily:"'Share Tech Mono', monospace",children:"PICELL3D — PIXEL ART TO 3D CONVERTER"}),A.jsx("text",{x:"20",y:"42",fill:"rgba(77,159,255,0.2)",fontSize:"7",fontFamily:"'Share Tech Mono', monospace",children:"SCALE: 1:1  UNITS: PX  REV: MVP"})]})})}function Px(){return A.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{zIndex:0},children:[A.jsx("div",{className:"absolute inset-0",style:{background:`
          radial-gradient(ellipse at 20% 30%, rgba(180,120,60,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(80,120,180,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(200,160,100,0.05) 0%, transparent 70%)
        `}}),A.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[A.jsx("ellipse",{cx:"15%",cy:"20%",rx:"120",ry:"80",fill:"rgba(180,120,80,0.06)"}),A.jsx("ellipse",{cx:"85%",cy:"75%",rx:"150",ry:"100",fill:"rgba(80,130,200,0.05)"}),A.jsx("ellipse",{cx:"50%",cy:"10%",rx:"200",ry:"40",fill:"rgba(160,100,60,0.04)"}),[...Array(8)].map((s,e)=>A.jsx("line",{x1:"0",y1:`${(e+1)*12}%`,x2:"100%",y2:`${(e+1)*12}%`,stroke:"rgba(160,120,80,0.08)",strokeWidth:"0.5",strokeDasharray:"4 8"},`h${e}`))]}),[{top:"-6px",left:"30%",rotate:"-8deg"},{top:"-6px",right:"25%",rotate:"5deg"},{bottom:"-6px",left:"40%",rotate:"3deg"}].map((s,e)=>A.jsx("div",{className:"absolute w-12 h-5 opacity-20",style:{...s,transform:`rotate(${s.rotate})`,background:"rgba(200,180,120,0.6)",borderRadius:"1px"}},e)),A.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-20",style:{fontFamily:"'Caveat', cursive",color:"#b05030",fontSize:"16px"},children:"Picell3D"})]})}const Lx=Object.freeze(Object.defineProperty({__proto__:null,THEMES:$l,applyTheme:Gg,getTheme:bd},Symbol.toStringTag,{value:"Module"}));function Dx(){const{setActiveTool:s,undo:e,redo:t,toggleGrid:r}=Et();lt.useEffect(()=>{function a(l){if(!(l.target.tagName==="INPUT"||l.target.tagName==="TEXTAREA")){if(l.ctrlKey||l.metaKey){l.key==="z"&&(l.preventDefault(),e()),l.key==="y"&&(l.preventDefault(),t()),l.key==="Z"&&(l.preventDefault(),t());return}switch(l.key.toLowerCase()){case"p":s("pencil");break;case"e":s("eraser");break;case"f":s("fill");break;case"g":r();break}}}return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[s,e,t,r])}const Nx=[{label:"8×8",w:8,h:8},{label:"16×16",w:16,h:16},{label:"32×32",w:32,h:32},{label:"48×48",w:48,h:48},{label:"64×64",w:64,h:64},{label:"128×64",w:128,h:64},{label:"128×128",w:128,h:128}];function Ix({onClose:s}){const{canvasWidth:e,canvasHeight:t,resizeCanvas:r}=Et(),[a,l]=lt.useState(e),[u,d]=lt.useState(t);function f(){const x=Math.max(4,Math.min(256,parseInt(a)||e)),M=Math.max(4,Math.min(256,parseInt(u)||t));r(x,M),s()}function p(x){l(x.w),d(x.h)}const m=a>e,g=u>t,v=a===e&&u===t;return A.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,0.6)"},onClick:x=>{x.target===x.currentTarget&&s()},children:A.jsxs("div",{className:"panel-riveted relative flex flex-col gap-4 p-5 rounded-lg border border-border shadow-brass w-80",style:{background:"var(--color-surface)"},children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsxs("div",{className:"flex items-center gap-2 text-sm font-theme text-text tracking-wide",children:[A.jsx(Ug,{size:15,className:"text-accent"}),"Canvas Size"]}),A.jsx("button",{className:"text-text-muted hover:text-text transition-colors",onClick:s,children:A.jsx(Ad,{size:16})})]}),A.jsxs("div",{className:"flex items-center gap-2 text-xs text-text-muted",children:[A.jsxs("span",{className:"font-mono",children:[e,"×",t]}),A.jsx(vv,{size:12}),A.jsxs("span",{className:`font-mono font-medium ${v?"text-text-muted":"text-accent"}`,children:[Math.max(4,Math.min(256,parseInt(a)||e)),"×",Math.max(4,Math.min(256,parseInt(u)||t))]})]}),A.jsxs("div",{children:[A.jsx("div",{className:"text-xs text-text-muted uppercase tracking-wide mb-2",children:"Presets"}),A.jsx("div",{className:"grid grid-cols-4 gap-1",children:Nx.map(x=>{const M=x.w===e&&x.h===t,E=x.w===a&&x.h===u;return A.jsx("button",{className:`text-xs py-1 px-1 rounded border transition-colors ${E?"border-accent bg-accent/20 text-accent":M?"border-border/80 text-text":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,onClick:()=>p(x),children:x.label},x.label)})})]}),A.jsxs("div",{children:[A.jsx("div",{className:"text-xs text-text-muted uppercase tracking-wide mb-2",children:"Custom"}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsxs("div",{className:"flex-1",children:[A.jsx("label",{className:"text-xs text-text-muted block mb-1",children:"Width"}),A.jsx("input",{type:"number",min:4,max:256,value:a,onChange:x=>l(parseInt(x.target.value)||4),className:`w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent`})]}),A.jsx(Ad,{size:12,className:"text-text-muted mt-4 flex-shrink-0"}),A.jsxs("div",{className:"flex-1",children:[A.jsx("label",{className:"text-xs text-text-muted block mb-1",children:"Height"}),A.jsx("input",{type:"number",min:4,max:256,value:u,onChange:x=>d(parseInt(x.target.value)||4),className:`w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent`})]})]})]}),A.jsx("div",{className:"text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5",style:{background:"color-mix(in srgb, var(--color-background) 60%, transparent)"},children:m||g?"Growing: existing content will be centered.":v?"Select a new size to resize the canvas.":"Shrinking: content is cropped from the right and bottom."}),A.jsxs("div",{className:"flex gap-2 justify-end pt-1",children:[A.jsx("button",{className:"text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors",onClick:s,children:"Cancel"}),A.jsx("button",{className:"btn-brass text-xs",disabled:v,onClick:f,style:{opacity:v?.5:1},children:"Apply"})]})]})})}const Ux=[{id:"pencil",Icon:ex,label:"Pencil (P)",key:"P"},{id:"eraser",Icon:Lv,label:"Eraser (E)",key:"E"},{id:"fill",Icon:Wv,label:"Fill (F)",key:"F"}],Fx=[{id:"canvas-only",Icon:lx,label:"2D only"},{id:"split",Icon:bv,label:"Split view"},{id:"preview-only",Icon:Ig,label:"3D only"}];function kx({onExport:s}){const{activeTool:e,setActiveTool:t,pixelSize:r,setPixelSize:a,toggleGrid:l,showGrid:u,clearCanvas:d,undo:f,redo:p,viewMode:m,setViewMode:g}=Et(),[v,x]=lt.useState(!1);return A.jsxs(A.Fragment,{children:[v&&A.jsx(Ix,{onClose:()=>x(!1)}),A.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 border-b border-border",style:{background:"var(--color-surfaceAlt)"},children:[A.jsxs("div",{className:"flex items-center gap-2 mr-3 pr-3 border-r border-border",children:[A.jsx(Tv,{size:16,className:"text-accent"}),A.jsx("span",{className:"font-theme text-text text-sm tracking-wider",children:"Picell3D"})]}),A.jsx("div",{className:"flex items-center gap-0.5 mr-2 pr-2 border-r border-border",children:Ux.map(M=>A.jsx(Ox,{Icon:M.Icon,label:M.label,active:e===M.id,onClick:()=>t(M.id)},M.id))}),A.jsxs("div",{className:"flex items-center gap-1 mr-2 pr-2 border-r border-border",children:[A.jsx("button",{className:"text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors",onClick:()=>a(r-2),title:"Zoom out",children:"−"}),A.jsxs("span",{className:"text-xs text-text-muted font-mono w-8 text-center",children:[r,"px"]}),A.jsx("button",{className:"text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors",onClick:()=>a(r+2),title:"Zoom in",children:"+"})]}),A.jsxs("button",{className:`flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors mr-2 ${u?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,onClick:l,title:"Toggle grid (G)",children:[A.jsx(Ov,{size:12})," Grid"]}),A.jsx("div",{className:"flex items-center gap-0.5 mr-2 pr-2 border-r border-border",children:Fx.map(({id:M,Icon:E,label:S})=>A.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center border transition-colors ${m===M?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text"}`,onClick:()=>g(M),title:S,children:A.jsx(E,{size:14})},M))}),A.jsxs("button",{className:"flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors mr-2",onClick:()=>x(!0),title:"Canvas size",children:[A.jsx(Ug,{size:12}),A.jsx("span",{children:"Size"})]}),A.jsxs("div",{className:"flex items-center gap-0.5 mr-auto",children:[A.jsx(Wu,{Icon:dx,label:"Undo (Ctrl+Z)",onClick:f}),A.jsx(Wu,{Icon:rx,label:"Redo (Ctrl+Y)",onClick:p}),A.jsx(Wu,{Icon:Fg,label:"Clear canvas",onClick:d,danger:!0})]}),A.jsxs("button",{className:"btn-brass ml-auto flex items-center gap-1.5",onClick:s,title:"Export as PNG",children:[A.jsx(Rv,{size:14}),A.jsx("span",{children:"Export PNG"})]})]})]})}function Ox({Icon:s,label:e,active:t,onClick:r}){return A.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center transition-all border ${t?"border-accent bg-accent/20 text-accent shadow-glow-accent":"border-transparent text-text-muted hover:border-border hover:text-text hover:bg-surface-alt"}`,title:e,onClick:r,children:A.jsx(s,{size:16})})}function Wu({Icon:s,label:e,onClick:t,danger:r}){return A.jsx("button",{className:`w-8 h-8 rounded flex items-center justify-center border border-transparent transition-colors ${r?"text-text-muted hover:border-red-900 hover:bg-red-950 hover:text-red-400":"text-text-muted hover:text-text hover:bg-surface-alt hover:border-border"}`,title:e,onClick:t,children:A.jsx(s,{size:16})})}function zx(){const{activeTheme:s,setActiveTheme:e}=Et();return A.jsxs("div",{className:"flex items-center gap-1.5 px-2",children:[A.jsx("span",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Theme"}),A.jsx("div",{className:"flex gap-1",children:Object.values($l).map(t=>A.jsx("button",{className:`text-xs px-2 py-0.5 rounded border transition-all ${s===t.id?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,onClick:()=>e(t.id),title:t.name,children:t.name},t.id))})]})}function Bx(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,activeTool:r,activeView:a,paintDepth:l}=Et(),u=["P: Pencil","E: Eraser","F: Fill","G: Grid","Ctrl+Z: Undo"];return A.jsxs("div",{className:"flex items-center justify-between px-3 py-0.5 border-t border-border text-xs text-text-muted",style:{background:"var(--color-surface)"},children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsxs("span",{className:"font-mono",children:[s,"×",e,"×",t]}),A.jsx("span",{className:"capitalize",children:r}),A.jsx("span",{className:"text-accent capitalize",children:a}),A.jsxs("span",{children:["depth: ",l]})]}),A.jsxs("div",{className:"flex items-center gap-4",children:[A.jsx(zx,{}),A.jsx("div",{className:"hidden lg:flex gap-3 opacity-50",children:u.map(d=>A.jsx("span",{children:d},d))})]})]})}function Hx(s,e,t,r){const a=[];let l=Math.abs(t-s),u=s<t?1:-1,d=-Math.abs(r-e),f=e<r?1:-1,p=l+d;for(;a.push({col:s,row:e}),!(s===t&&e===r);){const m=2*p;m>=d&&(p+=d,s+=u),m<=l&&(p+=l,e+=f)}return a}function Vx(s){const e=lt.useRef(!1),t=lt.useRef(null),r=lt.useCallback(f=>{const{pixelSize:p}=Et.getState(),m=s.current.getBoundingClientRect(),g=Math.floor((f.clientX-m.left)/p),v=Math.floor((f.clientY-m.top)/p);return{col:g,row:v}},[]),a=lt.useCallback(({col:f,row:p})=>{const m=Et.getState(),{activeTool:g,currentColor:v,activeView:x,canvasWidth:M,canvasHeight:E,depthDimension:S}=m,{w:y,h:L}=vf(x,M,E,S);if(!(f<0||p<0||f>=y||p>=L))switch(g){case"pencil":m.paintAt(f,p,v);break;case"eraser":m.paintAt(f,p,"transparent");break}},[]),l=lt.useCallback(f=>{var g;if(f.button!==0)return;try{(g=s.current)==null||g.setPointerCapture(f.pointerId)}catch{}const p=Et.getState(),m=r(f);if(p.activeTool==="fill"){p.floodFillVoxel(m.col,m.row,p.currentColor);return}e.current=!0,t.current=m,(p.activeTool==="pencil"||p.activeTool==="eraser")&&p.pushUndo(),a(m)},[r,a]),u=lt.useCallback(f=>{if(!e.current)return;const p=r(f),m=t.current;if(!m||p.col===m.col&&p.row===m.row)return;const g=Hx(m.col,m.row,p.col,p.row);for(const v of g)a(v);t.current=p},[r,a]),d=lt.useCallback(()=>{e.current=!1,t.current=null},[]);return{onPointerDown:l,onPointerMove:u,onPointerUp:d}}function ju(s){return getComputedStyle(document.documentElement).getPropertyValue(s).trim()}const Gx={front:"← left   right →",back:"← right  left →",left:"← front  back →",right:"← back   front →",top:"← left   right →",bottom:"← left   right →"};function Wx(){const s=lt.useRef(null),e=lt.useRef(null),{layers:t,pixelSize:r,canvasWidth:a,canvasHeight:l,depthDimension:u,showGrid:d,activeTool:f,activeView:p}=Et(),m=u,{view2d:g,depthMap:v}=lt.useMemo(()=>{const L=ta(t,a,l,m);return{view2d:Hg(L,p,a,l,m),depthMap:vx(L,p,a,l,m)}},[t,p,a,l,m]),{w:x,h:M}=vf(p,a,l,m),{onPointerDown:E,onPointerMove:S,onPointerUp:y}=Vx(e);return lt.useEffect(()=>{var R,B,te,Y,ue,he,ce;const L=s.current;if(!L||!g.length)return;const P=L.getContext("2d"),b=x*r,q=M*r;L.width=b,L.height=q;const F=ju("--color-surface")||"#1a130a",k=ju("--color-canvasBg")||"#241a0c",W=ju("--color-border")||"#7a5c2e";for(let ie=0;ie<M;ie++)for(let O=0;O<x;O++){const ae=O*r,ne=ie*r,U=((R=g[ie])==null?void 0:R[O])??"transparent";P.fillStyle=U==="transparent"?(O+ie)%2===0?F:k:U,P.fillRect(ae,ne,r,r)}if(v.length)for(let ae=0;ae<M;ae++)for(let ne=0;ne<x;ne++){const U=(B=v[ae])==null?void 0:B[ne];if(U==null)continue;const ee=ne*r,Ce=ae*r,Z=(te=v[ae])==null?void 0:te[ne-1],de=(Y=v[ae])==null?void 0:Y[ne+1],ye=(ue=v[ae-1])==null?void 0:ue[ne],_e=(he=v[ae+1])==null?void 0:he[ne],Ae=(be,ut,Ke,_t,V)=>{const vt=P.createLinearGradient(be,ut,Ke,_t);vt.addColorStop(0,`rgba(0,0,0,${V.toFixed(3)})`),vt.addColorStop(1,"rgba(0,0,0,0)"),P.fillStyle=vt,P.fillRect(ee,Ce,r,r)},Le=r*.6;if(Z!=null&&Z<U){const be=Math.min((U-Z)/m,1)*.65;Ae(ee,Ce,ee+Le,Ce,be)}if(ye!=null&&ye<U){const be=Math.min((U-ye)/m,1)*.65;Ae(ee,Ce,ee,Ce+Le,be)}if(de!=null&&de<U){const be=Math.min((U-de)/m,1)*.65;Ae(ee+r,Ce,ee+r-Le,Ce,be)}if(_e!=null&&_e<U){const be=Math.min((U-_e)/m,1)*.65;Ae(ee,Ce+r,ee,Ce+r-Le,be)}}if(d&&r>=5){P.strokeStyle=W+"44",P.lineWidth=.5;for(let ie=0;ie<=x;ie++)P.beginPath(),P.moveTo(ie*r,0),P.lineTo(ie*r,q),P.stroke();for(let ie=0;ie<=M;ie++)P.beginPath(),P.moveTo(0,ie*r),P.lineTo(b,ie*r),P.stroke()}if(r>=10&&v.length){const ie=Math.max(7,Math.floor(r*.38));P.font=`bold ${ie}px monospace`,P.textAlign="center",P.textBaseline="middle";for(let O=0;O<M;O++)for(let ae=0;ae<x;ae++){const ne=(ce=v[O])==null?void 0:ce[ae];if(ne==null)continue;const U=ae*r+r/2,ee=O*r+r/2;P.fillStyle="rgba(0,0,0,0.55)",P.fillText(ne,U+.5,ee+.5),P.fillStyle="rgba(255,255,255,0.85)",P.fillText(ne,U,ee)}}const D=Gx[p];D&&b>60&&(P.font=`${Math.max(8,r*.55)}px monospace`,P.fillStyle=W+"aa",P.textAlign="left",P.textBaseline="top",P.fillText(D,4,4))},[g,v,x,M,r,d,p]),A.jsx("div",{className:"flex items-center justify-center w-full h-full overflow-auto p-4",children:A.jsx("div",{ref:e,className:"relative flex-shrink-0",style:{boxShadow:"0 0 0 2px var(--color-border), 0 0 0 4px var(--color-surface), 0 8px 40px rgba(0,0,0,0.9)",cursor:jx(f)},onPointerDown:E,onPointerMove:S,onPointerUp:y,onPointerLeave:y,children:A.jsx("canvas",{ref:s,style:{width:x*r,height:M*r,imageRendering:"pixelated",display:"block"}})})})}function jx(s){switch(s){case"pencil":return"crosshair";case"eraser":return"cell";case"fill":return"copy";default:return"crosshair"}}const Xx="modulepreload",Yx=function(s){return"/"+s},ym={},qx=function(e,t,r){let a=Promise.resolve();if(t&&t.length>0){let u=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=u(t.map(p=>{if(p=Yx(p),p in ym)return;ym[p]=!0;const m=p.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":Xx,m||(v.as="script"),v.crossOrigin="",v.href=p,f&&v.setAttribute("nonce",f),document.head.appendChild(v),m)return new Promise((x,M)=>{v.addEventListener("load",x),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return a.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yf="170",Ks={ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$x=0,Sm=1,Kx=2,Wg=1,Zx=2,Xi=3,Rr=0,Fn=1,Ai=2,Cr=0,Zs=1,Mm=2,Em=3,wm=4,Qx=5,es=100,Jx=101,ey=102,ty=103,ny=104,iy=200,ry=201,sy=202,oy=203,Cd=204,Rd=205,ay=206,ly=207,cy=208,uy=209,dy=210,fy=211,hy=212,py=213,my=214,Pd=0,Ld=1,Dd=2,eo=3,Nd=4,Id=5,Ud=6,Fd=7,Sf=0,gy=1,_y=2,Ki=0,vy=1,xy=2,yy=3,Sy=4,My=5,Ey=6,wy=7,jg=300,to=301,no=302,kd=303,Od=304,ec=306,zd=1e3,ns=1001,Bd=1002,_i=1003,Ty=1004,ml=1005,bi=1006,Xu=1007,is=1008,Qi=1009,Xg=1010,Yg=1011,ia=1012,Mf=1013,rs=1014,qi=1015,sa=1016,Ef=1017,wf=1018,io=1020,qg=35902,$g=1021,Kg=1022,gi=1023,Zg=1024,Qg=1025,Qs=1026,ro=1027,Jg=1028,Tf=1029,e0=1030,Af=1031,bf=1033,Gl=33776,Wl=33777,jl=33778,Xl=33779,Hd=35840,Vd=35841,Gd=35842,Wd=35843,jd=36196,Xd=37492,Yd=37496,qd=37808,$d=37809,Kd=37810,Zd=37811,Qd=37812,Jd=37813,ef=37814,tf=37815,nf=37816,rf=37817,sf=37818,of=37819,af=37820,lf=37821,Yl=36492,cf=36494,uf=36495,t0=36283,df=36284,ff=36285,hf=36286,Ay=3200,by=3201,n0=0,Cy=1,br="",ti="srgb",oo="srgb-linear",tc="linear",Dt="srgb",Ns=7680,Tm=519,Ry=512,Py=513,Ly=514,i0=515,Dy=516,Ny=517,Iy=518,Uy=519,Am=35044,bm="300 es",$i=2e3,Kl=2001;class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,pf=180/Math.PI;function oa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function Tn(s,e,t){return Math.max(e,Math.min(t,s))}function Fy(s,e){return(s%e+e)%e}function Yu(s,e,t){return(1-t)*s+t*e}function Go(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ky={DEG2RAD:na};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,r,a,l,u,d,f,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,f,p)}set(e,t,r,a,l,u,d,f,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=r,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[3],f=r[6],p=r[1],m=r[4],g=r[7],v=r[2],x=r[5],M=r[8],E=a[0],S=a[3],y=a[6],L=a[1],P=a[4],b=a[7],q=a[2],F=a[5],k=a[8];return l[0]=u*E+d*L+f*q,l[3]=u*S+d*P+f*F,l[6]=u*y+d*b+f*k,l[1]=p*E+m*L+g*q,l[4]=p*S+m*P+g*F,l[7]=p*y+m*b+g*k,l[2]=v*E+x*L+M*q,l[5]=v*S+x*P+M*F,l[8]=v*y+x*b+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8];return t*u*m-t*d*p-r*l*m+r*d*f+a*l*p-a*u*f}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],g=m*u-d*p,v=d*f-m*l,x=p*l-u*f,M=t*g+r*v+a*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(a*p-m*r)*E,e[2]=(d*r-a*u)*E,e[3]=v*E,e[4]=(m*t-a*f)*E,e[5]=(a*l-d*t)*E,e[6]=x*E,e[7]=(r*f-p*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*d)+u+e,-a*p,a*f,-a*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(qu.makeScale(e,t)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qu=new ft;function r0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Oy(){const s=Zl("canvas");return s.style.display="block",s}const Cm={};function Zo(s){s in Cm||(Cm[s]=!0,console.warn(s))}function zy(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function By(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hy(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const At={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===br?tc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Rm=[.64,.33,.3,.6,.15,.06],Pm=[.2126,.7152,.0722],Lm=[.3127,.329],Dm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);At.define({[oo]:{primaries:Rm,whitePoint:Lm,transfer:tc,toXYZ:Dm,fromXYZ:Nm,luminanceCoefficients:Pm,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:Rm,whitePoint:Lm,transfer:Dt,toXYZ:Dm,fromXYZ:Nm,luminanceCoefficients:Pm,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}});let Is;class Vy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Is===void 0&&(Is=Zl("canvas")),Is.width=e.width,Is.height=e.height;const r=Is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Zi(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Zi(t[r]/255)*255):t[r]=Zi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gy=0;class s0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push($u(a[u].image)):l.push($u(a[u]))}else l=$u(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function $u(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wy=0;class kn extends as{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,r=ns,a=ns,l=bi,u=is,d=gi,f=Qi,p=kn.DEFAULT_ANISOTROPY,m=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=oa(),this.name="",this.source=new s0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zd:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zd:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=jg;kn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,r=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const f=e.elements,p=f[0],m=f[4],g=f[8],v=f[1],x=f[5],M=f[9],E=f[2],S=f[6],y=f[10];if(Math.abs(m-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,b=(x+1)/2,q=(y+1)/2,F=(m+v)/4,k=(g+E)/4,W=(M+S)/4;return P>b&&P>q?P<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(P),a=F/r,l=k/r):b>q?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=F/a,l=W/a):q<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(q),r=k/l,a=W/l),this.set(r,a,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(v-m)*(v-m));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-E)/L,this.z=(v-m)/L,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jy extends as{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new kn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new s0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends jy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class o0 extends kn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xy extends kn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,d){let f=r[a+0],p=r[a+1],m=r[a+2],g=r[a+3];const v=l[u+0],x=l[u+1],M=l[u+2],E=l[u+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(d===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(g!==E||f!==v||p!==x||m!==M){let S=1-d;const y=f*v+p*x+m*M+g*E,L=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const q=Math.sqrt(P),F=Math.atan2(q,y*L);S=Math.sin(S*F)/q,d=Math.sin(d*F)/q}const b=d*L;if(f=f*S+v*b,p=p*S+x*b,m=m*S+M*b,g=g*S+E*b,S===1-d){const q=1/Math.sqrt(f*f+p*p+m*m+g*g);f*=q,p*=q,m*=q,g*=q}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,l,u){const d=r[a],f=r[a+1],p=r[a+2],m=r[a+3],g=l[u],v=l[u+1],x=l[u+2],M=l[u+3];return e[t]=d*M+m*g+f*x-p*v,e[t+1]=f*M+m*v+p*g-d*x,e[t+2]=p*M+m*x+d*v-f*g,e[t+3]=m*M-d*g-f*v-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(r/2),m=d(a/2),g=d(l/2),v=f(r/2),x=f(a/2),M=f(l/2);switch(u){case"XYZ":this._x=v*m*g+p*x*M,this._y=p*x*g-v*m*M,this._z=p*m*M+v*x*g,this._w=p*m*g-v*x*M;break;case"YXZ":this._x=v*m*g+p*x*M,this._y=p*x*g-v*m*M,this._z=p*m*M-v*x*g,this._w=p*m*g+v*x*M;break;case"ZXY":this._x=v*m*g-p*x*M,this._y=p*x*g+v*m*M,this._z=p*m*M+v*x*g,this._w=p*m*g-v*x*M;break;case"ZYX":this._x=v*m*g-p*x*M,this._y=p*x*g+v*m*M,this._z=p*m*M-v*x*g,this._w=p*m*g+v*x*M;break;case"YZX":this._x=v*m*g+p*x*M,this._y=p*x*g+v*m*M,this._z=p*m*M-v*x*g,this._w=p*m*g-v*x*M;break;case"XZY":this._x=v*m*g-p*x*M,this._y=p*x*g-v*m*M,this._z=p*m*M+v*x*g,this._w=p*m*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],m=t[6],g=t[10],v=r+d+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-f)*x,this._y=(l-p)*x,this._z=(u-a)*x}else if(r>d&&r>g){const x=2*Math.sqrt(1+r-d-g);this._w=(m-f)/x,this._x=.25*x,this._y=(a+u)/x,this._z=(l+p)/x}else if(d>g){const x=2*Math.sqrt(1+d-r-g);this._w=(l-p)/x,this._x=(a+u)/x,this._y=.25*x,this._z=(f+m)/x}else{const x=2*Math.sqrt(1+g-r-d);this._w=(u-a)/x,this._x=(l+p)/x,this._y=(f+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,m=t._w;return this._x=r*m+u*d+a*p-l*f,this._y=a*m+u*f+l*d-r*p,this._z=l*m+u*p+r*f-a*d,this._w=u*m-r*d-a*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*a+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,d),g=Math.sin((1-t)*m)/p,v=Math.sin(t*m)/p;return this._w=u*g+this._w*v,this._x=r*g+this._x*v,this._y=a*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Im.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Im.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*a-d*r),m=2*(d*t-l*a),g=2*(l*r-u*t);return this.x=t+f*p+u*g-d*m,this.y=r+f*m+d*p-l*g,this.z=a+f*g+l*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=a*f-l*d,this.y=l*u-r*f,this.z=r*d-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ku.copy(this).projectOnVector(e),this.sub(Ku)}reflect(e){return this.sub(Ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ku=new K,Im=new os;class aa{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,hi):hi.fromBufferAttribute(l,u),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gl.copy(r.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),_l.subVectors(this.max,Wo),Us.subVectors(e.a,Wo),Fs.subVectors(e.b,Wo),ks.subVectors(e.c,Wo),yr.subVectors(Fs,Us),Sr.subVectors(ks,Fs),jr.subVectors(Us,ks);let t=[0,-yr.z,yr.y,0,-Sr.z,Sr.y,0,-jr.z,jr.y,yr.z,0,-yr.x,Sr.z,0,-Sr.x,jr.z,0,-jr.x,-yr.y,yr.x,0,-Sr.y,Sr.x,0,-jr.y,jr.x,0];return!Zu(t,Us,Fs,ks,_l)||(t=[1,0,0,0,1,0,0,0,1],!Zu(t,Us,Fs,ks,_l))?!1:(vl.crossVectors(yr,Sr),t=[vl.x,vl.y,vl.z],Zu(t,Us,Fs,ks,_l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new K,new K,new K,new K,new K,new K,new K,new K],hi=new K,gl=new aa,Us=new K,Fs=new K,ks=new K,yr=new K,Sr=new K,jr=new K,Wo=new K,_l=new K,vl=new K,Xr=new K;function Zu(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Xr.fromArray(s,l);const d=a.x*Math.abs(Xr.x)+a.y*Math.abs(Xr.y)+a.z*Math.abs(Xr.z),f=e.dot(Xr),p=t.dot(Xr),m=r.dot(Xr);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>d)return!1}return!0}const Yy=new aa,jo=new K,Qu=new K;class nc{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Yy.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const t=jo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(jo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Qu)),this.expandByPoint(jo.copy(e.center).sub(Qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new K,Ju=new K,xl=new K,Mr=new K,ed=new K,yl=new K,td=new K;class ic{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Ju.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(Ju);const l=e.distanceTo(t)*.5,u=-this.direction.dot(xl),d=Mr.dot(this.direction),f=-Mr.dot(xl),p=Mr.lengthSq(),m=Math.abs(1-u*u);let g,v,x,M;if(m>0)if(g=u*f-d,v=u*d-f,M=l*m,g>=0)if(v>=-M)if(v<=M){const E=1/m;g*=E,v*=E,x=g*(g+u*v+2*d)+v*(u*g+v+2*f)+p}else v=l,g=Math.max(0,-(u*v+d)),x=-g*g+v*(v+2*f)+p;else v=-l,g=Math.max(0,-(u*v+d)),x=-g*g+v*(v+2*f)+p;else v<=-M?(g=Math.max(0,-(-u*l+d)),v=g>0?-l:Math.min(Math.max(-l,-f),l),x=-g*g+v*(v+2*f)+p):v<=M?(g=0,v=Math.min(Math.max(-l,-f),l),x=v*(v+2*f)+p):(g=Math.max(0,-(u*l+d)),v=g>0?l:Math.min(Math.max(-l,-f),l),x=-g*g+v*(v+2*f)+p);else v=u>0?-l:l,g=Math.max(0,-(u*v+d)),x=-g*g+v*(v+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ju).addScaledVector(xl,v),x}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const r=Vi.dot(this.direction),a=Vi.dot(Vi)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,d,f;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),g>=0?(d=(e.min.z-v.z)*g,f=(e.max.z-v.z)*g):(d=(e.max.z-v.z)*g,f=(e.min.z-v.z)*g),r>f||d>a)||((d>r||r!==r)&&(r=d),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,r,a,l){ed.subVectors(t,e),yl.subVectors(r,e),td.crossVectors(ed,yl);let u=this.direction.dot(td),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Mr.subVectors(this.origin,e);const f=d*this.direction.dot(yl.crossVectors(Mr,yl));if(f<0)return null;const p=d*this.direction.dot(ed.cross(Mr));if(p<0||f+p>u)return null;const m=-d*Mr.dot(td);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,a,l,u,d,f,p,m,g,v,x,M,E,S){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,f,p,m,g,v,x,M,E,S)}set(e,t,r,a,l,u,d,f,p,m,g,v,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=a,y[1]=l,y[5]=u,y[9]=d,y[13]=f,y[2]=p,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),u=1/Os.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(a),p=Math.sin(a),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*m,x=u*g,M=d*m,E=d*g;t[0]=f*m,t[4]=-f*g,t[8]=p,t[1]=x+M*p,t[5]=v-E*p,t[9]=-d*f,t[2]=E-v*p,t[6]=M+x*p,t[10]=u*f}else if(e.order==="YXZ"){const v=f*m,x=f*g,M=p*m,E=p*g;t[0]=v+E*d,t[4]=M*d-x,t[8]=u*p,t[1]=u*g,t[5]=u*m,t[9]=-d,t[2]=x*d-M,t[6]=E+v*d,t[10]=u*f}else if(e.order==="ZXY"){const v=f*m,x=f*g,M=p*m,E=p*g;t[0]=v-E*d,t[4]=-u*g,t[8]=M+x*d,t[1]=x+M*d,t[5]=u*m,t[9]=E-v*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const v=u*m,x=u*g,M=d*m,E=d*g;t[0]=f*m,t[4]=M*p-x,t[8]=v*p+E,t[1]=f*g,t[5]=E*p+v,t[9]=x*p-M,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*p,M=d*f,E=d*p;t[0]=f*m,t[4]=E-v*g,t[8]=M*g+x,t[1]=g,t[5]=u*m,t[9]=-d*m,t[2]=-p*m,t[6]=x*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=u*f,x=u*p,M=d*f,E=d*p;t[0]=f*m,t[4]=-g,t[8]=p*m,t[1]=v*g+E,t[5]=u*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=d*m,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qy,e,$y)}lookAt(e,t,r){const a=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Er.crossVectors(r,Vn),Er.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Er.crossVectors(r,Vn)),Er.normalize(),Sl.crossVectors(Vn,Er),a[0]=Er.x,a[4]=Sl.x,a[8]=Vn.x,a[1]=Er.y,a[5]=Sl.y,a[9]=Vn.y,a[2]=Er.z,a[6]=Sl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[4],f=r[8],p=r[12],m=r[1],g=r[5],v=r[9],x=r[13],M=r[2],E=r[6],S=r[10],y=r[14],L=r[3],P=r[7],b=r[11],q=r[15],F=a[0],k=a[4],W=a[8],D=a[12],R=a[1],B=a[5],te=a[9],Y=a[13],ue=a[2],he=a[6],ce=a[10],ie=a[14],O=a[3],ae=a[7],ne=a[11],U=a[15];return l[0]=u*F+d*R+f*ue+p*O,l[4]=u*k+d*B+f*he+p*ae,l[8]=u*W+d*te+f*ce+p*ne,l[12]=u*D+d*Y+f*ie+p*U,l[1]=m*F+g*R+v*ue+x*O,l[5]=m*k+g*B+v*he+x*ae,l[9]=m*W+g*te+v*ce+x*ne,l[13]=m*D+g*Y+v*ie+x*U,l[2]=M*F+E*R+S*ue+y*O,l[6]=M*k+E*B+S*he+y*ae,l[10]=M*W+E*te+S*ce+y*ne,l[14]=M*D+E*Y+S*ie+y*U,l[3]=L*F+P*R+b*ue+q*O,l[7]=L*k+P*B+b*he+q*ae,l[11]=L*W+P*te+b*ce+q*ne,l[15]=L*D+P*Y+b*ie+q*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],m=e[2],g=e[6],v=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15];return M*(+l*f*g-a*p*g-l*d*v+r*p*v+a*d*x-r*f*x)+E*(+t*f*x-t*p*v+l*u*v-a*u*x+a*p*m-l*f*m)+S*(+t*p*g-t*d*x-l*u*g+r*u*x+l*d*m-r*p*m)+y*(-a*d*m-t*f*g+t*d*v+a*u*g-r*u*v+r*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],g=e[9],v=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],L=g*S*p-E*v*p+E*f*x-d*S*x-g*f*y+d*v*y,P=M*v*p-m*S*p-M*f*x+u*S*x+m*f*y-u*v*y,b=m*E*p-M*g*p+M*d*x-u*E*x-m*d*y+u*g*y,q=M*g*f-m*E*f-M*d*v+u*E*v+m*d*S-u*g*S,F=t*L+r*P+a*b+l*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=L*k,e[1]=(E*v*l-g*S*l-E*a*x+r*S*x+g*a*y-r*v*y)*k,e[2]=(d*S*l-E*f*l+E*a*p-r*S*p-d*a*y+r*f*y)*k,e[3]=(g*f*l-d*v*l-g*a*p+r*v*p+d*a*x-r*f*x)*k,e[4]=P*k,e[5]=(m*S*l-M*v*l+M*a*x-t*S*x-m*a*y+t*v*y)*k,e[6]=(M*f*l-u*S*l-M*a*p+t*S*p+u*a*y-t*f*y)*k,e[7]=(u*v*l-m*f*l+m*a*p-t*v*p-u*a*x+t*f*x)*k,e[8]=b*k,e[9]=(M*g*l-m*E*l-M*r*x+t*E*x+m*r*y-t*g*y)*k,e[10]=(u*E*l-M*d*l+M*r*p-t*E*p-u*r*y+t*d*y)*k,e[11]=(m*d*l-u*g*l-m*r*p+t*g*p+u*r*x-t*d*x)*k,e[12]=q*k,e[13]=(m*E*a-M*g*a+M*r*v-t*E*v-m*r*S+t*g*S)*k,e[14]=(M*d*a-u*E*a-M*r*f+t*E*f+u*r*S-t*d*S)*k,e[15]=(u*g*a-m*d*a+m*r*f-t*g*f-u*r*v+t*d*v)*k,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,d=e.y,f=e.z,p=l*u,m=l*d;return this.set(p*u+r,p*d-a*f,p*f+a*d,0,p*d+a*f,m*d+r,m*f-a*u,0,p*f-a*d,m*f+a*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,m=u+u,g=d+d,v=l*p,x=l*m,M=l*g,E=u*m,S=u*g,y=d*g,L=f*p,P=f*m,b=f*g,q=r.x,F=r.y,k=r.z;return a[0]=(1-(E+y))*q,a[1]=(x+b)*q,a[2]=(M-P)*q,a[3]=0,a[4]=(x-b)*F,a[5]=(1-(v+y))*F,a[6]=(S+L)*F,a[7]=0,a[8]=(M+P)*k,a[9]=(S-L)*k,a[10]=(1-(v+E))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Os.set(a[0],a[1],a[2]).length();const u=Os.set(a[4],a[5],a[6]).length(),d=Os.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],pi.copy(this);const p=1/l,m=1/u,g=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=m,pi.elements[5]*=m,pi.elements[6]*=m,pi.elements[8]*=g,pi.elements[9]*=g,pi.elements[10]*=g,t.setFromRotationMatrix(pi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,a,l,u,d=$i){const f=this.elements,p=2*l/(t-e),m=2*l/(r-a),g=(t+e)/(t-e),v=(r+a)/(r-a);let x,M;if(d===$i)x=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(d===Kl)x=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,a,l,u,d=$i){const f=this.elements,p=1/(t-e),m=1/(r-a),g=1/(u-l),v=(t+e)*p,x=(r+a)*m;let M,E;if(d===$i)M=(u+l)*g,E=-2*g;else if(d===Kl)M=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=E,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Os=new K,pi=new Ht,qy=new K(0,0,0),$y=new K(1,1,1),Er=new K,Sl=new K,Vn=new K,Um=new Ht,Fm=new os;class Ri{constructor(e=0,t=0,r=0,a=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],f=a[1],p=a[5],m=a[9],g=a[2],v=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Tn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fm.setFromEuler(this),this.setFromQuaternion(Fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ky=0;const km=new K,zs=new os,Gi=new Ht,Ml=new K,Xo=new K,Zy=new K,Qy=new os,Om=new K(1,0,0),zm=new K(0,1,0),Bm=new K(0,0,1),Hm={type:"added"},Jy={type:"removed"},Bs={type:"childadded",child:null},nd={type:"childremoved",child:null};class cn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new K,t=new Ri,r=new os,a=new K(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ft}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Om,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Om,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ml.copy(e):Ml.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Xo,Ml,this.up):Gi.lookAt(Ml,Xo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),zs.setFromRotationMatrix(Gi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jy),nd.child=e,this.dispatchEvent(nd),nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,Zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,Qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const g=f[p];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];a.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=a,r;function u(d){const f=[];for(const p in d){const m=d[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}cn.DEFAULT_UP=new K(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new K,Wi=new K,id=new K,ji=new K,Hs=new K,Vs=new K,Vm=new K,rd=new K,sd=new K,od=new K,ad=new jt,ld=new jt,cd=new jt;class ni{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),mi.subVectors(e,t),a.cross(mi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){mi.subVectors(a,t),Wi.subVectors(r,t),id.subVectors(e,t);const u=mi.dot(mi),d=mi.dot(Wi),f=mi.dot(id),p=Wi.dot(Wi),m=Wi.dot(id),g=u*p-d*d;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(p*f-d*m)*v,M=(u*m-d*f)*v;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,r,a,l,u,d,f){return this.getBarycoord(e,t,r,a,ji)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,ji.x),f.addScaledVector(u,ji.y),f.addScaledVector(d,ji.z),f)}static getInterpolatedAttribute(e,t,r,a,l,u){return ad.setScalar(0),ld.setScalar(0),cd.setScalar(0),ad.fromBufferAttribute(e,t),ld.fromBufferAttribute(e,r),cd.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(ad,l.x),u.addScaledVector(ld,l.y),u.addScaledVector(cd,l.z),u}static isFrontFacing(e,t,r,a){return mi.subVectors(r,t),Wi.subVectors(e,t),mi.cross(Wi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),mi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return ni.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,d;Hs.subVectors(a,r),Vs.subVectors(l,r),rd.subVectors(e,r);const f=Hs.dot(rd),p=Vs.dot(rd);if(f<=0&&p<=0)return t.copy(r);sd.subVectors(e,a);const m=Hs.dot(sd),g=Vs.dot(sd);if(m>=0&&g<=m)return t.copy(a);const v=f*g-m*p;if(v<=0&&f>=0&&m<=0)return u=f/(f-m),t.copy(r).addScaledVector(Hs,u);od.subVectors(e,l);const x=Hs.dot(od),M=Vs.dot(od);if(M>=0&&x<=M)return t.copy(l);const E=x*p-f*M;if(E<=0&&p>=0&&M<=0)return d=p/(p-M),t.copy(r).addScaledVector(Vs,d);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return Vm.subVectors(l,a),d=(g-m)/(g-m+(x-M)),t.copy(a).addScaledVector(Vm,d);const y=1/(S+E+v);return u=E*y,d=v*y,t.copy(r).addScaledVector(Hs,u).addScaledVector(Vs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},El={h:0,s:0,l:0};function ud(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=At.workingColorSpace){if(e=Fy(e,1),t=Tn(t,0,1),r=Tn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ud(u,l,e+1/3),this.g=ud(u,l,e),this.b=ud(u,l,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,t=ti){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const r=a0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return At.fromWorkingColorSpace(vn.copy(this),e),Math.round(Tn(vn.r*255,0,255))*65536+Math.round(Tn(vn.g*255,0,255))*256+Math.round(Tn(vn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(vn.copy(this),t);const r=vn.r,a=vn.g,l=vn.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let f,p;const m=(d+u)/2;if(d===u)f=0,p=0;else{const g=u-d;switch(p=m<=.5?g/(u+d):g/(2-u-d),u){case r:f=(a-l)/g+(a<l?6:0);break;case a:f=(l-r)/g+2;break;case l:f=(r-a)/g+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=ti){At.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,r=vn.g,a=vn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(El);const r=Yu(wr.h,El.h,t),a=Yu(wr.s,El.s,t),l=Yu(wr.l,El.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Mt;Mt.NAMES=a0;let eS=0;class ao extends as{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=oa(),this.name="",this.blending=Zs,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cd&&(r.blendSrc=this.blendSrc),this.blendDst!==Rd&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ra extends ao{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new K,wl=new ct;class Ci{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Am,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Go(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Go(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Go(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Go(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),a=In(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),a=In(a,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),e}}class l0 extends Ci{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class c0 extends Ci{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class un extends Ci{constructor(e,t,r){super(new Float32Array(e),t,r)}}let tS=0;const ei=new Ht,dd=new cn,Gs=new K,Gn=new aa,Yo=new aa,on=new K;class ri extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r0(e)?c0:l0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,r){return ei.makeTranslation(e,t,r),this.applyMatrix4(ei),this}scale(e,t,r){return ei.makeScale(e,t,r),this.applyMatrix4(ei),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new un(r,3))}else{for(let r=0,a=t.count;r<a;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Yo.setFromBufferAttribute(d),this.morphTargetsRelative?(on.addVectors(Gn.min,Yo.min),Gn.expandByPoint(on),on.addVectors(Gn.max,Yo.max),Gn.expandByPoint(on)):(Gn.expandByPoint(Yo.min),Gn.expandByPoint(Yo.max))}Gn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)on.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(on));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,m=d.count;p<m;p++)on.fromBufferAttribute(d,p),f&&(Gs.fromBufferAttribute(e,p),on.add(Gs)),a=Math.max(a,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let W=0;W<r.count;W++)d[W]=new K,f[W]=new K;const p=new K,m=new K,g=new K,v=new ct,x=new ct,M=new ct,E=new K,S=new K;function y(W,D,R){p.fromBufferAttribute(r,W),m.fromBufferAttribute(r,D),g.fromBufferAttribute(r,R),v.fromBufferAttribute(l,W),x.fromBufferAttribute(l,D),M.fromBufferAttribute(l,R),m.sub(p),g.sub(p),x.sub(v),M.sub(v);const B=1/(x.x*M.y-M.x*x.y);isFinite(B)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(B),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(B),d[W].add(E),d[D].add(E),d[R].add(E),f[W].add(S),f[D].add(S),f[R].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,D=L.length;W<D;++W){const R=L[W],B=R.start,te=R.count;for(let Y=B,ue=B+te;Y<ue;Y+=3)y(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const P=new K,b=new K,q=new K,F=new K;function k(W){q.fromBufferAttribute(a,W),F.copy(q);const D=d[W];P.copy(D),P.sub(q.multiplyScalar(q.dot(D))).normalize(),b.crossVectors(F,D);const B=b.dot(f[W])<0?-1:1;u.setXYZW(W,P.x,P.y,P.z,B)}for(let W=0,D=L.length;W<D;++W){const R=L[W],B=R.start,te=R.count;for(let Y=B,ue=B+te;Y<ue;Y+=3)k(e.getX(Y+0)),k(e.getX(Y+1)),k(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const a=new K,l=new K,u=new K,d=new K,f=new K,p=new K,m=new K,g=new K;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),m.subVectors(u,l),g.subVectors(a,l),m.cross(g),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,S),d.add(m),f.add(m),p.add(m),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,x=t.count;v<x;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),g.subVectors(a,l),m.cross(g),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(d,f){const p=d.array,m=d.itemSize,g=d.normalized,v=new p.constructor(f.length*m);let x=0,M=0;for(let E=0,S=f.length;E<S;E++){d.isInterleavedBufferAttribute?x=f[E]*d.data.stride+d.offset:x=f[E]*m;for(let y=0;y<m;y++)v[M++]=p[x++]}return new Ci(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,r=this.index.array,a=this.attributes;for(const d in a){const f=a[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let m=0,g=p.length;m<g;m++){const v=p[m],x=e(v,r);f.push(x)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let g=0,v=p.length;g<v;g++){const x=p[g];m.push(x.toJSON(e.data))}m.length>0&&(a[f]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],g=l[p];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gm=new Ht,Yr=new ic,Tl=new nc,Wm=new K,Al=new K,bl=new K,Cl=new K,fd=new K,Rl=new K,jm=new K,Pl=new K;class jn extends cn{constructor(e=new ri,t=new ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Rl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const m=d[f],g=l[f];m!==0&&(fd.fromBufferAttribute(g,e),u?Rl.addScaledVector(fd,m):Rl.addScaledVector(fd.sub(t),m))}t.add(Rl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(l),Yr.copy(e.ray).recast(e.near),!(Tl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Tl,Wm)===null||Yr.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(l).invert(),Yr.copy(e.ray).applyMatrix4(Gm),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),P=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let b=L,q=P;b<q;b+=3){const F=d.getX(b),k=d.getX(b+1),W=d.getX(b+2);a=Ll(this,y,e,r,p,m,g,F,k,W),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=d.getX(S),P=d.getX(S+1),b=d.getX(S+2);a=Ll(this,u,e,r,p,m,g,L,P,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),P=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let b=L,q=P;b<q;b+=3){const F=b,k=b+1,W=b+2;a=Ll(this,y,e,r,p,m,g,F,k,W),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=S,P=S+1,b=S+2;a=Ll(this,u,e,r,p,m,g,L,P,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function nS(s,e,t,r,a,l,u,d){let f;if(e.side===Fn?f=r.intersectTriangle(u,l,a,!0,d):f=r.intersectTriangle(a,l,u,e.side===Rr,d),f===null)return null;Pl.copy(d),Pl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Pl);return p<t.near||p>t.far?null:{distance:p,point:Pl.clone(),object:s}}function Ll(s,e,t,r,a,l,u,d,f,p){s.getVertexPosition(d,Al),s.getVertexPosition(f,bl),s.getVertexPosition(p,Cl);const m=nS(s,e,t,r,Al,bl,Cl,jm);if(m){const g=new K;ni.getBarycoord(jm,Al,bl,Cl,g),a&&(m.uv=ni.getInterpolatedAttribute(a,d,f,p,g,new ct)),l&&(m.uv1=ni.getInterpolatedAttribute(l,d,f,p,g,new ct)),u&&(m.normal=ni.getInterpolatedAttribute(u,d,f,p,g,new K),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:d,b:f,c:p,normal:new K,materialIndex:0};ni.getNormal(Al,bl,Cl,v.normal),m.face=v,m.barycoord=g}return m}class lo extends ri{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],m=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,a,u,2),M("x","z","y",1,-1,e,r,-t,a,u,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(f),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(m,3)),this.setAttribute("uv",new un(g,2));function M(E,S,y,L,P,b,q,F,k,W,D){const R=b/k,B=q/W,te=b/2,Y=q/2,ue=F/2,he=k+1,ce=W+1;let ie=0,O=0;const ae=new K;for(let ne=0;ne<ce;ne++){const U=ne*B-Y;for(let ee=0;ee<he;ee++){const Ce=ee*R-te;ae[E]=Ce*L,ae[S]=U*P,ae[y]=ue,p.push(ae.x,ae.y,ae.z),ae[E]=0,ae[S]=0,ae[y]=F>0?1:-1,m.push(ae.x,ae.y,ae.z),g.push(ee/k),g.push(1-ne/W),ie+=1}}for(let ne=0;ne<W;ne++)for(let U=0;U<k;U++){const ee=v+U+he*ne,Ce=v+U+he*(ne+1),Z=v+(U+1)+he*(ne+1),de=v+(U+1)+he*ne;f.push(ee,Ce,de),f.push(Ce,Z,de),O+=6}d.addGroup(x,O,D),x+=O,v+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function En(s){const e={};for(let t=0;t<s.length;t++){const r=so(s[t]);for(const a in r)e[a]=r[a]}return e}function iS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function u0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const rS={clone:so,merge:En};var sS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends ao{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sS,this.fragmentShader=oS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=iS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class d0 extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new K,Xm=new ct,Ym=new ct;class Wn extends d0{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pf*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,Xm,Ym),t.subVectors(Ym,Xm)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/f,t-=u.offsetY*r/p,a*=u.width/f,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,js=1;class aS extends cn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Wn(Ws,js,e,t);a.layers=this.layers,this.add(a);const l=new Wn(Ws,js,e,t);l.layers=this.layers,this.add(l);const u=new Wn(Ws,js,e,t);u.layers=this.layers,this.add(u);const d=new Wn(Ws,js,e,t);d.layers=this.layers,this.add(d);const f=new Wn(Ws,js,e,t);f.layers=this.layers,this.add(f);const p=new Wn(Ws,js,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===$i)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Kl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,u),e.setRenderTarget(r,2,a),e.render(t,d),e.setRenderTarget(r,3,a),e.render(t,f),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class f0 extends kn{constructor(e,t,r,a,l,u,d,f,p,m){e=e!==void 0?e:[],t=t!==void 0?t:to,super(e,t,r,a,l,u,d,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lS extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new f0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new lo(5,5,5),l=new Pr({name:"CubemapFromEquirect",uniforms:so(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Cr});l.uniforms.tEquirect.value=t;const u=new jn(a,l),d=t.minFilter;return t.minFilter===is&&(t.minFilter=bi),new aS(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}const hd=new K,cS=new K,uS=new ft;class Ar{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=hd.subVectors(r,t).cross(cS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(hd),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||uS.getNormalMatrix(e),a=this.coplanarPoint(hd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new nc,Dl=new K;class Rf{constructor(e=new Ar,t=new Ar,r=new Ar,a=new Ar,l=new Ar,u=new Ar){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=$i){const r=this.planes,a=e.elements,l=a[0],u=a[1],d=a[2],f=a[3],p=a[4],m=a[5],g=a[6],v=a[7],x=a[8],M=a[9],E=a[10],S=a[11],y=a[12],L=a[13],P=a[14],b=a[15];if(r[0].setComponents(f-l,v-p,S-x,b-y).normalize(),r[1].setComponents(f+l,v+p,S+x,b+y).normalize(),r[2].setComponents(f+u,v+m,S+M,b+L).normalize(),r[3].setComponents(f-u,v-m,S-M,b-L).normalize(),r[4].setComponents(f-d,v-g,S-E,b-P).normalize(),t===$i)r[5].setComponents(f+d,v+g,S+E,b+P).normalize();else if(t===Kl)r[5].setComponents(d,g,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Dl.x=a.normal.x>0?e.max.x:e.min.x,Dl.y=a.normal.y>0?e.max.y:e.min.y,Dl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function h0(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function dS(s){const e=new WeakMap;function t(d,f){const p=d.array,m=d.usage,g=p.byteLength,v=s.createBuffer();s.bindBuffer(f,v),s.bufferData(f,p,m),d.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,f,p){const m=f.array,g=f.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,m);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],E=g[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const E=g[x];s.bufferSubData(p,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:a,remove:l,update:u}}class la extends ri{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,d=Math.floor(r),f=Math.floor(a),p=d+1,m=f+1,g=e/d,v=t/f,x=[],M=[],E=[],S=[];for(let y=0;y<m;y++){const L=y*v-u;for(let P=0;P<p;P++){const b=P*g-l;M.push(b,-L,0),E.push(0,0,1),S.push(P/d),S.push(1-y/f)}}for(let y=0;y<f;y++)for(let L=0;L<d;L++){const P=L+p*y,b=L+p*(y+1),q=L+1+p*(y+1),F=L+1+p*y;x.push(P,b,F),x.push(b,q,F)}this.setIndex(x),this.setAttribute("position",new un(M,3)),this.setAttribute("normal",new un(E,3)),this.setAttribute("uv",new un(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.widthSegments,e.heightSegments)}}var fS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
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
#endif`,pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vS=`#ifdef USE_AOMAP
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
#endif`,xS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS=`#ifdef USE_BATCHING
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
#endif`,SS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ES=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TS=`#ifdef USE_IRIDESCENCE
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
#endif`,AS=`#ifdef USE_BUMPMAP
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
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,US=`#define PI 3.141592653589793
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
} // validated`,FS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kS=`vec3 transformedNormal = objectNormal;
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
#endif`,OS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VS="gl_FragColor = linearToOutputTexel( gl_FragColor );",GS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WS=`#ifdef USE_ENVMAP
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
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XS=`#ifdef USE_ENVMAP
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
#endif`,YS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
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
#endif`,$S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JS=`#ifdef USE_GRADIENTMAP
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
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
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
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
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
#endif`,uM=`struct PhysicalMaterial {
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
}`,dM=`
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
#endif`,fM=`#if defined( RE_IndirectDiffuse )
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SM=`#if defined( USE_POINTS_UV )
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
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
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
#endif`,CM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IM=`#ifdef USE_NORMALMAP
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
#endif`,UM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KM=`float getShadowMask() {
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
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
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
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e1=`#ifdef USE_SKINNING
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
#endif`,t1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#ifdef USE_TRANSMISSION
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`#include <common>
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
}`,v1=`#if DEPTH_PACKING == 3200
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
}`,x1=`#define DISTANCE
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
}`,y1=`#define DISTANCE
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`uniform float scale;
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
}`,w1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,A1=`uniform vec3 diffuse;
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
}`,b1=`#define LAMBERT
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
}`,C1=`#define LAMBERT
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
}`,R1=`#define MATCAP
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
}`,P1=`#define MATCAP
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
}`,L1=`#define NORMAL
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
}`,D1=`#define NORMAL
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
}`,N1=`#define PHONG
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
}`,I1=`#define PHONG
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
}`,U1=`#define STANDARD
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
}`,F1=`#define STANDARD
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
}`,k1=`#define TOON
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
}`,O1=`#define TOON
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
}`,z1=`uniform float size;
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
}`,B1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,V1=`uniform vec3 color;
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
}`,G1=`uniform float rotation;
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
}`,W1=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:fS,alphahash_pars_fragment:hS,alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:gS,alphatest_pars_fragment:_S,aomap_fragment:vS,aomap_pars_fragment:xS,batching_pars_vertex:yS,batching_vertex:SS,begin_vertex:MS,beginnormal_vertex:ES,bsdfs:wS,iridescence_fragment:TS,bumpmap_pars_fragment:AS,clipping_planes_fragment:bS,clipping_planes_pars_fragment:CS,clipping_planes_pars_vertex:RS,clipping_planes_vertex:PS,color_fragment:LS,color_pars_fragment:DS,color_pars_vertex:NS,color_vertex:IS,common:US,cube_uv_reflection_fragment:FS,defaultnormal_vertex:kS,displacementmap_pars_vertex:OS,displacementmap_vertex:zS,emissivemap_fragment:BS,emissivemap_pars_fragment:HS,colorspace_fragment:VS,colorspace_pars_fragment:GS,envmap_fragment:WS,envmap_common_pars_fragment:jS,envmap_pars_fragment:XS,envmap_pars_vertex:YS,envmap_physical_pars_fragment:rM,envmap_vertex:qS,fog_vertex:$S,fog_pars_vertex:KS,fog_fragment:ZS,fog_pars_fragment:QS,gradientmap_pars_fragment:JS,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:sM,lights_toon_pars_fragment:oM,lights_phong_fragment:aM,lights_phong_pars_fragment:lM,lights_physical_fragment:cM,lights_physical_pars_fragment:uM,lights_fragment_begin:dM,lights_fragment_maps:fM,lights_fragment_end:hM,logdepthbuf_fragment:pM,logdepthbuf_pars_fragment:mM,logdepthbuf_pars_vertex:gM,logdepthbuf_vertex:_M,map_fragment:vM,map_pars_fragment:xM,map_particle_fragment:yM,map_particle_pars_fragment:SM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:EM,morphinstance_vertex:wM,morphcolor_vertex:TM,morphnormal_vertex:AM,morphtarget_pars_vertex:bM,morphtarget_vertex:CM,normal_fragment_begin:RM,normal_fragment_maps:PM,normal_pars_fragment:LM,normal_pars_vertex:DM,normal_vertex:NM,normalmap_pars_fragment:IM,clearcoat_normal_fragment_begin:UM,clearcoat_normal_fragment_maps:FM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:OM,opaque_fragment:zM,packing:BM,premultiplied_alpha_fragment:HM,project_vertex:VM,dithering_fragment:GM,dithering_pars_fragment:WM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:XM,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:qM,shadowmap_vertex:$M,shadowmask_pars_fragment:KM,skinbase_vertex:ZM,skinning_pars_vertex:QM,skinning_vertex:JM,skinnormal_vertex:e1,specularmap_fragment:t1,specularmap_pars_fragment:n1,tonemapping_fragment:i1,tonemapping_pars_fragment:r1,transmission_fragment:s1,transmission_pars_fragment:o1,uv_pars_fragment:a1,uv_pars_vertex:l1,uv_vertex:c1,worldpos_vertex:u1,background_vert:d1,background_frag:f1,backgroundCube_vert:h1,backgroundCube_frag:p1,cube_vert:m1,cube_frag:g1,depth_vert:_1,depth_frag:v1,distanceRGBA_vert:x1,distanceRGBA_frag:y1,equirect_vert:S1,equirect_frag:M1,linedashed_vert:E1,linedashed_frag:w1,meshbasic_vert:T1,meshbasic_frag:A1,meshlambert_vert:b1,meshlambert_frag:C1,meshmatcap_vert:R1,meshmatcap_frag:P1,meshnormal_vert:L1,meshnormal_frag:D1,meshphong_vert:N1,meshphong_frag:I1,meshphysical_vert:U1,meshphysical_frag:F1,meshtoon_vert:k1,meshtoon_frag:O1,points_vert:z1,points_frag:B1,shadow_vert:H1,shadow_frag:V1,sprite_vert:G1,sprite_frag:W1},De={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ti={basic:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:En([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:En([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:En([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:En([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:En([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:En([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:En([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:En([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:En([De.common,De.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:En([De.lights,De.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ti.physical={uniforms:En([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Nl={r:0,b:0,g:0},$r=new Ri,j1=new Ht;function X1(s,e,t,r,a,l,u){const d=new Mt(0);let f=l===!0?0:1,p,m,g=null,v=0,x=null;function M(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function E(L){let P=!1;const b=M(L);b===null?y(d,f):b&&b.isColor&&(y(b,1),P=!0);const q=s.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,u):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,P){const b=M(P);b&&(b.isCubeTexture||b.mapping===ec)?(m===void 0&&(m=new jn(new lo(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:so(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(q,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),$r.copy(P.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),m.material.uniforms.envMap.value=b,m.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler($r)),m.material.toneMapped=At.getTransfer(b.colorSpace)!==Dt,(g!==b||v!==b.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,g=b,v=b.version,x=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new jn(new la(2,2),new Pr({name:"BackgroundMaterial",uniforms:so(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=At.getTransfer(b.colorSpace)!==Dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||v!==b.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,g=b,v=b.version,x=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function y(L,P){L.getRGB(Nl,u0(s)),r.buffers.color.setClear(Nl.r,Nl.g,Nl.b,P,u)}return{getClearColor:function(){return d},setClearColor:function(L,P=1){d.set(L),f=P,y(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,y(d,f)},render:E,addToRenderList:S}}function Y1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let l=a,u=!1;function d(R,B,te,Y,ue){let he=!1;const ce=g(Y,te,B);l!==ce&&(l=ce,p(l.object)),he=x(R,Y,te,ue),he&&M(R,Y,te,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,b(R,B,te,Y),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function f(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function m(R){return s.deleteVertexArray(R)}function g(R,B,te){const Y=te.wireframe===!0;let ue=r[R.id];ue===void 0&&(ue={},r[R.id]=ue);let he=ue[B.id];he===void 0&&(he={},ue[B.id]=he);let ce=he[Y];return ce===void 0&&(ce=v(f()),he[Y]=ce),ce}function v(R){const B=[],te=[],Y=[];for(let ue=0;ue<t;ue++)B[ue]=0,te[ue]=0,Y[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:te,attributeDivisors:Y,object:R,attributes:{},index:null}}function x(R,B,te,Y){const ue=l.attributes,he=B.attributes;let ce=0;const ie=te.getAttributes();for(const O in ie)if(ie[O].location>=0){const ne=ue[O];let U=he[O];if(U===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),ne===void 0||ne.attribute!==U||U&&ne.data!==U.data)return!0;ce++}return l.attributesNum!==ce||l.index!==Y}function M(R,B,te,Y){const ue={},he=B.attributes;let ce=0;const ie=te.getAttributes();for(const O in ie)if(ie[O].location>=0){let ne=he[O];ne===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const U={};U.attribute=ne,ne&&ne.data&&(U.data=ne.data),ue[O]=U,ce++}l.attributes=ue,l.attributesNum=ce,l.index=Y}function E(){const R=l.newAttributes;for(let B=0,te=R.length;B<te;B++)R[B]=0}function S(R){y(R,0)}function y(R,B){const te=l.newAttributes,Y=l.enabledAttributes,ue=l.attributeDivisors;te[R]=1,Y[R]===0&&(s.enableVertexAttribArray(R),Y[R]=1),ue[R]!==B&&(s.vertexAttribDivisor(R,B),ue[R]=B)}function L(){const R=l.newAttributes,B=l.enabledAttributes;for(let te=0,Y=B.length;te<Y;te++)B[te]!==R[te]&&(s.disableVertexAttribArray(te),B[te]=0)}function P(R,B,te,Y,ue,he,ce){ce===!0?s.vertexAttribIPointer(R,B,te,ue,he):s.vertexAttribPointer(R,B,te,Y,ue,he)}function b(R,B,te,Y){E();const ue=Y.attributes,he=te.getAttributes(),ce=B.defaultAttributeValues;for(const ie in he){const O=he[ie];if(O.location>=0){let ae=ue[ie];if(ae===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const ne=ae.normalized,U=ae.itemSize,ee=e.get(ae);if(ee===void 0)continue;const Ce=ee.buffer,Z=ee.type,de=ee.bytesPerElement,ye=Z===s.INT||Z===s.UNSIGNED_INT||ae.gpuType===Mf;if(ae.isInterleavedBufferAttribute){const _e=ae.data,Ae=_e.stride,Le=ae.offset;if(_e.isInstancedInterleavedBuffer){for(let be=0;be<O.locationSize;be++)y(O.location+be,_e.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let be=0;be<O.locationSize;be++)S(O.location+be);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let be=0;be<O.locationSize;be++)P(O.location+be,U/O.locationSize,Z,ne,Ae*de,(Le+U/O.locationSize*be)*de,ye)}else{if(ae.isInstancedBufferAttribute){for(let _e=0;_e<O.locationSize;_e++)y(O.location+_e,ae.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<O.locationSize;_e++)S(O.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let _e=0;_e<O.locationSize;_e++)P(O.location+_e,U/O.locationSize,Z,ne,U*de,U/O.locationSize*_e*de,ye)}}else if(ce!==void 0){const ne=ce[ie];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(O.location,ne);break;case 3:s.vertexAttrib3fv(O.location,ne);break;case 4:s.vertexAttrib4fv(O.location,ne);break;default:s.vertexAttrib1fv(O.location,ne)}}}}L()}function q(){W();for(const R in r){const B=r[R];for(const te in B){const Y=B[te];for(const ue in Y)m(Y[ue].object),delete Y[ue];delete B[te]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const te in B){const Y=B[te];for(const ue in Y)m(Y[ue].object),delete Y[ue];delete B[te]}delete r[R.id]}function k(R){for(const B in r){const te=r[B];if(te[R.id]===void 0)continue;const Y=te[R.id];for(const ue in Y)m(Y[ue].object),delete Y[ue];delete te[R.id]}}function W(){D(),u=!0,l!==a&&(l=a,p(l.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:W,resetDefaultState:D,dispose:q,releaseStatesOfGeometry:F,releaseStatesOfProgram:k,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function q1(s,e,t){let r;function a(p){r=p}function l(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function u(p,m,g){g!==0&&(s.drawArraysInstanced(r,p,m,g),t.update(m,r,g))}function d(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,r,1)}function f(p,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<p.length;M++)u(p[M],m[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(r,p,0,m,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*v[E];t.update(M,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function $1(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==gi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const W=k===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Qi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==qi&&!W)}function f(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=f(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=M>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:b,vertexTextures:q,maxSamples:F}}function K1(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Ar,d=new ft,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||r!==0||a;return a=v,r=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,y=s.get(g);if(!a||M===null||M.length===0||l&&!S)l?m(null):p();else{const L=l?0:r,P=L*4;let b=y.clippingState||null;f.value=b,b=m(M,v,P,x);for(let q=0;q!==P;++q)b[q]=t[q];y.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,v,x,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=f.value,M!==!0||S===null){const y=x+E*4,L=v.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,b=x;P!==E;++P,b+=4)u.copy(g[P]).applyMatrix4(L,d),u.normal.toArray(S,b),S[b+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function Z1(s){let e=new WeakMap;function t(u,d){return d===kd?u.mapping=to:d===Od&&(u.mapping=no),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===kd||d===Od)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new lS(f.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",a),t(p.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class p0 extends d0{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $s=4,qm=[.125,.215,.35,.446,.526,.582],ts=20,pd=new p0,$m=new Mt;let md=null,gd=0,_d=0,vd=!1;const Qr=(1+Math.sqrt(5))/2,Xs=1/Qr,Km=[new K(-Qr,Xs,0),new K(Qr,Xs,0),new K(-Xs,0,Qr),new K(Xs,0,Qr),new K(0,Qr,-Xs),new K(0,Qr,Xs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,_d),this._renderer.xr.enabled=vd,e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:sa,format:gi,colorSpace:oo,depthBuffer:!1},a=Qm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q1(l)),this._blurMaterial=J1(l,e,t)}return a}_compileMaterial(e){const t=new jn(this._lodPlanes[0],e);this._renderer.compile(t,pd)}_sceneToCubeUV(e,t,r,a){const d=new Wn(90,1,t,r),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor($m),m.toneMapping=Ki,m.autoClear=!1;const x=new ra({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),M=new jn(new lo,x);let E=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,E=!0):(x.color.copy($m),E=!0);for(let y=0;y<6;y++){const L=y%3;L===0?(d.up.set(0,f[y],0),d.lookAt(p[y],0,0)):L===1?(d.up.set(0,0,f[y]),d.lookAt(0,p[y],0)):(d.up.set(0,f[y],0),d.lookAt(0,0,p[y]));const P=this._cubeSize;Il(a,L*P,y>2?P:0,P,P),m.setRenderTarget(a),E&&m.render(M,d),m.render(e,d)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===to||e.mapping===no;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new jn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Il(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,pd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Km[(a-l-1)%Km.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new jn(this._lodPlanes[a],p),v=p.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ts-1),E=l/M,S=isFinite(l)?1+Math.floor(m*E):ts;S>ts&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ts}`);const y=[];let L=0;for(let k=0;k<ts;++k){const W=k/E,D=Math.exp(-W*W/2);y.push(D),k===0?L+=D:k<S&&(L+=2*D)}for(let k=0;k<y.length;k++)y[k]=y[k]/L;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-r;const b=this._sizeLods[a],q=3*b*(a>P-$s?a-P+$s:0),F=4*(this._cubeSize-b);Il(t,q,F,3*b,2*b),f.setRenderTarget(t),f.render(g,pd)}}function Q1(s){const e=[],t=[],r=[];let a=s;const l=s-$s+1+qm.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);t.push(d);let f=1/d;u>s-$s?f=qm[u-s+$s-1]:u===0&&(f=0),r.push(f);const p=1/(d-2),m=-p,g=1+p,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,E=3,S=2,y=1,L=new Float32Array(E*M*x),P=new Float32Array(S*M*x),b=new Float32Array(y*M*x);for(let F=0;F<x;F++){const k=F%3*2/3-1,W=F>2?0:-1,D=[k,W,0,k+2/3,W,0,k+2/3,W+1,0,k,W,0,k+2/3,W+1,0,k,W+1,0];L.set(D,E*M*F),P.set(v,S*M*F);const R=[F,F,F,F,F,F];b.set(R,y*M*F)}const q=new ri;q.setAttribute("position",new Ci(L,E)),q.setAttribute("uv",new Ci(P,S)),q.setAttribute("faceIndex",new Ci(b,y)),e.push(q),a>$s&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Qm(s,e,t){const r=new ss(s,e,t);return r.texture.mapping=ec,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Il(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function J1(s,e,t){const r=new Float32Array(ts),a=new K(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Pf(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Jm(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pf(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function eg(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Pf(){return`

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
	`}function eE(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const f=d.mapping,p=f===kd||f===Od,m=f===to||f===no;if(p||m){let g=e.get(d);const v=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return t===null&&(t=new Zm(s)),g=p?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return p&&x&&x.height>0||m&&x&&a(x)?(t===null&&(t=new Zm(s)),g=p?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function a(d){let f=0;const p=6;for(let m=0;m<p;m++)d[m]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function tE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Zo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function nE(s,e,t,r){const a={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const E=v.morphAttributes[M];for(let S=0,y=E.length;S<y;S++)e.remove(E[S])}v.removeEventListener("dispose",u),delete a[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function d(g,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function f(g){const v=g.attributes;for(const M in v)e.update(v[M],s.ARRAY_BUFFER);const x=g.morphAttributes;for(const M in x){const E=x[M];for(let S=0,y=E.length;S<y;S++)e.update(E[S],s.ARRAY_BUFFER)}}function p(g){const v=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const L=x.array;E=x.version;for(let P=0,b=L.length;P<b;P+=3){const q=L[P+0],F=L[P+1],k=L[P+2];v.push(q,F,F,k,k,q)}}else if(M!==void 0){const L=M.array;E=M.version;for(let P=0,b=L.length/3-1;P<b;P+=3){const q=P+0,F=P+1,k=P+2;v.push(q,F,F,k,k,q)}}else return;const S=new(r0(v)?c0:l0)(v,1);S.version=E;const y=l.get(g);y&&e.remove(y),l.set(g,S)}function m(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&p(g)}else p(g);return l.get(g)}return{get:d,update:f,getWireframeAttribute:m}}function iE(s,e,t){let r;function a(v){r=v}let l,u;function d(v){l=v.type,u=v.bytesPerElement}function f(v,x){s.drawElements(r,x,l,v*u),t.update(x,r,1)}function p(v,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,v*u,M),t.update(x,r,M))}function m(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,r,1)}function g(v,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)p(v[y]/u,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,v,0,E,0,M);let y=0;for(let L=0;L<M;L++)y+=x[L]*E[L];t.update(y,r,1)}}this.setMode=a,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function rE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function sE(s,e,t){const r=new WeakMap,a=new jt;function l(u,d,f){const p=u.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(d);if(v===void 0||v.count!==g){let R=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var x=R;v!==void 0&&v.texture.dispose();const M=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let b=0;M===!0&&(b=1),E===!0&&(b=2),S===!0&&(b=3);let q=d.attributes.position.count*b,F=1;q>e.maxTextureSize&&(F=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const k=new Float32Array(q*F*4*g),W=new o0(k,q,F,g);W.type=qi,W.needsUpdate=!0;const D=b*4;for(let B=0;B<g;B++){const te=y[B],Y=L[B],ue=P[B],he=q*F*4*B;for(let ce=0;ce<te.count;ce++){const ie=ce*D;M===!0&&(a.fromBufferAttribute(te,ce),k[he+ie+0]=a.x,k[he+ie+1]=a.y,k[he+ie+2]=a.z,k[he+ie+3]=0),E===!0&&(a.fromBufferAttribute(Y,ce),k[he+ie+4]=a.x,k[he+ie+5]=a.y,k[he+ie+6]=a.z,k[he+ie+7]=0),S===!0&&(a.fromBufferAttribute(ue,ce),k[he+ie+8]=a.x,k[he+ie+9]=a.y,k[he+ie+10]=a.z,k[he+ie+11]=ue.itemSize===4?a.w:1)}}v={count:g,texture:W,size:new ct(q,F)},r.set(d,v),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const E=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function oE(s,e,t,r){let a=new WeakMap;function l(f){const p=r.render.frame,m=f.geometry,g=e.get(f,m);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),a.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),a.set(f,p))),f.isSkinnedMesh){const v=f.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return g}function u(){a=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class m0 extends kn{constructor(e,t,r,a,l,u,d,f,p,m=Qs){if(m!==Qs&&m!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Qs&&(r=rs),r===void 0&&m===ro&&(r=io),super(null,a,l,u,d,f,m,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:_i,this.minFilter=f!==void 0?f:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const g0=new kn,tg=new m0(1,1),_0=new o0,v0=new Xy,x0=new f0,ng=[],ig=[],rg=new Float32Array(16),sg=new Float32Array(9),og=new Float32Array(4);function co(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=ng[a];if(l===void 0&&(l=new Float32Array(a),ng[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function rc(s,e){let t=ig[e];t===void 0&&(t=new Int32Array(e),ig[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function aE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function uE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function dE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;og.set(r),s.uniformMatrix2fv(this.addr,!1,og),tn(t,r)}}function fE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;sg.set(r),s.uniformMatrix3fv(this.addr,!1,sg),tn(t,r)}}function hE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;rg.set(r),s.uniformMatrix4fv(this.addr,!1,rg),tn(t,r)}}function pE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function gE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function _E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function vE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function xE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function yE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function SE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function ME(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(tg.compareFunction=i0,l=tg):l=g0,t.setTexture2D(e||l,a)}function EE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||v0,a)}function wE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||x0,a)}function TE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||_0,a)}function AE(s){switch(s){case 5126:return aE;case 35664:return lE;case 35665:return cE;case 35666:return uE;case 35674:return dE;case 35675:return fE;case 35676:return hE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return _E;case 5125:return vE;case 36294:return xE;case 36295:return yE;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return ME;case 35679:case 36299:case 36307:return EE;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return TE}}function bE(s,e){s.uniform1fv(this.addr,e)}function CE(s,e){const t=co(e,this.size,2);s.uniform2fv(this.addr,t)}function RE(s,e){const t=co(e,this.size,3);s.uniform3fv(this.addr,t)}function PE(s,e){const t=co(e,this.size,4);s.uniform4fv(this.addr,t)}function LE(s,e){const t=co(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function DE(s,e){const t=co(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function NE(s,e){const t=co(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function IE(s,e){s.uniform1iv(this.addr,e)}function UE(s,e){s.uniform2iv(this.addr,e)}function FE(s,e){s.uniform3iv(this.addr,e)}function kE(s,e){s.uniform4iv(this.addr,e)}function OE(s,e){s.uniform1uiv(this.addr,e)}function zE(s,e){s.uniform2uiv(this.addr,e)}function BE(s,e){s.uniform3uiv(this.addr,e)}function HE(s,e){s.uniform4uiv(this.addr,e)}function VE(s,e,t){const r=this.cache,a=e.length,l=rc(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||g0,l[u])}function GE(s,e,t){const r=this.cache,a=e.length,l=rc(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||v0,l[u])}function WE(s,e,t){const r=this.cache,a=e.length,l=rc(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||x0,l[u])}function jE(s,e,t){const r=this.cache,a=e.length,l=rc(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||_0,l[u])}function XE(s){switch(s){case 5126:return bE;case 35664:return CE;case 35665:return RE;case 35666:return PE;case 35674:return LE;case 35675:return DE;case 35676:return NE;case 5124:case 35670:return IE;case 35667:case 35671:return UE;case 35668:case 35672:return FE;case 35669:case 35673:return kE;case 5125:return OE;case 36294:return zE;case 36295:return BE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return jE}}class YE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=AE(t.type)}}class qE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XE(t.type)}}class $E{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function ag(s,e){s.seq.push(e),s.map[e.id]=e}function KE(s,e,t){const r=s.name,a=r.length;for(xd.lastIndex=0;;){const l=xd.exec(r),u=xd.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===a){ag(t,p===void 0?new YE(d,s,e):new qE(d,s,e));break}else{let g=t.map[d];g===void 0&&(g=new $E(d),ag(t,g)),t=g}}}class ql{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);KE(l,u,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function lg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const ZE=37297;let QE=0;function JE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const cg=new ft;function ew(s){At._getMatrix(cg,At.workingColorSpace,s);const e=`mat3( ${cg.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case tc:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ug(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+JE(s.getShaderSource(e),u)}else return a}function tw(s,e){const t=ew(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nw(s,e){let t;switch(e){case vy:t="Linear";break;case xy:t="Reinhard";break;case yy:t="Cineon";break;case Sy:t="ACESFilmic";break;case Ey:t="AgX";break;case wy:t="Neutral";break;case My:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ul=new K;function iw(){At.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function sw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ow(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Qo(s){return s!==""}function dg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(s){return s.replace(aw,cw)}const lw=new Map;function cw(s,e){let t=ht[e];if(t===void 0){const r=lw.get(e);if(r!==void 0)t=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return mf(t)}const uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(s){return s.replace(uw,dw)}function dw(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function pg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function fw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function hw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function mw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Sf:e="ENVMAP_BLENDING_MULTIPLY";break;case gy:e="ENVMAP_BLENDING_MIX";break;case _y:e="ENVMAP_BLENDING_ADD";break}return e}function gw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function _w(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=fw(t),p=hw(t),m=pw(t),g=mw(t),v=gw(t),x=rw(t),M=sw(l),E=a.createProgram();let S,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Qo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Qo).join(`
`),y.length>0&&(y+=`
`)):(S=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),y=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?ht.tonemapping_pars_fragment:"",t.toneMapping!==Ki?nw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,tw("linearToOutputTexel",t.outputColorSpace),iw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),u=mf(u),u=dg(u,t),u=fg(u,t),d=mf(d),d=dg(d,t),d=fg(d,t),u=hg(u),d=hg(d),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=L+S+u,b=L+y+d,q=lg(a,a.VERTEX_SHADER,P),F=lg(a,a.FRAGMENT_SHADER,b);a.attachShader(E,q),a.attachShader(E,F),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function k(B){if(s.debug.checkShaderErrors){const te=a.getProgramInfoLog(E).trim(),Y=a.getShaderInfoLog(q).trim(),ue=a.getShaderInfoLog(F).trim();let he=!0,ce=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,q,F);else{const ie=ug(a,q,"vertex"),O=ug(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+te+`
`+ie+`
`+O)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(Y===""||ue==="")&&(ce=!1);ce&&(B.diagnostics={runnable:he,programLog:te,vertexShader:{log:Y,prefix:S},fragmentShader:{log:ue,prefix:y}})}a.deleteShader(q),a.deleteShader(F),W=new ql(a,E),D=ow(a,E)}let W;this.getUniforms=function(){return W===void 0&&k(this),W};let D;this.getAttributes=function(){return D===void 0&&k(this),D};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(E,ZE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QE++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=q,this.fragmentShader=F,this}let vw=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new yw(e),t.set(e,r)),r}}class yw{constructor(e){this.id=vw++,this.code=e,this.usedTimes=0}}function Sw(s,e,t,r,a,l,u){const d=new Cf,f=new xw,p=new Set,m=[],g=a.logarithmicDepthBuffer,v=a.vertexTextures;let x=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,R,B,te,Y){const ue=te.fog,he=Y.geometry,ce=D.isMeshStandardMaterial?te.environment:null,ie=(D.isMeshStandardMaterial?t:e).get(D.envMap||ce),O=ie&&ie.mapping===ec?ie.image.height:null,ae=M[D.type];D.precision!==null&&(x=a.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const ne=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=ne!==void 0?ne.length:0;let ee=0;he.morphAttributes.position!==void 0&&(ee=1),he.morphAttributes.normal!==void 0&&(ee=2),he.morphAttributes.color!==void 0&&(ee=3);let Ce,Z,de,ye;if(ae){const wt=Ti[ae];Ce=wt.vertexShader,Z=wt.fragmentShader}else Ce=D.vertexShader,Z=D.fragmentShader,f.update(D),de=f.getVertexShaderID(D),ye=f.getFragmentShaderID(D);const _e=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Le=Y.isInstancedMesh===!0,be=Y.isBatchedMesh===!0,ut=!!D.map,Ke=!!D.matcap,_t=!!ie,V=!!D.aoMap,vt=!!D.lightMap,Ze=!!D.bumpMap,et=!!D.normalMap,qe=!!D.displacementMap,xt=!!D.emissiveMap,Ge=!!D.metalnessMap,N=!!D.roughnessMap,T=D.anisotropy>0,J=D.clearcoat>0,fe=D.dispersion>0,ge=D.iridescence>0,pe=D.sheen>0,We=D.transmission>0,Re=T&&!!D.anisotropyMap,Fe=J&&!!D.clearcoatMap,pt=J&&!!D.clearcoatNormalMap,Me=J&&!!D.clearcoatRoughnessMap,Oe=ge&&!!D.iridescenceMap,tt=ge&&!!D.iridescenceThicknessMap,nt=pe&&!!D.sheenColorMap,ze=pe&&!!D.sheenRoughnessMap,mt=!!D.specularMap,ot=!!D.specularColorMap,Pt=!!D.specularIntensityMap,G=We&&!!D.transmissionMap,Pe=We&&!!D.thicknessMap,le=!!D.gradientMap,me=!!D.alphaMap,Ie=D.alphaTest>0,Ne=!!D.alphaHash,at=!!D.extensions;let kt=Ki;D.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(kt=s.toneMapping);const $t={shaderID:ae,shaderType:D.type,shaderName:D.name,vertexShader:Ce,fragmentShader:Z,defines:D.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:be,batchingColor:be&&Y._colorsTexture!==null,instancing:Le,instancingColor:Le&&Y.instanceColor!==null,instancingMorph:Le&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:oo,alphaToCoverage:!!D.alphaToCoverage,map:ut,matcap:Ke,envMap:_t,envMapMode:_t&&ie.mapping,envMapCubeUVHeight:O,aoMap:V,lightMap:vt,bumpMap:Ze,normalMap:et,displacementMap:v&&qe,emissiveMap:xt,normalMapObjectSpace:et&&D.normalMapType===Cy,normalMapTangentSpace:et&&D.normalMapType===n0,metalnessMap:Ge,roughnessMap:N,anisotropy:T,anisotropyMap:Re,clearcoat:J,clearcoatMap:Fe,clearcoatNormalMap:pt,clearcoatRoughnessMap:Me,dispersion:fe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:tt,sheen:pe,sheenColorMap:nt,sheenRoughnessMap:ze,specularMap:mt,specularColorMap:ot,specularIntensityMap:Pt,transmission:We,transmissionMap:G,thicknessMap:Pe,gradientMap:le,opaque:D.transparent===!1&&D.blending===Zs&&D.alphaToCoverage===!1,alphaMap:me,alphaTest:Ie,alphaHash:Ne,combine:D.combine,mapUv:ut&&E(D.map.channel),aoMapUv:V&&E(D.aoMap.channel),lightMapUv:vt&&E(D.lightMap.channel),bumpMapUv:Ze&&E(D.bumpMap.channel),normalMapUv:et&&E(D.normalMap.channel),displacementMapUv:qe&&E(D.displacementMap.channel),emissiveMapUv:xt&&E(D.emissiveMap.channel),metalnessMapUv:Ge&&E(D.metalnessMap.channel),roughnessMapUv:N&&E(D.roughnessMap.channel),anisotropyMapUv:Re&&E(D.anisotropyMap.channel),clearcoatMapUv:Fe&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:pt&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(D.sheenRoughnessMap.channel),specularMapUv:mt&&E(D.specularMap.channel),specularColorMapUv:ot&&E(D.specularColorMap.channel),specularIntensityMapUv:Pt&&E(D.specularIntensityMap.channel),transmissionMapUv:G&&E(D.transmissionMap.channel),thicknessMapUv:Pe&&E(D.thicknessMap.channel),alphaMapUv:me&&E(D.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(et||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!he.attributes.uv&&(ut||me),fog:!!ue,useFog:D.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:Y.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ee,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:ut&&D.map.isVideoTexture===!0&&At.getTransfer(D.map.colorSpace)===Dt,decodeVideoTextureEmissive:xt&&D.emissiveMap.isVideoTexture===!0&&At.getTransfer(D.emissiveMap.colorSpace)===Dt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ai,flipSided:D.side===Fn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:at&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&D.extensions.multiDraw===!0||be)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return $t.vertexUv1s=p.has(1),$t.vertexUv2s=p.has(2),$t.vertexUv3s=p.has(3),p.clear(),$t}function y(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)R.push(B),R.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(L(R,D),P(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function L(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function P(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function b(D){const R=M[D.type];let B;if(R){const te=Ti[R];B=rS.clone(te.uniforms)}else B=D.uniforms;return B}function q(D,R){let B;for(let te=0,Y=m.length;te<Y;te++){const ue=m[te];if(ue.cacheKey===R){B=ue,++B.usedTimes;break}}return B===void 0&&(B=new _w(s,R,D,l),m.push(B)),B}function F(D){if(--D.usedTimes===0){const R=m.indexOf(D);m[R]=m[m.length-1],m.pop(),D.destroy()}}function k(D){f.remove(D)}function W(){f.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:b,acquireProgram:q,releaseProgram:F,releaseShaderCache:k,programs:m,dispose:W}}function Mw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,f){s.get(u)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function Ew(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(g,v,x,M,E,S){let y=s[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},s[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=S),e++,y}function d(g,v,x,M,E,S){const y=u(g,v,x,M,E,S);x.transmission>0?r.push(y):x.transparent===!0?a.push(y):t.push(y)}function f(g,v,x,M,E,S){const y=u(g,v,x,M,E,S);x.transmission>0?r.unshift(y):x.transparent===!0?a.unshift(y):t.unshift(y)}function p(g,v){t.length>1&&t.sort(g||Ew),r.length>1&&r.sort(v||mg),a.length>1&&a.sort(v||mg)}function m(){for(let g=e,v=s.length;g<v;g++){const x=s[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:d,unshift:f,finish:m,sort:p}}function ww(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new gg,s.set(r,[u])):a>=l.length?(u=new gg,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function Tw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Mt};break;case"SpotLight":t={position:new K,direction:new K,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function Aw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let bw=0;function Cw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Rw(s){const e=new Tw,t=Aw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const a=new K,l=new Ht,u=new Ht;function d(p){let m=0,g=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,L=0,P=0,b=0,q=0,F=0,k=0;p.sort(Cw);for(let D=0,R=p.length;D<R;D++){const B=p[D],te=B.color,Y=B.intensity,ue=B.distance,he=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=te.r*Y,g+=te.g*Y,v+=te.b*Y;else if(B.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(B.sh.coefficients[ce],Y);k++}else if(B.isDirectionalLight){const ce=e.get(B);if(ce.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ie=B.shadow,O=t.get(B);O.shadowIntensity=ie.intensity,O.shadowBias=ie.bias,O.shadowNormalBias=ie.normalBias,O.shadowRadius=ie.radius,O.shadowMapSize=ie.mapSize,r.directionalShadow[x]=O,r.directionalShadowMap[x]=he,r.directionalShadowMatrix[x]=B.shadow.matrix,L++}r.directional[x]=ce,x++}else if(B.isSpotLight){const ce=e.get(B);ce.position.setFromMatrixPosition(B.matrixWorld),ce.color.copy(te).multiplyScalar(Y),ce.distance=ue,ce.coneCos=Math.cos(B.angle),ce.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ce.decay=B.decay,r.spot[E]=ce;const ie=B.shadow;if(B.map&&(r.spotLightMap[q]=B.map,q++,ie.updateMatrices(B),B.castShadow&&F++),r.spotLightMatrix[E]=ie.matrix,B.castShadow){const O=t.get(B);O.shadowIntensity=ie.intensity,O.shadowBias=ie.bias,O.shadowNormalBias=ie.normalBias,O.shadowRadius=ie.radius,O.shadowMapSize=ie.mapSize,r.spotShadow[E]=O,r.spotShadowMap[E]=he,b++}E++}else if(B.isRectAreaLight){const ce=e.get(B);ce.color.copy(te).multiplyScalar(Y),ce.halfWidth.set(B.width*.5,0,0),ce.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=ce,S++}else if(B.isPointLight){const ce=e.get(B);if(ce.color.copy(B.color).multiplyScalar(B.intensity),ce.distance=B.distance,ce.decay=B.decay,B.castShadow){const ie=B.shadow,O=t.get(B);O.shadowIntensity=ie.intensity,O.shadowBias=ie.bias,O.shadowNormalBias=ie.normalBias,O.shadowRadius=ie.radius,O.shadowMapSize=ie.mapSize,O.shadowCameraNear=ie.camera.near,O.shadowCameraFar=ie.camera.far,r.pointShadow[M]=O,r.pointShadowMap[M]=he,r.pointShadowMatrix[M]=B.shadow.matrix,P++}r.point[M]=ce,M++}else if(B.isHemisphereLight){const ce=e.get(B);ce.skyColor.copy(B.color).multiplyScalar(Y),ce.groundColor.copy(B.groundColor).multiplyScalar(Y),r.hemi[y]=ce,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==x||W.pointLength!==M||W.spotLength!==E||W.rectAreaLength!==S||W.hemiLength!==y||W.numDirectionalShadows!==L||W.numPointShadows!==P||W.numSpotShadows!==b||W.numSpotMaps!==q||W.numLightProbes!==k)&&(r.directional.length=x,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=b+q-F,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=k,W.directionalLength=x,W.pointLength=M,W.spotLength=E,W.rectAreaLength=S,W.hemiLength=y,W.numDirectionalShadows=L,W.numPointShadows=P,W.numSpotShadows=b,W.numSpotMaps=q,W.numLightProbes=k,r.version=bw++)}function f(p,m){let g=0,v=0,x=0,M=0,E=0;const S=m.matrixWorldInverse;for(let y=0,L=p.length;y<L;y++){const P=p[y];if(P.isDirectionalLight){const b=r.directional[g];b.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),g++}else if(P.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const b=r.rectArea[M];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(S),u.identity(),l.copy(P.matrixWorld),l.premultiply(S),u.extractRotation(l),b.halfWidth.set(P.width*.5,0,0),b.halfHeight.set(0,P.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const b=r.point[v];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(S),v++}else if(P.isHemisphereLight){const b=r.hemi[E];b.direction.setFromMatrixPosition(P.matrixWorld),b.direction.transformDirection(S),E++}}}return{setup:d,setupView:f,state:r}}function _g(s){const e=new Rw(s),t=[],r=[];function a(m){p.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function d(){e.setup(t)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function Pw(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new _g(s),e.set(a,[d])):l>=u.length?(d=new _g(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class Lw extends ao{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dw extends ao{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iw=`uniform sampler2D shadow_pass;
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
}`;function Uw(s,e,t){let r=new Rf;const a=new ct,l=new ct,u=new jt,d=new Lw({depthPacking:by}),f=new Dw,p={},m=t.maxTextureSize,g={[Rr]:Fn,[Fn]:Rr,[Ai]:Ai},v=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Nw,fragmentShader:Iw}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new ri;M.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new jn(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wg;let y=this.type;this.render=function(F,k,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),te=s.state;te.setBlending(Cr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Y=y!==Xi&&this.type===Xi,ue=y===Xi&&this.type!==Xi;for(let he=0,ce=F.length;he<ce;he++){const ie=F[he],O=ie.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const ae=O.getFrameExtents();if(a.multiply(ae),l.copy(O.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/ae.x),a.x=l.x*ae.x,O.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/ae.y),a.y=l.y*ae.y,O.mapSize.y=l.y)),O.map===null||Y===!0||ue===!0){const U=this.type!==Xi?{minFilter:_i,magFilter:_i}:{};O.map!==null&&O.map.dispose(),O.map=new ss(a.x,a.y,U),O.map.texture.name=ie.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const ne=O.getViewportCount();for(let U=0;U<ne;U++){const ee=O.getViewport(U);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),te.viewport(u),O.updateMatrices(ie,U),r=O.getFrustum(),b(k,W,O.camera,ie,this.type)}O.isPointLightShadow!==!0&&this.type===Xi&&L(O,W),O.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(D,R,B)};function L(F,k){const W=e.update(E);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ss(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(k,null,W,v,E,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(k,null,W,x,E,null)}function P(F,k,W,D){let R=null;const B=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)R=B;else if(R=W.isPointLight===!0?f:d,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const te=R.uuid,Y=k.uuid;let ue=p[te];ue===void 0&&(ue={},p[te]=ue);let he=ue[Y];he===void 0&&(he=R.clone(),ue[Y]=he,k.addEventListener("dispose",q)),R=he}if(R.visible=k.visible,R.wireframe=k.wireframe,D===Xi?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:g[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const te=s.properties.get(R);te.light=W}return R}function b(F,k,W,D,R){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Xi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const Y=e.update(F),ue=F.material;if(Array.isArray(ue)){const he=Y.groups;for(let ce=0,ie=he.length;ce<ie;ce++){const O=he[ce],ae=ue[O.materialIndex];if(ae&&ae.visible){const ne=P(F,ae,D,R);F.onBeforeShadow(s,F,k,W,Y,ne,O),s.renderBufferDirect(W,null,Y,ne,F,O),F.onAfterShadow(s,F,k,W,Y,ne,O)}}}else if(ue.visible){const he=P(F,ue,D,R);F.onBeforeShadow(s,F,k,W,Y,he,null),s.renderBufferDirect(W,null,Y,he,F,null),F.onAfterShadow(s,F,k,W,Y,he,null)}}const te=F.children;for(let Y=0,ue=te.length;Y<ue;Y++)b(te[Y],k,W,D,R)}function q(F){F.target.removeEventListener("dispose",q);for(const W in p){const D=p[W],R=F.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const Fw={[Pd]:Ld,[Dd]:Ud,[Nd]:Fd,[eo]:Id,[Ld]:Pd,[Ud]:Dd,[Fd]:Nd,[Id]:eo};function kw(s,e){function t(){let G=!1;const Pe=new jt;let le=null;const me=new jt(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!G&&(s.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,Ne,at,kt,$t){$t===!0&&(Ie*=kt,Ne*=kt,at*=kt),Pe.set(Ie,Ne,at,kt),me.equals(Pe)===!1&&(s.clearColor(Ie,Ne,at,kt),me.copy(Pe))},reset:function(){G=!1,le=null,me.set(-1,0,0,0)}}}function r(){let G=!1,Pe=!1,le=null,me=null,Ie=null;return{setReversed:function(Ne){if(Pe!==Ne){const at=e.get("EXT_clip_control");Pe?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const kt=Ie;Ie=null,this.setClear(kt)}Pe=Ne},getReversed:function(){return Pe},setTest:function(Ne){Ne?_e(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Ne){le!==Ne&&!G&&(s.depthMask(Ne),le=Ne)},setFunc:function(Ne){if(Pe&&(Ne=Fw[Ne]),me!==Ne){switch(Ne){case Pd:s.depthFunc(s.NEVER);break;case Ld:s.depthFunc(s.ALWAYS);break;case Dd:s.depthFunc(s.LESS);break;case eo:s.depthFunc(s.LEQUAL);break;case Nd:s.depthFunc(s.EQUAL);break;case Id:s.depthFunc(s.GEQUAL);break;case Ud:s.depthFunc(s.GREATER);break;case Fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Ne}},setLocked:function(Ne){G=Ne},setClear:function(Ne){Ie!==Ne&&(Pe&&(Ne=1-Ne),s.clearDepth(Ne),Ie=Ne)},reset:function(){G=!1,le=null,me=null,Ie=null,Pe=!1}}}function a(){let G=!1,Pe=null,le=null,me=null,Ie=null,Ne=null,at=null,kt=null,$t=null;return{setTest:function(wt){G||(wt?_e(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(wt){Pe!==wt&&!G&&(s.stencilMask(wt),Pe=wt)},setFunc:function(wt,An,xn){(le!==wt||me!==An||Ie!==xn)&&(s.stencilFunc(wt,An,xn),le=wt,me=An,Ie=xn)},setOp:function(wt,An,xn){(Ne!==wt||at!==An||kt!==xn)&&(s.stencilOp(wt,An,xn),Ne=wt,at=An,kt=xn)},setLocked:function(wt){G=wt},setClear:function(wt){$t!==wt&&(s.clearStencil(wt),$t=wt)},reset:function(){G=!1,Pe=null,le=null,me=null,Ie=null,Ne=null,at=null,kt=null,$t=null}}}const l=new t,u=new r,d=new a,f=new WeakMap,p=new WeakMap;let m={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,P=null,b=null,q=null,F=null,k=new Mt(0,0,0),W=0,D=!1,R=null,B=null,te=null,Y=null,ue=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ie=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(O)[1]),ce=ie>=1):O.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ce=ie>=2);let ae=null,ne={};const U=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),Ce=new jt().fromArray(U),Z=new jt().fromArray(ee);function de(G,Pe,le,me){const Ie=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(G,Ne),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<le;at++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Pe+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Ne}const ye={};ye[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),_e(s.DEPTH_TEST),u.setFunc(eo),Ze(!1),et(Sm),_e(s.CULL_FACE),V(Cr);function _e(G){m[G]!==!0&&(s.enable(G),m[G]=!0)}function Ae(G){m[G]!==!1&&(s.disable(G),m[G]=!1)}function Le(G,Pe){return g[G]!==Pe?(s.bindFramebuffer(G,Pe),g[G]=Pe,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function be(G,Pe){let le=x,me=!1;if(G){le=v.get(Pe),le===void 0&&(le=[],v.set(Pe,le));const Ie=G.textures;if(le.length!==Ie.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,at=Ie.length;Ne<at;Ne++)le[Ne]=s.COLOR_ATTACHMENT0+Ne;le.length=Ie.length,me=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,me=!0);me&&s.drawBuffers(le)}function ut(G){return M!==G?(s.useProgram(G),M=G,!0):!1}const Ke={[es]:s.FUNC_ADD,[Jx]:s.FUNC_SUBTRACT,[ey]:s.FUNC_REVERSE_SUBTRACT};Ke[ty]=s.MIN,Ke[ny]=s.MAX;const _t={[iy]:s.ZERO,[ry]:s.ONE,[sy]:s.SRC_COLOR,[Cd]:s.SRC_ALPHA,[dy]:s.SRC_ALPHA_SATURATE,[cy]:s.DST_COLOR,[ay]:s.DST_ALPHA,[oy]:s.ONE_MINUS_SRC_COLOR,[Rd]:s.ONE_MINUS_SRC_ALPHA,[uy]:s.ONE_MINUS_DST_COLOR,[ly]:s.ONE_MINUS_DST_ALPHA,[fy]:s.CONSTANT_COLOR,[hy]:s.ONE_MINUS_CONSTANT_COLOR,[py]:s.CONSTANT_ALPHA,[my]:s.ONE_MINUS_CONSTANT_ALPHA};function V(G,Pe,le,me,Ie,Ne,at,kt,$t,wt){if(G===Cr){E===!0&&(Ae(s.BLEND),E=!1);return}if(E===!1&&(_e(s.BLEND),E=!0),G!==Qx){if(G!==S||wt!==D){if((y!==es||b!==es)&&(s.blendEquation(s.FUNC_ADD),y=es,b=es),wt)switch(G){case Zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mm:s.blendFunc(s.ONE,s.ONE);break;case Em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,P=null,q=null,F=null,k.set(0,0,0),W=0,S=G,D=wt}return}Ie=Ie||Pe,Ne=Ne||le,at=at||me,(Pe!==y||Ie!==b)&&(s.blendEquationSeparate(Ke[Pe],Ke[Ie]),y=Pe,b=Ie),(le!==L||me!==P||Ne!==q||at!==F)&&(s.blendFuncSeparate(_t[le],_t[me],_t[Ne],_t[at]),L=le,P=me,q=Ne,F=at),(kt.equals(k)===!1||$t!==W)&&(s.blendColor(kt.r,kt.g,kt.b,$t),k.copy(kt),W=$t),S=G,D=!1}function vt(G,Pe){G.side===Ai?Ae(s.CULL_FACE):_e(s.CULL_FACE);let le=G.side===Fn;Pe&&(le=!le),Ze(le),G.blending===Zs&&G.transparent===!1?V(Cr):V(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const me=G.stencilWrite;d.setTest(me),me&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),xt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function et(G){G!==$x?(_e(s.CULL_FACE),G!==B&&(G===Sm?s.cullFace(s.BACK):G===Kx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),B=G}function qe(G){G!==te&&(ce&&s.lineWidth(G),te=G)}function xt(G,Pe,le){G?(_e(s.POLYGON_OFFSET_FILL),(Y!==Pe||ue!==le)&&(s.polygonOffset(Pe,le),Y=Pe,ue=le)):Ae(s.POLYGON_OFFSET_FILL)}function Ge(G){G?_e(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function N(G){G===void 0&&(G=s.TEXTURE0+he-1),ae!==G&&(s.activeTexture(G),ae=G)}function T(G,Pe,le){le===void 0&&(ae===null?le=s.TEXTURE0+he-1:le=ae);let me=ne[le];me===void 0&&(me={type:void 0,texture:void 0},ne[le]=me),(me.type!==G||me.texture!==Pe)&&(ae!==le&&(s.activeTexture(le),ae=le),s.bindTexture(G,Pe||ye[G]),me.type=G,me.texture=Pe)}function J(){const G=ne[ae];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(G){Ce.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ce.copy(G))}function ze(G){Z.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function mt(G,Pe){let le=p.get(Pe);le===void 0&&(le=new WeakMap,p.set(Pe,le));let me=le.get(G);me===void 0&&(me=s.getUniformBlockIndex(Pe,G.name),le.set(G,me))}function ot(G,Pe){const me=p.get(Pe).get(G);f.get(Pe)!==me&&(s.uniformBlockBinding(Pe,me,G.__bindingPointIndex),f.set(Pe,me))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ae=null,ne={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,P=null,b=null,q=null,F=null,k=new Mt(0,0,0),W=0,D=!1,R=null,B=null,te=null,Y=null,ue=null,Ce.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:_e,disable:Ae,bindFramebuffer:Le,drawBuffers:be,useProgram:ut,setBlending:V,setMaterial:vt,setFlipSided:Ze,setCullFace:et,setLineWidth:qe,setPolygonOffset:xt,setScissorTest:Ge,activeTexture:N,bindTexture:T,unbindTexture:J,compressedTexImage2D:fe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:tt,updateUBOMapping:mt,uniformBlockBinding:ot,texStorage2D:pt,texStorage3D:Me,texSubImage2D:pe,texSubImage3D:We,compressedTexSubImage2D:Re,compressedTexSubImage3D:Fe,scissor:nt,viewport:ze,reset:Pt}}function vg(s,e,t,r){const a=Ow(r);switch(t){case $g:return s*e;case Zg:return s*e;case Qg:return s*e*2;case Jg:return s*e/a.components*a.byteLength;case Tf:return s*e/a.components*a.byteLength;case e0:return s*e*2/a.components*a.byteLength;case Af:return s*e*2/a.components*a.byteLength;case Kg:return s*e*3/a.components*a.byteLength;case gi:return s*e*4/a.components*a.byteLength;case bf:return s*e*4/a.components*a.byteLength;case Gl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jl:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vd:case Wd:return Math.max(s,16)*Math.max(e,8)/4;case Hd:case Gd:return Math.max(s,8)*Math.max(e,8)/2;case jd:case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case nf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case af:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yl:case cf:case uf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case t0:case df:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ff:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ow(s){switch(s){case Qi:case Xg:return{byteLength:1,components:1};case ia:case Yg:case sa:return{byteLength:2,components:1};case Ef:case wf:return{byteLength:2,components:4};case rs:case Mf:case qi:return{byteLength:4,components:1};case qg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function zw(s,e,t,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,T){return x?new OffscreenCanvas(N,T):Zl("canvas")}function E(N,T,J){let fe=1;const ge=Ge(N);if((ge.width>J||ge.height>J)&&(fe=J/Math.max(ge.width,ge.height)),fe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pe=Math.floor(fe*ge.width),We=Math.floor(fe*ge.height);g===void 0&&(g=M(pe,We));const Re=T?M(pe,We):g;return Re.width=pe,Re.height=We,Re.getContext("2d").drawImage(N,0,0,pe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+pe+"x"+We+")."),Re}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),N;return N}function S(N){return N.generateMipmaps}function y(N){s.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(N,T,J,fe,ge=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pe=T;if(T===s.RED&&(J===s.FLOAT&&(pe=s.R32F),J===s.HALF_FLOAT&&(pe=s.R16F),J===s.UNSIGNED_BYTE&&(pe=s.R8)),T===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(pe=s.R8UI),J===s.UNSIGNED_SHORT&&(pe=s.R16UI),J===s.UNSIGNED_INT&&(pe=s.R32UI),J===s.BYTE&&(pe=s.R8I),J===s.SHORT&&(pe=s.R16I),J===s.INT&&(pe=s.R32I)),T===s.RG&&(J===s.FLOAT&&(pe=s.RG32F),J===s.HALF_FLOAT&&(pe=s.RG16F),J===s.UNSIGNED_BYTE&&(pe=s.RG8)),T===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(pe=s.RG8UI),J===s.UNSIGNED_SHORT&&(pe=s.RG16UI),J===s.UNSIGNED_INT&&(pe=s.RG32UI),J===s.BYTE&&(pe=s.RG8I),J===s.SHORT&&(pe=s.RG16I),J===s.INT&&(pe=s.RG32I)),T===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),J===s.UNSIGNED_INT&&(pe=s.RGB32UI),J===s.BYTE&&(pe=s.RGB8I),J===s.SHORT&&(pe=s.RGB16I),J===s.INT&&(pe=s.RGB32I)),T===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),J===s.UNSIGNED_INT&&(pe=s.RGBA32UI),J===s.BYTE&&(pe=s.RGBA8I),J===s.SHORT&&(pe=s.RGBA16I),J===s.INT&&(pe=s.RGBA32I)),T===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),T===s.RGBA){const We=ge?tc:At.getTransfer(fe);J===s.FLOAT&&(pe=s.RGBA32F),J===s.HALF_FLOAT&&(pe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(pe=We===Dt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function b(N,T){let J;return N?T===null||T===rs||T===io?J=s.DEPTH24_STENCIL8:T===qi?J=s.DEPTH32F_STENCIL8:T===ia&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===rs||T===io?J=s.DEPTH_COMPONENT24:T===qi?J=s.DEPTH_COMPONENT32F:T===ia&&(J=s.DEPTH_COMPONENT16),J}function q(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==_i&&N.minFilter!==bi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function F(N){const T=N.target;T.removeEventListener("dispose",F),W(T),T.isVideoTexture&&m.delete(T)}function k(N){const T=N.target;T.removeEventListener("dispose",k),R(T)}function W(N){const T=r.get(N);if(T.__webglInit===void 0)return;const J=N.source,fe=v.get(J);if(fe){const ge=fe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&D(N),Object.keys(fe).length===0&&v.delete(J)}r.remove(N)}function D(N){const T=r.get(N);s.deleteTexture(T.__webglTexture);const J=N.source,fe=v.get(J);delete fe[T.__cacheKey],u.memory.textures--}function R(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let ge=0;ge<T.__webglFramebuffer[fe].length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[fe][ge]);else s.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)s.deleteFramebuffer(T.__webglFramebuffer[fe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=N.textures;for(let fe=0,ge=J.length;fe<ge;fe++){const pe=r.get(J[fe]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),u.memory.textures--),r.remove(J[fe])}r.remove(N)}let B=0;function te(){B=0}function Y(){const N=B;return N>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),B+=1,N}function ue(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function he(N,T){const J=r.get(N);if(N.isVideoTexture&&qe(N),N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){const fe=N.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(J,N,T);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+T)}function ce(N,T){const J=r.get(N);if(N.version>0&&J.__version!==N.version){Z(J,N,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+T)}function ie(N,T){const J=r.get(N);if(N.version>0&&J.__version!==N.version){Z(J,N,T);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+T)}function O(N,T){const J=r.get(N);if(N.version>0&&J.__version!==N.version){de(J,N,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+T)}const ae={[zd]:s.REPEAT,[ns]:s.CLAMP_TO_EDGE,[Bd]:s.MIRRORED_REPEAT},ne={[_i]:s.NEAREST,[Ty]:s.NEAREST_MIPMAP_NEAREST,[ml]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[Xu]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},U={[Ry]:s.NEVER,[Uy]:s.ALWAYS,[Py]:s.LESS,[i0]:s.LEQUAL,[Ly]:s.EQUAL,[Iy]:s.GEQUAL,[Dy]:s.GREATER,[Ny]:s.NOTEQUAL};function ee(N,T){if(T.type===qi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===bi||T.magFilter===Xu||T.magFilter===ml||T.magFilter===is||T.minFilter===bi||T.minFilter===Xu||T.minFilter===ml||T.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ae[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ae[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ae[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ne[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ne[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_i||T.minFilter!==ml&&T.minFilter!==is||T.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ce(N,T){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",F));const fe=T.source;let ge=v.get(fe);ge===void 0&&(ge={},v.set(fe,ge));const pe=ue(T);if(pe!==N.__cacheKey){ge[pe]===void 0&&(ge[pe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),ge[pe].usedTimes++;const We=ge[N.__cacheKey];We!==void 0&&(ge[N.__cacheKey].usedTimes--,We.usedTimes===0&&D(T)),N.__cacheKey=pe,N.__webglTexture=ge[pe].texture}return J}function Z(N,T,J){let fe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=s.TEXTURE_3D);const ge=Ce(N,T),pe=T.source;t.bindTexture(fe,N.__webglTexture,s.TEXTURE0+J);const We=r.get(pe);if(pe.version!==We.__version||ge===!0){t.activeTexture(s.TEXTURE0+J);const Re=At.getPrimaries(At.workingColorSpace),Fe=T.colorSpace===br?null:At.getPrimaries(T.colorSpace),pt=T.colorSpace===br||Re===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Me=E(T.image,!1,a.maxTextureSize);Me=xt(T,Me);const Oe=l.convert(T.format,T.colorSpace),tt=l.convert(T.type);let nt=P(T.internalFormat,Oe,tt,T.colorSpace,T.isVideoTexture);ee(fe,T);let ze;const mt=T.mipmaps,ot=T.isVideoTexture!==!0,Pt=We.__version===void 0||ge===!0,G=pe.dataReady,Pe=q(T,Me);if(T.isDepthTexture)nt=b(T.format===ro,T.type),Pt&&(ot?t.texStorage2D(s.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Oe,tt,null));else if(T.isDataTexture)if(mt.length>0){ot&&Pt&&t.texStorage2D(s.TEXTURE_2D,Pe,nt,mt[0].width,mt[0].height);for(let le=0,me=mt.length;le<me;le++)ze=mt[le],ot?G&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,ze.width,ze.height,Oe,tt,ze.data):t.texImage2D(s.TEXTURE_2D,le,nt,ze.width,ze.height,0,Oe,tt,ze.data);T.generateMipmaps=!1}else ot?(Pt&&t.texStorage2D(s.TEXTURE_2D,Pe,nt,Me.width,Me.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,tt,Me.data)):t.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Oe,tt,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,nt,mt[0].width,mt[0].height,Me.depth);for(let le=0,me=mt.length;le<me;le++)if(ze=mt[le],T.format!==gi)if(Oe!==null)if(ot){if(G)if(T.layerUpdates.size>0){const Ie=vg(ze.width,ze.height,T.format,T.type);for(const Ne of T.layerUpdates){const at=ze.data.subarray(Ne*Ie/ze.data.BYTES_PER_ELEMENT,(Ne+1)*Ie/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,Ne,ze.width,ze.height,1,Oe,at)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,ze.width,ze.height,Me.depth,Oe,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,nt,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,ze.width,ze.height,Me.depth,Oe,tt,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,nt,ze.width,ze.height,Me.depth,0,Oe,tt,ze.data)}else{ot&&Pt&&t.texStorage2D(s.TEXTURE_2D,Pe,nt,mt[0].width,mt[0].height);for(let le=0,me=mt.length;le<me;le++)ze=mt[le],T.format!==gi?Oe!==null?ot?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,ze.width,ze.height,Oe,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,le,nt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?G&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,ze.width,ze.height,Oe,tt,ze.data):t.texImage2D(s.TEXTURE_2D,le,nt,ze.width,ze.height,0,Oe,tt,ze.data)}else if(T.isDataArrayTexture)if(ot){if(Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,nt,Me.width,Me.height,Me.depth),G)if(T.layerUpdates.size>0){const le=vg(Me.width,Me.height,T.format,T.type);for(const me of T.layerUpdates){const Ie=Me.data.subarray(me*le/Me.data.BYTES_PER_ELEMENT,(me+1)*le/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Me.width,Me.height,1,Oe,tt,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(T.isData3DTexture)ot?(Pt&&t.texStorage3D(s.TEXTURE_3D,Pe,nt,Me.width,Me.height,Me.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)):t.texImage3D(s.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(T.isFramebufferTexture){if(Pt)if(ot)t.texStorage2D(s.TEXTURE_2D,Pe,nt,Me.width,Me.height);else{let le=Me.width,me=Me.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,nt,le,me,0,Oe,tt,null),le>>=1,me>>=1}}else if(mt.length>0){if(ot&&Pt){const le=Ge(mt[0]);t.texStorage2D(s.TEXTURE_2D,Pe,nt,le.width,le.height)}for(let le=0,me=mt.length;le<me;le++)ze=mt[le],ot?G&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,Oe,tt,ze):t.texImage2D(s.TEXTURE_2D,le,nt,Oe,tt,ze);T.generateMipmaps=!1}else if(ot){if(Pt){const le=Ge(Me);t.texStorage2D(s.TEXTURE_2D,Pe,nt,le.width,le.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,tt,Me)}else t.texImage2D(s.TEXTURE_2D,0,nt,Oe,tt,Me);S(T)&&y(fe),We.__version=pe.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function de(N,T,J){if(T.image.length!==6)return;const fe=Ce(N,T),ge=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+J);const pe=r.get(ge);if(ge.version!==pe.__version||fe===!0){t.activeTexture(s.TEXTURE0+J);const We=At.getPrimaries(At.workingColorSpace),Re=T.colorSpace===br?null:At.getPrimaries(T.colorSpace),Fe=T.colorSpace===br||We===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let me=0;me<6;me++)!pt&&!Me?Oe[me]=E(T.image[me],!0,a.maxCubemapSize):Oe[me]=Me?T.image[me].image:T.image[me],Oe[me]=xt(T,Oe[me]);const tt=Oe[0],nt=l.convert(T.format,T.colorSpace),ze=l.convert(T.type),mt=P(T.internalFormat,nt,ze,T.colorSpace),ot=T.isVideoTexture!==!0,Pt=pe.__version===void 0||fe===!0,G=ge.dataReady;let Pe=q(T,tt);ee(s.TEXTURE_CUBE_MAP,T);let le;if(pt){ot&&Pt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,mt,tt.width,tt.height);for(let me=0;me<6;me++){le=Oe[me].mipmaps;for(let Ie=0;Ie<le.length;Ie++){const Ne=le[Ie];T.format!==gi?nt!==null?ot?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Ne.width,Ne.height,nt,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,mt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Ne.width,Ne.height,nt,ze,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,mt,Ne.width,Ne.height,0,nt,ze,Ne.data)}}}else{if(le=T.mipmaps,ot&&Pt){le.length>0&&Pe++;const me=Ge(Oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,mt,me.width,me.height)}for(let me=0;me<6;me++)if(Me){ot?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Oe[me].width,Oe[me].height,nt,ze,Oe[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,mt,Oe[me].width,Oe[me].height,0,nt,ze,Oe[me].data);for(let Ie=0;Ie<le.length;Ie++){const at=le[Ie].image[me].image;ot?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,at.width,at.height,nt,ze,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,mt,at.width,at.height,0,nt,ze,at.data)}}else{ot?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,nt,ze,Oe[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,mt,nt,ze,Oe[me]);for(let Ie=0;Ie<le.length;Ie++){const Ne=le[Ie];ot?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,nt,ze,Ne.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,mt,nt,ze,Ne.image[me])}}}S(T)&&y(s.TEXTURE_CUBE_MAP),pe.__version=ge.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ye(N,T,J,fe,ge,pe){const We=l.convert(J.format,J.colorSpace),Re=l.convert(J.type),Fe=P(J.internalFormat,We,Re,J.colorSpace),pt=r.get(T),Me=r.get(J);if(Me.__renderTarget=T,!pt.__hasExternalTextures){const Oe=Math.max(1,T.width>>pe),tt=Math.max(1,T.height>>pe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,pe,Fe,Oe,tt,T.depth,0,We,Re,null):t.texImage2D(ge,pe,Fe,Oe,tt,0,We,Re,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),et(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ge,Me.__webglTexture,0,Ze(T)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,ge,Me.__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(N,T,J){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const fe=T.depthTexture,ge=fe&&fe.isDepthTexture?fe.type:null,pe=b(T.stencilBuffer,ge),We=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=Ze(T);et(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,pe,T.width,T.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,N)}else{const fe=T.textures;for(let ge=0;ge<fe.length;ge++){const pe=fe[ge],We=l.convert(pe.format,pe.colorSpace),Re=l.convert(pe.type),Fe=P(pe.internalFormat,We,Re,pe.colorSpace),pt=Ze(T);J&&et(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Fe,T.width,T.height):et(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(T.depthTexture);fe.__renderTarget=T,(!fe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ge=fe.__webglTexture,pe=Ze(T);if(T.depthTexture.format===Qs)et(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(T.depthTexture.format===ro)et(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Le(N){const T=r.get(N),J=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const fe=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",ge)};fe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=fe}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,N)}else if(J){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=s.createRenderbuffer(),_e(T.__webglDepthbuffer[fe],N,!1);else{const ge=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),_e(T.__webglDepthbuffer,N,!1);else{const fe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(N,T,J){const fe=r.get(N);T!==void 0&&ye(fe.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Le(N)}function ut(N){const T=N.texture,J=r.get(N),fe=r.get(T);N.addEventListener("dispose",k);const ge=N.textures,pe=N.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=T.version,u.memory.textures++),pe){J.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Re]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)J.__webglFramebuffer[Re][Fe]=s.createFramebuffer()}else J.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)J.__webglFramebuffer[Re]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(We)for(let Re=0,Fe=ge.length;Re<Fe;Re++){const pt=r.get(ge[Re]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&et(N)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Re=0;Re<ge.length;Re++){const Fe=ge[Re];J.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Re]);const pt=l.convert(Fe.format,Fe.colorSpace),Me=l.convert(Fe.type),Oe=P(Fe.internalFormat,pt,Me,Fe.colorSpace,N.isXRRenderTarget===!0),tt=Ze(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Oe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,J.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),ee(s.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ye(J.__webglFramebuffer[Re][Fe],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Fe);else ye(J.__webglFramebuffer[Re],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(T)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Re=0,Fe=ge.length;Re<Fe;Re++){const pt=ge[Re],Me=r.get(pt);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ee(s.TEXTURE_2D,pt),ye(J.__webglFramebuffer,N,pt,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),S(pt)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let Re=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,fe.__webglTexture),ee(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ye(J.__webglFramebuffer[Fe],N,T,s.COLOR_ATTACHMENT0,Re,Fe);else ye(J.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,Re,0);S(T)&&y(Re),t.unbindTexture()}N.depthBuffer&&Le(N)}function Ke(N){const T=N.textures;for(let J=0,fe=T.length;J<fe;J++){const ge=T[J];if(S(ge)){const pe=L(N),We=r.get(ge).__webglTexture;t.bindTexture(pe,We),y(pe),t.unbindTexture()}}}const _t=[],V=[];function vt(N){if(N.samples>0){if(et(N)===!1){const T=N.textures,J=N.width,fe=N.height;let ge=s.COLOR_BUFFER_BIT;const pe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(N),Re=T.length>1;if(Re)for(let Fe=0;Fe<T.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const pt=r.get(T[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,J,fe,0,0,J,fe,ge,s.NEAREST),f===!0&&(_t.length=0,V.length=0,_t.push(s.COLOR_ATTACHMENT0+Fe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(_t.push(pe),V.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Fe=0;Fe<T.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const pt=r.get(T[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,pt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&f){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ze(N){return Math.min(a.maxSamples,N.samples)}function et(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(N){const T=u.render.frame;m.get(N)!==T&&(m.set(N,T),N.update())}function xt(N,T){const J=N.colorSpace,fe=N.format,ge=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==oo&&J!==br&&(At.getTransfer(J)===Dt?(fe!==gi||ge!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function Ge(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=te,this.setTexture2D=he,this.setTexture2DArray=ce,this.setTexture3D=ie,this.setTextureCube=O,this.rebindTextures=be,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=et}function Bw(s,e){function t(r,a=br){let l;const u=At.getTransfer(a);if(r===Qi)return s.UNSIGNED_BYTE;if(r===Ef)return s.UNSIGNED_SHORT_4_4_4_4;if(r===wf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Xg)return s.BYTE;if(r===Yg)return s.SHORT;if(r===ia)return s.UNSIGNED_SHORT;if(r===Mf)return s.INT;if(r===rs)return s.UNSIGNED_INT;if(r===qi)return s.FLOAT;if(r===sa)return s.HALF_FLOAT;if(r===$g)return s.ALPHA;if(r===Kg)return s.RGB;if(r===gi)return s.RGBA;if(r===Zg)return s.LUMINANCE;if(r===Qg)return s.LUMINANCE_ALPHA;if(r===Qs)return s.DEPTH_COMPONENT;if(r===ro)return s.DEPTH_STENCIL;if(r===Jg)return s.RED;if(r===Tf)return s.RED_INTEGER;if(r===e0)return s.RG;if(r===Af)return s.RG_INTEGER;if(r===bf)return s.RGBA_INTEGER;if(r===Gl||r===Wl||r===jl||r===Xl)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Gl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Gl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hd||r===Vd||r===Gd||r===Wd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Hd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Xd||r===Yd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===jd||r===Xd)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Yd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qd||r===$d||r===Kd||r===Zd||r===Qd||r===Jd||r===ef||r===tf||r===nf||r===rf||r===sf||r===of||r===af||r===lf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$d)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ef)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===tf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===of)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===af)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yl||r===cf||r===uf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Yl)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===t0||r===df||r===ff||r===hf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Yl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===df)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ff)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===io?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class Hw extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jo extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vw={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),y=this._getHandJoint(p,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,M=.005;p.inputState.pinching&&v>x+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=x-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Vw)))}return d!==null&&(d.visible=a!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Jo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Gw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ww=`
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

}`;class jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new kn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Pr({vertexShader:Gw,fragmentShader:Ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jn(new la(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xw extends as{constructor(e,t){super();const r=this;let a=null,l=1,u=null,d="local-floor",f=1,p=null,m=null,g=null,v=null,x=null,M=null;const E=new jw,S=t.getContextAttributes();let y=null,L=null;const P=[],b=[],q=new ct;let F=null;const k=new Wn;k.viewport=new jt;const W=new Wn;W.viewport=new jt;const D=[k,W],R=new Hw;let B=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=P[Z];return de===void 0&&(de=new yd,P[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=P[Z];return de===void 0&&(de=new yd,P[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=P[Z];return de===void 0&&(de=new yd,P[Z]=de),de.getHandSpace()};function Y(Z){const de=b.indexOf(Z.inputSource);if(de===-1)return;const ye=P[de];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,p||u),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ue(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",he);for(let Z=0;Z<P.length;Z++){const de=b[Z];de!==null&&(b[Z]=null,P[Z].disconnect(de))}B=null,te=null,E.reset(),e.setRenderTarget(y),x=null,v=null,g=null,a=null,L=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(q),a.renderState.layers===void 0){const de={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new ss(x.framebufferWidth,x.framebufferHeight,{format:gi,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let de=null,ye=null,_e=null;S.depth&&(_e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=S.stencil?ro:Qs,ye=S.stencil?io:rs);const Ae={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};g=new XRWebGLBinding(a,t),v=g.createProjectionLayer(Ae),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new ss(v.textureWidth,v.textureHeight,{format:gi,type:Qi,depthTexture:new m0(v.textureWidth,v.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await a.requestReferenceSpace(d),Ce.setContext(a),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function he(Z){for(let de=0;de<Z.removed.length;de++){const ye=Z.removed[de],_e=b.indexOf(ye);_e>=0&&(b[_e]=null,P[_e].disconnect(ye))}for(let de=0;de<Z.added.length;de++){const ye=Z.added[de];let _e=b.indexOf(ye);if(_e===-1){for(let Le=0;Le<P.length;Le++)if(Le>=b.length){b.push(ye),_e=Le;break}else if(b[Le]===null){b[Le]=ye,_e=Le;break}if(_e===-1)break}const Ae=P[_e];Ae&&Ae.connect(ye)}}const ce=new K,ie=new K;function O(Z,de,ye){ce.setFromMatrixPosition(de.matrixWorld),ie.setFromMatrixPosition(ye.matrixWorld);const _e=ce.distanceTo(ie),Ae=de.projectionMatrix.elements,Le=ye.projectionMatrix.elements,be=Ae[14]/(Ae[10]-1),ut=Ae[14]/(Ae[10]+1),Ke=(Ae[9]+1)/Ae[5],_t=(Ae[9]-1)/Ae[5],V=(Ae[8]-1)/Ae[0],vt=(Le[8]+1)/Le[0],Ze=be*V,et=be*vt,qe=_e/(-V+vt),xt=qe*-V;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xt),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ge=be+qe,N=ut+qe,T=Ze-xt,J=et+(_e-xt),fe=Ke*ut/N*Ge,ge=_t*ut/N*Ge;Z.projectionMatrix.makePerspective(T,J,fe,ge,Ge,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let de=Z.near,ye=Z.far;E.texture!==null&&(E.depthNear>0&&(de=E.depthNear),E.depthFar>0&&(ye=E.depthFar)),R.near=W.near=k.near=de,R.far=W.far=k.far=ye,(B!==R.near||te!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,te=R.far),k.layers.mask=Z.layers.mask|2,W.layers.mask=Z.layers.mask|4,R.layers.mask=k.layers.mask|W.layers.mask;const _e=Z.parent,Ae=R.cameras;ae(R,_e);for(let Le=0;Le<Ae.length;Le++)ae(Ae[Le],_e);Ae.length===2?O(R,k,W):R.projectionMatrix.copy(k.projectionMatrix),ne(Z,R,_e)};function ne(Z,de,ye){ye===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=pf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(Z){f=Z,v!==null&&(v.fixedFoveation=Z),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let U=null;function ee(Z,de){if(m=de.getViewerPose(p||u),M=de,m!==null){const ye=m.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let _e=!1;ye.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let Le=0;Le<ye.length;Le++){const be=ye[Le];let ut=null;if(x!==null)ut=x.getViewport(be);else{const _t=g.getViewSubImage(v,be);ut=_t.viewport,Le===0&&(e.setRenderTargetTextures(L,_t.colorTexture,v.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(L))}let Ke=D[Le];Ke===void 0&&(Ke=new Wn,Ke.layers.enable(Le),Ke.viewport=new jt,D[Le]=Ke),Ke.matrix.fromArray(be.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(be.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ut.x,ut.y,ut.width,ut.height),Le===0&&(R.matrix.copy(Ke.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_e===!0&&R.cameras.push(Ke)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=g.getDepthInformation(ye[0]);Le&&Le.isValid&&Le.texture&&E.init(e,Le,a.renderState)}}for(let ye=0;ye<P.length;ye++){const _e=b[ye],Ae=P[ye];_e!==null&&Ae!==void 0&&Ae.update(_e,de,p||u)}U&&U(Z,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ce=new h0;Ce.setAnimationLoop(ee),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const Kr=new Ri,Yw=new Ht;function qw(s,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,u0(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,L,P,b){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,b)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),E(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?f(S,y,L,P):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Fn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Fn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),P=L.envMap,b=L.envMapRotation;P&&(S.envMap.value=P,Kr.copy(b),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),S.envMapRotation.value.setFromMatrix4(Yw.makeRotationFromEuler(Kr)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function f(S,y,L,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Fn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function $w(s,e,t,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,P){const b=P.program;r.uniformBlockBinding(L,b)}function p(L,P){let b=a[L.id];b===void 0&&(M(L),b=m(L),a[L.id]=b,L.addEventListener("dispose",S));const q=P.program;r.updateUBOMapping(L,q);const F=e.render.frame;l[L.id]!==F&&(v(L),l[L.id]=F)}function m(L){const P=g();L.__bindingPointIndex=P;const b=s.createBuffer(),q=L.__size,F=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,q,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,b),b}function g(){for(let L=0;L<d;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const P=a[L.id],b=L.uniforms,q=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,k=b.length;F<k;F++){const W=Array.isArray(b[F])?b[F]:[b[F]];for(let D=0,R=W.length;D<R;D++){const B=W[D];if(x(B,F,D,q)===!0){const te=B.__offset,Y=Array.isArray(B.value)?B.value:[B.value];let ue=0;for(let he=0;he<Y.length;he++){const ce=Y[he],ie=E(ce);typeof ce=="number"||typeof ce=="boolean"?(B.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,te+ue,B.__data)):ce.isMatrix3?(B.__data[0]=ce.elements[0],B.__data[1]=ce.elements[1],B.__data[2]=ce.elements[2],B.__data[3]=0,B.__data[4]=ce.elements[3],B.__data[5]=ce.elements[4],B.__data[6]=ce.elements[5],B.__data[7]=0,B.__data[8]=ce.elements[6],B.__data[9]=ce.elements[7],B.__data[10]=ce.elements[8],B.__data[11]=0):(ce.toArray(B.__data,ue),ue+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(L,P,b,q){const F=L.value,k=P+"_"+b;if(q[k]===void 0)return typeof F=="number"||typeof F=="boolean"?q[k]=F:q[k]=F.clone(),!0;{const W=q[k];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return q[k]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function M(L){const P=L.uniforms;let b=0;const q=16;for(let k=0,W=P.length;k<W;k++){const D=Array.isArray(P[k])?P[k]:[P[k]];for(let R=0,B=D.length;R<B;R++){const te=D[R],Y=Array.isArray(te.value)?te.value:[te.value];for(let ue=0,he=Y.length;ue<he;ue++){const ce=Y[ue],ie=E(ce),O=b%q,ae=O%ie.boundary,ne=O+ae;b+=ae,ne!==0&&q-ne<ie.storage&&(b+=q-ne),te.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=b,b+=ie.storage}}}const F=b%q;return F>0&&(b+=q-F),L.__size=b,L.__cache={},this}function E(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function S(L){const P=L.target;P.removeEventListener("dispose",S);const b=u.indexOf(P.__bindingPointIndex);u.splice(b,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function y(){for(const L in a)s.deleteBuffer(a[L]);u=[],a={},l={}}return{bind:f,update:p,dispose:y}}class Kw{constructor(e={}){const{canvas:t=Oy(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=Ki,this.toneMappingExposure=1;const b=this;let q=!1,F=0,k=0,W=null,D=-1,R=null;const B=new jt,te=new jt;let Y=null;const ue=new Mt(0);let he=0,ce=t.width,ie=t.height,O=1,ae=null,ne=null;const U=new jt(0,0,ce,ie),ee=new jt(0,0,ce,ie);let Ce=!1;const Z=new Rf;let de=!1,ye=!1;const _e=new Ht,Ae=new Ht,Le=new K,be=new jt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function _t(){return W===null?O:1}let V=r;function vt(C,j){return t.getContext(C,j)}try{const C={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yf}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),V===null){const j="webgl2";if(V=vt(j,C),V===null)throw vt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ze,et,qe,xt,Ge,N,T,J,fe,ge,pe,We,Re,Fe,pt,Me,Oe,tt,nt,ze,mt,ot,Pt,G;function Pe(){Ze=new tE(V),Ze.init(),ot=new Bw(V,Ze),et=new $1(V,Ze,e,ot),qe=new kw(V,Ze),et.reverseDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),xt=new rE(V),Ge=new Mw,N=new zw(V,Ze,qe,Ge,et,ot,xt),T=new Z1(b),J=new eE(b),fe=new dS(V),Pt=new Y1(V,fe),ge=new nE(V,fe,xt,Pt),pe=new oE(V,ge,fe,xt),nt=new sE(V,et,N),Me=new K1(Ge),We=new Sw(b,T,J,Ze,et,Pt,Me),Re=new qw(b,Ge),Fe=new ww,pt=new Pw(Ze),tt=new X1(b,T,J,qe,pe,x,f),Oe=new Uw(b,pe,et),G=new $w(V,xt,et,qe),ze=new q1(V,Ze,xt),mt=new iE(V,Ze,xt),xt.programs=We.programs,b.capabilities=et,b.extensions=Ze,b.properties=Ge,b.renderLists=Fe,b.shadowMap=Oe,b.state=qe,b.info=xt}Pe();const le=new Xw(b,V);this.xr=le,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(ce,ie,!1))},this.getSize=function(C){return C.set(ce,ie)},this.setSize=function(C,j,se=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,ie=j,t.width=Math.floor(C*O),t.height=Math.floor(j*O),se===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(ce*O,ie*O).floor()},this.setDrawingBufferSize=function(C,j,se){ce=C,ie=j,O=se,t.width=Math.floor(C*se),t.height=Math.floor(j*se),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,j,se,oe){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,j,se,oe),qe.viewport(B.copy(U).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(ee)},this.setScissor=function(C,j,se,oe){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,j,se,oe),qe.scissor(te.copy(ee).multiplyScalar(O).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(C){qe.setScissorTest(Ce=C)},this.setOpaqueSort=function(C){ae=C},this.setTransparentSort=function(C){ne=C},this.getClearColor=function(C){return C.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(C=!0,j=!0,se=!0){let oe=0;if(C){let X=!1;if(W!==null){const Te=W.texture.format;X=Te===bf||Te===Af||Te===Tf}if(X){const Te=W.texture.type,Ee=Te===Qi||Te===rs||Te===ia||Te===io||Te===Ef||Te===wf,je=tt.getClearColor(),He=tt.getClearAlpha(),it=je.r,st=je.g,Xe=je.b;Ee?(M[0]=it,M[1]=st,M[2]=Xe,M[3]=He,V.clearBufferuiv(V.COLOR,0,M)):(E[0]=it,E[1]=st,E[2]=Xe,E[3]=He,V.clearBufferiv(V.COLOR,0,E))}else oe|=V.COLOR_BUFFER_BIT}j&&(oe|=V.DEPTH_BUFFER_BIT),se&&(oe|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),pt.dispose(),Ge.dispose(),T.dispose(),J.dispose(),pe.dispose(),Pt.dispose(),G.dispose(),We.dispose(),le.dispose(),le.removeEventListener("sessionstart",ls),le.removeEventListener("sessionend",Ji),Pi.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const C=xt.autoReset,j=Oe.enabled,se=Oe.autoUpdate,oe=Oe.needsUpdate,X=Oe.type;Pe(),xt.autoReset=C,Oe.enabled=j,Oe.autoUpdate=se,Oe.needsUpdate=oe,Oe.type=X}function Ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function at(C){const j=C.target;j.removeEventListener("dispose",at),kt(j)}function kt(C){$t(C),Ge.remove(C)}function $t(C){const j=Ge.get(C).programs;j!==void 0&&(j.forEach(function(se){We.releaseProgram(se)}),C.isShaderMaterial&&We.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,se,oe,X,Te){j===null&&(j=ut);const Ee=X.isMesh&&X.matrixWorld.determinant()<0,je=da(C,j,se,oe,X);qe.setMaterial(oe,Ee);let He=se.index,it=1;if(oe.wireframe===!0){if(He=ge.getWireframeAttribute(se),He===void 0)return;it=2}const st=se.drawRange,Xe=se.attributes.position;let St=st.start*it,Rt=(st.start+st.count)*it;Te!==null&&(St=Math.max(St,Te.start*it),Rt=Math.min(Rt,(Te.start+Te.count)*it)),He!==null?(St=Math.max(St,0),Rt=Math.min(Rt,He.count)):Xe!=null&&(St=Math.max(St,0),Rt=Math.min(Rt,Xe.count));const yt=Rt-St;if(yt<0||yt===1/0)return;Pt.setup(X,oe,je,se,He);let dn,dt=ze;if(He!==null&&(dn=fe.get(He),dt=mt,dt.setIndex(dn)),X.isMesh)oe.wireframe===!0?(qe.setLineWidth(oe.wireframeLinewidth*_t()),dt.setMode(V.LINES)):dt.setMode(V.TRIANGLES);else if(X.isLine){let $e=oe.linewidth;$e===void 0&&($e=1),qe.setLineWidth($e*_t()),X.isLineSegments?dt.setMode(V.LINES):X.isLineLoop?dt.setMode(V.LINE_LOOP):dt.setMode(V.LINE_STRIP)}else X.isPoints?dt.setMode(V.POINTS):X.isSprite&&dt.setMode(V.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)dt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const $e=X._multiDrawStarts,si=X._multiDrawCounts,bt=X._multiDrawCount,fn=He?fe.get(He).bytesPerElement:1,oi=Ge.get(oe).currentProgram.getUniforms();for(let Kt=0;Kt<bt;Kt++)oi.setValue(V,"_gl_DrawID",Kt),dt.render($e[Kt]/fn,si[Kt])}else if(X.isInstancedMesh)dt.renderInstances(St,yt,X.count);else if(se.isInstancedBufferGeometry){const $e=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,si=Math.min(se.instanceCount,$e);dt.renderInstances(St,yt,si)}else dt.render(St,yt)};function wt(C,j,se){C.transparent===!0&&C.side===Ai&&C.forceSinglePass===!1?(C.side=Fn,C.needsUpdate=!0,cs(C,j,se),C.side=Rr,C.needsUpdate=!0,cs(C,j,se),C.side=Ai):cs(C,j,se)}this.compile=function(C,j,se=null){se===null&&(se=C),y=pt.get(se),y.init(j),P.push(y),se.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),C!==se&&C.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const oe=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Te=X.material;if(Te)if(Array.isArray(Te))for(let Ee=0;Ee<Te.length;Ee++){const je=Te[Ee];wt(je,se,X),oe.add(je)}else wt(Te,se,X),oe.add(Te)}),P.pop(),y=null,oe},this.compileAsync=function(C,j,se=null){const oe=this.compile(C,j,se);return new Promise(X=>{function Te(){if(oe.forEach(function(Ee){Ge.get(Ee).currentProgram.isReady()&&oe.delete(Ee)}),oe.size===0){X(C);return}setTimeout(Te,10)}Ze.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let An=null;function xn(C){An&&An(C)}function ls(){Pi.stop()}function Ji(){Pi.start()}const Pi=new h0;Pi.setAnimationLoop(xn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(C){An=C,le.setAnimationLoop(C),C===null?Pi.stop():Pi.start()},le.addEventListener("sessionstart",ls),le.addEventListener("sessionend",Ji),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(j),j=le.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,j,W),y=pt.get(C,P.length),y.init(j),P.push(y),Ae.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),ye=this.localClippingEnabled,de=Me.init(this.clippingPlanes,ye),S=Fe.get(C,L.length),S.init(),L.push(S),le.enabled===!0&&le.isPresenting===!0){const Te=b.xr.getDepthSensingMesh();Te!==null&&Li(Te,j,-1/0,b.sortObjects)}Li(C,j,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(ae,ne),Ke=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ke&&tt.addToRenderList(S,C),this.info.render.frame++,de===!0&&Me.beginShadows();const se=y.state.shadowsArray;Oe.render(se,C,j),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=S.opaque,X=S.transmissive;if(y.setupLights(),j.isArrayCamera){const Te=j.cameras;if(X.length>0)for(let Ee=0,je=Te.length;Ee<je;Ee++){const He=Te[Ee];Dr(oe,X,C,He)}Ke&&tt.render(C);for(let Ee=0,je=Te.length;Ee<je;Ee++){const He=Te[Ee];Lr(S,C,He,He.viewport)}}else X.length>0&&Dr(oe,X,C,j),Ke&&tt.render(C),Lr(S,C,j);W!==null&&(N.updateMultisampleRenderTarget(W),N.updateRenderTargetMipmap(W)),C.isScene===!0&&C.onAfterRender(b,C,j),Pt.resetDefaultState(),D=-1,R=null,P.pop(),P.length>0?(y=P[P.length-1],de===!0&&Me.setGlobalState(b.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Li(C,j,se,oe){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){oe&&be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const Ee=pe.update(C),je=C.material;je.visible&&S.push(C,Ee,je,se,be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const Ee=pe.update(C),je=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),be.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),be.copy(Ee.boundingSphere.center)),be.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(je)){const He=Ee.groups;for(let it=0,st=He.length;it<st;it++){const Xe=He[it],St=je[Xe.materialIndex];St&&St.visible&&S.push(C,Ee,St,se,be.z,Xe)}}else je.visible&&S.push(C,Ee,je,se,be.z,null)}}const Te=C.children;for(let Ee=0,je=Te.length;Ee<je;Ee++)Li(Te[Ee],j,se,oe)}function Lr(C,j,se,oe){const X=C.opaque,Te=C.transmissive,Ee=C.transparent;y.setupLightsView(se),de===!0&&Me.setGlobalState(b.clippingPlanes,se),oe&&qe.viewport(B.copy(oe)),X.length>0&&er(X,j,se),Te.length>0&&er(Te,j,se),Ee.length>0&&er(Ee,j,se),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Dr(C,j,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[oe.id]===void 0&&(y.state.transmissionRenderTarget[oe.id]=new ss(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?sa:Qi,minFilter:is,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Te=y.state.transmissionRenderTarget[oe.id],Ee=oe.viewport||B;Te.setSize(Ee.z,Ee.w);const je=b.getRenderTarget();b.setRenderTarget(Te),b.getClearColor(ue),he=b.getClearAlpha(),he<1&&b.setClearColor(16777215,.5),b.clear(),Ke&&tt.render(se);const He=b.toneMapping;b.toneMapping=Ki;const it=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),y.setupLightsView(oe),de===!0&&Me.setGlobalState(b.clippingPlanes,oe),er(C,se,oe),N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Xe=0,St=j.length;Xe<St;Xe++){const Rt=j[Xe],yt=Rt.object,dn=Rt.geometry,dt=Rt.material,$e=Rt.group;if(dt.side===Ai&&yt.layers.test(oe.layers)){const si=dt.side;dt.side=Fn,dt.needsUpdate=!0,ca(yt,se,oe,dn,dt,$e),dt.side=si,dt.needsUpdate=!0,st=!0}}st===!0&&(N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te))}b.setRenderTarget(je),b.setClearColor(ue,he),it!==void 0&&(oe.viewport=it),b.toneMapping=He}function er(C,j,se){const oe=j.isScene===!0?j.overrideMaterial:null;for(let X=0,Te=C.length;X<Te;X++){const Ee=C[X],je=Ee.object,He=Ee.geometry,it=oe===null?Ee.material:oe,st=Ee.group;je.layers.test(se.layers)&&ca(je,j,se,He,it,st)}}function ca(C,j,se,oe,X,Te){C.onBeforeRender(b,j,se,oe,X,Te),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(b,j,se,oe,C,Te),X.transparent===!0&&X.side===Ai&&X.forceSinglePass===!1?(X.side=Fn,X.needsUpdate=!0,b.renderBufferDirect(se,j,oe,X,C,Te),X.side=Rr,X.needsUpdate=!0,b.renderBufferDirect(se,j,oe,X,C,Te),X.side=Ai):b.renderBufferDirect(se,j,oe,X,C,Te),C.onAfterRender(b,j,se,oe,X,Te)}function cs(C,j,se){j.isScene!==!0&&(j=ut);const oe=Ge.get(C),X=y.state.lights,Te=y.state.shadowsArray,Ee=X.state.version,je=We.getParameters(C,X.state,Te,j,se),He=We.getProgramCacheKey(je);let it=oe.programs;oe.environment=C.isMeshStandardMaterial?j.environment:null,oe.fog=j.fog,oe.envMap=(C.isMeshStandardMaterial?J:T).get(C.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,it===void 0&&(C.addEventListener("dispose",at),it=new Map,oe.programs=it);let st=it.get(He);if(st!==void 0){if(oe.currentProgram===st&&oe.lightsStateVersion===Ee)return vi(C,je),st}else je.uniforms=We.getUniforms(C),C.onBeforeCompile(je,b),st=We.acquireProgram(je,He),it.set(He,st),oe.uniforms=je.uniforms;const Xe=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=Me.uniform),vi(C,je),oe.needsLights=sc(C),oe.lightsStateVersion=Ee,oe.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),oe.currentProgram=st,oe.uniformsList=null,st}function ua(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=ql.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function vi(C,j){const se=Ge.get(C);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function da(C,j,se,oe,X){j.isScene!==!0&&(j=ut),N.resetTextureUnits();const Te=j.fog,Ee=oe.isMeshStandardMaterial?j.environment:null,je=W===null?b.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:oo,He=(oe.isMeshStandardMaterial?J:T).get(oe.envMap||Ee),it=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,st=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Xe=!!se.morphAttributes.position,St=!!se.morphAttributes.normal,Rt=!!se.morphAttributes.color;let yt=Ki;oe.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(yt=b.toneMapping);const dn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,dt=dn!==void 0?dn.length:0,$e=Ge.get(oe),si=y.state.lights;if(de===!0&&(ye===!0||C!==R)){const yn=C===R&&oe.id===D;Me.setState(oe,C,yn)}let bt=!1;oe.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==si.state.version||$e.outputColorSpace!==je||X.isBatchedMesh&&$e.batching===!1||!X.isBatchedMesh&&$e.batching===!0||X.isBatchedMesh&&$e.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&$e.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&$e.instancing===!1||!X.isInstancedMesh&&$e.instancing===!0||X.isSkinnedMesh&&$e.skinning===!1||!X.isSkinnedMesh&&$e.skinning===!0||X.isInstancedMesh&&$e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&$e.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&$e.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&$e.instancingMorph===!1&&X.morphTexture!==null||$e.envMap!==He||oe.fog===!0&&$e.fog!==Te||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Me.numPlanes||$e.numIntersection!==Me.numIntersection)||$e.vertexAlphas!==it||$e.vertexTangents!==st||$e.morphTargets!==Xe||$e.morphNormals!==St||$e.morphColors!==Rt||$e.toneMapping!==yt||$e.morphTargetsCount!==dt)&&(bt=!0):(bt=!0,$e.__version=oe.version);let fn=$e.currentProgram;bt===!0&&(fn=cs(oe,j,X));let oi=!1,Kt=!1,xi=!1;const It=fn.getUniforms(),Xn=$e.uniforms;if(qe.useProgram(fn.program)&&(oi=!0,Kt=!0,xi=!0),oe.id!==D&&(D=oe.id,Kt=!0),oi||R!==C){qe.buffers.depth.getReversed()?(_e.copy(C.projectionMatrix),By(_e),Hy(_e),It.setValue(V,"projectionMatrix",_e)):It.setValue(V,"projectionMatrix",C.projectionMatrix),It.setValue(V,"viewMatrix",C.matrixWorldInverse);const Yn=It.map.cameraPosition;Yn!==void 0&&Yn.setValue(V,Le.setFromMatrixPosition(C.matrixWorld)),et.logarithmicDepthBuffer&&It.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&It.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Kt=!0,xi=!0)}if(X.isSkinnedMesh){It.setOptional(V,X,"bindMatrix"),It.setOptional(V,X,"bindMatrixInverse");const yn=X.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),It.setValue(V,"boneTexture",yn.boneTexture,N))}X.isBatchedMesh&&(It.setOptional(V,X,"batchingTexture"),It.setValue(V,"batchingTexture",X._matricesTexture,N),It.setOptional(V,X,"batchingIdTexture"),It.setValue(V,"batchingIdTexture",X._indirectTexture,N),It.setOptional(V,X,"batchingColorTexture"),X._colorsTexture!==null&&It.setValue(V,"batchingColorTexture",X._colorsTexture,N));const Di=se.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&nt.update(X,se,fn),(Kt||$e.receiveShadow!==X.receiveShadow)&&($e.receiveShadow=X.receiveShadow,It.setValue(V,"receiveShadow",X.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Xn.envMap.value=He,Xn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&j.environment!==null&&(Xn.envMapIntensity.value=j.environmentIntensity),Kt&&(It.setValue(V,"toneMappingExposure",b.toneMappingExposure),$e.needsLights&&fa(Xn,xi),Te&&oe.fog===!0&&Re.refreshFogUniforms(Xn,Te),Re.refreshMaterialUniforms(Xn,oe,O,ie,y.state.transmissionRenderTarget[C.id]),ql.upload(V,ua($e),Xn,N)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(ql.upload(V,ua($e),Xn,N),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&It.setValue(V,"center",X.center),It.setValue(V,"modelViewMatrix",X.modelViewMatrix),It.setValue(V,"normalMatrix",X.normalMatrix),It.setValue(V,"modelMatrix",X.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const yn=oe.uniformsGroups;for(let Yn=0,bn=yn.length;Yn<bn;Yn++){const ha=yn[Yn];G.update(ha,fn),G.bind(ha,fn)}}return fn}function fa(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function sc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,j,se){Ge.get(C.texture).__webglTexture=j,Ge.get(C.depthTexture).__webglTexture=se;const oe=Ge.get(C);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const se=Ge.get(C);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,se=0){W=C,F=j,k=se;let oe=!0,X=null,Te=!1,Ee=!1;if(C){const He=Ge.get(C);if(He.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(V.FRAMEBUFFER,null),oe=!1;else if(He.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(He.__hasExternalTextures)N.rebindTextures(C,Ge.get(C.texture).__webglTexture,Ge.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Xe=C.depthTexture;if(He.__boundDepthTexture!==Xe){if(Xe!==null&&Ge.has(Xe)&&(C.width!==Xe.image.width||C.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ee=!0);const st=Ge.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[j])?X=st[j][se]:X=st[j],Te=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?X=Ge.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?X=st[se]:X=st,B.copy(C.viewport),te.copy(C.scissor),Y=C.scissorTest}else B.copy(U).multiplyScalar(O).floor(),te.copy(ee).multiplyScalar(O).floor(),Y=Ce;if(qe.bindFramebuffer(V.FRAMEBUFFER,X)&&oe&&qe.drawBuffers(C,X),qe.viewport(B),qe.scissor(te),qe.setScissorTest(Y),Te){const He=Ge.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,He.__webglTexture,se)}else if(Ee){const He=Ge.get(C.texture),it=j||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,He.__webglTexture,se||0,it)}D=-1},this.readRenderTargetPixels=function(C,j,se,oe,X,Te,Ee){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ge.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(je=je[Ee]),je){qe.bindFramebuffer(V.FRAMEBUFFER,je);try{const He=C.texture,it=He.format,st=He.type;if(!et.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-oe&&se>=0&&se<=C.height-X&&V.readPixels(j,se,oe,X,ot.convert(it),ot.convert(st),Te)}finally{const He=W!==null?Ge.get(W).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(C,j,se,oe,X,Te,Ee){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Ge.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(je=je[Ee]),je){const He=C.texture,it=He.format,st=He.type;if(!et.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-oe&&se>=0&&se<=C.height-X){qe.bindFramebuffer(V.FRAMEBUFFER,je);const Xe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Xe),V.bufferData(V.PIXEL_PACK_BUFFER,Te.byteLength,V.STREAM_READ),V.readPixels(j,se,oe,X,ot.convert(it),ot.convert(st),0);const St=W!==null?Ge.get(W).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,St);const Rt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await zy(V,Rt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Xe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Te),V.deleteBuffer(Xe),V.deleteSync(Rt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,se=0){C.isTexture!==!0&&(Zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const oe=Math.pow(2,-se),X=Math.floor(C.image.width*oe),Te=Math.floor(C.image.height*oe),Ee=j!==null?j.x:0,je=j!==null?j.y:0;N.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,se,0,0,Ee,je,X,Te),qe.unbindTexture()},this.copyTextureToTexture=function(C,j,se=null,oe=null,X=0){C.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,C=arguments[1],j=arguments[2],X=arguments[3]||0,se=null);let Te,Ee,je,He,it,st,Xe,St,Rt;const yt=C.isCompressedTexture?C.mipmaps[X]:C.image;se!==null?(Te=se.max.x-se.min.x,Ee=se.max.y-se.min.y,je=se.isBox3?se.max.z-se.min.z:1,He=se.min.x,it=se.min.y,st=se.isBox3?se.min.z:0):(Te=yt.width,Ee=yt.height,je=yt.depth||1,He=0,it=0,st=0),oe!==null?(Xe=oe.x,St=oe.y,Rt=oe.z):(Xe=0,St=0,Rt=0);const dn=ot.convert(j.format),dt=ot.convert(j.type);let $e;j.isData3DTexture?(N.setTexture3D(j,0),$e=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(N.setTexture2DArray(j,0),$e=V.TEXTURE_2D_ARRAY):(N.setTexture2D(j,0),$e=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const si=V.getParameter(V.UNPACK_ROW_LENGTH),bt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),fn=V.getParameter(V.UNPACK_SKIP_PIXELS),oi=V.getParameter(V.UNPACK_SKIP_ROWS),Kt=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,yt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,He),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,st);const xi=C.isDataArrayTexture||C.isData3DTexture,It=j.isDataArrayTexture||j.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Xn=Ge.get(C),Di=Ge.get(j),yn=Ge.get(Xn.__renderTarget),Yn=Ge.get(Di.__renderTarget);qe.bindFramebuffer(V.READ_FRAMEBUFFER,yn.__webglFramebuffer),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let bn=0;bn<je;bn++)xi&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ge.get(C).__webglTexture,X,st+bn),C.isDepthTexture?(It&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ge.get(j).__webglTexture,X,Rt+bn),V.blitFramebuffer(He,it,Te,Ee,Xe,St,Te,Ee,V.DEPTH_BUFFER_BIT,V.NEAREST)):It?V.copyTexSubImage3D($e,X,Xe,St,Rt+bn,He,it,Te,Ee):V.copyTexSubImage2D($e,X,Xe,St,Rt+bn,He,it,Te,Ee);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else It?C.isDataTexture||C.isData3DTexture?V.texSubImage3D($e,X,Xe,St,Rt,Te,Ee,je,dn,dt,yt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D($e,X,Xe,St,Rt,Te,Ee,je,dn,yt.data):V.texSubImage3D($e,X,Xe,St,Rt,Te,Ee,je,dn,dt,yt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,X,Xe,St,Te,Ee,dn,dt,yt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,X,Xe,St,yt.width,yt.height,dn,yt.data):V.texSubImage2D(V.TEXTURE_2D,X,Xe,St,Te,Ee,dn,dt,yt);V.pixelStorei(V.UNPACK_ROW_LENGTH,si),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,bt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,fn),V.pixelStorei(V.UNPACK_SKIP_ROWS,oi),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Kt),X===0&&j.generateMipmaps&&V.generateMipmap($e),qe.unbindTexture()},this.copyTextureToTexture3D=function(C,j,se=null,oe=null,X=0){return C.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,C=arguments[2],j=arguments[3],X=arguments[4]||0),Zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,se,oe,X)},this.initRenderTarget=function(C){Ge.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),qe.unbindTexture()},this.resetState=function(){F=0,k=0,W=null,qe.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}class Lf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(e),this.density=t}clone(){return new Lf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zw extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Df extends ao{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ql=new K,Jl=new K,xg=new Ht,qo=new ic,Fl=new nc,Sd=new K,yg=new K;class Qw extends cn{constructor(e=new ri,t=new Df){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Ql.fromBufferAttribute(t,a-1),Jl.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Ql.distanceTo(Jl);e.setAttribute("lineDistance",new un(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(a),Fl.radius+=l,e.ray.intersectsSphere(Fl)===!1)return;xg.copy(a).invert(),qo.copy(e.ray).applyMatrix4(xg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=this.isLineSegments?2:1,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=p){const y=m.getX(E),L=m.getX(E+1),P=kl(this,e,qo,f,y,L);P&&t.push(P)}if(this.isLineLoop){const E=m.getX(M-1),S=m.getX(x),y=kl(this,e,qo,f,E,S);y&&t.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=p){const y=kl(this,e,qo,f,E,E+1);y&&t.push(y)}if(this.isLineLoop){const E=kl(this,e,qo,f,M-1,x);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function kl(s,e,t,r,a,l){const u=s.geometry.attributes.position;if(Ql.fromBufferAttribute(u,a),Jl.fromBufferAttribute(u,l),t.distanceSqToSegment(Ql,Jl,Sd,yg)>r)return;Sd.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(Sd);if(!(f<e.near||f>e.far))return{distance:f,point:yg.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Sg=new K,Mg=new K;class y0 extends Qw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)Sg.fromBufferAttribute(t,a),Mg.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Sg.distanceTo(Mg);e.setAttribute("lineDistance",new un(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nf extends ri{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],u=[],d=[],f=[],p=new K,m=new ct;u.push(0,0,0),d.push(0,0,1),f.push(.5,.5);for(let g=0,v=3;g<=t;g++,v+=3){const x=r+g/t*a;p.x=e*Math.cos(x),p.y=e*Math.sin(x),u.push(p.x,p.y,p.z),d.push(0,0,1),m.x=(u[v]/e+1)/2,m.y=(u[v+1]/e+1)/2,f.push(m.x,m.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new un(u,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Ol=new K,zl=new K,Md=new K,Bl=new ni;class Jw extends ri{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),l=Math.cos(na*t),u=e.getIndex(),d=e.getAttribute("position"),f=u?u.count:d.count,p=[0,0,0],m=["a","b","c"],g=new Array(3),v={},x=[];for(let M=0;M<f;M+=3){u?(p[0]=u.getX(M),p[1]=u.getX(M+1),p[2]=u.getX(M+2)):(p[0]=M,p[1]=M+1,p[2]=M+2);const{a:E,b:S,c:y}=Bl;if(E.fromBufferAttribute(d,p[0]),S.fromBufferAttribute(d,p[1]),y.fromBufferAttribute(d,p[2]),Bl.getNormal(Md),g[0]=`${Math.round(E.x*a)},${Math.round(E.y*a)},${Math.round(E.z*a)}`,g[1]=`${Math.round(S.x*a)},${Math.round(S.y*a)},${Math.round(S.z*a)}`,g[2]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let L=0;L<3;L++){const P=(L+1)%3,b=g[L],q=g[P],F=Bl[m[L]],k=Bl[m[P]],W=`${b}_${q}`,D=`${q}_${b}`;D in v&&v[D]?(Md.dot(v[D].normal)<=l&&(x.push(F.x,F.y,F.z),x.push(k.x,k.y,k.z)),v[D]=null):W in v||(v[W]={index0:p[L],index1:p[P],normal:Md.clone()})}}for(const M in v)if(v[M]){const{index0:E,index1:S}=v[M];Ol.fromBufferAttribute(d,E),zl.fromBufferAttribute(d,S),x.push(Ol.x,Ol.y,Ol.z),x.push(zl.x,zl.y,zl.z)}this.setAttribute("position",new un(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class eT extends ao{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=n0,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class S0 extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ed=new Ht,Eg=new K,wg=new K;class tT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rf,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eg),wg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wg),t.updateMatrixWorld(),Ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nT extends tT{constructor(){super(new p0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wd extends S0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new nT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iT extends S0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Tg=new Ht;class rT{constructor(e,t,r=0,a=1/0){this.ray=new ic(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new Cf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tg),this}intersectObject(e,t=!0,r=[]){return gf(e,this,r,t),r.sort(Ag),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)gf(e[a],this,r,t);return r.sort(Ag),r}}function Ag(s,e){return s.distance-e.distance}function gf(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)gf(l[u],e,t,!0)}}class bg{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sT extends y0{constructor(e=10,t=10,r=4473924,a=8947848){r=new Mt(r),a=new Mt(a);const l=t/2,u=e/t,d=e/2,f=[],p=[];for(let v=0,x=0,M=-d;v<=t;v++,M+=u){f.push(-d,0,M,d,0,M),f.push(M,0,-d,M,0,d);const E=v===l?r:a;E.toArray(p,x),x+=3,E.toArray(p,x),x+=3,E.toArray(p,x),x+=3,E.toArray(p,x),x+=3}const m=new ri;m.setAttribute("position",new un(f,3)),m.setAttribute("color",new un(p,3));const g=new Df({vertexColors:!0,toneMapped:!1});super(m,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class oT extends as{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yf);const Cg={type:"change"},If={type:"start"},M0={type:"end"},Hl=new ic,Rg=new Ar,aT=Math.cos(70*ky.DEG2RAD),Jt=new K,Un=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Td=1e-6;class lT extends oT{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new os,this._lastTargetPosition=new K,this._quat=new os().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bg,this._sphericalDelta=new bg,this._scale=1,this._panOffset=new K,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new K,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uT.bind(this),this._onPointerDown=cT.bind(this),this._onPointerUp=dT.bind(this),this._onContextMenu=vT.bind(this),this._onMouseWheel=pT.bind(this),this._onKeyDown=mT.bind(this),this._onTouchStart=gT.bind(this),this._onTouchMove=_T.bind(this),this._onMouseDown=fT.bind(this),this._onMouseMove=hT.bind(this),this._interceptControlDown=xT.bind(this),this._interceptControlUp=yT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cg),this.update(),this.state=Nt.NONE}update(e=null){const t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Un:r>Math.PI&&(r-=Un),a<-Math.PI?a+=Un:a>Math.PI&&(a-=Un),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=Jt.length();u=this._clampDistance(d*this._scale);const f=d-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Hl.origin.copy(this.object.position),Hl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hl.direction))<aT?this.object.lookAt(this.target):(Rg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hl.intersectPlane(Rg,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Td||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Td||this._lastTargetPosition.distanceToSquared(this.target)>Td?(this.dispatchEvent(Cg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Jt.copy(a).sub(this.target);let l=Jt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ct,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function cT(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function uT(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function dT(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(M0),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fT(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Nt.DOLLY;break;case Ks.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}break;case Ks.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(If)}function hT(s){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function pT(s){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(s.preventDefault(),this.dispatchEvent(If),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(M0))}function mT(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function gT(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Nt.TOUCH_ROTATE;break;case qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Nt.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(If)}function _T(s){switch(this._trackPointer(s),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Nt.NONE}}function vT(s){this.enabled!==!1&&s.preventDefault()}function xT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yT(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Vl=.1;function ST(s,e,t,r){var g,v;const a=new Jo,l=[],u=[],d=[],f=Vl/2;function p(x,M,E){var S,y;return x<0||x>=e||M<0||M>=t||E<0||E>=r?!1:((y=(S=s[M])==null?void 0:S[x])==null?void 0:y[E])!=="transparent"}for(let x=0;x<t;x++)for(let M=0;M<e;M++)for(let E=0;E<r;E++){const S=(v=(g=s[x])==null?void 0:g[M])==null?void 0:v[E];if(!S||S==="transparent")continue;const y=ET(S),L=(M-e/2+.5)*Vl,P=(t-1-x)*Vl+f,b=(E-r/2+.5)*Vl;p(M,x,E+1)||Ys(u,d,[L-f,P-f,b+f],[L+f,P-f,b+f],[L+f,P+f,b+f],[L-f,P+f,b+f],y),p(M,x,E-1)||Ys(u,d,[L+f,P-f,b-f],[L-f,P-f,b-f],[L-f,P+f,b-f],[L+f,P+f,b-f],$o(y,.82)),p(M,x-1,E)||Ys(u,d,[L-f,P+f,b-f],[L+f,P+f,b-f],[L+f,P+f,b+f],[L-f,P+f,b+f],$o(y,1.15)),p(M,x+1,E)||Ys(u,d,[L-f,P-f,b+f],[L+f,P-f,b+f],[L+f,P-f,b-f],[L-f,P-f,b-f],$o(y,.7)),p(M+1,x,E)||Ys(u,d,[L+f,P-f,b+f],[L+f,P-f,b-f],[L+f,P+f,b-f],[L+f,P+f,b+f],$o(y,.85)),p(M-1,x,E)||Ys(u,d,[L-f,P-f,b-f],[L-f,P-f,b+f],[L-f,P+f,b+f],[L-f,P+f,b-f],$o(y,.85))}if(u.length){const x=MT(u,d);l.push(x.material),a.add(x)}function m(){l.forEach(x=>x.dispose()),a.traverse(x=>{x.geometry&&x.geometry.dispose()})}return{group:a,dispose:m}}function Ys(s,e,t,r,a,l,u){s.push(...t,...r,...a,...t,...a,...l),e.push(...u,...u,...u,...u,...u,...u)}function MT(s,e){const t=new ri;t.setAttribute("position",new un(s,3)),t.setAttribute("color",new un(e,3)),t.computeVertexNormals();const r=new ra({vertexColors:!0});return new jn(t,r)}function ET(s){const e=parseInt(s.slice(1,3),16)/255,t=parseInt(s.slice(3,5),16)/255,r=parseInt(s.slice(5,7),16)/255;return[e,t,r]}function $o([s,e,t],r){return[Math.min(1,s*r),Math.min(1,e*r),Math.min(1,t*r)]}const ii=.1,Pg=ii*.6;function wT(s,e,t,r,a,l){const u=Math.round(s/ii+r/2-.5),d=Math.round(a-1-(e-ii/2)/ii),f=Math.round(t/ii+l/2-.5);return{x:Math.max(0,Math.min(r-1,u)),y:Math.max(0,Math.min(a-1,d)),z:Math.max(0,Math.min(l-1,f))}}function TT(s,e,t,r,a,l){return new K((s-r/2+.5)*ii,(a-1-e)*ii+ii/2,(t-l/2+.5)*ii)}function AT(s){const e=lt.useRef(null),t=lt.useRef(null),r=lt.useRef(null),a=lt.useRef(null),l=lt.useRef(null),u=lt.useRef(null),d=lt.useRef(null),f=lt.useRef(null),p=lt.useRef(null),m=lt.useRef(null);lt.useEffect(()=>{const x=s.current;if(!x)return;const M=new Kw({antialias:!0,alpha:!1});M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.setSize(x.clientWidth,x.clientHeight),M.toneMapping=Ki,M.setClearColor(788484,1),x.appendChild(M.domElement),e.current=M;const E=new Zw;E.fog=new Lf(788484,.18),t.current=E;const S=new iT(16771264,.45);E.add(S);const y=new wd(16777215,.6);y.position.set(4,6,4),E.add(y);const L=new wd(8425680,.35);L.position.set(-3,-1,-2),E.add(L);const P=new wd(16746528,.2);P.position.set(0,-3,-5),E.add(P);const b=new sT(8,16,3811856,2365448);b.position.y=-.05,b.material.transparent=!0,b.material.opacity=.5,E.add(b);const q=new Nf(4,32),F=new eT({color:1708038,transparent:!0,opacity:.6}),k=new jn(q,F);k.rotation.x=-Math.PI/2,k.position.y=-.051,E.add(k);const W=new la(20,20),D=new ra({side:Ai,transparent:!0,opacity:0,depthWrite:!1}),R=new jn(W,D);R.rotation.x=-Math.PI/2,R.position.y=-.002,E.add(R),p.current=R;const B=new lo(ii*.96,ii*.96,ii*.96),te=new ra({color:65416,transparent:!0,opacity:.35}),Y=new jn(B,te),ue=new Jw(B),he=new Df({color:65416}),ce=new y0(ue,he);Y.add(ce),Y.visible=!1,E.add(Y),m.current=Y;const ie=new Wn(45,x.clientWidth/x.clientHeight,.01,50);ie.position.set(2.5,2.8,2.5),ie.lookAt(0,1.6,0),r.current=ie;const O=new lT(ie,M.domElement);O.enableDamping=!0,O.dampingFactor=.06,O.minDistance=.3,O.maxDistance=15,O.target.set(0,1.6,0),a.current=O;const ae=new rT;function ne(be,ut){const Ke=M.domElement.getBoundingClientRect(),_t=(be-Ke.left)/Ke.width*2-1,V=-((ut-Ke.top)/Ke.height)*2+1;ae.setFromCamera(new ct(_t,V),ie);const vt=[];l.current&&vt.push(l.current),vt.push(R);const Ze=ae.intersectObjects(vt,!0);return Ze.length>0?Ze[0]:null}function U(be,ut,Ke,_t,V){const vt=be.point.clone(),Ze=be.face.normal.clone().transformDirection(be.object.matrixWorld),et=V?Pg:-Pg;return wT(vt.x+Ze.x*et,vt.y+Ze.y*et,vt.z+Ze.z*et,ut,Ke,_t)}function ee(be,ut){const Ke=m.current;if(!Ke)return;const{activeTool:_t,canvasWidth:V,canvasHeight:vt,depthDimension:Ze}=Et.getState(),et=ne(be,ut);if(!et){Ke.visible=!1;return}const qe=_t==="eraser",xt=_t==="eyedropper",N=U(et,V,vt,Ze,!qe&&!xt);Ke.position.copy(TT(N.x,N.y,N.z,V,vt,Ze)),Ke.visible=!0;const T=qe?16729156:xt?52479:65416;Ke.material.color.setHex(T),Ke.children[0].material.color.setHex(T)}function Ce(be,ut){var Ge,N,T,J;const{activeTool:Ke,currentColor:_t,canvasWidth:V,canvasHeight:vt,depthDimension:Ze}=Et.getState(),et=ne(be,ut);if(!et)return;const qe=et.object===R;if(Ke==="eyedropper"){if(qe)return;const fe=U(et,V,vt,Ze,!1),ge=(N=(Ge=ta(Et.getState().layers,V,vt,Ze)[fe.y])==null?void 0:Ge[fe.x])==null?void 0:N[fe.z];ge&&ge!=="transparent"&&Et.getState().setCurrentColor(ge);return}if(Ke==="eraser"){if(qe)return;const fe=U(et,V,vt,Ze,!1),ge=(J=(T=ta(Et.getState().layers,V,vt,Ze)[fe.y])==null?void 0:T[fe.x])==null?void 0:J[fe.z];if(!ge||ge==="transparent")return;Et.getState().pushUndo(),Et.getState().paintVoxelDirect(fe.x,fe.y,fe.z,"transparent");return}const xt=U(et,V,vt,Ze,!0);Et.getState().pushUndo(),Et.getState().paintVoxelDirect(xt.x,xt.y,xt.z,_t)}const Z=be=>{Et.getState().viewMode==="preview-only"&&be.button===0&&Ce(be.clientX,be.clientY)},de=be=>{if(Et.getState().viewMode!=="preview-only"){m.current&&(m.current.visible=!1);return}ee(be.clientX,be.clientY)},ye=()=>{m.current&&(m.current.visible=!1)};M.domElement.addEventListener("click",Z),M.domElement.addEventListener("pointermove",de),M.domElement.addEventListener("pointerleave",ye);let _e=!0;function Ae(){_e&&(d.current=requestAnimationFrame(Ae),O.update(),M.render(E,ie))}Ae();const Le=new ResizeObserver(()=>{const be=x.clientWidth,ut=x.clientHeight;!be||!ut||(M.setSize(be,ut),ie.aspect=be/ut,ie.updateProjectionMatrix())});return Le.observe(x),()=>{_e=!1,cancelAnimationFrame(d.current),Le.disconnect(),M.domElement.removeEventListener("click",Z),M.domElement.removeEventListener("pointermove",de),M.domElement.removeEventListener("pointerleave",ye),O.dispose(),F.dispose(),q.dispose(),B.dispose(),te.dispose(),ue.dispose(),he.dispose(),W.dispose(),D.dispose(),M.dispose(),x.contains(M.domElement)&&x.removeChild(M.domElement)}},[]),lt.useEffect(()=>Et.subscribe((M,E)=>{M.activeTheme!==E.activeTheme&&e.current&&qx(async()=>{const{getTheme:S}=await Promise.resolve().then(()=>Lx);return{getTheme:S}},void 0).then(({getTheme:S})=>{var P;const L=S(M.activeTheme).sceneBackground.replace("#","");(P=e.current)==null||P.setClearColor(parseInt(L,16),1)})}),[]);const g=lt.useCallback(()=>{var b;if(!t.current)return;const{layers:x,canvasWidth:M,canvasHeight:E,depthDimension:S}=Et.getState(),y=ta(x,M,E,S),{group:L,dispose:P}=ST(y,M,E,S);l.current&&(t.current.remove(l.current),(b=u.current)==null||b.call(u)),t.current.add(L),l.current=L,u.current=P},[]);return lt.useEffect(()=>{g();const x=Et.subscribe((M,E)=>{(M.layers!==E.layers||M.depthDimension!==E.depthDimension)&&(clearTimeout(f.current),f.current=setTimeout(g,80))});return()=>{x(),clearTimeout(f.current)}},[g]),{exportPng:lt.useCallback(()=>{const x=e.current,M=t.current,{canvasWidth:E,canvasHeight:S,depthDimension:y}=Et.getState();if(!x||!M)return;const L=1024,P=new Wn(45,1,.01,50),q=Math.max(E,S,y)*.1*2.8;P.position.set(q,q*.75,q),P.lookAt(0,0,0),x.setSize(L,L),x.render(M,P);const F=x.domElement.toDataURL("image/png"),k=s.current;k&&(x.setSize(k.clientWidth,k.clientHeight),r.current.aspect=k.clientWidth/k.clientHeight,r.current.updateProjectionMatrix());const W=document.createElement("a");W.download="picell3d-export.png",W.href=F,W.click()},[])}}const Lg={pencil:{label:"Place voxel",color:"#00ff88"},fill:{label:"Place voxel",color:"#00ff88"},eraser:{label:"Erase voxel",color:"#ff4444"},eyedropper:{label:"Pick color",color:"#00ccff"}};function bT({onExport:s}){const e=lt.useRef(null),{exportPng:t}=AT(e),r=Et(f=>f.viewMode),a=Et(f=>f.activeTool),l=Et(f=>f.currentColor),u=r==="preview-only";lt.useEffect(()=>{s&&(s.current=t)},[s,t]);const d=Lg[a]??Lg.pencil;return A.jsxs("div",{className:"relative w-full h-full",children:[A.jsx("div",{ref:e,className:"w-full h-full"}),u?A.jsxs("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none select-none",children:[A.jsxs("div",{className:"flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono",style:{background:"rgba(0,0,0,0.6)",border:`1px solid ${d.color}55`,color:d.color,backdropFilter:"blur(4px)"},children:[A.jsx("span",{children:d.label}),(a==="pencil"||a==="fill")&&A.jsx("span",{className:"inline-block w-3 h-3 rounded-sm",style:{background:l,outline:"1px solid rgba(255,255,255,0.25)"}})]}),A.jsx("span",{className:"text-xs opacity-40",style:{color:"#fff",textShadow:"0 1px 3px #000"},children:"Click · drag to orbit · scroll to zoom"})]}):A.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-text-muted pointer-events-none opacity-60 whitespace-nowrap",children:"Drag to rotate · Scroll to zoom"})]})}function CT(){const{palette:s,currentColor:e,setCurrentColor:t,addToPalette:r}=Et(),a=lt.useRef(null);return A.jsxs("div",{className:"flex flex-col gap-2 p-2",children:[A.jsxs("div",{className:"relative",children:[A.jsx("div",{className:"text-xs text-text-muted mb-1 uppercase tracking-wide",children:"Color"}),A.jsx("div",{className:"w-full h-8 rounded cursor-pointer border border-border hover:border-accent transition-colors",style:{background:e},onClick:()=>{var l;return(l=a.current)==null?void 0:l.click()},title:"Click to open color picker"}),A.jsx("input",{ref:a,type:"color",value:e==="transparent"?"#000000":e,onChange:l=>t(l.target.value),className:"absolute opacity-0 w-0 h-0 pointer-events-none",tabIndex:-1})]}),A.jsx("div",{className:"grid grid-cols-4 gap-1",children:s.map((l,u)=>A.jsx("button",{className:"w-full aspect-square rounded border transition-all duration-100 hover:scale-110",style:{background:l,borderColor:e===l?"#e8a820":"#7a5c2e",boxShadow:e===l?"0 0 6px #c8860a":"none",outline:e===l?"1px solid #e8a820":"none"},onClick:()=>t(l),title:l},u))}),A.jsx("button",{className:"btn-brass w-full text-xs py-1",onClick:()=>{var l;return(l=a.current)==null?void 0:l.click()},children:"+ Custom"})]})}const RT=[4,8,16,24,32,48,64],PT=[{id:"front",label:"← Front"},{id:"both",label:"↔ Both"},{id:"back",label:"Back →"}];function LT(){const{canvasWidth:s,canvasHeight:e,depthDimension:t,setDepthDimension:r,paintDepth:a,setPaintDepth:l,paintDirection:u,setPaintDirection:d,layers:f,activeView:p}=Et(),m=lt.useMemo(()=>{const v=ta(f,s,e,t);let x=0;for(const M of v)for(const E of M)for(const S of E)S!=="transparent"&&x++;return x},[f,s,e,t]),g=p==="front"||p==="back";return A.jsxs("div",{className:"flex flex-col h-full",children:[A.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1.5 border-b border-border",children:[A.jsx(Ig,{size:12,className:"text-accent"}),A.jsx("span",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Voxel Options"})]}),A.jsxs("div",{className:"flex flex-col gap-4 p-3",children:[!g&&A.jsxs("div",{children:[A.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[A.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Depth"}),A.jsxs("span",{className:"text-xs font-mono text-accent",children:[t,"px"]})]}),A.jsx("div",{className:"grid grid-cols-4 gap-1 mb-1.5",children:RT.map(v=>A.jsx("button",{onClick:()=>r(v),className:`text-xs py-0.5 rounded border transition-colors ${t===v?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:v},v))}),A.jsx("input",{type:"range",min:4,max:128,value:t,onChange:v=>r(parseInt(v.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}})]}),A.jsxs("div",{children:[A.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[A.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Paint Depth"}),A.jsx("span",{className:"text-xs font-mono text-accent",children:a})]}),A.jsx("input",{type:"range",min:1,max:g?Math.floor(t/2):t,value:a,onChange:v=>l(parseInt(v.target.value)),className:"w-full cursor-pointer",style:{accentColor:"var(--color-accent)"}}),A.jsxs("div",{className:"flex justify-between text-xs text-text-muted mt-0.5",children:[A.jsx("span",{children:"1"}),A.jsx("span",{children:g?Math.floor(t/2):t})]})]}),g&&A.jsxs("div",{children:[A.jsx("div",{className:"mb-1.5",children:A.jsx("label",{className:"text-xs text-text-muted uppercase tracking-wide",children:"Direction"})}),A.jsx("div",{className:"grid grid-cols-3 gap-1",children:PT.map(({id:v,label:x})=>A.jsx("button",{onClick:()=>d(v),className:`text-xs py-0.5 rounded border transition-colors ${u===v?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/50"}`,children:x},v))})]}),A.jsxs("div",{className:"flex flex-col gap-1.5 text-xs",children:[A.jsxs("div",{className:"flex justify-between text-text-muted",children:[A.jsx("span",{children:"Grid size"}),A.jsxs("span",{className:"font-mono text-text",children:[s,"×",e,"×",t]})]}),A.jsxs("div",{className:"flex justify-between text-text-muted",children:[A.jsx("span",{children:"Voxels"}),A.jsx("span",{className:"font-mono text-text",children:m.toLocaleString()})]}),A.jsxs("div",{className:"flex justify-between text-text-muted",children:[A.jsx("span",{children:"Active view"}),A.jsx("span",{className:"font-mono text-accent capitalize",children:p})]})]}),A.jsx("div",{className:"text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5",style:{background:"color-mix(in srgb, var(--color-background) 60%, transparent)"},children:g?A.jsxs(A.Fragment,{children:["Canvas: ",A.jsxs("span",{className:"text-text font-mono",children:[s,"×",e]})]}):A.jsxs(A.Fragment,{children:["Canvas: ",A.jsx("span",{className:"text-text font-mono",children:p==="top"||p==="bottom"?`${s}×${t}`:`${t}×${e}`})]})})]})]})}function DT(){const{layers:s,activeLayerId:e,addLayer:t,deleteLayer:r,setActiveLayer:a,toggleLayerVisible:l,renameLayer:u,moveLayerUp:d,moveLayerDown:f}=Et(),[p,m]=lt.useState(null),[g,v]=lt.useState(""),x=[...s].reverse();function M(S,y){y.stopPropagation(),m(S.id),v(S.name)}function E(S){u(S,g),m(null)}return A.jsxs("div",{className:"flex flex-col",children:[A.jsxs("div",{className:"flex items-center justify-between px-2 py-1.5 border-b border-border flex-shrink-0",children:[A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx(Bv,{size:12,className:"text-accent"}),A.jsx("span",{className:"text-xs uppercase tracking-wide text-text-muted",children:"Layers"})]}),A.jsx("button",{onClick:()=>t(),title:"Add layer",className:"flex items-center justify-center w-5 h-5 rounded border border-border text-text-muted hover:text-accent hover:border-accent/50 transition-colors",children:A.jsx(nx,{size:11})})]}),A.jsx("div",{className:"flex flex-col overflow-y-auto",style:{maxHeight:200},children:x.map(S=>{const y=s.findIndex(F=>F.id===S.id),L=S.id===e,P=y===s.length-1,b=y===0,q=s.length>1;return A.jsxs("div",{onClick:()=>a(S.id),className:"flex items-center gap-1 px-1.5 py-1 cursor-pointer select-none transition-colors",style:{borderLeft:`2px solid ${L?"var(--color-accent)":"transparent"}`,background:L?"color-mix(in srgb, var(--color-accent) 12%, transparent)":"transparent"},children:[A.jsx("button",{onClick:F=>{F.stopPropagation(),l(S.id)},title:S.visible?"Hide layer":"Show layer",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors",children:S.visible?A.jsx(Uv,{size:11}):A.jsx(Nv,{size:11,className:"opacity-40"})}),p===S.id?A.jsx("input",{autoFocus:!0,value:g,onChange:F=>v(F.target.value),onBlur:()=>E(S.id),onKeyDown:F=>{F.key==="Enter"&&E(S.id),F.key==="Escape"&&m(null),F.stopPropagation()},onClick:F=>F.stopPropagation(),className:"flex-1 min-w-0 text-xs bg-transparent outline-none border-b",style:{borderColor:"var(--color-accent)",color:"var(--color-text)"}}):A.jsx("span",{className:"flex-1 min-w-0 text-xs truncate",style:{color:L?"var(--color-text)":"var(--color-text-muted)",opacity:S.visible?1:.45},onDoubleClick:F=>M(S,F),title:"Double-click to rename",children:S.name}),A.jsx("button",{onClick:F=>{F.stopPropagation(),d(S.id)},disabled:P,title:"Move up",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20",children:A.jsx(Ev,{size:10})}),A.jsx("button",{onClick:F=>{F.stopPropagation(),f(S.id)},disabled:b,title:"Move down",className:"flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20",children:A.jsx(Sv,{size:10})}),A.jsx("button",{onClick:F=>{F.stopPropagation(),r(S.id)},disabled:!q,title:"Delete layer",className:"flex-shrink-0 text-text-muted hover:text-red-400 transition-colors disabled:opacity-20",children:A.jsx(Fg,{size:10})})]},S.id)})})]})}const NT=[{id:"front",Icon:Vv,label:"Front"},{id:"back",Icon:ox,label:"Back"},{id:"left",Icon:qv,label:"Left"},{id:"right",Icon:Kv,label:"Right"},{id:"top",Icon:Qv,label:"Top"},{id:"bottom",Icon:Xv,label:"Bottom"}];function IT(){const s=Et(v=>v.activeTheme),e=Et(v=>v.viewMode),t=Et(v=>v.setViewMode),r=lt.useRef(null);Dx(),lt.useEffect(()=>{Gg(bd(s))},[s]);const l=bd(s).PainterBackground,u=e!=="preview-only",d=e!=="canvas-only",f=e!=="canvas-only",p=e==="preview-only",m=()=>{d&&t("preview-only")},g=()=>{u&&t("canvas-only")};return A.jsxs("div",{className:"relative flex flex-col w-full h-screen overflow-hidden font-theme",style:{background:"var(--color-background)",color:"var(--color-text)"},children:[A.jsx(l,{}),A.jsxs("div",{className:"relative flex flex-col w-full h-full",style:{zIndex:10},children:[A.jsx(kx,{onExport:()=>{var v;return(v=r.current)==null?void 0:v.call(r)}}),A.jsxs("div",{className:"flex flex-1 min-h-0",children:[f&&A.jsxs("div",{className:"flex flex-col w-28 border-r border-border flex-shrink-0 overflow-y-auto",style:{background:"color-mix(in srgb, var(--color-surface) 90%, transparent)"},children:[A.jsx("div",{className:"px-2 pt-2 pb-1 text-xs uppercase tracking-wide text-text-muted border-b border-border",children:"Palette"}),A.jsx(CT,{})]}),u&&A.jsxs("div",{className:"flex flex-col flex-1 min-w-0 overflow-hidden",style:{borderRight:d?"1px solid var(--color-border)":"none"},children:[A.jsx(UT,{closable:d,onClose:m}),A.jsx("div",{className:"flex-1 min-h-0 overflow-hidden relative",style:{background:"color-mix(in srgb, var(--color-background) 80%, transparent)"},children:A.jsx(Wx,{})})]}),d&&A.jsxs("div",{className:"flex flex-col flex-1 min-w-0 overflow-hidden",style:{background:"color-mix(in srgb, var(--color-background) 95%, transparent)"},children:[A.jsxs("div",{className:"flex items-center justify-between gap-2 px-3 py-1.5 border-b border-border flex-shrink-0",style:{background:"color-mix(in srgb, var(--color-surfaceAlt) 95%, transparent)",minHeight:32},children:[A.jsx("div",{className:"text-xs text-text-muted opacity-60 uppercase tracking-widest",children:p?"3D Edit Mode":"3D Preview"}),u&&A.jsx(E0,{label:"Close 3D preview",onClick:g})]}),A.jsx("div",{className:"flex-1 min-h-0 relative overflow-hidden",children:A.jsx(bT,{onExport:r})})]}),A.jsxs("div",{className:"flex flex-col w-52 border-l border-border flex-shrink-0 overflow-y-auto",style:{background:"color-mix(in srgb, var(--color-surface) 95%, transparent)"},children:[A.jsx(DT,{}),A.jsx("div",{className:"border-t border-border"}),A.jsx(LT,{})]})]}),A.jsx(Bx,{})]})]})}function UT({closable:s,onClose:e}){const{activeView:t,setActiveView:r}=Et();return A.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 border-b border-border flex-shrink-0 flex-wrap",style:{background:"color-mix(in srgb, var(--color-surfaceAlt) 95%, transparent)",minHeight:32},children:[NT.map(({id:a,Icon:l,label:u})=>A.jsxs("button",{onClick:()=>r(a),className:`flex items-center gap-1 px-2 py-0.5 rounded border text-xs transition-colors ${t===a?"border-accent bg-accent/20 text-accent":"border-border text-text-muted hover:text-text hover:border-accent/40"}`,children:[A.jsx(l,{size:11}),u]},a)),s&&A.jsx("div",{className:"ml-auto",children:A.jsx(E0,{label:"Close 2D canvas",onClick:e})})]})}function E0({label:s,onClick:e}){return A.jsx("button",{type:"button",onClick:e,className:"w-7 h-7 rounded flex items-center justify-center border border-border text-text-muted hover:text-text hover:border-accent/50 hover:bg-surface transition-colors",title:s,"aria-label":s,children:A.jsx(Ad,{size:14})})}dv.createRoot(document.getElementById("root")).render(A.jsx(Ko.StrictMode,{children:A.jsx(IT,{})}));
