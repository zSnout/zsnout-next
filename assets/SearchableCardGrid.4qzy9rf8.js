import{d as p,q as i,X as m,v,Y as y,o as C,h as g,e as u,w,r as b,Z as k,_ as x}from"./index.4hldlluw.js";import{C as S}from"./CardGrid.3yqiv1o7.js";import{F as M}from"./Field.2ydu2jt8.js";const z=p({__name:"SearchableCardGrid",props:{placeholder:null,sizes:null},setup(d){const r=i(""),l=i(),f=k();function _(t){var s,n,c;const e=(n=(s=t.querySelector("p"))==null?void 0:s.textContent)!=null?n:t.textContent,o=(c=t.dataset)==null?void 0:c.keywords;return`${e} ${o}`.toLowerCase()}function h(t,e){if(e.length===1&&!e[0])return!0;const o=_(t);return e.every(s=>o.includes(s))}function a(){var o;const t=r.value.trim().split(/\s+/g),e=(o=l.value)==null?void 0:o.$el;if(!!e)for(let s of e.children)s.classList.toggle(f.hidden,!h(s,t))}return m(l,a,{subtree:!0,childList:!0}),v(a),y(a),(t,e)=>{var o;return C(),g("div",null,[u(M,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s),class:"field",placeholder:(o=d.placeholder)!=null?o:"Type to search zSnout...",type:"search"},null,8,["modelValue","placeholder"]),u(S,{ref_key:"grid",ref:l,class:"grid",sizes:d.sizes},{default:w(({size:s})=>[b(t.$slots,"default",{size:s},void 0,!0)]),_:3},8,["sizes"])])}}}),$="_hidden_1hstl_1",G={hidden:$};const V={$style:G},F=x(z,[["__cssModules",V],["__scopeId","data-v-b1a609cc"]]);export{F as S};
