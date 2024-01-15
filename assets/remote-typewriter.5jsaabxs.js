import{V as D,B as T}from"./VStack.3evi6szx.js";import{D as V}from"./DocumentDisplay.6d0yf2eg.js";import{M as I}from"./MiddleText.496cwyq8.js";import{H as P}from"./BookmarkIcon.1ijfs95x.js";import{d as N,r as p,a1 as j,V as x,f as z,c as k,a as e,a6 as F,e as b,w as d,F as M,o as h,b as i,k as A,t as f,p as q,h as E,_ as G}from"./index.xh0zaea0.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./Field.5c7fkv56.js";const m=v=>(q("data-v-5e9915d2"),v=v(),E(),v),R={style:{"margin-bottom":"1em"}},U=m(()=>e("p",null,"This page lets you type using an AirPod as a remote.",-1)),W=m(()=>e("p",null," Get a pair of AirPods 3 or Pro. At the beginning of each character, every value from a-z and spaces will be available. Click the stem ",-1)),$=m(()=>e("p",null,[e("strong",null,"once"),i(" to pick the first character set, "),e("br"),e("strong",null,"twice"),i(" to pick the second set, and "),e("br"),e("strong",null,"thrice"),i(" to pick the final set. ")],-1)),J=m(()=>e("h1",null,"Alternative Setup",-1)),K=m(()=>e("p",null,[i(" If you don't have a pair of AirPods 3 or Pro, grab another set of remote earpods. Then check your earpods' guide for how to click the "),e("strong",null,"play/pause,"),e("strong",null,"previous track,"),i(" and "),e("strong",null,"next track"),i(" buttons. zSnout uses these for the first, second, and third characters sets, respectively. ")],-1)),L=N({__name:"remote-typewriter",setup(v){const _=p(),w=p(!1),H=p(!1),o=[[],["","  ab"," cde"," fgh"],[""," ijk"," lmn"," opq"],[""," rst"," uvw"," xyz"]];o[0]=o,o[1][0]=o[1],o[2][0]=o[2],o[3][0]=o[3];const n=p(0),c=p(0),s=p("");function u({action:t}){const a=t==="previoustrack"?3:t==="nexttrack"?2:1;if(n.value)if(c.value){const l=o[n.value][c.value][a],r=s.value[s.value.length-2],S=r===","||r==="."?2:1;l===","?s.value=s.value.slice(0,-S)+", ":l==="."?s.value=s.value.slice(0,-S)+". ":s.value+=l,n.value=0,c.value=0}else c.value=a;else n.value=a}function B(){w.value=!0,navigator.mediaSession.setActionHandler("pause",u),navigator.mediaSession.setActionHandler("play",u),navigator.mediaSession.setActionHandler("previoustrack",u),navigator.mediaSession.setActionHandler("nexttrack",u),navigator.mediaSession.setActionHandler("seekbackward",u),navigator.mediaSession.setActionHandler("seekforward",u),_.value.volume=.01}function g(t){return typeof t=="string"?t.length===1?t.replace(" ","_"):t.slice(1).replace(" ","_"):t.slice(1).map(a=>a.slice(1).replace(" ","_")).join(" ")}j(s,()=>{const t=s.value[s.value.length-1],a=s.value[s.value.length-2];o[1][1]=t===" "?a===","?" .ab":" ,ab":"  ab"});const y=x(()=>n.value?c.value?o.slice(1).map((t,a)=>a===n.value-1?t.slice(1).map((l,r)=>r===c.value-1?g(l):"   ").join(" "):""):o.slice(1).map((t,a)=>a===n.value-1?g(t):""):o.slice(1).map(g)),C=x(()=>s.value.replace(/\bi\b/g,"I").replace(/\. \w|^\w/g,t=>t.toUpperCase()).replace(/ $/,"_"));return(t,a)=>(h(),z(M,null,[(h(),k(F,{to:"body"},[e("video",{ref_key:"media",ref:_,class:"media",loop:"",playsinline:"",src:"https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4",onPlaying:B},null,544)])),b(V,{center:""},{help:d(()=>[U,W,$,J,K]),default:d(()=>[H.value?A("",!0):(h(),k(I,{key:0},{default:d(()=>[b(D,null,{default:d(()=>[w.value?A("",!0):(h(),k(T,{key:0,style:{"margin-bottom":"1.5em"},onClick:a[0]||(a[0]=l=>{var r;return(r=_.value)==null||r.play(),l.preventDefault()})},{default:d(()=>[i(" Click this button to set everything up. ")]),_:1})),e("p",R,f(C.value||"Well, start typing something!"),1),b(P,{class:"characters",stretch:""},{default:d(()=>[e("p",null,f(y.value[0]),1),e("p",null,f(y.value[1]),1),e("p",null,f(y.value[2]),1)]),_:1})]),_:1})]),_:1}))]),_:1})],64))}});const ne=G(L,[["__scopeId","data-v-5e9915d2"]]);export{ne as default};
