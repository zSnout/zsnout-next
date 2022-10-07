import{d as T,q as v,f as O,o as r,h as i,e as l,w as n,F as p,a as u,t as c,u as o,b as s,E as _,s as S,a5 as k,K as q,H as F,c as V,a6 as H,i as w,A as N,y as Y,k as M,p as A,l as E,_ as G}from"./index.4o086sjk.js";import{D as J}from"./DocumentDisplay.633jhlro.js";import{I as m}from"./InlineButton.197m3pe8.js";import{L as R}from"./LargeTitle.51mbggtu.js";import{_ as W}from"./BookmarkIcon.3wmuqdow.js";import{S as U}from"./SearchableCardGrid.4qzy9rf8.js";import{V as K}from"./VStack.34lxtf3d.js";import{d as x}from"./useDateOf.86m05b59.js";import"./Navigation.vue_vue_type_script_setup_true_lang.1tdpzvga.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./Title.3fz2k97a.js";import"./Field.2ydu2jt8.js";import"./CardGrid.3yqiv1o7.js";const b=[{path:"/blog/divisibility-rules.md",frontmatter:{excerpt:`
You probably know how to find out if a number is divisible by 2, 5, or 10. But
did you know that there's simple divisibility rules for other numbers? Let's
check them out, from 2 to 12!`,author:"Zachary Sakowitz",category:"math",date:16389216e5}},{path:"/blog/does-0-equal-1.md",frontmatter:{excerpt:`
The "0 = 1" paradox states that the numbers 0 and 1 are equivalent. We can
easily prove this. Once done, we'll show you how you can use this to prove that
any two numbers are equivalent!`,author:"Zachary Sakowitz",category:"math",date:1639008e6}},{path:"/blog/github-copilot-is-amazing.md",frontmatter:{excerpt:`
GitHub Copilot is an amazing tool that can autocomplete code snippets for you.
In this article I share my experience using GitHub Copilot: the upsides, the
downsides, and what I think it could become.`,author:"Zachary Sakowitz",category:"code",date:16390944e5}},{path:"/blog/infinity-is-negative-one-twelfth.md",frontmatter:{excerpt:`
Did you know that the sum of all whole numbers is equal to -1/12? In this
article we find out how it's possible and prove it ourselves using simple
algebra and math!`,author:"Zachary Sakowitz",category:"math",date:1639008e6}},{path:"/blog/lets-make-a-web-framework.md",frontmatter:{excerpt:`
Today we're going to make a reactivity system in JavaScript, harness it to
create DOM constructs, and create a JSX framework using our new system.`,author:"Zachary Sakowitz",category:"code",date:1664064e6}},{path:"/blog/make-people-think-of-numbers.md",frontmatter:{excerpt:`
Did you know that using math we can force people to think of certain numbers? We
can use 9, 1089, or any other number you can think of using the simple tricks
described below.`,author:"Zachary Sakowitz",category:"math",date:16389216e5}},{path:"/blog/mathemagical-tricks.md",frontmatter:{excerpt:`
Have you ever wanted to convince your friend that you have psychic powers? In
this article you'll learn how to use amazing mathematical principles to help you
on your noble quest.`,author:"Zachary Sakowitz",category:"math",date:16490304e5}},{path:"/blog/meet-the-saurs.md",frontmatter:{excerpt:`
Throughout my childhood, I've come up with many stories about a group of
characters known as the Saurs. I'd like to share some of these stories with you
so we can laugh about them together and so that they can be recorded in the
oversized archives that are zSnout. This article is meant to be read in order,
as each new topic links back to previous ones, but you can stop at any point and
come back at a later date; there's a lot to take in. With that disclaimer, let's
step into the technology-filled world of the Saurs!`,author:"Zachary Sakowitz",category:"saurs",date:16626816e5}},{path:"/blog/the-day-for-any-date.md",frontmatter:{excerpt:`
Ever wondered what day your friend's birthday occurred, or whether the next July
4th will be a Thursday? You can calculate it using simple math, which you'll
learn here!`,author:"Zachary Sakowitz",category:"math",date:16389216e5}},{path:"/blog/the-outage-on-october-1.md",frontmatter:{excerpt:"",author:"Zachary Sakowitz",category:"meta",date:16648416e5}},{path:"/blog/the-story-of-zsnout.md",frontmatter:{excerpt:`
Have you ever wondered how zSnout began? Let's hear the story together and take
a deep dive into the early years of zSnout.`,author:"Zachary Sakowitz",category:"meta",date:16462656e5,updated:"2022-09-07T00:00:00.000Z"}},{path:"/blog/what-makes-zsnout-different.md",frontmatter:{excerpt:"Many things stand out about zSnout that aren't seen in other websites. Let's explore zSnout's purpose, theme system, and offline capabilities.",author:"Zachary Sakowitz",category:"meta",date:16390944e5,updated:"2022-09-04T00:00:00.000Z"}}],z=f=>(A("data-v-01f00253"),f=f(),E(),f),P={key:0,class:"text-color"},Q={key:1,class:"text-color"},X={class:"title"},j={key:0,class:"intro"},tt={key:1,class:"intro"},et=z(()=>u("p",{class:"spacer"},null,-1)),ot={class:"text-color"},at=z(()=>u("p",null,[u("strong",null,"Filter By:")],-1)),rt=T({__name:"index",setup(f){const C=b.map(a=>a.frontmatter.category).filter(a=>!!a).filter((a,e,d)=>d.indexOf(a)===e);b.sort((a,e)=>{if(!a.frontmatter.date)return 1;if(!e.frontmatter.date)return-1;const d=new Date(a.frontmatter.date);return new Date(e.frontmatter.date).valueOf()-d.valueOf()});const h=v(""),Z=O("(min-width: 1080px)"),y=v(!1),I={code:4,math:1,meta:5,camp:0,saurs:3};function B(a){return I[a||""]}const $=["#990000","#996300","#999900","#009900","#000099","#990099"],D=["#ff6666","#ffc966","#ffff66","#66ff66","#8888ff","#ff66ff"];function L(a,e){const d=75*Math.random()+12.5,t=(a?$:D)[B(e)];return`background: ${`linear-gradient(to right, transparent, transparent ${d}%, ${t})`}`}return(a,e)=>{const d=M("RouterLink");return r(),i(p,null,[l(W,{open:y.value,"onUpdate:open":e[0]||(e[0]=t=>y.value=t)},null,8,["open"]),l(J,{small:""},{help:n(()=>[u("p",null," You can "+c(o(Z)?"use the sidebar to filter the pages.":"use the table of contents to filter the pages."),1)]),aside:n(()=>[at,u("nav",null,[u("ul",null,[u("li",null,[l(m,{onClick:e[4]||(e[4]=t=>h.value="")},{default:n(()=>[s("Reset Filter")]),_:1})]),(r(!0),i(p,null,_(o(C),t=>(r(),i("li",{key:t},[l(m,{active:h.value===t,onClick:g=>h.value===t?h.value="":h.value=t},{default:n(()=>[s(c(t[0].toUpperCase()+t.slice(1)),1)]),_:2},1032,["active","onClick"])]))),128))])])]),default:n(()=>[l(R,null,{default:n(()=>[s("Blog Articles")]),_:1}),o(S)?(r(),i("p",P,[s(" You "+c(o(k)?"are currently receiving":"will not receive")+" notifications for updates to the zSnout blog. ",1),o(q)?(r(),i(p,{key:0},[s(" Click "),l(m,{onClick:e[1]||(e[1]=t=>o(F).emit("blog:update:will-notify",o(S),!o(k)))},{default:n(()=>[s(" here ")]),_:1}),s(" to opt-"+c(o(k)?"out of":"in to")+" notifications. ",1)],64)):(r(),i(p,{key:1},[s(" You cannot change notification settings when offline. ")],64))])):(r(),i("p",Q,[l(m,{onClick:e[2]||(e[2]=t=>y.value=!0)},{default:n(()=>[s("Log in")]),_:1}),s(" to a zSnout account or "),l(m,{onClick:e[3]||(e[3]=t=>y.value=!0)},{default:n(()=>[s("sign up")]),_:1}),s(" to receive notification for new blog posts. ")])),l(U,{sizes:["list"]},{default:n(()=>[(r(!0),i(p,null,_(o(b),t=>{var g;return r(),i(p,{key:t.path},[!h.value||((g=t.frontmatter.category)==null?void 0:g.includes(h.value))?(r(),V(K,{key:0,class:"card",space:0,style:N(L(o(Y),t.frontmatter.category)),"data-keywords":`${t.frontmatter.author!=="Zachary Sakowitz"?t.frontmatter.author:""} ${t.frontmatter.keywords||""} ${o(x)(t.frontmatter.date)}`},{default:n(()=>[l(d,{class:"no-link",to:t.path.slice(0,-3)},{default:n(()=>[u("p",X,c(o(H)(t.path.slice(6,-3))),1)]),_:2},1032,["to"]),t.frontmatter.author&&t.frontmatter.author!=="Zachary Sakowitz"?(r(),i("p",j," By "+c(t.frontmatter.author),1)):w("",!0),t.frontmatter.date?(r(),i("p",tt," Published on "+c(o(x)(t.frontmatter.date)),1)):w("",!0),et,u("p",ot,c(t.frontmatter.excerpt),1)]),_:2},1032,["style","data-keywords"])):w("",!0)],64)}),128))]),_:1})]),_:1})],64)}}});const bt=G(rt,[["__scopeId","data-v-01f00253"]]);export{bt as default};
