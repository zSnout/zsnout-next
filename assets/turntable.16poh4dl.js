import{d as T,q as d,am as x,W as D,a1 as y,I as F,C as P,L as z,o as B,c as H,w as N,b,a as v,A as L,p as R,l as $,_ as E}from"./index.158tmzqu.js";import{u as V}from"./index.55wflef3.js";import{F as Y}from"./FullscreenDisplay.421pqk6v.js";import{S as j,H as q}from"./BookmarkIcon.108uetaj.js";import{u as A}from"./useCanvas.87p0yoq7.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.3yzrssnp.js";import"./VStack.6d7g92uw.js";const W=p=>(R("data-v-5a4a8c94"),p=p(),$(),p),X=W(()=>v("span",null,"/",-1)),G=T({__name:"turntable",setup(p){const M=d(),k=x(),m=d(!1),r=d(0),f=d(),h=V(Math.PI/360,Math.PI/1440,Math.PI/8);return A(M,{useDevicePixelRatio:!1}).then(w=>{const{canvas:t,onDispose:u,onResize:S,size:g}=w,{width:s,height:o}=g,a=t.getContext("2d"),C=D(()=>Math.min(s.value/2,o.value/2));if(!a)throw new Error("Your device doesn't support HTML5 canvases.");let i=NaN,c=NaN;a.translate(s.value/2,o.value/2);function _(){a.beginPath(),a.fillStyle="white",a.arc(s.value/2,o.value/2,C.value,0,2*Math.PI),a.fill()}f.value=_,_(),S(_),u(y(F({pointer:k,rotation:r}),({pointer:{x:e,y:n}})=>{if(!m.value){i=NaN,c=NaN;return}const l=Math.hypot(s.value/2-e,o.value/2-n),I=Math.atan2(n-o.value/2,e-s.value/2);if(l>C.value){i=NaN,c=NaN;return}[e,n]=[s.value/2+l*Math.cos(r.value-I),o.value/2-l*Math.sin(r.value-I)],!isNaN(i)&&!isNaN(c)&&(a.beginPath(),a.moveTo(i,c),a.lineTo(e,n),a.stroke()),i=e,c=n})),setTimeout(()=>{const e=()=>Math.random()*200-100;for(let[n,l]of[[0,0],[-200,100],[100,300],[70,-250]])a.beginPath(),a.moveTo(s.value/2+n+e(),o.value/2+l+e()),a.lineTo(s.value/2+n+e(),o.value/2+l+e()),a.stroke()})}),P("pointerdown",()=>m.value=!0),P("pointerup",()=>m.value=!1),z(()=>r.value+=h.value),(w,t)=>(B(),H(Y,null,{indicator:N(()=>[b(q,null,{default:N(()=>[v("span",{class:"button",onClick:t[0]||(t[0]=u=>h.value-=Math.min(Math.PI/1440))}," Slower "),X,v("span",{class:"button",onClick:t[1]||(t[1]=u=>h.value+=Math.min(Math.PI/1440))}," Faster "),b(j),v("span",{class:"button",onClick:t[2]||(t[2]=(...u)=>f.value&&f.value(...u))},"Clear")]),_:1})]),default:N(()=>[v("canvas",{ref_key:"canvas",ref:M,class:"canvas",style:L(`transform: rotate(${r.value}rad)`)},null,4)]),_:1}))}});const ta=E(G,[["__scopeId","data-v-5a4a8c94"]]);export{ta as default};
