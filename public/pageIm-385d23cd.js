import{a as o,e as t,g as r,_ as a,l as s}from"./index-38a3579a.js";import{P as l}from"./page-29e1df41.js";const n=()=>(o.managers.appStateManager.pushToState("authState",{_:"authStateSignedIn"}),t.requestedServerLanguage||t.getCacheLangPack().then(e=>{e.local&&t.getLangPack(e.lang_code)}),i.pageEl.style.display="",r(),Promise.all([a(()=>import("./appDialogsManager-468061c2.js"),["./appDialogsManager-468061c2.js","./avatar-39e2d6e2.js","./button-62481d18.js","./index-38a3579a.js","./index-a90fa790.css","./page-29e1df41.js","./wrapEmojiText-49d5a7a1.js","./scrollable-a6f972b9.js","./putPreloader-d6b4dbbf.js","./htmlToSpan-4417b0ea.js","./countryInputField-c238658d.js","./textToSvgURL-c6ebb454.js","./toggleDisability-6f5940d7.js","./codeInputField-9426b43f.js","./appDialogsManager-e5cfe6fb.css"],import.meta.url),s(),"requestVideoFrameCallback"in HTMLVideoElement.prototype?Promise.resolve():a(()=>import("./requestVideoFrameCallbackPolyfill-d3040205.js"),[],import.meta.url)]).then(([e])=>{e.default.start(),setTimeout(()=>{document.getElementById("auth-pages").remove()},1e3)})),i=new l("page-chats",!1,n);export{i as default};
//# sourceMappingURL=pageIm-385d23cd.js.map