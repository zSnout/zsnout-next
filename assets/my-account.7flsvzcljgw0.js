import{B as w}from"./Button.32h7782uxra0.js";import{C as P}from"./CardGrid.5dgkfhei0cs0.js";import{D as U}from"./DocumentDisplay.f38sgubl5e80.js";import{M as T,F as O}from"./SharedNav.48t0lj4lmns0.js";import{T as Y}from"./Title.2yqtfkd2j540.js";import{d as x,q as u,aD as r,o as d,h as v,b as t,w as a,i as M,F as C,e as l,t as _,u as n,aT as D,s as g,aW as b,aF as z,a as N,c as E,aC as y,k as B}from"./index.40zdbs07qwo0.js";import{I as F}from"./InlineButton.5n1jm7t3mp80.js";import"./plugin-vue_export-helper.62h235na3u80.js";import"./Navigation.64w2aw5yn6g0.js";import"./Logo.4djlqykqmru0.js";import"./LogoLight.11xzt69hf600.js";const q=l(" Log Out "),A=l("Log Out Other Devices"),G=l("Change Username"),K=l("Change Password"),W={key:0},j=l(" Click "),H=l(" here "),J=l(" You cannot change notification settings when offline. "),Q={key:1},R=l("Log in"),X=l(" to a zSnout account or "),Z=l("sign up"),ee=l(" to receive notification for new blog posts. "),oe=N("p",null,null,-1),te={key:2},ae=l("OK"),le=l("Cancel"),_e=x({__name:"my-account",setup(se){const h=u(!1),$=u(""),p=u(!1),f=u(!1),V=u(""),c=u(""),m=u(""),k=u(""),i=u("username");r.on("account:done:reset-session",()=>{$.value="Your other devices have been logged out.",setTimeout(()=>{h.value=!1},1e3)});function I(){h.value=!0,$.value="Logging out your other devices...",r.emit("account:reset-session",g.value,!0)}function S(s){p.value=!0,f.value=!0,V.value=`Pick a new ${i.value=s} below.`,s==="username"?c.value=D.value:c.value="",m.value="",k.value=""}function L(){const s=i.value;s==="password"?r.emit("account:update:password",g.value,c.value,m.value):s==="username"&&r.emit("account:update:username",g.value,c.value),f.value=!1;function e(){r.off(`account:done:update:${s}`,o),f.value=!0}function o(){r.off("error",e),V.value=`Your ${s} has been changed.`,setTimeout(()=>p.value=!1,1e3)}r.once("error",e),r.once(`account:done:update:${s}`,o)}return(s,e)=>(d(),v(C,null,[t(U,null,{default:a(()=>[t(Y,null,{default:a(()=>[l(_(n(D))+"'s Account",1)]),_:1}),t(P,null,{default:a(()=>[t(w,{onClick:e[0]||(e[0]=o=>(D.value="",g.value="",s.$router.push("/")))},{default:a(()=>[q]),_:1}),t(w,{onClick:I},{default:a(()=>[A]),_:1}),t(w,{onClick:e[1]||(e[1]=o=>S("username"))},{default:a(()=>[G]),_:1}),t(w,{onClick:e[2]||(e[2]=o=>S("password"))},{default:a(()=>[K]),_:1})]),_:1}),n(g)?(d(),v("p",W,[l(" You "+_(n(b)?"are currently receiving":"will not receive")+" notifications for updates to the zSnout blog. ",1),n(z)?(d(),v(C,{key:0},[j,t(F,{onClick:e[3]||(e[3]=o=>n(r).emit("blog:update:will-notify",n(g),!n(b)))},{default:a(()=>[H]),_:1}),l(" to opt-"+_(n(b)?"out of":"in to")+" notifications. ",1)],64)):(d(),v(C,{key:1},[J],64))])):(d(),v("p",Q,[t(F,{onClick:e[4]||(e[4]=o=>p.value=!0)},{default:a(()=>[R]),_:1}),X,t(F,{onClick:e[5]||(e[5]=o=>p.value=!0)},{default:a(()=>[Z]),_:1}),ee]))]),_:1}),t(T,{open:h.value},{buttons:a(()=>[oe]),default:a(()=>[N("p",null,_($.value),1)]),_:1},8,["open"]),t(T,{open:p.value},M({default:a(()=>[N("p",null,_(V.value),1),f.value?(d(),E(O,{key:0,modelValue:c.value,"onUpdate:modelValue":e[6]||(e[6]=o=>c.value=o),autocomplete:i.value,placeholder:i.value==="password"?"Old Password":"New Username",type:i.value==="password"?"password":"text",onInput:e[7]||(e[7]=o=>y.value="")},null,8,["modelValue","autocomplete","placeholder","type"])):B("",!0),i.value==="password"&&f.value?(d(),v(C,{key:1},[t(O,{modelValue:m.value,"onUpdate:modelValue":e[8]||(e[8]=o=>m.value=o),autocomplete:"new-password",placeholder:"New Password",type:"password",onInput:e[9]||(e[9]=o=>y.value="")},null,8,["modelValue"]),t(O,{modelValue:k.value,"onUpdate:modelValue":e[10]||(e[10]=o=>k.value=o),autocomplete:"new-password",placeholder:"Verify Password",type:"password",onInput:e[11]||(e[11]=o=>y.value="")},null,8,["modelValue"])],64)):B("",!0),i.value==="password"&&m.value!==k.value||n(y)?(d(),v("p",te,_(i.value==="password"&&m.value!==k.value?"Your passwords should match.":n(y)),1)):B("",!0)]),_:2},[f.value?{name:"buttons",fn:a(()=>[t(w,{onClick:L},{default:a(()=>[ae]),_:1}),t(w,{cancel:"",onClick:e[12]||(e[12]=o=>p.value=!1)},{default:a(()=>[le]),_:1})]),key:"0"}:void 0]),1032,["open"])],64))}});export{_e as default};
