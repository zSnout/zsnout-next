if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/404.760283ab.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/AceEditor.fac4aa8b.js",revision:null},{url:"assets/BlobbyGradient.1d0ff2bc.js",revision:null},{url:"assets/BlobbyGradient.7df44841.css",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/Card.3ed57466.css",revision:null},{url:"assets/Card.7c683070.js",revision:null},{url:"assets/CodeEditor.08f9bd81.js",revision:null},{url:"assets/Compiler.97fe2c31.js",revision:null},{url:"assets/compiler3.8ff8648d.js",revision:null},{url:"assets/Console.63447400.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/CoordinateCanvas2d.aefaef87.js",revision:null},{url:"assets/DocumentDisplay.253e4667.js",revision:null},{url:"assets/DocumentDisplay.49993fc8.css",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.6c52a513.js",revision:null},{url:"assets/Editor2.06df2327.js",revision:null},{url:"assets/Editor3.40769e4b.js",revision:null},{url:"assets/Ellipses.a306d576.css",revision:null},{url:"assets/Ellipses.bd52f4e1.js",revision:null},{url:"assets/Evaluator.ec8ea944.js",revision:null},{url:"assets/Field.55d40313.css",revision:null},{url:"assets/Field.8032f1a2.js",revision:null},{url:"assets/Fireline.576f6c10.js",revision:null},{url:"assets/Fireline.e2d27f77.css",revision:null},{url:"assets/FractalExplorer.98226ded.css",revision:null},{url:"assets/FractalExplorer.e030ec45.js",revision:null},{url:"assets/FractalPresets.dbe6c7ba.js",revision:null},{url:"assets/FullscreenDisplay.5fac8d1f.js",revision:null},{url:"assets/FullscreenDisplay.b0cd83ae.css",revision:null},{url:"assets/Grid.32af0d59.js",revision:null},{url:"assets/Home.64d0f214.js",revision:null},{url:"assets/Home.94f1d16f.css",revision:null},{url:"assets/ImageCard.5f9f3c43.js",revision:null},{url:"assets/ImageCard.77472d4f.css",revision:null},{url:"assets/index.039a2088.js",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/index.4e70ee86.css",revision:null},{url:"assets/Index.86044642.js",revision:null},{url:"assets/Index.93bb29de.js",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/Index.d942bb37.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineCheckboxField.c141f40f.js",revision:null},{url:"assets/InlineRangeField.26711acb.js",revision:null},{url:"assets/InlineRangeField.60b16e4c.css",revision:null},{url:"assets/Labeled.556886c8.css",revision:null},{url:"assets/Labeled.94913c62.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Leopards.e9335bc9.js",revision:null},{url:"assets/Mandelbrot.5f85182d.js",revision:null},{url:"assets/Metaballs.08f9f956.js",revision:null},{url:"assets/Modal.4242ea3e.css",revision:null},{url:"assets/Modal.514f504f.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.5bdc914e.js",revision:null},{url:"assets/preset.a65ba8e1.js",revision:null},{url:"assets/ReactionTimeTester.120219a8.css",revision:null},{url:"assets/ReactionTimeTester.abcfdd2f.js",revision:null},{url:"assets/Rectangles.00e983ae.css",revision:null},{url:"assets/Rectangles.8c3b7e53.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.7979d876.js",revision:null},{url:"assets/Slider.21b55b16.js",revision:null},{url:"assets/Slider.62079ab9.css",revision:null},{url:"assets/Title.119d32f9.js",revision:null},{url:"assets/Title.b9f64f10.css",revision:null},{url:"assets/Turntable.73aef56c.js",revision:null},{url:"assets/Turntable.92183cea.css",revision:null},{url:"assets/Uniforms.7b4f8f86.js",revision:null},{url:"assets/useCanvas.d8ecd346.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useLocationHash.d8ba1e2f.js",revision:null},{url:"assets/useOption.7b66f556.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/v1-editor.f2cce5bd.js",revision:null},{url:"assets/v2-compiler.bcc673af.js",revision:null},{url:"assets/v2-editor.9f72dd4f.js",revision:null},{url:"assets/v3-compiler.9de3a9d3.js",revision:null},{url:"assets/v3-editor.e7f810f0.js",revision:null},{url:"assets/v4-compiler.af46796f.js",revision:null},{url:"assets/v4-editor.672712d7.js",revision:null},{url:"assets/WebGlCanvas.9a913ace.js",revision:null},{url:"index.html",revision:"0c4e0414412e6a3fe09bf2c32d0981d2"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
