import{P as h,Q as r,$ as u,S as f}from"./index.2fa8603f.js";function E(p,{useDevicePixelRatio:t=!0}={}){const e=[];return f(()=>e.forEach(o=>o())),new Promise(o=>{e.push(h(()=>{const n=r(p);if(n instanceof HTMLCanvasElement){const{width:i,height:a}=u(n),c=[];e.push(h(()=>{n.width=i.value*(t?devicePixelRatio:1),n.height=a.value*(t?devicePixelRatio:1),c.forEach(s=>s())})),o({canvas:n,onDispose:s=>e.push(s),onResize:s=>c.push(s),size:{width:i,height:a},dispose(){e.forEach(s=>s()),e.splice(0,e.length)}})}}))})}export{E as u};
