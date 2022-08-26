import{u as j,E as C}from"./useLocationHash.3492df39.js";import{d as f,_ as S}from"./index.f00d89be.js";import{u as V,C as E}from"./Console.26d38125.js";import{d as w,aj as O,ap as U,a2 as W,o as h,c as b,u as n,aI as u,w as $,b as y}from"./index.2148704c.js";import"./DocumentDisplay.a9be3593.js";import"./Navigation.8aac1364.js";import"./SharedNav.4f264098.js";import"./Button.49e3d367.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Logo.a5db1501.js";import"./LogoLight.e95f066b.js";import"./AceEditor.b4cd0e18.js";import"./_commonjsHelpers.294d03c4.js";import"./__vite-browser-external.2d3e1c2d.js";import"./Dropdown.5ee328c2.js";import"./Labeled.85289d69.js";const z=w({__name:"Viewer4",props:{code:null},setup(g){const s=g,{console:p,field:a,messages:r,onKey:_,onSelect:x,onSubmit:k,placeholder:m}=V(),v=Object.getPrototypeOf(async function(){}).constructor;function c(){p.clear(),m.value="",Object.assign(window,p),Object.assign(window,{print:p.log,jsx(l,e,...t){if(typeof l=="string"){let i=document.createElement(l);for(let o in e)if(o==="style")for(let d in e.style)i.style[d]=e.style[d];else o.startsWith("data")?i.dataset[o.slice(4)]=e[o]:o.startsWith("on")?i.addEventListener(o.slice(2,3).toUpperCase()+o.slice(3),e[o]):i[o]=e[o];for(let o of t.flat(1/0))o instanceof Node||typeof o=="string"?i.append(o):i.append(""+o);return i}try{return new l(t.length?{...e,children:t}:e)}catch{return l(t.length?{...e,children:t}:e)}}}),new v(f.transpile(f.compile(s.code),{jsx:"jsx",target:99}))()}return c(),O(W(s,"code"),U(c,1e3)),(l,e)=>(h(),b(E,{field:n(a),"onUpdate:field":e[0]||(e[0]=t=>u(a)?a.value=t:null),messages:n(r),"onUpdate:messages":e[1]||(e[1]=t=>u(r)?r.value=t:null),placeholder:n(m),onKey:n(_),onSelect:n(x),onSubmit:n(k)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),Q=w({__name:"v4-editor",setup(g){const s=j(`money = 500
eggs = 0
name = await prompt "What is your name?"

market = ->
  print "#{name}, you have $#{money} and #{eggs} dozen eggs."
  idx = await select "What would you like to buy?", ["Eggs", "Go Back"]
  if idx == 0
    await eggsfn()
  await market()

eggsfn = ->
  egg = +(await prompt "How many dozen eggs do you want to buy?")
  eggprice = 6 * egg
  print "#{egg} dozen eggs will cost $#{eggprice}."
  if money > eggprice
    idx = await select "Are you sure you want to buy them?", ["Yes", "No"]
    if idx == 0
      money -= eggprice
      eggs += egg
    else
      print "Okay, let's go back to the store."
  else if money == eggprice
    print "You have just enough money for these eggs."
    money -= eggprice
    eggs += egg
  else
    print "You don't have enough money for these eggs!"

await market()`);return(p,a)=>(h(),b(C,null,{default:$(()=>[y(S,{modelValue:n(s),"onUpdate:modelValue":a[0]||(a[0]=r=>u(s)?s.value=r:null),round:""},null,8,["modelValue"]),y(z,{code:n(s),round:""},null,8,["code"])]),_:1}))}});export{Q as default};
