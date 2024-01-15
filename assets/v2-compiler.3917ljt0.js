import{u as b,E as B}from"./useLocationHash.1zqo29vv.js";import{A as M}from"./AceEditor.5eal9hit.js";import{d as $,o as x,c as y,V as C,w as S,e as _,u as R,i as F}from"./index.xh0zaea0.js";import{S as L,_ as w}from"./Editor2.vue_vue_type_script_setup_true_lang.cwrtru4h.js";import"./DocumentDisplay.6d0yf2eg.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./BookmarkIcon.1ijfs95x.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./_commonjsHelpers.40x35aen.js";var O={exports:{}};(function(v,c){ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,g,k){var f=t("../lib/oop"),m=t("./text_highlight_rules").TextHighlightRules,u=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};f.inherits(u,m),g.JsonHighlightRules=u}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(t,g,k){var f=t("../range").Range,m=function(){};(function(){this.checkOutdent=function(u,d){return/^\s+$/.test(u)?/^\s*\}/.test(d):!1},this.autoOutdent=function(u,d){var e=u.getLine(d),n=e.match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,s=u.findMatchingBracket({row:d,column:o});if(!s||s.row==d)return 0;var r=this.$getIndent(u.getLine(s.row));u.replace(new f(d,0,d,o-1),r)},this.$getIndent=function(u){return u.match(/^\s*/)[0]}}).call(m.prototype),g.MatchingBraceOutdent=m}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(t,g,k){var f=t("../../lib/oop"),m=t("../../range").Range,u=t("./fold_mode").FoldMode,d=g.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};f.inherits(d,u),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,o){var s=e.getLine(o);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var r=this._getFoldWidgetBase(e,n,o);return!r&&this.startRegionRe.test(s)?"start":r},this.getFoldWidgetRange=function(e,n,o,s){var r=e.getLine(o);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,o);var i=r.match(this.foldingStartMarker);if(i){var a=i.index;if(i[1])return this.openingBracketBlock(e,i[1],o,a);var l=e.getCommentFoldRange(o,a+i[0].length,1);return l&&!l.isMultiLine()&&(s?l=this.getSectionRange(e,o):n!="all"&&(l=null)),l}if(n!=="markbegin"){var i=r.match(this.foldingStopMarker);if(i){var a=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],o,a):e.getCommentFoldRange(o,a,-1)}}},this.getSectionRange=function(e,n){var o=e.getLine(n),s=o.search(/\S/),r=n,a=o.length;n=n+1;for(var l=n,i=e.getLength();++n<i;){o=e.getLine(n);var h=o.search(/\S/);if(h!==-1){if(s>h)break;var p=this.getFoldWidgetRange(e,"all",n);if(p){if(p.start.row<=r)break;if(p.isMultiLine())n=p.end.row;else if(s==h)break}l=n}}return new m(r,a,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,n,o){for(var s=n.search(/\s*$/),r=e.getLength(),a=o,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,i=1;++o<r;){n=e.getLine(o);var h=l.exec(n);if(h&&(h[1]?i--:i++,!i))break}var p=o;if(p>a)return new m(a,s,p,n.length)}}.call(d.prototype)}),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/worker/worker_client"],function(t,g,k){var f=t("../lib/oop"),m=t("./text").Mode,u=t("./json_highlight_rules").JsonHighlightRules,d=t("./matching_brace_outdent").MatchingBraceOutdent,e=t("./behaviour/cstyle").CstyleBehaviour,n=t("./folding/cstyle").FoldMode,o=t("../worker/worker_client").WorkerClient,s=function(){this.HighlightRules=u,this.$outdent=new d,this.$behaviour=new e,this.foldingRules=new n};f.inherits(s,m),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(r,a,l){var i=this.$getIndent(a);if(r=="start"){var h=a.match(/^.*[\{\(\[]\s*$/);h&&(i+=l)}return i},this.checkOutdent=function(r,a,l){return this.$outdent.checkOutdent(a,l)},this.autoOutdent=function(r,a,l){this.$outdent.autoOutdent(a,l)},this.createWorker=function(r){var a=new o(["ace"],"ace/mode/json_worker","JsonWorker");return a.attachToDocument(r.getDocument()),a.on("annotate",function(l){r.setAnnotations(l.data)}),a.on("terminate",function(){r.clearAnnotations()}),a},this.$id="ace/mode/json"}.call(s.prototype),g.Mode=s}),function(){ace.require(["ace/mode/json"],function(t){v&&(v.exports=t)})}()})(O);const W=$({__name:"JSONViewer",props:{value:{},round:{type:Boolean}},emits:["init","save"],setup(v){return(c,t)=>(x(),y(M,{modelValue:JSON.stringify(c.value,void 0,"  "),round:c.round,mode:"json",readonly:"",onInit:t[0]||(t[0]=g=>c.$emit("init",g)),onSave:t[1]||(t[1]=g=>c.$emit("save",g))},null,8,["modelValue","round"]))}}),j=$({__name:"Compiler2",props:{code:{},round:{type:Boolean}},setup(v){const c=v,t=C(()=>L.parse(c.code));return(g,k)=>(x(),y(W,{round:g.round,value:t.value},null,8,["round","value"]))}}),U=$({__name:"v2-compiler",setup(v){const c=b(`#importall

$money = 500
$eggs = 0
$name = no name

@start
  @input $name What is your name?
  @market

@market
  $name, you have $$$money and $eggs dozen eggs.
  @if $money < 6
    Looks like you're out of money!
  @else
    @menu What would you like to buy?
      @option Eggs
        @eggs
      @option Go Back
    @market

@eggs
  @number $egg How many dozens do you want to buy?
  $eggprice @= 6 * $egg
  @nowait $egg dozen eggs will cost $$$eggprice.
  @if $money > $eggprice
    @menu Are you sure you want to buy them?
      @option Yes
        $money -= $eggprice
        $eggs += $egg
      @option No
        Okay, let's go back to the store.
  @elseif $money = $eggprice
    You have just enough money for these eggs.
    $money -= $eggprice
    $eggs += $egg
  @else
    You don't have enough money for these eggs!`);return(t,g)=>(x(),y(B,{"dual-editor":""},{default:S(()=>[_(w,{modelValue:R(c),"onUpdate:modelValue":g[0]||(g[0]=k=>F(c)?c.value=k:null),round:""},null,8,["modelValue"]),_(j,{code:R(c),round:""},null,8,["code"])]),_:1}))}});export{U as default};
