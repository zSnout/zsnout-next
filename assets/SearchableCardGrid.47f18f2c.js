import{d as y,u as p,o as i,c as g,w as k,r as u,R as w,h as x,m as _,aP as C,aQ as $,q as b,aM as M,b as v}from"./index.2148704c.js";import{C as R}from"./CardGrid.2c547474.js";import{F as S}from"./SharedNav.4f264098.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";const L=["href","target"],N=y({__name:"Link",props:{forceReload:{type:Boolean},to:null},setup(o){const{to:l,forceReload:r}=o,n=/^\/(?!\/)|\.\.?\//.test(l);return(d,f)=>p(n)&&!o.forceReload?(i(),g(p(w),{key:0,to:o.to},{default:k(()=>[u(d.$slots,"default")]),_:3},8,["to"])):(i(),x("a",{key:1,href:o.to,target:o.forceReload?void 0:"_blank"},[u(d.$slots,"default")],8,L))}}),B="_hidden_1hstl_1";var G={hidden:B};const V=y({__name:"SearchableCardGrid",props:{placeholder:null,sizes:null},setup(o){const l=_(""),r=_(),n=C();function d(t){var s,m,h;const e=(m=(s=t.querySelector("p"))==null?void 0:s.textContent)!=null?m:t.textContent,a=(h=t.dataset)==null?void 0:h.keywords;return`${e} ${a}`.toLowerCase()}function f(t,e){if(e.length===1&&!e[0])return!0;const a=d(t);return e.every(s=>a.includes(s))}function c(){var a;const t=l.value.trim().split(/\s+/g),e=(a=r.value)==null?void 0:a.$el;if(!!e)for(let s of e.children)s.classList.toggle(n.hidden,!f(s,t))}return $(r,c,{subtree:!0,childList:!0}),b(c),M(c),(t,e)=>{var a;return i(),x("div",null,[v(S,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),class:"field",placeholder:(a=o.placeholder)!=null?a:"Type to search zSnout...",type:"search"},null,8,["modelValue","placeholder"]),v(R,{ref_key:"grid",ref:r,class:"grid",sizes:o.sizes},{default:k(()=>[u(t.$slots,"default",{},void 0,!0)]),_:3},8,["sizes"])])}}}),E={$style:G};var P=z(V,[["__cssModules",E],["__scopeId","data-v-428573ac"]]);export{P as S,N as _};
