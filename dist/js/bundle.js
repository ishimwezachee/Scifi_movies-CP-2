(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: yellow;\r\n  padding-left: 20px;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n}\r\n\r\nul li {\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  margin-left: 20px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\nul li a:hover {\r\n  color: rgb(55, 55, 105);\r\n  text-decoration: underline;\r\n}\r\n\r\nmain {\r\n  height: 80vh;\r\n}\r\n\r\nfooter {\r\n  background-color: rgb(55, 55, 105);\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\nfooter p {\r\n  color: white;\r\n  padding: 20px;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.card {\r\n  background-color: red;\r\n  border: 2px solid white;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  padding-top: 100px;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n}\r\n\r\n.close {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 44px;\r\n  font-weight: bold;\r\n  margin-right: 15px;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};function h(n){return n.length}f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=document.querySelector(".cards"),g=document.querySelector("body"),y=document.getElementById("myModal"),b=document.querySelector(".content"),x=document.querySelector(".space"),w="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6AClVl2oXlI9tDJKRbp5/comments",S=async()=>{const n=await fetch("https://api.tvmaze.com/search/shows?q=a");return await n.json()};S().then((n=>{x.innerText=`(${h(n)})`})),S().then((n=>n.forEach((n=>{v.innerHTML+=`\n           <div class="card">\n           <img src="${n.show.image.medium}" alt="image">\n           <div class="name-icon">\n               <P class="name">${n.show.name}</P>\n               <div>\n               <i id="${n.show.id}" class="far fa-heart likes"></i>\n               <p><span id="${n.show.id}" class="number">0</span> likes</p>\n               </div>\n           </div>\n           <button class="comments" id="${n.show.id}">Comments</button>\n           </div>\n            `}))));const C=n=>{(async n=>{const e=await fetch(`${w}?item_id=${n}`);return await e.json()})(n).then((n=>{const e=document.querySelector(".comment-list");void 0===h(n)?e.innerHTML="No Comments":(e.innerHTML=`<h4>Comments(${h(n)})</h4>`,n.forEach((n=>{e.innerHTML+=`\n                  <ul>\n                  <li>${n.username}</li>\n                  <li>${n.comment}</li>\n                  </ul>\n                  `})))}))},T=async n=>{const e=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6AClVl2oXlI9tDJKRbp5/likes");n(await e.json())};window.addEventListener("load",(()=>{T((n=>{n.forEach((n=>{document.querySelectorAll(".number").forEach((e=>{e.id.toString()===n.item_id.toString()&&(e.textContent=n.likes)}))}))}))})),g.addEventListener("click",(n=>{var e;"comments"===n.target.className&&(y.style.display="block",e=n.target.id,C(e),S().then((n=>{n.forEach((n=>{n.show.id.toString()===e.toString()&&(b.innerHTML=`\n           <div class="card">\n           <img src="${n.show.image.medium}" alt="">\n           <span>Summary:</span>\n           <p>${n.show.summary}</p>\n           <span>language:</span>\n           <p>${n.show.language}</p>\n\n           <div class="name-icon">\n               <p class="name">${n.show.name}</p>\n               <i class="far fa-heart"></i>\n               <div>\n               <input type="hidden" name="id" id="id" value="${n.show.id}">\n               <div class="comment-list">\n               <p>loading</p>\n              </div>\n               <div>\n               <input type="text" name="name" id="name" placeholder="Name">\n               <input type="text" name="commentText" id="commentText" placeholder="Comments">\n               <button class="add-comments">Add Comments</button>\n               </div>\n          \n           </div>\n           </div>\n           </div>\n            `)}))}))),"close"===n.target.className&&(y.style.display="none"),n.target===y&&(y.style.display="none"),"far fa-heart likes"===n.target.className&&(n=>{S().then((e=>{e.forEach((e=>{e.show.id.toString()===n.toString()&&((async n=>{await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6AClVl2oXlI9tDJKRbp5/likes",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({item_id:n})})})(n),T((e=>{e.forEach((e=>{e.item_id.toString()===n.toString()&&(document.getElementById(n.toString()).parentElement.lastElementChild.firstElementChild.textContent=e.likes)}))})))}))}))})(n.target.id),"add-comments"===n.target.className&&(async n=>{await fetch(w,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({item_id:n.id,username:n.name,comment:n.text})}),C(n.id)})({name:document.querySelector("#name").value,text:document.querySelector("#commentText").value,id:document.querySelector("#id").value})}))})()})();