import{S as p,V as u,W as f,Q as n}from"./index.r4ltaips.js";const r=p("history");function c(o,t){return!r[o]&&t!==void 0&&typeof t!="boolean"&&(r[o]=""+t),f({get(){return r[o],typeof t=="boolean"?r[o]==="true":typeof t=="number"?+r[o]:""+r[o]},set(e){if(typeof e=="boolean"){e?r[o]="true":delete r[o];return}r[o]=""+e}})}function i(o,t){const e=c(o,t.value);t.value=e.value;const s=u(e,t,{direction:"rtl"});return n(s),s}export{r as p,i as s};
