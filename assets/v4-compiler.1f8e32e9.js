import{u as p,E as d}from"./useLocationHash.3dec10f5.js";import{d as i,_ as l}from"./index.71dd521c.js";import{A as c}from"./AceEditor.ab7e777b.js";import"./mode-javascript.e6176182.js";import{d as m,ah as y,o as g,c as u,u as a,w as f,b as s,aI as w}from"./index.307c9757.js";import"./DocumentDisplay.9030570c.js";import"./SharedNav.13deb094.js";import"./VStack.a5267f59.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Logo.0710e561.js";import"./LogoLight.1b2c95c2.js";import"./_commonjsHelpers.294d03c4.js";import"./__vite-browser-external.2d3e1c2d.js";const h=m({__name:"Compiler4",props:{code:null,round:{type:Boolean}},setup(o){const e=o,r=y(()=>i.transpile(i.compile(e.code),{typescript:!0}));return(t,n)=>(g(),u(c,{"model-value":a(r),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),j=m({__name:"v4-compiler",setup(o){const e=p(`money = 500
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

await market()`);return(r,t)=>(g(),u(d,{"dual-editor":""},{default:f(()=>[s(l,{modelValue:a(e),"onUpdate:modelValue":t[0]||(t[0]=n=>w(e)?e.value=n:null),round:""},null,8,["modelValue"]),s(h,{code:a(e),round:""},null,8,["code"])]),_:1}))}});export{j as default};
