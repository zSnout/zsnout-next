import{F as s}from"./FullscreenDisplay.1e98308c.js";import{C as n}from"./CoordinateCanvas2d.16e40d46.js";import{d as r,k as i,B as l,c as p,w as t,o as c,a as o}from"./index.7b903477.js";import"./BookmarkIcon.ab5cd17e.js";import"./WebGlCanvas.043d01a5.js";import"./useOption.974c4a16.js";const f=o("p",null,[o("strong",null,"What is this?")],-1),d=o("p",null," This is a WebGL debug page. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. There should also be a grid of black lines. ",-1),x=r({__name:"Grid",setup(u){const a=i(),e=`
  void main() {
    gl_FragColor = vec4(pos.x, pos.y, 0.5, 1);

    if (
      abs(float(int(pos.x)) - pos.x) < 0.01 ||
      abs(float(int(pos.y)) - pos.y) < 0.01
    ) {
      gl_FragColor = vec4(0, 0, 0, 1);
    }
  }`;return l(()=>{!a.value||new n(a.value,{fragmentString:e})}),(m,h)=>(c(),p(s,null,{options:t(()=>[f,d]),default:t(()=>[o("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});export{x as default};
