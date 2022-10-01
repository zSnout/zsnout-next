import{_ as j,o as u,h as d,r as Z,d as ie,q as p,a9 as de,I as G,aa as S,v as ce,a2 as re,H as f,e as a,w as l,ab as me,u as r,F as O,ac as M,s as v,K as N,j as R,b as n,c as F,a as k,t as V,E as J,ad as fe,ae as ve,af as Q,ag as pe,p as _e,l as he}from"./index.2hvd2i9k.js";import{B as y}from"./VStack.6d7g92uw.js";import{D as ye}from"./DocumentDisplay.2je0vazf.js";import{D as ke}from"./Dropdown.5andrccq.js";import{F as H}from"./Field.2ydu2jt8.js";import{_ as ge,M as K,H as U,S as W,T as be}from"./BookmarkIcon.3wmuqdow.js";import{I as X}from"./InlineButton.197m3pe8.js";import{I as Ce}from"./InlineField.1bs7kao1.js";import"./Navigation.2xu1kz2a.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.238jku1n.js";const we={},xe={class:"sticky"};function Se(b,c){return u(),d("div",xe,[Z(b.$slots,"default",{},void 0,!0)])}const Me=j(we,[["render",Se],["__scopeId","data-v-b70addb1"]]);const Ve={},$e={class:"sticky"};function De(b,c){return u(),d("div",$e,[Z(b.$slots,"default",{},void 0,!0)])}const Ie=j(Ve,[["render",De],["__scopeId","data-v-b6bfcac1"]]),q=b=>(_e("data-v-d6dafe5e"),b=b(),he(),b),Oe={key:0},Ue={key:1},Le={key:2},Te={style:{flex:"1"}},Be={key:5},Ee={class:"normalize"},ze={key:0,class:"name"},Ne=["onContextmenu"],Re={class:"second-layer"},qe={key:0,class:"second-layer"},Fe=q(()=>k("option",{value:"view"},"Viewer",-1)),He=q(()=>k("option",{value:"comment"},"Commenter",-1)),Ke=q(()=>k("option",{value:"manage"},"Manager",-1)),je={class:"second-layer trash-div"},Ye=q(()=>k("p",null,"Edit your message below, then click OK to send it.",-1)),Ae=ie({__name:"chat",setup(b){const c=p(),s=""+de().query.id,L=p(!1),T=p(!1),$=p(""),_=G([]),h=p("waiting"),w=p("Loading title...");S("chat:message:delete",(o,e)=>{if(o===s){const i=_.findIndex(({id:t})=>t===e);i!==-1&&_.splice(i,1)}}),S("chat:message:list",(o,e)=>{o===s&&(_.splice(0,_.length,...e),setTimeout(()=>scrollTo(0,1e6)))}),S("chat:message:update",(o,e)=>{if(o===s){let i;e.from===M.value?i=_.find(t=>t.localOnly===e.content):i=_.find(t=>t.id===e.id),i?(i.content=e.content,i.from=e.from,i.id=e.id,i.timestamp=e.timestamp,delete i.localOnly):_.push(e),document.body.scrollHeight-window.innerHeight+8>=scrollY&&setTimeout(()=>scrollTo(0,1e6))}}),S("chat:update:title",(o,e)=>{o===s&&(w.value=e,document.title=`${w.value} | zSnout`)}),S("chat:permission",(o,e)=>{o===s&&(h.value=e)}),ce(()=>{f.emit("chat:watch:start",v.value,s)}),S("connect",()=>{f.emit("chat:watch:start",v.value,s)}),re(()=>f.emit("chat:watch:stop",s));function Y(o){var e;o==null||o.preventDefault(),$.value&&(f.emit("chat:message:send",v.value,s,$.value),_.push({from:M.value,content:"Sending your message...",id:((e=window.crypto)==null?void 0:e.randomUUID())||"",timestamp:Date.now(),localOnly:$.value.slice(0,1e3)}),$.value="")}function A(o){c.value=o,L.value=!0}function ee(){L.value=!1,c.value&&f.emit("chat:message:delete",v.value,s,c.value.id)}const B=p(!1),I=p("");function te(){c.value&&c.value.from===M.value&&(B.value=!0,I.value=c.value.content)}function ae(){c.value&&(B.value=!1,c.value.content=I.value,f.emit("chat:message:update",v.value,s,c.value.id,I.value))}const E=p(!1),g=G(Object.create(null));S("chat:update:members",(o,e)=>{if(o===s){for(let i in g)delete g[i];Object.assign(g,e)}});function le(){h.value==="manage"&&(x.splice(0,x.length),f.emit("chat:request:members",v.value,s),E.value=!0)}const x=[];function oe(){if(h.value==="manage"){for(const o of x)f.emit("chat:message:send",v.value,s,o);x.splice(0,x.length),f.emit("chat:update:members",v.value,s,g)}}const D=p("");function P(o){o==null||o.preventDefault(),D.value&&(g[D.value]="comment",x.push(`(added ${D.value})`),D.value="")}function ne(o){x.push(`(removed ${o})`),delete g[o]}const z=p(!1);function se(){z.value=!0}function ue(){z.value=!1,f.emit("chat:leave",v.value,s),pe.push("/my-chats")}return(o,e)=>{var i;return u(),d(O,null,[a(ye,{center:"","no-footer":""},{default:l(()=>[a(Ie,{class:"normalize"},{default:l(()=>[r(N)?R("",!0):(u(),d("p",Oe," Looks like you're temporarily offline. zSnout is reconnecting... ")),r(v)?h.value==="none"?(u(),d("p",Le," Looks like you don't have permission to access this chat! ")):r(N)&&h.value==="manage"?(u(),F(U,{key:3,wraps:""},{default:l(()=>[a(Ce,{maxlength:100,"model-value":w.value,style:{flex:"1"},"onUpdate:modelValue":e[2]||(e[2]=t=>r(f).emit("chat:update:title",r(v),s,w.value=t))},null,8,["model-value"]),a(y,{pre:"",style:{"font-size":"1rem"},onClick:le},{default:l(()=>[n(" Edit Members ")]),_:1})]),_:1})):r(N)?(u(),F(U,{key:4,wraps:""},{default:l(()=>[k("p",Te,V(w.value),1),a(y,{pre:"",style:{"font-size":"1rem"},onClick:se},{default:l(()=>[n(" Leave this Chat ")]),_:1})]),_:1})):r(N)?(u(),d("p",Be,V(w.value),1)):R("",!0):(u(),d("p",Ue,[n(" You're not logged in. "),a(X,{onClick:e[0]||(e[0]=t=>T.value=!0)},{default:l(()=>[n("Log in")]),_:1}),n(" or "),a(X,{onClick:e[1]||(e[1]=t=>T.value=!0)},{default:l(()=>[n("sign up")]),_:1}),n(" to access this chat. ")]))]),_:1}),k("div",Ee,[(u(!0),d(O,null,J(_,(t,m)=>(u(),d(O,{key:t.id},[m===0||_[m-1].from!==t.from?(u(),d("div",ze,V(t.from)+": ",1)):R("",!0),fe((u(),d("div",{onContextmenu:C=>(C.preventDefault(),A(t)),onMousedown:e[3]||(e[3]=C=>C.preventDefault())},[n(V(t.content),1)],40,Ne)),[[r(ve),C=>(C.preventDefault(),A(t))]])],64))),128))]),a(W,null,{default:l(()=>[n(V(""))]),_:1}),a(Me,{class:"normalize"},{default:l(()=>[h.value==="manage"||h.value==="comment"?(u(),d("form",{key:0,style:{"font-size":"1rem"},onSubmit:Y},[a(U,null,{default:l(()=>[a(H,{modelValue:$.value,"onUpdate:modelValue":e[4]||(e[4]=t=>$.value=t),maxlength:1e3,placeholder:"Send a message...",style:{flex:"1"}},null,8,["modelValue"]),a(y,{onClick:Y},{default:l(()=>[n("Send")]),_:1})]),_:1})],32)):R("",!0)]),_:1})]),_:1}),a(ge,{open:T.value,"onUpdate:open":e[5]||(e[5]=t=>T.value=t)},null,8,["open"]),a(me,{open:L.value,"onUpdate:open":e[6]||(e[6]=t=>L.value=t)},{default:l(()=>{var t,m;return[a(Q,{disabled:((t=c.value)==null?void 0:t.from)!==r(M),onClick:ee},{default:l(()=>[n(" Delete Message ")]),_:1},8,["disabled"]),a(Q,{disabled:((m=c.value)==null?void 0:m.from)!==r(M),onClick:te},{default:l(()=>[n(" Edit Message ")]),_:1},8,["disabled"])]}),_:1},8,["open"]),a(K,{open:h.value==="manage"&&E.value},{buttons:l(()=>[a(y,{onClick:e[8]||(e[8]=t=>(oe(),E.value=!1))},{default:l(()=>[n("OK")]),_:1}),a(y,{cancel:"",onClick:e[9]||(e[9]=t=>(r(f).emit("chat:request:members",r(v),s),E.value=!1))},{default:l(()=>[n(" Cancel ")]),_:1})]),default:l(()=>[k("form",{onSubmit:P},[a(U,null,{default:l(()=>[a(H,{modelValue:D.value,"onUpdate:modelValue":e[7]||(e[7]=t=>D.value=t),placeholder:"Type someone's username..."},null,8,["modelValue"]),a(y,{pre:"",onClick:P},{default:l(()=>[n("Add Member")]),_:1})]),_:1})],32),(u(!0),d(O,null,J(g,(t,m)=>(u(),F(U,{key:m,class:"member"},{default:l(()=>[k("div",Re,V(m),1),a(W),m===r(M)?(u(),d("div",qe,"Not Removable")):(u(),d(O,{key:1},[a(ke,{modelValue:g[m],"onUpdate:modelValue":C=>g[m]=C,class:"level"},{default:l(()=>[Fe,He,Ke]),_:2},1032,["modelValue","onUpdate:modelValue"]),k("div",je,[a(be,{class:"trash",onClick:C=>ne(m)},null,8,["onClick"])])],64))]),_:2},1024))),128))]),_:1},8,["open"]),a(K,{open:(h.value==="view"||h.value==="comment")&&z.value},{buttons:l(()=>[a(y,{cancel:"",onClick:e[10]||(e[10]=t=>z.value=!1)},{default:l(()=>[n("Cancel")]),_:1}),a(y,{onClick:ue},{default:l(()=>[n("OK")]),_:1})]),default:l(()=>[k("p",null," Are you sure you want to leave "+V(w.value)+"? You can always contact the chat owner to be re-added. ",1)]),_:1},8,["open"]),a(K,{open:((i=c.value)==null?void 0:i.from)===r(M)&&B.value},{buttons:l(()=>[a(y,{onClick:ae},{default:l(()=>[n("OK")]),_:1}),a(y,{cancel:"",onClick:e[12]||(e[12]=t=>B.value=!1)},{default:l(()=>[n("Cancel")]),_:1})]),default:l(()=>[Ye,a(H,{modelValue:I.value,"onUpdate:modelValue":e[11]||(e[11]=t=>I.value=t),maxlength:1e3},null,8,["modelValue"])]),_:1},8,["open"])],64)}}});const nt=j(Ae,[["__scopeId","data-v-d6dafe5e"]]);export{nt as default};
