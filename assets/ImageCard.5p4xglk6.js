import{d as u,q as r,P as m,o as i,c as f,w as h,a as t,A as d,u as s,t as o,h as _,j as y,_ as g}from"./index.4n0lca12.js";import{_ as p}from"./MaybeLink.vue_vue_type_script_setup_true_lang.5co93amo.js";const v=["alt","src"],x={class:"title text-color"},k={class:"description"},w={key:0,class:"corner drop-shadow",title:"This page has a list of other subpages. Click to explore further."},C={class:"corner-clip"},b={class:"corner-text"},B=u({__name:"ImageCard",props:{alt:null,description:null,forceReload:{type:Boolean},keywords:null,label:null,src:null,title:null,to:null},setup(e){const c=r(),{height:a}=m(c),l=r(!1);return(I,n)=>(i(),f(p,{class:"card second-layer hoverline focusline","force-reload":e.forceReload,to:e.to,"data-keywords":e.keywords},{default:h(()=>[t("img",{ref_key:"image",ref:c,class:"image",alt:e.alt,src:e.src,style:d(l.value?"":"display: none"),"aria-hidden":"true",onLoad:n[0]||(n[0]=$=>l.value=!0)},null,44,v),t("div",{class:"filter",style:d({height:`${s(a)}px`,top:`calc(-${s(a)}px - 0.5em)`,marginBottom:`calc(-${s(a)}px)`,display:l.value?void 0:"none"}),"aria-hidden":"true"},null,4),t("p",x,o(e.title),1),t("p",k,o(e.description),1),e.label?(i(),_("div",w,[t("div",C,[t("div",b,o(e.label),1)])])):y("",!0)]),_:1},8,["force-reload","to","data-keywords"]))}});const E=g(B,[["__scopeId","data-v-5db9674c"]]);export{E as I};
