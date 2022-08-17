import{u as P,a as R}from"./useVideoFromStream.95b3c5a9.js";import{u as j}from"./useCanvas.089c02ac.js";import{d as E,s as g,aF as L,o as O,c as T,w,a as x}from"./index.80e7fb4e.js";import{F as U}from"./FullscreenDisplay.2a7ae4cd.js";import"./SharedNav.c43960c8.js";import"./VStack.ae3d12ba.js";function V(r){const o=document.createElement("canvas"),h=o.getContext("2d");return{canvas:o,ctx:h,update:(n=r.videoWidth,c=r.videoHeight)=>{o.width=n,o.height=c,h.drawImage(r,0,0,n,c)}}}const X=E({__name:"AsciiArt",setup(r){const n="$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'.  ",c=g(),l=g("user"),{stream:u,setOpts:b}=P({audio:!1,video:{facingMode:{ideal:l.value}}});function M(){l.value=l.value==="user"?"environment":"user",b({audio:!1,video:{facingMode:{ideal:l.value}}})}const z=R(u,!0),{ctx:d,update:_}=V(z);return j(c,{useDevicePixelRatio:!1}).then(m=>{const{canvas:i}=m,a=i.getContext("2d");if(!a)throw new Error("Your device doesn't support HTML5 canvases.");L(()=>{if(!u.value)return;_(~~(i.width/7.5),~~(i.height/9));const t=d.getImageData(0,0,d.canvas.width,d.canvas.height);a.beginPath(),a.fillStyle="black",a.fillRect(0,0,i.width,i.height);for(let e=0;e<t.height;e++)for(let s=0;s<t.width;s++){const[f,v,p]=t.data.subarray(4*(e*t.width+s),4*(e*t.width+s)+3),[C,y,H]=t.data.subarray(4*(e*t.width+Math.max(0,s-1)),4*(e*t.width+Math.max(0,s-1))+3),[k,F,W]=t.data.subarray(4*(Math.max(0,e-1)*t.width+s),4*(Math.max(0,e-1)*t.width+s)+3),B=(Math.abs(f-C)+Math.abs(f-k))/2,S=(Math.abs(v-y)+Math.abs(v-F))/2,A=(Math.abs(p-H)+Math.abs(p-W))/2,D=.2126*B+.7152*S+.0722*A,I=n[n.length-1-~~(D*n.length/256)];a.beginPath(),a.fillStyle="white",a.font=`${9}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(I,s*7.5+7.5/2,e*9+9/2)}})}),(m,i)=>(O(),T(U,null,{indicator:w(()=>[x("span",{style:{cursor:"pointer"},onClick:M},"Switch Camera")]),default:w(()=>[x("canvas",{ref_key:"canvas",ref:c},null,512)]),_:1}))}});export{X as default};
