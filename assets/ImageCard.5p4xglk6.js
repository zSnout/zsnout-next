import{d as u,q as n,U as m,o as i,c as f,w as h,a as t,ax as d,u as l,t as s,h as _,j as y}from"./index.nr51tphb.js";import{_ as p}from"./SearchableCardGrid.h7b6h50y.js";import{_ as g}from"./_plugin-vue_export-helper.35ltfn2z.js";const v=["alt","src"],x={class:"title text-color"},k={class:"description"},w={key:0,class:"corner drop-shadow",title:"This page has a list of other subpages. Click to explore further."},C={class:"corner-clip"},b={class:"corner-text"},B=u({__name:"ImageCard",props:{alt:null,description:null,forceReload:{type:Boolean},keywords:null,label:null,src:null,title:null,to:null},setup(e){const c=n(),{height:a}=m(c),o=n(!1);return(I,r)=>(i(),f(p,{class:"card second-layer hoverline focusline","force-reload":e.forceReload,to:e.to,"data-keywords":e.keywords},{default:h(()=>[t("img",{ref_key:"image",ref:c,class:"image",alt:e.alt,src:e.src,style:d(o.value?"":"display: none"),"aria-hidden":"true",onLoad:r[0]||(r[0]=$=>o.value=!0)},null,44,v),t("div",{class:"filter",style:d({height:`${l(a)}px`,top:`calc(-${l(a)}px - 0.5em)`,marginBottom:`calc(-${l(a)}px)`,display:o.value?void 0:"none"}),"aria-hidden":"true"},null,4),t("p",x,s(e.title),1),t("p",k,s(e.description),1),e.label?(i(),_("div",w,[t("div",C,[t("div",b,s(e.label),1)])])):y("",!0)]),_:1},8,["force-reload","to","data-keywords"]))}});const N=g(B,[["__scopeId","data-v-5db9674c"]]);export{N as I};
