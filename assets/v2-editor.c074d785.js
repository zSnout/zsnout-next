var K=Object.defineProperty;var f=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var a=(i,r,t)=>r in i?K(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,h=(i,r)=>{for(var t in r||(r={}))j.call(r,t)&&a(i,t,r[t]);if(f)for(var t of f(r))l.call(r,t)&&a(i,t,r[t]);return i};import{u as z,E as B}from"./useLocationHash.e46d30af.js";import{S as s,_ as O}from"./Editor2.3dcfec01.js";import{u as R}from"./useTypewrite.705f091f.js";import{u as U,C as Y}from"./Console.dc65048a.js";import{d as v,E as A,aR as H,a5 as L,o as S,c as C,u,x as $,w as N,b as _}from"./index.7b903477.js";import"./DocumentDisplay.4dcf8d61.js";import"./BookmarkIcon.ab5cd17e.js";import"./AceEditor.ca3a1462.js";import"./Dropdown.e61bccd2.js";import"./Labeled.5bd73328.js";const W=v({__name:"Viewer2",props:{code:null},setup(i){const r=i,{console:t,field:g,messages:m,onKey:E,onSelect:V,onSubmit:x,placeholder:y}=U();s.tooltip=(e,o)=>{y.value=e,o==null||o()},s.write=(e,o)=>{t.log(e),o==null||o()},s.print=(e,o)=>{s.write(e,()=>{s.tooltip("Press Enter to continue...",()=>{s.waitFor("Enter",!0,()=>{s.tooltip("",o)})})})},s.image=(e,o)=>{const n=new Image;n.src=e,t.log(n),o==null||o()},s.line=e=>{t.line(),e==null||e()},s.clear=e=>{t.clear(),e==null||e()},s.type=(e,o,n)=>{const{el:d,done:F}=R(e,o);t.log(d),F.then(n)},s.input=async(e,o)=>{const n=await t.prompt(e,!0);o==null||o(n)},s.choice=async(e,o,n)=>{const d=await t.select(e,h({},o));n==null||n(d)},s.waitFor=async(e,o,n)=>{Object.assign(window,{c:t}),o?t.key(e).then(()=>n==null?void 0:n(e)):t.bindKey(e,()=>n==null?void 0:n(e))};let p;function w(){t.clear(),p&&(p.stopped=!0),p=new s(r.code,e=>{s.waitingFor.splice(0,s.waitingFor.length),s.tooltip("",()=>{s.clear(()=>{e.start()})})}),Object.assign(window,{prev:p})}return w(),A(L(r,"code"),H(w,1e3)),(e,o)=>(S(),C(Y,{field:u(g),"onUpdate:field":o[0]||(o[0]=n=>$(g)?g.value=n:null),messages:u(m),"onUpdate:messages":o[1]||(o[1]=n=>$(m)?m.value=n:null),placeholder:u(y),onKey:u(E),onSelect:u(V),onSubmit:u(x)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),c=v({__name:"v2-editor",setup(i){const r=z(`#importall

$money = 500
$eggs = 0
$name = no name

@start
  @input $name What is your name?
  @market

@market
  $name, you have $$$money and $eggs dozen eggs.
  @if $money < 6
    Looks like you're out of money!
  @else
    @menu What would you like to buy?
      @option Eggs
        @eggs
      @option Go Back
    @market

@eggs
  @number $egg How many dozens do you want to buy?
  $eggprice @= 6 * $egg
  @nowait $egg dozen eggs will cost $$$eggprice.
  @if $money > $eggprice
    @menu Are you sure you want to buy them?
      @option Yes
        $money -= $eggprice
        $eggs += $egg
      @option No
        Okay, let's go back to the store.
  @elseif $money = $eggprice
    You have just enough money for these eggs.
    $money -= $eggprice
    $eggs += $egg
  @else
    You don't have enough money for these eggs!`);return(t,g)=>(S(),C(B,null,{default:N(()=>[_(O,{modelValue:u(r),"onUpdate:modelValue":g[0]||(g[0]=m=>$(r)?r.value=m:null),round:""},null,8,["modelValue"]),_(W,{code:u(r)},null,8,["code"])]),_:1}))}});export{c as default};
