if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const a=s=>l(s,i),o={module:{uri:i},exports:u,require:a};e[i]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/404.290bb94c.js",revision:null},{url:"assets/AceEditor.74d0c5ba.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/BlobbyGradient.631f46e8.js",revision:null},{url:"assets/BlobbyGradient.7df44841.css",revision:null},{url:"assets/BookmarkIcon.767ecbb7.css",revision:null},{url:"assets/BookmarkIcon.89c237e3.js",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/Card.3ed57466.css",revision:null},{url:"assets/Card.50f05108.js",revision:null},{url:"assets/CardGrid.153f9e67.js",revision:null},{url:"assets/CardGrid.efd7c596.css",revision:null},{url:"assets/CodeEditor.4f75f858.js",revision:null},{url:"assets/Compiler.b6cc8ceb.js",revision:null},{url:"assets/compiler3.e1bd1ac4.js",revision:null},{url:"assets/ComplexExplorer.49fcb727.css",revision:null},{url:"assets/ComplexExplorer.ffd132dd.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/Console.d2f546da.js",revision:null},{url:"assets/CoordinateCanvas2d.b0efc357.js",revision:null},{url:"assets/DocumentDisplay.7db56506.css",revision:null},{url:"assets/DocumentDisplay.e91eaf36.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.39c07b93.js",revision:null},{url:"assets/Editor2.58adcc25.js",revision:null},{url:"assets/Editor3.487f9adf.js",revision:null},{url:"assets/Ellipses.94d441dd.js",revision:null},{url:"assets/Ellipses.a306d576.css",revision:null},{url:"assets/Evaluator.a07b89f6.js",revision:null},{url:"assets/Fireline.a1d0b904.js",revision:null},{url:"assets/Fireline.e2d27f77.css",revision:null},{url:"assets/FractalExplorer.6a0043ee.js",revision:null},{url:"assets/FractalExplorer.dbc86218.css",revision:null},{url:"assets/FractalPresets.2fc5e87a.js",revision:null},{url:"assets/FullscreenDisplay.0547f4be.js",revision:null},{url:"assets/FullscreenDisplay.d5d9306c.css",revision:null},{url:"assets/Grid.648392ac.js",revision:null},{url:"assets/Home.58055100.js",revision:null},{url:"assets/Home.9e2f933f.css",revision:null},{url:"assets/ImageCard.471a301c.js",revision:null},{url:"assets/ImageCard.5a7fb2ef.css",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/Index.39907acb.js",revision:null},{url:"assets/Index.3f3d3c31.js",revision:null},{url:"assets/index.b3c9091c.css",revision:null},{url:"assets/Index.b563183b.js",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/index.d2bfa997.js",revision:null},{url:"assets/InlineCheckboxField.4c00d0b3.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineField.aec3398f.css",revision:null},{url:"assets/InlineField.f9040920.js",revision:null},{url:"assets/InlineRangeField.98fc63de.css",revision:null},{url:"assets/InlineRangeField.f243487c.js",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/Labeled.76d95896.js",revision:null},{url:"assets/Leopards.5efba24f.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Mandelbrot.98b62eef.js",revision:null},{url:"assets/Metaballs.4e2ff315.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.5ff98f82.js",revision:null},{url:"assets/MyAccount.cc6a421c.js",revision:null},{url:"assets/MyNotes.4d744754.js",revision:null},{url:"assets/MyNotes.c2fb4be9.css",revision:null},{url:"assets/Note.7c1584ee.css",revision:null},{url:"assets/Note.a0e699cf.js",revision:null},{url:"assets/PixelatedRainbow.693e40ce.js",revision:null},{url:"assets/preset.e16bb283.js",revision:null},{url:"assets/RainbowBlobs.91ad66a6.js",revision:null},{url:"assets/ReactionTimeTester.120219a8.css",revision:null},{url:"assets/ReactionTimeTester.7ce962b2.js",revision:null},{url:"assets/Rectangles.00e983ae.css",revision:null},{url:"assets/Rectangles.03b88034.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.a1aff6af.js",revision:null},{url:"assets/SearchableCardGrid.24bfb43a.js",revision:null},{url:"assets/SearchableCardGrid.986c3045.css",revision:null},{url:"assets/Slider.62079ab9.css",revision:null},{url:"assets/Slider.669ba66e.js",revision:null},{url:"assets/Title.10c65c34.js",revision:null},{url:"assets/Title.66d72a53.css",revision:null},{url:"assets/Turntable.08a66fcd.js",revision:null},{url:"assets/Turntable.92183cea.css",revision:null},{url:"assets/Uniforms.f91ebad4.js",revision:null},{url:"assets/useCanvas.8e9e8691.js",revision:null},{url:"assets/useGlsl.b990d597.js",revision:null},{url:"assets/useLocationHash.471f6217.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useOption.a51221b5.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/v1-editor.b8c934ba.js",revision:null},{url:"assets/v2-compiler.b55011db.js",revision:null},{url:"assets/v2-editor.8864304c.js",revision:null},{url:"assets/v3-compiler.123d5817.js",revision:null},{url:"assets/v3-editor.c02facfb.js",revision:null},{url:"assets/v4-compiler.f81a1c81.js",revision:null},{url:"assets/v4-editor.0a75da07.js",revision:null},{url:"assets/VerifyAccount.ce30310c.js",revision:null},{url:"assets/WebGlCanvas.f5256585.js",revision:null},{url:"index.html",revision:"1fcd42cbceb2875f62b7a19900857120"},{revision:null,url:"/404.html"},{revision:null,url:"/CNAME"},{revision:null,url:"/android-chrome-192x192.png"},{revision:null,url:"/android-chrome-512x512.png"},{revision:null,url:"/apple-touch-icon.png"},{revision:null,url:"/browserconfig.xml"},{revision:null,url:"/favicon-16x16.png"},{revision:null,url:"/favicon-32x32.png"},{revision:null,url:"/favicon.ico"},{revision:null,url:"/manifest.json"},{revision:null,url:"/mstile-150x150.png"},{revision:null,url:"/pwa-192x192.png"},{revision:null,url:"/pwa-512x512.png"},{revision:null,url:"/robots.txt"},{revision:null,url:"/safari-pinned-tab.svg"},{revision:null,url:"/zsnout.icns"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
