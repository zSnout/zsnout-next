import{d as w,q as y,aG as C,o as S,c as g,w as p,b,a as n,p as R,l as z}from"./index.2ci5dkbd.js";import{u as I}from"./index.55wflef3.js";import{F as B}from"./FullscreenDisplay.5h55kk3b.js";import{H as D}from"./SharedNav.4wpq3a9c.js";import{u as F}from"./useCanvas.87p0yoq7.js";import{s as H}from"./useOption.ujvp9hcq.js";import{r as o}from"./useRandint.4l2grpuh.js";import{r as x}from"./useRandomColor.3lt16kz3.js";import{_ as L}from"./_plugin-vue_export-helper.35ltfn2z.js";import"./LogoLight.539ztpd2.js";import"./Button.3tf6rlyu.js";const N=a=>(R("data-v-3bd1004c"),a=a(),z(),a),V=N(()=>n("span",null,"/",-1)),$=w({__name:"rectangles",setup(a){const u=y(),r=y(),t=I(50,5,1e3);return H("size",t),F(u,{useDevicePixelRatio:!1}).then(f=>{const{canvas:s,onDispose:l,onResize:h,size:k}=f,{width:d,height:m}=k,e=s.getContext("2d");if(!e)throw new Error("Your device doesn't support HTML5 canvases.");r.value=()=>{e.fillStyle="white",e.fillRect(0,0,d.value,m.value)},r.value(),h(r.value),l(C(()=>{for(let q of Array(10)){e.fillStyle=x(),e.strokeStyle=x();const c=o(0,t.value),i=o(0,t.value),v=o(0,d.value-c),_=o(0,m.value-i);e.fillRect(v,_,c,i),e.strokeRect(v,_,c,i)}}).pause)}),(f,s)=>(S(),g(B,null,{indicator:p(()=>[b(D,null,{default:p(()=>[n("span",{class:"button",onClick:s[0]||(s[0]=l=>t.value-=1)},"Smaller"),V,n("span",{class:"button",onClick:s[1]||(s[1]=l=>t.value+=1)},"Larger")]),_:1})]),default:p(()=>[n("canvas",{ref_key:"canvas",ref:u},null,512)]),_:1}))}});const Q=L($,[["__scopeId","data-v-3bd1004c"]]);export{Q as default};
