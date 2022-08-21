import{d as v,o as r,c as _,w as p,q as w,s as b,aM as B,f as d,az as V,av as S,r as E,k as C,F as g,b as m,t as y,u as N,a as M,l as x,e as D,p as F,g as I}from"./index.307c9757.js";import{V as K,B as L}from"./VStack.a5267f59.js";import{D as T}from"./Dropdown.3afb070c.js";import{F as $,H as U}from"./SharedNav.13deb094.js";import{L as j}from"./Labeled.c69bdb91.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";const z=v({__name:"MaybeLabeled",props:{label:null},setup(a){return(s,n)=>a.label?(r(),_(j,{key:0,label:a.label},{default:p(()=>[w(s.$slots,"default")]),_:3},8,["label"])):w(s.$slots,"default",{key:1})}}),A=v({__name:"Node",props:{node:null},setup(a){const{node:s}=a,n=b();return B(()=>{var c;(c=n.value)==null||c.replaceWith(s)}),(c,u)=>(r(),d("div",{ref_key:"el",ref:n},null,512))}});const H=a=>(F("data-v-2f2b0038"),a=a(),I(),a),O=H(()=>M("option",{disabled:"",value:""},"Choose an option...",-1)),W=["value"],G={key:1,class:"log"},J={key:2,class:"log"},Q={key:3,class:"log"},R=["onSubmit"],X=D("\u2714");function se(){const a={...globalThis.console,bindKey(t,e){a.focus(),f.push((l,o)=>(t===l&&(o(),e()),!0))},clear(){s.splice(0,s.length)},error(t,...e){s.push({type:"error",id:Math.random(),content:e.length?[t,...e]:t})},focus(){var t;(t=s.focus)==null||t.call(s)},key(t){return new Promise(e=>{a.focus(),f.push((l,o)=>{if(t===l){o(),e();return}return!0})})},line(){s.push({type:"line",id:Math.random()})},log(t,...e){s.push({type:"log",id:Math.random(),content:e.length?[t,...e]:t})},prompt(t,e){return n.value=t,a.focus(),new Promise(l=>{e?i.push(o=>{if(o)n.value="",l(o);else return!0}):i.push(o=>{n.value="",l(o)})})},select(t,e){const l=Math.random();return s.push({id:l,label:t,options:e,type:"select"}),setTimeout(a.focus),new Promise(o=>{u[l]=o})},user(t,...e){s.push({type:"user",id:Math.random(),content:e.length?[t,...e]:t})},warn(t,...e){s.push({type:"warn",id:Math.random(),content:e.length?[t,...e]:t})}},s=E([]),n=b(""),c=b(""),u=Object.create(null),i=[],f=[];return{console:a,field:c,messages:s,placeholder:n,onKey(t,e){f.splice(0,f.length,...f.filter(l=>l(t,e)))},onSelect(t,e){var l;(l=u[t])==null||l.call(u,e),delete u[t]},onSubmit(t){i.splice(0,i.length,...i.filter(e=>e(t)))}}}const Y=v({__name:"Console",props:{field:null,messages:null,placeholder:null,stretch:{type:Boolean}},emits:["key","select","submit","update:field","update:messages"],setup(a,{emit:s}){const n=a;function c(){if(n.field){const e={type:"user",id:Math.random(),content:n.field};s("update:messages",n.messages.concat(e))}s("update:field",""),s("submit",n.field?n.field:void 0)}function u(e){let l=!1;s("key","Enter",()=>l=!0),l?e.preventDefault():c()}const i=b();n.messages.focus=()=>{var e,l;(l=(e=V(i))==null?void 0:e.querySelector("select:not([disabled]), input"))==null||l.focus()};const f=n.messages,t=e=>e instanceof globalThis.Node;return(e,l)=>(r(),_(K,{ref_key:"consoleEl",ref:i,class:S([{stretch:a.stretch},"console"])},{default:p(()=>[(r(!0),d(g,null,C(N(f),o=>(r(),d(g,{key:o.id},[o.type==="select"?(r(),_(z,{key:0,class:"log",label:o.label,style:{"margin-bottom":"0.25em"}},{default:p(()=>[m(T,{class:"select",disabled:!!o.selected,"model-value":o.selected||"","onUpdate:modelValue":h=>h&&(o.selected=h)&&e.$emit("select",o.id,h)},{default:p(()=>[O,(r(!0),d(g,null,C(o.options,(h,k)=>(r(),d("option",{key:k,value:k},y(h),9,W))),128))]),_:2},1032,["disabled","model-value","onUpdate:modelValue"])]),_:2},1032,["label"])):o.type==="line"?(r(),d("hr",G)):Array.isArray(o.content)?(r(),d("p",J,y(o.content.join(" ")),1)):t(o.content)?(r(),d("p",Q,[m(A,{node:o.content},null,8,["node"])])):(r(),d("p",{key:4,class:S([o.type,"log"])},y(o.content),3))],64))),128)),M("form",{class:"form",style:{"margin-top":"auto"},onSubmit:x(c,["prevent"])},[m(U,{space:.75},{default:p(()=>[m($,{ref:"fieldEl",class:"field","model-value":a.field?a.field:"",placeholder:a.placeholder,onKeydown:l[0]||(l[0]=o=>e.$emit("key",o.key,()=>o.preventDefault())),"onUpdate:modelValue":l[1]||(l[1]=o=>e.$emit("update:field",o))},null,8,["model-value","placeholder"]),m(L,{onClick:u},{default:p(()=>[X]),_:1})]),_:1},8,["space"])],40,R)]),_:1},8,["class"]))}});var ae=q(Y,[["__scopeId","data-v-2f2b0038"]]);export{ae as C,se as u};
