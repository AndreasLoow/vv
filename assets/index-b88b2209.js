(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var bc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),Hp=Symbol.for("react.portal"),Qp=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),Kp=Symbol.for("react.profiler"),Yp=Symbol.for("react.provider"),Zp=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),ev=Symbol.for("react.suspense"),nv=Symbol.for("react.memo"),tv=Symbol.for("react.lazy"),Ba=Symbol.iterator;function rv(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var Rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dc=Object.assign,Lc={};function Yt(e,n,t){this.props=e,this.context=n,this.refs=Lc,this.updater=t||Rc}Yt.prototype.isReactComponent={};Yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oc(){}Oc.prototype=Yt.prototype;function ju(e,n,t){this.props=e,this.context=n,this.refs=Lc,this.updater=t||Rc}var Vu=ju.prototype=new Oc;Vu.constructor=ju;Dc(Vu,Yt.prototype);Vu.isPureReactComponent=!0;var Wa=Array.isArray,Mc=Object.prototype.hasOwnProperty,$u={current:null},jc={key:!0,ref:!0,__self:!0,__source:!0};function Vc(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Mc.call(n,r)&&!jc.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:qr,type:e,key:o,ref:l,props:i,_owner:$u.current}}function iv(e,n){return{$$typeof:qr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function ov(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ha=/\/+/g;function Ko(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ov(""+e.key):n.toString(36)}function Ti(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case qr:case Hp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ko(l,0):r,Wa(i)?(t="",e!=null&&(t=e.replace(Ha,"$&/")+"/"),Ti(i,n,t,"",function(s){return s})):i!=null&&(Fu(i)&&(i=iv(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ha,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",Wa(e))for(var u=0;u<e.length;u++){o=e[u];var a=r+Ko(o,u);l+=Ti(o,n,t,a,i)}else if(a=rv(e),typeof a=="function")for(e=a.call(e),u=0;!(o=e.next()).done;)o=o.value,a=r+Ko(o,u++),l+=Ti(o,n,t,a,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function ni(e,n,t){if(e==null)return e;var r=[],i=0;return Ti(e,r,"","",function(o){return n.call(t,o,i++)}),r}function lv(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Ni={transition:null},uv={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Ni,ReactCurrentOwner:$u};D.Children={map:ni,forEach:function(e,n,t){ni(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ni(e,function(){n++}),n},toArray:function(e){return ni(e,function(n){return n})||[]},only:function(e){if(!Fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Yt;D.Fragment=Qp;D.Profiler=Kp;D.PureComponent=ju;D.StrictMode=Xp;D.Suspense=ev;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uv;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dc({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=$u.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)Mc.call(n,a)&&!jc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:qr,type:e.type,key:i,ref:o,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:Zp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yp,_context:e},e.Consumer=e};D.createElement=Vc;D.createFactory=function(e){var n=Vc.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Jp,render:e}};D.isValidElement=Fu;D.lazy=function(e){return{$$typeof:tv,_payload:{_status:-1,_result:e},_init:lv}};D.memo=function(e,n){return{$$typeof:nv,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=Ni.transition;Ni.transition={};try{e()}finally{Ni.transition=n}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,n){return we.current.useCallback(e,n)};D.useContext=function(e){return we.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return we.current.useDeferredValue(e)};D.useEffect=function(e,n){return we.current.useEffect(e,n)};D.useId=function(){return we.current.useId()};D.useImperativeHandle=function(e,n,t){return we.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return we.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return we.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return we.current.useMemo(e,n)};D.useReducer=function(e,n,t){return we.current.useReducer(e,n,t)};D.useRef=function(e){return we.current.useRef(e)};D.useState=function(e){return we.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return we.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return we.current.useTransition()};D.version="18.2.0";bc.exports=D;var $t=bc.exports;function $c(e){switch(e){case 0:return"1";case 1:return"0";case 2:return"x";case 3:return"z"}}function av(e){return e===0}function sv(e){return e===1}function cv(e,n){return e===n?e:e===3?n:n===3?e:2}function dv(e,n){switch(e){case 0:return n>=3?0:n;case 1:return 1;case 2:return n!==1?2:1;case 3:return n}}function fv(e,n){switch(e){case 0:return 0;case 1:return n>=3?1:n;case 2:return n!==0?2:0;case 3:return n}}function pv(e){return e!==1?e!==0?2:1:0}function Qa(e,n){return e!==1?e!==0?n!==1?2:1:n!==1?n!==0?2:0:n!==1?2:1:1}function Xa(e,n){return e!==1?e!==0&&n!==0?2:0:n!==1?n!==0||n!==0?2:0:1}function vv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function mv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function hv(e,n){return e!==1?e!==0||n!==0?2:0:n!==1?2:1}var Yo=0,Ka=1,_v=2,gv=3;function yv(e,n){return e<n?-1:e===n?0:1}function wv(e,n){return e?n?0:1:n?-1:0}function kv(e,n){return e===n?0:e<n?-1:e>n||e===e?1:n===n?-1:0}function Fc(e,n){return e===n?0:e<n?-1:1}function Gc(e,n){return e<n?e:n}function Ev(e,n){return e>n?e:n}function Ya(e,n,t){for(var r=new Array(t),i=0,o=n;i<t;)r[i]=e[o],i=i+1|0,o=o+1|0;return r}function $i(e,n){for(;;){var t=n,r=e,i=r.length,o=i===0?1:i,l=t.length,u=o-l|0;if(u===0)return r.apply(null,t);if(u>=0)return function(a,s){return function(v){return $i(a,s.concat([v]))}}(r,t);n=Ya(t,o,-u|0),e=r.apply(null,Ya(t,0,o))}}function pn(e,n){var t=e.length;if(t===1)return e(n);switch(t){case 1:return e(n);case 2:return function(r){return e(n,r)};case 3:return function(r,i){return e(n,r,i)};case 4:return function(r,i,o){return e(n,r,i,o)};case 5:return function(r,i,o,l){return e(n,r,i,o,l)};case 6:return function(r,i,o,l,u){return e(n,r,i,o,l,u)};case 7:return function(r,i,o,l,u,a){return e(n,r,i,o,l,u,a)};default:return $i(e,[n])}}function Kn(e){var n=e.length;return n===1?e:function(t){return pn(e,t)}}function Uc(e,n,t){var r=e.length;if(r===2)return e(n,t);switch(r){case 1:return $i(e(n),[t]);case 2:return e(n,t);case 3:return function(i){return e(n,t,i)};case 4:return function(i,o){return e(n,t,i,o)};case 5:return function(i,o,l){return e(n,t,i,o,l)};case 6:return function(i,o,l,u){return e(n,t,i,o,l,u)};case 7:return function(i,o,l,u,a){return e(n,t,i,o,l,u,a)};default:return $i(e,[n,t])}}function Br(e){var n=e.length;return n===2?e:function(t,r){return Uc(e,t,r)}}function mt(e){return e===void 0?{BS_PRIVATE_NESTED_SOME_NONE:0}:e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function Sv(e){if(e!=null)return mt(e)}function xv(e){if(e!==void 0)return mt(e)}function Wr(e){if(!(e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;if(n!==0)return{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}var Tv=function(e,n,t){var r,i;i=t.length;var o=[];for(r=0;r<i-1;++r)o.push(t[r]);var l=t[i-1];for(r=0;r<l.length;++r)o.push(l[r]);return e[n].apply(e,o)};function Za(e,n){return n.push(e)}function Gu(e,n){return Tv(n,"concat",[e])}function Uu(e,n){return n.join(e)}function Fi(e,n,t){return t.slice(e,n)}function Ft(e,n){return n.filter(Kn(e))}function Nv(e,n){return xv(n.find(Kn(e)))}function qc(e,n){return n.findIndex(Kn(e))}function Gt(e,n){n.forEach(Kn(e))}function X(e,n){return n.map(Kn(e))}function fn(e,n){return n.map(Br(e))}function qe(e,n,t){return t.reduce(Br(e),n)}function Cv(e,n){return n.some(Kn(e))}function Bc(e){if(e!==void 0)return Wr(e);throw new Error("getExn")}function R(e,n){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",35,2],Error:new Error};return e[n]}function Z(e,n,t){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",45,2],Error:new Error};e[n]=t}function Av(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(e[i]);return r}function hn(e,n){return Av(e,Kn(n))}function Pv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(i,e[i]);return r}function Zo(e,n){return Pv(e,Br(n))}function zv(e,n,t){for(var r=n,i=0,o=e.length;i<o;++i)r=t(r,e[i]);return r}function Iv(e,n,t){return zv(e,n,Br(t))}function bv(e,n,t,r,i){for(;;){var o=t;if(o===i)return!0;if(!r(e[o],n[o]))return!1;t=o+1|0}}function Rv(e,n,t){return bv(e,n,0,t,Gc(e.length,n.length))}function Dv(e,n,t){return Rv(e,n,Br(t))}function Lv(e){for(var n=e.length,t=new Array(n),r=new Array(n),i=0;i<n;++i){var o=e[i];t[i]=o[0],r[i]=o[1]}return[t,r]}function Ov(e,n,t,r,i){for(;;){var o=t,l=n;if(o>=r)return o;var u=e[o];if(!i(u,l))return o;t=o+1|0,n=u}}function Mv(e,n){var t=e.length;if(t===0||t===1)return t;var r=e[0],i=e[1];if(n(r,i))for(var o=i,l=2;;){var u=l,a=o;if(u>=t)return u;var s=e[u];if(!n(a,s))return u;l=u+1|0,o=s}else return n(i,r)?-Ov(e,i,2,t,n)|0:1}function Pe(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t}}function $e(e){return{v:e,h:1,l:void 0,r:void 0}}function Gi(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function sn(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;if(r>(i+2|0)){var o=e.l,l=e.r;return Gi(o,l)?Pe(o,e.v,Pe(l,n,t)):Pe(Pe(o,e.v,l.l),l.v,Pe(l.r,n,t))}if(i<=(r+2|0))return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t};var u=t.l,a=t.r;return Gi(a,u)?Pe(Pe(e,n,u),t.v,a):Pe(Pe(e,n,u.l),u.v,Pe(u.r,t.v,a))}function Wc(e,n){var t=e.l;return t!==void 0?sn(Wc(t,n),e.v,e.r):(n.contents=e.v,e.r)}function Hc(e,n){return e!==void 0?sn(Hc(e.l,n),e.v,e.r):$e(n)}function Qc(e,n){return e!==void 0?sn(e.l,e.v,Qc(e.r,n)):$e(n)}function Ut(e,n,t){if(e===void 0)return Hc(t,n);if(t===void 0)return Qc(e,n);var r=e.h,i=t.h;return r>(i+2|0)?sn(e.l,e.v,Ut(e.r,n,t)):i>(r+2|0)?sn(Ut(e,n,t.l),t.v,t.r):Pe(e,n,t)}function Il(e){var n=e.l,t=e.r,r=n!==void 0?Il(n):0,i=t!==void 0?Il(t):0;return(1+r|0)+i|0}function Xc(e,n,t){for(;;){var r=n,i=e,o=i.v,l=i.l,u=i.r,a=l!==void 0?Xc(l,r,t):r;t[a]=o;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function jv(e){if(e===void 0)return[];var n=Il(e),t=new Array(n);return Xc(e,0,t),t}function bl(e,n,t){switch(t){case 0:return;case 1:return $e(e[n]);case 2:var r=e[n],i=e[n-1|0];return{v:i,h:2,l:$e(r),r:void 0};case 3:var o=e[n],l=e[n-1|0],u=e[n-2|0];return{v:l,h:2,l:$e(o),r:$e(u)};default:var a=t/2|0,s=bl(e,n,a),v=e[n-a|0],p=bl(e,(n-a|0)-1|0,(t-a|0)-1|0);return Pe(s,v,p)}}function Rl(e,n,t){switch(t){case 0:return;case 1:return $e(e[n]);case 2:var r=e[n],i=e[n+1|0];return{v:i,h:2,l:$e(r),r:void 0};case 3:var o=e[n],l=e[n+1|0],u=e[n+2|0];return{v:l,h:2,l:$e(o),r:$e(u)};default:var a=t/2|0,s=Rl(e,n,a),v=e[n+a|0],p=Rl(e,(n+a|0)+1|0,(t-a|0)-1|0);return Pe(s,v,p)}}function qu(e){var n=e.l;e.l=n.r,n.r=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.l,u=l!==void 0?l.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function Bu(e){var n=e.r;e.r=n.l,n.l=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.r,u=l!==void 0?l.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function Vv(e){var n=e.l,t=Bu(n);return e.l=t,qu(e)}function $v(e){var n=e.r,t=qu(n);return e.r=t,Bu(e)}function ti(e){var n=e.l,t=n!==void 0?n.h:0,r=e.r,i=r!==void 0?r.h:0;return e.h=(t>i?t:i)+1|0,e}function Fv(e){var n=e.l,t=e.r,r=n!==void 0?n.h:0,i=t!==void 0?t.h:0;if(r>(2+i|0)){var o=n.l,l=n.r;return Gi(o,l)?ti(qu(e)):ti(Vv(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return Gi(a,u)?ti(Bu(e)):ti($v(e))}return e.h=(r>i?r:i)+1|0,e}function Gv(e,n,t,r){for(;;){var i=t,o=n;if(i>=r)return i;var l=e[i];if(o<=l)return i;t=i+1|0,n=l}}function Uv(e){var n=e.length;if(n===0||n===1)return n;var t=e[0],r=e[1];if(t<r)for(var i=r,o=2;;){var l=o,u=i;if(l>=n)return l;var a=e[l];if(u>=a)return l;o=l+1|0,i=a}else return t>r?-Gv(e,r,2,n)|0:1}function Dl(e,n){if(e===void 0)return $e(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;return n<t?e.l=Dl(r,n):e.r=Dl(i,n),Fv(e)}function qv(e){var n=e.length;if(n!==0){var t=Uv(e),r;t>=0?r=Rl(e,0,t):(t=-t|0,r=bl(e,t-1|0,t));for(var i=t;i<n;++i)r=Dl(r,e[i]);return r}}function Ui(e,n){if(e===void 0)return $e(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;if(n<t){var o=Ui(r,n);return o===r?e:sn(o,t,i)}var l=Ui(i,n);return l===i?e:sn(r,t,l)}function Ll(e,n){if(e===void 0)return e;var t=e.v,r=e.l,i=e.r;if(n===t){if(r===void 0)return i;if(i===void 0)return r;var o={contents:i.v},l=Wc(i,o);return sn(r,o.contents,l)}if(n<t){var u=Ll(r,n);return u===r?e:sn(u,t,i)}var a=Ll(i,n);return a===i?e:sn(r,t,a)}function Bv(e,n){for(var t=n.length,r=e,i=0;i<t;++i){var o=n[i];r=Ll(r,o)}return r}function qi(e,n){var t=e.v,r=e.l,i=e.r;if(n===t)return[r,i];if(n<t){if(r===void 0)return[void 0,e];var o=qi(r,n);return[o[0],Ut(o[1],t,i)]}if(i===void 0)return[e,void 0];var l=qi(i,n);return[Ut(r,t,l[0]),l[1]]}function Ln(e,n){if(e===void 0)return n;if(n===void 0)return e;var t=e.h,r=n.h;if(t>=r){if(r===1)return Ui(e,n.v);var i=e.v,o=e.l,l=e.r,u=qi(n,i);return Ut(Ln(o,u[0]),i,Ln(l,u[1]))}if(t===1)return Ui(n,e.v);var a=n.v,s=n.l,v=n.r,p=qi(e,a);return Ut(Ln(p[0],s),a,Ln(p[1],v))}var Kc=qv,Ol=jv;function Yc(e,n){return Uu(e,Ft(function(t){return t!==""},n))}function Zc(e,n){var t=n.slice(),r=t.shift();return qe(e,Bc(r===void 0?void 0:mt(r)),t)}function Jc(e,n){var t=n.length-1|0;return Gu(fn(function(r,i){return i===t?[r]:[r,e]},n),[])}function vr(e){return qe(Ln,void 0,e)}function Wv(e){return qe(function(n,t){return n+t|0},0,e)}function ed(e,n){if(e!==void 0)return pn(n,Wr(e))}function ri(e){return mt(e)}var ii,Bi=function(e,n){for(var t in e)n(t)};function mr(e,n){if(e===n)return 0;var t=typeof e,r=typeof n;switch(t){case"boolean":if(r==="boolean")return wv(e,n);break;case"function":if(r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"compare: functional value",Error:new Error};break;case"number":if(r==="number")return kv(e,n);break;case"string":return r==="string"?Fc(e,n):1;case"undefined":return-1}switch(r){case"string":return-1;case"undefined":return 1;default:if(t==="boolean")return 1;if(r==="boolean")return-1;if(t==="function")return 1;if(r==="function")return-1;if(t==="number")return n===null||n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(r==="number")return e===null||e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e===null)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(n===null)return e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e.BS_PRIVATE_NESTED_SOME_NONE!==void 0)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?Ja(e,n):-1;var i=e.TAG|0,o=n.TAG|0;if(i===248)return yv(e[1],n[1]);if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return i<o?-1:1;var l=e.length|0,u=n.length|0;if(l===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===l)return 0;var v=mr(e[s],n[s]);if(v!==0)return v;a=s+1|0}else return e instanceof Date&&n instanceof Date?e-n:Ja(e,n);else if(l<u)for(var p=0;;){var m=p;if(m===l)return-1;var h=mr(e[m],n[m]);if(h!==0)return h;p=m+1|0}else for(var y=0;;){var w=y;if(w===u)return 1;var z=mr(e[w],n[w]);if(z!==0)return z;y=w+1|0}}}function Ja(e,n){var t={contents:void 0},r={contents:void 0},i=function(p,m){var h=p[2],y=p[1];if(!Object.prototype.hasOwnProperty.call(y,m)||mr(p[0][m],y[m])>0){var w=h.contents;if(!(w!==void 0&&m>=w)){h.contents=m;return}}},o=[e,n,r],l=function(p){return i(o,p)},u=[n,e,t],a=function(p){return i(u,p)};Bi(e,l),Bi(n,a);var s=t.contents,v=r.contents;return s!==void 0?v!==void 0?Fc(s,v):-1:v!==void 0?1:0}function q(e,n){if(e===n)return!0;var t=typeof e;if(t==="string"||t==="number"||t==="boolean"||t==="undefined"||e===null)return!1;var r=typeof n;if(t==="function"||r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if(r==="number"||r==="undefined"||n===null)return!1;var i=e.TAG|0,o=n.TAG|0;if(i===248)return e[1]===n[1];if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return!1;var l=e.length|0,u=n.length|0;if(l===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===l)return!0;if(!q(e[s],n[s]))return!1;a=s+1|0}else{if(e instanceof Date&&n instanceof Date)return!(e>n||e<n);var v={contents:!0},p=function(h){if(!Object.prototype.hasOwnProperty.call(n,h)){v.contents=!1;return}},m=function(h){if(!Object.prototype.hasOwnProperty.call(e,h)||!q(n[h],e[h])){v.contents=!1;return}};return Bi(e,p),v.contents&&Bi(n,m),v.contents}else return!1}function nd(e,n){return typeof e=="number"&&typeof n=="number"?e!==n:!q(e,n)}function Hv(e,n){return typeof e=="number"&&typeof n=="number"?e>=n:mr(e,n)>=0}function oi(e){return{_0:e}}function jn(e){return"1'b"+$c(e._0)}function Qv(e){return $c(e._0)}function li(e){return{TAG:0,_0:e}}function Xv(e){return{TAG:1,_0:e}}function Kv(e){return{TAG:2,_0:e}}function Yv(e,n){return{TAG:3,_0:e,_1:0,_2:n}}function Zv(e,n){return{TAG:3,_0:e,_1:1,_2:n}}function Jv(e,n){return{TAG:3,_0:e,_1:2,_2:n}}function em(e,n){return{TAG:3,_0:e,_1:3,_2:n}}function nm(e,n){return{TAG:3,_0:e,_1:4,_2:n}}function tm(e,n){return{TAG:3,_0:e,_1:5,_2:n}}function rm(e,n,t){return{TAG:4,_0:e,_1:n,_2:t}}function im(e){return{_0:e}}function es(e){return{TAG:0,_0:e}}function om(e,n){return{TAG:1,_0:e,_1:n}}function lm(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function Ml(e){return typeof e=="number"?0:e._0}function jl(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:case 2:return e._1}}function um(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return Gc(e._0<e._1?e._0:e._1,e._2)}}function Vl(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return e._2}}function am(e,n){switch(n){case 0:return Ml(e);case 1:return jl(e);case 2:return um(e);case 3:return Vl(e)}}function yo(e,n){return am(e,n._0)}function sm(e,n){return e!==void 0?yo(e,n):0}function cm(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0>e._1?e._0:e._1;case 2:return Ev(e._0>e._1?e._0:e._1,e._2)}}function dm(e,n){return{TAG:2,_0:Ml(e)+Ml(n)|0,_1:jl(e)+jl(n)|0,_2:Vl(e)+Vl(n)|0}}function fm(e,n){switch(e){case 0:return n!==0?1:2;case 1:return n!==1?0:2;case 2:case 3:return n!==1?n!==0?2:0:1}}function pm(e){return{TAG:0,_0:e}}function vm(e){return{TAG:1,_0:e}}function mm(e){return{TAG:2,_0:e}}function hm(e,n){return{TAG:3,_0:e,_1:n}}function td(e){if(!q(e,[]))return Zc(function(n,t){return{TAG:3,_0:n,_1:t}},e)}function _m(e){return{TAG:0,_0:e}}function gm(e){return{TAG:1,_0:e}}function rd(e,n,t){for(;;){var r=e;if(typeof r=="number")return!1;switch(r.TAG|0){case 0:return r._0===n?t===0:!1;case 1:return r._0===n?t===1:!1;case 2:return r._0===n;case 3:if(rd(r._0,n,t))return!0;e=r._1;continue}}}function ym(e,n,t,r){if(e.TAG!==0)return!1;var i=e._0;if(typeof i=="number"||i.TAG===0)return!1;var o=fm(t._0,r._0);return o!==2?rd(i._0,n,o):!1}function wm(e){switch(e){case 0:return cv;case 1:return dv;case 2:return fv}}function id(e){return typeof e!="number"}function km(e){return typeof e=="number"?e===0:!0}var Em=[],Sm=[],xm=[],Tm=[],Nm=[],od={vars:Em,nets:Sm,conts:xm,procs:Tm,finals:Nm},Cm=0,Jo=0,ns=0,ts=1,rs=0;function ve(e){throw new Error(e)}var ld={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am=$t,Pm=Symbol.for("react.element"),zm=Symbol.for("react.fragment"),Im=Object.prototype.hasOwnProperty,bm=Am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rm={key:!0,ref:!0,__self:!0,__source:!0};function ud(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Im.call(n,r)&&!Rm.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Pm,type:e,key:o,ref:l,props:i,_owner:bm.current}}wo.Fragment=zm;wo.jsx=ud;wo.jsxs=ud;ld.exports=wo;var A=ld.exports;function ad(e){return fn(function(n,t){return A.jsx($t.Fragment,{children:n},String(t))},e)}function Dm(e){switch(e){case 0:return"&&";case 1:return"||";case 2:return"&";case 3:return"|";case 4:return"^";case 5:return"+"}}function ge(e){switch(e.TAG|0){case 0:return jn(e._0);case 1:return e._0;case 2:return"!("+ge(e._0)+")";case 3:return"("+ge(e._0)+") "+Dm(e._1)+" ("+ge(e._2)+")";case 4:return"("+ge(e._0)+") ? ("+ge(e._1)+") : ("+ge(e._2)+")"}}function Lm(e){return e?ge(e._0):"$time"}function Wu(e){if(typeof e=="number")return"";switch(e.TAG|0){case 0:return"#"+String(e._0);case 1:return"#("+String(e._0)+", "+String(e._1)+")";case 2:return"#("+String(e._0)+", "+String(e._1)+", "+String(e._2)+")"}}function is(e){return e!==void 0?Wu(e)+" ":""}function $l(e){if(typeof e=="number")return"0";switch(e.TAG|0){case 0:return"posedge "+e._0;case 1:return"negedge "+e._0;case 2:return e._0;case 3:return $l(e._0)+" or "+$l(e._1)}}function Om(e){return typeof e=="number"?"@(*)":e.TAG===0?"#"+String(e._0):"@("+$l(e._0)+")"}function os(e,n){return'"'+e+'"'+(n.length===0?"":`,
          `)+Uu("",Jc(", ",X(Lm,n)))}function sd(e){switch(e.TAG|0){case 0:return Om(e._0);case 1:return e._0?e._1+" <= "+is(e._2)+ge(e._3):e._1+" = "+is(e._2)+ge(e._3);case 2:return"$display("+os(e._0,e._1)+")";case 3:return"$monitor("+os(e._0,e._1)+")";case 4:return"$finish("+ge(e._0)+")";case 5:return"goto +"+String(e._0);case 6:return"goto +"+String(e._1)+" unless "+ge(e._0)}}function Mm(e,n,t,r){var i=sd(t),o=" "+(q(n,r)?i+";":i+`;
`);return q(e,r)?A.jsx("b",{children:o}):o}function jm(e,n){var t=n.length-1|0;return fn(function(r,i){return Mm(e,t,r,i)},n)}function Vm(e){return Yc(" ",["assign",Wu(e.delay),e.lhs,"=",ge(e.rhs)+";"])}function $m(e){return e!==void 0?" = "+ge(e):""}function Fm(e){return"logic "+e.target+$m(e.init)+";"}function Gm(e){switch(e){case 0:return"wire";case 1:return"wand";case 2:return"wor"}}function Um(e){return Yc(" ",[Gm(e.type_),Wu(e.delay),e.name+";"])}function Wi(e){if(typeof e=="number")return e!==0?"final":"initial";switch(e._0){case 0:return"always";case 1:return"always_comb";case 2:return"always_ff";case 3:return"always_latch"}}function ls(e,n,t){var r=n.proc_type===1?[]:[A.jsx("span",{children:"// Process "+String(t+1|0),className:"comment"})],i=n.proc_type===1||R(e,t).state===0?-1:R(e,t).pc;return ad(Gu([r,[`
`+Wi(n.proc_type),` begin
`],jm(i,n.stmts),[`
end`]],[]))}function qm(e){switch(e){case 0:return"finished";case 1:return"running";case 2:return"waiting"}}function Bm(e){return e.TAG===2?A.jsx("li",{children:"nba("+e._1+" <= "+jn(e._2)+")"},String(e._0)):ve("impossible")}function el(e,n){switch(n.TAG|0){case 0:var t=n._1;return"update("+R(e,t).lhs+"("+String(t)+")): "+jn(n._2);case 1:return"eval(cont: "+String(n._1+1|0)+", "+n._2+" = "+jn(n._3)+")";case 2:return"nba("+n._1+" <= "+jn(n._2)+")";case 3:return"eval(proc: "+String(n._1+1|0)+")";case 4:return A.jsxs("ol",{children:["NBA events:",hn(n._1,Bm)]})}}function nl(e){return q(e,[])?[]:[Uu(`
`,e)]}function Wm(e,n){return ad(Jc(`

`,Gu([nl(X(Um,e.nets)),nl(X(Fm,e.vars)),nl(X(Vm,e.conts)),fn(function(t,r){return ls(n,t,r)},e.procs),fn(function(t,r){return ls(n,t,r)},e.finals)],[])))}function Hm(e){return e!==void 0?A.jsx("code",{children:sd({TAG:3,_0:e[0],_1:e[1]})}):"No monitor"}function pe(e){return e!==void 0?e.h:0}function Me(e,n,t,r){var i=pe(e),o=pe(r);return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r}}function an(e,n){return{k:e,v:n,h:1,l:void 0,r:void 0}}function us(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function Qm(e,n){return e.v===n?e:{k:e.k,v:n,h:e.h,l:e.l,r:e.r}}function as(e,n,t,r){var i=e!==void 0?e.h:0,o=r!==void 0?r.h:0;if(i>(o+2|0)){var l=e.l,u=e.r;return pe(l)>=pe(u)?Me(l,e.k,e.v,Me(u,n,t,r)):Me(Me(l,e.k,e.v,u.l),u.k,u.v,Me(u.r,n,t,r))}if(o<=(i+2|0))return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r};var a=r.l,s=r.r;return pe(s)>=pe(a)?Me(Me(e,n,t,a),r.k,r.v,s):Me(Me(e,n,t,a.l),a.k,a.v,Me(a.r,r.k,r.v,s))}function Hi(e){var n=e.l,t=e.r,r=n!==void 0?Hi(n):0,i=t!==void 0?Hi(t):0;return(1+r|0)+i|0}function cd(e,n,t){for(;;){var r=n,i=e,o=i.k,l=i.l,u=i.r,a=l!==void 0?cd(l,r,t):r;t[a]=o;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function dd(e,n,t){for(;;){var r=n,i=e,o=i.l,l=i.k,u=i.r,a=o!==void 0?dd(o,r,t):r;t[a]=[l,i.v];var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function Xm(e){if(e===void 0)return[];var n=Hi(e),t=new Array(n);return dd(e,0,t),t}function Km(e){if(e===void 0)return[];var n=Hi(e),t=new Array(n);return cd(e,0,t),t}function Fl(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return an(r[0],r[1]);case 2:var i=e[n],o=e[n-1|0],l=o,u=i;return{k:l[0],v:l[1],h:2,l:an(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n-1|0],v=e[n-2|0],p=v,m=s,h=a;return{k:m[0],v:m[1],h:2,l:an(h[0],h[1]),r:an(p[0],p[1])};default:var y=t/2|0,w=Fl(e,n,y),z=e[n-y|0],d=Fl(e,(n-y|0)-1|0,(t-y|0)-1|0);return Me(w,z[0],z[1],d)}}function Gl(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return an(r[0],r[1]);case 2:var i=e[n],o=e[n+1|0],l=o,u=i;return{k:l[0],v:l[1],h:2,l:an(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n+1|0],v=e[n+2|0],p=v,m=s,h=a;return{k:m[0],v:m[1],h:2,l:an(h[0],h[1]),r:an(p[0],p[1])};default:var y=t/2|0,w=Gl(e,n,y),z=e[n+y|0],d=Gl(e,(n+y|0)+1|0,(t-y|0)-1|0);return Me(w,z[0],z[1],d)}}function Hu(e){var n=e.l;e.l=n.r,n.r=e;var t=pe(e.l),r=pe(e.r);e.h=(t>r?t:r)+1|0;var i=pe(n.l),o=e.h;return n.h=(i>o?i:o)+1|0,n}function Qu(e){var n=e.r;e.r=n.l,n.l=e;var t=pe(e.l),r=pe(e.r);e.h=(t>r?t:r)+1|0;var i=pe(n.r),o=e.h;return n.h=(i>o?i:o)+1|0,n}function Ym(e){var n=e.l,t=Qu(n);return e.l=t,Hu(e)}function Zm(e){var n=e.r,t=Hu(n);return e.r=t,Qu(e)}function ui(e){var n=pe(e.l),t=pe(e.r);return e.h=(n>t?n:t)+1|0,e}function Jm(e){var n=e.l,t=e.r,r=pe(n),i=pe(t);if(r>(2+i|0)){var o=n.l,l=n.r;return us(o,l)?ui(Hu(e)):ui(Ym(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return us(a,u)?ui(Qu(e)):ui(Zm(e))}return e.h=(r>i?r:i)+1|0,e}function eh(e,n){for(;;){var t=e;if(t===void 0)return;var r=t.k;if(n===r)return mt(t.v);e=n<r?t.l:t.r}}function nh(e,n){for(;;){var t=e;if(t!==void 0){var r=t.k;if(n===r)return t.v;e=n<r?t.l:t.r;continue}throw{RE_EXN_ID:"Not_found",Error:new Error}}}function th(e,n){for(;;){var t=e;if(t===void 0)return!1;var r=t.k;if(n===r)return!0;e=n<r?t.l:t.r}}function Ul(e,n,t){if(e===void 0)return an(n,t);var r=e.k;if(n===r)return e.k=n,e.v=t,e;var i=e.l,o=e.r;if(n<r){var l=Ul(i,n,t);e.l=l}else e.r=Ul(o,n,t);return Jm(e)}function rh(e){var n=e.length;if(n!==0){var t=Mv(e,function(l,u){return l[0]<u[0]}),r;t>=0?r=Gl(e,0,t):(t=-t|0,r=Fl(e,t-1|0,t));for(var i=t;i<n;++i){var o=e[i];r=Ul(r,o[0],o[1])}return r}}function Ze(e,n,t){if(e===void 0)return an(n,t);var r=e.k;if(n===r)return Qm(e,t);var i=e.v;return n<r?as(Ze(e.l,n,t),r,i,e.r):as(e.l,r,i,Ze(e.r,n,t))}var Xu=th,ih=Xm,fd=rh,oh=Km,ko=eh,ut=nh,ss={contents:0};function Vn(e){var n=ss.contents;return ss.contents=n+1|0,n}function lh(e){return e.TAG===2?[e._1,e._2]:ve("bug: expected EventNBA")}function tl(e){return String(e._0)}var uh=[],pd=[],vd=[],cs={active:uh,inactive:pd,nba:vd};function ah(e){if(typeof e=="number")return e!==0?"running-finals":"running";var n=e._0;return n!==void 0?"finished("+jn(n)+")":"finished"}function Ku(e){return typeof e=="number"}function md(e,n){var t=Nv(function(r){return r.name===n},e);return t!==void 0?t:ve("missing key")}function sh(e,n){return Cv(function(t){return t.lhs===e},n)}function ch(e,n,t){return Uc(e,n._0,t._0)}function Pn(e,n,t){return{_0:ch(e,n,t)}}function re(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return t._0;case 1:return ut(e,t._0);case 2:var r=re(e,t._0);return{_0:pv(r._0)};case 3:var i=t._1,o=t._0;if(i!==1)if(i!==0){var l=re(e,o),u=re(e,t._2);switch(i){case 0:case 1:return ve("impossible");case 2:return Pn(Qa,l,u);case 3:return Pn(Xa,l,u);case 4:return Pn(vv,l,u);case 5:return Pn(mv,l,u)}}else{var a=re(e,o);if(sv(a._0))return a;var s=re(e,t._2);return Pn(Qa,a,s)}else{var v=re(e,o);if(av(v._0))return v;var p=re(e,t._2);return Pn(Xa,v,p)}case 4:var m=t._2,h=t._1,y=re(e,t._0),w=y._0;if(w!==1){if(w!==0){var z=re(e,h),d=re(e,m);return Pn(hv,z,d)}n=h;continue}n=m;continue}}}function dh(e,n,t){return t?{TAG:0,_0:re(n,t._0)}:{TAG:1,_0:e}}function Ci(e,n){for(;;){var t=e;switch(t.TAG|0){case 0:return!1;case 1:return n===t._0;case 2:e=t._0;continue;case 3:if(Ci(t._0,n))return!0;e=t._2;continue;case 4:if(Ci(t._0,n)||Ci(t._1,n))return!0;e=t._2;continue}}}function hd(e,n,t){var r=md(e,n).delay;return dm(r,t)}function fh(e,n,t){for(var r=!1,i=0,o=-1,l=-1,u=function(v){return v.TAG===0?v._1===t:!1};!r&&i<e.length;){var a=R(e,i);if(a[0]>n)r=!0;else{var s=qc(u,a[1].active);s!==-1&&(r=!0,o=i,l=s)}i=i+1|0}if(o!==-1)return[o,l]}function ph(e,n){var t=Fi(0,n,e),r=Fi(n+1|0,e.length,e);return t.concat(r)}function vh(e,n){switch(n){case 0:return e.active;case 1:return e.inactive;case 2:return e.nba}}function rl(e,n,t){switch(n){case 0:return{active:t,inactive:e.inactive,nba:e.nba};case 1:return{active:e.active,inactive:t,nba:e.nba};case 2:return{active:e.active,inactive:e.inactive,nba:t}}}function hr(e,n,t,r){var i=qc(function(h){return Hv(h[0],t)},e);if(i===-1){var o=rl(cs,n,[r]);return e.concat([[t,o]])}if(q(R(e,i)[0],t)){var l=R(e,i)[1],u=vh(l,n).concat([r]),a=rl(l,n,u),s=e.slice();return Z(s,i,[t,a]),s}var v=Fi(0,i,e),p=rl(cs,n,[r]),m=Fi(i,e.length,e);return v.concat([[t,p]]).concat(m)}function zn(e,n){var t=n.pc+1|0;return t===e.stmts.length?{pc:0,state:id(e.proc_type)?1:0}:{pc:t,state:1}}function Ai(e,n,t,r,i){if(q(r,i)||e.status===1)return e;for(var o=e.queue.slice(),l=Ft(function(g){return n!==g[1]?Ci(g[0].rhs,t):!1},fn(function(g,I){return[g,I]},e.vmodule.conts)),u=X(function(g){var I=g[0];return[I.delay,[g[1],re(e.env,I.rhs)]]},l),a=function(g,I){var P=I[1],H=P[1],te=P[0],Ee=hd(e.vmodule.nets,R(e.vmodule.conts,te).lhs,I[0]),tn=yo(Ee,H),se=cm(Ee),Se=fh(g,e.time+se|0,te),he;if(Se!==void 0){var x=Se[0],C=R(g,x),b=C[1],O=b.active.slice();if(O.splice(Se[1],1),q(O,[]))he=ph(g,x);else{var V=g.slice();Z(V,x,[C[0],{active:O,inactive:b.inactive,nba:b.nba}]),he=V}}else he=g;return hr(he,0,e.time+tn|0,{TAG:0,_0:Vn(),_1:te,_2:H})},s=qe(a,o,u),v=Ft(function(g){var I=g[0];return I.state===2?ym(R(R(e.vmodule.procs,g[1]).stmts,I.pc),t,r,i):!1},fn(function(g,I){return[g,I]},e.proc_env)),p=e.proc_env.slice(),m=0,h=v.length;m<h;++m){var y=R(v,m),w=y[1],z=zn(R(e.vmodule.procs,w),y[0]);Z(p,w,z)}var d=X(function(g){return{TAG:3,_0:Vn(),_1:g[1]}},v),c=R(s,0),f=c[1],_=f.active.concat(d),S=f.inactive,N=f.nba,E={active:_,inactive:S,nba:N};return Z(s,0,[c[0],E]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:p,queue:s,monitor:e.monitor,output:e.output,time:e.time}}function mh(e){return e._0===0}function ds(e,n,t){var r=e.proc_env.slice(),i=R(r,n),o=R(e.vmodule.procs,n),l=i.pc+t|0,u=l===o.stmts.length?{pc:0,state:id(o.proc_type)?1:0}:{pc:l,state:i.state};return Z(r,n,u),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:r,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}function hh(e){return e.TAG===0?Qv(e._0):ve("expected value found time")}function _h(e){return e.TAG===0?ve("expected time found value"):String(e._0)}function gh(e,n){for(var t="",r=0,i=0;r<e.length;)if(e[r]==="%"){r=r+1|0;var o=e[r];o==="b"?(t=t.concat(hh(R(n,i))),i=i+1|0):o==="d"?(t=t.concat(_h(R(n,i))),i=i+1|0):ve("unsupported format"),r=r+1|0}else t=t.concat(e[r]),r=r+1|0;return t=t.concat(`
`),t}function yh(e,n){return e.TAG===0?n.TAG===0?q(e._0,n._0):ve("impossible"):n.TAG===0?ve("impossible"):!0}function _d(e,n,t,r){var i=e.env,o=e.time,l=X(function(v){return dh(o,i,v)},t),u=r!==void 0?Dv(l,r,yh):!1;if(u)return[l,e.output];var a=gh(n,l),s=e.output.concat(a);return[l,s]}function wh(e,n){var t=R(e.vmodule.procs,n),r=R(e.proc_env,n),i=R(t.stmts,r.pc);switch(i.TAG|0){case 0:var o=i._0;if(typeof o=="number")return ve("impossible, all stars should have been preprocessed away");if(o.TAG===0){var l=zn(t,r),u=l.pc,a={pc:u,state:2},s=e.proc_env.slice();Z(s,n,a);var v=hr(e.queue,0,e.time+o._0|0,{TAG:3,_0:Vn(),_1:n});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:s,queue:v,monitor:e.monitor,output:e.output,time:e.time}}var p=r.pc,m={pc:p,state:2},h=e.proc_env.slice();return Z(h,n,m),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:h,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};case 1:if(i._0){var y=re(e.env,i._3),w=zn(t,r),z=e.proc_env.slice();Z(z,n,w);var d=sm(i._2,y),c=hr(e.queue,2,e.time+d|0,{TAG:2,_0:Vn(),_1:i._1,_2:y});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:z,queue:c,monitor:e.monitor,output:e.output,time:e.time}}var f=i._2,_=i._1,S=re(e.env,i._3);if(f!==void 0){var N=r.pc,E={pc:N,state:2},g=e.proc_env.slice();Z(g,n,E);var I=yo(f,S),P=I===0?1:0,H=hr(e.queue,P,e.time+I|0,{TAG:1,_0:Vn(),_1:n,_2:_,_3:S});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:g,queue:H,monitor:e.monitor,output:e.output,time:e.time}}var te=ut(e.env,_),Ee=Ze(e.env,_,S),tn=zn(t,r),se=e.proc_env.slice();Z(se,n,tn);var Se=e.vmodule,he=e.status,x=e.cont_env,C=e.queue,b=e.monitor,O=e.output,V=e.time,Tn={vmodule:Se,status:he,env:Ee,cont_env:x,proc_env:se,queue:C,monitor:b,output:O,time:V};return Ai(Tn,-1,_,te,S);case 2:var He=_d(e,i._0,i._1,void 0),Nn=zn(t,r),Oe=e.proc_env.slice();return Z(Oe,n,Nn),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Oe,queue:e.queue,monitor:e.monitor,output:He[1],time:e.time};case 3:var Cn=[i._0,i._1,void 0],Mo=zn(t,r),Yr=e.proc_env.slice();return Z(Yr,n,Mo),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Yr,queue:e.queue,monitor:Cn,output:e.output,time:e.time};case 4:var jo=re(e.env,i._0),Vo=e.status,$o=e.vmodule,Fo={_0:jo},nr=e.env,Go=e.cont_env,Uo=e.proc_env,qo=e.queue,Zr=e.monitor,Bo=e.output,Wo=e.time,Jr={vmodule:$o,status:Fo,env:nr,cont_env:Go,proc_env:Uo,queue:qo,monitor:Zr,output:Bo,time:Wo};return Vo===0?gd(Jr):Jr;case 5:return ds(e,n,i._0);case 6:if(!mh(re(e.env,i._0)))return ds(e,n,i._1);var Ho=zn(t,r),ei=e.proc_env.slice();return Z(ei,n,Ho),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:ei,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}}function ql(e,n){for(var t=0,r=e;t<100&&Ku(r.status)&&R(r.proc_env,n).state===1;)t=t+1|0,r=wh(r,n);return t===100&&ve("time out!"),r}function kh(e,n){for(;;){var t=n,r=e;if(t>=r.vmodule.finals.length)return r;var i=R(r.vmodule.finals,t);Za(i,r.vmodule.procs);var o=Za({pc:0,state:1},r.proc_env),l=ql(r,o-1|0);if(l.vmodule.procs.pop(),l.proc_env.pop(),!Ku(l.status))return l;n=t+1|0,e=l}}function gd(e){var n=e.status,t=e.vmodule,r=e.env,i=e.cont_env,o=e.proc_env.slice(),l=e.queue,u=e.monitor,a=e.output,s=e.time,v={vmodule:t,status:1,env:r,cont_env:i,proc_env:o,queue:l,monitor:u,output:a,time:s},p=kh(v,0);return Ku(p.status)?{vmodule:p.vmodule,status:n,env:p.env,cont_env:p.cont_env,proc_env:p.proc_env,queue:p.queue,monitor:p.monitor,output:p.output,time:p.time}:p}function Eh(e,n){var t=R(e,n);if(t.TAG===4){var r=t._1;if(r.length!==1){var i=r.slice();i.shift(),e[n]={TAG:4,_0:t._0,_1:i};return}e.splice(n,1);return}e.splice(n,1)}function Sh(e){var n=e.proc_type,t;if(typeof n=="number")t=0;else{var r=n._0;t=r!==1&&r<3?0:1}return{pc:t,state:1}}function xh(e,n){return n!==void 0?re(e,n):{_0:2}}function fs(e){var n=X(function(i){return{TAG:3,_0:Vn(),_1:i[1]}},Ft(function(i){return km(i[0].proc_type)},fn(function(i,o){return[i,o]},e.procs))),t=fd(hn(e.nets,function(i){return[i.name,{_0:sh(i.name,e.conts)?2:3}]})),r=Iv(e.vars,t,function(i,o){return Ze(i,o.target,xh(i,o.init))});return{vmodule:e,status:0,env:r,cont_env:hn(e.conts,function(i){return{_0:2}}),proc_env:hn(e.procs,Sh),queue:[[0,{active:n,inactive:pd,nba:vd}]],monitor:void 0,output:"",time:0}}function Th(e,n,t){var r=re(e.env,n.rhs),i=hd(e.vmodule.nets,n.lhs,n.delay),o=yo(i,r);return[o,{TAG:0,_0:Vn(),_1:t,_2:r}]}function ps(e){var n=fn(function(r,i){return Th(e,r,i)},e.vmodule.conts),t=qe(function(r,i){return hr(r,0,i[0],i[1])},e.queue,n);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:t,monitor:e.monitor,output:e.output,time:e.time}}function vs(e,n){return e.status===0?e.time===n:!1}function Nh(e,n){var t=R(e.queue,0),r=t[1],i=r.active.slice(),o=R(i,n);Eh(i,n);var l=r.inactive,u=r.nba,a={active:i,inactive:l,nba:u},s=e.queue.slice();Z(s,0,[t[0],a]);var v=e.vmodule,p=e.status,m=e.env,h=e.cont_env,y=e.proc_env,w=e.monitor,z=e.output,d=e.time;switch(o.TAG|0){case 0:var c=o._1,f=h.slice();Z(f,c,o._2);var _=R(v.conts,c).lhs,S=md(v.nets,_),N=ut(m,_),E=wm(S.type_),g=Zc(function(et,Xo){return Pn(E,et,Xo)},X(function(et){return R(f,et[1])},Ft(function(et){return et[0].lhs===_},fn(function(et,Xo){return[et,Xo]},v.conts)))),I=Ze(m,_,g),P=v,H=p,te=y,Ee=w,tn=z,se=d,Se={vmodule:P,status:H,env:I,cont_env:f,proc_env:te,queue:s,monitor:Ee,output:tn,time:se};return Ai(Se,c,_,N,g);case 1:var he=o._3,x=o._2,C=o._1,b=ut(m,x),O=Ze(m,x,he),V=R(y,C),Tn=R(v.procs,C),He=zn(Tn,V),Nn=y.slice();Z(Nn,C,He);var Oe=v,Cn=p,Mo=h,Yr=w,jo=z,Vo=d,$o={vmodule:Oe,status:Cn,env:O,cont_env:Mo,proc_env:Nn,queue:s,monitor:Yr,output:jo,time:Vo},Fo=Ai($o,-1,x,b,he);return ql(Fo,C);case 2:return ve("impossible: EventNBA cannot be in active region");case 3:var nr=o._1,Go=R(y,nr),Uo=Go.pc,qo={pc:Uo,state:1},Zr=y.slice();Z(Zr,nr,qo);var Bo=v,Wo=p,Jr=m,Ho=h,ei=w,bp=z,Rp=d,Dp={vmodule:Bo,status:Wo,env:Jr,cont_env:Ho,proc_env:Zr,queue:s,monitor:ei,output:bp,time:Rp};return ql(Dp,nr);case 4:var Lp=o._1.slice(),Ga=Lp.shift(),Op=Bc(Ga===void 0?void 0:mt(Ga)),Ua=lh(Op),qa=Ua[1],Qo=Ua[0],Mp=ut(m,Qo),jp=Ze(m,Qo,qa),Vp=v,$p=p,Fp=h,Gp=y,Up=w,qp=z,Bp=d,Wp={vmodule:Vp,status:$p,env:jp,cont_env:Fp,proc_env:Gp,queue:s,monitor:Up,output:qp,time:Bp};return Ai(Wp,-1,Qo,Mp,qa)}}function ms(e){if(e.status!==0)return!1;var n=R(e.queue,0),t=n[1];return q(t.active,[])?nd(t.inactive,[]):!1}function Ch(e){var n=R(e.queue,0),t=n[1],r=t.inactive,i=[],o=t.nba,l={active:r,inactive:i,nba:o},u=e.queue.slice();return Z(u,0,[e.time,l]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:u,monitor:e.monitor,output:e.output,time:e.time}}function hs(e){if(e.status!==0)return!1;var n=R(e.queue,0),t=n[1];return q(t.active,[])&&q(t.inactive,[])?nd(t.nba,[]):!1}function Ah(e){var n=R(e.queue,0),t=n[1],r=Vn(),i=t.nba,o={TAG:4,_0:r,_1:i},l=t.active.concat([o]),u=t.inactive,a=[],s={active:l,inactive:u,nba:a},v=e.queue.slice();return Z(v,0,[e.time,s]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:v,monitor:e.monitor,output:e.output,time:e.time}}function _s(e){if(e.status!==0)return!1;var n=e.queue.length;if(n===0)return ve("impossible");var t=R(e.queue,0)[1];return q(t.active,[])&&q(t.inactive,[])?q(t.nba,[]):!1}function Ph(e){var n=e.monitor;if(n===void 0)return e;var t=n[1],r=n[0],i=_d(e,r,t,n[2]);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:[r,t,i[0]],output:i[1],time:e.time}}function zh(e){var n=Ph(e),t=n.queue.slice();if(t.shift(),t.length===0)return gd({vmodule:n.vmodule,status:{_0:void 0},env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:n.time});var r=R(t,0);return{vmodule:n.vmodule,status:n.status,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:r[0]}}function gs(e,n){return{TAG:0,_0:e,_1:n}}function ai(e,n,t,r){return{TAG:1,_0:e,_1:n,_2:t,_3:r}}function ys(e,n){return{TAG:2,_0:e,_1:n}}function ws(e,n){return{TAG:3,_0:e,_1:n}}function ks(e){return{TAG:4,_0:e}}function Ih(e,n){return{TAG:5,_0:e,_1:n}}function bh(e,n,t){return{TAG:6,_0:e,_1:n,_2:t}}function Rh(e){return{TAG:7,_0:e}}function Es(e,n){return[e,n]}function Dh(e){return{TAG:0,_0:e}}function Ss(e,n,t){return{TAG:1,_0:e,_1:n,_2:t}}function xs(e,n,t){return{TAG:3,_0:e,_1:n,_2:t}}function Ts(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function Lh(e,n){return{TAG:4,_0:e,_1:n}}function Oh(e){return{TAG:0,_0:e}}function Mh(e){return{TAG:1,_0:e}}function yd(e){switch(e){case"always":return{_0:0};case"always_comb":return{_0:1};case"always_ff":return{_0:2};case"always_latch":return{_0:3};case"final":return 1;case"initial":return 0;default:return ve("impossible proc type")}}const wd=ohm.grammar(String.raw`
  verilogGrammar {
    Module = "module" id ("(" ")")? ";" Top* "endmodule"

    ProcType = "initial" | "always_comb" | "always_latch" | "always_ff" | "always" | "final"

    Decl = id "=" Exp -- init
         | id -- no_init

    GateDecl = id? "(" ListOf<Exp, ","> ")"

    Top = type NonemptyListOf<Decl, ","> ";" -- decl

        | WireType NonemptyListOf<Decl, ","> ";" -- net
        | WireType Delay NonemptyListOf<Decl, ","> ";" -- net_delay

        | "assign" id "=" Exp ";" -- cont
        | "assign" Delay id "=" Exp ";" -- cont_delay

        | gate NonemptyListOf<GateDecl, ","> ";" -- gate
        | gate Delay NonemptyListOf<GateDecl, ","> ";" -- gate_delay

        | ProcType Stmt -- proc

    TimeCont = "#" number -- delay
             | "@" "(" Event_Exp ")" -- event
             | "@" "(" "*" ")" -- star
             | "@" "*" -- star_no_para

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
         | "$finish" "(" Exp ")" ";" -- finish_arg

         | TimeCont Stmt -- time_stmt
         | TimeCont ";" -- time

         | "begin" Stmt* "end" -- block

    Delay = "#" "(" number "," number "," number ")" -- three
          | "#" "(" number "," number ")" -- two
          | "#" "(" number ")" -- one
          | "#" number -- one_no_para

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
`),kd=wd.createSemantics();kd.addOperation("translate",{Module(e,n,t,r,i,o,l){return o.children.map(u=>u.translate())},Decl_no_init(e){return Es(e.translate(),ii)},Decl_init(e,n,t){return Es(e.translate(),ri(t.translate()))},GateDecl(e,n,t,r){return t.asIteration().children.map(i=>i.translate())},Top_decl(e,n,t){return Dh(n.asIteration().children.map(r=>r.translate()))},Top_net(e,n,t){return Ss(e.translate(),Jo,n.asIteration().children.map(r=>r.translate()))},Top_net_delay(e,n,t,r){return Ss(e.translate(),n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_cont(e,n,t,r,i){return xs(n.translate(),Jo,r.translate())},Top_cont_delay(e,n,t,r,i,o){return xs(t.translate(),n.translate(),i.translate())},Top_gate(e,n,t){return Ts(e.sourceString,Jo,n.asIteration().children.map(r=>r.translate()))},Top_gate_delay(e,n,t,r){return Ts(e.sourceString,n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_proc(e,n){return Lh(e.sourceString,n.translate())},WireType(e){return this.sourceString},TimeCont_delay(e,n){return _m(n.translate())},TimeCont_event(e,n,t,r){return gm(t.translate())},TimeCont_star(e,n,t,r){return rs},TimeCont_star_no_para(e,n){return rs},Stmt_blocking(e,n,t,r){return ai(ns,e.translate(),ii,t.translate())},Stmt_blocking_delay(e,n,t,r,i){return ai(ns,e.translate(),ri(t.translate()),r.translate())},Stmt_nonblocking(e,n,t,r){return ai(ts,e.translate(),ii,t.translate())},Stmt_nonblocking_delay(e,n,t,r,i){return ai(ts,e.translate(),ri(t.translate()),r.translate())},Stmt_if(e,n,t,r,i){return Ih(t.translate(),i.translate())},Stmt_if_else(e,n,t,r,i,o,l){return bh(t.translate(),i.translate(),l.translate())},Stmt_display(e,n,t,r,i,o,l){return ys(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_display_no_args(e,n,t,r,i){return ys(t.translate(),[])},Stmt_monitor(e,n,t,r,i,o,l){return ws(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_monitor_no_args(e,n,t,r,i){return ws(t.translate(),[])},Stmt_finish(e,n){return ks(li(oi(Yo)))},Stmt_finish_arg(e,n,t,r,i){return ks(t.translate())},Stmt_time_stmt(e,n){return gs(e.translate(),ri(n.translate()))},Stmt_time(e,n){return gs(e.translate(),ii)},Stmt_block(e,n,t){return Rh(n.children.map(r=>r.translate()))},Delay_one(e,n,t,r){return es(t.translate())},Delay_one_no_para(e,n){return es(n.translate())},Delay_two(e,n,t,r,i,o){return om(t.translate(),i.translate())},Delay_three(e,n,t,r,i,o,l,u){return lm(t.translate(),i.translate(),l.translate())},Event_Exp(e){return e.translate()},Event_Exp_or(e,n,t){return hm(e.translate(),t.translate())},Event_Exp1_id(e){return mm(e.translate())},Event_Exp1_posedge(e,n){return pm(n.translate())},Event_Exp1_negedge(e,n){return vm(n.translate())},Exp(e){return e.translate()},Exp_cond(e,n,t,r,i){return rm(e.translate(),t.translate(),i.translate())},Exp1(e){return e.translate()},Exp1_lor(e,n,t){return Zv(e.translate(),t.translate())},Exp2(e){return e.translate()},Exp2_land(e,n,t){return Yv(e.translate(),t.translate())},Exp3(e){return e.translate()},Exp3_bor(e,n,t){return em(e.translate(),t.translate())},Exp4(e){return e.translate()},Exp4_bxor(e,n,t){return nm(e.translate(),t.translate())},Exp5(e){return e.translate()},Exp5_band(e,n,t){return Jv(e.translate(),t.translate())},Exp6(e){return e.translate()},Exp6_add(e,n,t){return tm(e.translate(),t.translate())},Exp7(e){return e.translate()},Exp7_not(e,n){return Kv(n.translate())},Exp8_id(e){return Xv(e.translate())},Exp8_bit(e){return li(e.translate())},Exp8_zero(e){return li(oi(Ka))},Exp8_one(e){return li(oi(Yo))},Exp8_paren(e,n,t){return n.translate()},ExpOrTime_exp(e){return im(e.translate())},ExpOrTime_time(e){return Cm},number(e){return parseInt(this.sourceString,10)},bit(e,n){var t;switch(n.sourceString.toLowerCase()){case"1":t=Yo;break;case"0":t=Ka;break;case"x":t=_v;break;case"z":t=gv;break;default:throw"Impossible!"}return oi(t)},string(e,n,t){return n.sourceString},id(e,n){return this.sourceString}});function jh(e){try{const n=wd.match(e);return Oh(kd(n).translate())}catch(n){if(n instanceof TypeError)return Mh(n.message);throw n}}function Vh(e){if(e!==void 0)return Wr(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}function $h(e,n){if(e!==void 0)return mt(n(Wr(e)))}function Fh(e,n){return $h(e,Kn(n))}function Ed(e){return e!==void 0}var il={contents:0};function Sd(e){return il.contents=il.contents+1|0,e+("/"+il.contents)}function Gh(e){return e==null?!1:typeof e.RE_EXN_ID=="string"}var Zt=Sd("Compiler.CompileError");function Yu(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:Zt,_1:"Expected variable, found: "+ge(e),Error:new Error}}function Uh(e){return{target:e[0],init:e[1]}}function qh(e,n,t){var r=t[0],i;switch(e){case"triand":case"wand":i=1;break;case"tri":case"wire":i=0;break;case"trior":case"wor":i=2;break;default:i=ve("impossible net type")}var o=Fh(t[1],function(l){return{lhs:r,delay:0,rhs:l}});return[{type_:i,name:r,delay:n},o]}function Bh(e,n){if(n.length===2){var t=Yu(R(n,0)),r=R(n,1);return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:Zt,_1:"Expected two arguments to not gate",Error:new Error}}function Wh(e){switch(e){case"and":return 2;case"or":return 3;case"xor":return 4;default:return ve("impossible gate")}}function Hh(e,n,t){if(t.length===3){var r=Yu(R(t,0)),i=R(t,1),o=R(t,2),l={TAG:3,_0:i,_1:e,_2:o};return{lhs:r,delay:n,rhs:l}}throw{RE_EXN_ID:Zt,_1:"Expected three arguments to gate",Error:new Error}}function Qh(e,n){if(n.length===3){var t=Yu(R(n,0)),r={TAG:2,_0:{TAG:3,_0:R(n,1),_1:3,_2:R(n,2)}};return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:Zt,_1:"Expected three arguments to gate",Error:new Error}}function yt(e){switch(e.TAG|0){case 0:var n=e._1,t=e._0;return n!==void 0?[{TAG:0,_0:t}].concat(yt(n)):[{TAG:0,_0:t}];case 1:return[{TAG:1,_0:e._0,_1:e._1,_2:e._2,_3:e._3}];case 2:return[{TAG:2,_0:e._0,_1:e._1}];case 3:return[{TAG:3,_0:e._0,_1:e._1}];case 4:return[{TAG:4,_0:e._0}];case 5:var r=yt(e._1);return[{TAG:6,_0:e._0,_1:r.length+1|0}].concat(r);case 6:var i=yt(e._1),o=yt(e._2);return[{TAG:6,_0:e._0,_1:i.length+2|0}].concat(i,[{TAG:5,_0:o.length+1|0}],o);case 7:return qe(function(l,u){return l.concat(yt(u))},[],e._0)}}function Xh(e,n){switch(n.TAG|0){case 0:var t=X(Uh,n._0);return{vars:e.vars.concat(t),nets:e.nets,conts:e.conts,procs:e.procs,finals:e.finals};case 1:var r=n._1,i=n._0,o=Lv(X(function(S){return qh(i,r,S)},n._2)),l=X(Vh,Ft(Ed,o[1]));return{vars:e.vars,nets:e.nets.concat(o[0]),conts:e.conts.concat(l),procs:e.procs,finals:e.finals};case 2:var u=n._2,a=n._1,s=n._0;if(s==="not"){var v=X(function(S){return Bh(a,S)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(v),procs:e.procs,finals:e.finals}}if(s==="and"||s==="or"){var p=Wh(s),m=X(function(S){return Hh(p,a,S)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(m),procs:e.procs,finals:e.finals}}if(s==="nor"){var h=X(function(S){return Qh(a,S)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(h),procs:e.procs,finals:e.finals}}throw{RE_EXN_ID:Zt,_1:"Unsupported gate: "+s,Error:new Error};case 3:var y=n._0,w=n._1,z=n._2,d={lhs:y,delay:w,rhs:z};return{vars:e.vars,nets:e.nets,conts:e.conts.concat([d]),procs:e.procs,finals:e.finals};case 4:var c=yd(n._0),f=yt(n._1),_={proc_type:c,stmts:f};return c===1?{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs,finals:e.finals.concat([_])}:{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs.concat([_]),finals:e.finals}}}function Kh(e){return qe(Xh,od,e)}var ol=fd([["empty.sv",`module empty;

// Put Verilog code here!

// See the modules in 00 (in the top-left menu) for some introductory notes!

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
`],["init/net_init8.sv",`module net_init8;

// Alternative short-hand notation for a wire declaration
// plus a continuous assignment (see normalised Verilog module):
wire #5 a = 0;

// We can still add other continuous assignments 
assign a = 1'bz;

initial $monitor("%b at time = %d", a, $time);

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
`],["seq/nonblocking2.sv",`module nonblocking2;

logic a;

// a must be 0 at end of time slot

initial begin
 a <= 1'b0;
 a = 1'b1;
end

endmodule
`],["seq/nonblocking3.sv",`module nonblocking3;

logic a;

// a must be 0 at end of time slot

initial begin
 a = 1'b0;
 a <= a;
end

endmodule
`],["seq/double_wait_nonblocking.sv",`module double_wait_nonblocking;

// Variant of nonblocking_ndet;
// see also double_wait_blocking

logic a;

initial begin
 a <= 0;
 a <= 1;

 a <= 0;
 a <= 1;
end

always @(a) @(a) $display("RUN");

endmodule
`],["seq/seq_and_comb2.sv",`module seq_and_comb2;

// See seq_and_comb1

logic clk = 0;

logic a, d, q;

initial begin
 #1 clk = 1;
 d = 1;
end

// When combinational net is "after"
// register instead of "before" as in
// seq_and_comb1 there is no longer
// any race:

always @(posedge clk) q <= d;
always_comb a = !q;

endmodule
`],["seq/seq_cycle.sv",`module seq_cycle;

logic clk = 0;

logic q0 = 0, q1 = 1;

always #1 clk = !clk;

always @(posedge clk) q0 <= q1;
always @(posedge clk) q1 <= q0;

endmodule
`],["seq/nonblocking_ndet.sv",`module nonblocking_ndet;

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
`],["seq/seq_and_comb1.sv",`module seq_and_comb1;

// Inspired by "Relating Event and Trace Semantics
// of Hardware Description Languages" by Michael
// Gordon, see Sec 7.3 in the paper

logic clk = 0;

logic a, d, q1, q2;

initial begin
 #1 clk = 1;
 d = 1;
end

always @(posedge clk) q1 <= !d;

// When the write clk and d happen during the same
// simulation cycle, we can end up with q1 != q2.
// We can interpret this as the two events are
// unordered (since they occur in the same
// simulation cycle).
always_comb a = !d;
always @(posedge clk) q2 <= a;

endmodule
`],["seq/nonblocking4.sv",`module nonblocking4;

logic a;

// a must be x at end of time slot

initial begin
 a <= a;
 a = 1'b0;
end

endmodule
`],["seq/double_wait_blocking.sv",`module double_wait_blocking;

// Variant of nonblocking_ndet;
// see also double_wait_nonblocking

logic a;

initial begin
 a = 0;
 a = 1;

 a = 0;
 a = 1;
end

always @(a) @(a) $display("RUN");

endmodule
`],["seq/nonblocking1.sv",`module nonblocking1;

logic a;

// a must be 1 at end of time slot

initial begin
 a <= 1'b0;
 a <= 1'b1;
end

endmodule
`],["invalid/cont_var2.sv",`module cont_var2;

logic a;

always @(*) a = 0;
   
// Mixed types of assignments not allowed
assign a = 1;

endmodule
`],["invalid/cont_var3.sv",`module cont_var3;

// Alternative order, see cont_var2

logic a;
 
assign a = 1;

always @(*) a = 0;

endmodule
`],["invalid/new_style_always2.sv",`module new_style_always2;

// Alternative order, see new_style_always1

logic a;

always_comb a = 1;

always @(*) a = 0;

endmodule
`],["invalid/always_comb_delay1.sv",`module always_comb_delay1;

logic a;

always_comb #1 a = 1;

endmodule
`],["invalid/var_net.sv",`module var_net;

logic a;

wire a;
   
endmodule
`],["invalid/new_style_always3.sv",`module new_style_always3;

// Not invalid. Related to new_style_always1 and new_style_always2,
// just to check that multiple old-style always can write to the same
// variable.

logic a;

always @(*) a = 0;

always @(*) a = 1;

endmodule
`],["invalid/always_comb_delay3.sv",`module always_comb_delay3;

logic a;

always_comb @(posedge a) a = 1;

endmodule
`],["invalid/new_style_always1.sv",`module new_style_always1;

logic a;

always @(*) a = 0;
   
// Not allowed to write to same var from multiple blocks
// when using new-style block
always_comb a = 1;

endmodule
`],["invalid/always_net.sv",`module always_net;

wire a;

// Not allowed to write to wire in block
always @(*) a = 0;

endmodule
`],["invalid/always_comb_delay2.sv",`module always_comb_delay2;

logic a;

always_comb a = #1 1;

endmodule
`],["invalid/var_var.sv",`module var_var;

logic a;

logic a;
   
endmodule
`],["invalid/cont_var4.sv",`module cont_var4;

logic a;

assign a = 0;

assign a = 1;

endmodule
`],["invalid/final_delay.sv",`module final_delay;

logic a;

final #1 a = 1;

endmodule
`],["invalid/cont_var1.sv",`module cont_var1;

logic a = 0;

// Not allowed to write to variable when variable initialised
assign a = 1;

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
`],["comb/comb_cycle.sv",`module comb_cycle;

// Example of combinational circuit with a loop from
// http://paradise.caltech.edu/~riedel/research/phd.html.

// Specifically, this is the circuit from Fig. 1.5
// (p. 4), described as "[a]lthough useless, [the]
// circuit is cyclic and combinational."

// As described on p. 4 of the thesis, this circuit
// implements the (pure) function f(x) = x.

logic in, intermediate, f;

always_comb intermediate = in && f;

always_comb f = in || intermediate;

initial begin
 #1 in = 0;
 #1 in = 1;
 #1 in = 0;
end

initial $monitor("f(%b) = %b", in, f);

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
`],["end/final_nonblocking.sv",`module final_nonblocking;

logic a;

// Has no effect
final a <= 0;

endmodule
`],["end/final2.sv",`module final2;

logic a;

initial $finish;

final a = 0;

endmodule
`],["end/final_order.sv",`module final_order;

logic a;

// Simulators should define a deterministic order final blocks
// should be executed in; for VV this is simply source order.
// Therefore a will always be 1 at the end of simulation.

final a = 0;

final a = 1;

endmodule
`],["end/finish_finish.sv",`module finish_finish;

initial $finish(0);

final $finish(1);

endmodule
`],["end/icarus.sv",`module icarus;

// Relates to a potential problem in Icarus, see
// https://github.com/steveicarus/iverilog/issues/962

logic x = 1;

initial begin
 $monitor("monitor: ", x);
 $finish(x);
end

initial x = 0;

// still happens with the following variants:
//
// initial x <= 0;
// initial #0 x = 0;
// initial x = #0 0;
//
// but not with longer delays:
//
// initial #1 x = 0;
// initial x = #1 0;

initial $display("display: ", x);

endmodule
`],["end/final_monitor.sv",`module final_monitor;

logic a;

initial $monitor("%b", a);

// Most simulators seems to run monitors before
// executing final blocks, which makes sense since
// monitors are supposed to run at end of time slots.
// (I.e., x is printed.)
final a = 0;

endmodule
`],["end/final_cont.sv",`module final_cont;

logic a;

// Continuous processes not run/updated during final stage
wire b = ~a;

final a = 0;

final $display("%b", b);

endmodule
`],["end/final1.sv",`module final1;

logic a;

// Final blocks are run after simulation has ended

final a = 0;

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

// Example suggested by Niklas Sörensson during FMCAD'22

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
`],["cont/cont_var2.sv",`module cont_var2;

logic a;

assign #1 a = 1;

initial $monitor("%b", a);

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
`],["cont/cont_var1.sv",`module cont_var1;

logic a;

// Can write to variables with continuous assignments;
// gets normalised to (essentially) an always_comb block
assign a = 1;

initial $monitor("%b", a);

endmodule
`]]),ne=Sd("Elaborator.ElaboratorError");function Yh(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:ne,_1:"Expected data reference, found: "+ge(e),Error:new Error}}var Zh=[],Jh={env:void 0,out:Zh};function Rt(e,n){return{env:e.env,out:e.out.concat([n])}}function xd(e,n){if(!Xu(e.env,n))throw{RE_EXN_ID:ne,_1:"Undefined reference: "+n,Error:new Error}}function e0(e,n){var t=ko(e.env,n);if(t!==void 0){if(t)return;throw{RE_EXN_ID:ne,_1:"Undefined var: "+n,Error:new Error}}throw{RE_EXN_ID:ne,_1:"Undefined var: "+n,Error:new Error}}function n0(e,n){var t=ko(e.env,n);if(t!==void 0){if(!t)return;throw{RE_EXN_ID:ne,_1:"Undefined net: "+n,Error:new Error}}throw{RE_EXN_ID:ne,_1:"Undefined net: "+n,Error:new Error}}function Fe(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return;case 1:return xd(e,t._0);case 2:n=t._0;continue;case 3:return Gt(function(r){return Fe(e,r)},[t._0,t._2]);case 4:return Gt(function(r){return Fe(e,r)},[t._0,t._1,t._2])}}}function Td(e,n){if(typeof n!="number")return n.TAG===3?Gt(function(t){return Td(e,t)},[n._0,n._1]):xd(e,n._0)}function t0(e,n){if(!(typeof n=="number"||n.TAG===0))return Td(e,n._0)}function r0(e,n){if(n)return Fe(e,n._0)}function i0(e,n){var t=n[1],r=n[0];if(Xu(e.env,r))throw{RE_EXN_ID:ne,_1:"Name collision: "+r,Error:new Error};ed(t,function(o){return Fe(e,o)});var i=Ze(e.env,r,{_0:Ed(t)?1:0});return{env:i,out:e.out}}function o0(e,n){var t=n[0];if(Xu(e.env,t))throw{RE_EXN_ID:ne,_1:"Name collision: "+t,Error:new Error};ed(n[1],function(i){return Fe(e,i)});var r=Ze(e.env,t,0);return{env:r,out:e.out}}function l0(e,n,t){var r=ko(e,t);if(r!==void 0&&r){var i=r._0;if(i!==2){if(i>=3)throw{RE_EXN_ID:ne,_1:"Cannot write to claimed variable: "+t,Error:new Error};return}if(n)throw{RE_EXN_ID:ne,_1:"Cannot write to claimed variable: "+t,Error:new Error}}}function Bl(e,n,t,r){for(;;){var i=r;switch(i.TAG|0){case 0:var o=i._1;if(t0(t,i._0),o===void 0)return t;r=o;continue;case 1:var l=i._1;l0(e,n,l),e0(t,l),Fe(t,i._3);var u=Ze(t.env,l,{_0:n?3:2});return{env:u,out:t.out};case 2:case 3:break;case 4:return Fe(t,i._0),t;case 5:Fe(t,i._0),r=i._1;continue;case 6:return Fe(t,i._0),qe(function(a,s){return Bl(e,n,a,s)},t,[i._1,i._2]);case 7:return qe(function(a,s){return Bl(e,n,a,s)},t,i._0)}return Gt(function(a){return r0(t,a)},i._1),t}}function u0(e,n){if(!(n.length<=0)){var t=Yh(R(n,0));n0(e,t),Gt(function(r){return Fe(e,r)},n)}}function ln(e){for(;;){var n=e;switch(n.TAG|0){case 0:return;case 1:return Kc([n._0]);case 2:e=n._0;continue;case 3:return Ln(ln(n._0),ln(n._2));case 4:return vr([ln(n._0),ln(n._1),ln(n._2)])}}}function a0(e){if(e)return ln(e._0)}function wt(e){for(;;){var n=e;switch(n.TAG|0){case 0:var t=n._1;if(t===void 0)return;e=t;continue;case 1:return ln(n._3);case 2:case 3:return vr(X(a0,n._1));case 4:return ln(n._0);case 5:return Ln(ln(n._0),wt(n._1));case 6:return vr([ln(n._0),wt(n._1),wt(n._2)]);case 7:return vr(X(wt,n._0))}}}function Pi(e){for(;;){var n=e;switch(n.TAG|0){case 1:return Kc([n._1]);case 5:e=n._1;continue;case 6:return Ln(Pi(n._1),Pi(n._2));case 7:return vr(X(Pi,n._0));default:return}}}function Nd(e){var n=wt(e),t=Pi(e),r=td(X(function(o){return{TAG:2,_0:o}},Ol(Bv(n,Ol(t))))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:e}}function rt(e){switch(e.TAG|0){case 0:if(typeof e._0!="number")return e;var n=e._1;if(n===void 0)return{TAG:0,_0:{TAG:1,_0:0},_1:void 0};var t=rt(n),r=td(X(function(o){return{TAG:2,_0:o}},Ol(wt(t)))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:t};case 5:return{TAG:5,_0:e._0,_1:rt(e._1)};case 6:return{TAG:6,_0:e._0,_1:rt(e._1),_2:rt(e._2)};case 7:return{TAG:7,_0:X(rt,e._0)};default:return e}}function _r(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:var r=t._0;if(typeof r=="number"||r.TAG!==0)return 1;throw{RE_EXN_ID:ne,_1:"Time control not allowed inside "+Wi(e),Error:new Error};case 1:if(t._2===void 0)return 0;throw{RE_EXN_ID:ne,_1:"Delayed assignments not allowed inside "+Wi(e),Error:new Error};case 5:n=t._1;continue;case 6:return _r(e,t._1)+_r(e,t._2)|0;case 7:return Wv(X(function(i){return _r(e,i)},t._0));default:return 0}}}function s0(e,n){if(q(e,{_0:1})||q(e,{_0:3})||e===1){if(_r(e,n)===0)return;throw{RE_EXN_ID:ne,_1:"Event control not allowed inside "+Wi(e),Error:new Error}}if(q(e,{_0:2})&&_r(e,n)!==1)throw{RE_EXN_ID:ne,_1:"Must be one and one only event control inside always_ff",Error:new Error}}function c0(e,n){if(typeof e=="number")return rt(n);var t=e._0;return t!==1&&t<3?rt(n):Nd(n)}function d0(e){if(typeof e!="number")switch(e.TAG|0){case 0:var n=e._0;return n===0?void 0:{TAG:0,_0:n};case 1:case 2:throw{RE_EXN_ID:ne,_1:"Delay type not supported in continuously assignments to variables yet",Error:new Error}}}function f0(e,n){var t=n[2],r=n[1],i=n[0],o=ko(e.env,i);if(o!==void 0)if(o)switch(o._0){case 0:Fe(e,t);var l=d0(r),u=Nd({TAG:1,_0:0,_1:i,_2:l,_3:t}),a={TAG:4,_0:"always_comb",_1:u},s=Ze(e.env,i,{_0:3});return Rt({env:s,out:e.out},a);case 1:throw{RE_EXN_ID:ne,_1:"Not allowed to write continuously to variable with initialisation: "+i,Error:new Error};case 2:case 3:throw{RE_EXN_ID:ne,_1:"Not allowed to write continuously to already claimed variable: "+i,Error:new Error}}else return Fe(e,t),Rt(e,{TAG:3,_0:i,_1:r,_2:t});else throw{RE_EXN_ID:ne,_1:"Undefined reference: "+i,Error:new Error}}function p0(e){return q(e,{_0:1})||q(e,{_0:3})?!0:q(e,{_0:2})}function v0(e,n){var t=n[1],r=n[0],i=yd(r);s0(i,t);var o=Bl(e.env,p0(i),e,t),l=c0(i,t);return Rt(o,{TAG:4,_0:r,_1:l})}function m0(e,n){switch(n.TAG|0){case 0:var t=qe(i0,e,n._0);return Rt(t,n);case 1:var r=qe(o0,e,n._2);return Rt(r,n);case 2:return Gt(function(i){return u0(e,i)},n._2),Rt(e,n);case 3:return f0(e,[n._0,n._1,n._2]);case 4:return v0(e,[n._0,n._1])}}function h0(e){return qe(m0,Jh,e).out}function _0(e){return Gh(e)?e:{RE_EXN_ID:"JsError",_1:e}}function g0(e){var n=fs(od),t=ps(n),r=$t.useState(function(){return t}),i=r[1],o=r[0],l=function(E){pn(i,function(g){return ms(g)?Ch(g):g})},u=function(E){pn(i,function(g){return hs(g)?Ah(g):g})},a=function(E){pn(i,function(g){return _s(g)?zh(g):g})},s=$t.useState(function(){return ut(ol,"empty.sv")}),v=s[1],p=s[0],m=function(E){var g=jh(p);if(g.TAG===0){var I;try{I=fs(Kh(h0(g._0)))}catch(te){var P=_0(te);if(P.RE_EXN_ID===ne){window.alert("Elaboration failed: "+P._1);return}if(P.RE_EXN_ID===Zt){window.alert("Compilation failed: "+P._1);return}throw P}var H=ps(I);return pn(i,function(te){return H})}window.alert("Could not parse Verilog code: "+g._0)},h=function(E){pn(v,function(g){return E.target.value}),E.preventDefault()},y=function(E){var g=E.target.value;pn(v,function(I){return ut(ol,g)}),E.preventDefault()},w="Simulation time: "+String(o.time)+" ("+ah(o.status)+")",z=hn(ih(o.env),function(E){var g=E[0];return A.jsx("li",{children:g+": "+jn(E[1])},g)}),d=Zo(o.cont_env,function(E,g){return A.jsx("li",{children:R(o.vmodule.conts,E).lhs+"("+String(E)+"): "+jn(g)},String(E))}),c=Zo(o.proc_env,function(E,g){return A.jsx("li",{children:"state = "+qm(g.state)+", pc = "+String(g.pc)},String(E))}),f=hn(o.queue,function(E){var g=E[1],I=E[0],P=Zo(g.active,function(se,Se){var he=vs(o,I);return A.jsx("li",{children:el(o.vmodule.conts,Se),className:he?"active":"",onClick:function(x){return pn(i,function(C){return vs(C,I)?Nh(C,se):C})}},tl(Se))}),H=hn(g.inactive,function(se){return A.jsx("li",{children:el(o.vmodule.conts,se)},tl(se))}),te=hn(g.nba,function(se){return A.jsx("li",{children:el(o.vmodule.conts,se)},tl(se))}),Ee=ms(o),tn=hs(o);return A.jsxs("li",{children:[A.jsx("b",{children:"Time: "+String(I)}),A.jsxs("ul",{children:[A.jsxs("li",{children:["Active:",A.jsx("ul",{children:P})]}),A.jsxs("li",{children:["Inactive:",A.jsx("ul",{children:H})],className:Ee?"active":"",onClick:l}),A.jsxs("li",{children:["NBA:",A.jsx("ul",{children:te})],className:tn?"active":"",onClick:u})]})]},"Time"+String(I))}),_=Hm(o.monitor),S=hn(oh(ol),function(E){return A.jsx("option",{children:E},E)}),N=_s(o);return A.jsx("table",{children:A.jsx("tbody",{children:A.jsxs("tr",{children:[A.jsxs("td",{children:[A.jsx("div",{children:A.jsx("select",{children:S,defaultValue:"empty.sv",onChange:y})}),A.jsx("div",{children:A.jsx("textarea",{cols:60,rows:20,value:p,onChange:h})}),A.jsx("div",{children:A.jsx("button",{children:"Parse",onClick:m})})]}),A.jsxs("td",{children:[A.jsx("p",{children:"Normalised Verilog module:",id:"code-render-title"}),A.jsx("div",{children:Wm(o.vmodule,o.proc_env),id:"code-render"})]}),A.jsxs("td",{children:[A.jsx("p",{children:w,className:N?"active":"",id:"simulation-time",onClick:a}),A.jsx("p",{children:"Environment:"}),A.jsx("ul",{children:z}),A.jsx("p",{children:"Drivers (continuous assignments):"}),A.jsx("ul",{children:d}),A.jsx("p",{children:"Processes:"}),A.jsx("ol",{children:c}),A.jsx("p",{children:"Events:",className:""}),A.jsx("ul",{children:f}),A.jsx("p",{children:"Monitor:"}),A.jsx("p",{children:_})]}),A.jsxs("td",{children:[A.jsx("p",{children:"Output:",id:"output"}),A.jsx("pre",{children:o.output})]})]})}),id:"main-table"})}var y0=g0;function w0(e){if(e!==void 0)return Wr(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}var Cd={exports:{}},De={},Ad={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,C){var b=x.length;x.push(C);e:for(;0<b;){var O=b-1>>>1,V=x[O];if(0<i(V,C))x[O]=C,x[b]=V,b=O;else break e}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var C=x[0],b=x.pop();if(b!==C){x[0]=b;e:for(var O=0,V=x.length,Tn=V>>>1;O<Tn;){var He=2*(O+1)-1,Nn=x[He],Oe=He+1,Cn=x[Oe];if(0>i(Nn,b))Oe<V&&0>i(Cn,Nn)?(x[O]=Cn,x[Oe]=b,O=Oe):(x[O]=Nn,x[He]=b,O=He);else if(Oe<V&&0>i(Cn,b))x[O]=Cn,x[Oe]=b,O=Oe;else break e}}return C}function i(x,C){var b=x.sortIndex-C.sortIndex;return b!==0?b:x.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var a=[],s=[],v=1,p=null,m=3,h=!1,y=!1,w=!1,z=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var C=t(s);C!==null;){if(C.callback===null)r(s);else if(C.startTime<=x)r(s),C.sortIndex=C.expirationTime,n(a,C);else break;C=t(s)}}function _(x){if(w=!1,f(x),!y)if(t(a)!==null)y=!0,Se(S);else{var C=t(s);C!==null&&he(_,C.startTime-x)}}function S(x,C){y=!1,w&&(w=!1,d(g),g=-1),h=!0;var b=m;try{for(f(C),p=t(a);p!==null&&(!(p.expirationTime>C)||x&&!H());){var O=p.callback;if(typeof O=="function"){p.callback=null,m=p.priorityLevel;var V=O(p.expirationTime<=C);C=e.unstable_now(),typeof V=="function"?p.callback=V:p===t(a)&&r(a),f(C)}else r(a);p=t(a)}if(p!==null)var Tn=!0;else{var He=t(s);He!==null&&he(_,He.startTime-C),Tn=!1}return Tn}finally{p=null,m=b,h=!1}}var N=!1,E=null,g=-1,I=5,P=-1;function H(){return!(e.unstable_now()-P<I)}function te(){if(E!==null){var x=e.unstable_now();P=x;var C=!0;try{C=E(!0,x)}finally{C?Ee():(N=!1,E=null)}}else N=!1}var Ee;if(typeof c=="function")Ee=function(){c(te)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,se=tn.port2;tn.port1.onmessage=te,Ee=function(){se.postMessage(null)}}else Ee=function(){z(te,0)};function Se(x){E=x,N||(N=!0,Ee())}function he(x,C){g=z(function(){x(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,Se(S))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(x){switch(m){case 1:case 2:case 3:var C=3;break;default:C=m}var b=m;m=C;try{return x()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,C){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var b=m;m=x;try{return C()}finally{m=b}},e.unstable_scheduleCallback=function(x,C,b){var O=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?O+b:O):b=O,x){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=b+V,x={id:v++,callback:C,priorityLevel:x,startTime:b,expirationTime:V,sortIndex:-1},b>O?(x.sortIndex=b,n(s,x),t(a)===null&&x===t(s)&&(w?(d(g),g=-1):w=!0,he(_,b-O))):(x.sortIndex=V,n(a,x),y||h||(y=!0,Se(S))),x},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(x){var C=m;return function(){var b=m;m=C;try{return x.apply(this,arguments)}finally{m=b}}}})(Pd);Ad.exports=Pd;var k0=Ad.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=$t,Re=k0;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Id=new Set,Cr={};function ht(e,n){qt(e,n),qt(e+"Capture",n)}function qt(e,n){for(Cr[e]=n,e=0;e<n.length;e++)Id.add(n[e])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,E0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ns={},Cs={};function S0(e){return Wl.call(Cs,e)?!0:Wl.call(Ns,e)?!1:E0.test(e)?Cs[e]=!0:(Ns[e]=!0,!1)}function x0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T0(e,n,t,r){if(n===null||typeof n>"u"||x0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ke(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new ke(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zu=/[\-:]([a-z])/g;function Ju(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Zu,Ju);ae[n]=new ke(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Zu,Ju);ae[n]=new ke(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Zu,Ju);ae[n]=new ke(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function ea(e,n,t,r){var i=ae.hasOwnProperty(n)?ae[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(T0(n,t,i,r)&&(t=null),r||i===null?S0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var xn=zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),kt=Symbol.for("react.portal"),Et=Symbol.for("react.fragment"),na=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),bd=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),ta=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),ra=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),Dd=Symbol.for("react.offscreen"),As=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,ll;function cr(e){if(ll===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ll=n&&n[1]||""}return`
`+ll+e}var ul=!1;function al(e,n){if(!e||ul)return"";ul=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=u);break}}}finally{ul=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?cr(e):""}function N0(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Et:return"Fragment";case kt:return"Portal";case Hl:return"Profiler";case na:return"StrictMode";case Ql:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rd:return(e.displayName||"Context")+".Consumer";case bd:return(e._context.displayName||"Context")+".Provider";case ta:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ra:return n=e.displayName||null,n!==null?n:Kl(e.type)||"Memo";case In:n=e._payload,e=e._init;try{return Kl(e(n))}catch{}}return null}function C0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(n);case 8:return n===na?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ld(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function A0(e){var n=Ld(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ci(e){e._valueTracker||(e._valueTracker=A0(e))}function Od(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ld(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yl(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ps(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Qn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Md(e,n){n=n.checked,n!=null&&ea(e,"checked",n,!1)}function Zl(e,n){Md(e,n);var t=Qn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Jl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Jl(e,n.type,Qn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function zs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Jl(e,n,t){(n!=="number"||Qi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var dr=Array.isArray;function Dt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Qn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function eu(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Is(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(dr(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Qn(t)}}function jd(e,n){var t=Qn(n.value),r=Qn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function bs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Vd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Vd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var di,$d=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(di=di||document.createElement("div"),di.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ar(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P0=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){P0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),gr[n]=gr[e]})});function Fd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||gr.hasOwnProperty(e)&&gr[e]?(""+n).trim():n+"px"}function Gd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Fd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var z0=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(e,n){if(n){if(z0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function ru(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iu=null;function ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ou=null,Lt=null,Ot=null;function Rs(e){if(e=Xr(e)){if(typeof ou!="function")throw Error(k(280));var n=e.stateNode;n&&(n=No(n),ou(e.stateNode,e.type,n))}}function Ud(e){Lt?Ot?Ot.push(e):Ot=[e]:Lt=e}function qd(){if(Lt){var e=Lt,n=Ot;if(Ot=Lt=null,Rs(e),n)for(e=0;e<n.length;e++)Rs(n[e])}}function Bd(e,n){return e(n)}function Wd(){}var sl=!1;function Hd(e,n,t){if(sl)return e(n,t);sl=!0;try{return Bd(e,n,t)}finally{sl=!1,(Lt!==null||Ot!==null)&&(Wd(),qd())}}function Pr(e,n){var t=e.stateNode;if(t===null)return null;var r=No(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var lu=!1;if(wn)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){lu=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{lu=!1}function I0(e,n,t,r,i,o,l,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(v){this.onError(v)}}var yr=!1,Xi=null,Ki=!1,uu=null,b0={onError:function(e){yr=!0,Xi=e}};function R0(e,n,t,r,i,o,l,u,a){yr=!1,Xi=null,I0.apply(b0,arguments)}function D0(e,n,t,r,i,o,l,u,a){if(R0.apply(this,arguments),yr){if(yr){var s=Xi;yr=!1,Xi=null}else throw Error(k(198));Ki||(Ki=!0,uu=s)}}function _t(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Qd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ds(e){if(_t(e)!==e)throw Error(k(188))}function L0(e){var n=e.alternate;if(!n){if(n=_t(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Ds(i),e;if(o===r)return Ds(i),n;o=o.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function Xd(e){return e=L0(e),e!==null?Kd(e):null}function Kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Kd(e);if(n!==null)return n;e=e.sibling}return null}var Yd=Re.unstable_scheduleCallback,Ls=Re.unstable_cancelCallback,O0=Re.unstable_shouldYield,M0=Re.unstable_requestPaint,K=Re.unstable_now,j0=Re.unstable_getCurrentPriorityLevel,oa=Re.unstable_ImmediatePriority,Zd=Re.unstable_UserBlockingPriority,Yi=Re.unstable_NormalPriority,V0=Re.unstable_LowPriority,Jd=Re.unstable_IdlePriority,Eo=null,cn=null;function $0(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:U0,F0=Math.log,G0=Math.LN2;function U0(e){return e>>>=0,e===0?32:31-(F0(e)/G0|0)|0}var fi=64,pi=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~i;u!==0?r=fr(u):(o&=l,o!==0&&(r=fr(o)))}else l=t&~i,l!==0?r=fr(l):o!==0&&(r=fr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Je(n),i=1<<t,r|=e[t],n&=~i;return r}function q0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Je(o),u=1<<l,a=i[l];a===-1?(!(u&t)||u&r)&&(i[l]=q0(u,n)):a<=n&&(e.expiredLanes|=u),o&=~u}}function au(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ef(){var e=fi;return fi<<=1,!(fi&4194240)&&(fi=64),e}function cl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Hr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Je(n),e[n]=t}function W0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Je(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function la(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Je(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var M=0;function nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tf,ua,rf,of,lf,su=!1,vi=[],$n=null,Fn=null,Gn=null,zr=new Map,Ir=new Map,Rn=[],H0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Os(e,n){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":zr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(n.pointerId)}}function ir(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Xr(n),n!==null&&ua(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Q0(e,n,t,r,i){switch(n){case"focusin":return $n=ir($n,e,n,t,r,i),!0;case"dragenter":return Fn=ir(Fn,e,n,t,r,i),!0;case"mouseover":return Gn=ir(Gn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return zr.set(o,ir(zr.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ir.set(o,ir(Ir.get(o)||null,e,n,t,r,i)),!0}return!1}function uf(e){var n=it(e.target);if(n!==null){var t=_t(n);if(t!==null){if(n=t.tag,n===13){if(n=Qd(t),n!==null){e.blockedOn=n,lf(e.priority,function(){rf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=cu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);iu=r,t.target.dispatchEvent(r),iu=null}else return n=Xr(t),n!==null&&ua(n),e.blockedOn=t,!1;n.shift()}return!0}function Ms(e,n,t){zi(e)&&t.delete(n)}function X0(){su=!1,$n!==null&&zi($n)&&($n=null),Fn!==null&&zi(Fn)&&(Fn=null),Gn!==null&&zi(Gn)&&(Gn=null),zr.forEach(Ms),Ir.forEach(Ms)}function or(e,n){e.blockedOn===n&&(e.blockedOn=null,su||(su=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,X0)))}function br(e){function n(i){return or(i,e)}if(0<vi.length){or(vi[0],e);for(var t=1;t<vi.length;t++){var r=vi[t];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&or($n,e),Fn!==null&&or(Fn,e),Gn!==null&&or(Gn,e),zr.forEach(n),Ir.forEach(n),t=0;t<Rn.length;t++)r=Rn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rn.length&&(t=Rn[0],t.blockedOn===null);)uf(t),t.blockedOn===null&&Rn.shift()}var Mt=xn.ReactCurrentBatchConfig,Ji=!0;function K0(e,n,t,r){var i=M,o=Mt.transition;Mt.transition=null;try{M=1,aa(e,n,t,r)}finally{M=i,Mt.transition=o}}function Y0(e,n,t,r){var i=M,o=Mt.transition;Mt.transition=null;try{M=4,aa(e,n,t,r)}finally{M=i,Mt.transition=o}}function aa(e,n,t,r){if(Ji){var i=cu(e,n,t,r);if(i===null)wl(e,n,r,eo,t),Os(e,r);else if(Q0(i,e,n,t,r))r.stopPropagation();else if(Os(e,r),n&4&&-1<H0.indexOf(e)){for(;i!==null;){var o=Xr(i);if(o!==null&&tf(o),o=cu(e,n,t,r),o===null&&wl(e,n,r,eo,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else wl(e,n,r,null,t)}}var eo=null;function cu(e,n,t,r){if(eo=null,e=ia(r),e=it(e),e!==null)if(n=_t(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Qd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return eo=e,null}function af(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j0()){case oa:return 1;case Zd:return 4;case Yi:case V0:return 16;case Jd:return 536870912;default:return 16}default:return 16}}var On=null,sa=null,Ii=null;function sf(){if(Ii)return Ii;var e,n=sa,t=n.length,r,i="value"in On?On.value:On.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Ii=i.slice(e,1<r?1-r:void 0)}function bi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function mi(){return!0}function js(){return!1}function Le(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?mi:js,this.isPropagationStopped=js,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),n}var Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=Le(Jt),Qr=W({},Jt,{view:0,detail:0}),Z0=Le(Qr),dl,fl,lr,So=W({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(dl=e.screenX-lr.screenX,fl=e.screenY-lr.screenY):fl=dl=0,lr=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),Vs=Le(So),J0=W({},So,{dataTransfer:0}),e_=Le(J0),n_=W({},Qr,{relatedTarget:0}),pl=Le(n_),t_=W({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0}),r_=Le(t_),i_=W({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o_=Le(i_),l_=W({},Jt,{data:0}),$s=Le(l_),u_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=s_[e])?!!n[e]:!1}function da(){return c_}var d_=W({},Qr,{key:function(e){if(e.key){var n=u_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f_=Le(d_),p_=W({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fs=Le(p_),v_=W({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),m_=Le(v_),h_=W({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),__=Le(h_),g_=W({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y_=Le(g_),w_=[9,13,27,32],fa=wn&&"CompositionEvent"in window,wr=null;wn&&"documentMode"in document&&(wr=document.documentMode);var k_=wn&&"TextEvent"in window&&!wr,cf=wn&&(!fa||wr&&8<wr&&11>=wr),Gs=String.fromCharCode(32),Us=!1;function df(e,n){switch(e){case"keyup":return w_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var St=!1;function E_(e,n){switch(e){case"compositionend":return ff(n);case"keypress":return n.which!==32?null:(Us=!0,Gs);case"textInput":return e=n.data,e===Gs&&Us?null:e;default:return null}}function S_(e,n){if(St)return e==="compositionend"||!fa&&df(e,n)?(e=sf(),Ii=sa=On=null,St=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cf&&n.locale!=="ko"?null:n.data;default:return null}}var x_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!x_[e.type]:n==="textarea"}function pf(e,n,t,r){Ud(r),n=no(n,"onChange"),0<n.length&&(t=new ca("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var kr=null,Rr=null;function T_(e){xf(e,0)}function xo(e){var n=Nt(e);if(Od(n))return e}function N_(e,n){if(e==="change")return n}var vf=!1;if(wn){var vl;if(wn){var ml="oninput"in document;if(!ml){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),ml=typeof Bs.oninput=="function"}vl=ml}else vl=!1;vf=vl&&(!document.documentMode||9<document.documentMode)}function Ws(){kr&&(kr.detachEvent("onpropertychange",mf),Rr=kr=null)}function mf(e){if(e.propertyName==="value"&&xo(Rr)){var n=[];pf(n,Rr,e,ia(e)),Hd(T_,n)}}function C_(e,n,t){e==="focusin"?(Ws(),kr=n,Rr=t,kr.attachEvent("onpropertychange",mf)):e==="focusout"&&Ws()}function A_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(Rr)}function P_(e,n){if(e==="click")return xo(n)}function z_(e,n){if(e==="input"||e==="change")return xo(n)}function I_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var nn=typeof Object.is=="function"?Object.is:I_;function Dr(e,n){if(nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Wl.call(n,i)||!nn(e[i],n[i]))return!1}return!0}function Hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qs(e,n){var t=Hs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Hs(t)}}function hf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _f(){for(var e=window,n=Qi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Qi(e.document)}return n}function pa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function b_(e){var n=_f(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&hf(t.ownerDocument.documentElement,t)){if(r!==null&&pa(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qs(t,o);var l=Qs(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R_=wn&&"documentMode"in document&&11>=document.documentMode,xt=null,du=null,Er=null,fu=!1;function Xs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fu||xt==null||xt!==Qi(r)||(r=xt,"selectionStart"in r&&pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Dr(Er,r)||(Er=r,r=no(du,"onSelect"),0<r.length&&(n=new ca("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=xt)))}function hi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Tt={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionend:hi("Transition","TransitionEnd")},hl={},gf={};wn&&(gf=document.createElement("div").style,"AnimationEvent"in window||(delete Tt.animationend.animation,delete Tt.animationiteration.animation,delete Tt.animationstart.animation),"TransitionEvent"in window||delete Tt.transitionend.transition);function To(e){if(hl[e])return hl[e];if(!Tt[e])return e;var n=Tt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in gf)return hl[e]=n[t];return e}var yf=To("animationend"),wf=To("animationiteration"),kf=To("animationstart"),Ef=To("transitionend"),Sf=new Map,Ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,n){Sf.set(e,n),ht(n,[e])}for(var _l=0;_l<Ks.length;_l++){var gl=Ks[_l],D_=gl.toLowerCase(),L_=gl[0].toUpperCase()+gl.slice(1);Yn(D_,"on"+L_)}Yn(yf,"onAnimationEnd");Yn(wf,"onAnimationIteration");Yn(kf,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(Ef,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O_=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function Ys(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,D0(r,n,void 0,e),e.currentTarget=null}function xf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==o&&i.isPropagationStopped())break e;Ys(i,u,s),o=a}else for(l=0;l<r.length;l++){if(u=r[l],a=u.instance,s=u.currentTarget,u=u.listener,a!==o&&i.isPropagationStopped())break e;Ys(i,u,s),o=a}}}if(Ki)throw e=uu,Ki=!1,uu=null,e}function $(e,n){var t=n[_u];t===void 0&&(t=n[_u]=new Set);var r=e+"__bubble";t.has(r)||(Tf(n,e,2,!1),t.add(r))}function yl(e,n,t){var r=0;n&&(r|=4),Tf(t,e,r,n)}var _i="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[_i]){e[_i]=!0,Id.forEach(function(t){t!=="selectionchange"&&(O_.has(t)||yl(t,!1,e),yl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_i]||(n[_i]=!0,yl("selectionchange",!1,n))}}function Tf(e,n,t,r){switch(af(n)){case 1:var i=K0;break;case 4:i=Y0;break;default:i=aa}t=i.bind(null,n,t,e),i=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function wl(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;u!==null;){if(l=it(u),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}u=u.parentNode}}r=r.return}Hd(function(){var s=o,v=ia(t),p=[];e:{var m=Sf.get(e);if(m!==void 0){var h=ca,y=e;switch(e){case"keypress":if(bi(t)===0)break e;case"keydown":case"keyup":h=f_;break;case"focusin":y="focus",h=pl;break;case"focusout":y="blur",h=pl;break;case"beforeblur":case"afterblur":h=pl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=e_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=m_;break;case yf:case wf:case kf:h=r_;break;case Ef:h=__;break;case"scroll":h=Z0;break;case"wheel":h=y_;break;case"copy":case"cut":case"paste":h=o_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Fs}var w=(n&4)!==0,z=!w&&e==="scroll",d=w?m!==null?m+"Capture":null:m;w=[];for(var c=s,f;c!==null;){f=c;var _=f.stateNode;if(f.tag===5&&_!==null&&(f=_,d!==null&&(_=Pr(c,d),_!=null&&w.push(Or(c,_,f)))),z)break;c=c.return}0<w.length&&(m=new h(m,y,null,t,v),p.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&t!==iu&&(y=t.relatedTarget||t.fromElement)&&(it(y)||y[kn]))break e;if((h||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,h?(y=t.relatedTarget||t.toElement,h=s,y=y?it(y):null,y!==null&&(z=_t(y),y!==z||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=s),h!==y)){if(w=Vs,_="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Fs,_="onPointerLeave",d="onPointerEnter",c="pointer"),z=h==null?m:Nt(h),f=y==null?m:Nt(y),m=new w(_,c+"leave",h,t,v),m.target=z,m.relatedTarget=f,_=null,it(v)===s&&(w=new w(d,c+"enter",y,t,v),w.target=f,w.relatedTarget=z,_=w),z=_,h&&y)n:{for(w=h,d=y,c=0,f=w;f;f=gt(f))c++;for(f=0,_=d;_;_=gt(_))f++;for(;0<c-f;)w=gt(w),c--;for(;0<f-c;)d=gt(d),f--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break n;w=gt(w),d=gt(d)}w=null}else w=null;h!==null&&Zs(p,m,h,w,!1),y!==null&&z!==null&&Zs(p,z,y,w,!0)}}e:{if(m=s?Nt(s):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var S=N_;else if(qs(m))if(vf)S=z_;else{S=A_;var N=C_}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=P_);if(S&&(S=S(e,s))){pf(p,S,t,v);break e}N&&N(e,m,s),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&Jl(m,"number",m.value)}switch(N=s?Nt(s):window,e){case"focusin":(qs(N)||N.contentEditable==="true")&&(xt=N,du=s,Er=null);break;case"focusout":Er=du=xt=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Xs(p,t,v);break;case"selectionchange":if(R_)break;case"keydown":case"keyup":Xs(p,t,v)}var E;if(fa)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else St?df(e,t)&&(g="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(g="onCompositionStart");g&&(cf&&t.locale!=="ko"&&(St||g!=="onCompositionStart"?g==="onCompositionEnd"&&St&&(E=sf()):(On=v,sa="value"in On?On.value:On.textContent,St=!0)),N=no(s,g),0<N.length&&(g=new $s(g,e,null,t,v),p.push({event:g,listeners:N}),E?g.data=E:(E=ff(t),E!==null&&(g.data=E)))),(E=k_?E_(e,t):S_(e,t))&&(s=no(s,"onBeforeInput"),0<s.length&&(v=new $s("onBeforeInput","beforeinput",null,t,v),p.push({event:v,listeners:s}),v.data=E))}xf(p,n)})}function Or(e,n,t){return{instance:e,listener:n,currentTarget:t}}function no(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pr(e,t),o!=null&&r.unshift(Or(e,o,i)),o=Pr(e,n),o!=null&&r.push(Or(e,o,i))),e=e.return}return r}function gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zs(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=Pr(t,o),a!=null&&l.unshift(Or(t,a,u))):i||(a=Pr(t,o),a!=null&&l.push(Or(t,a,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var M_=/\r\n?/g,j_=/\u0000|\uFFFD/g;function Js(e){return(typeof e=="string"?e:""+e).replace(M_,`
`).replace(j_,"")}function gi(e,n,t){if(n=Js(n),Js(e)!==n&&t)throw Error(k(425))}function to(){}var pu=null,vu=null;function mu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,V_=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,$_=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(F_)}:hu;function F_(e){setTimeout(function(){throw e})}function kl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),br(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);br(n)}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function nc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),un="__reactFiber$"+er,Mr="__reactProps$"+er,kn="__reactContainer$"+er,_u="__reactEvents$"+er,G_="__reactListeners$"+er,U_="__reactHandles$"+er;function it(e){var n=e[un];if(n)return n;for(var t=e.parentNode;t;){if(n=t[kn]||t[un]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=nc(e);e!==null;){if(t=e[un])return t;e=nc(e)}return n}e=t,t=e.parentNode}return null}function Xr(e){return e=e[un]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function No(e){return e[Mr]||null}var gu=[],Ct=-1;function Zn(e){return{current:e}}function F(e){0>Ct||(e.current=gu[Ct],gu[Ct]=null,Ct--)}function j(e,n){Ct++,gu[Ct]=e.current,e.current=n}var Xn={},me=Zn(Xn),Ne=Zn(!1),ct=Xn;function Bt(e,n){var t=e.type.contextTypes;if(!t)return Xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function ro(){F(Ne),F(me)}function tc(e,n,t){if(me.current!==Xn)throw Error(k(168));j(me,n),j(Ne,t)}function Nf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,C0(e)||"Unknown",i));return W({},t,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xn,ct=me.current,j(me,e),j(Ne,Ne.current),!0}function rc(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Nf(e,n,ct),r.__reactInternalMemoizedMergedChildContext=e,F(Ne),F(me),j(me,e)):F(Ne),j(Ne,t)}var mn=null,Co=!1,El=!1;function Cf(e){mn===null?mn=[e]:mn.push(e)}function q_(e){Co=!0,Cf(e)}function Jn(){if(!El&&mn!==null){El=!0;var e=0,n=M;try{var t=mn;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}mn=null,Co=!1}catch(i){throw mn!==null&&(mn=mn.slice(e+1)),Yd(oa,Jn),i}finally{M=n,El=!1}}return null}var At=[],Pt=0,oo=null,lo=0,je=[],Ve=0,dt=null,_n=1,gn="";function nt(e,n){At[Pt++]=lo,At[Pt++]=oo,oo=e,lo=n}function Af(e,n,t){je[Ve++]=_n,je[Ve++]=gn,je[Ve++]=dt,dt=e;var r=_n;e=gn;var i=32-Je(r)-1;r&=~(1<<i),t+=1;var o=32-Je(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,_n=1<<32-Je(n)+i|t<<i|r,gn=o+e}else _n=1<<o|t<<i|r,gn=e}function va(e){e.return!==null&&(nt(e,1),Af(e,1,0))}function ma(e){for(;e===oo;)oo=At[--Pt],At[Pt]=null,lo=At[--Pt],At[Pt]=null;for(;e===dt;)dt=je[--Ve],je[Ve]=null,gn=je[--Ve],je[Ve]=null,_n=je[--Ve],je[Ve]=null}var be=null,Ie=null,G=!1,Ye=null;function Pf(e,n){var t=Ge(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ic(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,be=e,Ie=Un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,be=e,Ie=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=dt!==null?{id:_n,overflow:gn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ge(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,be=e,Ie=null,!0):!1;default:return!1}}function yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wu(e){if(G){var n=Ie;if(n){var t=n;if(!ic(e,n)){if(yu(e))throw Error(k(418));n=Un(t.nextSibling);var r=be;n&&ic(e,n)?Pf(r,t):(e.flags=e.flags&-4097|2,G=!1,be=e)}}else{if(yu(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,be=e}}}function oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function yi(e){if(e!==be)return!1;if(!G)return oc(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!mu(e.type,e.memoizedProps)),n&&(n=Ie)){if(yu(e))throw zf(),Error(k(418));for(;n;)Pf(e,n),n=Un(n.nextSibling)}if(oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ie=Un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ie=null}}else Ie=be?Un(e.stateNode.nextSibling):null;return!0}function zf(){for(var e=Ie;e;)e=Un(e.nextSibling)}function Wt(){Ie=be=null,G=!1}function ha(e){Ye===null?Ye=[e]:Ye.push(e)}var B_=xn.ReactCurrentBatchConfig;function Xe(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var uo=Zn(null),ao=null,zt=null,_a=null;function ga(){_a=zt=ao=null}function ya(e){var n=uo.current;F(uo),e._currentValue=n}function ku(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function jt(e,n){ao=e,_a=zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Te=!0),e.firstContext=null)}function Be(e){var n=e._currentValue;if(_a!==e)if(e={context:e,memoizedValue:n,next:null},zt===null){if(ao===null)throw Error(k(308));zt=e,ao.dependencies={lanes:0,firstContext:e}}else zt=zt.next=e;return n}var ot=null;function wa(e){ot===null?ot=[e]:ot.push(e)}function If(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,wa(n)):(t.next=i.next,i.next=t),n.interleaved=t,En(e,r)}function En(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var bn=!1;function ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function qn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,En(e,t)}return i=r.interleaved,i===null?(n.next=n,wa(r)):(n.next=i.next,i.next=n),r.interleaved=n,En(e,t)}function Ri(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,la(e,t)}}function lc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function so(e,n,t,r){var i=e.updateQueue;bn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,l===null?o=s:l.next=s,l=a;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==l&&(u===null?v.firstBaseUpdate=s:u.next=s,v.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;l=0,v=s=a=null,u=o;do{var m=u.lane,h=u.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,w=u;switch(m=n,h=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(h,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(h,p,m):y,m==null)break e;p=W({},p,m);break e;case 2:bn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[u]:m.push(u))}else h={eventTime:h,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(s=v=h,a=p):v=v.next=h,l|=m;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;m=u,u=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(v===null&&(a=p),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);pt|=l,e.lanes=l,e.memoizedState=p}}function uc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Rf=new zd.Component().refs;function Eu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ao={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ye(),i=Wn(e),o=yn(r,i);o.payload=n,t!=null&&(o.callback=t),n=qn(e,o,i),n!==null&&(en(n,e,i,r),Ri(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ye(),i=Wn(e),o=yn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=qn(e,o,i),n!==null&&(en(n,e,i,r),Ri(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),r=Wn(e),i=yn(t,r);i.tag=2,n!=null&&(i.callback=n),n=qn(e,i,r),n!==null&&(en(n,e,r,t),Ri(n,e,r))}};function ac(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Dr(t,r)||!Dr(i,o):!0}function Df(e,n,t){var r=!1,i=Xn,o=n.contextType;return typeof o=="object"&&o!==null?o=Be(o):(i=Ce(n)?ct:me.current,r=n.contextTypes,o=(r=r!=null)?Bt(e,i):Xn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ao,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function sc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ao.enqueueReplaceState(n,n.state,null)}function Su(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Rf,ka(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Be(o):(o=Ce(n)?ct:me.current,i.context=Bt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Eu(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ao.enqueueReplaceState(i,i.state,null),so(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var u=i.refs;u===Rf&&(u=i.refs={}),l===null?delete u[o]:u[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function wi(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function cc(e){var n=e._init;return n(e._payload)}function Lf(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Hn(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,c,f,_){return c===null||c.tag!==6?(c=Pl(f,d.mode,_),c.return=d,c):(c=i(c,f),c.return=d,c)}function a(d,c,f,_){var S=f.type;return S===Et?v(d,c,f.props.children,_,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===In&&cc(S)===c.type)?(_=i(c,f.props),_.ref=ur(d,c,f),_.return=d,_):(_=Vi(f.type,f.key,f.props,null,d.mode,_),_.ref=ur(d,c,f),_.return=d,_)}function s(d,c,f,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=zl(f,d.mode,_),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function v(d,c,f,_,S){return c===null||c.tag!==7?(c=st(f,d.mode,_,S),c.return=d,c):(c=i(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Pl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case si:return f=Vi(c.type,c.key,c.props,null,d.mode,f),f.ref=ur(d,null,c),f.return=d,f;case kt:return c=zl(c,d.mode,f),c.return=d,c;case In:var _=c._init;return p(d,_(c._payload),f)}if(dr(c)||tr(c))return c=st(c,d.mode,f,null),c.return=d,c;wi(d,c)}return null}function m(d,c,f,_){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:u(d,c,""+f,_);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case si:return f.key===S?a(d,c,f,_):null;case kt:return f.key===S?s(d,c,f,_):null;case In:return S=f._init,m(d,c,S(f._payload),_)}if(dr(f)||tr(f))return S!==null?null:v(d,c,f,_,null);wi(d,f)}return null}function h(d,c,f,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(f)||null,u(c,d,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case si:return d=d.get(_.key===null?f:_.key)||null,a(c,d,_,S);case kt:return d=d.get(_.key===null?f:_.key)||null,s(c,d,_,S);case In:var N=_._init;return h(d,c,f,N(_._payload),S)}if(dr(_)||tr(_))return d=d.get(f)||null,v(c,d,_,S,null);wi(c,_)}return null}function y(d,c,f,_){for(var S=null,N=null,E=c,g=c=0,I=null;E!==null&&g<f.length;g++){E.index>g?(I=E,E=null):I=E.sibling;var P=m(d,E,f[g],_);if(P===null){E===null&&(E=I);break}e&&E&&P.alternate===null&&n(d,E),c=o(P,c,g),N===null?S=P:N.sibling=P,N=P,E=I}if(g===f.length)return t(d,E),G&&nt(d,g),S;if(E===null){for(;g<f.length;g++)E=p(d,f[g],_),E!==null&&(c=o(E,c,g),N===null?S=E:N.sibling=E,N=E);return G&&nt(d,g),S}for(E=r(d,E);g<f.length;g++)I=h(E,d,g,f[g],_),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?g:I.key),c=o(I,c,g),N===null?S=I:N.sibling=I,N=I);return e&&E.forEach(function(H){return n(d,H)}),G&&nt(d,g),S}function w(d,c,f,_){var S=tr(f);if(typeof S!="function")throw Error(k(150));if(f=S.call(f),f==null)throw Error(k(151));for(var N=S=null,E=c,g=c=0,I=null,P=f.next();E!==null&&!P.done;g++,P=f.next()){E.index>g?(I=E,E=null):I=E.sibling;var H=m(d,E,P.value,_);if(H===null){E===null&&(E=I);break}e&&E&&H.alternate===null&&n(d,E),c=o(H,c,g),N===null?S=H:N.sibling=H,N=H,E=I}if(P.done)return t(d,E),G&&nt(d,g),S;if(E===null){for(;!P.done;g++,P=f.next())P=p(d,P.value,_),P!==null&&(c=o(P,c,g),N===null?S=P:N.sibling=P,N=P);return G&&nt(d,g),S}for(E=r(d,E);!P.done;g++,P=f.next())P=h(E,d,g,P.value,_),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?g:P.key),c=o(P,c,g),N===null?S=P:N.sibling=P,N=P);return e&&E.forEach(function(te){return n(d,te)}),G&&nt(d,g),S}function z(d,c,f,_){if(typeof f=="object"&&f!==null&&f.type===Et&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case si:e:{for(var S=f.key,N=c;N!==null;){if(N.key===S){if(S=f.type,S===Et){if(N.tag===7){t(d,N.sibling),c=i(N,f.props.children),c.return=d,d=c;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===In&&cc(S)===N.type){t(d,N.sibling),c=i(N,f.props),c.ref=ur(d,N,f),c.return=d,d=c;break e}t(d,N);break}else n(d,N);N=N.sibling}f.type===Et?(c=st(f.props.children,d.mode,_,f.key),c.return=d,d=c):(_=Vi(f.type,f.key,f.props,null,d.mode,_),_.ref=ur(d,c,f),_.return=d,d=_)}return l(d);case kt:e:{for(N=f.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=zl(f,d.mode,_),c.return=d,d=c}return l(d);case In:return N=f._init,z(d,c,N(f._payload),_)}if(dr(f))return y(d,c,f,_);if(tr(f))return w(d,c,f,_);wi(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=i(c,f),c.return=d,d=c):(t(d,c),c=Pl(f,d.mode,_),c.return=d,d=c),l(d)):t(d,c)}return z}var Ht=Lf(!0),Of=Lf(!1),Kr={},dn=Zn(Kr),jr=Zn(Kr),Vr=Zn(Kr);function lt(e){if(e===Kr)throw Error(k(174));return e}function Ea(e,n){switch(j(Vr,n),j(jr,e),j(dn,Kr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:nu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=nu(n,e)}F(dn),j(dn,n)}function Qt(){F(dn),F(jr),F(Vr)}function Mf(e){lt(Vr.current);var n=lt(dn.current),t=nu(n,e.type);n!==t&&(j(jr,e),j(dn,t))}function Sa(e){jr.current===e&&(F(dn),F(jr))}var U=Zn(0);function co(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sl=[];function xa(){for(var e=0;e<Sl.length;e++)Sl[e]._workInProgressVersionPrimary=null;Sl.length=0}var Di=xn.ReactCurrentDispatcher,xl=xn.ReactCurrentBatchConfig,ft=0,B=null,J=null,ie=null,fo=!1,Sr=!1,$r=0,W_=0;function ce(){throw Error(k(321))}function Ta(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!nn(e[t],n[t]))return!1;return!0}function Na(e,n,t,r,i,o){if(ft=o,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Di.current=e===null||e.memoizedState===null?K_:Y_,e=t(r,i),Sr){o=0;do{if(Sr=!1,$r=0,25<=o)throw Error(k(301));o+=1,ie=J=null,n.updateQueue=null,Di.current=Z_,e=t(r,i)}while(Sr)}if(Di.current=po,n=J!==null&&J.next!==null,ft=0,ie=J=B=null,fo=!1,n)throw Error(k(300));return e}function Ca(){var e=$r!==0;return $r=0,e}function on(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?B.memoizedState=ie=e:ie=ie.next=e,ie}function We(){if(J===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=ie===null?B.memoizedState:ie.next;if(n!==null)ie=n,J=e;else{if(e===null)throw Error(k(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ie===null?B.memoizedState=ie=e:ie=ie.next=e}return ie}function Fr(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=We(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,a=null,s=o;do{var v=s.lane;if((ft&v)===v)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var p={lane:v,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=p,l=r):a=a.next=p,B.lanes|=v,pt|=v}s=s.next}while(s!==null&&s!==o);a===null?l=r:a.next=u,nn(r,n.memoizedState)||(Te=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,B.lanes|=o,pt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Nl(e){var n=We(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);nn(o,n.memoizedState)||(Te=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function jf(){}function Vf(e,n){var t=B,r=We(),i=n(),o=!nn(r.memoizedState,i);if(o&&(r.memoizedState=i,Te=!0),r=r.queue,Aa(Gf.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||ie!==null&&ie.memoizedState.tag&1){if(t.flags|=2048,Gr(9,Ff.bind(null,t,r,i,n),void 0,null),oe===null)throw Error(k(349));ft&30||$f(t,n,i)}return i}function $f(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ff(e,n,t,r){n.value=t,n.getSnapshot=r,Uf(n)&&qf(e)}function Gf(e,n,t){return t(function(){Uf(n)&&qf(e)})}function Uf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!nn(e,t)}catch{return!0}}function qf(e){var n=En(e,1);n!==null&&en(n,e,1,-1)}function dc(e){var n=on();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},n.queue=e,e=e.dispatch=X_.bind(null,B,e),[n.memoizedState,e]}function Gr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Bf(){return We().memoizedState}function Li(e,n,t,r){var i=on();B.flags|=e,i.memoizedState=Gr(1|n,t,void 0,r===void 0?null:r)}function Po(e,n,t,r){var i=We();r=r===void 0?null:r;var o=void 0;if(J!==null){var l=J.memoizedState;if(o=l.destroy,r!==null&&Ta(r,l.deps)){i.memoizedState=Gr(n,t,o,r);return}}B.flags|=e,i.memoizedState=Gr(1|n,t,o,r)}function fc(e,n){return Li(8390656,8,e,n)}function Aa(e,n){return Po(2048,8,e,n)}function Wf(e,n){return Po(4,2,e,n)}function Hf(e,n){return Po(4,4,e,n)}function Qf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xf(e,n,t){return t=t!=null?t.concat([e]):null,Po(4,4,Qf.bind(null,n,e),t)}function Pa(){}function Kf(e,n){var t=We();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ta(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Yf(e,n){var t=We();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ta(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Zf(e,n,t){return ft&21?(nn(t,n)||(t=ef(),B.lanes|=t,pt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=t)}function H_(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=xl.transition;xl.transition={};try{e(!1),n()}finally{M=t,xl.transition=r}}function Jf(){return We().memoizedState}function Q_(e,n,t){var r=Wn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ep(e))np(n,t);else if(t=If(e,n,t,r),t!==null){var i=ye();en(t,e,r,i),tp(t,n,r)}}function X_(e,n,t){var r=Wn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ep(e))np(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,u=o(l,t);if(i.hasEagerState=!0,i.eagerState=u,nn(u,l)){var a=n.interleaved;a===null?(i.next=i,wa(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=If(e,n,i,r),t!==null&&(i=ye(),en(t,e,r,i),tp(t,n,r))}}function ep(e){var n=e.alternate;return e===B||n!==null&&n===B}function np(e,n){Sr=fo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function tp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,la(e,t)}}var po={readContext:Be,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},K_={readContext:Be,useCallback:function(e,n){return on().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:fc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Li(4194308,4,Qf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Li(4194308,4,e,n)},useInsertionEffect:function(e,n){return Li(4,2,e,n)},useMemo:function(e,n){var t=on();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=on();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Q_.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=on();return e={current:e},n.memoizedState=e},useState:dc,useDebugValue:Pa,useDeferredValue:function(e){return on().memoizedState=e},useTransition:function(){var e=dc(!1),n=e[0];return e=H_.bind(null,e[1]),on().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,i=on();if(G){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),oe===null)throw Error(k(349));ft&30||$f(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,fc(Gf.bind(null,r,o,e),[e]),r.flags|=2048,Gr(9,Ff.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=on(),n=oe.identifierPrefix;if(G){var t=gn,r=_n;t=(r&~(1<<32-Je(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=$r++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=W_++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Y_={readContext:Be,useCallback:Kf,useContext:Be,useEffect:Aa,useImperativeHandle:Xf,useInsertionEffect:Wf,useLayoutEffect:Hf,useMemo:Yf,useReducer:Tl,useRef:Bf,useState:function(){return Tl(Fr)},useDebugValue:Pa,useDeferredValue:function(e){var n=We();return Zf(n,J.memoizedState,e)},useTransition:function(){var e=Tl(Fr)[0],n=We().memoizedState;return[e,n]},useMutableSource:jf,useSyncExternalStore:Vf,useId:Jf,unstable_isNewReconciler:!1},Z_={readContext:Be,useCallback:Kf,useContext:Be,useEffect:Aa,useImperativeHandle:Xf,useInsertionEffect:Wf,useLayoutEffect:Hf,useMemo:Yf,useReducer:Nl,useRef:Bf,useState:function(){return Nl(Fr)},useDebugValue:Pa,useDeferredValue:function(e){var n=We();return J===null?n.memoizedState=e:Zf(n,J.memoizedState,e)},useTransition:function(){var e=Nl(Fr)[0],n=We().memoizedState;return[e,n]},useMutableSource:jf,useSyncExternalStore:Vf,useId:Jf,unstable_isNewReconciler:!1};function Xt(e,n){try{var t="",r=n;do t+=N0(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Cl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function xu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var J_=typeof WeakMap=="function"?WeakMap:Map;function rp(e,n,t){t=yn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){mo||(mo=!0,Du=r),xu(e,n)},t}function ip(e,n,t){t=yn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){xu(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){xu(e,n),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function pc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new J_;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=p1.bind(null,e,n,t),n.then(e,e))}function vc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function mc(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=yn(-1,1),n.tag=2,qn(t,n,1))),t.lanes|=1),e)}var e1=xn.ReactCurrentOwner,Te=!1;function _e(e,n,t,r){n.child=e===null?Of(n,null,t,r):Ht(n,e.child,t,r)}function hc(e,n,t,r,i){t=t.render;var o=n.ref;return jt(n,i),r=Na(e,n,t,r,o,i),t=Ca(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Sn(e,n,i)):(G&&t&&va(n),n.flags|=1,_e(e,n,r,i),n.child)}function _c(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Ma(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,op(e,n,o,r,i)):(e=Vi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Dr,t(l,r)&&e.ref===n.ref)return Sn(e,n,i)}return n.flags|=1,e=Hn(o,r),e.ref=n.ref,e.return=n,n.child=e}function op(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Dr(o,r)&&e.ref===n.ref)if(Te=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return n.lanes=e.lanes,Sn(e,n,i)}return Tu(e,n,t,r,i)}function lp(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(bt,ze),ze|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,j(bt,ze),ze|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,j(bt,ze),ze|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,j(bt,ze),ze|=r;return _e(e,n,i,t),n.child}function up(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Tu(e,n,t,r,i){var o=Ce(t)?ct:me.current;return o=Bt(n,o),jt(n,i),t=Na(e,n,t,r,o,i),r=Ca(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Sn(e,n,i)):(G&&r&&va(n),n.flags|=1,_e(e,n,t,i),n.child)}function gc(e,n,t,r,i){if(Ce(t)){var o=!0;io(n)}else o=!1;if(jt(n,i),n.stateNode===null)Oi(e,n),Df(n,t,r),Su(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var a=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=Be(s):(s=Ce(t)?ct:me.current,s=Bt(n,s));var v=t.getDerivedStateFromProps,p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||a!==s)&&sc(n,l,r,s),bn=!1;var m=n.memoizedState;l.state=m,so(n,r,l,i),a=n.memoizedState,u!==r||m!==a||Ne.current||bn?(typeof v=="function"&&(Eu(n,t,v,r),a=n.memoizedState),(u=bn||ac(n,t,u,r,m,a,s))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),l.props=r,l.state=a,l.context=s,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,bf(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:Xe(n.type,u),l.props=s,p=n.pendingProps,m=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=Be(a):(a=Ce(t)?ct:me.current,a=Bt(n,a));var h=t.getDerivedStateFromProps;(v=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==p||m!==a)&&sc(n,l,r,a),bn=!1,m=n.memoizedState,l.state=m,so(n,r,l,i);var y=n.memoizedState;u!==p||m!==y||Ne.current||bn?(typeof h=="function"&&(Eu(n,t,h,r),y=n.memoizedState),(s=bn||ac(n,t,s,r,m,y,a)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),l.props=r,l.state=y,l.context=a,r=s):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Nu(e,n,t,r,o,i)}function Nu(e,n,t,r,i,o){up(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&rc(n,t,!1),Sn(e,n,o);r=n.stateNode,e1.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Ht(n,e.child,null,o),n.child=Ht(n,null,u,o)):_e(e,n,u,o),n.memoizedState=r.state,i&&rc(n,t,!0),n.child}function ap(e){var n=e.stateNode;n.pendingContext?tc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&tc(e,n.context,!1),Ea(e,n.containerInfo)}function yc(e,n,t,r,i){return Wt(),ha(i),n.flags|=256,_e(e,n,t,r),n.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function Au(e){return{baseLanes:e,cachePool:null,transitions:null}}function sp(e,n,t){var r=n.pendingProps,i=U.current,o=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(U,i&1),e===null)return wu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=bo(l,r,0,null),e=st(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Au(t),n.memoizedState=Cu,e):za(n,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return n1(e,n,l,r,u,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Hn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Hn(u,o):(o=st(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?Au(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Cu,r}return o=e.child,e=o.sibling,r=Hn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function za(e,n){return n=bo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ki(e,n,t,r){return r!==null&&ha(r),Ht(n,e.child,null,t),e=za(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function n1(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=Cl(Error(k(422))),ki(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=bo({mode:"visible",children:r.children},i,0,null),o=st(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Ht(n,e.child,null,l),n.child.memoizedState=Au(l),n.memoizedState=Cu,o);if(!(n.mode&1))return ki(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(k(419)),r=Cl(o,r,void 0),ki(e,n,l,r)}if(u=(l&e.childLanes)!==0,Te||u){if(r=oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,En(e,i),en(r,e,i,-1))}return Oa(),r=Cl(Error(k(421))),ki(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=v1.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ie=Un(i.nextSibling),be=n,G=!0,Ye=null,e!==null&&(je[Ve++]=_n,je[Ve++]=gn,je[Ve++]=dt,_n=e.id,gn=e.overflow,dt=n),n=za(n,r.children),n.flags|=4096,n)}function wc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ku(e.return,n,t)}function Al(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function cp(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,t,n);else if(e.tag===19)wc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(U,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&co(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Al(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Al(n,!0,t,null,o);break;case"together":Al(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Oi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Sn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),pt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Hn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Hn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function t1(e,n,t){switch(n.tag){case 3:ap(n),Wt();break;case 5:Mf(n);break;case 1:Ce(n.type)&&io(n);break;case 4:Ea(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;j(uo,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(j(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?sp(e,n,t):(j(U,U.current&1),e=Sn(e,n,t),e!==null?e.sibling:null);j(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return cp(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,lp(e,n,t)}return Sn(e,n,t)}var dp,Pu,fp,pp;dp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pu=function(){};fp=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,lt(dn.current);var o=null;switch(t){case"input":i=Yl(e,i),r=Yl(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=eu(e,i),r=eu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}tu(t,r);var l;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Cr.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(l in u)!u.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&u[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(o||(o=[]),o.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&$("scroll",e),o||u===a||(o=[])):(o=o||[]).push(s,a))}t&&(o=o||[]).push("style",t);var s=o;(n.updateQueue=s)&&(n.flags|=4)}};pp=function(e,n,t,r){t!==r&&(n.flags|=4)};function ar(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function r1(e,n,t){var r=n.pendingProps;switch(ma(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return Ce(n.type)&&ro(),de(n),null;case 3:return r=n.stateNode,Qt(),F(Ne),F(me),xa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ye!==null&&(Mu(Ye),Ye=null))),Pu(e,n),de(n),null;case 5:Sa(n);var i=lt(Vr.current);if(t=n.type,e!==null&&n.stateNode!=null)fp(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return de(n),null}if(e=lt(dn.current),yi(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[un]=n,r[Mr]=o,e=(n.mode&1)!==0,t){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)$(pr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Ps(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Is(r,o),$("invalid",r)}tu(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&gi(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&gi(r.textContent,u,e),i=["children",""+u]):Cr.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&$("scroll",r)}switch(t){case"input":ci(r),zs(r,o,!0);break;case"textarea":ci(r),bs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=to)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[un]=n,e[Mr]=r,dp(e,n,!1,!1),n.stateNode=e;e:{switch(l=ru(t,r),t){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)$(pr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Ps(e,r),i=Yl(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),$("invalid",e);break;case"textarea":Is(e,r),i=eu(e,r),$("invalid",e);break;default:i=r}tu(t,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var a=u[o];o==="style"?Gd(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&$d(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Ar(e,a):typeof a=="number"&&Ar(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Cr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&$("scroll",e):a!=null&&ea(e,o,a,l))}switch(t){case"input":ci(e),zs(e,r,!1);break;case"textarea":ci(e),bs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Dt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Dt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=to)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)pp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=lt(Vr.current),lt(dn.current),yi(n)){if(r=n.stateNode,t=n.memoizedProps,r[un]=n,(o=r.nodeValue!==t)&&(e=be,e!==null))switch(e.tag){case 3:gi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[un]=n,n.stateNode=r}return de(n),null;case 13:if(F(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ie!==null&&n.mode&1&&!(n.flags&128))zf(),Wt(),n.flags|=98560,o=!1;else if(o=yi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[un]=n}else Wt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),o=!1}else Ye!==null&&(Mu(Ye),Ye=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?ee===0&&(ee=3):Oa())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return Qt(),Pu(e,n),e===null&&Lr(n.stateNode.containerInfo),de(n),null;case 10:return ya(n.type._context),de(n),null;case 17:return Ce(n.type)&&ro(),de(n),null;case 19:if(F(U),o=n.memoizedState,o===null)return de(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)ar(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=co(e),l!==null){for(n.flags|=128,ar(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return j(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&K()>Kt&&(n.flags|=128,r=!0,ar(o,!1),n.lanes=4194304)}else{if(!r)if(e=co(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!G)return de(n),null}else 2*K()-o.renderingStartTime>Kt&&t!==1073741824&&(n.flags|=128,r=!0,ar(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=K(),n.sibling=null,t=U.current,j(U,r?t&1|2:t&1),n):(de(n),null);case 22:case 23:return La(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ze&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function i1(e,n){switch(ma(n),n.tag){case 1:return Ce(n.type)&&ro(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qt(),F(Ne),F(me),xa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Sa(n),null;case 13:if(F(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(U),null;case 4:return Qt(),null;case 10:return ya(n.type._context),null;case 22:case 23:return La(),null;case 24:return null;default:return null}}var Ei=!1,fe=!1,o1=typeof WeakSet=="function"?WeakSet:Set,T=null;function It(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Q(e,n,r)}else t.current=null}function zu(e,n,t){try{t()}catch(r){Q(e,n,r)}}var kc=!1;function l1(e,n){if(pu=Ji,e=_f(),pa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,u=-1,a=-1,s=0,v=0,p=e,m=null;n:for(;;){for(var h;p!==t||i!==0&&p.nodeType!==3||(u=l+i),p!==o||r!==0&&p.nodeType!==3||(a=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(h=p.firstChild)!==null;)m=p,p=h;for(;;){if(p===e)break n;if(m===t&&++s===i&&(u=l),m===o&&++v===r&&(a=l),(h=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=h}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(vu={focusedElem:e,selectionRange:t},Ji=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,z=y.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Xe(n.type,w),z);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){Q(n,n.return,_)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return y=kc,kc=!1,y}function xr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&zu(n,t,o)}i=i.next}while(i!==r)}}function zo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Iu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function vp(e){var n=e.alternate;n!==null&&(e.alternate=null,vp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[un],delete n[Mr],delete n[_u],delete n[G_],delete n[U_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mp(e){return e.tag===5||e.tag===3||e.tag===4}function Ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(bu(e,n,t),e=e.sibling;e!==null;)bu(e,n,t),e=e.sibling}function Ru(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ru(e,n,t),e=e.sibling;e!==null;)Ru(e,n,t),e=e.sibling}var le=null,Ke=!1;function An(e,n,t){for(t=t.child;t!==null;)hp(e,n,t),t=t.sibling}function hp(e,n,t){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Eo,t)}catch{}switch(t.tag){case 5:fe||It(t,n);case 6:var r=le,i=Ke;le=null,An(e,n,t),le=r,Ke=i,le!==null&&(Ke?(e=le,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):le.removeChild(t.stateNode));break;case 18:le!==null&&(Ke?(e=le,t=t.stateNode,e.nodeType===8?kl(e.parentNode,t):e.nodeType===1&&kl(e,t),br(e)):kl(le,t.stateNode));break;case 4:r=le,i=Ke,le=t.stateNode.containerInfo,Ke=!0,An(e,n,t),le=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&zu(t,n,l),i=i.next}while(i!==r)}An(e,n,t);break;case 1:if(!fe&&(It(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){Q(t,n,u)}An(e,n,t);break;case 21:An(e,n,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,An(e,n,t),fe=r):An(e,n,t);break;default:An(e,n,t)}}function Sc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new o1),n.forEach(function(r){var i=m1.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Qe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:le=u.stateNode,Ke=!1;break e;case 3:le=u.stateNode.containerInfo,Ke=!0;break e;case 4:le=u.stateNode.containerInfo,Ke=!0;break e}u=u.return}if(le===null)throw Error(k(160));hp(o,l,i),le=null,Ke=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){Q(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)_p(n,e),n=n.sibling}function _p(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(n,e),rn(e),r&4){try{xr(3,e,e.return),zo(3,e)}catch(w){Q(e,e.return,w)}try{xr(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:Qe(n,e),rn(e),r&512&&t!==null&&It(t,t.return);break;case 5:if(Qe(n,e),rn(e),r&512&&t!==null&&It(t,t.return),e.flags&32){var i=e.stateNode;try{Ar(i,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Md(i,o),ru(u,l);var s=ru(u,o);for(l=0;l<a.length;l+=2){var v=a[l],p=a[l+1];v==="style"?Gd(i,p):v==="dangerouslySetInnerHTML"?$d(i,p):v==="children"?Ar(i,p):ea(i,v,p,s)}switch(u){case"input":Zl(i,o);break;case"textarea":jd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Dt(i,!!o.multiple,h,!1):m!==!!o.multiple&&(o.defaultValue!=null?Dt(i,!!o.multiple,o.defaultValue,!0):Dt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mr]=o}catch(w){Q(e,e.return,w)}}break;case 6:if(Qe(n,e),rn(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Q(e,e.return,w)}}break;case 3:if(Qe(n,e),rn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:Qe(n,e),rn(e);break;case 13:Qe(n,e),rn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ra=K())),r&4&&Sc(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(s=fe)||v,Qe(n,e),fe=s):Qe(n,e),rn(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!v&&e.mode&1)for(T=e,v=e.child;v!==null;){for(p=T=v;T!==null;){switch(m=T,h=m.child,m.tag){case 0:case 11:case 14:case 15:xr(4,m,m.return);break;case 1:It(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){Q(r,t,w)}}break;case 5:It(m,m.return);break;case 22:if(m.memoizedState!==null){Tc(p);continue}}h!==null?(h.return=m,T=h):Tc(p)}v=v.sibling}e:for(v=null,p=e;;){if(p.tag===5){if(v===null){v=p;try{i=p.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=p.stateNode,a=p.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Fd("display",l))}catch(w){Q(e,e.return,w)}}}else if(p.tag===6){if(v===null)try{p.stateNode.nodeValue=s?"":p.memoizedProps}catch(w){Q(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;v===p&&(v=null),p=p.return}v===p&&(v=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Qe(n,e),rn(e),r&4&&Sc(e);break;case 21:break;default:Qe(n,e),rn(e)}}function rn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(mp(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ar(i,""),r.flags&=-33);var o=Ec(e);Ru(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=Ec(e);bu(e,u,l);break;default:throw Error(k(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function u1(e,n,t){T=e,gp(e)}function gp(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ei;if(!l){var u=i.alternate,a=u!==null&&u.memoizedState!==null||fe;u=Ei;var s=fe;if(Ei=l,(fe=a)&&!s)for(T=i;T!==null;)l=T,a=l.child,l.tag===22&&l.memoizedState!==null?Nc(i):a!==null?(a.return=l,T=a):Nc(i);for(;o!==null;)T=o,gp(o),o=o.sibling;T=i,Ei=u,fe=s}xc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):xc(e)}}function xc(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||zo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Xe(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&uc(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}uc(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var v=s.memoizedState;if(v!==null){var p=v.dehydrated;p!==null&&br(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}fe||n.flags&512&&Iu(n)}catch(m){Q(n,n.return,m)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function Tc(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function Nc(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{zo(4,n)}catch(a){Q(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){Q(n,i,a)}}var o=n.return;try{Iu(n)}catch(a){Q(n,o,a)}break;case 5:var l=n.return;try{Iu(n)}catch(a){Q(n,l,a)}}}catch(a){Q(n,n.return,a)}if(n===e){T=null;break}var u=n.sibling;if(u!==null){u.return=n.return,T=u;break}T=n.return}}var a1=Math.ceil,vo=xn.ReactCurrentDispatcher,Ia=xn.ReactCurrentOwner,Ue=xn.ReactCurrentBatchConfig,L=0,oe=null,Y=null,ue=0,ze=0,bt=Zn(0),ee=0,Ur=null,pt=0,Io=0,ba=0,Tr=null,xe=null,Ra=0,Kt=1/0,vn=null,mo=!1,Du=null,Bn=null,Si=!1,Mn=null,ho=0,Nr=0,Lu=null,Mi=-1,ji=0;function ye(){return L&6?K():Mi!==-1?Mi:Mi=K()}function Wn(e){return e.mode&1?L&2&&ue!==0?ue&-ue:B_.transition!==null?(ji===0&&(ji=ef()),ji):(e=M,e!==0||(e=window.event,e=e===void 0?16:af(e.type)),e):1}function en(e,n,t,r){if(50<Nr)throw Nr=0,Lu=null,Error(k(185));Hr(e,t,r),(!(L&2)||e!==oe)&&(e===oe&&(!(L&2)&&(Io|=t),ee===4&&Dn(e,ue)),Ae(e,r),t===1&&L===0&&!(n.mode&1)&&(Kt=K()+500,Co&&Jn()))}function Ae(e,n){var t=e.callbackNode;B0(e,n);var r=Zi(e,e===oe?ue:0);if(r===0)t!==null&&Ls(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ls(t),n===1)e.tag===0?q_(Cc.bind(null,e)):Cf(Cc.bind(null,e)),$_(function(){!(L&6)&&Jn()}),t=null;else{switch(nf(r)){case 1:t=oa;break;case 4:t=Zd;break;case 16:t=Yi;break;case 536870912:t=Jd;break;default:t=Yi}t=Np(t,yp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function yp(e,n){if(Mi=-1,ji=0,L&6)throw Error(k(327));var t=e.callbackNode;if(Vt()&&e.callbackNode!==t)return null;var r=Zi(e,e===oe?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=_o(e,r);else{n=r;var i=L;L|=2;var o=kp();(oe!==e||ue!==n)&&(vn=null,Kt=K()+500,at(e,n));do try{d1();break}catch(u){wp(e,u)}while(1);ga(),vo.current=o,L=i,Y!==null?n=0:(oe=null,ue=0,n=ee)}if(n!==0){if(n===2&&(i=au(e),i!==0&&(r=i,n=Ou(e,i))),n===1)throw t=Ur,at(e,0),Dn(e,r),Ae(e,K()),t;if(n===6)Dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!s1(i)&&(n=_o(e,r),n===2&&(o=au(e),o!==0&&(r=o,n=Ou(e,o))),n===1))throw t=Ur,at(e,0),Dn(e,r),Ae(e,K()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:tt(e,xe,vn);break;case 3:if(Dn(e,r),(r&130023424)===r&&(n=Ra+500-K(),10<n)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hu(tt.bind(null,e,xe,vn),n);break}tt(e,xe,vn);break;case 4:if(Dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Je(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*a1(r/1960))-r,10<r){e.timeoutHandle=hu(tt.bind(null,e,xe,vn),r);break}tt(e,xe,vn);break;case 5:tt(e,xe,vn);break;default:throw Error(k(329))}}}return Ae(e,K()),e.callbackNode===t?yp.bind(null,e):null}function Ou(e,n){var t=Tr;return e.current.memoizedState.isDehydrated&&(at(e,n).flags|=256),e=_o(e,n),e!==2&&(n=xe,xe=t,n!==null&&Mu(n)),e}function Mu(e){xe===null?xe=e:xe.push.apply(xe,e)}function s1(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!nn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Dn(e,n){for(n&=~ba,n&=~Io,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Je(n),r=1<<t;e[t]=-1,n&=~r}}function Cc(e){if(L&6)throw Error(k(327));Vt();var n=Zi(e,0);if(!(n&1))return Ae(e,K()),null;var t=_o(e,n);if(e.tag!==0&&t===2){var r=au(e);r!==0&&(n=r,t=Ou(e,r))}if(t===1)throw t=Ur,at(e,0),Dn(e,n),Ae(e,K()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,tt(e,xe,vn),Ae(e,K()),null}function Da(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(Kt=K()+500,Co&&Jn())}}function vt(e){Mn!==null&&Mn.tag===0&&!(L&6)&&Vt();var n=L;L|=1;var t=Ue.transition,r=M;try{if(Ue.transition=null,M=1,e)return e()}finally{M=r,Ue.transition=t,L=n,!(L&6)&&Jn()}}function La(){ze=bt.current,F(bt)}function at(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,V_(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(ma(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ro();break;case 3:Qt(),F(Ne),F(me),xa();break;case 5:Sa(r);break;case 4:Qt();break;case 13:F(U);break;case 19:F(U);break;case 10:ya(r.type._context);break;case 22:case 23:La()}t=t.return}if(oe=e,Y=e=Hn(e.current,null),ue=ze=n,ee=0,Ur=null,ba=Io=pt=0,xe=Tr=null,ot!==null){for(n=0;n<ot.length;n++)if(t=ot[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}ot=null}return e}function wp(e,n){do{var t=Y;try{if(ga(),Di.current=po,fo){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fo=!1}if(ft=0,ie=J=B=null,Sr=!1,$r=0,Ia.current=null,t===null||t.return===null){ee=1,Ur=n,Y=null;break}e:{var o=e,l=t.return,u=t,a=n;if(n=ue,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,v=u,p=v.tag;if(!(v.mode&1)&&(p===0||p===11||p===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var h=vc(l);if(h!==null){h.flags&=-257,mc(h,l,u,o,n),h.mode&1&&pc(o,s,n),n=h,a=s;var y=n.updateQueue;if(y===null){var w=new Set;w.add(a),n.updateQueue=w}else y.add(a);break e}else{if(!(n&1)){pc(o,s,n),Oa();break e}a=Error(k(426))}}else if(G&&u.mode&1){var z=vc(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),mc(z,l,u,o,n),ha(Xt(a,u));break e}}o=a=Xt(a,u),ee!==4&&(ee=2),Tr===null?Tr=[o]:Tr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=rp(o,a,n);lc(o,d);break e;case 1:u=a;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Bn===null||!Bn.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var _=ip(o,u,n);lc(o,_);break e}}o=o.return}while(o!==null)}Sp(t)}catch(S){n=S,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(1)}function kp(){var e=vo.current;return vo.current=po,e===null?po:e}function Oa(){(ee===0||ee===3||ee===2)&&(ee=4),oe===null||!(pt&268435455)&&!(Io&268435455)||Dn(oe,ue)}function _o(e,n){var t=L;L|=2;var r=kp();(oe!==e||ue!==n)&&(vn=null,at(e,n));do try{c1();break}catch(i){wp(e,i)}while(1);if(ga(),L=t,vo.current=r,Y!==null)throw Error(k(261));return oe=null,ue=0,ee}function c1(){for(;Y!==null;)Ep(Y)}function d1(){for(;Y!==null&&!O0();)Ep(Y)}function Ep(e){var n=Tp(e.alternate,e,ze);e.memoizedProps=e.pendingProps,n===null?Sp(e):Y=n,Ia.current=null}function Sp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=i1(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,Y=null;return}}else if(t=r1(t,n,ze),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);ee===0&&(ee=5)}function tt(e,n,t){var r=M,i=Ue.transition;try{Ue.transition=null,M=1,f1(e,n,t,r)}finally{Ue.transition=i,M=r}return null}function f1(e,n,t,r){do Vt();while(Mn!==null);if(L&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(W0(e,o),e===oe&&(Y=oe=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Si||(Si=!0,Np(Yi,function(){return Vt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var l=M;M=1;var u=L;L|=4,Ia.current=null,l1(e,t),_p(t,e),b_(vu),Ji=!!pu,vu=pu=null,e.current=t,u1(t),M0(),L=u,M=l,Ue.transition=o}else e.current=t;if(Si&&(Si=!1,Mn=e,ho=i),o=e.pendingLanes,o===0&&(Bn=null),$0(t.stateNode),Ae(e,K()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(mo)throw mo=!1,e=Du,Du=null,e;return ho&1&&e.tag!==0&&Vt(),o=e.pendingLanes,o&1?e===Lu?Nr++:(Nr=0,Lu=e):Nr=0,Jn(),null}function Vt(){if(Mn!==null){var e=nf(ho),n=Ue.transition,t=M;try{if(Ue.transition=null,M=16>e?16:e,Mn===null)var r=!1;else{if(e=Mn,Mn=null,ho=0,L&6)throw Error(k(331));var i=L;for(L|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var u=o.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(T=s;T!==null;){var v=T;switch(v.tag){case 0:case 11:case 15:xr(8,v,o)}var p=v.child;if(p!==null)p.return=v,T=p;else for(;T!==null;){v=T;var m=v.sibling,h=v.return;if(vp(v),v===s){T=null;break}if(m!==null){m.return=h,T=m;break}T=h}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,T=d;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){l=T;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,T=f;else e:for(l=c;T!==null;){if(u=T,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:zo(9,u)}}catch(S){Q(u,u.return,S)}if(u===l){T=null;break e}var _=u.sibling;if(_!==null){_.return=u.return,T=_;break e}T=u.return}}if(L=i,Jn(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Eo,e)}catch{}r=!0}return r}finally{M=t,Ue.transition=n}}return!1}function Ac(e,n,t){n=Xt(t,n),n=rp(e,n,1),e=qn(e,n,1),n=ye(),e!==null&&(Hr(e,1,n),Ae(e,n))}function Q(e,n,t){if(e.tag===3)Ac(e,e,t);else for(;n!==null;){if(n.tag===3){Ac(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=Xt(t,e),e=ip(n,e,1),n=qn(n,e,1),e=ye(),n!==null&&(Hr(n,1,e),Ae(n,e));break}}n=n.return}}function p1(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,oe===e&&(ue&t)===t&&(ee===4||ee===3&&(ue&130023424)===ue&&500>K()-Ra?at(e,0):ba|=t),Ae(e,n)}function xp(e,n){n===0&&(e.mode&1?(n=pi,pi<<=1,!(pi&130023424)&&(pi=4194304)):n=1);var t=ye();e=En(e,n),e!==null&&(Hr(e,n,t),Ae(e,t))}function v1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),xp(e,t)}function m1(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),xp(e,t)}var Tp;Tp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ne.current)Te=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Te=!1,t1(e,n,t);Te=!!(e.flags&131072)}else Te=!1,G&&n.flags&1048576&&Af(n,lo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Oi(e,n),e=n.pendingProps;var i=Bt(n,me.current);jt(n,t),i=Na(null,n,r,e,i,t);var o=Ca();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ce(r)?(o=!0,io(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ka(n),i.updater=Ao,n.stateNode=i,i._reactInternals=n,Su(n,r,e,t),n=Nu(null,n,r,!0,o,t)):(n.tag=0,G&&o&&va(n),_e(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Oi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=_1(r),e=Xe(r,e),i){case 0:n=Tu(null,n,r,e,t);break e;case 1:n=gc(null,n,r,e,t);break e;case 11:n=hc(null,n,r,e,t);break e;case 14:n=_c(null,n,r,Xe(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Xe(r,i),Tu(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Xe(r,i),gc(e,n,r,i,t);case 3:e:{if(ap(n),e===null)throw Error(k(387));r=n.pendingProps,o=n.memoizedState,i=o.element,bf(e,n),so(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Xt(Error(k(423)),n),n=yc(e,n,r,t,i);break e}else if(r!==i){i=Xt(Error(k(424)),n),n=yc(e,n,r,t,i);break e}else for(Ie=Un(n.stateNode.containerInfo.firstChild),be=n,G=!0,Ye=null,t=Of(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Wt(),r===i){n=Sn(e,n,t);break e}_e(e,n,r,t)}n=n.child}return n;case 5:return Mf(n),e===null&&wu(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,mu(r,i)?l=null:o!==null&&mu(r,o)&&(n.flags|=32),up(e,n),_e(e,n,l,t),n.child;case 6:return e===null&&wu(n),null;case 13:return sp(e,n,t);case 4:return Ea(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ht(n,null,r,t):_e(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Xe(r,i),hc(e,n,r,i,t);case 7:return _e(e,n,n.pendingProps,t),n.child;case 8:return _e(e,n,n.pendingProps.children,t),n.child;case 12:return _e(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,j(uo,r._currentValue),r._currentValue=l,o!==null)if(nn(o.value,l)){if(o.children===i.children&&!Ne.current){n=Sn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=yn(-1,t&-t),a.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var v=s.pending;v===null?a.next=a:(a.next=v.next,v.next=a),s.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ku(o.return,t,n),u.lanes|=t;break}a=a.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),ku(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}_e(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,jt(n,t),i=Be(i),r=r(i),n.flags|=1,_e(e,n,r,t),n.child;case 14:return r=n.type,i=Xe(r,n.pendingProps),i=Xe(r.type,i),_c(e,n,r,i,t);case 15:return op(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Xe(r,i),Oi(e,n),n.tag=1,Ce(r)?(e=!0,io(n)):e=!1,jt(n,t),Df(n,r,i),Su(n,r,i,t),Nu(null,n,r,!0,e,t);case 19:return cp(e,n,t);case 22:return lp(e,n,t)}throw Error(k(156,n.tag))};function Np(e,n){return Yd(e,n)}function h1(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,n,t,r){return new h1(e,n,t,r)}function Ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _1(e){if(typeof e=="function")return Ma(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ta)return 11;if(e===ra)return 14}return 2}function Hn(e,n){var t=e.alternate;return t===null?(t=Ge(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Vi(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")Ma(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Et:return st(t.children,i,o,n);case na:l=8,i|=8;break;case Hl:return e=Ge(12,t,n,i|2),e.elementType=Hl,e.lanes=o,e;case Ql:return e=Ge(13,t,n,i),e.elementType=Ql,e.lanes=o,e;case Xl:return e=Ge(19,t,n,i),e.elementType=Xl,e.lanes=o,e;case Dd:return bo(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bd:l=10;break e;case Rd:l=9;break e;case ta:l=11;break e;case ra:l=14;break e;case In:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Ge(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function st(e,n,t,r){return e=Ge(7,e,r,n),e.lanes=t,e}function bo(e,n,t,r){return e=Ge(22,e,r,n),e.elementType=Dd,e.lanes=t,e.stateNode={isHidden:!1},e}function Pl(e,n,t){return e=Ge(6,e,null,n),e.lanes=t,e}function zl(e,n,t){return n=Ge(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function g1(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ja(e,n,t,r,i,o,l,u,a){return e=new g1(e,n,t,u,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ge(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ka(o),e}function y1(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Cp(e){if(!e)return Xn;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Ce(t))return Nf(e,t,n)}return n}function Ap(e,n,t,r,i,o,l,u,a){return e=ja(t,r,!0,e,i,o,l,u,a),e.context=Cp(null),t=e.current,r=ye(),i=Wn(t),o=yn(r,i),o.callback=n??null,qn(t,o,i),e.current.lanes=i,Hr(e,i,r),Ae(e,r),e}function Ro(e,n,t,r){var i=n.current,o=ye(),l=Wn(i);return t=Cp(t),n.context===null?n.context=t:n.pendingContext=t,n=yn(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=qn(i,n,l),e!==null&&(en(e,i,l,o),Ri(e,i,l)),l}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Va(e,n){Pc(e,n),(e=e.alternate)&&Pc(e,n)}function w1(){return null}var Pp=typeof reportError=="function"?reportError:function(e){console.error(e)};function $a(e){this._internalRoot=e}Do.prototype.render=$a.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Ro(e,n,null,null)};Do.prototype.unmount=$a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vt(function(){Ro(null,e,null,null)}),n[kn]=null}};function Do(e){this._internalRoot=e}Do.prototype.unstable_scheduleHydration=function(e){if(e){var n=of();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Rn.length&&n!==0&&n<Rn[t].priority;t++);Rn.splice(t,0,e),t===0&&uf(e)}};function Fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function k1(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=go(l);o.call(s)}}var l=Ap(n,r,e,0,null,!1,!1,"",zc);return e._reactRootContainer=l,e[kn]=l.current,Lr(e.nodeType===8?e.parentNode:e),vt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=go(a);u.call(s)}}var a=ja(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=a,e[kn]=a.current,Lr(e.nodeType===8?e.parentNode:e),vt(function(){Ro(n,a,t,r)}),a}function Oo(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var a=go(l);u.call(a)}}Ro(n,l,e,i)}else l=k1(t,n,e,i,r);return go(l)}tf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=fr(n.pendingLanes);t!==0&&(la(n,t|1),Ae(n,K()),!(L&6)&&(Kt=K()+500,Jn()))}break;case 13:vt(function(){var r=En(e,1);if(r!==null){var i=ye();en(r,e,1,i)}}),Va(e,1)}};ua=function(e){if(e.tag===13){var n=En(e,134217728);if(n!==null){var t=ye();en(n,e,134217728,t)}Va(e,134217728)}};rf=function(e){if(e.tag===13){var n=Wn(e),t=En(e,n);if(t!==null){var r=ye();en(t,e,n,r)}Va(e,n)}};of=function(){return M};lf=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};ou=function(e,n,t){switch(n){case"input":if(Zl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=No(r);if(!i)throw Error(k(90));Od(r),Zl(r,i)}}}break;case"textarea":jd(e,t);break;case"select":n=t.value,n!=null&&Dt(e,!!t.multiple,n,!1)}};Bd=Da;Wd=vt;var E1={usingClientEntryPoint:!1,Events:[Xr,Nt,No,Ud,qd,Da]},sr={findFiberByHostInstance:it,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},S1={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xd(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||w1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{Eo=xi.inject(S1),cn=xi}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E1;De.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fa(n))throw Error(k(200));return y1(e,n,null,t)};De.createRoot=function(e,n){if(!Fa(e))throw Error(k(299));var t=!1,r="",i=Pp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=ja(e,1,!1,null,null,t,!1,r,i),e[kn]=n.current,Lr(e.nodeType===8?e.parentNode:e),new $a(n)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Xd(n),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return vt(e)};De.hydrate=function(e,n,t){if(!Lo(n))throw Error(k(200));return Oo(null,e,n,!0,t)};De.hydrateRoot=function(e,n,t){if(!Fa(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Pp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Ap(n,null,e,1,t??null,i,!1,o,l),e[kn]=n.current,Lr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Do(n)};De.render=function(e,n,t){if(!Lo(n))throw Error(k(200));return Oo(null,e,n,!1,t)};De.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(k(40));return e._reactRootContainer?(vt(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};De.unstable_batchedUpdates=Da;De.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Lo(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Oo(e,n,t,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function zp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zp)}catch(e){console.error(e)}}zp(),Cd.exports=De;var x1=Cd.exports,Ip,Ic=x1;Ip=Ic.createRoot,Ic.hydrateRoot;Ip(w0(Sv(document.querySelector("#root")))).render(A.jsx($t.StrictMode,{children:A.jsx(y0,{})}));
