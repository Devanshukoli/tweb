(this.webpackJsonp=this.webpackJsonp||[]).push([[19],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));function i(e,t){const n=""["".length-1]||"";let i;switch(e._){case"inputPhotoFileLocation":i=["photo",""[0],e.id,e.thumb_size].filter(Boolean).join("_");break;case"inputDocumentFileLocation":i=["document",""[0],e.id,e.thumb_size].filter(Boolean).join("_");break;case"inputPeerPhotoFileLocation":i=["peerPhoto",e.photo_id,e.pFlags.big?"big":"small"].join("_");break;case"inputStickerSetThumb":i=["stickerSetThumb",e.stickerset.id||e.stickerset.short_name||e.stickerset.emoticon||e.stickerset._,e.thumb_version].join("_");break;case"inputFileLocation":i=e.volume_id+"_"+e.local_id;break;case"inputWebFileLocation":i=["webFile",e.url].join("_");break;default:console.error("Unrecognized location:",e),i=""}return i+(n?"."+n:n)}function s(e,t){return"/"+e+"/"+encodeURIComponent(JSON.stringify(t))}},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(15),s=n(0);function o(e){if("Enter"===e.key&&!s.IS_MOBILE&&!e.isComposing){if("enter"===i.default.settings.sendShortcut){if(e.shiftKey||e.ctrlKey||e.metaKey)return;return!0}{const t=s.IS_APPLE?e.metaKey:e.ctrlKey;if(e.shiftKey||(s.IS_APPLE?e.ctrlKey:e.metaKey))return;if(t)return!0}}return!1}},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(91);function s(e){return Object(i.a)(e,"readAsDataURL")}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(66);var s=function(e,t){let n,i,s,o={},a=0,r=0,c=0,l=0,d=0;function h(){e.classList.add("crop-blur"),e.draggable=!1,s=new Image,s.src=e.src,s.draggable=!1,s.classList.add("crop-overlay-image"),t||(t=document.createElement("canvas")),n=document.createElement("div"),n.classList.add("crop-component"),i=document.createElement("div"),i.classList.add("crop-overlay");const o=document.createElement("div");o.classList.add("crop-overlay-color"),n.appendChild(i);e.parentNode.appendChild(n),n.appendChild(s),n.appendChild(e),n.appendChild(o),i.appendChild(s),s.style.maxWidth=e.width+"px",d=e.naturalWidth/e.offsetWidth;const a=e.offsetWidth/2-100,r=e.offsetHeight/2-100;u(200,200),p(a,r),m(a,r),i.addEventListener("mousedown",g,!1),i.addEventListener("touchstart",g,!1),i.addEventListener("wheel",b,!1),document.addEventListener("keypress",v,!1)}function u(e,t){c=e*d,l=t*d,i.style.width=e+"px",i.style.height=t+"px"}function p(e,t){r=t*d,a=e*d,s.style.top=-t+"px",s.style.left=-e+"px"}function m(e,t){i.style.top=t+"px",i.style.left=e+"px"}function f(e){e=e*Math.PI*2;let t,n,o,a,r=Math.floor(i.clientWidth+e),c=Math.floor(i.clientHeight+e),l=s.clientWidth,d=s.clientHeight;r<50||r>l||(t=i.offsetLeft-e/2,n=i.offsetTop-e/2,o=t+r,a=n+c,t<0&&(t=0),n<0&&(n=0),o>l||a>d||(u(r,r),p(t,n),m(t,n)))}function v(e){switch(e.preventDefault(),String.fromCharCode(e.charCode)){case"+":f(4);break;case"-":f(-4)}}function b(e){e.preventDefault(),f(e.deltaY>0?1:-1)}function g(e){e.preventDefault(),e.stopPropagation(),function(e){o.container_width=i.offsetWidth,o.container_height=i.offsetHeight,o.container_left=i.offsetLeft,o.container_top=i.offsetTop,o.mouse_x=(e.clientX||e.pageX||e.touches&&e.touches[0].clientX)+window.scrollX,o.mouse_y=(e.clientY||e.pageY||e.touches&&e.touches[0].clientY)+window.scrollY}(e),document.addEventListener("mousemove",y),document.addEventListener("touchmove",y),document.addEventListener("mouseup",w),document.addEventListener("touchend",w)}function w(e){e.preventDefault(),document.removeEventListener("mouseup",w),document.removeEventListener("touchend",w),document.removeEventListener("mousemove",y),document.removeEventListener("touchmove",y)}function y(e){let t,n,a,r,c={x:0,y:0};e.preventDefault(),e.stopPropagation(),c.x=e.pageX||e.touches&&e.touches[0].pageX,c.y=e.pageY||e.touches&&e.touches[0].pageY,t=c.x-(o.mouse_x-o.container_left),n=c.y-(o.mouse_y-o.container_top),a=i.offsetWidth,r=i.offsetHeight,t<0?t=0:t>s.offsetWidth-a&&(t=s.offsetWidth-a),n<0?n=0:n>s.offsetHeight-r&&(n=s.offsetHeight-r),p(t,n),m(t,n)}return e.complete?h():e.onload=h,{crop:function(){t.width=c,t.height=l,t.getContext("2d").drawImage(e,a,r,c,l,0,0,c,l)},removeHandlers:function(){i.removeEventListener("mousedown",g),i.removeEventListener("touchstart",g),i.removeEventListener("wheel",b),document.removeEventListener("mouseup",w),document.removeEventListener("touchend",w),document.removeEventListener("mousemove",y),document.removeEventListener("touchmove",y),document.removeEventListener("keypress",v),n.remove(),i.remove(),s.remove()}}},o=n(53),a=n(16),r=n(30),c=n(120);class l extends o.b{constructor(){super("popup-avatar",null,{closable:!0,withConfirm:!0}),this.image=new Image,this.cropper={crop:()=>{},removeHandlers:()=>{}},this.h6=document.createElement("h6"),Object(a._i18n)(this.h6,"Popup.Avatar.Title"),this.btnClose.classList.remove("btn-icon"),this.header.append(this.h6),this.cropContainer=document.createElement("div"),this.cropContainer.classList.add("crop"),this.cropContainer.append(this.image),this.input=document.createElement("input"),this.input.type="file",this.input.style.display="none",this.listenerSetter.add(this.input)("change",e=>{const t=e.target.files[0];t&&Object(c.a)(t).then(e=>{this.image=new Image,this.cropContainer.append(this.image),this.image.src=e,this.image.onload=()=>{this.show(),this.cropper=s(this.image,this.canvas),this.input.value=""}})},!1),this.btnConfirm.className="btn-primary btn-color-primary btn-circle btn-crop btn-icon tgico-check z-depth-1",Object(r.b)(this.btnConfirm,()=>{this.cropper.crop(),this.hide(),this.canvas.toBlob(e=>{this.blob=e,this.darkenCanvas(),this.resolve()},"image/jpeg",1)},{listenerSetter:this.listenerSetter}),this.container.append(this.cropContainer,this.btnConfirm,this.input),this.addEventListener("closeAfterTimeout",()=>{this.cropper.removeHandlers(),this.image&&this.image.remove()})}resolve(){this.onCrop(()=>i.a.upload(this.blob))}open(e,t){this.canvas=e,this.onCrop=t,this.input.click()}darkenCanvas(){let e=this.canvas.getContext("2d");e.fillStyle="rgba(0, 0, 0, 0.3)",e.fillRect(0,0,this.canvas.width,this.canvas.height)}}},25:function(e,t,n){"use strict";n.r(t);var i=n(34),s=n(37),o=n(36),a=n(133),r=n(17),c=n(16),l=n(33),d=n(31),h=n(97),u=n(73),p=n(8),m=n(35);let f=null;const v=new u.a("page-signUp",!0,()=>Promise.all([n.e(7),n.e(5)]).then(n.bind(null,68)).then(e=>{const t=new h.a({className:"page-signUp",withInputWrapper:!0,titleLangKey:"YourName",subtitleLangKey:"Login.Register.Subtitle"});t.imageDiv.classList.add("avatar-edit"),t.title.classList.add("fullName");const r=document.createElement("canvas");r.id="canvas-avatar",r.className="avatar-edit-canvas";const u=document.createElement("span");u.className="tgico tgico-cameraadd",t.imageDiv.append(r,u);const v=e.default;let b;t.imageDiv.addEventListener("click",()=>{(new a.a).open(r,e=>{b=e})});const g=e=>{const n=w.value||"",i=y.value||"",s=n||i?(n+" "+i).trim():"";s?Object(m.a)(t.title,d.b.wrapEmojiText(s)):Object(m.a)(t.title,Object(c.i18n)("YourName"))};const w=new s.b({label:"FirstName",maxLength:70}),y=new s.b({label:"LastName",maxLength:64}),E=Object(i.a)("btn-primary btn-color-primary"),L=new c.default.IntlElement({key:"StartMessaging"});return E.append(L.element),t.inputWrapper.append(w.container,y.container,E),w.input.addEventListener("input",g),y.input.addEventListener("input",g),E.addEventListener("click",(function(e){if(w.input.classList.contains("error")||y.input.classList.contains("error"))return!1;if(!w.value.length)return w.input.classList.add("error"),!1;this.disabled=!0;const t=w.value.trim(),i=y.value.trim(),s={phone_number:f.phone_number,phone_code_hash:f.phone_code_hash,first_name:t,last_name:i};L.update({key:"PleaseWait"});const a=Object(o.f)(this);l.a.invokeApi("auth.signUp",s).then(e=>{switch(e._){case"auth.authorization":l.a.setUser(e.user),new Promise((e,t)=>{if(!b)return e();b().then(n=>{v.uploadProfilePhoto(n).then(e,t)},t)}).finally(()=>{n.e(4).then(n.bind(null,19)).then(e=>{e.default.mount()})});break;default:L.update({key:e._}),this.removeAttribute("disabled"),a.remove()}}).catch(e=>{this.removeAttribute("disabled"),a.remove(),e.type,L.update({key:e.type})})})),Object(p.a)(),new Promise(e=>{window.requestAnimationFrame(e)})}),e=>{f=e,r.default.pushToState("authState",{_:"authStateSignUp",authCode:e})});t.default=v},53:function(e,t,n){"use strict";n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return E}));var i=n(15),s=n(18),o=n(65),a=n(74),r=n(16),c=n(6),l=n(8),d=n(67),h=n(30),u=n(119),p=n(5),m=n(47),f=n(41),v=n(99);const b=document.body;let g=b;const w=()=>{g=Object(v.c)()||b,y.reAppend()};Object(v.a)(b,w);class y extends m.a{constructor(e,t,n={}){super(!1),this.buttons=t,this.element=document.createElement("div"),this.container=document.createElement("div"),this.header=document.createElement("div"),this.title=document.createElement("div"),this.onEscape=()=>!0,this.hide=()=>{a.a.backByItem(this.navigationItem)},this.destroy=()=>{this.dispatchEvent("close"),this.element.classList.add("hiding"),this.element.classList.remove("active"),this.listenerSetter.removeAll(),this.withoutOverlay||(i.default.isOverlayActive=!1),a.a.removeItem(this.navigationItem),this.navigationItem=void 0,Object(f.e)(y.POPUPS,this),w(),setTimeout(()=>{this.element.remove(),this.dispatchEvent("closeAfterTimeout"),this.cleanup(),this.withoutOverlay||o.a.checkAnimations(!1)},150)},this.element.classList.add("popup"),this.element.className="popup"+(e?" "+e:""),this.container.classList.add("popup-container","z-depth-1"),this.header.classList.add("popup-header"),this.title.classList.add("popup-title"),this.header.append(this.title),this.listenerSetter=new d.a,this.confirmShortcutIsSendShortcut=n.confirmShortcutIsSendShortcut,n.closable&&(this.btnClose=document.createElement("span"),this.btnClose.classList.add("btn-icon","popup-close","tgico-close"),this.header.prepend(this.btnClose),Object(h.b)(this.btnClose,this.hide,{listenerSetter:this.listenerSetter,once:!0})),this.withoutOverlay=n.withoutOverlay,this.withoutOverlay&&this.element.classList.add("no-overlay"),n.overlayClosable&&Object(h.b)(this.element,e=>{Object(c.a)(e.target,"popup-container")||this.hide()},{listenerSetter:this.listenerSetter}),n.withConfirm&&(this.btnConfirm=document.createElement("button"),this.btnConfirm.classList.add("btn-primary","btn-color-primary"),!0!==n.withConfirm&&this.btnConfirm.append(Object(r.i18n)(n.withConfirm)),this.header.append(this.btnConfirm),Object(s.ripple)(this.btnConfirm)),this.container.append(this.header),n.body&&(this.body=document.createElement("div"),this.body.classList.add("popup-body"),this.container.append(this.body));let l=this.btnConfirm;if(null==t?void 0:t.length){const e=this.buttonsEl=document.createElement("div");e.classList.add("popup-buttons"),2===t.length&&e.classList.add("popup-buttons-row");const n=t.map(e=>{const t=document.createElement("button");return t.className="btn"+(e.isDanger?" danger":" primary"),Object(s.ripple)(t),e.text?t.innerHTML=e.text:t.append(Object(r.i18n)(e.langKey,e.langArgs)),Object(h.b)(t,()=>{e.callback&&e.callback(),this.destroy()},{listenerSetter:this.listenerSetter,once:!0}),e.element=t});if(!l&&2===t.length){const e=t.find(e=>!e.isCancel);e&&(l=e.element)}e.append(...n),this.container.append(e)}this.btnConfirmOnEnter=l,this.element.append(this.container),y.POPUPS.push(this)}show(){this.navigationItem={type:"popup",onPop:this.destroy,onEscape:this.onEscape},a.a.pushItem(this.navigationItem),Object(l.a)(),g.append(this.element),this.element.offsetWidth,this.element.classList.add("active"),this.withoutOverlay||(i.default.isOverlayActive=!0,o.a.checkAnimations(!0)),this.btnConfirmOnEnter&&setTimeout(()=>{this.listenerSetter.add(document.body)("keydown",e=>{(this.confirmShortcutIsSendShortcut?Object(u.a)(e):"Enter"===e.key)&&(Object(h.d)(this.btnConfirmOnEnter),Object(p.a)(e))})},0)}static reAppend(){this.POPUPS.forEach(e=>{const{element:t,container:n}=e,i=t.parentElement;i&&i!==g&&g!==n&&g.append(t)})}static getPopup(e){return this.POPUPS.find(t=>t instanceof e)}}y.POPUPS=[];const E=e=>(e.find(e=>e.isCancel)||e.push({langKey:"Cancel",isCancel:!0}),e)},66:function(e,t,n){"use strict";var i=n(15),s=n(33),o=n(48),a=n(108),r=n(103),c=n(29);const l=new class{constructor(){this.cacheStorage=new r.a("cachedFiles"),this.downloads={},this.progress={},this.progressCallbacks={},this.uploadId=0,this.thumbsCache={photo:{},document:{}},i.default.addEventListener("download_progress",e=>{const t=e;this.progress[t.fileName]=t;const n=this.progressCallbacks[t.fileName];n&&n.forEach(e=>e(t));const i=this.downloads[t.fileName];i&&i.notifyAll(t)})}getNewDeferred(e){const t=Object(o.a)();return t.cancel=()=>{const n=new Error("Download canceled");n.name="AbortError",s.a.cancelDownload(e),t.reject(n),t.cancel=()=>{}},t.finally(()=>{delete this.progress[e],delete this.progressCallbacks[e]}),t.catch(()=>{this.clearDownload(e)}),this.downloads[e]=t}clearDownload(e){delete this.downloads[e]}fakeDownload(e,t){const n=this.getNewDeferred(e);return"string"==typeof t?fetch(t).then(e=>e.blob()).then(e=>n.resolve(e)):n.resolve(t),n}download(e){const t=Object(a.a)(e.location,{fileName:e.fileName});if(this.downloads.hasOwnProperty(t))return this.downloads[t];const n=this.getNewDeferred(t),i=e=>{n.reject(e)};return(()=>{if(!s.a.worker||e.onlyCache){const o=this.cacheStorage.getFile(t).then(t=>{if(t.size<e.size)throw"wrong size";n.resolve(t)});return e.onlyCache?o.catch(i):o.catch(()=>s.a.downloadFile(e).then(n.resolve,i))}s.a.downloadFile(e).then(n.resolve,i)})(),n}upload(e,t){if(!t){const n=null==e?void 0:e.type;if(n){const e=this.uploadId+++"."+n.split("/")[1];t=["image/jpeg","image/png","image/bmp"].indexOf(n)>=0?"photo"+e:0===n.indexOf("audio/")||["video/ogg"].indexOf(n)>=0?"audio"+e:0===n.indexOf("video/")?"video"+e:"document"+e}else t="upload-"+this.uploadId++}const n=this.getNewDeferred(t);return s.a.uploadFile({file:e,fileName:t}).then(n.resolve,n.reject),n.finally(()=>{this.clearDownload(t)}),n}getDownload(e){return this.downloads[e]}addProgressCallback(e,t){var n;const i=this.progress[e];(null!==(n=this.progressCallbacks[e])&&void 0!==n?n:this.progressCallbacks[e]=[]).push(t),i&&t(i)}createDownloadAnchor(e,t,n){const i=document.createElement("a");i.href=e,i.download=t,i.target="_blank",i.style.position="absolute",i.style.top="1px",i.style.left="1px",document.body.append(i);try{var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),i.dispatchEvent(s)}catch(t){console.error("Download click error",t);try{i.click()}catch(t){window.open(e,"_blank")}}setTimeout(()=>{i.remove(),n&&n()},100)}downloadToDisc(e,t){const n=this.download(e);return n.then(e=>{const n=URL.createObjectURL(e);this.createDownloadAnchor(n,t,()=>{URL.revokeObjectURL(n)})}),n}getCacheContext(e,t="full"){var n,i;const s=null!==(n=this.thumbsCache[e._][e.id])&&void 0!==n?n:this.thumbsCache[e._][e.id]={};return null!==(i=s[t])&&void 0!==i?i:s[t]={downloaded:0,url:""}}};c.a&&(c.a.appDownloadManager=l),t.a=l},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));class i{constructor(){this.listeners=new Set}add(e){return(t,n,i)=>{const s={element:e,event:t,callback:n,options:i};return this.addManual(s),s}}addManual(e){var t;e.element.addEventListener(e.event,e.callback,e.options),(null===(t=e.options)||void 0===t?void 0:t.once)&&(e.onceCallback=()=>{this.remove(e),e.onceFired=!0},e.element.addEventListener(e.event,e.onceCallback,e.options)),this.listeners.add(e)}remove(e){e.onceFired||(e.element.removeEventListener(e.event,e.callback,e.options),e.onceCallback&&e.element.removeEventListener(e.event,e.onceCallback,e.options)),this.listeners.delete(e)}removeManual(e,t,n,i){let s;for(const o of this.listeners)if(o.element===e&&o.event===t&&o.callback===n&&o.options===i){s=o;break}s&&this.remove(s)}removeAll(){this.listeners.forEach(e=>{this.remove(e)})}}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(16);class s{constructor(e){this.element=document.body.querySelector("."+e.className),this.container=document.createElement("div"),this.container.className="container center-align",this.imageDiv=document.createElement("div"),this.imageDiv.className="auth-image",this.title=document.createElement("h4"),e.titleLangKey&&this.title.append(Object(i.i18n)(e.titleLangKey)),this.subtitle=document.createElement("p"),this.subtitle.className="subtitle",e.subtitleLangKey&&this.subtitle.append(Object(i.i18n)(e.subtitleLangKey)),this.container.append(this.imageDiv,this.title,this.subtitle),e.withInputWrapper&&(this.inputWrapper=document.createElement("div"),this.inputWrapper.className="input-wrapper",this.container.append(this.inputWrapper)),this.element.append(this.container)}}},99:function(e,t,n){"use strict";function i(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function s(){document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function o(e,t,n){const i=n?n.add(e):e.addEventListener.bind(e);"webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange".split(" ").forEach(e=>{i(e,t,!1)})}function a(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement}function r(){return!!a()}n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r}))}}]);
//# sourceMappingURL=19.6b70c3b9d4a242c4e987.chunk.js.map