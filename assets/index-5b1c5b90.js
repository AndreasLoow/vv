(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var qn={},Ep={get exports(){return qn},set exports(e){qn=e}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),Sp=Symbol.for("react.portal"),xp=Symbol.for("react.fragment"),Tp=Symbol.for("react.strict_mode"),Cp=Symbol.for("react.profiler"),Np=Symbol.for("react.provider"),Ap=Symbol.for("react.context"),Pp=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),Lp=Symbol.for("react.memo"),Op=Symbol.for("react.lazy"),Ta=Symbol.iterator;function Ip(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cc=Object.assign,fc={};function Wt(e,n,t){this.props=e,this.context=n,this.refs=fc,this.updater=t||sc}Wt.prototype.isReactComponent={};Wt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Wt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dc(){}dc.prototype=Wt.prototype;function ku(e,n,t){this.props=e,this.context=n,this.refs=fc,this.updater=t||sc}var Eu=ku.prototype=new dc;Eu.constructor=ku;cc(Eu,Wt.prototype);Eu.isPureReactComponent=!0;var Ca=Array.isArray,pc=Object.prototype.hasOwnProperty,Su={current:null},vc={key:!0,ref:!0,__self:!0,__source:!0};function mc(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)pc.call(n,r)&&!vc.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:$r,type:e,key:l,ref:o,props:i,_owner:Su.current}}function Rp(e,n){return{$$typeof:$r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function xu(e){return typeof e=="object"&&e!==null&&e.$$typeof===$r}function Mp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Na=/\/+/g;function Ol(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Mp(""+e.key):n.toString(36)}function gi(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $r:case Sp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ol(o,0):r,Ca(i)?(t="",e!=null&&(t=e.replace(Na,"$&/")+"/"),gi(i,n,t,"",function(s){return s})):i!=null&&(xu(i)&&(i=Rp(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Na,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Ca(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+Ol(l,u);o+=gi(l,n,t,a,i)}else if(a=Ip(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+Ol(l,u++),o+=gi(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Xr(e,n,t){if(e==null)return e;var r=[],i=0;return gi(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Dp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},_i={transition:null},bp={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:_i,ReactCurrentOwner:Su};R.Children={map:Xr,forEach:function(e,n,t){Xr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Xr(e,function(){n++}),n},toArray:function(e){return Xr(e,function(n){return n})||[]},only:function(e){if(!xu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Wt;R.Fragment=xp;R.Profiler=Cp;R.PureComponent=ku;R.StrictMode=Tp;R.Suspense=zp;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cc({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Su.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)pc.call(n,a)&&!vc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:$r,type:e.type,key:i,ref:l,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:Ap,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Np,_context:e},e.Consumer=e};R.createElement=mc;R.createFactory=function(e){var n=mc.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Pp,render:e}};R.isValidElement=xu;R.lazy=function(e){return{$$typeof:Op,_payload:{_status:-1,_result:e},_init:Dp}};R.memo=function(e,n){return{$$typeof:Lp,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=_i.transition;_i.transition={};try{e()}finally{_i.transition=n}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,n){return _e.current.useCallback(e,n)};R.useContext=function(e){return _e.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};R.useEffect=function(e,n){return _e.current.useEffect(e,n)};R.useId=function(){return _e.current.useId()};R.useImperativeHandle=function(e,n,t){return _e.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return _e.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return _e.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return _e.current.useMemo(e,n)};R.useReducer=function(e,n,t){return _e.current.useReducer(e,n,t)};R.useRef=function(e){return _e.current.useRef(e)};R.useState=function(e){return _e.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return _e.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return _e.current.useTransition()};R.version="18.2.0";(function(e){e.exports=R})(Ep);function Aa(e,n,t){for(var r=new Array(t),i=0,l=n;i<t;)r[i]=e[l],i=i+1|0,l=l+1|0;return r}function Oi(e,n){for(;;){var t=n,r=e,i=r.length,l=i===0?1:i,o=t.length,u=l-o|0;if(u===0)return r.apply(null,t);if(u>=0)return function(a,s){return function(v){return Oi(a,s.concat([v]))}}(r,t);n=Aa(t,l,-u|0),e=r.apply(null,Aa(t,0,l))}}function Cn(e,n){var t=e.length;if(t===1)return e(n);switch(t){case 1:return e(n);case 2:return function(r){return e(n,r)};case 3:return function(r,i){return e(n,r,i)};case 4:return function(r,i,l){return e(n,r,i,l)};case 5:return function(r,i,l,o){return e(n,r,i,l,o)};case 6:return function(r,i,l,o,u){return e(n,r,i,l,o,u)};case 7:return function(r,i,l,o,u,a){return e(n,r,i,l,o,u,a)};default:return Oi(e,[n])}}function Ht(e){var n=e.length;return n===1?e:function(t){return Cn(e,t)}}function hc(e,n,t){var r=e.length;if(r===2)return e(n,t);switch(r){case 1:return Oi(e(n),[t]);case 2:return e(n,t);case 3:return function(i){return e(n,t,i)};case 4:return function(i,l){return e(n,t,i,l)};case 5:return function(i,l,o){return e(n,t,i,l,o)};case 6:return function(i,l,o,u){return e(n,t,i,l,o,u)};case 7:return function(i,l,o,u,a){return e(n,t,i,l,o,u,a)};default:return Oi(e,[n,t])}}function jr(e){var n=e.length;return n===2?e:function(t,r){return hc(e,t,r)}}function Gr(e){return e===void 0?{BS_PRIVATE_NESTED_SOME_NONE:0}:e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function Vp(e){if(e!=null)return Gr(e)}function Fp(e){if(e!==void 0)return Gr(e)}function gc(e){if(!(e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;if(n!==0)return{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}var $p=function(e,n,t){var r,i;i=t.length;var l=[];for(r=0;r<i-1;++r)l.push(t[r]);var o=t[i-1];for(r=0;r<o.length;++r)l.push(o[r]);return e[n].apply(e,l)};function _c(e,n){return $p(n,"concat",[e])}function ar(e,n){return n.join(e)}function Ii(e,n,t){return t.slice(e,n)}function Er(e,n){return n.filter(Ht(e))}function jp(e,n){return Fp(n.find(Ht(e)))}function yc(e,n){return n.findIndex(Ht(e))}function X(e,n){return n.map(Ht(e))}function hn(e,n){return n.map(jr(e))}function vt(e,n,t){return t.reduce(jr(e),n)}function Gp(e,n){return n.some(Ht(e))}function wc(e){if(e!==void 0)return gc(e);throw new Error("getExn")}function Up(e,n){return e<n?-1:e===n?0:1}function Bp(e,n){return e?n?0:1:n?-1:0}function qp(e,n){return e===n?0:e<n?-1:e>n||e===e?1:n===n?-1:0}function kc(e,n){return e===n?0:e<n?-1:1}function Ec(e,n){return e<n?e:n}function Wp(e,n){return e>n?e:n}function O(e,n){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",35,2],Error:new Error};return e[n]}function Z(e,n,t){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",45,2],Error:new Error};e[n]=t}function Hp(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(e[i]);return r}function fn(e,n){return Hp(e,Ht(n))}function Qp(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(i,e[i]);return r}function Il(e,n){return Qp(e,jr(n))}function Xp(e,n,t){for(var r=n,i=0,l=e.length;i<l;++i)r=t(r,e[i]);return r}function Kp(e,n,t){return Xp(e,n,jr(t))}function Yp(e,n,t,r,i){for(;;){var l=t;if(l===i)return!0;if(!r(e[l],n[l]))return!1;t=l+1|0}}function Zp(e,n,t){return Yp(e,n,0,t,Ec(e.length,n.length))}function Jp(e,n,t){return Zp(e,n,jr(t))}function ev(e,n,t,r,i){for(;;){var l=t,o=n;if(l>=r)return l;var u=e[l];if(!i(u,o))return l;t=l+1|0,n=u}}function nv(e,n){var t=e.length;if(t===0||t===1)return t;var r=e[0],i=e[1];if(n(r,i))for(var l=i,o=2;;){var u=o,a=l;if(u>=t)return u;var s=e[u];if(!n(a,s))return u;o=u+1|0,l=s}else return n(i,r)?-ev(e,i,2,t,n)|0:1}function Ne(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t}}function Fe(e){return{v:e,h:1,l:void 0,r:void 0}}function Ri(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function ln(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;if(r>(i+2|0)){var l=e.l,o=e.r;return Ri(l,o)?Ne(l,e.v,Ne(o,n,t)):Ne(Ne(l,e.v,o.l),o.v,Ne(o.r,n,t))}if(i<=(r+2|0))return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t};var u=t.l,a=t.r;return Ri(a,u)?Ne(Ne(e,n,u),t.v,a):Ne(Ne(e,n,u.l),u.v,Ne(u.r,t.v,a))}function Sc(e,n){var t=e.l;return t!==void 0?ln(Sc(t,n),e.v,e.r):(n.contents=e.v,e.r)}function xc(e,n){return e!==void 0?ln(xc(e.l,n),e.v,e.r):Fe(n)}function Tc(e,n){return e!==void 0?ln(e.l,e.v,Tc(e.r,n)):Fe(n)}function Vt(e,n,t){if(e===void 0)return xc(t,n);if(t===void 0)return Tc(e,n);var r=e.h,i=t.h;return r>(i+2|0)?ln(e.l,e.v,Vt(e.r,n,t)):i>(r+2|0)?ln(Vt(e,n,t.l),t.v,t.r):Ne(e,n,t)}function vo(e){var n=e.l,t=e.r,r=n!==void 0?vo(n):0,i=t!==void 0?vo(t):0;return(1+r|0)+i|0}function Cc(e,n,t){for(;;){var r=n,i=e,l=i.v,o=i.l,u=i.r,a=o!==void 0?Cc(o,r,t):r;t[a]=l;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function tv(e){if(e===void 0)return[];var n=vo(e),t=new Array(n);return Cc(e,0,t),t}function mo(e,n,t){switch(t){case 0:return;case 1:return Fe(e[n]);case 2:var r=e[n],i=e[n-1|0];return{v:i,h:2,l:Fe(r),r:void 0};case 3:var l=e[n],o=e[n-1|0],u=e[n-2|0];return{v:o,h:2,l:Fe(l),r:Fe(u)};default:var a=t/2|0,s=mo(e,n,a),v=e[n-a|0],m=mo(e,(n-a|0)-1|0,(t-a|0)-1|0);return Ne(s,v,m)}}function ho(e,n,t){switch(t){case 0:return;case 1:return Fe(e[n]);case 2:var r=e[n],i=e[n+1|0];return{v:i,h:2,l:Fe(r),r:void 0};case 3:var l=e[n],o=e[n+1|0],u=e[n+2|0];return{v:o,h:2,l:Fe(l),r:Fe(u)};default:var a=t/2|0,s=ho(e,n,a),v=e[n+a|0],m=ho(e,(n+a|0)+1|0,(t-a|0)-1|0);return Ne(s,v,m)}}function Tu(e){var n=e.l;e.l=n.r,n.r=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,l=i!==void 0?i.h:0;e.h=(r>l?r:l)+1|0;var o=n.l,u=o!==void 0?o.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function Cu(e){var n=e.r;e.r=n.l,n.l=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,l=i!==void 0?i.h:0;e.h=(r>l?r:l)+1|0;var o=n.r,u=o!==void 0?o.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function rv(e){var n=e.l,t=Cu(n);return e.l=t,Tu(e)}function iv(e){var n=e.r,t=Tu(n);return e.r=t,Cu(e)}function Kr(e){var n=e.l,t=n!==void 0?n.h:0,r=e.r,i=r!==void 0?r.h:0;return e.h=(t>i?t:i)+1|0,e}function lv(e){var n=e.l,t=e.r,r=n!==void 0?n.h:0,i=t!==void 0?t.h:0;if(r>(2+i|0)){var l=n.l,o=n.r;return Ri(l,o)?Kr(Tu(e)):Kr(rv(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return Ri(a,u)?Kr(Cu(e)):Kr(iv(e))}return e.h=(r>i?r:i)+1|0,e}function ov(e,n,t,r){for(;;){var i=t,l=n;if(i>=r)return i;var o=e[i];if(l<=o)return i;t=i+1|0,n=o}}function uv(e){var n=e.length;if(n===0||n===1)return n;var t=e[0],r=e[1];if(t<r)for(var i=r,l=2;;){var o=l,u=i;if(o>=n)return o;var a=e[o];if(u>=a)return o;l=o+1|0,i=a}else return t>r?-ov(e,r,2,n)|0:1}function go(e,n){if(e===void 0)return Fe(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;return n<t?e.l=go(r,n):e.r=go(i,n),lv(e)}function av(e){var n=e.length;if(n!==0){var t=uv(e),r;t>=0?r=ho(e,0,t):(t=-t|0,r=mo(e,t-1|0,t));for(var i=t;i<n;++i)r=go(r,e[i]);return r}}function Mi(e,n){if(e===void 0)return Fe(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;if(n<t){var l=Mi(r,n);return l===r?e:ln(l,t,i)}var o=Mi(i,n);return o===i?e:ln(r,t,o)}function _o(e,n){if(e===void 0)return e;var t=e.v,r=e.l,i=e.r;if(n===t){if(r===void 0)return i;if(i===void 0)return r;var l={contents:i.v},o=Sc(i,l);return ln(r,l.contents,o)}if(n<t){var u=_o(r,n);return u===r?e:ln(u,t,i)}var a=_o(i,n);return a===i?e:ln(r,t,a)}function sv(e,n){for(var t=n.length,r=e,i=0;i<t;++i){var l=n[i];r=_o(r,l)}return r}function Di(e,n){var t=e.v,r=e.l,i=e.r;if(n===t)return[r,i];if(n<t){if(r===void 0)return[void 0,e];var l=Di(r,n);return[l[0],Vt(l[1],t,i)]}if(i===void 0)return[e,void 0];var o=Di(i,n);return[Vt(r,t,o[0]),o[1]]}function In(e,n){if(e===void 0)return n;if(n===void 0)return e;var t=e.h,r=n.h;if(t>=r){if(r===1)return Mi(e,n.v);var i=e.v,l=e.l,o=e.r,u=Di(n,i);return Vt(In(l,u[0]),i,In(o,u[1]))}if(t===1)return Mi(n,e.v);var a=n.v,s=n.l,v=n.r,m=Di(e,a);return Vt(In(m[0],s),a,In(m[1],v))}var Nc=av,yo=tv;function Ac(e,n){return ar(e,Er(function(t){return t!==""},n))}function Pc(e,n){var t=n.slice(),r=t.shift();return vt(e,wc(r===void 0?void 0:Gr(r)),t)}function zc(e,n){var t=n.length-1|0;return _c(hn(function(r,i){return i===t?[r]:[r,e]},n),[])}function sr(e){return vt(In,void 0,e)}function cv(e){return vt(function(n,t){return n+t|0},0,e)}function Yr(e){return Gr(e)}var Zr;function Y(e){throw new Error(e)}function Lc(e){switch(e){case 0:return"1";case 1:return"0";case 2:return"x";case 3:return"z"}}function fv(e){return e===0}function dv(e){return e===1}function pv(e,n){return e===n?e:e===3?n:n===3?e:2}function vv(e,n){switch(e){case 0:return n>=3?0:n;case 1:return 1;case 2:return n!==1?2:1;case 3:return n}}function mv(e,n){switch(e){case 0:return 0;case 1:return n>=3?1:n;case 2:return n!==0?2:0;case 3:return n}}function hv(e){return e!==1?e!==0?2:1:0}function Pa(e,n){return e!==1?e!==0?n!==1?2:1:n!==1?n!==0?2:0:n!==1?2:1:1}function za(e,n){return e!==1?e!==0&&n!==0?2:0:n!==1?n!==0||n!==0?2:0:1}function gv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function _v(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function yv(e,n){return e!==1?e!==0||n!==0?2:0:n!==1?2:1}var La=0,Oa=1,wv=2,kv=3,bi=function(e,n){for(var t in e)n(t)};function cr(e,n){if(e===n)return 0;var t=typeof e,r=typeof n;switch(t){case"boolean":if(r==="boolean")return Bp(e,n);break;case"function":if(r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"compare: functional value",Error:new Error};break;case"number":if(r==="number")return qp(e,n);break;case"string":return r==="string"?kc(e,n):1;case"undefined":return-1}switch(r){case"string":return-1;case"undefined":return 1;default:if(t==="boolean")return 1;if(r==="boolean")return-1;if(t==="function")return 1;if(r==="function")return-1;if(t==="number")return n===null||n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(r==="number")return e===null||e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e===null)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(n===null)return e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e.BS_PRIVATE_NESTED_SOME_NONE!==void 0)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?Ia(e,n):-1;var i=e.TAG|0,l=n.TAG|0;if(i===248)return Up(e[1],n[1]);if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==l)return i<l?-1:1;var o=e.length|0,u=n.length|0;if(o===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===o)return 0;var v=cr(e[s],n[s]);if(v!==0)return v;a=s+1|0}else return e instanceof Date&&n instanceof Date?e-n:Ia(e,n);else if(o<u)for(var m=0;;){var p=m;if(p===o)return-1;var h=cr(e[p],n[p]);if(h!==0)return h;m=p+1|0}else for(var y=0;;){var w=y;if(w===u)return 1;var A=cr(e[w],n[w]);if(A!==0)return A;y=w+1|0}}}function Ia(e,n){var t={contents:void 0},r={contents:void 0},i=function(m,p){var h=m[2],y=m[1];if(!Object.prototype.hasOwnProperty.call(y,p)||cr(m[0][p],y[p])>0){var w=h.contents;if(!(w!==void 0&&p>=w)){h.contents=p;return}}},l=[e,n,r],o=function(m){return i(l,m)},u=[n,e,t],a=function(m){return i(u,m)};bi(e,o),bi(n,a);var s=t.contents,v=r.contents;return s!==void 0?v!==void 0?kc(s,v):-1:v!==void 0?1:0}function ne(e,n){if(e===n)return!0;var t=typeof e;if(t==="string"||t==="number"||t==="boolean"||t==="undefined"||e===null)return!1;var r=typeof n;if(t==="function"||r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if(r==="number"||r==="undefined"||n===null)return!1;var i=e.TAG|0,l=n.TAG|0;if(i===248)return e[1]===n[1];if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==l)return!1;var o=e.length|0,u=n.length|0;if(o===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===o)return!0;if(!ne(e[s],n[s]))return!1;a=s+1|0}else{if(e instanceof Date&&n instanceof Date)return!(e>n||e<n);var v={contents:!0},m=function(h){if(!Object.prototype.hasOwnProperty.call(n,h)){v.contents=!1;return}},p=function(h){if(!Object.prototype.hasOwnProperty.call(e,h)||!ne(n[h],e[h])){v.contents=!1;return}};return bi(e,m),v.contents&&bi(n,p),v.contents}else return!1}function Oc(e,n){return typeof e=="number"&&typeof n=="number"?e!==n:!ne(e,n)}function Ev(e,n){return typeof e=="number"&&typeof n=="number"?e>=n:cr(e,n)>=0}function pe(e){return e!==void 0?e.h:0}function De(e,n,t,r){var i=pe(e),l=pe(r);return{k:n,v:t,h:i>=l?i+1|0:l+1|0,l:e,r}}function rn(e,n){return{k:e,v:n,h:1,l:void 0,r:void 0}}function Ra(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function Sv(e,n){return e.v===n?e:{k:e.k,v:n,h:e.h,l:e.l,r:e.r}}function Ma(e,n,t,r){var i=e!==void 0?e.h:0,l=r!==void 0?r.h:0;if(i>(l+2|0)){var o=e.l,u=e.r;return pe(o)>=pe(u)?De(o,e.k,e.v,De(u,n,t,r)):De(De(o,e.k,e.v,u.l),u.k,u.v,De(u.r,n,t,r))}if(l<=(i+2|0))return{k:n,v:t,h:i>=l?i+1|0:l+1|0,l:e,r};var a=r.l,s=r.r;return pe(s)>=pe(a)?De(De(e,n,t,a),r.k,r.v,s):De(De(e,n,t,a.l),a.k,a.v,De(a.r,r.k,r.v,s))}function Vi(e){var n=e.l,t=e.r,r=n!==void 0?Vi(n):0,i=t!==void 0?Vi(t):0;return(1+r|0)+i|0}function Ic(e,n,t){for(;;){var r=n,i=e,l=i.k,o=i.l,u=i.r,a=o!==void 0?Ic(o,r,t):r;t[a]=l;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function Rc(e,n,t){for(;;){var r=n,i=e,l=i.l,o=i.k,u=i.r,a=l!==void 0?Rc(l,r,t):r;t[a]=[o,i.v];var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function xv(e){if(e===void 0)return[];var n=Vi(e),t=new Array(n);return Rc(e,0,t),t}function Tv(e){if(e===void 0)return[];var n=Vi(e),t=new Array(n);return Ic(e,0,t),t}function wo(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return rn(r[0],r[1]);case 2:var i=e[n],l=e[n-1|0],o=l,u=i;return{k:o[0],v:o[1],h:2,l:rn(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n-1|0],v=e[n-2|0],m=v,p=s,h=a;return{k:p[0],v:p[1],h:2,l:rn(h[0],h[1]),r:rn(m[0],m[1])};default:var y=t/2|0,w=wo(e,n,y),A=e[n-y|0],f=wo(e,(n-y|0)-1|0,(t-y|0)-1|0);return De(w,A[0],A[1],f)}}function ko(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return rn(r[0],r[1]);case 2:var i=e[n],l=e[n+1|0],o=l,u=i;return{k:o[0],v:o[1],h:2,l:rn(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n+1|0],v=e[n+2|0],m=v,p=s,h=a;return{k:p[0],v:p[1],h:2,l:rn(h[0],h[1]),r:rn(m[0],m[1])};default:var y=t/2|0,w=ko(e,n,y),A=e[n+y|0],f=ko(e,(n+y|0)+1|0,(t-y|0)-1|0);return De(w,A[0],A[1],f)}}function Nu(e){var n=e.l;e.l=n.r,n.r=e;var t=pe(e.l),r=pe(e.r);e.h=(t>r?t:r)+1|0;var i=pe(n.l),l=e.h;return n.h=(i>l?i:l)+1|0,n}function Au(e){var n=e.r;e.r=n.l,n.l=e;var t=pe(e.l),r=pe(e.r);e.h=(t>r?t:r)+1|0;var i=pe(n.r),l=e.h;return n.h=(i>l?i:l)+1|0,n}function Cv(e){var n=e.l,t=Au(n);return e.l=t,Nu(e)}function Nv(e){var n=e.r,t=Nu(n);return e.r=t,Au(e)}function Jr(e){var n=pe(e.l),t=pe(e.r);return e.h=(n>t?n:t)+1|0,e}function Av(e){var n=e.l,t=e.r,r=pe(n),i=pe(t);if(r>(2+i|0)){var l=n.l,o=n.r;return Ra(l,o)?Jr(Nu(e)):Jr(Cv(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return Ra(a,u)?Jr(Au(e)):Jr(Nv(e))}return e.h=(r>i?r:i)+1|0,e}function Pv(e,n){for(;;){var t=e;if(t!==void 0){var r=t.k;if(n===r)return t.v;e=n<r?t.l:t.r;continue}throw{RE_EXN_ID:"Not_found",Error:new Error}}}function Eo(e,n,t){if(e===void 0)return rn(n,t);var r=e.k;if(n===r)return e.k=n,e.v=t,e;var i=e.l,l=e.r;if(n<r){var o=Eo(i,n,t);e.l=o}else e.r=Eo(l,n,t);return Av(e)}function zv(e){var n=e.length;if(n!==0){var t=nv(e,function(o,u){return o[0]<u[0]}),r;t>=0?r=ko(e,0,t):(t=-t|0,r=wo(e,t-1|0,t));for(var i=t;i<n;++i){var l=e[i];r=Eo(r,l[0],l[1])}return r}}function it(e,n,t){if(e===void 0)return rn(n,t);var r=e.k;if(n===r)return Sv(e,t);var i=e.v;return n<r?Ma(it(e.l,n,t),r,i,e.r):Ma(e.l,r,i,it(e.r,n,t))}var Lv=xv,Mc=zv,Ov=Tv,lt=Pv;function Rl(e){return{_0:e}}function ot(e){return"1'b"+Lc(e._0)}function Ml(e){return{TAG:0,_0:e}}function Iv(e){return{TAG:1,_0:e}}function Rv(e){return{TAG:2,_0:e}}function Mv(e,n){return{TAG:3,_0:e,_1:0,_2:n}}function Dv(e,n){return{TAG:3,_0:e,_1:1,_2:n}}function bv(e,n){return{TAG:3,_0:e,_1:2,_2:n}}function Vv(e,n){return{TAG:3,_0:e,_1:3,_2:n}}function Fv(e,n){return{TAG:3,_0:e,_1:4,_2:n}}function $v(e,n){return{TAG:3,_0:e,_1:5,_2:n}}function jv(e,n,t){return{TAG:4,_0:e,_1:n,_2:t}}function Gv(e){return{_0:e}}function Uv(e){return{TAG:0,_0:e}}function Bv(e,n){return{TAG:1,_0:e,_1:n}}function qv(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function So(e){return typeof e=="number"?0:e._0}function xo(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:case 2:return e._1}}function Wv(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return Ec(e._0<e._1?e._0:e._1,e._2)}}function To(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return e._2}}function Hv(e,n){switch(n){case 0:return So(e);case 1:return xo(e);case 2:return Wv(e);case 3:return To(e)}}function cl(e,n){return Hv(e,n._0)}function Qv(e,n){return e!==void 0?cl(e,n):0}function Xv(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0>e._1?e._0:e._1;case 2:return Wp(e._0>e._1?e._0:e._1,e._2)}}function Kv(e,n){return{TAG:2,_0:So(e)+So(n)|0,_1:xo(e)+xo(n)|0,_2:To(e)+To(n)|0}}function Yv(e,n){switch(e){case 0:return n!==0?1:2;case 1:return n!==1?0:2;case 2:case 3:return n!==1?n!==0?2:0:1}}function Zv(e){return{TAG:0,_0:e}}function Jv(e){return{TAG:1,_0:e}}function em(e){return{TAG:2,_0:e}}function nm(e,n){return{TAG:3,_0:e,_1:n}}function Dc(e){if(!ne(e,[]))return Pc(function(n,t){return{TAG:3,_0:n,_1:t}},e)}function tm(e){return{TAG:0,_0:e}}function rm(e){return{TAG:1,_0:e}}function bc(e,n,t){for(;;){var r=e;if(typeof r=="number")return!1;switch(r.TAG|0){case 0:return r._0===n?t===0:!1;case 1:return r._0===n?t===1:!1;case 2:return r._0===n;case 3:if(bc(r._0,n,t))return!0;e=r._1;continue}}}function im(e,n,t,r){if(typeof e=="number"||e.TAG!==0)return Y("impossible");var i=e._0;if(typeof i=="number"||i.TAG===0)return Y("impossible");var l=Yv(t._0,r._0);return l===2?!1:bc(i._0,n,l)}function lm(e){switch(e){case 0:return pv;case 1:return vv;case 2:return mv}}function Vc(e){return!!e}var om=[],um=[],am=[],sm=[],cm={vars:om,nets:um,conts:am,procs:sm},Da={contents:0};function Dn(e){var n=Da.contents;return Da.contents=n+1|0,n}function fm(e){return e.TAG===2?[e._1,e._2]:Y("bug: expected EventNBA")}function Dl(e){return String(e._0)}var dm=[],Fc=[],$c=[],ba={active:dm,inactive:Fc,nba:$c};function pm(e){return e?"finished":"running"}function jc(e,n){var t=jp(function(r){return r.name===n},e);return t!==void 0?t:Y("missing key")}function vm(e,n){return Gp(function(t){return t.lhs===e},n)}function mm(e,n,t){return hc(e,n._0,t._0)}function Nn(e,n,t){return{_0:mm(e,n,t)}}function oe(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return t._0;case 1:return lt(e,t._0);case 2:var r=oe(e,t._0);return{_0:hv(r._0)};case 3:var i=t._1,l=t._0;if(i!==1)if(i!==0){var o=oe(e,l),u=oe(e,t._2);switch(i){case 0:case 1:return Y("impossible");case 2:return Nn(Pa,o,u);case 3:return Nn(za,o,u);case 4:return Nn(gv,o,u);case 5:return Nn(_v,o,u)}}else{var a=oe(e,l);if(dv(a._0))return a;var s=oe(e,t._2);return Nn(Pa,a,s)}else{var v=oe(e,l);if(fv(v._0))return v;var m=oe(e,t._2);return Nn(za,v,m)}case 4:var p=t._2,h=t._1,y=oe(e,t._0),w=y._0;if(w!==1){if(w!==0){var A=oe(e,h),f=oe(e,p);return Nn(yv,A,f)}n=h;continue}n=p;continue}}}function hm(e,n,t){return t?{TAG:0,_0:oe(n,t._0)}:{TAG:1,_0:e}}function yi(e,n){for(;;){var t=e;switch(t.TAG|0){case 0:return!1;case 1:return n===t._0;case 2:e=t._0;continue;case 3:if(yi(t._0,n))return!0;e=t._2;continue;case 4:if(yi(t._0,n)||yi(t._1,n))return!0;e=t._2;continue}}}function Gc(e,n,t){var r=jc(e,n).delay;return Kv(r,t)}function gm(e,n,t){for(var r=!1,i=0,l=-1,o=-1,u=function(v){return v.TAG===0?v._1===t:!1};!r&&i<e.length;){var a=O(e,i);if(a[0]>n)r=!0;else{var s=yc(u,a[1].active);s!==-1&&(r=!0,l=i,o=s)}i=i+1|0}if(l!==-1)return[l,o]}function _m(e,n){var t=Ii(0,n,e),r=Ii(n+1|0,e.length,e);return t.concat(r)}function ym(e,n){switch(n){case 0:return e.active;case 1:return e.inactive;case 2:return e.nba}}function bl(e,n,t){switch(n){case 0:return{active:t,inactive:e.inactive,nba:e.nba};case 1:return{active:e.active,inactive:t,nba:e.nba};case 2:return{active:e.active,inactive:e.inactive,nba:t}}}function fr(e,n,t,r){var i=yc(function(h){return Ev(h[0],t)},e);if(i===-1){var l=bl(ba,n,[r]);return e.concat([[t,l]])}if(ne(O(e,i)[0],t)){var o=O(e,i)[1],u=ym(o,n).concat([r]),a=bl(o,n,u),s=e.slice();return Z(s,i,[t,a]),s}var v=Ii(0,i,e),m=bl(ba,n,[r]),p=Ii(i,e.length,e);return v.concat([[t,m]]).concat(p)}function An(e,n){var t=n.pc+1|0;return t===e.stmts.length?{pc:0,state:Vc(e.proc_type)?0:3}:{pc:t,state:0}}function wi(e,n,t,r,i){if(ne(r,i))return e;for(var l=e.queue.slice(),o=Er(function(g){return n!==g[1]?yi(g[0].rhs,t):!1},hn(function(g,P){return[g,P]},e.vmodule.conts)),u=X(function(g){var P=g[0];return[P.delay,[g[1],oe(e.env,P.rhs)]]},o),a=function(g,P){var z=P[1],W=z[1],te=z[0],we=Gc(e.vmodule.nets,O(e.vmodule.conts,te).lhs,P[0]),Ze=cl(we,W),se=Xv(we),ke=gm(g,e.time+se|0,te),me;if(ke!==void 0){var x=ke[0],N=O(g,x),L=N[1],D=L.active.slice();if(D.splice(ke[1],1),ne(D,[]))me=_m(g,x);else{var F=g.slice();Z(F,x,[N[0],{active:D,inactive:L.inactive,nba:L.nba}]),me=F}}else me=g;return fr(me,0,e.time+Ze|0,{TAG:0,_0:Dn(),_1:te,_2:W})},s=vt(a,l,u),v=Er(function(g){var P=g[0];return P.state===1?im(O(O(e.vmodule.procs,g[1]).stmts,P.pc),t,r,i):!1},hn(function(g,P){return[g,P]},e.proc_env)),m=e.proc_env.slice(),p=0,h=v.length;p<h;++p){var y=O(v,p),w=y[1],A=An(O(e.vmodule.procs,w),y[0]);Z(m,w,A)}var f=X(function(g){return{TAG:3,_0:Dn(),_1:g[1]}},v),c=O(s,0),d=c[1],_=d.active.concat(f),S=d.inactive,T=d.nba,E={active:_,inactive:S,nba:T};return Z(s,0,[c[0],E]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:m,queue:s,monitor:e.monitor,output:e.output,time:e.time}}function wm(e){return e._0===0}function Va(e,n,t){var r=e.proc_env.slice(),i=O(r,n),l=O(e.vmodule.procs,n),o=i.pc+t|0,u=o===l.stmts.length?{pc:0,state:Vc(l.proc_type)?0:3}:{pc:o,state:i.state};return Z(r,n,u),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:r,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}function km(e){return e.TAG===0?Lc(e._0._0):Y("expected value found time")}function Em(e){return e.TAG===0?Y("expected time found value"):String(e._0)}function Sm(e,n){for(var t="",r=0,i=0;r<e.length;)if(e[r]==="%"){r=r+1|0;var l=e[r];l==="b"?(t=t.concat(km(O(n,i))),i=i+1|0):l==="d"?(t=t.concat(Em(O(n,i))),i=i+1|0):Y("unsupported format"),r=r+1|0}else t=t.concat(e[r]),r=r+1|0;return t=t.concat(`
`),t}function xm(e,n){return e.TAG===0?n.TAG===0?ne(e._0,n._0):Y("impossible"):n.TAG===0?Y("impossible"):!0}function Uc(e,n,t,r){var i=e.env,l=e.time,o=X(function(v){return hm(l,i,v)},t),u=r!==void 0?Jp(o,r,xm):!1;if(u)return[o,e.output];var a=Sm(n,o),s=e.output.concat(a);return[o,s]}function Tm(e,n){var t=O(e.vmodule.procs,n),r=O(e.proc_env,n),i=O(t.stmts,r.pc);if(typeof i=="number")return{vmodule:e.vmodule,status:1,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};switch(i.TAG|0){case 0:var l=i._0;if(typeof l=="number")return Y("impossible, all stars should have been preprocessed away");if(l.TAG===0){var o=An(t,r),u=o.pc,a={pc:u,state:2},s=e.proc_env.slice();Z(s,n,a);var v=fr(e.queue,0,e.time+l._0|0,{TAG:3,_0:Dn(),_1:n});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:s,queue:v,monitor:e.monitor,output:e.output,time:e.time}}var m=r.pc,p={pc:m,state:1},h=e.proc_env.slice();return Z(h,n,p),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:h,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};case 1:if(i._0){var y=oe(e.env,i._3),w=An(t,r),A=e.proc_env.slice();Z(A,n,w);var f=Qv(i._2,y),c=fr(e.queue,2,e.time+f|0,{TAG:2,_0:Dn(),_1:i._1,_2:y});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:A,queue:c,monitor:e.monitor,output:e.output,time:e.time}}var d=i._2,_=i._1,S=oe(e.env,i._3);if(d!==void 0){var T=r.pc,E={pc:T,state:2},g=e.proc_env.slice();Z(g,n,E);var P=cl(d,S),z=P===0?1:0,W=fr(e.queue,z,e.time+P|0,{TAG:1,_0:Dn(),_1:n,_2:_,_3:S});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:g,queue:W,monitor:e.monitor,output:e.output,time:e.time}}var te=lt(e.env,_),we=it(e.env,_,S),Ze=An(t,r),se=e.proc_env.slice();Z(se,n,Ze);var ke=e.vmodule,me=e.status,x=e.cont_env,N=e.queue,L=e.monitor,D=e.output,F=e.time,En={vmodule:ke,status:me,env:we,cont_env:x,proc_env:se,queue:N,monitor:L,output:D,time:F};return wi(En,-1,_,te,S);case 2:var Be=Uc(e,i._0,i._1,void 0),Sn=An(t,r),Me=e.proc_env.slice();return Z(Me,n,Sn),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Me,queue:e.queue,monitor:e.monitor,output:Be[1],time:e.time};case 3:var xn=[i._0,i._1,void 0],Nl=An(t,r),Hr=e.proc_env.slice();return Z(Hr,n,Nl),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Hr,queue:e.queue,monitor:xn,output:e.output,time:e.time};case 4:return Va(e,n,i._0);case 5:if(!wm(oe(e.env,i._0)))return Va(e,n,i._1);var Al=An(t,r),Qr=e.proc_env.slice();return Z(Qr,n,Al),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Qr,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}}function Fa(e,n){for(var t=0,r=e;t<100&&r.status===0&&O(r.proc_env,n).state===0;)t=t+1|0,r=Tm(r,n);return t===100&&Y("time out!"),r}function Cm(e,n){var t=O(e,n);if(t.TAG===4){var r=t._1;if(r.length!==1){var i=r.slice();i.shift(),e[n]={TAG:4,_0:t._0,_1:i};return}e.splice(n,1);return}e.splice(n,1)}function Nm(e){var n=e.proc_type,t;if(n){var r=n._0;t=r!==1&&r<3?0:1}else t=0;return{pc:t,state:0}}function Am(e,n){return n!==void 0?oe(e,n):{_0:2}}function $a(e){var n=X(function(i){return{TAG:3,_0:Dn(),_1:i[1]}},Er(function(i){return!0},hn(function(i,l){return[i,l]},e.procs))),t=Mc(fn(e.nets,function(i){return[i.name,{_0:vm(i.name,e.conts)?2:3}]})),r=Kp(e.vars,t,function(i,l){return it(i,l.target,Am(i,l.init))});return{vmodule:e,status:0,env:r,cont_env:fn(e.conts,function(i){return{_0:2}}),proc_env:fn(e.procs,Nm),queue:[[0,{active:n,inactive:Fc,nba:$c}]],monitor:void 0,output:"",time:0}}function Pm(e,n,t){var r=oe(e.env,n.rhs),i=Gc(e.vmodule.nets,n.lhs,n.delay),l=cl(i,r);return[l,{TAG:0,_0:Dn(),_1:t,_2:r}]}function ja(e){var n=hn(function(r,i){return Pm(e,r,i)},e.vmodule.conts),t=vt(function(r,i){return fr(r,0,i[0],i[1])},e.queue,n);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:t,monitor:e.monitor,output:e.output,time:e.time}}function Ga(e,n){return e.status===0?e.time===n:!1}function zm(e,n){var t=O(e.queue,0),r=t[1],i=r.active.slice(),l=O(i,n);Cm(i,n);var o=r.inactive,u=r.nba,a={active:i,inactive:o,nba:u},s=e.queue.slice();Z(s,0,[t[0],a]);var v=e.vmodule,m=e.status,p=e.env,h=e.cont_env,y=e.proc_env,w=e.monitor,A=e.output,f=e.time;switch(l.TAG|0){case 0:var c=l._1,d=h.slice();Z(d,c,l._2);var _=O(v.conts,c).lhs,S=jc(v.nets,_),T=lt(p,_),E=lm(S.type_),g=Pc(function(Yn,Ll){return Nn(E,Yn,Ll)},X(function(Yn){return O(d,Yn[1])},Er(function(Yn){return Yn[0].lhs===_},hn(function(Yn,Ll){return[Yn,Ll]},v.conts)))),P=it(p,_,g),z=v,W=m,te=y,we=w,Ze=A,se=f,ke={vmodule:z,status:W,env:P,cont_env:d,proc_env:te,queue:s,monitor:we,output:Ze,time:se};return wi(ke,c,_,T,g);case 1:var me=l._3,x=l._2,N=l._1,L=lt(p,x),D=it(p,x,me),F=O(y,N),En=O(v.procs,N),Be=An(En,F),Sn=y.slice();Z(Sn,N,Be);var Me=v,xn=m,Nl=h,Hr=w,Al=A,Qr=f,Yd={vmodule:Me,status:xn,env:D,cont_env:Nl,proc_env:Sn,queue:s,monitor:Hr,output:Al,time:Qr},Zd=wi(Yd,-1,x,L,me);return Fa(Zd,N);case 2:return Y("impossible: EventNBA cannot be in active region");case 3:var Pl=l._1,Jd=O(y,Pl),ep=Jd.pc,np={pc:ep,state:0},ka=y.slice();Z(ka,Pl,np);var tp=v,rp=m,ip=p,lp=h,op=w,up=A,ap=f,sp={vmodule:tp,status:rp,env:ip,cont_env:lp,proc_env:ka,queue:s,monitor:op,output:up,time:ap};return Fa(sp,Pl);case 4:var cp=l._1.slice(),Ea=cp.shift(),fp=wc(Ea===void 0?void 0:Gr(Ea)),Sa=fm(fp),xa=Sa[1],zl=Sa[0],dp=lt(p,zl),pp=it(p,zl,xa),vp=v,mp=m,hp=h,gp=y,_p=w,yp=A,wp=f,kp={vmodule:vp,status:mp,env:pp,cont_env:hp,proc_env:gp,queue:s,monitor:_p,output:yp,time:wp};return wi(kp,-1,zl,dp,xa)}}function Ua(e){if(e.status!==0)return!1;var n=O(e.queue,0),t=n[1];return ne(t.active,[])?Oc(t.inactive,[]):!1}function Lm(e){var n=O(e.queue,0),t=n[1],r=t.inactive,i=[],l=t.nba,o={active:r,inactive:i,nba:l},u=e.queue.slice();return Z(u,0,[e.time,o]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:u,monitor:e.monitor,output:e.output,time:e.time}}function Ba(e){if(e.status!==0)return!1;var n=O(e.queue,0),t=n[1];return ne(t.active,[])&&ne(t.inactive,[])?Oc(t.nba,[]):!1}function Om(e){var n=O(e.queue,0),t=n[1],r=Dn(),i=t.nba,l={TAG:4,_0:r,_1:i},o=t.active.concat([l]),u=t.inactive,a=[],s={active:o,inactive:u,nba:a},v=e.queue.slice();return Z(v,0,[e.time,s]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:v,monitor:e.monitor,output:e.output,time:e.time}}function qa(e){if(e.status!==0)return!1;var n=e.queue.length;if(n===0)return Y("impossible");var t=O(e.queue,0)[1];return ne(t.active,[])&&ne(t.inactive,[])?ne(t.nba,[]):!1}function Im(e){var n=e.monitor;if(n===void 0)return e;var t=n[1],r=n[0],i=Uc(e,r,t,n[2]);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:[r,t,i[0]],output:i[1],time:e.time}}function Rm(e){var n=Im(e),t=n.queue.slice();if(t.shift(),t.length===0)return{vmodule:n.vmodule,status:1,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:n.time};var r=O(t,0);return{vmodule:n.vmodule,status:n.status,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:r[0]}}var Mm=0,Vl=0,Wa=0,Ha=1,Dm=0,Fi={},bm={get exports(){return Fi},set exports(e){Fi=e}},fl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm=qn,Fm=Symbol.for("react.element"),$m=Symbol.for("react.fragment"),jm=Object.prototype.hasOwnProperty,Gm=Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Um={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)jm.call(n,r)&&!Um.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Fm,type:e,key:l,ref:o,props:i,_owner:Gm.current}}fl.Fragment=$m;fl.jsx=Bc;fl.jsxs=Bc;(function(e){e.exports=fl})(bm);const I=Fi.jsx,en=Fi.jsxs;function qc(e){return hn(function(n,t){return I(qn.Fragment,{children:n},String(t))},e)}function Bm(e){switch(e){case 0:return"&&";case 1:return"||";case 2:return"&";case 3:return"|";case 4:return"^";case 5:return"+"}}function Pe(e){switch(e.TAG|0){case 0:return ot(e._0);case 1:return e._0;case 2:return"!("+Pe(e._0)+")";case 3:return"("+Pe(e._0)+") "+Bm(e._1)+" ("+Pe(e._2)+")";case 4:return"("+Pe(e._0)+") ? ("+Pe(e._1)+") : ("+Pe(e._2)+")"}}function qm(e){return e?Pe(e._0):"$time"}function Pu(e){if(typeof e=="number")return"";switch(e.TAG|0){case 0:return"#"+String(e._0);case 1:return"#("+String(e._0)+", "+String(e._1)+")";case 2:return"#("+String(e._0)+", "+String(e._1)+", "+String(e._2)+")"}}function Qa(e){return e!==void 0?Pu(e)+" ":""}function Co(e){if(typeof e=="number")return"0";switch(e.TAG|0){case 0:return"posedge "+e._0;case 1:return"negedge "+e._0;case 2:return e._0;case 3:return Co(e._0)+" or "+Co(e._1)}}function Wm(e){return typeof e=="number"?"@(*)":e.TAG===0?"#"+String(e._0):"@("+Co(e._0)+")"}function Xa(e,n){return'"'+e+'"'+(n.length===0?"":`,
          `)+ar("",zc(", ",X(qm,n)))}function Wc(e){if(typeof e=="number")return"$finish";switch(e.TAG|0){case 0:return Wm(e._0);case 1:return e._0?e._1+" <= "+Qa(e._2)+Pe(e._3):e._1+" = "+Qa(e._2)+Pe(e._3);case 2:return"$display("+Xa(e._0,e._1)+")";case 3:return"$monitor("+Xa(e._0,e._1)+")";case 4:return"goto +"+String(e._0);case 5:return"goto +"+String(e._1)+" unless "+Pe(e._0)}}function Hm(e,n,t,r){var i=Wc(t),l=" "+(ne(n,r)?i+";":i+`;
`);return ne(e,r)?I("b",{children:l}):l}function Qm(e,n){var t=n.length-1|0;return hn(function(r,i){return Hm(e,t,r,i)},n)}function Xm(e){return Ac(" ",["assign",Pu(e.delay),e.lhs,"=",Pe(e.rhs)+";"])}function Km(e){return e!==void 0?" = "+Pe(e):""}function Ym(e){return"logic "+e.target+Km(e.init)+";"}function Zm(e){switch(e){case 0:return"wire";case 1:return"wand";case 2:return"wor"}}function Jm(e){return Ac(" ",[Zm(e.type_),Pu(e.delay),e.name+";"])}function eh(e){if(!e)return"initial";switch(e._0){case 0:return"always";case 1:return"always_comb";case 2:return"always_ff";case 3:return"always_latch"}}function nh(e,n,t){return qc(_c([[I("span",{children:"// Process "+String(t+1|0),className:"comment"}),`
`+eh(n.proc_type),` begin
`],Qm(O(e,t).state===3?-1:O(e,t).pc,n.stmts),[`
end`]],[]))}function th(e){switch(e){case 0:return"running";case 1:return"waiting";case 2:return"blocked";case 3:return"finished"}}function rh(e){return e.TAG===2?I("li",{children:"nba("+e._1+" <= "+ot(e._2)+")"},String(e._0)):Y("impossible")}function Fl(e,n){switch(n.TAG|0){case 0:var t=n._1;return"update("+O(e,t).lhs+"("+String(t)+")): "+ot(n._2);case 1:return"eval(cont: "+String(n._1+1|0)+", "+n._2+" = "+ot(n._3)+")";case 2:return"nba("+n._1+" <= "+ot(n._2)+")";case 3:return"eval(proc: "+String(n._1+1|0)+")";case 4:return en("ol",{children:["NBA events:",fn(n._1,rh)]})}}function ih(e,n){return qc(zc(`

`,[ar(`
`,X(Jm,e.nets)),ar(`
`,X(Ym,e.vars)),ar(`
`,X(Xm,e.conts))].concat(hn(function(t,r){return nh(n,t,r)},e.procs))))}function lh(e){return e!==void 0?I("code",{children:Wc({TAG:3,_0:e[0],_1:e[1]})}):"No monitor"}var $l={contents:0};function oh(e){return $l.contents=$l.contents+1|0,e+("/"+$l.contents)}function uh(e){return e==null?!1:typeof e.RE_EXN_ID=="string"}var an=oh("Compiler.CompileError");function Ka(e,n){return{TAG:0,_0:e,_1:n}}function ei(e,n,t,r){return{TAG:1,_0:e,_1:n,_2:t,_3:r}}function Ya(e,n){return{TAG:2,_0:e,_1:n}}function Za(e,n){return{TAG:3,_0:e,_1:n}}function ah(e,n){return{TAG:4,_0:e,_1:n}}function sh(e,n,t){return{TAG:5,_0:e,_1:n,_2:t}}function ch(e){return{TAG:6,_0:e}}function Ja(e,n){return[e,n]}function fh(e){return{TAG:0,_0:e}}function es(e,n,t){return{TAG:1,_0:e,_1:n,_2:t}}function ns(e,n,t){return{TAG:3,_0:e,_1:n,_2:t}}function ts(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function dh(e,n){return{TAG:4,_0:e,_1:n}}function ph(e){return{TAG:0,_0:e}}function vh(e){return{TAG:1,_0:e}}function dn(e){for(;;){var n=e;switch(n.TAG|0){case 0:return;case 1:return Nc([n._0]);case 2:e=n._0;continue;case 3:return In(dn(n._0),dn(n._2));case 4:return sr([dn(n._0),dn(n._1),dn(n._2)])}}}function mh(e){if(e)return dn(e._0)}function yt(e){for(;;){var n=e;if(typeof n=="number")return;switch(n.TAG|0){case 0:var t=n._1;if(t===void 0)return;e=t;continue;case 1:return dn(n._3);case 2:case 3:return sr(X(mh,n._1));case 4:return In(dn(n._0),yt(n._1));case 5:return sr([dn(n._0),yt(n._1),yt(n._2)]);case 6:return sr(X(yt,n._0))}}}function ki(e){for(;;){var n=e;if(typeof n=="number")return;switch(n.TAG|0){case 1:return Nc([n._1]);case 4:e=n._1;continue;case 5:return In(ki(n._1),ki(n._2));case 6:return sr(X(ki,n._0));default:return}}}function hh(e){var n=yt(e),t=ki(e),r=Dc(X(function(l){return{TAG:2,_0:l}},yo(sv(n,yo(t))))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:e}}function et(e){if(typeof e=="number")return e;switch(e.TAG|0){case 0:if(typeof e._0!="number")return e;var n=e._1;if(n===void 0)return{TAG:0,_0:{TAG:1,_0:0},_1:void 0};var t=et(n),r=Dc(X(function(l){return{TAG:2,_0:l}},yo(yt(t)))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:t};case 4:return{TAG:4,_0:e._0,_1:et(e._1)};case 5:return{TAG:5,_0:e._0,_1:et(e._1),_2:et(e._2)};case 6:return{TAG:6,_0:X(et,e._0)};default:return e}}function dr(e){for(;;){var n=e;if(typeof n=="number")return 0;switch(n.TAG|0){case 0:var t=n._0;if(typeof t=="number"||t.TAG!==0)return 1;throw{RE_EXN_ID:an,_1:"Time control not allowed inside new-type always",Error:new Error};case 1:if(n._2===void 0)return 0;throw{RE_EXN_ID:an,_1:"Delayed assignments not allowed inside new-type always",Error:new Error};case 4:e=n._1;continue;case 5:return dr(n._1)+dr(n._2)|0;case 6:return cv(X(dr,n._0));default:return 0}}}function gh(e,n){if(ne(e,{_0:1})||ne(e,{_0:3})){if(dr(n)===0)return;throw{RE_EXN_ID:an,_1:"Event control not allowed inside always_comb/always_latch",Error:new Error}}if(ne(e,{_0:2})&&dr(n)!==1)throw{RE_EXN_ID:an,_1:"Must be one and one only event control inside always_ff",Error:new Error}}function _h(e,n){if(!e)return et(n);var t=e._0;return t!==1&&t<3?et(n):hh(n)}function yh(e){return{target:e[0],init:e[1]}}function wh(e,n,t){var r;switch(e){case"triand":case"wand":r=1;break;case"tri":case"wire":r=0;break;case"trior":case"wor":r=2;break;default:r=Y("impossible net type")}return{type_:r,name:t,delay:n}}function zu(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:an,_1:"Expected variable, found: "+Pe(e),Error:new Error}}function kh(e,n){if(n.length===2){var t=zu(O(n,0)),r=O(n,1);return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:an,_1:"Expected two arguments to not gate",Error:new Error}}function Eh(e){switch(e){case"and":return 2;case"or":return 3;case"xor":return 4;default:return Y("impossible gate")}}function Sh(e,n,t){if(t.length===3){var r=zu(O(t,0)),i=O(t,1),l=O(t,2),o={TAG:3,_0:i,_1:e,_2:l};return{lhs:r,delay:n,rhs:o}}throw{RE_EXN_ID:an,_1:"Expected three arguments to gate",Error:new Error}}function xh(e,n){if(n.length===3){var t=zu(O(n,0)),r={TAG:2,_0:{TAG:3,_0:O(n,1),_1:3,_2:O(n,2)}};return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:an,_1:"Expected three arguments to gate",Error:new Error}}function _t(e){if(typeof e=="number")return[0];switch(e.TAG|0){case 0:var n=e._1,t=e._0;return n!==void 0?[{TAG:0,_0:t}].concat(_t(n)):[{TAG:0,_0:t}];case 1:return[{TAG:1,_0:e._0,_1:e._1,_2:e._2,_3:e._3}];case 2:return[{TAG:2,_0:e._0,_1:e._1}];case 3:return[{TAG:3,_0:e._0,_1:e._1}];case 4:var r=_t(e._1);return[{TAG:5,_0:e._0,_1:r.length+1|0}].concat(r);case 5:var i=_t(e._1),l=_t(e._2);return[{TAG:5,_0:e._0,_1:i.length+2|0}].concat(i,[{TAG:4,_0:l.length+1|0}],l);case 6:return vt(function(o,u){return o.concat(_t(u))},[],e._0)}}function Th(e){switch(e){case"always":return{_0:0};case"always_comb":return{_0:1};case"always_ff":return{_0:2};case"always_latch":return{_0:3};case"initial":return 0;default:return Y("impossible proc type")}}function Ch(e,n){switch(n.TAG|0){case 0:var t=X(yh,n._0);return{vars:e.vars.concat(t),nets:e.nets,conts:e.conts,procs:e.procs};case 1:var r=n._1,i=n._0,l=X(function(T){return wh(i,r,T)},n._2);return{vars:e.vars,nets:e.nets.concat(l),conts:e.conts,procs:e.procs};case 2:var o=n._2,u=n._1,a=n._0;if(a==="not"){var s=X(function(T){return kh(u,T)},o);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(s),procs:e.procs}}if(a==="and"||a==="or"){var v=Eh(a),m=X(function(T){return Sh(v,u,T)},o);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(m),procs:e.procs}}if(a==="nor"){var p=X(function(T){return xh(u,T)},o);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(p),procs:e.procs}}throw{RE_EXN_ID:an,_1:"Unsupported gate: "+a,Error:new Error};case 3:var h=n._0,y=n._1,w=n._2,A={lhs:h,delay:y,rhs:w};return{vars:e.vars,nets:e.nets,conts:e.conts.concat([A]),procs:e.procs};case 4:var f=n._1,c=Th(n._0);gh(c,f);var d=_h(c,f),_=_t(d),S={proc_type:c,stmts:_};return{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs.concat([S])}}}function Nh(e){var n=[],t=[],r=[],i=[],l={vars:n,nets:t,conts:r,procs:i};return vt(Ch,l,e)}var Ah=0;const Hc=ohm.grammar(String.raw`
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
`),Qc=Hc.createSemantics();Qc.addOperation("translate",{Module(e,n,t,r,i){return r.children.map(l=>l.translate())},Decl_no_init(e){return Ja(e.translate(),Zr)},Decl_init(e,n,t){return Ja(e.translate(),Yr(t.translate()))},GateDecl(e,n,t,r){return t.asIteration().children.map(i=>i.translate())},Top_decl(e,n,t){return fh(n.asIteration().children.map(r=>r.translate()))},Top_net(e,n,t){return es(e.translate(),Vl,n.asIteration().children.map(r=>r.translate()))},Top_net_delay(e,n,t,r){return es(e.translate(),n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_cont(e,n,t,r,i){return ns(n.translate(),Vl,r.translate())},Top_cont_delay(e,n,t,r,i,l){return ns(t.translate(),n.translate(),i.translate())},Top_gate(e,n,t){return ts(e.sourceString,Vl,n.asIteration().children.map(r=>r.translate()))},Top_gate_delay(e,n,t,r){return ts(e.sourceString,n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_proc(e,n){return dh(e.sourceString,n.translate())},WireType(e){return this.sourceString},TimeCont_delay(e,n){return tm(n.translate())},TimeCont_event(e,n,t,r){return rm(t.translate())},TimeCont_star(e,n,t,r){return Dm},Stmt_blocking(e,n,t,r){return ei(Wa,e.translate(),Zr,t.translate())},Stmt_blocking_delay(e,n,t,r,i){return ei(Wa,e.translate(),Yr(t.translate()),r.translate())},Stmt_nonblocking(e,n,t,r){return ei(Ha,e.translate(),Zr,t.translate())},Stmt_nonblocking_delay(e,n,t,r,i){return ei(Ha,e.translate(),Yr(t.translate()),r.translate())},Stmt_if(e,n,t,r,i){return ah(t.translate(),i.translate())},Stmt_if_else(e,n,t,r,i,l,o){return sh(t.translate(),i.translate(),o.translate())},Stmt_display(e,n,t,r,i,l,o){return Ya(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_display_no_args(e,n,t,r,i){return Ya(t.translate(),[])},Stmt_monitor(e,n,t,r,i,l,o){return Za(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_monitor_no_args(e,n,t,r,i){return Za(t.translate(),[])},Stmt_finish(e,n){return Ah},Stmt_time_stmt(e,n){return Ka(e.translate(),Yr(n.translate()))},Stmt_time(e,n){return Ka(e.translate(),Zr)},Stmt_block(e,n,t){return ch(n.children.map(r=>r.translate()))},Delay_one(e,n,t,r){return Uv(t.translate())},Delay_two(e,n,t,r,i,l){return Bv(t.translate(),i.translate())},Delay_three(e,n,t,r,i,l,o,u){return qv(t.translate(),i.translate(),o.translate())},Event_Exp(e){return e.translate()},Event_Exp_or(e,n,t){return nm(e.translate(),t.translate())},Event_Exp1_id(e){return em(e.translate())},Event_Exp1_posedge(e,n){return Zv(n.translate())},Event_Exp1_negedge(e,n){return Jv(n.translate())},Exp(e){return e.translate()},Exp_cond(e,n,t,r,i){return jv(e.translate(),t.translate(),i.translate())},Exp1(e){return e.translate()},Exp1_lor(e,n,t){return Dv(e.translate(),t.translate())},Exp2(e){return e.translate()},Exp2_land(e,n,t){return Mv(e.translate(),t.translate())},Exp3(e){return e.translate()},Exp3_bor(e,n,t){return Vv(e.translate(),t.translate())},Exp4(e){return e.translate()},Exp4_bxor(e,n,t){return Fv(e.translate(),t.translate())},Exp5(e){return e.translate()},Exp5_band(e,n,t){return bv(e.translate(),t.translate())},Exp6(e){return e.translate()},Exp6_add(e,n,t){return $v(e.translate(),t.translate())},Exp7(e){return e.translate()},Exp7_not(e,n){return Rv(n.translate())},Exp8_id(e){return Iv(e.translate())},Exp8_bit(e){return Ml(e.translate())},Exp8_zero(e){return Ml(Rl(Oa))},Exp8_one(e){return Ml(Rl(La))},Exp8_paren(e,n,t){return n.translate()},ExpOrTime_exp(e){return Gv(e.translate())},ExpOrTime_time(e){return Mm},number(e){return parseInt(this.sourceString,10)},bit(e,n){var t;switch(n.sourceString.toLowerCase()){case"1":t=La;break;case"0":t=Oa;break;case"x":t=wv;break;case"z":t=kv;break;default:throw"Impossible!"}return Rl(t)},string(e,n,t){return n.sourceString},id(e,n){return this.sourceString}});function Ph(e){try{const n=Hc.match(e);return ph(Qc(n).translate())}catch(n){if(n instanceof TypeError)return vh(n.message);throw n}}var jl=Mc([["empty.sv",`module empty;

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
`]]);function zh(e){return uh(e)?e:{RE_EXN_ID:"JsError",_1:e}}function Lh(e){var n=$a(cm),t=ja(n),r=qn.useState(function(){return t}),i=r[1],l=r[0],o=function(E){Cn(i,function(g){return Ua(g)?Lm(g):g})},u=function(E){Cn(i,function(g){return Ba(g)?Om(g):g})},a=function(E){Cn(i,function(g){return qa(g)?Rm(g):g})},s=qn.useState(function(){return lt(jl,"empty.sv")}),v=s[1],m=s[0],p=function(E){var g=Ph(m);if(g.TAG===0){var P;try{P=$a(Nh(g._0))}catch(te){var z=zh(te);if(z.RE_EXN_ID===an){window.alert("Compile phase of parsing failed: "+z._1);return}throw z}var W=ja(P);return Cn(i,function(te){return W})}window.alert("Could not parse Verilog code: "+g._0)},h=function(E){Cn(v,function(g){return E.target.value}),E.preventDefault()},y=function(E){var g=E.target.value;Cn(v,function(P){return lt(jl,g)}),E.preventDefault()},w="Simulation time: "+String(l.time)+" ("+pm(l.status)+")",A=fn(Lv(l.env),function(E){var g=E[0];return I("li",{children:g+": "+ot(E[1])},g)}),f=Il(l.cont_env,function(E,g){return I("li",{children:O(l.vmodule.conts,E).lhs+"("+String(E)+"): "+ot(g)},String(E))}),c=Il(l.proc_env,function(E,g){return I("li",{children:"state = "+th(g.state)+", pc = "+String(g.pc)},String(E))}),d=fn(l.queue,function(E){var g=E[1],P=E[0],z=Il(g.active,function(se,ke){var me=Ga(l,P);return I("li",{children:Fl(l.vmodule.conts,ke),className:me?"active":"",onClick:function(x){return Cn(i,function(N){return Ga(N,P)?zm(N,se):N})}},Dl(ke))}),W=fn(g.inactive,function(se){return I("li",{children:Fl(l.vmodule.conts,se)},Dl(se))}),te=fn(g.nba,function(se){return I("li",{children:Fl(l.vmodule.conts,se)},Dl(se))}),we=Ua(l),Ze=Ba(l);return en("li",{children:[I("b",{children:"Time: "+String(P)}),en("ul",{children:[en("li",{children:["Active:",I("ul",{children:z})]}),en("li",{children:["Inactive:",I("ul",{children:W})],className:we?"active":"",onClick:o}),en("li",{children:["NBA:",I("ul",{children:te})],className:Ze?"active":"",onClick:u})]})]},"Time"+String(P))}),_=lh(l.monitor),S=fn(Ov(jl),function(E){return I("option",{children:E},E)}),T=qa(l);return I("table",{children:I("tbody",{children:en("tr",{children:[en("td",{children:[I("div",{children:I("select",{children:S,defaultValue:"empty.sv",onChange:y})}),I("div",{children:I("textarea",{cols:60,rows:20,value:m,onChange:h})}),I("div",{children:I("button",{children:"Parse",onClick:p})})]}),I("td",{children:I("div",{children:ih(l.vmodule,l.proc_env),id:"code-render"})}),en("td",{children:[I("p",{children:w,className:T?"active":"",id:"simulation-time",onClick:a}),I("p",{children:"Environment:"}),I("ul",{children:A}),I("p",{children:"Drivers (continuous assignments):"}),I("ul",{children:f}),I("p",{children:"Processes:"}),I("ol",{children:c}),I("p",{children:"Events:",className:""}),I("ul",{children:d}),I("p",{children:"Monitor:"}),I("p",{children:_})]}),en("td",{children:[I("p",{children:"Output:",id:"output"}),I("pre",{children:l.output})]})]})}),id:"main-table"})}var Oh=Lh;function Ih(e){if(e!==void 0)return gc(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}var No={},Rh={get exports(){return No},set exports(e){No=e}},Ie={},Ao={},Mh={get exports(){return Ao},set exports(e){Ao=e}},Xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,N){var L=x.length;x.push(N);e:for(;0<L;){var D=L-1>>>1,F=x[D];if(0<i(F,N))x[D]=N,x[L]=F,L=D;else break e}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var N=x[0],L=x.pop();if(L!==N){x[0]=L;e:for(var D=0,F=x.length,En=F>>>1;D<En;){var Be=2*(D+1)-1,Sn=x[Be],Me=Be+1,xn=x[Me];if(0>i(Sn,L))Me<F&&0>i(xn,Sn)?(x[D]=xn,x[Me]=L,D=Me):(x[D]=Sn,x[Be]=L,D=Be);else if(Me<F&&0>i(xn,L))x[D]=xn,x[Me]=L,D=Me;else break e}}return N}function i(x,N){var L=x.sortIndex-N.sortIndex;return L!==0?L:x.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],s=[],v=1,m=null,p=3,h=!1,y=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(x){for(var N=t(s);N!==null;){if(N.callback===null)r(s);else if(N.startTime<=x)r(s),N.sortIndex=N.expirationTime,n(a,N);else break;N=t(s)}}function _(x){if(w=!1,d(x),!y)if(t(a)!==null)y=!0,ke(S);else{var N=t(s);N!==null&&me(_,N.startTime-x)}}function S(x,N){y=!1,w&&(w=!1,f(g),g=-1),h=!0;var L=p;try{for(d(N),m=t(a);m!==null&&(!(m.expirationTime>N)||x&&!W());){var D=m.callback;if(typeof D=="function"){m.callback=null,p=m.priorityLevel;var F=D(m.expirationTime<=N);N=e.unstable_now(),typeof F=="function"?m.callback=F:m===t(a)&&r(a),d(N)}else r(a);m=t(a)}if(m!==null)var En=!0;else{var Be=t(s);Be!==null&&me(_,Be.startTime-N),En=!1}return En}finally{m=null,p=L,h=!1}}var T=!1,E=null,g=-1,P=5,z=-1;function W(){return!(e.unstable_now()-z<P)}function te(){if(E!==null){var x=e.unstable_now();z=x;var N=!0;try{N=E(!0,x)}finally{N?we():(T=!1,E=null)}}else T=!1}var we;if(typeof c=="function")we=function(){c(te)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,se=Ze.port2;Ze.port1.onmessage=te,we=function(){se.postMessage(null)}}else we=function(){A(te,0)};function ke(x){E=x,T||(T=!0,we())}function me(x,N){g=A(function(){x(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,ke(S))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(x){switch(p){case 1:case 2:case 3:var N=3;break;default:N=p}var L=p;p=N;try{return x()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,N){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var L=p;p=x;try{return N()}finally{p=L}},e.unstable_scheduleCallback=function(x,N,L){var D=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?D+L:D):L=D,x){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=L+F,x={id:v++,callback:N,priorityLevel:x,startTime:L,expirationTime:F,sortIndex:-1},L>D?(x.sortIndex=L,n(s,x),t(a)===null&&x===t(s)&&(w?(f(g),g=-1):w=!0,me(_,L-D))):(x.sortIndex=F,n(a,x),y||h||(y=!0,ke(S))),x},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(x){var N=p;return function(){var L=p;p=N;try{return x.apply(this,arguments)}finally{p=L}}}})(Xc);(function(e){e.exports=Xc})(Mh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc=qn,Oe=Ao;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yc=new Set,Sr={};function mt(e,n){Ft(e,n),Ft(e+"Capture",n)}function Ft(e,n){for(Sr[e]=n,e=0;e<n.length;e++)Yc.add(n[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=Object.prototype.hasOwnProperty,Dh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rs={},is={};function bh(e){return Po.call(is,e)?!0:Po.call(rs,e)?!1:Dh.test(e)?is[e]=!0:(rs[e]=!0,!1)}function Vh(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fh(e,n,t,r){if(n===null||typeof n>"u"||Vh(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lu=/[\-:]([a-z])/g;function Ou(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Lu,Ou);ae[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Lu,Ou);ae[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Lu,Ou);ae[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Iu(e,n,t,r){var i=ae.hasOwnProperty(n)?ae[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Fh(n,t,i,r)&&(t=null),r||i===null?bh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var kn=Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ni=Symbol.for("react.element"),wt=Symbol.for("react.portal"),kt=Symbol.for("react.fragment"),Ru=Symbol.for("react.strict_mode"),zo=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),Lo=Symbol.for("react.suspense"),Oo=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),ef=Symbol.for("react.offscreen"),ls=Symbol.iterator;function Kt(e){return e===null||typeof e!="object"?null:(e=ls&&e[ls]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Gl;function ir(e){if(Gl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Gl=n&&n[1]||""}return`
`+Gl+e}var Ul=!1;function Bl(e,n){if(!e||Ul)return"";Ul=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Ul=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ir(e):""}function $h(e){switch(e.tag){case 5:return ir(e.type);case 16:return ir("Lazy");case 13:return ir("Suspense");case 19:return ir("SuspenseList");case 0:case 2:case 15:return e=Bl(e.type,!1),e;case 11:return e=Bl(e.type.render,!1),e;case 1:return e=Bl(e.type,!0),e;default:return""}}function Io(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kt:return"Fragment";case wt:return"Portal";case zo:return"Profiler";case Ru:return"StrictMode";case Lo:return"Suspense";case Oo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jc:return(e.displayName||"Context")+".Consumer";case Zc:return(e._context.displayName||"Context")+".Provider";case Mu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Du:return n=e.displayName||null,n!==null?n:Io(e.type)||"Memo";case Pn:n=e._payload,e=e._init;try{return Io(e(n))}catch{}}return null}function jh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Io(n);case 8:return n===Ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gh(e){var n=nf(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ti(e){e._valueTracker||(e._valueTracker=Gh(e))}function tf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=nf(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ro(e,n){var t=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function os(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Wn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function rf(e,n){n=n.checked,n!=null&&Iu(e,"checked",n,!1)}function Mo(e,n){rf(e,n);var t=Wn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Do(e,n.type,t):n.hasOwnProperty("defaultValue")&&Do(e,n.type,Wn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function us(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Do(e,n,t){(n!=="number"||$i(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var lr=Array.isArray;function Ot(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Wn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function bo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function as(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(lr(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Wn(t)}}function lf(e,n){var t=Wn(n.value),r=Wn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ss(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function of(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?of(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ri,uf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ri=ri||document.createElement("div"),ri.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function xr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uh=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){Uh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),pr[n]=pr[e]})});function af(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||pr.hasOwnProperty(e)&&pr[e]?(""+n).trim():n+"px"}function sf(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=af(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Bh=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,n){if(n){if(Bh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function $o(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Go=null,It=null,Rt=null;function cs(e){if(e=qr(e)){if(typeof Go!="function")throw Error(k(280));var n=e.stateNode;n&&(n=hl(n),Go(e.stateNode,e.type,n))}}function cf(e){It?Rt?Rt.push(e):Rt=[e]:It=e}function ff(){if(It){var e=It,n=Rt;if(Rt=It=null,cs(e),n)for(e=0;e<n.length;e++)cs(n[e])}}function df(e,n){return e(n)}function pf(){}var ql=!1;function vf(e,n,t){if(ql)return e(n,t);ql=!0;try{return df(e,n,t)}finally{ql=!1,(It!==null||Rt!==null)&&(pf(),ff())}}function Tr(e,n){var t=e.stateNode;if(t===null)return null;var r=hl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Uo=!1;if(gn)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{Uo=!1}function qh(e,n,t,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(v){this.onError(v)}}var vr=!1,ji=null,Gi=!1,Bo=null,Wh={onError:function(e){vr=!0,ji=e}};function Hh(e,n,t,r,i,l,o,u,a){vr=!1,ji=null,qh.apply(Wh,arguments)}function Qh(e,n,t,r,i,l,o,u,a){if(Hh.apply(this,arguments),vr){if(vr){var s=ji;vr=!1,ji=null}else throw Error(k(198));Gi||(Gi=!0,Bo=s)}}function ht(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function mf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function fs(e){if(ht(e)!==e)throw Error(k(188))}function Xh(e){var n=e.alternate;if(!n){if(n=ht(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return fs(i),e;if(l===r)return fs(i),n;l=l.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function hf(e){return e=Xh(e),e!==null?gf(e):null}function gf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=gf(e);if(n!==null)return n;e=e.sibling}return null}var _f=Oe.unstable_scheduleCallback,ds=Oe.unstable_cancelCallback,Kh=Oe.unstable_shouldYield,Yh=Oe.unstable_requestPaint,Q=Oe.unstable_now,Zh=Oe.unstable_getCurrentPriorityLevel,Vu=Oe.unstable_ImmediatePriority,yf=Oe.unstable_UserBlockingPriority,Ui=Oe.unstable_NormalPriority,Jh=Oe.unstable_LowPriority,wf=Oe.unstable_IdlePriority,dl=null,on=null;function e0(e){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(dl,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:r0,n0=Math.log,t0=Math.LN2;function r0(e){return e>>>=0,e===0?32:31-(n0(e)/t0|0)|0}var ii=64,li=4194304;function or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=or(u):(l&=o,l!==0&&(r=or(l)))}else o=t&~i,o!==0?r=or(o):l!==0&&(r=or(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Xe(n),i=1<<t,r|=e[t],n&=~i;return r}function i0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Xe(l),u=1<<o,a=i[o];a===-1?(!(u&t)||u&r)&&(i[o]=i0(u,n)):a<=n&&(e.expiredLanes|=u),l&=~u}}function qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kf(){var e=ii;return ii<<=1,!(ii&4194240)&&(ii=64),e}function Wl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ur(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Xe(n),e[n]=t}function o0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Xe(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Fu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Xe(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var b=0;function Ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sf,$u,xf,Tf,Cf,Wo=!1,oi=[],bn=null,Vn=null,Fn=null,Cr=new Map,Nr=new Map,Ln=[],u0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ps(e,n){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Cr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(n.pointerId)}}function Zt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=qr(n),n!==null&&$u(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function a0(e,n,t,r,i){switch(n){case"focusin":return bn=Zt(bn,e,n,t,r,i),!0;case"dragenter":return Vn=Zt(Vn,e,n,t,r,i),!0;case"mouseover":return Fn=Zt(Fn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Cr.set(l,Zt(Cr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Nr.set(l,Zt(Nr.get(l)||null,e,n,t,r,i)),!0}return!1}function Nf(e){var n=nt(e.target);if(n!==null){var t=ht(n);if(t!==null){if(n=t.tag,n===13){if(n=mf(t),n!==null){e.blockedOn=n,Cf(e.priority,function(){xf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ei(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ho(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);jo=r,t.target.dispatchEvent(r),jo=null}else return n=qr(t),n!==null&&$u(n),e.blockedOn=t,!1;n.shift()}return!0}function vs(e,n,t){Ei(e)&&t.delete(n)}function s0(){Wo=!1,bn!==null&&Ei(bn)&&(bn=null),Vn!==null&&Ei(Vn)&&(Vn=null),Fn!==null&&Ei(Fn)&&(Fn=null),Cr.forEach(vs),Nr.forEach(vs)}function Jt(e,n){e.blockedOn===n&&(e.blockedOn=null,Wo||(Wo=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,s0)))}function Ar(e){function n(i){return Jt(i,e)}if(0<oi.length){Jt(oi[0],e);for(var t=1;t<oi.length;t++){var r=oi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&Jt(bn,e),Vn!==null&&Jt(Vn,e),Fn!==null&&Jt(Fn,e),Cr.forEach(n),Nr.forEach(n),t=0;t<Ln.length;t++)r=Ln[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&(t=Ln[0],t.blockedOn===null);)Nf(t),t.blockedOn===null&&Ln.shift()}var Mt=kn.ReactCurrentBatchConfig,qi=!0;function c0(e,n,t,r){var i=b,l=Mt.transition;Mt.transition=null;try{b=1,ju(e,n,t,r)}finally{b=i,Mt.transition=l}}function f0(e,n,t,r){var i=b,l=Mt.transition;Mt.transition=null;try{b=4,ju(e,n,t,r)}finally{b=i,Mt.transition=l}}function ju(e,n,t,r){if(qi){var i=Ho(e,n,t,r);if(i===null)to(e,n,r,Wi,t),ps(e,r);else if(a0(i,e,n,t,r))r.stopPropagation();else if(ps(e,r),n&4&&-1<u0.indexOf(e)){for(;i!==null;){var l=qr(i);if(l!==null&&Sf(l),l=Ho(e,n,t,r),l===null&&to(e,n,r,Wi,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else to(e,n,r,null,t)}}var Wi=null;function Ho(e,n,t,r){if(Wi=null,e=bu(r),e=nt(e),e!==null)if(n=ht(e),n===null)e=null;else if(t=n.tag,t===13){if(e=mf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Wi=e,null}function Af(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zh()){case Vu:return 1;case yf:return 4;case Ui:case Jh:return 16;case wf:return 536870912;default:return 16}default:return 16}}var Rn=null,Gu=null,Si=null;function Pf(){if(Si)return Si;var e,n=Gu,t=n.length,r,i="value"in Rn?Rn.value:Rn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Si=i.slice(e,1<r?1-r:void 0)}function xi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function ms(){return!1}function Re(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ui:ms,this.isPropagationStopped=ms,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),n}var Qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=Re(Qt),Br=q({},Qt,{view:0,detail:0}),d0=Re(Br),Hl,Ql,er,pl=q({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(Hl=e.screenX-er.screenX,Ql=e.screenY-er.screenY):Ql=Hl=0,er=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),hs=Re(pl),p0=q({},pl,{dataTransfer:0}),v0=Re(p0),m0=q({},Br,{relatedTarget:0}),Xl=Re(m0),h0=q({},Qt,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=Re(h0),_0=q({},Qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y0=Re(_0),w0=q({},Qt,{data:0}),gs=Re(w0),k0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=S0[e])?!!n[e]:!1}function Bu(){return x0}var T0=q({},Br,{key:function(e){if(e.key){var n=k0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),C0=Re(T0),N0=q({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_s=Re(N0),A0=q({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),P0=Re(A0),z0=q({},Qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=Re(z0),O0=q({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),I0=Re(O0),R0=[9,13,27,32],qu=gn&&"CompositionEvent"in window,mr=null;gn&&"documentMode"in document&&(mr=document.documentMode);var M0=gn&&"TextEvent"in window&&!mr,zf=gn&&(!qu||mr&&8<mr&&11>=mr),ys=String.fromCharCode(32),ws=!1;function Lf(e,n){switch(e){case"keyup":return R0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Et=!1;function D0(e,n){switch(e){case"compositionend":return Of(n);case"keypress":return n.which!==32?null:(ws=!0,ys);case"textInput":return e=n.data,e===ys&&ws?null:e;default:return null}}function b0(e,n){if(Et)return e==="compositionend"||!qu&&Lf(e,n)?(e=Pf(),Si=Gu=Rn=null,Et=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zf&&n.locale!=="ko"?null:n.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ks(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!V0[e.type]:n==="textarea"}function If(e,n,t,r){cf(r),n=Hi(n,"onChange"),0<n.length&&(t=new Uu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var hr=null,Pr=null;function F0(e){Bf(e,0)}function vl(e){var n=Tt(e);if(tf(n))return e}function $0(e,n){if(e==="change")return n}var Rf=!1;if(gn){var Kl;if(gn){var Yl="oninput"in document;if(!Yl){var Es=document.createElement("div");Es.setAttribute("oninput","return;"),Yl=typeof Es.oninput=="function"}Kl=Yl}else Kl=!1;Rf=Kl&&(!document.documentMode||9<document.documentMode)}function Ss(){hr&&(hr.detachEvent("onpropertychange",Mf),Pr=hr=null)}function Mf(e){if(e.propertyName==="value"&&vl(Pr)){var n=[];If(n,Pr,e,bu(e)),vf(F0,n)}}function j0(e,n,t){e==="focusin"?(Ss(),hr=n,Pr=t,hr.attachEvent("onpropertychange",Mf)):e==="focusout"&&Ss()}function G0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(Pr)}function U0(e,n){if(e==="click")return vl(n)}function B0(e,n){if(e==="input"||e==="change")return vl(n)}function q0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ye=typeof Object.is=="function"?Object.is:q0;function zr(e,n){if(Ye(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Po.call(n,i)||!Ye(e[i],n[i]))return!1}return!0}function xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ts(e,n){var t=xs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xs(t)}}function Df(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Df(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bf(){for(var e=window,n=$i();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=$i(e.document)}return n}function Wu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function W0(e){var n=bf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Df(t.ownerDocument.documentElement,t)){if(r!==null&&Wu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ts(t,l);var o=Ts(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var H0=gn&&"documentMode"in document&&11>=document.documentMode,St=null,Qo=null,gr=null,Xo=!1;function Cs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xo||St==null||St!==$i(r)||(r=St,"selectionStart"in r&&Wu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&zr(gr,r)||(gr=r,r=Hi(Qo,"onSelect"),0<r.length&&(n=new Uu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=St)))}function ai(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var xt={animationend:ai("Animation","AnimationEnd"),animationiteration:ai("Animation","AnimationIteration"),animationstart:ai("Animation","AnimationStart"),transitionend:ai("Transition","TransitionEnd")},Zl={},Vf={};gn&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete xt.animationend.animation,delete xt.animationiteration.animation,delete xt.animationstart.animation),"TransitionEvent"in window||delete xt.transitionend.transition);function ml(e){if(Zl[e])return Zl[e];if(!xt[e])return e;var n=xt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Vf)return Zl[e]=n[t];return e}var Ff=ml("animationend"),$f=ml("animationiteration"),jf=ml("animationstart"),Gf=ml("transitionend"),Uf=new Map,Ns="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,n){Uf.set(e,n),mt(n,[e])}for(var Jl=0;Jl<Ns.length;Jl++){var eo=Ns[Jl],Q0=eo.toLowerCase(),X0=eo[0].toUpperCase()+eo.slice(1);Qn(Q0,"on"+X0)}Qn(Ff,"onAnimationEnd");Qn($f,"onAnimationIteration");Qn(jf,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn(Gf,"onTransitionEnd");Ft("onMouseEnter",["mouseout","mouseover"]);Ft("onMouseLeave",["mouseout","mouseover"]);Ft("onPointerEnter",["pointerout","pointerover"]);Ft("onPointerLeave",["pointerout","pointerover"]);mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function As(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Qh(r,n,void 0,e),e.currentTarget=null}function Bf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;As(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;As(i,u,s),l=a}}}if(Gi)throw e=Bo,Gi=!1,Bo=null,e}function $(e,n){var t=n[eu];t===void 0&&(t=n[eu]=new Set);var r=e+"__bubble";t.has(r)||(qf(n,e,2,!1),t.add(r))}function no(e,n,t){var r=0;n&&(r|=4),qf(t,e,r,n)}var si="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[si]){e[si]=!0,Yc.forEach(function(t){t!=="selectionchange"&&(K0.has(t)||no(t,!1,e),no(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[si]||(n[si]=!0,no("selectionchange",!1,n))}}function qf(e,n,t,r){switch(Af(n)){case 1:var i=c0;break;case 4:i=f0;break;default:i=ju}t=i.bind(null,n,t,e),i=void 0,!Uo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function to(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=nt(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}vf(function(){var s=l,v=bu(t),m=[];e:{var p=Uf.get(e);if(p!==void 0){var h=Uu,y=e;switch(e){case"keypress":if(xi(t)===0)break e;case"keydown":case"keyup":h=C0;break;case"focusin":y="focus",h=Xl;break;case"focusout":y="blur",h=Xl;break;case"beforeblur":case"afterblur":h=Xl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=P0;break;case Ff:case $f:case jf:h=g0;break;case Gf:h=L0;break;case"scroll":h=d0;break;case"wheel":h=I0;break;case"copy":case"cut":case"paste":h=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=_s}var w=(n&4)!==0,A=!w&&e==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var c=s,d;c!==null;){d=c;var _=d.stateNode;if(d.tag===5&&_!==null&&(d=_,f!==null&&(_=Tr(c,f),_!=null&&w.push(Or(c,_,d)))),A)break;c=c.return}0<w.length&&(p=new h(p,y,null,t,v),m.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==jo&&(y=t.relatedTarget||t.fromElement)&&(nt(y)||y[_n]))break e;if((h||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=t.relatedTarget||t.toElement,h=s,y=y?nt(y):null,y!==null&&(A=ht(y),y!==A||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=s),h!==y)){if(w=hs,_="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=_s,_="onPointerLeave",f="onPointerEnter",c="pointer"),A=h==null?p:Tt(h),d=y==null?p:Tt(y),p=new w(_,c+"leave",h,t,v),p.target=A,p.relatedTarget=d,_=null,nt(v)===s&&(w=new w(f,c+"enter",y,t,v),w.target=d,w.relatedTarget=A,_=w),A=_,h&&y)n:{for(w=h,f=y,c=0,d=w;d;d=gt(d))c++;for(d=0,_=f;_;_=gt(_))d++;for(;0<c-d;)w=gt(w),c--;for(;0<d-c;)f=gt(f),d--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break n;w=gt(w),f=gt(f)}w=null}else w=null;h!==null&&Ps(m,p,h,w,!1),y!==null&&A!==null&&Ps(m,A,y,w,!0)}}e:{if(p=s?Tt(s):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var S=$0;else if(ks(p))if(Rf)S=B0;else{S=G0;var T=j0}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=U0);if(S&&(S=S(e,s))){If(m,S,t,v);break e}T&&T(e,p,s),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Do(p,"number",p.value)}switch(T=s?Tt(s):window,e){case"focusin":(ks(T)||T.contentEditable==="true")&&(St=T,Qo=s,gr=null);break;case"focusout":gr=Qo=St=null;break;case"mousedown":Xo=!0;break;case"contextmenu":case"mouseup":case"dragend":Xo=!1,Cs(m,t,v);break;case"selectionchange":if(H0)break;case"keydown":case"keyup":Cs(m,t,v)}var E;if(qu)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Et?Lf(e,t)&&(g="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(g="onCompositionStart");g&&(zf&&t.locale!=="ko"&&(Et||g!=="onCompositionStart"?g==="onCompositionEnd"&&Et&&(E=Pf()):(Rn=v,Gu="value"in Rn?Rn.value:Rn.textContent,Et=!0)),T=Hi(s,g),0<T.length&&(g=new gs(g,e,null,t,v),m.push({event:g,listeners:T}),E?g.data=E:(E=Of(t),E!==null&&(g.data=E)))),(E=M0?D0(e,t):b0(e,t))&&(s=Hi(s,"onBeforeInput"),0<s.length&&(v=new gs("onBeforeInput","beforeinput",null,t,v),m.push({event:v,listeners:s}),v.data=E))}Bf(m,n)})}function Or(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Hi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Tr(e,t),l!=null&&r.unshift(Or(e,l,i)),l=Tr(e,n),l!=null&&r.push(Or(e,l,i))),e=e.return}return r}function gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ps(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=Tr(t,l),a!=null&&o.unshift(Or(t,a,u))):i||(a=Tr(t,l),a!=null&&o.push(Or(t,a,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Y0=/\r\n?/g,Z0=/\u0000|\uFFFD/g;function zs(e){return(typeof e=="string"?e:""+e).replace(Y0,`
`).replace(Z0,"")}function ci(e,n,t){if(n=zs(n),zs(e)!==n&&t)throw Error(k(425))}function Qi(){}var Ko=null,Yo=null;function Zo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jo=typeof setTimeout=="function"?setTimeout:void 0,J0=typeof clearTimeout=="function"?clearTimeout:void 0,Ls=typeof Promise=="function"?Promise:void 0,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ls<"u"?function(e){return Ls.resolve(null).then(e).catch(n1)}:Jo;function n1(e){setTimeout(function(){throw e})}function ro(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Ar(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Ar(n)}function $n(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Os(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Xt=Math.random().toString(36).slice(2),tn="__reactFiber$"+Xt,Ir="__reactProps$"+Xt,_n="__reactContainer$"+Xt,eu="__reactEvents$"+Xt,t1="__reactListeners$"+Xt,r1="__reactHandles$"+Xt;function nt(e){var n=e[tn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[_n]||t[tn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Os(e);e!==null;){if(t=e[tn])return t;e=Os(e)}return n}e=t,t=e.parentNode}return null}function qr(e){return e=e[tn]||e[_n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function hl(e){return e[Ir]||null}var nu=[],Ct=-1;function Xn(e){return{current:e}}function j(e){0>Ct||(e.current=nu[Ct],nu[Ct]=null,Ct--)}function V(e,n){Ct++,nu[Ct]=e.current,e.current=n}var Hn={},ve=Xn(Hn),xe=Xn(!1),st=Hn;function $t(e,n){var t=e.type.contextTypes;if(!t)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function Xi(){j(xe),j(ve)}function Is(e,n,t){if(ve.current!==Hn)throw Error(k(168));V(ve,n),V(xe,t)}function Wf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,jh(e)||"Unknown",i));return q({},t,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,st=ve.current,V(ve,e),V(xe,xe.current),!0}function Rs(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Wf(e,n,st),r.__reactInternalMemoizedMergedChildContext=e,j(xe),j(ve),V(ve,e)):j(xe),V(xe,t)}var cn=null,gl=!1,io=!1;function Hf(e){cn===null?cn=[e]:cn.push(e)}function i1(e){gl=!0,Hf(e)}function Kn(){if(!io&&cn!==null){io=!0;var e=0,n=b;try{var t=cn;for(b=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}cn=null,gl=!1}catch(i){throw cn!==null&&(cn=cn.slice(e+1)),_f(Vu,Kn),i}finally{b=n,io=!1}}return null}var Nt=[],At=0,Yi=null,Zi=0,be=[],Ve=0,ct=null,pn=1,vn="";function Zn(e,n){Nt[At++]=Zi,Nt[At++]=Yi,Yi=e,Zi=n}function Qf(e,n,t){be[Ve++]=pn,be[Ve++]=vn,be[Ve++]=ct,ct=e;var r=pn;e=vn;var i=32-Xe(r)-1;r&=~(1<<i),t+=1;var l=32-Xe(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-Xe(n)+i|t<<i|r,vn=l+e}else pn=1<<l|t<<i|r,vn=e}function Hu(e){e.return!==null&&(Zn(e,1),Qf(e,1,0))}function Qu(e){for(;e===Yi;)Yi=Nt[--At],Nt[At]=null,Zi=Nt[--At],Nt[At]=null;for(;e===ct;)ct=be[--Ve],be[Ve]=null,vn=be[--Ve],be[Ve]=null,pn=be[--Ve],be[Ve]=null}var Le=null,ze=null,G=!1,Qe=null;function Xf(e,n){var t=$e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ms(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Le=e,ze=$n(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Le=e,ze=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ct!==null?{id:pn,overflow:vn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=$e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Le=e,ze=null,!0):!1;default:return!1}}function tu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ru(e){if(G){var n=ze;if(n){var t=n;if(!Ms(e,n)){if(tu(e))throw Error(k(418));n=$n(t.nextSibling);var r=Le;n&&Ms(e,n)?Xf(r,t):(e.flags=e.flags&-4097|2,G=!1,Le=e)}}else{if(tu(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,Le=e}}}function Ds(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function fi(e){if(e!==Le)return!1;if(!G)return Ds(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Zo(e.type,e.memoizedProps)),n&&(n=ze)){if(tu(e))throw Kf(),Error(k(418));for(;n;)Xf(e,n),n=$n(n.nextSibling)}if(Ds(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ze=$n(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ze=null}}else ze=Le?$n(e.stateNode.nextSibling):null;return!0}function Kf(){for(var e=ze;e;)e=$n(e.nextSibling)}function jt(){ze=Le=null,G=!1}function Xu(e){Qe===null?Qe=[e]:Qe.push(e)}var l1=kn.ReactCurrentBatchConfig;function We(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Ji=Xn(null),el=null,Pt=null,Ku=null;function Yu(){Ku=Pt=el=null}function Zu(e){var n=Ji.current;j(Ji),e._currentValue=n}function iu(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Dt(e,n){el=e,Ku=Pt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Se=!0),e.firstContext=null)}function Ge(e){var n=e._currentValue;if(Ku!==e)if(e={context:e,memoizedValue:n,next:null},Pt===null){if(el===null)throw Error(k(308));Pt=e,el.dependencies={lanes:0,firstContext:e}}else Pt=Pt.next=e;return n}var tt=null;function Ju(e){tt===null?tt=[e]:tt.push(e)}function Yf(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Ju(n)):(t.next=i.next,i.next=t),n.interleaved=t,yn(e,r)}function yn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var zn=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function jn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,yn(e,t)}return i=r.interleaved,i===null?(n.next=n,Ju(r)):(n.next=i.next,i.next=n),r.interleaved=n,yn(e,t)}function Ti(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fu(e,t)}}function bs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function nl(e,n,t,r){var i=e.updateQueue;zn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==o&&(u===null?v.firstBaseUpdate=s:u.next=s,v.lastBaseUpdate=a))}if(l!==null){var m=i.baseState;o=0,v=s=a=null,u=l;do{var p=u.lane,h=u.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,w=u;switch(p=n,h=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(h,m,p);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(h,m,p):y,p==null)break e;m=q({},m,p);break e;case 2:zn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else h={eventTime:h,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(s=v=h,a=m):v=v.next=h,o|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(v===null&&(a=m),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);dt|=o,e.lanes=o,e.memoizedState=m}}function Vs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Jf=new Kc.Component().refs;function lu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var _l={isMounted:function(e){return(e=e._reactInternals)?ht(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Un(e),l=mn(r,i);l.payload=n,t!=null&&(l.callback=t),n=jn(e,l,i),n!==null&&(Ke(n,e,i,r),Ti(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Un(e),l=mn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=jn(e,l,i),n!==null&&(Ke(n,e,i,r),Ti(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=Un(e),i=mn(t,r);i.tag=2,n!=null&&(i.callback=n),n=jn(e,i,r),n!==null&&(Ke(n,e,r,t),Ti(n,e,r))}};function Fs(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!zr(t,r)||!zr(i,l):!0}function ed(e,n,t){var r=!1,i=Hn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ge(l):(i=Te(n)?st:ve.current,r=n.contextTypes,l=(r=r!=null)?$t(e,i):Hn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=_l,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function $s(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&_l.enqueueReplaceState(n,n.state,null)}function ou(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Jf,ea(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Ge(l):(l=Te(n)?st:ve.current,i.context=$t(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(lu(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&_l.enqueueReplaceState(i,i.state,null),nl(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;u===Jf&&(u=i.refs={}),o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function di(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function js(e){var n=e._init;return n(e._payload)}function nd(e){function n(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Bn(f,c),f.index=0,f.sibling=null,f}function l(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,d,_){return c===null||c.tag!==6?(c=fo(d,f.mode,_),c.return=f,c):(c=i(c,d),c.return=f,c)}function a(f,c,d,_){var S=d.type;return S===kt?v(f,c,d.props.children,_,d.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Pn&&js(S)===c.type)?(_=i(c,d.props),_.ref=nr(f,c,d),_.return=f,_):(_=Li(d.type,d.key,d.props,null,f.mode,_),_.ref=nr(f,c,d),_.return=f,_)}function s(f,c,d,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=po(d,f.mode,_),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function v(f,c,d,_,S){return c===null||c.tag!==7?(c=at(d,f.mode,_,S),c.return=f,c):(c=i(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=fo(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ni:return d=Li(c.type,c.key,c.props,null,f.mode,d),d.ref=nr(f,null,c),d.return=f,d;case wt:return c=po(c,f.mode,d),c.return=f,c;case Pn:var _=c._init;return m(f,_(c._payload),d)}if(lr(c)||Kt(c))return c=at(c,f.mode,d,null),c.return=f,c;di(f,c)}return null}function p(f,c,d,_){var S=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:u(f,c,""+d,_);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ni:return d.key===S?a(f,c,d,_):null;case wt:return d.key===S?s(f,c,d,_):null;case Pn:return S=d._init,p(f,c,S(d._payload),_)}if(lr(d)||Kt(d))return S!==null?null:v(f,c,d,_,null);di(f,d)}return null}function h(f,c,d,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(d)||null,u(c,f,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ni:return f=f.get(_.key===null?d:_.key)||null,a(c,f,_,S);case wt:return f=f.get(_.key===null?d:_.key)||null,s(c,f,_,S);case Pn:var T=_._init;return h(f,c,d,T(_._payload),S)}if(lr(_)||Kt(_))return f=f.get(d)||null,v(c,f,_,S,null);di(c,_)}return null}function y(f,c,d,_){for(var S=null,T=null,E=c,g=c=0,P=null;E!==null&&g<d.length;g++){E.index>g?(P=E,E=null):P=E.sibling;var z=p(f,E,d[g],_);if(z===null){E===null&&(E=P);break}e&&E&&z.alternate===null&&n(f,E),c=l(z,c,g),T===null?S=z:T.sibling=z,T=z,E=P}if(g===d.length)return t(f,E),G&&Zn(f,g),S;if(E===null){for(;g<d.length;g++)E=m(f,d[g],_),E!==null&&(c=l(E,c,g),T===null?S=E:T.sibling=E,T=E);return G&&Zn(f,g),S}for(E=r(f,E);g<d.length;g++)P=h(E,f,g,d[g],_),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?g:P.key),c=l(P,c,g),T===null?S=P:T.sibling=P,T=P);return e&&E.forEach(function(W){return n(f,W)}),G&&Zn(f,g),S}function w(f,c,d,_){var S=Kt(d);if(typeof S!="function")throw Error(k(150));if(d=S.call(d),d==null)throw Error(k(151));for(var T=S=null,E=c,g=c=0,P=null,z=d.next();E!==null&&!z.done;g++,z=d.next()){E.index>g?(P=E,E=null):P=E.sibling;var W=p(f,E,z.value,_);if(W===null){E===null&&(E=P);break}e&&E&&W.alternate===null&&n(f,E),c=l(W,c,g),T===null?S=W:T.sibling=W,T=W,E=P}if(z.done)return t(f,E),G&&Zn(f,g),S;if(E===null){for(;!z.done;g++,z=d.next())z=m(f,z.value,_),z!==null&&(c=l(z,c,g),T===null?S=z:T.sibling=z,T=z);return G&&Zn(f,g),S}for(E=r(f,E);!z.done;g++,z=d.next())z=h(E,f,g,z.value,_),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?g:z.key),c=l(z,c,g),T===null?S=z:T.sibling=z,T=z);return e&&E.forEach(function(te){return n(f,te)}),G&&Zn(f,g),S}function A(f,c,d,_){if(typeof d=="object"&&d!==null&&d.type===kt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ni:e:{for(var S=d.key,T=c;T!==null;){if(T.key===S){if(S=d.type,S===kt){if(T.tag===7){t(f,T.sibling),c=i(T,d.props.children),c.return=f,f=c;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Pn&&js(S)===T.type){t(f,T.sibling),c=i(T,d.props),c.ref=nr(f,T,d),c.return=f,f=c;break e}t(f,T);break}else n(f,T);T=T.sibling}d.type===kt?(c=at(d.props.children,f.mode,_,d.key),c.return=f,f=c):(_=Li(d.type,d.key,d.props,null,f.mode,_),_.ref=nr(f,c,d),_.return=f,f=_)}return o(f);case wt:e:{for(T=d.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=po(d,f.mode,_),c.return=f,f=c}return o(f);case Pn:return T=d._init,A(f,c,T(d._payload),_)}if(lr(d))return y(f,c,d,_);if(Kt(d))return w(f,c,d,_);di(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(f,c.sibling),c=i(c,d),c.return=f,f=c):(t(f,c),c=fo(d,f.mode,_),c.return=f,f=c),o(f)):t(f,c)}return A}var Gt=nd(!0),td=nd(!1),Wr={},un=Xn(Wr),Rr=Xn(Wr),Mr=Xn(Wr);function rt(e){if(e===Wr)throw Error(k(174));return e}function na(e,n){switch(V(Mr,n),V(Rr,e),V(un,Wr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Vo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Vo(n,e)}j(un),V(un,n)}function Ut(){j(un),j(Rr),j(Mr)}function rd(e){rt(Mr.current);var n=rt(un.current),t=Vo(n,e.type);n!==t&&(V(Rr,e),V(un,t))}function ta(e){Rr.current===e&&(j(un),j(Rr))}var U=Xn(0);function tl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var lo=[];function ra(){for(var e=0;e<lo.length;e++)lo[e]._workInProgressVersionPrimary=null;lo.length=0}var Ci=kn.ReactCurrentDispatcher,oo=kn.ReactCurrentBatchConfig,ft=0,B=null,J=null,re=null,rl=!1,_r=!1,Dr=0,o1=0;function ce(){throw Error(k(321))}function ia(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ye(e[t],n[t]))return!1;return!0}function la(e,n,t,r,i,l){if(ft=l,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ci.current=e===null||e.memoizedState===null?c1:f1,e=t(r,i),_r){l=0;do{if(_r=!1,Dr=0,25<=l)throw Error(k(301));l+=1,re=J=null,n.updateQueue=null,Ci.current=d1,e=t(r,i)}while(_r)}if(Ci.current=il,n=J!==null&&J.next!==null,ft=0,re=J=B=null,rl=!1,n)throw Error(k(300));return e}function oa(){var e=Dr!==0;return Dr=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?B.memoizedState=re=e:re=re.next=e,re}function Ue(){if(J===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=re===null?B.memoizedState:re.next;if(n!==null)re=n,J=e;else{if(e===null)throw Error(k(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},re===null?B.memoizedState=re=e:re=re.next=e}return re}function br(e,n){return typeof n=="function"?n(e):n}function uo(e){var n=Ue(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var v=s.lane;if((ft&v)===v)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:v,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=m,o=r):a=a.next=m,B.lanes|=v,dt|=v}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,Ye(r,n.memoizedState)||(Se=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,B.lanes|=l,dt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ao(e){var n=Ue(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ye(l,n.memoizedState)||(Se=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function id(){}function ld(e,n){var t=B,r=Ue(),i=n(),l=!Ye(r.memoizedState,i);if(l&&(r.memoizedState=i,Se=!0),r=r.queue,ua(ad.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,Vr(9,ud.bind(null,t,r,i,n),void 0,null),ie===null)throw Error(k(349));ft&30||od(t,n,i)}return i}function od(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ud(e,n,t,r){n.value=t,n.getSnapshot=r,sd(n)&&cd(e)}function ad(e,n,t){return t(function(){sd(n)&&cd(e)})}function sd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ye(e,t)}catch{return!0}}function cd(e){var n=yn(e,1);n!==null&&Ke(n,e,1,-1)}function Gs(e){var n=nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},n.queue=e,e=e.dispatch=s1.bind(null,B,e),[n.memoizedState,e]}function Vr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function fd(){return Ue().memoizedState}function Ni(e,n,t,r){var i=nn();B.flags|=e,i.memoizedState=Vr(1|n,t,void 0,r===void 0?null:r)}function yl(e,n,t,r){var i=Ue();r=r===void 0?null:r;var l=void 0;if(J!==null){var o=J.memoizedState;if(l=o.destroy,r!==null&&ia(r,o.deps)){i.memoizedState=Vr(n,t,l,r);return}}B.flags|=e,i.memoizedState=Vr(1|n,t,l,r)}function Us(e,n){return Ni(8390656,8,e,n)}function ua(e,n){return yl(2048,8,e,n)}function dd(e,n){return yl(4,2,e,n)}function pd(e,n){return yl(4,4,e,n)}function vd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function md(e,n,t){return t=t!=null?t.concat([e]):null,yl(4,4,vd.bind(null,n,e),t)}function aa(){}function hd(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ia(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function gd(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ia(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function _d(e,n,t){return ft&21?(Ye(t,n)||(t=kf(),B.lanes|=t,dt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=t)}function u1(e,n){var t=b;b=t!==0&&4>t?t:4,e(!0);var r=oo.transition;oo.transition={};try{e(!1),n()}finally{b=t,oo.transition=r}}function yd(){return Ue().memoizedState}function a1(e,n,t){var r=Un(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},wd(e))kd(n,t);else if(t=Yf(e,n,t,r),t!==null){var i=ge();Ke(t,e,r,i),Ed(t,n,r)}}function s1(e,n,t){var r=Un(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(wd(e))kd(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,Ye(u,o)){var a=n.interleaved;a===null?(i.next=i,Ju(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Yf(e,n,i,r),t!==null&&(i=ge(),Ke(t,e,r,i),Ed(t,n,r))}}function wd(e){var n=e.alternate;return e===B||n!==null&&n===B}function kd(e,n){_r=rl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ed(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fu(e,t)}}var il={readContext:Ge,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},c1={readContext:Ge,useCallback:function(e,n){return nn().memoizedState=[e,n===void 0?null:n],e},useContext:Ge,useEffect:Us,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ni(4194308,4,vd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ni(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ni(4,2,e,n)},useMemo:function(e,n){var t=nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=nn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=a1.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=nn();return e={current:e},n.memoizedState=e},useState:Gs,useDebugValue:aa,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=Gs(!1),n=e[0];return e=u1.bind(null,e[1]),nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,i=nn();if(G){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),ie===null)throw Error(k(349));ft&30||od(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Us(ad.bind(null,r,l,e),[e]),r.flags|=2048,Vr(9,ud.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=nn(),n=ie.identifierPrefix;if(G){var t=vn,r=pn;t=(r&~(1<<32-Xe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Dr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=o1++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},f1={readContext:Ge,useCallback:hd,useContext:Ge,useEffect:ua,useImperativeHandle:md,useInsertionEffect:dd,useLayoutEffect:pd,useMemo:gd,useReducer:uo,useRef:fd,useState:function(){return uo(br)},useDebugValue:aa,useDeferredValue:function(e){var n=Ue();return _d(n,J.memoizedState,e)},useTransition:function(){var e=uo(br)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:id,useSyncExternalStore:ld,useId:yd,unstable_isNewReconciler:!1},d1={readContext:Ge,useCallback:hd,useContext:Ge,useEffect:ua,useImperativeHandle:md,useInsertionEffect:dd,useLayoutEffect:pd,useMemo:gd,useReducer:ao,useRef:fd,useState:function(){return ao(br)},useDebugValue:aa,useDeferredValue:function(e){var n=Ue();return J===null?n.memoizedState=e:_d(n,J.memoizedState,e)},useTransition:function(){var e=ao(br)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:id,useSyncExternalStore:ld,useId:yd,unstable_isNewReconciler:!1};function Bt(e,n){try{var t="",r=n;do t+=$h(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function so(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function uu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var p1=typeof WeakMap=="function"?WeakMap:Map;function Sd(e,n,t){t=mn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ol||(ol=!0,gu=r),uu(e,n)},t}function xd(e,n,t){t=mn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){uu(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){uu(e,n),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Bs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new p1;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=N1.bind(null,e,n,t),n.then(e,e))}function qs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ws(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=mn(-1,1),n.tag=2,jn(t,n,1))),t.lanes|=1),e)}var v1=kn.ReactCurrentOwner,Se=!1;function he(e,n,t,r){n.child=e===null?td(n,null,t,r):Gt(n,e.child,t,r)}function Hs(e,n,t,r,i){t=t.render;var l=n.ref;return Dt(n,i),r=la(e,n,t,r,l,i),t=oa(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,wn(e,n,i)):(G&&t&&Hu(n),n.flags|=1,he(e,n,r,i),n.child)}function Qs(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!ha(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Td(e,n,l,r,i)):(e=Li(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:zr,t(o,r)&&e.ref===n.ref)return wn(e,n,i)}return n.flags|=1,e=Bn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Td(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(zr(l,r)&&e.ref===n.ref)if(Se=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return n.lanes=e.lanes,wn(e,n,i)}return au(e,n,t,r,i)}function Cd(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Lt,Ae),Ae|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,V(Lt,Ae),Ae|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,V(Lt,Ae),Ae|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,V(Lt,Ae),Ae|=r;return he(e,n,i,t),n.child}function Nd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function au(e,n,t,r,i){var l=Te(t)?st:ve.current;return l=$t(n,l),Dt(n,i),t=la(e,n,t,r,l,i),r=oa(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,wn(e,n,i)):(G&&r&&Hu(n),n.flags|=1,he(e,n,t,i),n.child)}function Xs(e,n,t,r,i){if(Te(t)){var l=!0;Ki(n)}else l=!1;if(Dt(n,i),n.stateNode===null)Ai(e,n),ed(n,t,r),ou(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var a=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=Ge(s):(s=Te(t)?st:ve.current,s=$t(n,s));var v=t.getDerivedStateFromProps,m=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&$s(n,o,r,s),zn=!1;var p=n.memoizedState;o.state=p,nl(n,r,o,i),a=n.memoizedState,u!==r||p!==a||xe.current||zn?(typeof v=="function"&&(lu(n,t,v,r),a=n.memoizedState),(u=zn||Fs(n,t,u,r,p,a,s))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Zf(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:We(n.type,u),o.props=s,m=n.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ge(a):(a=Te(t)?st:ve.current,a=$t(n,a));var h=t.getDerivedStateFromProps;(v=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||p!==a)&&$s(n,o,r,a),zn=!1,p=n.memoizedState,o.state=p,nl(n,r,o,i);var y=n.memoizedState;u!==m||p!==y||xe.current||zn?(typeof h=="function"&&(lu(n,t,h,r),y=n.memoizedState),(s=zn||Fs(n,t,s,r,p,y,a)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return su(e,n,t,r,l,i)}function su(e,n,t,r,i,l){Nd(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Rs(n,t,!1),wn(e,n,l);r=n.stateNode,v1.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Gt(n,e.child,null,l),n.child=Gt(n,null,u,l)):he(e,n,u,l),n.memoizedState=r.state,i&&Rs(n,t,!0),n.child}function Ad(e){var n=e.stateNode;n.pendingContext?Is(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Is(e,n.context,!1),na(e,n.containerInfo)}function Ks(e,n,t,r,i){return jt(),Xu(i),n.flags|=256,he(e,n,t,r),n.child}var cu={dehydrated:null,treeContext:null,retryLane:0};function fu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pd(e,n,t){var r=n.pendingProps,i=U.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(U,i&1),e===null)return ru(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=El(o,r,0,null),e=at(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=fu(t),n.memoizedState=cu,e):sa(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return m1(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Bn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=Bn(u,l):(l=at(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?fu(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=cu,r}return l=e.child,e=l.sibling,r=Bn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function sa(e,n){return n=El({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function pi(e,n,t,r){return r!==null&&Xu(r),Gt(n,e.child,null,t),e=sa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function m1(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=so(Error(k(422))),pi(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=El({mode:"visible",children:r.children},i,0,null),l=at(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Gt(n,e.child,null,o),n.child.memoizedState=fu(o),n.memoizedState=cu,l);if(!(n.mode&1))return pi(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(k(419)),r=so(l,r,void 0),pi(e,n,o,r)}if(u=(o&e.childLanes)!==0,Se||u){if(r=ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,yn(e,i),Ke(r,e,i,-1))}return ma(),r=so(Error(k(421))),pi(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=A1.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,ze=$n(i.nextSibling),Le=n,G=!0,Qe=null,e!==null&&(be[Ve++]=pn,be[Ve++]=vn,be[Ve++]=ct,pn=e.id,vn=e.overflow,ct=n),n=sa(n,r.children),n.flags|=4096,n)}function Ys(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),iu(e.return,n,t)}function co(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function zd(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(he(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ys(e,t,n);else if(e.tag===19)Ys(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(U,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&tl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),co(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&tl(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}co(n,!0,t,null,l);break;case"together":co(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ai(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function wn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),dt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Bn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Bn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function h1(e,n,t){switch(n.tag){case 3:Ad(n),jt();break;case 5:rd(n);break;case 1:Te(n.type)&&Ki(n);break;case 4:na(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;V(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(V(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Pd(e,n,t):(V(U,U.current&1),e=wn(e,n,t),e!==null?e.sibling:null);V(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return zd(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,Cd(e,n,t)}return wn(e,n,t)}var Ld,du,Od,Id;Ld=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};du=function(){};Od=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,rt(un.current);var l=null;switch(t){case"input":i=Ro(e,i),r=Ro(e,r),l=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),l=[];break;case"textarea":i=bo(e,i),r=bo(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qi)}Fo(t,r);var o;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sr.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Sr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&$("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};Id=function(e,n,t,r){t!==r&&(n.flags|=4)};function tr(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function g1(e,n,t){var r=n.pendingProps;switch(Qu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Te(n.type)&&Xi(),fe(n),null;case 3:return r=n.stateNode,Ut(),j(xe),j(ve),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Qe!==null&&(wu(Qe),Qe=null))),du(e,n),fe(n),null;case 5:ta(n);var i=rt(Mr.current);if(t=n.type,e!==null&&n.stateNode!=null)Od(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return fe(n),null}if(e=rt(un.current),fi(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[tn]=n,r[Ir]=l,e=(n.mode&1)!==0,t){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<ur.length;i++)$(ur[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":os(r,l),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},$("invalid",r);break;case"textarea":as(r,l),$("invalid",r)}Fo(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&ci(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&ci(r.textContent,u,e),i=["children",""+u]):Sr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&$("scroll",r)}switch(t){case"input":ti(r),us(r,l,!0);break;case"textarea":ti(r),ss(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Qi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=of(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[tn]=n,e[Ir]=r,Ld(e,n,!1,!1),n.stateNode=e;e:{switch(o=$o(t,r),t){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<ur.length;i++)$(ur[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":os(e,r),i=Ro(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),$("invalid",e);break;case"textarea":as(e,r),i=bo(e,r),$("invalid",e);break;default:i=r}Fo(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?sf(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&uf(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&xr(e,a):typeof a=="number"&&xr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Sr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&$("scroll",e):a!=null&&Iu(e,l,a,o))}switch(t){case"input":ti(e),us(e,r,!1);break;case"textarea":ti(e),ss(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Ot(e,!!r.multiple,l,!1):r.defaultValue!=null&&Ot(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)Id(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=rt(Mr.current),rt(un.current),fi(n)){if(r=n.stateNode,t=n.memoizedProps,r[tn]=n,(l=r.nodeValue!==t)&&(e=Le,e!==null))switch(e.tag){case 3:ci(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ci(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[tn]=n,n.stateNode=r}return fe(n),null;case 13:if(j(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&ze!==null&&n.mode&1&&!(n.flags&128))Kf(),jt(),n.flags|=98560,l=!1;else if(l=fi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[tn]=n}else jt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),l=!1}else Qe!==null&&(wu(Qe),Qe=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?ee===0&&(ee=3):ma())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Ut(),du(e,n),e===null&&Lr(n.stateNode.containerInfo),fe(n),null;case 10:return Zu(n.type._context),fe(n),null;case 17:return Te(n.type)&&Xi(),fe(n),null;case 19:if(j(U),l=n.memoizedState,l===null)return fe(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)tr(l,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=tl(e),o!==null){for(n.flags|=128,tr(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return V(U,U.current&1|2),n.child}e=e.sibling}l.tail!==null&&Q()>qt&&(n.flags|=128,r=!0,tr(l,!1),n.lanes=4194304)}else{if(!r)if(e=tl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),tr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!G)return fe(n),null}else 2*Q()-l.renderingStartTime>qt&&t!==1073741824&&(n.flags|=128,r=!0,tr(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Q(),n.sibling=null,t=U.current,V(U,r?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return va(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ae&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function _1(e,n){switch(Qu(n),n.tag){case 1:return Te(n.type)&&Xi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ut(),j(xe),j(ve),ra(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ta(n),null;case 13:if(j(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));jt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(U),null;case 4:return Ut(),null;case 10:return Zu(n.type._context),null;case 22:case 23:return va(),null;case 24:return null;default:return null}}var vi=!1,de=!1,y1=typeof WeakSet=="function"?WeakSet:Set,C=null;function zt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){H(e,n,r)}else t.current=null}function pu(e,n,t){try{t()}catch(r){H(e,n,r)}}var Zs=!1;function w1(e,n){if(Ko=qi,e=bf(),Wu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,a=-1,s=0,v=0,m=e,p=null;n:for(;;){for(var h;m!==t||i!==0&&m.nodeType!==3||(u=o+i),m!==l||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(h=m.firstChild)!==null;)p=m,m=h;for(;;){if(m===e)break n;if(p===t&&++s===i&&(u=o),p===l&&++v===r&&(a=o),(h=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=h}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yo={focusedElem:e,selectionRange:t},qi=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,A=y.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:We(n.type,w),A);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){H(n,n.return,_)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return y=Zs,Zs=!1,y}function yr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&pu(n,t,l)}i=i.next}while(i!==r)}}function wl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function vu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Rd(e){var n=e.alternate;n!==null&&(e.alternate=null,Rd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[tn],delete n[Ir],delete n[eu],delete n[t1],delete n[r1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Md(e){return e.tag===5||e.tag===3||e.tag===4}function Js(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Qi));else if(r!==4&&(e=e.child,e!==null))for(mu(e,n,t),e=e.sibling;e!==null;)mu(e,n,t),e=e.sibling}function hu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hu(e,n,t),e=e.sibling;e!==null;)hu(e,n,t),e=e.sibling}var le=null,He=!1;function Tn(e,n,t){for(t=t.child;t!==null;)Dd(e,n,t),t=t.sibling}function Dd(e,n,t){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(dl,t)}catch{}switch(t.tag){case 5:de||zt(t,n);case 6:var r=le,i=He;le=null,Tn(e,n,t),le=r,He=i,le!==null&&(He?(e=le,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):le.removeChild(t.stateNode));break;case 18:le!==null&&(He?(e=le,t=t.stateNode,e.nodeType===8?ro(e.parentNode,t):e.nodeType===1&&ro(e,t),Ar(e)):ro(le,t.stateNode));break;case 4:r=le,i=He,le=t.stateNode.containerInfo,He=!0,Tn(e,n,t),le=r,He=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&pu(t,n,o),i=i.next}while(i!==r)}Tn(e,n,t);break;case 1:if(!de&&(zt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){H(t,n,u)}Tn(e,n,t);break;case 21:Tn(e,n,t);break;case 22:t.mode&1?(de=(r=de)||t.memoizedState!==null,Tn(e,n,t),de=r):Tn(e,n,t);break;default:Tn(e,n,t)}}function ec(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new y1),n.forEach(function(r){var i=P1.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function qe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:le=u.stateNode,He=!1;break e;case 3:le=u.stateNode.containerInfo,He=!0;break e;case 4:le=u.stateNode.containerInfo,He=!0;break e}u=u.return}if(le===null)throw Error(k(160));Dd(l,o,i),le=null,He=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){H(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)bd(n,e),n=n.sibling}function bd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(n,e),Je(e),r&4){try{yr(3,e,e.return),wl(3,e)}catch(w){H(e,e.return,w)}try{yr(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:qe(n,e),Je(e),r&512&&t!==null&&zt(t,t.return);break;case 5:if(qe(n,e),Je(e),r&512&&t!==null&&zt(t,t.return),e.flags&32){var i=e.stateNode;try{xr(i,"")}catch(w){H(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&rf(i,l),$o(u,o);var s=$o(u,l);for(o=0;o<a.length;o+=2){var v=a[o],m=a[o+1];v==="style"?sf(i,m):v==="dangerouslySetInnerHTML"?uf(i,m):v==="children"?xr(i,m):Iu(i,v,m,s)}switch(u){case"input":Mo(i,l);break;case"textarea":lf(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?Ot(i,!!l.multiple,h,!1):p!==!!l.multiple&&(l.defaultValue!=null?Ot(i,!!l.multiple,l.defaultValue,!0):Ot(i,!!l.multiple,l.multiple?[]:"",!1))}i[Ir]=l}catch(w){H(e,e.return,w)}}break;case 6:if(qe(n,e),Je(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){H(e,e.return,w)}}break;case 3:if(qe(n,e),Je(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ar(n.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:qe(n,e),Je(e);break;case 13:qe(n,e),Je(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(da=Q())),r&4&&ec(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(de=(s=de)||v,qe(n,e),de=s):qe(n,e),Je(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!v&&e.mode&1)for(C=e,v=e.child;v!==null;){for(m=C=v;C!==null;){switch(p=C,h=p.child,p.tag){case 0:case 11:case 14:case 15:yr(4,p,p.return);break;case 1:zt(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){H(r,t,w)}}break;case 5:zt(p,p.return);break;case 22:if(p.memoizedState!==null){tc(m);continue}}h!==null?(h.return=p,C=h):tc(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{i=m.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=af("display",o))}catch(w){H(e,e.return,w)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(w){H(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:qe(n,e),Je(e),r&4&&ec(e);break;case 21:break;default:qe(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Md(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xr(i,""),r.flags&=-33);var l=Js(e);hu(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Js(e);mu(e,u,o);break;default:throw Error(k(161))}}catch(a){H(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function k1(e,n,t){C=e,Vd(e)}function Vd(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vi;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||de;u=vi;var s=de;if(vi=o,(de=a)&&!s)for(C=i;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?rc(i):a!==null?(a.return=o,C=a):rc(i);for(;l!==null;)C=l,Vd(l),l=l.sibling;C=i,vi=u,de=s}nc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,C=l):nc(e)}}function nc(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:de||wl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!de)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Vs(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Vs(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var v=s.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Ar(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}de||n.flags&512&&vu(n)}catch(p){H(n,n.return,p)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function tc(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function rc(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{wl(4,n)}catch(a){H(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){H(n,i,a)}}var l=n.return;try{vu(n)}catch(a){H(n,l,a)}break;case 5:var o=n.return;try{vu(n)}catch(a){H(n,o,a)}}}catch(a){H(n,n.return,a)}if(n===e){C=null;break}var u=n.sibling;if(u!==null){u.return=n.return,C=u;break}C=n.return}}var E1=Math.ceil,ll=kn.ReactCurrentDispatcher,ca=kn.ReactCurrentOwner,je=kn.ReactCurrentBatchConfig,M=0,ie=null,K=null,ue=0,Ae=0,Lt=Xn(0),ee=0,Fr=null,dt=0,kl=0,fa=0,wr=null,Ee=null,da=0,qt=1/0,sn=null,ol=!1,gu=null,Gn=null,mi=!1,Mn=null,ul=0,kr=0,_u=null,Pi=-1,zi=0;function ge(){return M&6?Q():Pi!==-1?Pi:Pi=Q()}function Un(e){return e.mode&1?M&2&&ue!==0?ue&-ue:l1.transition!==null?(zi===0&&(zi=kf()),zi):(e=b,e!==0||(e=window.event,e=e===void 0?16:Af(e.type)),e):1}function Ke(e,n,t,r){if(50<kr)throw kr=0,_u=null,Error(k(185));Ur(e,t,r),(!(M&2)||e!==ie)&&(e===ie&&(!(M&2)&&(kl|=t),ee===4&&On(e,ue)),Ce(e,r),t===1&&M===0&&!(n.mode&1)&&(qt=Q()+500,gl&&Kn()))}function Ce(e,n){var t=e.callbackNode;l0(e,n);var r=Bi(e,e===ie?ue:0);if(r===0)t!==null&&ds(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ds(t),n===1)e.tag===0?i1(ic.bind(null,e)):Hf(ic.bind(null,e)),e1(function(){!(M&6)&&Kn()}),t=null;else{switch(Ef(r)){case 1:t=Vu;break;case 4:t=yf;break;case 16:t=Ui;break;case 536870912:t=wf;break;default:t=Ui}t=Wd(t,Fd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Fd(e,n){if(Pi=-1,zi=0,M&6)throw Error(k(327));var t=e.callbackNode;if(bt()&&e.callbackNode!==t)return null;var r=Bi(e,e===ie?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=al(e,r);else{n=r;var i=M;M|=2;var l=jd();(ie!==e||ue!==n)&&(sn=null,qt=Q()+500,ut(e,n));do try{T1();break}catch(u){$d(e,u)}while(1);Yu(),ll.current=l,M=i,K!==null?n=0:(ie=null,ue=0,n=ee)}if(n!==0){if(n===2&&(i=qo(e),i!==0&&(r=i,n=yu(e,i))),n===1)throw t=Fr,ut(e,0),On(e,r),Ce(e,Q()),t;if(n===6)On(e,r);else{if(i=e.current.alternate,!(r&30)&&!S1(i)&&(n=al(e,r),n===2&&(l=qo(e),l!==0&&(r=l,n=yu(e,l))),n===1))throw t=Fr,ut(e,0),On(e,r),Ce(e,Q()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Jn(e,Ee,sn);break;case 3:if(On(e,r),(r&130023424)===r&&(n=da+500-Q(),10<n)){if(Bi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Jo(Jn.bind(null,e,Ee,sn),n);break}Jn(e,Ee,sn);break;case 4:if(On(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Xe(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*E1(r/1960))-r,10<r){e.timeoutHandle=Jo(Jn.bind(null,e,Ee,sn),r);break}Jn(e,Ee,sn);break;case 5:Jn(e,Ee,sn);break;default:throw Error(k(329))}}}return Ce(e,Q()),e.callbackNode===t?Fd.bind(null,e):null}function yu(e,n){var t=wr;return e.current.memoizedState.isDehydrated&&(ut(e,n).flags|=256),e=al(e,n),e!==2&&(n=Ee,Ee=t,n!==null&&wu(n)),e}function wu(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function S1(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Ye(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function On(e,n){for(n&=~fa,n&=~kl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Xe(n),r=1<<t;e[t]=-1,n&=~r}}function ic(e){if(M&6)throw Error(k(327));bt();var n=Bi(e,0);if(!(n&1))return Ce(e,Q()),null;var t=al(e,n);if(e.tag!==0&&t===2){var r=qo(e);r!==0&&(n=r,t=yu(e,r))}if(t===1)throw t=Fr,ut(e,0),On(e,n),Ce(e,Q()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Jn(e,Ee,sn),Ce(e,Q()),null}function pa(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(qt=Q()+500,gl&&Kn())}}function pt(e){Mn!==null&&Mn.tag===0&&!(M&6)&&bt();var n=M;M|=1;var t=je.transition,r=b;try{if(je.transition=null,b=1,e)return e()}finally{b=r,je.transition=t,M=n,!(M&6)&&Kn()}}function va(){Ae=Lt.current,j(Lt)}function ut(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,J0(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(Qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:Ut(),j(xe),j(ve),ra();break;case 5:ta(r);break;case 4:Ut();break;case 13:j(U);break;case 19:j(U);break;case 10:Zu(r.type._context);break;case 22:case 23:va()}t=t.return}if(ie=e,K=e=Bn(e.current,null),ue=Ae=n,ee=0,Fr=null,fa=kl=dt=0,Ee=wr=null,tt!==null){for(n=0;n<tt.length;n++)if(t=tt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}tt=null}return e}function $d(e,n){do{var t=K;try{if(Yu(),Ci.current=il,rl){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(ft=0,re=J=B=null,_r=!1,Dr=0,ca.current=null,t===null||t.return===null){ee=1,Fr=n,K=null;break}e:{var l=e,o=t.return,u=t,a=n;if(n=ue,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,v=u,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var h=qs(o);if(h!==null){h.flags&=-257,Ws(h,o,u,l,n),h.mode&1&&Bs(l,s,n),n=h,a=s;var y=n.updateQueue;if(y===null){var w=new Set;w.add(a),n.updateQueue=w}else y.add(a);break e}else{if(!(n&1)){Bs(l,s,n),ma();break e}a=Error(k(426))}}else if(G&&u.mode&1){var A=qs(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Ws(A,o,u,l,n),Xu(Bt(a,u));break e}}l=a=Bt(a,u),ee!==4&&(ee=2),wr===null?wr=[l]:wr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=Sd(l,a,n);bs(l,f);break e;case 1:u=a;var c=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Gn===null||!Gn.has(d)))){l.flags|=65536,n&=-n,l.lanes|=n;var _=xd(l,u,n);bs(l,_);break e}}l=l.return}while(l!==null)}Ud(t)}catch(S){n=S,K===t&&t!==null&&(K=t=t.return);continue}break}while(1)}function jd(){var e=ll.current;return ll.current=il,e===null?il:e}function ma(){(ee===0||ee===3||ee===2)&&(ee=4),ie===null||!(dt&268435455)&&!(kl&268435455)||On(ie,ue)}function al(e,n){var t=M;M|=2;var r=jd();(ie!==e||ue!==n)&&(sn=null,ut(e,n));do try{x1();break}catch(i){$d(e,i)}while(1);if(Yu(),M=t,ll.current=r,K!==null)throw Error(k(261));return ie=null,ue=0,ee}function x1(){for(;K!==null;)Gd(K)}function T1(){for(;K!==null&&!Kh();)Gd(K)}function Gd(e){var n=qd(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,n===null?Ud(e):K=n,ca.current=null}function Ud(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=_1(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,K=null;return}}else if(t=g1(t,n,Ae),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);ee===0&&(ee=5)}function Jn(e,n,t){var r=b,i=je.transition;try{je.transition=null,b=1,C1(e,n,t,r)}finally{je.transition=i,b=r}return null}function C1(e,n,t,r){do bt();while(Mn!==null);if(M&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(o0(e,l),e===ie&&(K=ie=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||mi||(mi=!0,Wd(Ui,function(){return bt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=je.transition,je.transition=null;var o=b;b=1;var u=M;M|=4,ca.current=null,w1(e,t),bd(t,e),W0(Yo),qi=!!Ko,Yo=Ko=null,e.current=t,k1(t),Yh(),M=u,b=o,je.transition=l}else e.current=t;if(mi&&(mi=!1,Mn=e,ul=i),l=e.pendingLanes,l===0&&(Gn=null),e0(t.stateNode),Ce(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,e=gu,gu=null,e;return ul&1&&e.tag!==0&&bt(),l=e.pendingLanes,l&1?e===_u?kr++:(kr=0,_u=e):kr=0,Kn(),null}function bt(){if(Mn!==null){var e=Ef(ul),n=je.transition,t=b;try{if(je.transition=null,b=16>e?16:e,Mn===null)var r=!1;else{if(e=Mn,Mn=null,ul=0,M&6)throw Error(k(331));var i=M;for(M|=4,C=e.current;C!==null;){var l=C,o=l.child;if(C.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(C=s;C!==null;){var v=C;switch(v.tag){case 0:case 11:case 15:yr(8,v,l)}var m=v.child;if(m!==null)m.return=v,C=m;else for(;C!==null;){v=C;var p=v.sibling,h=v.return;if(Rd(v),v===s){C=null;break}if(p!==null){p.return=h,C=p;break}C=h}}}var y=l.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}C=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,C=o;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:yr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,C=f;break e}C=l.return}}var c=e.current;for(C=c;C!==null;){o=C;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,C=d;else e:for(o=c;C!==null;){if(u=C,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:wl(9,u)}}catch(S){H(u,u.return,S)}if(u===o){C=null;break e}var _=u.sibling;if(_!==null){_.return=u.return,C=_;break e}C=u.return}}if(M=i,Kn(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(dl,e)}catch{}r=!0}return r}finally{b=t,je.transition=n}}return!1}function lc(e,n,t){n=Bt(t,n),n=Sd(e,n,1),e=jn(e,n,1),n=ge(),e!==null&&(Ur(e,1,n),Ce(e,n))}function H(e,n,t){if(e.tag===3)lc(e,e,t);else for(;n!==null;){if(n.tag===3){lc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){e=Bt(t,e),e=xd(n,e,1),n=jn(n,e,1),e=ge(),n!==null&&(Ur(n,1,e),Ce(n,e));break}}n=n.return}}function N1(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(ue&t)===t&&(ee===4||ee===3&&(ue&130023424)===ue&&500>Q()-da?ut(e,0):fa|=t),Ce(e,n)}function Bd(e,n){n===0&&(e.mode&1?(n=li,li<<=1,!(li&130023424)&&(li=4194304)):n=1);var t=ge();e=yn(e,n),e!==null&&(Ur(e,n,t),Ce(e,t))}function A1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Bd(e,t)}function P1(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Bd(e,t)}var qd;qd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||xe.current)Se=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Se=!1,h1(e,n,t);Se=!!(e.flags&131072)}else Se=!1,G&&n.flags&1048576&&Qf(n,Zi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ai(e,n),e=n.pendingProps;var i=$t(n,ve.current);Dt(n,t),i=la(null,n,r,e,i,t);var l=oa();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Te(r)?(l=!0,Ki(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ea(n),i.updater=_l,n.stateNode=i,i._reactInternals=n,ou(n,r,e,t),n=su(null,n,r,!0,l,t)):(n.tag=0,G&&l&&Hu(n),he(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ai(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=L1(r),e=We(r,e),i){case 0:n=au(null,n,r,e,t);break e;case 1:n=Xs(null,n,r,e,t);break e;case 11:n=Hs(null,n,r,e,t);break e;case 14:n=Qs(null,n,r,We(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),au(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Xs(e,n,r,i,t);case 3:e:{if(Ad(n),e===null)throw Error(k(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Zf(e,n),nl(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Bt(Error(k(423)),n),n=Ks(e,n,r,t,i);break e}else if(r!==i){i=Bt(Error(k(424)),n),n=Ks(e,n,r,t,i);break e}else for(ze=$n(n.stateNode.containerInfo.firstChild),Le=n,G=!0,Qe=null,t=td(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(jt(),r===i){n=wn(e,n,t);break e}he(e,n,r,t)}n=n.child}return n;case 5:return rd(n),e===null&&ru(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Zo(r,i)?o=null:l!==null&&Zo(r,l)&&(n.flags|=32),Nd(e,n),he(e,n,o,t),n.child;case 6:return e===null&&ru(n),null;case 13:return Pd(e,n,t);case 4:return na(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Gt(n,null,r,t):he(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Hs(e,n,r,i,t);case 7:return he(e,n,n.pendingProps,t),n.child;case 8:return he(e,n,n.pendingProps.children,t),n.child;case 12:return he(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,V(Ji,r._currentValue),r._currentValue=o,l!==null)if(Ye(l.value,o)){if(l.children===i.children&&!xe.current){n=wn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=mn(-1,t&-t),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var v=s.pending;v===null?a.next=a:(a.next=v.next,v.next=a),s.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),iu(l.return,t,n),u.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(k(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),iu(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}he(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Dt(n,t),i=Ge(i),r=r(i),n.flags|=1,he(e,n,r,t),n.child;case 14:return r=n.type,i=We(r,n.pendingProps),i=We(r.type,i),Qs(e,n,r,i,t);case 15:return Td(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Ai(e,n),n.tag=1,Te(r)?(e=!0,Ki(n)):e=!1,Dt(n,t),ed(n,r,i),ou(n,r,i,t),su(null,n,r,!0,e,t);case 19:return zd(e,n,t);case 22:return Cd(e,n,t)}throw Error(k(156,n.tag))};function Wd(e,n){return _f(e,n)}function z1(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,n,t,r){return new z1(e,n,t,r)}function ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function L1(e){if(typeof e=="function")return ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mu)return 11;if(e===Du)return 14}return 2}function Bn(e,n){var t=e.alternate;return t===null?(t=$e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Li(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")ha(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case kt:return at(t.children,i,l,n);case Ru:o=8,i|=8;break;case zo:return e=$e(12,t,n,i|2),e.elementType=zo,e.lanes=l,e;case Lo:return e=$e(13,t,n,i),e.elementType=Lo,e.lanes=l,e;case Oo:return e=$e(19,t,n,i),e.elementType=Oo,e.lanes=l,e;case ef:return El(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zc:o=10;break e;case Jc:o=9;break e;case Mu:o=11;break e;case Du:o=14;break e;case Pn:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=$e(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function at(e,n,t,r){return e=$e(7,e,r,n),e.lanes=t,e}function El(e,n,t,r){return e=$e(22,e,r,n),e.elementType=ef,e.lanes=t,e.stateNode={isHidden:!1},e}function fo(e,n,t){return e=$e(6,e,null,n),e.lanes=t,e}function po(e,n,t){return n=$e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function O1(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ga(e,n,t,r,i,l,o,u,a){return e=new O1(e,n,t,u,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=$e(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(l),e}function I1(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Hd(e){if(!e)return Hn;e=e._reactInternals;e:{if(ht(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Te(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Te(t))return Wf(e,t,n)}return n}function Qd(e,n,t,r,i,l,o,u,a){return e=ga(t,r,!0,e,i,l,o,u,a),e.context=Hd(null),t=e.current,r=ge(),i=Un(t),l=mn(r,i),l.callback=n??null,jn(t,l,i),e.current.lanes=i,Ur(e,i,r),Ce(e,r),e}function Sl(e,n,t,r){var i=n.current,l=ge(),o=Un(i);return t=Hd(t),n.context===null?n.context=t:n.pendingContext=t,n=mn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=jn(i,n,o),e!==null&&(Ke(e,i,o,l),Ti(e,i,o)),o}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function _a(e,n){oc(e,n),(e=e.alternate)&&oc(e,n)}function R1(){return null}var Xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ya(e){this._internalRoot=e}xl.prototype.render=ya.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Sl(e,n,null,null)};xl.prototype.unmount=ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pt(function(){Sl(null,e,null,null)}),n[_n]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Tf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ln.length&&n!==0&&n<Ln[t].priority;t++);Ln.splice(t,0,e),t===0&&Nf(e)}};function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function M1(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=sl(o);l.call(s)}}var o=Qd(n,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=o,e[_n]=o.current,Lr(e.nodeType===8?e.parentNode:e),pt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=sl(a);u.call(s)}}var a=ga(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=a,e[_n]=a.current,Lr(e.nodeType===8?e.parentNode:e),pt(function(){Sl(n,a,t,r)}),a}function Cl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=sl(o);u.call(a)}}Sl(n,o,e,i)}else o=M1(t,n,e,i,r);return sl(o)}Sf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=or(n.pendingLanes);t!==0&&(Fu(n,t|1),Ce(n,Q()),!(M&6)&&(qt=Q()+500,Kn()))}break;case 13:pt(function(){var r=yn(e,1);if(r!==null){var i=ge();Ke(r,e,1,i)}}),_a(e,1)}};$u=function(e){if(e.tag===13){var n=yn(e,134217728);if(n!==null){var t=ge();Ke(n,e,134217728,t)}_a(e,134217728)}};xf=function(e){if(e.tag===13){var n=Un(e),t=yn(e,n);if(t!==null){var r=ge();Ke(t,e,n,r)}_a(e,n)}};Tf=function(){return b};Cf=function(e,n){var t=b;try{return b=e,n()}finally{b=t}};Go=function(e,n,t){switch(n){case"input":if(Mo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=hl(r);if(!i)throw Error(k(90));tf(r),Mo(r,i)}}}break;case"textarea":lf(e,t);break;case"select":n=t.value,n!=null&&Ot(e,!!t.multiple,n,!1)}};df=pa;pf=pt;var D1={usingClientEntryPoint:!1,Events:[qr,Tt,hl,cf,ff,pa]},rr={findFiberByHostInstance:nt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},b1={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hf(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||R1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hi.isDisabled&&hi.supportsFiber)try{dl=hi.inject(b1),on=hi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wa(n))throw Error(k(200));return I1(e,n,null,t)};Ie.createRoot=function(e,n){if(!wa(e))throw Error(k(299));var t=!1,r="",i=Xd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=ga(e,1,!1,null,null,t,!1,r,i),e[_n]=n.current,Lr(e.nodeType===8?e.parentNode:e),new ya(n)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=hf(n),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return pt(e)};Ie.hydrate=function(e,n,t){if(!Tl(n))throw Error(k(200));return Cl(null,e,n,!0,t)};Ie.hydrateRoot=function(e,n,t){if(!wa(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Xd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Qd(n,null,e,1,t??null,i,!1,l,o),e[_n]=n.current,Lr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new xl(n)};Ie.render=function(e,n,t){if(!Tl(n))throw Error(k(200));return Cl(null,e,n,!1,t)};Ie.unmountComponentAtNode=function(e){if(!Tl(e))throw Error(k(40));return e._reactRootContainer?(pt(function(){Cl(null,null,e,!1,function(){e._reactRootContainer=null,e[_n]=null})}),!0):!1};Ie.unstable_batchedUpdates=pa;Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Tl(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Cl(e,n,t,!1,r)};Ie.version="18.2.0-next-9e3b772b8-20220608";(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}n(),e.exports=Ie})(Rh);var Kd,ac=No;Kd=ac.createRoot,ac.hydrateRoot;Kd(Ih(Vp(document.querySelector("#root")))).render(I(qn.StrictMode,{children:I(Oh,{})}));
