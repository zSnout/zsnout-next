if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/3d.3cd2b80f.js",revision:null},{url:"assets/404.1ebe6576.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/AceEditor.c059d7ee.js",revision:null},{url:"assets/ascii-art.f128cd2e.js",revision:null},{url:"assets/blobby-gradient.048c8bf8.css",revision:null},{url:"assets/blobby-gradient.68bf85ae.js",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/camera-modifier.85ea300a.js",revision:null},{url:"assets/Card.03446c7a.css",revision:null},{url:"assets/Card.b6100356.js",revision:null},{url:"assets/CardGrid.973f5cc8.js",revision:null},{url:"assets/CardGrid.dbda6991.css",revision:null},{url:"assets/code-editor.61a0c1ab.js",revision:null},{url:"assets/ColorSliders.d752f1ad.js",revision:null},{url:"assets/compiler.6aa89948.js",revision:null},{url:"assets/compiler3.e1bd1ac4.js",revision:null},{url:"assets/complex-explorer.2af320e7.js",revision:null},{url:"assets/complex-explorer.833402f6.css",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/Console.8ce30d4d.js",revision:null},{url:"assets/CoordinateCanvas2d.914e4461.js",revision:null},{url:"assets/DocumentDisplay.4e8723c3.css",revision:null},{url:"assets/DocumentDisplay.8369221e.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.42863de8.js",revision:null},{url:"assets/Editor2.272802f3.js",revision:null},{url:"assets/Editor3.da13d4e2.js",revision:null},{url:"assets/Ellipses.36620f5a.js",revision:null},{url:"assets/Ellipses.bab09200.css",revision:null},{url:"assets/evaluator.df9d0786.js",revision:null},{url:"assets/Fireline.5e7e2131.js",revision:null},{url:"assets/Fireline.8f18e393.css",revision:null},{url:"assets/fractal-explorer.2860e231.js",revision:null},{url:"assets/fractal-explorer.e96558c2.css",revision:null},{url:"assets/fractal-presets.7b099cc9.js",revision:null},{url:"assets/FullscreenDisplay.1f6e85b0.js",revision:null},{url:"assets/FullscreenDisplay.a2b370ee.css",revision:null},{url:"assets/Grid.eb767fd3.js",revision:null},{url:"assets/hands-free-slides.2a04d325.css",revision:null},{url:"assets/hands-free-slides.97eb7a9f.js",revision:null},{url:"assets/home.685e054d.js",revision:null},{url:"assets/home.d373c8e5.css",revision:null},{url:"assets/hyperbolic-explorer.b7d6ab9a.js",revision:null},{url:"assets/ImageCard.8ac270bd.js",revision:null},{url:"assets/ImageCard.cfdacb28.css",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/Index.237d5db2.js",revision:null},{url:"assets/index.3d838245.css",revision:null},{url:"assets/index.6d5d5256.js",revision:null},{url:"assets/index.aa878174.js",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/index.c354d83f.js",revision:null},{url:"assets/Index.d4fb1e53.js",revision:null},{url:"assets/Index.ecfeb77a.js",revision:null},{url:"assets/index.f15694d0.js",revision:null},{url:"assets/index.f2471d60.css",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineCheckboxField.b2641c37.js",revision:null},{url:"assets/InlineField.69880ce9.js",revision:null},{url:"assets/InlineField.aec3398f.css",revision:null},{url:"assets/InlineRangeField.738da3a2.js",revision:null},{url:"assets/InlineRangeField.7c5af70c.css",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/Labeled.8a854694.js",revision:null},{url:"assets/LargeTitle.d06e1770.js",revision:null},{url:"assets/LargeTitle.f68362eb.css",revision:null},{url:"assets/leopards.5b2dcd21.js",revision:null},{url:"assets/leopards.d1151646.css",revision:null},{url:"assets/Logo.ce721561.js",revision:null},{url:"assets/LogoLight.caf21da2.js",revision:null},{url:"assets/made-on-iphone.e48fe1f1.js",revision:null},{url:"assets/Mandelbrot.984aa9e6.js",revision:null},{url:"assets/maze-game.cf20c7c1.css",revision:null},{url:"assets/maze-game.e5d5f453.js",revision:null},{url:"assets/Metaballs.488efd61.js",revision:null},{url:"assets/MiddleText.237fd31b.css",revision:null},{url:"assets/MiddleText.b95576d7.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.44e369b1.js",revision:null},{url:"assets/my-account.5a9a8595.js",revision:null},{url:"assets/my-notes.2ddb0a95.css",revision:null},{url:"assets/my-notes.fd26cb5b.js",revision:null},{url:"assets/Navigation.1a6f2d22.css",revision:null},{url:"assets/Navigation.b726b2c6.js",revision:null},{url:"assets/note.50689923.css",revision:null},{url:"assets/note.96e1a862.js",revision:null},{url:"assets/os.bbe5e059.css",revision:null},{url:"assets/os.e9584c54.js",revision:null},{url:"assets/pixelated-rainbow.b9f9aa12.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/preset.4a7750df.js",revision:null},{url:"assets/privacy-policy.c85f06e7.js",revision:null},{url:"assets/Prose.41761c68.js",revision:null},{url:"assets/Prose.703837e7.css",revision:null},{url:"assets/rainbow-blobs.8f78b30f.js",revision:null},{url:"assets/reaction-time-tester.5832d52d.js",revision:null},{url:"assets/reaction-time-tester.e89fb1be.css",revision:null},{url:"assets/Rectangles.5707e4b8.css",revision:null},{url:"assets/Rectangles.afed588f.js",revision:null},{url:"assets/remote-typewriter.6b59c689.css",revision:null},{url:"assets/remote-typewriter.980ce44f.js",revision:null},{url:"assets/same-number-generator.bcb2b435.js",revision:null},{url:"assets/same-number-generator.d267ba73.css",revision:null},{url:"assets/SearchableCardGrid.05fbc736.css",revision:null},{url:"assets/SearchableCardGrid.3a1ffa58.js",revision:null},{url:"assets/SharedNav.4062bd1a.css",revision:null},{url:"assets/SharedNav.acbd10e1.js",revision:null},{url:"assets/Slider.aad7230c.js",revision:null},{url:"assets/Slider.f7b01f38.css",revision:null},{url:"assets/Title.41b02a49.js",revision:null},{url:"assets/Title.b0bfa2ee.css",revision:null},{url:"assets/trope-highlighter.25633526.css",revision:null},{url:"assets/trope-highlighter.3dac1f03.js",revision:null},{url:"assets/Turntable.29be99b9.js",revision:null},{url:"assets/Turntable.c785f725.css",revision:null},{url:"assets/Uniforms.5182e11e.js",revision:null},{url:"assets/useCanvas.fb2433a5.js",revision:null},{url:"assets/useGlsl.9495b1d0.js",revision:null},{url:"assets/useHomeIcons.c33d8cea.js",revision:null},{url:"assets/useLocationHash.6e3d4340.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useOption.9dddd1b3.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/useVideoFromStream.5bb36c69.js",revision:null},{url:"assets/v1-editor.5306a95e.js",revision:null},{url:"assets/v2-compiler.6f8fe50f.js",revision:null},{url:"assets/v2-editor.736bb655.js",revision:null},{url:"assets/v3-compiler.84a8ac34.js",revision:null},{url:"assets/v3-editor.895e03db.js",revision:null},{url:"assets/v4-compiler.d9597dd5.js",revision:null},{url:"assets/v4-editor.2f4bb880.js",revision:null},{url:"assets/v6.0b3209ae.css",revision:null},{url:"assets/v6.aca06c8a.js",revision:null},{url:"assets/verify-account.3ca3d1eb.js",revision:null},{url:"assets/VStack.0421b3da.css",revision:null},{url:"assets/VStack.2104fd60.js",revision:null},{url:"assets/WebGlCanvas.661bea8b.js",revision:null},{url:"index.html",revision:"50bb37639c1df38d337ee49949715884"},{revision:null,url:"/100-free.png"},{revision:null,url:"/CNAME"},{revision:null,url:"/ad-wall.jpg"},{revision:null,url:"/android-chrome-192x192.png"},{revision:null,url:"/android-chrome-512x512.png"},{revision:null,url:"/apple-touch-icon.png"},{revision:null,url:"/browserconfig.xml"},{revision:null,url:"/favicon-16x16.png"},{revision:null,url:"/favicon-32x32.png"},{revision:null,url:"/favicon.ico"},{revision:null,url:"/github.png"},{revision:null,url:"/manifest.json"},{revision:null,url:"/mstile-150x150.png"},{revision:null,url:"/open-source-word-cloud.webp"},{revision:null,url:"/pwa-192x192.png"},{revision:null,url:"/pwa-512x512.png"},{revision:null,url:"/robots.txt"},{revision:null,url:"/safari-pinned-tab.svg"},{revision:null,url:"/zsnout.icns"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
