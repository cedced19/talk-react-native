!function(){function e(t,n,i){function o(r,s){if(!n[r]){if(!t[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){return o(t[r][1][e]||e)},u,u.exports,e,t,n,i)}return n[r].exports}for(var a="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}return e}()({1:[function(e,t,n){t.exports=function(e){return function(t){var n,i,o=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),a=function(e,t){n=e,i=t,o.forEach(function(n,i){n.forEach(function(n,o){n.classList.add("bespoke-bullet"),i<e||i===e&&o<=t?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),i===e&&o===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},r=function(e){return void 0!==o[n][i+e]};t.on("next",function(){var e=n+1;if(r(1))return a(n,i+1),!1;o[e]&&a(e,0)}),t.on("prev",function(){var e=n-1;if(r(-1))return a(n,i-1),!1;o[e]&&a(e,o[e].length-1)}),t.on("slide",function(e){a(e.index,0)}),a(0,0)}}},{}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,o){var a=e.slides[e.slide()],r=o-e.slide(),s=r>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==a&&["inactive",s,s+"-"+Math.abs(r)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(o){e.slides.map(i),t(o.slide,"active"),n(o.slide,"inactive")})}}},{}],3:[function(e,t,n){t.exports=function(e){return function(t){var n=(e=e&&(e.object||e.name||e.scope)?e:{object:e}).object,i=e.name||"bespoke",o=e.scope||window;n?o[i]=n:n=o[i]?o[i]:o[i]={},(Array.isArray(n.decks)?n.decks:n.decks=[]).push(n.deck=t),t.on("destroy",function(){var e=n.decks.indexOf(t);e>=0&&n.decks.splice(e,1),delete n.deck})}}},{}],4:[function(e,t,n){t.exports=function(){return function(e){var t=function(t){var n=-1<t&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)},n=function(){var n=window.location.hash.slice(1),i=parseInt(n,10);n&&(i?t(i-1):e.slides.forEach(function(e,i){e.getAttribute("data-bespoke-hash")!==n&&e.id!==n||t(i)}))};setTimeout(function(){n(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash")||e.slide.id;window.location.hash=t||e.index+1}),window.addEventListener("hashchange",n)},0)}}},{}],5:[function(e,t,n){t.exports=function(){return function(e){var t="keydown",n=function(e,t){return e.ctrlKey||e.shiftKey&&(36===t||35===t)||e.altKey||e.metaKey},i=function(t){if(!n(t,t.which))switch(t.which){case 32:return(t.shiftKey?e.prev:e.next)();case 39:case 34:case 76:return e.next();case 37:case 33:case 72:return e.prev();case 36:return e.slide(0);case 35:return e.slide(e.slides.length-1)}};e.on("destroy",function(){document.removeEventListener(t,i)}),document.addEventListener(t,i)}}},{}],6:[function(e,t,n){t.exports=function(e){return function(t){var n=e||{},i="touchstart",o="touchmove",a="addEventListener",r="removeEventListener",s=t.parent,l=null,c=null,u="page"+("y"===n.axis?"Y":"X"),p="number"==typeof n.threshold?n.threshold:50/window.devicePixelRatio,d=function(e){l=1===e.touches.length?e.touches[0][u]:null},f=function(e){if(null!==l)return void 0===l?e.preventDefault():void(Math.abs(c=e.touches[0][u]-l)>p&&((c>0?t.prev:t.next)(),l=e.preventDefault()))};t.on("destroy",function(){s[r](i,d),s[r](o,f)}),s[a](i,d),s[a](o,f)}}},{}],7:[function(e,t,n){t.exports=function(t){t=t||{};var n=e("bespoke-nav-kbd")(t.kbd),i=e("bespoke-nav-touch")(t.touch);return function(e){n(e),i(e)}}},{"bespoke-nav-kbd":5,"bespoke-nav-touch":6}],8:[function(e,t,n){(function(i){!function(e){if("object"==typeof n&&void 0!==t)t.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;(o=(o=(o="undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:this).bespoke||(o.bespoke={})).plugins||(o.plugins={})).prism=e()}}(function(){return function t(n,i,o){function a(s,l){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var p=i[s]={exports:{}};n[s][0].call(p.exports,function(e){var t=n[s][1][e];return a(t||e)},p,p.exports,t,n,i,o)}return i[s].exports}for(var r="function"==typeof e&&e,s=0;s<o.length;s++)a(o[s]);return a}({1:[function(e,t,n){var i=e("insert-css"),o=e("prism-themes/themes/prism-ghcolors.css");t.exports=function(){var t=e("prismjs");return e("prismjs/plugins/unescaped-markup/prism-unescaped-markup"),e("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace"),i(o,{prepend:!0}),function(){t.highlightAll()}}},{"insert-css":2,"prism-themes/themes/prism-ghcolors.css":3,prismjs:6,"prismjs/plugins/normalize-whitespace/prism-normalize-whitespace":4,"prismjs/plugins/unescaped-markup/prism-unescaped-markup":5}],2:[function(e,t,n){var i={};t.exports=function(e,t){if(!i[e]){i[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var o=document.getElementsByTagName("head")[0];t&&t.prepend?o.insertBefore(n,o.childNodes[0]):o.appendChild(n)}}},{}],3:[function(e,t,n){t.exports='/**\n * GHColors theme by Avi Aryan (http://aviaryan.in)\n * Inspired by Github syntax coloring\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n    color: #393A34;\n    font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    font-size: 0.95em;\n    line-height: 1.2em;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n}\n\npre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,\ncode[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {\n    background: #b3d4fc;\n}\n\npre[class*="language-"]::selection, pre[class*="language-"] ::selection,\ncode[class*="language-"]::selection, code[class*="language-"] ::selection {\n    background: #b3d4fc;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n    padding: 1em;\n    margin: .5em 0;\n    overflow: auto;\n    border: 1px solid #dddddd;\n    background-color: white;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n    padding: .2em;\n    padding-top: 1px; padding-bottom: 1px;\n    background: #f8f8f8;\n    border: 1px solid #dddddd;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n    color: #999988; font-style: italic;\n}\n\n.token.namespace {\n    opacity: .7;\n}\n\n.token.string,\n.token.attr-value {\n    color: #e3116c;\n}\n.token.punctuation,\n.token.operator {\n    color: #393A34; /* no highlight */\n}\n\n.token.entity,\n.token.url,\n.token.symbol,\n.token.number,\n.token.boolean,\n.token.variable,\n.token.constant,\n.token.property,\n.token.regex,\n.token.inserted {\n    color: #36acaa;\n}\n\n.token.atrule,\n.token.keyword,\n.token.attr-name,\n.language-autohotkey .token.selector {\n    color: #00a4db;\n}\n\n.token.function,\n.token.deleted,\n.language-autohotkey .token.tag {\n    color: #9a050f;\n}\n\n.token.tag,\n.token.selector,\n.language-autohotkey .token.keyword {\n    color: #00009f;\n}\n\n.token.important,\n.token.function,\n.token.bold {\n    font-weight: bold;\n}\n\n.token.italic {\n    font-style: italic;\n}'},{}],4:[function(e,t,n){!function(){function e(e){this.defaults=i({},e)}function t(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function n(e){for(var t=0,n=0;n<e.length;++n)e.charCodeAt(n)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}if("undefined"!=typeof self&&self.Prism&&self.document){var i=Object.assign||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};e.prototype={setDefaults:function(e){this.defaults=i(this.defaults,e)},normalize:function(e,n){n=i(this.defaults,n);for(var o in n){var a=t(o);"normalize"!==o&&"setDefaults"!==a&&n[o]&&this[a]&&(e=this[a].call(this,e,n[o]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(new RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort(function(e,t){return e.length-t.length}),t[0].length?e.replace(new RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var i=e.split("\n"),o=0;o<i.length;++o)if(!(n(i[o])<=t)){for(var a=i[o].split(/(\s+)/g),r=0,s=0;s<a.length;++s){var l=n(a[s]);(r+=l)>t&&(a[s]="\n"+a[s],r=l)}i[o]=a.join("")}return i.join("\n")}},Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-highlight",function(e){var t=e.element.parentNode,n=/\bno-whitespace-normalization\b/;if(!(!e.code||!t||"pre"!==t.nodeName.toLowerCase()||e.settings&&!1===e.settings["whitespace-normalization"]||n.test(t.className)||n.test(e.element.className))){for(var i=t.childNodes,o="",a="",r=!1,s=Prism.plugins.NormalizeWhitespace,l=0;l<i.length;++l){var c=i[l];c==e.element?r=!0:"#text"===c.nodeName&&(r?a+=c.nodeValue:o+=c.nodeValue,t.removeChild(c),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=o+e.element.innerHTML+a;e.element.innerHTML=s.normalize(u,e.settings),e.code=e.element.textContent}else e.code=o+e.code+a,e.code=s.normalize(e.code,e.settings)}})}}()},{}],5:[function(e,t,n){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.languages.markup&&(Prism.plugins.UnescapedMarkup=!0,Prism.hooks.add("before-highlightall",function(e){e.selector+=", .lang-markup script[type='text/plain'], .language-markup script[type='text/plain'], script[type='text/plain'].lang-markup, script[type='text/plain'].language-markup"}),Prism.hooks.add("before-sanity-check",function(e){if("markup"==e.language){if(e.element.matches("script[type='text/plain']")){var t=document.createElement("code");return(n=document.createElement("pre")).className=t.className=e.element.className,e.code=e.code.replace(/&lt;\/script(>|&gt;)/gi,"<\/script>"),t.textContent=e.code,n.appendChild(t),e.element.parentNode.replaceChild(n,e.element),void(e.element=t)}var n=e.element.parentNode;!e.code&&n&&"pre"==n.nodeName.toLowerCase()&&e.element.childNodes.length&&"#comment"==e.element.childNodes[0].nodeName&&(e.element.textContent=e.code=e.element.childNodes[0].textContent)}}))},{}],6:[function(e,t,n){(function(e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},i=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,i=n.Prism={util:{encode:function(e){return e instanceof o?new o(e.type,i.util.encode(e.content),e.alias):"Array"===i.util.type(e)?e.map(i.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(i.util.type(e)){case"Object":var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=i.util.clone(e[n]));return t;case"Array":return e.map&&e.map(function(e){return i.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var o in t)n[o]=t[o];return n},insertBefore:function(e,t,n,o){var a=(o=o||i.languages)[e];if(2==arguments.length){n=arguments[1];for(var r in n)n.hasOwnProperty(r)&&(a[r]=n[r]);return a}var s={};for(var l in a)if(a.hasOwnProperty(l)){if(l==t)for(var r in n)n.hasOwnProperty(r)&&(s[r]=n[r]);s[l]=a[l]}return i.languages.DFS(i.languages,function(t,n){n===o[e]&&t!=e&&(this[t]=s)}),o[e]=s},DFS:function(e,t,n,o){o=o||{};for(var a in e)e.hasOwnProperty(a)&&(t.call(e,a,e[a],n||a),"Object"!==i.util.type(e[a])||o[i.util.objId(e[a])]?"Array"!==i.util.type(e[a])||o[i.util.objId(e[a])]||(o[i.util.objId(e[a])]=!0,i.languages.DFS(e[a],t,a,o)):(o[i.util.objId(e[a])]=!0,i.languages.DFS(e[a],t,null,o)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",n);for(var o,a=n.elements||document.querySelectorAll(n.selector),r=0;o=a[r++];)i.highlightElement(o,!0===e,n.callback)},highlightElement:function(t,o,a){for(var r,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(r=(l.className.match(e)||[,""])[1].toLowerCase(),s=i.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var c={element:t,language:r,grammar:s,code:t.textContent};if(i.hooks.run("before-sanity-check",c),c.code&&c.grammar)if(i.hooks.run("before-highlight",c),o&&n.Worker){var u=new Worker(i.filename);u.onmessage=function(e){c.highlightedCode=e.data,i.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a&&a.call(c.element),i.hooks.run("after-highlight",c),i.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=i.highlight(c.code,c.grammar,c.language),i.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a&&a.call(t),i.hooks.run("after-highlight",c),i.hooks.run("complete",c);else i.hooks.run("complete",c)},highlight:function(e,t,n){var a=i.tokenize(e,t);return o.stringify(i.util.encode(a),n)},tokenize:function(e,t,n){var o=i.Token,a=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}e:for(var s in t)if(t.hasOwnProperty(s)&&t[s]){var l=t[s];l="Array"===i.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],p=u.inside,d=!!u.lookbehind,f=!!u.greedy,g=0,m=u.alias;u=u.pattern||u;for(var h=0;h<a.length;h++){var b=a[h];if(a.length>e.length)break e;if(!(b instanceof o)){u.lastIndex=0;var k=u.exec(b),v=1;if(!k&&f&&h!=a.length-1){var y=a[h+1].matchedStr||a[h+1],w=b+y;if(h<a.length-2&&(w+=a[h+2].matchedStr||a[h+2]),u.lastIndex=0,!(k=u.exec(w)))continue;if((N=k.index+(d?k[1].length:0))>=b.length)continue;var x=k.index+k[0].length,z=b.length+y.length;if(v=3,x<=z){if(a[h+1].greedy)continue;v=2,w=w.slice(0,z)}b=w}if(k){d&&(g=k[1].length);var N=k.index+g,x=N+(k=k[0].slice(g)).length,C=b.slice(0,N),E=b.slice(x),j=[h,v];C&&j.push(C);var A=new o(s,p?i.tokenize(k,p):k,m,k,f);j.push(A),E&&j.push(E),Array.prototype.splice.apply(a,j)}}}}}return a},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var o,a=0;o=n[a++];)o(t)}}},o=i.Token=function(e,t,n,i,o){this.type=e,this.content=t,this.alias=n,this.matchedStr=i||null,this.greedy=!!o};if(o.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===i.util.type(e))return e.map(function(n){return o.stringify(n,t,e)}).join("");var a={type:e.type,content:o.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==a.type&&(a.attributes.spellcheck="true"),e.alias){var r="Array"===i.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,r)}i.hooks.run("wrap",a);var s="";for(var l in a.attributes)s+=(s?" ":"")+l+'="'+(a.attributes[l]||"")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'" '+s+">"+a.content+"</"+a.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",function(e){var t=JSON.parse(e.data),o=t.language,a=t.code,r=t.immediateClose;n.postMessage(i.highlight(a,i.languages[o],o)),r&&n.close()},!1),n.Prism):n.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(i.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&("loading"!==document.readyState?requestAnimationFrame(i.highlightAll,0):document.addEventListener("DOMContentLoaded",i.highlightAll))),n.Prism}();void 0!==t&&t.exports&&(t.exports=i),void 0!==e&&(e.Prism=i),i.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},i.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),i.languages.xml=i.languages.markup,i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},i.languages.css.atrule.inside.rest=i.util.clone(i.languages.css),i.languages.markup&&(i.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:i.languages.css,alias:"language-css"}}),i.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:i.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:i.languages.css}},alias:"language-css"}},i.languages.markup.tag)),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),i.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),i.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:i.languages.javascript,alias:"language-javascript"}}),i.languages.js=i.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,o=t.getAttribute("data-src"),a=t,r=/\blang(?:uage)?-(?!\*)(\w+)\b/i;a&&!r.test(a.className);)a=a.parentNode;if(a&&(n=(t.className.match(r)||[,""])[1]),!n){var s=(o.match(/\.(\w+)$/)||[,""])[1];n=e[s]||s}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var c=new XMLHttpRequest;c.open("GET",o,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,i.highlightElement(l)):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}).call(this,void 0!==i?i:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,n){t.exports=function(e){return function(t){var n=document.createElement("div"),i=document.createElement("div"),o="vertical"===e?"height":"width";n.className="bespoke-progress-parent",i.className="bespoke-progress-bar",n.appendChild(i),t.parent.appendChild(n),t.on("activate",function(e){i.style[o]=100*e.index/(t.slides.length-1)+"%"})}}},{}],10:[function(e,t,n){t.exports=function(e){return function(t){var n=t.parent,i=t.slides[0],o=i.offsetHeight,a=i.offsetWidth,r="zoom"===e||"zoom"in n.style&&"transform"!==e,s=r?t.slides:t.slides.map(function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t}),l="Moz Webkit O ms".split(" ").reduce(function(e,t){return t+"Transform"in n.style?t+"Transform":e},"Transform".toLowerCase()),c=r?function(e,t){t.style.zoom=e}:function(e,t){t.style[l]="scale("+e+")"},u=function(){var e=n.offsetWidth/a,t=n.offsetHeight/o;s.forEach(c.bind(null,Math.min(e,t)))};window.addEventListener("resize",u),u()}}},{}],11:[function(e,t,n){(function(i){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:void 0!==i?o=i:"undefined"!=typeof self&&(o=self);var a=o;(a=(a=a.bespoke||(a.bespoke={})).themes||(a.themes={})).voltaire=e()}}(function(){return function t(n,i,o){function a(s,l){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=i[s]={exports:{}};n[s][0].call(u.exports,function(e){var t=n[s][1][e];return a(t||e)},u,u.exports,t,n,i,o)}return i[s].exports}for(var r="function"==typeof e&&e,s=0;s<o.length;s++)a(o[s]);return a}({1:[function(e,t,n){var i=e("bespoke-classes"),o=e("insert-css");t.exports=function(){return o('/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b{font-weight:700}dfn{font-style:italic}h1{font-size:2em}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-size:1em}kbd,pre,samp{font-family:monospace,monospace}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th,*{padding:0}*{margin:0}html{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto}.bespoke-parent{font-size:1.5em;background:#111;color:#fff;font-family:gill sans,helvetica,arial,arial,sans-serif;overflow:hidden;text-align:center;-webkit-transition:background 1s ease;transition:background 1s ease;background-position:50% 50%}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none;z-index:1}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{text-shadow:0 1px 0 rgba(0,0,0,.75);-webkit-transition:opacity .3s ease;transition:opacity .3s ease;width:720px;height:480px;position:absolute;top:50%;left:50%;margin-left:-360px;margin-top:-240px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;z-index:1}.bespoke-active{-webkit-transition-delay:.3s;transition-delay:.3s}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{-webkit-transition:opacity 1s ease;transition:opacity 1s ease;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0}.bespoke-backdrop-active{opacity:1}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw;z-index:1}.bespoke-progress-bar{background:#fff;position:absolute;top:0;left:0;height:100%;-webkit-transition:width 1s ease;transition:width 1s ease}.bespoke-bullet{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.bespoke-bullet-inactive{opacity:0}strong{font-weight:400}h1 strong{font-weight:600}h1,h2,h3,p,li{padding-left:20px;padding-right:20px}h1,h3,p,li,pre{font-weight:200}h1{font-family:didot,times new roman,serif;font-style:italic;margin:.17em 0}h2{font-family:gill sans,helvetica,arial,arial,sans-serif;font-weight:400;font-size:1.1em;margin:.1em 0}h2,h3{font-style:normal}h3{font-size:.6em;margin:1.1em 0}ul,ol{padding:0;margin:0;text-align:left}li{list-style:none;margin:.2em;font-style:normal;-webkit-transform:translateX(-6px);-ms-transform:translateX(-6px);transform:translateX(-6px)}li:before{content:\'\\2014\';margin-right:4px}pre{background:none!important}code{font-family:prestige elite std,consolas,courier new,monospace!important;font-style:normal;font-weight:200!important;text-align:left}a{color:currentColor;text-decoration:none;border-bottom:1px solid currentColor}.emphatic{background:#f30}',{prepend:!0}),function(e){i()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,o){var a=e.slides[e.slide()],r=o-e.slide(),s=r>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==a&&["inactive",s,s+"-"+Math.abs(r)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(o){e.slides.map(i),t(o.slide,"active"),n(o.slide,"inactive")})}}},{}],3:[function(e,t,n){var i={};t.exports=function(e,t){if(!i[e]){i[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var o=document.getElementsByTagName("head")[0];t&&t.prepend?o.insertBefore(n,o.childNodes[0]):o.appendChild(n)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],12:[function(e,t,n){t.exports={from:function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),i=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),o=i[0],a={},r=function(e,t){i[e]&&(c("deactivate",u(o,t)),o=i[e],c("activate",u(o,t)))},s=function(e,t){var n=i.indexOf(o)+e;c(e>0?"next":"prev",u(o,t))&&r(n,t)},l=function(e,t){a[e]=(a[e]||[]).filter(function(e){return e!==t})},c=function(e,t){return(a[e]||[]).reduce(function(e,n){return e&&!1!==n(t)},!0)},u=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},p={on:function(e,t){return(a[e]||(a[e]=[])).push(t),l.bind(null,e,t)},off:l,fire:c,slide:function(e,t){if(!arguments.length)return i.indexOf(o);c("slide",u(i[e],t))&&r(e,t)},next:s.bind(null,1),prev:s.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(p)}),r(0),p}}},{}],13:[function(e,t,n){var i=e("bespoke"),o=e("bespoke-classes"),a=e("bespoke-nav"),r=e("bespoke-scale"),s=e("bespoke-bullets"),l=e("bespoke-hash"),c=e("bespoke-prism"),u=e("bespoke-extern"),p=e("bespoke-theme-voltaire"),d=e("bespoke-progress");i.from({parent:"article.deck",slides:"section"},[o(),a(),r(),s(".build, .build-items > *:not(.build-items)"),l(),c(),u(i),p(),d()])},{bespoke:12,"bespoke-bullets":1,"bespoke-classes":2,"bespoke-extern":3,"bespoke-hash":4,"bespoke-nav":7,"bespoke-prism":8,"bespoke-progress":9,"bespoke-scale":10,"bespoke-theme-voltaire":11}]},{},[13]);