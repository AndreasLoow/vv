(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Wc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),sv=Symbol.for("react.portal"),cv=Symbol.for("react.fragment"),dv=Symbol.for("react.strict_mode"),fv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),mv=Symbol.for("react.forward_ref"),hv=Symbol.for("react.suspense"),_v=Symbol.for("react.memo"),gv=Symbol.for("react.lazy"),Ju=Symbol.iterator;function yv(e){return e===null||typeof e!="object"?null:(e=Ju&&e[Ju]||e["@@iterator"],typeof e=="function"?e:null)}var Hc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qc=Object.assign,Xc={};function Zt(e,n,t){this.props=e,this.context=n,this.refs=Xc,this.updater=t||Hc}Zt.prototype.isReactComponent={};Zt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Zt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kc(){}Kc.prototype=Zt.prototype;function Ha(e,n,t){this.props=e,this.context=n,this.refs=Xc,this.updater=t||Hc}var Qa=Ha.prototype=new Kc;Qa.constructor=Ha;Qc(Qa,Zt.prototype);Qa.isPureReactComponent=!0;var es=Array.isArray,Yc=Object.prototype.hasOwnProperty,Xa={current:null},Zc={key:!0,ref:!0,__self:!0,__source:!0};function Jc(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Yc.call(n,r)&&!Zc.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xr,type:e,key:o,ref:l,props:i,_owner:Xa.current}}function wv(e,n){return{$$typeof:Xr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ka(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function kv(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ns=/\/+/g;function tl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?kv(""+e.key):n.toString(36)}function Pi(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xr:case sv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+tl(l,0):r,es(i)?(t="",e!=null&&(t=e.replace(ns,"$&/")+"/"),Pi(i,n,t,"",function(s){return s})):i!=null&&(Ka(i)&&(i=wv(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ns,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",es(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+tl(o,a);l+=Pi(o,n,t,u,i)}else if(u=yv(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+tl(o,a++),l+=Pi(o,n,t,u,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function ui(e,n,t){if(e==null)return e;var r=[],i=0;return Pi(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Ev(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Ii={transition:null},xv={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Ii,ReactCurrentOwner:Xa};D.Children={map:ui,forEach:function(e,n,t){ui(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ui(e,function(){n++}),n},toArray:function(e){return ui(e,function(n){return n})||[]},only:function(e){if(!Ka(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Zt;D.Fragment=cv;D.Profiler=fv;D.PureComponent=Ha;D.StrictMode=dv;D.Suspense=hv;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xv;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qc({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Xa.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Yc.call(n,u)&&!Zc.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:Xr,type:e.type,key:i,ref:o,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:vv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pv,_context:e},e.Consumer=e};D.createElement=Jc;D.createFactory=function(e){var n=Jc.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:mv,render:e}};D.isValidElement=Ka;D.lazy=function(e){return{$$typeof:gv,_payload:{_status:-1,_result:e},_init:Ev}};D.memo=function(e,n){return{$$typeof:_v,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=Ii.transition;Ii.transition={};try{e()}finally{Ii.transition=n}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,n){return ye.current.useCallback(e,n)};D.useContext=function(e){return ye.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};D.useEffect=function(e,n){return ye.current.useEffect(e,n)};D.useId=function(){return ye.current.useId()};D.useImperativeHandle=function(e,n,t){return ye.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return ye.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return ye.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return ye.current.useMemo(e,n)};D.useReducer=function(e,n,t){return ye.current.useReducer(e,n,t)};D.useRef=function(e){return ye.current.useRef(e)};D.useState=function(e){return ye.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return ye.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return ye.current.useTransition()};D.version="18.2.0";Wc.exports=D;var qt=Wc.exports;function Sv(e,n){return e<n?-1:e===n?0:1}function bv(e,n){return e?n?0:1:n?-1:0}function Tv(e,n){return e===n?0:e<n?-1:e>n||e===e?1:n===n?-1:0}function ed(e,n){return e===n?0:e<n?-1:1}function nd(e,n){return e<n?e:n}function Nv(e,n){return e>n?e:n}var Wi=function(e,n){for(var t in e)n(t)};function hr(e,n){if(e===n)return 0;var t=typeof e,r=typeof n;switch(t){case"boolean":if(r==="boolean")return bv(e,n);break;case"function":if(r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"compare: functional value",Error:new Error};break;case"number":if(r==="number")return Tv(e,n);break;case"string":return r==="string"?ed(e,n):1;case"undefined":return-1}switch(r){case"string":return-1;case"undefined":return 1;default:if(t==="boolean")return 1;if(r==="boolean")return-1;if(t==="function")return 1;if(r==="function")return-1;if(t==="number")return n===null||n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(r==="number")return e===null||e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e===null)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(n===null)return e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e.BS_PRIVATE_NESTED_SOME_NONE!==void 0)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?ts(e,n):-1;var i=e.TAG|0,o=n.TAG|0;if(i===248)return Sv(e[1],n[1]);if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return i<o?-1:1;var l=e.length|0,a=n.length|0;if(l===a)if(Array.isArray(e))for(var u=0;;){var s=u;if(s===l)return 0;var p=hr(e[s],n[s]);if(p!==0)return p;u=s+1|0}else return e instanceof Date&&n instanceof Date?e-n:ts(e,n);else if(l<a)for(var v=0;;){var m=v;if(m===l)return-1;var h=hr(e[m],n[m]);if(h!==0)return h;v=m+1|0}else for(var _=0;;){var w=_;if(w===a)return 1;var C=hr(e[w],n[w]);if(C!==0)return C;_=w+1|0}}}function ts(e,n){var t={contents:void 0},r={contents:void 0},i=function(v,m){var h=v[2],_=v[1];if(!Object.prototype.hasOwnProperty.call(_,m)||hr(v[0][m],_[m])>0){var w=h.contents;if(!(w!==void 0&&m>=w)){h.contents=m;return}}},o=[e,n,r],l=function(v){return i(o,v)},a=[n,e,t],u=function(v){return i(a,v)};Wi(e,l),Wi(n,u);var s=t.contents,p=r.contents;return s!==void 0?p!==void 0?ed(s,p):-1:p!==void 0?1:0}function L(e,n){if(e===n)return!0;var t=typeof e;if(t==="string"||t==="number"||t==="boolean"||t==="undefined"||e===null)return!1;var r=typeof n;if(t==="function"||r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if(r==="number"||r==="undefined"||n===null)return!1;var i=e.TAG|0,o=n.TAG|0;if(i===248)return e[1]===n[1];if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return!1;var l=e.length|0,a=n.length|0;if(l===a)if(Array.isArray(e))for(var u=0;;){var s=u;if(s===l)return!0;if(!L(e[s],n[s]))return!1;u=s+1|0}else{if(e instanceof Date&&n instanceof Date)return!(e>n||e<n);var p={contents:!0},v=function(h){if(!Object.prototype.hasOwnProperty.call(n,h)){p.contents=!1;return}},m=function(h){if(!Object.prototype.hasOwnProperty.call(e,h)||!L(n[h],e[h])){p.contents=!1;return}};return Wi(e,v),p.contents&&Wi(n,m),p.contents}else return!1}function td(e,n){return typeof e=="number"&&typeof n=="number"?e!==n:!L(e,n)}function Cv(e,n){return typeof e=="number"&&typeof n=="number"?e>=n:hr(e,n)>=0}function rd(e){switch(e){case 0:return"1";case 1:return"0";case 2:return"x";case 3:return"z"}}function Av(e){return e===0}function Pv(e){return e===1}function Iv(e,n){return e===n?e:e===3?n:n===3?e:2}function zv(e,n){switch(e){case 0:return n>=3?0:n;case 1:return 1;case 2:return n!==1?2:1;case 3:return n}}function Rv(e,n){switch(e){case 0:return 0;case 1:return n>=3?1:n;case 2:return n!==0?2:0;case 3:return n}}function Dv(e){return e!==1?e!==0?2:1:0}function rs(e,n){return e!==1?e!==0?n!==1?2:1:n!==1?n!==0?2:0:n!==1?2:1:1}function is(e,n){return e!==1?e!==0&&n!==0?2:0:n!==1?n!==0||n!==0?2:0:1}function Mv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function Lv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function Ov(e,n){return e!==1?e!==0||n!==0?2:0:n!==1?2:1}function Vv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:0:1:n!==1?n!==0?2:1:0}function $v(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function jv(e,n){return L(e,n)?0:1}function Gv(e,n){return e!==n?0:1}var rl=0,os=1,qv=2,Fv=3;function ls(e,n,t){for(var r=new Array(t),i=0,o=n;i<t;)r[i]=e[o],i=i+1|0,o=o+1|0;return r}function Hi(e,n){for(;;){var t=n,r=e,i=r.length,o=i===0?1:i,l=t.length,a=o-l|0;if(a===0)return r.apply(null,t);if(a>=0)return function(u,s){return function(p){return Hi(u,s.concat([p]))}}(r,t);n=ls(t,o,-a|0),e=r.apply(null,ls(t,0,o))}}function vn(e,n){var t=e.length;if(t===1)return e(n);switch(t){case 1:return e(n);case 2:return function(r){return e(n,r)};case 3:return function(r,i){return e(n,r,i)};case 4:return function(r,i,o){return e(n,r,i,o)};case 5:return function(r,i,o,l){return e(n,r,i,o,l)};case 6:return function(r,i,o,l,a){return e(n,r,i,o,l,a)};case 7:return function(r,i,o,l,a,u){return e(n,r,i,o,l,a,u)};default:return Hi(e,[n])}}function Qn(e){var n=e.length;return n===1?e:function(t){return vn(e,t)}}function id(e,n,t){var r=e.length;if(r===2)return e(n,t);switch(r){case 1:return Hi(e(n),[t]);case 2:return e(n,t);case 3:return function(i){return e(n,t,i)};case 4:return function(i,o){return e(n,t,i,o)};case 5:return function(i,o,l){return e(n,t,i,o,l)};case 6:return function(i,o,l,a){return e(n,t,i,o,l,a)};case 7:return function(i,o,l,a,u){return e(n,t,i,o,l,a,u)};default:return Hi(e,[n,t])}}function Kr(e){var n=e.length;return n===2?e:function(t,r){return id(e,t,r)}}function _t(e){return e===void 0?{BS_PRIVATE_NESTED_SOME_NONE:0}:e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function Uv(e){if(e!=null)return _t(e)}function Bv(e){if(e!==void 0)return _t(e)}function Jt(e){if(!(e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;if(n!==0)return{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}var od=function(e,n,t){var r,i;i=t.length;var o=[];for(r=0;r<i-1;++r)o.push(t[r]);var l=t[i-1];for(r=0;r<l.length;++r)o.push(l[r]);return e[n].apply(e,o)};function Wv(e,n,t,r){return od(r,"splice",[e,n,t])}function Ya(e,n){return od(n,"concat",[e])}function Za(e,n){return n.join(e)}function Qi(e,n,t){return t.slice(e,n)}function st(e,n){return n.filter(Qn(e))}function Hv(e,n){return Bv(n.find(Qn(e)))}function ld(e,n){return n.findIndex(Qn(e))}function Ar(e,n){n.forEach(Qn(e))}function te(e,n){return n.map(Qn(e))}function tn(e,n){return n.map(Kr(e))}function Ie(e,n,t){return t.reduce(Kr(e),n)}function Qv(e,n){return n.some(Qn(e))}function ad(e){if(e!==void 0)return Jt(e);throw new Error("getExn")}function I(e,n){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",35,2],Error:new Error};return e[n]}function Z(e,n,t){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",45,2],Error:new Error};e[n]=t}function Xv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(e[i]);return r}function gn(e,n){return Xv(e,Qn(n))}function Kv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(i,e[i]);return r}function il(e,n){return Kv(e,Kr(n))}function Yv(e,n,t){for(var r=n,i=0,o=e.length;i<o;++i)r=t(r,e[i]);return r}function Zv(e,n,t){return Yv(e,n,Kr(t))}function Jv(e,n,t,r,i){for(;;){var o=t;if(o===i)return!0;if(!r(e[o],n[o]))return!1;t=o+1|0}}function em(e,n,t){return Jv(e,n,0,t,nd(e.length,n.length))}function nm(e,n,t){return em(e,n,Kr(t))}function tm(e){for(var n=e.length,t=new Array(n),r=new Array(n),i=0;i<n;++i){var o=e[i];t[i]=o[0],r[i]=o[1]}return[t,r]}function rm(e,n,t,r,i){for(;;){var o=t,l=n;if(o>=r)return o;var a=e[o];if(!i(a,l))return o;t=o+1|0,n=a}}function im(e,n){var t=e.length;if(t===0||t===1)return t;var r=e[0],i=e[1];if(n(r,i))for(var o=i,l=2;;){var a=l,u=o;if(a>=t)return a;var s=e[a];if(!n(u,s))return a;l=a+1|0,o=s}else return n(i,r)?-rm(e,i,2,t,n)|0:1}function Ne(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t}}function Ge(e){return{v:e,h:1,l:void 0,r:void 0}}function Xi(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function cn(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;if(r>(i+2|0)){var o=e.l,l=e.r;return Xi(o,l)?Ne(o,e.v,Ne(l,n,t)):Ne(Ne(o,e.v,l.l),l.v,Ne(l.r,n,t))}if(i<=(r+2|0))return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t};var a=t.l,u=t.r;return Xi(u,a)?Ne(Ne(e,n,a),t.v,u):Ne(Ne(e,n,a.l),a.v,Ne(a.r,t.v,u))}function ud(e,n){var t=e.l;return t!==void 0?cn(ud(t,n),e.v,e.r):(n.contents=e.v,e.r)}function sd(e,n){return e!==void 0?cn(sd(e.l,n),e.v,e.r):Ge(n)}function cd(e,n){return e!==void 0?cn(e.l,e.v,cd(e.r,n)):Ge(n)}function Ft(e,n,t){if(e===void 0)return sd(t,n);if(t===void 0)return cd(e,n);var r=e.h,i=t.h;return r>(i+2|0)?cn(e.l,e.v,Ft(e.r,n,t)):i>(r+2|0)?cn(Ft(e,n,t.l),t.v,t.r):Ne(e,n,t)}function jl(e){var n=e.l,t=e.r,r=n!==void 0?jl(n):0,i=t!==void 0?jl(t):0;return(1+r|0)+i|0}function dd(e,n,t){for(;;){var r=n,i=e,o=i.v,l=i.l,a=i.r,u=l!==void 0?dd(l,r,t):r;t[u]=o;var s=u+1|0;if(a===void 0)return s;n=s,e=a}}function om(e){if(e===void 0)return[];var n=jl(e),t=new Array(n);return dd(e,0,t),t}function Gl(e,n,t){switch(t){case 0:return;case 1:return Ge(e[n]);case 2:var r=e[n],i=e[n-1|0];return{v:i,h:2,l:Ge(r),r:void 0};case 3:var o=e[n],l=e[n-1|0],a=e[n-2|0];return{v:l,h:2,l:Ge(o),r:Ge(a)};default:var u=t/2|0,s=Gl(e,n,u),p=e[n-u|0],v=Gl(e,(n-u|0)-1|0,(t-u|0)-1|0);return Ne(s,p,v)}}function ql(e,n,t){switch(t){case 0:return;case 1:return Ge(e[n]);case 2:var r=e[n],i=e[n+1|0];return{v:i,h:2,l:Ge(r),r:void 0};case 3:var o=e[n],l=e[n+1|0],a=e[n+2|0];return{v:l,h:2,l:Ge(o),r:Ge(a)};default:var u=t/2|0,s=ql(e,n,u),p=e[n+u|0],v=ql(e,(n+u|0)+1|0,(t-u|0)-1|0);return Ne(s,p,v)}}function Ja(e){var n=e.l;e.l=n.r,n.r=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.l,a=l!==void 0?l.h:0,u=e.h;return n.h=(a>u?a:u)+1|0,n}function eu(e){var n=e.r;e.r=n.l,n.l=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.r,a=l!==void 0?l.h:0,u=e.h;return n.h=(a>u?a:u)+1|0,n}function lm(e){var n=e.l,t=eu(n);return e.l=t,Ja(e)}function am(e){var n=e.r,t=Ja(n);return e.r=t,eu(e)}function si(e){var n=e.l,t=n!==void 0?n.h:0,r=e.r,i=r!==void 0?r.h:0;return e.h=(t>i?t:i)+1|0,e}function um(e){var n=e.l,t=e.r,r=n!==void 0?n.h:0,i=t!==void 0?t.h:0;if(r>(2+i|0)){var o=n.l,l=n.r;return Xi(o,l)?si(Ja(e)):si(lm(e))}if(i>(2+r|0)){var a=t.l,u=t.r;return Xi(u,a)?si(eu(e)):si(am(e))}return e.h=(r>i?r:i)+1|0,e}function sm(e,n,t,r){for(;;){var i=t,o=n;if(i>=r)return i;var l=e[i];if(o<=l)return i;t=i+1|0,n=l}}function cm(e){var n=e.length;if(n===0||n===1)return n;var t=e[0],r=e[1];if(t<r)for(var i=r,o=2;;){var l=o,a=i;if(l>=n)return l;var u=e[l];if(a>=u)return l;o=l+1|0,i=u}else return t>r?-sm(e,r,2,n)|0:1}function Fl(e,n){if(e===void 0)return Ge(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;return n<t?e.l=Fl(r,n):e.r=Fl(i,n),um(e)}function dm(e){var n=e.length;if(n!==0){var t=cm(e),r;t>=0?r=ql(e,0,t):(t=-t|0,r=Gl(e,t-1|0,t));for(var i=t;i<n;++i)r=Fl(r,e[i]);return r}}function Ki(e,n){if(e===void 0)return Ge(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;if(n<t){var o=Ki(r,n);return o===r?e:cn(o,t,i)}var l=Ki(i,n);return l===i?e:cn(r,t,l)}function Ul(e,n){if(e===void 0)return e;var t=e.v,r=e.l,i=e.r;if(n===t){if(r===void 0)return i;if(i===void 0)return r;var o={contents:i.v},l=ud(i,o);return cn(r,o.contents,l)}if(n<t){var a=Ul(r,n);return a===r?e:cn(a,t,i)}var u=Ul(i,n);return u===i?e:cn(r,t,u)}function fm(e,n){for(var t=n.length,r=e,i=0;i<t;++i){var o=n[i];r=Ul(r,o)}return r}function Yi(e,n){var t=e.v,r=e.l,i=e.r;if(n===t)return[r,i];if(n<t){if(r===void 0)return[void 0,e];var o=Yi(r,n);return[o[0],Ft(o[1],t,i)]}if(i===void 0)return[e,void 0];var l=Yi(i,n);return[Ft(r,t,l[0]),l[1]]}function Dn(e,n){if(e===void 0)return n;if(n===void 0)return e;var t=e.h,r=n.h;if(t>=r){if(r===1)return Ki(e,n.v);var i=e.v,o=e.l,l=e.r,a=Yi(n,i);return Ft(Dn(o,a[0]),i,Dn(l,a[1]))}if(t===1)return Ki(n,e.v);var u=n.v,s=n.l,p=n.r,v=Yi(e,u);return Ft(Dn(v[0],s),u,Dn(v[1],p))}var fd=dm,Bl=om;function pd(e,n){return Za(e,st(function(t){return t!==""},n))}function vd(e,n){var t=n.slice(),r=t.shift();return Ie(e,ad(r===void 0?void 0:_t(r)),t)}function md(e,n){var t=n.length-1|0;return Ya(tn(function(r,i){return i===t?[r]:[r,e]},n),[])}function _r(e){return Ie(Dn,void 0,e)}function pm(e){return Ie(function(n,t){return n+t|0},0,e)}function hd(e,n){if(e!==void 0)return vn(n,Jt(e))}function tr(e){return _t(e)}var rr;function ci(e){return{_0:e}}function On(e){return"1'b"+rd(e._0)}function vm(e){return rd(e._0)}function di(e){return{TAG:0,_0:e}}function as(e){return{TAG:1,_0:e}}function mm(e){return{TAG:2,_0:e}}function hm(e,n){return{TAG:3,_0:e,_1:0,_2:n}}function _m(e,n){return{TAG:3,_0:e,_1:1,_2:n}}function gm(e,n){return{TAG:3,_0:e,_1:2,_2:n}}function ym(e,n){return{TAG:3,_0:e,_1:3,_2:n}}function wm(e,n){return{TAG:3,_0:e,_1:4,_2:n}}function km(e,n){return{TAG:3,_0:e,_1:5,_2:n}}function Em(e,n){return{TAG:3,_0:e,_1:6,_2:n}}function xm(e,n){return{TAG:3,_0:e,_1:7,_2:n}}function Sm(e,n){return{TAG:3,_0:e,_1:8,_2:n}}function bm(e,n){return{TAG:3,_0:e,_1:9,_2:n}}function Tm(e,n,t){return{TAG:4,_0:e,_1:n,_2:t}}function Nm(e){return{_0:e}}function us(e){return{TAG:0,_0:e}}function Cm(e,n){return{TAG:1,_0:e,_1:n}}function Am(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function Wl(e){return typeof e=="number"?0:e._0}function Hl(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:case 2:return e._1}}function Pm(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return nd(e._0<e._1?e._0:e._1,e._2)}}function Ql(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return e._2}}function Im(e,n){switch(n){case 0:return Wl(e);case 1:return Hl(e);case 2:return Pm(e);case 3:return Ql(e)}}function _d(e,n){return Im(e,n._0)}function zm(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0>e._1?e._0:e._1;case 2:return Nv(e._0>e._1?e._0:e._1,e._2)}}function Rm(e,n){return{TAG:2,_0:Wl(e)+Wl(n)|0,_1:Hl(e)+Hl(n)|0,_2:Ql(e)+Ql(n)|0}}function ol(e,n){switch(e){case 0:return n!==0?1:2;case 1:return n!==1?0:2;case 2:case 3:return n!==1?n!==0?2:0:1}}function Dm(e){return{TAG:0,_0:e}}function Mm(e){return{TAG:1,_0:e}}function ll(e){return{TAG:2,_0:e}}function Lm(e,n){return{TAG:3,_0:e,_1:n}}function gd(e){if(!L(e,[]))return vd(function(n,t){return{TAG:3,_0:n,_1:t}},e)}function Om(e){return{TAG:0,_0:e}}function ss(e){return{TAG:1,_0:e}}function Vm(e){switch(e){case 0:return Iv;case 1:return zv;case 2:return Rv}}function yd(e){return typeof e!="number"}function $m(e){return typeof e=="number"?e===0:!0}var jm=[],Gm=[],qm=[],Fm=[],Um=[],wd={vars:jm,nets:Gm,conts:qm,procs:Fm,finals:Um},Bm=0,al=0,cs=0,ds=1,fs=0;function Q(e){throw new Error(e)}var kd={exports:{}},So={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=qt,Hm=Symbol.for("react.element"),Qm=Symbol.for("react.fragment"),Xm=Object.prototype.hasOwnProperty,Km=Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ym={key:!0,ref:!0,__self:!0,__source:!0};function Ed(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Xm.call(n,r)&&!Ym.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Hm,type:e,key:o,ref:l,props:i,_owner:Km.current}}So.Fragment=Qm;So.jsx=Ed;So.jsxs=Ed;kd.exports=So;var N=kd.exports;function xd(e){return tn(function(n,t){return N.jsx(qt.Fragment,{children:n},String(t))},e)}function Zm(e){switch(e){case 0:return"&&";case 1:return"||";case 2:return"&";case 3:return"|";case 4:return"^";case 5:return"+";case 6:return"==";case 7:return"!=";case 8:return"===";case 9:return"!=="}}function Ee(e){switch(e.TAG|0){case 0:return On(e._0);case 1:return e._0;case 2:return"!"+wt(e._0);case 3:return wt(e._0)+" "+Zm(e._1)+" "+wt(e._2);case 4:return wt(e._0)+" ? "+wt(e._1)+" : "+wt(e._2)}}function wt(e){switch(e.TAG|0){case 3:case 4:return"("+Ee(e)+")";default:return Ee(e)}}function Jm(e){return e?Ee(e._0):"$time"}function Sd(e){if(typeof e=="number")return"";switch(e.TAG|0){case 0:return"#"+String(e._0);case 1:return"#("+String(e._0)+", "+String(e._1)+")";case 2:return"#("+String(e._0)+", "+String(e._1)+", "+String(e._2)+")"}}function ps(e){return e!==void 0?"#"+String(e)+" ":""}function Xl(e){if(typeof e=="number")return"0";switch(e.TAG|0){case 0:return"posedge "+Ee(e._0);case 1:return"negedge "+Ee(e._0);case 2:return Ee(e._0);case 3:return Xl(e._0)+" or "+Xl(e._1)}}function eh(e){return typeof e=="number"?"@(*)":e.TAG===0?"#"+String(e._0):"@("+Xl(e._0)+")"}function vs(e,n){return'"'+e+'"'+(n.length===0?"":`,
          `)+Za("",md(", ",te(Jm,n)))}function bd(e){switch(e.TAG|0){case 0:return eh(e._0);case 1:return"wait("+Ee(e._0)+")";case 2:return e._0?e._1+" <= "+ps(e._2)+Ee(e._3):e._1+" = "+ps(e._2)+Ee(e._3);case 3:return"$display("+vs(e._0,e._1)+")";case 4:return"$monitor("+vs(e._0,e._1)+")";case 5:return"$finish("+Ee(e._0)+")";case 6:return"goto +"+String(e._0);case 7:return"goto +"+String(e._1)+" unless "+Ee(e._0)}}function nh(e,n,t,r){var i=bd(t),o=" "+(L(n,r)?i+";":i+`;
`);return L(e,r)?N.jsx("b",{children:o}):o}function th(e,n){var t=n.length-1|0;return tn(function(r,i){return nh(e,t,r,i)},n)}function rh(e){return pd(" ",["assign",Sd(e.delay),e.lhs,"=",Ee(e.rhs)+";"])}function ih(e){return e!==void 0?" = "+Ee(e):""}function oh(e){return"logic "+e.target+ih(e.init)+";"}function lh(e){switch(e){case 0:return"wire";case 1:return"wand";case 2:return"wor"}}function ah(e){return pd(" ",[lh(e.type_),Sd(e.delay),e.name+";"])}function gr(e){if(typeof e=="number")return e!==0?"final":"initial";switch(e._0){case 0:return"always";case 1:return"always_comb";case 2:return"always_ff";case 3:return"always_latch"}}function ms(e,n,t){var r=n.proc_type===1?"Final block":"Process",i=[N.jsx("span",{children:"// "+r+" "+String(t+1|0),className:"comment"})],o=n.proc_type===1||I(e,t).state===0?-1:I(e,t).pc;return xd(Ya([i,[`
`+gr(n.proc_type),` begin
`],th(o,n.stmts),[`
end`]],[]))}function uh(e){switch(e){case 0:return"finished";case 1:return"running";case 2:return"waiting"}}function sh(e){return e.TAG===2?N.jsx("li",{children:"nba("+e._1+" <= "+On(e._2)+")"},String(e._0)):Q("impossible")}function ul(e,n){switch(n.TAG|0){case 0:var t=n._1;return"update("+I(e,t).lhs+"("+String(t)+")): "+On(n._2);case 1:return"eval(proc: "+String(n._1+1|0)+", "+n._2+" = "+On(n._3)+")";case 2:return"nba("+n._1+" <= "+On(n._2)+")";case 3:return"eval(proc: "+String(n._1+1|0)+")";case 4:return"eval-d(proc: "+String(n._1+1|0)+")";case 5:return N.jsxs("ol",{children:["NBA events:",gn(n._1,sh)]})}}function sl(e){return L(e,[])?[]:[Za(`
`,e)]}function ch(e,n){return xd(md(`

`,Ya([sl(te(ah,e.nets)),sl(te(oh,e.vars)),sl(te(rh,e.conts)),tn(function(t,r){return ms(n,t,r)},e.procs),tn(function(t,r){return ms(n,t,r)},e.finals)],[])))}function dh(e){return e!==void 0?N.jsx("code",{children:bd({TAG:4,_0:e[0],_1:e[1]})}):"No monitor"}function fh(e){if(e!==void 0)return Jt(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}function ph(e,n){if(e!==void 0)return _t(n(Jt(e)))}function vh(e,n){return ph(e,Qn(n))}function mh(e,n){return e!==void 0?Jt(e):n}function Td(e){return e!==void 0}function me(e){return e!==void 0?e.h:0}function Ve(e,n,t,r){var i=me(e),o=me(r);return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r}}function sn(e,n){return{k:e,v:n,h:1,l:void 0,r:void 0}}function hs(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function hh(e,n){return e.v===n?e:{k:e.k,v:n,h:e.h,l:e.l,r:e.r}}function _s(e,n,t,r){var i=e!==void 0?e.h:0,o=r!==void 0?r.h:0;if(i>(o+2|0)){var l=e.l,a=e.r;return me(l)>=me(a)?Ve(l,e.k,e.v,Ve(a,n,t,r)):Ve(Ve(l,e.k,e.v,a.l),a.k,a.v,Ve(a.r,n,t,r))}if(o<=(i+2|0))return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r};var u=r.l,s=r.r;return me(s)>=me(u)?Ve(Ve(e,n,t,u),r.k,r.v,s):Ve(Ve(e,n,t,u.l),u.k,u.v,Ve(u.r,r.k,r.v,s))}function Zi(e){var n=e.l,t=e.r,r=n!==void 0?Zi(n):0,i=t!==void 0?Zi(t):0;return(1+r|0)+i|0}function Nd(e,n,t){for(;;){var r=n,i=e,o=i.k,l=i.l,a=i.r,u=l!==void 0?Nd(l,r,t):r;t[u]=o;var s=u+1|0;if(a===void 0)return s;n=s,e=a}}function Cd(e,n,t){for(;;){var r=n,i=e,o=i.l,l=i.k,a=i.r,u=o!==void 0?Cd(o,r,t):r;t[u]=[l,i.v];var s=u+1|0;if(a===void 0)return s;n=s,e=a}}function _h(e){if(e===void 0)return[];var n=Zi(e),t=new Array(n);return Cd(e,0,t),t}function gh(e){if(e===void 0)return[];var n=Zi(e),t=new Array(n);return Nd(e,0,t),t}function Kl(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return sn(r[0],r[1]);case 2:var i=e[n],o=e[n-1|0],l=o,a=i;return{k:l[0],v:l[1],h:2,l:sn(a[0],a[1]),r:void 0};case 3:var u=e[n],s=e[n-1|0],p=e[n-2|0],v=p,m=s,h=u;return{k:m[0],v:m[1],h:2,l:sn(h[0],h[1]),r:sn(v[0],v[1])};default:var _=t/2|0,w=Kl(e,n,_),C=e[n-_|0],f=Kl(e,(n-_|0)-1|0,(t-_|0)-1|0);return Ve(w,C[0],C[1],f)}}function Yl(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return sn(r[0],r[1]);case 2:var i=e[n],o=e[n+1|0],l=o,a=i;return{k:l[0],v:l[1],h:2,l:sn(a[0],a[1]),r:void 0};case 3:var u=e[n],s=e[n+1|0],p=e[n+2|0],v=p,m=s,h=u;return{k:m[0],v:m[1],h:2,l:sn(h[0],h[1]),r:sn(v[0],v[1])};default:var _=t/2|0,w=Yl(e,n,_),C=e[n+_|0],f=Yl(e,(n+_|0)+1|0,(t-_|0)-1|0);return Ve(w,C[0],C[1],f)}}function nu(e){var n=e.l;e.l=n.r,n.r=e;var t=me(e.l),r=me(e.r);e.h=(t>r?t:r)+1|0;var i=me(n.l),o=e.h;return n.h=(i>o?i:o)+1|0,n}function tu(e){var n=e.r;e.r=n.l,n.l=e;var t=me(e.l),r=me(e.r);e.h=(t>r?t:r)+1|0;var i=me(n.r),o=e.h;return n.h=(i>o?i:o)+1|0,n}function yh(e){var n=e.l,t=tu(n);return e.l=t,nu(e)}function wh(e){var n=e.r,t=nu(n);return e.r=t,tu(e)}function fi(e){var n=me(e.l),t=me(e.r);return e.h=(n>t?n:t)+1|0,e}function kh(e){var n=e.l,t=e.r,r=me(n),i=me(t);if(r>(2+i|0)){var o=n.l,l=n.r;return hs(o,l)?fi(nu(e)):fi(yh(e))}if(i>(2+r|0)){var a=t.l,u=t.r;return hs(u,a)?fi(tu(e)):fi(wh(e))}return e.h=(r>i?r:i)+1|0,e}function Eh(e,n){for(;;){var t=e;if(t===void 0)return;var r=t.k;if(n===r)return _t(t.v);e=n<r?t.l:t.r}}function xh(e,n){for(;;){var t=e;if(t!==void 0){var r=t.k;if(n===r)return t.v;e=n<r?t.l:t.r;continue}throw{RE_EXN_ID:"Not_found",Error:new Error}}}function Sh(e,n){for(;;){var t=e;if(t===void 0)return!1;var r=t.k;if(n===r)return!0;e=n<r?t.l:t.r}}function Zl(e,n,t){if(e===void 0)return sn(n,t);var r=e.k;if(n===r)return e.k=n,e.v=t,e;var i=e.l,o=e.r;if(n<r){var l=Zl(i,n,t);e.l=l}else e.r=Zl(o,n,t);return kh(e)}function bh(e){var n=e.length;if(n!==0){var t=im(e,function(l,a){return l[0]<a[0]}),r;t>=0?r=Yl(e,0,t):(t=-t|0,r=Kl(e,t-1|0,t));for(var i=t;i<n;++i){var o=e[i];r=Zl(r,o[0],o[1])}return r}}function Je(e,n,t){if(e===void 0)return sn(n,t);var r=e.k;if(n===r)return hh(e,t);var i=e.v;return n<r?_s(Je(e.l,n,t),r,i,e.r):_s(e.l,r,i,Je(e.r,n,t))}var ru=Sh,Th=_h,Ad=bh,Nh=gh,iu=Eh,Pr=xh,gs={contents:0};function dn(e){var n=gs.contents;return gs.contents=n+1|0,n}function Ch(e){return e.TAG===2?[e._1,e._2]:Q("bug: expected EventNBA")}function cl(e){return String(e._0)}var Ah=[],Pd=[],Id=[],ys={active:Ah,inactive:Pd,nba:Id};function Ph(e){if(typeof e=="number")return"running-finals";if(e.TAG===0){var n=e._0;return n!==void 0?"running (proc "+String(n+1|0)+" focused)":"running (no focus)"}var t=e._0;return t!==void 0?"finished("+On(t)+")":"finished"}function ws(e){return!(typeof e=="number"||e.TAG!==0)}function Ih(e){return typeof e=="number"||e.TAG===0?Q("bug: expected Finished"):e._0}function zd(e,n){var t=Hv(function(r){return r.name===n},e);return t!==void 0?t:Q("missing key")}function zh(e,n){return Qv(function(t){return t.lhs===e},n)}function zi(e,n,t){return id(e,n._0,t._0)}function Oe(e,n,t){return{_0:zi(e,n,t)}}function Jl(e){return e._0===0}function $(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return t._0;case 1:return Pr(e,t._0);case 2:var r=$(e,t._0);return{_0:Dv(r._0)};case 3:var i=t._1,o=t._0;if(i!==1)if(i!==0){var l=$(e,o),a=$(e,t._2);switch(i){case 0:case 1:return Q("impossible");case 2:return Oe(rs,l,a);case 3:return Oe(is,l,a);case 4:return Oe(Mv,l,a);case 5:return Oe(Lv,l,a);case 6:return Oe(Vv,l,a);case 7:return Oe($v,l,a);case 8:return Oe(jv,l,a);case 9:return Oe(Gv,l,a)}}else{var u=$(e,o);if(Pv(u._0))return u;var s=$(e,t._2);return Oe(rs,u,s)}else{var p=$(e,o);if(Av(p._0))return p;var v=$(e,t._2);return Oe(is,p,v)}case 4:var m=t._2,h=t._1,_=$(e,t._0),w=_._0;if(w!==1){if(w!==0){var C=$(e,h),f=$(e,m);return Oe(Ov,C,f)}n=h;continue}n=m;continue}}}function Rh(e,n,t){return t?{TAG:0,_0:$(n,t._0)}:{TAG:1,_0:e}}function Ri(e,n){for(;;){var t=e;switch(t.TAG|0){case 0:return!1;case 1:return n===t._0;case 2:e=t._0;continue;case 3:if(Ri(t._0,n))return!0;e=t._2;continue;case 4:if(Ri(t._0,n)||Ri(t._1,n))return!0;e=t._2;continue}}}function Rd(e,n,t){var r=zd(e,n).delay;return Rm(r,t)}function Dh(e,n,t){for(var r=!1,i=0,o=-1,l=-1,a=function(p){return p.TAG===0?p._1===t:!1};!r&&i<e.length;){var u=I(e,i);if(u[0]>n)r=!0;else{var s=ld(a,u[1].active);s!==-1&&(r=!0,o=i,l=s)}i=i+1|0}if(o!==-1)return[o,l]}function Mh(e,n){var t=Qi(0,n,e),r=Qi(n+1|0,e.length,e);return t.concat(r)}function Lh(e,n){switch(n){case 0:return e.active;case 1:return e.inactive;case 2:return e.nba}}function dl(e,n,t){switch(n){case 0:return{active:t,inactive:e.inactive,nba:e.nba};case 1:return{active:e.active,inactive:t,nba:e.nba};case 2:return{active:e.active,inactive:e.inactive,nba:t}}}function yr(e,n,t,r){var i=ld(function(h){return Cv(h[0],t)},e);if(i===-1){var o=dl(ys,n,[r]);return e.concat([[t,o]])}if(L(I(e,i)[0],t)){var l=I(e,i)[1],a=Lh(l,n).concat([r]),u=dl(l,n,a),s=e.slice();return Z(s,i,[t,u]),s}var p=Qi(0,i,e),v=dl(ys,n,[r]),m=Qi(i,e.length,e);return p.concat([[t,v]]).concat(m)}function hn(e,n){var t=n.pc+1|0;return t===e.stmts.length?{pc:0,state:yd(e.proc_type)?1:0}:{pc:t,state:1}}function Ut(e,n){var t=e.status;return typeof t=="number"?I(e.vmodule.finals,n):t.TAG===0?I(e.vmodule.procs,n):Q("impossible")}function Dd(e,n,t){for(;;){var r=e;if(typeof r=="number")return!1;switch(r.TAG|0){case 0:var i=r._0,o=$(n,i),l=$(t,i);return zi(ol,l,o)===0;case 1:var a=r._0,u=$(n,a),s=$(t,a);return zi(ol,s,u)===1;case 2:var p=r._0,v=$(n,p),m=$(t,p);return zi(ol,m,v)!==2;case 3:if(Dd(r._0,n,t))return!0;e=r._1;continue}}}function Oh(e,n,t){switch(e.TAG|0){case 0:var r=e._0;return typeof r=="number"||r.TAG===0?!1:Dd(r._0,n,t);case 1:return Jl($(n,e._0));default:return!1}}function Di(e,n,t,r){if(L(Pr(e.env,t),Pr(r,t))||e.status===0)return e;var i=e.queue.slice(),o=st(function(c){return n!==c[1]?Ri(c[0].rhs,t):!1},tn(function(c,d){return[c,d]},e.vmodule.conts)),l=te(function(c){var d=c[0];return[d.delay,[c[1],$(e.env,d.rhs)]]},o),a=function(c,d){var g=d[1],y=g[1],E=g[0],x=Rd(e.vmodule.nets,I(e.vmodule.conts,E).lhs,d[0]),S=_d(x,y),R=zm(x),A=Dh(c,e.time+R|0,E),K;if(A!==void 0){var de=A[0],U=I(c,de),Y=U[1],We=Y.active.slice();if(We.splice(A[1],1),L(We,[]))K=Mh(c,de);else{var Le=c.slice();Z(Le,de,[U[0],{active:We,inactive:Y.inactive,nba:Y.nba}]),K=Le}}else K=c;return yr(K,0,e.time+S|0,{TAG:0,_0:dn(),_1:E,_2:y})},u=Ie(a,i,l),s=te(function(c){var d=c[1];return[hn(Ut(e,d),c[0]),d]},st(function(c){var d=c[0];return d.state===2?Oh(I(Ut(e,c[1]).stmts,d.pc),e.env,r):!1},tn(function(c,d){return[c,d]},e.proc_env))),p=L(s,[])?e.proc_env:e.proc_env.slice();Ar(function(c){Z(p,c[1],c[0])},s);var v=te(function(c){return{TAG:3,_0:dn(),_1:c[1]}},st(function(c){return c[0].state===1},s)),m=I(u,0),h=m[1],_=h.active.concat(v),w=h.inactive,C=h.nba,f={active:_,inactive:w,nba:C};return Z(u,0,[m[0],f]),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:p,queue:u,monitor:e.monitor,output:e.output,time:e.time}}function Md(e){if(e.vmodule.finals.length===0)return e;var n=te(function(l){return{pc:0,state:1}},e.vmodule.finals),t=tn(function(l,a){return{TAG:3,_0:dn(),_1:a}},e.vmodule.finals),r=[],i=[],o={active:t,inactive:r,nba:i};return{vmodule:e.vmodule,status:0,oldstatus:Ih(e.status),env:e.env,cont_env:e.cont_env,proc_env:n,queue:[[e.time,o]],monitor:e.monitor,output:e.output,time:e.time}}function ks(e,n,t){var r=e.proc_env.slice(),i=I(r,n),o=Ut(e,n),l=i.pc+t|0,a=l===o.stmts.length?{pc:0,state:yd(o.proc_type)?1:0}:{pc:l,state:i.state};return Z(r,n,a),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:r,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}function Vh(e){return e.TAG===0?vm(e._0):Q("expected value found time")}function $h(e){return e.TAG===0?Q("expected time found value"):String(e._0)}function jh(e,n){for(var t="",r=0,i=0;r<e.length;)if(e[r]==="%"){r=r+1|0;var o=e[r];o==="b"?(t=t.concat(Vh(I(n,i))),i=i+1|0):o==="d"?(t=t.concat($h(I(n,i))),i=i+1|0):Q("unsupported format"),r=r+1|0}else t=t.concat(e[r]),r=r+1|0;return t=t.concat(`
`),t}function Gh(e,n){return e.TAG===0?n.TAG===0?L(e._0,n._0):Q("impossible"):n.TAG===0?Q("impossible"):!0}function Ld(e,n,t,r){var i=e.env,o=e.time,l=te(function(p){return Rh(o,i,p)},t),a=r!==void 0?nm(l,r,Gh):!1;if(a)return[l,e.output];var u=jh(n,l),s=e.output.concat(u);return[l,s]}function qh(e,n){if(typeof e=="number")return 0;if(e.TAG!==0)return Q("impossible: focusing when finished?");var t=e._0;return t!==void 0?n===t?{TAG:0,_0:t}:Q("impossible: refocusing?"):{TAG:0,_0:n}}function Es(e){return typeof e=="number"?0:e.TAG===0?{TAG:0,_0:void 0}:{TAG:1,_0:e._0}}function xs(e,n,t){var r=I(n.queue,0),i=r[1],o=i.active.slice(),l=dn(),a={TAG:3,_0:l,_1:t};Wv(e,0,[a],o);var u=i.inactive,s=i.nba,p={active:o,inactive:u,nba:s},v=n.queue.slice();return Z(v,0,[r[0],p]),{vmodule:n.vmodule,status:qh(n.status,t),oldstatus:n.oldstatus,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:v,monitor:n.monitor,output:n.output,time:n.time}}function Ss(e,n){var t=Ut(e,n),r=I(e.proc_env,n),i=I(t.stmts,r.pc);switch(i.TAG|0){case 0:var o=i._0;if(typeof o=="number")return Q("impossible, all stars should have been preprocessed away");if(o.TAG===0){var l=o._0,a=r.pc,u={pc:a,state:2},s=e.proc_env.slice();Z(s,n,u);var p=l===0?1:0,v=yr(e.queue,p,e.time+l|0,{TAG:4,_0:dn(),_1:n});return{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:s,queue:v,monitor:e.monitor,output:e.output,time:e.time}}var m=r.pc,h={pc:m,state:2},_=e.proc_env.slice();return Z(_,n,h),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:_,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};case 1:var w=$(e.env,i._0),C=Jl(w)?hn(t,r):{pc:r.pc,state:2},f=e.proc_env.slice();return Z(f,n,C),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:f,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};case 2:if(i._0){var c=$(e.env,i._3),d=hn(t,r),g=e.proc_env.slice();Z(g,n,d);var y=mh(i._2,0),E=yr(e.queue,2,e.time+y|0,{TAG:2,_0:dn(),_1:i._1,_2:c});return{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:g,queue:E,monitor:e.monitor,output:e.output,time:e.time}}var x=i._2,S=i._1,R=$(e.env,i._3);if(x!==void 0){var A=r.pc,K={pc:A,state:2},de=e.proc_env.slice();Z(de,n,K);var U=x===0?1:0,Y=yr(e.queue,U,e.time+x|0,{TAG:1,_0:dn(),_1:n,_2:S,_3:R});return{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:de,queue:Y,monitor:e.monitor,output:e.output,time:e.time}}var We=e.env,Le=Je(e.env,S,R),Zn=hn(t,r),b=e.proc_env.slice();Z(b,n,Zn);var P=e.vmodule,z=e.status,V=e.oldstatus,G=e.cont_env,Nn=e.queue,He=e.monitor,Jn=e.output,Qe=e.time,Cn={vmodule:P,status:z,oldstatus:V,env:Le,cont_env:G,proc_env:b,queue:Nn,monitor:He,output:Jn,time:Qe};return Di(Cn,-1,S,We);case 3:var ni=Ld(e,i._0,i._1,void 0),jo=hn(t,r),ti=e.proc_env.slice();return Z(ti,n,jo),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:ti,queue:e.queue,monitor:e.monitor,output:ni[1],time:e.time};case 4:var Go=[i._0,i._1,void 0],qo=hn(t,r),ri=e.proc_env.slice();return Z(ri,n,qo),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:ri,queue:e.queue,monitor:Go,output:e.output,time:e.time};case 5:var Fo=$(e.env,i._0),ii=e.status,Uo=r.pc,Bo={pc:Uo,state:2},et=e.proc_env.slice();Z(et,n,Bo);var Wo=e.vmodule,Ho={TAG:1,_0:Fo},Qo=e.oldstatus,oi=e.env,Xo=e.cont_env,Ko=e.queue,Yo=e.monitor,Zo=e.output,Jo=e.time,li={vmodule:Wo,status:Ho,oldstatus:Qo,env:oi,cont_env:Xo,proc_env:et,queue:Ko,monitor:Yo,output:Zo,time:Jo};return typeof ii=="number"||ii.TAG!==0?li:Md(li);case 6:return ks(e,n,i._0);case 7:if(!Jl($(e.env,i._0)))return ks(e,n,i._1);var el=hn(t,r),ai=e.proc_env.slice();return Z(ai,n,el),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:ai,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}}function fl(e,n,t,r){if(e){for(var i=0,o=t.vmodule,l=Es(t.status),a=t.oldstatus,u=t.env,s=t.cont_env,p=t.proc_env,v=t.queue,m=t.monitor,h=t.output,_=t.time,w={vmodule:o,status:l,oldstatus:a,env:u,cont_env:s,proc_env:p,queue:v,monitor:m,output:h,time:_},C=l,f=w;i<=100&&(ws(f.status)||C===0)&&I(f.proc_env,r).state===1;)i===100?(window.alert("Out of fuel: possible infinite loop?"),f=xs(n,f,r)):f=Ss(f,r),i=i+1|0;return f}var c=t.status,d=I(t.proc_env,r).state===1?Ss(t,r):t;return(ws(d.status)||c===0)&&I(d.proc_env,r).state===1?xs(n,d,r):{vmodule:d.vmodule,status:Es(d.status),oldstatus:d.oldstatus,env:d.env,cont_env:d.cont_env,proc_env:d.proc_env,queue:d.queue,monitor:d.monitor,output:d.output,time:d.time}}function Fh(e,n){var t=I(e,n);if(t.TAG===5){var r=t._1;if(r.length!==1){var i=r.slice();i.shift(),e[n]={TAG:5,_0:t._0,_1:i};return}e.splice(n,1);return}e.splice(n,1)}function Uh(e){var n=e.proc_type,t;if(typeof n=="number")t=0;else{var r=n._0;t=r!==1&&r<3?0:1}return{pc:t,state:1}}function Bh(e,n){return n!==void 0?$(e,n):{_0:2}}function bs(e){var n=te(function(i){return{TAG:3,_0:dn(),_1:i[1]}},st(function(i){return $m(i[0].proc_type)},tn(function(i,o){return[i,o]},e.procs))),t=Ad(gn(e.nets,function(i){return[i.name,{_0:zh(i.name,e.conts)?2:3}]})),r=Zv(e.vars,t,function(i,o){return Je(i,o.target,Bh(i,o.init))});return{vmodule:e,status:{TAG:0,_0:void 0},oldstatus:void 0,env:r,cont_env:gn(e.conts,function(i){return{_0:2}}),proc_env:gn(e.procs,Uh),queue:[[0,{active:n,inactive:Pd,nba:Id}]],monitor:void 0,output:"",time:0}}function Wh(e,n,t){var r=$(e.env,n.rhs),i=Rd(e.vmodule.nets,n.lhs,n.delay),o=_d(i,r);return[o,{TAG:0,_0:dn(),_1:t,_2:r}]}function Ts(e){var n=tn(function(r,i){return Wh(e,r,i)},e.vmodule.conts),t=Ie(function(r,i){return yr(r,0,i[0],i[1])},e.queue,n);return{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:t,monitor:e.monitor,output:e.output,time:e.time}}function Hh(e,n){var t=n.status;if(typeof t=="number")return e===0;if(t.TAG!==0)return!1;var r=t._0;if(r===void 0)return!0;var i=I(I(n.queue,0)[1].active,e);return i.TAG===3?r===i._1:!1}function Ns(e,n,t){if(!(e.time===n&&Hh(t,e)))return!1;var r=e.queue[0];if(r===void 0)return!0;var i=r[1].active[0];return i!==void 0&&i.TAG===5?t===0:!0}function Qh(e,n,t){if(e.time!==n)return!1;switch(t.TAG|0){case 1:case 3:case 4:return!0;default:return!1}}function Xh(e,n,t){var r=I(n.queue,0),i=r[1],o=i.active.slice(),l=I(o,t);Fh(o,t);var a=i.inactive,u=i.nba,s={active:o,inactive:a,nba:u},p=n.queue.slice();Z(p,0,[r[0],s]);var v=n.vmodule,m=n.status,h=n.oldstatus,_=n.env,w=n.cont_env,C=n.proc_env,f=n.monitor,c=n.output,d=n.time,g={vmodule:v,status:m,oldstatus:h,env:_,cont_env:w,proc_env:C,queue:p,monitor:f,output:c,time:d};switch(l.TAG|0){case 0:var y=l._1,E=w.slice();Z(E,y,l._2);var x=I(v.conts,y).lhs,S=zd(v.nets,x),R=Vm(S.type_),A=vd(function(nt,nl){return Oe(R,nt,nl)},te(function(nt){return I(E,nt[1])},st(function(nt){return nt[0].lhs===x},tn(function(nt,nl){return[nt,nl]},v.conts)))),K=Je(_,x,A),de=_,U=v,Y=m,We=h,Le=C,Zn=f,b=c,P=d,z={vmodule:U,status:Y,oldstatus:We,env:K,cont_env:E,proc_env:Le,queue:p,monitor:Zn,output:b,time:P};return Di(z,y,x,de);case 1:var V=l._2,G=l._1,Nn=_,He=Je(_,V,l._3),Jn=I(C,G),Qe=Ut(g,G),Cn=hn(Qe,Jn),ni=C.slice();Z(ni,G,Cn);var jo=v,ti=m,Go=h,qo=w,ri=f,Fo=c,ii=d,Uo={vmodule:jo,status:ti,oldstatus:Go,env:He,cont_env:qo,proc_env:ni,queue:p,monitor:ri,output:Fo,time:ii},Bo=Di(Uo,-1,V,Nn);return fl(e,t,Bo,G);case 2:return Q("impossible: EventNBA cannot be in active region");case 3:return fl(e,t,g,l._1);case 4:var et=l._1,Wo=Ut(g,et),Ho=I(C,et),Qo=hn(Wo,Ho),oi=C.slice();Z(oi,et,Qo);var Xo=v,Ko=m,Yo=h,Zo=_,Jo=w,li=f,el=c,ai=d,Xp={vmodule:Xo,status:Ko,oldstatus:Yo,env:Zo,cont_env:Jo,proc_env:oi,queue:p,monitor:li,output:el,time:ai};return fl(e,t,Xp,et);case 5:var Kp=l._1.slice(),Ku=Kp.shift(),Yp=ad(Ku===void 0?void 0:_t(Ku)),Yu=Ch(Yp),Zu=Yu[0],Zp=_,Jp=Je(_,Zu,Yu[1]),ev=v,nv=m,tv=h,rv=w,iv=C,ov=f,lv=c,av=d,uv={vmodule:ev,status:nv,oldstatus:tv,env:Jp,cont_env:rv,proc_env:iv,queue:p,monitor:ov,output:lv,time:av};return Di(uv,-1,Zu,Zp)}}function Cs(e,n){if(!(L(e.status,{TAG:0,_0:void 0})&&e.time===n))return!1;var t=I(e.queue,0),r=t[1];return L(r.active,[])?td(r.inactive,[]):!1}function Kh(e){var n=I(e.queue,0),t=n[1],r=t.inactive,i=[],o=t.nba,l={active:r,inactive:i,nba:o},a=e.queue.slice();return Z(a,0,[e.time,l]),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:a,monitor:e.monitor,output:e.output,time:e.time}}function As(e,n){if(!(L(e.status,{TAG:0,_0:void 0})&&e.time===n))return!1;var t=I(e.queue,0),r=t[1];return L(r.active,[])&&L(r.inactive,[])?td(r.nba,[]):!1}function Yh(e){var n=I(e.queue,0),t=n[1],r=dn(),i=t.nba,o={TAG:5,_0:r,_1:i},l=t.active.concat([o]),a=t.inactive,u=[],s={active:l,inactive:a,nba:u},p=e.queue.slice();return Z(p,0,[e.time,s]),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:p,monitor:e.monitor,output:e.output,time:e.time}}function Ps(e){if(!(L(e.status,{TAG:0,_0:void 0})||e.status===0))return!1;var n=e.queue.length;if(n===0)return Q("impossible");var t=I(e.queue,0)[1];return L(t.active,[])?L(e.status,{TAG:0,_0:void 0})?L(t.inactive,[])?L(t.nba,[]):!1:!0:!1}function Zh(e){var n=e.monitor;if(n===void 0)return e;var t=n[1],r=n[0],i=Ld(e,r,t,n[2]);return{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:[r,t,i[0]],output:i[1],time:e.time}}function Jh(e){var n=e.status;if(typeof n=="number")return{vmodule:e.vmodule,status:{TAG:1,_0:e.oldstatus},oldstatus:void 0,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};if(n.TAG!==0||n._0!==void 0)return Q("impossible");var t=Zh(e),r=t.queue.slice();if(r.shift(),r.length===0)return Md({vmodule:t.vmodule,status:{TAG:1,_0:void 0},oldstatus:t.oldstatus,env:t.env,cont_env:t.cont_env,proc_env:t.proc_env,queue:t.queue,monitor:t.monitor,output:t.output,time:t.time});var i=I(r,0);return{vmodule:t.vmodule,status:t.status,oldstatus:t.oldstatus,env:t.env,cont_env:t.cont_env,proc_env:t.proc_env,queue:r,monitor:t.monitor,output:t.output,time:i[0]}}function Is(e,n){return{TAG:0,_0:e,_1:n}}function zs(e,n){return{TAG:1,_0:e,_1:n}}function pi(e,n,t,r){return{TAG:2,_0:e,_1:n,_2:t,_3:r}}function Rs(e,n){return{TAG:3,_0:e,_1:n}}function Ds(e,n){return{TAG:4,_0:e,_1:n}}function Ms(e){return{TAG:5,_0:e}}function e0(e,n){return{TAG:6,_0:e,_1:n}}function n0(e,n,t){return{TAG:7,_0:e,_1:n,_2:t}}function t0(e){return{TAG:8,_0:e}}function Ls(e,n){return[e,n]}function r0(e){return{TAG:0,_0:e}}function Os(e,n,t){return{TAG:1,_0:e,_1:n,_2:t}}function Vs(e,n,t){return{TAG:3,_0:e,_1:n,_2:t}}function $s(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function i0(e,n){return{TAG:4,_0:e,_1:n}}function o0(e){return{TAG:0,_0:e}}function l0(e){return{TAG:1,_0:e}}function Od(e){switch(e){case"always":return{_0:0};case"always_comb":return{_0:1};case"always_ff":return{_0:2};case"always_latch":return{_0:3};case"final":return 1;case"initial":return 0;default:return Q("impossible proc type")}}const Vd=ohm.grammar(String.raw`
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

    MinTypMax = number ":" number ":" number -- full
              | number -- single

    DelayCont = "#" number -- single
              | "#" "(" MinTypMax ")" -- mintypmax

    TimeCont = DelayCont -- delay
             | "@" id -- id
             | "@" "(" Event_Exp ")" -- event
             | "@" "(" "*" ")" -- star
             | "@" "*" -- star_no_para

    Stmt = id "=" Exp ";" -- blocking
         | id "=" DelayCont Exp ";" -- blocking_delay
         | id "<=" Exp ";" -- nonblocking
         | id "<=" DelayCont Exp ";" -- nonblocking_delay

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

         | "wait" "(" Exp ")" Stmt -- wait_stmt
         | "wait" "(" Exp ")" ";" -- wait

         | "begin" Stmt* "end" -- block

    Delay = "#" "(" MinTypMax "," MinTypMax "," MinTypMax ")" -- three
          | "#" "(" MinTypMax "," MinTypMax ")" -- two
          | "#" "(" MinTypMax ")" -- one
          | "#" number -- one_no_para

    WireType = "wire" | "tri" | "wand" | "triand" | "wor" | "trior"

    Event_Exp = Event_Exp ("or" | ",") Event_Exp1 -- or
               | Event_Exp1
    Event_Exp1 = "posedge" Exp -- posedge
               | "negedge" Exp -- negedge
               | "edge" Exp -- edge
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
	 | Exp6 "===" Exp7 -- case_eq
         | Exp6 "!==" Exp7 -- case_neq
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

    gate = "and" | "nand" | "or" | "nor" | "xor" | "xnor" | "not" | "buf"

    comment = multiLineComment | singleLineComment
    multiLineComment = "/*" (~"*/" any)* "*/"
    singleLineComment = "//" (~lineTerminator any)*
    lineTerminator = "\n"

    space += comment
  }
`),$d=Vd.createSemantics();$d.addOperation("translate",{Module(e,n,t,r,i,o,l){return o.children.map(a=>a.translate())},Decl_no_init(e){return Ls(e.translate(),rr)},Decl_init(e,n,t){return Ls(e.translate(),tr(t.translate()))},GateDecl(e,n,t,r){return t.asIteration().children.map(i=>i.translate())},Top_decl(e,n,t){return r0(n.asIteration().children.map(r=>r.translate()))},Top_net(e,n,t){return Os(e.translate(),al,n.asIteration().children.map(r=>r.translate()))},Top_net_delay(e,n,t,r){return Os(e.translate(),n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_cont(e,n,t,r,i){return Vs(n.translate(),al,r.translate())},Top_cont_delay(e,n,t,r,i,o){return Vs(t.translate(),n.translate(),i.translate())},Top_gate(e,n,t){return $s(e.sourceString,al,n.asIteration().children.map(r=>r.translate()))},Top_gate_delay(e,n,t,r){return $s(e.sourceString,n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_proc(e,n){return i0(e.sourceString,n.translate())},WireType(e){return this.sourceString},MinTypMax_full(e,n,t,r,i){return t.translate()},MinTypMax_single(e){return e.translate()},DelayCont_single(e,n){return n.translate()},DelayCont_mintypmax(e,n,t,r){return t.translate()},TimeCont_delay(e){return Om(e.translate())},TimeCont_id(e,n){return ss(ll(as(n.translate())))},TimeCont_event(e,n,t,r){return ss(t.translate())},TimeCont_star(e,n,t,r){return fs},TimeCont_star_no_para(e,n){return fs},Stmt_blocking(e,n,t,r){return pi(cs,e.translate(),rr,t.translate())},Stmt_blocking_delay(e,n,t,r,i){return pi(cs,e.translate(),tr(t.translate()),r.translate())},Stmt_nonblocking(e,n,t,r){return pi(ds,e.translate(),rr,t.translate())},Stmt_nonblocking_delay(e,n,t,r,i){return pi(ds,e.translate(),tr(t.translate()),r.translate())},Stmt_if(e,n,t,r,i){return e0(t.translate(),i.translate())},Stmt_if_else(e,n,t,r,i,o,l){return n0(t.translate(),i.translate(),l.translate())},Stmt_display(e,n,t,r,i,o,l){return Rs(t.translate(),i.asIteration().children.map(a=>a.translate()))},Stmt_display_no_args(e,n,t,r,i){return Rs(t.translate(),[])},Stmt_monitor(e,n,t,r,i,o,l){return Ds(t.translate(),i.asIteration().children.map(a=>a.translate()))},Stmt_monitor_no_args(e,n,t,r,i){return Ds(t.translate(),[])},Stmt_finish(e,n){return Ms(di(ci(rl)))},Stmt_finish_arg(e,n,t,r,i){return Ms(t.translate())},Stmt_time_stmt(e,n){return Is(e.translate(),tr(n.translate()))},Stmt_time(e,n){return Is(e.translate(),rr)},Stmt_wait_stmt(e,n,t,r,i){return zs(t.translate(),tr(i.translate()))},Stmt_wait(e,n,t,r,i){return zs(t.translate(),rr)},Stmt_block(e,n,t){return t0(n.children.map(r=>r.translate()))},Delay_one(e,n,t,r){return us(t.translate())},Delay_one_no_para(e,n){return us(n.translate())},Delay_two(e,n,t,r,i,o){return Cm(t.translate(),i.translate())},Delay_three(e,n,t,r,i,o,l,a){return Am(t.translate(),i.translate(),l.translate())},Event_Exp(e){return e.translate()},Event_Exp_or(e,n,t){return Lm(e.translate(),t.translate())},Event_Exp1_exp(e){return ll(e.translate())},Event_Exp1_posedge(e,n){return Dm(n.translate())},Event_Exp1_negedge(e,n){return Mm(n.translate())},Event_Exp1_edge(e,n){return ll(n.translate())},Exp(e){return e.translate()},Exp_cond(e,n,t,r,i){return Tm(e.translate(),t.translate(),i.translate())},Exp1(e){return e.translate()},Exp1_lor(e,n,t){return _m(e.translate(),t.translate())},Exp2(e){return e.translate()},Exp2_land(e,n,t){return hm(e.translate(),t.translate())},Exp3(e){return e.translate()},Exp3_bor(e,n,t){return ym(e.translate(),t.translate())},Exp4(e){return e.translate()},Exp4_bxor(e,n,t){return wm(e.translate(),t.translate())},Exp5(e){return e.translate()},Exp5_band(e,n,t){return gm(e.translate(),t.translate())},Exp6(e){return e.translate()},Exp6_eq(e,n,t){return Em(e.translate(),t.translate())},Exp6_neq(e,n,t){return xm(e.translate(),t.translate())},Exp6_case_eq(e,n,t){return Sm(e.translate(),t.translate())},Exp6_case_neq(e,n,t){return bm(e.translate(),t.translate())},Exp7(e){return e.translate()},Exp7_add(e,n,t){return km(e.translate(),t.translate())},Exp8(e){return e.translate()},Exp8_not(e,n){return mm(n.translate())},Exp9_id(e){return as(e.translate())},Exp9_bit(e){return di(e.translate())},Exp9_zero(e){return di(ci(os))},Exp9_one(e){return di(ci(rl))},Exp9_paren(e,n,t){return n.translate()},ExpOrTime_exp(e){return Nm(e.translate())},ExpOrTime_time(e){return Bm},number(e){return parseInt(this.sourceString,10)},bit(e,n){var t;switch(n.sourceString.toLowerCase()){case"1":t=rl;break;case"0":t=os;break;case"x":t=qv;break;case"z":t=Fv;break;default:throw"Impossible!"}return ci(t)},string(e,n,t){return n.sourceString},id(e,n){return this.sourceString}});function a0(e){try{const n=Vd.match(e);return o0($d(n).translate())}catch(n){if(n instanceof TypeError)return l0(n.message);throw n}}var pl={contents:0};function jd(e){return pl.contents=pl.contents+1|0,e+("/"+pl.contents)}function u0(e){return e==null?!1:typeof e.RE_EXN_ID=="string"}var s0=jd("Compiler.CompileError");function c0(e){return{target:e[0],init:e[1]}}function d0(e,n,t){var r=t[0],i;switch(e){case"triand":case"wand":i=1;break;case"tri":case"wire":i=0;break;case"trior":case"wor":i=2;break;default:i=Q("impossible net type")}var o=vh(t[1],function(l){return{lhs:r,delay:0,rhs:l}});return[{type_:i,name:r,delay:n},o]}function tt(e){switch(e.TAG|0){case 0:var n=e._1,t=e._0;return n!==void 0?[{TAG:0,_0:t}].concat(tt(n)):[{TAG:0,_0:t}];case 1:var r=e._1,i=e._0;return r!==void 0?[{TAG:1,_0:i}].concat(tt(r)):[{TAG:1,_0:i}];case 2:return[{TAG:2,_0:e._0,_1:e._1,_2:e._2,_3:e._3}];case 3:return[{TAG:3,_0:e._0,_1:e._1}];case 4:return[{TAG:4,_0:e._0,_1:e._1}];case 5:return[{TAG:5,_0:e._0}];case 6:var o=tt(e._1);return[{TAG:7,_0:e._0,_1:o.length+1|0}].concat(o);case 7:var l=tt(e._1),a=tt(e._2);return[{TAG:7,_0:e._0,_1:l.length+2|0}].concat(l,[{TAG:6,_0:a.length+1|0}],a);case 8:return Ie(function(u,s){return u.concat(tt(s))},[],e._0)}}function f0(e,n){switch(n.TAG|0){case 0:var t=te(c0,n._0);return{vars:e.vars.concat(t),nets:e.nets,conts:e.conts,procs:e.procs,finals:e.finals};case 1:var r=n._1,i=n._0,o=tm(te(function(_){return d0(i,r,_)},n._2)),l=te(fh,st(Td,o[1]));return{vars:e.vars,nets:e.nets.concat(o[0]),conts:e.conts.concat(l),procs:e.procs,finals:e.finals};case 2:return Q("impossible: gates should have been pre-processed away");case 3:var a=n._0,u=n._1,s=n._2,p={lhs:a,delay:u,rhs:s};return{vars:e.vars,nets:e.nets,conts:e.conts.concat([p]),procs:e.procs,finals:e.finals};case 4:var v=Od(n._0),m=tt(n._1),h={proc_type:v,stmts:m};return v===1?{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs,finals:e.finals.concat([h])}:{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs.concat([h]),finals:e.finals}}}function p0(e){return Ie(f0,wd,e)}var vl=Ad([["empty.sv",`module empty;

// See the modules under 00 in the top-left menu for
// some introductory notes on how to use VV and
// notes on the semantics of Verilog

// The other modules included illustrate various
// aspects of the semantics Verilog. The modules are
// commented and grouped by theme, e.g., modules
// discussing continuous assignments can be found
// under "cont" and modules discussing final blocks
// can be found under "end"

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
`],["misc/monitor4.sv",`module monitor4;

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

// The standard is not clear on what should happen
// if nothing change during the time slot the
// monitor is installed; it seems that current
// simulators print unconditionally, so VV is
// doing the same.

logic a;

initial $monitor("a = %b", a);

endmodule
`],["misc/monitor3.sv",`module monitor3;

// Another edge-case, with only $time

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
// Verilog because of the history of the language.
// That is, different versions of Verilog handle
// initialisation of variables differently.

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
`],["schedule/seq_comb02.sv",`module seq_comb02;

// Synopsys VCS seems to optimise away/interleaved 
// some always blocks that are sufficiently similar
// to just an assignment where the rhs of the assignment
// is just a variable, e.g., running the following
// in VCS prints "1x11xx":

logic a, b1, b2, b3, b4, b5;

initial begin
 a = 1;
 $display("%b%b%b%b%b%b", a, b1, b2, b3, b4, b5);
end

// Interestingly, always_comb blocks seem to not
// be interleaved
always_comb b1 = a;

// Straightforward assignment with variable as rhs,
// interleaved
always @(*) b2 = a;

// Also interleaved
always @(*) begin
 b3 = a;
 b3 = b3;
end

// Not interleaved
always @(*) begin
 b4 = a;
 b4 = a;
end

// Not interleaved either, complex rhs
always @(*) b5 = a + 1;

endmodule
`],["schedule/seq_comb06.sv",`module seq_comb06;

// Test of more complex and deeper propagation
// for continuous assignments

// Riviera, Xcelium, and Questa give:
//
// 1 =(xx) !(xx) ~(xx) +(xx)
//
// VCS gives:
//
// 1 =(11) !(01) ~(01) +(01)
//
// Icarus gives:
//
// 1 =(11) !(01) ~(xx) +(xx)

logic a;

wire b1, b2, b3, b4, b5, b6, b7, b8;

initial begin
 a = 1;
 $display("%b =(%b%b) !(%b%b) ~(%b%b) +(%b%b)", a, b1, b2, b3, b4, b5, b6, b7, b8);
end

assign b1 = a;

assign b2 = b1;

assign b3 = !a;

assign b4 = !b3;

assign b5 = ~a;

assign b6 = ~b5;

assign b7 = a + 1;

assign b8 = b7 + 1;

endmodule
`],["schedule/seq_comb07.sv",`module seq_comb07;

/*

More propagation test

Some simulators give:

1 -> x -> x -> x -> x
1 -> 0 -> x -> x -> x
1 -> 0 -> 1 -> x -> x
1 -> 0 -> 1 -> 0 -> x
1 -> 0 -> 1 -> 0 -> 1

whereas others simply give:

1 -> x -> x -> x -> x
1 -> 0 -> 1 -> 0 -> 1

(Can be a result of running all blocks
and continuous assignments in declaration
order vs. running blocks and continuous
assignments in separate phases.)

*/

logic a;

wire b1, b2, b3, b4;

always_comb begin
 a = 1;
 $display("%b -> %b -> %b -> %b -> %b",
          a, b1, b2, b3, b4);
end

assign b1 = a + 1;

assign b2 = b1 + 1;

assign b3 = b2 + 1;

assign b4 = b3 + 1;

endmodule
`],["schedule/seq_comb03.sv",`module seq_comb03;

// Extension of seq_comb01, including two gate primitives

logic a, out_proc;

wire out_cont = a;

always_comb out_proc = a;

wire out_gate_buf, out_gate_and;

buf (out_gate_buf, a);

and (out_gate_and, a, a);

initial begin
 $display("cont = %b, proc = %b, gate-buf = %b, gate-and = %b",
          out_cont, out_proc, out_gate_buf, out_gate_and);
 a = 1;
 $display("cont = %b, proc = %b, gate-buf = %b, gate-and = %b",
          out_cont, out_proc, out_gate_buf, out_gate_and);
end

endmodule
`],["schedule/seq_comb08.sv",`module seq_comb08;

// Variant of seq_comb01, some
// simulators will not print "cont!"

logic a_cont, a_proc, out_proc;

wire out_cont = a_cont;

always_comb out_proc = a_proc;

initial begin
 a_cont = 1;
 @(posedge out_cont);
 $display("cont!");
end

initial begin
 a_proc = 1;
 @(posedge out_proc);
 $display("proc!");
end

endmodule
`],["schedule/always_initial.sv",`module always_initial;

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
`],["schedule/clk_inp_race1.sv",`module clk_inp_race1;

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
`],["schedule/seq_comb09.sv",`module seq_comb09;

// Further investigations into interleavings between
// procedural processes and continuous assignments:

logic a, b;

wire c = b;

always_comb begin
 $display("always_comb start");
 a = c;
 b = 1;
end

initial $monitor("%b%b%b", a, b, c);

// All the commercial simulators at EDA playground
// prints "111" and run the always_comb block twice
// whereas Icarus prints "x11" and runs the always_comb
// block only once.

// Somewhat of a borderline case if the above should
// be synthesisable. Yosys considers it synthesisable
// and gives the following:
//
// module seq_comb10;
//  wire a = 1'h1;
//  wire b = 1'h1;
//  wire c = 1'h1;
// endmodule

endmodule
`],["schedule/read_clk_after_posedge.sv",`module read_clk_after_posedge;

// Example suggested by Niklas Sörensson during FMCAD'22

logic clk = 0;
always #1 clk <= ~clk;

// This will always print 1
always @(posedge clk) $display("%b", clk);

//
// Alternative, see the discussion in seq_comb01.sv
// on procedural processes and continuous assignments:
//
// wire clk2;
// assign clk2 = clk;
//
// always @(posedge clk) $display("%b", clk2);
//

endmodule
`],["schedule/clk_inp_race2.sv",`module clk_inp_race2;

// See clk_inp_race1

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
`],["schedule/seq_comb04.sv",`module seq_comb04;

// Extension of seq_comb01, does it matter if the
// continuous assignment is writing to a variable
// instead of a net?

// Seems to not affect output of simulators

logic a;

wire out_net;
assign out_net = a;

logic out_var;
assign out_var = a;

initial begin
 $display("out_net = %b, out_var = %b", out_net, out_var);
 a = 1;
 $display("out_net = %b, out_var = %b", out_net, out_var);
end

endmodule
`],["schedule/seq_comb10.sv",`module seq_comb10;

// More interleavings between procedural processes
// and continuous assignments. Seems that all tested
// simulators print "111" here.

logic a, b;

wire c = b;

always_comb begin
 $display("a = c");
 a = c;
end

always_comb begin
 $display("b = 1");
 b = 1;
end

initial $monitor("%b%b%b", a, b, c);

endmodule
`],["schedule/seq_comb01.sv",`module seq_comb01;

// In these seq_comb* modules we discuss some examples of
// interleavings of procedural processes, continuous 
// assignments, and gates.

// As discussed in the VV paper, arbitrary interleavings
// cannot be allowed. Nevertheless, some existing simulators,
// in some edge cases, do interleavings.

// See the VV paper for a more in-depth discussion and
// the directory interleave-tests in the VV source
// repository for data on how a selection of existing
// Verilog simulators handle interleavings.

// Here follows a simple example:

logic a;

wire b;

assign b = a;

// Should it be possible to print b = x for before but
// b = 1 for after?
initial begin
 $display("before: a = %b, b = %b", a, b);
 a = 1;
 $display("after:  a = %b, b = %b", a, b);
end

endmodule
`],["schedule/seq_comb05.sv",`module seq_comb05;

// Extension of seq_comb01, similar to seq_comb04
// but now with gate primitives instead

// Interestingly, the simulator Aldec Riviera-PRO
// gives the following for seq_comb4:
//
// out_net = x, out_var = x
// out_net = x, out_var = x
//
// But gives the following for this module:
//
// out_net = xx, out_var = xx
// out_net = xx, out_var = 1x

logic a;

wire out_net, not_out_net;
buf (out_net, a);
not (not_out_net, a);

logic out_var, not_out_var;
buf (out_var, a);
not (not_out_var, a);

initial begin
 $display("net = %b%b, var = %b%b", out_net, not_out_net, out_var, not_out_var);
 a = 1;
 $display("net = %b%b, var = %b%b", out_net, not_out_net, out_var, not_out_var);
end

endmodule
`],["xx_more/paper/nbinterleave.sv",`module nbinterleave;

logic a;

initial begin
 a <= 0;
 a <= 1;
end

always @(*)
 $display("a = %b", a);
   
endmodule
`],["xx_more/paper/continterleave.sv",`module continterleave;

logic a;
   
wire b;
   
assign b = a;

initial begin
 $display("b = %b", b);
 a = 1;
 $display("b = %b", b);
end

endmodule
`],["xx_more/paper/interleave.sv",`module interleave;

logic a, b;

always @(a)
 b = a;

initial begin
 a = 0;
 // ...
 a = 1;
end

endmodule
`],["xx_more/paper/binterleave.sv",`module binterleave;

logic a;

initial begin
 a = 0;
 a = 1;
end

always @(*)
 $display("a = %b", a);
   
endmodule
`],["xx_more/Icarus/readme.sv",`module readme;

// The modules in this directory are based on the some of the 
// issues with the Verilog standard raised in
// Documentation/developer/guide/misc/ieee1364-notes.rst
// from the Icarus Verilog simulator: https://github.com/steve/iverilog.
//
// The modules here are based on ieee1364-notes.rst from Git commit 9e4c4d5
//
// Note that ieee1364-notes.rst discusses legacy versions of the Verilog
// standard, not the latest version.

endmodule
`],["xx_more/Icarus/declaration.sv",`module declaration;

// Issue "OBJECTS CAN BE DECLARED ANYWHERE IN THE MODULE"
//
// ieee1364-notes.rst states that the standard is unclear
// on whether code like the following is valid:

 initial foo = 1;

 reg foo;

// That is, must objects (such as variables) be declared
// before usage or can they be declared anywhere?

// For variables, the latest version of the Verilog
// standard now clearly states that variables must be
// declared before use, see init/var_init2.sv. (The
// discussion in ieee1364-notes.rst is based on older
// versions of the standard.)

// Hence, VV does not accept the above code.

// For nets, because of implicit declarations, the answer
// is necessarily more complex, see the discussion in
// ieee1364-notes.rst. Because VV does not support
// implicit declarations (since we are foremost
// interested in the concurrency semantics of Verilog),
// we do not elaborate further here.

endmodule
`],["xx_more/Icarus/scheduling.sv",`module scheduling;

// Issue "SCHEDULING VALUES IN LOGIC"
//
// ieee1364-notes.rst states that "interaction between blocking
// assignments in procedural code and logic gates in gate-level
// code and expressions is poorly defined" and illustrates this
// using the following code:

 reg a;
 reg b;
 wire q = a & b;

 initial begin
  a = 1;
  b = 0;
  #1 b = 1;
  if (q !== 0) begin
   $display("FAILED -- q changed too soon? %b", q);
   $finish;
  end
 end

// The question is: does the semantics of Verilog allow the
// FAILED message to ever be displayed?

// The above boils down to if procedural and continuous 
// processes can be interleaved. Some simulators allow this,
// others do not, see schedule/seq_comb01.sv.

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
`],["xx_more/Meredith/readme.sv",`module readme;

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

// Meredith et al. states that the following
// Verilog code has unclear semantics:

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

// See also double_wait_blocking,
// because NBA events do not mix with
// other events in the active region
// nonblocking assignments are not more
// nondeterministic/allow for more 
// interleavings than blocking assignments.

logic a;

initial begin
 a <= 0;
 a <= 1;

 a <= 0;
 a <= 1;
end

always @(a) @(a) $display("RUN");

endmodule
`],["seq/swap.sv",`module swap;

logic a = 0;
   
logic b;

// Swaps the contents of a and b
initial begin
 a <= b;
 b <= a;
end   

endmodule
`],["seq/seq_cycle.sv",`module seq_cycle;

logic clk = 0;

logic q0 = 0, q1 = 1;

always #1 clk = !clk;

always @(posedge clk) q0 <= q1;
always @(posedge clk) q1 <= q0;

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

// See also double_wait_nonblocking

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
`],["00/g_nonblocking1.sv",`module g_nonblocking1;

// Nonblocking assignments (<=) are used for race-free
// communication between processes (as illustrated in
// subsequent modules).

// Nonblocking assignments are given semantics
// in terms of the NBA region of the Verilog event queue.
// Notice that when the active region is empty and there
// are events in the NBA region, the NBA region becomes
// blue and clicking the NBA region moves the NBA-region
// events to the active region.

// When moved to the active region, the NBA-region events are
// grouped because they must be executed in the same order
// they were added to the NBA region.

logic a;

initial begin
 a <= 0;
 a <= 1;
end

// Will always print a = x
initial $display("a = %b", a);

endmodule
`],["00/b_twoprocesses.sv",`module b_twoprocesses;

// Verilog is nondeterministic and events in the
// active region can be executed in any order.

// For example, consider the two initial processes below:

logic a;

initial a = 0;

initial a = 1;

// After starting the simulation, notice that there are
// two different blue events in the active region.

// By executing the events in different order,
// the final value of the variable "a" can be
// either 0 or 1. (To test different orders,
// restart the simulation by re-parsing the module.)

endmodule
`],["00/d_interleaving.sv",`module d_interleaving;

// As discussed in the VV paper, the standard
// says that processes can be preempted at any point;
// in other words, arbitrary interleavings are allowed.
// This, as explained in the paper, can lead to
// processes "missing" events they should have been
// listening for. Therefore, VV does not allow
// process preemption.

// In other words, in VV, processes execute from
// blocking statements to blocking statements.

// Consequently, e.g., the following will only ever
// print x or 1, never 0.

logic a;

initial begin
 a = 0;
 a = 1;
end

initial $display("a = %b", a);

// Here we also for the first time can see the 
// difference between clicking a blue event and
// the blue event's fast-forward button. If we
// click the blue event process 1, the simulation
// status will change to "running (proc 1 focused)"
// and with this status we cannot run process 2
// (since preemption of processes are not allowed).
// If we click the blue event again process 1
// finishes and process 2 can be run.
// If we instead would have clicked the fast-forward
// button when we initially clicked the blue event,
// VV would have run process 1 to completion (or,
// for more complex processes, until the process blocks).

endmodule
`],["00/l_monitor.sv",`module l_monitor;

// Like the display task $display, $monitor is useful
// for print-style debugging. We use it in various
// modules bundled with VV.

// The display task $monitor controls a monitor that
// prints when something the monitor depends on has
// changed during the current time slot

// E.g., the following monitor prints the value
// of "a" at the end of each time slot every time
// "a" has changed during the time slot:

logic a;

initial $monitor("a = %b", a);

initial begin
 a = 0;
 #5 a = 1;
end

endmodule
`],["00/c_display.sv",`module c_display;

// The display tasks ($display, $monitor, etc.)
// are useful for printf-style debugging.
//
// The display tasks can be invoked in a great
// variety of ways; e.g., see this call from
// p. 239 of the Verilog standard:
//
// $monitor($time, , "a = %b b = %b", a, b);
//
// In VV, however, to simplify the implementation,
// the first argument must be a format string
// and only %b (for value) and %d (for time)
// are supported.

// E.g., the following is similar to the
// b_twoprocesses module, but we are instead
// illustrating nondeterminism using $display:

logic a;

initial a = 0;

initial $display("a = %b at time %d", a, $time);

endmodule
`],["00/f_zero_delay.sv",`module f_zero_delay;

logic a;
 
// Zero-delayed events are scheduled in the inactive region.
// Such delays can be used for process coordination, e.g.,
// the below ensures that "a" will be 0 at the end of simulation

initial #0 a = 0;

initial a = 1;

// However, modern Verilog uses nonblocking assignments for
// communication between processes, as illustrated in
// the subsequent modules.

endmodule
`],["00/m_values.sv",`module m_values;

// Currently, only bit values are supported in VV,
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
`],["00/e_delay.sv",`module e_delay;

// Delays are not synthesisable but important in
// writing test-benches. We now illustrate how delays
// are handled in the Verilog event queue.

logic a;

// This will delay the assignment to "a", the process
// will block for ten clock cycles and then continue
initial #10 a = 0;

// To run the simulation from start to finish:
//
// - first click the evaluation event of the process;
// - then "simulation time" to progress to time slot 10;
// - and then lastly click the evaluation event of the
//   process again

endmodule
`],["00/a_start.sv",`// Welcome to VV -- an interactive Verilog simulator!

// This directory ("00") contains a short series of modules
// that illustrate basic aspects of Verilog and VV;
// hopefully the modules should provide sufficient
// background to understand the other modules
// bundled with VV.

// As a start, let's consider the following
// simple module consisting of a variable "a" and
// a process assigning 0 to "a":

module a_start;

logic a;

// An "initial" process is a process that executes
// once and then terminates
initial a = 0;

endmodule

// To load the above Verilog module into the simulator,
// click the "Parse" button in the bottom-left corner.

// After the module has been parsed and validated, the
// module is shown in normalised form to the right.

// To the right of the normalised module,
// VV visualises the current state of Verilog's
// event queue and other simulation state.

// VV's event queue consist of three regions:
//
// - active,
// - inactive,
// - and NBA (nonblocking assignments).

// After loading the above module, you will see a
// blue-marked event in the active region for time 0.

// First, see that the variable "a" has value x in
// the environment. Now, clicking the blue event
// will progress the simulation by running the 
// initial process of the module. After clicking the
// event, the variable "a" now has value 0 in the
// environment since the assignment in the process
// has now been executed.

// (Clicking the fast-forward arrow right of the blue
// event will run the process until it blocks -- we 
// will see the difference between single-stepping
// and multi-stepping a process in other modules in
// this directory.)

// There are now no more events to execute in the
// current time, therefore "Simulation time" is now
// blue.

// Clicking "Simulation time" progresses to simulation
// to the next time slot. Because there are no future
// time slots/events, the simulation finishes.

// Time slots and simulation time will make more sense
// later when delays have been introduced.
`],["00/i_nonblocking3.sv",`module i_nonblocking3;

// We now consider blocking (=) vs. nonblocking (<=)
// assignments in real-world code.

logic clk = 0;
logic foo = 1;
logic bar;

// Model of a clock, toggles 0-1-0-1-0-...
// using a delayed assignment
always #1 clk = ~clk;

// A process that executes every time the clock toggles to high
always @(posedge clk)
 foo = foo + 1;

// Another process that executes every time the clock toggles to high
always @(posedge clk)
 bar = foo;

// Notice that the third process depends on the second process
// since the third process reads foo which is written to by
// the second process.

// Problematically, in which order the second and third process
// executes affect the values of the variables at each clock cycle.
//
// The module j_nonblocking4 illustrates how using so-called
// nonblocking assignments (<=) instead of so-called blocking 
// assignments (=), as above, solves this problem.

endmodule
`],["00/k_continuous.sv",`module k_continuous;

// VV also supports so-called continuous assignments

// Continuous assignments follow a completely
// different evaluation model than the types of
// processes introduced this far in the tutorial do

// E.g., the net "a" below has two drivers,
// and the so-called resolution function for
// wire nets resolves the two values to 1
// (whereas for variables, the last write 
// decides its values):

wire a;

assign a = 1'b1;
assign a = 1'bz;

// For wire nets, the following drivers results in a
// value x for the net "b":

wire b;

assign b = 1'b1;
assign b = 1'b0;

// Whereas for wand nets, the same drivers result in 0:

wand c;

assign c = 1'b1;
assign c = 1'b0;

// (Make sure to run all events to see the correct results!)

// Continuous assignments is a big topic,
// see the cont directory for more

endmodule
`],["00/h_nonblocking2.sv",`module h_nonblocking2;

// Even after being moved to the active region,
// execution of NBA events should be interleaved
// with other types of events.
//
// If such interleavings would be allowed,
// nonblocking assignments would be more
// nondeterministic than blocking assignments
// in the sense illustrated by the following
// code:

logic a, b;

initial begin
 a = 0;
 a = 1;
end

// Always processes loop infinitely,
// and the syntax "@(a)" means to block
// until the variable a changes its value
always @(a) $display("RUN a");

initial begin
 b <= 0;
 b <= 1;
end

always @(b) $display("RUN b");

// If non-NBA events would be allowed to
// interleave NBA events, RUN b could be
// printed more times than RUN a.
//
// (Compare this to the preemption-problem
// discussed in the d_interleaving module.)

endmodule
`],["00/j_nonblocking4.sv",`module j_nonblocking4;

logic clk = 0;
logic foo = 1;
logic bar;

always #1 clk = ~clk;

// Now using nonblocking assignment (<=) instead of blocking (=)
always @(posedge clk)
 foo <= foo + 1;

// Similarly, nonblocking instead of blocking assignment 
always @(posedge clk)
 bar <= foo;

// Now, because nonblocking assignments are used, the order
// of execution of the two processes does not matter

endmodule
`],["end/final_nonblocking.sv",`module final_nonblocking;

logic a;

// Has no effect
final a <= 0;

endmodule
`],["end/monitor_finish.sv",`module monitor_finish;

// Simulation exists immediately on $finish call,
// monitor not invoked

logic a;

initial $monitor("%b", a);

final $finish;

endmodule
`],["end/final2.sv",`module final2;

logic a;

initial $finish;

final a = 0;

endmodule
`],["end/final_order.sv",`module final_order;

logic a;

// The standard says that simulators should define a deterministic
// order final blocks are executed in; for VV this is simply source
// order. Therefore, in VV, "a" will always be 1 at the end of simulation.

// Note that the standard also says that all final blocks should be
// executed by the same process. In VV, however, we assign 
// one process per block since this allows us to re-use
// the simulation interface for stepping processes.

// (To reuse the interface, we also empty the queue before
// running the final blocks, which maybe should not be done either.)

final a = 0;

final a = 1;

endmodule
`],["end/monitor_final.sv",`module monitor_final;

// Most simulators seems to run monitors before
// executing final blocks, which makes sense since
// final blocks are supposed to run at the end of
// simulation. (I.e., x is printed below.)

logic a;

initial $monitor("%b", a);

final a = 0;

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
`],["delay/delay_nonblocking1.sv",`module delay_nonblocking1;

// Simple example of delayed nonblocking assignment

logic a, b;

initial #3 a <= 0;

initial begin
 b <= #3 1;
 b <= #4 b;
 b <= #3 1'bz;
end

endmodule
`],["delay/delay_blocking2.sv",`module delay_blocking2;

// Inspired by "Example 6" from p. 240
// of the Verilog standard

logic a;

initial #8 a = #8 1;

initial #12 a = #4 0;

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
`],["delay/mintypmax.sv",`module mintypmax;

logic a, b;

// For minimum, typical, and maximum delay expressions,
// VV simply uses the typical delay

initial #(2:3:5) a = 1;

initial b = #(0:1:2) 1;

endmodule
`],["delay/delay_blocking1.sv",`module delay_blocking1;

// Simple example of delayed blocking assignment

logic a;

initial begin
 a = #3 1;
 a = #4 a;
end

endmodule
`],["delay/delay_nonblocking2.sv",`module delay_nonblocking2;

// "Example 6" from p. 240
// of the Verilog standard

logic a;

initial #8 a <= #8 1;

initial #12 a <= #4 0;

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

// (It is not clear that this is the intended meaning.
// Please ping me in case you know a problem with the
// semantics implemented here.)

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
`],["cont/cont_delay5.sv",`module cont_delay5;

// Test for whether transitions are relative to
// driver value or net value.
// 
// The alternative that makes the most sense is
// relative to driver value, which is what 
// simulators seems to do -- VV takes this approach
// as well.

wire a;
logic b = 1'bz;

assign a = 1;

assign #(1,2) a = b;

// For second driver, we have the following:
//
// _ -> 0 delay is 2
// _ -> x delay is min(1, 2), i.e., 1
//
// Therefore, if transitions are relative to
// driver values, then the delay at b <= 0 (below)
// will be 2, otherwise it will 1.

initial begin
 #5 b <= 0;
end

initial $monitor("time = %d, a = %b, b = %b", $time, a, b);

endmodule
`],["cont/cont_delay4.sv",`module cont_delay4;

// See cont_delay3

wire a;
logic b = 0;

assign #(1,2,0) a = b;

initial begin
 #5 b <= 1;
 #5 b <= 0;
end

initial $monitor("time = %d, a = %b, b = %b", $time, a, b);

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
`],["cont/cont_nonblocking.sv",`module cont_nonblocking;

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
   
`],["cont/cont_delay3.sv",`module cont_delay3;

wire a;

// Continuous assignments also support for following
// syntax for delays:
//
// (transition to 1, transition to 0, transition to high-impedance)

assign #(1,1,0) a = 1;
  
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
`]]),ee=jd("Elaborator.ElaboratorError");function ou(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:ee,_1:"Expected data reference, found: "+Ee(e),Error:new Error}}var v0=[],m0={env:void 0,out:v0};function Ir(e,n){return{env:e.env,out:e.out.concat([n])}}function h0(e,n){if(!ru(e.env,n))throw{RE_EXN_ID:ee,_1:"Undefined reference: "+n,Error:new Error}}function _0(e,n){var t=iu(e.env,n);if(t!==void 0){if(t)return;throw{RE_EXN_ID:ee,_1:"Undefined var: "+n,Error:new Error}}throw{RE_EXN_ID:ee,_1:"Undefined var: "+n,Error:new Error}}function Ae(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return;case 1:return h0(e,t._0);case 2:n=t._0;continue;case 3:return Ar(function(r){return Ae(e,r)},[t._0,t._2]);case 4:return Ar(function(r){return Ae(e,r)},[t._0,t._1,t._2])}}}function Gd(e,n){if(typeof n!="number")return n.TAG===3?Ar(function(t){return Gd(e,t)},[n._0,n._1]):Ae(e,n._0)}function g0(e,n){if(!(typeof n=="number"||n.TAG===0))return Gd(e,n._0)}function y0(e,n){if(n)return Ae(e,n._0)}function w0(e,n){var t=n[1],r=n[0];if(ru(e.env,r))throw{RE_EXN_ID:ee,_1:"Name collision: "+r,Error:new Error};hd(t,function(o){return Ae(e,o)});var i=Je(e.env,r,{_0:Td(t)?1:0});return{env:i,out:e.out}}function k0(e,n){var t=n[0];if(ru(e.env,t))throw{RE_EXN_ID:ee,_1:"Name collision: "+t,Error:new Error};hd(n[1],function(i){return Ae(e,i)});var r=Je(e.env,t,0);return{env:r,out:e.out}}function E0(e,n,t){var r=iu(e,t);if(r!==void 0&&r){var i=r._0;if(i!==2){if(i>=3)throw{RE_EXN_ID:ee,_1:"Cannot write to claimed variable: "+t,Error:new Error};return}if(n)throw{RE_EXN_ID:ee,_1:"Cannot write to claimed variable: "+t,Error:new Error}}}function ea(e,n,t,r){for(;;){var i=r;switch(i.TAG|0){case 0:var o=i._1;if(g0(t,i._0),o===void 0)return t;r=o;continue;case 1:var l=i._1;if(Ae(t,i._0),l===void 0)return t;r=l;continue;case 2:var a=i._1;E0(e,n,a),_0(t,a),Ae(t,i._3);var u=Je(t.env,a,{_0:n?3:2});return{env:u,out:t.out};case 3:case 4:break;case 5:return Ae(t,i._0),t;case 6:Ae(t,i._0),r=i._1;continue;case 7:return Ae(t,i._0),Ie(function(s,p){return ea(e,n,s,p)},t,[i._1,i._2]);case 8:return Ie(function(s,p){return ea(e,n,s,p)},t,i._0)}return Ar(function(s){return y0(t,s)},i._1),t}}function an(e){for(;;){var n=e;switch(n.TAG|0){case 0:return;case 1:return fd([n._0]);case 2:e=n._0;continue;case 3:return Dn(an(n._0),an(n._2));case 4:return _r([an(n._0),an(n._1),an(n._2)])}}}function x0(e){if(e)return an(e._0)}function Et(e){for(;;){var n=e;switch(n.TAG|0){case 0:case 1:break;case 2:return an(n._3);case 3:case 4:return _r(te(x0,n._1));case 5:return an(n._0);case 6:return Dn(an(n._0),Et(n._1));case 7:return _r([an(n._0),Et(n._1),Et(n._2)]);case 8:return _r(te(Et,n._0))}var t=n._1;if(t===void 0)return;e=t}}function Mi(e){for(;;){var n=e;switch(n.TAG|0){case 0:case 1:break;case 2:return fd([n._1]);case 6:e=n._1;continue;case 7:return Dn(Mi(n._1),Mi(n._2));case 8:return _r(te(Mi,n._0));default:return}var t=n._1;if(t===void 0)return;e=t}}function qd(e){var n=Et(e),t=Mi(e),r=gd(te(function(o){return{TAG:2,_0:{TAG:1,_0:o}}},Bl(fm(n,Bl(t))))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:e}}function ot(e){switch(e.TAG|0){case 0:if(typeof e._0!="number")return e;var n=e._1;if(n===void 0)return{TAG:0,_0:{TAG:1,_0:0},_1:void 0};var t=ot(n),r=gd(te(function(o){return{TAG:2,_0:{TAG:1,_0:o}}},Bl(Et(t)))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:t};case 6:return{TAG:6,_0:e._0,_1:ot(e._1)};case 7:return{TAG:7,_0:e._0,_1:ot(e._1),_2:ot(e._2)};case 8:return{TAG:8,_0:te(ot,e._0)};default:return e}}function xt(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:var r=t._0;if(typeof r!="number"&&r.TAG===0)throw{RE_EXN_ID:ee,_1:"Time control not allowed inside "+gr(e),Error:new Error};var i=t._1;return i!==void 0?1+xt(e,i)|0:1;case 1:throw{RE_EXN_ID:ee,_1:"Wait statement not allowed inside "+gr(e),Error:new Error};case 2:if(t._2===void 0)return 0;throw{RE_EXN_ID:ee,_1:"Delayed assignments not allowed inside "+gr(e),Error:new Error};case 6:n=t._1;continue;case 7:return xt(e,t._1)+xt(e,t._2)|0;case 8:return pm(te(function(o){return xt(e,o)},t._0));default:return 0}}}function S0(e,n){if(L(e,{_0:1})||L(e,{_0:3})||e===1){if(xt(e,n)===0)return;throw{RE_EXN_ID:ee,_1:"Event control not allowed inside "+gr(e),Error:new Error}}if(L(e,{_0:2})&&xt(e,n)!==1)throw{RE_EXN_ID:ee,_1:"Must be one and one only event control inside always_ff",Error:new Error}}function b0(e,n){if(typeof e=="number")return ot(n);var t=e._0;return t!==1&&t<3?ot(n):qd(n)}function T0(e){if(typeof e!="number")switch(e.TAG|0){case 0:var n=e._0;return n===0?void 0:n;case 1:case 2:throw{RE_EXN_ID:ee,_1:"Delay type not supported in continuously assignments to variables yet",Error:new Error}}}function Fd(e,n){var t=n[2],r=n[1],i=n[0],o=iu(e.env,i);if(o!==void 0)if(o)switch(o._0){case 0:Ae(e,t);var l=T0(r),a=qd({TAG:2,_0:0,_1:i,_2:l,_3:t}),u={TAG:4,_0:"always_comb",_1:a},s=Je(e.env,i,{_0:3});return Ir({env:s,out:e.out},u);case 1:throw{RE_EXN_ID:ee,_1:"Not allowed to write continuously to variable with initialisation: "+i,Error:new Error};case 2:case 3:throw{RE_EXN_ID:ee,_1:"Not allowed to write continuously to already claimed variable: "+i,Error:new Error}}else return Ae(e,t),Ir(e,{TAG:3,_0:i,_1:r,_2:t});else throw{RE_EXN_ID:ee,_1:"Undefined reference: "+i,Error:new Error}}function N0(e,n,t){if(t.length===2){var r=ou(I(t,0)),i=I(t,1),o;switch(e){case"buf":o=i;break;case"not":o={TAG:2,_0:i};break;default:o=Q("impossible gate")}return[r,n,o]}throw{RE_EXN_ID:ee,_1:"Expected two arguments to gate",Error:new Error}}function C0(e){switch(e){case"and":return 2;case"or":return 3;case"xor":return 4;default:return Q("impossible gate")}}function A0(e,n,t){if(t.length===3){var r=ou(I(t,0)),i=C0(e),o=I(t,1),l=I(t,2),a={TAG:3,_0:o,_1:i,_2:l};return[r,n,a]}throw{RE_EXN_ID:ee,_1:"Expected three arguments to gate",Error:new Error}}function P0(e,n){if(n.length===3){var t=ou(I(n,0)),r={TAG:2,_0:{TAG:3,_0:I(n,1),_1:3,_2:I(n,2)}};return[t,e,r]}throw{RE_EXN_ID:ee,_1:"Expected three arguments to gate",Error:new Error}}function I0(e,n,t){if(e==="not"||e==="buf")return N0(e,n,t);if(e==="and"||e==="or")return A0(e,n,t);if(e==="nor")return P0(n,t);throw{RE_EXN_ID:ee,_1:"Unsupported gate: "+e,Error:new Error}}function z0(e,n){return Fd(e,I0(n[0],n[1],n[2]))}function R0(e){return L(e,{_0:1})||L(e,{_0:3})?!0:L(e,{_0:2})}function D0(e,n){var t=n[1],r=n[0],i=Od(r);S0(i,t);var o=ea(e.env,R0(i),e,t),l=b0(i,t);return Ir(o,{TAG:4,_0:r,_1:l})}function M0(e,n){switch(n.TAG|0){case 0:var t=Ie(w0,e,n._0);return Ir(t,n);case 1:var r=Ie(k0,e,n._2);return Ir(r,n);case 2:var i=n._1,o=n._0;return Ie(function(l,a){return z0(l,[o,i,a])},e,n._2);case 3:return Fd(e,[n._0,n._1,n._2]);case 4:return D0(e,[n._0,n._1])}}function L0(e){return Ie(M0,m0,e).out}function O0(e){return u0(e)?e:{RE_EXN_ID:"JsError",_1:e}}function V0(e){var n=bs(wd),t=Ts(n),r=qt.useState(function(){return t}),i=r[1],o=r[0],l=function(y,E,x,S){vn(i,function(R){return Ns(R,E,x)?Xh(y,R,x):R})},a=function(y){vn(i,function(E){return Ps(E)?Jh(E):E})},u=qt.useState(function(){return Pr(vl,"empty.sv")}),s=u[1],p=u[0],v=function(y){var E=a0(p);if(E.TAG===0){var x;try{x=p0(L0(E._0))}catch(A){var S=O0(A);if(S.RE_EXN_ID===ee){window.alert("Elaboration failed: "+S._1);return}if(S.RE_EXN_ID===s0){window.alert("Compilation failed: "+S._1);return}throw S}var R=Ts(bs(x));return vn(i,function(A){return R})}window.alert("Could not parse Verilog code: "+E._0)},m=function(y){vn(s,function(E){return y.target.value}),y.preventDefault()},h=function(y){var E=y.target.value;vn(s,function(x){return Pr(vl,E)}),y.preventDefault()},_=gn(Th(o.env),function(y){var E=y[0];return N.jsx("li",{children:E+": "+On(y[1])},E)}),w=il(o.cont_env,function(y,E){return N.jsx("li",{children:I(o.vmodule.conts,y).lhs+"("+String(y)+"): "+On(E)},String(y))}),C=il(o.proc_env,function(y,E){return N.jsx("li",{children:"state = "+uh(E.state)+", pc = "+String(E.pc)},String(y))}),f=gn(o.queue,function(y){var E=y[1],x=y[0],S=il(E.active,function(U,Y){var We=Ns(o,x,U);return N.jsxs("li",{children:[N.jsx("span",{children:ul(o.vmodule.conts,Y),onClick:function(Le){return l(0,x,U)}}),Qh(o,x,Y)?N.jsx("span",{children:"⏩",className:"multistep",onClick:function(Le){return l(1,x,U)}}):null],className:We?"active-span":""},cl(Y))}),R=gn(E.inactive,function(U){return N.jsx("li",{children:ul(o.vmodule.conts,U)},cl(U))}),A=gn(E.nba,function(U){return N.jsx("li",{children:ul(o.vmodule.conts,U)},cl(U))}),K=Cs(o,x),de=As(o,x);return N.jsxs("li",{children:[N.jsx("b",{children:"Time: "+String(x)}),N.jsxs("ul",{children:[N.jsxs("li",{children:["Active:",N.jsx("ul",{children:S})]}),N.jsxs("li",{children:["Inactive:",N.jsx("ul",{children:R})],className:K?"active":"",onClick:function(U){return vn(i,function(Y){return Cs(Y,x)?Kh(Y):Y})}}),N.jsxs("li",{children:["NBA:",N.jsx("ul",{children:A})],className:de?"active":"",onClick:function(U){return vn(i,function(Y){return As(Y,x)?Yh(Y):Y})}})]})]},"Time"+String(x))}),c=dh(o.monitor),d=gn(Nh(vl),function(y){return N.jsx("option",{children:y},y)}),g=Ps(o);return N.jsx("table",{children:N.jsx("tbody",{children:N.jsxs("tr",{children:[N.jsxs("td",{children:[N.jsx("div",{children:N.jsx("select",{children:d,defaultValue:"empty.sv",onChange:h})}),N.jsx("div",{children:N.jsx("textarea",{cols:60,rows:20,value:p,onChange:m})}),N.jsx("div",{children:N.jsx("button",{children:"Parse",onClick:v})})]}),N.jsxs("td",{children:[N.jsx("p",{children:"Normalised Verilog module:",id:"code-render-title"}),N.jsx("div",{children:ch(o.vmodule,o.proc_env),id:"code-render"})]}),N.jsxs("td",{children:[N.jsx("p",{children:"Simulation time: "+String(o.time),className:g?"active":"",id:"simulation-time",onClick:a}),N.jsx("p",{children:"Status: "+Ph(o.status)}),N.jsx("p",{children:"Environment:"}),N.jsx("ul",{children:_}),N.jsx("p",{children:"Drivers (continuous assignments):"}),N.jsx("ul",{children:w}),N.jsx("p",{children:"Processes:"}),N.jsx("ol",{children:C}),N.jsx("p",{children:"Events:"}),N.jsx("ul",{children:f}),N.jsx("p",{children:"Monitor:"}),N.jsx("p",{children:c})]}),N.jsxs("td",{children:[N.jsx("p",{children:"Output:",id:"output"}),N.jsx("pre",{children:o.output})]})]})}),id:"main-table"})}var $0=V0;function j0(e){if(e!==void 0)return Jt(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}var Ud={exports:{}},De={},Bd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(b,P){var z=b.length;b.push(P);e:for(;0<z;){var V=z-1>>>1,G=b[V];if(0<i(G,P))b[V]=P,b[z]=G,z=V;else break e}}function t(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var P=b[0],z=b.pop();if(z!==P){b[0]=z;e:for(var V=0,G=b.length,Nn=G>>>1;V<Nn;){var He=2*(V+1)-1,Jn=b[He],Qe=He+1,Cn=b[Qe];if(0>i(Jn,z))Qe<G&&0>i(Cn,Jn)?(b[V]=Cn,b[Qe]=z,V=Qe):(b[V]=Jn,b[He]=z,V=He);else if(Qe<G&&0>i(Cn,z))b[V]=Cn,b[Qe]=z,V=Qe;else break e}}return P}function i(b,P){var z=b.sortIndex-P.sortIndex;return z!==0?z:b.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],p=1,v=null,m=3,h=!1,_=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(b){for(var P=t(s);P!==null;){if(P.callback===null)r(s);else if(P.startTime<=b)r(s),P.sortIndex=P.expirationTime,n(u,P);else break;P=t(s)}}function g(b){if(w=!1,d(b),!_)if(t(u)!==null)_=!0,Le(y);else{var P=t(s);P!==null&&Zn(g,P.startTime-b)}}function y(b,P){_=!1,w&&(w=!1,f(S),S=-1),h=!0;var z=m;try{for(d(P),v=t(u);v!==null&&(!(v.expirationTime>P)||b&&!K());){var V=v.callback;if(typeof V=="function"){v.callback=null,m=v.priorityLevel;var G=V(v.expirationTime<=P);P=e.unstable_now(),typeof G=="function"?v.callback=G:v===t(u)&&r(u),d(P)}else r(u);v=t(u)}if(v!==null)var Nn=!0;else{var He=t(s);He!==null&&Zn(g,He.startTime-P),Nn=!1}return Nn}finally{v=null,m=z,h=!1}}var E=!1,x=null,S=-1,R=5,A=-1;function K(){return!(e.unstable_now()-A<R)}function de(){if(x!==null){var b=e.unstable_now();A=b;var P=!0;try{P=x(!0,b)}finally{P?U():(E=!1,x=null)}}else E=!1}var U;if(typeof c=="function")U=function(){c(de)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,We=Y.port2;Y.port1.onmessage=de,U=function(){We.postMessage(null)}}else U=function(){C(de,0)};function Le(b){x=b,E||(E=!0,U())}function Zn(b,P){S=C(function(){b(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){_||h||(_=!0,Le(y))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var z=m;m=P;try{return b()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var z=m;m=b;try{return P()}finally{m=z}},e.unstable_scheduleCallback=function(b,P,z){var V=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?V+z:V):z=V,b){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=z+G,b={id:p++,callback:P,priorityLevel:b,startTime:z,expirationTime:G,sortIndex:-1},z>V?(b.sortIndex=z,n(s,b),t(u)===null&&b===t(s)&&(w?(f(S),S=-1):w=!0,Zn(g,z-V))):(b.sortIndex=G,n(u,b),_||h||(_=!0,Le(y))),b},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(b){var P=m;return function(){var z=m;m=P;try{return b.apply(this,arguments)}finally{m=z}}}})(Wd);Bd.exports=Wd;var G0=Bd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=qt,Re=G0;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qd=new Set,zr={};function gt(e,n){Bt(e,n),Bt(e+"Capture",n)}function Bt(e,n){for(zr[e]=n,e=0;e<n.length;e++)Qd.add(n[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),na=Object.prototype.hasOwnProperty,q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,js={},Gs={};function F0(e){return na.call(Gs,e)?!0:na.call(js,e)?!1:q0.test(e)?Gs[e]=!0:(js[e]=!0,!1)}function U0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B0(e,n,t,r){if(n===null||typeof n>"u"||U0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function we(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new we(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var lu=/[\-:]([a-z])/g;function au(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(lu,au);ce[n]=new we(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(lu,au);ce[n]=new we(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(lu,au);ce[n]=new we(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function uu(e,n,t,r){var i=ce.hasOwnProperty(n)?ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(B0(n,t,i,r)&&(t=null),r||i===null?F0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Tn=Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vi=Symbol.for("react.element"),St=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),su=Symbol.for("react.strict_mode"),ta=Symbol.for("react.profiler"),Xd=Symbol.for("react.provider"),Kd=Symbol.for("react.context"),cu=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),du=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Yd=Symbol.for("react.offscreen"),qs=Symbol.iterator;function ir(e){return e===null||typeof e!="object"?null:(e=qs&&e[qs]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,ml;function fr(e){if(ml===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ml=n&&n[1]||""}return`
`+ml+e}var hl=!1;function _l(e,n){if(!e||hl)return"";hl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{hl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?fr(e):""}function W0(e){switch(e.tag){case 5:return fr(e.type);case 16:return fr("Lazy");case 13:return fr("Suspense");case 19:return fr("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bt:return"Fragment";case St:return"Portal";case ta:return"Profiler";case su:return"StrictMode";case ra:return"Suspense";case ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kd:return(e.displayName||"Context")+".Consumer";case Xd:return(e._context.displayName||"Context")+".Provider";case cu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case du:return n=e.displayName||null,n!==null?n:oa(e.type)||"Memo";case Pn:n=e._payload,e=e._init;try{return oa(e(n))}catch{}}return null}function H0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oa(n);case 8:return n===su?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Q0(e){var n=Zd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function mi(e){e._valueTracker||(e._valueTracker=Q0(e))}function Jd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Zd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function la(e,n){var t=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Fs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Wn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ef(e,n){n=n.checked,n!=null&&uu(e,"checked",n,!1)}function aa(e,n){ef(e,n);var t=Wn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ua(e,n.type,t):n.hasOwnProperty("defaultValue")&&ua(e,n.type,Wn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Us(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ua(e,n,t){(n!=="number"||Ji(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var pr=Array.isArray;function Lt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Wn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function sa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(pr(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Wn(t)}}function nf(e,n){var t=Wn(n.value),r=Wn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ws(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function tf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ca(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?tf(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hi,rf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Rr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X0=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){X0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),wr[n]=wr[e]})});function of(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||wr.hasOwnProperty(e)&&wr[e]?(""+n).trim():n+"px"}function lf(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=of(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var K0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(e,n){if(n){if(K0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function fa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pa=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,Ot=null,Vt=null;function Hs(e){if(e=Jr(e)){if(typeof va!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Ao(n),va(e.stateNode,e.type,n))}}function af(e){Ot?Vt?Vt.push(e):Vt=[e]:Ot=e}function uf(){if(Ot){var e=Ot,n=Vt;if(Vt=Ot=null,Hs(e),n)for(e=0;e<n.length;e++)Hs(n[e])}}function sf(e,n){return e(n)}function cf(){}var gl=!1;function df(e,n,t){if(gl)return e(n,t);gl=!0;try{return sf(e,n,t)}finally{gl=!1,(Ot!==null||Vt!==null)&&(cf(),uf())}}function Dr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ao(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var ma=!1;if(En)try{var or={};Object.defineProperty(or,"passive",{get:function(){ma=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{ma=!1}function Y0(e,n,t,r,i,o,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(p){this.onError(p)}}var kr=!1,eo=null,no=!1,ha=null,Z0={onError:function(e){kr=!0,eo=e}};function J0(e,n,t,r,i,o,l,a,u){kr=!1,eo=null,Y0.apply(Z0,arguments)}function e_(e,n,t,r,i,o,l,a,u){if(J0.apply(this,arguments),kr){if(kr){var s=eo;kr=!1,eo=null}else throw Error(k(198));no||(no=!0,ha=s)}}function yt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ff(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Qs(e){if(yt(e)!==e)throw Error(k(188))}function n_(e){var n=e.alternate;if(!n){if(n=yt(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Qs(i),e;if(o===r)return Qs(i),n;o=o.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function pf(e){return e=n_(e),e!==null?vf(e):null}function vf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=vf(e);if(n!==null)return n;e=e.sibling}return null}var mf=Re.unstable_scheduleCallback,Xs=Re.unstable_cancelCallback,t_=Re.unstable_shouldYield,r_=Re.unstable_requestPaint,ne=Re.unstable_now,i_=Re.unstable_getCurrentPriorityLevel,pu=Re.unstable_ImmediatePriority,hf=Re.unstable_UserBlockingPriority,to=Re.unstable_NormalPriority,o_=Re.unstable_LowPriority,_f=Re.unstable_IdlePriority,bo=null,fn=null;function l_(e){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(bo,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:s_,a_=Math.log,u_=Math.LN2;function s_(e){return e>>>=0,e===0?32:31-(a_(e)/u_|0)|0}var _i=64,gi=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~i;a!==0?r=vr(a):(o&=l,o!==0&&(r=vr(o)))}else l=t&~i,l!==0?r=vr(l):o!==0&&(r=vr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-en(n),i=1<<t,r|=e[t],n&=~i;return r}function c_(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d_(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-en(o),a=1<<l,u=i[l];u===-1?(!(a&t)||a&r)&&(i[l]=c_(a,n)):u<=n&&(e.expiredLanes|=a),o&=~a}}function _a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gf(){var e=_i;return _i<<=1,!(_i&4194240)&&(_i=64),e}function yl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-en(n),e[n]=t}function f_(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-en(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function vu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-en(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var O=0;function yf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wf,mu,kf,Ef,xf,ga=!1,yi=[],Vn=null,$n=null,jn=null,Mr=new Map,Lr=new Map,zn=[],p_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ks(e,n){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Mr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(n.pointerId)}}function lr(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Jr(n),n!==null&&mu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function v_(e,n,t,r,i){switch(n){case"focusin":return Vn=lr(Vn,e,n,t,r,i),!0;case"dragenter":return $n=lr($n,e,n,t,r,i),!0;case"mouseover":return jn=lr(jn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,lr(Mr.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Lr.set(o,lr(Lr.get(o)||null,e,n,t,r,i)),!0}return!1}function Sf(e){var n=lt(e.target);if(n!==null){var t=yt(n);if(t!==null){if(n=t.tag,n===13){if(n=ff(t),n!==null){e.blockedOn=n,xf(e.priority,function(){kf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ya(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);pa=r,t.target.dispatchEvent(r),pa=null}else return n=Jr(t),n!==null&&mu(n),e.blockedOn=t,!1;n.shift()}return!0}function Ys(e,n,t){Li(e)&&t.delete(n)}function m_(){ga=!1,Vn!==null&&Li(Vn)&&(Vn=null),$n!==null&&Li($n)&&($n=null),jn!==null&&Li(jn)&&(jn=null),Mr.forEach(Ys),Lr.forEach(Ys)}function ar(e,n){e.blockedOn===n&&(e.blockedOn=null,ga||(ga=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,m_)))}function Or(e){function n(i){return ar(i,e)}if(0<yi.length){ar(yi[0],e);for(var t=1;t<yi.length;t++){var r=yi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&ar(Vn,e),$n!==null&&ar($n,e),jn!==null&&ar(jn,e),Mr.forEach(n),Lr.forEach(n),t=0;t<zn.length;t++)r=zn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<zn.length&&(t=zn[0],t.blockedOn===null);)Sf(t),t.blockedOn===null&&zn.shift()}var $t=Tn.ReactCurrentBatchConfig,io=!0;function h_(e,n,t,r){var i=O,o=$t.transition;$t.transition=null;try{O=1,hu(e,n,t,r)}finally{O=i,$t.transition=o}}function __(e,n,t,r){var i=O,o=$t.transition;$t.transition=null;try{O=4,hu(e,n,t,r)}finally{O=i,$t.transition=o}}function hu(e,n,t,r){if(io){var i=ya(e,n,t,r);if(i===null)Al(e,n,r,oo,t),Ks(e,r);else if(v_(i,e,n,t,r))r.stopPropagation();else if(Ks(e,r),n&4&&-1<p_.indexOf(e)){for(;i!==null;){var o=Jr(i);if(o!==null&&wf(o),o=ya(e,n,t,r),o===null&&Al(e,n,r,oo,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Al(e,n,r,null,t)}}var oo=null;function ya(e,n,t,r){if(oo=null,e=fu(r),e=lt(e),e!==null)if(n=yt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ff(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return oo=e,null}function bf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i_()){case pu:return 1;case hf:return 4;case to:case o_:return 16;case _f:return 536870912;default:return 16}default:return 16}}var Mn=null,_u=null,Oi=null;function Tf(){if(Oi)return Oi;var e,n=_u,t=n.length,r,i="value"in Mn?Mn.value:Mn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Oi=i.slice(e,1<r?1-r:void 0)}function Vi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function Zs(){return!1}function Me(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:Zs,this.isPropagationStopped=Zs,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gu=Me(er),Zr=X({},er,{view:0,detail:0}),g_=Me(Zr),wl,kl,ur,To=X({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(wl=e.screenX-ur.screenX,kl=e.screenY-ur.screenY):kl=wl=0,ur=e),wl)},movementY:function(e){return"movementY"in e?e.movementY:kl}}),Js=Me(To),y_=X({},To,{dataTransfer:0}),w_=Me(y_),k_=X({},Zr,{relatedTarget:0}),El=Me(k_),E_=X({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),x_=Me(E_),S_=X({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b_=Me(S_),T_=X({},er,{data:0}),ec=Me(T_),N_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=A_[e])?!!n[e]:!1}function yu(){return P_}var I_=X({},Zr,{key:function(e){if(e.key){var n=N_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),z_=Me(I_),R_=X({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nc=Me(R_),D_=X({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),M_=Me(D_),L_=X({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),O_=Me(L_),V_=X({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$_=Me(V_),j_=[9,13,27,32],wu=En&&"CompositionEvent"in window,Er=null;En&&"documentMode"in document&&(Er=document.documentMode);var G_=En&&"TextEvent"in window&&!Er,Nf=En&&(!wu||Er&&8<Er&&11>=Er),tc=String.fromCharCode(32),rc=!1;function Cf(e,n){switch(e){case"keyup":return j_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function q_(e,n){switch(e){case"compositionend":return Af(n);case"keypress":return n.which!==32?null:(rc=!0,tc);case"textInput":return e=n.data,e===tc&&rc?null:e;default:return null}}function F_(e,n){if(Tt)return e==="compositionend"||!wu&&Cf(e,n)?(e=Tf(),Oi=_u=Mn=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nf&&n.locale!=="ko"?null:n.data;default:return null}}var U_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ic(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!U_[e.type]:n==="textarea"}function Pf(e,n,t,r){af(r),n=lo(n,"onChange"),0<n.length&&(t=new gu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var xr=null,Vr=null;function B_(e){Gf(e,0)}function No(e){var n=At(e);if(Jd(n))return e}function W_(e,n){if(e==="change")return n}var If=!1;if(En){var xl;if(En){var Sl="oninput"in document;if(!Sl){var oc=document.createElement("div");oc.setAttribute("oninput","return;"),Sl=typeof oc.oninput=="function"}xl=Sl}else xl=!1;If=xl&&(!document.documentMode||9<document.documentMode)}function lc(){xr&&(xr.detachEvent("onpropertychange",zf),Vr=xr=null)}function zf(e){if(e.propertyName==="value"&&No(Vr)){var n=[];Pf(n,Vr,e,fu(e)),df(B_,n)}}function H_(e,n,t){e==="focusin"?(lc(),xr=n,Vr=t,xr.attachEvent("onpropertychange",zf)):e==="focusout"&&lc()}function Q_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(Vr)}function X_(e,n){if(e==="click")return No(n)}function K_(e,n){if(e==="input"||e==="change")return No(n)}function Y_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var rn=typeof Object.is=="function"?Object.is:Y_;function $r(e,n){if(rn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!na.call(n,i)||!rn(e[i],n[i]))return!1}return!0}function ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uc(e,n){var t=ac(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ac(t)}}function Rf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Df(){for(var e=window,n=Ji();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ji(e.document)}return n}function ku(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Z_(e){var n=Df(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Rf(t.ownerDocument.documentElement,t)){if(r!==null&&ku(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=uc(t,o);var l=uc(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var J_=En&&"documentMode"in document&&11>=document.documentMode,Nt=null,wa=null,Sr=null,ka=!1;function sc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ka||Nt==null||Nt!==Ji(r)||(r=Nt,"selectionStart"in r&&ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&$r(Sr,r)||(Sr=r,r=lo(wa,"onSelect"),0<r.length&&(n=new gu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Nt)))}function ki(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ct={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},bl={},Mf={};En&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete Ct.animationend.animation,delete Ct.animationiteration.animation,delete Ct.animationstart.animation),"TransitionEvent"in window||delete Ct.transitionend.transition);function Co(e){if(bl[e])return bl[e];if(!Ct[e])return e;var n=Ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Mf)return bl[e]=n[t];return e}var Lf=Co("animationend"),Of=Co("animationiteration"),Vf=Co("animationstart"),$f=Co("transitionend"),jf=new Map,cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,n){jf.set(e,n),gt(n,[e])}for(var Tl=0;Tl<cc.length;Tl++){var Nl=cc[Tl],eg=Nl.toLowerCase(),ng=Nl[0].toUpperCase()+Nl.slice(1);Xn(eg,"on"+ng)}Xn(Lf,"onAnimationEnd");Xn(Of,"onAnimationIteration");Xn(Vf,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn($f,"onTransitionEnd");Bt("onMouseEnter",["mouseout","mouseover"]);Bt("onMouseLeave",["mouseout","mouseover"]);Bt("onPointerEnter",["pointerout","pointerover"]);Bt("onPointerLeave",["pointerout","pointerover"]);gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function dc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,e_(r,n,void 0,e),e.currentTarget=null}function Gf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;dc(i,a,s),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;dc(i,a,s),o=u}}}if(no)throw e=ha,no=!1,ha=null,e}function q(e,n){var t=n[Ta];t===void 0&&(t=n[Ta]=new Set);var r=e+"__bubble";t.has(r)||(qf(n,e,2,!1),t.add(r))}function Cl(e,n,t){var r=0;n&&(r|=4),qf(t,e,r,n)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[Ei]){e[Ei]=!0,Qd.forEach(function(t){t!=="selectionchange"&&(tg.has(t)||Cl(t,!1,e),Cl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ei]||(n[Ei]=!0,Cl("selectionchange",!1,n))}}function qf(e,n,t,r){switch(bf(n)){case 1:var i=h_;break;case 4:i=__;break;default:i=hu}t=i.bind(null,n,t,e),i=void 0,!ma||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Al(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=lt(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}df(function(){var s=o,p=fu(t),v=[];e:{var m=jf.get(e);if(m!==void 0){var h=gu,_=e;switch(e){case"keypress":if(Vi(t)===0)break e;case"keydown":case"keyup":h=z_;break;case"focusin":_="focus",h=El;break;case"focusout":_="blur",h=El;break;case"beforeblur":case"afterblur":h=El;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=w_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=M_;break;case Lf:case Of:case Vf:h=x_;break;case $f:h=O_;break;case"scroll":h=g_;break;case"wheel":h=$_;break;case"copy":case"cut":case"paste":h=b_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=nc}var w=(n&4)!==0,C=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var c=s,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=Dr(c,f),g!=null&&w.push(Gr(c,g,d)))),C)break;c=c.return}0<w.length&&(m=new h(m,_,null,t,p),v.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&t!==pa&&(_=t.relatedTarget||t.fromElement)&&(lt(_)||_[xn]))break e;if((h||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,h?(_=t.relatedTarget||t.toElement,h=s,_=_?lt(_):null,_!==null&&(C=yt(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(h=null,_=s),h!==_)){if(w=Js,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=nc,g="onPointerLeave",f="onPointerEnter",c="pointer"),C=h==null?m:At(h),d=_==null?m:At(_),m=new w(g,c+"leave",h,t,p),m.target=C,m.relatedTarget=d,g=null,lt(p)===s&&(w=new w(f,c+"enter",_,t,p),w.target=d,w.relatedTarget=C,g=w),C=g,h&&_)n:{for(w=h,f=_,c=0,d=w;d;d=kt(d))c++;for(d=0,g=f;g;g=kt(g))d++;for(;0<c-d;)w=kt(w),c--;for(;0<d-c;)f=kt(f),d--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break n;w=kt(w),f=kt(f)}w=null}else w=null;h!==null&&fc(v,m,h,w,!1),_!==null&&C!==null&&fc(v,C,_,w,!0)}}e:{if(m=s?At(s):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var y=W_;else if(ic(m))if(If)y=K_;else{y=Q_;var E=H_}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(y=X_);if(y&&(y=y(e,s))){Pf(v,y,t,p);break e}E&&E(e,m,s),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&ua(m,"number",m.value)}switch(E=s?At(s):window,e){case"focusin":(ic(E)||E.contentEditable==="true")&&(Nt=E,wa=s,Sr=null);break;case"focusout":Sr=wa=Nt=null;break;case"mousedown":ka=!0;break;case"contextmenu":case"mouseup":case"dragend":ka=!1,sc(v,t,p);break;case"selectionchange":if(J_)break;case"keydown":case"keyup":sc(v,t,p)}var x;if(wu)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Tt?Cf(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(Nf&&t.locale!=="ko"&&(Tt||S!=="onCompositionStart"?S==="onCompositionEnd"&&Tt&&(x=Tf()):(Mn=p,_u="value"in Mn?Mn.value:Mn.textContent,Tt=!0)),E=lo(s,S),0<E.length&&(S=new ec(S,e,null,t,p),v.push({event:S,listeners:E}),x?S.data=x:(x=Af(t),x!==null&&(S.data=x)))),(x=G_?q_(e,t):F_(e,t))&&(s=lo(s,"onBeforeInput"),0<s.length&&(p=new ec("onBeforeInput","beforeinput",null,t,p),v.push({event:p,listeners:s}),p.data=x))}Gf(v,n)})}function Gr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function lo(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dr(e,t),o!=null&&r.unshift(Gr(e,o,i)),o=Dr(e,n),o!=null&&r.push(Gr(e,o,i))),e=e.return}return r}function kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fc(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var a=t,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,i?(u=Dr(t,o),u!=null&&l.unshift(Gr(t,u,a))):i||(u=Dr(t,o),u!=null&&l.push(Gr(t,u,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var rg=/\r\n?/g,ig=/\u0000|\uFFFD/g;function pc(e){return(typeof e=="string"?e:""+e).replace(rg,`
`).replace(ig,"")}function xi(e,n,t){if(n=pc(n),pc(e)!==n&&t)throw Error(k(425))}function ao(){}var Ea=null,xa=null;function Sa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,og=typeof clearTimeout=="function"?clearTimeout:void 0,vc=typeof Promise=="function"?Promise:void 0,lg=typeof queueMicrotask=="function"?queueMicrotask:typeof vc<"u"?function(e){return vc.resolve(null).then(e).catch(ag)}:ba;function ag(e){setTimeout(function(){throw e})}function Pl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Or(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Or(n)}function Gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function mc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),un="__reactFiber$"+nr,qr="__reactProps$"+nr,xn="__reactContainer$"+nr,Ta="__reactEvents$"+nr,ug="__reactListeners$"+nr,sg="__reactHandles$"+nr;function lt(e){var n=e[un];if(n)return n;for(var t=e.parentNode;t;){if(n=t[xn]||t[un]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=mc(e);e!==null;){if(t=e[un])return t;e=mc(e)}return n}e=t,t=e.parentNode}return null}function Jr(e){return e=e[un]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ao(e){return e[qr]||null}var Na=[],Pt=-1;function Kn(e){return{current:e}}function F(e){0>Pt||(e.current=Na[Pt],Na[Pt]=null,Pt--)}function j(e,n){Pt++,Na[Pt]=e.current,e.current=n}var Hn={},he=Kn(Hn),Se=Kn(!1),ft=Hn;function Wt(e,n){var t=e.type.contextTypes;if(!t)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function be(e){return e=e.childContextTypes,e!=null}function uo(){F(Se),F(he)}function hc(e,n,t){if(he.current!==Hn)throw Error(k(168));j(he,n),j(Se,t)}function Ff(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,H0(e)||"Unknown",i));return X({},t,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,ft=he.current,j(he,e),j(Se,Se.current),!0}function _c(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Ff(e,n,ft),r.__reactInternalMemoizedMergedChildContext=e,F(Se),F(he),j(he,e)):F(Se),j(Se,t)}var _n=null,Po=!1,Il=!1;function Uf(e){_n===null?_n=[e]:_n.push(e)}function cg(e){Po=!0,Uf(e)}function Yn(){if(!Il&&_n!==null){Il=!0;var e=0,n=O;try{var t=_n;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}_n=null,Po=!1}catch(i){throw _n!==null&&(_n=_n.slice(e+1)),mf(pu,Yn),i}finally{O=n,Il=!1}}return null}var It=[],zt=0,co=null,fo=0,$e=[],je=0,pt=null,yn=1,wn="";function rt(e,n){It[zt++]=fo,It[zt++]=co,co=e,fo=n}function Bf(e,n,t){$e[je++]=yn,$e[je++]=wn,$e[je++]=pt,pt=e;var r=yn;e=wn;var i=32-en(r)-1;r&=~(1<<i),t+=1;var o=32-en(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,yn=1<<32-en(n)+i|t<<i|r,wn=o+e}else yn=1<<o|t<<i|r,wn=e}function Eu(e){e.return!==null&&(rt(e,1),Bf(e,1,0))}function xu(e){for(;e===co;)co=It[--zt],It[zt]=null,fo=It[--zt],It[zt]=null;for(;e===pt;)pt=$e[--je],$e[je]=null,wn=$e[--je],$e[je]=null,yn=$e[--je],$e[je]=null}var ze=null,Pe=null,B=!1,Ze=null;function Wf(e,n){var t=qe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function gc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,Pe=Gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=pt!==null?{id:yn,overflow:wn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=qe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,Pe=null,!0):!1;default:return!1}}function Ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Aa(e){if(B){var n=Pe;if(n){var t=n;if(!gc(e,n)){if(Ca(e))throw Error(k(418));n=Gn(t.nextSibling);var r=ze;n&&gc(e,n)?Wf(r,t):(e.flags=e.flags&-4097|2,B=!1,ze=e)}}else{if(Ca(e))throw Error(k(418));e.flags=e.flags&-4097|2,B=!1,ze=e}}}function yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Si(e){if(e!==ze)return!1;if(!B)return yc(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Sa(e.type,e.memoizedProps)),n&&(n=Pe)){if(Ca(e))throw Hf(),Error(k(418));for(;n;)Wf(e,n),n=Gn(n.nextSibling)}if(yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=Gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=ze?Gn(e.stateNode.nextSibling):null;return!0}function Hf(){for(var e=Pe;e;)e=Gn(e.nextSibling)}function Ht(){Pe=ze=null,B=!1}function Su(e){Ze===null?Ze=[e]:Ze.push(e)}var dg=Tn.ReactCurrentBatchConfig;function Ke(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var po=Kn(null),vo=null,Rt=null,bu=null;function Tu(){bu=Rt=vo=null}function Nu(e){var n=po.current;F(po),e._currentValue=n}function Pa(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function jt(e,n){vo=e,bu=Rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(xe=!0),e.firstContext=null)}function Ue(e){var n=e._currentValue;if(bu!==e)if(e={context:e,memoizedValue:n,next:null},Rt===null){if(vo===null)throw Error(k(308));Rt=e,vo.dependencies={lanes:0,firstContext:e}}else Rt=Rt.next=e;return n}var at=null;function Cu(e){at===null?at=[e]:at.push(e)}function Qf(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Cu(n)):(t.next=i.next,i.next=t),n.interleaved=t,Sn(e,r)}function Sn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var In=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function qn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Sn(e,t)}return i=r.interleaved,i===null?(n.next=n,Cu(r)):(n.next=i.next,i.next=n),r.interleaved=n,Sn(e,t)}function $i(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vu(e,t)}}function wc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function mo(e,n,t,r){var i=e.updateQueue;In=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?o=s:l.next=s,l=u;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=s:a.next=s,p.lastBaseUpdate=u))}if(o!==null){var v=i.baseState;l=0,p=s=u=null,a=o;do{var m=a.lane,h=a.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,w=a;switch(m=n,h=t,w.tag){case 1:if(_=w.payload,typeof _=="function"){v=_.call(h,v,m);break e}v=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,m=typeof _=="function"?_.call(h,v,m):_,m==null)break e;v=X({},v,m);break e;case 2:In=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else h={eventTime:h,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(s=p=h,u=v):p=p.next=h,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(p===null&&(u=v),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);mt|=l,e.lanes=l,e.memoizedState=v}}function kc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Kf=new Hd.Component().refs;function Ia(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:X({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Io={isMounted:function(e){return(e=e._reactInternals)?yt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Un(e),o=kn(r,i);o.payload=n,t!=null&&(o.callback=t),n=qn(e,o,i),n!==null&&(nn(n,e,i,r),$i(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Un(e),o=kn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=qn(e,o,i),n!==null&&(nn(n,e,i,r),$i(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=Un(e),i=kn(t,r);i.tag=2,n!=null&&(i.callback=n),n=qn(e,i,r),n!==null&&(nn(n,e,r,t),$i(n,e,r))}};function Ec(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!$r(t,r)||!$r(i,o):!0}function Yf(e,n,t){var r=!1,i=Hn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(i=be(n)?ft:he.current,r=n.contextTypes,o=(r=r!=null)?Wt(e,i):Hn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Io,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function xc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Io.enqueueReplaceState(n,n.state,null)}function za(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Kf,Au(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Ue(o):(o=be(n)?ft:he.current,i.context=Wt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ia(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Io.enqueueReplaceState(i,i.state,null),mo(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=i.refs;a===Kf&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function bi(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Sc(e){var n=e._init;return n(e._payload)}function Zf(e){function n(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Bn(f,c),f.index=0,f.sibling=null,f}function o(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,g){return c===null||c.tag!==6?(c=Vl(d,f.mode,g),c.return=f,c):(c=i(c,d),c.return=f,c)}function u(f,c,d,g){var y=d.type;return y===bt?p(f,c,d.props.children,g,d.key):c!==null&&(c.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Pn&&Sc(y)===c.type)?(g=i(c,d.props),g.ref=sr(f,c,d),g.return=f,g):(g=Bi(d.type,d.key,d.props,null,f.mode,g),g.ref=sr(f,c,d),g.return=f,g)}function s(f,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=$l(d,f.mode,g),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function p(f,c,d,g,y){return c===null||c.tag!==7?(c=dt(d,f.mode,g,y),c.return=f,c):(c=i(c,d),c.return=f,c)}function v(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Vl(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case vi:return d=Bi(c.type,c.key,c.props,null,f.mode,d),d.ref=sr(f,null,c),d.return=f,d;case St:return c=$l(c,f.mode,d),c.return=f,c;case Pn:var g=c._init;return v(f,g(c._payload),d)}if(pr(c)||ir(c))return c=dt(c,f.mode,d,null),c.return=f,c;bi(f,c)}return null}function m(f,c,d,g){var y=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return y!==null?null:a(f,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vi:return d.key===y?u(f,c,d,g):null;case St:return d.key===y?s(f,c,d,g):null;case Pn:return y=d._init,m(f,c,y(d._payload),g)}if(pr(d)||ir(d))return y!==null?null:p(f,c,d,g,null);bi(f,d)}return null}function h(f,c,d,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,a(c,f,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vi:return f=f.get(g.key===null?d:g.key)||null,u(c,f,g,y);case St:return f=f.get(g.key===null?d:g.key)||null,s(c,f,g,y);case Pn:var E=g._init;return h(f,c,d,E(g._payload),y)}if(pr(g)||ir(g))return f=f.get(d)||null,p(c,f,g,y,null);bi(c,g)}return null}function _(f,c,d,g){for(var y=null,E=null,x=c,S=c=0,R=null;x!==null&&S<d.length;S++){x.index>S?(R=x,x=null):R=x.sibling;var A=m(f,x,d[S],g);if(A===null){x===null&&(x=R);break}e&&x&&A.alternate===null&&n(f,x),c=o(A,c,S),E===null?y=A:E.sibling=A,E=A,x=R}if(S===d.length)return t(f,x),B&&rt(f,S),y;if(x===null){for(;S<d.length;S++)x=v(f,d[S],g),x!==null&&(c=o(x,c,S),E===null?y=x:E.sibling=x,E=x);return B&&rt(f,S),y}for(x=r(f,x);S<d.length;S++)R=h(x,f,S,d[S],g),R!==null&&(e&&R.alternate!==null&&x.delete(R.key===null?S:R.key),c=o(R,c,S),E===null?y=R:E.sibling=R,E=R);return e&&x.forEach(function(K){return n(f,K)}),B&&rt(f,S),y}function w(f,c,d,g){var y=ir(d);if(typeof y!="function")throw Error(k(150));if(d=y.call(d),d==null)throw Error(k(151));for(var E=y=null,x=c,S=c=0,R=null,A=d.next();x!==null&&!A.done;S++,A=d.next()){x.index>S?(R=x,x=null):R=x.sibling;var K=m(f,x,A.value,g);if(K===null){x===null&&(x=R);break}e&&x&&K.alternate===null&&n(f,x),c=o(K,c,S),E===null?y=K:E.sibling=K,E=K,x=R}if(A.done)return t(f,x),B&&rt(f,S),y;if(x===null){for(;!A.done;S++,A=d.next())A=v(f,A.value,g),A!==null&&(c=o(A,c,S),E===null?y=A:E.sibling=A,E=A);return B&&rt(f,S),y}for(x=r(f,x);!A.done;S++,A=d.next())A=h(x,f,S,A.value,g),A!==null&&(e&&A.alternate!==null&&x.delete(A.key===null?S:A.key),c=o(A,c,S),E===null?y=A:E.sibling=A,E=A);return e&&x.forEach(function(de){return n(f,de)}),B&&rt(f,S),y}function C(f,c,d,g){if(typeof d=="object"&&d!==null&&d.type===bt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case vi:e:{for(var y=d.key,E=c;E!==null;){if(E.key===y){if(y=d.type,y===bt){if(E.tag===7){t(f,E.sibling),c=i(E,d.props.children),c.return=f,f=c;break e}}else if(E.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Pn&&Sc(y)===E.type){t(f,E.sibling),c=i(E,d.props),c.ref=sr(f,E,d),c.return=f,f=c;break e}t(f,E);break}else n(f,E);E=E.sibling}d.type===bt?(c=dt(d.props.children,f.mode,g,d.key),c.return=f,f=c):(g=Bi(d.type,d.key,d.props,null,f.mode,g),g.ref=sr(f,c,d),g.return=f,f=g)}return l(f);case St:e:{for(E=d.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=$l(d,f.mode,g),c.return=f,f=c}return l(f);case Pn:return E=d._init,C(f,c,E(d._payload),g)}if(pr(d))return _(f,c,d,g);if(ir(d))return w(f,c,d,g);bi(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(f,c.sibling),c=i(c,d),c.return=f,f=c):(t(f,c),c=Vl(d,f.mode,g),c.return=f,f=c),l(f)):t(f,c)}return C}var Qt=Zf(!0),Jf=Zf(!1),ei={},pn=Kn(ei),Fr=Kn(ei),Ur=Kn(ei);function ut(e){if(e===ei)throw Error(k(174));return e}function Pu(e,n){switch(j(Ur,n),j(Fr,e),j(pn,ei),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ca(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ca(n,e)}F(pn),j(pn,n)}function Xt(){F(pn),F(Fr),F(Ur)}function ep(e){ut(Ur.current);var n=ut(pn.current),t=ca(n,e.type);n!==t&&(j(Fr,e),j(pn,t))}function Iu(e){Fr.current===e&&(F(pn),F(Fr))}var W=Kn(0);function ho(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var zl=[];function zu(){for(var e=0;e<zl.length;e++)zl[e]._workInProgressVersionPrimary=null;zl.length=0}var ji=Tn.ReactCurrentDispatcher,Rl=Tn.ReactCurrentBatchConfig,vt=0,H=null,ie=null,le=null,_o=!1,br=!1,Br=0,fg=0;function fe(){throw Error(k(321))}function Ru(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!rn(e[t],n[t]))return!1;return!0}function Du(e,n,t,r,i,o){if(vt=o,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ji.current=e===null||e.memoizedState===null?hg:_g,e=t(r,i),br){o=0;do{if(br=!1,Br=0,25<=o)throw Error(k(301));o+=1,le=ie=null,n.updateQueue=null,ji.current=gg,e=t(r,i)}while(br)}if(ji.current=go,n=ie!==null&&ie.next!==null,vt=0,le=ie=H=null,_o=!1,n)throw Error(k(300));return e}function Mu(){var e=Br!==0;return Br=0,e}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?H.memoizedState=le=e:le=le.next=e,le}function Be(){if(ie===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var n=le===null?H.memoizedState:le.next;if(n!==null)le=n,ie=e;else{if(e===null)throw Error(k(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?H.memoizedState=le=e:le=le.next=e}return le}function Wr(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=Be(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=ie,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,s=o;do{var p=s.lane;if((vt&p)===p)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var v={lane:p,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=v,l=r):u=u.next=v,H.lanes|=p,mt|=p}s=s.next}while(s!==null&&s!==o);u===null?l=r:u.next=a,rn(r,n.memoizedState)||(xe=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,mt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ml(e){var n=Be(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);rn(o,n.memoizedState)||(xe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function np(){}function tp(e,n){var t=H,r=Be(),i=n(),o=!rn(r.memoizedState,i);if(o&&(r.memoizedState=i,xe=!0),r=r.queue,Lu(op.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||le!==null&&le.memoizedState.tag&1){if(t.flags|=2048,Hr(9,ip.bind(null,t,r,i,n),void 0,null),ae===null)throw Error(k(349));vt&30||rp(t,n,i)}return i}function rp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ip(e,n,t,r){n.value=t,n.getSnapshot=r,lp(n)&&ap(e)}function op(e,n,t){return t(function(){lp(n)&&ap(e)})}function lp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!rn(e,t)}catch{return!0}}function ap(e){var n=Sn(e,1);n!==null&&nn(n,e,1,-1)}function bc(e){var n=ln();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},n.queue=e,e=e.dispatch=mg.bind(null,H,e),[n.memoizedState,e]}function Hr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function up(){return Be().memoizedState}function Gi(e,n,t,r){var i=ln();H.flags|=e,i.memoizedState=Hr(1|n,t,void 0,r===void 0?null:r)}function zo(e,n,t,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(ie!==null){var l=ie.memoizedState;if(o=l.destroy,r!==null&&Ru(r,l.deps)){i.memoizedState=Hr(n,t,o,r);return}}H.flags|=e,i.memoizedState=Hr(1|n,t,o,r)}function Tc(e,n){return Gi(8390656,8,e,n)}function Lu(e,n){return zo(2048,8,e,n)}function sp(e,n){return zo(4,2,e,n)}function cp(e,n){return zo(4,4,e,n)}function dp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function fp(e,n,t){return t=t!=null?t.concat([e]):null,zo(4,4,dp.bind(null,n,e),t)}function Ou(){}function pp(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ru(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function vp(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ru(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function mp(e,n,t){return vt&21?(rn(t,n)||(t=gf(),H.lanes|=t,mt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=t)}function pg(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),n()}finally{O=t,Rl.transition=r}}function hp(){return Be().memoizedState}function vg(e,n,t){var r=Un(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},_p(e))gp(n,t);else if(t=Qf(e,n,t,r),t!==null){var i=ge();nn(t,e,r,i),yp(t,n,r)}}function mg(e,n,t){var r=Un(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(_p(e))gp(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(i.hasEagerState=!0,i.eagerState=a,rn(a,l)){var u=n.interleaved;u===null?(i.next=i,Cu(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=Qf(e,n,i,r),t!==null&&(i=ge(),nn(t,e,r,i),yp(t,n,r))}}function _p(e){var n=e.alternate;return e===H||n!==null&&n===H}function gp(e,n){br=_o=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function yp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vu(e,t)}}var go={readContext:Ue,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},hg={readContext:Ue,useCallback:function(e,n){return ln().memoizedState=[e,n===void 0?null:n],e},useContext:Ue,useEffect:Tc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Gi(4194308,4,dp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Gi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Gi(4,2,e,n)},useMemo:function(e,n){var t=ln();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=ln();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=vg.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=ln();return e={current:e},n.memoizedState=e},useState:bc,useDebugValue:Ou,useDeferredValue:function(e){return ln().memoizedState=e},useTransition:function(){var e=bc(!1),n=e[0];return e=pg.bind(null,e[1]),ln().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=ln();if(B){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),ae===null)throw Error(k(349));vt&30||rp(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Tc(op.bind(null,r,o,e),[e]),r.flags|=2048,Hr(9,ip.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=ln(),n=ae.identifierPrefix;if(B){var t=wn,r=yn;t=(r&~(1<<32-en(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Br++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=fg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},_g={readContext:Ue,useCallback:pp,useContext:Ue,useEffect:Lu,useImperativeHandle:fp,useInsertionEffect:sp,useLayoutEffect:cp,useMemo:vp,useReducer:Dl,useRef:up,useState:function(){return Dl(Wr)},useDebugValue:Ou,useDeferredValue:function(e){var n=Be();return mp(n,ie.memoizedState,e)},useTransition:function(){var e=Dl(Wr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:np,useSyncExternalStore:tp,useId:hp,unstable_isNewReconciler:!1},gg={readContext:Ue,useCallback:pp,useContext:Ue,useEffect:Lu,useImperativeHandle:fp,useInsertionEffect:sp,useLayoutEffect:cp,useMemo:vp,useReducer:Ml,useRef:up,useState:function(){return Ml(Wr)},useDebugValue:Ou,useDeferredValue:function(e){var n=Be();return ie===null?n.memoizedState=e:mp(n,ie.memoizedState,e)},useTransition:function(){var e=Ml(Wr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:np,useSyncExternalStore:tp,useId:hp,unstable_isNewReconciler:!1};function Kt(e,n){try{var t="",r=n;do t+=W0(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Ll(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ra(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var yg=typeof WeakMap=="function"?WeakMap:Map;function wp(e,n,t){t=kn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){wo||(wo=!0,Fa=r),Ra(e,n)},t}function kp(e,n,t){t=kn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ra(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Ra(e,n),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Nc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new yg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Rg.bind(null,e,n,t),n.then(e,e))}function Cc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ac(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=kn(-1,1),n.tag=2,qn(t,n,1))),t.lanes|=1),e)}var wg=Tn.ReactCurrentOwner,xe=!1;function _e(e,n,t,r){n.child=e===null?Jf(n,null,t,r):Qt(n,e.child,t,r)}function Pc(e,n,t,r,i){t=t.render;var o=n.ref;return jt(n,i),r=Du(e,n,t,r,o,i),t=Mu(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,bn(e,n,i)):(B&&t&&Eu(n),n.flags|=1,_e(e,n,r,i),n.child)}function Ic(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Bu(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Ep(e,n,o,r,i)):(e=Bi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:$r,t(l,r)&&e.ref===n.ref)return bn(e,n,i)}return n.flags|=1,e=Bn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Ep(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if($r(o,r)&&e.ref===n.ref)if(xe=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return n.lanes=e.lanes,bn(e,n,i)}return Da(e,n,t,r,i)}function xp(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Mt,Ce),Ce|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,j(Mt,Ce),Ce|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,j(Mt,Ce),Ce|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,j(Mt,Ce),Ce|=r;return _e(e,n,i,t),n.child}function Sp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Da(e,n,t,r,i){var o=be(t)?ft:he.current;return o=Wt(n,o),jt(n,i),t=Du(e,n,t,r,o,i),r=Mu(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,bn(e,n,i)):(B&&r&&Eu(n),n.flags|=1,_e(e,n,t,i),n.child)}function zc(e,n,t,r,i){if(be(t)){var o=!0;so(n)}else o=!1;if(jt(n,i),n.stateNode===null)qi(e,n),Yf(n,t,r),za(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var u=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=Ue(s):(s=be(t)?ft:he.current,s=Wt(n,s));var p=t.getDerivedStateFromProps,v=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&xc(n,l,r,s),In=!1;var m=n.memoizedState;l.state=m,mo(n,r,l,i),u=n.memoizedState,a!==r||m!==u||Se.current||In?(typeof p=="function"&&(Ia(n,t,p,r),u=n.memoizedState),(a=In||Ec(n,t,a,r,m,u,s))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Xf(e,n),a=n.memoizedProps,s=n.type===n.elementType?a:Ke(n.type,a),l.props=s,v=n.pendingProps,m=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=be(t)?ft:he.current,u=Wt(n,u));var h=t.getDerivedStateFromProps;(p=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==v||m!==u)&&xc(n,l,r,u),In=!1,m=n.memoizedState,l.state=m,mo(n,r,l,i);var _=n.memoizedState;a!==v||m!==_||Se.current||In?(typeof h=="function"&&(Ia(n,t,h,r),_=n.memoizedState),(s=In||Ec(n,t,s,r,m,_,u)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,_,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,_,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=_),l.props=r,l.state=_,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Ma(e,n,t,r,o,i)}function Ma(e,n,t,r,i,o){Sp(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&_c(n,t,!1),bn(e,n,o);r=n.stateNode,wg.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Qt(n,e.child,null,o),n.child=Qt(n,null,a,o)):_e(e,n,a,o),n.memoizedState=r.state,i&&_c(n,t,!0),n.child}function bp(e){var n=e.stateNode;n.pendingContext?hc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&hc(e,n.context,!1),Pu(e,n.containerInfo)}function Rc(e,n,t,r,i){return Ht(),Su(i),n.flags|=256,_e(e,n,t,r),n.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tp(e,n,t){var r=n.pendingProps,i=W.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(W,i&1),e===null)return Aa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Mo(l,r,0,null),e=dt(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Oa(t),n.memoizedState=La,e):Vu(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kg(e,n,l,r,a,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=Bn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Bn(a,o):(o=dt(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?Oa(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=La,r}return o=e.child,e=o.sibling,r=Bn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Vu(e,n){return n=Mo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ti(e,n,t,r){return r!==null&&Su(r),Qt(n,e.child,null,t),e=Vu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function kg(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=Ll(Error(k(422))),Ti(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Mo({mode:"visible",children:r.children},i,0,null),o=dt(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Qt(n,e.child,null,l),n.child.memoizedState=Oa(l),n.memoizedState=La,o);if(!(n.mode&1))return Ti(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Ll(o,r,void 0),Ti(e,n,l,r)}if(a=(l&e.childLanes)!==0,xe||a){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Sn(e,i),nn(r,e,i,-1))}return Uu(),r=Ll(Error(k(421))),Ti(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Dg.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Pe=Gn(i.nextSibling),ze=n,B=!0,Ze=null,e!==null&&($e[je++]=yn,$e[je++]=wn,$e[je++]=pt,yn=e.id,wn=e.overflow,pt=n),n=Vu(n,r.children),n.flags|=4096,n)}function Dc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Pa(e.return,n,t)}function Ol(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Np(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,n,r.children,t),r=W.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,t,n);else if(e.tag===19)Dc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(W,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ho(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ol(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ol(n,!0,t,null,o);break;case"together":Ol(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function bn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),mt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Bn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Bn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Eg(e,n,t){switch(n.tag){case 3:bp(n),Ht();break;case 5:ep(n);break;case 1:be(n.type)&&so(n);break;case 4:Pu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;j(po,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(j(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?Tp(e,n,t):(j(W,W.current&1),e=bn(e,n,t),e!==null?e.sibling:null);j(W,W.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Np(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(W,W.current),r)break;return null;case 22:case 23:return n.lanes=0,xp(e,n,t)}return bn(e,n,t)}var Cp,Va,Ap,Pp;Cp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Va=function(){};Ap=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,ut(pn.current);var o=null;switch(t){case"input":i=la(e,i),r=la(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=sa(e,i),r=sa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ao)}da(t,r);var l;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var a=i[s];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zr.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var u=r[s];if(a=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(o||(o=[]),o.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(zr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&q("scroll",e),o||a===u||(o=[])):(o=o||[]).push(s,u))}t&&(o=o||[]).push("style",t);var s=o;(n.updateQueue=s)&&(n.flags|=4)}};Pp=function(e,n,t,r){t!==r&&(n.flags|=4)};function cr(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function xg(e,n,t){var r=n.pendingProps;switch(xu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return be(n.type)&&uo(),pe(n),null;case 3:return r=n.stateNode,Xt(),F(Se),F(he),zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Si(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ze!==null&&(Wa(Ze),Ze=null))),Va(e,n),pe(n),null;case 5:Iu(n);var i=ut(Ur.current);if(t=n.type,e!==null&&n.stateNode!=null)Ap(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return pe(n),null}if(e=ut(pn.current),Si(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[un]=n,r[qr]=o,e=(n.mode&1)!==0,t){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<mr.length;i++)q(mr[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Fs(r,o),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},q("invalid",r);break;case"textarea":Bs(r,o),q("invalid",r)}da(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&xi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&xi(r.textContent,a,e),i=["children",""+a]):zr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&q("scroll",r)}switch(t){case"input":mi(r),Us(r,o,!0);break;case"textarea":mi(r),Ws(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ao)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tf(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[un]=n,e[qr]=r,Cp(e,n,!1,!1),n.stateNode=e;e:{switch(l=fa(t,r),t){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<mr.length;i++)q(mr[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":Fs(e,r),i=la(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),q("invalid",e);break;case"textarea":Bs(e,r),i=sa(e,r),q("invalid",e);break;default:i=r}da(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?lf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&rf(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Rr(e,u):typeof u=="number"&&Rr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&q("scroll",e):u!=null&&uu(e,o,u,l))}switch(t){case"input":mi(e),Us(e,r,!1);break;case"textarea":mi(e),Ws(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Lt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ao)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pe(n),null;case 6:if(e&&n.stateNode!=null)Pp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=ut(Ur.current),ut(pn.current),Si(n)){if(r=n.stateNode,t=n.memoizedProps,r[un]=n,(o=r.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:xi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[un]=n,n.stateNode=r}return pe(n),null;case 13:if(F(W),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Pe!==null&&n.mode&1&&!(n.flags&128))Hf(),Ht(),n.flags|=98560,o=!1;else if(o=Si(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[un]=n}else Ht(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;pe(n),o=!1}else Ze!==null&&(Wa(Ze),Ze=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?oe===0&&(oe=3):Uu())),n.updateQueue!==null&&(n.flags|=4),pe(n),null);case 4:return Xt(),Va(e,n),e===null&&jr(n.stateNode.containerInfo),pe(n),null;case 10:return Nu(n.type._context),pe(n),null;case 17:return be(n.type)&&uo(),pe(n),null;case 19:if(F(W),o=n.memoizedState,o===null)return pe(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)cr(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ho(e),l!==null){for(n.flags|=128,cr(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return j(W,W.current&1|2),n.child}e=e.sibling}o.tail!==null&&ne()>Yt&&(n.flags|=128,r=!0,cr(o,!1),n.lanes=4194304)}else{if(!r)if(e=ho(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),cr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!B)return pe(n),null}else 2*ne()-o.renderingStartTime>Yt&&t!==1073741824&&(n.flags|=128,r=!0,cr(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ne(),n.sibling=null,t=W.current,j(W,r?t&1|2:t&1),n):(pe(n),null);case 22:case 23:return Fu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ce&1073741824&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Sg(e,n){switch(xu(n),n.tag){case 1:return be(n.type)&&uo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xt(),F(Se),F(he),zu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Iu(n),null;case 13:if(F(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Ht()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(W),null;case 4:return Xt(),null;case 10:return Nu(n.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var Ni=!1,ve=!1,bg=typeof WeakSet=="function"?WeakSet:Set,T=null;function Dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){J(e,n,r)}else t.current=null}function $a(e,n,t){try{t()}catch(r){J(e,n,r)}}var Mc=!1;function Tg(e,n){if(Ea=io,e=Df(),ku(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,u=-1,s=0,p=0,v=e,m=null;n:for(;;){for(var h;v!==t||i!==0&&v.nodeType!==3||(a=l+i),v!==o||r!==0&&v.nodeType!==3||(u=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(h=v.firstChild)!==null;)m=v,v=h;for(;;){if(v===e)break n;if(m===t&&++s===i&&(a=l),m===o&&++p===r&&(u=l),(h=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=h}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(xa={focusedElem:e,selectionRange:t},io=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var _=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,C=_.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:Ke(n.type,w),C);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){J(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return _=Mc,Mc=!1,_}function Tr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&$a(n,t,o)}i=i.next}while(i!==r)}}function Ro(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ja(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ip(e){var n=e.alternate;n!==null&&(e.alternate=null,Ip(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[un],delete n[qr],delete n[Ta],delete n[ug],delete n[sg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zp(e){return e.tag===5||e.tag===3||e.tag===4}function Lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ga(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ao));else if(r!==4&&(e=e.child,e!==null))for(Ga(e,n,t),e=e.sibling;e!==null;)Ga(e,n,t),e=e.sibling}function qa(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qa(e,n,t),e=e.sibling;e!==null;)qa(e,n,t),e=e.sibling}var ue=null,Ye=!1;function An(e,n,t){for(t=t.child;t!==null;)Rp(e,n,t),t=t.sibling}function Rp(e,n,t){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(bo,t)}catch{}switch(t.tag){case 5:ve||Dt(t,n);case 6:var r=ue,i=Ye;ue=null,An(e,n,t),ue=r,Ye=i,ue!==null&&(Ye?(e=ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ue.removeChild(t.stateNode));break;case 18:ue!==null&&(Ye?(e=ue,t=t.stateNode,e.nodeType===8?Pl(e.parentNode,t):e.nodeType===1&&Pl(e,t),Or(e)):Pl(ue,t.stateNode));break;case 4:r=ue,i=Ye,ue=t.stateNode.containerInfo,Ye=!0,An(e,n,t),ue=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&$a(t,n,l),i=i.next}while(i!==r)}An(e,n,t);break;case 1:if(!ve&&(Dt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){J(t,n,a)}An(e,n,t);break;case 21:An(e,n,t);break;case 22:t.mode&1?(ve=(r=ve)||t.memoizedState!==null,An(e,n,t),ve=r):An(e,n,t);break;default:An(e,n,t)}}function Oc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new bg),n.forEach(function(r){var i=Mg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Xe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ye=!1;break e;case 3:ue=a.stateNode.containerInfo,Ye=!0;break e;case 4:ue=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(ue===null)throw Error(k(160));Rp(o,l,i),ue=null,Ye=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){J(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Dp(n,e),n=n.sibling}function Dp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(n,e),on(e),r&4){try{Tr(3,e,e.return),Ro(3,e)}catch(w){J(e,e.return,w)}try{Tr(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:Xe(n,e),on(e),r&512&&t!==null&&Dt(t,t.return);break;case 5:if(Xe(n,e),on(e),r&512&&t!==null&&Dt(t,t.return),e.flags&32){var i=e.stateNode;try{Rr(i,"")}catch(w){J(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ef(i,o),fa(a,l);var s=fa(a,o);for(l=0;l<u.length;l+=2){var p=u[l],v=u[l+1];p==="style"?lf(i,v):p==="dangerouslySetInnerHTML"?rf(i,v):p==="children"?Rr(i,v):uu(i,p,v,s)}switch(a){case"input":aa(i,o);break;case"textarea":nf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Lt(i,!!o.multiple,h,!1):m!==!!o.multiple&&(o.defaultValue!=null?Lt(i,!!o.multiple,o.defaultValue,!0):Lt(i,!!o.multiple,o.multiple?[]:"",!1))}i[qr]=o}catch(w){J(e,e.return,w)}}break;case 6:if(Xe(n,e),on(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){J(e,e.return,w)}}break;case 3:if(Xe(n,e),on(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Or(n.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:Xe(n,e),on(e);break;case 13:Xe(n,e),on(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gu=ne())),r&4&&Oc(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(ve=(s=ve)||p,Xe(n,e),ve=s):Xe(n,e),on(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(v=T=p;T!==null;){switch(m=T,h=m.child,m.tag){case 0:case 11:case 14:case 15:Tr(4,m,m.return);break;case 1:Dt(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(w){J(r,t,w)}}break;case 5:Dt(m,m.return);break;case 22:if(m.memoizedState!==null){$c(v);continue}}h!==null?(h.return=m,T=h):$c(v)}p=p.sibling}e:for(p=null,v=e;;){if(v.tag===5){if(p===null){p=v;try{i=v.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=v.stateNode,u=v.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=of("display",l))}catch(w){J(e,e.return,w)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=s?"":v.memoizedProps}catch(w){J(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Xe(n,e),on(e),r&4&&Oc(e);break;case 21:break;default:Xe(n,e),on(e)}}function on(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(zp(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rr(i,""),r.flags&=-33);var o=Lc(e);qa(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Lc(e);Ga(e,a,l);break;default:throw Error(k(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ng(e,n,t){T=e,Mp(e)}function Mp(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ni;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ve;a=Ni;var s=ve;if(Ni=l,(ve=u)&&!s)for(T=i;T!==null;)l=T,u=l.child,l.tag===22&&l.memoizedState!==null?jc(i):u!==null?(u.return=l,T=u):jc(i);for(;o!==null;)T=o,Mp(o),o=o.sibling;T=i,Ni=a,ve=s}Vc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):Vc(e)}}function Vc(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ve||Ro(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ve)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ke(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&kc(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}kc(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var p=s.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&Or(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ve||n.flags&512&&ja(n)}catch(m){J(n,n.return,m)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function $c(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function jc(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ro(4,n)}catch(u){J(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){J(n,i,u)}}var o=n.return;try{ja(n)}catch(u){J(n,o,u)}break;case 5:var l=n.return;try{ja(n)}catch(u){J(n,l,u)}}}catch(u){J(n,n.return,u)}if(n===e){T=null;break}var a=n.sibling;if(a!==null){a.return=n.return,T=a;break}T=n.return}}var Cg=Math.ceil,yo=Tn.ReactCurrentDispatcher,$u=Tn.ReactCurrentOwner,Fe=Tn.ReactCurrentBatchConfig,M=0,ae=null,re=null,se=0,Ce=0,Mt=Kn(0),oe=0,Qr=null,mt=0,Do=0,ju=0,Nr=null,ke=null,Gu=0,Yt=1/0,mn=null,wo=!1,Fa=null,Fn=null,Ci=!1,Ln=null,ko=0,Cr=0,Ua=null,Fi=-1,Ui=0;function ge(){return M&6?ne():Fi!==-1?Fi:Fi=ne()}function Un(e){return e.mode&1?M&2&&se!==0?se&-se:dg.transition!==null?(Ui===0&&(Ui=gf()),Ui):(e=O,e!==0||(e=window.event,e=e===void 0?16:bf(e.type)),e):1}function nn(e,n,t,r){if(50<Cr)throw Cr=0,Ua=null,Error(k(185));Yr(e,t,r),(!(M&2)||e!==ae)&&(e===ae&&(!(M&2)&&(Do|=t),oe===4&&Rn(e,se)),Te(e,r),t===1&&M===0&&!(n.mode&1)&&(Yt=ne()+500,Po&&Yn()))}function Te(e,n){var t=e.callbackNode;d_(e,n);var r=ro(e,e===ae?se:0);if(r===0)t!==null&&Xs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Xs(t),n===1)e.tag===0?cg(Gc.bind(null,e)):Uf(Gc.bind(null,e)),lg(function(){!(M&6)&&Yn()}),t=null;else{switch(yf(r)){case 1:t=pu;break;case 4:t=hf;break;case 16:t=to;break;case 536870912:t=_f;break;default:t=to}t=Fp(t,Lp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Lp(e,n){if(Fi=-1,Ui=0,M&6)throw Error(k(327));var t=e.callbackNode;if(Gt()&&e.callbackNode!==t)return null;var r=ro(e,e===ae?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Eo(e,r);else{n=r;var i=M;M|=2;var o=Vp();(ae!==e||se!==n)&&(mn=null,Yt=ne()+500,ct(e,n));do try{Ig();break}catch(a){Op(e,a)}while(1);Tu(),yo.current=o,M=i,re!==null?n=0:(ae=null,se=0,n=oe)}if(n!==0){if(n===2&&(i=_a(e),i!==0&&(r=i,n=Ba(e,i))),n===1)throw t=Qr,ct(e,0),Rn(e,r),Te(e,ne()),t;if(n===6)Rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ag(i)&&(n=Eo(e,r),n===2&&(o=_a(e),o!==0&&(r=o,n=Ba(e,o))),n===1))throw t=Qr,ct(e,0),Rn(e,r),Te(e,ne()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:it(e,ke,mn);break;case 3:if(Rn(e,r),(r&130023424)===r&&(n=Gu+500-ne(),10<n)){if(ro(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ba(it.bind(null,e,ke,mn),n);break}it(e,ke,mn);break;case 4:if(Rn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-en(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cg(r/1960))-r,10<r){e.timeoutHandle=ba(it.bind(null,e,ke,mn),r);break}it(e,ke,mn);break;case 5:it(e,ke,mn);break;default:throw Error(k(329))}}}return Te(e,ne()),e.callbackNode===t?Lp.bind(null,e):null}function Ba(e,n){var t=Nr;return e.current.memoizedState.isDehydrated&&(ct(e,n).flags|=256),e=Eo(e,n),e!==2&&(n=ke,ke=t,n!==null&&Wa(n)),e}function Wa(e){ke===null?ke=e:ke.push.apply(ke,e)}function Ag(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!rn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rn(e,n){for(n&=~ju,n&=~Do,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-en(n),r=1<<t;e[t]=-1,n&=~r}}function Gc(e){if(M&6)throw Error(k(327));Gt();var n=ro(e,0);if(!(n&1))return Te(e,ne()),null;var t=Eo(e,n);if(e.tag!==0&&t===2){var r=_a(e);r!==0&&(n=r,t=Ba(e,r))}if(t===1)throw t=Qr,ct(e,0),Rn(e,n),Te(e,ne()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,it(e,ke,mn),Te(e,ne()),null}function qu(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(Yt=ne()+500,Po&&Yn())}}function ht(e){Ln!==null&&Ln.tag===0&&!(M&6)&&Gt();var n=M;M|=1;var t=Fe.transition,r=O;try{if(Fe.transition=null,O=1,e)return e()}finally{O=r,Fe.transition=t,M=n,!(M&6)&&Yn()}}function Fu(){Ce=Mt.current,F(Mt)}function ct(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,og(t)),re!==null)for(t=re.return;t!==null;){var r=t;switch(xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uo();break;case 3:Xt(),F(Se),F(he),zu();break;case 5:Iu(r);break;case 4:Xt();break;case 13:F(W);break;case 19:F(W);break;case 10:Nu(r.type._context);break;case 22:case 23:Fu()}t=t.return}if(ae=e,re=e=Bn(e.current,null),se=Ce=n,oe=0,Qr=null,ju=Do=mt=0,ke=Nr=null,at!==null){for(n=0;n<at.length;n++)if(t=at[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}at=null}return e}function Op(e,n){do{var t=re;try{if(Tu(),ji.current=go,_o){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_o=!1}if(vt=0,le=ie=H=null,br=!1,Br=0,$u.current=null,t===null||t.return===null){oe=1,Qr=n,re=null;break}e:{var o=e,l=t.return,a=t,u=n;if(n=se,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,p=a,v=p.tag;if(!(p.mode&1)&&(v===0||v===11||v===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=Cc(l);if(h!==null){h.flags&=-257,Ac(h,l,a,o,n),h.mode&1&&Nc(o,s,n),n=h,u=s;var _=n.updateQueue;if(_===null){var w=new Set;w.add(u),n.updateQueue=w}else _.add(u);break e}else{if(!(n&1)){Nc(o,s,n),Uu();break e}u=Error(k(426))}}else if(B&&a.mode&1){var C=Cc(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ac(C,l,a,o,n),Su(Kt(u,a));break e}}o=u=Kt(u,a),oe!==4&&(oe=2),Nr===null?Nr=[o]:Nr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=wp(o,u,n);wc(o,f);break e;case 1:a=u;var c=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Fn===null||!Fn.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=kp(o,a,n);wc(o,g);break e}}o=o.return}while(o!==null)}jp(t)}catch(y){n=y,re===t&&t!==null&&(re=t=t.return);continue}break}while(1)}function Vp(){var e=yo.current;return yo.current=go,e===null?go:e}function Uu(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(mt&268435455)&&!(Do&268435455)||Rn(ae,se)}function Eo(e,n){var t=M;M|=2;var r=Vp();(ae!==e||se!==n)&&(mn=null,ct(e,n));do try{Pg();break}catch(i){Op(e,i)}while(1);if(Tu(),M=t,yo.current=r,re!==null)throw Error(k(261));return ae=null,se=0,oe}function Pg(){for(;re!==null;)$p(re)}function Ig(){for(;re!==null&&!t_();)$p(re)}function $p(e){var n=qp(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,n===null?jp(e):re=n,$u.current=null}function jp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Sg(t,n),t!==null){t.flags&=32767,re=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,re=null;return}}else if(t=xg(t,n,Ce),t!==null){re=t;return}if(n=n.sibling,n!==null){re=n;return}re=n=e}while(n!==null);oe===0&&(oe=5)}function it(e,n,t){var r=O,i=Fe.transition;try{Fe.transition=null,O=1,zg(e,n,t,r)}finally{Fe.transition=i,O=r}return null}function zg(e,n,t,r){do Gt();while(Ln!==null);if(M&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(f_(e,o),e===ae&&(re=ae=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ci||(Ci=!0,Fp(to,function(){return Gt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var l=O;O=1;var a=M;M|=4,$u.current=null,Tg(e,t),Dp(t,e),Z_(xa),io=!!Ea,xa=Ea=null,e.current=t,Ng(t),r_(),M=a,O=l,Fe.transition=o}else e.current=t;if(Ci&&(Ci=!1,Ln=e,ko=i),o=e.pendingLanes,o===0&&(Fn=null),l_(t.stateNode),Te(e,ne()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(wo)throw wo=!1,e=Fa,Fa=null,e;return ko&1&&e.tag!==0&&Gt(),o=e.pendingLanes,o&1?e===Ua?Cr++:(Cr=0,Ua=e):Cr=0,Yn(),null}function Gt(){if(Ln!==null){var e=yf(ko),n=Fe.transition,t=O;try{if(Fe.transition=null,O=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,ko=0,M&6)throw Error(k(331));var i=M;for(M|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(T=s;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:Tr(8,p,o)}var v=p.child;if(v!==null)v.return=p,T=v;else for(;T!==null;){p=T;var m=p.sibling,h=p.return;if(Ip(p),p===s){T=null;break}if(m!==null){m.return=h,T=m;break}T=h}}}var _=o.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){l=T;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,T=d;else e:for(l=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ro(9,a)}}catch(y){J(a,a.return,y)}if(a===l){T=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,T=g;break e}T=a.return}}if(M=i,Yn(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(bo,e)}catch{}r=!0}return r}finally{O=t,Fe.transition=n}}return!1}function qc(e,n,t){n=Kt(t,n),n=wp(e,n,1),e=qn(e,n,1),n=ge(),e!==null&&(Yr(e,1,n),Te(e,n))}function J(e,n,t){if(e.tag===3)qc(e,e,t);else for(;n!==null;){if(n.tag===3){qc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){e=Kt(t,e),e=kp(n,e,1),n=qn(n,e,1),e=ge(),n!==null&&(Yr(n,1,e),Te(n,e));break}}n=n.return}}function Rg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,ae===e&&(se&t)===t&&(oe===4||oe===3&&(se&130023424)===se&&500>ne()-Gu?ct(e,0):ju|=t),Te(e,n)}function Gp(e,n){n===0&&(e.mode&1?(n=gi,gi<<=1,!(gi&130023424)&&(gi=4194304)):n=1);var t=ge();e=Sn(e,n),e!==null&&(Yr(e,n,t),Te(e,t))}function Dg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gp(e,t)}function Mg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Gp(e,t)}var qp;qp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)xe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return xe=!1,Eg(e,n,t);xe=!!(e.flags&131072)}else xe=!1,B&&n.flags&1048576&&Bf(n,fo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;qi(e,n),e=n.pendingProps;var i=Wt(n,he.current);jt(n,t),i=Du(null,n,r,e,i,t);var o=Mu();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,be(r)?(o=!0,so(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Au(n),i.updater=Io,n.stateNode=i,i._reactInternals=n,za(n,r,e,t),n=Ma(null,n,r,!0,o,t)):(n.tag=0,B&&o&&Eu(n),_e(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(qi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Og(r),e=Ke(r,e),i){case 0:n=Da(null,n,r,e,t);break e;case 1:n=zc(null,n,r,e,t);break e;case 11:n=Pc(null,n,r,e,t);break e;case 14:n=Ic(null,n,r,Ke(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ke(r,i),Da(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ke(r,i),zc(e,n,r,i,t);case 3:e:{if(bp(n),e===null)throw Error(k(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Xf(e,n),mo(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Kt(Error(k(423)),n),n=Rc(e,n,r,t,i);break e}else if(r!==i){i=Kt(Error(k(424)),n),n=Rc(e,n,r,t,i);break e}else for(Pe=Gn(n.stateNode.containerInfo.firstChild),ze=n,B=!0,Ze=null,t=Jf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ht(),r===i){n=bn(e,n,t);break e}_e(e,n,r,t)}n=n.child}return n;case 5:return ep(n),e===null&&Aa(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Sa(r,i)?l=null:o!==null&&Sa(r,o)&&(n.flags|=32),Sp(e,n),_e(e,n,l,t),n.child;case 6:return e===null&&Aa(n),null;case 13:return Tp(e,n,t);case 4:return Pu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Qt(n,null,r,t):_e(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ke(r,i),Pc(e,n,r,i,t);case 7:return _e(e,n,n.pendingProps,t),n.child;case 8:return _e(e,n,n.pendingProps.children,t),n.child;case 12:return _e(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,j(po,r._currentValue),r._currentValue=l,o!==null)if(rn(o.value,l)){if(o.children===i.children&&!Se.current){n=bn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=kn(-1,t&-t),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var p=s.pending;p===null?u.next=u:(u.next=p.next,p.next=u),s.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Pa(o.return,t,n),a.lanes|=t;break}u=u.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Pa(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}_e(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,jt(n,t),i=Ue(i),r=r(i),n.flags|=1,_e(e,n,r,t),n.child;case 14:return r=n.type,i=Ke(r,n.pendingProps),i=Ke(r.type,i),Ic(e,n,r,i,t);case 15:return Ep(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ke(r,i),qi(e,n),n.tag=1,be(r)?(e=!0,so(n)):e=!1,jt(n,t),Yf(n,r,i),za(n,r,i,t),Ma(null,n,r,!0,e,t);case 19:return Np(e,n,t);case 22:return xp(e,n,t)}throw Error(k(156,n.tag))};function Fp(e,n){return mf(e,n)}function Lg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,n,t,r){return new Lg(e,n,t,r)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Og(e){if(typeof e=="function")return Bu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cu)return 11;if(e===du)return 14}return 2}function Bn(e,n){var t=e.alternate;return t===null?(t=qe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Bi(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")Bu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case bt:return dt(t.children,i,o,n);case su:l=8,i|=8;break;case ta:return e=qe(12,t,n,i|2),e.elementType=ta,e.lanes=o,e;case ra:return e=qe(13,t,n,i),e.elementType=ra,e.lanes=o,e;case ia:return e=qe(19,t,n,i),e.elementType=ia,e.lanes=o,e;case Yd:return Mo(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xd:l=10;break e;case Kd:l=9;break e;case cu:l=11;break e;case du:l=14;break e;case Pn:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=qe(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function dt(e,n,t,r){return e=qe(7,e,r,n),e.lanes=t,e}function Mo(e,n,t,r){return e=qe(22,e,r,n),e.elementType=Yd,e.lanes=t,e.stateNode={isHidden:!1},e}function Vl(e,n,t){return e=qe(6,e,null,n),e.lanes=t,e}function $l(e,n,t){return n=qe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Vg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wu(e,n,t,r,i,o,l,a,u){return e=new Vg(e,n,t,a,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=qe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(o),e}function $g(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:St,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Up(e){if(!e)return Hn;e=e._reactInternals;e:{if(yt(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(be(t))return Ff(e,t,n)}return n}function Bp(e,n,t,r,i,o,l,a,u){return e=Wu(t,r,!0,e,i,o,l,a,u),e.context=Up(null),t=e.current,r=ge(),i=Un(t),o=kn(r,i),o.callback=n??null,qn(t,o,i),e.current.lanes=i,Yr(e,i,r),Te(e,r),e}function Lo(e,n,t,r){var i=n.current,o=ge(),l=Un(i);return t=Up(t),n.context===null?n.context=t:n.pendingContext=t,n=kn(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=qn(i,n,l),e!==null&&(nn(e,i,l,o),$i(e,i,l)),l}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Hu(e,n){Fc(e,n),(e=e.alternate)&&Fc(e,n)}function jg(){return null}var Wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}Oo.prototype.render=Qu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Lo(e,n,null,null)};Oo.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ht(function(){Lo(null,e,null,null)}),n[xn]=null}};function Oo(e){this._internalRoot=e}Oo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ef();e={blockedOn:null,target:e,priority:n};for(var t=0;t<zn.length&&n!==0&&n<zn[t].priority;t++);zn.splice(t,0,e),t===0&&Sf(e)}};function Xu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uc(){}function Gg(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=xo(l);o.call(s)}}var l=Bp(n,r,e,0,null,!1,!1,"",Uc);return e._reactRootContainer=l,e[xn]=l.current,jr(e.nodeType===8?e.parentNode:e),ht(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var s=xo(u);a.call(s)}}var u=Wu(e,0,!1,null,null,!1,!1,"",Uc);return e._reactRootContainer=u,e[xn]=u.current,jr(e.nodeType===8?e.parentNode:e),ht(function(){Lo(n,u,t,r)}),u}function $o(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=xo(l);a.call(u)}}Lo(n,l,e,i)}else l=Gg(t,n,e,i,r);return xo(l)}wf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=vr(n.pendingLanes);t!==0&&(vu(n,t|1),Te(n,ne()),!(M&6)&&(Yt=ne()+500,Yn()))}break;case 13:ht(function(){var r=Sn(e,1);if(r!==null){var i=ge();nn(r,e,1,i)}}),Hu(e,1)}};mu=function(e){if(e.tag===13){var n=Sn(e,134217728);if(n!==null){var t=ge();nn(n,e,134217728,t)}Hu(e,134217728)}};kf=function(e){if(e.tag===13){var n=Un(e),t=Sn(e,n);if(t!==null){var r=ge();nn(t,e,n,r)}Hu(e,n)}};Ef=function(){return O};xf=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};va=function(e,n,t){switch(n){case"input":if(aa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ao(r);if(!i)throw Error(k(90));Jd(r),aa(r,i)}}}break;case"textarea":nf(e,t);break;case"select":n=t.value,n!=null&&Lt(e,!!t.multiple,n,!1)}};sf=qu;cf=ht;var qg={usingClientEntryPoint:!1,Events:[Jr,At,Ao,af,uf,qu]},dr={findFiberByHostInstance:lt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fg={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pf(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||jg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{bo=Ai.inject(Fg),fn=Ai}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qg;De.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(n))throw Error(k(200));return $g(e,n,null,t)};De.createRoot=function(e,n){if(!Xu(e))throw Error(k(299));var t=!1,r="",i=Wp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Wu(e,1,!1,null,null,t,!1,r,i),e[xn]=n.current,jr(e.nodeType===8?e.parentNode:e),new Qu(n)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=pf(n),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return ht(e)};De.hydrate=function(e,n,t){if(!Vo(n))throw Error(k(200));return $o(null,e,n,!0,t)};De.hydrateRoot=function(e,n,t){if(!Xu(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Wp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Bp(n,null,e,1,t??null,i,!1,o,l),e[xn]=n.current,jr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Oo(n)};De.render=function(e,n,t){if(!Vo(n))throw Error(k(200));return $o(null,e,n,!1,t)};De.unmountComponentAtNode=function(e){if(!Vo(e))throw Error(k(40));return e._reactRootContainer?(ht(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};De.unstable_batchedUpdates=qu;De.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Vo(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return $o(e,n,t,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function Hp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hp)}catch(e){console.error(e)}}Hp(),Ud.exports=De;var Ug=Ud.exports,Qp,Bc=Ug;Qp=Bc.createRoot,Bc.hydrateRoot;Qp(j0(Uv(document.querySelector("#root")))).render(N.jsx(qt.StrictMode,{children:N.jsx($0,{})}));
