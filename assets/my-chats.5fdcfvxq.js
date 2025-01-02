import{d as w,r as p,K as x,f,e as l,w as a,F as g,E as d,B as r,o as i,b as s,t as B,u as o,O as $,a as y,k as v,c as k,v as V,aC as _}from"./index.xh0zaea0.js";import{B as C}from"./VStack.3evi6szx.js";import{C as T}from"./Card.4h2z4e59.js";import{C as b}from"./CardGrid.1kdxvvm0.js";import{D}from"./DocumentDisplay.6d0yf2eg.js";import{F}from"./Field.5c7fkv56.js";import{_ as K,M as L}from"./BookmarkIcon.1ijfs95x.js";import{S as N}from"./SearchableCardGrid.7foww6wh.js";import{T as O}from"./Title.4eiq6n5a.js";import"./useDateOf.chuxq7z2.js";import"./MaybeLink.vue_vue_type_script_setup_true_lang.nijdkso1.js";import"./Navigation.vue_vue_type_script_setup_true_lang.3qfjvw5m.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const S={key:0},Y=y("p",null,"Pick a title for your chat.",-1),c=p([]);d.on("chat:index",h=>c.value=h);const Z=w({__name:"my-chats",setup(h){const m=p(!1),u=p(!1),n=p("");return x(()=>{d.emit("chat:request:index",r.value)}),(E,e)=>(i(),f(g,null,[l(D,null,{default:a(()=>[l(O,null,{default:a(()=>[s(B(o($)?`${o($)}'s`:"My")+" Chats",1)]),_:1}),o(r)?v("",!0):(i(),f("p",S,[s(" Looks like you're not logged in. "),y("span",{class:"link",onClick:e[0]||(e[0]=t=>m.value=!0)},"Log in"),s(" or "),y("span",{class:"link",onClick:e[1]||(e[1]=t=>m.value=!0)},"create an account"),s(" to access the Chat app. ")])),o(r)&&c.value.length<100?(i(),k(b,{key:1,style:{"margin-bottom":"2em"}},{default:a(()=>[l(C,{onClick:e[2]||(e[2]=t=>(u.value=!0,n.value=""))},{default:a(()=>[s(" Create a Chat ")]),_:1})]),_:1})):v("",!0),o(r)&&c.value.length?(i(),k(N,{key:2,placeholder:"Search your chat groups..."},{default:a(()=>[(i(!0),f(g,null,V(c.value,t=>(i(),k(T,{class:"card text-color",description:t.level==="manage"?"You manage this chat.":t.level==="comment"?"You may comment on this chat.":t.level==="view"?"You can view this chat.":"You cannot access this chat.",title:t.title,to:`/chat?id=${t.id}`},null,8,["description","title","to"]))),256))]),_:1})):v("",!0)]),_:1}),l(K,{open:m.value,"onUpdate:open":e[3]||(e[3]=t=>m.value=t)},null,8,["open"]),l(L,{open:u.value},{buttons:a(()=>[l(C,{onClick:e[6]||(e[6]=t=>n.value&&(o(d).emit("chat:create",o(r),n.value),u.value=!1))},{default:a(()=>[s(" OK ")]),_:1}),l(C,{cancel:"",onClick:e[7]||(e[7]=t=>u.value=!1)},{default:a(()=>[s("Cancel")]),_:1})]),default:a(()=>[Y,l(F,{modelValue:n.value,"onUpdate:modelValue":e[4]||(e[4]=t=>n.value=t),autocomplete:"off",placeholder:"Title...",onKeydown:e[5]||(e[5]=_(t=>n.value&&(o(d).emit("chat:create",o(r),n.value),u.value=!1),["enter"]))},null,8,["modelValue"])]),_:1},8,["open"])],64))}});export{Z as default};
