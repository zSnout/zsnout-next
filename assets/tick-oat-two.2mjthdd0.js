import{B,V as O}from"./VStack.xad5wxbj.js";import{D as H}from"./DocumentDisplay.633jhlro.js";import{H as S}from"./BookmarkIcon.1thszj4g.js";import{s as j}from"./useShuffle.kk0aghuw.js";import{d as q,I as z,q as _,o as y,c as J,w as o,e as v,a as r,t as m,b as h,h as g,E as V,F as D,n as L,p as R,l as U,_ as W}from"./index.v5ospewp.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4huvb0n5.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./Field.2ydu2jt8.js";const Y=f=>(R("data-v-0ebd9d9a"),f=f(),U(),f),$=Y(()=>r("p",null,[h(" Based on "),r("a",{href:"https://www.youtube.com/watch?v=ePxrVU4M9uA"}," TickoaTTwo by Oats Jenkins"),h(". Fun fact: the second player can always win. Try playing with the AI as the second player and you will never win. ")],-1)),G=["onClick"],K=q({__name:"tick-oat-two",setup(f){function A(e){return e[0][0]==3&&e[1][0]==3&&e[2][0]==3||e[0][1]==3&&e[1][1]==3&&e[2][1]==3||e[0][2]==3&&e[1][2]==3&&e[2][2]==3||e[0][0]==3&&e[0][1]==3&&e[0][2]==3||e[1][0]==3&&e[1][1]==3&&e[1][2]==3||e[2][0]==3&&e[2][1]==3&&e[2][2]==3||e[0][0]==3&&e[1][1]==3&&e[2][2]==3||e[0][2]==3&&e[1][1]==3&&e[2][0]==3}function E(e,a,[i,n]=[-1,-1]){const s=[];for(let l=0;l<3;l++)for(let c=0;c<3;c++)(i!=l||n!=c)&&!(e[l][c]&a)&&s.push([l,c]);return s}const k=[" ","\u2013","|","+"];function T(e,a,i){if(A(e))return[void 0,-1];{const n=j(E(e,a,i));for(const s of n){const l=e.map(N=>N.slice());l[s[0]][s[1]]|=a;const[,c]=T(l,3-a,s);if(c==-1)return[s,1]}return[n[0],-1]}}const u=z([[0,0,0],[0,0,0],[0,0,0]]),t=_(1),p=_(t.value),d=_(),w=_(0);let x=0;function F(e,a){p.value==t.value&&(u[e][a]&t.value||(d.value=[e,a],u[e][a]|=t.value,C()))}function C(){p.value=3-t.value,x=setTimeout(()=>{const[e,a]=T(u,3-t.value,d.value);w.value=a,e&&(u[e[0]][e[1]]|=3-t.value,p.value=t.value)},1e3)}function I(){u.forEach(e=>e[0]=e[1]=e[2]=0),p.value=t.value,d.value=void 0,clearTimeout(x),p.value==2&&C()}function M(){t.value=3-t.value,I()}return(e,a)=>(y(),J(H,{center:""},{default:o(()=>[v(O,{style:{width:"19rem"}},{default:o(()=>[$,r("p",null," You are the "+m(t.value==1?"first":"second")+" player ("+m(t.value==1?"red":"blue")+"). ",1),r("p",null," Computer evaluation: "+m(w.value==0?"undecided":w.value==-1?"player will win":"AI will win")+". ",1),v(S,{stretch:""},{default:o(()=>[v(B,{onClick:I},{default:o(()=>[h("Reset")]),_:1}),v(B,{onClick:M},{default:o(()=>[h("Switch")]),_:1})]),_:1}),(y(),g(D,null,V([0,1,2],i=>v(S,null,{default:o(()=>[(y(),g(D,null,V([0,1,2],n=>r("div",{class:"cell second-layer",onClick:s=>F(i,n)},[r("p",{class:L([k[u[i][n]],"colored"])},m(k[u[i][n]]),3)],8,G)),64))]),_:2},1024)),64))]),_:1})]),_:1}))}});const le=W(K,[["__scopeId","data-v-0ebd9d9a"]]);export{le as default};
