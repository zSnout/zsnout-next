var k=Object.defineProperty,A=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var P=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,M=(e,n)=>{for(var t in n||(n={}))G.call(n,t)&&P(e,t,n[t]);if(O)for(var t of O(n))T.call(n,t)&&P(e,t,n[t]);return e},Y=(e,n)=>A(e,F(n));import{ad as l,f as a,ak as X,m as S,a9 as j,au as V,av as z,aw as q,ap as B,aq as R,ae as Z}from"./index.f1b52cb6.js";import{u as $}from"./useWebGL.f4bc83f8.js";function p(e,n,t,r,u){return l(()=>(a(u)-a(e))*(a(r)-a(t))/(a(n)-a(e))+a(t))}function h(e,n,t){const r=X(),u=p(0,r.width,0,1,t.x),i=p(r.height,0,0,1,t.y);return{x:l(()=>u.value*n.x.value+e.x.value),y:l(()=>i.value*n.y.value+e.y.value)}}function H(e,n){const t=X();e=J(e,n);const r=l(()=>{const u=a(e.xStart),i=a(e.xEnd),f=a(e.yStart),x=a(e.yEnd);return t.width.value>t.height.value?{x:(u-(i-u)/2)/2,y:f}:{x:u,y:(f-(x-f)/2)/2}});return{offset:{x:l(()=>r.value.x),y:l(()=>r.value.y)},scale:{x:l(()=>a(e.xEnd)-a(e.xStart)),y:l(()=>a(e.yEnd)-a(e.yStart))}}}function D(e){return l(()=>[a(e.x),a(e.y)])}function J(e,n){const t=l(()=>{const{xStart:r,xEnd:u,yStart:i,yEnd:f}=e,x=a(r)+a(u),d=a(i)+a(f),v=(a(u)-a(r))/2,y=(a(f)-a(i))/2;let{width:{value:s},height:{value:c}}=n;return(Number.isNaN(s)||s===0)&&(s=c),(Number.isNaN(c)||c===0)&&(c=s),(Number.isNaN(s)||s===0)&&(s=c=1),s<c?{xStart:r,xEnd:u,yStart:d-c/s*y,yEnd:d+c/s*y}:{xStart:x-s/c*v,xEnd:x+s/c*v,yStart:i,yEnd:f}});return{xStart:l(()=>a(t.value.xStart)),xEnd:l(()=>a(t.value.xEnd)),yStart:l(()=>a(t.value.yStart)),yEnd:l(()=>a(t.value.yEnd))}}const _=`
struct Bounds {
  float xStart;
  float xEnd;
  float yStart;
  float yEnd;
};

struct Coordinates {
  float x;
  float y;
};
`,K=`
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`;async function Q(e,n,t){var x,d,v,y,s,c,g,m,N;const r={xStart:S((d=(x=t==null?void 0:t.bounds)==null?void 0:x.xStart)!=null?d:-2),xEnd:S((y=(v=t==null?void 0:t.bounds)==null?void 0:v.xEnd)!=null?y:2),yStart:S((c=(s=t==null?void 0:t.bounds)==null?void 0:s.yStart)!=null?c:-2),yEnd:S((m=(g=t==null?void 0:t.bounds)==null?void 0:g.yEnd)!=null?m:2)},u=await $(e,_+n,Y(M({},t),{vertShader:_+((N=t==null?void 0:t.vertShader)!=null?N:K)})),{offset:i,scale:f}=H(r,u.size);if(u.useUniform("offset","f",D(i)),u.useUniform("scale","f",D(f)),(t==null?void 0:t.uniforms)===!0){u.useUniform("bounds.xStart","f",r.xStart),u.useUniform("bounds.xEnd","f",r.xEnd),u.useUniform("bounds.yStart","f",r.yStart),u.useUniform("bounds.yEnd","f",r.yEnd);const E=j(),o=h(i,f,E);u.useUniform("pointer.x","f",o.x),u.useUniform("pointer.y","f",o.y)}return Object.assign(u,{bounds:r,offset:i,scale:f})}const U=V("history");function I(e,n){return U[e]===void 0&&n!==void 0&&(U[e]=n),z({get(){return""+U[e]},set(t){U[e]=t}})}function ot(e,n){const t=I(e,n.value);n.value=t.value;const r=q(t,n,{direction:"rtl"});return B(r),r}function tt(e,n){const t=I(e,""+n);return z({get(){return parseFloat(t.value)},set(r){t.value=""+r}})}function et(e,n){const t=tt(e,n.value);n.value=t.value;const r=q(t,n,{direction:"rtl"});return B(r),r}function nt(e,n=1e7){return z({get(){return~~(n*e.value)/n},set(t){e.value=t}})}function b(e,n,t){return{xStart:l(()=>a(e.xStart)+a(t)*(a(n.x)-a(e.xStart))/10),xEnd:l(()=>a(e.xEnd)+a(t)*(a(n.x)-a(e.xEnd))/10),yStart:l(()=>a(e.yStart)+a(t)*(a(n.y)-a(e.yStart))/10),yEnd:l(()=>a(e.yEnd)+a(t)*(a(n.y)-a(e.yEnd))/10)}}async function st(e,n,t){const r=await Q(e,n,t),{canvas:u,bounds:i,offset:f,onDispose:x,scale:d,useUniform:v}=r,y=j(),s={x:S(NaN),y:S(NaN)},c=S(0),g=b(i,h(f,d,y),c);if((t==null?void 0:t.uniforms)===!0){const o=b(i,h(f,d,y),1);v("zoomRegion.xStart","f",o.xStart),v("zoomRegion.xEnd","f",o.xEnd),v("zoomRegion.yStart","f",o.yStart),v("zoomRegion.yEnd","f",o.yEnd)}x(R(u,"wheel",o=>{o.preventDefault(),y.x.value=o.offsetX,y.y.value=o.offsetY,c.value=Math.sqrt(Math.abs(o.deltaY))*-Math.sign(o.deltaY)/10;const{xStart:{value:w},xEnd:{value:C},yStart:{value:L},yEnd:{value:W}}=g;i.xStart.value=w,i.xEnd.value=C,i.yStart.value=L,i.yEnd.value=W},{passive:!1}));const m=h(f,d,y),N=h(f,d,s);x(R(u,"pointermove",o=>{if(o.preventDefault(),Number.isNaN(s.x.value)||Number.isNaN(s.y.value))return;y.x.value=o.offsetX,y.y.value=o.offsetY;const w=m.x.value-N.x.value,C=m.y.value-N.y.value;i.xStart.value-=w,i.xEnd.value-=w,i.yStart.value-=C,i.yEnd.value-=C,s.x.value=y.x.value,s.y.value=y.y.value})),x(R(u,"pointerdown",o=>{u.setPointerCapture(o.pointerId),s.x.value=o.offsetX,s.y.value=o.offsetY})),x(R("pointerup",o=>{u.releasePointerCapture(o.pointerId),s.x.value=NaN,s.y.value=NaN}));function E(o){x(et(o,nt(Z(i,o))))}return E("xStart"),E("xEnd"),E("yStart"),E("yEnd"),r}export{ot as a,et as s,st as u};
