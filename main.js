(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(402),a=n.n(r),o=n(352),i=n.n(o)()(a());i.push([t.id,"* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n.form {\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    gap: 10px;\n}\n\n.submitButton {\n    height: 30px;\n}\n\nhtml,\nbody {\n    margin: 0;\n    \n}\n\nbody {\n    height: 100vh; \n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 2fr;\n}\n\n.sidebar {\n    grid-row: span 2;\n    \n}\n\n.sidebar,\n#footer,\n#header {\n    background-color: cadetblue;\n}\n\nfooter {\n    margin-bottom: 0;\n}\n\n.table {\n    width: 100%;\n    margin: 0;\n}\n\n.tablerow {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\ntr {\n    border-radius: 3px;\n    border: 1px solid black;\n    height: 2em;\n    margin: 10px 0;\n    margin-top: -1px;\n    display: flex;\n    width: 100%;\n}\n\ntd {\n    flex:1;\n    text-align: center;\n    align-self: center;\n}",""]);const d=i},352:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var u=this[d][0];null!=u&&(i[u]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},402:t=>{t.exports=function(t){return t[1]}},701:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],d=0;d<t.length;d++){var u=t[d],s=r.base?u[0]+r.base:u[0],c=o[s]||0,l="".concat(s," ").concat(c);o[s]=c+1;var m=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=a(h,r);r.byIndex=d,e.splice(d,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var d=n(o[i]);e[d].references--}for(var u=r(t,a),s=0;s<o.length;s++){var c=n(o[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=u}}},80:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},182:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},850:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},236:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},213:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r={};(()=>{function t(){const t=document.getElementById("content"),e=document.createElement("div");e.id="todoListContainer",t.appendChild(e)}function e(t){const e=document.getElementById("content");if(u(),ft(),0==t.length)return;const n=document.getElementById("todoListContainer");n||(n=document.createElement("div")),n.innerHTML="",n.classList.add("todoListContainer");const r=document.createElement("table"),i=document.createElement("tr"),d=document.createElement("td"),s=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),m=document.createElement("td"),h=document.createElement("td");r.classList.add("table"),d.innerHTML="Task",s.innerHTML="Description",c.innerHTML="Due date",l.innerHTML="Priority",m.innerHTML="Notes",h.innerHTML="Actions",i.appendChild(d),i.appendChild(c),i.appendChild(h),r.appendChild(i),n.appendChild(r),i.classList.add("tablerow");for(let e=0;e<t.todoList.length;e++){let n=document.createElement("tr"),i=document.createElement("td"),d=document.createElement("td"),u=document.createElement("td"),s=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),m=document.createElement("button"),h=document.createElement("button");m.innerHTML="+",h.innerHTML="x",i.textContent=`${t.todoList[e].title}`,d.textContent=`${t.todoList[e].description}`,u.textContent=`${t.todoList[e].dueDate}`,s.textContent=`${t.todoList[e].priority}`,c.textContent=`${t.todoList[e].notes}`,m.addEventListener("click",(()=>a(t,e))),h.addEventListener("click",(()=>o(t,e))),l.appendChild(m),l.appendChild(h),n.appendChild(i),n.appendChild(u),n.appendChild(l),"High"==s.textContent?n.style.backgroundColor="red":"Medium"==s.textContent?n.style.backgroundColor="yellow":n.style.backgroundColor="green",r.appendChild(n)}n.appendChild(r),e.appendChild(n)}function a(t,n){const r=document.getElementById("content");r.innerHTML="",u(),St=t,t.todoList[n];const a=document.createElement("div"),o=document.createElement("p"),i=document.createElement("p"),d=document.createElement("p"),s=document.createElement("p"),c=document.createElement("p"),l=document.createElement("button");o.textContent=`Task: ${t.todoList[n].title}`,i.textContent=`Description: ${t.todoList[n].description}`,d.textContent=`Due date: ${t.todoList[n].dueDate}`,s.textContent=`Priority: ${t.todoList[n].priority}`,c.textContent=`Notes: ${t.todoList[n].notes}`,l.textContent="See tasklist",l.addEventListener("click",(()=>{e(St)})),a.appendChild(o),a.appendChild(i),a.appendChild(d),a.appendChild(s),a.appendChild(c),a.appendChild(l),r.appendChild(a)}function o(t,n){t.todoList.splice(n,1),e(St)}function i(){localStorage.setItem("projects",JSON.stringify(Pt))}function d(){const t=document.getElementById("formContainer"),e=document.getElementById("todoListContainer"),n=document.getElementById("content");t?(n.removeChild(t),e.style.gridRow="span 2"):(ft(),e.style.gridRow="span 1")}function u(){const t=document.getElementById("content"),n=document.createElement("div");t.innerHTML="",n.id="sidebar",n.classList.add("sidebar"),n.innerHTML="<p>This is sidebar</p>";const r=document.createElement("a");r.id="toggle",r.innerHTML="Add new task",r.href="#",r.addEventListener("click",d),n.appendChild(r),function(){for(let t=0;t<Pt.length;t++)0==Pt[t].todoList.length&&Pt.splice(t,1)}();for(let t=0;t<Pt.length;t++){const r=document.createElement("a");r.innerHTML=`<p>${Pt[t].title}</p>`,r.addEventListener("click",(()=>{e(Pt[t])}));for(let e=0;e<Pt[t].todoList.length;e++){const n=document.createElement("a");n.innerHTML=`<p>${Pt[t].todoList[e].title}</p>`,n.addEventListener("click",(function(n){n.stopPropagation(),a(Pt[t],e)})),r.appendChild(n)}n.appendChild(r)}const o=document.createElement("button");o.textContent="Save Changes",o.addEventListener("click",i),n.appendChild(o),t.appendChild(n)}function s(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function c(t){return s(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function l(t){s(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function m(t){if(s(1,arguments),!c(t)&&"number"!=typeof t)return!1;var e=l(t);return!isNaN(Number(e))}function h(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){s(2,arguments);var n=l(t).getTime(),r=h(e);return new Date(n+r)}function g(t,e){s(2,arguments);var n=h(e);return f(t,-n)}n.d(r,{q:()=>Pt,L:()=>St});var p=864e5;function v(t){s(1,arguments);var e=1,n=l(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function b(t){s(1,arguments);var e=l(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=v(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=v(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function w(t){s(1,arguments);var e=b(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=v(n);return r}var y=6048e5,C={};function T(){return C}function M(t,e){var n,r,a,o,i,d,u,c;s(1,arguments);var m=T(),f=h(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==a?a:m.weekStartsOn)&&void 0!==r?r:null===(u=m.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=l(t),p=g.getUTCDay(),v=(p<f?7:0)+p-f;return g.setUTCDate(g.getUTCDate()-v),g.setUTCHours(0,0,0,0),g}function x(t,e){var n,r,a,o,i,d,u,c;s(1,arguments);var m=l(t),f=m.getUTCFullYear(),g=T(),p=h(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:g.firstWeekContainsDate)&&void 0!==r?r:null===(u=g.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(f+1,0,p),v.setUTCHours(0,0,0,0);var b=M(v,e),w=new Date(0);w.setUTCFullYear(f,0,p),w.setUTCHours(0,0,0,0);var y=M(w,e);return m.getTime()>=b.getTime()?f+1:m.getTime()>=y.getTime()?f:f-1}function E(t,e){var n,r,a,o,i,d,u,c;s(1,arguments);var l=T(),m=h(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(u=l.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),f=x(t,e),g=new Date(0);g.setUTCFullYear(f,0,m),g.setUTCHours(0,0,0,0);var p=M(g,e);return p}var L=6048e5;function k(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const D=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return k("yy"===e?r%100:r,e.length)},S=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):k(n+1,2)},P=function(t,e){return k(t.getUTCDate(),e.length)},U=function(t,e){return k(t.getUTCHours()%12||12,e.length)},H=function(t,e){return k(t.getUTCHours(),e.length)},W=function(t,e){return k(t.getUTCMinutes(),e.length)},N=function(t,e){return k(t.getUTCSeconds(),e.length)},Y=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return k(Math.floor(r*Math.pow(10,n-3)),e.length)};var O={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return D(t,e)},Y:function(t,e,n,r){var a=x(t,r),o=a>0?a:1-a;return"YY"===e?k(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):k(o,e.length)},R:function(t,e){return k(b(t),e.length)},u:function(t,e){return k(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return k(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return k(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return S(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return k(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){s(1,arguments);var n=l(t),r=M(n,e).getTime()-E(n,e).getTime();return Math.round(r/L)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):k(a,e.length)},I:function(t,e,n){var r=function(t){s(1,arguments);var e=l(t),n=v(e).getTime()-w(e).getTime();return Math.round(n/y)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):k(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):P(t,e)},D:function(t,e,n){var r=function(t){s(1,arguments);var e=l(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/p)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):k(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return k(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return k(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return k(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):k(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):k(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):W(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):N(t,e)},S:function(t,e){return Y(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return j(a);case"XXXX":case"XX":return q(a);default:return q(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return j(a);case"xxxx":case"xx":return q(a);default:return q(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+A(a,":");default:return"GMT"+q(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+A(a,":");default:return"GMT"+q(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return k(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return k((r._originalDate||t).getTime(),e.length)}};function A(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+k(o,2)}function j(t,e){return t%60==0?(t>0?"-":"+")+k(Math.abs(t)/60,2):q(t,e)}function q(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+k(Math.floor(a/60),2)+n+k(a%60,2)}const B=O;var F=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},I=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const z={p:I,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return F(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",F(a,e)).replace("{{time}}",I(o,e))}};function Q(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var R=["D","DD"],G=["YY","YYYY"];function X(t){return-1!==R.indexOf(t)}function $(t){return-1!==G.indexOf(t)}function J(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var _={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Z(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const V={date:Z({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Z({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Z({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var K={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function tt(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,d=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[d]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const et={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:tt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:tt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:tt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:tt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:tt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function nt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,d=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?at(u,(function(t){return t.test(d)})):rt(u,(function(t){return t.test(d)}));i=t.valueCallback?t.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(d.length);return{value:i,rest:c}}}function rt(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function at(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var ot,it={ordinalNumber:(ot={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(ot.matchPattern);if(!n)return null;var r=n[0],a=t.match(ot.parsePattern);if(!a)return null;var o=ot.valueCallback?ot.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:nt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:nt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:nt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:nt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:nt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const dt={code:"en-US",formatDistance:function(t,e,n){var r,a=_[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:V,formatRelative:function(t,e,n,r){return K[t]},localize:et,match:it,options:{weekStartsOn:0,firstWeekContainsDate:1}};var ut=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,st=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ct=/^'([^]*?)'?$/,lt=/''/g,mt=/[a-zA-Z]/;function ht(t){var e=t.match(ct);return e?e[1].replace(lt,"'"):t}function ft(){const n=document.getElementById("content"),r=document.createElement("div");r.id="formContainer",r.style.visibility="visible";const a=document.createElement("form");a.classList.add("form");const o=document.createElement("label");o.setAttribute("for","project"),o.innerHTML="Project : ";const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","project"),a.appendChild(o),a.appendChild(i);const d=document.createElement("label");d.setAttribute("for","title"),d.innerHTML="Task : ";const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","title"),a.appendChild(d),a.appendChild(c);const f=document.createElement("label");f.setAttribute("for","description"),f.innerHTML="Description : ";const p=document.createElement("input");p.setAttribute("id","description"),p.setAttribute("type","text"),a.appendChild(f),a.appendChild(p);const v=document.createElement("label");v.setAttribute("for","dueDate"),v.innerHTML="Due : ";const b=document.createElement("input");b.setAttribute("id","dueDate"),b.setAttribute("type","date"),a.appendChild(v),a.appendChild(b);const w=document.createElement("label");w.setAttribute("for","priority"),w.innerHTML="Priority : ";const y=document.createElement("select");y.setAttribute("id","priority");const C=document.createElement("option");C.value="High",C.text="High",y.appendChild(C);const M=document.createElement("option");M.value="Medium",M.text="Medium",y.appendChild(M);const x=document.createElement("option");x.value="Low",x.text="Low",y.appendChild(x),a.appendChild(w),a.appendChild(y);const E=document.createElement("label");E.setAttribute("for","notes"),E.innerHTML="Notes : ";const L=document.createElement("textarea");L.setAttribute("id","notes"),a.appendChild(E),a.appendChild(L);const k=document.createElement("button");k.classList.add("submitButton"),k.innerHTML="Submit",k.addEventListener("click",(()=>{let t=function(t,e,n){var r,a,o,i,d,u,c,f,p,v,b,w,y,C,M,x,E,L;s(2,arguments);var k=String(e),D=T(),S=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:D.locale)&&void 0!==r?r:dt,P=h(null!==(o=null!==(i=null!==(d=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==d?d:D.firstWeekContainsDate)&&void 0!==i?i:null===(p=D.locale)||void 0===p||null===(v=p.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==o?o:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=h(null!==(b=null!==(w=null!==(y=null!==(C=null==n?void 0:n.weekStartsOn)&&void 0!==C?C:null==n||null===(M=n.locale)||void 0===M||null===(x=M.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==y?y:D.weekStartsOn)&&void 0!==w?w:null===(E=D.locale)||void 0===E||null===(L=E.options)||void 0===L?void 0:L.weekStartsOn)&&void 0!==b?b:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var H=l(t);if(!m(H))throw new RangeError("Invalid time value");var W=Q(H),N=g(H,W),Y={firstWeekContainsDate:P,weekStartsOn:U,locale:S,_originalDate:H};return k.match(st).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,z[e])(t,S.formatLong):t})).join("").match(ut).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return ht(r);var o=B[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!$(r)||J(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!X(r)||J(r,e,String(t)),o(N,r,S.localize,Y);if(a.match(mt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("")}(new Date(`${b.value}`),"dd-MM-yy");console.log(t),function(t,n,r,a,o,i){let d=function(t,e,n,r,a){return{title:t,description:e,dueDate:n,priority:r,notes:a}}(n,r,a,o,i);for(let n=0;n<Pt.length;n++)if(Pt[n].title==t)return Pt[n].todoList.push(d),console.log(Pt[n].todoList),u(),ft(),e(Pt[n]),void(St=Pt[n]);let s={title:t,todoList:[]};s.todoList.push(d),console.log(s.todoList),Pt.push(s),u(),ft(),e(s),St=s}(i.value,c.value,p.value,t,y.value,L.value)})),r.appendChild(a),r.appendChild(k);const D=document.getElementById("todoListContainer");D?n.insertBefore(r,D):(n.appendChild(r),t())}var gt=n(701),pt=n.n(gt),vt=n(236),bt=n.n(vt),wt=n(80),yt=n.n(wt),Ct=n(850),Tt=n.n(Ct),Mt=n(182),xt=n.n(Mt),Et=n(213),Lt=n.n(Et),kt=n(426),Dt={};Dt.styleTagTransform=Lt(),Dt.setAttributes=Tt(),Dt.insert=yt().bind(null,"head"),Dt.domAPI=bt(),Dt.insertStyleElement=xt(),pt()(kt.Z,Dt),kt.Z&&kt.Z.locals&&kt.Z.locals;let St=[],Pt=[];localStorage.getItem("projects")&&(Pt=JSON.parse(localStorage.getItem("projects"))),function(){const t=document.getElementById("header"),e=document.createElement("h1");e.classList.add("header"),e.textContent="Todo List",t.appendChild(e)}(),u(),t(),ft(),document.getElementById("footer").innerHTML="<p>footer goes here<p>"})()})();