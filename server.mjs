import{ObjectId as Fe}from"mongodb";import{randomUUID as qe}from"node:crypto";import{Server as je}from"node:http";import{Server as Ee}from"socket.io";import Ie from"ytdl-core";import{compare as De,hash as He}from"bcrypt";import{randomUUID as Q}from"node:crypto";import{MongoClient as Ce}from"mongodb";var j=process.env.ZSNOUT_DATABASE?new Ce(process.env.ZSNOUT_DATABASE,{serverApi:"1"}).connect().then(e=>(e.on("error",async()=>{await e.close(),await e.connect()}),e)).catch(e=>(console.log(e),void 0)):Promise.resolve((console.log("no database available"),void 0)),Me=j.then(e=>e==null?void 0:e.db("zsnout")).catch(e=>(console.log(e),void 0)),Ye=j.then(e=>!!e)??Promise.resolve(!1);async function g(e){var t;return(t=await Me)==null?void 0:t.collection(e)}process.on("beforeExit",()=>{j.then(e=>e==null?void 0:e.close())});g("accounts").then(e=>{!e||(e.updateMany({invites:{$exists:!1}},{$set:{invites:[]}}),e.updateMany({stories:{$exists:!1}},{$set:{stories:[]}}))}).catch(()=>{});import{createTransport as Ne}from"nodemailer";var ke={host:process.env.ZSNOUT_MAIL_HOST,port:+(process.env.ZSNOUT_MAIL_PORT||587),secure:process.env.ZSNOUT_MAIL_PORT==="465",auth:{user:process.env.ZSNOUT_MAIL_USER,pass:process.env.ZSNOUT_MAIL_PASSWORD}},Je=!!(process.env.ZSNOUT_MAIL_HOST&&process.env.ZSNOUT_MAIL_USER&&process.env.ZSNOUT_MAIL_PASSWORD),U=Ne(ke);function K(e){return new Promise(t=>{U==null||U.sendMail({...e,from:process.env.ZSNOUT_MAIL_FROM},(n,s)=>{n?(console.log(n),t(void 0)):t(s)})})}process.on("beforeExit",()=>U==null?void 0:U.close());var P;(s=>{function e(a){return a.length>=5&&a.length<=20&&/^[A-Za-z_][A-Za-z0-9_]+$/.test(a)&&!/zsnout/i.test(a)}s.Username=e;function t(a){return a.length>=8&&/(?![\d_])\w/.test(a)&&/\d/.test(a)}s.Password=t;function n(a){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)}s.Email=n})(P||={});function X(e){return He(e,10)}function V(e,t){return De(e,t)}var x=g("accounts");async function ee(e,t){let n=await x;if(!n)return{status:_.NoServer};let s=await n.findOne({username:e});return s?await V(t,s.password)?{status:_.Success,account:s}:{status:_.BadPassword}:{status:_.NoUser}}var _=(a=>(a[a.BadPassword=0]="BadPassword",a[a.NoServer=1]="NoServer",a[a.NoUser=2]="NoUser",a[a.Success=3]="Success",a))(_||{});async function C(e){let t=await x;if(!t)return{status:$.NoServer};let n=await t.findOne({session:e});return n?{status:$.Success,account:n}:{status:$.Failure}}var $=(s=>(s[s.Failure=0]="Failure",s[s.NoServer=1]="NoServer",s[s.Success=2]="Success",s))($||{});async function te(e,t,n){let s=await x;if(!s)return{status:p.NoServer};if(!P.Username(e))return{status:p.BadUsername};if(!P.Password(t))return{status:p.BadPassword};if(!P.Email(n))return{status:p.BadEmail};if(await s.findOne({username:e}))return{status:p.UsernameTaken};if(await s.findOne({email:n}))return{status:p.EmailTaken};let a={username:e,password:await X(t),email:n,creation:Date.now(),session:Q(),verified:!1,verifyCode:Q(),bookmarks:[],notes:[],chats:[],invites:[],willNotifyForBlog:!0};return(await s.insertOne(a)).acknowledged?await K({to:n,subject:"Verify your zSnout account",text:`Hey @${e}! Verify your new zSnout account by opening this link: https://zsnout.com/verify-account?code=${a.verifyCode}.`})?{status:p.Success,account:a}:(await s.deleteOne({session:a.session}),{status:p.BadEmail}):{status:p.Failure}}var p=(c=>(c[c.NoServer=0]="NoServer",c[c.Failure=1]="Failure",c[c.Success=2]="Success",c[c.BadUsername=3]="BadUsername",c[c.BadPassword=4]="BadPassword",c[c.BadEmail=5]="BadEmail",c[c.IncorrectPassword=6]="IncorrectPassword",c[c.UsernameTaken=7]="UsernameTaken",c[c.EmailTaken=8]="EmailTaken",c))(p||{});async function ne(e){let t=await x;if(!t)return{status:k.NoServer};let n=await t.findOneAndUpdate({verifyCode:e},{$set:{verified:!0}});return n.value?{status:k.Success,account:n.value}:{status:k.NoAccount}}var k=(s=>(s[s.NoAccount=0]="NoAccount",s[s.NoServer=1]="NoServer",s[s.Success=2]="Success",s))(k||{});async function Re(){let e=await x;await(e==null?void 0:e.deleteMany({verified:!1,creation:{$lte:Date.now()-15*60*1e3}}))}async function l(e){var t;return await((t=await x)==null?void 0:t.findOne({session:e}))||void 0}async function D(e,t){var n,s;return((s=await((n=await x)==null?void 0:n.updateOne({session:e},t)))==null?void 0:s.acknowledged)||!1}async function O(e,t){return D(e,{$set:t})}async function se(e,t){let n=await x;return n?P.Username(t)?await n.findOne({username:t})?7:await O(e,{username:t})?2:1:3:0}async function re(e,t,n){if(!await x)return 0;if(!P.Password(n))return 4;let a=await l(e);return a?await V(t,a.password)?await O(e,{password:await X(n)})?2:1:6:1}setInterval(Re,5*60*1e3);import{ObjectId as h}from"mongodb";import{randomUUID as ae}from"node:crypto";var E=g("accounts"),b=g("chats");async function I(e){let[t,n]=await Promise.all([b,l(e)]);if(!t||!n)return[];let s=n._id.toHexString();return(await t.find({_id:{$in:n.chats}}).toArray()).map(r=>({id:r._id.toHexString(),level:r.members[s],title:r.title})).filter(r=>r.level&&r.level!=="none")}async function ie(e,t){let[n,s]=await Promise.all([b,l(e)]);if(!n||!s)return!1;let a=new h;if(!await O(e,{chats:s.chats.concat(a)}))return!1;let{acknowledged:r}=await n.insertOne({_id:a,creation:Date.now(),members:{[s._id.toHexString()]:"manage"},messages:[{content:`Welcome to your new chat, ${s.username}!`,from:"zSnout",id:ae(),timestamp:Date.now()}],title:t.slice(0,100),defaultLevel:"none"});return r}async function M(e,t){if(t.length!==24)return{permission:"none"};let[n,s]=await Promise.all([b,l(e)]);if(!n||!s)return{permission:"none"};let a=s._id.toHexString(),r=await n.findOne({_id:h.createFromHexString(t)});if(!r)return{permission:"none"};let i=r.members[a]||r.defaultLevel;return!i||i==="none"?{permission:"none"}:{permission:i,messages:r.messages,title:r.title,members:r.members}}async function oe(e,t){if(e.length!==24)return!1;let n=await b;if(!n)return!1;let{acknowledged:s}=await n.updateOne({_id:h.createFromHexString(e)},{$set:{title:t.slice(0,100)}});return s}async function ce(e,t,n){if(e.length!==24)return!1;let s=await b;if(!s)return!1;let a={content:n.slice(0,1e3),id:ae(),timestamp:Date.now(),from:t},{acknowledged:r}=await s.updateOne({_id:h.createFromHexString(e)},{$push:{messages:a}});return r?a:!1}async function ue(e,t,n){if(t.length!==24)return!1;let s=await b;if(!s)return!1;let{acknowledged:a}=await s.updateOne({_id:h.createFromHexString(t)},{$pull:{messages:{id:n,from:e}}});return a}async function B(e){var s;let t=(s=await E)==null?void 0:s.find({_id:{$in:Object.keys(e).filter(a=>a.length===24).map(a=>h.createFromHexString(a))}});if(!t)return Object.create(null);let n=await t.toArray();return Object.fromEntries(n.map(({_id:a,username:r})=>[r,e[a.toHexString()]]).filter(a=>a[1]))}async function me(e){var a;let t=Object.create(null);for(let r in e)t[r.toLowerCase()]=e[r];let n=(a=await E)==null?void 0:a.find({username:{$in:Object.keys(t).map(r=>new RegExp(`^${r}$`,"i"))}});if(!n)return{};let s=await n.toArray();return Object.fromEntries(s.map(({_id:r,username:i})=>[r.toHexString(),t[i.toLowerCase()]]).filter(r=>r[1]))}async function le(e,t){if(e.length!==24)return!1;for(let i in t)if(i.length!==24)return!1;let[n,s]=await Promise.all([E,b]);if(!n||!s)return!1;let a=h.createFromHexString(e),r;return{acknowledged:r}=await n.updateMany({},{$pull:{chats:a}}),!r||({acknowledged:r}=await n.updateMany({_id:{$in:Object.keys(t).filter(i=>i.length===24).filter(i=>t[i]!=="none").map(i=>h.createFromHexString(i))}},{$push:{chats:a}}),!r)?!1:({acknowledged:r}=await s.updateOne({_id:a},{$set:{members:t}}),r)}async function de(e,t){if(e.length!==24||t.length!==24)return;let n=await b;if(!n)return;let{members:s}=await n.findOne({_id:h.createFromHexString(e)})||{};!s||(delete s[t],await n.updateOne({_id:h.createFromHexString(e)},{$set:{members:s}}))}async function fe(e,t,n,s){if(t.length!==24)return;let a=await b;if(!a)return;let{messages:r}=await a.findOne({_id:h.createFromHexString(t)})||{};if(!r)return;let i=r.find(({id:m})=>m===n);if(!i||i.from!==e)return;i.content=s;let{acknowledged:o}=await a.updateOne({_id:h.createFromHexString(t)},{$set:{messages:r}});if(!!o)return i}import{ObjectId as A}from"bson";var Le=g("accounts"),H=g("notes");async function Ae(e,t){let n=await Le;!n||await n.updateOne({_id:t},{$push:{notes:e}})}async function Z(e){let{status:t,account:n}=await C(e);if(t===0)return[];if(t===1)return[];let s=await H;return s?(await s.find({_id:{$in:n.notes}}).toArray()).map(({_id:r,title:i,contents:o})=>({id:r.toHexString(),title:i,desc:o.slice(0,80).replaceAll(`
`," ")})):[]}async function ge(e,t){let{status:n,account:s}=await C(e);if(n===0||n===1)return;let a=await H;if(!a||s.notes.length>=100)return;let r={_id:new A,contents:"<p>This is your new note!</p>",creation:Date.now(),owner:s._id,title:t};await Promise.all([a.insertOne(r),Ae(r._id,s._id)])}async function R(e,t){if(t.length!==24)return{doesOwn:!1};let{status:n,account:s}=await C(e);if(n===0)return{doesOwn:!1};if(n===1)return{doesOwn:!1};let a=await H;if(!a)return{doesOwn:!1};let r=await a.findOne({_id:A.createFromHexString(t),owner:s._id});return r?{doesOwn:!0,note:r}:{doesOwn:!1}}async function he(e,t){if(e.length!==24||t.length>1e4)return;let n=await H;!n||await n.updateOne({_id:A.createFromHexString(e)},{$set:{contents:t}})}async function pe(e,t){if(e.length!==24)return;let n=await H;!n||await n.updateOne({_id:A.createFromHexString(e)},{$set:{title:t.slice(0,100)}})}import{ObjectId as d}from"mongodb";import{randomUUID as z}from"node:crypto";var F=g("accounts"),S=g("stories");async function L(e,t){let[n,s]=await Promise.all([S,l(e)]);if(!n||!s||t.length!==24)return{permission:"none"};let a=s._id.toHexString(),r=await n.findOne({_id:d.createFromHexString(t)});if(!r)return{permission:"none"};let i=r.members[a];if(!i||i==="none")return{permission:"none"};let o=r.gems[a]||0;return{permission:i,gems:o,title:r.title,members:r.members,threads:r.threads,completed:r.completed,userGems:r.gems}}async function Y(e){let[t,n]=await Promise.all([S,l(e)]);if(!t||!n)return[];let s=n._id.toHexString();return(await t.find({_id:{$in:n.stories}}).toArray()).map(r=>({id:r._id.toHexString(),title:r.title,activeThreadCount:r.threads.length,completedThreadCount:r.completed.length,level:r.members[s]})).filter(r=>r.level&&r.level!=="none")}async function we(e,t){let[n,s,a]=await Promise.all([S,F,l(e)]);if(!n||!s||!a)return!1;let r=a._id.toHexString();if((await n.find({members:{[r]:"manage"}}).toArray()).length>=100)return!1;let o=new d,{acknowledged:m}=await n.insertOne({completed:[],creation:Date.now(),members:{[r]:"manage"},gems:{[r]:10},threads:[],title:t,_id:o});return!(!m||!await D(e,{$push:{stories:o}}))}async function ye(e,t){if(t.length!==24)return!1;let[n,s]=await Promise.all([S,l(e)]);if(!n||!s)return!1;let a=s._id.toHexString(),r=await n.findOne({_id:d.createFromHexString(t)});if(!r)return!1;let i=r.members[a];return i===void 0||i=="none"?!1:{id:t,activeThreadCount:r.threads.length,completedThreadCount:r.completed.length,completableThreadCount:r.threads.filter(o=>o.sentences.length>20).length,gems:r.gems[a]||0,title:r.title,level:i}}async function Se(e,t,n){if(n.length<20||n.length>=1e3||t.length!==24)return!1;let[s,a]=await Promise.all([S,l(e)]);if(!a||!s)return!1;let r=d.createFromHexString(t),i=a._id.toHexString(),o=await s.findOne({_id:r});if(!o)return!1;let m=o.members[i],c=o.gems[i];if(m!="manage"&&m!="write"||c===void 0||c<10)return!1;let{acknowledged:w}=await s.updateOne({_id:r},{$push:{threads:{id:z(),creation:Date.now(),sentences:[{id:z(),from:i,content:n,username:a.username,creation:Date.now()}]}},$set:{[`gems.${i}`]:c-10}});return w?{level:m,id:t,activeThreadCount:o.threads.length+1,completableThreadCount:o.threads.filter(y=>y.sentences.length>20).length,completedThreadCount:o.completed.length,gems:c-10,title:o.title}:!1}async function ve(e,t,n){var y;if(t.length!==24)return 0;let[s,a]=await Promise.all([S,l(e)]);if(!s||!a)return 0;let r=a._id.toHexString(),i=await s.findOne({_id:d.createFromHexString(t)});if(!i)return 0;let o=i.members[r];if(o===void 0||o=="none")return 0;let m=Math.min(Math.ceil(Object.keys(i.members).length/2),5),c=i.threads.map(f=>{let v=1/0;for(let N=f.sentences.length-1;N>=0;N--)if(f.sentences[N].from==r){v=f.sentences.length-N;break}return{thread:f,distance:v}}).filter(({distance:f})=>f>=m);if(n&&(c=c.filter(f=>f.thread.sentences.length>20),c.length<=1))return 1;let w=(y=c[Math.floor(c.length*Math.random())])==null?void 0:y.thread;return w?w.sentences[w.sentences.length-1]:1}async function xe(e,t,n,s,a){if(t.length!==24)return 0;let[r,i]=await Promise.all([S,l(e)]);if(!r||!i)return 0;let o=i._id.toHexString(),m=d.createFromHexString(t),c=await r.findOne({_id:m});if(!c)return 0;let w=c.members[o];if(w===void 0||w=="none")return 0;let y=T=>T.id==n,f=c.threads.findIndex(T=>T.sentences.find(y));if(f==-1)return 0;let v=c.threads[f];if(!v)return 0;if(v.sentences[v.sentences.length-1].id!=n)return 1;let J={id:z(),from:o,username:i.username,content:s,creation:Date.now()},q;if(a){let T=c.gems[o];if(T===void 0||T<10||c.threads.length<=1)return 0;v.sentences.push(J),{acknowledged:q}=await r.updateOne({_id:m},{$pull:{threads:{id:v.id}},$push:{completed:v},$set:{[`gems.${o}`]:(c.gems[o]||0)-10}})}else({acknowledged:q}=await r.updateOne({_id:m},{$push:{[`threads.${f}.sentences`]:J},$set:{[`gems.${o}`]:(c.gems[o]||0)+1}}));return q?{type:2,gems:(c.gems[o]||0)+1}:0}async function be(e,t,n){if(!n||t.length!==24)return!1;let[s,a]=await Promise.all([S,l(e)]);if(!a||!s)return!1;let r=d.createFromHexString(t),i=a._id.toHexString(),o=await s.findOne({_id:r});if(!o||o.members[i]!="manage")return!1;let{acknowledged:c}=await s.updateOne({_id:r},{$set:{title:n.slice(0,100)}});return c}async function W(e){var s;let t=(s=await F)==null?void 0:s.find({_id:{$in:Object.keys(e).filter(a=>a.length===24).map(a=>d.createFromHexString(a))}});if(!t)return Object.create(null);let n=await t.toArray();return Object.fromEntries(n.map(({_id:a,username:r})=>[r,e[a.toHexString()]]).filter(a=>a[1]))}async function Oe(e){var a;let t=Object.create(null);for(let r in e)t[r.toLowerCase()]=e[r];let n=(a=await F)==null?void 0:a.find({username:{$in:Object.keys(t).map(r=>new RegExp(`^${r}$`,"i"))}});if(!n)return{};let s=await n.toArray();return Object.fromEntries(s.map(({_id:r,username:i})=>[r.toHexString(),t[i.toLowerCase()]]).filter(r=>r[1]&&r[1]!="none"))}async function Te(e,t,n){if(e.length!=24)return;let[s,a]=await Promise.all([S,F]);if(!s||!a)return;for(let o in t)n[o]===void 0&&(n[o]=10);let r,i=d.createFromHexString(e);return{acknowledged:r}=await a.updateMany({},{$pull:{stories:i}}),!r||({acknowledged:r}=await a.updateMany({_id:{$in:Object.keys(t).filter(o=>o.length===24).filter(o=>t[o]!=="none").map(o=>d.createFromHexString(o))}},{$push:{stories:i}}),!r)?!1:({acknowledged:r}=await s.updateOne({_id:d.createFromHexString(e)},{$set:{members:t,gems:n}}),r)}async function Ue(e,t){if(e.length!==24||t.length!==24)return;let n=await S;if(!n)return;let{members:s}=await n.findOne({_id:d.createFromHexString(e)})||{};!s||(delete s[t],await n.updateOne({_id:d.createFromHexString(e)},{$set:{members:s}}))}async function _e(e,t,n){let s=await L(e,t);if(s.permission=="none")return;let a=Date.now()-{day:24*60*60*1e3,week:7*24*60*60*1e3,all:Date.now()}[n],r=s.threads.flatMap(m=>m.sentences).filter(m=>m.creation>=a),i=Object.create(null),o=Object.create(null);for(let{username:m,creation:c}of r)m in i?i[m]++:i[m]=1,m in o?o[m]=Math.max(o[m],c):o[m]=c;return{period:n,contributions:Object.entries(i).sort(([m,c],[w,y])=>y-c),last:Object.entries(o).sort(([m,c],[w,y])=>y-c),total:r.length}}async function u(e,t){let{status:n,account:s}=await C(t);if(n===2){let a=s.creation+9e5;return(s.verified||!s.verified&&a>Date.now())&&(e.emit("account:update:session",s.session),e.emit("account:update:username",s.username)),s.verified?e.emit("account:needs-verification",!1):e.emit("account:needs-verification",a-Date.now()),e.data.oldSession&&e.leave(`session:${e.data.oldSession}`),e.join(`session:${e.data.oldSession=t}`),s}else return e.emit("account:update:session",""),e.emit("account:update:username",""),e.emit("account:needs-verification",!1),e.data.oldSession&&e.leave(`session:${e.data.oldSession}`),!1}var Pe="Your username should only contain letters, numbers, and underscores, and should be 6 to 20 characters long.",$e="Your password should contain a letter and number and be at least 8 characters long.",G={"account:check-session"(e){u(this,e)},async"account:create"(e,t,n){let{status:s,account:a}=await te(e,t,n);s===2?(await u(this,a.session),this.emit("account:done:verify")):this.emit("error",{[5]:"Your email address is invalid. Make sure it is formatted properly and can receive emails.",[4]:$e,[3]:Pe,[8]:`${n} is already registered with another account.`,[1]:"An unknown issue occurred. Try again later.",[0]:"This instance of zSnout can't log in users.",[7]:`@${e} is already registered with another account.`}[s])},async"account:login"(e,t){let{status:n,account:s}=await ee(e,t);n===3?(await u(this,s.session),this.emit("account:done:verify")):this.emit("error",{[0]:"Your username or password is incorrect.",[1]:"This instance of zSnout can't log in users.",[2]:"Your username or password is incorrect."}[n])},async"account:reset-session"(e,t){let n=qe();await O(e,{session:n});let s=this.to(`session:${e}`);s.emit("account:update:session",""),s.emit("account:update:username",""),t&&this.emit("account:update:session",this.data.oldSession=n),this.emit("account:done:reset-session")},async"account:update:username"(e,t){if(await u(this,e)){let n=await se(e,t);n===2?(this.to(`session:${e}`).emit("account:update:username",t),this.emit("account:update:username",t),this.emit("account:done:update:username")):this.emit("error",{[3]:Pe,[7]:`@${t} is already registered with another account.`,[0]:"This server cannot change usernames.",[1]:"An unknown error occurred."}[n])}},async"account:update:password"(e,t,n){if(await u(this,e)){let s=await re(e,t,n);s===2?this.emit("account:done:update:password"):this.emit("error",{[4]:$e,[6]:"Your old password was incorrect.",[0]:"This server cannot change usernames.",[1]:"An unknown error occurred."}[s])}},async"account:verify"(e){let{status:t,account:n}=await ne(e);t===2?(await u(this,n.session),this.emit("account:done:verify")):this.emit("error",{[0]:"The provided verification code is invalid.",[1]:"This instance of zSnout can't verify accounts."}[t])},async"blog:request:will-notify"(e){var t;await u(this,e)&&this.emit("blog:update:will-notify",((t=await l(e))==null?void 0:t.willNotifyForBlog)||!1)},async"blog:update:will-notify"(e,t){await u(this,e)&&(await O(e,{willNotifyForBlog:t}),this.emit("blog:update:will-notify",t),this.to(`session-${e}`).emit("blog:update:will-notify",t),this.emit("blog:done:update:will-notify"))},async"bookmarks:request"(e){var t;if(await u(this,e)){let n=(t=await l(e))==null?void 0:t.bookmarks;n&&this.emit("bookmarks:list",n)}},async"bookmarks:update"(e,t){await u(this,e)&&await O(e,{bookmarks:t})&&t&&this.to(`session:${e}`).emit("bookmarks:list",t)},async"chat:create"(e,t){await u(this,e)&&await ie(e,t)&&this.emit("chat:index",await I(e))},async"chat:leave"(e,t){if(t.length!==24)return;let n=await u(this,e);!n||!await D(e,{$pull:{chats:Fe.createFromHexString(t)}})||await de(t,n._id.toHexString())},async"chat:message:delete"(e,t,n){if(t.length!==24)return;let s=await u(this,e);!s||await ue(s.username,t,n)&&(this.to(`chat-${t}`).emit("chat:message:delete",t,n),this.emit("chat:message:delete",t,n))},async"chat:message:send"(e,t,n){if(!n)return;let s=await u(this,e);if(!s)return;let{permission:a}=await M(e,t);if(a==="manage"||a==="comment"){let r=await ce(t,s.username,n);if(!r)return;this.to(`chat-${t}`).emit("chat:message:update",t,r),this.emit("chat:message:update",t,r)}},async"chat:message:update"(e,t,n,s){if(t.length!==24)return;let a=await u(this,e);if(!a)return;let r=await fe(a.username,t,n,s);r&&this.to(`chat-${t}`).emit("chat:message:update",t,r)},async"chat:request:index"(e){await u(this,e)&&this.emit("chat:index",await I(e))},async"chat:request:members"(e,t){if(await u(this,e)){let{members:n,permission:s}=await M(e,t);if(this.emit("chat:permission",t,s),s!=="manage")return;this.emit("chat:update:members",t,await B(n))}},async"chat:update:members"(e,t,n){let s=await u(this,e);if(!s)return;let{permission:a}=await M(e,t);if(this.emit("chat:permission",t,a),a!=="manage"||n[s.username]!=="manage")return;let r=await me(n);r[s._id.toHexString()]==="manage"&&(this.emit("chat:update:members",t,await B(r)),await le(t,r))},async"chat:update:title"(e,t,n){if(this.rooms.has(`chat-${t}`)||await u(this,e)){let{permission:s}=await M(e,t);s==="manage"&&await oe(t,n)&&this.to(`chat-${t}`).emit("chat:update:title",t,n)}},async"chat:watch:start"(e,t){if(await u(this,e)){let{title:n,messages:s,permission:a}=await M(e,t);if(this.emit("chat:permission",t,a),a==="none")return;this.join(`chat-${t}`),this.emit("chat:message:list",t,s),this.emit("chat:update:title",t,n)}},async"chat:watch:stop"(e){this.leave(`chat-${e}`)},async"notes:create"(e,t){await u(this,e)?(await ge(e,t),this.emit("notes:index",await Z(e))):this.emit("notes:index",[])},async"notes:request:details"(e,t){if(await u(this,e)){let{doesOwn:n,note:s}=await R(e,t);n&&this.emit("notes:details",{id:t,title:s.title})}},async"notes:request:index"(e){await u(this,e)?this.emit("notes:index",await Z(e)):this.emit("notes:index",[])},async"notes:request:note"(e,t){if(await u(this,e)){let{doesOwn:n,note:s}=await R(e,t);n?this.emit("notes:note",t,s.contents):this.emit("notes:note",t,!1)}},async"notes:update:note"(e,t,n){if(await u(this,e)){let{doesOwn:s}=await R(e,t);s&&(he(t,n),this.to(`session:${e}`).emit("notes:note",t,n))}},async"notes:update:title"(e,t,n){if(await u(this,e)){let{doesOwn:s}=await R(e,t);s&&(await pe(t,n),this.to(`session:${e}`).emit("notes:details",{id:t,title:n}))}},async"story:create"(e,t){await u(this,e)&&await we(e,t)&&this.emit("story:index",await Y(e))},async"story:create:thread"(e,t,n){if(await u(this,e)){let s=await Se(e,t,n);s&&(this.emit("story:details",s),this.emit("story:update:permission",t,s.level),this.emit("story:update:gems",t,s.gems))}},async"story:leave"(e,t){let n=await u(this,e);n&&await Ue(t,n._id.toHexString())},async"story:request:completed"(e,t){if(await u(this,e)){let n=await L(e,t),s=a=>a.content;n&&n.permission!=="none"?(this.emit("story:completed",t,n.completed.map(a=>({first:a.sentences[0].content,content:a.sentences.map(s).join(" ")}))),this.emit("story:update:permission",t,n.permission),this.emit("story:update:gems",t,n.gems)):this.emit("story:update:permission",t,"none")}},async"story:request:details"(e,t){if(await u(this,e)){let n=await ye(e,t);n?(this.emit("story:details",n),this.emit("story:update:permission",t,n.level),this.emit("story:update:gems",t,n.gems)):this.emit("story:update:permission",t,"none")}},async"story:request:index"(e){await u(this,e)&&this.emit("story:index",await Y(e))},async"story:request:members"(e,t){if(await u(this,e)){let{members:n,permission:s}=await L(e,t);if(s!=="manage")return;this.emit("story:update:members",t,await W(n))}},async"story:request:stats"(e,t,n){if(await u(this,e)){let s=await _e(e,t,n);s&&this.emit("story:stats",t,s)}},async"story:request:thread"(e,t,n){if(await u(this,e)){let s=await ve(e,t,n);if(s===0)return;if(s===1){this.emit("story:fail",t),this.emit("error","Other users need to contribute to this story's threads before you can add another sentence.");return}this.emit("story:thread",t,s)}},async"story:update:members"(e,t,n){let s=await u(this,e);if(!s)return;let{permission:a,userGems:r}=await L(e,t);if(this.emit("story:update:permission",t,a),a!=="manage"||n[s.username]!=="manage")return;let i=await Oe(n);i[s._id.toHexString()]==="manage"&&(this.emit("story:update:members",t,await W(i)),await Te(t,i,{...r}))},async"story:update:thread"(e,t,n,s,a){if(await u(this,e)){let r=await xe(e,t,n,s,a);if(r===0)return;if(r===1){this.emit("story:fail",t),this.emit("error","Somebody updated this thread before you! You can always press 'Add to a Thread' again.");return}this.emit("story:done:update:thread",t),this.emit("story:update:gems",t,r.gems)}},async"story:update:title"(e,t,n){await u(this,e)&&await be(e,t,n)},async"youtube:request"(e){try{let t=await Ie.getInfo(`https://youtube.com/watch?v=${e}`),n=t.videoDetails,s=t.formats;n.thumbnails.sort((r,i)=>i.height-r.height);let{url:a}=n.thumbnails.sort((r,i)=>i.width-r.width)[0];this.emit("youtube:results",e,{title:n.title,description:n.description,isLive:n.isLiveContent,channel:n.ownerChannelName,thumbnail:a,formats:s.map(({url:r,hasAudio:i,hasVideo:o,qualityLabel:m,audioQuality:c})=>({url:r,hasAudio:i,hasVideo:o,quality:m,audio:c}))})}catch{}}};Object.setPrototypeOf(G,null);function Be(e){new Ee(e).on("connection",n=>{for(let s in G)n.on(s,G[s].bind(n))})}function Ct(){let e=new je;Be(e);let t=+(process.env.PORT||3e3);e.listen(Number.isSafeInteger(t)?t:3e3)}export{Be as makeIO,Ct as start};
