import{d as p,aC as e,bd as d,o as t,c as n,w as o,aD as c,bf as f,b as l,u as r,h as _,t as y,j as s,e as i,k}from"./index.nr51tphb.js";import{D as v}from"./DocumentDisplay.402qmvl2.js";import{T as h}from"./Title.3fz2k97a.js";import"./Navigation.17rmqtrz.js";import"./SharedNav.4wpq3a9c.js";import"./Button.3tf6rlyu.js";import"./_plugin-vue_export-helper.35ltfn2z.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";const C=i("Verifying your account..."),D={key:0},b=i("Go back to zSnout."),z=p({__name:"verify-account",setup(g){e.value="";const a=d().query.code;async function u(){if(typeof a!="string"){e.value="Sorry, the code you used is invalid. Try again later.";return}c.emit("account:verify",a),c.once("account:done:verify",()=>f.replace("/"))}return u(),(x,T)=>{const m=k("RouterLink");return t(),n(v,{center:""},{default:o(()=>[l(h,null,{default:o(()=>[C]),_:1}),r(e)?(t(),_("p",D,y(r(e)),1)):s("",!0),r(e)?(t(),n(m,{key:1,to:"/"},{default:o(()=>[b]),_:1})):s("",!0)]),_:1})}}});export{z as default};
