import{_ as d}from"./Modal.f0b23e25.js";import{d as i,o as u,h as p}from"./index.f1b52cb6.js";const r=["autocomplete","placeholder","type","value"],m=i({__name:"Field",props:{modelValue:null,type:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(e){return(o,t)=>{var l,a;return u(),p("input",{class:"second-layer field focusline",autocomplete:(l=e.autocomplete)!=null?l:"off",placeholder:e.placeholder,type:(a=e.type)!=null?a:"text",value:e.modelValue,onInput:t[0]||(t[0]=n=>o.$emit("update:modelValue",n.target.value))},null,40,r)}}});var f=d(m,[["__scopeId","data-v-997a82b4"]]);export{f as F};
