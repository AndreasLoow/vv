(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var fc={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),Dp=Symbol.for("react.portal"),Mp=Symbol.for("react.fragment"),jp=Symbol.for("react.strict_mode"),bp=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),$p=Symbol.for("react.context"),Fp=Symbol.for("react.forward_ref"),Gp=Symbol.for("react.suspense"),Up=Symbol.for("react.memo"),Bp=Symbol.for("react.lazy"),Ca=Symbol.iterator;function qp(e){return e===null||typeof e!="object"?null:(e=Ca&&e[Ca]||e["@@iterator"],typeof e=="function"?e:null)}var dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pc=Object.assign,vc={};function Yt(e,n,t){this.props=e,this.context=n,this.refs=vc,this.updater=t||dc}Yt.prototype.isReactComponent={};Yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mc(){}mc.prototype=Yt.prototype;function Su(e,n,t){this.props=e,this.context=n,this.refs=vc,this.updater=t||dc}var xu=Su.prototype=new mc;xu.constructor=Su;pc(xu,Yt.prototype);xu.isPureReactComponent=!0;var Na=Array.isArray,hc=Object.prototype.hasOwnProperty,Tu={current:null},_c={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)hc.call(n,r)&&!_c.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Ur,type:e,key:l,ref:o,props:i,_owner:Tu.current}}function Wp(e,n){return{$$typeof:Ur,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function Hp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Aa=/\/+/g;function Ml(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Hp(""+e.key):n.toString(36)}function wi(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ur:case Dp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ml(o,0):r,Na(i)?(t="",e!=null&&(t=e.replace(Aa,"$&/")+"/"),wi(i,n,t,"",function(s){return s})):i!=null&&(Cu(i)&&(i=Wp(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Aa,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Na(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+Ml(l,u);o+=wi(l,n,t,a,i)}else if(a=qp(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+Ml(l,u++),o+=wi(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Zr(e,n,t){if(e==null)return e;var r=[],i=0;return wi(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Qp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},ki={transition:null},Xp={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:ki,ReactCurrentOwner:Tu};R.Children={map:Zr,forEach:function(e,n,t){Zr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Zr(e,function(){n++}),n},toArray:function(e){return Zr(e,function(n){return n})||[]},only:function(e){if(!Cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Yt;R.Fragment=Mp;R.Profiler=bp;R.PureComponent=Su;R.StrictMode=jp;R.Suspense=Gp;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xp;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pc({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Tu.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)hc.call(n,a)&&!_c.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:Ur,type:e.type,key:i,ref:l,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:$p,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vp,_context:e},e.Consumer=e};R.createElement=gc;R.createFactory=function(e){var n=gc.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Fp,render:e}};R.isValidElement=Cu;R.lazy=function(e){return{$$typeof:Bp,_payload:{_status:-1,_result:e},_init:Qp}};R.memo=function(e,n){return{$$typeof:Up,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=ki.transition;ki.transition={};try{e()}finally{ki.transition=n}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,n){return ge.current.useCallback(e,n)};R.useContext=function(e){return ge.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};R.useEffect=function(e,n){return ge.current.useEffect(e,n)};R.useId=function(){return ge.current.useId()};R.useImperativeHandle=function(e,n,t){return ge.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return ge.current.useMemo(e,n)};R.useReducer=function(e,n,t){return ge.current.useReducer(e,n,t)};R.useRef=function(e){return ge.current.useRef(e)};R.useState=function(e){return ge.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return ge.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return ge.current.useTransition()};R.version="18.2.0";fc.exports=R;var Ft=fc.exports;function Pa(e,n,t){for(var r=new Array(t),i=0,l=n;i<t;)r[i]=e[l],i=i+1|0,l=l+1|0;return r}function Mi(e,n){for(;;){var t=n,r=e,i=r.length,l=i===0?1:i,o=t.length,u=l-o|0;if(u===0)return r.apply(null,t);if(u>=0)return function(a,s){return function(v){return Mi(a,s.concat([v]))}}(r,t);n=Pa(t,l,-u|0),e=r.apply(null,Pa(t,0,l))}}function sn(e,n){var t=e.length;if(t===1)return e(n);switch(t){case 1:return e(n);case 2:return function(r){return e(n,r)};case 3:return function(r,i){return e(n,r,i)};case 4:return function(r,i,l){return e(n,r,i,l)};case 5:return function(r,i,l,o){return e(n,r,i,l,o)};case 6:return function(r,i,l,o,u){return e(n,r,i,l,o,u)};case 7:return function(r,i,l,o,u,a){return e(n,r,i,l,o,u,a)};default:return Mi(e,[n])}}function Kn(e){var n=e.length;return n===1?e:function(t){return sn(e,t)}}function yc(e,n,t){var r=e.length;if(r===2)return e(n,t);switch(r){case 1:return Mi(e(n),[t]);case 2:return e(n,t);case 3:return function(i){return e(n,t,i)};case 4:return function(i,l){return e(n,t,i,l)};case 5:return function(i,l,o){return e(n,t,i,l,o)};case 6:return function(i,l,o,u){return e(n,t,i,l,o,u)};case 7:return function(i,l,o,u,a){return e(n,t,i,l,o,u,a)};default:return Mi(e,[n,t])}}function Br(e){var n=e.length;return n===2?e:function(t,r){return yc(e,t,r)}}function _t(e){return e===void 0?{BS_PRIVATE_NESTED_SOME_NONE:0}:e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function Kp(e){if(e!=null)return _t(e)}function Yp(e){if(e!==void 0)return _t(e)}function qr(e){if(!(e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;if(n!==0)return{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}var Zp=function(e,n,t){var r,i;i=t.length;var l=[];for(r=0;r<i-1;++r)l.push(t[r]);var o=t[i-1];for(r=0;r<o.length;++r)l.push(o[r]);return e[n].apply(e,l)};function wc(e,n){return Zp(n,"concat",[e])}function dr(e,n){return n.join(e)}function ji(e,n,t){return t.slice(e,n)}function Gt(e,n){return n.filter(Kn(e))}function Jp(e,n){return Yp(n.find(Kn(e)))}function kc(e,n){return n.findIndex(Kn(e))}function jn(e,n){n.forEach(Kn(e))}function Q(e,n){return n.map(Kn(e))}function gn(e,n){return n.map(Br(e))}function un(e,n,t){return t.reduce(Br(e),n)}function ev(e,n){return n.some(Kn(e))}function Ec(e){if(e!==void 0)return qr(e);throw new Error("getExn")}function nv(e,n){return e<n?-1:e===n?0:1}function tv(e,n){return e?n?0:1:n?-1:0}function rv(e,n){return e===n?0:e<n?-1:e>n||e===e?1:n===n?-1:0}function Sc(e,n){return e===n?0:e<n?-1:1}function xc(e,n){return e<n?e:n}function iv(e,n){return e>n?e:n}function O(e,n){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",35,2],Error:new Error};return e[n]}function Z(e,n,t){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",45,2],Error:new Error};e[n]=t}function lv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(e[i]);return r}function dn(e,n){return lv(e,Kn(n))}function ov(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(i,e[i]);return r}function jl(e,n){return ov(e,Br(n))}function uv(e,n,t){for(var r=n,i=0,l=e.length;i<l;++i)r=t(r,e[i]);return r}function av(e,n,t){return uv(e,n,Br(t))}function sv(e,n,t,r,i){for(;;){var l=t;if(l===i)return!0;if(!r(e[l],n[l]))return!1;t=l+1|0}}function cv(e,n,t){return sv(e,n,0,t,xc(e.length,n.length))}function fv(e,n,t){return cv(e,n,Br(t))}function dv(e){for(var n=e.length,t=new Array(n),r=new Array(n),i=0;i<n;++i){var l=e[i];t[i]=l[0],r[i]=l[1]}return[t,r]}function pv(e,n,t,r,i){for(;;){var l=t,o=n;if(l>=r)return l;var u=e[l];if(!i(u,o))return l;t=l+1|0,n=u}}function vv(e,n){var t=e.length;if(t===0||t===1)return t;var r=e[0],i=e[1];if(n(r,i))for(var l=i,o=2;;){var u=o,a=l;if(u>=t)return u;var s=e[u];if(!n(a,s))return u;o=u+1|0,l=s}else return n(i,r)?-pv(e,i,2,t,n)|0:1}function Ne(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t}}function Ve(e){return{v:e,h:1,l:void 0,r:void 0}}function bi(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function rn(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;if(r>(i+2|0)){var l=e.l,o=e.r;return bi(l,o)?Ne(l,e.v,Ne(o,n,t)):Ne(Ne(l,e.v,o.l),o.v,Ne(o.r,n,t))}if(i<=(r+2|0))return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t};var u=t.l,a=t.r;return bi(a,u)?Ne(Ne(e,n,u),t.v,a):Ne(Ne(e,n,u.l),u.v,Ne(u.r,t.v,a))}function Tc(e,n){var t=e.l;return t!==void 0?rn(Tc(t,n),e.v,e.r):(n.contents=e.v,e.r)}function Cc(e,n){return e!==void 0?rn(Cc(e.l,n),e.v,e.r):Ve(n)}function Nc(e,n){return e!==void 0?rn(e.l,e.v,Nc(e.r,n)):Ve(n)}function Ut(e,n,t){if(e===void 0)return Cc(t,n);if(t===void 0)return Nc(e,n);var r=e.h,i=t.h;return r>(i+2|0)?rn(e.l,e.v,Ut(e.r,n,t)):i>(r+2|0)?rn(Ut(e,n,t.l),t.v,t.r):Ne(e,n,t)}function go(e){var n=e.l,t=e.r,r=n!==void 0?go(n):0,i=t!==void 0?go(t):0;return(1+r|0)+i|0}function Ac(e,n,t){for(;;){var r=n,i=e,l=i.v,o=i.l,u=i.r,a=o!==void 0?Ac(o,r,t):r;t[a]=l;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function mv(e){if(e===void 0)return[];var n=go(e),t=new Array(n);return Ac(e,0,t),t}function yo(e,n,t){switch(t){case 0:return;case 1:return Ve(e[n]);case 2:var r=e[n],i=e[n-1|0];return{v:i,h:2,l:Ve(r),r:void 0};case 3:var l=e[n],o=e[n-1|0],u=e[n-2|0];return{v:o,h:2,l:Ve(l),r:Ve(u)};default:var a=t/2|0,s=yo(e,n,a),v=e[n-a|0],m=yo(e,(n-a|0)-1|0,(t-a|0)-1|0);return Ne(s,v,m)}}function wo(e,n,t){switch(t){case 0:return;case 1:return Ve(e[n]);case 2:var r=e[n],i=e[n+1|0];return{v:i,h:2,l:Ve(r),r:void 0};case 3:var l=e[n],o=e[n+1|0],u=e[n+2|0];return{v:o,h:2,l:Ve(l),r:Ve(u)};default:var a=t/2|0,s=wo(e,n,a),v=e[n+a|0],m=wo(e,(n+a|0)+1|0,(t-a|0)-1|0);return Ne(s,v,m)}}function Nu(e){var n=e.l;e.l=n.r,n.r=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,l=i!==void 0?i.h:0;e.h=(r>l?r:l)+1|0;var o=n.l,u=o!==void 0?o.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function Au(e){var n=e.r;e.r=n.l,n.l=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,l=i!==void 0?i.h:0;e.h=(r>l?r:l)+1|0;var o=n.r,u=o!==void 0?o.h:0,a=e.h;return n.h=(u>a?u:a)+1|0,n}function hv(e){var n=e.l,t=Au(n);return e.l=t,Nu(e)}function _v(e){var n=e.r,t=Nu(n);return e.r=t,Au(e)}function Jr(e){var n=e.l,t=n!==void 0?n.h:0,r=e.r,i=r!==void 0?r.h:0;return e.h=(t>i?t:i)+1|0,e}function gv(e){var n=e.l,t=e.r,r=n!==void 0?n.h:0,i=t!==void 0?t.h:0;if(r>(2+i|0)){var l=n.l,o=n.r;return bi(l,o)?Jr(Nu(e)):Jr(hv(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return bi(a,u)?Jr(Au(e)):Jr(_v(e))}return e.h=(r>i?r:i)+1|0,e}function yv(e,n,t,r){for(;;){var i=t,l=n;if(i>=r)return i;var o=e[i];if(l<=o)return i;t=i+1|0,n=o}}function wv(e){var n=e.length;if(n===0||n===1)return n;var t=e[0],r=e[1];if(t<r)for(var i=r,l=2;;){var o=l,u=i;if(o>=n)return o;var a=e[o];if(u>=a)return o;l=o+1|0,i=a}else return t>r?-yv(e,r,2,n)|0:1}function ko(e,n){if(e===void 0)return Ve(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;return n<t?e.l=ko(r,n):e.r=ko(i,n),gv(e)}function kv(e){var n=e.length;if(n!==0){var t=wv(e),r;t>=0?r=wo(e,0,t):(t=-t|0,r=yo(e,t-1|0,t));for(var i=t;i<n;++i)r=ko(r,e[i]);return r}}function Vi(e,n){if(e===void 0)return Ve(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;if(n<t){var l=Vi(r,n);return l===r?e:rn(l,t,i)}var o=Vi(i,n);return o===i?e:rn(r,t,o)}function Eo(e,n){if(e===void 0)return e;var t=e.v,r=e.l,i=e.r;if(n===t){if(r===void 0)return i;if(i===void 0)return r;var l={contents:i.v},o=Tc(i,l);return rn(r,l.contents,o)}if(n<t){var u=Eo(r,n);return u===r?e:rn(u,t,i)}var a=Eo(i,n);return a===i?e:rn(r,t,a)}function Ev(e,n){for(var t=n.length,r=e,i=0;i<t;++i){var l=n[i];r=Eo(r,l)}return r}function $i(e,n){var t=e.v,r=e.l,i=e.r;if(n===t)return[r,i];if(n<t){if(r===void 0)return[void 0,e];var l=$i(r,n);return[l[0],Ut(l[1],t,i)]}if(i===void 0)return[e,void 0];var o=$i(i,n);return[Ut(r,t,o[0]),o[1]]}function Rn(e,n){if(e===void 0)return n;if(n===void 0)return e;var t=e.h,r=n.h;if(t>=r){if(r===1)return Vi(e,n.v);var i=e.v,l=e.l,o=e.r,u=$i(n,i);return Ut(Rn(l,u[0]),i,Rn(o,u[1]))}if(t===1)return Vi(n,e.v);var a=n.v,s=n.l,v=n.r,m=$i(e,a);return Ut(Rn(m[0],s),a,Rn(m[1],v))}var Pc=kv,So=mv;function zc(e,n){return dr(e,Gt(function(t){return t!==""},n))}function Ic(e,n){var t=n.slice(),r=t.shift();return un(e,Ec(r===void 0?void 0:_t(r)),t)}function Lc(e,n){var t=n.length-1|0;return wc(gn(function(r,i){return i===t?[r]:[r,e]},n),[])}function pr(e){return un(Rn,void 0,e)}function Sv(e){return un(function(n,t){return n+t|0},0,e)}function Oc(e,n){if(e!==void 0)return sn(n,qr(e))}function ei(e){return _t(e)}var ni;function Y(e){throw new Error(e)}function Rc(e){switch(e){case 0:return"1";case 1:return"0";case 2:return"x";case 3:return"z"}}function xv(e){return e===0}function Tv(e){return e===1}function Cv(e,n){return e===n?e:e===3?n:n===3?e:2}function Nv(e,n){switch(e){case 0:return n>=3?0:n;case 1:return 1;case 2:return n!==1?2:1;case 3:return n}}function Av(e,n){switch(e){case 0:return 0;case 1:return n>=3?1:n;case 2:return n!==0?2:0;case 3:return n}}function Pv(e){return e!==1?e!==0?2:1:0}function za(e,n){return e!==1?e!==0?n!==1?2:1:n!==1?n!==0?2:0:n!==1?2:1:1}function Ia(e,n){return e!==1?e!==0&&n!==0?2:0:n!==1?n!==0||n!==0?2:0:1}function zv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function Iv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function Lv(e,n){return e!==1?e!==0||n!==0?2:0:n!==1?2:1}var La=0,Oa=1,Ov=2,Rv=3,Fi=function(e,n){for(var t in e)n(t)};function vr(e,n){if(e===n)return 0;var t=typeof e,r=typeof n;switch(t){case"boolean":if(r==="boolean")return tv(e,n);break;case"function":if(r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"compare: functional value",Error:new Error};break;case"number":if(r==="number")return rv(e,n);break;case"string":return r==="string"?Sc(e,n):1;case"undefined":return-1}switch(r){case"string":return-1;case"undefined":return 1;default:if(t==="boolean")return 1;if(r==="boolean")return-1;if(t==="function")return 1;if(r==="function")return-1;if(t==="number")return n===null||n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(r==="number")return e===null||e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e===null)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(n===null)return e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e.BS_PRIVATE_NESTED_SOME_NONE!==void 0)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?Ra(e,n):-1;var i=e.TAG|0,l=n.TAG|0;if(i===248)return nv(e[1],n[1]);if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==l)return i<l?-1:1;var o=e.length|0,u=n.length|0;if(o===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===o)return 0;var v=vr(e[s],n[s]);if(v!==0)return v;a=s+1|0}else return e instanceof Date&&n instanceof Date?e-n:Ra(e,n);else if(o<u)for(var m=0;;){var p=m;if(p===o)return-1;var h=vr(e[p],n[p]);if(h!==0)return h;m=p+1|0}else for(var y=0;;){var w=y;if(w===u)return 1;var z=vr(e[w],n[w]);if(z!==0)return z;y=w+1|0}}}function Ra(e,n){var t={contents:void 0},r={contents:void 0},i=function(m,p){var h=m[2],y=m[1];if(!Object.prototype.hasOwnProperty.call(y,p)||vr(m[0][p],y[p])>0){var w=h.contents;if(!(w!==void 0&&p>=w)){h.contents=p;return}}},l=[e,n,r],o=function(m){return i(l,m)},u=[n,e,t],a=function(m){return i(u,m)};Fi(e,o),Fi(n,a);var s=t.contents,v=r.contents;return s!==void 0?v!==void 0?Sc(s,v):-1:v!==void 0?1:0}function ne(e,n){if(e===n)return!0;var t=typeof e;if(t==="string"||t==="number"||t==="boolean"||t==="undefined"||e===null)return!1;var r=typeof n;if(t==="function"||r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if(r==="number"||r==="undefined"||n===null)return!1;var i=e.TAG|0,l=n.TAG|0;if(i===248)return e[1]===n[1];if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==l)return!1;var o=e.length|0,u=n.length|0;if(o===u)if(Array.isArray(e))for(var a=0;;){var s=a;if(s===o)return!0;if(!ne(e[s],n[s]))return!1;a=s+1|0}else{if(e instanceof Date&&n instanceof Date)return!(e>n||e<n);var v={contents:!0},m=function(h){if(!Object.prototype.hasOwnProperty.call(n,h)){v.contents=!1;return}},p=function(h){if(!Object.prototype.hasOwnProperty.call(e,h)||!ne(n[h],e[h])){v.contents=!1;return}};return Fi(e,m),v.contents&&Fi(n,p),v.contents}else return!1}function Dc(e,n){return typeof e=="number"&&typeof n=="number"?e!==n:!ne(e,n)}function Dv(e,n){return typeof e=="number"&&typeof n=="number"?e>=n:vr(e,n)>=0}function pe(e){return e!==void 0?e.h:0}function Me(e,n,t,r){var i=pe(e),l=pe(r);return{k:n,v:t,h:i>=l?i+1|0:l+1|0,l:e,r}}function tn(e,n){return{k:e,v:n,h:1,l:void 0,r:void 0}}function Da(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function Mv(e,n){return e.v===n?e:{k:e.k,v:n,h:e.h,l:e.l,r:e.r}}function Ma(e,n,t,r){var i=e!==void 0?e.h:0,l=r!==void 0?r.h:0;if(i>(l+2|0)){var o=e.l,u=e.r;return pe(o)>=pe(u)?Me(o,e.k,e.v,Me(u,n,t,r)):Me(Me(o,e.k,e.v,u.l),u.k,u.v,Me(u.r,n,t,r))}if(l<=(i+2|0))return{k:n,v:t,h:i>=l?i+1|0:l+1|0,l:e,r};var a=r.l,s=r.r;return pe(s)>=pe(a)?Me(Me(e,n,t,a),r.k,r.v,s):Me(Me(e,n,t,a.l),a.k,a.v,Me(a.r,r.k,r.v,s))}function Gi(e){var n=e.l,t=e.r,r=n!==void 0?Gi(n):0,i=t!==void 0?Gi(t):0;return(1+r|0)+i|0}function Mc(e,n,t){for(;;){var r=n,i=e,l=i.k,o=i.l,u=i.r,a=o!==void 0?Mc(o,r,t):r;t[a]=l;var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function jc(e,n,t){for(;;){var r=n,i=e,l=i.l,o=i.k,u=i.r,a=l!==void 0?jc(l,r,t):r;t[a]=[o,i.v];var s=a+1|0;if(u===void 0)return s;n=s,e=u}}function jv(e){if(e===void 0)return[];var n=Gi(e),t=new Array(n);return jc(e,0,t),t}function bv(e){if(e===void 0)return[];var n=Gi(e),t=new Array(n);return Mc(e,0,t),t}function xo(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return tn(r[0],r[1]);case 2:var i=e[n],l=e[n-1|0],o=l,u=i;return{k:o[0],v:o[1],h:2,l:tn(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n-1|0],v=e[n-2|0],m=v,p=s,h=a;return{k:p[0],v:p[1],h:2,l:tn(h[0],h[1]),r:tn(m[0],m[1])};default:var y=t/2|0,w=xo(e,n,y),z=e[n-y|0],f=xo(e,(n-y|0)-1|0,(t-y|0)-1|0);return Me(w,z[0],z[1],f)}}function To(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return tn(r[0],r[1]);case 2:var i=e[n],l=e[n+1|0],o=l,u=i;return{k:o[0],v:o[1],h:2,l:tn(u[0],u[1]),r:void 0};case 3:var a=e[n],s=e[n+1|0],v=e[n+2|0],m=v,p=s,h=a;return{k:p[0],v:p[1],h:2,l:tn(h[0],h[1]),r:tn(m[0],m[1])};default:var y=t/2|0,w=To(e,n,y),z=e[n+y|0],f=To(e,(n+y|0)+1|0,(t-y|0)-1|0);return Me(w,z[0],z[1],f)}}function Pu(e){var n=e.l;e.l=n.r,n.r=e;var t=pe(e.l),r=pe(e.r);e.h=(t>r?t:r)+1|0;var i=pe(n.l),l=e.h;return n.h=(i>l?i:l)+1|0,n}function zu(e){var n=e.r;e.r=n.l,n.l=e;var t=pe(e.l),r=pe(e.r);e.h=(t>r?t:r)+1|0;var i=pe(n.r),l=e.h;return n.h=(i>l?i:l)+1|0,n}function Vv(e){var n=e.l,t=zu(n);return e.l=t,Pu(e)}function $v(e){var n=e.r,t=Pu(n);return e.r=t,zu(e)}function ti(e){var n=pe(e.l),t=pe(e.r);return e.h=(n>t?n:t)+1|0,e}function Fv(e){var n=e.l,t=e.r,r=pe(n),i=pe(t);if(r>(2+i|0)){var l=n.l,o=n.r;return Da(l,o)?ti(Pu(e)):ti(Vv(e))}if(i>(2+r|0)){var u=t.l,a=t.r;return Da(a,u)?ti(zu(e)):ti($v(e))}return e.h=(r>i?r:i)+1|0,e}function Gv(e,n){for(;;){var t=e;if(t===void 0)return;var r=t.k;if(n===r)return _t(t.v);e=n<r?t.l:t.r}}function Uv(e,n){for(;;){var t=e;if(t!==void 0){var r=t.k;if(n===r)return t.v;e=n<r?t.l:t.r;continue}throw{RE_EXN_ID:"Not_found",Error:new Error}}}function Bv(e,n){for(;;){var t=e;if(t===void 0)return!1;var r=t.k;if(n===r)return!0;e=n<r?t.l:t.r}}function Co(e,n,t){if(e===void 0)return tn(n,t);var r=e.k;if(n===r)return e.k=n,e.v=t,e;var i=e.l,l=e.r;if(n<r){var o=Co(i,n,t);e.l=o}else e.r=Co(l,n,t);return Fv(e)}function qv(e){var n=e.length;if(n!==0){var t=vv(e,function(o,u){return o[0]<u[0]}),r;t>=0?r=To(e,0,t):(t=-t|0,r=xo(e,t-1|0,t));for(var i=t;i<n;++i){var l=e[i];r=Co(r,l[0],l[1])}return r}}function bn(e,n,t){if(e===void 0)return tn(n,t);var r=e.k;if(n===r)return Mv(e,t);var i=e.v;return n<r?Ma(bn(e.l,n,t),r,i,e.r):Ma(e.l,r,i,bn(e.r,n,t))}var bc=Bv,Wv=jv,Vc=qv,Hv=bv,$c=Gv,ut=Uv;function bl(e){return{_0:e}}function at(e){return"1'b"+Rc(e._0)}function Vl(e){return{TAG:0,_0:e}}function Qv(e){return{TAG:1,_0:e}}function Xv(e){return{TAG:2,_0:e}}function Kv(e,n){return{TAG:3,_0:e,_1:0,_2:n}}function Yv(e,n){return{TAG:3,_0:e,_1:1,_2:n}}function Zv(e,n){return{TAG:3,_0:e,_1:2,_2:n}}function Jv(e,n){return{TAG:3,_0:e,_1:3,_2:n}}function em(e,n){return{TAG:3,_0:e,_1:4,_2:n}}function nm(e,n){return{TAG:3,_0:e,_1:5,_2:n}}function tm(e,n,t){return{TAG:4,_0:e,_1:n,_2:t}}function rm(e){return{_0:e}}function im(e){return{TAG:0,_0:e}}function lm(e,n){return{TAG:1,_0:e,_1:n}}function om(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function No(e){return typeof e=="number"?0:e._0}function Ao(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:case 2:return e._1}}function um(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return xc(e._0<e._1?e._0:e._1,e._2)}}function Po(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return e._2}}function am(e,n){switch(n){case 0:return No(e);case 1:return Ao(e);case 2:return um(e);case 3:return Po(e)}}function pl(e,n){return am(e,n._0)}function sm(e,n){return e!==void 0?pl(e,n):0}function cm(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0>e._1?e._0:e._1;case 2:return iv(e._0>e._1?e._0:e._1,e._2)}}function fm(e,n){return{TAG:2,_0:No(e)+No(n)|0,_1:Ao(e)+Ao(n)|0,_2:Po(e)+Po(n)|0}}function dm(e,n){switch(e){case 0:return n!==0?1:2;case 1:return n!==1?0:2;case 2:case 3:return n!==1?n!==0?2:0:1}}function pm(e){return{TAG:0,_0:e}}function vm(e){return{TAG:1,_0:e}}function mm(e){return{TAG:2,_0:e}}function hm(e,n){return{TAG:3,_0:e,_1:n}}function Fc(e){if(!ne(e,[]))return Ic(function(n,t){return{TAG:3,_0:n,_1:t}},e)}function _m(e){return{TAG:0,_0:e}}function gm(e){return{TAG:1,_0:e}}function Gc(e,n,t){for(;;){var r=e;if(typeof r=="number")return!1;switch(r.TAG|0){case 0:return r._0===n?t===0:!1;case 1:return r._0===n?t===1:!1;case 2:return r._0===n;case 3:if(Gc(r._0,n,t))return!0;e=r._1;continue}}}function ym(e,n,t,r){if(typeof e=="number"||e.TAG!==0)return Y("impossible");var i=e._0;if(typeof i=="number"||i.TAG===0)return Y("impossible");var l=dm(t._0,r._0);return l===2?!1:Gc(i._0,n,l)}function wm(e){switch(e){case 0:return Cv;case 1:return Nv;case 2:return Av}}function Uc(e){return!!e}var km=[],Em=[],Sm=[],xm=[],Tm={vars:km,nets:Em,conts:Sm,procs:xm},ja={contents:0};function Vn(e){var n=ja.contents;return ja.contents=n+1|0,n}function Cm(e){return e.TAG===2?[e._1,e._2]:Y("bug: expected EventNBA")}function $l(e){return String(e._0)}var Nm=[],Bc=[],qc=[],ba={active:Nm,inactive:Bc,nba:qc};function Am(e){return e?"finished":"running"}function Wc(e,n){var t=Jp(function(r){return r.name===n},e);return t!==void 0?t:Y("missing key")}function Pm(e,n){return ev(function(t){return t.lhs===e},n)}function zm(e,n,t){return yc(e,n._0,t._0)}function An(e,n,t){return{_0:zm(e,n,t)}}function oe(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return t._0;case 1:return ut(e,t._0);case 2:var r=oe(e,t._0);return{_0:Pv(r._0)};case 3:var i=t._1,l=t._0;if(i!==1)if(i!==0){var o=oe(e,l),u=oe(e,t._2);switch(i){case 0:case 1:return Y("impossible");case 2:return An(za,o,u);case 3:return An(Ia,o,u);case 4:return An(zv,o,u);case 5:return An(Iv,o,u)}}else{var a=oe(e,l);if(Tv(a._0))return a;var s=oe(e,t._2);return An(za,a,s)}else{var v=oe(e,l);if(xv(v._0))return v;var m=oe(e,t._2);return An(Ia,v,m)}case 4:var p=t._2,h=t._1,y=oe(e,t._0),w=y._0;if(w!==1){if(w!==0){var z=oe(e,h),f=oe(e,p);return An(Lv,z,f)}n=h;continue}n=p;continue}}}function Im(e,n,t){return t?{TAG:0,_0:oe(n,t._0)}:{TAG:1,_0:e}}function Ei(e,n){for(;;){var t=e;switch(t.TAG|0){case 0:return!1;case 1:return n===t._0;case 2:e=t._0;continue;case 3:if(Ei(t._0,n))return!0;e=t._2;continue;case 4:if(Ei(t._0,n)||Ei(t._1,n))return!0;e=t._2;continue}}}function Hc(e,n,t){var r=Wc(e,n).delay;return fm(r,t)}function Lm(e,n,t){for(var r=!1,i=0,l=-1,o=-1,u=function(v){return v.TAG===0?v._1===t:!1};!r&&i<e.length;){var a=O(e,i);if(a[0]>n)r=!0;else{var s=kc(u,a[1].active);s!==-1&&(r=!0,l=i,o=s)}i=i+1|0}if(l!==-1)return[l,o]}function Om(e,n){var t=ji(0,n,e),r=ji(n+1|0,e.length,e);return t.concat(r)}function Rm(e,n){switch(n){case 0:return e.active;case 1:return e.inactive;case 2:return e.nba}}function Fl(e,n,t){switch(n){case 0:return{active:t,inactive:e.inactive,nba:e.nba};case 1:return{active:e.active,inactive:t,nba:e.nba};case 2:return{active:e.active,inactive:e.inactive,nba:t}}}function mr(e,n,t,r){var i=kc(function(h){return Dv(h[0],t)},e);if(i===-1){var l=Fl(ba,n,[r]);return e.concat([[t,l]])}if(ne(O(e,i)[0],t)){var o=O(e,i)[1],u=Rm(o,n).concat([r]),a=Fl(o,n,u),s=e.slice();return Z(s,i,[t,a]),s}var v=ji(0,i,e),m=Fl(ba,n,[r]),p=ji(i,e.length,e);return v.concat([[t,m]]).concat(p)}function Pn(e,n){var t=n.pc+1|0;return t===e.stmts.length?{pc:0,state:Uc(e.proc_type)?0:3}:{pc:t,state:0}}function Si(e,n,t,r,i){if(ne(r,i))return e;for(var l=e.queue.slice(),o=Gt(function(_){return n!==_[1]?Ei(_[0].rhs,t):!1},gn(function(_,I){return[_,I]},e.vmodule.conts)),u=Q(function(_){var I=_[0];return[I.delay,[_[1],oe(e.env,I.rhs)]]},o),a=function(_,I){var P=I[1],W=P[1],te=P[0],we=Hc(e.vmodule.nets,O(e.vmodule.conts,te).lhs,I[0]),Ze=pl(we,W),se=cm(we),ke=Lm(_,e.time+se|0,te),me;if(ke!==void 0){var x=ke[0],N=O(_,x),L=N[1],M=L.active.slice();if(M.splice(ke[1],1),ne(M,[]))me=Om(_,x);else{var V=_.slice();Z(V,x,[N[0],{active:M,inactive:L.inactive,nba:L.nba}]),me=V}}else me=_;return mr(me,0,e.time+Ze|0,{TAG:0,_0:Vn(),_1:te,_2:W})},s=un(a,l,u),v=Gt(function(_){var I=_[0];return I.state===1?ym(O(O(e.vmodule.procs,_[1]).stmts,I.pc),t,r,i):!1},gn(function(_,I){return[_,I]},e.proc_env)),m=e.proc_env.slice(),p=0,h=v.length;p<h;++p){var y=O(v,p),w=y[1],z=Pn(O(e.vmodule.procs,w),y[0]);Z(m,w,z)}var f=Q(function(_){return{TAG:3,_0:Vn(),_1:_[1]}},v),c=O(s,0),d=c[1],g=d.active.concat(f),S=d.inactive,T=d.nba,k={active:g,inactive:S,nba:T};return Z(s,0,[c[0],k]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:m,queue:s,monitor:e.monitor,output:e.output,time:e.time}}function Dm(e){return e._0===0}function Va(e,n,t){var r=e.proc_env.slice(),i=O(r,n),l=O(e.vmodule.procs,n),o=i.pc+t|0,u=o===l.stmts.length?{pc:0,state:Uc(l.proc_type)?0:3}:{pc:o,state:i.state};return Z(r,n,u),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:r,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}function Mm(e){return e.TAG===0?Rc(e._0._0):Y("expected value found time")}function jm(e){return e.TAG===0?Y("expected time found value"):String(e._0)}function bm(e,n){for(var t="",r=0,i=0;r<e.length;)if(e[r]==="%"){r=r+1|0;var l=e[r];l==="b"?(t=t.concat(Mm(O(n,i))),i=i+1|0):l==="d"?(t=t.concat(jm(O(n,i))),i=i+1|0):Y("unsupported format"),r=r+1|0}else t=t.concat(e[r]),r=r+1|0;return t=t.concat(`
`),t}function Vm(e,n){return e.TAG===0?n.TAG===0?ne(e._0,n._0):Y("impossible"):n.TAG===0?Y("impossible"):!0}function Qc(e,n,t,r){var i=e.env,l=e.time,o=Q(function(v){return Im(l,i,v)},t),u=r!==void 0?fv(o,r,Vm):!1;if(u)return[o,e.output];var a=bm(n,o),s=e.output.concat(a);return[o,s]}function $m(e,n){var t=O(e.vmodule.procs,n),r=O(e.proc_env,n),i=O(t.stmts,r.pc);if(typeof i=="number")return{vmodule:e.vmodule,status:1,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};switch(i.TAG|0){case 0:var l=i._0;if(typeof l=="number")return Y("impossible, all stars should have been preprocessed away");if(l.TAG===0){var o=Pn(t,r),u=o.pc,a={pc:u,state:2},s=e.proc_env.slice();Z(s,n,a);var v=mr(e.queue,0,e.time+l._0|0,{TAG:3,_0:Vn(),_1:n});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:s,queue:v,monitor:e.monitor,output:e.output,time:e.time}}var m=r.pc,p={pc:m,state:1},h=e.proc_env.slice();return Z(h,n,p),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:h,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};case 1:if(i._0){var y=oe(e.env,i._3),w=Pn(t,r),z=e.proc_env.slice();Z(z,n,w);var f=sm(i._2,y),c=mr(e.queue,2,e.time+f|0,{TAG:2,_0:Vn(),_1:i._1,_2:y});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:z,queue:c,monitor:e.monitor,output:e.output,time:e.time}}var d=i._2,g=i._1,S=oe(e.env,i._3);if(d!==void 0){var T=r.pc,k={pc:T,state:2},_=e.proc_env.slice();Z(_,n,k);var I=pl(d,S),P=I===0?1:0,W=mr(e.queue,P,e.time+I|0,{TAG:1,_0:Vn(),_1:n,_2:g,_3:S});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:_,queue:W,monitor:e.monitor,output:e.output,time:e.time}}var te=ut(e.env,g),we=bn(e.env,g,S),Ze=Pn(t,r),se=e.proc_env.slice();Z(se,n,Ze);var ke=e.vmodule,me=e.status,x=e.cont_env,N=e.queue,L=e.monitor,M=e.output,V=e.time,xn={vmodule:ke,status:me,env:we,cont_env:x,proc_env:se,queue:N,monitor:L,output:M,time:V};return Si(xn,-1,g,te,S);case 2:var Be=Qc(e,i._0,i._1,void 0),Tn=Pn(t,r),De=e.proc_env.slice();return Z(De,n,Tn),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:De,queue:e.queue,monitor:e.monitor,output:Be[1],time:e.time};case 3:var Cn=[i._0,i._1,void 0],Il=Pn(t,r),Kr=e.proc_env.slice();return Z(Kr,n,Il),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Kr,queue:e.queue,monitor:Cn,output:e.output,time:e.time};case 4:return Va(e,n,i._0);case 5:if(!Dm(oe(e.env,i._0)))return Va(e,n,i._1);var Ll=Pn(t,r),Yr=e.proc_env.slice();return Z(Yr,n,Ll),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:Yr,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}}function $a(e,n){for(var t=0,r=e;t<100&&r.status===0&&O(r.proc_env,n).state===0;)t=t+1|0,r=$m(r,n);return t===100&&Y("time out!"),r}function Fm(e,n){var t=O(e,n);if(t.TAG===4){var r=t._1;if(r.length!==1){var i=r.slice();i.shift(),e[n]={TAG:4,_0:t._0,_1:i};return}e.splice(n,1);return}e.splice(n,1)}function Gm(e){var n=e.proc_type,t;if(n){var r=n._0;t=r!==1&&r<3?0:1}else t=0;return{pc:t,state:0}}function Um(e,n){return n!==void 0?oe(e,n):{_0:2}}function Fa(e){var n=Q(function(i){return{TAG:3,_0:Vn(),_1:i[1]}},Gt(function(i){return!0},gn(function(i,l){return[i,l]},e.procs))),t=Vc(dn(e.nets,function(i){return[i.name,{_0:Pm(i.name,e.conts)?2:3}]})),r=av(e.vars,t,function(i,l){return bn(i,l.target,Um(i,l.init))});return{vmodule:e,status:0,env:r,cont_env:dn(e.conts,function(i){return{_0:2}}),proc_env:dn(e.procs,Gm),queue:[[0,{active:n,inactive:Bc,nba:qc}]],monitor:void 0,output:"",time:0}}function Bm(e,n,t){var r=oe(e.env,n.rhs),i=Hc(e.vmodule.nets,n.lhs,n.delay),l=pl(i,r);return[l,{TAG:0,_0:Vn(),_1:t,_2:r}]}function Ga(e){var n=gn(function(r,i){return Bm(e,r,i)},e.vmodule.conts),t=un(function(r,i){return mr(r,0,i[0],i[1])},e.queue,n);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:t,monitor:e.monitor,output:e.output,time:e.time}}function Ua(e,n){return e.status===0?e.time===n:!1}function qm(e,n){var t=O(e.queue,0),r=t[1],i=r.active.slice(),l=O(i,n);Fm(i,n);var o=r.inactive,u=r.nba,a={active:i,inactive:o,nba:u},s=e.queue.slice();Z(s,0,[t[0],a]);var v=e.vmodule,m=e.status,p=e.env,h=e.cont_env,y=e.proc_env,w=e.monitor,z=e.output,f=e.time;switch(l.TAG|0){case 0:var c=l._1,d=h.slice();Z(d,c,l._2);var g=O(v.conts,c).lhs,S=Wc(v.nets,g),T=ut(p,g),k=wm(S.type_),_=Ic(function(et,Dl){return An(k,et,Dl)},Q(function(et){return O(d,et[1])},Gt(function(et){return et[0].lhs===g},gn(function(et,Dl){return[et,Dl]},v.conts)))),I=bn(p,g,_),P=v,W=m,te=y,we=w,Ze=z,se=f,ke={vmodule:P,status:W,env:I,cont_env:d,proc_env:te,queue:s,monitor:we,output:Ze,time:se};return Si(ke,c,g,T,_);case 1:var me=l._3,x=l._2,N=l._1,L=ut(p,x),M=bn(p,x,me),V=O(y,N),xn=O(v.procs,N),Be=Pn(xn,V),Tn=y.slice();Z(Tn,N,Be);var De=v,Cn=m,Il=h,Kr=w,Ll=z,Yr=f,cp={vmodule:De,status:Cn,env:M,cont_env:Il,proc_env:Tn,queue:s,monitor:Kr,output:Ll,time:Yr},fp=Si(cp,-1,x,L,me);return $a(fp,N);case 2:return Y("impossible: EventNBA cannot be in active region");case 3:var Ol=l._1,dp=O(y,Ol),pp=dp.pc,vp={pc:pp,state:0},Ea=y.slice();Z(Ea,Ol,vp);var mp=v,hp=m,_p=p,gp=h,yp=w,wp=z,kp=f,Ep={vmodule:mp,status:hp,env:_p,cont_env:gp,proc_env:Ea,queue:s,monitor:yp,output:wp,time:kp};return $a(Ep,Ol);case 4:var Sp=l._1.slice(),Sa=Sp.shift(),xp=Ec(Sa===void 0?void 0:_t(Sa)),xa=Cm(xp),Ta=xa[1],Rl=xa[0],Tp=ut(p,Rl),Cp=bn(p,Rl,Ta),Np=v,Ap=m,Pp=h,zp=y,Ip=w,Lp=z,Op=f,Rp={vmodule:Np,status:Ap,env:Cp,cont_env:Pp,proc_env:zp,queue:s,monitor:Ip,output:Lp,time:Op};return Si(Rp,-1,Rl,Tp,Ta)}}function Ba(e){if(e.status!==0)return!1;var n=O(e.queue,0),t=n[1];return ne(t.active,[])?Dc(t.inactive,[]):!1}function Wm(e){var n=O(e.queue,0),t=n[1],r=t.inactive,i=[],l=t.nba,o={active:r,inactive:i,nba:l},u=e.queue.slice();return Z(u,0,[e.time,o]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:u,monitor:e.monitor,output:e.output,time:e.time}}function qa(e){if(e.status!==0)return!1;var n=O(e.queue,0),t=n[1];return ne(t.active,[])&&ne(t.inactive,[])?Dc(t.nba,[]):!1}function Hm(e){var n=O(e.queue,0),t=n[1],r=Vn(),i=t.nba,l={TAG:4,_0:r,_1:i},o=t.active.concat([l]),u=t.inactive,a=[],s={active:o,inactive:u,nba:a},v=e.queue.slice();return Z(v,0,[e.time,s]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:v,monitor:e.monitor,output:e.output,time:e.time}}function Wa(e){if(e.status!==0)return!1;var n=e.queue.length;if(n===0)return Y("impossible");var t=O(e.queue,0)[1];return ne(t.active,[])&&ne(t.inactive,[])?ne(t.nba,[]):!1}function Qm(e){var n=e.monitor;if(n===void 0)return e;var t=n[1],r=n[0],i=Qc(e,r,t,n[2]);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:[r,t,i[0]],output:i[1],time:e.time}}function Xm(e){var n=Qm(e),t=n.queue.slice();if(t.shift(),t.length===0)return{vmodule:n.vmodule,status:1,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:n.time};var r=O(t,0);return{vmodule:n.vmodule,status:n.status,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:r[0]}}var Km=0,Gl=0,Ha=0,Qa=1,Ym=0,Xc={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm=Ft,Jm=Symbol.for("react.element"),eh=Symbol.for("react.fragment"),nh=Object.prototype.hasOwnProperty,th=Zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rh={key:!0,ref:!0,__self:!0,__source:!0};function Kc(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)nh.call(n,r)&&!rh.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Jm,type:e,key:l,ref:o,props:i,_owner:th.current}}vl.Fragment=eh;vl.jsx=Kc;vl.jsxs=Kc;Xc.exports=vl;var A=Xc.exports;function Yc(e){return gn(function(n,t){return A.jsx(Ft.Fragment,{children:n},String(t))},e)}function ih(e){switch(e){case 0:return"&&";case 1:return"||";case 2:return"&";case 3:return"|";case 4:return"^";case 5:return"+"}}function Pe(e){switch(e.TAG|0){case 0:return at(e._0);case 1:return e._0;case 2:return"!("+Pe(e._0)+")";case 3:return"("+Pe(e._0)+") "+ih(e._1)+" ("+Pe(e._2)+")";case 4:return"("+Pe(e._0)+") ? ("+Pe(e._1)+") : ("+Pe(e._2)+")"}}function lh(e){return e?Pe(e._0):"$time"}function Iu(e){if(typeof e=="number")return"";switch(e.TAG|0){case 0:return"#"+String(e._0);case 1:return"#("+String(e._0)+", "+String(e._1)+")";case 2:return"#("+String(e._0)+", "+String(e._1)+", "+String(e._2)+")"}}function Xa(e){return e!==void 0?Iu(e)+" ":""}function zo(e){if(typeof e=="number")return"0";switch(e.TAG|0){case 0:return"posedge "+e._0;case 1:return"negedge "+e._0;case 2:return e._0;case 3:return zo(e._0)+" or "+zo(e._1)}}function oh(e){return typeof e=="number"?"@(*)":e.TAG===0?"#"+String(e._0):"@("+zo(e._0)+")"}function Ka(e,n){return'"'+e+'"'+(n.length===0?"":`,
          `)+dr("",Lc(", ",Q(lh,n)))}function Zc(e){if(typeof e=="number")return"$finish";switch(e.TAG|0){case 0:return oh(e._0);case 1:return e._0?e._1+" <= "+Xa(e._2)+Pe(e._3):e._1+" = "+Xa(e._2)+Pe(e._3);case 2:return"$display("+Ka(e._0,e._1)+")";case 3:return"$monitor("+Ka(e._0,e._1)+")";case 4:return"goto +"+String(e._0);case 5:return"goto +"+String(e._1)+" unless "+Pe(e._0)}}function uh(e,n,t,r){var i=Zc(t),l=" "+(ne(n,r)?i+";":i+`;
`);return ne(e,r)?A.jsx("b",{children:l}):l}function ah(e,n){var t=n.length-1|0;return gn(function(r,i){return uh(e,t,r,i)},n)}function sh(e){return zc(" ",["assign",Iu(e.delay),e.lhs,"=",Pe(e.rhs)+";"])}function ch(e){return e!==void 0?" = "+Pe(e):""}function fh(e){return"logic "+e.target+ch(e.init)+";"}function dh(e){switch(e){case 0:return"wire";case 1:return"wand";case 2:return"wor"}}function ph(e){return zc(" ",[dh(e.type_),Iu(e.delay),e.name+";"])}function vh(e){if(!e)return"initial";switch(e._0){case 0:return"always";case 1:return"always_comb";case 2:return"always_ff";case 3:return"always_latch"}}function mh(e,n,t){return Yc(wc([[A.jsx("span",{children:"// Process "+String(t+1|0),className:"comment"}),`
`+vh(n.proc_type),` begin
`],ah(O(e,t).state===3?-1:O(e,t).pc,n.stmts),[`
end`]],[]))}function hh(e){switch(e){case 0:return"running";case 1:return"waiting";case 2:return"blocked";case 3:return"finished"}}function _h(e){return e.TAG===2?A.jsx("li",{children:"nba("+e._1+" <= "+at(e._2)+")"},String(e._0)):Y("impossible")}function Ul(e,n){switch(n.TAG|0){case 0:var t=n._1;return"update("+O(e,t).lhs+"("+String(t)+")): "+at(n._2);case 1:return"eval(cont: "+String(n._1+1|0)+", "+n._2+" = "+at(n._3)+")";case 2:return"nba("+n._1+" <= "+at(n._2)+")";case 3:return"eval(proc: "+String(n._1+1|0)+")";case 4:return A.jsxs("ol",{children:["NBA events:",dn(n._1,_h)]})}}function gh(e,n){return Yc(Lc(`

`,[dr(`
`,Q(ph,e.nets)),dr(`
`,Q(fh,e.vars)),dr(`
`,Q(sh,e.conts))].concat(gn(function(t,r){return mh(n,t,r)},e.procs))))}function yh(e){return e!==void 0?A.jsx("code",{children:Zc({TAG:3,_0:e[0],_1:e[1]})}):"No monitor"}function wh(e){if(e!==void 0)return qr(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}function kh(e,n){if(e!==void 0)return _t(n(qr(e)))}function Eh(e,n){return kh(e,Kn(n))}function Sh(e){return e!==void 0}var Bl={contents:0};function Jc(e){return Bl.contents=Bl.contents+1|0,e+("/"+Bl.contents)}function xh(e){return e==null?!1:typeof e.RE_EXN_ID=="string"}var ft=Jc("Compiler.TypeCheckError"),an=Jc("Compiler.CompileError");function Ya(e,n){return{TAG:0,_0:e,_1:n}}function ri(e,n,t,r){return{TAG:1,_0:e,_1:n,_2:t,_3:r}}function Za(e,n){return{TAG:2,_0:e,_1:n}}function Ja(e,n){return{TAG:3,_0:e,_1:n}}function Th(e,n){return{TAG:4,_0:e,_1:n}}function Ch(e,n,t){return{TAG:5,_0:e,_1:n,_2:t}}function Nh(e){return{TAG:6,_0:e}}function es(e,n){return[e,n]}function Ah(e){return{TAG:0,_0:e}}function ns(e,n,t){return{TAG:1,_0:e,_1:n,_2:t}}function ts(e,n,t){return{TAG:3,_0:e,_1:n,_2:t}}function rs(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function Ph(e,n){return{TAG:4,_0:e,_1:n}}function zh(e){return{TAG:0,_0:e}}function Ih(e){return{TAG:1,_0:e}}function ml(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:an,_1:"Expected variable, found: "+Pe(e),Error:new Error}}function ef(e,n){if(!bc(e,n))throw{RE_EXN_ID:ft,_1:"Undefined reference: "+n,Error:new Error}}function Lh(e,n){var t=$c(e,n);if(t!==void 0){if(!t)return;throw{RE_EXN_ID:ft,_1:"Undefined var: "+n,Error:new Error}}throw{RE_EXN_ID:ft,_1:"Undefined var: "+n,Error:new Error}}function nf(e,n){var t=$c(e,n);if(t!==void 0){if(t)return;throw{RE_EXN_ID:ft,_1:"Undefined net: "+n,Error:new Error}}throw{RE_EXN_ID:ft,_1:"Undefined net: "+n,Error:new Error}}function hn(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return;case 1:return ef(e,t._0);case 2:n=t._0;continue;case 3:return jn(function(r){return hn(e,r)},[t._0,t._2]);case 4:return jn(function(r){return hn(e,r)},[t._0,t._1,t._2])}}}function tf(e,n){if(typeof n!="number")return n.TAG===3?jn(function(t){return tf(e,t)},[n._0,n._1]):ef(e,n._0)}function Oh(e,n){if(!(typeof n=="number"||n.TAG===0))return tf(e,n._0)}function Rh(e,n){if(n)return hn(e,n._0)}function is(e,n,t){var r=t[0];if(bc(n,r))throw{RE_EXN_ID:ft,_1:"Name collision: "+r,Error:new Error};return Oc(t[1],function(i){return hn(n,i)}),bn(n,r,e)}function xi(e,n){for(;;){var t=n;if(typeof t=="number")return;switch(t.TAG|0){case 0:return Oh(e,t._0),Oc(t._1,function(r){return xi(e,r)});case 1:return Lh(e,t._1),hn(e,t._3);case 2:case 3:break;case 4:hn(e,t._0),n=t._1;continue;case 5:return hn(e,t._0),jn(function(r){return xi(e,r)},[t._1,t._2]);case 6:return jn(function(r){return xi(e,r)},t._0)}return jn(function(r){return Rh(e,r)},t._1)}}function Dh(e,n){if(!(n.length<=0)){var t=ml(O(n,0));nf(e,t),jn(function(r){return hn(e,r)},n)}}function Mh(e,n){switch(n.TAG|0){case 0:return un(function(t,r){return is(0,t,r)},e,n._0);case 1:return un(function(t,r){return is(1,t,r)},e,n._2);case 2:return jn(function(t){return Dh(e,t)},n._2),e;case 3:return nf(e,n._0),hn(e,n._2),e;case 4:return xi(e,n._1),e}}function pn(e){for(;;){var n=e;switch(n.TAG|0){case 0:return;case 1:return Pc([n._0]);case 2:e=n._0;continue;case 3:return Rn(pn(n._0),pn(n._2));case 4:return pr([pn(n._0),pn(n._1),pn(n._2)])}}}function jh(e){if(e)return pn(e._0)}function Et(e){for(;;){var n=e;if(typeof n=="number")return;switch(n.TAG|0){case 0:var t=n._1;if(t===void 0)return;e=t;continue;case 1:return pn(n._3);case 2:case 3:return pr(Q(jh,n._1));case 4:return Rn(pn(n._0),Et(n._1));case 5:return pr([pn(n._0),Et(n._1),Et(n._2)]);case 6:return pr(Q(Et,n._0))}}}function Ti(e){for(;;){var n=e;if(typeof n=="number")return;switch(n.TAG|0){case 1:return Pc([n._1]);case 4:e=n._1;continue;case 5:return Rn(Ti(n._1),Ti(n._2));case 6:return pr(Q(Ti,n._0));default:return}}}function bh(e){var n=Et(e),t=Ti(e),r=Fc(Q(function(l){return{TAG:2,_0:l}},So(Ev(n,So(t))))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:e}}function rt(e){if(typeof e=="number")return e;switch(e.TAG|0){case 0:if(typeof e._0!="number")return e;var n=e._1;if(n===void 0)return{TAG:0,_0:{TAG:1,_0:0},_1:void 0};var t=rt(n),r=Fc(Q(function(l){return{TAG:2,_0:l}},So(Et(t)))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:t};case 4:return{TAG:4,_0:e._0,_1:rt(e._1)};case 5:return{TAG:5,_0:e._0,_1:rt(e._1),_2:rt(e._2)};case 6:return{TAG:6,_0:Q(rt,e._0)};default:return e}}function hr(e){for(;;){var n=e;if(typeof n=="number")return 0;switch(n.TAG|0){case 0:var t=n._0;if(typeof t=="number"||t.TAG!==0)return 1;throw{RE_EXN_ID:an,_1:"Time control not allowed inside new-type always",Error:new Error};case 1:if(n._2===void 0)return 0;throw{RE_EXN_ID:an,_1:"Delayed assignments not allowed inside new-type always",Error:new Error};case 4:e=n._1;continue;case 5:return hr(n._1)+hr(n._2)|0;case 6:return Sv(Q(hr,n._0));default:return 0}}}function Vh(e,n){if(ne(e,{_0:1})||ne(e,{_0:3})){if(hr(n)===0)return;throw{RE_EXN_ID:an,_1:"Event control not allowed inside always_comb/always_latch",Error:new Error}}if(ne(e,{_0:2})&&hr(n)!==1)throw{RE_EXN_ID:an,_1:"Must be one and one only event control inside always_ff",Error:new Error}}function $h(e,n){if(!e)return rt(n);var t=e._0;return t!==1&&t<3?rt(n):bh(n)}function Fh(e){return{target:e[0],init:e[1]}}function Gh(e,n,t){var r=t[0],i;switch(e){case"triand":case"wand":i=1;break;case"tri":case"wire":i=0;break;case"trior":case"wor":i=2;break;default:i=Y("impossible net type")}var l=Eh(t[1],function(o){return{lhs:r,delay:0,rhs:o}});return[{type_:i,name:r,delay:n},l]}function Uh(e,n){if(n.length===2){var t=ml(O(n,0)),r=O(n,1);return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:an,_1:"Expected two arguments to not gate",Error:new Error}}function Bh(e){switch(e){case"and":return 2;case"or":return 3;case"xor":return 4;default:return Y("impossible gate")}}function qh(e,n,t){if(t.length===3){var r=ml(O(t,0)),i=O(t,1),l=O(t,2),o={TAG:3,_0:i,_1:e,_2:l};return{lhs:r,delay:n,rhs:o}}throw{RE_EXN_ID:an,_1:"Expected three arguments to gate",Error:new Error}}function Wh(e,n){if(n.length===3){var t=ml(O(n,0)),r={TAG:2,_0:{TAG:3,_0:O(n,1),_1:3,_2:O(n,2)}};return{lhs:t,delay:e,rhs:r}}throw{RE_EXN_ID:an,_1:"Expected three arguments to gate",Error:new Error}}function kt(e){if(typeof e=="number")return[0];switch(e.TAG|0){case 0:var n=e._1,t=e._0;return n!==void 0?[{TAG:0,_0:t}].concat(kt(n)):[{TAG:0,_0:t}];case 1:return[{TAG:1,_0:e._0,_1:e._1,_2:e._2,_3:e._3}];case 2:return[{TAG:2,_0:e._0,_1:e._1}];case 3:return[{TAG:3,_0:e._0,_1:e._1}];case 4:var r=kt(e._1);return[{TAG:5,_0:e._0,_1:r.length+1|0}].concat(r);case 5:var i=kt(e._1),l=kt(e._2);return[{TAG:5,_0:e._0,_1:i.length+2|0}].concat(i,[{TAG:4,_0:l.length+1|0}],l);case 6:return un(function(o,u){return o.concat(kt(u))},[],e._0)}}function Hh(e){switch(e){case"always":return{_0:0};case"always_comb":return{_0:1};case"always_ff":return{_0:2};case"always_latch":return{_0:3};case"initial":return 0;default:return Y("impossible proc type")}}function Qh(e,n){switch(n.TAG|0){case 0:var t=Q(Fh,n._0);return{vars:e.vars.concat(t),nets:e.nets,conts:e.conts,procs:e.procs};case 1:var r=n._1,i=n._0,l=dv(Q(function(k){return Gh(i,r,k)},n._2)),o=Q(wh,Gt(Sh,l[1]));return{vars:e.vars,nets:e.nets.concat(l[0]),conts:e.conts.concat(o),procs:e.procs};case 2:var u=n._2,a=n._1,s=n._0;if(s==="not"){var v=Q(function(k){return Uh(a,k)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(v),procs:e.procs}}if(s==="and"||s==="or"){var m=Bh(s),p=Q(function(k){return qh(m,a,k)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(p),procs:e.procs}}if(s==="nor"){var h=Q(function(k){return Wh(a,k)},u);return{vars:e.vars,nets:e.nets,conts:e.conts.concat(h),procs:e.procs}}throw{RE_EXN_ID:an,_1:"Unsupported gate: "+s,Error:new Error};case 3:var y=n._0,w=n._1,z=n._2,f={lhs:y,delay:w,rhs:z};return{vars:e.vars,nets:e.nets,conts:e.conts.concat([f]),procs:e.procs};case 4:var c=n._1,d=Hh(n._0);Vh(d,c);var g=$h(d,c),S=kt(g),T={proc_type:d,stmts:S};return{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs.concat([T])}}}function Xh(e){un(Mh,void 0,e);var n=[],t=[],r=[],i=[],l={vars:n,nets:t,conts:r,procs:i};return un(Qh,l,e)}var Kh=0;const rf=ohm.grammar(String.raw`
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
`),lf=rf.createSemantics();lf.addOperation("translate",{Module(e,n,t,r,i,l,o){return l.children.map(u=>u.translate())},Decl_no_init(e){return es(e.translate(),ni)},Decl_init(e,n,t){return es(e.translate(),ei(t.translate()))},GateDecl(e,n,t,r){return t.asIteration().children.map(i=>i.translate())},Top_decl(e,n,t){return Ah(n.asIteration().children.map(r=>r.translate()))},Top_net(e,n,t){return ns(e.translate(),Gl,n.asIteration().children.map(r=>r.translate()))},Top_net_delay(e,n,t,r){return ns(e.translate(),n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_cont(e,n,t,r,i){return ts(n.translate(),Gl,r.translate())},Top_cont_delay(e,n,t,r,i,l){return ts(t.translate(),n.translate(),i.translate())},Top_gate(e,n,t){return rs(e.sourceString,Gl,n.asIteration().children.map(r=>r.translate()))},Top_gate_delay(e,n,t,r){return rs(e.sourceString,n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_proc(e,n){return Ph(e.sourceString,n.translate())},WireType(e){return this.sourceString},TimeCont_delay(e,n){return _m(n.translate())},TimeCont_event(e,n,t,r){return gm(t.translate())},TimeCont_star(e,n,t,r){return Ym},Stmt_blocking(e,n,t,r){return ri(Ha,e.translate(),ni,t.translate())},Stmt_blocking_delay(e,n,t,r,i){return ri(Ha,e.translate(),ei(t.translate()),r.translate())},Stmt_nonblocking(e,n,t,r){return ri(Qa,e.translate(),ni,t.translate())},Stmt_nonblocking_delay(e,n,t,r,i){return ri(Qa,e.translate(),ei(t.translate()),r.translate())},Stmt_if(e,n,t,r,i){return Th(t.translate(),i.translate())},Stmt_if_else(e,n,t,r,i,l,o){return Ch(t.translate(),i.translate(),o.translate())},Stmt_display(e,n,t,r,i,l,o){return Za(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_display_no_args(e,n,t,r,i){return Za(t.translate(),[])},Stmt_monitor(e,n,t,r,i,l,o){return Ja(t.translate(),i.asIteration().children.map(u=>u.translate()))},Stmt_monitor_no_args(e,n,t,r,i){return Ja(t.translate(),[])},Stmt_finish(e,n){return Kh},Stmt_time_stmt(e,n){return Ya(e.translate(),ei(n.translate()))},Stmt_time(e,n){return Ya(e.translate(),ni)},Stmt_block(e,n,t){return Nh(n.children.map(r=>r.translate()))},Delay_one(e,n,t,r){return im(t.translate())},Delay_two(e,n,t,r,i,l){return lm(t.translate(),i.translate())},Delay_three(e,n,t,r,i,l,o,u){return om(t.translate(),i.translate(),o.translate())},Event_Exp(e){return e.translate()},Event_Exp_or(e,n,t){return hm(e.translate(),t.translate())},Event_Exp1_id(e){return mm(e.translate())},Event_Exp1_posedge(e,n){return pm(n.translate())},Event_Exp1_negedge(e,n){return vm(n.translate())},Exp(e){return e.translate()},Exp_cond(e,n,t,r,i){return tm(e.translate(),t.translate(),i.translate())},Exp1(e){return e.translate()},Exp1_lor(e,n,t){return Yv(e.translate(),t.translate())},Exp2(e){return e.translate()},Exp2_land(e,n,t){return Kv(e.translate(),t.translate())},Exp3(e){return e.translate()},Exp3_bor(e,n,t){return Jv(e.translate(),t.translate())},Exp4(e){return e.translate()},Exp4_bxor(e,n,t){return em(e.translate(),t.translate())},Exp5(e){return e.translate()},Exp5_band(e,n,t){return Zv(e.translate(),t.translate())},Exp6(e){return e.translate()},Exp6_add(e,n,t){return nm(e.translate(),t.translate())},Exp7(e){return e.translate()},Exp7_not(e,n){return Xv(n.translate())},Exp8_id(e){return Qv(e.translate())},Exp8_bit(e){return Vl(e.translate())},Exp8_zero(e){return Vl(bl(Oa))},Exp8_one(e){return Vl(bl(La))},Exp8_paren(e,n,t){return n.translate()},ExpOrTime_exp(e){return rm(e.translate())},ExpOrTime_time(e){return Km},number(e){return parseInt(this.sourceString,10)},bit(e,n){var t;switch(n.sourceString.toLowerCase()){case"1":t=La;break;case"0":t=Oa;break;case"x":t=Ov;break;case"z":t=Rv;break;default:throw"Impossible!"}return bl(t)},string(e,n,t){return n.sourceString},id(e,n){return this.sourceString}});function Yh(e){try{const n=rf.match(e);return zh(lf(n).translate())}catch(n){if(n instanceof TypeError)return Ih(n.message);throw n}}var ql=Vc([["empty.sv",`module empty;

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
`]]);function Zh(e){return xh(e)?e:{RE_EXN_ID:"JsError",_1:e}}function Jh(e){var n=Fa(Tm),t=Ga(n),r=Ft.useState(function(){return t}),i=r[1],l=r[0],o=function(k){sn(i,function(_){return Ba(_)?Wm(_):_})},u=function(k){sn(i,function(_){return qa(_)?Hm(_):_})},a=function(k){sn(i,function(_){return Wa(_)?Xm(_):_})},s=Ft.useState(function(){return ut(ql,"empty.sv")}),v=s[1],m=s[0],p=function(k){var _=Yh(m);if(_.TAG===0){var I;try{I=Fa(Xh(_._0))}catch(te){var P=Zh(te);if(P.RE_EXN_ID===ft){window.alert("Type checking failed: "+P._1);return}if(P.RE_EXN_ID===an){window.alert("Compilation failed: "+P._1);return}throw P}var W=Ga(I);return sn(i,function(te){return W})}window.alert("Could not parse Verilog code: "+_._0)},h=function(k){sn(v,function(_){return k.target.value}),k.preventDefault()},y=function(k){var _=k.target.value;sn(v,function(I){return ut(ql,_)}),k.preventDefault()},w="Simulation time: "+String(l.time)+" ("+Am(l.status)+")",z=dn(Wv(l.env),function(k){var _=k[0];return A.jsx("li",{children:_+": "+at(k[1])},_)}),f=jl(l.cont_env,function(k,_){return A.jsx("li",{children:O(l.vmodule.conts,k).lhs+"("+String(k)+"): "+at(_)},String(k))}),c=jl(l.proc_env,function(k,_){return A.jsx("li",{children:"state = "+hh(_.state)+", pc = "+String(_.pc)},String(k))}),d=dn(l.queue,function(k){var _=k[1],I=k[0],P=jl(_.active,function(se,ke){var me=Ua(l,I);return A.jsx("li",{children:Ul(l.vmodule.conts,ke),className:me?"active":"",onClick:function(x){return sn(i,function(N){return Ua(N,I)?qm(N,se):N})}},$l(ke))}),W=dn(_.inactive,function(se){return A.jsx("li",{children:Ul(l.vmodule.conts,se)},$l(se))}),te=dn(_.nba,function(se){return A.jsx("li",{children:Ul(l.vmodule.conts,se)},$l(se))}),we=Ba(l),Ze=qa(l);return A.jsxs("li",{children:[A.jsx("b",{children:"Time: "+String(I)}),A.jsxs("ul",{children:[A.jsxs("li",{children:["Active:",A.jsx("ul",{children:P})]}),A.jsxs("li",{children:["Inactive:",A.jsx("ul",{children:W})],className:we?"active":"",onClick:o}),A.jsxs("li",{children:["NBA:",A.jsx("ul",{children:te})],className:Ze?"active":"",onClick:u})]})]},"Time"+String(I))}),g=yh(l.monitor),S=dn(Hv(ql),function(k){return A.jsx("option",{children:k},k)}),T=Wa(l);return A.jsx("table",{children:A.jsx("tbody",{children:A.jsxs("tr",{children:[A.jsxs("td",{children:[A.jsx("div",{children:A.jsx("select",{children:S,defaultValue:"empty.sv",onChange:y})}),A.jsx("div",{children:A.jsx("textarea",{cols:60,rows:20,value:m,onChange:h})}),A.jsx("div",{children:A.jsx("button",{children:"Parse",onClick:p})})]}),A.jsxs("td",{children:[A.jsx("p",{children:"Normalised Verilog module:",id:"code-render-title"}),A.jsx("div",{children:gh(l.vmodule,l.proc_env),id:"code-render"})]}),A.jsxs("td",{children:[A.jsx("p",{children:w,className:T?"active":"",id:"simulation-time",onClick:a}),A.jsx("p",{children:"Environment:"}),A.jsx("ul",{children:z}),A.jsx("p",{children:"Drivers (continuous assignments):"}),A.jsx("ul",{children:f}),A.jsx("p",{children:"Processes:"}),A.jsx("ol",{children:c}),A.jsx("p",{children:"Events:",className:""}),A.jsx("ul",{children:d}),A.jsx("p",{children:"Monitor:"}),A.jsx("p",{children:g})]}),A.jsxs("td",{children:[A.jsx("p",{children:"Output:",id:"output"}),A.jsx("pre",{children:l.output})]})]})}),id:"main-table"})}var e0=Jh;function n0(e){if(e!==void 0)return qr(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}var of={exports:{}},Oe={},uf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,N){var L=x.length;x.push(N);e:for(;0<L;){var M=L-1>>>1,V=x[M];if(0<i(V,N))x[M]=N,x[L]=V,L=M;else break e}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var N=x[0],L=x.pop();if(L!==N){x[0]=L;e:for(var M=0,V=x.length,xn=V>>>1;M<xn;){var Be=2*(M+1)-1,Tn=x[Be],De=Be+1,Cn=x[De];if(0>i(Tn,L))De<V&&0>i(Cn,Tn)?(x[M]=Cn,x[De]=L,M=De):(x[M]=Tn,x[Be]=L,M=Be);else if(De<V&&0>i(Cn,L))x[M]=Cn,x[De]=L,M=De;else break e}}return N}function i(x,N){var L=x.sortIndex-N.sortIndex;return L!==0?L:x.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],s=[],v=1,m=null,p=3,h=!1,y=!1,w=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(x){for(var N=t(s);N!==null;){if(N.callback===null)r(s);else if(N.startTime<=x)r(s),N.sortIndex=N.expirationTime,n(a,N);else break;N=t(s)}}function g(x){if(w=!1,d(x),!y)if(t(a)!==null)y=!0,ke(S);else{var N=t(s);N!==null&&me(g,N.startTime-x)}}function S(x,N){y=!1,w&&(w=!1,f(_),_=-1),h=!0;var L=p;try{for(d(N),m=t(a);m!==null&&(!(m.expirationTime>N)||x&&!W());){var M=m.callback;if(typeof M=="function"){m.callback=null,p=m.priorityLevel;var V=M(m.expirationTime<=N);N=e.unstable_now(),typeof V=="function"?m.callback=V:m===t(a)&&r(a),d(N)}else r(a);m=t(a)}if(m!==null)var xn=!0;else{var Be=t(s);Be!==null&&me(g,Be.startTime-N),xn=!1}return xn}finally{m=null,p=L,h=!1}}var T=!1,k=null,_=-1,I=5,P=-1;function W(){return!(e.unstable_now()-P<I)}function te(){if(k!==null){var x=e.unstable_now();P=x;var N=!0;try{N=k(!0,x)}finally{N?we():(T=!1,k=null)}}else T=!1}var we;if(typeof c=="function")we=function(){c(te)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,se=Ze.port2;Ze.port1.onmessage=te,we=function(){se.postMessage(null)}}else we=function(){z(te,0)};function ke(x){k=x,T||(T=!0,we())}function me(x,N){_=z(function(){x(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,ke(S))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(x){switch(p){case 1:case 2:case 3:var N=3;break;default:N=p}var L=p;p=N;try{return x()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,N){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var L=p;p=x;try{return N()}finally{p=L}},e.unstable_scheduleCallback=function(x,N,L){var M=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?M+L:M):L=M,x){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=L+V,x={id:v++,callback:N,priorityLevel:x,startTime:L,expirationTime:V,sortIndex:-1},L>M?(x.sortIndex=L,n(s,x),t(a)===null&&x===t(s)&&(w?(f(_),_=-1):w=!0,me(g,L-M))):(x.sortIndex=V,n(a,x),y||h||(y=!0,ke(S))),x},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(x){var N=p;return function(){var L=p;p=N;try{return x.apply(this,arguments)}finally{p=L}}}})(af);uf.exports=af;var t0=uf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=Ft,Le=t0;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cf=new Set,Cr={};function gt(e,n){Bt(e,n),Bt(e+"Capture",n)}function Bt(e,n){for(Cr[e]=n,e=0;e<n.length;e++)cf.add(n[e])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=Object.prototype.hasOwnProperty,r0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ls={},os={};function i0(e){return Io.call(os,e)?!0:Io.call(ls,e)?!1:r0.test(e)?os[e]=!0:(ls[e]=!0,!1)}function l0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function o0(e,n,t,r){if(n===null||typeof n>"u"||l0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lu=/[\-:]([a-z])/g;function Ou(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Lu,Ou);ae[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Lu,Ou);ae[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Lu,Ou);ae[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ru(e,n,t,r){var i=ae.hasOwnProperty(n)?ae[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(o0(n,t,i,r)&&(t=null),r||i===null?i0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Sn=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ii=Symbol.for("react.element"),St=Symbol.for("react.portal"),xt=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),Lo=Symbol.for("react.profiler"),ff=Symbol.for("react.provider"),df=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),Oo=Symbol.for("react.suspense"),Ro=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),pf=Symbol.for("react.offscreen"),us=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Wl;function ar(e){if(Wl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Wl=n&&n[1]||""}return`
`+Wl+e}var Hl=!1;function Ql(e,n){if(!e||Hl)return"";Hl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Hl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ar(e):""}function u0(e){switch(e.tag){case 5:return ar(e.type);case 16:return ar("Lazy");case 13:return ar("Suspense");case 19:return ar("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function Do(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xt:return"Fragment";case St:return"Portal";case Lo:return"Profiler";case Du:return"StrictMode";case Oo:return"Suspense";case Ro:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case df:return(e.displayName||"Context")+".Consumer";case ff:return(e._context.displayName||"Context")+".Provider";case Mu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ju:return n=e.displayName||null,n!==null?n:Do(e.type)||"Memo";case zn:n=e._payload,e=e._init;try{return Do(e(n))}catch{}}return null}function a0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Do(n);case 8:return n===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function s0(e){var n=vf(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function li(e){e._valueTracker||(e._valueTracker=s0(e))}function mf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=vf(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mo(e,n){var t=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function as(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Qn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function hf(e,n){n=n.checked,n!=null&&Ru(e,"checked",n,!1)}function jo(e,n){hf(e,n);var t=Qn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?bo(e,n.type,t):n.hasOwnProperty("defaultValue")&&bo(e,n.type,Qn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ss(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function bo(e,n,t){(n!=="number"||Ui(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var sr=Array.isArray;function Dt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Qn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Vo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(sr(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Qn(t)}}function _f(e,n){var t=Qn(n.value),r=Qn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function fs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function gf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $o(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?gf(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,yf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Nr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c0=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){c0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_r[n]=_r[e]})});function wf(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||_r.hasOwnProperty(e)&&_r[e]?(""+n).trim():n+"px"}function kf(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=wf(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var f0=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,n){if(n){if(f0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function Go(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bo=null,Mt=null,jt=null;function ds(e){if(e=Qr(e)){if(typeof Bo!="function")throw Error(E(280));var n=e.stateNode;n&&(n=wl(n),Bo(e.stateNode,e.type,n))}}function Ef(e){Mt?jt?jt.push(e):jt=[e]:Mt=e}function Sf(){if(Mt){var e=Mt,n=jt;if(jt=Mt=null,ds(e),n)for(e=0;e<n.length;e++)ds(n[e])}}function xf(e,n){return e(n)}function Tf(){}var Xl=!1;function Cf(e,n,t){if(Xl)return e(n,t);Xl=!0;try{return xf(e,n,t)}finally{Xl=!1,(Mt!==null||jt!==null)&&(Tf(),Sf())}}function Ar(e,n){var t=e.stateNode;if(t===null)return null;var r=wl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var qo=!1;if(yn)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){qo=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{qo=!1}function d0(e,n,t,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(v){this.onError(v)}}var gr=!1,Bi=null,qi=!1,Wo=null,p0={onError:function(e){gr=!0,Bi=e}};function v0(e,n,t,r,i,l,o,u,a){gr=!1,Bi=null,d0.apply(p0,arguments)}function m0(e,n,t,r,i,l,o,u,a){if(v0.apply(this,arguments),gr){if(gr){var s=Bi;gr=!1,Bi=null}else throw Error(E(198));qi||(qi=!0,Wo=s)}}function yt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Nf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ps(e){if(yt(e)!==e)throw Error(E(188))}function h0(e){var n=e.alternate;if(!n){if(n=yt(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return ps(i),e;if(l===r)return ps(i),n;l=l.sibling}throw Error(E(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function Af(e){return e=h0(e),e!==null?Pf(e):null}function Pf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Pf(e);if(n!==null)return n;e=e.sibling}return null}var zf=Le.unstable_scheduleCallback,vs=Le.unstable_cancelCallback,_0=Le.unstable_shouldYield,g0=Le.unstable_requestPaint,X=Le.unstable_now,y0=Le.unstable_getCurrentPriorityLevel,Vu=Le.unstable_ImmediatePriority,If=Le.unstable_UserBlockingPriority,Wi=Le.unstable_NormalPriority,w0=Le.unstable_LowPriority,Lf=Le.unstable_IdlePriority,hl=null,ln=null;function k0(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:x0,E0=Math.log,S0=Math.LN2;function x0(e){return e>>>=0,e===0?32:31-(E0(e)/S0|0)|0}var ui=64,ai=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=cr(u):(l&=o,l!==0&&(r=cr(l)))}else o=t&~i,o!==0?r=cr(o):l!==0&&(r=cr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Xe(n),i=1<<t,r|=e[t],n&=~i;return r}function T0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Xe(l),u=1<<o,a=i[o];a===-1?(!(u&t)||u&r)&&(i[o]=T0(u,n)):a<=n&&(e.expiredLanes|=u),l&=~u}}function Ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Of(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function Kl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Wr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Xe(n),e[n]=t}function N0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Xe(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function $u(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Xe(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var j=0;function Rf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Df,Fu,Mf,jf,bf,Qo=!1,si=[],$n=null,Fn=null,Gn=null,Pr=new Map,zr=new Map,Ln=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ms(e,n){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":Pr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(n.pointerId)}}function tr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Qr(n),n!==null&&Fu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function P0(e,n,t,r,i){switch(n){case"focusin":return $n=tr($n,e,n,t,r,i),!0;case"dragenter":return Fn=tr(Fn,e,n,t,r,i),!0;case"mouseover":return Gn=tr(Gn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Pr.set(l,tr(Pr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,zr.set(l,tr(zr.get(l)||null,e,n,t,r,i)),!0}return!1}function Vf(e){var n=it(e.target);if(n!==null){var t=yt(n);if(t!==null){if(n=t.tag,n===13){if(n=Nf(t),n!==null){e.blockedOn=n,bf(e.priority,function(){Mf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Xo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Uo=r,t.target.dispatchEvent(r),Uo=null}else return n=Qr(t),n!==null&&Fu(n),e.blockedOn=t,!1;n.shift()}return!0}function hs(e,n,t){Ci(e)&&t.delete(n)}function z0(){Qo=!1,$n!==null&&Ci($n)&&($n=null),Fn!==null&&Ci(Fn)&&(Fn=null),Gn!==null&&Ci(Gn)&&(Gn=null),Pr.forEach(hs),zr.forEach(hs)}function rr(e,n){e.blockedOn===n&&(e.blockedOn=null,Qo||(Qo=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,z0)))}function Ir(e){function n(i){return rr(i,e)}if(0<si.length){rr(si[0],e);for(var t=1;t<si.length;t++){var r=si[t];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&rr($n,e),Fn!==null&&rr(Fn,e),Gn!==null&&rr(Gn,e),Pr.forEach(n),zr.forEach(n),t=0;t<Ln.length;t++)r=Ln[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&(t=Ln[0],t.blockedOn===null);)Vf(t),t.blockedOn===null&&Ln.shift()}var bt=Sn.ReactCurrentBatchConfig,Qi=!0;function I0(e,n,t,r){var i=j,l=bt.transition;bt.transition=null;try{j=1,Gu(e,n,t,r)}finally{j=i,bt.transition=l}}function L0(e,n,t,r){var i=j,l=bt.transition;bt.transition=null;try{j=4,Gu(e,n,t,r)}finally{j=i,bt.transition=l}}function Gu(e,n,t,r){if(Qi){var i=Xo(e,n,t,r);if(i===null)oo(e,n,r,Xi,t),ms(e,r);else if(P0(i,e,n,t,r))r.stopPropagation();else if(ms(e,r),n&4&&-1<A0.indexOf(e)){for(;i!==null;){var l=Qr(i);if(l!==null&&Df(l),l=Xo(e,n,t,r),l===null&&oo(e,n,r,Xi,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else oo(e,n,r,null,t)}}var Xi=null;function Xo(e,n,t,r){if(Xi=null,e=bu(r),e=it(e),e!==null)if(n=yt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Nf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Xi=e,null}function $f(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y0()){case Vu:return 1;case If:return 4;case Wi:case w0:return 16;case Lf:return 536870912;default:return 16}default:return 16}}var Dn=null,Uu=null,Ni=null;function Ff(){if(Ni)return Ni;var e,n=Uu,t=n.length,r,i="value"in Dn?Dn.value:Dn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Ni=i.slice(e,1<r?1-r:void 0)}function Ai(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function _s(){return!1}function Re(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ci:_s,this.isPropagationStopped=_s,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),n}var Zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=Re(Zt),Hr=q({},Zt,{view:0,detail:0}),O0=Re(Hr),Yl,Zl,ir,_l=q({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(Yl=e.screenX-ir.screenX,Zl=e.screenY-ir.screenY):Zl=Yl=0,ir=e),Yl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),gs=Re(_l),R0=q({},_l,{dataTransfer:0}),D0=Re(R0),M0=q({},Hr,{relatedTarget:0}),Jl=Re(M0),j0=q({},Zt,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=Re(j0),V0=q({},Zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$0=Re(V0),F0=q({},Zt,{data:0}),ys=Re(F0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=B0[e])?!!n[e]:!1}function qu(){return q0}var W0=q({},Hr,{key:function(e){if(e.key){var n=G0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),H0=Re(W0),Q0=q({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ws=Re(Q0),X0=q({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),K0=Re(X0),Y0=q({},Zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z0=Re(Y0),J0=q({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e1=Re(J0),n1=[9,13,27,32],Wu=yn&&"CompositionEvent"in window,yr=null;yn&&"documentMode"in document&&(yr=document.documentMode);var t1=yn&&"TextEvent"in window&&!yr,Gf=yn&&(!Wu||yr&&8<yr&&11>=yr),ks=String.fromCharCode(32),Es=!1;function Uf(e,n){switch(e){case"keyup":return n1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function r1(e,n){switch(e){case"compositionend":return Bf(n);case"keypress":return n.which!==32?null:(Es=!0,ks);case"textInput":return e=n.data,e===ks&&Es?null:e;default:return null}}function i1(e,n){if(Tt)return e==="compositionend"||!Wu&&Uf(e,n)?(e=Ff(),Ni=Uu=Dn=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gf&&n.locale!=="ko"?null:n.data;default:return null}}var l1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ss(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!l1[e.type]:n==="textarea"}function qf(e,n,t,r){Ef(r),n=Ki(n,"onChange"),0<n.length&&(t=new Bu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var wr=null,Lr=null;function o1(e){td(e,0)}function gl(e){var n=At(e);if(mf(n))return e}function u1(e,n){if(e==="change")return n}var Wf=!1;if(yn){var eo;if(yn){var no="oninput"in document;if(!no){var xs=document.createElement("div");xs.setAttribute("oninput","return;"),no=typeof xs.oninput=="function"}eo=no}else eo=!1;Wf=eo&&(!document.documentMode||9<document.documentMode)}function Ts(){wr&&(wr.detachEvent("onpropertychange",Hf),Lr=wr=null)}function Hf(e){if(e.propertyName==="value"&&gl(Lr)){var n=[];qf(n,Lr,e,bu(e)),Cf(o1,n)}}function a1(e,n,t){e==="focusin"?(Ts(),wr=n,Lr=t,wr.attachEvent("onpropertychange",Hf)):e==="focusout"&&Ts()}function s1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Lr)}function c1(e,n){if(e==="click")return gl(n)}function f1(e,n){if(e==="input"||e==="change")return gl(n)}function d1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ye=typeof Object.is=="function"?Object.is:d1;function Or(e,n){if(Ye(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Io.call(n,i)||!Ye(e[i],n[i]))return!1}return!0}function Cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ns(e,n){var t=Cs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Cs(t)}}function Qf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xf(){for(var e=window,n=Ui();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ui(e.document)}return n}function Hu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function p1(e){var n=Xf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Qf(t.ownerDocument.documentElement,t)){if(r!==null&&Hu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ns(t,l);var o=Ns(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var v1=yn&&"documentMode"in document&&11>=document.documentMode,Ct=null,Ko=null,kr=null,Yo=!1;function As(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yo||Ct==null||Ct!==Ui(r)||(r=Ct,"selectionStart"in r&&Hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Or(kr,r)||(kr=r,r=Ki(Ko,"onSelect"),0<r.length&&(n=new Bu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ct)))}function fi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Nt={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},to={},Kf={};yn&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete Nt.animationend.animation,delete Nt.animationiteration.animation,delete Nt.animationstart.animation),"TransitionEvent"in window||delete Nt.transitionend.transition);function yl(e){if(to[e])return to[e];if(!Nt[e])return e;var n=Nt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Kf)return to[e]=n[t];return e}var Yf=yl("animationend"),Zf=yl("animationiteration"),Jf=yl("animationstart"),ed=yl("transitionend"),nd=new Map,Ps="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,n){nd.set(e,n),gt(n,[e])}for(var ro=0;ro<Ps.length;ro++){var io=Ps[ro],m1=io.toLowerCase(),h1=io[0].toUpperCase()+io.slice(1);Yn(m1,"on"+h1)}Yn(Yf,"onAnimationEnd");Yn(Zf,"onAnimationIteration");Yn(Jf,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(ed,"onTransitionEnd");Bt("onMouseEnter",["mouseout","mouseover"]);Bt("onMouseLeave",["mouseout","mouseover"]);Bt("onPointerEnter",["pointerout","pointerover"]);Bt("onPointerLeave",["pointerout","pointerover"]);gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_1=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function zs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,m0(r,n,void 0,e),e.currentTarget=null}function td(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;zs(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;zs(i,u,s),l=a}}}if(qi)throw e=Wo,qi=!1,Wo=null,e}function $(e,n){var t=n[tu];t===void 0&&(t=n[tu]=new Set);var r=e+"__bubble";t.has(r)||(rd(n,e,2,!1),t.add(r))}function lo(e,n,t){var r=0;n&&(r|=4),rd(t,e,r,n)}var di="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[di]){e[di]=!0,cf.forEach(function(t){t!=="selectionchange"&&(_1.has(t)||lo(t,!1,e),lo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[di]||(n[di]=!0,lo("selectionchange",!1,n))}}function rd(e,n,t,r){switch($f(n)){case 1:var i=I0;break;case 4:i=L0;break;default:i=Gu}t=i.bind(null,n,t,e),i=void 0,!qo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function oo(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=it(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}Cf(function(){var s=l,v=bu(t),m=[];e:{var p=nd.get(e);if(p!==void 0){var h=Bu,y=e;switch(e){case"keypress":if(Ai(t)===0)break e;case"keydown":case"keyup":h=H0;break;case"focusin":y="focus",h=Jl;break;case"focusout":y="blur",h=Jl;break;case"beforeblur":case"afterblur":h=Jl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=K0;break;case Yf:case Zf:case Jf:h=b0;break;case ed:h=Z0;break;case"scroll":h=O0;break;case"wheel":h=e1;break;case"copy":case"cut":case"paste":h=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ws}var w=(n&4)!==0,z=!w&&e==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var c=s,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=Ar(c,f),g!=null&&w.push(Dr(c,g,d)))),z)break;c=c.return}0<w.length&&(p=new h(p,y,null,t,v),m.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==Uo&&(y=t.relatedTarget||t.fromElement)&&(it(y)||y[wn]))break e;if((h||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=t.relatedTarget||t.toElement,h=s,y=y?it(y):null,y!==null&&(z=yt(y),y!==z||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=s),h!==y)){if(w=gs,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=ws,g="onPointerLeave",f="onPointerEnter",c="pointer"),z=h==null?p:At(h),d=y==null?p:At(y),p=new w(g,c+"leave",h,t,v),p.target=z,p.relatedTarget=d,g=null,it(v)===s&&(w=new w(f,c+"enter",y,t,v),w.target=d,w.relatedTarget=z,g=w),z=g,h&&y)n:{for(w=h,f=y,c=0,d=w;d;d=wt(d))c++;for(d=0,g=f;g;g=wt(g))d++;for(;0<c-d;)w=wt(w),c--;for(;0<d-c;)f=wt(f),d--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break n;w=wt(w),f=wt(f)}w=null}else w=null;h!==null&&Is(m,p,h,w,!1),y!==null&&z!==null&&Is(m,z,y,w,!0)}}e:{if(p=s?At(s):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var S=u1;else if(Ss(p))if(Wf)S=f1;else{S=s1;var T=a1}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=c1);if(S&&(S=S(e,s))){qf(m,S,t,v);break e}T&&T(e,p,s),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&bo(p,"number",p.value)}switch(T=s?At(s):window,e){case"focusin":(Ss(T)||T.contentEditable==="true")&&(Ct=T,Ko=s,kr=null);break;case"focusout":kr=Ko=Ct=null;break;case"mousedown":Yo=!0;break;case"contextmenu":case"mouseup":case"dragend":Yo=!1,As(m,t,v);break;case"selectionchange":if(v1)break;case"keydown":case"keyup":As(m,t,v)}var k;if(Wu)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Tt?Uf(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Gf&&t.locale!=="ko"&&(Tt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Tt&&(k=Ff()):(Dn=v,Uu="value"in Dn?Dn.value:Dn.textContent,Tt=!0)),T=Ki(s,_),0<T.length&&(_=new ys(_,e,null,t,v),m.push({event:_,listeners:T}),k?_.data=k:(k=Bf(t),k!==null&&(_.data=k)))),(k=t1?r1(e,t):i1(e,t))&&(s=Ki(s,"onBeforeInput"),0<s.length&&(v=new ys("onBeforeInput","beforeinput",null,t,v),m.push({event:v,listeners:s}),v.data=k))}td(m,n)})}function Dr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ki(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Ar(e,t),l!=null&&r.unshift(Dr(e,l,i)),l=Ar(e,n),l!=null&&r.push(Dr(e,l,i))),e=e.return}return r}function wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Is(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=Ar(t,l),a!=null&&o.unshift(Dr(t,a,u))):i||(a=Ar(t,l),a!=null&&o.push(Dr(t,a,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var g1=/\r\n?/g,y1=/\u0000|\uFFFD/g;function Ls(e){return(typeof e=="string"?e:""+e).replace(g1,`
`).replace(y1,"")}function pi(e,n,t){if(n=Ls(n),Ls(e)!==n&&t)throw Error(E(425))}function Yi(){}var Zo=null,Jo=null;function eu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,Os=typeof Promise=="function"?Promise:void 0,k1=typeof queueMicrotask=="function"?queueMicrotask:typeof Os<"u"?function(e){return Os.resolve(null).then(e).catch(E1)}:nu;function E1(e){setTimeout(function(){throw e})}function uo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Ir(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Ir(n)}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Rs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Jt=Math.random().toString(36).slice(2),nn="__reactFiber$"+Jt,Mr="__reactProps$"+Jt,wn="__reactContainer$"+Jt,tu="__reactEvents$"+Jt,S1="__reactListeners$"+Jt,x1="__reactHandles$"+Jt;function it(e){var n=e[nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[wn]||t[nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Rs(e);e!==null;){if(t=e[nn])return t;e=Rs(e)}return n}e=t,t=e.parentNode}return null}function Qr(e){return e=e[nn]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function wl(e){return e[Mr]||null}var ru=[],Pt=-1;function Zn(e){return{current:e}}function F(e){0>Pt||(e.current=ru[Pt],ru[Pt]=null,Pt--)}function b(e,n){Pt++,ru[Pt]=e.current,e.current=n}var Xn={},ve=Zn(Xn),xe=Zn(!1),dt=Xn;function qt(e,n){var t=e.type.contextTypes;if(!t)return Xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function Zi(){F(xe),F(ve)}function Ds(e,n,t){if(ve.current!==Xn)throw Error(E(168));b(ve,n),b(xe,t)}function id(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(E(108,a0(e)||"Unknown",i));return q({},t,r)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xn,dt=ve.current,b(ve,e),b(xe,xe.current),!0}function Ms(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=id(e,n,dt),r.__reactInternalMemoizedMergedChildContext=e,F(xe),F(ve),b(ve,e)):F(xe),b(xe,t)}var fn=null,kl=!1,ao=!1;function ld(e){fn===null?fn=[e]:fn.push(e)}function T1(e){kl=!0,ld(e)}function Jn(){if(!ao&&fn!==null){ao=!0;var e=0,n=j;try{var t=fn;for(j=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}fn=null,kl=!1}catch(i){throw fn!==null&&(fn=fn.slice(e+1)),zf(Vu,Jn),i}finally{j=n,ao=!1}}return null}var zt=[],It=0,el=null,nl=0,je=[],be=0,pt=null,vn=1,mn="";function nt(e,n){zt[It++]=nl,zt[It++]=el,el=e,nl=n}function od(e,n,t){je[be++]=vn,je[be++]=mn,je[be++]=pt,pt=e;var r=vn;e=mn;var i=32-Xe(r)-1;r&=~(1<<i),t+=1;var l=32-Xe(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vn=1<<32-Xe(n)+i|t<<i|r,mn=l+e}else vn=1<<l|t<<i|r,mn=e}function Qu(e){e.return!==null&&(nt(e,1),od(e,1,0))}function Xu(e){for(;e===el;)el=zt[--It],zt[It]=null,nl=zt[--It],zt[It]=null;for(;e===pt;)pt=je[--be],je[be]=null,mn=je[--be],je[be]=null,vn=je[--be],je[be]=null}var Ie=null,ze=null,G=!1,Qe=null;function ud(e,n){var t=$e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function js(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ie=e,ze=Un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ie=e,ze=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=pt!==null?{id:vn,overflow:mn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=$e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ie=e,ze=null,!0):!1;default:return!1}}function iu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function lu(e){if(G){var n=ze;if(n){var t=n;if(!js(e,n)){if(iu(e))throw Error(E(418));n=Un(t.nextSibling);var r=Ie;n&&js(e,n)?ud(r,t):(e.flags=e.flags&-4097|2,G=!1,Ie=e)}}else{if(iu(e))throw Error(E(418));e.flags=e.flags&-4097|2,G=!1,Ie=e}}}function bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function vi(e){if(e!==Ie)return!1;if(!G)return bs(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!eu(e.type,e.memoizedProps)),n&&(n=ze)){if(iu(e))throw ad(),Error(E(418));for(;n;)ud(e,n),n=Un(n.nextSibling)}if(bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ze=Un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ze=null}}else ze=Ie?Un(e.stateNode.nextSibling):null;return!0}function ad(){for(var e=ze;e;)e=Un(e.nextSibling)}function Wt(){ze=Ie=null,G=!1}function Ku(e){Qe===null?Qe=[e]:Qe.push(e)}var C1=Sn.ReactCurrentBatchConfig;function We(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var tl=Zn(null),rl=null,Lt=null,Yu=null;function Zu(){Yu=Lt=rl=null}function Ju(e){var n=tl.current;F(tl),e._currentValue=n}function ou(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Vt(e,n){rl=e,Yu=Lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Se=!0),e.firstContext=null)}function Ge(e){var n=e._currentValue;if(Yu!==e)if(e={context:e,memoizedValue:n,next:null},Lt===null){if(rl===null)throw Error(E(308));Lt=e,rl.dependencies={lanes:0,firstContext:e}}else Lt=Lt.next=e;return n}var lt=null;function ea(e){lt===null?lt=[e]:lt.push(e)}function sd(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ea(n)):(t.next=i.next,i.next=t),n.interleaved=t,kn(e,r)}function kn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var In=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _n(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Bn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,kn(e,t)}return i=r.interleaved,i===null?(n.next=n,ea(r)):(n.next=i.next,i.next=n),r.interleaved=n,kn(e,t)}function Pi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,$u(e,t)}}function Vs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function il(e,n,t,r){var i=e.updateQueue;In=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==o&&(u===null?v.firstBaseUpdate=s:u.next=s,v.lastBaseUpdate=a))}if(l!==null){var m=i.baseState;o=0,v=s=a=null,u=l;do{var p=u.lane,h=u.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,w=u;switch(p=n,h=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(h,m,p);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(h,m,p):y,p==null)break e;m=q({},m,p);break e;case 2:In=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else h={eventTime:h,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(s=v=h,a=m):v=v.next=h,o|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(v===null&&(a=m),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);mt|=o,e.lanes=o,e.memoizedState=m}}function $s(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var fd=new sf.Component().refs;function uu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var El={isMounted:function(e){return(e=e._reactInternals)?yt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=_e(),i=Wn(e),l=_n(r,i);l.payload=n,t!=null&&(l.callback=t),n=Bn(e,l,i),n!==null&&(Ke(n,e,i,r),Pi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=_e(),i=Wn(e),l=_n(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Bn(e,l,i),n!==null&&(Ke(n,e,i,r),Pi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=_e(),r=Wn(e),i=_n(t,r);i.tag=2,n!=null&&(i.callback=n),n=Bn(e,i,r),n!==null&&(Ke(n,e,r,t),Pi(n,e,r))}};function Fs(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Or(t,r)||!Or(i,l):!0}function dd(e,n,t){var r=!1,i=Xn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ge(l):(i=Te(n)?dt:ve.current,r=n.contextTypes,l=(r=r!=null)?qt(e,i):Xn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=El,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Gs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&El.enqueueReplaceState(n,n.state,null)}function au(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=fd,na(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Ge(l):(l=Te(n)?dt:ve.current,i.context=qt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(uu(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&El.enqueueReplaceState(i,i.state,null),il(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;u===fd&&(u=i.refs={}),o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function mi(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Us(e){var n=e._init;return n(e._payload)}function pd(e){function n(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Hn(f,c),f.index=0,f.sibling=null,f}function l(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,d,g){return c===null||c.tag!==6?(c=ho(d,f.mode,g),c.return=f,c):(c=i(c,d),c.return=f,c)}function a(f,c,d,g){var S=d.type;return S===xt?v(f,c,d.props.children,g,d.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zn&&Us(S)===c.type)?(g=i(c,d.props),g.ref=lr(f,c,d),g.return=f,g):(g=Di(d.type,d.key,d.props,null,f.mode,g),g.ref=lr(f,c,d),g.return=f,g)}function s(f,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=_o(d,f.mode,g),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function v(f,c,d,g,S){return c===null||c.tag!==7?(c=ct(d,f.mode,g,S),c.return=f,c):(c=i(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ho(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ii:return d=Di(c.type,c.key,c.props,null,f.mode,d),d.ref=lr(f,null,c),d.return=f,d;case St:return c=_o(c,f.mode,d),c.return=f,c;case zn:var g=c._init;return m(f,g(c._payload),d)}if(sr(c)||er(c))return c=ct(c,f.mode,d,null),c.return=f,c;mi(f,c)}return null}function p(f,c,d,g){var S=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:u(f,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ii:return d.key===S?a(f,c,d,g):null;case St:return d.key===S?s(f,c,d,g):null;case zn:return S=d._init,p(f,c,S(d._payload),g)}if(sr(d)||er(d))return S!==null?null:v(f,c,d,g,null);mi(f,d)}return null}function h(f,c,d,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,u(c,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ii:return f=f.get(g.key===null?d:g.key)||null,a(c,f,g,S);case St:return f=f.get(g.key===null?d:g.key)||null,s(c,f,g,S);case zn:var T=g._init;return h(f,c,d,T(g._payload),S)}if(sr(g)||er(g))return f=f.get(d)||null,v(c,f,g,S,null);mi(c,g)}return null}function y(f,c,d,g){for(var S=null,T=null,k=c,_=c=0,I=null;k!==null&&_<d.length;_++){k.index>_?(I=k,k=null):I=k.sibling;var P=p(f,k,d[_],g);if(P===null){k===null&&(k=I);break}e&&k&&P.alternate===null&&n(f,k),c=l(P,c,_),T===null?S=P:T.sibling=P,T=P,k=I}if(_===d.length)return t(f,k),G&&nt(f,_),S;if(k===null){for(;_<d.length;_++)k=m(f,d[_],g),k!==null&&(c=l(k,c,_),T===null?S=k:T.sibling=k,T=k);return G&&nt(f,_),S}for(k=r(f,k);_<d.length;_++)I=h(k,f,_,d[_],g),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?_:I.key),c=l(I,c,_),T===null?S=I:T.sibling=I,T=I);return e&&k.forEach(function(W){return n(f,W)}),G&&nt(f,_),S}function w(f,c,d,g){var S=er(d);if(typeof S!="function")throw Error(E(150));if(d=S.call(d),d==null)throw Error(E(151));for(var T=S=null,k=c,_=c=0,I=null,P=d.next();k!==null&&!P.done;_++,P=d.next()){k.index>_?(I=k,k=null):I=k.sibling;var W=p(f,k,P.value,g);if(W===null){k===null&&(k=I);break}e&&k&&W.alternate===null&&n(f,k),c=l(W,c,_),T===null?S=W:T.sibling=W,T=W,k=I}if(P.done)return t(f,k),G&&nt(f,_),S;if(k===null){for(;!P.done;_++,P=d.next())P=m(f,P.value,g),P!==null&&(c=l(P,c,_),T===null?S=P:T.sibling=P,T=P);return G&&nt(f,_),S}for(k=r(f,k);!P.done;_++,P=d.next())P=h(k,f,_,P.value,g),P!==null&&(e&&P.alternate!==null&&k.delete(P.key===null?_:P.key),c=l(P,c,_),T===null?S=P:T.sibling=P,T=P);return e&&k.forEach(function(te){return n(f,te)}),G&&nt(f,_),S}function z(f,c,d,g){if(typeof d=="object"&&d!==null&&d.type===xt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ii:e:{for(var S=d.key,T=c;T!==null;){if(T.key===S){if(S=d.type,S===xt){if(T.tag===7){t(f,T.sibling),c=i(T,d.props.children),c.return=f,f=c;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zn&&Us(S)===T.type){t(f,T.sibling),c=i(T,d.props),c.ref=lr(f,T,d),c.return=f,f=c;break e}t(f,T);break}else n(f,T);T=T.sibling}d.type===xt?(c=ct(d.props.children,f.mode,g,d.key),c.return=f,f=c):(g=Di(d.type,d.key,d.props,null,f.mode,g),g.ref=lr(f,c,d),g.return=f,f=g)}return o(f);case St:e:{for(T=d.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=_o(d,f.mode,g),c.return=f,f=c}return o(f);case zn:return T=d._init,z(f,c,T(d._payload),g)}if(sr(d))return y(f,c,d,g);if(er(d))return w(f,c,d,g);mi(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(f,c.sibling),c=i(c,d),c.return=f,f=c):(t(f,c),c=ho(d,f.mode,g),c.return=f,f=c),o(f)):t(f,c)}return z}var Ht=pd(!0),vd=pd(!1),Xr={},on=Zn(Xr),jr=Zn(Xr),br=Zn(Xr);function ot(e){if(e===Xr)throw Error(E(174));return e}function ta(e,n){switch(b(br,n),b(jr,e),b(on,Xr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:$o(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=$o(n,e)}F(on),b(on,n)}function Qt(){F(on),F(jr),F(br)}function md(e){ot(br.current);var n=ot(on.current),t=$o(n,e.type);n!==t&&(b(jr,e),b(on,t))}function ra(e){jr.current===e&&(F(on),F(jr))}var U=Zn(0);function ll(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var so=[];function ia(){for(var e=0;e<so.length;e++)so[e]._workInProgressVersionPrimary=null;so.length=0}var zi=Sn.ReactCurrentDispatcher,co=Sn.ReactCurrentBatchConfig,vt=0,B=null,J=null,re=null,ol=!1,Er=!1,Vr=0,N1=0;function ce(){throw Error(E(321))}function la(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ye(e[t],n[t]))return!1;return!0}function oa(e,n,t,r,i,l){if(vt=l,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,zi.current=e===null||e.memoizedState===null?I1:L1,e=t(r,i),Er){l=0;do{if(Er=!1,Vr=0,25<=l)throw Error(E(301));l+=1,re=J=null,n.updateQueue=null,zi.current=O1,e=t(r,i)}while(Er)}if(zi.current=ul,n=J!==null&&J.next!==null,vt=0,re=J=B=null,ol=!1,n)throw Error(E(300));return e}function ua(){var e=Vr!==0;return Vr=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?B.memoizedState=re=e:re=re.next=e,re}function Ue(){if(J===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=re===null?B.memoizedState:re.next;if(n!==null)re=n,J=e;else{if(e===null)throw Error(E(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},re===null?B.memoizedState=re=e:re=re.next=e}return re}function $r(e,n){return typeof n=="function"?n(e):n}function fo(e){var n=Ue(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var v=s.lane;if((vt&v)===v)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:v,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=m,o=r):a=a.next=m,B.lanes|=v,mt|=v}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,Ye(r,n.memoizedState)||(Se=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,B.lanes|=l,mt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function po(e){var n=Ue(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ye(l,n.memoizedState)||(Se=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function hd(){}function _d(e,n){var t=B,r=Ue(),i=n(),l=!Ye(r.memoizedState,i);if(l&&(r.memoizedState=i,Se=!0),r=r.queue,aa(wd.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,Fr(9,yd.bind(null,t,r,i,n),void 0,null),ie===null)throw Error(E(349));vt&30||gd(t,n,i)}return i}function gd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function yd(e,n,t,r){n.value=t,n.getSnapshot=r,kd(n)&&Ed(e)}function wd(e,n,t){return t(function(){kd(n)&&Ed(e)})}function kd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ye(e,t)}catch{return!0}}function Ed(e){var n=kn(e,1);n!==null&&Ke(n,e,1,-1)}function Bs(e){var n=en();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},n.queue=e,e=e.dispatch=z1.bind(null,B,e),[n.memoizedState,e]}function Fr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Sd(){return Ue().memoizedState}function Ii(e,n,t,r){var i=en();B.flags|=e,i.memoizedState=Fr(1|n,t,void 0,r===void 0?null:r)}function Sl(e,n,t,r){var i=Ue();r=r===void 0?null:r;var l=void 0;if(J!==null){var o=J.memoizedState;if(l=o.destroy,r!==null&&la(r,o.deps)){i.memoizedState=Fr(n,t,l,r);return}}B.flags|=e,i.memoizedState=Fr(1|n,t,l,r)}function qs(e,n){return Ii(8390656,8,e,n)}function aa(e,n){return Sl(2048,8,e,n)}function xd(e,n){return Sl(4,2,e,n)}function Td(e,n){return Sl(4,4,e,n)}function Cd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Nd(e,n,t){return t=t!=null?t.concat([e]):null,Sl(4,4,Cd.bind(null,n,e),t)}function sa(){}function Ad(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&la(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Pd(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&la(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function zd(e,n,t){return vt&21?(Ye(t,n)||(t=Of(),B.lanes|=t,mt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=t)}function A1(e,n){var t=j;j=t!==0&&4>t?t:4,e(!0);var r=co.transition;co.transition={};try{e(!1),n()}finally{j=t,co.transition=r}}function Id(){return Ue().memoizedState}function P1(e,n,t){var r=Wn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ld(e))Od(n,t);else if(t=sd(e,n,t,r),t!==null){var i=_e();Ke(t,e,r,i),Rd(t,n,r)}}function z1(e,n,t){var r=Wn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ld(e))Od(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,Ye(u,o)){var a=n.interleaved;a===null?(i.next=i,ea(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=sd(e,n,i,r),t!==null&&(i=_e(),Ke(t,e,r,i),Rd(t,n,r))}}function Ld(e){var n=e.alternate;return e===B||n!==null&&n===B}function Od(e,n){Er=ol=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Rd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,$u(e,t)}}var ul={readContext:Ge,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},I1={readContext:Ge,useCallback:function(e,n){return en().memoizedState=[e,n===void 0?null:n],e},useContext:Ge,useEffect:qs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ii(4194308,4,Cd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ii(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ii(4,2,e,n)},useMemo:function(e,n){var t=en();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=en();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=P1.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=en();return e={current:e},n.memoizedState=e},useState:Bs,useDebugValue:sa,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=Bs(!1),n=e[0];return e=A1.bind(null,e[1]),en().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,i=en();if(G){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),ie===null)throw Error(E(349));vt&30||gd(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,qs(wd.bind(null,r,l,e),[e]),r.flags|=2048,Fr(9,yd.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=en(),n=ie.identifierPrefix;if(G){var t=mn,r=vn;t=(r&~(1<<32-Xe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Vr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=N1++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},L1={readContext:Ge,useCallback:Ad,useContext:Ge,useEffect:aa,useImperativeHandle:Nd,useInsertionEffect:xd,useLayoutEffect:Td,useMemo:Pd,useReducer:fo,useRef:Sd,useState:function(){return fo($r)},useDebugValue:sa,useDeferredValue:function(e){var n=Ue();return zd(n,J.memoizedState,e)},useTransition:function(){var e=fo($r)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:_d,useId:Id,unstable_isNewReconciler:!1},O1={readContext:Ge,useCallback:Ad,useContext:Ge,useEffect:aa,useImperativeHandle:Nd,useInsertionEffect:xd,useLayoutEffect:Td,useMemo:Pd,useReducer:po,useRef:Sd,useState:function(){return po($r)},useDebugValue:sa,useDeferredValue:function(e){var n=Ue();return J===null?n.memoizedState=e:zd(n,J.memoizedState,e)},useTransition:function(){var e=po($r)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:_d,useId:Id,unstable_isNewReconciler:!1};function Xt(e,n){try{var t="",r=n;do t+=u0(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function vo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function su(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var R1=typeof WeakMap=="function"?WeakMap:Map;function Dd(e,n,t){t=_n(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){sl||(sl=!0,yu=r),su(e,n)},t}function Md(e,n,t){t=_n(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){su(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){su(e,n),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Ws(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new R1;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Q1.bind(null,e,n,t),n.then(e,e))}function Hs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qs(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=_n(-1,1),n.tag=2,Bn(t,n,1))),t.lanes|=1),e)}var D1=Sn.ReactCurrentOwner,Se=!1;function he(e,n,t,r){n.child=e===null?vd(n,null,t,r):Ht(n,e.child,t,r)}function Xs(e,n,t,r,i){t=t.render;var l=n.ref;return Vt(n,i),r=oa(e,n,t,r,l,i),t=ua(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,En(e,n,i)):(G&&t&&Qu(n),n.flags|=1,he(e,n,r,i),n.child)}function Ks(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!_a(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,jd(e,n,l,r,i)):(e=Di(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Or,t(o,r)&&e.ref===n.ref)return En(e,n,i)}return n.flags|=1,e=Hn(l,r),e.ref=n.ref,e.return=n,n.child=e}function jd(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Or(l,r)&&e.ref===n.ref)if(Se=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return n.lanes=e.lanes,En(e,n,i)}return cu(e,n,t,r,i)}function bd(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(Rt,Ae),Ae|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,b(Rt,Ae),Ae|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,b(Rt,Ae),Ae|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,b(Rt,Ae),Ae|=r;return he(e,n,i,t),n.child}function Vd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function cu(e,n,t,r,i){var l=Te(t)?dt:ve.current;return l=qt(n,l),Vt(n,i),t=oa(e,n,t,r,l,i),r=ua(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,En(e,n,i)):(G&&r&&Qu(n),n.flags|=1,he(e,n,t,i),n.child)}function Ys(e,n,t,r,i){if(Te(t)){var l=!0;Ji(n)}else l=!1;if(Vt(n,i),n.stateNode===null)Li(e,n),dd(n,t,r),au(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var a=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=Ge(s):(s=Te(t)?dt:ve.current,s=qt(n,s));var v=t.getDerivedStateFromProps,m=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&Gs(n,o,r,s),In=!1;var p=n.memoizedState;o.state=p,il(n,r,o,i),a=n.memoizedState,u!==r||p!==a||xe.current||In?(typeof v=="function"&&(uu(n,t,v,r),a=n.memoizedState),(u=In||Fs(n,t,u,r,p,a,s))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,cd(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:We(n.type,u),o.props=s,m=n.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ge(a):(a=Te(t)?dt:ve.current,a=qt(n,a));var h=t.getDerivedStateFromProps;(v=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||p!==a)&&Gs(n,o,r,a),In=!1,p=n.memoizedState,o.state=p,il(n,r,o,i);var y=n.memoizedState;u!==m||p!==y||xe.current||In?(typeof h=="function"&&(uu(n,t,h,r),y=n.memoizedState),(s=In||Fs(n,t,s,r,p,y,a)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return fu(e,n,t,r,l,i)}function fu(e,n,t,r,i,l){Vd(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Ms(n,t,!1),En(e,n,l);r=n.stateNode,D1.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Ht(n,e.child,null,l),n.child=Ht(n,null,u,l)):he(e,n,u,l),n.memoizedState=r.state,i&&Ms(n,t,!0),n.child}function $d(e){var n=e.stateNode;n.pendingContext?Ds(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ds(e,n.context,!1),ta(e,n.containerInfo)}function Zs(e,n,t,r,i){return Wt(),Ku(i),n.flags|=256,he(e,n,t,r),n.child}var du={dehydrated:null,treeContext:null,retryLane:0};function pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fd(e,n,t){var r=n.pendingProps,i=U.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),b(U,i&1),e===null)return lu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Cl(o,r,0,null),e=ct(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=pu(t),n.memoizedState=du,e):ca(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return M1(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Hn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=Hn(u,l):(l=ct(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?pu(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=du,r}return l=e.child,e=l.sibling,r=Hn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ca(e,n){return n=Cl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function hi(e,n,t,r){return r!==null&&Ku(r),Ht(n,e.child,null,t),e=ca(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function M1(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=vo(Error(E(422))),hi(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Cl({mode:"visible",children:r.children},i,0,null),l=ct(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Ht(n,e.child,null,o),n.child.memoizedState=pu(o),n.memoizedState=du,l);if(!(n.mode&1))return hi(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(E(419)),r=vo(l,r,void 0),hi(e,n,o,r)}if(u=(o&e.childLanes)!==0,Se||u){if(r=ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,kn(e,i),Ke(r,e,i,-1))}return ha(),r=vo(Error(E(421))),hi(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=X1.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,ze=Un(i.nextSibling),Ie=n,G=!0,Qe=null,e!==null&&(je[be++]=vn,je[be++]=mn,je[be++]=pt,vn=e.id,mn=e.overflow,pt=n),n=ca(n,r.children),n.flags|=4096,n)}function Js(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ou(e.return,n,t)}function mo(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Gd(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(he(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Js(e,t,n);else if(e.tag===19)Js(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(U,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ll(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),mo(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ll(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}mo(n,!0,t,null,l);break;case"together":mo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Li(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function En(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),mt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=Hn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Hn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function j1(e,n,t){switch(n.tag){case 3:$d(n),Wt();break;case 5:md(n);break;case 1:Te(n.type)&&Ji(n);break;case 4:ta(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;b(tl,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(b(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Fd(e,n,t):(b(U,U.current&1),e=En(e,n,t),e!==null?e.sibling:null);b(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Gd(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),b(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,bd(e,n,t)}return En(e,n,t)}var Ud,vu,Bd,qd;Ud=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};vu=function(){};Bd=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,ot(on.current);var l=null;switch(t){case"input":i=Mo(e,i),r=Mo(e,r),l=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),l=[];break;case"textarea":i=Vo(e,i),r=Vo(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}Fo(t,r);var o;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Cr.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&$("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};qd=function(e,n,t,r){t!==r&&(n.flags|=4)};function or(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function b1(e,n,t){var r=n.pendingProps;switch(Xu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Te(n.type)&&Zi(),fe(n),null;case 3:return r=n.stateNode,Qt(),F(xe),F(ve),ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Qe!==null&&(Eu(Qe),Qe=null))),vu(e,n),fe(n),null;case 5:ra(n);var i=ot(br.current);if(t=n.type,e!==null&&n.stateNode!=null)Bd(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return fe(n),null}if(e=ot(on.current),vi(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[nn]=n,r[Mr]=l,e=(n.mode&1)!==0,t){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)$(fr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":as(r,l),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},$("invalid",r);break;case"textarea":cs(r,l),$("invalid",r)}Fo(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&pi(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&pi(r.textContent,u,e),i=["children",""+u]):Cr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&$("scroll",r)}switch(t){case"input":li(r),ss(r,l,!0);break;case"textarea":li(r),fs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Yi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gf(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[nn]=n,e[Mr]=r,Ud(e,n,!1,!1),n.stateNode=e;e:{switch(o=Go(t,r),t){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)$(fr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":as(e,r),i=Mo(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),$("invalid",e);break;case"textarea":cs(e,r),i=Vo(e,r),$("invalid",e);break;default:i=r}Fo(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?kf(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&yf(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Nr(e,a):typeof a=="number"&&Nr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Cr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&$("scroll",e):a!=null&&Ru(e,l,a,o))}switch(t){case"input":li(e),ss(e,r,!1);break;case"textarea":li(e),fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Dt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Dt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)qd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=ot(br.current),ot(on.current),vi(n)){if(r=n.stateNode,t=n.memoizedProps,r[nn]=n,(l=r.nodeValue!==t)&&(e=Ie,e!==null))switch(e.tag){case 3:pi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pi(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[nn]=n,n.stateNode=r}return fe(n),null;case 13:if(F(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&ze!==null&&n.mode&1&&!(n.flags&128))ad(),Wt(),n.flags|=98560,l=!1;else if(l=vi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(E(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(E(317));l[nn]=n}else Wt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),l=!1}else Qe!==null&&(Eu(Qe),Qe=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?ee===0&&(ee=3):ha())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Qt(),vu(e,n),e===null&&Rr(n.stateNode.containerInfo),fe(n),null;case 10:return Ju(n.type._context),fe(n),null;case 17:return Te(n.type)&&Zi(),fe(n),null;case 19:if(F(U),l=n.memoizedState,l===null)return fe(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)or(l,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=ll(e),o!==null){for(n.flags|=128,or(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return b(U,U.current&1|2),n.child}e=e.sibling}l.tail!==null&&X()>Kt&&(n.flags|=128,r=!0,or(l,!1),n.lanes=4194304)}else{if(!r)if(e=ll(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),or(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!G)return fe(n),null}else 2*X()-l.renderingStartTime>Kt&&t!==1073741824&&(n.flags|=128,r=!0,or(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=X(),n.sibling=null,t=U.current,b(U,r?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return ma(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ae&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function V1(e,n){switch(Xu(n),n.tag){case 1:return Te(n.type)&&Zi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qt(),F(xe),F(ve),ia(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ra(n),null;case 13:if(F(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));Wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(U),null;case 4:return Qt(),null;case 10:return Ju(n.type._context),null;case 22:case 23:return ma(),null;case 24:return null;default:return null}}var _i=!1,de=!1,$1=typeof WeakSet=="function"?WeakSet:Set,C=null;function Ot(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){H(e,n,r)}else t.current=null}function mu(e,n,t){try{t()}catch(r){H(e,n,r)}}var ec=!1;function F1(e,n){if(Zo=Qi,e=Xf(),Hu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,a=-1,s=0,v=0,m=e,p=null;n:for(;;){for(var h;m!==t||i!==0&&m.nodeType!==3||(u=o+i),m!==l||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(h=m.firstChild)!==null;)p=m,m=h;for(;;){if(m===e)break n;if(p===t&&++s===i&&(u=o),p===l&&++v===r&&(a=o),(h=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=h}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Jo={focusedElem:e,selectionRange:t},Qi=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,z=y.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:We(n.type,w),z);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(g){H(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return y=ec,ec=!1,y}function Sr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&mu(n,t,l)}i=i.next}while(i!==r)}}function xl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function hu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wd(e){var n=e.alternate;n!==null&&(e.alternate=null,Wd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[nn],delete n[Mr],delete n[tu],delete n[S1],delete n[x1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _u(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(_u(e,n,t),e=e.sibling;e!==null;)_u(e,n,t),e=e.sibling}function gu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gu(e,n,t),e=e.sibling;e!==null;)gu(e,n,t),e=e.sibling}var le=null,He=!1;function Nn(e,n,t){for(t=t.child;t!==null;)Qd(e,n,t),t=t.sibling}function Qd(e,n,t){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(hl,t)}catch{}switch(t.tag){case 5:de||Ot(t,n);case 6:var r=le,i=He;le=null,Nn(e,n,t),le=r,He=i,le!==null&&(He?(e=le,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):le.removeChild(t.stateNode));break;case 18:le!==null&&(He?(e=le,t=t.stateNode,e.nodeType===8?uo(e.parentNode,t):e.nodeType===1&&uo(e,t),Ir(e)):uo(le,t.stateNode));break;case 4:r=le,i=He,le=t.stateNode.containerInfo,He=!0,Nn(e,n,t),le=r,He=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&mu(t,n,o),i=i.next}while(i!==r)}Nn(e,n,t);break;case 1:if(!de&&(Ot(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){H(t,n,u)}Nn(e,n,t);break;case 21:Nn(e,n,t);break;case 22:t.mode&1?(de=(r=de)||t.memoizedState!==null,Nn(e,n,t),de=r):Nn(e,n,t);break;default:Nn(e,n,t)}}function tc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new $1),n.forEach(function(r){var i=K1.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function qe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:le=u.stateNode,He=!1;break e;case 3:le=u.stateNode.containerInfo,He=!0;break e;case 4:le=u.stateNode.containerInfo,He=!0;break e}u=u.return}if(le===null)throw Error(E(160));Qd(l,o,i),le=null,He=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){H(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Xd(n,e),n=n.sibling}function Xd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(n,e),Je(e),r&4){try{Sr(3,e,e.return),xl(3,e)}catch(w){H(e,e.return,w)}try{Sr(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:qe(n,e),Je(e),r&512&&t!==null&&Ot(t,t.return);break;case 5:if(qe(n,e),Je(e),r&512&&t!==null&&Ot(t,t.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(w){H(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&hf(i,l),Go(u,o);var s=Go(u,l);for(o=0;o<a.length;o+=2){var v=a[o],m=a[o+1];v==="style"?kf(i,m):v==="dangerouslySetInnerHTML"?yf(i,m):v==="children"?Nr(i,m):Ru(i,v,m,s)}switch(u){case"input":jo(i,l);break;case"textarea":_f(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?Dt(i,!!l.multiple,h,!1):p!==!!l.multiple&&(l.defaultValue!=null?Dt(i,!!l.multiple,l.defaultValue,!0):Dt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Mr]=l}catch(w){H(e,e.return,w)}}break;case 6:if(qe(n,e),Je(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){H(e,e.return,w)}}break;case 3:if(qe(n,e),Je(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ir(n.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:qe(n,e),Je(e);break;case 13:qe(n,e),Je(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(pa=X())),r&4&&tc(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(de=(s=de)||v,qe(n,e),de=s):qe(n,e),Je(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!v&&e.mode&1)for(C=e,v=e.child;v!==null;){for(m=C=v;C!==null;){switch(p=C,h=p.child,p.tag){case 0:case 11:case 14:case 15:Sr(4,p,p.return);break;case 1:Ot(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){H(r,t,w)}}break;case 5:Ot(p,p.return);break;case 22:if(p.memoizedState!==null){ic(m);continue}}h!==null?(h.return=p,C=h):ic(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{i=m.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=wf("display",o))}catch(w){H(e,e.return,w)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(w){H(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:qe(n,e),Je(e),r&4&&tc(e);break;case 21:break;default:qe(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Hd(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var l=nc(e);gu(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=nc(e);_u(e,u,o);break;default:throw Error(E(161))}}catch(a){H(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function G1(e,n,t){C=e,Kd(e)}function Kd(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_i;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||de;u=_i;var s=de;if(_i=o,(de=a)&&!s)for(C=i;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?lc(i):a!==null?(a.return=o,C=a):lc(i);for(;l!==null;)C=l,Kd(l),l=l.sibling;C=i,_i=u,de=s}rc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,C=l):rc(e)}}function rc(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:de||xl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!de)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&$s(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}$s(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var v=s.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Ir(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}de||n.flags&512&&hu(n)}catch(p){H(n,n.return,p)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function ic(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function lc(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{xl(4,n)}catch(a){H(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){H(n,i,a)}}var l=n.return;try{hu(n)}catch(a){H(n,l,a)}break;case 5:var o=n.return;try{hu(n)}catch(a){H(n,o,a)}}}catch(a){H(n,n.return,a)}if(n===e){C=null;break}var u=n.sibling;if(u!==null){u.return=n.return,C=u;break}C=n.return}}var U1=Math.ceil,al=Sn.ReactCurrentDispatcher,fa=Sn.ReactCurrentOwner,Fe=Sn.ReactCurrentBatchConfig,D=0,ie=null,K=null,ue=0,Ae=0,Rt=Zn(0),ee=0,Gr=null,mt=0,Tl=0,da=0,xr=null,Ee=null,pa=0,Kt=1/0,cn=null,sl=!1,yu=null,qn=null,gi=!1,Mn=null,cl=0,Tr=0,wu=null,Oi=-1,Ri=0;function _e(){return D&6?X():Oi!==-1?Oi:Oi=X()}function Wn(e){return e.mode&1?D&2&&ue!==0?ue&-ue:C1.transition!==null?(Ri===0&&(Ri=Of()),Ri):(e=j,e!==0||(e=window.event,e=e===void 0?16:$f(e.type)),e):1}function Ke(e,n,t,r){if(50<Tr)throw Tr=0,wu=null,Error(E(185));Wr(e,t,r),(!(D&2)||e!==ie)&&(e===ie&&(!(D&2)&&(Tl|=t),ee===4&&On(e,ue)),Ce(e,r),t===1&&D===0&&!(n.mode&1)&&(Kt=X()+500,kl&&Jn()))}function Ce(e,n){var t=e.callbackNode;C0(e,n);var r=Hi(e,e===ie?ue:0);if(r===0)t!==null&&vs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&vs(t),n===1)e.tag===0?T1(oc.bind(null,e)):ld(oc.bind(null,e)),k1(function(){!(D&6)&&Jn()}),t=null;else{switch(Rf(r)){case 1:t=Vu;break;case 4:t=If;break;case 16:t=Wi;break;case 536870912:t=Lf;break;default:t=Wi}t=ip(t,Yd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Yd(e,n){if(Oi=-1,Ri=0,D&6)throw Error(E(327));var t=e.callbackNode;if($t()&&e.callbackNode!==t)return null;var r=Hi(e,e===ie?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=fl(e,r);else{n=r;var i=D;D|=2;var l=Jd();(ie!==e||ue!==n)&&(cn=null,Kt=X()+500,st(e,n));do try{W1();break}catch(u){Zd(e,u)}while(1);Zu(),al.current=l,D=i,K!==null?n=0:(ie=null,ue=0,n=ee)}if(n!==0){if(n===2&&(i=Ho(e),i!==0&&(r=i,n=ku(e,i))),n===1)throw t=Gr,st(e,0),On(e,r),Ce(e,X()),t;if(n===6)On(e,r);else{if(i=e.current.alternate,!(r&30)&&!B1(i)&&(n=fl(e,r),n===2&&(l=Ho(e),l!==0&&(r=l,n=ku(e,l))),n===1))throw t=Gr,st(e,0),On(e,r),Ce(e,X()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:tt(e,Ee,cn);break;case 3:if(On(e,r),(r&130023424)===r&&(n=pa+500-X(),10<n)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nu(tt.bind(null,e,Ee,cn),n);break}tt(e,Ee,cn);break;case 4:if(On(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Xe(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U1(r/1960))-r,10<r){e.timeoutHandle=nu(tt.bind(null,e,Ee,cn),r);break}tt(e,Ee,cn);break;case 5:tt(e,Ee,cn);break;default:throw Error(E(329))}}}return Ce(e,X()),e.callbackNode===t?Yd.bind(null,e):null}function ku(e,n){var t=xr;return e.current.memoizedState.isDehydrated&&(st(e,n).flags|=256),e=fl(e,n),e!==2&&(n=Ee,Ee=t,n!==null&&Eu(n)),e}function Eu(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function B1(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Ye(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function On(e,n){for(n&=~da,n&=~Tl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Xe(n),r=1<<t;e[t]=-1,n&=~r}}function oc(e){if(D&6)throw Error(E(327));$t();var n=Hi(e,0);if(!(n&1))return Ce(e,X()),null;var t=fl(e,n);if(e.tag!==0&&t===2){var r=Ho(e);r!==0&&(n=r,t=ku(e,r))}if(t===1)throw t=Gr,st(e,0),On(e,n),Ce(e,X()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,tt(e,Ee,cn),Ce(e,X()),null}function va(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(Kt=X()+500,kl&&Jn())}}function ht(e){Mn!==null&&Mn.tag===0&&!(D&6)&&$t();var n=D;D|=1;var t=Fe.transition,r=j;try{if(Fe.transition=null,j=1,e)return e()}finally{j=r,Fe.transition=t,D=n,!(D&6)&&Jn()}}function ma(){Ae=Rt.current,F(Rt)}function st(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,w1(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(Xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zi();break;case 3:Qt(),F(xe),F(ve),ia();break;case 5:ra(r);break;case 4:Qt();break;case 13:F(U);break;case 19:F(U);break;case 10:Ju(r.type._context);break;case 22:case 23:ma()}t=t.return}if(ie=e,K=e=Hn(e.current,null),ue=Ae=n,ee=0,Gr=null,da=Tl=mt=0,Ee=xr=null,lt!==null){for(n=0;n<lt.length;n++)if(t=lt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}lt=null}return e}function Zd(e,n){do{var t=K;try{if(Zu(),zi.current=ul,ol){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ol=!1}if(vt=0,re=J=B=null,Er=!1,Vr=0,fa.current=null,t===null||t.return===null){ee=1,Gr=n,K=null;break}e:{var l=e,o=t.return,u=t,a=n;if(n=ue,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,v=u,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var h=Hs(o);if(h!==null){h.flags&=-257,Qs(h,o,u,l,n),h.mode&1&&Ws(l,s,n),n=h,a=s;var y=n.updateQueue;if(y===null){var w=new Set;w.add(a),n.updateQueue=w}else y.add(a);break e}else{if(!(n&1)){Ws(l,s,n),ha();break e}a=Error(E(426))}}else if(G&&u.mode&1){var z=Hs(o);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Qs(z,o,u,l,n),Ku(Xt(a,u));break e}}l=a=Xt(a,u),ee!==4&&(ee=2),xr===null?xr=[l]:xr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=Dd(l,a,n);Vs(l,f);break e;case 1:u=a;var c=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(qn===null||!qn.has(d)))){l.flags|=65536,n&=-n,l.lanes|=n;var g=Md(l,u,n);Vs(l,g);break e}}l=l.return}while(l!==null)}np(t)}catch(S){n=S,K===t&&t!==null&&(K=t=t.return);continue}break}while(1)}function Jd(){var e=al.current;return al.current=ul,e===null?ul:e}function ha(){(ee===0||ee===3||ee===2)&&(ee=4),ie===null||!(mt&268435455)&&!(Tl&268435455)||On(ie,ue)}function fl(e,n){var t=D;D|=2;var r=Jd();(ie!==e||ue!==n)&&(cn=null,st(e,n));do try{q1();break}catch(i){Zd(e,i)}while(1);if(Zu(),D=t,al.current=r,K!==null)throw Error(E(261));return ie=null,ue=0,ee}function q1(){for(;K!==null;)ep(K)}function W1(){for(;K!==null&&!_0();)ep(K)}function ep(e){var n=rp(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,n===null?np(e):K=n,fa.current=null}function np(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=V1(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,K=null;return}}else if(t=b1(t,n,Ae),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);ee===0&&(ee=5)}function tt(e,n,t){var r=j,i=Fe.transition;try{Fe.transition=null,j=1,H1(e,n,t,r)}finally{Fe.transition=i,j=r}return null}function H1(e,n,t,r){do $t();while(Mn!==null);if(D&6)throw Error(E(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(N0(e,l),e===ie&&(K=ie=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||gi||(gi=!0,ip(Wi,function(){return $t(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Fe.transition,Fe.transition=null;var o=j;j=1;var u=D;D|=4,fa.current=null,F1(e,t),Xd(t,e),p1(Jo),Qi=!!Zo,Jo=Zo=null,e.current=t,G1(t),g0(),D=u,j=o,Fe.transition=l}else e.current=t;if(gi&&(gi=!1,Mn=e,cl=i),l=e.pendingLanes,l===0&&(qn=null),k0(t.stateNode),Ce(e,X()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(sl)throw sl=!1,e=yu,yu=null,e;return cl&1&&e.tag!==0&&$t(),l=e.pendingLanes,l&1?e===wu?Tr++:(Tr=0,wu=e):Tr=0,Jn(),null}function $t(){if(Mn!==null){var e=Rf(cl),n=Fe.transition,t=j;try{if(Fe.transition=null,j=16>e?16:e,Mn===null)var r=!1;else{if(e=Mn,Mn=null,cl=0,D&6)throw Error(E(331));var i=D;for(D|=4,C=e.current;C!==null;){var l=C,o=l.child;if(C.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(C=s;C!==null;){var v=C;switch(v.tag){case 0:case 11:case 15:Sr(8,v,l)}var m=v.child;if(m!==null)m.return=v,C=m;else for(;C!==null;){v=C;var p=v.sibling,h=v.return;if(Wd(v),v===s){C=null;break}if(p!==null){p.return=h,C=p;break}C=h}}}var y=l.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}C=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,C=o;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Sr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,C=f;break e}C=l.return}}var c=e.current;for(C=c;C!==null;){o=C;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,C=d;else e:for(o=c;C!==null;){if(u=C,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:xl(9,u)}}catch(S){H(u,u.return,S)}if(u===o){C=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,C=g;break e}C=u.return}}if(D=i,Jn(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(hl,e)}catch{}r=!0}return r}finally{j=t,Fe.transition=n}}return!1}function uc(e,n,t){n=Xt(t,n),n=Dd(e,n,1),e=Bn(e,n,1),n=_e(),e!==null&&(Wr(e,1,n),Ce(e,n))}function H(e,n,t){if(e.tag===3)uc(e,e,t);else for(;n!==null;){if(n.tag===3){uc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){e=Xt(t,e),e=Md(n,e,1),n=Bn(n,e,1),e=_e(),n!==null&&(Wr(n,1,e),Ce(n,e));break}}n=n.return}}function Q1(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=_e(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(ue&t)===t&&(ee===4||ee===3&&(ue&130023424)===ue&&500>X()-pa?st(e,0):da|=t),Ce(e,n)}function tp(e,n){n===0&&(e.mode&1?(n=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):n=1);var t=_e();e=kn(e,n),e!==null&&(Wr(e,n,t),Ce(e,t))}function X1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),tp(e,t)}function K1(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),tp(e,t)}var rp;rp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||xe.current)Se=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Se=!1,j1(e,n,t);Se=!!(e.flags&131072)}else Se=!1,G&&n.flags&1048576&&od(n,nl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Li(e,n),e=n.pendingProps;var i=qt(n,ve.current);Vt(n,t),i=oa(null,n,r,e,i,t);var l=ua();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Te(r)?(l=!0,Ji(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,na(n),i.updater=El,n.stateNode=i,i._reactInternals=n,au(n,r,e,t),n=fu(null,n,r,!0,l,t)):(n.tag=0,G&&l&&Qu(n),he(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Li(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Z1(r),e=We(r,e),i){case 0:n=cu(null,n,r,e,t);break e;case 1:n=Ys(null,n,r,e,t);break e;case 11:n=Xs(null,n,r,e,t);break e;case 14:n=Ks(null,n,r,We(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),cu(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Ys(e,n,r,i,t);case 3:e:{if($d(n),e===null)throw Error(E(387));r=n.pendingProps,l=n.memoizedState,i=l.element,cd(e,n),il(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Xt(Error(E(423)),n),n=Zs(e,n,r,t,i);break e}else if(r!==i){i=Xt(Error(E(424)),n),n=Zs(e,n,r,t,i);break e}else for(ze=Un(n.stateNode.containerInfo.firstChild),Ie=n,G=!0,Qe=null,t=vd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Wt(),r===i){n=En(e,n,t);break e}he(e,n,r,t)}n=n.child}return n;case 5:return md(n),e===null&&lu(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,eu(r,i)?o=null:l!==null&&eu(r,l)&&(n.flags|=32),Vd(e,n),he(e,n,o,t),n.child;case 6:return e===null&&lu(n),null;case 13:return Fd(e,n,t);case 4:return ta(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ht(n,null,r,t):he(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Xs(e,n,r,i,t);case 7:return he(e,n,n.pendingProps,t),n.child;case 8:return he(e,n,n.pendingProps.children,t),n.child;case 12:return he(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,b(tl,r._currentValue),r._currentValue=o,l!==null)if(Ye(l.value,o)){if(l.children===i.children&&!xe.current){n=En(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=_n(-1,t&-t),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var v=s.pending;v===null?a.next=a:(a.next=v.next,v.next=a),s.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),ou(l.return,t,n),u.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(E(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),ou(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}he(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Vt(n,t),i=Ge(i),r=r(i),n.flags|=1,he(e,n,r,t),n.child;case 14:return r=n.type,i=We(r,n.pendingProps),i=We(r.type,i),Ks(e,n,r,i,t);case 15:return jd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Li(e,n),n.tag=1,Te(r)?(e=!0,Ji(n)):e=!1,Vt(n,t),dd(n,r,i),au(n,r,i,t),fu(null,n,r,!0,e,t);case 19:return Gd(e,n,t);case 22:return bd(e,n,t)}throw Error(E(156,n.tag))};function ip(e,n){return zf(e,n)}function Y1(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,n,t,r){return new Y1(e,n,t,r)}function _a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Z1(e){if(typeof e=="function")return _a(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mu)return 11;if(e===ju)return 14}return 2}function Hn(e,n){var t=e.alternate;return t===null?(t=$e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Di(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")_a(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case xt:return ct(t.children,i,l,n);case Du:o=8,i|=8;break;case Lo:return e=$e(12,t,n,i|2),e.elementType=Lo,e.lanes=l,e;case Oo:return e=$e(13,t,n,i),e.elementType=Oo,e.lanes=l,e;case Ro:return e=$e(19,t,n,i),e.elementType=Ro,e.lanes=l,e;case pf:return Cl(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ff:o=10;break e;case df:o=9;break e;case Mu:o=11;break e;case ju:o=14;break e;case zn:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=$e(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function ct(e,n,t,r){return e=$e(7,e,r,n),e.lanes=t,e}function Cl(e,n,t,r){return e=$e(22,e,r,n),e.elementType=pf,e.lanes=t,e.stateNode={isHidden:!1},e}function ho(e,n,t){return e=$e(6,e,null,n),e.lanes=t,e}function _o(e,n,t){return n=$e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function J1(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ga(e,n,t,r,i,l,o,u,a){return e=new J1(e,n,t,u,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=$e(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},na(l),e}function e_(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:St,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function lp(e){if(!e)return Xn;e=e._reactInternals;e:{if(yt(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Te(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(Te(t))return id(e,t,n)}return n}function op(e,n,t,r,i,l,o,u,a){return e=ga(t,r,!0,e,i,l,o,u,a),e.context=lp(null),t=e.current,r=_e(),i=Wn(t),l=_n(r,i),l.callback=n??null,Bn(t,l,i),e.current.lanes=i,Wr(e,i,r),Ce(e,r),e}function Nl(e,n,t,r){var i=n.current,l=_e(),o=Wn(i);return t=lp(t),n.context===null?n.context=t:n.pendingContext=t,n=_n(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Bn(i,n,o),e!==null&&(Ke(e,i,o,l),Pi(e,i,o)),o}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ya(e,n){ac(e,n),(e=e.alternate)&&ac(e,n)}function n_(){return null}var up=typeof reportError=="function"?reportError:function(e){console.error(e)};function wa(e){this._internalRoot=e}Al.prototype.render=wa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));Nl(e,n,null,null)};Al.prototype.unmount=wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ht(function(){Nl(null,e,null,null)}),n[wn]=null}};function Al(e){this._internalRoot=e}Al.prototype.unstable_scheduleHydration=function(e){if(e){var n=jf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ln.length&&n!==0&&n<Ln[t].priority;t++);Ln.splice(t,0,e),t===0&&Vf(e)}};function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sc(){}function t_(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=dl(o);l.call(s)}}var o=op(n,r,e,0,null,!1,!1,"",sc);return e._reactRootContainer=o,e[wn]=o.current,Rr(e.nodeType===8?e.parentNode:e),ht(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=dl(a);u.call(s)}}var a=ga(e,0,!1,null,null,!1,!1,"",sc);return e._reactRootContainer=a,e[wn]=a.current,Rr(e.nodeType===8?e.parentNode:e),ht(function(){Nl(n,a,t,r)}),a}function zl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=dl(o);u.call(a)}}Nl(n,o,e,i)}else o=t_(t,n,e,i,r);return dl(o)}Df=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=cr(n.pendingLanes);t!==0&&($u(n,t|1),Ce(n,X()),!(D&6)&&(Kt=X()+500,Jn()))}break;case 13:ht(function(){var r=kn(e,1);if(r!==null){var i=_e();Ke(r,e,1,i)}}),ya(e,1)}};Fu=function(e){if(e.tag===13){var n=kn(e,134217728);if(n!==null){var t=_e();Ke(n,e,134217728,t)}ya(e,134217728)}};Mf=function(e){if(e.tag===13){var n=Wn(e),t=kn(e,n);if(t!==null){var r=_e();Ke(t,e,n,r)}ya(e,n)}};jf=function(){return j};bf=function(e,n){var t=j;try{return j=e,n()}finally{j=t}};Bo=function(e,n,t){switch(n){case"input":if(jo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=wl(r);if(!i)throw Error(E(90));mf(r),jo(r,i)}}}break;case"textarea":_f(e,t);break;case"select":n=t.value,n!=null&&Dt(e,!!t.multiple,n,!1)}};xf=va;Tf=ht;var r_={usingClientEntryPoint:!1,Events:[Qr,At,wl,Ef,Sf,va]},ur={findFiberByHostInstance:it,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},i_={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Af(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||n_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yi.isDisabled&&yi.supportsFiber)try{hl=yi.inject(i_),ln=yi}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r_;Oe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ka(n))throw Error(E(200));return e_(e,n,null,t)};Oe.createRoot=function(e,n){if(!ka(e))throw Error(E(299));var t=!1,r="",i=up;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=ga(e,1,!1,null,null,t,!1,r,i),e[wn]=n.current,Rr(e.nodeType===8?e.parentNode:e),new wa(n)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Af(n),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return ht(e)};Oe.hydrate=function(e,n,t){if(!Pl(n))throw Error(E(200));return zl(null,e,n,!0,t)};Oe.hydrateRoot=function(e,n,t){if(!ka(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=up;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=op(n,null,e,1,t??null,i,!1,l,o),e[wn]=n.current,Rr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Al(n)};Oe.render=function(e,n,t){if(!Pl(n))throw Error(E(200));return zl(null,e,n,!1,t)};Oe.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(E(40));return e._reactRootContainer?(ht(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};Oe.unstable_batchedUpdates=va;Oe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Pl(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return zl(e,n,t,!1,r)};Oe.version="18.2.0-next-9e3b772b8-20220608";function ap(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ap)}catch(e){console.error(e)}}ap(),of.exports=Oe;var l_=of.exports,sp,cc=l_;sp=cc.createRoot,cc.hydrateRoot;sp(n0(Kp(document.querySelector("#root")))).render(A.jsx(Ft.StrictMode,{children:A.jsx(e0,{})}));
