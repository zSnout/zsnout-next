import{D as r}from"./DocumentDisplay.1u3n8z7b.js";import{H as c}from"./BookmarkIcon.108uetaj.js";import{d as i,o as l,c as u,w as o,b as d,r as p,n as _,_ as f,at as m,g as h}from"./index.158tmzqu.js";const g=i({__name:"EditorAndViewer",props:{dualEditor:{type:Boolean}},setup(e){return(t,w)=>(l(),u(r,{center:"","explicit-height":"","max-width":""},{default:o(()=>[d(c,{class:_([{dualEditor:e.dualEditor},"stack"]),space:.75,style:{height:"100%","justify-content":"center"}},{default:o(()=>[p(t.$slots,"default",{},void 0,!0)]),_:3},8,["class","space"])]),_:3}))}});const y=f(g,[["__scopeId","data-v-525a27e0"]]),a=m();function s(){if(!a.value.hash)return"";let e=decodeURIComponent(a.value.hash);return e=e==null?void 0:e.slice(1),e==="#"?"":e!=null&&e.startsWith("#")?e.slice(1):e}function n(e){e||(e="#");const t=new URL(globalThis.location.href);t.hash=encodeURIComponent(e),globalThis.location.replace(t)}function C(e){return e&&!s()&&n(e),h({get(){return s()},set(t){n(t)}})}export{y as E,C as u};
