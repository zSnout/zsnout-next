if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/404.37dd048a.js",revision:null},{url:"assets/AceEditor.421757e6.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/BlobbyGradient.7df44841.css",revision:null},{url:"assets/BlobbyGradient.a7891e57.js",revision:null},{url:"assets/BookmarkIcon.767ecbb7.css",revision:null},{url:"assets/BookmarkIcon.e05c9dfb.js",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/Card.3ed57466.css",revision:null},{url:"assets/Card.556bf102.js",revision:null},{url:"assets/CodeEditor.186ed439.js",revision:null},{url:"assets/Compiler.b033aa29.js",revision:null},{url:"assets/compiler3.e1bd1ac4.js",revision:null},{url:"assets/ComplexExplorer.30a7ad98.js",revision:null},{url:"assets/ComplexExplorer.49fcb727.css",revision:null},{url:"assets/Console.346e9a75.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/CoordinateCanvas2d.5f5fdb64.js",revision:null},{url:"assets/DocumentDisplay.7db56506.css",revision:null},{url:"assets/DocumentDisplay.8b35b446.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.c9868fcf.js",revision:null},{url:"assets/Editor2.8671d363.js",revision:null},{url:"assets/Editor3.6d0631ae.js",revision:null},{url:"assets/Ellipses.a306d576.css",revision:null},{url:"assets/Ellipses.a71bb75c.js",revision:null},{url:"assets/Evaluator.80321fbd.js",revision:null},{url:"assets/Fireline.151f38ac.js",revision:null},{url:"assets/Fireline.e2d27f77.css",revision:null},{url:"assets/FractalExplorer.c548bb8a.js",revision:null},{url:"assets/FractalExplorer.dbc86218.css",revision:null},{url:"assets/FractalPresets.26b4fab1.js",revision:null},{url:"assets/FullscreenDisplay.6f4d90d7.js",revision:null},{url:"assets/FullscreenDisplay.d5d9306c.css",revision:null},{url:"assets/Grid.8ae0b3c4.js",revision:null},{url:"assets/Home.275c3d56.css",revision:null},{url:"assets/Home.300556a7.js",revision:null},{url:"assets/ImageCard.5a7fb2ef.css",revision:null},{url:"assets/ImageCard.8206a865.js",revision:null},{url:"assets/Index.0e07785d.js",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/index.a1310079.js",revision:null},{url:"assets/Index.ae3dda49.js",revision:null},{url:"assets/index.b3c9091c.css",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/Index.f6e11348.js",revision:null},{url:"assets/InlineCheckboxField.364c26f5.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineField.9a075872.js",revision:null},{url:"assets/InlineField.aec3398f.css",revision:null},{url:"assets/InlineRangeField.98fc63de.css",revision:null},{url:"assets/InlineRangeField.ccad712a.js",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/Labeled.8d5cfbc4.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Leopards.f4633e28.js",revision:null},{url:"assets/Mandelbrot.c9dc728b.js",revision:null},{url:"assets/Metaballs.f8f9432d.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.928c3878.js",revision:null},{url:"assets/MyNotes.3fbea9c6.js",revision:null},{url:"assets/MyNotes.c2fb4be9.css",revision:null},{url:"assets/Note.7c1584ee.css",revision:null},{url:"assets/Note.c63d7707.js",revision:null},{url:"assets/PixelatedRainbow.4db776a8.js",revision:null},{url:"assets/preset.eaf823b8.js",revision:null},{url:"assets/ReactionTimeTester.120219a8.css",revision:null},{url:"assets/ReactionTimeTester.cd9c7ea1.js",revision:null},{url:"assets/Rectangles.00e983ae.css",revision:null},{url:"assets/Rectangles.1fcdb7b7.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.e6ee54d3.js",revision:null},{url:"assets/SearchableCardGrid.04062e1c.css",revision:null},{url:"assets/SearchableCardGrid.d1c698ba.js",revision:null},{url:"assets/Slider.62079ab9.css",revision:null},{url:"assets/Slider.b4d68eb5.js",revision:null},{url:"assets/Title.66d72a53.css",revision:null},{url:"assets/Title.abbb2100.js",revision:null},{url:"assets/Turntable.7ab57ce6.js",revision:null},{url:"assets/Turntable.92183cea.css",revision:null},{url:"assets/Uniforms.c98c64bc.js",revision:null},{url:"assets/useCanvas.4ad1143c.js",revision:null},{url:"assets/useGlsl.b990d597.js",revision:null},{url:"assets/useLocationHash.2aa7a2c1.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useOption.b09d55b1.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/v1-editor.a031635c.js",revision:null},{url:"assets/v2-compiler.c79b3839.js",revision:null},{url:"assets/v2-editor.d33cb47e.js",revision:null},{url:"assets/v3-compiler.2d214adf.js",revision:null},{url:"assets/v3-editor.cb6dae4c.js",revision:null},{url:"assets/v4-compiler.e3d0398b.js",revision:null},{url:"assets/v4-editor.d4374ae7.js",revision:null},{url:"assets/Verify.9de44e08.js",revision:null},{url:"assets/WebGlCanvas.bb7b2735.js",revision:null},{url:"index.html",revision:"09d8cb7293eabf9b6a8aa9ab33830561"},{revision:null,url:"./public/404.html"},{revision:null,url:"./public/CNAME"},{revision:null,url:"./public/browserconfig.xml"},{revision:null,url:"./public/favicon.ico"},{revision:null,url:"./public/manifest.json"},{revision:null,url:"./public/robots.txt"},{revision:null,url:"./public/safari-pinned-tab.svg"},{revision:null,url:"./public/zsnout.icns"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
