import{q as c,C as o,a5 as s,a6 as u,v}from"./index.158tmzqu.js";function l(e){const i=c();function a(){i.value&&i.value.getTracks().map(r=>r.stop())}function n(){var r;a(),(r=navigator.mediaDevices)==null||r.getUserMedia({...e,video:{...typeof(e==null?void 0:e.video)=="object"&&(e==null?void 0:e.video),aspectRatio:{ideal:innerWidth/innerHeight}}}).then(t=>i.value=t).catch(()=>{throw new Error("Your device doesn't work with camera applications.")})}return n(),setTimeout(n,1e3),o("resize",s(n,250)),u(a),{stream:i,stop:a,setOpts(r){e=r,n()},retry:n}}function f(e,i){const a=document.createElement("video");return a.playsInline=!0,a.muted=i!=null?i:!1,v(()=>{var n;a.srcObject=(n=e.value)!=null?n:null,a.srcObject&&a.play()}),a}export{f as a,l as u};
