import{u as _,E as g}from"./useLocationHash.2efrg97q.js";import{a as h,i as v,_ as V}from"./preset.1mstdl8s.js";import{C as b}from"./Console.1ycx3wtc.js";import{d as c,a3 as w,ak as p,b6 as x,B as C,o as d,c as f,w as E,b as u,u as m,aH as k}from"./index.3a6d11oo.js";import"./DocumentDisplay.402qmvl2.js";import"./Navigation.17rmqtrz.js";import"./SharedNav.4wpq3a9c.js";import"./Button.3tf6rlyu.js";import"./_plugin-vue_export-helper.35ltfn2z.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./AceEditor.1gmgqqjd.js";import"./Dropdown.xvvlzphb.js";import"./Labeled.29mn7ohi.js";const y=c({__name:"Evaluator",props:{code:null},emits:["init","save"],setup(i){const n=w(i,"code");p(n,()=>{o[o.length-1].content!=="Waiting for input to finish..."&&o.push({type:"log",id:Math.random(),content:"Waiting for input to finish..."})});const e=x(n,1e3),a=h(e);function l(s){return[...s.output.split(/\n+/g).map(r=>(console.log(r),{type:"log",id:Math.random(),content:r})),{type:"log",id:Math.random(),content:s.result}]}p(e,()=>{o.splice(0,o.length,...l(a.value))});const o=C(l(a.value));return(s,r)=>(d(),f(b,{field:"",messages:o},null,8,["messages"]))}}),F=c({__name:"evaluator",setup(i){const t=_(v);return(n,e)=>(d(),f(g,null,{default:E(()=>[u(V,{modelValue:m(t),"onUpdate:modelValue":e[0]||(e[0]=a=>k(t)?t.value=a:null),round:""},null,8,["modelValue"]),u(y,{code:m(t),round:""},null,8,["code"])]),_:1}))}});export{F as default};
