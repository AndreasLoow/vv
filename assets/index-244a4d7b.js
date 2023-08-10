(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Fc={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),iv=Symbol.for("react.portal"),ov=Symbol.for("react.fragment"),lv=Symbol.for("react.strict_mode"),av=Symbol.for("react.profiler"),uv=Symbol.for("react.provider"),sv=Symbol.for("react.context"),cv=Symbol.for("react.forward_ref"),dv=Symbol.for("react.suspense"),fv=Symbol.for("react.memo"),pv=Symbol.for("react.lazy"),Yu=Symbol.iterator;function vv(e){return e===null||typeof e!="object"?null:(e=Yu&&e[Yu]||e["@@iterator"],typeof e=="function"?e:null)}var Gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qc=Object.assign,Uc={};function Yt(e,n,t){this.props=e,this.context=n,this.refs=Uc,this.updater=t||Gc}Yt.prototype.isReactComponent={};Yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bc(){}Bc.prototype=Yt.prototype;function Ua(e,n,t){this.props=e,this.context=n,this.refs=Uc,this.updater=t||Gc}var Ba=Ua.prototype=new Bc;Ba.constructor=Ua;qc(Ba,Yt.prototype);Ba.isPureReactComponent=!0;var Zu=Array.isArray,Wc=Object.prototype.hasOwnProperty,Wa={current:null},Hc={key:!0,ref:!0,__self:!0,__source:!0};function Qc(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Wc.call(n,r)&&!Hc.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qr,type:e,key:o,ref:l,props:i,_owner:Wa.current}}function mv(e,n){return{$$typeof:Qr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ha(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function hv(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ju=/\/+/g;function el(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hv(""+e.key):n.toString(36)}function Ni(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qr:case iv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+el(l,0):r,Zu(i)?(t="",e!=null&&(t=e.replace(Ju,"$&/")+"/"),Ni(i,n,t,"",function(s){return s})):i!=null&&(Ha(i)&&(i=mv(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ju,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",Zu(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+el(o,a);l+=Ni(o,n,t,u,i)}else if(u=vv(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+el(o,a++),l+=Ni(o,n,t,u,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function oi(e,n,t){if(e==null)return e;var r=[],i=0;return Ni(e,r,"","",function(o){return n.call(t,o,i++)}),r}function _v(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Ci={transition:null},gv={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:Wa};R.Children={map:oi,forEach:function(e,n,t){oi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return oi(e,function(){n++}),n},toArray:function(e){return oi(e,function(n){return n})||[]},only:function(e){if(!Ha(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Yt;R.Fragment=ov;R.Profiler=av;R.PureComponent=Ua;R.StrictMode=lv;R.Suspense=dv;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qc({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Wa.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Wc.call(n,u)&&!Hc.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:Qr,type:e.type,key:i,ref:o,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:sv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uv,_context:e},e.Consumer=e};R.createElement=Qc;R.createFactory=function(e){var n=Qc.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:cv,render:e}};R.isValidElement=Ha;R.lazy=function(e){return{$$typeof:pv,_payload:{_status:-1,_result:e},_init:_v}};R.memo=function(e,n){return{$$typeof:fv,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=n}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,n){return ye.current.useCallback(e,n)};R.useContext=function(e){return ye.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};R.useEffect=function(e,n){return ye.current.useEffect(e,n)};R.useId=function(){return ye.current.useId()};R.useImperativeHandle=function(e,n,t){return ye.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return ye.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return ye.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return ye.current.useMemo(e,n)};R.useReducer=function(e,n,t){return ye.current.useReducer(e,n,t)};R.useRef=function(e){return ye.current.useRef(e)};R.useState=function(e){return ye.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return ye.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return ye.current.useTransition()};R.version="18.2.0";Fc.exports=R;var Gt=Fc.exports;function yv(e,n){return e<n?-1:e===n?0:1}function wv(e,n){return e?n?0:1:n?-1:0}function kv(e,n){return e===n?0:e<n?-1:e>n||e===e?1:n===n?-1:0}function Xc(e,n){return e===n?0:e<n?-1:1}function Kc(e,n){return e<n?e:n}function Ev(e,n){return e>n?e:n}var Ui=function(e,n){for(var t in e)n(t)};function mr(e,n){if(e===n)return 0;var t=typeof e,r=typeof n;switch(t){case"boolean":if(r==="boolean")return wv(e,n);break;case"function":if(r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"compare: functional value",Error:new Error};break;case"number":if(r==="number")return kv(e,n);break;case"string":return r==="string"?Xc(e,n):1;case"undefined":return-1}switch(r){case"string":return-1;case"undefined":return 1;default:if(t==="boolean")return 1;if(r==="boolean")return-1;if(t==="function")return 1;if(r==="function")return-1;if(t==="number")return n===null||n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(r==="number")return e===null||e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e===null)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(n===null)return e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e.BS_PRIVATE_NESTED_SOME_NONE!==void 0)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?es(e,n):-1;var i=e.TAG|0,o=n.TAG|0;if(i===248)return yv(e[1],n[1]);if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return i<o?-1:1;var l=e.length|0,a=n.length|0;if(l===a)if(Array.isArray(e))for(var u=0;;){var s=u;if(s===l)return 0;var v=mr(e[s],n[s]);if(v!==0)return v;u=s+1|0}else return e instanceof Date&&n instanceof Date?e-n:es(e,n);else if(l<a)for(var m=0;;){var p=m;if(p===l)return-1;var h=mr(e[p],n[p]);if(h!==0)return h;m=p+1|0}else for(var _=0;;){var y=_;if(y===a)return 1;var C=mr(e[y],n[y]);if(C!==0)return C;_=y+1|0}}}function es(e,n){var t={contents:void 0},r={contents:void 0},i=function(m,p){var h=m[2],_=m[1];if(!Object.prototype.hasOwnProperty.call(_,p)||mr(m[0][p],_[p])>0){var y=h.contents;if(!(y!==void 0&&p>=y)){h.contents=p;return}}},o=[e,n,r],l=function(m){return i(o,m)},a=[n,e,t],u=function(m){return i(a,m)};Ui(e,l),Ui(n,u);var s=t.contents,v=r.contents;return s!==void 0?v!==void 0?Xc(s,v):-1:v!==void 0?1:0}function q(e,n){if(e===n)return!0;var t=typeof e;if(t==="string"||t==="number"||t==="boolean"||t==="undefined"||e===null)return!1;var r=typeof n;if(t==="function"||r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if(r==="number"||r==="undefined"||n===null)return!1;var i=e.TAG|0,o=n.TAG|0;if(i===248)return e[1]===n[1];if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return!1;var l=e.length|0,a=n.length|0;if(l===a)if(Array.isArray(e))for(var u=0;;){var s=u;if(s===l)return!0;if(!q(e[s],n[s]))return!1;u=s+1|0}else{if(e instanceof Date&&n instanceof Date)return!(e>n||e<n);var v={contents:!0},m=function(h){if(!Object.prototype.hasOwnProperty.call(n,h)){v.contents=!1;return}},p=function(h){if(!Object.prototype.hasOwnProperty.call(e,h)||!q(n[h],e[h])){v.contents=!1;return}};return Ui(e,m),v.contents&&Ui(n,p),v.contents}else return!1}function Yc(e,n){return typeof e=="number"&&typeof n=="number"?e!==n:!q(e,n)}function xv(e,n){return typeof e=="number"&&typeof n=="number"?e>=n:mr(e,n)>=0}function Zc(e){switch(e){case 0:return"1";case 1:return"0";case 2:return"x";case 3:return"z"}}function Sv(e){return e===0}function bv(e){return e===1}function Tv(e,n){return e===n?e:e===3?n:n===3?e:2}function Nv(e,n){switch(e){case 0:return n>=3?0:n;case 1:return 1;case 2:return n!==1?2:1;case 3:return n}}function Cv(e,n){switch(e){case 0:return 0;case 1:return n>=3?1:n;case 2:return n!==0?2:0;case 3:return n}}function Av(e){return e!==1?e!==0?2:1:0}function ns(e,n){return e!==1?e!==0?n!==1?2:1:n!==1?n!==0?2:0:n!==1?2:1:1}function ts(e,n){return e!==1?e!==0&&n!==0?2:0:n!==1?n!==0||n!==0?2:0:1}function Pv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function Iv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function zv(e,n){return e!==1?e!==0||n!==0?2:0:n!==1?2:1}function Dv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:0:1:n!==1?n!==0?2:1:0}function Rv(e,n){return e!==1?e!==0?2:n!==1?n!==0?2:1:0:n!==1?n!==0?2:0:1}function Mv(e,n){return q(e,n)?0:1}function Lv(e,n){return e!==n?0:1}var nl=0,rs=1,Ov=2,Vv=3;function is(e,n,t){for(var r=new Array(t),i=0,o=n;i<t;)r[i]=e[o],i=i+1|0,o=o+1|0;return r}function Bi(e,n){for(;;){var t=n,r=e,i=r.length,o=i===0?1:i,l=t.length,a=o-l|0;if(a===0)return r.apply(null,t);if(a>=0)return function(u,s){return function(v){return Bi(u,s.concat([v]))}}(r,t);n=is(t,o,-a|0),e=r.apply(null,is(t,0,o))}}function on(e,n){var t=e.length;if(t===1)return e(n);switch(t){case 1:return e(n);case 2:return function(r){return e(n,r)};case 3:return function(r,i){return e(n,r,i)};case 4:return function(r,i,o){return e(n,r,i,o)};case 5:return function(r,i,o,l){return e(n,r,i,o,l)};case 6:return function(r,i,o,l,a){return e(n,r,i,o,l,a)};case 7:return function(r,i,o,l,a,u){return e(n,r,i,o,l,a,u)};default:return Bi(e,[n])}}function Xn(e){var n=e.length;return n===1?e:function(t){return on(e,t)}}function Jc(e,n,t){var r=e.length;if(r===2)return e(n,t);switch(r){case 1:return Bi(e(n),[t]);case 2:return e(n,t);case 3:return function(i){return e(n,t,i)};case 4:return function(i,o){return e(n,t,i,o)};case 5:return function(i,o,l){return e(n,t,i,o,l)};case 6:return function(i,o,l,a){return e(n,t,i,o,l,a)};case 7:return function(i,o,l,a,u){return e(n,t,i,o,l,a,u)};default:return Bi(e,[n,t])}}function Xr(e){var n=e.length;return n===2?e:function(t,r){return Jc(e,t,r)}}function ht(e){return e===void 0?{BS_PRIVATE_NESTED_SOME_NONE:0}:e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function $v(e){if(e!=null)return ht(e)}function jv(e){if(e!==void 0)return ht(e)}function Zt(e){if(!(e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;if(n!==0)return{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}var Fv=function(e,n,t){var r,i;i=t.length;var o=[];for(r=0;r<i-1;++r)o.push(t[r]);var l=t[i-1];for(r=0;r<l.length;++r)o.push(l[r]);return e[n].apply(e,o)};function os(e,n){return n.push(e)}function Qa(e,n){return Fv(n,"concat",[e])}function Xa(e,n){return n.join(e)}function Wi(e,n,t){return t.slice(e,n)}function ut(e,n){return n.filter(Xn(e))}function Gv(e,n){return jv(n.find(Xn(e)))}function ed(e,n){return n.findIndex(Xn(e))}function Cr(e,n){n.forEach(Xn(e))}function te(e,n){return n.map(Xn(e))}function pn(e,n){return n.map(Xr(e))}function ze(e,n,t){return t.reduce(Xr(e),n)}function qv(e,n){return n.some(Xn(e))}function nd(e){if(e!==void 0)return Zt(e);throw new Error("getExn")}function I(e,n){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",35,2],Error:new Error};return e[n]}function ee(e,n,t){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",45,2],Error:new Error};e[n]=t}function Uv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(e[i]);return r}function gn(e,n){return Uv(e,Xn(n))}function Bv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(i,e[i]);return r}function tl(e,n){return Bv(e,Xr(n))}function Wv(e,n,t){for(var r=n,i=0,o=e.length;i<o;++i)r=t(r,e[i]);return r}function Hv(e,n,t){return Wv(e,n,Xr(t))}function Qv(e,n,t,r,i){for(;;){var o=t;if(o===i)return!0;if(!r(e[o],n[o]))return!1;t=o+1|0}}function Xv(e,n,t){return Qv(e,n,0,t,Kc(e.length,n.length))}function Kv(e,n,t){return Xv(e,n,Xr(t))}function Yv(e){for(var n=e.length,t=new Array(n),r=new Array(n),i=0;i<n;++i){var o=e[i];t[i]=o[0],r[i]=o[1]}return[t,r]}function Zv(e,n,t,r,i){for(;;){var o=t,l=n;if(o>=r)return o;var a=e[o];if(!i(a,l))return o;t=o+1|0,n=a}}function Jv(e,n){var t=e.length;if(t===0||t===1)return t;var r=e[0],i=e[1];if(n(r,i))for(var o=i,l=2;;){var a=l,u=o;if(a>=t)return a;var s=e[a];if(!n(u,s))return a;l=a+1|0,o=s}else return n(i,r)?-Zv(e,i,2,t,n)|0:1}function Ce(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t}}function Ge(e){return{v:e,h:1,l:void 0,r:void 0}}function Hi(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function cn(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;if(r>(i+2|0)){var o=e.l,l=e.r;return Hi(o,l)?Ce(o,e.v,Ce(l,n,t)):Ce(Ce(o,e.v,l.l),l.v,Ce(l.r,n,t))}if(i<=(r+2|0))return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t};var a=t.l,u=t.r;return Hi(u,a)?Ce(Ce(e,n,a),t.v,u):Ce(Ce(e,n,a.l),a.v,Ce(a.r,t.v,u))}function td(e,n){var t=e.l;return t!==void 0?cn(td(t,n),e.v,e.r):(n.contents=e.v,e.r)}function rd(e,n){return e!==void 0?cn(rd(e.l,n),e.v,e.r):Ge(n)}function id(e,n){return e!==void 0?cn(e.l,e.v,id(e.r,n)):Ge(n)}function qt(e,n,t){if(e===void 0)return rd(t,n);if(t===void 0)return id(e,n);var r=e.h,i=t.h;return r>(i+2|0)?cn(e.l,e.v,qt(e.r,n,t)):i>(r+2|0)?cn(qt(e,n,t.l),t.v,t.r):Ce(e,n,t)}function Ol(e){var n=e.l,t=e.r,r=n!==void 0?Ol(n):0,i=t!==void 0?Ol(t):0;return(1+r|0)+i|0}function od(e,n,t){for(;;){var r=n,i=e,o=i.v,l=i.l,a=i.r,u=l!==void 0?od(l,r,t):r;t[u]=o;var s=u+1|0;if(a===void 0)return s;n=s,e=a}}function em(e){if(e===void 0)return[];var n=Ol(e),t=new Array(n);return od(e,0,t),t}function Vl(e,n,t){switch(t){case 0:return;case 1:return Ge(e[n]);case 2:var r=e[n],i=e[n-1|0];return{v:i,h:2,l:Ge(r),r:void 0};case 3:var o=e[n],l=e[n-1|0],a=e[n-2|0];return{v:l,h:2,l:Ge(o),r:Ge(a)};default:var u=t/2|0,s=Vl(e,n,u),v=e[n-u|0],m=Vl(e,(n-u|0)-1|0,(t-u|0)-1|0);return Ce(s,v,m)}}function $l(e,n,t){switch(t){case 0:return;case 1:return Ge(e[n]);case 2:var r=e[n],i=e[n+1|0];return{v:i,h:2,l:Ge(r),r:void 0};case 3:var o=e[n],l=e[n+1|0],a=e[n+2|0];return{v:l,h:2,l:Ge(o),r:Ge(a)};default:var u=t/2|0,s=$l(e,n,u),v=e[n+u|0],m=$l(e,(n+u|0)+1|0,(t-u|0)-1|0);return Ce(s,v,m)}}function Ka(e){var n=e.l;e.l=n.r,n.r=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.l,a=l!==void 0?l.h:0,u=e.h;return n.h=(a>u?a:u)+1|0,n}function Ya(e){var n=e.r;e.r=n.l,n.l=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.r,a=l!==void 0?l.h:0,u=e.h;return n.h=(a>u?a:u)+1|0,n}function nm(e){var n=e.l,t=Ya(n);return e.l=t,Ka(e)}function tm(e){var n=e.r,t=Ka(n);return e.r=t,Ya(e)}function li(e){var n=e.l,t=n!==void 0?n.h:0,r=e.r,i=r!==void 0?r.h:0;return e.h=(t>i?t:i)+1|0,e}function rm(e){var n=e.l,t=e.r,r=n!==void 0?n.h:0,i=t!==void 0?t.h:0;if(r>(2+i|0)){var o=n.l,l=n.r;return Hi(o,l)?li(Ka(e)):li(nm(e))}if(i>(2+r|0)){var a=t.l,u=t.r;return Hi(u,a)?li(Ya(e)):li(tm(e))}return e.h=(r>i?r:i)+1|0,e}function im(e,n,t,r){for(;;){var i=t,o=n;if(i>=r)return i;var l=e[i];if(o<=l)return i;t=i+1|0,n=l}}function om(e){var n=e.length;if(n===0||n===1)return n;var t=e[0],r=e[1];if(t<r)for(var i=r,o=2;;){var l=o,a=i;if(l>=n)return l;var u=e[l];if(a>=u)return l;o=l+1|0,i=u}else return t>r?-im(e,r,2,n)|0:1}function jl(e,n){if(e===void 0)return Ge(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;return n<t?e.l=jl(r,n):e.r=jl(i,n),rm(e)}function lm(e){var n=e.length;if(n!==0){var t=om(e),r;t>=0?r=$l(e,0,t):(t=-t|0,r=Vl(e,t-1|0,t));for(var i=t;i<n;++i)r=jl(r,e[i]);return r}}function Qi(e,n){if(e===void 0)return Ge(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;if(n<t){var o=Qi(r,n);return o===r?e:cn(o,t,i)}var l=Qi(i,n);return l===i?e:cn(r,t,l)}function Fl(e,n){if(e===void 0)return e;var t=e.v,r=e.l,i=e.r;if(n===t){if(r===void 0)return i;if(i===void 0)return r;var o={contents:i.v},l=td(i,o);return cn(r,o.contents,l)}if(n<t){var a=Fl(r,n);return a===r?e:cn(a,t,i)}var u=Fl(i,n);return u===i?e:cn(r,t,u)}function am(e,n){for(var t=n.length,r=e,i=0;i<t;++i){var o=n[i];r=Fl(r,o)}return r}function Xi(e,n){var t=e.v,r=e.l,i=e.r;if(n===t)return[r,i];if(n<t){if(r===void 0)return[void 0,e];var o=Xi(r,n);return[o[0],qt(o[1],t,i)]}if(i===void 0)return[e,void 0];var l=Xi(i,n);return[qt(r,t,l[0]),l[1]]}function Rn(e,n){if(e===void 0)return n;if(n===void 0)return e;var t=e.h,r=n.h;if(t>=r){if(r===1)return Qi(e,n.v);var i=e.v,o=e.l,l=e.r,a=Xi(n,i);return qt(Rn(o,a[0]),i,Rn(l,a[1]))}if(t===1)return Qi(n,e.v);var u=n.v,s=n.l,v=n.r,m=Xi(e,u);return qt(Rn(m[0],s),u,Rn(m[1],v))}var ld=lm,Gl=em;function ad(e,n){return Xa(e,ut(function(t){return t!==""},n))}function ud(e,n){var t=n.slice(),r=t.shift();return ze(e,nd(r===void 0?void 0:ht(r)),t)}function sd(e,n){var t=n.length-1|0;return Qa(pn(function(r,i){return i===t?[r]:[r,e]},n),[])}function hr(e){return ze(Rn,void 0,e)}function um(e){return ze(function(n,t){return n+t|0},0,e)}function cd(e,n){if(e!==void 0)return on(n,Zt(e))}function nr(e){return ht(e)}var tr;function ai(e){return{_0:e}}function On(e){return"1'b"+Zc(e._0)}function sm(e){return Zc(e._0)}function ui(e){return{TAG:0,_0:e}}function ls(e){return{TAG:1,_0:e}}function cm(e){return{TAG:2,_0:e}}function dm(e,n){return{TAG:3,_0:e,_1:0,_2:n}}function fm(e,n){return{TAG:3,_0:e,_1:1,_2:n}}function pm(e,n){return{TAG:3,_0:e,_1:2,_2:n}}function vm(e,n){return{TAG:3,_0:e,_1:3,_2:n}}function mm(e,n){return{TAG:3,_0:e,_1:4,_2:n}}function hm(e,n){return{TAG:3,_0:e,_1:5,_2:n}}function _m(e,n){return{TAG:3,_0:e,_1:6,_2:n}}function gm(e,n){return{TAG:3,_0:e,_1:7,_2:n}}function ym(e,n){return{TAG:3,_0:e,_1:8,_2:n}}function wm(e,n){return{TAG:3,_0:e,_1:9,_2:n}}function km(e,n,t){return{TAG:4,_0:e,_1:n,_2:t}}function Em(e){return{_0:e}}function as(e){return{TAG:0,_0:e}}function xm(e,n){return{TAG:1,_0:e,_1:n}}function Sm(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function ql(e){return typeof e=="number"?0:e._0}function Ul(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:case 2:return e._1}}function bm(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return Kc(e._0<e._1?e._0:e._1,e._2)}}function Bl(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0<e._1?e._0:e._1;case 2:return e._2}}function Tm(e,n){switch(n){case 0:return ql(e);case 1:return Ul(e);case 2:return bm(e);case 3:return Bl(e)}}function dd(e,n){return Tm(e,n._0)}function Nm(e){if(typeof e=="number")return 0;switch(e.TAG|0){case 0:return e._0;case 1:return e._0>e._1?e._0:e._1;case 2:return Ev(e._0>e._1?e._0:e._1,e._2)}}function Cm(e,n){return{TAG:2,_0:ql(e)+ql(n)|0,_1:Ul(e)+Ul(n)|0,_2:Bl(e)+Bl(n)|0}}function rl(e,n){switch(e){case 0:return n!==0?1:2;case 1:return n!==1?0:2;case 2:case 3:return n!==1?n!==0?2:0:1}}function Am(e){return{TAG:0,_0:e}}function Pm(e){return{TAG:1,_0:e}}function il(e){return{TAG:2,_0:e}}function Im(e,n){return{TAG:3,_0:e,_1:n}}function fd(e){if(!q(e,[]))return ud(function(n,t){return{TAG:3,_0:n,_1:t}},e)}function zm(e){return{TAG:0,_0:e}}function us(e){return{TAG:1,_0:e}}function Dm(e){switch(e){case 0:return Tv;case 1:return Nv;case 2:return Cv}}function pd(e){return typeof e!="number"}function Rm(e){return typeof e=="number"?e===0:!0}var Mm=[],Lm=[],Om=[],Vm=[],$m=[],vd={vars:Mm,nets:Lm,conts:Om,procs:Vm,finals:$m},jm=0,ol=0,ss=0,cs=1,ds=0;function ae(e){throw new Error(e)}var md={exports:{}},Eo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm=Gt,Gm=Symbol.for("react.element"),qm=Symbol.for("react.fragment"),Um=Object.prototype.hasOwnProperty,Bm=Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wm={key:!0,ref:!0,__self:!0,__source:!0};function hd(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Um.call(n,r)&&!Wm.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Gm,type:e,key:o,ref:l,props:i,_owner:Bm.current}}Eo.Fragment=qm;Eo.jsx=hd;Eo.jsxs=hd;md.exports=Eo;var N=md.exports;function _d(e){return pn(function(n,t){return N.jsx(Gt.Fragment,{children:n},String(t))},e)}function Hm(e){switch(e){case 0:return"&&";case 1:return"||";case 2:return"&";case 3:return"|";case 4:return"^";case 5:return"+";case 6:return"==";case 7:return"!=";case 8:return"===";case 9:return"!=="}}function xe(e){switch(e.TAG|0){case 0:return On(e._0);case 1:return e._0;case 2:return"!"+wt(e._0);case 3:return wt(e._0)+" "+Hm(e._1)+" "+wt(e._2);case 4:return wt(e._0)+" ? "+wt(e._1)+" : "+wt(e._2)}}function wt(e){switch(e.TAG|0){case 3:case 4:return"("+xe(e)+")";default:return xe(e)}}function Qm(e){return e?xe(e._0):"$time"}function gd(e){if(typeof e=="number")return"";switch(e.TAG|0){case 0:return"#"+String(e._0);case 1:return"#("+String(e._0)+", "+String(e._1)+")";case 2:return"#("+String(e._0)+", "+String(e._1)+", "+String(e._2)+")"}}function fs(e){return e!==void 0?"#"+String(e)+" ":""}function Wl(e){if(typeof e=="number")return"0";switch(e.TAG|0){case 0:return"posedge "+xe(e._0);case 1:return"negedge "+xe(e._0);case 2:return xe(e._0);case 3:return Wl(e._0)+" or "+Wl(e._1)}}function Xm(e){return typeof e=="number"?"@(*)":e.TAG===0?"#"+String(e._0):"@("+Wl(e._0)+")"}function ps(e,n){return'"'+e+'"'+(n.length===0?"":`,
          `)+Xa("",sd(", ",te(Qm,n)))}function yd(e){switch(e.TAG|0){case 0:return Xm(e._0);case 1:return"wait("+xe(e._0)+")";case 2:return e._0?e._1+" <= "+fs(e._2)+xe(e._3):e._1+" = "+fs(e._2)+xe(e._3);case 3:return"$display("+ps(e._0,e._1)+")";case 4:return"$monitor("+ps(e._0,e._1)+")";case 5:return"$finish("+xe(e._0)+")";case 6:return"goto +"+String(e._0);case 7:return"goto +"+String(e._1)+" unless "+xe(e._0)}}function Km(e,n,t,r){var i=yd(t),o=" "+(q(n,r)?i+";":i+`;
`);return q(e,r)?N.jsx("b",{children:o}):o}function Ym(e,n){var t=n.length-1|0;return pn(function(r,i){return Km(e,t,r,i)},n)}function Zm(e){return ad(" ",["assign",gd(e.delay),e.lhs,"=",xe(e.rhs)+";"])}function Jm(e){return e!==void 0?" = "+xe(e):""}function eh(e){return"logic "+e.target+Jm(e.init)+";"}function nh(e){switch(e){case 0:return"wire";case 1:return"wand";case 2:return"wor"}}function th(e){return ad(" ",[nh(e.type_),gd(e.delay),e.name+";"])}function _r(e){if(typeof e=="number")return e!==0?"final":"initial";switch(e._0){case 0:return"always";case 1:return"always_comb";case 2:return"always_ff";case 3:return"always_latch"}}function vs(e,n,t){var r=n.proc_type===1?[]:[N.jsx("span",{children:"// Process "+String(t+1|0),className:"comment"})],i=n.proc_type===1||I(e,t).state===0?-1:I(e,t).pc;return _d(Qa([r,[`
`+_r(n.proc_type),` begin
`],Ym(i,n.stmts),[`
end`]],[]))}function rh(e){switch(e){case 0:return"finished";case 1:return"running";case 2:return"waiting"}}function ih(e){return e.TAG===2?N.jsx("li",{children:"nba("+e._1+" <= "+On(e._2)+")"},String(e._0)):ae("impossible")}function ll(e,n){switch(n.TAG|0){case 0:var t=n._1;return"update("+I(e,t).lhs+"("+String(t)+")): "+On(n._2);case 1:return"eval(proc: "+String(n._1+1|0)+", "+n._2+" = "+On(n._3)+")";case 2:return"nba("+n._1+" <= "+On(n._2)+")";case 3:return"eval(proc: "+String(n._1+1|0)+")";case 4:return"eval-d(proc: "+String(n._1+1|0)+")";case 5:return N.jsxs("ol",{children:["NBA events:",gn(n._1,ih)]})}}function al(e){return q(e,[])?[]:[Xa(`
`,e)]}function oh(e,n){return _d(sd(`

`,Qa([al(te(th,e.nets)),al(te(eh,e.vars)),al(te(Zm,e.conts)),pn(function(t,r){return vs(n,t,r)},e.procs),pn(function(t,r){return vs(n,t,r)},e.finals)],[])))}function lh(e){return e!==void 0?N.jsx("code",{children:yd({TAG:4,_0:e[0],_1:e[1]})}):"No monitor"}function ah(e){if(e!==void 0)return Zt(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}function uh(e,n){if(e!==void 0)return ht(n(Zt(e)))}function sh(e,n){return uh(e,Xn(n))}function ch(e,n){return e!==void 0?Zt(e):n}function wd(e){return e!==void 0}function me(e){return e!==void 0?e.h:0}function $e(e,n,t,r){var i=me(e),o=me(r);return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r}}function sn(e,n){return{k:e,v:n,h:1,l:void 0,r:void 0}}function ms(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function dh(e,n){return e.v===n?e:{k:e.k,v:n,h:e.h,l:e.l,r:e.r}}function hs(e,n,t,r){var i=e!==void 0?e.h:0,o=r!==void 0?r.h:0;if(i>(o+2|0)){var l=e.l,a=e.r;return me(l)>=me(a)?$e(l,e.k,e.v,$e(a,n,t,r)):$e($e(l,e.k,e.v,a.l),a.k,a.v,$e(a.r,n,t,r))}if(o<=(i+2|0))return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r};var u=r.l,s=r.r;return me(s)>=me(u)?$e($e(e,n,t,u),r.k,r.v,s):$e($e(e,n,t,u.l),u.k,u.v,$e(u.r,r.k,r.v,s))}function Ki(e){var n=e.l,t=e.r,r=n!==void 0?Ki(n):0,i=t!==void 0?Ki(t):0;return(1+r|0)+i|0}function kd(e,n,t){for(;;){var r=n,i=e,o=i.k,l=i.l,a=i.r,u=l!==void 0?kd(l,r,t):r;t[u]=o;var s=u+1|0;if(a===void 0)return s;n=s,e=a}}function Ed(e,n,t){for(;;){var r=n,i=e,o=i.l,l=i.k,a=i.r,u=o!==void 0?Ed(o,r,t):r;t[u]=[l,i.v];var s=u+1|0;if(a===void 0)return s;n=s,e=a}}function fh(e){if(e===void 0)return[];var n=Ki(e),t=new Array(n);return Ed(e,0,t),t}function ph(e){if(e===void 0)return[];var n=Ki(e),t=new Array(n);return kd(e,0,t),t}function Hl(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return sn(r[0],r[1]);case 2:var i=e[n],o=e[n-1|0],l=o,a=i;return{k:l[0],v:l[1],h:2,l:sn(a[0],a[1]),r:void 0};case 3:var u=e[n],s=e[n-1|0],v=e[n-2|0],m=v,p=s,h=u;return{k:p[0],v:p[1],h:2,l:sn(h[0],h[1]),r:sn(m[0],m[1])};default:var _=t/2|0,y=Hl(e,n,_),C=e[n-_|0],d=Hl(e,(n-_|0)-1|0,(t-_|0)-1|0);return $e(y,C[0],C[1],d)}}function Ql(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return sn(r[0],r[1]);case 2:var i=e[n],o=e[n+1|0],l=o,a=i;return{k:l[0],v:l[1],h:2,l:sn(a[0],a[1]),r:void 0};case 3:var u=e[n],s=e[n+1|0],v=e[n+2|0],m=v,p=s,h=u;return{k:p[0],v:p[1],h:2,l:sn(h[0],h[1]),r:sn(m[0],m[1])};default:var _=t/2|0,y=Ql(e,n,_),C=e[n+_|0],d=Ql(e,(n+_|0)+1|0,(t-_|0)-1|0);return $e(y,C[0],C[1],d)}}function Za(e){var n=e.l;e.l=n.r,n.r=e;var t=me(e.l),r=me(e.r);e.h=(t>r?t:r)+1|0;var i=me(n.l),o=e.h;return n.h=(i>o?i:o)+1|0,n}function Ja(e){var n=e.r;e.r=n.l,n.l=e;var t=me(e.l),r=me(e.r);e.h=(t>r?t:r)+1|0;var i=me(n.r),o=e.h;return n.h=(i>o?i:o)+1|0,n}function vh(e){var n=e.l,t=Ja(n);return e.l=t,Za(e)}function mh(e){var n=e.r,t=Za(n);return e.r=t,Ja(e)}function si(e){var n=me(e.l),t=me(e.r);return e.h=(n>t?n:t)+1|0,e}function hh(e){var n=e.l,t=e.r,r=me(n),i=me(t);if(r>(2+i|0)){var o=n.l,l=n.r;return ms(o,l)?si(Za(e)):si(vh(e))}if(i>(2+r|0)){var a=t.l,u=t.r;return ms(u,a)?si(Ja(e)):si(mh(e))}return e.h=(r>i?r:i)+1|0,e}function _h(e,n){for(;;){var t=e;if(t===void 0)return;var r=t.k;if(n===r)return ht(t.v);e=n<r?t.l:t.r}}function gh(e,n){for(;;){var t=e;if(t!==void 0){var r=t.k;if(n===r)return t.v;e=n<r?t.l:t.r;continue}throw{RE_EXN_ID:"Not_found",Error:new Error}}}function yh(e,n){for(;;){var t=e;if(t===void 0)return!1;var r=t.k;if(n===r)return!0;e=n<r?t.l:t.r}}function Xl(e,n,t){if(e===void 0)return sn(n,t);var r=e.k;if(n===r)return e.k=n,e.v=t,e;var i=e.l,o=e.r;if(n<r){var l=Xl(i,n,t);e.l=l}else e.r=Xl(o,n,t);return hh(e)}function wh(e){var n=e.length;if(n!==0){var t=Jv(e,function(l,a){return l[0]<a[0]}),r;t>=0?r=Ql(e,0,t):(t=-t|0,r=Hl(e,t-1|0,t));for(var i=t;i<n;++i){var o=e[i];r=Xl(r,o[0],o[1])}return r}}function Je(e,n,t){if(e===void 0)return sn(n,t);var r=e.k;if(n===r)return dh(e,t);var i=e.v;return n<r?hs(Je(e.l,n,t),r,i,e.r):hs(e.l,r,i,Je(e.r,n,t))}var eu=yh,kh=fh,xd=wh,Eh=ph,nu=_h,Ar=gh,_s={contents:0};function Vn(e){var n=_s.contents;return _s.contents=n+1|0,n}function xh(e){return e.TAG===2?[e._1,e._2]:ae("bug: expected EventNBA")}function ul(e){return String(e._0)}var Sh=[],Sd=[],bd=[],gs={active:Sh,inactive:Sd,nba:bd};function bh(e){if(typeof e=="number")return e!==0?"running-finals":"running";var n=e._0;return n!==void 0?"finished("+On(n)+")":"finished"}function tu(e){return typeof e=="number"}function Td(e,n){var t=Gv(function(r){return r.name===n},e);return t!==void 0?t:ae("missing key")}function Th(e,n){return qv(function(t){return t.lhs===e},n)}function Ai(e,n,t){return Jc(e,n._0,t._0)}function Ve(e,n,t){return{_0:Ai(e,n,t)}}function Kl(e){return e._0===0}function V(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return t._0;case 1:return Ar(e,t._0);case 2:var r=V(e,t._0);return{_0:Av(r._0)};case 3:var i=t._1,o=t._0;if(i!==1)if(i!==0){var l=V(e,o),a=V(e,t._2);switch(i){case 0:case 1:return ae("impossible");case 2:return Ve(ns,l,a);case 3:return Ve(ts,l,a);case 4:return Ve(Pv,l,a);case 5:return Ve(Iv,l,a);case 6:return Ve(Dv,l,a);case 7:return Ve(Rv,l,a);case 8:return Ve(Mv,l,a);case 9:return Ve(Lv,l,a)}}else{var u=V(e,o);if(bv(u._0))return u;var s=V(e,t._2);return Ve(ns,u,s)}else{var v=V(e,o);if(Sv(v._0))return v;var m=V(e,t._2);return Ve(ts,v,m)}case 4:var p=t._2,h=t._1,_=V(e,t._0),y=_._0;if(y!==1){if(y!==0){var C=V(e,h),d=V(e,p);return Ve(zv,C,d)}n=h;continue}n=p;continue}}}function Nh(e,n,t){return t?{TAG:0,_0:V(n,t._0)}:{TAG:1,_0:e}}function Pi(e,n){for(;;){var t=e;switch(t.TAG|0){case 0:return!1;case 1:return n===t._0;case 2:e=t._0;continue;case 3:if(Pi(t._0,n))return!0;e=t._2;continue;case 4:if(Pi(t._0,n)||Pi(t._1,n))return!0;e=t._2;continue}}}function Nd(e,n,t){var r=Td(e,n).delay;return Cm(r,t)}function Ch(e,n,t){for(var r=!1,i=0,o=-1,l=-1,a=function(v){return v.TAG===0?v._1===t:!1};!r&&i<e.length;){var u=I(e,i);if(u[0]>n)r=!0;else{var s=ed(a,u[1].active);s!==-1&&(r=!0,o=i,l=s)}i=i+1|0}if(o!==-1)return[o,l]}function Ah(e,n){var t=Wi(0,n,e),r=Wi(n+1|0,e.length,e);return t.concat(r)}function Ph(e,n){switch(n){case 0:return e.active;case 1:return e.inactive;case 2:return e.nba}}function sl(e,n,t){switch(n){case 0:return{active:t,inactive:e.inactive,nba:e.nba};case 1:return{active:e.active,inactive:t,nba:e.nba};case 2:return{active:e.active,inactive:e.inactive,nba:t}}}function gr(e,n,t,r){var i=ed(function(h){return xv(h[0],t)},e);if(i===-1){var o=sl(gs,n,[r]);return e.concat([[t,o]])}if(q(I(e,i)[0],t)){var l=I(e,i)[1],a=Ph(l,n).concat([r]),u=sl(l,n,a),s=e.slice();return ee(s,i,[t,u]),s}var v=Wi(0,i,e),m=sl(gs,n,[r]),p=Wi(i,e.length,e);return v.concat([[t,m]]).concat(p)}function hn(e,n){var t=n.pc+1|0;return t===e.stmts.length?{pc:0,state:pd(e.proc_type)?1:0}:{pc:t,state:1}}function Cd(e,n,t){for(;;){var r=e;if(typeof r=="number")return!1;switch(r.TAG|0){case 0:var i=r._0,o=V(n,i),l=V(t,i);return Ai(rl,l,o)===0;case 1:var a=r._0,u=V(n,a),s=V(t,a);return Ai(rl,s,u)===1;case 2:var v=r._0,m=V(n,v),p=V(t,v);return Ai(rl,p,m)!==2;case 3:if(Cd(r._0,n,t))return!0;e=r._1;continue}}}function Ih(e,n,t){switch(e.TAG|0){case 0:var r=e._0;return typeof r=="number"||r.TAG===0?!1:Cd(r._0,n,t);case 1:return Kl(V(n,e._0));default:return!1}}function Ii(e,n,t,r){if(q(Ar(e.env,t),Ar(r,t))||e.status===1)return e;var i=e.queue.slice(),o=ut(function(c){return n!==c[1]?Pi(c[0].rhs,t):!1},pn(function(c,f){return[c,f]},e.vmodule.conts)),l=te(function(c){var f=c[0];return[f.delay,[c[1],V(e.env,f.rhs)]]},o),a=function(c,f){var g=f[1],S=g[1],w=g[0],E=Nd(e.vmodule.nets,I(e.vmodule.conts,w).lhs,f[0]),x=dd(E,S),D=Nm(E),A=Ch(c,e.time+D|0,w),j;if(A!==void 0){var de=A[0],ke=I(c,de),Q=ke[1],J=Q.active.slice();if(J.splice(A[1],1),q(J,[]))j=Ah(c,de);else{var Oe=c.slice();ee(Oe,de,[ke[0],{active:J,inactive:Q.inactive,nba:Q.nba}]),j=Oe}}else j=c;return gr(j,0,e.time+x|0,{TAG:0,_0:Vn(),_1:w,_2:S})},u=ze(a,i,l),s=te(function(c){var f=c[1];return[hn(I(e.vmodule.procs,f),c[0]),f]},ut(function(c){var f=c[0];return f.state===2?Ih(I(I(e.vmodule.procs,c[1]).stmts,f.pc),e.env,r):!1},pn(function(c,f){return[c,f]},e.proc_env))),v=q(s,[])?e.proc_env:e.proc_env.slice();Cr(function(c){ee(v,c[1],c[0])},s);var m=te(function(c){return{TAG:3,_0:Vn(),_1:c[1]}},ut(function(c){return c[0].state===1},s)),p=I(u,0),h=p[1],_=h.active.concat(m),y=h.inactive,C=h.nba,d={active:_,inactive:y,nba:C};return ee(u,0,[p[0],d]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:v,queue:u,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}function ys(e,n,t){var r=e.proc_env.slice(),i=I(r,n),o=I(e.vmodule.procs,n),l=i.pc+t|0,a=l===o.stmts.length?{pc:0,state:pd(o.proc_type)?1:0}:{pc:l,state:i.state};return ee(r,n,a),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:r,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}function zh(e){return e.TAG===0?sm(e._0):ae("expected value found time")}function Dh(e){return e.TAG===0?ae("expected time found value"):String(e._0)}function Rh(e,n){for(var t="",r=0,i=0;r<e.length;)if(e[r]==="%"){r=r+1|0;var o=e[r];o==="b"?(t=t.concat(zh(I(n,i))),i=i+1|0):o==="d"?(t=t.concat(Dh(I(n,i))),i=i+1|0):ae("unsupported format"),r=r+1|0}else t=t.concat(e[r]),r=r+1|0;return t=t.concat(`
`),t}function Mh(e,n){return e.TAG===0?n.TAG===0?q(e._0,n._0):ae("impossible"):n.TAG===0?ae("impossible"):!0}function Ad(e,n,t,r){var i=e.env,o=e.time,l=te(function(v){return Nh(o,i,v)},t),a=r!==void 0?Kv(l,r,Mh):!1;if(a)return[l,e.output];var u=Rh(n,l),s=e.output.concat(u);return[l,s]}function Lh(e,n){var t=I(e.vmodule.procs,n),r=I(e.proc_env,n),i=I(t.stmts,r.pc);switch(i.TAG|0){case 0:var o=i._0;if(typeof o=="number")return ae("impossible, all stars should have been preprocessed away");if(o.TAG===0){var l=o._0,a=r.pc,u={pc:a,state:2},s=e.proc_env.slice();ee(s,n,u);var v=l===0?1:0,m=gr(e.queue,v,e.time+l|0,{TAG:4,_0:Vn(),_1:n});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:s,queue:m,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}var p=r.pc,h={pc:p,state:2},_=e.proc_env.slice();return ee(_,n,h),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:_,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first};case 1:var y=V(e.env,i._0),C=Kl(y)?hn(t,r):{pc:r.pc,state:2},d=e.proc_env.slice();return ee(d,n,C),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:d,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first};case 2:if(i._0){var c=V(e.env,i._3),f=hn(t,r),g=e.proc_env.slice();ee(g,n,f);var S=ch(i._2,0),w=gr(e.queue,2,e.time+S|0,{TAG:2,_0:Vn(),_1:i._1,_2:c});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:g,queue:w,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}var E=i._2,x=i._1,D=V(e.env,i._3);if(E!==void 0){var A=r.pc,j={pc:A,state:2},de=e.proc_env.slice();ee(de,n,j);var ke=E===0?1:0,Q=gr(e.queue,ke,e.time+E|0,{TAG:1,_0:Vn(),_1:n,_2:x,_3:D});return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:de,queue:Q,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}var J=e.env,Oe=Je(e.env,x,D),Nn=hn(t,r),b=e.proc_env.slice();ee(b,n,Nn);var P=e.vmodule,z=e.status,O=e.cont_env,X=e.queue,Cn=e.monitor,He=e.output,Jn=e.time,Qe=e.process_nba_first,vn={vmodule:P,status:z,env:Oe,cont_env:O,proc_env:b,queue:X,monitor:Cn,output:He,time:Jn,process_nba_first:Qe};return Ii(vn,-1,x,J);case 3:var Vo=Ad(e,i._0,i._1,void 0),$o=hn(t,r),ei=e.proc_env.slice();return ee(ei,n,$o),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:ei,queue:e.queue,monitor:e.monitor,output:Vo[1],time:e.time,process_nba_first:e.process_nba_first};case 4:var jo=[i._0,i._1,void 0],Fo=hn(t,r),ni=e.proc_env.slice();return ee(ni,n,Fo),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:ni,queue:e.queue,monitor:jo,output:e.output,time:e.time,process_nba_first:e.process_nba_first};case 5:var Go=V(e.env,i._0),qo=e.status,Uo=e.vmodule,yt={_0:Go},Bo=e.env,Wo=e.cont_env,Ho=e.proc_env,ti=e.queue,Qo=e.monitor,Xo=e.output,Ko=e.time,Yo=e.process_nba_first,ri={vmodule:Uo,status:yt,env:Bo,cont_env:Wo,proc_env:Ho,queue:ti,monitor:Qo,output:Xo,time:Ko,process_nba_first:Yo};return qo===0?Pd(ri):ri;case 6:return ys(e,n,i._0);case 7:if(!Kl(V(e.env,i._0)))return ys(e,n,i._1);var Zo=hn(t,r),ii=e.proc_env.slice();return ee(ii,n,Zo),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:ii,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}}function zi(e,n){for(var t=0,r=e;t<100&&tu(r.status)&&I(r.proc_env,n).state===1;)t=t+1|0,r=Lh(r,n);return t===100&&ae("time out!"),r}function Oh(e,n){for(;;){var t=n,r=e;if(t>=r.vmodule.finals.length)return r;var i=I(r.vmodule.finals,t);os(i,r.vmodule.procs);var o=os({pc:0,state:1},r.proc_env),l=zi(r,o-1|0);if(l.vmodule.procs.pop(),l.proc_env.pop(),!tu(l.status))return l;n=t+1|0,e=l}}function Pd(e){var n=e.status,t=e.vmodule,r=e.env,i=e.cont_env,o=e.proc_env.slice(),l=e.queue,a=e.monitor,u=e.output,s=e.time,v=e.process_nba_first,m={vmodule:t,status:1,env:r,cont_env:i,proc_env:o,queue:l,monitor:a,output:u,time:s,process_nba_first:v},p=Oh(m,0);return tu(p.status)?{vmodule:p.vmodule,status:n,env:p.env,cont_env:p.cont_env,proc_env:p.proc_env,queue:p.queue,monitor:p.monitor,output:p.output,time:p.time,process_nba_first:p.process_nba_first}:p}function Vh(e,n){var t=I(e,n);if(t.TAG===5){var r=t._1;if(r.length!==1){var i=r.slice();i.shift(),e[n]={TAG:5,_0:t._0,_1:i};return}e.splice(n,1);return}e.splice(n,1)}function $h(e){var n=e.proc_type,t;if(typeof n=="number")t=0;else{var r=n._0;t=r!==1&&r<3?0:1}return{pc:t,state:1}}function jh(e,n){return n!==void 0?V(e,n):{_0:2}}function ws(e,n){var t=te(function(o){return{TAG:3,_0:Vn(),_1:o[1]}},ut(function(o){return Rm(o[0].proc_type)},pn(function(o,l){return[o,l]},e.procs))),r=xd(gn(e.nets,function(o){return[o.name,{_0:Th(o.name,e.conts)?2:3}]})),i=Hv(e.vars,r,function(o,l){return Je(o,l.target,jh(o,l.init))});return{vmodule:e,status:0,env:i,cont_env:gn(e.conts,function(o){return{_0:2}}),proc_env:gn(e.procs,$h),queue:[[0,{active:t,inactive:Sd,nba:bd}]],monitor:void 0,output:"",time:0,process_nba_first:n}}function Fh(e,n,t){var r=V(e.env,n.rhs),i=Nd(e.vmodule.nets,n.lhs,n.delay),o=dd(i,r);return[o,{TAG:0,_0:Vn(),_1:t,_2:r}]}function ks(e){var n=pn(function(r,i){return Fh(e,r,i)},e.vmodule.conts),t=ze(function(r,i){return gr(r,0,i[0],i[1])},e.queue,n);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:t,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}function Es(e,n,t){if(!(e.status===0&&e.time===n))return!1;if(!e.process_nba_first)return!0;var r=e.queue[0];if(r===void 0)return!0;var i=r[1].active[0];return i!==void 0&&i.TAG===5?t===0:!0}function Gh(e,n){var t=I(e.queue,0),r=t[1],i=r.active.slice(),o=I(i,n);Vh(i,n);var l=r.inactive,a=r.nba,u={active:i,inactive:l,nba:a},s=e.queue.slice();ee(s,0,[t[0],u]);var v=e.vmodule,m=e.status,p=e.env,h=e.cont_env,_=e.proc_env,y=e.monitor,C=e.output,d=e.time,c=e.process_nba_first,f={vmodule:v,status:m,env:p,cont_env:h,proc_env:_,queue:s,monitor:y,output:C,time:d,process_nba_first:c};switch(o.TAG|0){case 0:var g=o._1,S=h.slice();ee(S,g,o._2);var w=I(v.conts,g).lhs,E=Td(v.nets,w),x=Dm(E.type_),D=ud(function(et,Jo){return Ve(x,et,Jo)},te(function(et){return I(S,et[1])},ut(function(et){return et[0].lhs===w},pn(function(et,Jo){return[et,Jo]},v.conts)))),A=Je(p,w,D),j=p,de=v,ke=m,Q=_,J=y,Oe=C,Nn=d,b=c,P={vmodule:de,status:ke,env:A,cont_env:S,proc_env:Q,queue:s,monitor:J,output:Oe,time:Nn,process_nba_first:b};return Ii(P,g,w,j);case 1:var z=o._2,O=o._1,X=p,Cn=Je(p,z,o._3),He=I(_,O),Jn=I(v.procs,O),Qe=hn(Jn,He),vn=_.slice();ee(vn,O,Qe);var Vo=v,$o=m,ei=h,jo=y,Fo=C,ni=d,Go=c,qo={vmodule:Vo,status:$o,env:Cn,cont_env:ei,proc_env:vn,queue:s,monitor:jo,output:Fo,time:ni,process_nba_first:Go},Uo=Ii(qo,-1,z,X);return zi(Uo,O);case 2:return ae("impossible: EventNBA cannot be in active region");case 3:return zi(f,o._1);case 4:var yt=o._1,Bo=I(v.procs,yt),Wo=I(_,yt),Ho=hn(Bo,Wo),ti=_.slice();ee(ti,yt,Ho);var Qo=v,Xo=m,Ko=p,Yo=h,ri=y,Zo=C,ii=d,qp=c,Up={vmodule:Qo,status:Xo,env:Ko,cont_env:Yo,proc_env:ti,queue:s,monitor:ri,output:Zo,time:ii,process_nba_first:qp};return zi(Up,yt);case 5:var Bp=o._1.slice(),Qu=Bp.shift(),Wp=nd(Qu===void 0?void 0:ht(Qu)),Xu=xh(Wp),Ku=Xu[0],Hp=p,Qp=Je(p,Ku,Xu[1]),Xp=v,Kp=m,Yp=h,Zp=_,Jp=y,ev=C,nv=d,tv=c,rv={vmodule:Xp,status:Kp,env:Qp,cont_env:Yp,proc_env:Zp,queue:s,monitor:Jp,output:ev,time:nv,process_nba_first:tv};return Ii(rv,-1,Ku,Hp)}}function xs(e,n){if(!(e.status===0&&e.time===n))return!1;var t=I(e.queue,0),r=t[1];return q(r.active,[])?Yc(r.inactive,[]):!1}function qh(e){var n=I(e.queue,0),t=n[1],r=t.inactive,i=[],o=t.nba,l={active:r,inactive:i,nba:o},a=e.queue.slice();return ee(a,0,[e.time,l]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:a,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}function Ss(e,n){if(!(e.status===0&&e.time===n))return!1;var t=I(e.queue,0),r=t[1];return q(r.active,[])&&q(r.inactive,[])?Yc(r.nba,[]):!1}function Uh(e){var n=I(e.queue,0),t=n[1],r=Vn(),i=t.nba,o={TAG:5,_0:r,_1:i},l=t.active.concat([o]),a=t.inactive,u=[],s={active:l,inactive:a,nba:u},v=e.queue.slice();return ee(v,0,[e.time,s]),{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:v,monitor:e.monitor,output:e.output,time:e.time,process_nba_first:e.process_nba_first}}function bs(e){if(e.status!==0)return!1;var n=e.queue.length;if(n===0)return ae("impossible");var t=I(e.queue,0)[1];return q(t.active,[])&&q(t.inactive,[])?q(t.nba,[]):!1}function Bh(e){var n=e.monitor;if(n===void 0)return e;var t=n[1],r=n[0],i=Ad(e,r,t,n[2]);return{vmodule:e.vmodule,status:e.status,env:e.env,cont_env:e.cont_env,proc_env:e.proc_env,queue:e.queue,monitor:[r,t,i[0]],output:i[1],time:e.time,process_nba_first:e.process_nba_first}}function Wh(e){var n=Bh(e),t=n.queue.slice();if(t.shift(),t.length===0)return Pd({vmodule:n.vmodule,status:{_0:void 0},env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:n.time,process_nba_first:n.process_nba_first});var r=I(t,0);return{vmodule:n.vmodule,status:n.status,env:n.env,cont_env:n.cont_env,proc_env:n.proc_env,queue:t,monitor:n.monitor,output:n.output,time:r[0],process_nba_first:n.process_nba_first}}function Ts(e,n){return{TAG:0,_0:e,_1:n}}function Ns(e,n){return{TAG:1,_0:e,_1:n}}function ci(e,n,t,r){return{TAG:2,_0:e,_1:n,_2:t,_3:r}}function Cs(e,n){return{TAG:3,_0:e,_1:n}}function As(e,n){return{TAG:4,_0:e,_1:n}}function Ps(e){return{TAG:5,_0:e}}function Hh(e,n){return{TAG:6,_0:e,_1:n}}function Qh(e,n,t){return{TAG:7,_0:e,_1:n,_2:t}}function Xh(e){return{TAG:8,_0:e}}function Is(e,n){return[e,n]}function Kh(e){return{TAG:0,_0:e}}function zs(e,n,t){return{TAG:1,_0:e,_1:n,_2:t}}function Ds(e,n,t){return{TAG:3,_0:e,_1:n,_2:t}}function Rs(e,n,t){return{TAG:2,_0:e,_1:n,_2:t}}function Yh(e,n){return{TAG:4,_0:e,_1:n}}function Zh(e){return{TAG:0,_0:e}}function Jh(e){return{TAG:1,_0:e}}function Id(e){switch(e){case"always":return{_0:0};case"always_comb":return{_0:1};case"always_ff":return{_0:2};case"always_latch":return{_0:3};case"final":return 1;case"initial":return 0;default:return ae("impossible proc type")}}const zd=ohm.grammar(String.raw`
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
`),Dd=zd.createSemantics();Dd.addOperation("translate",{Module(e,n,t,r,i,o,l){return o.children.map(a=>a.translate())},Decl_no_init(e){return Is(e.translate(),tr)},Decl_init(e,n,t){return Is(e.translate(),nr(t.translate()))},GateDecl(e,n,t,r){return t.asIteration().children.map(i=>i.translate())},Top_decl(e,n,t){return Kh(n.asIteration().children.map(r=>r.translate()))},Top_net(e,n,t){return zs(e.translate(),ol,n.asIteration().children.map(r=>r.translate()))},Top_net_delay(e,n,t,r){return zs(e.translate(),n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_cont(e,n,t,r,i){return Ds(n.translate(),ol,r.translate())},Top_cont_delay(e,n,t,r,i,o){return Ds(t.translate(),n.translate(),i.translate())},Top_gate(e,n,t){return Rs(e.sourceString,ol,n.asIteration().children.map(r=>r.translate()))},Top_gate_delay(e,n,t,r){return Rs(e.sourceString,n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_proc(e,n){return Yh(e.sourceString,n.translate())},WireType(e){return this.sourceString},MinTypMax_full(e,n,t,r,i){return t.translate()},MinTypMax_single(e){return e.translate()},DelayCont_single(e,n){return n.translate()},DelayCont_mintypmax(e,n,t,r){return t.translate()},TimeCont_delay(e){return zm(e.translate())},TimeCont_id(e,n){return us(il(ls(n.translate())))},TimeCont_event(e,n,t,r){return us(t.translate())},TimeCont_star(e,n,t,r){return ds},TimeCont_star_no_para(e,n){return ds},Stmt_blocking(e,n,t,r){return ci(ss,e.translate(),tr,t.translate())},Stmt_blocking_delay(e,n,t,r,i){return ci(ss,e.translate(),nr(t.translate()),r.translate())},Stmt_nonblocking(e,n,t,r){return ci(cs,e.translate(),tr,t.translate())},Stmt_nonblocking_delay(e,n,t,r,i){return ci(cs,e.translate(),nr(t.translate()),r.translate())},Stmt_if(e,n,t,r,i){return Hh(t.translate(),i.translate())},Stmt_if_else(e,n,t,r,i,o,l){return Qh(t.translate(),i.translate(),l.translate())},Stmt_display(e,n,t,r,i,o,l){return Cs(t.translate(),i.asIteration().children.map(a=>a.translate()))},Stmt_display_no_args(e,n,t,r,i){return Cs(t.translate(),[])},Stmt_monitor(e,n,t,r,i,o,l){return As(t.translate(),i.asIteration().children.map(a=>a.translate()))},Stmt_monitor_no_args(e,n,t,r,i){return As(t.translate(),[])},Stmt_finish(e,n){return Ps(ui(ai(nl)))},Stmt_finish_arg(e,n,t,r,i){return Ps(t.translate())},Stmt_time_stmt(e,n){return Ts(e.translate(),nr(n.translate()))},Stmt_time(e,n){return Ts(e.translate(),tr)},Stmt_wait_stmt(e,n,t,r,i){return Ns(t.translate(),nr(i.translate()))},Stmt_wait(e,n,t,r,i){return Ns(t.translate(),tr)},Stmt_block(e,n,t){return Xh(n.children.map(r=>r.translate()))},Delay_one(e,n,t,r){return as(t.translate())},Delay_one_no_para(e,n){return as(n.translate())},Delay_two(e,n,t,r,i,o){return xm(t.translate(),i.translate())},Delay_three(e,n,t,r,i,o,l,a){return Sm(t.translate(),i.translate(),l.translate())},Event_Exp(e){return e.translate()},Event_Exp_or(e,n,t){return Im(e.translate(),t.translate())},Event_Exp1_exp(e){return il(e.translate())},Event_Exp1_posedge(e,n){return Am(n.translate())},Event_Exp1_negedge(e,n){return Pm(n.translate())},Event_Exp1_edge(e,n){return il(n.translate())},Exp(e){return e.translate()},Exp_cond(e,n,t,r,i){return km(e.translate(),t.translate(),i.translate())},Exp1(e){return e.translate()},Exp1_lor(e,n,t){return fm(e.translate(),t.translate())},Exp2(e){return e.translate()},Exp2_land(e,n,t){return dm(e.translate(),t.translate())},Exp3(e){return e.translate()},Exp3_bor(e,n,t){return vm(e.translate(),t.translate())},Exp4(e){return e.translate()},Exp4_bxor(e,n,t){return mm(e.translate(),t.translate())},Exp5(e){return e.translate()},Exp5_band(e,n,t){return pm(e.translate(),t.translate())},Exp6(e){return e.translate()},Exp6_eq(e,n,t){return _m(e.translate(),t.translate())},Exp6_neq(e,n,t){return gm(e.translate(),t.translate())},Exp6_case_eq(e,n,t){return ym(e.translate(),t.translate())},Exp6_case_neq(e,n,t){return wm(e.translate(),t.translate())},Exp7(e){return e.translate()},Exp7_add(e,n,t){return hm(e.translate(),t.translate())},Exp8(e){return e.translate()},Exp8_not(e,n){return cm(n.translate())},Exp9_id(e){return ls(e.translate())},Exp9_bit(e){return ui(e.translate())},Exp9_zero(e){return ui(ai(rs))},Exp9_one(e){return ui(ai(nl))},Exp9_paren(e,n,t){return n.translate()},ExpOrTime_exp(e){return Em(e.translate())},ExpOrTime_time(e){return jm},number(e){return parseInt(this.sourceString,10)},bit(e,n){var t;switch(n.sourceString.toLowerCase()){case"1":t=nl;break;case"0":t=rs;break;case"x":t=Ov;break;case"z":t=Vv;break;default:throw"Impossible!"}return ai(t)},string(e,n,t){return n.sourceString},id(e,n){return this.sourceString}});function e_(e){try{const n=zd.match(e);return Zh(Dd(n).translate())}catch(n){if(n instanceof TypeError)return Jh(n.message);throw n}}var cl={contents:0};function Rd(e){return cl.contents=cl.contents+1|0,e+("/"+cl.contents)}function n_(e){return e==null?!1:typeof e.RE_EXN_ID=="string"}var t_=Rd("Compiler.CompileError");function r_(e){return{target:e[0],init:e[1]}}function i_(e,n,t){var r=t[0],i;switch(e){case"triand":case"wand":i=1;break;case"tri":case"wire":i=0;break;case"trior":case"wor":i=2;break;default:i=ae("impossible net type")}var o=sh(t[1],function(l){return{lhs:r,delay:0,rhs:l}});return[{type_:i,name:r,delay:n},o]}function nt(e){switch(e.TAG|0){case 0:var n=e._1,t=e._0;return n!==void 0?[{TAG:0,_0:t}].concat(nt(n)):[{TAG:0,_0:t}];case 1:var r=e._1,i=e._0;return r!==void 0?[{TAG:1,_0:i}].concat(nt(r)):[{TAG:1,_0:i}];case 2:return[{TAG:2,_0:e._0,_1:e._1,_2:e._2,_3:e._3}];case 3:return[{TAG:3,_0:e._0,_1:e._1}];case 4:return[{TAG:4,_0:e._0,_1:e._1}];case 5:return[{TAG:5,_0:e._0}];case 6:var o=nt(e._1);return[{TAG:7,_0:e._0,_1:o.length+1|0}].concat(o);case 7:var l=nt(e._1),a=nt(e._2);return[{TAG:7,_0:e._0,_1:l.length+2|0}].concat(l,[{TAG:6,_0:a.length+1|0}],a);case 8:return ze(function(u,s){return u.concat(nt(s))},[],e._0)}}function o_(e,n){switch(n.TAG|0){case 0:var t=te(r_,n._0);return{vars:e.vars.concat(t),nets:e.nets,conts:e.conts,procs:e.procs,finals:e.finals};case 1:var r=n._1,i=n._0,o=Yv(te(function(_){return i_(i,r,_)},n._2)),l=te(ah,ut(wd,o[1]));return{vars:e.vars,nets:e.nets.concat(o[0]),conts:e.conts.concat(l),procs:e.procs,finals:e.finals};case 2:return ae("impossible: gates should have been pre-processed away");case 3:var a=n._0,u=n._1,s=n._2,v={lhs:a,delay:u,rhs:s};return{vars:e.vars,nets:e.nets,conts:e.conts.concat([v]),procs:e.procs,finals:e.finals};case 4:var m=Id(n._0),p=nt(n._1),h={proc_type:m,stmts:p};return m===1?{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs,finals:e.finals.concat([h])}:{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs.concat([h]),finals:e.finals}}}function l_(e){return ze(o_,vd,e)}var dl=xd([["empty.sv",`module empty;

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
`],["schedule/seq_cont1.sv",`module seq_cont1;

// I'm not aware of any simulator that interleaves 
// procedural processes, but some simulators, such as
// Icarus, interleaves procedural processes and
// continuous assignments.

// Consider the following:

logic a, out_proc;

wire out_cont = a;

always_comb out_proc = a;

initial begin
 $display("out_proc = %b, out_cont = %b", out_proc, out_cont);
 a = 1;
 $display("out_proc = %b, out_cont = %b", out_proc, out_cont);
end

// When run in Icarus, the above will print
//
// out_proc = x, out_cont = x
// out_proc = x, out_cont = 1
//
// whereas in VV procedural processes and
// continuous assignments are never interleaved.
//
// The standard is unclear here. The standard
// allows for any process interleaving, but this
// leads to problems, as discussed in the paper.
// On the other hand, the above shows that some simulators
// still allow some interleavings, here specifically between
// procedural processes and continuous assignments.

endmodule
`],["schedule/seq_cont5.sv",`module seq_cont5;

// Variant of seq_cont1, some
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
`],["schedule/seq_cont4.sv",`module seq_cont4;

// Extension of seq_cont1, similar to seq_cont3
// but now with gate primitives instead

// Interestingly, the simulator Aldec Riviera-PRO
// gives the following for seq_cont3:
//
// out_net = x, out_var = x
// out_net = x, out_var = x
//
// But gives the following for this module:
//
// out_net = x, out_var = x
// out_net = x, out_var = 1

logic a;

wire out_net;
buf (out_net, a);

logic out_var;
buf (out_var, a);

initial begin
 $display("out_net = %b, out_var = %b", out_net, out_var);
 a = 1;
 $display("out_net = %b, out_var = %b", out_net, out_var);
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
`],["schedule/read_clk_after_posedge.sv",`module read_clk_after_posedge;

// Example suggested by Niklas Sörensson during FMCAD'22

logic clk = 0;
always #1 clk <= ~clk;

// This will always print 1
always @(posedge clk) $display("%b", clk);

//
// Alternative, see the discussion in seq_cont1.sv
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
`],["schedule/seq_cont7.sv",`module seq_cont7;

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
`],["schedule/seq_cont3.sv",`module seq_cont3;

// Extension of seq_cont1, does it matter if the
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
`],["schedule/seq_cont2.sv",`module seq_cont2;

// Extension of seq_cont1, including two gate primitives

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
`],["schedule/seq_cont6.sv",`module seq_cont6;

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
// module seq_cont6;
//  wire a = 1'h1;
//  wire b = 1'h1;
//  wire c = 1'h1;
// endmodule

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
// others do not, see schedule/seq_cont1.sv.

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
`],["00/i_concurrency1.sv",`module i_concurrency1;

// As discussed in the VV paper, the standard
// says that processes can be preempted at any point.
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

endmodule
`],["00/l_values.sv",`module l_values;

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
`],["00/j_concurrency2.sv",`module j_concurrency2;

// A problem related to the preemption-problem
// discussed in the i_concurrency1 module is
// how much the execution of NBA events should be
// interleaved with other types of events.

// Because the standard is unclear on this point
// (see the VV paper), two execution modes are provided.
// The "Process NBA events first" checkbox controls
// which mode is used.

// When the checkbox is checked, NBA events must be
// processed before all other events in the active region.

// To exemplify, consider the difference between using blocking
// and nonblocking assignments in the below code.

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

// When treating NBA events as any other active events,
// as suggested by the standard, we run into the following
// awkwardness: nonblocking assignments are more nondeterministic
// than blocking assignments (when not allowing arbitrary process 
// interleavings). This semantics is given by unchecking the
// checkbox.
//
// Executing all NBA events before other active events
// seems to give a more reasonable semantics (the behaviour of
// blocking and nonblocking assignments are more consistent)
// but seemingly diverges from the standard. This semantics
// is given by checking the checkbox.

endmodule
`],["00/d_zero_delay.sv",`module d_zero_delay;

logic a;
 
// Zero-delayed events are scheduled in the inactive region.
// Such delays can be used for process coordination, e.g.,
// the below ensures that "a" will be 0 at the end of simulation

initial #0 a = 0;

initial a = 1;

// However, modern Verilog uses nonblocking assignments for
// communication between processes, as illustrated in
// the e_nonblocking module

endmodule
`],["00/f_nonblocking2.sv",`module f_nonblocking2;

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

// Notice how the NBA region is used to give semantics to
// nonblocking assignments. Notice that when the active region
// is empty and there are events in the NBA region, the NBA
// region becomes blue and clicking the NBA region moves
// the NBA-region events to the active region.

// When moved to the active region, the NBA-region events are
// grouped because they must be executed in the same order
// they were added to the NBA region.

endmodule
`],["00/a_start.sv",`// Welcome to VV, an interactive Verilog simulator!

// This directory contains a short series of modules
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
// - and nba (nonblocking assignments).

// After loading the above module, you will see a
// blue-marked event in the active region for time 0.

// First, see that the variable "a" has value x in
// the environment. Now, clicking the blue event
// will progress the simulation by running the 
// initial process of the module. After clicking the
// event, the variable "a" now has value 0 in the
// environment since the assignment in the process
// has now been executed.

// There are now no more events to execute in the
// current time, therefore "Simulation time" is now
// blue.

// Clicking "Simulation time" progresses to simulation
// to the next time slot. Because there are no future
// time slots/events, the simulation finishes.

// Time slots and simulation time will make more sense
// later when delays have been introduced.
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
`],["00/e_nonblocking1.sv",`module e_nonblocking1;

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
// The type of assignment used (=) is called blocking assignments
// in Verilog. The module f_nonblocking1 illustrates how so-called
// nonblocking assignments (<=) solves this problem.

endmodule
`],["00/h_monitor.sv",`module h_monitor;

// The display task $monitor controls a monitor that
// prints when something the monitor depends on has
// changed during the current time slot

// Like the display task $display, $monitor is useful
// for print-style debugging

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
`],["00/g_display.sv",`module g_display;

// The display tasks ($display, $monitor, etc.)
// can be invoked in a great variety of ways;
// e.g., see this call from p. 239:
//
// $monitor($time, , "a = %b b = %b", a, b);
//
// The display tasks are useful for printf-style
// debugging and similar.
//
// In VV, to simplify the implementation,
// the first argument must be a format string
// and only %b (for value) and %d (for time)
// are supported, e.g.:

logic a = 1'b0;

initial $display("a = %b at time %d", a, $time);

endmodule
`],["00/c_delay.sv",`module c_delay;

logic a;
 
// This will delay the assignment to "a", the process
// will block for ten clock cycles and then continue
initial #10 a = 0;

// Delays can only be used in test-bench code because
// they are not synthesisable

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
`]]),Y=Rd("Elaborator.ElaboratorError");function ru(e){if(e.TAG===1)return e._0;throw{RE_EXN_ID:Y,_1:"Expected data reference, found: "+xe(e),Error:new Error}}var a_=[],u_={env:void 0,out:a_};function Pr(e,n){return{env:e.env,out:e.out.concat([n])}}function s_(e,n){if(!eu(e.env,n))throw{RE_EXN_ID:Y,_1:"Undefined reference: "+n,Error:new Error}}function c_(e,n){var t=nu(e.env,n);if(t!==void 0){if(t)return;throw{RE_EXN_ID:Y,_1:"Undefined var: "+n,Error:new Error}}throw{RE_EXN_ID:Y,_1:"Undefined var: "+n,Error:new Error}}function Pe(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:return;case 1:return s_(e,t._0);case 2:n=t._0;continue;case 3:return Cr(function(r){return Pe(e,r)},[t._0,t._2]);case 4:return Cr(function(r){return Pe(e,r)},[t._0,t._1,t._2])}}}function Md(e,n){if(typeof n!="number")return n.TAG===3?Cr(function(t){return Md(e,t)},[n._0,n._1]):Pe(e,n._0)}function d_(e,n){if(!(typeof n=="number"||n.TAG===0))return Md(e,n._0)}function f_(e,n){if(n)return Pe(e,n._0)}function p_(e,n){var t=n[1],r=n[0];if(eu(e.env,r))throw{RE_EXN_ID:Y,_1:"Name collision: "+r,Error:new Error};cd(t,function(o){return Pe(e,o)});var i=Je(e.env,r,{_0:wd(t)?1:0});return{env:i,out:e.out}}function v_(e,n){var t=n[0];if(eu(e.env,t))throw{RE_EXN_ID:Y,_1:"Name collision: "+t,Error:new Error};cd(n[1],function(i){return Pe(e,i)});var r=Je(e.env,t,0);return{env:r,out:e.out}}function m_(e,n,t){var r=nu(e,t);if(r!==void 0&&r){var i=r._0;if(i!==2){if(i>=3)throw{RE_EXN_ID:Y,_1:"Cannot write to claimed variable: "+t,Error:new Error};return}if(n)throw{RE_EXN_ID:Y,_1:"Cannot write to claimed variable: "+t,Error:new Error}}}function Yl(e,n,t,r){for(;;){var i=r;switch(i.TAG|0){case 0:var o=i._1;if(d_(t,i._0),o===void 0)return t;r=o;continue;case 1:var l=i._1;if(Pe(t,i._0),l===void 0)return t;r=l;continue;case 2:var a=i._1;m_(e,n,a),c_(t,a),Pe(t,i._3);var u=Je(t.env,a,{_0:n?3:2});return{env:u,out:t.out};case 3:case 4:break;case 5:return Pe(t,i._0),t;case 6:Pe(t,i._0),r=i._1;continue;case 7:return Pe(t,i._0),ze(function(s,v){return Yl(e,n,s,v)},t,[i._1,i._2]);case 8:return ze(function(s,v){return Yl(e,n,s,v)},t,i._0)}return Cr(function(s){return f_(t,s)},i._1),t}}function an(e){for(;;){var n=e;switch(n.TAG|0){case 0:return;case 1:return ld([n._0]);case 2:e=n._0;continue;case 3:return Rn(an(n._0),an(n._2));case 4:return hr([an(n._0),an(n._1),an(n._2)])}}}function h_(e){if(e)return an(e._0)}function Et(e){for(;;){var n=e;switch(n.TAG|0){case 0:case 1:break;case 2:return an(n._3);case 3:case 4:return hr(te(h_,n._1));case 5:return an(n._0);case 6:return Rn(an(n._0),Et(n._1));case 7:return hr([an(n._0),Et(n._1),Et(n._2)]);case 8:return hr(te(Et,n._0))}var t=n._1;if(t===void 0)return;e=t}}function Di(e){for(;;){var n=e;switch(n.TAG|0){case 0:case 1:break;case 2:return ld([n._1]);case 6:e=n._1;continue;case 7:return Rn(Di(n._1),Di(n._2));case 8:return hr(te(Di,n._0));default:return}var t=n._1;if(t===void 0)return;e=t}}function Ld(e){var n=Et(e),t=Di(e),r=fd(te(function(o){return{TAG:2,_0:{TAG:1,_0:o}}},Gl(am(n,Gl(t))))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:e}}function it(e){switch(e.TAG|0){case 0:if(typeof e._0!="number")return e;var n=e._1;if(n===void 0)return{TAG:0,_0:{TAG:1,_0:0},_1:void 0};var t=it(n),r=fd(te(function(o){return{TAG:2,_0:{TAG:1,_0:o}}},Gl(Et(t)))),i=r!==void 0?r:0;return{TAG:0,_0:{TAG:1,_0:i},_1:t};case 6:return{TAG:6,_0:e._0,_1:it(e._1)};case 7:return{TAG:7,_0:e._0,_1:it(e._1),_2:it(e._2)};case 8:return{TAG:8,_0:te(it,e._0)};default:return e}}function xt(e,n){for(;;){var t=n;switch(t.TAG|0){case 0:var r=t._0;if(typeof r!="number"&&r.TAG===0)throw{RE_EXN_ID:Y,_1:"Time control not allowed inside "+_r(e),Error:new Error};var i=t._1;return i!==void 0?1+xt(e,i)|0:1;case 1:throw{RE_EXN_ID:Y,_1:"Wait statement not allowed inside "+_r(e),Error:new Error};case 2:if(t._2===void 0)return 0;throw{RE_EXN_ID:Y,_1:"Delayed assignments not allowed inside "+_r(e),Error:new Error};case 6:n=t._1;continue;case 7:return xt(e,t._1)+xt(e,t._2)|0;case 8:return um(te(function(o){return xt(e,o)},t._0));default:return 0}}}function __(e,n){if(q(e,{_0:1})||q(e,{_0:3})||e===1){if(xt(e,n)===0)return;throw{RE_EXN_ID:Y,_1:"Event control not allowed inside "+_r(e),Error:new Error}}if(q(e,{_0:2})&&xt(e,n)!==1)throw{RE_EXN_ID:Y,_1:"Must be one and one only event control inside always_ff",Error:new Error}}function g_(e,n){if(typeof e=="number")return it(n);var t=e._0;return t!==1&&t<3?it(n):Ld(n)}function y_(e){if(typeof e!="number")switch(e.TAG|0){case 0:var n=e._0;return n===0?void 0:n;case 1:case 2:throw{RE_EXN_ID:Y,_1:"Delay type not supported in continuously assignments to variables yet",Error:new Error}}}function Od(e,n){var t=n[2],r=n[1],i=n[0],o=nu(e.env,i);if(o!==void 0)if(o)switch(o._0){case 0:Pe(e,t);var l=y_(r),a=Ld({TAG:2,_0:0,_1:i,_2:l,_3:t}),u={TAG:4,_0:"always_comb",_1:a},s=Je(e.env,i,{_0:3});return Pr({env:s,out:e.out},u);case 1:throw{RE_EXN_ID:Y,_1:"Not allowed to write continuously to variable with initialisation: "+i,Error:new Error};case 2:case 3:throw{RE_EXN_ID:Y,_1:"Not allowed to write continuously to already claimed variable: "+i,Error:new Error}}else return Pe(e,t),Pr(e,{TAG:3,_0:i,_1:r,_2:t});else throw{RE_EXN_ID:Y,_1:"Undefined reference: "+i,Error:new Error}}function w_(e,n,t){if(t.length===2){var r=ru(I(t,0)),i=I(t,1),o;switch(e){case"buf":o=i;break;case"not":o={TAG:2,_0:i};break;default:o=ae("impossible gate")}return[r,n,o]}throw{RE_EXN_ID:Y,_1:"Expected two arguments to gate",Error:new Error}}function k_(e){switch(e){case"and":return 2;case"or":return 3;case"xor":return 4;default:return ae("impossible gate")}}function E_(e,n,t){if(t.length===3){var r=ru(I(t,0)),i=k_(e),o=I(t,1),l=I(t,2),a={TAG:3,_0:o,_1:i,_2:l};return[r,n,a]}throw{RE_EXN_ID:Y,_1:"Expected three arguments to gate",Error:new Error}}function x_(e,n){if(n.length===3){var t=ru(I(n,0)),r={TAG:2,_0:{TAG:3,_0:I(n,1),_1:3,_2:I(n,2)}};return[t,e,r]}throw{RE_EXN_ID:Y,_1:"Expected three arguments to gate",Error:new Error}}function S_(e,n,t){if(e==="not"||e==="buf")return w_(e,n,t);if(e==="and"||e==="or")return E_(e,n,t);if(e==="nor")return x_(n,t);throw{RE_EXN_ID:Y,_1:"Unsupported gate: "+e,Error:new Error}}function b_(e,n){return Od(e,S_(n[0],n[1],n[2]))}function T_(e){return q(e,{_0:1})||q(e,{_0:3})?!0:q(e,{_0:2})}function N_(e,n){var t=n[1],r=n[0],i=Id(r);__(i,t);var o=Yl(e.env,T_(i),e,t),l=g_(i,t);return Pr(o,{TAG:4,_0:r,_1:l})}function C_(e,n){switch(n.TAG|0){case 0:var t=ze(p_,e,n._0);return Pr(t,n);case 1:var r=ze(v_,e,n._2);return Pr(r,n);case 2:var i=n._1,o=n._0;return ze(function(l,a){return b_(l,[o,i,a])},e,n._2);case 3:return Od(e,[n._0,n._1,n._2]);case 4:return N_(e,[n._0,n._1])}}function A_(e){return ze(C_,u_,e).out}function P_(e){return n_(e)?e:{RE_EXN_ID:"JsError",_1:e}}function I_(e){var n=ws(vd,!0),t=ks(n),r=Gt.useState(function(){return t}),i=r[1],o=r[0],l=function(w){on(i,function(E){return bs(E)?Wh(E):E})},a=function(w){var E=w.target.checked;on(i,function(x){return{vmodule:x.vmodule,status:x.status,env:x.env,cont_env:x.cont_env,proc_env:x.proc_env,queue:x.queue,monitor:x.monitor,output:x.output,time:x.time,process_nba_first:E}})},u=Gt.useState(function(){return Ar(dl,"empty.sv")}),s=u[1],v=u[0],m=function(w){var E=e_(v);if(E.TAG===0){var x;try{x=l_(A_(E._0))}catch(j){var D=P_(j);if(D.RE_EXN_ID===Y){window.alert("Elaboration failed: "+D._1);return}if(D.RE_EXN_ID===t_){window.alert("Compilation failed: "+D._1);return}throw D}var A=ks(ws(x,o.process_nba_first));return on(i,function(j){return A})}window.alert("Could not parse Verilog code: "+E._0)},p=function(w){on(s,function(E){return w.target.value}),w.preventDefault()},h=function(w){var E=w.target.value;on(s,function(x){return Ar(dl,E)}),w.preventDefault()},_="Simulation time: "+String(o.time)+" ("+bh(o.status)+")",y=gn(kh(o.env),function(w){var E=w[0];return N.jsx("li",{children:E+": "+On(w[1])},E)}),C=tl(o.cont_env,function(w,E){return N.jsx("li",{children:I(o.vmodule.conts,w).lhs+"("+String(w)+"): "+On(E)},String(w))}),d=tl(o.proc_env,function(w,E){return N.jsx("li",{children:"state = "+rh(E.state)+", pc = "+String(E.pc)},String(w))}),c=gn(o.queue,function(w){var E=w[1],x=w[0],D=tl(E.active,function(Q,J){var Oe=Es(o,x,Q);return N.jsx("li",{children:ll(o.vmodule.conts,J),className:Oe?"active":"",onClick:function(Nn){return on(i,function(b){return Es(b,x,Q)?Gh(b,Q):b})}},ul(J))}),A=gn(E.inactive,function(Q){return N.jsx("li",{children:ll(o.vmodule.conts,Q)},ul(Q))}),j=gn(E.nba,function(Q){return N.jsx("li",{children:ll(o.vmodule.conts,Q)},ul(Q))}),de=xs(o,x),ke=Ss(o,x);return N.jsxs("li",{children:[N.jsx("b",{children:"Time: "+String(x)}),N.jsxs("ul",{children:[N.jsxs("li",{children:["Active:",N.jsx("ul",{children:D})]}),N.jsxs("li",{children:["Inactive:",N.jsx("ul",{children:A})],className:de?"active":"",onClick:function(Q){return on(i,function(J){return xs(J,x)?qh(J):J})}}),N.jsxs("li",{children:["NBA:",N.jsx("ul",{children:j})],className:ke?"active":"",onClick:function(Q){return on(i,function(J){return Ss(J,x)?Uh(J):J})}})]})]},"Time"+String(x))}),f=lh(o.monitor),g=gn(Eh(dl),function(w){return N.jsx("option",{children:w},w)}),S=bs(o);return N.jsx("table",{children:N.jsx("tbody",{children:N.jsxs("tr",{children:[N.jsxs("td",{children:[N.jsxs("div",{children:[N.jsx("select",{children:g,defaultValue:"empty.sv",onChange:h}),N.jsxs("label",{children:[N.jsx("input",{checked:o.process_nba_first,type:"checkbox",onChange:a}),"Process NBA events first"],id:"nba-checkbox",title:"Control for the semantics of NBA events, see 00/d_concurrency.sv"})]}),N.jsx("div",{children:N.jsx("textarea",{cols:60,rows:20,value:v,onChange:p})}),N.jsx("div",{children:N.jsx("button",{children:"Parse",onClick:m})})]}),N.jsxs("td",{children:[N.jsx("p",{children:"Normalised Verilog module:",id:"code-render-title"}),N.jsx("div",{children:oh(o.vmodule,o.proc_env),id:"code-render"})]}),N.jsxs("td",{children:[N.jsx("p",{children:_,className:S?"active":"",id:"simulation-time",onClick:l}),N.jsx("p",{children:"Environment:"}),N.jsx("ul",{children:y}),N.jsx("p",{children:"Drivers (continuous assignments):"}),N.jsx("ul",{children:C}),N.jsx("p",{children:"Processes:"}),N.jsx("ol",{children:d}),N.jsx("p",{children:"Events:",className:""}),N.jsx("ul",{children:c}),N.jsx("p",{children:"Monitor:"}),N.jsx("p",{children:f})]}),N.jsxs("td",{children:[N.jsx("p",{children:"Output:",id:"output"}),N.jsx("pre",{children:o.output})]})]})}),id:"main-table"})}var z_=I_;function D_(e){if(e!==void 0)return Zt(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}var Vd={exports:{}},Me={},$d={exports:{}},jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(b,P){var z=b.length;b.push(P);e:for(;0<z;){var O=z-1>>>1,X=b[O];if(0<i(X,P))b[O]=P,b[z]=X,z=O;else break e}}function t(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var P=b[0],z=b.pop();if(z!==P){b[0]=z;e:for(var O=0,X=b.length,Cn=X>>>1;O<Cn;){var He=2*(O+1)-1,Jn=b[He],Qe=He+1,vn=b[Qe];if(0>i(Jn,z))Qe<X&&0>i(vn,Jn)?(b[O]=vn,b[Qe]=z,O=Qe):(b[O]=Jn,b[He]=z,O=He);else if(Qe<X&&0>i(vn,z))b[O]=vn,b[Qe]=z,O=Qe;else break e}}return P}function i(b,P){var z=b.sortIndex-P.sortIndex;return z!==0?z:b.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],v=1,m=null,p=3,h=!1,_=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(b){for(var P=t(s);P!==null;){if(P.callback===null)r(s);else if(P.startTime<=b)r(s),P.sortIndex=P.expirationTime,n(u,P);else break;P=t(s)}}function g(b){if(y=!1,f(b),!_)if(t(u)!==null)_=!0,Oe(S);else{var P=t(s);P!==null&&Nn(g,P.startTime-b)}}function S(b,P){_=!1,y&&(y=!1,d(x),x=-1),h=!0;var z=p;try{for(f(P),m=t(u);m!==null&&(!(m.expirationTime>P)||b&&!j());){var O=m.callback;if(typeof O=="function"){m.callback=null,p=m.priorityLevel;var X=O(m.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?m.callback=X:m===t(u)&&r(u),f(P)}else r(u);m=t(u)}if(m!==null)var Cn=!0;else{var He=t(s);He!==null&&Nn(g,He.startTime-P),Cn=!1}return Cn}finally{m=null,p=z,h=!1}}var w=!1,E=null,x=-1,D=5,A=-1;function j(){return!(e.unstable_now()-A<D)}function de(){if(E!==null){var b=e.unstable_now();A=b;var P=!0;try{P=E(!0,b)}finally{P?ke():(w=!1,E=null)}}else w=!1}var ke;if(typeof c=="function")ke=function(){c(de)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,J=Q.port2;Q.port1.onmessage=de,ke=function(){J.postMessage(null)}}else ke=function(){C(de,0)};function Oe(b){E=b,w||(w=!0,ke())}function Nn(b,P){x=C(function(){b(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){_||h||(_=!0,Oe(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(b){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var z=p;p=P;try{return b()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var z=p;p=b;try{return P()}finally{p=z}},e.unstable_scheduleCallback=function(b,P,z){var O=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?O+z:O):z=O,b){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=z+X,b={id:v++,callback:P,priorityLevel:b,startTime:z,expirationTime:X,sortIndex:-1},z>O?(b.sortIndex=z,n(s,b),t(u)===null&&b===t(s)&&(y?(d(x),x=-1):y=!0,Nn(g,z-O))):(b.sortIndex=X,n(u,b),_||h||(_=!0,Oe(S))),b},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(b){var P=p;return function(){var z=p;p=P;try{return b.apply(this,arguments)}finally{p=z}}}})(jd);$d.exports=jd;var R_=$d.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=Gt,Re=R_;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gd=new Set,Ir={};function _t(e,n){Ut(e,n),Ut(e+"Capture",n)}function Ut(e,n){for(Ir[e]=n,e=0;e<n.length;e++)Gd.add(n[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,M_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ms={},Ls={};function L_(e){return Zl.call(Ls,e)?!0:Zl.call(Ms,e)?!1:M_.test(e)?Ls[e]=!0:(Ms[e]=!0,!1)}function O_(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V_(e,n,t,r){if(n===null||typeof n>"u"||O_(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function we(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new we(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var iu=/[\-:]([a-z])/g;function ou(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(iu,ou);ce[n]=new we(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(iu,ou);ce[n]=new we(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(iu,ou);ce[n]=new we(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function lu(e,n,t,r){var i=ce.hasOwnProperty(n)?ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(V_(n,t,i,r)&&(t=null),r||i===null?L_(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Tn=Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),St=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),au=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),qd=Symbol.for("react.provider"),Ud=Symbol.for("react.context"),uu=Symbol.for("react.forward_ref"),ea=Symbol.for("react.suspense"),na=Symbol.for("react.suspense_list"),su=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Bd=Symbol.for("react.offscreen"),Os=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,fl;function dr(e){if(fl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);fl=n&&n[1]||""}return`
`+fl+e}var pl=!1;function vl(e,n){if(!e||pl)return"";pl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{pl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?dr(e):""}function $_(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=vl(e.type,!1),e;case 11:return e=vl(e.type.render,!1),e;case 1:return e=vl(e.type,!0),e;default:return""}}function ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bt:return"Fragment";case St:return"Portal";case Jl:return"Profiler";case au:return"StrictMode";case ea:return"Suspense";case na:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ud:return(e.displayName||"Context")+".Consumer";case qd:return(e._context.displayName||"Context")+".Provider";case uu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case su:return n=e.displayName||null,n!==null?n:ta(e.type)||"Memo";case Pn:n=e._payload,e=e._init;try{return ta(e(n))}catch{}}return null}function j_(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ta(n);case 8:return n===au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function F_(e){var n=Wd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fi(e){e._valueTracker||(e._valueTracker=F_(e))}function Hd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Wd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ra(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Vs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Hn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Qd(e,n){n=n.checked,n!=null&&lu(e,"checked",n,!1)}function ia(e,n){Qd(e,n);var t=Hn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?oa(e,n.type,t):n.hasOwnProperty("defaultValue")&&oa(e,n.type,Hn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $s(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function oa(e,n,t){(n!=="number"||Yi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var fr=Array.isArray;function Lt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Hn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function la(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function js(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(fr(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Hn(t)}}function Xd(e,n){var t=Hn(n.value),r=Hn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Fs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Kd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function aa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Kd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,Yd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function zr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G_=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){G_.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),yr[n]=yr[e]})});function Zd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||yr.hasOwnProperty(e)&&yr[e]?(""+n).trim():n+"px"}function Jd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Zd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var q_=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ua(e,n){if(n){if(q_[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function sa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var da=null,Ot=null,Vt=null;function Gs(e){if(e=Zr(e)){if(typeof da!="function")throw Error(k(280));var n=e.stateNode;n&&(n=No(n),da(e.stateNode,e.type,n))}}function ef(e){Ot?Vt?Vt.push(e):Vt=[e]:Ot=e}function nf(){if(Ot){var e=Ot,n=Vt;if(Vt=Ot=null,Gs(e),n)for(e=0;e<n.length;e++)Gs(n[e])}}function tf(e,n){return e(n)}function rf(){}var ml=!1;function of(e,n,t){if(ml)return e(n,t);ml=!0;try{return tf(e,n,t)}finally{ml=!1,(Ot!==null||Vt!==null)&&(rf(),nf())}}function Dr(e,n){var t=e.stateNode;if(t===null)return null;var r=No(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var fa=!1;if(En)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){fa=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{fa=!1}function U_(e,n,t,r,i,o,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(v){this.onError(v)}}var wr=!1,Zi=null,Ji=!1,pa=null,B_={onError:function(e){wr=!0,Zi=e}};function W_(e,n,t,r,i,o,l,a,u){wr=!1,Zi=null,U_.apply(B_,arguments)}function H_(e,n,t,r,i,o,l,a,u){if(W_.apply(this,arguments),wr){if(wr){var s=Zi;wr=!1,Zi=null}else throw Error(k(198));Ji||(Ji=!0,pa=s)}}function gt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function lf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function qs(e){if(gt(e)!==e)throw Error(k(188))}function Q_(e){var n=e.alternate;if(!n){if(n=gt(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return qs(i),e;if(o===r)return qs(i),n;o=o.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function af(e){return e=Q_(e),e!==null?uf(e):null}function uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=uf(e);if(n!==null)return n;e=e.sibling}return null}var sf=Re.unstable_scheduleCallback,Us=Re.unstable_cancelCallback,X_=Re.unstable_shouldYield,K_=Re.unstable_requestPaint,Z=Re.unstable_now,Y_=Re.unstable_getCurrentPriorityLevel,du=Re.unstable_ImmediatePriority,cf=Re.unstable_UserBlockingPriority,eo=Re.unstable_NormalPriority,Z_=Re.unstable_LowPriority,df=Re.unstable_IdlePriority,xo=null,dn=null;function J_(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:t0,e0=Math.log,n0=Math.LN2;function t0(e){return e>>>=0,e===0?32:31-(e0(e)/n0|0)|0}var vi=64,mi=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~i;a!==0?r=pr(a):(o&=l,o!==0&&(r=pr(o)))}else l=t&~i,l!==0?r=pr(l):o!==0&&(r=pr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-en(n),i=1<<t,r|=e[t],n&=~i;return r}function r0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-en(o),a=1<<l,u=i[l];u===-1?(!(a&t)||a&r)&&(i[l]=r0(a,n)):u<=n&&(e.expiredLanes|=a),o&=~a}}function va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ff(){var e=vi;return vi<<=1,!(vi&4194240)&&(vi=64),e}function hl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-en(n),e[n]=t}function o0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-en(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function fu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-en(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var L=0;function pf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vf,pu,mf,hf,_f,ma=!1,hi=[],$n=null,jn=null,Fn=null,Rr=new Map,Mr=new Map,zn=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bs(e,n){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Rr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(n.pointerId)}}function or(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Zr(n),n!==null&&pu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function a0(e,n,t,r,i){switch(n){case"focusin":return $n=or($n,e,n,t,r,i),!0;case"dragenter":return jn=or(jn,e,n,t,r,i),!0;case"mouseover":return Fn=or(Fn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Rr.set(o,or(Rr.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mr.set(o,or(Mr.get(o)||null,e,n,t,r,i)),!0}return!1}function gf(e){var n=ot(e.target);if(n!==null){var t=gt(n);if(t!==null){if(n=t.tag,n===13){if(n=lf(t),n!==null){e.blockedOn=n,_f(e.priority,function(){mf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ha(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ca=r,t.target.dispatchEvent(r),ca=null}else return n=Zr(t),n!==null&&pu(n),e.blockedOn=t,!1;n.shift()}return!0}function Ws(e,n,t){Ri(e)&&t.delete(n)}function u0(){ma=!1,$n!==null&&Ri($n)&&($n=null),jn!==null&&Ri(jn)&&(jn=null),Fn!==null&&Ri(Fn)&&(Fn=null),Rr.forEach(Ws),Mr.forEach(Ws)}function lr(e,n){e.blockedOn===n&&(e.blockedOn=null,ma||(ma=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,u0)))}function Lr(e){function n(i){return lr(i,e)}if(0<hi.length){lr(hi[0],e);for(var t=1;t<hi.length;t++){var r=hi[t];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&lr($n,e),jn!==null&&lr(jn,e),Fn!==null&&lr(Fn,e),Rr.forEach(n),Mr.forEach(n),t=0;t<zn.length;t++)r=zn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<zn.length&&(t=zn[0],t.blockedOn===null);)gf(t),t.blockedOn===null&&zn.shift()}var $t=Tn.ReactCurrentBatchConfig,to=!0;function s0(e,n,t,r){var i=L,o=$t.transition;$t.transition=null;try{L=1,vu(e,n,t,r)}finally{L=i,$t.transition=o}}function c0(e,n,t,r){var i=L,o=$t.transition;$t.transition=null;try{L=4,vu(e,n,t,r)}finally{L=i,$t.transition=o}}function vu(e,n,t,r){if(to){var i=ha(e,n,t,r);if(i===null)Tl(e,n,r,ro,t),Bs(e,r);else if(a0(i,e,n,t,r))r.stopPropagation();else if(Bs(e,r),n&4&&-1<l0.indexOf(e)){for(;i!==null;){var o=Zr(i);if(o!==null&&vf(o),o=ha(e,n,t,r),o===null&&Tl(e,n,r,ro,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Tl(e,n,r,null,t)}}var ro=null;function ha(e,n,t,r){if(ro=null,e=cu(r),e=ot(e),e!==null)if(n=gt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=lf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ro=e,null}function yf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y_()){case du:return 1;case cf:return 4;case eo:case Z_:return 16;case df:return 536870912;default:return 16}default:return 16}}var Mn=null,mu=null,Mi=null;function wf(){if(Mi)return Mi;var e,n=mu,t=n.length,r,i="value"in Mn?Mn.value:Mn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function Li(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _i(){return!0}function Hs(){return!1}function Le(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_i:Hs,this.isPropagationStopped=Hs,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),n}var Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Le(Jt),Yr=H({},Jt,{view:0,detail:0}),d0=Le(Yr),_l,gl,ar,So=H({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(_l=e.screenX-ar.screenX,gl=e.screenY-ar.screenY):gl=_l=0,ar=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:gl}}),Qs=Le(So),f0=H({},So,{dataTransfer:0}),p0=Le(f0),v0=H({},Yr,{relatedTarget:0}),yl=Le(v0),m0=H({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=Le(m0),_0=H({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),g0=Le(_0),y0=H({},Jt,{data:0}),Xs=Le(y0),w0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=E0[e])?!!n[e]:!1}function _u(){return x0}var S0=H({},Yr,{key:function(e){if(e.key){var n=w0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b0=Le(S0),T0=H({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ks=Le(T0),N0=H({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),C0=Le(N0),A0=H({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),P0=Le(A0),I0=H({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=Le(I0),D0=[9,13,27,32],gu=En&&"CompositionEvent"in window,kr=null;En&&"documentMode"in document&&(kr=document.documentMode);var R0=En&&"TextEvent"in window&&!kr,kf=En&&(!gu||kr&&8<kr&&11>=kr),Ys=String.fromCharCode(32),Zs=!1;function Ef(e,n){switch(e){case"keyup":return D0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function M0(e,n){switch(e){case"compositionend":return xf(n);case"keypress":return n.which!==32?null:(Zs=!0,Ys);case"textInput":return e=n.data,e===Ys&&Zs?null:e;default:return null}}function L0(e,n){if(Tt)return e==="compositionend"||!gu&&Ef(e,n)?(e=wf(),Mi=mu=Mn=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kf&&n.locale!=="ko"?null:n.data;default:return null}}var O0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!O0[e.type]:n==="textarea"}function Sf(e,n,t,r){ef(r),n=io(n,"onChange"),0<n.length&&(t=new hu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Er=null,Or=null;function V0(e){Mf(e,0)}function bo(e){var n=At(e);if(Hd(n))return e}function $0(e,n){if(e==="change")return n}var bf=!1;if(En){var wl;if(En){var kl="oninput"in document;if(!kl){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),kl=typeof ec.oninput=="function"}wl=kl}else wl=!1;bf=wl&&(!document.documentMode||9<document.documentMode)}function nc(){Er&&(Er.detachEvent("onpropertychange",Tf),Or=Er=null)}function Tf(e){if(e.propertyName==="value"&&bo(Or)){var n=[];Sf(n,Or,e,cu(e)),of(V0,n)}}function j0(e,n,t){e==="focusin"?(nc(),Er=n,Or=t,Er.attachEvent("onpropertychange",Tf)):e==="focusout"&&nc()}function F0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(Or)}function G0(e,n){if(e==="click")return bo(n)}function q0(e,n){if(e==="input"||e==="change")return bo(n)}function U0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var tn=typeof Object.is=="function"?Object.is:U0;function Vr(e,n){if(tn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Zl.call(n,i)||!tn(e[i],n[i]))return!1}return!0}function tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,n){var t=tc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=tc(t)}}function Nf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Nf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cf(){for(var e=window,n=Yi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Yi(e.document)}return n}function yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function B0(e){var n=Cf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Nf(t.ownerDocument.documentElement,t)){if(r!==null&&yu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rc(t,o);var l=rc(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var W0=En&&"documentMode"in document&&11>=document.documentMode,Nt=null,_a=null,xr=null,ga=!1;function ic(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ga||Nt==null||Nt!==Yi(r)||(r=Nt,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Vr(xr,r)||(xr=r,r=io(_a,"onSelect"),0<r.length&&(n=new hu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Nt)))}function gi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ct={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},El={},Af={};En&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete Ct.animationend.animation,delete Ct.animationiteration.animation,delete Ct.animationstart.animation),"TransitionEvent"in window||delete Ct.transitionend.transition);function To(e){if(El[e])return El[e];if(!Ct[e])return e;var n=Ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Af)return El[e]=n[t];return e}var Pf=To("animationend"),If=To("animationiteration"),zf=To("animationstart"),Df=To("transitionend"),Rf=new Map,oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,n){Rf.set(e,n),_t(n,[e])}for(var xl=0;xl<oc.length;xl++){var Sl=oc[xl],H0=Sl.toLowerCase(),Q0=Sl[0].toUpperCase()+Sl.slice(1);Kn(H0,"on"+Q0)}Kn(Pf,"onAnimationEnd");Kn(If,"onAnimationIteration");Kn(zf,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Df,"onTransitionEnd");Ut("onMouseEnter",["mouseout","mouseover"]);Ut("onMouseLeave",["mouseout","mouseover"]);Ut("onPointerEnter",["pointerout","pointerover"]);Ut("onPointerLeave",["pointerout","pointerover"]);_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_t("onBeforeInput",["compositionend","keypress","textInput","paste"]);_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X0=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function lc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,H_(r,n,void 0,e),e.currentTarget=null}function Mf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;lc(i,a,s),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;lc(i,a,s),o=u}}}if(Ji)throw e=pa,Ji=!1,pa=null,e}function F(e,n){var t=n[xa];t===void 0&&(t=n[xa]=new Set);var r=e+"__bubble";t.has(r)||(Lf(n,e,2,!1),t.add(r))}function bl(e,n,t){var r=0;n&&(r|=4),Lf(t,e,r,n)}var yi="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[yi]){e[yi]=!0,Gd.forEach(function(t){t!=="selectionchange"&&(X0.has(t)||bl(t,!1,e),bl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[yi]||(n[yi]=!0,bl("selectionchange",!1,n))}}function Lf(e,n,t,r){switch(yf(n)){case 1:var i=s0;break;case 4:i=c0;break;default:i=vu}t=i.bind(null,n,t,e),i=void 0,!fa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Tl(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=ot(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}of(function(){var s=o,v=cu(t),m=[];e:{var p=Rf.get(e);if(p!==void 0){var h=hu,_=e;switch(e){case"keypress":if(Li(t)===0)break e;case"keydown":case"keyup":h=b0;break;case"focusin":_="focus",h=yl;break;case"focusout":_="blur",h=yl;break;case"beforeblur":case"afterblur":h=yl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=C0;break;case Pf:case If:case zf:h=h0;break;case Df:h=P0;break;case"scroll":h=d0;break;case"wheel":h=z0;break;case"copy":case"cut":case"paste":h=g0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ks}var y=(n&4)!==0,C=!y&&e==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var c=s,f;c!==null;){f=c;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Dr(c,d),g!=null&&y.push(jr(c,g,f)))),C)break;c=c.return}0<y.length&&(p=new h(p,_,null,t,v),m.push({event:p,listeners:y}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==ca&&(_=t.relatedTarget||t.fromElement)&&(ot(_)||_[xn]))break e;if((h||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,h?(_=t.relatedTarget||t.toElement,h=s,_=_?ot(_):null,_!==null&&(C=gt(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(h=null,_=s),h!==_)){if(y=Qs,g="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ks,g="onPointerLeave",d="onPointerEnter",c="pointer"),C=h==null?p:At(h),f=_==null?p:At(_),p=new y(g,c+"leave",h,t,v),p.target=C,p.relatedTarget=f,g=null,ot(v)===s&&(y=new y(d,c+"enter",_,t,v),y.target=f,y.relatedTarget=C,g=y),C=g,h&&_)n:{for(y=h,d=_,c=0,f=y;f;f=kt(f))c++;for(f=0,g=d;g;g=kt(g))f++;for(;0<c-f;)y=kt(y),c--;for(;0<f-c;)d=kt(d),f--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break n;y=kt(y),d=kt(d)}y=null}else y=null;h!==null&&ac(m,p,h,y,!1),_!==null&&C!==null&&ac(m,C,_,y,!0)}}e:{if(p=s?At(s):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var S=$0;else if(Js(p))if(bf)S=q0;else{S=F0;var w=j0}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=G0);if(S&&(S=S(e,s))){Sf(m,S,t,v);break e}w&&w(e,p,s),e==="focusout"&&(w=p._wrapperState)&&w.controlled&&p.type==="number"&&oa(p,"number",p.value)}switch(w=s?At(s):window,e){case"focusin":(Js(w)||w.contentEditable==="true")&&(Nt=w,_a=s,xr=null);break;case"focusout":xr=_a=Nt=null;break;case"mousedown":ga=!0;break;case"contextmenu":case"mouseup":case"dragend":ga=!1,ic(m,t,v);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":ic(m,t,v)}var E;if(gu)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Tt?Ef(e,t)&&(x="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(kf&&t.locale!=="ko"&&(Tt||x!=="onCompositionStart"?x==="onCompositionEnd"&&Tt&&(E=wf()):(Mn=v,mu="value"in Mn?Mn.value:Mn.textContent,Tt=!0)),w=io(s,x),0<w.length&&(x=new Xs(x,e,null,t,v),m.push({event:x,listeners:w}),E?x.data=E:(E=xf(t),E!==null&&(x.data=E)))),(E=R0?M0(e,t):L0(e,t))&&(s=io(s,"onBeforeInput"),0<s.length&&(v=new Xs("onBeforeInput","beforeinput",null,t,v),m.push({event:v,listeners:s}),v.data=E))}Mf(m,n)})}function jr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function io(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dr(e,t),o!=null&&r.unshift(jr(e,o,i)),o=Dr(e,n),o!=null&&r.push(jr(e,o,i))),e=e.return}return r}function kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ac(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var a=t,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,i?(u=Dr(t,o),u!=null&&l.unshift(jr(t,u,a))):i||(u=Dr(t,o),u!=null&&l.push(jr(t,u,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var K0=/\r\n?/g,Y0=/\u0000|\uFFFD/g;function uc(e){return(typeof e=="string"?e:""+e).replace(K0,`
`).replace(Y0,"")}function wi(e,n,t){if(n=uc(n),uc(e)!==n&&t)throw Error(k(425))}function oo(){}var ya=null,wa=null;function ka(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ea=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,sc=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof sc<"u"?function(e){return sc.resolve(null).then(e).catch(eg)}:Ea;function eg(e){setTimeout(function(){throw e})}function Nl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Lr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Lr(n)}function Gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function cc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),un="__reactFiber$"+er,Fr="__reactProps$"+er,xn="__reactContainer$"+er,xa="__reactEvents$"+er,ng="__reactListeners$"+er,tg="__reactHandles$"+er;function ot(e){var n=e[un];if(n)return n;for(var t=e.parentNode;t;){if(n=t[xn]||t[un]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cc(e);e!==null;){if(t=e[un])return t;e=cc(e)}return n}e=t,t=e.parentNode}return null}function Zr(e){return e=e[un]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function No(e){return e[Fr]||null}var Sa=[],Pt=-1;function Yn(e){return{current:e}}function G(e){0>Pt||(e.current=Sa[Pt],Sa[Pt]=null,Pt--)}function $(e,n){Pt++,Sa[Pt]=e.current,e.current=n}var Qn={},he=Yn(Qn),be=Yn(!1),dt=Qn;function Bt(e,n){var t=e.type.contextTypes;if(!t)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function lo(){G(be),G(he)}function dc(e,n,t){if(he.current!==Qn)throw Error(k(168));$(he,n),$(be,t)}function Of(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,j_(e)||"Unknown",i));return H({},t,r)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,dt=he.current,$(he,e),$(be,be.current),!0}function fc(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Of(e,n,dt),r.__reactInternalMemoizedMergedChildContext=e,G(be),G(he),$(he,e)):G(be),$(be,t)}var _n=null,Co=!1,Cl=!1;function Vf(e){_n===null?_n=[e]:_n.push(e)}function rg(e){Co=!0,Vf(e)}function Zn(){if(!Cl&&_n!==null){Cl=!0;var e=0,n=L;try{var t=_n;for(L=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}_n=null,Co=!1}catch(i){throw _n!==null&&(_n=_n.slice(e+1)),sf(du,Zn),i}finally{L=n,Cl=!1}}return null}var It=[],zt=0,uo=null,so=0,je=[],Fe=0,ft=null,yn=1,wn="";function tt(e,n){It[zt++]=so,It[zt++]=uo,uo=e,so=n}function $f(e,n,t){je[Fe++]=yn,je[Fe++]=wn,je[Fe++]=ft,ft=e;var r=yn;e=wn;var i=32-en(r)-1;r&=~(1<<i),t+=1;var o=32-en(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,yn=1<<32-en(n)+i|t<<i|r,wn=o+e}else yn=1<<o|t<<i|r,wn=e}function wu(e){e.return!==null&&(tt(e,1),$f(e,1,0))}function ku(e){for(;e===uo;)uo=It[--zt],It[zt]=null,so=It[--zt],It[zt]=null;for(;e===ft;)ft=je[--Fe],je[Fe]=null,wn=je[--Fe],je[Fe]=null,yn=je[--Fe],je[Fe]=null}var De=null,Ie=null,U=!1,Ze=null;function jf(e,n){var t=qe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function pc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,De=e,Ie=Gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,De=e,Ie=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ft!==null?{id:yn,overflow:wn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=qe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,De=e,Ie=null,!0):!1;default:return!1}}function ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ta(e){if(U){var n=Ie;if(n){var t=n;if(!pc(e,n)){if(ba(e))throw Error(k(418));n=Gn(t.nextSibling);var r=De;n&&pc(e,n)?jf(r,t):(e.flags=e.flags&-4097|2,U=!1,De=e)}}else{if(ba(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,De=e}}}function vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function ki(e){if(e!==De)return!1;if(!U)return vc(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ka(e.type,e.memoizedProps)),n&&(n=Ie)){if(ba(e))throw Ff(),Error(k(418));for(;n;)jf(e,n),n=Gn(n.nextSibling)}if(vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ie=Gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ie=null}}else Ie=De?Gn(e.stateNode.nextSibling):null;return!0}function Ff(){for(var e=Ie;e;)e=Gn(e.nextSibling)}function Wt(){Ie=De=null,U=!1}function Eu(e){Ze===null?Ze=[e]:Ze.push(e)}var ig=Tn.ReactCurrentBatchConfig;function Ke(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var co=Yn(null),fo=null,Dt=null,xu=null;function Su(){xu=Dt=fo=null}function bu(e){var n=co.current;G(co),e._currentValue=n}function Na(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function jt(e,n){fo=e,xu=Dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Se=!0),e.firstContext=null)}function Be(e){var n=e._currentValue;if(xu!==e)if(e={context:e,memoizedValue:n,next:null},Dt===null){if(fo===null)throw Error(k(308));Dt=e,fo.dependencies={lanes:0,firstContext:e}}else Dt=Dt.next=e;return n}var lt=null;function Tu(e){lt===null?lt=[e]:lt.push(e)}function Gf(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Tu(n)):(t.next=i.next,i.next=t),n.interleaved=t,Sn(e,r)}function Sn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var In=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function qn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Sn(e,t)}return i=r.interleaved,i===null?(n.next=n,Tu(r)):(n.next=i.next,i.next=n),r.interleaved=n,Sn(e,t)}function Oi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,fu(e,t)}}function mc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function po(e,n,t,r){var i=e.updateQueue;In=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?o=s:l.next=s,l=u;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==l&&(a===null?v.firstBaseUpdate=s:a.next=s,v.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,v=s=u=null,a=o;do{var p=a.lane,h=a.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,y=a;switch(p=n,h=t,y.tag){case 1:if(_=y.payload,typeof _=="function"){m=_.call(h,m,p);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,p=typeof _=="function"?_.call(h,m,p):_,p==null)break e;m=H({},m,p);break e;case 2:In=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(s=v=h,u=m):v=v.next=h,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(v===null&&(u=m),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);vt|=l,e.lanes=l,e.memoizedState=m}}function hc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Uf=new Fd.Component().refs;function Ca(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ao={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Bn(e),o=kn(r,i);o.payload=n,t!=null&&(o.callback=t),n=qn(e,o,i),n!==null&&(nn(n,e,i,r),Oi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Bn(e),o=kn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=qn(e,o,i),n!==null&&(nn(n,e,i,r),Oi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=Bn(e),i=kn(t,r);i.tag=2,n!=null&&(i.callback=n),n=qn(e,i,r),n!==null&&(nn(n,e,r,t),Oi(n,e,r))}};function _c(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Vr(t,r)||!Vr(i,o):!0}function Bf(e,n,t){var r=!1,i=Qn,o=n.contextType;return typeof o=="object"&&o!==null?o=Be(o):(i=Te(n)?dt:he.current,r=n.contextTypes,o=(r=r!=null)?Bt(e,i):Qn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ao,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function gc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ao.enqueueReplaceState(n,n.state,null)}function Aa(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Uf,Nu(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Be(o):(o=Te(n)?dt:he.current,i.context=Bt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ca(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ao.enqueueReplaceState(i,i.state,null),po(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=i.refs;a===Uf&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Ei(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function yc(e){var n=e._init;return n(e._payload)}function Wf(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Wn(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,g){return c===null||c.tag!==6?(c=Ml(f,d.mode,g),c.return=d,c):(c=i(c,f),c.return=d,c)}function u(d,c,f,g){var S=f.type;return S===bt?v(d,c,f.props.children,g,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Pn&&yc(S)===c.type)?(g=i(c,f.props),g.ref=ur(d,c,f),g.return=d,g):(g=qi(f.type,f.key,f.props,null,d.mode,g),g.ref=ur(d,c,f),g.return=d,g)}function s(d,c,f,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Ll(f,d.mode,g),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function v(d,c,f,g,S){return c===null||c.tag!==7?(c=ct(f,d.mode,g,S),c.return=d,c):(c=i(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ml(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case di:return f=qi(c.type,c.key,c.props,null,d.mode,f),f.ref=ur(d,null,c),f.return=d,f;case St:return c=Ll(c,d.mode,f),c.return=d,c;case Pn:var g=c._init;return m(d,g(c._payload),f)}if(fr(c)||rr(c))return c=ct(c,d.mode,f,null),c.return=d,c;Ei(d,c)}return null}function p(d,c,f,g){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,c,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case di:return f.key===S?u(d,c,f,g):null;case St:return f.key===S?s(d,c,f,g):null;case Pn:return S=f._init,p(d,c,S(f._payload),g)}if(fr(f)||rr(f))return S!==null?null:v(d,c,f,g,null);Ei(d,f)}return null}function h(d,c,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(c,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case di:return d=d.get(g.key===null?f:g.key)||null,u(c,d,g,S);case St:return d=d.get(g.key===null?f:g.key)||null,s(c,d,g,S);case Pn:var w=g._init;return h(d,c,f,w(g._payload),S)}if(fr(g)||rr(g))return d=d.get(f)||null,v(c,d,g,S,null);Ei(c,g)}return null}function _(d,c,f,g){for(var S=null,w=null,E=c,x=c=0,D=null;E!==null&&x<f.length;x++){E.index>x?(D=E,E=null):D=E.sibling;var A=p(d,E,f[x],g);if(A===null){E===null&&(E=D);break}e&&E&&A.alternate===null&&n(d,E),c=o(A,c,x),w===null?S=A:w.sibling=A,w=A,E=D}if(x===f.length)return t(d,E),U&&tt(d,x),S;if(E===null){for(;x<f.length;x++)E=m(d,f[x],g),E!==null&&(c=o(E,c,x),w===null?S=E:w.sibling=E,w=E);return U&&tt(d,x),S}for(E=r(d,E);x<f.length;x++)D=h(E,d,x,f[x],g),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?x:D.key),c=o(D,c,x),w===null?S=D:w.sibling=D,w=D);return e&&E.forEach(function(j){return n(d,j)}),U&&tt(d,x),S}function y(d,c,f,g){var S=rr(f);if(typeof S!="function")throw Error(k(150));if(f=S.call(f),f==null)throw Error(k(151));for(var w=S=null,E=c,x=c=0,D=null,A=f.next();E!==null&&!A.done;x++,A=f.next()){E.index>x?(D=E,E=null):D=E.sibling;var j=p(d,E,A.value,g);if(j===null){E===null&&(E=D);break}e&&E&&j.alternate===null&&n(d,E),c=o(j,c,x),w===null?S=j:w.sibling=j,w=j,E=D}if(A.done)return t(d,E),U&&tt(d,x),S;if(E===null){for(;!A.done;x++,A=f.next())A=m(d,A.value,g),A!==null&&(c=o(A,c,x),w===null?S=A:w.sibling=A,w=A);return U&&tt(d,x),S}for(E=r(d,E);!A.done;x++,A=f.next())A=h(E,d,x,A.value,g),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?x:A.key),c=o(A,c,x),w===null?S=A:w.sibling=A,w=A);return e&&E.forEach(function(de){return n(d,de)}),U&&tt(d,x),S}function C(d,c,f,g){if(typeof f=="object"&&f!==null&&f.type===bt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case di:e:{for(var S=f.key,w=c;w!==null;){if(w.key===S){if(S=f.type,S===bt){if(w.tag===7){t(d,w.sibling),c=i(w,f.props.children),c.return=d,d=c;break e}}else if(w.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Pn&&yc(S)===w.type){t(d,w.sibling),c=i(w,f.props),c.ref=ur(d,w,f),c.return=d,d=c;break e}t(d,w);break}else n(d,w);w=w.sibling}f.type===bt?(c=ct(f.props.children,d.mode,g,f.key),c.return=d,d=c):(g=qi(f.type,f.key,f.props,null,d.mode,g),g.ref=ur(d,c,f),g.return=d,d=g)}return l(d);case St:e:{for(w=f.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=Ll(f,d.mode,g),c.return=d,d=c}return l(d);case Pn:return w=f._init,C(d,c,w(f._payload),g)}if(fr(f))return _(d,c,f,g);if(rr(f))return y(d,c,f,g);Ei(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=i(c,f),c.return=d,d=c):(t(d,c),c=Ml(f,d.mode,g),c.return=d,d=c),l(d)):t(d,c)}return C}var Ht=Wf(!0),Hf=Wf(!1),Jr={},fn=Yn(Jr),Gr=Yn(Jr),qr=Yn(Jr);function at(e){if(e===Jr)throw Error(k(174));return e}function Cu(e,n){switch($(qr,n),$(Gr,e),$(fn,Jr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:aa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=aa(n,e)}G(fn),$(fn,n)}function Qt(){G(fn),G(Gr),G(qr)}function Qf(e){at(qr.current);var n=at(fn.current),t=aa(n,e.type);n!==t&&($(Gr,e),$(fn,t))}function Au(e){Gr.current===e&&(G(fn),G(Gr))}var B=Yn(0);function vo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Al=[];function Pu(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Vi=Tn.ReactCurrentDispatcher,Pl=Tn.ReactCurrentBatchConfig,pt=0,W=null,re=null,oe=null,mo=!1,Sr=!1,Ur=0,og=0;function fe(){throw Error(k(321))}function Iu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!tn(e[t],n[t]))return!1;return!0}function zu(e,n,t,r,i,o){if(pt=o,W=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Vi.current=e===null||e.memoizedState===null?sg:cg,e=t(r,i),Sr){o=0;do{if(Sr=!1,Ur=0,25<=o)throw Error(k(301));o+=1,oe=re=null,n.updateQueue=null,Vi.current=dg,e=t(r,i)}while(Sr)}if(Vi.current=ho,n=re!==null&&re.next!==null,pt=0,oe=re=W=null,mo=!1,n)throw Error(k(300));return e}function Du(){var e=Ur!==0;return Ur=0,e}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?W.memoizedState=oe=e:oe=oe.next=e,oe}function We(){if(re===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var n=oe===null?W.memoizedState:oe.next;if(n!==null)oe=n,re=e;else{if(e===null)throw Error(k(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},oe===null?W.memoizedState=oe=e:oe=oe.next=e}return oe}function Br(e,n){return typeof n=="function"?n(e):n}function Il(e){var n=We(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=re,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,s=o;do{var v=s.lane;if((pt&v)===v)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:v,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=m,l=r):u=u.next=m,W.lanes|=v,vt|=v}s=s.next}while(s!==null&&s!==o);u===null?l=r:u.next=a,tn(r,n.memoizedState)||(Se=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,W.lanes|=o,vt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function zl(e){var n=We(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);tn(o,n.memoizedState)||(Se=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Xf(){}function Kf(e,n){var t=W,r=We(),i=n(),o=!tn(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,Ru(Jf.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||oe!==null&&oe.memoizedState.tag&1){if(t.flags|=2048,Wr(9,Zf.bind(null,t,r,i,n),void 0,null),le===null)throw Error(k(349));pt&30||Yf(t,n,i)}return i}function Yf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Zf(e,n,t,r){n.value=t,n.getSnapshot=r,ep(n)&&np(e)}function Jf(e,n,t){return t(function(){ep(n)&&np(e)})}function ep(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!tn(e,t)}catch{return!0}}function np(e){var n=Sn(e,1);n!==null&&nn(n,e,1,-1)}function wc(e){var n=ln();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},n.queue=e,e=e.dispatch=ug.bind(null,W,e),[n.memoizedState,e]}function Wr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function tp(){return We().memoizedState}function $i(e,n,t,r){var i=ln();W.flags|=e,i.memoizedState=Wr(1|n,t,void 0,r===void 0?null:r)}function Po(e,n,t,r){var i=We();r=r===void 0?null:r;var o=void 0;if(re!==null){var l=re.memoizedState;if(o=l.destroy,r!==null&&Iu(r,l.deps)){i.memoizedState=Wr(n,t,o,r);return}}W.flags|=e,i.memoizedState=Wr(1|n,t,o,r)}function kc(e,n){return $i(8390656,8,e,n)}function Ru(e,n){return Po(2048,8,e,n)}function rp(e,n){return Po(4,2,e,n)}function ip(e,n){return Po(4,4,e,n)}function op(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lp(e,n,t){return t=t!=null?t.concat([e]):null,Po(4,4,op.bind(null,n,e),t)}function Mu(){}function ap(e,n){var t=We();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Iu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function up(e,n){var t=We();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Iu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function sp(e,n,t){return pt&21?(tn(t,n)||(t=ff(),W.lanes|=t,vt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=t)}function lg(e,n){var t=L;L=t!==0&&4>t?t:4,e(!0);var r=Pl.transition;Pl.transition={};try{e(!1),n()}finally{L=t,Pl.transition=r}}function cp(){return We().memoizedState}function ag(e,n,t){var r=Bn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},dp(e))fp(n,t);else if(t=Gf(e,n,t,r),t!==null){var i=ge();nn(t,e,r,i),pp(t,n,r)}}function ug(e,n,t){var r=Bn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(dp(e))fp(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(i.hasEagerState=!0,i.eagerState=a,tn(a,l)){var u=n.interleaved;u===null?(i.next=i,Tu(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=Gf(e,n,i,r),t!==null&&(i=ge(),nn(t,e,r,i),pp(t,n,r))}}function dp(e){var n=e.alternate;return e===W||n!==null&&n===W}function fp(e,n){Sr=mo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function pp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,fu(e,t)}}var ho={readContext:Be,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},sg={readContext:Be,useCallback:function(e,n){return ln().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:kc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,$i(4194308,4,op.bind(null,n,e),t)},useLayoutEffect:function(e,n){return $i(4194308,4,e,n)},useInsertionEffect:function(e,n){return $i(4,2,e,n)},useMemo:function(e,n){var t=ln();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=ln();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ag.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var n=ln();return e={current:e},n.memoizedState=e},useState:wc,useDebugValue:Mu,useDeferredValue:function(e){return ln().memoizedState=e},useTransition:function(){var e=wc(!1),n=e[0];return e=lg.bind(null,e[1]),ln().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=W,i=ln();if(U){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),le===null)throw Error(k(349));pt&30||Yf(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,kc(Jf.bind(null,r,o,e),[e]),r.flags|=2048,Wr(9,Zf.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=ln(),n=le.identifierPrefix;if(U){var t=wn,r=yn;t=(r&~(1<<32-en(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ur++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=og++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},cg={readContext:Be,useCallback:ap,useContext:Be,useEffect:Ru,useImperativeHandle:lp,useInsertionEffect:rp,useLayoutEffect:ip,useMemo:up,useReducer:Il,useRef:tp,useState:function(){return Il(Br)},useDebugValue:Mu,useDeferredValue:function(e){var n=We();return sp(n,re.memoizedState,e)},useTransition:function(){var e=Il(Br)[0],n=We().memoizedState;return[e,n]},useMutableSource:Xf,useSyncExternalStore:Kf,useId:cp,unstable_isNewReconciler:!1},dg={readContext:Be,useCallback:ap,useContext:Be,useEffect:Ru,useImperativeHandle:lp,useInsertionEffect:rp,useLayoutEffect:ip,useMemo:up,useReducer:zl,useRef:tp,useState:function(){return zl(Br)},useDebugValue:Mu,useDeferredValue:function(e){var n=We();return re===null?n.memoizedState=e:sp(n,re.memoizedState,e)},useTransition:function(){var e=zl(Br)[0],n=We().memoizedState;return[e,n]},useMutableSource:Xf,useSyncExternalStore:Kf,useId:cp,unstable_isNewReconciler:!1};function Xt(e,n){try{var t="",r=n;do t+=$_(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Dl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Pa(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var fg=typeof WeakMap=="function"?WeakMap:Map;function vp(e,n,t){t=kn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){go||(go=!0,ja=r),Pa(e,n)},t}function mp(e,n,t){t=kn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Pa(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Pa(e,n),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Ec(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new fg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Tg.bind(null,e,n,t),n.then(e,e))}function xc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Sc(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=kn(-1,1),n.tag=2,qn(t,n,1))),t.lanes|=1),e)}var pg=Tn.ReactCurrentOwner,Se=!1;function _e(e,n,t,r){n.child=e===null?Hf(n,null,t,r):Ht(n,e.child,t,r)}function bc(e,n,t,r,i){t=t.render;var o=n.ref;return jt(n,i),r=zu(e,n,t,r,o,i),t=Du(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,bn(e,n,i)):(U&&t&&wu(n),n.flags|=1,_e(e,n,r,i),n.child)}function Tc(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!qu(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,hp(e,n,o,r,i)):(e=qi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Vr,t(l,r)&&e.ref===n.ref)return bn(e,n,i)}return n.flags|=1,e=Wn(o,r),e.ref=n.ref,e.return=n,n.child=e}function hp(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Vr(o,r)&&e.ref===n.ref)if(Se=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return n.lanes=e.lanes,bn(e,n,i)}return Ia(e,n,t,r,i)}function _p(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(Mt,Ae),Ae|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$(Mt,Ae),Ae|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,$(Mt,Ae),Ae|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,$(Mt,Ae),Ae|=r;return _e(e,n,i,t),n.child}function gp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ia(e,n,t,r,i){var o=Te(t)?dt:he.current;return o=Bt(n,o),jt(n,i),t=zu(e,n,t,r,o,i),r=Du(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,bn(e,n,i)):(U&&r&&wu(n),n.flags|=1,_e(e,n,t,i),n.child)}function Nc(e,n,t,r,i){if(Te(t)){var o=!0;ao(n)}else o=!1;if(jt(n,i),n.stateNode===null)ji(e,n),Bf(n,t,r),Aa(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var u=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=Be(s):(s=Te(t)?dt:he.current,s=Bt(n,s));var v=t.getDerivedStateFromProps,m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&gc(n,l,r,s),In=!1;var p=n.memoizedState;l.state=p,po(n,r,l,i),u=n.memoizedState,a!==r||p!==u||be.current||In?(typeof v=="function"&&(Ca(n,t,v,r),u=n.memoizedState),(a=In||_c(n,t,a,r,p,u,s))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,qf(e,n),a=n.memoizedProps,s=n.type===n.elementType?a:Ke(n.type,a),l.props=s,m=n.pendingProps,p=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=Be(u):(u=Te(t)?dt:he.current,u=Bt(n,u));var h=t.getDerivedStateFromProps;(v=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||p!==u)&&gc(n,l,r,u),In=!1,p=n.memoizedState,l.state=p,po(n,r,l,i);var _=n.memoizedState;a!==m||p!==_||be.current||In?(typeof h=="function"&&(Ca(n,t,h,r),_=n.memoizedState),(s=In||_c(n,t,s,r,p,_,u)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,_,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,_,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=_),l.props=r,l.state=_,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return za(e,n,t,r,o,i)}function za(e,n,t,r,i,o){gp(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&fc(n,t,!1),bn(e,n,o);r=n.stateNode,pg.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Ht(n,e.child,null,o),n.child=Ht(n,null,a,o)):_e(e,n,a,o),n.memoizedState=r.state,i&&fc(n,t,!0),n.child}function yp(e){var n=e.stateNode;n.pendingContext?dc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&dc(e,n.context,!1),Cu(e,n.containerInfo)}function Cc(e,n,t,r,i){return Wt(),Eu(i),n.flags|=256,_e(e,n,t,r),n.child}var Da={dehydrated:null,treeContext:null,retryLane:0};function Ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function wp(e,n,t){var r=n.pendingProps,i=B.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(B,i&1),e===null)return Ta(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Do(l,r,0,null),e=ct(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Ra(t),n.memoizedState=Da,e):Lu(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vg(e,n,l,r,a,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=Wn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Wn(a,o):(o=ct(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?Ra(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Da,r}return o=e.child,e=o.sibling,r=Wn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Lu(e,n){return n=Do({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function xi(e,n,t,r){return r!==null&&Eu(r),Ht(n,e.child,null,t),e=Lu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vg(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=Dl(Error(k(422))),xi(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Do({mode:"visible",children:r.children},i,0,null),o=ct(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Ht(n,e.child,null,l),n.child.memoizedState=Ra(l),n.memoizedState=Da,o);if(!(n.mode&1))return xi(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Dl(o,r,void 0),xi(e,n,l,r)}if(a=(l&e.childLanes)!==0,Se||a){if(r=le,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Sn(e,i),nn(r,e,i,-1))}return Gu(),r=Dl(Error(k(421))),xi(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Ng.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ie=Gn(i.nextSibling),De=n,U=!0,Ze=null,e!==null&&(je[Fe++]=yn,je[Fe++]=wn,je[Fe++]=ft,yn=e.id,wn=e.overflow,ft=n),n=Lu(n,r.children),n.flags|=4096,n)}function Ac(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Na(e.return,n,t)}function Rl(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function kp(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,t,n);else if(e.tag===19)Ac(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(B,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&vo(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Rl(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Rl(n,!0,t,null,o);break;case"together":Rl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ji(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function bn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),vt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function mg(e,n,t){switch(n.tag){case 3:yp(n),Wt();break;case 5:Qf(n);break;case 1:Te(n.type)&&ao(n);break;case 4:Cu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;$(co,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?($(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?wp(e,n,t):($(B,B.current&1),e=bn(e,n,t),e!==null?e.sibling:null);$(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return kp(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,_p(e,n,t)}return bn(e,n,t)}var Ep,Ma,xp,Sp;Ep=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ma=function(){};xp=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,at(fn.current);var o=null;switch(t){case"input":i=ra(e,i),r=ra(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=la(e,i),r=la(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}ua(t,r);var l;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var a=i[s];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ir.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var u=r[s];if(a=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(o||(o=[]),o.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Ir.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&F("scroll",e),o||a===u||(o=[])):(o=o||[]).push(s,u))}t&&(o=o||[]).push("style",t);var s=o;(n.updateQueue=s)&&(n.flags|=4)}};Sp=function(e,n,t,r){t!==r&&(n.flags|=4)};function sr(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function hg(e,n,t){var r=n.pendingProps;switch(ku(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return Te(n.type)&&lo(),pe(n),null;case 3:return r=n.stateNode,Qt(),G(be),G(he),Pu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ki(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ze!==null&&(qa(Ze),Ze=null))),Ma(e,n),pe(n),null;case 5:Au(n);var i=at(qr.current);if(t=n.type,e!==null&&n.stateNode!=null)xp(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return pe(n),null}if(e=at(fn.current),ki(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[un]=n,r[Fr]=o,e=(n.mode&1)!==0,t){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<vr.length;i++)F(vr[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Vs(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":js(r,o),F("invalid",r)}ua(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",""+a]):Ir.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&F("scroll",r)}switch(t){case"input":fi(r),$s(r,o,!0);break;case"textarea":fi(r),Fs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oo)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[un]=n,e[Fr]=r,Ep(e,n,!1,!1),n.stateNode=e;e:{switch(l=sa(t,r),t){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<vr.length;i++)F(vr[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":Vs(e,r),i=ra(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),F("invalid",e);break;case"textarea":js(e,r),i=la(e,r),F("invalid",e);break;default:i=r}ua(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Jd(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Yd(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&zr(e,u):typeof u=="number"&&zr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ir.hasOwnProperty(o)?u!=null&&o==="onScroll"&&F("scroll",e):u!=null&&lu(e,o,u,l))}switch(t){case"input":fi(e),$s(e,r,!1);break;case"textarea":fi(e),Fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Lt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pe(n),null;case 6:if(e&&n.stateNode!=null)Sp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=at(qr.current),at(fn.current),ki(n)){if(r=n.stateNode,t=n.memoizedProps,r[un]=n,(o=r.nodeValue!==t)&&(e=De,e!==null))switch(e.tag){case 3:wi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[un]=n,n.stateNode=r}return pe(n),null;case 13:if(G(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&Ie!==null&&n.mode&1&&!(n.flags&128))Ff(),Wt(),n.flags|=98560,o=!1;else if(o=ki(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[un]=n}else Wt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;pe(n),o=!1}else Ze!==null&&(qa(Ze),Ze=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?ie===0&&(ie=3):Gu())),n.updateQueue!==null&&(n.flags|=4),pe(n),null);case 4:return Qt(),Ma(e,n),e===null&&$r(n.stateNode.containerInfo),pe(n),null;case 10:return bu(n.type._context),pe(n),null;case 17:return Te(n.type)&&lo(),pe(n),null;case 19:if(G(B),o=n.memoizedState,o===null)return pe(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)sr(o,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=vo(e),l!==null){for(n.flags|=128,sr(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return $(B,B.current&1|2),n.child}e=e.sibling}o.tail!==null&&Z()>Kt&&(n.flags|=128,r=!0,sr(o,!1),n.lanes=4194304)}else{if(!r)if(e=vo(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!U)return pe(n),null}else 2*Z()-o.renderingStartTime>Kt&&t!==1073741824&&(n.flags|=128,r=!0,sr(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Z(),n.sibling=null,t=B.current,$(B,r?t&1|2:t&1),n):(pe(n),null);case 22:case 23:return Fu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ae&1073741824&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function _g(e,n){switch(ku(n),n.tag){case 1:return Te(n.type)&&lo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qt(),G(be),G(he),Pu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Au(n),null;case 13:if(G(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(B),null;case 4:return Qt(),null;case 10:return bu(n.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var Si=!1,ve=!1,gg=typeof WeakSet=="function"?WeakSet:Set,T=null;function Rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){K(e,n,r)}else t.current=null}function La(e,n,t){try{t()}catch(r){K(e,n,r)}}var Pc=!1;function yg(e,n){if(ya=to,e=Cf(),yu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,u=-1,s=0,v=0,m=e,p=null;n:for(;;){for(var h;m!==t||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(h=m.firstChild)!==null;)p=m,m=h;for(;;){if(m===e)break n;if(p===t&&++s===i&&(a=l),p===o&&++v===r&&(u=l),(h=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=h}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(wa={focusedElem:e,selectionRange:t},to=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var _=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,C=_.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?y:Ke(n.type,y),C);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){K(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return _=Pc,Pc=!1,_}function br(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&La(n,t,o)}i=i.next}while(i!==r)}}function Io(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Oa(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function bp(e){var n=e.alternate;n!==null&&(e.alternate=null,bp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[un],delete n[Fr],delete n[xa],delete n[ng],delete n[tg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tp(e){return e.tag===5||e.tag===3||e.tag===4}function Ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Va(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(Va(e,n,t),e=e.sibling;e!==null;)Va(e,n,t),e=e.sibling}function $a(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($a(e,n,t),e=e.sibling;e!==null;)$a(e,n,t),e=e.sibling}var ue=null,Ye=!1;function An(e,n,t){for(t=t.child;t!==null;)Np(e,n,t),t=t.sibling}function Np(e,n,t){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(xo,t)}catch{}switch(t.tag){case 5:ve||Rt(t,n);case 6:var r=ue,i=Ye;ue=null,An(e,n,t),ue=r,Ye=i,ue!==null&&(Ye?(e=ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ue.removeChild(t.stateNode));break;case 18:ue!==null&&(Ye?(e=ue,t=t.stateNode,e.nodeType===8?Nl(e.parentNode,t):e.nodeType===1&&Nl(e,t),Lr(e)):Nl(ue,t.stateNode));break;case 4:r=ue,i=Ye,ue=t.stateNode.containerInfo,Ye=!0,An(e,n,t),ue=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&La(t,n,l),i=i.next}while(i!==r)}An(e,n,t);break;case 1:if(!ve&&(Rt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){K(t,n,a)}An(e,n,t);break;case 21:An(e,n,t);break;case 22:t.mode&1?(ve=(r=ve)||t.memoizedState!==null,An(e,n,t),ve=r):An(e,n,t);break;default:An(e,n,t)}}function zc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new gg),n.forEach(function(r){var i=Cg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Xe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ye=!1;break e;case 3:ue=a.stateNode.containerInfo,Ye=!0;break e;case 4:ue=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(ue===null)throw Error(k(160));Np(o,l,i),ue=null,Ye=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){K(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Cp(n,e),n=n.sibling}function Cp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(n,e),rn(e),r&4){try{br(3,e,e.return),Io(3,e)}catch(y){K(e,e.return,y)}try{br(5,e,e.return)}catch(y){K(e,e.return,y)}}break;case 1:Xe(n,e),rn(e),r&512&&t!==null&&Rt(t,t.return);break;case 5:if(Xe(n,e),rn(e),r&512&&t!==null&&Rt(t,t.return),e.flags&32){var i=e.stateNode;try{zr(i,"")}catch(y){K(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Qd(i,o),sa(a,l);var s=sa(a,o);for(l=0;l<u.length;l+=2){var v=u[l],m=u[l+1];v==="style"?Jd(i,m):v==="dangerouslySetInnerHTML"?Yd(i,m):v==="children"?zr(i,m):lu(i,v,m,s)}switch(a){case"input":ia(i,o);break;case"textarea":Xd(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Lt(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?Lt(i,!!o.multiple,o.defaultValue,!0):Lt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fr]=o}catch(y){K(e,e.return,y)}}break;case 6:if(Xe(n,e),rn(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){K(e,e.return,y)}}break;case 3:if(Xe(n,e),rn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Lr(n.containerInfo)}catch(y){K(e,e.return,y)}break;case 4:Xe(n,e),rn(e);break;case 13:Xe(n,e),rn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($u=Z())),r&4&&zc(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(ve=(s=ve)||v,Xe(n,e),ve=s):Xe(n,e),rn(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!v&&e.mode&1)for(T=e,v=e.child;v!==null;){for(m=T=v;T!==null;){switch(p=T,h=p.child,p.tag){case 0:case 11:case 14:case 15:br(4,p,p.return);break;case 1:Rt(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(y){K(r,t,y)}}break;case 5:Rt(p,p.return);break;case 22:if(p.memoizedState!==null){Rc(m);continue}}h!==null?(h.return=p,T=h):Rc(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{i=m.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Zd("display",l))}catch(y){K(e,e.return,y)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(y){K(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Xe(n,e),rn(e),r&4&&zc(e);break;case 21:break;default:Xe(n,e),rn(e)}}function rn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Tp(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zr(i,""),r.flags&=-33);var o=Ic(e);$a(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ic(e);Va(e,a,l);break;default:throw Error(k(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wg(e,n,t){T=e,Ap(e)}function Ap(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Si;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ve;a=Si;var s=ve;if(Si=l,(ve=u)&&!s)for(T=i;T!==null;)l=T,u=l.child,l.tag===22&&l.memoizedState!==null?Mc(i):u!==null?(u.return=l,T=u):Mc(i);for(;o!==null;)T=o,Ap(o),o=o.sibling;T=i,Si=a,ve=s}Dc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):Dc(e)}}function Dc(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ve||Io(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ve)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ke(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&hc(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}hc(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var v=s.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Lr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ve||n.flags&512&&Oa(n)}catch(p){K(n,n.return,p)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function Rc(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function Mc(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Io(4,n)}catch(u){K(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){K(n,i,u)}}var o=n.return;try{Oa(n)}catch(u){K(n,o,u)}break;case 5:var l=n.return;try{Oa(n)}catch(u){K(n,l,u)}}}catch(u){K(n,n.return,u)}if(n===e){T=null;break}var a=n.sibling;if(a!==null){a.return=n.return,T=a;break}T=n.return}}var kg=Math.ceil,_o=Tn.ReactCurrentDispatcher,Ou=Tn.ReactCurrentOwner,Ue=Tn.ReactCurrentBatchConfig,M=0,le=null,ne=null,se=0,Ae=0,Mt=Yn(0),ie=0,Hr=null,vt=0,zo=0,Vu=0,Tr=null,Ee=null,$u=0,Kt=1/0,mn=null,go=!1,ja=null,Un=null,bi=!1,Ln=null,yo=0,Nr=0,Fa=null,Fi=-1,Gi=0;function ge(){return M&6?Z():Fi!==-1?Fi:Fi=Z()}function Bn(e){return e.mode&1?M&2&&se!==0?se&-se:ig.transition!==null?(Gi===0&&(Gi=ff()),Gi):(e=L,e!==0||(e=window.event,e=e===void 0?16:yf(e.type)),e):1}function nn(e,n,t,r){if(50<Nr)throw Nr=0,Fa=null,Error(k(185));Kr(e,t,r),(!(M&2)||e!==le)&&(e===le&&(!(M&2)&&(zo|=t),ie===4&&Dn(e,se)),Ne(e,r),t===1&&M===0&&!(n.mode&1)&&(Kt=Z()+500,Co&&Zn()))}function Ne(e,n){var t=e.callbackNode;i0(e,n);var r=no(e,e===le?se:0);if(r===0)t!==null&&Us(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Us(t),n===1)e.tag===0?rg(Lc.bind(null,e)):Vf(Lc.bind(null,e)),J0(function(){!(M&6)&&Zn()}),t=null;else{switch(pf(r)){case 1:t=du;break;case 4:t=cf;break;case 16:t=eo;break;case 536870912:t=df;break;default:t=eo}t=Op(t,Pp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Pp(e,n){if(Fi=-1,Gi=0,M&6)throw Error(k(327));var t=e.callbackNode;if(Ft()&&e.callbackNode!==t)return null;var r=no(e,e===le?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=wo(e,r);else{n=r;var i=M;M|=2;var o=zp();(le!==e||se!==n)&&(mn=null,Kt=Z()+500,st(e,n));do try{Sg();break}catch(a){Ip(e,a)}while(1);Su(),_o.current=o,M=i,ne!==null?n=0:(le=null,se=0,n=ie)}if(n!==0){if(n===2&&(i=va(e),i!==0&&(r=i,n=Ga(e,i))),n===1)throw t=Hr,st(e,0),Dn(e,r),Ne(e,Z()),t;if(n===6)Dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Eg(i)&&(n=wo(e,r),n===2&&(o=va(e),o!==0&&(r=o,n=Ga(e,o))),n===1))throw t=Hr,st(e,0),Dn(e,r),Ne(e,Z()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:rt(e,Ee,mn);break;case 3:if(Dn(e,r),(r&130023424)===r&&(n=$u+500-Z(),10<n)){if(no(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ea(rt.bind(null,e,Ee,mn),n);break}rt(e,Ee,mn);break;case 4:if(Dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-en(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kg(r/1960))-r,10<r){e.timeoutHandle=Ea(rt.bind(null,e,Ee,mn),r);break}rt(e,Ee,mn);break;case 5:rt(e,Ee,mn);break;default:throw Error(k(329))}}}return Ne(e,Z()),e.callbackNode===t?Pp.bind(null,e):null}function Ga(e,n){var t=Tr;return e.current.memoizedState.isDehydrated&&(st(e,n).flags|=256),e=wo(e,n),e!==2&&(n=Ee,Ee=t,n!==null&&qa(n)),e}function qa(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Eg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!tn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Dn(e,n){for(n&=~Vu,n&=~zo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-en(n),r=1<<t;e[t]=-1,n&=~r}}function Lc(e){if(M&6)throw Error(k(327));Ft();var n=no(e,0);if(!(n&1))return Ne(e,Z()),null;var t=wo(e,n);if(e.tag!==0&&t===2){var r=va(e);r!==0&&(n=r,t=Ga(e,r))}if(t===1)throw t=Hr,st(e,0),Dn(e,n),Ne(e,Z()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,rt(e,Ee,mn),Ne(e,Z()),null}function ju(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(Kt=Z()+500,Co&&Zn())}}function mt(e){Ln!==null&&Ln.tag===0&&!(M&6)&&Ft();var n=M;M|=1;var t=Ue.transition,r=L;try{if(Ue.transition=null,L=1,e)return e()}finally{L=r,Ue.transition=t,M=n,!(M&6)&&Zn()}}function Fu(){Ae=Mt.current,G(Mt)}function st(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Z0(t)),ne!==null)for(t=ne.return;t!==null;){var r=t;switch(ku(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:Qt(),G(be),G(he),Pu();break;case 5:Au(r);break;case 4:Qt();break;case 13:G(B);break;case 19:G(B);break;case 10:bu(r.type._context);break;case 22:case 23:Fu()}t=t.return}if(le=e,ne=e=Wn(e.current,null),se=Ae=n,ie=0,Hr=null,Vu=zo=vt=0,Ee=Tr=null,lt!==null){for(n=0;n<lt.length;n++)if(t=lt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}lt=null}return e}function Ip(e,n){do{var t=ne;try{if(Su(),Vi.current=ho,mo){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mo=!1}if(pt=0,oe=re=W=null,Sr=!1,Ur=0,Ou.current=null,t===null||t.return===null){ie=1,Hr=n,ne=null;break}e:{var o=e,l=t.return,a=t,u=n;if(n=se,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,v=a,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var h=xc(l);if(h!==null){h.flags&=-257,Sc(h,l,a,o,n),h.mode&1&&Ec(o,s,n),n=h,u=s;var _=n.updateQueue;if(_===null){var y=new Set;y.add(u),n.updateQueue=y}else _.add(u);break e}else{if(!(n&1)){Ec(o,s,n),Gu();break e}u=Error(k(426))}}else if(U&&a.mode&1){var C=xc(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Sc(C,l,a,o,n),Eu(Xt(u,a));break e}}o=u=Xt(u,a),ie!==4&&(ie=2),Tr===null?Tr=[o]:Tr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=vp(o,u,n);mc(o,d);break e;case 1:a=u;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Un===null||!Un.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=mp(o,a,n);mc(o,g);break e}}o=o.return}while(o!==null)}Rp(t)}catch(S){n=S,ne===t&&t!==null&&(ne=t=t.return);continue}break}while(1)}function zp(){var e=_o.current;return _o.current=ho,e===null?ho:e}function Gu(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(vt&268435455)&&!(zo&268435455)||Dn(le,se)}function wo(e,n){var t=M;M|=2;var r=zp();(le!==e||se!==n)&&(mn=null,st(e,n));do try{xg();break}catch(i){Ip(e,i)}while(1);if(Su(),M=t,_o.current=r,ne!==null)throw Error(k(261));return le=null,se=0,ie}function xg(){for(;ne!==null;)Dp(ne)}function Sg(){for(;ne!==null&&!X_();)Dp(ne)}function Dp(e){var n=Lp(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,n===null?Rp(e):ne=n,Ou.current=null}function Rp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=_g(t,n),t!==null){t.flags&=32767,ne=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(t=hg(t,n,Ae),t!==null){ne=t;return}if(n=n.sibling,n!==null){ne=n;return}ne=n=e}while(n!==null);ie===0&&(ie=5)}function rt(e,n,t){var r=L,i=Ue.transition;try{Ue.transition=null,L=1,bg(e,n,t,r)}finally{Ue.transition=i,L=r}return null}function bg(e,n,t,r){do Ft();while(Ln!==null);if(M&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(o0(e,o),e===le&&(ne=le=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||bi||(bi=!0,Op(eo,function(){return Ft(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var l=L;L=1;var a=M;M|=4,Ou.current=null,yg(e,t),Cp(t,e),B0(wa),to=!!ya,wa=ya=null,e.current=t,wg(t),K_(),M=a,L=l,Ue.transition=o}else e.current=t;if(bi&&(bi=!1,Ln=e,yo=i),o=e.pendingLanes,o===0&&(Un=null),J_(t.stateNode),Ne(e,Z()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(go)throw go=!1,e=ja,ja=null,e;return yo&1&&e.tag!==0&&Ft(),o=e.pendingLanes,o&1?e===Fa?Nr++:(Nr=0,Fa=e):Nr=0,Zn(),null}function Ft(){if(Ln!==null){var e=pf(yo),n=Ue.transition,t=L;try{if(Ue.transition=null,L=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,yo=0,M&6)throw Error(k(331));var i=M;for(M|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(T=s;T!==null;){var v=T;switch(v.tag){case 0:case 11:case 15:br(8,v,o)}var m=v.child;if(m!==null)m.return=v,T=m;else for(;T!==null;){v=T;var p=v.sibling,h=v.return;if(bp(v),v===s){T=null;break}if(p!==null){p.return=h,T=p;break}T=h}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:br(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,T=d;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){l=T;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,T=f;else e:for(l=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Io(9,a)}}catch(S){K(a,a.return,S)}if(a===l){T=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,T=g;break e}T=a.return}}if(M=i,Zn(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(xo,e)}catch{}r=!0}return r}finally{L=t,Ue.transition=n}}return!1}function Oc(e,n,t){n=Xt(t,n),n=vp(e,n,1),e=qn(e,n,1),n=ge(),e!==null&&(Kr(e,1,n),Ne(e,n))}function K(e,n,t){if(e.tag===3)Oc(e,e,t);else for(;n!==null;){if(n.tag===3){Oc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){e=Xt(t,e),e=mp(n,e,1),n=qn(n,e,1),e=ge(),n!==null&&(Kr(n,1,e),Ne(n,e));break}}n=n.return}}function Tg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,le===e&&(se&t)===t&&(ie===4||ie===3&&(se&130023424)===se&&500>Z()-$u?st(e,0):Vu|=t),Ne(e,n)}function Mp(e,n){n===0&&(e.mode&1?(n=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):n=1);var t=ge();e=Sn(e,n),e!==null&&(Kr(e,n,t),Ne(e,t))}function Ng(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Mp(e,t)}function Cg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Mp(e,t)}var Lp;Lp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||be.current)Se=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Se=!1,mg(e,n,t);Se=!!(e.flags&131072)}else Se=!1,U&&n.flags&1048576&&$f(n,so,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ji(e,n),e=n.pendingProps;var i=Bt(n,he.current);jt(n,t),i=zu(null,n,r,e,i,t);var o=Du();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Te(r)?(o=!0,ao(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nu(n),i.updater=Ao,n.stateNode=i,i._reactInternals=n,Aa(n,r,e,t),n=za(null,n,r,!0,o,t)):(n.tag=0,U&&o&&wu(n),_e(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ji(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Pg(r),e=Ke(r,e),i){case 0:n=Ia(null,n,r,e,t);break e;case 1:n=Nc(null,n,r,e,t);break e;case 11:n=bc(null,n,r,e,t);break e;case 14:n=Tc(null,n,r,Ke(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ke(r,i),Ia(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ke(r,i),Nc(e,n,r,i,t);case 3:e:{if(yp(n),e===null)throw Error(k(387));r=n.pendingProps,o=n.memoizedState,i=o.element,qf(e,n),po(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Xt(Error(k(423)),n),n=Cc(e,n,r,t,i);break e}else if(r!==i){i=Xt(Error(k(424)),n),n=Cc(e,n,r,t,i);break e}else for(Ie=Gn(n.stateNode.containerInfo.firstChild),De=n,U=!0,Ze=null,t=Hf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Wt(),r===i){n=bn(e,n,t);break e}_e(e,n,r,t)}n=n.child}return n;case 5:return Qf(n),e===null&&Ta(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ka(r,i)?l=null:o!==null&&ka(r,o)&&(n.flags|=32),gp(e,n),_e(e,n,l,t),n.child;case 6:return e===null&&Ta(n),null;case 13:return wp(e,n,t);case 4:return Cu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ht(n,null,r,t):_e(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ke(r,i),bc(e,n,r,i,t);case 7:return _e(e,n,n.pendingProps,t),n.child;case 8:return _e(e,n,n.pendingProps.children,t),n.child;case 12:return _e(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,$(co,r._currentValue),r._currentValue=l,o!==null)if(tn(o.value,l)){if(o.children===i.children&&!be.current){n=bn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=kn(-1,t&-t),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Na(o.return,t,n),a.lanes|=t;break}u=u.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Na(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}_e(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,jt(n,t),i=Be(i),r=r(i),n.flags|=1,_e(e,n,r,t),n.child;case 14:return r=n.type,i=Ke(r,n.pendingProps),i=Ke(r.type,i),Tc(e,n,r,i,t);case 15:return hp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ke(r,i),ji(e,n),n.tag=1,Te(r)?(e=!0,ao(n)):e=!1,jt(n,t),Bf(n,r,i),Aa(n,r,i,t),za(null,n,r,!0,e,t);case 19:return kp(e,n,t);case 22:return _p(e,n,t)}throw Error(k(156,n.tag))};function Op(e,n){return sf(e,n)}function Ag(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,n,t,r){return new Ag(e,n,t,r)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pg(e){if(typeof e=="function")return qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uu)return 11;if(e===su)return 14}return 2}function Wn(e,n){var t=e.alternate;return t===null?(t=qe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function qi(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")qu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case bt:return ct(t.children,i,o,n);case au:l=8,i|=8;break;case Jl:return e=qe(12,t,n,i|2),e.elementType=Jl,e.lanes=o,e;case ea:return e=qe(13,t,n,i),e.elementType=ea,e.lanes=o,e;case na:return e=qe(19,t,n,i),e.elementType=na,e.lanes=o,e;case Bd:return Do(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qd:l=10;break e;case Ud:l=9;break e;case uu:l=11;break e;case su:l=14;break e;case Pn:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=qe(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function ct(e,n,t,r){return e=qe(7,e,r,n),e.lanes=t,e}function Do(e,n,t,r){return e=qe(22,e,r,n),e.elementType=Bd,e.lanes=t,e.stateNode={isHidden:!1},e}function Ml(e,n,t){return e=qe(6,e,null,n),e.lanes=t,e}function Ll(e,n,t){return n=qe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ig(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uu(e,n,t,r,i,o,l,a,u){return e=new Ig(e,n,t,a,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=qe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nu(o),e}function zg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:St,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Vp(e){if(!e)return Qn;e=e._reactInternals;e:{if(gt(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Te(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Te(t))return Of(e,t,n)}return n}function $p(e,n,t,r,i,o,l,a,u){return e=Uu(t,r,!0,e,i,o,l,a,u),e.context=Vp(null),t=e.current,r=ge(),i=Bn(t),o=kn(r,i),o.callback=n??null,qn(t,o,i),e.current.lanes=i,Kr(e,i,r),Ne(e,r),e}function Ro(e,n,t,r){var i=n.current,o=ge(),l=Bn(i);return t=Vp(t),n.context===null?n.context=t:n.pendingContext=t,n=kn(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=qn(i,n,l),e!==null&&(nn(e,i,l,o),Oi(e,i,l)),l}function ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Bu(e,n){Vc(e,n),(e=e.alternate)&&Vc(e,n)}function Dg(){return null}var jp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wu(e){this._internalRoot=e}Mo.prototype.render=Wu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Ro(e,n,null,null)};Mo.prototype.unmount=Wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mt(function(){Ro(null,e,null,null)}),n[xn]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var n=hf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<zn.length&&n!==0&&n<zn[t].priority;t++);zn.splice(t,0,e),t===0&&gf(e)}};function Hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $c(){}function Rg(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=ko(l);o.call(s)}}var l=$p(n,r,e,0,null,!1,!1,"",$c);return e._reactRootContainer=l,e[xn]=l.current,$r(e.nodeType===8?e.parentNode:e),mt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var s=ko(u);a.call(s)}}var u=Uu(e,0,!1,null,null,!1,!1,"",$c);return e._reactRootContainer=u,e[xn]=u.current,$r(e.nodeType===8?e.parentNode:e),mt(function(){Ro(n,u,t,r)}),u}function Oo(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=ko(l);a.call(u)}}Ro(n,l,e,i)}else l=Rg(t,n,e,i,r);return ko(l)}vf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=pr(n.pendingLanes);t!==0&&(fu(n,t|1),Ne(n,Z()),!(M&6)&&(Kt=Z()+500,Zn()))}break;case 13:mt(function(){var r=Sn(e,1);if(r!==null){var i=ge();nn(r,e,1,i)}}),Bu(e,1)}};pu=function(e){if(e.tag===13){var n=Sn(e,134217728);if(n!==null){var t=ge();nn(n,e,134217728,t)}Bu(e,134217728)}};mf=function(e){if(e.tag===13){var n=Bn(e),t=Sn(e,n);if(t!==null){var r=ge();nn(t,e,n,r)}Bu(e,n)}};hf=function(){return L};_f=function(e,n){var t=L;try{return L=e,n()}finally{L=t}};da=function(e,n,t){switch(n){case"input":if(ia(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=No(r);if(!i)throw Error(k(90));Hd(r),ia(r,i)}}}break;case"textarea":Xd(e,t);break;case"select":n=t.value,n!=null&&Lt(e,!!t.multiple,n,!1)}};tf=ju;rf=mt;var Mg={usingClientEntryPoint:!1,Events:[Zr,At,No,ef,nf,ju]},cr={findFiberByHostInstance:ot,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Lg={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=af(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||Dg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{xo=Ti.inject(Lg),dn=Ti}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mg;Me.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(n))throw Error(k(200));return zg(e,n,null,t)};Me.createRoot=function(e,n){if(!Hu(e))throw Error(k(299));var t=!1,r="",i=jp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Uu(e,1,!1,null,null,t,!1,r,i),e[xn]=n.current,$r(e.nodeType===8?e.parentNode:e),new Wu(n)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=af(n),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return mt(e)};Me.hydrate=function(e,n,t){if(!Lo(n))throw Error(k(200));return Oo(null,e,n,!0,t)};Me.hydrateRoot=function(e,n,t){if(!Hu(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=jp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=$p(n,null,e,1,t??null,i,!1,o,l),e[xn]=n.current,$r(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Mo(n)};Me.render=function(e,n,t){if(!Lo(n))throw Error(k(200));return Oo(null,e,n,!1,t)};Me.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(k(40));return e._reactRootContainer?(mt(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};Me.unstable_batchedUpdates=ju;Me.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Lo(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Oo(e,n,t,!1,r)};Me.version="18.2.0-next-9e3b772b8-20220608";function Fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fp)}catch(e){console.error(e)}}Fp(),Vd.exports=Me;var Og=Vd.exports,Gp,jc=Og;Gp=jc.createRoot,jc.hydrateRoot;Gp(D_($v(document.querySelector("#root")))).render(N.jsx(Gt.StrictMode,{children:N.jsx(z_,{})}));
