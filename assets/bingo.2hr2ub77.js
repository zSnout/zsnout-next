import{D as V}from"./DocumentDisplay.6d0yf2eg.js";import{H as g}from"./BookmarkIcon.1ijfs95x.js";import{V as w}from"./VStack.3evi6szx.js";import{d as I,x as S,c as x,w as l,o as s,e as y,f as d,v as u,a as F,t as B,y as D,F as i,_ as H}from"./index.xh0zaea0.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./Field.5c7fkv56.js";const M=["onClick"],O=I({__name:"bingo",setup(z){const n=S([[],[],[],[],[]]);function N(e){const t=[];function c(){const o=Math.floor(Math.random()*15)+e+1;t.includes(o)?c():t.push(o)}for(let o=0;o<5;o++)c();return t}const m=[];for(let e=0;e<5;e++)m.push(N(15*e));for(let e=0;e<5;e++)for(let t=0;t<5;t++)n[e][t]={value:m[t][e],checked:!1};return(e,t)=>(s(),x(V,{center:""},{default:l(()=>[y(w,{class:"board",space:.5},{default:l(()=>[y(g,{class:"row",space:.5},{default:l(()=>[(s(),d(i,null,u("BINGO",c=>F("div",{class:D([{lCheck:c!=="B",rCheck:c!=="O"},"cell header second-layer text-color checked"])},B(c),3)),64))]),_:1}),(s(!0),d(i,null,u(n,(c,o)=>(s(),x(g,{class:"row",space:.5},{default:l(()=>[(s(!0),d(i,null,u(c,(a,r)=>{var _,h,k,p,f,C,v,b;return s(),d("button",{key:a.value,class:D([{"second-layer":a.checked,checked:a.checked,lCheck:(_=c[r-1])==null?void 0:_.checked,tCheck:(k=(h=n[o-1])==null?void 0:h[r])==null?void 0:k.checked,rCheck:(p=c[r+1])==null?void 0:p.checked,bCheck:(C=(f=n[o+1])==null?void 0:f[r])==null?void 0:C.checked,tlCheck:(b=(v=n[o-1])==null?void 0:v[r-1])==null?void 0:b.checked},"cell"]),onClick:E=>a.checked=!a.checked},B(a.value),11,M)}),128))]),_:2},1024))),256))]),_:1})]),_:1}))}});const R=H(O,[["__scopeId","data-v-47677a20"]]);export{R as default};
