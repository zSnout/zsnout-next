var E=Object.defineProperty;var l=(m,h,s)=>h in m?E(m,h,{enumerable:!0,configurable:!0,writable:!0,value:s}):m[h]=s;var S=(m,h,s)=>(l(m,typeof h!="symbol"?h+"":h,s),s);import{Z as g}from"./index.4z17mwie.js";import{p as x}from"./useOption.ujvp9hcq.js";import{W as d}from"./WebGlCanvas.1rb17qef.js";class N extends d{constructor(s,{bounds:t,fragmentString:r,saveBounds:e,...a}={}){var i,n,y,c;super(s,{...a,fragmentString:r});S(this,"saveBounds");S(this,"navTimer",!0);S(this,"bounds");this.saveBounds=e!=null?e:!1,e&&(t={xStart:Number.isFinite(+x.xStart)?+x.xStart:t==null?void 0:t.xStart,xEnd:Number.isFinite(+x.xEnd)?+x.xEnd:t==null?void 0:t.xEnd,yStart:Number.isFinite(+x.yStart)?+x.yStart:t==null?void 0:t.yStart,yEnd:Number.isFinite(+x.yEnd)?+x.yEnd:t==null?void 0:t.yEnd}),this.setBounds({xStart:(i=t==null?void 0:t.xStart)!=null?i:-2,xEnd:(n=t==null?void 0:t.xEnd)!=null?n:2,yStart:(y=t==null?void 0:t.yStart)!=null?y:-2,yEnd:(c=t==null?void 0:t.yEnd)!=null?c:2}),g(this.canvas,()=>this.setBounds(this.bounds)),this.on("render",()=>{const{x:f,y:o}=this.mouseToCoords();this.setUniform("mouse",f,o)})}async load(s,t){const r=await super.load(s,t);return this.setBounds(this.bounds),r}getNormalizedBounds(s=this.bounds){let{xStart:t,xEnd:r,yStart:e,yEnd:a}=s;const i=t+r,n=e+a,y=(r-t)/2,c=(a-e)/2,{width:f,height:o}=this.canvas;return f>o?(t=i-f/o*y,r=i+f/o*y):(e=n-o/f*c,a=n+o/f*c),{xStart:t,xEnd:r,yStart:e,yEnd:a}}getAdjusters(s=this.bounds){const{width:t,height:r}=this.canvas,{xStart:e,xEnd:a,yStart:i,yEnd:n}=this.getNormalizedBounds(s);return t>r?{scale:{x:a-e,y:n-i},offset:{x:(e-(a-e)/2)/2,y:i}}:{scale:{x:a-e,y:n-i},offset:{x:e,y:(i-(n-i)/2)/2}}}setBounds(s){const{xStart:t,xEnd:r,yStart:e,yEnd:a}=this.bounds=s;this.saveBounds&&this.navTimer&&(x.xStart=""+t,x.xEnd=""+r,x.yStart=""+e,x.yEnd=""+a,this.navTimer=!1,setTimeout(()=>this.navTimer=!0,1e3));const{offset:i,scale:n}=this.getAdjusters();this.setUniform("u_offset",i.x,i.y),this.setUniform("u_scale",n.x,n.y);const{offset:y,scale:c}=this.getAdjusters({xStart:-1,xEnd:1,yStart:-1,yEnd:1});this.setUniform("us_offset",y.x,y.y),this.setUniform("us_scale",c.x,c.y)}pxToCoords(s,t){const{offset:r,scale:e}=this.getAdjusters();return{x:s/this.canvas.clientWidth*e.x+r.x,y:(1-t/this.canvas.clientHeight)*e.y+r.y}}mouseToCoords(){return this.pxToCoords(this.pointer.x,this.pointer.y)}}export{N as C};
