import{d as g,k as y,as as h,aG as w,c as C,w as u,o as S,b as z,a as n,p as b,g as I}from"./index.4d3896d1.js";import{F as B}from"./FullscreenDisplay.74a577c5.js";import{_ as D,H as F}from"./Modal.82f47c6d.js";import{u as H}from"./useCanvas.cbe4fc7e.js";import{s as L}from"./useOption.bfad171f.js";import{r as o}from"./useRandint.07e5b532.js";import{r as k}from"./useRandomColor.1a4538c9.js";const N=t=>(b("data-v-4460c7f8"),t=t(),I(),t),V=N(()=>n("span",null,"/",-1)),$=g({__name:"Rectangles",setup(t){const p=y(),l=y(),s=h(50,5,1e3);return L("size",s),H(p,{useDevicePixelRatio:!1}).then(v=>{const{canvas:a,onDispose:r,onResize:x,size:R}=v,{width:f,height:_}=R,e=a.getContext("2d");if(!e)throw new Error("Your device doesn't support HTML5 canvases.");l.value=()=>{e.fillStyle="white",e.fillRect(0,0,f.value,_.value)},l.value(),x(l.value),r(w(()=>{for(let A of Array(10)){e.fillStyle=k(),e.strokeStyle=k();const c=o(0,s.value),i=o(0,s.value),d=o(0,f.value-c),m=o(0,_.value-i);e.fillRect(d,m,c,i),e.strokeRect(d,m,c,i)}}).pause)}),(v,a)=>(S(),C(B,null,{indicator:u(()=>[z(F,null,{default:u(()=>[n("span",{class:"button",onClick:a[0]||(a[0]=r=>s.value-=1)},"Smaller"),V,n("span",{class:"button",onClick:a[1]||(a[1]=r=>s.value+=1)},"Larger")]),_:1})]),default:u(()=>[n("canvas",{ref_key:"canvas",ref:p},null,512)]),_:1}))}});var j=D($,[["__scopeId","data-v-4460c7f8"]]);export{j as default};
