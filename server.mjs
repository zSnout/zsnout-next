import{ObjectId as Re}from"mongodb";import{randomUUID as Fe}from"node:crypto";import{Server as je}from"node:http";import{Server as qe}from"socket.io";import Ee from"ytdl-core";import{compare as Me,hash as ke}from"bcrypt";import{randomUUID as G}from"node:crypto";import{MongoClient as Pe}from"mongodb";var F=process.env.ZSNOUT_DATABASE?new Pe(process.env.ZSNOUT_DATABASE,{serverApi:"1"}).connect().then(e=>(e.on("error",async()=>{await e.close(),await e.connect()}),e)).catch(e=>(console.log(e),void 0)):Promise.resolve((console.log("no database available"),void 0)),$e=F.then(e=>e==null?void 0:e.db("zsnout")).catch(e=>(console.log(e),void 0)),ze=F.then(e=>!!e)??Promise.resolve(!1);async function b(e){var t;return(t=await $e)==null?void 0:t.collection(e)}process.on("beforeExit",()=>{F.then(e=>e==null?void 0:e.close())});b("accounts").then(e=>{e&&(e.updateMany({invites:{$exists:!1}},{$set:{invites:[]}}),e.updateMany({stories:{$exists:!1}},{$set:{stories:[]}}))}).catch(()=>{});import{createTransport as Ae}from"nodemailer";var Ce={host:process.env.ZSNOUT_MAIL_HOST,port:+(process.env.ZSNOUT_MAIL_PORT||587),secure:process.env.ZSNOUT_MAIL_PORT==="465",auth:{user:process.env.ZSNOUT_MAIL_USER,pass:process.env.ZSNOUT_MAIL_PASSWORD}},Ge=!!(process.env.ZSNOUT_MAIL_HOST&&process.env.ZSNOUT_MAIL_USER&&process.env.ZSNOUT_MAIL_PASSWORD),$=Ae(Ce);function W(e){return new Promise(t=>{$==null||$.sendMail({...e,from:process.env.ZSNOUT_MAIL_FROM},(n,s)=>{n?(console.log(n),t(void 0)):t(s)})})}process.on("beforeExit",()=>$==null?void 0:$.close());var A;(s=>{function e(r){return r.length>=5&&r.length<=20&&/^[A-Za-z_][A-Za-z0-9_]+$/.test(r)&&!/zsnout/i.test(r)}s.Username=e;function t(r){return r.length>=8&&/(?![\d_])\w/.test(r)&&/\d/.test(r)}s.Password=t;function n(r){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(r)}s.Email=n})(A||={});function J(e){return ke(e,10)}function K(e,t){return Me(e,t)}var T=b("accounts");async function Q(e,t){let n=await T;if(!n)return{status:1};let s=await n.findOne({username:e});return s?await K(t,s.password)?{status:3,account:s}:{status:0}:{status:2}}async function C(e){let t=await T;if(!t)return{status:1};let n=await t.findOne({session:e});return n?{status:2,account:n}:{status:0}}async function V(e,t,n){let s=await T;if(!s)return{status:0};if(!A.Username(e))return{status:3};if(!A.Password(t))return{status:4};if(!A.Email(n))return{status:5};if(await s.findOne({username:e}))return{status:7};if(await s.findOne({email:n}))return{status:8};let r={username:e,password:await J(t),email:n,creation:Date.now(),session:G(),verified:!1,verifyCode:G(),bookmarks:[],notes:[],chats:[],invites:[],stories:[],willNotifyForBlog:!0};return(await s.insertOne(r)).acknowledged?await W({to:n,subject:"Verify your zSnout account",text:`Hey @${e}! Verify your new zSnout account by opening this link: https://zsnout.com/verify-account?code=${r.verifyCode}.`})?{status:2,account:r}:(await s.deleteOne({session:r.session}),{status:5}):{status:1}}async function X(e){let t=await T;if(!t)return{status:1};let n=await t.findOneAndUpdate({verifyCode:e},{$set:{verified:!0}});return n.value?{status:2,account:n.value}:{status:0}}async function De(){let e=await T;await(e==null?void 0:e.deleteMany({verified:!1,creation:{$lte:Date.now()-15*60*1e3}}))}async function p(e){var t;return await((t=await T)==null?void 0:t.findOne({session:e}))||void 0}async function k(e,t){var n,s;return((s=await((n=await T)==null?void 0:n.updateOne({session:e},t)))==null?void 0:s.acknowledged)||!1}async function _(e,t){return k(e,{$set:t})}async function ee(e,t){let n=await T;return n?A.Username(t)?await n.findOne({username:t})?7:await _(e,{username:t})?2:1:3:0}async function te(e,t,n){if(!await T)return 0;if(!A.Password(n))return 4;let r=await p(e);return r?await K(t,r.password)?await _(e,{password:await J(n)})?2:1:6:1}setInterval(De,5*60*1e3);import{ObjectId as v}from"mongodb";import{randomUUID as ne}from"node:crypto";var j=b("accounts"),U=b("chats");async function q(e){let[t,n]=await Promise.all([U,p(e)]);if(!t||!n)return[];let s=n._id.toHexString();return(await t.find({_id:{$in:n.chats}}).toArray()).map(a=>({id:a._id.toHexString(),level:a.members[s],title:a.title})).filter(a=>a.level&&a.level!=="none")}async function se(e,t){let[n,s]=await Promise.all([U,p(e)]);if(!n||!s)return!1;let r=new v;if(!await _(e,{chats:s.chats.concat(r)}))return!1;let{acknowledged:a}=await n.insertOne({_id:r,creation:Date.now(),members:{[s._id.toHexString()]:"manage"},messages:[{content:`Welcome to your new chat, ${s.username}!`,from:"zSnout",id:ne(),timestamp:Date.now()}],title:t.slice(0,100),defaultLevel:"none"});return a}async function M(e,t){if(t.length!==24)return{permission:"none"};let[n,s]=await Promise.all([U,p(e)]);if(!n||!s)return{permission:"none"};let r=s._id.toHexString(),a=await n.findOne({_id:v.createFromHexString(t)});if(!a)return{permission:"none"};let i=a.members[r]||a.defaultLevel;return!i||i==="none"?{permission:"none"}:{permission:i,messages:a.messages,title:a.title,members:a.members}}async function ae(e,t){if(e.length!==24)return!1;let n=await U;if(!n)return!1;let{acknowledged:s}=await n.updateOne({_id:v.createFromHexString(e)},{$set:{title:t.slice(0,100)}});return s}async function re(e,t,n){if(e.length!==24)return!1;let s=await U;if(!s)return!1;let r={content:n.slice(0,1e3),id:ne(),timestamp:Date.now(),from:t},{acknowledged:a}=await s.updateOne({_id:v.createFromHexString(e)},{$push:{messages:r}});return a?r:!1}async function ie(e,t,n){if(t.length!==24)return!1;let s=await U;if(!s)return!1;let{acknowledged:r}=await s.updateOne({_id:v.createFromHexString(t)},{$pull:{messages:{id:n,from:e}}});return r}async function E(e){var s;let t=(s=await j)==null?void 0:s.find({_id:{$in:Object.keys(e).filter(r=>r.length===24).map(r=>v.createFromHexString(r))}});if(!t)return Object.create(null);let n=await t.toArray();return Object.fromEntries(n.map(({_id:r,username:a})=>[a,e[r.toHexString()]]).filter(r=>r[1]))}async function oe(e){var r;let t=Object.create(null);for(let a in e)t[a.toLowerCase()]=e[a];let n=(r=await j)==null?void 0:r.find({username:{$in:Object.keys(t).map(a=>new RegExp(`^${a}$`,"i"))}});if(!n)return{};let s=await n.toArray();return Object.fromEntries(s.map(({_id:a,username:i})=>[a.toHexString(),t[i.toLowerCase()]]).filter(a=>a[1]))}async function ce(e,t){if(e.length!==24)return!1;for(let i in t)if(i.length!==24)return!1;let[n,s]=await Promise.all([j,U]);if(!n||!s)return!1;let r=v.createFromHexString(e),a;return{acknowledged:a}=await n.updateMany({},{$pull:{chats:r}}),!a||({acknowledged:a}=await n.updateMany({_id:{$in:Object.keys(t).filter(i=>i.length===24).filter(i=>t[i]!=="none").map(i=>v.createFromHexString(i))}},{$push:{chats:r}}),!a)?!1:({acknowledged:a}=await s.updateOne({_id:r},{$set:{members:t}}),a)}async function ue(e,t){if(e.length!==24||t.length!==24)return;let n=await U;if(!n)return;let{members:s}=await n.findOne({_id:v.createFromHexString(e)})||{};s&&(delete s[t],await n.updateOne({_id:v.createFromHexString(e)},{$set:{members:s}}))}async function me(e,t,n,s){if(t.length!==24)return;let r=await U;if(!r)return;let{messages:a}=await r.findOne({_id:v.createFromHexString(t)})||{};if(!a)return;let i=a.find(({id:d})=>d===n);if(!i||i.from!==e)return;i.content=s;let{acknowledged:o}=await r.updateOne({_id:v.createFromHexString(t)},{$set:{messages:a}});if(o)return i}import{ObjectId as L}from"bson";var He=b("accounts"),D=b("notes");async function Le(e,t){let n=await He;n&&await n.updateOne({_id:t},{$push:{notes:e}})}async function B(e){let{status:t,account:n}=await C(e);if(t===0)return[];if(t===1)return[];let s=await D;return s?(await s.find({_id:{$in:n.notes}}).toArray()).map(({_id:a,title:i,contents:o})=>({id:a.toHexString(),title:i,desc:o.slice(0,80).replaceAll(`
`," ")})):[]}async function le(e,t){let{status:n,account:s}=await C(e);if(n===0||n===1)return;let r=await D;if(!r||s.notes.length>=100)return;let a={_id:new L,contents:"<p>This is your new note!</p>",creation:Date.now(),owner:s._id,title:t};await Promise.all([r.insertOne(a),Le(a._id,s._id)])}async function N(e,t){if(t.length!==24)return{doesOwn:!1};let{status:n,account:s}=await C(e);if(n===0)return{doesOwn:!1};if(n===1)return{doesOwn:!1};let r=await D;if(!r)return{doesOwn:!1};let a=await r.findOne({_id:L.createFromHexString(t),owner:s._id});return a?{doesOwn:!0,note:a}:{doesOwn:!1}}async function de(e,t){if(e.length!==24||t.length>1e4)return;let n=await D;n&&await n.updateOne({_id:L.createFromHexString(e)},{$set:{contents:t}})}async function fe(e,t){if(e.length!==24)return;let n=await D;n&&await n.updateOne({_id:L.createFromHexString(e)},{$set:{title:t.slice(0,100)}})}import{ObjectId as y}from"mongodb";import{randomUUID as I}from"node:crypto";var R=b("accounts"),O=b("stories");async function H(e,t){let[n,s]=await Promise.all([O,p(e)]);if(!n||!s||t.length!==24)return{permission:"none"};let r=s._id.toHexString(),a=await n.findOne({_id:y.createFromHexString(t)});if(!a)return{permission:"none"};let i=a.members[r];if(!i||i==="none")return{permission:"none"};let o=a.gems[r]||0;return{permission:i,gems:o,title:a.title,members:a.members,threads:a.threads,completed:a.completed,userGems:a.gems}}async function Z(e){let[t,n]=await Promise.all([O,p(e)]);if(!t||!n)return[];let s=n._id.toHexString();return(await t.find({_id:{$in:n.stories}}).toArray()).map(a=>({id:a._id.toHexString(),title:a.title,activeThreadCount:a.threads.length,completedThreadCount:a.completed.length,level:a.members[s]})).filter(a=>a.level&&a.level!=="none")}async function he(e,t){let[n,s,r]=await Promise.all([O,R,p(e)]);if(!n||!s||!r)return!1;let a=r._id.toHexString();if((await n.find({members:{[a]:"manage"}}).toArray()).length>=100)return!1;let o=new y,{acknowledged:d}=await n.insertOne({completed:[],creation:Date.now(),members:{[a]:"manage"},gems:{[a]:10},threads:[],title:t,_id:o});return!(!d||!await k(e,{$push:{stories:o}}))}async function ge(e,t){if(t.length!==24)return!1;let[n,s]=await Promise.all([O,p(e)]);if(!n||!s)return!1;let r=s._id.toHexString(),a=await n.findOne({_id:y.createFromHexString(t)});if(!a)return!1;let i=a.members[r];return i===void 0||i=="none"?!1:{id:t,activeThreadCount:a.threads.length,completedThreadCount:a.completed.length,completableThreadCount:a.threads.filter(o=>o.sentences.length>=20).length,gems:a.gems[r]||0,title:a.title,level:i}}async function pe(e,t,n){if(n.length<20||n.length>=1e3||t.length!==24)return!1;let[s,r]=await Promise.all([O,p(e)]);if(!r||!s)return!1;let a=y.createFromHexString(t),i=r._id.toHexString(),o=await s.findOne({_id:a});if(!o)return!1;let d=o.members[i],l=o.gems[i];if(d!="manage"&&d!="write"||l===void 0||l<10)return!1;let{acknowledged:S}=await s.updateOne({_id:a},{$push:{threads:{id:I(),creation:Date.now(),sentences:[{id:I(),from:i,content:n,username:r.username,creation:Date.now()}]}},$set:{[`gems.${i}`]:l-10}});return S?{level:d,id:t,activeThreadCount:o.threads.length+1,completableThreadCount:o.threads.filter(f=>f.sentences.length>=20).length,completedThreadCount:o.completed.length,gems:l-10,title:o.title}:!1}async function we(e,t,n){if(t.length!==24)return{type:"ignore"};let[s,r]=await Promise.all([O,p(e)]);if(!s||!r)return{type:"ignore"};let a=r._id.toHexString(),i=await s.findOne({_id:y.createFromHexString(t)});if(!i)return{type:"ignore"};let o=i.members[a];if(o===void 0||o=="none"||o=="view")return{type:"ignore"};let d=Object.entries(i.members).filter(([,m])=>m=="manage"||m=="write").map(([m])=>m),l=Math.min(Math.ceil(d.length/2),5),S=i.threads.map(m=>{let w=1/0;for(let g=m.sentences.length-1;g>=0;g--)if(m.sentences[g].from==a){w=m.sentences.length-g;break}return{thread:m,distance:w}});if(S.length==0)return{type:"need-more-threads"};let f=S.filter(({distance:m})=>m>=l);if(f.length==0)return{type:"not-long-enough",minimumDistance:l,distanceLeft:l-Math.max(...S.map(m=>m.distance))};if(n){if(S.filter(w=>w.thread.sentences.length>=20).length==0)return{type:"need-more-completed",message:"No threads have more than 20 messages yet."};if(S.length==1)return{type:"need-more-completed",message:"Two threads need to exist before one can be completed."};if(f=f.filter(w=>w.thread.sentences.length>=20),f.length==0)return{type:"need-more-completed",message:"Even though a thread has 20 messages on it, you've commented on it too recently to be allowed to complete it."}}let u=f[Math.floor(f.length*Math.random())].thread;return{type:"ok",sentence:u.sentences[u.sentences.length-1],completability:u.sentences.length>=20?(i.gems[a]||0)>=10?"yes":"more-gems":"no"}}async function ye(e,t,n,s,r){if(t.length!==24)return 0;let[a,i]=await Promise.all([O,p(e)]);if(!a||!i)return 0;let o=i._id.toHexString(),d=y.createFromHexString(t),l=await a.findOne({_id:d});if(!l)return 0;let S=l.members[o];if(S===void 0||S=="none")return 0;let f=x=>x.id==n,u=l.threads.findIndex(x=>x.sentences.find(f));if(u==-1)return 0;let m=l.threads[u];if(!m)return 0;if(m.sentences[m.sentences.length-1].id!=n)return 1;let g={id:I(),from:o,username:i.username,content:s,creation:Date.now()},h;if(r){let x=l.gems[o];if(x===void 0||x<10||l.threads.length<=1)return 0;m.sentences.push(g),{acknowledged:h}=await a.updateOne({_id:d},{$pull:{threads:{id:m.id}},$push:{completed:m},$set:{[`gems.${o}`]:(l.gems[o]||0)-10}})}else({acknowledged:h}=await a.updateOne({_id:d},{$push:{[`threads.${u}.sentences`]:g},$set:{[`gems.${o}`]:(l.gems[o]||0)+1}}));return h?{type:2,gems:(l.gems[o]||0)+1}:0}async function Se(e,t,n){if(!n||t.length!==24)return!1;let[s,r]=await Promise.all([O,p(e)]);if(!r||!s)return!1;let a=y.createFromHexString(t),i=r._id.toHexString(),o=await s.findOne({_id:a});if(!o||o.members[i]!="manage")return!1;let{acknowledged:l}=await s.updateOne({_id:a},{$set:{title:n.slice(0,100)}});return l}async function z(e){var s;let t=(s=await R)==null?void 0:s.find({_id:{$in:Object.keys(e).filter(r=>r.length===24).map(r=>y.createFromHexString(r))}});if(!t)return Object.create(null);let n=await t.toArray();return Object.fromEntries(n.map(({_id:r,username:a})=>[a,e[r.toHexString()]]).filter(r=>r[1]))}async function be(e){var r;let t=Object.create(null);for(let a in e)t[a.toLowerCase()]=e[a];let n=(r=await R)==null?void 0:r.find({username:{$in:Object.keys(t).map(a=>new RegExp(`^${a}$`,"i"))}});if(!n)return{};let s=await n.toArray();return Object.fromEntries(s.map(({_id:a,username:i})=>[a.toHexString(),t[i.toLowerCase()]]).filter(a=>a[1]&&a[1]!="none"))}async function ve(e,t,n){if(e.length!=24)return;let[s,r]=await Promise.all([O,R]);if(!s||!r)return;for(let o in t)n[o]===void 0&&(n[o]=10);let a,i=y.createFromHexString(e);return{acknowledged:a}=await r.updateMany({},{$pull:{stories:i}}),!a||({acknowledged:a}=await r.updateMany({_id:{$in:Object.keys(t).filter(o=>o.length===24).filter(o=>t[o]!=="none").map(o=>y.createFromHexString(o))}},{$push:{stories:i}}),!a)?!1:({acknowledged:a}=await s.updateOne({_id:y.createFromHexString(e)},{$set:{members:t,gems:n}}),a)}async function xe(e,t){if(e.length!==24||t.length!==24)return;let n=await O;if(!n)return;let{members:s}=await n.findOne({_id:y.createFromHexString(e)})||{};s&&(delete s[t],await n.updateOne({_id:y.createFromHexString(e)},{$set:{members:s}}))}async function Oe(e,t,n,s){var S;let r=await H(e,t);if(r.permission=="none")return;let a=Date.now()-{day:24*60*60*1e3,week:7*24*60*60*1e3,all:Date.now()}[n],i=Object.create(null),o=Object.create(null),d,l=0;if(s=="contributable"){let f=Object.entries(r.members).filter(([,h])=>h=="manage"||h=="write").map(([h])=>h),u=Math.min(Math.ceil(f.length/2),5),m=Object.create(null);for(let h of f)m[h]=r.threads.length;for(let h of r.threads){let x=Object.create(null);for(let{from:P}of u==1?h.sentences:h.sentences.slice(-u+1))x[P]||(m[P]-=1,x[P]=!0)}let w=await b("accounts");if(!w)return;let g=await w.find({_id:{$in:Object.keys(m).map(h=>y.createFromHexString(h))}}).map(h=>({id:h._id,username:h.username})).toArray();for(let h in m){let x=m[h],P=(S=g.find(_e=>_e.id.equals(h)))==null?void 0:S.username;P&&(i[P]=x)}}else if(s=="contributions"){let f=r.threads.concat(r.completed).flatMap(u=>u.sentences).filter(u=>u.creation>=a);for(let{username:u,creation:m}of f)u in i?i[u]++:i[u]=1,u in o?o[u]=Math.max(o[u],m):o[u]=m;l=f.length}else if(s=="threads"){let f=r.threads.map(u=>({...u,completed:!1})).concat(r.completed.map(u=>({...u,completed:!0}))).filter(u=>u.creation>=a);d=[];for(let{creation:u,sentences:m,completed:w}of f){let g=m[0].username;g in i?i[g]++:i[g]=1,g in o?o[g]=Math.max(o[g],u):o[g]=u,w||d.push(m.length)}l=f.length,d.sort((u,m)=>m-u)}return{period:n,total:l,type:s,messageCounts:d,contributions:Object.entries(i).sort(([f,u],[m,w])=>w-u),last:Object.entries(o).sort(([f,u],[m,w])=>w-u)}}async function c(e,t){let{status:n,account:s}=await C(t);if(n===2){let r=s.creation+9e5;return(s.verified||!s.verified&&r>Date.now())&&(e.emit("account:update:session",s.session),e.emit("account:update:username",s.username)),s.verified?e.emit("account:needs-verification",!1):e.emit("account:needs-verification",r-Date.now()),e.data.oldSession&&e.leave(`session:${e.data.oldSession}`),e.join(`session:${e.data.oldSession=t}`),s}else return e.emit("account:update:session",""),e.emit("account:update:username",""),e.emit("account:needs-verification",!1),e.data.oldSession&&e.leave(`session:${e.data.oldSession}`),!1}var Te="Your username should only contain letters, numbers, and underscores, and should be 6 to 20 characters long.",Ue="Your password should contain a letter and number and be at least 8 characters long.",Y={"account:check-session"(e){c(this,e)},async"account:create"(e,t,n){let{status:s,account:r}=await V(e,t,n);s===2?(await c(this,r.session),this.emit("account:done:verify")):this.emit("error",{5:"Your email address is invalid. Make sure it is formatted properly and can receive emails.",4:Ue,3:Te,8:`${n} is already registered with another account.`,1:"An unknown issue occurred. Try again later.",0:"This instance of zSnout can't log in users.",7:`@${e} is already registered with another account.`}[s])},async"account:login"(e,t){let{status:n,account:s}=await Q(e,t);n===3?(await c(this,s.session),this.emit("account:done:verify")):this.emit("error",{0:"Your username or password is incorrect.",1:"This instance of zSnout can't log in users.",2:"Your username or password is incorrect."}[n])},async"account:reset-session"(e,t){let n=Fe();await _(e,{session:n});let s=this.to(`session:${e}`);s.emit("account:update:session",""),s.emit("account:update:username",""),t&&this.emit("account:update:session",this.data.oldSession=n),this.emit("account:done:reset-session")},async"account:update:username"(e,t){if(await c(this,e)){let n=await ee(e,t);n===2?(this.to(`session:${e}`).emit("account:update:username",t),this.emit("account:update:username",t),this.emit("account:done:update:username")):this.emit("error",{3:Te,7:`@${t} is already registered with another account.`,0:"This server cannot change usernames.",1:"An unknown error occurred."}[n])}},async"account:update:password"(e,t,n){if(await c(this,e)){let s=await te(e,t,n);s===2?this.emit("account:done:update:password"):this.emit("error",{4:Ue,6:"Your old password was incorrect.",0:"This server cannot change usernames.",1:"An unknown error occurred."}[s])}},async"account:verify"(e){let{status:t,account:n}=await X(e);t===2?(await c(this,n.session),this.emit("account:done:verify")):this.emit("error",{0:"The provided verification code is invalid.",1:"This instance of zSnout can't verify accounts."}[t])},async"blog:request:will-notify"(e){var t;await c(this,e)&&this.emit("blog:update:will-notify",((t=await p(e))==null?void 0:t.willNotifyForBlog)||!1)},async"blog:update:will-notify"(e,t){await c(this,e)&&(await _(e,{willNotifyForBlog:t}),this.emit("blog:update:will-notify",t),this.to(`session-${e}`).emit("blog:update:will-notify",t),this.emit("blog:done:update:will-notify"))},async"bookmarks:request"(e){var t;if(await c(this,e)){let n=(t=await p(e))==null?void 0:t.bookmarks;n&&this.emit("bookmarks:list",n)}},async"bookmarks:update"(e,t){await c(this,e)&&await _(e,{bookmarks:t})&&t&&this.to(`session:${e}`).emit("bookmarks:list",t)},async"chat:create"(e,t){await c(this,e)&&await se(e,t)&&this.emit("chat:index",await q(e))},async"chat:leave"(e,t){if(t.length!==24)return;let n=await c(this,e);n&&await k(e,{$pull:{chats:Re.createFromHexString(t)}})&&await ue(t,n._id.toHexString())},async"chat:message:delete"(e,t,n){if(t.length!==24)return;let s=await c(this,e);s&&await ie(s.username,t,n)&&(this.to(`chat-${t}`).emit("chat:message:delete",t,n),this.emit("chat:message:delete",t,n))},async"chat:message:send"(e,t,n){if(!n)return;let s=await c(this,e);if(!s)return;let{permission:r}=await M(e,t);if(r==="manage"||r==="comment"){let a=await re(t,s.username,n);if(!a)return;this.to(`chat-${t}`).emit("chat:message:update",t,a),this.emit("chat:message:update",t,a)}},async"chat:message:update"(e,t,n,s){if(t.length!==24)return;let r=await c(this,e);if(!r)return;let a=await me(r.username,t,n,s);a&&this.to(`chat-${t}`).emit("chat:message:update",t,a)},async"chat:request:index"(e){await c(this,e)&&this.emit("chat:index",await q(e))},async"chat:request:members"(e,t){if(await c(this,e)){let{members:n,permission:s}=await M(e,t);if(this.emit("chat:permission",t,s),s!=="manage")return;this.emit("chat:update:members",t,await E(n))}},async"chat:update:members"(e,t,n){let s=await c(this,e);if(!s)return;let{permission:r}=await M(e,t);if(this.emit("chat:permission",t,r),r!=="manage"||n[s.username]!=="manage")return;let a=await oe(n);a[s._id.toHexString()]==="manage"&&(this.emit("chat:update:members",t,await E(a)),await ce(t,a))},async"chat:update:title"(e,t,n){if(this.rooms.has(`chat-${t}`)||await c(this,e)){let{permission:s}=await M(e,t);s==="manage"&&await ae(t,n)&&this.to(`chat-${t}`).emit("chat:update:title",t,n)}},async"chat:watch:start"(e,t){if(await c(this,e)){let{title:n,messages:s,permission:r}=await M(e,t);if(this.emit("chat:permission",t,r),r==="none")return;this.join(`chat-${t}`),this.emit("chat:message:list",t,s),this.emit("chat:update:title",t,n)}},async"chat:watch:stop"(e){this.leave(`chat-${e}`)},async"notes:create"(e,t){await c(this,e)?(await le(e,t),this.emit("notes:index",await B(e))):this.emit("notes:index",[])},async"notes:request:details"(e,t){if(await c(this,e)){let{doesOwn:n,note:s}=await N(e,t);n&&this.emit("notes:details",{id:t,title:s.title})}},async"notes:request:index"(e){await c(this,e)?this.emit("notes:index",await B(e)):this.emit("notes:index",[])},async"notes:request:note"(e,t){if(await c(this,e)){let{doesOwn:n,note:s}=await N(e,t);n?this.emit("notes:note",t,s.contents):this.emit("notes:note",t,!1)}},async"notes:update:note"(e,t,n){if(await c(this,e)){let{doesOwn:s}=await N(e,t);s&&(de(t,n),this.to(`session:${e}`).emit("notes:note",t,n))}},async"notes:update:title"(e,t,n){if(await c(this,e)){let{doesOwn:s}=await N(e,t);s&&(await fe(t,n),this.to(`session:${e}`).emit("notes:details",{id:t,title:n}))}},async"story:create"(e,t){await c(this,e)&&await he(e,t)&&this.emit("story:index",await Z(e))},async"story:create:thread"(e,t,n){if(await c(this,e)){let s=await pe(e,t,n);s&&(this.emit("story:details",s),this.emit("story:update:permission",t,s.level),this.emit("story:update:gems",t,s.gems))}},async"story:leave"(e,t){let n=await c(this,e);n&&await xe(t,n._id.toHexString())},async"story:request:completed"(e,t){if(await c(this,e)){let n=await H(e,t),s=r=>r.content;n&&n.permission!=="none"?(this.emit("story:completed",t,n.completed.map(r=>({first:r.sentences[0].content,content:r.sentences.map(s).join(" ")}))),this.emit("story:update:permission",t,n.permission),this.emit("story:update:gems",t,n.gems)):this.emit("story:update:permission",t,"none")}},async"story:request:contributables"(e,t){await c(this,e)},async"story:request:details"(e,t){if(await c(this,e)){let n=await ge(e,t);n?(this.emit("story:details",n),this.emit("story:update:permission",t,n.level),this.emit("story:update:gems",t,n.gems)):this.emit("story:update:permission",t,"none")}},async"story:request:index"(e){await c(this,e)&&this.emit("story:index",await Z(e))},async"story:request:members"(e,t){if(await c(this,e)){let{members:n,permission:s}=await H(e,t);if(s!=="manage")return;this.emit("story:update:members",t,await z(n))}},async"story:request:stats"(e,t,n,s){if(await c(this,e)){let r=await Oe(e,t,n,s);r&&this.emit("story:stats",t,r)}},async"story:request:thread"(e,t,n){if(!await c(this,e))return;let s=await we(e,t,n);switch(s.type){case"ignore":return;case"need-more-threads":this.emit("story:fail",t),this.emit("error","There aren't any threads that you can post to.");return;case"need-more-completed":this.emit("story:fail",t),this.emit("error",s.message);return;case"not-long-enough":this.emit("story:fail",t),this.emit("error",`At least ${s.minimumDistance} sentence${s.minimumDistance==1?"":"s"} need to be written before you can contribute again; ask ${s.distanceLeft} more user${s.distanceLeft==1?"":"s"} to max out their contributions.`);return;case"ok":this.emit("story:thread",t,s.sentence,s.completability)}},async"story:update:members"(e,t,n){let s=await c(this,e);if(!s)return;let{permission:r,userGems:a}=await H(e,t);if(this.emit("story:update:permission",t,r),r!=="manage"||n[s.username]!=="manage")return;let i=await be(n);i[s._id.toHexString()]==="manage"&&(this.emit("story:update:members",t,await z(i)),await ve(t,i,{...a}))},async"story:update:thread"(e,t,n,s,r){if(await c(this,e)){let a=await ye(e,t,n,s,r);if(a===0)return;if(a===1){this.emit("story:fail",t),this.emit("error","Somebody updated this thread before you! You can always press 'Add to a Thread' again.");return}this.emit("story:done:update:thread",t),this.emit("story:update:gems",t,a.gems)}},async"story:update:title"(e,t,n){await c(this,e)&&await Se(e,t,n)},async"youtube:request"(e){try{let t=await Ee.getInfo(`https://youtube.com/watch?v=${e}`),n=t.videoDetails,s=t.formats;n.thumbnails.sort((a,i)=>i.height-a.height);let{url:r}=n.thumbnails.sort((a,i)=>i.width-a.width)[0];this.emit("youtube:results",e,{title:n.title,description:n.description,isLive:n.isLiveContent,channel:n.ownerChannelName,thumbnail:r,formats:s.map(({url:a,hasAudio:i,hasVideo:o,qualityLabel:d,audioQuality:l})=>({url:a,hasAudio:i,hasVideo:o,quality:d,audio:l}))})}catch{}}};Object.setPrototypeOf(Y,null);function Be(e){new qe(e).on("connection",n=>{for(let s in Y)n.on(s,Y[s].bind(n))})}function Ct(){let e=new je;Be(e);let t=+(process.env.PORT||3e3);e.listen(Number.isSafeInteger(t)?t:3e3)}export{Be as makeIO,Ct as start};
