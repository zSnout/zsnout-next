import{D as n}from"./DocumentDisplay.402qmvl2.js";import{H as c}from"./SharedNav.4wpq3a9c.js";import{d as i,o as l,c as u,w as o,b as d,r as p,n as _,E as f,g as m}from"./index.5pilq1g7.js";import{_ as h}from"./_plugin-vue_export-helper.35ltfn2z.js";const g=i({__name:"EditorAndViewer",props:{dualEditor:{type:Boolean}},setup(e){return(t,w)=>(l(),u(n,{center:"","explicit-height":"","max-width":""},{default:o(()=>[d(c,{class:_([{dualEditor:e.dualEditor},"stack"]),space:.75,style:{height:"100%","justify-content":"center"}},{default:o(()=>[p(t.$slots,"default",{},void 0,!0)]),_:3},8,["class","space"])]),_:3}))}});const C=h(g,[["__scopeId","data-v-525a27e0"]]),a=f();function s(){if(!a.value.hash)return"";let e=decodeURIComponent(a.value.hash);return e=e==null?void 0:e.slice(1),e==="#"?"":e!=null&&e.startsWith("#")?e.slice(1):e}function r(e){e||(e="#");const t=new URL(globalThis.location.href);t.hash=encodeURIComponent(e),globalThis.location.replace(t)}function H(e){return e&&!s()&&r(e),m({get(){return s()},set(t){r(t)}})}export{C as E,H as u};
