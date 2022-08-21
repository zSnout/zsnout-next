import{F as t}from"./FullscreenDisplay.d63693d1.js";import{W as l}from"./WebGlCanvas.2890f34a.js";import{d as n,s as c,aM as i,ba as f,ah as u,o as p,c as m,w as v,a as _}from"./index.307c9757.js";import"./SharedNav.13deb094.js";import"./VStack.a5267f59.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./LogoLight.1b2c95c2.js";const w=n({__name:"Uniforms",setup(g){const e=c(),r=`
  uniform vec2 u_resolution;
  uniform float left;

  varying vec4 v_position;

  void main() {
    vec2 pos = gl_FragCoord.xy / u_resolution;

    if (pos.x < left) {
      gl_FragColor = vec4(1, 1, 0, 1);
    } else if (pos.y < 0.01) {
      gl_FragColor = vec4(1, 0, 0, 1);
    } else if (pos.x > 0.99) {
      gl_FragColor = vec4(0, 1, 0, 1);
    } else if (pos.y > 0.99) {
      gl_FragColor = vec4(0, 0, 1, 1);
    } else {
      gl_FragColor = vec4(pos.xy, 0.5, 1);
    }
  }`;return i(()=>{if(!e.value)return;const o=new l(e.value,{fragmentString:r}),a=f(10),s=u(()=>a.value/1e3%1);o.useUniform("left",s)}),(o,a)=>(p(),m(t,null,{default:v(()=>[_("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{w as default};
