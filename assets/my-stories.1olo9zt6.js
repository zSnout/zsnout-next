import{d as B,r as d,K as S,f as v,e as l,w as o,F as g,E as p,B as n,o as i,b as s,t as V,u as a,O as x,a as C,k as c,c as k,v as _,aC as w}from"./index.xh0zaea0.js";import{B as y}from"./VStack.3evi6szx.js";import{C as T}from"./Card.4h2z4e59.js";import{C as N}from"./CardGrid.1kdxvvm0.js";import{D as b}from"./DocumentDisplay.6d0yf2eg.js";import{F as D}from"./Field.5c7fkv56.js";import{_ as F,M as K}from"./BookmarkIcon.1ijfs95x.js";import{S as L}from"./SearchableCardGrid.7foww6wh.js";import{T as O}from"./Title.4eiq6n5a.js";import"./useDateOf.chuxq7z2.js";import"./MaybeLink.vue_vue_type_script_setup_true_lang.nijdkso1.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const E={key:0},M=C("p",null,"Pick a title for your story.",-1),f=d([]);p.on("story:index",$=>f.value=$);const h=B({__name:"my-stories",setup($){const m=d(!1),u=d(!1),r=d("");return S(()=>{p.emit("story:request:index",n.value)}),(G,e)=>(i(),v(g,null,[l(b,null,{default:o(()=>[l(O,null,{default:o(()=>[s(V(a(x)?`${a(x)}'s`:"My")+" Stories",1)]),_:1}),a(n)?c("",!0):(i(),v("p",E,[s(" Looks like you're not logged in. "),C("span",{class:"link",onClick:e[0]||(e[0]=t=>m.value=!0)},"Log in"),s(" or "),C("span",{class:"link",onClick:e[1]||(e[1]=t=>m.value=!0)},"create an account"),s(" to access the Stories app. ")])),a(n)&&f.value.length<100?(i(),k(N,{key:1,style:{"margin-bottom":"2em"}},{default:o(()=>[l(y,{onClick:e[2]||(e[2]=t=>(u.value=!0,r.value=""))},{default:o(()=>[s(" New Story ")]),_:1})]),_:1})):c("",!0),a(n)&&f.value.length?(i(),k(L,{key:2,placeholder:"Search your stories..."},{default:o(()=>[(i(!0),v(g,null,_(f.value,t=>(i(),k(T,{class:"card text-color",description:`${t.activeThreadCount} active threads.`,title:t.title,to:`/story?id=${t.id}`},null,8,["description","title","to"]))),256))]),_:1})):c("",!0)]),_:1}),l(F,{open:m.value,"onUpdate:open":e[3]||(e[3]=t=>m.value=t)},null,8,["open"]),l(K,{open:u.value},{buttons:o(()=>[l(y,{onClick:e[6]||(e[6]=t=>r.value&&(a(p).emit("story:create",a(n),r.value),u.value=!1))},{default:o(()=>[s(" OK ")]),_:1}),l(y,{cancel:"",onClick:e[7]||(e[7]=t=>u.value=!1)},{default:o(()=>[s("Cancel")]),_:1})]),default:o(()=>[M,l(D,{modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=t=>r.value=t),autocomplete:"off",placeholder:"Title...",onKeydown:e[5]||(e[5]=w(t=>r.value&&(a(p).emit("story:create",a(n),r.value),u.value=!1),["enter"]))},null,8,["modelValue"])]),_:1},8,["open"])],64))}});export{h as default};
