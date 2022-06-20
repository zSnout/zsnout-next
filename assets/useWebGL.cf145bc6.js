import{_ as I,S as A,H as k,L as $,a as O,O as U,U as E,B as N,M as V}from"./Modal.1e9ac147.js";import{d as G,m as M,o as g,h as H,e as s,a as d,f as h,R as W,c as R,q as L,s as f,b as K,F as X,g as Y,w,ao as j,X as q,ap as J}from"./index.fe81711b.js";const Q=Y("OK"),Z={class:"content"},ee=G({__name:"FullscreenDisplay",props:{options:{type:Boolean}},setup(a){const o=M(!1);return(r,t)=>(g(),H(X,null,[s(h(E),{class:"nav",top:""},{default:d(()=>[s(A,null,{default:d(()=>[s(k,{class:"padding"},{default:d(()=>[s(h(W),{to:"/"},{default:d(()=>[s($,{class:"logo",invert:""})]),_:1}),s(O),r.$slots.options?(g(),R(U,{key:0,class:"options fullscreen",role:"button",onClick:t[0]||(t[0]=n=>o.value=!o.value)})):L("",!0)]),_:1})]),_:1})]),_:1}),r.$slots.indicator?(g(),R(h(E),{key:0,class:"indicator",bottom:""},{default:d(()=>[s(A,null,{default:d(()=>[s(k,{class:"padding"},{default:d(()=>[f(r.$slots,"indicator",{},void 0,!0)]),_:3})]),_:3})]),_:3})):L("",!0),s(V,{open:o.value},{buttons:d(()=>[s(N,{cancel:"",onClick:t[1]||(t[1]=n=>o.value=!o.value)},{default:d(()=>[Q]),_:1}),f(r.$slots,"buttons",{},void 0,!0)]),default:d(()=>[f(r.$slots,"options",{},void 0,!0)]),_:3},8,["open"]),K("div",Z,[f(r.$slots,"default",{},void 0,!0)])],64))}});var ie=I(ee,[["__scopeId","data-v-8878e46c"]]);function te(a){const o=[];return J(()=>o.forEach(r=>r())),new Promise(r=>{o.push(w(()=>{const t=j(a);if(t instanceof HTMLCanvasElement){const{width:n,height:l}=q(t),c=[];o.push(w(()=>{t.width=n.value*devicePixelRatio,t.height=l.value*devicePixelRatio,c.forEach(e=>e())})),r({canvas:t,onDispose:e=>o.push(e),onResize:e=>c.push(e),size:{width:n,height:l},dispose(){o.forEach(e=>e()),o.splice(0,o.length)}})}}))})}function y(a,o,r){const t=a.createShader(a[`${o}_SHADER`]);if(!t)throw new Error("An error occurred while initializing a shader.");if(a.shaderSource(t,`#version 300 es
precision highp float;
`+r.trim()),a.compileShader(t),a.getShaderParameter(t,a.COMPILE_STATUS))return t;throw console.log(a.getShaderInfoLog(t)),a.deleteShader(t),new Error("An error occurred while compiling a shader.")}function ae(a,o,r){const t=a.createProgram();if(!t)throw new Error("An error occurred while initializing a WebGL program.");const n=y(a,"VERTEX",o),l=y(a,"FRAGMENT",r);if(a.attachShader(t,n),a.attachShader(t,l),a.linkProgram(t),a.getProgramParameter(t,a.LINK_STATUS))return{program:t,vertex:n,fragment:l};throw console.log(a.getProgramInfoLog(t)),a.deleteProgram(t),new Error("An error occurred while creating a WebGL program.")}const re=`
in vec2 _pos;
out vec2 pos;

void main() {
  gl_Position = vec4(pos = _pos, 0, 1);
}`;async function se(a,o,r){var b;const t=await te(a),{canvas:n,onResize:l,onDispose:c}=t,e=n.getContext("webgl2",{preserveDrawingBuffer:r==null?void 0:r.preserveDrawingBuffer});if(!e)throw new Error("An error occurred while initializing the context.");const{program:p,vertex:B,fragment:P}=ae(e,(b=r==null?void 0:r.vertShader)!=null?b:re,o);e.useProgram(p),c(()=>e.deleteProgram(p)),c(()=>e.deleteShader(B)),c(()=>e.deleteShader(P));const x=e.getAttribLocation(p,"_pos");e.enableVertexAttribArray(x);const _=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,_),e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,1,0,1,1,0,0,1,1,0,0,0]),e.STATIC_DRAW),e.vertexAttribPointer(x,2,e.FLOAT,!1,0,0),c(()=>e.deleteBuffer(_));function u(){e.isContextLost()||(e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.viewport(-n.width,-n.height,2*n.width,2*n.height),e.drawArrays(e.TRIANGLES,0,6))}let v=!1;const F=setInterval(()=>{v&&(v=!1,u())});c(()=>clearInterval(F)),l(u);function C(z,T,D){if(e.isContextLost())return;const S=e.getUniformLocation(p,z);!S||c(w(()=>{let i=h(D);typeof i=="number"&&(i=[i]),typeof i=="boolean"&&(i=[i]),!(i.length<1||i.length>4)&&(e[`uniform${i.length}${T}v`](S,i.map(m=>m===!0?1:m===!1?0:m)),v=!0)}))}return Object.assign(t,{gl:e,program:p,render:u,useUniform:C,destroy(){t.dispose()}})}export{ie as F,se as u};
