define(function(){var a=new function(){function m(p){return p.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function c(q){for(var p=q.firstChild;p;p=p.nextSibling){if(p.nodeName=="CODE"){return p}if(!(p.nodeType==3&&p.nodeValue.match(/\s+/))){break}}}function i(q,p){return Array.prototype.map.call(q.childNodes,function(r){if(r.nodeType==3){return p?r.nodeValue.replace(/\n/g,""):r.nodeValue}if(r.nodeName=="BR"){return"\n"}return i(r,p)}).join("")}function b(r){var q=(r.className+" "+(r.parentNode?r.parentNode.className:"")).split(/\s+/);q=q.map(function(s){return s.replace(/^language-/,"")});for(var p=0;p<q.length;p++){if(f[q[p]]||q[p]=="no-highlight"){return q[p]}}}function d(r){var p=[];(function q(s,t){for(var u=s.firstChild;u;u=u.nextSibling){if(u.nodeType==3){t+=u.nodeValue.length}else{if(u.nodeName=="BR"){t+=1}else{if(u.nodeType==1){p.push({event:"start",offset:t,node:u});t=q(u,t);p.push({event:"stop",offset:t,node:u})}}}}return t})(r,0);return p}function k(y,w,x){var q=0;var z="";var s=[];function u(){if(y.length&&w.length){if(y[0].offset!=w[0].offset){return(y[0].offset<w[0].offset)?y:w}else{return w[0].event=="start"?y:w}}else{return y.length?y:w}}function t(B){function A(C){return" "+C.nodeName+'="'+m(C.value)+'"'}return"<"+B.nodeName+Array.prototype.map.call(B.attributes,A).join("")+">"}while(y.length||w.length){var v=u().splice(0,1)[0];z+=m(x.substr(q,v.offset-q));q=v.offset;if(v.event=="start"){z+=t(v.node);s.push(v.node)}else{if(v.event=="stop"){var p,r=s.length;do{r--;p=s[r];z+=("</"+p.nodeName.toLowerCase()+">")}while(p!=v.node);s.splice(r,1);while(r<s.length){z+=t(s[r]);r++}}}}return z+m(x.substr(q))}function g(s){function p(t){return(t&&t.source)||t}function q(u,t){return RegExp(p(u),"m"+(s.cI?"i":"")+(t?"g":""))}function r(A,y){if(A.compiled){return}A.compiled=true;var v=[];if(A.k){var u={};function B(C,t){t.split(" ").forEach(function(D){var E=D.split("|");u[E[0]]=[C,E[1]?Number(E[1]):1];v.push(E[0])})}A.lR=q(A.l||a.IR+"(?!\\.)",true);if(typeof A.k=="string"){B("keyword",A.k)}else{for(var z in A.k){if(!A.k.hasOwnProperty(z)){continue}B(z,A.k[z])}}A.k=u}if(y){if(A.bWK){A.b="\\b("+v.join("|")+")\\b(?!\\.)\\s*"}A.bR=q(A.b?A.b:"\\B|\\b");if(!A.e&&!A.eW){A.e="\\B|\\b"}if(A.e){A.eR=q(A.e)}A.tE=p(A.e)||"";if(A.eW&&y.tE){A.tE+=(A.e?"|":"")+y.tE}}if(A.i){A.iR=q(A.i)}if(A.r===undefined){A.r=1}if(!A.c){A.c=[]}for(var x=0;x<A.c.length;x++){if(A.c[x]=="self"){A.c[x]=A}r(A.c[x],A)}if(A.starts){r(A.starts,y)}var w=[];for(var x=0;x<A.c.length;x++){w.push(p(A.c[x].b))}if(A.tE){w.push(p(A.tE))}if(A.i){w.push(p(A.i))}A.t=w.length?q(w.join("|"),true):{exec:function(t){return null}}}r(s)}function e(F,G,D){function p(r,O){for(var N=0;N<O.c.length;N++){var M=O.c[N].bR.exec(r);if(M&&M.index==0){return O.c[N]}}}function t(M,r){if(M.e&&M.eR.test(r)){return M}if(M.eW){return t(M.parent,r)}}function u(r,M){return !D&&M.i&&M.iR.test(r)}function z(N,r){var M=H.cI?r[0].toLowerCase():r[0];return N.k.hasOwnProperty(M)&&N.k[M]}function I(){var M=m(x);if(!B.k){return M}var r="";var P=0;B.lR.lastIndex=0;var N=B.lR.exec(M);while(N){r+=M.substr(P,N.index-P);var O=z(B,N);if(O){w+=O[1];r+='<span class="'+O[0]+'">'+N[0]+"</span>"}else{r+=N[0]}P=B.lR.lastIndex;N=B.lR.exec(M)}return r+M.substr(P)}function A(){if(B.sL&&!f[B.sL]){return m(x)}var r=B.sL?e(B.sL,x):h(x);if(B.r>0){w+=r.keyword_count;C+=r.r}return'<span class="'+r.language+'">'+r.value+"</span>"}function L(){return B.sL!==undefined?A():I()}function K(N,r){var M=N.cN?'<span class="'+N.cN+'">':"";if(N.rB){y+=M;x=""}else{if(N.eB){y+=m(r)+M;x=""}else{y+=M;x=r}}B=Object.create(N,{parent:{value:B}})}function E(M,r){x+=M;if(r===undefined){y+=L();return 0}var O=p(r,B);if(O){y+=L();K(O,r);return O.rB?0:r.length}var P=t(B,r);if(P){var N=B;if(!(N.rE||N.eE)){x+=r}y+=L();do{if(B.cN){y+="</span>"}C+=B.r;B=B.parent}while(B!=P.parent);if(N.eE){y+=m(r)}x="";if(P.starts){K(P.starts,"")}return N.rE?0:r.length}if(u(r,B)){throw new Error('Illegal lexem "'+r+'" for mode "'+(B.cN||"<unnamed>")+'"')}x+=r;return r.length||1}var H=f[F];g(H);var B=H;var x="";var C=0;var w=0;var y="";try{var v,s,q=0;while(true){B.t.lastIndex=q;v=B.t.exec(G);if(!v){break}s=E(G.substr(q,v.index-q),v[0]);q=v.index+s}E(G.substr(q));return{r:C,keyword_count:w,value:y,language:F}}catch(J){if(J.message.indexOf("Illegal")!=-1){return{r:0,keyword_count:0,value:m(G)}}else{throw J}}}function h(t){var p={keyword_count:0,r:0,value:m(t)};var r=p;for(var q in f){if(!f.hasOwnProperty(q)){continue}var s=e(q,t,false);s.language=q;if(s.keyword_count+s.r>r.keyword_count+r.r){r=s}if(s.keyword_count+s.r>p.keyword_count+p.r){r=p;p=s}}if(r.language){p.second_best=r}return p}function j(r,q,p){if(q){r=r.replace(/^((<[^>]+>|\t)+)/gm,function(t,w,v,u){return w.replace(/\t/g,q)})}if(p){r=r.replace(/\n/g,"<br>")}return r}function n(s,v,q){var w=i(s,q);var u=b(s);if(u=="no-highlight"){return}var x=u?e(u,w,true):h(w);u=x.language;var p=d(s);if(p.length){var r=document.createElement("pre");r.innerHTML=x.value;x.value=k(p,d(r),w)}x.value=j(x.value,v,q);var t=s.className;if(!t.match("(\\s|^)(language-)?"+u+"(\\s|$)")){t=t?(t+" "+u):u}s.innerHTML=x.value;s.className=t;s.result={language:u,kw:x.keyword_count,re:x.r};if(x.second_best){s.second_best={language:x.second_best.language,kw:x.second_best.keyword_count,re:x.second_best.r}}}function o(){if(o.called){return}o.called=true;Array.prototype.map.call(document.getElementsByTagName("pre"),c).filter(Boolean).forEach(function(p){n(p,a.tabReplace)})}function l(){window.addEventListener("DOMContentLoaded",o,false);window.addEventListener("load",o,false)}var f={};this.LANGUAGES=f;this.highlight=e;this.highlightAuto=h;this.fixMarkup=j;this.highlightBlock=n;this.initHighlighting=o;this.initHighlightingOnLoad=l;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};this.inherit=function(r,s){var p={};for(var q in r){p[q]=r[q]}if(s){for(var q in s){p[q]=s[q]}}return p}}();a.LANGUAGES.javascript=function(b){return{k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},c:[b.ASM,b.QSM,b.CLCM,b.CBLCLM,b.CNM,{b:"("+b.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[b.CLCM,b.CBLCLM,b.REGEXP_MODE,{b:/</,e:/>;/,sL:"xml"}],r:0},{cN:"function",bWK:true,e:/{/,k:"function",c:[{cN:"title",b:/[A-Za-z$_][0-9A-Za-z$_]*/},{cN:"params",b:/\(/,e:/\)/,c:[b.CLCM,b.CBLCLM],i:/["'\(]/}],i:/\[|%/}]}}(a);a.LANGUAGES.xml=function(b){var d="[A-Za-z0-9\\._:-]+";var c={eW:true,r:0,c:[{cN:"attribute",b:d,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[c],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[c],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",r:0,c:[{cN:"title",b:"[^ /><]+"},c]}]}}(a);return a});