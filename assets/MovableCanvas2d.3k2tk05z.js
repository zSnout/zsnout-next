import{az as d}from"./index.nr51tphb.js";import{C as y}from"./CoordinateCanvas2d.ui5o1n16.js";class g extends y{constructor(n,h){super(n,h),d(n,"wheel",t=>{this.setBounds(this.getZoomRegion(Math.sqrt(Math.abs(t.deltaY))*-Math.sign(t.deltaY)/10))});let r;d(n,"touchmove",t=>{t.preventDefault();const{touches:[o,s]}=t;if(t.touches.length===2){const{x,y:c}=this.rect,a=Math.abs((s.clientX-o.clientX)**2+(s.clientY-o.clientY)**2);if(!r){r=a;return}const l=(o.clientX-x+s.clientX-x)/2,u=(o.clientY-c+s.clientY-c)/2;a>r?this.setBounds(this.getZoomRegion(1,{x:l,y:u})):this.setBounds(this.getZoomRegion(-1,{x:l,y:u})),r=a}});let e;d("pointermove",t=>{if(t.preventDefault(),i!==1||!e)return;const{x:o,y:s}=this.pxToCoords(t.offsetX,t.offsetY),{xStart:x,xEnd:c,yStart:a,yEnd:l}=this.bounds;this.setBounds({xStart:x-(o-e.x),xEnd:c-(o-e.x),yStart:a-(s-e.y),yEnd:l-(s-e.y)})});let i=0;d(n,"pointerdown",({offsetX:t,offsetY:o,pointerId:s})=>{i++,e=this.pxToCoords(t,o),this.canvas.setPointerCapture(s)}),d("pointerup",()=>{i=Math.max(0,i-1),e=void 0})}getZoomRegion(n=1,h=this.pointer){const{xStart:r,xEnd:e,yStart:i,yEnd:t}=this.bounds,{x:o,y:s}=this.pxToCoords(h.x,h.y);return{xStart:r+n*(o-r)/10,xEnd:e+n*(o-e)/10,yStart:i+n*(s-i)/10,yEnd:t+n*(s-t)/10}}}export{g as M};
