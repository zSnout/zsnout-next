import{d as n,o as c,c as i,w as s,r as d,q as r,aL as m,az as p,b as f,e as v,t as y,u as B,n as k}from"./index.3a6d11oo.js";import{B as w}from"./Button.3tf6rlyu.js";import{_ as l}from"./_plugin-vue_export-helper.35ltfn2z.js";import{D as x}from"./DocumentDisplay.402qmvl2.js";import"./Navigation.17rmqtrz.js";import"./SharedNav.4wpq3a9c.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";const g=n({__name:"BigButton",setup(u){return(a,t)=>(c(),i(w,{class:"button"},{default:s(()=>[d(a.$slots,"default",{},void 0,!0)]),_:3}))}});const D=l(g,[["__scopeId","data-v-4d8d25d1"]]),T=n({__name:"reaction-time-tester",setup(u){const a=r(0),t=r("start"),_=m(()=>typeof t.value=="number"?`${t.value}ms`:{start:"Click to start.",wait:"Wait...",click:"GO!",lost:"You lost."}[t.value]);function o(){t.value==="start"?(t.value="wait",setTimeout(()=>{t.value="click",a.value=Date.now()},Math.random()*2e3+4e3)):t.value==="wait"?t.value="lost":t.value==="click"?t.value=Date.now()-a.value:t.value="start"}return p("keydown",e=>{e.key===" "&&!e.shiftKey&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&o()}),(e,h)=>(c(),i(x,{center:""},{default:s(()=>[f(D,{class:k([t.value,"button"]),onPointerdown:o},{default:s(()=>[v(y(B(_)),1)]),_:1},8,["class"])]),_:1}))}});const S=l(T,[["__scopeId","data-v-56cd63e9"]]);export{S as default};
