const ap=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}};ap();var N={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr=Symbol.for("react.element"),sp=Symbol.for("react.portal"),cp=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),dp=Symbol.for("react.profiler"),pp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),hp=Symbol.for("react.suspense"),_p=Symbol.for("react.memo"),gp=Symbol.for("react.lazy"),fa=Symbol.iterator;function yp(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var Ys={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zs=Object.assign,Js={};function $t(e,n,t){this.props=e,this.context=n,this.refs=Js,this.updater=t||Ys}$t.prototype.isReactComponent={};$t.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};$t.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bs(){}bs.prototype=$t.prototype;function uu(e,n,t){this.props=e,this.context=n,this.refs=Js,this.updater=t||Ys}var au=uu.prototype=new bs;au.constructor=uu;Zs(au,$t.prototype);au.isPureReactComponent=!0;var da=Array.isArray,ec=Object.prototype.hasOwnProperty,su={current:null},nc={key:!0,ref:!0,__self:!0,__source:!0};function tc(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)ec.call(n,r)&&!nc.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:zr,type:e,key:l,ref:o,props:i,_owner:su.current}}function wp(e,n){return{$$typeof:zr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr}function kp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var pa=/\/+/g;function yl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?kp(""+e.key):n.toString(36)}function oi(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case zr:case sp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+yl(o,0):r,da(i)?(t="",e!=null&&(t=e.replace(pa,"$&/")+"/"),oi(i,n,t,"",function(s){return s})):i!=null&&(cu(i)&&(i=wp(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pa,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",da(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+yl(l,u);o+=oi(l,n,t,a,i)}else if(a=yp(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+yl(l,u++),o+=oi(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Fr(e,n,t){if(e==null)return e;var r=[],i=0;return oi(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Ep(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},ui={transition:null},Sp={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:ui,ReactCurrentOwner:su};D.Children={map:Fr,forEach:function(e,n,t){Fr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Fr(e,function(){n++}),n},toArray:function(e){return Fr(e,function(n){return n})||[]},only:function(e){if(!cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=$t;D.Fragment=cp;D.Profiler=dp;D.PureComponent=uu;D.StrictMode=fp;D.Suspense=hp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sp;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zs({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=su.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)ec.call(n,a)&&!nc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:zr,type:e.type,key:i,ref:l,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:vp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pp,_context:e},e.Consumer=e};D.createElement=tc;D.createFactory=function(e){var n=tc.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:mp,render:e}};D.isValidElement=cu;D.lazy=function(e){return{$$typeof:gp,_payload:{_status:-1,_result:e},_init:Ep}};D.memo=function(e,n){return{$$typeof:_p,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=ui.transition;ui.transition={};try{e()}finally{ui.transition=n}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,n){return he.current.useCallback(e,n)};D.useContext=function(e){return he.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return he.current.useDeferredValue(e)};D.useEffect=function(e,n){return he.current.useEffect(e,n)};D.useId=function(){return he.current.useId()};D.useImperativeHandle=function(e,n,t){return he.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return he.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return he.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return he.current.useMemo(e,n)};D.useReducer=function(e,n,t){return he.current.useReducer(e,n,t)};D.useRef=function(e){return he.current.useRef(e)};D.useState=function(e){return he.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return he.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return he.current.useTransition()};D.version="18.2.0";N.exports=D;function va(e,n,t){for(var r=new Array(t),i=0,l=n;i<t;)r[i]=e[l],i=i+1|0,l=l+1|0;return r}function xp(e,n,t){if(n<0||n>=e.length)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};e[n]=t}function O(e,n){if(n<0||n>=e.length)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};return e[n]}function yi(e,n){for(;;){var t=n,r=e,i=r.length,l=i===0?1:i,o=t.length,u=l-o|0;if(u===0)return r.apply(null,t);if(u>=0)return function(a,s){return function(p){return yi(a,s.concat([p]))}}(r,t);n=va(t,l,-u|0),e=r.apply(null,va(t,0,l))}}function En(e,n){var t=e.length;if(t===1)return e(n);switch(t){case 1:return e(n);case 2:return function(r){return e(n,r)};case 3:return function(r,i){return e(n,r,i)};case 4:return function(r,i,l){return e(n,r,i,l)};case 5:return function(r,i,l,o){return e(n,r,i,l,o)};case 6:return function(r,i,l,o,u){return e(n,r,i,l,o,u)};case 7:return function(r,i,l,o,u,a){return e(n,r,i,l,o,u,a)};default:return yi(e,[n])}}function Tp(e){var n=e.length;return n===1?e:function(t){return En(e,t)}}function rc(e,n,t){var r=e.length;if(r===2)return e(n,t);switch(r){case 1:return yi(e(n),[t]);case 2:return e(n,t);case 3:return function(i){return e(n,t,i)};case 4:return function(i,l){return e(n,t,i,l)};case 5:return function(i,l,o){return e(n,t,i,l,o)};case 6:return function(i,l,o,u){return e(n,t,i,l,o,u)};case 7:return function(i,l,o,u,a){return e(n,t,i,l,o,u,a)};default:return yi(e,[n,t])}}function Ki(e){var n=e.length;return n===2?e:function(t,r){return rc(e,t,r)}}function Yi(e){return e===void 0?{BS_PRIVATE_NESTED_SOME_NONE:0}:e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function Cp(e){if(e!=null)return Yi(e)}function ic(e){if(!(e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;if(n!==0)return{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}function lc(e){if(e!==void 0)return ic(e);throw new Error("getExn")}var Np=function(e,n,t){var r,i;i=t.length;var l=[];for(r=0;r<i-1;++r)l.push(t[r]);var o=t[i-1];for(r=0;r<o.length;++r)l.push(o[r]);return e[n].apply(e,l)};function oc(e,n){return n.filter(function(t){return t!==""}).join(e)}function uc(e,n){var t=n.slice(),r=t.shift();return t.reduce(Ki(e),lc(r===void 0?void 0:Yi(r)))}function ac(e,n){var t=n.length-1|0;return Np([],"concat",[n.map(function(r,i){return i===t?[r]:[r,e]})])}function jr(e){return Yi(e)}var Gr,wl={contents:0};function sc(e){return wl.contents=wl.contents+1|0,e+("/"+wl.contents)}function Ap(e){return e==null?!1:typeof e.RE_EXN_ID=="string"}var Pp=sc("Caml_js_exceptions.Error");function zp(e){return Ap(e)?e:{RE_EXN_ID:Pp,_1:e}}function se(e){throw new Error(e)}function Lp(e){switch(e){case 0:return"1";case 1:return"0";case 2:return"x";case 3:return"z"}}function Ip(e){return e===0}function Op(e){return e===1}function Dp(e,n){return e===n?e:e===3?n:n===3?e:2}function Rp(e,n){switch(e){case 0:return n>=3?0:n;case 1:return 1;case 2:return n!==1?2:1;case 3:return n}}function Mp(e,n){switch(e){case 0:return 0;case 1:return n>=3?1:n;case 2:return n!==0?2:0;case 3:return n}}function Vp(e){return e!==1?e!==0?2:1:0}function ma(e,n){return e!==1?e!==0?n!==1?2:1:n!==1?n!==0?2:0:n!==1?2:1:1}function ha(e,n){return e!==1?e!==0&&n!==0?2:0:n!==1?n!==0||n!==0?2:0:1}function Fp(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function jp(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}var _a=0,ga=1,Gp=2,$p=3;function ya(e,n){return e<n?-1:e===n?0:1}function Up(e,n){return e?n?0:1:n?-1:0}function cc(e,n){return e===n?0:e<n?-1:1}function fc(e,n){return e<n?e:n}function Bp(e,n){return e>n?e:n}var wi=function(e,n){for(var t in e)n(t)};function Tt(e,n){if(e===n)return 0;var t=typeof e,r=typeof n;switch(t){case"boolean":if(r==="boolean")return Up(e,n);break;case"function":if(r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"compare: functional value",Error:new Error};break;case"number":if(r==="number")return ya(e,n);break;case"string":return r==="string"?cc(e,n):1;case"undefined":return-1}switch(r){case"string":return-1;case"undefined":return 1;default:if(t==="boolean")return 1;if(r==="boolean")return-1;if(t==="function")return 1;if(r==="function")return-1;if(t==="number")return n===null||n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(r==="number")return e===null||e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e===null)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(n===null)return e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e.BS_PRIVATE_NESTED_SOME_NONE!==void 0)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?wa(e,n):-1;var i=e.TAG|0,l=n.TAG|0;if(i===248)return ya(e[1],n[1]);if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==l)return i<l?-1:1;var o=e.length|0,u=n.length|0;if(o===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===o)return 0;var p=Tt(e[s],n[s]);if(p!==0)return p;a=s+1|0}else return e instanceof Date&&n instanceof Date?e-n:wa(e,n);else if(o<u)for(var m=0;;){var v=m;if(v===o)return-1;var _=Tt(e[v],n[v]);if(_!==0)return _;m=v+1|0}else for(var y=0;;){var w=y;if(w===u)return 1;var L=Tt(e[w],n[w]);if(L!==0)return L;y=w+1|0}}}function wa(e,n){var t={contents:void 0},r={contents:void 0},i=function(m,v){var _=m[2],y=m[1];if(!y.hasOwnProperty(v)||Tt(m[0][v],y[v])>0){var w=_.contents;if(!(w!==void 0&&v>=w)){_.contents=v;return}}},l=[e,n,r],o=function(m){return i(l,m)},u=[n,e,t],a=function(m){return i(u,m)};wi(e,o),wi(n,a);var s=t.contents,p=r.contents;return s!==void 0?p!==void 0?cc(s,p):-1:p!==void 0?1:0}function fe(e,n){if(e===n)return!0;var t=typeof e;if(t==="string"||t==="number"||t==="boolean"||t==="undefined"||e===null)return!1;var r=typeof n;if(t==="function"||r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if(r==="number"||r==="undefined"||n===null)return!1;var i=e.TAG|0,l=n.TAG|0;if(i===248)return e[1]===n[1];if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==l)return!1;var o=e.length|0,u=n.length|0;if(o===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===o)return!0;if(!fe(e[s],n[s]))return!1;a=s+1|0}else{if(e instanceof Date&&n instanceof Date)return!(e>n||e<n);var p={contents:!0},m=function(_){if(!n.hasOwnProperty(_)){p.contents=!1;return}},v=function(_){if(!e.hasOwnProperty(_)||!fe(n[_],e[_])){p.contents=!1;return}};return wi(e,m),p.contents&&wi(n,v),p.contents}else return!1}function dc(e,n){return!fe(e,n)}function Wp(e,n){return Tt(e,n)>=0}function Hp(e,n){return Tt(e,n)>0}function kl(e,n){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",27,4],Error:new Error};return e[n]}function Z(e,n,t){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",33,2],Error:new Error};e[n]=t}function Qp(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(e[i]);return r}function Zn(e,n){return Qp(e,Tp(n))}function Xp(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(i,e[i]);return r}function Wt(e,n){return Xp(e,Ki(n))}function qp(e,n,t){for(var r=n,i=0,l=e.length;i<l;++i)r=t(r,e[i]);return r}function Kp(e,n,t){return qp(e,n,Ki(t))}function Yp(e,n,t,r,i){for(;;){var l=t;if(l===i)return!0;if(!r(e[l],n[l]))return!1;t=l+1|0}}function Zp(e,n,t){return Yp(e,n,0,t,fc(e.length,n.length))}function Jp(e,n,t){return Zp(e,n,Ki(t))}function bp(e,n,t,r,i){for(;;){var l=t,o=n;if(l>=r)return l;var u=e[l];if(!i(u,o))return l;t=l+1|0,n=u}}function ev(e,n){var t=e.length;if(t===0||t===1)return t;var r=e[0],i=e[1];if(n(r,i))for(var l=i,o=2;;){var u=o,a=l;if(u>=t)return u;var s=e[u];if(!n(a,s))return u;o=u+1|0,l=s}else return n(i,r)?-bp(e,i,2,t,n)|0:1}function ce(e){return e!==void 0?e.h:0}function Ie(e,n,t,r){var i=ce(e),l=ce(r);return{k:n,v:t,h:i>=l?i+1|0:l+1|0,l:e,r}}function nn(e,n){return{k:e,v:n,h:1,l:void 0,r:void 0}}function ka(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function nv(e,n){return e.v===n?e:{k:e.k,v:n,h:e.h,l:e.l,r:e.r}}function Ea(e,n,t,r){var i=e!==void 0?e.h:0,l=r!==void 0?r.h:0;if(i>(l+2|0)){var o=e.l,u=e.r;return ce(o)>=ce(u)?Ie(o,e.k,e.v,Ie(u,n,t,r)):Ie(Ie(o,e.k,e.v,u.l),u.k,u.v,Ie(u.r,n,t,r))}if(l<=(i+2|0))return{k:n,v:t,h:i>=l?i+1|0:l+1|0,l:e,r};var a=r.l,s=r.r;return ce(s)>=ce(a)?Ie(Ie(e,n,t,a),r.k,r.v,s):Ie(Ie(e,n,t,a.l),a.k,a.v,Ie(a.r,r.k,r.v,s))}function ki(e){var n=e.l,t=e.r,r=n!==void 0?ki(n):0,i=t!==void 0?ki(t):0;return(1+r|0)+i|0}function pc(e,n,t){for(;;){var r=n,i=e,l=i.k,o=i.l,u=i.r,a=o!==void 0?pc(o,r,t):r;t[a]=l;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function vc(e,n,t){for(;;){var r=n,i=e,l=i.l,o=i.k,u=i.r,a=l!==void 0?vc(l,r,t):r;t[a]=[o,i.v];var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function tv(e){if(e===void 0)return[];var n=ki(e),t=new Array(n);return vc(e,0,t),t}function rv(e){if(e===void 0)return[];var n=ki(e),t=new Array(n);return pc(e,0,t),t}function no(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return nn(r[0],r[1]);case 2:var i=e[n],l=e[n-1|0],o=l,u=i;return{k:o[0],v:o[1],h:2,l:nn(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n-1|0],p=e[n-2|0],m=p,v=s,_=a;return{k:v[0],v:v[1],h:2,l:nn(_[0],_[1]),r:nn(m[0],m[1])};default:var y=t/2|0,w=no(e,n,y),L=e[n-y|0],f=no(e,(n-y|0)-1|0,(t-y|0)-1|0);return Ie(w,L[0],L[1],f)}}function to(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return nn(r[0],r[1]);case 2:var i=e[n],l=e[n+1|0],o=l,u=i;return{k:o[0],v:o[1],h:2,l:nn(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n+1|0],p=e[n+2|0],m=p,v=s,_=a;return{k:v[0],v:v[1],h:2,l:nn(_[0],_[1]),r:nn(m[0],m[1])};default:var y=t/2|0,w=to(e,n,y),L=e[n+y|0],f=to(e,(n+y|0)+1|0,(t-y|0)-1|0);return Ie(w,L[0],L[1],f)}}function fu(e){var n=e.l;e.l=n.r,n.r=e;var t=ce(e.l),r=ce(e.r);e.h=(t>r?t:r)+1|0;var i=ce(n.l),l=e.h;return n.h=(i>l?i:l)+1|0,n}function du(e){var n=e.r;e.r=n.l,n.l=e;var t=ce(e.l),r=ce(e.r);e.h=(t>r?t:r)+1|0;var i=ce(n.r),l=e.h;return n.h=(i>l?i:l)+1|0,n}function iv(e){var n=e.l,t=du(n);return e.l=t,fu(e)}function lv(e){var n=e.r,t=fu(n);return e.r=t,du(e)}function $r(e){var n=ce(e.l),t=ce(e.r);return e.h=(n>t?n:t)+1|0,e}function ov(e){var n=e.l,t=e.r,r=ce(n),i=ce(t);if(r>(2+i|0)){var l=n.l,o=n.r;return ka(l,o)?$r(fu(e)):$r(iv(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return ka(a,u)?$r(du(e)):$r(lv(e))}return e.h=(r>i?r:i)+1|0,e}function uv(e,n){for(;;){var t=e;if(t!==void 0){var r=t.k;if(n===r)return t.v;e=n<r?t.l:t.r;continue}throw{RE_EXN_ID:"Not_found",Error:new Error}}}function ro(e,n,t){if(e===void 0)return nn(n,t);var r=e.k;if(n===r)return e.k=n,e.v=t,e;var i=e.l,l=e.r;if(n<r){var o=ro(i,n,t);e.l=o}else e.r=ro(l,n,t);return ov(e)}function av(e){var n=e.length;if(n!==0){var t=ev(e,function(o,u){return o[0]<u[0]}),r;t>=0?r=to(e,0,t):(t=-t|0,r=no(e,t-1|0,t));for(var i=t;i<n;++i){var l=e[i];r=ro(r,l[0],l[1])}return r}}function Jn(e,n,t){if(e===void 0)return nn(n,t);var r=e.k;if(n===r)return nv(e,t);var i=e.v;return n<r?Ea(Jn(e.l,n,t),r,i,e.r):Ea(e.l,r,i,Jn(e.r,n,t))}var sv=tv,mc=av,cv=rv,bn=uv;function El(e){return{_0:e}}function zn(e){return"1'b"+Lp(e._0)}function Sl(e){return{TAG:0,_0:e}}function fv(e){return{TAG:1,_0:e}}function dv(e){return{TAG:2,_0:e}}function pv(e,n){return{TAG:3,_0:e,_1:0,_2:n}}function vv(e,n){return{TAG:3,_0:e,_1:1,_2:n}}function mv(e,n){return{TAG:3,_0:e,_1:2,_2:n}}function hv(e,n){return{TAG:3,_0:e,_1:3,_2:n}}function _v(e,n){return{TAG:3,_0:e,_1:4,_2:n}}function gv(e,n){return{TAG:3,_0:e,_1:5,_2:n}}function yv(e){return{_0:e}}function wv(e){return{TAG:0,_0:e}}function kv(e,n){return{TAG:1,_0:e,_1:n}}function Ev(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function io(e){return typeof e=="number"?0:e._0}function lo(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:case 2:return e._1}}function Sv(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return fc(e._0<e._1?e._0:e._1,e._2)}}function oo(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return e._2}}function xv(e,n){switch(n){case 0:return io(e);case 1:return lo(e);case 2:return Sv(e);case 3:return oo(e)}}function Zi(e,n){return xv(e,n._0)}function Tv(e,n){return e!==void 0?Zi(e,n):0}function Cv(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0>e._1?e._0:e._1;case 2:return Bp(e._0>e._1?e._0:e._1,e._2)}}function Nv(e,n){return{TAG:2,_0:io(e)+io(n)|0,_1:lo(e)+lo(n)|0,_2:oo(e)+oo(n)|0}}function Av(e,n){switch(e){case 0:return n!==0?1:2;case 1:return n!==1?0:2;case 2:case 3:return n!==1?n!==0?2:0:1}}function Pv(e){return{TAG:0,_0:e}}function zv(e){return{TAG:1,_0:e}}function Lv(e){return{TAG:2,_0:e}}function Iv(e,n){return{TAG:3,_0:e,_1:n}}function hc(e){if(!fe(e,[]))return uc(function(n,t){return{TAG:3,_0:n,_1:t}},e)}function Ov(e){return{TAG:0,_0:e}}function Dv(e){return{TAG:1,_0:e}}function _c(e,n,t){for(;;){var r=e;if(typeof r=="number")return!1;switch(r.TAG|0){case 0:return r._0===n?t===0:!1;case 1:return r._0===n?t===1:!1;case 2:return r._0===n;case 3:if(_c(r._0,n,t))return!0;e=r._1;continue}}}function Rv(e,n,t,r){if(typeof e=="number"||e.TAG!==0)return se("impossible");var i=e._0;if(typeof i=="number"||i.TAG===0)return se("impossible");var l=Av(t._0,r._0);return l===2?!1:_c(i._0,n,l)}function Mv(e){switch(e){case 0:return Dp;case 1:return Rp;case 2:return Mp}}function gc(e){return typeof e!="number"}function Vv(e){return typeof e=="number"?e===0:!0}var Fv=[],jv=[],Gv=[],$v=[],Uv={vars:Fv,nets:jv,conts:Gv,procs:$v},Sa={contents:0};function dn(e){var n=Sa.contents;return Sa.contents=n+1|0,n}function Bv(e){if(e.TAG===2)return[e._1,e._2];throw{RE_EXN_ID:"Match_failure",_1:["Verilog.res",297,1],Error:new Error}}function xl(e){return String(e._0)}var Wv=[],yc=[],wc=[],xa={active:Wv,inactive:yc,nba:wc};function Hv(e){return e?"finished":"running"}function kc(e,n){var t=e.find(function(r){return r.name===n});return t!==void 0?t:se("missing key")}function Qv(e,n){return n.some(function(t){return t.lhs===e})}function Xv(e,n,t){return rc(e,n._0,t._0)}function Hn(e,n,t){return{_0:Xv(e,n,t)}}function ye(e,n){switch(n.TAG|0){case 0:return n._0;case 1:return bn(e,n._0);case 2:var t=ye(e,n._0);return{_0:Vp(t._0)};case 3:var r=n._1,i=n._0;if(r!==1)if(r!==0){var l=ye(e,i),o=ye(e,n._2);switch(r){case 0:case 1:return se("impossible");case 2:return Hn(ma,l,o);case 3:return Hn(ha,l,o);case 4:return Hn(Fp,l,o);case 5:return Hn(jp,l,o)}}else{var u=ye(e,i);if(Op(u._0))return u;var a=ye(e,n._2);return Hn(ma,u,a)}else{var s=ye(e,i);if(Ip(s._0))return s;var p=ye(e,n._2);return Hn(ha,s,p)}}}function qv(e,n,t){return t?{TAG:0,_0:ye(n,t._0)}:{TAG:1,_0:e}}function Ec(e,n){for(;;){var t=e;switch(t.TAG|0){case 0:return!1;case 1:return n===t._0;case 2:e=t._0;continue;case 3:if(Ec(t._0,n))return!0;e=t._2;continue}}}function Sc(e,n,t){var r=kc(e,n).delay;return Nv(r,t)}function Kv(e,n,t){for(var r=!1,i=0,l=-1,o=-1,u=function(p){return p.TAG===0?p._1===t:!1};!r&&i<e.length;){var a=O(e,i);if(Hp(a[0],n))r=!0;else{var s=a[1].active.findIndex(u);s!==-1&&(r=!0,l=i,o=s)}i=i+1|0}if(l!==-1)return[l,o]}function Yv(e,n){var t=e.slice(0,n),r=e.slice(n+1|0,e.length);return t.concat(r)}function Zv(e,n){switch(n){case 0:return e.active;case 1:return e.inactive;case 2:return e.nba}}function Tl(e,n,t){switch(n){case 0:return{active:t,inactive:e.inactive,nba:e.nba};case 1:return{active:e.active,inactive:t,nba:e.nba};case 2:return{active:e.active,inactive:e.inactive,nba:t}}}function rr(e,n,t,r){var i=e.findIndex(function(_){return Wp(_[0],t)});if(i===-1){var l=Tl(xa,n,[r]);return e.concat([[t,l]])}if(fe(O(e,i)[0],t)){var o=O(e,i)[1],u=Zv(o,n).concat([r]),a=Tl(o,n,u),s=e.slice();return Z(s,i,[t,a]),s}var p=e.slice(0,i),m=Tl(xa,n,[r]),v=e.slice(i,e.length);return p.concat([[t,m]]).concat(v)}function Sn(e,n){var t=n.pc+1|0;return t===e.stmts.length?{pc:0,state:gc(e.proc_type)?0:3}:{pc:t,state:0}}function ai(e,n,t,r,i){if(fe(r,i))return e;for(var l=e.queue.slice(),o=e.vmodule.conts.map(function(h,z){return[h,z]}).filter(function(h){return n!==h[1]?Ec(h[0].rhs,t):!1}),u=o.map(function(h){var z=h[0];return[z.delay,{TAG:0,_0:dn(),_1:h[1],_2:ye(e.env,z.rhs)}]}),a=function(h,z){var P=z[1];if(P.TAG===0){var Q=P._2,ee=P._1,ge=Sc(e.vmodule.nets,O(e.vmodule.conts,ee).lhs,z[0]),Ye=Zi(ge,Q),Ge=Cv(ge),q=Kv(h,e.time+Ge|0,ee),pe;if(q!==void 0){var x=q[0],A=O(h,x),I=A[1],M=I.active.slice();if(M.splice(q[1],1),fe(M,[]))pe=Yv(h,x);else{var j=h.slice();Z(j,x,[A[0],{active:M,inactive:I.inactive,nba:I.nba}]),pe=j}}else pe=h;return rr(pe,0,e.time+Ye|0,{TAG:0,_0:dn(),_1:ee,_2:Q})}throw{RE_EXN_ID:"Match_failure",_1:["Verilog.res",578,37],Error:new Error}},s=u.reduce(a,l),p=e.proc_env.map(function(h,z){return[h,z]}).filter(function(h){var z=h[0];return z.state===1?Rv(O(O(e.vmodule.procs,h[1]).stmts,z.pc),t,r,i):!1}),m=e.proc_env.slice(),v=0,_=p.length;v<_;++v){var y=O(p,v),w=y[1],L=Sn(O(e.vmodule.procs,w),y[0]);Z(m,w,L)}var f=p.map(function(h){return{TAG:3,_0:dn(),_1:{TAG:1,_0:h[1]}}}),c=O(s,0),d=c[1],g=d.active.concat(f),S=d.inactive,T=d.nba,E={active:g,inactive:S,nba:T};return Z(s,0,[c[0],E]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:m,queue:s,monitor:e.monitor,output:e.output,time:e.time}}function Jv(e){return e._0===0}function Ta(e,n,t){var r=e.proc_env.slice(),i=O(r,n),l=O(e.vmodule.procs,n),o=i.pc+t|0,u=o===l.stmts.length?{pc:0,state:gc(l.proc_type)?0:3}:{pc:o,state:i.state};return Z(r,n,u),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:r,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}function bv(e){return e.TAG===0?zn(e._0):se("expected value found time")}function em(e){return e.TAG===0?se("expected time found value"):String(e._0)}function nm(e,n){for(var t="",r=0,i=0;r<e.length;)if(e[r]==="%"){r=r+1|0;var l=e[r];l==="b"?(t=t.concat(bv(O(n,i))),i=i+1|0):l==="d"?(t=t.concat(em(O(n,i))),i=i+1|0):se("unsupported format"),r=r+1|0}else t=t.concat(e[r]),r=r+1|0;return t=t.concat(`
`),t}function tm(e,n){return e.TAG===0?n.TAG===0?fe(e._0,n._0):se("impossible"):n.TAG===0?se("impossible"):!0}function xc(e,n,t,r){var i=e.env,l=e.time,o=t.map(function(p){return qv(l,i,p)}),u=r!==void 0?Jp(o,r,tm):!1;if(u)return[o,e.output];var a=nm(n,o),s=e.output.concat(a);return[o,s]}function rm(e,n,t){var r=O(e.vmodule.procs,t),i=O(e.proc_env,t),l=O(r.stmts,i.pc);if(typeof l=="number")return{vmodule:e.vmodule,status:1,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};switch(l.TAG|0){case 0:var o=l._0;if(typeof o=="number")throw{RE_EXN_ID:"Match_failure",_1:["Verilog.res",736,1],Error:new Error};if(o.TAG===0){var u=Sn(r,i),a=u.pc,s={pc:a,state:2},p=e.proc_env.slice();Z(p,t,s);var m=rr(e.queue,0,e.time+o._0|0,{TAG:3,_0:dn(),_1:{TAG:1,_0:t}});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:p,queue:m,monitor:e.monitor,output:e.output,time:e.time}}var v=i.pc,_={pc:v,state:1},y=e.proc_env.slice();return Z(y,t,_),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:y,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};case 1:if(l._0){var w=ye(e.env,l._3),L=Sn(r,i),f=e.proc_env.slice();Z(f,t,L);var c=Tv(l._2,w),d=rr(e.queue,2,e.time+c|0,{TAG:2,_0:dn(),_1:l._1,_2:w});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:f,queue:d,monitor:e.monitor,output:e.output,time:e.time}}var g=l._2,S=l._1,T=ye(e.env,l._3);if(g!==void 0){var E=i.pc,h={pc:E,state:2},z=e.proc_env.slice();Z(z,t,h);var P=Zi(g,T),Q=P===0?1:0,ee=rr(e.queue,Q,e.time+P|0,{TAG:1,_0:dn(),_1:t,_2:S,_3:T});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:z,queue:ee,monitor:e.monitor,output:e.output,time:e.time}}var ge=bn(e.env,S),Ye=Jn(e.env,S,T),Ge=Sn(r,i),q=e.proc_env.slice();Z(q,t,Ge);var pe=e.vmodule,x=e.status,A=e.cont_env,I=e.queue,M=e.monitor,j=e.output,yn=e.time,$e={vmodule:pe,status:x,env:Ye,cont_env:A,proc_env:q,queue:I,monitor:M,output:j,time:yn};return ai($e,-1,S,ge,T);case 2:var wn=xc(e,l._0,l._1,void 0),Ue=Sn(r,i),un=e.proc_env.slice();return Z(un,t,Ue),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:un,queue:e.queue,monitor:e.monitor,output:wn[1],time:e.time};case 3:var pl=[l._0,l._1,void 0],vl=Sn(r,i),Mr=e.proc_env.slice();return Z(Mr,t,vl),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Mr,queue:e.queue,monitor:pl,output:e.output,time:e.time};case 4:return Ta(e,t,l._0);case 5:if(!Jv(ye(e.env,l._0)))return Ta(e,t,l._1);var ml=Sn(r,i),Vr=e.proc_env.slice();return Z(Vr,t,ml),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Vr,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}}function Ca(e,n,t){for(var r=0,i=e;r<100&&i.status===0&&O(i.proc_env,t).state===0;)r=r+1|0,i=rm(i,n,t);return r===100&&se("time out!"),i}function im(e,n){var t=O(e,n);if(t.TAG===4){var r=t._1;if(r.length!==1){var i=r.slice();return i.shift(),xp(e,n,{TAG:4,_0:t._0,_1:i})}e.splice(n,1);return}e.splice(n,1)}function lm(e){var n=e.proc_type;return typeof n=="number"?n!==0?{pc:0,state:1}:{pc:0,state:0}:n._0?{pc:1,state:0}:{pc:0,state:0}}function om(e,n){return n!==void 0?ye(e,n):{_0:2}}function Na(e){var n=e.procs.map(function(i,l){return[i,l]}).filter(function(i){return Vv(i[0].proc_type)}).map(function(i){return{TAG:3,_0:dn(),_1:{TAG:1,_0:i[1]}}}),t=mc(Zn(e.nets,function(i){return[i.name,{_0:Qv(i.name,e.conts)?2:3}]})),r=Kp(e.vars,t,function(i,l){return Jn(i,l.target,om(i,l.init))});return{vmodule:e,status:0,env:r,cont_env:Zn(e.conts,function(i){return{_0:2}}),proc_env:Zn(e.procs,lm),queue:[[0,{active:n,inactive:yc,nba:wc}]],monitor:void 0,output:"",time:0}}function um(e,n,t){var r=ye(e.env,n.rhs),i=Sc(e.vmodule.nets,n.lhs,n.delay),l=Zi(i,r);return[l,{TAG:0,_0:dn(),_1:t,_2:r}]}function Aa(e){var n=e.vmodule.conts.map(function(r,i){return um(e,r,i)}),t=n.reduce(function(r,i){return rr(r,0,i[0],i[1])},e.queue);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:t,monitor:e.monitor,output:e.output,time:e.time}}function Pa(e,n,t){return e.status===0?e.time===n:!1}function am(e,n){var t=O(e.queue,0),r=t[1],i=r.active.slice(),l=kl(i,n);im(i,n);var o=r.inactive,u=r.nba,a={active:i,inactive:o,nba:u},s=e.queue.slice();Z(s,0,[t[0],a]);var p=e.vmodule,m=e.status,v=e.env,_=e.cont_env,y=e.proc_env,w=e.monitor,L=e.output,f=e.time;switch(l.TAG|0){case 0:var c=l._1,d=_.slice();Z(d,c,l._2);var g=kl(p.conts,c).lhs,S=kc(p.nets,g),T=bn(v,g),E=Mv(S.type_),h=uc(function(Wn,gl){return Hn(E,Wn,gl)},p.conts.map(function(Wn,gl){return[Wn,gl]}).filter(function(Wn){return Wn[0].lhs===g}).map(function(Wn){return kl(d,Wn[1])})),z=Jn(v,g,h),P=p,Q=m,ee=y,ge=w,Ye=L,Ge=f,q={vmodule:P,status:Q,env:z,cont_env:d,proc_env:ee,queue:s,monitor:ge,output:Ye,time:Ge};return ai(q,c,g,T,h);case 1:var pe=l._3,x=l._2,A=l._1,I=bn(v,x),M=Jn(v,x,pe),j=O(y,A),yn=O(p.procs,A),$e=Sn(yn,j),wn=y.slice();Z(wn,A,$e);var Ue=p,un=m,pl=_,vl=w,Mr=L,ml=f,Vr={vmodule:Ue,status:un,env:M,cont_env:pl,proc_env:wn,queue:s,monitor:vl,output:Mr,time:ml},Fd=ai(Vr,-1,x,I,pe);return Ca(Fd,n,A);case 2:throw{RE_EXN_ID:"Match_failure",_1:["Verilog.res",944,1],Error:new Error};case 3:var oa=l._1;if(oa.TAG===0)throw{RE_EXN_ID:"Match_failure",_1:["Verilog.res",944,1],Error:new Error};var hl=oa._0,jd=O(y,hl),Gd=jd.pc,$d={pc:Gd,state:0},ua=y.slice();Z(ua,hl,$d);var Ud=p,Bd=m,Wd=v,Hd=_,Qd=w,Xd=L,qd=f,Kd={vmodule:Ud,status:Bd,env:Wd,cont_env:Hd,proc_env:ua,queue:s,monitor:Qd,output:Xd,time:qd};return Ca(Kd,n,hl);case 4:var Yd=l._1.slice(),aa=Yd.shift(),Zd=lc(aa===void 0?void 0:Yi(aa)),sa=Bv(Zd),ca=sa[1],_l=sa[0],Jd=bn(v,_l),bd=Jn(v,_l,ca),ep=p,np=m,tp=_,rp=y,ip=w,lp=L,op=f,up={vmodule:ep,status:np,env:bd,cont_env:tp,proc_env:rp,queue:s,monitor:ip,output:lp,time:op};return ai(up,-1,_l,Jd,ca)}}function za(e){if(e.status!==0)return!1;var n=O(e.queue,0),t=n[1];return fe(t.active,[])?dc(t.inactive,[]):!1}function sm(e){var n=O(e.queue,0),t=n[1],r=t.inactive,i=[],l=t.nba,o={active:r,inactive:i,nba:l},u=e.queue.slice();return Z(u,0,[e.time,o]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:u,monitor:e.monitor,output:e.output,time:e.time}}function La(e){if(e.status!==0)return!1;var n=O(e.queue,0),t=n[1];return fe(t.active,[])&&fe(t.inactive,[])?dc(t.nba,[]):!1}function cm(e){var n=O(e.queue,0),t=n[1],r=dn(),i=t.nba,l={TAG:4,_0:r,_1:i},o=t.active.concat([l]),u=t.inactive,a=[],s={active:o,inactive:u,nba:a},p=e.queue.slice();return Z(p,0,[e.time,s]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:p,monitor:e.monitor,output:e.output,time:e.time}}function Ia(e){if(e.status!==0)return!1;var n=e.queue.length;if(n===0)return se("impossible");var t=O(e.queue,0)[1];return fe(t.active,[])&&fe(t.inactive,[])?fe(t.nba,[]):!1}function fm(e){var n=e.monitor;if(n===void 0)return e;var t=n[1],r=n[0],i=xc(e,r,t,n[2]);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:[r,t,i[0]],output:i[1],time:e.time}}function dm(e){var n=fm(e),t=n.queue.slice();if(t.shift(),t.length===0)return{vmodule:n.vmodule,status:1,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:n.time};var r=O(t,0);return{vmodule:n.vmodule,status:n.status,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:r[0]}}var pm=0,Cl=0,Oa=0,Da=1,vm=0;function Tc(e){return e.map(function(n,t){return N.exports.createElement(N.exports.Fragment,{children:n,key:String(t)})})}function mm(e){switch(e){case 0:return"&&";case 1:return"||";case 2:return"&";case 3:return"|";case 4:return"^";case 5:return"+"}}function tn(e){switch(e.TAG|0){case 0:return zn(e._0);case 1:return e._0;case 2:return"!("+tn(e._0)+")";case 3:return"("+tn(e._0)+") "+mm(e._1)+" ("+tn(e._2)+")"}}function hm(e){return e?tn(e._0):"$time"}function pu(e){if(typeof e=="number")return"";switch(e.TAG|0){case 0:return"#"+String(e._0);case 1:return"#("+String(e._0)+", "+String(e._1)+")";case 2:return"#("+String(e._0)+", "+String(e._1)+", "+String(e._2)+")"}}function Ra(e){return e!==void 0?pu(e)+" ":""}function uo(e){if(typeof e=="number")return"0";switch(e.TAG|0){case 0:return"posedge "+e._0;case 1:return"negedge "+e._0;case 2:return e._0;case 3:return uo(e._0)+" or "+uo(e._1)}}function _m(e){return typeof e=="number"?"@(*)":e.TAG===0?"#"+String(e._0):"@("+uo(e._0)+")"}function Ma(e,n){return'"'+e+'"'+(n.length===0?"":`,
          `)+ac(", ",n.map(hm)).join("")}function Cc(e){if(typeof e=="number")return"$finish";switch(e.TAG|0){case 0:return _m(e._0);case 1:return e._0?e._1+" <= "+Ra(e._2)+tn(e._3):e._1+" = "+Ra(e._2)+tn(e._3);case 2:return"$display("+Ma(e._0,e._1)+")";case 3:return"$monitor("+Ma(e._0,e._1)+")";case 4:return"goto +"+String(e._0);case 5:return"goto +"+String(e._1)+" unless "+tn(e._0)}}function gm(e,n,t,r){var i=Cc(t),l=" "+(fe(n,r)?i+";":i+`;
`);return fe(e,r)?N.exports.createElement("b",void 0,l):l}function ym(e,n){var t=n.length-1|0;return n.map(function(r,i){return gm(e,t,r,i)})}function wm(e){return oc(" ",["assign",pu(e.delay),e.lhs,"=",tn(e.rhs)+";"])}function km(e){return e!==void 0?" = "+tn(e):""}function Em(e){return"logic "+e.target+km(e.init)+";"}function Sm(e){switch(e){case 0:return"wire";case 1:return"wand";case 2:return"wor"}}function xm(e){return oc(" ",[Sm(e.type_),pu(e.delay),e.name+";"])}function Tm(e){return typeof e=="number"?e!==0?"final":"initial":e._0?"always_comb":"always"}function Cm(e,n,t){return Tc([].concat([N.exports.createElement("span",{className:"comment"},"// Process "+String(t+1|0)),`
`+Tm(n.proc_type),` begin
`],ym(O(e,t).state===3?-1:O(e,t).pc,n.stmts),[`
end`]))}function Va(e){return e.TAG===0?"cont: "+String(e._0+1|0):"proc: "+String(e._0+1|0)}function Nm(e){switch(e){case 0:return"running";case 1:return"waiting";case 2:return"blocked";case 3:return"finished"}}function Am(e){return e.TAG===2?N.exports.createElement("li",{key:String(e._0)},"nba("+e._1+" <= "+zn(e._2)+")"):se("impossible")}function Nl(e,n){switch(n.TAG|0){case 0:var t=n._1;return"update("+O(e,t).lhs+"("+String(t)+")): "+zn(n._2);case 1:return"eval("+Va({TAG:1,_0:n._1})+", "+n._2+" = "+zn(n._3)+")";case 2:return"nba("+n._1+" <= "+zn(n._2)+")";case 3:return"eval("+Va(n._1)+")";case 4:return N.exports.createElement("ol",void 0,"NBA events:",Zn(n._1,Am))}}function Pm(e,n){return Tc(ac(`

`,[e.nets.map(xm).join(`
`),e.vars.map(Em).join(`
`),e.conts.map(wm).join(`
`)].concat(e.procs.map(function(t,r){return Cm(n,t,r)}))))}function zm(e){return e!==void 0?N.exports.createElement("code",void 0,Cc({TAG:3,_0:e[0],_1:e[1]})):"No monitor"}function Te(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t}}function Re(e){return{v:e,h:1,l:void 0,r:void 0}}function Ei(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function rn(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;if(r>(i+2|0)){var l=e.l,o=e.r;return Ei(l,o)?Te(l,e.v,Te(o,n,t)):Te(Te(l,e.v,o.l),o.v,Te(o.r,n,t))}if(i<=(r+2|0))return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t};var u=t.l,a=t.r;return Ei(a,u)?Te(Te(e,n,u),t.v,a):Te(Te(e,n,u.l),u.v,Te(u.r,t.v,a))}function Nc(e,n){var t=e.l;return t!==void 0?rn(Nc(t,n),e.v,e.r):(n.contents=e.v,e.r)}function Ac(e,n){return e!==void 0?rn(Ac(e.l,n),e.v,e.r):Re(n)}function Pc(e,n){return e!==void 0?rn(e.l,e.v,Pc(e.r,n)):Re(n)}function Ot(e,n,t){if(e===void 0)return Ac(t,n);if(t===void 0)return Pc(e,n);var r=e.h,i=t.h;return r>(i+2|0)?rn(e.l,e.v,Ot(e.r,n,t)):i>(r+2|0)?rn(Ot(e,n,t.l),t.v,t.r):Te(e,n,t)}function ao(e){var n=e.l,t=e.r,r=n!==void 0?ao(n):0,i=t!==void 0?ao(t):0;return(1+r|0)+i|0}function zc(e,n,t){for(;;){var r=n,i=e,l=i.v,o=i.l,u=i.r,a=o!==void 0?zc(o,r,t):r;t[a]=l;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function Lm(e){if(e===void 0)return[];var n=ao(e),t=new Array(n);return zc(e,0,t),t}function so(e,n,t){switch(t){case 0:return;case 1:return Re(e[n]);case 2:var r=e[n],i=e[n-1|0];return{v:i,h:2,l:Re(r),r:void 0};case 3:var l=e[n],o=e[n-1|0],u=e[n-2|0];return{v:o,h:2,l:Re(l),r:Re(u)};default:var a=t/2|0,s=so(e,n,a),p=e[n-a|0],m=so(e,(n-a|0)-1|0,(t-a|0)-1|0);return Te(s,p,m)}}function co(e,n,t){switch(t){case 0:return;case 1:return Re(e[n]);case 2:var r=e[n],i=e[n+1|0];return{v:i,h:2,l:Re(r),r:void 0};case 3:var l=e[n],o=e[n+1|0],u=e[n+2|0];return{v:o,h:2,l:Re(l),r:Re(u)};default:var a=t/2|0,s=co(e,n,a),p=e[n+a|0],m=co(e,(n+a|0)+1|0,(t-a|0)-1|0);return Te(s,p,m)}}function vu(e){var n=e.l;e.l=n.r,n.r=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,l=i!==void 0?i.h:0;e.h=(r>l?r:l)+1|0;var o=n.l,u=o!==void 0?o.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function mu(e){var n=e.r;e.r=n.l,n.l=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,l=i!==void 0?i.h:0;e.h=(r>l?r:l)+1|0;var o=n.r,u=o!==void 0?o.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function Im(e){var n=e.l,t=mu(n);return e.l=t,vu(e)}function Om(e){var n=e.r,t=vu(n);return e.r=t,mu(e)}function Ur(e){var n=e.l,t=n!==void 0?n.h:0,r=e.r,i=r!==void 0?r.h:0;return e.h=(t>i?t:i)+1|0,e}function Dm(e){var n=e.l,t=e.r,r=n!==void 0?n.h:0,i=t!==void 0?t.h:0;if(r>(2+i|0)){var l=n.l,o=n.r;return Ei(l,o)?Ur(vu(e)):Ur(Im(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return Ei(a,u)?Ur(mu(e)):Ur(Om(e))}return e.h=(r>i?r:i)+1|0,e}function Rm(e,n,t,r){for(;;){var i=t,l=n;if(i>=r)return i;var o=e[i];if(l<=o)return i;t=i+1|0,n=o}}function Mm(e){var n=e.length;if(n===0||n===1)return n;var t=e[0],r=e[1];if(t<r)for(var i=r,l=2;;){var o=l,u=i;if(o>=n)return o;var a=e[o];if(u>=a)return o;l=o+1|0,i=a}else return t>r?-Rm(e,r,2,n)|0:1}function fo(e,n){if(e===void 0)return Re(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;return n<t?e.l=fo(r,n):e.r=fo(i,n),Dm(e)}function Vm(e){var n=e.length;if(n!==0){var t=Mm(e),r;t>=0?r=co(e,0,t):(t=-t|0,r=so(e,t-1|0,t));for(var i=t;i<n;++i)r=fo(r,e[i]);return r}}function Si(e,n){if(e===void 0)return Re(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;if(n<t){var l=Si(r,n);return l===r?e:rn(l,t,i)}var o=Si(i,n);return o===i?e:rn(r,t,o)}function po(e,n){if(e===void 0)return e;var t=e.v,r=e.l,i=e.r;if(n===t){if(r===void 0)return i;if(i===void 0)return r;var l={contents:i.v},o=Nc(i,l);return rn(r,l.contents,o)}if(n<t){var u=po(r,n);return u===r?e:rn(u,t,i)}var a=po(i,n);return a===i?e:rn(r,t,a)}function Fm(e,n){for(var t=n.length,r=e,i=0;i<t;++i){var l=n[i];r=po(r,l)}return r}function xi(e,n){var t=e.v,r=e.l,i=e.r;if(n===t)return[r,i];if(n<t){if(r===void 0)return[void 0,e];var l=xi(r,n);return[l[0],Ot(l[1],t,i)]}if(i===void 0)return[e,void 0];var o=xi(i,n);return[Ot(r,t,o[0]),o[1]]}function be(e,n){if(e===void 0)return n;if(n===void 0)return e;var t=e.h,r=n.h;if(t>=r){if(r===1)return Si(e,n.v);var i=e.v,l=e.l,o=e.r,u=xi(n,i);return Ot(be(l,u[0]),i,be(o,u[1]))}if(t===1)return Si(n,e.v);var a=n.v,s=n.l,p=n.r,m=xi(e,a);return Ot(be(m[0],s),a,be(m[1],p))}var jm=Vm,vo=Lm,Lr=sc("Compiler.CompileError");function Fa(e,n){return{TAG:0,_0:e,_1:n}}function Br(e,n,t,r){return{TAG:1,_0:e,_1:n,_2:t,_3:r}}function ja(e,n){return{TAG:2,_0:e,_1:n}}function Ga(e,n){return{TAG:3,_0:e,_1:n}}function Gm(e,n){return{TAG:4,_0:e,_1:n}}function $m(e,n,t){return{TAG:5,_0:e,_1:n,_2:t}}function Um(e){return{TAG:6,_0:e}}function Al(e,n){return[e,n]}function Bm(e){return{TAG:0,_0:e}}function $a(e,n,t){return{TAG:1,_0:e,_1:n,_2:t}}function Ua(e,n,t){return{TAG:3,_0:e,_1:n,_2:t}}function Ba(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function Wm(e,n){return{TAG:4,_0:e,_1:n}}function Hm(e){return{TAG:0,_0:e}}function Qm(e){return{TAG:1,_0:e}}function Ct(e){for(;;){var n=e;switch(n.TAG|0){case 0:return;case 1:return jm([n._0]);case 2:e=n._0;continue;case 3:return be(Ct(n._0),Ct(n._2))}}}function Xm(e){if(e)return Ct(e._0)}function dt(e){for(;;){var n=e;if(typeof n=="number")return;switch(n.TAG|0){case 0:var t=n._1;if(t===void 0)return;e=t;continue;case 1:return Ct(n._3);case 2:case 3:break;case 4:return be(Ct(n._0),dt(n._1));case 5:return be(Ct(n._0),be(dt(n._1),dt(n._2)));case 6:return n._0.map(dt).reduce(be,void 0)}return n._1.map(Xm).reduce(be,void 0)}}function qm(e){var n=dt(e),t=hc(vo(Fm(n,vo(void 0))).map(function(r){return{TAG:2,_0:r}}));return t!==void 0?[{_0:1},{TAG:0,_0:{TAG:1,_0:t},_1:e}]:[0,e]}function ct(e){if(typeof e=="number")return e;switch(e.TAG|0){case 0:if(typeof e._0!="number")return e;var n=e._1;if(n===void 0)return{TAG:0,_0:{TAG:1,_0:0},_1:void 0};var t=ct(n),r=hc(vo(dt(t)).map(function(l){return{TAG:2,_0:l}})),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:t};case 4:return{TAG:4,_0:e._0,_1:ct(e._1)};case 5:return{TAG:5,_0:e._0,_1:ct(e._1),_2:ct(e._2)};case 6:return{TAG:6,_0:e._0.map(ct)};default:return e}}function Km(e,n){return typeof e=="number"||!e._0?[e,ct(n)]:qm(n)}function Ym(e){return{target:e[0],init:e[1]}}function Zm(e,n,t){var r;switch(e){case"triand":case"wand":r=1;break;case"tri":case"wire":r=0;break;case"trior":case"wor":r=2;break;default:r=se("impossible net type")}return{type_:r,name:t,delay:n}}function Lc(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:Lr,_1:"Expected variable, found: "+tn(e),Error:new Error}}function Jm(e,n){var t=n[1];if(t.length===2){var r=Lc(O(t,0)),i=O(t,1);return{lhs:r,delay:e,rhs:i}}throw{RE_EXN_ID:Lr,_1:"Expected two arguments to not gate",Error:new Error}}function bm(e){switch(e){case"and":return 2;case"or":return 3;case"xor":return 4;default:return se("impossible gate")}}function e0(e,n,t){var r=t[1];if(r.length===3){var i=Lc(O(r,0)),l=O(r,1),o=O(r,2),u={TAG:3,_0:l,_1:e,_2:o};return{lhs:i,delay:n,rhs:u}}throw{RE_EXN_ID:Lr,_1:"Expected three arguments to gate",Error:new Error}}function ft(e){if(typeof e=="number")return[0];switch(e.TAG|0){case 0:var n=e._1,t=e._0;return n!==void 0?[{TAG:0,_0:t}].concat(ft(n)):[{TAG:0,_0:t}];case 1:return[{TAG:1,_0:e._0,_1:e._1,_2:e._2,_3:e._3}];case 2:return[{TAG:2,_0:e._0,_1:e._1}];case 3:return[{TAG:3,_0:e._0,_1:e._1}];case 4:var r=ft(e._1);return[{TAG:5,_0:e._0,_1:r.length+1|0}].concat(r);case 5:var i=ft(e._1),l=ft(e._2);return[{TAG:5,_0:e._0,_1:i.length+2|0}].concat(i,[{TAG:4,_0:l.length+1|0}],l);case 6:return e._0.reduce(function(o,u){return o.concat(ft(u))},[])}}function n0(e){switch(e){case"always_comb":return{_0:1};case"always":case"always_ff":case"always_latch":return{_0:0};case"final":return 1;case"initial":return 0;default:throw{RE_EXN_ID:"Match_failure",_1:["Compiler.res",223,1],Error:new Error}}}function t0(e,n){switch(n.TAG|0){case 0:var t=n._0.map(Ym);return{vars:e.vars.concat(t),nets:e.nets,conts:e.conts,procs:e.procs};case 1:var r=n._1,i=n._0,l=n._2.map(function(S){return Zm(i,r,S)});return{vars:e.vars,nets:e.nets.concat(l),conts:e.conts,procs:e.procs};case 2:var o=n._2,u=n._1,a=n._0;if(a==="not"){var s=o.map(function(S){return Jm(u,S)});return{vars:e.vars,nets:e.nets,conts:e.conts.concat(s),procs:e.procs}}if(a==="and"||a==="or"){var p=bm(a),m=o.map(function(S){return e0(p,u,S)});return{vars:e.vars,nets:e.nets,conts:e.conts.concat(m),procs:e.procs}}throw{RE_EXN_ID:Lr,_1:"Unsupported gate: "+a,Error:new Error};case 3:var v=n._0,_=n._1,y=n._2,w={lhs:v,delay:_,rhs:y};return{vars:e.vars,nets:e.nets,conts:e.conts.concat([w]),procs:e.procs};case 4:var L=n0(n._0),f=Km(L,n._1),c=ft(f[1]),d=f[0],g={proc_type:d,stmts:c};return{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs.concat([g])}}}function r0(e){var n=[],t=[],r=[],i=[],l={vars:n,nets:t,conts:r,procs:i};return e.reduce(t0,l)}var i0=0;const Ic=ohm.grammar(String.raw`
  verilogGrammar {
    Module = "module" id ";" Top* "endmodule"

    ProcType = "initial" | "final" | "always_comb" | "always_latch" | "always_ff" | "always"

    Decl = id "=" Exp -- init
         | id -- no_init

    GateDecl = id "(" ListOf<Exp, ","> ")"

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
         | TimeCont -- time

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
    Exp = Exp "||" Exp1 -- lor
        | Exp1

    Exp1 = Exp1 "&&" Exp2 -- land
         | Exp2

    Exp2 = Exp2 "|" Exp3 -- bor
         | Exp3

    Exp3 = Exp3 "^" Exp4 -- bxor
         | Exp4

    Exp4 = Exp4 "&" Exp5 -- band
         | Exp5

    Exp5 = Exp5 "+" Exp6 -- add
         | Exp6

    Exp6 = ("!" | "~") Exp6 -- not
         | Exp7

    Exp7 = id -- id
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
`),Oc=Ic.createSemantics();Oc.addOperation("translate",{Module(e,n,t,r,i){return r.children.map(l=>l.translate())},Decl_no_init(e){return Al(e.translate(),Gr)},Decl_init(e,n,t){return Al(e.translate(),jr(t.translate()))},GateDecl(e,n,t,r){return Al(e.sourceString,t.asIteration().children.map(i=>i.translate()))},Top_decl(e,n,t){return Bm(n.asIteration().children.map(r=>r.translate()))},Top_net(e,n,t){return $a(e.translate(),Cl,n.asIteration().children.map(r=>r.translate()))},Top_net_delay(e,n,t,r){return $a(e.translate(),n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_cont(e,n,t,r,i){return Ua(n.translate(),Cl,r.translate())},Top_cont_delay(e,n,t,r,i,l){return Ua(t.translate(),n.translate(),i.translate())},Top_gate(e,n,t){return Ba(e.sourceString,Cl,n.asIteration().children.map(r=>r.translate()))},Top_gate_delay(e,n,t,r){return Ba(e.sourceString,n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_proc(e,n){return Wm(e.sourceString,n.translate())},WireType(e){return this.sourceString},TimeCont_delay(e,n){return Ov(n.translate())},TimeCont_event(e,n,t,r){return Dv(t.translate())},TimeCont_star(e,n,t,r){return vm},Stmt_blocking(e,n,t,r){return Br(Oa,e.translate(),Gr,t.translate())},Stmt_blocking_delay(e,n,t,r,i){return Br(Oa,e.translate(),jr(t.translate()),r.translate())},Stmt_nonblocking(e,n,t,r){return Br(Da,e.translate(),Gr,t.translate())},Stmt_nonblocking_delay(e,n,t,r,i){return Br(Da,e.translate(),jr(t.translate()),r.translate())},Stmt_if(e,n,t,r,i){return Gm(t.translate(),i.translate())},Stmt_if_else(e,n,t,r,i,l,o){return $m(t.translate(),i.translate(),o.translate())},Stmt_display(e,n,t,r,i,l,o){return ja(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_display_no_args(e,n,t,r,i){return ja(t.translate(),[])},Stmt_monitor(e,n,t,r,i,l,o){return Ga(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_monitor_no_args(e,n,t,r,i){return Ga(t.translate(),[])},Stmt_finish(e,n){return i0},Stmt_time_stmt(e,n){return Fa(e.translate(),jr(n.translate()))},Stmt_time(e){return Fa(e.translate(),Gr)},Stmt_block(e,n,t){return Um(n.children.map(r=>r.translate()))},Delay_one(e,n,t,r){return wv(t.translate())},Delay_two(e,n,t,r,i,l){return kv(t.translate(),i.translate())},Delay_three(e,n,t,r,i,l,o,u){return Ev(t.translate(),i.translate(),o.translate())},Event_Exp(e){return e.translate()},Event_Exp_or(e,n,t){return Iv(e.translate(),t.translate())},Event_Exp1_id(e){return Lv(e.translate())},Event_Exp1_posedge(e,n){return Pv(n.translate())},Event_Exp1_negedge(e,n){return zv(n.translate())},Exp(e){return e.translate()},Exp_lor(e,n,t){return vv(e.translate(),t.translate())},Exp1(e){return e.translate()},Exp1_land(e,n,t){return pv(e.translate(),t.translate())},Exp2(e){return e.translate()},Exp2_bor(e,n,t){return hv(e.translate(),t.translate())},Exp3(e){return e.translate()},Exp3_bxor(e,n,t){return _v(e.translate(),t.translate())},Exp4(e){return e.translate()},Exp4_band(e,n,t){return mv(e.translate(),t.translate())},Exp5(e){return e.translate()},Exp5_add(e,n,t){return gv(e.translate(),t.translate())},Exp6(e){return e.translate()},Exp6_not(e,n){return dv(n.translate())},Exp7_id(e){return fv(e.translate())},Exp7_bit(e){return Sl(e.translate())},Exp7_zero(e){return Sl(El(ga))},Exp7_one(e){return Sl(El(_a))},Exp7_paren(e,n,t){return n.translate()},ExpOrTime_exp(e){return yv(e.translate())},ExpOrTime_time(e){return pm},number(e){return parseInt(this.sourceString,10)},bit(e,n){var t;switch(n.sourceString.toLowerCase()){case"1":t=_a;break;case"0":t=ga;break;case"x":t=Gp;break;case"z":t=$p;break;default:throw"Impossible!"}return El(t)},string(e,n,t){return n.sourceString},id(e,n){return this.sourceString}});function l0(e){try{const n=Ic.match(e);return Hm(Oc(n).translate())}catch(n){if(n instanceof TypeError)return Qm(n.message);throw n}}var Pl=mc([["empty.sv",`module empty;

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
`],["misc/xif.sv",`module xif;

// This will always print "Second branch", see p. 299

initial
 if (1'bx)
  $display("First branch");
 else
  $display("Second branch");

endmodule
`],["misc/monitor.sv",`module monitor;

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
`],["init2.sv",`module init2;

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
`],["init3.sv",`module init3;

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
`],["nonblocking3.sv",`module nonblocking3;

logic a;

// a must be 0 at end of time slot

initial begin
 a = 1'b0;
 a <= a;
end

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

// Just to check if vars written to in block are removed from sense list...

logic a;

initial a = #5 1'b1;

//always @(a) a = a + 1'b1;
//
// the above gives 0 at time 5

//vs

always @(*) a = a + 1'b1;
//
// most simulators give 0 at time 5 as well here (i.e. writes not removed?),
// however, Synopsys loops forever (never printing anything at time 5)

initial $monitor("a = %b at time %d", a, $time);

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

// Test for what happens with combinational always blocks without dependencies

logic a;

always_comb a = 1'b0;
// Aldec Riviera Pro 2020.04
// Cadence Xcelium 20.09
// Mentor Questa 2021.3
// Synopsys VCS 2020.03
// Icarus Verilog 11.0 -- warning
//
// all of the above simulators output 0 at time 0 and terminate normally

//always @(*) a = 1'b0;
// Aldec Riviera Pro 2020.04
// Cadence Xcelium 20.09
// Mentor Questa 2021.3
// Synopsys VCS 2020.03
// Icarus Verilog 11.0 -- warning about never trigger
//
// all of the above simulators output x at time 0 and terminate normally

//always a = 1'b0;
// Aldec Riviera Pro 2020.04 -- infinite loop
// Cadence Xcelium 20.09 -- infinite loop
// Mentor Questa 2021.3 -- infinite loop
// Synopsys VCS 2020.03 -- infinite loop + warning about no event control/delay
// Icarus Verilog 11.0 -- abort + warning about no delay

initial $monitor("a = %b at time %d", a, $time);

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

logic b = 1'b0;

initial $display("a = %b at time %d", b, $time);

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
`],["cont/cont_cycle.sv",`module cont_cycle;

wire a;

// Suspicious cycle, results in "a" being x, which is
// a little funny since wires otherwise has z as
// initial value (when not driven). Requires a special
// case in the semantics to check if there are any
// drivers or not.

assign a = a;
  
initial $monitor("a = %b for time %d", a, $time);

endmodule
`],["cont/cont_assn_init_delay.sv",`module cont_assn_init_delay;

// Test for what to do before first update
// to delayed net

// Simulators seem to say the following for this one:
// 
// time = 0, w = x
// time = 5, w = 1
  
wire w;
  
assign #5 w = 1;
  
initial $monitor("time = %d, w = %b", $time, w);

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
`],["init1.sv",`module init1;

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
`]]);function Wa(e){return alert(e)}function o0(e){var n=Na(Uv),t=Aa(n),r=N.exports.useState(function(){return t}),i=r[1],l=r[0],o=function(E){return En(i,function(h){return za(h)?sm(h):h})},u=function(E){return En(i,function(h){return La(h)?cm(h):h})},a=function(E){return En(i,function(h){return Ia(h)?dm(h):h})},s=N.exports.useState(function(){return bn(Pl,"empty.sv")}),p=s[1],m=s[0],v=function(E){var h=l0(m);if(h.TAG!==0)return Wa("Could not parse Verilog code: "+h._0);var z;try{z=Na(r0(h._0))}catch(ee){var P=zp(ee);if(P.RE_EXN_ID===Lr)return Wa("Compile phase of parsing failed: "+P._1);throw P}var Q=Aa(z);return En(i,function(ee){return Q})},_=function(E){En(p,function(h){return E.target.value}),E.preventDefault()},y=function(E){var h=E.target.value;En(p,function(z){return bn(Pl,h)}),E.preventDefault()},w="Simulation time: "+String(l.time)+" ("+Hv(l.status)+")",L=Zn(sv(l.env),function(E){var h=E[0];return N.exports.createElement("li",{key:h},h+": "+zn(E[1]))}),f=Wt(l.cont_env,function(E,h){return N.exports.createElement("li",{key:String(E)},O(l.vmodule.conts,E).lhs+"("+String(E)+"): "+zn(h))}),c=Wt(l.proc_env,function(E,h){return N.exports.createElement("li",{key:String(E)},"state = "+Nm(h.state)+", pc = "+String(h.pc))}),d=Zn(l.queue,function(E){var h=E[1],z=E[0],P=Wt(h.active,function(Ge,q){var pe=Pa(l,z);return N.exports.createElement("li",{key:xl(q),className:pe?"active":"",onClick:function(x){return En(i,function(A){return Pa(A,z)?am(A,Ge):A})}},Nl(l.vmodule.conts,q))}),Q=Wt(h.inactive,function(Ge,q){return N.exports.createElement("li",{key:xl(q)},Nl(l.vmodule.conts,q))}),ee=Wt(h.nba,function(Ge,q){return N.exports.createElement("li",{key:xl(q)},Nl(l.vmodule.conts,q))}),ge=za(l),Ye=La(l);return N.exports.createElement("li",{key:"Time"+String(z)},N.exports.createElement("b",void 0,"Time: "+String(z)),N.exports.createElement("ul",void 0,N.exports.createElement("li",void 0,"Active:",N.exports.createElement("ul",void 0,P)),N.exports.createElement("li",{className:ge?"active":"",onClick:o},"Inactive:",N.exports.createElement("ul",void 0,Q)),N.exports.createElement("li",{className:Ye?"active":"",onClick:u},"NBA:",N.exports.createElement("ul",void 0,ee))))}),g=zm(l.monitor),S=Zn(cv(Pl),function(E){return N.exports.createElement("option",{key:E},E)}),T=Ia(l);return N.exports.createElement("table",{id:"main-table"},N.exports.createElement("tbody",void 0,N.exports.createElement("tr",void 0,N.exports.createElement("td",void 0,N.exports.createElement("div",void 0,N.exports.createElement("select",{defaultValue:"empty.sv",onChange:y},S)),N.exports.createElement("div",void 0,N.exports.createElement("textarea",{cols:60,rows:20,value:m,onChange:_})),N.exports.createElement("div",void 0,N.exports.createElement("button",{onClick:v},"Parse"))),N.exports.createElement("td",void 0,N.exports.createElement("div",{id:"code-render"},Pm(l.vmodule,l.proc_env))),N.exports.createElement("td",void 0,N.exports.createElement("p",{className:T?"active":"",id:"simulation-time",onClick:a},w),N.exports.createElement("p",void 0,"Environment:"),N.exports.createElement("ul",void 0,L),N.exports.createElement("p",void 0,"Drivers (continuous assignments):"),N.exports.createElement("ul",void 0,f),N.exports.createElement("p",void 0,"Processes:"),N.exports.createElement("ol",void 0,c),N.exports.createElement("p",{className:""},"Events:"),N.exports.createElement("ul",void 0,d),N.exports.createElement("p",void 0,"Monitor:"),N.exports.createElement("p",void 0,g)),N.exports.createElement("td",void 0,N.exports.createElement("p",{id:"output"},"Output:"),N.exports.createElement("pre",void 0,l.output)))))}var u0=o0,Dc={exports:{}},ze={},Rc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,A){var I=x.length;x.push(A);e:for(;0<I;){var M=I-1>>>1,j=x[M];if(0<i(j,A))x[M]=A,x[I]=j,I=M;else break e}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var A=x[0],I=x.pop();if(I!==A){x[0]=I;e:for(var M=0,j=x.length,yn=j>>>1;M<yn;){var $e=2*(M+1)-1,wn=x[$e],Ue=$e+1,un=x[Ue];if(0>i(wn,I))Ue<j&&0>i(un,wn)?(x[M]=un,x[Ue]=I,M=Ue):(x[M]=wn,x[$e]=I,M=$e);else if(Ue<j&&0>i(un,I))x[M]=un,x[Ue]=I,M=Ue;else break e}}return A}function i(x,A){var I=x.sortIndex-A.sortIndex;return I!==0?I:x.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],s=[],p=1,m=null,v=3,_=!1,y=!1,w=!1,L=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(x){for(var A=t(s);A!==null;){if(A.callback===null)r(s);else if(A.startTime<=x)r(s),A.sortIndex=A.expirationTime,n(a,A);else break;A=t(s)}}function g(x){if(w=!1,d(x),!y)if(t(a)!==null)y=!0,q(S);else{var A=t(s);A!==null&&pe(g,A.startTime-x)}}function S(x,A){y=!1,w&&(w=!1,f(h),h=-1),_=!0;var I=v;try{for(d(A),m=t(a);m!==null&&(!(m.expirationTime>A)||x&&!Q());){var M=m.callback;if(typeof M=="function"){m.callback=null,v=m.priorityLevel;var j=M(m.expirationTime<=A);A=e.unstable_now(),typeof j=="function"?m.callback=j:m===t(a)&&r(a),d(A)}else r(a);m=t(a)}if(m!==null)var yn=!0;else{var $e=t(s);$e!==null&&pe(g,$e.startTime-A),yn=!1}return yn}finally{m=null,v=I,_=!1}}var T=!1,E=null,h=-1,z=5,P=-1;function Q(){return!(e.unstable_now()-P<z)}function ee(){if(E!==null){var x=e.unstable_now();P=x;var A=!0;try{A=E(!0,x)}finally{A?ge():(T=!1,E=null)}}else T=!1}var ge;if(typeof c=="function")ge=function(){c(ee)};else if(typeof MessageChannel!="undefined"){var Ye=new MessageChannel,Ge=Ye.port2;Ye.port1.onmessage=ee,ge=function(){Ge.postMessage(null)}}else ge=function(){L(ee,0)};function q(x){E=x,T||(T=!0,ge())}function pe(x,A){h=L(function(){x(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){y||_||(y=!0,q(S))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(x){switch(v){case 1:case 2:case 3:var A=3;break;default:A=v}var I=v;v=A;try{return x()}finally{v=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,A){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var I=v;v=x;try{return A()}finally{v=I}},e.unstable_scheduleCallback=function(x,A,I){var M=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?M+I:M):I=M,x){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=I+j,x={id:p++,callback:A,priorityLevel:x,startTime:I,expirationTime:j,sortIndex:-1},I>M?(x.sortIndex=I,n(s,x),t(a)===null&&x===t(s)&&(w?(f(h),h=-1):w=!0,pe(g,I-M))):(x.sortIndex=j,n(a,x),y||_||(y=!0,q(S))),x},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(x){var A=v;return function(){var I=v;v=A;try{return x.apply(this,arguments)}finally{v=I}}}})(Mc);Rc.exports=Mc;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc=N.exports,Pe=Rc.exports;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fc=new Set,pr={};function ut(e,n){Dt(e,n),Dt(e+"Capture",n)}function Dt(e,n){for(pr[e]=n,e=0;e<n.length;e++)Fc.add(n[e])}var vn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),mo=Object.prototype.hasOwnProperty,a0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ha={},Qa={};function s0(e){return mo.call(Qa,e)?!0:mo.call(Ha,e)?!1:a0.test(e)?Qa[e]=!0:(Ha[e]=!0,!1)}function c0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function f0(e,n,t,r){if(n===null||typeof n=="undefined"||c0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _e(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];le[n]=new _e(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var hu=/[\-:]([a-z])/g;function _u(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(hu,_u);le[n]=new _e(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(hu,_u);le[n]=new _e(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(hu,_u);le[n]=new _e(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function gu(e,n,t,r){var i=le.hasOwnProperty(n)?le[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(f0(n,t,i,r)&&(t=null),r||i===null?s0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var gn=Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),pt=Symbol.for("react.portal"),vt=Symbol.for("react.fragment"),yu=Symbol.for("react.strict_mode"),ho=Symbol.for("react.profiler"),jc=Symbol.for("react.provider"),Gc=Symbol.for("react.context"),wu=Symbol.for("react.forward_ref"),_o=Symbol.for("react.suspense"),go=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),$c=Symbol.for("react.offscreen"),Xa=Symbol.iterator;function Ht(e){return e===null||typeof e!="object"?null:(e=Xa&&e[Xa]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,zl;function bt(e){if(zl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);zl=n&&n[1]||""}return`
`+zl+e}var Ll=!1;function Il(e,n){if(!e||Ll)return"";Ll=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Ll=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?bt(e):""}function d0(e){switch(e.tag){case 5:return bt(e.type);case 16:return bt("Lazy");case 13:return bt("Suspense");case 19:return bt("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function yo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vt:return"Fragment";case pt:return"Portal";case ho:return"Profiler";case yu:return"StrictMode";case _o:return"Suspense";case go:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gc:return(e.displayName||"Context")+".Consumer";case jc:return(e._context.displayName||"Context")+".Provider";case wu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ku:return n=e.displayName||null,n!==null?n:yo(e.type)||"Memo";case xn:n=e._payload,e=e._init;try{return yo(e(n))}catch{}}return null}function p0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yo(n);case 8:return n===yu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function v0(e){var n=Uc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Hr(e){e._valueTracker||(e._valueTracker=v0(e))}function Bc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Uc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ti(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function wo(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function qa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=jn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Wc(e,n){n=n.checked,n!=null&&gu(e,"checked",n,!1)}function ko(e,n){Wc(e,n);var t=jn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Eo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Eo(e,n.type,jn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ka(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Eo(e,n,t){(n!=="number"||Ti(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var er=Array.isArray;function Nt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+jn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function So(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ya(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(er(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:jn(t)}}function Hc(e,n){var t=jn(n.value),r=jn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Za(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,Xc=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function vr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m0=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){m0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ir[n]=ir[e]})});function qc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ir.hasOwnProperty(e)&&ir[e]?(""+n).trim():n+"px"}function Kc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=qc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var h0=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function To(e,n){if(n){if(h0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Co(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var No=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ao=null,At=null,Pt=null;function Ja(e){if(e=Dr(e)){if(typeof Ao!="function")throw Error(k(280));var n=e.stateNode;n&&(n=tl(n),Ao(e.stateNode,e.type,n))}}function Yc(e){At?Pt?Pt.push(e):Pt=[e]:At=e}function Zc(){if(At){var e=At,n=Pt;if(Pt=At=null,Ja(e),n)for(e=0;e<n.length;e++)Ja(n[e])}}function Jc(e,n){return e(n)}function bc(){}var Ol=!1;function ef(e,n,t){if(Ol)return e(n,t);Ol=!0;try{return Jc(e,n,t)}finally{Ol=!1,(At!==null||Pt!==null)&&(bc(),Zc())}}function mr(e,n){var t=e.stateNode;if(t===null)return null;var r=tl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Po=!1;if(vn)try{var Qt={};Object.defineProperty(Qt,"passive",{get:function(){Po=!0}}),window.addEventListener("test",Qt,Qt),window.removeEventListener("test",Qt,Qt)}catch{Po=!1}function _0(e,n,t,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(p){this.onError(p)}}var lr=!1,Ci=null,Ni=!1,zo=null,g0={onError:function(e){lr=!0,Ci=e}};function y0(e,n,t,r,i,l,o,u,a){lr=!1,Ci=null,_0.apply(g0,arguments)}function w0(e,n,t,r,i,l,o,u,a){if(y0.apply(this,arguments),lr){if(lr){var s=Ci;lr=!1,Ci=null}else throw Error(k(198));Ni||(Ni=!0,zo=s)}}function at(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function nf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ba(e){if(at(e)!==e)throw Error(k(188))}function k0(e){var n=e.alternate;if(!n){if(n=at(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return ba(i),e;if(l===r)return ba(i),n;l=l.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function tf(e){return e=k0(e),e!==null?rf(e):null}function rf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=rf(e);if(n!==null)return n;e=e.sibling}return null}var lf=Pe.unstable_scheduleCallback,es=Pe.unstable_cancelCallback,E0=Pe.unstable_shouldYield,S0=Pe.unstable_requestPaint,K=Pe.unstable_now,x0=Pe.unstable_getCurrentPriorityLevel,Su=Pe.unstable_ImmediatePriority,of=Pe.unstable_UserBlockingPriority,Ai=Pe.unstable_NormalPriority,T0=Pe.unstable_LowPriority,uf=Pe.unstable_IdlePriority,Ji=null,ln=null;function C0(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:P0,N0=Math.log,A0=Math.LN2;function P0(e){return e>>>=0,e===0?32:31-(N0(e)/A0|0)|0}var Xr=64,qr=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=nr(u):(l&=o,l!==0&&(r=nr(l)))}else o=t&~i,o!==0?r=nr(o):l!==0&&(r=nr(l));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Xe(n),i=1<<t,r|=e[t],n&=~i;return r}function z0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Xe(l),u=1<<o,a=i[o];a===-1?((u&t)===0||(u&r)!==0)&&(i[o]=z0(u,n)):a<=n&&(e.expiredLanes|=u),l&=~u}}function Lo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function af(){var e=Xr;return Xr<<=1,(Xr&4194240)===0&&(Xr=64),e}function Dl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ir(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Xe(n),e[n]=t}function I0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Xe(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function xu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Xe(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var V=0;function sf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var cf,Tu,ff,df,pf,Io=!1,Kr=[],Ln=null,In=null,On=null,hr=new Map,_r=new Map,Cn=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ns(e,n){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(n.pointerId)}}function Xt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Dr(n),n!==null&&Tu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function D0(e,n,t,r,i){switch(n){case"focusin":return Ln=Xt(Ln,e,n,t,r,i),!0;case"dragenter":return In=Xt(In,e,n,t,r,i),!0;case"mouseover":return On=Xt(On,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return hr.set(l,Xt(hr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,_r.set(l,Xt(_r.get(l)||null,e,n,t,r,i)),!0}return!1}function vf(e){var n=qn(e.target);if(n!==null){var t=at(n);if(t!==null){if(n=t.tag,n===13){if(n=nf(t),n!==null){e.blockedOn=n,pf(e.priority,function(){ff(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function si(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Oo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);No=r,t.target.dispatchEvent(r),No=null}else return n=Dr(t),n!==null&&Tu(n),e.blockedOn=t,!1;n.shift()}return!0}function ts(e,n,t){si(e)&&t.delete(n)}function R0(){Io=!1,Ln!==null&&si(Ln)&&(Ln=null),In!==null&&si(In)&&(In=null),On!==null&&si(On)&&(On=null),hr.forEach(ts),_r.forEach(ts)}function qt(e,n){e.blockedOn===n&&(e.blockedOn=null,Io||(Io=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,R0)))}function gr(e){function n(i){return qt(i,e)}if(0<Kr.length){qt(Kr[0],e);for(var t=1;t<Kr.length;t++){var r=Kr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Ln!==null&&qt(Ln,e),In!==null&&qt(In,e),On!==null&&qt(On,e),hr.forEach(n),_r.forEach(n),t=0;t<Cn.length;t++)r=Cn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Cn.length&&(t=Cn[0],t.blockedOn===null);)vf(t),t.blockedOn===null&&Cn.shift()}var zt=gn.ReactCurrentBatchConfig,zi=!0;function M0(e,n,t,r){var i=V,l=zt.transition;zt.transition=null;try{V=1,Cu(e,n,t,r)}finally{V=i,zt.transition=l}}function V0(e,n,t,r){var i=V,l=zt.transition;zt.transition=null;try{V=4,Cu(e,n,t,r)}finally{V=i,zt.transition=l}}function Cu(e,n,t,r){if(zi){var i=Oo(e,n,t,r);if(i===null)Wl(e,n,r,Li,t),ns(e,r);else if(D0(i,e,n,t,r))r.stopPropagation();else if(ns(e,r),n&4&&-1<O0.indexOf(e)){for(;i!==null;){var l=Dr(i);if(l!==null&&cf(l),l=Oo(e,n,t,r),l===null&&Wl(e,n,r,Li,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Wl(e,n,r,null,t)}}var Li=null;function Oo(e,n,t,r){if(Li=null,e=Eu(r),e=qn(e),e!==null)if(n=at(e),n===null)e=null;else if(t=n.tag,t===13){if(e=nf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Li=e,null}function mf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x0()){case Su:return 1;case of:return 4;case Ai:case T0:return 16;case uf:return 536870912;default:return 16}default:return 16}}var An=null,Nu=null,ci=null;function hf(){if(ci)return ci;var e,n=Nu,t=n.length,r,i="value"in An?An.value:An.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return ci=i.slice(e,1<r?1-r:void 0)}function fi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function rs(){return!1}function Le(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Yr:rs,this.isPropagationStopped=rs,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),n}var Ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=Le(Ut),Or=H({},Ut,{view:0,detail:0}),F0=Le(Or),Rl,Ml,Kt,bi=H({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kt&&(Kt&&e.type==="mousemove"?(Rl=e.screenX-Kt.screenX,Ml=e.screenY-Kt.screenY):Ml=Rl=0,Kt=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),is=Le(bi),j0=H({},bi,{dataTransfer:0}),G0=Le(j0),$0=H({},Or,{relatedTarget:0}),Vl=Le($0),U0=H({},Ut,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=Le(U0),W0=H({},Ut,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H0=Le(W0),Q0=H({},Ut,{data:0}),ls=Le(Q0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=K0[e])?!!n[e]:!1}function Pu(){return Y0}var Z0=H({},Or,{key:function(e){if(e.key){var n=X0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J0=Le(Z0),b0=H({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),os=Le(b0),eh=H({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),nh=Le(eh),th=H({},Ut,{propertyName:0,elapsedTime:0,pseudoElement:0}),rh=Le(th),ih=H({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lh=Le(ih),oh=[9,13,27,32],zu=vn&&"CompositionEvent"in window,or=null;vn&&"documentMode"in document&&(or=document.documentMode);var uh=vn&&"TextEvent"in window&&!or,_f=vn&&(!zu||or&&8<or&&11>=or),us=String.fromCharCode(32),as=!1;function gf(e,n){switch(e){case"keyup":return oh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mt=!1;function ah(e,n){switch(e){case"compositionend":return yf(n);case"keypress":return n.which!==32?null:(as=!0,us);case"textInput":return e=n.data,e===us&&as?null:e;default:return null}}function sh(e,n){if(mt)return e==="compositionend"||!zu&&gf(e,n)?(e=hf(),ci=Nu=An=null,mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _f&&n.locale!=="ko"?null:n.data;default:return null}}var ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ss(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ch[e.type]:n==="textarea"}function wf(e,n,t,r){Yc(r),n=Ii(n,"onChange"),0<n.length&&(t=new Au("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ur=null,yr=null;function fh(e){Lf(e,0)}function el(e){var n=gt(e);if(Bc(n))return e}function dh(e,n){if(e==="change")return n}var kf=!1;if(vn){var Fl;if(vn){var jl="oninput"in document;if(!jl){var cs=document.createElement("div");cs.setAttribute("oninput","return;"),jl=typeof cs.oninput=="function"}Fl=jl}else Fl=!1;kf=Fl&&(!document.documentMode||9<document.documentMode)}function fs(){ur&&(ur.detachEvent("onpropertychange",Ef),yr=ur=null)}function Ef(e){if(e.propertyName==="value"&&el(yr)){var n=[];wf(n,yr,e,Eu(e)),ef(fh,n)}}function ph(e,n,t){e==="focusin"?(fs(),ur=n,yr=t,ur.attachEvent("onpropertychange",Ef)):e==="focusout"&&fs()}function vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(yr)}function mh(e,n){if(e==="click")return el(n)}function hh(e,n){if(e==="input"||e==="change")return el(n)}function _h(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ke=typeof Object.is=="function"?Object.is:_h;function wr(e,n){if(Ke(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!mo.call(n,i)||!Ke(e[i],n[i]))return!1}return!0}function ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ps(e,n){var t=ds(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ds(t)}}function Sf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xf(){for(var e=window,n=Ti();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ti(e.document)}return n}function Lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function gh(e){var n=xf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Sf(t.ownerDocument.documentElement,t)){if(r!==null&&Lu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ps(t,l);var o=ps(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yh=vn&&"documentMode"in document&&11>=document.documentMode,ht=null,Do=null,ar=null,Ro=!1;function vs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ro||ht==null||ht!==Ti(r)||(r=ht,"selectionStart"in r&&Lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ar&&wr(ar,r)||(ar=r,r=Ii(Do,"onSelect"),0<r.length&&(n=new Au("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ht)))}function Zr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var _t={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},Gl={},Tf={};vn&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete _t.animationend.animation,delete _t.animationiteration.animation,delete _t.animationstart.animation),"TransitionEvent"in window||delete _t.transitionend.transition);function nl(e){if(Gl[e])return Gl[e];if(!_t[e])return e;var n=_t[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Tf)return Gl[e]=n[t];return e}var Cf=nl("animationend"),Nf=nl("animationiteration"),Af=nl("animationstart"),Pf=nl("transitionend"),zf=new Map,ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){zf.set(e,n),ut(n,[e])}for(var $l=0;$l<ms.length;$l++){var Ul=ms[$l],wh=Ul.toLowerCase(),kh=Ul[0].toUpperCase()+Ul.slice(1);$n(wh,"on"+kh)}$n(Cf,"onAnimationEnd");$n(Nf,"onAnimationIteration");$n(Af,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Pf,"onTransitionEnd");Dt("onMouseEnter",["mouseout","mouseover"]);Dt("onMouseLeave",["mouseout","mouseover"]);Dt("onPointerEnter",["pointerout","pointerover"]);Dt("onPointerLeave",["pointerout","pointerover"]);ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eh=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function hs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,w0(r,n,void 0,e),e.currentTarget=null}function Lf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;hs(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;hs(i,u,s),l=a}}}if(Ni)throw e=zo,Ni=!1,zo=null,e}function G(e,n){var t=n[Go];t===void 0&&(t=n[Go]=new Set);var r=e+"__bubble";t.has(r)||(If(n,e,2,!1),t.add(r))}function Bl(e,n,t){var r=0;n&&(r|=4),If(t,e,r,n)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function kr(e){if(!e[Jr]){e[Jr]=!0,Fc.forEach(function(t){t!=="selectionchange"&&(Eh.has(t)||Bl(t,!1,e),Bl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jr]||(n[Jr]=!0,Bl("selectionchange",!1,n))}}function If(e,n,t,r){switch(mf(n)){case 1:var i=M0;break;case 4:i=V0;break;default:i=Cu}t=i.bind(null,n,t,e),i=void 0,!Po||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Wl(e,n,t,r,i){var l=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=qn(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}ef(function(){var s=l,p=Eu(t),m=[];e:{var v=zf.get(e);if(v!==void 0){var _=Au,y=e;switch(e){case"keypress":if(fi(t)===0)break e;case"keydown":case"keyup":_=J0;break;case"focusin":y="focus",_=Vl;break;case"focusout":y="blur",_=Vl;break;case"beforeblur":case"afterblur":_=Vl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=nh;break;case Cf:case Nf:case Af:_=B0;break;case Pf:_=rh;break;case"scroll":_=F0;break;case"wheel":_=lh;break;case"copy":case"cut":case"paste":_=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=os}var w=(n&4)!==0,L=!w&&e==="scroll",f=w?v!==null?v+"Capture":null:v;w=[];for(var c=s,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=mr(c,f),g!=null&&w.push(Er(c,g,d)))),L)break;c=c.return}0<w.length&&(v=new _(v,y,null,t,p),m.push({event:v,listeners:w}))}}if((n&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",v&&t!==No&&(y=t.relatedTarget||t.fromElement)&&(qn(y)||y[mn]))break e;if((_||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,_?(y=t.relatedTarget||t.toElement,_=s,y=y?qn(y):null,y!==null&&(L=at(y),y!==L||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=s),_!==y)){if(w=is,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=os,g="onPointerLeave",f="onPointerEnter",c="pointer"),L=_==null?v:gt(_),d=y==null?v:gt(y),v=new w(g,c+"leave",_,t,p),v.target=L,v.relatedTarget=d,g=null,qn(p)===s&&(w=new w(f,c+"enter",y,t,p),w.target=d,w.relatedTarget=L,g=w),L=g,_&&y)n:{for(w=_,f=y,c=0,d=w;d;d=st(d))c++;for(d=0,g=f;g;g=st(g))d++;for(;0<c-d;)w=st(w),c--;for(;0<d-c;)f=st(f),d--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break n;w=st(w),f=st(f)}w=null}else w=null;_!==null&&_s(m,v,_,w,!1),y!==null&&L!==null&&_s(m,L,y,w,!0)}}e:{if(v=s?gt(s):window,_=v.nodeName&&v.nodeName.toLowerCase(),_==="select"||_==="input"&&v.type==="file")var S=dh;else if(ss(v))if(kf)S=hh;else{S=vh;var T=ph}else(_=v.nodeName)&&_.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(S=mh);if(S&&(S=S(e,s))){wf(m,S,t,p);break e}T&&T(e,v,s),e==="focusout"&&(T=v._wrapperState)&&T.controlled&&v.type==="number"&&Eo(v,"number",v.value)}switch(T=s?gt(s):window,e){case"focusin":(ss(T)||T.contentEditable==="true")&&(ht=T,Do=s,ar=null);break;case"focusout":ar=Do=ht=null;break;case"mousedown":Ro=!0;break;case"contextmenu":case"mouseup":case"dragend":Ro=!1,vs(m,t,p);break;case"selectionchange":if(yh)break;case"keydown":case"keyup":vs(m,t,p)}var E;if(zu)e:{switch(e){case"compositionstart":var h="onCompositionStart";break e;case"compositionend":h="onCompositionEnd";break e;case"compositionupdate":h="onCompositionUpdate";break e}h=void 0}else mt?gf(e,t)&&(h="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(h="onCompositionStart");h&&(_f&&t.locale!=="ko"&&(mt||h!=="onCompositionStart"?h==="onCompositionEnd"&&mt&&(E=hf()):(An=p,Nu="value"in An?An.value:An.textContent,mt=!0)),T=Ii(s,h),0<T.length&&(h=new ls(h,e,null,t,p),m.push({event:h,listeners:T}),E?h.data=E:(E=yf(t),E!==null&&(h.data=E)))),(E=uh?ah(e,t):sh(e,t))&&(s=Ii(s,"onBeforeInput"),0<s.length&&(p=new ls("onBeforeInput","beforeinput",null,t,p),m.push({event:p,listeners:s}),p.data=E))}Lf(m,n)})}function Er(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ii(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=mr(e,t),l!=null&&r.unshift(Er(e,l,i)),l=mr(e,n),l!=null&&r.push(Er(e,l,i))),e=e.return}return r}function st(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _s(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=mr(t,l),a!=null&&o.unshift(Er(t,a,u))):i||(a=mr(t,l),a!=null&&o.push(Er(t,a,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Sh=/\r\n?/g,xh=/\u0000|\uFFFD/g;function gs(e){return(typeof e=="string"?e:""+e).replace(Sh,`
`).replace(xh,"")}function br(e,n,t){if(n=gs(n),gs(e)!==n&&t)throw Error(k(425))}function Oi(){}var Mo=null,Vo=null;function Fo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,Th=typeof clearTimeout=="function"?clearTimeout:void 0,ys=typeof Promise=="function"?Promise:void 0,Ch=typeof queueMicrotask=="function"?queueMicrotask:typeof ys!="undefined"?function(e){return ys.resolve(null).then(e).catch(Nh)}:jo;function Nh(e){setTimeout(function(){throw e})}function Hl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),gr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);gr(n)}function Dn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ws(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Bt=Math.random().toString(36).slice(2),en="__reactFiber$"+Bt,Sr="__reactProps$"+Bt,mn="__reactContainer$"+Bt,Go="__reactEvents$"+Bt,Ah="__reactListeners$"+Bt,Ph="__reactHandles$"+Bt;function qn(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[mn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ws(e);e!==null;){if(t=e[en])return t;e=ws(e)}return n}e=t,t=e.parentNode}return null}function Dr(e){return e=e[en]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function tl(e){return e[Sr]||null}var $o=[],yt=-1;function Un(e){return{current:e}}function $(e){0>yt||(e.current=$o[yt],$o[yt]=null,yt--)}function F(e,n){yt++,$o[yt]=e.current,e.current=n}var Gn={},de=Un(Gn),Ee=Un(!1),tt=Gn;function Rt(e,n){var t=e.type.contextTypes;if(!t)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Se(e){return e=e.childContextTypes,e!=null}function Di(){$(Ee),$(de)}function ks(e,n,t){if(de.current!==Gn)throw Error(k(168));F(de,n),F(Ee,t)}function Of(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,p0(e)||"Unknown",i));return H({},t,r)}function Ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,tt=de.current,F(de,e),F(Ee,Ee.current),!0}function Es(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Of(e,n,tt),r.__reactInternalMemoizedMergedChildContext=e,$(Ee),$(de),F(de,e)):$(Ee),F(Ee,t)}var sn=null,rl=!1,Ql=!1;function Df(e){sn===null?sn=[e]:sn.push(e)}function zh(e){rl=!0,Df(e)}function Bn(){if(!Ql&&sn!==null){Ql=!0;var e=0,n=V;try{var t=sn;for(V=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}sn=null,rl=!1}catch(i){throw sn!==null&&(sn=sn.slice(e+1)),lf(Su,Bn),i}finally{V=n,Ql=!1}}return null}var wt=[],kt=0,Mi=null,Vi=0,Oe=[],De=0,rt=null,cn=1,fn="";function Qn(e,n){wt[kt++]=Vi,wt[kt++]=Mi,Mi=e,Vi=n}function Rf(e,n,t){Oe[De++]=cn,Oe[De++]=fn,Oe[De++]=rt,rt=e;var r=cn;e=fn;var i=32-Xe(r)-1;r&=~(1<<i),t+=1;var l=32-Xe(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-Xe(n)+i|t<<i|r,fn=l+e}else cn=1<<l|t<<i|r,fn=e}function Iu(e){e.return!==null&&(Qn(e,1),Rf(e,1,0))}function Ou(e){for(;e===Mi;)Mi=wt[--kt],wt[kt]=null,Vi=wt[--kt],wt[kt]=null;for(;e===rt;)rt=Oe[--De],Oe[De]=null,fn=Oe[--De],Oe[De]=null,cn=Oe[--De],Oe[De]=null}var Ae=null,Ne=null,U=!1,Qe=null;function Mf(e,n){var t=Me(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ss(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ae=e,Ne=Dn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ae=e,Ne=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=rt!==null?{id:cn,overflow:fn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Me(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ae=e,Ne=null,!0):!1;default:return!1}}function Uo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bo(e){if(U){var n=Ne;if(n){var t=n;if(!Ss(e,n)){if(Uo(e))throw Error(k(418));n=Dn(t.nextSibling);var r=Ae;n&&Ss(e,n)?Mf(r,t):(e.flags=e.flags&-4097|2,U=!1,Ae=e)}}else{if(Uo(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,Ae=e}}}function xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function ei(e){if(e!==Ae)return!1;if(!U)return xs(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Fo(e.type,e.memoizedProps)),n&&(n=Ne)){if(Uo(e))throw Vf(),Error(k(418));for(;n;)Mf(e,n),n=Dn(n.nextSibling)}if(xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ne=Dn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ne=null}}else Ne=Ae?Dn(e.stateNode.nextSibling):null;return!0}function Vf(){for(var e=Ne;e;)e=Dn(e.nextSibling)}function Mt(){Ne=Ae=null,U=!1}function Du(e){Qe===null?Qe=[e]:Qe.push(e)}var Lh=gn.ReactCurrentBatchConfig;function We(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Fi=Un(null),ji=null,Et=null,Ru=null;function Mu(){Ru=Et=ji=null}function Vu(e){var n=Fi.current;$(Fi),e._currentValue=n}function Wo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Lt(e,n){ji=e,Ru=Et=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ke=!0),e.firstContext=null)}function Fe(e){var n=e._currentValue;if(Ru!==e)if(e={context:e,memoizedValue:n,next:null},Et===null){if(ji===null)throw Error(k(308));Et=e,ji.dependencies={lanes:0,firstContext:e}}else Et=Et.next=e;return n}var Kn=null;function Fu(e){Kn===null?Kn=[e]:Kn.push(e)}function Ff(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Fu(n)):(t.next=i.next,i.next=t),n.interleaved=t,hn(e,r)}function hn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Tn=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Rn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(R&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,hn(e,t)}return i=r.interleaved,i===null?(n.next=n,Fu(r)):(n.next=i.next,i.next=n),r.interleaved=n,hn(e,t)}function di(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,xu(e,t)}}function Ts(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Gi(e,n,t,r){var i=e.updateQueue;Tn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==o&&(u===null?p.firstBaseUpdate=s:u.next=s,p.lastBaseUpdate=a))}if(l!==null){var m=i.baseState;o=0,p=s=a=null,u=l;do{var v=u.lane,_=u.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:_,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,w=u;switch(v=n,_=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(_,m,v);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,v=typeof y=="function"?y.call(_,m,v):y,v==null)break e;m=H({},m,v);break e;case 2:Tn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[u]:v.push(u))}else _={eventTime:_,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(s=p=_,a=m):p=p.next=_,o|=v;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;v=u,u=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(p===null&&(a=m),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);lt|=o,e.lanes=o,e.memoizedState=m}}function Cs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Gf=new Vc.Component().refs;function Ho(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var il={isMounted:function(e){return(e=e._reactInternals)?at(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=me(),i=Vn(e),l=pn(r,i);l.payload=n,t!=null&&(l.callback=t),n=Rn(e,l,i),n!==null&&(qe(n,e,i,r),di(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=me(),i=Vn(e),l=pn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Rn(e,l,i),n!==null&&(qe(n,e,i,r),di(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=me(),r=Vn(e),i=pn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Rn(e,i,r),n!==null&&(qe(n,e,r,t),di(n,e,r))}};function Ns(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!wr(t,r)||!wr(i,l):!0}function $f(e,n,t){var r=!1,i=Gn,l=n.contextType;return typeof l=="object"&&l!==null?l=Fe(l):(i=Se(n)?tt:de.current,r=n.contextTypes,l=(r=r!=null)?Rt(e,i):Gn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=il,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function As(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&il.enqueueReplaceState(n,n.state,null)}function Qo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Gf,ju(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Fe(l):(l=Se(n)?tt:de.current,i.context=Rt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Ho(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&il.enqueueReplaceState(i,i.state,null),Gi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;u===Gf&&(u=i.refs={}),o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function ni(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ps(e){var n=e._init;return n(e._payload)}function Uf(e){function n(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Fn(f,c),f.index=0,f.sibling=null,f}function l(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,d,g){return c===null||c.tag!==6?(c=bl(d,f.mode,g),c.return=f,c):(c=i(c,d),c.return=f,c)}function a(f,c,d,g){var S=d.type;return S===vt?p(f,c,d.props.children,g,d.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xn&&Ps(S)===c.type)?(g=i(c,d.props),g.ref=Yt(f,c,d),g.return=f,g):(g=gi(d.type,d.key,d.props,null,f.mode,g),g.ref=Yt(f,c,d),g.return=f,g)}function s(f,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=eo(d,f.mode,g),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function p(f,c,d,g,S){return c===null||c.tag!==7?(c=nt(d,f.mode,g,S),c.return=f,c):(c=i(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=bl(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Wr:return d=gi(c.type,c.key,c.props,null,f.mode,d),d.ref=Yt(f,null,c),d.return=f,d;case pt:return c=eo(c,f.mode,d),c.return=f,c;case xn:var g=c._init;return m(f,g(c._payload),d)}if(er(c)||Ht(c))return c=nt(c,f.mode,d,null),c.return=f,c;ni(f,c)}return null}function v(f,c,d,g){var S=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:u(f,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Wr:return d.key===S?a(f,c,d,g):null;case pt:return d.key===S?s(f,c,d,g):null;case xn:return S=d._init,v(f,c,S(d._payload),g)}if(er(d)||Ht(d))return S!==null?null:p(f,c,d,g,null);ni(f,d)}return null}function _(f,c,d,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,u(c,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wr:return f=f.get(g.key===null?d:g.key)||null,a(c,f,g,S);case pt:return f=f.get(g.key===null?d:g.key)||null,s(c,f,g,S);case xn:var T=g._init;return _(f,c,d,T(g._payload),S)}if(er(g)||Ht(g))return f=f.get(d)||null,p(c,f,g,S,null);ni(c,g)}return null}function y(f,c,d,g){for(var S=null,T=null,E=c,h=c=0,z=null;E!==null&&h<d.length;h++){E.index>h?(z=E,E=null):z=E.sibling;var P=v(f,E,d[h],g);if(P===null){E===null&&(E=z);break}e&&E&&P.alternate===null&&n(f,E),c=l(P,c,h),T===null?S=P:T.sibling=P,T=P,E=z}if(h===d.length)return t(f,E),U&&Qn(f,h),S;if(E===null){for(;h<d.length;h++)E=m(f,d[h],g),E!==null&&(c=l(E,c,h),T===null?S=E:T.sibling=E,T=E);return U&&Qn(f,h),S}for(E=r(f,E);h<d.length;h++)z=_(E,f,h,d[h],g),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?h:z.key),c=l(z,c,h),T===null?S=z:T.sibling=z,T=z);return e&&E.forEach(function(Q){return n(f,Q)}),U&&Qn(f,h),S}function w(f,c,d,g){var S=Ht(d);if(typeof S!="function")throw Error(k(150));if(d=S.call(d),d==null)throw Error(k(151));for(var T=S=null,E=c,h=c=0,z=null,P=d.next();E!==null&&!P.done;h++,P=d.next()){E.index>h?(z=E,E=null):z=E.sibling;var Q=v(f,E,P.value,g);if(Q===null){E===null&&(E=z);break}e&&E&&Q.alternate===null&&n(f,E),c=l(Q,c,h),T===null?S=Q:T.sibling=Q,T=Q,E=z}if(P.done)return t(f,E),U&&Qn(f,h),S;if(E===null){for(;!P.done;h++,P=d.next())P=m(f,P.value,g),P!==null&&(c=l(P,c,h),T===null?S=P:T.sibling=P,T=P);return U&&Qn(f,h),S}for(E=r(f,E);!P.done;h++,P=d.next())P=_(E,f,h,P.value,g),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?h:P.key),c=l(P,c,h),T===null?S=P:T.sibling=P,T=P);return e&&E.forEach(function(ee){return n(f,ee)}),U&&Qn(f,h),S}function L(f,c,d,g){if(typeof d=="object"&&d!==null&&d.type===vt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Wr:e:{for(var S=d.key,T=c;T!==null;){if(T.key===S){if(S=d.type,S===vt){if(T.tag===7){t(f,T.sibling),c=i(T,d.props.children),c.return=f,f=c;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xn&&Ps(S)===T.type){t(f,T.sibling),c=i(T,d.props),c.ref=Yt(f,T,d),c.return=f,f=c;break e}t(f,T);break}else n(f,T);T=T.sibling}d.type===vt?(c=nt(d.props.children,f.mode,g,d.key),c.return=f,f=c):(g=gi(d.type,d.key,d.props,null,f.mode,g),g.ref=Yt(f,c,d),g.return=f,f=g)}return o(f);case pt:e:{for(T=d.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=eo(d,f.mode,g),c.return=f,f=c}return o(f);case xn:return T=d._init,L(f,c,T(d._payload),g)}if(er(d))return y(f,c,d,g);if(Ht(d))return w(f,c,d,g);ni(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(f,c.sibling),c=i(c,d),c.return=f,f=c):(t(f,c),c=bl(d,f.mode,g),c.return=f,f=c),o(f)):t(f,c)}return L}var Vt=Uf(!0),Bf=Uf(!1),Rr={},on=Un(Rr),xr=Un(Rr),Tr=Un(Rr);function Yn(e){if(e===Rr)throw Error(k(174));return e}function Gu(e,n){switch(F(Tr,n),F(xr,e),F(on,Rr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=xo(n,e)}$(on),F(on,n)}function Ft(){$(on),$(xr),$(Tr)}function Wf(e){Yn(Tr.current);var n=Yn(on.current),t=xo(n,e.type);n!==t&&(F(xr,e),F(on,t))}function $u(e){xr.current===e&&($(on),$(xr))}var B=Un(0);function $i(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xl=[];function Uu(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var pi=gn.ReactCurrentDispatcher,ql=gn.ReactCurrentBatchConfig,it=0,W=null,J=null,ne=null,Ui=!1,sr=!1,Cr=0,Ih=0;function oe(){throw Error(k(321))}function Bu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ke(e[t],n[t]))return!1;return!0}function Wu(e,n,t,r,i,l){if(it=l,W=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,pi.current=e===null||e.memoizedState===null?Mh:Vh,e=t(r,i),sr){l=0;do{if(sr=!1,Cr=0,25<=l)throw Error(k(301));l+=1,ne=J=null,n.updateQueue=null,pi.current=Fh,e=t(r,i)}while(sr)}if(pi.current=Bi,n=J!==null&&J.next!==null,it=0,ne=J=W=null,Ui=!1,n)throw Error(k(300));return e}function Hu(){var e=Cr!==0;return Cr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?W.memoizedState=ne=e:ne=ne.next=e,ne}function je(){if(J===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=ne===null?W.memoizedState:ne.next;if(n!==null)ne=n,J=e;else{if(e===null)throw Error(k(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ne===null?W.memoizedState=ne=e:ne=ne.next=e}return ne}function Nr(e,n){return typeof n=="function"?n(e):n}function Kl(e){var n=je(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var p=s.lane;if((it&p)===p)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:p,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=m,o=r):a=a.next=m,W.lanes|=p,lt|=p}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,Ke(r,n.memoizedState)||(ke=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,W.lanes|=l,lt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Yl(e){var n=je(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ke(l,n.memoizedState)||(ke=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Hf(){}function Qf(e,n){var t=W,r=je(),i=n(),l=!Ke(r.memoizedState,i);if(l&&(r.memoizedState=i,ke=!0),r=r.queue,Qu(Kf.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,Ar(9,qf.bind(null,t,r,i,n),void 0,null),te===null)throw Error(k(349));(it&30)!==0||Xf(t,n,i)}return i}function Xf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function qf(e,n,t,r){n.value=t,n.getSnapshot=r,Yf(n)&&Zf(e)}function Kf(e,n,t){return t(function(){Yf(n)&&Zf(e)})}function Yf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ke(e,t)}catch{return!0}}function Zf(e){var n=hn(e,1);n!==null&&qe(n,e,1,-1)}function zs(e){var n=Je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},n.queue=e,e=e.dispatch=Rh.bind(null,W,e),[n.memoizedState,e]}function Ar(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Jf(){return je().memoizedState}function vi(e,n,t,r){var i=Je();W.flags|=e,i.memoizedState=Ar(1|n,t,void 0,r===void 0?null:r)}function ll(e,n,t,r){var i=je();r=r===void 0?null:r;var l=void 0;if(J!==null){var o=J.memoizedState;if(l=o.destroy,r!==null&&Bu(r,o.deps)){i.memoizedState=Ar(n,t,l,r);return}}W.flags|=e,i.memoizedState=Ar(1|n,t,l,r)}function Ls(e,n){return vi(8390656,8,e,n)}function Qu(e,n){return ll(2048,8,e,n)}function bf(e,n){return ll(4,2,e,n)}function ed(e,n){return ll(4,4,e,n)}function nd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function td(e,n,t){return t=t!=null?t.concat([e]):null,ll(4,4,nd.bind(null,n,e),t)}function Xu(){}function rd(e,n){var t=je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Bu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function id(e,n){var t=je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Bu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ld(e,n,t){return(it&21)===0?(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=t):(Ke(t,n)||(t=af(),W.lanes|=t,lt|=t,e.baseState=!0),n)}function Oh(e,n){var t=V;V=t!==0&&4>t?t:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),n()}finally{V=t,ql.transition=r}}function od(){return je().memoizedState}function Dh(e,n,t){var r=Vn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ud(e))ad(n,t);else if(t=Ff(e,n,t,r),t!==null){var i=me();qe(t,e,r,i),sd(t,n,r)}}function Rh(e,n,t){var r=Vn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ud(e))ad(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,Ke(u,o)){var a=n.interleaved;a===null?(i.next=i,Fu(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Ff(e,n,i,r),t!==null&&(i=me(),qe(t,e,r,i),sd(t,n,r))}}function ud(e){var n=e.alternate;return e===W||n!==null&&n===W}function ad(e,n){sr=Ui=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function sd(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,xu(e,t)}}var Bi={readContext:Fe,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Mh={readContext:Fe,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:Fe,useEffect:Ls,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,vi(4194308,4,nd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return vi(4194308,4,e,n)},useInsertionEffect:function(e,n){return vi(4,2,e,n)},useMemo:function(e,n){var t=Je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Je();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Dh.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:zs,useDebugValue:Xu,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=zs(!1),n=e[0];return e=Oh.bind(null,e[1]),Je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=W,i=Je();if(U){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),te===null)throw Error(k(349));(it&30)!==0||Xf(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Ls(Kf.bind(null,r,l,e),[e]),r.flags|=2048,Ar(9,qf.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Je(),n=te.identifierPrefix;if(U){var t=fn,r=cn;t=(r&~(1<<32-Xe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Cr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ih++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Vh={readContext:Fe,useCallback:rd,useContext:Fe,useEffect:Qu,useImperativeHandle:td,useInsertionEffect:bf,useLayoutEffect:ed,useMemo:id,useReducer:Kl,useRef:Jf,useState:function(){return Kl(Nr)},useDebugValue:Xu,useDeferredValue:function(e){var n=je();return ld(n,J.memoizedState,e)},useTransition:function(){var e=Kl(Nr)[0],n=je().memoizedState;return[e,n]},useMutableSource:Hf,useSyncExternalStore:Qf,useId:od,unstable_isNewReconciler:!1},Fh={readContext:Fe,useCallback:rd,useContext:Fe,useEffect:Qu,useImperativeHandle:td,useInsertionEffect:bf,useLayoutEffect:ed,useMemo:id,useReducer:Yl,useRef:Jf,useState:function(){return Yl(Nr)},useDebugValue:Xu,useDeferredValue:function(e){var n=je();return J===null?n.memoizedState=e:ld(n,J.memoizedState,e)},useTransition:function(){var e=Yl(Nr)[0],n=je().memoizedState;return[e,n]},useMutableSource:Hf,useSyncExternalStore:Qf,useId:od,unstable_isNewReconciler:!1};function jt(e,n){try{var t="",r=n;do t+=d0(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Zl(e,n,t){return{value:e,source:null,stack:t!=null?t:null,digest:n!=null?n:null}}function Xo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var jh=typeof WeakMap=="function"?WeakMap:Map;function cd(e,n,t){t=pn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Hi||(Hi=!0,ru=r),Xo(e,n)},t}function fd(e,n,t){t=pn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Xo(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Xo(e,n),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Is(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new jh;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=bh.bind(null,e,n,t),n.then(e,e))}function Os(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ds(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=pn(-1,1),n.tag=2,Rn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Gh=gn.ReactCurrentOwner,ke=!1;function ve(e,n,t,r){n.child=e===null?Bf(n,null,t,r):Vt(n,e.child,t,r)}function Rs(e,n,t,r,i){t=t.render;var l=n.ref;return Lt(n,i),r=Wu(e,n,t,r,l,i),t=Hu(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,_n(e,n,i)):(U&&t&&Iu(n),n.flags|=1,ve(e,n,r,i),n.child)}function Ms(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!na(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,dd(e,n,l,r,i)):(e=gi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:wr,t(o,r)&&e.ref===n.ref)return _n(e,n,i)}return n.flags|=1,e=Fn(l,r),e.ref=n.ref,e.return=n,n.child=e}function dd(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(wr(l,r)&&e.ref===n.ref)if(ke=!1,n.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ke=!0);else return n.lanes=e.lanes,_n(e,n,i)}return qo(e,n,t,r,i)}function pd(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(xt,Ce),Ce|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(xt,Ce),Ce|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,F(xt,Ce),Ce|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,F(xt,Ce),Ce|=r;return ve(e,n,i,t),n.child}function vd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function qo(e,n,t,r,i){var l=Se(t)?tt:de.current;return l=Rt(n,l),Lt(n,i),t=Wu(e,n,t,r,l,i),r=Hu(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,_n(e,n,i)):(U&&r&&Iu(n),n.flags|=1,ve(e,n,t,i),n.child)}function Vs(e,n,t,r,i){if(Se(t)){var l=!0;Ri(n)}else l=!1;if(Lt(n,i),n.stateNode===null)mi(e,n),$f(n,t,r),Qo(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var a=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=Fe(s):(s=Se(t)?tt:de.current,s=Rt(n,s));var p=t.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&As(n,o,r,s),Tn=!1;var v=n.memoizedState;o.state=v,Gi(n,r,o,i),a=n.memoizedState,u!==r||v!==a||Ee.current||Tn?(typeof p=="function"&&(Ho(n,t,p,r),a=n.memoizedState),(u=Tn||Ns(n,t,u,r,v,a,s))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,jf(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:We(n.type,u),o.props=s,m=n.pendingProps,v=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=Fe(a):(a=Se(t)?tt:de.current,a=Rt(n,a));var _=t.getDerivedStateFromProps;(p=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||v!==a)&&As(n,o,r,a),Tn=!1,v=n.memoizedState,o.state=v,Gi(n,r,o,i);var y=n.memoizedState;u!==m||v!==y||Ee.current||Tn?(typeof _=="function"&&(Ho(n,t,_,r),y=n.memoizedState),(s=Tn||Ns(n,t,s,r,v,y,a)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return Ko(e,n,t,r,l,i)}function Ko(e,n,t,r,i,l){vd(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Es(n,t,!1),_n(e,n,l);r=n.stateNode,Gh.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Vt(n,e.child,null,l),n.child=Vt(n,null,u,l)):ve(e,n,u,l),n.memoizedState=r.state,i&&Es(n,t,!0),n.child}function md(e){var n=e.stateNode;n.pendingContext?ks(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ks(e,n.context,!1),Gu(e,n.containerInfo)}function Fs(e,n,t,r,i){return Mt(),Du(i),n.flags|=256,ve(e,n,t,r),n.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function Zo(e){return{baseLanes:e,cachePool:null,transitions:null}}function hd(e,n,t){var r=n.pendingProps,i=B.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(B,i&1),e===null)return Bo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=al(o,r,0,null),e=nt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Zo(t),n.memoizedState=Yo,e):qu(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return $h(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Fn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=Fn(u,l):(l=nt(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Zo(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Yo,r}return l=e.child,e=l.sibling,r=Fn(l,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function qu(e,n){return n=al({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ti(e,n,t,r){return r!==null&&Du(r),Vt(n,e.child,null,t),e=qu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $h(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=Zl(Error(k(422))),ti(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=al({mode:"visible",children:r.children},i,0,null),l=nt(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,(n.mode&1)!==0&&Vt(n,e.child,null,o),n.child.memoizedState=Zo(o),n.memoizedState=Yo,l);if((n.mode&1)===0)return ti(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(k(419)),r=Zl(l,r,void 0),ti(e,n,o,r)}if(u=(o&e.childLanes)!==0,ke||u){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,hn(e,i),qe(r,e,i,-1))}return ea(),r=Zl(Error(k(421))),ti(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=e1.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Ne=Dn(i.nextSibling),Ae=n,U=!0,Qe=null,e!==null&&(Oe[De++]=cn,Oe[De++]=fn,Oe[De++]=rt,cn=e.id,fn=e.overflow,rt=n),n=qu(n,r.children),n.flags|=4096,n)}function js(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Wo(e.return,n,t)}function Jl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function _d(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ve(e,n,r.children,t),r=B.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&js(e,t,n);else if(e.tag===19)js(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(B,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&$i(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Jl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&$i(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Jl(n,!0,t,null,l);break;case"together":Jl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function mi(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function _n(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),lt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Uh(e,n,t){switch(n.tag){case 3:md(n),Mt();break;case 5:Wf(n);break;case 1:Se(n.type)&&Ri(n);break;case 4:Gu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;F(Fi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(B,B.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?hd(e,n,t):(F(B,B.current&1),e=_n(e,n,t),e!==null?e.sibling:null);F(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return _d(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,pd(e,n,t)}return _n(e,n,t)}var gd,Jo,yd,wd;gd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Jo=function(){};yd=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Yn(on.current);var l=null;switch(t){case"input":i=wo(e,i),r=wo(e,r),l=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":i=So(e,i),r=So(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oi)}To(t,r);var o;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pr.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(pr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&G("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};wd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Zt(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Bh(e,n,t){var r=n.pendingProps;switch(Ou(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(n),null;case 1:return Se(n.type)&&Di(),ue(n),null;case 3:return r=n.stateNode,Ft(),$(Ee),$(de),Uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ei(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qe!==null&&(ou(Qe),Qe=null))),Jo(e,n),ue(n),null;case 5:$u(n);var i=Yn(Tr.current);if(t=n.type,e!==null&&n.stateNode!=null)yd(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return ue(n),null}if(e=Yn(on.current),ei(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[en]=n,r[Sr]=l,e=(n.mode&1)!==0,t){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<tr.length;i++)G(tr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":qa(r,l),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},G("invalid",r);break;case"textarea":Ya(r,l),G("invalid",r)}To(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&br(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&br(r.textContent,u,e),i=["children",""+u]):pr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&G("scroll",r)}switch(t){case"input":Hr(r),Ka(r,l,!0);break;case"textarea":Hr(r),Za(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Oi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[en]=n,e[Sr]=r,gd(e,n,!1,!1),n.stateNode=e;e:{switch(o=Co(t,r),t){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<tr.length;i++)G(tr[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":qa(e,r),i=wo(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),G("invalid",e);break;case"textarea":Ya(e,r),i=So(e,r),G("invalid",e);break;default:i=r}To(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?Kc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Xc(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&vr(e,a):typeof a=="number"&&vr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(pr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&G("scroll",e):a!=null&&gu(e,l,a,o))}switch(t){case"input":Hr(e),Ka(e,r,!1);break;case"textarea":Hr(e),Za(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Nt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Nt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Oi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ue(n),null;case 6:if(e&&n.stateNode!=null)wd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Yn(Tr.current),Yn(on.current),ei(n)){if(r=n.stateNode,t=n.memoizedProps,r[en]=n,(l=r.nodeValue!==t)&&(e=Ae,e!==null))switch(e.tag){case 3:br(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[en]=n,n.stateNode=r}return ue(n),null;case 13:if($(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&Ne!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Vf(),Mt(),n.flags|=98560,l=!1;else if(l=ei(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[en]=n}else Mt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ue(n),l=!1}else Qe!==null&&(ou(Qe),Qe=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(B.current&1)!==0?b===0&&(b=3):ea())),n.updateQueue!==null&&(n.flags|=4),ue(n),null);case 4:return Ft(),Jo(e,n),e===null&&kr(n.stateNode.containerInfo),ue(n),null;case 10:return Vu(n.type._context),ue(n),null;case 17:return Se(n.type)&&Di(),ue(n),null;case 19:if($(B),l=n.memoizedState,l===null)return ue(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Zt(l,!1);else{if(b!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=$i(e),o!==null){for(n.flags|=128,Zt(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(B,B.current&1|2),n.child}e=e.sibling}l.tail!==null&&K()>Gt&&(n.flags|=128,r=!0,Zt(l,!1),n.lanes=4194304)}else{if(!r)if(e=$i(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Zt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!U)return ue(n),null}else 2*K()-l.renderingStartTime>Gt&&t!==1073741824&&(n.flags|=128,r=!0,Zt(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=K(),n.sibling=null,t=B.current,F(B,r?t&1|2:t&1),n):(ue(n),null);case 22:case 23:return bu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(Ce&1073741824)!==0&&(ue(n),n.subtreeFlags&6&&(n.flags|=8192)):ue(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Wh(e,n){switch(Ou(n),n.tag){case 1:return Se(n.type)&&Di(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ft(),$(Ee),$(de),Uu(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return $u(n),null;case 13:if($(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Mt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(B),null;case 4:return Ft(),null;case 10:return Vu(n.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var ri=!1,ae=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,C=null;function St(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){X(e,n,r)}else t.current=null}function bo(e,n,t){try{t()}catch(r){X(e,n,r)}}var Gs=!1;function Qh(e,n){if(Mo=zi,e=xf(),Lu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,a=-1,s=0,p=0,m=e,v=null;n:for(;;){for(var _;m!==t||i!==0&&m.nodeType!==3||(u=o+i),m!==l||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(_=m.firstChild)!==null;)v=m,m=_;for(;;){if(m===e)break n;if(v===t&&++s===i&&(u=o),v===l&&++p===r&&(a=o),(_=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=_}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vo={focusedElem:e,selectionRange:t},zi=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var y=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,L=y.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:We(n.type,w),L);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){X(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return y=Gs,Gs=!1,y}function cr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&bo(n,t,l)}i=i.next}while(i!==r)}}function ol(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function eu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function kd(e){var n=e.alternate;n!==null&&(e.alternate=null,kd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[Sr],delete n[Go],delete n[Ah],delete n[Ph])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function $s(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Oi));else if(r!==4&&(e=e.child,e!==null))for(nu(e,n,t),e=e.sibling;e!==null;)nu(e,n,t),e=e.sibling}function tu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tu(e,n,t),e=e.sibling;e!==null;)tu(e,n,t),e=e.sibling}var re=null,He=!1;function kn(e,n,t){for(t=t.child;t!==null;)Sd(e,n,t),t=t.sibling}function Sd(e,n,t){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Ji,t)}catch{}switch(t.tag){case 5:ae||St(t,n);case 6:var r=re,i=He;re=null,kn(e,n,t),re=r,He=i,re!==null&&(He?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&(He?(e=re,t=t.stateNode,e.nodeType===8?Hl(e.parentNode,t):e.nodeType===1&&Hl(e,t),gr(e)):Hl(re,t.stateNode));break;case 4:r=re,i=He,re=t.stateNode.containerInfo,He=!0,kn(e,n,t),re=r,He=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&bo(t,n,o),i=i.next}while(i!==r)}kn(e,n,t);break;case 1:if(!ae&&(St(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){X(t,n,u)}kn(e,n,t);break;case 21:kn(e,n,t);break;case 22:t.mode&1?(ae=(r=ae)||t.memoizedState!==null,kn(e,n,t),ae=r):kn(e,n,t);break;default:kn(e,n,t)}}function Us(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Hh),n.forEach(function(r){var i=n1.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Be(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:re=u.stateNode,He=!1;break e;case 3:re=u.stateNode.containerInfo,He=!0;break e;case 4:re=u.stateNode.containerInfo,He=!0;break e}u=u.return}if(re===null)throw Error(k(160));Sd(l,o,i),re=null,He=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){X(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)xd(n,e),n=n.sibling}function xd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(n,e),Ze(e),r&4){try{cr(3,e,e.return),ol(3,e)}catch(w){X(e,e.return,w)}try{cr(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:Be(n,e),Ze(e),r&512&&t!==null&&St(t,t.return);break;case 5:if(Be(n,e),Ze(e),r&512&&t!==null&&St(t,t.return),e.flags&32){var i=e.stateNode;try{vr(i,"")}catch(w){X(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Wc(i,l),Co(u,o);var s=Co(u,l);for(o=0;o<a.length;o+=2){var p=a[o],m=a[o+1];p==="style"?Kc(i,m):p==="dangerouslySetInnerHTML"?Xc(i,m):p==="children"?vr(i,m):gu(i,p,m,s)}switch(u){case"input":ko(i,l);break;case"textarea":Hc(i,l);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var _=l.value;_!=null?Nt(i,!!l.multiple,_,!1):v!==!!l.multiple&&(l.defaultValue!=null?Nt(i,!!l.multiple,l.defaultValue,!0):Nt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Sr]=l}catch(w){X(e,e.return,w)}}break;case 6:if(Be(n,e),Ze(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){X(e,e.return,w)}}break;case 3:if(Be(n,e),Ze(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:Be(n,e),Ze(e);break;case 13:Be(n,e),Ze(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Zu=K())),r&4&&Us(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(s=ae)||p,Be(n,e),ae=s):Be(n,e),Ze(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!p&&(e.mode&1)!==0)for(C=e,p=e.child;p!==null;){for(m=C=p;C!==null;){switch(v=C,_=v.child,v.tag){case 0:case 11:case 14:case 15:cr(4,v,v.return);break;case 1:St(v,v.return);var y=v.stateNode;if(typeof y.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){X(r,t,w)}}break;case 5:St(v,v.return);break;case 22:if(v.memoizedState!==null){Ws(m);continue}}_!==null?(_.return=v,C=_):Ws(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=qc("display",o))}catch(w){X(e,e.return,w)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(w){X(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(n,e),Ze(e),r&4&&Us(e);break;case 21:break;default:Be(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ed(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vr(i,""),r.flags&=-33);var l=$s(e);tu(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=$s(e);nu(e,u,o);break;default:throw Error(k(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xh(e,n,t){C=e,Td(e)}function Td(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ri;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||ae;u=ri;var s=ae;if(ri=o,(ae=a)&&!s)for(C=i;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?Hs(i):a!==null?(a.return=o,C=a):Hs(i);for(;l!==null;)C=l,Td(l),l=l.sibling;C=i,ri=u,ae=s}Bs(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,C=l):Bs(e)}}function Bs(e){for(;C!==null;){var n=C;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:ae||ol(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ae)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Cs(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Cs(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var p=s.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&gr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ae||n.flags&512&&eu(n)}catch(v){X(n,n.return,v)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function Ws(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function Hs(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ol(4,n)}catch(a){X(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){X(n,i,a)}}var l=n.return;try{eu(n)}catch(a){X(n,l,a)}break;case 5:var o=n.return;try{eu(n)}catch(a){X(n,o,a)}}}catch(a){X(n,n.return,a)}if(n===e){C=null;break}var u=n.sibling;if(u!==null){u.return=n.return,C=u;break}C=n.return}}var qh=Math.ceil,Wi=gn.ReactCurrentDispatcher,Ku=gn.ReactCurrentOwner,Ve=gn.ReactCurrentBatchConfig,R=0,te=null,Y=null,ie=0,Ce=0,xt=Un(0),b=0,Pr=null,lt=0,ul=0,Yu=0,fr=null,we=null,Zu=0,Gt=1/0,an=null,Hi=!1,ru=null,Mn=null,ii=!1,Pn=null,Qi=0,dr=0,iu=null,hi=-1,_i=0;function me(){return(R&6)!==0?K():hi!==-1?hi:hi=K()}function Vn(e){return(e.mode&1)===0?1:(R&2)!==0&&ie!==0?ie&-ie:Lh.transition!==null?(_i===0&&(_i=af()),_i):(e=V,e!==0||(e=window.event,e=e===void 0?16:mf(e.type)),e)}function qe(e,n,t,r){if(50<dr)throw dr=0,iu=null,Error(k(185));Ir(e,t,r),((R&2)===0||e!==te)&&(e===te&&((R&2)===0&&(ul|=t),b===4&&Nn(e,ie)),xe(e,r),t===1&&R===0&&(n.mode&1)===0&&(Gt=K()+500,rl&&Bn()))}function xe(e,n){var t=e.callbackNode;L0(e,n);var r=Pi(e,e===te?ie:0);if(r===0)t!==null&&es(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&es(t),n===1)e.tag===0?zh(Qs.bind(null,e)):Df(Qs.bind(null,e)),Ch(function(){(R&6)===0&&Bn()}),t=null;else{switch(sf(r)){case 1:t=Su;break;case 4:t=of;break;case 16:t=Ai;break;case 536870912:t=uf;break;default:t=Ai}t=Od(t,Cd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Cd(e,n){if(hi=-1,_i=0,(R&6)!==0)throw Error(k(327));var t=e.callbackNode;if(It()&&e.callbackNode!==t)return null;var r=Pi(e,e===te?ie:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Xi(e,r);else{n=r;var i=R;R|=2;var l=Ad();(te!==e||ie!==n)&&(an=null,Gt=K()+500,et(e,n));do try{Zh();break}catch(u){Nd(e,u)}while(1);Mu(),Wi.current=l,R=i,Y!==null?n=0:(te=null,ie=0,n=b)}if(n!==0){if(n===2&&(i=Lo(e),i!==0&&(r=i,n=lu(e,i))),n===1)throw t=Pr,et(e,0),Nn(e,r),xe(e,K()),t;if(n===6)Nn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Kh(i)&&(n=Xi(e,r),n===2&&(l=Lo(e),l!==0&&(r=l,n=lu(e,l))),n===1))throw t=Pr,et(e,0),Nn(e,r),xe(e,K()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Xn(e,we,an);break;case 3:if(Nn(e,r),(r&130023424)===r&&(n=Zu+500-K(),10<n)){if(Pi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jo(Xn.bind(null,e,we,an),n);break}Xn(e,we,an);break;case 4:if(Nn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Xe(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qh(r/1960))-r,10<r){e.timeoutHandle=jo(Xn.bind(null,e,we,an),r);break}Xn(e,we,an);break;case 5:Xn(e,we,an);break;default:throw Error(k(329))}}}return xe(e,K()),e.callbackNode===t?Cd.bind(null,e):null}function lu(e,n){var t=fr;return e.current.memoizedState.isDehydrated&&(et(e,n).flags|=256),e=Xi(e,n),e!==2&&(n=we,we=t,n!==null&&ou(n)),e}function ou(e){we===null?we=e:we.push.apply(we,e)}function Kh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Ke(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Nn(e,n){for(n&=~Yu,n&=~ul,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Xe(n),r=1<<t;e[t]=-1,n&=~r}}function Qs(e){if((R&6)!==0)throw Error(k(327));It();var n=Pi(e,0);if((n&1)===0)return xe(e,K()),null;var t=Xi(e,n);if(e.tag!==0&&t===2){var r=Lo(e);r!==0&&(n=r,t=lu(e,r))}if(t===1)throw t=Pr,et(e,0),Nn(e,n),xe(e,K()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Xn(e,we,an),xe(e,K()),null}function Ju(e,n){var t=R;R|=1;try{return e(n)}finally{R=t,R===0&&(Gt=K()+500,rl&&Bn())}}function ot(e){Pn!==null&&Pn.tag===0&&(R&6)===0&&It();var n=R;R|=1;var t=Ve.transition,r=V;try{if(Ve.transition=null,V=1,e)return e()}finally{V=r,Ve.transition=t,R=n,(R&6)===0&&Bn()}}function bu(){Ce=xt.current,$(xt)}function et(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Th(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(Ou(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Di();break;case 3:Ft(),$(Ee),$(de),Uu();break;case 5:$u(r);break;case 4:Ft();break;case 13:$(B);break;case 19:$(B);break;case 10:Vu(r.type._context);break;case 22:case 23:bu()}t=t.return}if(te=e,Y=e=Fn(e.current,null),ie=Ce=n,b=0,Pr=null,Yu=ul=lt=0,we=fr=null,Kn!==null){for(n=0;n<Kn.length;n++)if(t=Kn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Kn=null}return e}function Nd(e,n){do{var t=Y;try{if(Mu(),pi.current=Bi,Ui){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ui=!1}if(it=0,ne=J=W=null,sr=!1,Cr=0,Ku.current=null,t===null||t.return===null){b=1,Pr=n,Y=null;break}e:{var l=e,o=t.return,u=t,a=n;if(n=ie,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,p=u,m=p.tag;if((p.mode&1)===0&&(m===0||m===11||m===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var _=Os(o);if(_!==null){_.flags&=-257,Ds(_,o,u,l,n),_.mode&1&&Is(l,s,n),n=_,a=s;var y=n.updateQueue;if(y===null){var w=new Set;w.add(a),n.updateQueue=w}else y.add(a);break e}else{if((n&1)===0){Is(l,s,n),ea();break e}a=Error(k(426))}}else if(U&&u.mode&1){var L=Os(o);if(L!==null){(L.flags&65536)===0&&(L.flags|=256),Ds(L,o,u,l,n),Du(jt(a,u));break e}}l=a=jt(a,u),b!==4&&(b=2),fr===null?fr=[l]:fr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=cd(l,a,n);Ts(l,f);break e;case 1:u=a;var c=l.type,d=l.stateNode;if((l.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Mn===null||!Mn.has(d)))){l.flags|=65536,n&=-n,l.lanes|=n;var g=fd(l,u,n);Ts(l,g);break e}}l=l.return}while(l!==null)}zd(t)}catch(S){n=S,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(1)}function Ad(){var e=Wi.current;return Wi.current=Bi,e===null?Bi:e}function ea(){(b===0||b===3||b===2)&&(b=4),te===null||(lt&268435455)===0&&(ul&268435455)===0||Nn(te,ie)}function Xi(e,n){var t=R;R|=2;var r=Ad();(te!==e||ie!==n)&&(an=null,et(e,n));do try{Yh();break}catch(i){Nd(e,i)}while(1);if(Mu(),R=t,Wi.current=r,Y!==null)throw Error(k(261));return te=null,ie=0,b}function Yh(){for(;Y!==null;)Pd(Y)}function Zh(){for(;Y!==null&&!E0();)Pd(Y)}function Pd(e){var n=Id(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,n===null?zd(e):Y=n,Ku.current=null}function zd(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Bh(t,n,Ce),t!==null){Y=t;return}}else{if(t=Wh(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{b=6,Y=null;return}}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);b===0&&(b=5)}function Xn(e,n,t){var r=V,i=Ve.transition;try{Ve.transition=null,V=1,Jh(e,n,t,r)}finally{Ve.transition=i,V=r}return null}function Jh(e,n,t,r){do It();while(Pn!==null);if((R&6)!==0)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(I0(e,l),e===te&&(Y=te=null,ie=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ii||(ii=!0,Od(Ai,function(){return It(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=Ve.transition,Ve.transition=null;var o=V;V=1;var u=R;R|=4,Ku.current=null,Qh(e,t),xd(t,e),gh(Vo),zi=!!Mo,Vo=Mo=null,e.current=t,Xh(t),S0(),R=u,V=o,Ve.transition=l}else e.current=t;if(ii&&(ii=!1,Pn=e,Qi=i),l=e.pendingLanes,l===0&&(Mn=null),C0(t.stateNode),xe(e,K()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hi)throw Hi=!1,e=ru,ru=null,e;return(Qi&1)!==0&&e.tag!==0&&It(),l=e.pendingLanes,(l&1)!==0?e===iu?dr++:(dr=0,iu=e):dr=0,Bn(),null}function It(){if(Pn!==null){var e=sf(Qi),n=Ve.transition,t=V;try{if(Ve.transition=null,V=16>e?16:e,Pn===null)var r=!1;else{if(e=Pn,Pn=null,Qi=0,(R&6)!==0)throw Error(k(331));var i=R;for(R|=4,C=e.current;C!==null;){var l=C,o=l.child;if((C.flags&16)!==0){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(C=s;C!==null;){var p=C;switch(p.tag){case 0:case 11:case 15:cr(8,p,l)}var m=p.child;if(m!==null)m.return=p,C=m;else for(;C!==null;){p=C;var v=p.sibling,_=p.return;if(kd(p),p===s){C=null;break}if(v!==null){v.return=_,C=v;break}C=_}}}var y=l.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var L=w.sibling;w.sibling=null,w=L}while(w!==null)}}C=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,C=o;else e:for(;C!==null;){if(l=C,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:cr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,C=f;break e}C=l.return}}var c=e.current;for(C=c;C!==null;){o=C;var d=o.child;if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,C=d;else e:for(o=c;C!==null;){if(u=C,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:ol(9,u)}}catch(S){X(u,u.return,S)}if(u===o){C=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,C=g;break e}C=u.return}}if(R=i,Bn(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Ji,e)}catch{}r=!0}return r}finally{V=t,Ve.transition=n}}return!1}function Xs(e,n,t){n=jt(t,n),n=cd(e,n,1),e=Rn(e,n,1),n=me(),e!==null&&(Ir(e,1,n),xe(e,n))}function X(e,n,t){if(e.tag===3)Xs(e,e,t);else for(;n!==null;){if(n.tag===3){Xs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=jt(t,e),e=fd(n,e,1),n=Rn(n,e,1),e=me(),n!==null&&(Ir(n,1,e),xe(n,e));break}}n=n.return}}function bh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=me(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(ie&t)===t&&(b===4||b===3&&(ie&130023424)===ie&&500>K()-Zu?et(e,0):Yu|=t),xe(e,n)}function Ld(e,n){n===0&&((e.mode&1)===0?n=1:(n=qr,qr<<=1,(qr&130023424)===0&&(qr=4194304)));var t=me();e=hn(e,n),e!==null&&(Ir(e,n,t),xe(e,t))}function e1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ld(e,t)}function n1(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Ld(e,t)}var Id;Id=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ee.current)ke=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return ke=!1,Uh(e,n,t);ke=(e.flags&131072)!==0}else ke=!1,U&&(n.flags&1048576)!==0&&Rf(n,Vi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;mi(e,n),e=n.pendingProps;var i=Rt(n,de.current);Lt(n,t),i=Wu(null,n,r,e,i,t);var l=Hu();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Se(r)?(l=!0,Ri(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ju(n),i.updater=il,n.stateNode=i,i._reactInternals=n,Qo(n,r,e,t),n=Ko(null,n,r,!0,l,t)):(n.tag=0,U&&l&&Iu(n),ve(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(mi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=r1(r),e=We(r,e),i){case 0:n=qo(null,n,r,e,t);break e;case 1:n=Vs(null,n,r,e,t);break e;case 11:n=Rs(null,n,r,e,t);break e;case 14:n=Ms(null,n,r,We(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),qo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Vs(e,n,r,i,t);case 3:e:{if(md(n),e===null)throw Error(k(387));r=n.pendingProps,l=n.memoizedState,i=l.element,jf(e,n),Gi(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=jt(Error(k(423)),n),n=Fs(e,n,r,t,i);break e}else if(r!==i){i=jt(Error(k(424)),n),n=Fs(e,n,r,t,i);break e}else for(Ne=Dn(n.stateNode.containerInfo.firstChild),Ae=n,U=!0,Qe=null,t=Bf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Mt(),r===i){n=_n(e,n,t);break e}ve(e,n,r,t)}n=n.child}return n;case 5:return Wf(n),e===null&&Bo(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Fo(r,i)?o=null:l!==null&&Fo(r,l)&&(n.flags|=32),vd(e,n),ve(e,n,o,t),n.child;case 6:return e===null&&Bo(n),null;case 13:return hd(e,n,t);case 4:return Gu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Vt(n,null,r,t):ve(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Rs(e,n,r,i,t);case 7:return ve(e,n,n.pendingProps,t),n.child;case 8:return ve(e,n,n.pendingProps.children,t),n.child;case 12:return ve(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,F(Fi,r._currentValue),r._currentValue=o,l!==null)if(Ke(l.value,o)){if(l.children===i.children&&!Ee.current){n=_n(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=pn(-1,t&-t),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var p=s.pending;p===null?a.next=a:(a.next=p.next,p.next=a),s.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Wo(l.return,t,n),u.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(k(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Wo(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ve(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Lt(n,t),i=Fe(i),r=r(i),n.flags|=1,ve(e,n,r,t),n.child;case 14:return r=n.type,i=We(r,n.pendingProps),i=We(r.type,i),Ms(e,n,r,i,t);case 15:return dd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),mi(e,n),n.tag=1,Se(r)?(e=!0,Ri(n)):e=!1,Lt(n,t),$f(n,r,i),Qo(n,r,i,t),Ko(null,n,r,!0,e,t);case 19:return _d(e,n,t);case 22:return pd(e,n,t)}throw Error(k(156,n.tag))};function Od(e,n){return lf(e,n)}function t1(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,t,r){return new t1(e,n,t,r)}function na(e){return e=e.prototype,!(!e||!e.isReactComponent)}function r1(e){if(typeof e=="function")return na(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wu)return 11;if(e===ku)return 14}return 2}function Fn(e,n){var t=e.alternate;return t===null?(t=Me(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function gi(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")na(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case vt:return nt(t.children,i,l,n);case yu:o=8,i|=8;break;case ho:return e=Me(12,t,n,i|2),e.elementType=ho,e.lanes=l,e;case _o:return e=Me(13,t,n,i),e.elementType=_o,e.lanes=l,e;case go:return e=Me(19,t,n,i),e.elementType=go,e.lanes=l,e;case $c:return al(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jc:o=10;break e;case Gc:o=9;break e;case wu:o=11;break e;case ku:o=14;break e;case xn:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Me(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function nt(e,n,t,r){return e=Me(7,e,r,n),e.lanes=t,e}function al(e,n,t,r){return e=Me(22,e,r,n),e.elementType=$c,e.lanes=t,e.stateNode={isHidden:!1},e}function bl(e,n,t){return e=Me(6,e,null,n),e.lanes=t,e}function eo(e,n,t){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function i1(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ta(e,n,t,r,i,l,o,u,a){return e=new i1(e,n,t,u,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Me(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ju(l),e}function l1(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Dd(e){if(!e)return Gn;e=e._reactInternals;e:{if(at(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Se(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Se(t))return Of(e,t,n)}return n}function Rd(e,n,t,r,i,l,o,u,a){return e=ta(t,r,!0,e,i,l,o,u,a),e.context=Dd(null),t=e.current,r=me(),i=Vn(t),l=pn(r,i),l.callback=n!=null?n:null,Rn(t,l,i),e.current.lanes=i,Ir(e,i,r),xe(e,r),e}function sl(e,n,t,r){var i=n.current,l=me(),o=Vn(i);return t=Dd(t),n.context===null?n.context=t:n.pendingContext=t,n=pn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Rn(i,n,o),e!==null&&(qe(e,i,o,l),di(e,i,o)),o}function qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ra(e,n){qs(e,n),(e=e.alternate)&&qs(e,n)}function o1(){return null}var Md=typeof reportError=="function"?reportError:function(e){console.error(e)};function ia(e){this._internalRoot=e}cl.prototype.render=ia.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));sl(e,n,null,null)};cl.prototype.unmount=ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ot(function(){sl(null,e,null,null)}),n[mn]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var n=df();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Cn.length&&n!==0&&n<Cn[t].priority;t++);Cn.splice(t,0,e),t===0&&vf(e)}};function la(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ks(){}function u1(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=qi(o);l.call(s)}}var o=Rd(n,r,e,0,null,!1,!1,"",Ks);return e._reactRootContainer=o,e[mn]=o.current,kr(e.nodeType===8?e.parentNode:e),ot(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=qi(a);u.call(s)}}var a=ta(e,0,!1,null,null,!1,!1,"",Ks);return e._reactRootContainer=a,e[mn]=a.current,kr(e.nodeType===8?e.parentNode:e),ot(function(){sl(n,a,t,r)}),a}function dl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=qi(o);u.call(a)}}sl(n,o,e,i)}else o=u1(t,n,e,i,r);return qi(o)}cf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=nr(n.pendingLanes);t!==0&&(xu(n,t|1),xe(n,K()),(R&6)===0&&(Gt=K()+500,Bn()))}break;case 13:ot(function(){var r=hn(e,1);if(r!==null){var i=me();qe(r,e,1,i)}}),ra(e,1)}};Tu=function(e){if(e.tag===13){var n=hn(e,134217728);if(n!==null){var t=me();qe(n,e,134217728,t)}ra(e,134217728)}};ff=function(e){if(e.tag===13){var n=Vn(e),t=hn(e,n);if(t!==null){var r=me();qe(t,e,n,r)}ra(e,n)}};df=function(){return V};pf=function(e,n){var t=V;try{return V=e,n()}finally{V=t}};Ao=function(e,n,t){switch(n){case"input":if(ko(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=tl(r);if(!i)throw Error(k(90));Bc(r),ko(r,i)}}}break;case"textarea":Hc(e,t);break;case"select":n=t.value,n!=null&&Nt(e,!!t.multiple,n,!1)}};Jc=Ju;bc=ot;var a1={usingClientEntryPoint:!1,Events:[Dr,gt,tl,Yc,Zc,Ju]},Jt={findFiberByHostInstance:qn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},s1={bundleType:Jt.bundleType,version:Jt.version,rendererPackageName:Jt.rendererPackageName,rendererConfig:Jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tf(e),e===null?null:e.stateNode},findFiberByHostInstance:Jt.findFiberByHostInstance||o1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{Ji=li.inject(s1),ln=li}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a1;ze.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!la(n))throw Error(k(200));return l1(e,n,null,t)};ze.createRoot=function(e,n){if(!la(e))throw Error(k(299));var t=!1,r="",i=Md;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=ta(e,1,!1,null,null,t,!1,r,i),e[mn]=n.current,kr(e.nodeType===8?e.parentNode:e),new ia(n)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=tf(n),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return ot(e)};ze.hydrate=function(e,n,t){if(!fl(n))throw Error(k(200));return dl(null,e,n,!0,t)};ze.hydrateRoot=function(e,n,t){if(!la(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Md;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Rd(n,null,e,1,t!=null?t:null,i,!1,l,o),e[mn]=n.current,kr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new cl(n)};ze.render=function(e,n,t){if(!fl(n))throw Error(k(200));return dl(null,e,n,!1,t)};ze.unmountComponentAtNode=function(e){if(!fl(e))throw Error(k(40));return e._reactRootContainer?(ot(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};ze.unstable_batchedUpdates=Ju;ze.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!fl(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return dl(e,n,t,!1,r)};ze.version="18.2.0-next-9e3b772b8-20220608";function Vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vd)}catch(e){console.error(e)}}Vd(),Dc.exports=ze;function c1(e){if(e!==void 0)return ic(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}Dc.exports.render(N.exports.createElement(N.exports.StrictMode,{children:N.exports.createElement(u0,{})}),c1(Cp(document.querySelector("#root"))));
