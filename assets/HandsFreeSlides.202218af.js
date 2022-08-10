import{d as I,k as a,o as s,f as g,c as y,a as e,au as F,m as k,ax as P,b,w as c,t as T,F as N,e as v,p as z,g as G,ap as R}from"./index.7141cb12.js";import{_ as U,V as $,B as C}from"./VStack.9632794c.js";import{D as E}from"./DocumentDisplay.45568d79.js";import{H as M,F as L}from"./BookmarkIcon.e2141b75.js";import{M as Z}from"./MiddleText.eeec0943.js";const _=h=>(z("data-v-3095d3bd"),h=h(),G(),h),j={key:0,ref:"presentation",class:"presentation"},q=["src"],J=["src"],K=["src"],O=v(" Click this button to set everything up. "),Q=v("Start"),W=_(()=>e("p",null,[e("em",null,"How do I use this?")],-1)),X=_(()=>e("p",null," This page lets you control a Google Slides presentation using an AirPod as a remote. ",-1)),Y=_(()=>e("p",null," Get a pair of AirPods 3 or Pro. To control your presentation, click the stem: ",-1)),ee=_(()=>e("p",null,[e("strong",null,"once"),v(" to go to the "),e("strong",null,"next slide,"),e("br"),e("strong",null,"twice"),v(" to go to the "),e("strong",null,"previous slide,"),v(" and "),e("br"),e("strong",null,"thrice"),v(" to go to the "),e("strong",null,"first slide.")],-1)),te=_(()=>e("p",null,"Reload or close this app to exit.",-1)),ae={key:0},oe={key:1,style:{color:"transparent"}},ne=I({__name:"HandsFreeSlides",setup(h){const l=a("try"),x=a(),S=a(!1),p=a(!1),w=a(""),A=a(""),m=a(1),i=a(2),o=a(1),r=a(3),D=R(()=>l.value="",500);function d({action:n}){const t=n==="previoustrack"?"first":n==="nexttrack"?"previous":"next";p.value?t==="first"?(i.value=2,o.value=1,r.value=3,m.value=1):t==="previous"&&m.value>1?(m.value--,[i.value,o.value,r.value]=[r.value,i.value,o.value]):t==="next"&&(m.value++,[i.value,o.value,r.value]=[o.value,r.value,i.value]):(l.value=t,D())}function B(){S.value=!0,navigator.mediaSession.setActionHandler("pause",d),navigator.mediaSession.setActionHandler("play",d),navigator.mediaSession.setActionHandler("previoustrack",d),navigator.mediaSession.setActionHandler("nexttrack",d),navigator.mediaSession.setActionHandler("seekbackward",d),navigator.mediaSession.setActionHandler("seekforward",d),x.value.volume=.01}function V(n){if(n.preventDefault(),p.value)return;const t=w.value.match(/\/d\/([A-Za-z0-9\-\_]+)/);if(!t){l.value="invalid";return}A.value=t[1],p.value=!0}function H(n){const t=i.value,f=o.value,u=m.value;return r.value,`https://docs.google.com/presentation/d/${A.value}/preview?rm=minimal&slide=${f===n?u:t===n?u-1:u+1}`}return(n,t)=>(s(),g(N,null,[(s(),y(P,{to:"body"},[e("video",{ref_key:"media",ref:x,class:"media",loop:"",playsinline:"",src:"https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4",onPlaying:B},null,544),p.value?(s(),g("div",j,[e("iframe",{class:F([{active:o.value===1},"frame"]),src:H(1)},null,10,q),e("iframe",{class:F([{active:o.value===2},"frame"]),src:H(2)},null,10,J),e("iframe",{class:F([{active:o.value===3},"frame"]),src:H(3)},null,10,K)],512)):k("",!0)])),b(E,{center:""},{default:c(()=>[p.value?k("",!0):(s(),y(Z,{key:0},{default:c(()=>[e("form",{onSubmit:V},[b($,null,{default:c(()=>[S.value?k("",!0):(s(),y(C,{key:0,style:{"margin-bottom":"1em"},onClick:t[0]||(t[0]=f=>{var u;return(u=x.value)==null||u.play(),f.preventDefault()})},{default:c(()=>[O]),_:1})),S.value?(s(),y(M,{key:1,style:{"margin-bottom":"1em"}},{default:c(()=>[b(L,{modelValue:w.value,"onUpdate:modelValue":t[1]||(t[1]=f=>w.value=f),placeholder:"Presentation URL"},null,8,["modelValue"]),b(C,{onClick:V},{default:c(()=>[Q]),_:1})]),_:1})):k("",!0),W,X,Y,ee,te,e("p",null,[l.value?(s(),g("em",ae,T(l.value==="try"?"Try clicking the stem!":l.value==="invalid"?"Invalid presentation code.":`Going to the ${l.value} slide.`),1)):(s(),g("em",oe,"placeholder"))])]),_:1})],32)]),_:1}))]),_:1})],64))}});var ue=U(ne,[["__scopeId","data-v-3095d3bd"]]);export{ue as default};
