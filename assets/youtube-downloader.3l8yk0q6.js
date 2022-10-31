import{V as q,B as L}from"./VStack.xad5wxbj.js";import{D as F}from"./DocumentDisplay.633jhlro.js";import{F as N}from"./Field.2ydu2jt8.js";import{_ as H,o as s,h as i,r as U,d as C,q as d,I as O,c as v,w as o,e as t,b as V,i as p,t as b,a as h,F as I,E as T,H as S}from"./index.65vfmhl3.js";import{H as $,S as y}from"./BookmarkIcon.1thszj4g.js";import{M as E}from"./MiddleText.3l6ge4jd.js";import"./Navigation.vue_vue_type_script_setup_true_lang.5cehk67t.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";const M={},P={class:"heading"};function R(g,c){return s(),i("h2",P,[U(g.$slots,"default",{},void 0,!0)])}const B=H(M,[["render",R],["__scopeId","data-v-684da2ab"]]),Y={key:2},Q=["src"],W={class:"format"},j={class:"format"},z=["href"],G=C({__name:"youtube-downloader",setup(g){const c=d(""),w=d(""),D=d(""),k=O([]),_=d(!0),l=d(!1);function x(n){return 2*+n.hasVideo+ +n.hasAudio}function A(n){n.preventDefault();let u=c.value;try{const e=new URL(u).searchParams.get("v");e&&(u=e)}catch{}_.value=!1,l.value=!0,S.emit("youtube:request",u),S.once("youtube:results",(e,m)=>{e===u&&(l.value=!1,D.value=m.thumbnail,w.value=m.title,k.push(...m.formats.filter(a=>{const r=a.quality||a.audio;return m.formats.find(f=>(f.quality||f.audio)===r&&f.hasAudio===a.hasAudio&&f.hasVideo===a.hasVideo)===a}).sort((a,r)=>parseInt(r.quality)-parseInt(a.quality)).sort((a,r)=>x(r)-x(a))))})}return(n,u)=>(s(),v(F,{center:""},{default:o(()=>[t(E,null,{default:o(()=>[_.value||l.value?(s(),v(B,{key:0},{default:o(()=>[V("YouTube Video Downloader")]),_:1})):p("",!0),_.value?(s(),i("form",{key:1,onSubmit:A},[t(q,null,{default:o(()=>[t(N,{modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=e=>c.value=e),placeholder:"Paste the video URL..."},null,8,["modelValue"]),t(L,{onClick:A},{default:o(()=>[V("Download Video")]),_:1})]),_:1})],32)):p("",!0),l.value?(s(),i("div",Y,"Downloading your video...")):p("",!0),!_.value&&!l.value?(s(),i(I,{key:3},[t(B,null,{default:o(()=>[V(b(w.value),1)]),_:1}),h("img",{class:"second-layer thumbnail",src:D.value},null,8,Q),t(q,null,{default:o(()=>[(s(!0),i(I,null,T(k,e=>(s(),v($,{class:"format",stretch:""},{default:o(()=>[h("p",W,b(e.quality||(e.audio==="AUDIO_QUALITY_LOW"?"Low":"High")),1),t(y),h("p",j,b(e.hasVideo&&e.hasAudio?"Video/Audio":e.hasVideo?"Video Only":e.hasAudio?"Audio Only":"Nonexistent"),1),t(y),t(y),t(y),h("a",{class:"second-layer",href:e.url,target:"_blank"}," Download ",8,z)]),_:2},1024))),256))]),_:1})],64)):p("",!0)]),_:1})]),_:1}))}});const le=H(G,[["__scopeId","data-v-b6f71304"]]);export{le as default};
