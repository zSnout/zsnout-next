var p={exports:{}};(function(f,o){o=f.exports=s,o.getSerialize=u;function s(i,r,e,g){return JSON.stringify(i,u(r,g),e)}function u(i,r){var e=[],g=[];return r==null&&(r=function(a,c){return e[0]===c?"[Circular ~]":"[Circular ~."+g.slice(0,e.indexOf(c)).join(".")+"]"}),function(a,c){if(e.length>0){var t=e.indexOf(this);~t?e.splice(t+1):e.push(this),~t?g.splice(t,1/0,a):g.push(a),~e.indexOf(c)&&(c=r.call(this,a,c))}else e.push(c);return i==null?c:i.call(this,a,c)}}})(p,p.exports);var m=p.exports,x=function(){var f=4022871197,o=function(s){if(s){s=s.toString();for(var u=0;u<s.length;u++){f+=s.charCodeAt(u);var i=.02519603282416938*f;f=i>>>0,i-=f,i*=f,f=i>>>0,i-=f,f+=i*4294967296}return(f>>>0)*23283064365386963e-26}else f=4022871197};return o},v=function(f){return function(){var o=48,s=1,u=o,i=new Array(o),r,e,g=0,a=new x;for(r=0;r<o;r++)i[r]=a(Math.random());var c=function(){++u>=o&&(u=0);var n=1768863*i[u]+s*23283064365386963e-26;return i[u]=n-(s=n|0)},t=function(n){return Math.floor(n*(c()+(c()*2097152|0)*11102230246251565e-32))};t.string=function(n){var l,h="";for(l=0;l<n;l++)h+=String.fromCharCode(33+t(94));return h};var d=function(){var n=Array.prototype.slice.call(arguments);for(r=0;r<n.length;r++)for(e=0;e<o;e++)i[e]-=a(n[r]),i[e]<0&&(i[e]+=1)};return t.cleanString=function(n){return n=n.replace(/(^\s*)|(\s*$)/gi,""),n=n.replace(/[\x00-\x1F]/gi,""),n=n.replace(/\n /,`
`),n},t.hashString=function(n){for(n=t.cleanString(n),a(n),r=0;r<n.length;r++)for(g=n.charCodeAt(r),e=0;e<o;e++)i[e]-=a(g),i[e]<0&&(i[e]+=1)},t.seed=function(n){(typeof n=="undefined"||n===null)&&(n=Math.random()),typeof n!="string"&&(n=m(n,function(l,h){return typeof h=="function"?h.toString():h})),t.initState(),t.hashString(n)},t.addEntropy=function(){var n=[];for(r=0;r<arguments.length;r++)n.push(arguments[r]);d(g+++new Date().getTime()+n.join("")+Math.random())},t.initState=function(){for(a(),r=0;r<o;r++)i[r]=a(" ");s=1,u=o},t.done=function(){a=null},typeof f!="undefined"&&t.seed(f),t.range=function(n){return t(n)},t.random=function(){return t(Number.MAX_VALUE-1)/Number.MAX_VALUE},t.floatBetween=function(n,l){return t.random()*(l-n)+n},t.intBetween=function(n,l){return Math.floor(t.random()*(l-n+1))+n},t}()};v.create=function(f){return new v(f)};var y=v;export{y as r};
