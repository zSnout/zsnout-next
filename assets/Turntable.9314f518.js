import{d as S,s as d,a4 as x,aJ as D,aa as F,r as y,j as P,aF as z,o as B,c as H,w as N,b as I,a as c,au as R,p as $,g as j}from"./index.80e7fb4e.js";import{u as E}from"./index.9a124d31.js";import{F as L}from"./FullscreenDisplay.2a7ae4cd.js";import{a as V,H as Y}from"./SharedNav.c43960c8.js";import{u as J}from"./useCanvas.089c02ac.js";import{_ as X}from"./VStack.ae3d12ba.js";const q=p=>($("data-v-99a1931e"),p=p(),j(),p),A=q(()=>c("span",null,"/",-1)),G=S({__name:"Turntable",setup(p){const M=d(),k=x(),f=d(!1),r=d(0),m=d(),h=E(Math.PI/360,Math.PI/1440,Math.PI/8);return J(M,{useDevicePixelRatio:!1}).then(w=>{const{canvas:t,onDispose:u,onResize:T,size:g}=w,{width:s,height:o}=g,a=t.getContext("2d"),b=D(()=>Math.min(s.value/2,o.value/2));if(!a)throw new Error("Your device doesn't support HTML5 canvases.");let i=NaN,v=NaN;a.translate(s.value/2,o.value/2);function _(){a.beginPath(),a.fillStyle="white",a.arc(s.value/2,o.value/2,b.value,0,2*Math.PI),a.fill()}m.value=_,_(),T(_),u(F(y({pointer:k,rotation:r}),({pointer:{x:e,y:n}})=>{if(!f.value){i=NaN,v=NaN;return}const l=Math.hypot(s.value/2-e,o.value/2-n),C=Math.atan2(n-o.value/2,e-s.value/2);if(l>b.value){i=NaN,v=NaN;return}[e,n]=[s.value/2+l*Math.cos(r.value-C),o.value/2-l*Math.sin(r.value-C)],!isNaN(i)&&!isNaN(v)&&(a.beginPath(),a.moveTo(i,v),a.lineTo(e,n),a.stroke()),i=e,v=n})),setTimeout(()=>{const e=()=>Math.random()*200-100;for(let[n,l]of[[0,0],[-200,100],[100,300],[70,-250]])a.beginPath(),a.moveTo(s.value/2+n+e(),o.value/2+l+e()),a.lineTo(s.value/2+n+e(),o.value/2+l+e()),a.stroke()})}),P("pointerdown",()=>f.value=!0),P("pointerup",()=>f.value=!1),z(()=>r.value+=h.value),(w,t)=>(B(),H(L,null,{indicator:N(()=>[I(Y,null,{default:N(()=>[c("span",{class:"button",onClick:t[0]||(t[0]=u=>h.value-=Math.min(Math.PI/1440))}," Slower "),A,c("span",{class:"button",onClick:t[1]||(t[1]=u=>h.value+=Math.min(Math.PI/1440))}," Faster "),I(V),c("span",{class:"button",onClick:t[2]||(t[2]=(...u)=>m.value&&m.value(...u))},"Clear")]),_:1})]),default:N(()=>[c("canvas",{ref_key:"canvas",ref:M,class:"canvas",style:R(`transform: rotate(${r.value}rad)`)},null,4)]),_:1}))}});var aa=X(G,[["__scopeId","data-v-99a1931e"]]);export{aa as default};
