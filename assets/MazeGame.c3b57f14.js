import{d as W,s as z,G as H,a4 as L,a9 as D,aF as X,o as q,c as N,w as V,a as R}from"./index.80e7fb4e.js";import{F as J}from"./FullscreenDisplay.2a7ae4cd.js";import{u as C}from"./useCanvas.089c02ac.js";import{_ as K}from"./VStack.ae3d12ba.js";import"./SharedNav.c43960c8.js";function S(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function I(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?S(Object(n),!0).forEach(function(o){Q(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Q(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function F(t){return t.slice(0,-1)}function G(t,r=0){return r?Array.from(Array(r-t).keys()).map(n=>n+t):Array.from(Array(t).keys())}function Y(t){return[...new Set(t)]}function A(t,r){const n=Y(t.map(m=>m.set)).filter(Boolean),o=(e=G(1,t.length+1),v=n,[e,v].reduce((m,d)=>m.filter(x=>!d.includes(x)))).sort(()=>.5-r());var e,v;t.filter(m=>!m.set).forEach((m,d)=>m.set=o[d])}function B(t,r,n=.5){F(t).forEach((o,e)=>{const v=t[e+1],m=o.set!==v.set,d=r()<=n;m&&d&&(function(x,u,s){x.forEach(h=>{h.set===u&&(h.set=s)})}(t,v.set,o.set),o.right=!1,v.left=!1)})}function U(t=8,r=t,n=!0,o=1){const e=function(u){return function(){let s=u+=1831565813;return s=Math.imul(s^s>>>15,1|s),s^=s+Math.imul(s^s>>>7,61|s),((s^s>>>14)>>>0)/4294967296}}(o),v=[],m=G(t);for(let u=0;u<r;u+=1){const s=m.map(h=>({x:h,y:u,top:n||u>0,left:n||h>0,bottom:n||u<r-1,right:n||h<t-1}));v.push(s)}F(v).forEach((u,s)=>{A(u,e),B(u,e),function(h,j,P){const E=Object.values(function(y,i){let c=Y(y.map(b=>b.set)).reduce((b,_)=>I(I({},b),{},{[_]:[]}),{});return y.forEach(b=>c[b.set].push(b)),c}(h)),{ceil:T}=Math;E.forEach(y=>{(function(i,c,b){c=c==null?1:c;const _=i==null?0:i.length;if(!_||c<1)return[];c=c>_?_:c;let f=-1;const p=_-1,M=[...i];for(;++f<c;){const a=f+Math.floor(b()*(p-f+1)),k=M[a];M[a]=M[f],M[f]=k}return M.slice(0,c)})(y,T(P()*y.length),P).forEach(i=>{if(i){const c=j[i.x];i.bottom=!1,c.top=!1,c.set=i.set}})})}(u,v[s+1],e)});const d=(x=v)[x.length-1];var x;return A(d,e),B(d,e,1),v}const Z=W({__name:"MazeGame",setup(t){var b,_;const r=z(),n=z(),o=z(),e=32,v=12,m=e/2,d=e/4;let x=0,u=0;const s=z(0),h=z(0);(_=(b=window.DeviceMotionEvent)==null?void 0:b.requestPermission)==null||_.call(b);const{beta:j,gamma:P}=H(),{x:E,y:T}=L(),y=D(()=>{var f;return(f=j.value)!=null?f:180*E.value/innerWidth-90}),i=D(()=>{var f;return(f=P.value)!=null?f:180*T.value/innerWidth-90}),c=D(()=>y.value<-30&&y.value<-Math.abs(i.value)?"right":y.value>30&&y.value>Math.abs(i.value)?"left":i.value<-30&&i.value<-Math.abs(y.value)?"down":i.value>30&&i.value>Math.abs(y.value)?"up":"none");return C(r,{useDevicePixelRatio:!1}).then(f=>{const{canvas:p,onResize:M}=f,a=p.getContext("2d");if(!a)throw new Error("Your device does not support HTML5 canvases.");function k(){if(!o.value&&p.width>4*e&&p.height>4*e){const g=~~(p.width/e)-2,l=~~(p.height/e)-2;o.value=U(g,l,!0,~~(Math.random()*1e6)),x=g,u=l}}k(),o.value||M(k),X(()=>{a.clearRect(0,0,p.width,p.height),a.beginPath();let g=s.value*e+e+m,l=h.value*e+e+m;g+=c.value==="left"?-d:c.value==="right"?d:0,l+=c.value==="up"?-d:c.value==="down"?d:0,a.fillStyle="black",a.moveTo(g,l),a.arc(g,l,v,0,2*Math.PI),a.fill()}),setInterval(()=>{var w;if(!o.value)return;const g=c.value,l=(w=o.value)==null?void 0:w[h.value][s.value];s.value+=g==="left"&&!l.left?-1:g==="right"&&!l.right?1:0,h.value+=g==="up"&&!l.top?-1:g==="down"&&!l.bottom?1:0,s.value=Math.max(0,Math.min(x,s.value)),h.value=Math.max(0,Math.min(u,h.value))},1e3)}),C(n,{useDevicePixelRatio:!1}).then(f=>{const{canvas:p,onResize:M}=f,a=p.getContext("2d");if(!a)throw new Error("Your device does not support HTML5 canvases.");function k(){if(a.fillStyle="white",a.fillRect(0,0,p.width,p.height),!!o.value)for(const g of o.value)for(const l of g){a.lineWidth=2,a.strokeStyle="black",a.lineCap="round";const w=l.x*e+e,O=l.y*e+e;l.top&&(a.moveTo(w,O),a.lineTo(w+e,O),a.stroke()),l.left&&(a.moveTo(w,O),a.lineTo(w,O+e),a.stroke()),l.right&&(a.moveTo(w+e,O),a.lineTo(w+e,O+e),a.stroke()),l.bottom&&(a.moveTo(w,O+e),a.lineTo(w+e,O+e),a.stroke())}}k(),M(()=>setTimeout(k,100))}),(f,p)=>(q(),N(J,null,{default:V(()=>[R("canvas",{ref_key:"mazeImage",ref:n,class:"maze-image"},null,512),R("canvas",{ref_key:"canvas",ref:r,class:"main"},null,512)]),_:1}))}});var oe=K(Z,[["__scopeId","data-v-0ffb21ec"]]);export{oe as default};
