if(!self.define){let s,e={};const a=(a,r)=>(a=new URL(a+".js",r).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(r,i)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let d={};const b=s=>a(s,c),f={module:{uri:c},exports:d,require:b};e[c]=Promise.all(r.map((s=>f[s]||b(s)))).then((s=>(i(...s),d)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.4giopt9i.js",revision:"99791a0d58458514a46516fc937840c7"},{url:"assets/_commonjsHelpers.599xm5jo.js",revision:"67f318d9b6908b131a9c6d9c61fda2a1"},{url:"assets/_virtual_image-list.4liw1n23.js",revision:"524bc34410f0da172014086b6eabee12"},{url:"assets/3d.z245h968.js",revision:"89499b5c624e2cc562655925a466d53f"},{url:"assets/404.2t5x1yhm.js",revision:"c519252dab50cc09721e2138e412f5b8"},{url:"assets/AceEditor.1gmgqqjd.js",revision:"cee3b6e4b7e9f2da061d539b2c943481"},{url:"assets/AceEditor.3vlpvk8i.css",revision:"8feca1b01e686c663808f15042f27616"},{url:"assets/ascii-art.4vxiq42q.js",revision:"8e362506b55229c64d8e4ac04a5097c6"},{url:"assets/asides.512hwcuv.js",revision:"cf988603d1889421088d5c48eef4c52b"},{url:"assets/bingo-master-board.21k4i9bv.css",revision:"7e7290808f389d9c0cc2f747dd684438"},{url:"assets/bingo-master-board.p9co1n2d.js",revision:"08395ec9074299cce1d4e1fd73d27a7e"},{url:"assets/bingo.4ua3doha.js",revision:"0845b9632976952c06fd3c73d89e4d3b"},{url:"assets/bingo.5pbtk6qf.css",revision:"ec11aa026cb6dfa627a8a07990dd4537"},{url:"assets/blobby-gradient.203bs9r5.js",revision:"f74296b75b9b10ea8aa26fb578bf9b9c"},{url:"assets/blobby-gradient.3xee7atq.css",revision:"bfca17295641be062f2f436f87806a6c"},{url:"assets/BookmarkIcon.3wmuqdow.js",revision:"5197fb9f6a3388ebb5b57dd3ff8853ae"},{url:"assets/BookmarkIcon.ql63k9j5.css",revision:"27b2b181ea6c8fe0067409ab3f947aa4"},{url:"assets/browser.2cdenw8j.js",revision:"4bfedc46f33bb704aacaaa90432eac22"},{url:"assets/Card.2fwl0iqw.js",revision:"622b9800d071fee5dde530dd5cc109f2"},{url:"assets/Card.35kcm0si.css",revision:"456ef8165716ea4aa0f82caad4545d6b"},{url:"assets/CardGrid.2ocy45od.js",revision:"b8736e2a12305720161bfc142cc39e3d"},{url:"assets/CardGrid.5toshyah.css",revision:"edc2c12064821d2d26b70b0fefd80c52"},{url:"assets/chat.20fxabov.js",revision:"a41867db4c10b524738e4a868c974527"},{url:"assets/chat.5xlhofau.css",revision:"6c97bff46b437a383bb4e6db722c9a7f"},{url:"assets/chess.4lpfcrvc.css",revision:"fe9c67b181cf1ad67325ff66d592ad9b"},{url:"assets/code-editor.28pw8blz.js",revision:"091036f5a8935fe7a252db40df092558"},{url:"assets/collatz-evaluator.160qcbnl.js",revision:"120b38e77d3ae4f4cf01425b97256cff"},{url:"assets/collatz-evaluator.57pahtkr.css",revision:"263c088435d30135af8ed412852bbd6b"},{url:"assets/color-effects.5b903scx.js",revision:"fc4665caf6927dd7f6b430bc7a6522b5"},{url:"assets/ColorSliders.vue_vue_type_script_setup_true_lang.55nmm5y1.js",revision:"6fb931b4b6ee7bdac736a3d3bb13058e"},{url:"assets/compiler.3v8yw6nw.js",revision:"0f15e64484addbaf5de9a4e0b0973815"},{url:"assets/compiler3.rkrguu5g.js",revision:"b8a71fd77adeb6ee81a9816bae0f5035"},{url:"assets/complex-explorer.isw4amlp.css",revision:"261674ae461d6ffc2e7e2d40bf19295f"},{url:"assets/complex-explorer.xq9puexw.js",revision:"1ad0a169ef2d5a1ced0e520f672a0809"},{url:"assets/Console.2t3sv0c8.js",revision:"a3a2f861010c55c7a014fd7fa6e89b3b"},{url:"assets/Console.2vtfnftc.css",revision:"3dac28f3378e4b80bea06b078ea9fad4"},{url:"assets/CoordinateCanvas2d.ui5o1n16.js",revision:"cca21195ae660cb71e4f6b50d82736e5"},{url:"assets/dashboard.1v1eabea.js",revision:"bb944a4fb74a650ba756a6f871056451"},{url:"assets/dashboard.fr2sskwz.css",revision:"957c420580c554343b6d329a97ebc4e3"},{url:"assets/divisibility-rules.2e1825lt.js",revision:"5301df0f20799dc53bc43fd680391846"},{url:"assets/DocumentDisplay.5vb1kpey.css",revision:"61cbe7d767879d46dad8047d072622ee"},{url:"assets/DocumentDisplay.633jhlro.js",revision:"d064d623ec6a415e53349e7936f0c236"},{url:"assets/does-0-equal-1.4y0c4czy.js",revision:"618d41799abe53a8b4bf382575f9a0b1"},{url:"assets/Dropdown.3t1aedix.css",revision:"b43fb7b43fe4e8711fc20bb1c529ee72"},{url:"assets/Dropdown.5andrccq.js",revision:"b1d31971445e11385bd971297f41b2e6"},{url:"assets/edges.1rm5ar5e.js",revision:"c5b23748148b0612c0460081c14a51fb"},{url:"assets/Editor2.vue_vue_type_script_setup_true_lang.1h8sqo6a.js",revision:"9680e663c86ac95576633d4232b29602"},{url:"assets/Editor3.vue_vue_type_script_setup_true_lang.4tgtruob.js",revision:"4fd70192d957e0975a47d3a15b5d3397"},{url:"assets/ellipses.1hbuj5fm.js",revision:"4bf817eb7036b37f2c11192933009ba3"},{url:"assets/ellipses.4ku5zv2f.css",revision:"45affb61c48a2a6fe2ef5a43293eeeb2"},{url:"assets/evaluator.1nucp74u.js",revision:"411a701dccd5199c6dcf515c26e288ee"},{url:"assets/Field.1yysq22x.css",revision:"d08b779e54b39fdfb8b99996b960858f"},{url:"assets/Field.2ydu2jt8.js",revision:"42f052faee8e6102d64c779e9818e37d"},{url:"assets/fireline.23crdgbp.js",revision:"9a18767f2e5ee43b7a65c23740168165"},{url:"assets/fireline.jca01i5u.css",revision:"c71cd06bbe22f5188fe88221aa7a6a22"},{url:"assets/fractal-explorer.5oaq0bjh.js",revision:"618196b65f9aacd6c5a51b401c701ee5"},{url:"assets/fractal-explorer.vue_vue_type_script_setup_true_lang.5yvdlb6n.js",revision:"bbdeded4dc18b9536e8b63e90242b197"},{url:"assets/fractal-presets.cr0h2727.js",revision:"e51fc91acfb07cdb6ac3397a275769db"},{url:"assets/FullscreenDisplay.4syqccbc.css",revision:"cf4e028fcd7f7dd33f0ae44038c09303"},{url:"assets/FullscreenDisplay.hao6npqe.js",revision:"356443dcd68c7c77240afc1332c4af13"},{url:"assets/github-copilot-is-amazing.900r40oy.js",revision:"5cd7d621cee1d43ab1507a7ee908690b"},{url:"assets/grid.2igts6tg.js",revision:"eccc6c7361bf5678ab56a74ffc4c4796"},{url:"assets/hands-free-slides.4cltjpvs.js",revision:"2e8d1189b2d76eee146fb3a3536e63cf"},{url:"assets/hands-free-slides.51q7cw09.css",revision:"148f8f7c81585d9696b3aa4d820b6957"},{url:"assets/home.2n9pnr8v.js",revision:"6b358beb1a6ba86efc74d2f45b649e3b"},{url:"assets/home.4w1jldat.css",revision:"32d9716556b2555aae6f99b5910a8f35"},{url:"assets/hyperbolic-explorer.6da3nqi0.js",revision:"a2bd7162741e9aab2bf5375bbd348a0c"},{url:"assets/ImageCard.1aiceccs.js",revision:"adfff4a114e45df496a79e0bd0fc5881"},{url:"assets/ImageCard.4q89vvi6.css",revision:"eeb5cce3e4c37348b4823a811f789abb"},{url:"assets/Incrementable.44806nyw.js",revision:"865dc41584e3341a9b7b8a287fbc8f60"},{url:"assets/Incrementable.5tii5iz2.css",revision:"054f822a3070c51b15cdad134635f2fe"},{url:"assets/index.10p6b8b3.css",revision:"bacf85501d7816c290a60590ccbc8935"},{url:"assets/index.17d5t728.css",revision:"efb08d2497eaad55d2285593a8488aba"},{url:"assets/index.1cfyqdyk.js",revision:"160e2b767b13e8f1805a4b19f27cbf3c"},{url:"assets/index.1j6g2eax.js",revision:"f70b094f269fb098a6c6b8743a8930fc"},{url:"assets/index.2ctk4dhz.js",revision:"e9af332fdb362dc2e24473f85d0c3d0f"},{url:"assets/index.2hckco5i.js",revision:"3f13bf8d9679f16582729b2085f41b09"},{url:"assets/index.2wszx00c.js",revision:"6f014967f2fdd94873b78ef5ffc52983"},{url:"assets/index.33j6jks7.css",revision:"86e378197985833f9edb6731332c0693"},{url:"assets/index.3672xjxd.js",revision:"dfdf45b07fda6cfb6e84323ec2af7491"},{url:"assets/index.37vayx5b.css",revision:"842e74d0b25fc836dafb9e6841254824"},{url:"assets/index.4ewvtaxu.css",revision:"93b0a7d30325f013940a2e59f253e151"},{url:"assets/index.55wflef3.js",revision:"f438b8a68a008568b69ba463edf20b4d"},{url:"assets/index.5bkg2w0v.js",revision:"642c37c38b1412789d45a79c75a63ad6"},{url:"assets/index.rxbhc03b.js",revision:"5808c259dc6ebcf1d498c38a7aa25aff"},{url:"assets/index.vf65l6c7.js",revision:"500c994de9a28b11857da68764c21915"},{url:"assets/infinity-is-negative-one-twelfth.46fu4w4s.js",revision:"ea3da448d92c6c6cdbb716b7b0420467"},{url:"assets/InlineButton.197m3pe8.js",revision:"354776837f5fb25eddbdeaf94ce9bdbe"},{url:"assets/InlineButton.6c6xs5rl.css",revision:"ab68342bca18a5c2f4ab1fe6f60f7652"},{url:"assets/InlineCheckboxField.3xctf9am.css",revision:"d6812d7ec88478f6d1c24a22780c7138"},{url:"assets/InlineCheckboxField.67ybze61.js",revision:"db1b09dc0151066ffddad161274a9947"},{url:"assets/InlineField.1bs7kao1.js",revision:"8cda807e8cbff0f3fe00df6978c9046f"},{url:"assets/InlineField.1lnj4vh9.css",revision:"30843b2bd181dcea51de3104d5f5cd8e"},{url:"assets/InlineRangeField.4poaov81.js",revision:"3ce9c4648376381725d3684410e8e394"},{url:"assets/InlineRangeField.x9jhzynd.css",revision:"6ccf3cfbe9bad839b3b81f2615d25293"},{url:"assets/Labeled.29mn7ohi.js",revision:"4343ca5c3fe53f8c74650895f23e1de8"},{url:"assets/Labeled.3lulk6v6.css",revision:"e38daae5d162dde815fa2928db615f34"},{url:"assets/LargeTitle.1lwzjamx.js",revision:"0c08436887b9726fb89af1c85674165c"},{url:"assets/LargeTitle.3hftlj1x.css",revision:"8505bd4e0f658f5ef53d1e45191e26c2"},{url:"assets/learn-toki-pona.18tft1uy.css",revision:"0c24a4db98602e827a2fb42ff0f45a45"},{url:"assets/learn-toki-pona.4f5zikd4.js",revision:"360c53925b6ab97fa6ef0a58fcb804c5"},{url:"assets/learning-toki-pona.1ry4v4m0.js",revision:"5edfe7688a017e4891bfd5a31a5ae6ad"},{url:"assets/leopards.1312pi66.js",revision:"565678ef2c1fcbefa693c04ac88b9882"},{url:"assets/leopards.3tb8ydq9.css",revision:"19e29ee867ed6237ef2ffea2d4edb8ea"},{url:"assets/lets-make-a-web-framework.6dcv8f17.js",revision:"599e67d9b5029db5fde54326f8010207"},{url:"assets/light-the-bulbs.5bto8aoa.css",revision:"22fc4cb53e74774f04e91cdc0662f4ff"},{url:"assets/light-the-bulbs.61hpon97.js",revision:"cb1cc4766e9e276bd52f4395395304a5"},{url:"assets/Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js",revision:"1f60ef36417ae0e5b977c0abab3046a8"},{url:"assets/LogoLight.539ztpd2.js",revision:"37d53f83656c77f64fef11cc6adf0b99"},{url:"assets/made-on-iphone.4507pd7f.js",revision:"dd4c78d1662c8ca35ad01645ed6f8710"},{url:"assets/make-people-think-of-numbers.3y4num2f.js",revision:"bc1750f77af891f947b6c3b9e4150891"},{url:"assets/mandelbrot.24b7c2mc.js",revision:"1f80fbc7fa774fbb473cdc71bf6a77f4"},{url:"assets/mathemagical-tricks.lwvp67ub.js",revision:"96f3f23ee9b85ff055c72f58766ef32d"},{url:"assets/MaybeLink.vue_vue_type_script_setup_true_lang.5co93amo.js",revision:"6e87a13bb5a7f278f7e0cc8403faf360"},{url:"assets/maze-game.36fnqd09.css",revision:"915ed07272be1ac96a7acd7420878182"},{url:"assets/maze-game.5xit8z07.js",revision:"7f8ce090475403cac07536f14e7d3c26"},{url:"assets/meet-the-saurs.4efaxbcg.js",revision:"040f70fa0c6cf97c39f5562f61ae3c58"},{url:"assets/metaballs.2rkx6tkj.js",revision:"f59b3aaefc6c16acff700a81960637cb"},{url:"assets/MiddleText.3l6ge4jd.js",revision:"3ab3cc17272da442857ebd5ba4152db0"},{url:"assets/MiddleText.5xjvjq58.css",revision:"cd7e92c56da17532b31a77ee433fca1e"},{url:"assets/mode-javascript.53halply.js",revision:"5d2cfccdf04aafa60f76dfdfbcd6898e"},{url:"assets/MovableCanvas2d.41imxryi.js",revision:"8eb97476c91c3833b0735ec43a59d4f9"},{url:"assets/my-account.tlpwsudo.js",revision:"620e254c5dcaef6094670289ab397477"},{url:"assets/my-chats.1h6zgr0f.js",revision:"ff7e2065e2dd5b09dadb394be70da6ac"},{url:"assets/my-notes.4m2lhsrh.js",revision:"5f47146d7a40f638b7185e957f03a1c9"},{url:"assets/my-stories.5qut1xu7.js",revision:"faa483397c07c2a04722d2f2dce53b78"},{url:"assets/Navigation.dk0k6mzv.css",revision:"9846a2a345a8ff72b9b5fb0f338ca99e"},{url:"assets/Navigation.vue_vue_type_script_setup_true_lang.5cehk67t.js",revision:"167d347dfb95f250be30ea682987e16c"},{url:"assets/note.2yu8k0vm.js",revision:"9b1003dfed27aaf6f5a9342b01ec9375"},{url:"assets/note.3k307poy.css",revision:"e528b4eaec6a5ad7f4ff4ddbc22be8a8"},{url:"assets/NumericField.vue_vue_type_script_setup_true_lang.5g1ob2jp.js",revision:"51968c0d52f323e849bd74102004c6a0"},{url:"assets/os.3urfzrel.js",revision:"da5c4c62263536ceae9380d34587b30c"},{url:"assets/os.4ivnrlyv.css",revision:"e012d1da742b85f69e7668ee4bed34a7"},{url:"assets/pixelated-rainbow.2s87eg9f.js",revision:"b98991c3dbe54e5fd0e347b0077399c6"},{url:"assets/preset.1mstdl8s.js",revision:"c60348d00d56e794e0ef89f2d512eddf"},{url:"assets/privacy-policy.47bk8gn9.js",revision:"c03bfa9a0a7a0fb77d9c6958c7a61d72"},{url:"assets/Prose.49yyymca.css",revision:"84c910d8374cff4472ed06198626d680"},{url:"assets/Prose.podwpwy8.js",revision:"ddebaa69df6240da85837d07a1c331c2"},{url:"assets/rainbow-blobs.11yjh6sg.js",revision:"3c22d8621edf2599182f147adece897e"},{url:"assets/reaction-time-tester.3bp0jhr5.css",revision:"413797cbda71e0bcd01d3aef3663bcce"},{url:"assets/reaction-time-tester.4nyig9ys.js",revision:"26764ac26d8d4d1a8d43e619de7d532d"},{url:"assets/rectangles.5f944cf6.css",revision:null},{url:"assets/rectangles.5me0hj3h.js",revision:"2e34ea7d4275d46a3deefbfaf7103de0"},{url:"assets/remote-typewriter.3zomnj8f.js",revision:"c42588b0f5714f20c9a030a29b46f425"},{url:"assets/remote-typewriter.mozlm3t9.css",revision:"5a3852ba09c97d28c9b7b8dda794313b"},{url:"assets/same-number-generator.3j3awc1p.js",revision:"13d0933bca391f98d034180bfa19c5a8"},{url:"assets/same-number-generator.5etbfyij.css",revision:"4b695888d12e2c0aadc93a08d4fa4361"},{url:"assets/screensaver.2n8au5ae.css",revision:"46bc79f3b66eead8a42dfff035789d10"},{url:"assets/screensaver.3q89l7ez.js",revision:"780441b6492dc10bb578686989c53ce5"},{url:"assets/sdrawkcab.45ioir5m.js",revision:"37d7b34e3437c94f368439eabb8d2fe4"},{url:"assets/SearchableCardGrid.3dznp5it.css",revision:"34f4731b1e49683c0f6b29718b25aa5a"},{url:"assets/SearchableCardGrid.4qzy9rf8.js",revision:"144377c4fae4ecbfc998ca0e2483f597"},{url:"assets/SharedNav.1jh13wgv.css",revision:"d633dbbb2e90fe5d4b8171726faf16cd"},{url:"assets/SharedNav.28xyli12.js",revision:"9cb7ac98d3102e11c35d67e56fc31924"},{url:"assets/slide-puzzle.11rgqbdf.css",revision:"30d1ec4ab4f8dc319ea8fde0330aff27"},{url:"assets/slide-puzzle.6chupfzs.js",revision:"8908e22b0d9a44c5e140ec6654e81bc1"},{url:"assets/slider.264ss3uj.css",revision:"fb93349262f10e1db58827ec684ee37e"},{url:"assets/slider.4qjcrdkb.js",revision:"cf2363536eb0f82314a01da17c33b146"},{url:"assets/stockfish.6a21358d.js",revision:null},{url:"assets/the-day-for-any-date.4lhq2v3z.js",revision:"cf1688bcc5d2f98cf2a0a2eefb9c6d02"},{url:"assets/the-outage-on-october-1.acy78u3o.js",revision:"865714f3b1a90589a98ccd9d59862af4"},{url:"assets/the-story-of-zsnout.33efqmho.js",revision:"f11adadaaa1775b59d62d87c552153c5"},{url:"assets/the-tunnel.145ihetu.css",revision:"a42c5504fbcba375c6d5e57827498fb5"},{url:"assets/the-tunnel.261b0zo5.js",revision:"b2f208692b0fedfb6e8075ea79a0821c"},{url:"assets/tiptap-vue-3.esm.3qq78aue.js",revision:"a2c12a94ac263f2121ae2fcef5923248"},{url:"assets/Title.3fz2k97a.js",revision:"ed5de62f7628db49f6be55c187990e92"},{url:"assets/Title.5zj5fplx.css",revision:"0169b17047e8a2273adeebc7692511e7"},{url:"assets/trope-highlighter.4ik5iagg.css",revision:"9d5b997aa6d5485dc8ae7976ecd6a233"},{url:"assets/trope-highlighter.5pk4ufa9.js",revision:"789f804d38ef08ec78efdebe1f1e35f8"},{url:"assets/turntable.16poh4dl.js",revision:"b7083ba0d15b5c6d940039491e6ed5f3"},{url:"assets/turntable.2awnn9aj.css",revision:"c35cda66eddb4abc6ac28e28d7fc2d00"},{url:"assets/ulam-spiral.2t8t7uro.js",revision:"11b3fdc9bee29522dd686c865abffe42"},{url:"assets/uniforms.4eisoxtg.js",revision:"14c4952a0e302f282d799c85e6a8a4e7"},{url:"assets/useCanvas.87p0yoq7.js",revision:"557dd0f18e7b1ddfd04277ea37cf1814"},{url:"assets/useDateOf.86m05b59.js",revision:"8f6b61d9dcc2db4ba62cbc5ce62b2906"},{url:"assets/useGlsl.3n3wviqe.js",revision:"020576cd8e5fdb5c5a8162facf7a2654"},{url:"assets/useHomeIcons.5p09z44p.js",revision:"409bddee4153689250e6dbc55c4542d8"},{url:"assets/useLocationHash.2efrg97q.js",revision:"a732a7a75e41f6a6033e0f6a98e11496"},{url:"assets/useLocationHash.67kx6m6a.css",revision:"f637a5965d599caaa21ba8141bb0f6bd"},{url:"assets/useOption.ujvp9hcq.js",revision:"08ccee5ff19ad061839905016a818aa4"},{url:"assets/useRandint.4l2grpuh.js",revision:"eacfd98d2dbdcb5dd1618337826124e6"},{url:"assets/useRandomColor.3lt16kz3.js",revision:"7475f733664209bff759bb3fbcc34893"},{url:"assets/useRandomItem.3g35iz2c.js",revision:"5f09a79fb1b78dbd88b1539c3436abe7"},{url:"assets/useShuffle.kk0aghuw.js",revision:"91beaee1524a1245a811139071a40b4b"},{url:"assets/useTypewrite.1u6hkthp.js",revision:"67e3227b25f38c9e6e51e05acc869d6c"},{url:"assets/useVideoFromStream.r6hxu1yk.js",revision:"025ad91c781bec8d80464f599de8fa00"},{url:"assets/v1-editor.51swgl5n.js",revision:"f055b19f2027730406a0e3ce3dba94fe"},{url:"assets/v2-compiler.2lqhi42r.js",revision:"2bcb4273a7e05ea0a9c49c4e411a251e"},{url:"assets/v2-editor.ryo42di4.js",revision:"d8180775db68aff62e1fbd28df8f99d8"},{url:"assets/v3-compiler.2by6lvlr.js",revision:"e5ecee55d531d5c0a57198874a184368"},{url:"assets/v3-editor.4m27locb.js",revision:"01ab23a1b4968aa8a24270785795767e"},{url:"assets/v4-compiler.30jxl6et.js",revision:"971f7250cca18ce96af139183251edb5"},{url:"assets/v4-editor.1eekr898.js",revision:"4248b034928fa8dc65efb9ac05eed365"},{url:"assets/v6.1vjj4sla.css",revision:"d55b142ccb2a21a091387598db369373"},{url:"assets/v6.3c3egmma.js",revision:"f03acae629b00cc6602b1d025cdda37f"},{url:"assets/verify-account.3hhrzo1d.js",revision:"8bbe8c7b18dffabd796fbb58b6630f4a"},{url:"assets/VStack.5f4o3a8h.css",revision:"b32eae04c8ab413f4b353fe1341fd071"},{url:"assets/VStack.xad5wxbj.js",revision:"8e6c6feb84a59693b9ca740b13fc834a"},{url:"assets/WebGlCanvas.1rb17qef.js",revision:"688c61850d5ce0afb23ac85565aa506e"},{url:"assets/what-makes-zsnout-different.65odsq2d.js",revision:"d2dfbb5a992992a7d4a9f4de8608a9eb"},{url:"assets/words.1vk8pwvh.js",revision:"6999e7e1ac695012ef282e90898bcda2"},{url:"assets/workbox-window.prod.es5.4sj1di0w.js",revision:"b8c9397a5a7bdb9aee024d2c57d41845"},{url:"assets/youtube-downloader.3l8yk0q6.js",revision:"f587fe51f131b59e78f4ed1e513929c6"},{url:"assets/youtube-downloader.4pul47kh.css",revision:"c3e4b6394d95ffadf9269fed3ec8dce3"},{url:"index.html",revision:"d4bfa931e41a43e4caa176378ed1e49b"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
