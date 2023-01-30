const cp=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}};cp();var N={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir=Symbol.for("react.element"),fp=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),vp=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),_p=Symbol.for("react.suspense"),yp=Symbol.for("react.memo"),wp=Symbol.for("react.lazy"),pa=Symbol.iterator;function kp(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}var Ys={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zs=Object.assign,Js={};function Gt(e,n,t){this.props=e,this.context=n,this.refs=Js,this.updater=t||Ys}Gt.prototype.isReactComponent={};Gt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Gt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ec(){}ec.prototype=Gt.prototype;function su(e,n,t){this.props=e,this.context=n,this.refs=Js,this.updater=t||Ys}var cu=su.prototype=new ec;cu.constructor=su;Zs(cu,Gt.prototype);cu.isPureReactComponent=!0;var va=Array.isArray,nc=Object.prototype.hasOwnProperty,fu={current:null},tc={key:!0,ref:!0,__self:!0,__source:!0};function rc(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)nc.call(n,r)&&!tc.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Ir,type:e,key:l,ref:o,props:i,_owner:fu.current}}function Ep(e,n){return{$$typeof:Ir,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function du(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ir}function Sp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ma=/\/+/g;function kl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Sp(""+e.key):n.toString(36)}function ui(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ir:case fp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+kl(o,0):r,va(i)?(t="",e!=null&&(t=e.replace(ma,"$&/")+"/"),ui(i,n,t,"",function(s){return s})):i!=null&&(du(i)&&(i=Ep(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ma,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",va(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+kl(l,u);o+=ui(l,n,t,a,i)}else if(a=kp(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+kl(l,u++),o+=ui(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function br(e,n,t){if(e==null)return e;var r=[],i=0;return ui(e,r,"","",function(l){return n.call(t,l,i++)}),r}function xp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},ai={transition:null},Tp={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:ai,ReactCurrentOwner:fu};M.Children={map:br,forEach:function(e,n,t){br(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return br(e,function(){n++}),n},toArray:function(e){return br(e,function(n){return n})||[]},only:function(e){if(!du(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Gt;M.Fragment=dp;M.Profiler=vp;M.PureComponent=su;M.StrictMode=pp;M.Suspense=_p;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zs({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=fu.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)nc.call(n,a)&&!tc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:Ir,type:e.type,key:i,ref:l,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mp,_context:e},e.Consumer=e};M.createElement=rc;M.createFactory=function(e){var n=rc.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:gp,render:e}};M.isValidElement=du;M.lazy=function(e){return{$$typeof:wp,_payload:{_status:-1,_result:e},_init:xp}};M.memo=function(e,n){return{$$typeof:yp,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=ai.transition;ai.transition={};try{e()}finally{ai.transition=n}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,n){return ge.current.useCallback(e,n)};M.useContext=function(e){return ge.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};M.useEffect=function(e,n){return ge.current.useEffect(e,n)};M.useId=function(){return ge.current.useId()};M.useImperativeHandle=function(e,n,t){return ge.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return ge.current.useMemo(e,n)};M.useReducer=function(e,n,t){return ge.current.useReducer(e,n,t)};M.useRef=function(e){return ge.current.useRef(e)};M.useState=function(e){return ge.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return ge.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return ge.current.useTransition()};M.version="18.2.0";N.exports=M;function ha(e,n,t){for(var r=new Array(t),i=0,l=n;i<t;)r[i]=e[l],i=i+1|0,l=l+1|0;return r}function Cp(e,n,t){if(n<0||n>=e.length)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};e[n]=t}function O(e,n){if(n<0||n>=e.length)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};return e[n]}function Ei(e,n){for(;;){var t=n,r=e,i=r.length,l=i===0?1:i,o=t.length,u=l-o|0;if(u===0)return r.apply(null,t);if(u>=0)return function(a,s){return function(v){return Ei(a,s.concat([v]))}}(r,t);n=ha(t,l,-u|0),e=r.apply(null,ha(t,0,l))}}function Sn(e,n){var t=e.length;if(t===1)return e(n);switch(t){case 1:return e(n);case 2:return function(r){return e(n,r)};case 3:return function(r,i){return e(n,r,i)};case 4:return function(r,i,l){return e(n,r,i,l)};case 5:return function(r,i,l,o){return e(n,r,i,l,o)};case 6:return function(r,i,l,o,u){return e(n,r,i,l,o,u)};case 7:return function(r,i,l,o,u,a){return e(n,r,i,l,o,u,a)};default:return Ei(e,[n])}}function Np(e){var n=e.length;return n===1?e:function(t){return Sn(e,t)}}function ic(e,n,t){var r=e.length;if(r===2)return e(n,t);switch(r){case 1:return Ei(e(n),[t]);case 2:return e(n,t);case 3:return function(i){return e(n,t,i)};case 4:return function(i,l){return e(n,t,i,l)};case 5:return function(i,l,o){return e(n,t,i,l,o)};case 6:return function(i,l,o,u){return e(n,t,i,l,o,u)};case 7:return function(i,l,o,u,a){return e(n,t,i,l,o,u,a)};default:return Ei(e,[n,t])}}function Zi(e){var n=e.length;return n===2?e:function(t,r){return ic(e,t,r)}}function Ji(e){return e===void 0?{BS_PRIVATE_NESTED_SOME_NONE:0}:e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function Ap(e){if(e!=null)return Ji(e)}function lc(e){if(!(e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;if(n!==0)return{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}function oc(e){if(e!==void 0)return lc(e);throw new Error("getExn")}function ga(e,n){return e<n?-1:e===n?0:1}function Pp(e,n){return e?n?0:1:n?-1:0}function uc(e,n){return e===n?0:e<n?-1:1}function ac(e,n){return e<n?e:n}function zp(e,n){return e>n?e:n}function El(e,n){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",27,4],Error:new Error};return e[n]}function Y(e,n,t){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",33,2],Error:new Error};e[n]=t}function Lp(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(e[i]);return r}function sn(e,n){return Lp(e,Np(n))}function Ip(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(i,e[i]);return r}function Sl(e,n){return Ip(e,Zi(n))}function Op(e,n,t){for(var r=n,i=0,l=e.length;i<l;++i)r=t(r,e[i]);return r}function Mp(e,n,t){return Op(e,n,Zi(t))}function Dp(e,n,t,r,i){for(;;){var l=t;if(l===i)return!0;if(!r(e[l],n[l]))return!1;t=l+1|0}}function Rp(e,n,t){return Dp(e,n,0,t,ac(e.length,n.length))}function Vp(e,n,t){return Rp(e,n,Zi(t))}function Fp(e,n,t,r,i){for(;;){var l=t,o=n;if(l>=r)return l;var u=e[l];if(!i(u,o))return l;t=l+1|0,n=u}}function bp(e,n){var t=e.length;if(t===0||t===1)return t;var r=e[0],i=e[1];if(n(r,i))for(var l=i,o=2;;){var u=o,a=l;if(u>=t)return u;var s=e[u];if(!n(a,s))return u;o=u+1|0,l=s}else return n(i,r)?-Fp(e,i,2,t,n)|0:1}function Ce(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t}}function Fe(e){return{v:e,h:1,l:void 0,r:void 0}}function Si(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function tn(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;if(r>(i+2|0)){var l=e.l,o=e.r;return Si(l,o)?Ce(l,e.v,Ce(o,n,t)):Ce(Ce(l,e.v,o.l),o.v,Ce(o.r,n,t))}if(i<=(r+2|0))return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t};var u=t.l,a=t.r;return Si(a,u)?Ce(Ce(e,n,u),t.v,a):Ce(Ce(e,n,u.l),u.v,Ce(u.r,t.v,a))}function sc(e,n){var t=e.l;return t!==void 0?tn(sc(t,n),e.v,e.r):(n.contents=e.v,e.r)}function cc(e,n){return e!==void 0?tn(cc(e.l,n),e.v,e.r):Fe(n)}function fc(e,n){return e!==void 0?tn(e.l,e.v,fc(e.r,n)):Fe(n)}function Mt(e,n,t){if(e===void 0)return cc(t,n);if(t===void 0)return fc(e,n);var r=e.h,i=t.h;return r>(i+2|0)?tn(e.l,e.v,Mt(e.r,n,t)):i>(r+2|0)?tn(Mt(e,n,t.l),t.v,t.r):Ce(e,n,t)}function ro(e){var n=e.l,t=e.r,r=n!==void 0?ro(n):0,i=t!==void 0?ro(t):0;return(1+r|0)+i|0}function dc(e,n,t){for(;;){var r=n,i=e,l=i.v,o=i.l,u=i.r,a=o!==void 0?dc(o,r,t):r;t[a]=l;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function $p(e){if(e===void 0)return[];var n=ro(e),t=new Array(n);return dc(e,0,t),t}function io(e,n,t){switch(t){case 0:return;case 1:return Fe(e[n]);case 2:var r=e[n],i=e[n-1|0];return{v:i,h:2,l:Fe(r),r:void 0};case 3:var l=e[n],o=e[n-1|0],u=e[n-2|0];return{v:o,h:2,l:Fe(l),r:Fe(u)};default:var a=t/2|0,s=io(e,n,a),v=e[n-a|0],m=io(e,(n-a|0)-1|0,(t-a|0)-1|0);return Ce(s,v,m)}}function lo(e,n,t){switch(t){case 0:return;case 1:return Fe(e[n]);case 2:var r=e[n],i=e[n+1|0];return{v:i,h:2,l:Fe(r),r:void 0};case 3:var l=e[n],o=e[n+1|0],u=e[n+2|0];return{v:o,h:2,l:Fe(l),r:Fe(u)};default:var a=t/2|0,s=lo(e,n,a),v=e[n+a|0],m=lo(e,(n+a|0)+1|0,(t-a|0)-1|0);return Ce(s,v,m)}}function pu(e){var n=e.l;e.l=n.r,n.r=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,l=i!==void 0?i.h:0;e.h=(r>l?r:l)+1|0;var o=n.l,u=o!==void 0?o.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function vu(e){var n=e.r;e.r=n.l,n.l=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,l=i!==void 0?i.h:0;e.h=(r>l?r:l)+1|0;var o=n.r,u=o!==void 0?o.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function jp(e){var n=e.l,t=vu(n);return e.l=t,pu(e)}function Gp(e){var n=e.r,t=pu(n);return e.r=t,vu(e)}function $r(e){var n=e.l,t=n!==void 0?n.h:0,r=e.r,i=r!==void 0?r.h:0;return e.h=(t>i?t:i)+1|0,e}function Up(e){var n=e.l,t=e.r,r=n!==void 0?n.h:0,i=t!==void 0?t.h:0;if(r>(2+i|0)){var l=n.l,o=n.r;return Si(l,o)?$r(pu(e)):$r(jp(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return Si(a,u)?$r(vu(e)):$r(Gp(e))}return e.h=(r>i?r:i)+1|0,e}function Bp(e,n,t,r){for(;;){var i=t,l=n;if(i>=r)return i;var o=e[i];if(l<=o)return i;t=i+1|0,n=o}}function Wp(e){var n=e.length;if(n===0||n===1)return n;var t=e[0],r=e[1];if(t<r)for(var i=r,l=2;;){var o=l,u=i;if(o>=n)return o;var a=e[o];if(u>=a)return o;l=o+1|0,i=a}else return t>r?-Bp(e,r,2,n)|0:1}function oo(e,n){if(e===void 0)return Fe(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;return n<t?e.l=oo(r,n):e.r=oo(i,n),Up(e)}function Hp(e){var n=e.length;if(n!==0){var t=Wp(e),r;t>=0?r=lo(e,0,t):(t=-t|0,r=io(e,t-1|0,t));for(var i=t;i<n;++i)r=oo(r,e[i]);return r}}function xi(e,n){if(e===void 0)return Fe(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;if(n<t){var l=xi(r,n);return l===r?e:tn(l,t,i)}var o=xi(i,n);return o===i?e:tn(r,t,o)}function uo(e,n){if(e===void 0)return e;var t=e.v,r=e.l,i=e.r;if(n===t){if(r===void 0)return i;if(i===void 0)return r;var l={contents:i.v},o=sc(i,l);return tn(r,l.contents,o)}if(n<t){var u=uo(r,n);return u===r?e:tn(u,t,i)}var a=uo(i,n);return a===i?e:tn(r,t,a)}function Qp(e,n){for(var t=n.length,r=e,i=0;i<t;++i){var l=n[i];r=uo(r,l)}return r}function Ti(e,n){var t=e.v,r=e.l,i=e.r;if(n===t)return[r,i];if(n<t){if(r===void 0)return[void 0,e];var l=Ti(r,n);return[l[0],Mt(l[1],t,i)]}if(i===void 0)return[e,void 0];var o=Ti(i,n);return[Mt(r,t,o[0]),o[1]]}function zn(e,n){if(e===void 0)return n;if(n===void 0)return e;var t=e.h,r=n.h;if(t>=r){if(r===1)return xi(e,n.v);var i=e.v,l=e.l,o=e.r,u=Ti(n,i);return Mt(zn(l,u[0]),i,zn(o,u[1]))}if(t===1)return xi(n,e.v);var a=n.v,s=n.l,v=n.r,m=Ti(e,a);return Mt(zn(m[0],s),a,zn(m[1],v))}var pc=Hp,ao=$p,qp=function(e,n,t){var r,i;i=t.length;var l=[];for(r=0;r<i-1;++r)l.push(t[r]);var o=t[i-1];for(r=0;r<o.length;++r)l.push(o[r]);return e[n].apply(e,l)};function vc(e,n){return n.filter(function(t){return t!==""}).join(e)}function mc(e,n){var t=n.slice(),r=t.shift();return t.reduce(Zi(e),oc(r===void 0?void 0:Ji(r)))}function hc(e,n){var t=n.length-1|0;return qp([],"concat",[n.map(function(r,i){return i===t?[r]:[r,e]})])}function rr(e){return e.reduce(zn,void 0)}function Xp(e){return e.reduce(function(n,t){return n+t|0},0)}function jr(e){return Ji(e)}var Gr,xl={contents:0};function gc(e){return xl.contents=xl.contents+1|0,e+("/"+xl.contents)}function Kp(e){return e==null?!1:typeof e.RE_EXN_ID=="string"}var Yp=gc("Caml_js_exceptions.Error");function Zp(e){return Kp(e)?e:{RE_EXN_ID:Yp,_1:e}}function K(e){throw new Error(e)}function _c(e){switch(e){case 0:return"1";case 1:return"0";case 2:return"x";case 3:return"z"}}function Jp(e){return e===0}function ev(e){return e===1}function nv(e,n){return e===n?e:e===3?n:n===3?e:2}function tv(e,n){switch(e){case 0:return n>=3?0:n;case 1:return 1;case 2:return n!==1?2:1;case 3:return n}}function rv(e,n){switch(e){case 0:return 0;case 1:return n>=3?1:n;case 2:return n!==0?2:0;case 3:return n}}function iv(e){return e!==1?e!==0?2:1:0}function _a(e,n){return e!==1?e!==0?n!==1?2:1:n!==1?n!==0?2:0:n!==1?2:1:1}function ya(e,n){return e!==1?e!==0&&n!==0?2:0:n!==1?n!==0||n!==0?2:0:1}function lv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function ov(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function uv(e,n){return e!==1?e!==0||n!==0?2:0:n!==1?2:1}var wa=0,ka=1,av=2,sv=3,Ci=function(e,n){for(var t in e)n(t)};function Nt(e,n){if(e===n)return 0;var t=typeof e,r=typeof n;switch(t){case"boolean":if(r==="boolean")return Pp(e,n);break;case"function":if(r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"compare: functional value",Error:new Error};break;case"number":if(r==="number")return ga(e,n);break;case"string":return r==="string"?uc(e,n):1;case"undefined":return-1}switch(r){case"string":return-1;case"undefined":return 1;default:if(t==="boolean")return 1;if(r==="boolean")return-1;if(t==="function")return 1;if(r==="function")return-1;if(t==="number")return n===null||n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(r==="number")return e===null||e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e===null)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(n===null)return e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e.BS_PRIVATE_NESTED_SOME_NONE!==void 0)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?Ea(e,n):-1;var i=e.TAG|0,l=n.TAG|0;if(i===248)return ga(e[1],n[1]);if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==l)return i<l?-1:1;var o=e.length|0,u=n.length|0;if(o===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===o)return 0;var v=Nt(e[s],n[s]);if(v!==0)return v;a=s+1|0}else return e instanceof Date&&n instanceof Date?e-n:Ea(e,n);else if(o<u)for(var m=0;;){var p=m;if(p===o)return-1;var h=Nt(e[p],n[p]);if(h!==0)return h;m=p+1|0}else for(var y=0;;){var w=y;if(w===u)return 1;var P=Nt(e[w],n[w]);if(P!==0)return P;y=w+1|0}}}function Ea(e,n){var t={contents:void 0},r={contents:void 0},i=function(m,p){var h=m[2],y=m[1];if(!y.hasOwnProperty(p)||Nt(m[0][p],y[p])>0){var w=h.contents;if(!(w!==void 0&&p>=w)){h.contents=p;return}}},l=[e,n,r],o=function(m){return i(l,m)},u=[n,e,t],a=function(m){return i(u,m)};Ci(e,o),Ci(n,a);var s=t.contents,v=r.contents;return s!==void 0?v!==void 0?uc(s,v):-1:v!==void 0?1:0}function ee(e,n){if(e===n)return!0;var t=typeof e;if(t==="string"||t==="number"||t==="boolean"||t==="undefined"||e===null)return!1;var r=typeof n;if(t==="function"||r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if(r==="number"||r==="undefined"||n===null)return!1;var i=e.TAG|0,l=n.TAG|0;if(i===248)return e[1]===n[1];if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==l)return!1;var o=e.length|0,u=n.length|0;if(o===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===o)return!0;if(!ee(e[s],n[s]))return!1;a=s+1|0}else{if(e instanceof Date&&n instanceof Date)return!(e>n||e<n);var v={contents:!0},m=function(h){if(!n.hasOwnProperty(h)){v.contents=!1;return}},p=function(h){if(!e.hasOwnProperty(h)||!ee(n[h],e[h])){v.contents=!1;return}};return Ci(e,m),v.contents&&Ci(n,p),v.contents}else return!1}function yc(e,n){return!ee(e,n)}function cv(e,n){return Nt(e,n)>=0}function fv(e,n){return Nt(e,n)>0}function de(e){return e!==void 0?e.h:0}function De(e,n,t,r){var i=de(e),l=de(r);return{k:n,v:t,h:i>=l?i+1|0:l+1|0,l:e,r}}function nn(e,n){return{k:e,v:n,h:1,l:void 0,r:void 0}}function Sa(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function dv(e,n){return e.v===n?e:{k:e.k,v:n,h:e.h,l:e.l,r:e.r}}function xa(e,n,t,r){var i=e!==void 0?e.h:0,l=r!==void 0?r.h:0;if(i>(l+2|0)){var o=e.l,u=e.r;return de(o)>=de(u)?De(o,e.k,e.v,De(u,n,t,r)):De(De(o,e.k,e.v,u.l),u.k,u.v,De(u.r,n,t,r))}if(l<=(i+2|0))return{k:n,v:t,h:i>=l?i+1|0:l+1|0,l:e,r};var a=r.l,s=r.r;return de(s)>=de(a)?De(De(e,n,t,a),r.k,r.v,s):De(De(e,n,t,a.l),a.k,a.v,De(a.r,r.k,r.v,s))}function Ni(e){var n=e.l,t=e.r,r=n!==void 0?Ni(n):0,i=t!==void 0?Ni(t):0;return(1+r|0)+i|0}function wc(e,n,t){for(;;){var r=n,i=e,l=i.k,o=i.l,u=i.r,a=o!==void 0?wc(o,r,t):r;t[a]=l;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function kc(e,n,t){for(;;){var r=n,i=e,l=i.l,o=i.k,u=i.r,a=l!==void 0?kc(l,r,t):r;t[a]=[o,i.v];var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function pv(e){if(e===void 0)return[];var n=Ni(e),t=new Array(n);return kc(e,0,t),t}function vv(e){if(e===void 0)return[];var n=Ni(e),t=new Array(n);return wc(e,0,t),t}function so(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return nn(r[0],r[1]);case 2:var i=e[n],l=e[n-1|0],o=l,u=i;return{k:o[0],v:o[1],h:2,l:nn(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n-1|0],v=e[n-2|0],m=v,p=s,h=a;return{k:p[0],v:p[1],h:2,l:nn(h[0],h[1]),r:nn(m[0],m[1])};default:var y=t/2|0,w=so(e,n,y),P=e[n-y|0],f=so(e,(n-y|0)-1|0,(t-y|0)-1|0);return De(w,P[0],P[1],f)}}function co(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return nn(r[0],r[1]);case 2:var i=e[n],l=e[n+1|0],o=l,u=i;return{k:o[0],v:o[1],h:2,l:nn(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n+1|0],v=e[n+2|0],m=v,p=s,h=a;return{k:p[0],v:p[1],h:2,l:nn(h[0],h[1]),r:nn(m[0],m[1])};default:var y=t/2|0,w=co(e,n,y),P=e[n+y|0],f=co(e,(n+y|0)+1|0,(t-y|0)-1|0);return De(w,P[0],P[1],f)}}function mu(e){var n=e.l;e.l=n.r,n.r=e;var t=de(e.l),r=de(e.r);e.h=(t>r?t:r)+1|0;var i=de(n.l),l=e.h;return n.h=(i>l?i:l)+1|0,n}function hu(e){var n=e.r;e.r=n.l,n.l=e;var t=de(e.l),r=de(e.r);e.h=(t>r?t:r)+1|0;var i=de(n.r),l=e.h;return n.h=(i>l?i:l)+1|0,n}function mv(e){var n=e.l,t=hu(n);return e.l=t,mu(e)}function hv(e){var n=e.r,t=mu(n);return e.r=t,hu(e)}function Ur(e){var n=de(e.l),t=de(e.r);return e.h=(n>t?n:t)+1|0,e}function gv(e){var n=e.l,t=e.r,r=de(n),i=de(t);if(r>(2+i|0)){var l=n.l,o=n.r;return Sa(l,o)?Ur(mu(e)):Ur(mv(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return Sa(a,u)?Ur(hu(e)):Ur(hv(e))}return e.h=(r>i?r:i)+1|0,e}function _v(e,n){for(;;){var t=e;if(t!==void 0){var r=t.k;if(n===r)return t.v;e=n<r?t.l:t.r;continue}throw{RE_EXN_ID:"Not_found",Error:new Error}}}function fo(e,n,t){if(e===void 0)return nn(n,t);var r=e.k;if(n===r)return e.k=n,e.v=t,e;var i=e.l,l=e.r;if(n<r){var o=fo(i,n,t);e.l=o}else e.r=fo(l,n,t);return gv(e)}function yv(e){var n=e.length;if(n!==0){var t=bp(e,function(o,u){return o[0]<u[0]}),r;t>=0?r=co(e,0,t):(t=-t|0,r=so(e,t-1|0,t));for(var i=t;i<n;++i){var l=e[i];r=fo(r,l[0],l[1])}return r}}function et(e,n,t){if(e===void 0)return nn(n,t);var r=e.k;if(n===r)return dv(e,t);var i=e.v;return n<r?xa(et(e.l,n,t),r,i,e.r):xa(e.l,r,i,et(e.r,n,t))}var wv=pv,Ec=yv,kv=vv,nt=_v;function Tl(e){return{_0:e}}function tt(e){return"1'b"+_c(e._0)}function Cl(e){return{TAG:0,_0:e}}function Ev(e){return{TAG:1,_0:e}}function Sv(e){return{TAG:2,_0:e}}function xv(e,n){return{TAG:3,_0:e,_1:0,_2:n}}function Tv(e,n){return{TAG:3,_0:e,_1:1,_2:n}}function Cv(e,n){return{TAG:3,_0:e,_1:2,_2:n}}function Nv(e,n){return{TAG:3,_0:e,_1:3,_2:n}}function Av(e,n){return{TAG:3,_0:e,_1:4,_2:n}}function Pv(e,n){return{TAG:3,_0:e,_1:5,_2:n}}function zv(e,n,t){return{TAG:4,_0:e,_1:n,_2:t}}function Lv(e){return{_0:e}}function Iv(e){return{TAG:0,_0:e}}function Ov(e,n){return{TAG:1,_0:e,_1:n}}function Mv(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function po(e){return typeof e=="number"?0:e._0}function vo(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:case 2:return e._1}}function Dv(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return ac(e._0<e._1?e._0:e._1,e._2)}}function mo(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return e._2}}function Rv(e,n){switch(n){case 0:return po(e);case 1:return vo(e);case 2:return Dv(e);case 3:return mo(e)}}function el(e,n){return Rv(e,n._0)}function Vv(e,n){return e!==void 0?el(e,n):0}function Fv(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0>e._1?e._0:e._1;case 2:return zp(e._0>e._1?e._0:e._1,e._2)}}function bv(e,n){return{TAG:2,_0:po(e)+po(n)|0,_1:vo(e)+vo(n)|0,_2:mo(e)+mo(n)|0}}function $v(e,n){switch(e){case 0:return n!==0?1:2;case 1:return n!==1?0:2;case 2:case 3:return n!==1?n!==0?2:0:1}}function jv(e){return{TAG:0,_0:e}}function Gv(e){return{TAG:1,_0:e}}function Uv(e){return{TAG:2,_0:e}}function Bv(e,n){return{TAG:3,_0:e,_1:n}}function Sc(e){if(!ee(e,[]))return mc(function(n,t){return{TAG:3,_0:n,_1:t}},e)}function Wv(e){return{TAG:0,_0:e}}function Hv(e){return{TAG:1,_0:e}}function xc(e,n,t){for(;;){var r=e;if(typeof r=="number")return!1;switch(r.TAG|0){case 0:return r._0===n?t===0:!1;case 1:return r._0===n?t===1:!1;case 2:return r._0===n;case 3:if(xc(r._0,n,t))return!0;e=r._1;continue}}}function Qv(e,n,t,r){if(typeof e=="number"||e.TAG!==0)return K("impossible");var i=e._0;if(typeof i=="number"||i.TAG===0)return K("impossible");var l=$v(t._0,r._0);return l===2?!1:xc(i._0,n,l)}function qv(e){switch(e){case 0:return nv;case 1:return tv;case 2:return rv}}function Tc(e){return!!e}var Xv=[],Kv=[],Yv=[],Zv=[],Jv={vars:Xv,nets:Kv,conts:Yv,procs:Zv},Ta={contents:0};function On(e){var n=Ta.contents;return Ta.contents=n+1|0,n}function em(e){return e.TAG===2?[e._1,e._2]:K("bug: expected EventNBA")}function Nl(e){return String(e._0)}var nm=[],Cc=[],Nc=[],Ca={active:nm,inactive:Cc,nba:Nc};function tm(e){return e?"finished":"running"}function Ac(e,n){var t=e.find(function(r){return r.name===n});return t!==void 0?t:K("missing key")}function rm(e,n){return n.some(function(t){return t.lhs===e})}function im(e,n,t){return ic(e,n._0,t._0)}function xn(e,n,t){return{_0:im(e,n,t)}}function le(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return t._0;case 1:return nt(e,t._0);case 2:var r=le(e,t._0);return{_0:iv(r._0)};case 3:var i=t._1,l=t._0;if(i!==1)if(i!==0){var o=le(e,l),u=le(e,t._2);switch(i){case 0:case 1:return K("impossible");case 2:return xn(_a,o,u);case 3:return xn(ya,o,u);case 4:return xn(lv,o,u);case 5:return xn(ov,o,u)}}else{var a=le(e,l);if(ev(a._0))return a;var s=le(e,t._2);return xn(_a,a,s)}else{var v=le(e,l);if(Jp(v._0))return v;var m=le(e,t._2);return xn(ya,v,m)}case 4:var p=t._2,h=t._1,y=le(e,t._0),w=y._0;if(w!==1){if(w!==0){var P=le(e,h),f=le(e,p);return xn(uv,P,f)}n=h;continue}n=p;continue}}}function lm(e,n,t){return t?{TAG:0,_0:le(n,t._0)}:{TAG:1,_0:e}}function si(e,n){for(;;){var t=e;switch(t.TAG|0){case 0:return!1;case 1:return n===t._0;case 2:e=t._0;continue;case 3:if(si(t._0,n))return!0;e=t._2;continue;case 4:if(si(t._0,n)||si(t._1,n))return!0;e=t._2;continue}}}function Pc(e,n,t){var r=Ac(e,n).delay;return bv(r,t)}function om(e,n,t){for(var r=!1,i=0,l=-1,o=-1,u=function(v){return v.TAG===0?v._1===t:!1};!r&&i<e.length;){var a=O(e,i);if(fv(a[0],n))r=!0;else{var s=a[1].active.findIndex(u);s!==-1&&(r=!0,l=i,o=s)}i=i+1|0}if(l!==-1)return[l,o]}function um(e,n){var t=e.slice(0,n),r=e.slice(n+1|0,e.length);return t.concat(r)}function am(e,n){switch(n){case 0:return e.active;case 1:return e.inactive;case 2:return e.nba}}function Al(e,n,t){switch(n){case 0:return{active:t,inactive:e.inactive,nba:e.nba};case 1:return{active:e.active,inactive:t,nba:e.nba};case 2:return{active:e.active,inactive:e.inactive,nba:t}}}function ir(e,n,t,r){var i=e.findIndex(function(h){return cv(h[0],t)});if(i===-1){var l=Al(Ca,n,[r]);return e.concat([[t,l]])}if(ee(O(e,i)[0],t)){var o=O(e,i)[1],u=am(o,n).concat([r]),a=Al(o,n,u),s=e.slice();return Y(s,i,[t,a]),s}var v=e.slice(0,i),m=Al(Ca,n,[r]),p=e.slice(i,e.length);return v.concat([[t,m]]).concat(p)}function Tn(e,n){var t=n.pc+1|0;return t===e.stmts.length?{pc:0,state:Tc(e.proc_type)?0:3}:{pc:t,state:0}}function ci(e,n,t,r,i){if(ee(r,i))return e;for(var l=e.queue.slice(),o=e.vmodule.conts.map(function(g,z){return[g,z]}).filter(function(g){return n!==g[1]?si(g[0].rhs,t):!1}),u=o.map(function(g){var z=g[0];return[z.delay,[g[1],le(e.env,z.rhs)]]}),a=function(g,z){var L=z[1],H=L[1],ne=L[0],ye=Pc(e.vmodule.nets,O(e.vmodule.conts,ne).lhs,z[0]),Ye=el(ye,H),ae=Fv(ye),we=om(g,e.time+ae|0,ne),ve;if(we!==void 0){var x=we[0],A=O(g,x),I=A[1],R=I.active.slice();if(R.splice(we[1],1),ee(R,[]))ve=um(g,x);else{var b=g.slice();Y(b,x,[A[0],{active:R,inactive:I.inactive,nba:I.nba}]),ve=b}}else ve=g;return ir(ve,0,e.time+Ye|0,{TAG:0,_0:On(),_1:ne,_2:H})},s=u.reduce(a,l),v=e.proc_env.map(function(g,z){return[g,z]}).filter(function(g){var z=g[0];return z.state===1?Qv(O(O(e.vmodule.procs,g[1]).stmts,z.pc),t,r,i):!1}),m=e.proc_env.slice(),p=0,h=v.length;p<h;++p){var y=O(v,p),w=y[1],P=Tn(O(e.vmodule.procs,w),y[0]);Y(m,w,P)}var f=v.map(function(g){return{TAG:3,_0:On(),_1:g[1]}}),c=O(s,0),d=c[1],_=d.active.concat(f),S=d.inactive,T=d.nba,E={active:_,inactive:S,nba:T};return Y(s,0,[c[0],E]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:m,queue:s,monitor:e.monitor,output:e.output,time:e.time}}function sm(e){return e._0===0}function Na(e,n,t){var r=e.proc_env.slice(),i=O(r,n),l=O(e.vmodule.procs,n),o=i.pc+t|0,u=o===l.stmts.length?{pc:0,state:Tc(l.proc_type)?0:3}:{pc:o,state:i.state};return Y(r,n,u),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:r,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}function cm(e){return e.TAG===0?_c(e._0._0):K("expected value found time")}function fm(e){return e.TAG===0?K("expected time found value"):String(e._0)}function dm(e,n){for(var t="",r=0,i=0;r<e.length;)if(e[r]==="%"){r=r+1|0;var l=e[r];l==="b"?(t=t.concat(cm(O(n,i))),i=i+1|0):l==="d"?(t=t.concat(fm(O(n,i))),i=i+1|0):K("unsupported format"),r=r+1|0}else t=t.concat(e[r]),r=r+1|0;return t=t.concat(`
`),t}function pm(e,n){return e.TAG===0?n.TAG===0?ee(e._0,n._0):K("impossible"):n.TAG===0?K("impossible"):!0}function zc(e,n,t,r){var i=e.env,l=e.time,o=t.map(function(v){return lm(l,i,v)}),u=r!==void 0?Vp(o,r,pm):!1;if(u)return[o,e.output];var a=dm(n,o),s=e.output.concat(a);return[o,s]}function vm(e,n){var t=O(e.vmodule.procs,n),r=O(e.proc_env,n),i=O(t.stmts,r.pc);if(typeof i=="number")return{vmodule:e.vmodule,status:1,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};switch(i.TAG|0){case 0:var l=i._0;if(typeof l=="number")return K("impossible, all stars should have been preprocessed away");if(l.TAG===0){var o=Tn(t,r),u=o.pc,a={pc:u,state:2},s=e.proc_env.slice();Y(s,n,a);var v=ir(e.queue,0,e.time+l._0|0,{TAG:3,_0:On(),_1:n});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:s,queue:v,monitor:e.monitor,output:e.output,time:e.time}}var m=r.pc,p={pc:m,state:1},h=e.proc_env.slice();return Y(h,n,p),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:h,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};case 1:if(i._0){var y=le(e.env,i._3),w=Tn(t,r),P=e.proc_env.slice();Y(P,n,w);var f=Vv(i._2,y),c=ir(e.queue,2,e.time+f|0,{TAG:2,_0:On(),_1:i._1,_2:y});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:P,queue:c,monitor:e.monitor,output:e.output,time:e.time}}var d=i._2,_=i._1,S=le(e.env,i._3);if(d!==void 0){var T=r.pc,E={pc:T,state:2},g=e.proc_env.slice();Y(g,n,E);var z=el(d,S),L=z===0?1:0,H=ir(e.queue,L,e.time+z|0,{TAG:1,_0:On(),_1:n,_2:_,_3:S});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:g,queue:H,monitor:e.monitor,output:e.output,time:e.time}}var ne=nt(e.env,_),ye=et(e.env,_,S),Ye=Tn(t,r),ae=e.proc_env.slice();Y(ae,n,Ye);var we=e.vmodule,ve=e.status,x=e.cont_env,A=e.queue,I=e.monitor,R=e.output,b=e.time,yn={vmodule:we,status:ve,env:ye,cont_env:x,proc_env:ae,queue:A,monitor:I,output:R,time:b};return ci(yn,-1,_,ne,S);case 2:var Ue=zc(e,i._0,i._1,void 0),wn=Tn(t,r),Me=e.proc_env.slice();return Y(Me,n,wn),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Me,queue:e.queue,monitor:e.monitor,output:Ue[1],time:e.time};case 3:var kn=[i._0,i._1,void 0],hl=Tn(t,r),Vr=e.proc_env.slice();return Y(Vr,n,hl),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Vr,queue:e.queue,monitor:kn,output:e.output,time:e.time};case 4:return Na(e,n,i._0);case 5:if(!sm(le(e.env,i._0)))return Na(e,n,i._1);var gl=Tn(t,r),Fr=e.proc_env.slice();return Y(Fr,n,gl),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Fr,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}}function Aa(e,n){for(var t=0,r=e;t<100&&r.status===0&&O(r.proc_env,n).state===0;)t=t+1|0,r=vm(r,n);return t===100&&K("time out!"),r}function mm(e,n){var t=O(e,n);if(t.TAG===4){var r=t._1;if(r.length!==1){var i=r.slice();return i.shift(),Cp(e,n,{TAG:4,_0:t._0,_1:i})}e.splice(n,1);return}e.splice(n,1)}function hm(e){var n=e.proc_type,t;if(n){var r=n._0;t=r!==1&&r<3?0:1}else t=0;return{pc:t,state:0}}function gm(e,n){return n!==void 0?le(e,n):{_0:2}}function Pa(e){var n=e.procs.map(function(i,l){return[i,l]}).filter(function(i){return!0}).map(function(i){return{TAG:3,_0:On(),_1:i[1]}}),t=Ec(sn(e.nets,function(i){return[i.name,{_0:rm(i.name,e.conts)?2:3}]})),r=Mp(e.vars,t,function(i,l){return et(i,l.target,gm(i,l.init))});return{vmodule:e,status:0,env:r,cont_env:sn(e.conts,function(i){return{_0:2}}),proc_env:sn(e.procs,hm),queue:[[0,{active:n,inactive:Cc,nba:Nc}]],monitor:void 0,output:"",time:0}}function _m(e,n,t){var r=le(e.env,n.rhs),i=Pc(e.vmodule.nets,n.lhs,n.delay),l=el(i,r);return[l,{TAG:0,_0:On(),_1:t,_2:r}]}function za(e){var n=e.vmodule.conts.map(function(r,i){return _m(e,r,i)}),t=n.reduce(function(r,i){return ir(r,0,i[0],i[1])},e.queue);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:t,monitor:e.monitor,output:e.output,time:e.time}}function La(e,n){return e.status===0?e.time===n:!1}function ym(e,n){var t=O(e.queue,0),r=t[1],i=r.active.slice(),l=El(i,n);mm(i,n);var o=r.inactive,u=r.nba,a={active:i,inactive:o,nba:u},s=e.queue.slice();Y(s,0,[t[0],a]);var v=e.vmodule,m=e.status,p=e.env,h=e.cont_env,y=e.proc_env,w=e.monitor,P=e.output,f=e.time;switch(l.TAG|0){case 0:var c=l._1,d=h.slice();Y(d,c,l._2);var _=El(v.conts,c).lhs,S=Ac(v.nets,_),T=nt(p,_),E=qv(S.type_),g=mc(function(Qn,wl){return xn(E,Qn,wl)},v.conts.map(function(Qn,wl){return[Qn,wl]}).filter(function(Qn){return Qn[0].lhs===_}).map(function(Qn){return El(d,Qn[1])})),z=et(p,_,g),L=v,H=m,ne=y,ye=w,Ye=P,ae=f,we={vmodule:L,status:H,env:z,cont_env:d,proc_env:ne,queue:s,monitor:ye,output:Ye,time:ae};return ci(we,c,_,T,g);case 1:var ve=l._3,x=l._2,A=l._1,I=nt(p,x),R=et(p,x,ve),b=O(y,A),yn=O(v.procs,A),Ue=Tn(yn,b),wn=y.slice();Y(wn,A,Ue);var Me=v,kn=m,hl=h,Vr=w,gl=P,Fr=f,bd={vmodule:Me,status:kn,env:R,cont_env:hl,proc_env:wn,queue:s,monitor:Vr,output:gl,time:Fr},$d=ci(bd,-1,x,I,ve);return Aa($d,A);case 2:return K("impossible: EventNBA cannot be in active region");case 3:var _l=l._1,jd=O(y,_l),Gd=jd.pc,Ud={pc:Gd,state:0},sa=y.slice();Y(sa,_l,Ud);var Bd=v,Wd=m,Hd=p,Qd=h,qd=w,Xd=P,Kd=f,Yd={vmodule:Bd,status:Wd,env:Hd,cont_env:Qd,proc_env:sa,queue:s,monitor:qd,output:Xd,time:Kd};return Aa(Yd,_l);case 4:var Zd=l._1.slice(),ca=Zd.shift(),Jd=oc(ca===void 0?void 0:Ji(ca)),fa=em(Jd),da=fa[1],yl=fa[0],ep=nt(p,yl),np=et(p,yl,da),tp=v,rp=m,ip=h,lp=y,op=w,up=P,ap=f,sp={vmodule:tp,status:rp,env:np,cont_env:ip,proc_env:lp,queue:s,monitor:op,output:up,time:ap};return ci(sp,-1,yl,ep,da)}}function Ia(e){if(e.status!==0)return!1;var n=O(e.queue,0),t=n[1];return ee(t.active,[])?yc(t.inactive,[]):!1}function wm(e){var n=O(e.queue,0),t=n[1],r=t.inactive,i=[],l=t.nba,o={active:r,inactive:i,nba:l},u=e.queue.slice();return Y(u,0,[e.time,o]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:u,monitor:e.monitor,output:e.output,time:e.time}}function Oa(e){if(e.status!==0)return!1;var n=O(e.queue,0),t=n[1];return ee(t.active,[])&&ee(t.inactive,[])?yc(t.nba,[]):!1}function km(e){var n=O(e.queue,0),t=n[1],r=On(),i=t.nba,l={TAG:4,_0:r,_1:i},o=t.active.concat([l]),u=t.inactive,a=[],s={active:o,inactive:u,nba:a},v=e.queue.slice();return Y(v,0,[e.time,s]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:v,monitor:e.monitor,output:e.output,time:e.time}}function Ma(e){if(e.status!==0)return!1;var n=e.queue.length;if(n===0)return K("impossible");var t=O(e.queue,0)[1];return ee(t.active,[])&&ee(t.inactive,[])?ee(t.nba,[]):!1}function Em(e){var n=e.monitor;if(n===void 0)return e;var t=n[1],r=n[0],i=zc(e,r,t,n[2]);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:[r,t,i[0]],output:i[1],time:e.time}}function Sm(e){var n=Em(e),t=n.queue.slice();if(t.shift(),t.length===0)return{vmodule:n.vmodule,status:1,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:n.time};var r=O(t,0);return{vmodule:n.vmodule,status:n.status,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:r[0]}}var xm=0,Pl=0,Da=0,Ra=1,Tm=0;function Lc(e){return e.map(function(n,t){return N.exports.createElement(N.exports.Fragment,{children:n,key:String(t)})})}function Cm(e){switch(e){case 0:return"&&";case 1:return"||";case 2:return"&";case 3:return"|";case 4:return"^";case 5:return"+"}}function Ae(e){switch(e.TAG|0){case 0:return tt(e._0);case 1:return e._0;case 2:return"!("+Ae(e._0)+")";case 3:return"("+Ae(e._0)+") "+Cm(e._1)+" ("+Ae(e._2)+")";case 4:return"("+Ae(e._0)+") ? ("+Ae(e._1)+") : ("+Ae(e._2)+")"}}function Nm(e){return e?Ae(e._0):"$time"}function gu(e){if(typeof e=="number")return"";switch(e.TAG|0){case 0:return"#"+String(e._0);case 1:return"#("+String(e._0)+", "+String(e._1)+")";case 2:return"#("+String(e._0)+", "+String(e._1)+", "+String(e._2)+")"}}function Va(e){return e!==void 0?gu(e)+" ":""}function ho(e){if(typeof e=="number")return"0";switch(e.TAG|0){case 0:return"posedge "+e._0;case 1:return"negedge "+e._0;case 2:return e._0;case 3:return ho(e._0)+" or "+ho(e._1)}}function Am(e){return typeof e=="number"?"@(*)":e.TAG===0?"#"+String(e._0):"@("+ho(e._0)+")"}function Fa(e,n){return'"'+e+'"'+(n.length===0?"":`,
          `)+hc(", ",n.map(Nm)).join("")}function Ic(e){if(typeof e=="number")return"$finish";switch(e.TAG|0){case 0:return Am(e._0);case 1:return e._0?e._1+" <= "+Va(e._2)+Ae(e._3):e._1+" = "+Va(e._2)+Ae(e._3);case 2:return"$display("+Fa(e._0,e._1)+")";case 3:return"$monitor("+Fa(e._0,e._1)+")";case 4:return"goto +"+String(e._0);case 5:return"goto +"+String(e._1)+" unless "+Ae(e._0)}}function Pm(e,n,t,r){var i=Ic(t),l=" "+(ee(n,r)?i+";":i+`;
`);return ee(e,r)?N.exports.createElement("b",void 0,l):l}function zm(e,n){var t=n.length-1|0;return n.map(function(r,i){return Pm(e,t,r,i)})}function Lm(e){return vc(" ",["assign",gu(e.delay),e.lhs,"=",Ae(e.rhs)+";"])}function Im(e){return e!==void 0?" = "+Ae(e):""}function Om(e){return"logic "+e.target+Im(e.init)+";"}function Mm(e){switch(e){case 0:return"wire";case 1:return"wand";case 2:return"wor"}}function Dm(e){return vc(" ",[Mm(e.type_),gu(e.delay),e.name+";"])}function Rm(e){if(!e)return"initial";switch(e._0){case 0:return"always";case 1:return"always_comb";case 2:return"always_ff";case 3:return"always_latch"}}function Vm(e,n,t){return Lc([].concat([N.exports.createElement("span",{className:"comment"},"// Process "+String(t+1|0)),`
`+Rm(n.proc_type),` begin
`],zm(O(e,t).state===3?-1:O(e,t).pc,n.stmts),[`
end`]))}function Fm(e){switch(e){case 0:return"running";case 1:return"waiting";case 2:return"blocked";case 3:return"finished"}}function bm(e){return e.TAG===2?N.exports.createElement("li",{key:String(e._0)},"nba("+e._1+" <= "+tt(e._2)+")"):K("impossible")}function zl(e,n){switch(n.TAG|0){case 0:var t=n._1;return"update("+O(e,t).lhs+"("+String(t)+")): "+tt(n._2);case 1:return"eval(cont: "+String(n._1+1|0)+", "+n._2+" = "+tt(n._3)+")";case 2:return"nba("+n._1+" <= "+tt(n._2)+")";case 3:return"eval(proc: "+String(n._1+1|0)+")";case 4:return N.exports.createElement("ol",void 0,"NBA events:",sn(n._1,bm))}}function $m(e,n){return Lc(hc(`

`,[e.nets.map(Dm).join(`
`),e.vars.map(Om).join(`
`),e.conts.map(Lm).join(`
`)].concat(e.procs.map(function(t,r){return Vm(n,t,r)}))))}function jm(e){return e!==void 0?N.exports.createElement("code",void 0,Ic({TAG:3,_0:e[0],_1:e[1]})):"No monitor"}var on=gc("Compiler.CompileError");function ba(e,n){return{TAG:0,_0:e,_1:n}}function Br(e,n,t,r){return{TAG:1,_0:e,_1:n,_2:t,_3:r}}function $a(e,n){return{TAG:2,_0:e,_1:n}}function ja(e,n){return{TAG:3,_0:e,_1:n}}function Gm(e,n){return{TAG:4,_0:e,_1:n}}function Um(e,n,t){return{TAG:5,_0:e,_1:n,_2:t}}function Bm(e){return{TAG:6,_0:e}}function Ga(e,n){return[e,n]}function Wm(e){return{TAG:0,_0:e}}function Ua(e,n,t){return{TAG:1,_0:e,_1:n,_2:t}}function Ba(e,n,t){return{TAG:3,_0:e,_1:n,_2:t}}function Wa(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function Hm(e,n){return{TAG:4,_0:e,_1:n}}function Qm(e){return{TAG:0,_0:e}}function qm(e){return{TAG:1,_0:e}}function cn(e){for(;;){var n=e;switch(n.TAG|0){case 0:return;case 1:return pc([n._0]);case 2:e=n._0;continue;case 3:return zn(cn(n._0),cn(n._2));case 4:return rr([cn(n._0),cn(n._1),cn(n._2)])}}}function Xm(e){if(e)return cn(e._0)}function vt(e){for(;;){var n=e;if(typeof n=="number")return;switch(n.TAG|0){case 0:var t=n._1;if(t===void 0)return;e=t;continue;case 1:return cn(n._3);case 2:case 3:return rr(n._1.map(Xm));case 4:return zn(cn(n._0),vt(n._1));case 5:return rr([cn(n._0),vt(n._1),vt(n._2)]);case 6:return rr(n._0.map(vt))}}}function fi(e){for(;;){var n=e;if(typeof n=="number")return;switch(n.TAG|0){case 1:return pc([n._1]);case 4:e=n._1;continue;case 5:return zn(fi(n._1),fi(n._2));case 6:return rr(n._0.map(fi));default:return}}}function Km(e){var n=vt(e),t=fi(e),r=Sc(ao(Qp(n,ao(t))).map(function(l){return{TAG:2,_0:l}})),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:e}}function Kn(e){if(typeof e=="number")return e;switch(e.TAG|0){case 0:if(typeof e._0!="number")return e;var n=e._1;if(n===void 0)return{TAG:0,_0:{TAG:1,_0:0},_1:void 0};var t=Kn(n),r=Sc(ao(vt(t)).map(function(l){return{TAG:2,_0:l}})),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:t};case 4:return{TAG:4,_0:e._0,_1:Kn(e._1)};case 5:return{TAG:5,_0:e._0,_1:Kn(e._1),_2:Kn(e._2)};case 6:return{TAG:6,_0:e._0.map(Kn)};default:return e}}function lr(e){for(;;){var n=e;if(typeof n=="number")return 0;switch(n.TAG|0){case 0:var t=n._0;if(typeof t=="number"||t.TAG!==0)return 1;throw{RE_EXN_ID:on,_1:"Time control not allowed inside new-type always",Error:new Error};case 1:if(n._2===void 0)return 0;throw{RE_EXN_ID:on,_1:"Delayed assignments not allowed inside new-type always",Error:new Error};case 4:e=n._1;continue;case 5:return lr(n._1)+lr(n._2)|0;case 6:return Xp(n._0.map(lr));default:return 0}}}function Ym(e,n){if(ee(e,{_0:1})||ee(e,{_0:3})){if(lr(n)===0)return;throw{RE_EXN_ID:on,_1:"Event control not allowed inside always_comb/always_latch",Error:new Error}}if(!!ee(e,{_0:2})&&lr(n)!==1)throw{RE_EXN_ID:on,_1:"Must be one and one only event control inside always_ff",Error:new Error}}function Zm(e,n){if(!e)return Kn(n);var t=e._0;return t!==1&&t<3?Kn(n):Km(n)}function Jm(e){return{target:e[0],init:e[1]}}function eh(e,n,t){var r;switch(e){case"triand":case"wand":r=1;break;case"tri":case"wire":r=0;break;case"trior":case"wor":r=2;break;default:r=K("impossible net type")}return{type_:r,name:t,delay:n}}function _u(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:on,_1:"Expected variable, found: "+Ae(e),Error:new Error}}function nh(e,n){if(n.length===2){var t=_u(O(n,0)),r=O(n,1);return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:on,_1:"Expected two arguments to not gate",Error:new Error}}function th(e){switch(e){case"and":return 2;case"or":return 3;case"xor":return 4;default:return K("impossible gate")}}function rh(e,n,t){if(t.length===3){var r=_u(O(t,0)),i=O(t,1),l=O(t,2),o={TAG:3,_0:i,_1:e,_2:l};return{lhs:r,delay:n,rhs:o}}throw{RE_EXN_ID:on,_1:"Expected three arguments to gate",Error:new Error}}function ih(e,n){if(n.length===3){var t=_u(O(n,0)),r={TAG:2,_0:{TAG:3,_0:O(n,1),_1:3,_2:O(n,2)}};return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:on,_1:"Expected three arguments to gate",Error:new Error}}function pt(e){if(typeof e=="number")return[0];switch(e.TAG|0){case 0:var n=e._1,t=e._0;return n!==void 0?[{TAG:0,_0:t}].concat(pt(n)):[{TAG:0,_0:t}];case 1:return[{TAG:1,_0:e._0,_1:e._1,_2:e._2,_3:e._3}];case 2:return[{TAG:2,_0:e._0,_1:e._1}];case 3:return[{TAG:3,_0:e._0,_1:e._1}];case 4:var r=pt(e._1);return[{TAG:5,_0:e._0,_1:r.length+1|0}].concat(r);case 5:var i=pt(e._1),l=pt(e._2);return[{TAG:5,_0:e._0,_1:i.length+2|0}].concat(i,[{TAG:4,_0:l.length+1|0}],l);case 6:return e._0.reduce(function(o,u){return o.concat(pt(u))},[])}}function lh(e){switch(e){case"always":return{_0:0};case"always_comb":return{_0:1};case"always_ff":return{_0:2};case"always_latch":return{_0:3};case"initial":return 0;default:return K("impossible proc type")}}function oh(e,n){switch(n.TAG|0){case 0:var t=n._0.map(Jm);return{vars:e.vars.concat(t),nets:e.nets,conts:e.conts,procs:e.procs};case 1:var r=n._1,i=n._0,l=n._2.map(function(T){return eh(i,r,T)});return{vars:e.vars,nets:e.nets.concat(l),conts:e.conts,procs:e.procs};case 2:var o=n._2,u=n._1,a=n._0;if(a==="not"){var s=o.map(function(T){return nh(u,T)});return{vars:e.vars,nets:e.nets,conts:e.conts.concat(s),procs:e.procs}}if(a==="and"||a==="or"){var v=th(a),m=o.map(function(T){return rh(v,u,T)});return{vars:e.vars,nets:e.nets,conts:e.conts.concat(m),procs:e.procs}}if(a==="nor"){var p=o.map(function(T){return ih(u,T)});return{vars:e.vars,nets:e.nets,conts:e.conts.concat(p),procs:e.procs}}throw{RE_EXN_ID:on,_1:"Unsupported gate: "+a,Error:new Error};case 3:var h=n._0,y=n._1,w=n._2,P={lhs:h,delay:y,rhs:w};return{vars:e.vars,nets:e.nets,conts:e.conts.concat([P]),procs:e.procs};case 4:var f=n._1,c=lh(n._0);Ym(c,f);var d=Zm(c,f),_=pt(d),S={proc_type:c,stmts:_};return{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs.concat([S])}}}function uh(e){var n=[],t=[],r=[],i=[],l={vars:n,nets:t,conts:r,procs:i};return e.reduce(oh,l)}var ah=0;const Oc=ohm.grammar(String.raw`
  verilogGrammar {
    Module = "module" id ";" Top* "endmodule"

    ProcType = "initial" | "always_comb" | "always_latch" | "always_ff" | "always"

    Decl = id "=" Exp -- init
         | id -- no_init

    GateDecl = id? "(" ListOf<Exp, ","> ")"

    Top = type NonemptyListOf<Decl, ","> ";" -- decl

        | WireType NonemptyListOf<id, ","> ";" -- net
        | WireType Delay NonemptyListOf<id, ","> ";" -- net_delay

        | "assign" id "=" Exp ";" -- cont
        | "assign" Delay id "=" Exp ";" -- cont_delay

        | gate NonemptyListOf<GateDecl, ","> ";" -- gate
        | gate Delay NonemptyListOf<GateDecl, ","> ";" -- gate_delay

        | ProcType Stmt -- proc

    TimeCont = "#" number -- delay
             | "@" "(" Event_Exp ")" -- event
             | "@" "("? "*" ")"? -- star

    Stmt = id "=" Exp ";" -- blocking
         | id "=" Delay Exp ";" -- blocking_delay
         | id "<=" Exp ";" -- nonblocking
         | id "<=" Delay Exp ";" -- nonblocking_delay

         | "if" "(" Exp ")" Stmt "else" Stmt -- if_else
         | "if" "(" Exp ")" Stmt -- if

         | "$display" "(" string "," NonemptyListOf<ExpOrTime, ","> ")" ";" -- display
         | "$display" "(" string ")" ";" -- display_no_args

         | "$monitor" "(" string "," NonemptyListOf<ExpOrTime, ","> ")" ";" -- monitor
         | "$monitor" "(" string ")" ";" -- monitor_no_args

         | "$finish" ";" -- finish

         | TimeCont Stmt -- time_stmt
         | TimeCont ";" -- time

         | "begin" Stmt* "end" -- block

    Delay = "#" "(" number "," number "," number ")" -- three
          | "#" "(" number "," number ")" -- two
          | "#" "("? number ")"? -- one

    WireType = "wire" | "tri" | "wand" | "triand" | "wor" | "trior"

    Event_Exp = Event_Exp ("or" | ",") Event_Exp1 -- or
               | Event_Exp1
    Event_Exp1 = "posedge" id -- posedge
               | "negedge" id -- negedge
               | id -- id

    // REF: 11.3.2 Operator precedence
    Exp = Exp1 "?" Exp ":" Exp -- cond
        | Exp1

    Exp1 = Exp1 "||" Exp2 -- lor
         | Exp2

    Exp2 = Exp2 "&&" Exp3 -- land
         | Exp3

    Exp3 = Exp3 "|" Exp4 -- bor
         | Exp4

    Exp4 = Exp4 "^" Exp5 -- bxor
         | Exp5

    Exp5 = Exp5 "&" Exp6 -- band
         | Exp6

    Exp6 = Exp6 "+" Exp7 -- add
         | Exp7

    Exp7 = ("!" | "~") Exp7 -- not
         | Exp8

    Exp8 = id -- id
         | bit -- bit
         | "0" -- zero
         | "1" -- one
         | "(" Exp ")" -- paren

    ExpOrTime = Exp -- exp
              | "$time" -- time

    number = digit+
    bit = "1'b" ("0" | "1" | "x" | "X" | "z" | "Z")
    string = "\"" (~"\"" any)* "\""
    id = letter (letter | digit | "_")*
    type = "logic" | "reg"

    gate = "and" | "nand" | "or" | "nor" | "xor" | "xnor" | "not"

    comment = multiLineComment | singleLineComment
    multiLineComment = "/*" (~"*/" any)* "*/"
    singleLineComment = "//" (~lineTerminator any)*
    lineTerminator = "\n"

    space += comment
  }
`),Mc=Oc.createSemantics();Mc.addOperation("translate",{Module(e,n,t,r,i){return r.children.map(l=>l.translate())},Decl_no_init(e){return Ga(e.translate(),Gr)},Decl_init(e,n,t){return Ga(e.translate(),jr(t.translate()))},GateDecl(e,n,t,r){return t.asIteration().children.map(i=>i.translate())},Top_decl(e,n,t){return Wm(n.asIteration().children.map(r=>r.translate()))},Top_net(e,n,t){return Ua(e.translate(),Pl,n.asIteration().children.map(r=>r.translate()))},Top_net_delay(e,n,t,r){return Ua(e.translate(),n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_cont(e,n,t,r,i){return Ba(n.translate(),Pl,r.translate())},Top_cont_delay(e,n,t,r,i,l){return Ba(t.translate(),n.translate(),i.translate())},Top_gate(e,n,t){return Wa(e.sourceString,Pl,n.asIteration().children.map(r=>r.translate()))},Top_gate_delay(e,n,t,r){return Wa(e.sourceString,n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_proc(e,n){return Hm(e.sourceString,n.translate())},WireType(e){return this.sourceString},TimeCont_delay(e,n){return Wv(n.translate())},TimeCont_event(e,n,t,r){return Hv(t.translate())},TimeCont_star(e,n,t,r){return Tm},Stmt_blocking(e,n,t,r){return Br(Da,e.translate(),Gr,t.translate())},Stmt_blocking_delay(e,n,t,r,i){return Br(Da,e.translate(),jr(t.translate()),r.translate())},Stmt_nonblocking(e,n,t,r){return Br(Ra,e.translate(),Gr,t.translate())},Stmt_nonblocking_delay(e,n,t,r,i){return Br(Ra,e.translate(),jr(t.translate()),r.translate())},Stmt_if(e,n,t,r,i){return Gm(t.translate(),i.translate())},Stmt_if_else(e,n,t,r,i,l,o){return Um(t.translate(),i.translate(),o.translate())},Stmt_display(e,n,t,r,i,l,o){return $a(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_display_no_args(e,n,t,r,i){return $a(t.translate(),[])},Stmt_monitor(e,n,t,r,i,l,o){return ja(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_monitor_no_args(e,n,t,r,i){return ja(t.translate(),[])},Stmt_finish(e,n){return ah},Stmt_time_stmt(e,n){return ba(e.translate(),jr(n.translate()))},Stmt_time(e,n){return ba(e.translate(),Gr)},Stmt_block(e,n,t){return Bm(n.children.map(r=>r.translate()))},Delay_one(e,n,t,r){return Iv(t.translate())},Delay_two(e,n,t,r,i,l){return Ov(t.translate(),i.translate())},Delay_three(e,n,t,r,i,l,o,u){return Mv(t.translate(),i.translate(),o.translate())},Event_Exp(e){return e.translate()},Event_Exp_or(e,n,t){return Bv(e.translate(),t.translate())},Event_Exp1_id(e){return Uv(e.translate())},Event_Exp1_posedge(e,n){return jv(n.translate())},Event_Exp1_negedge(e,n){return Gv(n.translate())},Exp(e){return e.translate()},Exp_cond(e,n,t,r,i){return zv(e.translate(),t.translate(),i.translate())},Exp1(e){return e.translate()},Exp1_lor(e,n,t){return Tv(e.translate(),t.translate())},Exp2(e){return e.translate()},Exp2_land(e,n,t){return xv(e.translate(),t.translate())},Exp3(e){return e.translate()},Exp3_bor(e,n,t){return Nv(e.translate(),t.translate())},Exp4(e){return e.translate()},Exp4_bxor(e,n,t){return Av(e.translate(),t.translate())},Exp5(e){return e.translate()},Exp5_band(e,n,t){return Cv(e.translate(),t.translate())},Exp6(e){return e.translate()},Exp6_add(e,n,t){return Pv(e.translate(),t.translate())},Exp7(e){return e.translate()},Exp7_not(e,n){return Sv(n.translate())},Exp8_id(e){return Ev(e.translate())},Exp8_bit(e){return Cl(e.translate())},Exp8_zero(e){return Cl(Tl(ka))},Exp8_one(e){return Cl(Tl(wa))},Exp8_paren(e,n,t){return n.translate()},ExpOrTime_exp(e){return Lv(e.translate())},ExpOrTime_time(e){return xm},number(e){return parseInt(this.sourceString,10)},bit(e,n){var t;switch(n.sourceString.toLowerCase()){case"1":t=wa;break;case"0":t=ka;break;case"x":t=av;break;case"z":t=sv;break;default:throw"Impossible!"}return Tl(t)},string(e,n,t){return n.sourceString},id(e,n){return this.sourceString}});function sh(e){try{const n=Oc.match(e);return Qm(Mc(n).translate())}catch(n){if(n instanceof TypeError)return qm(n.message);throw n}}var Ll=Ec([["empty.sv",`module empty;

// Put Verilog code here!

// See the modules in 00 (in the top-left menu) for some introductory notes!

endmodule
`],["nonblocking2.sv",`module nonblocking2;

logic a;

// a must be 0 at end of time slot

initial begin
 a <= 1'b0;
 a = 1'b1;
end

endmodule
`],["misc/xprop.sv",`module xprop;

logic a;
wire b, c, d, e;

// b is x!
assign b = a & ~a;

// c is also, more reasonably, x
assign c = 1'bx ? 1 : 0;

// This is actually 0
assign d = 1'bx && 0;

// And this is 1
assign e = 1'bx || 1;

endmodule
`],["misc/xif.sv",`module xif;

// This will always print "Second branch", see p. 299

initial
 if (1'bx)
  $display("First branch");
 else
  $display("Second branch");

endmodule
`],["misc/always_initial.sv",`module always_initial;

// No order between always and initial blocks:

logic a, b, c;

initial a = 0;
initial a = 1;

initial b = 0;
always begin b = 1; @(*); end

always begin c = 0; @(*); end
always begin c = 1; @(*); end

initial $monitor("a = %b, b = %b, c = %b", a, b, c);

endmodule
`],["misc/monitor1.sv",`module monitor1;

// Basic $monitor example

// Note that the order of execution does not matter,
// the output is the same.

logic a;
   
initial $monitor("a = %b at time %d", a, $time);

initial begin
 a = 1'b0;
 #10 a = 1'bz;
end

endmodule
`],["misc/monitor2.sv",`module monitor2;

// Edge-case with only $time

initial $monitor("%d", $time);

endmodule
`],["misc/always_ff_test.sv",`module always_ff_test;

logic clk, a, b;

// An always_ff block must have one and only 
// one event control
always_ff @(posedge clk)
 a <= a;

// However, the standard (strangely) does not
// say it must be at the beginning of the always
always_ff begin
 b <= b;
 @(posedge clk);
end

endmodule
`],["init/var_init1.sv",`module var_init1;

// Initialisation of variables is a little trick in
// Verilog because of its history. That is, different
// versions of Verilog handle initialisation of
// variables differently.

// In SystemVerilog, initialisation happens before
// any events and does itself not cause any events
// to happen.

// So, e.g. the following will always print 0:

logic a = 0;

initial $display("a = %b", a);
   
// In Verilog before SystemVerilog, the above 
// had the following semantics
// (with "a" renamed to "b"):

logic b;
   
initial b = 0;

initial $display("b = %b", b);

// Which can print either x or 0, because the order
// of the initial processes is nondeterministic.

endmodule
`],["init/net_init5.sv",`module net_init5;

// Should net delays affect "z initialisation" for 
// nets without drivers? E.g., that the net should
// be x before being initialised after the net delay.
// Seems that simulators are opting for "no".

// The above is relevant since an alternative 
// interpretation of the standard is that an
// initialisation event should be scheduled at 
// startup instead of updating the net directly.

// This module can be seen as an argument against
// treating net initialisation for nets without
// drivers using events (since net delays seem
// to not be taken into account).

wire #10 a;

initial $monitor("%b", a);

endmodule
`],["init/net_init1.sv",`module net_init1;

// Page 86 of the standard says:
// "If no driver is connected to a net, its value
// shall be high-impedance (z) [...]."

wire a;  

initial $display("%b", a);

endmodule
`],["init/net_init4.sv",`module net_init4;

wire a;

// Suspicious cycle, results in "a" being x in 
// simulators, which could be a little surprising

assign a = a;
  
initial $monitor("a = %b for time %d", a, $time);

endmodule
`],["init/net_init3.sv",`module net_init3;

// Similar to net_init2, except that the net
// does not have any drivers this time.

wire a;
logic b = a;

initial $monitor("%b", b);

endmodule
`],["init/var_init3.sv",`module var_init3;

// The following example is from "Verilog Coding
// Standard" by Charles Eric LaForest, available at
// http://fpgacpu.ca/fpga/verilog.html
//
// (Also, thanks to Charles for the pointer
// to the example!)

// The example is written for Verilog-2001, and
// hence uses the pre-SystemVerilog semantics for
// initialisation (see the module init1).

// Here we emulate the semantics of pre-SystemVerilog
// to illustrate the Verilog-2001 problem highlighted
// by the example:

// The example includes the following declarations:
//
// // Counts as a negedge at time zero! (X -> 0)
// logic clock = 1'b0;
// // Also does X -> 0 at time zero.
// logic foo = 1'b0;
// logic bar;
//
// Which we must declare as follows to get the
// pre-SystemVerilog semantics:

logic clock, foo, bar;
initial clock = 1'b0;
initial foo = 1'b0;

// The rest of the example remains unchanged:

// Simulate the clock
always #1 clock = ~clock;

// It is unclear if the clock edge or the "foo"
// initialization will happen first, so "bar" can
// get X for one simulation cycle...
always @(negedge clock)
 bar <= foo;

endmodule
`],["init/net_init7.sv",`module net_init7;

// Another init-related delay test
  
wire a;

assign #5 a = 0;
assign #6 a = 1'bz;

initial $monitor("%b at time = %d", a, $time);

endmodule
`],["init/var_init2.sv",`module var_init2;

// Variables can also be initialised with nonconstants,
// such as:

logic a = 1;
logic b = a;
   
// Variables must be declared before use:
//
// See "6.21 Scope and lifetime" (p. 126):
//
// "A variable declaration shall precede any simple
// reference (non-hierarchical) to that variable."

// Thus, e.g., the following is not possible:
//
// logic a = b;
// logic b = 1;

// I have not found a clear reference in the standard,
// but I assume variables are to be initialised in
// declaration order. (This is guaranteed by e.g. C++.)

endmodule
`],["init/net_init6.sv",`module net_init6;

// Here simulators seem to opt for letting
// the net be x before the first assignment
// from the driver.
  
wire a;

assign #5 a = 0;

initial $monitor("%b at time = %d", a, $time);

endmodule
`],["init/net_init2.sv",`module net_init2;

// Page 98 of the standard says:
// "The default initialization value for a net 
// shall be the value z."
//
// Based on the above the above one might maybe
// expect that the below should be able to print
// z or 0.
  
wire a;

assign a = 0;

initial $display("%b", a);

// However, some simulators print x here.
//
// One way to make sense of this is that the
// resolution function of the net is run before
// the drivers are initialised.

// In VV, we simply assign z as the initial value
// for unconnected nets and x as the initial value
// for connected nets, modelling a run of the
// resolution function of the net at initialisation.

endmodule
`],["xx_more/Meredith/fig5_netassign2.sv",`module fig5_netassign2;

// In this module we continue the discussion started
// in fig5_netassign1.sv.

// Consider the following modifications to the
// fig5_netassign1 module:

// Modified: net must now be variable,
// otherwise the below code is not valid.

//wire w;
logic w;

reg r;

// Modified: the continuous assignment is 
// replaced by a combinational always block

//assign w = r;
always_comb w = r;

initial begin
 r = 0;
 r = 1;
end

// In one of Meredith et al.'s reading of the standard,
// the fig5_netassign1 module (called just netassign in
// their paper), should have the same semantics as the 
// above modified code; i.e., the semantics of continuous
// assignments is given by replacing all such assignments
// with analogue combinational always blocks.

// Meredith et al. concludes that this cannot be the
// case since in their semantics the above code
// can end up in final states with w = 0.

// This conclusion is incorrect: the reason the above
// code has strange behaviour in their semantics is
// because of (what seems to be) a contradiction in the
// standard. See the MEMOCODE'22 paper, by me, called
// "A small, but important, concurrency problem in 
// Verilog's semantics?" for a discussion on this.
// In short, in the paper I suggest that processes 
// cannot be interleaved arbitrarily, as suggested
// by the standard. Instead, when awaken, a process
// must execute, uninterrupted, until it blocks.

// Without arbitrary interleavings, the above code 
// executes without problems.
// 
// VV implements this restricted interleaving 
// semantics and the module hence functions
// sensibly in VV (i.e., w = 1 in all reachable
// end states).

// Variables updated by processes and nets updated
// by continuous assignments differ in semantics in
// other ways, but in the above code the two ways
// to model w are equivalent.

// In summary, the suggestion that continuous
// assignments can be given semantics by replacing
// them with combinational always blocks is
// incorrect. However, in the special case
// of fig5_netassign1/netassign, the behaviour of
// the module implemented using continuous
// assignments vs. always blocks is the same.

endmodule
`],["xx_more/Meredith/fig6_propagation_loop.sv",`module fig6_propagation_loop;

// This module illustrates a bug in an old version
// of the simulator Icarus rather than a problem
// with the Verilog standard.

// The module uses arrays, which is not supported by
// VV so we provide a scalar version of the module
// here to illustrate how the events propagate in the
// array version.

// Original module:

// reg [15:0] x;
//
// initial begin
//  x = 0;
//  x <= 2;
//  #10 $display("x = %d", x);
//  $finish;
// end
//
// always @(x[0])
//  x = x + 1;

// Scalar version:

logic x;

initial begin
 x = 0;
 x <= 1;
 #10 $display("x = %b", x);
 $finish;
end

always @(x)
 x = x + 1;

endmodule
`],["xx_more/Meredith/fig7_net_assignment_fix.sv",`module fig7_net_assignment_fix;

// Version of fig7_net_assignment.sv using nonblocking
// assignments to avoid race at start.

wire x;
reg y;

assign x = y;

initial begin
 y <= 0;
 y <= 1;
 y <= 0;
 y <= 1;
end

always @(posedge x)
 $display("posedge x");

endmodule
`],["xx_more/Meredith/fig7_net_assignment.sv",`module fig7_net_assignment;

// Meredith et al. say that this module raises 
// the following question:
//
// "[...] We believe that this is an interesting area
// of discussion with regards to the standard:
// should all of the updates be allowed to occur
// before the always block begins execution?"
//
// In their semantics, the following code will
// display "posedge x" at least once:

wire x;
reg y;

assign x = y;

initial begin
 y = 0;
 y = 1;
 y = 0;
 y = 1;
end

always @(posedge x)
 $display("posedge x");

// However, they also state:
//
// "One may make the argument that the always block
// can fail to begin (and thus become delayed) before 
// the update to x."
//
// This is exactly my reading of the standard.
// I.e., the above code genuinely contains a race.
// The way to avoid races like this is to use 
// nonblocking assignments for communication between
// blocks.
//
// In other words, the standard does not guarantee
// any order of execution between blocks, including
// at startup. Meredith et al. provide no reference
// to where the standard would state the opposite.

// VV hence allows for the possibility of no output
// when running the above code.

// See fig7_net_assignment_fix.sv for a fixed version

endmodule
`],["xx_more/Meredith/fig5_netassign1.sv",`module fig5_netassign1;

// Meredith et al., in the conclusion of their
// MEMOCODE'10 paper "A Formal Executable Semantics
// of Verilog", says the following:
//
// "We believe that our definition can be useful
// [...] as a starting point for discussion on
// exactly what the standard should entail [...]."
//
// In the modules in this directory, we respond to
// the questions and suggestions raised by Meredith et al..
// We refer the tech. report version of the paper since
// that version is slightly longer than the published
// paper (12 pages vs. 10 pages).

// We now address their discussion on Fig. 5:

// Meredith et al. states that the following has
// unclear semantics:

wire w;
reg r;

assign w = r;

initial begin
 r = 0;
 r = 1;
end

// They state that the above is problematic because
// the net can have multiple events scheduled at once
// according to their reading of the standard.

// In my reading of the standard, the standard discusses
// this in Sec 10.3.3 "Continuous assignment delays".
// The standard states that situations like the above
// should be handled by "descheduling" previously
// scheduled events to the net.
// (For this reading of the standard, one has to
// understand the above continuous assignment as
// having zero delay.)

// Meredith et al., however, do not refer to Sec 10.3.3.
// Instead, they claim that the standard does not 
// address situations like the above properly and
// they instead refer to a paper by Mike Gordon
// that, in turn, introduces the descheduling semantics
// described above. Hence, in the end, Meredith et al.
// end up implementing the right semantics but without
// grounding their choices in the standard (instead,
// they think they are correcting the standard).

// (Moreover, since Meredith et al. do not discuss
// delays in the context of nets (since they do not
// properly differentiate nets and variables),
// a general discussion of descheduled is missing
// from the paper.)

// In the end: clearly, the standard is not clear
// enough on this topic since it seems that
// Meredith et al. have misunderstood the standard.
// However, the problem they highlight is
// in the end not a problem with the semantics
// of Verilog, it is a problem with how the
// semantics is presented in the standard.

// To see descheduling in action -- try simulating
// the module in VV! In particular, it is not possible
// to end up in a final state where w is 0.

// See also fig5_netassign2.sv

endmodule
`],["xx_more/Meredith/fig9_finish.sv",`module fig9_finish;

// Another module that is more of an observation
// than a problem with the standard.

// Whether the final "100" printout happens
// depend on scheduling order.

always #25 $display("%d", $time);

initial #100 $finish;

endmodule
`],["xx_more/Cummings/comb_in_seq.sv",`// This is module blk1a from
// http://www.sunburst-design.com/papers/CummingsSNUG2002Boston_NBAwithDelays.pdf;
// see page 31

module comb_in_seq;

wire y;
   
logic q;
logic a = 0, b = 0, c = 0;
logic clk = 0, rst_n = 0;

logic d; // combinational intermediate signal

always @(posedge clk or negedge rst_n)
 if (!rst_n)
  q <= 0;
 else begin
  d = a & b;
  q <= d;
 end
 
assign y = q & c;

initial begin
 // Per figure 22 in the pdf,
 // d is combinational but does 
 // does not change before clk edge:
 #2 rst_n = 1; a = 1; b = 1;
 #1 clk = 1;
end

endmodule
`],["xx_more/Cummings/pipen1.sv",`module pipen1;
   
// See pipeb3

// This is a good implementation

logic inp = 1;
logic q3, q2, q1;

logic clk = 0;

always #1 clk = ~clk;

always @(posedge clk) begin
 q1 <= inp;
 q2 <= q1;
 q3 <= q2;
end

endmodule
`],["xx_more/Cummings/pipeb3.sv",`module pipeb3;

// Modified example from
// http://www.sunburst-design.com/papers/CummingsSNUG2000SJ_NBA_rev1_2.pdf

// This module is broken, blocking assignments
// should not be used here

logic inp = 1;
logic q3, q2, q1;

logic clk = 0;

always #1 clk = ~clk;

always @(posedge clk) q1 = inp;
always @(posedge clk) q2 = q1;
always @(posedge clk) q3 = q2;

endmodule
`],["xx_more/Cummings/pipen3.sv",`module pipen3;
   
// See pipeb3

// This is a good implementation

logic inp = 1;
logic q3, q2, q1;

logic clk = 0;

always #1 clk = ~clk;

always @(posedge clk) q1 <= inp;
always @(posedge clk) q2 <= q1;
always @(posedge clk) q3 <= q2;

endmodule
`],["xx_more/Sagdeo/ex4_1.sv",`//
// The examples in this directory are from the book
// "The Complete Verilog Book" by Vivek Sagdeo
//

// Example 4-1, A sample design with structure and behavior.

module ex4_1;

reg i1, i2, i3, i4;
// MOD: Wires implicit in original module
wire	o1, o2, o3;
   
and #2 a1(o1, i1, i2), a2(o2, i3, i4);
or r1(o3, o1, o2);

initial begin
 $monitor("Sim Time=%d i1=%b i2=%b i3=%b i4=%b o1=%b o2=%b o3=%b",
	  $time, i1, i2, i3, i4, o1, o2, o3);
 #25 i1 = 1;
 #25 i2 = 0;
 #25 i3 = 1;
 #25 i4 = 1;
 #100 $finish;
end

endmodule
`],["xx_more/Sagdeo/ex4_5.sv",`// Example 4-5. Multiple events on a reg resulting cancellation (algorithm 4-7 applied)

module ex4_5;

wire out;
reg in1, in2;

assign #5 out = in1 && in2;

initial begin
 $monitor("Time = %d out = %b in1=%b in2=%b",
	  $time, out, in1, in2);
 // MOD: dumpfile not needed
 // $dumpfile("ex4_2.dmp");
 // $dumpvars;
 // $gr_waves(out, in1, in2);
 #1 in1 = 1;
 #2 in2 = 1;
 #2 in1 = 0;
 #10 $finish;
end

endmodule
`],["xx_more/Sagdeo/ex4_4.sv",`// Example 4-4. Multiple events on a reg -- but no cancellation (algorithm 4-7 applied)

module ex4_4;

wire out;
reg in1, in2;

assign #5 out = in1 || in2;

initial begin
 $monitor("Time = %d out = %b in1=%b in2=%b",
          $time, out, in1, in2);
 // MOD: dumpfile not needed
 // $dumpfile("ex4_2.dmp");
 // $dumpvars;
 // $gr_waves(out, in1. in2);
 #1 in1 = 1;
 #2 in2 = 1;
 #10 $finish;
end

endmodule
`],["xx_more/Sagdeo/ex4_nondet.sv",`// Unnamed example, p. 91--92

module ex4_nondet;

// MOD: rega not declared in original example since 
//      just code snippet
logic rega;

initial #5 rega = 1'b1;

initial #5 rega = 1'b0;

initial #6 $display("rega at time = %d is %b", $time, rega);

/* The above may result in 1 or 0 depending on the simulation run and the simulator tool */
   
endmodule
`],["nonblocking3.sv",`module nonblocking3;

logic a;

// a must be 0 at end of time slot

initial begin
 a = 1'b0;
 a <= a;
end

endmodule
`],["latch/latch_gatelevel.sv",`module latch_gatelevel;

wire Q, Qbar;
logic S, R;

// SR_latch_gate from lab 5 from "HDL Design using Vivado",
// https://www.xilinx.com/support/university/vivado/vivado-teaching-material/hdl-design.html
//
// Table for SR latch from PDF for lab 5:
//
// +---+---+---+--------+
// | S | R | Q |  Qbar  |
// +---+---+---+--------+
// | 0 | 0 |   latch    |
// +---+---+------------+
// | 0 | 1 | 0 |    1   |
// +---+---+------+-----+
// | 1 | 0 | 1 |    0   |
// +---+---+------------+
// | 1 | 1 | metastable |
// +---+---+---+--------+

nor(Q, R, Qbar);
nor(Qbar, S, Q);

initial begin
 S = 0; R = 1;
 #1 R = 0;
 #1 S = 1;
 #1 S = 0;
end

initial
 $monitor("S = %b, R = %b, Q = %b, Qbar = %b",
	  S, R, Q, Qbar);

endmodule
`],["latch/always_latch_same_as_always_comb.sv",`module always_latch_same_as_always_comb;

// always_latch blocks are defined to have the same
// semantics as always_comb blocks, except that
// "software tools should perform additional checks
// and warn if the behavior in an always_latch
// construct does not represent latched logic".
// VV performs no such check, since it is not
// a synthesis tool; nor does it check always_comb
// blocks in this way.

// Example from p. 208

logic ck = 1, q, d = 0;
   
always_latch
 if (ck)
  q <= d;

endmodule
`],["comb/selftrigger_loop2.sv",`module selftrigger_loop2;

// Compare with selftrigger_loop1

logic a = 1'b0;
logic b = 1'b0;

// No infinite loop since a process cannot self-trigger

always_comb begin
 b = !a;
 a = b;
end

endmodule
`],["comb/always_star2.sv",`module always_star2;

logic a, b;  

initial b <= 1;

always begin
 @(b) a = 0;
 @(*) a = 1;
end

initial $monitor("%b", a);

endmodule
`],["comb/always_comb_vs_always.sv",`module always_comb_vs_always;

// always_comb blocks are unconditionally run at start up,
// always blocks are not

logic a;
logic b;
logic c = 1'b0;

// a will be 1 at the end of simulation
always_comb a = c + 1'b1;

// b will, in contrast, be x at the end of simulation;
// this is because the process will never get past @(*)
always @(*) b = c + 1'b1;

endmodule

`],["comb/always_star1.sv",`module always_star1;

// Examples from the standard, p. 219;
// illustrates that @* is preprocessed away correctly 

logic a, b, c, d, i, x, y, tmp1, tmp2, kid;

// Example 1: Uses functions, not supported by VV

// Example 2:
// equivalent to @(a or b or c or d or tmp1 or tmp2)
always @* begin
 tmp1 = a & b;
 tmp2 = c & d;
 y = tmp1 | tmp2;
end

// Example 3:
// equivalent to @(b)
always @* begin 
 @(i) kid = b; // i is not added to @*
end
   
// Example 4:
// equivalent to @(a or b or c or d)
always @* begin 
 x = a ^ b;
 // equivalent to @(c or d)
 @* x = c ^ d;
end

// Example 5 and 6: Uses arrays, not supported by VV

endmodule
`],["comb/always_comb_writes_removed.sv",`module always_comb_writes_removed;

// variables written to be always_comb are removed
// from sensitivity list 

logic a, b, c, d;

// does not include a
always_comb begin
 a = 0;
 b = a;
end

// does not include c
always_comb begin
 d = c;
 c = 0;
end

endmodule
`],["comb/comb_nonblocking.sv",`module comb_nonblocking;

// One should never use nonblocking assignments in
// combinational blocks. Here we illustrate one
// reason for this coding rule.

// The below combinational process will loop forever
// in the sense that simulation will never progress
// beyond the first time slot.

logic a = 0, b = 0;

initial b <= 1;

always @(*) a <= a + b;

endmodule
`],["comb/always_comb_without_reads.sv",`module always_comb_without_reads;

// Test for what happens with combinational always
// blocks without dependencies

logic a, b, c;

initial $monitor("a = %b, b = %b at time %d", a, b, $time);

// simulators output 0 at time 0 and terminate normally
always_comb a = 1'b0;

// simulators output x at time 0 and terminate normally
always @(*) b = 1'b0;

// simulators loop infinitely on this:
//always c = 1'b0;

endmodule
`],["comb/selftrigger_loop1.sv",`module selftrigger_loop1;

// Compare with selftrigger_loop2

logic a = 1'b0;
logic b = 1'b0;

// Infinite loop in first time slot since the processes trigger each other

always_comb b = !a;
always_comb a = b;

endmodule
`],["00/c_continuous.sv",`module c_continuous;

// VV also supports so-called continuous assignments
   
// Continuous assignments have a completely 
// different evaluation model than "normal" processes

// E.g., the net "a" below has two drivers,
// and the so-called resolution function for
// wire nets resolves the two values to 1:

wire a;
  
assign a = 1'b1;
assign a = 1'bz;

// For wire nets, the following drivers results in a
// value x for the net "b":

wire b;

assign b = 1'b1;
assign b = 1'b0;

// Whereas for wand nets, the same drivers result
// in 0:

wand c;

assign c = 1'b1;
assign c = 1'b0;

// (Make sure to run all events to see the correct results!)

endmodule
`],["00/h_shortcuts.sv",`module h_shortcuts;

// Some minor shortcuts has been taken, for now:
//
// - No check for using undeclared variables/nets
//
// - No check that there are not multiple processes writing
//   to something a new-type process is writing to
//
// - No check that one variable has at most one
//   continuous assignment / not mixed continuous + process
//
// - Other similar rules (possibly)
//
// Breaking any of the above rules result in undefined
// behaviour without warnings.
   
endmodule
`],["00/d_concurrency.sv",`module d_concurrency;

// Processes execute from blocking statements to 
// blocking statements.

// E.g., when the following process is run:

logic a, b;

initial begin
 a = 0;
 a = 1;
 // The process will not stop until here
 @(b) a = 0;
end

// This differ from what the Verilog standard suggests,
// see "A small, but important, concurrency problem in
// Verilog's semantics?" from MEMOCODE'22 for a longer
// discussion.

endmodule
`],["00/f_display.sv",`module f_display;

// The display tasks ($display, $monitor, etc.)
// can be invoked in a great variety of ways;
// e.g., see this call from p. 239:
//
// $monitor($time, , "a = %b b = %b", a, b);
//
// In VV, to simplify the implementation,
// the first argument must be a format string
// and only %b (for value) and %d (for time)
// are supported, e.g.:

logic a = 1'b0;

initial $display("a = %b at time %d", a, $time);

endmodule
`],["00/e_values.sv",`module e_values;

// Currently, only bit values are supported,
// i.e., no arrays/vectors yet.

// This is because, when building this simulator,
// I was mostly interested in how events are
// created/propagated/maintained/etc. in Verilog.
// Adding support for arrays does not really inform this.

// But it would be nice to support arrays since
// they are common in real-world code. So I might
// consider adding support for them in the future...

// For convenience, for now, "0" and "1" are
// parsed as bit values rather than "at least"
// 32-bit integers as the standard says they 
// should (p. 73).

endmodule
`],["00/g_monitor.sv",`module g_monitor;

// Monitors print when something they depend on has
// changed during the current time slot

// E.g., the following monitor would print the value
// of "a" at the end of each time slot every time
// "a" has changed during the time slot:
//
// initial $monitor("a = %b", a);

// The standard is not clear on what should happen
// if nothing change during the time slot the
// monitor is installed; it seems that current
// simulators print unconditionally, so we are
// doing the same.

// At most one monitor at a time can be active,
// so the following code will never print "1".
//
// It will, however, print "2" since the monitor
// printing "2" is not overwritten until time slot 10.

initial begin
 $monitor("1");
 $monitor("2");
 #10 $monitor("3");
end

// The Verilog standard says that monitor events
// must be scheduled in a region called "postponed"
// (p. 62):
//   
// "$monitor, $strobe, and other similar events are 
// scheduled in the Postponed region."
//
// However, once installed, a monitor is executed
// every time slot, which would require duplicating
// the event into the postponed region of every
// time slot. We find this awkward and instead
// keep track of the monitor outside the event
// queue, since at most one monitor can be active
// at a time anyway.

endmodule
`],["00/a_start.sv",`module a_start;

// Welcome to VV, an interactive Verilog simulator!

// As an introduction, let's consider the following
// variable "a" and a process assigning 0 to "a":

logic a;
   
initial a = 0;

// To load a Verilog module into the simulator,
// click "Parse" in the bottom-left corner.

// After the module has been parsed a normalised
// module will be shown to the right of the input 
// source code.

// To the right of the normalised module,
// VV visualises the current state of Verilog's
// event queue and other simulation state.

// The event queue consist of three regions:
// 
// - active,
// - inactive,
// - and nba (nonblocking assignments).
//
// (Full Verilog contains more, we do not
// consider them here.)

// After loading this module, you will see a
// blue-marked event in the active region for
// time 0.

// First, see that the variable "a" has value x in
// the environment. Now, clicking the blue event 
// will progress the simulation. After clicking the
// event, the variable "a" now has value 0 in the
// environment.

// There are now no more events to execute in the
// current time, therefore "Simulation time" is now
// blue.

// Clicking "Simulation time" progresses to simulation
// to the next time slot.

// Here, however, the simulation ends after this first
// time slot -- and hence the simulation finishes when
// clicking "Simulation time".

// For more, see the module 00/b_more.sv.

endmodule   
`],["00/b_more.sv",`module b_crash_course;

// Here are some more example of what we can do in VV

// Here we initially have three different blue event
// in the active region.

// Verilog is nondeterministic and events in the
// active region can be executed in any order.

// Furthermore, the execution of processes can
// depend on events generated by other processes.

// E.g., the second process wait for the clock to
// move to high before executing.

// After executing a few events, there will be a
// blue event in the NBA region.

// When clicking the NBA region, the region will move
// to the active region and the NBA events can be executed.

// (The NBA region cannot be moved until both the active and
// inactive regions are empty.)

// See 00/c_continuous.sv for more.

logic clk = 0;
logic foo = 1;
logic bar;

always #1 clk = ~clk;

always @(posedge clk)
 foo <= foo + 1;

always @(foo)
 bar <= foo;

endmodule
`],["nonblocking_ndet.sv",`module nonblocking_ndet;

// Consider the difference between using blocking
// and nonblocking assignments in the below code.

// It is a little awkward that nonblocking assignments
// are more nondeterministic than blocking assignments
// when not allowing arbitrary process interleavings.

logic a, b;

initial begin
 a = 0;
 a = 1;
end

always @(a) $display("RUN a");

initial begin
 b <= 0;
 b <= 1;
end

always @(b) $display("RUN b");

endmodule
`],["nonblocking4.sv",`module nonblocking4;

logic a;

// a must be x at end of time slot

initial begin
 a <= a;
 a = 1'b0;
end

endmodule
`],["delay/blocking_delay.sv",`module blocking_delay;

// Simple example of delayed blocking assignment

logic a;

initial begin
 a = #3 1;
 a = #4 a;
end

endmodule
`],["delay/assn_delay.sv",`module assn_delay;

logic a;
logic b = 1'b0;

initial $monitor("time = %d, a = %b, b = %b", $time, a, b);

// Verilog also has support for "intra-assignment timing control", see 10.4.1 Blocking procedural assignments

// To illustrate the difference between a delayed assignment and an assignment with intra-assignment delay,
// consider the following:

// The rhs will not be evaluated until time slot 15
initial #15 a = b;

// In contrast, with intra-assignment timing control, the rhs will be evaluated
// before the process is blocked
initial a = #10 b;

// Just a process to change the value of b before the two above processes wake up
initial #5 b = 1;

// Hence, at time slot 10 a will be 1 and at time slot 15 a will be 0 (since b is 0 initially)

endmodule
`],["delay/nonblocking_delay.sv",`module nonblocking_delay;

// Simple example of delayed nonblocking assignment

logic a, b;

initial #3 a <= 0;

initial begin
 b <= #3 1;
 b <= #4 b;
 b <= #3 1'bz;
end

endmodule
`],["nonblocking1.sv",`module nonblocking1;

logic a;

// a must be 1 at end of time slot

initial begin
 a <= 1'b0;
 a <= 1'b1;
end

endmodule
`],["clk/selftrigger_clk1.sv",`module selftrigger_clk1;

// Inspired by https://verificationacademy.com/forums/systemverilog/verilog-blocking/nonblocking-assignment-clk-generator-self-triggered

// Compare with selftrigger_clk2

logic clk;
initial #10 clk = 0;
always @(clk) #10 clk = ~clk;

initial $monitor("time = %d, clk = %b", $time, clk);

endmodule
`],["clk/clk_blocking.sv",`module clk_blocking;

// Compare with clk_nonblocking

logic clk = 0;
always #1 clk = ~clk;

always @(posedge clk) $display("RUN");

endmodule
`],["clk/read_clk_after_posedge.sv",`module read_clk_after_posedge;

// Example suggested by Niklas S\xF6rensson during FMCAD'22

logic clk = 0;
always #1 clk <= ~clk;

// This will always print 1
always @(posedge clk) $display("%b", clk);

//
// Alternative:
//
// wire clk2;
// assign clk2 = clk;
//
// always @(posedge clk) $display("%b", clk2);
//

endmodule
`],["clk/clk_nonblocking.sv",`module clk_nonblocking;

// Compare with clk_blocking

logic clk = 0;
always #1 clk <= ~clk;

always @(posedge clk) $display("RUN");

endmodule
`],["clk/selftrigger_clk2.sv",`module selftrigger_clk2;

// Compare with selftrigger_clk1

logic clk;
initial #10 clk = 0;
always @(clk) #10 clk <= ~clk;

initial $monitor("time = %d, clk = %b", $time, clk);

endmodule
`],["cont/cont_delay1.sv",`module cont_delay1;

// Variables and nets have very little in common.
// E.g., the evaluation models of delays are 
// completely different.

// One simple difference is that nets can have
// delays declared both at declaration (net delay)
// and at assignments (continuous assignment delays).

// E.g., below b will not update until time 2 since
// both the net and the assignments are delayed.

// In our reading of the standard, the net delay is
// simply added to add continuous assignment delays.

// (I am very interested in problems with this reading
// of the standard. It is not clear that this is the
// intended meaning.)

// When stepping through VV, note that the update to
// net a "cancels" the update to the b net.
// See cont_delay2.sv for more.

wire a;
wire #1 b;

assign a = 1;

assign #1 b = a;

endmodule
`],["cont/cont_tri_nested2.sv",`module cont_tri_nested2;
   
// Just another test for the parser

wire a, b, c, d, e, f;

// Another example,
// from https://stackoverflow.com/questions/23091314,
// it parses to what the indentation suggests:
assign a = (b)    ? 1
         : (c&d)  ? 0
         : (e&f)  ? 1
                  : 0;

// This is the same:
assign a = b      ? 1
         : c&d    ? 0
         : e&f    ? 1
                  : 0;

endmodule
`],["cont/cont_tri.sv",`module cont_tri;

// Simple example of tristate logic   

wire a;
logic cond;

assign a = ~cond ? 1'bz : 1;
assign a = cond ? 1'bz : 0;

initial begin
 #2 cond = 0;
 #2 cond = 1;
end

endmodule
`],["cont/nonblocking_cont.sv",`module nonblocking_cont;

// Simple example of interaction between nonblocking
// assignments and continuous assignments

logic a;

wire b;

assign b = a;

initial begin
 a <= 1'b0;
 a <= 1'b1;
end

endmodule
`],["cont/cont_tri_nested1.sv",`module cont_tri_nested1;
   
// Just a test for the parser

wire c1, c2, t1, t2, e1, e2, test1, test2;

// Should parse to "c1 ? t1 : (c2 ? t2 : e2)"
assign test1 = c1 ? t1 : c2 ? t2 : e2;

// Should parse to "c1 ? (c2 ? t1 : e1) : e2"
assign test2 = c1 ? c2 ? t1 : e1 : e2;

endmodule
   
`],["cont/cont_delay2.sv",`module cont_delay2;

// Another interesting difference between variables
// and nets are that updates to nets can "cancel"
// previously scheduled net update events.

// In VHDL terminology, this difference is explained
// using the terms "inertial delay" and "transport
// delay".

// In the below, notice how b never becomes 0 since
// the update is cancelled before it takes place.

logic a;
wire b;

assign #5 b = a;

initial begin
 #1 a = 0;
 #3 a = 1;
end

endmodule
`]]);function ch(e){var n=Pa(Jv),t=za(n),r=N.exports.useState(function(){return t}),i=r[1],l=r[0],o=function(E){return Sn(i,function(g){return Ia(g)?wm(g):g})},u=function(E){return Sn(i,function(g){return Oa(g)?km(g):g})},a=function(E){return Sn(i,function(g){return Ma(g)?Sm(g):g})},s=N.exports.useState(function(){return nt(Ll,"empty.sv")}),v=s[1],m=s[0],p=function(E){var g=sh(m);if(g.TAG===0){var z;try{z=Pa(uh(g._0))}catch(ne){var L=Zp(ne);if(L.RE_EXN_ID===on){window.alert("Compile phase of parsing failed: "+L._1);return}throw L}var H=za(z);return Sn(i,function(ne){return H})}window.alert("Could not parse Verilog code: "+g._0)},h=function(E){Sn(v,function(g){return E.target.value}),E.preventDefault()},y=function(E){var g=E.target.value;Sn(v,function(z){return nt(Ll,g)}),E.preventDefault()},w="Simulation time: "+String(l.time)+" ("+tm(l.status)+")",P=sn(wv(l.env),function(E){var g=E[0];return N.exports.createElement("li",{key:g},g+": "+tt(E[1]))}),f=Sl(l.cont_env,function(E,g){return N.exports.createElement("li",{key:String(E)},O(l.vmodule.conts,E).lhs+"("+String(E)+"): "+tt(g))}),c=Sl(l.proc_env,function(E,g){return N.exports.createElement("li",{key:String(E)},"state = "+Fm(g.state)+", pc = "+String(g.pc))}),d=sn(l.queue,function(E){var g=E[1],z=E[0],L=Sl(g.active,function(ae,we){var ve=La(l,z);return N.exports.createElement("li",{key:Nl(we),className:ve?"active":"",onClick:function(x){return Sn(i,function(A){return La(A,z)?ym(A,ae):A})}},zl(l.vmodule.conts,we))}),H=sn(g.inactive,function(ae){return N.exports.createElement("li",{key:Nl(ae)},zl(l.vmodule.conts,ae))}),ne=sn(g.nba,function(ae){return N.exports.createElement("li",{key:Nl(ae)},zl(l.vmodule.conts,ae))}),ye=Ia(l),Ye=Oa(l);return N.exports.createElement("li",{key:"Time"+String(z)},N.exports.createElement("b",void 0,"Time: "+String(z)),N.exports.createElement("ul",void 0,N.exports.createElement("li",void 0,"Active:",N.exports.createElement("ul",void 0,L)),N.exports.createElement("li",{className:ye?"active":"",onClick:o},"Inactive:",N.exports.createElement("ul",void 0,H)),N.exports.createElement("li",{className:Ye?"active":"",onClick:u},"NBA:",N.exports.createElement("ul",void 0,ne))))}),_=jm(l.monitor),S=sn(kv(Ll),function(E){return N.exports.createElement("option",{key:E},E)}),T=Ma(l);return N.exports.createElement("table",{id:"main-table"},N.exports.createElement("tbody",void 0,N.exports.createElement("tr",void 0,N.exports.createElement("td",void 0,N.exports.createElement("div",void 0,N.exports.createElement("select",{defaultValue:"empty.sv",onChange:y},S)),N.exports.createElement("div",void 0,N.exports.createElement("textarea",{cols:60,rows:20,value:m,onChange:h})),N.exports.createElement("div",void 0,N.exports.createElement("button",{onClick:p},"Parse"))),N.exports.createElement("td",void 0,N.exports.createElement("div",{id:"code-render"},$m(l.vmodule,l.proc_env))),N.exports.createElement("td",void 0,N.exports.createElement("p",{className:T?"active":"",id:"simulation-time",onClick:a},w),N.exports.createElement("p",void 0,"Environment:"),N.exports.createElement("ul",void 0,P),N.exports.createElement("p",void 0,"Drivers (continuous assignments):"),N.exports.createElement("ul",void 0,f),N.exports.createElement("p",void 0,"Processes:"),N.exports.createElement("ol",void 0,c),N.exports.createElement("p",{className:""},"Events:"),N.exports.createElement("ul",void 0,d),N.exports.createElement("p",void 0,"Monitor:"),N.exports.createElement("p",void 0,_)),N.exports.createElement("td",void 0,N.exports.createElement("p",{id:"output"},"Output:"),N.exports.createElement("pre",void 0,l.output)))))}var fh=ch,Dc={exports:{}},Ie={},Rc={exports:{}},Vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,A){var I=x.length;x.push(A);e:for(;0<I;){var R=I-1>>>1,b=x[R];if(0<i(b,A))x[R]=A,x[I]=b,I=R;else break e}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var A=x[0],I=x.pop();if(I!==A){x[0]=I;e:for(var R=0,b=x.length,yn=b>>>1;R<yn;){var Ue=2*(R+1)-1,wn=x[Ue],Me=Ue+1,kn=x[Me];if(0>i(wn,I))Me<b&&0>i(kn,wn)?(x[R]=kn,x[Me]=I,R=Me):(x[R]=wn,x[Ue]=I,R=Ue);else if(Me<b&&0>i(kn,I))x[R]=kn,x[Me]=I,R=Me;else break e}}return A}function i(x,A){var I=x.sortIndex-A.sortIndex;return I!==0?I:x.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],s=[],v=1,m=null,p=3,h=!1,y=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(x){for(var A=t(s);A!==null;){if(A.callback===null)r(s);else if(A.startTime<=x)r(s),A.sortIndex=A.expirationTime,n(a,A);else break;A=t(s)}}function _(x){if(w=!1,d(x),!y)if(t(a)!==null)y=!0,we(S);else{var A=t(s);A!==null&&ve(_,A.startTime-x)}}function S(x,A){y=!1,w&&(w=!1,f(g),g=-1),h=!0;var I=p;try{for(d(A),m=t(a);m!==null&&(!(m.expirationTime>A)||x&&!H());){var R=m.callback;if(typeof R=="function"){m.callback=null,p=m.priorityLevel;var b=R(m.expirationTime<=A);A=e.unstable_now(),typeof b=="function"?m.callback=b:m===t(a)&&r(a),d(A)}else r(a);m=t(a)}if(m!==null)var yn=!0;else{var Ue=t(s);Ue!==null&&ve(_,Ue.startTime-A),yn=!1}return yn}finally{m=null,p=I,h=!1}}var T=!1,E=null,g=-1,z=5,L=-1;function H(){return!(e.unstable_now()-L<z)}function ne(){if(E!==null){var x=e.unstable_now();L=x;var A=!0;try{A=E(!0,x)}finally{A?ye():(T=!1,E=null)}}else T=!1}var ye;if(typeof c=="function")ye=function(){c(ne)};else if(typeof MessageChannel!="undefined"){var Ye=new MessageChannel,ae=Ye.port2;Ye.port1.onmessage=ne,ye=function(){ae.postMessage(null)}}else ye=function(){P(ne,0)};function we(x){E=x,T||(T=!0,ye())}function ve(x,A){g=P(function(){x(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,we(S))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(x){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var I=p;p=A;try{return x()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,A){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var I=p;p=x;try{return A()}finally{p=I}},e.unstable_scheduleCallback=function(x,A,I){var R=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?R+I:R):I=R,x){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=I+b,x={id:v++,callback:A,priorityLevel:x,startTime:I,expirationTime:b,sortIndex:-1},I>R?(x.sortIndex=I,n(s,x),t(a)===null&&x===t(s)&&(w?(f(g),g=-1):w=!0,ve(_,I-R))):(x.sortIndex=b,n(a,x),y||h||(y=!0,we(S))),x},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(x){var A=p;return function(){var I=p;p=A;try{return x.apply(this,arguments)}finally{p=I}}}})(Vc);Rc.exports=Vc;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=N.exports,Le=Rc.exports;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bc=new Set,mr={};function ct(e,n){Dt(e,n),Dt(e+"Capture",n)}function Dt(e,n){for(mr[e]=n,e=0;e<n.length;e++)bc.add(n[e])}var vn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),go=Object.prototype.hasOwnProperty,dh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ha={},Qa={};function ph(e){return go.call(Qa,e)?!0:go.call(Ha,e)?!1:dh.test(e)?Qa[e]=!0:(Ha[e]=!0,!1)}function vh(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mh(e,n,t,r){if(n===null||typeof n=="undefined"||vh(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _e(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new _e(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var yu=/[\-:]([a-z])/g;function wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(yu,wu);ue[n]=new _e(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(yu,wu);ue[n]=new _e(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(yu,wu);ue[n]=new _e(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function ku(e,n,t,r){var i=ue.hasOwnProperty(n)?ue[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(mh(n,t,i,r)&&(t=null),r||i===null?ph(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var _n=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),mt=Symbol.for("react.portal"),ht=Symbol.for("react.fragment"),Eu=Symbol.for("react.strict_mode"),_o=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),jc=Symbol.for("react.context"),Su=Symbol.for("react.forward_ref"),yo=Symbol.for("react.suspense"),wo=Symbol.for("react.suspense_list"),xu=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),Gc=Symbol.for("react.offscreen"),qa=Symbol.iterator;function Wt(e){return e===null||typeof e!="object"?null:(e=qa&&e[qa]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Il;function Jt(e){if(Il===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Il=n&&n[1]||""}return`
`+Il+e}var Ol=!1;function Ml(e,n){if(!e||Ol)return"";Ol=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Ol=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Jt(e):""}function hh(e){switch(e.tag){case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function ko(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ht:return"Fragment";case mt:return"Portal";case _o:return"Profiler";case Eu:return"StrictMode";case yo:return"Suspense";case wo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jc:return(e.displayName||"Context")+".Consumer";case $c:return(e._context.displayName||"Context")+".Provider";case Su:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xu:return n=e.displayName||null,n!==null?n:ko(e.type)||"Memo";case Cn:n=e._payload,e=e._init;try{return ko(e(n))}catch{}}return null}function gh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ko(n);case 8:return n===Eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _h(e){var n=Uc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Hr(e){e._valueTracker||(e._valueTracker=_h(e))}function Bc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Uc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ai(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eo(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function Xa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Gn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Wc(e,n){n=n.checked,n!=null&&ku(e,"checked",n,!1)}function So(e,n){Wc(e,n);var t=Gn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?xo(e,n.type,t):n.hasOwnProperty("defaultValue")&&xo(e,n.type,Gn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ka(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function xo(e,n,t){(n!=="number"||Ai(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var er=Array.isArray;function At(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Gn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function To(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ya(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(er(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Gn(t)}}function Hc(e,n){var t=Gn(n.value),r=Gn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Za(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Co(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,qc=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function hr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yh=["Webkit","ms","Moz","O"];Object.keys(or).forEach(function(e){yh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),or[n]=or[e]})});function Xc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||or.hasOwnProperty(e)&&or[e]?(""+n).trim():n+"px"}function Kc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Xc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var wh=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function No(e,n){if(n){if(wh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Ao(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Po=null;function Tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zo=null,Pt=null,zt=null;function Ja(e){if(e=Dr(e)){if(typeof zo!="function")throw Error(k(280));var n=e.stateNode;n&&(n=ll(n),zo(e.stateNode,e.type,n))}}function Yc(e){Pt?zt?zt.push(e):zt=[e]:Pt=e}function Zc(){if(Pt){var e=Pt,n=zt;if(zt=Pt=null,Ja(e),n)for(e=0;e<n.length;e++)Ja(n[e])}}function Jc(e,n){return e(n)}function ef(){}var Dl=!1;function nf(e,n,t){if(Dl)return e(n,t);Dl=!0;try{return Jc(e,n,t)}finally{Dl=!1,(Pt!==null||zt!==null)&&(ef(),Zc())}}function gr(e,n){var t=e.stateNode;if(t===null)return null;var r=ll(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Lo=!1;if(vn)try{var Ht={};Object.defineProperty(Ht,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch{Lo=!1}function kh(e,n,t,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(v){this.onError(v)}}var ur=!1,Pi=null,zi=!1,Io=null,Eh={onError:function(e){ur=!0,Pi=e}};function Sh(e,n,t,r,i,l,o,u,a){ur=!1,Pi=null,kh.apply(Eh,arguments)}function xh(e,n,t,r,i,l,o,u,a){if(Sh.apply(this,arguments),ur){if(ur){var s=Pi;ur=!1,Pi=null}else throw Error(k(198));zi||(zi=!0,Io=s)}}function ft(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function tf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function es(e){if(ft(e)!==e)throw Error(k(188))}function Th(e){var n=e.alternate;if(!n){if(n=ft(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return es(i),e;if(l===r)return es(i),n;l=l.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function rf(e){return e=Th(e),e!==null?lf(e):null}function lf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=lf(e);if(n!==null)return n;e=e.sibling}return null}var of=Le.unstable_scheduleCallback,ns=Le.unstable_cancelCallback,Ch=Le.unstable_shouldYield,Nh=Le.unstable_requestPaint,q=Le.unstable_now,Ah=Le.unstable_getCurrentPriorityLevel,Cu=Le.unstable_ImmediatePriority,uf=Le.unstable_UserBlockingPriority,Li=Le.unstable_NormalPriority,Ph=Le.unstable_LowPriority,af=Le.unstable_IdlePriority,nl=null,rn=null;function zh(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Oh,Lh=Math.log,Ih=Math.LN2;function Oh(e){return e>>>=0,e===0?32:31-(Lh(e)/Ih|0)|0}var qr=64,Xr=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=nr(u):(l&=o,l!==0&&(r=nr(l)))}else o=t&~i,o!==0?r=nr(o):l!==0&&(r=nr(l));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-qe(n),i=1<<t,r|=e[t],n&=~i;return r}function Mh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-qe(l),u=1<<o,a=i[o];a===-1?((u&t)===0||(u&r)!==0)&&(i[o]=Mh(u,n)):a<=n&&(e.expiredLanes|=u),l&=~u}}function Oo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sf(){var e=qr;return qr<<=1,(qr&4194240)===0&&(qr=64),e}function Rl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Or(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-qe(n),e[n]=t}function Rh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-qe(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Nu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-qe(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var V=0;function cf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ff,Au,df,pf,vf,Mo=!1,Kr=[],Mn=null,Dn=null,Rn=null,_r=new Map,yr=new Map,An=[],Vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ts(e,n){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":_r.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(n.pointerId)}}function Qt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Dr(n),n!==null&&Au(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Fh(e,n,t,r,i){switch(n){case"focusin":return Mn=Qt(Mn,e,n,t,r,i),!0;case"dragenter":return Dn=Qt(Dn,e,n,t,r,i),!0;case"mouseover":return Rn=Qt(Rn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return _r.set(l,Qt(_r.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,yr.set(l,Qt(yr.get(l)||null,e,n,t,r,i)),!0}return!1}function mf(e){var n=Yn(e.target);if(n!==null){var t=ft(n);if(t!==null){if(n=t.tag,n===13){if(n=tf(t),n!==null){e.blockedOn=n,vf(e.priority,function(){df(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Do(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Po=r,t.target.dispatchEvent(r),Po=null}else return n=Dr(t),n!==null&&Au(n),e.blockedOn=t,!1;n.shift()}return!0}function rs(e,n,t){di(e)&&t.delete(n)}function bh(){Mo=!1,Mn!==null&&di(Mn)&&(Mn=null),Dn!==null&&di(Dn)&&(Dn=null),Rn!==null&&di(Rn)&&(Rn=null),_r.forEach(rs),yr.forEach(rs)}function qt(e,n){e.blockedOn===n&&(e.blockedOn=null,Mo||(Mo=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,bh)))}function wr(e){function n(i){return qt(i,e)}if(0<Kr.length){qt(Kr[0],e);for(var t=1;t<Kr.length;t++){var r=Kr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Mn!==null&&qt(Mn,e),Dn!==null&&qt(Dn,e),Rn!==null&&qt(Rn,e),_r.forEach(n),yr.forEach(n),t=0;t<An.length;t++)r=An[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<An.length&&(t=An[0],t.blockedOn===null);)mf(t),t.blockedOn===null&&An.shift()}var Lt=_n.ReactCurrentBatchConfig,Oi=!0;function $h(e,n,t,r){var i=V,l=Lt.transition;Lt.transition=null;try{V=1,Pu(e,n,t,r)}finally{V=i,Lt.transition=l}}function jh(e,n,t,r){var i=V,l=Lt.transition;Lt.transition=null;try{V=4,Pu(e,n,t,r)}finally{V=i,Lt.transition=l}}function Pu(e,n,t,r){if(Oi){var i=Do(e,n,t,r);if(i===null)Hl(e,n,r,Mi,t),ts(e,r);else if(Fh(i,e,n,t,r))r.stopPropagation();else if(ts(e,r),n&4&&-1<Vh.indexOf(e)){for(;i!==null;){var l=Dr(i);if(l!==null&&ff(l),l=Do(e,n,t,r),l===null&&Hl(e,n,r,Mi,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Hl(e,n,r,null,t)}}var Mi=null;function Do(e,n,t,r){if(Mi=null,e=Tu(r),e=Yn(e),e!==null)if(n=ft(e),n===null)e=null;else if(t=n.tag,t===13){if(e=tf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Mi=e,null}function hf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ah()){case Cu:return 1;case uf:return 4;case Li:case Ph:return 16;case af:return 536870912;default:return 16}default:return 16}}var Ln=null,zu=null,pi=null;function gf(){if(pi)return pi;var e,n=zu,t=n.length,r,i="value"in Ln?Ln.value:Ln.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return pi=i.slice(e,1<r?1-r:void 0)}function vi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function is(){return!1}function Oe(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Yr:is,this.isPropagationStopped=is,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),n}var Ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lu=Oe(Ut),Mr=W({},Ut,{view:0,detail:0}),Gh=Oe(Mr),Vl,Fl,Xt,tl=W({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&e.type==="mousemove"?(Vl=e.screenX-Xt.screenX,Fl=e.screenY-Xt.screenY):Fl=Vl=0,Xt=e),Vl)},movementY:function(e){return"movementY"in e?e.movementY:Fl}}),ls=Oe(tl),Uh=W({},tl,{dataTransfer:0}),Bh=Oe(Uh),Wh=W({},Mr,{relatedTarget:0}),bl=Oe(Wh),Hh=W({},Ut,{animationName:0,elapsedTime:0,pseudoElement:0}),Qh=Oe(Hh),qh=W({},Ut,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xh=Oe(qh),Kh=W({},Ut,{data:0}),os=Oe(Kh),Yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jh[e])?!!n[e]:!1}function Iu(){return e0}var n0=W({},Mr,{key:function(e){if(e.key){var n=Yh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(e){return e.type==="keypress"?vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t0=Oe(n0),r0=W({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),us=Oe(r0),i0=W({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),l0=Oe(i0),o0=W({},Ut,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=Oe(o0),a0=W({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=Oe(a0),c0=[9,13,27,32],Ou=vn&&"CompositionEvent"in window,ar=null;vn&&"documentMode"in document&&(ar=document.documentMode);var f0=vn&&"TextEvent"in window&&!ar,_f=vn&&(!Ou||ar&&8<ar&&11>=ar),as=String.fromCharCode(32),ss=!1;function yf(e,n){switch(e){case"keyup":return c0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gt=!1;function d0(e,n){switch(e){case"compositionend":return wf(n);case"keypress":return n.which!==32?null:(ss=!0,as);case"textInput":return e=n.data,e===as&&ss?null:e;default:return null}}function p0(e,n){if(gt)return e==="compositionend"||!Ou&&yf(e,n)?(e=gf(),pi=zu=Ln=null,gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _f&&n.locale!=="ko"?null:n.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!v0[e.type]:n==="textarea"}function kf(e,n,t,r){Yc(r),n=Di(n,"onChange"),0<n.length&&(t=new Lu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var sr=null,kr=null;function m0(e){If(e,0)}function rl(e){var n=wt(e);if(Bc(n))return e}function h0(e,n){if(e==="change")return n}var Ef=!1;if(vn){var $l;if(vn){var jl="oninput"in document;if(!jl){var fs=document.createElement("div");fs.setAttribute("oninput","return;"),jl=typeof fs.oninput=="function"}$l=jl}else $l=!1;Ef=$l&&(!document.documentMode||9<document.documentMode)}function ds(){sr&&(sr.detachEvent("onpropertychange",Sf),kr=sr=null)}function Sf(e){if(e.propertyName==="value"&&rl(kr)){var n=[];kf(n,kr,e,Tu(e)),nf(m0,n)}}function g0(e,n,t){e==="focusin"?(ds(),sr=n,kr=t,sr.attachEvent("onpropertychange",Sf)):e==="focusout"&&ds()}function _0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(kr)}function y0(e,n){if(e==="click")return rl(n)}function w0(e,n){if(e==="input"||e==="change")return rl(n)}function k0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ke=typeof Object.is=="function"?Object.is:k0;function Er(e,n){if(Ke(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!go.call(n,i)||!Ke(e[i],n[i]))return!1}return!0}function ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vs(e,n){var t=ps(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ps(t)}}function xf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tf(){for(var e=window,n=Ai();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ai(e.document)}return n}function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function E0(e){var n=Tf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&xf(t.ownerDocument.documentElement,t)){if(r!==null&&Mu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=vs(t,l);var o=vs(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var S0=vn&&"documentMode"in document&&11>=document.documentMode,_t=null,Ro=null,cr=null,Vo=!1;function ms(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vo||_t==null||_t!==Ai(r)||(r=_t,"selectionStart"in r&&Mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&Er(cr,r)||(cr=r,r=Di(Ro,"onSelect"),0<r.length&&(n=new Lu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=_t)))}function Zr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var yt={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},Gl={},Cf={};vn&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete yt.animationend.animation,delete yt.animationiteration.animation,delete yt.animationstart.animation),"TransitionEvent"in window||delete yt.transitionend.transition);function il(e){if(Gl[e])return Gl[e];if(!yt[e])return e;var n=yt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Cf)return Gl[e]=n[t];return e}var Nf=il("animationend"),Af=il("animationiteration"),Pf=il("animationstart"),zf=il("transitionend"),Lf=new Map,hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,n){Lf.set(e,n),ct(n,[e])}for(var Ul=0;Ul<hs.length;Ul++){var Bl=hs[Ul],x0=Bl.toLowerCase(),T0=Bl[0].toUpperCase()+Bl.slice(1);Bn(x0,"on"+T0)}Bn(Nf,"onAnimationEnd");Bn(Af,"onAnimationIteration");Bn(Pf,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(zf,"onTransitionEnd");Dt("onMouseEnter",["mouseout","mouseover"]);Dt("onMouseLeave",["mouseout","mouseover"]);Dt("onPointerEnter",["pointerout","pointerover"]);Dt("onPointerLeave",["pointerout","pointerover"]);ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ct("onBeforeInput",["compositionend","keypress","textInput","paste"]);ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C0=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function gs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,xh(r,n,void 0,e),e.currentTarget=null}function If(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;gs(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;gs(i,u,s),l=a}}}if(zi)throw e=Io,zi=!1,Io=null,e}function $(e,n){var t=n[Go];t===void 0&&(t=n[Go]=new Set);var r=e+"__bubble";t.has(r)||(Of(n,e,2,!1),t.add(r))}function Wl(e,n,t){var r=0;n&&(r|=4),Of(t,e,r,n)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[Jr]){e[Jr]=!0,bc.forEach(function(t){t!=="selectionchange"&&(C0.has(t)||Wl(t,!1,e),Wl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jr]||(n[Jr]=!0,Wl("selectionchange",!1,n))}}function Of(e,n,t,r){switch(hf(n)){case 1:var i=$h;break;case 4:i=jh;break;default:i=Pu}t=i.bind(null,n,t,e),i=void 0,!Lo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Hl(e,n,t,r,i){var l=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=Yn(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}nf(function(){var s=l,v=Tu(t),m=[];e:{var p=Lf.get(e);if(p!==void 0){var h=Lu,y=e;switch(e){case"keypress":if(vi(t)===0)break e;case"keydown":case"keyup":h=t0;break;case"focusin":y="focus",h=bl;break;case"focusout":y="blur",h=bl;break;case"beforeblur":case"afterblur":h=bl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=l0;break;case Nf:case Af:case Pf:h=Qh;break;case zf:h=u0;break;case"scroll":h=Gh;break;case"wheel":h=s0;break;case"copy":case"cut":case"paste":h=Xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=us}var w=(n&4)!==0,P=!w&&e==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var c=s,d;c!==null;){d=c;var _=d.stateNode;if(d.tag===5&&_!==null&&(d=_,f!==null&&(_=gr(c,f),_!=null&&w.push(xr(c,_,d)))),P)break;c=c.return}0<w.length&&(p=new h(p,y,null,t,v),m.push({event:p,listeners:w}))}}if((n&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==Po&&(y=t.relatedTarget||t.fromElement)&&(Yn(y)||y[mn]))break e;if((h||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=t.relatedTarget||t.toElement,h=s,y=y?Yn(y):null,y!==null&&(P=ft(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=s),h!==y)){if(w=ls,_="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=us,_="onPointerLeave",f="onPointerEnter",c="pointer"),P=h==null?p:wt(h),d=y==null?p:wt(y),p=new w(_,c+"leave",h,t,v),p.target=P,p.relatedTarget=d,_=null,Yn(v)===s&&(w=new w(f,c+"enter",y,t,v),w.target=d,w.relatedTarget=P,_=w),P=_,h&&y)n:{for(w=h,f=y,c=0,d=w;d;d=dt(d))c++;for(d=0,_=f;_;_=dt(_))d++;for(;0<c-d;)w=dt(w),c--;for(;0<d-c;)f=dt(f),d--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break n;w=dt(w),f=dt(f)}w=null}else w=null;h!==null&&_s(m,p,h,w,!1),y!==null&&P!==null&&_s(m,P,y,w,!0)}}e:{if(p=s?wt(s):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var S=h0;else if(cs(p))if(Ef)S=w0;else{S=_0;var T=g0}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=y0);if(S&&(S=S(e,s))){kf(m,S,t,v);break e}T&&T(e,p,s),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&xo(p,"number",p.value)}switch(T=s?wt(s):window,e){case"focusin":(cs(T)||T.contentEditable==="true")&&(_t=T,Ro=s,cr=null);break;case"focusout":cr=Ro=_t=null;break;case"mousedown":Vo=!0;break;case"contextmenu":case"mouseup":case"dragend":Vo=!1,ms(m,t,v);break;case"selectionchange":if(S0)break;case"keydown":case"keyup":ms(m,t,v)}var E;if(Ou)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else gt?yf(e,t)&&(g="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(g="onCompositionStart");g&&(_f&&t.locale!=="ko"&&(gt||g!=="onCompositionStart"?g==="onCompositionEnd"&&gt&&(E=gf()):(Ln=v,zu="value"in Ln?Ln.value:Ln.textContent,gt=!0)),T=Di(s,g),0<T.length&&(g=new os(g,e,null,t,v),m.push({event:g,listeners:T}),E?g.data=E:(E=wf(t),E!==null&&(g.data=E)))),(E=f0?d0(e,t):p0(e,t))&&(s=Di(s,"onBeforeInput"),0<s.length&&(v=new os("onBeforeInput","beforeinput",null,t,v),m.push({event:v,listeners:s}),v.data=E))}If(m,n)})}function xr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Di(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=gr(e,t),l!=null&&r.unshift(xr(e,l,i)),l=gr(e,n),l!=null&&r.push(xr(e,l,i))),e=e.return}return r}function dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _s(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=gr(t,l),a!=null&&o.unshift(xr(t,a,u))):i||(a=gr(t,l),a!=null&&o.push(xr(t,a,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var N0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function ys(e){return(typeof e=="string"?e:""+e).replace(N0,`
`).replace(A0,"")}function ei(e,n,t){if(n=ys(n),ys(e)!==n&&t)throw Error(k(425))}function Ri(){}var Fo=null,bo=null;function $o(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,P0=typeof clearTimeout=="function"?clearTimeout:void 0,ws=typeof Promise=="function"?Promise:void 0,z0=typeof queueMicrotask=="function"?queueMicrotask:typeof ws!="undefined"?function(e){return ws.resolve(null).then(e).catch(L0)}:jo;function L0(e){setTimeout(function(){throw e})}function Ql(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),wr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);wr(n)}function Vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ks(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Bt=Math.random().toString(36).slice(2),en="__reactFiber$"+Bt,Tr="__reactProps$"+Bt,mn="__reactContainer$"+Bt,Go="__reactEvents$"+Bt,I0="__reactListeners$"+Bt,O0="__reactHandles$"+Bt;function Yn(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[mn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ks(e);e!==null;){if(t=e[en])return t;e=ks(e)}return n}e=t,t=e.parentNode}return null}function Dr(e){return e=e[en]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ll(e){return e[Tr]||null}var Uo=[],kt=-1;function Wn(e){return{current:e}}function j(e){0>kt||(e.current=Uo[kt],Uo[kt]=null,kt--)}function F(e,n){kt++,Uo[kt]=e.current,e.current=n}var Un={},pe=Wn(Un),Se=Wn(!1),lt=Un;function Rt(e,n){var t=e.type.contextTypes;if(!t)return Un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Vi(){j(Se),j(pe)}function Es(e,n,t){if(pe.current!==Un)throw Error(k(168));F(pe,n),F(Se,t)}function Mf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,gh(e)||"Unknown",i));return W({},t,r)}function Fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,lt=pe.current,F(pe,e),F(Se,Se.current),!0}function Ss(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Mf(e,n,lt),r.__reactInternalMemoizedMergedChildContext=e,j(Se),j(pe),F(pe,e)):j(Se),F(Se,t)}var an=null,ol=!1,ql=!1;function Df(e){an===null?an=[e]:an.push(e)}function M0(e){ol=!0,Df(e)}function Hn(){if(!ql&&an!==null){ql=!0;var e=0,n=V;try{var t=an;for(V=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}an=null,ol=!1}catch(i){throw an!==null&&(an=an.slice(e+1)),of(Cu,Hn),i}finally{V=n,ql=!1}}return null}var Et=[],St=0,bi=null,$i=0,Re=[],Ve=0,ot=null,fn=1,dn="";function qn(e,n){Et[St++]=$i,Et[St++]=bi,bi=e,$i=n}function Rf(e,n,t){Re[Ve++]=fn,Re[Ve++]=dn,Re[Ve++]=ot,ot=e;var r=fn;e=dn;var i=32-qe(r)-1;r&=~(1<<i),t+=1;var l=32-qe(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-qe(n)+i|t<<i|r,dn=l+e}else fn=1<<l|t<<i|r,dn=e}function Du(e){e.return!==null&&(qn(e,1),Rf(e,1,0))}function Ru(e){for(;e===bi;)bi=Et[--St],Et[St]=null,$i=Et[--St],Et[St]=null;for(;e===ot;)ot=Re[--Ve],Re[Ve]=null,dn=Re[--Ve],Re[Ve]=null,fn=Re[--Ve],Re[Ve]=null}var ze=null,Pe=null,G=!1,Qe=null;function Vf(e,n){var t=be(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function xs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,Pe=Vn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ot!==null?{id:fn,overflow:dn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=be(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,Pe=null,!0):!1;default:return!1}}function Bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wo(e){if(G){var n=Pe;if(n){var t=n;if(!xs(e,n)){if(Bo(e))throw Error(k(418));n=Vn(t.nextSibling);var r=ze;n&&xs(e,n)?Vf(r,t):(e.flags=e.flags&-4097|2,G=!1,ze=e)}}else{if(Bo(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,ze=e}}}function Ts(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function ni(e){if(e!==ze)return!1;if(!G)return Ts(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!$o(e.type,e.memoizedProps)),n&&(n=Pe)){if(Bo(e))throw Ff(),Error(k(418));for(;n;)Vf(e,n),n=Vn(n.nextSibling)}if(Ts(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=Vn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=ze?Vn(e.stateNode.nextSibling):null;return!0}function Ff(){for(var e=Pe;e;)e=Vn(e.nextSibling)}function Vt(){Pe=ze=null,G=!1}function Vu(e){Qe===null?Qe=[e]:Qe.push(e)}var D0=_n.ReactCurrentBatchConfig;function We(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var ji=Wn(null),Gi=null,xt=null,Fu=null;function bu(){Fu=xt=Gi=null}function $u(e){var n=ji.current;j(ji),e._currentValue=n}function Ho(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function It(e,n){Gi=e,Fu=xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ee=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(Fu!==e)if(e={context:e,memoizedValue:n,next:null},xt===null){if(Gi===null)throw Error(k(308));xt=e,Gi.dependencies={lanes:0,firstContext:e}}else xt=xt.next=e;return n}var Zn=null;function ju(e){Zn===null?Zn=[e]:Zn.push(e)}function bf(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ju(n)):(t.next=i.next,i.next=t),n.interleaved=t,hn(e,r)}function hn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Nn=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Fn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(D&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,hn(e,t)}return i=r.interleaved,i===null?(n.next=n,ju(r)):(n.next=i.next,i.next=n),r.interleaved=n,hn(e,t)}function mi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Nu(e,t)}}function Cs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ui(e,n,t,r){var i=e.updateQueue;Nn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==o&&(u===null?v.firstBaseUpdate=s:u.next=s,v.lastBaseUpdate=a))}if(l!==null){var m=i.baseState;o=0,v=s=a=null,u=l;do{var p=u.lane,h=u.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,w=u;switch(p=n,h=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(h,m,p);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(h,m,p):y,p==null)break e;m=W({},m,p);break e;case 2:Nn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else h={eventTime:h,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(s=v=h,a=m):v=v.next=h,o|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(v===null&&(a=m),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);at|=o,e.lanes=o,e.memoizedState=m}}function Ns(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var jf=new Fc.Component().refs;function Qo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ul={isMounted:function(e){return(e=e._reactInternals)?ft(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=he(),i=$n(e),l=pn(r,i);l.payload=n,t!=null&&(l.callback=t),n=Fn(e,l,i),n!==null&&(Xe(n,e,i,r),mi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=he(),i=$n(e),l=pn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Fn(e,l,i),n!==null&&(Xe(n,e,i,r),mi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),r=$n(e),i=pn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Fn(e,i,r),n!==null&&(Xe(n,e,r,t),mi(n,e,r))}};function As(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Er(t,r)||!Er(i,l):!0}function Gf(e,n,t){var r=!1,i=Un,l=n.contextType;return typeof l=="object"&&l!==null?l=je(l):(i=xe(n)?lt:pe.current,r=n.contextTypes,l=(r=r!=null)?Rt(e,i):Un),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ul,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ps(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ul.enqueueReplaceState(n,n.state,null)}function qo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=jf,Gu(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=je(l):(l=xe(n)?lt:pe.current,i.context=Rt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Qo(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ul.enqueueReplaceState(i,i.state,null),Ui(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;u===jf&&(u=i.refs={}),o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function ti(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function zs(e){var n=e._init;return n(e._payload)}function Uf(e){function n(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=jn(f,c),f.index=0,f.sibling=null,f}function l(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,d,_){return c===null||c.tag!==6?(c=no(d,f.mode,_),c.return=f,c):(c=i(c,d),c.return=f,c)}function a(f,c,d,_){var S=d.type;return S===ht?v(f,c,d.props.children,_,d.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Cn&&zs(S)===c.type)?(_=i(c,d.props),_.ref=Kt(f,c,d),_.return=f,_):(_=ki(d.type,d.key,d.props,null,f.mode,_),_.ref=Kt(f,c,d),_.return=f,_)}function s(f,c,d,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=to(d,f.mode,_),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function v(f,c,d,_,S){return c===null||c.tag!==7?(c=it(d,f.mode,_,S),c.return=f,c):(c=i(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=no(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Wr:return d=ki(c.type,c.key,c.props,null,f.mode,d),d.ref=Kt(f,null,c),d.return=f,d;case mt:return c=to(c,f.mode,d),c.return=f,c;case Cn:var _=c._init;return m(f,_(c._payload),d)}if(er(c)||Wt(c))return c=it(c,f.mode,d,null),c.return=f,c;ti(f,c)}return null}function p(f,c,d,_){var S=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:u(f,c,""+d,_);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Wr:return d.key===S?a(f,c,d,_):null;case mt:return d.key===S?s(f,c,d,_):null;case Cn:return S=d._init,p(f,c,S(d._payload),_)}if(er(d)||Wt(d))return S!==null?null:v(f,c,d,_,null);ti(f,d)}return null}function h(f,c,d,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(d)||null,u(c,f,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wr:return f=f.get(_.key===null?d:_.key)||null,a(c,f,_,S);case mt:return f=f.get(_.key===null?d:_.key)||null,s(c,f,_,S);case Cn:var T=_._init;return h(f,c,d,T(_._payload),S)}if(er(_)||Wt(_))return f=f.get(d)||null,v(c,f,_,S,null);ti(c,_)}return null}function y(f,c,d,_){for(var S=null,T=null,E=c,g=c=0,z=null;E!==null&&g<d.length;g++){E.index>g?(z=E,E=null):z=E.sibling;var L=p(f,E,d[g],_);if(L===null){E===null&&(E=z);break}e&&E&&L.alternate===null&&n(f,E),c=l(L,c,g),T===null?S=L:T.sibling=L,T=L,E=z}if(g===d.length)return t(f,E),G&&qn(f,g),S;if(E===null){for(;g<d.length;g++)E=m(f,d[g],_),E!==null&&(c=l(E,c,g),T===null?S=E:T.sibling=E,T=E);return G&&qn(f,g),S}for(E=r(f,E);g<d.length;g++)z=h(E,f,g,d[g],_),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?g:z.key),c=l(z,c,g),T===null?S=z:T.sibling=z,T=z);return e&&E.forEach(function(H){return n(f,H)}),G&&qn(f,g),S}function w(f,c,d,_){var S=Wt(d);if(typeof S!="function")throw Error(k(150));if(d=S.call(d),d==null)throw Error(k(151));for(var T=S=null,E=c,g=c=0,z=null,L=d.next();E!==null&&!L.done;g++,L=d.next()){E.index>g?(z=E,E=null):z=E.sibling;var H=p(f,E,L.value,_);if(H===null){E===null&&(E=z);break}e&&E&&H.alternate===null&&n(f,E),c=l(H,c,g),T===null?S=H:T.sibling=H,T=H,E=z}if(L.done)return t(f,E),G&&qn(f,g),S;if(E===null){for(;!L.done;g++,L=d.next())L=m(f,L.value,_),L!==null&&(c=l(L,c,g),T===null?S=L:T.sibling=L,T=L);return G&&qn(f,g),S}for(E=r(f,E);!L.done;g++,L=d.next())L=h(E,f,g,L.value,_),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?g:L.key),c=l(L,c,g),T===null?S=L:T.sibling=L,T=L);return e&&E.forEach(function(ne){return n(f,ne)}),G&&qn(f,g),S}function P(f,c,d,_){if(typeof d=="object"&&d!==null&&d.type===ht&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Wr:e:{for(var S=d.key,T=c;T!==null;){if(T.key===S){if(S=d.type,S===ht){if(T.tag===7){t(f,T.sibling),c=i(T,d.props.children),c.return=f,f=c;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Cn&&zs(S)===T.type){t(f,T.sibling),c=i(T,d.props),c.ref=Kt(f,T,d),c.return=f,f=c;break e}t(f,T);break}else n(f,T);T=T.sibling}d.type===ht?(c=it(d.props.children,f.mode,_,d.key),c.return=f,f=c):(_=ki(d.type,d.key,d.props,null,f.mode,_),_.ref=Kt(f,c,d),_.return=f,f=_)}return o(f);case mt:e:{for(T=d.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=to(d,f.mode,_),c.return=f,f=c}return o(f);case Cn:return T=d._init,P(f,c,T(d._payload),_)}if(er(d))return y(f,c,d,_);if(Wt(d))return w(f,c,d,_);ti(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(f,c.sibling),c=i(c,d),c.return=f,f=c):(t(f,c),c=no(d,f.mode,_),c.return=f,f=c),o(f)):t(f,c)}return P}var Ft=Uf(!0),Bf=Uf(!1),Rr={},ln=Wn(Rr),Cr=Wn(Rr),Nr=Wn(Rr);function Jn(e){if(e===Rr)throw Error(k(174));return e}function Uu(e,n){switch(F(Nr,n),F(Cr,e),F(ln,Rr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Co(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Co(n,e)}j(ln),F(ln,n)}function bt(){j(ln),j(Cr),j(Nr)}function Wf(e){Jn(Nr.current);var n=Jn(ln.current),t=Co(n,e.type);n!==t&&(F(Cr,e),F(ln,t))}function Bu(e){Cr.current===e&&(j(ln),j(Cr))}var U=Wn(0);function Bi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xl=[];function Wu(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var hi=_n.ReactCurrentDispatcher,Kl=_n.ReactCurrentBatchConfig,ut=0,B=null,Z=null,te=null,Wi=!1,fr=!1,Ar=0,R0=0;function se(){throw Error(k(321))}function Hu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ke(e[t],n[t]))return!1;return!0}function Qu(e,n,t,r,i,l){if(ut=l,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,hi.current=e===null||e.memoizedState===null?$0:j0,e=t(r,i),fr){l=0;do{if(fr=!1,Ar=0,25<=l)throw Error(k(301));l+=1,te=Z=null,n.updateQueue=null,hi.current=G0,e=t(r,i)}while(fr)}if(hi.current=Hi,n=Z!==null&&Z.next!==null,ut=0,te=Z=B=null,Wi=!1,n)throw Error(k(300));return e}function qu(){var e=Ar!==0;return Ar=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?B.memoizedState=te=e:te=te.next=e,te}function Ge(){if(Z===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var n=te===null?B.memoizedState:te.next;if(n!==null)te=n,Z=e;else{if(e===null)throw Error(k(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?B.memoizedState=te=e:te=te.next=e}return te}function Pr(e,n){return typeof n=="function"?n(e):n}function Yl(e){var n=Ge(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=Z,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var v=s.lane;if((ut&v)===v)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:v,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=m,o=r):a=a.next=m,B.lanes|=v,at|=v}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,Ke(r,n.memoizedState)||(Ee=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,B.lanes|=l,at|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Zl(e){var n=Ge(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ke(l,n.memoizedState)||(Ee=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Hf(){}function Qf(e,n){var t=B,r=Ge(),i=n(),l=!Ke(r.memoizedState,i);if(l&&(r.memoizedState=i,Ee=!0),r=r.queue,Xu(Kf.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||te!==null&&te.memoizedState.tag&1){if(t.flags|=2048,zr(9,Xf.bind(null,t,r,i,n),void 0,null),re===null)throw Error(k(349));(ut&30)!==0||qf(t,n,i)}return i}function qf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Xf(e,n,t,r){n.value=t,n.getSnapshot=r,Yf(n)&&Zf(e)}function Kf(e,n,t){return t(function(){Yf(n)&&Zf(e)})}function Yf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ke(e,t)}catch{return!0}}function Zf(e){var n=hn(e,1);n!==null&&Xe(n,e,1,-1)}function Ls(e){var n=Je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},n.queue=e,e=e.dispatch=b0.bind(null,B,e),[n.memoizedState,e]}function zr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Jf(){return Ge().memoizedState}function gi(e,n,t,r){var i=Je();B.flags|=e,i.memoizedState=zr(1|n,t,void 0,r===void 0?null:r)}function al(e,n,t,r){var i=Ge();r=r===void 0?null:r;var l=void 0;if(Z!==null){var o=Z.memoizedState;if(l=o.destroy,r!==null&&Hu(r,o.deps)){i.memoizedState=zr(n,t,l,r);return}}B.flags|=e,i.memoizedState=zr(1|n,t,l,r)}function Is(e,n){return gi(8390656,8,e,n)}function Xu(e,n){return al(2048,8,e,n)}function ed(e,n){return al(4,2,e,n)}function nd(e,n){return al(4,4,e,n)}function td(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rd(e,n,t){return t=t!=null?t.concat([e]):null,al(4,4,td.bind(null,n,e),t)}function Ku(){}function id(e,n){var t=Ge();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Hu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ld(e,n){var t=Ge();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Hu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function od(e,n,t){return(ut&21)===0?(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=t):(Ke(t,n)||(t=sf(),B.lanes|=t,at|=t,e.baseState=!0),n)}function V0(e,n){var t=V;V=t!==0&&4>t?t:4,e(!0);var r=Kl.transition;Kl.transition={};try{e(!1),n()}finally{V=t,Kl.transition=r}}function ud(){return Ge().memoizedState}function F0(e,n,t){var r=$n(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ad(e))sd(n,t);else if(t=bf(e,n,t,r),t!==null){var i=he();Xe(t,e,r,i),cd(t,n,r)}}function b0(e,n,t){var r=$n(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ad(e))sd(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,Ke(u,o)){var a=n.interleaved;a===null?(i.next=i,ju(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=bf(e,n,i,r),t!==null&&(i=he(),Xe(t,e,r,i),cd(t,n,r))}}function ad(e){var n=e.alternate;return e===B||n!==null&&n===B}function sd(e,n){fr=Wi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function cd(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Nu(e,t)}}var Hi={readContext:je,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},$0={readContext:je,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:Is,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,gi(4194308,4,td.bind(null,n,e),t)},useLayoutEffect:function(e,n){return gi(4194308,4,e,n)},useInsertionEffect:function(e,n){return gi(4,2,e,n)},useMemo:function(e,n){var t=Je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Je();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=F0.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:Ls,useDebugValue:Ku,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Ls(!1),n=e[0];return e=V0.bind(null,e[1]),Je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,i=Je();if(G){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),re===null)throw Error(k(349));(ut&30)!==0||qf(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Is(Kf.bind(null,r,l,e),[e]),r.flags|=2048,zr(9,Xf.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Je(),n=re.identifierPrefix;if(G){var t=dn,r=fn;t=(r&~(1<<32-qe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ar++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=R0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},j0={readContext:je,useCallback:id,useContext:je,useEffect:Xu,useImperativeHandle:rd,useInsertionEffect:ed,useLayoutEffect:nd,useMemo:ld,useReducer:Yl,useRef:Jf,useState:function(){return Yl(Pr)},useDebugValue:Ku,useDeferredValue:function(e){var n=Ge();return od(n,Z.memoizedState,e)},useTransition:function(){var e=Yl(Pr)[0],n=Ge().memoizedState;return[e,n]},useMutableSource:Hf,useSyncExternalStore:Qf,useId:ud,unstable_isNewReconciler:!1},G0={readContext:je,useCallback:id,useContext:je,useEffect:Xu,useImperativeHandle:rd,useInsertionEffect:ed,useLayoutEffect:nd,useMemo:ld,useReducer:Zl,useRef:Jf,useState:function(){return Zl(Pr)},useDebugValue:Ku,useDeferredValue:function(e){var n=Ge();return Z===null?n.memoizedState=e:od(n,Z.memoizedState,e)},useTransition:function(){var e=Zl(Pr)[0],n=Ge().memoizedState;return[e,n]},useMutableSource:Hf,useSyncExternalStore:Qf,useId:ud,unstable_isNewReconciler:!1};function $t(e,n){try{var t="",r=n;do t+=hh(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Jl(e,n,t){return{value:e,source:null,stack:t!=null?t:null,digest:n!=null?n:null}}function Xo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var U0=typeof WeakMap=="function"?WeakMap:Map;function fd(e,n,t){t=pn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){qi||(qi=!0,lu=r),Xo(e,n)},t}function dd(e,n,t){t=pn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Xo(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Xo(e,n),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Os(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new U0;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=r1.bind(null,e,n,t),n.then(e,e))}function Ms(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ds(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=pn(-1,1),n.tag=2,Fn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var B0=_n.ReactCurrentOwner,Ee=!1;function me(e,n,t,r){n.child=e===null?Bf(n,null,t,r):Ft(n,e.child,t,r)}function Rs(e,n,t,r,i){t=t.render;var l=n.ref;return It(n,i),r=Qu(e,n,t,r,l,i),t=qu(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,gn(e,n,i)):(G&&t&&Du(n),n.flags|=1,me(e,n,r,i),n.child)}function Vs(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!ia(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,pd(e,n,l,r,i)):(e=ki(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Er,t(o,r)&&e.ref===n.ref)return gn(e,n,i)}return n.flags|=1,e=jn(l,r),e.ref=n.ref,e.return=n,n.child=e}function pd(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Er(l,r)&&e.ref===n.ref)if(Ee=!1,n.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ee=!0);else return n.lanes=e.lanes,gn(e,n,i)}return Ko(e,n,t,r,i)}function vd(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Ct,Ne),Ne|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(Ct,Ne),Ne|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,F(Ct,Ne),Ne|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,F(Ct,Ne),Ne|=r;return me(e,n,i,t),n.child}function md(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ko(e,n,t,r,i){var l=xe(t)?lt:pe.current;return l=Rt(n,l),It(n,i),t=Qu(e,n,t,r,l,i),r=qu(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,gn(e,n,i)):(G&&r&&Du(n),n.flags|=1,me(e,n,t,i),n.child)}function Fs(e,n,t,r,i){if(xe(t)){var l=!0;Fi(n)}else l=!1;if(It(n,i),n.stateNode===null)_i(e,n),Gf(n,t,r),qo(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var a=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=je(s):(s=xe(t)?lt:pe.current,s=Rt(n,s));var v=t.getDerivedStateFromProps,m=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&Ps(n,o,r,s),Nn=!1;var p=n.memoizedState;o.state=p,Ui(n,r,o,i),a=n.memoizedState,u!==r||p!==a||Se.current||Nn?(typeof v=="function"&&(Qo(n,t,v,r),a=n.memoizedState),(u=Nn||As(n,t,u,r,p,a,s))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,$f(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:We(n.type,u),o.props=s,m=n.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=je(a):(a=xe(t)?lt:pe.current,a=Rt(n,a));var h=t.getDerivedStateFromProps;(v=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||p!==a)&&Ps(n,o,r,a),Nn=!1,p=n.memoizedState,o.state=p,Ui(n,r,o,i);var y=n.memoizedState;u!==m||p!==y||Se.current||Nn?(typeof h=="function"&&(Qo(n,t,h,r),y=n.memoizedState),(s=Nn||As(n,t,s,r,p,y,a)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Yo(e,n,t,r,l,i)}function Yo(e,n,t,r,i,l){md(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Ss(n,t,!1),gn(e,n,l);r=n.stateNode,B0.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Ft(n,e.child,null,l),n.child=Ft(n,null,u,l)):me(e,n,u,l),n.memoizedState=r.state,i&&Ss(n,t,!0),n.child}function hd(e){var n=e.stateNode;n.pendingContext?Es(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Es(e,n.context,!1),Uu(e,n.containerInfo)}function bs(e,n,t,r,i){return Vt(),Vu(i),n.flags|=256,me(e,n,t,r),n.child}var Zo={dehydrated:null,treeContext:null,retryLane:0};function Jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function gd(e,n,t){var r=n.pendingProps,i=U.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(U,i&1),e===null)return Wo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=fl(o,r,0,null),e=it(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Jo(t),n.memoizedState=Zo,e):Yu(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return W0(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=jn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=jn(u,l):(l=it(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Jo(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Zo,r}return l=e.child,e=l.sibling,r=jn(l,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Yu(e,n){return n=fl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ri(e,n,t,r){return r!==null&&Vu(r),Ft(n,e.child,null,t),e=Yu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function W0(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=Jl(Error(k(422))),ri(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=fl({mode:"visible",children:r.children},i,0,null),l=it(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,(n.mode&1)!==0&&Ft(n,e.child,null,o),n.child.memoizedState=Jo(o),n.memoizedState=Zo,l);if((n.mode&1)===0)return ri(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(k(419)),r=Jl(l,r,void 0),ri(e,n,o,r)}if(u=(o&e.childLanes)!==0,Ee||u){if(r=re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,hn(e,i),Xe(r,e,i,-1))}return ra(),r=Jl(Error(k(421))),ri(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=i1.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Pe=Vn(i.nextSibling),ze=n,G=!0,Qe=null,e!==null&&(Re[Ve++]=fn,Re[Ve++]=dn,Re[Ve++]=ot,fn=e.id,dn=e.overflow,ot=n),n=Yu(n,r.children),n.flags|=4096,n)}function $s(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ho(e.return,n,t)}function eo(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function _d(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(me(e,n,r.children,t),r=U.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,t,n);else if(e.tag===19)$s(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(U,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Bi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),eo(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Bi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}eo(n,!0,t,null,l);break;case"together":eo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _i(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),at|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=jn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=jn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function H0(e,n,t){switch(n.tag){case 3:hd(n),Vt();break;case 5:Wf(n);break;case 1:xe(n.type)&&Fi(n);break;case 4:Uu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;F(ji,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(U,U.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?gd(e,n,t):(F(U,U.current&1),e=gn(e,n,t),e!==null?e.sibling:null);F(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return _d(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,vd(e,n,t)}return gn(e,n,t)}var yd,eu,wd,kd;yd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};eu=function(){};wd=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Jn(ln.current);var l=null;switch(t){case"input":i=Eo(e,i),r=Eo(e,r),l=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":i=To(e,i),r=To(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ri)}No(t,r);var o;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mr.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(mr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&$("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};kd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Yt(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Q0(e,n,t){var r=n.pendingProps;switch(Ru(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(n),null;case 1:return xe(n.type)&&Vi(),ce(n),null;case 3:return r=n.stateNode,bt(),j(Se),j(pe),Wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ni(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qe!==null&&(au(Qe),Qe=null))),eu(e,n),ce(n),null;case 5:Bu(n);var i=Jn(Nr.current);if(t=n.type,e!==null&&n.stateNode!=null)wd(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return ce(n),null}if(e=Jn(ln.current),ni(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[en]=n,r[Tr]=l,e=(n.mode&1)!==0,t){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<tr.length;i++)$(tr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Xa(r,l),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},$("invalid",r);break;case"textarea":Ya(r,l),$("invalid",r)}No(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&ei(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&ei(r.textContent,u,e),i=["children",""+u]):mr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&$("scroll",r)}switch(t){case"input":Hr(r),Ka(r,l,!0);break;case"textarea":Hr(r),Za(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ri)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[en]=n,e[Tr]=r,yd(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ao(t,r),t){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<tr.length;i++)$(tr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Xa(e,r),i=Eo(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),$("invalid",e);break;case"textarea":Ya(e,r),i=To(e,r),$("invalid",e);break;default:i=r}No(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?Kc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&qc(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&hr(e,a):typeof a=="number"&&hr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(mr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&$("scroll",e):a!=null&&ku(e,l,a,o))}switch(t){case"input":Hr(e),Ka(e,r,!1);break;case"textarea":Hr(e),Za(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?At(e,!!r.multiple,l,!1):r.defaultValue!=null&&At(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ri)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ce(n),null;case 6:if(e&&n.stateNode!=null)kd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Jn(Nr.current),Jn(ln.current),ni(n)){if(r=n.stateNode,t=n.memoizedProps,r[en]=n,(l=r.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:ei(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[en]=n,n.stateNode=r}return ce(n),null;case 13:if(j(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Pe!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Ff(),Vt(),n.flags|=98560,l=!1;else if(l=ni(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[en]=n}else Vt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ce(n),l=!1}else Qe!==null&&(au(Qe),Qe=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(U.current&1)!==0?J===0&&(J=3):ra())),n.updateQueue!==null&&(n.flags|=4),ce(n),null);case 4:return bt(),eu(e,n),e===null&&Sr(n.stateNode.containerInfo),ce(n),null;case 10:return $u(n.type._context),ce(n),null;case 17:return xe(n.type)&&Vi(),ce(n),null;case 19:if(j(U),l=n.memoizedState,l===null)return ce(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Yt(l,!1);else{if(J!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=Bi(e),o!==null){for(n.flags|=128,Yt(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(U,U.current&1|2),n.child}e=e.sibling}l.tail!==null&&q()>jt&&(n.flags|=128,r=!0,Yt(l,!1),n.lanes=4194304)}else{if(!r)if(e=Bi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Yt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!G)return ce(n),null}else 2*q()-l.renderingStartTime>jt&&t!==1073741824&&(n.flags|=128,r=!0,Yt(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=q(),n.sibling=null,t=U.current,F(U,r?t&1|2:t&1),n):(ce(n),null);case 22:case 23:return ta(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(Ne&1073741824)!==0&&(ce(n),n.subtreeFlags&6&&(n.flags|=8192)):ce(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function q0(e,n){switch(Ru(n),n.tag){case 1:return xe(n.type)&&Vi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return bt(),j(Se),j(pe),Wu(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Bu(n),null;case 13:if(j(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Vt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(U),null;case 4:return bt(),null;case 10:return $u(n.type._context),null;case 22:case 23:return ta(),null;case 24:return null;default:return null}}var ii=!1,fe=!1,X0=typeof WeakSet=="function"?WeakSet:Set,C=null;function Tt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Q(e,n,r)}else t.current=null}function nu(e,n,t){try{t()}catch(r){Q(e,n,r)}}var js=!1;function K0(e,n){if(Fo=Oi,e=Tf(),Mu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,a=-1,s=0,v=0,m=e,p=null;n:for(;;){for(var h;m!==t||i!==0&&m.nodeType!==3||(u=o+i),m!==l||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(h=m.firstChild)!==null;)p=m,m=h;for(;;){if(m===e)break n;if(p===t&&++s===i&&(u=o),p===l&&++v===r&&(a=o),(h=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=h}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(bo={focusedElem:e,selectionRange:t},Oi=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var y=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,P=y.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:We(n.type,w),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){Q(n,n.return,_)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return y=js,js=!1,y}function dr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&nu(n,t,l)}i=i.next}while(i!==r)}}function sl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function tu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ed(e){var n=e.alternate;n!==null&&(e.alternate=null,Ed(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[Tr],delete n[Go],delete n[I0],delete n[O0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sd(e){return e.tag===5||e.tag===3||e.tag===4}function Gs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ru(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ri));else if(r!==4&&(e=e.child,e!==null))for(ru(e,n,t),e=e.sibling;e!==null;)ru(e,n,t),e=e.sibling}function iu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(iu(e,n,t),e=e.sibling;e!==null;)iu(e,n,t),e=e.sibling}var ie=null,He=!1;function En(e,n,t){for(t=t.child;t!==null;)xd(e,n,t),t=t.sibling}function xd(e,n,t){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(nl,t)}catch{}switch(t.tag){case 5:fe||Tt(t,n);case 6:var r=ie,i=He;ie=null,En(e,n,t),ie=r,He=i,ie!==null&&(He?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(He?(e=ie,t=t.stateNode,e.nodeType===8?Ql(e.parentNode,t):e.nodeType===1&&Ql(e,t),wr(e)):Ql(ie,t.stateNode));break;case 4:r=ie,i=He,ie=t.stateNode.containerInfo,He=!0,En(e,n,t),ie=r,He=i;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&nu(t,n,o),i=i.next}while(i!==r)}En(e,n,t);break;case 1:if(!fe&&(Tt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){Q(t,n,u)}En(e,n,t);break;case 21:En(e,n,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,En(e,n,t),fe=r):En(e,n,t);break;default:En(e,n,t)}}function Us(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new X0),n.forEach(function(r){var i=l1.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Be(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:ie=u.stateNode,He=!1;break e;case 3:ie=u.stateNode.containerInfo,He=!0;break e;case 4:ie=u.stateNode.containerInfo,He=!0;break e}u=u.return}if(ie===null)throw Error(k(160));xd(l,o,i),ie=null,He=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){Q(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Td(n,e),n=n.sibling}function Td(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(n,e),Ze(e),r&4){try{dr(3,e,e.return),sl(3,e)}catch(w){Q(e,e.return,w)}try{dr(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:Be(n,e),Ze(e),r&512&&t!==null&&Tt(t,t.return);break;case 5:if(Be(n,e),Ze(e),r&512&&t!==null&&Tt(t,t.return),e.flags&32){var i=e.stateNode;try{hr(i,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Wc(i,l),Ao(u,o);var s=Ao(u,l);for(o=0;o<a.length;o+=2){var v=a[o],m=a[o+1];v==="style"?Kc(i,m):v==="dangerouslySetInnerHTML"?qc(i,m):v==="children"?hr(i,m):ku(i,v,m,s)}switch(u){case"input":So(i,l);break;case"textarea":Hc(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?At(i,!!l.multiple,h,!1):p!==!!l.multiple&&(l.defaultValue!=null?At(i,!!l.multiple,l.defaultValue,!0):At(i,!!l.multiple,l.multiple?[]:"",!1))}i[Tr]=l}catch(w){Q(e,e.return,w)}}break;case 6:if(Be(n,e),Ze(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){Q(e,e.return,w)}}break;case 3:if(Be(n,e),Ze(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{wr(n.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:Be(n,e),Ze(e);break;case 13:Be(n,e),Ze(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ea=q())),r&4&&Us(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(s=fe)||v,Be(n,e),fe=s):Be(n,e),Ze(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!v&&(e.mode&1)!==0)for(C=e,v=e.child;v!==null;){for(m=C=v;C!==null;){switch(p=C,h=p.child,p.tag){case 0:case 11:case 14:case 15:dr(4,p,p.return);break;case 1:Tt(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){Q(r,t,w)}}break;case 5:Tt(p,p.return);break;case 22:if(p.memoizedState!==null){Ws(m);continue}}h!==null?(h.return=p,C=h):Ws(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{i=m.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Xc("display",o))}catch(w){Q(e,e.return,w)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(w){Q(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(n,e),Ze(e),r&4&&Us(e);break;case 21:break;default:Be(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Sd(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hr(i,""),r.flags&=-33);var l=Gs(e);iu(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Gs(e);ru(e,u,o);break;default:throw Error(k(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Y0(e,n,t){C=e,Cd(e)}function Cd(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ii;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||fe;u=ii;var s=fe;if(ii=o,(fe=a)&&!s)for(C=i;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?Hs(i):a!==null?(a.return=o,C=a):Hs(i);for(;l!==null;)C=l,Cd(l),l=l.sibling;C=i,ii=u,fe=s}Bs(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,C=l):Bs(e)}}function Bs(e){for(;C!==null;){var n=C;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:fe||sl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Ns(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ns(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var v=s.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&wr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}fe||n.flags&512&&tu(n)}catch(p){Q(n,n.return,p)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function Ws(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function Hs(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{sl(4,n)}catch(a){Q(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){Q(n,i,a)}}var l=n.return;try{tu(n)}catch(a){Q(n,l,a)}break;case 5:var o=n.return;try{tu(n)}catch(a){Q(n,o,a)}}}catch(a){Q(n,n.return,a)}if(n===e){C=null;break}var u=n.sibling;if(u!==null){u.return=n.return,C=u;break}C=n.return}}var Z0=Math.ceil,Qi=_n.ReactCurrentDispatcher,Zu=_n.ReactCurrentOwner,$e=_n.ReactCurrentBatchConfig,D=0,re=null,X=null,oe=0,Ne=0,Ct=Wn(0),J=0,Lr=null,at=0,cl=0,Ju=0,pr=null,ke=null,ea=0,jt=1/0,un=null,qi=!1,lu=null,bn=null,li=!1,In=null,Xi=0,vr=0,ou=null,yi=-1,wi=0;function he(){return(D&6)!==0?q():yi!==-1?yi:yi=q()}function $n(e){return(e.mode&1)===0?1:(D&2)!==0&&oe!==0?oe&-oe:D0.transition!==null?(wi===0&&(wi=sf()),wi):(e=V,e!==0||(e=window.event,e=e===void 0?16:hf(e.type)),e)}function Xe(e,n,t,r){if(50<vr)throw vr=0,ou=null,Error(k(185));Or(e,t,r),((D&2)===0||e!==re)&&(e===re&&((D&2)===0&&(cl|=t),J===4&&Pn(e,oe)),Te(e,r),t===1&&D===0&&(n.mode&1)===0&&(jt=q()+500,ol&&Hn()))}function Te(e,n){var t=e.callbackNode;Dh(e,n);var r=Ii(e,e===re?oe:0);if(r===0)t!==null&&ns(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ns(t),n===1)e.tag===0?M0(Qs.bind(null,e)):Df(Qs.bind(null,e)),z0(function(){(D&6)===0&&Hn()}),t=null;else{switch(cf(r)){case 1:t=Cu;break;case 4:t=uf;break;case 16:t=Li;break;case 536870912:t=af;break;default:t=Li}t=Md(t,Nd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Nd(e,n){if(yi=-1,wi=0,(D&6)!==0)throw Error(k(327));var t=e.callbackNode;if(Ot()&&e.callbackNode!==t)return null;var r=Ii(e,e===re?oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Ki(e,r);else{n=r;var i=D;D|=2;var l=Pd();(re!==e||oe!==n)&&(un=null,jt=q()+500,rt(e,n));do try{n1();break}catch(u){Ad(e,u)}while(1);bu(),Qi.current=l,D=i,X!==null?n=0:(re=null,oe=0,n=J)}if(n!==0){if(n===2&&(i=Oo(e),i!==0&&(r=i,n=uu(e,i))),n===1)throw t=Lr,rt(e,0),Pn(e,r),Te(e,q()),t;if(n===6)Pn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!J0(i)&&(n=Ki(e,r),n===2&&(l=Oo(e),l!==0&&(r=l,n=uu(e,l))),n===1))throw t=Lr,rt(e,0),Pn(e,r),Te(e,q()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Xn(e,ke,un);break;case 3:if(Pn(e,r),(r&130023424)===r&&(n=ea+500-q(),10<n)){if(Ii(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jo(Xn.bind(null,e,ke,un),n);break}Xn(e,ke,un);break;case 4:if(Pn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-qe(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z0(r/1960))-r,10<r){e.timeoutHandle=jo(Xn.bind(null,e,ke,un),r);break}Xn(e,ke,un);break;case 5:Xn(e,ke,un);break;default:throw Error(k(329))}}}return Te(e,q()),e.callbackNode===t?Nd.bind(null,e):null}function uu(e,n){var t=pr;return e.current.memoizedState.isDehydrated&&(rt(e,n).flags|=256),e=Ki(e,n),e!==2&&(n=ke,ke=t,n!==null&&au(n)),e}function au(e){ke===null?ke=e:ke.push.apply(ke,e)}function J0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Ke(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pn(e,n){for(n&=~Ju,n&=~cl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-qe(n),r=1<<t;e[t]=-1,n&=~r}}function Qs(e){if((D&6)!==0)throw Error(k(327));Ot();var n=Ii(e,0);if((n&1)===0)return Te(e,q()),null;var t=Ki(e,n);if(e.tag!==0&&t===2){var r=Oo(e);r!==0&&(n=r,t=uu(e,r))}if(t===1)throw t=Lr,rt(e,0),Pn(e,n),Te(e,q()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Xn(e,ke,un),Te(e,q()),null}function na(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(jt=q()+500,ol&&Hn())}}function st(e){In!==null&&In.tag===0&&(D&6)===0&&Ot();var n=D;D|=1;var t=$e.transition,r=V;try{if($e.transition=null,V=1,e)return e()}finally{V=r,$e.transition=t,D=n,(D&6)===0&&Hn()}}function ta(){Ne=Ct.current,j(Ct)}function rt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,P0(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(Ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vi();break;case 3:bt(),j(Se),j(pe),Wu();break;case 5:Bu(r);break;case 4:bt();break;case 13:j(U);break;case 19:j(U);break;case 10:$u(r.type._context);break;case 22:case 23:ta()}t=t.return}if(re=e,X=e=jn(e.current,null),oe=Ne=n,J=0,Lr=null,Ju=cl=at=0,ke=pr=null,Zn!==null){for(n=0;n<Zn.length;n++)if(t=Zn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Zn=null}return e}function Ad(e,n){do{var t=X;try{if(bu(),hi.current=Hi,Wi){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wi=!1}if(ut=0,te=Z=B=null,fr=!1,Ar=0,Zu.current=null,t===null||t.return===null){J=1,Lr=n,X=null;break}e:{var l=e,o=t.return,u=t,a=n;if(n=oe,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,v=u,m=v.tag;if((v.mode&1)===0&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var h=Ms(o);if(h!==null){h.flags&=-257,Ds(h,o,u,l,n),h.mode&1&&Os(l,s,n),n=h,a=s;var y=n.updateQueue;if(y===null){var w=new Set;w.add(a),n.updateQueue=w}else y.add(a);break e}else{if((n&1)===0){Os(l,s,n),ra();break e}a=Error(k(426))}}else if(G&&u.mode&1){var P=Ms(o);if(P!==null){(P.flags&65536)===0&&(P.flags|=256),Ds(P,o,u,l,n),Vu($t(a,u));break e}}l=a=$t(a,u),J!==4&&(J=2),pr===null?pr=[l]:pr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=fd(l,a,n);Cs(l,f);break e;case 1:u=a;var c=l.type,d=l.stateNode;if((l.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(bn===null||!bn.has(d)))){l.flags|=65536,n&=-n,l.lanes|=n;var _=dd(l,u,n);Cs(l,_);break e}}l=l.return}while(l!==null)}Ld(t)}catch(S){n=S,X===t&&t!==null&&(X=t=t.return);continue}break}while(1)}function Pd(){var e=Qi.current;return Qi.current=Hi,e===null?Hi:e}function ra(){(J===0||J===3||J===2)&&(J=4),re===null||(at&268435455)===0&&(cl&268435455)===0||Pn(re,oe)}function Ki(e,n){var t=D;D|=2;var r=Pd();(re!==e||oe!==n)&&(un=null,rt(e,n));do try{e1();break}catch(i){Ad(e,i)}while(1);if(bu(),D=t,Qi.current=r,X!==null)throw Error(k(261));return re=null,oe=0,J}function e1(){for(;X!==null;)zd(X)}function n1(){for(;X!==null&&!Ch();)zd(X)}function zd(e){var n=Od(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,n===null?Ld(e):X=n,Zu.current=null}function Ld(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Q0(t,n,Ne),t!==null){X=t;return}}else{if(t=q0(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);J===0&&(J=5)}function Xn(e,n,t){var r=V,i=$e.transition;try{$e.transition=null,V=1,t1(e,n,t,r)}finally{$e.transition=i,V=r}return null}function t1(e,n,t,r){do Ot();while(In!==null);if((D&6)!==0)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Rh(e,l),e===re&&(X=re=null,oe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||li||(li=!0,Md(Li,function(){return Ot(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=$e.transition,$e.transition=null;var o=V;V=1;var u=D;D|=4,Zu.current=null,K0(e,t),Td(t,e),E0(bo),Oi=!!Fo,bo=Fo=null,e.current=t,Y0(t),Nh(),D=u,V=o,$e.transition=l}else e.current=t;if(li&&(li=!1,In=e,Xi=i),l=e.pendingLanes,l===0&&(bn=null),zh(t.stateNode),Te(e,q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(qi)throw qi=!1,e=lu,lu=null,e;return(Xi&1)!==0&&e.tag!==0&&Ot(),l=e.pendingLanes,(l&1)!==0?e===ou?vr++:(vr=0,ou=e):vr=0,Hn(),null}function Ot(){if(In!==null){var e=cf(Xi),n=$e.transition,t=V;try{if($e.transition=null,V=16>e?16:e,In===null)var r=!1;else{if(e=In,In=null,Xi=0,(D&6)!==0)throw Error(k(331));var i=D;for(D|=4,C=e.current;C!==null;){var l=C,o=l.child;if((C.flags&16)!==0){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(C=s;C!==null;){var v=C;switch(v.tag){case 0:case 11:case 15:dr(8,v,l)}var m=v.child;if(m!==null)m.return=v,C=m;else for(;C!==null;){v=C;var p=v.sibling,h=v.return;if(Ed(v),v===s){C=null;break}if(p!==null){p.return=h,C=p;break}C=h}}}var y=l.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}C=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,C=o;else e:for(;C!==null;){if(l=C,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:dr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,C=f;break e}C=l.return}}var c=e.current;for(C=c;C!==null;){o=C;var d=o.child;if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,C=d;else e:for(o=c;C!==null;){if(u=C,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:sl(9,u)}}catch(S){Q(u,u.return,S)}if(u===o){C=null;break e}var _=u.sibling;if(_!==null){_.return=u.return,C=_;break e}C=u.return}}if(D=i,Hn(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{V=t,$e.transition=n}}return!1}function qs(e,n,t){n=$t(t,n),n=fd(e,n,1),e=Fn(e,n,1),n=he(),e!==null&&(Or(e,1,n),Te(e,n))}function Q(e,n,t){if(e.tag===3)qs(e,e,t);else for(;n!==null;){if(n.tag===3){qs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){e=$t(t,e),e=dd(n,e,1),n=Fn(n,e,1),e=he(),n!==null&&(Or(n,1,e),Te(n,e));break}}n=n.return}}function r1(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,re===e&&(oe&t)===t&&(J===4||J===3&&(oe&130023424)===oe&&500>q()-ea?rt(e,0):Ju|=t),Te(e,n)}function Id(e,n){n===0&&((e.mode&1)===0?n=1:(n=Xr,Xr<<=1,(Xr&130023424)===0&&(Xr=4194304)));var t=he();e=hn(e,n),e!==null&&(Or(e,n,t),Te(e,t))}function i1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Id(e,t)}function l1(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Id(e,t)}var Od;Od=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)Ee=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Ee=!1,H0(e,n,t);Ee=(e.flags&131072)!==0}else Ee=!1,G&&(n.flags&1048576)!==0&&Rf(n,$i,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;_i(e,n),e=n.pendingProps;var i=Rt(n,pe.current);It(n,t),i=Qu(null,n,r,e,i,t);var l=qu();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,xe(r)?(l=!0,Fi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gu(n),i.updater=ul,n.stateNode=i,i._reactInternals=n,qo(n,r,e,t),n=Yo(null,n,r,!0,l,t)):(n.tag=0,G&&l&&Du(n),me(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(_i(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=u1(r),e=We(r,e),i){case 0:n=Ko(null,n,r,e,t);break e;case 1:n=Fs(null,n,r,e,t);break e;case 11:n=Rs(null,n,r,e,t);break e;case 14:n=Vs(null,n,r,We(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Ko(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Fs(e,n,r,i,t);case 3:e:{if(hd(n),e===null)throw Error(k(387));r=n.pendingProps,l=n.memoizedState,i=l.element,$f(e,n),Ui(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=$t(Error(k(423)),n),n=bs(e,n,r,t,i);break e}else if(r!==i){i=$t(Error(k(424)),n),n=bs(e,n,r,t,i);break e}else for(Pe=Vn(n.stateNode.containerInfo.firstChild),ze=n,G=!0,Qe=null,t=Bf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vt(),r===i){n=gn(e,n,t);break e}me(e,n,r,t)}n=n.child}return n;case 5:return Wf(n),e===null&&Wo(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,$o(r,i)?o=null:l!==null&&$o(r,l)&&(n.flags|=32),md(e,n),me(e,n,o,t),n.child;case 6:return e===null&&Wo(n),null;case 13:return gd(e,n,t);case 4:return Uu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ft(n,null,r,t):me(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Rs(e,n,r,i,t);case 7:return me(e,n,n.pendingProps,t),n.child;case 8:return me(e,n,n.pendingProps.children,t),n.child;case 12:return me(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,F(ji,r._currentValue),r._currentValue=o,l!==null)if(Ke(l.value,o)){if(l.children===i.children&&!Se.current){n=gn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=pn(-1,t&-t),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var v=s.pending;v===null?a.next=a:(a.next=v.next,v.next=a),s.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Ho(l.return,t,n),u.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(k(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Ho(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}me(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,It(n,t),i=je(i),r=r(i),n.flags|=1,me(e,n,r,t),n.child;case 14:return r=n.type,i=We(r,n.pendingProps),i=We(r.type,i),Vs(e,n,r,i,t);case 15:return pd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),_i(e,n),n.tag=1,xe(r)?(e=!0,Fi(n)):e=!1,It(n,t),Gf(n,r,i),qo(n,r,i,t),Yo(null,n,r,!0,e,t);case 19:return _d(e,n,t);case 22:return vd(e,n,t)}throw Error(k(156,n.tag))};function Md(e,n){return of(e,n)}function o1(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,n,t,r){return new o1(e,n,t,r)}function ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function u1(e){if(typeof e=="function")return ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Su)return 11;if(e===xu)return 14}return 2}function jn(e,n){var t=e.alternate;return t===null?(t=be(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ki(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")ia(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ht:return it(t.children,i,l,n);case Eu:o=8,i|=8;break;case _o:return e=be(12,t,n,i|2),e.elementType=_o,e.lanes=l,e;case yo:return e=be(13,t,n,i),e.elementType=yo,e.lanes=l,e;case wo:return e=be(19,t,n,i),e.elementType=wo,e.lanes=l,e;case Gc:return fl(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $c:o=10;break e;case jc:o=9;break e;case Su:o=11;break e;case xu:o=14;break e;case Cn:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=be(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function it(e,n,t,r){return e=be(7,e,r,n),e.lanes=t,e}function fl(e,n,t,r){return e=be(22,e,r,n),e.elementType=Gc,e.lanes=t,e.stateNode={isHidden:!1},e}function no(e,n,t){return e=be(6,e,null,n),e.lanes=t,e}function to(e,n,t){return n=be(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function a1(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function la(e,n,t,r,i,l,o,u,a){return e=new a1(e,n,t,u,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=be(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(l),e}function s1(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Dd(e){if(!e)return Un;e=e._reactInternals;e:{if(ft(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(xe(t))return Mf(e,t,n)}return n}function Rd(e,n,t,r,i,l,o,u,a){return e=la(t,r,!0,e,i,l,o,u,a),e.context=Dd(null),t=e.current,r=he(),i=$n(t),l=pn(r,i),l.callback=n!=null?n:null,Fn(t,l,i),e.current.lanes=i,Or(e,i,r),Te(e,r),e}function dl(e,n,t,r){var i=n.current,l=he(),o=$n(i);return t=Dd(t),n.context===null?n.context=t:n.pendingContext=t,n=pn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Fn(i,n,o),e!==null&&(Xe(e,i,o,l),mi(e,i,o)),o}function Yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function oa(e,n){Xs(e,n),(e=e.alternate)&&Xs(e,n)}function c1(){return null}var Vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ua(e){this._internalRoot=e}pl.prototype.render=ua.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));dl(e,n,null,null)};pl.prototype.unmount=ua.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;st(function(){dl(null,e,null,null)}),n[mn]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var n=pf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<An.length&&n!==0&&n<An[t].priority;t++);An.splice(t,0,e),t===0&&mf(e)}};function aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ks(){}function f1(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=Yi(o);l.call(s)}}var o=Rd(n,r,e,0,null,!1,!1,"",Ks);return e._reactRootContainer=o,e[mn]=o.current,Sr(e.nodeType===8?e.parentNode:e),st(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=Yi(a);u.call(s)}}var a=la(e,0,!1,null,null,!1,!1,"",Ks);return e._reactRootContainer=a,e[mn]=a.current,Sr(e.nodeType===8?e.parentNode:e),st(function(){dl(n,a,t,r)}),a}function ml(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=Yi(o);u.call(a)}}dl(n,o,e,i)}else o=f1(t,n,e,i,r);return Yi(o)}ff=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=nr(n.pendingLanes);t!==0&&(Nu(n,t|1),Te(n,q()),(D&6)===0&&(jt=q()+500,Hn()))}break;case 13:st(function(){var r=hn(e,1);if(r!==null){var i=he();Xe(r,e,1,i)}}),oa(e,1)}};Au=function(e){if(e.tag===13){var n=hn(e,134217728);if(n!==null){var t=he();Xe(n,e,134217728,t)}oa(e,134217728)}};df=function(e){if(e.tag===13){var n=$n(e),t=hn(e,n);if(t!==null){var r=he();Xe(t,e,n,r)}oa(e,n)}};pf=function(){return V};vf=function(e,n){var t=V;try{return V=e,n()}finally{V=t}};zo=function(e,n,t){switch(n){case"input":if(So(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ll(r);if(!i)throw Error(k(90));Bc(r),So(r,i)}}}break;case"textarea":Hc(e,t);break;case"select":n=t.value,n!=null&&At(e,!!t.multiple,n,!1)}};Jc=na;ef=st;var d1={usingClientEntryPoint:!1,Events:[Dr,wt,ll,Yc,Zc,na]},Zt={findFiberByHostInstance:Yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},p1={bundleType:Zt.bundleType,version:Zt.version,rendererPackageName:Zt.rendererPackageName,rendererConfig:Zt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rf(e),e===null?null:e.stateNode},findFiberByHostInstance:Zt.findFiberByHostInstance||c1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oi.isDisabled&&oi.supportsFiber)try{nl=oi.inject(p1),rn=oi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d1;Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!aa(n))throw Error(k(200));return s1(e,n,null,t)};Ie.createRoot=function(e,n){if(!aa(e))throw Error(k(299));var t=!1,r="",i=Vd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=la(e,1,!1,null,null,t,!1,r,i),e[mn]=n.current,Sr(e.nodeType===8?e.parentNode:e),new ua(n)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=rf(n),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return st(e)};Ie.hydrate=function(e,n,t){if(!vl(n))throw Error(k(200));return ml(null,e,n,!0,t)};Ie.hydrateRoot=function(e,n,t){if(!aa(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Vd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Rd(n,null,e,1,t!=null?t:null,i,!1,l,o),e[mn]=n.current,Sr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new pl(n)};Ie.render=function(e,n,t){if(!vl(n))throw Error(k(200));return ml(null,e,n,!1,t)};Ie.unmountComponentAtNode=function(e){if(!vl(e))throw Error(k(40));return e._reactRootContainer?(st(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};Ie.unstable_batchedUpdates=na;Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!vl(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return ml(e,n,t,!1,r)};Ie.version="18.2.0-next-9e3b772b8-20220608";function Fd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fd)}catch(e){console.error(e)}}Fd(),Dc.exports=Ie;function v1(e){if(e!==void 0)return lc(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}Dc.exports.render(N.exports.createElement(N.exports.StrictMode,{children:N.exports.createElement(fh,{})}),v1(Ap(document.querySelector("#root"))));
