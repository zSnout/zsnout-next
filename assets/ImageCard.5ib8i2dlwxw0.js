import{d as s,q as f,U as m,o as l,c as v,w as g,a as t,ax as c,u as r,t as d,h as b,k as p}from"./index.12rlktu20k34.js";import{_ as h}from"./SearchableCardGrid.28jm0e74otus.js";import{_ as u}from"./plugin-vue_export-helper.62h235na3u80.js";const y=["alt","src"],x={class:"title text-color"},k={class:"description"},_={key:0,class:"corner drop-shadow",title:"This page has a list of other subpages. Click to explore further."},w={class:"corner-clip"},C={class:"corner-text"},B=s({__name:"ImageCard",props:{alt:null,description:null,forceReload:{type:Boolean},keywords:null,label:null,src:null,title:null,to:null},setup(e){const i=f(),{height:a}=m(i),o=f(!1);return(I,n)=>(l(),v(h,{class:"card second-layer hoverline focusline","force-reload":e.forceReload,to:e.to,"data-keywords":e.keywords},{default:g(()=>[t("img",{ref_key:"image",ref:i,class:"image",alt:e.alt,src:e.src,style:c(o.value?"":"display: none"),"aria-hidden":"true",onLoad:n[0]||(n[0]=$=>o.value=!0)},null,44,y),t("div",{class:"filter",style:c({height:`${r(a)}px`,top:`calc(-${r(a)}px - 0.5em)`,marginBottom:`calc(-${r(a)}px)`,display:o.value?void 0:"none"}),"aria-hidden":"true"},null,4),t("p",x,d(e.title),1),t("p",k,d(e.description),1),e.label?(l(),b("div",_,[t("div",w,[t("div",C,d(e.label),1)])])):p("",!0)]),_:1},8,["force-reload","to","data-keywords"]))}});var N=u(B,[["__scopeId","data-v-1dfffb37"]]);export{N as I};
