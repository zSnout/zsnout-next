if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,r)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let d={};const f=s=>a(s,c),b={module:{uri:c},exports:d,require:f};e[c]=Promise.all(i.map((s=>b[s]||f(s)))).then((s=>(r(...s),d)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.32w7an2i.js",revision:"99791a0d58458514a46516fc937840c7"},{url:"assets/_commonjsHelpers.40x35aen.js",revision:"f7df3bdab2561a77804414cdafcf3fcd"},{url:"assets/_virtual_image-list.r1g9ayy6.js",revision:"e07d848ba9cc8df3a7a98ecc8ead2e65"},{url:"assets/3d.5cnddprc.js",revision:"f8c3c79d0ac3189ad1bfac74b03b73f4"},{url:"assets/404.5otctjwv.js",revision:"adf3d2c5a54c0a9ba12d185d229066d3"},{url:"assets/AceEditor.3vlpvk8i.css",revision:"8feca1b01e686c663808f15042f27616"},{url:"assets/AceEditor.5eal9hit.js",revision:"2f7f924e3a3cca35601ee68c2d7941d6"},{url:"assets/ascii-art.4dglbv8o.js",revision:"ba3376960ac8a9628e0ddda4d721123b"},{url:"assets/asides.5ho6kg8y.js",revision:"e6a93e43dacf75d4d66954231e4b035f"},{url:"assets/bingo-master-board.21k4i9bv.css",revision:"7e7290808f389d9c0cc2f747dd684438"},{url:"assets/bingo-master-board.793bnlpd.js",revision:"d6da1204497a760b9b1f406590bdbf92"},{url:"assets/bingo.2hr2ub77.js",revision:"f91c08508c893c29b3f85255da137723"},{url:"assets/bingo.5pbtk6qf.css",revision:"ec11aa026cb6dfa627a8a07990dd4537"},{url:"assets/blobby-gradient.3xee7atq.css",revision:"bfca17295641be062f2f436f87806a6c"},{url:"assets/blobby-gradient.4r964pov.js",revision:"486dd8a1fb19196f0a090f8b195b81ab"},{url:"assets/BookmarkIcon.46krkaf8.js",revision:"0c9fb635943ce6740e8904b37ecc3700"},{url:"assets/BookmarkIcon.ql63k9j5.css",revision:"27b2b181ea6c8fe0067409ab3f947aa4"},{url:"assets/browser.51bopbv1.js",revision:"8d64be762912b751d5053803456bfdab"},{url:"assets/Card.35kcm0si.css",revision:"456ef8165716ea4aa0f82caad4545d6b"},{url:"assets/Card.4h2z4e59.js",revision:"d19ada683739fd90a1f930d03e853a21"},{url:"assets/CardGrid.1kdxvvm0.js",revision:"9ae0abf68e7c3fde1621651a8acd615a"},{url:"assets/CardGrid.5toshyah.css",revision:"edc2c12064821d2d26b70b0fefd80c52"},{url:"assets/chat.411xh9ff.js",revision:"8da34d981a58df488aaa42b60228ef4b"},{url:"assets/chat.55jzuqli.css",revision:"05690ad3dffd9ed0a54393a1c0e4d58a"},{url:"assets/chess.388ta4c2.css",revision:"39504763c65ede03a77ce1f0e5e2530d"},{url:"assets/code-editor.1tlusx4s.js",revision:"5b1193c9cf2113afb7953c3981f139eb"},{url:"assets/collatz-evaluator.1dirlo42.js",revision:"cd5432cac819086d0e3efd5e557f793f"},{url:"assets/collatz-evaluator.57pahtkr.css",revision:"263c088435d30135af8ed412852bbd6b"},{url:"assets/color-effects.dol3y4k3.js",revision:"1847c332eb4474d302bf8e2208ca6f8d"},{url:"assets/ColorSliders.vue_vue_type_script_setup_true_lang.3veqopt4.js",revision:"cb21e40baa295030ffa21d8e49e2eac8"},{url:"assets/compiler.4qlvhir5.js",revision:"7acd0e6d62f2d140be09498c9c0fa3b3"},{url:"assets/compiler3.2myjv9ut.js",revision:"25f9c9b9269c8b942c11e25f239af891"},{url:"assets/complex-explorer.3syr889t.js",revision:"e472b8bccdaa3d01bcffaca8951fa211"},{url:"assets/complex-explorer.isw4amlp.css",revision:"261674ae461d6ffc2e7e2d40bf19295f"},{url:"assets/Console.2vtfnftc.css",revision:"3dac28f3378e4b80bea06b078ea9fad4"},{url:"assets/Console.65z5j7wy.js",revision:"e3ca63b8f1b0a393dbf67c8a04700f70"},{url:"assets/CoordinateCanvas2d.4rt8wdf9.js",revision:"df792dad617b52f23572e0360c87b433"},{url:"assets/dashboard.57zht84h.js",revision:"5010966aec8d7887efa793e9c8f4c4c7"},{url:"assets/dashboard.fr2sskwz.css",revision:"957c420580c554343b6d329a97ebc4e3"},{url:"assets/divisibility-rules.pcbwroat.js",revision:"cdaa2a8f066c45b2be69631b7781b9a5"},{url:"assets/DocumentDisplay.5vb1kpey.css",revision:"61cbe7d767879d46dad8047d072622ee"},{url:"assets/DocumentDisplay.6d0yf2eg.js",revision:"641a0d07291c950cc034d43767b4fad9"},{url:"assets/does-0-equal-1.ibngw25j.js",revision:"f3e8a521ebea23316f258cf0fa9d5a69"},{url:"assets/Dropdown.3t1aedix.css",revision:"b43fb7b43fe4e8711fc20bb1c529ee72"},{url:"assets/Dropdown.5phpgqpn.js",revision:"374df9bbcde43e0e710fba09a1ff2366"},{url:"assets/edges.3bjx13k5.js",revision:"ae7a742bbd97fc43cc6715d6f788e707"},{url:"assets/Editor2.vue_vue_type_script_setup_true_lang.cwrtru4h.js",revision:"8286d05b232393c540207ff72c7831ad"},{url:"assets/Editor3.vue_vue_type_script_setup_true_lang.5f4ruwer.js",revision:"c6bd07c50672557dbebb75ef89d923d3"},{url:"assets/ellipses.1uczp9ym.js",revision:"9c33f603d32aa0310ee40992c79f92e2"},{url:"assets/ellipses.4ku5zv2f.css",revision:"45affb61c48a2a6fe2ef5a43293eeeb2"},{url:"assets/evaluator.4g743ifa.js",revision:"2c56bae2ce672f0da4877ed3d2429fa7"},{url:"assets/extending-pascals-triangle.239p7mps.js",revision:"13be3c268e04ab96c976e9ea93b63f3b"},{url:"assets/Field.1yysq22x.css",revision:"d08b779e54b39fdfb8b99996b960858f"},{url:"assets/Field.5c7fkv56.js",revision:"83fe4f1256f59ac07c5a042d79ec52ba"},{url:"assets/fireline.8jdrcp8g.js",revision:"b22f928cbe40a7458c60a88d47e32a99"},{url:"assets/fireline.jca01i5u.css",revision:"c71cd06bbe22f5188fe88221aa7a6a22"},{url:"assets/fractal-explorer.3arvx27b.js",revision:"3837f2c433dcd07bec420b3a8882bce9"},{url:"assets/fractal-explorer.vue_vue_type_script_setup_true_lang.43j2oosl.js",revision:"3fc7944bf8da3ef1249981f772e961f0"},{url:"assets/fractal-presets.1g97w01s.js",revision:"79348ccb0670fcf2d9bfb90bab5907a8"},{url:"assets/FullscreenDisplay.4syqccbc.css",revision:"cf4e028fcd7f7dd33f0ae44038c09303"},{url:"assets/FullscreenDisplay.od9apf4f.js",revision:"f3c4bec7ed9a9f03af28799b79f5bf1b"},{url:"assets/github-copilot-is-amazing.5mpkuxs2.js",revision:"61000c4c576d7b745f6736b8dc598e5c"},{url:"assets/grid.5lxjlr1z.js",revision:"81a245a4e38f5ceeaa0c3749e51e722f"},{url:"assets/hands-free-slides.1jig9w0m.js",revision:"2f0e6632425ce6e43c32b94e7510045a"},{url:"assets/hands-free-slides.51q7cw09.css",revision:"148f8f7c81585d9696b3aa4d820b6957"},{url:"assets/home.19ij6hrj.js",revision:"eee13afbd79150aff17d9d2e0d770456"},{url:"assets/home.4w1jldat.css",revision:"32d9716556b2555aae6f99b5910a8f35"},{url:"assets/hyperbolic-explorer.1aga1fgq.js",revision:"fafb346a430e9bde00903b96101385cb"},{url:"assets/ImageCard.2nlgu5dq.js",revision:"3e628aeaea085140b72510f5a22fddf3"},{url:"assets/ImageCard.4q89vvi6.css",revision:"eeb5cce3e4c37348b4823a811f789abb"},{url:"assets/Incrementable.4buzwvct.js",revision:"4627fe9146e23cc302be2517500ebc4b"},{url:"assets/Incrementable.5tii5iz2.css",revision:"054f822a3070c51b15cdad134635f2fe"},{url:"assets/index.10p6b8b3.css",revision:"bacf85501d7816c290a60590ccbc8935"},{url:"assets/index.17d5t728.css",revision:"efb08d2497eaad55d2285593a8488aba"},{url:"assets/index.1eb74481.js",revision:null},{url:"assets/index.1lhdu273.js",revision:"2331b9ef4d45c618353902ad0d4679c4"},{url:"assets/index.2h74zzv7.css",revision:"3dfd249713a5eff805c348bba585ca30"},{url:"assets/index.2pl2v4t9.js",revision:"a834f0a13e5af708a4d52f1eadfdd11c"},{url:"assets/index.32pcbad5.js",revision:"245a7aac2bbc829a95a1819014efcab2"},{url:"assets/index.33j6jks7.css",revision:"86e378197985833f9edb6731332c0693"},{url:"assets/index.3ctt9eum.js",revision:"a5f6e68323c80580680194a99ba662f0"},{url:"assets/index.4bl2q847.js",revision:"928d6606e34d47d53c45dea0b71ba47a"},{url:"assets/index.4ewvtaxu.css",revision:"93b0a7d30325f013940a2e59f253e151"},{url:"assets/index.4r9vuxky.js",revision:"e1fbca19eced8e5d2ef835effc5e9dcc"},{url:"assets/index.4z0bzixf.js",revision:"6ce6099bfbfdbd27d64ce58019cdaeca"},{url:"assets/index.56y635i6.js",revision:"b3ff54738257557d6ba2f57e836c40e1"},{url:"assets/index.bhq5471l.js",revision:"ba4ff3307244c5e1858ac17adfdfff7c"},{url:"assets/index.dlnn8pzg.js",revision:"32a69dea8b759a5788768e7a748b6b96"},{url:"assets/infinity-is-negative-one-twelfth.1n4xn8rv.js",revision:"6ce6fabd102562857b457d99aa7a76fe"},{url:"assets/InlineButton.12vhnjwt.js",revision:"42ba821b8e06ac78081f7f591536e917"},{url:"assets/InlineButton.6c6xs5rl.css",revision:"ab68342bca18a5c2f4ab1fe6f60f7652"},{url:"assets/InlineCheckboxField.3g4tyklv.js",revision:"652cedb9c977f0a317a0ede185819a84"},{url:"assets/InlineCheckboxField.3xctf9am.css",revision:"d6812d7ec88478f6d1c24a22780c7138"},{url:"assets/InlineField.1lnj4vh9.css",revision:"30843b2bd181dcea51de3104d5f5cd8e"},{url:"assets/InlineField.sq5fmr9m.js",revision:"52d307c4b90660d54ca2bb49cebe9f52"},{url:"assets/InlineRangeField.gs0iuoop.js",revision:"f84f1bcb48ec070705d7501138222041"},{url:"assets/InlineRangeField.x9jhzynd.css",revision:"6ccf3cfbe9bad839b3b81f2615d25293"},{url:"assets/Labeled.3lulk6v6.css",revision:"e38daae5d162dde815fa2928db615f34"},{url:"assets/Labeled.59ihovi6.js",revision:"93a1593720c736b62c61ef55e8b5d71b"},{url:"assets/LargeTitle.364aftl6.js",revision:"cbadd4ba448db672c1159d5de1de49ae"},{url:"assets/LargeTitle.3hftlj1x.css",revision:"8505bd4e0f658f5ef53d1e45191e26c2"},{url:"assets/learn-toki-pona.1ly2n1in.css",revision:"6d7fdae070f2532939c252bf880ba64f"},{url:"assets/learn-toki-pona.51hqibmd.js",revision:"f4ed2cfc21f433436e833f19b5fb7a84"},{url:"assets/learning-toki-pona.45wro7uc.js",revision:"be1ecb6e4b18bf8f87a74e396bd375ce"},{url:"assets/leopards.3tb8ydq9.css",revision:"19e29ee867ed6237ef2ffea2d4edb8ea"},{url:"assets/leopards.tbm807ks.js",revision:"5c730e55f1436f7830edf5acecf06d85"},{url:"assets/lets-make-a-web-framework.1ry1ljy6.js",revision:"34aba5f0bb0d29d16984ee1318a112f6"},{url:"assets/light-the-bulbs.5bto8aoa.css",revision:"22fc4cb53e74774f04e91cdc0662f4ff"},{url:"assets/light-the-bulbs.6659433h.js",revision:"16fa99a625fe21f564cc8ef429b50f58"},{url:"assets/Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js",revision:"f0baee280d70adf6550ac3ec2706f76d"},{url:"assets/LogoLight.3fmf1259.js",revision:"285a0989b8df421dd5d77e840ff4e476"},{url:"assets/made-on-iphone.4kuzqkuz.js",revision:"f2cdfd9d6209a112841b2af1b411184e"},{url:"assets/make-people-think-of-numbers.4bj1yi68.js",revision:"b204063203274ecca3e7e5ae36ad8c0c"},{url:"assets/mandelbrot.64kqf9a9.js",revision:"d68e4477881324a67950d162f8543309"},{url:"assets/mathemagical-tricks.32c9kosf.js",revision:"0ee98d335da2dd95d2057a6a6eb6fb4e"},{url:"assets/MaybeLink.vue_vue_type_script_setup_true_lang.nijdkso1.js",revision:"e188c82eacf6f0b6dfbe2518d5144bdc"},{url:"assets/maze-game.16axl4u0.css",revision:"30e4f900284d0a9ad74c24d9f37bca82"},{url:"assets/maze-game.4x37t9hb.js",revision:"6347df6f911f2a21733da3772e392e35"},{url:"assets/meet-the-saurs.1uinhtv2.js",revision:"40c9ed592d62c5b82abbfe8982403e74"},{url:"assets/metaballs.qgom45lo.js",revision:"7b807bd10cde46817d70d353a47d40c9"},{url:"assets/MiddleText.496cwyq8.js",revision:"26cfefb93c7dd6e36b19c61b9e780bb7"},{url:"assets/MiddleText.5xjvjq58.css",revision:"cd7e92c56da17532b31a77ee433fca1e"},{url:"assets/mode-javascript.4cswk689.js",revision:"47e587149ced46a1bcba4fb7b67fe99f"},{url:"assets/MovableCanvas2d.4z89ub4m.js",revision:"c57963f190a395ac5401ee97fdadca53"},{url:"assets/my-account.6121ptzs.js",revision:"ab817990cd353d865a14e7912b388742"},{url:"assets/my-chats.5fdcfvxq.js",revision:"fc32fdce69f560e23549fcf0ea4cf0ac"},{url:"assets/my-notes.2snob7ut.js",revision:"686a47a3999b106e762ba2a3edf24f51"},{url:"assets/my-stories.1olo9zt6.js",revision:"d87f68c9eb681164c5981a53ce33bad9"},{url:"assets/Navigation.dk0k6mzv.css",revision:"9846a2a345a8ff72b9b5fb0f338ca99e"},{url:"assets/Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js",revision:"f2b5b9a484b676d8a83a32d3e8b07148"},{url:"assets/note.3k307poy.css",revision:"e528b4eaec6a5ad7f4ff4ddbc22be8a8"},{url:"assets/note.4zj5cqxk.js",revision:"db6c954f6453735bda0059e7b602ee35"},{url:"assets/NumericField.vue_vue_type_script_setup_true_lang.6a9nia33.js",revision:"56520d79c63a602961944384cc129c48"},{url:"assets/os.4ivnrlyv.css",revision:"e012d1da742b85f69e7668ee4bed34a7"},{url:"assets/os.5bq5ssbc.js",revision:"08a7f7207d0ac1ee573c6575454881d6"},{url:"assets/pixelated-rainbow.1zgsrad7.js",revision:"db01042c39b53c1144c55c0581b12e69"},{url:"assets/preset.1a4zyyg5.js",revision:"2a58f65398ab1d678a544d0c94a40da3"},{url:"assets/privacy-policy.3z8v2lzm.js",revision:"55664cf6895fafbfbd00a0999d95cea6"},{url:"assets/Prose.15xpukvf.js",revision:"6aec00b984c1b064ca7e8c7f309ce8d3"},{url:"assets/Prose.zaoxqiub.css",revision:"c269f4afc1267ea5b0319859a0c77cc4"},{url:"assets/rainbow-blobs.ffr6hd83.js",revision:"1f38187154d63d369e306f5fd9dda997"},{url:"assets/reaction-time-tester.3bp0jhr5.css",revision:"413797cbda71e0bcd01d3aef3663bcce"},{url:"assets/reaction-time-tester.564al0o1.js",revision:"275b22aa98c0331f5921d045cd5c669f"},{url:"assets/rectangles.26hloh4t.js",revision:"13ed4c894b9c1add98dcbf6217453192"},{url:"assets/rectangles.5f944cf6.css",revision:null},{url:"assets/remote-typewriter.5jsaabxs.js",revision:"684cddd8b212908117a776093b29e2d5"},{url:"assets/remote-typewriter.mozlm3t9.css",revision:"5a3852ba09c97d28c9b7b8dda794313b"},{url:"assets/same-number-generator.5etbfyij.css",revision:"4b695888d12e2c0aadc93a08d4fa4361"},{url:"assets/same-number-generator.ugqbnz5a.js",revision:"e5f91de38bd9b5e4f33119ea5234f012"},{url:"assets/screensaver.2n8au5ae.css",revision:"46bc79f3b66eead8a42dfff035789d10"},{url:"assets/screensaver.5cvrd3u9.js",revision:"0db04f4a4de9ff57bc328508876ca4e2"},{url:"assets/sdrawkcab.5i13ebc2.js",revision:"eaa5c77ec4f58cf6431eebc2dfbe9e18"},{url:"assets/SearchableCardGrid.3dznp5it.css",revision:"34f4731b1e49683c0f6b29718b25aa5a"},{url:"assets/SearchableCardGrid.7foww6wh.js",revision:"1352f0892e311db1cf1eccdf0cfb365d"},{url:"assets/SharedNav.1jh13wgv.css",revision:"d633dbbb2e90fe5d4b8171726faf16cd"},{url:"assets/SharedNav.4z4l3m5g.js",revision:"536e65f390bd670afa16ae0e639e12cc"},{url:"assets/slide-puzzle.11rgqbdf.css",revision:"30d1ec4ab4f8dc319ea8fde0330aff27"},{url:"assets/slide-puzzle.1h0csui3.js",revision:"2856f7ab423e5b43504f1aede9e52ed6"},{url:"assets/slider.264ss3uj.css",revision:"fb93349262f10e1db58827ec684ee37e"},{url:"assets/slider.45yj7ybh.js",revision:"458e505ef068927bb6b98bc170560701"},{url:"assets/StickyTopRegion.3rl5dt4h.css",revision:"11d0ae1514409b0b25dba24690d58ea3"},{url:"assets/StickyTopRegion.54a7rjac.js",revision:"fce90f86603d993e9ac4e82b8b667aac"},{url:"assets/stockfish-bdd9dd7d.js",revision:null},{url:"assets/story.2jjy49k0.css",revision:"ac26e2e6b0237927f2fa642f48c33040"},{url:"assets/story.4y8jf5q8.js",revision:"b99cb4ac0c3f6e89fa903f8f1f60161c"},{url:"assets/the-day-for-any-date.w37d99rz.js",revision:"7896000bcdc180621408418f3b378001"},{url:"assets/the-outage-on-october-1.1gxv6ago.js",revision:"0b3aa3c92bba1827f4f4c0393c2b8759"},{url:"assets/the-story-of-zsnout.4rtlcosl.js",revision:"2045e5731b158c9dca8a7b9539d061b4"},{url:"assets/the-tunnel.145ihetu.css",revision:"a42c5504fbcba375c6d5e57827498fb5"},{url:"assets/the-tunnel.cctgngyc.js",revision:"fc0b655b5940f4b1222e7ef7f43e0231"},{url:"assets/tick-oat-two.55thoe8v.css",revision:"50c2682cf51b89584ab0f9c2bb5e6200"},{url:"assets/tick-oat-two.v5iktg8r.js",revision:"1db40a46e73c219257e0584fc65aa4fb"},{url:"assets/Title.4eiq6n5a.js",revision:"c69b8cd41b6569a9783da92d54899a91"},{url:"assets/Title.5zj5fplx.css",revision:"0169b17047e8a2273adeebc7692511e7"},{url:"assets/trope-highlighter.4ik5iagg.css",revision:"9d5b997aa6d5485dc8ae7976ecd6a233"},{url:"assets/trope-highlighter.56fucgza.js",revision:"45aa45c1927ec027796031261f3f6655"},{url:"assets/turntable.2awnn9aj.css",revision:"c35cda66eddb4abc6ac28e28d7fc2d00"},{url:"assets/turntable.3d18mc8x.js",revision:"e046f3f049da4d437802c995d2c75850"},{url:"assets/ulam-spiral.4xgv8cin.js",revision:"8f8e455b254aa284b5ff3dfce3010c1c"},{url:"assets/uniforms.3fwxfqh9.js",revision:"4cea58a606279dd694cbf66542b577fc"},{url:"assets/useCanvas.3phirwm2.js",revision:"e207655f8999447835279b7eb219f9e2"},{url:"assets/useDateOf.chuxq7z2.js",revision:"8f6b61d9dcc2db4ba62cbc5ce62b2906"},{url:"assets/useGlsl.1gjlgo68.js",revision:"3fac2e86f1b5e743bec54aa8c872c328"},{url:"assets/useHomeIcons.5r6gk7v4.js",revision:"9175165e6c6a6f26fc9d889d03e6107f"},{url:"assets/useLocationHash.1zqo29vv.js",revision:"93f362bb3b02083d3f14e8192ae044db"},{url:"assets/useLocationHash.67kx6m6a.css",revision:"f637a5965d599caaa21ba8141bb0f6bd"},{url:"assets/useOption.1pf10ib0.js",revision:"46e2846278367fffe0ce9fb219893a10"},{url:"assets/useRandint.48fktzm0.js",revision:"eacfd98d2dbdcb5dd1618337826124e6"},{url:"assets/useRandomColor.2q4zn31b.js",revision:"7d5f4d519e02d910dedad5fec685a095"},{url:"assets/useRandomItem.3s2ay99w.js",revision:"5f09a79fb1b78dbd88b1539c3436abe7"},{url:"assets/useShuffle.1cs5x0cf.js",revision:"91beaee1524a1245a811139071a40b4b"},{url:"assets/useTypewrite.596b5itz.js",revision:"67e3227b25f38c9e6e51e05acc869d6c"},{url:"assets/useVideoFromStream.1vimuw6x.js",revision:"17d94cc09cb8f6a03aab2b738b95f835"},{url:"assets/v1-editor.2bgaf0r1.js",revision:"55f033ff737c61a36093f4b5fc3ce260"},{url:"assets/v2-compiler.3917ljt0.js",revision:"edcad310b7964ab730cb21090c6af75e"},{url:"assets/v2-editor.p3xfzoo6.js",revision:"cafe1e34ed7f3dc99b30a5146015a24d"},{url:"assets/v3-compiler.63i1rg5r.js",revision:"ec128e52a92ff532069572bcecec1b20"},{url:"assets/v3-editor.5wc8qfzz.js",revision:"827f63dd91769229ea41ecd7a54214c7"},{url:"assets/v4-compiler.4yz0dstx.js",revision:"7fbb9af70df37ab4a315c3f4977a0473"},{url:"assets/v4-editor.617mf4oq.js",revision:"86b6b9ee46119618df59779ee687607b"},{url:"assets/v6.1vjj4sla.css",revision:"d55b142ccb2a21a091387598db369373"},{url:"assets/v6.u96ikq2i.js",revision:"cf334c707a77b48d285bd854de985674"},{url:"assets/verify-account.27iidnvf.js",revision:"ea56186d61f42461869995e9445654cc"},{url:"assets/VStack.3evi6szx.js",revision:"ee3e9f2152ff2c89994a4958765542fd"},{url:"assets/VStack.5f4o3a8h.css",revision:"b32eae04c8ab413f4b353fe1341fd071"},{url:"assets/WebGlCanvas.5wwm3cvm.js",revision:"a8c14c2963183f45087036e0f9cf04fd"},{url:"assets/what-makes-zsnout-different.1lt4jfjj.js",revision:"89cbaea61596d0ad02a06230a5851d74"},{url:"assets/words.3ybcjm6h.js",revision:"869085e586e3f58975eb0dec37a6c9bc"},{url:"assets/workbox-window.prod.es5.3n4tr72d.js",revision:"eb69e6e10bf8bdd2d4704ba235b27fad"},{url:"assets/yet-another-web-framework.5g9wgrkt.js",revision:"3d9a6911699f325a3cb208f9dc089131"},{url:"assets/youtube-downloader.1srh3ugs.css",revision:"60809aaf2c2a51d40a6fadde4fc8f693"},{url:"assets/youtube-downloader.3hlntmip.js",revision:"488500c14777ad722980b63f7e5c2a17"},{url:"index.html",revision:"8ae12f90eb66b77a30165becb3d0c260"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
