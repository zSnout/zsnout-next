import{d as r,u as s,o as t,c,w as d,r as a,R as u,h as l}from"./index.4z17mwie.js";const k=["href","target"],h=r({__name:"Link",props:{forceReload:{type:Boolean},to:null},setup(e){const{to:o,forceReload:f}=e,i=/^\/(?!\/)|\.\.?\//.test(o);return(n,m)=>s(i)&&!e.forceReload?(t(),c(s(u),{key:0,to:e.to},{default:d(()=>[a(n.$slots,"default")]),_:3},8,["to"])):(t(),l("a",{key:1,href:e.to,target:e.forceReload?void 0:"_blank"},[a(n.$slots,"default")],8,k))}}),y={key:1},R={key:2},B=r({__name:"MaybeLink",props:{forceReload:{type:Boolean},inline:{type:Boolean},to:null},setup(e){return(o,f)=>e.to!==void 0?(t(),c(h,{key:0,"force-reload":e.forceReload,to:e.to},{default:d(()=>[a(o.$slots,"default")]),_:3},8,["force-reload","to"])):e.inline?(t(),l("span",y,[a(o.$slots,"default")])):(t(),l("div",R,[a(o.$slots,"default")]))}});export{B as _};
