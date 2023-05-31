import{d as D,r as o,f as g,c as y,a as e,y as w,k,a6 as B,e as S,w as u,F as T,o as l,b as a,t as N,p as G,h as R,I as U,_ as $}from"./index.4z0bzixf.js";import{V as z,B as V}from"./VStack.3evi6szx.js";import{D as E}from"./DocumentDisplay.6d0yf2eg.js";import{F as M}from"./Field.5c7fkv56.js";import{H as L}from"./BookmarkIcon.46krkaf8.js";import{M as Z}from"./MiddleText.496cwyq8.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const i=h=>(G("data-v-13ca11a1"),h=h(),R(),h),j={key:0,ref:"presentation",class:"presentation"},q=["src"],J=["src"],K=["src"],O={key:0},Q={key:1,style:{color:"transparent"}},W=i(()=>e("h1",null,"How do I use this?",-1)),X=i(()=>e("p",null," This page lets you control a Google Slides presentation using an AirPod as a remote. ",-1)),Y=i(()=>e("p",null," Get a pair of AirPods 3 or Pro. To control your presentation, click the stem: ",-1)),ee=i(()=>e("p",null,[e("strong",null,"once"),a(" to go to the "),e("strong",null,"next slide,"),e("br"),e("strong",null,"twice"),a(" to go to the "),e("strong",null,"previous slide,"),a(" and "),e("br"),e("strong",null,"thrice"),a(" to go to the "),e("strong",null,"first slide.")],-1)),te=i(()=>e("p",null,"Reload or close this app to exit.",-1)),oe=i(()=>e("h1",null,"Alternative Setup",-1)),ae=i(()=>e("p",null,[a(" If you don't have a pair of AirPods 3 or Pro, you can use any set of remote headphones. Simply tap the "),e("br"),e("strong",null,"play/pause"),a(" button to go to the next slide, "),e("br"),e("strong",null,"previous track"),a(" to go to the previous slide, and "),e("br"),e("strong",null,"next track"),a(" to go to the first slide. ")],-1)),ne=i(()=>e("p",null,' For AirPods 1 and 2, you can modify the double-tap actions in Settings to correspond to "play/pause" and "next track," allowing you to go to the next and previous slides. ',-1)),se=D({__name:"hands-free-slides",setup(h){const r=o("try"),b=o(),x=o(!1),m=o(!1),A=o(""),H=o(""),_=o(1),d=o(2),n=o(1),c=o(3),I=U(()=>r.value="",500);function v({action:s}){const t=s==="previoustrack"?"first":s==="nexttrack"?"previous":"next";m.value?t==="first"?(d.value=2,n.value=1,c.value=3,_.value=1):t==="previous"&&_.value>1?(_.value--,[d.value,n.value,c.value]=[c.value,d.value,n.value]):t==="next"&&(_.value++,[d.value,n.value,c.value]=[n.value,c.value,d.value]):(r.value=t,I())}function C(){x.value=!0,navigator.mediaSession.setActionHandler("pause",v),navigator.mediaSession.setActionHandler("play",v),navigator.mediaSession.setActionHandler("previoustrack",v),navigator.mediaSession.setActionHandler("nexttrack",v),navigator.mediaSession.setActionHandler("seekbackward",v),navigator.mediaSession.setActionHandler("seekforward",v),b.value.volume=.01}function P(s){if(s.preventDefault(),m.value)return;const t=A.value.match(/\/d\/([A-Za-z0-9\-\_]+)/);if(!t){r.value="invalid";return}H.value=t[1],m.value=!0}function F(s){const t=d.value,f=n.value,p=_.value;return c.value,`https://docs.google.com/presentation/d/${H.value}/preview?rm=minimal&slide=${f===s?p:t===s?p-1:p+1}`}return(s,t)=>(l(),g(T,null,[(l(),y(B,{to:"body"},[e("video",{ref_key:"media",ref:b,class:"media",loop:"",playsinline:"",src:"https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4",onPlaying:C},null,544),m.value?(l(),g("div",j,[e("iframe",{class:w([{active:n.value===1},"frame"]),src:F(1)},null,10,q),e("iframe",{class:w([{active:n.value===2},"frame"]),src:F(2)},null,10,J),e("iframe",{class:w([{active:n.value===3},"frame"]),src:F(3)},null,10,K)],512)):k("",!0)])),S(E,{center:""},{help:u(()=>[W,X,Y,ee,te,oe,ae,ne]),default:u(()=>[m.value?k("",!0):(l(),y(Z,{key:0},{default:u(()=>[e("form",{onSubmit:P},[S(z,null,{default:u(()=>[x.value?k("",!0):(l(),y(V,{key:0,style:{"margin-bottom":"1em"},onClick:t[0]||(t[0]=f=>{var p;return(p=b.value)==null||p.play(),f.preventDefault()})},{default:u(()=>[a(" Click this button to set everything up. ")]),_:1})),x.value?(l(),y(L,{key:1,style:{"margin-bottom":"1em"}},{default:u(()=>[S(M,{modelValue:A.value,"onUpdate:modelValue":t[1]||(t[1]=f=>A.value=f),placeholder:"Presentation URL"},null,8,["modelValue"]),S(V,{onClick:P},{default:u(()=>[a("Start")]),_:1})]),_:1})):k("",!0),e("p",null,[r.value?(l(),g("em",O,N(r.value==="try"?"Try clicking the stem!":r.value==="invalid"?"Invalid presentation code.":`Going to the ${r.value} slide.`),1)):(l(),g("em",Q,"placeholder"))])]),_:1})],32)]),_:1}))]),_:1})],64))}});const fe=$(se,[["__scopeId","data-v-13ca11a1"]]);export{fe as default};
