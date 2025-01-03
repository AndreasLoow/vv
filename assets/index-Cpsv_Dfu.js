(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Hc={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),sv=Symbol.for("react.portal"),cv=Symbol.for("react.fragment"),dv=Symbol.for("react.strict_mode"),fv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),mv=Symbol.for("react.forward_ref"),hv=Symbol.for("react.suspense"),_v=Symbol.for("react.memo"),gv=Symbol.for("react.lazy"),es=Symbol.iterator;function yv(e){return e===null||typeof e!="object"?null:(e=es&&e[es]||e["@@iterator"],typeof e=="function"?e:null)}var Qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zc=Object.assign,Kc={};function Jt(e,n,t){this.props=e,this.context=n,this.refs=Kc,this.updater=t||Qc}Jt.prototype.isReactComponent={};Jt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Jt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yc(){}Yc.prototype=Jt.prototype;function Qa(e,n,t){this.props=e,this.context=n,this.refs=Kc,this.updater=t||Qc}var Za=Qa.prototype=new Yc;Za.constructor=Qa;Zc(Za,Jt.prototype);Za.isPureReactComponent=!0;var ns=Array.isArray,Jc=Object.prototype.hasOwnProperty,Ka={current:null},ed={key:!0,ref:!0,__self:!0,__source:!0};function nd(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Jc.call(n,r)&&!ed.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qr,type:e,key:o,ref:l,props:i,_owner:Ka.current}}function wv(e,n){return{$$typeof:Qr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ya(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function Ev(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ts=/\/+/g;function rl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ev(""+e.key):n.toString(36)}function Bi(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qr:case sv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+rl(l,0):r,ns(i)?(t="",e!=null&&(t=e.replace(ts,"$&/")+"/"),Bi(i,n,t,"",function(s){return s})):i!=null&&(Ya(i)&&(i=wv(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ts,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",ns(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+rl(o,a);l+=Bi(o,n,t,u,i)}else if(u=yv(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+rl(o,a++),l+=Bi(o,n,t,u,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function ui(e,n,t){if(e==null)return e;var r=[],i=0;return Bi(e,r,"","",function(o){return n.call(t,o,i++)}),r}function kv(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Pi={transition:null},Sv={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Pi,ReactCurrentOwner:Ka};R.Children={map:ui,forEach:function(e,n,t){ui(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ui(e,function(){n++}),n},toArray:function(e){return ui(e,function(n){return n})||[]},only:function(e){if(!Ya(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Jt;R.Fragment=cv;R.Profiler=fv;R.PureComponent=Qa;R.StrictMode=dv;R.Suspense=hv;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sv;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zc({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Ka.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Jc.call(n,u)&&!ed.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:Qr,type:e.type,key:i,ref:o,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:vv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pv,_context:e},e.Consumer=e};R.createElement=nd;R.createFactory=function(e){var n=nd.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:mv,render:e}};R.isValidElement=Ya;R.lazy=function(e){return{$$typeof:gv,_payload:{_status:-1,_result:e},_init:kv}};R.memo=function(e,n){return{$$typeof:_v,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=Pi.transition;Pi.transition={};try{e()}finally{Pi.transition=n}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,n){return ye.current.useCallback(e,n)};R.useContext=function(e){return ye.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};R.useEffect=function(e,n){return ye.current.useEffect(e,n)};R.useId=function(){return ye.current.useId()};R.useImperativeHandle=function(e,n,t){return ye.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return ye.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return ye.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return ye.current.useMemo(e,n)};R.useReducer=function(e,n,t){return ye.current.useReducer(e,n,t)};R.useRef=function(e){return ye.current.useRef(e)};R.useState=function(e){return ye.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return ye.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return ye.current.useTransition()};R.version="18.2.0";Hc.exports=R;var Gt=Hc.exports;function xv(e,n){return e<n?-1:e===n?0:1}function Tv(e,n){return e?n?0:1:n?-1:0}function rs(e,n){return e===n?0:e<n?-1:e>n||e===e?1:n===n?-1:0}function td(e,n){return e===n?0:e<n?-1:1}function rd(e,n){return e<n?e:n}function bv(e,n){return e>n?e:n}var Wi=function(e,n){for(var t in e)n(t)};function _r(e,n){if(e===n)return 0;var t=typeof e,r=typeof n;switch(t){case"bigint":if(r==="bigint")return rs(e,n);break;case"boolean":if(r==="boolean")return Tv(e,n);break;case"function":if(r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"compare: functional value",Error:new Error};break;case"number":if(r==="number")return rs(e,n);break;case"string":return r==="string"?td(e,n):1;case"undefined":return-1}switch(r){case"string":return-1;case"undefined":return 1;default:if(t==="boolean")return 1;if(r==="boolean")return-1;if(t==="function")return 1;if(r==="function")return-1;if(t==="number")return n===null||n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(r==="number")return e===null||e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e===null)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?1:-1;if(n===null)return e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?-1:1;if(e.BS_PRIVATE_NESTED_SOME_NONE!==void 0)return n.BS_PRIVATE_NESTED_SOME_NONE!==void 0?is(e,n):-1;var i=e.TAG,o=n.TAG;if(i===248)return xv(e[1],n[1]);if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return i<o?-1:1;var l=e.length|0,a=n.length|0;if(l===a)if(Array.isArray(e))for(var u=0;;){var s=u;if(s===l)return 0;var p=_r(e[s],n[s]);if(p!==0)return p;u=s+1|0}else return e instanceof Date&&n instanceof Date?e-n:is(e,n);else if(l<a)for(var v=0;;){var m=v;if(m===l)return-1;var h=_r(e[m],n[m]);if(h!==0)return h;v=m+1|0}else for(var _=0;;){var y=_;if(y===a)return 1;var N=_r(e[y],n[y]);if(N!==0)return N;_=y+1|0}}}function is(e,n){var t={contents:void 0},r={contents:void 0},i=function(v,m){var h=v[2],_=v[1];if(!Object.prototype.hasOwnProperty.call(_,m)||_r(v[0][m],_[m])>0){var y=h.contents;if(!(y!==void 0&&m>=y)){h.contents=m;return}}},o=[e,n,r],l=function(v){return i(o,v)},a=[n,e,t],u=function(v){return i(a,v)};Wi(e,l),Wi(n,u);var s=t.contents,p=r.contents;return s!==void 0?p!==void 0?td(s,p):-1:p!==void 0?1:0}function L(e,n){if(e===n)return!0;var t=typeof e;if(t==="string"||t==="number"||t==="bigint"||t==="boolean"||t==="undefined"||e===null)return!1;var r=typeof n;if(t==="function"||r==="function")throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if(r==="number"||r==="bigint"||r==="undefined"||n===null)return!1;var i=e.TAG,o=n.TAG;if(i===248)return e[1]===n[1];if(i===251)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i!==o)return!1;var l=e.length|0,a=n.length|0;if(l===a)if(Array.isArray(e))for(var u=0;;){var s=u;if(s===l)return!0;if(!L(e[s],n[s]))return!1;u=s+1|0}else{if(e instanceof Date&&n instanceof Date)return!(e>n||e<n);var p={contents:!0},v=function(h){if(!Object.prototype.hasOwnProperty.call(n,h)){p.contents=!1;return}},m=function(h){if(!Object.prototype.hasOwnProperty.call(e,h)||!L(n[h],e[h])){p.contents=!1;return}};return Wi(e,v),p.contents&&Wi(n,m),p.contents}else return!1}function id(e,n){return(typeof e=="number"||typeof e=="bigint")&&(typeof n=="number"||typeof n=="bigint")?e!==n:!L(e,n)}function Av(e,n){return(typeof e=="number"||typeof e=="bigint")&&(typeof n=="number"||typeof n=="bigint")?e>=n:_r(e,n)>=0}function od(e){switch(e){case"BitTrue":return"1";case"BitFalse":return"0";case"BitX":return"x";case"BitZ":return"z"}}function Nv(e){return e==="BitTrue"}function Cv(e){return e==="BitFalse"}function Bv(e,n){return e===n?e:e==="BitZ"?n:n==="BitZ"?e:"BitX"}function Pv(e,n){switch(e){case"BitTrue":return n==="BitZ"?"BitTrue":n;case"BitFalse":return"BitFalse";case"BitX":return n==="BitFalse"?"BitFalse":"BitX";case"BitZ":return n}}function Ov(e,n){switch(e){case"BitTrue":return"BitTrue";case"BitFalse":return n==="BitZ"?"BitFalse":n;case"BitX":return n==="BitTrue"?"BitTrue":"BitX";case"BitZ":return n}}function Rv(e){switch(e){case"BitTrue":return"BitFalse";case"BitFalse":return"BitTrue";case"BitX":case"BitZ":return"BitX"}}function os(e,n){switch(e){case"BitTrue":switch(n){case"BitTrue":return"BitTrue";case"BitFalse":break;case"BitX":case"BitZ":return"BitX"}break;case"BitFalse":return"BitFalse"}return n==="BitFalse"?"BitFalse":"BitX"}function ls(e,n){switch(e){case"BitTrue":return"BitTrue";case"BitFalse":switch(n){case"BitTrue":break;case"BitFalse":return"BitFalse";case"BitX":case"BitZ":return"BitX"}break}return n==="BitTrue"?"BitTrue":"BitX"}function Dv(e,n){switch(e){case"BitTrue":switch(n){case"BitTrue":return"BitFalse";case"BitFalse":return"BitTrue";case"BitX":case"BitZ":return"BitX"}case"BitFalse":switch(n){case"BitTrue":return"BitTrue";case"BitFalse":return"BitFalse";case"BitX":case"BitZ":return"BitX"}case"BitX":case"BitZ":return"BitX"}}function Iv(e,n){switch(e){case"BitTrue":switch(n){case"BitTrue":return"BitFalse";case"BitFalse":return"BitTrue";case"BitX":case"BitZ":return"BitX"}case"BitFalse":switch(n){case"BitTrue":return"BitTrue";case"BitFalse":return"BitFalse";case"BitX":case"BitZ":return"BitX"}case"BitX":case"BitZ":return"BitX"}}function Lv(e,n){switch(e){case"BitTrue":return n==="BitTrue"?"BitTrue":"BitX";case"BitFalse":return n==="BitFalse"?"BitFalse":"BitX";case"BitX":case"BitZ":return"BitX"}}function Mv(e,n){switch(e){case"BitTrue":switch(n){case"BitTrue":return"BitTrue";case"BitFalse":return"BitFalse";case"BitX":case"BitZ":return"BitX"}case"BitFalse":switch(n){case"BitTrue":return"BitFalse";case"BitFalse":return"BitTrue";case"BitX":case"BitZ":return"BitX"}case"BitX":case"BitZ":return"BitX"}}function zv(e,n){switch(e){case"BitTrue":switch(n){case"BitTrue":return"BitFalse";case"BitFalse":return"BitTrue";case"BitX":case"BitZ":return"BitX"}case"BitFalse":switch(n){case"BitTrue":return"BitTrue";case"BitFalse":return"BitFalse";case"BitX":case"BitZ":return"BitX"}case"BitX":case"BitZ":return"BitX"}}function Vv(e,n){return L(e,n)?"BitTrue":"BitFalse"}function Fv(e,n){return e!==n?"BitTrue":"BitFalse"}var il="BitTrue",as="BitFalse",jv="BitX",Gv="BitZ";function us(e,n,t){for(var r=new Array(t),i=0,o=n;i<t;)r[i]=e[o],i=i+1|0,o=o+1|0;return r}function Xi(e,n){for(;;){var t=n,r=e,i=r.length,o=i===0?1:i,l=t.length,a=o-l|0;if(a===0)return r.apply(null,t);if(a>=0)return function(u,s){return function(p){return Xi(u,s.concat([p]))}}(r,t);n=us(t,o,-a|0),e=r.apply(null,us(t,0,o))}}function $v(e,n){var t=e.length;if(t===1)return e(n);switch(t){case 1:return e(n);case 2:return function(r){return e(n,r)};case 3:return function(r,i){return e(n,r,i)};case 4:return function(r,i,o){return e(n,r,i,o)};case 5:return function(r,i,o,l){return e(n,r,i,o,l)};case 6:return function(r,i,o,l,a){return e(n,r,i,o,l,a)};case 7:return function(r,i,o,l,a,u){return e(n,r,i,o,l,a,u)};default:return Xi(e,[n])}}function Hn(e){var n=e.length;return n===1?e:function(t){return $v(e,t)}}function Uv(e,n,t){var r=e.length;if(r===2)return e(n,t);switch(r){case 1:return Xi(e(n),[t]);case 2:return e(n,t);case 3:return function(i){return e(n,t,i)};case 4:return function(i,o){return e(n,t,i,o)};case 5:return function(i,o,l){return e(n,t,i,o,l)};case 6:return function(i,o,l,a){return e(n,t,i,o,l,a)};case 7:return function(i,o,l,a,u){return e(n,t,i,o,l,a,u)};default:return Xi(e,[n,t])}}function Zr(e){var n=e.length;return n===2?e:function(t,r){return Uv(e,t,r)}}function ht(e){return e===void 0?{BS_PRIVATE_NESTED_SOME_NONE:0}:e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function qv(e){if(e!=null)return ht(e)}function Wv(e){if(e!==void 0)return ht(e)}function er(e){if(!(e!==null&&e.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;if(n!==0)return{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}var ld=function(e,n,t){var r,i;i=t.length;var o=[];for(r=0;r<i-1;++r)o.push(t[r]);var l=t[i-1];for(r=0;r<l.length;++r)o.push(l[r]);return e[n].apply(e,o)};function Xv(e,n,t,r){return ld(r,"splice",[e,n,t])}function Ja(e,n){return ld(n,"concat",[e])}function xo(e,n){return n.join(e)}function Hi(e,n,t){return t.slice(e,n)}function at(e,n){return n.filter(Hn(e))}function Hv(e,n){return Wv(n.find(Hn(e)))}function ad(e,n){return n.findIndex(Hn(e))}function $t(e,n){n.forEach(Hn(e))}function te(e,n){return n.map(Hn(e))}function tn(e,n){return n.map(Zr(e))}function Pe(e,n,t){return t.reduce(Zr(e),n)}function Qv(e,n){return n.some(Hn(e))}function ud(e){if(e!==void 0)return er(e);throw new Error("getExn")}function B(e,n){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.res",36,2],Error:new Error};return e[n]}function Y(e,n,t){if(!(n>=0&&n<e.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.res",49,2],Error:new Error};e[n]=t}function Zv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(e[i]);return r}function gn(e,n){return Zv(e,Hn(n))}function Kv(e,n){for(var t=e.length,r=new Array(t),i=0;i<t;++i)r[i]=n(i,e[i]);return r}function ol(e,n){return Kv(e,Zr(n))}function Yv(e,n,t){for(var r=n,i=0,o=e.length;i<o;++i)r=t(r,e[i]);return r}function Jv(e,n,t){return Yv(e,n,Zr(t))}function em(e,n,t,r,i){for(;;){var o=t;if(o===i)return!0;if(!r(e[o],n[o]))return!1;t=o+1|0}}function nm(e,n,t){return em(e,n,0,t,rd(e.length,n.length))}function tm(e,n,t){return nm(e,n,Zr(t))}function rm(e){for(var n=e.length,t=new Array(n),r=new Array(n),i=0;i<n;++i){var o=e[i];t[i]=o[0],r[i]=o[1]}return[t,r]}function im(e,n,t,r,i){for(;;){var o=t,l=n;if(o>=r)return o;var a=e[o];if(!i(a,l))return o;t=o+1|0,n=a}}function om(e,n){var t=e.length;if(t===0||t===1)return t;var r=e[0],i=e[1];if(n(r,i))for(var o=i,l=2;;){var a=l,u=o;if(a>=t)return a;var s=e[a];if(!n(u,s))return a;l=a+1|0,o=s}else return n(i,r)?-im(e,i,2,t,n)|0:1}function Ae(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t}}function je(e){return{v:e,h:1,l:void 0,r:void 0}}function Qi(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function cn(e,n,t){var r=e!==void 0?e.h:0,i=t!==void 0?t.h:0;if(r>(i+2|0)){var o=e.l,l=e.r;return Qi(o,l)?Ae(o,e.v,Ae(l,n,t)):Ae(Ae(o,e.v,l.l),l.v,Ae(l.r,n,t))}if(i<=(r+2|0))return{v:n,h:(r>=i?r:i)+1|0,l:e,r:t};var a=t.l,u=t.r;return Qi(u,a)?Ae(Ae(e,n,a),t.v,u):Ae(Ae(e,n,a.l),a.v,Ae(a.r,t.v,u))}function sd(e,n){var t=e.l;return t!==void 0?cn(sd(t,n),e.v,e.r):(n.contents=e.v,e.r)}function cd(e,n){return e!==void 0?cn(cd(e.l,n),e.v,e.r):je(n)}function dd(e,n){return e!==void 0?cn(e.l,e.v,dd(e.r,n)):je(n)}function Ut(e,n,t){if(e===void 0)return cd(t,n);if(t===void 0)return dd(e,n);var r=e.h,i=t.h;return r>(i+2|0)?cn(e.l,e.v,Ut(e.r,n,t)):i>(r+2|0)?cn(Ut(e,n,t.l),t.v,t.r):Ae(e,n,t)}function jl(e){var n=e.l,t=e.r,r=n!==void 0?jl(n):0,i=t!==void 0?jl(t):0;return(1+r|0)+i|0}function fd(e,n,t){for(;;){var r=n,i=e,o=i.v,l=i.l,a=i.r,u=l!==void 0?fd(l,r,t):r;t[u]=o;var s=u+1|0;if(a===void 0)return s;n=s,e=a}}function lm(e){if(e===void 0)return[];var n=jl(e),t=new Array(n);return fd(e,0,t),t}function Gl(e,n,t){switch(t){case 0:return;case 1:return je(e[n]);case 2:var r=e[n],i=e[n-1|0];return{v:i,h:2,l:je(r),r:void 0};case 3:var o=e[n],l=e[n-1|0],a=e[n-2|0];return{v:l,h:2,l:je(o),r:je(a)};default:var u=t/2|0,s=Gl(e,n,u),p=e[n-u|0],v=Gl(e,(n-u|0)-1|0,(t-u|0)-1|0);return Ae(s,p,v)}}function $l(e,n,t){switch(t){case 0:return;case 1:return je(e[n]);case 2:var r=e[n],i=e[n+1|0];return{v:i,h:2,l:je(r),r:void 0};case 3:var o=e[n],l=e[n+1|0],a=e[n+2|0];return{v:l,h:2,l:je(o),r:je(a)};default:var u=t/2|0,s=$l(e,n,u),p=e[n+u|0],v=$l(e,(n+u|0)+1|0,(t-u|0)-1|0);return Ae(s,p,v)}}function eu(e){var n=e.l;e.l=n.r,n.r=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.l,a=l!==void 0?l.h:0,u=e.h;return n.h=(a>u?a:u)+1|0,n}function nu(e){var n=e.r;e.r=n.l,n.l=e;var t=e.l,r=t!==void 0?t.h:0,i=e.r,o=i!==void 0?i.h:0;e.h=(r>o?r:o)+1|0;var l=n.r,a=l!==void 0?l.h:0,u=e.h;return n.h=(a>u?a:u)+1|0,n}function am(e){var n=e.l,t=nu(n);return e.l=t,eu(e)}function um(e){var n=e.r,t=eu(n);return e.r=t,nu(e)}function si(e){var n=e.l,t=n!==void 0?n.h:0,r=e.r,i=r!==void 0?r.h:0;return e.h=(t>i?t:i)+1|0,e}function sm(e){var n=e.l,t=e.r,r=n!==void 0?n.h:0,i=t!==void 0?t.h:0;if(r>(2+i|0)){var o=n.l,l=n.r;return Qi(o,l)?si(eu(e)):si(am(e))}if(i>(2+r|0)){var a=t.l,u=t.r;return Qi(u,a)?si(nu(e)):si(um(e))}return e.h=(r>i?r:i)+1|0,e}function cm(e,n,t,r){for(;;){var i=t,o=n;if(i>=r)return i;var l=e[i];if(o<=l)return i;t=i+1|0,n=l}}function dm(e){var n=e.length;if(n===0||n===1)return n;var t=e[0],r=e[1];if(t<r)for(var i=r,o=2;;){var l=o,a=i;if(l>=n)return l;var u=e[l];if(a>=u)return l;o=l+1|0,i=u}else return t>r?-cm(e,r,2,n)|0:1}function Ul(e,n){if(e===void 0)return je(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;return n<t?e.l=Ul(r,n):e.r=Ul(i,n),sm(e)}function fm(e){var n=e.length;if(n!==0){var t=dm(e),r;t>=0?r=$l(e,0,t):(t=-t|0,r=Gl(e,t-1|0,t));for(var i=t;i<n;++i)r=Ul(r,e[i]);return r}}function Zi(e,n){if(e===void 0)return je(n);var t=e.v;if(n===t)return e;var r=e.l,i=e.r;if(n<t){var o=Zi(r,n);return o===r?e:cn(o,t,i)}var l=Zi(i,n);return l===i?e:cn(r,t,l)}function ql(e,n){if(e===void 0)return e;var t=e.v,r=e.l,i=e.r;if(n===t){if(r===void 0)return i;if(i===void 0)return r;var o={contents:i.v},l=sd(i,o);return cn(r,o.contents,l)}if(n<t){var a=ql(r,n);return a===r?e:cn(a,t,i)}var u=ql(i,n);return u===i?e:cn(r,t,u)}function pm(e,n){for(var t=n.length,r=e,i=0;i<t;++i){var o=n[i];r=ql(r,o)}return r}function Ki(e,n){var t=e.v,r=e.l,i=e.r;if(n===t)return[r,i];if(n<t){if(r===void 0)return[void 0,e];var o=Ki(r,n);return[o[0],Ut(o[1],t,i)]}if(i===void 0)return[e,void 0];var l=Ki(i,n);return[Ut(r,t,l[0]),l[1]]}function Dn(e,n){if(e===void 0)return n;if(n===void 0)return e;var t=e.h,r=n.h;if(t>=r){if(r===1)return Zi(e,n.v);var i=e.v,o=e.l,l=e.r,a=Ki(n,i);return Ut(Dn(o,a[0]),i,Dn(l,a[1]))}if(t===1)return Zi(n,e.v);var u=n.v,s=n.l,p=n.r,v=Ki(e,u);return Ut(Dn(v[0],s),u,Dn(v[1],p))}var pd=fm,Wl=lm;function vd(e,n){return xo(e,at(function(t){return t!==""},n))}function md(e,n){var t=n.slice(),r=t.shift();return Pe(e,ud(r===void 0?void 0:ht(r)),t)}function hd(e,n){var t=n.length-1|0;return Ja(tn(function(r,i){return i===t?[r]:[r,e]},n),[])}function gr(e){return Pe(Dn,void 0,e)}function vm(e){return Pe(function(n,t){return n+t|0},0,e)}function _d(e,n){if(e!==void 0)return n(er(e))}function rr(e){return ht(e)}var ir;function ci(e){return{TAG:"ValBit",_0:e}}function Mn(e){return"1'b"+od(e._0)}function mm(e){return od(e._0)}function di(e){return{TAG:"ExpVal",_0:e}}function ss(e){return{TAG:"ExpVar",_0:e}}function hm(e){return{TAG:"ExpNot",_0:e}}function _m(e,n){return{TAG:"ExpOp2",_0:e,_1:"LAnd",_2:n}}function gm(e,n){return{TAG:"ExpOp2",_0:e,_1:"LOr",_2:n}}function ym(e,n){return{TAG:"ExpOp2",_0:e,_1:"BAnd",_2:n}}function wm(e,n){return{TAG:"ExpOp2",_0:e,_1:"BOr",_2:n}}function Em(e,n){return{TAG:"ExpOp2",_0:e,_1:"BXOr",_2:n}}function km(e,n){return{TAG:"ExpOp2",_0:e,_1:"Add",_2:n}}function Sm(e,n){return{TAG:"ExpOp2",_0:e,_1:"Eq",_2:n}}function xm(e,n){return{TAG:"ExpOp2",_0:e,_1:"NEq",_2:n}}function Tm(e,n){return{TAG:"ExpOp2",_0:e,_1:"CaseEq",_2:n}}function bm(e,n){return{TAG:"ExpOp2",_0:e,_1:"CaseNEq",_2:n}}function Am(e,n,t){return{TAG:"ExpCond",_0:e,_1:n,_2:t}}function cs(e){return{TAG:"Delay1",_0:e}}function Nm(e,n){return{TAG:"Delay2",_0:e,_1:n}}function Cm(e,n,t){return{TAG:"Delay3",_0:e,_1:n,_2:t}}function Xl(e){return typeof e!="object"?0:e._0}function Hl(e){if(typeof e!="object")return 0;switch(e.TAG){case"Delay1":return e._0;case"Delay2":case"Delay3":return e._1}}function Bm(e){if(typeof e!="object")return 0;switch(e.TAG){case"Delay1":return e._0;case"Delay2":return e._0<e._1?e._0:e._1;case"Delay3":return rd(e._0<e._1?e._0:e._1,e._2)}}function Ql(e){if(typeof e!="object")return 0;switch(e.TAG){case"Delay1":return e._0;case"Delay2":return e._0<e._1?e._0:e._1;case"Delay3":return e._2}}function Pm(e,n){switch(n){case"BitTrue":return Xl(e);case"BitFalse":return Hl(e);case"BitX":return Bm(e);case"BitZ":return Ql(e)}}function gd(e,n){return Pm(e,n._0)}function Om(e){if(typeof e!="object")return 0;switch(e.TAG){case"Delay1":return e._0;case"Delay2":return e._0>e._1?e._0:e._1;case"Delay3":return bv(e._0>e._1?e._0:e._1,e._2)}}function Rm(e,n){return{TAG:"Delay3",_0:Xl(e)+Xl(n)|0,_1:Hl(e)+Hl(n)|0,_2:Ql(e)+Ql(n)|0}}function ll(e,n){switch(e){case"BitTrue":return n==="BitTrue"?"EdgeNone":"EdgeNeg";case"BitFalse":return n==="BitFalse"?"EdgeNone":"EdgePos";case"BitX":switch(n){case"BitTrue":return"EdgePos";case"BitFalse":return"EdgeNeg";case"BitX":case"BitZ":return"EdgeNone"}case"BitZ":switch(n){case"BitTrue":return"EdgePos";case"BitFalse":return"EdgeNeg";case"BitX":case"BitZ":return"EdgeNone"}}}function Dm(e){return{TAG:"EEPos",_0:e}}function Im(e){return{TAG:"EENeg",_0:e}}function al(e){return{TAG:"EEEdge",_0:e}}function Lm(e,n){return{TAG:"EEOr",_0:e,_1:n}}function yd(e){if(!L(e,[]))return md(function(n,t){return{TAG:"EEOr",_0:n,_1:t}},e)}function Mm(e){return{TAG:"TMDelay",_0:e}}function ds(e){return{TAG:"TMEvent",_0:e}}function zm(e){switch(e){case"NetTypeWire":return Bv;case"NetTypeAnd":return Pv;case"NetTypeOr":return Ov}}function wd(e){return typeof e=="object"}function Vm(e){return!(typeof e!="object"&&e!=="ProcInitial")}var Fm=[],jm=[],Gm=[],$m=[],Um=[],Ed={vars:Fm,nets:jm,conts:Gm,procs:$m,finals:Um},ul="Delay0",fs="AssnBlocking",ps="AssnNonBlocking",vs="TMStar";function X(e){throw new Error(e)}var kd={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm=Gt,Wm=Symbol.for("react.element"),Xm=Symbol.for("react.fragment"),Hm=Object.prototype.hasOwnProperty,Qm=qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zm={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Hm.call(n,r)&&!Zm.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Wm,type:e,key:o,ref:l,props:i,_owner:Qm.current}}To.Fragment=Xm;To.jsx=Sd;To.jsxs=Sd;kd.exports=To;var A=kd.exports;function xd(e){return tn(function(n,t){return A.jsx(Gt.Fragment,{children:n},String(t))},e)}function Km(e){switch(e){case"LAnd":return"&&";case"LOr":return"||";case"BAnd":return"&";case"BOr":return"|";case"BXOr":return"^";case"Add":return"+";case"Eq":return"==";case"NEq":return"!=";case"CaseEq":return"===";case"CaseNEq":return"!=="}}function ke(e){switch(e.TAG){case"ExpVal":return Mn(e._0);case"ExpVar":return e._0;case"ExpNot":return"!"+wt(e._0);case"ExpOp2":return wt(e._0)+" "+Km(e._1)+" "+wt(e._2);case"ExpCond":return wt(e._0)+" ? "+wt(e._1)+" : "+wt(e._2)}}function wt(e){switch(e.TAG){case"ExpOp2":case"ExpCond":break;default:return ke(e)}return"("+ke(e)+")"}function Ym(e){return typeof e!="object"?"$time":ke(e._0)}function Td(e){if(typeof e!="object")return"";switch(e.TAG){case"Delay1":return"#"+String(e._0);case"Delay2":return"#("+String(e._0)+", "+String(e._1)+")";case"Delay3":return"#("+String(e._0)+", "+String(e._1)+", "+String(e._2)+")"}}function ms(e){return e!==void 0?"#"+String(e)+" ":""}function Zl(e){if(typeof e!="object")return"0";switch(e.TAG){case"EEPos":return"posedge "+ke(e._0);case"EENeg":return"negedge "+ke(e._0);case"EEEdge":return ke(e._0);case"EEOr":return Zl(e._0)+" or "+Zl(e._1)}}function Jm(e){return typeof e!="object"?"@(*)":e.TAG==="TMDelay"?"#"+String(e._0):"@("+Zl(e._0)+")"}function hs(e,n){return'"'+e+'"'+(n.length===0?"":`,
          `)+xo("",hd(", ",te(Ym,n)))}function bd(e){switch(e.TAG){case"StmtTimingControl":return Jm(e._0);case"StmtWait":return"wait("+ke(e._0)+")";case"StmtAssn":return e._0==="AssnBlocking"?e._1+" = "+ms(e._2)+ke(e._3):e._1+" <= "+ms(e._2)+ke(e._3);case"StmtDisplay":return"$display("+hs(e._0,e._1)+")";case"StmtMonitor":return"$monitor("+hs(e._0,e._1)+")";case"StmtFinish":return"$finish("+ke(e._0)+")";case"StmtGoto":return"goto +"+String(e._0);case"StmtGotoUnless":return"goto +"+String(e._1)+" unless "+ke(e._0)}}function eh(e,n,t,r){var i=bd(t),o=" "+(L(n,r)?i+";":i+`;
`);return L(e,r)?A.jsx("b",{children:o}):o}function nh(e,n){return tn(function(t,r){return eh(e,n.length-1|0,t,r)},n)}function th(e){return vd(" ",["assign",Td(e.delay),e.lhs,"=",ke(e.rhs)+";"])}function rh(e){return e!==void 0?" = "+ke(e):""}function ih(e){return"logic "+e.target+rh(e.init)+";"}function oh(e){switch(e){case"NetTypeWire":return"wire";case"NetTypeAnd":return"wand";case"NetTypeOr":return"wor"}}function lh(e){return vd(" ",[oh(e.type_),Td(e.delay),e.name+";"])}function yr(e){if(typeof e!="object")return e==="ProcInitial"?"initial":"final";switch(e._0){case"Always":return"always";case"AlwaysComb":return"always_comb";case"AlwaysFf":return"always_ff";case"AlwaysLatch":return"always_latch"}}function _s(e,n,t){var r=n.proc_type==="ProcFinal"?"Final block":"Process",i=[A.jsx("span",{children:"// "+r+" "+String(t+1|0),className:"comment"})],o=n.proc_type==="ProcFinal"||B(e,t).state==="ProcStateFinished"?-1:B(e,t).pc,l=Ja([i,[`
`+yr(n.proc_type),` begin
`],nh(o,n.stmts),[`
end`]],[]);return xd(l)}function ah(e){switch(e){case"ProcStateFinished":return"finished";case"ProcStateRunning":return"running";case"ProcStateWaiting":return"waiting"}}function uh(e){return e.TAG==="EventNBA"?A.jsx("li",{children:"nba("+e._1+" <= "+Mn(e._2)+")"},String(e._0)):X("impossible")}function sl(e,n){switch(n.TAG){case"EventContUpdate":var t=n._1;return"update("+B(e,t).lhs+"("+String(t)+")): "+Mn(n._2);case"EventBlockUpdate":return"eval(proc: "+String(n._1+1|0)+", "+n._2+" = "+Mn(n._3)+")";case"EventNBA":return"nba("+n._1+" <= "+Mn(n._2)+")";case"EventEvaluation":return"eval(proc: "+String(n._1+1|0)+")";case"EventDelayedEvaluation":return"eval-d(proc: "+String(n._1+1|0)+")";case"Events":return A.jsxs("ol",{children:["NBA events:",gn(n._1,uh)]})}}function cl(e){return L(e,[])?[]:[xo(`
`,e)]}function sh(e,n){var t=hd(`

`,Ja([cl(te(lh,e.nets)),cl(te(ih,e.vars)),cl(te(th,e.conts)),tn(function(r,i){return _s(n,r,i)},e.procs),tn(function(r,i){return _s(n,r,i)},e.finals)],[]));return xd(t)}function ch(e){return e!==void 0?A.jsx("code",{children:bd({TAG:"StmtMonitor",_0:e[0],_1:e[1]})}):"No monitor"}function dh(e){if(e!==void 0)return er(e);throw{RE_EXN_ID:"Not_found",Error:new Error}}function fh(e,n){if(e!==void 0)return ht(n(er(e)))}function ph(e,n){return fh(e,Hn(n))}function vh(e,n){return e!==void 0?er(e):n}function Ad(e){return e!==void 0}function ve(e){return e!==void 0?e.h:0}function ze(e,n,t,r){var i=ve(e),o=ve(r);return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r}}function sn(e,n){return{k:e,v:n,h:1,l:void 0,r:void 0}}function gs(e,n){return n!==void 0?e!==void 0?e.h>=n.h:!1:!0}function mh(e,n){return e.v===n?e:{k:e.k,v:n,h:e.h,l:e.l,r:e.r}}function ys(e,n,t,r){var i=e!==void 0?e.h:0,o=r!==void 0?r.h:0;if(i>(o+2|0)){var l=e.l,a=e.r;return ve(l)>=ve(a)?ze(l,e.k,e.v,ze(a,n,t,r)):ze(ze(l,e.k,e.v,a.l),a.k,a.v,ze(a.r,n,t,r))}if(o<=(i+2|0))return{k:n,v:t,h:i>=o?i+1|0:o+1|0,l:e,r};var u=r.l,s=r.r;return ve(s)>=ve(u)?ze(ze(e,n,t,u),r.k,r.v,s):ze(ze(e,n,t,u.l),u.k,u.v,ze(u.r,r.k,r.v,s))}function Yi(e){var n=e.l,t=e.r,r=n!==void 0?Yi(n):0,i=t!==void 0?Yi(t):0;return(1+r|0)+i|0}function Nd(e,n,t){for(;;){var r=n,i=e,o=i.k,l=i.l,a=i.r,u=l!==void 0?Nd(l,r,t):r;t[u]=o;var s=u+1|0;if(a===void 0)return s;n=s,e=a}}function Cd(e,n,t){for(;;){var r=n,i=e,o=i.l,l=i.k,a=i.r,u=o!==void 0?Cd(o,r,t):r;t[u]=[l,i.v];var s=u+1|0;if(a===void 0)return s;n=s,e=a}}function hh(e){if(e===void 0)return[];var n=Yi(e),t=new Array(n);return Cd(e,0,t),t}function _h(e){if(e===void 0)return[];var n=Yi(e),t=new Array(n);return Nd(e,0,t),t}function Kl(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return sn(r[0],r[1]);case 2:var i=e[n],o=e[n-1|0],l=o,a=i;return{k:l[0],v:l[1],h:2,l:sn(a[0],a[1]),r:void 0};case 3:var u=e[n],s=e[n-1|0],p=e[n-2|0],v=p,m=s,h=u;return{k:m[0],v:m[1],h:2,l:sn(h[0],h[1]),r:sn(v[0],v[1])};default:var _=t/2|0,y=Kl(e,n,_),N=e[n-_|0],f=Kl(e,(n-_|0)-1|0,(t-_|0)-1|0);return ze(y,N[0],N[1],f)}}function Yl(e,n,t){switch(t){case 0:return;case 1:var r=e[n];return sn(r[0],r[1]);case 2:var i=e[n],o=e[n+1|0],l=o,a=i;return{k:l[0],v:l[1],h:2,l:sn(a[0],a[1]),r:void 0};case 3:var u=e[n],s=e[n+1|0],p=e[n+2|0],v=p,m=s,h=u;return{k:m[0],v:m[1],h:2,l:sn(h[0],h[1]),r:sn(v[0],v[1])};default:var _=t/2|0,y=Yl(e,n,_),N=e[n+_|0],f=Yl(e,(n+_|0)+1|0,(t-_|0)-1|0);return ze(y,N[0],N[1],f)}}function tu(e){var n=e.l;e.l=n.r,n.r=e;var t=ve(e.l),r=ve(e.r);e.h=(t>r?t:r)+1|0;var i=ve(n.l),o=e.h;return n.h=(i>o?i:o)+1|0,n}function ru(e){var n=e.r;e.r=n.l,n.l=e;var t=ve(e.l),r=ve(e.r);e.h=(t>r?t:r)+1|0;var i=ve(n.r),o=e.h;return n.h=(i>o?i:o)+1|0,n}function gh(e){var n=e.l,t=ru(n);return e.l=t,tu(e)}function yh(e){var n=e.r,t=tu(n);return e.r=t,ru(e)}function fi(e){var n=ve(e.l),t=ve(e.r);return e.h=(n>t?n:t)+1|0,e}function wh(e){var n=e.l,t=e.r,r=ve(n),i=ve(t);if(r>(2+i|0)){var o=n.l,l=n.r;return gs(o,l)?fi(tu(e)):fi(gh(e))}if(i>(2+r|0)){var a=t.l,u=t.r;return gs(u,a)?fi(ru(e)):fi(yh(e))}return e.h=(r>i?r:i)+1|0,e}function Eh(e,n){for(;;){var t=e;if(t===void 0)return;var r=t.k;if(n===r)return ht(t.v);e=n<r?t.l:t.r}}function kh(e,n){for(;;){var t=e;if(t!==void 0){var r=t.k;if(n===r)return t.v;e=n<r?t.l:t.r;continue}throw{RE_EXN_ID:"Not_found",Error:new Error}}}function Sh(e,n){for(;;){var t=e;if(t===void 0)return!1;var r=t.k;if(n===r)return!0;e=n<r?t.l:t.r}}function Jl(e,n,t){if(e===void 0)return sn(n,t);var r=e.k;if(n===r)return e.k=n,e.v=t,e;var i=e.l,o=e.r;if(n<r){var l=Jl(i,n,t);e.l=l}else e.r=Jl(o,n,t);return wh(e)}function xh(e){var n=e.length;if(n!==0){var t=om(e,function(l,a){return l[0]<a[0]}),r;t>=0?r=Yl(e,0,t):(t=-t|0,r=Kl(e,t-1|0,t));for(var i=t;i<n;++i){var o=e[i];r=Jl(r,o[0],o[1])}return r}}function Je(e,n,t){if(e===void 0)return sn(n,t);var r=e.k;if(n===r)return mh(e,t);var i=e.v;return n<r?ys(Je(e.l,n,t),r,i,e.r):ys(e.l,r,i,Je(e.r,n,t))}var iu=Sh,Th=hh,Bd=xh,bh=_h,ou=Eh,Br=kh,ws={contents:0};function dn(){var e=ws.contents;return ws.contents=e+1|0,e}function Ah(e){return e.TAG==="EventNBA"?[e._1,e._2]:X("bug: expected EventNBA")}function dl(e){return String(e._0)}var Nh=[],Pd=[],Od=[],Es={active:Nh,inactive:Pd,nba:Od};function Ch(e){if(typeof e!="object")return"running-finals";if(e.TAG==="Running"){var n=e._0;return n!==void 0?"running (proc "+String(n+1|0)+" focused)":"running (no focus)"}var t=e._0;return t!==void 0?"finished("+Mn(t)+")":"finished"}function ks(e){return!(typeof e!="object"||e.TAG!=="Running")}function Bh(e){return typeof e!="object"||e.TAG==="Running"?X("bug: expected Finished"):e._0}function Rd(e,n){var t=Hv(function(r){return r.name===n},e);return t!==void 0?t:X("missing key")}function Ph(e,n){return Rd(e,n).delay}function Oh(e,n){return Qv(function(t){return t.lhs===e},n)}function ea(e,n){return e(n._0)}function Oi(e,n,t){return e(n._0,t._0)}function Rh(e,n){return{TAG:"ValBit",_0:ea(e,n)}}function Me(e,n,t){return{TAG:"ValBit",_0:Oi(e,n,t)}}function na(e){return e._0==="BitTrue"}function V(e,n){for(;;){var t=n;switch(t.TAG){case"ExpVal":return t._0;case"ExpVar":return Br(e,t._0);case"ExpNot":var r=V(e,t._0);return Rh(Rv,r);case"ExpOp2":var i=t._1,o=t._0;switch(i){case"LAnd":var l=V(e,o);if(ea(Cv,l))return l;var a=V(e,t._2);return Me(os,l,a);case"LOr":var u=V(e,o);if(ea(Nv,u))return u;var s=V(e,t._2);return Me(ls,u,s);default:var p=V(e,o),v=V(e,t._2);switch(i){case"LAnd":case"LOr":return X("impossible");case"BAnd":return Me(os,p,v);case"BOr":return Me(ls,p,v);case"BXOr":return Me(Dv,p,v);case"Add":return Me(Iv,p,v);case"Eq":return Me(Mv,p,v);case"NEq":return Me(zv,p,v);case"CaseEq":return Me(Vv,p,v);case"CaseNEq":return Me(Fv,p,v)}}case"ExpCond":var m=t._2,h=t._1,_=V(e,t._0);switch(_._0){case"BitTrue":n=h;continue;case"BitFalse":n=m;continue}var y=V(e,h),N=V(e,m);return Me(Lv,y,N)}}}function Dh(e,n,t){return typeof t!="object"?{TAG:"VTTime",_0:e}:{TAG:"VTValue",_0:V(n,t._0)}}function Ri(e,n){for(;;){var t=e;switch(t.TAG){case"ExpVal":return!1;case"ExpVar":return n===t._0;case"ExpNot":e=t._0;continue;case"ExpOp2":if(Ri(t._0,n))return!0;e=t._2;continue;case"ExpCond":if(Ri(t._0,n)||Ri(t._1,n))return!0;e=t._2;continue}}}function Ih(e,n){return Ri(e.rhs,n)}function Dd(e,n,t){var r=Ph(e,n);return Rm(r,t)}function Lh(e,n,t){for(var r=!1,i=0,o=-1,l=-1,a=function(p){return p.TAG==="EventContUpdate"?p._1===t:!1};!r&&i<e.length;){var u=B(e,i);if(u[0]>n)r=!0;else{var s=ad(a,u[1].active);s!==-1&&(r=!0,o=i,l=s)}i=i+1|0}if(o!==-1)return[o,l]}function Mh(e,n){var t=Hi(0,n,e),r=Hi(n+1|0,e.length,e);return t.concat(r)}function zh(e,n){switch(n){case"RegionActive":return e.active;case"RegionInactive":return e.inactive;case"RegionNBA":return e.nba}}function fl(e,n,t){switch(n){case"RegionActive":return{active:t,inactive:e.inactive,nba:e.nba};case"RegionInactive":return{active:e.active,inactive:t,nba:e.nba};case"RegionNBA":return{active:e.active,inactive:e.inactive,nba:t}}}function wr(e,n,t,r){var i=ad(function(h){return Av(h[0],t)},e);if(i===-1){var o=fl(Es,n,[r]);return e.concat([[t,o]])}if(L(B(e,i)[0],t)){var l=B(e,i)[1],a=zh(l,n).concat([r]),u=fl(l,n,a),s=e.slice();return Y(s,i,[t,u]),s}var p=Hi(0,i,e),v=fl(Es,n,[r]),m=Hi(i,e.length,e);return p.concat([[t,v]]).concat(m)}function hn(e,n){var t=n.pc+1|0;return t===e.stmts.length?{pc:0,state:wd(e.proc_type)?"ProcStateRunning":"ProcStateFinished"}:{pc:t,state:"ProcStateRunning"}}function qt(e,n){var t=e.status;return typeof t!="object"?B(e.vmodule.finals,n):t.TAG==="Running"?B(e.vmodule.procs,n):X("impossible")}function Id(e,n,t){for(;;){var r=e;if(typeof r!="object")return!1;switch(r.TAG){case"EEPos":var i=r._0,o=V(n,i),l=V(t,i);return Oi(ll,l,o)==="EdgePos";case"EENeg":var a=r._0,u=V(n,a),s=V(t,a);return Oi(ll,s,u)==="EdgeNeg";case"EEEdge":var p=r._0,v=V(n,p),m=V(t,p);return Oi(ll,m,v)!=="EdgeNone";case"EEOr":if(Id(r._0,n,t))return!0;e=r._1;continue}}}function Vh(e,n,t){switch(e.TAG){case"StmtTimingControl":var r=e._0;return typeof r!="object"||r.TAG==="TMDelay"?!1:Id(r._0,n,t);case"StmtWait":return na(V(n,e._0));default:return!1}}function Di(e,n,t,r){if(L(Br(e.env,t),Br(r,t))||e.status==="RunningFinals")return e;var i=e.queue.slice(),o=at(function(c){return n!==c[1]?Ih(c[0],t):!1},tn(function(c,d){return[c,d]},e.vmodule.conts)),l=te(function(c){var d=c[0];return[d.delay,[c[1],V(e.env,d.rhs)]]},o),a=function(c,d){var g=d[1],w=g[1],k=g[0],S=Dd(e.vmodule.nets,B(e.vmodule.conts,k).lhs,d[0]),x=gd(S,w),D=Om(S),C=Lh(c,e.time+D|0,k),Q;if(C!==void 0){var he=C[0],j=B(c,he),Z=j[1],We=Z.active.slice();if(We.splice(C[1],1),L(We,[]))Q=Mh(c,he);else{var Le=c.slice();Y(Le,he,[j[0],{active:We,inactive:Z.inactive,nba:Z.nba}]),Q=Le}}else Q=c;return wr(Q,"RegionActive",e.time+x|0,{TAG:"EventContUpdate",_0:dn(),_1:k,_2:w})},u=Pe(a,i,l),s=te(function(c){var d=c[1];return[hn(qt(e,d),c[0]),d]},at(function(c){var d=c[0];return d.state==="ProcStateWaiting"?Vh(B(qt(e,c[1]).stmts,d.pc),e.env,r):!1},tn(function(c,d){return[c,d]},e.proc_env))),p=L(s,[])?e.proc_env:e.proc_env.slice();$t(function(c){Y(p,c[1],c[0])},s);var v=te(function(c){return{TAG:"EventEvaluation",_0:dn(),_1:c[1]}},at(function(c){return c[0].state==="ProcStateRunning"},s)),m=B(u,0),h=m[1],_=h.active.concat(v),y=h.inactive,N=h.nba,f={active:_,inactive:y,nba:N};return Y(u,0,[m[0],f]),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:p,cont_env:e.cont_env,queue:u,monitor:e.monitor,output:e.output,time:e.time}}function Ld(e){if(e.vmodule.finals.length===0)return e;var n=te(function(l){return{pc:0,state:"ProcStateRunning"}},e.vmodule.finals),t=tn(function(l,a){return{TAG:"EventEvaluation",_0:dn(),_1:a}},e.vmodule.finals),r=[],i=[],o={active:t,inactive:r,nba:i};return{vmodule:e.vmodule,status:"RunningFinals",oldstatus:Bh(e.status),env:e.env,proc_env:n,cont_env:e.cont_env,queue:[[e.time,o]],monitor:e.monitor,output:e.output,time:e.time}}function Ss(e,n,t){var r=e.proc_env.slice(),i=B(r,n),o=qt(e,n),l=i.pc+t|0,a=l===o.stmts.length?{pc:0,state:wd(o.proc_type)?"ProcStateRunning":"ProcStateFinished"}:{pc:l,state:i.state};return Y(r,n,a),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:r,cont_env:e.cont_env,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}function Fh(e){return e.TAG==="VTValue"?mm(e._0):X("expected value found time")}function jh(e){return e.TAG==="VTValue"?X("expected time found value"):String(e._0)}function Gh(e,n){for(var t="",r=0,i=0;r<e.length;)if(e[r]==="%"){r=r+1|0;var o=e[r];o==="b"?(t=t.concat(Fh(B(n,i))),i=i+1|0):o==="d"?(t=t.concat(jh(B(n,i))),i=i+1|0):X("unsupported format"),r=r+1|0}else t=t.concat(e[r]),r=r+1|0;return t=t.concat(`
`),t}function $h(e,n){return e.TAG==="VTValue"?n.TAG==="VTValue"?L(e._0,n._0):X("impossible"):n.TAG==="VTValue"?X("impossible"):!0}function Md(e,n,t,r){var i=te(function(u){return Dh(e.time,e.env,u)},t),o=r!==void 0?tm(i,r,$h):!1;if(o)return[i,e.output];var l=Gh(n,i),a=e.output.concat(l);return[i,a]}function Uh(e,n){if(typeof e!="object")return"RunningFinals";if(e.TAG!=="Running")return X("impossible: focusing when finished?");var t=e._0;return t!==void 0?n===t?{TAG:"Running",_0:t}:X("impossible: refocusing?"):{TAG:"Running",_0:n}}function xs(e){return typeof e!="object"?"RunningFinals":e.TAG==="Running"?{TAG:"Running",_0:void 0}:{TAG:"Finished",_0:e._0}}function Ts(e,n,t){var r=B(n.queue,0),i=r[1],o=i.active.slice(),l=dn(),a={TAG:"EventEvaluation",_0:l,_1:t};Xv(e,0,[a],o);var u=i.inactive,s=i.nba,p={active:o,inactive:u,nba:s},v=n.queue.slice();return Y(v,0,[r[0],p]),{vmodule:n.vmodule,status:Uh(n.status,t),oldstatus:n.oldstatus,env:n.env,proc_env:n.proc_env,cont_env:n.cont_env,queue:v,monitor:n.monitor,output:n.output,time:n.time}}function bs(e,n){var t=qt(e,n),r=B(e.proc_env,n),i=B(t.stmts,r.pc);switch(i.TAG){case"StmtTimingControl":var o=i._0;if(typeof o!="object")return X("impossible, all stars should have been preprocessed away");if(o.TAG==="TMDelay"){var l=o._0,a=r.pc,u={pc:a,state:"ProcStateWaiting"},s=e.proc_env.slice();Y(s,n,u);var p=l===0?"RegionInactive":"RegionActive",v=wr(e.queue,p,e.time+l|0,{TAG:"EventDelayedEvaluation",_0:dn(),_1:n});return{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:s,cont_env:e.cont_env,queue:v,monitor:e.monitor,output:e.output,time:e.time}}var m=r.pc,h={pc:m,state:"ProcStateWaiting"},_=e.proc_env.slice();return Y(_,n,h),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:_,cont_env:e.cont_env,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};case"StmtWait":var y=V(e.env,i._0),N=na(y)?hn(t,r):{pc:r.pc,state:"ProcStateWaiting"},f=e.proc_env.slice();return Y(f,n,N),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:f,cont_env:e.cont_env,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};case"StmtAssn":if(i._0==="AssnBlocking"){var c=i._2,d=i._1,g=V(e.env,i._3);if(c!==void 0){var w=r.pc,k={pc:w,state:"ProcStateWaiting"},S=e.proc_env.slice();Y(S,n,k);var x=c===0?"RegionInactive":"RegionActive",D=wr(e.queue,x,e.time+c|0,{TAG:"EventBlockUpdate",_0:dn(),_1:n,_2:d,_3:g});return{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:S,cont_env:e.cont_env,queue:D,monitor:e.monitor,output:e.output,time:e.time}}var C=e.env,Q=Je(e.env,d,g),he=hn(t,r),j=e.proc_env.slice();Y(j,n,he);var Z=e.vmodule,We=e.status,Le=e.oldstatus,Yn=e.cont_env,T=e.queue,P=e.monitor,O=e.output,z=e.time,K={vmodule:Z,status:We,oldstatus:Le,env:Q,proc_env:j,cont_env:Yn,queue:T,monitor:P,output:O,time:z};return Di(K,-1,d,C)}var An=V(e.env,i._3),Xe=hn(t,r),Nn=e.proc_env.slice();Y(Nn,n,Xe);var He=vh(i._2,0),vn=wr(e.queue,"RegionNBA",e.time+He|0,{TAG:"EventNBA",_0:dn(),_1:i._1,_2:An});return{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:Nn,cont_env:e.cont_env,queue:vn,monitor:e.monitor,output:e.output,time:e.time};case"StmtDisplay":var jo=Md(e,i._0,i._1,void 0),Go=hn(t,r),ni=e.proc_env.slice();return Y(ni,n,Go),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:ni,cont_env:e.cont_env,queue:e.queue,monitor:e.monitor,output:jo[1],time:e.time};case"StmtMonitor":var $o=[i._0,i._1,void 0],Uo=hn(t,r),ti=e.proc_env.slice();return Y(ti,n,Uo),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:ti,cont_env:e.cont_env,queue:e.queue,monitor:$o,output:e.output,time:e.time};case"StmtFinish":var qo=V(e.env,i._0),ri=e.status,Wo=r.pc,yt={pc:Wo,state:"ProcStateWaiting"},ii=e.proc_env.slice();Y(ii,n,yt);var Xo=e.vmodule,Ho={TAG:"Finished",_0:qo},oi=e.oldstatus,Qo=e.env,Zo=e.cont_env,Ko=e.queue,Yo=e.monitor,Jo=e.output,el=e.time,li={vmodule:Xo,status:Ho,oldstatus:oi,env:Qo,proc_env:ii,cont_env:Zo,queue:Ko,monitor:Yo,output:Jo,time:el};return typeof ri!="object"||ri.TAG!=="Running"?li:Ld(li);case"StmtGoto":return Ss(e,n,i._0);case"StmtGotoUnless":if(!na(V(e.env,i._0)))return Ss(e,n,i._1);var nl=hn(t,r),ai=e.proc_env.slice();return Y(ai,n,nl),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:ai,cont_env:e.cont_env,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time}}}function pl(e,n,t,r){if(e==="SingleStep"){var i=t.status,o=B(t.proc_env,r).state==="ProcStateRunning"?bs(t,r):t;return(ks(o.status)||i==="RunningFinals")&&B(o.proc_env,r).state==="ProcStateRunning"?Ts(n,o,r):{vmodule:o.vmodule,status:xs(o.status),oldstatus:o.oldstatus,env:o.env,proc_env:o.proc_env,cont_env:o.cont_env,queue:o.queue,monitor:o.monitor,output:o.output,time:o.time}}for(var l=0,a=t.vmodule,u=xs(t.status),s=t.oldstatus,p=t.env,v=t.proc_env,m=t.cont_env,h=t.queue,_=t.monitor,y=t.output,N=t.time,f={vmodule:a,status:u,oldstatus:s,env:p,proc_env:v,cont_env:m,queue:h,monitor:_,output:y,time:N},c=u,d=f;l<=100&&(ks(d.status)||c==="RunningFinals")&&B(d.proc_env,r).state==="ProcStateRunning";)l===100?(window.alert("Out of fuel: possible infinite loop?"),d=Ts(n,d,r)):d=bs(d,r),l=l+1|0;return d}function qh(e,n){var t=B(e,n);if(t.TAG==="Events"){var r=t._1;if(r.length!==1){var i=r.slice();i.shift(),e[n]={TAG:"Events",_0:t._0,_1:i};return}e.splice(n,1);return}e.splice(n,1)}function Wh(e){var n=e.proc_type,t;if(typeof n!="object")t=0;else switch(n._0){case"Always":case"AlwaysFf":t=0;break;case"AlwaysComb":case"AlwaysLatch":t=1;break}return{pc:t,state:"ProcStateRunning"}}function Xh(e,n){return n!==void 0?V(e,n):{TAG:"ValBit",_0:"BitX"}}function As(e){var n=te(function(i){return{TAG:"EventEvaluation",_0:dn(),_1:i[1]}},at(function(i){return Vm(i[0].proc_type)},tn(function(i,o){return[i,o]},e.procs))),t=Bd(gn(e.nets,function(i){return[i.name,{TAG:"ValBit",_0:Oh(i.name,e.conts)?"BitX":"BitZ"}]})),r=Jv(e.vars,t,function(i,o){return Je(i,o.target,Xh(i,o.init))});return{vmodule:e,status:{TAG:"Running",_0:void 0},oldstatus:void 0,env:r,proc_env:gn(e.procs,Wh),cont_env:gn(e.conts,function(i){return{TAG:"ValBit",_0:"BitX"}}),queue:[[0,{active:n,inactive:Pd,nba:Od}]],monitor:void 0,output:"",time:0}}function Hh(e,n,t){var r=V(e.env,n.rhs),i=Dd(e.vmodule.nets,n.lhs,n.delay),o=gd(i,r);return[o,{TAG:"EventContUpdate",_0:dn(),_1:t,_2:r}]}function Ns(e){var n=tn(function(r,i){return Hh(e,r,i)},e.vmodule.conts),t=Pe(function(r,i){return wr(r,"RegionActive",i[0],i[1])},e.queue,n);return{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:e.proc_env,cont_env:e.cont_env,queue:t,monitor:e.monitor,output:e.output,time:e.time}}function Qh(e,n){var t=n.status;if(typeof t!="object")return e===0;if(t.TAG!=="Running")return!1;var r=t._0;if(r===void 0)return!0;var i=B(B(n.queue,0)[1].active,e);return i.TAG==="EventEvaluation"?r===i._1:!1}function Cs(e,n,t){if(!(e.time===n&&Qh(t,e)))return!1;var r=e.queue[0];if(r===void 0)return!0;var i=r[1].active[0];return i!==void 0&&i.TAG==="Events"?t===0:!0}function Zh(e,n,t){if(e.time!==n)return!1;switch(t.TAG){case"EventBlockUpdate":case"EventEvaluation":case"EventDelayedEvaluation":return!0;default:return!1}}function Kh(e,n,t){var r=B(n.queue,0),i=r[1],o=i.active.slice(),l=B(o,t);qh(o,t);var a=i.inactive,u=i.nba,s={active:o,inactive:a,nba:u},p=n.queue.slice();Y(p,0,[r[0],s]);var v=n.vmodule,m=n.status,h=n.oldstatus,_=n.env,y=n.proc_env,N=n.cont_env,f=n.monitor,c=n.output,d=n.time,g={vmodule:v,status:m,oldstatus:h,env:_,proc_env:y,cont_env:N,queue:p,monitor:f,output:c,time:d};switch(l.TAG){case"EventContUpdate":var w=l._1,k=N.slice();Y(k,w,l._2);var S=B(v.conts,w).lhs,x=Rd(v.nets,S),D=md(function(Jn,tl){return Me(zm(x.type_),Jn,tl)},te(function(Jn){return B(k,Jn[1])},at(function(Jn){return Jn[0].lhs===S},tn(function(Jn,tl){return[Jn,tl]},v.conts)))),C=Je(_,S,D),Q=_,he=v,j=m,Z=h,We=y,Le=f,Yn=c,T=d,P={vmodule:he,status:j,oldstatus:Z,env:C,proc_env:We,cont_env:k,queue:p,monitor:Le,output:Yn,time:T};return Di(P,w,S,Q);case"EventBlockUpdate":var O=l._2,z=l._1,K=_,An=Je(_,O,l._3),Xe=B(y,z),Nn=qt(g,z),He=hn(Nn,Xe),vn=y.slice();Y(vn,z,He);var jo=v,Go=m,ni=h,$o=N,Uo=f,ti=c,qo=d,ri={vmodule:jo,status:Go,oldstatus:ni,env:An,proc_env:vn,cont_env:$o,queue:p,monitor:Uo,output:ti,time:qo},Wo=Di(ri,-1,O,K);return pl(e,t,Wo,z);case"EventNBA":return X("impossible: EventNBA cannot be in active region");case"EventEvaluation":return pl(e,t,g,l._1);case"EventDelayedEvaluation":var yt=l._1,ii=qt(g,yt),Xo=B(y,yt),Ho=hn(ii,Xo),oi=y.slice();Y(oi,yt,Ho);var Qo=v,Zo=m,Ko=h,Yo=_,Jo=N,el=f,li=c,nl=d,ai={vmodule:Qo,status:Zo,oldstatus:Ko,env:Yo,proc_env:oi,cont_env:Jo,queue:p,monitor:el,output:li,time:nl};return pl(e,t,ai,yt);case"Events":var Zp=l._1.slice(),Ku=Zp.shift(),Kp=ud(Ku===void 0?void 0:ht(Ku)),Yu=Ah(Kp),Ju=Yu[0],Yp=_,Jp=Je(_,Ju,Yu[1]),ev=v,nv=m,tv=h,rv=y,iv=N,ov=f,lv=c,av=d,uv={vmodule:ev,status:nv,oldstatus:tv,env:Jp,proc_env:rv,cont_env:iv,queue:p,monitor:ov,output:lv,time:av};return Di(uv,-1,Ju,Yp)}}function Bs(e,n){if(!(L(e.status,{TAG:"Running",_0:void 0})&&e.time===n))return!1;var t=B(e.queue,0),r=t[1];return L(r.active,[])?id(r.inactive,[]):!1}function Yh(e){var n=B(e.queue,0),t=n[1],r=t.inactive,i=[],o=t.nba,l={active:r,inactive:i,nba:o},a=e.queue.slice();return Y(a,0,[e.time,l]),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:e.proc_env,cont_env:e.cont_env,queue:a,monitor:e.monitor,output:e.output,time:e.time}}function Ps(e,n){if(!(L(e.status,{TAG:"Running",_0:void 0})&&e.time===n))return!1;var t=B(e.queue,0),r=t[1];return L(r.active,[])&&L(r.inactive,[])?id(r.nba,[]):!1}function Jh(e){var n=B(e.queue,0),t=n[1],r=dn(),i=t.nba,o={TAG:"Events",_0:r,_1:i},l=t.active.concat([o]),a=t.inactive,u=[],s={active:l,inactive:a,nba:u},p=e.queue.slice();return Y(p,0,[e.time,s]),{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:e.proc_env,cont_env:e.cont_env,queue:p,monitor:e.monitor,output:e.output,time:e.time}}function Os(e){if(!(L(e.status,{TAG:"Running",_0:void 0})||e.status==="RunningFinals"))return!1;var n=e.queue.length;if(n===0)return X("impossible");var t=B(e.queue,0)[1];return L(t.active,[])?L(e.status,{TAG:"Running",_0:void 0})?L(t.inactive,[])?L(t.nba,[]):!1:!0:!1}function e_(e){var n=e.monitor;if(n===void 0)return e;var t=n[1],r=n[0],i=Md(e,r,t,n[2]);return{vmodule:e.vmodule,status:e.status,oldstatus:e.oldstatus,env:e.env,proc_env:e.proc_env,cont_env:e.cont_env,queue:e.queue,monitor:[r,t,i[0]],output:i[1],time:e.time}}function n_(e){var n=e.status;if(typeof n!="object")return{vmodule:e.vmodule,status:{TAG:"Finished",_0:e.oldstatus},oldstatus:void 0,env:e.env,proc_env:e.proc_env,cont_env:e.cont_env,queue:e.queue,monitor:e.monitor,output:e.output,time:e.time};if(n.TAG!=="Running"||n._0!==void 0)return X("impossible");var t=e_(e),r=t.queue.slice();if(r.shift(),r.length===0){var i=t.vmodule,o={TAG:"Finished",_0:void 0},l=t.oldstatus,a=t.env,u=t.proc_env,s=t.cont_env,p=t.queue,v=t.monitor,m=t.output,h=t.time,_={vmodule:i,status:o,oldstatus:l,env:a,proc_env:u,cont_env:s,queue:p,monitor:v,output:m,time:h};return Ld(_)}var y=B(r,0);return{vmodule:t.vmodule,status:t.status,oldstatus:t.oldstatus,env:t.env,proc_env:t.proc_env,cont_env:t.cont_env,queue:r,monitor:t.monitor,output:t.output,time:y[0]}}function t_(e){return{TAG:"OAExp",_0:e}}function r_(e){return{TAG:"OAStr",_0:e}}function Rs(e,n){return{TAG:"SStmtTimingControl",_0:e,_1:n}}function Ds(e,n){return{TAG:"SStmtWait",_0:e,_1:n}}function pi(e,n,t,r){return{TAG:"SStmtAssn",_0:e,_1:n,_2:t,_3:r}}function i_(e){return{TAG:"SStmtDisplay",_0:e}}function o_(e){return{TAG:"SStmtMonitor",_0:e}}function Is(e){return{TAG:"SStmtFinish",_0:e}}function l_(e,n){return{TAG:"SStmtIf",_0:e,_1:n}}function a_(e,n,t){return{TAG:"SStmtIfElse",_0:e,_1:n,_2:t}}function u_(e){return{TAG:"SSBlock",_0:e}}function Ls(e,n){return[e,n]}function s_(e){return{TAG:"TLVars",_0:e}}function Ms(e,n,t){return{TAG:"TLNets",_0:e,_1:n,_2:t}}function zs(e,n,t){return{TAG:"TLCont",_0:e,_1:n,_2:t}}function Vs(e,n,t){return{TAG:"TLGates",_0:e,_1:n,_2:t}}function c_(e,n){return{TAG:"TLProc",_0:e,_1:n}}function d_(e){return{TAG:"ParseOk",_0:e}}function f_(e){return{TAG:"ParseFail",_0:e}}function zd(e){switch(e){case"always":return{TAG:"ProcAlways",_0:"Always"};case"always_comb":return{TAG:"ProcAlways",_0:"AlwaysComb"};case"always_ff":return{TAG:"ProcAlways",_0:"AlwaysFf"};case"always_latch":return{TAG:"ProcAlways",_0:"AlwaysLatch"};case"final":return"ProcFinal";case"initial":return"ProcInitial";default:return X("impossible proc type")}}var p_="OATime",v_="OAEmpty";const Vd=ohm.grammar(String.raw`
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

         | "$display" "(" ListOf<OutArg, ","> ")" ";" -- display

         | "$monitor" "(" ListOf<OutArg, ","> ")" ";" -- monitor

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

    OutArg = Exp -- exp
           | "$time" -- time
           | string -- string
           | "" -- empty

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
`),Fd=Vd.createSemantics();Fd.addOperation("translate",{Module(e,n,t,r,i,o,l){return o.children.map(a=>a.translate())},Decl_no_init(e){return Ls(e.translate(),ir)},Decl_init(e,n,t){return Ls(e.translate(),rr(t.translate()))},GateDecl(e,n,t,r){return t.asIteration().children.map(i=>i.translate())},Top_decl(e,n,t){return s_(n.asIteration().children.map(r=>r.translate()))},Top_net(e,n,t){return Ms(e.translate(),ul,n.asIteration().children.map(r=>r.translate()))},Top_net_delay(e,n,t,r){return Ms(e.translate(),n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_cont(e,n,t,r,i){return zs(n.translate(),ul,r.translate())},Top_cont_delay(e,n,t,r,i,o){return zs(t.translate(),n.translate(),i.translate())},Top_gate(e,n,t){return Vs(e.sourceString,ul,n.asIteration().children.map(r=>r.translate()))},Top_gate_delay(e,n,t,r){return Vs(e.sourceString,n.translate(),t.asIteration().children.map(i=>i.translate()))},Top_proc(e,n){return c_(e.sourceString,n.translate())},WireType(e){return this.sourceString},MinTypMax_full(e,n,t,r,i){return t.translate()},MinTypMax_single(e){return e.translate()},DelayCont_single(e,n){return n.translate()},DelayCont_mintypmax(e,n,t,r){return t.translate()},TimeCont_delay(e){return Mm(e.translate())},TimeCont_id(e,n){return ds(al(ss(n.translate())))},TimeCont_event(e,n,t,r){return ds(t.translate())},TimeCont_star(e,n,t,r){return vs},TimeCont_star_no_para(e,n){return vs},Stmt_blocking(e,n,t,r){return pi(fs,e.translate(),ir,t.translate())},Stmt_blocking_delay(e,n,t,r,i){return pi(fs,e.translate(),rr(t.translate()),r.translate())},Stmt_nonblocking(e,n,t,r){return pi(ps,e.translate(),ir,t.translate())},Stmt_nonblocking_delay(e,n,t,r,i){return pi(ps,e.translate(),rr(t.translate()),r.translate())},Stmt_if(e,n,t,r,i){return l_(t.translate(),i.translate())},Stmt_if_else(e,n,t,r,i,o,l){return a_(t.translate(),i.translate(),l.translate())},Stmt_display(e,n,t,r,i){return i_(t.asIteration().children.map(o=>o.translate()))},Stmt_monitor(e,n,t,r,i){return o_(t.asIteration().children.map(o=>o.translate()))},Stmt_finish(e,n){return Is(di(ci(il)))},Stmt_finish_arg(e,n,t,r,i){return Is(t.translate())},Stmt_time_stmt(e,n){return Rs(e.translate(),rr(n.translate()))},Stmt_time(e,n){return Rs(e.translate(),ir)},Stmt_wait_stmt(e,n,t,r,i){return Ds(t.translate(),rr(i.translate()))},Stmt_wait(e,n,t,r,i){return Ds(t.translate(),ir)},Stmt_block(e,n,t){return u_(n.children.map(r=>r.translate()))},Delay_one(e,n,t,r){return cs(t.translate())},Delay_one_no_para(e,n){return cs(n.translate())},Delay_two(e,n,t,r,i,o){return Nm(t.translate(),i.translate())},Delay_three(e,n,t,r,i,o,l,a){return Cm(t.translate(),i.translate(),l.translate())},Event_Exp(e){return e.translate()},Event_Exp_or(e,n,t){return Lm(e.translate(),t.translate())},Event_Exp1_exp(e){return al(e.translate())},Event_Exp1_posedge(e,n){return Dm(n.translate())},Event_Exp1_negedge(e,n){return Im(n.translate())},Event_Exp1_edge(e,n){return al(n.translate())},Exp(e){return e.translate()},Exp_cond(e,n,t,r,i){return Am(e.translate(),t.translate(),i.translate())},Exp1(e){return e.translate()},Exp1_lor(e,n,t){return gm(e.translate(),t.translate())},Exp2(e){return e.translate()},Exp2_land(e,n,t){return _m(e.translate(),t.translate())},Exp3(e){return e.translate()},Exp3_bor(e,n,t){return wm(e.translate(),t.translate())},Exp4(e){return e.translate()},Exp4_bxor(e,n,t){return Em(e.translate(),t.translate())},Exp5(e){return e.translate()},Exp5_band(e,n,t){return ym(e.translate(),t.translate())},Exp6(e){return e.translate()},Exp6_eq(e,n,t){return Sm(e.translate(),t.translate())},Exp6_neq(e,n,t){return xm(e.translate(),t.translate())},Exp6_case_eq(e,n,t){return Tm(e.translate(),t.translate())},Exp6_case_neq(e,n,t){return bm(e.translate(),t.translate())},Exp7(e){return e.translate()},Exp7_add(e,n,t){return km(e.translate(),t.translate())},Exp8(e){return e.translate()},Exp8_not(e,n){return hm(n.translate())},Exp9_id(e){return ss(e.translate())},Exp9_bit(e){return di(e.translate())},Exp9_zero(e){return di(ci(as))},Exp9_one(e){return di(ci(il))},Exp9_paren(e,n,t){return n.translate()},OutArg_exp(e){return t_(e.translate())},OutArg_time(e){return p_},OutArg_string(e){return r_(e.translate())},OutArg_empty(e){return v_},number(e){return parseInt(this.sourceString,10)},bit(e,n){var t;switch(n.sourceString.toLowerCase()){case"1":t=il;break;case"0":t=as;break;case"x":t=jv;break;case"z":t=Gv;break;default:throw"Impossible!"}return ci(t)},string(e,n,t){return n.sourceString},id(e,n){return this.sourceString}});function m_(e){try{const n=Vd.match(e);return d_(Fd(n).translate())}catch(n){if(n instanceof TypeError)return f_(n.message);throw n}}var vl=new Map;function jd(e){var n=vl.get(e),t;if(n!==void 0){var r=n+1|0;vl.set(e,r),t=r}else vl.set(e,1),t=1;return e+("/"+t)}function h_(e){return e==null?!1:typeof e.RE_EXN_ID=="string"}var ct=jd("Compiler.CompileError");function __(e){return{target:e[0],init:e[1]}}function g_(e,n,t){var r=t[0],i;switch(e){case"triand":case"wand":i="NetTypeAnd";break;case"tri":case"wire":i="NetTypeWire";break;case"trior":case"wor":i="NetTypeOr";break;default:i=X("impossible net type")}var o=ph(t[1],function(l){return{lhs:r,delay:"Delay0",rhs:l}});return[{type_:i,name:r,delay:n},o]}function y_(e){if(typeof e!="object")throw{RE_EXN_ID:ct,_1:"Invalid format (%b)",Error:new Error};if(e.TAG==="OAExp")return{TAG:"ETExp",_0:e._0};throw{RE_EXN_ID:ct,_1:"Invalid format (%b)",Error:new Error}}function w_(e){if(typeof e!="object"){if(e==="OATime")return"ETTime";throw{RE_EXN_ID:ct,_1:"Invalid format (%d)",Error:new Error}}else throw{RE_EXN_ID:ct,_1:"Invalid format (%d)",Error:new Error}}function Fs(e){for(var n=0,t=[],r=[];n<e.length;){var i=B(e,n);if(typeof i!="object")i==="OATime"?(t.push("%d"),r.push("ETTime"),n=n+1|0):(t.push(" "),n=n+1|0);else if(i.TAG==="OAExp")t.push("%b"),r.push({TAG:"ETExp",_0:i._0}),n=n+1|0;else{var o=i._0;t.push(o),n=n+1|0;for(var l=0;l<o.length;)if(o[l]==="%"){var a=o[l+1|0];if((l+1|0)>=o.length||n>=e.length)throw{RE_EXN_ID:ct,_1:"Invalid format reference",Error:new Error};if(a==="b"){var u=B(e,n);n=n+1|0,r.push(y_(u))}else if(a==="d"){var s=B(e,n);n=n+1|0,r.push(w_(s))}else throw{RE_EXN_ID:ct,_1:"unsupported format",Error:new Error};l=l+2|0}else l=l+1|0}}return[xo("",t),r]}function et(e){switch(e.TAG){case"SStmtTimingControl":var n=e._1,t=e._0;return n!==void 0?[{TAG:"StmtTimingControl",_0:t}].concat(et(n)):[{TAG:"StmtTimingControl",_0:t}];case"SStmtWait":var r=e._1,i=e._0;return r!==void 0?[{TAG:"StmtWait",_0:i}].concat(et(r)):[{TAG:"StmtWait",_0:i}];case"SStmtAssn":return[{TAG:"StmtAssn",_0:e._0,_1:e._1,_2:e._2,_3:e._3}];case"SStmtDisplay":var o=Fs(e._0);return[{TAG:"StmtDisplay",_0:o[0],_1:o[1]}];case"SStmtMonitor":var l=Fs(e._0);return[{TAG:"StmtMonitor",_0:l[0],_1:l[1]}];case"SStmtFinish":return[{TAG:"StmtFinish",_0:e._0}];case"SStmtIf":var a=et(e._1);return[{TAG:"StmtGotoUnless",_0:e._0,_1:a.length+1|0}].concat(a);case"SStmtIfElse":var u=et(e._1),s=et(e._2);return[{TAG:"StmtGotoUnless",_0:e._0,_1:u.length+2|0}].concat(u,[{TAG:"StmtGoto",_0:s.length+1|0}],s);case"SSBlock":return Pe(function(p,v){return p.concat(et(v))},[],e._0)}}function E_(e,n){switch(n.TAG){case"TLVars":var t=te(__,n._0);return{vars:e.vars.concat(t),nets:e.nets,conts:e.conts,procs:e.procs,finals:e.finals};case"TLNets":var r=n._1,i=n._0,o=rm(te(function(_){return g_(i,r,_)},n._2)),l=te(dh,at(Ad,o[1]));return{vars:e.vars,nets:e.nets.concat(o[0]),conts:e.conts.concat(l),procs:e.procs,finals:e.finals};case"TLGates":return X("impossible: gates should have been pre-processed away");case"TLCont":var a=n._0,u=n._1,s=n._2,p={lhs:a,delay:u,rhs:s};return{vars:e.vars,nets:e.nets,conts:e.conts.concat([p]),procs:e.procs,finals:e.finals};case"TLProc":var v=zd(n._0),m=et(n._1),h={proc_type:v,stmts:m};return v==="ProcFinal"?{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs,finals:e.finals.concat([h])}:{vars:e.vars,nets:e.nets,conts:e.conts,procs:e.procs.concat([h]),finals:e.finals}}}function k_(e){return Pe(E_,Ed,e)}var ml=Bd([["empty.sv",`module empty;

// See the modules under 00 in the top-left menu for
// some introductory notes on how to use VV and
// notes on the semantics of Verilog.

// The other modules included illustrate various
// aspects of the semantics Verilog. The modules are
// commented and grouped by theme, e.g., modules
// discussing continuous assignments can be found
// under "cont" and modules discussing final blocks
// can be found under "end".

// See https://github.com/AndreasLoow/vv for more
// information.

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

// This will always print "Second branch", see p. 315

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
`],["misc/display_empty2.sv",`module display_empty2;

initial $display("foo",,"bar");

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
`],["misc/display_empty1.sv",`module display_empty1;

initial $display();

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

// Page 91 of the standard says:
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
// See "6.21 Scope and lifetime" (p. 132):
//
// "A variable declaration shall precede any simple
// reference (non-hierarchical) to that variable."

// Thus, e.g., the following is not possible:
//
// logic a = b;
// logic b = 1;

// We have not found a clear reference in the standard,
// but we assume variables are to be initialised in
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

// Page 103 of the standard says:
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
// Alternative:
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
`],["xx_more/paper/interleave1.sv",`module interleave1;

logic a;

initial begin
 a = 0;
 a = 1;
end

always @(*)
 $display("a = %b", a);

endmodule
`],["xx_more/paper/interleave4.sv",`module interleave4;

logic a;

wire b;

assign b = a;

initial begin
 $display("b = %b", b);
 a = 1;
 $display("b = %b", b);
end

endmodule
`],["xx_more/paper/interleave3.sv",`module interleave3;

logic a;

initial begin
 a <= 0;
 a <= 1;
end

always @(*)
 $display("a = %b", a);

endmodule
`],["xx_more/paper/interleave2.sv",`module interleave2;

logic a, b;

always @(a)
 b = a;

initial begin
 a = 0;
 // ...
 a = 1;
end

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
// processes can be interleaved.

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

// In Meredith et al.'s reading of the standard,
// the fig5_netassign1 module (called just netassign in
// their paper), should have the same semantics as the
// above modified code; i.e., the semantics of continuous
// assignments is given by replacing all such assignments
// with analogue combinational always blocks.

// Meredith et al. concludes that this reading cannot be
// correct since in their semantics the above code
// can end up in final states with w = 0.

// Their reading of the standard is incorrect, but not
// for the reason they state. Indeed, the semantics of
// variables and nets differ substantially (as discussed in
// other modules included in VV). The reason Meredith et al.
// run into a problem is that their semantics follows the
// standard and interleaves processes arbitrarily.

// Removing arbitrary interleavings, as suggested in our
// OOPSLA paper, the above code executes without problems.
//
// VV implements this restricted interleaving
// semantics and the module hence functions
// sensibly in VV (i.e., w = 1 in all reachable
// end states).

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
// In the modules in this directory, we give some comments on
// the questions and suggestions raised by Meredith et al.
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

// In our reading of the standard, the standard discusses
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
`],["xx_more/Chen/ex521_after.sv",`module ex521_after;

// See readme.sv

// Using Icarus, the following versions of
// the second always block result in "same":
//
// always @(*)
//  c1 = a & b;
//
// always @(a or b)
//  c1 = a & b;
//
// always_comb
//  c1 = a & b;
//
// Whereas the following version results
// in "different":
//
// always @(posedge a or negedge a or
//          posedge a or negedge a)
//  c1 = a & b;

logic a, b, c1;

wire c2;

assign c2 = a & b;

initial begin
 a = 1; b = 0; #0;

 if (c1 == c2)
  $display("same");
 else
  $display("different");
end

always @(*)
 c1 = a & b;

endmodule
`],["xx_more/Chen/readme.sv",`module readme;

// The modules in this directory discusses
// Chen et al.'s OOPSLA'23 paper
// "The Essence of Verilog: A Tractable and Tested
// Operational Semantics for Verilog".

// The ex521 modules are inspired by the 
// example "5.1.2 Hidden Data-races"
// and private communication with the authors.

endmodule
`],["xx_more/Chen/ex521_before.sv",`module ex521_before;

// See readme.sv

// Using Icarus, the following versions of
// the first always block result in "same":
//
// always @(*)
//  c1 = a & b;
//
// always @(a or b)
//  c1 = a & b;
//
// always @(posedge a or negedge a or
//          posedge a or negedge a)
//  c1 = a & b;
//
// always_comb
//  c1 = a & b;

logic a, b, c1;

wire c2;

assign c2 = a & b;

always @(*)
 c1 = a & b;

initial begin
 a = 1; b = 0; #0;

 if (c1 == c2)
  $display("same");
 else
  $display("different");
end

endmodule
`],["xx_more/Sagdeo/ex4_1.sv",`//
// The examples in this directory are from the book
// "The Complete Verilog Book" by Vivek Sagdeo
//

// Example 4-1, A sample design with structure and behavior.

module ex4_1;

reg i1, i2, i3, i4;
// MOD: Wires implicit in original module
wire o1, o2, o3;

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

// Example from p. 223

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
`],["invalid/display.sv",`module display;

initial $display("%b", $time);

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

// Examples from the standard, p. 234;
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
// In short: when the active region is empty and there
// are events in the NBA region, the NBA region becomes
// blue and clicking the NBA region moves the NBA-region
// events to the active region.

// When moved to the active region, the NBA-region events are
// grouped because they must be executed in the same order
// they were added to the NBA region (see the OOPSLA paper for
// a more detailed discussion).

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

// As discussed in the associated OOPSLA paper, the standard
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
`],["00/l_values.sv",`module l_values;

// Currently, only bit values are supported in VV,
// i.e., no arrays/vectors yet.

// This is because, when building this simulator,
// we were foremost interested in how events are
// created/propagated/maintained/etc. in Verilog.
// Adding support for arrays does not really inform this.

// But it would be nice to support arrays since
// they are common in real-world code. So we might
// consider adding support for them in the future...

// For convenience, for now, "0" and "1" are
// parsed as bit values rather than "at least"
// 32-bit integers as the standard says they
// should.

endmodule
`],["00/k_monitor.sv",`module k_monitor;

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

// Display tasks such as $display, $monitor, 
// etc., are useful for printf-style debugging.

// E.g., the following is similar to the previous
// b_twoprocesses module, but where we instead
// illustrate nondeterminism using $display
// (see the rightmost column after executing $display):

logic a;

initial a = 0;

initial $display("a = %b at time %d", a, $time);

endmodule
`],["00/j_continuous.sv",`module j_continuous;

// VV also supports continuous assignments

// Continuous assignments follow a completely
// different evaluation model than the types of
// processes introduced this far in the tutorial

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
`],["00/e_delay.sv",`module e_delay;

// Delays are not synthesisable but important in
// writing test-benches. We now illustrate how delays
// are handled in the Verilog event queue.

logic a;

// The following will delay the assignment to "a", the process
// will block for ten clock cycles and then continue.

initial #10 a = 0;

// To run the simulation from start to finish:
//
// - first click the evaluation event of the process;
// - then "simulation time" to progress to time slot 10;
// - and then lastly click the evaluation event of the
//   process again.

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
`],["00/h_nonblocking2.sv",`module h_nonblocking2;

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
// The module i_nonblocking3 illustrates how using
// nonblocking assignments (<=) instead of blocking
// assignments (=), as above, solves this problem.

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

// Inspired by "Example 6" from p. 255
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

// Verilog also has support for "intra-assignment timing control",
// see 10.4.1 Blocking procedural assignments

// To illustrate the difference between a delayed assignment and an
//  assignment with intra-assignment delay, consider the following:

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

// "Example 6" from p. 255
// of the Verilog standard

logic a;

initial #8 a <= #8 1;

initial #12 a <= #4 0;

endmodule
`],["clk/x_edge_1.sv",`module x_edge_0;

logic clk;

initial #1 clk = 1;

always @(posedge clk) $display("POS!");

always @(negedge clk) $display("NEG!");

endmodule
`],["clk/selftrigger_clk1.sv",`module selftrigger_clk1;

// Inspired by https://verificationacademy.com/forums/systemverilog/verilog-blocking/nonblocking-assignment-clk-generator-self-triggered

// Compare with selftrigger_clk2

logic clk;
initial #10 clk = 0;
always @(clk) #10 clk = ~clk;

initial $monitor("time = %d, clk = %b", $time, clk);

endmodule
`],["clk/x_edge_0.sv",`module x_edge_0;

logic clk;

initial #1 clk = 0;

always @(posedge clk) $display("POS!");

always @(negedge clk) $display("NEG!");

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
`]]),ee=jd("Elaborator.ElaboratorError");function lu(e){if(e.TAG==="ExpVar")return e._0;throw{RE_EXN_ID:ee,_1:"Expected data reference, found: "+ke(e),Error:new Error}}var S_=[],x_={env:void 0,out:S_};function Pr(e,n){return{env:e.env,out:e.out.concat([n])}}function T_(e,n){if(!iu(e.env,n))throw{RE_EXN_ID:ee,_1:"Undefined reference: "+n,Error:new Error}}function b_(e,n){var t=ou(e.env,n);if(t!==void 0){if(typeof t=="object")return;throw{RE_EXN_ID:ee,_1:"Undefined var: "+n,Error:new Error}}throw{RE_EXN_ID:ee,_1:"Undefined var: "+n,Error:new Error}}function Ce(e,n){for(;;){var t=n;switch(t.TAG){case"ExpVal":return;case"ExpVar":return T_(e,t._0);case"ExpNot":n=t._0;continue;case"ExpOp2":return $t(function(r){return Ce(e,r)},[t._0,t._2]);case"ExpCond":return $t(function(r){return Ce(e,r)},[t._0,t._1,t._2])}}}function Gd(e,n){if(typeof n=="object")return n.TAG==="EEOr"?$t(function(t){return Gd(e,t)},[n._0,n._1]):Ce(e,n._0)}function A_(e,n){if(!(typeof n!="object"||n.TAG==="TMDelay"))return Gd(e,n._0)}function js(e,n){if(!(typeof n!="object"||n.TAG!=="OAExp"))return Ce(e,n._0)}function N_(e,n){var t=n[1],r=n[0];if(iu(e.env,r))throw{RE_EXN_ID:ee,_1:"Name collision: "+r,Error:new Error};_d(t,function(o){return Ce(e,o)});var i=Je(e.env,r,{TAG:"TVar",_0:Ad(t)?"VarInited":"VarNothing"});return{env:i,out:e.out}}function C_(e,n){var t=n[0];if(iu(e.env,t))throw{RE_EXN_ID:ee,_1:"Name collision: "+t,Error:new Error};_d(n[1],function(i){return Ce(e,i)});var r=Je(e.env,t,"TNet");return{env:r,out:e.out}}function B_(e,n,t){var r=ou(e,t);if(r!==void 0&&typeof r=="object")switch(r._0){case"VarNothing":case"VarInited":return;case"VarClaimed":if(!n)return;throw{RE_EXN_ID:ee,_1:"Cannot write to claimed variable: "+t,Error:new Error};case"VarNewClaimed":throw{RE_EXN_ID:ee,_1:"Cannot write to claimed variable: "+t,Error:new Error}}}function ta(e,n,t,r){for(;;){var i=r;switch(i.TAG){case"SStmtTimingControl":var o=i._1;if(A_(t,i._0),o===void 0)return t;r=o;continue;case"SStmtWait":var l=i._1;if(Ce(t,i._0),l===void 0)return t;r=l;continue;case"SStmtAssn":var a=i._1;B_(e,n,a),b_(t,a),Ce(t,i._3);var u=Je(t.env,a,{TAG:"TVar",_0:n?"VarNewClaimed":"VarClaimed"});return{env:u,out:t.out};case"SStmtDisplay":return $t(function(s){return js(t,s)},i._0),t;case"SStmtMonitor":return $t(function(s){return js(t,s)},i._0),t;case"SStmtFinish":return Ce(t,i._0),t;case"SStmtIf":Ce(t,i._0),r=i._1;continue;case"SStmtIfElse":return Ce(t,i._0),Pe(function(s,p){return ta(e,n,s,p)},t,[i._1,i._2]);case"SSBlock":return Pe(function(s,p){return ta(e,n,s,p)},t,i._0)}}}function an(e){for(;;){var n=e;switch(n.TAG){case"ExpVal":return;case"ExpVar":return pd([n._0]);case"ExpNot":e=n._0;continue;case"ExpOp2":return Dn(an(n._0),an(n._2));case"ExpCond":return gr([an(n._0),an(n._1),an(n._2)])}}}function P_(e){if(!(typeof e!="object"||e.TAG!=="OAExp"))return an(e._0)}function kt(e){for(;;){var n=e;switch(n.TAG){case"SStmtTimingControl":case"SStmtWait":break;case"SStmtAssn":return an(n._3);case"SStmtDisplay":case"SStmtMonitor":return gr(te(P_,n._0));case"SStmtFinish":return an(n._0);case"SStmtIf":return Dn(an(n._0),kt(n._1));case"SStmtIfElse":return gr([an(n._0),kt(n._1),kt(n._2)]);case"SSBlock":return gr(te(kt,n._0))}var t=n._1;if(t===void 0)return;e=t}}function Ii(e){for(;;){var n=e;switch(n.TAG){case"SStmtTimingControl":case"SStmtWait":break;case"SStmtAssn":return pd([n._1]);case"SStmtIf":e=n._1;continue;case"SStmtIfElse":return Dn(Ii(n._1),Ii(n._2));case"SSBlock":return gr(te(Ii,n._0));default:return}var t=n._1;if(t===void 0)return;e=t}}function $d(e){var n=kt(e),t=Ii(e),r=yd(te(function(o){return{TAG:"EEEdge",_0:{TAG:"ExpVar",_0:o}}},Wl(pm(n,Wl(t))))),i=r!==void 0?r:"EENever";return{TAG:"SStmtTimingControl",_0:{TAG:"TMEvent",_0:i},_1:e}}function rt(e){switch(e.TAG){case"SStmtTimingControl":var n=e._0;if(typeof n=="object")return e;var t=e._1;if(t===void 0)return{TAG:"SStmtTimingControl",_0:{TAG:"TMEvent",_0:"EENever"},_1:void 0};var r=rt(t),i=yd(te(function(l){return{TAG:"EEEdge",_0:{TAG:"ExpVar",_0:l}}},Wl(kt(r)))),o=i!==void 0?i:"EENever";return{TAG:"SStmtTimingControl",_0:{TAG:"TMEvent",_0:o},_1:r};case"SStmtIf":return{TAG:"SStmtIf",_0:e._0,_1:rt(e._1)};case"SStmtIfElse":return{TAG:"SStmtIfElse",_0:e._0,_1:rt(e._1),_2:rt(e._2)};case"SSBlock":return{TAG:"SSBlock",_0:te(rt,e._0)};default:return e}}function St(e,n){for(;;){var t=n;switch(t.TAG){case"SStmtTimingControl":var r=t._0;if(typeof r=="object"&&r.TAG==="TMDelay")throw{RE_EXN_ID:ee,_1:"Time control not allowed inside "+yr(e),Error:new Error};var i=t._1;return i!==void 0?1+St(e,i)|0:1;case"SStmtWait":throw{RE_EXN_ID:ee,_1:"Wait statement not allowed inside "+yr(e),Error:new Error};case"SStmtAssn":if(t._2===void 0)return 0;throw{RE_EXN_ID:ee,_1:"Delayed assignments not allowed inside "+yr(e),Error:new Error};case"SStmtIf":n=t._1;continue;case"SStmtIfElse":return St(e,t._1)+St(e,t._2)|0;case"SSBlock":return vm(te(function(o){return St(e,o)},t._0));default:return 0}}}function O_(e,n){if(L(e,{TAG:"ProcAlways",_0:"AlwaysComb"})||L(e,{TAG:"ProcAlways",_0:"AlwaysLatch"})||e==="ProcFinal"){if(St(e,n)===0)return;throw{RE_EXN_ID:ee,_1:"Event control not allowed inside "+yr(e),Error:new Error}}if(L(e,{TAG:"ProcAlways",_0:"AlwaysFf"})&&St(e,n)!==1)throw{RE_EXN_ID:ee,_1:"Must be one and one only event control inside always_ff",Error:new Error}}function R_(e,n){if(typeof e!="object")return rt(n);switch(e._0){case"Always":case"AlwaysFf":return rt(n);case"AlwaysComb":case"AlwaysLatch":return $d(n)}}function D_(e){if(typeof e=="object")switch(e.TAG){case"Delay1":var n=e._0;return n===0?void 0:n;case"Delay2":case"Delay3":throw{RE_EXN_ID:ee,_1:"Delay type not supported in continuously assignments to variables yet",Error:new Error}}}function Ud(e,n){var t=n[2],r=n[1],i=n[0],o=ou(e.env,i);if(o!==void 0){if(typeof o!="object")return Ce(e,t),Pr(e,{TAG:"TLCont",_0:i,_1:r,_2:t});switch(o._0){case"VarNothing":Ce(e,t);var l=D_(r),a=$d({TAG:"SStmtAssn",_0:"AssnBlocking",_1:i,_2:l,_3:t}),u={TAG:"TLProc",_0:"always_comb",_1:a},s=Je(e.env,i,{TAG:"TVar",_0:"VarNewClaimed"});return Pr({env:s,out:e.out},u);case"VarInited":throw{RE_EXN_ID:ee,_1:"Not allowed to write continuously to variable with initialisation: "+i,Error:new Error};case"VarClaimed":case"VarNewClaimed":throw{RE_EXN_ID:ee,_1:"Not allowed to write continuously to already claimed variable: "+i,Error:new Error}}}else throw{RE_EXN_ID:ee,_1:"Undefined reference: "+i,Error:new Error}}function I_(e,n,t){if(t.length===2){var r=lu(B(t,0)),i=B(t,1),o;switch(e){case"buf":o=i;break;case"not":o={TAG:"ExpNot",_0:i};break;default:o=X("impossible gate")}return[r,n,o]}throw{RE_EXN_ID:ee,_1:"Expected two arguments to gate",Error:new Error}}function L_(e){switch(e){case"and":return"BAnd";case"or":return"BOr";case"xor":return"BXOr";default:return X("impossible gate")}}function M_(e,n,t){if(t.length===3){var r=lu(B(t,0)),i=L_(e),o=B(t,1),l=B(t,2),a={TAG:"ExpOp2",_0:o,_1:i,_2:l};return[r,n,a]}throw{RE_EXN_ID:ee,_1:"Expected three arguments to gate",Error:new Error}}function z_(e,n){if(n.length===3){var t=lu(B(n,0)),r={TAG:"ExpNot",_0:{TAG:"ExpOp2",_0:B(n,1),_1:"BOr",_2:B(n,2)}};return[t,e,r]}throw{RE_EXN_ID:ee,_1:"Expected three arguments to gate",Error:new Error}}function V_(e,n,t){if(e==="not"||e==="buf")return I_(e,n,t);if(e==="and"||e==="or")return M_(e,n,t);if(e==="nor")return z_(n,t);throw{RE_EXN_ID:ee,_1:"Unsupported gate: "+e,Error:new Error}}function F_(e,n){return Ud(e,V_(n[0],n[1],n[2]))}function j_(e){return L(e,{TAG:"ProcAlways",_0:"AlwaysComb"})||L(e,{TAG:"ProcAlways",_0:"AlwaysLatch"})?!0:L(e,{TAG:"ProcAlways",_0:"AlwaysFf"})}function G_(e,n){var t=n[1],r=n[0],i=zd(r);O_(i,t);var o=ta(e.env,j_(i),e,t),l=R_(i,t);return Pr(o,{TAG:"TLProc",_0:r,_1:l})}function $_(e,n){switch(n.TAG){case"TLVars":var t=Pe(N_,e,n._0);return Pr(t,n);case"TLNets":var r=Pe(C_,e,n._2);return Pr(r,n);case"TLGates":var i=n._1,o=n._0;return Pe(function(l,a){return F_(l,[o,i,a])},e,n._2);case"TLCont":return Ud(e,[n._0,n._1,n._2]);case"TLProc":return G_(e,[n._0,n._1])}}function U_(e){return Pe($_,x_,e).out}function q_(e){return h_(e)?e:{RE_EXN_ID:"JsError",_1:e}}function W_(e){var n=As(Ed),t=Ns(n),r=Gt.useState(function(){return t}),i=r[1],o=r[0],l=function(w,k,S,x){i(function(D){return Cs(D,k,S)?Kh(w,D,S):D})},a=function(w){i(function(k){return Os(k)?n_(k):k})},u=Gt.useState(function(){return Br(ml,"empty.sv")}),s=u[1],p=u[0],v=function(w){var k=m_(p);if(k.TAG==="ParseOk"){var S;try{S=k_(U_(k._0))}catch(C){var x=q_(C);if(x.RE_EXN_ID===ee){window.alert("Elaboration failed: "+x._1);return}if(x.RE_EXN_ID===ct){window.alert("Compilation failed: "+x._1);return}throw x}var D=Ns(As(S));return i(function(C){return D})}window.alert(`Could not parse the Verilog code! The parse error reporting from Ohm (i.e., the parser generator VV uses) is not very good -- so if you want to figure out what's wrong, your best option is probably to try to parse the code in a Verilog simulator. With that said, the following is the parse error message from Ohm:

`+k._0)},m=function(w){s(function(k){return w.target.value}),w.preventDefault()},h=function(w){var k=w.target.value;s(function(S){return Br(ml,k)}),w.preventDefault()},_=gn(Th(o.env),function(w){var k=w[0];return A.jsx("li",{children:k+": "+Mn(w[1])},k)}),y=ol(o.cont_env,function(w,k){return A.jsx("li",{children:B(o.vmodule.conts,w).lhs+"("+String(w)+"): "+Mn(k)},String(w))}),N=ol(o.proc_env,function(w,k){return A.jsx("li",{children:"state = "+ah(k.state)+", pc = "+String(k.pc)},String(w))}),f=gn(o.queue,function(w){var k=w[1],S=w[0],x=ol(k.active,function(j,Z){var We=Cs(o,S,j);return A.jsxs("li",{children:[A.jsx("span",{children:sl(o.vmodule.conts,Z),onClick:function(Le){return l("SingleStep",S,j)}}),Zh(o,S,Z)?A.jsx("span",{children:"⏩",className:"multistep",onClick:function(Le){return l("MultiStep",S,j)}}):null],className:We?"active-span":""},dl(Z))}),D=gn(k.inactive,function(j){return A.jsx("li",{children:sl(o.vmodule.conts,j)},dl(j))}),C=gn(k.nba,function(j){return A.jsx("li",{children:sl(o.vmodule.conts,j)},dl(j))}),Q=Bs(o,S),he=Ps(o,S);return A.jsxs("li",{children:[A.jsx("b",{children:"Time: "+String(S)}),A.jsxs("ul",{children:[A.jsxs("li",{children:["Active:",A.jsx("ul",{children:x})]}),A.jsxs("li",{children:["Inactive:",A.jsx("ul",{children:D})],className:Q?"active":"",onClick:function(j){return i(function(Z){return Bs(Z,S)?Yh(Z):Z})}}),A.jsxs("li",{children:["NBA:",A.jsx("ul",{children:C})],className:he?"active":"",onClick:function(j){return i(function(Z){return Ps(Z,S)?Jh(Z):Z})}})]})]},"Time"+String(S))}),c=ch(o.monitor),d=gn(bh(ml),function(w){return A.jsx("option",{children:w},w)}),g=Os(o);return A.jsx("table",{children:A.jsx("tbody",{children:A.jsxs("tr",{children:[A.jsxs("td",{children:[A.jsx("div",{children:A.jsx("select",{children:d,defaultValue:"empty.sv",onChange:h})}),A.jsx("div",{children:A.jsx("textarea",{cols:60,rows:20,value:p,onChange:m})}),A.jsx("div",{children:A.jsx("button",{children:"Parse",onClick:v})})]}),A.jsxs("td",{children:[A.jsx("p",{children:"Normalised Verilog module:",id:"code-render-title"}),A.jsx("div",{children:sh(o.vmodule,o.proc_env),id:"code-render"})]}),A.jsxs("td",{children:[A.jsx("p",{children:"Simulation time: "+String(o.time),className:g?"active":"",id:"simulation-time",onClick:a}),A.jsx("p",{children:"Status: "+Ch(o.status)}),A.jsx("p",{children:"Environment:"}),A.jsx("ul",{children:_}),A.jsx("p",{children:"Drivers (continuous assignments):"}),A.jsx("ul",{children:y}),A.jsx("p",{children:"Processes:"}),A.jsx("ol",{children:N}),A.jsx("p",{children:"Events:"}),A.jsx("ul",{children:f}),A.jsx("p",{children:"Monitor:"}),A.jsx("p",{children:c})]}),A.jsxs("td",{children:[A.jsx("p",{children:"Output:",id:"output"}),A.jsx("pre",{children:o.output})]})]})}),id:"main-table"})}var X_=W_;function H_(e){throw new Error("Panic! "+e)}function Q_(e,n){return e!==void 0?er(e):H_("Option.getExn called for None value")}var qd={exports:{}},De={},Wd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,P){var O=T.length;T.push(P);e:for(;0<O;){var z=O-1>>>1,K=T[z];if(0<i(K,P))T[z]=P,T[O]=K,O=z;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var P=T[0],O=T.pop();if(O!==P){T[0]=O;e:for(var z=0,K=T.length,An=K>>>1;z<An;){var Xe=2*(z+1)-1,Nn=T[Xe],He=Xe+1,vn=T[He];if(0>i(Nn,O))He<K&&0>i(vn,Nn)?(T[z]=vn,T[He]=O,z=He):(T[z]=Nn,T[Xe]=O,z=Xe);else if(He<K&&0>i(vn,O))T[z]=vn,T[He]=O,z=He;else break e}}return P}function i(T,P){var O=T.sortIndex-P.sortIndex;return O!==0?O:T.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],p=1,v=null,m=3,h=!1,_=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(T){for(var P=t(s);P!==null;){if(P.callback===null)r(s);else if(P.startTime<=T)r(s),P.sortIndex=P.expirationTime,n(u,P);else break;P=t(s)}}function g(T){if(y=!1,d(T),!_)if(t(u)!==null)_=!0,Le(w);else{var P=t(s);P!==null&&Yn(g,P.startTime-T)}}function w(T,P){_=!1,y&&(y=!1,f(x),x=-1),h=!0;var O=m;try{for(d(P),v=t(u);v!==null&&(!(v.expirationTime>P)||T&&!Q());){var z=v.callback;if(typeof z=="function"){v.callback=null,m=v.priorityLevel;var K=z(v.expirationTime<=P);P=e.unstable_now(),typeof K=="function"?v.callback=K:v===t(u)&&r(u),d(P)}else r(u);v=t(u)}if(v!==null)var An=!0;else{var Xe=t(s);Xe!==null&&Yn(g,Xe.startTime-P),An=!1}return An}finally{v=null,m=O,h=!1}}var k=!1,S=null,x=-1,D=5,C=-1;function Q(){return!(e.unstable_now()-C<D)}function he(){if(S!==null){var T=e.unstable_now();C=T;var P=!0;try{P=S(!0,T)}finally{P?j():(k=!1,S=null)}}else k=!1}var j;if(typeof c=="function")j=function(){c(he)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,We=Z.port2;Z.port1.onmessage=he,j=function(){We.postMessage(null)}}else j=function(){N(he,0)};function Le(T){S=T,k||(k=!0,j())}function Yn(T,P){x=N(function(){T(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){_||h||(_=!0,Le(w))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var O=m;m=P;try{return T()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=m;m=T;try{return P()}finally{m=O}},e.unstable_scheduleCallback=function(T,P,O){var z=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?z+O:z):O=z,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=O+K,T={id:p++,callback:P,priorityLevel:T,startTime:O,expirationTime:K,sortIndex:-1},O>z?(T.sortIndex=O,n(s,T),t(u)===null&&T===t(s)&&(y?(f(x),x=-1):y=!0,Yn(g,O-z))):(T.sortIndex=K,n(u,T),_||h||(_=!0,Le(w))),T},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(T){var P=m;return function(){var O=m;m=P;try{return T.apply(this,arguments)}finally{m=O}}}})(Xd);Wd.exports=Xd;var Z_=Wd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=Gt,Re=Z_;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qd=new Set,Or={};function _t(e,n){Wt(e,n),Wt(e+"Capture",n)}function Wt(e,n){for(Or[e]=n,e=0;e<n.length;e++)Qd.add(n[e])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ra=Object.prototype.hasOwnProperty,K_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gs={},$s={};function Y_(e){return ra.call($s,e)?!0:ra.call(Gs,e)?!1:K_.test(e)?$s[e]=!0:(Gs[e]=!0,!1)}function J_(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eg(e,n,t,r){if(n===null||typeof n>"u"||J_(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function we(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new we(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var au=/[\-:]([a-z])/g;function uu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(au,uu);ce[n]=new we(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(au,uu);ce[n]=new we(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(au,uu);ce[n]=new we(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function su(e,n,t,r){var i=ce.hasOwnProperty(n)?ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(eg(n,t,i,r)&&(t=null),r||i===null?Y_(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var bn=Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vi=Symbol.for("react.element"),xt=Symbol.for("react.portal"),Tt=Symbol.for("react.fragment"),cu=Symbol.for("react.strict_mode"),ia=Symbol.for("react.profiler"),Zd=Symbol.for("react.provider"),Kd=Symbol.for("react.context"),du=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),la=Symbol.for("react.suspense_list"),fu=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),Yd=Symbol.for("react.offscreen"),Us=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,hl;function pr(e){if(hl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);hl=n&&n[1]||""}return`
`+hl+e}var _l=!1;function gl(e,n){if(!e||_l)return"";_l=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{_l=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?pr(e):""}function ng(e){switch(e.tag){case 5:return pr(e.type);case 16:return pr("Lazy");case 13:return pr("Suspense");case 19:return pr("SuspenseList");case 0:case 2:case 15:return e=gl(e.type,!1),e;case 11:return e=gl(e.type.render,!1),e;case 1:return e=gl(e.type,!0),e;default:return""}}function aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tt:return"Fragment";case xt:return"Portal";case ia:return"Profiler";case cu:return"StrictMode";case oa:return"Suspense";case la:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kd:return(e.displayName||"Context")+".Consumer";case Zd:return(e._context.displayName||"Context")+".Provider";case du:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fu:return n=e.displayName||null,n!==null?n:aa(e.type)||"Memo";case Bn:n=e._payload,e=e._init;try{return aa(e(n))}catch{}}return null}function tg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return aa(n);case 8:return n===cu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rg(e){var n=Jd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function mi(e){e._valueTracker||(e._valueTracker=rg(e))}function ef(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Jd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ua(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function qs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Wn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function nf(e,n){n=n.checked,n!=null&&su(e,"checked",n,!1)}function sa(e,n){nf(e,n);var t=Wn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ca(e,n.type,t):n.hasOwnProperty("defaultValue")&&ca(e,n.type,Wn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ws(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ca(e,n,t){(n!=="number"||Ji(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var vr=Array.isArray;function Lt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Wn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function da(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(vr(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Wn(t)}}function tf(e,n){var t=Wn(n.value),r=Wn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Hs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function rf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?rf(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hi,of=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Rr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ig=["Webkit","ms","Moz","O"];Object.keys(Er).forEach(function(e){ig.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Er[n]=Er[e]})});function lf(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Er.hasOwnProperty(e)&&Er[e]?(""+n).trim():n+"px"}function af(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=lf(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var og=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,n){if(n){if(og[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function va(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ma=null;function pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ha=null,Mt=null,zt=null;function Qs(e){if(e=Jr(e)){if(typeof ha!="function")throw Error(E(280));var n=e.stateNode;n&&(n=Bo(n),ha(e.stateNode,e.type,n))}}function uf(e){Mt?zt?zt.push(e):zt=[e]:Mt=e}function sf(){if(Mt){var e=Mt,n=zt;if(zt=Mt=null,Qs(e),n)for(e=0;e<n.length;e++)Qs(n[e])}}function cf(e,n){return e(n)}function df(){}var yl=!1;function ff(e,n,t){if(yl)return e(n,t);yl=!0;try{return cf(e,n,t)}finally{yl=!1,(Mt!==null||zt!==null)&&(df(),sf())}}function Dr(e,n){var t=e.stateNode;if(t===null)return null;var r=Bo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var _a=!1;if(kn)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){_a=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{_a=!1}function lg(e,n,t,r,i,o,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(p){this.onError(p)}}var kr=!1,eo=null,no=!1,ga=null,ag={onError:function(e){kr=!0,eo=e}};function ug(e,n,t,r,i,o,l,a,u){kr=!1,eo=null,lg.apply(ag,arguments)}function sg(e,n,t,r,i,o,l,a,u){if(ug.apply(this,arguments),kr){if(kr){var s=eo;kr=!1,eo=null}else throw Error(E(198));no||(no=!0,ga=s)}}function gt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function pf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Zs(e){if(gt(e)!==e)throw Error(E(188))}function cg(e){var n=e.alternate;if(!n){if(n=gt(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Zs(i),e;if(o===r)return Zs(i),n;o=o.sibling}throw Error(E(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function vf(e){return e=cg(e),e!==null?mf(e):null}function mf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=mf(e);if(n!==null)return n;e=e.sibling}return null}var hf=Re.unstable_scheduleCallback,Ks=Re.unstable_cancelCallback,dg=Re.unstable_shouldYield,fg=Re.unstable_requestPaint,ne=Re.unstable_now,pg=Re.unstable_getCurrentPriorityLevel,vu=Re.unstable_ImmediatePriority,_f=Re.unstable_UserBlockingPriority,to=Re.unstable_NormalPriority,vg=Re.unstable_LowPriority,gf=Re.unstable_IdlePriority,bo=null,fn=null;function mg(e){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(bo,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:gg,hg=Math.log,_g=Math.LN2;function gg(e){return e>>>=0,e===0?32:31-(hg(e)/_g|0)|0}var _i=64,gi=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~i;a!==0?r=mr(a):(o&=l,o!==0&&(r=mr(o)))}else l=t&~i,l!==0?r=mr(l):o!==0&&(r=mr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-en(n),i=1<<t,r|=e[t],n&=~i;return r}function yg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wg(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-en(o),a=1<<l,u=i[l];u===-1?(!(a&t)||a&r)&&(i[l]=yg(a,n)):u<=n&&(e.expiredLanes|=a),o&=~a}}function ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yf(){var e=_i;return _i<<=1,!(_i&4194240)&&(_i=64),e}function wl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-en(n),e[n]=t}function Eg(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-en(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function mu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-en(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var M=0;function wf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ef,hu,kf,Sf,xf,wa=!1,yi=[],zn=null,Vn=null,Fn=null,Ir=new Map,Lr=new Map,On=[],kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ys(e,n){switch(e){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Ir.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(n.pointerId)}}function ar(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Jr(n),n!==null&&hu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Sg(e,n,t,r,i){switch(n){case"focusin":return zn=ar(zn,e,n,t,r,i),!0;case"dragenter":return Vn=ar(Vn,e,n,t,r,i),!0;case"mouseover":return Fn=ar(Fn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Ir.set(o,ar(Ir.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Lr.set(o,ar(Lr.get(o)||null,e,n,t,r,i)),!0}return!1}function Tf(e){var n=it(e.target);if(n!==null){var t=gt(n);if(t!==null){if(n=t.tag,n===13){if(n=pf(t),n!==null){e.blockedOn=n,xf(e.priority,function(){kf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ea(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ma=r,t.target.dispatchEvent(r),ma=null}else return n=Jr(t),n!==null&&hu(n),e.blockedOn=t,!1;n.shift()}return!0}function Js(e,n,t){Li(e)&&t.delete(n)}function xg(){wa=!1,zn!==null&&Li(zn)&&(zn=null),Vn!==null&&Li(Vn)&&(Vn=null),Fn!==null&&Li(Fn)&&(Fn=null),Ir.forEach(Js),Lr.forEach(Js)}function ur(e,n){e.blockedOn===n&&(e.blockedOn=null,wa||(wa=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,xg)))}function Mr(e){function n(i){return ur(i,e)}if(0<yi.length){ur(yi[0],e);for(var t=1;t<yi.length;t++){var r=yi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(zn!==null&&ur(zn,e),Vn!==null&&ur(Vn,e),Fn!==null&&ur(Fn,e),Ir.forEach(n),Lr.forEach(n),t=0;t<On.length;t++)r=On[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(t=On[0],t.blockedOn===null);)Tf(t),t.blockedOn===null&&On.shift()}var Vt=bn.ReactCurrentBatchConfig,io=!0;function Tg(e,n,t,r){var i=M,o=Vt.transition;Vt.transition=null;try{M=1,_u(e,n,t,r)}finally{M=i,Vt.transition=o}}function bg(e,n,t,r){var i=M,o=Vt.transition;Vt.transition=null;try{M=4,_u(e,n,t,r)}finally{M=i,Vt.transition=o}}function _u(e,n,t,r){if(io){var i=Ea(e,n,t,r);if(i===null)Bl(e,n,r,oo,t),Ys(e,r);else if(Sg(i,e,n,t,r))r.stopPropagation();else if(Ys(e,r),n&4&&-1<kg.indexOf(e)){for(;i!==null;){var o=Jr(i);if(o!==null&&Ef(o),o=Ea(e,n,t,r),o===null&&Bl(e,n,r,oo,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Bl(e,n,r,null,t)}}var oo=null;function Ea(e,n,t,r){if(oo=null,e=pu(r),e=it(e),e!==null)if(n=gt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=pf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return oo=e,null}function bf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pg()){case vu:return 1;case _f:return 4;case to:case vg:return 16;case gf:return 536870912;default:return 16}default:return 16}}var In=null,gu=null,Mi=null;function Af(){if(Mi)return Mi;var e,n=gu,t=n.length,r,i="value"in In?In.value:In.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function zi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function ec(){return!1}function Ie(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:ec,this.isPropagationStopped=ec,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yu=Ie(nr),Yr=H({},nr,{view:0,detail:0}),Ag=Ie(Yr),El,kl,sr,Ao=H({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(El=e.screenX-sr.screenX,kl=e.screenY-sr.screenY):kl=El=0,sr=e),El)},movementY:function(e){return"movementY"in e?e.movementY:kl}}),nc=Ie(Ao),Ng=H({},Ao,{dataTransfer:0}),Cg=Ie(Ng),Bg=H({},Yr,{relatedTarget:0}),Sl=Ie(Bg),Pg=H({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=Ie(Pg),Rg=H({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dg=Ie(Rg),Ig=H({},nr,{data:0}),tc=Ie(Ig),Lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zg[e])?!!n[e]:!1}function wu(){return Vg}var Fg=H({},Yr,{key:function(e){if(e.key){var n=Lg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jg=Ie(Fg),Gg=H({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=Ie(Gg),$g=H({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Ug=Ie($g),qg=H({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wg=Ie(qg),Xg=H({},Ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hg=Ie(Xg),Qg=[9,13,27,32],Eu=kn&&"CompositionEvent"in window,Sr=null;kn&&"documentMode"in document&&(Sr=document.documentMode);var Zg=kn&&"TextEvent"in window&&!Sr,Nf=kn&&(!Eu||Sr&&8<Sr&&11>=Sr),ic=" ",oc=!1;function Cf(e,n){switch(e){case"keyup":return Qg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function Kg(e,n){switch(e){case"compositionend":return Bf(n);case"keypress":return n.which!==32?null:(oc=!0,ic);case"textInput":return e=n.data,e===ic&&oc?null:e;default:return null}}function Yg(e,n){if(bt)return e==="compositionend"||!Eu&&Cf(e,n)?(e=Af(),Mi=gu=In=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nf&&n.locale!=="ko"?null:n.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jg[e.type]:n==="textarea"}function Pf(e,n,t,r){uf(r),n=lo(n,"onChange"),0<n.length&&(t=new yu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var xr=null,zr=null;function e0(e){Gf(e,0)}function No(e){var n=Ct(e);if(ef(n))return e}function n0(e,n){if(e==="change")return n}var Of=!1;if(kn){var xl;if(kn){var Tl="oninput"in document;if(!Tl){var ac=document.createElement("div");ac.setAttribute("oninput","return;"),Tl=typeof ac.oninput=="function"}xl=Tl}else xl=!1;Of=xl&&(!document.documentMode||9<document.documentMode)}function uc(){xr&&(xr.detachEvent("onpropertychange",Rf),zr=xr=null)}function Rf(e){if(e.propertyName==="value"&&No(zr)){var n=[];Pf(n,zr,e,pu(e)),ff(e0,n)}}function t0(e,n,t){e==="focusin"?(uc(),xr=n,zr=t,xr.attachEvent("onpropertychange",Rf)):e==="focusout"&&uc()}function r0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(zr)}function i0(e,n){if(e==="click")return No(n)}function o0(e,n){if(e==="input"||e==="change")return No(n)}function l0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var rn=typeof Object.is=="function"?Object.is:l0;function Vr(e,n){if(rn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!ra.call(n,i)||!rn(e[i],n[i]))return!1}return!0}function sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cc(e,n){var t=sc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=sc(t)}}function Df(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Df(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function If(){for(var e=window,n=Ji();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ji(e.document)}return n}function ku(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function a0(e){var n=If(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Df(t.ownerDocument.documentElement,t)){if(r!==null&&ku(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cc(t,o);var l=cc(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var u0=kn&&"documentMode"in document&&11>=document.documentMode,At=null,ka=null,Tr=null,Sa=!1;function dc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Sa||At==null||At!==Ji(r)||(r=At,"selectionStart"in r&&ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&Vr(Tr,r)||(Tr=r,r=lo(ka,"onSelect"),0<r.length&&(n=new yu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=At)))}function Ei(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Nt={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},bl={},Lf={};kn&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete Nt.animationend.animation,delete Nt.animationiteration.animation,delete Nt.animationstart.animation),"TransitionEvent"in window||delete Nt.transitionend.transition);function Co(e){if(bl[e])return bl[e];if(!Nt[e])return e;var n=Nt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Lf)return bl[e]=n[t];return e}var Mf=Co("animationend"),zf=Co("animationiteration"),Vf=Co("animationstart"),Ff=Co("transitionend"),jf=new Map,fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,n){jf.set(e,n),_t(n,[e])}for(var Al=0;Al<fc.length;Al++){var Nl=fc[Al],s0=Nl.toLowerCase(),c0=Nl[0].toUpperCase()+Nl.slice(1);Qn(s0,"on"+c0)}Qn(Mf,"onAnimationEnd");Qn(zf,"onAnimationIteration");Qn(Vf,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn(Ff,"onTransitionEnd");Wt("onMouseEnter",["mouseout","mouseover"]);Wt("onMouseLeave",["mouseout","mouseover"]);Wt("onPointerEnter",["pointerout","pointerover"]);Wt("onPointerLeave",["pointerout","pointerover"]);_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_t("onBeforeInput",["compositionend","keypress","textInput","paste"]);_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function pc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,sg(r,n,void 0,e),e.currentTarget=null}function Gf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;pc(i,a,s),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;pc(i,a,s),o=u}}}if(no)throw e=ga,no=!1,ga=null,e}function G(e,n){var t=n[Na];t===void 0&&(t=n[Na]=new Set);var r=e+"__bubble";t.has(r)||($f(n,e,2,!1),t.add(r))}function Cl(e,n,t){var r=0;n&&(r|=4),$f(t,e,r,n)}var ki="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[ki]){e[ki]=!0,Qd.forEach(function(t){t!=="selectionchange"&&(d0.has(t)||Cl(t,!1,e),Cl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ki]||(n[ki]=!0,Cl("selectionchange",!1,n))}}function $f(e,n,t,r){switch(bf(n)){case 1:var i=Tg;break;case 4:i=bg;break;default:i=_u}t=i.bind(null,n,t,e),i=void 0,!_a||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Bl(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=it(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}ff(function(){var s=o,p=pu(t),v=[];e:{var m=jf.get(e);if(m!==void 0){var h=yu,_=e;switch(e){case"keypress":if(zi(t)===0)break e;case"keydown":case"keyup":h=jg;break;case"focusin":_="focus",h=Sl;break;case"focusout":_="blur",h=Sl;break;case"beforeblur":case"afterblur":h=Sl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ug;break;case Mf:case zf:case Vf:h=Og;break;case Ff:h=Wg;break;case"scroll":h=Ag;break;case"wheel":h=Hg;break;case"copy":case"cut":case"paste":h=Dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=rc}var y=(n&4)!==0,N=!y&&e==="scroll",f=y?m!==null?m+"Capture":null:m;y=[];for(var c=s,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=Dr(c,f),g!=null&&y.push(jr(c,g,d)))),N)break;c=c.return}0<y.length&&(m=new h(m,_,null,t,p),v.push({event:m,listeners:y}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&t!==ma&&(_=t.relatedTarget||t.fromElement)&&(it(_)||_[Sn]))break e;if((h||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,h?(_=t.relatedTarget||t.toElement,h=s,_=_?it(_):null,_!==null&&(N=gt(_),_!==N||_.tag!==5&&_.tag!==6)&&(_=null)):(h=null,_=s),h!==_)){if(y=nc,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=rc,g="onPointerLeave",f="onPointerEnter",c="pointer"),N=h==null?m:Ct(h),d=_==null?m:Ct(_),m=new y(g,c+"leave",h,t,p),m.target=N,m.relatedTarget=d,g=null,it(p)===s&&(y=new y(f,c+"enter",_,t,p),y.target=d,y.relatedTarget=N,g=y),N=g,h&&_)n:{for(y=h,f=_,c=0,d=y;d;d=Et(d))c++;for(d=0,g=f;g;g=Et(g))d++;for(;0<c-d;)y=Et(y),c--;for(;0<d-c;)f=Et(f),d--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break n;y=Et(y),f=Et(f)}y=null}else y=null;h!==null&&vc(v,m,h,y,!1),_!==null&&N!==null&&vc(v,N,_,y,!0)}}e:{if(m=s?Ct(s):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var w=n0;else if(lc(m))if(Of)w=o0;else{w=r0;var k=t0}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=i0);if(w&&(w=w(e,s))){Pf(v,w,t,p);break e}k&&k(e,m,s),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&ca(m,"number",m.value)}switch(k=s?Ct(s):window,e){case"focusin":(lc(k)||k.contentEditable==="true")&&(At=k,ka=s,Tr=null);break;case"focusout":Tr=ka=At=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,dc(v,t,p);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":dc(v,t,p)}var S;if(Eu)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else bt?Cf(e,t)&&(x="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(Nf&&t.locale!=="ko"&&(bt||x!=="onCompositionStart"?x==="onCompositionEnd"&&bt&&(S=Af()):(In=p,gu="value"in In?In.value:In.textContent,bt=!0)),k=lo(s,x),0<k.length&&(x=new tc(x,e,null,t,p),v.push({event:x,listeners:k}),S?x.data=S:(S=Bf(t),S!==null&&(x.data=S)))),(S=Zg?Kg(e,t):Yg(e,t))&&(s=lo(s,"onBeforeInput"),0<s.length&&(p=new tc("onBeforeInput","beforeinput",null,t,p),v.push({event:p,listeners:s}),p.data=S))}Gf(v,n)})}function jr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function lo(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dr(e,t),o!=null&&r.unshift(jr(e,o,i)),o=Dr(e,n),o!=null&&r.push(jr(e,o,i))),e=e.return}return r}function Et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var a=t,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,i?(u=Dr(t,o),u!=null&&l.unshift(jr(t,u,a))):i||(u=Dr(t,o),u!=null&&l.push(jr(t,u,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var f0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function mc(e){return(typeof e=="string"?e:""+e).replace(f0,`
`).replace(p0,"")}function Si(e,n,t){if(n=mc(n),mc(e)!==n&&t)throw Error(E(425))}function ao(){}var xa=null,Ta=null;function ba(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,v0=typeof clearTimeout=="function"?clearTimeout:void 0,hc=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof hc<"u"?function(e){return hc.resolve(null).then(e).catch(h0)}:Aa;function h0(e){setTimeout(function(){throw e})}function Pl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Mr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Mr(n)}function jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _c(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),un="__reactFiber$"+tr,Gr="__reactProps$"+tr,Sn="__reactContainer$"+tr,Na="__reactEvents$"+tr,_0="__reactListeners$"+tr,g0="__reactHandles$"+tr;function it(e){var n=e[un];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Sn]||t[un]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=_c(e);e!==null;){if(t=e[un])return t;e=_c(e)}return n}e=t,t=e.parentNode}return null}function Jr(e){return e=e[un]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ct(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Bo(e){return e[Gr]||null}var Ca=[],Bt=-1;function Zn(e){return{current:e}}function $(e){0>Bt||(e.current=Ca[Bt],Ca[Bt]=null,Bt--)}function F(e,n){Bt++,Ca[Bt]=e.current,e.current=n}var Xn={},me=Zn(Xn),xe=Zn(!1),dt=Xn;function Xt(e,n){var t=e.type.contextTypes;if(!t)return Xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function uo(){$(xe),$(me)}function gc(e,n,t){if(me.current!==Xn)throw Error(E(168));F(me,n),F(xe,t)}function Uf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(E(108,tg(e)||"Unknown",i));return H({},t,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xn,dt=me.current,F(me,e),F(xe,xe.current),!0}function yc(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=Uf(e,n,dt),r.__reactInternalMemoizedMergedChildContext=e,$(xe),$(me),F(me,e)):$(xe),F(xe,t)}var _n=null,Po=!1,Ol=!1;function qf(e){_n===null?_n=[e]:_n.push(e)}function y0(e){Po=!0,qf(e)}function Kn(){if(!Ol&&_n!==null){Ol=!0;var e=0,n=M;try{var t=_n;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}_n=null,Po=!1}catch(i){throw _n!==null&&(_n=_n.slice(e+1)),hf(vu,Kn),i}finally{M=n,Ol=!1}}return null}var Pt=[],Ot=0,co=null,fo=0,Ve=[],Fe=0,ft=null,yn=1,wn="";function nt(e,n){Pt[Ot++]=fo,Pt[Ot++]=co,co=e,fo=n}function Wf(e,n,t){Ve[Fe++]=yn,Ve[Fe++]=wn,Ve[Fe++]=ft,ft=e;var r=yn;e=wn;var i=32-en(r)-1;r&=~(1<<i),t+=1;var o=32-en(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,yn=1<<32-en(n)+i|t<<i|r,wn=o+e}else yn=1<<o|t<<i|r,wn=e}function Su(e){e.return!==null&&(nt(e,1),Wf(e,1,0))}function xu(e){for(;e===co;)co=Pt[--Ot],Pt[Ot]=null,fo=Pt[--Ot],Pt[Ot]=null;for(;e===ft;)ft=Ve[--Fe],Ve[Fe]=null,wn=Ve[--Fe],Ve[Fe]=null,yn=Ve[--Fe],Ve[Fe]=null}var Oe=null,Be=null,U=!1,Ye=null;function Xf(e,n){var t=Ge(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function wc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Oe=e,Be=jn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Oe=e,Be=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ft!==null?{id:yn,overflow:wn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ge(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Oe=e,Be=null,!0):!1;default:return!1}}function Ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pa(e){if(U){var n=Be;if(n){var t=n;if(!wc(e,n)){if(Ba(e))throw Error(E(418));n=jn(t.nextSibling);var r=Oe;n&&wc(e,n)?Xf(r,t):(e.flags=e.flags&-4097|2,U=!1,Oe=e)}}else{if(Ba(e))throw Error(E(418));e.flags=e.flags&-4097|2,U=!1,Oe=e}}}function Ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function xi(e){if(e!==Oe)return!1;if(!U)return Ec(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ba(e.type,e.memoizedProps)),n&&(n=Be)){if(Ba(e))throw Hf(),Error(E(418));for(;n;)Xf(e,n),n=jn(n.nextSibling)}if(Ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Be=jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Be=null}}else Be=Oe?jn(e.stateNode.nextSibling):null;return!0}function Hf(){for(var e=Be;e;)e=jn(e.nextSibling)}function Ht(){Be=Oe=null,U=!1}function Tu(e){Ye===null?Ye=[e]:Ye.push(e)}var w0=bn.ReactCurrentBatchConfig;function Ze(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var po=Zn(null),vo=null,Rt=null,bu=null;function Au(){bu=Rt=vo=null}function Nu(e){var n=po.current;$(po),e._currentValue=n}function Oa(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ft(e,n){vo=e,bu=Rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Se=!0),e.firstContext=null)}function Ue(e){var n=e._currentValue;if(bu!==e)if(e={context:e,memoizedValue:n,next:null},Rt===null){if(vo===null)throw Error(E(308));Rt=e,vo.dependencies={lanes:0,firstContext:e}}else Rt=Rt.next=e;return n}var ot=null;function Cu(e){ot===null?ot=[e]:ot.push(e)}function Qf(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Cu(n)):(t.next=i.next,i.next=t),n.interleaved=t,xn(e,r)}function xn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Pn=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Gn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,xn(e,t)}return i=r.interleaved,i===null?(n.next=n,Cu(r)):(n.next=i.next,i.next=n),r.interleaved=n,xn(e,t)}function Vi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,mu(e,t)}}function kc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function mo(e,n,t,r){var i=e.updateQueue;Pn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?o=s:l.next=s,l=u;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=s:a.next=s,p.lastBaseUpdate=u))}if(o!==null){var v=i.baseState;l=0,p=s=u=null,a=o;do{var m=a.lane,h=a.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,y=a;switch(m=n,h=t,y.tag){case 1:if(_=y.payload,typeof _=="function"){v=_.call(h,v,m);break e}v=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,m=typeof _=="function"?_.call(h,v,m):_,m==null)break e;v=H({},v,m);break e;case 2:Pn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else h={eventTime:h,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(s=p=h,u=v):p=p.next=h,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(u=v),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);vt|=l,e.lanes=l,e.memoizedState=v}}function Sc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Kf=new Hd.Component().refs;function Ra(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Oo={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Un(e),o=En(r,i);o.payload=n,t!=null&&(o.callback=t),n=Gn(e,o,i),n!==null&&(nn(n,e,i,r),Vi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Un(e),o=En(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Gn(e,o,i),n!==null&&(nn(n,e,i,r),Vi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=Un(e),i=En(t,r);i.tag=2,n!=null&&(i.callback=n),n=Gn(e,i,r),n!==null&&(nn(n,e,r,t),Vi(n,e,r))}};function xc(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Vr(t,r)||!Vr(i,o):!0}function Yf(e,n,t){var r=!1,i=Xn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(i=Te(n)?dt:me.current,r=n.contextTypes,o=(r=r!=null)?Xt(e,i):Xn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Oo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Tc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Oo.enqueueReplaceState(n,n.state,null)}function Da(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Kf,Bu(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Ue(o):(o=Te(n)?dt:me.current,i.context=Xt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ra(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Oo.enqueueReplaceState(i,i.state,null),mo(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=i.refs;a===Kf&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function Ti(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function bc(e){var n=e._init;return n(e._payload)}function Jf(e){function n(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=qn(f,c),f.index=0,f.sibling=null,f}function o(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,g){return c===null||c.tag!==6?(c=Vl(d,f.mode,g),c.return=f,c):(c=i(c,d),c.return=f,c)}function u(f,c,d,g){var w=d.type;return w===Tt?p(f,c,d.props.children,g,d.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Bn&&bc(w)===c.type)?(g=i(c,d.props),g.ref=cr(f,c,d),g.return=f,g):(g=qi(d.type,d.key,d.props,null,f.mode,g),g.ref=cr(f,c,d),g.return=f,g)}function s(f,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Fl(d,f.mode,g),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function p(f,c,d,g,w){return c===null||c.tag!==7?(c=st(d,f.mode,g,w),c.return=f,c):(c=i(c,d),c.return=f,c)}function v(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Vl(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case vi:return d=qi(c.type,c.key,c.props,null,f.mode,d),d.ref=cr(f,null,c),d.return=f,d;case xt:return c=Fl(c,f.mode,d),c.return=f,c;case Bn:var g=c._init;return v(f,g(c._payload),d)}if(vr(c)||or(c))return c=st(c,f.mode,d,null),c.return=f,c;Ti(f,c)}return null}function m(f,c,d,g){var w=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return w!==null?null:a(f,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vi:return d.key===w?u(f,c,d,g):null;case xt:return d.key===w?s(f,c,d,g):null;case Bn:return w=d._init,m(f,c,w(d._payload),g)}if(vr(d)||or(d))return w!==null?null:p(f,c,d,g,null);Ti(f,d)}return null}function h(f,c,d,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,a(c,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vi:return f=f.get(g.key===null?d:g.key)||null,u(c,f,g,w);case xt:return f=f.get(g.key===null?d:g.key)||null,s(c,f,g,w);case Bn:var k=g._init;return h(f,c,d,k(g._payload),w)}if(vr(g)||or(g))return f=f.get(d)||null,p(c,f,g,w,null);Ti(c,g)}return null}function _(f,c,d,g){for(var w=null,k=null,S=c,x=c=0,D=null;S!==null&&x<d.length;x++){S.index>x?(D=S,S=null):D=S.sibling;var C=m(f,S,d[x],g);if(C===null){S===null&&(S=D);break}e&&S&&C.alternate===null&&n(f,S),c=o(C,c,x),k===null?w=C:k.sibling=C,k=C,S=D}if(x===d.length)return t(f,S),U&&nt(f,x),w;if(S===null){for(;x<d.length;x++)S=v(f,d[x],g),S!==null&&(c=o(S,c,x),k===null?w=S:k.sibling=S,k=S);return U&&nt(f,x),w}for(S=r(f,S);x<d.length;x++)D=h(S,f,x,d[x],g),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?x:D.key),c=o(D,c,x),k===null?w=D:k.sibling=D,k=D);return e&&S.forEach(function(Q){return n(f,Q)}),U&&nt(f,x),w}function y(f,c,d,g){var w=or(d);if(typeof w!="function")throw Error(E(150));if(d=w.call(d),d==null)throw Error(E(151));for(var k=w=null,S=c,x=c=0,D=null,C=d.next();S!==null&&!C.done;x++,C=d.next()){S.index>x?(D=S,S=null):D=S.sibling;var Q=m(f,S,C.value,g);if(Q===null){S===null&&(S=D);break}e&&S&&Q.alternate===null&&n(f,S),c=o(Q,c,x),k===null?w=Q:k.sibling=Q,k=Q,S=D}if(C.done)return t(f,S),U&&nt(f,x),w;if(S===null){for(;!C.done;x++,C=d.next())C=v(f,C.value,g),C!==null&&(c=o(C,c,x),k===null?w=C:k.sibling=C,k=C);return U&&nt(f,x),w}for(S=r(f,S);!C.done;x++,C=d.next())C=h(S,f,x,C.value,g),C!==null&&(e&&C.alternate!==null&&S.delete(C.key===null?x:C.key),c=o(C,c,x),k===null?w=C:k.sibling=C,k=C);return e&&S.forEach(function(he){return n(f,he)}),U&&nt(f,x),w}function N(f,c,d,g){if(typeof d=="object"&&d!==null&&d.type===Tt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case vi:e:{for(var w=d.key,k=c;k!==null;){if(k.key===w){if(w=d.type,w===Tt){if(k.tag===7){t(f,k.sibling),c=i(k,d.props.children),c.return=f,f=c;break e}}else if(k.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Bn&&bc(w)===k.type){t(f,k.sibling),c=i(k,d.props),c.ref=cr(f,k,d),c.return=f,f=c;break e}t(f,k);break}else n(f,k);k=k.sibling}d.type===Tt?(c=st(d.props.children,f.mode,g,d.key),c.return=f,f=c):(g=qi(d.type,d.key,d.props,null,f.mode,g),g.ref=cr(f,c,d),g.return=f,f=g)}return l(f);case xt:e:{for(k=d.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=Fl(d,f.mode,g),c.return=f,f=c}return l(f);case Bn:return k=d._init,N(f,c,k(d._payload),g)}if(vr(d))return _(f,c,d,g);if(or(d))return y(f,c,d,g);Ti(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(f,c.sibling),c=i(c,d),c.return=f,f=c):(t(f,c),c=Vl(d,f.mode,g),c.return=f,f=c),l(f)):t(f,c)}return N}var Qt=Jf(!0),ep=Jf(!1),ei={},pn=Zn(ei),$r=Zn(ei),Ur=Zn(ei);function lt(e){if(e===ei)throw Error(E(174));return e}function Pu(e,n){switch(F(Ur,n),F($r,e),F(pn,ei),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:fa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=fa(n,e)}$(pn),F(pn,n)}function Zt(){$(pn),$($r),$(Ur)}function np(e){lt(Ur.current);var n=lt(pn.current),t=fa(n,e.type);n!==t&&(F($r,e),F(pn,t))}function Ou(e){$r.current===e&&($(pn),$($r))}var q=Zn(0);function ho(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Rl=[];function Ru(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var Fi=bn.ReactCurrentDispatcher,Dl=bn.ReactCurrentBatchConfig,pt=0,W=null,ie=null,le=null,_o=!1,br=!1,qr=0,E0=0;function de(){throw Error(E(321))}function Du(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!rn(e[t],n[t]))return!1;return!0}function Iu(e,n,t,r,i,o){if(pt=o,W=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fi.current=e===null||e.memoizedState===null?T0:b0,e=t(r,i),br){o=0;do{if(br=!1,qr=0,25<=o)throw Error(E(301));o+=1,le=ie=null,n.updateQueue=null,Fi.current=A0,e=t(r,i)}while(br)}if(Fi.current=go,n=ie!==null&&ie.next!==null,pt=0,le=ie=W=null,_o=!1,n)throw Error(E(300));return e}function Lu(){var e=qr!==0;return qr=0,e}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?W.memoizedState=le=e:le=le.next=e,le}function qe(){if(ie===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var n=le===null?W.memoizedState:le.next;if(n!==null)le=n,ie=e;else{if(e===null)throw Error(E(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?W.memoizedState=le=e:le=le.next=e}return le}function Wr(e,n){return typeof n=="function"?n(e):n}function Il(e){var n=qe(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=ie,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,s=o;do{var p=s.lane;if((pt&p)===p)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var v={lane:p,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=v,l=r):u=u.next=v,W.lanes|=p,vt|=p}s=s.next}while(s!==null&&s!==o);u===null?l=r:u.next=a,rn(r,n.memoizedState)||(Se=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,W.lanes|=o,vt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ll(e){var n=qe(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);rn(o,n.memoizedState)||(Se=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function tp(){}function rp(e,n){var t=W,r=qe(),i=n(),o=!rn(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,Mu(lp.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||le!==null&&le.memoizedState.tag&1){if(t.flags|=2048,Xr(9,op.bind(null,t,r,i,n),void 0,null),ae===null)throw Error(E(349));pt&30||ip(t,n,i)}return i}function ip(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function op(e,n,t,r){n.value=t,n.getSnapshot=r,ap(n)&&up(e)}function lp(e,n,t){return t(function(){ap(n)&&up(e)})}function ap(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!rn(e,t)}catch{return!0}}function up(e){var n=xn(e,1);n!==null&&nn(n,e,1,-1)}function Ac(e){var n=ln();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},n.queue=e,e=e.dispatch=x0.bind(null,W,e),[n.memoizedState,e]}function Xr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function sp(){return qe().memoizedState}function ji(e,n,t,r){var i=ln();W.flags|=e,i.memoizedState=Xr(1|n,t,void 0,r===void 0?null:r)}function Ro(e,n,t,r){var i=qe();r=r===void 0?null:r;var o=void 0;if(ie!==null){var l=ie.memoizedState;if(o=l.destroy,r!==null&&Du(r,l.deps)){i.memoizedState=Xr(n,t,o,r);return}}W.flags|=e,i.memoizedState=Xr(1|n,t,o,r)}function Nc(e,n){return ji(8390656,8,e,n)}function Mu(e,n){return Ro(2048,8,e,n)}function cp(e,n){return Ro(4,2,e,n)}function dp(e,n){return Ro(4,4,e,n)}function fp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function pp(e,n,t){return t=t!=null?t.concat([e]):null,Ro(4,4,fp.bind(null,n,e),t)}function zu(){}function vp(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Du(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function mp(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Du(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function hp(e,n,t){return pt&21?(rn(t,n)||(t=yf(),W.lanes|=t,vt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=t)}function k0(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),n()}finally{M=t,Dl.transition=r}}function _p(){return qe().memoizedState}function S0(e,n,t){var r=Un(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},gp(e))yp(n,t);else if(t=Qf(e,n,t,r),t!==null){var i=ge();nn(t,e,r,i),wp(t,n,r)}}function x0(e,n,t){var r=Un(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(gp(e))yp(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(i.hasEagerState=!0,i.eagerState=a,rn(a,l)){var u=n.interleaved;u===null?(i.next=i,Cu(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=Qf(e,n,i,r),t!==null&&(i=ge(),nn(t,e,r,i),wp(t,n,r))}}function gp(e){var n=e.alternate;return e===W||n!==null&&n===W}function yp(e,n){br=_o=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function wp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,mu(e,t)}}var go={readContext:Ue,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},T0={readContext:Ue,useCallback:function(e,n){return ln().memoizedState=[e,n===void 0?null:n],e},useContext:Ue,useEffect:Nc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ji(4194308,4,fp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ji(4194308,4,e,n)},useInsertionEffect:function(e,n){return ji(4,2,e,n)},useMemo:function(e,n){var t=ln();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=ln();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=S0.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var n=ln();return e={current:e},n.memoizedState=e},useState:Ac,useDebugValue:zu,useDeferredValue:function(e){return ln().memoizedState=e},useTransition:function(){var e=Ac(!1),n=e[0];return e=k0.bind(null,e[1]),ln().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=W,i=ln();if(U){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),ae===null)throw Error(E(349));pt&30||ip(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Nc(lp.bind(null,r,o,e),[e]),r.flags|=2048,Xr(9,op.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=ln(),n=ae.identifierPrefix;if(U){var t=wn,r=yn;t=(r&~(1<<32-en(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=qr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=E0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},b0={readContext:Ue,useCallback:vp,useContext:Ue,useEffect:Mu,useImperativeHandle:pp,useInsertionEffect:cp,useLayoutEffect:dp,useMemo:mp,useReducer:Il,useRef:sp,useState:function(){return Il(Wr)},useDebugValue:zu,useDeferredValue:function(e){var n=qe();return hp(n,ie.memoizedState,e)},useTransition:function(){var e=Il(Wr)[0],n=qe().memoizedState;return[e,n]},useMutableSource:tp,useSyncExternalStore:rp,useId:_p,unstable_isNewReconciler:!1},A0={readContext:Ue,useCallback:vp,useContext:Ue,useEffect:Mu,useImperativeHandle:pp,useInsertionEffect:cp,useLayoutEffect:dp,useMemo:mp,useReducer:Ll,useRef:sp,useState:function(){return Ll(Wr)},useDebugValue:zu,useDeferredValue:function(e){var n=qe();return ie===null?n.memoizedState=e:hp(n,ie.memoizedState,e)},useTransition:function(){var e=Ll(Wr)[0],n=qe().memoizedState;return[e,n]},useMutableSource:tp,useSyncExternalStore:rp,useId:_p,unstable_isNewReconciler:!1};function Kt(e,n){try{var t="",r=n;do t+=ng(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Ml(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ia(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var N0=typeof WeakMap=="function"?WeakMap:Map;function Ep(e,n,t){t=En(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){wo||(wo=!0,qa=r),Ia(e,n)},t}function kp(e,n,t){t=En(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ia(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Ia(e,n),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Cc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new N0;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=G0.bind(null,e,n,t),n.then(e,e))}function Bc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Pc(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=En(-1,1),n.tag=2,Gn(t,n,1))),t.lanes|=1),e)}var C0=bn.ReactCurrentOwner,Se=!1;function _e(e,n,t,r){n.child=e===null?ep(n,null,t,r):Qt(n,e.child,t,r)}function Oc(e,n,t,r,i){t=t.render;var o=n.ref;return Ft(n,i),r=Iu(e,n,t,r,o,i),t=Lu(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Tn(e,n,i)):(U&&t&&Su(n),n.flags|=1,_e(e,n,r,i),n.child)}function Rc(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Wu(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Sp(e,n,o,r,i)):(e=qi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Vr,t(l,r)&&e.ref===n.ref)return Tn(e,n,i)}return n.flags|=1,e=qn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Sp(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Vr(o,r)&&e.ref===n.ref)if(Se=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return n.lanes=e.lanes,Tn(e,n,i)}return La(e,n,t,r,i)}function xp(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(It,Ne),Ne|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(It,Ne),Ne|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,F(It,Ne),Ne|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,F(It,Ne),Ne|=r;return _e(e,n,i,t),n.child}function Tp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function La(e,n,t,r,i){var o=Te(t)?dt:me.current;return o=Xt(n,o),Ft(n,i),t=Iu(e,n,t,r,o,i),r=Lu(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Tn(e,n,i)):(U&&r&&Su(n),n.flags|=1,_e(e,n,t,i),n.child)}function Dc(e,n,t,r,i){if(Te(t)){var o=!0;so(n)}else o=!1;if(Ft(n,i),n.stateNode===null)Gi(e,n),Yf(n,t,r),Da(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var u=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=Ue(s):(s=Te(t)?dt:me.current,s=Xt(n,s));var p=t.getDerivedStateFromProps,v=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&Tc(n,l,r,s),Pn=!1;var m=n.memoizedState;l.state=m,mo(n,r,l,i),u=n.memoizedState,a!==r||m!==u||xe.current||Pn?(typeof p=="function"&&(Ra(n,t,p,r),u=n.memoizedState),(a=Pn||xc(n,t,a,r,m,u,s))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Zf(e,n),a=n.memoizedProps,s=n.type===n.elementType?a:Ze(n.type,a),l.props=s,v=n.pendingProps,m=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=Te(t)?dt:me.current,u=Xt(n,u));var h=t.getDerivedStateFromProps;(p=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==v||m!==u)&&Tc(n,l,r,u),Pn=!1,m=n.memoizedState,l.state=m,mo(n,r,l,i);var _=n.memoizedState;a!==v||m!==_||xe.current||Pn?(typeof h=="function"&&(Ra(n,t,h,r),_=n.memoizedState),(s=Pn||xc(n,t,s,r,m,_,u)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,_,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,_,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=_),l.props=r,l.state=_,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Ma(e,n,t,r,o,i)}function Ma(e,n,t,r,i,o){Tp(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&yc(n,t,!1),Tn(e,n,o);r=n.stateNode,C0.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Qt(n,e.child,null,o),n.child=Qt(n,null,a,o)):_e(e,n,a,o),n.memoizedState=r.state,i&&yc(n,t,!0),n.child}function bp(e){var n=e.stateNode;n.pendingContext?gc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&gc(e,n.context,!1),Pu(e,n.containerInfo)}function Ic(e,n,t,r,i){return Ht(),Tu(i),n.flags|=256,_e(e,n,t,r),n.child}var za={dehydrated:null,treeContext:null,retryLane:0};function Va(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ap(e,n,t){var r=n.pendingProps,i=q.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(q,i&1),e===null)return Pa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Lo(l,r,0,null),e=st(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Va(t),n.memoizedState=za,e):Vu(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return B0(e,n,l,r,a,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=qn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=qn(a,o):(o=st(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?Va(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=za,r}return o=e.child,e=o.sibling,r=qn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Vu(e,n){return n=Lo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function bi(e,n,t,r){return r!==null&&Tu(r),Qt(n,e.child,null,t),e=Vu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function B0(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=Ml(Error(E(422))),bi(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Lo({mode:"visible",children:r.children},i,0,null),o=st(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Qt(n,e.child,null,l),n.child.memoizedState=Va(l),n.memoizedState=za,o);if(!(n.mode&1))return bi(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=Ml(o,r,void 0),bi(e,n,l,r)}if(a=(l&e.childLanes)!==0,Se||a){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xn(e,i),nn(r,e,i,-1))}return qu(),r=Ml(Error(E(421))),bi(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=$0.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Be=jn(i.nextSibling),Oe=n,U=!0,Ye=null,e!==null&&(Ve[Fe++]=yn,Ve[Fe++]=wn,Ve[Fe++]=ft,yn=e.id,wn=e.overflow,ft=n),n=Vu(n,r.children),n.flags|=4096,n)}function Lc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Oa(e.return,n,t)}function zl(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Np(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,n,r.children,t),r=q.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lc(e,t,n);else if(e.tag===19)Lc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(q,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ho(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),zl(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}zl(n,!0,t,null,o);break;case"together":zl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),vt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function P0(e,n,t){switch(n.tag){case 3:bp(n),Ht();break;case 5:np(n);break;case 1:Te(n.type)&&so(n);break;case 4:Pu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;F(po,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(q,q.current&1),n.flags|=128,null):t&n.child.childLanes?Ap(e,n,t):(F(q,q.current&1),e=Tn(e,n,t),e!==null?e.sibling:null);F(q,q.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Np(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(q,q.current),r)break;return null;case 22:case 23:return n.lanes=0,xp(e,n,t)}return Tn(e,n,t)}var Cp,Fa,Bp,Pp;Cp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fa=function(){};Bp=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,lt(pn.current);var o=null;switch(t){case"input":i=ua(e,i),r=ua(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=da(e,i),r=da(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ao)}pa(t,r);var l;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var a=i[s];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Or.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var u=r[s];if(a=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(o||(o=[]),o.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Or.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&G("scroll",e),o||a===u||(o=[])):(o=o||[]).push(s,u))}t&&(o=o||[]).push("style",t);var s=o;(n.updateQueue=s)&&(n.flags|=4)}};Pp=function(e,n,t,r){t!==r&&(n.flags|=4)};function dr(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function O0(e,n,t){var r=n.pendingProps;switch(xu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Te(n.type)&&uo(),fe(n),null;case 3:return r=n.stateNode,Zt(),$(xe),$(me),Ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ye!==null&&(Ha(Ye),Ye=null))),Fa(e,n),fe(n),null;case 5:Ou(n);var i=lt(Ur.current);if(t=n.type,e!==null&&n.stateNode!=null)Bp(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return fe(n),null}if(e=lt(pn.current),xi(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[un]=n,r[Gr]=o,e=(n.mode&1)!==0,t){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)G(hr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":qs(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":Xs(r,o),G("invalid",r)}pa(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Si(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Si(r.textContent,a,e),i=["children",""+a]):Or.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&G("scroll",r)}switch(t){case"input":mi(r),Ws(r,o,!0);break;case"textarea":mi(r),Hs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ao)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rf(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[un]=n,e[Gr]=r,Cp(e,n,!1,!1),n.stateNode=e;e:{switch(l=va(t,r),t){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)G(hr[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":qs(e,r),i=ua(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),G("invalid",e);break;case"textarea":Xs(e,r),i=da(e,r),G("invalid",e);break;default:i=r}pa(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?af(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&of(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Rr(e,u):typeof u=="number"&&Rr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Or.hasOwnProperty(o)?u!=null&&o==="onScroll"&&G("scroll",e):u!=null&&su(e,o,u,l))}switch(t){case"input":mi(e),Ws(e,r,!1);break;case"textarea":mi(e),Hs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Lt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ao)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)Pp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=lt(Ur.current),lt(pn.current),xi(n)){if(r=n.stateNode,t=n.memoizedProps,r[un]=n,(o=r.nodeValue!==t)&&(e=Oe,e!==null))switch(e.tag){case 3:Si(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[un]=n,n.stateNode=r}return fe(n),null;case 13:if($(q),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&Be!==null&&n.mode&1&&!(n.flags&128))Hf(),Ht(),n.flags|=98560,o=!1;else if(o=xi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[un]=n}else Ht(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),o=!1}else Ye!==null&&(Ha(Ye),Ye=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||q.current&1?oe===0&&(oe=3):qu())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Zt(),Fa(e,n),e===null&&Fr(n.stateNode.containerInfo),fe(n),null;case 10:return Nu(n.type._context),fe(n),null;case 17:return Te(n.type)&&uo(),fe(n),null;case 19:if($(q),o=n.memoizedState,o===null)return fe(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)dr(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ho(e),l!==null){for(n.flags|=128,dr(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(q,q.current&1|2),n.child}e=e.sibling}o.tail!==null&&ne()>Yt&&(n.flags|=128,r=!0,dr(o,!1),n.lanes=4194304)}else{if(!r)if(e=ho(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),dr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!U)return fe(n),null}else 2*ne()-o.renderingStartTime>Yt&&t!==1073741824&&(n.flags|=128,r=!0,dr(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ne(),n.sibling=null,t=q.current,F(q,r?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return Uu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ne&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function R0(e,n){switch(xu(n),n.tag){case 1:return Te(n.type)&&uo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zt(),$(xe),$(me),Ru(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ou(n),null;case 13:if($(q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));Ht()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(q),null;case 4:return Zt(),null;case 10:return Nu(n.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var Ai=!1,pe=!1,D0=typeof WeakSet=="function"?WeakSet:Set,b=null;function Dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){J(e,n,r)}else t.current=null}function ja(e,n,t){try{t()}catch(r){J(e,n,r)}}var Mc=!1;function I0(e,n){if(xa=io,e=If(),ku(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,u=-1,s=0,p=0,v=e,m=null;n:for(;;){for(var h;v!==t||i!==0&&v.nodeType!==3||(a=l+i),v!==o||r!==0&&v.nodeType!==3||(u=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(h=v.firstChild)!==null;)m=v,v=h;for(;;){if(v===e)break n;if(m===t&&++s===i&&(a=l),m===o&&++p===r&&(u=l),(h=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=h}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ta={focusedElem:e,selectionRange:t},io=!1,b=n;b!==null;)if(n=b,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,b=e;else for(;b!==null;){n=b;try{var _=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,N=_.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?y:Ze(n.type,y),N);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(g){J(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,b=e;break}b=n.return}return _=Mc,Mc=!1,_}function Ar(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ja(n,t,o)}i=i.next}while(i!==r)}}function Do(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ga(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Op(e){var n=e.alternate;n!==null&&(e.alternate=null,Op(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[un],delete n[Gr],delete n[Na],delete n[_0],delete n[g0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rp(e){return e.tag===5||e.tag===3||e.tag===4}function zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $a(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ao));else if(r!==4&&(e=e.child,e!==null))for($a(e,n,t),e=e.sibling;e!==null;)$a(e,n,t),e=e.sibling}function Ua(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ua(e,n,t),e=e.sibling;e!==null;)Ua(e,n,t),e=e.sibling}var ue=null,Ke=!1;function Cn(e,n,t){for(t=t.child;t!==null;)Dp(e,n,t),t=t.sibling}function Dp(e,n,t){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(bo,t)}catch{}switch(t.tag){case 5:pe||Dt(t,n);case 6:var r=ue,i=Ke;ue=null,Cn(e,n,t),ue=r,Ke=i,ue!==null&&(Ke?(e=ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ue.removeChild(t.stateNode));break;case 18:ue!==null&&(Ke?(e=ue,t=t.stateNode,e.nodeType===8?Pl(e.parentNode,t):e.nodeType===1&&Pl(e,t),Mr(e)):Pl(ue,t.stateNode));break;case 4:r=ue,i=Ke,ue=t.stateNode.containerInfo,Ke=!0,Cn(e,n,t),ue=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ja(t,n,l),i=i.next}while(i!==r)}Cn(e,n,t);break;case 1:if(!pe&&(Dt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){J(t,n,a)}Cn(e,n,t);break;case 21:Cn(e,n,t);break;case 22:t.mode&1?(pe=(r=pe)||t.memoizedState!==null,Cn(e,n,t),pe=r):Cn(e,n,t);break;default:Cn(e,n,t)}}function Vc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new D0),n.forEach(function(r){var i=U0.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Qe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ke=!1;break e;case 3:ue=a.stateNode.containerInfo,Ke=!0;break e;case 4:ue=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(ue===null)throw Error(E(160));Dp(o,l,i),ue=null,Ke=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){J(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ip(n,e),n=n.sibling}function Ip(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(n,e),on(e),r&4){try{Ar(3,e,e.return),Do(3,e)}catch(y){J(e,e.return,y)}try{Ar(5,e,e.return)}catch(y){J(e,e.return,y)}}break;case 1:Qe(n,e),on(e),r&512&&t!==null&&Dt(t,t.return);break;case 5:if(Qe(n,e),on(e),r&512&&t!==null&&Dt(t,t.return),e.flags&32){var i=e.stateNode;try{Rr(i,"")}catch(y){J(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&nf(i,o),va(a,l);var s=va(a,o);for(l=0;l<u.length;l+=2){var p=u[l],v=u[l+1];p==="style"?af(i,v):p==="dangerouslySetInnerHTML"?of(i,v):p==="children"?Rr(i,v):su(i,p,v,s)}switch(a){case"input":sa(i,o);break;case"textarea":tf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Lt(i,!!o.multiple,h,!1):m!==!!o.multiple&&(o.defaultValue!=null?Lt(i,!!o.multiple,o.defaultValue,!0):Lt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Gr]=o}catch(y){J(e,e.return,y)}}break;case 6:if(Qe(n,e),on(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){J(e,e.return,y)}}break;case 3:if(Qe(n,e),on(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(y){J(e,e.return,y)}break;case 4:Qe(n,e),on(e);break;case 13:Qe(n,e),on(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gu=ne())),r&4&&Vc(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(pe=(s=pe)||p,Qe(n,e),pe=s):Qe(n,e),on(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!p&&e.mode&1)for(b=e,p=e.child;p!==null;){for(v=b=p;b!==null;){switch(m=b,h=m.child,m.tag){case 0:case 11:case 14:case 15:Ar(4,m,m.return);break;case 1:Dt(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(y){J(r,t,y)}}break;case 5:Dt(m,m.return);break;case 22:if(m.memoizedState!==null){jc(v);continue}}h!==null?(h.return=m,b=h):jc(v)}p=p.sibling}e:for(p=null,v=e;;){if(v.tag===5){if(p===null){p=v;try{i=v.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=v.stateNode,u=v.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=lf("display",l))}catch(y){J(e,e.return,y)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=s?"":v.memoizedProps}catch(y){J(e,e.return,y)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Qe(n,e),on(e),r&4&&Vc(e);break;case 21:break;default:Qe(n,e),on(e)}}function on(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Rp(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rr(i,""),r.flags&=-33);var o=zc(e);Ua(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=zc(e);$a(e,a,l);break;default:throw Error(E(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function L0(e,n,t){b=e,Lp(e)}function Lp(e,n,t){for(var r=(e.mode&1)!==0;b!==null;){var i=b,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ai;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||pe;a=Ai;var s=pe;if(Ai=l,(pe=u)&&!s)for(b=i;b!==null;)l=b,u=l.child,l.tag===22&&l.memoizedState!==null?Gc(i):u!==null?(u.return=l,b=u):Gc(i);for(;o!==null;)b=o,Lp(o),o=o.sibling;b=i,Ai=a,pe=s}Fc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,b=o):Fc(e)}}function Fc(e){for(;b!==null;){var n=b;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||Do(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!pe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ze(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Sc(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Sc(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var p=s.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&Mr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}pe||n.flags&512&&Ga(n)}catch(m){J(n,n.return,m)}}if(n===e){b=null;break}if(t=n.sibling,t!==null){t.return=n.return,b=t;break}b=n.return}}function jc(e){for(;b!==null;){var n=b;if(n===e){b=null;break}var t=n.sibling;if(t!==null){t.return=n.return,b=t;break}b=n.return}}function Gc(e){for(;b!==null;){var n=b;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Do(4,n)}catch(u){J(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){J(n,i,u)}}var o=n.return;try{Ga(n)}catch(u){J(n,o,u)}break;case 5:var l=n.return;try{Ga(n)}catch(u){J(n,l,u)}}}catch(u){J(n,n.return,u)}if(n===e){b=null;break}var a=n.sibling;if(a!==null){a.return=n.return,b=a;break}b=n.return}}var M0=Math.ceil,yo=bn.ReactCurrentDispatcher,Fu=bn.ReactCurrentOwner,$e=bn.ReactCurrentBatchConfig,I=0,ae=null,re=null,se=0,Ne=0,It=Zn(0),oe=0,Hr=null,vt=0,Io=0,ju=0,Nr=null,Ee=null,Gu=0,Yt=1/0,mn=null,wo=!1,qa=null,$n=null,Ni=!1,Ln=null,Eo=0,Cr=0,Wa=null,$i=-1,Ui=0;function ge(){return I&6?ne():$i!==-1?$i:$i=ne()}function Un(e){return e.mode&1?I&2&&se!==0?se&-se:w0.transition!==null?(Ui===0&&(Ui=yf()),Ui):(e=M,e!==0||(e=window.event,e=e===void 0?16:bf(e.type)),e):1}function nn(e,n,t,r){if(50<Cr)throw Cr=0,Wa=null,Error(E(185));Kr(e,t,r),(!(I&2)||e!==ae)&&(e===ae&&(!(I&2)&&(Io|=t),oe===4&&Rn(e,se)),be(e,r),t===1&&I===0&&!(n.mode&1)&&(Yt=ne()+500,Po&&Kn()))}function be(e,n){var t=e.callbackNode;wg(e,n);var r=ro(e,e===ae?se:0);if(r===0)t!==null&&Ks(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ks(t),n===1)e.tag===0?y0($c.bind(null,e)):qf($c.bind(null,e)),m0(function(){!(I&6)&&Kn()}),t=null;else{switch(wf(r)){case 1:t=vu;break;case 4:t=_f;break;case 16:t=to;break;case 536870912:t=gf;break;default:t=to}t=Up(t,Mp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Mp(e,n){if($i=-1,Ui=0,I&6)throw Error(E(327));var t=e.callbackNode;if(jt()&&e.callbackNode!==t)return null;var r=ro(e,e===ae?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ko(e,r);else{n=r;var i=I;I|=2;var o=Vp();(ae!==e||se!==n)&&(mn=null,Yt=ne()+500,ut(e,n));do try{F0();break}catch(a){zp(e,a)}while(!0);Au(),yo.current=o,I=i,re!==null?n=0:(ae=null,se=0,n=oe)}if(n!==0){if(n===2&&(i=ya(e),i!==0&&(r=i,n=Xa(e,i))),n===1)throw t=Hr,ut(e,0),Rn(e,r),be(e,ne()),t;if(n===6)Rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!z0(i)&&(n=ko(e,r),n===2&&(o=ya(e),o!==0&&(r=o,n=Xa(e,o))),n===1))throw t=Hr,ut(e,0),Rn(e,r),be(e,ne()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:tt(e,Ee,mn);break;case 3:if(Rn(e,r),(r&130023424)===r&&(n=Gu+500-ne(),10<n)){if(ro(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Aa(tt.bind(null,e,Ee,mn),n);break}tt(e,Ee,mn);break;case 4:if(Rn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-en(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M0(r/1960))-r,10<r){e.timeoutHandle=Aa(tt.bind(null,e,Ee,mn),r);break}tt(e,Ee,mn);break;case 5:tt(e,Ee,mn);break;default:throw Error(E(329))}}}return be(e,ne()),e.callbackNode===t?Mp.bind(null,e):null}function Xa(e,n){var t=Nr;return e.current.memoizedState.isDehydrated&&(ut(e,n).flags|=256),e=ko(e,n),e!==2&&(n=Ee,Ee=t,n!==null&&Ha(n)),e}function Ha(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function z0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!rn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rn(e,n){for(n&=~ju,n&=~Io,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-en(n),r=1<<t;e[t]=-1,n&=~r}}function $c(e){if(I&6)throw Error(E(327));jt();var n=ro(e,0);if(!(n&1))return be(e,ne()),null;var t=ko(e,n);if(e.tag!==0&&t===2){var r=ya(e);r!==0&&(n=r,t=Xa(e,r))}if(t===1)throw t=Hr,ut(e,0),Rn(e,n),be(e,ne()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,tt(e,Ee,mn),be(e,ne()),null}function $u(e,n){var t=I;I|=1;try{return e(n)}finally{I=t,I===0&&(Yt=ne()+500,Po&&Kn())}}function mt(e){Ln!==null&&Ln.tag===0&&!(I&6)&&jt();var n=I;I|=1;var t=$e.transition,r=M;try{if($e.transition=null,M=1,e)return e()}finally{M=r,$e.transition=t,I=n,!(I&6)&&Kn()}}function Uu(){Ne=It.current,$(It)}function ut(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,v0(t)),re!==null)for(t=re.return;t!==null;){var r=t;switch(xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uo();break;case 3:Zt(),$(xe),$(me),Ru();break;case 5:Ou(r);break;case 4:Zt();break;case 13:$(q);break;case 19:$(q);break;case 10:Nu(r.type._context);break;case 22:case 23:Uu()}t=t.return}if(ae=e,re=e=qn(e.current,null),se=Ne=n,oe=0,Hr=null,ju=Io=vt=0,Ee=Nr=null,ot!==null){for(n=0;n<ot.length;n++)if(t=ot[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}ot=null}return e}function zp(e,n){do{var t=re;try{if(Au(),Fi.current=go,_o){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_o=!1}if(pt=0,le=ie=W=null,br=!1,qr=0,Fu.current=null,t===null||t.return===null){oe=1,Hr=n,re=null;break}e:{var o=e,l=t.return,a=t,u=n;if(n=se,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,p=a,v=p.tag;if(!(p.mode&1)&&(v===0||v===11||v===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=Bc(l);if(h!==null){h.flags&=-257,Pc(h,l,a,o,n),h.mode&1&&Cc(o,s,n),n=h,u=s;var _=n.updateQueue;if(_===null){var y=new Set;y.add(u),n.updateQueue=y}else _.add(u);break e}else{if(!(n&1)){Cc(o,s,n),qu();break e}u=Error(E(426))}}else if(U&&a.mode&1){var N=Bc(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Pc(N,l,a,o,n),Tu(Kt(u,a));break e}}o=u=Kt(u,a),oe!==4&&(oe=2),Nr===null?Nr=[o]:Nr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=Ep(o,u,n);kc(o,f);break e;case 1:a=u;var c=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&($n===null||!$n.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=kp(o,a,n);kc(o,g);break e}}o=o.return}while(o!==null)}jp(t)}catch(w){n=w,re===t&&t!==null&&(re=t=t.return);continue}break}while(!0)}function Vp(){var e=yo.current;return yo.current=go,e===null?go:e}function qu(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(vt&268435455)&&!(Io&268435455)||Rn(ae,se)}function ko(e,n){var t=I;I|=2;var r=Vp();(ae!==e||se!==n)&&(mn=null,ut(e,n));do try{V0();break}catch(i){zp(e,i)}while(!0);if(Au(),I=t,yo.current=r,re!==null)throw Error(E(261));return ae=null,se=0,oe}function V0(){for(;re!==null;)Fp(re)}function F0(){for(;re!==null&&!dg();)Fp(re)}function Fp(e){var n=$p(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,n===null?jp(e):re=n,Fu.current=null}function jp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=R0(t,n),t!==null){t.flags&=32767,re=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,re=null;return}}else if(t=O0(t,n,Ne),t!==null){re=t;return}if(n=n.sibling,n!==null){re=n;return}re=n=e}while(n!==null);oe===0&&(oe=5)}function tt(e,n,t){var r=M,i=$e.transition;try{$e.transition=null,M=1,j0(e,n,t,r)}finally{$e.transition=i,M=r}return null}function j0(e,n,t,r){do jt();while(Ln!==null);if(I&6)throw Error(E(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Eg(e,o),e===ae&&(re=ae=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ni||(Ni=!0,Up(to,function(){return jt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var l=M;M=1;var a=I;I|=4,Fu.current=null,I0(e,t),Ip(t,e),a0(Ta),io=!!xa,Ta=xa=null,e.current=t,L0(t),fg(),I=a,M=l,$e.transition=o}else e.current=t;if(Ni&&(Ni=!1,Ln=e,Eo=i),o=e.pendingLanes,o===0&&($n=null),mg(t.stateNode),be(e,ne()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(wo)throw wo=!1,e=qa,qa=null,e;return Eo&1&&e.tag!==0&&jt(),o=e.pendingLanes,o&1?e===Wa?Cr++:(Cr=0,Wa=e):Cr=0,Kn(),null}function jt(){if(Ln!==null){var e=wf(Eo),n=$e.transition,t=M;try{if($e.transition=null,M=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,Eo=0,I&6)throw Error(E(331));var i=I;for(I|=4,b=e.current;b!==null;){var o=b,l=o.child;if(b.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(b=s;b!==null;){var p=b;switch(p.tag){case 0:case 11:case 15:Ar(8,p,o)}var v=p.child;if(v!==null)v.return=p,b=v;else for(;b!==null;){p=b;var m=p.sibling,h=p.return;if(Op(p),p===s){b=null;break}if(m!==null){m.return=h,b=m;break}b=h}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}b=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,b=l;else e:for(;b!==null;){if(o=b,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ar(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,b=f;break e}b=o.return}}var c=e.current;for(b=c;b!==null;){l=b;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,b=d;else e:for(l=c;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Do(9,a)}}catch(w){J(a,a.return,w)}if(a===l){b=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,b=g;break e}b=a.return}}if(I=i,Kn(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(bo,e)}catch{}r=!0}return r}finally{M=t,$e.transition=n}}return!1}function Uc(e,n,t){n=Kt(t,n),n=Ep(e,n,1),e=Gn(e,n,1),n=ge(),e!==null&&(Kr(e,1,n),be(e,n))}function J(e,n,t){if(e.tag===3)Uc(e,e,t);else for(;n!==null;){if(n.tag===3){Uc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=Kt(t,e),e=kp(n,e,1),n=Gn(n,e,1),e=ge(),n!==null&&(Kr(n,1,e),be(n,e));break}}n=n.return}}function G0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,ae===e&&(se&t)===t&&(oe===4||oe===3&&(se&130023424)===se&&500>ne()-Gu?ut(e,0):ju|=t),be(e,n)}function Gp(e,n){n===0&&(e.mode&1?(n=gi,gi<<=1,!(gi&130023424)&&(gi=4194304)):n=1);var t=ge();e=xn(e,n),e!==null&&(Kr(e,n,t),be(e,t))}function $0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gp(e,t)}function U0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),Gp(e,t)}var $p;$p=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||xe.current)Se=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Se=!1,P0(e,n,t);Se=!!(e.flags&131072)}else Se=!1,U&&n.flags&1048576&&Wf(n,fo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Gi(e,n),e=n.pendingProps;var i=Xt(n,me.current);Ft(n,t),i=Iu(null,n,r,e,i,t);var o=Lu();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Te(r)?(o=!0,so(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bu(n),i.updater=Oo,n.stateNode=i,i._reactInternals=n,Da(n,r,e,t),n=Ma(null,n,r,!0,o,t)):(n.tag=0,U&&o&&Su(n),_e(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Gi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=W0(r),e=Ze(r,e),i){case 0:n=La(null,n,r,e,t);break e;case 1:n=Dc(null,n,r,e,t);break e;case 11:n=Oc(null,n,r,e,t);break e;case 14:n=Rc(null,n,r,Ze(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ze(r,i),La(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ze(r,i),Dc(e,n,r,i,t);case 3:e:{if(bp(n),e===null)throw Error(E(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Zf(e,n),mo(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Kt(Error(E(423)),n),n=Ic(e,n,r,t,i);break e}else if(r!==i){i=Kt(Error(E(424)),n),n=Ic(e,n,r,t,i);break e}else for(Be=jn(n.stateNode.containerInfo.firstChild),Oe=n,U=!0,Ye=null,t=ep(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ht(),r===i){n=Tn(e,n,t);break e}_e(e,n,r,t)}n=n.child}return n;case 5:return np(n),e===null&&Pa(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ba(r,i)?l=null:o!==null&&ba(r,o)&&(n.flags|=32),Tp(e,n),_e(e,n,l,t),n.child;case 6:return e===null&&Pa(n),null;case 13:return Ap(e,n,t);case 4:return Pu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Qt(n,null,r,t):_e(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ze(r,i),Oc(e,n,r,i,t);case 7:return _e(e,n,n.pendingProps,t),n.child;case 8:return _e(e,n,n.pendingProps.children,t),n.child;case 12:return _e(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,F(po,r._currentValue),r._currentValue=l,o!==null)if(rn(o.value,l)){if(o.children===i.children&&!xe.current){n=Tn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=En(-1,t&-t),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var p=s.pending;p===null?u.next=u:(u.next=p.next,p.next=u),s.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Oa(o.return,t,n),a.lanes|=t;break}u=u.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Oa(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}_e(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Ft(n,t),i=Ue(i),r=r(i),n.flags|=1,_e(e,n,r,t),n.child;case 14:return r=n.type,i=Ze(r,n.pendingProps),i=Ze(r.type,i),Rc(e,n,r,i,t);case 15:return Sp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ze(r,i),Gi(e,n),n.tag=1,Te(r)?(e=!0,so(n)):e=!1,Ft(n,t),Yf(n,r,i),Da(n,r,i,t),Ma(null,n,r,!0,e,t);case 19:return Np(e,n,t);case 22:return xp(e,n,t)}throw Error(E(156,n.tag))};function Up(e,n){return hf(e,n)}function q0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,n,t,r){return new q0(e,n,t,r)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function W0(e){if(typeof e=="function")return Wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===du)return 11;if(e===fu)return 14}return 2}function qn(e,n){var t=e.alternate;return t===null?(t=Ge(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function qi(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")Wu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Tt:return st(t.children,i,o,n);case cu:l=8,i|=8;break;case ia:return e=Ge(12,t,n,i|2),e.elementType=ia,e.lanes=o,e;case oa:return e=Ge(13,t,n,i),e.elementType=oa,e.lanes=o,e;case la:return e=Ge(19,t,n,i),e.elementType=la,e.lanes=o,e;case Yd:return Lo(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zd:l=10;break e;case Kd:l=9;break e;case du:l=11;break e;case fu:l=14;break e;case Bn:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=Ge(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function st(e,n,t,r){return e=Ge(7,e,r,n),e.lanes=t,e}function Lo(e,n,t,r){return e=Ge(22,e,r,n),e.elementType=Yd,e.lanes=t,e.stateNode={isHidden:!1},e}function Vl(e,n,t){return e=Ge(6,e,null,n),e.lanes=t,e}function Fl(e,n,t){return n=Ge(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function X0(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xu(e,n,t,r,i,o,l,a,u){return e=new X0(e,n,t,a,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ge(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bu(o),e}function H0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function qp(e){if(!e)return Xn;e=e._reactInternals;e:{if(gt(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Te(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(Te(t))return Uf(e,t,n)}return n}function Wp(e,n,t,r,i,o,l,a,u){return e=Xu(t,r,!0,e,i,o,l,a,u),e.context=qp(null),t=e.current,r=ge(),i=Un(t),o=En(r,i),o.callback=n??null,Gn(t,o,i),e.current.lanes=i,Kr(e,i,r),be(e,r),e}function Mo(e,n,t,r){var i=n.current,o=ge(),l=Un(i);return t=qp(t),n.context===null?n.context=t:n.pendingContext=t,n=En(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Gn(i,n,l),e!==null&&(nn(e,i,l,o),Vi(e,i,l)),l}function So(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Hu(e,n){qc(e,n),(e=e.alternate)&&qc(e,n)}function Q0(){return null}var Xp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}zo.prototype.render=Qu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));Mo(e,n,null,null)};zo.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mt(function(){Mo(null,e,null,null)}),n[Sn]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<On.length&&n!==0&&n<On[t].priority;t++);On.splice(t,0,e),t===0&&Tf(e)}};function Zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wc(){}function Z0(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=So(l);o.call(s)}}var l=Wp(n,r,e,0,null,!1,!1,"",Wc);return e._reactRootContainer=l,e[Sn]=l.current,Fr(e.nodeType===8?e.parentNode:e),mt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var s=So(u);a.call(s)}}var u=Xu(e,0,!1,null,null,!1,!1,"",Wc);return e._reactRootContainer=u,e[Sn]=u.current,Fr(e.nodeType===8?e.parentNode:e),mt(function(){Mo(n,u,t,r)}),u}function Fo(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=So(l);a.call(u)}}Mo(n,l,e,i)}else l=Z0(t,n,e,i,r);return So(l)}Ef=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=mr(n.pendingLanes);t!==0&&(mu(n,t|1),be(n,ne()),!(I&6)&&(Yt=ne()+500,Kn()))}break;case 13:mt(function(){var r=xn(e,1);if(r!==null){var i=ge();nn(r,e,1,i)}}),Hu(e,1)}};hu=function(e){if(e.tag===13){var n=xn(e,134217728);if(n!==null){var t=ge();nn(n,e,134217728,t)}Hu(e,134217728)}};kf=function(e){if(e.tag===13){var n=Un(e),t=xn(e,n);if(t!==null){var r=ge();nn(t,e,n,r)}Hu(e,n)}};Sf=function(){return M};xf=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};ha=function(e,n,t){switch(n){case"input":if(sa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Bo(r);if(!i)throw Error(E(90));ef(r),sa(r,i)}}}break;case"textarea":tf(e,t);break;case"select":n=t.value,n!=null&&Lt(e,!!t.multiple,n,!1)}};cf=$u;df=mt;var K0={usingClientEntryPoint:!1,Events:[Jr,Ct,Bo,uf,sf,$u]},fr={findFiberByHostInstance:it,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Y0={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vf(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||Q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{bo=Ci.inject(Y0),fn=Ci}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0;De.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(n))throw Error(E(200));return H0(e,n,null,t)};De.createRoot=function(e,n){if(!Zu(e))throw Error(E(299));var t=!1,r="",i=Xp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Xu(e,1,!1,null,null,t,!1,r,i),e[Sn]=n.current,Fr(e.nodeType===8?e.parentNode:e),new Qu(n)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=vf(n),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return mt(e)};De.hydrate=function(e,n,t){if(!Vo(n))throw Error(E(200));return Fo(null,e,n,!0,t)};De.hydrateRoot=function(e,n,t){if(!Zu(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Xp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Wp(n,null,e,1,t??null,i,!1,o,l),e[Sn]=n.current,Fr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new zo(n)};De.render=function(e,n,t){if(!Vo(n))throw Error(E(200));return Fo(null,e,n,!1,t)};De.unmountComponentAtNode=function(e){if(!Vo(e))throw Error(E(40));return e._reactRootContainer?(mt(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1};De.unstable_batchedUpdates=$u;De.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Vo(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Fo(e,n,t,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function Hp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hp)}catch(e){console.error(e)}}Hp(),qd.exports=De;var J0=qd.exports,Qp,Xc=J0;Qp=Xc.createRoot,Xc.hydrateRoot;Qp(Q_(qv(document.querySelector("#root")))).render(A.jsx(Gt.StrictMode,{children:A.jsx(X_,{})}));
