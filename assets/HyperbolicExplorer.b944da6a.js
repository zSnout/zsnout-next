import{u as a,_ as u}from"./ColorSliders.7318fe0c.js";import{F as f}from"./FullscreenDisplay.a4360b3b.js";import{M as p}from"./MovableCanvas2d.d59a984d.js";import{d as c,k as s,aL as i,o as m,c as _,w as r,b as d,u as v,a as x}from"./index.ea2ab528.js";import"./useOption.58bd87a3.js";import"./InlineRangeField.00e64ceb.js";import"./VStack.9479ad49.js";import"./Labeled.d2205912.js";import"./BookmarkIcon.6af38a46.js";import"./CoordinateCanvas2d.e79872d9.js";import"./WebGlCanvas.8976ae90.js";const H=c({__name:"HyperbolicExplorer",setup(y){const t=a(),l=`
  uniform vec2 u_scale;
  uniform vec2 u_offset;
  uniform vec2 us_scale;
  uniform vec2 us_offset;
  uniform vec2 u_resolution;

  ${a}

  float sinh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / 2.0;
  }

  float cosh(float val) {
    float tmp = exp(val);
    return (tmp + 1.0 / tmp) / 2.0;
  }

  float tanh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / (tmp + 1.0 / tmp);
  }

  float arcosh(float val) {
    return log(val + sqrt(val * val - 1.0));
  }

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;
    vec2 center = 0.5 * u_scale + u_offset;
    vec2 square = (gl_FragCoord.xy / u_resolution * us_scale + us_offset) * 1.2;

    if (square.x * square.x + square.y * square.y > 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      return;
    }

    pos -= center;
    pos *= -1.2;
    if (abs(pos.x) < 0.00001) pos.x = 0.00001;

    /* Poincare to Hyperboloid */
    float a = (1.0 - pos.y * pos.y) / (pos.x * pos.x) - 1.0;
    float b = -2.0 / pos.x;

    float x = -b / a; // other is x = 0
    float y = pos.y / pos.x * x;
    float z = x / pos.x - 1.0;

    x -= 2.0 * center.x;
    y -= 2.0 * center.y;

    float d = floor(abs(x)) + floor(abs(y));
    if (x < 0.0) d -= 1.0;
    if (y < 0.0) d += 1.0;

    gl_FragColor = vec4(use_color_sliders(d / 20.0), 1.0);
  }
  `,e=s(),n=s();return i(()=>{if(!e.value)return;const o=new p(e.value,{fragmentString:l,saveBounds:!0,bounds:{xStart:-1,xEnd:1,yStart:-1,yEnd:1}});o.on("render",()=>t.setGlsl(o)),n.value=()=>{o.setBounds({xStart:-1,xEnd:1,yStart:-1,yEnd:1})}}),(o,g)=>(m(),_(f,null,{options:r(()=>[d(u,{sliders:v(t)},null,8,["sliders"])]),default:r(()=>[x("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{H as default};
