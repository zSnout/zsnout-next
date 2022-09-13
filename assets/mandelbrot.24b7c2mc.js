import{F as s}from"./FullscreenDisplay.6alzznsv.js";import{M as r}from"./MovableCanvas2d.3k2tk05z.js";import{d as i,q as n,Y as l,o as f,c as u,w as t,a as o}from"./index.w2xoota4.js";import"./BookmarkIcon.62ja9bj3.js";import"./VStack.1y80766s.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.q24vcovx.js";import"./CoordinateCanvas2d.ui5o1n16.js";import"./useOption.ujvp9hcq.js";import"./WebGlCanvas.1rb17qef.js";const c=o("h1",null,"What is this?",-1),p=o("p",null," This is a WebGL debug page. It should contain a simple rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),k=i({__name:"mandelbrot",setup(m){const e=n(),a=`
  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;
    gl_FragColor = vec4(0, 0, 0, 1);

    vec2 z;
    for (int i = 0; i < 100; i++) {
      z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + pos;

      if (z.x * z.x + z.y * z.y > 4.0) {
        gl_FragColor = vec4(float(i) / 100.0, float(i) / 100.0, float(i) / 100.0, 1.0);
        break;
      }
    }
  }`;return l(()=>{!e.value||new r(e.value,{fragmentString:a})}),(_,d)=>(f(),u(s,null,{help:t(()=>[c,p]),default:t(()=>[o("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{k as default};
