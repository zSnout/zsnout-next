import{u as _,E as g}from"./useLocationHash.1zqo29vv.js";import{a as h,i as v,_ as x}from"./preset.1a4zyyg5.js";import{C}from"./Console.65z5j7wy.js";import{d as c,a8 as V,a1 as l,aC as w,x as E,o as d,c as f,w as y,e as m,u,i as M}from"./index.4z0bzixf.js";import"./DocumentDisplay.6d0yf2eg.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./AceEditor.5eal9hit.js";import"./_commonjsHelpers.40x35aen.js";import"./Dropdown.5phpgqpn.js";import"./Labeled.59ihovi6.js";const b=c({__name:"Evaluator",props:{code:{}},emits:["init","save"],setup(i){const n=V(i,"code");l(n,()=>{o[o.length-1].content!=="Waiting for input to finish..."&&o.push({type:"log",id:Math.random(),content:"Waiting for input to finish..."})});const e=w(n,1e3),a=h(e);function p(s){return[...s.output.split(/\n+/g).map(r=>(console.log(r),{type:"log",id:Math.random(),content:r})),{type:"log",id:Math.random(),content:s.result}]}l(e,()=>{o.splice(0,o.length,...p(a.value))});const o=E(p(a.value));return(s,r)=>(d(),f(C,{field:"",messages:o},null,8,["messages"]))}}),I=c({__name:"evaluator",setup(i){const t=_(v);return(n,e)=>(d(),f(g,null,{default:y(()=>[m(x,{modelValue:u(t),"onUpdate:modelValue":e[0]||(e[0]=a=>M(t)?t.value=a:null),round:""},null,8,["modelValue"]),m(b,{code:u(t),round:""},null,8,["code"])]),_:1}))}});export{I as default};
