if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.a64aa4ad.js",revision:null},{url:"assets/404.33c9def6.js",revision:null},{url:"assets/AceEditor.25479aa8.js",revision:null},{url:"assets/AceEditor.a9b1039c.css",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/CodeEditor.304cf5cb.js",revision:null},{url:"assets/DocumentDisplay.670ddeee.css",revision:null},{url:"assets/DocumentDisplay.6ea220d1.js",revision:null},{url:"assets/Field.55d40313.css",revision:null},{url:"assets/Field.c4c323c6.js",revision:null},{url:"assets/FractalExplorer.048ab749.js",revision:null},{url:"assets/FractalExplorer.058ce775.css",revision:null},{url:"assets/FullscreenDisplay.757c2a15.js",revision:null},{url:"assets/FullscreenDisplay.b0cd83ae.css",revision:null},{url:"assets/Grid.b8268ad6.js",revision:null},{url:"assets/Home.3ea68da2.js",revision:null},{url:"assets/Index.3ac7da50.js",revision:null},{url:"assets/index.6a561964.js",revision:null},{url:"assets/index.739abbd4.js",revision:null},{url:"assets/Index.a12660e1.js",revision:null},{url:"assets/index.afbb7d81.css",revision:null},{url:"assets/InlineCheckboxField.3e051f2d.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/Labeled.c9463233.css",revision:null},{url:"assets/Labeled.eea72bb0.js",revision:null},{url:"assets/Leopards.7a3b7679.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Mandelbrot.85801348.js",revision:null},{url:"assets/Modal.4242ea3e.css",revision:null},{url:"assets/Modal.a1d18204.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.d31428f0.js",revision:null},{url:"assets/Title.bca8b331.js",revision:null},{url:"assets/Title.eae9c088.css",revision:null},{url:"assets/Uniforms.b18efbac.js",revision:null},{url:"assets/useLocationHash.981b1739.js",revision:null},{url:"assets/useMovableCanvas.99ae2b92.js",revision:null},{url:"assets/useWebGL.555236f1.js",revision:null},{url:"assets/v1.15fe656f.css",revision:null},{url:"assets/v1.bc698557.js",revision:null},{url:"assets/v2.c48e1f0c.css",revision:null},{url:"assets/v2.c6683d50.js",revision:null},{url:"index.html",revision:"2b2b4ff198981594c07aa8b9441dc600"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
