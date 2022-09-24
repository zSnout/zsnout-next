import{D as x}from"./DocumentDisplay.1u3n8z7b.js";import{M as b}from"./MiddleText.j1cutmtm.js";import{_ as k}from"./NumericField.vue_vue_type_script_setup_true_lang.5g1ob2jp.js";import{d as w,q as _,g as T,o as z,c as C,w as r,y as I,b as d,a as s,t as M,u as S,e as V,p as q,l as D,_ as B}from"./index.158tmzqu.js";import{T as E}from"./Title.3fz2k97a.js";import"./Navigation.3ml0eptj.js";import"./BookmarkIcon.108uetaj.js";import"./VStack.6d7g92uw.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.3yzrssnp.js";const p=n=>(q("data-v-d55b1f8f"),n=n(),D(),n),N=V("Collatz Evaluator"),j={class:"sticky"},O={class:"result"},R=p(()=>s("p",null," To generate a Collatz sequence for a number, you start with a positive integer. If the number is even, halve it. If it is odd, multiply it by three and add one. Repeat this until you get stuck in a loop. ",-1)),P=p(()=>s("p",null," The Collatz conjecture states that every positive integer eventually gets stuck in the 4-2-1 loop. Try finding a Collatz sequence by entering any number you like into the evaluator! ",-1)),U=p(()=>s("p",null," The graph shows the peaks and valleys of the sequence based off of your number. ",-1)),W=w({__name:"collatz-evaluator",setup(n){const o=_(),u=_(17),m=T(()=>{let a=Math.max(1,Math.round(u.value));const e=[a];for(;a!==1;)a%2===0?a/=2:a=3*a+1,e.push(a);if(e.length===1&&e.push(e[0]),o.value){const i=Math.max(e.length-1,10),v=o.value.width=50*i,c=o.value.height=10*i,t=o.value.getContext("2d");if(!t)return e;const y=Math.max(...e),h=l=>c-(l-1)*(c-1)/y,f=l=>l/(e.length-1)*v;I.value?t.strokeStyle="white":t.strokeStyle="dark";let g=0;t.clearRect(0,0,o.value.width,o.value.height),t.beginPath(),t.moveTo(f(0),h(e[0]));for(const l of e.slice(1))t.lineTo(f(++g),h(l));t.lineWidth=c/40,t.stroke()}return e});return(a,e)=>(z(),C(x,{center:""},{help:r(()=>[R,P,U]),default:r(()=>[d(b,null,{default:r(()=>[d(E,null,{default:r(()=>[N]),_:1}),s("div",j,[d(k,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=i=>u.value=i)},null,8,["modelValue"]),s("canvas",{ref_key:"canvas",ref:o,class:"canvas",height:"200"},null,512)]),s("p",O,M(S(m).join(", ")),1)]),_:1})]),_:1}))}});const Z=B(W,[["__scopeId","data-v-d55b1f8f"]]);export{Z as default};
