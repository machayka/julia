"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{48646:function(e,t,n){n.d(t,{_:function(){return r}});function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},21296:function(e,t,n){n.d(t,{H:function(){return R}});var r=n(30458),i=n(2265),o=n(77451),l=n(44839),u=n(19047),f=n(5658),s=n(72994),a=n(48170),c=n(82714),h=n(39440),d=n(89334),g=n(19470),p=n(49653),y=n(80557),v=n(92007),m=n(29924),w=n(33217),E=n(77599);function x(e,t,n,r){var i;return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?n:null!==(i=r.get(t))&&void 0!==i?i:e}let W=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e};var b=n(19379),L=n(28746),A=n(75004);function S(e,t){return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0}function B(e,t){return t.has(e)||t.set(e,{}),t.get(e)}function O(e,t){return t[e]||(t[e]=[]),t[e]}let k=e=>"number"==typeof e,M=e=>e.every(k);function N(e,t,n,r){let i=(0,o.I)(e,r),d=i.length;(0,u.k)(!!d,"No valid element provided.");let g=[];for(let e=0;e<d;e++){let r=i[e];l.R.has(r)||function(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=(0,a.v)(e)?new c.e(t):new h.W(t);n.mount(e),l.R.set(e,n)}(r);let o=l.R.get(r),u={...n};"function"==typeof u.delay&&(u.delay=u.delay(e,d)),g.push(...(0,s.w)(o,{...t,transition:u},{}))}return new f.s(g)}let z=e=>Array.isArray(e)&&Array.isArray(e[0]),H=e=>function(t,n,r){let i;return i=z(t)?function(e,t,n){let r=[];return(function(e,{defaultTransition:t={},...n}={},r){let i=t.duration||.3,l=new Map,u=new Map,f={},s=new Map,a=0,c=0,h=0;for(let n=0;n<e.length;n++){let l=e[n];if("string"==typeof l){s.set(l,c);continue}if(!Array.isArray(l)){s.set(l.name,x(c,l.at,a,s));continue}let[d,w,S={}]=l;void 0!==S.at&&(c=x(c,S.at,a,s));let k=0,N=(e,n,r,o=0,l=0)=>{let u=Array.isArray(e)?e:[e],{delay:f=0,times:s=(0,v.Y)(u),type:a="keyframes",...d}=n,{ease:w=t.ease||"easeOut",duration:E}=n,x="function"==typeof f?f(o,l):f,S=u.length;if(S<=2&&"spring"===a){let e=100;2===S&&M(u)&&(e=Math.abs(u[1]-u[0]));let t={...d};void 0!==E&&(t.duration=(0,y.w)(E));let n=function(e,t=100){let n=(0,g.S)({keyframes:[0,t],...e}),r=Math.min((0,p.i)(n),p.E);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:(0,y.X)(r)}}(t,e);w=n.ease,E=n.duration}null!=E||(E=i);let B=c+x,O=B+E;1===s.length&&0===s[0]&&(s[1]=1);let N=s.length-u.length;N>0&&(0,m.c)(s,N),1===u.length&&u.unshift(null),function(e,t,n,r,i,o){!function(e,t,n){for(let r=0;r<e.length;r++){let i=e[r];i.at>t&&i.at<n&&((0,L.cl)(e,i),r--)}}(e,i,o);for(let u=0;u<t.length;u++){var l;e.push({value:t[u],at:(0,A.t)(i,o,r[u]),easing:(l=u,(0,b.N)(n)?n[W(0,n.length,l)]:n)})}}(r,u,w,s,B,O),k=Math.max(x+E,k),h=Math.max(O,h)};if((0,E.i)(d))N(w,S,O("default",B(d,u)));else{let e=(0,o.I)(d,r,f),t=e.length;for(let n=0;n<t;n++){let r=B(e[n],u);for(let e in w)N(w[e],S[e]?{...S,...S[e]}:{...S},O(e,r),n,t)}}a=c,c+=k}return u.forEach((e,r)=>{for(let i in e){let o=e[i];o.sort(S);let u=[],f=[],s=[];for(let e=0;e<o.length;e++){let{at:t,value:n,easing:r}=o[e];u.push(n),f.push((0,w.Y)(0,h,t)),s.push(r||"easeOut")}0!==f[0]&&(f.unshift(0),u.unshift(u[0]),s.unshift("easeInOut")),1!==f[f.length-1]&&(f.push(1),u.push(null)),l.has(r)||l.set(r,{keyframes:{},transition:{}});let a=l.get(r);a.keyframes[i]=u,a.transition[i]={...t,duration:h,ease:s,times:f,...n}}}),l})(e,t,n).forEach(({keyframes:e,transition:t},n)=>{let i;i=(0,E.i)(n)?(0,d.D)(n,e.default,t.default):N(n,e,t),r.push(i)}),new f.s(r)}(t,n,e):"object"!=typeof n||Array.isArray(n)?(0,d.D)(t,n,r):N(t,n,r,e),e&&e.animations.push(i),i};function R(){var e;let t=(0,r.h)(()=>({current:null,animations:[]})),n=(0,r.h)(()=>H(t));return e=()=>{t.animations.forEach(e=>e.stop())},(0,i.useEffect)(()=>()=>e(),[]),[t,n]}H()},15856:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(33742);function i(e=.1,{startDelay:t=0,from:n=0,ease:i}={}){return(o,l)=>{let u=e*Math.abs(("number"==typeof n?n:function(e,t){if("first"===e)return 0;{let n=t-1;return"last"===e?n:n/2}}(n,l))-o);if(i){let t=l*e;u=(0,r.R)(i)(u/t)*t}return t+u}}},77451:function(e,t,n){n.d(t,{I:function(){return i}});var r=n(19047);function i(e,t,n){var i;if("string"==typeof e){let o=document;t&&((0,r.k)(!!t.current,"Scope provided, but no element detected."),o=t.current),n?(null!==(i=n[e])&&void 0!==i||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},76227:function(e,t,n){n.d(t,{p:function(){return l}});var r=n(2265),i=n(29791),o=n(86219);function l(e){let t=(0,r.useRef)(0),{isStatic:n}=(0,r.useContext)(i._);(0,r.useEffect)(()=>{if(n)return;let r=({timestamp:n,delta:r})=>{t.current||(t.current=n),e(n-t.current,r)};return o.Wi.update(r,!0),()=>(0,o.Pn)(r)},[e])}},28565:function(e,t,n){n.d(t,{N:function(){return l}});var r=n(45282),i=n(9033),o=n(86219);function l(e,t){let n=(0,r.c)(t()),l=()=>n.set(t());return l(),(0,i.L)(()=>{let t=()=>o.Wi.preRender(l,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,o.Pn)(l)}}),n}},24846:function(e,t,n){n.d(t,{Y:function(){return o}});var r=n(28565),i=n(77599);function o(e,...t){let n=e.length;return(0,r.N)(t.filter(i.i),function(){let r="";for(let o=0;o<n;o++){r+=e[o];let n=t[o];n&&(r+=(0,i.i)(n)?n.get():n)}return r})}},45282:function(e,t,n){n.d(t,{c:function(){return u}});var r=n(2265),i=n(20804),o=n(29791),l=n(30458);function u(e){let t=(0,l.h)(()=>(0,i.BX)(e)),{isStatic:n}=(0,r.useContext)(o._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}},61871:function(e,t,n){let r,i;n.d(t,{v:function(){return P}});var o=n(20804),l=n(30458),u=n(2265),f=n(19047),s=n(77451);let a=new WeakMap;function c({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=a.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function h(e){e.forEach(c)}let d=new Set;var g=n(33217),p=n(83476);let y=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),v=()=>({time:0,x:y(),y:y()}),m={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function w(e,t,n,r){let i=n[t],{length:o,position:l}=m[t],u=i.current,f=n.time;i.current=e[`scroll${l}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,g.Y)(0,i.scrollLength,i.current);let s=r-f;i.velocity=s>50?0:(0,p.R)(i.current-u,s)}let E=[[0,0],[1,1]],x={start:0,center:.5,end:1};function W(e,t,n=0){let r=0;if(e in x&&(e=x[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let b=[0,0];var L=n(42548),A=n(92007);let S={x:0,y:0};var B=n(86219);let O=new WeakMap,k=new WeakMap,M=new WeakMap,N=e=>e===document.documentElement?window:e;var z=n(9033);function H(e,t){(0,f.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let R=()=>({scrollX:(0,o.BX)(0),scrollY:(0,o.BX)(0),scrollXProgress:(0,o.BX)(0),scrollYProgress:(0,o.BX)(0)});function P({container:e,target:t,layoutEffect:n=!0,...o}={}){let f=(0,l.h)(R);return(n?z.L:u.useEffect)(()=>(H("target",t),H("container",e),function(e,{container:t=document.documentElement,...n}={}){let o=M.get(t);o||(o=new Set,M.set(t,o));let l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{w(e,"x",n,t),w(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=E}=n,{target:i=e,axis:o="y"}=n,l="y"===o?"height":"width",u=i!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,o=r.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=r.parentNode;r=i}else break;return n}(i,e):S,f=i===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},s={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let a=!t[o].interpolate,c=r.length;for(let e=0;e<c;e++){let n=function(e,t,n,r){let i=Array.isArray(e)?e:b,o=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,x[e]?e:"0"]),W(i[0],n,r)-W(i[1],t)}(r[e],s[l],f[l],u[o]);a||n===t[o].interpolatorOffsets[e]||(a=!0),t[o].offset[e]=n}a&&(t[o].interpolate=(0,L.s)(t[o].offset,(0,A.Y)(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}(e,n,r)},notify:()=>t(n)}}(t,e,v(),n);if(o.add(l),!O.has(t)){let e=()=>{for(let e of o)e.measure()},n=()=>{for(let e of o)e.update(B.frameData.timestamp)},l=()=>{for(let e of o)e.notify()},u=()=>{B.Wi.read(e,!1,!0),B.Wi.read(n,!1,!0),B.Wi.update(l,!1,!0)};O.set(t,u);let f=N(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&k.set(t,"function"==typeof t?(d.add(t),i||(i=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach(e=>e(t))},window.addEventListener("resize",i)),()=>{d.delete(t),!d.size&&i&&(i=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(h));let n=(0,s.I)(e);return n.forEach(e=>{let n=a.get(e);n||(n=new Set,a.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=a.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,u)),f.addEventListener("scroll",u,{passive:!0})}let u=O.get(t);return B.Wi.read(u,!1,!0),()=>{var e;(0,B.Pn)(u);let n=M.get(t);if(!n||(n.delete(l),n.size))return;let r=O.get(t);O.delete(t),r&&(N(t).removeEventListener("scroll",r),null===(e=k.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(({x:e,y:t})=>{f.scrollX.set(e.current),f.scrollXProgress.set(e.progress),f.scrollY.set(t.current),f.scrollYProgress.set(t.progress)},{...o,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(o.offset)]),f}},50831:function(e,t,n){n.d(t,{H:function(){return s}});var r=n(42548);let i=e=>e&&"object"==typeof e&&e.mix,o=e=>i(e)?e.mix:void 0;var l=n(28565),u=n(30458),f=n(20804);function s(e,t,n,i){if("function"==typeof e)return function(e){f.S1.current=[],e();let t=(0,l.N)(f.S1.current,e);return f.S1.current=void 0,t}(e);let u="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],l=e[1+n],u=e[2+n],f=e[3+n],s=(0,r.s)(l,u,{mixer:o(u[0]),...f});return t?s(i):s}(t,n,i);return Array.isArray(e)?a(e,u):a([e],([e])=>u(e))}function a(e,t){let n=(0,u.h)(()=>[]);return(0,l.N)(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}}}]);