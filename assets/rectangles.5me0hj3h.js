import{d as w,q as y,L as C,o as S,c as g,w as p,e as R,a as n,p as b,l as z,_ as I}from"./index.4lhqi218.js";import{u as B}from"./index.55wflef3.js";import{F as D}from"./FullscreenDisplay.421pqk6v.js";import{H as F}from"./BookmarkIcon.3wmuqdow.js";import{u as H}from"./useCanvas.87p0yoq7.js";import{s as L}from"./useOption.ujvp9hcq.js";import{r as o}from"./useRandint.4l2grpuh.js";import{r as x}from"./useRandomColor.3lt16kz3.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.238jku1n.js";import"./VStack.6d7g92uw.js";import"./Field.2ydu2jt8.js";const N=a=>(b("data-v-3bd1004c"),a=a(),z(),a),V=N(()=>n("span",null,"/",-1)),$=w({__name:"rectangles",setup(a){const u=y(),r=y(),t=B(50,5,1e3);return L("size",t),H(u,{useDevicePixelRatio:!1}).then(d=>{const{canvas:s,onDispose:l,onResize:h,size:k}=d,{width:f,height:m}=k,e=s.getContext("2d");if(!e)throw new Error("Your device doesn't support HTML5 canvases.");r.value=()=>{e.fillStyle="white",e.fillRect(0,0,f.value,m.value)},r.value(),h(r.value),l(C(()=>{for(let q of Array(10)){e.fillStyle=x(),e.strokeStyle=x();const c=o(0,t.value),i=o(0,t.value),v=o(0,f.value-c),_=o(0,m.value-i);e.fillRect(v,_,c,i),e.strokeRect(v,_,c,i)}}).pause)}),(d,s)=>(S(),g(D,null,{indicator:p(()=>[R(F,null,{default:p(()=>[n("span",{class:"button",onClick:s[0]||(s[0]=l=>t.value-=1)},"Smaller"),V,n("span",{class:"button",onClick:s[1]||(s[1]=l=>t.value+=1)},"Larger")]),_:1})]),default:p(()=>[n("canvas",{ref_key:"canvas",ref:u},null,512)]),_:1}))}});const U=I($,[["__scopeId","data-v-3bd1004c"]]);export{U as default};
