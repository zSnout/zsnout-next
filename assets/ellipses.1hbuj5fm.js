import{d as w,q as d,L as C,o as S,c as g,w as i,b as z,a as l,p as I,l as b,_ as R}from"./index.158tmzqu.js";import{u as B}from"./index.55wflef3.js";import{F as D}from"./FullscreenDisplay.421pqk6v.js";import{H as F}from"./BookmarkIcon.108uetaj.js";import{u as H}from"./useCanvas.87p0yoq7.js";import{s as L}from"./useOption.ujvp9hcq.js";import{r as o}from"./useRandint.4l2grpuh.js";import{r as v}from"./useRandomColor.3lt16kz3.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.3yzrssnp.js";import"./VStack.6d7g92uw.js";const P=a=>(I("data-v-f5902d01"),a=a(),b(),a),M=P(()=>l("span",null,"/",-1)),N=w({__name:"ellipses",setup(a){const c=d(),n=d(),t=B(50,5,1e3);return L("size",t),H(c,{useDevicePixelRatio:!1}).then(p=>{const{canvas:s,onDispose:r,onResize:_,size:m}=p,{width:u,height:f}=m,e=s.getContext("2d");if(!e)throw new Error("Your device doesn't support HTML5 canvases.");n.value=()=>{e.fillStyle="white",e.fillRect(0,0,u.value,f.value)},n.value(),_(n.value),r(C(()=>{for(let V of Array(10)){e.fillStyle=v(),e.strokeStyle=v();const h=o(0,t.value),y=o(0,t.value),x=o(0,u.value),k=o(0,f.value);e.beginPath(),e.ellipse(x,k,h/2,y/2,0,0,2*Math.PI),e.fill(),e.stroke()}}).pause)}),(p,s)=>(S(),g(D,null,{indicator:i(()=>[z(F,null,{default:i(()=>[l("span",{class:"button",onClick:s[0]||(s[0]=r=>t.value-=1)},"Smaller"),M,l("span",{class:"button",onClick:s[1]||(s[1]=r=>t.value+=1)},"Larger")]),_:1})]),default:i(()=>[l("canvas",{ref_key:"canvas",ref:c},null,512)]),_:1}))}});const Q=R(N,[["__scopeId","data-v-f5902d01"]]);export{Q as default};
