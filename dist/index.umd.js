(function(L,j){typeof exports=="object"&&typeof module<"u"?j(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],j):(L=typeof globalThis<"u"?globalThis:L||self,j(L.Monoco={},L.React))})(this,function(L,j){"use strict";var ze=Object.defineProperty;var Ue=(L,j,q)=>j in L?ze(L,j,{enumerable:!0,configurable:!0,writable:!0,value:q}):L[j]=q;var we=(L,j,q)=>Ue(L,typeof j!="symbol"?j+"":j,q);var q={exports:{}},se={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye;function Se(){if(ye)return se;ye=1;var n=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function d(l,o,s){var m=null;if(s!==void 0&&(m=""+s),o.key!==void 0&&(m=""+o.key),"key"in o){s={};for(var E in o)E!=="key"&&(s[E]=o[E])}else s=o;return o=s.ref,{$$typeof:n,type:l,key:m,ref:o!==void 0?o:null,props:s}}return se.Fragment=h,se.jsx=d,se.jsxs=d,se}var ce={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re;function Me(){return Re||(Re=1,process.env.NODE_ENV!=="production"&&function(){function n(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case f:return"Portal";case u:return"Profiler";case _:return"StrictMode";case v:return"Suspense";case g:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case w:return(e.displayName||"Context")+".Provider";case i:return(e._context.displayName||"Context")+".Consumer";case x:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return t=e.displayName||null,t!==null?t:n(e.type)||"Memo";case k:t=e._payload,e=e._init;try{return n(e(t))}catch{}}return null}function h(e){return""+e}function d(e){try{h(e);var t=!1}catch{t=!0}if(t){t=console;var r=t.error,b=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return r.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",b),h(e)}}function l(){}function o(){if(Z===0){F=console.log,oe=console.info,W=console.warn,re=console.error,ae=console.group,he=console.groupCollapsed,xe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:l,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Z++}function s(){if(Z--,Z===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:F}),info:M({},e,{value:oe}),warn:M({},e,{value:W}),error:M({},e,{value:re}),group:M({},e,{value:ae}),groupCollapsed:M({},e,{value:he}),groupEnd:M({},e,{value:xe})})}0>Z&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function m(e){if(me===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);me=t&&t[1]||"",Ae=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+me+e+Ae}function E(e,t){if(!e||Ee)return"";var r=pe.get(e);if(r!==void 0)return r;Ee=!0,r=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var b=null;b=U.H,U.H=null,o();try{var S={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(H){var ge=H}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(H){ge=H}e.call(Q.prototype)}}else{try{throw Error()}catch(H){ge=H}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(H){if(H&&ge&&typeof H.stack=="string")return[H.stack,ge.stack]}return[null,null]}};S.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var T=Object.getOwnPropertyDescriptor(S.DetermineComponentFrameRoot,"name");T&&T.configurable&&Object.defineProperty(S.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=S.DetermineComponentFrameRoot(),I=a[0],ie=a[1];if(I&&ie){var N=I.split(`
`),ne=ie.split(`
`);for(a=T=0;T<N.length&&!N[T].includes("DetermineComponentFrameRoot");)T++;for(;a<ne.length&&!ne[a].includes("DetermineComponentFrameRoot");)a++;if(T===N.length||a===ne.length)for(T=N.length-1,a=ne.length-1;1<=T&&0<=a&&N[T]!==ne[a];)a--;for(;1<=T&&0<=a;T--,a--)if(N[T]!==ne[a]){if(T!==1||a!==1)do if(T--,a--,0>a||N[T]!==ne[a]){var le=`
`+N[T].replace(" at new "," at ");return e.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",e.displayName)),typeof e=="function"&&pe.set(e,le),le}while(1<=T&&0<=a);break}}}finally{Ee=!1,U.H=b,s(),Error.prepareStackTrace=r}return N=(N=e?e.displayName||e.name:"")?m(N):"",typeof e=="function"&&pe.set(e,N),N}function A(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return E(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return m(e);switch(e){case v:return m("Suspense");case g:return m("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case x:return e=E(e.render,!1),e;case R:return A(e.type);case k:t=e._payload,e=e._init;try{return A(e(t))}catch{}}return""}function z(){var e=U.A;return e===null?null:e.getOwner()}function P(e){if(X.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function J(e,t){function r(){je||(je=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function K(){var e=n(this.type);return ke[e]||(ke[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function D(e,t,r,b,S,T){return r=T.ref,e={$$typeof:c,type:e,key:t,props:T,_owner:S},(r!==void 0?r:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:K}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function B(e,t,r,b,S,T){if(typeof e=="string"||typeof e=="function"||e===y||e===u||e===_||e===v||e===g||e===be||typeof e=="object"&&e!==null&&(e.$$typeof===k||e.$$typeof===R||e.$$typeof===w||e.$$typeof===i||e.$$typeof===x||e.$$typeof===de||e.getModuleId!==void 0)){var a=t.children;if(a!==void 0)if(b)if(te(a)){for(b=0;b<a.length;b++)O(a[b],e);Object.freeze&&Object.freeze(a)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else O(a,e)}else a="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?b="null":te(e)?b="array":e!==void 0&&e.$$typeof===c?(b="<"+(n(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):b=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",b,a);if(X.call(t,"key")){a=n(e);var I=Object.keys(t).filter(function(N){return N!=="key"});b=0<I.length?"{key: someKey, "+I.join(": ..., ")+": ...}":"{key: someKey}",Ce[a+b]||(I=0<I.length?"{"+I.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,b,a,I,a),Ce[a+b]=!0)}if(a=null,r!==void 0&&(d(r),a=""+r),P(t)&&(d(t.key),a=""+t.key),"key"in t){r={};for(var ie in t)ie!=="key"&&(r[ie]=t[ie])}else r=t;return a&&J(r,typeof e=="function"?e.displayName||e.name||"Unknown":e),D(e,a,T,S,z(),r)}function O(e,t){if(typeof e=="object"&&e&&e.$$typeof!==We){if(te(e))for(var r=0;r<e.length;r++){var b=e[r];C(b)&&V(b,t)}else if(C(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?r=null:(r=G&&e[G]||e["@@iterator"],r=typeof r=="function"?r:null),typeof r=="function"&&r!==e.entries&&(r=r.call(e),r!==e))for(;!(e=r.next()).done;)C(e.value)&&V(e.value,t)}}function C(e){return typeof e=="object"&&e!==null&&e.$$typeof===c}function V(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=Y(t),!Oe[t])){Oe[t]=!0;var r="";e&&e._owner!=null&&e._owner!==z()&&(r=null,typeof e._owner.tag=="number"?r=n(e._owner.type):typeof e._owner.name=="string"&&(r=e._owner.name),r=" It was passed a child from "+r+".");var b=U.getCurrentStack;U.getCurrentStack=function(){var S=A(e.type);return b&&(S+=b()||""),S},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,r),U.getCurrentStack=b}}function Y(e){var t="",r=z();return r&&(r=n(r.type))&&(t=`

Check the render method of \``+r+"`."),t||(e=n(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var p=j,c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),w=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),G=Symbol.iterator,ee=Symbol.for("react.client.reference"),U=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=Object.prototype.hasOwnProperty,M=Object.assign,de=Symbol.for("react.client.reference"),te=Array.isArray,Z=0,F,oe,W,re,ae,he,xe;l.__reactDisabledLog=!0;var me,Ae,Ee=!1,pe=new(typeof WeakMap=="function"?WeakMap:Map),We=Symbol.for("react.client.reference"),je,ke={},Ce={},Oe={};ce.Fragment=y,ce.jsx=function(e,t,r,b,S){return B(e,t,r,!1,b,S)},ce.jsxs=function(e,t,r,b,S){return B(e,t,r,!0,b,S)}}()),ce}var _e;function Ne(){return _e||(_e=1,process.env.NODE_ENV==="production"?q.exports=Se():q.exports=Me()),q.exports}var Le=Ne();function fe(n,h,d,l,o,s){return n?[["c",...h],d?["a",n,n,0,0,1,...l.map(m=>m*d)]:[],["c",...o]]:[["l",...s]]}var $,ue=new class{constructor(){we(this,"elements");we(this,"observer");this.elements=null,this.observer=null}onElementResize(n){var h;for(const d of n){const l=d.target.getBoundingClientRect(),o=(h=this.elements)==null?void 0:h.get(d.target);if(!o)continue;const{previousW:s,previousH:m,draw:E,onResize:A}=o;s===l.width&&m===l.height||(E==null||E({width:l.width,height:l.height}),A==null||A(l,d.target),o.previousW=l.width,o.previousH=l.height)}}getDrawOptions(n){var h,d;return((d=(h=this.elements)==null?void 0:h.get(n))==null?void 0:d.cornerOptions)??null}setCornerOptions(n,h){var l,o;const d=(l=this.elements)==null?void 0:l.get(n);d&&(d.cornerOptions=h,(o=this.elements)==null||o.set(n,d))}addElement(n,h,d){this.elements||(this.elements=new Map),this.observer||(this.observer=new ResizeObserver(s=>this.onElementResize(s))),this.unobserve(n);const{observe:l=!0,onResize:o}=h;return l&&(this.observer.observe(n),this.elements.set(n,{draw:d,cornerOptions:h,onResize:o,previousW:null,previousH:null,element:n})),d}draw(n,h){var d,l,o,s;n?(h&&this.setCornerOptions(n,h),(o=(l=(d=this.elements)==null?void 0:d.get(n))==null?void 0:l.draw)==null||o.call(l)):(s=this.elements)==null||s.forEach(m=>{var E;return(E=m.draw)==null?void 0:E.call(m)})}unobserve(n){var d;const h=l=>{var o,s;(o=this.observer)==null||o.unobserve(n),(s=this.elements)==null||s.delete(n)};n?h():(d=this.elements)==null||d.keys().forEach(l=>h())}};function ve({width:n=0,height:h=0,smoothing:d=1,radius:l=0,offset:o=0,type:s=$.Squircle,precision:m=3,isArray:E=!1}){if(!n||!h)return E?[]:"";const A=s===$.Squircle,z=s===$.RoundInverse?0:1,P=Array.isArray(o)?o:[o,o,o,o],[J,K,D,B]=P,O=n-B-K,C=h-J-D,V=.5*Math.min(O,C),Y=(Array.isArray(l)?l:[l,l,l,l]).map((c,f)=>Math.max(0,Math.min(c-P[f],V)));let p;switch(s){case $.Round:case $.RoundInverse:p=p=function({width:c,height:f,radii:y,offsets:_,sweepFlag:u}){const[i,,,w]=_,[x,v,g,R]=y;return[["M",w+R,i],["L",c-v+w,i],["A",v,v,0,0,u,c+w,i+v],["L",c+w,f-g+i],["A",g,g,0,0,u,c-g+w,f+i],["L",w+R,f+i],["A",R,R,0,0,u,w,f-R+i],["L",w,i+x],["A",x,x,0,0,u,w+x,i],["Z"]]}({width:O,height:C,radii:Y,offsets:P,sweepFlag:z});break;case $.Flat:p=p=function({width:c,height:f,radii:y,offsets:_}){const[u,,,i]=_,[w,x,v,g]=y;return[["M",i+w,u],["L",c-x+i,u],["L",c+i,u+x],["L",c+i,f-v+u],["L",c-v+i,f+u],["L",i+g,f+u],["L",i,f-g+u],["L",i,u+w],["Z"]]}({width:O,height:C,radii:Y,offsets:P});break;case $.Inset:p=p=function({width:c,height:f,radii:y,offsets:_}){const[u,,,i]=_,[w,x,v,g]=y;return[["M",i+g,u],["L",c-x+i,u],["L",c-x+i,u+x],["L",c+i,u+x],["L",c+i,f-v+u],["L",c-v+i,f-v+u],["L",c-v+i,f+u],["L",i+g,f+u],["L",i+g,f-g+u],["L",i,f-g+u],["L",i,u+w],["L",i+w,u+w],["L",i+w,u],["Z"]]}({width:O,height:C,radii:Y,offsets:P});break;case $.Squircle:case $.FigmaSquircle:default:p=function({width:c,height:f,smoothing:y,radii:_,offsets:u,preserveSmoothing:i}){const[w,,,x]=u,[v,g,R,k]=_.map(be=>function(G,ee,U,X){let M=(1+ee)*G;U||(ee=Math.min(ee,X/G-1),M=Math.min(M,X));const de=.5*Math.PI*(1-ee),te=Math.sin(de/2)*G*2**.5,Z=.25*Math.PI*ee,F=G*Math.tan(.25*(.5*Math.PI-de))*Math.cos(Z),oe=F*Math.tan(Z);let W=(M-te-F-oe)/3,re=2*W;if(U&&M>X){const ae=X-oe-te-F,he=ae-ae/6;W=Math.min(W,he),re=ae-W,M=Math.min(M,X)}return{a:re,b:W,c:F,d:oe,p:M,arcLength:te,radius:G,ab:re+W,bc:W+F,abc:re+W+F}}(be,y,i,.5*Math.min(c,f)));return[["M",c-g.p+x,w],...fe(g.radius,[g.a,0,g.ab,0,g.abc,g.d],g.arcLength,[1,1],[g.d,g.c,g.d,g.bc,g.d,g.abc],[g.p,0]),["L",c+x,f-R.p+w],...fe(R.radius,[0,R.a,0,R.ab,-R.d,R.abc],R.arcLength,[-1,1],[-R.c,R.d,-R.bc,R.d,-R.abc,R.d],[0,R.p]),["L",k.p+x,f+w],...fe(k.radius,[-k.a,0,-k.ab,0,-k.abc,-k.d],k.arcLength,[-1,-1],[-k.d,-k.c,-k.d,-k.bc,-k.d,-k.abc],[-k.p,0]),["L",x,v.p+w],...fe(v.radius,[0,-v.a,0,-v.ab,v.d,-v.abc],v.arcLength,[1,-1],[v.c,-v.d,v.bc,-v.d,v.abc,-v.d],[0,-v.p]),["Z"]]}({width:O,height:C,smoothing:d,radii:Y,offsets:P,preserveSmoothing:A})}return p=p.filter(c=>c[0]).map(([c,...f])=>{const y=f.map(u=>Number.isFinite(u)?Number(u.toFixed(m)):u),_=[c,E?y:y.join(" ")];return E?_:_.join("")}),E?p:p.join("")}function Pe(n,h){ue.setCornerOptions(n,h);const d=l=>{const o=ue.getDrawOptions(n)??{};if(!o.width||!o.height){const m=n.getBoundingClientRect();o.width=m.width,o.height=m.height}const s={...o,...l};s.isRounded&&(s.width=s.width?Math.round(s.width):void 0,s.height=s.height?Math.round(s.height):void 0),n.style.clipPath=o.clip?`path('${ve(s)}')`:"",(o.background||o.border)&&(n.style.backgroundImage=function(m){const{border:E=[],offset:A=0,strokeDrawType:z=0,background:P,clip:J,clipID:K,width:D,height:B}=m,O=[],C=Array.isArray(E==null?void 0:E[0])?E:[E],V=Array.isArray(A)?A:[A,A,A,A],Y=J?null:ve(m);if(C!=null&&C.length){let p=0;const c=[];for(let f=0;f<C.length;f++){const[y,_]=C[f],u=z===0?2*(p+y):y;c.push(`<path d="${ve({...m,offset:z===0?A:V.map(i=>i+p+.5*y)})}" fill="none" stroke="${_}" stroke-width="${u}" />`),p+=y}P&&(J?O.push(`<rect width="${D}" height="${B}" fill="${P}" />`):O.push(`<path d="${Y}" fill="${P}" />`)),O.push(...c.reverse())}return O.length?((p,c,f="c")=>{return`url('data:image/svg+xml,${(_=>encodeURIComponent(_).replace(/%20/g," ").replace(/%3D/g,"=").replace(/%3A/g,":").replace(/%2F/g,"/").replace(/%2C/g,",").replace(/%3B/g,";"))((y=(c?[`<defs><clipPath id="${f}"><path d="${c}" /></clipPath></defs>`,`<g clip-path="url(#${f})">${p.join("")}</g>`]:p).join(""),`<svg xmlns="http://www.w3.org/2000/svg">${y}</svg>`))}')`;var y})(O,Y,K):"none"}(s))};return d(),ue.addElement(n,h,d)}function Ye(n,h){ue.draw(n,h)}function $e(n){ue.unobserve(n)}(function(n){n.Squircle="squircle",n.FigmaSquircle="figma-squircle",n.Flat="flat",n.Inset="inset",n.Round="round",n.RoundInverse="round-inverse"})($||($={}));const Te=j.forwardRef(({as:n="div",children:h,width:d,height:l,smoothing:o,radius:s,offset:m,type:E,precision:A,isRounded:z,background:P,border:J,strokeDrawType:K,clipID:D,clip:B,observe:O,onResize:C,...V},Y)=>{const[p,c]=j.useState(void 0),f={width:d,height:l,smoothing:o,radius:s,offset:m,type:E,precision:A,isRounded:z,background:P,border:J,strokeDrawType:K,clipID:D,clip:B,observe:O,onResize:C},y=j.useCallback(_=>{c(_),_&&Pe(_,f),typeof Y=="function"?Y(_):Y&&(Y.current=_)},[]);return j.useEffect(()=>{p&&Ye(p,f)},[...Object.values(f)]),j.useEffect(()=>()=>{p&&$e(p)},[]),Le.jsx(n,{...V,ref:y,children:h})});L.Monoco=Te,L.default=Te,Object.defineProperties(L,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});