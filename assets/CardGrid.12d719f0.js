import{d as x,s as d,K as b,v as k,aa as C,j as w,o as g,f as z,c as y,w as B,q as S,m as A,at as G,e as O}from"./index.80e7fb4e.js";import{t as E}from"./SharedNav.c43960c8.js";import{_ as L,B as M}from"./VStack.ae3d12ba.js";const N=O(" Change Grid Size "),R=x({__name:"CardGrid",props:{sizes:{default:()=>["normal"]}},setup(_){const{sizes:a}=_,i=d(4),t=d(),e=d(a[0]),n=b("preferred-grid-size",e.value);a.includes(n.value)&&(e.value=n.value);function h(){e.value=a[(a.indexOf(e.value)+1)%a.length],n.value=e.value}function c(){if(t.value){const r=getComputedStyle(t.value);i.value=r.gridTemplateColumns.split(" ").length}}return k(t,c),C(e,c),w(t,"keydown",r=>{var m,f,p,v;const l=r.composedPath(),u=l[l.indexOf(t.value)-1];if(!u)return;const s=E(document.documentElement),o=s.indexOf(u);if(o!==-1)switch(r.key){case"ArrowRight":(m=s[o+1])==null||m.focus();break;case"ArrowLeft":(f=s[o-1])==null||f.focus();break;case"ArrowDown":(p=s[Math.min(o+i.value,s.length-1)])==null||p.focus();break;case"ArrowUp":(v=s[Math.max(o-i.value,0)])==null||v.focus();break}}),(r,l)=>(g(),z("div",{ref_key:"grid",ref:t,class:G([{"no-desc":e.value==="small"||e.value==="icon","no-title":e.value==="icon"},"grid"])},[a.length>1?(g(),y(M,{key:0,class:"resizer",onClick:h},{default:B(()=>[N]),_:1})):S("",!0),A(r.$slots,"default",{},void 0,!0)],2))}});var q=L(R,[["__scopeId","data-v-ad444f94"]]);export{q as C};
