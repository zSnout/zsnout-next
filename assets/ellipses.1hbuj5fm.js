import{d as w,q as d,aG as C,o as S,c as g,w as i,b as z,a as l,p as I,l as b}from"./index.3a6d11oo.js";import{u as R}from"./index.55wflef3.js";import{F as B}from"./FullscreenDisplay.5h55kk3b.js";import{H as D}from"./SharedNav.4wpq3a9c.js";import{u as F}from"./useCanvas.87p0yoq7.js";import{s as H}from"./useOption.ujvp9hcq.js";import{r as o}from"./useRandint.4l2grpuh.js";import{r as m}from"./useRandomColor.3lt16kz3.js";import{_ as P}from"./_plugin-vue_export-helper.35ltfn2z.js";import"./LogoLight.539ztpd2.js";import"./Button.3tf6rlyu.js";const L=t=>(I("data-v-f5902d01"),t=t(),b(),t),M=L(()=>l("span",null,"/",-1)),N=w({__name:"ellipses",setup(t){const c=d(),n=d(),a=R(50,5,1e3);return H("size",a),F(c,{useDevicePixelRatio:!1}).then(p=>{const{canvas:s,onDispose:r,onResize:v,size:_}=p,{width:u,height:f}=_,e=s.getContext("2d");if(!e)throw new Error("Your device doesn't support HTML5 canvases.");n.value=()=>{e.fillStyle="white",e.fillRect(0,0,u.value,f.value)},n.value(),v(n.value),r(C(()=>{for(let V of Array(10)){e.fillStyle=m(),e.strokeStyle=m();const h=o(0,a.value),y=o(0,a.value),x=o(0,u.value),k=o(0,f.value);e.beginPath(),e.ellipse(x,k,h/2,y/2,0,0,2*Math.PI),e.fill(),e.stroke()}}).pause)}),(p,s)=>(S(),g(B,null,{indicator:i(()=>[z(D,null,{default:i(()=>[l("span",{class:"button",onClick:s[0]||(s[0]=r=>a.value-=1)},"Smaller"),M,l("span",{class:"button",onClick:s[1]||(s[1]=r=>a.value+=1)},"Larger")]),_:1})]),default:i(()=>[l("canvas",{ref_key:"canvas",ref:c},null,512)]),_:1}))}});const Q=P(N,[["__scopeId","data-v-f5902d01"]]);export{Q as default};
