(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".form {\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    gap: 10px;\n}\n\n.submitButton {\n    grid-column: span 2;\n    height: 30px;\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var u=n(i[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};(()=>{n.d(r,{Z:()=>h});var e=n(379),t=n.n(e),o=n(795),i=n.n(o),a=n(569),c=n.n(a),s=n(565),d=n.n(s),u=n(216),l=n.n(u),p=n(589),m=n.n(p),f=n(426),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const h=[];!function(){const e=document.getElementById("header"),t=document.createElement("h1");t.classList.add("header"),t.textContent="Todo List",e.appendChild(t)}(),function(){const e=document.getElementById("content"),t=document.createElement("form");t.classList.add("form");const n=document.createElement("label");n.setAttribute("for","title"),n.innerHTML="Task : ";const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","title"),t.appendChild(n),t.appendChild(r);const o=document.createElement("label");o.setAttribute("for","description"),o.innerHTML="Description : ";const i=document.createElement("input");i.setAttribute("id","description"),i.setAttribute("type","text"),t.appendChild(o),t.appendChild(i);const a=document.createElement("label");a.setAttribute("for","dueDate"),a.innerHTML="Due : ";const c=document.createElement("input");c.setAttribute("id","dueDate"),c.setAttribute("type","datetime-local"),t.appendChild(a),t.appendChild(c);const s=document.createElement("label");s.setAttribute("for","priority"),s.innerHTML="Priority : ";const d=document.createElement("select");d.setAttribute("id","priority");const u=document.createElement("option");u.value="High",u.text="High",d.appendChild(u);const l=document.createElement("option");l.value="Medium",l.text="Medium",d.appendChild(l);const p=document.createElement("option");p.value="Low",p.text="Low",d.appendChild(p),t.appendChild(s),t.appendChild(d);const m=document.createElement("label");m.setAttribute("for","notes"),m.innerHTML="Notes : ";const f=document.createElement("textarea");f.setAttribute("id","notes"),t.appendChild(m),t.appendChild(f);const v=document.createElement("button");v.classList.add("submitButton"),v.innerHTML="Submit",v.addEventListener("click",(()=>{h.push({title:r.value,description:i.value,dueDate:c.value,priority:d.value,notes:f.value}),console.log(h),function(){const e=document.getElementById("content"),t=document.getElementById("todoListContainer");t.innerHTML="",t.classList.add("todoListContainer");for(let e=0;e<h.length;e++){let n=document.createElement("div");n.innerHTML=`<p>${h[e].title}</p>`,n.innerHTML+=`<p>${h[e].description}</p>`,n.innerHTML+=`<p>${h[e].dueDate}</p>`,n.innerHTML+=`<p>${h[e].priority}</p>`,n.innerHTML+=`<p>${h[e].notes}</p>`,t.appendChild(n)}e.appendChild(t)}()})),e.appendChild(t),e.appendChild(v)}(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="todoListContainer",e.appendChild(t)}()})()})();