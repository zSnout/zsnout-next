import{ObjectId as dt}from"mongodb";import{randomUUID as wt}from"node:crypto";import{Server as gt}from"node:http";import{Server as pt}from"socket.io";import{getInfo as ht}from"ytdl-core";import{compare as ct,hash as ut}from"bcrypt";import{randomUUID as D}from"node:crypto";import{MongoClient as at}from"mongodb";var U=process.env.ZSNOUT_DATABASE?new at(process.env.ZSNOUT_DATABASE,{serverApi:"1"}).connect().then(t=>(t.on("error",async()=>{await t.close(),await t.connect()}),t)).catch(t=>(console.log(t),void 0)):Promise.resolve((console.log("no database available"),void 0)),it=U.then(t=>t==null?void 0:t.db("zsnout")).catch(t=>(console.log(t),void 0)),Ot=U.then(t=>!!t)??Promise.resolve(!1);async function d(t){var e;return(e=await it)==null?void 0:e.collection(t)}process.on("beforeExit",()=>{U.then(t=>t==null?void 0:t.close())});import{createTransport as rt}from"nodemailer";var ot={host:process.env.ZSNOUT_MAIL_HOST,port:+(process.env.ZSNOUT_MAIL_PORT||587),secure:process.env.ZSNOUT_MAIL_PORT==="465",auth:{user:process.env.ZSNOUT_MAIL_USER,pass:process.env.ZSNOUT_MAIL_PASSWORD}},Tt=!!(process.env.ZSNOUT_MAIL_HOST&&process.env.ZSNOUT_MAIL_USER&&process.env.ZSNOUT_MAIL_PASSWORD),p=rt(ot);function L(t){return new Promise(e=>{p==null||p.sendMail({...t,from:process.env.ZSNOUT_MAIL_FROM},(n,s)=>{n?(console.log(n),e(void 0)):e(s)})})}process.on("beforeExit",()=>p==null?void 0:p.close());var y;(s=>{function t(a){return a.length>=5&&a.length<=20&&/^[A-Za-z_][A-Za-z0-9_]+$/.test(a)&&!/zsnout/i.test(a)}s.Username=t;function e(a){return a.length>=8&&/(?![\d_])\w/.test(a)&&/\d/.test(a)}s.Password=e;function n(a){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)}s.Email=n})(y||={});function H(t){return ut(t,10)}function B(t,e){return ct(t,e)}var m=d("accounts");async function j(t,e){let n=await m;if(!n)return{status:h.NoServer};let s=await n.findOne({username:t});return s?await B(e,s.password)?{status:h.Success,account:s}:{status:h.BadPassword}:{status:h.NoUser}}var h=(a=>(a[a.BadPassword=0]="BadPassword",a[a.NoServer=1]="NoServer",a[a.NoUser=2]="NoUser",a[a.Success=3]="Success",a))(h||{});async function S(t){let e=await m;if(!e)return{status:v.NoServer};let n=await e.findOne({session:t});return n?{status:v.Success,account:n}:{status:v.Failure}}var v=(s=>(s[s.Failure=0]="Failure",s[s.NoServer=1]="NoServer",s[s.Success=2]="Success",s))(v||{});async function Z(t,e,n){let s=await m;if(!s)return{status:f.NoServer};if(!y.Username(t))return{status:f.BadUsername};if(!y.Password(e))return{status:f.BadPassword};if(!y.Email(n))return{status:f.BadEmail};if(await s.findOne({username:t}))return{status:f.UsernameTaken};if(await s.findOne({email:n}))return{status:f.EmailTaken};let a={username:t,password:await H(e),email:n,creation:Date.now(),session:D(),verified:!1,verifyCode:D(),bookmarks:[],notes:[],chats:[],invites:[],willNotifyForBlog:!0};return(await s.insertOne(a)).acknowledged?await L({to:n,subject:"Verify your zSnout account",text:`Hey @${t}! Verify your new zSnout account by opening this link: https://zsnout.com/verify-account?code=${a.verifyCode}.`})?{status:f.Success,account:a}:(await s.deleteOne({session:a.session}),{status:f.BadEmail}):{status:f.Failure}}var f=(c=>(c[c.NoServer=0]="NoServer",c[c.Failure=1]="Failure",c[c.Success=2]="Success",c[c.BadUsername=3]="BadUsername",c[c.BadPassword=4]="BadPassword",c[c.BadEmail=5]="BadEmail",c[c.IncorrectPassword=6]="IncorrectPassword",c[c.UsernameTaken=7]="UsernameTaken",c[c.EmailTaken=8]="EmailTaken",c))(f||{});async function z(t){let e=await m;if(!e)return{status:b.NoServer};let n=await e.findOneAndUpdate({verifyCode:t},{$set:{verified:!0}});return n.value?{status:b.Success,account:n.value}:{status:b.NoAccount}}var b=(s=>(s[s.NoAccount=0]="NoAccount",s[s.NoServer=1]="NoServer",s[s.Success=2]="Success",s))(b||{});async function ft(){let t=await m;await(t==null?void 0:t.deleteMany({verified:!1,creation:{$lte:Date.now()-15*60*1e3}}))}async function w(t){var e;return await((e=await m)==null?void 0:e.findOne({session:t}))||void 0}async function C(t,e){var n,s;return((s=await((n=await m)==null?void 0:n.updateOne({session:t},e)))==null?void 0:s.acknowledged)||!1}async function g(t,e){return C(t,{$set:e})}async function E(t,e){let n=await m;return n?y.Username(e)?await n.findOne({username:e})?7:await g(t,{username:e})?2:1:3:0}async function R(t,e,n){if(!await m)return 0;if(!y.Password(n))return 4;let a=await w(t);return a?await B(e,a.password)?await g(t,{password:await H(n)})?2:1:6:1}setInterval(ft,5*60*1e3);import{ObjectId as u}from"mongodb";import{randomUUID as q}from"node:crypto";var $=d("accounts"),l=d("chats");async function k(t){let[e,n]=await Promise.all([l,w(t)]);if(!e||!n)return[];let s=n._id.toHexString();return(await e.find({_id:{$in:n.chats}}).toArray()).map(i=>({id:i._id.toHexString(),level:i.members[s],title:i.title})).filter(i=>i.level&&i.level!=="none")}async function Y(t,e){let[n,s]=await Promise.all([l,w(t)]);if(!n||!s)return!1;let a=new u;if(!await g(t,{chats:s.chats.concat(a)}))return!1;let{acknowledged:i}=await n.insertOne({_id:a,creation:Date.now(),members:{[s._id.toHexString()]:"manage"},messages:[{content:`Welcome to your new chat, ${s.username}!`,from:"zSnout",id:q(),timestamp:Date.now()}],title:e.slice(0,100),defaultLevel:"none"});return i}async function O(t,e){if(e.length!==24)return{permission:"none"};let[n,s]=await Promise.all([l,w(t)]);if(!n||!s)return{permission:"none"};let a=s._id.toHexString(),i=await n.findOne({_id:u.createFromHexString(e)});if(!i)return{permission:"none"};let o=i.members[a]||i.defaultLevel;return!o||o==="none"?{permission:"none"}:{permission:o,messages:i.messages,title:i.title,members:i.members}}async function W(t,e){if(t.length!==24)return!1;let n=await l;if(!n)return!1;let{acknowledged:s}=await n.updateOne({_id:u.createFromHexString(t)},{$set:{title:e.slice(0,100)}});return s}async function G(t,e,n){if(t.length!==24)return!1;let s=await l;if(!s)return!1;let a={content:n.slice(0,1e3),id:q(),timestamp:Date.now(),from:e},{acknowledged:i}=await s.updateOne({_id:u.createFromHexString(t)},{$push:{messages:a}});return i?a:!1}async function J(t,e,n){if(e.length!==24)return!1;let s=await l;if(!s)return!1;let{acknowledged:a}=await s.updateOne({_id:u.createFromHexString(e)},{$pull:{messages:{id:n,from:t}}});return a}async function M(t){var s;let e=(s=await $)==null?void 0:s.find({_id:{$in:Object.keys(t).filter(a=>a.length===24).map(a=>u.createFromHexString(a))}});if(!e)return Object.create(null);let n=await e.toArray();return Object.fromEntries(n.map(({_id:a,username:i})=>[i,t[a.toHexString()]]).filter(a=>a[1]))}async function K(t){var s;let e=(s=await $)==null?void 0:s.find({username:{$in:Object.keys(t)}});if(!e)return{};let n=await e.toArray();return Object.fromEntries(n.map(({_id:a,username:i})=>[a.toHexString(),t[i]]).filter(a=>a[1]))}async function Q(t,e){if(t.length!==24)return!1;for(let o in e)if(o.length!==24)return!1;let[n,s]=await Promise.all([$,l]);if(!n||!s)return!1;let a=u.createFromHexString(t),i;return{acknowledged:i}=await n.updateMany({},{$pull:{chats:a}}),!i||({acknowledged:i}=await n.updateMany({_id:{$in:Object.keys(e).filter(o=>o.length===24).filter(o=>e[o]!=="none").map(o=>u.createFromHexString(o))}},{$push:{chats:a}}),!i)?!1:({acknowledged:i}=await s.updateOne({_id:a},{$set:{members:e}}),i)}async function X(t,e){if(t.length!==24||e.length!==24)return;let n=await l;if(!n)return;let{members:s}=await n.findOne({_id:u.createFromHexString(t)})||{};!s||(delete s[e],await n.updateOne({_id:u.createFromHexString(t)},{$set:{members:s}}))}async function I(t,e,n,s){if(e.length!==24)return;let a=await l;if(!a)return;let{messages:i}=await a.findOne({_id:u.createFromHexString(e)})||{};if(!i)return;let o=i.find(({id:N})=>N===n);if(!o||o.from!==t)return;o.content=s;let{acknowledged:x}=await a.updateOne({_id:u.createFromHexString(e)},{$set:{messages:i}});if(!!x)return o}import{ObjectId as _}from"bson";var mt=d("accounts"),T=d("notes");async function lt(t,e){let n=await mt;!n||await n.updateOne({_id:e},{$push:{notes:t}})}async function A(t){let{status:e,account:n}=await S(t);if(e===0)return[];if(e===1)return[];let s=await T;return s?(await s.find({_id:{$in:n.notes}}).toArray()).map(({_id:i,title:o,contents:x})=>({id:i.toHexString(),title:o,desc:x.slice(0,80).replaceAll(`
`," ")})):[]}async function V(t,e){let{status:n,account:s}=await S(t);if(n===0||n===1)return;let a=await T;if(!a||s.notes.length>=100)return;let i={_id:new _,contents:"<p>This is your new note!</p>",creation:Date.now(),owner:s._id,title:e};await Promise.all([a.insertOne(i),lt(i._id,s._id)])}async function P(t,e){if(e.length!==24)return{doesOwn:!1};let{status:n,account:s}=await S(t);if(n===0)return{doesOwn:!1};if(n===1)return{doesOwn:!1};let a=await T;if(!a)return{doesOwn:!1};let i=await a.findOne({_id:_.createFromHexString(e),owner:s._id});return i?{doesOwn:!0,note:i}:{doesOwn:!1}}async function tt(t,e){if(t.length!==24||e.length>1e4)return;let n=await T;!n||await n.updateOne({_id:_.createFromHexString(t)},{$set:{contents:e}})}async function et(t,e){if(t.length!==24)return;let n=await T;!n||await n.updateOne({_id:_.createFromHexString(t)},{$set:{title:e.slice(0,100)}})}async function r(t,e){let{status:n,account:s}=await S(e);if(n===2){let a=s.creation+9e5;return(s.verified||!s.verified&&a>Date.now())&&(t.emit("account:update:session",s.session),t.emit("account:update:username",s.username)),s.verified?t.emit("account:needs-verification",!1):t.emit("account:needs-verification",a-Date.now()),t.data.oldSession&&t.leave(`session:${t.data.oldSession}`),t.join(`session:${t.data.oldSession=e}`),s}else return t.emit("account:update:session",""),t.emit("account:update:username",""),t.emit("account:needs-verification",!1),t.data.oldSession&&t.leave(`session:${t.data.oldSession}`),!1}var nt="Your username should only contain letters, numbers, and underscores, and should be 6 to 20 characters long.",st="Your password should contain a letter and number and be at least 8 characters long.",F={"account:check-session"(t){r(this,t)},async"account:create"(t,e,n){let{status:s,account:a}=await Z(t,e,n);s===2?(await r(this,a.session),this.emit("account:done:verify")):this.emit("error",{[5]:"Your email address is invalid. Make sure it is formatted properly and can recieve emails.",[4]:st,[3]:nt,[8]:`${n} is already registered with another account.`,[1]:"An unknown issue occurred. Try again later.",[0]:"This instance of zSnout can't log in users.",[7]:`@${t} is already registered with another account.`}[s])},async"account:login"(t,e){let{status:n,account:s}=await j(t,e);n===3?(await r(this,s.session),this.emit("account:done:verify")):this.emit("error",{[0]:"Your username or password is incorrect.",[1]:"This instance of zSnout can't log in users.",[2]:"Your username or password is incorrect."}[n])},async"account:reset-session"(t,e){let n=wt();await g(t,{session:n});let s=this.to(`session:${t}`);s.emit("account:update:session",""),s.emit("account:update:username",""),e&&this.emit("account:update:session",this.data.oldSession=n),this.emit("account:done:reset-session")},async"account:update:username"(t,e){if(await r(this,t)){let n=await E(t,e);n===2?(this.to(`session:${t}`).emit("account:update:username",e),this.emit("account:update:username",e),this.emit("account:done:update:username")):this.emit("error",{[3]:nt,[7]:`@${e} is already registered with another account.`,[0]:"This server cannot change usernames.",[1]:"An unknown error occurred."}[n])}},async"account:update:password"(t,e,n){if(await r(this,t)){let s=await R(t,e,n);s===2?this.emit("account:done:update:password"):this.emit("error",{[4]:st,[6]:"Your old password was incorrect.",[0]:"This server cannot change usernames.",[1]:"An unknown error occurred."}[s])}},async"account:verify"(t){let{status:e,account:n}=await z(t);e===2?(await r(this,n.session),this.emit("account:done:verify")):this.emit("error",{[0]:"The provided verification code is invalid.",[1]:"This instance of zSnout can't verify accounts."}[e])},async"blog:request:will-notify"(t){var e;await r(this,t)&&this.emit("blog:update:will-notify",((e=await w(t))==null?void 0:e.willNotifyForBlog)||!1)},async"blog:update:will-notify"(t,e){await r(this,t)&&(await g(t,{willNotifyForBlog:e}),this.emit("blog:update:will-notify",e),this.to(`session-${t}`).emit("blog:update:will-notify",e),this.emit("blog:done:update:will-notify"))},async"bookmarks:request"(t){var e;if(await r(this,t)){let n=(e=await w(t))==null?void 0:e.bookmarks;n&&this.emit("bookmarks:list",n)}},async"bookmarks:update"(t,e){await r(this,t)&&await g(t,{bookmarks:e})&&e&&this.to(`session:${t}`).emit("bookmarks:list",e)},async"chat:create"(t,e){await r(this,t)&&await Y(t,e)&&this.emit("chat:index",await k(t))},async"chat:leave"(t,e){if(e.length!==24)return;let n=await r(this,t);!n||!await C(t,{$pull:{chats:dt.createFromHexString(e)}})||await X(e,n._id.toHexString())},async"chat:message:delete"(t,e,n){if(e.length!==24)return;let s=await r(this,t);!s||await J(s.username,e,n)&&(this.to(`chat-${e}`).emit("chat:message:delete",e,n),this.emit("chat:message:delete",e,n))},async"chat:message:send"(t,e,n){if(!n)return;let s=await r(this,t);if(!s)return;let{permission:a}=await O(t,e);if(a==="manage"||a==="comment"){let i=await G(e,s.username,n);if(!i)return;this.to(`chat-${e}`).emit("chat:message:update",e,i),this.emit("chat:message:update",e,i)}},async"chat:message:update"(t,e,n,s){if(e.length!==24)return;let a=await r(this,t);if(!a)return;let i=await I(a.username,e,n,s);i&&this.to(`chat-${e}`).emit("chat:message:update",e,i)},async"chat:request:index"(t){await r(this,t)&&this.emit("chat:index",await k(t))},async"chat:request:members"(t,e){if(await r(this,t)){let{members:n,permission:s}=await O(t,e);if(this.emit("chat:permission",e,s),s!=="manage")return;this.emit("chat:update:members",e,await M(n))}},async"chat:update:members"(t,e,n){let s=await r(this,t);if(!s)return;let{permission:a}=await O(t,e);if(this.emit("chat:permission",e,a),a!=="manage"||n[s.username]!=="manage")return;let i=await K(n);i[s._id.toHexString()]==="manage"&&(this.emit("chat:update:members",e,await M(i)),await Q(e,i))},async"chat:update:title"(t,e,n){if(this.rooms.has(`chat-${e}`)||await r(this,t)){let{permission:s}=await O(t,e);s==="manage"&&await W(e,n)&&this.to(`chat-${e}`).emit("chat:update:title",e,n)}},async"chat:watch:start"(t,e){if(await r(this,t)){let{title:n,messages:s,permission:a}=await O(t,e);if(this.emit("chat:permission",e,a),a==="none")return;this.join(`chat-${e}`),this.emit("chat:message:list",e,s),this.emit("chat:update:title",e,n)}},async"chat:watch:stop"(t){this.leave(`chat-${t}`)},async"notes:create"(t,e){await r(this,t)?(await V(t,e),this.emit("notes:index",await A(t))):this.emit("notes:index",[])},async"notes:request:details"(t,e){if(await r(this,t)){let{doesOwn:n,note:s}=await P(t,e);n&&this.emit("notes:details",{id:e,title:s.title})}},async"notes:request:index"(t){await r(this,t)?this.emit("notes:index",await A(t)):this.emit("notes:index",[])},async"notes:request:note"(t,e){if(await r(this,t)){let{doesOwn:n,note:s}=await P(t,e);n?this.emit("notes:note",e,s.contents):this.emit("notes:note",e,!1)}},async"notes:update:note"(t,e,n){if(await r(this,t)){let{doesOwn:s}=await P(t,e);s&&(tt(e,n),this.to(`session:${t}`).emit("notes:note",e,n))}},async"notes:update:title"(t,e,n){if(await r(this,t)){let{doesOwn:s}=await P(t,e);s&&(await et(e,n),this.to(`session:${t}`).emit("notes:details",{id:e,title:n}))}},async"youtube:request"(t){try{let e=await ht(`https://youtube.com/watch?v=${t}`),n=e.videoDetails,s=e.formats;n.thumbnails.sort((i,o)=>o.height-i.height);let{url:a}=n.thumbnails.sort((i,o)=>o.width-i.width)[0];this.emit("youtube:results",t,{title:n.title,description:n.description,isLive:n.isLiveContent,channel:n.ownerChannelName,thumbnail:a,formats:s.map(({url:i,hasAudio:o,hasVideo:x,qualityLabel:N,audioQuality:c})=>({url:i,hasAudio:o,hasVideo:x,quality:N,audio:c}))})}catch{}}};Object.setPrototypeOf(F,null);function yt(t){new pt(t).on("connection",n=>{for(let s in F)n.on(s,F[s].bind(n))})}function Qt(){let t=new gt;yt(t);let e=+(process.env.PORT||3e3);t.listen(Number.isSafeInteger(e)?e:3e3)}export{yt as makeIO,Qt as start};
