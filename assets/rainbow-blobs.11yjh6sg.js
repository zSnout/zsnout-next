import{d as z,q as a,Y as b,L as g,o as m,c as p,w as o,e as t,u as w,b as C,i as k,a as h}from"./index.1pqvvm4i.js";import{B as N}from"./VStack.34lxtf3d.js";import{u,_ as V}from"./ColorSliders.vue_vue_type_script_setup_true_lang.55nmm5y1.js";import{F as B}from"./FullscreenDisplay.hao6npqe.js";import{I as d}from"./InlineCheckboxField.67ybze61.js";import{L as f}from"./Labeled.29mn7ohi.js";import{s as y}from"./useOption.ujvp9hcq.js";import{M as F}from"./MovableCanvas2d.41imxryi.js";import"./InlineRangeField.4poaov81.js";import"./BookmarkIcon.3wmuqdow.js";import"./Field.2ydu2jt8.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./CoordinateCanvas2d.ui5o1n16.js";import"./WebGlCanvas.1rb17qef.js";const A=z({__name:"rainbow-blobs",setup(S){const c=u(),s=a(!1);y("darkness",s);const r=a(!1);y("split",r);const _=`
  uniform float time;
  uniform bool darkness;
  uniform bool split;

  ${u}

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  vec3 palette(float i, float v) {
    if (split) {
      if (v > 0.5 && i < 0.5) i += 0.5;
      else if (v < 0.5 && i > 0.5) i -= 0.5;
    }

    vec3 rgb = use_color_sliders(i);

    if (darkness) {
      rgb = 1.0 - (1.0 - rgb) * (v > 0.0 ? 1.0 - v : 1.0);
      rgb *= v < 0.0 ? (split ? -v : 1.0 - -v) : 1.0;
    }

    return rgb;
  }

  vec4 permute(vec4 x) {
    return mod((34.0 * x + 1.0) * x, 289.0);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    // x0 = x0 - 0. + 0.0 * C 
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    // Permutations
    i = mod(i, 289.0);
    vec4 p = permute(
      permute(
        permute(
          i.z + vec4(0.0, i1.z, i2.z, 1.0)
        ) + i.y + vec4(0.0, i1.y, i2.y, 1.0)
      ) + i.x + vec4(0.0, i1.x, i2.x, 1.0)
    );

    // Gradients
    // N*N points uniformly over a square, mapped onto an octahedron.
    float n_ = 1.0 / 7.0; // N = 7
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z); // mod(p, N * N)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_); // mod(j, N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    // Normalise gradients
    vec4 norm = taylorInvSqrt(
      vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3))
    );

    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(
      0.6 -
        vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0
    );

    m = m * m;
    return 42.0 * dot(
      m*m, vec4(dot(p0, x0), dot(p1,x1), dot(p2, x2), dot(p3, x3))
    );
  }

  float noise(vec3 v) {
    return (snoise(v) + 1.0) / 2.0;
  }

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;

    float n = noise(vec3(pos.x, pos.y, time));
    float v = snoise(vec3(time, pos.x, pos.y));

    gl_FragColor = vec4(palette(n, v), 1.0);
  }
  `,l=a(),i=a();let x=Math.random()*10006;return b(()=>{if(!l.value)return;const e=new F(l.value,{fragmentString:_,saveBounds:!0});e.on("render",()=>{e.setUniformOfInt("darkness",[s.value]),e.setUniformOfInt("split",[r.value]),e.setUniform("time",x),c.setGlsl(e)}),i.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})},g(()=>x+=.01)}),(e,n)=>(m(),p(B,null,{options:o(()=>[t(V,{sliders:w(c)},null,8,["sliders"]),t(f,{label:"Darkness Effect?"},{default:o(()=>[t(d,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=v=>s.value=v)},null,8,["modelValue"])]),_:1}),t(f,{label:"Split Effect?"},{default:o(()=>[t(d,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=v=>r.value=v)},null,8,["modelValue"])]),_:1})]),buttons:o(()=>[i.value?(m(),p(N,{key:0,onClick:i.value},{default:o(()=>[C(" Reset Position ")]),_:1},8,["onClick"])):k("",!0)]),default:o(()=>[h("canvas",{ref_key:"canvas",ref:l},null,512)]),_:1}))}});export{A as default};
