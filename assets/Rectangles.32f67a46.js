import{d as g,s as b,aG as h,o as k,c as w,w as p,b as C,a as n,p as S,g as z}from"./index.307c9757.js";import{u as I}from"./index.8178bac2.js";import{F as B}from"./FullscreenDisplay.d63693d1.js";import{H as D}from"./SharedNav.13deb094.js";import{u as F}from"./useCanvas.15af3683.js";import{s as H}from"./useOption.32e6a30d.js";import{r as o}from"./useRandint.07e5b532.js";import{r as y}from"./useRandomColor.1a4538c9.js";import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";import"./LogoLight.1b2c95c2.js";import"./VStack.a5267f59.js";const N=s=>(S("data-v-53187bbc"),s=s(),z(),s),V=N(()=>n("span",null,"/",-1)),$=g({__name:"Rectangles",setup(s){const u=b(),r=b(),a=I(50,5,1e3);return H("size",a),F(u,{useDevicePixelRatio:!1}).then(v=>{const{canvas:t,onDispose:l,onResize:x,size:R}=v,{width:f,height:m}=R,e=t.getContext("2d");if(!e)throw new Error("Your device doesn't support HTML5 canvases.");r.value=()=>{e.fillStyle="white",e.fillRect(0,0,f.value,m.value)},r.value(),x(r.value),l(h(()=>{for(let A of Array(10)){e.fillStyle=y(),e.strokeStyle=y();const c=o(0,a.value),i=o(0,a.value),_=o(0,f.value-c),d=o(0,m.value-i);e.fillRect(_,d,c,i),e.strokeRect(_,d,c,i)}}).pause)}),(v,t)=>(k(),w(B,null,{indicator:p(()=>[C(D,null,{default:p(()=>[n("span",{class:"button",onClick:t[0]||(t[0]=l=>a.value-=1)},"Smaller"),V,n("span",{class:"button",onClick:t[1]||(t[1]=l=>a.value+=1)},"Larger")]),_:1})]),default:p(()=>[n("canvas",{ref_key:"canvas",ref:u},null,512)]),_:1}))}});var Q=L($,[["__scopeId","data-v-53187bbc"]]);export{Q as default};
