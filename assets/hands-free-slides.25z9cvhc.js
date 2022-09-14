import{d as I,q as o,o as l,h as g,c as y,a as e,n as w,j as k,T,b as S,w as u,F as B,t as N,e as a,p as G,l as R,a5 as U,_ as $}from"./index.r4ltaips.js";import{V as z,B as V}from"./VStack.1y80766s.js";import{D as E}from"./DocumentDisplay.1u3n8z7b.js";import{H as M,F as j}from"./BookmarkIcon.2hoqbw7h.js";import{M as q}from"./MiddleText.j1cutmtm.js";import"./Navigation.3ml0eptj.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.3yzrssnp.js";const i=f=>(G("data-v-13ca11a1"),f=f(),R(),f),L={key:0,ref:"presentation",class:"presentation"},Z=["src"],J=["src"],K=["src"],O=a(" Click this button to set everything up. "),Q=a("Start"),W={key:0},X={key:1,style:{color:"transparent"}},Y=i(()=>e("h1",null,"How do I use this?",-1)),ee=i(()=>e("p",null," This page lets you control a Google Slides presentation using an AirPod as a remote. ",-1)),te=i(()=>e("p",null," Get a pair of AirPods 3 or Pro. To control your presentation, click the stem: ",-1)),oe=i(()=>e("p",null,[e("strong",null,"once"),a(" to go to the "),e("strong",null,"next slide,"),e("br"),e("strong",null,"twice"),a(" to go to the "),e("strong",null,"previous slide,"),a(" and "),e("br"),e("strong",null,"thrice"),a(" to go to the "),e("strong",null,"first slide.")],-1)),ae=i(()=>e("p",null,"Reload or close this app to exit.",-1)),se=i(()=>e("h1",null,"Alternative Setup",-1)),ne=i(()=>e("p",null,[a(" If you don't have a pair of AirPods 3 or Pro, you can use any set of remote headphones. Simply tap the "),e("br"),e("strong",null,"play/pause"),a(" button to go to the next slide, "),e("br"),e("strong",null,"previous track"),a(" to go to the previous slide, and "),e("br"),e("strong",null,"next track"),a(" to go to the first slide. ")],-1)),le=i(()=>e("p",null,' For AirPods 1 and 2, you can modify the double-tap actions in Settings to correspond to "play/pause" and "next track," allowing you to go to the next and previous slides. ',-1)),ie=I({__name:"hands-free-slides",setup(f){const r=o("try"),b=o(),x=o(!1),m=o(!1),A=o(""),H=o(""),_=o(1),d=o(2),s=o(1),c=o(3),C=U(()=>r.value="",500);function v({action:n}){const t=n==="previoustrack"?"first":n==="nexttrack"?"previous":"next";m.value?t==="first"?(d.value=2,s.value=1,c.value=3,_.value=1):t==="previous"&&_.value>1?(_.value--,[d.value,s.value,c.value]=[c.value,d.value,s.value]):t==="next"&&(_.value++,[d.value,s.value,c.value]=[s.value,c.value,d.value]):(r.value=t,C())}function D(){x.value=!0,navigator.mediaSession.setActionHandler("pause",v),navigator.mediaSession.setActionHandler("play",v),navigator.mediaSession.setActionHandler("previoustrack",v),navigator.mediaSession.setActionHandler("nexttrack",v),navigator.mediaSession.setActionHandler("seekbackward",v),navigator.mediaSession.setActionHandler("seekforward",v),b.value.volume=.01}function P(n){if(n.preventDefault(),m.value)return;const t=A.value.match(/\/d\/([A-Za-z0-9\-\_]+)/);if(!t){r.value="invalid";return}H.value=t[1],m.value=!0}function F(n){const t=d.value,h=s.value,p=_.value;return c.value,`https://docs.google.com/presentation/d/${H.value}/preview?rm=minimal&slide=${h===n?p:t===n?p-1:p+1}`}return(n,t)=>(l(),g(B,null,[(l(),y(T,{to:"body"},[e("video",{ref_key:"media",ref:b,class:"media",loop:"",playsinline:"",src:"https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4",onPlaying:D},null,544),m.value?(l(),g("div",L,[e("iframe",{class:w([{active:s.value===1},"frame"]),src:F(1)},null,10,Z),e("iframe",{class:w([{active:s.value===2},"frame"]),src:F(2)},null,10,J),e("iframe",{class:w([{active:s.value===3},"frame"]),src:F(3)},null,10,K)],512)):k("",!0)])),S(E,{center:""},{help:u(()=>[Y,ee,te,oe,ae,se,ne,le]),default:u(()=>[m.value?k("",!0):(l(),y(q,{key:0},{default:u(()=>[e("form",{onSubmit:P},[S(z,null,{default:u(()=>[x.value?k("",!0):(l(),y(V,{key:0,style:{"margin-bottom":"1em"},onClick:t[0]||(t[0]=h=>{var p;return(p=b.value)==null||p.play(),h.preventDefault()})},{default:u(()=>[O]),_:1})),x.value?(l(),y(M,{key:1,style:{"margin-bottom":"1em"}},{default:u(()=>[S(j,{modelValue:A.value,"onUpdate:modelValue":t[1]||(t[1]=h=>A.value=h),placeholder:"Presentation URL"},null,8,["modelValue"]),S(V,{onClick:P},{default:u(()=>[Q]),_:1})]),_:1})):k("",!0),e("p",null,[r.value?(l(),g("em",W,N(r.value==="try"?"Try clicking the stem!":r.value==="invalid"?"Invalid presentation code.":`Going to the ${r.value} slide.`),1)):(l(),g("em",X,"placeholder"))])]),_:1})],32)]),_:1}))]),_:1})],64))}});const fe=$(ie,[["__scopeId","data-v-13ca11a1"]]);export{fe as default};
