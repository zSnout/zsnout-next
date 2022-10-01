import{V as q,B as L}from"./VStack.6d7g92uw.js";import{D as F}from"./DocumentDisplay.2je0vazf.js";import{F as N}from"./Field.2ydu2jt8.js";import{_ as H,o as s,h as i,r as U,d as C,q as d,I as O,c as v,w as o,e as t,b as V,j as p,t as w,a as h,F as I,E as T,H as S}from"./index.2hvd2i9k.js";import{H as $,S as y}from"./BookmarkIcon.3wmuqdow.js";import{M as E}from"./MiddleText.j1cutmtm.js";import"./Navigation.2xu1kz2a.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.238jku1n.js";const M={},P={class:"heading"};function R(b,c){return s(),i("h2",P,[U(b.$slots,"default",{},void 0,!0)])}const B=H(M,[["render",R],["__scopeId","data-v-684da2ab"]]),Y={key:2},j=["src"],Q={class:"format"},W={class:"format"},z=["href"],G=C({__name:"youtube-downloader",setup(b){const c=d(""),D=d(""),g=d(""),k=O([]),_=d(!0),l=d(!1);function x(n){return 2*+n.hasVideo+ +n.hasAudio}function A(n){n.preventDefault();let u=c.value;try{const e=new URL(u).searchParams.get("v");e&&(u=e)}catch{}_.value=!1,l.value=!0,S.emit("youtube:request",u),S.once("youtube:results",(e,m)=>{e===u&&(l.value=!1,g.value=m.thumbnail,D.value=m.title,k.push(...m.formats.filter(a=>{const r=a.quality||a.audio;return m.formats.find(f=>(f.quality||f.audio)===r&&f.hasAudio===a.hasAudio&&f.hasVideo===a.hasVideo)===a}).sort((a,r)=>parseInt(r.quality)-parseInt(a.quality)).sort((a,r)=>x(r)-x(a))))})}return(n,u)=>(s(),v(F,{center:""},{default:o(()=>[t(E,null,{default:o(()=>[_.value||l.value?(s(),v(B,{key:0},{default:o(()=>[V("YouTube Video Downloader")]),_:1})):p("",!0),_.value?(s(),i("form",{key:1,onSubmit:A},[t(q,null,{default:o(()=>[t(N,{modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=e=>c.value=e),placeholder:"Paste the video URL..."},null,8,["modelValue"]),t(L,{onClick:A},{default:o(()=>[V("Download Video")]),_:1})]),_:1})],32)):p("",!0),l.value?(s(),i("div",Y,"Downloading your video...")):p("",!0),!_.value&&!l.value?(s(),i(I,{key:3},[t(B,null,{default:o(()=>[V(w(D.value),1)]),_:1}),h("img",{class:"second-layer thumbnail",src:g.value},null,8,j),t(q,null,{default:o(()=>[(s(!0),i(I,null,T(k,e=>(s(),v($,{class:"format",stretch:""},{default:o(()=>[h("p",Q,w(e.quality||(e.audio==="AUDIO_QUALITY_LOW"?"Low":"High")),1),t(y),h("p",W,w(e.hasVideo&&e.hasAudio?"Video/Audio":e.hasVideo?"Video Only":e.hasAudio?"Audio Only":"Nonexistent"),1),t(y),t(y),t(y),h("a",{class:"second-layer",href:e.url,download:""},"Download",8,z)]),_:2},1024))),256))]),_:1})],64)):p("",!0)]),_:1})]),_:1}))}});const le=H(G,[["__scopeId","data-v-6906619f"]]);export{le as default};
