import{d as p,aC as e,b0 as l,o as t,c as n,w as o,aD as c,b2 as _,b as d,u as r,h as f,t as y,k as s,e as i,j as k}from"./index.5eygmsav.js";import{D as v}from"./DocumentDisplay.f38sgubl.js";import{T as h}from"./Title.2yqtfkd2.js";import"./Navigation.64w2aw5y.js";import"./SharedNav.3q0ndcho.js";import"./Button.32h7782u.js";import"./plugin-vue_export-helper.62h235na.js";import"./Logo.4djlqykq.js";import"./LogoLight.11xzt69h.js";const C=i("Verifying your account..."),D={key:0},b=i("Go back to zSnout."),z=p({__name:"verify-account",setup(g){e.value="";const a=l().query.code;async function u(){if(typeof a!="string"){e.value="Sorry, the code you used is invalid. Try again later.";return}c.emit("account:verify",a),c.once("account:done:verify",()=>_.replace("/"))}return u(),(x,T)=>{const m=k("RouterLink");return t(),n(v,{center:""},{default:o(()=>[d(h,null,{default:o(()=>[C]),_:1}),r(e)?(t(),f("p",D,y(r(e)),1)):s("",!0),r(e)?(t(),n(m,{key:1,to:"/"},{default:o(()=>[b]),_:1})):s("",!0)]),_:1})}}});export{z as default};
