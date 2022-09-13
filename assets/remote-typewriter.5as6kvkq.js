import{V as D,B as I}from"./VStack.1y80766s.js";import{D as P}from"./DocumentDisplay.1u3n8z7b.js";import{M as V}from"./MiddleText.j1cutmtm.js";import{H as j}from"./BookmarkIcon.62ja9bj3.js";import{d as N,q as p,a1 as z,g as A,o as h,h as q,c as b,a as e,T as F,b as w,w as d,F as M,j as H,t as f,u as _,e as i,p as E,l as G,_ as R}from"./index.w2xoota4.js";import"./Navigation.4poltm3u.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.q24vcovx.js";const m=v=>(E("data-v-5e9915d2"),v=v(),G(),v),U=i(" Click this button to set everything up. "),W={style:{"margin-bottom":"1em"}},$=m(()=>e("p",null,"This page lets you type using an AirPod as a remote.",-1)),J=m(()=>e("p",null," Get a pair of AirPods 3 or Pro. At the beginning of each character, every value from a-z and spaces will be available. Click the stem ",-1)),K=m(()=>e("p",null,[e("strong",null,"once"),i(" to pick the first character set, "),e("br"),e("strong",null,"twice"),i(" to pick the second set, and "),e("br"),e("strong",null,"thrice"),i(" to pick the final set. ")],-1)),L=m(()=>e("h1",null,"Alternative Setup",-1)),O=m(()=>e("p",null,[i(" If you don't have a pair of AirPods 3 or Pro, grab another set of remote earpods. Then check your earpods' guide for how to click the "),e("strong",null,"play/pause,"),e("strong",null,"previous track,"),i(" and "),e("strong",null,"next track"),i(" buttons. zSnout uses these for the first, second, and third characters sets, respectively. ")],-1)),Q=N({__name:"remote-typewriter",setup(v){const g=p(),S=p(!1),T=p(!1),s=[[],["","  ab"," cde"," fgh"],[""," ijk"," lmn"," opq"],[""," rst"," uvw"," xyz"]];s[0]=s,s[1][0]=s[1],s[2][0]=s[2],s[3][0]=s[3];const n=p(0),c=p(0),o=p("");function u({action:t}){const a=t==="previoustrack"?3:t==="nexttrack"?2:1;if(n.value)if(c.value){const l=s[n.value][c.value][a],r=o.value[o.value.length-2],x=r===","||r==="."?2:1;l===","?o.value=o.value.slice(0,-x)+", ":l==="."?o.value=o.value.slice(0,-x)+". ":o.value+=l,n.value=0,c.value=0}else c.value=a;else n.value=a}function B(){S.value=!0,navigator.mediaSession.setActionHandler("pause",u),navigator.mediaSession.setActionHandler("play",u),navigator.mediaSession.setActionHandler("previoustrack",u),navigator.mediaSession.setActionHandler("nexttrack",u),navigator.mediaSession.setActionHandler("seekbackward",u),navigator.mediaSession.setActionHandler("seekforward",u),g.value.volume=.01}function y(t){return typeof t=="string"?t.length===1?t.replace(" ","_"):t.slice(1).replace(" ","_"):t.slice(1).map(a=>a.slice(1).replace(" ","_")).join(" ")}z(o,()=>{const t=o.value[o.value.length-1],a=o.value[o.value.length-2];s[1][1]=t===" "?a===","?" .ab":" ,ab":"  ab"});const k=A(()=>n.value?c.value?s.slice(1).map((t,a)=>a===n.value-1?t.slice(1).map((l,r)=>r===c.value-1?y(l):"   ").join(" "):""):s.slice(1).map((t,a)=>a===n.value-1?y(t):""):s.slice(1).map(y)),C=A(()=>o.value.replace(/\bi\b/g,"I").replace(/\. \w|^\w/g,t=>t.toUpperCase()).replace(/ $/,"_"));return(t,a)=>(h(),q(M,null,[(h(),b(F,{to:"body"},[e("video",{ref_key:"media",ref:g,class:"media",loop:"",playsinline:"",src:"https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4",onPlaying:B},null,544)])),w(P,{center:""},{help:d(()=>[$,J,K,L,O]),default:d(()=>[T.value?H("",!0):(h(),b(V,{key:0},{default:d(()=>[w(D,null,{default:d(()=>[S.value?H("",!0):(h(),b(I,{key:0,style:{"margin-bottom":"1.5em"},onClick:a[0]||(a[0]=l=>{var r;return(r=g.value)==null||r.play(),l.preventDefault()})},{default:d(()=>[U]),_:1})),e("p",W,f(_(C)||"Well, start typing something!"),1),w(j,{class:"characters",stretch:""},{default:d(()=>[e("p",null,f(_(k)[0]),1),e("p",null,f(_(k)[1]),1),e("p",null,f(_(k)[2]),1)]),_:1})]),_:1})]),_:1}))]),_:1})],64))}});const le=R(Q,[["__scopeId","data-v-5e9915d2"]]);export{le as default};
