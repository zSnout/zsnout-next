import{d as p,aa as e,L as f,A as l,c as n,w as t,E as c,U as d,o,e as y,b as s,u as r,f as _,t as k,k as i}from"./index.xh0zaea0.js";import{D as v}from"./DocumentDisplay.6d0yf2eg.js";import{T as g}from"./Title.4eiq6n5a.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./BookmarkIcon.1ijfs95x.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const h={key:0},q=p({__name:"verify-account",setup(x){e.value="";const a=f().query.code;async function u(){if(typeof a!="string"){e.value="Sorry, the code you used is invalid. Try again later.";return}c.emit("account:verify",a),c.once("account:done:verify",()=>d.replace("/"))}return u(),(C,D)=>{const m=l("RouterLink");return o(),n(v,{center:""},{default:t(()=>[y(g,null,{default:t(()=>[s("Verifying your account...")]),_:1}),r(e)?(o(),_("p",h,k(r(e)),1)):i("",!0),r(e)?(o(),n(m,{key:1,to:"/"},{default:t(()=>[s("Go back to zSnout.")]),_:1})):i("",!0)]),_:1})}}});export{q as default};
