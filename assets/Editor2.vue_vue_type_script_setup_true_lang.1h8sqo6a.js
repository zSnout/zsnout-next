import{a as ace,A as AceEditor}from"./AceEditor.1gmgqqjd.js";import{d as defineComponent,o as openBlock,c as createBlock}from"./index.4z17mwie.js";String.prototype.realMatchAll=function(r){return Array.from(this.matchAll(r))};class _Storymatic{constructor(story,callback){story=_Storymatic.parse(story),this.original=story.original,this.variables=story.variables,this.parsed=JSON.parse(JSON.stringify(story)),this.commands={},this.stopped=!1;var add=(r,a,n,t)=>{this.commands[r]||(this.commands[r]=(s,o,u,l,h,f)=>{this.setVariable(a,s),this.setVariable(n,u),this.runParsed(t,()=>{!h||h.length==0?typeof f=="function"&&f():this.run(h,f)})})};for(var command in story.commands)if(!(command in this.commands)){var cmd=story.commands[command];add(command,cmd.arg,cmd.codeblock,cmd.body)}var libs=[],plugins=[];story.libs.map(r=>libs.push(fetch(r,{mode:"no-cors",cache:"reload"}))),story.plugins.map(r=>plugins.push(fetch(r[0],{mode:"no-cors",cache:"reload"}))),Promise.allSettled(plugins).then(data=>{for(var pluginText=[],i=0;i<data.length;i++)data[i].status=="fulfilled"&&data[i].value.ok&&data[i].value.status==200&&pluginText.push(data[i].value.text());Promise.allSettled(pluginText).then(data=>{data.map(e=>eval(e.value)),Promise.allSettled(libs).then(r=>{for(var a=[],n=0;n<r.length;n++)r[n].status=="fulfilled"&&r[n].value.ok&&r[n].value.status==200&&a.push(r[n].value.text());Promise.allSettled(a).then(t=>{t=t.map(u=>u.value);var s=0,o=()=>{if(s>=t.length){story.importall&&(story.imports=Object.keys(_Storymatic.imports));for(var u=0;u<story.importfrom.length;u++)if(story.importfrom[u][0]in _Storymatic.imports)for(var l=_Storymatic.imports[story.importfrom[u][0]],h=0;h<story.importfrom[u][1].length;h++){var f=story.importfrom[u][1][h];f in l&&(this.commands[f]=l[f])}for(var u=0;u<story.imports.length;u++)if(story.imports[u]in _Storymatic.imports){var l=_Storymatic.imports[story.imports[u]];for(var f in l)this.commands[f]=l[f]}typeof callback=="function"&&callback(this)}else this.mergeWith(t[s],()=>{s++,o()})};o()})})})})}mergeWith(r,a){var n=_Storymatic.parse(r),t=(u,l,h,f)=>{this.commands[u]||(this.commands[u]=(p,d,c,v,m,g)=>{this.setVariable(l,p),this.setVariable(h,c),this.runParsed(f,()=>{!m||m.length==0?typeof g=="function"&&g():this.run(m,g)})})};for(var s in n.commands)if(!(s in this.commands)){var o=n.commands[s];t(s,o.arg,o.codeblock,o.body)}typeof a=="function"&&a()}getVariable(r){var a=this.variables[r];return a==null||a.replace(/\s+/g,"")===""?"":a.match(/^-?[0-9]+(?:\.[0-9]+)?$/)?+a:a}setVariable(r,a){if(r)a=`${a}`;else return;this.variables[r]=a}calc(r){var a=t=>{var s=()=>{if(typeof t=="boolean"||typeof t=="string"||typeof t=="number")return t;if(typeof t!="object"||!t.type)return!1;if(t.type=="variable")return this.getVariable(t.name);if(t.type=="invert")return!a(t.values[0]);if(t.type=="multiply")return a(t.values[0])*a(t.values[1]);if(t.type=="divide")return a(t.values[0])/a(t.values[1]);if(t.type=="modulus")return a(t.values[0])%a(t.values[1]);if(t.type=="add")return a(t.values[0])+a(t.values[1]);if(t.type=="subtract")return a(t.values[0])-a(t.values[1]);if(t.type=="less_than")return a(t.values[0])<a(t.values[1]);if(t.type=="greater_than")return a(t.values[0])>a(t.values[1]);if(t.type=="less_than_equal")return a(t.values[0])<=a(t.values[1]);if(t.type=="greater_than_equal")return a(t.values[0])>=a(t.values[1]);if(t.type=="equal")return a(t.values[0])==a(t.values[1]);if(t.type=="not_equal")return a(t.values[0])!=a(t.values[1]);if(t.type=="and")return!!(a(t.values[0])&&a(t.values[1]));if(t.type=="or")return!!(a(t.values[0])||a(t.values[1]))},o=s();return o===!0||o=="TRUE"?!0:o===!1||o=="FALSE"?!1:o},n=a(r);return n===!0?"TRUE":n===!1?"FALSE":""+n}expr(r){return this.calc(_Storymatic.expr(r))}is(r){var a;return typeof r=="string"?a=this.expr(r):a=this.calc(r),String(a).toUpperCase()=="TRUE"}runCommand(r,a,n,t,s,o,u){r in this.commands?this.commands[r].call(this,...JSON.parse(JSON.stringify([a,n,t,s,o])),u):!o||o.length==0?typeof u=="function"&&u():this.run(o,u)}runCode(r,a){r=_Storymatic.parseBlock.inner(r),this.runParsed(r,a)}runParsed(r,a){this.run(r,a)}runVariable(r,a,n,t){if(a=="@=")return n.replace(/\s+/g,"")==""?this.setVariable(r,""):this.setVariable(r,this.expr(n)),typeof t=="function"?t():null;if(a=="=")return n.replace(/\s+/g,"")==""?this.setVariable(r,""):this.setVariable(r,this.parseText(n)),typeof t=="function"?t():null;var s=this.getVariable(r),o=this.parseText(n);return s==""?(this.setVariable(r,o),typeof t=="function"?t():null):(!isNaN(+s)&&!isNaN(+o)&&(s=+s,o=+o),a=="+="&&(s+=o),a=="-="&&(s-=o),a=="*="&&(s*=o),a=="/="&&(s/=o),a=="%="&&(s%=o),this.setVariable(r,s),typeof t=="function"?t():null)}print(r,a){_Storymatic.print(this.parseText(r),a)}parseText(r){return r.replace(/\$\$|\$([A-Za-z_][A-Za-z0-9_]*)/g,a=>a=="$$"?"$":this.getVariable(a.substr(1)))}run(r,a){if(!this.stopped){if(!r)return a==null?void 0:a();r=JSON.parse(JSON.stringify(r)),setTimeout(()=>{if(r.length==0)return typeof a=="function"?a():null;var n=r.shift(),t=()=>r.length==0?typeof a=="function"?a():null:this.run(r,a);n.action=="command"?this.runCommand(n.name,n.arg,n.expr,n.code,n.parsed,r,a):n.action=="code"?this.runCode(n.code,t):n.action=="parsed"?this.runParsed(n.code,t):n.action=="print"?this.print(n.text,t):n.action=="variable"?this.runVariable(n.name,n.mode,n.value,t):this.run(r,t)},0)}}start(r){typeof r!="function"&&(r=()=>{}),this.runCommand("start","","",[],[],r)}context(r){new _Storymatic(this.original,a=>{a.variables=JSON.parse(JSON.stringify(this.parsed.variables)),typeof r=="function"&&r(a)})}}_Storymatic.parseBlock={precomment:function(r){var a=/ *<--.+$/gm;return r.replace(a,"")},importfrom:function(r){var a=/^#import +([A-Za-z_][A-Za-z0-9_]*) +((?:@[A-Za-z_][A-Za-z0-9_]*(?:$| *,? *))+)$/gm;return r.realMatchAll(a),[r.replace(a,""),r.realMatchAll(a).map(n=>[n[1],n[2].realMatchAll(/@[A-Za-z_][A-Za-z0-9_]*/g).map(t=>t[0].substr(1))])]},imports:function(r){var a=/^#import +([^ \n\r]+)$/gm;return[r.replace(a,""),r.realMatchAll(a).map(n=>n[1])]},importall:function(r){var a=/^#importall$/gm;return[r.replace(a,""),!!r.realMatchAll(a).length]},libs:function(r){var a=/^#library +([^ \n\r]+)$/gm;return[r.replace(a,""),r.realMatchAll(a).map(n=>n[1]).filter(n=>{try{new URL(n)}catch{return!1}return n.substr(0,5)=="https"})]},plugins:function(r){var a=/^#plugin +([^ \n\r]+) +(.+)$/gm;return[r.replace(a,""),r.realMatchAll(a).map(n=>[n[1],n[2]]).filter(n=>{try{new URL(n[0])}catch{return!1}return n[0].substr(0,5)=="https"})]},commentblock:function(r){var a=/\/\*(?:[^\*]|\*(?=[^/]|$))*\*\/|\/\*(?:[^\*]|\*(?=[^/]|$))*$/g;return r.replace(a,"")},comments:function(r){var a=/ *#.+$/gm;return r.replace(a,"")},variables:function(r){var a=/^\$([A-Za-z_][A-Za-z0-9_]*) *= *(.+)$/gm,n=r.realMatchAll(a).map(t=>[t[1],t[2]]);return[r.replace(a,""),n]},commands:function(r){var a=/^@([A-Za-z_][A-Za-z0-9_]*)(?: +\$([A-Za-z_][A-Za-z0-9_]*)| +NONE)?(?: +\$([A-Za-z_][A-Za-z0-9_]*)| +NONE)? *$\n((?:^( +).*$)(?:\n^\5.*$)*)/gm,n=r.realMatchAll(a).map(t=>[null,t[1],t[2],t[3],t[4],t[5]]);return n=n.map(function(t){var s=t[5].length;return t[4]=t[4].split(`
`).map(o=>o.substr(s)),[t[1],t[2],t[3],t[4].join(`
`)]}),n},inner:function(r){r=r.split(`
`);var a=[],n;if(r.length===0)return[];var t=()=>r=r.filter((u,l)=>l>0).join(`
`);if(r.length>=2&&(n=r.join(`
`).match(/^@([A-Za-z_][A-Za-z0-9_]*?)(?: +(.+))?\n((?:( +).+)(?:\n\4.+)*)(?=\n|$)/))){var s=n[4].length,o=n[3].split(`
`).length+1;a.push({action:"command",name:n[1],arg:n[2]||"",expr:_Storymatic.expr(n[2]||""),code:n[3].split(`
`).map(u=>u.substr(s)).join(`
`),parsed:_Storymatic.parseBlock.inner(n[3].split(`
`).map(u=>u.substr(s)).join(`
`))}),r=r.filter((u,l)=>l>=o).join(`
`)}else(n=r.join(`
`).match(/^@([A-Za-z_][A-Za-z0-9_]*?)(?: +(.+))?(?=\n|$)/))?(a.push({action:"command",name:n[1],arg:n[2]||"",expr:_Storymatic.expr(n[2]||""),code:"",parsed:[]}),t()):(n=r[0].match(/^@([A-Za-z_][A-Za-z0-9_]*)\(((?:[^\)]|\)\))+)?\)(?: +(.+))?$/))?(a.push({action:"command",name:n[1],arg:n[2]||"",expr:_Storymatic.expr(n[2]||""),code:n[3]||"",parsed:_Storymatic.parseBlock.inner(n[3]||"")}),t()):(n=r.join(`
`).match(/^\$([A-Za-z_][A-Za-z0-9_]*) *(\+=|-=|\*=|\/=|%=|@=|=) *(.+)(?=\n|$)/))?(a.push({action:"variable",name:n[1],mode:n[2],value:n[3]}),t()):(n=r[0].match(/^\$([A-Za-z_][A-Za-z0-9_]*) *\+\+$/))?(a.push({action:"variable",name:n[1],mode:"+=",value:"1"}),t()):(n=r[0].match(/^\$([A-Za-z_][A-Za-z0-9_]*) *--$/))?(a.push({action:"variable",name:n[1],mode:"-=",value:"1"}),t()):r[0].replace(/ +/g,"")===""?t():(a.push({action:"print",text:r[0]}),r=r.filter((u,l)=>l>0).join(`
`));return r===""?a:a.concat(_Storymatic.parseBlock.inner(r))}};_Storymatic.parse=function(r){var a,n,t,s,o,u,l,h=r;r=r.split(`
`).filter(c=>c.replace(/ /g,"")).join(`
`),r=_Storymatic.parseBlock.precomment(r),[r,a]=_Storymatic.parseBlock.importfrom(r),[r,n]=_Storymatic.parseBlock.imports(r),[r,t]=_Storymatic.parseBlock.importall(r),[r,s]=_Storymatic.parseBlock.libs(r),[r,o]=_Storymatic.parseBlock.plugins(r),r=_Storymatic.parseBlock.commentblock(r),r=_Storymatic.parseBlock.comments(r),[r,u]=_Storymatic.parseBlock.variables(r),l=_Storymatic.parseBlock.commands(r),l=l.map(c=>[c[0],c[1]||"",c[2]||"",_Storymatic.parseBlock.inner(c[3])]);var f,p={};for(f=0;f<l.length;f++)p[l[f][0]]={arg:l[f][1],codeblock:l[f][2],body:l[f][3]};var d={};for(f=0;f<u.length;f++)d[u[f][0]]=u[f][1];return{original:h,importfrom:a,imports:n,importall:t,libs:s,plugins:o,variables:d,commands:p}};_Storymatic.parseExpr={verify:function(r){var a=/\(|\)|<=|>=|<|>|!=|\*|\/|%|\+|-|!|=|and|or|&&|\|\||-?[0-9]+(?:\.[0-9]+)?|\$[A-Za-z_][A-Za-z0-9_]*/g;if(r.replace(a,"").match(/[^ ]/)||!r.match(a))return!1;var n=r.match(a),t="<= >= < > != * / % + - = and or && ||".split(" "),s=l=>l.match(/-?[0-9]+(?:\.[0-9]+)?/),o=l=>l.match(/\$[A-Za-z_][A-Za-z0-9_]*/);if(t.indexOf(n[0])>-1||n[0]==")"||t.indexOf(n[n.length-1])>-1||n[n.length-1]=="("||n[n.length-1]=="!"||n.filter(l=>l=="(").length!=n.filter(l=>l==")").length)return!1;for(var u=0;u<n.length-1;u++)if(t.indexOf(n[u])>-1&&t.indexOf(n[u+1])>-1||t.indexOf(n[u])>-1&&n[u+1]==")"||(s(n[u])||o(n[u]))&&(s(n[u+1])||o(n[u+1])))return!1;return!0},tokenize:function(r){var a=/\$[A-Za-z_][A-Za-z0-9_]*|-?[0-9]+(?:\.[0-9]+)?|\(|\)|\|\||&&|\+|-|\*|\/|%|!=|!|<=|>=|<|>|=/g;return r.match(a)||[]},paren:function(r){for(var a=[],n=[],t=0,s=!1,o=r.length,u=0;u<o;u++)s?(r[u]=="("&&t++,r[u]==")"&&t--,t==-1?(s=!1,t=0,a.push(_Storymatic.expr(n.join(" ")))):n.push(r[u])):r[u]=="("?s=!0:a.push(r[u]);return a},varnums:function(r){for(var a,n=0;n<r.length;n++)typeof r[n]=="string"&&(a=r[n].match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/))&&(r[n]={type:"variable",name:a[1]}),typeof r[n]=="string"&&(a=r[n].match(/(-?[0-9]+(?:\.[0-9]+)?)/))&&(r[n]=+a[1]);return r},not:function(r){for(var a=[],n=(s,o,u)=>{a.push({type:s,values:o}),t+=u},t=0;t<r.length;t++)r[t]=="!"?n("invert",[r[t+1]],1):a.push(r[t]);return a},prodquotmod:function(r){for(var a=[],n=(s,o,u)=>{a.push({type:s,values:o}),t+=u},t=0;t<r.length;t++)r[t+1]=="*"?n("multiply",[r[t],r[t+2]],2):r[t+1]=="/"?n("divide",[r[t],r[t+2]],2):r[t+1]=="%"?n("modulus",[r[t],r[t+2]],2):a.push(r[t]);return a},plusminus:function(r){for(var a=[],n=(s,o,u)=>{a.push({type:s,values:o}),t+=u},t=0;t<r.length;t++)r[t+1]=="+"?n("add",[r[t],r[t+2]],2):r[t+1]=="-"?n("subtract",[r[t],r[t+2]],2):a.push(r[t]);return a},compare:function(r){for(var a=[],n=(s,o,u)=>{a.push({type:s,values:o}),t+=u},t=0;t<r.length;t++)r[t+1]=="<"?n("less_than",[r[t],r[t+2]],2):r[t+1]==">"?n("greater_than",[r[t],r[t+2]],2):r[t+1]=="<="?n("less_than_equal",[r[t],r[t+2]],2):r[t+1]==">="?n("greater_than_equal",[r[t],r[t+2]],2):a.push(r[t]);return a},equal:function(r){for(var a=[],n=(s,o,u)=>{a.push({type:s,values:o}),t+=u},t=0;t<r.length;t++)r[t+1]=="="?n("equal",[r[t],r[t+2]],2):r[t+1]=="!="?n("not_equal",[r[t],r[t+2]],2):a.push(r[t]);return a},and:function(r){for(var a=[],n=(s,o,u)=>{a.push({type:s,values:o}),t+=u},t=0;t<r.length;t++)r[t+1]=="and"||r[t+1]=="&&"?n("and",[r[t],r[t+2]],2):a.push(r[t]);return a},or:function(r){for(var a=[],n=(s,o,u)=>{a.push({type:s,values:o}),t+=u},t=0;t<r.length;t++)r[t+1]=="or"||r[t+1]=="||"?n("or",[r[t],r[t+2]],2):a.push(r[t]);return a}};_Storymatic.expr=function(r){return _Storymatic.parseExpr.verify(r)?(r=_Storymatic.parseExpr.tokenize(r),r=_Storymatic.parseExpr.paren(r),r=_Storymatic.parseExpr.varnums(r),r=_Storymatic.parseExpr.not(r),r=_Storymatic.parseExpr.prodquotmod(r),r=_Storymatic.parseExpr.plusminus(r),r=_Storymatic.parseExpr.compare(r),r=_Storymatic.parseExpr.equal(r),r=_Storymatic.parseExpr.and(r),r=_Storymatic.parseExpr.or(r),r[0]):{type:"equal",values:[0,1]}};_Storymatic.tooltip=(r,a)=>typeof a=="function"?a():null;_Storymatic.write=(r,a)=>typeof a=="function"?a(alert(r)):null;_Storymatic.print=(r,a)=>typeof a=="function"?a(alert(r)):null;_Storymatic.image=(r,a)=>typeof a=="function"?a():null;_Storymatic.line=r=>typeof r=="function"?r():null;_Storymatic.clear=r=>typeof r=="function"?r():null;_Storymatic.type=(r,a,n)=>typeof n=="function"?n(alert(r)):null;_Storymatic.input=(r,a)=>typeof a=="function"?a(prompt(r)):null;_Storymatic.choice=(r,a,n)=>{function t(){var s=prompt(r+`
Choose From: `+a.join(","));return a.indexOf(s)==-1?t():a.indexOf(s)}typeof n=="function"&&n(t())};_Storymatic.waitingFor=[];_Storymatic.waitFor=(r,a,n)=>{typeof n=="function"&&n(r)};_Storymatic.imports={};_Storymatic.imports.time={nowait:function(r,a,n,t,s,o){_Storymatic.write(this.parseText(r),()=>{this.run(s,o)})},wait:function(r,a,n,t,s,o){if(r=+this.parseText(r),isNaN(r))return this.run(s,o);setTimeout(()=>{this.run(s,o)},1e3*r)},wait_ms:function(r,a,n,t,s,o){if(r=+this.parseText(r),isNaN(r))return this.run(s,o);setTimeout(()=>{this.run(s,o)},r)}};_Storymatic.imports.input={menu:function(r,a,n,t,s,o){var u=t.filter(l=>l.action=="command"&&l.name=="option"&&l.arg.replace(/\s+/g,"")!="");if(u.length==0)return this.run(s,o);_Storymatic.choice(this.parseText(r),u.map(l=>this.parseText(l.arg)),l=>{this.run(u[l].parsed,()=>{this.run(s,o)})})},choice:function(r,a,n,t,s,o){var u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/);if(!u)return this.run(s,o);var l=t.filter(h=>h.action=="command"&&h.name=="option"&&h.arg.replace(/\s+/g,"")!="");if(l.length==0)return this.run(s,o);_Storymatic.choice(this.parseText(r),l.map(h=>this.parseText(h.arg)),h=>{l[h].code.replace(/\s+/g)==""?this.setVariable(u[1],this.parseText(l[h].arg)):this.setVariable(u[1],this.parseText(l[h].code)),this.run(s,o)})},input:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/,l,h=n.replace(/\s+/g,"")==""?[]:n.split(`
`).map(p=>this.parseText(p)).map(p=>p.toLowerCase());if(!(l=r.match(u)))return this.run(s,o);var f=()=>{_Storymatic.input(l[2],p=>p.replace(/\s+/g,"")==""||h.length>0&&h.indexOf(p.toLowerCase())==-1?f():(this.setVariable(l[1],p),this.run(s,o)))};f()},input_cs:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/,l,h=n.replace(/\s+/g,"")==""?[]:n.split(`
`).map(p=>this.parseText(p)).map(p=>p.toLowerCase());if(!(l=r.match(u)))return this.run(s,o);var f=()=>{_Storymatic.input(l[2],p=>p.replace(/\s+/g,"")==""||h.length>0&&h.indexOf(p)==-1?f():(this.setVariable(l[1],p),this.run(s,o)))};f()},number:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/,l=r.match(u);if(!l)return this.run(s,o);var h=-1/0,f=1/0,p=0,d=!1;if(n=n.split(`
`),n.map(m=>{var g;(g=m.match(/^min *: *(-?[0-9]+(?:\.[0-9]+)?)/))&&(h=+g[1]),(g=m.match(/^max *: *(-?[0-9]+(?:\.[0-9]+)?)/))&&(f=+g[1]),(g=m.match(/^step *: *([0-9]+(?:\.[0-9]+)?)/))&&(p=+g[1]),(m=="integer"||m=="int")&&(d=!0),m=="float"&&(d=!1)}),h>f){var c=h;h=f,f=c}var v=()=>{_Storymatic.input(l[2],m=>m.replace(/\s/g,"")==""||(m=+m,isNaN(m))||m<h||m>f||d&&Math.floor(m)!=m||p&&Math.floor((m-h)/p)!=(m-h)/p?v():(this.setVariable(l[1],m),this.run(s,o)))};v()},bind_once:function(r,a,n,t,s,o){if(r.replace(/\s+/g,"")=="")return this.run(s,o);if(n.replace(/\s+/g,"")=="")return this.run(s,o);_Storymatic.waitFor(this.parseText(r),!0,()=>{this.run(JSON.parse(JSON.stringify(t)))}),this.run(s,o)},bind_forever:function(r,a,n,t,s,o){if(n.replace(/\s/g,"")=="")return this.run(s,o);if(r.replace(/\s/g,"")=="")return this.run(s,o);_Storymatic.waitFor(this.parseText(r),!1,()=>{this.run(JSON.parse(JSON.stringify(t)))}),this.run(s,o)},unbind:function(r,a,n,t,s,o){r.replace(/\s/g,"")!=""?_Storymatic.waitingFor=_Storymatic.waitingFor.filter(u=>r.split(/\s+/g).indexOf(u.key.toLowerCase())==-1):_Storymatic.waitingFor=[],this.run(s,o)}};_Storymatic.imports.output={nowait:function(r,a,n,t,s,o){_Storymatic.write(this.parseText(r),()=>{this.run(s,o)})},image:function(r,a,n,t,s,o){_Storymatic.image(this.parseText(r),()=>this.run(s,o))},typewrite:function(r,a,n,t,s,o){var u;(u=r.match(/^([0-9]+(?:\.[0-9]+)?) +(.+)$/))?_Storymatic.type(this.parseText(u[2]),1e3*+u[1],()=>this.run(s,o)):(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/))?_Storymatic.type(this.parseText(u[2]),1e3*+this.getVariable(u[1]),()=>this.run(s,o)):this.run(s,o)},typewrite_ms:function(r,a,n,t,s,o){var u;(u=r.match(/^([0-9]+(?:\.[0-9]+)?) +(.+)$/))?_Storymatic.type(this.parseText(u[2],+u[1],()=>this.run(s,o))):(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/))?_Storymatic.type(this.parseText(u[2],+this.getVariable(u[1]),()=>this.run(s,o))):this.run(s,o)},line:function(r,a,n,t,s,o){_Storymatic.line(()=>this.run(s,o))},clear:function(r,a,n,t,s,o){_Storymatic.clear(()=>this.run(s,o))},center:function(r,a,n,t,s,o){_Storymatic.center(this.parseText(r),()=>{this.run(s,o)})},tooltip:function(r,a,n,t,s,o){_Storymatic.tooltip(this.parseText(r),()=>{this.run(s,o)})}};_Storymatic.imports.control={if:function(r,a,n,t,s,o){if(r.replace(/\s/g,"")=="")return this.run(s,o);if(n.replace(/\s+/g,"")=="")return this.run(s,o);for(var u=JSON.parse(JSON.stringify(s)),l=[{action:"command",name:"if",arg:r,expr:a,code:n,parsed:t}];u.length>0&&u[0].action=="command"&&(u[0].name=="elseif"||u[0].name=="else")&&!(u[0].name=="elseif"&&u[0].arg.replace(/\s/g,"")==""||u[0].name=="else"&&u[0].arg.replace(/\s/g,"")!=""||(l.push(u.shift()),l[l.length-1].name=="else"));)if(u.length>0&&u[0].action=="command"){if(u[0].name!="elseif"&&u[0].name!="else")break}else break;for(var h=0;h<l.length;h++){if((l[h].name=="if"||l[h].name=="elseif")&&this.is(l[h].expr))return this.run(JSON.parse(JSON.stringify(l[h].parsed)),()=>this.run(u,o));if(l[h].name=="else")return this.run(JSON.parse(JSON.stringify(l[h].parsed)),()=>this.run(u,o))}this.run(u,o)},context:function(r,a,n,t,s,o){if(n.replace(/\s+/g,"")=="")return this.run(s,o);this.context(u=>{var l=r.match(/\$([A-Za-z_][A-Za-z0-9_]*)/g);Array.isArray(l)?l=l.map(h=>h.substr(1)):l=[],u.runParsed(t,()=>{for(var h=0;h<l.length;h++)l[h]in u.variables&&(this.variables[l[h]]=JSON.parse(JSON.stringify(u.variables[l[h]])));this.run(s,o)})})},repeat:function(r,a,n,t,s,o){var u=0,l=+this.calc(a);if(r.replace(/\s/g,"")=="")return this.run(s,o);if(n.replace(/\s/g,"")=="")return this.run(s,o);if(!l)return this.run(s,o);var h=()=>{if(++u>l)return this.run(s,o);this.run(JSON.parse(JSON.stringify(t)),h)};h()},while:function(r,a,n,t,s,o){if(r.replace(/\s/g,"")=="")return this.run(s,o);if(n.replace(/\s/g,"")=="")return this.run(s,o);var u=()=>{this.is(a)?this.run(JSON.parse(JSON.stringify(t)),u):this.run(s,o)};u()},for:function(r,a,n,t,s,o){if(n.replace(/\s+/g,"")=="")return this.run(s,o);if(r=r.split(/;/g).map(l=>l.trim()),r.length!=3)return this.run(s,o);var u=()=>{if(this.is(r[1]))this.run(JSON.parse(JSON.stringify(t)),()=>{this.runCode(r[2],u)});else return this.run(s,o)};this.runCode(r[0],u)},step:function(r,a,n,t,s,o){if(n.replace(/\s+/g,"")=="")return this.run(s,o);var u=/\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+(?:\.[0-9]+)?) +(-?[0-9]+(?:\.[0-9]+)?)(?: +([0-9](?:\.[0-9]+)?))?/,l=r.match(u);if(!l)return this.run(s,o);var h=l[1],f=+l[2],p=+l[3],d=+l[4]||1;if(f>p){var c=p;p=f,f=c}var v=()=>{this.setVariable(h,f),this.run(JSON.parse(JSON.stringify(t)),()=>(f+=d,f>p?this.run(s,o):v()))};v()},run:function(r,a,n,t,s,o){var u;(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/))?this.runCode(this.getVariable(u[1]),()=>this.run(s,o)):this.run(s,o)},switch:function(r,a,n,t,s,o){for(var u=this.parseText(r),l=0;l<t.length;l++)if(t[l].action=="command"){if(t[l].name=="case"&&this.parseText(t[l].arg)==u)return this.run(t[l].parsed,()=>this.run(s,o));if(t[l].name=="default")return this.run(t[l].parsed,()=>this.run(s,o))}this.run(s,o)}};_Storymatic.imports.string={parse:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,l;if(l=r.match(u)){var h=`${this.getVariable(l[1])}`;this.setVariable(l[1],this.parseText(h)),this.run(s,o)}else this.run(s,o)},newline:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,l=r.match(u);if(!l)return this.run(s,o);this.setVariable(l[1],this.getVariable(l[1])+`
`),this.run(s,o)},empty:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,l=r.match(u);if(!l)return this.run(s,o);this.setVariable(l[1],""),this.run(s,o)},substr:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)(?: +(-?[0-9]+))?$/,l;if(l=r.match(u)){var h=`${this.getVariable(l[1])}`,f=+l[2]>0?+l[2]-1:+l[2],p=+l[3]||void 0;this.setVariable(l[1],h.substr(f,p)),this.run(s,o)}else this.run(s,o)},substring:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)(?: +(-?[0-9]+))?$/,l;if(l=r.match(u)){var h=`${this.getVariable(l[1])}`,f=+l[2]>0?+l[2]-1:+l[2];l[3]&&(+l[3]>0?+l[3]-1:+l[3]),this.setVariable(l[1],h.substring(f,length)),this.run(s,o)}else this.run(s,o)},char:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)$/,l;if(l=r.match(u)){var h=`${this.getVariable(l[1])}`,f=+l[2]>0?+l[2]-1:+l[2];this.setVariable(l[1],h.charAt(f)),this.run(s,o)}else this.run(s,o)},switch_char:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)$/,l;if(l=r.match(u)){var h=`${this.getVariable(l[1])}`,f=+l[2]>0?+l[2]-1:+l[2];h=h.charAt(f)}else this.run(s,o);for(var p=0;p<t.length;p++)if(t[p].action=="command"){if(t[p].name=="case"&&this.parseText(t[p].arg)==h)return this.run(t[p].parsed,()=>this.run(s,o));if(t[p].name=="default")return this.run(t[p].parsed,()=>this.run(s,o))}this.run(s,o)},lowercase:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,l=r.match(u);if(!l)return this.run(s,o);this.setVariable(l[1],`${this.getVariable(l[1])}`.toLowerCase()),this.run(s,o)},uppercase:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,l=r.match(u);if(!l)return this.run(s,o);this.setVariable(l[1],`${this.getVariable(l[1])}`.toUpperCase()),this.run(s,o)},replace:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +\/((?:[^\/]|\\\/)+)\/([gimsuy]{0,6}) +?(.*)$/,l=r.match(u);if(!l)return this.run(s,o);var h=`${this.getVariable(l[1])}`,f=new RegExp(l[2],l[3]),p=l[4];this.setVariable(l[1],h.replace(f,p)),this.run(s,o)}};_Storymatic.imports.number={randint:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+) +(-?[0-9]+)$/,l=r.match(u);if(!l)return this.run(s,o);var h=+l[2],f=+l[3];if(h>f){var p=h+0;h=f,f=p}this.setVariable(l[1],Math.floor((f-h+1)*Math.random())+h),this.run(s,o)},floor:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,l=r.match(u);if(!l)return this.run(s,o);this.setVariable(l[1],Math.floor(+this.getvariable(l[1]))),this.run(s,o)},ceil:function(r,a,n,t,s,o){var u=/^\$([A-Za-z_][A-Za-z0-9_]*)$/,l=r.match(u);if(!l)return this.run(s,o);this.setVariable(l[1],Math.ceil(+this.getvariable(l[1]))),this.run(s,o)}};_Storymatic.imports.sync={exists:function(r,a,n,t,s,o){var u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/);if(u&&n.replace(/\s+/g,"")!=""){var n=new URL(window.location.href).searchParams.get("code"),l=`storymatic_${n}_${u[1]}`;actions.getLocal(l,f=>{typeof f[l]=="string"?this.run(t,()=>this.run(s,o)):s.length>0&&s[0].action=="command"&&s[0].name=="else"?this.run(s[0].parsed,()=>this.run(s.filter((p,d)=>d>0),o)):this.run(s,o)})}else this.run(s,o)},load:function(r,a,n,t,s,o){var u;if(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/)){var n=new URL(window.location.href).searchParams.get("code"),l=`storymatic_${n}_${u[1]}`;actions.getLocal(l,f=>{typeof f[l]=="string"?(this.setVariable(u[1],f[l]),this.run(s,o)):(this.setVariable(u[1],this.parseText(u[2])),this.run(s,o))})}else this.run(s,o)},save:function(r,a,n,t,s,o){var u;if(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/)){var n=new URL(window.location.href).searchParams.get("code"),l=`storymatic_${n}_${u[1]}`,h={};h[l]=`${this.getVariable(u[1])}`,actions.setLocal(h,()=>{this.run(s,o)})}else this.run(s,o)},reset:function(r,a,n,t,s,o){var u;if(u=r.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/)){var n=new URL(window.location.href).searchParams.get("code"),l=`storymatic_${n}_${u[1]}`,h={};h[l]=null,actions.setLocal(h,()=>this.run(s,o))}else this.run(s,o)}};const actions={};actions.getLocal=function(r,a){var n={};if(typeof r=="object"&&r.length===0){for(var t=0;t<localStorage.length;t++){var s=localStorage.key(t);s.slice(0,6)=="local-"&&(n[s.slice(6)]=localStorage.getItem(s))}return n}typeof r=="string"&&(r=[r]);for(var t=0;t<r.length;t++)n[r[t]]=actions.storage.get("local-"+r[t])["local-"+r[t]];a(n)};actions.setLocal=function(r,a){var n={};for(var t in r)n["local-"+t]=r[t];actions.storage.set(n),typeof a=="function"&&a("")};const _sfc_main=defineComponent({__name:"Editor2",props:{modelValue:null,readonly:{type:Boolean},placeholder:null,round:{type:Boolean}},emits:["update:modelValue","init","save"],setup(r){return ace.define("ace/mode/storymatic2",(a,n)=>{const t=a("ace/lib/oop"),s=a("ace/mode/text").Mode,o=a("ace/mode/storymatic2_highlight_rules").StorymaticHighlightRules,u=function(){this.HighlightRules=o,this.lineCommentStart="#"};t.inherits(u,s),n.Mode=u}),ace.define("ace/mode/storymatic2_highlight_rules",function(a,n){const t=a("ace/lib/oop"),s=a("ace/mode/text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:["keyword.other","text","variable.storymatic","text","entity.name.function"],regex:/^(#import)( +)([A-Za-z_][A-Za-z0-9_]*)( +)((?:@[A-Za-z_][A-Za-z0-9_]*(?:$| +))+)$/},{token:["keyword.other","text","variable.storymatic"],regex:/^(#import)( +)([A-Za-z_][A-Za-z0-9_]*)$/},{token:"keyword.other",regex:/^#importall$/},{token:["keyword.other","text","variable.other.markup.underline.link"],regex:/^(#library)( +)([^ ]+)$/},{token:["keyword.other","text","variable.other.markup.underline.link","text","string.other"],regex:/^(#plugin)( +)([^ ]+)( +)(.+)$/},{token:"comment.line",regex:/^\s*#.*$/},{token:"entity.name.function",regex:/@(?:nowait|wait|wait_ms|menu|option|command|choice|input|input_cs|number|bind_once|bind_forever|unbind|nowait|image|typewrite|typewrite_ms|line|clear|center|tooltip|if|elseif|else|context|repeat|while|for|step|run|switch|parse|newline|empty|substr|substring|char|switch_char|lowercase|uppercase|replace|randint|floor|ceil|exists|load|save|reset)\b/},{token:"constant.language",regex:/true|false|null/},{token:"keyword.operator",regex:/[+\-*\/%>=<]|[&|]{2}|@=/},{token:"paren",regex:/[(){}[\]]/},{token:"language.constant.character",regex:/@\w+\b/},{token:["text","property"],regex:/(\.\s*)(\$?\w+)/},{token:["property","text"],regex:/(\$?\w+\s*)(:)/},{token:"constant.numeric",regex:/\b\d+(?:\.\d+)?\b/},{token:"variable.storymatic",regex:/\$\w+/},{token:"text",regex:/[,;]/},{token:"entity.name.function",regex:/^\s+(?![@\s]|\$\w+\s+[+\-*\/%@]?=)|^ \s+@nowait\s+/,next:"codeText"},{defaultToken:"string.unquoted"}],codeText:[{regex:/$/,next:"start"},{token:["keyword.operator.bold","variable.storymatic.bold","keyword.operator.bold"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:"variable.storymatic.bold",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator.bold","variable.storymatic.bold","keyword.operator.bold"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.storymatic.bold",regex:/@runfrom|@reference/},{token:"constant.language.escape.bold",regex:/\$\$/},{defaultToken:"bold"}]}};t.inherits(o,s),n.StorymaticHighlightRules=o}),(a,n)=>{var t;return openBlock(),createBlock(AceEditor,{modelValue:r.modelValue,placeholder:(t=r.placeholder)!=null?t:"Write a story...",readonly:r.readonly,round:r.round,mode:"storymatic2",onInit:n[0]||(n[0]=s=>a.$emit("init",s)),onSave:n[1]||(n[1]=s=>a.$emit("save",s)),"onUpdate:modelValue":n[2]||(n[2]=s=>a.$emit("update:modelValue",s))},null,8,["modelValue","placeholder","readonly","round"])}}});export{_Storymatic as S,_sfc_main as _};
