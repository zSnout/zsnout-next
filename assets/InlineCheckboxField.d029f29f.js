import{_ as d}from"./BookmarkIcon.ab5cd17e.js";import{d as i,o as c,f as p}from"./index.7b903477.js";const r=["autocomplete","checked","type"],u=i({__name:"InlineCheckboxField",props:{modelValue:{type:Boolean},type:null,autocomplete:null},emits:["update:modelValue"],setup(e){return(a,t)=>{var o,n;return c(),p("input",{class:"field",autocomplete:(o=e.autocomplete)!=null?o:"off",checked:e.modelValue,type:(n=e.type)!=null?n:"checkbox",onChange:t[0]||(t[0]=l=>a.$emit("update:modelValue",l.target.checked))},null,40,r)}}});var _=d(u,[["__scopeId","data-v-5a55106d"]]);export{_ as I};
