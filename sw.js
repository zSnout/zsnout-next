if(!self.define){let s,e={};const a=(a,r)=>(a=new URL(a+".js",r).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(r,i)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let c={};const f=s=>a(s,d),b={module:{uri:d},exports:c,require:f};e[d]=Promise.all(r.map((s=>b[s]||f(s)))).then((s=>(i(...s),c)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.32w7an2i.js",revision:"99791a0d58458514a46516fc937840c7"},{url:"assets/_commonjsHelpers.40x35aen.js",revision:"f7df3bdab2561a77804414cdafcf3fcd"},{url:"assets/_virtual_image-list.r1g9ayy6.js",revision:"edc431c7813a00090b5376b16848ecca"},{url:"assets/3d.5cnddprc.js",revision:"8360db94da550e377a5852db24a253a6"},{url:"assets/404.5otctjwv.js",revision:"e93b19dfac0d63b93b5ae690c8ec599a"},{url:"assets/AceEditor.3vlpvk8i.css",revision:"8feca1b01e686c663808f15042f27616"},{url:"assets/AceEditor.5eal9hit.js",revision:"5b2afd8fc821eedae649a94b59de6818"},{url:"assets/ascii-art.4dglbv8o.js",revision:"618c49c2542773fb7905c68c5bb83e0a"},{url:"assets/asides.5ho6kg8y.js",revision:"958bc4fa443b9cc003d956369a5587ac"},{url:"assets/bingo-master-board.21k4i9bv.css",revision:"7e7290808f389d9c0cc2f747dd684438"},{url:"assets/bingo-master-board.793bnlpd.js",revision:"f8833c083f6ab74e2ac0eb20384ba3d0"},{url:"assets/bingo.2hr2ub77.js",revision:"ddc88108d40c002f624dd73e65f5eb8e"},{url:"assets/bingo.5pbtk6qf.css",revision:"ec11aa026cb6dfa627a8a07990dd4537"},{url:"assets/blobby-gradient.3xee7atq.css",revision:"bfca17295641be062f2f436f87806a6c"},{url:"assets/blobby-gradient.4r964pov.js",revision:"1b47fb680b74cbfdc117eddeabf913f5"},{url:"assets/BookmarkIcon.46krkaf8.js",revision:"8c5ac788029ee78664bfa0a1be11894f"},{url:"assets/BookmarkIcon.ql63k9j5.css",revision:"27b2b181ea6c8fe0067409ab3f947aa4"},{url:"assets/browser.51bopbv1.js",revision:"8d64be762912b751d5053803456bfdab"},{url:"assets/Card.35kcm0si.css",revision:"456ef8165716ea4aa0f82caad4545d6b"},{url:"assets/Card.4h2z4e59.js",revision:"b66ea236a7798117f0791e1e637590ed"},{url:"assets/CardGrid.1kdxvvm0.js",revision:"9e792a6418ac54bb6c98ec7cd5571e4e"},{url:"assets/CardGrid.5toshyah.css",revision:"edc2c12064821d2d26b70b0fefd80c52"},{url:"assets/chat.17hfhyxp.js",revision:"95f8de25df1aa8d29cddb610c9d791f1"},{url:"assets/chat.3r3ad8rg.css",revision:"12bea1e6741e51c206898bc68c5dca00"},{url:"assets/chess.49c5o5x9.css",revision:"370925c2e34221832d7c9070b98daa72"},{url:"assets/code-editor.1tlusx4s.js",revision:"4a631d0a178f894f4ed9c32beff7d167"},{url:"assets/collatz-evaluator.1dirlo42.js",revision:"69d57a7a9ab67fb7a3c27ba01517cea5"},{url:"assets/collatz-evaluator.57pahtkr.css",revision:"263c088435d30135af8ed412852bbd6b"},{url:"assets/color-effects.dol3y4k3.js",revision:"29fc7be4243ed4ab50d8b0e20fa82d99"},{url:"assets/ColorSliders.vue_vue_type_script_setup_true_lang.3veqopt4.js",revision:"5fcd1bd60d99da0704d0b6de80b16330"},{url:"assets/compiler.4qlvhir5.js",revision:"62d10d17dd0e7811ef192ae284630181"},{url:"assets/compiler3.2myjv9ut.js",revision:"25f9c9b9269c8b942c11e25f239af891"},{url:"assets/complex-explorer.3syr889t.js",revision:"c60aac90b94b1fdf47ed49768f651670"},{url:"assets/complex-explorer.isw4amlp.css",revision:"261674ae461d6ffc2e7e2d40bf19295f"},{url:"assets/Console.2vtfnftc.css",revision:"3dac28f3378e4b80bea06b078ea9fad4"},{url:"assets/Console.65z5j7wy.js",revision:"0aabb438da135d8487a4a39582c861b4"},{url:"assets/CoordinateCanvas2d.4rt8wdf9.js",revision:"6aa63d23987ff0948ef3f65dc2e3366c"},{url:"assets/dashboard.57zht84h.js",revision:"9864e498911cda39f1d870a9afcd4321"},{url:"assets/dashboard.fr2sskwz.css",revision:"957c420580c554343b6d329a97ebc4e3"},{url:"assets/divisibility-rules.pcbwroat.js",revision:"e57202058a22e1391ae88e43b8e1eaae"},{url:"assets/DocumentDisplay.5vb1kpey.css",revision:"61cbe7d767879d46dad8047d072622ee"},{url:"assets/DocumentDisplay.6d0yf2eg.js",revision:"d0e53f559e6cd749cf21669d2c9a5f76"},{url:"assets/does-0-equal-1.ibngw25j.js",revision:"a9a47cf14f702b8dfc996663a89cad58"},{url:"assets/Dropdown.3t1aedix.css",revision:"b43fb7b43fe4e8711fc20bb1c529ee72"},{url:"assets/Dropdown.5phpgqpn.js",revision:"d170ed445604ff55841b4e1e926590dd"},{url:"assets/edges.3bjx13k5.js",revision:"2576c1aa242b1ccabd09d31606a56ffe"},{url:"assets/Editor2.vue_vue_type_script_setup_true_lang.cwrtru4h.js",revision:"7a4d1daace6120fd30128301ade7a8cb"},{url:"assets/Editor3.vue_vue_type_script_setup_true_lang.5f4ruwer.js",revision:"e1685ec2548e8fd8798a26856429b8fd"},{url:"assets/ellipses.1uczp9ym.js",revision:"97a2477cfd0afa500347fb47e1af55ff"},{url:"assets/ellipses.4ku5zv2f.css",revision:"45affb61c48a2a6fe2ef5a43293eeeb2"},{url:"assets/evaluator.4g743ifa.js",revision:"f8e583789aad8a2a208807947b6d2ba8"},{url:"assets/extending-pascals-triangle.239p7mps.js",revision:"588ff9a8a91ddd12a496bfa2ac624d57"},{url:"assets/Field.1yysq22x.css",revision:"d08b779e54b39fdfb8b99996b960858f"},{url:"assets/Field.5c7fkv56.js",revision:"83c5db798d5fd0694410c8dca9ef728c"},{url:"assets/fireline.8jdrcp8g.js",revision:"e0d05c994285275a7aafbcc49a057bd4"},{url:"assets/fireline.jca01i5u.css",revision:"c71cd06bbe22f5188fe88221aa7a6a22"},{url:"assets/fractal-explorer.3arvx27b.js",revision:"b949b12dd683adc0d4d81bb70ab9b5f4"},{url:"assets/fractal-explorer.vue_vue_type_script_setup_true_lang.43j2oosl.js",revision:"3116d57c0e45512cf979d61142a68f82"},{url:"assets/fractal-presets.1g97w01s.js",revision:"f56b532d95520b81de13de4c2f93ea80"},{url:"assets/FullscreenDisplay.75rpamat.js",revision:"8c1ab2f8fa7b5586dba10e40998fffae"},{url:"assets/FullscreenDisplay.wc5pi173.css",revision:"80d7e947f67547356758401f2c4cfc1a"},{url:"assets/github-copilot-is-amazing.5mpkuxs2.js",revision:"681baddb77af2a7bf5a5bfe92601d62a"},{url:"assets/grid.5lxjlr1z.js",revision:"bbf1ce9a170ac963ca1d0997e57c649e"},{url:"assets/hands-free-slides.1jig9w0m.js",revision:"fa28a204dfc0bc1efbeba5ff5d241b3f"},{url:"assets/hands-free-slides.51q7cw09.css",revision:"148f8f7c81585d9696b3aa4d820b6957"},{url:"assets/hyperbolic-explorer.1aga1fgq.js",revision:"8f33dfc124cd28b21aca59a0c4f08d4a"},{url:"assets/ImageCard.2nlgu5dq.js",revision:"0401a6c604d487362c39c0a4e4e52c70"},{url:"assets/ImageCard.4q89vvi6.css",revision:"eeb5cce3e4c37348b4823a811f789abb"},{url:"assets/Incrementable.4buzwvct.js",revision:"747a0c6db8d966fcd3544dca772c41bf"},{url:"assets/Incrementable.5tii5iz2.css",revision:"054f822a3070c51b15cdad134635f2fe"},{url:"assets/index.10p6b8b3.css",revision:"bacf85501d7816c290a60590ccbc8935"},{url:"assets/index.17d5t728.css",revision:"efb08d2497eaad55d2285593a8488aba"},{url:"assets/index.1eb74481.js",revision:null},{url:"assets/index.1lhdu273.js",revision:"a9a6ba59d72170e2faba24d1b4870f0a"},{url:"assets/index.1uerioc2.css",revision:"6ea884ec933a233eb3c20b49ae1ef696"},{url:"assets/index.2h74zzv7.css",revision:"3dfd249713a5eff805c348bba585ca30"},{url:"assets/index.2pl2v4t9.js",revision:"6e53a74f23962dfef63ba757c0f43f96"},{url:"assets/index.32pcbad5.js",revision:"f37320b0f6b801b86fa390393b1d7967"},{url:"assets/index.3ctt9eum.js",revision:"47eacdf2f5938f87328a9a23db4d5824"},{url:"assets/index.47k2252d.js",revision:"1d38a1cf94c40e587c89a54994e715b0"},{url:"assets/index.4bl2q847.js",revision:"a96eec5b2f9eb592376533f5887c4a63"},{url:"assets/index.4ewvtaxu.css",revision:"93b0a7d30325f013940a2e59f253e151"},{url:"assets/index.56y635i6.js",revision:"63a94ec97dc394f9400ff0416eb0f772"},{url:"assets/index.bhq5471l.js",revision:"a2ed15d87f9c383bb12d377a897b3dd1"},{url:"assets/index.dlnn8pzg.js",revision:"ae96edf1072edb5c8a6558909c2d4328"},{url:"assets/index.xh0zaea0.js",revision:"8ae262d68e9c9fda15ad179378d0422a"},{url:"assets/infinity-is-negative-one-twelfth.1n4xn8rv.js",revision:"7c7ebfa517dd12200f61343797858612"},{url:"assets/InlineButton.12vhnjwt.js",revision:"53147adbd173d830bff6b5f685205258"},{url:"assets/InlineButton.6c6xs5rl.css",revision:"ab68342bca18a5c2f4ab1fe6f60f7652"},{url:"assets/InlineCheckboxField.3g4tyklv.js",revision:"5474f75b61a0797bca1f5693621f056e"},{url:"assets/InlineCheckboxField.3xctf9am.css",revision:"d6812d7ec88478f6d1c24a22780c7138"},{url:"assets/InlineField.1lnj4vh9.css",revision:"30843b2bd181dcea51de3104d5f5cd8e"},{url:"assets/InlineField.sq5fmr9m.js",revision:"cb4c57a23639f4ee40948778a143ac1e"},{url:"assets/InlineRangeField.gs0iuoop.js",revision:"02c909c8f555b51231abb4c0817af5ba"},{url:"assets/InlineRangeField.x9jhzynd.css",revision:"6ccf3cfbe9bad839b3b81f2615d25293"},{url:"assets/Labeled.3lulk6v6.css",revision:"e38daae5d162dde815fa2928db615f34"},{url:"assets/Labeled.59ihovi6.js",revision:"774b547ed0be0e9894d6693035a12666"},{url:"assets/LargeTitle.364aftl6.js",revision:"27fac56049e73ad70655ad95378a9f52"},{url:"assets/LargeTitle.3hftlj1x.css",revision:"8505bd4e0f658f5ef53d1e45191e26c2"},{url:"assets/learn-toki-pona.1ly2n1in.css",revision:"6d7fdae070f2532939c252bf880ba64f"},{url:"assets/learn-toki-pona.51hqibmd.js",revision:"2a2cf65af7e5fe9eb8a8f25840c66fa7"},{url:"assets/learning-toki-pona.45wro7uc.js",revision:"5383928022218079d90f1e8130773d2d"},{url:"assets/leopards.3tb8ydq9.css",revision:"19e29ee867ed6237ef2ffea2d4edb8ea"},{url:"assets/leopards.tbm807ks.js",revision:"3aaf566f942b1559a303b88b56c04da6"},{url:"assets/lets-make-a-web-framework.1ry1ljy6.js",revision:"760d2bb43e284681b8787814dd4902a2"},{url:"assets/light-the-bulbs.5bto8aoa.css",revision:"22fc4cb53e74774f04e91cdc0662f4ff"},{url:"assets/light-the-bulbs.6659433h.js",revision:"8e66cc0af78b5db3f1db13b5a0d259d4"},{url:"assets/Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js",revision:"3489c73307db0e50ae801cc8602b28fd"},{url:"assets/LogoLight.3fmf1259.js",revision:"8de3ec30d152b1c130bf48c6bba6d516"},{url:"assets/made-on-iphone.4kuzqkuz.js",revision:"31114d1a37e6401f731e427514080e1d"},{url:"assets/make-people-think-of-numbers.4bj1yi68.js",revision:"d8e0aeb99fe900f99aad7446c308768f"},{url:"assets/mandelbrot.64kqf9a9.js",revision:"6c813f4bd9c471b9c2584e382f837441"},{url:"assets/mathemagical-tricks.32c9kosf.js",revision:"48714a7c9414618aeec543653c82e29a"},{url:"assets/MaybeLink.vue_vue_type_script_setup_true_lang.nijdkso1.js",revision:"d04b833acaba98b96ef45aab183139df"},{url:"assets/maze-game.16axl4u0.css",revision:"30e4f900284d0a9ad74c24d9f37bca82"},{url:"assets/maze-game.4x37t9hb.js",revision:"bad0efbaa3914b4aeddf4cffae2703f3"},{url:"assets/meet-the-saurs.1uinhtv2.js",revision:"9044ec7659e58a2a6071bea3456c709a"},{url:"assets/metaballs.qgom45lo.js",revision:"407d9f199397d63771eca85c613b3dbd"},{url:"assets/MiddleText.496cwyq8.js",revision:"bc6cd35f31a16fef858da778863c92e5"},{url:"assets/MiddleText.5xjvjq58.css",revision:"cd7e92c56da17532b31a77ee433fca1e"},{url:"assets/mode-javascript.4cswk689.js",revision:"47e587149ced46a1bcba4fb7b67fe99f"},{url:"assets/MovableCanvas2d.4z89ub4m.js",revision:"fe348ce919a580cfd56f78d8b8ecf3aa"},{url:"assets/my-account.6121ptzs.js",revision:"751b9c185d61f2ce4ab02115a2639c3f"},{url:"assets/my-chats.5fdcfvxq.js",revision:"ffaaa35877aa76b2d18d839df1e743a3"},{url:"assets/my-notes.2snob7ut.js",revision:"f6d4e44b6dadd1bc443ef93ca875cf8e"},{url:"assets/my-stories.1olo9zt6.js",revision:"2b709a18fd74c5eb3c2aa38e4a1dcc20"},{url:"assets/Navigation.dk0k6mzv.css",revision:"9846a2a345a8ff72b9b5fb0f338ca99e"},{url:"assets/Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js",revision:"a611fcae1bbedc6bd1106a362ddbe279"},{url:"assets/note.3k307poy.css",revision:"e528b4eaec6a5ad7f4ff4ddbc22be8a8"},{url:"assets/note.4zj5cqxk.js",revision:"d71d9365d863890ffb669ac6c84f90c9"},{url:"assets/NumericField.vue_vue_type_script_setup_true_lang.6a9nia33.js",revision:"59749bbbe39337cfc12e67a739d85416"},{url:"assets/old-home.3zxzmv1b.css",revision:"196c2c8e2aa2810f54b7f8df1eae085f"},{url:"assets/old-home.4v9jj6i4.js",revision:"5b7e070f87083d6a926debc6c183456c"},{url:"assets/os.4ivnrlyv.css",revision:"e012d1da742b85f69e7668ee4bed34a7"},{url:"assets/os.5bq5ssbc.js",revision:"f09b3bf10c9567d3955a2509c3ff12ac"},{url:"assets/pixelated-rainbow.1zgsrad7.js",revision:"799cc9f08d732f19d7403b262843d90c"},{url:"assets/preset.1a4zyyg5.js",revision:"e1f4010bc4408d54a109b5b827781f3e"},{url:"assets/privacy-policy.3z8v2lzm.js",revision:"98110572c13a79dfdd13283eaf3d5884"},{url:"assets/Prose.15xpukvf.js",revision:"6f6ccd677bfffbc3583d41784285be1a"},{url:"assets/Prose.32tsgorp.css",revision:"d55aed5882130f8c3920f3069d5d7d54"},{url:"assets/rainbow-blobs.ffr6hd83.js",revision:"9543c472bdcf3c45e9c762657db9c141"},{url:"assets/reaction-time-tester.3bp0jhr5.css",revision:"413797cbda71e0bcd01d3aef3663bcce"},{url:"assets/reaction-time-tester.564al0o1.js",revision:"3eecea347ecb4d12c7dee2ac273cb3bc"},{url:"assets/rectangles.26hloh4t.js",revision:"476ee8169feedbaef1a47fe3354a7a8f"},{url:"assets/rectangles.5f944cf6.css",revision:null},{url:"assets/remote-typewriter.5jsaabxs.js",revision:"a85365f061be1b67b5ecee1b60c804cf"},{url:"assets/remote-typewriter.mozlm3t9.css",revision:"5a3852ba09c97d28c9b7b8dda794313b"},{url:"assets/same-number-generator.5etbfyij.css",revision:"4b695888d12e2c0aadc93a08d4fa4361"},{url:"assets/same-number-generator.ugqbnz5a.js",revision:"115c8dfae838d719621f2368a1485618"},{url:"assets/screensaver.2n8au5ae.css",revision:"46bc79f3b66eead8a42dfff035789d10"},{url:"assets/screensaver.5cvrd3u9.js",revision:"aa110ac07c90a350c4f13ec4f1326068"},{url:"assets/sdrawkcab.5i13ebc2.js",revision:"b3afa5ea4eb5570aef80fbe6c2190f7c"},{url:"assets/SearchableCardGrid.3dznp5it.css",revision:"34f4731b1e49683c0f6b29718b25aa5a"},{url:"assets/SearchableCardGrid.7foww6wh.js",revision:"a2bb845052d694e28b39dc2082421f03"},{url:"assets/SharedNav.1jh13wgv.css",revision:"d633dbbb2e90fe5d4b8171726faf16cd"},{url:"assets/SharedNav.4z4l3m5g.js",revision:"8f3b4429ccfb889c16d5a31d76164bc9"},{url:"assets/slide-puzzle.11rgqbdf.css",revision:"30d1ec4ab4f8dc319ea8fde0330aff27"},{url:"assets/slide-puzzle.1h0csui3.js",revision:"f48d216faad11aa7cf56bd4696e8e5b4"},{url:"assets/slider.264ss3uj.css",revision:"fb93349262f10e1db58827ec684ee37e"},{url:"assets/slider.45yj7ybh.js",revision:"f8a0fac87b5f01d69cbb940aa8302f1e"},{url:"assets/StickyTopRegion.3rl5dt4h.css",revision:"11d0ae1514409b0b25dba24690d58ea3"},{url:"assets/StickyTopRegion.54a7rjac.js",revision:"66c3595557d304028e0908e7138bfb72"},{url:"assets/stockfish-bdd9dd7d.js",revision:null},{url:"assets/story.3ouys95q.css",revision:"e9abe6aff0d1b04f7a749f49793e42f6"},{url:"assets/story.4dsr9vsd.js",revision:"d09e81672888d639c0ffac6fd4ed80c9"},{url:"assets/the-day-for-any-date.w37d99rz.js",revision:"0e4d697892d399289c79f9a59e519a66"},{url:"assets/the-outage-on-october-1.1gxv6ago.js",revision:"87dc512258f8e6640db85d745dfb1519"},{url:"assets/the-story-of-zsnout.4rtlcosl.js",revision:"27381d7ed076b9180c88080546aead99"},{url:"assets/the-tunnel.145ihetu.css",revision:"a42c5504fbcba375c6d5e57827498fb5"},{url:"assets/the-tunnel.cctgngyc.js",revision:"1016ad32a0f672d7ff4c86f877a52b58"},{url:"assets/tick-oat-two.cd2h7qqj.js",revision:"93df69966ef9fbff1daa41794d1c71d6"},{url:"assets/tick-oat-two.vxz72s4g.css",revision:"f5419fe490a684c1fc5af622f4a89782"},{url:"assets/Title.4eiq6n5a.js",revision:"7eec34005243178f5257ac2235137993"},{url:"assets/Title.5zj5fplx.css",revision:"0169b17047e8a2273adeebc7692511e7"},{url:"assets/trope-highlighter.4ik5iagg.css",revision:"9d5b997aa6d5485dc8ae7976ecd6a233"},{url:"assets/trope-highlighter.56fucgza.js",revision:"a9f1a68ff7ec68bd69ed017aa2108ba5"},{url:"assets/turntable.2awnn9aj.css",revision:"c35cda66eddb4abc6ac28e28d7fc2d00"},{url:"assets/turntable.3d18mc8x.js",revision:"ab8630fde5c11cd0fa384caf70f1933e"},{url:"assets/ulam-spiral.4xgv8cin.js",revision:"3f7d835b1de11f66a468c78693ae1f12"},{url:"assets/uniforms.3fwxfqh9.js",revision:"8a03f46ffb17822dcca6ebbff821eee3"},{url:"assets/useCanvas.3phirwm2.js",revision:"36d37d2e10270ab55da0abd895befa28"},{url:"assets/useDateOf.chuxq7z2.js",revision:"8f6b61d9dcc2db4ba62cbc5ce62b2906"},{url:"assets/useGlsl.1gjlgo68.js",revision:"3fac2e86f1b5e743bec54aa8c872c328"},{url:"assets/useHomeIcons.5r6gk7v4.js",revision:"ee575ec6315b33fe2d2fe6d3d92b4e43"},{url:"assets/useLocationHash.1zqo29vv.js",revision:"5320206befefcd8be4e355442e86aa52"},{url:"assets/useLocationHash.67kx6m6a.css",revision:"f637a5965d599caaa21ba8141bb0f6bd"},{url:"assets/useOption.1pf10ib0.js",revision:"d206dafdb1548350533d1f44aac54c15"},{url:"assets/useRandint.48fktzm0.js",revision:"eacfd98d2dbdcb5dd1618337826124e6"},{url:"assets/useRandomColor.2q4zn31b.js",revision:"7d5f4d519e02d910dedad5fec685a095"},{url:"assets/useRandomItem.3s2ay99w.js",revision:"5f09a79fb1b78dbd88b1539c3436abe7"},{url:"assets/useShuffle.1cs5x0cf.js",revision:"91beaee1524a1245a811139071a40b4b"},{url:"assets/useTypewrite.596b5itz.js",revision:"67e3227b25f38c9e6e51e05acc869d6c"},{url:"assets/useVideoFromStream.1vimuw6x.js",revision:"1b66fad705dde136be9c9f34ea3696ad"},{url:"assets/v1-editor.2bgaf0r1.js",revision:"30f7815db1ef8892612f2620838597ca"},{url:"assets/v2-compiler.3917ljt0.js",revision:"5687564537f64b7c22401bc43043f91a"},{url:"assets/v2-editor.p3xfzoo6.js",revision:"228ce4e4857039a25134de9b37893667"},{url:"assets/v3-compiler.63i1rg5r.js",revision:"2663ddd8272cc550cfed11bb63ce9693"},{url:"assets/v3-editor.5wc8qfzz.js",revision:"e0234441b56895791c3aedf104ae8942"},{url:"assets/v4-compiler.4yz0dstx.js",revision:"45f1daf4c95d9881359dbca012771034"},{url:"assets/v4-editor.617mf4oq.js",revision:"fa64194a39dbd7895ce0db43d9bfb9ea"},{url:"assets/v6.1vjj4sla.css",revision:"d55b142ccb2a21a091387598db369373"},{url:"assets/v6.u96ikq2i.js",revision:"c8d8cb473a2f80a991be316422a28129"},{url:"assets/verify-account.27iidnvf.js",revision:"b7f4c1a200ce4e5bef0c195ed003b52d"},{url:"assets/VStack.3evi6szx.js",revision:"0885524e746f9298202a4345fca6a4cb"},{url:"assets/VStack.5f4o3a8h.css",revision:"b32eae04c8ab413f4b353fe1341fd071"},{url:"assets/WebGlCanvas.5wwm3cvm.js",revision:"4d036fe2624ebb8e36b7c844eaea3afa"},{url:"assets/what-makes-zsnout-different.1lt4jfjj.js",revision:"4996965202ed7e15921a835903d4f03c"},{url:"assets/words.3ybcjm6h.js",revision:"869085e586e3f58975eb0dec37a6c9bc"},{url:"assets/workbox-window.prod.es5.3n4tr72d.js",revision:"ed0c862094c41f455cdef837aa7dafd2"},{url:"assets/yet-another-web-framework.5g9wgrkt.js",revision:"7385b8332c0b9f490acd00324dc53e16"},{url:"assets/youtube-downloader.1srh3ugs.css",revision:"60809aaf2c2a51d40a6fadde4fc8f693"},{url:"assets/youtube-downloader.3hlntmip.js",revision:"a1a6698df306cda43055724b29d5361c"},{url:"index.html",revision:"e76d2b506ae3582351497fb91d795d59"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
