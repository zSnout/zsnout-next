import{E,S as H,a as N}from"./index.32pcbad5.js";import{d as B,L as T,r as c,E as n,K as V,m as F,B as l,A as I,f as a,e as p,w as g,F as x,I as L,o,u as s,D as S,b as v,a as k,t as h,O as w,c as W,k as q}from"./index.xh0zaea0.js";import{D as M}from"./DocumentDisplay.6d0yf2eg.js";import{I as R}from"./InlineField.sq5fmr9m.js";import{_ as U,H as $}from"./BookmarkIcon.1ijfs95x.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";const z={key:0},K={key:1},O={key:2},Y={key:3},A={key:0,style:{margin:"0 0 1em 0"}},j=["href"],G={key:0},le=B({__name:"note",setup(J){const e=""+T().query.id,r=c("Loading title..."),u=c("waiting"),y=c(!1);n.on("notes:note",(m,t)=>{m===e&&(t===!1?u.value="invalid":(u.value="editing",i.commands.setContent(t,!1)))}),n.on("notes:details",m=>{m.id===e&&(r.value=m.title)}),V(()=>{n.emit("notes:request:note",l.value,e),n.emit("notes:request:details",l.value,e)});const i=new E({extensions:[H]}),_=c(!0),d=c(!1),C=L(()=>{d.value||(_.value=!0,n.emit("notes:update:note",l.value,e,i.getHTML()))},500,{maxWait:1e3}),b=L(()=>{r.value&&n.emit("notes:update:title",l.value,e,r.value)},500,{maxWait:1e3});return i.on("update",()=>{d.value=i.getHTML().length>=1e4,_.value=!1,C()}),F(()=>{n.emit("notes:update:note",l.value,e,i.getHTML()),n.emit("notes:update:title",l.value,e,r.value),i.destroy()}),(m,t)=>{const D=I("RouterLink");return o(),a(x,null,[p(M,null,{default:g(()=>[!s(S)&&u.value!=="editing"?(o(),a("p",z," You're not connected to a zServer. Check your internet and try again. ")):s(l)?u.value==="waiting"?(o(),a("p",O," Hey @"+h(s(w))+"! We're fetching your note right now... ",1)):u.value==="invalid"?(o(),a("p",Y,[v(" Sorry @"+h(s(w))+", but it looks like you don't own this note. Let's ",1),p(D,{to:"/my-notes"},{default:g(()=>[v("go back to your notes.")]),_:1})])):(o(),a(x,{key:4},[s(S)?(o(),W($,{key:1,style:{"margin-bottom":"1em"}},{default:g(()=>[k("span",null,h(d.value?"Whoops!":_.value?"Synced:":"Syncing:"),1),p(R,{flex:!d.value,maxlength:100,"model-value":r.value,placeholder:"Note title...","onUpdate:modelValue":t[1]||(t[1]=f=>(r.value=f,s(b)()))},null,8,["flex","model-value"]),d.value?(o(),a("span",G,"is too large and cannot be synced.")):q("",!0)]),_:1})):(o(),a("p",A,[v(" Looks like you disconnected from a zServer. Copy your recent changes and "),k("a",{href:`/note?id=${e}`},"reload the page.",8,j)])),p(s(N),{editor:s(i)},null,8,["editor"])],64)):(o(),a("p",K,[v(" You have to "),k("span",{class:"link",onClick:t[0]||(t[0]=f=>y.value=!0)},"log in"),v(" before you can edit a note. ")]))]),_:1}),p(U,{open:y.value,"onUpdate:open":t[2]||(t[2]=f=>y.value=f)},null,8,["open"])],64)}}});export{le as default};
