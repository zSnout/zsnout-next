import{u as k}from"./index.dlnn8pzg.js";import{F as x}from"./FullscreenDisplay.od9apf4f.js";import{H as y}from"./BookmarkIcon.46krkaf8.js";import{u as z}from"./useCanvas.3phirwm2.js";import{s as M}from"./useOption.1pf10ib0.js";import{d as w,r as h,c as R,w as f,o as S,e as b,a as i}from"./index.4z0bzixf.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";const g=i("span",null,"/",-1),P=w({__name:"pixelated-rainbow",setup(B){const v=h(),e=h(),t=k(10,3,1e3);M("size",t);const C=["#ff0000","#ff9000","#d0d000","#00c000","#0000ff","#9000f0"];return z(v,{useDevicePixelRatio:!1}).then(p=>{const{canvas:a,onResize:s,size:o}=p,{width:u,height:c}=o,l=a.getContext("2d");if(!l)throw new Error("Your device doesn't support HTML5 canvases.");e.value=()=>{l.fillStyle="white",l.fillRect(0,0,u.value,c.value);for(let n=0;n<u.value;n+=t.value)for(let r=0;r<c.value;r+=t.value)if(!(1-r/c.value+Math.random()-.5>.5)){const m=Math.min(n/u.value*5,4.9999),d=Math.floor(m),_=m%1+Math.random()-.5;l.fillStyle=C[_<.5?d:d+1],l.fillRect(n,r,t.value-2,t.value-2)}},e.value(),s(e.value)}),(p,a)=>(S(),R(x,null,{indicator:f(()=>[b(y,null,{default:f(()=>[i("span",{class:"button",onClick:a[1]||(a[1]=s=>{var o;return t.value-=1,(o=e.value)==null?void 0:o.call(e)})},"Smaller"),g,i("span",{class:"button",onClick:a[2]||(a[2]=s=>{var o;return t.value+=1,(o=e.value)==null?void 0:o.call(e)})},"Larger")]),_:1})]),default:f(()=>[i("canvas",{ref_key:"canvas",ref:v,onClick:a[0]||(a[0]=(...s)=>e.value&&e.value(...s))},null,512)]),_:1}))}});export{P as default};
