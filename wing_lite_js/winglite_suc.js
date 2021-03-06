/* Powered by Lingkong Team */
/* Lingkong Wing v0.3-beta.1 */

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).marked=t()}(this,function(){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){var n;if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator])return(n=e[Symbol.iterator]()).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){return c[e]}var e,t=(function(t){function e(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}t.exports={defaults:e(),getDefaults:e,changeDefaults:function(e){t.exports.defaults=e}}}(e={exports:{}}),e.exports),r=(t.defaults,t.getDefaults,t.changeDefaults,/[&<>"']/),l=/[&<>"']/g,a=/[<>"']|&(?!#?\w+;)/,o=/[<>"']|&(?!#?\w+;)/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};var u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function h(e){return e.replace(u,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}var g=/(^|[^\[])\^/g;var f=/[^\w:]/g,d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;var k={},b=/^[^:]+:\/*[^/]*$/,m=/^([^:]+:)[\s\S]*$/,x=/^([^:]+:\/*[^/]*)[\s\S]*$/;function w(e,t){k[" "+e]||(b.test(e)?k[" "+e]=e+"/":k[" "+e]=v(e,"/",!0));var n=-1===(e=k[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(m,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(x,"$1")+t:e+t}function v(e,t,n){var r=e.length;if(0===r)return"";for(var i=0;i<r;){var s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}var _=function(e,t){if(t){if(r.test(e))return e.replace(l,n)}else if(a.test(e))return e.replace(o,n);return e},y=h,z=function(n,e){n=n.source||n,e=e||"";var r={replace:function(e,t){return t=(t=t.source||t).replace(g,"$1"),n=n.replace(e,t),r},getRegex:function(){return new RegExp(n,e)}};return r},S=function(e,t,n){if(e){var r;try{r=decodeURIComponent(h(n)).replace(f,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!d.test(n)&&(n=w(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},$={exec:function(){}},A=function(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},R=function(e,t){var n=e.replace(/\|/g,function(e,t,n){for(var r=!1,i=t;0<=--i&&"\\"===n[i];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},T=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,i=0;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&--r<0)return i;return-1},I=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},Z=function(e,t){if(t<1)return"";for(var n="";1<t;)1&t&&(n+=e),t>>=1,e+=e;return n+e},q=t.defaults,O=v,C=R,U=_,j=T;function E(e,t,n){var r=t.href,i=t.title?U(t.title):null,t=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:i,text:t}:{type:"image",raw:n,href:r,title:i,text:U(t)}}var D=function(){function e(e){this.options=e||q}var t=e.prototype;return t.space=function(e){e=this.rules.block.newline.exec(e);if(e)return 1<e[0].length?{type:"space",raw:e[0]}:{raw:"\n"}},t.code=function(e,t){e=this.rules.block.code.exec(e);if(e){t=t[t.length-1];if(t&&"paragraph"===t.type)return{raw:e[0],text:e[0].trimRight()};t=e[0].replace(/^ {4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:O(t,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],e=function(e,t){if(null===(e=e.match(/^(\s+)(?:```)/)))return t;var n=e[1];return t.split("\n").map(function(e){var t=e.match(/^\s+/);return null!==t&&t[0].length>=n.length?e.slice(n.length):e}).join("\n")}(n,t[3]||"");return{type:"code",raw:n,lang:t[2]&&t[2].trim(),text:e}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t){var n=t[2].trim();return/#$/.test(n)&&(e=O(n,"#"),!this.options.pedantic&&e&&!/ $/.test(e)||(n=e.trim())),{type:"heading",raw:t[0],depth:t[1].length,text:n}}},t.nptable=function(e){e=this.rules.block.nptable.exec(e);if(e){var t={type:"table",header:C(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split("\n"):[],raw:e[0]};if(t.header.length===t.align.length){for(var n=t.align.length,r=0;r<n;r++)/^ *-+: *$/.test(t.align[r])?t.align[r]="right":/^ *:-+: *$/.test(t.align[r])?t.align[r]="center":/^ *:-+ *$/.test(t.align[r])?t.align[r]="left":t.align[r]=null;for(n=t.cells.length,r=0;r<n;r++)t.cells[r]=C(t.cells[r],t.header.length);return t}}},t.hr=function(e){e=this.rules.block.hr.exec(e);if(e)return{type:"hr",raw:e[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:e}}},t.list=function(e){e=this.rules.block.list.exec(e);if(e){for(var t,n,r,i,s,l=e[0],a=e[2],o=1<a.length,c={type:"list",raw:l,ordered:o,start:o?+a.slice(0,-1):"",loose:!1,items:[]},u=e[0].match(this.rules.block.item),p=!1,h=u.length,g=this.rules.block.listItemStart.exec(u[0]),f=0;f<h;f++){if(l=t=u[f],f!==h-1){if((r=this.rules.block.listItemStart.exec(u[f+1]))[1].length>g[0].length||3<r[1].length){u.splice(f,2,u[f]+"\n"+u[f+1]),f--,h--;continue}(!this.options.pedantic||this.options.smartLists?r[2][r[2].length-1]!==a[a.length-1]:o==(1===r[2].length))&&(n=u.slice(f+1).join("\n"),c.raw=c.raw.substring(0,c.raw.length-n.length),f=h-1),g=r}r=t.length,~(t=t.replace(/^ *([*+-]|\d+[.)]) ?/,"")).indexOf("\n ")&&(r-=t.length,t=this.options.pedantic?t.replace(/^ {1,4}/gm,""):t.replace(new RegExp("^ {1,"+r+"}","gm"),"")),r=p||/\n\n(?!\s*$)/.test(t),f!==h-1&&(p="\n"===t.charAt(t.length-1),r=r||p),r&&(c.loose=!0),this.options.gfm&&(s=void 0,(i=/^\[[ xX]\] /.test(t))&&(s=" "!==t[1],t=t.replace(/^\[[ xX]\] +/,""))),c.items.push({type:"list_item",raw:l,task:i,checked:s,loose:r,text:t})}return c}},t.html=function(e){e=this.rules.block.html.exec(e);if(e)return{type:this.options.sanitize?"paragraph":"html",raw:e[0],pre:!this.options.sanitizer&&("pre"===e[1]||"script"===e[1]||"style"===e[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):U(e[0]):e[0]}},t.def=function(e){e=this.rules.block.def.exec(e);if(e)return e[3]&&(e[3]=e[3].substring(1,e[3].length-1)),{tag:e[1].toLowerCase().replace(/\s+/g," "),raw:e[0],href:e[2],title:e[3]}},t.table=function(e){e=this.rules.block.table.exec(e);if(e){var t={type:"table",header:C(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split("\n"):[]};if(t.header.length===t.align.length){t.raw=e[0];for(var n=t.align.length,r=0;r<n;r++)/^ *-+: *$/.test(t.align[r])?t.align[r]="right":/^ *:-+: *$/.test(t.align[r])?t.align[r]="center":/^ *:-+ *$/.test(t.align[r])?t.align[r]="left":t.align[r]=null;for(n=t.cells.length,r=0;r<n;r++)t.cells[r]=C(t.cells[r].replace(/^ *\| *| *\| *$/g,""),t.header.length);return t}}},t.lheading=function(e){e=this.rules.block.lheading.exec(e);if(e)return{type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1]}},t.paragraph=function(e){e=this.rules.block.paragraph.exec(e);if(e)return{type:"paragraph",raw:e[0],text:"\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1]}},t.text=function(e,t){e=this.rules.block.text.exec(e);if(e){t=t[t.length-1];return t&&"text"===t.type?{raw:e[0],text:e[0]}:{type:"text",raw:e[0],text:e[0]}}},t.escape=function(e){e=this.rules.inline.escape.exec(e);if(e)return{type:"escape",raw:e[0],text:U(e[1])}},t.tag=function(e,t,n){e=this.rules.inline.tag.exec(e);if(e)return!t&&/^<a /i.test(e[0])?t=!0:t&&/^<\/a>/i.test(e[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):U(e[0]):e[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;e=O(n.slice(0,-1),"\\");if((n.length-e.length)%2==0)return}else{var r=j(t[2],"()");-1<r&&(s=(0===t[0].indexOf("!")?5:4)+t[1].length+r,t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,s).trim(),t[3]="")}var i,r=t[2],s="";return this.options.pedantic?(i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r),i&&(r=i[1],s=i[3])):s=t[3]?t[3].slice(1,-1):"",r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(n)?r.slice(1):r.slice(1,-1)),E(t,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0])}},t.reflink=function(e,t){if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){e=(n[2]||n[1]).replace(/\s+/g," ");if((e=t[e.toLowerCase()])&&e.href)return E(n,e,n[0]);var n=n[0].charAt(0);return{type:"text",raw:n,text:n}}},t.strong=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.strong.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var i,s="**"===r[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;for(s.lastIndex=0;null!=(r=s.exec(t));)if(i=this.rules.inline.strong.middle.exec(t.slice(0,r.index+3)))return{type:"strong",raw:e.slice(0,i[0].length),text:e.slice(2,i[0].length-2)}}},t.em=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.em.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var i,s="*"===r[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;for(s.lastIndex=0;null!=(r=s.exec(t));)if(i=this.rules.inline.em.middle.exec(t.slice(0,r.index+2)))return{type:"em",raw:e.slice(0,i[0].length),text:e.slice(1,i[0].length-1)}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),r=/[^ ]/.test(n),e=/^ /.test(n)&&/ $/.test(n);return r&&e&&(n=n.substring(1,n.length-1)),n=U(n,!0),{type:"codespan",raw:t[0],text:n}}},t.br=function(e){e=this.rules.inline.br.exec(e);if(e)return{type:"br",raw:e[0]}},t.del=function(e){e=this.rules.inline.del.exec(e);if(e)return{type:"del",raw:e[0],text:e[2]}},t.autolink=function(e,t){e=this.rules.inline.autolink.exec(e);if(e){var n,t="@"===e[2]?"mailto:"+(n=U(this.options.mangle?t(e[1]):e[1])):n=U(e[1]);return{type:"link",raw:e[0],text:n,href:t,tokens:[{type:"text",raw:n,text:n}]}}},t.url=function(e,t){var n,r,i,s;if(n=this.rules.inline.url.exec(e)){if("@"===n[2])i="mailto:"+(r=U(this.options.mangle?t(n[0]):n[0]));else{for(;s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0],s!==n[0];);r=U(n[0]),i="www."===n[1]?"http://"+r:r}return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}},t.inlineText=function(e,t,n){e=this.rules.inline.text.exec(e);if(e){n=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):U(e[0]):e[0]:U(this.options.smartypants?n(e[0]):e[0]);return{type:"text",raw:e[0],text:n}}},e}(),R=$,T=z,$=A,z={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:R,table:R,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};z.def=T(z.def).replace("label",z._label).replace("title",z._title).getRegex(),z.bullet=/(?:[*+-]|\d{1,9}[.)])/,z.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,z.item=T(z.item,"gm").replace(/bull/g,z.bullet).getRegex(),z.listItemStart=T(/^( *)(bull)/).replace("bull",z.bullet).getRegex(),z.list=T(z.list).replace(/bull/g,z.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+z.def.source+")").getRegex(),z._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",z._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,z.html=T(z.html,"i").replace("comment",z._comment).replace("tag",z._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),z.paragraph=T(z._paragraph).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",z._tag).getRegex(),z.blockquote=T(z.blockquote).replace("paragraph",z.paragraph).getRegex(),z.normal=$({},z),z.gfm=$({},z.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),z.gfm.nptable=T(z.gfm.nptable).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",z._tag).getRegex(),z.gfm.table=T(z.gfm.table).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",z._tag).getRegex(),z.pedantic=$({},z.normal,{html:T("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",z._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:R,paragraph:T(z.normal._paragraph).replace("hr",z.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",z.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});R={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:R,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:R,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};R.punctuation=T(R.punctuation).replace(/punctuation/g,R._punctuation).getRegex(),R._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",R._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",R._comment=T(z._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),R.em.start=T(R.em.start).replace(/punctuation/g,R._punctuation).getRegex(),R.em.middle=T(R.em.middle).replace(/punctuation/g,R._punctuation).replace(/overlapSkip/g,R._overlapSkip).getRegex(),R.em.endAst=T(R.em.endAst,"g").replace(/punctuation/g,R._punctuation).getRegex(),R.em.endUnd=T(R.em.endUnd,"g").replace(/punctuation/g,R._punctuation).getRegex(),R.strong.start=T(R.strong.start).replace(/punctuation/g,R._punctuation).getRegex(),R.strong.middle=T(R.strong.middle).replace(/punctuation/g,R._punctuation).replace(/overlapSkip/g,R._overlapSkip).getRegex(),R.strong.endAst=T(R.strong.endAst,"g").replace(/punctuation/g,R._punctuation).getRegex(),R.strong.endUnd=T(R.strong.endUnd,"g").replace(/punctuation/g,R._punctuation).getRegex(),R.blockSkip=T(R._blockSkip,"g").getRegex(),R.overlapSkip=T(R._overlapSkip,"g").getRegex(),R._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,R._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,R._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,R.autolink=T(R.autolink).replace("scheme",R._scheme).replace("email",R._email).getRegex(),R._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,R.tag=T(R.tag).replace("comment",R._comment).replace("attribute",R._attribute).getRegex(),R._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,R._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,R._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,R.link=T(R.link).replace("label",R._label).replace("href",R._href).replace("title",R._title).getRegex(),R.reflink=T(R.reflink).replace("label",R._label).getRegex(),R.reflinkSearch=T(R.reflinkSearch,"g").replace("reflink",R.reflink).replace("nolink",R.nolink).getRegex(),R.normal=$({},R),R.pedantic=$({},R.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:T(/^!?\[(label)\]\((.*?)\)/).replace("label",R._label).getRegex(),reflink:T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",R._label).getRegex()}),R.gfm=$({},R.normal,{escape:T(R.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),R.gfm.url=T(R.gfm.url,"i").replace("email",R.gfm._extended_email).getRegex(),R.breaks=$({},R.gfm,{br:T(R.br).replace("{2,}","*").getRegex(),text:T(R.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var R={block:z,inline:R},P=t.defaults,L=R.block,N=R.inline,B=Z;function F(e){return e.replace(/---/g,"???").replace(/--/g,"???").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1???").replace(/'/g,"???").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1???").replace(/"/g,"???").replace(/\.{3}/g,"???")}function M(e){for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),.5<Math.random()&&(t="x"+t.toString(16)),n+="&#"+t+";";return n}var X=function(){function n(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||P,this.options.tokenizer=this.options.tokenizer||new D,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;e={block:L.normal,inline:N.normal};this.options.pedantic?(e.block=L.pedantic,e.inline=N.pedantic):this.options.gfm&&(e.block=L.gfm,this.options.breaks?e.inline=N.breaks:e.inline=N.gfm),this.tokenizer.rules=e}n.lex=function(e,t){return new n(t).lex(e)},n.lexInline=function(e,t){return new n(t).inlineTokens(e)};var e,t,r=n.prototype;return r.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},r.blockTokens=function(e,t,n){var r,i,s,l;for(void 0===t&&(t=[]),void 0===n&&(n=!0),e=e.replace(/^ +$/gm,"");e;)if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((l=t[t.length-1]).raw+="\n"+r.raw,l.text+="\n"+r.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),s=r.items.length,i=0;i<s;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.paragraph(e)))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.text(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((l=t[t.length-1]).raw+="\n"+r.raw,l.text+="\n"+r.text);else if(e){var a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}throw new Error(a)}return t},r.inline=function(e){for(var t,n,r,i,s,l=e.length,a=0;a<l;a++)switch((s=e[a]).type){case"paragraph":case"text":case"heading":s.tokens=[],this.inlineTokens(s.text,s.tokens);break;case"table":for(s.tokens={header:[],cells:[]},r=s.header.length,t=0;t<r;t++)s.tokens.header[t]=[],this.inlineTokens(s.header[t],s.tokens.header[t]);for(r=s.cells.length,t=0;t<r;t++)for(i=s.cells[t],s.tokens.cells[t]=[],n=0;n<i.length;n++)s.tokens.cells[t][n]=[],this.inlineTokens(i[n],s.tokens.cells[t][n]);break;case"blockquote":this.inline(s.tokens);break;case"list":for(r=s.items.length,t=0;t<r;t++)this.inline(s.items[t].tokens)}return e},r.inlineTokens=function(e,t,n,r){var i;void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===r&&(r=!1);var s,l,a,o=e;if(this.tokens.links){var c=Object.keys(this.tokens.links);if(0<c.length)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(o));)c.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,s.index)+"["+B("a",s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,s.index)+"["+B("a",s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;e;)if(l||(a=""),l=!1,i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e,n,r))e=e.substring(i.raw.length),n=i.inLink,r=i.inRawBlock,t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.strong(e,o,a))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.em(e,o,a))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.autolink(e,M))e=e.substring(i.raw.length),t.push(i);else if(n||!(i=this.tokenizer.url(e,M))){if(i=this.tokenizer.inlineText(e,r,F))e=e.substring(i.raw.length),a=i.raw.slice(-1),l=!0,t.push(i);else if(e){var u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}else e=e.substring(i.raw.length),t.push(i);return t},e=n,t=[{key:"rules",get:function(){return{block:L,inline:N}}}],(r=null)&&i(e.prototype,r),t&&i(e,t),n}(),G=t.defaults,V=S,H=_,J=function(){function e(e){this.options=e||G}var t=e.prototype;return t.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];return!this.options.highlight||null!=(t=this.options.highlight(e,r))&&t!==e&&(n=!0,e=t),r?'<pre><code class="'+this.options.langPrefix+H(r,!0)+'">'+(n?e:H(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:H(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n"+(t=t&&"<tbody>"+t+"</tbody>")+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){if(null===(e=V(this.options.sanitize,this.options.baseUrl,e)))return n;e='<a href="'+H(e)+'"';return t&&(e+=' title="'+t+'"'),e+=">"+n+"</a>"},t.image=function(e,t,n){if(null===(e=V(this.options.sanitize,this.options.baseUrl,e)))return n;n='<img src="'+e+'" alt="'+n+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),K=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),Q=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var n=e,r=0;if(this.seen.hasOwnProperty(n))for(r=this.seen[e];n=e+"-"+ ++r,this.seen.hasOwnProperty(n););return t||(this.seen[e]=r,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={});var n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)},e}(),W=t.defaults,Y=y,ee=function(){function n(e){this.options=e||W,this.options.renderer=this.options.renderer||new J,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new K,this.slugger=new Q}n.parse=function(e,t){return new n(t).parse(e)},n.parseInline=function(e,t){return new n(t).parseInline(e)};var e=n.prototype;return e.parse=function(e,t){void 0===t&&(t=!0);for(var n,r,i,s,l,a,o,c,u,p,h,g,f,d,k,b="",m=e.length,x=0;x<m;x++)switch((c=e[x]).type){case"space":continue;case"hr":b+=this.renderer.hr();continue;case"heading":b+=this.renderer.heading(this.parseInline(c.tokens),c.depth,Y(this.parseInline(c.tokens,this.textRenderer)),this.slugger);continue;case"code":b+=this.renderer.code(c.text,c.lang,c.escaped);continue;case"table":for(a=u="",i=c.header.length,n=0;n<i;n++)a+=this.renderer.tablecell(this.parseInline(c.tokens.header[n]),{header:!0,align:c.align[n]});for(u+=this.renderer.tablerow(a),o="",i=c.cells.length,n=0;n<i;n++){for(a="",s=(l=c.tokens.cells[n]).length,r=0;r<s;r++)a+=this.renderer.tablecell(this.parseInline(l[r]),{header:!1,align:c.align[r]});o+=this.renderer.tablerow(a)}b+=this.renderer.table(u,o);continue;case"blockquote":o=this.parse(c.tokens),b+=this.renderer.blockquote(o);continue;case"list":for(u=c.ordered,w=c.start,p=c.loose,i=c.items.length,o="",n=0;n<i;n++)f=(g=c.items[n]).checked,d=g.task,h="",g.task&&(k=this.renderer.checkbox(f),p?0<g.tokens.length&&"text"===g.tokens[0].type?(g.tokens[0].text=k+" "+g.tokens[0].text,g.tokens[0].tokens&&0<g.tokens[0].tokens.length&&"text"===g.tokens[0].tokens[0].type&&(g.tokens[0].tokens[0].text=k+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:k}):h+=k),h+=this.parse(g.tokens,p),o+=this.renderer.listitem(h,d,f);b+=this.renderer.list(o,u,w);continue;case"html":b+=this.renderer.html(c.text);continue;case"paragraph":b+=this.renderer.paragraph(this.parseInline(c.tokens));continue;case"text":for(o=c.tokens?this.parseInline(c.tokens):c.text;x+1<m&&"text"===e[x+1].type;)o+="\n"+((c=e[++x]).tokens?this.parseInline(c.tokens):c.text);b+=t?this.renderer.paragraph(o):o;continue;default:var w='Token with "'+c.type+'" type was not found.';if(this.options.silent)return void console.error(w);throw new Error(w)}return b},e.parseInline=function(e,t){t=t||this.renderer;for(var n,r="",i=e.length,s=0;s<i;s++)switch((n=e[s]).type){case"escape":r+=t.text(n.text);break;case"html":r+=t.html(n.text);break;case"link":r+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":r+=t.image(n.href,n.title,n.text);break;case"strong":r+=t.strong(this.parseInline(n.tokens,t));break;case"em":r+=t.em(this.parseInline(n.tokens,t));break;case"codespan":r+=t.codespan(n.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(n.tokens,t));break;case"text":r+=t.text(n.text);break;default:var l='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}return r},n}(),te=A,ne=I,re=_,_=t.getDefaults,ie=t.changeDefaults,t=t.defaults;function se(e,n,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof n&&(r=n,n=null),n=te({},se.defaults,n||{}),ne(n),r){var i,s=n.highlight;try{i=X.lex(e,n)}catch(e){return r(e)}var l=function(t){var e;if(!t)try{e=ee.parse(i,n)}catch(e){t=e}return n.highlight=s,t?r(t):r(null,e)};if(!s||s.length<3)return l();if(delete n.highlight,!i.length)return l();var a=0;return se.walkTokens(i,function(n){"code"===n.type&&(a++,setTimeout(function(){s(n.text,n.lang,function(e,t){return e?l(e):(null!=t&&t!==n.text&&(n.text=t,n.escaped=!0),void(0===--a&&l()))})},0))}),void(0===a&&l())}try{var t=X.lex(e,n);return n.walkTokens&&se.walkTokens(t,n.walkTokens),ee.parse(t,n)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",n.silent)return"<p>An error occurred:</p><pre>"+re(e.message+"",!0)+"</pre>";throw e}}return se.options=se.setOptions=function(e){return te(se.defaults,e),ie(se.defaults),se},se.getDefaults=_,se.defaults=t,se.use=function(a){var t,n=te({},a);a.renderer&&function(){var e,l=se.defaults.renderer||new J;for(e in a.renderer)!function(i){var s=l[i];l[i]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=a.renderer[i].apply(l,t);return!1===r&&(r=s.apply(l,t)),r}}(e);n.renderer=l}(),a.tokenizer&&function(){var e,l=se.defaults.tokenizer||new D;for(e in a.tokenizer)!function(i){var s=l[i];l[i]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=a.tokenizer[i].apply(l,t);return!1===r&&(r=s.apply(l,t)),r}}(e);n.tokenizer=l}(),a.walkTokens&&(t=se.defaults.walkTokens,n.walkTokens=function(e){a.walkTokens(e),t&&t(e)}),se.setOptions(n)},se.walkTokens=function(e,t){for(var n,r=p(e);!(n=r()).done;){var i=n.value;switch(t(i),i.type){case"table":for(var s=p(i.tokens.header);!(l=s()).done;){var l=l.value;se.walkTokens(l,t)}for(var a,o=p(i.tokens.cells);!(a=o()).done;)for(var c=p(a.value);!(u=c()).done;){var u=u.value;se.walkTokens(u,t)}break;case"list":se.walkTokens(i.items,t);break;default:i.tokens&&se.walkTokens(i.tokens,t)}}},se.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=te({},se.defaults,t||{}),ne(t);try{var n=X.lexInline(e,t);return t.walkTokens&&se.walkTokens(n,t.walkTokens),ee.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+re(e.message+"",!0)+"</pre>";throw e}},se.Parser=ee,se.parser=ee.parse,se.Renderer=J,se.TextRenderer=K,se.Lexer=X,se.lexer=X.lex,se.Tokenizer=D,se.Slugger=Q,se.parse=se});

/*
  Highlight.js 10.5.0 (af20048d)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs=function(){"use strict";function e(t){
    return t instanceof Map?t.clear=t.delete=t.set=()=>{
        throw Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=()=>{
        throw Error("set is read-only")
    }),Object.freeze(t),Object.getOwnPropertyNames(t).forEach((n=>{var s=t[n]
    ;"object"!=typeof s||Object.isFrozen(s)||e(s)})),t}var t=e,n=e;t.default=n
;class s{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}
    ignoreMatch(){this.ignore=!0}}function r(e){
    return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function a(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const i=e=>!!e.kind
;class o{constructor(e,t){
    this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
    this.buffer+=r(e)}openNode(e){if(!i(e))return;let t=e.kind
;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){
    i(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
    this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={
    children:[]},this.stack=[this.rootNode]}get top(){
    return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
    this.top.children.push(e)}openNode(e){const t={kind:e,children:[]}
;this.add(t),this.stack.push(t)}closeNode(){
    if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
    for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
    walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
        return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
            t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
        "string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
            l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}
    addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}
    addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root
    ;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){
        return new o(this,this.options).value()}finalize(){return!0}}function u(e){
    return e?"string"==typeof e?e:e.source:null}
    const g="[a-zA-Z]\\w*",d="[a-zA-Z_]\\w*",h="\\b\\d+(\\.\\d+)?",f="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",p="\\b(0b[01]+)",m={
        begin:"\\\\[\\s\\S]",relevance:0},b={className:"string",begin:"'",end:"'",
        illegal:"\\n",contains:[m]},x={className:"string",begin:'"',end:'"',
        illegal:"\\n",contains:[m]},E={
        begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },v=(e,t,n={})=>{const s=a({className:"comment",begin:e,end:t,contains:[]},n)
    ;return s.contains.push(E),s.contains.push({className:"doctag",
        begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),s
    },N=v("//","$"),w=v("/\\*","\\*/"),R=v("#","$");var y=Object.freeze({
        __proto__:null,IDENT_RE:g,UNDERSCORE_IDENT_RE:d,NUMBER_RE:h,C_NUMBER_RE:f,
        BINARY_NUMBER_RE:p,
        RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG:(e={})=>{const t=/^#![ ]*\//
        ;return e.binary&&(e.begin=((...e)=>e.map((e=>u(e))).join(""))(t,/.*\b/,e.binary,/\b.*/)),
            a({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{
                    0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:m,APOS_STRING_MODE:b,
        QUOTE_STRING_MODE:x,PHRASAL_WORDS_MODE:E,COMMENT:v,C_LINE_COMMENT_MODE:N,
        C_BLOCK_COMMENT_MODE:w,HASH_COMMENT_MODE:R,NUMBER_MODE:{className:"number",
            begin:h,relevance:0},C_NUMBER_MODE:{className:"number",begin:f,relevance:0},
        BINARY_NUMBER_MODE:{className:"number",begin:p,relevance:0},CSS_NUMBER_MODE:{
            className:"number",
            begin:h+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",
                begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[m,{begin:/\[/,end:/\]/,
                    relevance:0,contains:[m]}]}]},TITLE_MODE:{className:"title",begin:g,relevance:0
        },UNDERSCORE_TITLE_MODE:{className:"title",begin:d,relevance:0},METHOD_GUARD:{
            begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
            "on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
                t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function _(e,t){
        "."===e.input[e.index-1]&&t.ignoreMatch()}function k(e,t){
        t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
            e.__beforeBegin=_,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords)
    }function M(e,t){
        Array.isArray(e.illegal)&&(e.illegal=((...e)=>"("+e.map((e=>u(e))).join("|")+")")(...e.illegal))
    }function O(e,t){if(e.match){
        if(e.begin||e.end)throw Error("begin & end are not supported with match")
            ;e.begin=e.match,delete e.match}}function A(e,t){
        void 0===e.relevance&&(e.relevance=1)}
    const L=["of","and","for","in","not","or","if","then","parent","list","value"]
    ;function B(e,t){return t?Number(t):(e=>L.includes(e.toLowerCase()))(e)?0:1}
    function I(e,{plugins:t}){function n(t,n){
        return RegExp(u(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class s{
        constructor(){
            this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
        addRule(e,t){
            t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
                this.matchAt+=(e=>RegExp(e.toString()+"|").exec("").length-1)(e)+1}compile(){
            0===this.regexes.length&&(this.exec=()=>null)
            ;const e=this.regexes.map((e=>e[1]));this.matcherRe=n(((e,t="|")=>{
                const n=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let s=0,r=""
                ;for(let a=0;a<e.length;a++){s+=1;const i=s;let o=u(e[a])
                ;for(a>0&&(r+=t),r+="(";o.length>0;){const e=n.exec(o);if(null==e){r+=o;break}
                    r+=o.substring(0,e.index),
                        o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+(Number(e[1])+i):(r+=e[0],
                    "("===e[0]&&s++)}r+=")"}return r})(e),!0),this.lastIndex=0}exec(e){
            this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e)
            ;if(!t)return null
                ;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),s=this.matchIndexes[n]
            ;return t.splice(0,n),Object.assign(t,s)}}class r{constructor(){
        this.rules=[],this.multiRegexes=[],
            this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
        if(this.multiRegexes[e])return this.multiRegexes[e];const t=new s
        ;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
            t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
        return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
        this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
        const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
        ;let n=t.exec(e)
        ;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
            const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
        return n&&(this.regexIndex+=n.position+1,
        this.regexIndex===this.count&&this.considerAll()),n}}
        if(e.compilerExtensions||(e.compilerExtensions=[]),
        e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
            ;return e.classNameAliases=a(e.classNameAliases||{}),function t(s,i){const o=s
        ;if(s.compiled)return o
            ;[O].forEach((e=>e(s,i))),e.compilerExtensions.forEach((e=>e(s,i))),
            s.__beforeBegin=null,[k,M,A].forEach((e=>e(s,i))),s.compiled=!0;let l=null
        ;if("object"==typeof s.keywords&&(l=s.keywords.$pattern,
            delete s.keywords.$pattern),s.keywords&&(s.keywords=((e,t)=>{const n={}
        ;return"string"==typeof e?s("keyword",e):Object.keys(e).forEach((t=>{s(t,e[t])
        })),n;function s(e,s){t&&(s=s.toLowerCase()),s.split(" ").forEach((t=>{
            const s=t.split("|");n[s[0]]=[e,B(s[0],s[1])]}))}
        })(s.keywords,e.case_insensitive)),
        s.lexemes&&l)throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ")
            ;return l=l||s.lexemes||/\w+/,
            o.keywordPatternRe=n(l,!0),i&&(s.begin||(s.begin=/\B|\b/),
            o.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),
        s.end||s.endsWithParent||(s.end=/\B|\b/),
        s.end&&(o.endRe=n(s.end)),o.terminatorEnd=u(s.end)||"",
        s.endsWithParent&&i.terminatorEnd&&(o.terminatorEnd+=(s.end?"|":"")+i.terminatorEnd)),
        s.illegal&&(o.illegalRe=n(s.illegal)),
        s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>a(e,{
            variants:null},t)))),e.cachedVariants?e.cachedVariants:T(e)?a(e,{
            starts:e.starts?a(e.starts):null
        }):Object.isFrozen(e)?a(e):e))("self"===e?s:e)))),s.contains.forEach((e=>{t(e,o)
        })),s.starts&&t(s.starts,i),o.matcher=(e=>{const t=new r
        ;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
        }))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
        }),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(o),o}(e)}function T(e){
        return!!e&&(e.endsWithParent||T(e.starts))}function j(e){const t={
        props:["language","code","autodetect"],data:()=>({detectedLanguage:"",
            unknownLanguage:!1}),computed:{className(){
                return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){
                if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),
                    this.unknownLanguage=!0,r(this.code);let t={}
                ;return this.autoDetect?(t=e.highlightAuto(this.code),
                    this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),
                    this.detectedLanguage=this.language),t.value},autoDetect(){
                return!(this.language&&(e=this.autodetect,!e&&""!==e));var e},
            ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{
            class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{
        Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const S={
        "after:highlightBlock":({block:e,result:t,text:n})=>{const s=D(e)
        ;if(!s.length)return;const a=document.createElement("div")
        ;a.innerHTML=t.value,t.value=((e,t,n)=>{let s=0,a="";const i=[];function o(){
            return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t
        }function l(e){a+="<"+P(e)+[].map.call(e.attributes,(function(e){
            return" "+e.nodeName+'="'+r(e.value)+'"'})).join("")+">"}function c(e){
            a+="</"+P(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}
            for(;e.length||t.length;){let t=o()
            ;if(a+=r(n.substring(s,t[0].offset)),s=t[0].offset,t===e){i.reverse().forEach(c)
            ;do{u(t.splice(0,1)[0]),t=o()}while(t===e&&t.length&&t[0].offset===s)
                ;i.reverse().forEach(l)
            }else"start"===t[0].event?i.push(t[0].node):i.pop(),u(t.splice(0,1)[0])}
            return a+r(n.substr(s))})(s,D(a),n)}};function P(e){
        return e.nodeName.toLowerCase()}function D(e){const t=[];return function e(n,s){
        for(let r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?s+=r.nodeValue.length:1===r.nodeType&&(t.push({
            event:"start",offset:s,node:r}),s=e(r,s),P(r).match(/br|hr|img|input/)||t.push({
            event:"stop",offset:s,node:r}));return s}(e,0),t}const C=e=>{console.error(e)
        },H=(e,...t)=>{console.log("WARN: "+e,...t)},$=(e,t)=>{
            console.log(`Deprecated as of ${e}. ${t}`)},U=r,z=a,K=Symbol("nomatch")
    ;return(e=>{const n=Object.create(null),r=Object.create(null),a=[];let i=!0
    ;const o=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",u={
        disableAutodetect:!0,name:"Plain text",contains:[]};let g={
        noHighlightRe:/^(no-?highlight)$/i,
        languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
        tabReplace:null,useBR:!1,languages:null,__emitter:c};function d(e){
        return g.noHighlightRe.test(e)}function h(e,t,n,s){const r={code:t,language:e}
    ;_("before:highlight",r);const a=r.result?r.result:f(r.language,r.code,n,s)
    ;return a.code=r.code,_("after:highlight",a),a}function f(e,t,r,o){const c=t
    ;function u(e,t){const n=w.case_insensitive?t[0].toLowerCase():t[0]
    ;return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}
        function d(){null!=_.subLanguage?(()=>{if(""===O)return;let e=null
        ;if("string"==typeof _.subLanguage){
            if(!n[_.subLanguage])return void M.addText(O)
                ;e=f(_.subLanguage,O,!0,k[_.subLanguage]),k[_.subLanguage]=e.top
        }else e=p(O,_.subLanguage.length?_.subLanguage:null)
        ;_.relevance>0&&(A+=e.relevance),M.addSublanguage(e.emitter,e.language)
        })():(()=>{if(!_.keywords)return void M.addText(O);let e=0
        ;_.keywordPatternRe.lastIndex=0;let t=_.keywordPatternRe.exec(O),n="";for(;t;){
            n+=O.substring(e,t.index);const s=u(_,t);if(s){const[e,r]=s
            ;M.addText(n),n="",A+=r;const a=w.classNameAliases[e]||e;M.addKeyword(t[0],a)
            }else n+=t[0];e=_.keywordPatternRe.lastIndex,t=_.keywordPatternRe.exec(O)}
            n+=O.substr(e),M.addText(n)})(),O=""}function h(e){
            return e.className&&M.openNode(w.classNameAliases[e.className]||e.className),
                _=Object.create(e,{parent:{value:_}}),_}function m(e,t,n){let r=((e,t)=>{
            const n=e&&e.exec(t);return n&&0===n.index})(e.endRe,n);if(r){if(e["on:end"]){
            const n=new s(e);e["on:end"](t,n),n.ignore&&(r=!1)}if(r){
            for(;e.endsParent&&e.parent;)e=e.parent;return e}}
            if(e.endsWithParent)return m(e.parent,t,n)}function b(e){
            return 0===_.matcher.regexIndex?(O+=e[0],1):(T=!0,0)}function x(e){
            const t=e[0],n=c.substr(e.index),s=m(_,e,n);if(!s)return K;const r=_
            ;r.skip?O+=t:(r.returnEnd||r.excludeEnd||(O+=t),d(),r.excludeEnd&&(O=t));do{
                _.className&&M.closeNode(),_.skip||_.subLanguage||(A+=_.relevance),_=_.parent
            }while(_!==s.parent)
                ;return s.starts&&(s.endSameAsBegin&&(s.starts.endRe=s.endRe),
                h(s.starts)),r.returnEnd?0:t.length}let E={};function v(t,n){const a=n&&n[0]
        ;if(O+=t,null==a)return d(),0
            ;if("begin"===E.type&&"end"===n.type&&E.index===n.index&&""===a){
            if(O+=c.slice(n.index,n.index+1),!i){const t=Error("0 width match regex")
            ;throw t.languageName=e,t.badRule=E.rule,t}return 1}
            if(E=n,"begin"===n.type)return function(e){
                const t=e[0],n=e.rule,r=new s(n),a=[n.__beforeBegin,n["on:begin"]]
                ;for(const n of a)if(n&&(n(e,r),r.ignore))return b(t)
                    ;return n&&n.endSameAsBegin&&(n.endRe=RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),
                    n.skip?O+=t:(n.excludeBegin&&(O+=t),
                        d(),n.returnBegin||n.excludeBegin||(O=t)),h(n),n.returnBegin?0:t.length}(n)
                ;if("illegal"===n.type&&!r){
                const e=Error('Illegal lexeme "'+a+'" for mode "'+(_.className||"<unnamed>")+'"')
                ;throw e.mode=_,e}if("end"===n.type){const e=x(n);if(e!==K)return e}
            if("illegal"===n.type&&""===a)return 1
                ;if(B>1e5&&B>3*n.index)throw Error("potential infinite loop, way more iterations than matches")
                ;return O+=a,a.length}const w=N(e)
        ;if(!w)throw C(l.replace("{}",e)),Error('Unknown language: "'+e+'"')
            ;const R=I(w,{plugins:a});let y="",_=o||R;const k={},M=new g.__emitter(g);(()=>{
            const e=[];for(let t=_;t!==w;t=t.parent)t.className&&e.unshift(t.className)
            ;e.forEach((e=>M.openNode(e)))})();let O="",A=0,L=0,B=0,T=!1;try{
            for(_.matcher.considerAll();;){
                B++,T?T=!1:_.matcher.considerAll(),_.matcher.lastIndex=L
                ;const e=_.matcher.exec(c);if(!e)break;const t=v(c.substring(L,e.index),e)
                ;L=e.index+t}return v(c.substr(L)),M.closeAllNodes(),M.finalize(),y=M.toHTML(),{
                relevance:A,value:y,language:e,illegal:!1,emitter:M,top:_}}catch(t){
            if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{
                    msg:t.message,context:c.slice(L-100,L+100),mode:t.mode},sofar:y,relevance:0,
                value:U(c),emitter:M};if(i)return{illegal:!1,relevance:0,value:U(c),emitter:M,
                language:e,top:_,errorRaised:t};throw t}}function p(e,t){
        t=t||g.languages||Object.keys(n);const s=(e=>{const t={relevance:0,
                emitter:new g.__emitter(g),value:U(e),illegal:!1,top:u}
            ;return t.emitter.addText(e),t})(e),r=t.filter(N).filter(R).map((t=>f(t,e,!1)))
        ;r.unshift(s);const a=r.sort(((e,t)=>{
            if(e.relevance!==t.relevance)return t.relevance-e.relevance
                ;if(e.language&&t.language){if(N(e.language).supersetOf===t.language)return 1
                ;if(N(t.language).supersetOf===e.language)return-1}return 0})),[i,o]=a,l=i
        ;return l.second_best=o,l}const m={"before:highlightBlock":({block:e})=>{
            g.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))
        },"after:highlightBlock":({result:e})=>{
            g.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},b=/^(<[^>]+>|\t)+/gm,x={
        "after:highlightBlock":({result:e})=>{
            g.tabReplace&&(e.value=e.value.replace(b,(e=>e.replace(/\t/g,g.tabReplace))))}}
    ;function E(e){let t=null;const n=(e=>{let t=e.className+" "
        ;t+=e.parentNode?e.parentNode.className:"";const n=g.languageDetectRe.exec(t)
        ;if(n){const t=N(n[1])
        ;return t||(H(l.replace("{}",n[1])),H("Falling back to no-highlight mode for this block.",e)),
            t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>d(e)||N(e)))})(e)
    ;if(d(n))return;_("before:highlightBlock",{block:e,language:n}),t=e
    ;const s=t.textContent,a=n?h(n,s,!0):p(s);_("after:highlightBlock",{block:e,
        result:a,text:s}),e.innerHTML=a.value,((e,t,n)=>{const s=t?r[t]:n
    ;e.classList.add("hljs"),s&&e.classList.add(s)})(e,n,a.language),e.result={
        language:a.language,re:a.relevance,relavance:a.relevance
    },a.second_best&&(e.second_best={language:a.second_best.language,
        re:a.second_best.relevance,relavance:a.second_best.relevance})}const v=()=>{
        v.called||(v.called=!0,document.querySelectorAll("pre code").forEach(E))}
    ;function N(e){return e=(e||"").toLowerCase(),n[e]||n[r[e]]}
        function w(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e]=t
        }))}function R(e){const t=N(e);return t&&!t.disableAutodetect}function _(e,t){
            const n=e;a.forEach((e=>{e[n]&&e[n](t)}))}Object.assign(e,{highlight:h,
            highlightAuto:p,fixMarkup:e=>{
                return $("10.2.0","fixMarkup will be removed entirely in v11.0"),
                    $("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),
                    t=e,
                    g.tabReplace||g.useBR?t.replace(o,(e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e)):t
                    ;var t},highlightBlock:E,configure:e=>{
                e.useBR&&($("10.3.0","'useBR' will be removed entirely in v11.0"),
                    $("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),
                    g=z(g,e)},initHighlighting:v,initHighlightingOnLoad:()=>{
                window.addEventListener("DOMContentLoaded",v,!1)},registerLanguage:(t,s)=>{
                let r=null;try{r=s(e)}catch(e){
                    if(C("Language definition for '{}' could not be registered.".replace("{}",t)),
                        !i)throw e;C(e),r=u}
                r.name||(r.name=t),n[t]=r,r.rawDefinition=s.bind(null,e),r.aliases&&w(r.aliases,{
                    languageName:t})},listLanguages:()=>Object.keys(n),getLanguage:N,
            registerAliases:w,requireLanguage:e=>{
                $("10.4.0","requireLanguage will be removed entirely in v11."),
                    $("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844")
                ;const t=N(e);if(t)return t
                    ;throw Error("The '{}' language is required, but not loaded.".replace("{}",e))},
            autoDetection:R,inherit:z,addPlugin:e=>{a.push(e)},vuePlugin:j(e).VuePlugin
        }),e.debugMode=()=>{i=!1},e.safeMode=()=>{i=!0},e.versionString="10.5.0"
        ;for(const e in y)"object"==typeof y[e]&&t(y[e])
        ;return Object.assign(e,y),e.addPlugin(m),e.addPlugin(S),e.addPlugin(x),e})({})
}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);hljs.registerLanguage("bash",(()=>{"use strict";function e(...e){
    return e.map((e=>{return(s=e)?"string"==typeof s?s:s.source:null;var s
    })).join("")}return s=>{const n={},t={begin:/\$\{/,end:/\}/,contains:["self",{
        begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{
        begin:e(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},t]});const a={
    className:"subst",begin:/\$\(/,end:/\)/,contains:[s.BACKSLASH_ESCAPE]},i={
    begin:/<<-?\s*(?=\w+)/,starts:{contains:[s.END_SAME_AS_BEGIN({begin:/(\w+)/,
            end:/(\w+)/,className:"string"})]}},c={className:"string",begin:/"/,end:/"/,
    contains:[s.BACKSLASH_ESCAPE,n,a]};a.contains.push(c);const o={begin:/\$\(\(/,
    end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},s.NUMBER_MODE,n]
},r=s.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
}),l={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
    contains:[s.inherit(s.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
    name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z._-]+\b/,
        keyword:"if then else elif fi for while in do done case esac function",
        literal:"true false",
        built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
    },contains:[r,s.SHEBANG(),l,o,s.HASH_COMMENT_MODE,i,c,{className:"",begin:/\\"/
    },{className:"string",begin:/'/,end:/'/},n]}}})());hljs.registerLanguage("dockerfile",(()=>{"use strict";return e=>({
    name:"Dockerfile",aliases:["docker"],case_insensitive:!0,
    keywords:"from maintainer expose env arg user onbuild stopsignal",
    contains:[e.HASH_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{
        beginKeywords:"run cmd entrypoint volume add copy workdir label healthcheck shell",
        starts:{end:/[^\\]$/,subLanguage:"bash"}}],illegal:"</"})})());hljs.registerLanguage("apache",(()=>{"use strict";return e=>{const n={
    className:"number",begin:/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/}
;return{name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,
    contains:[e.HASH_COMMENT_MODE,{className:"section",begin:/<\/?/,end:/>/,
        contains:[n,{className:"number",begin:/:\d{1,5}/
        },e.inherit(e.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",
        begin:/\w+/,relevance:0,keywords:{
            nomarkup:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
        },starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},
            contains:[{className:"meta",begin:/\s\[/,end:/\]$/},{className:"variable",
                begin:/[\$%]\{/,end:/\}/,contains:["self",{className:"number",begin:/[$%]\d+/}]
            },n,{className:"number",begin:/\d+/},e.QUOTE_STRING_MODE]}}],illegal:/\S/}}
})());hljs.registerLanguage("xml",(()=>{"use strict";function e(e){
    return e?"string"==typeof e?e:e.source:null}function n(e){return a("(?=",e,")")}
    function a(...n){return n.map((n=>e(n))).join("")}function s(...n){
        return"("+n.map((n=>e(n))).join("|")+")"}return e=>{
        const t=a(/[A-Z_]/,a("(",/[A-Z0-9_.-]+:/,")?"),/[A-Z0-9_.-]*/),i={
            className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,
            contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
        },c=e.inherit(r,{begin:/\(/,end:/\)/}),l=e.inherit(e.APOS_STRING_MODE,{
            className:"meta-string"}),g=e.inherit(e.QUOTE_STRING_MODE,{
            className:"meta-string"}),m={endsWithParent:!0,illegal:/</,relevance:0,
            contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,
                relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,
                        end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]
            }]};return{name:"HTML, XML",
            aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
            case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,
                relevance:10,contains:[r,g,l,c,{begin:/\[/,end:/\]/,contains:[{className:"meta",
                        begin:/<![a-z]/,end:/>/,contains:[r,c,g,l]}]}]},e.COMMENT(/<!--/,/-->/,{
                relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{
                className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",
                begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[m],starts:{
                    end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
                begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[m],starts:{
                    end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
                className:"tag",begin:/<>|<\/>/},{className:"tag",
                begin:a(/</,n(a(t,s(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",
                    begin:t,relevance:0,starts:m}]},{className:"tag",begin:a(/<\//,n(a(t,/>/))),
                contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0}]}]}}
})());hljs.registerLanguage("markdown",(()=>{"use strict";function n(...n){
    return n.map((n=>{return(e=n)?"string"==typeof e?e:e.source:null;var e
    })).join("")}return e=>{const a={begin:/<\/?[A-Za-z_]/,end:">",
    subLanguage:"xml",relevance:0},i={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0
    },{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance:2},{begin:n(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),
        relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{
        begin:/\[.+?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{
        className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,
        returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",
        excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",
        end:"\\]",excludeBegin:!0,excludeEnd:!0}]},s={className:"strong",contains:[],
    variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},c={
    className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{
        begin:/_(?!_)/,end:/_/,relevance:0}]};s.contains.push(c),c.contains.push(s)
;let t=[a,i]
;return s.contains=s.contains.concat(t),c.contains=c.contains.concat(t),
    t=t.concat(s,c),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{
        className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:t},{
            begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
                contains:t}]}]},a,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
        end:"\\s+",excludeEnd:!0},s,c,{className:"quote",begin:"^>\\s+",contains:t,
        end:"$"},{className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{
            begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{
            begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",
            contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{
        begin:"^[-\\*]{3,}",end:"$"},i,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{
            className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{
            className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}})());hljs.registerLanguage("vbscript",(()=>{"use strict";function e(e){
    return e?"string"==typeof e?e:e.source:null}function t(...t){
    return t.map((t=>e(t))).join("")}function r(...t){
    return"("+t.map((t=>e(t))).join("|")+")"}return e=>{
    const i="lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid split  cint sin datepart ltrim sqr time derived eval date formatpercent exp inputbox left ascw chrw regexp cstr err".split(" ")
    ;return{name:"VBScript",aliases:["vbs"],case_insensitive:!0,keywords:{
            keyword:"call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
            built_in:"server response request scriptengine scriptenginebuildversion scriptengineminorversion scriptenginemajorversion",
            literal:"true false null nothing empty"},illegal:"//",contains:[{
            begin:t(r(...i),"\\s*\\("),relevance:0,keywords:{built_in:i.join(" ")}
        },e.inherit(e.QUOTE_STRING_MODE,{contains:[{begin:'""'}]}),e.COMMENT(/'/,/$/,{
            relevance:0}),e.C_NUMBER_MODE]}}})());hljs.registerLanguage("go",(()=>{"use strict";return e=>{const n={
    keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
    literal:"true false iota nil",
    built_in:"append cap close complex copy imag len make new panic print println real recover delete"
};return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",
    contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",
        variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{
        className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1
        },e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",
        end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",
            begin:/\(/,end:/\)/,keywords:n,illegal:/["']/}]}]}}})());hljs.registerLanguage("csharp",(()=>{"use strict";return e=>{var n={
        keyword:["abstract","as","base","break","case","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]).join(" "),
        built_in:"bool byte char decimal delegate double dynamic enum float int long nint nuint object sbyte short string ulong unit ushort",
        literal:"default false null true"},a=e.inherit(e.TITLE_MODE,{
        begin:"[a-zA-Z](\\.?\\w)*"}),i={className:"number",variants:[{
            begin:"\\b(0b[01']+)"},{
            begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{
            begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],relevance:0},s={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]
    },t=e.inherit(s,{illegal:/\n/}),r={className:"subst",begin:/\{/,end:/\}/,
        keywords:n},l=e.inherit(r,{illegal:/\n/}),c={className:"string",begin:/\$"/,
        end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/
        },e.BACKSLASH_ESCAPE,l]},o={className:"string",begin:/\$@"/,end:'"',contains:[{
            begin:/\{\{/},{begin:/\}\}/},{begin:'""'},r]},d=e.inherit(o,{illegal:/\n/,
        contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},l]})
;r.contains=[o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_BLOCK_COMMENT_MODE],
    l.contains=[d,c,t,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.inherit(e.C_BLOCK_COMMENT_MODE,{
        illegal:/\n/})];var g={variants:[o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},E={begin:"<",end:">",contains:[{beginKeywords:"in out"},a]
},_=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",b={
    begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],
    keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,
        contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{
                begin:"\x3c!--|--\x3e"},{begin:"</?",end:">"}]}]
    }),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",
        end:"$",keywords:{
            "meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"
        }},g,i,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,
        illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"
        },a,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",
        relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
        contains:[a,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
        beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
        contains:[a,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",
        begin:"^\\s*\\[",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{
            className:"meta-string",begin:/"/,end:/"/}]},{
        beginKeywords:"new return throw await else",relevance:0},{className:"function",
        begin:"("+_+"\\s+)+"+e.IDENT_RE+"\\s*(<.+>\\s*)?\\(",returnBegin:!0,
        end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{
            beginKeywords:"public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
            relevance:0},{begin:e.IDENT_RE+"\\s*(<.+>\\s*)?\\(",returnBegin:!0,
            contains:[e.TITLE_MODE,E],relevance:0},{className:"params",begin:/\(/,end:/\)/,
            excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,
            contains:[g,i,e.C_BLOCK_COMMENT_MODE]
        },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},b]}}})());hljs.registerLanguage("cpp",(()=>{"use strict";function e(e){
    return((...e)=>e.map((e=>(e=>e?"string"==typeof e?e:e.source:null)(e))).join(""))("(",e,")?")
}return t=>{const n=(t=>{const n=t.COMMENT("//","$",{contains:[{begin:/\\\n/}]
    }),r="[a-zA-Z_]\\w*::",a="(decltype\\(auto\\)|"+e(r)+"[a-zA-Z_]\\w*"+e("<[^<>]+>")+")",s={
        className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},i={className:"string",
        variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",
            contains:[t.BACKSLASH_ESCAPE]},{
            begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
            end:"'",illegal:"."},t.END_SAME_AS_BEGIN({
            begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},c={
        className:"number",variants:[{begin:"\\b(0b[01']+)"},{
            begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        },{
            begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],relevance:0},o={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
            "meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },contains:[{begin:/\\\n/,relevance:0},t.inherit(i,{className:"meta-string"}),{
            className:"meta-string",begin:/<.*?>/,end:/$/,illegal:"\\n"
        },n,t.C_BLOCK_COMMENT_MODE]},l={className:"title",begin:e(r)+t.IDENT_RE,
        relevance:0},d=e(r)+t.IDENT_RE+"\\s*\\(",u={
        keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
        literal:"true false nullptr NULL"},p=[o,s,n,t.C_BLOCK_COMMENT_MODE,c,i],m={
        variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{
            beginKeywords:"new throw return else",end:/;/}],keywords:u,contains:p.concat([{
            begin:/\(/,end:/\)/,keywords:u,contains:p.concat(["self"]),relevance:0}]),
        relevance:0},_={className:"function",begin:"("+a+"[\\*&\\s]+)+"+d,
        returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:u,illegal:/[^\w\s\*&:<>.]/,
        contains:[{begin:"decltype\\(auto\\)",keywords:u,relevance:0},{begin:d,
            returnBegin:!0,contains:[l],relevance:0},{className:"params",begin:/\(/,
            end:/\)/,keywords:u,relevance:0,contains:[n,t.C_BLOCK_COMMENT_MODE,i,c,s,{
                begin:/\(/,end:/\)/,keywords:u,relevance:0,
                contains:["self",n,t.C_BLOCK_COMMENT_MODE,i,c,s]}]
        },s,n,t.C_BLOCK_COMMENT_MODE,o]};return{
        aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],keywords:u,
        disableAutodetect:!0,illegal:"</",contains:[].concat(m,_,p,[o,{
            begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            end:">",keywords:u,contains:["self",s]},{begin:t.IDENT_RE+"::",keywords:u},{
            className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,
            contains:[{beginKeywords:"final class struct"},t.TITLE_MODE]}]),exports:{
            preprocessor:o,strings:i,keywords:u}}})(t)
;return n.disableAutodetect=!1,n.name="C++",
    n.aliases=["cc","c++","h++","hpp","hh","hxx","cxx"],n}})());hljs.registerLanguage("http",(()=>{"use strict";function e(...e){
    return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n
    })).join("")}return n=>{const a="HTTP/(2|1\\.[01])",s=[{className:"attribute",
    begin:e("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{
            className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}
},{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{
    name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+a+" \\d{3})",
        end:/$/,contains:[{className:"meta",begin:a},{className:"number",
            begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:s}},{
        begin:"(?=^[A-Z]+ (.*?) "+a+"$)",end:/$/,contains:[{className:"string",
            begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:a},{
            className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:s}
    }]}}})());hljs.registerLanguage("json",(()=>{"use strict";return n=>{const e={
    literal:"true false null"
},i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],a=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],l={
    end:",",endsWithParent:!0,excludeEnd:!0,contains:a,keywords:e},t={begin:/\{/,
    end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,
        contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(l,{begin:/:/
    })].concat(i),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[n.inherit(l)],
    illegal:"\\S"};return a.push(t,s),i.forEach((n=>{a.push(n)})),{name:"JSON",
    contains:a,keywords:e,illegal:"\\S"}}})());hljs.registerLanguage("sql_more",(()=>{"use strict";return e=>{
    var t=e.COMMENT("--","$");return{name:"SQL (more)",aliases:["mysql","oracle"],
        disableAutodetect:!0,case_insensitive:!0,illegal:/[<>{}*]/,contains:[{
            beginKeywords:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",
            end:/;/,endsWithParent:!0,keywords:{$pattern:/[\w\.]+/,
                keyword:"as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                literal:"true false null unknown",
                built_in:"array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void"
            },contains:[{className:"string",begin:"'",end:"'",contains:[{begin:"''"}]},{
                className:"string",begin:'"',end:'"',contains:[{begin:'""'}]},{
                className:"string",begin:"`",end:"`"
            },e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,e.HASH_COMMENT_MODE]
        },e.C_BLOCK_COMMENT_MODE,t,e.HASH_COMMENT_MODE]}}})());hljs.registerLanguage("vbnet",(()=>{"use strict";function e(e){
    return e?"string"==typeof e?e:e.source:null}function n(...n){
    return n.map((n=>e(n))).join("")}function t(...n){
    return"("+n.map((n=>e(n))).join("|")+")"}return e=>{
    const a=/\d{1,2}\/\d{1,2}\/\d{4}/,i=/\d{4}-\d{1,2}-\d{1,2}/,s=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,r=/\d{1,2}(:\d{1,2}){1,2}/,o={
        className:"literal",variants:[{begin:n(/# */,t(i,a),/ *#/)},{
            begin:n(/# */,r,/ *#/)},{begin:n(/# */,s,/ *#/)},{
            begin:n(/# */,t(i,a),/ +/,t(s,r),/ *#/)}]},l=e.COMMENT(/'''/,/$/,{contains:[{
            className:"doctag",begin:/<\/?/,end:/>/}]}),c=e.COMMENT(null,/$/,{variants:[{
            begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]});return{name:"Visual Basic .NET",
        aliases:["vb"],case_insensitive:!0,classNameAliases:{label:"symbol"},keywords:{
            keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
            built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
            type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
            literal:"true false nothing"},
        illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[{
            className:"string",begin:/"(""|[^/n])"C\b/},{className:"string",begin:/"/,
            end:/"/,illegal:/\n/,contains:[{begin:/""/}]},o,{className:"number",relevance:0,
            variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
            },{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{
                begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},{
            className:"label",begin:/^\w+:/},l,c,{className:"meta",
            begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
            end:/$/,keywords:{
                "meta-keyword":"const disable else elseif enable end externalsource if region then"
            },contains:[c]}]}}})());hljs.registerLanguage("lua",(()=>{"use strict";return e=>{
    const t="\\[=*\\[",a="\\]=*\\]",n={begin:t,end:a,contains:["self"]
    },o=[e.COMMENT("--(?!\\[=*\\[)","$"),e.COMMENT("--\\[=*\\[",a,{contains:[n],
        relevance:10})];return{name:"Lua",keywords:{$pattern:e.UNDERSCORE_IDENT_RE,
            literal:"true false nil",
            keyword:"and break do else elseif end for goto if in local not or repeat return then until while",
            built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
        },contains:o.concat([{className:"function",beginKeywords:"function",end:"\\)",
            contains:[e.inherit(e.TITLE_MODE,{
                begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",
                begin:"\\(",endsWithParent:!0,contains:o}].concat(o)
        },e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",
            begin:t,end:a,contains:[n],relevance:5}])}}})());hljs.registerLanguage("processing",(()=>{"use strict";return e=>({
    name:"Processing",keywords:{
        keyword:"BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
        literal:"P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",title:"setup draw",
        built_in:"displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed"
    },
    contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE]
})})());hljs.registerLanguage("c",(()=>{"use strict";function e(e){
    return((...e)=>e.map((e=>(e=>e?"string"==typeof e?e:e.source:null)(e))).join(""))("(",e,")?")
}return t=>{const n=(t=>{const n=t.COMMENT("//","$",{contains:[{begin:/\\\n/}]
    }),r="[a-zA-Z_]\\w*::",a="(decltype\\(auto\\)|"+e(r)+"[a-zA-Z_]\\w*"+e("<[^<>]+>")+")",s={
        className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},i={className:"string",
        variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",
            contains:[t.BACKSLASH_ESCAPE]},{
            begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
            end:"'",illegal:"."},t.END_SAME_AS_BEGIN({
            begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
        className:"number",variants:[{begin:"\\b(0b[01']+)"},{
            begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        },{
            begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],relevance:0},c={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
            "meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },contains:[{begin:/\\\n/,relevance:0},t.inherit(i,{className:"meta-string"}),{
            className:"meta-string",begin:/<.*?>/,end:/$/,illegal:"\\n"
        },n,t.C_BLOCK_COMMENT_MODE]},l={className:"title",begin:e(r)+t.IDENT_RE,
        relevance:0},d=e(r)+t.IDENT_RE+"\\s*\\(",u={
        keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
        literal:"true false nullptr NULL"},m=[c,s,n,t.C_BLOCK_COMMENT_MODE,o,i],p={
        variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{
            beginKeywords:"new throw return else",end:/;/}],keywords:u,contains:m.concat([{
            begin:/\(/,end:/\)/,keywords:u,contains:m.concat(["self"]),relevance:0}]),
        relevance:0},_={className:"function",begin:"("+a+"[\\*&\\s]+)+"+d,
        returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:u,illegal:/[^\w\s\*&:<>.]/,
        contains:[{begin:"decltype\\(auto\\)",keywords:u,relevance:0},{begin:d,
            returnBegin:!0,contains:[l],relevance:0},{className:"params",begin:/\(/,
            end:/\)/,keywords:u,relevance:0,contains:[n,t.C_BLOCK_COMMENT_MODE,i,o,s,{
                begin:/\(/,end:/\)/,keywords:u,relevance:0,
                contains:["self",n,t.C_BLOCK_COMMENT_MODE,i,o,s]}]
        },s,n,t.C_BLOCK_COMMENT_MODE,c]};return{
        aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],keywords:u,
        disableAutodetect:!0,illegal:"</",contains:[].concat(p,_,m,[c,{
            begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            end:">",keywords:u,contains:["self",s]},{begin:t.IDENT_RE+"::",keywords:u},{
            className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,
            contains:[{beginKeywords:"final class struct"},t.TITLE_MODE]}]),exports:{
            preprocessor:c,strings:i,keywords:u}}})(t)
;return n.name="C",n.aliases=["c","h"],n}})());hljs.registerLanguage("typescript",(()=>{"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;function t(e){return i("(?=",e,")")}function i(...e){return e.map((e=>{
    return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}return r=>{
    const c={$pattern:e,
            keyword:n.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]).join(" "),
            literal:a.join(" "),
            built_in:s.concat(["any","void","number","boolean","string","object","never","enum"]).join(" ")
        },o={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},l=(e,n,a)=>{
            const s=e.contains.findIndex((e=>e.label===n))
            ;if(-1===s)throw Error("can not find mode to replace");e.contains.splice(s,1,a)
        },b=(r=>{const c=e,o={begin:/<[A-Za-z0-9\\._:-]+/,
            end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
                const a=e[0].length+e.index,s=e.input[a];"<"!==s?">"===s&&(((e,{after:n})=>{
                    const a="</"+e[0].slice(1);return-1!==e.input.indexOf(a,n)})(e,{after:a
                })||n.ignoreMatch()):n.ignoreMatch()}},l={$pattern:e,keyword:n.join(" "),
            literal:a.join(" "),built_in:s.join(" ")
        },b="\\.([0-9](_?[0-9])*)",d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={
            className:"number",variants:[{
                begin:`(\\b(${d})((${b})|\\.)?|(${b}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
                begin:`\\b(${d})\\b((${b})\\b|\\.)?|(${b})\\b`},{
                begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
                begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
                begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
                begin:"\\b0[0-7]+n?\\b"}],relevance:0},u={className:"subst",begin:"\\$\\{",
            end:"\\}",keywords:l,contains:[]},E={begin:"html`",end:"",starts:{end:"`",
                returnEnd:!1,contains:[r.BACKSLASH_ESCAPE,u],subLanguage:"xml"}},m={
            begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
                contains:[r.BACKSLASH_ESCAPE,u],subLanguage:"css"}},_={className:"string",
            begin:"`",end:"`",contains:[r.BACKSLASH_ESCAPE,u]},y={className:"comment",
            variants:[r.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
                    className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",
                        end:"\\}",relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",
                        endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
            }),r.C_BLOCK_COMMENT_MODE,r.C_LINE_COMMENT_MODE]
        },p=[r.APOS_STRING_MODE,r.QUOTE_STRING_MODE,E,m,_,g,r.REGEXP_MODE]
        ;u.contains=p.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(p)
        });const N=[].concat(y,u.contains),f=N.concat([{begin:/\(/,end:/\)/,keywords:l,
            contains:["self"].concat(N)}]),A={className:"params",begin:/\(/,end:/\)/,
            excludeBegin:!0,excludeEnd:!0,keywords:l,contains:f};return{name:"Javascript",
            aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:f},
            illegal:/#(?![$_A-z])/,contains:[r.SHEBANG({label:"shebang",binary:"node",
                relevance:5}),{label:"use_strict",className:"meta",relevance:10,
                begin:/^\s*['"]use (strict|asm)['"]/
            },r.APOS_STRING_MODE,r.QUOTE_STRING_MODE,E,m,_,y,g,{
                begin:i(/[{,\n]\s*/,t(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,c+"\\s*:"))),
                relevance:0,contains:[{className:"attr",begin:c+t("\\s*:"),relevance:0}]},{
                begin:"("+r.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
                keywords:"return throw case",contains:[y,r.REGEXP_MODE,{className:"function",
                    begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+r.UNDERSCORE_IDENT_RE+")\\s*=>",
                    returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{
                            begin:r.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0
                        },{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:f}]}]
                },{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{
                    variants:[{begin:"<>",end:"</>"},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,
                        end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,
                        contains:["self"]}]}],relevance:0},{className:"function",
                beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:l,
                contains:["self",r.inherit(r.TITLE_MODE,{begin:c}),A],illegal:/%/},{
                beginKeywords:"while if switch catch for"},{className:"function",
                begin:r.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                returnBegin:!0,contains:[A,r.inherit(r.TITLE_MODE,{begin:c})]},{variants:[{
                    begin:"\\."+c},{begin:"\\$"+c}],relevance:0},{className:"class",
                beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{
                    beginKeywords:"extends"},r.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,
                end:/[{;]/,excludeEnd:!0,contains:[r.inherit(r.TITLE_MODE,{begin:c}),"self",A]
            },{begin:"(get|set)\\s+(?="+c+"\\()",end:/\{/,keywords:"get set",
                contains:[r.inherit(r.TITLE_MODE,{begin:c}),{begin:/\(\)/},A]},{begin:/\$[(.]/}]
        }})(r)
    ;return Object.assign(b.keywords,c),b.exports.PARAMS_CONTAINS.push(o),b.contains=b.contains.concat([o,{
        beginKeywords:"namespace",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",
        end:/\{/,excludeEnd:!0,keywords:"interface extends"
    }]),l(b,"shebang",r.SHEBANG()),l(b,"use_strict",{className:"meta",relevance:10,
        begin:/^\s*['"]use strict['"]/
    }),b.contains.find((e=>"function"===e.className)).relevance=0,Object.assign(b,{
        name:"TypeScript",aliases:["ts"]}),b}})());hljs.registerLanguage("scss",(()=>{"use strict";return e=>{var t="@[a-z-]+",i={
    className:"variable",begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"},r={
    className:"number",begin:"#[0-9A-Fa-f]+"}
;return e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,
    e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{name:"SCSS",case_insensitive:!0,
    illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
        className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{
        className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{
        className:"selector-attr",begin:"\\[",end:"\\]",illegal:"$"},{
        className:"selector-tag",
        begin:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
        relevance:0},{className:"selector-pseudo",
        begin:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
    },{className:"selector-pseudo",
        begin:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
    },i,{className:"attribute",
        begin:"\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
        illegal:"[^\\s]"},{
        begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
    },{begin:":",end:";",
        contains:[i,r,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
            className:"meta",begin:"!important"}]},{begin:"@(page|font-face)",lexemes:t,
        keywords:"@page @font-face"},{begin:"@",end:"[{;]",returnBegin:!0,
        keywords:"and or not only",contains:[{begin:t,className:"keyword"
        },i,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,r,e.CSS_NUMBER_MODE]}]}}})());hljs.registerLanguage("less",(()=>{"use strict";return e=>{
    var n="([\\w-]+|@\\{[\\w-]+\\})",a=[],s=[],t=e=>({className:"string",
        begin:"~?"+e+".*?"+e}),r=(e,n,a)=>({className:e,begin:n,relevance:a}),i={
        begin:"\\(",end:"\\)",contains:s,relevance:0}
    ;s.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,t("'"),t('"'),e.CSS_NUMBER_MODE,{
        begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",
            excludeEnd:!0}
    },r("number","#[0-9A-Fa-f]+\\b"),i,r("variable","@@?[\\w-]+",10),r("variable","@\\{[\\w-]+\\}"),r("built_in","~?`[^`]*?`"),{
        className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0
    },{className:"meta",begin:"!important"});var c=s.concat({begin:/\{/,end:/\}/,
        contains:a}),l={beginKeywords:"when",endsWithParent:!0,contains:[{
            beginKeywords:"and not"}].concat(s)},g={begin:n+"\\s*:",returnBegin:!0,
        end:"[;}]",relevance:0,contains:[{className:"attribute",begin:n,end:":",
            excludeEnd:!0,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:s}
        }]},d={className:"keyword",
        begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts:{end:"[;{}]",returnEnd:!0,contains:s,relevance:0}},o={
        className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{
            begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:c}},b={variants:[{
            begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:n,end:/\{/}],returnBegin:!0,
        returnEnd:!0,illegal:"[<='$\"]",relevance:0,
        contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,l,r("keyword","all\\b"),r("variable","@\\{[\\w-]+\\}"),r("selector-tag",n+"%?",0),r("selector-id","#"+n),r("selector-class","\\."+n,0),r("selector-tag","&",0),{
            className:"selector-attr",begin:"\\[",end:"\\]"},{className:"selector-pseudo",
            begin:/:(:)?[a-zA-Z0-9_\-+()"'.]+/},{begin:"\\(",end:"\\)",contains:c},{
            begin:"!important"}]}
    ;return a.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,d,o,g,b),{
        name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:a}}})());hljs.registerLanguage("c-like",(()=>{"use strict";function e(e){
    return((...e)=>e.map((e=>(e=>e?"string"==typeof e?e:e.source:null)(e))).join(""))("(",e,")?")
}return t=>{const n=t.COMMENT("//","$",{contains:[{begin:/\\\n/}]
}),r="[a-zA-Z_]\\w*::",a="(decltype\\(auto\\)|"+e(r)+"[a-zA-Z_]\\w*"+e("<[^<>]+>")+")",i={
    className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},s={className:"string",
    variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",
        contains:[t.BACKSLASH_ESCAPE]},{
        begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
        end:"'",illegal:"."},t.END_SAME_AS_BEGIN({
        begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
    className:"number",variants:[{begin:"\\b(0b[01']+)"},{
        begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
    },{
        begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
    }],relevance:0},c={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
        "meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
    },contains:[{begin:/\\\n/,relevance:0},t.inherit(s,{className:"meta-string"}),{
        className:"meta-string",begin:/<.*?>/,end:/$/,illegal:"\\n"
    },n,t.C_BLOCK_COMMENT_MODE]},l={className:"title",begin:e(r)+t.IDENT_RE,
    relevance:0},d=e(r)+t.IDENT_RE+"\\s*\\(",u={
    keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
    built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
    literal:"true false nullptr NULL"},m=[c,i,n,t.C_BLOCK_COMMENT_MODE,o,s],p={
    variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{
        beginKeywords:"new throw return else",end:/;/}],keywords:u,contains:m.concat([{
        begin:/\(/,end:/\)/,keywords:u,contains:m.concat(["self"]),relevance:0}]),
    relevance:0},_={className:"function",begin:"("+a+"[\\*&\\s]+)+"+d,
    returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:u,illegal:/[^\w\s\*&:<>.]/,
    contains:[{begin:"decltype\\(auto\\)",keywords:u,relevance:0},{begin:d,
        returnBegin:!0,contains:[l],relevance:0},{className:"params",begin:/\(/,
        end:/\)/,keywords:u,relevance:0,contains:[n,t.C_BLOCK_COMMENT_MODE,s,o,i,{
            begin:/\(/,end:/\)/,keywords:u,relevance:0,
            contains:["self",n,t.C_BLOCK_COMMENT_MODE,s,o,i]}]
    },i,n,t.C_BLOCK_COMMENT_MODE,c]};return{
    aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],keywords:u,
    disableAutodetect:!0,illegal:"</",contains:[].concat(p,_,m,[c,{
        begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        end:">",keywords:u,contains:["self",i]},{begin:t.IDENT_RE+"::",keywords:u},{
        className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,
        contains:[{beginKeywords:"final class struct"},t.TITLE_MODE]}]),exports:{
        preprocessor:c,strings:s,keywords:u}}}})());hljs.registerLanguage("nginx",(()=>{"use strict";return e=>{const n={
    className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{/,end:/\}/},{
        begin:/[$@]/+e.UNDERSCORE_IDENT_RE}]},a={endsWithParent:!0,keywords:{
        $pattern:"[a-z/_]+",
        literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
    },relevance:0,illegal:"=>",contains:[e.HASH_COMMENT_MODE,{className:"string",
        contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/
        }]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[n]
    },{className:"regexp",contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:"\\s\\^",
            end:"\\s|\\{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|\\{|;",returnEnd:!0},{
            begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",
        begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{
        className:"number",begin:"\\b\\d+[kKmMgGdshdwy]*\\b",relevance:0},n]};return{
    name:"Nginx config",aliases:["nginxconf"],contains:[e.HASH_COMMENT_MODE,{
        begin:e.UNDERSCORE_IDENT_RE+"\\s+\\{",returnBegin:!0,end:/\{/,contains:[{
            className:"section",begin:e.UNDERSCORE_IDENT_RE}],relevance:0},{
        begin:e.UNDERSCORE_IDENT_RE+"\\s",end:";|\\{",returnBegin:!0,contains:[{
            className:"attribute",begin:e.UNDERSCORE_IDENT_RE,starts:a}],relevance:0}],
    illegal:"[^\\s\\}]"}}})());hljs.registerLanguage("diff",(()=>{"use strict";return e=>({name:"Diff",
    aliases:["patch"],contains:[{className:"meta",relevance:10,variants:[{
            begin:/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/},{begin:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{
            begin:/^--- +\d+,\d+ +----$/}]},{className:"comment",variants:[{begin:/Index: /,
            end:/$/},{begin:/^index/,end:/$/},{begin:/={3,}/,end:/$/},{begin:/^-{3}/,end:/$/
        },{begin:/^\*{3} /,end:/$/},{begin:/^\+{3}/,end:/$/},{begin:/^\*{15}$/},{
            begin:/^diff --git/,end:/$/}]},{className:"addition",begin:/^\+/,end:/$/},{
        className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,
        end:/$/}]})})());hljs.registerLanguage("php",(()=>{"use strict";return e=>{const r={
    className:"variable",
    begin:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*(?![A-Za-z0-9])(?![$])"},t={
    className:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?[=]?/},{
        begin:/\?>/}]},a={className:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,
        end:/\}/}]},n=e.inherit(e.APOS_STRING_MODE,{illegal:null
}),i=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,
    contains:e.QUOTE_STRING_MODE.contains.concat(a)}),o=e.END_SAME_AS_BEGIN({
    begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,
    contains:e.QUOTE_STRING_MODE.contains.concat(a)}),l={className:"string",
    contains:[e.BACKSLASH_ESCAPE,t],variants:[e.inherit(n,{begin:"b'",end:"'"
    }),e.inherit(i,{begin:'b"',end:'"'}),i,n,o]},c={
    variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]},s={
    keyword:"__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 new object or private protected public real return string switch throw trait try unset use var void while xor yield",
    literal:"false null true",
    built_in:"Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"
};return{aliases:["php","php3","php4","php5","php6","php7","php8"],
    case_insensitive:!0,keywords:s,
    contains:[e.HASH_COMMENT_MODE,e.COMMENT("//","$",{contains:[t]
    }),e.COMMENT("/\\*","\\*/",{contains:[{className:"doctag",begin:"@[A-Za-z]+"}]
    }),e.COMMENT("__halt_compiler.+?;",!1,{endsWithParent:!0,
        keywords:"__halt_compiler"}),t,{className:"keyword",begin:/\$this\b/},r,{
        begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",
        relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,
        illegal:"[$%\\[]",contains:[e.UNDERSCORE_TITLE_MODE,{begin:"=>"},{
            className:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,
            keywords:s,contains:["self",r,e.C_BLOCK_COMMENT_MODE,l,c]}]},{className:"class",
        beginKeywords:"class interface",relevance:0,end:/\{/,excludeEnd:!0,
        illegal:/[:($"]/,contains:[{beginKeywords:"extends implements"
        },e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",
        illegal:/[.']/,contains:[e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"use",
        relevance:0,end:";",contains:[e.UNDERSCORE_TITLE_MODE]},l,c]}}})());hljs.registerLanguage("php-template",(()=>{"use strict";return n=>({
    name:"PHP template",subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,end:/\?>/,
        subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',
            end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},n.inherit(n.APOS_STRING_MODE,{
            illegal:null,className:null,contains:null,skip:!0
        }),n.inherit(n.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,
            skip:!0})]}]})})());hljs.registerLanguage("coffeescript",(()=>{"use strict"
;const e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],a=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;return r=>{const t={
    keyword:e.concat(["then","unless","until","loop","by","when","and","or","is","isnt","not"]).filter((i=["var","const","let","function","static"],
        e=>!i.includes(e))).join(" "),
    literal:n.concat(["yes","no","on","off"]).join(" "),
    built_in:a.concat(["npm","print"]).join(" ")};var i
;const s="[A-Za-z$_][0-9A-Za-z$_]*",o={className:"subst",begin:/#\{/,end:/\}/,
    keywords:t},c=[r.BINARY_NUMBER_MODE,r.inherit(r.C_NUMBER_MODE,{starts:{
        end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,
        end:/'''/,contains:[r.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,
        contains:[r.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,
        contains:[r.BACKSLASH_ESCAPE,o]},{begin:/"/,end:/"/,
        contains:[r.BACKSLASH_ESCAPE,o]}]},{className:"regexp",variants:[{begin:"///",
        end:"///",contains:[o,r.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",
        relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+s
},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{
        begin:"```",end:"```"},{begin:"`",end:"`"}]}];o.contains=c
;const l=r.inherit(r.TITLE_MODE,{begin:s}),d="(\\(.*\\)\\s*)?\\B[-=]>",g={
    className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,
        end:/\)/,keywords:t,contains:["self"].concat(c)}]};return{name:"CoffeeScript",
    aliases:["coffee","cson","iced"],keywords:t,illegal:/\/\*/,
    contains:c.concat([r.COMMENT("###","###"),r.HASH_COMMENT_MODE,{
        className:"function",begin:"^\\s*"+s+"\\s*=\\s*"+d,end:"[-=]>",returnBegin:!0,
        contains:[l,g]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",
            begin:d,end:"[-=]>",returnBegin:!0,contains:[g]}]},{className:"class",
        beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{
            beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[l]},l]
    },{begin:s+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}})());hljs.registerLanguage("swift",(()=>{"use strict";function e(e){
    return e?"string"==typeof e?e:e.source:null}function n(e){return i("(?=",e,")")}
    function i(...n){return n.map((n=>e(n))).join("")}function a(...n){
        return"("+n.map((n=>e(n))).join("|")+")"}
    const t=e=>i(/\b/,e,/\w$/.test(e)?/\b/:/\B/),u=["Protocol","Type"].map(t),s=["init","self"].map(t),r=["Any","Self"],o=["associatedtype",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough","fileprivate(set)","fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout","internal(set)","internal","in","is","lazy","let","mutating","nonmutating","open(set)","open","operator","optional","override","postfix","precedencegroup","prefix","private(set)","private","protocol","public(set)","public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias","unowned(safe)","unowned(unsafe)","unowned","var","weak","where","while","willSet"],l=["false","nil","true"],c=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],b=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],p=a(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),F=a(p,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),d=i(p,F,"*"),g=a(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFFFD]/),f=a(g,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),m=i(g,f,"*"),w=i(/[A-Z]/,f,"*"),E=["autoclosure",i(/convention\(/,a("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",i(/objc\(/,m,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","testable","UIApplicationMain","unknown","usableFromInline"],y=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"]
    ;return e=>{const p=e.COMMENT("/\\*","\\*/",{contains:["self"]}),g={
        className:"keyword",begin:i(/\./,n(a(...u,...s))),end:a(...u,...s),
        excludeBegin:!0},A={begin:i(/\./,a(...o)),relevance:0
    },C=o.filter((e=>"string"==typeof e)).concat(["_|0"]),v={variants:[{
            className:"keyword",
            begin:a(...o.filter((e=>"string"!=typeof e)).concat(r).map(t),...s)}]},_={
        $pattern:a(/\b\w+(\(\w+\))?/,/#\w+/),keyword:C.concat(c).join(" "),
        literal:l.join(" ")},N=[g,A,v],D=[{begin:i(/\./,a(...b)),relevance:0},{
        className:"built_in",begin:i(/\b/,a(...b),/(?=\()/)}],B={begin:/->/,relevance:0
    },M=[B,{className:"operator",relevance:0,variants:[{begin:d},{
            begin:`\\.(\\.|${F})+`}]}],h="([0-9a-fA-F]_*)+",S={className:"number",
        relevance:0,variants:[{
            begin:"\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"},{
            begin:`\\b0x(${h})(\\.(${h}))?([pP][+-]?(([0-9]_*)+))?\\b`},{
            begin:/\b0o([0-7]_*)+\b/},{begin:/\b0b([01]_*)+\b/}]},O=(e="")=>({
        className:"subst",variants:[{begin:i(/\\/,e,/[0\\tnr"']/)},{
            begin:i(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),x=(e="")=>({className:"subst",
        begin:i(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}),k=(e="")=>({className:"subst",
        label:"interpol",begin:i(/\\/,e,/\(/),end:/\)/}),L=(e="")=>({begin:i(e,/"""/),
        end:i(/"""/,e),contains:[O(e),x(e),k(e)]}),I=(e="")=>({begin:i(e,/"/),
        end:i(/"/,e),contains:[O(e),k(e)]}),$={className:"string",
        variants:[L(),L("#"),L("##"),L("###"),I(),I("#"),I("##"),I("###")]},T=[{
        begin:i(/`/,m,/`/)},{className:"variable",begin:/\$\d+/},{className:"variable",
        begin:`\\$${f}+`}],j=[{begin:/(@|#)available\(/,end:/\)/,keywords:{
            $pattern:/[@#]?\w+/,keyword:y.concat(["@available","#available"]).join(" ")},
        contains:[...M,S,$]},{className:"keyword",begin:i(/@/,a(...E))},{
        className:"meta",begin:i(/@/,m)}],K={begin:n(/\b[A-Z]/),relevance:0,contains:[{
            className:"type",
            begin:i(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,f,"+")
        },{className:"type",begin:w,relevance:0},{begin:/[?!]+/,relevance:0},{
            begin:/\.\.\./,relevance:0},{begin:i(/\s+&\s+/,n(w)),relevance:0}]},P={
        begin:/</,end:/>/,keywords:_,contains:[...N,...j,B,K]};K.contains.push(P)
    ;for(const e of $.variants){const n=e.contains.find((e=>"interpol"===e.label))
    ;n.keywords=_;const i=[...N,...D,...M,S,$,...T];n.contains=[...i,{begin:/\(/,
        end:/\)/,contains:["self",...i]}]}return{name:"Swift",keywords:_,
        contains:[e.C_LINE_COMMENT_MODE,p,{className:"function",beginKeywords:"func",
            end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{
                begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{begin:/</,end:/>/},{className:"params",
                begin:/\(/,end:/\)/,endsParent:!0,keywords:_,
                contains:["self",...N,S,$,e.C_BLOCK_COMMENT_MODE,{begin:":"}],illegal:/["']/}],
            illegal:/\[|%/},{className:"class",
            beginKeywords:"struct protocol class extension enum",end:"\\{",excludeEnd:!0,
            keywords:_,contains:[e.inherit(e.TITLE_MODE,{
                begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...N]},{beginKeywords:"import",
            end:/$/,contains:[e.C_LINE_COMMENT_MODE,p],relevance:0
        },...N,...D,...M,S,$,...T,...j,K]}}})());hljs.registerLanguage("perl",(()=>{"use strict";function e(...e){
    return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n
    })).join("")}return n=>{const t=/[dualxmsipn]{0,12}/,s={$pattern:/[\w.]+/,
    keyword:"getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmget sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"
},r={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:s},i={begin:/->\{/,
    end:/\}/},a={variants:[{begin:/\$\d/},{
        begin:e(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")
    },{begin:/[$%@][^\s\w{]/,relevance:0}]
},o=[n.BACKSLASH_ESCAPE,r,a],c=[a,n.HASH_COMMENT_MODE,n.COMMENT(/^=\w/,/=cut/,{
    endsWithParent:!0}),i,{className:"string",contains:o,variants:[{
        begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",
        end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{
        begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",
        relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",
        contains:[n.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",
        contains:[n.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,contains:[],relevance:0},{
        begin:"-?\\w+\\s*=>",contains:[],relevance:0}]},{className:"number",
    begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
    relevance:0},{
    begin:"(\\/\\/|"+n.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",
    keywords:"split return print reverse grep",relevance:0,
    contains:[n.HASH_COMMENT_MODE,{className:"regexp",
        begin:e(/(s|tr|y)/,/\//,/(\\.|[^\\\/])*/,/\//,/(\\.|[^\\\/])*/,/\//,t),
        relevance:10},{className:"regexp",begin:/(m|qr)?\//,end:e(/\//,t),
        contains:[n.BACKSLASH_ESCAPE],relevance:0}]},{className:"function",
    beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,
    contains:[n.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",
    end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",
        className:"comment"}]}];return r.contains=c,i.contains=c,{name:"Perl",
    aliases:["pl","pm"],keywords:s,contains:c}}})());hljs.registerLanguage("sql",(()=>{"use strict";function e(e){
    return e?"string"==typeof e?e:e.source:null}function r(...r){
    return r.map((r=>e(r))).join("")}function t(...r){
    return"("+r.map((r=>e(r))).join("|")+")"}return e=>{
    const n=e.COMMENT("--","$"),a=["true","false","unknown"],i=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],s=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],o=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],c=s,l=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update   ","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter((e=>!s.includes(e))),u={
        begin:r(/\b/,t(...c),/\s*\(/),keywords:{built_in:c.join(" ")}};return{
        name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{
            $pattern:/\b[\w\.]+/,keyword:((e,{exceptions:r,when:t}={})=>{const n=t
            ;return r=r||[],e.map((e=>e.match(/\|\d+$/)||r.includes(e)?e:n(e)?e+"|0":e))
            })(l,{when:e=>e.length<3}).join(" "),literal:a.join(" "),type:i.join(" "),
            built_in:"current_catalog current_date current_default_transform_group current_path current_role current_schema current_transform_group_for_type current_user session_user system_time system_user current_time localtime current_timestamp localtimestamp"
        },contains:[{begin:t(...o),keywords:{$pattern:/[\w\.]+/,
                keyword:l.concat(o).join(" "),literal:a.join(" "),type:i.join(" ")}},{
            className:"type",
            begin:t("double precision","large object","with timezone","without timezone")
        },u,{className:"variable",begin:/@[a-z0-9]+/},{className:"string",variants:[{
                begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,contains:[{
                begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,n,{className:"operator",
            begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0}]}}})());hljs.registerLanguage("django",(()=>{"use strict";return e=>{const t={
    begin:/\|[A-Za-z]+:?/,keywords:{
        name:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"
    },contains:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE]};return{name:"Django",
    aliases:["jinja"],case_insensitive:!0,subLanguage:"xml",
    contains:[e.COMMENT(/\{%\s*comment\s*%\}/,/\{%\s*endcomment\s*%\}/),e.COMMENT(/\{#/,/#\}/),{
        className:"template-tag",begin:/\{%/,end:/%\}/,contains:[{className:"name",
            begin:/\w+/,keywords:{
                name:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"
            },starts:{endsWithParent:!0,keywords:"in by as",contains:[t],relevance:0}}]},{
        className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[t]}]}}})());hljs.registerLanguage("applescript",(()=>{"use strict";function e(e){
    return e?"string"==typeof e?e:e.source:null}function t(...t){
    return t.map((t=>e(t))).join("")}function n(...t){
    return"("+t.map((t=>e(t))).join("|")+")"}return e=>{
    const r=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),i={className:"params",
        begin:/\(/,end:/\)/,contains:["self",e.C_NUMBER_MODE,r]
    },o=e.COMMENT(/--/,/$/),a=[o,e.COMMENT(/\(\*/,/\*\)/,{contains:["self",o]
    }),e.HASH_COMMENT_MODE];return{name:"AppleScript",aliases:["osascript"],
        keywords:{
            keyword:"about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
            literal:"AppleScript false linefeed return pi quote result space tab true",
            built_in:"alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
        },contains:[r,e.C_NUMBER_MODE,{className:"built_in",
            begin:t(/\b/,n(/clipboard info/,/the clipboard/,/info for/,/list (disks|folder)/,/mount volume/,/path to/,/(close|open for) access/,/(get|set) eof/,/current date/,/do shell script/,/get volume settings/,/random number/,/set volume/,/system attribute/,/system info/,/time to GMT/,/(load|run|store) script/,/scripting components/,/ASCII (character|number)/,/localized string/,/choose (application|color|file|file name|folder|from list|remote application|URL)/,/display (alert|dialog)/),/\b/)
        },{className:"built_in",begin:/^\s*return\b/},{className:"literal",
            begin:/\b(text item delimiters|current application|missing value)\b/},{
            className:"keyword",
            begin:t(/\b/,n(/apart from/,/aside from/,/instead of/,/out of/,/greater than/,/isn't|(doesn't|does not) (equal|come before|come after|contain)/,/(greater|less) than( or equal)?/,/(starts?|ends|begins?) with/,/contained by/,/comes (before|after)/,/a (ref|reference)/,/POSIX (file|path)/,/(date|time) string/,/quoted form/),/\b/)
        },{beginKeywords:"on",illegal:/[${=;\n]/,contains:[e.UNDERSCORE_TITLE_MODE,i]
        },...a],illegal:/\/\/|->|=>|\[\[/}}})());hljs.registerLanguage("css",(()=>{"use strict";return e=>{
    var n="[a-zA-Z-][a-zA-Z0-9_-]*",a={
        begin:/([*]\s?)?(?:[A-Z_.\-\\]+|--[a-zA-Z0-9_-]+)\s*(\/\*\*\/)?:/,
        returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",
            begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,
                contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",
                        begin:/[\w-]+/},{begin:/\(/,end:/\)/,
                        contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]
                },e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{
                    className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]
            }}]};return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,
        contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",
            begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:"\\."+n},{
            className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
            contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},{className:"selector-pseudo",
            begin:/:(:)?[a-zA-Z0-9_+()"'.-]+/},{begin:"@(page|font-face)",
            lexemes:"@[a-z-]+",keywords:"@page @font-face"},{begin:"@",end:"[{;]",
            illegal:/:/,returnBegin:!0,contains:[{className:"keyword",
                begin:/@-?\w[\w]*(-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,
                relevance:0,keywords:"and or not only",contains:[{begin:/[a-z-]+:/,
                    className:"attribute"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]
            }]},{className:"selector-tag",begin:n,relevance:0},{begin:/\{/,end:/\}/,
            illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,{begin:/;/},a]}]}}})());hljs.registerLanguage("subunit",(()=>{"use strict";return s=>({name:"SubUnit",
    case_insensitive:!0,contains:[{className:"string",begin:"\\[\n(multipart)?",
        end:"\\]\n"},{className:"string",
        begin:"\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"},{
        className:"string",begin:"(\\+|-)\\d+"},{className:"keyword",relevance:10,
        variants:[{
            begin:"^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?"
        },{begin:"^progress(:?)(\\s+)?(pop|push)?"},{begin:"^tags:"},{begin:"^time:"}]}]
})})());hljs.registerLanguage("dart",(()=>{"use strict";return e=>{const n={
    className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"}]},a={className:"subst",
    variants:[{begin:/\$\{/,end:/\}/}],keywords:"true false null this is new super"
},t={className:"string",variants:[{begin:"r'''",end:"'''"},{begin:'r"""',
        end:'"""'},{begin:"r'",end:"'",illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"
    },{begin:"'''",end:"'''",contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"""',
        end:'"""',contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:"'",end:"'",illegal:"\\n",
        contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"',end:'"',illegal:"\\n",
        contains:[e.BACKSLASH_ESCAPE,n,a]}]};a.contains=[e.C_NUMBER_MODE,t]
;const i=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],r=i.map((e=>e+"?"))
;return{name:"Dart",keywords:{
        keyword:"abstract as assert async await break case catch class const continue covariant default deferred do dynamic else enum export extends extension external factory false final finally for Function get hide if implements import in inferface is late library mixin new null on operator part required rethrow return set show static super switch sync this throw true try typedef var void while with yield",
        built_in:i.concat(r).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]).join(" "),
        $pattern:/[A-Za-z][A-Za-z0-9_]*\??/},
    contains:[t,e.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0
    }),e.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",
            end:"$",relevance:0}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
        className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,
        contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]
    },e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}})());hljs.registerLanguage("objectivec",(()=>{"use strict";return e=>{
    const n=/[a-zA-Z@][a-zA-Z0-9_]*/,_={$pattern:n,
        keyword:"@interface @class @protocol @implementation"};return{
        name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],
        keywords:{$pattern:n,
            keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
            literal:"false true FALSE TRUE nil YES NO NULL",
            built_in:"BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
        },illegal:"</",contains:[{className:"built_in",
            begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
        },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
            className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",
                contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,
            keywords:{
                "meta-keyword":"if else elif endif define undef warning error line pragma ifdef ifndef include"
            },contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{
                className:"meta-string"}),{className:"meta-string",begin:/<.*?>/,end:/$/,
                illegal:"\\n"},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
            className:"class",begin:"("+_.keyword.split(" ").join("|")+")\\b",end:/(\{|$)/,
            excludeEnd:!0,keywords:_,contains:[e.UNDERSCORE_TITLE_MODE]},{
            begin:"\\."+e.UNDERSCORE_IDENT_RE,relevance:0}]}}})());hljs.registerLanguage("arduino",(()=>{"use strict";function e(e){
    return((...e)=>e.map((e=>(e=>e?"string"==typeof e?e:e.source:null)(e))).join(""))("(",e,")?")
}return t=>{const r=function(t){const r=(t=>{const r=t.COMMENT("//","$",{
        contains:[{begin:/\\\n/}]
    }),n="[a-zA-Z_]\\w*::",i="(decltype\\(auto\\)|"+e(n)+"[a-zA-Z_]\\w*"+e("<[^<>]+>")+")",a={
        className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},s={className:"string",
        variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",
            contains:[t.BACKSLASH_ESCAPE]},{
            begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
            end:"'",illegal:"."},t.END_SAME_AS_BEGIN({
            begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
        className:"number",variants:[{begin:"\\b(0b[01']+)"},{
            begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        },{
            begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],relevance:0},l={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
            "meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },contains:[{begin:/\\\n/,relevance:0},t.inherit(s,{className:"meta-string"}),{
            className:"meta-string",begin:/<.*?>/,end:/$/,illegal:"\\n"
        },r,t.C_BLOCK_COMMENT_MODE]},c={className:"title",begin:e(n)+t.IDENT_RE,
        relevance:0},d=e(n)+t.IDENT_RE+"\\s*\\(",u={
        keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
        literal:"true false nullptr NULL"},m=[l,a,r,t.C_BLOCK_COMMENT_MODE,o,s],p={
        variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{
            beginKeywords:"new throw return else",end:/;/}],keywords:u,contains:m.concat([{
            begin:/\(/,end:/\)/,keywords:u,contains:m.concat(["self"]),relevance:0}]),
        relevance:0},g={className:"function",begin:"("+i+"[\\*&\\s]+)+"+d,
        returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:u,illegal:/[^\w\s\*&:<>.]/,
        contains:[{begin:"decltype\\(auto\\)",keywords:u,relevance:0},{begin:d,
            returnBegin:!0,contains:[c],relevance:0},{className:"params",begin:/\(/,
            end:/\)/,keywords:u,relevance:0,contains:[r,t.C_BLOCK_COMMENT_MODE,s,o,a,{
                begin:/\(/,end:/\)/,keywords:u,relevance:0,
                contains:["self",r,t.C_BLOCK_COMMENT_MODE,s,o,a]}]
        },a,r,t.C_BLOCK_COMMENT_MODE,l]};return{
        aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],keywords:u,
        disableAutodetect:!0,illegal:"</",contains:[].concat(p,g,m,[l,{
            begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            end:">",keywords:u,contains:["self",a]},{begin:t.IDENT_RE+"::",keywords:u},{
            className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,
            contains:[{beginKeywords:"final class struct"},t.TITLE_MODE]}]),exports:{
            preprocessor:l,strings:s,keywords:u}}})(t)
    ;return r.disableAutodetect=!1,r.name="C++",
        r.aliases=["cc","c++","h++","hpp","hh","hxx","cxx"],r}(t),n=r.keywords
;return n.keyword+=" boolean byte word String",
    n.literal+=" DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW",
    n.built_in+=" setup loop KeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put",
    r.name="Arduino",r.aliases=["ino"],r.supersetOf="cpp",r}})());hljs.registerLanguage("java",(()=>{"use strict"
;var e="\\.([0-9](_*[0-9])*)",n="[0-9a-fA-F](_*[0-9a-fA-F])*",a={
    className:"number",variants:[{
        begin:`(\\b([0-9](_*[0-9])*)((${e})|\\.)?|(${e}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
    },{begin:`\\b([0-9](_*[0-9])*)((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
        begin:`(${e})[fFdD]?\\b`},{begin:"\\b([0-9](_*[0-9])*)[fFdD]\\b"},{
        begin:`\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
    },{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${n})[lL]?\\b`},{
        begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
    relevance:0};return e=>{
    var n="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",s={
        className:"meta",begin:"@[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",
        contains:[{begin:/\(/,end:/\)/,contains:["self"]}]};const r=a;return{
        name:"Java",aliases:["jsp"],keywords:n,illegal:/<\/|#/,
        contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
                relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{
            begin:/import java\.[a-z]+\./,keywords:"import",relevance:2
        },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
            className:"class",beginKeywords:"class interface enum",end:/[{;=]/,
            excludeEnd:!0,keywords:"class interface enum",illegal:/[:"\[\]]/,contains:[{
                beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
            beginKeywords:"new throw return else",relevance:0},{className:"class",
            begin:"record\\s+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,excludeEnd:!0,
            end:/[{;=]/,keywords:n,contains:[{beginKeywords:"record"},{
                begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
                contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,
                keywords:n,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE]
            },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"function",
            begin:"([\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(<[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(\\s*,\\s*[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*)*>)?\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",
            returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:n,contains:[{
                begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
                contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,
                keywords:n,relevance:0,
                contains:[s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,e.C_BLOCK_COMMENT_MODE]
            },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},r,s]}}})());hljs.registerLanguage("makefile",(()=>{"use strict";return e=>{const i={
    className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",
        contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},a={className:"string",
    begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,i]},n={className:"variable",
    begin:/\$\([\w-]+\s/,end:/\)/,keywords:{
        built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
    },contains:[i]},s={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},r={
    className:"section",begin:/^[^\s]+:/,end:/$/,contains:[i]};return{
    name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,
        keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
    },contains:[e.HASH_COMMENT_MODE,i,a,n,s,{className:"meta",begin:/^\.PHONY:/,
        end:/$/,keywords:{$pattern:/[\.\w]+/,"meta-keyword":".PHONY"}},r]}}})());hljs.registerLanguage("cmake",(()=>{"use strict";return e=>({name:"CMake",
    aliases:["cmake.in"],case_insensitive:!0,keywords:{
        keyword:"break cmake_host_system_information cmake_minimum_required cmake_parse_arguments cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro endwhile execute_process file find_file find_library find_package find_path find_program foreach function get_cmake_property get_directory_property get_filename_component get_property if include include_guard list macro mark_as_advanced math message option return separate_arguments set_directory_properties set_property set site_name string unset variable_watch while add_compile_definitions add_compile_options add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_link_options add_subdirectory add_test aux_source_directory build_command create_test_sourcelist define_property enable_language enable_testing export fltk_wrap_ui get_source_file_property get_target_property get_test_property include_directories include_external_msproject include_regular_expression install link_directories link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions set_source_files_properties set_target_properties set_tests_properties source_group target_compile_definitions target_compile_features target_compile_options target_include_directories target_link_directories target_link_libraries target_link_options target_sources try_compile try_run ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ctest_test ctest_update ctest_upload build_name exec_program export_library_dependencies install_files install_programs install_targets load_command make_directory output_required_files remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or not command policy target test exists is_newer_than is_directory is_symlink is_absolute matches less greater equal less_equal greater_equal strless strgreater strequal strless_equal strgreater_equal version_less version_greater version_equal version_less_equal version_greater_equal in_list defined"
    },contains:[{className:"variable",begin:/\$\{/,end:/\}/
    },e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE]})})());hljs.registerLanguage("profile",(()=>{"use strict";return e=>({
    name:"Python profiler",contains:[e.C_NUMBER_MODE,{
        begin:"[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",end:":",excludeEnd:!0},{
        begin:"(ncalls|tottime|cumtime)",end:"$",
        keywords:"ncalls tottime|10 cumtime|10 filename",relevance:10},{
        begin:"function calls",end:"$",contains:[e.C_NUMBER_MODE],relevance:10
    },e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"\\(",
        end:"\\)$",excludeBegin:!0,excludeEnd:!0,relevance:0}]})})());hljs.registerLanguage("plaintext",(()=>{"use strict";return t=>({
    name:"Plain text",aliases:["text","txt"],disableAutodetect:!0})})());hljs.registerLanguage("rust",(()=>{"use strict";return e=>{
    const n="([ui](8|16|32|64|128|size)|f(32|64))?",t="drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!"
    ;return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",
            keyword:"abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
            literal:"true false Some None Ok Err",built_in:t},illegal:"</",
        contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]
        }),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
            className:"string",variants:[{begin:/r(#*)"(.|\n)*?"\1(?!#)/},{
                begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",
            begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{
                begin:"\\b0b([01_]+)"+n},{begin:"\\b0o([0-7_]+)"+n},{
                begin:"\\b0x([A-Fa-f0-9_]+)"+n},{
                begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+n}],relevance:0},{
            className:"function",beginKeywords:"fn",end:"(\\(|<)",excludeEnd:!0,
            contains:[e.UNDERSCORE_TITLE_MODE]},{className:"meta",begin:"#!?\\[",end:"\\]",
            contains:[{className:"meta-string",begin:/"/,end:/"/}]},{className:"class",
            beginKeywords:"type",end:";",contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{
                endsParent:!0})],illegal:"\\S"},{className:"class",
            beginKeywords:"trait enum struct union",end:/\{/,
            contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{endsParent:!0})],illegal:"[\\w\\d]"
        },{begin:e.IDENT_RE+"::",keywords:{built_in:t}},{begin:"->"}]}}})());hljs.registerLanguage("powershell",(()=>{"use strict";return e=>{const n={
    $pattern:/-?[A-z\.\-]+\b/,
    keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",
    built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"
},s={begin:"`[\\s\\S]",relevance:0},i={className:"variable",variants:[{
        begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]
},a={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],
    contains:[s,i,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},t={
    className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]
},r=e.inherit(e.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,
        end:/#>/}],contains:[{className:"doctag",variants:[{
            begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
        },{
            begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
        }]}]}),c={className:"class",beginKeywords:"class enum",end:/\s*[{]/,
    excludeEnd:!0,relevance:0,contains:[e.TITLE_MODE]},l={className:"function",
    begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,
    contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",
        begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,
        className:"params",relevance:0,contains:[i]}]},o={begin:/using\s/,end:/$/,
    returnBegin:!0,contains:[a,t,{className:"keyword",
        begin:/(using|assembly|command|module|namespace|type)/}]},p={
    className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,
    relevance:0,contains:[{className:"keyword",
        begin:"(".concat(n.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,
        relevance:0},e.inherit(e.TITLE_MODE,{endsParent:!0})]
},g=[p,r,s,e.NUMBER_MODE,a,t,{className:"built_in",variants:[{
        begin:"(Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Complete|Confirm|Deny|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where)+(-)[\\w\\d]+"
    }]},i,{className:"literal",begin:/\$(null|true|false)\b/},{
    className:"selector-tag",begin:/@\B/,relevance:0}],m={begin:/\[/,end:/\]/,
    excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",g,{
        begin:"(string|char|byte|int|long|bool|decimal|single|double|DateTime|xml|array|hashtable|void)",
        className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,
        relevance:0})};return p.contains.unshift(m),{name:"PowerShell",
    aliases:["ps","ps1"],case_insensitive:!0,keywords:n,contains:g.concat(c,l,o,{
        variants:[{className:"operator",
            begin:"(-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor)\\b"
        },{className:"literal",begin:/(-)[\w\d]+/,relevance:0}]},m)}}})());hljs.registerLanguage("ruby",(()=>{"use strict";function e(...e){
    return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n
    })).join("")}return n=>{
    var a,i="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",s={
        keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
        built_in:"proc lambda",literal:"true false nil"},r={className:"doctag",
        begin:"@[A-Za-z]+"},b={begin:"#<",end:">"},t=[n.COMMENT("#","$",{contains:[r]
    }),n.COMMENT("^=begin","^=end",{contains:[r],relevance:10
    }),n.COMMENT("^__END__","\\n$")],c={className:"subst",begin:/#\{/,end:/\}/,
        keywords:s},d={className:"string",contains:[n.BACKSLASH_ESCAPE,c],variants:[{
            begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,
            end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{
            begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,
            end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{
            begin:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{
            begin:/<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,returnBegin:!0,contains:[{
                begin:/<<[-~]?'?/},n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,
                contains:[n.BACKSLASH_ESCAPE,c]})]}]},g="[0-9](_?[0-9])*",l={className:"number",
        relevance:0,variants:[{
            begin:`\\b([1-9](_?[0-9])*|0)(\\.(${g}))?([eE][+-]?(${g})|r)?i?\\b`},{
            begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"
        },{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{
            begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{
            begin:"\\b0(_?[0-7])+r?i?\\b"}]},o={className:"params",begin:"\\(",end:"\\)",
        endsParent:!0,keywords:s},_=[d,{className:"class",beginKeywords:"class module",
        end:"$|;",illegal:/=/,contains:[n.inherit(n.TITLE_MODE,{
            begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"}),{begin:"<\\s*",contains:[{
                begin:"("+n.IDENT_RE+"::)?"+n.IDENT_RE}]}].concat(t)},{className:"function",
        begin:e(/def\s*/,(a=i+"\\s*(\\(|;|$)",e("(?=",a,")"))),keywords:"def",end:"$|;",
        contains:[n.inherit(n.TITLE_MODE,{begin:i}),o].concat(t)},{begin:n.IDENT_RE+"::"
    },{className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{
        className:"symbol",begin:":(?!\\s)",contains:[d,{begin:i}],relevance:0},l,{
        className:"variable",
        begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{
        className:"params",begin:/\|/,end:/\|/,relevance:0,keywords:s},{
        begin:"("+n.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{
            className:"regexp",contains:[n.BACKSLASH_ESCAPE,c],illegal:/\n/,variants:[{
                begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",
                end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]
        }].concat(b,t),relevance:0}].concat(b,t);c.contains=_,o.contains=_;var E=[{
        begin:/^\s*=>/,starts:{end:"$",contains:_}},{className:"meta",
        begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
        starts:{end:"$",contains:_}}];return t.unshift(b),{name:"Ruby",
        aliases:["rb","gemspec","podspec","thor","irb"],keywords:s,illegal:/\/\*/,
        contains:[n.SHEBANG({binary:"ruby"})].concat(E).concat(t).concat(_)}}})());hljs.registerLanguage("python",(()=>{"use strict";return e=>{const n={
    keyword:"and as assert async await break class continue def del elif else except finally for  from global if import in is lambda nonlocal|10 not or pass raise return try while with yield",
    built_in:"__import__ abs all any ascii bin bool breakpoint bytearray bytes callable chr classmethod compile complex delattr dict dir divmod enumerate eval exec filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow print property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip",
    literal:"__debug__ Ellipsis False None NotImplemented True"},a={
    className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,
    end:/\}/,keywords:n,illegal:/#/},i={begin:/\{\{/,relevance:0},r={
    className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{
        begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,
        contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{
        begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,
        contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{
        begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,
        contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,
        end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/([uU]|[rR])'/,end:/'/,
        relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{
        begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,
        end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,
        contains:[e.BACKSLASH_ESCAPE,i,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,
        contains:[e.BACKSLASH_ESCAPE,i,s]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},t="[0-9](_?[0-9])*",l=`(\\b(${t}))?\\.(${t})|\\b(${t})\\.`,b={
    className:"number",relevance:0,variants:[{
        begin:`(\\b(${t})|(${l}))[eE][+-]?(${t})[jJ]?\\b`},{begin:`(${l})[jJ]?`},{
        begin:"\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"},{
        begin:"\\b0[bB](_?[01])+[lL]?\\b"},{begin:"\\b0[oO](_?[0-7])+[lL]?\\b"},{
        begin:"\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"},{begin:`\\b(${t})[jJ]\\b`}]},o={
    className:"params",variants:[{begin:/\(\s*\)/,skip:!0,className:null},{
        begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,
        contains:["self",a,b,r,e.HASH_COMMENT_MODE]}]};return s.contains=[r,b,a],{
    name:"Python",aliases:["py","gyp","ipython"],keywords:n,
    illegal:/(<\/|->|\?)|=>/,contains:[a,b,{begin:/\bself\b/},{beginKeywords:"if",
        relevance:0},r,e.HASH_COMMENT_MODE,{variants:[{className:"function",
            beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,
        illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,o,{begin:/->/,
            endsWithParent:!0,keywords:"None"}]},{className:"meta",begin:/^[\t ]*@/,
        end:/(?=#)|$/,contains:[b,o,r]},{begin:/\b(print|exec)\(/}]}}})());hljs.registerLanguage("python-repl",(()=>{"use strict";return s=>({
    aliases:["pycon"],contains:[{className:"meta",starts:{end:/ |$/,starts:{end:"$",
                subLanguage:"python"}},variants:[{begin:/^>>>(?=[ ]|$)/},{
            begin:/^\.\.\.(?=[ ]|$)/}]}]})})());hljs.registerLanguage("shell",(()=>{"use strict";return s=>({
    name:"Shell Session",aliases:["console"],contains:[{className:"meta",
        begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,starts:{end:/[^\\](?=\s*$)/,
            subLanguage:"bash"}}]})})());hljs.registerLanguage("r",(()=>{"use strict";function e(...e){return e.map((e=>{
    return(a=e)?"string"==typeof a?a:a.source:null;var a})).join("")}return a=>{
    const n=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;return{name:"R",
        illegal:/->/,keywords:{$pattern:n,
            keyword:"function if in break next repeat else for while",
            literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
            built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
        },compilerExtensions:[(a,n)=>{if(!a.beforeMatch)return
            ;if(a.starts)throw Error("beforeMatch cannot be used with starts")
            ;const i=Object.assign({},a);Object.keys(a).forEach((e=>{delete a[e]
        })),a.begin=e(i.beforeMatch,e("(?=",i.begin,")")),a.starts={relevance:0,
            contains:[Object.assign(i,{endsParent:!0})]},a.relevance=0,delete i.beforeMatch
        }],contains:[a.COMMENT(/#'/,/$/,{contains:[{className:"doctag",
                begin:"@examples",starts:{contains:[{begin:/\n/},{begin:/#'\s*(?=@[a-zA-Z]+)/,
                        endsParent:!0},{begin:/#'/,end:/$/,excludeBegin:!0}]}},{className:"doctag",
                begin:"@param",end:/$/,contains:[{className:"variable",variants:[{begin:n},{
                        begin:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{className:"doctag",
                begin:/@[a-zA-Z]+/},{className:"meta-keyword",begin:/\\[a-zA-Z]+/}]
        }),a.HASH_COMMENT_MODE,{className:"string",contains:[a.BACKSLASH_ESCAPE],
            variants:[a.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/
            }),a.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/
            }),a.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/
            }),a.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/
            }),a.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/
            }),a.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',
                relevance:0},{begin:"'",end:"'",relevance:0}]},{className:"number",relevance:0,
            beforeMatch:/([^a-zA-Z0-9._])/,variants:[{
                match:/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/},{
                match:/0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/},{
                match:/(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/}]},{begin:"%",end:"%"},{
            begin:e(/[a-zA-Z][a-zA-Z_0-9]*/,"\\s+<-\\s+")},{begin:"`",end:"`",contains:[{
                begin:/\\./}]}]}}})());hljs.registerLanguage("ini",(()=>{"use strict";function e(e){
    return e?"string"==typeof e?e:e.source:null}function n(...n){
    return n.map((n=>e(n))).join("")}return s=>{const a={className:"number",
    relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:s.NUMBER_RE}]
},i=s.COMMENT();i.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const t={
        className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/
        }]},r={className:"literal",begin:/\bon|off|true|false|yes|no\b/},l={
        className:"string",contains:[s.BACKSLASH_ESCAPE],variants:[{begin:"'''",
            end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'
        },{begin:"'",end:"'"}]},c={begin:/\[/,end:/\]/,contains:[i,r,t,l,a,"self"],
        relevance:0
    },g="("+[/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/].map((n=>e(n))).join("|")+")"
;return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,
    contains:[i,{className:"section",begin:/\[+/,end:/\]+/},{
        begin:n(g,"(\\s*\\.\\s*",g,")*",n("(?=",/\s*=\s*[^#\s]/,")")),className:"attr",
        starts:{end:/$/,contains:[i,c,r,t,l,a]}}]}}})());hljs.registerLanguage("javascript",(()=>{"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;function r(e){return i("(?=",e,")")}function i(...e){return e.map((e=>{
    return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}return t=>{
    const c=e,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,
            isTrulyOpeningTag:(e,n)=>{const a=e[0].length+e.index,s=e.input[a]
            ;"<"!==s?">"===s&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
            ;return-1!==e.input.indexOf(a,n)})(e,{after:a
            })||n.ignoreMatch()):n.ignoreMatch()}},l={$pattern:e,keyword:n.join(" "),
            literal:a.join(" "),built_in:s.join(" ")
        },b="\\.([0-9](_?[0-9])*)",g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={
            className:"number",variants:[{
                begin:`(\\b(${g})((${b})|\\.)?|(${b}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
                begin:`\\b(${g})\\b((${b})\\b|\\.)?|(${b})\\b`},{
                begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
                begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
                begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
                begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",
            end:"\\}",keywords:l,contains:[]},u={begin:"html`",end:"",starts:{end:"`",
                returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},_={
            begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
                contains:[t.BACKSLASH_ESCAPE,E],subLanguage:"css"}},m={className:"string",
            begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,E]},N={className:"comment",
            variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
                    className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",
                        end:"\\}",relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",
                        endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
            }),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]
        },y=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,u,_,m,d,t.REGEXP_MODE]
    ;E.contains=y.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(y)
    });const f=[].concat(N,E.contains),A=f.concat([{begin:/\(/,end:/\)/,keywords:l,
        contains:["self"].concat(f)}]),p={className:"params",begin:/\(/,end:/\)/,
        excludeBegin:!0,excludeEnd:!0,keywords:l,contains:A};return{name:"Javascript",
        aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:A},
        illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",
            relevance:5}),{label:"use_strict",className:"meta",relevance:10,
            begin:/^\s*['"]use (strict|asm)['"]/
        },t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,u,_,m,N,d,{
            begin:i(/[{,\n]\s*/,r(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,c+"\\s*:"))),
            relevance:0,contains:[{className:"attr",begin:c+r("\\s*:"),relevance:0}]},{
            begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
            keywords:"return throw case",contains:[N,t.REGEXP_MODE,{className:"function",
                begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",
                returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{
                        begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0
                    },{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:A}]}]
            },{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{
                variants:[{begin:"<>",end:"</>"},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,
                    end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,
                    contains:["self"]}]}],relevance:0},{className:"function",
            beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:l,
            contains:["self",t.inherit(t.TITLE_MODE,{begin:c}),p],illegal:/%/},{
            beginKeywords:"while if switch catch for"},{className:"function",
            begin:t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
            returnBegin:!0,contains:[p,t.inherit(t.TITLE_MODE,{begin:c})]},{variants:[{
                begin:"\\."+c},{begin:"\\$"+c}],relevance:0},{className:"class",
            beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{
                beginKeywords:"extends"},t.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,
            end:/[{;]/,excludeEnd:!0,contains:[t.inherit(t.TITLE_MODE,{begin:c}),"self",p]
        },{begin:"(get|set)\\s+(?="+c+"\\()",end:/\{/,keywords:"get set",
            contains:[t.inherit(t.TITLE_MODE,{begin:c}),{begin:/\(\)/},p]},{begin:/\$[(.]/}]
    }}})());hljs.registerLanguage("yaml",(()=>{"use strict";return e=>{
    var n="true false yes no null",a="[\\w#;/?:@&=+$,.~*'()[\\]]+",s={
            className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
            },{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",
                variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]}]},i=e.inherit(s,{
            variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),l={
            end:",",endsWithParent:!0,excludeEnd:!0,contains:[],keywords:n,relevance:0},t={
            begin:/\{/,end:/\}/,contains:[l],illegal:"\\n",relevance:0},g={begin:"\\[",
            end:"\\]",contains:[l],illegal:"\\n",relevance:0},b=[{className:"attr",
            variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{
                begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
            }]},{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",
            begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{
            begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,
            relevance:0},{className:"type",begin:"!\\w+!"+a},{className:"type",
            begin:"!<"+a+">"},{className:"type",begin:"!"+a},{className:"type",begin:"!!"+a
        },{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",
            begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",
            relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{
            className:"number",
            begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
        },{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},t,g,s],r=[...b]
    ;return r.pop(),r.push(i),l.contains=r,{name:"YAML",case_insensitive:!0,
        aliases:["yml","YAML"],contains:b}}})());hljs.registerLanguage("csp",(()=>{"use strict";return e=>({name:"CSP",
    case_insensitive:!1,keywords:{$pattern:"[a-zA-Z][a-zA-Z0-9_-]*",
        keyword:"base-uri child-src connect-src default-src font-src form-action frame-ancestors frame-src img-src media-src object-src plugin-types report-uri sandbox script-src style-src"
    },contains:[{className:"string",begin:"'",end:"'"},{className:"attribute",
        begin:"^Content",end:":",excludeEnd:!0}]})})());hljs.registerLanguage("properties",(()=>{"use strict";return e=>{
    var n="[ \\t\\f]*",a=n+"[:=]"+n,t="("+a+"|[ \\t\\f]+)",r="([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",s="([^\\\\:= \\t\\f\\n]|\\\\.)+",i={
        end:t,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{
                begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",
        case_insensitive:!0,illegal:/\S/,contains:[e.COMMENT("^\\s*[!#]","$"),{
            returnBegin:!0,variants:[{begin:r+a,relevance:1},{begin:r+"[ \\t\\f]+",
                relevance:0}],contains:[{className:"attr",begin:r,endsParent:!0,relevance:0}],
            starts:i},{begin:s+t,returnBegin:!0,relevance:0,contains:[{className:"meta",
                begin:s,endsParent:!0,relevance:0}],starts:i},{className:"attr",relevance:0,
            begin:s+n+"$"}]}}})());hljs.registerLanguage("clean",(()=>{"use strict";return e=>({name:"Clean",
    aliases:["clean","icl","dcl"],keywords:{
        keyword:"if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr",
        built_in:"Int Real Char Bool",literal:"True False"},
    contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,{
        begin:"->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>"}]})})());hljs.registerLanguage("kotlin",(()=>{"use strict"
;var e="\\.([0-9](_*[0-9])*)",n="[0-9a-fA-F](_*[0-9a-fA-F])*",a={
    className:"number",variants:[{
        begin:`(\\b([0-9](_*[0-9])*)((${e})|\\.)?|(${e}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
    },{begin:`\\b([0-9](_*[0-9])*)((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
        begin:`(${e})[fFdD]?\\b`},{begin:"\\b([0-9](_*[0-9])*)[fFdD]\\b"},{
        begin:`\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
    },{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${n})[lL]?\\b`},{
        begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
    relevance:0};return e=>{const n={
    keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
    built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
    literal:"true false null"},i={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"
},s={className:"subst",begin:/\$\{/,end:/\}/,contains:[e.C_NUMBER_MODE]},t={
    className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},r={className:"string",
    variants:[{begin:'"""',end:'"""(?=[^"])',contains:[t,s]},{begin:"'",end:"'",
        illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,
        contains:[e.BACKSLASH_ESCAPE,t,s]}]};s.contains.push(r);const l={
    className:"meta",
    begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"
},c={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,
        end:/\)/,contains:[e.inherit(r,{className:"meta-string"})]}]
},o=a,b=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),E={
    variants:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,
        contains:[]}]},d=E;return d.variants[1].contains=[E],E.variants[1].contains=[d],
    {name:"Kotlin",aliases:["kt"],keywords:n,contains:[e.COMMENT("/\\*\\*","\\*/",{
            relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]
        }),e.C_LINE_COMMENT_MODE,b,{className:"keyword",
            begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",
                    begin:/@\w+/}]}},i,l,c,{className:"function",beginKeywords:"fun",end:"[(]|$",
            returnBegin:!0,excludeEnd:!0,keywords:n,relevance:5,contains:[{
                begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
                contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,
                keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,
                endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,
                    endsWithParent:!0,contains:[E,e.C_LINE_COMMENT_MODE,b],relevance:0
                },e.C_LINE_COMMENT_MODE,b,l,c,r,e.C_NUMBER_MODE]},b]},{className:"class",
            beginKeywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,
            illegal:"extends implements",contains:[{
                beginKeywords:"public protected internal private constructor"
            },e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,
                excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,]|$/,
                excludeBegin:!0,returnEnd:!0},l,c]},r,{className:"meta",begin:"^#!/usr/bin/env",
            end:"$",illegal:"\n"},o]}}})());

var $_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();

if($_GET["str"]=="index"&&$_GET["blogid"]==undefined||$_GET["str"]==undefined&&$_GET["blogid"]==undefined)//??????
{
    $.get(jsonurl, function(result) {
        var jsonfile = result;
        var html = make_body_begin(jsonfile.user, jsonfile.photo, jsonfile.introduce);//??????body

        html +="<div class=\"container\"><div class=\"card\">" +
            "<div class=\"card-body\">\n" +
            "    <h5 class=\"card-title\">??????</h5>\n" +
            "    <p class=\"card-text\">??????????????????</p>\n" +
            "    <a href=\"?str=blogindex\"class=\"card-link\">????????????&gt;&gt;</a>\n" +
            "</div></div></div>";

        html += make_links_begin(jsonfile.right.name);
        for(var i=1;i<=jsonfile.right.max;i++)//for??????????????????
        {
            html += make_links_end(jsonfile.right[i].from, jsonfile.right[i].name);
        }

        html += make_body_end(jsonfile.user);//??????


        document.getElementById('winglite').innerHTML = html;//??????body
    });
}
else if($_GET["str"]=="blogindex"&&$_GET["blogid"]==undefined)//????????????
{
    document.getElementById('winglite').innerHTML = "<p id='getjsonfile' style='display: none'></p>";
    var getmarkdown="0";
    $.ajaxSettings.async = false;
    $.get(jsonurl, function(result) {document.getElementById('getjsonfile').innerHTML = JSON.stringify(result);});
    console.log(document.getElementById('getjsonfile').innerText);
    jsonfile=JSON.parse(document.getElementById('getjsonfile').innerText);
    document.getElementById('winglite').innerHTML = "";
    var html = make_blogbody_begin(jsonfile.user, jsonfile.photo, jsonfile.introduce);//??????body
    for(var i=1;i<=jsonfile.word.max;i++)//for??????????????????
    {
        $.get(jsonfile.word[i].from, function(result) {getmarkdown=result;});
        //html += create_article(jsonfile.word[i].title, marked(getmarkdown), jsonfile.word[i].date, jsonfile.word[i].id);
        html += create_article(jsonfile.word[i].title, getmarkdown.substring(0,25)+"......", jsonfile.word[i].date, jsonfile.word[i].id);
    }

    html += make_links_begin(jsonfile.right.name);
    for(var i=1;i<=jsonfile.right.max;i++)//for??????????????????
    {
        html += make_links_end(jsonfile.right[i].from, jsonfile.right[i].name);
    }

    html += make_body_end(jsonfile.user);//??????


    document.getElementById('winglite').innerHTML = html;//??????body
    hljs.initHighlighting();
}
else if($_GET["blogid"]!=undefined)
{
    document.getElementById('winglite').innerHTML = "<p id='getjsonfile' style='display: none'></p>";
    var getmarkdown="0";
    $.ajaxSettings.async = false;
    $.get(jsonurl, function(result) {document.getElementById('getjsonfile').innerHTML = JSON.stringify(result);});
    console.log(document.getElementById('getjsonfile').innerText);
    jsonfile=JSON.parse(document.getElementById('getjsonfile').innerText);
    document.getElementById('winglite').innerHTML = "";
    var rendererMD = new marked.Renderer();
    marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
    });
    marked.setOptions({
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
    var html = make_blogbody_begin(jsonfile.user, jsonfile.photo, jsonfile.introduce);//??????body
    var ifnotfound=0;
    for(var i=1;i<=jsonfile.word.max;i++)//for??????????????????
    {
        $.get(jsonfile.word[i].from, function(result) {getmarkdown=result;});
        //html += create_article(jsonfile.word[i].title, marked(getmarkdown), jsonfile.word[i].date, jsonfile.word[i].id);
        if(jsonfile.word[i].id==$_GET["blogid"])
        {
            ifnotfound=1;
            html += create_article(jsonfile.word[i].title, marked(getmarkdown), jsonfile.word[i].date, jsonfile.word[i].id);
        }
    }
    if(ifnotfound==0) html+='<div class="alert alert-danger">????????????????????????????????????????????????5s???????????????</div>'
    html += make_links_begin(jsonfile.right.name);
    for(var i=1;i<=jsonfile.right.max;i++)//for??????????????????
    {
        html += make_links_end(jsonfile.right[i].from, jsonfile.right[i].name);
    }

    html += make_body_end(jsonfile.user);//??????


    document.getElementById('winglite').innerHTML = html;//??????body
    hljs.initHighlighting();
    if(ifnotfound==0) setTimeout("window.location.href=\"index.html\";", 5000 )
}
