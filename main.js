(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(402),r=n.n(o),i=n(352),d=n.n(i)()(r());d.push([e.id,"* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n.form {\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    gap: 10px;\n}\n\n.submitButton {\n    height: 30px;\n}\n\nhtml,\nbody {\n    margin: 0;\n    \n}\n\nbody {\n    height: 100vh; \n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 2fr;\n}\n\n.sidebar {\n    grid-row: span 2;\n    \n}\n\n.sidebar,\n#footer,\n#header {\n    background-color: cadetblue;\n}\n\nfooter {\n    margin-bottom: 0;\n}\n\n.table {\n    width: 100%;\n    margin: 0;\n}\n\n.tablerow {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\ntr {\n    border: 1px solid black;\n    height: 2em;\n    margin: 0;\n    margin-top: -1px;\n    display: flex;\n}\n\ntd {\n    flex:1;\n    text-align: center;\n    align-self: center;\n}",""]);const a=d},352:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&d[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},402:e=>{e.exports=function(e){return e[1]}},701:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},d=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:h,references:1})}d.push(u)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=n(i[d]);t[a].references--}for(var c=o(e,r),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=c}}},80:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},182:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},850:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},236:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},213:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o={};(()=>{function e(){const e=document.getElementById("formContainer"),t=document.getElementById("todoListContainer"),n=document.getElementById("content");e?(n.removeChild(e),t.style.gridRow="span 2"):(c(),t.style.gridRow="span 1")}function t(){const t=document.getElementById("content"),n=document.createElement("div");t.innerHTML="",n.id="sidebar",n.classList.add("sidebar"),n.innerHTML="<p>This is sidebar</p>";const o=document.createElement("a");o.id="toggle",o.innerHTML="Add new task",o.href="#",o.addEventListener("click",e),n.appendChild(o);for(let e=0;e<T.length;e++){const t=document.createElement("ul");t.textContent=`${T[e].title}`;for(let n=0;n<T[e].todoList.length;n++){const o=document.createElement("li");o.textContent=`${T[e].todoList[n].title}`,t.appendChild(o)}n.appendChild(t)}t.appendChild(n)}function r(e,n){const o=document.getElementById("content");o.innerHTML="",t(),e.todoList[n];const r=document.createElement("div"),i=document.createElement("p"),a=document.createElement("p"),c=document.createElement("p"),l=document.createElement("p"),s=document.createElement("p"),u=document.createElement("button");i.textContent=`Task: ${e.todoList[n].title}`,a.textContent=`Description: ${e.todoList[n].description}`,c.textContent=`Due date: ${e.todoList[n].dueDate}`,l.textContent=`Priority: ${e.todoList[n].priority}`,s.textContent=`Notes: ${e.todoList[n].notes}`,u.textContent="See tasklist",u.addEventListener("click",(()=>{d(x)})),r.appendChild(i),r.appendChild(a),r.appendChild(c),r.appendChild(l),r.appendChild(s),r.appendChild(u),o.appendChild(r)}function i(e){project.todoList.splice(e,1),d()}function d(e){const n=document.getElementById("content");t(),c();const o=document.getElementById("todoListContainer");o.innerHTML="",o.classList.add("todoListContainer");const d=document.createElement("table"),a=document.createElement("tr"),l=document.createElement("td"),s=document.createElement("td"),u=document.createElement("td"),p=document.createElement("td"),m=document.createElement("td"),h=document.createElement("td");d.classList.add("table"),l.innerHTML="Task",s.innerHTML="Description",u.innerHTML="Due date",p.innerHTML="Priority",m.innerHTML="Notes",h.innerHTML="Actions",a.appendChild(l),a.appendChild(u),a.appendChild(h),d.appendChild(a),o.appendChild(d),a.classList.add("tablerow");for(let t=0;t<e.todoList.length;t++){let n=document.createElement("tr"),o=document.createElement("td"),a=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),s=document.createElement("td"),u=document.createElement("td"),p=document.createElement("button"),m=document.createElement("button");p.innerHTML="+",m.innerHTML="x",o.textContent=`${e.todoList[t].title}`,a.textContent=`${e.todoList[t].description}`,c.textContent=`${e.todoList[t].dueDate}`,l.textContent=`${e.todoList[t].priority}`,s.textContent=`${e.todoList[t].notes}`,p.addEventListener("click",(()=>r(e,t))),m.addEventListener("click",(()=>i(e))),u.appendChild(p),u.appendChild(m),n.appendChild(o),n.appendChild(c),n.appendChild(u),"High"==l.textContent?n.style.backgroundColor="red":"Medium"==l.textContent?n.style.backgroundColor="yellow":n.style.backgroundColor="green",d.appendChild(n)}o.appendChild(d),n.appendChild(o)}function a(){const e=document.getElementById("content"),t=document.createElement("div");t.id="todoListContainer",e.appendChild(t)}function c(){const e=document.getElementById("content"),n=document.createElement("div");n.id="formContainer",n.style.visibility="visible";const o=document.createElement("form");o.classList.add("form");const r=document.createElement("label");r.setAttribute("for","project"),r.innerHTML="Project : ";const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","project"),o.appendChild(r),o.appendChild(i);const l=document.createElement("label");l.setAttribute("for","title"),l.innerHTML="Task : ";const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("id","title"),o.appendChild(l),o.appendChild(s);const u=document.createElement("label");u.setAttribute("for","description"),u.innerHTML="Description : ";const p=document.createElement("input");p.setAttribute("id","description"),p.setAttribute("type","text"),o.appendChild(u),o.appendChild(p);const m=document.createElement("label");m.setAttribute("for","dueDate"),m.innerHTML="Due : ";const h=document.createElement("input");h.setAttribute("id","dueDate"),h.setAttribute("type","date"),o.appendChild(m),o.appendChild(h);const f=document.createElement("label");f.setAttribute("for","priority"),f.innerHTML="Priority : ";const C=document.createElement("select");C.setAttribute("id","priority");const v=document.createElement("option");v.value="High",v.text="High",C.appendChild(v);const b=document.createElement("option");b.value="Medium",b.text="Medium",C.appendChild(b);const g=document.createElement("option");g.value="Low",g.text="Low",C.appendChild(g),o.appendChild(f),o.appendChild(C);const E=document.createElement("label");E.setAttribute("for","notes"),E.innerHTML="Notes : ";const y=document.createElement("textarea");y.setAttribute("id","notes"),o.appendChild(E),o.appendChild(y);const L=document.createElement("button");L.classList.add("submitButton"),L.innerHTML="Submit",L.addEventListener("click",(()=>{console.log("success"),function(e,n,o,r,i,a){let l=function(e,t,n,o,r){return{title:e,description:t,dueDate:n,priority:o,notes:r}}(n,o,r,i,a);for(let n=0;n<T.length;n++)if(T[n].title==e)return T[n].todoList.push(l),console.log(T[n].todoList),t(),c(),d(T[n]),void(x=T[n]);let s={title:e,todoList:[]};s.todoList.push(l),console.log(s.todoList),T.push(s),t(),c(),d(s),x=s}(i.value,s.value,p.value,h.value,C.value,y.value)})),n.appendChild(o),n.appendChild(L);const M=document.getElementById("todoListContainer");M?e.insertBefore(n,M):(e.appendChild(n),a())}n.d(o,{q:()=>T,L:()=>x});var l=n(701),s=n.n(l),u=n(236),p=n.n(u),m=n(80),h=n.n(m),f=n(850),C=n.n(f),v=n(182),b=n.n(v),g=n(213),E=n.n(g),y=n(426),L={};L.styleTagTransform=E(),L.setAttributes=C(),L.insert=h().bind(null,"head"),L.domAPI=p(),L.insertStyleElement=b(),s()(y.Z,L),y.Z&&y.Z.locals&&y.Z.locals;let x=[],T=[];!function(){const e=document.getElementById("header"),t=document.createElement("h1");t.classList.add("header"),t.textContent="Todo List",e.appendChild(t)}(),t(),a(),c(),document.getElementById("footer").innerHTML="<p>footer goes here<p>"})()})();