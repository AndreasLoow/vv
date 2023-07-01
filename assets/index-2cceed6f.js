(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Fc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),ev=Symbol.for("react.portal"),nv=Symbol.for("react.fragment"),tv=Symbol.for("react.strict_mode"),rv=Symbol.for("react.profiler"),iv=Symbol.for("react.provider"),ov=Symbol.for("react.context"),lv=Symbol.for("react.forward_ref"),uv=Symbol.for("react.suspense"),av=Symbol.for("react.memo"),sv=Symbol.for("react.lazy"),es=Symbol.iterator;function cv(e){return e===null||typeof e!="object"?null:(e=es&&e[es]||e["@@iterator"],typeof e=="function"?e:null)}var Gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uc=Object.assign,qc={};function Zt(e,n,t){this.props=e,this.context=n,this.refs=qc,this.updater=t||Gc}Zt.prototype.isReactComponent={};Zt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Zt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bc(){}Bc.prototype=Zt.prototype;function Hu(e,n,t){this.props=e,this.context=n,this.refs=qc,this.updater=t||Gc}var Qu=Hu.prototype=new Bc;Qu.constructor=Hu;Uc(Qu,Zt.prototype);Qu.isPureReactComponent=!0;var ns=Array.isArray,Wc=Object.prototype.hasOwnProperty,Xu={current:null},Hc={key:!0,ref:!0,__self:!0,__source:!0};function Qc(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Wc.call(n,r)&&!Hc.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Br,type:e,key:o,ref:l,props:i,_owner:Xu.current}}function dv(e,n){return{$$typeof:Br,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ku(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function fv(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ts=/\/+/g;function il(e,n){return typeof e=="object"&&e!==null&&e.key!=null?fv(""+e.key):n.toString(36)}function Ci(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Br:case ev:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+il(l,0):r,ns(i)?(t="",e!=null&&(t=e.replace(ts,"$&/")+"/"),Ci(i,n,t,"",function(s){return s})):i!=null&&(Ku(i)&&(i=dv(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ts,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",ns(e))for(var u=0;u<e.length;u++){o=e[u];var a=r+il(o,u);l+=Ci(o,n,t,a,i)}else if(a=cv(e),typeof a=="function")for(e=a.call(e),u=0;!(o=e.next()).done;)o=o.value,a=r+il(o,u++),l+=Ci(o,n,t,a,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function ri(e,n,t){if(e==null)return e;var r=[],i=0;return Ci(e,r,"","",function(o){return n.call(t,o,i++)}),r}function pv(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},bi={transition:null},vv={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:bi,ReactCurrentOwner:Xu};D.Children={map:ri,forEach:function(e,n,t){ri(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ri(e,function(){n++}),n},toArray:function(e){return ri(e,function(n){return n})||[]},only:function(e){if(!Ku(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Zt;D.Fragment=nv;D.Profiler=rv;D.PureComponent=Hu;D.StrictMode=tv;D.Suspense=uv;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vv;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Uc({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Xu.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)Wc.call(n,a)&&!Hc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:Br,type:e.type,key:i,ref:o,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:ov,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:iv,_context:e},e.Consumer=e};D.createElement=Qc;D.createFactory=function(e){var n=Qc.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:lv,render:e}};D.isValidElement=Ku;D.lazy=function(e){return{$$typeof:sv,_payload:{_status:-1,_result:e},_init:pv}};D.memo=function(e,n){return{$$typeof:av,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=bi.transition;bi.transition={};try{e()}finally{bi.transition=n}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,n){return ke.current.useCallback(e,n)};D.useContext=function(e){return ke.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};D.useEffect=function(e,n){return ke.current.useEffect(e,n)};D.useId=function(){return ke.current.useId()};D.useImperativeHandle=function(e,n,t){return ke.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return ke.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return ke.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return ke.current.useMemo(e,n)};D.useReducer=function(e,n,t){return ke.current.useReducer(e,n,t)};D.useRef=function(e){return ke.current.useRef(e)};D.useState=function(e){return ke.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return ke.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return ke.current.useTransition()};D.version="18.2.0";Fc.exports=D;var Ut=Fc.exports;function Xc(e){switch(e){case 0:return"1";case 1:return"0";case 2:return"x";case 3:return"z"}}function mv(e){return e===0}function hv(e){return e===1}function _v(e,n){return e===n?e:e===3?n:n===3?e:2}function gv(e,n){switch(e){case 0:return n>=3?0:n;case 1:return 1;case 2:return n!==1?2:1;case 3:return n}}function yv(e,n){switch(e){case 0:return 0;case 1:return n>=3?1:n;case 2:return n!==0?2:0;case 3:return n}}function wv(e){return e!==1?e!==0?2:1:0}function rs(e,n){return e!==1?e!==0?n!==1?2:1:n!==1?n!==0?2:0:n!==1?2:1:1}function is(e,n){return e!==1?e!==0&&n!==0?2:0:n!==1?n!==0||n!==0?2:0:1}function kv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function Ev(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function Sv(e,n){return e!==1?e!==0||n!==0?2:0:n!==1?2:1}function xv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:0:1:n!==1?n!==0?2:1:0}function Tv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}var ol=0,os=1,Nv=2,Cv=3;function bv(e,n){return e<n?-1:e===n?0:1}function Av(e,n){return e?n?0:1:n?-1:0}function Pv(e,n){return e===n?0:e<n?-1:e>n||e===e?1:n===n?-1:0}function Kc(e,n){return e===n?0:e<n?-1:1}function Yc(e,n){return e<n?e:n}function zv(e,n){return e>n?e:n}function ls(e,n,t){for(var r=new Array(t),i=0,o=n;i<t;)r[i]=e[o],i=i+1|0,o=o+1|0;return r}function qi(e,n){for(;;){var t=n,r=e,i=r.length,o=i===0?1:i,l=t.length,u=o-l|0;if(u===0)return r.apply(null,t);if(u>=0)return function(a,s){return function(v){return qi(a,s.concat([v]))}}(r,t);n=ls(t,o,-u|0),e=r.apply(null,ls(t,0,o))}}function on(e,n){var t=e.length;if(t===1)return e(n);switch(t){case 1:return e(n);case 2:return function(r){return e(n,r)};case 3:return function(r,i){return e(n,r,i)};case 4:return function(r,i,o){return e(n,r,i,o)};case 5:return function(r,i,o,l){return e(n,r,i,o,l)};case 6:return function(r,i,o,l,u){return e(n,r,i,o,l,u)};case 7:return function(r,i,o,l,u,a){return e(n,r,i,o,l,u,a)};default:return qi(e,[n])}}function Xn(e){var n=e.length;return n===1?e:function(t){return on(e,t)}}function Zc(e,n,t){var r=e.length;if(r===2)return e(n,t);switch(r){case 1:return qi(e(n),[t]);case 2:return e(n,t);case 3:return function(i){return e(n,t,i)};case 4:return function(i,o){return e(n,t,i,o)};case 5:return function(i,o,l){return e(n,t,i,o,l)};case 6:return function(i,o,l,u){return e(n,t,i,o,l,u)};case 7:return function(i,o,l,u,a){return e(n,t,i,o,l,u,a)};default:return qi(e,[n,t])}}function Wr(e){var n=e.length;return n===2?e:function(t,r){return Zc(e,t,r)}}function ht(e){return e===void 0?{BS_PRIVATE_NESTED_SOME_NONE:0}:e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function Iv(e){if(e!=null)return ht(e)}function Rv(e){if(e!==void 0)return ht(e)}function Hr(e){if(!(e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;if(n!==0)return{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}var Dv=function(e,n,t){var r,i;i=t.length;var o=[];for(r=0;r<i-1;++r)o.push(t[r]);var l=t[i-1];for(r=0;r<l.length;++r)o.push(l[r]);return e[n].apply(e,o)};function us(e,n){return n.push(e)}function Yu(e,n){return Dv(n,"concat",[e])}function Zu(e,n){return n.join(e)}function Bi(e,n,t){return t.slice(e,n)}function ut(e,n){return n.filter(Xn(e))}function Ov(e,n){return Rv(n.find(Xn(e)))}function Jc(e,n){return n.findIndex(Xn(e))}function ct(e,n){n.forEach(Xn(e))}function W(e,n){return n.map(Xn(e))}function pn(e,n){return n.map(Wr(e))}function Ue(e,n,t){return t.reduce(Wr(e),n)}function Lv(e,n){return n.some(Xn(e))}function ed(e){if(e!==void 0)return Hr(e);throw new Error("getExn")}function z(e,n){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",35,2],Error:new Error};return e[n]}function ee(e,n,t){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",45,2],Error:new Error};e[n]=t}function Mv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(e[i]);return r}function gn(e,n){return Mv(e,Xn(n))}function jv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(i,e[i]);return r}function ll(e,n){return jv(e,Wr(n))}function $v(e,n,t){for(var r=n,i=0,o=e.length;i<o;++i)r=t(r,e[i]);return r}function Vv(e,n,t){return $v(e,n,Wr(t))}function Fv(e,n,t,r,i){for(;;){var o=t;if(o===i)return!0;if(!r(e[o],n[o]))return!1;t=o+1|0}}function Gv(e,n,t){return Fv(e,n,0,t,Yc(e.length,n.length))}function Uv(e,n,t){return Gv(e,n,Wr(t))}function qv(e){for(var n=e.length,t=new Array(n),r=new Array(n),i=0;i<n;++i){var o=e[i];t[i]=o[0],r[i]=o[1]}return[t,r]}function Bv(e,n,t,r,i){for(;;){var o=t,l=n;if(o>=r)return o;var u=e[o];if(!i(u,l))return o;t=o+1|0,n=u}}function Wv(e,n){var t=e.length;if(t===0||t===1)return t;var r=e[0],i=e[1];if(n(r,i))for(var o=i,l=2;;){var u=l,a=o;if(u>=t)return u;var s=e[u];if(!n(a,s))return u;l=u+1|0,o=s}else return n(i,r)?-Bv(e,i,2,t,n)|0:1}function Ae(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t}}function Ve(e){return{v:e,h:1,l:void 0,r:void 0}}function Wi(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function cn(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;if(r>(i+2|0)){var o=e.l,l=e.r;return Wi(o,l)?Ae(o,e.v,Ae(l,n,t)):Ae(Ae(o,e.v,l.l),l.v,Ae(l.r,n,t))}if(i<=(r+2|0))return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t};var u=t.l,a=t.r;return Wi(a,u)?Ae(Ae(e,n,u),t.v,a):Ae(Ae(e,n,u.l),u.v,Ae(u.r,t.v,a))}function nd(e,n){var t=e.l;return t!==void 0?cn(nd(t,n),e.v,e.r):(n.contents=e.v,e.r)}function td(e,n){return e!==void 0?cn(td(e.l,n),e.v,e.r):Ve(n)}function rd(e,n){return e!==void 0?cn(e.l,e.v,rd(e.r,n)):Ve(n)}function qt(e,n,t){if(e===void 0)return td(t,n);if(t===void 0)return rd(e,n);var r=e.h,i=t.h;return r>(i+2|0)?cn(e.l,e.v,qt(e.r,n,t)):i>(r+2|0)?cn(qt(e,n,t.l),t.v,t.r):Ae(e,n,t)}function Vl(e){var n=e.l,t=e.r,r=n!==void 0?Vl(n):0,i=t!==void 0?Vl(t):0;return(1+r|0)+i|0}function id(e,n,t){for(;;){var r=n,i=e,o=i.v,l=i.l,u=i.r,a=l!==void 0?id(l,r,t):r;t[a]=o;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function Hv(e){if(e===void 0)return[];var n=Vl(e),t=new Array(n);return id(e,0,t),t}function Fl(e,n,t){switch(t){case 0:return;case 1:return Ve(e[n]);case 2:var r=e[n],i=e[n-1|0];return{v:i,h:2,l:Ve(r),r:void 0};case 3:var o=e[n],l=e[n-1|0],u=e[n-2|0];return{v:l,h:2,l:Ve(o),r:Ve(u)};default:var a=t/2|0,s=Fl(e,n,a),v=e[n-a|0],m=Fl(e,(n-a|0)-1|0,(t-a|0)-1|0);return Ae(s,v,m)}}function Gl(e,n,t){switch(t){case 0:return;case 1:return Ve(e[n]);case 2:var r=e[n],i=e[n+1|0];return{v:i,h:2,l:Ve(r),r:void 0};case 3:var o=e[n],l=e[n+1|0],u=e[n+2|0];return{v:l,h:2,l:Ve(o),r:Ve(u)};default:var a=t/2|0,s=Gl(e,n,a),v=e[n+a|0],m=Gl(e,(n+a|0)+1|0,(t-a|0)-1|0);return Ae(s,v,m)}}function Ju(e){var n=e.l;e.l=n.r,n.r=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.l,u=l!==void 0?l.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function ea(e){var n=e.r;e.r=n.l,n.l=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.r,u=l!==void 0?l.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function Qv(e){var n=e.l,t=ea(n);return e.l=t,Ju(e)}function Xv(e){var n=e.r,t=Ju(n);return e.r=t,ea(e)}function ii(e){var n=e.l,t=n!==void 0?n.h:0,r=e.r,i=r!==void 0?r.h:0;return e.h=(t>i?t:i)+1|0,e}function Kv(e){var n=e.l,t=e.r,r=n!==void 0?n.h:0,i=t!==void 0?t.h:0;if(r>(2+i|0)){var o=n.l,l=n.r;return Wi(o,l)?ii(Ju(e)):ii(Qv(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return Wi(a,u)?ii(ea(e)):ii(Xv(e))}return e.h=(r>i?r:i)+1|0,e}function Yv(e,n,t,r){for(;;){var i=t,o=n;if(i>=r)return i;var l=e[i];if(o<=l)return i;t=i+1|0,n=l}}function Zv(e){var n=e.length;if(n===0||n===1)return n;var t=e[0],r=e[1];if(t<r)for(var i=r,o=2;;){var l=o,u=i;if(l>=n)return l;var a=e[l];if(u>=a)return l;o=l+1|0,i=a}else return t>r?-Yv(e,r,2,n)|0:1}function Ul(e,n){if(e===void 0)return Ve(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;return n<t?e.l=Ul(r,n):e.r=Ul(i,n),Kv(e)}function Jv(e){var n=e.length;if(n!==0){var t=Zv(e),r;t>=0?r=Gl(e,0,t):(t=-t|0,r=Fl(e,t-1|0,t));for(var i=t;i<n;++i)r=Ul(r,e[i]);return r}}function Hi(e,n){if(e===void 0)return Ve(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;if(n<t){var o=Hi(r,n);return o===r?e:cn(o,t,i)}var l=Hi(i,n);return l===i?e:cn(r,t,l)}function ql(e,n){if(e===void 0)return e;var t=e.v,r=e.l,i=e.r;if(n===t){if(r===void 0)return i;if(i===void 0)return r;var o={contents:i.v},l=nd(i,o);return cn(r,o.contents,l)}if(n<t){var u=ql(r,n);return u===r?e:cn(u,t,i)}var a=ql(i,n);return a===i?e:cn(r,t,a)}function em(e,n){for(var t=n.length,r=e,i=0;i<t;++i){var o=n[i];r=ql(r,o)}return r}function Qi(e,n){var t=e.v,r=e.l,i=e.r;if(n===t)return[r,i];if(n<t){if(r===void 0)return[void 0,e];var o=Qi(r,n);return[o[0],qt(o[1],t,i)]}if(i===void 0)return[e,void 0];var l=Qi(i,n);return[qt(r,t,l[0]),l[1]]}function Dn(e,n){if(e===void 0)return n;if(n===void 0)return e;var t=e.h,r=n.h;if(t>=r){if(r===1)return Hi(e,n.v);var i=e.v,o=e.l,l=e.r,u=Qi(n,i);return qt(Dn(o,u[0]),i,Dn(l,u[1]))}if(t===1)return Hi(n,e.v);var a=n.v,s=n.l,v=n.r,m=Qi(e,a);return qt(Dn(m[0],s),a,Dn(m[1],v))}var od=Jv,Bl=Hv;function ld(e,n){return Zu(e,ut(function(t){return t!==""},n))}function ud(e,n){var t=n.slice(),r=t.shift();return Ue(e,ed(r===void 0?void 0:ht(r)),t)}function ad(e,n){var t=n.length-1|0;return Yu(pn(function(r,i){return i===t?[r]:[r,e]},n),[])}function vr(e){return Ue(Dn,void 0,e)}function nm(e){return Ue(function(n,t){return n+t|0},0,e)}function sd(e,n){if(e!==void 0)return on(n,Hr(e))}function oi(e){return ht(e)}var li,Xi=function(e,n){for(var t in e)n(t)};function mr(e,n){if(e===n)return 0;var t=typeof e,r=typeof n;switch(t){case"boolean":if(r==="boolean")return Av(e,n);break;case"function":if(r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"compare: functional value",Error:new Error};break;case"number":if(r==="number")return Pv(e,n);break;case"string":return r==="string"?Kc(e,n):1;case"undefined":return-1}switch(r){case"string":return-1;case"undefined":return 1;default:if(t==="boolean")return 1;if(r==="boolean")return-1;if(t==="function")return 1;if(r==="function")return-1;if(t==="number")return n===null||n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(r==="number")return e===null||e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e===null)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(n===null)return e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e.BS_PRIVATE_NESTED_SOME_NONE!==void 0)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?as(e,n):-1;var i=e.TAG|0,o=n.TAG|0;if(i===248)return bv(e[1],n[1]);if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return i<o?-1:1;var l=e.length|0,u=n.length|0;if(l===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===l)return 0;var v=mr(e[s],n[s]);if(v!==0)return v;a=s+1|0}else return e instanceof Date&&n instanceof Date?e-n:as(e,n);else if(l<u)for(var m=0;;){var p=m;if(p===l)return-1;var h=mr(e[p],n[p]);if(h!==0)return h;m=p+1|0}else for(var g=0;;){var y=g;if(y===u)return 1;var b=mr(e[y],n[y]);if(b!==0)return b;g=y+1|0}}}function as(e,n){var t={contents:void 0},r={contents:void 0},i=function(m,p){var h=m[2],g=m[1];if(!Object.prototype.hasOwnProperty.call(g,p)||mr(m[0][p],g[p])>0){var y=h.contents;if(!(y!==void 0&&p>=y)){h.contents=p;return}}},o=[e,n,r],l=function(m){return i(o,m)},u=[n,e,t],a=function(m){return i(u,m)};Xi(e,l),Xi(n,a);var s=t.contents,v=r.contents;return s!==void 0?v!==void 0?Kc(s,v):-1:v!==void 0?1:0}function q(e,n){if(e===n)return!0;var t=typeof e;if(t==="string"||t==="number"||t==="boolean"||t==="undefined"||e===null)return!1;var r=typeof n;if(t==="function"||r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if(r==="number"||r==="undefined"||n===null)return!1;var i=e.TAG|0,o=n.TAG|0;if(i===248)return e[1]===n[1];if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return!1;var l=e.length|0,u=n.length|0;if(l===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===l)return!0;if(!q(e[s],n[s]))return!1;a=s+1|0}else{if(e instanceof Date&&n instanceof Date)return!(e>n||e<n);var v={contents:!0},m=function(h){if(!Object.prototype.hasOwnProperty.call(n,h)){v.contents=!1;return}},p=function(h){if(!Object.prototype.hasOwnProperty.call(e,h)||!q(n[h],e[h])){v.contents=!1;return}};return Xi(e,m),v.contents&&Xi(n,p),v.contents}else return!1}function cd(e,n){return typeof e=="number"&&typeof n=="number"?e!==n:!q(e,n)}function tm(e,n){return typeof e=="number"&&typeof n=="number"?e>=n:mr(e,n)>=0}function ui(e){return{_0:e}}function Mn(e){return"1'b"+Xc(e._0)}function rm(e){return Xc(e._0)}function ai(e){return{TAG:0,_0:e}}function im(e){return{TAG:1,_0:e}}function om(e){return{TAG:2,_0:e}}function lm(e,n){return{TAG:3,_0:e,_1:0,_2:n}}function um(e,n){return{TAG:3,_0:e,_1:1,_2:n}}function am(e,n){return{TAG:3,_0:e,_1:2,_2:n}}function sm(e,n){return{TAG:3,_0:e,_1:3,_2:n}}function cm(e,n){return{TAG:3,_0:e,_1:4,_2:n}}function dm(e,n){return{TAG:3,_0:e,_1:5,_2:n}}function fm(e,n){return{TAG:3,_0:e,_1:6,_2:n}}function pm(e,n){return{TAG:3,_0:e,_1:7,_2:n}}function vm(e,n,t){return{TAG:4,_0:e,_1:n,_2:t}}function mm(e){return{_0:e}}function ss(e){return{TAG:0,_0:e}}function hm(e,n){return{TAG:1,_0:e,_1:n}}function _m(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function Wl(e){return typeof e=="number"?0:e._0}function Hl(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:case 2:return e._1}}function gm(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return Yc(e._0<e._1?e._0:e._1,e._2)}}function Ql(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return e._2}}function ym(e,n){switch(n){case 0:return Wl(e);case 1:return Hl(e);case 2:return gm(e);case 3:return Ql(e)}}function So(e,n){return ym(e,n._0)}function wm(e,n){return e!==void 0?So(e,n):0}function km(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0>e._1?e._0:e._1;case 2:return zv(e._0>e._1?e._0:e._1,e._2)}}function Em(e,n){return{TAG:2,_0:Wl(e)+Wl(n)|0,_1:Hl(e)+Hl(n)|0,_2:Ql(e)+Ql(n)|0}}function ul(e,n){switch(e){case 0:return n!==0?1:2;case 1:return n!==1?0:2;case 2:case 3:return n!==1?n!==0?2:0:1}}function Sm(e){return{TAG:0,_0:e}}function xm(e){return{TAG:1,_0:e}}function Tm(e){return{TAG:2,_0:e}}function Nm(e,n){return{TAG:3,_0:e,_1:n}}function dd(e){if(!q(e,[]))return ud(function(n,t){return{TAG:3,_0:n,_1:t}},e)}function Cm(e){return{TAG:0,_0:e}}function bm(e){return{TAG:1,_0:e}}function Am(e){return{TAG:2,_0:e}}function Pm(e){switch(e){case 0:return _v;case 1:return gv;case 2:return yv}}function fd(e){return typeof e!="number"}function zm(e){return typeof e=="number"?e===0:!0}var Im=[],Rm=[],Dm=[],Om=[],Lm=[],pd={vars:Im,nets:Rm,conts:Dm,procs:Om,finals:Lm},Mm=0,al=0,cs=0,ds=1,fs=0;function me(e){throw new Error(e)}var vd={exports:{}},xo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=Ut,$m=Symbol.for("react.element"),Vm=Symbol.for("react.fragment"),Fm=Object.prototype.hasOwnProperty,Gm=jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Um={key:!0,ref:!0,__self:!0,__source:!0};function md(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Fm.call(n,r)&&!Um.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:$m,type:e,key:o,ref:l,props:i,_owner:Gm.current}}xo.Fragment=Vm;xo.jsx=md;xo.jsxs=md;vd.exports=xo;var C=vd.exports;function hd(e){return pn(function(n,t){return C.jsx(Ut.Fragment,{children:n},String(t))},e)}function qm(e){switch(e){case 0:return"&&";case 1:return"||";case 2:return"&";case 3:return"|";case 4:return"^";case 5:return"+";case 6:return"==";case 7:return"!="}}function ye(e){switch(e.TAG|0){case 0:return Mn(e._0);case 1:return e._0;case 2:return"!"+wt(e._0);case 3:return wt(e._0)+" "+qm(e._1)+" "+wt(e._2);case 4:return wt(e._0)+" ? "+wt(e._1)+" : "+wt(e._2)}}function wt(e){switch(e.TAG|0){case 3:case 4:return"("+ye(e)+")";default:return ye(e)}}function Bm(e){return e?ye(e._0):"$time"}function na(e){if(typeof e=="number")return"";switch(e.TAG|0){case 0:return"#"+String(e._0);case 1:return"#("+String(e._0)+", "+String(e._1)+")";case 2:return"#("+String(e._0)+", "+String(e._1)+", "+String(e._2)+")"}}function ps(e){return e!==void 0?na(e)+" ":""}function Xl(e){if(typeof e=="number")return"0";switch(e.TAG|0){case 0:return"posedge "+ye(e._0);case 1:return"negedge "+ye(e._0);case 2:return ye(e._0);case 3:return Xl(e._0)+" or "+Xl(e._1)}}function Wm(e){if(typeof e=="number")return"@(*)";switch(e.TAG|0){case 0:return"#"+String(e._0);case 1:return"@("+Xl(e._0)+")";case 2:return"wait("+ye(e._0)+")"}}function vs(e,n){return'"'+e+'"'+(n.length===0?"":`,
          `)+Zu("",ad(", ",W(Bm,n)))}function _d(e){switch(e.TAG|0){case 0:return Wm(e._0);case 1:return e._0?e._1+" <= "+ps(e._2)+ye(e._3):e._1+" = "+ps(e._2)+ye(e._3);case 2:return"$display("+vs(e._0,e._1)+")";case 3:return"$monitor("+vs(e._0,e._1)+")";case 4:return"$finish("+ye(e._0)+")";case 5:return"goto +"+String(e._0);case 6:return"goto +"+String(e._1)+" unless "+ye(e._0)}}function Hm(e,n,t,r){var i=_d(t),o=" "+(q(n,r)?i+";":i+`;
`);return q(e,r)?C.jsx("b",{children:o}):o}function Qm(e,n){var t=n.length-1|0;return pn(function(r,i){return Hm(e,t,r,i)},n)}function Xm(e){return ld(" ",["assign",na(e.delay),e.lhs,"=",ye(e.rhs)+";"])}function Km(e){return e!==void 0?" = "+ye(e):""}function Ym(e){return"logic "+e.target+Km(e.init)+";"}function Zm(e){switch(e){case 0:return"wire";case 1:return"wand";case 2:return"wor"}}function Jm(e){return ld(" ",[Zm(e.type_),na(e.delay),e.name+";"])}function Ki(e){if(typeof e=="number")return e!==0?"final":"initial";switch(e._0){case 0:return"always";case 1:return"always_comb";case 2:return"always_ff";case 3:return"always_latch"}}function ms(e,n,t){var r=n.proc_type===1?[]:[C.jsx("span",{children:"// Process "+String(t+1|0),className:"comment"})],i=n.proc_type===1||z(e,t).state===0?-1:z(e,t).pc;return hd(Yu([r,[`
`+Ki(n.proc_type),` begin
`],Qm(i,n.stmts),[`
end`]],[]))}function eh(e){switch(e){case 0:return"finished";case 1:return"running";case 2:return"waiting"}}function nh(e){return e.TAG===2?C.jsx("li",{children:"nba("+e._1+" <= "+Mn(e._2)+")"},String(e._0)):me("impossible")}function sl(e,n){switch(n.TAG|0){case 0:var t=n._1;return"update("+z(e,t).lhs+"("+String(t)+")): "+Mn(n._2);case 1:return"eval(proc: "+String(n._1+1|0)+", "+n._2+" = "+Mn(n._3)+")";case 2:return"nba("+n._1+" <= "+Mn(n._2)+")";case 3:return"eval(proc: "+String(n._1+1|0)+")";case 4:return"eval-d(proc: "+String(n._1+1|0)+")";case 5:return C.jsxs("ol",{children:["NBA events:",gn(n._1,nh)]})}}function cl(e){return q(e,[])?[]:[Zu(`
`,e)]}function th(e,n){return hd(ad(`

`,Yu([cl(W(Jm,e.nets)),cl(W(Ym,e.vars)),cl(W(Xm,e.conts)),pn(function(t,r){return ms(n,t,r)},e.procs),pn(function(t,r){return ms(n,t,r)},e.finals)],[])))}function rh(e){return e!==void 0?C.jsx("code",{children:_d({TAG:3,_0:e[0],_1:e[1]})}):"No monitor"}function ve(e){return e!==void 0?e.h:0}function Me(e,n,t,r){var i=ve(e),o=ve(r);return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r}}function sn(e,n){return{k:e,v:n,h:1,l:void 0,r:void 0}}function hs(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function ih(e,n){return e.v===n?e:{k:e.k,v:n,h:e.h,l:e.l,r:e.r}}function _s(e,n,t,r){var i=e!==void 0?e.h:0,o=r!==void 0?r.h:0;if(i>(o+2|0)){var l=e.l,u=e.r;return ve(l)>=ve(u)?Me(l,e.k,e.v,Me(u,n,t,r)):Me(Me(l,e.k,e.v,u.l),u.k,u.v,Me(u.r,n,t,r))}if(o<=(i+2|0))return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r};var a=r.l,s=r.r;return ve(s)>=ve(a)?Me(Me(e,n,t,a),r.k,r.v,s):Me(Me(e,n,t,a.l),a.k,a.v,Me(a.r,r.k,r.v,s))}function Yi(e){var n=e.l,t=e.r,r=n!==void 0?Yi(n):0,i=t!==void 0?Yi(t):0;return(1+r|0)+i|0}function gd(e,n,t){for(;;){var r=n,i=e,o=i.k,l=i.l,u=i.r,a=l!==void 0?gd(l,r,t):r;t[a]=o;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function yd(e,n,t){for(;;){var r=n,i=e,o=i.l,l=i.k,u=i.r,a=o!==void 0?yd(o,r,t):r;t[a]=[l,i.v];var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function oh(e){if(e===void 0)return[];var n=Yi(e),t=new Array(n);return yd(e,0,t),t}function lh(e){if(e===void 0)return[];var n=Yi(e),t=new Array(n);return gd(e,0,t),t}function Kl(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return sn(r[0],r[1]);case 2:var i=e[n],o=e[n-1|0],l=o,u=i;return{k:l[0],v:l[1],h:2,l:sn(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n-1|0],v=e[n-2|0],m=v,p=s,h=a;return{k:p[0],v:p[1],h:2,l:sn(h[0],h[1]),r:sn(m[0],m[1])};default:var g=t/2|0,y=Kl(e,n,g),b=e[n-g|0],d=Kl(e,(n-g|0)-1|0,(t-g|0)-1|0);return Me(y,b[0],b[1],d)}}function Yl(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return sn(r[0],r[1]);case 2:var i=e[n],o=e[n+1|0],l=o,u=i;return{k:l[0],v:l[1],h:2,l:sn(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n+1|0],v=e[n+2|0],m=v,p=s,h=a;return{k:p[0],v:p[1],h:2,l:sn(h[0],h[1]),r:sn(m[0],m[1])};default:var g=t/2|0,y=Yl(e,n,g),b=e[n+g|0],d=Yl(e,(n+g|0)+1|0,(t-g|0)-1|0);return Me(y,b[0],b[1],d)}}function ta(e){var n=e.l;e.l=n.r,n.r=e;var t=ve(e.l),r=ve(e.r);e.h=(t>r?t:r)+1|0;var i=ve(n.l),o=e.h;return n.h=(i>o?i:o)+1|0,n}function ra(e){var n=e.r;e.r=n.l,n.l=e;var t=ve(e.l),r=ve(e.r);e.h=(t>r?t:r)+1|0;var i=ve(n.r),o=e.h;return n.h=(i>o?i:o)+1|0,n}function uh(e){var n=e.l,t=ra(n);return e.l=t,ta(e)}function ah(e){var n=e.r,t=ta(n);return e.r=t,ra(e)}function si(e){var n=ve(e.l),t=ve(e.r);return e.h=(n>t?n:t)+1|0,e}function sh(e){var n=e.l,t=e.r,r=ve(n),i=ve(t);if(r>(2+i|0)){var o=n.l,l=n.r;return hs(o,l)?si(ta(e)):si(uh(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return hs(a,u)?si(ra(e)):si(ah(e))}return e.h=(r>i?r:i)+1|0,e}function ch(e,n){for(;;){var t=e;if(t===void 0)return;var r=t.k;if(n===r)return ht(t.v);e=n<r?t.l:t.r}}function dh(e,n){for(;;){var t=e;if(t!==void 0){var r=t.k;if(n===r)return t.v;e=n<r?t.l:t.r;continue}throw{RE_EXN_ID:"Not_found",Error:new Error}}}function fh(e,n){for(;;){var t=e;if(t===void 0)return!1;var r=t.k;if(n===r)return!0;e=n<r?t.l:t.r}}function Zl(e,n,t){if(e===void 0)return sn(n,t);var r=e.k;if(n===r)return e.k=n,e.v=t,e;var i=e.l,o=e.r;if(n<r){var l=Zl(i,n,t);e.l=l}else e.r=Zl(o,n,t);return sh(e)}function ph(e){var n=e.length;if(n!==0){var t=Wv(e,function(l,u){return l[0]<u[0]}),r;t>=0?r=Yl(e,0,t):(t=-t|0,r=Kl(e,t-1|0,t));for(var i=t;i<n;++i){var o=e[i];r=Zl(r,o[0],o[1])}return r}}function Ze(e,n,t){if(e===void 0)return sn(n,t);var r=e.k;if(n===r)return ih(e,t);var i=e.v;return n<r?_s(Ze(e.l,n,t),r,i,e.r):_s(e.l,r,i,Ze(e.r,n,t))}var ia=fh,vh=oh,wd=ph,mh=lh,To=ch,Cr=dh,gs={contents:0};function jn(e){var n=gs.contents;return gs.contents=n+1|0,n}function hh(e){return e.TAG===2?[e._1,e._2]:me("bug: expected EventNBA")}function dl(e){return String(e._0)}var _h=[],kd=[],Ed=[],ys={active:_h,inactive:kd,nba:Ed};function gh(e){if(typeof e=="number")return e!==0?"running-finals":"running";var n=e._0;return n!==void 0?"finished("+Mn(n)+")":"finished"}function oa(e){return typeof e=="number"}function Sd(e,n){var t=Ov(function(r){return r.name===n},e);return t!==void 0?t:me("missing key")}function yh(e,n){return Lv(function(t){return t.lhs===e},n)}function Ai(e,n,t){return Zc(e,n._0,t._0)}function rn(e,n,t){return{_0:Ai(e,n,t)}}function Jl(e){return e._0===0}function j(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return t._0;case 1:return Cr(e,t._0);case 2:var r=j(e,t._0);return{_0:wv(r._0)};case 3:var i=t._1,o=t._0;if(i!==1)if(i!==0){var l=j(e,o),u=j(e,t._2);switch(i){case 0:case 1:return me("impossible");case 2:return rn(rs,l,u);case 3:return rn(is,l,u);case 4:return rn(kv,l,u);case 5:return rn(Ev,l,u);case 6:return rn(xv,l,u);case 7:return rn(Tv,l,u)}}else{var a=j(e,o);if(hv(a._0))return a;var s=j(e,t._2);return rn(rs,a,s)}else{var v=j(e,o);if(mv(v._0))return v;var m=j(e,t._2);return rn(is,v,m)}case 4:var p=t._2,h=t._1,g=j(e,t._0),y=g._0;if(y!==1){if(y!==0){var b=j(e,h),d=j(e,p);return rn(Sv,b,d)}n=h;continue}n=p;continue}}}function wh(e,n,t){return t?{TAG:0,_0:j(n,t._0)}:{TAG:1,_0:e}}function Pi(e,n){for(;;){var t=e;switch(t.TAG|0){case 0:return!1;case 1:return n===t._0;case 2:e=t._0;continue;case 3:if(Pi(t._0,n))return!0;e=t._2;continue;case 4:if(Pi(t._0,n)||Pi(t._1,n))return!0;e=t._2;continue}}}function xd(e,n,t){var r=Sd(e,n).delay;return Em(r,t)}function kh(e,n,t){for(var r=!1,i=0,o=-1,l=-1,u=function(v){return v.TAG===0?v._1===t:!1};!r&&i<e.length;){var a=z(e,i);if(a[0]>n)r=!0;else{var s=Jc(u,a[1].active);s!==-1&&(r=!0,o=i,l=s)}i=i+1|0}if(o!==-1)return[o,l]}function Eh(e,n){var t=Bi(0,n,e),r=Bi(n+1|0,e.length,e);return t.concat(r)}function Sh(e,n){switch(n){case 0:return e.active;case 1:return e.inactive;case 2:return e.nba}}function fl(e,n,t){switch(n){case 0:return{active:t,inactive:e.inactive,nba:e.nba};case 1:return{active:e.active,inactive:t,nba:e.nba};case 2:return{active:e.active,inactive:e.inactive,nba:t}}}function hr(e,n,t,r){var i=Jc(function(h){return tm(h[0],t)},e);if(i===-1){var o=fl(ys,n,[r]);return e.concat([[t,o]])}if(q(z(e,i)[0],t)){var l=z(e,i)[1],u=Sh(l,n).concat([r]),a=fl(l,n,u),s=e.slice();return ee(s,i,[t,a]),s}var v=Bi(0,i,e),m=fl(ys,n,[r]),p=Bi(i,e.length,e);return v.concat([[t,m]]).concat(p)}function hn(e,n){var t=n.pc+1|0;return t===e.stmts.length?{pc:0,state:fd(e.proc_type)?1:0}:{pc:t,state:1}}function Td(e,n,t){for(;;){var r=e;if(typeof r=="number")return!1;switch(r.TAG|0){case 0:var i=r._0,o=j(n,i),l=j(t,i);return Ai(ul,l,o)===0;case 1:var u=r._0,a=j(n,u),s=j(t,u);return Ai(ul,s,a)===1;case 2:var v=r._0,m=j(n,v),p=j(t,v);return Ai(ul,p,m)!==2;case 3:if(Td(r._0,n,t))return!0;e=r._1;continue}}}function xh(e,n,t){if(e.TAG!==0)return!1;var r=e._0;if(typeof r=="number")return!1;switch(r.TAG|0){case 0:return!1;case 1:return Td(r._0,n,t);case 2:return Jl(j(n,r._0))}}function zi(e,n,t,r){if(q(Cr(e.env,t),Cr(r,t))||e.status===1)return e;var i=e.queue.slice(),o=ut(function(c){return n!==c[1]?Pi(c[0].rhs,t):!1},pn(function(c,f){return[c,f]},e.vmodule.conts)),l=W(function(c){var f=c[0];return[f.delay,[c[1],j(e.env,f.rhs)]]},o),u=function(c,f){var _=f[1],x=_[1],w=_[0],E=xd(e.vmodule.nets,z(e.vmodule.conts,w).lhs,f[0]),S=So(E,x),R=km(E),A=kh(c,e.time+R|0,w),V;if(A!==void 0){var ce=A[0],_e=z(c,ce),X=_e[1],J=X.active.slice();if(J.splice(A[1],1),q(J,[]))V=Eh(c,ce);else{var Le=c.slice();ee(Le,ce,[_e[0],{active:J,inactive:X.inactive,nba:X.nba}]),V=Le}}else V=c;return hr(V,0,e.time+S|0,{TAG:0,_0:jn(),_1:w,_2:x})},a=Ue(u,i,l),s=W(function(c){var f=c[1];return[hn(z(e.vmodule.procs,f),c[0]),f]},ut(function(c){var f=c[0];return f.state===2?xh(z(z(e.vmodule.procs,c[1]).stmts,f.pc),e.env,r):!1},pn(function(c,f){return[c,f]},e.proc_env))),v=q(s,[])?e.proc_env:e.proc_env.slice();ct(function(c){ee(v,c[1],c[0])},s);var m=W(function(c){return{TAG:3,_0:jn(),_1:c[1]}},ut(function(c){return c[0].state===1},s)),p=z(a,0),h=p[1],g=h.active.concat(m),y=h.inactive,b=h.nba,d={active:g,inactive:y,nba:b};return ee(a,0,[p[0],d]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:v,queue:a,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}function ws(e,n,t){var r=e.proc_env.slice(),i=z(r,n),o=z(e.vmodule.procs,n),l=i.pc+t|0,u=l===o.stmts.length?{pc:0,state:fd(o.proc_type)?1:0}:{pc:l,state:i.state};return ee(r,n,u),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:r,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}function Th(e){return e.TAG===0?rm(e._0):me("expected value found time")}function Nh(e){return e.TAG===0?me("expected time found value"):String(e._0)}function Ch(e,n){for(var t="",r=0,i=0;r<e.length;)if(e[r]==="%"){r=r+1|0;var o=e[r];o==="b"?(t=t.concat(Th(z(n,i))),i=i+1|0):o==="d"?(t=t.concat(Nh(z(n,i))),i=i+1|0):me("unsupported format"),r=r+1|0}else t=t.concat(e[r]),r=r+1|0;return t=t.concat(`
`),t}function bh(e,n){return e.TAG===0?n.TAG===0?q(e._0,n._0):me("impossible"):n.TAG===0?me("impossible"):!0}function Nd(e,n,t,r){var i=e.env,o=e.time,l=W(function(v){return wh(o,i,v)},t),u=r!==void 0?Uv(l,r,bh):!1;if(u)return[l,e.output];var a=Ch(n,l),s=e.output.concat(a);return[l,s]}function Ah(e,n){var t=z(e.vmodule.procs,n),r=z(e.proc_env,n),i=z(t.stmts,r.pc);switch(i.TAG|0){case 0:var o=i._0;if(typeof o=="number")return me("impossible, all stars should have been preprocessed away");switch(o.TAG|0){case 0:var l=o._0,u=r.pc,a={pc:u,state:2},s=e.proc_env.slice();ee(s,n,a);var v=l===0?1:0,m=hr(e.queue,v,e.time+l|0,{TAG:4,_0:jn(),_1:n});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:s,queue:m,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first};case 1:var p=r.pc,h={pc:p,state:2},g=e.proc_env.slice();return ee(g,n,h),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:g,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first};case 2:var y=j(e.env,o._0),b=Jl(y)?hn(t,r):{pc:r.pc,state:2},d=e.proc_env.slice();return ee(d,n,b),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:d,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}case 1:if(i._0){var c=j(e.env,i._3),f=hn(t,r),_=e.proc_env.slice();ee(_,n,f);var x=wm(i._2,c),w=hr(e.queue,2,e.time+x|0,{TAG:2,_0:jn(),_1:i._1,_2:c});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:_,queue:w,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}var E=i._2,S=i._1,R=j(e.env,i._3);if(E!==void 0){var A=r.pc,V={pc:A,state:2},ce=e.proc_env.slice();ee(ce,n,V);var _e=So(E,R),X=_e===0?1:0,J=hr(e.queue,X,e.time+_e|0,{TAG:1,_0:jn(),_1:n,_2:S,_3:R});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:ce,queue:J,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}var Le=e.env,Cn=Ze(e.env,S,R),T=hn(t,r),P=e.proc_env.slice();ee(P,n,T);var I=e.vmodule,M=e.status,K=e.cont_env,bn=e.queue,We=e.monitor,Jn=e.output,He=e.time,vn=e.process_nba_first,Fo={vmodule:I,status:M,env:Cn,cont_env:K,proc_env:P,queue:bn,monitor:We,output:Jn,time:He,process_nba_first:vn};return zi(Fo,-1,S,Le);case 2:var Go=Nd(e,i._0,i._1,void 0),Uo=hn(t,r),Zr=e.proc_env.slice();return ee(Zr,n,Uo),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Zr,queue:e.queue,monitor:e.monitor,output:Go[1],time:e.time,process_nba_first:e.process_nba_first};case 3:var qo=[i._0,i._1,void 0],Bo=hn(t,r),Jr=e.proc_env.slice();return ee(Jr,n,Bo),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Jr,queue:e.queue,monitor:qo,output:e.output,time:e.time,process_nba_first:e.process_nba_first};case 4:var Wo=j(e.env,i._0),Ho=e.status,yt=e.vmodule,Qo={_0:Wo},Xo=e.env,Ko=e.cont_env,ei=e.proc_env,Yo=e.queue,Zo=e.monitor,Jo=e.output,el=e.time,nl=e.process_nba_first,ni={vmodule:yt,status:Qo,env:Xo,cont_env:Ko,proc_env:ei,queue:Yo,monitor:Zo,output:Jo,time:el,process_nba_first:nl};return Ho===0?Cd(ni):ni;case 5:return ws(e,n,i._0);case 6:if(!Jl(j(e.env,i._0)))return ws(e,n,i._1);var tl=hn(t,r),ti=e.proc_env.slice();return ee(ti,n,tl),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:ti,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}}function Ii(e,n){for(var t=0,r=e;t<100&&oa(r.status)&&z(r.proc_env,n).state===1;)t=t+1|0,r=Ah(r,n);return t===100&&me("time out!"),r}function Ph(e,n){for(;;){var t=n,r=e;if(t>=r.vmodule.finals.length)return r;var i=z(r.vmodule.finals,t);us(i,r.vmodule.procs);var o=us({pc:0,state:1},r.proc_env),l=Ii(r,o-1|0);if(l.vmodule.procs.pop(),l.proc_env.pop(),!oa(l.status))return l;n=t+1|0,e=l}}function Cd(e){var n=e.status,t=e.vmodule,r=e.env,i=e.cont_env,o=e.proc_env.slice(),l=e.queue,u=e.monitor,a=e.output,s=e.time,v=e.process_nba_first,m={vmodule:t,status:1,env:r,cont_env:i,proc_env:o,queue:l,monitor:u,output:a,time:s,process_nba_first:v},p=Ph(m,0);return oa(p.status)?{vmodule:p.vmodule,status:n,env:p.env,cont_env:p.cont_env,proc_env:p.proc_env,queue:p.queue,monitor:p.monitor,output:p.output,time:p.time,process_nba_first:p.process_nba_first}:p}function zh(e,n){var t=z(e,n);if(t.TAG===5){var r=t._1;if(r.length!==1){var i=r.slice();i.shift(),e[n]={TAG:5,_0:t._0,_1:i};return}e.splice(n,1);return}e.splice(n,1)}function Ih(e){var n=e.proc_type,t;if(typeof n=="number")t=0;else{var r=n._0;t=r!==1&&r<3?0:1}return{pc:t,state:1}}function Rh(e,n){return n!==void 0?j(e,n):{_0:2}}function ks(e,n){var t=W(function(o){return{TAG:3,_0:jn(),_1:o[1]}},ut(function(o){return zm(o[0].proc_type)},pn(function(o,l){return[o,l]},e.procs))),r=wd(gn(e.nets,function(o){return[o.name,{_0:yh(o.name,e.conts)?2:3}]})),i=Vv(e.vars,r,function(o,l){return Ze(o,l.target,Rh(o,l.init))});return{vmodule:e,status:0,env:i,cont_env:gn(e.conts,function(o){return{_0:2}}),proc_env:gn(e.procs,Ih),queue:[[0,{active:t,inactive:kd,nba:Ed}]],monitor:void 0,output:"",time:0,process_nba_first:n}}function Dh(e,n,t){var r=j(e.env,n.rhs),i=xd(e.vmodule.nets,n.lhs,n.delay),o=So(i,r);return[o,{TAG:0,_0:jn(),_1:t,_2:r}]}function Es(e){var n=pn(function(r,i){return Dh(e,r,i)},e.vmodule.conts),t=Ue(function(r,i){return hr(r,0,i[0],i[1])},e.queue,n);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:t,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}function Ss(e,n,t){if(!(e.status===0&&e.time===n))return!1;if(!e.process_nba_first)return!0;var r=e.queue[0];if(r===void 0)return!0;var i=r[1].active[0];return i!==void 0&&i.TAG===5?t===0:!0}function Oh(e,n){var t=z(e.queue,0),r=t[1],i=r.active.slice(),o=z(i,n);zh(i,n);var l=r.inactive,u=r.nba,a={active:i,inactive:l,nba:u},s=e.queue.slice();ee(s,0,[t[0],a]);var v=e.vmodule,m=e.status,p=e.env,h=e.cont_env,g=e.proc_env,y=e.monitor,b=e.output,d=e.time,c=e.process_nba_first,f={vmodule:v,status:m,env:p,cont_env:h,proc_env:g,queue:s,monitor:y,output:b,time:d,process_nba_first:c};switch(o.TAG|0){case 0:var _=o._1,x=h.slice();ee(x,_,o._2);var w=z(v.conts,_).lhs,E=Sd(v.nets,w),S=Pm(E.type_),R=ud(function(et,rl){return rn(S,et,rl)},W(function(et){return z(x,et[1])},ut(function(et){return et[0].lhs===w},pn(function(et,rl){return[et,rl]},v.conts)))),A=Ze(p,w,R),V=p,ce=v,_e=m,X=g,J=y,Le=b,Cn=d,T=c,P={vmodule:ce,status:_e,env:A,cont_env:x,proc_env:X,queue:s,monitor:J,output:Le,time:Cn,process_nba_first:T};return zi(P,_,w,V);case 1:var I=o._2,M=o._1,K=p,bn=Ze(p,I,o._3),We=z(g,M),Jn=z(v.procs,M),He=hn(Jn,We),vn=g.slice();ee(vn,M,He);var Fo=v,Go=m,Uo=h,Zr=y,qo=b,Bo=d,Jr=c,Wo={vmodule:Fo,status:Go,env:bn,cont_env:Uo,proc_env:vn,queue:s,monitor:Zr,output:qo,time:Bo,process_nba_first:Jr},Ho=zi(Wo,-1,I,K);return Ii(Ho,M);case 2:return me("impossible: EventNBA cannot be in active region");case 3:return Ii(f,o._1);case 4:var yt=o._1,Qo=z(v.procs,yt),Xo=z(g,yt),Ko=hn(Qo,Xo),ei=g.slice();ee(ei,yt,Ko);var Yo=v,Zo=m,Jo=p,el=h,nl=y,ni=b,tl=d,ti=c,Vp={vmodule:Yo,status:Zo,env:Jo,cont_env:el,proc_env:ei,queue:s,monitor:nl,output:ni,time:tl,process_nba_first:ti};return Ii(Vp,yt);case 5:var Fp=o._1.slice(),Ya=Fp.shift(),Gp=ed(Ya===void 0?void 0:ht(Ya)),Za=hh(Gp),Ja=Za[0],Up=p,qp=Ze(p,Ja,Za[1]),Bp=v,Wp=m,Hp=h,Qp=g,Xp=y,Kp=b,Yp=d,Zp=c,Jp={vmodule:Bp,status:Wp,env:qp,cont_env:Hp,proc_env:Qp,queue:s,monitor:Xp,output:Kp,time:Yp,process_nba_first:Zp};return zi(Jp,-1,Ja,Up)}}function xs(e,n){if(!(e.status===0&&e.time===n))return!1;var t=z(e.queue,0),r=t[1];return q(r.active,[])?cd(r.inactive,[]):!1}function Lh(e){var n=z(e.queue,0),t=n[1],r=t.inactive,i=[],o=t.nba,l={active:r,inactive:i,nba:o},u=e.queue.slice();return ee(u,0,[e.time,l]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:u,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}function Ts(e,n){if(!(e.status===0&&e.time===n))return!1;var t=z(e.queue,0),r=t[1];return q(r.active,[])&&q(r.inactive,[])?cd(r.nba,[]):!1}function Mh(e){var n=z(e.queue,0),t=n[1],r=jn(),i=t.nba,o={TAG:5,_0:r,_1:i},l=t.active.concat([o]),u=t.inactive,a=[],s={active:l,inactive:u,nba:a},v=e.queue.slice();return ee(v,0,[e.time,s]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:v,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}function Ns(e){if(e.status!==0)return!1;var n=e.queue.length;if(n===0)return me("impossible");var t=z(e.queue,0)[1];return q(t.active,[])&&q(t.inactive,[])?q(t.nba,[]):!1}function jh(e){var n=e.monitor;if(n===void 0)return e;var t=n[1],r=n[0],i=Nd(e,r,t,n[2]);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:[r,t,i[0]],output:i[1],time:e.time,process_nba_first:e.process_nba_first}}function $h(e){var n=jh(e),t=n.queue.slice();if(t.shift(),t.length===0)return Cd({vmodule:n.vmodule,status:{_0:void 0},env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:n.time,process_nba_first:n.process_nba_first});var r=z(t,0);return{vmodule:n.vmodule,status:n.status,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:r[0],process_nba_first:n.process_nba_first}}function Cs(e,n){return{TAG:0,_0:e,_1:n}}function ci(e,n,t,r){return{TAG:1,_0:e,_1:n,_2:t,_3:r}}function bs(e,n){return{TAG:2,_0:e,_1:n}}function As(e,n){return{TAG:3,_0:e,_1:n}}function Ps(e){return{TAG:4,_0:e}}function Vh(e,n){return{TAG:5,_0:e,_1:n}}function Fh(e,n,t){return{TAG:6,_0:e,_1:n,_2:t}}function Gh(e){return{TAG:7,_0:e}}function zs(e,n){return[e,n]}function Uh(e){return{TAG:0,_0:e}}function Is(e,n,t){return{TAG:1,_0:e,_1:n,_2:t}}function Rs(e,n,t){return{TAG:3,_0:e,_1:n,_2:t}}function Ds(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function qh(e,n){return{TAG:4,_0:e,_1:n}}function Bh(e){return{TAG:0,_0:e}}function Wh(e){return{TAG:1,_0:e}}function bd(e){switch(e){case"always":return{_0:0};case"always_comb":return{_0:1};case"always_ff":return{_0:2};case"always_latch":return{_0:3};case"final":return 1;case"initial":return 0;default:return me("impossible proc type")}}const Ad=ohm.grammar(String.raw`
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
             | "wait" "(" Exp ")" -- wait

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
    Event_Exp1 = "posedge" Exp -- posedge
               | "negedge" Exp -- negedge
               | Exp -- exp

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

    Exp6 = Exp6 "==" Exp7 -- eq
         | Exp6 "!=" Exp7 -- neq
         | Exp7

    Exp7 = Exp7 "+" Exp8 -- add
         | Exp8

    Exp8 = ("!" | "~") Exp8 -- not
         | Exp9

    Exp9 = id -- id
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
`),Pd=Ad.createSemantics();Pd.addOperation("translate",{Module(e,n,t,r,i,o,l){return o.children.map(u=>u.translate())},Decl_no_init(e){return zs(e.translate(),li)},Decl_init(e,n,t){return zs(e.translate(),oi(t.translate()))},GateDecl(e,n,t,r){return t.asIteration().children.map(i=>i.translate())},Top_decl(e,n,t){return Uh(n.asIteration().children.map(r=>r.translate()))},Top_net(e,n,t){return Is(e.translate(),al,n.asIteration().children.map(r=>r.translate()))},Top_net_delay(e,n,t,r){return Is(e.translate(),n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_cont(e,n,t,r,i){return Rs(n.translate(),al,r.translate())},Top_cont_delay(e,n,t,r,i,o){return Rs(t.translate(),n.translate(),i.translate())},Top_gate(e,n,t){return Ds(e.sourceString,al,n.asIteration().children.map(r=>r.translate()))},Top_gate_delay(e,n,t,r){return Ds(e.sourceString,n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_proc(e,n){return qh(e.sourceString,n.translate())},WireType(e){return this.sourceString},TimeCont_delay(e,n){return Cm(n.translate())},TimeCont_event(e,n,t,r){return bm(t.translate())},TimeCont_star(e,n,t,r){return fs},TimeCont_star_no_para(e,n){return fs},TimeCont_wait(e,n,t,r){return Am(t.translate())},Stmt_blocking(e,n,t,r){return ci(cs,e.translate(),li,t.translate())},Stmt_blocking_delay(e,n,t,r,i){return ci(cs,e.translate(),oi(t.translate()),r.translate())},Stmt_nonblocking(e,n,t,r){return ci(ds,e.translate(),li,t.translate())},Stmt_nonblocking_delay(e,n,t,r,i){return ci(ds,e.translate(),oi(t.translate()),r.translate())},Stmt_if(e,n,t,r,i){return Vh(t.translate(),i.translate())},Stmt_if_else(e,n,t,r,i,o,l){return Fh(t.translate(),i.translate(),l.translate())},Stmt_display(e,n,t,r,i,o,l){return bs(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_display_no_args(e,n,t,r,i){return bs(t.translate(),[])},Stmt_monitor(e,n,t,r,i,o,l){return As(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_monitor_no_args(e,n,t,r,i){return As(t.translate(),[])},Stmt_finish(e,n){return Ps(ai(ui(ol)))},Stmt_finish_arg(e,n,t,r,i){return Ps(t.translate())},Stmt_time_stmt(e,n){return Cs(e.translate(),oi(n.translate()))},Stmt_time(e,n){return Cs(e.translate(),li)},Stmt_block(e,n,t){return Gh(n.children.map(r=>r.translate()))},Delay_one(e,n,t,r){return ss(t.translate())},Delay_one_no_para(e,n){return ss(n.translate())},Delay_two(e,n,t,r,i,o){return hm(t.translate(),i.translate())},Delay_three(e,n,t,r,i,o,l,u){return _m(t.translate(),i.translate(),l.translate())},Event_Exp(e){return e.translate()},Event_Exp_or(e,n,t){return Nm(e.translate(),t.translate())},Event_Exp1_exp(e){return Tm(e.translate())},Event_Exp1_posedge(e,n){return Sm(n.translate())},Event_Exp1_negedge(e,n){return xm(n.translate())},Exp(e){return e.translate()},Exp_cond(e,n,t,r,i){return vm(e.translate(),t.translate(),i.translate())},Exp1(e){return e.translate()},Exp1_lor(e,n,t){return um(e.translate(),t.translate())},Exp2(e){return e.translate()},Exp2_land(e,n,t){return lm(e.translate(),t.translate())},Exp3(e){return e.translate()},Exp3_bor(e,n,t){return sm(e.translate(),t.translate())},Exp4(e){return e.translate()},Exp4_bxor(e,n,t){return cm(e.translate(),t.translate())},Exp5(e){return e.translate()},Exp5_band(e,n,t){return am(e.translate(),t.translate())},Exp6(e){return e.translate()},Exp6_eq(e,n,t){return fm(e.translate(),t.translate())},Exp6_neq(e,n,t){return pm(e.translate(),t.translate())},Exp7(e){return e.translate()},Exp7_add(e,n,t){return dm(e.translate(),t.translate())},Exp8(e){return e.translate()},Exp8_not(e,n){return om(n.translate())},Exp9_id(e){return im(e.translate())},Exp9_bit(e){return ai(e.translate())},Exp9_zero(e){return ai(ui(os))},Exp9_one(e){return ai(ui(ol))},Exp9_paren(e,n,t){return n.translate()},ExpOrTime_exp(e){return mm(e.translate())},ExpOrTime_time(e){return Mm},number(e){return parseInt(this.sourceString,10)},bit(e,n){var t;switch(n.sourceString.toLowerCase()){case"1":t=ol;break;case"0":t=os;break;case"x":t=Nv;break;case"z":t=Cv;break;default:throw"Impossible!"}return ui(t)},string(e,n,t){return n.sourceString},id(e,n){return this.sourceString}});function Hh(e){try{const n=Ad.match(e);return Bh(Pd(n).translate())}catch(n){if(n instanceof TypeError)return Wh(n.message);throw n}}function Qh(e){if(e!==void 0)return Hr(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}function Xh(e,n){if(e!==void 0)return ht(n(Hr(e)))}function Kh(e,n){return Xh(e,Xn(n))}function zd(e){return e!==void 0}var pl={contents:0};function Id(e){return pl.contents=pl.contents+1|0,e+("/"+pl.contents)}function Yh(e){return e==null?!1:typeof e.RE_EXN_ID=="string"}var Jt=Id("Compiler.CompileError");function la(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:Jt,_1:"Expected variable, found: "+ye(e),Error:new Error}}function Zh(e){return{target:e[0],init:e[1]}}function Jh(e,n,t){var r=t[0],i;switch(e){case"triand":case"wand":i=1;break;case"tri":case"wire":i=0;break;case"trior":case"wor":i=2;break;default:i=me("impossible net type")}var o=Kh(t[1],function(l){return{lhs:r,delay:0,rhs:l}});return[{type_:i,name:r,delay:n},o]}function e0(e,n){if(n.length===2){var t=la(z(n,0)),r=z(n,1);return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:Jt,_1:"Expected two arguments to not gate",Error:new Error}}function n0(e){switch(e){case"and":return 2;case"or":return 3;case"xor":return 4;default:return me("impossible gate")}}function t0(e,n,t){if(t.length===3){var r=la(z(t,0)),i=z(t,1),o=z(t,2),l={TAG:3,_0:i,_1:e,_2:o};return{lhs:r,delay:n,rhs:l}}throw{RE_EXN_ID:Jt,_1:"Expected three arguments to gate",Error:new Error}}function r0(e,n){if(n.length===3){var t=la(z(n,0)),r={TAG:2,_0:{TAG:3,_0:z(n,1),_1:3,_2:z(n,2)}};return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:Jt,_1:"Expected three arguments to gate",Error:new Error}}function Et(e){switch(e.TAG|0){case 0:var n=e._1,t=e._0;return n!==void 0?[{TAG:0,_0:t}].concat(Et(n)):[{TAG:0,_0:t}];case 1:return[{TAG:1,_0:e._0,_1:e._1,_2:e._2,_3:e._3}];case 2:return[{TAG:2,_0:e._0,_1:e._1}];case 3:return[{TAG:3,_0:e._0,_1:e._1}];case 4:return[{TAG:4,_0:e._0}];case 5:var r=Et(e._1);return[{TAG:6,_0:e._0,_1:r.length+1|0}].concat(r);case 6:var i=Et(e._1),o=Et(e._2);return[{TAG:6,_0:e._0,_1:i.length+2|0}].concat(i,[{TAG:5,_0:o.length+1|0}],o);case 7:return Ue(function(l,u){return l.concat(Et(u))},[],e._0)}}function i0(e,n){switch(n.TAG|0){case 0:var t=W(Zh,n._0);return{vars:e.vars.concat(t),nets:e.nets,conts:e.conts,procs:e.procs,finals:e.finals};case 1:var r=n._1,i=n._0,o=qv(W(function(x){return Jh(i,r,x)},n._2)),l=W(Qh,ut(zd,o[1]));return{vars:e.vars,nets:e.nets.concat(o[0]),conts:e.conts.concat(l),procs:e.procs,finals:e.finals};case 2:var u=n._2,a=n._1,s=n._0;if(s==="not"){var v=W(function(x){return e0(a,x)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(v),procs:e.procs,finals:e.finals}}if(s==="and"||s==="or"){var m=n0(s),p=W(function(x){return t0(m,a,x)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(p),procs:e.procs,finals:e.finals}}if(s==="nor"){var h=W(function(x){return r0(a,x)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(h),procs:e.procs,finals:e.finals}}throw{RE_EXN_ID:Jt,_1:"Unsupported gate: "+s,Error:new Error};case 3:var g=n._0,y=n._1,b=n._2,d={lhs:g,delay:y,rhs:b};return{vars:e.vars,nets:e.nets,conts:e.conts.concat([d]),procs:e.procs,finals:e.finals};case 4:var c=bd(n._0),f=Et(n._1),_={proc_type:c,stmts:f};return c===1?{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs,finals:e.finals.concat([_])}:{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs.concat([_]),finals:e.finals}}}function o0(e){return Ue(i0,pd,e)}var vl=wd([["empty.sv",`module empty;

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

// When treating NBA events as any other active events,
// as suggested by the standard, we run into the following
// awkwardness: nonblocking assignments are more nondeterministic
// than blocking assignments (when not allowing arbitrary process 
// interleavings).
//
// The "Process NBA events first" checkbox controls
// whether NBA events must be executed before all
// other active events.
//
// Executing all NBA events before other active events
// seems to give a more reasonable semantics (the behaviour of
// blocking and nonblocking assignments are more consistent)
// but seemingly diverges from the standard.

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

// Moreover, the "Process NBA events first" checkbox
// controls the semantics of NBA events. Two semantics
// are provided because the standard is unclear.
// When the checkbox is checked, NBA events must be
// processed before all other events in the active region.
//
// See seq/nonblocking_ndet.sv for an example.

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
`],["delay/wait1.sv",`module wait1;

logic v;
   
initial wait(v) v = 0;

initial v = 1;

endmodule
`],["delay/exps4.sv",`module exps4;

// See exps2

logic a = 0, b = 0;

always @(posedge (a == b)) $display("RUN");

initial a <= 1;

initial b <= 1;

endmodule
`],["delay/empty_delay1.sv",`module empty_delay1;

// Edge-case

initial #1;
   
always #1;

endmodule
`],["delay/zero_delay.sv",`module zero_delay;

wire a;

logic b, c, d, e;

// Example of inactive region, consider the differences between the following:

assign #0 a = 0;

initial #0 b = 0;

initial c = #0 0;

initial #0 d <= 0;

initial e <= #0 0;

endmodule
`],["delay/exps1.sv",`module exps1;

logic a = 0, b = 0;

// Runs if positive edge on either a or b;
// can therefore run twice in this module
always @(posedge a or posedge b) $display("1");

// Runs if positive edge of result of (a || b);
// will therefore run only once in this module
always @(posedge (a || b)) $display("2");

initial a = 1;

initial b = 1;

endmodule
`],["delay/exps2.sv",`module exps2;

logic a = 0, b = 0;

// Unclear if edge is w.r.t. to state at start of wait
// or w.r.t. state-by-state update while waiting
always @(posedge (a == b)) $display("RUN");

// See exps3 and exps4 for variants;
// different simulators give different results
// for different variants 

initial a = 1;

initial b = 1;

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
`],["delay/empty_delay2.sv",`module empty_delay2;

// Another edge-case

logic a;

initial #1 @(posedge a);
   
initial a = 1;

endmodule
`],["delay/exps3.sv",`module exps3;

// See exps2

logic a = 0, b = 0;

always @(posedge (a == b)) $display("RUN");

initial begin
 a = 1;
 b = 1;
end

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
`]]),ie=Id("Elaborator.ElaboratorError");function l0(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:ie,_1:"Expected data reference, found: "+ye(e),Error:new Error}}var u0=[],a0={env:void 0,out:u0};function Lt(e,n){return{env:e.env,out:e.out.concat([n])}}function s0(e,n){if(!ia(e.env,n))throw{RE_EXN_ID:ie,_1:"Undefined reference: "+n,Error:new Error}}function c0(e,n){var t=To(e.env,n);if(t!==void 0){if(t)return;throw{RE_EXN_ID:ie,_1:"Undefined var: "+n,Error:new Error}}throw{RE_EXN_ID:ie,_1:"Undefined var: "+n,Error:new Error}}function d0(e,n){var t=To(e.env,n);if(t!==void 0){if(!t)return;throw{RE_EXN_ID:ie,_1:"Undefined net: "+n,Error:new Error}}throw{RE_EXN_ID:ie,_1:"Undefined net: "+n,Error:new Error}}function xe(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return;case 1:return s0(e,t._0);case 2:n=t._0;continue;case 3:return ct(function(r){return xe(e,r)},[t._0,t._2]);case 4:return ct(function(r){return xe(e,r)},[t._0,t._1,t._2])}}}function Rd(e,n){if(typeof n!="number")return n.TAG===3?ct(function(t){return Rd(e,t)},[n._0,n._1]):xe(e,n._0)}function f0(e,n){if(typeof n!="number")switch(n.TAG|0){case 0:return;case 1:return Rd(e,n._0);case 2:return xe(e,n._0)}}function p0(e,n){if(n)return xe(e,n._0)}function v0(e,n){var t=n[1],r=n[0];if(ia(e.env,r))throw{RE_EXN_ID:ie,_1:"Name collision: "+r,Error:new Error};sd(t,function(o){return xe(e,o)});var i=Ze(e.env,r,{_0:zd(t)?1:0});return{env:i,out:e.out}}function m0(e,n){var t=n[0];if(ia(e.env,t))throw{RE_EXN_ID:ie,_1:"Name collision: "+t,Error:new Error};sd(n[1],function(i){return xe(e,i)});var r=Ze(e.env,t,0);return{env:r,out:e.out}}function h0(e,n,t){var r=To(e,t);if(r!==void 0&&r){var i=r._0;if(i!==2){if(i>=3)throw{RE_EXN_ID:ie,_1:"Cannot write to claimed variable: "+t,Error:new Error};return}if(n)throw{RE_EXN_ID:ie,_1:"Cannot write to claimed variable: "+t,Error:new Error}}}function eu(e,n,t,r){for(;;){var i=r;switch(i.TAG|0){case 0:var o=i._1;if(f0(t,i._0),o===void 0)return t;r=o;continue;case 1:var l=i._1;h0(e,n,l),c0(t,l),xe(t,i._3);var u=Ze(t.env,l,{_0:n?3:2});return{env:u,out:t.out};case 2:case 3:break;case 4:return xe(t,i._0),t;case 5:xe(t,i._0),r=i._1;continue;case 6:return xe(t,i._0),Ue(function(a,s){return eu(e,n,a,s)},t,[i._1,i._2]);case 7:return Ue(function(a,s){return eu(e,n,a,s)},t,i._0)}return ct(function(a){return p0(t,a)},i._1),t}}function _0(e,n){if(!(n.length<=0)){var t=l0(z(n,0));d0(e,t),ct(function(r){return xe(e,r)},n)}}function un(e){for(;;){var n=e;switch(n.TAG|0){case 0:return;case 1:return od([n._0]);case 2:e=n._0;continue;case 3:return Dn(un(n._0),un(n._2));case 4:return vr([un(n._0),un(n._1),un(n._2)])}}}function g0(e){if(e)return un(e._0)}function St(e){for(;;){var n=e;switch(n.TAG|0){case 0:var t=n._1;if(t===void 0)return;e=t;continue;case 1:return un(n._3);case 2:case 3:return vr(W(g0,n._1));case 4:return un(n._0);case 5:return Dn(un(n._0),St(n._1));case 6:return vr([un(n._0),St(n._1),St(n._2)]);case 7:return vr(W(St,n._0))}}}function Ri(e){for(;;){var n=e;switch(n.TAG|0){case 0:var t=n._1;if(t===void 0)return;e=t;continue;case 1:return od([n._1]);case 5:e=n._1;continue;case 6:return Dn(Ri(n._1),Ri(n._2));case 7:return vr(W(Ri,n._0));default:return}}}function Dd(e){var n=St(e),t=Ri(e),r=dd(W(function(o){return{TAG:2,_0:{TAG:1,_0:o}}},Bl(em(n,Bl(t))))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:e}}function rt(e){switch(e.TAG|0){case 0:if(typeof e._0!="number")return e;var n=e._1;if(n===void 0)return{TAG:0,_0:{TAG:1,_0:0},_1:void 0};var t=rt(n),r=dd(W(function(o){return{TAG:2,_0:{TAG:1,_0:o}}},Bl(St(t)))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:t};case 5:return{TAG:5,_0:e._0,_1:rt(e._1)};case 6:return{TAG:6,_0:e._0,_1:rt(e._1),_2:rt(e._2)};case 7:return{TAG:7,_0:W(rt,e._0)};default:return e}}function _r(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:var r=t._0;if(typeof r=="number"||r.TAG!==0)return 1;throw{RE_EXN_ID:ie,_1:"Time control not allowed inside "+Ki(e),Error:new Error};case 1:if(t._2===void 0)return 0;throw{RE_EXN_ID:ie,_1:"Delayed assignments not allowed inside "+Ki(e),Error:new Error};case 5:n=t._1;continue;case 6:return _r(e,t._1)+_r(e,t._2)|0;case 7:return nm(W(function(i){return _r(e,i)},t._0));default:return 0}}}function y0(e,n){if(q(e,{_0:1})||q(e,{_0:3})||e===1){if(_r(e,n)===0)return;throw{RE_EXN_ID:ie,_1:"Event control not allowed inside "+Ki(e),Error:new Error}}if(q(e,{_0:2})&&_r(e,n)!==1)throw{RE_EXN_ID:ie,_1:"Must be one and one only event control inside always_ff",Error:new Error}}function w0(e,n){if(typeof e=="number")return rt(n);var t=e._0;return t!==1&&t<3?rt(n):Dd(n)}function k0(e){if(typeof e!="number")switch(e.TAG|0){case 0:var n=e._0;return n===0?void 0:{TAG:0,_0:n};case 1:case 2:throw{RE_EXN_ID:ie,_1:"Delay type not supported in continuously assignments to variables yet",Error:new Error}}}function E0(e,n){var t=n[2],r=n[1],i=n[0],o=To(e.env,i);if(o!==void 0)if(o)switch(o._0){case 0:xe(e,t);var l=k0(r),u=Dd({TAG:1,_0:0,_1:i,_2:l,_3:t}),a={TAG:4,_0:"always_comb",_1:u},s=Ze(e.env,i,{_0:3});return Lt({env:s,out:e.out},a);case 1:throw{RE_EXN_ID:ie,_1:"Not allowed to write continuously to variable with initialisation: "+i,Error:new Error};case 2:case 3:throw{RE_EXN_ID:ie,_1:"Not allowed to write continuously to already claimed variable: "+i,Error:new Error}}else return xe(e,t),Lt(e,{TAG:3,_0:i,_1:r,_2:t});else throw{RE_EXN_ID:ie,_1:"Undefined reference: "+i,Error:new Error}}function S0(e){return q(e,{_0:1})||q(e,{_0:3})?!0:q(e,{_0:2})}function x0(e,n){var t=n[1],r=n[0],i=bd(r);y0(i,t);var o=eu(e.env,S0(i),e,t),l=w0(i,t);return Lt(o,{TAG:4,_0:r,_1:l})}function T0(e,n){switch(n.TAG|0){case 0:var t=Ue(v0,e,n._0);return Lt(t,n);case 1:var r=Ue(m0,e,n._2);return Lt(r,n);case 2:return ct(function(i){return _0(e,i)},n._2),Lt(e,n);case 3:return E0(e,[n._0,n._1,n._2]);case 4:return x0(e,[n._0,n._1])}}function N0(e){return Ue(T0,a0,e).out}function C0(e){return Yh(e)?e:{RE_EXN_ID:"JsError",_1:e}}function b0(e){var n=ks(pd,!0),t=Es(n),r=Ut.useState(function(){return t}),i=r[1],o=r[0],l=function(w){on(i,function(E){return Ns(E)?$h(E):E})},u=function(w){var E=w.target.checked;on(i,function(S){return{vmodule:S.vmodule,status:S.status,env:S.env,cont_env:S.cont_env,proc_env:S.proc_env,queue:S.queue,monitor:S.monitor,output:S.output,time:S.time,process_nba_first:E}})},a=Ut.useState(function(){return Cr(vl,"empty.sv")}),s=a[1],v=a[0],m=function(w){var E=Hh(v);if(E.TAG===0){var S;try{S=o0(N0(E._0))}catch(V){var R=C0(V);if(R.RE_EXN_ID===ie){window.alert("Elaboration failed: "+R._1);return}if(R.RE_EXN_ID===Jt){window.alert("Compilation failed: "+R._1);return}throw R}var A=Es(ks(S,o.process_nba_first));return on(i,function(V){return A})}window.alert("Could not parse Verilog code: "+E._0)},p=function(w){on(s,function(E){return w.target.value}),w.preventDefault()},h=function(w){var E=w.target.value;on(s,function(S){return Cr(vl,E)}),w.preventDefault()},g="Simulation time: "+String(o.time)+" ("+gh(o.status)+")",y=gn(vh(o.env),function(w){var E=w[0];return C.jsx("li",{children:E+": "+Mn(w[1])},E)}),b=ll(o.cont_env,function(w,E){return C.jsx("li",{children:z(o.vmodule.conts,w).lhs+"("+String(w)+"): "+Mn(E)},String(w))}),d=ll(o.proc_env,function(w,E){return C.jsx("li",{children:"state = "+eh(E.state)+", pc = "+String(E.pc)},String(w))}),c=gn(o.queue,function(w){var E=w[1],S=w[0],R=ll(E.active,function(X,J){var Le=Ss(o,S,X);return C.jsx("li",{children:sl(o.vmodule.conts,J),className:Le?"active":"",onClick:function(Cn){return on(i,function(T){return Ss(T,S,X)?Oh(T,X):T})}},dl(J))}),A=gn(E.inactive,function(X){return C.jsx("li",{children:sl(o.vmodule.conts,X)},dl(X))}),V=gn(E.nba,function(X){return C.jsx("li",{children:sl(o.vmodule.conts,X)},dl(X))}),ce=xs(o,S),_e=Ts(o,S);return C.jsxs("li",{children:[C.jsx("b",{children:"Time: "+String(S)}),C.jsxs("ul",{children:[C.jsxs("li",{children:["Active:",C.jsx("ul",{children:R})]}),C.jsxs("li",{children:["Inactive:",C.jsx("ul",{children:A})],className:ce?"active":"",onClick:function(X){return on(i,function(J){return xs(J,S)?Lh(J):J})}}),C.jsxs("li",{children:["NBA:",C.jsx("ul",{children:V})],className:_e?"active":"",onClick:function(X){return on(i,function(J){return Ts(J,S)?Mh(J):J})}})]})]},"Time"+String(S))}),f=rh(o.monitor),_=gn(mh(vl),function(w){return C.jsx("option",{children:w},w)}),x=Ns(o);return C.jsx("table",{children:C.jsx("tbody",{children:C.jsxs("tr",{children:[C.jsxs("td",{children:[C.jsxs("div",{children:[C.jsx("select",{children:_,defaultValue:"empty.sv",onChange:h}),C.jsxs("label",{children:[C.jsx("input",{checked:o.process_nba_first,type:"checkbox",onChange:u}),"Process NBA events first"],id:"nba-checkbox",title:"Control for the semantics of NBA events, see 00/d_concurrency.sv"})]}),C.jsx("div",{children:C.jsx("textarea",{cols:60,rows:20,value:v,onChange:p})}),C.jsx("div",{children:C.jsx("button",{children:"Parse",onClick:m})})]}),C.jsxs("td",{children:[C.jsx("p",{children:"Normalised Verilog module:",id:"code-render-title"}),C.jsx("div",{children:th(o.vmodule,o.proc_env),id:"code-render"})]}),C.jsxs("td",{children:[C.jsx("p",{children:g,className:x?"active":"",id:"simulation-time",onClick:l}),C.jsx("p",{children:"Environment:"}),C.jsx("ul",{children:y}),C.jsx("p",{children:"Drivers (continuous assignments):"}),C.jsx("ul",{children:b}),C.jsx("p",{children:"Processes:"}),C.jsx("ol",{children:d}),C.jsx("p",{children:"Events:",className:""}),C.jsx("ul",{children:c}),C.jsx("p",{children:"Monitor:"}),C.jsx("p",{children:f})]}),C.jsxs("td",{children:[C.jsx("p",{children:"Output:",id:"output"}),C.jsx("pre",{children:o.output})]})]})}),id:"main-table"})}var A0=b0;function P0(e){if(e!==void 0)return Hr(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}var Od={exports:{}},De={},Ld={exports:{}},Md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,P){var I=T.length;T.push(P);e:for(;0<I;){var M=I-1>>>1,K=T[M];if(0<i(K,P))T[M]=P,T[I]=K,I=M;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var P=T[0],I=T.pop();if(I!==P){T[0]=I;e:for(var M=0,K=T.length,bn=K>>>1;M<bn;){var We=2*(M+1)-1,Jn=T[We],He=We+1,vn=T[He];if(0>i(Jn,I))He<K&&0>i(vn,Jn)?(T[M]=vn,T[He]=I,M=He):(T[M]=Jn,T[We]=I,M=We);else if(He<K&&0>i(vn,I))T[M]=vn,T[He]=I,M=He;else break e}}return P}function i(T,P){var I=T.sortIndex-P.sortIndex;return I!==0?I:T.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var a=[],s=[],v=1,m=null,p=3,h=!1,g=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var P=t(s);P!==null;){if(P.callback===null)r(s);else if(P.startTime<=T)r(s),P.sortIndex=P.expirationTime,n(a,P);else break;P=t(s)}}function _(T){if(y=!1,f(T),!g)if(t(a)!==null)g=!0,Le(x);else{var P=t(s);P!==null&&Cn(_,P.startTime-T)}}function x(T,P){g=!1,y&&(y=!1,d(S),S=-1),h=!0;var I=p;try{for(f(P),m=t(a);m!==null&&(!(m.expirationTime>P)||T&&!V());){var M=m.callback;if(typeof M=="function"){m.callback=null,p=m.priorityLevel;var K=M(m.expirationTime<=P);P=e.unstable_now(),typeof K=="function"?m.callback=K:m===t(a)&&r(a),f(P)}else r(a);m=t(a)}if(m!==null)var bn=!0;else{var We=t(s);We!==null&&Cn(_,We.startTime-P),bn=!1}return bn}finally{m=null,p=I,h=!1}}var w=!1,E=null,S=-1,R=5,A=-1;function V(){return!(e.unstable_now()-A<R)}function ce(){if(E!==null){var T=e.unstable_now();A=T;var P=!0;try{P=E(!0,T)}finally{P?_e():(w=!1,E=null)}}else w=!1}var _e;if(typeof c=="function")_e=function(){c(ce)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,J=X.port2;X.port1.onmessage=ce,_e=function(){J.postMessage(null)}}else _e=function(){b(ce,0)};function Le(T){E=T,w||(w=!0,_e())}function Cn(T,P){S=b(function(){T(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,Le(x))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var I=p;p=P;try{return T()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=p;p=T;try{return P()}finally{p=I}},e.unstable_scheduleCallback=function(T,P,I){var M=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?M+I:M):I=M,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=I+K,T={id:v++,callback:P,priorityLevel:T,startTime:I,expirationTime:K,sortIndex:-1},I>M?(T.sortIndex=I,n(s,T),t(a)===null&&T===t(s)&&(y?(d(S),S=-1):y=!0,Cn(_,I-M))):(T.sortIndex=K,n(a,T),g||h||(g=!0,Le(x))),T},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(T){var P=p;return function(){var I=p;p=P;try{return T.apply(this,arguments)}finally{p=I}}}})(Md);Ld.exports=Md;var z0=Ld.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd=Ut,Re=z0;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $d=new Set,br={};function _t(e,n){Bt(e,n),Bt(e+"Capture",n)}function Bt(e,n){for(br[e]=n,e=0;e<n.length;e++)$d.add(n[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=Object.prototype.hasOwnProperty,I0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Os={},Ls={};function R0(e){return nu.call(Ls,e)?!0:nu.call(Os,e)?!1:I0.test(e)?Ls[e]=!0:(Os[e]=!0,!1)}function D0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O0(e,n,t,r){if(n===null||typeof n>"u"||D0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ee(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];se[n]=new Ee(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var ua=/[\-:]([a-z])/g;function aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ua,aa);se[n]=new Ee(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ua,aa);se[n]=new Ee(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ua,aa);se[n]=new Ee(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,n,t,r){var i=se.hasOwnProperty(n)?se[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(O0(n,t,i,r)&&(t=null),r||i===null?R0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Nn=jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),xt=Symbol.for("react.portal"),Tt=Symbol.for("react.fragment"),ca=Symbol.for("react.strict_mode"),tu=Symbol.for("react.profiler"),Vd=Symbol.for("react.provider"),Fd=Symbol.for("react.context"),da=Symbol.for("react.forward_ref"),ru=Symbol.for("react.suspense"),iu=Symbol.for("react.suspense_list"),fa=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Gd=Symbol.for("react.offscreen"),Ms=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Ms&&e[Ms]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ml;function cr(e){if(ml===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ml=n&&n[1]||""}return`
`+ml+e}var hl=!1;function _l(e,n){if(!e||hl)return"";hl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=u);break}}}finally{hl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?cr(e):""}function L0(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function ou(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tt:return"Fragment";case xt:return"Portal";case tu:return"Profiler";case ca:return"StrictMode";case ru:return"Suspense";case iu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fd:return(e.displayName||"Context")+".Consumer";case Vd:return(e._context.displayName||"Context")+".Provider";case da:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fa:return n=e.displayName||null,n!==null?n:ou(e.type)||"Memo";case Pn:n=e._payload,e=e._init;try{return ou(e(n))}catch{}}return null}function M0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ou(n);case 8:return n===ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ud(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function j0(e){var n=Ud(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fi(e){e._valueTracker||(e._valueTracker=j0(e))}function qd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ud(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lu(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function js(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Hn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Bd(e,n){n=n.checked,n!=null&&sa(e,"checked",n,!1)}function uu(e,n){Bd(e,n);var t=Hn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?au(e,n.type,t):n.hasOwnProperty("defaultValue")&&au(e,n.type,Hn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $s(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function au(e,n,t){(n!=="number"||Zi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var dr=Array.isArray;function Mt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Hn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function su(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(dr(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Hn(t)}}function Wd(e,n){var t=Hn(n.value),r=Hn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Fs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Hd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Hd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,Qd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ar(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$0=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){$0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),gr[n]=gr[e]})});function Xd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||gr.hasOwnProperty(e)&&gr[e]?(""+n).trim():n+"px"}function Kd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Xd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var V0=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function du(e,n){if(n){if(V0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function fu(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pu=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vu=null,jt=null,$t=null;function Gs(e){if(e=Kr(e)){if(typeof vu!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Po(n),vu(e.stateNode,e.type,n))}}function Yd(e){jt?$t?$t.push(e):$t=[e]:jt=e}function Zd(){if(jt){var e=jt,n=$t;if($t=jt=null,Gs(e),n)for(e=0;e<n.length;e++)Gs(n[e])}}function Jd(e,n){return e(n)}function ef(){}var gl=!1;function nf(e,n,t){if(gl)return e(n,t);gl=!0;try{return Jd(e,n,t)}finally{gl=!1,(jt!==null||$t!==null)&&(ef(),Zd())}}function Pr(e,n){var t=e.stateNode;if(t===null)return null;var r=Po(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var mu=!1;if(En)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){mu=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{mu=!1}function F0(e,n,t,r,i,o,l,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(v){this.onError(v)}}var yr=!1,Ji=null,eo=!1,hu=null,G0={onError:function(e){yr=!0,Ji=e}};function U0(e,n,t,r,i,o,l,u,a){yr=!1,Ji=null,F0.apply(G0,arguments)}function q0(e,n,t,r,i,o,l,u,a){if(U0.apply(this,arguments),yr){if(yr){var s=Ji;yr=!1,Ji=null}else throw Error(k(198));eo||(eo=!0,hu=s)}}function gt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function tf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Us(e){if(gt(e)!==e)throw Error(k(188))}function B0(e){var n=e.alternate;if(!n){if(n=gt(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Us(i),e;if(o===r)return Us(i),n;o=o.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function rf(e){return e=B0(e),e!==null?of(e):null}function of(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=of(e);if(n!==null)return n;e=e.sibling}return null}var lf=Re.unstable_scheduleCallback,qs=Re.unstable_cancelCallback,W0=Re.unstable_shouldYield,H0=Re.unstable_requestPaint,Z=Re.unstable_now,Q0=Re.unstable_getCurrentPriorityLevel,va=Re.unstable_ImmediatePriority,uf=Re.unstable_UserBlockingPriority,no=Re.unstable_NormalPriority,X0=Re.unstable_LowPriority,af=Re.unstable_IdlePriority,No=null,dn=null;function K0(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:J0,Y0=Math.log,Z0=Math.LN2;function J0(e){return e>>>=0,e===0?32:31-(Y0(e)/Z0|0)|0}var vi=64,mi=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function to(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~i;u!==0?r=fr(u):(o&=l,o!==0&&(r=fr(o)))}else l=t&~i,l!==0?r=fr(l):o!==0&&(r=fr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Je(n),i=1<<t,r|=e[t],n&=~i;return r}function e_(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n_(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Je(o),u=1<<l,a=i[l];a===-1?(!(u&t)||u&r)&&(i[l]=e_(u,n)):a<=n&&(e.expiredLanes|=u),o&=~u}}function _u(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sf(){var e=vi;return vi<<=1,!(vi&4194240)&&(vi=64),e}function yl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Qr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Je(n),e[n]=t}function t_(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Je(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function ma(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Je(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var L=0;function cf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var df,ha,ff,pf,vf,gu=!1,hi=[],$n=null,Vn=null,Fn=null,zr=new Map,Ir=new Map,In=[],r_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bs(e,n){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":zr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(n.pointerId)}}function ir(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Kr(n),n!==null&&ha(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function i_(e,n,t,r,i){switch(n){case"focusin":return $n=ir($n,e,n,t,r,i),!0;case"dragenter":return Vn=ir(Vn,e,n,t,r,i),!0;case"mouseover":return Fn=ir(Fn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return zr.set(o,ir(zr.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ir.set(o,ir(Ir.get(o)||null,e,n,t,r,i)),!0}return!1}function mf(e){var n=it(e.target);if(n!==null){var t=gt(n);if(t!==null){if(n=t.tag,n===13){if(n=tf(t),n!==null){e.blockedOn=n,vf(e.priority,function(){ff(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Di(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=yu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);pu=r,t.target.dispatchEvent(r),pu=null}else return n=Kr(t),n!==null&&ha(n),e.blockedOn=t,!1;n.shift()}return!0}function Ws(e,n,t){Di(e)&&t.delete(n)}function o_(){gu=!1,$n!==null&&Di($n)&&($n=null),Vn!==null&&Di(Vn)&&(Vn=null),Fn!==null&&Di(Fn)&&(Fn=null),zr.forEach(Ws),Ir.forEach(Ws)}function or(e,n){e.blockedOn===n&&(e.blockedOn=null,gu||(gu=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,o_)))}function Rr(e){function n(i){return or(i,e)}if(0<hi.length){or(hi[0],e);for(var t=1;t<hi.length;t++){var r=hi[t];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&or($n,e),Vn!==null&&or(Vn,e),Fn!==null&&or(Fn,e),zr.forEach(n),Ir.forEach(n),t=0;t<In.length;t++)r=In[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<In.length&&(t=In[0],t.blockedOn===null);)mf(t),t.blockedOn===null&&In.shift()}var Vt=Nn.ReactCurrentBatchConfig,ro=!0;function l_(e,n,t,r){var i=L,o=Vt.transition;Vt.transition=null;try{L=1,_a(e,n,t,r)}finally{L=i,Vt.transition=o}}function u_(e,n,t,r){var i=L,o=Vt.transition;Vt.transition=null;try{L=4,_a(e,n,t,r)}finally{L=i,Vt.transition=o}}function _a(e,n,t,r){if(ro){var i=yu(e,n,t,r);if(i===null)Al(e,n,r,io,t),Bs(e,r);else if(i_(i,e,n,t,r))r.stopPropagation();else if(Bs(e,r),n&4&&-1<r_.indexOf(e)){for(;i!==null;){var o=Kr(i);if(o!==null&&df(o),o=yu(e,n,t,r),o===null&&Al(e,n,r,io,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Al(e,n,r,null,t)}}var io=null;function yu(e,n,t,r){if(io=null,e=pa(r),e=it(e),e!==null)if(n=gt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=tf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return io=e,null}function hf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q0()){case va:return 1;case uf:return 4;case no:case X0:return 16;case af:return 536870912;default:return 16}default:return 16}}var On=null,ga=null,Oi=null;function _f(){if(Oi)return Oi;var e,n=ga,t=n.length,r,i="value"in On?On.value:On.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Oi=i.slice(e,1<r?1-r:void 0)}function Li(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _i(){return!0}function Hs(){return!1}function Oe(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_i:Hs,this.isPropagationStopped=Hs,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=Oe(er),Xr=Q({},er,{view:0,detail:0}),a_=Oe(Xr),wl,kl,lr,Co=Q({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(wl=e.screenX-lr.screenX,kl=e.screenY-lr.screenY):kl=wl=0,lr=e),wl)},movementY:function(e){return"movementY"in e?e.movementY:kl}}),Qs=Oe(Co),s_=Q({},Co,{dataTransfer:0}),c_=Oe(s_),d_=Q({},Xr,{relatedTarget:0}),El=Oe(d_),f_=Q({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),p_=Oe(f_),v_=Q({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),m_=Oe(v_),h_=Q({},er,{data:0}),Xs=Oe(h_),__={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=y_[e])?!!n[e]:!1}function wa(){return w_}var k_=Q({},Xr,{key:function(e){if(e.key){var n=__[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?g_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E_=Oe(k_),S_=Q({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ks=Oe(S_),x_=Q({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),T_=Oe(x_),N_=Q({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),C_=Oe(N_),b_=Q({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A_=Oe(b_),P_=[9,13,27,32],ka=En&&"CompositionEvent"in window,wr=null;En&&"documentMode"in document&&(wr=document.documentMode);var z_=En&&"TextEvent"in window&&!wr,gf=En&&(!ka||wr&&8<wr&&11>=wr),Ys=String.fromCharCode(32),Zs=!1;function yf(e,n){switch(e){case"keyup":return P_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nt=!1;function I_(e,n){switch(e){case"compositionend":return wf(n);case"keypress":return n.which!==32?null:(Zs=!0,Ys);case"textInput":return e=n.data,e===Ys&&Zs?null:e;default:return null}}function R_(e,n){if(Nt)return e==="compositionend"||!ka&&yf(e,n)?(e=_f(),Oi=ga=On=null,Nt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gf&&n.locale!=="ko"?null:n.data;default:return null}}var D_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!D_[e.type]:n==="textarea"}function kf(e,n,t,r){Yd(r),n=oo(n,"onChange"),0<n.length&&(t=new ya("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var kr=null,Dr=null;function O_(e){If(e,0)}function bo(e){var n=At(e);if(qd(n))return e}function L_(e,n){if(e==="change")return n}var Ef=!1;if(En){var Sl;if(En){var xl="oninput"in document;if(!xl){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),xl=typeof ec.oninput=="function"}Sl=xl}else Sl=!1;Ef=Sl&&(!document.documentMode||9<document.documentMode)}function nc(){kr&&(kr.detachEvent("onpropertychange",Sf),Dr=kr=null)}function Sf(e){if(e.propertyName==="value"&&bo(Dr)){var n=[];kf(n,Dr,e,pa(e)),nf(O_,n)}}function M_(e,n,t){e==="focusin"?(nc(),kr=n,Dr=t,kr.attachEvent("onpropertychange",Sf)):e==="focusout"&&nc()}function j_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(Dr)}function $_(e,n){if(e==="click")return bo(n)}function V_(e,n){if(e==="input"||e==="change")return bo(n)}function F_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var nn=typeof Object.is=="function"?Object.is:F_;function Or(e,n){if(nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!nu.call(n,i)||!nn(e[i],n[i]))return!1}return!0}function tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,n){var t=tc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=tc(t)}}function xf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tf(){for(var e=window,n=Zi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Zi(e.document)}return n}function Ea(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function G_(e){var n=Tf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&xf(t.ownerDocument.documentElement,t)){if(r!==null&&Ea(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rc(t,o);var l=rc(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var U_=En&&"documentMode"in document&&11>=document.documentMode,Ct=null,wu=null,Er=null,ku=!1;function ic(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ku||Ct==null||Ct!==Zi(r)||(r=Ct,"selectionStart"in r&&Ea(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Or(Er,r)||(Er=r,r=oo(wu,"onSelect"),0<r.length&&(n=new ya("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ct)))}function gi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var bt={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},Tl={},Nf={};En&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function Ao(e){if(Tl[e])return Tl[e];if(!bt[e])return e;var n=bt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Nf)return Tl[e]=n[t];return e}var Cf=Ao("animationend"),bf=Ao("animationiteration"),Af=Ao("animationstart"),Pf=Ao("transitionend"),zf=new Map,oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,n){zf.set(e,n),_t(n,[e])}for(var Nl=0;Nl<oc.length;Nl++){var Cl=oc[Nl],q_=Cl.toLowerCase(),B_=Cl[0].toUpperCase()+Cl.slice(1);Kn(q_,"on"+B_)}Kn(Cf,"onAnimationEnd");Kn(bf,"onAnimationIteration");Kn(Af,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Pf,"onTransitionEnd");Bt("onMouseEnter",["mouseout","mouseover"]);Bt("onMouseLeave",["mouseout","mouseover"]);Bt("onPointerEnter",["pointerout","pointerover"]);Bt("onPointerLeave",["pointerout","pointerover"]);_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_t("onBeforeInput",["compositionend","keypress","textInput","paste"]);_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W_=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function lc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,q0(r,n,void 0,e),e.currentTarget=null}function If(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==o&&i.isPropagationStopped())break e;lc(i,u,s),o=a}else for(l=0;l<r.length;l++){if(u=r[l],a=u.instance,s=u.currentTarget,u=u.listener,a!==o&&i.isPropagationStopped())break e;lc(i,u,s),o=a}}}if(eo)throw e=hu,eo=!1,hu=null,e}function F(e,n){var t=n[Nu];t===void 0&&(t=n[Nu]=new Set);var r=e+"__bubble";t.has(r)||(Rf(n,e,2,!1),t.add(r))}function bl(e,n,t){var r=0;n&&(r|=4),Rf(t,e,r,n)}var yi="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[yi]){e[yi]=!0,$d.forEach(function(t){t!=="selectionchange"&&(W_.has(t)||bl(t,!1,e),bl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[yi]||(n[yi]=!0,bl("selectionchange",!1,n))}}function Rf(e,n,t,r){switch(hf(n)){case 1:var i=l_;break;case 4:i=u_;break;default:i=_a}t=i.bind(null,n,t,e),i=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Al(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;u!==null;){if(l=it(u),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}u=u.parentNode}}r=r.return}nf(function(){var s=o,v=pa(t),m=[];e:{var p=zf.get(e);if(p!==void 0){var h=ya,g=e;switch(e){case"keypress":if(Li(t)===0)break e;case"keydown":case"keyup":h=E_;break;case"focusin":g="focus",h=El;break;case"focusout":g="blur",h=El;break;case"beforeblur":case"afterblur":h=El;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=c_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=T_;break;case Cf:case bf:case Af:h=p_;break;case Pf:h=C_;break;case"scroll":h=a_;break;case"wheel":h=A_;break;case"copy":case"cut":case"paste":h=m_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ks}var y=(n&4)!==0,b=!y&&e==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var c=s,f;c!==null;){f=c;var _=f.stateNode;if(f.tag===5&&_!==null&&(f=_,d!==null&&(_=Pr(c,d),_!=null&&y.push(Mr(c,_,f)))),b)break;c=c.return}0<y.length&&(p=new h(p,g,null,t,v),m.push({event:p,listeners:y}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==pu&&(g=t.relatedTarget||t.fromElement)&&(it(g)||g[Sn]))break e;if((h||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,h?(g=t.relatedTarget||t.toElement,h=s,g=g?it(g):null,g!==null&&(b=gt(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=s),h!==g)){if(y=Qs,_="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ks,_="onPointerLeave",d="onPointerEnter",c="pointer"),b=h==null?p:At(h),f=g==null?p:At(g),p=new y(_,c+"leave",h,t,v),p.target=b,p.relatedTarget=f,_=null,it(v)===s&&(y=new y(d,c+"enter",g,t,v),y.target=f,y.relatedTarget=b,_=y),b=_,h&&g)n:{for(y=h,d=g,c=0,f=y;f;f=kt(f))c++;for(f=0,_=d;_;_=kt(_))f++;for(;0<c-f;)y=kt(y),c--;for(;0<f-c;)d=kt(d),f--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break n;y=kt(y),d=kt(d)}y=null}else y=null;h!==null&&uc(m,p,h,y,!1),g!==null&&b!==null&&uc(m,b,g,y,!0)}}e:{if(p=s?At(s):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var x=L_;else if(Js(p))if(Ef)x=V_;else{x=j_;var w=M_}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=$_);if(x&&(x=x(e,s))){kf(m,x,t,v);break e}w&&w(e,p,s),e==="focusout"&&(w=p._wrapperState)&&w.controlled&&p.type==="number"&&au(p,"number",p.value)}switch(w=s?At(s):window,e){case"focusin":(Js(w)||w.contentEditable==="true")&&(Ct=w,wu=s,Er=null);break;case"focusout":Er=wu=Ct=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,ic(m,t,v);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":ic(m,t,v)}var E;if(ka)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Nt?yf(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(gf&&t.locale!=="ko"&&(Nt||S!=="onCompositionStart"?S==="onCompositionEnd"&&Nt&&(E=_f()):(On=v,ga="value"in On?On.value:On.textContent,Nt=!0)),w=oo(s,S),0<w.length&&(S=new Xs(S,e,null,t,v),m.push({event:S,listeners:w}),E?S.data=E:(E=wf(t),E!==null&&(S.data=E)))),(E=z_?I_(e,t):R_(e,t))&&(s=oo(s,"onBeforeInput"),0<s.length&&(v=new Xs("onBeforeInput","beforeinput",null,t,v),m.push({event:v,listeners:s}),v.data=E))}If(m,n)})}function Mr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function oo(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pr(e,t),o!=null&&r.unshift(Mr(e,o,i)),o=Pr(e,n),o!=null&&r.push(Mr(e,o,i))),e=e.return}return r}function kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uc(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=Pr(t,o),a!=null&&l.unshift(Mr(t,a,u))):i||(a=Pr(t,o),a!=null&&l.push(Mr(t,a,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var H_=/\r\n?/g,Q_=/\u0000|\uFFFD/g;function ac(e){return(typeof e=="string"?e:""+e).replace(H_,`
`).replace(Q_,"")}function wi(e,n,t){if(n=ac(n),ac(e)!==n&&t)throw Error(k(425))}function lo(){}var Eu=null,Su=null;function xu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,X_=typeof clearTimeout=="function"?clearTimeout:void 0,sc=typeof Promise=="function"?Promise:void 0,K_=typeof queueMicrotask=="function"?queueMicrotask:typeof sc<"u"?function(e){return sc.resolve(null).then(e).catch(Y_)}:Tu;function Y_(e){setTimeout(function(){throw e})}function Pl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Rr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Rr(n)}function Gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function cc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),an="__reactFiber$"+nr,jr="__reactProps$"+nr,Sn="__reactContainer$"+nr,Nu="__reactEvents$"+nr,Z_="__reactListeners$"+nr,J_="__reactHandles$"+nr;function it(e){var n=e[an];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Sn]||t[an]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cc(e);e!==null;){if(t=e[an])return t;e=cc(e)}return n}e=t,t=e.parentNode}return null}function Kr(e){return e=e[an]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Po(e){return e[jr]||null}var Cu=[],Pt=-1;function Yn(e){return{current:e}}function G(e){0>Pt||(e.current=Cu[Pt],Cu[Pt]=null,Pt--)}function $(e,n){Pt++,Cu[Pt]=e.current,e.current=n}var Qn={},he=Yn(Qn),Ne=Yn(!1),dt=Qn;function Wt(e,n){var t=e.type.contextTypes;if(!t)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function uo(){G(Ne),G(he)}function dc(e,n,t){if(he.current!==Qn)throw Error(k(168));$(he,n),$(Ne,t)}function Df(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,M0(e)||"Unknown",i));return Q({},t,r)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,dt=he.current,$(he,e),$(Ne,Ne.current),!0}function fc(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Df(e,n,dt),r.__reactInternalMemoizedMergedChildContext=e,G(Ne),G(he),$(he,e)):G(Ne),$(Ne,t)}var _n=null,zo=!1,zl=!1;function Of(e){_n===null?_n=[e]:_n.push(e)}function e1(e){zo=!0,Of(e)}function Zn(){if(!zl&&_n!==null){zl=!0;var e=0,n=L;try{var t=_n;for(L=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}_n=null,zo=!1}catch(i){throw _n!==null&&(_n=_n.slice(e+1)),lf(va,Zn),i}finally{L=n,zl=!1}}return null}var zt=[],It=0,so=null,co=0,je=[],$e=0,ft=null,yn=1,wn="";function nt(e,n){zt[It++]=co,zt[It++]=so,so=e,co=n}function Lf(e,n,t){je[$e++]=yn,je[$e++]=wn,je[$e++]=ft,ft=e;var r=yn;e=wn;var i=32-Je(r)-1;r&=~(1<<i),t+=1;var o=32-Je(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,yn=1<<32-Je(n)+i|t<<i|r,wn=o+e}else yn=1<<o|t<<i|r,wn=e}function Sa(e){e.return!==null&&(nt(e,1),Lf(e,1,0))}function xa(e){for(;e===so;)so=zt[--It],zt[It]=null,co=zt[--It],zt[It]=null;for(;e===ft;)ft=je[--$e],je[$e]=null,wn=je[--$e],je[$e]=null,yn=je[--$e],je[$e]=null}var Ie=null,ze=null,U=!1,Ye=null;function Mf(e,n){var t=Fe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function pc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ie=e,ze=Gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ie=e,ze=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ft!==null?{id:yn,overflow:wn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Fe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ie=e,ze=null,!0):!1;default:return!1}}function bu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Au(e){if(U){var n=ze;if(n){var t=n;if(!pc(e,n)){if(bu(e))throw Error(k(418));n=Gn(t.nextSibling);var r=Ie;n&&pc(e,n)?Mf(r,t):(e.flags=e.flags&-4097|2,U=!1,Ie=e)}}else{if(bu(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,Ie=e}}}function vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function ki(e){if(e!==Ie)return!1;if(!U)return vc(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!xu(e.type,e.memoizedProps)),n&&(n=ze)){if(bu(e))throw jf(),Error(k(418));for(;n;)Mf(e,n),n=Gn(n.nextSibling)}if(vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ze=Gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ze=null}}else ze=Ie?Gn(e.stateNode.nextSibling):null;return!0}function jf(){for(var e=ze;e;)e=Gn(e.nextSibling)}function Ht(){ze=Ie=null,U=!1}function Ta(e){Ye===null?Ye=[e]:Ye.push(e)}var n1=Nn.ReactCurrentBatchConfig;function Xe(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var fo=Yn(null),po=null,Rt=null,Na=null;function Ca(){Na=Rt=po=null}function ba(e){var n=fo.current;G(fo),e._currentValue=n}function Pu(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ft(e,n){po=e,Na=Rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Te=!0),e.firstContext=null)}function qe(e){var n=e._currentValue;if(Na!==e)if(e={context:e,memoizedValue:n,next:null},Rt===null){if(po===null)throw Error(k(308));Rt=e,po.dependencies={lanes:0,firstContext:e}}else Rt=Rt.next=e;return n}var ot=null;function Aa(e){ot===null?ot=[e]:ot.push(e)}function $f(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Aa(n)):(t.next=i.next,i.next=t),n.interleaved=t,xn(e,r)}function xn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var zn=!1;function Pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,xn(e,t)}return i=r.interleaved,i===null?(n.next=n,Aa(r)):(n.next=i.next,i.next=n),r.interleaved=n,xn(e,t)}function Mi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ma(e,t)}}function mc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function vo(e,n,t,r){var i=e.updateQueue;zn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,l===null?o=s:l.next=s,l=a;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==l&&(u===null?v.firstBaseUpdate=s:u.next=s,v.lastBaseUpdate=a))}if(o!==null){var m=i.baseState;l=0,v=s=a=null,u=o;do{var p=u.lane,h=u.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,y=u;switch(p=n,h=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){m=g.call(h,m,p);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,p=typeof g=="function"?g.call(h,m,p):g,p==null)break e;m=Q({},m,p);break e;case 2:zn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else h={eventTime:h,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(s=v=h,a=m):v=v.next=h,l|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(v===null&&(a=m),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);vt|=l,e.lanes=l,e.memoizedState=m}}function hc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Ff=new jd.Component().refs;function zu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Io={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=we(),i=Bn(e),o=kn(r,i);o.payload=n,t!=null&&(o.callback=t),n=Un(e,o,i),n!==null&&(en(n,e,i,r),Mi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=we(),i=Bn(e),o=kn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Un(e,o,i),n!==null&&(en(n,e,i,r),Mi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=we(),r=Bn(e),i=kn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Un(e,i,r),n!==null&&(en(n,e,r,t),Mi(n,e,r))}};function _c(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Or(t,r)||!Or(i,o):!0}function Gf(e,n,t){var r=!1,i=Qn,o=n.contextType;return typeof o=="object"&&o!==null?o=qe(o):(i=Ce(n)?dt:he.current,r=n.contextTypes,o=(r=r!=null)?Wt(e,i):Qn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Io,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function gc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Io.enqueueReplaceState(n,n.state,null)}function Iu(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Ff,Pa(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=qe(o):(o=Ce(n)?dt:he.current,i.context=Wt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(zu(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Io.enqueueReplaceState(i,i.state,null),vo(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var u=i.refs;u===Ff&&(u=i.refs={}),l===null?delete u[o]:u[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Ei(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function yc(e){var n=e._init;return n(e._payload)}function Uf(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Wn(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,c,f,_){return c===null||c.tag!==6?(c=jl(f,d.mode,_),c.return=d,c):(c=i(c,f),c.return=d,c)}function a(d,c,f,_){var x=f.type;return x===Tt?v(d,c,f.props.children,_,f.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Pn&&yc(x)===c.type)?(_=i(c,f.props),_.ref=ur(d,c,f),_.return=d,_):(_=Ui(f.type,f.key,f.props,null,d.mode,_),_.ref=ur(d,c,f),_.return=d,_)}function s(d,c,f,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=$l(f,d.mode,_),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function v(d,c,f,_,x){return c===null||c.tag!==7?(c=st(f,d.mode,_,x),c.return=d,c):(c=i(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=jl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case di:return f=Ui(c.type,c.key,c.props,null,d.mode,f),f.ref=ur(d,null,c),f.return=d,f;case xt:return c=$l(c,d.mode,f),c.return=d,c;case Pn:var _=c._init;return m(d,_(c._payload),f)}if(dr(c)||tr(c))return c=st(c,d.mode,f,null),c.return=d,c;Ei(d,c)}return null}function p(d,c,f,_){var x=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:u(d,c,""+f,_);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case di:return f.key===x?a(d,c,f,_):null;case xt:return f.key===x?s(d,c,f,_):null;case Pn:return x=f._init,p(d,c,x(f._payload),_)}if(dr(f)||tr(f))return x!==null?null:v(d,c,f,_,null);Ei(d,f)}return null}function h(d,c,f,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(f)||null,u(c,d,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case di:return d=d.get(_.key===null?f:_.key)||null,a(c,d,_,x);case xt:return d=d.get(_.key===null?f:_.key)||null,s(c,d,_,x);case Pn:var w=_._init;return h(d,c,f,w(_._payload),x)}if(dr(_)||tr(_))return d=d.get(f)||null,v(c,d,_,x,null);Ei(c,_)}return null}function g(d,c,f,_){for(var x=null,w=null,E=c,S=c=0,R=null;E!==null&&S<f.length;S++){E.index>S?(R=E,E=null):R=E.sibling;var A=p(d,E,f[S],_);if(A===null){E===null&&(E=R);break}e&&E&&A.alternate===null&&n(d,E),c=o(A,c,S),w===null?x=A:w.sibling=A,w=A,E=R}if(S===f.length)return t(d,E),U&&nt(d,S),x;if(E===null){for(;S<f.length;S++)E=m(d,f[S],_),E!==null&&(c=o(E,c,S),w===null?x=E:w.sibling=E,w=E);return U&&nt(d,S),x}for(E=r(d,E);S<f.length;S++)R=h(E,d,S,f[S],_),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?S:R.key),c=o(R,c,S),w===null?x=R:w.sibling=R,w=R);return e&&E.forEach(function(V){return n(d,V)}),U&&nt(d,S),x}function y(d,c,f,_){var x=tr(f);if(typeof x!="function")throw Error(k(150));if(f=x.call(f),f==null)throw Error(k(151));for(var w=x=null,E=c,S=c=0,R=null,A=f.next();E!==null&&!A.done;S++,A=f.next()){E.index>S?(R=E,E=null):R=E.sibling;var V=p(d,E,A.value,_);if(V===null){E===null&&(E=R);break}e&&E&&V.alternate===null&&n(d,E),c=o(V,c,S),w===null?x=V:w.sibling=V,w=V,E=R}if(A.done)return t(d,E),U&&nt(d,S),x;if(E===null){for(;!A.done;S++,A=f.next())A=m(d,A.value,_),A!==null&&(c=o(A,c,S),w===null?x=A:w.sibling=A,w=A);return U&&nt(d,S),x}for(E=r(d,E);!A.done;S++,A=f.next())A=h(E,d,S,A.value,_),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?S:A.key),c=o(A,c,S),w===null?x=A:w.sibling=A,w=A);return e&&E.forEach(function(ce){return n(d,ce)}),U&&nt(d,S),x}function b(d,c,f,_){if(typeof f=="object"&&f!==null&&f.type===Tt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case di:e:{for(var x=f.key,w=c;w!==null;){if(w.key===x){if(x=f.type,x===Tt){if(w.tag===7){t(d,w.sibling),c=i(w,f.props.children),c.return=d,d=c;break e}}else if(w.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Pn&&yc(x)===w.type){t(d,w.sibling),c=i(w,f.props),c.ref=ur(d,w,f),c.return=d,d=c;break e}t(d,w);break}else n(d,w);w=w.sibling}f.type===Tt?(c=st(f.props.children,d.mode,_,f.key),c.return=d,d=c):(_=Ui(f.type,f.key,f.props,null,d.mode,_),_.ref=ur(d,c,f),_.return=d,d=_)}return l(d);case xt:e:{for(w=f.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=$l(f,d.mode,_),c.return=d,d=c}return l(d);case Pn:return w=f._init,b(d,c,w(f._payload),_)}if(dr(f))return g(d,c,f,_);if(tr(f))return y(d,c,f,_);Ei(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=i(c,f),c.return=d,d=c):(t(d,c),c=jl(f,d.mode,_),c.return=d,d=c),l(d)):t(d,c)}return b}var Qt=Uf(!0),qf=Uf(!1),Yr={},fn=Yn(Yr),$r=Yn(Yr),Vr=Yn(Yr);function lt(e){if(e===Yr)throw Error(k(174));return e}function za(e,n){switch($(Vr,n),$($r,e),$(fn,Yr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:cu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=cu(n,e)}G(fn),$(fn,n)}function Xt(){G(fn),G($r),G(Vr)}function Bf(e){lt(Vr.current);var n=lt(fn.current),t=cu(n,e.type);n!==t&&($($r,e),$(fn,t))}function Ia(e){$r.current===e&&(G(fn),G($r))}var B=Yn(0);function mo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Il=[];function Ra(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var ji=Nn.ReactCurrentDispatcher,Rl=Nn.ReactCurrentBatchConfig,pt=0,H=null,te=null,oe=null,ho=!1,Sr=!1,Fr=0,t1=0;function de(){throw Error(k(321))}function Da(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!nn(e[t],n[t]))return!1;return!0}function Oa(e,n,t,r,i,o){if(pt=o,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ji.current=e===null||e.memoizedState===null?l1:u1,e=t(r,i),Sr){o=0;do{if(Sr=!1,Fr=0,25<=o)throw Error(k(301));o+=1,oe=te=null,n.updateQueue=null,ji.current=a1,e=t(r,i)}while(Sr)}if(ji.current=_o,n=te!==null&&te.next!==null,pt=0,oe=te=H=null,ho=!1,n)throw Error(k(300));return e}function La(){var e=Fr!==0;return Fr=0,e}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?H.memoizedState=oe=e:oe=oe.next=e,oe}function Be(){if(te===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=oe===null?H.memoizedState:oe.next;if(n!==null)oe=n,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},oe===null?H.memoizedState=oe=e:oe=oe.next=e}return oe}function Gr(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=Be(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,a=null,s=o;do{var v=s.lane;if((pt&v)===v)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:v,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=m,l=r):a=a.next=m,H.lanes|=v,vt|=v}s=s.next}while(s!==null&&s!==o);a===null?l=r:a.next=u,nn(r,n.memoizedState)||(Te=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,vt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ol(e){var n=Be(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);nn(o,n.memoizedState)||(Te=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Wf(){}function Hf(e,n){var t=H,r=Be(),i=n(),o=!nn(r.memoizedState,i);if(o&&(r.memoizedState=i,Te=!0),r=r.queue,Ma(Kf.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||oe!==null&&oe.memoizedState.tag&1){if(t.flags|=2048,Ur(9,Xf.bind(null,t,r,i,n),void 0,null),le===null)throw Error(k(349));pt&30||Qf(t,n,i)}return i}function Qf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Xf(e,n,t,r){n.value=t,n.getSnapshot=r,Yf(n)&&Zf(e)}function Kf(e,n,t){return t(function(){Yf(n)&&Zf(e)})}function Yf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!nn(e,t)}catch{return!0}}function Zf(e){var n=xn(e,1);n!==null&&en(n,e,1,-1)}function wc(e){var n=ln();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},n.queue=e,e=e.dispatch=o1.bind(null,H,e),[n.memoizedState,e]}function Ur(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Jf(){return Be().memoizedState}function $i(e,n,t,r){var i=ln();H.flags|=e,i.memoizedState=Ur(1|n,t,void 0,r===void 0?null:r)}function Ro(e,n,t,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(te!==null){var l=te.memoizedState;if(o=l.destroy,r!==null&&Da(r,l.deps)){i.memoizedState=Ur(n,t,o,r);return}}H.flags|=e,i.memoizedState=Ur(1|n,t,o,r)}function kc(e,n){return $i(8390656,8,e,n)}function Ma(e,n){return Ro(2048,8,e,n)}function ep(e,n){return Ro(4,2,e,n)}function np(e,n){return Ro(4,4,e,n)}function tp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rp(e,n,t){return t=t!=null?t.concat([e]):null,Ro(4,4,tp.bind(null,n,e),t)}function ja(){}function ip(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Da(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function op(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Da(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function lp(e,n,t){return pt&21?(nn(t,n)||(t=sf(),H.lanes|=t,vt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=t)}function r1(e,n){var t=L;L=t!==0&&4>t?t:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),n()}finally{L=t,Rl.transition=r}}function up(){return Be().memoizedState}function i1(e,n,t){var r=Bn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ap(e))sp(n,t);else if(t=$f(e,n,t,r),t!==null){var i=we();en(t,e,r,i),cp(t,n,r)}}function o1(e,n,t){var r=Bn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ap(e))sp(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,u=o(l,t);if(i.hasEagerState=!0,i.eagerState=u,nn(u,l)){var a=n.interleaved;a===null?(i.next=i,Aa(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=$f(e,n,i,r),t!==null&&(i=we(),en(t,e,r,i),cp(t,n,r))}}function ap(e){var n=e.alternate;return e===H||n!==null&&n===H}function sp(e,n){Sr=ho=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function cp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ma(e,t)}}var _o={readContext:qe,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},l1={readContext:qe,useCallback:function(e,n){return ln().memoizedState=[e,n===void 0?null:n],e},useContext:qe,useEffect:kc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,$i(4194308,4,tp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return $i(4194308,4,e,n)},useInsertionEffect:function(e,n){return $i(4,2,e,n)},useMemo:function(e,n){var t=ln();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=ln();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=i1.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=ln();return e={current:e},n.memoizedState=e},useState:wc,useDebugValue:ja,useDeferredValue:function(e){return ln().memoizedState=e},useTransition:function(){var e=wc(!1),n=e[0];return e=r1.bind(null,e[1]),ln().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=ln();if(U){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),le===null)throw Error(k(349));pt&30||Qf(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,kc(Kf.bind(null,r,o,e),[e]),r.flags|=2048,Ur(9,Xf.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=ln(),n=le.identifierPrefix;if(U){var t=wn,r=yn;t=(r&~(1<<32-Je(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Fr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=t1++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},u1={readContext:qe,useCallback:ip,useContext:qe,useEffect:Ma,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:np,useMemo:op,useReducer:Dl,useRef:Jf,useState:function(){return Dl(Gr)},useDebugValue:ja,useDeferredValue:function(e){var n=Be();return lp(n,te.memoizedState,e)},useTransition:function(){var e=Dl(Gr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:Wf,useSyncExternalStore:Hf,useId:up,unstable_isNewReconciler:!1},a1={readContext:qe,useCallback:ip,useContext:qe,useEffect:Ma,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:np,useMemo:op,useReducer:Ol,useRef:Jf,useState:function(){return Ol(Gr)},useDebugValue:ja,useDeferredValue:function(e){var n=Be();return te===null?n.memoizedState=e:lp(n,te.memoizedState,e)},useTransition:function(){var e=Ol(Gr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:Wf,useSyncExternalStore:Hf,useId:up,unstable_isNewReconciler:!1};function Kt(e,n){try{var t="",r=n;do t+=L0(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Ll(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ru(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var s1=typeof WeakMap=="function"?WeakMap:Map;function dp(e,n,t){t=kn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){yo||(yo=!0,Uu=r),Ru(e,n)},t}function fp(e,n,t){t=kn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ru(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Ru(e,n),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Ec(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new s1;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=S1.bind(null,e,n,t),n.then(e,e))}function Sc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function xc(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=kn(-1,1),n.tag=2,Un(t,n,1))),t.lanes|=1),e)}var c1=Nn.ReactCurrentOwner,Te=!1;function ge(e,n,t,r){n.child=e===null?qf(n,null,t,r):Qt(n,e.child,t,r)}function Tc(e,n,t,r,i){t=t.render;var o=n.ref;return Ft(n,i),r=Oa(e,n,t,r,o,i),t=La(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Tn(e,n,i)):(U&&t&&Sa(n),n.flags|=1,ge(e,n,r,i),n.child)}function Nc(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Wa(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,pp(e,n,o,r,i)):(e=Ui(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Or,t(l,r)&&e.ref===n.ref)return Tn(e,n,i)}return n.flags|=1,e=Wn(o,r),e.ref=n.ref,e.return=n,n.child=e}function pp(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Or(o,r)&&e.ref===n.ref)if(Te=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return n.lanes=e.lanes,Tn(e,n,i)}return Du(e,n,t,r,i)}function vp(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(Ot,Pe),Pe|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$(Ot,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,$(Ot,Pe),Pe|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,$(Ot,Pe),Pe|=r;return ge(e,n,i,t),n.child}function mp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Du(e,n,t,r,i){var o=Ce(t)?dt:he.current;return o=Wt(n,o),Ft(n,i),t=Oa(e,n,t,r,o,i),r=La(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Tn(e,n,i)):(U&&r&&Sa(n),n.flags|=1,ge(e,n,t,i),n.child)}function Cc(e,n,t,r,i){if(Ce(t)){var o=!0;ao(n)}else o=!1;if(Ft(n,i),n.stateNode===null)Vi(e,n),Gf(n,t,r),Iu(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var a=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=qe(s):(s=Ce(t)?dt:he.current,s=Wt(n,s));var v=t.getDerivedStateFromProps,m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||a!==s)&&gc(n,l,r,s),zn=!1;var p=n.memoizedState;l.state=p,vo(n,r,l,i),a=n.memoizedState,u!==r||p!==a||Ne.current||zn?(typeof v=="function"&&(zu(n,t,v,r),a=n.memoizedState),(u=zn||_c(n,t,u,r,p,a,s))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),l.props=r,l.state=a,l.context=s,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Vf(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:Xe(n.type,u),l.props=s,m=n.pendingProps,p=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=qe(a):(a=Ce(t)?dt:he.current,a=Wt(n,a));var h=t.getDerivedStateFromProps;(v=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==m||p!==a)&&gc(n,l,r,a),zn=!1,p=n.memoizedState,l.state=p,vo(n,r,l,i);var g=n.memoizedState;u!==m||p!==g||Ne.current||zn?(typeof h=="function"&&(zu(n,t,h,r),g=n.memoizedState),(s=zn||_c(n,t,s,r,p,g,a)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),l.props=r,l.state=g,l.context=a,r=s):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Ou(e,n,t,r,o,i)}function Ou(e,n,t,r,i,o){mp(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&fc(n,t,!1),Tn(e,n,o);r=n.stateNode,c1.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Qt(n,e.child,null,o),n.child=Qt(n,null,u,o)):ge(e,n,u,o),n.memoizedState=r.state,i&&fc(n,t,!0),n.child}function hp(e){var n=e.stateNode;n.pendingContext?dc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&dc(e,n.context,!1),za(e,n.containerInfo)}function bc(e,n,t,r,i){return Ht(),Ta(i),n.flags|=256,ge(e,n,t,r),n.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Mu(e){return{baseLanes:e,cachePool:null,transitions:null}}function _p(e,n,t){var r=n.pendingProps,i=B.current,o=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(B,i&1),e===null)return Au(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Lo(l,r,0,null),e=st(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Mu(t),n.memoizedState=Lu,e):$a(n,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return d1(e,n,l,r,u,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Wn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Wn(u,o):(o=st(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?Mu(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Lu,r}return o=e.child,e=o.sibling,r=Wn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function $a(e,n){return n=Lo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Si(e,n,t,r){return r!==null&&Ta(r),Qt(n,e.child,null,t),e=$a(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function d1(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=Ll(Error(k(422))),Si(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Lo({mode:"visible",children:r.children},i,0,null),o=st(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Qt(n,e.child,null,l),n.child.memoizedState=Mu(l),n.memoizedState=Lu,o);if(!(n.mode&1))return Si(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(k(419)),r=Ll(o,r,void 0),Si(e,n,l,r)}if(u=(l&e.childLanes)!==0,Te||u){if(r=le,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xn(e,i),en(r,e,i,-1))}return Ba(),r=Ll(Error(k(421))),Si(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=x1.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,ze=Gn(i.nextSibling),Ie=n,U=!0,Ye=null,e!==null&&(je[$e++]=yn,je[$e++]=wn,je[$e++]=ft,yn=e.id,wn=e.overflow,ft=n),n=$a(n,r.children),n.flags|=4096,n)}function Ac(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Pu(e.return,n,t)}function Ml(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function gp(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ge(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,t,n);else if(e.tag===19)Ac(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(B,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&mo(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ml(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ml(n,!0,t,null,o);break;case"together":Ml(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),vt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function f1(e,n,t){switch(n.tag){case 3:hp(n),Ht();break;case 5:Bf(n);break;case 1:Ce(n.type)&&ao(n);break;case 4:za(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;$(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?($(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?_p(e,n,t):($(B,B.current&1),e=Tn(e,n,t),e!==null?e.sibling:null);$(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return gp(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,vp(e,n,t)}return Tn(e,n,t)}var yp,ju,wp,kp;yp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ju=function(){};wp=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,lt(fn.current);var o=null;switch(t){case"input":i=lu(e,i),r=lu(e,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=su(e,i),r=su(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}du(t,r);var l;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(br.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(l in u)!u.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&u[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(o||(o=[]),o.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(br.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&F("scroll",e),o||u===a||(o=[])):(o=o||[]).push(s,a))}t&&(o=o||[]).push("style",t);var s=o;(n.updateQueue=s)&&(n.flags|=4)}};kp=function(e,n,t,r){t!==r&&(n.flags|=4)};function ar(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function p1(e,n,t){var r=n.pendingProps;switch(xa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Ce(n.type)&&uo(),fe(n),null;case 3:return r=n.stateNode,Xt(),G(Ne),G(he),Ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ki(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ye!==null&&(Wu(Ye),Ye=null))),ju(e,n),fe(n),null;case 5:Ia(n);var i=lt(Vr.current);if(t=n.type,e!==null&&n.stateNode!=null)wp(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return fe(n),null}if(e=lt(fn.current),ki(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[an]=n,r[jr]=o,e=(n.mode&1)!==0,t){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)F(pr[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":js(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":Vs(r,o),F("invalid",r)}du(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,u,e),i=["children",""+u]):br.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&F("scroll",r)}switch(t){case"input":fi(r),$s(r,o,!0);break;case"textarea":fi(r),Fs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=lo)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[an]=n,e[jr]=r,yp(e,n,!1,!1),n.stateNode=e;e:{switch(l=fu(t,r),t){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)F(pr[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":js(e,r),i=lu(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),F("invalid",e);break;case"textarea":Vs(e,r),i=su(e,r),F("invalid",e);break;default:i=r}du(t,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var a=u[o];o==="style"?Kd(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Qd(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Ar(e,a):typeof a=="number"&&Ar(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(br.hasOwnProperty(o)?a!=null&&o==="onScroll"&&F("scroll",e):a!=null&&sa(e,o,a,l))}switch(t){case"input":fi(e),$s(e,r,!1);break;case"textarea":fi(e),Fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=lo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)kp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=lt(Vr.current),lt(fn.current),ki(n)){if(r=n.stateNode,t=n.memoizedProps,r[an]=n,(o=r.nodeValue!==t)&&(e=Ie,e!==null))switch(e.tag){case 3:wi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[an]=n,n.stateNode=r}return fe(n),null;case 13:if(G(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ze!==null&&n.mode&1&&!(n.flags&128))jf(),Ht(),n.flags|=98560,o=!1;else if(o=ki(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[an]=n}else Ht(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),o=!1}else Ye!==null&&(Wu(Ye),Ye=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?re===0&&(re=3):Ba())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Xt(),ju(e,n),e===null&&Lr(n.stateNode.containerInfo),fe(n),null;case 10:return ba(n.type._context),fe(n),null;case 17:return Ce(n.type)&&uo(),fe(n),null;case 19:if(G(B),o=n.memoizedState,o===null)return fe(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)ar(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=mo(e),l!==null){for(n.flags|=128,ar(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return $(B,B.current&1|2),n.child}e=e.sibling}o.tail!==null&&Z()>Yt&&(n.flags|=128,r=!0,ar(o,!1),n.lanes=4194304)}else{if(!r)if(e=mo(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!U)return fe(n),null}else 2*Z()-o.renderingStartTime>Yt&&t!==1073741824&&(n.flags|=128,r=!0,ar(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Z(),n.sibling=null,t=B.current,$(B,r?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return qa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Pe&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function v1(e,n){switch(xa(n),n.tag){case 1:return Ce(n.type)&&uo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xt(),G(Ne),G(he),Ra(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ia(n),null;case 13:if(G(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Ht()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(B),null;case 4:return Xt(),null;case 10:return ba(n.type._context),null;case 22:case 23:return qa(),null;case 24:return null;default:return null}}var xi=!1,pe=!1,m1=typeof WeakSet=="function"?WeakSet:Set,N=null;function Dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Y(e,n,r)}else t.current=null}function $u(e,n,t){try{t()}catch(r){Y(e,n,r)}}var Pc=!1;function h1(e,n){if(Eu=ro,e=Tf(),Ea(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,u=-1,a=-1,s=0,v=0,m=e,p=null;n:for(;;){for(var h;m!==t||i!==0&&m.nodeType!==3||(u=l+i),m!==o||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(h=m.firstChild)!==null;)p=m,m=h;for(;;){if(m===e)break n;if(p===t&&++s===i&&(u=l),p===o&&++v===r&&(a=l),(h=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=h}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Su={focusedElem:e,selectionRange:t},ro=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,b=g.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?y:Xe(n.type,y),b);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){Y(n,n.return,_)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return g=Pc,Pc=!1,g}function xr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&$u(n,t,o)}i=i.next}while(i!==r)}}function Do(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Vu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ep(e){var n=e.alternate;n!==null&&(e.alternate=null,Ep(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[an],delete n[jr],delete n[Nu],delete n[Z_],delete n[J_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sp(e){return e.tag===5||e.tag===3||e.tag===4}function zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(Fu(e,n,t),e=e.sibling;e!==null;)Fu(e,n,t),e=e.sibling}function Gu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gu(e,n,t),e=e.sibling;e!==null;)Gu(e,n,t),e=e.sibling}var ue=null,Ke=!1;function An(e,n,t){for(t=t.child;t!==null;)xp(e,n,t),t=t.sibling}function xp(e,n,t){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(No,t)}catch{}switch(t.tag){case 5:pe||Dt(t,n);case 6:var r=ue,i=Ke;ue=null,An(e,n,t),ue=r,Ke=i,ue!==null&&(Ke?(e=ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ue.removeChild(t.stateNode));break;case 18:ue!==null&&(Ke?(e=ue,t=t.stateNode,e.nodeType===8?Pl(e.parentNode,t):e.nodeType===1&&Pl(e,t),Rr(e)):Pl(ue,t.stateNode));break;case 4:r=ue,i=Ke,ue=t.stateNode.containerInfo,Ke=!0,An(e,n,t),ue=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&$u(t,n,l),i=i.next}while(i!==r)}An(e,n,t);break;case 1:if(!pe&&(Dt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){Y(t,n,u)}An(e,n,t);break;case 21:An(e,n,t);break;case 22:t.mode&1?(pe=(r=pe)||t.memoizedState!==null,An(e,n,t),pe=r):An(e,n,t);break;default:An(e,n,t)}}function Ic(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new m1),n.forEach(function(r){var i=T1.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Qe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:ue=u.stateNode,Ke=!1;break e;case 3:ue=u.stateNode.containerInfo,Ke=!0;break e;case 4:ue=u.stateNode.containerInfo,Ke=!0;break e}u=u.return}if(ue===null)throw Error(k(160));xp(o,l,i),ue=null,Ke=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){Y(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Tp(n,e),n=n.sibling}function Tp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(n,e),tn(e),r&4){try{xr(3,e,e.return),Do(3,e)}catch(y){Y(e,e.return,y)}try{xr(5,e,e.return)}catch(y){Y(e,e.return,y)}}break;case 1:Qe(n,e),tn(e),r&512&&t!==null&&Dt(t,t.return);break;case 5:if(Qe(n,e),tn(e),r&512&&t!==null&&Dt(t,t.return),e.flags&32){var i=e.stateNode;try{Ar(i,"")}catch(y){Y(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Bd(i,o),fu(u,l);var s=fu(u,o);for(l=0;l<a.length;l+=2){var v=a[l],m=a[l+1];v==="style"?Kd(i,m):v==="dangerouslySetInnerHTML"?Qd(i,m):v==="children"?Ar(i,m):sa(i,v,m,s)}switch(u){case"input":uu(i,o);break;case"textarea":Wd(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Mt(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?Mt(i,!!o.multiple,o.defaultValue,!0):Mt(i,!!o.multiple,o.multiple?[]:"",!1))}i[jr]=o}catch(y){Y(e,e.return,y)}}break;case 6:if(Qe(n,e),tn(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Y(e,e.return,y)}}break;case 3:if(Qe(n,e),tn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Rr(n.containerInfo)}catch(y){Y(e,e.return,y)}break;case 4:Qe(n,e),tn(e);break;case 13:Qe(n,e),tn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ga=Z())),r&4&&Ic(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(pe=(s=pe)||v,Qe(n,e),pe=s):Qe(n,e),tn(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!v&&e.mode&1)for(N=e,v=e.child;v!==null;){for(m=N=v;N!==null;){switch(p=N,h=p.child,p.tag){case 0:case 11:case 14:case 15:xr(4,p,p.return);break;case 1:Dt(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(y){Y(r,t,y)}}break;case 5:Dt(p,p.return);break;case 22:if(p.memoizedState!==null){Dc(m);continue}}h!==null?(h.return=p,N=h):Dc(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{i=m.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Xd("display",l))}catch(y){Y(e,e.return,y)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(y){Y(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Qe(n,e),tn(e),r&4&&Ic(e);break;case 21:break;default:Qe(n,e),tn(e)}}function tn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Sp(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ar(i,""),r.flags&=-33);var o=zc(e);Gu(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=zc(e);Fu(e,u,l);break;default:throw Error(k(161))}}catch(a){Y(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _1(e,n,t){N=e,Np(e)}function Np(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||xi;if(!l){var u=i.alternate,a=u!==null&&u.memoizedState!==null||pe;u=xi;var s=pe;if(xi=l,(pe=a)&&!s)for(N=i;N!==null;)l=N,a=l.child,l.tag===22&&l.memoizedState!==null?Oc(i):a!==null?(a.return=l,N=a):Oc(i);for(;o!==null;)N=o,Np(o),o=o.sibling;N=i,xi=u,pe=s}Rc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Rc(e)}}function Rc(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||Do(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!pe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Xe(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&hc(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}hc(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var v=s.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Rr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}pe||n.flags&512&&Vu(n)}catch(p){Y(n,n.return,p)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function Dc(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function Oc(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Do(4,n)}catch(a){Y(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){Y(n,i,a)}}var o=n.return;try{Vu(n)}catch(a){Y(n,o,a)}break;case 5:var l=n.return;try{Vu(n)}catch(a){Y(n,l,a)}}}catch(a){Y(n,n.return,a)}if(n===e){N=null;break}var u=n.sibling;if(u!==null){u.return=n.return,N=u;break}N=n.return}}var g1=Math.ceil,go=Nn.ReactCurrentDispatcher,Va=Nn.ReactCurrentOwner,Ge=Nn.ReactCurrentBatchConfig,O=0,le=null,ne=null,ae=0,Pe=0,Ot=Yn(0),re=0,qr=null,vt=0,Oo=0,Fa=0,Tr=null,Se=null,Ga=0,Yt=1/0,mn=null,yo=!1,Uu=null,qn=null,Ti=!1,Ln=null,wo=0,Nr=0,qu=null,Fi=-1,Gi=0;function we(){return O&6?Z():Fi!==-1?Fi:Fi=Z()}function Bn(e){return e.mode&1?O&2&&ae!==0?ae&-ae:n1.transition!==null?(Gi===0&&(Gi=sf()),Gi):(e=L,e!==0||(e=window.event,e=e===void 0?16:hf(e.type)),e):1}function en(e,n,t,r){if(50<Nr)throw Nr=0,qu=null,Error(k(185));Qr(e,t,r),(!(O&2)||e!==le)&&(e===le&&(!(O&2)&&(Oo|=t),re===4&&Rn(e,ae)),be(e,r),t===1&&O===0&&!(n.mode&1)&&(Yt=Z()+500,zo&&Zn()))}function be(e,n){var t=e.callbackNode;n_(e,n);var r=to(e,e===le?ae:0);if(r===0)t!==null&&qs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&qs(t),n===1)e.tag===0?e1(Lc.bind(null,e)):Of(Lc.bind(null,e)),K_(function(){!(O&6)&&Zn()}),t=null;else{switch(cf(r)){case 1:t=va;break;case 4:t=uf;break;case 16:t=no;break;case 536870912:t=af;break;default:t=no}t=Dp(t,Cp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Cp(e,n){if(Fi=-1,Gi=0,O&6)throw Error(k(327));var t=e.callbackNode;if(Gt()&&e.callbackNode!==t)return null;var r=to(e,e===le?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ko(e,r);else{n=r;var i=O;O|=2;var o=Ap();(le!==e||ae!==n)&&(mn=null,Yt=Z()+500,at(e,n));do try{k1();break}catch(u){bp(e,u)}while(1);Ca(),go.current=o,O=i,ne!==null?n=0:(le=null,ae=0,n=re)}if(n!==0){if(n===2&&(i=_u(e),i!==0&&(r=i,n=Bu(e,i))),n===1)throw t=qr,at(e,0),Rn(e,r),be(e,Z()),t;if(n===6)Rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!y1(i)&&(n=ko(e,r),n===2&&(o=_u(e),o!==0&&(r=o,n=Bu(e,o))),n===1))throw t=qr,at(e,0),Rn(e,r),be(e,Z()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:tt(e,Se,mn);break;case 3:if(Rn(e,r),(r&130023424)===r&&(n=Ga+500-Z(),10<n)){if(to(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Tu(tt.bind(null,e,Se,mn),n);break}tt(e,Se,mn);break;case 4:if(Rn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Je(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*g1(r/1960))-r,10<r){e.timeoutHandle=Tu(tt.bind(null,e,Se,mn),r);break}tt(e,Se,mn);break;case 5:tt(e,Se,mn);break;default:throw Error(k(329))}}}return be(e,Z()),e.callbackNode===t?Cp.bind(null,e):null}function Bu(e,n){var t=Tr;return e.current.memoizedState.isDehydrated&&(at(e,n).flags|=256),e=ko(e,n),e!==2&&(n=Se,Se=t,n!==null&&Wu(n)),e}function Wu(e){Se===null?Se=e:Se.push.apply(Se,e)}function y1(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!nn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rn(e,n){for(n&=~Fa,n&=~Oo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Je(n),r=1<<t;e[t]=-1,n&=~r}}function Lc(e){if(O&6)throw Error(k(327));Gt();var n=to(e,0);if(!(n&1))return be(e,Z()),null;var t=ko(e,n);if(e.tag!==0&&t===2){var r=_u(e);r!==0&&(n=r,t=Bu(e,r))}if(t===1)throw t=qr,at(e,0),Rn(e,n),be(e,Z()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,tt(e,Se,mn),be(e,Z()),null}function Ua(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(Yt=Z()+500,zo&&Zn())}}function mt(e){Ln!==null&&Ln.tag===0&&!(O&6)&&Gt();var n=O;O|=1;var t=Ge.transition,r=L;try{if(Ge.transition=null,L=1,e)return e()}finally{L=r,Ge.transition=t,O=n,!(O&6)&&Zn()}}function qa(){Pe=Ot.current,G(Ot)}function at(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,X_(t)),ne!==null)for(t=ne.return;t!==null;){var r=t;switch(xa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uo();break;case 3:Xt(),G(Ne),G(he),Ra();break;case 5:Ia(r);break;case 4:Xt();break;case 13:G(B);break;case 19:G(B);break;case 10:ba(r.type._context);break;case 22:case 23:qa()}t=t.return}if(le=e,ne=e=Wn(e.current,null),ae=Pe=n,re=0,qr=null,Fa=Oo=vt=0,Se=Tr=null,ot!==null){for(n=0;n<ot.length;n++)if(t=ot[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}ot=null}return e}function bp(e,n){do{var t=ne;try{if(Ca(),ji.current=_o,ho){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ho=!1}if(pt=0,oe=te=H=null,Sr=!1,Fr=0,Va.current=null,t===null||t.return===null){re=1,qr=n,ne=null;break}e:{var o=e,l=t.return,u=t,a=n;if(n=ae,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,v=u,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var h=Sc(l);if(h!==null){h.flags&=-257,xc(h,l,u,o,n),h.mode&1&&Ec(o,s,n),n=h,a=s;var g=n.updateQueue;if(g===null){var y=new Set;y.add(a),n.updateQueue=y}else g.add(a);break e}else{if(!(n&1)){Ec(o,s,n),Ba();break e}a=Error(k(426))}}else if(U&&u.mode&1){var b=Sc(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),xc(b,l,u,o,n),Ta(Kt(a,u));break e}}o=a=Kt(a,u),re!==4&&(re=2),Tr===null?Tr=[o]:Tr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=dp(o,a,n);mc(o,d);break e;case 1:u=a;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qn===null||!qn.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var _=fp(o,u,n);mc(o,_);break e}}o=o.return}while(o!==null)}zp(t)}catch(x){n=x,ne===t&&t!==null&&(ne=t=t.return);continue}break}while(1)}function Ap(){var e=go.current;return go.current=_o,e===null?_o:e}function Ba(){(re===0||re===3||re===2)&&(re=4),le===null||!(vt&268435455)&&!(Oo&268435455)||Rn(le,ae)}function ko(e,n){var t=O;O|=2;var r=Ap();(le!==e||ae!==n)&&(mn=null,at(e,n));do try{w1();break}catch(i){bp(e,i)}while(1);if(Ca(),O=t,go.current=r,ne!==null)throw Error(k(261));return le=null,ae=0,re}function w1(){for(;ne!==null;)Pp(ne)}function k1(){for(;ne!==null&&!W0();)Pp(ne)}function Pp(e){var n=Rp(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?zp(e):ne=n,Va.current=null}function zp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=v1(t,n),t!==null){t.flags&=32767,ne=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ne=null;return}}else if(t=p1(t,n,Pe),t!==null){ne=t;return}if(n=n.sibling,n!==null){ne=n;return}ne=n=e}while(n!==null);re===0&&(re=5)}function tt(e,n,t){var r=L,i=Ge.transition;try{Ge.transition=null,L=1,E1(e,n,t,r)}finally{Ge.transition=i,L=r}return null}function E1(e,n,t,r){do Gt();while(Ln!==null);if(O&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(t_(e,o),e===le&&(ne=le=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ti||(Ti=!0,Dp(no,function(){return Gt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ge.transition,Ge.transition=null;var l=L;L=1;var u=O;O|=4,Va.current=null,h1(e,t),Tp(t,e),G_(Su),ro=!!Eu,Su=Eu=null,e.current=t,_1(t),H0(),O=u,L=l,Ge.transition=o}else e.current=t;if(Ti&&(Ti=!1,Ln=e,wo=i),o=e.pendingLanes,o===0&&(qn=null),K0(t.stateNode),be(e,Z()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(yo)throw yo=!1,e=Uu,Uu=null,e;return wo&1&&e.tag!==0&&Gt(),o=e.pendingLanes,o&1?e===qu?Nr++:(Nr=0,qu=e):Nr=0,Zn(),null}function Gt(){if(Ln!==null){var e=cf(wo),n=Ge.transition,t=L;try{if(Ge.transition=null,L=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,wo=0,O&6)throw Error(k(331));var i=O;for(O|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var u=o.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(N=s;N!==null;){var v=N;switch(v.tag){case 0:case 11:case 15:xr(8,v,o)}var m=v.child;if(m!==null)m.return=v,N=m;else for(;N!==null;){v=N;var p=v.sibling,h=v.return;if(Ep(v),v===s){N=null;break}if(p!==null){p.return=h,N=p;break}N=h}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,N=d;break e}N=o.return}}var c=e.current;for(N=c;N!==null;){l=N;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,N=f;else e:for(l=c;N!==null;){if(u=N,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Do(9,u)}}catch(x){Y(u,u.return,x)}if(u===l){N=null;break e}var _=u.sibling;if(_!==null){_.return=u.return,N=_;break e}N=u.return}}if(O=i,Zn(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(No,e)}catch{}r=!0}return r}finally{L=t,Ge.transition=n}}return!1}function Mc(e,n,t){n=Kt(t,n),n=dp(e,n,1),e=Un(e,n,1),n=we(),e!==null&&(Qr(e,1,n),be(e,n))}function Y(e,n,t){if(e.tag===3)Mc(e,e,t);else for(;n!==null;){if(n.tag===3){Mc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){e=Kt(t,e),e=fp(n,e,1),n=Un(n,e,1),e=we(),n!==null&&(Qr(n,1,e),be(n,e));break}}n=n.return}}function S1(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=we(),e.pingedLanes|=e.suspendedLanes&t,le===e&&(ae&t)===t&&(re===4||re===3&&(ae&130023424)===ae&&500>Z()-Ga?at(e,0):Fa|=t),be(e,n)}function Ip(e,n){n===0&&(e.mode&1?(n=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):n=1);var t=we();e=xn(e,n),e!==null&&(Qr(e,n,t),be(e,t))}function x1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ip(e,t)}function T1(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Ip(e,t)}var Rp;Rp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ne.current)Te=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Te=!1,f1(e,n,t);Te=!!(e.flags&131072)}else Te=!1,U&&n.flags&1048576&&Lf(n,co,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Vi(e,n),e=n.pendingProps;var i=Wt(n,he.current);Ft(n,t),i=Oa(null,n,r,e,i,t);var o=La();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ce(r)?(o=!0,ao(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pa(n),i.updater=Io,n.stateNode=i,i._reactInternals=n,Iu(n,r,e,t),n=Ou(null,n,r,!0,o,t)):(n.tag=0,U&&o&&Sa(n),ge(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Vi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=C1(r),e=Xe(r,e),i){case 0:n=Du(null,n,r,e,t);break e;case 1:n=Cc(null,n,r,e,t);break e;case 11:n=Tc(null,n,r,e,t);break e;case 14:n=Nc(null,n,r,Xe(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Xe(r,i),Du(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Xe(r,i),Cc(e,n,r,i,t);case 3:e:{if(hp(n),e===null)throw Error(k(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Vf(e,n),vo(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Kt(Error(k(423)),n),n=bc(e,n,r,t,i);break e}else if(r!==i){i=Kt(Error(k(424)),n),n=bc(e,n,r,t,i);break e}else for(ze=Gn(n.stateNode.containerInfo.firstChild),Ie=n,U=!0,Ye=null,t=qf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ht(),r===i){n=Tn(e,n,t);break e}ge(e,n,r,t)}n=n.child}return n;case 5:return Bf(n),e===null&&Au(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,xu(r,i)?l=null:o!==null&&xu(r,o)&&(n.flags|=32),mp(e,n),ge(e,n,l,t),n.child;case 6:return e===null&&Au(n),null;case 13:return _p(e,n,t);case 4:return za(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Qt(n,null,r,t):ge(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Xe(r,i),Tc(e,n,r,i,t);case 7:return ge(e,n,n.pendingProps,t),n.child;case 8:return ge(e,n,n.pendingProps.children,t),n.child;case 12:return ge(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,$(fo,r._currentValue),r._currentValue=l,o!==null)if(nn(o.value,l)){if(o.children===i.children&&!Ne.current){n=Tn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=kn(-1,t&-t),a.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var v=s.pending;v===null?a.next=a:(a.next=v.next,v.next=a),s.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Pu(o.return,t,n),u.lanes|=t;break}a=a.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Pu(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ge(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Ft(n,t),i=qe(i),r=r(i),n.flags|=1,ge(e,n,r,t),n.child;case 14:return r=n.type,i=Xe(r,n.pendingProps),i=Xe(r.type,i),Nc(e,n,r,i,t);case 15:return pp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Xe(r,i),Vi(e,n),n.tag=1,Ce(r)?(e=!0,ao(n)):e=!1,Ft(n,t),Gf(n,r,i),Iu(n,r,i,t),Ou(null,n,r,!0,e,t);case 19:return gp(e,n,t);case 22:return vp(e,n,t)}throw Error(k(156,n.tag))};function Dp(e,n){return lf(e,n)}function N1(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,n,t,r){return new N1(e,n,t,r)}function Wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function C1(e){if(typeof e=="function")return Wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===da)return 11;if(e===fa)return 14}return 2}function Wn(e,n){var t=e.alternate;return t===null?(t=Fe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ui(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")Wa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Tt:return st(t.children,i,o,n);case ca:l=8,i|=8;break;case tu:return e=Fe(12,t,n,i|2),e.elementType=tu,e.lanes=o,e;case ru:return e=Fe(13,t,n,i),e.elementType=ru,e.lanes=o,e;case iu:return e=Fe(19,t,n,i),e.elementType=iu,e.lanes=o,e;case Gd:return Lo(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vd:l=10;break e;case Fd:l=9;break e;case da:l=11;break e;case fa:l=14;break e;case Pn:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Fe(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function st(e,n,t,r){return e=Fe(7,e,r,n),e.lanes=t,e}function Lo(e,n,t,r){return e=Fe(22,e,r,n),e.elementType=Gd,e.lanes=t,e.stateNode={isHidden:!1},e}function jl(e,n,t){return e=Fe(6,e,null,n),e.lanes=t,e}function $l(e,n,t){return n=Fe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function b1(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ha(e,n,t,r,i,o,l,u,a){return e=new b1(e,n,t,u,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Fe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pa(o),e}function A1(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Op(e){if(!e)return Qn;e=e._reactInternals;e:{if(gt(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Ce(t))return Df(e,t,n)}return n}function Lp(e,n,t,r,i,o,l,u,a){return e=Ha(t,r,!0,e,i,o,l,u,a),e.context=Op(null),t=e.current,r=we(),i=Bn(t),o=kn(r,i),o.callback=n??null,Un(t,o,i),e.current.lanes=i,Qr(e,i,r),be(e,r),e}function Mo(e,n,t,r){var i=n.current,o=we(),l=Bn(i);return t=Op(t),n.context===null?n.context=t:n.pendingContext=t,n=kn(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Un(i,n,l),e!==null&&(en(e,i,l,o),Mi(e,i,l)),l}function Eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Qa(e,n){jc(e,n),(e=e.alternate)&&jc(e,n)}function P1(){return null}var Mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xa(e){this._internalRoot=e}jo.prototype.render=Xa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Mo(e,n,null,null)};jo.prototype.unmount=Xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mt(function(){Mo(null,e,null,null)}),n[Sn]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var n=pf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<In.length&&n!==0&&n<In[t].priority;t++);In.splice(t,0,e),t===0&&mf(e)}};function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $c(){}function z1(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=Eo(l);o.call(s)}}var l=Lp(n,r,e,0,null,!1,!1,"",$c);return e._reactRootContainer=l,e[Sn]=l.current,Lr(e.nodeType===8?e.parentNode:e),mt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=Eo(a);u.call(s)}}var a=Ha(e,0,!1,null,null,!1,!1,"",$c);return e._reactRootContainer=a,e[Sn]=a.current,Lr(e.nodeType===8?e.parentNode:e),mt(function(){Mo(n,a,t,r)}),a}function Vo(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var a=Eo(l);u.call(a)}}Mo(n,l,e,i)}else l=z1(t,n,e,i,r);return Eo(l)}df=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=fr(n.pendingLanes);t!==0&&(ma(n,t|1),be(n,Z()),!(O&6)&&(Yt=Z()+500,Zn()))}break;case 13:mt(function(){var r=xn(e,1);if(r!==null){var i=we();en(r,e,1,i)}}),Qa(e,1)}};ha=function(e){if(e.tag===13){var n=xn(e,134217728);if(n!==null){var t=we();en(n,e,134217728,t)}Qa(e,134217728)}};ff=function(e){if(e.tag===13){var n=Bn(e),t=xn(e,n);if(t!==null){var r=we();en(t,e,n,r)}Qa(e,n)}};pf=function(){return L};vf=function(e,n){var t=L;try{return L=e,n()}finally{L=t}};vu=function(e,n,t){switch(n){case"input":if(uu(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Po(r);if(!i)throw Error(k(90));qd(r),uu(r,i)}}}break;case"textarea":Wd(e,t);break;case"select":n=t.value,n!=null&&Mt(e,!!t.multiple,n,!1)}};Jd=Ua;ef=mt;var I1={usingClientEntryPoint:!1,Events:[Kr,At,Po,Yd,Zd,Ua]},sr={findFiberByHostInstance:it,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},R1={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rf(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||P1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{No=Ni.inject(R1),dn=Ni}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I1;De.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ka(n))throw Error(k(200));return A1(e,n,null,t)};De.createRoot=function(e,n){if(!Ka(e))throw Error(k(299));var t=!1,r="",i=Mp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ha(e,1,!1,null,null,t,!1,r,i),e[Sn]=n.current,Lr(e.nodeType===8?e.parentNode:e),new Xa(n)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=rf(n),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return mt(e)};De.hydrate=function(e,n,t){if(!$o(n))throw Error(k(200));return Vo(null,e,n,!0,t)};De.hydrateRoot=function(e,n,t){if(!Ka(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Mp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Lp(n,null,e,1,t??null,i,!1,o,l),e[Sn]=n.current,Lr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new jo(n)};De.render=function(e,n,t){if(!$o(n))throw Error(k(200));return Vo(null,e,n,!1,t)};De.unmountComponentAtNode=function(e){if(!$o(e))throw Error(k(40));return e._reactRootContainer?(mt(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1};De.unstable_batchedUpdates=Ua;De.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!$o(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Vo(e,n,t,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jp)}catch(e){console.error(e)}}jp(),Od.exports=De;var D1=Od.exports,$p,Vc=D1;$p=Vc.createRoot,Vc.hydrateRoot;$p(P0(Iv(document.querySelector("#root")))).render(C.jsx(Ut.StrictMode,{children:C.jsx(A0,{})}));
