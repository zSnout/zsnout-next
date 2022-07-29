import{readFile as L}from"node:fs";import{Server as R}from"node:http";import{Server as Y}from"socket.io";import{compare as C,hash as D}from"bcrypt";import{randomUUID as O}from"crypto";import{MongoClient as Z}from"mongodb";var S=process.env.ZSNOUT_DATABASE?new Z(process.env.ZSNOUT_DATABASE,{serverApi:"1"}).connect().then(e=>(e.on("error",async()=>{await e.close(),await e.connect()}),e)).catch(e=>(console.log(e),void 0)):Promise.resolve((console.log("no database available"),void 0)),$=S.then(e=>e==null?void 0:e.db("zsnout")).catch(e=>(console.log(e),void 0)),G=S.then(e=>!!e)??Promise.resolve(!1);async function m(e){var n;return(n=await $)==null?void 0:n.collection(e)}process.on("beforeExit",()=>{S.then(e=>e==null?void 0:e.close())});import{createTransport as z}from"nodemailer";var B={host:process.env.ZSNOUT_MAIL_HOST,port:+(process.env.ZSNOUT_MAIL_PORT||587),secure:process.env.ZSNOUT_MAIL_PORT==="465",auth:{user:process.env.ZSNOUT_MAIL_USER,pass:process.env.ZSNOUT_MAIL_PASSWORD}},X=!!(process.env.ZSNOUT_MAIL_HOST&&process.env.ZSNOUT_MAIL_USER&&process.env.ZSNOUT_MAIL_PASSWORD),d=z(B);function T(e){return new Promise(n=>{d==null||d.sendMail({...e,from:process.env.ZSNOUT_MAIL_FROM},(s,t)=>{s?(console.log(s),n(void 0)):n(t)})})}process.on("beforeExit",()=>d==null?void 0:d.close());var g;(t=>{function e(o){return o.length>=5&&o.length<=20&&/^[A-Za-z_][A-Za-z0-9_]+$/.test(o)&&!/zsnout/i.test(o)}t.Username=e;function n(o){return o.length>=8&&/(?![\d_])\w/.test(o)&&/\d/.test(o)&&/[^\s\w]/.test(o)}t.Password=n;function s(o){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(o)}t.Email=s})(g||={});function E(e){return D(e,10)}function j(e,n){return C(e,n)}var u=m("accounts");async function b(e,n){let s=await u;if(!s)return{status:f.NoServer};let t=await s.findOne({username:e});return t?await j(n,t.password)?{status:f.Success,account:t}:{status:f.BadPassword}:{status:f.NoUser}}var f=(o=>(o[o.BadPassword=0]="BadPassword",o[o.NoServer=1]="NoServer",o[o.NoUser=2]="NoUser",o[o.Success=3]="Success",o))(f||{});async function w(e){let n=await u;if(!n)return{status:l.NoServer};let s=await n.findOne({session:e});return s?{status:l.Success,account:s}:{status:l.Failure}}var l=(t=>(t[t.Failure=0]="Failure",t[t.NoServer=1]="NoServer",t[t.Success=2]="Success",t))(l||{});async function N(e,n,s){let t=await u;if(!t)return{status:i.NoServer};if(!g.Username(e))return{status:i.BadUsername};if(!g.Password(n))return{status:i.BadPassword};if(!g.Email(s))return{status:i.BadEmail};if(await _(),await t.findOne({username:e}))return{status:i.UsernameTaken};if(await t.findOne({email:s}))return{status:i.EmailTaken};let o={username:e,password:await E(n),email:s,creation:Date.now(),session:O(),verified:!1,verifyCode:O(),bookmarks:[],favoriteNotes:[],notes:[],favoriteChats:[],chats:[]};return(await t.insertOne(o)).acknowledged?await T({to:s,subject:"Verify your zSnout account",text:`Hey @${e}! Verify your new zSnout account by opening this link: https://zsnout.com/account/verify?code=${o.verifyCode}.`})?{status:i.Success,account:o}:(await t.deleteOne({session:o.session}),{status:i.BadEmail}):{status:i.Failure}}var i=(r=>(r[r.BadUsername=0]="BadUsername",r[r.BadPassword=1]="BadPassword",r[r.BadEmail=2]="BadEmail",r[r.EmailTaken=3]="EmailTaken",r[r.Failure=4]="Failure",r[r.NoServer=5]="NoServer",r[r.Success=6]="Success",r[r.UsernameTaken=7]="UsernameTaken",r))(i||{});async function x(e){let n=await u;if(!n)return{status:p.NoServer};let s=await n.findOneAndUpdate({verifyCode:e},{$set:{verified:!0}});return s.value?{status:p.Success,account:s.value}:{status:p.NoAccount}}var p=(t=>(t[t.NoAccount=0]="NoAccount",t[t.NoServer=1]="NoServer",t[t.Success=2]="Success",t))(p||{});async function _(){let e=await u;await(e==null?void 0:e.deleteMany({verified:!1,creation:{$lte:Date.now()-15*60*1e3}}))}async function P(e){var n;return await((n=await u)==null?void 0:n.findOne({session:e}))||void 0}async function U(e,n){var s,t;return(t=await((s=await u)==null?void 0:s.updateOne({session:e},{$set:n})))==null?void 0:t.acknowledged}setInterval(_,5*60*1e3);import{ObjectId as I}from"bson/lib/bson.js";var H=m("accounts"),M=m("notes");async function F(e,n){let s=await H;if(!s)return;let t=await s.find({_id:{$in:n}}).toArray();await Promise.all(t.map(({_id:o,notes:a})=>(a=a.filter(v=>v.toHexString()!==e),a.unshift(I.createFromHexString(e)),s.updateOne({_id:o},{$set:{notes:a}}))))}async function y(e){let{status:n,account:s}=await w(e);if(n===0)return[];if(n===1)return[];let t=await M;return t?(await t.find({_id:{$in:s.notes}}).toArray()).map(({_id:a,title:v,contents:A})=>({id:a.toHexString(),title:v,desc:A.slice(0,80).replaceAll(`
`," ")})):[]}async function k(e,n){let{status:s,account:t}=await w(e);if(s===0||s===1)return;let o=await M;if(!o)return;let a={_id:new I,baseRole:"none",contents:"This is your new note!",contributors:{[t._id.toHexString()]:"owner"},creation:Date.now(),title:n};await Promise.all([o.insertOne(a),F(a._id.toHexString(),[t._id])])}async function c(e,n){let{status:s,account:t}=await w(n);if(s===2){let o=t.creation+9e5;return(t.verified||!t.verified&&o>Date.now())&&(e.emit("account:update:session",t.session),e.emit("account:update:username",t.username)),t.verified?e.emit("account:needs-verification",!1):e.emit("account:needs-verification",o-Date.now()),e.oldSession&&e.leave(`session:${e.oldSession}`),e.join(`session:${e.oldSession=n}`),!0}else return e.emit("account:update:session",""),e.emit("account:update:username",""),e.emit("account:needs-verification",!1),e.oldSession&&e.leave(`session:${e.oldSession}`),!1}var h={"account:check-session"(e){c(this,e)},async"account:create"(e,n,s){let{status:t,account:o}=await N(e,n,s);t===6?(await c(this,o.session),this.emit("account:complete-login")):this.emit("error",{[2]:"Your email address is invalid. Make sure it is formatted properly and can recieve emails.",[1]:"Your password should have a letter, number, symbol, and be at least 8 characters long.",[0]:"Your username should only contain letters, numbers, and underscores, and should be at least 6 characters long.",[3]:`${s} is already registered with another account.`,[4]:"An unknown issue occurred. Try again later.",[5]:"This instance of zSnout can't log in users.",[7]:`@${e} is already registered with another account.`}[t])},async"account:login"(e,n){let{status:s,account:t}=await b(e,n);s===3?(await c(this,t.session),this.emit("account:complete-login")):this.emit("error",{[0]:"Your username or password is incorrect.",[1]:"This instance of zSnout can't log in users.",[2]:"Your username or password is incorrect."}[s])},async"account:verify"(e){let{status:n,account:s}=await x(e);n===2?(await c(this,s.session),this.emit("account:complete-login")):this.emit("error",{[0]:"The provided verification code is invalid.",[1]:"This instance of zSnout can't verify accounts."}[n])},async"bookmarks:request"(e){var n;if(await c(this,e)){let s=(n=await P(e))==null?void 0:n.bookmarks;s&&this.emit("bookmarks:list",s)}},async"bookmarks:update"(e,n){await c(this,e)&&await U(e,{bookmarks:n})&&n&&this.to(`session:${e}`).emit("bookmarks:list",n)},async"notes:create"(e,n){await c(this,e)?(await k(e,n),this.emit("notes:index",await y(e))):this.emit("notes:index",[])},async"notes:request:index"(e){await c(this,e)?this.emit("notes:index",await y(e)):this.emit("notes:index",[])}};Object.setPrototypeOf(h,null);function q(e){new Y(e).on("connection",s=>{for(let t in h)s.on(t,h[t].bind(s))})}function ve(){let e=new R;q(e),e.addListener("request",(s,t)=>{L("./index.html",(o,a)=>{o?(t.statusCode=503,t.setHeader("content-type","application/json").end(JSON.stringify(a))):t.setHeader("content-type","text/html").end(a)})});let n=+(process.env.PORT||3e3);e.listen(Number.isSafeInteger(n)?n:3e3)}export{q as makeIO,ve as start};
