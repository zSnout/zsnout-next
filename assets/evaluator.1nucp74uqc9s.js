import{u as _,E as g}from"./useLocationHash.2zc5j1f5ajm0.js";import{a as h,i as v,_ as b}from"./preset.2xn6v6ja0980.js";import{C as V}from"./Console.3fl4czmju3k0.js";import{d as c,a3 as w,ak as p,bb as x,B as C,o as d,c as f,w as E,b as u,u as m,aI as k}from"./index.40zdbs07qwo0.js";import"./DocumentDisplay.f38sgubl5e80.js";import"./Navigation.64w2aw5yn6g0.js";import"./SharedNav.48t0lj4lmns0.js";import"./Button.32h7782uxra0.js";import"./plugin-vue_export-helper.62h235na3u80.js";import"./Logo.4djlqykqmru0.js";import"./LogoLight.11xzt69hf600.js";import"./AceEditor.4c7keaam2ru0.js";import"./Dropdown.5txnd8g85w00.js";import"./Labeled.x87dtudfywg0.js";const y=c({__name:"Evaluator",props:{code:null},emits:["init","save"],setup(i){const n=w(i,"code");p(n,()=>{o[o.length-1].content!=="Waiting for input to finish..."&&o.push({type:"log",id:Math.random(),content:"Waiting for input to finish..."})});const e=x(n,1e3),a=h(e);function l(s){return[...s.output.split(/\n+/g).map(r=>(console.log(r),{type:"log",id:Math.random(),content:r})),{type:"log",id:Math.random(),content:s.result}]}p(e,()=>{o.splice(0,o.length,...l(a.value))});const o=C(l(a.value));return(s,r)=>(d(),f(V,{field:"",messages:o},null,8,["messages"]))}}),z=c({__name:"evaluator",setup(i){const t=_(v);return(n,e)=>(d(),f(g,null,{default:E(()=>[u(b,{modelValue:m(t),"onUpdate:modelValue":e[0]||(e[0]=a=>k(t)?t.value=a:null),round:""},null,8,["modelValue"]),u(y,{code:m(t),round:""},null,8,["code"])]),_:1}))}});export{z as default};
