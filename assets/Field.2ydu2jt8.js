import{d as n,o as d,h as p,_ as c}from"./index.180ycda5.js";const s=["autocomplete","placeholder","type","value"],m=n({__name:"Field",props:{modelValue:null,type:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(e){return(a,l)=>{var t,o;return d(),p("input",{class:"second-layer field focusline",autocomplete:(t=e.autocomplete)!=null?t:"off",placeholder:e.placeholder,type:(o=e.type)!=null?o:"text",value:e.modelValue,onInput:l[0]||(l[0]=u=>a.$emit("update:modelValue",u.target.value))},null,40,s)}}});const r=c(m,[["__scopeId","data-v-bff43206"]]);export{r as F};
