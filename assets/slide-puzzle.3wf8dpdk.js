import{d as I,q as v,Y as B,P as D,L as E,o as V,c as Y,w as p,e as f,a as N,b,_ as q}from"./index.4hldlluw.js";import{D as F}from"./DocumentDisplay.633jhlro.js";import{B as y,V as L}from"./VStack.34lxtf3d.js";import{H as A,S as k}from"./BookmarkIcon.3wmuqdow.js";import"./Navigation.vue_vue_type_script_setup_true_lang.1tdpzvga.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./Field.2ydu2jt8.js";const W="/assets/new-york.3ksqj6t7.webp",X=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),G="/assets/ocean.1hca0f36.webp",J=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),K="/assets/rick-astley.6c7ubrs9.webp",Q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),U="/assets/san-francisco.3yuux565.webp",Z=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),$=I({__name:"slide-puzzle",setup(ee){const S=v(""),m=document.createElement("img"),h=v(),n=[];Object.assign(window,{pieces:n});let o=0,t=0;B(()=>{const e=Object.assign({"../pictures/slide-puzzle/new-york.webp":X,"../pictures/slide-puzzle/ocean.webp":J,"../pictures/slide-puzzle/rick-astley.webp":Q,"../pictures/slide-puzzle/san-francisco.webp":Z}),s=Object.keys(e),i=s[Math.floor(s.length*Math.random())];m.src=S.value=e[i].default,m.onload=w});let c=4,r=4,z=0;function M(e){return new Promise(s=>setTimeout(s,e))}async function w(){const e=++z,s=h.value;if(!s)return;const i=s.getContext("2d");if(!i)throw new Error("Your device doesn't support HTML5 canvases.");s.width=m.naturalWidth,s.height=m.naturalHeight;const l=s.height/c,a=s.width/r;i.drawImage(m,0,0),n.splice(0,n.length);for(let u=0;u<c;u++){const g=[],d=l*u;for(let _=0;_<r;_++)g.push({data:i.getImageData(a*_,d,a,l)});n.push(g)}if(o=Math.floor(c*Math.random()),t=Math.floor(r*Math.random()),n[o][t].data=void 0,await M(5e3),z===e)for(let u=0;u<60*c*r;u++)x()}function P(){const e=h.value;if(!e)return;const s=e.getContext("2d");if(!s||!n.length)return;s.clearRect(0,0,e.width,e.height);const i=e.height/c,l=e.width/r;for(let a=0;a<c;a++){const u=n[a],g=i*a;for(let d=0;d<r;d++){const{data:_}=u[d];_&&s.putImageData(_,l*d,g)}}}const j=[[()=>t!==0,()=>{const e=n[o];[e[t],e[t-1]]=[e[t-1],e[t]],t--}],[()=>o!==0,()=>{[n[o][t],n[o-1][t]]=[n[o-1][t],n[o][t]],o--}],[()=>t!==r-1,()=>{const e=n[o];[e[t],e[t+1]]=[e[t+1],e[t]],t++}],[()=>o!==c-1,()=>{[n[o][t],n[o+1][t]]=[n[o+1][t],n[o][t]],o++}]];function x(){const e=j.filter(([s])=>s()).map(([,s])=>s);e[Math.floor(e.length*Math.random())]()}function O(){c--,r--,c<2&&(c=2),r<2&&(r=2),w()}function C(){c++,r++,w()}const{width:R,height:T}=D(h);function H(e){const s=e.offsetX/R.value,i=e.offsetY/T.value,l=Math.floor(i*c),a=Math.floor(s*r);(l==o&&(a==t-1||a==t+1)||a==t&&(l==o-1||l==o+1))&&([n[l][a],n[o][t]]=[n[o][t],n[l][a]],o=l,t=a)}return E(P),(e,s)=>(V(),Y(F,{center:""},{default:p(()=>[f(L,{class:"outer"},{default:p(()=>[N("canvas",{ref_key:"canvasRef",ref:h,class:"puzzle second-layer",style:{padding:"0"},onPointerdown:H},null,544),f(A,null,{default:p(()=>[f(y,{onClick:O},{default:p(()=>[b("Easier")]),_:1}),f(k),f(y,{onClick:w},{default:p(()=>[b("Reset")]),_:1}),f(k),f(y,{onClick:C},{default:p(()=>[b("Harder")]),_:1})]),_:1})]),_:1})]),_:1}))}});const ue=q($,[["__scopeId","data-v-eda36fbf"]]);export{ue as default};
