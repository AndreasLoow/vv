(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var pc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),jp=Symbol.for("react.portal"),Vp=Symbol.for("react.fragment"),Fp=Symbol.for("react.strict_mode"),$p=Symbol.for("react.profiler"),Gp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),qp=Symbol.for("react.suspense"),Wp=Symbol.for("react.memo"),Hp=Symbol.for("react.lazy"),Pa=Symbol.iterator;function Qp(e){return e===null||typeof e!="object"?null:(e=Pa&&e[Pa]||e["@@iterator"],typeof e=="function"?e:null)}var vc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mc=Object.assign,hc={};function Yt(e,n,t){this.props=e,this.context=n,this.refs=hc,this.updater=t||vc}Yt.prototype.isReactComponent={};Yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _c(){}_c.prototype=Yt.prototype;function xu(e,n,t){this.props=e,this.context=n,this.refs=hc,this.updater=t||vc}var Tu=xu.prototype=new _c;Tu.constructor=xu;mc(Tu,Yt.prototype);Tu.isPureReactComponent=!0;var za=Array.isArray,gc=Object.prototype.hasOwnProperty,Nu={current:null},yc={key:!0,ref:!0,__self:!0,__source:!0};function wc(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)gc.call(n,r)&&!yc.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Br,type:e,key:o,ref:l,props:i,_owner:Nu.current}}function Xp(e,n){return{$$typeof:Br,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function Kp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ia=/\/+/g;function bo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Kp(""+e.key):n.toString(36)}function ki(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Br:case jp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+bo(l,0):r,za(i)?(t="",e!=null&&(t=e.replace(Ia,"$&/")+"/"),ki(i,n,t,"",function(s){return s})):i!=null&&(Cu(i)&&(i=Xp(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ia,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",za(e))for(var u=0;u<e.length;u++){o=e[u];var a=r+bo(o,u);l+=ki(o,n,t,a,i)}else if(a=Qp(e),typeof a=="function")for(e=a.call(e),u=0;!(o=e.next()).done;)o=o.value,a=r+bo(o,u++),l+=ki(o,n,t,a,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Jr(e,n,t){if(e==null)return e;var r=[],i=0;return ki(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Yp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Ei={transition:null},Zp={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:Nu};L.Children={map:Jr,forEach:function(e,n,t){Jr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Jr(e,function(){n++}),n},toArray:function(e){return Jr(e,function(n){return n})||[]},only:function(e){if(!Cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Yt;L.Fragment=Vp;L.Profiler=$p;L.PureComponent=xu;L.StrictMode=Fp;L.Suspense=qp;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zp;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mc({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Nu.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)gc.call(n,a)&&!yc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:Br,type:e.type,key:i,ref:o,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:Up,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gp,_context:e},e.Consumer=e};L.createElement=wc;L.createFactory=function(e){var n=wc.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Bp,render:e}};L.isValidElement=Cu;L.lazy=function(e){return{$$typeof:Hp,_payload:{_status:-1,_result:e},_init:Yp}};L.memo=function(e,n){return{$$typeof:Wp,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=n}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,n){return ye.current.useCallback(e,n)};L.useContext=function(e){return ye.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};L.useEffect=function(e,n){return ye.current.useEffect(e,n)};L.useId=function(){return ye.current.useId()};L.useImperativeHandle=function(e,n,t){return ye.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return ye.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return ye.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return ye.current.useMemo(e,n)};L.useReducer=function(e,n,t){return ye.current.useReducer(e,n,t)};L.useRef=function(e){return ye.current.useRef(e)};L.useState=function(e){return ye.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return ye.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return ye.current.useTransition()};L.version="18.2.0";pc.exports=L;var Ft=pc.exports;function kc(e){switch(e){case 0:return"1";case 1:return"0";case 2:return"x";case 3:return"z"}}function Jp(e){return e===0}function ev(e){return e===1}function nv(e,n){return e===n?e:e===3?n:n===3?e:2}function tv(e,n){switch(e){case 0:return n>=3?0:n;case 1:return 1;case 2:return n!==1?2:1;case 3:return n}}function rv(e,n){switch(e){case 0:return 0;case 1:return n>=3?1:n;case 2:return n!==0?2:0;case 3:return n}}function iv(e){return e!==1?e!==0?2:1:0}function Ra(e,n){return e!==1?e!==0?n!==1?2:1:n!==1?n!==0?2:0:n!==1?2:1:1}function Da(e,n){return e!==1?e!==0&&n!==0?2:0:n!==1?n!==0||n!==0?2:0:1}function ov(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function lv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function uv(e,n){return e!==1?e!==0||n!==0?2:0:n!==1?2:1}var La=0,Oa=1,av=2,sv=3;function cv(e,n){return e<n?-1:e===n?0:1}function dv(e,n){return e?n?0:1:n?-1:0}function fv(e,n){return e===n?0:e<n?-1:e>n||e===e?1:n===n?-1:0}function Ec(e,n){return e===n?0:e<n?-1:1}function Sc(e,n){return e<n?e:n}function pv(e,n){return e>n?e:n}function Ma(e,n,t){for(var r=new Array(t),i=0,o=n;i<t;)r[i]=e[o],i=i+1|0,o=o+1|0;return r}function Mi(e,n){for(;;){var t=n,r=e,i=r.length,o=i===0?1:i,l=t.length,u=o-l|0;if(u===0)return r.apply(null,t);if(u>=0)return function(a,s){return function(v){return Mi(a,s.concat([v]))}}(r,t);n=Ma(t,o,-u|0),e=r.apply(null,Ma(t,0,o))}}function dn(e,n){var t=e.length;if(t===1)return e(n);switch(t){case 1:return e(n);case 2:return function(r){return e(n,r)};case 3:return function(r,i){return e(n,r,i)};case 4:return function(r,i,o){return e(n,r,i,o)};case 5:return function(r,i,o,l){return e(n,r,i,o,l)};case 6:return function(r,i,o,l,u){return e(n,r,i,o,l,u)};case 7:return function(r,i,o,l,u,a){return e(n,r,i,o,l,u,a)};default:return Mi(e,[n])}}function Xn(e){var n=e.length;return n===1?e:function(t){return dn(e,t)}}function xc(e,n,t){var r=e.length;if(r===2)return e(n,t);switch(r){case 1:return Mi(e(n),[t]);case 2:return e(n,t);case 3:return function(i){return e(n,t,i)};case 4:return function(i,o){return e(n,t,i,o)};case 5:return function(i,o,l){return e(n,t,i,o,l)};case 6:return function(i,o,l,u){return e(n,t,i,o,l,u)};case 7:return function(i,o,l,u,a){return e(n,t,i,o,l,u,a)};default:return Mi(e,[n,t])}}function qr(e){var n=e.length;return n===2?e:function(t,r){return xc(e,t,r)}}function mt(e){return e===void 0?{BS_PRIVATE_NESTED_SOME_NONE:0}:e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function vv(e){if(e!=null)return mt(e)}function mv(e){if(e!==void 0)return mt(e)}function Wr(e){if(!(e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;if(n!==0)return{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}var hv=function(e,n,t){var r,i;i=t.length;var o=[];for(r=0;r<i-1;++r)o.push(t[r]);var l=t[i-1];for(r=0;r<l.length;++r)o.push(l[r]);return e[n].apply(e,o)};function Tc(e,n){return hv(n,"concat",[e])}function pr(e,n){return n.join(e)}function bi(e,n,t){return t.slice(e,n)}function $t(e,n){return n.filter(Xn(e))}function _v(e,n){return mv(n.find(Xn(e)))}function Nc(e,n){return n.findIndex(Xn(e))}function Gt(e,n){n.forEach(Xn(e))}function Q(e,n){return n.map(Xn(e))}function yn(e,n){return n.map(qr(e))}function Ue(e,n,t){return t.reduce(qr(e),n)}function gv(e,n){return n.some(Xn(e))}function Cc(e){if(e!==void 0)return Wr(e);throw new Error("getExn")}function D(e,n){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",35,2],Error:new Error};return e[n]}function Z(e,n,t){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",45,2],Error:new Error};e[n]=t}function yv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(e[i]);return r}function vn(e,n){return yv(e,Xn(n))}function wv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(i,e[i]);return r}function jo(e,n){return wv(e,qr(n))}function kv(e,n,t){for(var r=n,i=0,o=e.length;i<o;++i)r=t(r,e[i]);return r}function Ev(e,n,t){return kv(e,n,qr(t))}function Sv(e,n,t,r,i){for(;;){var o=t;if(o===i)return!0;if(!r(e[o],n[o]))return!1;t=o+1|0}}function xv(e,n,t){return Sv(e,n,0,t,Sc(e.length,n.length))}function Tv(e,n,t){return xv(e,n,qr(t))}function Nv(e){for(var n=e.length,t=new Array(n),r=new Array(n),i=0;i<n;++i){var o=e[i];t[i]=o[0],r[i]=o[1]}return[t,r]}function Cv(e,n,t,r,i){for(;;){var o=t,l=n;if(o>=r)return o;var u=e[o];if(!i(u,l))return o;t=o+1|0,n=u}}function Av(e,n){var t=e.length;if(t===0||t===1)return t;var r=e[0],i=e[1];if(n(r,i))for(var o=i,l=2;;){var u=l,a=o;if(u>=t)return u;var s=e[u];if(!n(a,s))return u;l=u+1|0,o=s}else return n(i,r)?-Cv(e,i,2,t,n)|0:1}function Pe(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t}}function Fe(e){return{v:e,h:1,l:void 0,r:void 0}}function ji(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function an(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;if(r>(i+2|0)){var o=e.l,l=e.r;return ji(o,l)?Pe(o,e.v,Pe(l,n,t)):Pe(Pe(o,e.v,l.l),l.v,Pe(l.r,n,t))}if(i<=(r+2|0))return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t};var u=t.l,a=t.r;return ji(a,u)?Pe(Pe(e,n,u),t.v,a):Pe(Pe(e,n,u.l),u.v,Pe(u.r,t.v,a))}function Ac(e,n){var t=e.l;return t!==void 0?an(Ac(t,n),e.v,e.r):(n.contents=e.v,e.r)}function Pc(e,n){return e!==void 0?an(Pc(e.l,n),e.v,e.r):Fe(n)}function zc(e,n){return e!==void 0?an(e.l,e.v,zc(e.r,n)):Fe(n)}function Ut(e,n,t){if(e===void 0)return Pc(t,n);if(t===void 0)return zc(e,n);var r=e.h,i=t.h;return r>(i+2|0)?an(e.l,e.v,Ut(e.r,n,t)):i>(r+2|0)?an(Ut(e,n,t.l),t.v,t.r):Pe(e,n,t)}function gl(e){var n=e.l,t=e.r,r=n!==void 0?gl(n):0,i=t!==void 0?gl(t):0;return(1+r|0)+i|0}function Ic(e,n,t){for(;;){var r=n,i=e,o=i.v,l=i.l,u=i.r,a=l!==void 0?Ic(l,r,t):r;t[a]=o;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function Pv(e){if(e===void 0)return[];var n=gl(e),t=new Array(n);return Ic(e,0,t),t}function yl(e,n,t){switch(t){case 0:return;case 1:return Fe(e[n]);case 2:var r=e[n],i=e[n-1|0];return{v:i,h:2,l:Fe(r),r:void 0};case 3:var o=e[n],l=e[n-1|0],u=e[n-2|0];return{v:l,h:2,l:Fe(o),r:Fe(u)};default:var a=t/2|0,s=yl(e,n,a),v=e[n-a|0],m=yl(e,(n-a|0)-1|0,(t-a|0)-1|0);return Pe(s,v,m)}}function wl(e,n,t){switch(t){case 0:return;case 1:return Fe(e[n]);case 2:var r=e[n],i=e[n+1|0];return{v:i,h:2,l:Fe(r),r:void 0};case 3:var o=e[n],l=e[n+1|0],u=e[n+2|0];return{v:l,h:2,l:Fe(o),r:Fe(u)};default:var a=t/2|0,s=wl(e,n,a),v=e[n+a|0],m=wl(e,(n+a|0)+1|0,(t-a|0)-1|0);return Pe(s,v,m)}}function Au(e){var n=e.l;e.l=n.r,n.r=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.l,u=l!==void 0?l.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function Pu(e){var n=e.r;e.r=n.l,n.l=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.r,u=l!==void 0?l.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function zv(e){var n=e.l,t=Pu(n);return e.l=t,Au(e)}function Iv(e){var n=e.r,t=Au(n);return e.r=t,Pu(e)}function ei(e){var n=e.l,t=n!==void 0?n.h:0,r=e.r,i=r!==void 0?r.h:0;return e.h=(t>i?t:i)+1|0,e}function Rv(e){var n=e.l,t=e.r,r=n!==void 0?n.h:0,i=t!==void 0?t.h:0;if(r>(2+i|0)){var o=n.l,l=n.r;return ji(o,l)?ei(Au(e)):ei(zv(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return ji(a,u)?ei(Pu(e)):ei(Iv(e))}return e.h=(r>i?r:i)+1|0,e}function Dv(e,n,t,r){for(;;){var i=t,o=n;if(i>=r)return i;var l=e[i];if(o<=l)return i;t=i+1|0,n=l}}function Lv(e){var n=e.length;if(n===0||n===1)return n;var t=e[0],r=e[1];if(t<r)for(var i=r,o=2;;){var l=o,u=i;if(l>=n)return l;var a=e[l];if(u>=a)return l;o=l+1|0,i=a}else return t>r?-Dv(e,r,2,n)|0:1}function kl(e,n){if(e===void 0)return Fe(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;return n<t?e.l=kl(r,n):e.r=kl(i,n),Rv(e)}function Ov(e){var n=e.length;if(n!==0){var t=Lv(e),r;t>=0?r=wl(e,0,t):(t=-t|0,r=yl(e,t-1|0,t));for(var i=t;i<n;++i)r=kl(r,e[i]);return r}}function Vi(e,n){if(e===void 0)return Fe(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;if(n<t){var o=Vi(r,n);return o===r?e:an(o,t,i)}var l=Vi(i,n);return l===i?e:an(r,t,l)}function El(e,n){if(e===void 0)return e;var t=e.v,r=e.l,i=e.r;if(n===t){if(r===void 0)return i;if(i===void 0)return r;var o={contents:i.v},l=Ac(i,o);return an(r,o.contents,l)}if(n<t){var u=El(r,n);return u===r?e:an(u,t,i)}var a=El(i,n);return a===i?e:an(r,t,a)}function Mv(e,n){for(var t=n.length,r=e,i=0;i<t;++i){var o=n[i];r=El(r,o)}return r}function Fi(e,n){var t=e.v,r=e.l,i=e.r;if(n===t)return[r,i];if(n<t){if(r===void 0)return[void 0,e];var o=Fi(r,n);return[o[0],Ut(o[1],t,i)]}if(i===void 0)return[e,void 0];var l=Fi(i,n);return[Ut(r,t,l[0]),l[1]]}function On(e,n){if(e===void 0)return n;if(n===void 0)return e;var t=e.h,r=n.h;if(t>=r){if(r===1)return Vi(e,n.v);var i=e.v,o=e.l,l=e.r,u=Fi(n,i);return Ut(On(o,u[0]),i,On(l,u[1]))}if(t===1)return Vi(n,e.v);var a=n.v,s=n.l,v=n.r,m=Fi(e,a);return Ut(On(m[0],s),a,On(m[1],v))}var Rc=Ov,Sl=Pv;function Dc(e,n){return pr(e,$t(function(t){return t!==""},n))}function Lc(e,n){var t=n.slice(),r=t.shift();return Ue(e,Cc(r===void 0?void 0:mt(r)),t)}function Oc(e,n){var t=n.length-1|0;return Tc(yn(function(r,i){return i===t?[r]:[r,e]},n),[])}function vr(e){return Ue(On,void 0,e)}function bv(e){return Ue(function(n,t){return n+t|0},0,e)}function Mc(e,n){if(e!==void 0)return dn(n,Wr(e))}function ni(e){return mt(e)}var ti,$i=function(e,n){for(var t in e)n(t)};function mr(e,n){if(e===n)return 0;var t=typeof e,r=typeof n;switch(t){case"boolean":if(r==="boolean")return dv(e,n);break;case"function":if(r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"compare: functional value",Error:new Error};break;case"number":if(r==="number")return fv(e,n);break;case"string":return r==="string"?Ec(e,n):1;case"undefined":return-1}switch(r){case"string":return-1;case"undefined":return 1;default:if(t==="boolean")return 1;if(r==="boolean")return-1;if(t==="function")return 1;if(r==="function")return-1;if(t==="number")return n===null||n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(r==="number")return e===null||e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e===null)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(n===null)return e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e.BS_PRIVATE_NESTED_SOME_NONE!==void 0)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?ba(e,n):-1;var i=e.TAG|0,o=n.TAG|0;if(i===248)return cv(e[1],n[1]);if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return i<o?-1:1;var l=e.length|0,u=n.length|0;if(l===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===l)return 0;var v=mr(e[s],n[s]);if(v!==0)return v;a=s+1|0}else return e instanceof Date&&n instanceof Date?e-n:ba(e,n);else if(l<u)for(var m=0;;){var p=m;if(p===l)return-1;var h=mr(e[p],n[p]);if(h!==0)return h;m=p+1|0}else for(var y=0;;){var w=y;if(w===u)return 1;var z=mr(e[w],n[w]);if(z!==0)return z;y=w+1|0}}}function ba(e,n){var t={contents:void 0},r={contents:void 0},i=function(m,p){var h=m[2],y=m[1];if(!Object.prototype.hasOwnProperty.call(y,p)||mr(m[0][p],y[p])>0){var w=h.contents;if(!(w!==void 0&&p>=w)){h.contents=p;return}}},o=[e,n,r],l=function(m){return i(o,m)},u=[n,e,t],a=function(m){return i(u,m)};$i(e,l),$i(n,a);var s=t.contents,v=r.contents;return s!==void 0?v!==void 0?Ec(s,v):-1:v!==void 0?1:0}function X(e,n){if(e===n)return!0;var t=typeof e;if(t==="string"||t==="number"||t==="boolean"||t==="undefined"||e===null)return!1;var r=typeof n;if(t==="function"||r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if(r==="number"||r==="undefined"||n===null)return!1;var i=e.TAG|0,o=n.TAG|0;if(i===248)return e[1]===n[1];if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return!1;var l=e.length|0,u=n.length|0;if(l===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===l)return!0;if(!X(e[s],n[s]))return!1;a=s+1|0}else{if(e instanceof Date&&n instanceof Date)return!(e>n||e<n);var v={contents:!0},m=function(h){if(!Object.prototype.hasOwnProperty.call(n,h)){v.contents=!1;return}},p=function(h){if(!Object.prototype.hasOwnProperty.call(e,h)||!X(n[h],e[h])){v.contents=!1;return}};return $i(e,m),v.contents&&$i(n,p),v.contents}else return!1}function bc(e,n){return typeof e=="number"&&typeof n=="number"?e!==n:!X(e,n)}function jv(e,n){return typeof e=="number"&&typeof n=="number"?e>=n:mr(e,n)>=0}function Vo(e){return{_0:e}}function lt(e){return"1'b"+kc(e._0)}function Vv(e){return kc(e._0)}function Fo(e){return{TAG:0,_0:e}}function Fv(e){return{TAG:1,_0:e}}function $v(e){return{TAG:2,_0:e}}function Gv(e,n){return{TAG:3,_0:e,_1:0,_2:n}}function Uv(e,n){return{TAG:3,_0:e,_1:1,_2:n}}function Bv(e,n){return{TAG:3,_0:e,_1:2,_2:n}}function qv(e,n){return{TAG:3,_0:e,_1:3,_2:n}}function Wv(e,n){return{TAG:3,_0:e,_1:4,_2:n}}function Hv(e,n){return{TAG:3,_0:e,_1:5,_2:n}}function Qv(e,n,t){return{TAG:4,_0:e,_1:n,_2:t}}function Xv(e){return{_0:e}}function Kv(e){return{TAG:0,_0:e}}function Yv(e,n){return{TAG:1,_0:e,_1:n}}function Zv(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function xl(e){return typeof e=="number"?0:e._0}function Tl(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:case 2:return e._1}}function Jv(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return Sc(e._0<e._1?e._0:e._1,e._2)}}function Nl(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return e._2}}function em(e,n){switch(n){case 0:return xl(e);case 1:return Tl(e);case 2:return Jv(e);case 3:return Nl(e)}}function vo(e,n){return em(e,n._0)}function nm(e,n){return e!==void 0?vo(e,n):0}function tm(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0>e._1?e._0:e._1;case 2:return pv(e._0>e._1?e._0:e._1,e._2)}}function rm(e,n){return{TAG:2,_0:xl(e)+xl(n)|0,_1:Tl(e)+Tl(n)|0,_2:Nl(e)+Nl(n)|0}}function im(e,n){switch(e){case 0:return n!==0?1:2;case 1:return n!==1?0:2;case 2:case 3:return n!==1?n!==0?2:0:1}}function om(e){return{TAG:0,_0:e}}function lm(e){return{TAG:1,_0:e}}function um(e){return{TAG:2,_0:e}}function am(e,n){return{TAG:3,_0:e,_1:n}}function jc(e){if(!X(e,[]))return Lc(function(n,t){return{TAG:3,_0:n,_1:t}},e)}function sm(e){return{TAG:0,_0:e}}function cm(e){return{TAG:1,_0:e}}function Vc(e,n,t){for(;;){var r=e;if(typeof r=="number")return!1;switch(r.TAG|0){case 0:return r._0===n?t===0:!1;case 1:return r._0===n?t===1:!1;case 2:return r._0===n;case 3:if(Vc(r._0,n,t))return!0;e=r._1;continue}}}function dm(e,n,t,r){if(typeof e=="number"||e.TAG!==0)return!1;var i=e._0;if(typeof i=="number"||i.TAG===0)return!1;var o=im(t._0,r._0);return o!==2?Vc(i._0,n,o):!1}function fm(e){switch(e){case 0:return nv;case 1:return tv;case 2:return rv}}function Fc(e){return!!e}function pm(e){return!0}var vm=[],mm=[],hm=[],_m=[],$c={vars:vm,nets:mm,conts:hm,procs:_m},gm=0,$o=0,ja=0,Va=1,ym=0;function ve(e){throw new Error(e)}var Gc={exports:{}},mo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm=Ft,km=Symbol.for("react.element"),Em=Symbol.for("react.fragment"),Sm=Object.prototype.hasOwnProperty,xm=wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tm={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Sm.call(n,r)&&!Tm.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:km,type:e,key:o,ref:l,props:i,_owner:xm.current}}mo.Fragment=Em;mo.jsx=Uc;mo.jsxs=Uc;Gc.exports=mo;var A=Gc.exports;function Bc(e){return yn(function(n,t){return A.jsx(Ft.Fragment,{children:n},String(t))},e)}function Nm(e){switch(e){case 0:return"&&";case 1:return"||";case 2:return"&";case 3:return"|";case 4:return"^";case 5:return"+"}}function Se(e){switch(e.TAG|0){case 0:return lt(e._0);case 1:return e._0;case 2:return"!("+Se(e._0)+")";case 3:return"("+Se(e._0)+") "+Nm(e._1)+" ("+Se(e._2)+")";case 4:return"("+Se(e._0)+") ? ("+Se(e._1)+") : ("+Se(e._2)+")"}}function Cm(e){return e?Se(e._0):"$time"}function zu(e){if(typeof e=="number")return"";switch(e.TAG|0){case 0:return"#"+String(e._0);case 1:return"#("+String(e._0)+", "+String(e._1)+")";case 2:return"#("+String(e._0)+", "+String(e._1)+", "+String(e._2)+")"}}function Fa(e){return e!==void 0?zu(e)+" ":""}function Cl(e){if(typeof e=="number")return"0";switch(e.TAG|0){case 0:return"posedge "+e._0;case 1:return"negedge "+e._0;case 2:return e._0;case 3:return Cl(e._0)+" or "+Cl(e._1)}}function Am(e){return typeof e=="number"?"@(*)":e.TAG===0?"#"+String(e._0):"@("+Cl(e._0)+")"}function $a(e,n){return'"'+e+'"'+(n.length===0?"":`,
          `)+pr("",Oc(", ",Q(Cm,n)))}function qc(e){if(typeof e=="number")return"$finish";switch(e.TAG|0){case 0:return Am(e._0);case 1:return e._0?e._1+" <= "+Fa(e._2)+Se(e._3):e._1+" = "+Fa(e._2)+Se(e._3);case 2:return"$display("+$a(e._0,e._1)+")";case 3:return"$monitor("+$a(e._0,e._1)+")";case 4:return"goto +"+String(e._0);case 5:return"goto +"+String(e._1)+" unless "+Se(e._0)}}function Pm(e,n,t,r){var i=qc(t),o=" "+(X(n,r)?i+";":i+`;
`);return X(e,r)?A.jsx("b",{children:o}):o}function zm(e,n){var t=n.length-1|0;return yn(function(r,i){return Pm(e,t,r,i)},n)}function Im(e){return Dc(" ",["assign",zu(e.delay),e.lhs,"=",Se(e.rhs)+";"])}function Rm(e){return e!==void 0?" = "+Se(e):""}function Dm(e){return"logic "+e.target+Rm(e.init)+";"}function Lm(e){switch(e){case 0:return"wire";case 1:return"wand";case 2:return"wor"}}function Om(e){return Dc(" ",[Lm(e.type_),zu(e.delay),e.name+";"])}function Mm(e){if(!e)return"initial";switch(e._0){case 0:return"always";case 1:return"always_comb";case 2:return"always_ff";case 3:return"always_latch"}}function bm(e,n,t){return Bc(Tc([[A.jsx("span",{children:"// Process "+String(t+1|0),className:"comment"}),`
`+Mm(n.proc_type),` begin
`],zm(D(e,t).state===0?-1:D(e,t).pc,n.stmts),[`
end`]],[]))}function jm(e){switch(e){case 0:return"finished";case 1:return"running";case 2:return"waiting"}}function Vm(e){return e.TAG===2?A.jsx("li",{children:"nba("+e._1+" <= "+lt(e._2)+")"},String(e._0)):ve("impossible")}function Go(e,n){switch(n.TAG|0){case 0:var t=n._1;return"update("+D(e,t).lhs+"("+String(t)+")): "+lt(n._2);case 1:return"eval(cont: "+String(n._1+1|0)+", "+n._2+" = "+lt(n._3)+")";case 2:return"nba("+n._1+" <= "+lt(n._2)+")";case 3:return"eval(proc: "+String(n._1+1|0)+")";case 4:return A.jsxs("ol",{children:["NBA events:",vn(n._1,Vm)]})}}function Fm(e,n){return Bc(Oc(`

`,[pr(`
`,Q(Om,e.nets)),pr(`
`,Q(Dm,e.vars)),pr(`
`,Q(Im,e.conts))].concat(yn(function(t,r){return bm(n,t,r)},e.procs))))}function $m(e){return e!==void 0?A.jsx("code",{children:qc({TAG:3,_0:e[0],_1:e[1]})}):"No monitor"}function pe(e){return e!==void 0?e.h:0}function be(e,n,t,r){var i=pe(e),o=pe(r);return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r}}function un(e,n){return{k:e,v:n,h:1,l:void 0,r:void 0}}function Ga(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function Gm(e,n){return e.v===n?e:{k:e.k,v:n,h:e.h,l:e.l,r:e.r}}function Ua(e,n,t,r){var i=e!==void 0?e.h:0,o=r!==void 0?r.h:0;if(i>(o+2|0)){var l=e.l,u=e.r;return pe(l)>=pe(u)?be(l,e.k,e.v,be(u,n,t,r)):be(be(l,e.k,e.v,u.l),u.k,u.v,be(u.r,n,t,r))}if(o<=(i+2|0))return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r};var a=r.l,s=r.r;return pe(s)>=pe(a)?be(be(e,n,t,a),r.k,r.v,s):be(be(e,n,t,a.l),a.k,a.v,be(a.r,r.k,r.v,s))}function Gi(e){var n=e.l,t=e.r,r=n!==void 0?Gi(n):0,i=t!==void 0?Gi(t):0;return(1+r|0)+i|0}function Wc(e,n,t){for(;;){var r=n,i=e,o=i.k,l=i.l,u=i.r,a=l!==void 0?Wc(l,r,t):r;t[a]=o;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function Hc(e,n,t){for(;;){var r=n,i=e,o=i.l,l=i.k,u=i.r,a=o!==void 0?Hc(o,r,t):r;t[a]=[l,i.v];var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function Um(e){if(e===void 0)return[];var n=Gi(e),t=new Array(n);return Hc(e,0,t),t}function Bm(e){if(e===void 0)return[];var n=Gi(e),t=new Array(n);return Wc(e,0,t),t}function Al(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return un(r[0],r[1]);case 2:var i=e[n],o=e[n-1|0],l=o,u=i;return{k:l[0],v:l[1],h:2,l:un(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n-1|0],v=e[n-2|0],m=v,p=s,h=a;return{k:p[0],v:p[1],h:2,l:un(h[0],h[1]),r:un(m[0],m[1])};default:var y=t/2|0,w=Al(e,n,y),z=e[n-y|0],d=Al(e,(n-y|0)-1|0,(t-y|0)-1|0);return be(w,z[0],z[1],d)}}function Pl(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return un(r[0],r[1]);case 2:var i=e[n],o=e[n+1|0],l=o,u=i;return{k:l[0],v:l[1],h:2,l:un(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n+1|0],v=e[n+2|0],m=v,p=s,h=a;return{k:p[0],v:p[1],h:2,l:un(h[0],h[1]),r:un(m[0],m[1])};default:var y=t/2|0,w=Pl(e,n,y),z=e[n+y|0],d=Pl(e,(n+y|0)+1|0,(t-y|0)-1|0);return be(w,z[0],z[1],d)}}function Iu(e){var n=e.l;e.l=n.r,n.r=e;var t=pe(e.l),r=pe(e.r);e.h=(t>r?t:r)+1|0;var i=pe(n.l),o=e.h;return n.h=(i>o?i:o)+1|0,n}function Ru(e){var n=e.r;e.r=n.l,n.l=e;var t=pe(e.l),r=pe(e.r);e.h=(t>r?t:r)+1|0;var i=pe(n.r),o=e.h;return n.h=(i>o?i:o)+1|0,n}function qm(e){var n=e.l,t=Ru(n);return e.l=t,Iu(e)}function Wm(e){var n=e.r,t=Iu(n);return e.r=t,Ru(e)}function ri(e){var n=pe(e.l),t=pe(e.r);return e.h=(n>t?n:t)+1|0,e}function Hm(e){var n=e.l,t=e.r,r=pe(n),i=pe(t);if(r>(2+i|0)){var o=n.l,l=n.r;return Ga(o,l)?ri(Iu(e)):ri(qm(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return Ga(a,u)?ri(Ru(e)):ri(Wm(e))}return e.h=(r>i?r:i)+1|0,e}function Qm(e,n){for(;;){var t=e;if(t===void 0)return;var r=t.k;if(n===r)return mt(t.v);e=n<r?t.l:t.r}}function Xm(e,n){for(;;){var t=e;if(t!==void 0){var r=t.k;if(n===r)return t.v;e=n<r?t.l:t.r;continue}throw{RE_EXN_ID:"Not_found",Error:new Error}}}function Km(e,n){for(;;){var t=e;if(t===void 0)return!1;var r=t.k;if(n===r)return!0;e=n<r?t.l:t.r}}function zl(e,n,t){if(e===void 0)return un(n,t);var r=e.k;if(n===r)return e.k=n,e.v=t,e;var i=e.l,o=e.r;if(n<r){var l=zl(i,n,t);e.l=l}else e.r=zl(o,n,t);return Hm(e)}function Ym(e){var n=e.length;if(n!==0){var t=Av(e,function(l,u){return l[0]<u[0]}),r;t>=0?r=Pl(e,0,t):(t=-t|0,r=Al(e,t-1|0,t));for(var i=t;i<n;++i){var o=e[i];r=zl(r,o[0],o[1])}return r}}function Ye(e,n,t){if(e===void 0)return un(n,t);var r=e.k;if(n===r)return Gm(e,t);var i=e.v;return n<r?Ua(Ye(e.l,n,t),r,i,e.r):Ua(e.l,r,i,Ye(e.r,n,t))}var Du=Km,Zm=Um,Qc=Ym,Jm=Bm,ho=Qm,ut=Xm,Ba={contents:0};function jn(e){var n=Ba.contents;return Ba.contents=n+1|0,n}function eh(e){return e.TAG===2?[e._1,e._2]:ve("bug: expected EventNBA")}function Uo(e){return String(e._0)}var nh=[],Xc=[],Kc=[],qa={active:nh,inactive:Xc,nba:Kc};function th(e){return e?"finished":"running"}function Yc(e,n){var t=_v(function(r){return r.name===n},e);return t!==void 0?t:ve("missing key")}function rh(e,n){return gv(function(t){return t.lhs===e},n)}function ih(e,n,t){return xc(e,n._0,t._0)}function Pn(e,n,t){return{_0:ih(e,n,t)}}function le(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return t._0;case 1:return ut(e,t._0);case 2:var r=le(e,t._0);return{_0:iv(r._0)};case 3:var i=t._1,o=t._0;if(i!==1)if(i!==0){var l=le(e,o),u=le(e,t._2);switch(i){case 0:case 1:return ve("impossible");case 2:return Pn(Ra,l,u);case 3:return Pn(Da,l,u);case 4:return Pn(ov,l,u);case 5:return Pn(lv,l,u)}}else{var a=le(e,o);if(ev(a._0))return a;var s=le(e,t._2);return Pn(Ra,a,s)}else{var v=le(e,o);if(Jp(v._0))return v;var m=le(e,t._2);return Pn(Da,v,m)}case 4:var p=t._2,h=t._1,y=le(e,t._0),w=y._0;if(w!==1){if(w!==0){var z=le(e,h),d=le(e,p);return Pn(uv,z,d)}n=h;continue}n=p;continue}}}function oh(e,n,t){return t?{TAG:0,_0:le(n,t._0)}:{TAG:1,_0:e}}function Si(e,n){for(;;){var t=e;switch(t.TAG|0){case 0:return!1;case 1:return n===t._0;case 2:e=t._0;continue;case 3:if(Si(t._0,n))return!0;e=t._2;continue;case 4:if(Si(t._0,n)||Si(t._1,n))return!0;e=t._2;continue}}}function Zc(e,n,t){var r=Yc(e,n).delay;return rm(r,t)}function lh(e,n,t){for(var r=!1,i=0,o=-1,l=-1,u=function(v){return v.TAG===0?v._1===t:!1};!r&&i<e.length;){var a=D(e,i);if(a[0]>n)r=!0;else{var s=Nc(u,a[1].active);s!==-1&&(r=!0,o=i,l=s)}i=i+1|0}if(o!==-1)return[o,l]}function uh(e,n){var t=bi(0,n,e),r=bi(n+1|0,e.length,e);return t.concat(r)}function ah(e,n){switch(n){case 0:return e.active;case 1:return e.inactive;case 2:return e.nba}}function Bo(e,n,t){switch(n){case 0:return{active:t,inactive:e.inactive,nba:e.nba};case 1:return{active:e.active,inactive:t,nba:e.nba};case 2:return{active:e.active,inactive:e.inactive,nba:t}}}function hr(e,n,t,r){var i=Nc(function(h){return jv(h[0],t)},e);if(i===-1){var o=Bo(qa,n,[r]);return e.concat([[t,o]])}if(X(D(e,i)[0],t)){var l=D(e,i)[1],u=ah(l,n).concat([r]),a=Bo(l,n,u),s=e.slice();return Z(s,i,[t,a]),s}var v=bi(0,i,e),m=Bo(qa,n,[r]),p=bi(i,e.length,e);return v.concat([[t,m]]).concat(p)}function zn(e,n){var t=n.pc+1|0;return t===e.stmts.length?{pc:0,state:Fc(e.proc_type)?1:0}:{pc:t,state:1}}function xi(e,n,t,r,i){if(X(r,i))return e;for(var o=e.queue.slice(),l=$t(function(_){return n!==_[1]?Si(_[0].rhs,t):!1},yn(function(_,I){return[_,I]},e.vmodule.conts)),u=Q(function(_){var I=_[0];return[I.delay,[_[1],le(e.env,I.rhs)]]},l),a=function(_,I){var P=I[1],W=P[1],te=P[0],ke=Zc(e.vmodule.nets,D(e.vmodule.conts,te).lhs,I[0]),tn=vo(ke,W),se=tm(ke),Ee=lh(_,e.time+se|0,te),he;if(Ee!==void 0){var x=Ee[0],C=D(_,x),R=C[1],M=R.active.slice();if(M.splice(Ee[1],1),X(M,[]))he=uh(_,x);else{var V=_.slice();Z(V,x,[C[0],{active:M,inactive:R.inactive,nba:R.nba}]),he=V}}else he=_;return hr(he,0,e.time+tn|0,{TAG:0,_0:jn(),_1:te,_2:W})},s=Ue(a,o,u),v=$t(function(_){var I=_[0];return I.state===2?dm(D(D(e.vmodule.procs,_[1]).stmts,I.pc),t,r,i):!1},yn(function(_,I){return[_,I]},e.proc_env)),m=e.proc_env.slice(),p=0,h=v.length;p<h;++p){var y=D(v,p),w=y[1],z=zn(D(e.vmodule.procs,w),y[0]);Z(m,w,z)}var d=Q(function(_){return{TAG:3,_0:jn(),_1:_[1]}},v),c=D(s,0),f=c[1],g=f.active.concat(d),S=f.inactive,N=f.nba,E={active:g,inactive:S,nba:N};return Z(s,0,[c[0],E]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:m,queue:s,monitor:e.monitor,output:e.output,time:e.time}}function sh(e){return e._0===0}function Wa(e,n,t){var r=e.proc_env.slice(),i=D(r,n),o=D(e.vmodule.procs,n),l=i.pc+t|0,u=l===o.stmts.length?{pc:0,state:Fc(o.proc_type)?1:0}:{pc:l,state:i.state};return Z(r,n,u),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:r,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}function ch(e){return e.TAG===0?Vv(e._0):ve("expected value found time")}function dh(e){return e.TAG===0?ve("expected time found value"):String(e._0)}function fh(e,n){for(var t="",r=0,i=0;r<e.length;)if(e[r]==="%"){r=r+1|0;var o=e[r];o==="b"?(t=t.concat(ch(D(n,i))),i=i+1|0):o==="d"?(t=t.concat(dh(D(n,i))),i=i+1|0):ve("unsupported format"),r=r+1|0}else t=t.concat(e[r]),r=r+1|0;return t=t.concat(`
`),t}function ph(e,n){return e.TAG===0?n.TAG===0?X(e._0,n._0):ve("impossible"):n.TAG===0?ve("impossible"):!0}function Jc(e,n,t,r){var i=e.env,o=e.time,l=Q(function(v){return oh(o,i,v)},t),u=r!==void 0?Tv(l,r,ph):!1;if(u)return[l,e.output];var a=fh(n,l),s=e.output.concat(a);return[l,s]}function vh(e,n){var t=D(e.vmodule.procs,n),r=D(e.proc_env,n),i=D(t.stmts,r.pc);if(typeof i=="number")return{vmodule:e.vmodule,status:1,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};switch(i.TAG|0){case 0:var o=i._0;if(typeof o=="number")return ve("impossible, all stars should have been preprocessed away");if(o.TAG===0){var l=zn(t,r),u=l.pc,a={pc:u,state:2},s=e.proc_env.slice();Z(s,n,a);var v=hr(e.queue,0,e.time+o._0|0,{TAG:3,_0:jn(),_1:n});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:s,queue:v,monitor:e.monitor,output:e.output,time:e.time}}var m=r.pc,p={pc:m,state:2},h=e.proc_env.slice();return Z(h,n,p),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:h,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};case 1:if(i._0){var y=le(e.env,i._3),w=zn(t,r),z=e.proc_env.slice();Z(z,n,w);var d=nm(i._2,y),c=hr(e.queue,2,e.time+d|0,{TAG:2,_0:jn(),_1:i._1,_2:y});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:z,queue:c,monitor:e.monitor,output:e.output,time:e.time}}var f=i._2,g=i._1,S=le(e.env,i._3);if(f!==void 0){var N=r.pc,E={pc:N,state:2},_=e.proc_env.slice();Z(_,n,E);var I=vo(f,S),P=I===0?1:0,W=hr(e.queue,P,e.time+I|0,{TAG:1,_0:jn(),_1:n,_2:g,_3:S});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:_,queue:W,monitor:e.monitor,output:e.output,time:e.time}}var te=ut(e.env,g),ke=Ye(e.env,g,S),tn=zn(t,r),se=e.proc_env.slice();Z(se,n,tn);var Ee=e.vmodule,he=e.status,x=e.cont_env,C=e.queue,R=e.monitor,M=e.output,V=e.time,Tn={vmodule:Ee,status:he,env:ke,cont_env:x,proc_env:se,queue:C,monitor:R,output:M,time:V};return xi(Tn,-1,g,te,S);case 2:var We=Jc(e,i._0,i._1,void 0),Nn=zn(t,r),Me=e.proc_env.slice();return Z(Me,n,Nn),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Me,queue:e.queue,monitor:e.monitor,output:We[1],time:e.time};case 3:var Cn=[i._0,i._1,void 0],Ro=zn(t,r),Yr=e.proc_env.slice();return Z(Yr,n,Ro),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Yr,queue:e.queue,monitor:Cn,output:e.output,time:e.time};case 4:return Wa(e,n,i._0);case 5:if(!sh(le(e.env,i._0)))return Wa(e,n,i._1);var Do=zn(t,r),Zr=e.proc_env.slice();return Z(Zr,n,Do),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Zr,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}}function Ha(e,n){for(var t=0,r=e;t<100&&r.status===0&&D(r.proc_env,n).state===1;)t=t+1|0,r=vh(r,n);return t===100&&ve("time out!"),r}function mh(e,n){var t=D(e,n);if(t.TAG===4){var r=t._1;if(r.length!==1){var i=r.slice();i.shift(),e[n]={TAG:4,_0:t._0,_1:i};return}e.splice(n,1);return}e.splice(n,1)}function hh(e){var n=e.proc_type,t;if(n){var r=n._0;t=r!==1&&r<3?0:1}else t=0;return{pc:t,state:1}}function _h(e,n){return n!==void 0?le(e,n):{_0:2}}function Qa(e){var n=Q(function(i){return{TAG:3,_0:jn(),_1:i[1]}},$t(function(i){return pm(i[0].proc_type)},yn(function(i,o){return[i,o]},e.procs))),t=Qc(vn(e.nets,function(i){return[i.name,{_0:rh(i.name,e.conts)?2:3}]})),r=Ev(e.vars,t,function(i,o){return Ye(i,o.target,_h(i,o.init))});return{vmodule:e,status:0,env:r,cont_env:vn(e.conts,function(i){return{_0:2}}),proc_env:vn(e.procs,hh),queue:[[0,{active:n,inactive:Xc,nba:Kc}]],monitor:void 0,output:"",time:0}}function gh(e,n,t){var r=le(e.env,n.rhs),i=Zc(e.vmodule.nets,n.lhs,n.delay),o=vo(i,r);return[o,{TAG:0,_0:jn(),_1:t,_2:r}]}function Xa(e){var n=yn(function(r,i){return gh(e,r,i)},e.vmodule.conts),t=Ue(function(r,i){return hr(r,0,i[0],i[1])},e.queue,n);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:t,monitor:e.monitor,output:e.output,time:e.time}}function Ka(e,n){return e.status===0?e.time===n:!1}function yh(e,n){var t=D(e.queue,0),r=t[1],i=r.active.slice(),o=D(i,n);mh(i,n);var l=r.inactive,u=r.nba,a={active:i,inactive:l,nba:u},s=e.queue.slice();Z(s,0,[t[0],a]);var v=e.vmodule,m=e.status,p=e.env,h=e.cont_env,y=e.proc_env,w=e.monitor,z=e.output,d=e.time;switch(o.TAG|0){case 0:var c=o._1,f=h.slice();Z(f,c,o._2);var g=D(v.conts,c).lhs,S=Yc(v.nets,g),N=ut(p,g),E=fm(S.type_),_=Lc(function(Jn,Mo){return Pn(E,Jn,Mo)},Q(function(Jn){return D(f,Jn[1])},$t(function(Jn){return Jn[0].lhs===g},yn(function(Jn,Mo){return[Jn,Mo]},v.conts)))),I=Ye(p,g,_),P=v,W=m,te=y,ke=w,tn=z,se=d,Ee={vmodule:P,status:W,env:I,cont_env:f,proc_env:te,queue:s,monitor:ke,output:tn,time:se};return xi(Ee,c,g,N,_);case 1:var he=o._3,x=o._2,C=o._1,R=ut(p,x),M=Ye(p,x,he),V=D(y,C),Tn=D(v.procs,C),We=zn(Tn,V),Nn=y.slice();Z(Nn,C,We);var Me=v,Cn=m,Ro=h,Yr=w,Do=z,Zr=d,pp={vmodule:Me,status:Cn,env:M,cont_env:Ro,proc_env:Nn,queue:s,monitor:Yr,output:Do,time:Zr},vp=xi(pp,-1,x,R,he);return Ha(vp,C);case 2:return ve("impossible: EventNBA cannot be in active region");case 3:var Lo=o._1,mp=D(y,Lo),hp=mp.pc,_p={pc:hp,state:1},Ta=y.slice();Z(Ta,Lo,_p);var gp=v,yp=m,wp=p,kp=h,Ep=w,Sp=z,xp=d,Tp={vmodule:gp,status:yp,env:wp,cont_env:kp,proc_env:Ta,queue:s,monitor:Ep,output:Sp,time:xp};return Ha(Tp,Lo);case 4:var Np=o._1.slice(),Na=Np.shift(),Cp=Cc(Na===void 0?void 0:mt(Na)),Ca=eh(Cp),Aa=Ca[1],Oo=Ca[0],Ap=ut(p,Oo),Pp=Ye(p,Oo,Aa),zp=v,Ip=m,Rp=h,Dp=y,Lp=w,Op=z,Mp=d,bp={vmodule:zp,status:Ip,env:Pp,cont_env:Rp,proc_env:Dp,queue:s,monitor:Lp,output:Op,time:Mp};return xi(bp,-1,Oo,Ap,Aa)}}function Ya(e){if(e.status!==0)return!1;var n=D(e.queue,0),t=n[1];return X(t.active,[])?bc(t.inactive,[]):!1}function wh(e){var n=D(e.queue,0),t=n[1],r=t.inactive,i=[],o=t.nba,l={active:r,inactive:i,nba:o},u=e.queue.slice();return Z(u,0,[e.time,l]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:u,monitor:e.monitor,output:e.output,time:e.time}}function Za(e){if(e.status!==0)return!1;var n=D(e.queue,0),t=n[1];return X(t.active,[])&&X(t.inactive,[])?bc(t.nba,[]):!1}function kh(e){var n=D(e.queue,0),t=n[1],r=jn(),i=t.nba,o={TAG:4,_0:r,_1:i},l=t.active.concat([o]),u=t.inactive,a=[],s={active:l,inactive:u,nba:a},v=e.queue.slice();return Z(v,0,[e.time,s]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:v,monitor:e.monitor,output:e.output,time:e.time}}function Ja(e){if(e.status!==0)return!1;var n=e.queue.length;if(n===0)return ve("impossible");var t=D(e.queue,0)[1];return X(t.active,[])&&X(t.inactive,[])?X(t.nba,[]):!1}function Eh(e){var n=e.monitor;if(n===void 0)return e;var t=n[1],r=n[0],i=Jc(e,r,t,n[2]);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:[r,t,i[0]],output:i[1],time:e.time}}function Sh(e){var n=Eh(e),t=n.queue.slice();if(t.shift(),t.length===0)return{vmodule:n.vmodule,status:1,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:n.time};var r=D(t,0);return{vmodule:n.vmodule,status:n.status,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:r[0]}}function es(e,n){return{TAG:0,_0:e,_1:n}}function ii(e,n,t,r){return{TAG:1,_0:e,_1:n,_2:t,_3:r}}function ns(e,n){return{TAG:2,_0:e,_1:n}}function ts(e,n){return{TAG:3,_0:e,_1:n}}function xh(e,n){return{TAG:4,_0:e,_1:n}}function Th(e,n,t){return{TAG:5,_0:e,_1:n,_2:t}}function Nh(e){return{TAG:6,_0:e}}function rs(e,n){return[e,n]}function Ch(e){return{TAG:0,_0:e}}function is(e,n,t){return{TAG:1,_0:e,_1:n,_2:t}}function os(e,n,t){return{TAG:3,_0:e,_1:n,_2:t}}function ls(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function Ah(e,n){return{TAG:4,_0:e,_1:n}}function Ph(e){return{TAG:0,_0:e}}function zh(e){return{TAG:1,_0:e}}function ed(e){switch(e){case"always":return{_0:0};case"always_comb":return{_0:1};case"always_ff":return{_0:2};case"always_latch":return{_0:3};case"initial":return 0;default:return ve("impossible proc type")}}var Ih=0;const nd=ohm.grammar(String.raw`
  verilogGrammar {
    Module = "module" id ("(" ")")? ";" Top* "endmodule"

    ProcType = "initial" | "always_comb" | "always_latch" | "always_ff" | "always"

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
`),td=nd.createSemantics();td.addOperation("translate",{Module(e,n,t,r,i,o,l){return o.children.map(u=>u.translate())},Decl_no_init(e){return rs(e.translate(),ti)},Decl_init(e,n,t){return rs(e.translate(),ni(t.translate()))},GateDecl(e,n,t,r){return t.asIteration().children.map(i=>i.translate())},Top_decl(e,n,t){return Ch(n.asIteration().children.map(r=>r.translate()))},Top_net(e,n,t){return is(e.translate(),$o,n.asIteration().children.map(r=>r.translate()))},Top_net_delay(e,n,t,r){return is(e.translate(),n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_cont(e,n,t,r,i){return os(n.translate(),$o,r.translate())},Top_cont_delay(e,n,t,r,i,o){return os(t.translate(),n.translate(),i.translate())},Top_gate(e,n,t){return ls(e.sourceString,$o,n.asIteration().children.map(r=>r.translate()))},Top_gate_delay(e,n,t,r){return ls(e.sourceString,n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_proc(e,n){return Ah(e.sourceString,n.translate())},WireType(e){return this.sourceString},TimeCont_delay(e,n){return sm(n.translate())},TimeCont_event(e,n,t,r){return cm(t.translate())},TimeCont_star(e,n,t,r){return ym},Stmt_blocking(e,n,t,r){return ii(ja,e.translate(),ti,t.translate())},Stmt_blocking_delay(e,n,t,r,i){return ii(ja,e.translate(),ni(t.translate()),r.translate())},Stmt_nonblocking(e,n,t,r){return ii(Va,e.translate(),ti,t.translate())},Stmt_nonblocking_delay(e,n,t,r,i){return ii(Va,e.translate(),ni(t.translate()),r.translate())},Stmt_if(e,n,t,r,i){return xh(t.translate(),i.translate())},Stmt_if_else(e,n,t,r,i,o,l){return Th(t.translate(),i.translate(),l.translate())},Stmt_display(e,n,t,r,i,o,l){return ns(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_display_no_args(e,n,t,r,i){return ns(t.translate(),[])},Stmt_monitor(e,n,t,r,i,o,l){return ts(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_monitor_no_args(e,n,t,r,i){return ts(t.translate(),[])},Stmt_finish(e,n){return Ih},Stmt_time_stmt(e,n){return es(e.translate(),ni(n.translate()))},Stmt_time(e,n){return es(e.translate(),ti)},Stmt_block(e,n,t){return Nh(n.children.map(r=>r.translate()))},Delay_one(e,n,t,r){return Kv(t.translate())},Delay_two(e,n,t,r,i,o){return Yv(t.translate(),i.translate())},Delay_three(e,n,t,r,i,o,l,u){return Zv(t.translate(),i.translate(),l.translate())},Event_Exp(e){return e.translate()},Event_Exp_or(e,n,t){return am(e.translate(),t.translate())},Event_Exp1_id(e){return um(e.translate())},Event_Exp1_posedge(e,n){return om(n.translate())},Event_Exp1_negedge(e,n){return lm(n.translate())},Exp(e){return e.translate()},Exp_cond(e,n,t,r,i){return Qv(e.translate(),t.translate(),i.translate())},Exp1(e){return e.translate()},Exp1_lor(e,n,t){return Uv(e.translate(),t.translate())},Exp2(e){return e.translate()},Exp2_land(e,n,t){return Gv(e.translate(),t.translate())},Exp3(e){return e.translate()},Exp3_bor(e,n,t){return qv(e.translate(),t.translate())},Exp4(e){return e.translate()},Exp4_bxor(e,n,t){return Wv(e.translate(),t.translate())},Exp5(e){return e.translate()},Exp5_band(e,n,t){return Bv(e.translate(),t.translate())},Exp6(e){return e.translate()},Exp6_add(e,n,t){return Hv(e.translate(),t.translate())},Exp7(e){return e.translate()},Exp7_not(e,n){return $v(n.translate())},Exp8_id(e){return Fv(e.translate())},Exp8_bit(e){return Fo(e.translate())},Exp8_zero(e){return Fo(Vo(Oa))},Exp8_one(e){return Fo(Vo(La))},Exp8_paren(e,n,t){return n.translate()},ExpOrTime_exp(e){return Xv(e.translate())},ExpOrTime_time(e){return gm},number(e){return parseInt(this.sourceString,10)},bit(e,n){var t;switch(n.sourceString.toLowerCase()){case"1":t=La;break;case"0":t=Oa;break;case"x":t=av;break;case"z":t=sv;break;default:throw"Impossible!"}return Vo(t)},string(e,n,t){return n.sourceString},id(e,n){return this.sourceString}});function Rh(e){try{const n=nd.match(e);return Ph(td(n).translate())}catch(n){if(n instanceof TypeError)return zh(n.message);throw n}}function Dh(e){if(e!==void 0)return Wr(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}function Lh(e,n){if(e!==void 0)return mt(n(Wr(e)))}function Oh(e,n){return Lh(e,Xn(n))}function rd(e){return e!==void 0}var qo={contents:0};function id(e){return qo.contents=qo.contents+1|0,e+("/"+qo.contents)}function Mh(e){return e==null?!1:typeof e.RE_EXN_ID=="string"}var Zt=id("Compiler.CompileError");function Lu(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:Zt,_1:"Expected variable, found: "+Se(e),Error:new Error}}function bh(e){return{target:e[0],init:e[1]}}function jh(e,n,t){var r=t[0],i;switch(e){case"triand":case"wand":i=1;break;case"tri":case"wire":i=0;break;case"trior":case"wor":i=2;break;default:i=ve("impossible net type")}var o=Oh(t[1],function(l){return{lhs:r,delay:0,rhs:l}});return[{type_:i,name:r,delay:n},o]}function Vh(e,n){if(n.length===2){var t=Lu(D(n,0)),r=D(n,1);return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:Zt,_1:"Expected two arguments to not gate",Error:new Error}}function Fh(e){switch(e){case"and":return 2;case"or":return 3;case"xor":return 4;default:return ve("impossible gate")}}function $h(e,n,t){if(t.length===3){var r=Lu(D(t,0)),i=D(t,1),o=D(t,2),l={TAG:3,_0:i,_1:e,_2:o};return{lhs:r,delay:n,rhs:l}}throw{RE_EXN_ID:Zt,_1:"Expected three arguments to gate",Error:new Error}}function Gh(e,n){if(n.length===3){var t=Lu(D(n,0)),r={TAG:2,_0:{TAG:3,_0:D(n,1),_1:3,_2:D(n,2)}};return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:Zt,_1:"Expected three arguments to gate",Error:new Error}}function yt(e){if(typeof e=="number")return[0];switch(e.TAG|0){case 0:var n=e._1,t=e._0;return n!==void 0?[{TAG:0,_0:t}].concat(yt(n)):[{TAG:0,_0:t}];case 1:return[{TAG:1,_0:e._0,_1:e._1,_2:e._2,_3:e._3}];case 2:return[{TAG:2,_0:e._0,_1:e._1}];case 3:return[{TAG:3,_0:e._0,_1:e._1}];case 4:var r=yt(e._1);return[{TAG:5,_0:e._0,_1:r.length+1|0}].concat(r);case 5:var i=yt(e._1),o=yt(e._2);return[{TAG:5,_0:e._0,_1:i.length+2|0}].concat(i,[{TAG:4,_0:o.length+1|0}],o);case 6:return Ue(function(l,u){return l.concat(yt(u))},[],e._0)}}function Uh(e,n){switch(n.TAG|0){case 0:var t=Q(bh,n._0);return{vars:e.vars.concat(t),nets:e.nets,conts:e.conts,procs:e.procs};case 1:var r=n._1,i=n._0,o=Nv(Q(function(S){return jh(i,r,S)},n._2)),l=Q(Dh,$t(rd,o[1]));return{vars:e.vars,nets:e.nets.concat(o[0]),conts:e.conts.concat(l),procs:e.procs};case 2:var u=n._2,a=n._1,s=n._0;if(s==="not"){var v=Q(function(S){return Vh(a,S)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(v),procs:e.procs}}if(s==="and"||s==="or"){var m=Fh(s),p=Q(function(S){return $h(m,a,S)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(p),procs:e.procs}}if(s==="nor"){var h=Q(function(S){return Gh(a,S)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(h),procs:e.procs}}throw{RE_EXN_ID:Zt,_1:"Unsupported gate: "+s,Error:new Error};case 3:var y=n._0,w=n._1,z=n._2,d={lhs:y,delay:w,rhs:z};return{vars:e.vars,nets:e.nets,conts:e.conts.concat([d]),procs:e.procs};case 4:var c=ed(n._0),f=yt(n._1),g={proc_type:c,stmts:f};return{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs.concat([g])}}}function Bh(e){return Ue(Uh,$c,e)}var Wo=Qc([["empty.sv",`module empty;

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
`],["invalid/var_var.sv",`module var_var;

logic a;

logic a;
   
endmodule
`],["invalid/cont_var4.sv",`module cont_var4;

logic a;

assign a = 0;

assign a = 1;

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
`]]),ne=id("Elaborator.ElaboratorError");function qh(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:ne,_1:"Expected data reference, found: "+Se(e),Error:new Error}}var Wh=[],Hh={env:void 0,out:Wh};function Dt(e,n){return{env:e.env,out:e.out.concat([n])}}function od(e,n){if(!Du(e.env,n))throw{RE_EXN_ID:ne,_1:"Undefined reference: "+n,Error:new Error}}function Qh(e,n){var t=ho(e.env,n);if(t!==void 0){if(t)return;throw{RE_EXN_ID:ne,_1:"Undefined var: "+n,Error:new Error}}throw{RE_EXN_ID:ne,_1:"Undefined var: "+n,Error:new Error}}function Xh(e,n){var t=ho(e.env,n);if(t!==void 0){if(!t)return;throw{RE_EXN_ID:ne,_1:"Undefined net: "+n,Error:new Error}}throw{RE_EXN_ID:ne,_1:"Undefined net: "+n,Error:new Error}}function Ze(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return;case 1:return od(e,t._0);case 2:n=t._0;continue;case 3:return Gt(function(r){return Ze(e,r)},[t._0,t._2]);case 4:return Gt(function(r){return Ze(e,r)},[t._0,t._1,t._2])}}}function ld(e,n){if(typeof n!="number")return n.TAG===3?Gt(function(t){return ld(e,t)},[n._0,n._1]):od(e,n._0)}function Kh(e,n){if(!(typeof n=="number"||n.TAG===0))return ld(e,n._0)}function Yh(e,n){if(n)return Ze(e,n._0)}function Zh(e,n){var t=n[1],r=n[0];if(Du(e.env,r))throw{RE_EXN_ID:ne,_1:"Name collision: "+r,Error:new Error};Mc(t,function(o){return Ze(e,o)});var i=Ye(e.env,r,{_0:rd(t)?1:0});return{env:i,out:e.out}}function Jh(e,n){var t=n[0];if(Du(e.env,t))throw{RE_EXN_ID:ne,_1:"Name collision: "+t,Error:new Error};Mc(n[1],function(i){return Ze(e,i)});var r=Ye(e.env,t,0);return{env:r,out:e.out}}function e0(e,n,t){var r=ho(e,t);if(r!==void 0&&r){var i=r._0;if(i!==2){if(i>=3)throw{RE_EXN_ID:ne,_1:"Cannot write to claimed variable: "+t,Error:new Error};return}if(n)throw{RE_EXN_ID:ne,_1:"Cannot write to claimed variable: "+t,Error:new Error}}}function Il(e,n,t,r){for(;;){var i=r;if(typeof i=="number")return t;switch(i.TAG|0){case 0:var o=i._1;if(Kh(t,i._0),o===void 0)return t;r=o;continue;case 1:var l=i._1;e0(e,n,l),Qh(t,l),Ze(t,i._3);var u=Ye(t.env,l,{_0:n?3:2});return{env:u,out:t.out};case 2:case 3:break;case 4:Ze(t,i._0),r=i._1;continue;case 5:return Ze(t,i._0),Ue(function(a,s){return Il(e,n,a,s)},t,[i._1,i._2]);case 6:return Ue(function(a,s){return Il(e,n,a,s)},t,i._0)}return Gt(function(a){return Yh(t,a)},i._1),t}}function n0(e,n){if(!(n.length<=0)){var t=qh(D(n,0));Xh(e,t),Gt(function(r){return Ze(e,r)},n)}}function mn(e){for(;;){var n=e;switch(n.TAG|0){case 0:return;case 1:return Rc([n._0]);case 2:e=n._0;continue;case 3:return On(mn(n._0),mn(n._2));case 4:return vr([mn(n._0),mn(n._1),mn(n._2)])}}}function t0(e){if(e)return mn(e._0)}function wt(e){for(;;){var n=e;if(typeof n=="number")return;switch(n.TAG|0){case 0:var t=n._1;if(t===void 0)return;e=t;continue;case 1:return mn(n._3);case 2:case 3:return vr(Q(t0,n._1));case 4:return On(mn(n._0),wt(n._1));case 5:return vr([mn(n._0),wt(n._1),wt(n._2)]);case 6:return vr(Q(wt,n._0))}}}function Ti(e){for(;;){var n=e;if(typeof n=="number")return;switch(n.TAG|0){case 1:return Rc([n._1]);case 4:e=n._1;continue;case 5:return On(Ti(n._1),Ti(n._2));case 6:return vr(Q(Ti,n._0));default:return}}}function ud(e){var n=wt(e),t=Ti(e),r=jc(Q(function(o){return{TAG:2,_0:o}},Sl(Mv(n,Sl(t))))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:e}}function tt(e){if(typeof e=="number")return e;switch(e.TAG|0){case 0:if(typeof e._0!="number")return e;var n=e._1;if(n===void 0)return{TAG:0,_0:{TAG:1,_0:0},_1:void 0};var t=tt(n),r=jc(Q(function(o){return{TAG:2,_0:o}},Sl(wt(t)))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:t};case 4:return{TAG:4,_0:e._0,_1:tt(e._1)};case 5:return{TAG:5,_0:e._0,_1:tt(e._1),_2:tt(e._2)};case 6:return{TAG:6,_0:Q(tt,e._0)};default:return e}}function _r(e){for(;;){var n=e;if(typeof n=="number")return 0;switch(n.TAG|0){case 0:var t=n._0;if(typeof t=="number"||t.TAG!==0)return 1;throw{RE_EXN_ID:ne,_1:"Time control not allowed inside new-type always",Error:new Error};case 1:if(n._2===void 0)return 0;throw{RE_EXN_ID:ne,_1:"Delayed assignments not allowed inside new-type always",Error:new Error};case 4:e=n._1;continue;case 5:return _r(n._1)+_r(n._2)|0;case 6:return bv(Q(_r,n._0));default:return 0}}}function r0(e,n){if(X(e,{_0:1})||X(e,{_0:3})){if(_r(n)===0)return;throw{RE_EXN_ID:ne,_1:"Event control not allowed inside always_comb/always_latch",Error:new Error}}if(X(e,{_0:2})&&_r(n)!==1)throw{RE_EXN_ID:ne,_1:"Must be one and one only event control inside always_ff",Error:new Error}}function i0(e,n){if(!e)return tt(n);var t=e._0;return t!==1&&t<3?tt(n):ud(n)}function o0(e){if(typeof e!="number")switch(e.TAG|0){case 0:var n=e._0;return n===0?void 0:{TAG:0,_0:n};case 1:case 2:throw{RE_EXN_ID:ne,_1:"Delay type not supported in continuously assignments to variables yet",Error:new Error}}}function l0(e,n){var t=n[2],r=n[1],i=n[0],o=ho(e.env,i);if(o!==void 0)if(o)switch(o._0){case 0:Ze(e,t);var l=o0(r),u=ud({TAG:1,_0:0,_1:i,_2:l,_3:t}),a={TAG:4,_0:"always_comb",_1:u},s=Ye(e.env,i,{_0:3});return Dt({env:s,out:e.out},a);case 1:throw{RE_EXN_ID:ne,_1:"Not allowed to write continuously to variable with initialisation: "+i,Error:new Error};case 2:case 3:throw{RE_EXN_ID:ne,_1:"Not allowed to write continuously to already claimed variable: "+i,Error:new Error}}else return Ze(e,t),Dt(e,{TAG:3,_0:i,_1:r,_2:t});else throw{RE_EXN_ID:ne,_1:"Undefined reference: "+i,Error:new Error}}function u0(e){return X(e,{_0:1})||X(e,{_0:3})?!0:X(e,{_0:2})}function a0(e,n){var t=n[1],r=n[0],i=ed(r);r0(i,t);var o=Il(e.env,u0(i),e,t),l=i0(i,t);return Dt(o,{TAG:4,_0:r,_1:l})}function s0(e,n){switch(n.TAG|0){case 0:var t=Ue(Zh,e,n._0);return Dt(t,n);case 1:var r=Ue(Jh,e,n._2);return Dt(r,n);case 2:return Gt(function(i){return n0(e,i)},n._2),Dt(e,n);case 3:return l0(e,[n._0,n._1,n._2]);case 4:return a0(e,[n._0,n._1])}}function c0(e){return Ue(s0,Hh,e).out}function d0(e){return Mh(e)?e:{RE_EXN_ID:"JsError",_1:e}}function f0(e){var n=Qa($c),t=Xa(n),r=Ft.useState(function(){return t}),i=r[1],o=r[0],l=function(E){dn(i,function(_){return Ya(_)?wh(_):_})},u=function(E){dn(i,function(_){return Za(_)?kh(_):_})},a=function(E){dn(i,function(_){return Ja(_)?Sh(_):_})},s=Ft.useState(function(){return ut(Wo,"empty.sv")}),v=s[1],m=s[0],p=function(E){var _=Rh(m);if(_.TAG===0){var I;try{I=Qa(Bh(c0(_._0)))}catch(te){var P=d0(te);if(P.RE_EXN_ID===ne){window.alert("Elaboration failed: "+P._1);return}if(P.RE_EXN_ID===Zt){window.alert("Compilation failed: "+P._1);return}throw P}var W=Xa(I);return dn(i,function(te){return W})}window.alert("Could not parse Verilog code: "+_._0)},h=function(E){dn(v,function(_){return E.target.value}),E.preventDefault()},y=function(E){var _=E.target.value;dn(v,function(I){return ut(Wo,_)}),E.preventDefault()},w="Simulation time: "+String(o.time)+" ("+th(o.status)+")",z=vn(Zm(o.env),function(E){var _=E[0];return A.jsx("li",{children:_+": "+lt(E[1])},_)}),d=jo(o.cont_env,function(E,_){return A.jsx("li",{children:D(o.vmodule.conts,E).lhs+"("+String(E)+"): "+lt(_)},String(E))}),c=jo(o.proc_env,function(E,_){return A.jsx("li",{children:"state = "+jm(_.state)+", pc = "+String(_.pc)},String(E))}),f=vn(o.queue,function(E){var _=E[1],I=E[0],P=jo(_.active,function(se,Ee){var he=Ka(o,I);return A.jsx("li",{children:Go(o.vmodule.conts,Ee),className:he?"active":"",onClick:function(x){return dn(i,function(C){return Ka(C,I)?yh(C,se):C})}},Uo(Ee))}),W=vn(_.inactive,function(se){return A.jsx("li",{children:Go(o.vmodule.conts,se)},Uo(se))}),te=vn(_.nba,function(se){return A.jsx("li",{children:Go(o.vmodule.conts,se)},Uo(se))}),ke=Ya(o),tn=Za(o);return A.jsxs("li",{children:[A.jsx("b",{children:"Time: "+String(I)}),A.jsxs("ul",{children:[A.jsxs("li",{children:["Active:",A.jsx("ul",{children:P})]}),A.jsxs("li",{children:["Inactive:",A.jsx("ul",{children:W})],className:ke?"active":"",onClick:l}),A.jsxs("li",{children:["NBA:",A.jsx("ul",{children:te})],className:tn?"active":"",onClick:u})]})]},"Time"+String(I))}),g=$m(o.monitor),S=vn(Jm(Wo),function(E){return A.jsx("option",{children:E},E)}),N=Ja(o);return A.jsx("table",{children:A.jsx("tbody",{children:A.jsxs("tr",{children:[A.jsxs("td",{children:[A.jsx("div",{children:A.jsx("select",{children:S,defaultValue:"empty.sv",onChange:y})}),A.jsx("div",{children:A.jsx("textarea",{cols:60,rows:20,value:m,onChange:h})}),A.jsx("div",{children:A.jsx("button",{children:"Parse",onClick:p})})]}),A.jsxs("td",{children:[A.jsx("p",{children:"Normalised Verilog module:",id:"code-render-title"}),A.jsx("div",{children:Fm(o.vmodule,o.proc_env),id:"code-render"})]}),A.jsxs("td",{children:[A.jsx("p",{children:w,className:N?"active":"",id:"simulation-time",onClick:a}),A.jsx("p",{children:"Environment:"}),A.jsx("ul",{children:z}),A.jsx("p",{children:"Drivers (continuous assignments):"}),A.jsx("ul",{children:d}),A.jsx("p",{children:"Processes:"}),A.jsx("ol",{children:c}),A.jsx("p",{children:"Events:",className:""}),A.jsx("ul",{children:f}),A.jsx("p",{children:"Monitor:"}),A.jsx("p",{children:g})]}),A.jsxs("td",{children:[A.jsx("p",{children:"Output:",id:"output"}),A.jsx("pre",{children:o.output})]})]})}),id:"main-table"})}var p0=f0;function v0(e){if(e!==void 0)return Wr(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}var ad={exports:{}},Le={},sd={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,C){var R=x.length;x.push(C);e:for(;0<R;){var M=R-1>>>1,V=x[M];if(0<i(V,C))x[M]=C,x[R]=V,R=M;else break e}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var C=x[0],R=x.pop();if(R!==C){x[0]=R;e:for(var M=0,V=x.length,Tn=V>>>1;M<Tn;){var We=2*(M+1)-1,Nn=x[We],Me=We+1,Cn=x[Me];if(0>i(Nn,R))Me<V&&0>i(Cn,Nn)?(x[M]=Cn,x[Me]=R,M=Me):(x[M]=Nn,x[We]=R,M=We);else if(Me<V&&0>i(Cn,R))x[M]=Cn,x[Me]=R,M=Me;else break e}}return C}function i(x,C){var R=x.sortIndex-C.sortIndex;return R!==0?R:x.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var a=[],s=[],v=1,m=null,p=3,h=!1,y=!1,w=!1,z=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var C=t(s);C!==null;){if(C.callback===null)r(s);else if(C.startTime<=x)r(s),C.sortIndex=C.expirationTime,n(a,C);else break;C=t(s)}}function g(x){if(w=!1,f(x),!y)if(t(a)!==null)y=!0,Ee(S);else{var C=t(s);C!==null&&he(g,C.startTime-x)}}function S(x,C){y=!1,w&&(w=!1,d(_),_=-1),h=!0;var R=p;try{for(f(C),m=t(a);m!==null&&(!(m.expirationTime>C)||x&&!W());){var M=m.callback;if(typeof M=="function"){m.callback=null,p=m.priorityLevel;var V=M(m.expirationTime<=C);C=e.unstable_now(),typeof V=="function"?m.callback=V:m===t(a)&&r(a),f(C)}else r(a);m=t(a)}if(m!==null)var Tn=!0;else{var We=t(s);We!==null&&he(g,We.startTime-C),Tn=!1}return Tn}finally{m=null,p=R,h=!1}}var N=!1,E=null,_=-1,I=5,P=-1;function W(){return!(e.unstable_now()-P<I)}function te(){if(E!==null){var x=e.unstable_now();P=x;var C=!0;try{C=E(!0,x)}finally{C?ke():(N=!1,E=null)}}else N=!1}var ke;if(typeof c=="function")ke=function(){c(te)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,se=tn.port2;tn.port1.onmessage=te,ke=function(){se.postMessage(null)}}else ke=function(){z(te,0)};function Ee(x){E=x,N||(N=!0,ke())}function he(x,C){_=z(function(){x(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,Ee(S))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(x){switch(p){case 1:case 2:case 3:var C=3;break;default:C=p}var R=p;p=C;try{return x()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,C){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var R=p;p=x;try{return C()}finally{p=R}},e.unstable_scheduleCallback=function(x,C,R){var M=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?M+R:M):R=M,x){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=R+V,x={id:v++,callback:C,priorityLevel:x,startTime:R,expirationTime:V,sortIndex:-1},R>M?(x.sortIndex=R,n(s,x),t(a)===null&&x===t(s)&&(w?(d(_),_=-1):w=!0,he(g,R-M))):(x.sortIndex=V,n(a,x),y||h||(y=!0,Ee(S))),x},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(x){var C=p;return function(){var R=p;p=C;try{return x.apply(this,arguments)}finally{p=R}}}})(cd);sd.exports=cd;var m0=sd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd=Ft,De=m0;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fd=new Set,Cr={};function ht(e,n){Bt(e,n),Bt(e+"Capture",n)}function Bt(e,n){for(Cr[e]=n,e=0;e<n.length;e++)fd.add(n[e])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rl=Object.prototype.hasOwnProperty,h0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,us={},as={};function _0(e){return Rl.call(as,e)?!0:Rl.call(us,e)?!1:h0.test(e)?as[e]=!0:(us[e]=!0,!1)}function g0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function y0(e,n,t,r){if(n===null||typeof n>"u"||g0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function we(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new we(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ou=/[\-:]([a-z])/g;function Mu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ou,Mu);ae[n]=new we(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ou,Mu);ae[n]=new we(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ou,Mu);ae[n]=new we(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function bu(e,n,t,r){var i=ae.hasOwnProperty(n)?ae[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(y0(n,t,i,r)&&(t=null),r||i===null?_0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var xn=dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),kt=Symbol.for("react.portal"),Et=Symbol.for("react.fragment"),ju=Symbol.for("react.strict_mode"),Dl=Symbol.for("react.profiler"),pd=Symbol.for("react.provider"),vd=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Ol=Symbol.for("react.suspense_list"),Fu=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),md=Symbol.for("react.offscreen"),ss=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=ss&&e[ss]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ho;function sr(e){if(Ho===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ho=n&&n[1]||""}return`
`+Ho+e}var Qo=!1;function Xo(e,n){if(!e||Qo)return"";Qo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=u);break}}}finally{Qo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?sr(e):""}function w0(e){switch(e.tag){case 5:return sr(e.type);case 16:return sr("Lazy");case 13:return sr("Suspense");case 19:return sr("SuspenseList");case 0:case 2:case 15:return e=Xo(e.type,!1),e;case 11:return e=Xo(e.type.render,!1),e;case 1:return e=Xo(e.type,!0),e;default:return""}}function Ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Et:return"Fragment";case kt:return"Portal";case Dl:return"Profiler";case ju:return"StrictMode";case Ll:return"Suspense";case Ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vd:return(e.displayName||"Context")+".Consumer";case pd:return(e._context.displayName||"Context")+".Provider";case Vu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fu:return n=e.displayName||null,n!==null?n:Ml(e.type)||"Memo";case In:n=e._payload,e=e._init;try{return Ml(e(n))}catch{}}return null}function k0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(n);case 8:return n===ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function E0(e){var n=hd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function li(e){e._valueTracker||(e._valueTracker=E0(e))}function _d(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=hd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,n){var t=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function cs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Hn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function gd(e,n){n=n.checked,n!=null&&bu(e,"checked",n,!1)}function jl(e,n){gd(e,n);var t=Hn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Vl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Vl(e,n.type,Hn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ds(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Vl(e,n,t){(n!=="number"||Ui(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var cr=Array.isArray;function Lt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Hn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Fl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(cr(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Hn(t)}}function yd(e,n){var t=Hn(n.value),r=Hn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ps(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function wd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $l(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?wd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,kd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ar(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S0=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){S0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),gr[n]=gr[e]})});function Ed(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||gr.hasOwnProperty(e)&&gr[e]?(""+n).trim():n+"px"}function Sd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Ed(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var x0=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(e,n){if(n){if(x0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Ul(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ql=null,Ot=null,Mt=null;function vs(e){if(e=Xr(e)){if(typeof ql!="function")throw Error(k(280));var n=e.stateNode;n&&(n=ko(n),ql(e.stateNode,e.type,n))}}function xd(e){Ot?Mt?Mt.push(e):Mt=[e]:Ot=e}function Td(){if(Ot){var e=Ot,n=Mt;if(Mt=Ot=null,vs(e),n)for(e=0;e<n.length;e++)vs(n[e])}}function Nd(e,n){return e(n)}function Cd(){}var Ko=!1;function Ad(e,n,t){if(Ko)return e(n,t);Ko=!0;try{return Nd(e,n,t)}finally{Ko=!1,(Ot!==null||Mt!==null)&&(Cd(),Td())}}function Pr(e,n){var t=e.stateNode;if(t===null)return null;var r=ko(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Wl=!1;if(wn)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Wl=!1}function T0(e,n,t,r,i,o,l,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(v){this.onError(v)}}var yr=!1,Bi=null,qi=!1,Hl=null,N0={onError:function(e){yr=!0,Bi=e}};function C0(e,n,t,r,i,o,l,u,a){yr=!1,Bi=null,T0.apply(N0,arguments)}function A0(e,n,t,r,i,o,l,u,a){if(C0.apply(this,arguments),yr){if(yr){var s=Bi;yr=!1,Bi=null}else throw Error(k(198));qi||(qi=!0,Hl=s)}}function _t(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Pd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ms(e){if(_t(e)!==e)throw Error(k(188))}function P0(e){var n=e.alternate;if(!n){if(n=_t(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return ms(i),e;if(o===r)return ms(i),n;o=o.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function zd(e){return e=P0(e),e!==null?Id(e):null}function Id(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Id(e);if(n!==null)return n;e=e.sibling}return null}var Rd=De.unstable_scheduleCallback,hs=De.unstable_cancelCallback,z0=De.unstable_shouldYield,I0=De.unstable_requestPaint,K=De.unstable_now,R0=De.unstable_getCurrentPriorityLevel,Gu=De.unstable_ImmediatePriority,Dd=De.unstable_UserBlockingPriority,Wi=De.unstable_NormalPriority,D0=De.unstable_LowPriority,Ld=De.unstable_IdlePriority,_o=null,sn=null;function L0(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:b0,O0=Math.log,M0=Math.LN2;function b0(e){return e>>>=0,e===0?32:31-(O0(e)/M0|0)|0}var ai=64,si=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~i;u!==0?r=dr(u):(o&=l,o!==0&&(r=dr(o)))}else l=t&~i,l!==0?r=dr(l):o!==0&&(r=dr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Je(n),i=1<<t,r|=e[t],n&=~i;return r}function j0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Je(o),u=1<<l,a=i[l];a===-1?(!(u&t)||u&r)&&(i[l]=j0(u,n)):a<=n&&(e.expiredLanes|=u),o&=~u}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Od(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Yo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Hr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Je(n),e[n]=t}function F0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Je(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Uu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Je(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var b=0;function Md(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bd,Bu,jd,Vd,Fd,Xl=!1,ci=[],Vn=null,Fn=null,$n=null,zr=new Map,Ir=new Map,Dn=[],$0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _s(e,n){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":zr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(n.pointerId)}}function rr(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Xr(n),n!==null&&Bu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function G0(e,n,t,r,i){switch(n){case"focusin":return Vn=rr(Vn,e,n,t,r,i),!0;case"dragenter":return Fn=rr(Fn,e,n,t,r,i),!0;case"mouseover":return $n=rr($n,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return zr.set(o,rr(zr.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ir.set(o,rr(Ir.get(o)||null,e,n,t,r,i)),!0}return!1}function $d(e){var n=rt(e.target);if(n!==null){var t=_t(n);if(t!==null){if(n=t.tag,n===13){if(n=Pd(t),n!==null){e.blockedOn=n,Fd(e.priority,function(){jd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ni(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Kl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Bl=r,t.target.dispatchEvent(r),Bl=null}else return n=Xr(t),n!==null&&Bu(n),e.blockedOn=t,!1;n.shift()}return!0}function gs(e,n,t){Ni(e)&&t.delete(n)}function U0(){Xl=!1,Vn!==null&&Ni(Vn)&&(Vn=null),Fn!==null&&Ni(Fn)&&(Fn=null),$n!==null&&Ni($n)&&($n=null),zr.forEach(gs),Ir.forEach(gs)}function ir(e,n){e.blockedOn===n&&(e.blockedOn=null,Xl||(Xl=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,U0)))}function Rr(e){function n(i){return ir(i,e)}if(0<ci.length){ir(ci[0],e);for(var t=1;t<ci.length;t++){var r=ci[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&ir(Vn,e),Fn!==null&&ir(Fn,e),$n!==null&&ir($n,e),zr.forEach(n),Ir.forEach(n),t=0;t<Dn.length;t++)r=Dn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&(t=Dn[0],t.blockedOn===null);)$d(t),t.blockedOn===null&&Dn.shift()}var bt=xn.ReactCurrentBatchConfig,Qi=!0;function B0(e,n,t,r){var i=b,o=bt.transition;bt.transition=null;try{b=1,qu(e,n,t,r)}finally{b=i,bt.transition=o}}function q0(e,n,t,r){var i=b,o=bt.transition;bt.transition=null;try{b=4,qu(e,n,t,r)}finally{b=i,bt.transition=o}}function qu(e,n,t,r){if(Qi){var i=Kl(e,n,t,r);if(i===null)ul(e,n,r,Xi,t),_s(e,r);else if(G0(i,e,n,t,r))r.stopPropagation();else if(_s(e,r),n&4&&-1<$0.indexOf(e)){for(;i!==null;){var o=Xr(i);if(o!==null&&bd(o),o=Kl(e,n,t,r),o===null&&ul(e,n,r,Xi,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else ul(e,n,r,null,t)}}var Xi=null;function Kl(e,n,t,r){if(Xi=null,e=$u(r),e=rt(e),e!==null)if(n=_t(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Pd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Xi=e,null}function Gd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R0()){case Gu:return 1;case Dd:return 4;case Wi:case D0:return 16;case Ld:return 536870912;default:return 16}default:return 16}}var Mn=null,Wu=null,Ci=null;function Ud(){if(Ci)return Ci;var e,n=Wu,t=n.length,r,i="value"in Mn?Mn.value:Mn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Ci=i.slice(e,1<r?1-r:void 0)}function Ai(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function ys(){return!1}function Oe(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?di:ys,this.isPropagationStopped=ys,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),n}var Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=Oe(Jt),Qr=q({},Jt,{view:0,detail:0}),W0=Oe(Qr),Zo,Jo,or,go=q({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(Zo=e.screenX-or.screenX,Jo=e.screenY-or.screenY):Jo=Zo=0,or=e),Zo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),ws=Oe(go),H0=q({},go,{dataTransfer:0}),Q0=Oe(H0),X0=q({},Qr,{relatedTarget:0}),el=Oe(X0),K0=q({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=Oe(K0),Z0=q({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J0=Oe(Z0),e1=q({},Jt,{data:0}),ks=Oe(e1),n1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=r1[e])?!!n[e]:!1}function Qu(){return i1}var o1=q({},Qr,{key:function(e){if(e.key){var n=n1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l1=Oe(o1),u1=q({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Es=Oe(u1),a1=q({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),s1=Oe(a1),c1=q({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),d1=Oe(c1),f1=q({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p1=Oe(f1),v1=[9,13,27,32],Xu=wn&&"CompositionEvent"in window,wr=null;wn&&"documentMode"in document&&(wr=document.documentMode);var m1=wn&&"TextEvent"in window&&!wr,Bd=wn&&(!Xu||wr&&8<wr&&11>=wr),Ss=String.fromCharCode(32),xs=!1;function qd(e,n){switch(e){case"keyup":return v1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var St=!1;function h1(e,n){switch(e){case"compositionend":return Wd(n);case"keypress":return n.which!==32?null:(xs=!0,Ss);case"textInput":return e=n.data,e===Ss&&xs?null:e;default:return null}}function _1(e,n){if(St)return e==="compositionend"||!Xu&&qd(e,n)?(e=Ud(),Ci=Wu=Mn=null,St=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bd&&n.locale!=="ko"?null:n.data;default:return null}}var g1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!g1[e.type]:n==="textarea"}function Hd(e,n,t,r){xd(r),n=Ki(n,"onChange"),0<n.length&&(t=new Hu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var kr=null,Dr=null;function y1(e){of(e,0)}function yo(e){var n=Nt(e);if(_d(n))return e}function w1(e,n){if(e==="change")return n}var Qd=!1;if(wn){var nl;if(wn){var tl="oninput"in document;if(!tl){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),tl=typeof Ns.oninput=="function"}nl=tl}else nl=!1;Qd=nl&&(!document.documentMode||9<document.documentMode)}function Cs(){kr&&(kr.detachEvent("onpropertychange",Xd),Dr=kr=null)}function Xd(e){if(e.propertyName==="value"&&yo(Dr)){var n=[];Hd(n,Dr,e,$u(e)),Ad(y1,n)}}function k1(e,n,t){e==="focusin"?(Cs(),kr=n,Dr=t,kr.attachEvent("onpropertychange",Xd)):e==="focusout"&&Cs()}function E1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yo(Dr)}function S1(e,n){if(e==="click")return yo(n)}function x1(e,n){if(e==="input"||e==="change")return yo(n)}function T1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var nn=typeof Object.is=="function"?Object.is:T1;function Lr(e,n){if(nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Rl.call(n,i)||!nn(e[i],n[i]))return!1}return!0}function As(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ps(e,n){var t=As(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=As(t)}}function Kd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Kd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yd(){for(var e=window,n=Ui();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ui(e.document)}return n}function Ku(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function N1(e){var n=Yd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Kd(t.ownerDocument.documentElement,t)){if(r!==null&&Ku(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ps(t,o);var l=Ps(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C1=wn&&"documentMode"in document&&11>=document.documentMode,xt=null,Yl=null,Er=null,Zl=!1;function zs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Zl||xt==null||xt!==Ui(r)||(r=xt,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Lr(Er,r)||(Er=r,r=Ki(Yl,"onSelect"),0<r.length&&(n=new Hu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=xt)))}function fi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Tt={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},rl={},Zd={};wn&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete Tt.animationend.animation,delete Tt.animationiteration.animation,delete Tt.animationstart.animation),"TransitionEvent"in window||delete Tt.transitionend.transition);function wo(e){if(rl[e])return rl[e];if(!Tt[e])return e;var n=Tt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Zd)return rl[e]=n[t];return e}var Jd=wo("animationend"),ef=wo("animationiteration"),nf=wo("animationstart"),tf=wo("transitionend"),rf=new Map,Is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,n){rf.set(e,n),ht(n,[e])}for(var il=0;il<Is.length;il++){var ol=Is[il],A1=ol.toLowerCase(),P1=ol[0].toUpperCase()+ol.slice(1);Kn(A1,"on"+P1)}Kn(Jd,"onAnimationEnd");Kn(ef,"onAnimationIteration");Kn(nf,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(tf,"onTransitionEnd");Bt("onMouseEnter",["mouseout","mouseover"]);Bt("onMouseLeave",["mouseout","mouseover"]);Bt("onPointerEnter",["pointerout","pointerover"]);Bt("onPointerLeave",["pointerout","pointerover"]);ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function Rs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,A0(r,n,void 0,e),e.currentTarget=null}function of(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==o&&i.isPropagationStopped())break e;Rs(i,u,s),o=a}else for(l=0;l<r.length;l++){if(u=r[l],a=u.instance,s=u.currentTarget,u=u.listener,a!==o&&i.isPropagationStopped())break e;Rs(i,u,s),o=a}}}if(qi)throw e=Hl,qi=!1,Hl=null,e}function F(e,n){var t=n[ru];t===void 0&&(t=n[ru]=new Set);var r=e+"__bubble";t.has(r)||(lf(n,e,2,!1),t.add(r))}function ll(e,n,t){var r=0;n&&(r|=4),lf(t,e,r,n)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[pi]){e[pi]=!0,fd.forEach(function(t){t!=="selectionchange"&&(z1.has(t)||ll(t,!1,e),ll(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[pi]||(n[pi]=!0,ll("selectionchange",!1,n))}}function lf(e,n,t,r){switch(Gd(n)){case 1:var i=B0;break;case 4:i=q0;break;default:i=qu}t=i.bind(null,n,t,e),i=void 0,!Wl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ul(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;u!==null;){if(l=rt(u),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}u=u.parentNode}}r=r.return}Ad(function(){var s=o,v=$u(t),m=[];e:{var p=rf.get(e);if(p!==void 0){var h=Hu,y=e;switch(e){case"keypress":if(Ai(t)===0)break e;case"keydown":case"keyup":h=l1;break;case"focusin":y="focus",h=el;break;case"focusout":y="blur",h=el;break;case"beforeblur":case"afterblur":h=el;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=s1;break;case Jd:case ef:case nf:h=Y0;break;case tf:h=d1;break;case"scroll":h=W0;break;case"wheel":h=p1;break;case"copy":case"cut":case"paste":h=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Es}var w=(n&4)!==0,z=!w&&e==="scroll",d=w?p!==null?p+"Capture":null:p;w=[];for(var c=s,f;c!==null;){f=c;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Pr(c,d),g!=null&&w.push(Mr(c,g,f)))),z)break;c=c.return}0<w.length&&(p=new h(p,y,null,t,v),m.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==Bl&&(y=t.relatedTarget||t.fromElement)&&(rt(y)||y[kn]))break e;if((h||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=t.relatedTarget||t.toElement,h=s,y=y?rt(y):null,y!==null&&(z=_t(y),y!==z||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=s),h!==y)){if(w=ws,g="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Es,g="onPointerLeave",d="onPointerEnter",c="pointer"),z=h==null?p:Nt(h),f=y==null?p:Nt(y),p=new w(g,c+"leave",h,t,v),p.target=z,p.relatedTarget=f,g=null,rt(v)===s&&(w=new w(d,c+"enter",y,t,v),w.target=f,w.relatedTarget=z,g=w),z=g,h&&y)n:{for(w=h,d=y,c=0,f=w;f;f=gt(f))c++;for(f=0,g=d;g;g=gt(g))f++;for(;0<c-f;)w=gt(w),c--;for(;0<f-c;)d=gt(d),f--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break n;w=gt(w),d=gt(d)}w=null}else w=null;h!==null&&Ds(m,p,h,w,!1),y!==null&&z!==null&&Ds(m,z,y,w,!0)}}e:{if(p=s?Nt(s):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var S=w1;else if(Ts(p))if(Qd)S=x1;else{S=E1;var N=k1}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=S1);if(S&&(S=S(e,s))){Hd(m,S,t,v);break e}N&&N(e,p,s),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&Vl(p,"number",p.value)}switch(N=s?Nt(s):window,e){case"focusin":(Ts(N)||N.contentEditable==="true")&&(xt=N,Yl=s,Er=null);break;case"focusout":Er=Yl=xt=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,zs(m,t,v);break;case"selectionchange":if(C1)break;case"keydown":case"keyup":zs(m,t,v)}var E;if(Xu)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else St?qd(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Bd&&t.locale!=="ko"&&(St||_!=="onCompositionStart"?_==="onCompositionEnd"&&St&&(E=Ud()):(Mn=v,Wu="value"in Mn?Mn.value:Mn.textContent,St=!0)),N=Ki(s,_),0<N.length&&(_=new ks(_,e,null,t,v),m.push({event:_,listeners:N}),E?_.data=E:(E=Wd(t),E!==null&&(_.data=E)))),(E=m1?h1(e,t):_1(e,t))&&(s=Ki(s,"onBeforeInput"),0<s.length&&(v=new ks("onBeforeInput","beforeinput",null,t,v),m.push({event:v,listeners:s}),v.data=E))}of(m,n)})}function Mr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ki(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pr(e,t),o!=null&&r.unshift(Mr(e,o,i)),o=Pr(e,n),o!=null&&r.push(Mr(e,o,i))),e=e.return}return r}function gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ds(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=Pr(t,o),a!=null&&l.unshift(Mr(t,a,u))):i||(a=Pr(t,o),a!=null&&l.push(Mr(t,a,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var I1=/\r\n?/g,R1=/\u0000|\uFFFD/g;function Ls(e){return(typeof e=="string"?e:""+e).replace(I1,`
`).replace(R1,"")}function vi(e,n,t){if(n=Ls(n),Ls(e)!==n&&t)throw Error(k(425))}function Yi(){}var Jl=null,eu=null;function nu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,D1=typeof clearTimeout=="function"?clearTimeout:void 0,Os=typeof Promise=="function"?Promise:void 0,L1=typeof queueMicrotask=="function"?queueMicrotask:typeof Os<"u"?function(e){return Os.resolve(null).then(e).catch(O1)}:tu;function O1(e){setTimeout(function(){throw e})}function al(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Rr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Rr(n)}function Gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ms(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),ln="__reactFiber$"+er,br="__reactProps$"+er,kn="__reactContainer$"+er,ru="__reactEvents$"+er,M1="__reactListeners$"+er,b1="__reactHandles$"+er;function rt(e){var n=e[ln];if(n)return n;for(var t=e.parentNode;t;){if(n=t[kn]||t[ln]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ms(e);e!==null;){if(t=e[ln])return t;e=Ms(e)}return n}e=t,t=e.parentNode}return null}function Xr(e){return e=e[ln]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ko(e){return e[br]||null}var iu=[],Ct=-1;function Yn(e){return{current:e}}function $(e){0>Ct||(e.current=iu[Ct],iu[Ct]=null,Ct--)}function j(e,n){Ct++,iu[Ct]=e.current,e.current=n}var Qn={},me=Yn(Qn),Ne=Yn(!1),ct=Qn;function qt(e,n){var t=e.type.contextTypes;if(!t)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function Zi(){$(Ne),$(me)}function bs(e,n,t){if(me.current!==Qn)throw Error(k(168));j(me,n),j(Ne,t)}function uf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,k0(e)||"Unknown",i));return q({},t,r)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,ct=me.current,j(me,e),j(Ne,Ne.current),!0}function js(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=uf(e,n,ct),r.__reactInternalMemoizedMergedChildContext=e,$(Ne),$(me),j(me,e)):$(Ne),j(Ne,t)}var pn=null,Eo=!1,sl=!1;function af(e){pn===null?pn=[e]:pn.push(e)}function j1(e){Eo=!0,af(e)}function Zn(){if(!sl&&pn!==null){sl=!0;var e=0,n=b;try{var t=pn;for(b=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}pn=null,Eo=!1}catch(i){throw pn!==null&&(pn=pn.slice(e+1)),Rd(Gu,Zn),i}finally{b=n,sl=!1}}return null}var At=[],Pt=0,eo=null,no=0,je=[],Ve=0,dt=null,hn=1,_n="";function et(e,n){At[Pt++]=no,At[Pt++]=eo,eo=e,no=n}function sf(e,n,t){je[Ve++]=hn,je[Ve++]=_n,je[Ve++]=dt,dt=e;var r=hn;e=_n;var i=32-Je(r)-1;r&=~(1<<i),t+=1;var o=32-Je(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,hn=1<<32-Je(n)+i|t<<i|r,_n=o+e}else hn=1<<o|t<<i|r,_n=e}function Yu(e){e.return!==null&&(et(e,1),sf(e,1,0))}function Zu(e){for(;e===eo;)eo=At[--Pt],At[Pt]=null,no=At[--Pt],At[Pt]=null;for(;e===dt;)dt=je[--Ve],je[Ve]=null,_n=je[--Ve],je[Ve]=null,hn=je[--Ve],je[Ve]=null}var Re=null,Ie=null,G=!1,Ke=null;function cf(e,n){var t=$e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Vs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Re=e,Ie=Gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Re=e,Ie=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=dt!==null?{id:hn,overflow:_n}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=$e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Re=e,Ie=null,!0):!1;default:return!1}}function ou(e){return(e.mode&1)!==0&&(e.flags&128)===0}function lu(e){if(G){var n=Ie;if(n){var t=n;if(!Vs(e,n)){if(ou(e))throw Error(k(418));n=Gn(t.nextSibling);var r=Re;n&&Vs(e,n)?cf(r,t):(e.flags=e.flags&-4097|2,G=!1,Re=e)}}else{if(ou(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,Re=e}}}function Fs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function mi(e){if(e!==Re)return!1;if(!G)return Fs(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!nu(e.type,e.memoizedProps)),n&&(n=Ie)){if(ou(e))throw df(),Error(k(418));for(;n;)cf(e,n),n=Gn(n.nextSibling)}if(Fs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ie=Gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ie=null}}else Ie=Re?Gn(e.stateNode.nextSibling):null;return!0}function df(){for(var e=Ie;e;)e=Gn(e.nextSibling)}function Wt(){Ie=Re=null,G=!1}function Ju(e){Ke===null?Ke=[e]:Ke.push(e)}var V1=xn.ReactCurrentBatchConfig;function Qe(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var to=Yn(null),ro=null,zt=null,ea=null;function na(){ea=zt=ro=null}function ta(e){var n=to.current;$(to),e._currentValue=n}function uu(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function jt(e,n){ro=e,ea=zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Te=!0),e.firstContext=null)}function Be(e){var n=e._currentValue;if(ea!==e)if(e={context:e,memoizedValue:n,next:null},zt===null){if(ro===null)throw Error(k(308));zt=e,ro.dependencies={lanes:0,firstContext:e}}else zt=zt.next=e;return n}var it=null;function ra(e){it===null?it=[e]:it.push(e)}function ff(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ra(n)):(t.next=i.next,i.next=t),n.interleaved=t,En(e,r)}function En(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Rn=!1;function ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,En(e,t)}return i=r.interleaved,i===null?(n.next=n,ra(r)):(n.next=i.next,i.next=n),r.interleaved=n,En(e,t)}function Pi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Uu(e,t)}}function $s(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function io(e,n,t,r){var i=e.updateQueue;Rn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,l===null?o=s:l.next=s,l=a;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==l&&(u===null?v.firstBaseUpdate=s:u.next=s,v.lastBaseUpdate=a))}if(o!==null){var m=i.baseState;l=0,v=s=a=null,u=o;do{var p=u.lane,h=u.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,w=u;switch(p=n,h=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(h,m,p);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(h,m,p):y,p==null)break e;m=q({},m,p);break e;case 2:Rn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else h={eventTime:h,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(s=v=h,a=m):v=v.next=h,l|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(v===null&&(a=m),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);pt|=l,e.lanes=l,e.memoizedState=m}}function Gs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var vf=new dd.Component().refs;function au(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var So={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),i=qn(e),o=gn(r,i);o.payload=n,t!=null&&(o.callback=t),n=Un(e,o,i),n!==null&&(en(n,e,i,r),Pi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),i=qn(e),o=gn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Un(e,o,i),n!==null&&(en(n,e,i,r),Pi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=qn(e),i=gn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Un(e,i,r),n!==null&&(en(n,e,r,t),Pi(n,e,r))}};function Us(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Lr(t,r)||!Lr(i,o):!0}function mf(e,n,t){var r=!1,i=Qn,o=n.contextType;return typeof o=="object"&&o!==null?o=Be(o):(i=Ce(n)?ct:me.current,r=n.contextTypes,o=(r=r!=null)?qt(e,i):Qn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=So,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Bs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&So.enqueueReplaceState(n,n.state,null)}function su(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=vf,ia(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Be(o):(o=Ce(n)?ct:me.current,i.context=qt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(au(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&So.enqueueReplaceState(i,i.state,null),io(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var u=i.refs;u===vf&&(u=i.refs={}),l===null?delete u[o]:u[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function hi(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function qs(e){var n=e._init;return n(e._payload)}function hf(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Wn(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,c,f,g){return c===null||c.tag!==6?(c=hl(f,d.mode,g),c.return=d,c):(c=i(c,f),c.return=d,c)}function a(d,c,f,g){var S=f.type;return S===Et?v(d,c,f.props.children,g,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===In&&qs(S)===c.type)?(g=i(c,f.props),g.ref=lr(d,c,f),g.return=d,g):(g=Oi(f.type,f.key,f.props,null,d.mode,g),g.ref=lr(d,c,f),g.return=d,g)}function s(d,c,f,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=_l(f,d.mode,g),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function v(d,c,f,g,S){return c===null||c.tag!==7?(c=st(f,d.mode,g,S),c.return=d,c):(c=i(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=hl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case oi:return f=Oi(c.type,c.key,c.props,null,d.mode,f),f.ref=lr(d,null,c),f.return=d,f;case kt:return c=_l(c,d.mode,f),c.return=d,c;case In:var g=c._init;return m(d,g(c._payload),f)}if(cr(c)||nr(c))return c=st(c,d.mode,f,null),c.return=d,c;hi(d,c)}return null}function p(d,c,f,g){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:u(d,c,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case oi:return f.key===S?a(d,c,f,g):null;case kt:return f.key===S?s(d,c,f,g):null;case In:return S=f._init,p(d,c,S(f._payload),g)}if(cr(f)||nr(f))return S!==null?null:v(d,c,f,g,null);hi(d,f)}return null}function h(d,c,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,u(c,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oi:return d=d.get(g.key===null?f:g.key)||null,a(c,d,g,S);case kt:return d=d.get(g.key===null?f:g.key)||null,s(c,d,g,S);case In:var N=g._init;return h(d,c,f,N(g._payload),S)}if(cr(g)||nr(g))return d=d.get(f)||null,v(c,d,g,S,null);hi(c,g)}return null}function y(d,c,f,g){for(var S=null,N=null,E=c,_=c=0,I=null;E!==null&&_<f.length;_++){E.index>_?(I=E,E=null):I=E.sibling;var P=p(d,E,f[_],g);if(P===null){E===null&&(E=I);break}e&&E&&P.alternate===null&&n(d,E),c=o(P,c,_),N===null?S=P:N.sibling=P,N=P,E=I}if(_===f.length)return t(d,E),G&&et(d,_),S;if(E===null){for(;_<f.length;_++)E=m(d,f[_],g),E!==null&&(c=o(E,c,_),N===null?S=E:N.sibling=E,N=E);return G&&et(d,_),S}for(E=r(d,E);_<f.length;_++)I=h(E,d,_,f[_],g),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?_:I.key),c=o(I,c,_),N===null?S=I:N.sibling=I,N=I);return e&&E.forEach(function(W){return n(d,W)}),G&&et(d,_),S}function w(d,c,f,g){var S=nr(f);if(typeof S!="function")throw Error(k(150));if(f=S.call(f),f==null)throw Error(k(151));for(var N=S=null,E=c,_=c=0,I=null,P=f.next();E!==null&&!P.done;_++,P=f.next()){E.index>_?(I=E,E=null):I=E.sibling;var W=p(d,E,P.value,g);if(W===null){E===null&&(E=I);break}e&&E&&W.alternate===null&&n(d,E),c=o(W,c,_),N===null?S=W:N.sibling=W,N=W,E=I}if(P.done)return t(d,E),G&&et(d,_),S;if(E===null){for(;!P.done;_++,P=f.next())P=m(d,P.value,g),P!==null&&(c=o(P,c,_),N===null?S=P:N.sibling=P,N=P);return G&&et(d,_),S}for(E=r(d,E);!P.done;_++,P=f.next())P=h(E,d,_,P.value,g),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?_:P.key),c=o(P,c,_),N===null?S=P:N.sibling=P,N=P);return e&&E.forEach(function(te){return n(d,te)}),G&&et(d,_),S}function z(d,c,f,g){if(typeof f=="object"&&f!==null&&f.type===Et&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case oi:e:{for(var S=f.key,N=c;N!==null;){if(N.key===S){if(S=f.type,S===Et){if(N.tag===7){t(d,N.sibling),c=i(N,f.props.children),c.return=d,d=c;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===In&&qs(S)===N.type){t(d,N.sibling),c=i(N,f.props),c.ref=lr(d,N,f),c.return=d,d=c;break e}t(d,N);break}else n(d,N);N=N.sibling}f.type===Et?(c=st(f.props.children,d.mode,g,f.key),c.return=d,d=c):(g=Oi(f.type,f.key,f.props,null,d.mode,g),g.ref=lr(d,c,f),g.return=d,d=g)}return l(d);case kt:e:{for(N=f.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=_l(f,d.mode,g),c.return=d,d=c}return l(d);case In:return N=f._init,z(d,c,N(f._payload),g)}if(cr(f))return y(d,c,f,g);if(nr(f))return w(d,c,f,g);hi(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=i(c,f),c.return=d,d=c):(t(d,c),c=hl(f,d.mode,g),c.return=d,d=c),l(d)):t(d,c)}return z}var Ht=hf(!0),_f=hf(!1),Kr={},cn=Yn(Kr),jr=Yn(Kr),Vr=Yn(Kr);function ot(e){if(e===Kr)throw Error(k(174));return e}function oa(e,n){switch(j(Vr,n),j(jr,e),j(cn,Kr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:$l(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=$l(n,e)}$(cn),j(cn,n)}function Qt(){$(cn),$(jr),$(Vr)}function gf(e){ot(Vr.current);var n=ot(cn.current),t=$l(n,e.type);n!==t&&(j(jr,e),j(cn,t))}function la(e){jr.current===e&&($(cn),$(jr))}var U=Yn(0);function oo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var cl=[];function ua(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var zi=xn.ReactCurrentDispatcher,dl=xn.ReactCurrentBatchConfig,ft=0,B=null,J=null,re=null,lo=!1,Sr=!1,Fr=0,F1=0;function ce(){throw Error(k(321))}function aa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!nn(e[t],n[t]))return!1;return!0}function sa(e,n,t,r,i,o){if(ft=o,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,zi.current=e===null||e.memoizedState===null?B1:q1,e=t(r,i),Sr){o=0;do{if(Sr=!1,Fr=0,25<=o)throw Error(k(301));o+=1,re=J=null,n.updateQueue=null,zi.current=W1,e=t(r,i)}while(Sr)}if(zi.current=uo,n=J!==null&&J.next!==null,ft=0,re=J=B=null,lo=!1,n)throw Error(k(300));return e}function ca(){var e=Fr!==0;return Fr=0,e}function on(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?B.memoizedState=re=e:re=re.next=e,re}function qe(){if(J===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=re===null?B.memoizedState:re.next;if(n!==null)re=n,J=e;else{if(e===null)throw Error(k(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},re===null?B.memoizedState=re=e:re=re.next=e}return re}function $r(e,n){return typeof n=="function"?n(e):n}function fl(e){var n=qe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,a=null,s=o;do{var v=s.lane;if((ft&v)===v)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:v,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=m,l=r):a=a.next=m,B.lanes|=v,pt|=v}s=s.next}while(s!==null&&s!==o);a===null?l=r:a.next=u,nn(r,n.memoizedState)||(Te=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,B.lanes|=o,pt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function pl(e){var n=qe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);nn(o,n.memoizedState)||(Te=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function yf(){}function wf(e,n){var t=B,r=qe(),i=n(),o=!nn(r.memoizedState,i);if(o&&(r.memoizedState=i,Te=!0),r=r.queue,da(Sf.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,Gr(9,Ef.bind(null,t,r,i,n),void 0,null),ie===null)throw Error(k(349));ft&30||kf(t,n,i)}return i}function kf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ef(e,n,t,r){n.value=t,n.getSnapshot=r,xf(n)&&Tf(e)}function Sf(e,n,t){return t(function(){xf(n)&&Tf(e)})}function xf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!nn(e,t)}catch{return!0}}function Tf(e){var n=En(e,1);n!==null&&en(n,e,1,-1)}function Ws(e){var n=on();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},n.queue=e,e=e.dispatch=U1.bind(null,B,e),[n.memoizedState,e]}function Gr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Nf(){return qe().memoizedState}function Ii(e,n,t,r){var i=on();B.flags|=e,i.memoizedState=Gr(1|n,t,void 0,r===void 0?null:r)}function xo(e,n,t,r){var i=qe();r=r===void 0?null:r;var o=void 0;if(J!==null){var l=J.memoizedState;if(o=l.destroy,r!==null&&aa(r,l.deps)){i.memoizedState=Gr(n,t,o,r);return}}B.flags|=e,i.memoizedState=Gr(1|n,t,o,r)}function Hs(e,n){return Ii(8390656,8,e,n)}function da(e,n){return xo(2048,8,e,n)}function Cf(e,n){return xo(4,2,e,n)}function Af(e,n){return xo(4,4,e,n)}function Pf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zf(e,n,t){return t=t!=null?t.concat([e]):null,xo(4,4,Pf.bind(null,n,e),t)}function fa(){}function If(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&aa(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Rf(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&aa(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Df(e,n,t){return ft&21?(nn(t,n)||(t=Od(),B.lanes|=t,pt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=t)}function $1(e,n){var t=b;b=t!==0&&4>t?t:4,e(!0);var r=dl.transition;dl.transition={};try{e(!1),n()}finally{b=t,dl.transition=r}}function Lf(){return qe().memoizedState}function G1(e,n,t){var r=qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Of(e))Mf(n,t);else if(t=ff(e,n,t,r),t!==null){var i=ge();en(t,e,r,i),bf(t,n,r)}}function U1(e,n,t){var r=qn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Of(e))Mf(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,u=o(l,t);if(i.hasEagerState=!0,i.eagerState=u,nn(u,l)){var a=n.interleaved;a===null?(i.next=i,ra(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=ff(e,n,i,r),t!==null&&(i=ge(),en(t,e,r,i),bf(t,n,r))}}function Of(e){var n=e.alternate;return e===B||n!==null&&n===B}function Mf(e,n){Sr=lo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function bf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Uu(e,t)}}var uo={readContext:Be,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},B1={readContext:Be,useCallback:function(e,n){return on().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:Hs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ii(4194308,4,Pf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ii(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ii(4,2,e,n)},useMemo:function(e,n){var t=on();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=on();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=G1.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=on();return e={current:e},n.memoizedState=e},useState:Ws,useDebugValue:fa,useDeferredValue:function(e){return on().memoizedState=e},useTransition:function(){var e=Ws(!1),n=e[0];return e=$1.bind(null,e[1]),on().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,i=on();if(G){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),ie===null)throw Error(k(349));ft&30||kf(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Hs(Sf.bind(null,r,o,e),[e]),r.flags|=2048,Gr(9,Ef.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=on(),n=ie.identifierPrefix;if(G){var t=_n,r=hn;t=(r&~(1<<32-Je(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Fr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=F1++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},q1={readContext:Be,useCallback:If,useContext:Be,useEffect:da,useImperativeHandle:zf,useInsertionEffect:Cf,useLayoutEffect:Af,useMemo:Rf,useReducer:fl,useRef:Nf,useState:function(){return fl($r)},useDebugValue:fa,useDeferredValue:function(e){var n=qe();return Df(n,J.memoizedState,e)},useTransition:function(){var e=fl($r)[0],n=qe().memoizedState;return[e,n]},useMutableSource:yf,useSyncExternalStore:wf,useId:Lf,unstable_isNewReconciler:!1},W1={readContext:Be,useCallback:If,useContext:Be,useEffect:da,useImperativeHandle:zf,useInsertionEffect:Cf,useLayoutEffect:Af,useMemo:Rf,useReducer:pl,useRef:Nf,useState:function(){return pl($r)},useDebugValue:fa,useDeferredValue:function(e){var n=qe();return J===null?n.memoizedState=e:Df(n,J.memoizedState,e)},useTransition:function(){var e=pl($r)[0],n=qe().memoizedState;return[e,n]},useMutableSource:yf,useSyncExternalStore:wf,useId:Lf,unstable_isNewReconciler:!1};function Xt(e,n){try{var t="",r=n;do t+=w0(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function vl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function cu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var H1=typeof WeakMap=="function"?WeakMap:Map;function jf(e,n,t){t=gn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){so||(so=!0,wu=r),cu(e,n)},t}function Vf(e,n,t){t=gn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){cu(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){cu(e,n),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Qs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new H1;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=u_.bind(null,e,n,t),n.then(e,e))}function Xs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ks(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=gn(-1,1),n.tag=2,Un(t,n,1))),t.lanes|=1),e)}var Q1=xn.ReactCurrentOwner,Te=!1;function _e(e,n,t,r){n.child=e===null?_f(n,null,t,r):Ht(n,e.child,t,r)}function Ys(e,n,t,r,i){t=t.render;var o=n.ref;return jt(n,i),r=sa(e,n,t,r,o,i),t=ca(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Sn(e,n,i)):(G&&t&&Yu(n),n.flags|=1,_e(e,n,r,i),n.child)}function Zs(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!wa(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Ff(e,n,o,r,i)):(e=Oi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Lr,t(l,r)&&e.ref===n.ref)return Sn(e,n,i)}return n.flags|=1,e=Wn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Ff(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Lr(o,r)&&e.ref===n.ref)if(Te=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return n.lanes=e.lanes,Sn(e,n,i)}return du(e,n,t,r,i)}function $f(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Rt,ze),ze|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,j(Rt,ze),ze|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,j(Rt,ze),ze|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,j(Rt,ze),ze|=r;return _e(e,n,i,t),n.child}function Gf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function du(e,n,t,r,i){var o=Ce(t)?ct:me.current;return o=qt(n,o),jt(n,i),t=sa(e,n,t,r,o,i),r=ca(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Sn(e,n,i)):(G&&r&&Yu(n),n.flags|=1,_e(e,n,t,i),n.child)}function Js(e,n,t,r,i){if(Ce(t)){var o=!0;Ji(n)}else o=!1;if(jt(n,i),n.stateNode===null)Ri(e,n),mf(n,t,r),su(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var a=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=Be(s):(s=Ce(t)?ct:me.current,s=qt(n,s));var v=t.getDerivedStateFromProps,m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||a!==s)&&Bs(n,l,r,s),Rn=!1;var p=n.memoizedState;l.state=p,io(n,r,l,i),a=n.memoizedState,u!==r||p!==a||Ne.current||Rn?(typeof v=="function"&&(au(n,t,v,r),a=n.memoizedState),(u=Rn||Us(n,t,u,r,p,a,s))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),l.props=r,l.state=a,l.context=s,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,pf(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:Qe(n.type,u),l.props=s,m=n.pendingProps,p=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=Be(a):(a=Ce(t)?ct:me.current,a=qt(n,a));var h=t.getDerivedStateFromProps;(v=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==m||p!==a)&&Bs(n,l,r,a),Rn=!1,p=n.memoizedState,l.state=p,io(n,r,l,i);var y=n.memoizedState;u!==m||p!==y||Ne.current||Rn?(typeof h=="function"&&(au(n,t,h,r),y=n.memoizedState),(s=Rn||Us(n,t,s,r,p,y,a)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),l.props=r,l.state=y,l.context=a,r=s):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return fu(e,n,t,r,o,i)}function fu(e,n,t,r,i,o){Gf(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&js(n,t,!1),Sn(e,n,o);r=n.stateNode,Q1.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Ht(n,e.child,null,o),n.child=Ht(n,null,u,o)):_e(e,n,u,o),n.memoizedState=r.state,i&&js(n,t,!0),n.child}function Uf(e){var n=e.stateNode;n.pendingContext?bs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&bs(e,n.context,!1),oa(e,n.containerInfo)}function ec(e,n,t,r,i){return Wt(),Ju(i),n.flags|=256,_e(e,n,t,r),n.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function vu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bf(e,n,t){var r=n.pendingProps,i=U.current,o=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(U,i&1),e===null)return lu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Co(l,r,0,null),e=st(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=vu(t),n.memoizedState=pu,e):pa(n,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return X1(e,n,l,r,u,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Wn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Wn(u,o):(o=st(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?vu(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=pu,r}return o=e.child,e=o.sibling,r=Wn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function pa(e,n){return n=Co({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _i(e,n,t,r){return r!==null&&Ju(r),Ht(n,e.child,null,t),e=pa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function X1(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=vl(Error(k(422))),_i(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Co({mode:"visible",children:r.children},i,0,null),o=st(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Ht(n,e.child,null,l),n.child.memoizedState=vu(l),n.memoizedState=pu,o);if(!(n.mode&1))return _i(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(k(419)),r=vl(o,r,void 0),_i(e,n,l,r)}if(u=(l&e.childLanes)!==0,Te||u){if(r=ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,En(e,i),en(r,e,i,-1))}return ya(),r=vl(Error(k(421))),_i(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=a_.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ie=Gn(i.nextSibling),Re=n,G=!0,Ke=null,e!==null&&(je[Ve++]=hn,je[Ve++]=_n,je[Ve++]=dt,hn=e.id,_n=e.overflow,dt=n),n=pa(n,r.children),n.flags|=4096,n)}function nc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),uu(e.return,n,t)}function ml(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function qf(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nc(e,t,n);else if(e.tag===19)nc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(U,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&oo(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),ml(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&oo(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ml(n,!0,t,null,o);break;case"together":ml(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ri(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Sn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),pt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function K1(e,n,t){switch(n.tag){case 3:Uf(n),Wt();break;case 5:gf(n);break;case 1:Ce(n.type)&&Ji(n);break;case 4:oa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;j(to,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(j(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Bf(e,n,t):(j(U,U.current&1),e=Sn(e,n,t),e!==null?e.sibling:null);j(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return qf(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,$f(e,n,t)}return Sn(e,n,t)}var Wf,mu,Hf,Qf;Wf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};mu=function(){};Hf=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,ot(cn.current);var o=null;switch(t){case"input":i=bl(e,i),r=bl(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=Fl(e,i),r=Fl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}Gl(t,r);var l;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Cr.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(l in u)!u.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&u[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(o||(o=[]),o.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&F("scroll",e),o||u===a||(o=[])):(o=o||[]).push(s,a))}t&&(o=o||[]).push("style",t);var s=o;(n.updateQueue=s)&&(n.flags|=4)}};Qf=function(e,n,t,r){t!==r&&(n.flags|=4)};function ur(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Y1(e,n,t){var r=n.pendingProps;switch(Zu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return Ce(n.type)&&Zi(),de(n),null;case 3:return r=n.stateNode,Qt(),$(Ne),$(me),ua(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ke!==null&&(Su(Ke),Ke=null))),mu(e,n),de(n),null;case 5:la(n);var i=ot(Vr.current);if(t=n.type,e!==null&&n.stateNode!=null)Hf(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return de(n),null}if(e=ot(cn.current),mi(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[ln]=n,r[br]=o,e=(n.mode&1)!==0,t){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)F(fr[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":cs(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":fs(r,o),F("invalid",r)}Gl(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,u,e),i=["children",""+u]):Cr.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&F("scroll",r)}switch(t){case"input":li(r),ds(r,o,!0);break;case"textarea":li(r),ps(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[ln]=n,e[br]=r,Wf(e,n,!1,!1),n.stateNode=e;e:{switch(l=Ul(t,r),t){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)F(fr[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":cs(e,r),i=bl(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),F("invalid",e);break;case"textarea":fs(e,r),i=Fl(e,r),F("invalid",e);break;default:i=r}Gl(t,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var a=u[o];o==="style"?Sd(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&kd(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Ar(e,a):typeof a=="number"&&Ar(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Cr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&F("scroll",e):a!=null&&bu(e,o,a,l))}switch(t){case"input":li(e),ds(e,r,!1);break;case"textarea":li(e),ps(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Lt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)Qf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=ot(Vr.current),ot(cn.current),mi(n)){if(r=n.stateNode,t=n.memoizedProps,r[ln]=n,(o=r.nodeValue!==t)&&(e=Re,e!==null))switch(e.tag){case 3:vi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ln]=n,n.stateNode=r}return de(n),null;case 13:if($(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ie!==null&&n.mode&1&&!(n.flags&128))df(),Wt(),n.flags|=98560,o=!1;else if(o=mi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[ln]=n}else Wt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),o=!1}else Ke!==null&&(Su(Ke),Ke=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?ee===0&&(ee=3):ya())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return Qt(),mu(e,n),e===null&&Or(n.stateNode.containerInfo),de(n),null;case 10:return ta(n.type._context),de(n),null;case 17:return Ce(n.type)&&Zi(),de(n),null;case 19:if($(U),o=n.memoizedState,o===null)return de(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)ur(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=oo(e),l!==null){for(n.flags|=128,ur(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return j(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&K()>Kt&&(n.flags|=128,r=!0,ur(o,!1),n.lanes=4194304)}else{if(!r)if(e=oo(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!G)return de(n),null}else 2*K()-o.renderingStartTime>Kt&&t!==1073741824&&(n.flags|=128,r=!0,ur(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=K(),n.sibling=null,t=U.current,j(U,r?t&1|2:t&1),n):(de(n),null);case 22:case 23:return ga(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ze&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Z1(e,n){switch(Zu(n),n.tag){case 1:return Ce(n.type)&&Zi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qt(),$(Ne),$(me),ua(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return la(n),null;case 13:if($(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(U),null;case 4:return Qt(),null;case 10:return ta(n.type._context),null;case 22:case 23:return ga(),null;case 24:return null;default:return null}}var gi=!1,fe=!1,J1=typeof WeakSet=="function"?WeakSet:Set,T=null;function It(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){H(e,n,r)}else t.current=null}function hu(e,n,t){try{t()}catch(r){H(e,n,r)}}var tc=!1;function e_(e,n){if(Jl=Qi,e=Yd(),Ku(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,u=-1,a=-1,s=0,v=0,m=e,p=null;n:for(;;){for(var h;m!==t||i!==0&&m.nodeType!==3||(u=l+i),m!==o||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(h=m.firstChild)!==null;)p=m,m=h;for(;;){if(m===e)break n;if(p===t&&++s===i&&(u=l),p===o&&++v===r&&(a=l),(h=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=h}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(eu={focusedElem:e,selectionRange:t},Qi=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,z=y.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Qe(n.type,w),z);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){H(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return y=tc,tc=!1,y}function xr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&hu(n,t,o)}i=i.next}while(i!==r)}}function To(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function _u(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Xf(e){var n=e.alternate;n!==null&&(e.alternate=null,Xf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ln],delete n[br],delete n[ru],delete n[M1],delete n[b1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kf(e){return e.tag===5||e.tag===3||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(gu(e,n,t),e=e.sibling;e!==null;)gu(e,n,t),e=e.sibling}function yu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yu(e,n,t),e=e.sibling;e!==null;)yu(e,n,t),e=e.sibling}var oe=null,Xe=!1;function An(e,n,t){for(t=t.child;t!==null;)Yf(e,n,t),t=t.sibling}function Yf(e,n,t){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(_o,t)}catch{}switch(t.tag){case 5:fe||It(t,n);case 6:var r=oe,i=Xe;oe=null,An(e,n,t),oe=r,Xe=i,oe!==null&&(Xe?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(Xe?(e=oe,t=t.stateNode,e.nodeType===8?al(e.parentNode,t):e.nodeType===1&&al(e,t),Rr(e)):al(oe,t.stateNode));break;case 4:r=oe,i=Xe,oe=t.stateNode.containerInfo,Xe=!0,An(e,n,t),oe=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&hu(t,n,l),i=i.next}while(i!==r)}An(e,n,t);break;case 1:if(!fe&&(It(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){H(t,n,u)}An(e,n,t);break;case 21:An(e,n,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,An(e,n,t),fe=r):An(e,n,t);break;default:An(e,n,t)}}function ic(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new J1),n.forEach(function(r){var i=s_.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function He(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:oe=u.stateNode,Xe=!1;break e;case 3:oe=u.stateNode.containerInfo,Xe=!0;break e;case 4:oe=u.stateNode.containerInfo,Xe=!0;break e}u=u.return}if(oe===null)throw Error(k(160));Yf(o,l,i),oe=null,Xe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){H(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Zf(n,e),n=n.sibling}function Zf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(n,e),rn(e),r&4){try{xr(3,e,e.return),To(3,e)}catch(w){H(e,e.return,w)}try{xr(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:He(n,e),rn(e),r&512&&t!==null&&It(t,t.return);break;case 5:if(He(n,e),rn(e),r&512&&t!==null&&It(t,t.return),e.flags&32){var i=e.stateNode;try{Ar(i,"")}catch(w){H(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&gd(i,o),Ul(u,l);var s=Ul(u,o);for(l=0;l<a.length;l+=2){var v=a[l],m=a[l+1];v==="style"?Sd(i,m):v==="dangerouslySetInnerHTML"?kd(i,m):v==="children"?Ar(i,m):bu(i,v,m,s)}switch(u){case"input":jl(i,o);break;case"textarea":yd(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Lt(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?Lt(i,!!o.multiple,o.defaultValue,!0):Lt(i,!!o.multiple,o.multiple?[]:"",!1))}i[br]=o}catch(w){H(e,e.return,w)}}break;case 6:if(He(n,e),rn(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){H(e,e.return,w)}}break;case 3:if(He(n,e),rn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Rr(n.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:He(n,e),rn(e);break;case 13:He(n,e),rn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ha=K())),r&4&&ic(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(s=fe)||v,He(n,e),fe=s):He(n,e),rn(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!v&&e.mode&1)for(T=e,v=e.child;v!==null;){for(m=T=v;T!==null;){switch(p=T,h=p.child,p.tag){case 0:case 11:case 14:case 15:xr(4,p,p.return);break;case 1:It(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){H(r,t,w)}}break;case 5:It(p,p.return);break;case 22:if(p.memoizedState!==null){lc(m);continue}}h!==null?(h.return=p,T=h):lc(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{i=m.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Ed("display",l))}catch(w){H(e,e.return,w)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(w){H(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:He(n,e),rn(e),r&4&&ic(e);break;case 21:break;default:He(n,e),rn(e)}}function rn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Kf(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ar(i,""),r.flags&=-33);var o=rc(e);yu(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=rc(e);gu(e,u,l);break;default:throw Error(k(161))}}catch(a){H(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function n_(e,n,t){T=e,Jf(e)}function Jf(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||gi;if(!l){var u=i.alternate,a=u!==null&&u.memoizedState!==null||fe;u=gi;var s=fe;if(gi=l,(fe=a)&&!s)for(T=i;T!==null;)l=T,a=l.child,l.tag===22&&l.memoizedState!==null?uc(i):a!==null?(a.return=l,T=a):uc(i);for(;o!==null;)T=o,Jf(o),o=o.sibling;T=i,gi=u,fe=s}oc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):oc(e)}}function oc(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||To(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Qe(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Gs(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Gs(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var v=s.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Rr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}fe||n.flags&512&&_u(n)}catch(p){H(n,n.return,p)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function lc(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function uc(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{To(4,n)}catch(a){H(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){H(n,i,a)}}var o=n.return;try{_u(n)}catch(a){H(n,o,a)}break;case 5:var l=n.return;try{_u(n)}catch(a){H(n,l,a)}}}catch(a){H(n,n.return,a)}if(n===e){T=null;break}var u=n.sibling;if(u!==null){u.return=n.return,T=u;break}T=n.return}}var t_=Math.ceil,ao=xn.ReactCurrentDispatcher,va=xn.ReactCurrentOwner,Ge=xn.ReactCurrentBatchConfig,O=0,ie=null,Y=null,ue=0,ze=0,Rt=Yn(0),ee=0,Ur=null,pt=0,No=0,ma=0,Tr=null,xe=null,ha=0,Kt=1/0,fn=null,so=!1,wu=null,Bn=null,yi=!1,bn=null,co=0,Nr=0,ku=null,Di=-1,Li=0;function ge(){return O&6?K():Di!==-1?Di:Di=K()}function qn(e){return e.mode&1?O&2&&ue!==0?ue&-ue:V1.transition!==null?(Li===0&&(Li=Od()),Li):(e=b,e!==0||(e=window.event,e=e===void 0?16:Gd(e.type)),e):1}function en(e,n,t,r){if(50<Nr)throw Nr=0,ku=null,Error(k(185));Hr(e,t,r),(!(O&2)||e!==ie)&&(e===ie&&(!(O&2)&&(No|=t),ee===4&&Ln(e,ue)),Ae(e,r),t===1&&O===0&&!(n.mode&1)&&(Kt=K()+500,Eo&&Zn()))}function Ae(e,n){var t=e.callbackNode;V0(e,n);var r=Hi(e,e===ie?ue:0);if(r===0)t!==null&&hs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&hs(t),n===1)e.tag===0?j1(ac.bind(null,e)):af(ac.bind(null,e)),L1(function(){!(O&6)&&Zn()}),t=null;else{switch(Md(r)){case 1:t=Gu;break;case 4:t=Dd;break;case 16:t=Wi;break;case 536870912:t=Ld;break;default:t=Wi}t=up(t,ep.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ep(e,n){if(Di=-1,Li=0,O&6)throw Error(k(327));var t=e.callbackNode;if(Vt()&&e.callbackNode!==t)return null;var r=Hi(e,e===ie?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=fo(e,r);else{n=r;var i=O;O|=2;var o=tp();(ie!==e||ue!==n)&&(fn=null,Kt=K()+500,at(e,n));do try{o_();break}catch(u){np(e,u)}while(1);na(),ao.current=o,O=i,Y!==null?n=0:(ie=null,ue=0,n=ee)}if(n!==0){if(n===2&&(i=Ql(e),i!==0&&(r=i,n=Eu(e,i))),n===1)throw t=Ur,at(e,0),Ln(e,r),Ae(e,K()),t;if(n===6)Ln(e,r);else{if(i=e.current.alternate,!(r&30)&&!r_(i)&&(n=fo(e,r),n===2&&(o=Ql(e),o!==0&&(r=o,n=Eu(e,o))),n===1))throw t=Ur,at(e,0),Ln(e,r),Ae(e,K()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:nt(e,xe,fn);break;case 3:if(Ln(e,r),(r&130023424)===r&&(n=ha+500-K(),10<n)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=tu(nt.bind(null,e,xe,fn),n);break}nt(e,xe,fn);break;case 4:if(Ln(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Je(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*t_(r/1960))-r,10<r){e.timeoutHandle=tu(nt.bind(null,e,xe,fn),r);break}nt(e,xe,fn);break;case 5:nt(e,xe,fn);break;default:throw Error(k(329))}}}return Ae(e,K()),e.callbackNode===t?ep.bind(null,e):null}function Eu(e,n){var t=Tr;return e.current.memoizedState.isDehydrated&&(at(e,n).flags|=256),e=fo(e,n),e!==2&&(n=xe,xe=t,n!==null&&Su(n)),e}function Su(e){xe===null?xe=e:xe.push.apply(xe,e)}function r_(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!nn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ln(e,n){for(n&=~ma,n&=~No,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Je(n),r=1<<t;e[t]=-1,n&=~r}}function ac(e){if(O&6)throw Error(k(327));Vt();var n=Hi(e,0);if(!(n&1))return Ae(e,K()),null;var t=fo(e,n);if(e.tag!==0&&t===2){var r=Ql(e);r!==0&&(n=r,t=Eu(e,r))}if(t===1)throw t=Ur,at(e,0),Ln(e,n),Ae(e,K()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,nt(e,xe,fn),Ae(e,K()),null}function _a(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(Kt=K()+500,Eo&&Zn())}}function vt(e){bn!==null&&bn.tag===0&&!(O&6)&&Vt();var n=O;O|=1;var t=Ge.transition,r=b;try{if(Ge.transition=null,b=1,e)return e()}finally{b=r,Ge.transition=t,O=n,!(O&6)&&Zn()}}function ga(){ze=Rt.current,$(Rt)}function at(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,D1(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(Zu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zi();break;case 3:Qt(),$(Ne),$(me),ua();break;case 5:la(r);break;case 4:Qt();break;case 13:$(U);break;case 19:$(U);break;case 10:ta(r.type._context);break;case 22:case 23:ga()}t=t.return}if(ie=e,Y=e=Wn(e.current,null),ue=ze=n,ee=0,Ur=null,ma=No=pt=0,xe=Tr=null,it!==null){for(n=0;n<it.length;n++)if(t=it[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}it=null}return e}function np(e,n){do{var t=Y;try{if(na(),zi.current=uo,lo){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lo=!1}if(ft=0,re=J=B=null,Sr=!1,Fr=0,va.current=null,t===null||t.return===null){ee=1,Ur=n,Y=null;break}e:{var o=e,l=t.return,u=t,a=n;if(n=ue,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,v=u,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var h=Xs(l);if(h!==null){h.flags&=-257,Ks(h,l,u,o,n),h.mode&1&&Qs(o,s,n),n=h,a=s;var y=n.updateQueue;if(y===null){var w=new Set;w.add(a),n.updateQueue=w}else y.add(a);break e}else{if(!(n&1)){Qs(o,s,n),ya();break e}a=Error(k(426))}}else if(G&&u.mode&1){var z=Xs(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Ks(z,l,u,o,n),Ju(Xt(a,u));break e}}o=a=Xt(a,u),ee!==4&&(ee=2),Tr===null?Tr=[o]:Tr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=jf(o,a,n);$s(o,d);break e;case 1:u=a;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Bn===null||!Bn.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=Vf(o,u,n);$s(o,g);break e}}o=o.return}while(o!==null)}ip(t)}catch(S){n=S,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(1)}function tp(){var e=ao.current;return ao.current=uo,e===null?uo:e}function ya(){(ee===0||ee===3||ee===2)&&(ee=4),ie===null||!(pt&268435455)&&!(No&268435455)||Ln(ie,ue)}function fo(e,n){var t=O;O|=2;var r=tp();(ie!==e||ue!==n)&&(fn=null,at(e,n));do try{i_();break}catch(i){np(e,i)}while(1);if(na(),O=t,ao.current=r,Y!==null)throw Error(k(261));return ie=null,ue=0,ee}function i_(){for(;Y!==null;)rp(Y)}function o_(){for(;Y!==null&&!z0();)rp(Y)}function rp(e){var n=lp(e.alternate,e,ze);e.memoizedProps=e.pendingProps,n===null?ip(e):Y=n,va.current=null}function ip(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Z1(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,Y=null;return}}else if(t=Y1(t,n,ze),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);ee===0&&(ee=5)}function nt(e,n,t){var r=b,i=Ge.transition;try{Ge.transition=null,b=1,l_(e,n,t,r)}finally{Ge.transition=i,b=r}return null}function l_(e,n,t,r){do Vt();while(bn!==null);if(O&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(F0(e,o),e===ie&&(Y=ie=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||yi||(yi=!0,up(Wi,function(){return Vt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ge.transition,Ge.transition=null;var l=b;b=1;var u=O;O|=4,va.current=null,e_(e,t),Zf(t,e),N1(eu),Qi=!!Jl,eu=Jl=null,e.current=t,n_(t),I0(),O=u,b=l,Ge.transition=o}else e.current=t;if(yi&&(yi=!1,bn=e,co=i),o=e.pendingLanes,o===0&&(Bn=null),L0(t.stateNode),Ae(e,K()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(so)throw so=!1,e=wu,wu=null,e;return co&1&&e.tag!==0&&Vt(),o=e.pendingLanes,o&1?e===ku?Nr++:(Nr=0,ku=e):Nr=0,Zn(),null}function Vt(){if(bn!==null){var e=Md(co),n=Ge.transition,t=b;try{if(Ge.transition=null,b=16>e?16:e,bn===null)var r=!1;else{if(e=bn,bn=null,co=0,O&6)throw Error(k(331));var i=O;for(O|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var u=o.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(T=s;T!==null;){var v=T;switch(v.tag){case 0:case 11:case 15:xr(8,v,o)}var m=v.child;if(m!==null)m.return=v,T=m;else for(;T!==null;){v=T;var p=v.sibling,h=v.return;if(Xf(v),v===s){T=null;break}if(p!==null){p.return=h,T=p;break}T=h}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,T=d;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){l=T;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,T=f;else e:for(l=c;T!==null;){if(u=T,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:To(9,u)}}catch(S){H(u,u.return,S)}if(u===l){T=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,T=g;break e}T=u.return}}if(O=i,Zn(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{b=t,Ge.transition=n}}return!1}function sc(e,n,t){n=Xt(t,n),n=jf(e,n,1),e=Un(e,n,1),n=ge(),e!==null&&(Hr(e,1,n),Ae(e,n))}function H(e,n,t){if(e.tag===3)sc(e,e,t);else for(;n!==null;){if(n.tag===3){sc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=Xt(t,e),e=Vf(n,e,1),n=Un(n,e,1),e=ge(),n!==null&&(Hr(n,1,e),Ae(n,e));break}}n=n.return}}function u_(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(ue&t)===t&&(ee===4||ee===3&&(ue&130023424)===ue&&500>K()-ha?at(e,0):ma|=t),Ae(e,n)}function op(e,n){n===0&&(e.mode&1?(n=si,si<<=1,!(si&130023424)&&(si=4194304)):n=1);var t=ge();e=En(e,n),e!==null&&(Hr(e,n,t),Ae(e,t))}function a_(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),op(e,t)}function s_(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),op(e,t)}var lp;lp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ne.current)Te=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Te=!1,K1(e,n,t);Te=!!(e.flags&131072)}else Te=!1,G&&n.flags&1048576&&sf(n,no,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ri(e,n),e=n.pendingProps;var i=qt(n,me.current);jt(n,t),i=sa(null,n,r,e,i,t);var o=ca();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ce(r)?(o=!0,Ji(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ia(n),i.updater=So,n.stateNode=i,i._reactInternals=n,su(n,r,e,t),n=fu(null,n,r,!0,o,t)):(n.tag=0,G&&o&&Yu(n),_e(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ri(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=d_(r),e=Qe(r,e),i){case 0:n=du(null,n,r,e,t);break e;case 1:n=Js(null,n,r,e,t);break e;case 11:n=Ys(null,n,r,e,t);break e;case 14:n=Zs(null,n,r,Qe(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Qe(r,i),du(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Qe(r,i),Js(e,n,r,i,t);case 3:e:{if(Uf(n),e===null)throw Error(k(387));r=n.pendingProps,o=n.memoizedState,i=o.element,pf(e,n),io(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Xt(Error(k(423)),n),n=ec(e,n,r,t,i);break e}else if(r!==i){i=Xt(Error(k(424)),n),n=ec(e,n,r,t,i);break e}else for(Ie=Gn(n.stateNode.containerInfo.firstChild),Re=n,G=!0,Ke=null,t=_f(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Wt(),r===i){n=Sn(e,n,t);break e}_e(e,n,r,t)}n=n.child}return n;case 5:return gf(n),e===null&&lu(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,nu(r,i)?l=null:o!==null&&nu(r,o)&&(n.flags|=32),Gf(e,n),_e(e,n,l,t),n.child;case 6:return e===null&&lu(n),null;case 13:return Bf(e,n,t);case 4:return oa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ht(n,null,r,t):_e(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Qe(r,i),Ys(e,n,r,i,t);case 7:return _e(e,n,n.pendingProps,t),n.child;case 8:return _e(e,n,n.pendingProps.children,t),n.child;case 12:return _e(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,j(to,r._currentValue),r._currentValue=l,o!==null)if(nn(o.value,l)){if(o.children===i.children&&!Ne.current){n=Sn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=gn(-1,t&-t),a.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var v=s.pending;v===null?a.next=a:(a.next=v.next,v.next=a),s.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),uu(o.return,t,n),u.lanes|=t;break}a=a.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),uu(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}_e(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,jt(n,t),i=Be(i),r=r(i),n.flags|=1,_e(e,n,r,t),n.child;case 14:return r=n.type,i=Qe(r,n.pendingProps),i=Qe(r.type,i),Zs(e,n,r,i,t);case 15:return Ff(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Qe(r,i),Ri(e,n),n.tag=1,Ce(r)?(e=!0,Ji(n)):e=!1,jt(n,t),mf(n,r,i),su(n,r,i,t),fu(null,n,r,!0,e,t);case 19:return qf(e,n,t);case 22:return $f(e,n,t)}throw Error(k(156,n.tag))};function up(e,n){return Rd(e,n)}function c_(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,n,t,r){return new c_(e,n,t,r)}function wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function d_(e){if(typeof e=="function")return wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vu)return 11;if(e===Fu)return 14}return 2}function Wn(e,n){var t=e.alternate;return t===null?(t=$e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Oi(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")wa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Et:return st(t.children,i,o,n);case ju:l=8,i|=8;break;case Dl:return e=$e(12,t,n,i|2),e.elementType=Dl,e.lanes=o,e;case Ll:return e=$e(13,t,n,i),e.elementType=Ll,e.lanes=o,e;case Ol:return e=$e(19,t,n,i),e.elementType=Ol,e.lanes=o,e;case md:return Co(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pd:l=10;break e;case vd:l=9;break e;case Vu:l=11;break e;case Fu:l=14;break e;case In:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=$e(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function st(e,n,t,r){return e=$e(7,e,r,n),e.lanes=t,e}function Co(e,n,t,r){return e=$e(22,e,r,n),e.elementType=md,e.lanes=t,e.stateNode={isHidden:!1},e}function hl(e,n,t){return e=$e(6,e,null,n),e.lanes=t,e}function _l(e,n,t){return n=$e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function f_(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ka(e,n,t,r,i,o,l,u,a){return e=new f_(e,n,t,u,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=$e(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ia(o),e}function p_(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ap(e){if(!e)return Qn;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Ce(t))return uf(e,t,n)}return n}function sp(e,n,t,r,i,o,l,u,a){return e=ka(t,r,!0,e,i,o,l,u,a),e.context=ap(null),t=e.current,r=ge(),i=qn(t),o=gn(r,i),o.callback=n??null,Un(t,o,i),e.current.lanes=i,Hr(e,i,r),Ae(e,r),e}function Ao(e,n,t,r){var i=n.current,o=ge(),l=qn(i);return t=ap(t),n.context===null?n.context=t:n.pendingContext=t,n=gn(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Un(i,n,l),e!==null&&(en(e,i,l,o),Pi(e,i,l)),l}function po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ea(e,n){cc(e,n),(e=e.alternate)&&cc(e,n)}function v_(){return null}var cp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sa(e){this._internalRoot=e}Po.prototype.render=Sa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Ao(e,n,null,null)};Po.prototype.unmount=Sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vt(function(){Ao(null,e,null,null)}),n[kn]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Dn.length&&n!==0&&n<Dn[t].priority;t++);Dn.splice(t,0,e),t===0&&$d(e)}};function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dc(){}function m_(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=po(l);o.call(s)}}var l=sp(n,r,e,0,null,!1,!1,"",dc);return e._reactRootContainer=l,e[kn]=l.current,Or(e.nodeType===8?e.parentNode:e),vt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=po(a);u.call(s)}}var a=ka(e,0,!1,null,null,!1,!1,"",dc);return e._reactRootContainer=a,e[kn]=a.current,Or(e.nodeType===8?e.parentNode:e),vt(function(){Ao(n,a,t,r)}),a}function Io(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var a=po(l);u.call(a)}}Ao(n,l,e,i)}else l=m_(t,n,e,i,r);return po(l)}bd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=dr(n.pendingLanes);t!==0&&(Uu(n,t|1),Ae(n,K()),!(O&6)&&(Kt=K()+500,Zn()))}break;case 13:vt(function(){var r=En(e,1);if(r!==null){var i=ge();en(r,e,1,i)}}),Ea(e,1)}};Bu=function(e){if(e.tag===13){var n=En(e,134217728);if(n!==null){var t=ge();en(n,e,134217728,t)}Ea(e,134217728)}};jd=function(e){if(e.tag===13){var n=qn(e),t=En(e,n);if(t!==null){var r=ge();en(t,e,n,r)}Ea(e,n)}};Vd=function(){return b};Fd=function(e,n){var t=b;try{return b=e,n()}finally{b=t}};ql=function(e,n,t){switch(n){case"input":if(jl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ko(r);if(!i)throw Error(k(90));_d(r),jl(r,i)}}}break;case"textarea":yd(e,t);break;case"select":n=t.value,n!=null&&Lt(e,!!t.multiple,n,!1)}};Nd=_a;Cd=vt;var h_={usingClientEntryPoint:!1,Events:[Xr,Nt,ko,xd,Td,_a]},ar={findFiberByHostInstance:rt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},__={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zd(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||v_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{_o=wi.inject(__),sn=wi}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;Le.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xa(n))throw Error(k(200));return p_(e,n,null,t)};Le.createRoot=function(e,n){if(!xa(e))throw Error(k(299));var t=!1,r="",i=cp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=ka(e,1,!1,null,null,t,!1,r,i),e[kn]=n.current,Or(e.nodeType===8?e.parentNode:e),new Sa(n)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=zd(n),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return vt(e)};Le.hydrate=function(e,n,t){if(!zo(n))throw Error(k(200));return Io(null,e,n,!0,t)};Le.hydrateRoot=function(e,n,t){if(!xa(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=cp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=sp(n,null,e,1,t??null,i,!1,o,l),e[kn]=n.current,Or(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Po(n)};Le.render=function(e,n,t){if(!zo(n))throw Error(k(200));return Io(null,e,n,!1,t)};Le.unmountComponentAtNode=function(e){if(!zo(e))throw Error(k(40));return e._reactRootContainer?(vt(function(){Io(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};Le.unstable_batchedUpdates=_a;Le.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!zo(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Io(e,n,t,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function dp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dp)}catch(e){console.error(e)}}dp(),ad.exports=Le;var g_=ad.exports,fp,fc=g_;fp=fc.createRoot,fc.hydrateRoot;fp(v0(vv(document.querySelector("#root")))).render(A.jsx(Ft.StrictMode,{children:A.jsx(p0,{})}));
