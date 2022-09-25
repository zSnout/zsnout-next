import{d as $,q as d,v as w,o as r,h as v,b as l,w as a,F as y,H as c,s as i,e as n,t as x,u as o,ab as g,a as k,j as f,c as h,E as V,av as B}from"./index.4n0lca12.js";import{B as _}from"./VStack.6d7g92uw.js";import{C as b}from"./Card.2fwl0iqw.js";import{C as T}from"./CardGrid.15cj8hvu.js";import{D}from"./DocumentDisplay.2je0vazf.js";import{_ as F,M as L,F as N}from"./BookmarkIcon.108uetaj.js";import{S}from"./SearchableCardGrid.4qzy9rf8.js";import{T as Y}from"./Title.3fz2k97a.js";import"./useDateOf.86m05b59.js";import"./MaybeLink.vue_vue_type_script_setup_true_lang.5co93amo.js";import"./Navigation.1j7ng9io.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.2mn301v0.js";const E={key:0},K=n(" Looks like you're not logged in. "),M=n(" or "),O=n(" to access the Chat app. "),q=n(" Create a Chat "),G=k("p",null,"Pick a title for your chat.",-1),P=n(" OK "),U=n("Cancel"),p=d([]);c.on("chat:index",C=>p.value=C);const le=$({__name:"my-chats",setup(C){const m=d(!1),u=d(!1),s=d("");return w(()=>{c.emit("chat:request:index",i.value)}),(j,e)=>(r(),v(y,null,[l(D,null,{default:a(()=>[l(Y,null,{default:a(()=>[n(x(o(g)?`${o(g)}'s`:"My")+" Chats",1)]),_:1}),o(i)?f("",!0):(r(),v("p",E,[K,k("span",{class:"link",onClick:e[0]||(e[0]=t=>m.value=!0)},"Log in"),M,k("span",{class:"link",onClick:e[1]||(e[1]=t=>m.value=!0)},"create an account"),O])),o(i)&&p.value.length<100?(r(),h(T,{key:1,style:{"margin-bottom":"2em"}},{default:a(()=>[l(_,{onClick:e[2]||(e[2]=t=>(u.value=!0,s.value=""))},{default:a(()=>[q]),_:1})]),_:1})):f("",!0),o(i)&&p.value.length?(r(),h(S,{key:2,placeholder:"Search your chat groups..."},{default:a(()=>[(r(!0),v(y,null,V(p.value,t=>(r(),h(b,{class:"card text-color",description:t.level==="manage"?"You manage this chat.":t.level==="comment"?"You may comment on this chat.":t.level==="view"?"You can view this chat.":"You cannot access this chat.",title:t.title,to:`/chat?id=${t.id}`},null,8,["description","title","to"]))),256))]),_:1})):f("",!0)]),_:1}),l(F,{open:m.value,"onUpdate:open":e[3]||(e[3]=t=>m.value=t)},null,8,["open"]),l(L,{open:u.value},{buttons:a(()=>[l(_,{onClick:e[6]||(e[6]=t=>s.value&&(o(c).emit("chat:create",o(i),s.value),u.value=!1))},{default:a(()=>[P]),_:1}),l(_,{cancel:"",onClick:e[7]||(e[7]=t=>u.value=!1)},{default:a(()=>[U]),_:1})]),default:a(()=>[G,l(N,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=t=>s.value=t),autocomplete:"off",placeholder:"Title...",onKeydown:e[5]||(e[5]=B(t=>s.value&&(o(c).emit("chat:create",o(i),s.value),u.value=!1),["enter"]))},null,8,["modelValue"])]),_:1},8,["open"])],64))}});export{le as default};
