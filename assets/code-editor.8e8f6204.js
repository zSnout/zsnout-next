import{B as m}from"./VStack.a5267f59.js";import{u as S,C}from"./Console.56313217.js";import{D as b}from"./DocumentDisplay.9030570c.js";import{H as v,F as V}from"./SharedNav.13deb094.js";import{I as x}from"./InlineCheckboxField.3e3d10ec.js";import{L as i}from"./Labeled.c69bdb91.js";import{_}from"./Editor3.815d54d7.js";import{d as h,s as p,o as y,c as g,w as a,b as o,u as t,aI as k,e as f}from"./index.307c9757.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.3afb070c.js";import"./Logo.0710e561.js";import"./LogoLight.1b2c95c2.js";import"./AceEditor.ab7e777b.js";const U=f('Set to "23"'),w=f(" Set to a random value "),B=f(" Set placeholder to a random value "),E=h({__name:"code-editor",setup($){const s=p(""),n=p("placeholder"),u=p(!1),d=S(),{field:r,placeholder:c}=d;return(D,e)=>(y(),g(b,{"explicit-height":"","max-width":""},{options:a(()=>[o(v,{space:.75,stretch:""},{default:a(()=>[o(m,{onClick:e[3]||(e[3]=l=>s.value="23")},{default:a(()=>[U]),_:1}),o(m,{onClick:e[4]||(e[4]=l=>s.value=""+Math.random())},{default:a(()=>[w]),_:1})]),_:1},8,["space"]),o(m,{onClick:e[5]||(e[5]=l=>n.value=""+Math.random())},{default:a(()=>[B]),_:1}),o(i,{label:"Model Value"},{default:a(()=>[o(V,{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=l=>s.value=l)},null,8,["modelValue"])]),_:1}),o(i,{label:"Placeholder"},{default:a(()=>[o(V,{modelValue:n.value,"onUpdate:modelValue":e[7]||(e[7]=l=>n.value=l)},null,8,["modelValue"])]),_:1}),o(i,{label:"Readonly?"},{default:a(()=>[o(x,{modelValue:u.value,"onUpdate:modelValue":e[8]||(e[8]=l=>u.value=l)},null,8,["modelValue"])]),_:1})]),default:a(()=>[o(v,{space:.75,style:{height:"100%"}},{default:a(()=>[o(_,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),placeholder:n.value,readonly:u.value,round:"",style:{flex:"1"},onSave:t(d).console.error},null,8,["modelValue","placeholder","readonly","onSave"]),o(C,{field:t(r),"onUpdate:field":e[1]||(e[1]=l=>k(r)?r.value=l:null),messages:t(d).messages,"onUpdate:messages":e[2]||(e[2]=l=>t(d).messages=l),placeholder:t(c),stretch:"",style:{width:"min(50%, 400px)"},onSelect:t(d).onSelect,onSubmit:t(d).onSubmit},null,8,["field","messages","placeholder","onSelect","onSubmit"])]),_:1},8,["space"])]),_:1}))}});export{E as default};
