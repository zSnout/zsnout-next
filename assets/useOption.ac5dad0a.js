import{a3 as p,a4 as u,a5 as f,a2 as n}from"./index.15748092.js";const r=p("history");function c(o,t){return!r[o]&&t!==void 0&&typeof t!="boolean"&&(r[o]=""+t),u({get(){return r[o],typeof t=="boolean"?r[o]==="true":typeof t=="number"?+r[o]:""+r[o]},set(e){if(typeof e=="boolean"){e?r[o]="true":delete r[o];return}r[o]=""+e}})}function a(o,t){const e=c(o,t.value);t.value=e.value;const s=f(e,t,{direction:"rtl"});return n(s),s}export{r as p,a as s};
