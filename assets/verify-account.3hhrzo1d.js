import{d as p,G as e,a9 as l,o as t,c as n,w as o,H as c,ag as f,e as d,b as s,u as r,h as y,t as _,j as i,k}from"./index.1nk7ancw.js";import{D as v}from"./DocumentDisplay.2je0vazf.js";import{T as g}from"./Title.3fz2k97a.js";import"./Navigation.2xu1kz2a.js";import"./BookmarkIcon.3wmuqdow.js";import"./VStack.6d7g92uw.js";import"./Field.2ydu2jt8.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.238jku1n.js";const h={key:0},j=p({__name:"verify-account",setup(x){e.value="";const a=l().query.code;async function u(){if(typeof a!="string"){e.value="Sorry, the code you used is invalid. Try again later.";return}c.emit("account:verify",a),c.once("account:done:verify",()=>f.replace("/"))}return u(),(C,D)=>{const m=k("RouterLink");return t(),n(v,{center:""},{default:o(()=>[d(g,null,{default:o(()=>[s("Verifying your account...")]),_:1}),r(e)?(t(),y("p",h,_(r(e)),1)):i("",!0),r(e)?(t(),n(m,{key:1,to:"/"},{default:o(()=>[s("Go back to zSnout.")]),_:1})):i("",!0)]),_:1})}}});export{j as default};
