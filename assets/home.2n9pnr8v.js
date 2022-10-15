import{d as W,q as c,au as A,W as M,o as s,h as u,n as E,A as P,u as e,ap as I,ax as R,_ as H,f as U,e as l,w as n,F as y,a as r,t as m,b as g,E as V,ac as k,c as w,ay as x,i as T,p as Y,l as q}from"./index.4hldlluw.js";import{_ as S}from"./_virtual_image-list.2wr4vh1p.js";import{D as G}from"./DocumentDisplay.633jhlro.js";import{I as Q}from"./ImageCard.5p4xglk6.js";import{I as F}from"./InlineButton.197m3pe8.js";import{L as N}from"./LargeTitle.51mbggtu.js";import{_ as j}from"./BookmarkIcon.3wmuqdow.js";import{S as J}from"./SearchableCardGrid.4qzy9rf8.js";import{V as K}from"./VStack.34lxtf3d.js";import{g as O,h as X}from"./useHomeIcons.1bq12hvu.js";import{u as C}from"./useRandomItem.3g35iz2c.js";import"./Navigation.vue_vue_type_script_setup_true_lang.1tdpzvga.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./MaybeLink.vue_vue_type_script_setup_true_lang.5co93amo.js";import"./Title.3fz2k97a.js";import"./Field.2ydu2jt8.js";import"./CardGrid.3yqiv1o7.js";const Z=["src"],ee=W({__name:"BlurredImage",props:{sensitivity:null,src:null},setup(i){const d=c(!1),v=c(Math.random()),_=c(Math.random()),{x:p,y:o}=A(),f=M(()=>I.value<400?"(2.5em + 1px + 1.5em)":"(3.5em + 1px + 2em)"),h=M(()=>I.value<400?"1.5em":"2em"),a=c(!1);function t(){a.value||(a.value=!0,setTimeout(()=>{v.value=Math.random(),_.value=Math.random(),setTimeout(()=>{a.value=!1},300)}))}return($,b)=>{var D,L;return s(),u("img",{class:E([{moving:a.value},"image"]),src:i.src,style:P({display:d.value?void 0:"none",top:`calc(${e(f)} + (var(--app-height) - ${e(f)} - ${e(h)} - 320px) * ${_.value} + ${e(o)-e(R)/2}px / 100 * ${(D=i.sensitivity)!=null?D:1})`,left:`calc(${e(h)} + (var(--app-width) - 2 * ${e(h)} - 320px) * ${v.value} + ${e(p)-e(I)/2}px / 100 * ${(L=i.sensitivity)!=null?L:1})`}),draggable:"false",onClick:t,onLoad:b[0]||(b[0]=ne=>d.value=!0)},null,46,Z)}}});const B=H(ee,[["__scopeId","data-v-d9c7c519"]]),z=i=>(Y("data-v-6428f1b3"),i=i(),q(),i),te={key:2},se=z(()=>r("p",null," Looks like you've found the Help menu! Many pages on zSnout have this button in the top-right corner. Simply click it to reveal instructions and more details about the page you're viewing. ",-1)),oe=z(()=>r("p",null,' Some of the cards on the homepage are marked with a triangle that says "menu." These pages lead to submenus with even more pages, such as Storymatic or the blog. ',-1)),ae=z(()=>r("p",null,[r("strong",null,"Filter By:")],-1)),le=W({__name:"home",setup(i){const d=C(S),v=C(S),_=C(S),p=c(!1),o=c(""),f=U("(min-width: 1080px)");return(h,a)=>(s(),u(y,null,[l(B,{class:"hide-600",src:e(d)},null,8,["src"]),l(B,{class:"hide-800",sensitivity:2,src:e(v)},null,8,["src"]),l(B,{sensitivity:3,src:e(_)},null,8,["src"]),l(j,{open:p.value,"onUpdate:open":a[0]||(a[0]=t=>p.value=t)},null,8,["open"]),l(G,null,{help:n(()=>[se,oe,r("p",null," You can also "+m(e(f)?"use the sidebar to filter the pages.":"use the table of contents to filter the pages."),1)]),aside:n(()=>[ae,r("nav",null,[r("ul",null,[r("li",null,[l(F,{onClick:a[1]||(a[1]=t=>o.value="")},{default:n(()=>[g("Reset Filter")]),_:1})]),(s(!0),u(y,null,V(e(O),t=>(s(),u("li",{key:t},[l(F,{active:o.value===t,onClick:$=>o.value===t?o.value="":o.value=t},{default:n(()=>[g(m(t[0].toUpperCase()+t.slice(1)),1)]),_:2},1032,["active","onClick"])]))),128))])])]),default:n(()=>[l(K,{class:"stack",space:2},{default:n(()=>[e(k)?(s(),w(N,{key:0},{default:n(()=>[g(" Welcome to zSnout, "+m(e(k))+". ",1)]),_:1})):(s(),w(N,{key:1},{default:n(()=>[g("Welcome to zSnout.")]),_:1})),e(k)&&e(x)!==!1?(s(),u("p",te," Hey "+m(e(k))+"! Your account will be deleted in "+m(e(x)>=120*1e3?`${~~(e(x)/(60*1e3))} minutes`:`${~~(e(x)/1e3)} seconds`)+" unless you verify it with the email we sent you. ",1)):T("",!0)]),_:1}),l(J,{sizes:["normal","small","icon"]},{default:n(()=>[(s(!0),u(y,null,V(e(X),(t,$)=>(s(),u(y,{key:$},[!o.value||t.group.includes(o.value)?(s(),w(Q,{key:0,alt:t.alt,description:t.description,keywords:t.keywords,label:t.isIndex?"menu":"",src:t.src,title:t.title,to:t.to==="login"?void 0:t.to,onClick:b=>t.to==="login"&&(p.value=!0)},null,8,["alt","description","keywords","label","src","title","to","onClick"])):T("",!0)],64))),128))]),_:1})]),_:1})],64))}});const Se=H(le,[["__scopeId","data-v-6428f1b3"]]);export{Se as default};
